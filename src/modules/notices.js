// @ts-nocheck
// Module: notices — Notices Marquee Composer, Live Preview & Broadcast Management
import { N, _, kc, bt, As } from '../lib/vendor-runtime';
import { zm, Zm, V, Bm, fm, mm, dp, K, th, Xm, Jm, Hm, Um, Km, qm, Up, U, W, uu, $m, yp, Fd, Im, Rm, J, Lm, rp, ap, Am, eh, q, El, tu, Nf, yl } from './core';

var Y={
  reach:`Notices-module__reach___KUpVu`,body:`Notices-module__body___TK72g`,columns:`Notices-module__columns___5GpA0`,composer:`Notices-module__composer___v4mVV`,heading:`Notices-module__heading___63RfP`,field:`Notices-module__field___1Bk4l`,labelRow:`Notices-module__labelRow___OmFoi`,label:`Notices-module__label___Vejt3`,choices:`Notices-module__choices___hSWCG`,count:`Notices-module__count___Ipse3`,words:`Notices-module__words___zWmRM`,chips:`Notices-module__chips___iitau`,chip:`Notices-module__chip___Daqjg`,own:`Notices-module__own___O9YU8`,ownCount:`Notices-module__ownCount___fg7Ep`,at:`Notices-module__at___yxMrn`,preview:`Notices-module__preview___rCpJW`,previewEmpty:`Notices-module__previewEmpty___wwYfb`,echo:`Notices-module__echo___70Mqv`,problem:`Notices-module__problem___5f-0S`,submit:`Notices-module__submit___R8TPg`,lists:`Notices-module__lists___PAmk8`,section:`Notices-module__section___9O8xH`,sectionTitle:`Notices-module__sectionTitle___jV8Am`,empty:`Notices-module__empty___FMCK2`,rows:`Notices-module__rows___aPf3i`,row:`Notices-module__row___i1zAK`,rowText:`Notices-module__rowText___AQsKB`,rowMeta:`Notices-module__rowMeta___qkxlE`,clock:`Notices-module__clock___CvQyv`,act:`Notices-module__act___828oc`,confirm:`Notices-module__confirm___IdmE-`,quote:`Notices-module__quote___8CH3v`,facts:`Notices-module__facts___1pTCV`,explain:`Notices-module__explain___DtmAB`
},nh=[...zm,`custom`];

function rh({
  typed:e,problems:t,disabled:n,onChange:r
}){
  let{
    t:i
  }
  =N(),a=(0,_.useId)(),o=e=>{
    if(e===`custom`)return i(`notices.length_custom`);
    let{
      count:t,unit:n
    }
    =Zm(e);
    return i(`notices.length_${n}`,{
      count:t
    })
  };
  return(0,V.jsxs)(`fieldset`,{
    className:Y.choices,disabled:n,children:[(0,V.jsx)(`legend`,{
      children:i(`notices.length_label`)
    }),(0,V.jsx)(`div`,{
      className:Y.chips,"data-many":!0,children:nh.map(t=>(0,V.jsxs)(`label`,{
        className:Y.chip,children:[(0,V.jsx)(`input`,{
          type:`radio`,name:`${a}-length`,checked:e.length===t,onChange:()=>r({
            length:t
          })
        }),(0,V.jsx)(`span`,{
          children:o(t)
        })]
      },t))
    }),e.length===`custom`&&(0,V.jsxs)(`div`,{
      className:Y.own,children:[(0,V.jsx)(`input`,{
        className:`input ${Y.ownCount}`,inputMode:`numeric`,autoComplete:`off`,placeholder:`90`,value:e.count,onChange:e=>r({
          count:e.target.value
        }),"aria-label":i(`notices.own_count`),"aria-invalid":t.length!==null,"aria-describedby":t.length===null?void 0:`${a}-problem`
      }),(0,V.jsx)(`div`,{
        className:Y.chips,role:`radiogroup`,"aria-label":i(`notices.own_unit`),children:Bm.map(t=>(0,V.jsxs)(`label`,{
          className:Y.chip,children:[(0,V.jsx)(`input`,{
            type:`radio`,name:`${a}-unit`,checked:e.unit===t,onChange:()=>r({
              unit:t
            })
          }),(0,V.jsx)(`span`,{
            children:i(`notices.unit_${t}`)
          })]
        },t))
      })]
    }),t.length!==null&&(0,V.jsx)(`p`,{
      className:Y.problem,id:`${a}-problem`,children:i(`notices.problem_range`)
    })]
  })
}

function ih({
  text:e
}){
  let{
    t
  }
  =N();
  return e===``?(0,V.jsx)(`p`,{
    className:Y.previewEmpty,children:t(`notices.preview_empty`)
  }):(0,V.jsx)(`div`,{
    className:`${fm.line} ${Y.preview}`,"aria-hidden":`true`,children:(0,V.jsx)(mm,{
      notices:[{
        id:`preview`,text:e
      }]
    })
  })
}

var ah=`modal-open`,oh=0,sh={
  scrollY:0,contentScrollTop:0,contentEl:null,bodyPosition:``,bodyTop:``,bodyLeft:``,bodyRight:``,bodyWidth:``,bodyOverflow:``,htmlOverflow:``
},ch=()=>{
  if(typeof document>`u`)return null;
  let e=document.querySelector(`.content`);
  return e instanceof HTMLElement?e:null
};

