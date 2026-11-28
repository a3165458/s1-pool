// @ts-nocheck
// Module: pool — Account Pool Bird's-Eye Matrix, Virtualized Grid, Ghost Valley, Deploy & Mascot
import { ChartNoAxesColumnIncreasing, MoreHorizontal, TrendingUp } from 'lucide-react';
import { _, N, bt, sr, ut, kc, cr, dt, pl, ft } from '../lib/vendor-runtime';
import { yl, V, Bf, dp, fp, K, Zf, Rd, zd, ap, yp, W, U, El, Nf, q, Am, rp, Lm, J, bl, sp, up, hp, Im, uu, lu, cp, lp, ip, Rm, Jl, cu } from './core';
import { Ug, Vg, ph, wh, Th, Xg, bg, Eh, Kh, vg, Dh, Yg, $g, Oh, Nh, Ah, Mh, kh, dh, lh, uh, mh, qh } from './notices';
import { sv, q_, Ky, qy, Jy, OS, jS, PS, Lx, Nx, Ix, Fb, Db, Rb, Tb, Ub, bv, Sv, wv, pv, kb, fv, gv, Ob, hx, W_, U_, y_, $_, hv, uv, _v, Eb, wb, Uv, Nv, Pv, Fv, Vv, Av, Xv, $v } from './overview';
import { Hw, zw, PC, oC, Ew, Rw, QC } from './hierarchy';

var Gw={
  notice:`DeployClosed-module__notice___eXQKB`,mark:`DeployClosed-module__mark___KdBXv`,markDim:`DeployClosed-module__markDim___xNQef`,markFrom:`DeployClosed-module__markFrom___iUFap`,markTo:`DeployClosed-module__markTo___hQ-MN`,title:`DeployClosed-module__title___pmbqZ`,letter:`DeployClosed-module__letter___GDke-`,phrase:`DeployClosed-module__phrase___OFk9R`,salute:`DeployClosed-module__salute___7IZZu`,sign:`DeployClosed-module__sign___r03LZ`,exit:`DeployClosed-module__exit___VugCr`
},Kw={
  halo:`DeployDialog-module__halo___LuoF6`,form:`DeployDialog-module__form___C28Tk`,steps:`DeployDialog-module__steps___8eu5T`,step:`DeployDialog-module__step___7u3Fv`,marker:`DeployDialog-module__marker___RKrad`,field:`DeployDialog-module__field___hY98P`,label:`DeployDialog-module__label___GZbxf`,control:`DeployDialog-module__control___ngWga`,mono:`DeployDialog-module__mono___Pquv7`,hint:`DeployDialog-module__hint___C7V4-`,note:`DeployDialog-module__note___cw997`,problem:`DeployDialog-module__problem___6vI-e`,steady:`DeployDialog-module__steady___vBZ7D`,fetch:`DeployDialog-module__fetch___n8mMc`,link:`DeployDialog-module__link___TgDxW`,copy:`DeployDialog-module__copy___1G2EI`,refusal:`DeployDialog-module__refusal___lZm9E`,refusalHead:`DeployDialog-module__refusalHead___ZrCHt`,refusalSaid:`DeployDialog-module__refusalSaid___riVba`,refusalNote:`DeployDialog-module__refusalNote___qrqsn`,refusalCode:`DeployDialog-module__refusalCode___Vs3YU`,finish:`DeployDialog-module__finish___OBQdg`,outcome:`DeployDialog-module__outcome___TO19v`,outcomeMark:`DeployDialog-module__outcomeMark___T1SWC`,outcomeTitle:`DeployDialog-module__outcomeTitle___DETi3`,outcomeName:`DeployDialog-module__outcomeName___-YjU3`,outcomeStep:`DeployDialog-module__outcomeStep___C4Ayg`,outcomeNote:`DeployDialog-module__outcomeNote___Hm3Vx`,outcomeReason:`DeployDialog-module__outcomeReason___7KXWy`,pulse:`DeployDialog-module__pulse___NatbB`,"deploy-pulse":`DeployDialog-module__deploy-pulse___qntm8`,deployPulse:`DeployDialog-module__deploy-pulse___qntm8`,pair:`DeployDialog-module__pair___qenP7`
},qw={
  pitch:12,dot:4,reach:172,delayMs:500,spreadMs:2600,retreatMs:420,waveMs:1100,waveReach:1.7,waveWidth:38
},Jw={
  calm:.7,working:4.2,success:.7,alarm:.7
},Yw=2755,Xw=e=>Math.min(1,Math.max(0,e)),Zw=(e,t,n)=>{
  let r=Xw((n-e)/(t-e));
  return r*r*(3-2*r)
};

function Qw(e){
  return 1-(1-Xw((e-qw.delayMs)/qw.spreadMs))**3
}

function $w(e){
  return(1-Xw(e/qw.retreatMs))**2
}

function eT(e){
  return e>=0&&e<qw.waveMs?e/qw.waveMs:null
}

function tT(e,t,n,r){
  let i=(n.right-n.left)/2-r,a=(n.bottom-n.top)/2-r,o=Math.abs(e-(n.left+n.right)/2)-i,s=Math.abs(t-(n.top+n.bottom)/2)-a;
  return Math.hypot(Math.max(o,0),Math.max(s,0))+Math.min(Math.max(o,s),0)-r
}

function nT(e,t,n){
  let{
    column:r,row:i,distance:a
  }
  =e,{
    time:o,mood:s
  }
  =t,{
    fieldAt:c,hash2:l
  }
  =n;
  if(a<=0||t.spread<=0)return 0;
  let u=.4+.6*c(r/1.7,i/1.7,o*.12,2796),d=qw.reach*t.spread*u,f=t.wave===null?0:t.wave*qw.reach*qw.waveReach,p=t.wave===null?0:Xw(1-Math.abs(a-f)/qw.waveWidth)*(1-t.wave)**.6;
  if(a>d&&p<=0)return 0;
  let m=a>d?0:(1-a/d)**1.1,h=c(r,i,o,Yw),g=1.2+2*l(r,i,2772),_=Math.floor(o/g+l(r,i,2774)),v=s===`working`?.5+.5*Math.sin(a/14-o*1.9):0,y=(.25+.75*Zw(.25,.8,h))*(.25+.75*m),b=y+(.92-y)*.7*m**2+.35*v*m,x=l(r*131+_,i,2778)<b,S=h>.6&&l(r*131+_,i,2784)<.4,C=x?(S?.95:.58)*(.28+.72*m)*(1+.45*v):0;
  return Xw(Math.max(C,p))
}

var rT={
  fieldAt:Ug,hash2:Vg
},iT={
  calm:`today`,working:`today`,success:`success`,alarm:`alarm`
},aT=12,oT=1e3/30,sT=1e3;

function cT(e){
  let t=getComputedStyle(e),n=e=>t.getPropertyValue(e).trim();
  return{
    from:n(`--dot-from`),via:n(`--dot-via`),to:n(`--dot-to`)
  }
}

function lT(e,t){
  let{
    width:n,height:r,box:i,moment:a,colors:o
  }
  =t;
  if(e.clearRect(0,0,n,r),a.spread<=0)return;
  let s=qw.reach*qw.waveReach+qw.waveWidth,c=Math.max(0,i.left-s),l=Math.max(0,i.top-s),u=Math.min(n,i.right+s),d=Math.min(r,i.bottom+s),f=e.createLinearGradient(c,l,u,d);
  f.addColorStop(0,o.from),f.addColorStop(.55,o.via),f.addColorStop(1,o.to),e.fillStyle=f;
  let p=(qw.pitch-qw.dot)/2,m=Math.round((i.left+i.right)/2/qw.pitch);
  for(let t=Math.floor(l/qw.pitch);t*qw.pitch<d;t+=1)for(let n=Math.floor(c/qw.pitch);n*qw.pitch<u;n+=1){
    let r=n*qw.pitch+p,o=t*qw.pitch+p,s=tT(r+qw.dot/2,o+qw.dot/2,i,aT),c=nT({
      column:n<m?m-n:sT+n-m,row:t,distance:s
    },a,rT);
    c<.02||(e.globalAlpha=c,e.fillRect(r,o,qw.dot,qw.dot))
  }
  e.globalAlpha=1
}

function uT({
  mood:e,isLeaving:t,onGone:n,tones:r=iT
}){
  let i=(0,_.useRef)(null),a=(0,_.useRef)(null),o=(0,_.useRef)({
    mood:e,moodSince:0,leftAt:null,onGone:n
  }),s=(0,_.useRef)(null);
  return(0,_.useEffect)(()=>{
    o.current.onGone=n
  },[n]),(0,_.useEffect)(()=>{
    o.current.mood=e,o.current.moodSince=performance.now(),s.current?.()
  },[e]),(0,_.useEffect)(()=>{
    t&&(o.current.leftAt=performance.now(),s.current?.())
  },[t]),(0,_.useEffect)(()=>{
    let e=i.current,t=a.current,n=t?.getContext(`2d`),r=e?.nextElementSibling;if(!e||!t||!n||!(r instanceof HTMLElement))return;let c=yl(),l=performance.now(),u=0,d=l,f=0,p=0,m=!1,h=()=>{
      let e=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(window.innerWidth*e),t.height=Math.round(window.innerHeight*e),n.setTransform(e,0,0,e,0,0)
    },g=t=>{
      let{
        mood:i,moodSince:a,leftAt:s
      }
      =o.current;u+=Math.min(t-d,100)/1e3*(c?0:Jw[i]),d=t;let f=c?1:Qw(t-l),p=s===null?f:c?0:f*$w(t-s),h=i===`success`&&!c?eT(t-a):null;lT(n,{
        width:window.innerWidth,height:window.innerHeight,box:r.getBoundingClientRect(),moment:{
          time:u,spread:p,mood:i,wave:h
        },colors:cT(e)
      }),s!==null&&p<=0&&!m&&(m=!0,o.current.onGone())
    },_=e=>{
      p=requestAnimationFrame(_),e-f<oT||(f=e,g(e))
    },v=()=>{
      cancelAnimationFrame(p),p=c||document.hidden?0:requestAnimationFrame(_)
    },y=()=>{
      h(),g(performance.now())
    };h(),g(l),v(),s.current=c?()=>g(performance.now()):null;let b=new ResizeObserver(()=>g(performance.now()));return c&&b.observe(r),window.addEventListener(`resize`,y),document.addEventListener(`visibilitychange`,v),()=>{
      cancelAnimationFrame(p),b.disconnect(),window.removeEventListener(`resize`,y),document.removeEventListener(`visibilitychange`,v),s.current=null
    }
  },[]),(0,V.jsx)(`span`,{
    ref:i,className:Kw.halo,"data-halo":!0,"data-dots":r[e],"aria-hidden":`true`,children:(0,V.jsx)(`canvas`,{
      ref:a
    })
  })
}

var dT={
  columns:13,rows:7,dot:4,pitch:8
},fT=(dT.columns-1)*dT.pitch+dT.dot,pT=(dT.rows-1)*dT.pitch+dT.dot,mT=(e,t)=>t>=1&&t<=5&&(e===4||e===5||e===7||e===8),hT=Array.from({
  length:dT.columns*dT.rows
},(e,t)=>({
  column:t%dT.columns,row:Math.floor(t/dT.columns)
}));

function gT(){
  let e=`paused-${(0,_.useId)().replace(/[^a-zA-Z0-9]/g,``)}`;
  return(0,V.jsxs)(`svg`,{
    className:Gw.mark,width:fT,height:pT,viewBox:`0 0 ${fT} ${pT}`,"aria-hidden":`true`,focusable:`false`,children:[(0,V.jsx)(`defs`,{
      children:(0,V.jsxs)(`linearGradient`,{
        id:e,gradientUnits:`userSpaceOnUse`,x1:`0`,y1:`0`,x2:fT,y2:`0`,children:[(0,V.jsx)(`stop`,{
          className:Gw.markFrom,offset:`0.3`
        }),(0,V.jsx)(`stop`,{
          className:Gw.markTo,offset:`0.7`
        })]
      })
    }),hT.map(({
      column:t,row:n
    })=>(0,V.jsx)(`rect`,{
      className:mT(t,n)?void 0:Gw.markDim,x:t*dT.pitch,y:n*dT.pitch,width:dT.dot,height:dT.dot,fill:mT(t,n)?`url(#${e})`:void 0
    },`${t}-${n}`))]
  })
}

function _T({
  text:e
}){
  let t=e.split(/(?<=，)/);
  return t.length===1?(0,V.jsx)(`p`,{
    children:e
  }):(0,V.jsx)(`p`,{
    children:t.map(e=>(0,V.jsx)(`span`,{
      className:Gw.phrase,children:e
    },e))
  })
}

function vT({
  open:e,onClose:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=(0,_.useId)(),[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null),c=(0,_.useCallback)(e=>{
    s.current=e,o(!0)
  },[]),l=(0,_.useCallback)(()=>{
    let e=s.current;s.current=null,e?.()
  },[]),u=(0,_.useCallback)(()=>new Promise(e=>c(e)),[c]);
  return(0,V.jsx)(ph,{
    open:e,onClose:t,width:520,plain:!0,labelledBy:i,beforeClose:u,backdrop:(0,V.jsx)(uT,{
      mood:`calm`,isLeaving:a,onGone:l
    }),children:(0,V.jsxs)(`div`,{
      className:Gw.notice,"data-closed-notice":!0,"data-script":r.language.startsWith(`zh`)?`han`:void 0,children:[(0,V.jsx)(gT,{}),(0,V.jsx)(`h2`,{
        className:Gw.title,id:i,children:n(`deploy.closed_title`)
      }),(0,V.jsxs)(`div`,{
        className:Gw.letter,children:[(0,V.jsx)(`p`,{
          className:Gw.salute,children:n(`deploy.closed_salute`)
        }),(0,V.jsx)(_T,{
          text:n(`deploy.closed_full`)
        }),(0,V.jsx)(_T,{
          text:n(`deploy.closed_reason`)
        }),(0,V.jsx)(_T,{
          text:n(`deploy.closed_after`)
        }),(0,V.jsx)(`p`,{
          className:Gw.sign,children:(0,V.jsx)(Bf,{})
        })]
      }),(0,V.jsx)(`button`,{
        type:`button`,className:Gw.exit,"data-autofocus":!0,onClick:()=>c(t),disabled:a,"aria-label":n(`common.close`),title:n(`common.close`),children:(0,V.jsx)(dp,{
          size:20
        })
      })]
    })
  })
}

var yT=(e,t)=>t?`${e}-hint ${e}-problem`:`${e}-hint`;

function bT(e){
  let{
    index:t,state:n,id:r,problem:i,note:a
  }
  =e,{
    t:o
  }
  =N();
  return(0,V.jsxs)(`li`,{
    className:Kw.step,"data-state":n,"aria-current":n===`current`?`step`:void 0,children:[(0,V.jsx)(`span`,{
      className:Kw.marker,"aria-hidden":`true`,children:n===`done`?(0,V.jsx)(fp,{
        size:12
      }):t
    }),(0,V.jsxs)(`div`,{
      className:Kw.field,children:[(0,V.jsxs)(`label`,{
        className:Kw.label,htmlFor:r,children:[e.label,n===`done`&&(0,V.jsx)(`span`,{
          className:`visually-hidden`,children:o(`deploy.step_done`)
        })]
      }),e.children,(0,V.jsx)(`p`,{
        id:`${r}-hint`,className:Kw.hint,children:e.hint
      }),i!==null&&(0,V.jsx)(`p`,{
        id:`${r}-problem`,className:Kw.problem,children:i
      }),i===null&&a&&(0,V.jsx)(`output`,{
        className:Kw.note,children:a
      }),e.after]
    })]
  })
}

function xT({
  shown:e,words:t
}){
  return(0,V.jsx)(`span`,{
    className:Kw.steady,children:Object.entries(t).map(([t,n])=>(0,V.jsx)(`span`,{
      "data-shown":t===e||void 0,"aria-hidden":t!==e,children:n
    },t))
  })
}

function ST({
  state:e,onPress:t,disabled:n
}){
  let{
    t:r
  }
  =N(),i={
    idle:r(`deploy.fetch_link`),busy:r(`deploy.fetching_link`),again:r(`deploy.refetch_link`)
  };
  return(0,V.jsx)(K,{
    type:`button`,variant:`secondary`,className:Kw.fetch,onClick:t,disabled:n,children:(0,V.jsx)(xT,{
      shown:e,words:i
    })
  })
}

var CT=1600;

function wT({
  text:e
}){
  let{
    t
  }
  =N(),[n,r]=(0,_.useState)(`idle`);
  (0,_.useEffect)(()=>{
    if(n===`idle`)return;let e=setTimeout(()=>r(`idle`),CT);return()=>clearTimeout(e)
  },[n]);
  let i=async()=>{
    if(e!==null)try{
      await navigator.clipboard.writeText(e),r(`copied`)
    }catch(e){
      if(!(e instanceof DOMException))throw e;
      r(`failed`)
    }
  },a={
    idle:t(`deploy.copy_link`),copied:t(`common.copied`),failed:t(`common.copy_failed`)
  };
  return(0,V.jsxs)(K,{
    type:`button`,variant:`secondary`,className:Kw.copy,disabled:e===null,onClick:()=>void i(),children:[n===`copied`?(0,V.jsx)(fp,{
      size:14
    }):(0,V.jsx)(Zf,{
      size:14
    }),(0,V.jsx)(xT,{
      shown:n,words:a
    }),(0,V.jsx)(`span`,{
      className:`visually-hidden`,"aria-live":`polite`,children:n===`idle`?``:a[n]
    })]
  })
}

var TT=new Set([`network`,`arx_unreachable`,`forbidden`]);

function ET(){
  let{
    t:e
  }
  =N();
  return t=>t.said??e(`deploy.unsaid.${TT.has(t.code)?t.code:`other`}`)
}

function DT({
  refusal:e
}){
  let{
    t
  }
  =N(),n=ET(),r=(0,_.useRef)(null),i=e.step===`authorize`&&e.canResend;
  return(0,_.useEffect)(()=>{
    e!==null&&r.current?.scrollIntoView({
      block:`nearest`
    })
  },[e]),(0,V.jsxs)(`div`,{
    ref:r,className:Kw.refusal,role:`alert`,children:[(0,V.jsx)(`p`,{
      className:Kw.refusalHead,children:t(`deploy.refused.${i?`unconfirmed`:e.step}`)
    }),(0,V.jsx)(`p`,{
      className:Kw.refusalSaid,children:n(e)
    }),i&&(0,V.jsx)(`p`,{
      className:Kw.refusalNote,children:t(`deploy.resend_note`)
    }),e.status!==null&&(0,V.jsx)(`p`,{
      className:Kw.refusalCode,children:t(`deploy.status_code`,{
        status:e.status
      })
    })]
  })
}

var OT=/^([^\s:/@?#]+):(\d+):([^:\r\n]+):([^\r\n]+)$/,kT=/^([^:\r\n]+):([^\r\n]+)@([^\s:/@?#]+):(\d+)$/,AT=/^[a-z][a-z\d+.-]*:\/\//i,jT=/^(["'])(.*)\1$/;

function MT(e){
  let t=OT.exec(e);
  if(t!==null){
    let[,e=``,n=``,r=``,i=``]=t;
    return{
      host:e,port:n,user:r,password:i
    }
  }
  let n=kT.exec(e);
  if(n===null)return null;
  let[,r=``,i=``,a=``,o=``]=n;
  return{
    host:a,port:o,user:r,password:i
  }
}

function NT(e){
  let t=e.trim().replace(jT,`$2`).trim();
  if(AT.test(t))return null;
  let n=MT(t);
  if(n===null)return null;
  let r=`http://${n.host}:${n.port}`;
  if(Number(n.port)<1||!URL.canParse(r))return null;
  let{
    hostname:i,username:a,password:o
  }
  =new URL(r);
  return i===``||a!==``||o!==``?null:`http://${`${encodeURIComponent(n.user)}:${encodeURIComponent(n.password)}`}@${n.host}:${n.port}`
}

function PT(e){
  let t=e.trim();
  if(t===``)return`missing`;
  if(!URL.canParse(t))return`incomplete`;
  let n=new URL(t),r=(n.pathname===``||n.pathname===`/`)&&n.search===``&&n.hash===``;
  return n.protocol===`http:`&&n.hostname!==``&&r?null:`unsupported`
}

var FT=8192,IT=e=>{
  let t=e.charCodeAt(0);
  return t<32||t===127
};

function LT(e){
  let t=e.trim();
  return t===``?`missing`:t.length>8192?`too_long`:Array.from(t).some(IT)?`unreadable`:null
}

var RT=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function zT(e){
  let t=e.trim();
  return t===``?`missing`:t.length>200?`too_long`:RT.test(t)?null:`not_email`
}

function BT(e){
  let t=Rd(e);
  return t===null||zd(t)?null:`invalid`
}

var VT={
  proxy:null,link:null,code:null,name:null,remark:null
};

function HT(e){
  let{
    flow:t,isLinkExpired:n
  }
  =e,{
    session:r,busy:i,isHeld:a
  }
  =t,o=(0,_.useRef)(null),s=(0,_.useRef)(null),c=(0,_.useRef)(null),l=(0,_.useRef)(null),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(VT),[x,S]=(0,_.useState)(!1),C=r!==null&&!n,w=[zT(g)===null,C,C&&m.trim()!==``,LT(m)===null],T=e=>w[e]?`done`:e===w.indexOf(!1)?`current`:`upcoming`,E=Rd(u)!==null&&BT(u)===null?`done`:`upcoming`,D=e=>{
    let t=NT(e);
    return t===null?e:(p(t),S(!0),t)
  };
  return{
    proxyRef:o,codeRef:s,nameRef:c,remarkRef:l,proxy:f,code:m,name:g,remark:u,remarkState:E,shown:y,wasAdapted:x,hasLiveLink:C,linkProblem:n?`expired`:y.link,isSending:i===`authorize`||a,isLocked:i!==null||a,stateOf:T,typeProxy:e=>{
      p(e),S(!1),b({
        ...y,proxy:null
      })
    },typeCode:e=>{
      h(e),b({
        ...y,code:null
      })
    },typeName:e=>{
      v(e),b({
        ...y,name:null
      })
    },typeRemark:e=>{
      d(e),b({
        ...y,remark:null
      })
    },pasteProxy:e=>{
      let t=e.clipboardData.getData(`text`);
      D(t)!==t&&(e.preventDefault(),b({
        ...y,proxy:null
      }))
    },fetchLink:()=>{
      let t=D(f).trim(),n=PT(t);
      b({
        ...y,proxy:n,link:null
      }),n===null?e.onFetchLink(t):o.current?.focus()
    },submit:t=>{
      if(t.preventDefault(),i===`authorize`)return;
      let o={
        code:m.trim(),name:g.trim(),remark:Rd(u)
      };
      if(a&&r!==null)return e.onAuthorize(r,o);
      let d=r===null?`missing`:n?`expired`:null,f={
        ...VT,link:d,code:LT(m),name:zT(g),remark:BT(u)
      };
      if(b(f),f.name!==null)return c.current?.focus();
      if(r!==null&&d===null){
        if(f.code!==null)return s.current?.focus();
        if(f.remark!==null)return l.current?.focus();
        e.onAuthorize(r,o)
      }
    }
  }
}

function UT(e){
  let{
    formId:t,flow:n,isLinkExpired:r
  }
  =e,{
    session:i,busy:a
  }
  =n,{
    t:o,i18n:s
  }
  =N(),c=(0,_.useId)(),l=HT(e),u=i===null?null:new Intl.DateTimeFormat(s.language,{
    hour:`2-digit`,minute:`2-digit`
  }).format(i.expiresAt),d=(e,t)=>t===null?null:o(`deploy.${e}.${t}`),f=(e,t)=>({
    id:`${c}-${e}`,autoComplete:`off`,spellCheck:!1,"aria-invalid":t!==null,"aria-describedby":yT(`${c}-${e}`,t!==null)
  });
  return(0,V.jsxs)(`form`,{
    id:t,className:Kw.form,onSubmit:l.submit,noValidate:!0,children:[(0,V.jsxs)(`ol`,{
      className:Kw.steps,"aria-label":o(`deploy.steps_label`),children:[(0,V.jsx)(bT,{
        index:1,state:l.stateOf(0),id:`${c}-name`,label:o(`deploy.name_label`),hint:o(`deploy.name_hint`),problem:d(`name_problem`,l.shown.name),children:(0,V.jsx)(`input`,{
          ...f(`name`,l.shown.name),ref:l.nameRef,className:`input ${Kw.control}`,"data-autofocus":!0,type:`email`,value:l.name,onChange:e=>l.typeName(e.target.value),onKeyDown:e=>{
            e.key===`Enter`&&i===null&&(e.preventDefault(),l.proxyRef.current?.focus())
          },readOnly:l.isSending,placeholder:o(`deploy.name_placeholder`)
        })
      }),(0,V.jsx)(bT,{
        index:2,state:l.stateOf(1),id:`${c}-proxy`,label:o(`deploy.proxy_label`),hint:o(i===null?`deploy.proxy_hint`:`deploy.proxy_locked`),problem:d(`proxy_problem`,l.shown.proxy),note:l.wasAdapted&&i===null?o(`deploy.proxy_adapted`):null,after:(0,V.jsx)(ST,{
          state:i===null?a===`link`?`busy`:`idle`:`again`,onPress:i===null?l.fetchLink:e.onDropLink,disabled:l.isLocked
        }),children:(0,V.jsx)(`input`,{
          ...f(`proxy`,l.shown.proxy),ref:l.proxyRef,className:`input ${Kw.control} ${Kw.mono}`,value:l.proxy,onChange:e=>l.typeProxy(e.target.value),onPaste:l.pasteProxy,onKeyDown:e=>{
            e.key===`Enter`&&i===null&&(e.preventDefault(),l.fetchLink())
          },readOnly:l.isLocked||i!==null,placeholder:o(`deploy.proxy_placeholder`)
        })
      }),(0,V.jsx)(bT,{
        index:3,state:l.stateOf(2),id:`${c}-link`,label:o(`deploy.link_label`),hint:`${o(`deploy.link_hint`)}${l.hasLiveLink?` ${o(`deploy.link_valid`,{time:u})}`:``}`,problem:d(`link_problem`,l.linkProblem),children:(0,V.jsxs)(`div`,{
          className:Kw.link,"data-expired":r||void 0,children:[(0,V.jsx)(`input`,{
            ...f(`link`,l.linkProblem),className:`input ${Kw.control} ${Kw.mono}`,value:i?.authorizationUrl??``,readOnly:!0,placeholder:o(`deploy.${a===`link`?`link_pending`:`link_empty`}`)
          }),(0,V.jsx)(wT,{
            text:l.hasLiveLink?i?.authorizationUrl??null:null
          })]
        })
      }),(0,V.jsx)(bT,{
        index:4,state:l.stateOf(3),id:`${c}-code`,label:o(`deploy.code_label`),hint:o(`deploy.code_hint`),problem:d(`code_problem`,l.shown.code),children:(0,V.jsx)(`textarea`,{
          ...f(`code`,l.shown.code),ref:l.codeRef,className:`${Kw.control} ${Kw.mono}`,value:l.code,onChange:e=>l.typeCode(e.target.value),readOnly:l.isSending,maxLength:FT,placeholder:o(`deploy.code_placeholder`),autoCapitalize:`none`
        })
      }),(0,V.jsx)(bT,{
        index:5,state:l.remarkState,id:`${c}-remark`,label:o(`deploy.remark_label`),hint:o(`deploy.remark_hint`),problem:d(`remark_problem`,l.shown.remark),children:(0,V.jsx)(`input`,{
          ...f(`remark`,l.shown.remark),ref:l.remarkRef,className:`input ${Kw.control}`,value:l.remark,onChange:e=>l.typeRemark(e.target.value),readOnly:l.isSending,placeholder:o(`deploy.remark_placeholder`)
        })
      })]
    }),n.refusal!==null&&(0,V.jsx)(DT,{
      refusal:n.refusal
    })]
  })
}

function WT({
  flow:e,minHeight:t,remarkUnwritten:n
}){
  let{
    t:r
  }
  =N(),i=ET(),{
    name:a
  }
  =e.task,o={
    style:t===null?void 0:{
      minHeight:t
    }
  },s=a!==null&&(0,V.jsx)(`p`,{
    className:Kw.outcomeName,children:a
  }),c=n&&(0,V.jsx)(`p`,{
    className:Kw.outcomeNote,children:r(`deploy.remark_unwritten`)
  });
  switch(e.stage){
    case`deploying`:return(0,V.jsxs)(`output`,{
      className:Kw.outcome,"data-outcome":`deploying`,...o,children:[(0,V.jsx)(`span`,{
        className:Kw.outcomeMark,"aria-hidden":`true`,children:(0,V.jsxs)(`span`,{
          className:Kw.pulse,children:[(0,V.jsx)(`span`,{}),(0,V.jsx)(`span`,{}),(0,V.jsx)(`span`,{})]
        })
      }),(0,V.jsx)(`p`,{
        className:Kw.outcomeTitle,children:r(`deploy.progress_title`)
      }),s,(0,V.jsx)(`p`,{
        className:Kw.outcomeStep,children:e.isLagging?r(`deploy.progress_lagging`):e.task.message??r(`deploy.progress_default`)
      }),(0,V.jsx)(`p`,{
        className:Kw.outcomeNote,children:r(`deploy.progress_note`)
      }),c]
    });
    case`succeeded`:return(0,V.jsxs)(`output`,{
      className:Kw.outcome,"data-outcome":`succeeded`,...o,children:[(0,V.jsx)(`span`,{
        className:Kw.outcomeMark,"aria-hidden":`true`,children:(0,V.jsx)(fp,{
          size:28
        })
      }),(0,V.jsx)(`p`,{
        className:Kw.outcomeTitle,children:r(`deploy.success_title`)
      }),s,(0,V.jsx)(`p`,{
        className:Kw.outcomeNote,children:r(`deploy.success_note`)
      }),c]
    });
    case`failed`:{
      let{
        refusal:t,task:n
      }
      =e;
      return(0,V.jsxs)(`output`,{
        className:Kw.outcome,"data-outcome":`failed`,...o,children:[(0,V.jsx)(`span`,{
          className:Kw.outcomeMark,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
            size:26
          })
        }),(0,V.jsx)(`p`,{
          className:Kw.outcomeTitle,children:r(t===null?`deploy.failure_title`:`deploy.refused.progress`)
        }),s,(0,V.jsx)(`p`,{
          className:Kw.outcomeReason,children:t===null?n.error??n.message??r(`deploy.unsaid.other`):i(t)
        }),t!==null&&t.status!==null&&(0,V.jsx)(`p`,{
          className:Kw.refusalCode,children:r(`deploy.status_code`,{
            status:t.status
          })
        }),(0,V.jsx)(`p`,{
          className:Kw.outcomeNote,children:r(t===null?`deploy.failure_note`:`deploy.lost_note`)
        })]
      })
    }
    default:return yp(e)
  }
}

var GT=new Set([400,401,403,404,409,410,413,422]);

function KT(e,t){
  if(t instanceof W)return{
    step:e,status:null,code:`network`,said:null,canResend:!0
  };
  if(!(t instanceof U))return null;
  let{
    status:n,code:r
  }
  =t;
  return{
    step:e,status:n,code:r,said:t.detail??null,canResend:!GT.has(n)
  }
}

var qT={
  stage:`form`,session:null,busy:null,refusal:null,isHeld:!1
};

function JT(e){
  switch(e.status){
    case`succeeded`:return{
      stage:`succeeded`,task:e
    };
    case`failed`:case`cancelled`:return{
      stage:`failed`,task:e,refusal:null
    };
    case`pending`:case`accepted`:case`running`:case null:return{
      stage:`deploying`,task:e,isLagging:!1
    };
    default:return yp(e.status)
  }
}

function YT(e){
  switch(e.stage){
    case`form`:return e.busy===`authorize`?`working`:e.refusal===null?`calm`:`alarm`;
    case`deploying`:return`working`;
    case`succeeded`:return`success`;
    case`failed`:return`alarm`;
    default:return yp(e)
  }
}

var XT=new Map,ZT=El(()=>({
  viewerId:null,remarks:XT
}));

async function QT(e){
  try{
    let t=new Map((await Nf.accountRemarks()).map(({
      id:e,remark:t
    })=>[e,t]));
    q.getState().principal?.id===e&&ZT.setState({
      viewerId:e,remarks:t
    })
  }catch(e){
    if(!(e instanceof U||e instanceof W||e instanceof bt))throw e
  }
}

function $T(e,t){
  let{
    viewerId:n,remarks:r
  }
  =ZT.getState(),i=new Map(r);
  t===null?i.delete(e):i.set(e,t),ZT.setState({
    viewerId:n,remarks:i
  })
}

var eE=new Map,tE=e=>e.trim().toLowerCase();

function nE(e,t){
  eE.set(tE(e),t)
}

function rE(e){
  eE.delete(tE(e))
}

async function iE(e,t){
  let n=eE.get(tE(e));
  if(n===void 0)return!0;
  eE.delete(tE(e));
  try{
    await Nf.setAccountRemark(t,n)
  }catch(t){
    if(!(t instanceof U)&&!(t instanceof W))throw t;
    return eE.set(tE(e),n),!1
  }
  return $T(t,n),!0
}

function aE(e,t){
  let n=q(({
    principal:e
  })=>e?.id??null);
  (0,_.useEffect)(()=>{
    n!==null&&e!==null&&(ZT.getState().viewerId!==n&&ZT.setState({
      viewerId:n,remarks:XT
    }),QT(n))
  },[n,e]),(0,_.useEffect)(()=>{
    if(eE.size!==0)for(let{
      id:e,row:n
    }
    of t)eE.has(tE(n.name))&&iE(n.name,e)
  },[t])
}

function oE(){
  let e=q(({
    principal:e
  })=>e?.id??null),t=ZT();
  return e!==null&&t.viewerId===e?t.remarks:XT
}

var sE=2500;

function cE(e,t){
  let n=KT(e,t);
  if(n===null)throw t;
  return n.code===`unauthenticated`?(q.getState().expire(),null):n
}

function lE(){
  let[e,t]=(0,_.useState)(qT),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),o=(0,_.useRef)(0),s=(0,_.useRef)(null),c=(0,_.useRef)(null),l=(0,_.useCallback)(async e=>{
    let n=o.current;t({
      ...qT,busy:`link`
    });try{
      let r=await Nf.startDeploySession(e);o.current===n&&t({
        ...qT,session:r
      })
    }catch(e){
      if(o.current!==n)return;let r=cE(`link`,e);r!==null&&t({
        ...qT,refusal:r
      })
    }
  },[]),u=(0,_.useCallback)(async(e,n)=>{
    let r=o.current,{
      remark:i,...a
    }
    =n,l=s.current??{
      sessionId:e.id,requestId:crypto.randomUUID(),...a
    };s.current===null&&i!==null&&(nE(l.name,i),c.current=l.name),s.current=l,t({
      stage:`form`,session:e,busy:`authorize`,refusal:null,isHeld:!0
    });try{
      let e=await Nf.authorizeDeploy(l.sessionId,l);if(o.current!==r)return;s.current=null,t(JT(e))
    }catch(n){
      if(o.current!==r)return;let i=cE(`authorize`,n);if(i===null)return;i.canResend||(s.current=null,rE(l.name),c.current=null),t({
        stage:`form`,session:e,busy:null,refusal:i,isHeld:i.canResend
      })
    }
  },[]),d=(0,_.useCallback)(()=>{
    o.current+=1,s.current=null,c.current=null,a(!1),t(qT)
  },[]),f=e.stage===`form`?null:e.task.providerId;
  (0,_.useEffect)(()=>{
    let e=c.current;if(f===null||e===null)return;c.current=null;let t=o.current;iE(e,f).then(e=>{
      !e&&o.current===t&&a(!0)
    })
  },[f]);
  let p=e.stage===`form`?e.session?.expiresAt??null:null;
  (0,_.useEffect)(()=>{
    if(r(!1),p===null)return;let e=setTimeout(()=>r(!0),Math.max(0,p-Date.now()));return()=>clearTimeout(e)
  },[p]);
  let m=e.stage===`deploying`?e.task.id:null;
  return(0,_.useEffect)(()=>{
    if(m===null)return;let e=o.current,n,r=!1,i=async()=>{
      try{
        let a=JT(await Nf.deployTask(m));if(r||o.current!==e)return;t(a),a.stage===`deploying`&&(n=setTimeout(()=>void i(),sE))
      }catch(a){
        if(r||o.current!==e)return;let s=cE(`progress`,a);if(s===null)return;s.canResend&&(n=setTimeout(()=>void i(),sE)),t(e=>e.stage===`deploying`?s.canResend?{
          ...e,isLagging:!0
        }
        :{
          stage:`failed`,task:e.task,refusal:s
        }
        :e)
      }
    };return n=setTimeout(()=>void i(),sE),()=>{
      r=!0,clearTimeout(n)
    }
  },[m]),{
    flow:e,isLinkExpired:n,isRemarkUnwritten:i,fetchLink:l,authorize:u,reset:d
  }
}

