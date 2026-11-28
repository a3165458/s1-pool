// @ts-nocheck
// Module: overview — Command Overview, Engine Load Waveform, Fleet Telemetry & Boards
import { Activity, CircleAlert, Layers3, TriangleAlert } from 'lucide-react';
import { N, _, vc, bt, cr, ut, As } from '../lib/vendor-runtime';
import { V, Am, Jf, Nf, U, W, El, q, iu, Ll, yp, tu, Vp, Xd, G, tf, $d, ef, sf, nd, Mp, zp, J, mu, hu, pu, Ud, bl, Rm, Lm, rp, ap, K, yl, Iu } from './core';
import { ug, Dh, Eh, s_, Th, Oh, Uh, Yg, bg, Xg, $g, e_, Qg, Zg, Nh, cg, og, sg, wh, eg, $h, ng, rg, Kh, Ug, Vg, vg } from './notices';

var X={
  heading:`Overview-module__heading___8MgIy`,title:`Overview-module__title___FGJHq`,tag:`Overview-module__tag___B7e1U`,synthetic:`Overview-module__synthetic___F2Xo6`,readAt:`Overview-module__readAt___4mv0A`,band:`Overview-module__band___Syk7N`,section:`Overview-module__section___pCtyS`,sectionHead:`Overview-module__sectionHead___mm5NB`,sectionName:`Overview-module__sectionName___NNP-f`,sectionCount:`Overview-module__sectionCount___PgxkV`,quiet:`Overview-module__quiet___51fcW`,engine:`Overview-module__engine___vJYao`,verdict:`Overview-module__verdict___pWD70`,loadLine:`Overview-module__loadLine___WFZQd`,loadValue:`Overview-module__loadValue___MzXGl`,zone:`Overview-module__zone___pgTib`,zoneDot:`Overview-module__zoneDot___7zKa6`,figures:`Overview-module__figures___TRU3c`,aged:`Overview-module__aged___RB2W-`,wave:`Overview-module__wave___eQ5em`,waveLegend:`Overview-module__waveLegend___xvGPz`,waveAxis:`Overview-module__waveAxis___3O6A-`,legendItem:`Overview-module__legendItem___dOtVg`,legendMark:`Overview-module__legendMark___wPTZ3`,triple:`Overview-module__triple___qzQbw`,lamps:`Overview-module__lamps___KkeCm`,lamp:`Overview-module__lamp___ZoKkO`,lampDots:`Overview-module__lampDots___UbkLX`,lampName:`Overview-module__lampName___kjxQf`,lampVerdict:`Overview-module__lampVerdict___4S-UX`,lampEvidence:`Overview-module__lampEvidence___Mlcxh`
},c_={
  cell:`Panels-module__cell___6kWKK`,cellName:`Panels-module__cellName___gfjU3`,spreadScale:`Panels-module__spreadScale___I-ibu`,spreadEnds:`Panels-module__spreadEnds___u6G0f`,cellNote:`Panels-module__cellNote___zttNa`,cellValue:`Panels-module__cellValue___7kBJY`,cellOf:`Panels-module__cellOf___DRlFU`,digestLink:`Panels-module__digestLink___-wrPw`,digestHead:`Panels-module__digestHead___XRvYT`,rows:`Panels-module__rows___kuOBz`,row:`Panels-module__row___WX6hT`,rowName:`Panels-module__rowName___9sRaF`,rowValue:`Panels-module__rowValue___934Iv`,rowOf:`Panels-module__rowOf___5waXG`,boardHead:`Panels-module__boardHead___ZDLGS`,boardName:`Panels-module__boardName___9zb7S`,spans:`Panels-module__spans___3VzUy`,span:`Panels-module__span___2f00F`,ranks:`Panels-module__ranks___zJ9rm`,rank:`Panels-module__rank___Oj68k`,rankNo:`Panels-module__rankNo___5ibaJ`,rankName:`Panels-module__rankName___U43P4`,rankText:`Panels-module__rankText___NoLmg`,rankAside:`Panels-module__rankAside___tZUO7`,rankValue:`Panels-module__rankValue___FjsM7`,rankBar:`Panels-module__rankBar___St-1f`
},l_=[`a`,`b`,`c`,`d`,`e`];

function u_({
  name:e,measure:t,views:n
}){
  let{
    t:r,i18n:i
  }
  =N(),{
    language:a
  }
  =i,[o,s]=(0,_.useState)(n[0].key),c=n.find(e=>e.key===o)??n[0],{
    rows:l
  }
  =c,u=e=>t===`life`?ug(e,a):t===`points`?Dh(e,a):Eh(e,a),d=e=>e===null?null:e.kind===`owner`?e.name:r(`overview.sample_of`,{
    count:Eh(e.count,a)
  }),f=e=>{
    let t=d(e.aside);
    return t===null?e.hint:`${e.hint} · ${t}`
  },p=typeof l==`string`?0:l[0]?.value??0;
  return(0,V.jsxs)(`section`,{
    className:c_.cell,"aria-label":e,children:[(0,V.jsxs)(`div`,{
      className:c_.boardHead,children:[(0,V.jsx)(`h3`,{
        className:c_.boardName,children:e
      }),(0,V.jsx)(`fieldset`,{
        className:c_.spans,"aria-label":e,children:n.map(e=>(0,V.jsx)(`button`,{
          type:`button`,className:c_.span,"aria-pressed":e.key===c.key,onClick:()=>s(e.key),children:e.name
        },e.key))
      })]
    }),l===`loading`&&(0,V.jsx)(`div`,{
      className:c_.ranks,"aria-hidden":`true`,children:l_.map(e=>(0,V.jsx)(Am,{
        height:28,rounded:6
      },e))
    }),l===`unavailable`&&(0,V.jsx)(`p`,{
      className:`${X.quiet} ${c_.ranks}`,children:r(`overview.board_unavailable`)
    }),typeof l!=`string`&&l.length===0&&(0,V.jsx)(`p`,{
      className:`${X.quiet} ${c_.ranks}`,children:r(`overview.board_empty`)
    }),typeof l!=`string`&&l.length>0&&(0,V.jsx)(`ol`,{
      className:c_.ranks,children:l.map((e,t)=>(0,V.jsxs)(`li`,{
        className:c_.rank,children:[(0,V.jsx)(`span`,{
          className:c_.rankNo,"aria-hidden":`true`,children:t+1
        }),(0,V.jsxs)(`span`,{
          className:c_.rankName,title:f(e),children:[(0,V.jsx)(`span`,{
            className:c_.rankText,children:e.name
          }),e.aside!==null&&(0,V.jsx)(`span`,{
            className:c_.rankAside,children:d(e.aside)
          })]
        }),(0,V.jsx)(`span`,{
          className:c_.rankValue,children:u(e.value)
        }),(0,V.jsx)(s_,{
          className:c_.rankBar,share:p===0?null:e.value/p,tone:`brand`,rows:1,strength:t===0?1:.62
        })]
      },e.id))
    })]
  })
}

function d_({
  onboard:e,earned:t,life:n
}){
  let{
    t:r
  }
  =N();
  return(0,V.jsxs)(`section`,{
    className:X.section,"aria-labelledby":`overview-boards`,children:[(0,V.jsx)(`div`,{
      className:X.sectionHead,children:(0,V.jsx)(`h2`,{
        className:X.sectionName,id:`overview-boards`,children:r(`overview.boards`)
      })
    }),(0,V.jsxs)(`div`,{
      className:X.triple,children:[(0,V.jsx)(u_,{
        name:r(`overview.board_onboard`),measure:`count`,views:e
      }),(0,V.jsx)(u_,{
        name:r(`overview.board_earned`),measure:`points`,views:t
      }),(0,V.jsx)(u_,{
        name:r(`overview.board_life`),measure:`life`,views:n
      })]
    })]
  })
}

function f_(e,t){
  let n=e<0n?-e:e,r=`¥${new Intl.NumberFormat(t).format(n/100n)}.${String(n%100n).padStart(2,`0`)}`;
  return e<0n?`-${r}`:r
}

var p_=(e,t)=>e===null?`–`:f_(e,t);

function m_(e,t){
  let[n=``,...r]=e.replace(/[^\d.]/g,``).split(`.`);
  return r.length===0?n:`${n}.${r.join(``).slice(0,t)}`
}

function h_(e,t){
  return new Intl.DateTimeFormat(t,{
    month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,hour12:!1
  }).format(new Date(e))
}

var g_=(e,t)=>new Intl.DateTimeFormat(t,{
  hour:`2-digit`,minute:`2-digit`,hour12:!1
}).format(new Date(e));

function __({
  name:e,to:t,lines:n
}){
  let{
    t:r
  }
  =N();
  return(0,V.jsxs)(`section`,{
    className:c_.cell,"aria-label":e,children:[(0,V.jsx)(`h3`,{
      className:c_.digestHead,children:(0,V.jsxs)(vc,{
        className:c_.digestLink,to:t,children:[e,(0,V.jsx)(Jf,{
          size:12
        })]
      })
    }),n===`failed`&&(0,V.jsx)(`p`,{
      className:X.quiet,children:r(`overview.digest_failed`)
    }),n===`loading`&&(0,V.jsx)(Am,{
      width:`100%`,height:76,rounded:8
    }),typeof n!=`string`&&(0,V.jsx)(`dl`,{
      className:c_.rows,children:n.map(e=>(0,V.jsxs)(`div`,{
        className:c_.row,children:[(0,V.jsx)(`dt`,{
          className:c_.rowName,title:e.hint??e.name,children:e.name
        }),(0,V.jsx)(`dd`,{
          className:c_.rowValue,"data-ink":e.ink,children:e.value
        })]
      },e.name))
    })]
  })
}

function v_({
  pool:e,partners:t,settlement:n
}){
  let{
    t:r,i18n:i
  }
  =N(),{
    language:a
  }
  =i,o=e=>Eh(e,a);
  return(0,V.jsxs)(`section`,{
    className:X.section,"aria-labelledby":`overview-digests`,children:[(0,V.jsx)(`h2`,{
      className:`visually-hidden`,id:`overview-digests`,children:r(`overview.digests`)
    }),(0,V.jsxs)(`div`,{
      className:X.triple,children:[(0,V.jsx)(__,{
        name:r(`nav.pool`),to:`/pool`,lines:e===null?`loading`:[{
          name:r(`overview.arrived_today`),value:o(e.arrivedToday)
        },{
          name:r(`overview.died_today`),value:o(e.diedToday)
        },{
          name:r(`overview.deploy_failed`),value:o(e.deployFailed)
        }]
      }),(0,V.jsx)(__,{
        name:r(`nav.hierarchy`),to:`/hierarchy`,lines:(()=>{
          if(t.status!==`ready`)return t.status;let{
            earningToday:e,partners:n,openedToday:i,withoutAccounts:a
          }
          =t.value;return[{
            name:r(`overview.earning_today`),value:(0,V.jsxs)(V.Fragment,{
              children:[e===null?`–`:o(e),(0,V.jsxs)(`span`,{
                className:c_.rowOf,children:[`/ `,o(n)]
              })]
            })
          },{
            name:r(`overview.opened_today`),value:o(i)
          },{
            name:r(`overview.without_accounts`),value:o(a)
          }]
        })()
      }),(0,V.jsx)(__,{
        name:r(`nav.settlement`),to:`/settlement`,lines:(()=>{
          if(n.status!==`ready`)return n.status;let{
            clearedShare:e,pending:t,most:i
          }
          =n.value,s=i===null?null:i.account.remark??Th(i.account.email);return[{
            name:r(`overview.cleared_share`),value:Oh(e)
          },{
            name:r(`overview.pending_partners`),value:o(t)
          },i===null||s===null?{
            name:r(`overview.most_pending`),value:`–`
          }
          :{
            name:r(`overview.most_pending_of`,{
              name:s
            }),hint:i.account.email,value:f_(i.amount,a),ink:`gold`
          }]
        })()
      })]
    })]
  })
}

function y_(e){
  let[t,n]=(0,_.useState)(()=>Date.now());
  return(0,_.useEffect)(()=>{
    let t=()=>{
      document.visibilityState===`visible`&&n(Date.now())
    },r=setInterval(t,e);return document.addEventListener(`visibilitychange`,t),()=>{
      clearInterval(r),document.removeEventListener(`visibilitychange`,t)
    }
  },[e]),t
}

var b_=15e3,x_=18e5;

function S_(e,t){
  let n=t-e;
  return n<3e5?null:{
    minutes:Math.floor(n/6e4),isOld:n>=x_
  }
}

var C_=e=>e.filter(({
  row:e
})=>e.healthy&&(e.rpm??0)>0).length;

function w_(e){
  return e>1?`over`:e>=.8?`tight`:`calm`
}

function T_(e,t){
  let n=e*10;
  if(t===null||n===0)return{
    serving:e,healthyRpm:n,rpm:t,ratio:null,zone:null,headroom:null
  };
  let r=t/n;
  return{
    serving:e,healthyRpm:n,rpm:t,ratio:r,zone:w_(r),headroom:Math.max(0,n-t)
  }
}

function E_(e){
  let{
    listing:t,isStreaming:n,heardAt:r,openedAt:i,now:a
  }
  =e;
  return t===`failed`?`down`:n?t===`stale`||a-r>75e3?`late`:`ok`:a-i<5e3?`connecting`:`down`
}

var D_=(e,t,n)=>e!==null&&n-t<=75e3?e:null;

function O_(e){
  return{
    total:e.length,able:e.filter(({
      state:e
    })=>e===`enabled`).length,serving:C_(e)
  }
}