function lh(){
  if(typeof document<`u`){
    if(oh===0){
      let e=document.body,t=document.documentElement,n=ch();
      sh.scrollY=window.scrollY||window.pageYOffset||t.scrollTop||0,sh.contentEl=n,sh.contentScrollTop=n?.scrollTop??0,sh.bodyPosition=e.style.position,sh.bodyTop=e.style.top,sh.bodyLeft=e.style.left,sh.bodyRight=e.style.right,sh.bodyWidth=e.style.width,sh.bodyOverflow=e.style.overflow,sh.htmlOverflow=t.style.overflow,e.classList.add(ah),t.classList.add(ah),e.style.position=`fixed`,e.style.top=`-${sh.scrollY}px`,e.style.left=`0`,e.style.right=`0`,e.style.width=`100%`,e.style.overflow=`hidden`,t.style.overflow=`hidden`
    }
    oh+=1
  }
}

function uh(){
  if(typeof document<`u`&&(oh=Math.max(0,oh-1),oh===0)){
    let e=document.body,t=document.documentElement,n=sh.scrollY,r=sh.contentScrollTop,i=sh.contentEl;
    e.classList.remove(ah),t.classList.remove(ah),e.style.position=sh.bodyPosition,e.style.top=sh.bodyTop,e.style.left=sh.bodyLeft,e.style.right=sh.bodyRight,e.style.width=sh.bodyWidth,e.style.overflow=sh.bodyOverflow,t.style.overflow=sh.htmlOverflow,i&&i.scrollTo({
      top:r,left:0,behavior:`auto`
    }),window.scrollTo({
      top:n,left:0,behavior:`auto`
    }),sh.scrollY=0,sh.contentScrollTop=0,sh.contentEl=null
  }
}

var dh=`a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])`,fh=350;

function ph({
  open:e,title:t,onClose:n,footer:r,width:i=520,className:a,closeDisabled:o=!1,backdrop:s,beforeClose:c,plain:l=!1,labelledBy:u,children:d
}){
  let{
    t:f
  }
  =N(),p=(0,_.useId)(),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useCallback)(()=>b.current?Array.from(b.current.querySelectorAll(dh)).filter(e=>!e.hasAttribute(`disabled`)&&e.tabIndex!==-1):[],[]),w=(0,_.useRef)(n);
  (0,_.useEffect)(()=>{
    w.current=n
  },[n]);
  let T=(0,_.useCallback)(e=>{
    y.current===null&&(v(!0),y.current=window.setTimeout(()=>{
      h(!1),v(!1),y.current=null,e&&w.current()
    },fh))
  },[]);
  (0,_.useEffect)(()=>{
    let t=!1;return e?(y.current!==null&&(window.clearTimeout(y.current),y.current=null),queueMicrotask(()=>{
      t||(h(!0),v(!1))
    })):m&&queueMicrotask(()=>{
      t||T(!1)
    }),()=>{
      t=!0
    }
  },[e,m,T]);
  let E=(0,_.useCallback)(()=>{
    c?c().then(()=>T(!0)):T(!0)
  },[c,T]);
  (0,_.useEffect)(()=>()=>{
    y.current!==null&&window.clearTimeout(y.current)
  },[]);
  let D=e||m;
  if((0,_.useEffect)(()=>{
    if(D)return lh(),()=>uh()
  },[D]),(0,_.useEffect)(()=>{
    if(!e)return;S.current=document.activeElement instanceof HTMLElement?document.activeElement:null;let t=window.setTimeout(()=>{
      (b.current?.querySelector(`[data-autofocus]`)??C()[0]??x.current??b.current)?.focus()
    },0);return()=>{
      window.clearTimeout(t)
    }
  },[C,e]),(0,_.useEffect)(()=>{
    e||m||(S.current?.focus(),S.current=null)
  },[m,e]),(0,_.useEffect)(()=>{
    if(!e)return;let t=e=>{
      if(e.key===`Escape`){
        if(o)return;e.preventDefault(),E();return
      }
      if(e.key!==`Tab`)return;let t=C();if(t.length===0){
        e.preventDefault(),b.current?.focus();return
      }
      let n=t[0],r=t[t.length-1],i=document.activeElement;e.shiftKey?(i===n||i===b.current)&&(e.preventDefault(),r.focus()):i===r&&(e.preventDefault(),n.focus())
    };return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)
  },[o,C,E,e]),!e&&!m)return null;
  let O=`modal-overlay ${g?`modal-overlay-closing`:`modal-overlay-entering`}`,k=`modal ${g?`modal-closing`:`modal-entering`}${a?` ${a}`:``}`,A=(0,V.jsxs)(`div`,{
    className:O,children:[s,(0,V.jsxs)(`div`,{
      ref:b,className:k,style:{
        width:i,maxWidth:`100%`
      },role:`dialog`,"aria-modal":`true`,"aria-labelledby":t?p:u,tabIndex:-1,children:[!l&&(0,V.jsx)(`button`,{
        ref:x,type:`button`,className:`modal-close-floating`,onClick:o?void 0:E,"aria-label":f(`common.close`),disabled:o,children:(0,V.jsx)(dp,{
          size:20
        })
      }),!l&&(0,V.jsx)(`div`,{
        className:`modal-header`,children:(0,V.jsx)(`div`,{
          className:`modal-title`,id:t?p:void 0,children:t
        })
      }),(0,V.jsx)(`div`,{
        className:`modal-body`,children:d
      }),r&&(0,V.jsx)(`div`,{
        className:`modal-footer`,children:r
      })]
    })]
  });
  return typeof document>`u`?A:(0,kc.createPortal)(A,document.body)
}