function uE(e){
  let[t,n]=(0,_.useState)(null);
  return(0,_.useEffect)(()=>{
    if(e===0)return;let t=!0,r=r=>{
      t&&n({
        opening:e,isOpen:r
      })
    };return Nf.deployGate().then(r,e=>{
      if(r(!0),!(e instanceof U)&&!(e instanceof W))throw e
    }),()=>{
      t=!1
    }
  },[e]),t?.opening===e?t.isOpen?`open`:`closed`:`asking`
}

function dE({
  open:e,onClose:t,onChanged:n
}){
  let{
    t:r
  }
  =N(),i=(0,_.useId)(),a=(0,_.useRef)(null),{
    flow:o,isLinkExpired:s,isRemarkUnwritten:c,fetchLink:l,authorize:u,reset:d
  }
  =lE(),[f,p]=(0,_.useState)(0),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(!1),{
    stage:x
  }
  =o,S=o.stage===`form`&&o.busy===`authorize`;
  (0,_.useEffect)(()=>{
    x!==`form`&&(b.current=!0,a.current?.closest(`[role="dialog"]`)?.focus())
  },[x]),(0,_.useEffect)(()=>{
    f>0&&a.current?.querySelector(`[data-autofocus]`)?.focus()
  },[f]);
  let C=(0,_.useCallback)(e=>{
    y.current=e,h(!0)
  },[]),w=(0,_.useCallback)(()=>{
    let e=y.current;y.current=null,e?.()
  },[]),T=(0,_.useCallback)(()=>new Promise(e=>C(e)),[C]),E=()=>{
    b.current&&n(),t()
  },D=()=>C(()=>{
    d(),v(null),p(e=>e+1),h(!1)
  }),O=(e,t)=>{
    v(a.current?.offsetHeight??null),u(e,t)
  },k=o.stage===`form`?(0,V.jsx)(K,{
    type:`submit`,form:i,fullWidth:!0,className:Kw.finish,loading:S,children:r(`deploy.${S?`submitting`:o.isHeld?`resend`:`submit`}`)
  }):(0,V.jsxs)(`div`,{
    className:Kw.pair,children:[(0,V.jsx)(K,{
      variant:`secondary`,onClick:()=>C(E),disabled:m,children:r(`deploy.collapse`)
    }),o.stage!==`deploying`&&(0,V.jsx)(K,{
      onClick:D,disabled:m,children:r(`deploy.again`)
    })]
  });
  return(0,V.jsx)(ph,{
    open:e,onClose:E,title:r(`deploy.title`),width:520,closeDisabled:S,beforeClose:T,backdrop:(0,V.jsx)(uT,{
      mood:YT(o),isLeaving:m,onGone:w
    },f),footer:k,children:(0,V.jsx)(`div`,{
      ref:a,children:o.stage===`form`?(0,V.jsx)(UT,{
        formId:i,flow:o,isLinkExpired:s,onFetchLink:e=>void l(e),onDropLink:d,onAuthorize:O
      },f):(0,V.jsx)(WT,{
        flow:o,minHeight:g,remarkUnwritten:c
      })
    })
  })
}

function fE(e){
  let[t,n]=(0,_.useState)({
    count:0,isOpen:!1
  });
  t.isOpen!==e.open&&n({
    count:t.count+ +!!e.open,isOpen:e.open
  });
  let r=uE(t.count);
  return t.count===0||r===`asking`?null:r===`closed`?(0,V.jsx)(vT,{
    open:e.open,onClose:e.onClose
  },t.count):(0,V.jsx)(dE,{
    ...e
  },t.count)
}

var pE=.05,mE=.55,hE=2.2;

function gE(e,t,n){
  let r=e+t*9;
  return n*(.42+.16*Math.sin(r/5.5)+.08*Math.sin(r/2.3+1.3))
}

function _E({
  column:e,row:t
},{
  columns:n,rows:r
},i){
  let a=t-gE(e,i,r);
  return(a<0?pE:pE+.21000000000000002*Math.exp(-a/hE))*(mE+.44999999999999996*(n<=1?1:e/(n-1)))
}

function vE(e,t){
  let n=new Map;
  for(let{
    id:r,row:i
  }
  of t){
    if(i.owner===null)continue;
    let t=n.get(i.owner.id)??{
      email:i.owner.email,accounts:[],total:0
    };
    t.total+=1,e.has(r)||t.accounts.push(r),n.set(i.owner.id,t)
  }
  return[...n].filter(([,e])=>e.accounts.length>0).map(([e,t])=>({
    ownerId:e,...t
  }))
}

function yE(e,t){
  return t===null||t.kind===`under`?[]:e.filter(e=>e.ownerId!==t.id)
}

var bE=36e5,xE=24*bE,SE=7*xE,CE=8*bE,wE=[`admin`,`observer`];

function TE(e){
  let t=String(e.id);
  return wE.includes(e.role)?{
    id:t,kind:`whole`
  }
  :{
    id:t,kind:e.role===`supplier`&&e.parent===null&&e.canCreateSuppliers?`lead`:`under`
  }
}

var EE=e=>Math.floor((e+CE)%xE/bE);

function DE(e,t,n){
  let[r]=e.toSorted((e,n)=>t(n)-t(e)||n.today-e.today||e.name.localeCompare(n.name));
  return r!==void 0&&t(r)>=n?{
    name:r.name,count:t(r)
  }
  :null
}

function OE(e,t,n,r){
  let i=wh(r),a=r-SE,o=t.kind===`under`?e.filter(({
    row:e
  })=>e.owner?.id===t.id):e,s=0,c=0,l=0,u=0,d=new Map;
  for(let{
    row:e,state:r
  }
  of o){
    let o=e.createdAt===null?NaN:Date.parse(e.createdAt),f=o>=a,p=o>=i;
    f&&(c+=1),p&&(s+=1),r===`limited`&&(l+=1),r===`fault`&&(u+=1);
    let m=e.owner;
    if(m===null||m.id===t.id)continue;
    let h=d.get(m.id)??{
      name:n.get(m.id)??(m.email===null?m.id:Th(m.email)),brought:0,today:0,limited:0,fallen:0
    };
    f&&(h.brought+=1),p&&(h.today+=1),r===`limited`&&(h.limited+=1),r===`fault`&&(h.fallen+=1),d.set(m.id,h)
  }
  let f=[...d.values()];
  return{
    kind:t.kind,hour:EE(r),total:o.length,isAllWell:o.length>0&&o.every(({
      state:e
    })=>e===`enabled`),today:s,week:c,limited:l,fallen:u,busiest:DE(f,e=>e.brought,3),mostLimited:DE(f,e=>e.limited,1),mostFallen:DE(f,e=>e.fallen,1)
  }
}

function kE(e){
  return e>=5&&e<11?{
    key:`hello_morning`
  }
  :e>=11&&e<13?{
    key:`hello_noon`
  }
  :e>=13&&e<18?{
    key:`hello_afternoon`
  }
  :e>=18&&e<23?{
    key:`hello_evening`
  }
  :{
    key:`hello_night`
  }
}

var AE=(e,t)=>t>0?[{
  key:e,values:{
    count:t
  }
}]:[],jE=(e,t)=>t===null?[]:[{
  key:e,values:{
    name:t.name,count:t.count
  }
}];

function ME(e){
  let{
    kind:t
  }
  =e;
  if(t===`under`)return[...e.today>0?AE(`under_today`,e.today):AE(`under_week`,e.week),...AE(`under_limited`,e.limited),...AE(`under_fallen`,e.fallen),...e.isAllWell?AE(`all_well`,e.total):[]];
  let n=t===`lead`;
  return[...jE(`${t}_best`,e.busiest),...AE(`${t}_today`,e.today),...n?jE(`lead_limited`,e.mostLimited):[],...n?jE(`lead_fallen`,e.mostFallen):[],...e.isAllWell?AE(`all_well`,e.total):[]]
}

var NE=[`poke_1`,`poke_2`,`poke_3`],PE=({
  id:e,email:t
},n)=>n.get(e)??(t===null?e:Th(t)),FE=16;

function IE(e,t){
  let n=null,r=t.get(e.id)?.parentId??null;
  for(let e=0;e<FE&&r!==null;e+=1)n=r,r=t.get(r)?.parentId??null;
  return n===null?null:{
    id:n,email:t.get(n)?.email??null
  }
}

function LE(e,t){
  let{
    lead:n,own:r
  }
  =RE(e,t);
  return n===null?r:`${n} / ${r}`
}

function RE(e,{
  names:t,places:n
}){
  let r=IE(e,n);
  return{
    lead:r===null?null:PE(r,t),own:PE(e,t)
  }
}

function zE(e,{
  places:t
}){
  let n=[IE(e,t)?.email,e.email].filter(e=>typeof e==`string`);
  return n.length===0?void 0:n.join(` / `)
}

function BE(e,t,n){
  return t.names.size===0&&t.places.size===0&&n.size===0?e:e.map(e=>{
    let{
      owner:r
    }
    =e.row,i=r===null?null:IE(r,t.places),a=[r===null?void 0:t.names.get(r.id),i===null?void 0:PE(i,t.names),i?.email,n.get(e.id)].filter(e=>typeof e==`string`);return a.length===0?e:{
      ...e,haystack:`${e.haystack}\n${a.join(`
`).toLowerCase()}`
    }
  })
}

var VE=new Map,HE=El(()=>({
  viewerId:null,places:VE
}));

async function UE(e){
  try{
    let t=new Map((await Nf.lineage()).map(e=>[e.id,e]));
    q.getState().principal?.id===e&&HE.setState({
      viewerId:e,places:t
    })
  }catch(e){
    if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
    HE.setState({
      viewerId:null,places:VE
    })
  }
}

function WE(){
  let e=q(({
    principal:e
  })=>e!==null&&(e.role===`admin`||e.role===`observer`)?e.id:null),t=HE();
  return(0,_.useEffect)(()=>{
    e!==null&&HE.getState().viewerId!==e&&(HE.setState({
      viewerId:e,places:VE
    }),UE(e))
  },[e]),e!==null&&t.viewerId===e?t.places:VE
}

var GE=2600,KE=new Set,qE=El(e=>({
  waiting:[],announce:t=>e(e=>({
    waiting:[...e.waiting,...t]
  })),shown:()=>e(e=>({
    waiting:e.waiting.slice(1)
  }))
}));

q.subscribe((e,t)=>{
  e.principal!==t.principal&&qE.setState({
    waiting:[]
  })
});

function JE(e,t){
  let n=q(e=>e.principal),r=Hw(),i=WE(),[a,o]=(0,_.useState)(KE),s=(0,_.useRef)(null),c=(0,_.useRef)({
    count:0,ids:new Set
  }),l=(0,_.useRef)(null);
  return(0,_.useEffect)(()=>{
    if(e===null||e.loadedAt===l.current)return;l.current=e.loadedAt;let t=`${e.scope?.supplierId??``}/${e.scope?.includeDescendants??!1}`,a=s.current,c=new Set(e.accounts.map(e=>e.id)),u=new Set([...c,...e.hosted.map(e=>e.id)]);if(s.current={
      scope:t,ids:c,every:u
    },a===null||a.scope!==t)return;let d=vE(a.ids,e.accounts);if(d.length===0)return;o(new Set(d.flatMap(e=>e.accounts)));let f={
      names:zw(r),places:i
    },p=n===null?null:TE(n);qE.getState().announce(yE(d,p).map(t=>{
      let{
        lead:n,own:r
      }
      =RE({
        id:t.ownerId,email:t.email
      },f);return{
        key:`${t.ownerId}:${e.loadedAt}`,name:r,lead:n,total:t.total
      }
    }))
  },[e,r,i,n]),(0,_.useEffect)(()=>{
    if(a===KE)return;let e=setTimeout(()=>o(KE),GE);return()=>clearTimeout(e)
  },[a]),(0,_.useEffect)(()=>{
    if(e===null||e.refreshing)return;let n=e.accounts.length+e.hosted.length+e.missing+e.unreadable,r=({
      count:e,ids:r
    })=>{
      let i=s.current;if(i===null)return;let a=r.filter(e=>!i.every.has(e)&&!c.current.ids.has(e)),o=e!==null&&e>n&&e!==c.current.count;if(a.length!==0||o){
        for(let e of a)c.current.ids.add(e);e!==null&&(c.current.count=e),t()
      }
    };return r(sv.getState()),sv.subscribe(r)
  },[e,t]),a
}

var YE={
  notice:`ArrivalNotice-module__notice___GKnC9`,"slide-out":`ArrivalNotice-module__slide-out___303Zz`,slideOut:`ArrivalNotice-module__slide-out___303Zz`,"draw-back":`ArrivalNotice-module__draw-back___289eY`,drawBack:`ArrivalNotice-module__draw-back___289eY`,flow:`ArrivalNotice-module__flow___pbanA`,text:`ArrivalNotice-module__text___xLhsp`,reveal:`ArrivalNotice-module__reveal___7zSzP`,title:`ArrivalNotice-module__title___hwl1v`,total:`ArrivalNotice-module__total___RFKLe`,"fade-in":`ArrivalNotice-module__fade-in___o6ujy`,fadeIn:`ArrivalNotice-module__fade-in___o6ujy`,"fade-out":`ArrivalNotice-module__fade-out___7LYmv`,fadeOut:`ArrivalNotice-module__fade-out___7LYmv`
},XE=5600,ZE={
  pitch:6,dot:4
},QE=11,$E=e=>{
  let{
    context:t,grid:n,seconds:r,isStill:i
  }
  =e;
  t.fillStyle=Xg(t,`brand`,e);
  let a=i?0:r;
  for(let e=0;e<n.columns;e+=1)for(let r=0;r<n.rows;r+=1)t.globalAlpha=_E({
    column:e,row:r
  },n,a),t.fillRect(e*n.pitch,r*n.pitch,n.dot,n.dot)
};

function eD(){
  let{
    t:e,i18n:t
  }
  =N(),[n]=qE(e=>e.waiting),[r,i]=(0,_.useState)(null),a=n?.key??null,o=(0,_.useRef)(null),[s,c]=(0,_.useState)(QE);
  if((0,_.useLayoutEffect)(()=>{
    a!==null&&o.current!==null&&c(Math.ceil(o.current.clientHeight/ZE.pitch))
  },[a]),(0,_.useEffect)(()=>{
    if(a===null)return;let e=setTimeout(()=>i(a),XE);return()=>clearTimeout(e)
  },[a]),n===void 0)return null;
  let l=r===n.key;
  return(0,V.jsxs)(`output`,{
    ref:o,className:YE.notice,"data-phase":l?`out`:`in`,"data-detect-ignore":`pulsing-dot`,onAnimationEnd:e=>{
      l&&e.target===e.currentTarget&&qE.getState().shown()
    },children:[(0,V.jsx)(bg,{
      className:YE.flow,rows:s,...ZE,paint:$E,isAnimated:!0
    }),(0,V.jsxs)(`span`,{
      className:YE.text,children:[(0,V.jsx)(`span`,{
        className:YE.title,children:n.lead===null?e(`pool.arrived_title`,{
          name:n.name
        }):e(`pool.arrived_title_under`,{
          lead:n.lead,name:n.name
        })
      }),(0,V.jsx)(`span`,{
        className:YE.total,children:e(`pool.arrived_total`,{
          count:Eh(n.total,t.language)
        })
      })]
    })]
  },n.key)
}

var tD={
  region:`AccountGrid-module__region___-TF0y`,head:`AccountGrid-module__head___JNTu0`,headCheck:`AccountGrid-module__headCheck___p-aWs`,headLabel:`AccountGrid-module__headLabel___HMwGe`,list:`AccountGrid-module__list___8-jL6`,standIn:`AccountGrid-module__standIn___hQFIO`,cell:`AccountGrid-module__cell___CtnNl`,card:`AccountGrid-module__card___vN-Ez`,name:`AccountGrid-module__name___9KsQW`,"card-arrives":`AccountGrid-module__card-arrives___w-Z6a`,cardArrives:`AccountGrid-module__card-arrives___w-Z6a`,"card-wash":`AccountGrid-module__card-wash___tKHEc`,cardWash:`AccountGrid-module__card-wash___tKHEc`,accent:`AccountGrid-module__accent___azmNK`,check:`AccountGrid-module__check___0tNPq`,line:`AccountGrid-module__line___rH3dd`,status:`AccountGrid-module__status___bac0n`,tier:`AccountGrid-module__tier___3to-J`,switch:`AccountGrid-module__switch___yvgVh`,owner:`AccountGrid-module__owner___92mor`,place:`AccountGrid-module__place___ILNb4`,remark:`AccountGrid-module__remark___YAOGP`,stats:`AccountGrid-module__stats___-Mb-m`,exit:`AccountGrid-module__exit___-GFuC`,ip:`AccountGrid-module__ip___402zS`,doom:`AccountGrid-module__doom___BDH0F`,doomClock:`AccountGrid-module__doomClock___-t8mv`,doomSaid:`AccountGrid-module__doomSaid___WsmM1`,rates:`AccountGrid-module__rates___-lGE-`,rate:`AccountGrid-module__rate___Ij0H8`,rateValue:`AccountGrid-module__rateValue___M8Xi1`,health:`AccountGrid-module__health___bn1M5`,healthDot:`AccountGrid-module__healthDot___OPA8K`,meters:`AccountGrid-module__meters___FKWou`,meter:`AccountGrid-module__meter___UAgxE`,meterReading:`AccountGrid-module__meterReading___wx5D-`,meterShare:`AccountGrid-module__meterShare___AtYY4`,meterReset:`AccountGrid-module__meterReset___yLQvD`,meterBar:`AccountGrid-module__meterBar___BvduX`
},nD=[`a`,`b`,`c`,`d`,`e`,`f`];

