// @ts-nocheck
// Module: usage — Usage & Billing Logs, Host/VM Trace Resolution & Pricing Breakdown
import { N, _, zStr as z, B, $n, Zn, er, Yn, Qn, bt, As } from '../lib/vendor-runtime';
import { V, sp, K, lp, cp, Hf, Il, H, Ul, Vl, G, U, W, hd, J, Am, ap, Rm, Lm, rp, q } from './core';
import { Eh } from './notices';
import { Ub, Tb, My, OS } from './overview';
import { bO, xO, Tk, kk, yO, Ck, iA, sA, Xk, wk } from './pool';

var $={
  title:`Usage-module__title___iO0gH`,inexact:`Usage-module__inexact___zCLeC`,standing:`Usage-module__standing___1Y81H`,body:`Usage-module__body___7WgRd`,filters:`Usage-module__filters___1Vbs-`,switches:`Usage-module__switches___aEufy`,switch:`Usage-module__switch___k7k15`,days:`Usage-module__days___x2CFd`,day:`Usage-module__day___SPI9a`,invalid:`Usage-module__invalid___EKOGk`,lookup:`Usage-module__lookup___5wsu3`,modelField:`Usage-module__modelField___Etsb7`,more:`Usage-module__more___0nK7y`,moreOpen:`Usage-module__moreOpen___fAe-7`,go:`Usage-module__go___XdLBp`,exact:`Usage-module__exact___7igZP`,ledger:`Usage-module__ledger___EecXU`,head:`Usage-module__head___Tjme-`,row:`Usage-module__row___-M3il`,rows:`Usage-module__rows___AeLui`,model:`Usage-module__model___qBLtV`,time:`Usage-module__time___HtTl1`,clock:`Usage-module__clock___QHZhu`,date:`Usage-module__date___rP7Pc`,label:`Usage-module__label___wEE58`,what:`Usage-module__what___bWBsQ`,named:`Usage-module__named___Civ53`,mark:`Usage-module__mark___Jrk1f`,markFault:`Usage-module__markFault___2qHdr`,under:`Usage-module__under___h3YCO`,underWords:`Usage-module__underWords___lr08H`,underFault:`Usage-module__underFault___unN-E`,place:`Usage-module__place___arKWn`,status:`Usage-module__status___3ANOG`,code:`Usage-module__code___ufgt-`,pair:`Usage-module__pair___5qyYx`,second:`Usage-module__second___uy97m`,tag:`Usage-module__tag___Qn3LD`,points:`Usage-module__points___YOZBZ`,into:`Usage-module__into___whUEY`,stale:`Usage-module__stale___tbruP`,sheetState:`Usage-module__sheetState___mCzwy`,sheetFoot:`Usage-module__sheetFoot___VN7ss`,subTitle:`Usage-module__subTitle___LW7-3`,message:`Usage-module__message___F-MFI`,bill:`Usage-module__bill___vfZf1`,sum:`Usage-module__sum___jIsLg`,cost:`Usage-module__cost___H--mJ`
},CN=36e5,wN=24*CN,TN=`+08:00`,EN=8*CN,DN=[`all`,`hour`,`today`,`day`,`week`,`days`],ON=[`all`,`success`,`error`],kN=[`all`,`stream`,`whole`],AN={
  outcome:`all`,delivery:`all`,stretch:`all`,fromDay:``,toDay:``,model:``,apiKeyId:``,clientRequestId:``,traceId:``
},jN=/^\d{4}-\d{2}-\d{2}$/,MN=/^\d{1,20}$/;

function NN(e,t){
  if(!jN.test(e))return null;
  let n=Date.parse(`${e}T${t===`start`?`00:00:00.000`:`23:59:59.999`}${TN}`);
  return Number.isNaN(n)?null:n
}

var PN=e=>new Date(e+EN).toISOString().slice(0,10);

function FN(e,t){
  switch(e.stretch){
    case`all`:return null;
    case`hour`:return t-CN;
    case`today`:return NN(PN(t),`start`);
    case`day`:return t-wN;
    case`week`:return t-7*wN;
    case`days`:return NN(e.fromDay,`start`);
    default:return e.stretch
  }
}

var IN=e=>e.trim()===``?null:e.trim();

function LN(e,t){
  let n=FN(e,t),r=e.stretch===`days`?NN(e.toDay,`end`):null,i=IN(e.apiKeyId);
  return{
    status:e.outcome===`all`?null:e.outcome,isStream:e.delivery===`all`?null:e.delivery===`stream`,model:IN(e.model),from:n===null?null:new Date(n).toISOString(),until:new Date(Math.min(t,r??t)).toISOString(),apiKeyId:i!==null&&MN.test(i)?i:null,clientRequestId:IN(e.clientRequestId),traceId:IN(e.traceId)
  }
}

var RN=e=>e.trim()===``||MN.test(e.trim());

function zN(e,t){
  let[n,r]=[NN(e,`start`),NN(t,`end`)];
  return e!==``&&n===null||t!==``&&r===null?!1:n===null||r===null||n<=r
}

function BN(e){
  let t=[e.model,e.apiKeyId,e.clientRequestId,e.traceId];
  return Number(e.outcome!==`all`)+Number(e.delivery!==`all`)+Number(e.stretch!==`all`)+t.filter(e=>e.trim()!==``).length
}

function VN({
  name:e,options:t,chosen:n,labelOf:r,onChoose:i
}){
  return(0,V.jsxs)(`fieldset`,{
    className:`${bO.segmented} ${xO.segmentedFit} ${$.switch}`,children:[(0,V.jsx)(`legend`,{
      className:`visually-hidden`,children:e
    }),t.map(e=>(0,V.jsx)(`button`,{
      type:`button`,className:`${bO.segment} ${n===e?`${bO.segmentActive} ${xO.segmentOn}`:``}`,"aria-pressed":n===e,onClick:()=>i(e),children:r(e)
    },e))]
  })
}