function mh(e){
  let[t,n]=(0,_.useState)(e);
  return e!==null&&e!==t&&n(e),e??t
}

function hh({
  plan:e,now:t,sending:n,onClose:r,onConfirm:i
}){
  let{
    t:a,i18n:o
  }
  =N(),s=mh(e),c=s?.draft.from===null,l=()=>{
    n||r()
  },u=s===null?null:Zm(s.draft.minutes);
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:l,title:a(`notices.confirm_title`),width:460,closeDisabled:n,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:l,disabled:n,"data-autofocus":!0,children:a(`common.cancel`)
      }),(0,V.jsx)(K,{
        onClick:i,disabled:n,"aria-busy":n,children:a(n?`notices.sending`:`notices.confirm_submit`)
      })]
    }),children:s!==null&&u!==null&&(0,V.jsxs)(`div`,{
      className:Y.confirm,children:[(0,V.jsx)(`blockquote`,{
        className:Y.quote,children:s.draft.text
      }),(0,V.jsxs)(`dl`,{
        className:Y.facts,children:[(0,V.jsxs)(`div`,{
          children:[(0,V.jsx)(`dt`,{
            children:a(`notices.fact_from`)
          }),(0,V.jsx)(`dd`,{
            children:c?a(`notices.fact_now`):th(s.from,t,o.language)
          })]
        }),(0,V.jsxs)(`div`,{
          children:[(0,V.jsx)(`dt`,{
            children:a(`notices.fact_until`)
          }),(0,V.jsx)(`dd`,{
            children:th(s.until,t,o.language)
          })]
        }),(0,V.jsxs)(`div`,{
          children:[(0,V.jsx)(`dt`,{
            children:a(`notices.fact_length`)
          }),(0,V.jsx)(`dd`,{
            children:a(`notices.length_${u.unit}`,{
              count:u.count
            })
          })]
        })]
      }),(0,V.jsx)(`p`,{
        className:Y.explain,children:a(c?`notices.confirm_reach`:`notices.confirm_reach_later`)
      })]
    })
  })
}

var gh=[`now`,`later`];

function _h({
  typed:e,problems:t,now:n,disabled:r,onChange:i
}){
  let{
    t:a
  }
  =N(),o=(0,_.useId)(),s=t=>i(t===`later`&&e.at===``?{
    timing:t,at:Xm(n)
  }
  :{
    timing:t
  });
  return(0,V.jsxs)(`fieldset`,{
    className:Y.choices,disabled:r,children:[(0,V.jsx)(`legend`,{
      children:a(`notices.timing_label`)
    }),(0,V.jsx)(`div`,{
      className:Y.chips,children:gh.map(t=>(0,V.jsxs)(`label`,{
        className:Y.chip,children:[(0,V.jsx)(`input`,{
          type:`radio`,name:`${o}-timing`,checked:e.timing===t,onChange:()=>s(t)
        }),(0,V.jsx)(`span`,{
          children:a(`notices.timing_${t}`)
        })]
      },t))
    }),e.timing===`later`&&(0,V.jsx)(`input`,{
      type:`datetime-local`,className:`input ${Y.at}`,value:e.at,min:Jm(n),onChange:e=>i({
        at:e.target.value
      }),"aria-label":a(`notices.at_label`),"aria-invalid":t.at!==null,"aria-describedby":t.at===null?void 0:`${o}-problem`
    }),t.at!==null&&(0,V.jsx)(`p`,{
      className:Y.problem,id:`${o}-problem`,children:a(`notices.problem_${t.at}`)
    })]
  })
}

var vh=new Set([`too_many`,`not_allowed`]);