function rD(){
  return(0,V.jsxs)(`div`,{
    className:tD.region,"aria-hidden":`true`,children:[(0,V.jsx)(`div`,{
      className:tD.head
    }),(0,V.jsx)(`ul`,{
      className:tD.list,children:nD.map(e=>(0,V.jsx)(`li`,{
        className:tD.cell,children:(0,V.jsx)(Am,{
          height:`100%`,rounded:12
        })
      },e))
    })]
  })
}

var iD=640,aD=24,oD=12,sD=4,cD={
  sideBySide:{
    tallest:184,pitches:[8,7,6,5],roomy:[20,16,14,12,10]
  },stacked:{
    tallest:320,pitches:[6,5],roomy:[16,14,12,10,8]
  }
},lD=e=>e<=8?2:Math.round(e*.3),uD=e=>e.reduce((e,t)=>e+t,0);

function dD(e,t){
  let n=uD(e),r=e.map(r=>n===0?t/e.length:t*r/n),i=r.map(e=>Math.max(sD,Math.floor(e))),a=r.map((e,t)=>({
    index:t,lost:e-Math.floor(e)
  })).toSorted((e,t)=>t.lost-e.lost),o=t-uD(i);
  for(let{
    index:e
  }
  of a){
    if(o<=0)break;
    i[e]=(i[e]??0)+1,--o
  }
  for(;o<0;){
    let e=i.indexOf(Math.max(...i));
    if((i[e]??0)<=sD)break;
    i[e]=(i[e]??0)-1,o+=1
  }
  return i
}

function fD(e,t,{
  pitch:n,gap:r,isRoomy:i
}){
  return!i||t<2?n:Math.max(n,(e-(n-r))/(t-1))
}

function pD(e,t,n){
  let{
    pitch:r,gap:i
  }
  =n,a=Math.max(0,e.length-1),o=Math.floor((t-a*aD+e.length*i)/r),s=dD(e.map(e=>e.count),o),c=e=>(s[e]??0)*r-i,l=uD(e.map((e,t)=>c(t))),u=a===0?0:Math.max(aD/2,(t-l)/a),d=[],f=0,p=0;
  for(let[i,a]of e.entries()){
    let o=s[i]??sD;
    d.push({
      key:a.key,x:Math.round(f),y:0,columns:o,rows:Math.ceil(a.count/o),count:a.count,start:p,step:e.length===1?fD(t,o,n):r
    }),f+=c(i)+u,p+=a.count
  }
  return d
}

function mD(e,t,n){
  let{
    pitch:r,labelHeight:i
  }
  =n,a=Math.max(sD,Math.floor((t+n.gap)/r)),o=fD(t,a,n),s=[],c=0,l=0;
  for(let t of e){
    let e=Math.ceil(t.count/a);
    s.push({
      key:t.key,x:0,y:c,columns:a,rows:e,count:t.count,start:l,step:o
    }),c+=i+e*r+oD,l+=t.count
  }
  return s
}

function hD(e,t,n){
  let{
    pitch:r,isStacked:i,labelHeight:a
  }
  =n,o=i?mD(e,t,n):pD(e,t,n),s=Math.max(0,...o.map(e=>e.y+a+e.rows*r));
  return{
    pitch:r,dot:r-n.gap,width:t,height:s,labelHeight:a,blocks:o
  }
}

function gD(e,t){
  let n=t<iD,{
    tallest:r,pitches:i,roomy:a
  }
  =n?cD.stacked:cD.sideBySide,o=i[i.length-1],s=e.length>1?22:0,c=(r,i)=>hD(e,t,{
    pitch:r,gap:lD(r),isRoomy:i,isStacked:n,labelHeight:s
  });
  for(let e of a){
    let t=c(e,!0);
    if(t.blocks.every(e=>e.rows<=4))return t
  }
  for(let e of i){
    let t=c(e,!1);
    if(t.height<=r||e===o)return t
  }
  throw Error(`unreachable: the smallest pitch always returns a layout`)
}

var _D=(e,t)=>Math.round(t*e.step);

function vD(e,t,n){
  return{
    x:t.x+_D(t,n%t.columns),y:t.y+e.labelHeight+Math.floor(n/t.columns)*e.pitch
  }
}

function yD(e,t){
  let n=Math.floor(t/e.step);
  return _D(e,n+1)<=t?n+1:n
}

function bD(e,t){
  for(let n of e.blocks){
    let r=yD(n,t.x-n.x),i=Math.floor((t.y-n.y-e.labelHeight)/e.pitch);
    if(r<0||r>=n.columns||i<0||i>=n.rows)continue;
    let a=i*n.columns+r;
    if(a<n.count)return n.start+a
  }
  return null
}

var xD=2500;

function SD(){
  let e=Number(sr(ut));
  return Number.isInteger(e)&&e>0?e:xD
}

function CD(){
  let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(0);
  (0,_.useLayoutEffect)(()=>{
    let t=e.current;if(!t)return;n(Math.floor(t.getBoundingClientRect().width));let r=new ResizeObserver(([e])=>{
      e&&n(Math.floor(e.contentRect.width))
    });return r.observe(t),()=>r.disconnect()
  },[]);
  let r=t===0?void 0:gD([{
    key:`pool`,count:SD()
  }],t).height;
  return(0,V.jsx)(`div`,{
    ref:e,children:(0,V.jsx)(Am,{
      height:r,rounded:8
    })
  })
}

function wD(e,t,n){
  if(t===null)return e.all===null?n===null?null:e.byPartner.get(n)?.branch??null:e.all;
  let r=e.byPartner.get(t.supplierId);
  return r===void 0?null:t.includeDescendants?r.branch:r.own
}

var TD=new Set([400,403,404,422]),ED=40;

async function DD(e){
  try{
    return await e()
  }catch(e){
    if(e instanceof U&&TD.has(e.status))return null;
    throw e
  }
}

async function OD(e){
  let t=0,n=0;
  for(let r=0;r<ED;r+=1){
    let{
      rows:r,unreadable:i
    }
    =await Nf.deletedProvidersPage(e,n);
    for(let e of r)e.deletedAt!==null&&(t+=e.usage.points);
    if(n+=r.length+i,r.length+i<500)break
  }
  return t
}

function kD(e,t,n){
  let r=e?.supplierId??null,i=e?.includeDescendants??!1,a=q(({
    principal:e
  })=>e?.role===`admin`||e?.role===`observer`),o=`${r??``}/${i}`,[s,c]=(0,_.useState)(null);
  if((0,_.useEffect)(()=>{
    if(t===null)return;let e=!1,n=r===null?null:{
      supplierId:r,includeDescendants:i
    },s={
      since:wh(t),until:t
    };return(async()=>{
      try{
        let[t,r,i]=await Promise.all([Nf.providerStats(n,{
          ...s,deleted:!1
        }),a?DD(async()=>(await Nf.providerStats(n,{
          ...s,deleted:!0
        })).points):null,DD(()=>OD(n))]);e||c({
          key:o,today:t.points+(r??0),gone:i,isKnown:!0
        })
      }catch(t){
        if(!(t instanceof U||t instanceof W||t instanceof bt))throw t;t instanceof U&&t.status===401?q.getState().expire():e||c({
          key:o,today:null,gone:null,isKnown:!1
        })
      }
    })(),()=>{
      e=!0
    }
  },[o,r,i,t,a]),s===null||s.key!==o)return`pending`;
  let l=s.isKnown&&n!==null?n+(s.gone??0):null;
  return{
    today:s.today,total:l
  }
}

function AD(e,t,n){
  let r=q(({
    principal:e
  })=>e?.id??null),i=q_(t),a=i===`pending`||i===null?null:wD(i,e,r),o=i!==`pending`&&a===null,s=Kh(),c=e===null&&(s===`pending`||s===null||s.tops.size>0),l=kD(e,o&&!c?t:null,n);
  return i===`pending`?`pending`:a===null?c?{
    today:null,total:null
  }
  :l:a
}

var jD={
  board:`DotTitle-module__board___JBykg`
},MD=8,ND={
  side:.1,above:.35,below:.35
};

function PD(e){
  let{
    fontWeight:t,fontSize:n,fontFamily:r
  }
  =getComputedStyle(e);
  return`${t} ${n} ${r}`
}

function FD(e,t,n){
  let r=getComputedStyle(e),i=Number.parseFloat(r.fontSize),a=Number.parseFloat(r.letterSpacing)||0,o=MD/n,s=document.createElement(`canvas`);
  s.width=Math.ceil((e.offsetWidth+2*ND.side*i)*o),s.height=Math.ceil((1+ND.above+ND.below)*i*o);
  let c=s.getContext(`2d`,{
    willReadFrequently:!0
  });
  if(c===null||s.width===0||s.height===0)return null;
  c.scale(o,o),c.font=PD(e),c.textBaseline=`alphabetic`;
  let l=ND.side*i;
  for(let e of t)c.fillText(e,l,(ND.above+.88)*i),l+=c.measureText(e).width+a;
  let{
    data:u
  }
  =c.getImageData(0,0,s.width,s.height),d=new Uint8Array(s.width*s.height);
  for(let e=0;e<d.length;e+=1)d[e]=u[e*4+3]??0;
  return Ky({
    alpha:d,width:s.width,height:s.height
  },MD)
}

var ID=32,LD=3,RD=.74,zD=[.3,.2,.11],BD=.2,VD=()=>Math.min(window.devicePixelRatio||1,3);

function HD(e){
  let t=VD();
  return Math.max(LD,Math.round(e/ID*t))/t
}

function UD(e,t){
  let n=VD(),{
    pitch:r
  }
  =t,i=r*RD,a=Math.floor(i*n+1e-6)/n,o=1/n,s=Math.ceil((zD.length+1)*r),c=(t,n)=>e.lines[n]?.[t]===`#`,l=new Path2D,u=new Path2D,d=new Path2D;
  for(let t=0;t<e.rows;t+=1)for(let n=0;n<e.columns;n+=1){
    if(!c(n,t))continue;
    let[e,i]=[s+n*r,s+t*r];
    l.rect(e,i,a,a),u.rect(e+a,i,o,a),u.rect(e,i+a,a+o,o),c(n,t-1)&&c(n-1,t)||d.rect(e,i,a,a)
  }
  let f=zD.map(()=>new Path2D);
  for(let t of qy(e,zD.length))f[t.depth-1]?.rect(s+t.column*r,s+t.row*r,i,i);
  let p={
    width:e.columns*r,height:e.rows*r
  };
  return{
    dpr:n,margin:s,width:p.width+2*s,height:p.height+2*s,top:Math.round((t.height-p.height)*n)/n,cores:l,rims:u,rimStrength:i*n-a*n,lit:d,shades:f
  }
}

function WD(e,t){
  e.clearRect(0,0,t.width,t.height),t.shades.forEach((t,n)=>{
    e.globalAlpha=zD[n]??0,e.fill(t)
  }),e.globalAlpha=1,e.fill(t.cores),e.globalAlpha=t.rimStrength,e.fill(t.rims);
  let n=e.fillStyle;
  e.fillStyle=`#fff`,e.globalAlpha=BD,e.fill(t.lit),e.fillStyle=n,e.globalAlpha=1
}

var GD=36;

function KD(e){
  let t=0;
  for(let n=e;n instanceof HTMLElement;n=n.offsetParent)t+=n.offsetTop;
  return t
}

function qD(e,{
  inset:t,under:n
}){
  let r=e.closest(`header`);
  if(r===null)return;
  let[i=null,a=null]=r.querySelectorAll(`dl`),o=e.nextElementSibling,s=document.querySelector(`.header-actions`),c=KD(e)-(Number.parseFloat(getComputedStyle(e).top)||0),l=c+e.offsetHeight,u=s instanceof HTMLElement&&s.offsetHeight>0?KD(s)+s.offsetHeight/2+GD/2:KD(r),d=o instanceof HTMLElement&&KD(o)>=l,f=i===null||d?0:Jy(c+t-u,KD(i)+n-l),p=i!==null&&a!==null&&KD(a)<KD(i)+i.offsetHeight;
  r.style.setProperty(`--title-drop`,`${f}px`),r.style.setProperty(`--refresh-drop`,`${p?0:f}px`)
}

function JD({
  text:e,under:t
}){
  let[n,r]=(0,_.useState)(!1),i=(0,_.useRef)(null);
  return(0,_.useLayoutEffect)(()=>{
    let n=i.current,a=n?.closest(`h1`),o=n?.getContext(`2d`);if(!n||!a||!o)return;let s=a.closest(`header`),c=!1,l=!1,u=0,d=()=>{
      let t=HD(Number.parseFloat(getComputedStyle(a).fontSize)),i=FD(a,e,t),s=i===null?null:UD(i,{
        pitch:t,height:a.offsetHeight
      });if(r(s!==null),u=s?.top??0,s===null)return;n.width=Math.round(s.width*s.dpr),n.height=Math.round(s.height*s.dpr),Object.assign(n.style,{
        left:`${-s.margin}px`,top:`${s.top-s.margin}px`,width:`${s.width}px`,height:`${s.height}px`
      }),o.setTransform(s.dpr,0,0,s.dpr,0,0);let c=getComputedStyle(n),l=o.createLinearGradient(s.margin,s.margin,s.width-s.margin,s.height-s.margin);l.addColorStop(0,c.getPropertyValue(`--aero`).trim()),l.addColorStop(1,c.getPropertyValue(`--aero-indigo`).trim()),o.fillStyle=l,WD(o,s)
    },f=new ResizeObserver(e=>{
      c&&e.some(e=>e.target===a)&&d(),qD(a,{
        inset:u,under:t
      })
    });return f.observe(a),s!==null&&f.observe(s),qD(a,{
      inset:u,under:t
    }),document.fonts.load(PD(a),e).then(()=>{
      l||(c=!0,d(),qD(a,{
        inset:u,under:t
      }))
    }),()=>{
      l=!0,f.disconnect(),s?.style.removeProperty(`--title-drop`),s?.style.removeProperty(`--refresh-drop`)
    }
  },[e,t]),(0,V.jsx)(`span`,{
    className:jD.board,"data-dot-title":!0,"data-drawn":n||void 0,"aria-hidden":`true`,children:(0,V.jsx)(`canvas`,{
      ref:i
    })
  })
}

var YD={
  wave:`WaveRefresh-module__wave___kX85M`,field:`WaveRefresh-module__field___OL32W`
},XD=4,ZD={
  least:1.6,most:3
},QD={
  least:.1,calm:.5,most:.92
},$D={
  inset:10,half:10,ramp:7
},eO=4.6,tO={
  out:.58,in:1
},nO=2.6,rO=2,iO=e=>{
  let t=Math.min(1,Math.max(0,e));
  return t*t*(3-2*t)
};

function aO(e,t,n){
  let[r,i]=[Math.ceil(t.width/XD),Math.ceil(t.height/XD)],[a,o]=[(t.width-(r-1)*XD)/2,(t.height-(i-1)*XD)/2],s=tO.out+(tO.in-tO.out)*(.5+.5*Math.sin(2*Math.PI*n/eO));
  e.clearRect(0,0,t.width,t.height);
  for(let c=0;c<i;c+=1)for(let i=0;i<r;i+=1){
    let[r,l]=[a+i*XD,o+c*XD],u=Math.hypot(Math.max($D.inset-r,r-(t.width-$D.inset),0),Math.max(Math.abs(l-t.height/2)-$D.half,0)),d=QD.calm+(QD.most-QD.calm)*iO(u/$D.ramp),f=.5+.3*Math.sin(i*.34+c*.2-n*1.9)+.2*Math.sin(i*.16-c*.4+n*1.3),p=ZD.least+(ZD.most-ZD.least)*f;
    e.globalAlpha=(QD.least+(d-QD.least)*f)*s,e.fillRect(r-p/2,l-p/2,p,p)
  }
}

function oO({
  label:e,busy:t,disabled:n,onRefresh:r
}){
  let i=(0,_.useRef)(null),a=(0,_.useRef)(1);
  return(0,_.useEffect)(()=>{
    a.current=t?nO:1
  },[t]),(0,_.useLayoutEffect)(()=>{
    let e=i.current,t=e?.closest(`button`),n=e?.getContext(`2d`);if(!e||!t||!n)return;let r={
      width:0,height:0
    },o=rO,s=null,c=null,l=e=>{
      s!==null&&(o+=(e-s)*a.current),s=e,aO(n,r,o)
    },u=()=>{
      r={
        width:t.clientWidth,height:t.clientHeight
      };let i=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(r.width*i),e.height=Math.round(r.height*i),n.setTransform(i,0,0,i,0,0);let a=getComputedStyle(e),s=n.createLinearGradient(0,0,r.width,0);s.addColorStop(0,a.getPropertyValue(`--aero`).trim()),s.addColorStop(1,a.getPropertyValue(`--aero-indigo`).trim()),n.fillStyle=s,aO(n,r,o)
    },d=e=>{
      let t=e&&!yl();t&&c===null&&(s=null,c=vg(l)),!t&&c!==null&&(c(),c=null)
    },f=new ResizeObserver(u),p=new IntersectionObserver(e=>d(e.at(-1)?.isIntersecting??!0));return f.observe(t),p.observe(t),u(),()=>{
      c?.(),f.disconnect(),p.disconnect()
    }
  },[]),(0,V.jsxs)(`button`,{
    type:`button`,className:YD.wave,onClick:r,disabled:n,"aria-busy":t,"aria-label":e,"data-wave-refresh":!0,children:[(0,V.jsx)(`span`,{
      className:YD.field,"aria-hidden":`true`,children:(0,V.jsx)(`canvas`,{
        ref:i
      })
    }),(0,V.jsx)(rp,{
      size:15,className:t?Lm.spinning:void 0
    }),(0,V.jsx)(`span`,{
      children:e
    })]
  })
}

var sO={
  columns:42,rows:15,pitch:6
};

function lO({
  name:e,tone:t,icon:Icon,children:r
}){
  return(0,V.jsxs)(`div`,{
    className:J.hero,"data-kpi-tone":t,children:[(0,V.jsxs)(`dt`,{
      className:J.heroName,children:[(0,V.jsx)(Icon,{size:15,"aria-hidden":true,className:`console-kpi-icon`}),e]
    }),(0,V.jsx)(`dd`,{
      className:J.heroValue,children:r
    })]
  })
}

function uO(e){
  let{
    headline:t,scope:n,loadedAt:r,earned:i,refreshing:a,onRefresh:o,onDeploy:s
  }
  =e,{
    t:c,i18n:l
  }
  =N(),d=bl(),f=AD(n,r,i),p=e=>Dh(e,l.language),m=e=>f===`pending`?(0,V.jsx)(Am,{
    width:148,height:34,rounded:8
  }):p(e??null);
  return(0,V.jsxs)(`header`,{
    className:J.header,ref:d,children:[(0,V.jsxs)(`div`,{
      className:J.top,children:[(0,V.jsxs)(`h1`,{
        className:J.title,children:c(`account_table.title`)
      }),(0,V.jsxs)(`div`,{
        className:J.actions,children:[s!==null&&(0,V.jsx)(jS,{
          onOpen:s
        }),t!==null&&(0,V.jsxs)(`button`,{
          type:`button`,className:`${Lm.ghostAction} ${J.refresh}`,onClick:o,disabled:a||t===`pending`,"aria-busy":a,"aria-label":c(`pool.refresh`),children:[(0,V.jsx)(rp,{
            size:14,className:a?Lm.spinning:void 0
          }),(0,V.jsx)(`span`,{
            children:c(`pool.refresh`)
          })]
        })]
      })]
    }),t!==null&&(0,V.jsxs)(`div`,{
      className:J.band,children:[(0,V.jsxs)(`dl`,{
        className:J.heroes,children:[(0,V.jsx)(lO,{
          name:c(`pool.stat_today`),tone:`today`,icon:TrendingUp,children:m(f===`pending`?null:f.today)
        }),(0,V.jsx)(lO,{
          name:c(`pool.stat_total`),tone:`total`,icon:ChartNoAxesColumnIncreasing,children:m(f===`pending`?null:f.total)
        })]
      }),(0,V.jsx)(PS,{
        headline:t,layout:`paired`
      })]
    })]
  })
}

var dO={
  quota:`PoolQuota-module__quota___nGWLl`,windows:`PoolQuota-module__windows___nsrkk`,window:`PoolQuota-module__window___4b689`,bar:`PoolQuota-module__bar___Vt4wT`,share:`PoolQuota-module__share___1db2N`
},fO=4,pO=6,mO=2;

function gO({
  share:e
}){
  let t=(0,_.useCallback)(t=>{
    let{
      context:n,grid:r
    }
    =t,i=Lx(e,r.columns),{
      quiet:o
    }
    =Yg(),s=e!==null&&e>=.7?`#F59E0B`:`#10B981`;for(let e=0;e<r.columns;e+=1){
      let t=e<i;n.fillStyle=t?s:o,n.globalAlpha=t?1:$g;for(let t=0;t<r.rows;t+=1)n.fillRect(e*pO,t*pO,fO,fO)
    }
  },[e]);
  return(0,V.jsx)(bg,{
    rows:mO,pitch:pO,dot:fO,paint:t,isAnimated:!1
  })
}

function _O({
  accounts:e
}){
  let{
    t,i18n:n
  }
  =N(),r=q(e=>e.principal?.role===`admin`),i=(0,_.useMemo)(()=>e===null?null:Nx.map(t=>Ix(e,t)),[e]);
  if(!r||e?.length===0)return null;
  let a=e=>Eh(e,n.language);
  return(0,V.jsxs)(`div`,{
    className:dO.quota,"data-pool-quota":!0,children:[(0,V.jsx)(`p`,{
      className:`visually-hidden`,children:t(`pool.quota_label`)
    }),(0,V.jsx)(`dl`,{
      className:dO.windows,children:Nx.map((e,n)=>{
        let r=i?.[n],o=t(`pool.col_${e}`),s=r===void 0?void 0:r.mean===null?t(`pool.quota_hint_none`,{
          name:o
        }):t(`pool.quota_hint`,{
          name:o,share:Oh(r.mean),sampled:a(r.sampled),high:a(r.high)
        });return(0,V.jsxs)(`div`,{
          className:dO.window,title:s,"data-quota":e,children:[(0,V.jsxs)(`dt`,{
            children:[(0,V.jsx)(`span`,{
              "aria-hidden":`true`,children:t(`pool.short_${e}`)
            }),(0,V.jsx)(`span`,{
              className:`visually-hidden`,children:o
            })]
          }),(0,V.jsx)(`dd`,{
            className:dO.bar,"aria-hidden":`true`,children:(0,V.jsx)(gO,{
              share:r?.mean??null
            })
          }),(0,V.jsx)(`dd`,{
            className:dO.share,children:r===void 0?(0,V.jsx)(Am,{
              width:28,height:12,rounded:4
            }):Oh(r.mean)
          })]
        },e)
      })
    })]
  })
}

var vO={
  wrap:`Select-module__wrap___8GKsa`,wrapFullWidth:`Select-module__wrapFullWidth___uQ1gt`,trigger:`Select-module__trigger___nKY0l`,triggerSm:`Select-module__triggerSm___0Ozlc`,triggerText:`Select-module__triggerText___zQEIp`,placeholder:`Select-module__placeholder___N04iW`,triggerIcon:`Select-module__triggerIcon___ipYKn`,dropdown:`Select-module__dropdown___6YdcD`,option:`Select-module__option___EKsSG`,optionActive:`Select-module__optionActive___y280o`,optionHighlighted:`Select-module__optionHighlighted___CPa3K`
};

function yO({
  value:e,options:t,onChange:n,placeholder:r,className:i,dropdownClassName:a,dropdownMinWidth:o,disabled:s=!1,ariaLabel:c,ariaLabelledBy:l,ariaDescribedBy:u,ariaInvalid:d,fullWidth:f=!0,size:p=`md`,id:m
}){
  let h=(0,_.useId)(),g=m??h,v=`${g}-listbox`,[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(-1),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(null),E=(0,_.useRef)(null),[D,O]=(0,_.useState)(null),k=y&&!s;
  (0,_.useEffect)(()=>{
    if(!y||s)return;let e=e=>{
      let t=e.target;C.current?.contains(t)||T.current?.contains(t)||b(!1)
    };return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)
  },[s,y]);
  let A=(0,_.useCallback)(()=>{
    C.current&&O(Fb(C.current.getBoundingClientRect(),window.innerWidth,window.innerHeight,o))
  },[o]),j=(0,_.useCallback)(()=>{
    typeof window<`u`&&(E.current!==null&&window.cancelAnimationFrame(E.current),E.current=window.requestAnimationFrame(()=>{
      E.current=null,A()
    }))
  },[A]);
  (0,_.useLayoutEffect)(()=>{
    if(!k){
      E.current!==null&&typeof window<`u`&&(window.cancelAnimationFrame(E.current),E.current=null);return
    }
    A();let e=()=>{
      j()
    },t=typeof ResizeObserver<`u`&&C.current?new ResizeObserver(()=>{
      j()
    }):null;return t&&C.current&&t.observe(C.current),window.addEventListener(`resize`,e),window.addEventListener(`scroll`,e,!0),()=>{
      window.removeEventListener(`resize`,e),window.removeEventListener(`scroll`,e,!0),t?.disconnect(),E.current!==null&&(window.cancelAnimationFrame(E.current),E.current=null)
    }
  },[k,j,A]);
  let ee=(0,_.useMemo)(()=>t.findIndex(t=>t.value===e),[t,e]),te=x>=0?x:ee>=0?ee:t.length>0?0:-1,ne=ee>=0?t[ee]:void 0,re=ne?.label??r??``,ie=!ne&&r,ae=(0,_.useCallback)(e=>{
    let r=t[e];r&&(n(r.value),b(!1),S(e),w.current?.focus({
      preventScroll:!0
    }))
  },[n,t]),oe=(0,_.useCallback)(e=>{
    if(t.length===0)return;let n=(te+e+t.length)%t.length;S(n)
  },[t.length,te]),se=(0,_.useCallback)(e=>{
    if(!s)switch(e.key){
      case`ArrowDown`:if(e.preventDefault(),!k){
        b(!0);return
      }
      oe(1);return;case`ArrowUp`:if(e.preventDefault(),!k){
        b(!0);return
      }
      oe(-1);return;case`Home`:if(!k||t.length===0)return;e.preventDefault(),S(0);return;case`End`:if(!k||t.length===0)return;e.preventDefault(),S(t.length-1);return;case`Enter`:case` `:if(e.preventDefault(),!k){
        b(!0);return
      }
      te>=0&&ae(te);return;case`Escape`:if(!k)return;e.preventDefault(),e.stopPropagation(),b(!1),w.current?.focus({
        preventScroll:!0
      });return;case`Tab`:k&&b(!1);return;default:return
    }
  },[ae,s,k,oe,t.length,te]);
  (0,_.useEffect)(()=>{
    !k||te<0||document.getElementById(`${g}-option-${te}`)?.scrollIntoView({
      block:`nearest`
    })
  },[k,te,g]);
  let ce=k&&D?(0,V.jsx)(`div`,{
    ref:T,className:`${vO.dropdown} ${a??``}`.trim(),id:v,role:`listbox`,"aria-label":c,style:D,children:t.map((t,n)=>{
      let r=t.value===e,i=n===te;return(0,V.jsx)(`button`,{
        id:`${g}-option-${n}`,type:`button`,role:`option`,"aria-selected":r,className:`${vO.option} ${r?vO.optionActive:``} ${i?vO.optionHighlighted:``}`.trim(),onMouseEnter:()=>S(n),onKeyDown:se,onClick:()=>ae(n),children:t.label
      },t.value)
    })
  }):null;
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(`div`,{
      className:`${vO.wrap} ${f?vO.wrapFullWidth:``} ${i??``}`,ref:C,children:(0,V.jsxs)(`button`,{
        id:g,ref:w,type:`button`,className:`${vO.trigger} ${p===`sm`?vO.triggerSm:``}`.trim(),onClick:s?void 0:()=>b(e=>!e),onKeyDown:se,"aria-haspopup":`listbox`,"aria-expanded":k,"aria-controls":k?v:void 0,"aria-activedescendant":k&&te>=0?`${g}-option-${te}`:void 0,"aria-label":c?`${c}: ${re}`:void 0,"aria-labelledby":l?`${l} ${g}`:void 0,"aria-describedby":u,"aria-invalid":d,disabled:s,children:[(0,V.jsx)(`span`,{
          className:`${vO.triggerText} ${ie?vO.placeholder:``}`,children:re
        }),(0,V.jsx)(`span`,{
          className:vO.triggerIcon,"aria-hidden":`true`,children:(0,V.jsx)(sp,{
            size:14
          })
        })]
      })
    }),ce&&(typeof document>`u`?ce:(0,kc.createPortal)(ce,document.body))]
  })
}

