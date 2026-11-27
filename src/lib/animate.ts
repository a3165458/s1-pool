export interface AnimationOptions {
  duration?: number;
  delay?: number | ((index: number, total: number) => number);
  ease?: 'linear' | ((t: number) => number) | string;
  onComplete?: () => void;
}

export interface AnimationControls {
  finished: Promise<void>;
  stop: () => void;
}

function buildEasingString(ease: AnimationOptions['ease']): string {
  if (!ease || ease === 'linear') return 'linear';
  if (typeof ease === 'string') return ease;
  if (typeof ease === 'function') {
    const stops: string[] = [];
    const steps = 16;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const v = Number(ease(t).toFixed(4));
      stops.push(String(v));
    }
    return `linear(${stops.join(', ')})`;
  }
  return 'ease-out';
}

export function animateElement(
  target: Element | Element[] | NodeListOf<Element> | string | null | undefined,
  keyframesMap: Record<string, unknown>,
  options: AnimationOptions = {}
): AnimationControls {
  if (!target || typeof document === 'undefined') {
    options.onComplete?.();
    return { finished: Promise.resolve(), stop: () => {} };
  }

  const elements: Element[] =
    typeof target === 'string'
      ? Array.from(document.querySelectorAll(target))
      : target instanceof Element
        ? [target]
        : Array.from(target);

  if (elements.length === 0) {
    options.onComplete?.();
    return { finished: Promise.resolve(), stop: () => {} };
  }

  const durationMs = (options.duration ?? 0.3) * 1000;
  const easing = buildEasingString(options.ease);
  const animations: Animation[] = [];

  elements.forEach((el, idx) => {
    if (typeof el.animate !== 'function') return;
    const delaySec =
      typeof options.delay === 'function'
        ? options.delay(idx, elements.length)
        : (options.delay ?? 0);

    // Convert property-array map { opacity: [0, 1], transform: [a, b] } to WAAPI PropertyIndexedKeyframes
    const propFrames: PropertyIndexedKeyframes = {};
    for (const [key, val] of Object.entries(keyframesMap)) {
      propFrames[key] = Array.isArray(val) ? (val as string[] | number[]) : ([val] as string[] | number[]);
    }

    const anim = el.animate(propFrames, {
      duration: Math.max(0, durationMs),
      delay: Math.max(0, delaySec * 1000),
      easing,
      fill: 'both',
    });
    animations.push(anim);
  });

  const finished = Promise.all(
    animations.map((a) => a.finished.then(() => undefined).catch(() => undefined))
  ).then(() => {
    options.onComplete?.();
  });

  return {
    finished,
    stop: () => {
      for (const a of animations) {
        try {
          a.cancel();
        } catch {
          // ignore
        }
      }
    },
  };
}