function yh({
  now:e,startingWith:t,onPosted:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=(0,_.useId)(),o=(0,_.useRef)(null),[s,c]=(0,_.useState)({
    ...Hm,text:t
  }),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=Um(s),y=Km(s,e),b=qm(s,e),x=e=>{
    c(t=>({
      ...t,...e
    })),g(null),m(null)
  };
  (0,_.useEffect)(()=>{
    t!==``&&o.current?.focus()
  },[t]);
  let S=async()=>{
    if(y!==null){
      f(!0);
      try{
        await Up.post(y.draft),c(e=>({
          ...e,text:``,timing:`now`,at:``
        })),g(s.timing),n()
      }catch(e){
        if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
        let t=e instanceof U?e.code:``,n=vh.has(t)?t:`other`;
        m(r(`notices.refused_${n}`,{
          max:8
        }))
      }finally{
        f(!1),u(!1)
      }
    }
  },C=t=>th(t,e,i.language);
  return(0,V.jsxs)(`section`,{
    className:Y.composer,"aria-labelledby":`${a}-heading`,children:[(0,V.jsx)(`h2`,{
      className:Y.heading,id:`${a}-heading`,children:r(`notices.write_heading`)
    }),(0,V.jsxs)(`div`,{
      className:Y.field,children:[(0,V.jsxs)(`div`,{
        className:Y.labelRow,children:[(0,V.jsx)(`label`,{
          className:Y.label,htmlFor:`${a}-words`,children:r(`notices.text_label`)
        }),(0,V.jsxs)(`span`,{
          className:Y.count,"data-over":b.text!==null||void 0,children:[v.length,` / `,200]
        })]
      }),(0,V.jsx)(`textarea`,{
        id:`${a}-words`,ref:o,className:`input ${Y.words}`,rows:3,value:s.text,placeholder:r(`notices.text_placeholder`),onChange:e=>x({
          text:e.target.value
        }),onKeyDown:e=>{
          e.key===`Enter`&&e.preventDefault()
        },disabled:d,"aria-invalid":b.text!==null,"aria-describedby":b.text===null?void 0:`${a}-words-problem`
      }),b.text!==null&&(0,V.jsx)(`p`,{
        className:Y.problem,id:`${a}-words-problem`,children:r(`notices.problem_long`,{
          max:200
        })
      })]
    }),(0,V.jsx)(rh,{
      typed:s,problems:b,disabled:d,onChange:x
    }),(0,V.jsx)(_h,{
      typed:s,problems:b,now:e,disabled:d,onChange:x
    }),(0,V.jsxs)(`div`,{
      className:Y.field,children:[(0,V.jsx)(`span`,{
        className:Y.label,children:r(`notices.preview_label`)
      }),(0,V.jsx)(ih,{
        text:v
      })]
    }),(0,V.jsxs)(`output`,{
      className:Y.echo,"aria-live":`polite`,"data-done":y===null&&h!==null||void 0,children:[y!==null&&(y.draft.from===null?r(`notices.echo_now`,{
        until:C(y.until)
      }):r(`notices.echo_later`,{
        from:C(y.from),until:C(y.until)
      })),y===null&&h!==null&&r(`notices.posted_${h}`)]
    }),p!==null&&(0,V.jsx)(`p`,{
      className:Y.problem,role:`alert`,children:p
    }),(0,V.jsx)(K,{
      className:Y.submit,fullWidth:!0,disabled:y===null||d,onClick:()=>u(!0),"aria-haspopup":`dialog`,children:r(`notices.submit_${s.timing}`)
    }),(0,V.jsx)(hh,{
      plan:l?y:null,now:e,sending:d,onClose:()=>u(!1),onConfirm:()=>void S()
    })]
  })
}

var bh=6e4,xh=60*bh,Sh=24*xh,Ch=8*xh,wh=e=>Math.floor((e+Ch)/Sh)*Sh-Ch,Th=e=>{
  let t=e.lastIndexOf(`@`);
  return t>0?e.slice(0,t):e
},Eh=(e,t)=>new Intl.NumberFormat(t).format(e),Dh=(e,t)=>typeof e==`number`?Eh(Math.round(e),t):`–`,Oh=e=>typeof e==`number`?`${Math.round(e*100)}%`:`–`;

function kh(e,t,n){
  if(typeof e!=`string`)return`–`;
  let r=Math.max(0,t-Date.parse(e)),[i,a]=r>=Sh?[r/Sh,`day`]:r>=xh?[r/xh,`hour`]:[r/bh,`minute`];
  return new Intl.NumberFormat(n,{
    style:`unit`,unit:a,unitDisplay:`short`,maximumFractionDigits:0
  }).format(Math.floor(i))
}

function Ah(e,t){
  if(typeof e!=`string`)return null;
  let n=Date.parse(e)-t;
  if(!(n>0))return null;
  let r=Math.ceil(n/bh);
  return{
    days:Math.floor(r/1440),hours:Math.floor(r/60)%24,minutes:r%60
  }
}

var jh=e=>String(e).padStart(2,`0`),Mh=e=>e.days>0?`${e.days}d:${jh(e.hours)}h`:`${e.hours}h:${jh(e.minutes)}m`;

function Nh(e,t){
  return typeof e==`string`?new Intl.DateTimeFormat(t,{
    dateStyle:`medium`,timeStyle:`short`
  }).format(new Date(e)):`–`
}

function Ph({
  sections:e,now:t,onWithdraw:n,onAgain:r
}){
  let{
    t:i,i18n:a
  }
  =N(),o=e=>th(e,t,a.language),s=({
    from:e,until:t
  })=>{
    let{
      count:n,unit:r
    }
    =Zm(Math.round((t-e)/6e4));
    return i(`notices.length_${r}`,{
      count:n
    })
  },c=(e,n)=>{
    switch(e){
      case`showing`:return(0,V.jsxs)(V.Fragment,{
        children:[(0,V.jsx)(`span`,{
          children:i(`notices.showing_until`,{
            until:o(n.until)
          })
        }),(0,V.jsxs)(`span`,{
          children:[i(`notices.showing_left`),` `,(0,V.jsx)(`span`,{
            className:Y.clock,children:uu(n.until,t)
          })]
        })]
      });
      case`waiting`:return(0,V.jsxs)(V.Fragment,{
        children:[(0,V.jsx)(`span`,{
          children:i(`notices.waiting_from`,{
            from:o(n.from)
          })
        }),(0,V.jsx)(`span`,{
          children:i(`notices.waiting_length`,{
            length:s(n)
          })
        })]
      });
      case`past`:return n.withdrawnAt===null?(0,V.jsx)(`span`,{
        children:i(`notices.past_ran`,{
          from:o(n.from),until:o(n.until)
        })
      }):(0,V.jsx)(`span`,{
        children:i(`notices.past_withdrawn`,{
          at:o($m(n))
        })
      });
      default:return yp(e)
    }
  },l=(t,a)=>{
    let s=e[t];
    return s.length===0&&a===null?null:(0,V.jsxs)(`section`,{
      className:Y.section,"data-notices":t,children:[(0,V.jsxs)(`h2`,{
        className:Y.sectionTitle,children:[i(`notices.${t}_heading`),(0,V.jsx)(`span`,{
          children:s.length
        })]
      }),s.length===0?(0,V.jsx)(`p`,{
        className:Y.empty,children:a
      }):(0,V.jsx)(`ul`,{
        className:Y.rows,children:s.map(e=>(0,V.jsxs)(`li`,{
          className:Y.row,"data-kind":t,children:[(0,V.jsx)(`p`,{
            className:Y.rowText,children:e.text
          }),(0,V.jsxs)(`p`,{
            className:Y.rowMeta,children:[c(t,e),(0,V.jsx)(`span`,{
              children:i(`notices.by`,{
                name:Th(e.postedBy),at:o(e.postedAt)
              })
            })]
          }),(0,V.jsx)(`button`,{
            type:`button`,className:Y.act,"data-tone":t===`past`?`plain`:`danger`,onClick:()=>t===`past`?r(e):n(e),"aria-haspopup":t===`past`?void 0:`dialog`,children:i(`notices.${t}_action`)
          })]
        },e.id))
      })]
    })
  };
  return(0,V.jsxs)(V.Fragment,{
    children:[l(`showing`,i(`notices.showing_empty`)),l(`waiting`,i(`notices.waiting_empty`)),l(`past`,null)]
  })
}

function Fh({
  notice:e,now:t,onClose:n,onWithdrawn:r
}){
  let{
    t:i
  }
  =N(),a=mh(e),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),u=a!==null&&Fd(a,t)===`waiting`,d=()=>{
    o||(l(!1),n())
  },f=async()=>{
    if(a!==null){
      s(!0),l(!1);
      try{
        await Up.withdraw(a.id),r()
      }catch(e){
        if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
        e instanceof U&&e.code===`already_over`?r():l(!0)
      }finally{
        s(!1)
      }
    }
  },p=u?`cancel`:`withdraw`;
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:d,title:i(`notices.${p}_title`),width:460,closeDisabled:o,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:d,disabled:o,children:i(`notices.keep`)
      }),(0,V.jsx)(K,{
        variant:`danger`,onClick:()=>void f(),disabled:o,"aria-busy":o,children:i(o?`notices.withdrawing`:`notices.${p}_submit`)
      })]
    }),children:a!==null&&(0,V.jsxs)(`div`,{
      className:Y.confirm,children:[(0,V.jsx)(`blockquote`,{
        className:Y.quote,children:a.text
      }),(0,V.jsx)(`p`,{
        className:Y.explain,children:i(`notices.${p}_explain`)
      }),c&&(0,V.jsx)(`p`,{
        className:Y.problem,role:`alert`,children:i(`notices.withdraw_failed`)
      })]
    })
  })
}