var bO={
  toolbar:`AuthFilesToolbar-module__toolbar___-IN5-`,search:`AuthFilesToolbar-module__search___TVEh5`,searchIcon:`AuthFilesToolbar-module__searchIcon___HxXJf`,segmented:`AuthFilesToolbar-module__segmented___HXjZK`,segment:`AuthFilesToolbar-module__segment___06gbO`,segmentActive:`AuthFilesToolbar-module__segmentActive___eLour`,segmentProblem:`AuthFilesToolbar-module__segmentProblem___KA2m0`,sort:`AuthFilesToolbar-module__sort___rcK-F`,display:`AuthFilesToolbar-module__display___ZE5ls`,displayButton:`AuthFilesToolbar-module__displayButton___Mztl4`,displayButtonActive:`AuthFilesToolbar-module__displayButtonActive___Fsx4N`,popover:`AuthFilesToolbar-module__popover___SiFCo`,"toolbar-popover-in":`AuthFilesToolbar-module__toolbar-popover-in___SWmG3`,toolbarPopoverIn:`AuthFilesToolbar-module__toolbar-popover-in___SWmG3`,popoverRow:`AuthFilesToolbar-module__popoverRow___i9RYt`,pageSizeInput:`AuthFilesToolbar-module__pageSizeInput___bweMg`,deleteAction:`AuthFilesToolbar-module__deleteAction___sqkPZ`
},xO={
  segmentedFit:`PoolToolbar-module__segmentedFit___MIyTd`,tail:`PoolToolbar-module__tail___Ab6Du`,segmentOn:`PoolToolbar-module__segmentOn___FRbAw`,pending:`PoolToolbar-module__pending___ENBPJ`,segmentInner:`PoolToolbar-module__segmentInner___vjmc7`,valley:`PoolToolbar-module__valley___CIhTh`,ghostMark:`PoolToolbar-module__ghostMark___-WL54`,segmentCount:`PoolToolbar-module__segmentCount___uKkjt`,lookup:`PoolToolbar-module__lookup___1Udxr`,search:`PoolToolbar-module__search___e1Zz8`,filters:`PoolToolbar-module__filters___YqPvl`,owner:`PoolToolbar-module__owner___HMLf5`,tag:`PoolToolbar-module__tag___r697A`,sort:`PoolToolbar-module__sort___OTBNl`,ownerOption:`PoolToolbar-module__ownerOption___URT0L`,ownerName:`PoolToolbar-module__ownerName___uhKjy`,ownerFaults:`PoolToolbar-module__ownerFaults___KTlfp`,ownerCount:`PoolToolbar-module__ownerCount___cn1YU`,sortMenu:`PoolToolbar-module__sortMenu___ECgPc`,facet:`PoolToolbar-module__facet___jS56s`,facetLabel:`PoolToolbar-module__facetLabel___wW3Pm`,chip:`PoolToolbar-module__chip___zJYkR`
};

function SO({
  errorTypes:e,filter:t,onFilter:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=Db(),o=t.errorType,s=o===null||e.some(e=>e.type===o)?e:[{
    type:o,count:0
  },...e];
  return o===null&&!(t.state===`fault`&&s.length>0)?null:(0,V.jsxs)(`fieldset`,{
    className:xO.facet,children:[(0,V.jsx)(`legend`,{
      className:xO.facetLabel,children:r(`pool.error_type_label`)
    }),s.map(({
      type:e,count:r
    })=>(0,V.jsxs)(`button`,{
      type:`button`,className:xO.chip,"aria-pressed":o===e,onClick:()=>n({
        ...t,errorType:o===e?null:e
      }),children:[a(e),(0,V.jsx)(`span`,{
        className:xO.segmentCount,children:Eh(r,i.language)
      })]
    },e))]
  })
}

var CO=new Map;

function wO(e,t,n=CO){
  let r=new Map;
  for(let{
    row:t,state:n
  }
  of e){
    if(t.owner===null)continue;
    let e=r.get(t.owner.id)??{
      email:t.owner.email,accounts:0,faults:0
    };
    e.accounts+=1,n===`fault`&&(e.faults+=1),r.set(t.owner.id,e)
  }
  return[...r].map(([e,r])=>({
    id:e,...r,remark:n.get(e)??null,isSelf:e===t
  })).toSorted((e,t)=>Number(t.isSelf)-Number(e.isSelf)||t.accounts-e.accounts||(e.email??e.id).localeCompare(t.email??t.id))
}

function TO(e,t){
  let n=t.toLowerCase().split(/\s+/).filter(Boolean);
  return n.length===0?e:e.filter(e=>{
    let t=`${e.remark??``} ${e.email??e.id}`.toLowerCase();return n.every(e=>t.includes(e))
  })
}

var EO={
  panel:`SearchPanel-module__panel___uzNIG`,options:`SearchPanel-module__options___X4QtX`,option:`SearchPanel-module__option___l5HBT`,optionNote:`SearchPanel-module__optionNote___J0FS-`,status:`SearchPanel-module__status___Lk4SY`
},DO=320;

function OO({
  owners:e,total:t,chosen:n,onChoose:r
}){
  let{
    t:i,i18n:a
  }
  =N(),o=Rb(DO),[s,c]=(0,_.useState)(``),l=TO(e,s),u=e.find(e=>e.id===n)??null,d=e=>e.isSelf?i(`owner.self`):e.remark??e.email??e.id,f=u===null?i(`owner.all`):u.isSelf?i(`owner.self`):u.remark??Th(u.email??u.id),p=e=>Eh(e,a.language),m=()=>{
    o.close(),c(``)
  },h=e=>{
    r(e),m()
  },g=(e,t)=>i(t>0?`owner.tally_faults`:`owner.tally`,{
    accounts:p(e),faults:p(t)
  }),v=({
    key:e,picks:t,name:r,note:i,held:a
  })=>(0,V.jsx)(`li`,{
    children:(0,V.jsxs)(`button`,{
      type:`button`,className:`${EO.option} ${xO.ownerOption}`,"data-choice":!0,"aria-current":t===n||void 0,onClick:()=>h(t),children:[(0,V.jsxs)(`span`,{
        className:xO.ownerName,children:[r,i!==null&&(0,V.jsxs)(`span`,{
          className:EO.optionNote,children:[` `,i]
        })]
      }),a.faults>0&&(0,V.jsxs)(`span`,{
        className:xO.ownerFaults,"aria-hidden":`true`,children:[(0,V.jsx)(Tb,{
          state:`fault`
        }),p(a.faults)]
      }),(0,V.jsx)(`span`,{
        className:xO.ownerCount,"aria-hidden":`true`,children:p(a.accounts)
      }),(0,V.jsx)(`span`,{
        className:`visually-hidden`,children:g(a.accounts,a.faults)
      })]
    })
  },e);
  return(0,V.jsxs)(`div`,{
    className:xO.owner,ref:o.rootRef,children:[(0,V.jsxs)(`button`,{
      ref:o.triggerRef,type:`button`,className:vO.trigger,"aria-haspopup":`true`,"aria-expanded":o.open,"aria-label":`${i(`owner.filter_label`)}: ${u===null?f:d(u)}`,title:u?.email??f,onClick:o.toggle,children:[(0,V.jsx)(`span`,{
        className:vO.triggerText,children:f
      }),(0,V.jsx)(`span`,{
        className:vO.triggerIcon,"aria-hidden":`true`,children:(0,V.jsx)(sp,{
          size:14
        })
      })]
    }),o.placement!==null&&(0,V.jsxs)(`search`,{
      className:EO.panel,style:o.placement,"data-opens":o.opensUp?`up`:`down`,onKeyDown:e=>{
        e.key===`Escape`&&c(``),o.onKeyDown(e)
      },children:[(0,V.jsx)(Ub,{
        type:`search`,"aria-label":i(`owner.search_label`),placeholder:i(`owner.search_placeholder`),autoComplete:`off`,spellCheck:!1,value:s,onChange:e=>c(e.target.value),onKeyDown:e=>{
          let[t]=l;e.key===`Enter`&&!e.nativeEvent.isComposing&&t&&(e.preventDefault(),h(t.id))
        }
      }),(0,V.jsxs)(`ul`,{
        className:EO.options,"data-panel-list":!0,"aria-label":i(`owner.filter_label`),children:[s.trim()===``&&v({
          key:`all`,picks:null,name:i(`owner.all`),note:null,held:{
            accounts:t,faults:0
          }
        }),l.map(e=>v({
          key:e.id,picks:e.id,name:d(e),note:e.remark===null||e.isSelf?null:e.email,held:e
        }))]
      }),l.length===0&&(0,V.jsx)(`output`,{
        className:EO.status,children:i(`owner.none`)
      })]
    })]
  })
}

var kO=`000`;

function AO({
  view:e
}){
  let{
    t,i18n:n
  }
  =N(),r=(e,n)=>(0,V.jsxs)(`span`,{
    className:xO.segmentInner,children:[e!==null&&(0,V.jsx)(Tb,{
      state:e
    }),t(e===null?`pool.filter_all`:`state.${e}`),(0,V.jsx)(`span`,{
      className:xO.segmentCount,children:n
    })]
  });
  if(e===null)return(0,V.jsx)(`div`,{
    className:`${bO.segmented} ${xO.segmentedFit} ${xO.pending}`,"aria-hidden":`true`,children:[null,...bv].map(e=>(0,V.jsx)(`span`,{
      className:bO.segment,children:r(e,kO)
    },e??`all`))
  });
  let{
    counts:i,chosen:a,onChoose:o,valley:s
  }
  =e,c=bv.reduce((e,t)=>e+i[t],0),l=`${bO.segmentActive} ${xO.segmentOn}`,u=e=>a===e&&s?.chosen!==!0,d=(e,t)=>(0,V.jsx)(`button`,{
    type:`button`,className:`${bO.segment} ${u(e)?l:``}`,"aria-pressed":u(e),onClick:()=>{
      s?.onLeave(),o(e)
    },children:r(e,Eh(t,n.language))
  },e??`all`),f=bv.at(-1);
  return(0,V.jsxs)(`div`,{
    className:`${bO.segmented} ${xO.segmentedFit}`,children:[d(null,c),bv.map(e=>s!==null&&e===f?(0,V.jsxs)(`span`,{
      className:xO.tail,children:[d(e,i[e]),(0,V.jsx)(`button`,{
        type:`button`,className:`${bO.segment} ${xO.valley} ${s.chosen?l:``}`,"aria-pressed":s.chosen,onClick:s.onEnter,"data-valley":!0,children:(0,V.jsxs)(`span`,{
          className:xO.segmentInner,children:[(0,V.jsx)(PC,{
            className:xO.ghostMark
          }),t(`pool.valley`),(0,V.jsx)(`span`,{
            className:xO.segmentCount,children:Eh(s.count,n.language)
          })]
        })
      })]
    },e):d(e,i[e]))]
  })
}

var jO=208,MO=``,NO=40,PO=[`owner`,`tag`];

function FO(){
  let e=(sr(`ac3-pool-filters`)??`tag`).split(`,`);
  return new Set(PO.filter(t=>e.includes(t)))
}

var IO=(0,V.jsx)(Am,{
  height:NO,rounded:8
}),LO=e=>(0,V.jsx)(`div`,{
  className:e,"aria-hidden":`true`,children:IO
}),RO=({
  filter:e,tags:t
})=>e.tag===null||t.includes(e.tag)?t:[e.tag,...t];

function zO({
  view:e
}){
  let{
    filter:t,onFilter:n
  }
  =e,{
    t:r
  }
  =N(),i=RO(e);
  return i.length===0?null:(0,V.jsx)(yO,{
    className:xO.tag,value:t.tag??MO,options:[{
      value:MO,label:r(`tag.all`)
    },...i.map(e=>({
      value:e,label:e
    }))],onChange:e=>n({
      ...t,tag:e===MO?null:e
    }),ariaLabel:r(`tag.filter_label`)
  })
}

function BO({
  view:e
}){
  let{
    filter:t,sort:n,owners:r,onFilter:i,onSort:a
  }
  =e,{
    t:o
  }
  =N();
  return(0,V.jsxs)(V.Fragment,{
    children:[r!==null&&(0,V.jsx)(OO,{
      owners:r,total:e.total,chosen:t.owner,onChoose:e=>i({
        ...t,owner:e
      })
    }),e.valley?.chosen===!0?null:(0,V.jsx)(yO,{
      className:xO.sort,value:n,options:Sv.map(e=>({
        value:e,label:o(`pool.sort_${e}`)
      })),onChange:e=>{
        let t=Sv.find(t=>t===e);t!==void 0&&a(t)
      },ariaLabel:o(`pool.sort_label`),dropdownMinWidth:jO,dropdownClassName:xO.sortMenu
    })]
  })
}

function VO({
  view:e,scope:t
}){
  let{
    t:n
  }
  =N(),r=e!==null&&e.owners!==null,i=e!==null&&RO(e).length>0,a=e!==null;
  (0,_.useEffect)(()=>{
    a&&cr(dt,PO.filter(e=>e===`owner`?r:i).join(`,`))
  },[a,r,i]);
  let o=e===null?FO():null,s=e?.valley?.chosen===!0;
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsxs)(`div`,{
      className:bO.toolbar,children:[(0,V.jsx)(AO,{
        view:e===null?null:{
          counts:e.counts,chosen:e.filter.state,onChoose:t=>e.onFilter({
            ...e.filter,state:t
          }),valley:e.valley
        }
      }),(0,V.jsxs)(`div`,{
        className:xO.lookup,children:[(0,V.jsx)(`div`,{
          className:`${bO.search} ${xO.search}`,"aria-hidden":e===null||void 0,children:e===null?IO:(0,V.jsx)(Ub,{
            type:`search`,value:e.filter.query,onChange:t=>e.onFilter({
              ...e.filter,query:t.target.value
            }),placeholder:n(`pool.search_placeholder`),"aria-label":n(`pool.search_label`),rightElement:(0,V.jsx)(up,{
              className:bO.searchIcon,size:16
            })
          })
        }),(0,V.jsxs)(`div`,{
          className:xO.filters,children:[e===null?o?.has(`tag`)&&LO(xO.tag):!s&&(0,V.jsx)(zO,{
            view:e
          }),t!==null&&(0,V.jsx)(`div`,{
            className:xO.owner,children:t
          }),e===null?(0,V.jsxs)(V.Fragment,{
            children:[t===null&&o?.has(`owner`)&&LO(xO.owner),LO(xO.sort)]
          }):(0,V.jsx)(BO,{
            view:e
          })]
        })]
      })]
    }),e!==null&&!s&&(0,V.jsx)(SO,{
      errorTypes:e.errorTypes,filter:e.filter,onFilter:e.onFilter
    })]
  })
}

function HO({
  title:e,description:t,action:n
}){
  return(0,V.jsxs)(`div`,{
    className:`empty-state`,children:[(0,V.jsxs)(`div`,{
      className:`empty-content`,children:[(0,V.jsx)(`div`,{
        className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(hp,{
          size:20
        })
      }),(0,V.jsxs)(`div`,{
        children:[(0,V.jsx)(`div`,{
          className:`empty-title`,children:e
        }),t&&(0,V.jsx)(`div`,{
          className:`empty-desc`,children:t
        })]
      })]
    }),n&&(0,V.jsx)(`div`,{
      className:`empty-action`,children:n
    })]
  })
}

var UO={
  root:`SelectionCheckbox-module__root___LiMQt`,disabled:`SelectionCheckbox-module__disabled___-T-uP`,input:`SelectionCheckbox-module__input___b-Hpm`,box:`SelectionCheckbox-module__box___FRD4m`,boxChecked:`SelectionCheckbox-module__boxChecked___4lydu`,label:`SelectionCheckbox-module__label___twhQj`
};

function WO({
  checked:e,onChange:t,label:n,ariaLabel:r,title:i,disabled:a=!1,className:o,labelClassName:s
}){
  let c=[UO.root,a?UO.disabled:``,o].filter(Boolean).join(` `),l=[UO.box,e?UO.boxChecked:``].filter(Boolean).join(` `),u=[UO.label,s].filter(Boolean).join(` `);
  return(0,V.jsxs)(`label`,{
    className:c,title:i,children:[(0,V.jsx)(`input`,{
      className:UO.input,type:`checkbox`,checked:e,onChange:e=>{
        t(e.target.checked)
      },"aria-label":r,disabled:a
    }),(0,V.jsx)(`span`,{
      className:l,children:e?(0,V.jsx)(fp,{
        size:12
      }):null
    }),n?(0,V.jsx)(`div`,{
      className:u,children:n
    }):null]
  })
}

var GO={
  ID:`印尼`,AE:`阿联酋`,SA:`沙特`
},KO=new Map;

function qO(e,t){
  let n=t.startsWith(`zh`)?GO[e]:void 0;
  if(n!==void 0)return n;
  let r=KO.get(t);
  r===void 0&&(r=new Intl.DisplayNames([t],{
    type:`region`,fallback:`code`
  }),KO.set(t,r));
  try{
    return r.of(e)??e
  }catch(t){
    if(!(t instanceof RangeError))throw t;
    return e
  }
}

var JO={
  max20x:`Max 20x`,max5x:`Max 5x`,pro:`Pro`
},YO=e=>e===null?null:JO[e]??null;

function XO({
  atOnce:e,max:t,ask:n
}){
  let r=[],i=new Set,a=0,o=()=>{
    for(;a<e&&r.length>0;){
      let[e]=r.splice(-1);
      if(e===void 0)return;
      a+=1,n(e).finally(()=>{
        --a,o()
      })
    }
  };
  return{
    request(e){
      if(!i.has(e)){
        if(i.add(e),r.push(e),r.length>t){
          let[e]=r.splice(0,1);
          e!==void 0&&i.delete(e)
        }
        o()
      }
    },cancel(e){
      let t=r.indexOf(e);
      t<0||(r.splice(t,1),i.delete(e))
    },forget(e){
      i.delete(e)
    }
  }
}

var ZO=2,QO=40,$O=El(()=>({
  hosts:new Map,proxies:new Map
}));

async function ek(e){
  let t=null;
  try{
    t=(await Nf.instance(e)).httpProxy
  }catch(e){
    if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
    e instanceof U&&e.status===401&&q.getState().expire()
  }
  $O.setState(n=>({
    hosts:new Map(n.hosts).set(e,wv(t)),proxies:new Map(n.proxies).set(e,t)
  }))
}

var tk=XO({
  atOnce:ZO,max:QO,ask:ek
}),nk=({
  exit:e,row:t
})=>e===null&&t.deploymentStatus!==`failed`;

function rk(e){
  let t=$O(t=>t.hosts.get(e.id)),n=nk(e);
  return(0,_.useEffect)(()=>{
    if(n&&t===void 0)return tk.request(e.id),()=>tk.cancel(e.id)
  },[n,t,e.id]),e.exit??t??null
}

function ik(e){
  let t=e?.id,n=$O(e=>t===void 0?void 0:e.proxies.get(t)),r=e!==null&&nk(e);
  return(0,_.useEffect)(()=>{
    t!==void 0&&r&&n===void 0&&tk.request(t)
  },[t,r,n]),e?.row.httpProxy??n??null
}

function ak(e){
  tk.forget(e),$O.setState(t=>{
    let n=new Map(t.hosts),r=new Map(t.proxies);return n.delete(e),r.delete(e),{
      hosts:n,proxies:r
    }
  })
}

var ok=2,sk=40,ck=1e4,lk=El(()=>({
  kept:new Map
})),uk=(e,t)=>lk.setState(n=>({
  kept:new Map(n.kept).set(e,t)
})),dk=new Map;

async function fk(e){
  let t=dk.get(e);
  if(t===void 0)return;
  let n=null;
  try{
    n=(await Nf.accountStats(e,{
      since:Date.parse(t.start),until:Date.now()
    })).points
  }catch(e){
    if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
    e instanceof U&&e.status===401&&q.getState().expire()
  }
  let r=sv.getState().pulses.get(e)?.points??null;
  uk(e,{
    windowEnd:t.end,inWindow:n,atTotal:r,answeredAt:Date.now()
  })
}

var pk=XO({
  atOnce:ok,max:sk,ask:fk
});

function mk(e,t){
  let{
    id:n
  }
  =e,r=sv(e=>e.pulses.get(n)),i=lk(e=>e.kept.get(n)),a=pv(r?.windows??e.row.windows,`5h`),o=a?.windowEnd!=null&&Date.parse(a.windowEnd)>t,s=o?a.windowStart??null:null,c=o?a.windowEnd:null,l=i!==void 0&&i.windowEnd===c,u=r?.points??null;
  return(0,_.useEffect)(()=>{
    if(!(s===null||c===null||l))return dk.set(n,{
      start:s,end:c
    }),pk.forget(n),pk.request(n),()=>pk.cancel(n)
  },[n,s,c,l]),(0,_.useEffect)(()=>{
    l&&i.atTotal===null&&u!==null&&(Date.now()-i.answeredAt<=ck?uk(n,{
      ...i,atTotal:u
    }):s!==null&&c!==null&&(dk.set(n,{
      start:s,end:c
    }),pk.forget(n),pk.request(n)))
  },[n,i,l,u,s,c]),!l||i.inWindow===null?null:i.atTotal===null||u===null?i.inWindow:i.inWindow+Math.max(0,u-i.atTotal)
}

function hk(){
  let{
    t:e,i18n:t
  }
  =N();
  return({
    health:n,every:r
  })=>{
    let i=n?.status??(r===null?`unchecked`:`awaiting`),a=Eh(n?.latencyMs??0,t.language);
    return{
      status:i,reading:{
        good:e(`pool.ip_latency`,{
          shown:a
        }),slow:e(`pool.ip_slow`,{
          shown:a
        }),down:e(`pool.ip_down`),awaiting:e(`pool.ip_awaiting`),unchecked:e(`pool.ip_unchecked`)
      }
      [i],hint:[n?e(`pool.ip_checked`,{
        time:Nh(n.checkedAt,t.language)
      }):null,r===null?null:e(`pool.ip_rhythm`,{
        minutes:Math.round(r/60)
      })].filter(e=>e!==null).join(e(`pool.ip_hint_joiner`))
    }
  }
}

function gk(e){
  let{
    t
  }
  =N(),{
    status:n,reading:r,hint:i
  }
  =hk()(e);
  return(0,V.jsxs)(`span`,{
    className:tD.health,"data-status":n===`awaiting`?`unchecked`:n,title:i===``?void 0:i,children:[(0,V.jsx)(`span`,{
      className:`visually-hidden`,children:t(`pool.ip_health`)
    }),(0,V.jsx)(`span`,{
      className:tD.healthDot,"aria-hidden":`true`
    }),r]
  })
}

function _k({
  recent:e
}){
  let{
    t,i18n:n
  }
  =N(),r=e?.value===0,i=e===null?`pool.rpm_as_read`:e.settled?`pool.recent_label`:`pool.recent_warming`,a=e===null||r?`–`:Dh(e.value,n.language);
  return(0,V.jsxs)(`span`,{
    className:tD.rate,"data-live":e!==null||void 0,"data-idle":r||void 0,title:t(i),children:[(0,V.jsx)(`span`,{
      className:tD.rateValue,"aria-hidden":r||void 0,children:a
    }),r&&(0,V.jsx)(`span`,{
      className:`visually-hidden`,children:`0`
    }),(0,V.jsx)(`span`,{
      "aria-hidden":`true`,children:`5min`
    }),(0,V.jsx)(`span`,{
      className:`visually-hidden`,children:t(`pool.recent_label`)
    })]
  })
}