var k_={
  columns:10,rows:14
},A_=2,j_={
  0:[`..######..`,`.########.`,`###....###`,`##......##`,`##......##`,`##......##`,`##......##`,`##......##`,`##......##`,`##......##`,`##......##`,`###....###`,`.########.`,`..######..`],1:[`....##....`,`...###....`,`..####....`,`.#####....`,`....##....`,`....##....`,`....##....`,`....##....`,`....##....`,`....##....`,`....##....`,`....##....`,`..######..`,`..######..`],2:[`..######..`,`.########.`,`###....###`,`##......##`,`........##`,`.......###`,`......###.`,`.....###..`,`....###...`,`...###....`,`..###.....`,`.###......`,`##########`,`##########`],3:[`..######..`,`.########.`,`###....###`,`##......##`,`........##`,`.......###`,`....#####.`,`....#####.`,`.......###`,`........##`,`##......##`,`###....###`,`.########.`,`..######..`],4:[`......###.`,`.....####.`,`....#####.`,`...###.##.`,`..###..##.`,`.###...##.`,`###....##.`,`##.....##.`,`##########`,`##########`,`.......##.`,`.......##.`,`.......##.`,`.......##.`],5:[`##########`,`##########`,`##........`,`##........`,`##........`,`########..`,`#########.`,`.......###`,`........##`,`........##`,`##......##`,`###....###`,`.########.`,`..######..`],6:[`..######..`,`.########.`,`###....###`,`##........`,`##........`,`########..`,`#########.`,`###....###`,`##......##`,`##......##`,`##......##`,`###....###`,`.########.`,`..######..`],7:[`##########`,`##########`,`........##`,`.......###`,`......###.`,`.....###..`,`.....##...`,`....###...`,`....##....`,`...###....`,`...##.....`,`...##.....`,`...##.....`,`...##.....`],8:[`..######..`,`.########.`,`###....###`,`##......##`,`##......##`,`###....###`,`.########.`,`.########.`,`###....###`,`##......##`,`##......##`,`###....###`,`.########.`,`..######..`],9:[`..######..`,`.########.`,`###....###`,`##......##`,`##......##`,`##......##`,`###....###`,`.#########`,`..########`,`........##`,`........##`,`###....###`,`.########.`,`..######..`],"%":[`.###....##`,`#####..###`,`##.##..##.`,`#####.###.`,`.###..##..`,`.....###..`,`.....##...`,`....###...`,`....##....`,`..###.###.`,`..##.#####`,`.###.##.##`,`.##..#####`,`##....###.`],"–":[`..........`,`..........`,`..........`,`..........`,`..........`,`..........`,`.########.`,`.########.`,`..........`,`..........`,`..........`,`..........`,`..........`,`..........`]
};

function M_(e){
  let t=[...e].flatMap(e=>{
    let t=j_[e];return t===void 0?[]:[t]
  }),n=Array.from({
    length:k_.rows
  },(e,n)=>t.map(e=>e[n]??``).join(`.`.repeat(A_)));
  return{
    columns:n[0]?.length??0,rows:k_.rows,lines:n
  }
}

var N_={
  most:5,least:3
},P_=M_(`100%`).columns*N_.most,F_=e=>Math.max(N_.least,Math.min(N_.most,Math.floor(P_/Math.max(1,e)))),I_=[[0,[56,189,248]],[.35,[34,211,238]],[.5,[45,212,191]],[.62,[74,222,128]],[.72,[250,204,21]],[.8,[251,191,36]],[.9,[251,146,60]],[1,[251,113,133]],[1.25,[244,63,94]]],L_=(e,t,n)=>[Math.round(e[0]+(t[0]-e[0])*n),Math.round(e[1]+(t[1]-e[1])*n),Math.round(e[2]+(t[2]-e[2])*n)];

function R_(e){
  let[,t]=I_[0]??[0,[0,0,0]],[n,r]=[0,t];
  for(let[t,i]of I_){
    if(e<=t)return t===n?i:L_(r,i,(e-n)/(t-n));
    [n,r]=[t,i]
  }
  return r
}

var z_=([e,t,n])=>`rgb(${e} ${t} ${n})`;

