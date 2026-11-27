// @ts-nocheck
// Module: auth-router — Login Hero, Session Restoration, Auth Guard & Application Router
import { _, N, Yo, Ko, mt, ht, As, js, hc, Ac } from '../lib/vendor-runtime';
import { yl, V, Bf, yp, Tp, mp, pp, fp, ap, jp, q, Al, kl, Cp, Sp, U, W, Dp, Uf, zf, Vf, Nl, Om } from './core';
import { Sg, Cg, qg, Gg, Kg, zh } from './notices';
import { _S, vS } from './overview';
import { Ww } from './hierarchy';
import { yO, BM } from './pool';
import { SN } from './settlement';
import { QP, ZP } from './usage';

var $P={
  container:`LoginPage-module__container___bHtIX`,brandPanel:`LoginPage-module__brandPanel___kKUR5`,formPanel:`LoginPage-module__formPanel___Nrtrt`,topBar:`LoginPage-module__topBar___OTDCr`,chromeFade:`LoginPage-module__chromeFade___3kYQn`,brandMark:`LoginPage-module__brandMark___zDar4`,brandName:`LoginPage-module__brandName___avlZ-`,brandLogo:`LoginPage-module__brandLogo___Kckcx`,languageSelect:`LoginPage-module__languageSelect___KUNwV`,languageDropdown:`LoginPage-module__languageDropdown___fREQW`,main:`LoginPage-module__main___b83EA`,column:`LoginPage-module__column___YhJqr`,title:`LoginPage-module__title___I-LuY`,headingRise:`LoginPage-module__headingRise___WhUYA`,exitToBase:`LoginPage-module__exitToBase___SXMA-`,exitLift:`LoginPage-module__exitLift___wGnxq`,splash:`LoginPage-module__splash___plqzy`,splashEnter:`LoginPage-module__splashEnter___K-Jk9`,splashLogo:`LoginPage-module__splashLogo___yzbbw`,splashText:`LoginPage-module__splashText___M9-19`,splashTitle:`LoginPage-module__splashTitle___G-HEP`,splashSubtitle:`LoginPage-module__splashSubtitle___BYSQi`,splashLoader:`LoginPage-module__splashLoader___SdvUl`,splashLoaderBar:`LoginPage-module__splashLoaderBar___lyVXw`,splashLoading:`LoginPage-module__splashLoading___jAaFC`
},eF={
  hero:`DotMatrixHero-module__hero___WK6dn`,canvas:`DotMatrixHero-module__canvas___zGPsM`,title:`DotMatrixHero-module__title___s0LYK`,heroTitleIn:`DotMatrixHero-module__heroTitleIn___kE86R`
},tF={
  from:`#38bdf8`,via:`#818cf8`,to:`#a78bfa`
},nF={
  dim:.42,mid:.92
},rF=nF.dim/Sg,iF=nF.mid/Cg,aF=`(max-width: 768px)`,oF=e=>{
  let t=getComputedStyle(e),n=(e,n)=>t.getPropertyValue(e).trim()||n;
  return{
    from:n(`--login-dot-from`,tF.from),via:n(`--login-dot-via`,tF.via),to:n(`--login-dot-to`,tF.to)
  }
};

function sF(e,t,n){
  let r=e.createLinearGradient(0,0,t.width,t.height);
  return r.addColorStop(0,n.from),r.addColorStop(.6,n.via),r.addColorStop(1,n.to),r
}

var cF=1e3/30,lF=4;

function uF(e,t,n,r,i){
  e.clearRect(0,0,t.width,t.height),e.fillStyle=i;
  let{
    dotSize:a
  }
  =t,o=Math.fround(Cg);
  for(let i=0;i<n.length;i+=1){
    let s=qg(n[i],t.revealAt[i],r);
    s<=0||(e.globalAlpha=Math.min(1,s*(n[i]===o?iF:rF)),e.fillRect(t.xs[i],t.ys[i],a,a))
  }
  e.globalAlpha=1
}

function dF(e,t,n,r){
  e.clearRect(0,0,t.width,t.height),e.fillStyle=r;
  let{
    dotSize:i
  }
  =t,a=[[Math.fround(Sg),nF.dim],[Math.fround(Cg),nF.mid]];
  for(let[r,o]of a){
    e.globalAlpha=o;
    for(let a=0;a<n.length;a+=1)n[a]===r&&e.fillRect(t.xs[a],t.ys[a],i,i)
  }
  e.globalAlpha=1
}