function vk({
  rpm:e,isLive:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=e===0;
  return(0,V.jsxs)(`span`,{
    className:tD.rate,"data-live":t||void 0,"data-idle":i||void 0,title:n(t?`pool.rpm_live`:`pool.rpm_as_read`),children:[(0,V.jsx)(`span`,{
      className:tD.rateValue,"aria-hidden":i||void 0,children:i?`–`:Dh(e,r.language)
    }),i&&(0,V.jsx)(`span`,{
      className:`visually-hidden`,children:`0`
    }),(0,V.jsx)(`span`,{
      "aria-hidden":`true`,children:`RPM`
    }),(0,V.jsx)(`span`,{
      className:`visually-hidden`,children:n(`pool.rpm_label`)
    })]
  })
}

function yk({
  until:e
}){
  let{
    t
  }
  =N(),n=Im(),r=t(`pool.doom_said`);
  return(0,V.jsxs)(`span`,{
    className:tD.doom,role:`timer`,title:r,"data-doom":!0,children:[(0,V.jsx)(`span`,{
      className:tD.doomClock,children:uu(e,n)
    }),(0,V.jsxs)(`span`,{
      className:tD.doomSaid,children:[t(`pool.doom_colon`),r]
    })]
  })
}

function bk({
  short:e,name:t,window:n,now:r,clock:i
}){
  let{
    t:a
  }
  =N(),o=typeof n?.utilization==`number`?Ah(n?.windowEnd,i):null,s=o===null?null:o.days>0?a(`pool.reset_in_days`,{
    days:o.days,hours:o.hours
  }):a(`pool.reset_in_hours`,{
    hours:o.hours,minutes:o.minutes
  });
  return(0,V.jsxs)(`div`,{
    className:tD.meter,children:[(0,V.jsxs)(`dt`,{
      children:[(0,V.jsx)(`span`,{
        "aria-hidden":`true`,children:e
      }),(0,V.jsx)(`span`,{
        className:`visually-hidden`,children:t
      })]
    }),(0,V.jsxs)(`dd`,{
      className:tD.meterReading,children:[(0,V.jsx)(`span`,{
        className:tD.meterShare,children:Oh(n?.utilization)
      }),(0,V.jsx)(`span`,{
        className:tD.meterReset,title:s??void 0,children:o!==null&&(0,V.jsxs)(V.Fragment,{
          children:[(0,V.jsx)(`span`,{
            "aria-hidden":`true`,children:Mh(o)
          }),(0,V.jsx)(`span`,{
            className:`visually-hidden`,children:s
          })]
        })
      })]
    }),(0,V.jsx)(`dd`,{
      className:tD.meterBar,"aria-hidden":`true`,children:(0,V.jsx)(kb,{
        value:n?.utilization,limited:fv(n,r)
      })
    })]
  })
}

function Sk(e){
  let{
    account:t,position:n,exits:i,naming:a,remark:o,now:s,clock:c,selected:l,on:u,busy:d
  }
  =e,{
    carried:f
  }
  =e,{
    t:p,i18n:m
  }
  =N(),{
    row:h
  }
  =t,g=YO(h.subscriptionTier),_=rk(t),v=mk(t,c),y=i.get(t.id),b=y!==void 0&&y.host===_?y:void 0,x=b===void 0||b.country===null?null:qO(b.country,m.language),S=lu(h,e.cleanupArmed),C=[{
    short:p(`pool.short_h5`),name:p(`pool.col_h5`),window:pv(h.windows,`5h`)
  },{
    short:p(`pool.short_d7`),name:p(`pool.col_d7`),window:pv(h.windows,`7d`)
  },{
    short:p(`pool.short_f5`),name:p(`pool.col_f5`),window:gv(h.windows)
  }],w=[{
    short:p(`pool.points5h_short`),name:p(`pool.points5h_label`),value:Dh(v,m.language)
  },{
    short:p(`pool.requests`),name:p(`account.requests_total`),value:Dh(h.usage.requests,m.language)
  },{
    short:p(`pool.points`),name:f===null?p(`account.points_total`):p(`account.points_carried`,{
      count:f.lives,before:Dh(f.points,m.language)
    }),value:Dh(h.usage.points+(f?.points??0),m.language)
  },{
    short:p(`pool.age`),name:p(`account.enlisted`),value:kh(h.createdAt,s,m.language)
  }];
  return(0,V.jsxs)(`tr`,{
    className:`saas-account-row`,"data-account":!0,"data-selected":l||void 0,"data-arrived":e.arrived||void 0,"aria-rowindex":n+1,children:[(0,V.jsx)(`td`,{
      children:(0,V.jsx)(WO,{
        checked:l,onChange:n=>e.onToggle(t.id,n),ariaLabel:p(`pool.select_account`,{
          name:h.name
        })
      })
    }),(0,V.jsxs)(`th`,{
      scope:`row`,children:[(0,V.jsx)(`button`,{
        type:`button`,className:tD.name,onClick:()=>e.onOpen(t.id),children:h.name
      }),(0,V.jsx)(`span`,{
        className:tD.owner,title:h.owner===null?void 0:zE(h.owner,a),children:h.owner===null?p(`pool.platform_held`):LE(h.owner,a)
      })]
    }),(0,V.jsx)(`td`,{
      children:(0,V.jsxs)(`span`,{
          className:tD.status,children:[g!==null&&(0,V.jsxs)(`span`,{
            className:tD.tier,title:p(`account.tier`),children:[(0,V.jsx)(`span`,{
              className:`visually-hidden`,children:p(`account.tier`)
            }),g]
          }),(0,V.jsx)(Ob,{
            account:t
          })]
        })
      }),(0,V.jsxs)(`td`,{
        children:[(0,V.jsx)(`dl`,{
          className:tD.stats,children:w.map(e=>(0,V.jsxs)(`div`,{
            title:e.name,children:[(0,V.jsxs)(`dt`,{
              children:[(0,V.jsx)(`span`,{
                "aria-hidden":`true`,children:e.short
              }),(0,V.jsx)(`span`,{
                className:`visually-hidden`,children:e.name
              })]
            }),(0,V.jsx)(`dd`,{
              children:e.value
            })]
          },e.name))
        }),S===null&&(0,V.jsxs)(`span`,{
          className:tD.rates,children:[(0,V.jsx)(_k,{
            recent:e.recent
          }),(0,V.jsx)(vk,{
            ...e.rate
          })]
        })]
      }),(0,V.jsx)(`td`,{
        children:S===null?(0,V.jsxs)(V.Fragment,{
          children:[(0,V.jsxs)(`span`,{
            className:tD.exit,children:[(0,V.jsx)(`span`,{
              className:`visually-hidden`,children:p(`pool.exit_label`)
            }),_===null?p(`pool.exit_none`):(0,V.jsxs)(V.Fragment,{
              children:[(0,V.jsx)(`span`,{
                className:tD.ip,children:_
              }),x!==null&&(0,V.jsx)(`span`,{
                className:tD.place,children:x
              })]
            }),o!==null&&(0,V.jsxs)(`span`,{
              className:tD.remark,title:o,children:[(0,V.jsx)(`span`,{
                className:`visually-hidden`,children:p(`account.remark`)
              }),o]
            })]
          }),_!==null&&(0,V.jsx)(gk,{
            health:b?.health,every:e.patrolEvery
          })]
        }):(0,V.jsx)(yk,{
          until:S
        })
      }),(0,V.jsx)(`td`,{
        children:(0,V.jsx)(`dl`,{
          className:tD.meters,children:C.map(e=>(0,V.jsx)(bk,{
            ...e,now:s,clock:c
          },e.short))
        })
      }),(0,V.jsx)(`td`,{
        children:(0,V.jsxs)(`div`,{
          className:`console-row-actions`,children:[(0,V.jsx)(hx,{
            className:tD.switch,checked:u,onChange:n=>e.onSwitch(t,n),label:p(`pool.switch_account`,{
              name:h.name
            }),disabled:d
          }),(0,V.jsxs)(`details`,{
            className:`console-popover console-row-menu`,children:[(0,V.jsx)(`summary`,{
              className:`console-icon-button`,"aria-label":p(`console_ui.row_actions`,{name:h.name}),children:(0,V.jsx)(MoreHorizontal,{size:17,"aria-hidden":true})
            }),(0,V.jsx)(`div`,{
              className:`console-popover-panel`,children:(0,V.jsx)(`button`,{
                type:`button`,onClick:event=>{event.currentTarget.closest(`details`).open=!1;e.onOpen(t.id)},children:p(`console_ui.account_details`)
              })
            })]
          })]
        })
      })]
  })
}

var Ck=[30,50,100];

function wk(e){
  return Ck.find(t=>String(t)===e)??30
}

var Tk=(e,t)=>Math.max(1,Math.ceil(e/t)),Ek=(e,t)=>Math.min(t,Math.max(1,e));

function Dk(e,t,n){
  let r=Math.min(n,(e-1)*t);
  return{
    start:r,end:Math.min(n,r+t)
  }
}

function Ok(e,t){
  let n=e.normalize(`NFKC`).trim();
  return/^\d{1,9}$/.test(n)?Ek(Number(n),t):null
}

var kk={
  step:`PoolPager-module__step___Dt4JC`,steps:`PoolPager-module__steps___bh6Qx`,status:`PoolPager-module__status___zW84T`,foot:`PoolPager-module__foot___qyq3l`,range:`PoolPager-module__range___Y0c6c`,size:`PoolPager-module__size___j6il6`,turn:`PoolPager-module__turn___5kf8D`,jump:`PoolPager-module__jump___bNpj0`,jumpInput:`PoolPager-module__jumpInput___bN72S`
};

function Ak({
  way:e,paging:t,onTurn:n
}){
  let{
    t:r
  }
  =N(),i=e===`prev`?t.page-1:t.page+1,a=r(`pool.pager_${e}`);
  return(0,V.jsx)(`button`,{
    type:`button`,className:kk.step,onClick:()=>n(i),disabled:i<1||i>t.pages,"aria-label":a,title:a,"data-pager-step":e,children:e===`prev`?(0,V.jsx)(cp,{
      size:16
    }):(0,V.jsx)(lp,{
      size:16
    })
  })
}

function jk({
  paging:e,onTurn:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=e=>Eh(e,r.language);
  return(0,V.jsxs)(`div`,{
    className:kk.steps,"data-pager-steps":!0,children:[(0,V.jsx)(Ak,{
      way:`prev`,paging:e,onTurn:t
    }),(0,V.jsx)(`span`,{
      className:kk.status,"aria-live":`polite`,"data-pager-status":!0,children:n(`pool.pager_status`,{
        page:i(e.page),pages:i(e.pages)
      })
    }),(0,V.jsx)(Ak,{
      way:`next`,paging:e,onTurn:t
    })]
  })
}

function Mk({
  paging:e,onTurn:t,onResize:n
}){
  let{
    t:r,i18n:i
  }
  =N(),[a,o]=(0,_.useState)(null),s=e=>Eh(e,i.language),c=()=>{
    if(a===null)return;
    let n=Ok(a,e.pages);
    o(null),n!==null&&n!==e.page&&t(n)
  };
  return(0,V.jsxs)(`nav`,{
    className:kk.foot,"aria-label":r(`pool.pager_label`),"data-pool-pager":!0,children:[(0,V.jsx)(`p`,{
      className:kk.range,"data-pager-range":!0,children:r(`pool.pager_range`,{
        from:s(e.total===0?0:e.start+1),to:s(e.end),total:s(e.total)
      })
    }),(0,V.jsx)(yO,{
      className:kk.size,value:String(e.size),options:Ck.map(e=>({
        value:String(e),label:r(`pool.pager_size`,{
          size:e
        })
      })),onChange:t=>{
        let r=Ck.find(e=>String(e)===t);r!==void 0&&r!==e.size&&n(r)
      },ariaLabel:r(`pool.pager_size_label`),fullWidth:!1
    }),e.pages>1&&(0,V.jsxs)(`div`,{
      className:kk.turn,children:[(0,V.jsx)(Ak,{
        way:`prev`,paging:e,onTurn:t
      }),(0,V.jsxs)(`label`,{
        className:kk.jump,children:[(0,V.jsx)(`span`,{
          children:r(`pool.pager_jump_before`)
        }),(0,V.jsx)(`input`,{
          className:kk.jumpInput,type:`text`,inputMode:`numeric`,enterKeyHint:`go`,autoComplete:`off`,"aria-label":r(`pool.pager_jump`),value:a??String(e.page),onChange:e=>o(e.target.value),onFocus:e=>e.target.select(),onBlur:c,onKeyDown:e=>{
            e.key===`Enter`&&c(),e.key===`Escape`&&o(null)
          },"data-pager-jump":!0
        }),(0,V.jsx)(`span`,{
          children:r(`pool.pager_jump_after`,{
            pages:s(e.pages)
          })
        })]
      }),(0,V.jsx)(Ak,{
        way:`next`,paging:e,onTurn:t
      })]
    })]
  })
}

function Nk(e,t){
  let{
    count:n,columns:r,linePitch:i
  }
  =e,a=Math.ceil(n/r),o=Math.floor(t.scrolledPast/i),s=Math.min(a,Math.max(0,o-t.overscan)),c=Math.max(s,Math.min(a,o+Math.ceil(t.viewport/i)+t.overscan));
  return{
    start:s*r,end:Math.min(n,c*r),before:s*i,after:(a-c)*i
  }
}

var Pk=(e,t)=>e.start===t.start&&e.end===t.end&&e.before===t.before&&e.after===t.after;

function Fk(e){
  let{
    topRef:t,count:n,columns:r,linePitch:i,overscan:a
  }
  =e,[o,s]=(0,_.useState)(()=>Nk({
    count:n,columns:r,linePitch:i
  },{
    scrolledPast:0,viewport:0,overscan:a*2
  }));
  return(0,_.useLayoutEffect)(()=>{
    let e=t.current;if(!e)return;let o=0,c=()=>{
      o=0;let t=Nk({
        count:n,columns:r,linePitch:i
      },{
        scrolledPast:Math.max(0,-e.getBoundingClientRect().top),viewport:window.innerHeight,overscan:a
      });s(e=>Pk(e,t)?e:t)
    },l=()=>{
      o===0&&(o=requestAnimationFrame(c))
    };return c(),document.addEventListener(`scroll`,l,{
      capture:!0,passive:!0
    }),window.addEventListener(`resize`,l),()=>{
      cancelAnimationFrame(o),document.removeEventListener(`scroll`,l,{
        capture:!0
      }),window.removeEventListener(`resize`,l)
    }
  },[t,n,r,i,a]),o
}

var accountRowHeight=112,Vk=4,Hk=3e4,Uk=1e4,Wk=300;

function accountTableSpacer(height,ref){
  return(0,V.jsx)(`tr`,{
    ref,"aria-hidden":`true`,className:`saas-account-spacer`,children:(0,V.jsx)(`td`,{
      colSpan:7,style:{height}
    })
  })
}

function Gk(e){
  let{
    offset:t,limit:n
  }
  =W_(e);
  (0,_.useEffect)(()=>{
    let e=setTimeout(()=>sv.getState().follow({
      offset:t,limit:n
    }),Wk);return()=>clearTimeout(e)
  },[t,n]),(0,_.useEffect)(()=>()=>sv.getState().follow(U_),[])
}

function Kk(e){
  let{
    accounts:t,paging:n,order:r,now:i,selection:a,exits:o,switched:s,busy:c
  }
  =e,{
    t:l
  }
  =N(),u=(0,_.useRef)(null),d=(0,_.useRef)(null),f=(0,_.useRef)(null),p=(0,_.useRef)(null);
  let y=Fk({
    topRef:f,count:t.length,columns:1,linePitch:accountRowHeight,overscan:Vk
  }),b=t.every(e=>a.has(e.id)),x=t.slice(y.start,y.end),S=y_(Hk),C=sv(e=>e.rates),w=sv(e=>e.tracks),T=sv(e=>e.heardAt),E=Math.max(y_(Uk),T),D=e=>{
    let t=w.get(e);
    return t===void 0?null:$_(t,E)
  };
  return Gk(x.flatMap(e=>r.get(e.id)??[])),(0,_.useLayoutEffect)(()=>{
    let e=p.current;e!==null&&e.page===n.page&&e.size===n.size&&(p.current=null,u.current?.scrollIntoView({
      block:`start`
    }),d.current?.focus({
      preventScroll:!0
    }))
  },[n.page,n.size]),(0,V.jsxs)(`div`,{
    className:tD.region,ref:u,children:[(0,V.jsxs)(`div`,{
      className:tD.head,"data-accounts-head":!0,children:[(0,V.jsx)(WO,{
        className:tD.headCheck,checked:b,onChange:e.onToggleAll,label:l(`pool.select_all`),labelClassName:tD.headLabel
      }),n.pages>1&&(0,V.jsx)(jk,{
        paging:n,onTurn:n.turnTo
      })]
    }),(0,V.jsx)(`div`,{
      className:`saas-account-scroll`,tabIndex:0,role:`region`,"aria-label":l(`pool.table_label`),children:(0,V.jsxs)(`table`,{
        className:`saas-account-table`,"aria-label":l(`pool.table_label`),"aria-rowcount":n.total+1,tabIndex:-1,ref:d,children:[(0,V.jsx)(`thead`,{
          children:(0,V.jsx)(`tr`,{
            children:[`select`,`account`,`status`,`activity`,`proxy`,`quota`,`enabled`].map(key=>(0,V.jsx)(`th`,{
              scope:`col`,children:l(`account_table.${key}`)
            },key))
          })
        }),(0,V.jsxs)(`tbody`,{
          children:[accountTableSpacer(y.before,f),x.map((t,r)=>(0,V.jsx)(Sk,{
        account:t,position:n.start+y.start+r+1,exits:o,patrolEvery:e.patrolEvery,cleanupArmed:e.cleanupArmed,naming:e.naming,remark:e.remarks.get(t.id)??null,carried:e.carried.get(t.id)??null,rate:{
          rpm:C.get(t.id)??t.row.rpm,isLive:C.has(t.id)
        },recent:D(t.id),arrived:e.arrived.has(t.id),now:i,clock:S,selected:a.has(t.id),on:s.get(t.id)??t.row.healthy,busy:c,onToggle:e.onToggle,onOpen:e.onOpen,onSwitch:e.onSwitch
      },t.id)),accountTableSpacer(y.after)]
        })]
      })
    }),(0,V.jsx)(Mk,{
      paging:n,onTurn:e=>{
        p.current={
          page:e,size:n.size
        },n.turnTo(e)
      },onResize:e=>{
        p.current={
          page:1,size:e
        },n.resize(e)
      }
    })]
  })
}

var qk={
  overlay:`Sheet-module__overlay___z8D5E`,entering:`Sheet-module__entering___-FNfE`,"sheet-fade-in":`Sheet-module__sheet-fade-in___CzH3G`,sheetFadeIn:`Sheet-module__sheet-fade-in___CzH3G`,exiting:`Sheet-module__exiting___q7zPi`,"sheet-fade-out":`Sheet-module__sheet-fade-out___gWS5Q`,sheetFadeOut:`Sheet-module__sheet-fade-out___gWS5Q`,content:`Sheet-module__content___ITPBZ`,"sheet-slide-in":`Sheet-module__sheet-slide-in___J8uZR`,sheetSlideIn:`Sheet-module__sheet-slide-in___J8uZR`,"sheet-slide-out":`Sheet-module__sheet-slide-out___O9y-1`,sheetSlideOut:`Sheet-module__sheet-slide-out___O9y-1`,sizeMd:`Sheet-module__sizeMd___ziRMr`,sizeLg:`Sheet-module__sizeLg___32pg7`,sizeXl:`Sheet-module__sizeXl___AvWCt`,header:`Sheet-module__header___cUB1H`,eyebrow:`Sheet-module__eyebrow___Duxhe`,title:`Sheet-module__title___1-JZS`,description:`Sheet-module__description___Xg2Ae`,lastLine:`Sheet-module__lastLine___s0zAj`,corner:`Sheet-module__corner___QiMGZ`,body:`Sheet-module__body___Aso8V`,footer:`Sheet-module__footer___kLZWM`,closeBtn:`Sheet-module__closeBtn___s0cgQ`
},Jk=280,Yk={
  md:qk.sizeMd,lg:qk.sizeLg,xl:qk.sizeXl
};

function Xk({
  open:e,onClose:t,size:n=`md`,eyebrow:r,title:i,description:a,footer:o,corner:s,closeDisabled:c=!1,className:l,ariaLabel:u,confirmClose:d,children:f
}){
  let{
    t:p
  }
  =N(),m=(0,_.useId)(),h=(0,_.useId)(),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(!1),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(null),E=(0,_.useCallback)(()=>S.current?Array.from(S.current.querySelectorAll(dh)).filter(e=>!e.hasAttribute(`disabled`)&&e.tabIndex!==-1):[],[]),D=(0,_.useRef)(t);
  (0,_.useEffect)(()=>{
    D.current=t
  },[t]);
  let O=(0,_.useCallback)(e=>{
    x.current===null&&(b(!0),x.current=window.setTimeout(()=>{
      v(!1),b(!1),x.current=null,e&&D.current()
    },Jk))
  },[]);
  (0,_.useEffect)(()=>{
    let t=!1;return e?(x.current!==null&&(window.clearTimeout(x.current),x.current=null),queueMicrotask(()=>{
      t||(v(!0),b(!1))
    })):g&&queueMicrotask(()=>{
      t||O(!1)
    }),()=>{
      t=!0
    }
  },[e,g,O]);
  let k=(0,_.useCallback)(async()=>{
    if(d)try{
      if(await d()===!1)return
    }catch{
      return
    }
    O(!0)
  },[d,O]);
  (0,_.useEffect)(()=>()=>{
    x.current!==null&&window.clearTimeout(x.current)
  },[]);
  let A=e||g;
  if((0,_.useEffect)(()=>{
    if(A)return lh(),()=>uh()
  },[A]),(0,_.useEffect)(()=>{
    if(!e)return;T.current=document.activeElement instanceof HTMLElement?document.activeElement:null;let t=window.setTimeout(()=>{
      C.current&&(C.current.scrollTop=0),(E()[0]??w.current??S.current)?.focus({
        preventScroll:!0
      })
    },0);return()=>window.clearTimeout(t)
  },[E,e]),(0,_.useEffect)(()=>{
    e||g||(T.current?.focus(),T.current=null)
  },[g,e]),(0,_.useEffect)(()=>{
    if(!e)return;let t=e=>{
      if(e.key===`Escape`){
        if(c)return;e.preventDefault(),k();return
      }
      if(e.key!==`Tab`)return;let t=E();if(t.length===0){
        e.preventDefault(),S.current?.focus();return
      }
      let n=t[0],r=t[t.length-1],i=document.activeElement;e.shiftKey?(i===n||i===S.current)&&(e.preventDefault(),r.focus()):i===r&&(e.preventDefault(),n.focus())
    };return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)
  },[c,E,k,e]),!e&&!g)return null;
  let j=y?qk.exiting:qk.entering,ee=`${qk.overlay} ${j}`.trim(),te=[qk.content,Yk[n],j,l].filter(Boolean).join(` `),ne=a?(0,V.jsx)(`p`,{
    id:h,className:qk.description,children:a
  }):null,re=(0,V.jsx)(`div`,{
    className:ee,role:`presentation`,onMouseDown:e=>{
      c||e.target===e.currentTarget&&k()
    },children:(0,V.jsxs)(`div`,{
      ref:S,className:te,role:`dialog`,"aria-modal":`true`,"aria-labelledby":i?m:void 0,"aria-describedby":a?h:void 0,"aria-label":!i&&u?u:void 0,tabIndex:-1,onMouseDown:e=>e.stopPropagation(),children:[(0,V.jsx)(`button`,{
        ref:w,type:`button`,className:qk.closeBtn,onClick:c?void 0:k,disabled:c,"aria-label":p(`common.close`),children:(0,V.jsx)(dp,{
          size:18
        })
      }),(r||i||a||s)&&(0,V.jsxs)(`div`,{
        className:qk.header,children:[r?(0,V.jsx)(`div`,{
          className:qk.eyebrow,children:r
        }):null,i?(0,V.jsx)(`h2`,{
          id:m,className:qk.title,children:i
        }):null,s?(0,V.jsxs)(`div`,{
          className:qk.lastLine,children:[ne,(0,V.jsx)(`div`,{
            className:qk.corner,children:s
          })]
        }):ne]
      }),(0,V.jsx)(`div`,{
        ref:C,className:qk.body,children:f
      }),o?(0,V.jsx)(`div`,{
        className:qk.footer,children:o
      }):null]
    })
  });
  return typeof document>`u`?re:(0,kc.createPortal)(re,document.body)
}

var Zk=new Set([`http:`,`https:`]),Qk=/^([a-z\d.-]+):(\d{1,5}):([^:\s]+):(\S+)$/i,$k=/^[a-z][a-z\d+.-]*:\/\/(?:[^/?#@]*@)?(?:\[[^\]]*\]|[^/?#:]+):(\d{1,5})(?:[/?#]|$)/i;

function eA(e){
  let t=Qk.exec(e),n=t===null?e:`http://${t[1]}:${t[2]}`;
  if(!URL.canParse(n))return null;
  let r=new URL(n);
  return t!==null&&(r.username=t[3]??``,r.password=t[4]??``),{
    url:r,port:r.port||(t?.[2]??$k.exec(e)?.[1]??``)
  }
}

function tA(e){
  try{
    return decodeURIComponent(e)
  }catch(t){
    if(!(t instanceof URIError))throw t;
    return e
  }
}

function nA(e){
  if(!URL.canParse(e))return e;
  let t=new URL(e),n=t.port||($k.exec(e)?.[1]??``);
  if(t.hostname===``||n===``)return e;
  let r=`${t.hostname}:${n}`;
  return t.username===``&&t.password===``?r:`${r}:${tA(t.username)}:${tA(t.password)}`
}

function rA(e){
  let t=e.trim();
  if(t===``||/\s/.test(t))return null;
  let n=eA(t);
  if(n===null)return null;
  let{
    url:r,port:i
  }
  =n,a=r.username===``==(r.password===``),o=(r.pathname===``||r.pathname===`/`)&&r.search===``&&r.hash===``,s=Number(i);
  if(!Zk.has(r.protocol)||r.hostname===``||!(s>=1&&s<=65535)||!a||!o)return null;
  let c=r.username===``?``:`${r.username}:${r.password}@`;
  return`${r.protocol}//${c}${r.hostname}:${s}`
}

var iA={
  body:`AccountSheet-module__body___hGSVD`,section:`AccountSheet-module__section___8-zJh`,sectionTitle:`AccountSheet-module__sectionTitle___Q7Icb`,state:`AccountSheet-module__state___dxsEp`,hint:`AccountSheet-module__hint___BCxSY`,limited:`AccountSheet-module__limited___kqab4`,windowRow:`AccountSheet-module__windowRow___cA-js`,windowName:`AccountSheet-module__windowName___fYzhe`,windowTrack:`AccountSheet-module__windowTrack___n-xPK`,facts:`AccountSheet-module__facts___bKwj8`,fact:`AccountSheet-module__fact___86EEY`,factWide:`AccountSheet-module__factWide___JF1ai`,factEdit:`AccountSheet-module__factEdit___JJauh`,actions:`AccountSheet-module__actions___PQpDK`,windowReading:`AccountSheet-module__windowReading___hQzcA`
},aA=1600;

function oA({
  text:e,label:t
}){
  let{
    t:n
  }
  =N(),[r,i]=(0,_.useState)(`idle`);
  (0,_.useEffect)(()=>{
    if(r===`idle`)return;let e=setTimeout(()=>i(`idle`),aA);return()=>clearTimeout(e)
  },[r]);
  let a=async()=>{
    try{
      await navigator.clipboard.writeText(e),i(`copied`)
    }catch(e){
      if(!(e instanceof DOMException))throw e;
      i(`failed`)
    }
  };
  return(0,V.jsxs)(`button`,{
    type:`button`,className:oC.copy,"data-outcome":r,onClick:()=>void a(),"aria-label":t,title:t,children:[r===`copied`&&(0,V.jsx)(fp,{
      size:14
    }),r===`failed`&&(0,V.jsx)(ap,{
      size:14
    }),r===`idle`&&(0,V.jsx)(Zf,{
      size:14
    }),(0,V.jsxs)(`span`,{
      className:`visually-hidden`,"aria-live":`polite`,children:[r===`copied`&&n(`common.copied`),r===`failed`&&n(`common.copy_failed`)]
    })]
  })
}

function sA({
  facts:e
}){
  return(0,V.jsx)(`dl`,{
    className:iA.facts,children:e.map(e=>(0,V.jsxs)(`div`,{
      className:`${iA.fact} ${e.wide?iA.factWide:``}`,children:[(0,V.jsx)(`dt`,{
        children:e.label
      }),(0,V.jsxs)(`dd`,{
        children:[e.value,e.copyLabel!==void 0&&(0,V.jsx)(oA,{
          text:e.value,label:e.copyLabel
        }),e.edit!==void 0&&(0,V.jsx)(`button`,{
          type:`button`,className:iA.factEdit,onClick:e.edit.onEdit,"aria-label":e.edit.label,title:e.edit.label,children:(0,V.jsx)(ip,{
            size:12
          })
        })]
      })]
    },e.label))
  })
}

function cA({
  row:e,rpm:t
}){
  let{
    t:n,i18n:r
  }
  =N(),{
    usage:i
  }
  =e,a=e=>Dh(e,r.language);
  return(0,V.jsxs)(`section`,{
    className:iA.section,children:[(0,V.jsx)(`h3`,{
      className:iA.sectionTitle,children:n(`account.traffic`)
    }),(0,V.jsx)(sA,{
      facts:[{
        label:n(`account.requests_total`),value:a(i.requests)
      },{
        label:n(`account.refused`),value:a(i.refusedRequests)
      },{
        label:n(`account.points_total`),value:a(i.points)
      },{
        label:n(`pool.rpm_label`),value:a(t)
      },{
        label:n(`account.concurrency`),value:`${a(e.activeConcurrent)} / ${a(e.maxConcurrent)}`
      },{
        label:n(`account.tokens_in`),value:a(i.inputTokens)
      },{
        label:n(`account.tokens_out`),value:a(i.outputTokens)
      },{
        label:n(`account.cache_write`),value:a(i.cacheCreationTokens)
      },{
        label:n(`account.cache_read`),value:a(i.cacheReadTokens)
      },{
        label:n(`account.rpm_limit`),value:a(e.rpmLimit)
      }]
    })]
  })
}

function lA({
  window:e,now:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=fv(e,t),a=e.type===null?n(`account.window_unknown`):e.type,o=n(`account.window.${a}`,{
    defaultValue:a
  }),s=hv(e)?n(`pool.short_f5`):uv(e)?o:`${o} · ${e.modelPattern}`;
  return(0,V.jsxs)(`div`,{
    className:iA.windowRow,children:[(0,V.jsx)(`span`,{
      className:iA.windowName,title:hv(e)?`${o} · ${e.modelPattern}`:void 0,children:s
    }),(0,V.jsx)(`span`,{
      className:iA.windowTrack,"aria-hidden":`true`,children:(0,V.jsx)(kb,{
        value:e.utilization,limited:i
      })
    }),(0,V.jsxs)(`span`,{
      className:iA.windowReading,children:[i&&(0,V.jsx)(`strong`,{
        className:iA.limited,children:n(`state.limited`)
      }),Oh(e.utilization),e.windowEnd!==null&&` · ${n(`account.resets`,{time:Nh(e.windowEnd,r.language)})}`]
    })]
  })
}

function uA(e){
  let{
    account:t,now:n,busy:r,covered:i,onClose:a,onRun:o,onChangeProxy:s
  }
  =e,{
    t:c,i18n:l
  }
  =N(),u=Db(),d=mh(t),f=sv(e=>d?e.rates.get(d.id):void 0)??d?.row.rpm,p=ik(d??null),{
    exit:m,every:h
  }
  =e.patrol,g=m!==void 0&&m.host===wv(p),v=hk()({
    health:g?m.health:void 0,every:h
  }),y=g&&m.country!==null?qO(m.country,l.language):null,b=p===null?null:nA(p),x=l.language,S=d?.row,C=oE().get(d?.id??``)??null,w=q(({
    principal:e
  })=>e?.role!==`observer`),[T,E]=(0,_.useState)(!1),D=d?.id,O=S?.name,k=(0,_.useMemo)(()=>!T||D===void 0||O===void 0?null:{
    line:O,remark:C,save:async e=>{
      await Nf.setAccountRemark(D,e),$T(D,e)
    }
  },[T,D,O,C]),A=S?.lastError??null,j=S?_v(S.windows,n):[],ee=c(`account.not_recorded`),te=(e,t)=>d&&(0,V.jsx)(K,{
    variant:t,size:`sm`,disabled:r,onClick:()=>o(e,d),children:c(`action.${e}`)
  }),ne=d?.state===`deploying`?S?.deploymentMessage??c(`account.deploying_hint`):d?.state===`deploy_failed`?S?.deploymentMessage??c(`account.deploy_failed_hint`):null;
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(Xk,{
      open:t!==null,onClose:a,closeDisabled:i||T,size:`md`,title:S?.name,description:S?S.owner?.email??c(`pool.platform_held`):void 0,footer:(0,V.jsxs)(`div`,{
        className:iA.actions,children:[te(`delete`,`danger`),d&&(0,V.jsx)(K,{
          variant:`ghost`,size:`sm`,disabled:r,onClick:()=>s(d),children:c(`action.change_proxy`)
        }),te(`reset_windows`,`ghost`),te(S?.healthy?`disable`:`enable`,`secondary`),te(`health_check`,`primary`)]
      }),children:d&&S&&(0,V.jsxs)(`div`,{
        className:iA.body,children:[(0,V.jsxs)(`section`,{
          className:iA.section,children:[(0,V.jsx)(`h3`,{
            className:iA.sectionTitle,children:c(`account.status`)
          }),(0,V.jsx)(`div`,{
            className:iA.state,children:(0,V.jsx)(Ob,{
              account:d
            })
          }),ne!==null&&(0,V.jsx)(`p`,{
            className:iA.hint,children:ne
          }),S.availableFrom!==null&&S.availableUntil!==null&&(0,V.jsx)(`p`,{
            className:iA.hint,children:c(`account.availability`,{
              from:S.availableFrom,until:S.availableUntil
            })
          })]
        }),A!==null&&(0,V.jsxs)(`section`,{
          className:iA.section,children:[(0,V.jsx)(`h3`,{
            className:iA.sectionTitle,children:c(`account.last_error`)
          }),(0,V.jsx)(sA,{
            facts:[{
              label:c(`account.error_type`),value:u(A.type)
            },{
              label:c(`account.error_at`),value:Nh(A.occurredAt,x)
            },{
              label:c(`account.error_code`),value:A.code??ee,wide:!0
            },{
              label:c(`account.error_message`),value:A.message||ee,wide:!0
            }]
          })]
        }),(0,V.jsxs)(`section`,{
          className:iA.section,children:[(0,V.jsx)(`h3`,{
            className:iA.sectionTitle,children:c(`account.windows`)
          }),j.length===0&&(0,V.jsx)(`p`,{
            className:iA.hint,children:c(`account.no_windows`)
          }),j.map(e=>(0,V.jsx)(lA,{
            window:e,now:n
          },e.id))]
        }),(0,V.jsx)(cA,{
          row:S,rpm:f
        }),(0,V.jsxs)(`section`,{
          className:iA.section,children:[(0,V.jsx)(`h3`,{
            className:iA.sectionTitle,children:c(`account.record`)
          }),(0,V.jsx)(sA,{
            facts:[{
              label:c(`account.name`),value:S.name,wide:!0,copyLabel:c(`account.copy_name`)
            },{
              label:c(`account.proxy`),value:b??`–`,wide:!0,...b===null?{}:{
                copyLabel:c(`account.copy_proxy`)
              }
            },{
              label:c(`account.patrol`),value:[y,v.reading,v.hint].filter(e=>e!==null&&e!==``).join(` · `),wide:!0
            },{
              label:c(`account.remark`),value:C??`–`,wide:!0,...w?{
                edit:{
                  label:c(C===null?`account.remark_add`:`account.remark_edit`),onEdit:()=>E(!0)
                }
              }
              :{}
            },{
              label:c(`account.enlisted`),value:kh(S.createdAt,n,x)
            },{
              label:c(`account.last_checked`),value:Nh(S.lastCheckedAt,x)
            },{
              label:c(`account.tier`),value:YO(S.subscriptionTier)??`–`
            },{
              label:c(`account.deployment`),value:c(`account.deployment_${S.deploymentStatus??`none`}`)
            },{
              label:c(`account.tags`),value:S.tags.length===0?`–`:S.tags.join(c(`tag_dialog.separator`)),wide:!0
            }]
          })]
        })]
      })
    }),(0,V.jsx)(Ew,{
      kind:`account`,subject:k,onClose:()=>E(!1),onChanged:()=>E(!1)
    })]
  })
}

function dA(e,t,n){
  (0,_.useLayoutEffect)(()=>{
    if(typeof window>`u`)return;let r=n?e.current:null;if(!r){
      document.documentElement.style.removeProperty(t);return
    }
    let i=()=>{
      let e=r.getBoundingClientRect().height;document.documentElement.style.setProperty(t,`${e}px`)
    };i(),window.addEventListener(`resize`,i);let a=typeof ResizeObserver>`u`?null:new ResizeObserver(i);return a?.observe(r),()=>{
      a?.disconnect(),window.removeEventListener(`resize`,i),document.documentElement.style.removeProperty(t)
    }
  },[e,t,n])
}

async function fA(e,t,n){
  let r=e.map(e=>({
    status:`skipped`,item:e
  })),i=0,a=0,o=0,s=async()=>{
    for(;!n.signal.aborted;){
      let s=i;
      i+=1;
      let c=e[s];
      if(c===void 0)return;
      try{
        await t(c),r[s]={
          status:`ok`,item:c
        }
      }catch(e){
        let t=n.explain(e);
        if(t===null)throw e;
        r[s]={
          status:`failed`,item:c,...t
        },o+=1
      }
      a+=1,n.onProgress({
        total:e.length,done:a,failed:o
      })
    }
  },c=Math.max(1,Math.min(n.concurrency,e.length));
  return await Promise.all(Array.from({
    length:c
  },s)),r
}

var pA=[`health_check`,`enable`,`disable`,`reset_windows`,`set_tags`,`delete`],mA=class extends Error{},hA=2,gA=`unauthenticated`,_A={
  reason:`delete_unconfirmed`,detail:`delete_unconfirmed`
};

function vA(e){
  return e instanceof mA?{
    reason:`probe_failed`,detail:e.message
  }
  :e instanceof W?{
    reason:`network`,detail:null
  }
  :e instanceof U?{
    reason:e.code,detail:e.detail??null
  }
  :null
}

async function yA(e){
  let t=await Nf.healthCheck(e.id);
  if(!t.healthy)throw new mA(t.message??``)
}

var bA=async e=>({
  count:await e,cleanupPending:0
});

function xA(e,t){
  let n=t.map(e=>e.id);
  switch(e.action){
    case`enable`:return bA(Nf.batchHealth(n,!0));
    case`disable`:return bA(Nf.batchHealth(n,!1));
    case`reset_windows`:return bA(Nf.batchResetWindows(n));
    case`delete`:return Nf.batchDelete(n);
    case`set_tags`:return bA(Nf.batchTags(n,e.tags));
    default:return yp(e)
  }
}

var SA=(e,t)=>Array.from({
  length:Math.ceil(e.length/t)
},(n,r)=>e.slice(r*t,(r+1)*t));

async function CA(e,t,n){
  let r=[],i=0,a=0,o=0,s=e.action===`delete`;
  for(let c of SA(t,s?5:500))if(n.signal.aborted)r.push(...c.map(e=>({
    status:`skipped`,item:e
  })));
  else{
    try{
      let t=await xA(e,c);
      i+=Math.max(0,c.length-t.count),a+=t.cleanupPending,r.push(...c.map(e=>({
        status:`ok`,item:e
      })))
    }catch(e){
      let t=s&&e instanceof W?_A:vA(e);
      if(t===null)throw e;
      r.push(...c.map(e=>({
        status:`failed`,item:e,...t
      }))),o+=c.length
    }
    n.onProgress({
      total:t.length,done:r.length,failed:o
    })
  }
  return{
    outcomes:r,shortfall:i,cleanupPending:a
  }
}

async function wA(e,t,n){
  return e.action===`health_check`?{
    outcomes:await fA(t,yA,{
      concurrency:hA,signal:n.signal,onProgress:n.onProgress,explain:vA
    }),shortfall:0,cleanupPending:0
  }
  :CA(e,t,n)
}

function TA(e){
  let[t,n]=(0,_.useState)({
    phase:`idle`
  });
  return{
    state:t,start:(0,_.useCallback)(async(t,r,i=`reported`)=>{
      let a=new AbortController,o=i===`quiet`;n({
        phase:`running`,quiet:o,action:t.action,progress:{
          total:r.length,done:0,failed:0
        },cancel:()=>a.abort()
      });let{
        outcomes:s,shortfall:c,cleanupPending:l
      }
      =await wA(t,r,{
        signal:a.signal,onProgress:e=>n(t=>t.phase===`running`?{
          ...t,progress:e
        }
        :t)
      }),u=c===0&&l===0&&s.every(e=>e.status===`ok`);n(o&&u?{
        phase:`idle`
      }
      :{
        phase:`done`,command:t,outcomes:s,shortfall:c,cleanupPending:l
      }),s.some(e=>e.status===`failed`&&e.reason===gA)?q.getState().expire():await e()
    },[e]),dismiss:(0,_.useCallback)(()=>n({
      phase:`idle`
    }),[])
  }
}

var EA={
  container:`BatchActionBar-module__container___ZadUF`,bar:`BatchActionBar-module__bar___47PW2`,left:`BatchActionBar-module__left___OylQ6`,right:`BatchActionBar-module__right___u9mWL`,count:`BatchActionBar-module__count___-Q4jT`
},DA={
  fit:`BatchBar-module__fit___nOmHl`,progress:`BatchBar-module__progress___KMJI5`,track:`BatchBar-module__track___-0w8m`,fill:`BatchBar-module__fill___upae3`,failed:`BatchBar-module__failed___-7gCg`,summary:`BatchBar-module__summary___C0qzh`
},OA=e=>1-(1-e)**4,kA=e=>e**3,AA=`translateX(-50%)`,jA=`translateX(-50%) translateY(56px)`;

function MA(e){
  let[t,n]=(0,_.useState)(e),r=(0,_.useRef)(null),i=(0,_.useRef)(null),a=(0,_.useRef)(e),o=(0,_.useRef)(!1);
  return(0,_.useEffect)(()=>{
    a.current=e,e&&n(!0)
  },[e]),(0,_.useLayoutEffect)(()=>{
    let s=r.current;if(!t||!s)return;let c=o.current;if(o.current=e,e===c)return;i.current?.stop();let l=yl();if(e){
      i.current=l?pl(s,{
        opacity:[0,1]
      },{
        duration:.15,ease:`linear`
      }):pl(s,{
        transform:[jA,AA],opacity:[0,1]
      },{
        duration:.28,ease:OA
      });return
    }
    let u=()=>{
      a.current||n(!1)
    };i.current=l?pl(s,{
      opacity:[1,0]
    },{
      duration:.12,ease:`linear`,onComplete:u
    }):pl(s,{
      transform:[AA,jA],opacity:[1,0]
    },{
      duration:.22,ease:kA,onComplete:u
    })
  },[t,e]),(0,_.useEffect)(()=>()=>i.current?.stop(),[]),{
    visible:t,containerRef:r
  }
}

var NA={
  health_check:`primary`,enable:`secondary`,disable:`secondary`,reset_windows:`secondary`,set_tags:`secondary`,delete:`danger`
};

function PA(e){
  let{
    selected:t,filtered:n,state:r
  }
  =e,{
    t:i,i18n:a
  }
  =N(),{
    visible:o,containerRef:s
  }
  =MA(t>0||r.phase!==`idle`);
  dA(s,`--pool-action-bar-height`,o);
  let c=e=>Eh(e,a.language);
  return o?(0,V.jsx)(`div`,{
    className:`${EA.container} ${DA.fit}`,ref:s,children:(0,V.jsx)(`div`,{
      className:EA.bar,role:`toolbar`,"aria-label":i(`batch.toolbar_label`),"aria-orientation":`horizontal`,children:(()=>{
        switch(r.phase){
          case`idle`:return(0,V.jsxs)(V.Fragment,{
            children:[(0,V.jsxs)(`div`,{
              className:EA.left,children:[(0,V.jsx)(`span`,{
                className:EA.count,"aria-live":`polite`,children:i(`batch.selected`,{
                  shown:c(t)
                })
              }),(0,V.jsx)(K,{
                variant:`secondary`,size:`sm`,onClick:e.onSelectFiltered,disabled:n===0,title:i(`batch.select_filtered_hint`,{
                  shown:c(n)
                }),children:i(`batch.select_filtered`,{
                  shown:c(n)
                })
              }),(0,V.jsx)(K,{
                variant:`ghost`,size:`sm`,onClick:e.onDeselect,children:i(`batch.deselect`)
              })]
            }),(0,V.jsx)(`div`,{
              className:EA.right,children:pA.map(n=>{
                let r=n===`health_check`&&t>100;return(0,V.jsx)(K,{
                  variant:NA[n],size:`sm`,onClick:()=>e.onRun(n),disabled:t===0||r,title:r?i(`batch.health_check_limit`,{
                    shown:c(100)
                  }):void 0,children:i(`action.${n}`)
                },n)
              })
            })]
          });case`running`:{
            let{
              done:e,failed:t,total:n
            }
            =r.progress;return(0,V.jsxs)(V.Fragment,{
              children:[(0,V.jsx)(`div`,{
                className:EA.left,children:(0,V.jsxs)(`output`,{
                  className:DA.progress,children:[i(`batch.running`,{
                    action:i(`action.${r.action}`),done:c(e),total:c(n)
                  }),(0,V.jsx)(`span`,{
                    className:DA.track,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{
                      className:DA.fill,style:{
                        transform:`scaleX(${n===0?0:e/n})`
                      }
                    })
                  }),t>0&&(0,V.jsx)(`span`,{
                    className:DA.failed,children:i(`batch.failed_so_far`,{
                      shown:c(t)
                    })
                  })]
                })
              }),(0,V.jsx)(`div`,{
                className:EA.right,children:(0,V.jsx)(K,{
                  variant:`secondary`,size:`sm`,onClick:r.cancel,children:i(`common.cancel`)
                })
              })]
            })
          }
          case`done`:{
            let t=e=>r.outcomes.filter(t=>t.status===e).length,n=t(`failed`),a=t(`skipped`),{
              action:o
            }
            =r.command;return(0,V.jsxs)(V.Fragment,{
              children:[(0,V.jsx)(`div`,{
                className:EA.left,children:(0,V.jsxs)(`output`,{
                  className:DA.summary,children:[(0,V.jsx)(`strong`,{
                    children:i(`batch.done`,{
                      action:i(`action.${o}`)
                    })
                  }),(0,V.jsx)(`span`,{
                    children:i(`batch.done_ok`,{
                      shown:c(t(`ok`))
                    })
                  }),n>0&&(0,V.jsx)(`span`,{
                    className:DA.failed,children:i(`batch.done_failed`,{
                      shown:c(n)
                    })
                  }),a>0&&(0,V.jsx)(`span`,{
                    children:i(`batch.done_skipped`,{
                      shown:c(a)
                    })
                  }),r.shortfall>0&&(0,V.jsx)(`span`,{
                    className:DA.failed,children:i(`batch.shortfall`,{
                      shown:c(r.shortfall)
                    })
                  }),r.cleanupPending>0&&(0,V.jsx)(`span`,{
                    children:i(`batch.cleanup_pending`,{
                      shown:c(r.cleanupPending)
                    })
                  })]
                })
              }),(0,V.jsxs)(`div`,{
                className:EA.right,children:[n>0&&(0,V.jsxs)(V.Fragment,{
                  children:[(0,V.jsx)(K,{
                    variant:`ghost`,size:`sm`,onClick:e.onShowFailures,children:i(`batch.show_failures`)
                  }),(0,V.jsx)(K,{
                    size:`sm`,onClick:e.onRetry,children:i(`batch.retry_failed`,{
                      shown:c(n)
                    })
                  })]
                }),(0,V.jsx)(K,{
                  variant:`secondary`,size:`sm`,onClick:e.onDismiss,children:i(`common.close`)
                })]
              })]
            })
          }
          default:return yp(r)
        }
      })()
    })
  }):null
}