function B_(){
  let[e,t]=(0,_.useState)({
    status:`loading`
  }),n=(0,_.useCallback)(async()=>{
    try{
      t({
        status:`ready`,partners:await Nf.partners()
      })
    }catch(e){
      if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;t({
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

var V_=20,H_={
  offset:0,limit:80
},U_={
  offset:0,limit:1
};

function W_(e){
  if(e.length===0)return U_;
  let t=e.reduce((e,t)=>Math.min(e,t));
  return{
    offset:Math.floor(t/V_)*V_,limit:80
  }
}

var G_=El(()=>({
  viewerId:null,readFor:null,told:`pending`
}));

async function K_(e,t){
  let n=()=>{
    let n=G_.getState();
    return n.viewerId===e&&n.readFor===t
  };
  try{
    let e=await Nf.earnings();
    n()&&G_.setState({
      told:e
    })
  }catch(e){
    if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
    e instanceof U&&e.status===401?q.getState().expire():n()&&G_.setState({
      told:null
    })
  }
}

function q_(e){
  let t=q(({
    principal:e
  })=>e?.id??null),n=G_();
  return(0,_.useEffect)(()=>{
    if(t===null||e===null)return;let n=G_.getState();if(n.viewerId===t&&n.readFor===e)return;let r=n.viewerId===t?n.told:`pending`;G_.setState({
      viewerId:t,readFor:e,told:r
    }),K_(t,e)
  },[t,e]),t!==null&&n.viewerId===t?n.told:`pending`
}

function J_(e){
  return G_(({
    told:t
  })=>t===`pending`||t===null?t:t.byPartner.get(e)?.branch??null)
}

var Y_=3e5,X_=6e4,Z_=5e3;

function Q_(e,t,n){
  let r={
    at:n,requests:t.requests
  };
  if(e===void 0||t.requests<e.requests)return{
    readings:[r],firstRpm:t.rpm??0,requests:t.requests,points:t.points
  };
  let i=t.requests!==e.requests,a=n-Y_,o=e.readings.findLastIndex(e=>e.at<=a),s=o<=0?e.readings:e.readings.slice(o);
  return{
    readings:i?[...s,r]:s,firstRpm:e.firstRpm,requests:t.requests,points:t.points
  }
}

function $_(e,t){
  let n=t-Y_,[r]=e.readings;
  if(r===void 0)return{
    value:0,settled:!1
  };
  let i=e.readings.findLast(e=>e.at<=n);
  if(i!==void 0)return{
    value:e.requests-i.requests,settled:!0
  };
  let a=r.at-n,o=Math.round(e.firstRpm*a/X_);
  return{
    value:e.requests-r.requests+o,settled:!1
  }
}

function ev(e,t,n){
  let r=e.at(-1),i=r!==void 0&&Math.floor(r.at/Z_)===Math.floor(n/Z_)?e.slice(0,-1):e,a=i.findIndex(e=>e.at>=n-Y_-Z_);
  return[...a<0?[]:i.slice(a),{
    at:n,rpm:t
  }]
}

function tv(e,t){
  let[n]=e;
  if(n===void 0)return null;
  let r=0,i=!0;
  for(let a=0;a<Y_/X_;a+=1){
    let o=t-a*X_,s=e.findLast(e=>e.at<=o);
    s===void 0&&(i=!1),r+=(s??n).rpm
  }
  return{
    value:r,settled:i
  }
}

function nv(e,t){
  if(t.tops.size===0)return{
    shown:e,away:[],awayTops:[]
  };
  let n=[],r=[],i=new Set;
  for(let a of e){
    let e=iu(a.row,t);
    e===null?n.push(a):(r.push(a),i.add(e))
  }
  return{
    shown:n,away:r,awayTops:[...i].toSorted().map(e=>Ll.parse(e))
  }
}

function rv(e,t,n){
  if(e===null||t===null)return null;
  let r=0;
  for(let e of t){
    let t=n.get(e);
    if(t===void 0)return null;
    r+=t
  }
  return Math.max(0,e-r)
}

var iv=new Map,av={
  total:null,whole:null,away:new Map,rates:iv,count:null,ids:[],tracks:new Map,pulses:new Map,paces:[],heardAt:0
};

function ov(e,t){
  let n=new Set(t);
  return new Map([...e].filter(([e])=>n.has(e)))
}

var sv=El(e=>({
  ...av,expected:null,page:H_,follow:t=>e(e=>e.page.offset===t.offset&&e.page.limit===t.limit?e:{
    page:t
  }),heardTotal:t=>e(e=>{
    let n=rv(t,e.expected,e.away);return e.whole===t&&e.total===n?e:{
      whole:t,total:n
    }
  }),expect:t=>e(e=>{
    let n=new Set(t??[]),r=new Map([...e.away].filter(([e])=>n.has(e)));return{
      expected:t,away:r,total:rv(e.whole,t,r)
    }
  }),heardAway:(t,n)=>e(e=>{
    if(n===null?!e.away.has(t):e.away.get(t)===n)return e;let r=new Map(e.away);return n===null?r.delete(t):r.set(t,n),{
      away:r,total:rv(e.whole,e.expected,r)
    }
  }),heardRates:(t,n)=>e(e=>{
    let r=new Map(n?iv:e.rates);for(let{
      id:e,rpm:n
    }
    of t)r.set(e,n);return{
      rates:r
    }
  }),heardFrame:(t,n)=>e(e=>{
    let r=t.ids??e.ids,i=ov(e.tracks,r),a=ov(e.pulses,r),o=new Map(t.rates.map(e=>[e.id,e.rpm]));for(let e of t.pulses){
      let t={
        requests:e.requests,points:e.points,rpm:o.get(e.id)??null
      };i.set(e.id,Q_(i.get(e.id),t,n)),a.set(e.id,e)
    }
    return{
      count:t.count??e.count,ids:r,tracks:i,pulses:a,paces:t.rpm===null||e.total===null?e.paces:ev(e.paces,e.total,n),heardAt:n
    }
  }),lost:()=>e(av)
})),cv=.7,lv=e=>e.type===null?null:e.type===`7d`?1:.99,uv=e=>e.modelPattern===null||/^\*+$/.test(e.modelPattern),dv=(e,t)=>e.windowEnd!==null&&Date.parse(e.windowEnd)>t;

function fv(e,t){
  if(!e||e.utilization===null)return!1;
  let n=lv(e);
  return n!==null&&e.utilization>=n&&dv(e,t)
}

function pv(e,t){
  return e.find(e=>e.type===t&&uv(e))??null
}

var mv=/fable/i,hv=e=>!uv(e)&&mv.test(e.modelPattern??``);

function gv(e){
  return e.find(hv)??null
}

function _v(e,t){
  return e.filter(e=>dv(e,t)).toSorted((e,t)=>Number(uv(t))-Number(uv(e)))
}

function vv(e,t){
  let n=e.filter(e=>fv(e,t));
  return n.length===0?null:n.some(uv)?`all`:`partial`
}

function yv(e,t){
  let n=e.filter(e=>fv(e,t)).map(e=>Date.parse(e.windowEnd??``));
  return n.length===0?null:Math.max(...n)
}

var bv=[`enabled`,`limited`,`fault`,`disabled`,`deploying`,`deploy_failed`],xv=`RateLimited`,Sv=[`listed`,`requests`,`points`,`window`,`week`,`recovery`,`newest`];

function Cv(e,t){
  return e.deploymentStatus===`deploying`?`deploying`:e.deploymentStatus===`failed`?`deploy_failed`:e.healthy?vv(e.windows,t.now)===null?`enabled`:`limited`:e.lastError===null?`disabled`:e.lastError.type===xv?`limited`:`fault`
}

function wv(e){
  if(e===null)return null;
  try{
    let t=new URL(e).hostname.replace(/^\[|\]$/g,``);
    return t===``?null:t
  }catch(e){
    if(!(e instanceof TypeError))throw e;
    return null
  }
}

function Tv(e,t){
  let n=e.lastError;
  return[e.name,e.id,e.owner?.email,t,...e.tags,n?.type,n?.message].filter(e=>typeof e==`string`).join(`
`).toLowerCase()
}

function Ev(e,t,n){
  return t===`limited`?e.healthy?vv(e.windows,n):`upstream`:null
}

function Dv(e,t){
  return e.map(e=>{
    let n=Cv(e,t),r=wv(e.httpProxy);return{
      id:e.id,state:n,restriction:Ev(e,n,t.now),row:e,exit:r,haystack:Tv(e,r)
    }
  })
}

var Ov=3e5;

function kv(e,t){
  return(e.activeConcurrent??0)>0||e.windows.some(e=>e.lastRequestAt!==null&&t-Date.parse(e.lastRequestAt)<=Ov)
}

function Av(e,t){
  let n=e.filter(e=>e.row.healthy);
  return{
    total:e.length,healthy:n.length,serving:n.filter(e=>kv(e.row,t)).length,limited:e.filter(e=>e.state===`limited`).length,dead:e.filter(e=>e.state===`fault`).length
  }
}

function jv(e){
  let t={
    enabled:0,limited:0,fault:0,disabled:0,deploying:0,deploy_failed:0
  };
  for(let n of e)t[n.state]+=1;
  return t
}

function Mv(e,t){
  let n=t.query.toLowerCase().split(/\s+/).filter(Boolean);
  return e.filter(e=>(t.state===null||e.state===t.state)&&(t.errorType===null||e.row.lastError?.type===t.errorType)&&(t.tag===null||e.row.tags.includes(t.tag))&&(t.owner===null||e.row.owner?.id===t.owner)&&n.every(t=>e.haystack.includes(t)))
}

function Nv(e,t){
  return jv(Mv(e,{
    ...t,state:null
  }))
}

function Pv(e,t){
  let n=new Map;
  for(let r of Mv(e,{
    ...t,errorType:null
  })){
    let e=r.row.lastError?.type;
    e!==void 0&&n.set(e,(n.get(e)??0)+1)
  }
  return[...n].map(([e,t])=>({
    type:e,count:t
  })).toSorted((e,t)=>t.count-e.count||e.type.localeCompare(t.type))
}

function Fv(e){
  return[...new Set(e.flatMap(e=>e.row.tags))].toSorted((e,t)=>e.localeCompare(t))
}

var Iv=e=>{
  let t=e.row.createdAt;
  return t===null?null:Date.parse(t)
};

function Lv(e){
  return(t,n)=>(e(n)??-1/0)-(e(t)??-1/0)
}

function Rv(e){
  return(t,n)=>(e(t)??1/0)-(e(n)??1/0)
}

function zv(e,t){
  let n=e=>t=>pv(t.row.windows,e)?.utilization;
  switch(t.key){
    case`listed`:return e;
    case`requests`:return e.toSorted(Lv(e=>e.row.usage.requests));
    case`points`:return e.toSorted(Lv(e=>e.row.usage.points));
    case`window`:return e.toSorted(Lv(n(`5h`)));
    case`week`:return e.toSorted(Lv(n(`7d`)));
    case`recovery`:return e.toSorted(Rv(e=>yv(e.row.windows,t.now)));
    case`newest`:return e.toSorted(Lv(Iv));
    default:return yp(t.key)
  }
}

var Bv=e=>{
  let t=Date.parse(e.row.lastError?.occurredAt??``);
  return Number.isNaN(t)?null:t
};

function Vv(e,t,n){
  let r=Mv(e,t);
  return t.state===`fault`&&n.key===`listed`?r.toSorted(Lv(Bv)):zv(r,n)
}

var Hv=`everyone`;

function Uv(e,t){
  let n=new Map;
  for(let t of e){
    let e=t.row.owner?.id??`platform`,r=n.get(e);
    r===void 0?n.set(e,[t]):r.push(t)
  }
  return n.size>t?[{
    key:Hv,email:null,suppliers:n.size,accounts:e
  }]:[...n].map(([e,t])=>({
    key:e,email:t[0]?.row.owner?.email??null,suppliers:1,accounts:t
  })).toSorted((e,t)=>t.accounts.length-e.accounts.length||e.key.localeCompare(t.key))
}

var Wv=null;

function Gv(e){
  return e instanceof bt?`contract`:e instanceof U||e instanceof W?`unreachable`:null
}

var Kv=e=>e instanceof U&&e.status===401;

function qv(e){
  switch(e.status){
    case`ready`:return{
      ...e,refreshing:!0
    };
    case`switching`:return e;
    case`loading`:case`failed`:return{
      status:`loading`
    };
    default:return yp(e)
  }
}

async function Jv(e){
  let t=await Nf.providersPage(e,0),n=[...t.rows],r=t.unreadable;
  for(let i=500;i<t.total;i+=500)try{
    let t=await Nf.providersPage(e,i);
    n.push(...t.rows),r+=t.unreadable
  }catch(e){
    if(Kv(e)||Gv(e)===null)throw e;
    return{
      rows:n,unreadable:r,missing:Math.max(0,t.total-n.length-r)
    }
  }
  return{
    rows:n,unreadable:r,missing:0
  }
}

async function Yv(e,t){
  try{
    let[{
      rows:e,missing:n,unreadable:r
    },i]=await Promise.all([Jv(t),t===null?Uh():tu]),a=Date.now(),o=Dv(e,{
      now:a
    }),{
      shown:s,away:c,awayTops:l
    }
    =nv(o,i);
    return t===null&&cr(ut,String(s.length)),{
      status:`ready`,accounts:s,hosted:c,hostedTops:l,listed:new Map(o.map((e,t)=>[e.id,t])),scope:t,loadedAt:a,refreshing:!1,stale:!1,missing:n,unreadable:r
    }
  }catch(t){
    if(Kv(t))return`expired`;
    let n=Gv(t);
    if(n===null)throw t;
    return e.status===`ready`?{
      ...e,refreshing:!1,stale:!0
    }
    :{
      status:`failed`,cause:n
    }
  }
}

var Xv=El((e,t)=>({
  data:{
    status:`loading`
  },scope:null,load:()=>{
    let n=async()=>{
      let n=q.getState().principal,{
        data:r,scope:i
      }
      =t();e({
        data:qv(r)
      });let a=await Yv(r,i);q.getState().principal===n&&t().scope===i&&(a===`expired`?q.getState().expire():e({
        data:a
      }))
    };if(Wv===null){
      let e=n().finally(()=>{
        Wv===e&&(Wv=null)
      });Wv=e
    }
    return Wv
  },setScope:n=>(Wv=null,e({
    scope:n,data:{
      status:`switching`,scope:n
    }
  }),t().load())
}));

q.subscribe((e,t)=>{
  e.principal!==t.principal&&(Wv=null,Xv.setState({
    data:{
      status:`loading`
    },scope:null
  }))
});

function Zv(e){
  return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)
}

var Qv=()=>document.visibilityState===`visible`;

function $v(e,t){
  let n=(0,_.useSyncExternalStore)(Zv,Qv,()=>!0),r=e?.supplierId??null,i=e?.includeDescendants??!1,a=sv(e=>e.page.offset),o=sv(e=>e.page.limit),s=(0,_.useRef)(null),c=Xv(e=>e.data),l=(0,_.useMemo)(()=>r===null?c.status===`ready`&&c.scope===null?c.hostedTops.join(`,`):null:``,[r,c]);
  (0,_.useEffect)(()=>{
    sv.getState().expect(l===null?null:l.split(`,`).filter(Boolean))
  },[l]),(0,_.useEffect)(()=>{
    if(!t||!n||l===null||l===``)return;let{
      heardAway:e
    }
    =sv.getState(),r=l.split(`,`).map(t=>Vp({
      scope:{
        supplierId:t,includeDescendants:!0
      },page:U_,onTotal:n=>e(t,n),onRates:()=>void 0,onFrame:()=>void 0,onState:n=>{
        n===`offline`&&e(t,null)
      },onExpired:()=>q.getState().expire()
    }));return()=>{
      for(let e of r)e();for(let t of l.split(`,`))e(t,null)
    }
  },[t,n,l]),(0,_.useEffect)(()=>{
    let{
      heardTotal:e,heardRates:c,heardFrame:l,lost:u
    }
    =sv.getState(),d=`${r}:${i}`;if(!t||!n)s.current=null,u();else return s.current!==d&&u(),s.current=d,Vp({
      scope:r===null?null:{
        supplierId:r,includeDescendants:i
      },page:{
        offset:a,limit:o
      },onTotal:e,onRates:c,onFrame:e=>l(e,Date.now()),onState:e=>{
        e===`offline`&&u()
      },onExpired:()=>q.getState().expire()
    })
  },[t,n,r,i,a,o])
}

var ey=`/ac3/settlement`,ty={
  timeoutMs:6e4
},ny=e=>({
  method:`POST`,body:JSON.stringify(e),...ty
}),ry={
  book:async()=>Xd.parse(await G(ey,ty)),ledger:async e=>tf.parse(await G(`${ey}/accounts/${e}`,ty)),entries:async()=>$d.parse(await G(`${ey}/entries`)),pay:async(e,t)=>ef.parse(await G(`${ey}/accounts/${e}/payments`,ny(sf(t)))),reverse:async(e,t)=>{
    let n={
      request_id:t.requestId,reason:t.reason
    };
    return ef.parse(await G(`${ey}/payments/${e}/reversal`,ny(n)))
  }
},iy=e=>e instanceof U||e instanceof W||e instanceof bt;

function ay(e){
  if(!iy(e))throw e;
  e instanceof U&&e.status===401&&q.getState().expire()
}

function oy(){
  let[e,t]=(0,_.useState)({
    status:`loading`
  }),n=(0,_.useCallback)(async()=>{
    t(e=>e.status===`ready`?{
      ...e,isRefreshing:!0
    }
    :e);try{
      let e=await ry.book();t({
        status:`ready`,book:e,isRefreshing:!1
      })
    }catch(e){
      ay(e),t({
        status:`failed`
      })
    }
  },[]),r=(0,_.useCallback)(e=>{
    t(t=>{
      if(t.status!==`ready`)return t;let n=t.book.payees.map(t=>t.id===e.id?e:t);return{
        ...t,book:{
          ...t.book,payees:n
        }
      }
    })
  },[]);
  return(0,_.useEffect)(()=>{
    n()
  },[n]),{
    state:e,reload:n,note:r
  }
}

function sy(e,t,n){
  let[r,i]=(0,_.useState)({
    key:null,state:{
      status:`loading`
    }
  }),a=(0,_.useRef)(n);
  (0,_.useEffect)(()=>{
    a.current=n
  },[n]);
  let o=e===null?null:`${t}:${e}`;
  return(0,_.useEffect)(()=>{
    if(o===null||e===null)return;let t=!0;return i(t=>t.key===e?t:{
      key:e,state:{
        status:`loading`
      }
    }),a.current(e).then(n=>{
      t&&i({
        key:e,state:{
          status:`ready`,value:n
        }
      })
    },n=>{
      ay(n),t&&i({
        key:e,state:{
          status:`failed`
        }
      })
    }),()=>{
      t=!1
    }
  },[o,e]),r.key===e?r.state:{
    status:`loading`
  }
}

var cy=(e,t)=>sy(e,t,ry.ledger),ly=.85,uy=.9,dy=.9,fy=1e4;

function py(e){
  let t=e.hardware?.memoryBytes??0;
  return e.load===null||t===0?null:e.load.memoryUsedBytes/t
}

function my(e){
  let t=e.hardware?.diskBytes??0;
  return e.load===null||t===0?null:e.load.diskUsedBytes/t
}

var hy=.75;

function gy(e){
  let t=py(e);
  return t===null||t<=0||e.vms<=0?null:Math.floor(e.vms*hy/t)
}

function _y(e){
  if(e.load===null)return null;
  if(e.vms<=0)return 0;
  let t=gy(e);
  return t===null?null:Math.min(1,e.vms/Math.max(1,t))
}

function vy(e){
  let t=e.flatMap(({
    hardware:e,load:t,vms:n
  })=>e===null||t===null?[]:[{
    vms:n,memory:e.memoryBytes,used:t.memoryUsedBytes
  }]),n=t.reduce((e,t)=>e+t.vms,0),r=t.reduce((e,t)=>e+t.memory,0),i=t.reduce((e,t)=>e+t.used,0);
  return n<=0||i<=0?null:{
    room:Math.floor(n*hy*r/i),running:n,counted:t.length
  }
}

function yy(e){
  return e.load===null?[]:[{
    on:`cpu`,share:e.load.cpu,from:ly
  },{
    on:`memory`,share:py(e),from:uy
  },{
    on:`disk`,share:my(e),from:dy
  }].flatMap(({
    on:e,share:t,from:n
  })=>t!==null&&t>=n?[{
    on:e,share:t
  }]:[])
}

function by(e){
  return e.load===null?`down`:yy(e).length>0?`busy`:`ok`
}

function xy(e){
  let t=({
    strains:e
  })=>Math.max(...e.map(({
    share:e
  })=>e));
  return e.map(e=>({
    machine:e,strains:yy(e)
  })).filter(({
    strains:e
  })=>e.length>0).toSorted((e,n)=>t(n)-t(e)||e.machine.label.localeCompare(n.machine.label))
}

function Sy(e){
  if(e.length===0)return`none`;
  let t=e.map(by);
  return t.includes(`down`)?`down`:t.includes(`busy`)?`busy`:`ok`
}

function Cy(e){
  return e.filter(e=>e.load!==null).toSorted((e,t)=>(t.load?.cpu??0)-(e.load?.cpu??0)||e.label.localeCompare(t.label))[0]??null
}

var wy=`/ac3/fleet/live`,Ty=[2e3,5e3,15e3],Ey=15e3,Dy=15e3,Oy=class extends Error{
  status;
  constructor(e){
    super(`fleet stream refused: ${e}`),this.status=e,this.name=`StreamRefused`
  }
},ky=e=>e instanceof TypeError||e instanceof Oy||e instanceof DOMException&&e.name===`AbortError`;

function Ay(e){
  let t;
  try{
    t=JSON.parse(e)
  }catch(e){
    if(e instanceof SyntaxError)return null;
    throw e
  }
  let n=nd.safeParse(t);
  return n.success?n.data:null
}

async function jy(e,t,n){
  let r=await fetch(wy,{
    headers:{
      accept:`text/event-stream`
    },credentials:`same-origin`,cache:`no-store`,signal:n
  });
  if(!r.ok||r.body===null)throw new Oy(r.status);
  let i=r.body.pipeThrough(new TextDecoderStream).getReader(),a=``;
  for(;;){
    let{
      value:n,done:r
    }
    =await i.read();
    if(r)return;
    t();
    let o=Mp(a+n);
    a=o.rest;
    for(let t of o.events){
      let n=Ay(t);
      n!==null&&e.onReading(n)
    }
  }
}

function My(e){
  let t=new AbortController;
  return(async()=>{
    let n=0;for(;!t.signal.aborted;){
      let r=new AbortController,i=()=>r.abort();t.signal.addEventListener(`abort`,i,{
        once:!0
      });let a=setTimeout(i,Dy),o=()=>{
        n=0,clearTimeout(a),a=setTimeout(i,Dy)
      };try{
        await jy(e,o,r.signal)
      }catch(t){
        if(!ky(t))throw t;if(t instanceof Oy&&t.status===401)return e.onExpired();if(t instanceof Oy&&t.status===404)return e.onAbsent()
      }finally{
        clearTimeout(a),t.signal.removeEventListener(`abort`,i)
      }
      if(t.signal.aborted)return;e.onDrop(),n+=1,await zp(Ty[n-1]??Ey,t.signal)
    }
  })(),()=>t.abort()
}

function Ny(e){
  return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)
}

var Py=()=>document.visibilityState===`visible`,Fy=()=>(0,_.useSyncExternalStore)(Ny,Py,()=>!0);

function Iy(e){
  let[t,n]=(0,_.useState)({
    status:`loading`
  }),r=Fy();
  return(0,_.useEffect)(()=>{
    if(r)return e>0&&n(e=>e.status===`ready`?e:{
      status:`loading`
    }),My({
      onReading:e=>n(t=>e.hosts.length>0?{
        status:`ready`,value:e,isLive:!0
      }
      :t.status===`ready`?t:{
        status:`loading`
      }),onDrop:()=>n(e=>e.status===`ready`?e:{
        status:`failed`
      }),onAbsent:()=>n({
        status:`absent`
      }),onExpired:()=>q.getState().expire()
    })
  },[r,e]),(0,_.useEffect)(()=>{
    if(t.status!==`ready`||!t.isLive)return;let e=setTimeout(()=>n(e=>e===t?{
      ...t,isLive:!1
    }
    :e),fy);return()=>clearTimeout(e)
  },[t]),t
}

function Ly(){
  let e=Xv(e=>e.data),t=B_(),n=oy(),[r,i]=(0,_.useState)(0),a=Iy(r),[o]=(0,_.useState)(()=>Date.now()),[s,c]=(0,_.useState)(null),l=Fy(),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(null),m=q_(f),h=(0,_.useCallback)(async()=>{
    let{
      scope:e,load:t,setScope:n
    }
    =Xv.getState(),r=performance.now();await(e===null?t():n(null)),c(performance.now()-r);let i=Xv.getState().data;return i.status===`ready`?i.loadedAt:null
  },[]);
  (0,_.useEffect)(()=>{
    h().then(p)
  },[h]),(0,_.useEffect)(()=>{
    if(!l)return;let{
      data:e
    }
    =Xv.getState();e.status===`ready`&&Date.now()-e.loadedAt>=15e3&&h();let t=setInterval(()=>void h(),b_);return()=>clearInterval(t)
  },[l,h]);
  let g=sv(({
    page:e
  })=>e.offset===U_.offset&&e.limit===U_.limit);
  (0,_.useEffect)(()=>{
    sv.getState().follow(U_)
  },[]),$v(null,g&&e.status!==`failed`);
  let{
    reload:v
  }
  =t,{
    reload:y
  }
  =n,b=(0,_.useCallback)(()=>{
    d(!0),h().then(e=>{
      d(!1),e!==null&&p(e)
    }),v(),y(),i(e=>e+1)
  },[h,v,y]),{
    status:x
  }
  =e,S=e.status===`ready`?e.accounts:null,C=e.status===`ready`?e.loadedAt:null,w=e.status===`ready`&&e.stale,T=(0,_.useMemo)(()=>x===`failed`?{
    status:`failed`
  }
  :S===null||C===null?{
    status:`loading`
  }
  :{
    status:`ready`,value:{
      accounts:S,loadedAt:C,isStale:w
    }
  },[x,S,C,w]),E=(0,_.useMemo)(()=>m===`pending`?{
    status:`loading`
  }
  :m===null?{
    status:`failed`
  }
  :{
    status:`ready`,value:m
  },[m]);
  return{
    pool:T,partners:t.state.status===`ready`?{
      status:`ready`,value:t.state.partners
    }
    :t.state,earnings:E,book:n.state.status===`ready`?{
      status:`ready`,value:n.state.book
    }
    :n.state,fleet:a,listingMs:s,openedAt:o,isRefreshing:u&&e.status===`ready`&&e.refreshing,reload:b
  }
}

var Ry=()=>sv(e=>e.total),zy=()=>sv(e=>e.total!==null),By=()=>sv.getState().paces,Vy=()=>sv.getState().heardAt,Hy=.5,Uy=255,Wy=2;

function Gy(e){
  let t=e.flatMap((e,t)=>e.includes(`#`)?[t]:[]),[n,r]=[t[0],t.at(-1)];
  if(n===void 0||r===void 0)return null;
  let i=e.slice(n,r+1),a=Math.min(...i.map(e=>e.indexOf(`#`)).filter(e=>e>=0)),o=Math.max(...i.map(e=>e.lastIndexOf(`#`))),s=i.map(e=>e.slice(a,o+1));
  return{
    columns:o-a+1,rows:s.length,lines:s
  }
}

function Ky(e,t){
  let[n,r]=[Math.floor(e.width/t),Math.floor(e.height/t)],i=Hy*t*t*Uy,a=[];
  for(let o=0;o<r;o+=1){
    let r=``;
    for(let a=0;a<n;a+=1){
      let n=0;
      for(let r=o*t;r<(o+1)*t;r+=1){
        let i=r*e.width+a*t;
        for(let r=i;r<i+t;r+=1)n+=e.alpha[r]??0
      }
      r+=n>=i?`#`:`.`
    }
    a.push(r)
  }
  return Gy(a)
}

function qy(e,t){
  let n=(t,n)=>e.lines[n]?.[t]===`#`,r=(e,r)=>{
    for(let i=1;i<=t+Wy;i+=1)if(n(e+i,r+i))return!0;
    return!1
  },i=[];
  for(let a=0;a<e.rows;a+=1)for(let o=0;o<e.columns;o+=1)if(n(o,a)&&!r(o,a))for(let e=1;e<=t;e+=1)i.push({
    column:o+e,row:a+e,depth:e
  });
  return i
}

var Jy=(e,t)=>Math.max(0,Math.round((t-e)/2)),Yy=[.34,.16],Xy=.24;

function Zy({
  reading:e,ratio:t
}){
  let n=(0,_.useMemo)(()=>M_(e),[e]),r=(0,_.useMemo)(()=>qy(n,Yy.length),[n]),i=F_(n.columns),a=t===null?null:z_(R_(t)),o=(0,_.useCallback)(({
    context:e,grid:t
  })=>{
    let{
      dot:o
    }
    =t,s=(e,t)=>n.lines[t]?.[e]===`#`;if(e.fillStyle=a??Yg().quiet,a!==null)for(let t of r)e.globalAlpha=Yy[t.depth-1]??0,e.fillRect(t.column*i,t.row*i,o,o);e.globalAlpha=1;let c=[];for(let t=0;t<n.rows;t+=1)for(let r=0;r<n.columns;r+=1)s(r,t)&&(e.fillRect(r*i,t*i,o,o),s(r,t-1)&&s(r-1,t)||c.push([r,t]));if(a!==null){
      e.fillStyle=`#fff`,e.globalAlpha=Xy;for(let[t,n]of c)e.fillRect(t*i,n*i,o,o)
    }
  },[n,r,i,a]);
  return(0,V.jsx)(bg,{
    rows:n.rows+Yy.length,columns:n.columns+Yy.length,pitch:i,dot:i-1,paint:o,isAnimated:!1
  })
}

var Qy=3e5,$y=6e4,eb=1.1;

function tb(e,t){
  let[n]=e;
  if(n===void 0)return Qy;
  let r=t-n.at+$y;
  return Math.min(Qy,Math.max($y,r))
}

function nb(e,t,n){
  let r=n>1?t.span/(n-1):0,i=0;
  return Array.from({
    length:n
  },(a,o)=>{
    let s=t.now-(n-1-o)*r;for(;i<e.length&&(e[i]?.at??1/0)<=s;)i+=1;let c=e[i-1],l=e[i];return c===void 0?l!==void 0&&s>=l.at-6e4?l.rpm:null:l===void 0?s-c.at<=75e3?c.rpm:null:c.rpm+(l.rpm-c.rpm)*(s-c.at)/(l.at-c.at)
  })
}

function rb(e,t){
  let n=e.reduce((e,t)=>Math.max(e,t??0),0);
  return Math.max(t,n*eb,1)
}

function ib(e,t,n){
  return e<=0?0:Math.min(n,Math.max(1,Math.round(e/t*n)))
}

function ab(e,t){
  let{
    rows:n,scale:r,healthyRpm:i
  }
  =t;
  return i<=0?`calm`:e>ib(i,r,n)?`over`:e>ib(i*.8,r,n)?`tight`:`calm`
}

var ob=17,sb=6,cb=4,lb=.42,ub=.18,db=4,fb=.5,pb={
  calm:3.2,tight:2,over:1.2
},mb=2,hb=.35,gb=600,_b=.5,vb={
  calm:`brand`,tight:`warn`,over:`bad`
},yb=5e3;

function bb(e,t){
  let{
    context:n,grid:r,seconds:i,isStill:a
  }
  =e,{
    columns:o,rows:s,pitch:c,dot:l
  }
  =r,{
    healthyRpm:u
  }
  =t,d=By(),f=Date.now(),p=nb(d,{
    now:f,span:tb(d,f)
  },o),m=rb(p,u),h=p.at(-1)??null,g=h===null||u===0?`calm`:w_(h/u),_=a?4:i,v=a?0:Math.max(0,1-(f-Vy())/gb)*hb,y=pb[g],b=a?null:i%y/y*(o+8)-db,x={
    calm:Xg(n,vb.calm,e),tight:Xg(n,vb.tight,e),over:Xg(n,vb.over,e)
  },S=Array.from({
    length:s+1
  },(e,t)=>ab(t,{
    rows:s,scale:m,healthyRpm:u
  })),C=(e,t)=>n.fillRect(e*c,(s-t)*c,l,l);
  if(n.fillStyle=Yg().quiet,u>0){
    n.globalAlpha=_b;
    let e=ib(u,m,s);
    for(let t=0;t<o;t+=1)C(t,e)
  }
  n.globalAlpha=$g;
  for(let e=0;e<o;e+=1)p[e]===0&&C(e,1);
  for(let e=0;e<o;e+=1){
    let r=p[e]??null;
    if(r===null)continue;
    let i=Math.min(1,Math.max(0,(t.elapsed-e/o*lb)/ub));
    if(i<=0)continue;
    let a=(b===null?0:Math.max(0,1-Math.abs(e-b)/db)*fb)+(e>=o-mb?v:0),c=ib(r,m,s);
    for(let t=1;t<=c;t+=1){
      let r=t===c?1:e_(e,t,_)?Qg:Zg;
      n.globalAlpha=Math.min(1,r+a)*i,n.fillStyle=x[S[t]??`calm`],C(e,t)
    }
  }
}

function xb({
  healthyRpm:e
}){
  let{
    t,i18n:n
  }
  =N(),r=(0,_.useRef)(null),i=(0,_.useCallback)(t=>{
    e!==null&&(r.current??=t.seconds,bb(t,{
      healthyRpm:e,elapsed:t.isStill?1/0:t.seconds-r.current
    }))
  },[e]),a=Dh(e,n.language),o=Math.floor(tb(By(),y_(yb))/1e4)*10,s={
    minutes:Math.floor(o/60),seconds:o%60
  };
  return(0,V.jsxs)(`div`,{
    className:X.wave,children:[(0,V.jsxs)(`div`,{
      className:X.waveLegend,"aria-hidden":`true`,children:[(0,V.jsxs)(`span`,{
        className:X.legendItem,children:[(0,V.jsx)(`span`,{
          className:X.legendMark
        }),t(`overview.rpm_actual`)]
      }),(0,V.jsxs)(`span`,{
        className:X.legendItem,children:[(0,V.jsx)(`span`,{
          className:X.legendMark,"data-mark":`healthy`
        }),t(`overview.rpm_healthy`),` `,a]
      })]
    }),(0,V.jsx)(bg,{
      rows:ob,pitch:sb,dot:cb,paint:i,isAnimated:!0,label:t(`overview.wave_label`,{
        healthy:a
      })
    }),(0,V.jsxs)(`div`,{
      className:X.waveAxis,"aria-hidden":`true`,children:[(0,V.jsx)(`span`,{
        children:t(s.seconds===0?`overview.wave_from_minutes`:`overview.wave_from_both`,s)
      }),(0,V.jsx)(`span`,{
        children:t(`overview.wave_now`)
      })]
    })]
  })
}

var Sb=5e3;

function Cb({
  serving:e,readAt:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=Ry(),a=y_(Sb),o=D_(i,Vy(),a),s=t===null?null:S_(t,a),c=e===null?null:T_(e,o),l=e=>Dh(e,r.language),u=(e,t)=>(0,V.jsxs)(`div`,{
    className:J.stat,children:[(0,V.jsx)(`dt`,{
      className:J.statName,children:e
    }),(0,V.jsx)(`dd`,{
      className:J.statValue,children:c===null?(0,V.jsx)(Am,{
        width:52,height:20,rounded:6
      }):l(t)
    })]
  });
  return(0,V.jsxs)(`div`,{
    className:X.engine,children:[(0,V.jsxs)(`div`,{
      className:X.verdict,title:n(`overview.load_hint`,{
        each:10
      }),children:[(0,V.jsxs)(`div`,{
        className:X.loadLine,children:[(0,V.jsx)(`div`,{
          className:X.loadValue,children:c===null?(0,V.jsx)(Am,{
            width:179,height:79,rounded:8
          }):(0,V.jsxs)(V.Fragment,{
            children:[(0,V.jsx)(Zy,{
              reading:Oh(c.ratio),ratio:c.ratio
            }),(0,V.jsx)(`span`,{
              className:`visually-hidden`,children:Oh(c.ratio)
            })]
          })
        }),c!==null&&c.ratio!==null&&c.zone!==null&&(0,V.jsxs)(`span`,{
          className:X.zone,children:[(0,V.jsx)(`span`,{
            className:X.zoneDot,"data-zone":c.zone,style:{
              background:z_(R_(c.ratio))
            },"aria-hidden":`true`
          }),n(`overview.zone_${c.zone}`)]
        })]
      }),(0,V.jsxs)(`dl`,{
        className:X.figures,children:[u(n(`overview.rpm_actual`),c?.rpm),u(n(`overview.rpm_healthy`),c?.healthyRpm),u(n(`overview.headroom`),c?.headroom)]
      }),c!==null&&s!==null&&(0,V.jsx)(`p`,{
        className:X.aged,"data-old":s.isOld,title:n(`overview.count_aged_hint`),children:n(`overview.count_aged`,{
          minutes:s.minutes
        })
      })]
    }),(0,V.jsx)(xb,{
      healthyRpm:c?.healthyRpm??null
    })]
  })
}

var wb={
  dot:`StateChip-module__dot___7mF2N`,chip:`StateChip-module__chip___tM7Wb`,detail:`StateChip-module__detail___Eyuso`,meterFill:`StateChip-module__meterFill___Dx5F0`
};

function Tb({
  state:e
}){
  return(0,V.jsx)(`span`,{
    className:wb.dot,"data-state":e,"aria-hidden":`true`
  })
}

function Eb({
  state:e
}){
  let{
    t
  }
  =N();
  return(0,V.jsxs)(`span`,{
    className:wb.chip,"data-status":e,children:[(0,V.jsx)(Tb,{
      state:e
    }),t(`state.${e}`)]
  })
}

function Db(){
  let{
    t:e
  }
  =N();
  return t=>e(`error_type.${t}`,{
    defaultValue:t
  })
}

function Ob({
  account:e
}){
  let{
    t
  }
  =N(),n=Db(),r=e.row.lastError,i=e.state===`fault`&&r!==null?n(r.type):(()=>{
    switch(e.restriction){
      case`partial`:return t(`pool.partly_limited`);case`upstream`:return t(`pool.limited_upstream`);case`all`:case null:return null;default:return yp(e.restriction)
    }
  })();
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(Eb,{
      state:e.state
    }),i!==null&&(0,V.jsx)(`span`,{
      className:wb.detail,"data-part":`detail`,title:i,children:i
    })]
  })
}

function kb({
  value:e,limited:t
}){
  let n=typeof e==`number`?Math.min(e,1):0,r=t?`limited`:n>=.7?`high`:`normal`;
  return(0,V.jsx)(`span`,{
    className:wb.meterFill,"data-level":r,style:{
      transform:`scaleX(${n})`
    }
  })
}

var Ab=8,jb=6,Mb=240,Nb=2010,Pb=(e,t,n)=>Math.min(Math.max(e,t),n),Fb=(e,t,n,r=0)=>{
  let i=Math.min(Math.max(e.width,r),Math.max(0,t-16)),a=Pb(e.left+i>t-Ab?e.right-i:e.left,Ab,Math.max(Ab,t-i-Ab)),o=n-e.bottom-Ab-jb,s=e.top-Ab-jb,c=o>=Mb||o>=s?`down`:`up`,l=Math.max(0,Math.min(Mb,c===`down`?o:s));
  return c===`down`?{
    position:`fixed`,top:e.bottom+jb,left:a,width:i,maxHeight:l,zIndex:Nb
  }
  :{
    position:`fixed`,bottom:n-e.top+jb,left:a,width:i,maxHeight:l,zIndex:Nb
  }
},Ib=8;

function Lb(e,t){
  let n=Fb(e.getBoundingClientRect(),window.innerWidth,window.innerHeight,t),r=n.top??n.bottom;
  return typeof r==`number`?{
    ...n,maxHeight:Math.max(0,window.innerHeight-r-Ib)
  }
  :n
}

function Rb(e){
  let t=(0,_.useRef)(null),n=(0,_.useRef)(null),[r,i]=(0,_.useState)(null),a=r!==null,o=r!==null&&r.top===void 0;
  (0,_.useEffect)(()=>{
    if(!a)return;t.current?.querySelector(`input`)?.focus();let e=e=>{
      e.target instanceof Node&&!t.current?.contains(e.target)&&i(null)
    };return document.addEventListener(`pointerdown`,e),document.addEventListener(`focusin`,e),()=>{
      document.removeEventListener(`pointerdown`,e),document.removeEventListener(`focusin`,e)
    }
  },[a]),(0,_.useEffect)(()=>{
    let t=n.current;if(!a||!t)return;let r=0,o=()=>{
      window.cancelAnimationFrame(r),r=window.requestAnimationFrame(()=>{
        let n=Lb(t,e);i(e=>e===null?null:n)
      })
    },s=new ResizeObserver(o);return s.observe(t),window.addEventListener(`resize`,o),window.addEventListener(`scroll`,o,!0),()=>{
      window.cancelAnimationFrame(r),s.disconnect(),window.removeEventListener(`resize`,o),window.removeEventListener(`scroll`,o,!0)
    }
  },[a,e]);
  let s=()=>{
    i(null),n.current?.focus()
  };
  return{
    rootRef:t,triggerRef:n,placement:r,open:a,opensUp:o,toggle:()=>{
      let t=n.current;
      t&&i(a?null:Lb(t,e))
    },close:s,onKeyDown:e=>{
      if(e.key===`Escape`){
        e.stopPropagation(),s();
        return
      }
      let t={
        ArrowDown:1,ArrowUp:-1
      }
      [e.key];
      if(t===void 0)return;
      e.preventDefault();
      let n=[...e.currentTarget.querySelectorAll(`input, [data-choice]`)],r=n.findIndex(e=>e.matches(`:focus`))+(o?-t:t);
      n[Math.max(0,Math.min(n.length-1,r))]?.focus()
    }
  }
}

var zb=[[/^EPYC\s+/i,`epyc`],[/^Xeon\s+/i,`xeon`],[/^Ryzen\s+Threadripper\s+/i,`threadripper`],[/^Ryzen\s+/i,`ryzen`],[/^Core\s+Ultra\s+/i,`core_ultra`],[/^Core\s+/i,`core`]];

function Bb(e){
  let t=e.replace(/\((?:R|TM)\)/gi,` `).replace(/@.*$/,` `).replace(/\b\d+(?:st|nd|rd|th)\s+Gen\b/gi,` `).replace(/\b\d+-Cores?\b/gi,` `).replace(/\b(?:AMD|Intel|CPU|Processor)\b/gi,` `).replace(/\s+/g,` `).trim();
  for(let[e,n]of zb)if(e.test(t))return{
    brand:n,model:t.replace(e,``)
  };
  return{
    brand:null,model:t
  }
}

var Vb=`unknown`;

function Hb(e){
  let t=e.map(({
    id:e,label:t,hardware:n
  })=>({
    id:e,series:n===null||n.cpuModel===Vb?{
      brand:null,model:t
    }
    :Bb(n.cpuModel)
  })),n=({
    brand:e,model:t
  })=>`${e}:${t}`,r=new Map;
  for(let{
    series:e
  }
  of t)r.set(n(e),(r.get(n(e))??0)+1);
  let i=new Map;
  return new Map(t.map(({
    id:e,series:t
  })=>{
    let a=n(t),o=(i.get(a)??0)+1;return i.set(a,o),[e,{
      series:t,ordinal:(r.get(a)??0)>1?o:null
    }]
  }))
}

function Ub({
  label:e,hint:t,error:n,rightElement:r,className:i=``,id:a,...o
}){
  let s=(0,_.useId)(),c=a??s,l=t?`${c}-hint`:void 0,u=n?`${c}-error`:void 0,d=[o[`aria-describedby`],u,l].filter(Boolean).join(` `)||void 0;
  return(0,V.jsxs)(`div`,{
    className:`form-group`,children:[e&&(0,V.jsx)(`label`,{
      htmlFor:c,children:e
    }),(0,V.jsxs)(`div`,{
      style:{
        position:`relative`
      },children:[(0,V.jsx)(`input`,{
        id:c,className:`input ${i}`.trim(),"aria-invalid":!!n||o[`aria-invalid`],"aria-describedby":d,...o
      }),r&&(0,V.jsx)(`div`,{
        style:{
          position:`absolute`,right:8,top:`50%`,transform:`translateY(-50%)`
        },children:r
      })]
    }),t&&(0,V.jsx)(`div`,{
      id:l,className:`hint`,children:t
    }),n&&(0,V.jsx)(`div`,{
      id:u,className:`error-box`,children:n
    })]
  })
}

var Wb={
  fleet:`Fleet-module__fleet___D9GVd`,host:`Fleet-module__host___fip-g`,hostHead:`Fleet-module__hostHead___bBENx`,hostName:`Fleet-module__hostName___2kvXe`,hostState:`Fleet-module__hostState___QBBYB`,more:`Fleet-module__more___a-wSd`,code:`Fleet-module__code___-YV9c`,gauges:`Fleet-module__gauges___ATLeD`,gauge:`Fleet-module__gauge___vX-PS`,gaugeRead:`Fleet-module__gaugeRead___-VMMz`,gaugeBar:`Fleet-module__gaugeBar___-Bew9`,gaugeName:`Fleet-module__gaugeName___-tABF`,gaugeValue:`Fleet-module__gaugeValue___TSFEz`,gaugeOf:`Fleet-module__gaugeOf___9oS-y`,placing:`Fleet-module__placing___STdVE`,placingSwitch:`Fleet-module__placingSwitch___nFcWb`,placingName:`Fleet-module__placingName___HV6BL`,placingSaid:`Fleet-module__placingSaid___CigEE`,placingRefused:`Fleet-module__placingRefused___fAcy-`,live:`Fleet-module__live___7141f`,liveMark:`Fleet-module__liveMark___H0UmU`,"live-beat":`Fleet-module__live-beat___tMmsf`,liveBeat:`Fleet-module__live-beat___tMmsf`
};

function Gb({
  hosts:e
}){
  let{
    t,i18n:n
  }
  =N(),r=vy(e);
  if(r===null)return null;
  let i=[t(`overview.fleet_room_hint`,{
    ceiling:Oh(hy),running:Eh(r.running,n.language)
  }),...r.counted<e.length?[t(`overview.fleet_room_partial`,{
    counted:r.counted
  })]:[]].join(`
`);
  return(0,V.jsx)(`span`,{
    className:X.sectionCount,title:i,"data-fleet-room":!0,children:t(`overview.fleet_room`,{
      count:Eh(r.room,n.language)
    })
  })
}

var Kb={
  detail:`Detail-module__detail___w-peD`,"detail-in":`Detail-module__detail-in___DVFjq`,detailIn:`Detail-module__detail-in___DVFjq`,"detail-in-up":`Detail-module__detail-in-up___2SQPB`,detailInUp:`Detail-module__detail-in-up___2SQPB`,head:`Detail-module__head___KOVlr`,title:`Detail-module__title___OzXUU`,tag:`Detail-module__tag___-GImK`,body:`Detail-module__body___I3Y9F`,facts:`Detail-module__facts___aZxYs`,factName:`Detail-module__factName___LTkA2`,factValue:`Detail-module__factValue___h5fd1`,factMeter:`Detail-module__factMeter___vyufk`,note:`Detail-module__note___6bRJc`
};

function qb({
  t:e,language:t,machine:n
}){
  let{
    placement:r
  }
  =n;
  if(r===null)return[];
  let i=r.switchedBy===null?[]:[{
    name:e(`overview.fact_switched`),value:(0,V.jsxs)(V.Fragment,{
      children:[r.switchedBy,(0,V.jsx)(`br`,{}),Nh(r.switchedAt,t)]
    })
  }],a=r.probedCpu===null||r.probedAt===null?[]:[{
    name:e(`overview.fact_probed`),value:`CPU ${Oh(r.probedCpu)} · ${cg(r.probedAt,t)}`
  }];
  return[...i,...a]
}

function Jb(){
  let{
    t:e
  }
  =N();
  return({
    series:t,ordinal:n
  })=>{
    let{
      brand:r,model:i
    }
    =t,a=r===null?i:`${e(`overview.cpu_${r}`)} ${i}`;
    return n===null?a:e(`overview.host_ordinal`,{
      name:a,ordinal:n
    })
  }
}

var Yb={
  ok:`enabled`,busy:`limited`,down:`disabled`
};

function Xb(e,t,n){
  if(!n)return{
    tone:`idle`
  };
  let r=e!==null&&t!==void 0&&e>=t,i=r?`warn`:`brand`;
  return e===null?{
    tone:i
  }
  :{
    tone:i,pulse:r?`fast`:`slow`
  }
}

function Zb({
  facts:e,isLive:t
}){
  return(0,V.jsx)(`dl`,{
    className:Kb.facts,children:e.map(({
      name:e,value:n,kind:r,meter:i,hint:a
    })=>(0,V.jsxs)(`div`,{
      style:{
        display:`contents`
      },children:[(0,V.jsx)(`dt`,{
        className:Kb.factName,children:e
      }),(0,V.jsxs)(`dd`,{
        className:Kb.factValue,"data-kind":r,title:a,children:[n,i!==void 0&&(0,V.jsx)(s_,{
          className:Kb.factMeter,share:i.share,rows:1,...Xb(i.share,i.lineAt,t)
        })]
      })]
    },e))
  })
}

function Qb(e){
  let{
    id:t,machine:n,name:r,placement:i,opensUp:a,isSynthetic:o,isLive:s,placed:c
  }
  =e,{
    t:l,i18n:u
  }
  =N(),{
    language:d
  }
  =u,f=Jb()(r),{
    hardware:p,load:m
  }
  =n,h=by(n),g=(e,t)=>l(`overview.used_of`,{
    used:og(e,d),total:og(t,d),share:Oh(t===0?null:e/t)
  }),_=n.address===null?[]:[{
    name:l(`overview.fact_address`),value:n.address,kind:`code`
  }],v=p===null?[]:[{
    name:l(`overview.fact_cpu_model`),value:`${p.sockets} × ${p.cpuModel}`,kind:`code`
  },{
    name:l(`overview.fact_cores`),value:l(`overview.cores_of`,{
      cores:Eh(p.cores,d),threads:Eh(p.threads,d)
    })
  },{
    name:l(`overview.fact_memory`),value:og(p.memoryBytes,d)
  },{
    name:l(`overview.fact_disk`),value:og(p.diskBytes,d)
  }],y=[{
    name:l(`overview.fact_label`),value:n.label,kind:`code`
  },..._,...v],b=gy(n),x=m===null||p===null?[]:[{
    name:l(`overview.fact_cpu_used`),value:Oh(m.cpu),meter:{
      share:m.cpu,lineAt:ly
    }
  },{
    name:l(`overview.fact_memory_used`),value:g(m.memoryUsedBytes,p.memoryBytes),meter:{
      share:py(n),lineAt:uy
    }
  },{
    name:l(`overview.fact_disk_used`),value:g(m.diskUsedBytes,p.diskBytes),meter:{
      share:my(n),lineAt:dy
    }
  },{
    name:l(`overview.fact_averages`),value:m.averages.map(e=>sg(e,d)).join(` / `)
  },{
    name:l(`overview.fact_vms`),value:b===null?l(`overview.vms_of`,{
      running:Eh(n.vms,d)
    }):l(`overview.vms_of_room`,{
      running:Eh(n.vms,d),room:Eh(b,d)
    }),meter:{
      share:_y(n),lineAt:1
    },hint:l(`overview.vm_room_hint`,{
      ceiling:Oh(hy)
    })
  },{
    name:l(`overview.fact_uptime`),value:ug(m.uptimeSeconds*1e3,d)
  },{
    name:l(`overview.fact_sampled`),value:cg(m.sampledAt,d)
  }],S=c.engine===`none`?[]:qb({
    t:l,language:d,machine:n
  });
  return(0,V.jsxs)(`section`,{
    id:t,className:Kb.detail,style:i,"data-opens":a?`up`:`down`,"aria-label":l(`overview.host_more_of`,{
      name:f
    }),children:[(0,V.jsxs)(`div`,{
      className:Kb.head,children:[(0,V.jsx)(Tb,{
        state:Yb[h]
      }),(0,V.jsx)(`p`,{
        className:Kb.title,children:f
      }),(0,V.jsx)(`span`,{
        className:Wb.hostState,children:l(`overview.host_${h}`)
      }),o&&(0,V.jsx)(`span`,{
        className:`${X.tag} ${X.synthetic} ${Kb.tag}`,title:l(`overview.detail_synthetic`),children:l(`overview.synthetic`)
      })]
    }),(0,V.jsxs)(`div`,{
      className:Kb.body,children:[(0,V.jsx)(Zb,{
        facts:y,isLive:s
      }),m===null?(0,V.jsx)(`p`,{
        className:Kb.note,children:l(p===null?`overview.host_never_heard`:`overview.host_no_reading`)
      }):(0,V.jsx)(Zb,{
        facts:[...x,...S],isLive:s
      })]
    })]
  })
}

function $b({
  name:e,share:t,busyFrom:n,shown:r,isLive:i,hint:a
}){
  return(0,V.jsxs)(`div`,{
    className:Wb.gauge,title:a,children:[(0,V.jsx)(`dt`,{
      className:Wb.gaugeName,children:e
    }),(0,V.jsxs)(`dd`,{
      className:Wb.gaugeRead,children:[(0,V.jsx)(s_,{
        className:Wb.gaugeBar,share:t,rows:2,...Xb(t,n,i)
      }),(0,V.jsx)(`span`,{
        className:Wb.gaugeValue,children:r
      })]
    })]
  })
}

function ex(e){
  return e===null?`unknown`:e.isOn?e.isAtCpuCeiling===!0?`hot`:`on`:`off`
}

function tx(e){
  let t={
    on:0,hot:0,off:0,unknown:0
  };
  for(let{
    placement:n
  }
  of e)t[ex(n)]+=1;
  return t
}

var nx={
  count:0,last:null
},rx=(e,t)=>e.last===t?e:{
  count:e.count+1,last:t
},ix={
  attempt:null,held:null
},ax=(e,t)=>({
  ...e,attempt:{
    step:`asking`,on:t
  }
}),ox=e=>({
  attempt:null,held:{
    on:e,heard:nx
  }
}),sx=(e,t)=>({
  ...e,attempt:{
    step:`refused`,why:t,heard:nx
  }
});

function cx(e,t){
  let n=rx(e,t);
  return n.count>=3?null:n
}

function lx(e,t){
  if(e===null)return null;
  switch(e.step){
    case`asking`:return e;
    case`refused`:{
      let n=cx(e.heard,t);
      return n===e.heard?e:n===null?null:{
        ...e,heard:n
      }
    }
    default:return yp(e)
  }
}

function ux(e,t,n){
  if(e===null||n===e.on)return null;
  let r=cx(e.heard,t);
  return r===e.heard?e:r===null?null:{
    ...e,heard:r
  }
}

function dx(e,t,n){
  let r=lx(e.attempt,t),i=ux(e.held,t,n);
  return r===e.attempt&&i===e.held?e:{
    attempt:r,held:i
  }
}

var fx=(e,t)=>e.attempt?.step===`asking`?e.attempt.on:e.held?.on??t;

function px({
  hosts:e
}){
  let{
    t,i18n:n
  }
  =N(),{
    on:r,hot:i,off:a,unknown:o
  }
  =tx(e),s=e=>Eh(e,n.language),c=t(`overview.placing_count_hint`,{
    on:s(r),hot:s(i),off:s(a),unknown:s(o)
  });
  return(0,V.jsx)(`span`,{
    className:X.sectionCount,title:c,"data-placing-count":!0,children:t(`overview.placing_count`,{
      count:s(r)
    })
  })
}

var mx={
  root:`AccountSwitch-module__root___nkbyv`,track:`AccountSwitch-module__track___BP5bB`,thumb:`AccountSwitch-module__thumb___ee8uo`
};

function hx({
  checked:e,onChange:t,label:n,disabled:r,className:i
}){
  return(0,V.jsxs)(`label`,{
    className:i?`${mx.root} ${i}`:mx.root,"data-disabled":r||void 0,children:[(0,V.jsx)(`input`,{
      type:`checkbox`,checked:e,disabled:r,"aria-label":n,onChange:e=>t(e.target.checked)
    }),(0,V.jsx)(`span`,{
      className:mx.track,children:(0,V.jsx)(`span`,{
        className:mx.thumb
      })
    })]
  })
}

function gx({
  machine:e,name:t,asOf:n,cpuCeiling:r
}){
  let{
    t:i,i18n:a
  }
  =N(),[o,s]=(0,_.useState)(ix),{
    id:c,placement:l
  }
  =e,u=l?.isOn??null;
  (0,_.useEffect)(()=>{
    s(e=>dx(e,n,u))
  },[n,u]);
  let d=async e=>{
    s(t=>ax(t,e));
    try{
      await Nf.setHostPlacing(c,e),s(ox(e))
    }catch(e){
      if(!(e instanceof U)&&!(e instanceof W))throw s(e=>({
        ...e,attempt:null
      })),e;
      let t=e instanceof U&&e.code===`last_one_on`?`last`:`failed`;
      s(e=>sx(e,t))
    }
  },f=l===null?null:{
    ...l,isOn:fx(o,l.isOn)
  },p=ex(f),m=o.attempt?.step===`refused`?o.attempt.why:null,h=i(`overview.placing_${p}`),g=i(`overview.placing_hint_${p}`,{
    needed:void 0,time:cg(l?.probedAt??n,a.language),cpu:Oh(l?.probedCpu),ceiling:Oh(r)
  }),v=l===null||l.switchedBy===null?null:i(`overview.placing_by`,{
    who:l.switchedBy,time:Nh(l.switchedAt,a.language)
  });
  return(0,V.jsxs)(`div`,{
    className:Wb.placing,"data-placing":p,title:v===null?g:`${g}\n${v}`,children:[(0,V.jsx)(`span`,{
      className:Wb.placingName,children:i(`overview.placing`)
    }),m===null&&(0,V.jsx)(`span`,{
      className:Wb.placingSaid,children:h
    }),(0,V.jsx)(`output`,{
      className:Wb.placingRefused,children:m===null?null:i(`overview.placing_${m}`)
    }),(0,V.jsx)(hx,{
      className:Wb.placingSwitch,checked:f?.isOn??!1,disabled:l===null||o.attempt?.step===`asking`,label:i(`overview.placing_switch_of`,{
        name:t
      }),onChange:e=>void d(e)
    })]
  })
}

var _x=600,vx=[`a`,`b`,`c`];

function yx({
  machine:e,name:t,isSynthetic:n,isLive:r,placed:i
}){
  let{
    t:a,i18n:o
  }
  =N(),s=Rb(_x),c=(0,_.useId)(),l=Jb()(t),u=by(e),d=e.load?.cpu??null,f=my(e),p=gy(e),{
    open:m
  }
  =s,h=(0,_.useRef)(s.close);
  (0,_.useEffect)(()=>{
    h.current=s.close
  }),(0,_.useEffect)(()=>{
    if(!m)return;let e=e=>{
      e.key===`Escape`&&h.current()
    };return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)
  },[m]);
  let g=t.series.model===e.label?null:e.label;
  return(0,V.jsxs)(`li`,{
    className:Wb.host,children:[(0,V.jsxs)(`div`,{
      className:Wb.hostHead,ref:s.rootRef,children:[(0,V.jsx)(Tb,{
        state:Yb[u]
      }),(0,V.jsx)(`h3`,{
        className:Wb.hostName,title:l,children:l
      }),u!==`ok`&&(0,V.jsx)(`span`,{
        className:Wb.hostState,children:a(`overview.host_${u}`)
      }),(0,V.jsx)(`button`,{
        ref:s.triggerRef,type:`button`,className:Wb.more,"aria-expanded":s.open,"aria-controls":s.open?c:void 0,"aria-label":a(`overview.host_more_of`,{
          name:g===null?l:`${l} ${g}`
        }),onClick:s.toggle,children:g===null?a(`overview.host_more`):(0,V.jsx)(`span`,{
          className:Wb.code,children:g
        })
      }),s.placement!==null&&(0,V.jsx)(Qb,{
        id:c,machine:e,name:t,placement:s.placement,opensUp:s.opensUp,isSynthetic:n,isLive:r,placed:i
      })]
    }),(0,V.jsxs)(`dl`,{
      className:Wb.gauges,children:[(0,V.jsx)($b,{
        name:a(`overview.gauge_cpu`),share:d,busyFrom:ly,shown:Oh(d),isLive:r
      }),(0,V.jsx)($b,{
        name:a(`overview.gauge_memory`),share:py(e),busyFrom:uy,shown:Oh(py(e)),isLive:r
      }),f!==null&&f>=.9&&(0,V.jsx)($b,{
        name:a(`overview.gauge_disk`),share:f,busyFrom:.9,shown:Oh(f),isLive:r
      }),(0,V.jsx)($b,{
        name:a(`overview.gauge_vm`),share:_y(e),busyFrom:1,shown:e.load===null?`–`:(0,V.jsxs)(V.Fragment,{
          children:[Eh(e.vms,o.language),p!==null&&(0,V.jsxs)(`span`,{
            className:Wb.gaugeOf,children:[`/`,Eh(p,o.language)]
          })]
        }),isLive:r,hint:a(`overview.vm_room_hint`,{
          ceiling:Oh(hy)
        })
      })]
    }),i.engine!==`none`&&(0,V.jsx)(gx,{
      machine:e,name:l,asOf:i.asOf,cpuCeiling:i.cpuCeiling
    })]
  })
}

function bx({
  fleet:e
}){
  let{
    t,i18n:n
  }
  =N(),r=e.status===`ready`?e.value:null,i=r===null?null:Hb(r.hosts);
  return(0,V.jsxs)(`section`,{
    className:X.section,"aria-labelledby":`overview-fleet`,children:[(0,V.jsxs)(`div`,{
      className:X.sectionHead,children:[(0,V.jsx)(`h2`,{
        className:X.sectionName,id:`overview-fleet`,children:t(`overview.fleet`)
      }),r!==null&&(0,V.jsx)(`span`,{
        className:X.sectionCount,children:t(`overview.fleet_count`,{
          count:Eh(r.hosts.length,n.language)
        })
      }),r!==null&&(0,V.jsx)(Gb,{
        hosts:r.hosts
      }),r?.engine===`answering`&&(0,V.jsx)(px,{
        hosts:r.hosts
      }),r?.isSynthetic===!0&&(0,V.jsx)(`span`,{
        className:`${X.tag} ${X.synthetic}`,title:t(`overview.synthetic_hint`),children:t(`overview.synthetic`)
      }),!1,e.status===`ready`&&(0,V.jsxs)(`span`,{
        className:Wb.live,"data-live":e.isLive,children:[(0,V.jsx)(`span`,{
          className:Wb.liveMark,"aria-hidden":`true`
        }),t(e.isLive?`overview.fleet_live`:`overview.fleet_stopped`,{
          time:cg(e.value.asOf,n.language)
        })]
      }),!1]
    }),e.status===`loading`&&(0,V.jsx)(`div`,{
      className:Wb.fleet,"aria-hidden":`true`,children:vx.map(e=>(0,V.jsx)(Am,{
        height:151,rounded:12
      },e))
    }),e.status===`absent`&&(0,V.jsx)(`p`,{
      className:X.quiet,children:t(`overview.fleet_absent`)
    }),e.status===`failed`&&(0,V.jsx)(`p`,{
      className:X.quiet,children:t(`overview.fleet_failed_line`)
    }),r!==null&&i!==null&&(0,V.jsx)(`ul`,{
      className:Wb.fleet,children:r.hosts.flatMap(t=>{
        let n=i.get(t.id);return n===void 0?[]:[(0,V.jsx)(yx,{
          machine:t,name:n,isSynthetic:r.isSynthetic,isLive:e.status===`ready`&&e.isLive,placed:r
        },t.id)]
      })
    })]
  })
}

var xx=4,Sx=5,Cx=3,wx=.5;

function Tx({
  tone:e,className:t
}){
  let n=e===`idle`,r=(0,_.useCallback)(t=>{
    let{
      context:r,grid:i,seconds:a
    }
    =t;r.fillStyle=Xg(r,e,t);for(let e=0;e<i.rows;e+=1)for(let t=0;t<i.columns;t+=1){
      let i=e_(t,e,a)?1:wx;r.globalAlpha=n?$g:i,r.fillRect(t*Sx,e*Sx,Cx,Cx)
    }
  },[e,n]);
  return(0,V.jsx)(bg,{
    className:t,rows:xx,columns:xx,pitch:Sx,dot:Cx,paint:r,isAnimated:!n
  })
}

var Ex=5e3;

function Dx({
  name:e,tone:t,verdict:n,evidence:r,isAnnounced:i=!1
}){
  return(0,V.jsxs)(`li`,{
    className:X.lamp,children:[(0,V.jsx)(Tx,{
      className:X.lampDots,tone:t
    }),i&&(0,V.jsx)(`output`,{
      className:`visually-hidden`,children:n===null?``:`${e} ${n}`
    }),(0,V.jsxs)(`div`,{
      className:X.lampName,"aria-hidden":i||void 0,children:[e,n===null?(0,V.jsx)(Am,{
        width:40,height:14,rounded:4
      }):(0,V.jsx)(`span`,{
        className:X.lampVerdict,children:n
      })]
    }),(0,V.jsx)(`div`,{
      className:X.lampEvidence,title:r??void 0,children:n===null?(0,V.jsx)(Am,{
        width:160,height:12,rounded:4
      }):r
    })]
  })
}

var Ox={
  ok:`brand`,late:`warn`,down:`bad`,connecting:`idle`
};

function kx({
  listing:e
}){
  let{
    t,i18n:n
  }
  =N(),r=zy(),i=y_(Ex),a=Vy(),{
    status:o,tookMs:s,openedAt:c
  }
  =e,l=E_({
    listing:o,isStreaming:r,heardAt:a,openedAt:c,now:i
  }),u=(e,t)=>new Intl.NumberFormat(n.language,{
    minimumFractionDigits:t,maximumFractionDigits:t
  }).format(e/1e3);
  return(0,V.jsx)(Dx,{
    name:t(`overview.lamp_arx`),tone:Ox[l],verdict:t(`overview.arx_${l}`),evidence:(()=>{
      switch(l){
        case`ok`:return s===null?t(`overview.arx_ok_note_bare`):t(`overview.arx_ok_note`,{
          seconds:u(s,1)
        });case`late`:return o===`stale`?t(`overview.arx_stale_note`):t(`overview.arx_quiet_note`,{
          seconds:u(i-a,0)
        });case`down`:return t(o===`failed`?`overview.arx_down_listing`:`overview.arx_down_stream`);case`connecting`:return t(`overview.arx_connecting_note`);default:return yp(l)
      }
    })(),isAnnounced:!0
  })
}

function Ax({
  fleet:e
}){
  let{
    t,i18n:n
  }
  =N(),r=Jb(),{
    language:i
  }
  =n,a=e=>{
    let n=Sy(e),a=Hb(e),o=e=>{
      let t=e===null?void 0:a.get(e.id);
      return t===void 0?``:r(t)
    },s=Eh(e.length,i),c=Cy(e);
    switch(n){
      case`none`:return{
        tone:`idle`,verdict:t(`overview.fleet_none`),evidence:t(`overview.fleet_none_note`)
      };
      case`ok`:return{
        tone:`brand`,verdict:t(`overview.fleet_ok`),evidence:t(`overview.fleet_ok_note`,{
          count:s,name:o(c),cpu:Oh(c?.load?.cpu)
        })
      };
      case`busy`:{
        let n=xy(e),[r]=n,a=(r?.strains??[]).map(({
          on:e,share:n
        })=>`${t(`overview.strain_${e}`)} ${Oh(n)}`).join(` · `),s={
          name:o(r?.machine??null),readings:a
        };
        return{
          tone:`warn`,verdict:t(`overview.fleet_busy`),evidence:n.length>1?t(`overview.fleet_busy_many`,{
            ...s,count:Eh(n.length,i)
          }):t(`overview.fleet_busy_note`,s)
        }
      }
      case`down`:{
        let n=e.filter(e=>e.load===null),r=Eh(e.length-n.length,i),a=n.map(o).join(`、`);
        return{
          tone:`bad`,verdict:t(`overview.fleet_down`),evidence:t(`overview.fleet_down_note`,{
            name:a,up:r,count:s
          })
        }
      }
      default:return yp(n)
    }
  },o=(()=>{
    switch(e.status){
      case`loading`:return null;case`absent`:return{
        tone:`idle`,verdict:t(`overview.fleet_none`),evidence:t(`overview.fleet_none_note`)
      };case`failed`:return{
        tone:`bad`,verdict:t(`overview.fleet_failed`),evidence:t(`overview.fleet_failed_note`)
      };case`ready`:return e.isLive?a(e.value.hosts):{
        tone:`warn`,verdict:t(`overview.fleet_stale`),evidence:t(`overview.fleet_stale_note`,{
          time:cg(e.value.asOf,i)
        })
      };default:return yp(e)
    }
  })();
  return(0,V.jsx)(Dx,{
    name:t(`overview.lamp_fleet`),tone:o?.tone??`idle`,verdict:o?.verdict??null,evidence:o?.evidence??null,isAnnounced:!0
  })
}

function jx({
  signs:e
}){
  let{
    t
  }
  =N(),n=t(`overview.lamp_accounts`);
  if(e===null)return(0,V.jsx)(Dx,{
    name:n,tone:`idle`,verdict:null,evidence:null
  });
  let{
    total:r,able:i,serving:a
  }
  =e,o=e=>Oh(r===0?null:e/r);
  return(0,V.jsx)(Dx,{
    name:n,tone:r>0&&i===0?`bad`:`brand`,verdict:t(`overview.accounts_able`,{
      share:o(i)
    }),evidence:r===0?t(`overview.accounts_none`):t(`overview.accounts_serving_note`,{
      share:o(a)
    })
  })
}

function Mx({
  listing:e,fleet:t,signs:n
}){
  return(0,V.jsxs)(`ul`,{
    className:`${X.triple} ${X.lamps}`,children:[(0,V.jsx)(kx,{
      listing:e
    }),(0,V.jsx)(Ax,{
      fleet:t
    }),(0,V.jsx)(jx,{
      signs:n
    })]
  })
}

var Nx=[`h5`,`d7`,`f5`],Px={
  h5:e=>pv(e,`5h`),d7:e=>pv(e,`7d`),f5:gv
};

function Fx(e,t){
  return e.flatMap(e=>{
    if(!e.row.healthy)return[];let n=t(e.row.windows)?.utilization;return typeof n==`number`?[Math.min(1,Math.max(0,n))]:[]
  })
}

function Ix(e,t){
  let n=Fx(e,Px[t]);
  return{
    sampled:n.length,high:n.filter(e=>e>=cv).length,mean:n.length===0?null:n.reduce((e,t)=>e+t,0)/n.length
  }
}

function Lx(e,t){
  return e===null||e<=0?0:Math.min(t,Math.max(1,Math.round(e*t)))
}

var Rx=Math.round(cv*10);

function zx(e,t){
  let n=Fx(e,e=>pv(e,t)),r=Array.from({
    length:10
  },()=>0);
  for(let e of n){
    let t=Math.min(9,Math.floor(e*10));
    r[t]=(r[t]??0)+1
  }
  return{
    buckets:r,sampled:n.length,high:n.filter(e=>e>=cv).length,mean:n.length===0?null:n.reduce((e,t)=>e+t,0)/n.length
  }
}

function Bx(e){
  let t=e.filter(e=>e.state===`enabled`),n=e=>e.reduce((e,t)=>e+(t.row.activeConcurrent??0),0),r=t.filter(e=>e.row.maxConcurrent!==null),i=r.reduce((e,t)=>e+(t.row.maxConcurrent??0),0);
  return r.length===0||i===0?{
    active:n(t),ceiling:null,share:null
  }
  :{
    active:n(t),ceiling:i,share:n(r)/i
  }
}

var Vx=5,Hx=3,Ux=10,Wx=4,Gx=5,Kx=10*Gx-1;

function qx({
  name:e,spread:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=(0,_.useCallback)(e=>{
    if(t===null)return;let{
      context:n
    }
    =e,r=Math.max(...t.buckets),i=Xg(n,`brand`,e),a=Xg(n,`warn`,e),{
      quiet:o
    }
    =Yg();t.buckets.forEach((e,t)=>{
      let s=e===0?0:Math.max(1,Math.round(e/r*Ux));for(let e=0;e<Wx;e+=1){
        let r=(t*Gx+e)*Vx;for(let e=1;e<=Math.max(1,s);e+=1){
          let c=e<=s;n.fillStyle=c?t>=Rx?a:i:o,n.globalAlpha=c?e===s?1:Qg:$g,n.fillRect(r,(Ux-e)*Vx,Hx,Hx)
        }
      }
    })
  },[t]),a=t===null?null:{
    name:e,sampled:Eh(t.sampled,r.language),high:Eh(t.high,r.language),mean:Oh(t.mean)
  };
  return(0,V.jsxs)(`div`,{
    className:c_.cell,children:[(0,V.jsx)(`h3`,{
      className:c_.cellName,children:e
    }),a===null?(0,V.jsx)(Am,{
      width:243,height:48,rounded:6
    }):(0,V.jsx)(bg,{
      rows:Ux,pitch:Vx,dot:Hx,columns:Kx,paint:i,isAnimated:!1,label:n(`overview.spread_label`,a)
    }),(0,V.jsxs)(`div`,{
      className:c_.spreadScale,"aria-hidden":`true`,children:[(0,V.jsx)(`span`,{
        children:`0`
      }),(0,V.jsxs)(`span`,{
        className:c_.spreadEnds,children:[(0,V.jsx)(`span`,{
          children:`70%`
        }),(0,V.jsx)(`span`,{
          children:`100%`
        })]
      })]
    }),(0,V.jsx)(`p`,{
      className:c_.cellNote,children:a!==null&&(t?.sampled===0?n(`overview.spread_none`):n(`overview.spread_note`,a))
    })]
  })
}

function Jx({
  concurrency:e
}){
  let{
    t,i18n:n
  }
  =N(),r=e=>Eh(e,n.language);
  return(0,V.jsxs)(`div`,{
    className:c_.cell,children:[(0,V.jsx)(`h3`,{
      className:c_.cellName,children:t(`overview.concurrency`)
    }),(0,V.jsx)(`div`,{
      className:c_.cellValue,children:e===null?(0,V.jsx)(Am,{
        width:96,height:20,rounded:6
      }):(0,V.jsxs)(V.Fragment,{
        children:[r(e.active),e.ceiling!==null&&(0,V.jsxs)(`span`,{
          className:c_.cellOf,children:[`/ `,r(e.ceiling)]
        })]
      })
    }),(0,V.jsx)(s_,{
      share:e?.share??null,tone:`brand`,rows:2
    }),(0,V.jsx)(`p`,{
      className:c_.cellNote,children:e===null?``:e.share===null?t(`overview.concurrency_open`):t(`overview.concurrency_note`,{
        share:Oh(e.share)
      })
    })]
  })
}

function Yx({
  fiveHour:e,week:t,concurrency:n
}){
  let{
    t:r
  }
  =N();
  return(0,V.jsxs)(`section`,{
    className:X.section,"aria-labelledby":`overview-pressure`,children:[(0,V.jsx)(`div`,{
      className:X.sectionHead,children:(0,V.jsx)(`h2`,{
        className:X.sectionName,id:`overview-pressure`,children:r(`overview.pressure`)
      })
    }),(0,V.jsxs)(`div`,{
      className:X.triple,children:[(0,V.jsx)(qx,{
        name:r(`overview.window_5h`),spread:e
      }),(0,V.jsx)(qx,{
        name:r(`overview.window_7d`),spread:t
      }),(0,V.jsx)(Jx,{
        concurrency:n
      })]
    })]
  })
}

function Xx(e){
  return e.mine===null?`overseer`:e.payees.length>0?`lead`:`leaf`
}

var Zx=e=>e!==null&&!e.showsRates;

function Qx(e){
  return e===null?`unset`:e>0n?`pending`:e<0n?`overpaid`:`cleared`
}

var $x=e=>e.pending!==null&&e.pending>0n?e.pending:mu;

function eS(e){
  return e.toSorted((e,t)=>{
    if(e.pending===null!=(t.pending===null))return e.pending===null?1:-1;let[n,r]=[e.pending??mu,t.pending??mu];return n===r?e.email.localeCompare(t.email):n>r?-1:1
  })
}

function tS(e){
  let[t]=eS(e);
  return t!==void 0&&$x(t)>0n?t:null
}

var nS=e=>e.filter(e=>$x(e)>0n).length,rS=e=>hu(e.map(e=>e.pending!==null&&e.pending<0n?pu(-e.pending):mu));

function iS(e){
  let{
    mine:t,payees:n
  }
  =e,r=hu(n.map($x)),i=hu(n.map(e=>e.paid));
  if(t===null)return[{
    name:`pending`,unit:`yuan`,value:r
  },{
    name:`paid`,unit:`yuan`,value:i
  },{
    name:`due_today`,unit:`yuan`,value:hu(n.map(e=>e.dueToday??mu))
  },{
    name:`earned`,unit:`points`,value:n.reduce((e,t)=>e+t.earned,0)
  }];
  let a=t.account;
  if(n.length===0)return[{
    name:`receivable`,unit:`yuan`,value:a.pending
  },{
    name:`received`,unit:`yuan`,value:a.paid
  },{
    name:`due`,unit:`yuan`,value:a.due
  },{
    name:`earned`,unit:`points`,value:a.earned
  }];
  let o=hu(n.map(e=>e.due??mu));
  return[{
    name:`pending`,unit:`yuan`,value:r
  },{
    name:`paid`,unit:`yuan`,value:i
  },{
    name:`earned`,unit:`points`,value:a.earned
  },{
    name:`profit`,unit:`yuan`,value:a.due===null?null:pu(a.due-o)
  }]
}

function aS(e,t){
  return t.members.size===0?{
    ours:e,hosted:[]
  }
  :{
    ours:e.filter(e=>!t.members.has(e.id)),hosted:e.filter(e=>t.members.has(e.id))
  }
}

function oS(e,t){
  let n=Date.parse(e??``);
  return!Number.isNaN(n)&&n>=wh(t)&&n<=t
}

function sS(e,t){
  let n=t=>e.filter(t).length;
  return{
    arrivedToday:n(({
      row:e
    })=>oS(e.createdAt,t)),diedToday:n(({
      state:e,row:n
    })=>e===`fault`&&oS(n.lastError?.occurredAt??null,t)),deployFailed:n(({
      state:e
    })=>e===`deploy_failed`)
  }
}

function cS(e,t){
  let{
    accounts:n,earnings:r,now:i
  }
  =t,a=new Set(n.flatMap(({
    row:e
  })=>e.owner===null?[]:[e.owner.id])),o=e.map(({
    id:e
  })=>r?.byPartner.get(e)?.own.today??null);
  return{
    partners:e.length,earningToday:o.every(e=>e===null)?null:o.filter(e=>e!==null&&e>0).length,openedToday:e.filter(({
      createdAt:e
    })=>oS(e,i)).length,withoutAccounts:e.filter(({
      id:e
    })=>!a.has(e)).length
  }
}

var lS=10000n;

function uS(e){
  let t=e.payees.flatMap(e=>e.due===null?[]:[{
    due:e.due,row:e
  }]),n=hu(t.map(e=>e.due)),r=hu(t.map(({
    due:e,row:t
  })=>t.paid<e?t.paid:e)),i=tS(e.payees);
  return{
    clearedShare:n<=mu?null:Number(r*lS/n)/Number(lS),pending:nS(e.payees),most:i===null||i.pending===null?null:{
      account:i,amount:i.pending
    }
  }
}

function dS(e,t,n){
  let r=new Map;
  for(let{
    row:e
  }
  of t)e.owner!==null&&e.owner.email!==null&&r.set(e.owner.id,e.owner.email);
  for(let{
    id:t,email:n
  }
  of e)r.set(t,n);
  let i=new Map(e.flatMap(e=>{
    let t=Ud(e);return t===null?[]:[[e.id,t]]
  }));
  return e=>{
    if(e===null)return{
      name:n,hint:n
    };
    let t=r.get(e);
    return t===void 0?{
      name:e,hint:e
    }
    :{
      name:i.get(e)??Th(t),hint:t
    }
  }
}

var fS=[];

function pS({
  pool:e
}){
  let t=e.status===`ready`?e.value:null;
  return(0,_.useMemo)(()=>{
    if(t===null)return null;let{
      accounts:e,loadedAt:n
    }
    =t;return{
      serving:C_(e),signs:O_(e),fiveHour:zx(e,`5h`),week:zx(e,`7d`),concurrency:Bx(e),digest:sS(e,n)
    }
  },[t])
}

function mS(e,t){
  let{
    t:n
  }
  =N(),{
    pool:r,partners:i,earnings:a
  }
  =e,o=r.status===`ready`?r.value:null,s=i.status===`ready`?i.value:fS,c=n(`pool.platform_held`);
  return(0,_.useMemo)(()=>{
    let e=o?.loadedAt??0,r=dS(s,o?.accounts??[],c),i=e=>o===null?`loading`:e(o.accounts),l=e=>{
      if(a.status===`loading`||t===null)return`loading`;if(a.status===`failed`)return`unavailable`;let n=new Map([...a.value.byPartner].filter(([e])=>!t.has(e)));return eg({
        ...a.value,byPartner:n
      },e,r)
    },u={
      key:`today`,name:n(`overview.span_today`)
    },d={
      key:`total`,name:n(`overview.span_total`)
    };return{
      onboard:[{
        ...u,rows:i(t=>$h(t,{
          span:`today`,now:e
        },r))
      },{
        ...d,rows:i(t=>$h(t,{
          span:`total`,now:e
        },r))
      }],earned:[{
        ...u,rows:l(`today`)
      },{
        ...d,rows:l(`total`)
      }],life:[{
        key:`account`,name:n(`overview.span_account`),rows:i(t=>ng(t,e,r))
      },{
        key:`partner`,name:n(`overview.span_partner`),rows:i(t=>rg(t,e,r))
      }]
    }
  },[o,s,a,c,t,n])
}

function hS(){
  let{
    t:e,i18n:t
  }
  =N(),n=Ly(),r=bl(),i=pS(n),a=Kh(),o=a===`pending`||a===null?null:a.members,s=mS(n,o),{
    pool:c,partners:l,earnings:u,book:d,fleet:f
  }
  =n,p=c.status===`ready`?c.value:null,m={
    status:c.status===`ready`?c.value.isStale?`stale`:`ready`:c.status,tookMs:n.listingMs,openedAt:n.openedAt
  },h=(0,_.useMemo)(()=>{
    if(l.status===`failed`||a===null)return{
      status:`failed`
    };if(l.status!==`ready`||p===null||o===null)return{
      status:`loading`
    };let e=u.status===`ready`?u.value:null,{
      accounts:t,loadedAt:n
    }
    =p;return{
      status:`ready`,value:cS(l.value.filter(e=>!o.has(e.id)),{
        accounts:t,earnings:e,now:n
      })
    }
  },[l,u,p,a,o]),g=(0,_.useMemo)(()=>{
    if(d.status!==`ready`)return d;if(a===null)return{
      status:`failed`
    };if(o===null)return{
      status:`loading`
    };let e=d.value.payees.filter(e=>!o.has(e.id));return{
      status:`ready`,value:uS({
        ...d.value,payees:e
      })
    }
  },[d,a,o]);
  return(0,V.jsxs)(`div`,{
    className:Rm.page,"aria-busy":c.status===`loading`,children:[(0,V.jsxs)(`header`,{
      className:J.header,ref:r,children:[(0,V.jsxs)(`div`,{
        className:J.top,children:[(0,V.jsx)(`div`,{
          className:X.heading,"data-reveal":!0,children:(0,V.jsx)(`h1`,{
            className:`${J.title} ${X.title}`,"data-detect-ignore":`gradient-text`,children:e(`overview.title`)
          })
        }),(0,V.jsx)(`div`,{
          className:J.actions,children:(0,V.jsxs)(`button`,{
            type:`button`,className:`${Lm.ghostAction} ${J.refresh}`,onClick:n.reload,disabled:n.isRefreshing||c.status===`loading`,"aria-busy":n.isRefreshing,"aria-label":e(`pool.refresh`),children:[(0,V.jsx)(rp,{
              size:14,className:n.isRefreshing?Lm.spinning:void 0
            }),(0,V.jsx)(`span`,{
              children:e(`pool.refresh`)
            })]
          })
        })]
      }),(0,V.jsx)(`p`,{
        className:X.readAt,children:p!==null&&e(`overview.read_at`,{
          time:cg(p.loadedAt,t.language)
        })
      })]
    }),c.status===`failed`?(0,V.jsxs)(`div`,{
      className:`empty-state`,children:[(0,V.jsxs)(`div`,{
        className:`empty-content`,children:[(0,V.jsx)(`div`,{
          className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
            size:20
          })
        }),(0,V.jsx)(`div`,{
          role:`alert`,children:(0,V.jsx)(`div`,{
            className:`empty-title`,children:e(`overview.load_failed`)
          })
        })]
      }),(0,V.jsx)(`div`,{
        className:`empty-action`,children:(0,V.jsx)(K,{
          onClick:n.reload,children:e(`common.retry`)
        })
      })]
    }):(0,V.jsxs)(`div`,{
      className:X.band,children:[(0,V.jsxs)(`section`,{
        className:X.section,"aria-labelledby":`overview-engine`,children:[(0,V.jsx)(`div`,{
          className:X.sectionHead,children:(0,V.jsx)(`h2`,{
            className:X.sectionName,id:`overview-engine`,children:e(`overview.engine`)
          })
        }),(0,V.jsx)(Cb,{
          serving:i?.serving??null,readAt:p?.loadedAt??null
        })]
      }),(0,V.jsx)(Mx,{
        listing:m,fleet:f,signs:i?.signs??null
      })]
    }),(0,V.jsx)(bx,{
      fleet:f
    }),c.status!==`failed`&&(0,V.jsxs)(`div`,{
      className:X.band,children:[(0,V.jsx)(Yx,{
        fiveHour:i?.fiveHour??null,week:i?.week??null,concurrency:i?.concurrency??null
      }),(0,V.jsx)(v_,{
        pool:i?.digest??null,partners:h,settlement:g
      }),(0,V.jsx)(d_,{
        ...s
      })]
    })]
  })
}