function Ih(){
  let[e,t]=(0,_.useState)({
    status:`loading`
  }),n=(0,_.useCallback)(async()=>{
    t(e=>e.status===`ready`?{
      ...e,isRefreshing:!0
    }
    :e);try{
      let{
        notices:e,watching:n
      }
      =await Up.posted();t({
        status:`ready`,notices:e,watching:n,isRefreshing:!1
      })
    }catch(e){
      if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;t(e=>e.status===`ready`?{
        ...e,isRefreshing:!1
      }
      :{
        status:`failed`
      })
    }
  },[]);
  return(0,_.useEffect)(()=>{
    n()
  },[n]),{
    state:e,reload:n
  }
}

var Lh=[`a`,`b`,`c`];

function Rh(){
  let{
    t:e
  }
  =N(),{
    state:t,reload:n
  }
  =Ih(),r=Im(),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)({
    text:``,turn:0
  }),c=t.status===`ready`&&t.isRefreshing;
  return(0,V.jsxs)(`div`,{
    className:Rm.page,"aria-busy":t.status===`loading`,children:[(0,V.jsxs)(`header`,{
      className:J.header,children:[(0,V.jsxs)(`div`,{
        className:J.top,children:[(0,V.jsx)(`h1`,{
          className:J.title,"data-detect-ignore":`gradient-text`,children:e(`notices.title`)
        }),(0,V.jsx)(`div`,{
          className:J.actions,children:(0,V.jsxs)(`button`,{
            type:`button`,className:`${Lm.ghostAction} ${J.refresh}`,onClick:()=>void n(),disabled:c||t.status===`loading`,"aria-busy":c,"aria-label":e(`pool.refresh`),children:[(0,V.jsx)(rp,{
              size:14,className:c?Lm.spinning:void 0
            }),(0,V.jsx)(`span`,{
              children:e(`pool.refresh`)
            })]
          })
        })]
      }),(0,V.jsx)(`p`,{
        className:Y.reach,children:t.status===`ready`&&e(`notices.watching`,{
          count:t.watching
        })
      })]
    }),(0,V.jsx)(`div`,{
      className:Y.body,children:(0,V.jsxs)(`div`,{
        className:Y.columns,children:[(0,V.jsx)(yh,{
          now:r,startingWith:o.text,onPosted:()=>void n()
        },o.turn),(0,V.jsxs)(`div`,{
          className:Y.lists,children:[t.status===`failed`&&(0,V.jsxs)(`div`,{
            className:`empty-state`,children:[(0,V.jsxs)(`div`,{
              className:`empty-content`,children:[(0,V.jsx)(`div`,{
                className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
                  size:20
                })
              }),(0,V.jsx)(`div`,{
                role:`alert`,children:(0,V.jsx)(`div`,{
                  className:`empty-title`,children:e(`notices.load_failed`)
                })
              })]
            }),(0,V.jsx)(`div`,{
              className:`empty-action`,children:(0,V.jsx)(K,{
                onClick:()=>void n(),children:e(`common.retry`)
              })
            })]
          }),t.status===`loading`&&Lh.map(e=>(0,V.jsx)(Am,{
            height:68,rounded:12
          },e)),t.status===`ready`&&(0,V.jsx)(Ph,{
            sections:eh(t.notices,r),now:r,onWithdraw:a,onAgain:({
              text:e
            })=>s(({
              turn:t
            })=>({
              text:e,turn:t+1
            }))
          })]
        })]
      })
    }),(0,V.jsx)(Fh,{
      notice:i,now:r,onClose:()=>a(null),onWithdrawn:()=>{
        a(null),n()
      }
    })]
  })
}