function FA(e,t){
  let[n,r]=(0,_.useState)(()=>wk(sr(ft))),[i,a]=(0,_.useState)({
    listing:t,page:1
  }),o=Tk(e,n),s=Ek(i.listing===t?i.page:1,o),c=(0,_.useCallback)(e=>a({
    listing:t,page:e
  }),[t]),l=(0,_.useCallback)(e=>{
    cr(ft,String(e)),r(e),a({
      listing:t,page:1
    })
  },[t]);
  return{
    page:s,pages:o,size:n,...Dk(s,n,e),total:e,turnTo:c,resize:l
  }
}

var IA={
  region:`GhostValley-module__region___5wM6Z`,head:`GhostValley-module__head___xknWm`,list:`GhostValley-module__list___c5ki4`,card:`GhostValley-module__card___taPgf`,line:`GhostValley-module__line___R924q`,name:`GhostValley-module__name___FZ1cA`,status:`GhostValley-module__status___LBjAR`,tier:`GhostValley-module__tier___1vitc`,frozen:`GhostValley-module__frozen___AZwj7`,owner:`GhostValley-module__owner___qkePm`,stats:`GhostValley-module__stats___kN4tA`,last:`GhostValley-module__last___Fq3Wr`,said:`GhostValley-module__said___fCt4c`
};

function LA({
  ghost:e,position:t,listed:n,naming:r
}){
  let{
    t:i,i18n:a
  }
  =N(),o=Db(),s=YO(e.tier),c=o(e.error.type),l=Dh(e.points,a.language),u=[{
    short:i(`pool.requests`),name:i(`ghost.requests_last`),value:Dh(e.requests,a.language)
  },{
    short:i(`pool.points`),name:e.lives>1?i(`ghost.points_all_lives`,{
      count:e.lives,last:l
    }):i(`account.points_total`),value:Dh(e.points+e.earnedBefore,a.language)
  },{
    short:i(`ghost.served_short`),name:i(`ghost.served`),value:kh(e.enlistedAt,Date.parse(e.diedAt),a.language)
  }];
  return(0,V.jsx)(`li`,{
    "data-ghost":!0,"aria-setsize":n,"aria-posinset":t,children:(0,V.jsxs)(`div`,{
      className:IA.card,children:[(0,V.jsxs)(`div`,{
        className:IA.line,children:[(0,V.jsx)(`h3`,{
          className:IA.name,title:e.name,children:e.name
        }),(0,V.jsxs)(`span`,{
          className:IA.status,children:[s!==null&&(0,V.jsxs)(`span`,{
            className:IA.tier,title:i(`account.tier`),children:[(0,V.jsx)(`span`,{
              className:`visually-hidden`,children:i(`account.tier`)
            }),s]
          }),(0,V.jsx)(Eb,{
            state:`fault`
          }),(0,V.jsx)(`span`,{
            className:wb.detail,"data-part":`detail`,title:c,children:c
          })]
        }),(0,V.jsx)(`span`,{
          className:IA.frozen,title:i(`ghost.frozen_hint`),children:i(`ghost.frozen`)
        })]
      }),(0,V.jsxs)(`div`,{
        className:IA.line,children:[(0,V.jsx)(`span`,{
          className:IA.owner,title:e.owner===null?void 0:zE(e.owner,r),children:e.owner===null?i(`pool.platform_held`):LE(e.owner,r)
        }),(0,V.jsx)(`dl`,{
          className:IA.stats,children:u.map(e=>(0,V.jsxs)(`div`,{
            title:e.name,children:[(0,V.jsxs)(`dt`,{
              children:[(0,V.jsx)(`span`,{
                "aria-hidden":`true`,children:e.short
              }),(0,V.jsx)(`span`,{
                className:`visually-hidden`,children:e.name
              })]
            }),(0,V.jsx)(`dd`,{
              children:e.value
            })]
          },e.short))
        })]
      }),(0,V.jsxs)(`div`,{
        className:`${IA.line} ${IA.last}`,children:[(0,V.jsx)(`span`,{
          children:i(`ghost.died`,{
            when:Nh(e.diedAt,a.language)
          })
        }),e.lives>1&&(0,V.jsx)(`span`,{
          children:i(`ghost.life`,{
            count:e.lives
          })
        }),e.error.message!==null&&(0,V.jsx)(`span`,{
          className:IA.said,title:e.error.message,children:e.error.message
        })]
      })]
    })
  })
}

function RA({
  ghosts:e,total:t,naming:n,listing:r
}){
  let{
    t:i
  }
  =N(),a=FA(e.length,r);
  return e.length===0?t===0?(0,V.jsx)(HO,{
    title:i(`ghost.none_title`),description:i(`ghost.none_body`)
  }):(0,V.jsx)(HO,{
    title:i(`pool.empty_title`),description:i(`pool.empty_body`)
  }):(0,V.jsxs)(`div`,{
    className:IA.region,"data-ghost-valley":!0,children:[(0,V.jsx)(`div`,{
      className:IA.head,children:a.pages>1&&(0,V.jsx)(jk,{
        paging:a,onTurn:a.turnTo
      })
    }),(0,V.jsx)(`ul`,{
      className:IA.list,"aria-label":i(`ghost.list_label`),children:e.slice(a.start,a.end).map((e,t)=>(0,V.jsx)(LA,{
        ghost:e,position:a.start+t+1,listed:a.total,naming:n
      },e.id))
    }),(0,V.jsx)(Mk,{
      paging:a,onTurn:a.turnTo,onResize:a.resize
    })]
  })
}

var zA={
  subject:`PoolDialogs-module__subject___hYJPZ`,text:`PoolDialogs-module__text___eFQK2`,confirmInput:`PoolDialogs-module__confirmInput___dWy9S`,failureList:`PoolDialogs-module__failureList___1-0ku`,failureItem:`PoolDialogs-module__failureItem___5PTpE`,failureHead:`PoolDialogs-module__failureHead___4lW8Y`,failureDetail:`PoolDialogs-module__failureDetail___4l2FC`,failureName:`PoolDialogs-module__failureName___LcuXH`,failureReason:`PoolDialogs-module__failureReason___WILmh`,tagForm:`PoolDialogs-module__tagForm___MVJjT`,field:`PoolDialogs-module__field___MctpS`,fieldLabel:`PoolDialogs-module__fieldLabel___6RwYS`
},BA=new Set([`arx_unreachable`,`not_found`,`forbidden`,`conflict`,`network`,`probe_failed`,`unauthenticated`,`delete_unconfirmed`]),VA=new Set([`deployment_in_progress`,`deployment_identity_mismatch`,`global_reader_unavailable`,`delete_unconfirmed`]);

function HA({
  accounts:e,onCancel:t,onConfirm:n
}){
  let{
    t:r,i18n:i
  }
  =N(),[a,o]=(0,_.useState)(``),s=mh(e)??[],[c]=s,l=s.length===1&&c!==void 0?c:null,u=String(s.length),d=Eh(s.length,i.language),f=()=>{
    o(``),t()
  };
  return(0,V.jsxs)(ph,{
    open:e!==null,onClose:f,title:r(`delete_dialog.title`,{
      count:s.length,shown:d
    }),width:440,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:f,children:r(`common.cancel`)
      }),(0,V.jsx)(K,{
        variant:`danger`,disabled:l===null&&a.trim()!==u,onClick:()=>{
          o(``),n(s)
        },children:r(`action.delete`)
      })]
    }),children:[l&&(0,V.jsx)(`p`,{
      className:zA.subject,children:l.row.name
    }),(0,V.jsx)(`p`,{
      className:zA.text,children:r(`delete_dialog.body`)
    }),l===null&&(0,V.jsx)(`div`,{
      className:zA.confirmInput,children:(0,V.jsx)(Ub,{
        label:r(`delete_dialog.confirm_label`,{
          count:u
        }),value:a,onChange:e=>o(e.target.value),inputMode:`numeric`,autoComplete:`off`
      })
    })]
  })
}