function gS(){
  return q(e=>e.principal)?.role===`admin`?(0,V.jsx)(hS,{}):(0,V.jsx)(As,{
    to:`/pool`,replace:!0
  })
}

var _S=[{
  path:`/overview`,element:(0,V.jsx)(gS,{})
}];

function vS(){
  let e=q(e=>e.principal?.role);
  return(0,V.jsx)(As,{
    to:e===`admin`?`/overview`:`/pool`,replace:!0
  })
}

var yS={
  today:{
    pace:1,fill:1
  },total:{
    pace:1,fill:1
  },enabled:{
    pace:1,fill:1
  },limited:{
    pace:1,fill:1
  },fault:{
    pace:.5,fill:.85
  },disabled:{
    pace:0,fill:.7
  },deploying:{
    pace:2,fill:1
  },deploy_failed:{
    pace:1,fill:1
  },gold:{
    pace:1,fill:1
  }
},bS=3,xS=1,SS={
  corner:{
    floor:.85,power:.5,dim:.8,lift:.6
  },swash:{
    floor:.58,power:.7,dim:.72,lift:.5
  },block:{
    floor:.62,power:.7,dim:.72,lift:.5
  }
},CS=1.3,wS=4,TS=(e,t,n)=>{
  let r=Math.min(1,Math.max(0,(n-e)/(t-e)));
  return r*r*(3-2*r)
};