function zh(){
  return q(e=>e.principal)?.role===`admin`?(0,V.jsx)(Rh,{}):(0,V.jsx)(As,{
    to:`/pool`,replace:!0
  })
}

var Bh={
  viewerId:null,hosted:null,hasFailed:!1
},Vh=El(()=>Bh);

q.subscribe((e,t)=>{
  e.principal!==t.principal&&Vh.setState(Bh)
});

var Hh=()=>{
  let{
    principal:e
  }
  =q.getState();
  return e!==null&&(e.role===`admin`||e.role===`observer`)?e.id:null
};

async function Uh(){
  let e=Hh();
  if(e===null)return tu;
  try{
    let t=await Nf.hosted();
    return Hh()===e&&Vh.setState({
      viewerId:e,hosted:t,hasFailed:!1
    }),t
  }catch(t){
    if(!(t instanceof U||t instanceof W||t instanceof bt))throw t;
    let n=Vh.getState(),r=t instanceof U&&t.status===401;
    if(!r&&n.viewerId===e&&n.hosted!==null)return n.hosted;
    throw!r&&Hh()===e&&Vh.setState({
      viewerId:e,hosted:null,hasFailed:!0
    }),t
  }
}

var Wh=null;

function Gh(){
  let e=Hh();
  if(e===null)return Promise.resolve();
  if(Wh?.viewerId===e)return Wh.reading;
  let t=Uh().catch(e=>{
    if(e instanceof U&&e.status===401)q.getState().expire();else if(!(e instanceof U||e instanceof W||e instanceof bt))throw e
  }).finally(()=>{
    Wh?.reading===t&&(Wh=null)
  });
  return Wh={
    viewerId:e,reading:t
  },t
}

function Kh(){
  let e=q(({
    principal:e
  })=>e!==null&&(e.role===`admin`||e.role===`observer`)?e.id:null),t=Vh(),n=e!==null&&t.viewerId===e;
  return(0,_.useEffect)(()=>{
    if(e===null)return;let t=Vh.getState();(t.viewerId!==e||t.hosted===null&&!t.hasFailed)&&Gh()
  },[e]),e===null?tu:n&&t.hosted!==null?t.hosted:n&&t.hasFailed?null:`pending`
}

function qh(){
  let e=Kh();
  return e===`pending`||e===null?tu:e
}

var Jh=`platform`,Yh=e=>e.filter(e=>e.value>0).toSorted((e,t)=>t.value-e.value||e.name.localeCompare(t.name)).slice(0,5);

function Xh(e,t){
  let n=new Map;
  for(let r of e){
    let e=t(r);
    if(e===null)continue;
    let i=r.row.owner?.id??null,a=n.get(i);
    a===void 0?n.set(i,[e]):a.push(e)
  }
  return n
}

var Zh=(e,t,n)=>({
  id:e??Jh,...t(e),...n
});

function Qh(e){
  let t=Date.parse(e.row.createdAt??``);
  return Number.isNaN(t)?null:t
}

function $h(e,t,n){
  let r=wh(t.now);
  return Yh([...Xh(e,e=>{
    if(t.span===`total`)return e;let n=Qh(e);return n!==null&&n>=r?e:null
  })].map(([e,t])=>Zh(e,n,{
    aside:null,value:t.length
  })))
}

function eg(e,t,n){
  return Yh([...e.byPartner].flatMap(([e,{
    own:r
  }])=>{
    let i=t===`today`?r.today:r.total;return i===null?[]:[Zh(e,n,{
      aside:null,value:i
    })]
  }))
}

function tg(e,t){
  let n=Qh(e);
  return!e.row.healthy||n===null?null:Math.max(0,t-n)
}

function ng(e,t,n){
  return Yh(e.flatMap(e=>{
    let r=tg(e,t);if(r===null)return[];let i=n(e.row.owner?.id??null).name,{
      name:a
    }
    =e.row,o={
      kind:`owner`,name:i
    };return[{
      id:e.id,name:Th(a),hint:a,aside:o,value:r
    }]
  }))
}

function rg(e,t,n){
  return Yh([...Xh(e,e=>tg(e,t))].flatMap(([e,t])=>{
    if(t.length<3)return[];let r=t.reduce((e,t)=>e+t,0)/t.length;return[Zh(e,n,{
      aside:{
        kind:`sample`,count:t.length
      },value:r
    })]
  }))
}