function fF(){
  let e=(0,_.useRef)(null);
  return(0,_.useEffect)(()=>{
    let t=e.current,n=t?.getContext(`2d`);if(!t||!n)return;let r=yl(),i=Gg(0,0),a=new Float32Array,o=0,s=!1,c=!0,l=null,u=-1/0,d=0,f=oF(t),p=sF(n,i,f),m=(e,t)=>{
      Kg(i,e,a),t?uF(n,i,a,e,p):dF(n,i,a,p)
    },h=typeof MutationObserver>`u`?null:new MutationObserver(()=>{
      f=oF(t),p=sF(n,i,f),r?m(lF,!1):m(d,d<i.introDuration)
    });h?.observe(document.documentElement,{
      attributes:!0,attributeFilter:[`data-theme`]
    });let g=e=>{
      o=requestAnimationFrame(g),e-u<cF||(u=e,l===null&&(l=e-d*1e3),d=(e-l)/1e3,m(d,d<i.introDuration))
    },_=()=>{
      s||r||!c||document.hidden||a.length===0||(s=!0,l=null,o=requestAnimationFrame(g))
    },v=()=>{
      s=!1,cancelAnimationFrame(o)
    },y=()=>{
      let e=t.getBoundingClientRect(),o=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(e.width*o),t.height=Math.round(e.height*o),n.setTransform(o,0,0,o,0,0);let s=typeof window.matchMedia==`function`&&window.matchMedia(aF).matches;i=Gg(e.width,e.height,{
        origin:s?`top-right`:`bottom-right`
      }),a=new Float32Array(i.columns*i.rows),p=sF(n,i,f),r?m(lF,!1):(m(d,d<i.introDuration),_())
    },b=()=>{
      document.hidden?v():_()
    };y();let x=typeof ResizeObserver>`u`?null:new ResizeObserver(y);x?.observe(t);let S=typeof IntersectionObserver>`u`?null:new IntersectionObserver(([e])=>{
      c=e?.isIntersecting??!0,c?_():v()
    });return S?.observe(t),document.addEventListener(`visibilitychange`,b),()=>{
      v(),x?.disconnect(),S?.disconnect(),h?.disconnect(),document.removeEventListener(`visibilitychange`,b)
    }
  },[]),(0,V.jsxs)(`div`,{
    className:eF.hero,children:[(0,V.jsx)(`canvas`,{
      ref:e,className:eF.canvas,"aria-hidden":`true`
    }),(0,V.jsxs)(`p`,{
      className:eF.title,lang:`en`,children:[`Welcome to `,(0,V.jsx)(Bf,{}),`.`]
    })]
  })
}

var pF={
  form:`LoginForm-module__form___fwEoO`,fieldRise:`LoginForm-module__fieldRise___6EmSJ`,fieldFade:`LoginForm-module__fieldFade___3e-wn`,field:`LoginForm-module__field___bKH6m`,labelRow:`LoginForm-module__labelRow___YdRwl`,label:`LoginForm-module__label___9rTxo`,textButton:`LoginForm-module__textButton___2U4rx`,input:`LoginForm-module__input___jwVfU`,readout:`LoginForm-module__readout___EYJum`,readoutText:`LoginForm-module__readoutText___M4QTt`,mono:`LoginForm-module__mono___rC6Xg`,inputWrap:`LoginForm-module__inputWrap___YBO6m`,inputWithAction:`LoginForm-module__inputWithAction___GWy1L`,iconButton:`LoginForm-module__iconButton___bIK9t`,actions:`LoginForm-module__actions___JH1wK`,submit:`LoginForm-module__submit___4rmX4`,submitContent:`LoginForm-module__submitContent___N1zst`,submitContentIn:`LoginForm-module__submitContentIn___FSVz8`,successIcon:`LoginForm-module__successIcon___aaW76`,checkDraw:`LoginForm-module__checkDraw___dbZZI`,error:`LoginForm-module__error___HAGql`,errorIn:`LoginForm-module__errorIn___Bk3FX`
};

function mF(e,t){
  switch(e.kind){
    case`credentials`:return t(`login.error.credentials`);
    case`role`:return t(`login.error.role`);
    case`rate-limited`:return t(`login.error.rate_limited`,{
      minutes:e.minutes
    });
    case`malformed`:return t(`login.error.malformed`);
    case`unavailable`:return t(`login.error.unavailable`);
    default:return yp(e)
  }
}

function hF(e,t){
  switch(e.kind){
    case`field`:return t(`login.error.${e.field}_${e.problem}`);
    case`failure`:return mF(e.failure,t);
    default:return yp(e)
  }
}