function ES(e,t,n,r){
  let i=t.columns===1?0:n/(t.columns-1),a=t.rows===1?0:r/(t.rows-1);
  switch(e){
    case`corner`:return TS(0,1,1-Math.hypot(i,a)/CS);
    case`swash`:return TS(0,1,1-Math.abs(a-(.78-.26*i))/.5)*Math.sin(Math.PI*i)**.4;
    case`block`:return 1;
    default:return yp(e)
  }
}

function DS(e,t,n,r){
  let{
    seed:i
  }
  =n,{
    pace:a,fill:o
  }
  =yS[n.tone],{
    floor:s,power:c,dim:l,lift:u
  }
  =SS[n.shape],d=a===0?wS:r*a;
  e.clearRect(0,0,t.columns*t.pitch,t.rows*t.pitch);
  for(let r=0;r<t.rows;r+=1)for(let a=0;a<t.columns;a+=1){
    let f=ES(n.shape,t,a,r);
    if(f<.04)continue;
    let p=Ug(t.columns-a,r,d,i),m=1.2+2*Vg(a,r,i+17),h=Math.floor(d/m+Vg(a,r,i+19)),g=(s+(1-s)*TS(.25,.75,p))*f**c*o;
    Vg(a*131+h,r,i+23)>=g||(e.globalAlpha=(p>.6&&Vg(a*131+h,r,i+29)<.4?xS:l)*(u+(1-u)*f),e.fillRect(a*t.pitch,r*t.pitch,bS,bS))
  }
  e.globalAlpha=1
}