var ig=1024**3,ag=1024*ig;

function og(e,t){
  let[n,r]=e>=ag?[e/ag,`TB`]:[e/ig,`GB`],i=n>=100?0:1;
  return`${new Intl.NumberFormat(t,{minimumFractionDigits:i,maximumFractionDigits:i}).format(n)} ${r}`
}

var sg=(e,t)=>new Intl.NumberFormat(t,{
  minimumFractionDigits:2,maximumFractionDigits:2
}).format(e),cg=(e,t)=>new Intl.DateTimeFormat(t,{
  hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!1
}).format(new Date(e)),lg=864e5;

function ug(e,t){
  let n=(e,n)=>new Intl.NumberFormat(t,{
    style:`unit`,unit:n,unitDisplay:`narrow`,maximumFractionDigits:0
  }).format(e),r=Math.floor(Math.max(0,e)/6e4),i=Math.floor(r/60);
  return e>=lg?`${n(Math.floor(i/24),`day`)} ${n(i%24,`hour`)}`:`${n(i,`hour`)} ${n(r%60,`minute`)}`
}

var dg=1e3/12,fg=new Set,pg=0,mg=0,hg=!1;

function gg(e){
  if(pg=requestAnimationFrame(gg),!(e-mg<dg)){
    mg=e;
    for(let t of fg)t(e/1e3)
  }
}

function _g(){
  let e=fg.size>0&&!document.hidden;
  e&&pg===0&&(pg=requestAnimationFrame(gg)),!e&&pg!==0&&(cancelAnimationFrame(pg),pg=0)
}

function vg(e){
  return hg||=(document.addEventListener(`visibilitychange`,_g),!0),fg.add(e),_g(),()=>{
    fg.delete(e),_g()
  }
}

var yg=2e3;

function bg(e){
  let{
    rows:t,pitch:n,dot:r,columns:i,paint:a,isAnimated:o,label:s,className:c
  }
  =e,l=(0,_.useRef)(null),u=(0,_.useRef)(null),d=(0,_.useRef)(a),f=(0,_.useRef)(null),[p,m]=(0,_.useState)(0),h=i??p,g=t*n-(n-r);
  return(0,_.useEffect)(()=>{
    let e=l.current;if(i!==void 0||!e)return;let t=new ResizeObserver(([e])=>{
      e&&m(Math.max(0,Math.floor((e.contentRect.width+n-r)/n)))
    });return t.observe(e),()=>t.disconnect()
  },[i,n,r]),(0,_.useEffect)(()=>{
    d.current=a,f.current?.()
  },[a]),(0,_.useEffect)(()=>{
    let e=u.current,i=e?.getContext(`2d`);if(!e||!i||h===0)return;let a=h*n-(n-r),s=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(a*s),e.height=Math.round(g*s),e.style.width=`${a}px`,e.style.height=`${g}px`,i.setTransform(s,0,0,s,0,0);let c={
      columns:h,rows:t,pitch:n,dot:r
    },l=o&&!yl(),p=e=>{
      i.clearRect(0,0,a,g),d.current({
        context:i,grid:c,width:a,height:g,seconds:e,isStill:!l
      }),i.globalAlpha=1
    },m=()=>p(performance.now()/1e3);f.current=m,m();let _=()=>{
      f.current=null
    };if(!o)return _;if(!l){
      let e=setInterval(()=>{
        document.hidden||m()
      },yg);return()=>{
        clearInterval(e),_()
      }
    }
    let v=!0,y=new IntersectionObserver(([e])=>{
      v=e?.isIntersecting??!0
    });y.observe(e);let b=vg(e=>{
      v&&p(e)
    });return()=>{
      b(),y.disconnect(),_()
    }
  },[h,t,n,r,g,o]),(0,V.jsx)(`span`,{
    ref:l,className:c,style:{
      display:`block`,height:g,lineHeight:0
    },...s===void 0?{
      "aria-hidden":!0
    }
    :{
      role:`img`,"aria-label":s
    },children:(0,V.jsx)(`canvas`,{
      ref:u,width:0,height:0,style:{
        display:`block`
      }
    })
  })
}

var xg=.62,Sg=.22,Cg=.47,wg=.72,Tg=.1,Eg=.05,Dg=.33,Og=.45,kg=2839,Ag=2.2,jg=.38,Mg=.9,Ng=.82,Pg=.035,Fg=.8,Ig=.28,Lg=1.2,Rg=(e,t,n)=>Math.min(n,Math.max(t,e)),zg=e=>1-(1-e)**3,Bg=(e,t,n)=>{
  let r=Rg((n-e)/(t-e),0,1);
  return r*r*(3-2*r)
},Vg=(e,t,n)=>{
  let r=Math.imul(e,668265261)^Math.imul(t,374761393)^Math.imul(n,2654435761);
  return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),r^=r>>>16,(r>>>0)/4294967296
},Hg=(e,t,n)=>{
  let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=Vg(r,i,n),u=Vg(r+1,i,n),d=Vg(r,i+1,n),f=Vg(r+1,i+1,n),p=l+(u-l)*s;
  return p+(d+(f-d)*s-p)*c
},Ug=(e,t,n,r)=>{
  let i=e-2*n,a=Hg(i/11,t/11,r)*.62+Hg(i/5,t/5,r+1)*.38,o=Hg(i/7+n*.6,t/7-n*.8,r+2);
  return Rg((a*.62+o*.38-.5)*Ag+.5,0,1)
};