function UA({
  open:e,action:t,outcomes:n,onClose:r
}){
  let{
    t:i
  }
  =N(),a=n.flatMap(e=>e.status===`failed`?[e]:[]);
  return(0,V.jsx)(ph,{
    open:e,onClose:r,title:t===null?void 0:i(`batch.failures_title`,{
      action:i(`action.${t}`)
    }),width:520,children:(0,V.jsx)(`ul`,{
      className:zA.failureList,children:a.map(e=>(0,V.jsxs)(`li`,{
        className:zA.failureItem,children:[(0,V.jsxs)(`span`,{
          className:zA.failureHead,children:[(0,V.jsx)(`span`,{
            className:zA.failureName,title:e.item.row.name,children:e.item.row.name
          }),(0,V.jsx)(`span`,{
            className:zA.failureReason,children:i(`failure.${BA.has(e.reason)?e.reason:`other`}`)
          })]
        }),e.detail!==null&&e.detail!==``&&(0,V.jsx)(`span`,{
          className:zA.failureDetail,children:VA.has(e.detail)?i(`failure_said.${e.detail}`):e.detail
        })]
      },e.item.id))
    })
  })
}

function WA({
  pool:e,exitsFailed:t,onRetry:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=e=>Eh(e,i.language);
  return(0,V.jsxs)(V.Fragment,{
    children:[e.stale&&(0,V.jsx)(`output`,{
      className:Rm.notice,children:r(`pool.stale`)
    }),t&&(0,V.jsx)(`output`,{
      className:Rm.notice,children:r(`pool.exits_failed`)
    }),e.missing>0&&(0,V.jsxs)(`output`,{
      className:Rm.notice,children:[r(`pool.missing`,{
        shown:a(e.missing)
      }),(0,V.jsx)(K,{
        variant:`ghost`,size:`sm`,onClick:n,disabled:e.refreshing,children:r(`common.retry`)
      })]
    }),e.unreadable>0&&(0,V.jsx)(`output`,{
      className:Rm.notice,children:r(`pool.unreadable`,{
        shown:a(e.unreadable)
      })
    })]
  })
}

var GA={
  matrix:`PoolMatrix-module__matrix___QObel`,canvas:`PoolMatrix-module__canvas___gHvO1`,label:`PoolMatrix-module__label___RB6Vz`,tip:`PoolMatrix-module__tip___w5WTw`,tipName:`PoolMatrix-module__tipName___CPGlm`,tipMeta:`PoolMatrix-module__tipMeta___co3Ws`
},KA=.14,qA=.62,JA=420,YA=180,XA=6;

function ZA(e){
  let n=getComputedStyle(e.canvas),r=e=>n.getPropertyValue(e).trim();
  return {
    enabled:r(`--success-color`),limited:r(`--quota-medium-color`),fault:r(`--viz-failure`),disabled:r(`--state-disabled`),deploying:r(`--state-deploying`),deploy_failed:r(`--state-deploy-failed`),ring:r(`--text-primary`)
  }
}

function QA(e,t){
  let{
    layout:n,ordered:r,matching:i,selection:a,hovered:o,paint:s,elapsed:c
  }
  =t;
  e.clearRect(0,0,n.width,n.height);
  let l=n.width+n.height;
  e.lineWidth=1,e.strokeStyle=s.ring;
  for(let t of n.blocks)for(let u=0;u<t.count;u+=1){
    let d=t.start+u,f=r[d];
    if(f===void 0)continue;
    let{
      x:p,y:m
    }
    =vD(n,t,u),h=Math.min(1,Math.max(0,(c-(p+m)/l*JA)/YA));
    h<=0||(e.globalAlpha=h*(f.state===`enabled`?qA:1)*(i.has(f.id)?1:KA),e.fillStyle=s[f.state],e.fillRect(p,m,n.dot,n.dot),(a.has(f.id)||d===o)&&(e.globalAlpha=h,e.strokeRect(p-1.5,m-1.5,n.dot+3,n.dot+3)))
  }
  e.globalAlpha=1
}

function $A(e){
  let{
    accounts:t,matching:n,selection:r,onOpen:i
  }
  =e,{
    t:a,i18n:o
  }
  =N(),s=(0,_.useRef)(null),c=(0,_.useRef)(null),l=(0,_.useRef)({
    played:!1,startedAt:null
  }),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(null),m=(0,_.useMemo)(()=>{
    let e=new Map(bv.map((e,t)=>[e,t]));return Uv(t,XA).map(t=>({
      ...t,accounts:t.accounts.toSorted((t,n)=>(e.get(t.state)??0)-(e.get(n.state)??0))
    }))
  },[t]),h=(0,_.useMemo)(()=>m.flatMap(e=>e.accounts),[m]),g=(0,_.useMemo)(()=>gD(m.map(e=>({
    key:e.key,count:e.accounts.length
  })),u),[m,u]);
  (0,_.useEffect)(()=>{
    let e=s.current;if(!e)return;let t=new ResizeObserver(([e])=>{
      e&&d(Math.floor(e.contentRect.width))
    });return t.observe(e),()=>t.disconnect()
  },[]),(0,_.useEffect)(()=>{
    let e=c.current,t=e?.getContext(`2d`);if(!e||!t||g.width===0)return;let i=Math.min(window.devicePixelRatio||1,2),a=Math.round(g.width*i),o=Math.round(g.height*i);(e.width!==a||e.height!==o)&&(e.width=a,e.height=o),t.setTransform(i,0,0,i,0,0);let s=ZA(t),u=l.current;!u.played&&h.length>0&&(u.played=!0,u.startedAt=yl()?null:performance.now());let d=0,p=e=>{
      let i=u.startedAt===null?1/0:e-u.startedAt;QA(t,{
        layout:g,ordered:h,matching:n,selection:r,hovered:f,paint:s,elapsed:i
      }),i<600?d=requestAnimationFrame(p):u.startedAt=null
    };return p(performance.now()),()=>cancelAnimationFrame(d)
  },[g,h,n,r,f]);
  let v=e=>{
    let t=c.current?.getBoundingClientRect();
    return t?bD(g,{
      x:e.clientX-t.left,y:e.clientY-t.top
    }):null
  },y=e=>e===void 0||m.length===1?null:e.key===`platform`?a(`pool.platform_held`):e.email??e.key,b=f===null?void 0:h[f],x=f===null?void 0:g.blocks.find(e=>f>=e.start&&f<e.start+e.count),S=f===null||x===void 0?null:vD(g,x,f-x.start);
  return(0,V.jsxs)(`div`,{
    className:GA.matrix,ref:s,style:{
      height:g.height
    },"data-pool-matrix":!0,children:[(0,V.jsx)(`canvas`,{
      ref:c,className:GA.canvas,style:{
        width:g.width,height:g.height
      },role:`img`,"aria-label":a(`pool.matrix_label`,{
        shown:Eh(t.length,o.language)
      }),onPointerMove:e=>p(v(e)),onPointerLeave:()=>p(null),onClick:e=>{
        let t=v(e),n=t===null?void 0:h[t];n&&i(n.id)
      }
    }),g.blocks.map((e,t)=>{
      let n=y(m[t]);return n!==null&&(0,V.jsx)(`span`,{
        className:GA.label,title:n,style:{
          left:e.x,top:e.y,maxWidth:e.columns*g.pitch
        },children:n
      },e.key)
    }),b&&S&&(0,V.jsxs)(`div`,{
      className:GA.tip,"data-side":S.x>g.width/2?`left`:`right`,style:{
        left:S.x,top:S.y
      },children:[(0,V.jsx)(`span`,{
        className:GA.tipName,children:b.row.name
      }),(0,V.jsxs)(`span`,{
        className:GA.tipMeta,children:[(0,V.jsx)(Tb,{
          state:b.state
        }),a(`state.${b.state}`),` ·`,` `,b.row.owner?.email??a(`pool.platform_held`)]
      })]
    })]
  })
}

function ej({
  accounts:e,matching:t,selection:n,onOpen:r
}){
  let {t:translate}=N();
  return(0,V.jsxs)(`div`,{
    className:Rm.overview,hidden:e?.length===0,children:[(0,V.jsx)(`h2`,{className:`console-health-title`,children:translate(`console_ui.health`)}),e===null&&(0,V.jsx)(CD,{}),e!==null&&e.length>0&&(0,V.jsx)($A,{
      accounts:e,matching:t,selection:n,onOpen:r
    }),(0,V.jsx)(_O,{
      accounts:e
    })]
  })
}

var tj={
  current:`ProxyDialog-module__current___J0L-k`,currentLabel:`ProxyDialog-module__currentLabel___pbq-l`,currentValue:`ProxyDialog-module__currentValue___1YgPg`,currentNone:`ProxyDialog-module__currentNone___c6823`,submit:`ProxyDialog-module__submit___nRlHO`,refusal:`ProxyDialog-module__refusal___XwW8b`,refusalSaid:`ProxyDialog-module__refusalSaid___z9ORc`
},nj=new Set([`conflict`,`not_found`,`forbidden`,`arx_unreachable`,`network`]);

function rj(e){
  return e instanceof W?{
    code:`network`,said:null
  }
  :e instanceof U?{
    code:e.code,said:e.detail??null
  }
  :null
}

function ij(e,t){
  let{
    httpProxy:n,deploymentStatus:r
  }
  =e.row,[i,a]=(0,_.useState)(void 0),o=t&&n===null&&r!==`failed`;
  return(0,_.useEffect)(()=>{
    if(!o)return;let t=!1;return(async()=>{
      try{
        let{
          httpProxy:n
        }
        =await Nf.instance(e.id);t||a(n)
      }catch(e){
        if(!(e instanceof U)&&!(e instanceof W))throw e;t||a(null)
      }
    })(),()=>{
      t=!0
    }
  },[o,e.id]),n??(o?i:null)
}

function aj({
  account:e,open:t,onClose:n,onChanged:r
}){
  let{
    t:i
  }
  =N(),a=(0,_.useId)(),[o,s]=(0,_.useState)(!1),c=(0,_.useRef)(crypto.randomUUID()),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)({
    status:`editing`,refusal:null
  }),h=ij(e,t),g=rA(l),v=p.status===`sending`,y=async()=>{
    if(g!==null){
      m({
        status:`sending`
      });
      try{
        await Nf.changeProxy(e.id,{
          requestId:c.current,httpProxy:g,enableOnSuccess:e.row.healthy
        }),m({
          status:`accepted`,endpoint:new URL(g).host
        }),ak(e.id),r()
      }catch(e){
        let t=rj(e);
        if(t===null)throw e;
        t.code===`unauthenticated`?q.getState().expire():m({
          status:`editing`,refusal:t
        })
      }
    }
  },b=p.status===`editing`?p.refusal:null,x=d&&l.trim()!==``&&g===null?i(`proxy.invalid`):void 0,S=b===null?null:i(`proxy.refused.${nj.has(b.code)?b.code:`other`}`);
  return(0,V.jsxs)(ph,{
    open:t,onClose:n,closeDisabled:v,title:i(`proxy.title`),width:480,footer:p.status===`accepted`?(0,V.jsx)(K,{
      onClick:n,children:i(`common.done`)
    }):(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:n,disabled:v,children:i(`common.cancel`)
      }),(0,V.jsx)(K,{
        className:tj.submit,type:`submit`,form:a,disabled:g===null||v,children:i(v?`proxy.sending`:`proxy.submit`)
      })]
    }),children:[(0,V.jsx)(`p`,{
      className:zA.subject,children:e.row.name
    }),p.status===`accepted`?(0,V.jsx)(`output`,{
      className:zA.text,children:i(`proxy.accepted_body`,{
        endpoint:p.endpoint
      })
    }):(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(`p`,{
        className:zA.text,children:i(`proxy.body`)
      }),(0,V.jsxs)(`div`,{
        className:tj.current,children:[(0,V.jsx)(`span`,{
          className:tj.currentLabel,children:i(`proxy.current`)
        }),h===void 0&&(0,V.jsx)(`span`,{
          className:tj.currentNone,children:i(`proxy.reading`)
        }),h===null&&(0,V.jsx)(`span`,{
          className:tj.currentNone,children:i(`proxy.none`)
        }),typeof h==`string`&&o&&(0,V.jsxs)(`span`,{
          className:tj.currentValue,children:[(0,V.jsx)(`code`,{
            children:h
          }),(0,V.jsx)(oA,{
            text:h,label:i(`proxy.copy_current`)
          })]
        }),typeof h==`string`&&!o&&(0,V.jsx)(K,{
          variant:`ghost`,size:`sm`,onClick:()=>s(!0),children:i(`proxy.reveal`)
        })]
      }),(0,V.jsx)(`form`,{
        id:a,className:zA.confirmInput,onSubmit:e=>{
          e.preventDefault(),y()
        },children:(0,V.jsx)(Ub,{
          label:i(`proxy.input_label`),value:l,onChange:e=>{
            u(e.target.value),m({
              status:`editing`,refusal:null
            })
          },onBlur:()=>f(!0),readOnly:v,autoComplete:`off`,spellCheck:!1,error:x,hint:g===null?i(`proxy.input_hint`):i(`proxy.preview`,{
            value:g
          })
        })
      }),S!==null&&(0,V.jsxs)(`p`,{
        className:tj.refusal,role:`alert`,children:[S,b?.said&&(0,V.jsx)(`span`,{
          className:tj.refusalSaid,children:b.said
        })]
      })]
    })]
  })
}

function oj({
  account:e,onClose:t,onChanged:n
}){
  let r=mh(e),i=e!==null,[a,o]=(0,_.useState)({
    count:0,isOpen:!1
  });
  return a.isOpen!==i&&o({
    count:a.count+ +!!i,isOpen:i
  }),r===null?null:(0,V.jsx)(aj,{
    account:r,open:i,onClose:t,onChanged:n
  },a.count)
}

var sj=250,cj=360;

function lj({
  scope:e,onScope:t
}){
  let{
    t:n
  }
  =N(),r=Rb(cj),{
    open:i
  }
  =r,[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)({
    status:`idle`
  }),l=Hw(),u=(0,_.useMemo)(()=>zw(l),[l]),d=a.trim(),f=s.status===`found`?s.suppliers:[],p=Rw(l,d).filter(t=>t.id!==e?.supplierId),m=new Set(p.map(e=>e.id)),h=f.filter(t=>t.id!==e?.supplierId&&!m.has(t.id));
  (0,_.useEffect)(()=>{
    if(!i||d===``){
      c({
        status:`idle`
      });return
    }
    let e=!1;c({
      status:`searching`
    });let t=window.setTimeout(async()=>{
      try{
        let t=await Nf.supplierOptions(d);e||c({
          status:`found`,suppliers:t
        })
      }catch(t){
        if(!(t instanceof U||t instanceof W))throw t;t instanceof U&&t.status===401?q.getState().expire():e||c({
          status:`failed`
        })
      }
    },sj);return()=>{
      e=!0,window.clearTimeout(t)
    }
  },[i,d]);
  let g=()=>{
    r.close(),o(``)
  },v=e=>{
    t(e),g()
  },y=({
    id:e,email:t
  })=>({
    supplierId:e,email:t,includeDescendants:!0
  }),b=(e,t)=>n(t?`scope.tree`:`scope.own`,{
    who:e
  }),x=e===null?void 0:u.get(e.supplierId),S=e===null?n(`scope.all`):b(x??Th(e.email),e.includeDescendants),C=e===null?S:b(x===void 0?e.email:`${x} (${e.email})`,e.includeDescendants),w={
    idle:d===``?n(`scope.hint`):null,searching:n(`scope.searching`),failed:n(`scope.failed`),found:f.length===0&&p.length===0?n(`scope.none`):null
  }
  [s.status],T=({
    key:e,picks:t,name:n,note:r,isCurrent:i
  })=>(0,V.jsx)(`li`,{
    children:(0,V.jsxs)(`button`,{
      type:`button`,className:EO.option,"data-choice":!0,"aria-current":i||void 0,onClick:()=>v(t),children:[n,r!==null&&(0,V.jsxs)(`span`,{
        className:EO.optionNote,children:[` `,r]
      })]
    })
  },e);
  return(0,V.jsxs)(`div`,{
    ref:r.rootRef,children:[(0,V.jsxs)(`button`,{
      ref:r.triggerRef,type:`button`,className:vO.trigger,"aria-haspopup":`true`,"aria-expanded":i,"aria-label":`${n(`scope.label`)}: ${C}`,title:C,onClick:r.toggle,children:[(0,V.jsx)(`span`,{
        className:vO.triggerText,children:S
      }),(0,V.jsx)(`span`,{
        className:vO.triggerIcon,"aria-hidden":`true`,children:(0,V.jsx)(sp,{
          size:14
        })
      })]
    }),r.placement!==null&&(0,V.jsxs)(`search`,{
      className:EO.panel,style:r.placement,"data-opens":r.opensUp?`up`:`down`,onKeyDown:e=>{
        e.key===`Escape`&&o(``),r.onKeyDown(e)
      },children:[(0,V.jsx)(Ub,{
        type:`search`,"aria-label":n(`scope.search_label`),placeholder:n(`scope.search_placeholder`),autoComplete:`off`,spellCheck:!1,value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{
          let[t]=[...p,...h];e.key===`Enter`&&!e.nativeEvent.isComposing&&t&&(e.preventDefault(),v(y(t)))
        }
      }),(0,V.jsxs)(`ul`,{
        className:EO.options,"data-panel-list":!0,"aria-label":n(`scope.label`),children:[T({
          key:`all`,picks:null,name:n(`scope.all`),note:null,isCurrent:e===null
        }),e!==null&&[!0,!1].map(t=>T({
          key:t?`tree`:`own`,picks:{
            ...e,includeDescendants:t
          },name:b(x??e.email,t),note:x===void 0?null:e.email,isCurrent:e.includeDescendants===t
        })),p.map(e=>T({
          key:e.id,picks:y(e),name:e.remark,note:e.email,isCurrent:!1
        })),h.map(e=>T({
          key:e.id,picks:y(e),name:e.email,note:null,isCurrent:!1
        }))]
      }),w!==null&&(0,V.jsx)(`output`,{
        className:EO.status,children:w
      })]
    })]
  })
}

var uj=e=>[...new Set(e.split(/[\s,，]+/).filter(Boolean))];

function dj({
  accounts:e,onCancel:t,onConfirm:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=(0,_.useId)(),o=(0,_.useId)(),[s,c]=(0,_.useState)(`append`),[l,u]=(0,_.useState)(``),d=mh(e)??[],f=uj(l),p=s===`clear`||f.length>0,m=()=>{
    c(`append`),u(``)
  },h=()=>{
    m(),t()
  },g=()=>{
    p&&(n(d,{
      mode:s,values:s===`clear`?[]:f
    }),m())
  };
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:h,title:r(`tag_dialog.title`,{
      count:d.length,shown:Eh(d.length,i.language)
    }),width:440,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:h,children:r(`common.cancel`)
      }),(0,V.jsx)(K,{
        type:`submit`,form:a,disabled:!p,children:r(`tag_dialog.submit`)
      })]
    }),children:(0,V.jsxs)(`form`,{
      id:a,className:zA.tagForm,onSubmit:e=>{
        e.preventDefault(),g()
      },children:[(0,V.jsxs)(`div`,{
        className:zA.field,children:[(0,V.jsx)(`span`,{
          id:o,className:zA.fieldLabel,children:r(`tag_dialog.mode_label`)
        }),(0,V.jsx)(yO,{
          value:s,options:Jl.map(e=>({
            value:e,label:r(`tag_dialog.mode_${e}`)
          })),onChange:e=>c(Jl.find(t=>t===e)??s),ariaLabelledBy:o
        })]
      }),s===`clear`?(0,V.jsx)(`p`,{
        className:zA.text,children:r(`tag_dialog.clear_body`)
      }):(0,V.jsx)(Ub,{
        label:r(`tag_dialog.input_label`),value:l,onChange:e=>u(e.target.value),autoComplete:`off`,spellCheck:!1,hint:f.length===0?r(`tag_dialog.input_hint`):r(`tag_dialog.preview`,{
          names:f.join(r(`tag_dialog.separator`))
        })
      })]
    })
  })
}

var fj=1,pj={
  card:2,matrix:12
},mj=24,hj=84,gj=24,_j=9,vj=8;

function yj(e,t,n,r){
  let i=e.getBoundingClientRect(),a=r.getBoundingClientRect(),o=Math.max(0,i.width-32-2*pj[t]);
  return{
    el:e,kind:t,along:n,x:Math.round(i.left-a.left+pj[t]+o*n),y:Math.round(i.top-a.top-32+fj)
  }
}

function bj(e){
  let{
    top:t,width:n
  }
  =e.getBoundingClientRect();
  return n>=56&&t-32>hj&&t<window.innerHeight-gj
}

var xj=`canvas, svg, img, button, input, select, textarea, a, label`;

function Sj(e,t){
  let n=document.elementFromPoint(e,t);
  return n===null||n.closest(xj)!==null?!1:![...n.childNodes].some(e=>e.nodeType===Node.TEXT_NODE&&(e.textContent??``).trim()!==``)
}

var Cj=(e,t)=>e.left<t.right&&t.left<e.right&&e.top<t.bottom&&t.top<e.bottom;

function wj(e){
  let t=e.parentElement;
  if(t===null)return[];
  let n=[...t.querySelectorAll(`canvas, svg, img`)].filter(e=>e.closest(`[data-pool-matrix], [data-mascot-layer]`)===null).map(e=>e.getBoundingClientRect());
  for(let e of t.children){
    if(e.querySelector(`[data-pool-matrix]`)!==null)break;
    let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);
    for(let e=t.nextNode();e!==null;e=t.nextNode()){
      let t=document.createRange();
      t.selectNodeContents(e),n.push(...t.getClientRects())
    }
  }
  return n.filter(e=>e.width>0&&e.height>0)
}

function Tj(e,t,n){
  let r=[];
  for(let i=e+2;i<t-2;i+=n)r.push(i);
  return[...r,t-2]
}

function Ej(e,t){
  return!t.some(t=>Cj(e,t))&&Tj(e.left,e.right,14).every(t=>Tj(e.top,e.bottom,12).every(e=>Sj(t,e)))
}

function Dj(e,t){
  let n=t.getBoundingClientRect(),r=n.left+e.x,i=n.top+e.y;
  return{
    left:r,top:i,right:r+32,bottom:i+32-2
  }
}

function Oj(e){
  let t=e.parentElement,n=t?.querySelector(`[data-accounts-head]`)?.getBoundingClientRect().bottom??0,r=wj(e);
  return[...t?.querySelectorAll(`[data-account]`)??[]].map(e=>e.firstElementChild??e).filter(bj).map(t=>yj(t,`card`,0,e)).filter(t=>t.el.getBoundingClientRect().top-n>=32||Ej(Dj(t,e),r))
}

function kj(e,t=null){
  let n=e.parentElement?.querySelector(`[data-pool-matrix]`)??null;
  if(n===null||!bj(n))return null;
  let r=wj(e),i=Array.from({
    length:mj
  },(t,r)=>yj(n,`matrix`,(r+Math.random())/mj,e)).filter(t=>Ej(Dj(t,e),r)),a=t===null?[]:i.filter(n=>Aj(n,e,t)!==null),o=a.length>0?a:i;
  return o[Math.floor(Math.random()*o.length)]??null
}

function Aj(e,t,n){
  let r=t.getBoundingClientRect(),i=e.x-vj,a=e.x+32+vj-n.width,o=i+n.width<=r.width;
  if(e.kind===`card`)return o?`right`:`left`;
  let s=r.top+e.y-_j,c=wj(t),l=e=>Ej({
    left:r.left+e,top:s-n.height,right:r.left+e+n.width,bottom:s
  },c);
  return o&&l(i)?`right`:a>=0&&l(a)?`left`:null
}

function jj(e,t){
  let n=t.getBoundingClientRect().top+e.y;
  return n>52&&n<window.innerHeight-gj
}

var Mj=(e,t)=>e.el.isConnected?yj(e.el,e.kind,e.along,t):null;

function Nj(e,t){
  let n=Mj(e,t);
  return n!==null&&Math.abs(n.x-e.x)<2&&Math.abs(n.y-e.y)<2
}

var Pj=(e,t,n)=>Math.min(n,Math.max(t,e));

function Fj(e,t){
  let n=Math.hypot(t.x-e.x,t.y-e.y),r=Math.max(0,e.y-t.y);
  return{
    duration:Math.round(Pj(320+n*.9,380,1150)),height:Math.round(Pj(26+n*.2+r*.15,34,150))
  }
}

var Ij=[3200,7200],Lj=[12e3,2e4],Rj=5200,zj=2200,Bj=1300,Vj=500,Hj=22e3,Uj=9e3,Wj=45e3,Gj=820,Kj=250,qj=44,Jj=`cubic-bezier(0.2, 0.7, 0.4, 1)`,Yj=`cubic-bezier(0.6, 0, 0.8, 0.3)`,Xj=([e,t])=>e+Math.random()*(t-e),Zj=e=>e[Math.floor(Math.random()*e.length)],Qj=({
  x:e,y:t
})=>`translate3d(${e}px, ${t}px, 0)`,$j=e=>{
  if(!(e instanceof DOMException&&e.name===`AbortError`))throw e
};