function OS(e){
  let{
    tone:t,shape:n,columns:r,rows:i,pitch:a,seed:o,className:s
  }
  =e,c=(0,_.useRef)(null);
  (0,_.useEffect)(()=>{
    let e=c.current,s=e?.getContext(`2d`);if(!e||!s)return;let l=r*a,u=i*a,d=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(l*d),e.height=Math.round(u*d),s.setTransform(d,0,0,d,0,0);let f=getComputedStyle(e),p=s.createLinearGradient(0,0,l,u);p.addColorStop(0,f.getPropertyValue(`--dot-from`).trim()),p.addColorStop(.6,f.getPropertyValue(`--dot-via`).trim()),p.addColorStop(1,f.getPropertyValue(`--dot-to`).trim()),s.fillStyle=p;let m=e=>DS(s,{
      columns:r,rows:i,pitch:a
    },{
      tone:t,shape:n,seed:o
    },e);if(yS[t].pace===0||yl())m(wS);else return m(performance.now()/1e3),vg(m)
  },[t,n,r,i,a,o]);
  let l={
    width:r*a,height:i*a
  };
  return(0,V.jsx)(`span`,{
    className:s,"data-dots":t,"aria-hidden":`true`,style:{
      display:`block`,...l
    },children:(0,V.jsx)(`canvas`,{
      ref:c,style:{
        display:`block`,...l
      }
    })
  })
}