function Wg(e){
  return Rg(Math.round(e/84),9,14)
}

function Gg(e,t,n={}){
  let r=n.seed??kg,i=n.origin??`bottom-right`,a=e>0&&t>0,o=n.pitch??Wg(t),s=Math.max(2,Math.round(o*xg)),c=a?Math.floor(e/o)+1:0,l=a?Math.floor(t/o)+1:0,u=c*l,d={
    width:e,height:t,pitch:o,dotSize:s,columns:c,rows:l,xs:new Float32Array(u),ys:new Float32Array(u),cols:new Int32Array(u),rowsIndex:new Int32Array(u),revealAt:new Float32Array(u),period:new Float32Array(u),phase:new Float32Array(u),introDuration:0
  };
  if(!a)return d;
  let f=Math.hypot(e,t),p=(o-s)/2,m=0;
  for(let n=0;n<l;n+=1)for(let a=0;a<c;a+=1){
    let s=e-(a+1)*o+p,c=t-(n+1)*o+p;
    d.xs[m]=s,d.ys[m]=c,d.cols[m]=a,d.rowsIndex[m]=n;
    let l=i===`top-right`?0:t,u=wg*Rg(Math.hypot(e-s,l-c)/f,0,1)+Tg*Vg(a,n,r+13);
    d.revealAt[m]=u,d.period[m]=Lg+2*Vg(a,n,r+17),d.phase[m]=Vg(a,n,r+19),d.introDuration=Math.max(d.introDuration,u+Eg+Dg),m+=1
  }
  return d
}

function Kg(e,t,n,r=kg){
  let i=e.columns*e.rows;
  for(let a=0;a<i;a+=1){
    let i=e.cols[a],o=e.rowsIndex[a],s=Math.floor(t/e.period[a]+e.phase[a]),c=Vg(i*131+s,o,r+23),l=Ug(i,o,t,r);
    if(c>=Pg+Ng*Bg(jg,Mg,l)){
      n[a]=0;
      continue
    }
    let u=Vg(i*131+s,o,r+29);
    n[a]=l>Fg&&u<Ig?Cg:Sg
  }
}

function qg(e,t,n){
  let r=n-t;
  if(r<=0||e<=0)return 0;
  let i=Math.min(1,e+Og);
  if(r<.05)return r/Eg*i;
  let a=(r-Eg)/Dg;
  return a>=1?e:i+(e-i)*zg(a)
}

var Jg=null;

function Yg(){
  if(Jg!==null)return Jg;
  let e=getComputedStyle(document.documentElement),t=t=>e.getPropertyValue(t).trim();
  return Jg={
    aero:t(`--aero`),indigo:t(`--aero-indigo`),limited:t(`--state-limited`),fault:t(`--state-fault`),idle:t(`--state-disabled`),quiet:t(`--text-quaternary`)
  },Jg
}

function Xg(e,t,n){
  let{
    aero:r,indigo:i,limited:a,fault:o,idle:s
  }
  =Yg();
  switch(t){
    case`brand`:{
      let t=e.createLinearGradient(0,0,n.width,n.height);
      return t.addColorStop(0,r),t.addColorStop(1,i),t
    }
    case`warn`:return a;
    case`bad`:return o;
    case`idle`:return s;
    default:return yp(t)
  }
}

var Zg=.42,Qg=.62,$g=.38;

function e_(e,t,n){
  let r=1.2+2*Vg(e,t,17),i=Math.floor(n/r+Vg(e,t,19));
  return Vg(e*131+i,t,23)<.5
}

var t_=5,n_=3,r_=.55,i_={
  slow:2.4,fast:1.2
},a_=.35,o_=.002;

function s_(e){
  let{
    share:t,tone:n,rows:r,strength:i=.9,pulse:a,className:o
  }
  =e,s=(0,_.useRef)(null),c=(0,_.useCallback)(e=>{
    let{
      context:r,grid:o,seconds:c,isStill:l
    }
    =e,u=t===null?0:Math.min(1,Math.max(0,t)),d=s.current??u,f=l?u:d+(u-d)*a_,p=Math.abs(u-f)<o_?u:f;s.current=p;let m=p===0?0:Math.max(1,Math.round(p*o.columns)),h=a===void 0||l?1:r_+.44999999999999996*(.5+.5*Math.sin(2*Math.PI*c/i_[a])),g=Xg(r,n,e),{
      quiet:_
    }
    =Yg();for(let e=0;e<o.columns;e+=1){
      let t=e<m;r.fillStyle=t?g:_,r.globalAlpha=t?e===m-1?h:i:$g;for(let t=0;t<o.rows;t+=1)r.fillRect(e*t_,t*t_,n_,n_)
    }
  },[t,n,i,a]);
  return(0,V.jsx)(bg,{
    className:o,rows:r,pitch:t_,dot:n_,paint:c,isAnimated:a!==void 0
  })
}

export { ug, Dh, Eh, s_, Th, Oh, Uh, Yg, bg, Xg, $g, e_, Qg, Zg, Nh, cg, og, sg, wh, eg, $h, ng, rg, Kh, Ug, Vg, vg, mh, ph, qh, Ah, Mh, kh, dh, lh, uh, Gh, Sg, Cg, qg, Gg, Kg, zh };