function gF({
  values:e,showPassword:t,loading:n,success:r,notice:i,onChange:a,onShowPasswordChange:o,onSubmit:s
}){
  let{
    t:c
  }
  =N(),l=(0,_.useId)(),u=(0,_.useId)(),d=(0,_.useId)(),f=(0,_.useRef)(null),p=(0,_.useRef)(null),m=n||r,h=i===null?null:Tp(i),g=e=>h===e?d:void 0;
  (0,_.useEffect)(()=>{
    window.matchMedia(`(pointer: fine)`).matches&&f.current?.focus()
  },[]),(0,_.useEffect)(()=>{
    if(i===null)return;let e=Tp(i);if(e===null)return;let t={
      email:f,password:p
    }
    [e].current;t?.focus(),t?.select()
  },[i]);
  let v=e=>{
    e.preventDefault(),m||s()
  },y=c(t?`login.hide_password`:`login.show_password`);
  return(0,V.jsxs)(`form`,{
    className:pF.form,onSubmit:v,noValidate:!0,children:[(0,V.jsxs)(`div`,{
      className:pF.field,"data-stagger":!0,children:[(0,V.jsx)(`label`,{
        className:pF.label,htmlFor:l,children:c(`login.email_label`)
      }),(0,V.jsx)(`input`,{
        ref:f,id:l,className:pF.input,type:`email`,name:`email`,inputMode:`email`,autoComplete:`username`,autoCapitalize:`none`,spellCheck:!1,placeholder:c(`login.email_placeholder`),readOnly:m,value:e.email,"aria-invalid":h===`email`||void 0,"aria-describedby":g(`email`),onChange:e=>a({
          email:e.target.value
        })
      })]
    }),(0,V.jsxs)(`div`,{
      className:pF.field,"data-stagger":!0,children:[(0,V.jsx)(`label`,{
        className:pF.label,htmlFor:u,children:c(`login.password_label`)
      }),(0,V.jsxs)(`div`,{
        className:pF.inputWrap,children:[(0,V.jsx)(`input`,{
          ref:p,id:u,className:`${pF.input} ${pF.inputWithAction}`,type:t?`text`:`password`,name:`password`,autoComplete:`current-password`,spellCheck:!1,readOnly:m,value:e.password,"aria-invalid":h===`password`||void 0,"aria-describedby":g(`password`),onChange:e=>a({
            password:e.target.value
          })
        }),(0,V.jsx)(`button`,{
          type:`button`,className:pF.iconButton,onClick:()=>o(!t),"aria-label":y,"aria-pressed":t,title:y,children:t?(0,V.jsx)(mp,{
            size:16
          }):(0,V.jsx)(pp,{
            size:16
          })
        })]
      })]
    }),(0,V.jsxs)(`div`,{
      className:pF.actions,"data-stagger":!0,children:[(0,V.jsx)(`button`,{
        type:`submit`,className:pF.submit,disabled:m,"aria-busy":n,"data-state":r?`success`:n?`loading`:void 0,children:r?(0,V.jsxs)(`output`,{
          className:pF.submitContent,children:[(0,V.jsx)(fp,{
            size:16,className:pF.successIcon
          }),(0,V.jsx)(`span`,{
            children:c(`login.signed_in`)
          })]
        },`success`):(0,V.jsxs)(`span`,{
          className:pF.submitContent,children:[n&&(0,V.jsx)(`span`,{
            className:`loading-spinner`,"aria-hidden":`true`
          }),(0,V.jsx)(`span`,{
            children:c(n?`login.submitting`:`login.submit_button`)
          })]
        },`idle`)
      }),i!==null&&(0,V.jsxs)(`p`,{
        id:d,className:pF.error,role:`alert`,children:[(0,V.jsx)(ap,{
          size:14,"aria-hidden":`true`
        }),(0,V.jsx)(`span`,{
          children:hF(i,c)
        })]
      })]
    })]
  })
}

var _F={
  email:``,password:``
},vF={
  kind:`failure`,failure:{
    kind:`unavailable`
  }
},yF=132;