var kS={
  deploy:`DeployButton-module__deploy___-wL3-`,emblem:`DeployButton-module__emblem___C-xH8`,plain:`DeployButton-module__plain___E8ubO`
},AS={
  columns:6,rows:4,pitch:5
};

function jS({
  onOpen:e,label:t
}){
  let{
    t:n
  }
  =N();
  return(0,V.jsxs)(`button`,{
    type:`button`,className:kS.deploy,onClick:t=>{
      t.currentTarget.focus(),e()
    },"aria-haspopup":`dialog`,children:[(0,V.jsx)(OS,{
      className:kS.emblem,tone:`today`,shape:`block`,seed:47,...AS
    }),(0,V.jsx)(`span`,{
      children:t??n(`deploy.open`)
    })]
  })
}

var MS=5e3;

function NS({
  name:e,hint:t,mark:n,children:r,icon:Icon,tone,secondary,secondaryHint
}){
  return(0,V.jsxs)(`div`,{
    className:J.stat,title:t,"data-kpi-tone":tone,children:[(0,V.jsxs)(`dt`,{
      className:J.statName,children:[Icon&&(0,V.jsx)(Icon,{size:15,"aria-hidden":true,className:`console-kpi-icon`}),n,e]
    }),(0,V.jsxs)(`dd`,{
      className:J.statValue,children:[r,secondary&&(0,V.jsx)(`span`,{className:`console-kpi-secondary`,title:secondaryHint,children:secondary})]
    })]
  })
}