function eM(e){
  let{
    layer:t,mover:n,arc:r
  }
  =e,i=!0,a=null,o=1,s=null,c=0,l=0,u=0,d=new Set,f=new Set,p=e=>{
    s={
      x:e.clientX,y:e.clientY
    }
  };
  document.addEventListener(`pointermove`,p,{
    passive:!0
  });
  let m=e=>new Promise(t=>{
    let n=()=>{
      clearTimeout(r),f.delete(n),t()
    },r=setTimeout(n,e);f.add(n)
  }),h=()=>{
    if(s===null||a===null)return!1;
    let e=t.getBoundingClientRect(),n=s.x-(e.left+a.x+16),r=s.y-(e.top+a.y+16);
    return Math.hypot(n,r)<qj
  };
  async function g(e,n){
    let r=performance.now()+e;
    for(;i&&performance.now()<r;)if(await m(Math.min(Kj,r-performance.now())),i&&document.visibilityState===`visible`){
      if(a!==null&&!(Nj(a,t)&&jj(a,t)))return`adrift`;
      if(n&&performance.now()-l>Uj&&h())return`poked`
    }
    return`done`
  }
  let _=e=>{
    a=e,n.style.transform=Qj(e),n.dataset.shown=``
  };
  async function v(t,s=!1){
    let c=a;
    if(c===null||e.isCalm)return _(t);
    if(o=t.x>=c.x?1:-1,e.show(`crouch`,o),await m(140),!i)return;
    e.show(s?`dive`:`jump`,o);
    let{
      duration:l,height:u
    }
    =Fj(c,t),d=s?360*o:0;
    _(t);
    let f=n.animate([{
      transform:Qj(c)
    },{
      transform:Qj(t)
    }],{
      duration:l
    }),p=r.animate([{
      transform:`translateY(0) rotate(0deg)`,easing:Jj
    },{
      transform:`translateY(${-u}px) rotate(${d/2}deg)`,easing:Yj
    },{
      transform:`translateY(0) rotate(${d}deg)`
    }],{
      duration:l
    });
    await Promise.all([f.finished,p.finished]).catch($j),i&&(e.show(`land`,o),await m(150),i&&e.show(`idle`,o))
  }
  let y=n=>a===null?null:Aj(a,t,e.measure(n));
  async function b(t,n,r){
    let a=y(t);
    return e.show(e.isCalm?`idle`:n,o),a!==null&&(c=performance.now(),e.say({
      line:t,side:a
    })),await g(a===null?Bj:r,!1),i?(e.say(null),e.show(`idle`,o),a!==null):!1
  }
  let x=()=>Oj(t).filter(e=>e.el!==a?.el);
  async function S(){
    let e=a===null?null:Mj(a,t),r=(e!==null&&jj(e,t)?e:null)??Zj(x())??kj(t);
    if(r!==null)return v(r);
    if(e!==null)return _(e);
    a=null,delete n.dataset.shown
  }
  async function C(){
    e.show(`sleep`,o);
    let t=await g(Xj(Lj),!0);
    if(u=performance.now(),i){
      if(t!==`poked`)return e.show(`idle`,o);
      l=performance.now(),s=null,await b({
        key:`woke`
      },`wave`,zj)
    }
  }
  async function w(){
    let n=x();
    if(a?.kind===`matrix`){
      let e=Zj(n)??kj(t);
      return e==null?void 0:v(e,e.kind===`card`)
    }
    let r=Math.random(),i=Zj(n);
    if(r<.52&&i!==void 0)return v(i);
    if(r<.7&&performance.now()-u>Wj)return C();
    let s=r<.86?kj(t):null;
    if(s!==null)return v(s);
    o=o===1?-1:1,e.show(`idle`,o)
  }
  async function T(){
    let r=null;
    for(;i&&r===null;){
      let n=e.measure(e.hello()),i=kj(t,n),a=Zj(Oj(t)),o=i===null||Aj(i,t,n)===null;
      r=(e.isCalm&&o?a:i)??a??i,r===null&&await m(600)
    }
    if(!i||r===null||(e.isCalm||(n.dataset.arriving=``),e.show(`idle`,o),_(r),await m(e.isCalm?200:Gj),delete n.dataset.arriving,!i))return;
    let u=!await b(e.hello(),`wave`,Rj);
    for(;i;){
      for(;i&&document.visibilityState!==`visible`;)await m(1e3);
      let t=await g(u&&!e.isCalm&&x().length>0?Vj:Xj(Ij),!0);
      if(!i)return;
      if(a===null||t===`adrift`)await S();
      else if(t===`poked`)l=performance.now(),s=null,await b({
        key:Zj(NE)??NE[0]
      },`wave`,zj);
      else{
        let t=u?e.hello():e.lines().find(e=>!d.has(e.key)),n=u||performance.now()-c>Hj;
        if(t!==void 0&&n&&y(t)!==null&&await b(t,u?`wave`:`idle`,Rj))u?u=!1:d.add(t.key);
        else if(!e.isCalm)await w();
        else if(y(e.hello())===null){
          let e=Zj(x());
          e!==void 0&&_(e)
        }
      }
    }
  }
  return T(),()=>{
    i=!1,document.removeEventListener(`pointermove`,p);
    for(let e of[...f])e();
    for(let e of[...n.getAnimations(),...r.getAnimations()])e.cancel()
  }
}

var tM={
  layer:`Mascot-module__layer___9JLiu`,mover:`Mascot-module__mover___syK-W`,arc:`Mascot-module__arc___-Pxht`,face:`Mascot-module__face___-uhrt`,sprite:`Mascot-module__sprite___zz7IE`,figure:`Mascot-module__figure___Md2zI`,"mascot-bob":`Mascot-module__mascot-bob___BmXBK`,mascotBob:`Mascot-module__mascot-bob___BmXBK`,"mascot-breathes":`Mascot-module__mascot-breathes___Y1GjW`,mascotBreathes:`Mascot-module__mascot-breathes___Y1GjW`,plate:`Mascot-module__plate___DYONR`,dot:`Mascot-module__dot___oKMwG`,body:`Mascot-module__body___DqW92`,shade:`Mascot-module__shade___Yg8-n`,screen:`Mascot-module__screen___0qL86`,eye:`Mascot-module__eye___ev-1i`,shut:`Mascot-module__shut___f18xm`,lamp:`Mascot-module__lamp___f9MYJ`,glow:`Mascot-module__glow___TbSLz`,"mascot-lamp":`Mascot-module__mascot-lamp___mP8BK`,mascotLamp:`Mascot-module__mascot-lamp___mP8BK`,sheen:`Mascot-module__sheen___onArD`,band:`Mascot-module__band___PmNhK`,"mascot-sweep":`Mascot-module__mascot-sweep___trJDu`,mascotSweep:`Mascot-module__mascot-sweep___trJDu`,lid:`Mascot-module__lid___UO6oY`,"mascot-blinks":`Mascot-module__mascot-blinks___KhVrg`,mascotBlinks:`Mascot-module__mascot-blinks___KhVrg`,"mascot-gathers":`Mascot-module__mascot-gathers___qs-xC`,mascotGathers:`Mascot-module__mascot-gathers___qs-xC`,"mascot-plate":`Mascot-module__mascot-plate___fJCsg`,mascotPlate:`Mascot-module__mascot-plate___fJCsg`,waveLow:`Mascot-module__waveLow___2PqPo`,"mascot-first":`Mascot-module__mascot-first___G9yd3`,mascotFirst:`Mascot-module__mascot-first___G9yd3`,waveHigh:`Mascot-module__waveHigh___5rLs8`,"mascot-second":`Mascot-module__mascot-second___I28OQ`,mascotSecond:`Mascot-module__mascot-second___I28OQ`,zs:`Mascot-module__zs___UNHCU`,"mascot-z":`Mascot-module__mascot-z___ut09p`,mascotZ:`Mascot-module__mascot-z___ut09p`,bubble:`Mascot-module__bubble___9pcVW`,"mascot-says":`Mascot-module__mascot-says___arCZU`,mascotSays:`Mascot-module__mascot-says___arCZU`
},nM=3,rM=2,iM=[`.....L.....`,`.....S.....`,`..BBBBBBB..`,`.BBBBBBBBB.`,`.BVVVVVVVB.`,`.BVEVVVEVB.`,`.BVVVVVVVB.`,`BBBBBBBBBBB`,`B.SSSSSSS.B`,`..SSSSSSS..`,`..BB...BB..`],aM=[`B....L....B`,`B....S....B`,`.BBBBBBBBB.`,`.BBBBBBBBB.`,`.BVVVVVVVB.`,`.BVEVVVEVB.`,`.BVVVVVVVB.`,`.BBBBBBBBB.`,`..SSSSSSS..`,`..SSSSSSS..`,`...BB.BB...`],oM=[`.....L.....`,`.....S.....`,`..BBBBBBB..`,`.BBBBBBBBB.`,`.BVVVVVVVB.`,`.BVEVVVEVBB`,`.BVVVVVVVBB`,`BBBBBBBBBB.`,`B.SSSSSSS..`,`..SSSSSSS..`,`..BB...BB..`],sM=[`.....L.....`,`.....S.....`,`..BBBBBBB..`,`.BBBBBBBBBB`,`.BVVVVVVVBB`,`.BVEVVVEVBB`,`.BVVVVVVVB.`,`BBBBBBBBBB.`,`B.SSSSSSS..`,`..SSSSSSS..`,`..BB...BB..`],cM=[`...........`,`...........`,`...........`,`...........`,`...........`,`.........SL`,`..BBBBBBB..`,`.BBBBBBBBB.`,`.BVVVVVVVB.`,`.BVCCVCCVB.`,`BBBSSSSSBBB`],lM=e=>e.flatMap((e,t)=>[...e].flatMap((e,n)=>e===`.`?[]:[{
  col:n,row:t,ink:e
}])),uM={
  stand:lM(iM),leap:lM(aM),waveLow:lM(oM),waveHigh:lM(sM),lying:lM(cM)
},dM={
  B:tM.body,S:tM.shade,V:tM.screen,E:tM.eye,C:tM.shut,L:tM.lamp
};

function fM({
  cells:e,className:t
}){
  return(0,V.jsxs)(`g`,{
    className:t,children:[e.map(({
      col:e,row:t
    })=>(0,V.jsx)(`rect`,{
      className:tM.plate,x:e*nM-.5,y:t*nM-.5,width:nM,height:nM
    },`${e}-${t}`)),e.map(({
      col:e,row:t,ink:n
    })=>(0,V.jsx)(`rect`,{
      className:`${tM.dot} ${dM[n]??``}`,"data-col":e,"data-row":t,x:e*nM,y:t*nM,width:rM,height:rM
    },`${e}-${t}`))]
  })
}

var pM=e=>e===`jump`||e===`dive`?`leap`:e===`sleep`?`lying`:`stand`;

function mM({
  pose:e
}){
  return(0,V.jsxs)(`span`,{
    className:tM.figure,"aria-hidden":`true`,children:[(0,V.jsx)(`svg`,{
      className:tM.sprite,width:32,height:32,viewBox:`0 0 32 32`,"aria-hidden":`true`,focusable:`false`,children:e===`wave`?(0,V.jsxs)(V.Fragment,{
        children:[(0,V.jsx)(fM,{
          cells:uM.waveLow,className:tM.waveLow
        }),(0,V.jsx)(fM,{
          cells:uM.waveHigh,className:tM.waveHigh
        })]
      }):(0,V.jsx)(fM,{
        cells:uM[pM(e)]
      })
    }),e!==`sleep`&&(0,V.jsx)(`span`,{
      className:tM.glow
    }),e===`idle`&&(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(`span`,{
        className:tM.sheen,children:(0,V.jsx)(`span`,{
          className:tM.band
        })
      }),(0,V.jsx)(`span`,{
        className:tM.lid,"data-eye":`left`
      }),(0,V.jsx)(`span`,{
        className:tM.lid,"data-eye":`right`
      })]
    })]
  })
}

function hM({
  accounts:e,names:t
}){
  let{
    t:n
  }
  =N(),r=q(e=>e.principal),i=(0,_.useRef)(null),a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=(0,_.useRef)(null),[c,l]=(0,_.useState)({
    pose:`idle`,facing:1
  }),[u,d]=(0,_.useState)(null),f=(0,_.useRef)({
    accounts:e,names:t,principal:r,t:n
  });
  return(0,_.useEffect)(()=>{
    f.current={
      accounts:e,names:t,principal:r,t:n
    }
  }),(0,_.useEffect)(()=>{
    if(i.current!==null&&a.current!==null&&o.current!==null)return eM({
      layer:i.current,mover:a.current,arc:o.current,isCalm:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,show:(e,t)=>l({
        pose:e,facing:t
      }),say:d,measure:e=>{
        let t=s.current;if(t===null)return{
          width:0,height:0
        };t.textContent=f.current.t(`mascot.${e.key}`,{
          ...e.values
        });let n={
          width:t.offsetWidth,height:t.offsetHeight
        };return t.textContent=``,n
      },hello:()=>kE(EE(Date.now())),lines:()=>{
        let e=f.current;return e.principal===null?[]:ME(OE(e.accounts,TE(e.principal),e.names,Date.now()))
      }
    })
  },[]),(0,V.jsx)(`div`,{
    className:tM.layer,ref:i,"data-mascot-layer":!0,children:(0,V.jsxs)(`div`,{
      className:tM.mover,ref:a,"data-mascot":!0,"data-pose":c.pose,"data-facing":c.facing,children:[(0,V.jsxs)(`div`,{
        className:tM.arc,ref:o,children:[(0,V.jsx)(`div`,{
          className:tM.face,children:(0,V.jsx)(mM,{
            pose:c.pose
          })
        }),c.pose===`sleep`&&(0,V.jsxs)(`span`,{
          className:tM.zs,"aria-hidden":`true`,children:[(0,V.jsx)(`span`,{
            children:`z`
          }),(0,V.jsx)(`span`,{
            children:`z`
          }),(0,V.jsx)(`span`,{
            children:`z`
          })]
        })]
      }),(0,V.jsx)(`span`,{
        className:tM.bubble,ref:s,"data-sizer":!0,"aria-hidden":`true`
      }),(0,V.jsx)(`output`,{
        className:tM.bubble,"data-side":u?.side??`right`,children:u===null?null:n(`mascot.${u.line.key}`,{
          ...u.line.values
        })
      })]
    })
  })
}

function gM(){
  let[e,t]=(0,_.useState)(cu);
  return(0,_.useEffect)(()=>{
    let e=!0;return Nf.cleanup().then(n=>{
      e&&t(n.armed)
    },e=>{
      if(!(e instanceof U||e instanceof W||e instanceof bt))throw e
    }),()=>{
      e=!1
    }
  },[]),e
}

var _M={
  byAccount:new Map,everySeconds:null,failed:!1
},vM=3e5,yM=2e4;

function bM(e){
  let[t,n]=(0,_.useState)(_M),r=(0,_.useRef)(null);
  return(0,_.useEffect)(()=>{
    r.current=e;let t=()=>r.current===e,i=async()=>{
      if(document.visibilityState===`visible`)try{
        let e=await Nf.exits();if(!t())return;let r=new Map(e.exits.map(e=>[e.id,e]));n({
          byAccount:r,everySeconds:e.everySeconds,failed:!1
        })
      }catch(e){
        if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;e instanceof U&&e.status===401?q.getState().expire():t()&&n(e=>({
          ...e,failed:!0
        }))
      }
    };i();let a=setTimeout(()=>void i(),yM),o=setInterval(()=>void i(),vM);return()=>{
      r.current=null,clearTimeout(a),clearInterval(o)
    }
  },[e]),t
}

function xM(e,t){
  let n=e.owner===null?null:RE(e.owner,t);
  return[e.name,e.id,e.owner?.email,n?.lead,n?.own,e.error.type,e.error.message,...e.tags].filter(e=>typeof e==`string`).join(`
`).toLowerCase()
}

function SM(e,t,n){
  let r=t.query.toLowerCase().split(/\s+/).filter(Boolean);
  return r.length===0&&t.owner===null?e:e.filter(e=>{
    if(t.owner!==null&&e.owner?.id!==t.owner)return!1;let i=xM(e,n);return r.every(e=>i.includes(e))
  })
}

var CM=[],wM=new Map;

function TM(e,t){
  let n=e?.supplierId??null,r=e?.includeDescendants??!1,i=`${n??``}/${r}`,[a,o]=(0,_.useState)(null);
  return(0,_.useEffect)(()=>{
    if(t===0)return;let e=!1;return QC(n===null?null:{
      supplierId:n,includeDescendants:r
    }).then(t=>{
      if(e)return;let n=new Map(t?.carried.map(e=>[e.id,e]));o({
        key:i,valley:t===null?null:{
          ghosts:t.ghosts,carried:n
        }
      })
    },e=>{
      if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;e instanceof U&&e.status===401&&q.getState().expire()
    }),()=>{
      e=!0
    }
  },[n,r,t,i]),a!==null&&a.key===i?a.valley:null
}

function EM(e,t,n,r){
  let i=TM(e,t),a=qh(),o=(0,_.useMemo)(()=>{
    if(i===null||e!==null||a.members.size===0)return i;let t=i.ghosts.filter(e=>e.owner===null||!a.members.has(e.owner.id));return{
      ...i,ghosts:t
    }
  },[i,e,a]),[s,c]=(0,_.useState)(!1),l=(0,_.useMemo)(()=>o===null?CM:SM(o.ghosts,n,r),[o,n,r]),u=s&&o!==null;
  return{
    ghosts:l,total:o?.ghosts.length??0,isShown:u,segment:o&&{
      count:l.length,chosen:u,onEnter:()=>c(!0),onLeave:()=>c(!1)
    },carried:o?.carried??wM
  }
}

var DM=new Set;

function OM(e,t){
  let n=new Set(e);
  return n.delete(t)||n.add(t),n
}

function kM(e,t,n){
  let r=t.indexOf(n.anchor),i=t.indexOf(n.target),a=new Set(e),o=r===-1||i===-1?[n.target]:t.slice(Math.min(r,i),Math.max(r,i)+1);
  for(let e of o)n.selected?a.add(e):a.delete(e);
  return a
}

function AM(e,t){
  let n=new Set;
  for(let r of e)t.has(r)&&n.add(r);
  return n.size===e.size?e:n
}

function jM(){
  let e=(0,_.useRef)(!1);
  return(0,_.useEffect)(()=>{
    let t=t=>{
      e.current=t.shiftKey
    },n=()=>{
      e.current=!1
    };return window.addEventListener(`keydown`,t),window.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{
      window.removeEventListener(`keydown`,t),window.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)
    }
  },[]),e
}

function MM(e,t){
  let n=jM(),r=(0,_.useRef)(null),[i,a]=(0,_.useState)(DM);
  return(0,_.useEffect)(()=>{
    a(t=>AM(t,new Set(e.map(e=>e.id))))
  },[e]),{
    selection:i,toggle:(0,_.useCallback)((e,i)=>{
      let o=r.current;a(r=>n.current&&o!==null?kM(r,t,{
        anchor:o,target:e,selected:i
      }):OM(r,e)),r.current=e
    },[n,t]),setMany:(0,_.useCallback)((e,t)=>{
      a(n=>{
        let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r
      })
    },[]),clear:(0,_.useCallback)(()=>a(DM),[])
  }
}

var NM={
  state:null,errorType:null,tag:null,owner:null,query:``
};

function PM(e,t,n){
  let r=q(e=>e.principal?.role===`supplier`?e.principal.id:null),[i,a]=(0,_.useState)(NM),[o,s]=(0,_.useState)(`listed`),c=Hw(),l=(0,_.useMemo)(()=>zw(c),[c]),u=WE(),d=(0,_.useMemo)(()=>({
    names:l,places:u
  }),[l,u]);
  aE(t===0?null:t,e);
  let f=oE(),p=(0,_.useMemo)(()=>BE(e,d,f),[e,d,f]),m=(0,_.useMemo)(()=>r===null?null:wO(p,r,l),[p,r,l]),h=(0,_.useMemo)(()=>m?.some(e=>e.id===i.owner)?i:{
    ...i,owner:null
  },[i,m]),g=(0,_.useMemo)(()=>n??new Map(p.map((e,t)=>[e.id,t])),[p,n]),v=(0,_.useMemo)(()=>Nv(p,h),[p,h]),y=(0,_.useMemo)(()=>Pv(p,h),[p,h]),b=(0,_.useMemo)(()=>Fv(p),[p]),x=(0,_.useMemo)(()=>Vv(p,h,{
    key:o,now:t
  }),[p,h,o,t]);
  return{
    filter:h,setFilter:a,clearFilter:()=>a(NM),sort:o,setSort:s,naming:d,remarks:f,owners:m!==null&&m.length>1?m:null,order:g,counts:v,errorTypes:y,tags:b,visible:x
  }
}

var FM=[],IM=new Map,LM={
  phase:`idle`
};

function RM({
  pool:e,reload:t,onScope:n
}){
  let{
    t:r
  }
  =N(),i=e.status===`ready`?e:null,a=i?.accounts??FM,o=i?.loadedAt??0,s=q(e=>e.principal?.role===`admin`),c=q(e=>e.principal?.role===`observer`),l=TA(t),u=JE(i,t),d=PM(a,o,i?.listed),{
    filter:f,visible:p
  }
  =d,[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),T=EM(e.scope,o,f,d.naming),E=(0,_.useMemo)(()=>p.map(e=>e.id),[p]),D=(0,_.useMemo)(()=>new Set(E),[E]),O=FA(p.length,JSON.stringify([f,d.sort,e.scope])),k=(0,_.useMemo)(()=>p.slice(O.start,O.end),[p,O.start,O.end]),A=(0,_.useMemo)(()=>k.map(e=>e.id),[k]),{
    selection:j,toggle:ee,setMany:te,clear:ne
  }
  =MM(a,A),re=(0,_.useMemo)(()=>a.filter(e=>j.has(e.id)),[a,j]),ie=bM(o),ae=gM(),[oe,se]=(0,_.useState)({
    at:0,on:IM
  }),ce=oe.at===o?oe.on:IM,le=(e,t)=>{
    se({
      at:o,on:new Map(ce).set(e.id,t)
    }),l.start({
      action:t?`enable`:`disable`
    },[e],`quiet`)
  },ue=(0,_.useCallback)((e,t)=>{
    e===`delete`?v(t):e===`set_tags`?b(t):l.start({
      action:e
    },t)
  },[l]),de=(e,t)=>{
    h(null),l.start(e,t)
  },fe=l.state.phase===`done`?l.state:null,pe=l.state.phase===`running`,me=l.state.phase===`running`&&l.state.quiet,he=fe?.outcomes??[],ge=he.flatMap(e=>e.status===`failed`?[e.item]:[]),_e=s?(0,V.jsx)(lj,{
    scope:e.scope,onScope:n
  }):null,ve=i===null||a.length>0||_e!==null;
  return(0,V.jsxs)(V.Fragment,{
    children:[i!==null&&(0,V.jsx)(WA,{
      pool:i,exitsFailed:ie.failed,onRetry:()=>void t()
    }),(0,V.jsx)(ej,{
      accounts:i?.accounts??null,matching:D,selection:j,onOpen:h
    }),(0,V.jsxs)(`div`,{
      className:Rm.workbench,children:[ve&&(0,V.jsx)(VO,{
        view:i===null?null:{
          filter:f,sort:d.sort,counts:d.counts,errorTypes:d.errorTypes,tags:d.tags,owners:d.owners,total:a.length,valley:T.segment,onFilter:d.setFilter,onSort:d.setSort
        },scope:_e
      }),i===null?(0,V.jsx)(rD,{}):a.length===0?(0,V.jsx)(HO,{
        title:r(e.scope===null?`pool.none_title`:`pool.none_in_scope_title`),description:r(`pool.none_body`)
      }):T.isShown?(0,V.jsx)(RA,{
        ghosts:T.ghosts,total:T.total,naming:d.naming,listing:JSON.stringify([f.query,f.owner,e.scope])
      }):(0,V.jsxs)(V.Fragment,{
        children:[(0,V.jsx)(PA,{
          selected:re.length,filtered:p.length,state:me?LM:l.state,onSelectFiltered:()=>te(E,!0),onDeselect:ne,onRun:e=>ue(e,re),onRetry:()=>fe&&void l.start(fe.command,ge),onShowFailures:()=>w(!0),onDismiss:l.dismiss
        }),p.length===0?(0,V.jsx)(HO,{
          title:r(`pool.empty_title`),description:r(`pool.empty_body`),action:(0,V.jsx)(K,{
            variant:`secondary`,onClick:d.clearFilter,children:r(`pool.clear_filters`)
          })
        }):(0,V.jsx)(Kk,{
          accounts:k,paging:O,order:d.order,now:o,selection:j,exits:ie.byAccount,patrolEvery:ie.everySeconds,cleanupArmed:ae,naming:d.naming,remarks:d.remarks,carried:T.carried,arrived:u,switched:ce,busy:pe||c,onToggle:ee,onToggleAll:e=>te(A,e),onOpen:h,onSwitch:le
        })]
      })]
    }),a.length>0&&(0,V.jsx)(hM,{
      accounts:a,names:d.naming.names
    }),(0,V.jsx)(uA,{
      account:a.find(e=>e.id===m)??null,now:o,busy:pe,covered:g!==null||x!==null,onClose:()=>h(null),onRun:(e,t)=>{
        e!==`delete`&&h(null),ue(e,[t])
      },onChangeProxy:S,patrol:{
        exit:m===null?void 0:ie.byAccount.get(m),every:ie.everySeconds
      }
    }),(0,V.jsx)(oj,{
      account:x,onClose:()=>S(null),onChanged:()=>void t()
    }),(0,V.jsx)(HA,{
      accounts:g,onCancel:()=>v(null),onConfirm:e=>{
        v(null),de({
          action:`delete`
        },e)
      }
    }),(0,V.jsx)(dj,{
      accounts:y,onCancel:()=>b(null),onConfirm:(e,t)=>{
        b(null),de({
          action:`set_tags`,tags:t
        },e)
      }
    }),(0,V.jsx)(UA,{
      open:C,action:fe?.command.action??null,outcomes:he,onClose:()=>w(!1)
    })]
  })
}

function zM(e){
  switch(e.status){
    case`loading`:case`switching`:return`pending`;
    case`failed`:return null;
    case`ready`:return Av(e.accounts,e.loadedAt);
    default:return yp(e)
  }
}

function BM(){
  let{
    t:e
  }
  =N(),t=Xv(e=>e.data),n=Xv(e=>e.scope),r=Xv(e=>e.load),i=Xv(e=>e.setScope),a=q(e=>e.principal?.role===`admin`),o=q(e=>e.principal?.role===`supplier`),[s,c]=(0,_.useState)(!1),l=(0,_.useMemo)(()=>zM(t),[t]),u=(0,_.useMemo)(()=>t.status===`ready`?t.accounts.reduce((e,t)=>e+t.row.usage.points,0):null,[t]);
  return $v(n,t.status!==`failed`),(0,_.useEffect)(()=>{
    r()
  },[r]),(0,V.jsxs)(`div`,{
    className:Rm.page,"aria-busy":t.status===`loading`||t.status===`switching`,children:[(0,V.jsx)(uO,{
      headline:l,scope:n,loadedAt:t.status===`ready`?t.loadedAt:null,earned:u,refreshing:t.status===`ready`&&t.refreshing,onRefresh:()=>void r(),onDeploy:o?()=>c(!0):null
    }),(t=>{
      switch(t.status){
        case`loading`:return(0,V.jsxs)(V.Fragment,{
          children:[(0,V.jsxs)(`div`,{
            className:Rm.overview,children:[(0,V.jsx)(`h2`,{className:`console-health-title`,children:e(`console_ui.health`)}),(0,V.jsx)(CD,{}),(0,V.jsx)(_O,{
              accounts:null
            })]
          }),(0,V.jsxs)(`div`,{
            className:Rm.workbench,children:[(0,V.jsx)(VO,{
              view:null,scope:a?(0,V.jsx)(Am,{
                height:40,rounded:8
              }):null
            }),(0,V.jsx)(rD,{})]
          })]
        });case`failed`:return(0,V.jsxs)(`div`,{
          className:`empty-state`,children:[(0,V.jsxs)(`div`,{
            className:`empty-content`,children:[(0,V.jsx)(`div`,{
              className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
                size:20
              })
            }),(0,V.jsxs)(`div`,{
              role:`alert`,children:[(0,V.jsx)(`div`,{
                className:`empty-title`,children:e(`pool.load_failed_title`)
              }),(0,V.jsx)(`div`,{
                className:`empty-desc`,children:e(`pool.load_failed_${t.cause}`)
              })]
            })]
          }),(0,V.jsx)(`div`,{
            className:`empty-action`,children:(0,V.jsx)(K,{
              onClick:()=>void r(),children:e(`common.retry`)
            })
          })]
        });case`switching`:case`ready`:return(0,V.jsx)(RM,{
          pool:t,reload:r,onScope:e=>void i(e)
        });default:return yp(t)
      }
    })(t),(0,V.jsx)(eD,{}),o&&(0,V.jsx)(fE,{
      open:s,onClose:()=>c(!1),onChanged:()=>void r()
    })]
  })
}

export { Xk, iA, sA, uT, bO, xO, Tk, kk, yO, Ck, wk, BM };