function bF(){
  let{
    t:e
  }
  =N(),t=Yo(),n=Ko(),r=jp(e=>e.language),i=jp(e=>e.setLanguage),a=q(e=>e.principal!==null),o=q(e=>e.login),s=q(e=>e.restoreSession),c=Al(e=>e.startReveal),[l,u]=(0,_.useState)(_F),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(`idle`),[h,g]=(0,_.useState)(()=>q.getState().hasRestorableSession()),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(null),S=(0,_.useRef)([]),C=(0,_.useRef)(!1),w=QP(n.state);
  (0,_.useEffect)(()=>()=>{
    for(let e of S.current)window.clearTimeout(e)
  },[]);
  let T=(0,_.useCallback)((e,n)=>{
    let r=kl(yl()),i=(e,t)=>{
      S.current.push(window.setTimeout(e,t))
    };i(()=>m(`exiting`),n),i(()=>{
      c(),t(e,{
        replace:!0
      })
    },n+r.exit)
  },[t,c]);
  (0,_.useEffect)(()=>{
    if(C.current)return;C.current=!0;let e=performance.now();(async()=>{
      try{
        if(await s()){
          y(!0);let{
            splashMin:t
          }
          =kl(yl()),n=performance.now()-e;T(w,Math.max(0,t-n))
        }
      }finally{
        g(!1)
      }
    })()
  },[T,w,s]);
  let E=(0,_.useMemo)(()=>mt.map(t=>({
    value:t,label:e(ht[t])
  })),[e]),D=(0,_.useCallback)(e=>{
    u(t=>({
      ...t,...e
    }))
  },[]),O=(0,_.useCallback)(async()=>{
    if(p!==`idle`)return;let e=Cp(Sp(l));if(e!==null)x(e);else{
      m(`connecting`),x(null);try{
        await o(l)
      }catch(e){
        if(m(`idle`),e instanceof U||e instanceof W){
          x({
            kind:`failure`,failure:Dp(e)
          });return
        }
        throw x(vF),e
      }
      m(`success`),T(w,kl(yl()).successHold)
    }
  },[T,o,p,w,l]);
  if(a&&!h&&!v&&p===`idle`)return(0,V.jsx)(As,{
    to:w,replace:!0
  });
  let k=h||v;
  return(0,V.jsxs)(`div`,{
    className:$P.container,"data-phase":p===`exiting`?`exiting`:void 0,children:[(0,V.jsx)(`div`,{
      className:$P.brandPanel,children:(0,V.jsx)(fF,{})
    }),(0,V.jsxs)(`div`,{
      className:$P.formPanel,children:[!k&&(0,V.jsxs)(`header`,{
        className:$P.topBar,children:[(0,V.jsx)(`div`,{
          className:$P.brandMark,children:(0,V.jsx)(Uf,{})
        }),(0,V.jsx)(yO,{
          className:$P.languageSelect,dropdownClassName:$P.languageDropdown,dropdownMinWidth:yF,value:r,options:E,onChange:i,fullWidth:!1,size:`sm`,ariaLabel:e(`language.switch`)
        })]
      }),(0,V.jsx)(`main`,{
        className:$P.main,children:k?(0,V.jsxs)(`output`,{
          className:$P.splash,children:[(0,V.jsx)(zf,{
            size:56
          }),(0,V.jsxs)(`div`,{
            className:$P.splashText,children:[(0,V.jsx)(`h1`,{
              className:$P.splashTitle,children:(0,V.jsx)(Bf,{})
            }),(0,V.jsx)(`p`,{
              className:$P.splashSubtitle,children:(0,V.jsx)(Vf,{
                tone:`quiet`
              })
            })]
          }),(0,V.jsx)(`div`,{
            className:$P.splashLoader,"aria-hidden":`true`,children:(0,V.jsx)(`div`,{
              className:$P.splashLoaderBar
            })
          })]
        }):(0,V.jsxs)(`div`,{
          className:$P.column,children:[(0,V.jsx)(`h1`,{
            className:$P.title,children:(0,V.jsx)(Vf,{})
          }),(0,V.jsx)(gF,{
            values:l,showPassword:d,loading:p===`connecting`,success:p===`success`||p===`exiting`,notice:b,onChange:D,onShowPasswordChange:f,onSubmit:()=>void O()
          })]
        })
      })]
    })]
  })
}

function xF({
  children:e
}){
  let t=Ko();
  if(!q(e=>e.principal!==null)){
    let e={
      from:{
        pathname:t.pathname,search:t.search
      }
    };
    return(0,V.jsx)(As,{
      to:`/login`,replace:!0,state:e
    })
  }
  return e
}

function SF(){
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(js,{}),(0,V.jsx)(Nl,{})]
  })
}

var CF=hc([{
  element:(0,V.jsx)(SF,{}),children:[{
    path:`/login`,element:(0,V.jsx)(bF,{})
  },{
    element:(0,V.jsx)(xF,{
      children:(0,V.jsx)(Om,{})
    }),children:[{
      path:`/pool`,element:(0,V.jsx)(BM,{})
    },{
      path:`/hierarchy`,element:(0,V.jsx)(Ww,{})
    },{
      path:`/settlement`,element:(0,V.jsx)(SN,{})
    },{
      path:`/notices`,element:(0,V.jsx)(zh,{})
    },{
      path:`/usage`,element:(0,V.jsx)(ZP,{})
    },..._S,{
      path:`*`,element:(0,V.jsx)(vS,{})
    }]
  }]
}]);

function wF(){
  let e=jp(e=>e.language);
  return(0,_.useEffect)(()=>{
    document.documentElement.lang=e
  },[e]),(0,V.jsx)(Ac,{
    router:CF
  })
}

export { wF };