function PS({
  headline:e,layout:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=sv(e=>e.total),a=sv(e=>e.paces),o=sv(e=>e.heardAt),s=tv(a,Math.max(y_(MS),o)),c=e=>Dh(e,r.language),l=t=>e===`pending`?(0,V.jsx)(Am,{
    width:52,height:20,rounded:6
  }):t(e);
  return(0,V.jsxs)(`dl`,{
    className:`${J.stats} ${t===`paired`?J.statsPaired:J.statsRow}`,"data-figures":t,children:[(0,V.jsx)(NS,{
      name:n(`pool.stat_accounts`),icon:Layers3,tone:`accounts`,children:l(e=>c(e.total)),
      secondary:e===`pending`?null:`${n(`pool.stat_available`)} ${c(e.serving)} / ${c(e.healthy)}`,secondaryHint:n(`pool.stat_available_hint`)
    }),(0,V.jsx)(NS,{
      name:n(`pool.stat_rpm`),hint:n(`pool.stat_rpm_hint`),icon:Activity,mark:(0,V.jsx)(`span`,{
        className:J.live,"data-live":i!==null,"aria-hidden":`true`
      }),children:c(i),secondary:`${n(`pool.stat_recent`)} ${c(s?.value??null)}`,secondaryHint:n(s?.settled===!1?`pool.recent_warming`:`pool.stat_recent_hint`)
    }),(0,V.jsx)(NS,{
      name:n(`pool.stat_limited`),hint:n(`pool.stat_limited_hint`),icon:TriangleAlert,tone:`warn`,children:l(e=>c(e.limited))
    }),(0,V.jsx)(NS,{
      name:n(`pool.stat_dead`),hint:n(`pool.stat_dead_hint`),icon:CircleAlert,tone:`fault`,children:l(e=>c(e.dead))
    })]
  })
}

var FS=e=>`/ac3/partners/${e}/clearance`,IS={
  timeoutMs:6e4
},LS={
  read:async e=>Iu.parse(await G(FS(e),IS)),begin:async e=>{
    let t=JSON.stringify({
      confirmed:!0
    });
    return Iu.parse(await G(FS(e),{
      method:`POST`,body:t,...IS
    }))
  }
},RS=2e3,zS=e=>e instanceof U||e instanceof W||e instanceof bt,BS={
  said:null,hasFailed:!1,isSending:!1,refusal:null
};

function VS(e,t){
  let[n,r]=(0,_.useState)(BS),i=n.said?.state===`clearing`;
  return(0,_.useEffect)(()=>{
    if(r(BS),e===null)return;let t=!0;return LS.read(e).then(e=>{
      t&&r({
        ...BS,said:e
      })
    },e=>{
      if(!zS(e))throw e;e instanceof U&&e.status===401&&q.getState().expire(),t&&r({
        ...BS,hasFailed:!0
      })
    }),()=>{
      t=!1
    }
  },[e]),(0,_.useEffect)(()=>{
    if(e===null||!i)return;let n=!0,a=async()=>{
      try{
        let i=await LS.read(e);if(!n)return;r(e=>({
          ...e,said:i
        })),i.state===`cleared`&&t()
      }catch(e){
        if(!zS(e))throw e
      }
    },o=setInterval(()=>void a(),RS);return()=>{
      n=!1,clearInterval(o)
    }
  },[e,i,t]),{
    state:n,begin:(0,_.useCallback)(async()=>{
      if(e!==null){
        r(e=>({
          ...e,isSending:!0,refusal:null
        }));try{
          let n=await LS.begin(e);r({
            ...BS,said:n
          }),t()
        }catch(e){
          if(!zS(e))throw e;e instanceof U&&e.status===401&&q.getState().expire();let t=e instanceof U&&e.code===`pending_unsettled`;r(e=>({
            ...e,isSending:!1,refusal:t?`pending`:`other`
          }))
        }
      }
    },[e,t]),refuse:(0,_.useCallback)(()=>r(e=>({
      ...e,refusal:`pending`
    })),[])
  }
}

export { f_, VS, Ub, hx, J_, bv, OS, Tb, Xv, q_, kS, Av, B_, $v, jS, PS, sv, Ky, qy, Jy, Lx, Nx, Ix, Fb, Db, Rb, Sv, wv, pv, kb, fv, gv, Ob, W_, U_, y_, $_, hv, uv, _v, Eb, wb, Uv, Nv, Pv, Fv, Vv, h_, sy, ry, p_, Qx, cy, Zx, m_, rS, g_, nS, iS, oy, aS, eS, Xx, tS, My, _S, vS };