function HN({
  sought:e,onSeek:t
}){
  let{
    t:n
  }
  =N(),[r,i]=(0,_.useState)(e),[a,o]=(0,_.useState)([e.apiKeyId,e.clientRequestId,e.traceId].some(e=>e!==``)),s=r.stretch!==`days`||zN(r.fromDay,r.toDay),c=s&&RN(r.apiKeyId),l=e=>{
    i(e),(e.stretch!==`days`||zN(e.fromDay,e.toDay))&&RN(e.apiKeyId)&&t(e)
  },u=e=>{
    e.preventDefault(),c&&t(r)
  },d=e=>({
    value:r[e],onChange:t=>i({
      ...r,[e]:t.target.value
    }),autoComplete:`off`,spellCheck:!1
  });
  return(0,V.jsxs)(`form`,{
    className:$.filters,onSubmit:u,"data-usage-filters":!0,children:[(0,V.jsxs)(`div`,{
      className:$.switches,children:[(0,V.jsx)(VN,{
        name:n(`usage.outcome_label`),options:ON,chosen:r.outcome,labelOf:e=>n(`usage.outcome_${e}`),onChoose:e=>l({
          ...r,outcome:e
        })
      }),(0,V.jsx)(VN,{
        name:n(`usage.delivery_label`),options:kN,chosen:r.delivery,labelOf:e=>n(`usage.delivery_${e}`),onChoose:e=>l({
          ...r,delivery:e
        })
      }),(0,V.jsx)(VN,{
        name:n(`usage.stretch_label`),options:DN,chosen:r.stretch,labelOf:e=>n(`usage.stretch_${e}`),onChoose:e=>l({
          ...r,stretch:e
        })
      })]
    }),r.stretch===`days`&&(0,V.jsxs)(`div`,{
      className:$.days,children:[(0,V.jsxs)(`label`,{
        className:$.day,children:[(0,V.jsx)(`span`,{
          children:n(`usage.from_day`)
        }),(0,V.jsx)(`input`,{
          type:`date`,className:`input`,value:r.fromDay,max:r.toDay===``?void 0:r.toDay,"aria-invalid":!s,onChange:e=>l({
            ...r,fromDay:e.target.value
          })
        })]
      }),(0,V.jsxs)(`label`,{
        className:$.day,children:[(0,V.jsx)(`span`,{
          children:n(`usage.to_day`)
        }),(0,V.jsx)(`input`,{
          type:`date`,className:`input`,value:r.toDay,min:r.fromDay===``?void 0:r.fromDay,"aria-invalid":!s,onChange:e=>l({
            ...r,toDay:e.target.value
          })
        })]
      }),!s&&(0,V.jsx)(`p`,{
        className:$.invalid,role:`alert`,children:n(`usage.days_invalid`)
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.lookup,children:[(0,V.jsx)(`div`,{
        className:$.modelField,children:(0,V.jsx)(Ub,{
          ...d(`model`),"aria-label":n(`usage.model`),placeholder:n(`usage.model_placeholder`),enterKeyHint:`search`
        })
      }),(0,V.jsxs)(`button`,{
        type:`button`,className:$.more,"aria-expanded":a,"aria-controls":`usage-exact`,onClick:()=>o(!a),children:[n(`usage.more`),(0,V.jsx)(sp,{
          size:14,className:a?$.moreOpen:void 0
        })]
      }),(0,V.jsxs)(`div`,{
        className:$.go,children:[(0,V.jsx)(K,{
          type:`submit`,size:`sm`,disabled:!c,children:n(`usage.seek`)
        }),BN(r)>0&&(0,V.jsx)(K,{
          type:`button`,size:`sm`,variant:`secondary`,onClick:()=>l(AN),children:n(`usage.reset`)
        })]
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.exact,id:`usage-exact`,hidden:!a,children:[(0,V.jsx)(Ub,{
        ...d(`apiKeyId`),label:n(`usage.api_key_id`),placeholder:n(`usage.api_key_placeholder`),inputMode:`numeric`,...RN(r.apiKeyId)?{}:{
          error:n(`usage.api_key_invalid`)
        }
      }),(0,V.jsx)(Ub,{
        ...d(`clientRequestId`),label:n(`usage.client_request_id`),placeholder:n(`usage.client_request_placeholder`)
      }),(0,V.jsx)(Ub,{
        ...d(`traceId`),label:n(`usage.trace_id`),placeholder:n(`usage.trace_placeholder`)
      })]
    })]
  })
}

var UN=(e,t)=>{
  if(t===null)return null;
  let n=Date.parse(t)-Date.parse(e);
  return Number.isFinite(n)&&n>=0?n:null
},WN=e=>({
  totalMs:UN(e.startedAt,e.finishedAt),firstOutputMs:UN(e.startedAt,e.firstOutputAt)
});

function GN(e){
  if(e===null)return`–`;
  if(e<1e3)return`${Math.round(e)}ms`;
  let t=e/1e3;
  return`${t.toFixed(t<100?2:1)}s`
}

var KN=1e-6;

function qN(e){
  return e===0?`0`:e<KN?`<${KN.toFixed(6)}`:e<1?e.toFixed(6):e.toFixed(4)
}

var JN=(e,t)=>new Intl.NumberFormat(t,{
  minimumFractionDigits:4,maximumFractionDigits:4
}).format(e),YN=/^(\d+)(?:\.(\d+))?$/;

function XN(e){
  let t=YN.exec(e.trim());
  if(t===null)return null;
  let n=(t[2]??``).padEnd(3,`0`),r=`${t[1]}${n.slice(0,3)}`.replace(/^0+(?=\d)/,``),i=n.slice(3).replace(/0+$/,``);
  return i===``?r:`${r}.${i}`
}

var ZN=({
  tokens:e
})=>e.cacheCreation5m!==null&&e.cacheCreation1h!==null&&e.cacheCreation1h>0;

function QN(e,t){
  let{
    tokens:n
  }
  =e,r=n.cacheCreation5m!==null&&n.cacheCreation1h!==null;
  return[[`input`,n.input,t.inputPer1k],[`output`,n.output,t.outputPer1k],r&&ZN(e)?[`cache_write_5m`,n.cacheCreation5m??0,t.cacheCreatePer1k]:[`cache_write`,r?n.cacheCreation5m??0:n.cacheCreation,t.cacheCreatePer1k],[`cache_write_1h`,r?n.cacheCreation1h??0:0,t.cache1hPer1k],[`cache_read`,n.cacheRead,t.cacheReadPer1k]].flatMap(([e,t,n])=>{
    let r=n===null?null:XN(n);return t<=0||n===null||r===null?[]:[{
      part:e,tokens:t,price:r,cost:t*Number(n)/1e3
    }]
  })
}

var $N=e=>e.reduce((e,t)=>e+t.cost,0);

function eP(e,t){
  let n=e===null?NaN:Date.parse(e);
  if(Number.isNaN(n))return null;
  let r=new Intl.DateTimeFormat(t,{
    month:`2-digit`,day:`2-digit`
  }),i=new Intl.DateTimeFormat(t,{
    hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:`h23`
  });
  return{
    day:r.format(n),time:i.format(n)
  }
}

function tP(e,t){
  let n=e===null?NaN:Date.parse(e);
  return Number.isNaN(n)?`–`:new Intl.DateTimeFormat(t,{
    year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,fractionalSecondDigits:3,hourCycle:`h23`
  }).format(n)
}

function nP(e){
  let t=t=>e.reduce((e,n)=>e+t(n),0),n=e.filter(e=>e.status===`success`).length;
  return{
    succeeded:n,failed:e.length-n,input:t(e=>e.tokens.input),output:t(e=>e.tokens.output),cacheWrite:t(e=>e.tokens.cacheCreation),cacheRead:t(e=>e.tokens.cacheRead),points:t(e=>e.charge?.amount??0)
  }
}

var rP=10765,iP=/^[a-z][a-z0-9+.-]*:\/\/\[?([^\]/:]+)\]?:(\d{1,5})(?:\/|$)/i;

function aP(e){
  let t=e===null?null:iP.exec(e.trim());
  if(t?.[1]===void 0||t[2]===void 0)return null;
  let n=Number(t[2])-rP;
  return n>=0&&Number(t[2])<=65535?{
    host:t[1],vm:n
  }
  :null
}

var oP=(e,t)=>t?.find(t=>t.address===e)??null;

function sP(e,t,n){
  if(t===void 0)return{
    kind:`asking`
  };
  if(t!==`unsaid`)return t.account===null?{
    kind:`nobody`
  }
  :{
    kind:`account`,...t.account
  };
  if(e.servedBy===null||n===`unread`)return{
    kind:`unknown`
  };
  if(n===void 0||n===`asking`)return{
    kind:`asking`
  };
  if(n===`gone`)return{
    kind:`account`,id:e.servedBy,name:null,baseUrl:null,isGone:!0
  };
  let{
    id:r,name:i,baseUrl:a
  }
  =n;
  return{
    kind:`account`,id:r,name:i,baseUrl:a,isGone:!1
  }
}

var cP=[`time`,`model`,`status`,`took`,`tokens`,`cache`,`points`];

function lP(e,t,n){
  if(e.kind===`unknown`)return null;
  if(e.kind===`asking`)return{
    words:n(`usage.served_asking`),place:null,isGone:!1
  };
  if(e.kind===`nobody`)return{
    words:n(`usage.served_nobody`),place:null,isGone:!1
  };
  let r=aP(e.baseUrl);
  return{
    words:e.name??n(`usage.served_gone_unnamed`),place:r===null?null:n(`usage.place`,{
      machine:oP(r.host,t)?.label??r.host,vm:r.vm
    }),isGone:e.isGone&&e.name!==null
  }
}

function uP({
  record:e,serving:t,onOpen:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=e=>Eh(e,i.language),o=eP(e.finishedAt??e.startedAt,i.language),s=WN(e),c=e.status===`success`,l=lP(t.origins.get(e.id)??{
    kind:`unknown`
  },t.fleet,r),u=e.failure?.message??null;
  return(0,V.jsxs)(`li`,{
    className:$.row,"data-usage-row":!0,"data-outcome":c?`success`:`error`,children:[(0,V.jsxs)(`div`,{
      className:$.time,children:[(0,V.jsx)(`span`,{
        className:$.label,children:r(`usage.col_time`)
      }),(0,V.jsx)(`span`,{
        className:$.clock,children:o?.time??`–`
      }),(0,V.jsx)(`span`,{
        className:$.date,children:o?.day??``
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.what,children:[(0,V.jsxs)(`span`,{
        className:$.named,children:[(0,V.jsx)(`button`,{
          type:`button`,className:$.model,onClick:()=>n(e),"aria-label":r(`usage.open`,{
            time:o?.time??``,model:e.model
          }),children:e.model
        }),e.isStream&&(0,V.jsx)(`span`,{
          className:$.mark,children:r(`usage.stream`)
        }),e.refusal!==null&&(0,V.jsx)(`span`,{
          className:`${$.mark} ${$.markFault}`,children:r(`usage.refused`)
        })]
      }),l!==null&&(0,V.jsxs)(`span`,{
        className:$.under,title:l.place===null?l.words:`${l.words} · ${l.place}`,"data-usage-served":!0,children:[(0,V.jsx)(`span`,{
          className:$.underWords,children:l.words
        }),l.place!==null&&(0,V.jsx)(`span`,{
          className:$.place,children:l.place
        }),l.isGone&&(0,V.jsx)(`span`,{
          className:$.mark,children:r(`usage.gone`)
        })]
      }),u!==null&&(0,V.jsx)(`span`,{
        className:`${$.under} ${$.underFault}`,title:u,children:(0,V.jsx)(`span`,{
          className:$.underWords,children:u
        })
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.status,children:[(0,V.jsx)(`span`,{
        className:$.label,children:r(`usage.col_status`)
      }),(0,V.jsx)(Tb,{
        state:c?`enabled`:`fault`
      }),(0,V.jsx)(`span`,{
        children:c?r(`usage.status_success`):e.status===`error`?r(`usage.status_error`):e.status
      }),!c&&e.upstreamStatus!==null&&(0,V.jsx)(`span`,{
        className:$.code,children:e.upstreamStatus
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.pair,children:[(0,V.jsx)(`span`,{
        className:$.label,children:r(`usage.col_took`)
      }),(0,V.jsx)(`span`,{
        children:GN(s.totalMs)
      }),(0,V.jsxs)(`span`,{
        className:$.second,children:[r(`usage.took_first`),` `,GN(s.firstOutputMs)]
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.pair,children:[(0,V.jsx)(`span`,{
        className:$.label,children:r(`usage.col_tokens`)
      }),(0,V.jsxs)(`span`,{
        children:[(0,V.jsx)(`span`,{
          className:$.tag,children:r(`usage.tokens_in`)
        }),` `,a(e.tokens.input)]
      }),(0,V.jsxs)(`span`,{
        className:$.second,children:[(0,V.jsx)(`span`,{
          className:$.tag,children:r(`usage.tokens_out`)
        }),` `,a(e.tokens.output)]
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.pair,children:[(0,V.jsx)(`span`,{
        className:$.label,children:r(`usage.col_cache`)
      }),(0,V.jsxs)(`span`,{
        children:[(0,V.jsx)(`span`,{
          className:$.tag,children:r(`usage.cache_write`)
        }),` `,a(e.tokens.cacheCreation)]
      }),(0,V.jsxs)(`span`,{
        className:$.second,children:[(0,V.jsx)(`span`,{
          className:$.tag,children:r(`usage.cache_read`)
        }),` `,a(e.tokens.cacheRead)]
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.points,children:[(0,V.jsx)(`span`,{
        className:$.label,children:r(`usage.col_points`)
      }),(0,V.jsx)(`span`,{
        children:e.charge===null?`–`:`−${qN(e.charge.amount)}`
      })]
    }),(0,V.jsx)(`div`,{
      className:$.into,"aria-hidden":`true`,children:(0,V.jsx)(lp,{
        size:16
      })
    })]
  })
}

function dP({
  rows:e,serving:t,isReading:n,onOpen:r
}){
  let{
    t:i
  }
  =N();
  return(0,V.jsxs)(`div`,{
    className:$.ledger,"aria-busy":n,"data-usage-list":!0,children:[(0,V.jsxs)(`div`,{
      className:$.head,"aria-hidden":`true`,children:[cP.map(e=>(0,V.jsx)(`span`,{
        "data-column":e,children:i(`usage.col_${e}`)
      },e)),(0,V.jsx)(`span`,{})]
    }),(0,V.jsx)(`ol`,{
      className:$.rows,"aria-label":i(`usage.list_label`),children:e.map(e=>(0,V.jsx)(uP,{
        record:e,serving:t,onOpen:r
      },e.id))
    })]
  })
}

var fP=e=>{
  let t=e.normalize(`NFKC`).trim();
  return/^\d{1,7}$/.test(t)&&Number(t)>=1?Number(t):null
};

function pP({
  page:e,size:t,held:n,tally:r,isReading:i,onTurn:a,onResize:o
}){
  let{
    t:s,i18n:c
  }
  =N(),[l,u]=(0,_.useState)(null),d=e=>Eh(e,c.language),f=Tk(r.count,t),p=r.kind===`exact`?e>=f:n<t,m=(e-1)*t+1,h=()=>{
    let t=l===null?null:fP(l);
    if(u(null),t===null)return;
    let n=r.kind===`exact`?Math.min(t,f):t;
    n!==e&&a(n)
  },g=(t,n)=>(0,V.jsx)(`button`,{
    type:`button`,className:kk.step,onClick:()=>a(t===`prev`?e-1:e+1),disabled:n||i,"aria-label":s(`pool.pager_${t}`),title:s(`pool.pager_${t}`),"data-pager-step":t,children:t===`prev`?(0,V.jsx)(cp,{
      size:16
    }):(0,V.jsx)(lp,{
      size:16
    })
  });
  return(0,V.jsxs)(`nav`,{
    className:kk.foot,"aria-label":s(`usage.pager_label`),"data-usage-pager":!0,children:[(0,V.jsx)(`p`,{
      className:kk.range,"aria-live":`polite`,"data-pager-range":!0,children:n===0?s(`usage.pager_range_none`):s(`usage.pager_range_${r.kind}`,{
        from:d(m),to:d(m+n-1),total:d(r.count)
      })
    }),(0,V.jsx)(yO,{
      className:kk.size,value:String(t),options:Ck.map(e=>({
        value:String(e),label:s(`usage.pager_size`,{
          size:e
        })
      })),onChange:e=>{
        let n=Ck.find(t=>String(t)===e);n!==void 0&&n!==t&&o(n)
      },ariaLabel:s(`usage.pager_size_label`),fullWidth:!1
    }),(e>1||!p)&&(0,V.jsxs)(`div`,{
      className:kk.turn,children:[g(`prev`,e<=1),(0,V.jsxs)(`label`,{
        className:kk.jump,children:[(0,V.jsx)(`span`,{
          children:s(`usage.pager_jump_before`)
        }),(0,V.jsx)(`input`,{
          className:kk.jumpInput,type:`text`,inputMode:`numeric`,enterKeyHint:`go`,autoComplete:`off`,"aria-label":s(`usage.pager_jump`),value:l??String(e),onChange:e=>u(e.target.value),onFocus:e=>e.target.select(),onBlur:h,onKeyDown:e=>{
            e.key===`Enter`&&h(),e.key===`Escape`&&u(null)
          },"data-pager-jump":!0
        }),(0,V.jsxs)(`span`,{
          "data-pager-pages":!0,children:[r.kind===`exact`&&s(`usage.pager_jump_after_exact`,{
            pages:d(f)
          }),r.kind===`about`&&s(`usage.pager_jump_after_about`,{
            pages:d(f)
          }),r.kind===`more`&&s(`usage.pager_jump_after`)]
        })]
      }),g(`next`,p)]
    })]
  })
}

function mP(e,t,n){
  if(e.kind!==`account`)return(0,V.jsx)(`p`,{
    className:iA.hint,children:n(`usage.account_${e.kind}`)
  });
  if(e.name===null)return(0,V.jsx)(`p`,{
    className:iA.hint,children:n(`usage.account_gone_unnamed`,{
      id:e.id
    })
  });
  let r=aP(e.baseUrl),i=r===null?null:oP(r.host,t.fleet),a=[{
    label:n(`usage.fact_account`),value:e.name,wide:!0,copyLabel:n(`usage.copy_account`)
  },{
    label:n(`usage.fact_machine`),value:r===null?n(`usage.place_unknown`):i?.label??n(`usage.machine_unknown`,{
      host:r.host
    }),wide:r===null||i===null
  },...r===null?[]:[{
    label:n(`usage.fact_vm`),value:String(r.vm)
  }],{
    label:n(`usage.fact_instance`),value:e.baseUrl??`–`,wide:!0
  },{
    label:n(`usage.fact_account_id`),value:e.id,wide:!0,copyLabel:n(`usage.copy_account_id`)
  }];
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(sA,{
      facts:a
    }),(0,V.jsx)(`p`,{
      className:iA.hint,children:n(e.isGone?`usage.account_gone`:`usage.account_now`)
    })]
  })
}

function hP(e,t,n){
  let r=e=>Eh(e,n),{
    charge:i
  }
  =e;
  if(i===null)return(0,V.jsx)(`p`,{
    className:iA.hint,children:t(`usage.charge_none`)
  });
  let{
    pricing:a
  }
  =i,o=a===null?[]:QN(e,a),s=e=>t(`usage.points`,{
    amount:qN(e)
  }),c=e=>e===null?null:XN(e),l=ZN(e),u=a===null?[]:[[t(`usage.fact_input`),c(a.inputPer1k)],[t(`usage.fact_output`),c(a.outputPer1k)],[t(l?`usage.fact_cache_write_5m`:`usage.fact_cache_write`),c(a.cacheCreatePer1k)],[t(`usage.fact_cache_write_1h`),l?c(a.cache1hPer1k):null],[t(`usage.fact_cache_read`),c(a.cacheReadPer1k)]],d=a===null||a.totalInputTokens===null?[]:[{
    label:t(`usage.fact_priced_input`),value:r(a.totalInputTokens)
  },{
    label:t(`usage.fact_tier`),value:a.overInputTokens===null?t(`usage.tier_base`):t(`usage.tier_over`,{
      tokens:r(a.overInputTokens)
    })
  }];
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(`p`,{
      className:iA.hint,children:t(`usage.charge_${i.kind}`)
    }),u.length>0&&(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(`h4`,{
        className:$.subTitle,children:t(`usage.prices`)
      }),(0,V.jsx)(sA,{
        facts:[...u.flatMap(([e,t])=>t===null?[]:[{
          label:e,value:t
        }]),...d]
      })]
    }),o.length>0&&(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(`h4`,{
        className:$.subTitle,children:t(`usage.bill`)
      }),(0,V.jsx)(`ul`,{
        className:$.bill,"data-usage-bill":!0,children:o.map(e=>(0,V.jsxs)(`li`,{
          children:[(0,V.jsx)(`span`,{
            children:t(`usage.fact_${e.part}`)
          }),(0,V.jsx)(`span`,{
            className:$.sum,children:t(`usage.bill_line`,{
              tokens:r(e.tokens),price:e.price
            })
          }),(0,V.jsx)(`span`,{
            className:$.cost,children:qN(e.cost)
          })]
        },e.part))
      })]
    }),(0,V.jsx)(sA,{
      facts:[...o.length>0?[{
        label:t(`usage.fact_worked_out`),value:s($N(o))
      }]:[],{
        label:t(`usage.fact_taken`),value:`−${s(i.amount)}`
      },...i.balanceAfter===null?[]:[{
        label:t(`usage.fact_balance`),value:t(`usage.points`,{
          amount:JN(i.balanceAfter,n)
        })
      }]]
    })]
  })
}

var gP=(e,t,n)=>(0,V.jsxs)(`section`,{
  className:iA.section,"data-usage-section":n,children:[(0,V.jsx)(`h3`,{
    className:iA.sectionTitle,children:e
  }),t]
});

function _P({
  record:e,isOpen:t,serving:n,onClose:r,onOnly:i
}){
  let{
    t:a,i18n:o
  }
  =N(),s=e=>Eh(e,o.language),c=e=>tP(e,o.language);
  if(e===null)return null;
  let l=WN(e),u=e.status===`success`,{
    tokens:d,failure:f,refusal:p
  }
  =e,m=u?a(`usage.status_success`):e.status===`error`?a(`usage.status_error`):e.status,h=(e,t,n)=>t===null?{
    label:e,value:`–`,wide:!0
  }
  :{
    label:e,value:t,wide:!0,copyLabel:n
  };
  return(0,V.jsx)(Xk,{
    open:t,onClose:r,size:`md`,eyebrow:a(`usage.sheet_eyebrow`),corner:(0,V.jsx)(Hf,{}),title:e.model,description:(0,V.jsxs)(`span`,{
      className:$.sheetState,children:[(0,V.jsx)(Tb,{
        state:u?`enabled`:`fault`
      }),m,` · `,c(e.finishedAt??e.startedAt)]
    }),footer:(0,V.jsxs)(`div`,{
      className:$.sheetFoot,children:[(0,V.jsx)(K,{
        size:`sm`,variant:`secondary`,onClick:()=>i({
          model:e.model
        }),"data-usage-only":`model`,children:a(`usage.only_this_model`)
      }),e.apiKeyId!==null&&(0,V.jsx)(K,{
        size:`sm`,variant:`secondary`,onClick:()=>i({
          apiKeyId:e.apiKeyId??``
        }),"data-usage-only":`key`,children:a(`usage.only_this_key`)
      })]
    }),children:(0,V.jsxs)(`div`,{
      className:iA.body,"data-usage-sheet":!0,children:[gP(a(`usage.section_request`),(0,V.jsx)(sA,{
        facts:[{
          label:a(`usage.fact_status`),value:`${m}${e.upstreamStatus===null?``:` · ${a(`usage.fact_upstream_status`)} ${e.upstreamStatus}`}`
        },{
          label:a(`usage.fact_delivery`),value:a(e.isStream?`usage.stream`:`usage.whole`)
        },{
          label:a(`usage.fact_started`),value:c(e.startedAt)
        },{
          label:a(`usage.fact_finished`),value:c(e.finishedAt)
        },{
          label:a(`usage.fact_first_response`),value:c(e.firstResponseAt)
        },{
          label:a(`usage.fact_first_output`),value:c(e.firstOutputAt)
        },{
          label:a(`usage.fact_took`),value:GN(l.totalMs)
        },{
          label:a(`usage.fact_took_first`),value:GN(l.firstOutputMs)
        },...p===null?[]:[{
          label:a(`usage.fact_refusal`),value:p.reason??a(`usage.refusal_unsaid`),wide:!0
        }]]
      }),`request`),gP(a(`usage.section_account`),mP(n.origins.get(e.id)??{
        kind:`unknown`
      },n,a),`account`),f!==null&&gP(a(`usage.section_failure`),(0,V.jsxs)(V.Fragment,{
        children:[(0,V.jsx)(sA,{
          facts:[{
            label:a(`usage.fact_error_code`),value:f.code??`–`
          },{
            label:a(`usage.fact_upstream_status`),value:e.upstreamStatus??`–`
          }]
        }),(0,V.jsx)(`p`,{
          className:$.message,"data-usage-message":!0,children:f.message??a(`usage.error_unsaid`)
        })]
      }),`failure`),gP(a(`usage.section_tokens`),(0,V.jsx)(sA,{
        facts:[{
          label:a(`usage.fact_input`),value:s(d.input)
        },{
          label:a(`usage.fact_output`),value:s(d.output)
        },...ZN(e)?[{
          label:a(`usage.fact_cache_write_5m`),value:s(d.cacheCreation5m??0)
        },{
          label:a(`usage.fact_cache_write_1h`),value:s(d.cacheCreation1h??0)
        }]:[{
          label:a(`usage.fact_cache_write`),value:s(d.cacheCreation)
        }],{
          label:a(`usage.fact_cache_read`),value:s(d.cacheRead)
        }]
      }),`tokens`),gP(a(`usage.section_charge`),hP(e,a,o.language),`charge`),gP(a(`usage.section_ids`),(0,V.jsx)(sA,{
        facts:[h(a(`usage.fact_trace`),e.traceId,a(`usage.copy_trace`)),h(a(`usage.fact_upstream_request`),e.upstreamRequestId,a(`usage.copy_upstream_request`)),h(a(`usage.fact_client_request`),e.clientRequestId,a(`usage.copy_client_request`)),h(a(`usage.fact_api_key`),e.apiKeyId,a(`usage.copy_api_key`)),h(a(`usage.fact_record`),e.id,a(`usage.copy_record`))]
      }),`ids`)]
    })
  })
}

var vP=z().regex(/^\d{1,20}$/),yP=e=>new URLSearchParams({
  ids:e.join(`,`)
}).toString(),bP=B({
  served:$n(B({
    id:vP,account:B({
      id:Il,name:H,base_url:H,gone:Zn()
    }).passthrough().transform(e=>({
      id:e.id,name:e.name,baseUrl:e.base_url,isGone:e.gone
    })).nullable()
  }).passthrough())
}).passthrough().transform(e=>e.served),xP=1e4,SP=er([z(),Yn().int().nonnegative().transform(String)]).pipe(z().regex(/^\d{1,20}$/)),CP=er([z(),Yn().transform(String)]).nullish().transform(e=>e??null),wP=Yn().nullish().transform(e=>e??null),TP=B({
  input_per_1k:er([z(),Yn().transform(String)]),output_per_1k:er([z(),Yn().transform(String)]),cache_create_per_1k:CP,cache_1h_per_1k:CP,cache_read_per_1k:CP,total_input_tokens:wP,over_input_tokens:wP
}).passthrough().transform(e=>({
  inputPer1k:e.input_per_1k,outputPer1k:e.output_per_1k,cacheCreatePer1k:e.cache_create_per_1k,cache1hPer1k:e.cache_1h_per_1k,cacheReadPer1k:e.cache_read_per_1k,totalInputTokens:e.total_input_tokens,overInputTokens:e.over_input_tokens
})),EP=B({
  delta:Ul,balance_after:Yn().nullish(),pricing_snapshot:TP.nullish()
}).passthrough(),DP=B({
  amount:Ul,pricing_snapshot:TP.nullish()
}).passthrough(),OP=/\[provider_id:\s*(\d{1,20})\]/;

function kP(e){
  let t=e===null?null:OP.exec(e);
  return t?.[1]===void 0?null:Il.parse(t[1])
}

var AP=B({
  id:SP,api_key_id:SP.nullish(),model:z(),mode:H,status:z().min(1),started_at:z().min(1),finished_at:H,first_response_at:H,first_output_at:H,upstream_status:CP,input_tokens:Vl,output_tokens:Vl,cache_creation_input_tokens:Vl,cache_creation_5m_input_tokens:wP,cache_creation_1h_input_tokens:wP,cache_read_input_tokens:Vl,trace_id:H,request_id_upstream:H,request_id_client:H,error_code:CP,error_message:H,refused:Zn().nullish(),refusal_reason:H,points_consumed:EP.nullish(),subscription_consumed:DP.nullish()
}).passthrough();

function jP(e){
  let{
    points_consumed:t,subscription_consumed:n
  }
  =e;
  return t==null?n==null?null:{
    kind:`subscription`,amount:Math.abs(n.amount),balanceAfter:null,pricing:n.pricing_snapshot??null
  }
  :{
    kind:`points`,amount:Math.abs(t.delta),balanceAfter:t.balance_after??null,pricing:t.pricing_snapshot??null
  }
}

var MP=AP.transform(e=>{
  let t=e.status!==`success`,n=e.error_code!==null||e.error_message!==null;return{
    id:e.id,apiKeyId:e.api_key_id??null,model:e.model,isStream:e.mode===`stream`,status:e.status,startedAt:e.started_at,finishedAt:e.finished_at,firstResponseAt:e.first_response_at,firstOutputAt:e.first_output_at,upstreamStatus:e.upstream_status,tokens:{
      input:e.input_tokens,output:e.output_tokens,cacheCreation:e.cache_creation_input_tokens,cacheCreation5m:e.cache_creation_5m_input_tokens,cacheCreation1h:e.cache_creation_1h_input_tokens,cacheRead:e.cache_read_input_tokens
    },traceId:e.trace_id,upstreamRequestId:e.request_id_upstream,clientRequestId:e.request_id_client,failure:t||n?{
      code:e.error_code,message:e.error_message
    }
    :null,refusal:e.refused===!0?{
      reason:e.refusal_reason
    }
    :null,charge:jP(e),servedBy:kP(e.error_message)
  }
}),NP=B({
  usage_records:$n(Qn()),total:Vl,offset:Vl,limit:Vl
}).passthrough().transform(e=>{
  let t=e.usage_records.map(e=>MP.safeParse(e)),n=t.flatMap(e=>e.success?[e.data]:[]);return{
    rows:n,unreadable:t.length-n.length,total:e.total,offset:e.offset,limit:e.limit
  }
});

function PP(e){
  return e<=1e4?{
    kind:`exact`,count:e
  }
  :e===10001?{
    kind:`more`,count:xP
  }
  :{
    kind:`about`,count:e
  }
}

function FP(e,t){
  let n=new URLSearchParams({
    offset:String(t.offset),limit:String(t.limit)
  });
  return e.from!==null&&n.set(`start_time`,e.from),e.until!==null&&n.set(`end_time`,e.until),e.status!==null&&n.set(`status`,e.status),e.isStream!==null&&n.set(`mode`,e.isStream?`stream`:`non-stream`),e.model!==null&&n.set(`model`,e.model),e.apiKeyId!==null&&n.set(`api_key_id`,e.apiKeyId),e.clientRequestId!==null&&n.set(`request_id_client`,e.clientRequestId),e.traceId!==null&&n.set(`trace_id`,e.traceId),n.toString()
}

var IP={
  list:async(e,t)=>NP.parse(await G(`/portunex/admin/usage?${FP(e,t)}`)),served:async e=>{
    try{
      return bP.parse(await G(`/ac3/usage/served?${yP(e)}`))
    }catch(e){
      if(e instanceof U&&e.status===404)return`absent`;
      if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
      return`failed`
    }
  },account:async e=>hd.parse(await G(`/portunex/admin/providers/${e}`))
},LP=2;

async function RP(e){
  try{
    return await IP.account(e)
  }catch(e){
    if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
    return e instanceof U&&e.status===404?`gone`:`unread`
  }
}

function zP(e,t){
  let[n,r]=(0,_.useState)(new Map),[i,a]=(0,_.useState)(new Map),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),u=(0,_.useRef)(new Set),d=(0,_.useRef)({
    seen:new Set,waiting:[],busy:0
  }),f=(0,_.useRef)(!0);
  (0,_.useEffect)(()=>(f.current=!0,()=>{
    f.current=!1
  }),[]),(0,_.useEffect)(()=>{
    if(c)return;let t=e.map(e=>e.id).filter(e=>!u.current.has(e));if(t.length!==0){
      for(let e of t)u.current.add(e);IP.served(t).then(e=>{
        if(f.current){
          if(e===`absent`&&l(!0),e===`failed`)for(let e of t)u.current.delete(e);r(n=>{
            let r=new Map(n);for(let e of t)r.set(e,`unsaid`);if(typeof e!=`string`)for(let t of e)r.set(t.id,t);return r
          })
        }
      })
    }
  },[e,c]);
  let p=(0,_.useMemo)(()=>{
    let t=e.filter(e=>(c?`unsaid`:n.get(e.id))===`unsaid`);return[...new Set(t.flatMap(e=>e.servedBy===null?[]:[e.servedBy]))]
  },[e,n,c]);
  (0,_.useEffect)(()=>{
    let{
      seen:e,waiting:t
    }
    =d.current,n=p.filter(t=>!e.has(t));if(n.length===0)return;for(let t of n)e.add(t);t.push(...n),a(e=>{
      let t=new Map(e);for(let e of n)t.set(e,`asking`);return t
    });let r=async()=>{
      for(let e=t.shift();e!==void 0;e=t.shift()){
        let t=await RP(e);if(!f.current)return;let n=e;a(e=>new Map(e).set(n,t))
      }
    },i=async()=>{
      d.current={
        ...d.current,busy:d.current.busy+1
      },await r(),d.current={
        ...d.current,busy:d.current.busy-1
      }
    };for(let e=LP-d.current.busy;e>0;--e)i()
  },[p]);
  let m=(0,_.useMemo)(()=>{
    let t=new Map;for(let r of e){
      let e=c?`unsaid`:n.get(r.id);t.set(r.id,sP(r,e,r.servedBy===null?void 0:i.get(r.servedBy)))
    }
    return t
  },[e,n,i,c]),h=[...m.values()].some(e=>e.kind===`account`);
  return(0,_.useEffect)(()=>{
    if(!t||!h||o!==null)return;let e=new AbortController,n=My({
      onReading:t=>{
        s(t.hosts),e.abort()
      },onDrop:()=>e.abort(),onAbsent:()=>void 0,onExpired:()=>void 0
    });return e.signal.addEventListener(`abort`,n,{
      once:!0
    }),()=>e.abort()
  },[t,h,o]),{
    origins:m,fleet:o
  }
}

var BP=`ac3-usage-page-size`,VP=5e3;

function HP(){
  try{
    return wk(window.localStorage.getItem(BP))
  }catch(e){
    if(!(e instanceof DOMException))throw e;
    return 30
  }
}

function UP(e){
  try{
    window.localStorage.setItem(BP,String(e))
  }catch(e){
    if(!(e instanceof DOMException))throw e
  }
}

var WP=()=>Date.now()-VP;

function GP(){
  let[e,t]=(0,_.useState)(()=>({
    sought:AN,page:1,size:HP(),asOf:WP()
  })),[n,r]=(0,_.useState)({
    answer:null,phase:`reading`
  });
  return(0,_.useEffect)(()=>{
    let t=!0;r(e=>({
      ...e,phase:`reading`
    }));let n={
      offset:(e.page-1)*e.size,limit:e.size
    };return IP.list(LN(e.sought,e.asOf),n).then(({
      rows:n,total:i,unreadable:a
    })=>{
      t&&r({
        answer:{
          ask:e,rows:n,tally:PP(i),unreadable:a
        },phase:`settled`
      })
    },e=>{
      if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;if(!t)return;let n=e instanceof U&&e.status===403;r(e=>({
        ...e,phase:n?`refused`:`failed`
      }))
    }),()=>{
      t=!1
    }
  },[e]),{
    ask:e,state:n,seek:(0,_.useCallback)(e=>{
      t(t=>({
        ...t,sought:e,page:1,asOf:WP()
      }))
    },[]),turn:(0,_.useCallback)(e=>{
      t(t=>({
        ...t,page:Math.max(1,e)
      }))
    },[]),resize:(0,_.useCallback)(e=>{
      UP(e),t(t=>({
        ...t,size:e,page:1
      }))
    },[]),refresh:(0,_.useCallback)(()=>{
      t(e=>({
        ...e,page:1,asOf:WP()
      }))
    },[]),retry:(0,_.useCallback)(()=>t(e=>({
      ...e
    })),[])
  }
}

var KP=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`],qP={
  columns:42,rows:15,pitch:6
};

function JP({
  answer:e
}){
  let{
    t,i18n:n
  }
  =N(),r=e=>Eh(e,n.language),i=e===null?null:nP(e.rows),a=(e,n,i)=>(0,V.jsxs)(`div`,{
    className:J.stat,children:[(0,V.jsxs)(`dt`,{
      className:J.statName,children:[i,t(`usage.band_${e}`)]
    }),(0,V.jsx)(`dd`,{
      className:J.statValue,children:n===void 0?(0,V.jsx)(Am,{
        width:52,height:20,rounded:6
      }):r(n)
    })]
  });
  return(0,V.jsxs)(`div`,{
    className:J.band,"data-usage-band":!0,children:[(0,V.jsxs)(`dl`,{
      className:J.heroes,children:[(0,V.jsxs)(`div`,{
        className:J.hero,children:[(0,V.jsx)(OS,{
          className:J.swash,tone:`today`,shape:`swash`,seed:47,...qP
        }),(0,V.jsx)(`dt`,{
          className:J.heroName,children:t(e!==null&&BN(e.ask.sought)>0?`usage.band_matching`:`usage.band_all`)
        }),(0,V.jsx)(`dd`,{
          className:J.heroValue,"data-usage-tally":e?.tally.kind,children:e===null?(0,V.jsx)(Am,{
            width:148,height:34,rounded:8
          }):(0,V.jsxs)(V.Fragment,{
            children:[e.tally.kind!==`exact`&&(0,V.jsx)(`span`,{
              className:$.inexact,children:t(`usage.band_${e.tally.kind}`)
            }),r(e.tally.count)]
          })
        })]
      }),(0,V.jsxs)(`div`,{
        className:J.hero,children:[(0,V.jsx)(OS,{
          className:J.swash,tone:`total`,shape:`swash`,seed:83,...qP
        }),(0,V.jsx)(`dt`,{
          className:J.heroName,children:t(`usage.band_points`)
        }),(0,V.jsx)(`dd`,{
          className:J.heroValue,children:i===null?(0,V.jsx)(Am,{
            width:148,height:34,rounded:8
          }):qN(i.points)
        })]
      })]
    }),(0,V.jsxs)(`dl`,{
      className:`${J.stats} ${J.statsPaired}`,children:[a(`succeeded`,i?.succeeded,(0,V.jsx)(Tb,{
        state:`enabled`
      })),a(`input`,i?.input),a(`cache_write`,i?.cacheWrite),a(`failed`,i?.failed,(0,V.jsx)(Tb,{
        state:`fault`
      })),a(`output`,i?.output),a(`cache_read`,i?.cacheRead)]
    })]
  })
}

function YP({
  title:e,action:t
}){
  return(0,V.jsxs)(`div`,{
    className:`empty-state`,"data-usage-notice":!0,children:[(0,V.jsxs)(`div`,{
      className:`empty-content`,children:[(0,V.jsx)(`div`,{
        className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
          size:20
        })
      }),(0,V.jsx)(`div`,{
        role:`alert`,children:(0,V.jsx)(`div`,{
          className:`empty-title`,children:e
        })
      })]
    }),t!==void 0&&(0,V.jsx)(`div`,{
      className:`empty-action`,children:t
    })]
  })
}

function XP({
  hearsFleet:e
}){
  let{
    t,i18n:n
  }
  =N(),{
    ask:r,state:i,seek:a,turn:o,resize:s,refresh:c,retry:l
  }
  =GP(),{
    answer:u,phase:d
  }
  =i,f=u?.rows??[],p=zP(f,e),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(0),y=d===`reading`;
  return(0,V.jsxs)(`div`,{
    className:Rm.page,"aria-busy":y&&u===null,children:[(0,V.jsxs)(`header`,{
      className:J.header,children:[(0,V.jsxs)(`div`,{
        className:J.top,children:[(0,V.jsx)(`h1`,{
          className:`${J.title} ${$.title}`,"data-detect-ignore":`gradient-text`,children:t(`usage.title`)
        }),(0,V.jsx)(`div`,{
          className:J.actions,children:(0,V.jsxs)(`button`,{
            type:`button`,className:`${Lm.ghostAction} ${J.refresh}`,onClick:c,disabled:y,"aria-busy":y&&u!==null,"aria-label":t(`pool.refresh`),children:[(0,V.jsx)(rp,{
              size:14,className:y?Lm.spinning:void 0
            }),(0,V.jsx)(`span`,{
              children:t(`pool.refresh`)
            })]
          })
        })]
      }),(0,V.jsx)(`p`,{
        className:$.standing,"data-usage-standing":!0,children:t(`usage.standing`,{
          moment:tP(new Date(r.asOf).toISOString(),n.language).slice(0,-4)
        })
      }),(0,V.jsx)(JP,{
        answer:d===`refused`?null:u
      })]
    }),(0,V.jsxs)(`div`,{
      className:$.body,children:[(0,V.jsx)(HN,{
        sought:r.sought,onSeek:a
      },g),d===`refused`&&(0,V.jsx)(YP,{
        title:t(`usage.forbidden`)
      }),d===`failed`&&u===null&&(0,V.jsx)(YP,{
        title:t(`usage.load_failed`),action:(0,V.jsx)(K,{
          onClick:l,children:t(`common.retry`)
        })
      }),d===`failed`&&u!==null&&(0,V.jsxs)(`p`,{
        className:$.stale,role:`alert`,children:[t(`usage.turn_failed`),(0,V.jsx)(K,{
          size:`sm`,variant:`secondary`,onClick:l,children:t(`common.retry`)
        })]
      }),u===null&&y&&KP.map(e=>(0,V.jsx)(Am,{
        height:56,rounded:12
      },e)),u!==null&&d!==`refused`&&(0,V.jsxs)(V.Fragment,{
        children:[f.length===0?(0,V.jsx)(YP,{
          title:t(u.ask.page>1?`usage.empty_page`:BN(u.ask.sought)>0?`usage.empty`:`usage.empty_all`),action:u.ask.page>1?(0,V.jsx)(K,{
            onClick:()=>o(1),children:t(`usage.back_to_first`)
          }):void 0
        }):(0,V.jsx)(dP,{
          rows:f,serving:p,isReading:y,onOpen:e=>h({
            record:e,isOpen:!0
          })
        }),u.unreadable>0&&(0,V.jsx)(`p`,{
          className:$.stale,children:t(`usage.unreadable`,{
            count:u.unreadable
          })
        }),(0,V.jsx)(pP,{
          page:u.ask.page,size:u.ask.size,held:f.length,tally:u.tally,isReading:y,onTurn:o,onResize:s
        })]
      })]
    }),(0,V.jsx)(_P,{
      record:m?.record??null,isOpen:m?.isOpen??!1,serving:p,onClose:()=>h(e=>e===null?null:{
        ...e,isOpen:!1
      }),onOnly:e=>{
        h(e=>e===null?null:{
          ...e,isOpen:!1
        }),v(e=>e+1),a({
          ...AN,...e
        })
      }
    })]
  })
}

function ZP(){
  let e=q(e=>e.principal);
  return e?.role===`admin`||e?.role===`observer`?(0,V.jsx)(XP,{
    hearsFleet:e.role===`admin`
  }):(0,V.jsx)(As,{
    to:`/pool`,replace:!0
  })
}

function QP(e){
  let t=e?.from,n=t?.pathname;
  return!n||n===`/login`?`/`:`${n}${t?.search??``}`
}

export { QP, ZP };
