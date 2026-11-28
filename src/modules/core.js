// @ts-nocheck
// Module: core — Core Contracts, Fen Math, API Client, SSE Streams, Brand & AppShell
import { Bell, ChevronDown, Search } from 'lucide-react';
import { _, V, pl, er, zStr as z, Yn, B, $n, Zn, ir, Qn, ar, rr, Xn, F, or, nr, tr, st, N, sr, lt, cr, fr, lr, hr, ct, bt, yc, Ko, js } from '../lib/vendor-runtime';

var ml=24,hl=.45,gl=.07,_l=.36,vl=e=>1-(1-e)**4,yl=()=>typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

function bl(e=0){
  let t=(0,_.useRef)(null);
  return(0,_.useLayoutEffect)(()=>{
    let n=t.current;if(!n)return;let r=Array.from(n.querySelectorAll(`[data-reveal]`));if(r.length===0)return;let i=e=>e.dataset.reveal===`scale`?`translate3d(0, ${ml}px, 0) scale(0.97)`:`translate3d(0, ${ml}px, 0)`,a=e=>e.dataset.reveal===`scale`?`translate3d(0, 0, 0) scale(1)`:`translate3d(0, 0, 0)`,o=e=>{
      e.style.removeProperty(`opacity`),e.style.removeProperty(`transform`),e.style.removeProperty(`will-change`)
    },s=()=>r.forEach(o);if(yl()||typeof IntersectionObserver>`u`){
      s();return
    }
    r.forEach(e=>{
      e.style.opacity=`0`,e.style.transform=i(e),e.style.willChange=`opacity, transform`
    });let c=r.length>1?Math.min(gl,_l/(r.length-1)):gl,l=[],u=new IntersectionObserver(t=>{
      t.forEach(t=>{
        t.isIntersecting&&(u.unobserve(t.target),r.forEach((t,n)=>{
          let r=pl(t,{
            opacity:[0,1],transform:[i(t),a(t)]
          },{
            duration:hl,delay:e+n*c,ease:vl
          });l.push(r),r.finished.then(()=>o(t)).catch(()=>void 0)
        }))
      })
    },{
      rootMargin:`0px 0px -12% 0px`,threshold:.05
    });return u.observe(n),()=>{
      u.disconnect(),l.forEach(e=>e.stop()),s()
    }
  },[e]),t
}

var xl=e=>{
  let t,n=new Set,r=(e,r)=>{
    let i=typeof e==`function`?e(t):e;
    if(!Object.is(i,t)){
      let e=t;
      t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))
    }
  },i=()=>t,a={
    setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))
  },o=t=e(r,i,a);
  return a
},Sl=(e=>e?xl(e):xl),Cl=e=>e;

function wl(e,t=Cl){
  let n=_.useSyncExternalStore(e.subscribe,_.useCallback(()=>t(e.getState()),[e,t]),_.useCallback(()=>t(e.getInitialState()),[e,t]));
  return _.useDebugValue(n),n
}

var Tl=e=>{
  let t=Sl(e),n=e=>wl(t,e);
  return Object.assign(n,t),n
},El=(e=>e?Tl(e):Tl),Dl={
  successHold:260,splashMin:700,exit:320,reveal:640
},Ol={
  successHold:260,splashMin:700,exit:150,reveal:200
},kl=e=>e?Ol:Dl,Al=El(e=>({
  phase:`idle`,revealId:0,startReveal:()=>e(e=>({
    phase:`revealing`,revealId:e.revealId+1
  })),finishReveal:()=>e({
    phase:`idle`
  })
})),jl=()=>Al.getState().phase===`revealing`;

function Nl(){
  let e=Al(e=>e.phase),t=Al(e=>e.revealId),n=Al(e=>e.finishReveal);
  return(0,_.useEffect)(()=>{
    if(e!==`revealing`)return;let{
      reveal:t
    }
    =kl(yl()),r=window.setTimeout(n,t+120);return()=>window.clearTimeout(r)
  },[e,t,n]),e===`revealing`?(0,V.jsx)(Pl,{
    onDone:n
  },t):null
}

function Pl({
  onDone:e
}){
  return(0,V.jsx)(`div`,{
    className:`login-reveal-veil`,"aria-hidden":`true`,onAnimationEnd:t=>{
      t.target===t.currentTarget&&e()
    }
  })
}

var Fl=er([z(),Yn().int().nonnegative().transform(String)]).pipe(z().regex(/^\d{1,20}$/)),Il=Fl.brand(`ProviderId`),Ll=Fl.brand(`UserId`);

function Rl(e,t={}){
  let n=JSON.stringify(t).slice(1);
  return`{"ids":[${e.join(`,`)}]${n===`}`?``:`,`}${n}`
}

var zl=B({
  remarks:$n(B({
    id:Il,remark:z()
  }))
}).passthrough().transform(e=>e.remarks),Bl=B({
  partners:$n(B({
    id:Ll,email:z(),parent_supplier_id:Ll.nullish()
  }))
}).passthrough().transform(e=>e.partners.map(e=>({
  id:e.id,email:e.email,parentId:e.parent_supplier_id??null
}))),H=z().nullish().transform(e=>e??null),Vl=er([Yn(),z().regex(/^\d+$/).transform(Number)]).nullish().transform(e=>e??0),Hl=Yn().nullish().transform(e=>e??null),Ul=er([Yn(),z().transform(Number)]).nullish().transform(e=>typeof e==`number`&&Number.isFinite(e)?e:0),Wl=B({
  healthy:Zn(),model:H,latency_ms:Hl,message:H,checked_at:H
}).passthrough().transform(e=>({
  healthy:e.healthy,model:e.model,latencyMs:e.latency_ms,message:e.message,checkedAt:e.checked_at
})),Gl=B({
  updated_count:Vl,deleted_count:Vl,provider_count:Vl
}).passthrough().transform(e=>Math.max(e.updated_count,e.deleted_count,e.provider_count)),Kl=B({
  cleanup_pending:ir(!0),provider_ids:$n(er([z(),Yn()]))
}).passthrough(),ql=B({
  updated:$n(Qn())
}).passthrough().transform(e=>e.updated.length),Jl=[`append`,`replace`,`clear`],Yl=`#6366f1`;

B({
  mode:ar(Jl),values:$n(B({
    name:z().min(1),color:z().min(1)
  }))
});

var Xl=(e,t)=>({
  mode:e,values:e===`clear`?[]:t.map(e=>({
    name:e,color:Yl
  }))
}),Zl=B({
  message:z()
}).passthrough(),Ql=/^alliance-scope-\d{1,20}$/,$l=e=>Ql.test(e),eu=e=>{
  let t=Ql.test(e)?e.slice(15):null;
  return t===null||/^0+$/.test(t)?null:t
},tu={
  tops:new Set,members:new Set,topOf:new Map
},nu=z().regex(/^\d{1,20}$/),ru=B({
  tops:$n(nu),members:$n(nu),top_of:rr(nu,nu).nullish()
}).passthrough().transform(e=>({
  tops:new Set(e.tops),members:new Set(e.members),topOf:new Map(Object.entries(e.top_of??{}))
}));

function iu(e,t){
  if(t.tops.size===0)return null;
  let n=e.owner===null?void 0:t.topOf.get(e.owner.id);
  if(n!==void 0)return n;
  let r=e.branch.findLast(e=>t.tops.has(e));
  return r===void 0?e.owner!==null&&t.members.has(e.owner.id)?e.owner.id:null:t.topOf.get(r)??r
}

var au=B({
  keys:rr(z().regex(/^\d{1,20}$/),z().min(1))
}).passthrough().transform(e=>new Map(Object.entries(e.keys))),ou=[`Forbidden`,`Unauthorized`];

[...ou];

var su=864e5,cu=new Map;

function lu(e,t){
  let{
    healthy:n,lastError:r,deploymentStatus:i
  }
  =e;
  if(n||r===null)return null;
  let a=t.get(r.type);
  if(a===void 0||i===`deploying`||i===`failed`)return null;
  let o=Date.parse(r.occurredAt??``);
  return Math.max(Number.isNaN(o)?a:o,a)+su
}

function uu(e,t){
  let n=Math.max(0,Math.ceil((e-t)/1e3)),r=e=>String(e).padStart(2,`0`);
  return`${r(Math.floor(n/3600))}h:${r(Math.floor(n/60)%60)}m:${r(n%60)}s`
}

var du=B({
  armed_at:z().nullable(),armed:rr(z(),z()).nullish()
}).passthrough().transform(e=>{
  let{
    armed_at:t
  }
  =e,n=(e.armed==null?ou.flatMap(e=>t===null?[]:[[e,t]]):Object.entries(e.armed)).flatMap(([e,t])=>{
    let n=Date.parse(t);return Number.isNaN(n)?[]:[[e,n]]
  });return{
    armed:new Map(n)
  }
}),fu=Xn().brand(`Fen`),pu=e=>fu.parse(e),mu=pu(0n),hu=e=>pu(e.reduce((e,t)=>e+t,0n)),gu=pu(9999999999n);

function _u(e,t){
  let n=/^(\d+)(?:\.(\d+))?$/.exec(e);
  if(n===null)return null;
  let r=n[2]??``;
  return r.length>t?null:BigInt(`${n[1]}${r.padEnd(t,`0`)}`)
}

function vu(e,t){
  let n=String(e).padStart(t+1,`0`),r=n.slice(0,n.length-t),i=n.slice(n.length-t).replace(/0+$/,``);
  return i===``?r:`${r}.${i}`
}

var yu=(e,t)=>(e+t/2n)/t;

function bu(e){
  let t=e.startsWith(`-`),n=_u(t?e.slice(1):e,2);
  return n===null?null:pu(t?-n:n)
}

function xu(e){
  let t=e<0n?-e:e,n=`${t/100n}.${String(t%100n).padStart(2,`0`)}`;
  return e<0n?`-${n}`:n
}

var Su=/^\d{1,8}(?:\.\d{1,2})?$/,Cu=/^\d{1,10}(?:\.\d{1,6})?$/,wu=/^\d{1,3}(?:\.\d{1,4})?$/,Tu=e=>/[1-9]/.test(e),Eu=e=>Su.test(e)&&Tu(e),Du=e=>Cu.test(e)&&Tu(e),Ou=e=>wu.test(e)&&Tu(e),ku={
  low:60000n,high:85000n
};

function Au(e){
  let t=_u(e,4);
  return t!==null&&t>=ku.low&&t<=ku.high
}

var ju=10n**8n;

function Mu(e,t){
  if(!Du(e)||!Ou(t))return null;
  let n=_u(e,6),r=_u(t,4);
  return n===null||r===null?null:pu(yu(n*r,ju))
}

function Nu(e,t){
  let n=Ou(t)?_u(t,4):null;
  if(n===null||e<=0n)return null;
  let r=vu((e*ju+n-1n)/n,6);
  return Du(r)?r:null
}

var Pu=[`open`,`clearing`,`cleared`],Fu=z().transform((e,t)=>{
  let n=bu(e);return n===null?(t.addIssue({
    code:F.custom,message:`not an amount in yuan`
  }),or):n
}),Iu=B({
  state:ar(Pu),accounts:Yn().int().nonnegative(),accounts_at_start:Yn().int().nonnegative().nullable(),below:B({
    partners:Yn().int().nonnegative(),accounts:Yn().int().nonnegative()
  }),pending:Fu.nullable(),owed_below:B({
    partners:Yn().int().nonnegative(),total:Fu
  }),blocked:ir(`pending`).nullable()
}).passthrough().transform(e=>({
  state:e.state,accounts:e.accounts,accountsAtStart:e.accounts_at_start,below:e.below,pending:e.pending,owedBelow:e.owed_below,blocked:e.blocked
}));

B({
  confirmed:ir(!0)
});

var Lu=B({
  id:z().min(1),authorization_url:z().url(),expires_at:Yn().int()
}).passthrough().transform(e=>({
  id:e.id,authorizationUrl:e.authorization_url,expiresAt:e.expires_at
})),Ru=[`pending`,`accepted`,`running`,`succeeded`,`failed`,`cancelled`],zu=Qn().transform(e=>Ru.find(t=>t===e)??null),Bu=B({
  id:z().min(1),status:zu,message:H,error:H,name:H,provider_id:Il.nullish()
}).passthrough().transform(e=>({
  id:e.id,status:e.status,message:e.message,error:e.error,name:e.name,providerId:e.provider_id??null
})),Vu=B({
  open:Zn()
}).passthrough().transform(e=>e.open),Hu=z().regex(/^\d+(?:\.\d+)?$/).transform(Number),Uu=B({
  today:Hu.nullable(),total:Hu
}),Wu=B({
  as_of:z(),all:Uu.nullable(),partners:$n(B({
    id:Ll,own:Uu,branch:Uu
  }))
}).passthrough().transform(e=>({
  asOf:e.as_of,all:e.all,byPartner:new Map(e.partners.map(({
    id:e,own:t,branch:n
  })=>[e,{
    own:t,branch:n
  }]))
})),Gu=16,Ku=/-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/y;

function qu(e,t=``){
  let n=``,r=0,i=!1;
  for(;r<e.length;){
    let a=e.charAt(r);
    if(i){
      let t=a===`\\`;
      n+=t?e.slice(r,r+2):a,r+=t?2:1,i=a!==`"`;
      continue
    }
    Ku.lastIndex=r;
    let o=Ku.exec(e)?.[0];
    if(o===void 0){
      i=a===`"`,n+=a,r+=1;
      continue
    }
    let s=o.replace(`-`,``),c=/^\d+$/.test(s)&&s.length>=Gu;
    n+=c?`"${t}${o}"`:o,r+=o.length
  }
  return JSON.parse(n)
}

var Ju=Yn().min(0).max(1),Yu=Yn().nonnegative(),Xu=Yn().int().nonnegative(),Zu=B({
  cpu_model:z().min(1).max(200),sockets:Yn().int().positive(),cores:Xu,threads:Xu,memory_bytes:Yu,disk_bytes:Yu
}),Qu=B({
  cpu:Ju,memory_used_bytes:Yu,disk_used_bytes:Yu,load_averages:nr([Yu,Yu,Yu]),uptime_seconds:Yu
}),$u=B({
  on:Zn(),switched_by:z().nullable(),switched_at:z().nullable(),probed_cpu:Ju.nullable(),probed_at:z().nullable(),at_cpu_ceiling:Zn().nullable(),probation:B({
    healthy:Yn().int().min(0),needed:Yn().int().min(1)
  }).nullish()
}),ed=e=>e==null?null:{
  isOn:e.on,switchedBy:e.switched_by,switchedAt:e.switched_at,probedCpu:e.probed_cpu,probedAt:e.probed_at,isAtCpuCeiling:e.at_cpu_ceiling,probation:e.probation??null
};

B({
  address:z().min(1).max(64),hardware:Zu,vms:Xu,load:Qu
}),B({
  every_seconds:Yn().int().positive()
});

var td=B({
  id:z().min(1),label:z().min(1),address:z().nullable(),hardware:Zu.nullable(),vms:Xu,load:Qu.extend({
    sampled_at:z()
  }).nullable(),placement:$u.nullish()
}).refine(e=>e.hardware!==null||e.load===null).transform(e=>({
  id:e.id,label:e.label,address:e.address,hardware:e.hardware===null?null:{
    cpuModel:e.hardware.cpu_model,sockets:e.hardware.sockets,cores:e.hardware.cores,threads:e.hardware.threads,memoryBytes:e.hardware.memory_bytes,diskBytes:e.hardware.disk_bytes
  },vms:e.vms,load:e.load===null?null:{
    cpu:e.load.cpu,memoryUsedBytes:e.load.memory_used_bytes,diskUsedBytes:e.load.disk_used_bytes,averages:e.load.load_averages,uptimeSeconds:e.load.uptime_seconds,sampledAt:e.load.sampled_at
  },placement:ed(e.placement)
})),nd=B({
  as_of:z(),synthetic:Zn(),hosts:$n(td),engine:ar([`unreachable`,`answering`]).optional(),cpu_ceiling:Ju.nullish()
}).passthrough().transform(e=>({
  asOf:e.as_of,isSynthetic:e.synthetic,hosts:e.hosts,engine:e.engine??`none`,cpuCeiling:e.cpu_ceiling??null
}));

B({
  on:Zn()
}).strict();

var rd=Yn().int().positive(),id=B({
  id:Il,name:z(),owner_id:Ll.nullable(),owner_email:H,tier:H,error:B({
    type:z().min(1),code:H,message:H,occurred_at:H
  }),tags:$n(z()),requests:Yn(),points:Yn(),earned_before:Yn(),lives:rd,enlisted_at:H,died_at:z()
}),ad=B({
  as_of:z(),ghosts:$n(id),carried:$n(B({
    id:Il,points:Yn(),lives:rd
  }))
}).transform(e=>({
  asOf:e.as_of,carried:e.carried,ghosts:e.ghosts.map(e=>({
    id:e.id,name:e.name,owner:e.owner_id===null?null:{
      id:e.owner_id,email:e.owner_email
    },tier:e.tier,error:{
      type:e.error.type,code:e.error.code,message:e.error.message,occurredAt:e.error.occurred_at
    },tags:e.tags,requests:e.requests,points:e.points,earnedBefore:e.earned_before,lives:e.lives,enlistedAt:e.enlisted_at,diedAt:e.died_at
  }))
})),od=B({
  http_proxy:H
}).passthrough().transform(e=>({
  httpProxy:e.http_proxy===``?null:e.http_proxy
})),sd=B({
  type:z().min(1),code:H,message:H,occurred_at:H
}).passthrough(),cd=`unrecognized`,ld=Qn().transform(e=>{
  if(e==null)return null;let t=sd.safeParse(e);if(t.success){
    let{
      type:e,code:n,message:r,occurred_at:i
    }
    =t.data;return{
      type:e,code:n,message:r,occurredAt:i
    }
  }
  return{
    type:cd,code:null,message:(typeof e==`string`?e:JSON.stringify(e)).slice(0,400),occurredAt:null
  }
}),ud=[`deploying`,`succeeded`,`failed`],dd=Qn().transform(e=>ud.find(t=>t===e)??null),fd=B({
  window_type:H,model_pattern:H
}).passthrough(),pd=B({
  id:er([z(),Yn()]).transform(String),config:fd.nullish(),utilization:Hl,window_start:H,window_end:H,last_request_at:H,request_count:Vl
}).passthrough().transform(e=>({
  id:e.id,type:e.config?.window_type??null,modelPattern:e.config?.model_pattern??null,utilization:e.utilization,windowStart:e.window_start,windowEnd:e.window_end,lastRequestAt:e.last_request_at,requestCount:e.request_count
})),md=er([z(),B({
  name:z()
}).passthrough().transform(e=>e.name)]),hd=B({
  id:Il,name:z(),healthy:Zn(),kind:H,base_url:H,http_proxy:H,last_error:ld,last_checked_at:H,deployment_status:dd,deployment_message:H,available_from:H,available_until:H,created_by_user_id:Ll.nullish(),created_by_email:H,tags:$n(md).nullish(),weight:Hl,max_concurrent:Hl,active_concurrent:Hl,rpm:Hl,rpm_limit:Hl,rps_limit:Hl,subscription_tier:H,total_points_consumed:Ul,total_requests:Vl,refused_requests:Vl,total_input_tokens:Vl,total_output_tokens:Vl,total_cache_creation_tokens:Vl,total_cache_read_tokens:Vl,window_states:$n(pd).nullish(),created_at:H,updated_at:H,deleted_at:H
}).passthrough().transform(e=>({
  id:e.id,name:e.name,kind:e.kind,baseUrl:e.base_url,httpProxy:e.http_proxy,healthy:e.healthy,lastError:e.last_error,lastCheckedAt:e.last_checked_at,deploymentStatus:e.deployment_status,deploymentMessage:e.deployment_message,availableFrom:e.available_from,availableUntil:e.available_until,owner:e.created_by_user_id===null||e.created_by_user_id===void 0?null:{
    id:e.created_by_user_id,email:e.created_by_email
  },tags:(e.tags??[]).filter(e=>!$l(e)),branch:(e.tags??[]).flatMap(e=>eu(e)??[]),weight:e.weight,maxConcurrent:e.max_concurrent,activeConcurrent:e.active_concurrent,rpm:e.rpm,rpmLimit:e.rpm_limit,rpsLimit:e.rps_limit,subscriptionTier:e.subscription_tier,usage:{
    points:e.total_points_consumed,requests:e.total_requests,refusedRequests:e.refused_requests,inputTokens:e.total_input_tokens,outputTokens:e.total_output_tokens,cacheCreationTokens:e.total_cache_creation_tokens,cacheReadTokens:e.total_cache_read_tokens
  },windows:e.window_states??[],createdAt:e.created_at,updatedAt:e.updated_at,deletedAt:e.deleted_at
})),gd=B({
  providers:$n(Qn()),total:Vl,offset:Vl,limit:Vl
}).passthrough().transform(e=>{
  let t=e.providers.map(e=>hd.safeParse(e)),n=t.flatMap(e=>e.success?[e.data]:[]);return{
    rows:n,unreadable:t.length-n.length,total:e.total,offset:e.offset,limit:e.limit
  }
}),_d=[`snapshot`,`patch`,`complete`,`error`],vd=B({
  total_rpm:Vl
}).passthrough(),yd=B({
  id:Il,rpm:Hl
}).passthrough(),bd=B({
  id:Il,total_requests:er([Yn(),z().regex(/^\d+$/).transform(Number)]),total_points_consumed:Ul,window_states:$n(pd).nullish()
}).passthrough(),xd=B({
  providers:$n(Qn()).nullish(),upserts:$n(Qn()).nullish(),ids:$n(Il).nullish(),total:Yn().int().nonnegative().nullish()
}).passthrough(),Sd=e=>e?.providers??e?.upserts??[];

function Cd(e){
  return Sd(e).flatMap(e=>{
    let t=yd.safeParse(e);return t.success&&t.data.rpm!==null?[{
      id:t.data.id,rpm:t.data.rpm
    }]:[]
  })
}

function wd(e){
  return Sd(e).flatMap(e=>{
    let t=bd.safeParse(e);if(!t.success)return[];let{
      id:n,total_requests:r,total_points_consumed:i,window_states:a
    }
    =t.data;return[{
      id:n,requests:r,points:i,windows:a??[]
    }]
  })
}

function Td(e){
  return e?.ids?e.ids:e?.providers?e.providers.flatMap(e=>{
    let t=yd.safeParse(e);return t.success?[t.data.id]:[]
  }):null
}

var Ed=B({
  kind:z(),data:B({
    window_summary:vd.nullish(),list:xd.nullish()
  }).passthrough().nullish()
}).passthrough().transform(e=>({
  kind:_d.find(t=>t===e.kind)??null,rpm:e.data?.window_summary?.total_rpm??null,rates:Cd(e.data?.list),count:e.data?.list?.total??null,ids:Td(e.data?.list),pulses:wd(e.data?.list)
})),Dd=z().refine(e=>!Number.isNaN(Date.parse(e)),`not a moment`),Od=B({
  id:z().min(1),text:z().trim().min(1).max(200),until:Dd
}),kd=B({
  notices:$n(Od)
}).passthrough().transform(e=>e.notices),Ad=B({
  notices:$n(Od),rates_rev:Yn().nullish(),pages_rev:Yn().nullish()
}).passthrough().transform(e=>({
  notices:e.notices,ratesRevision:e.rates_rev??null,pagesRevision:e.pages_rev??null
})),jd=(e,t)=>e.filter(e=>Date.parse(e.until)>t);

B({
  text:z().trim().min(1).max(200).refine(e=>!/[\r\n]/.test(e),`one line`),minutes:Yn().int().min(1).max(10080),from:Dd.nullable()
}).strict();

var Md=B({
  id:z().min(1),text:z(),from:Dd,until:Dd,posted_at:Dd,posted_by:z(),withdrawn_at:Dd.nullable()
}).passthrough().transform(e=>({
  id:e.id,text:e.text,from:Date.parse(e.from),until:Date.parse(e.until),postedAt:Date.parse(e.posted_at),postedBy:e.posted_by,withdrawnAt:e.withdrawn_at===null?null:Date.parse(e.withdrawn_at)
})),Nd=B({
  notices:$n(Md),watching:Yn().int().nonnegative()
}).passthrough().transform(({
  notices:e,watching:t
})=>({
  notices:e,watching:t
})),Pd=B({
  notice:Md
}).passthrough().transform(e=>e.notice);

function Fd(e,t){
  return e.withdrawnAt===null?t<e.from?`waiting`:t<e.until?`showing`:`over`:`withdrawn`
}

var Id=/^\d{1,2}(\.\d{1,2})?$/,Ld=e=>Id.test(e)&&/[1-9]/.test(e),Rd=e=>{
  let t=e.trim();
  return t===``?null:t
},zd=e=>e!==``&&e===e.trim()&&[...e].length<=32&&!/\p{Cc}/u.test(e),Bd=B({
  partners:$n(B({
    id:Ll,email:z(),parent_supplier_id:Ll.nullish(),can_create_suppliers:Zn().nullish(),created_at:H,multiplier:z().refine(Ld).nullish(),remark:z().nullish(),remark_above:z().nullish(),clearing:Zn().nullish(),rates_shown:Zn().nullish(),deploy_closed:Zn().nullish()
  }).passthrough().transform(e=>({
    id:e.id,email:e.email,parentId:e.parent_supplier_id??null,canCreateSuppliers:e.can_create_suppliers??!1,createdAt:e.created_at,multiplier:e.multiplier??null,remark:e.remark??null,remarkAbove:e.remark_above??null,isClearing:e.clearing??!1,showsRates:e.rates_shown??!1,isDeployClosed:e.deploy_closed??!1
  })))
}).passthrough().transform(e=>e.partners);

B({
  email:z().email(),password:z().min(8),multiplier:z().refine(Ld),can_create_suppliers:Zn()
});

var Vd=e=>({
  email:e.email,password:e.password,multiplier:e.multiplier,can_create_suppliers:e.canCreateSuppliers
}),Hd=[`all`,`from_now`];

B({
  multiplier:z().refine(Ld),applies:ar(Hd)
}),B({
  shown:Zn()
}),B({
  open:Zn()
}),B({
  remark:z().refine(zd).nullable()
});

var Ud=e=>e.remark??e.remarkAbove,Wd=B({
  remarks:$n(B({
    id:Ll,email:z(),remark:z(),from_above:Zn().nullish()
  }))
}).passthrough().transform(e=>e.remarks.map(({
  id:e,email:t,remark:n,from_above:r
})=>({
  id:e,email:t,remark:n,isFromAbove:r??!1
}))),Gd=[`usdt`,`alipay`,`wechat`,`bank`],Kd=z().regex(/^\d{1,18}$/).brand(`EntryId`),qd=z().transform((e,t)=>{
  let n=bu(e);return n===null?(t.addIssue({
    code:F.custom,message:`not an amount in yuan`
  }),or):n
}),Jd=z().regex(/^\d+(?:\.\d+)?$/).transform(Number),Yd=B({
  id:Ll,email:z(),kind:ar([`top`,`opening`,`below`]),remark:z().nullish(),multiplier:z().refine(Ld).nullish(),earned:Jd,earned_today:Jd.nullable(),pending_points:Jd.nullish(),due:qd.nullable(),due_today:qd.nullable(),paid:qd,pending:qd.nullable(),last_paid_at:H,payments:Yn().int().nonnegative(),cleared_at:H
}).passthrough().transform(e=>({
  id:e.id,email:e.email,kind:e.kind,remark:e.remark??null,multiplier:e.multiplier??null,earned:e.earned,earnedToday:e.earned_today,pendingPoints:e.pending_points??null,due:e.due,dueToday:e.due_today,paid:e.paid,pending:e.pending,lastPaidAt:e.last_paid_at,payments:e.payments,clearedAt:e.cleared_at
})),Xd=B({
  as_of:z(),can_settle:Zn(),mine:B({
    account:Yd,payer:z().nullable(),rates_shown:Zn().nullish()
  }).nullable(),payees:$n(Yd)
}).passthrough().transform(e=>({
  asOf:e.as_of,canSettle:e.can_settle,mine:e.mine===null?null:{
    account:e.mine.account,payer:e.mine.payer,showsRates:e.mine.rates_shown??e.mine.payer===null
  },payees:e.payees
})),Zd={
  id:Kd,at:z(),method:ar(Gd),amount:qd,by:z().nullable()
},Qd=tr(`kind`,[B({
  ...Zd,kind:ir(`payment`),usdt:B({
    amount:z(),rate:z()
  }).nullable(),note:z().nullable(),reversed_by:Kd.nullable()
}),B({
  ...Zd,kind:ir(`reversal`),reverses:Kd,reason:z().nullable()
})]).transform(e=>{
  let{
    id:t,at:n,method:r,amount:i,by:a
  }
  =e;return e.kind===`payment`?{
    kind:e.kind,id:t,at:n,method:r,amount:i,by:a,usdt:e.usdt,note:e.note,reversedBy:e.reversed_by
  }
  :{
    kind:e.kind,id:t,at:n,method:r,amount:i,by:a,reverses:e.reverses,reason:e.reason
  }
}),$d=B({
  entries:$n(B({
    entry:Qd,account:B({
      id:Ll,email:z(),remark:z().nullable()
    })
  })),total:Yn().int().nonnegative()
}).passthrough().transform(e=>({
  entries:e.entries,total:e.total
})),ef=B({
  entry:Qd,account:Yd
}).passthrough().transform(e=>({
  entry:e.entry,account:e.account
})),tf=B({
  account:Yd,payer:z().nullable(),can_settle:Zn(),segments:$n(B({
    from:z().nullable(),until:z().nullable(),earned:Jd,multiplier:z().nullable(),due:qd
  })),entries:$n(Qd),multiplier_changes:$n(B({
    at:z(),from:z().nullable(),to:z(),applies:ar(Hd),by:z().nullable()
  })),closed:$n(B({
    payer:z().nullable(),until:z(),earned:Jd,due:qd.nullable(),paid:qd,pending:qd.nullable(),entries:$n(Qd)
  })).default([])
}).passthrough().transform(e=>({
  account:e.account,payer:e.payer,canSettle:e.can_settle,segments:e.segments,entries:e.entries,rateChanges:e.multiplier_changes,closed:e.closed
})),nf=(e,t)=>e!==``&&e===e.trim()&&[...e].length<=t&&!/\p{Cc}/u.test(e),rf=e=>nf(e,60),af=e=>nf(e,120)&&[...e].length>=2,of=z().regex(/^[A-Za-z0-9-]{8,64}$/);

B({
  request_id:of,method:ar(Gd),amount_cny:z().refine(Eu),usdt:B({
    amount:z().refine(Du),rate:z().refine(Ou)
  }).nullable(),note:z().refine(rf).nullable()
}).refine(e=>e.method===`usdt`==(e.usdt!==null));

var sf=e=>({
  request_id:e.requestId,method:e.method,amount_cny:xu(e.amount),usdt:e.usdt,note:e.note
});

B({
  request_id:of,reason:z().refine(af)
});

var cf=B({
  total_points_consumed:Ul,total_requests:Vl
}).passthrough().transform(e=>({
  points:e.total_points_consumed,requests:e.total_requests
})),lf=ar([`admin`,`supplier`,`mock_supplier`,`observer`,`user`]),uf=B({
  id:Ll,email:z(),role:lf,can_create_suppliers:Zn().nullish(),parent_supplier_id:Ll.nullish(),parent_supplier_email:H
}).passthrough().transform(e=>({
  id:e.id,email:e.email,role:e.role,canCreateSuppliers:e.can_create_suppliers??!1,parent:e.parent_supplier_id===null||e.parent_supplier_id===void 0?null:{
    id:e.parent_supplier_id,email:e.parent_supplier_email
  }
}));

B({
  token:z().min(1),expires_at:H,user:uf
}).passthrough();

var df=B({
  users:$n(B({
    id:Ll,email:z()
  }).passthrough())
}).passthrough().transform(e=>e.users.map(({
  id:e,email:t
})=>({
  id:e,email:t
}))),ff=B({
  id:Il,host:z(),country:z().regex(/^[A-Z]{2}$/).nullable(),health:B({
    status:ar([`good`,`slow`,`down`]),latency_ms:Yn().nullable(),checked_at:z()
  })
}).passthrough().transform(e=>({
  id:e.id,host:e.host,country:e.country,health:{
    status:e.health.status,latencyMs:e.health.latency_ms,checkedAt:e.health.checked_at
  }
})),pf=B({
  patrol:B({
    every_seconds:Yn().positive()
  }).nullable(),exits:$n(ff)
}).passthrough().transform(e=>({
  everySeconds:e.patrol?.every_seconds??null,exits:e.exits
})),U=class extends Error{
  status;
  code;
  detail;
  retryAfterSeconds;
  body;
  constructor(e,t,n,r,i){
    super(`${e} ${t}`),this.status=e,this.code=t,this.detail=n,this.retryAfterSeconds=r,this.body=i,this.name=`ApiError`
  }
},W=class extends Error{
  constructor(e){
    super(`network request failed`,e),this.name=`NetworkError`
  }
},mf=B({
  error:z(),detail:z().optional()
}).passthrough(),hf={
  401:`unauthenticated`,403:`forbidden`,404:`not_found`,409:`conflict`,502:`arx_unreachable`,503:`arx_unreachable`,504:`arx_unreachable`
};

function gf(e,t){
  let n=mf.safeParse(t);
  if(n.success)return n.data.detail===void 0?{
    code:n.data.error
  }
  :{
    code:n.data.error,detail:n.data.detail
  };
  let r=Zl.safeParse(t),i=hf[e]??`http_error`;
  return r.success?{
    code:i,detail:r.data.message
  }
  :{
    code:i
  }
}

async function _f(e){
  let t=await e.text();
  if(t===``)return null;
  try{
    return qu(t)
  }catch(e){
    if(e instanceof SyntaxError)return null;
    throw e
  }
}

var vf=15e3;

async function G(e,t={}){
  let n;
  try{
    n=await fetch(e,{
      method:t.method??`GET`,signal:AbortSignal.timeout(t.timeoutMs??vf),credentials:`same-origin`,headers:{
        accept:`application/json`,...t.body===void 0?{}:{
          "content-type":`application/json`
        }
      },...t.body===void 0?{}:{
        body:t.body
      }
    })
  }catch(e){
    throw e instanceof TypeError||e instanceof DOMException?new W({
      cause:e
    }):e
  }
  let r=await _f(n);
  if(n.ok)return r;
  let{
    code:i,detail:a
  }
  =gf(n.status,r),o=Number(n.headers.get(`retry-after`));
  throw new U(n.status,i,a,Number.isFinite(o)&&o>0?o:void 0,r)
}

var yf=`/portunex/admin/providers`,bf=12e4,xf=45e3,Sf=3e4,Cf=66e4,wf=3e4,Tf=5e3,Ef=6e4,Df=10,Of=`${yf}/isthmus`,kf=B({
  user:uf
}),Af=(e,t)=>({
  method:e,body:JSON.stringify(t)
});

function jf(e,t){
  let n=new URLSearchParams(t);
  return e!==null&&(n.set(`created_by_user_id`,e.supplierId),e.includeDescendants&&n.set(`include_descendants`,`true`)),n
}

var Mf=e=>`${yf}/${e}`,Nf={
  login:async e=>kf.parse(await G(`/ac3/auth/login`,Af(`POST`,e))).user,me:async()=>kf.parse(await G(`/ac3/auth/me`)).user,logout:async()=>{
    await G(`/ac3/auth/logout`,{
      method:`POST`
    })
  },providersPage:async(e,t)=>{
    let n=jf(e,{
      offset:String(t),limit:`500`
    });
    return gd.parse(await G(`${yf}?${n}`))
  },deletedProvidersPage:async(e,t)=>{
    let n={
      offset:String(t),limit:`500`,deleted:`true`
    };
    return gd.parse(await G(`${yf}?${jf(e,n)}`))
  },providerStats:async(e,t)=>{
    let n={
      start_time:new Date(t.since).toISOString(),end_time:new Date(t.until).toISOString(),granularity:`day`,...t.deleted?{
        deleted:`true`
      }
      :{}
    };
    return cf.parse(await G(`${yf}/stats?${jf(e,n)}`))
  },exits:async()=>pf.parse(await G(`/ac3/exits`)),cleanup:async()=>du.parse(await G(`/ac3/cleanup`)),partners:async()=>Bd.parse(await G(`/ac3/partners`)),openPartner:async e=>{
    await G(`/ac3/partners`,Af(`POST`,Vd(e)))
  },changeMultiplier:async(e,t)=>{
    await G(`/ac3/partners/${e}/multiplier`,Af(`PATCH`,t))
  },setRemark:async(e,t)=>{
    await G(`/ac3/partners/${e}/remark`,Af(`PUT`,{
      remark:t
    }))
  },setRatesShown:async(e,t)=>{
    await G(`/ac3/partners/${e}/rates-shown`,Af(`PUT`,{
      shown:t
    }))
  },setDeployOpen:async(e,t)=>{
    await G(`/ac3/partners/${e}/deploy-open`,Af(`PUT`,{
      open:t
    }))
  },allianceKeys:async()=>au.parse(await G(`/ac3/alliance-keys`)),setHostPlacing:async(e,t)=>{
    let n={
      on:t
    };
    await G(`/ac3/fleet/hosts/${encodeURIComponent(e)}/placing`,Af(`PUT`,n))
  },deployGate:async()=>Vu.parse(await G(`/ac3/deploy-gate`,{
    timeoutMs:Tf
  })),refreshPages:async()=>{
    await G(`/ac3/pages/refresh`,{
      method:`POST`
    })
  },remarks:async()=>Wd.parse(await G(`/ac3/remarks`)),lineage:async()=>Bl.parse(await G(`/ac3/lineage`)),hosted:async()=>{
    try{
      return ru.parse(await G(`/ac3/hosted`))
    }catch(e){
      if(e instanceof U&&e.status===404)return tu;
      throw e
    }
  },accountRemarks:async()=>zl.parse(await G(`/ac3/account-remarks`)),setAccountRemark:async(e,t)=>{
    await G(`/ac3/accounts/${e}/remark`,Af(`PUT`,{
      remark:t
    }))
  },earnings:async()=>Wu.parse(await G(`/ac3/earnings`,{
    timeoutMs:Ef
  })),notices:async()=>kd.parse(await G(`/ac3/notices`)),supplierOptions:async e=>df.parse(await G(`/portunex/admin/users/supplier-options?${new URLSearchParams({search:e})}`)),accountStats:async(e,t)=>{
    let n=new URLSearchParams({
      start_time:new Date(t.since).toISOString(),end_time:new Date(t.until).toISOString(),granularity:`hour`
    });
    return cf.parse(await G(`${Mf(e)}/stats?${n}`))
  },instance:async e=>od.parse(await G(`${Mf(e)}/isthmus`)),setHealth:async(e,t)=>{
    await G(`${Mf(e)}/health`,Af(`PATCH`,{
      healthy:t
    }))
  },healthCheck:async e=>Wl.parse(await G(`${Mf(e)}/health-check`,{
    ...Af(`POST`,{}),timeoutMs:xf
  })),resetWindows:async e=>{
    await G(`${Mf(e)}/window-states/reset`,{
      method:`POST`
    })
  },deleteProvider:async e=>{
    await G(Mf(e),{
      method:`DELETE`
    })
  },changeProxy:async(e,t)=>{
    let n={
      request_id:t.requestId,enable_on_success:t.enableOnSuccess,http_proxy:t.httpProxy
    };
    await G(`${Mf(e)}/isthmus/update`,{
      ...Af(`POST`,n),timeoutMs:Sf
    })
  },startDeploySession:async e=>Lu.parse(await G(`${Of}/oauth/sessions`,{
    ...Af(`POST`,{
      http_proxy:e
    }),timeoutMs:Cf
  })),authorizeDeploy:async(e,t)=>{
    let n={
      request_id:t.requestId,code:t.code,provider:{
        name:t.name,tags:[],max_concurrent:Df
      }
    },r=`${Of}/oauth/sessions/${encodeURIComponent(e)}/authorize`;
    return Bu.parse(await G(r,{
      ...Af(`POST`,n),timeoutMs:wf
    }))
  },deployTask:async e=>Bu.parse(await G(`${Of}/deployments/${encodeURIComponent(e)}`)),batchHealth:async(e,t)=>Gl.parse(await G(`${yf}/batch/health`,{
    method:`PATCH`,body:Rl(e,{
      healthy:t
    })
  })),batchResetWindows:async e=>Gl.parse(await G(`${yf}/batch/window-states/reset`,{
    method:`POST`,body:Rl(e)
  })),batchDelete:async e=>{
    try{
      let t=await G(`${yf}/batch/delete`,{
        method:`POST`,body:Rl(e),timeoutMs:bf
      });
      return{
        count:Gl.parse(t),cleanupPending:0
      }
    }catch(t){
      let n=t instanceof U?Kl.safeParse(t.body):null;
      if(n?.success!==!0)throw t;
      return{
        count:e.length,cleanupPending:n.data.provider_ids.length
      }
    }
  },batchTags:async(e,t)=>ql.parse(await G(`${yf}/batch/settings`,{
    method:`PATCH`,body:Rl(e,{
      tags:Xl(t.mode,t.values)
    })
  }))
},Pf={
  mark:`Brand-module__mark___thvHZ`,from:`Brand-module__from___Udl8G`,to:`Brand-module__to___6xG2i`,goldFrom:`Brand-module__goldFrom___8l0Ai`,goldTo:`Brand-module__goldTo___gGAjx`,gold:`Brand-module__gold___UyKmA`,dot:`Brand-module__dot___e64LT`,"mark-turns-gold":`Brand-module__mark-turns-gold___kiyco`,markTurnsGold:`Brand-module__mark-turns-gold___kiyco`,"mark-turns-back":`Brand-module__mark-turns-back___4UHnB`,markTurnsBack:`Brand-module__mark-turns-back___4UHnB`,wordmark:`Brand-module__wordmark___vDpYk`,suffix:`Brand-module__suffix___bRqIX`,logotype:`Brand-module__logotype___L35iQ`,signature:`Brand-module__signature___tmL3L`,tagline:`Brand-module__tagline___wrCKm`,display:`Brand-module__display___0B1jh`,quiet:`Brand-module__quiet___XIgCL`
},Ff=6,If=[[0,0,.75],[8,0,.42],[16,0,.75],[0,8,.42],[8,8,1],[16,8,.42],[0,16,.75],[8,16,.75],[16,16,.42]],Lf=8,Rf={
  gradientUnits:`userSpaceOnUse`,x1:`0`,y1:`0`,x2:`22`,y2:`22`
};

function zf({
  size:e,tone:t=`brand`
}){
  let n=`brand-${(0,_.useId)().replace(/[^a-zA-Z0-9]/g,``)}`,r=(0,_.useRef)(t),i=(0,_.useRef)(!1);
  return t!==r.current&&(i.current=!0),(0,V.jsxs)(`svg`,{
    className:Pf.mark,width:e,height:e,viewBox:`0 0 22 22`,"aria-hidden":`true`,focusable:`false`,"data-tone":t,"data-turned":i.current?t:void 0,children:[(0,V.jsxs)(`defs`,{
      children:[(0,V.jsxs)(`linearGradient`,{
        id:n,...Rf,children:[(0,V.jsx)(`stop`,{
          className:Pf.from,offset:`0`
        }),(0,V.jsx)(`stop`,{
          className:Pf.to,offset:`1`
        })]
      }),(0,V.jsxs)(`linearGradient`,{
        id:`${n}-gold`,...Rf,children:[(0,V.jsx)(`stop`,{
          className:Pf.goldFrom,offset:`0`
        }),(0,V.jsx)(`stop`,{
          className:Pf.goldTo,offset:`1`
        })]
      })]
    }),If.map(([e,t,r])=>(0,V.jsxs)(`g`,{
      className:Pf.dot,opacity:r,"data-ring":Number(e!==Lf)+Number(t!==Lf),children:[(0,V.jsx)(`rect`,{
        x:e,y:t,width:Ff,height:Ff,fill:`url(#${n})`
      }),(0,V.jsx)(`rect`,{
        className:Pf.gold,x:e,y:t,width:Ff,height:Ff,fill:`url(#${n}-gold)`
      })]
    },`${e}-${t}`))]
  })
}

function Bf({
  tone:e=`brand`
}){
  return(0,V.jsxs)(`span`,{
    className:Pf.wordmark,"data-detect-ignore":`gradient-text text-overflow`,children:[st.stem,(0,V.jsx)(`span`,{
      className:Pf.suffix,"data-brand-suffix":!0,"data-tone":e,"data-ink":st.suffix,children:st.suffix
    })]
  })
}

function Vf({
  tone:e=`display`
}){
  let{
    t
  }
  =N();
  return(0,V.jsx)(`span`,{
    className:`${Pf.tagline} ${Pf[e]}`,"data-detect-ignore":`gradient-text wide-tracking`,children:t(`brand.tagline`)
  })
}

function Hf(){
  return(0,V.jsxs)(`span`,{
    className:Pf.signature,"aria-hidden":`true`,"data-brand-signature":!0,children:[(0,V.jsx)(zf,{
      size:11
    }),(0,V.jsx)(Bf,{})]
  })
}

function Uf(){
  return(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(zf,{
      size:22
    }),(0,V.jsx)(`span`,{
      className:Pf.logotype,children:(0,V.jsx)(Bf,{})
    })]
  })
}

var Wf={
  xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,focusable:`false`
};

function Gf({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Wf,"aria-hidden":`true`,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`
    }),(0,V.jsx)(`polyline`,{
      points:`16 17 21 12 16 7`
    }),(0,V.jsx)(`line`,{
      x1:`21`,x2:`9`,y1:`12`,y2:`12`
    })]
  })
}

function Kf({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Wf,"aria-hidden":`true`,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`m3 11 18-5v12L3 14v-3z`
    }),(0,V.jsx)(`path`,{
      d:`M11.6 16.8a3 3 0 1 1-5.8-1.6`
    })]
  })
}

function qf({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Wf,"aria-hidden":`true`,width:e,height:e,...t,children:[(0,V.jsx)(`line`,{
      x1:`4`,x2:`20`,y1:`6`,y2:`6`
    }),(0,V.jsx)(`line`,{
      x1:`4`,x2:`20`,y1:`12`,y2:`12`
    }),(0,V.jsx)(`line`,{
      x1:`4`,x2:`20`,y1:`18`,y2:`18`
    })]
  })
}

function Jf({
  size:e=20,...t
}){
  return(0,V.jsx)(`svg`,{
    ...Wf,"aria-hidden":`true`,width:e,height:e,...t,children:(0,V.jsx)(`path`,{
      d:`m9 18 6-6-6-6`
    })
  })
}

function Yf({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Wf,"aria-hidden":`true`,width:e,height:e,...t,children:[(0,V.jsx)(`rect`,{
      width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      width:`7`,height:`7`,x:`14`,y:`3`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      width:`7`,height:`7`,x:`14`,y:`14`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`
    })]
  })
}

function K({
  children:e,variant:t=`primary`,size:n=`md`,fullWidth:r=!1,loading:i=!1,className:a=``,disabled:o,...s
}){
  let c=e!=null&&e!==!1,l=[`btn`,`btn-${t}`,n===`sm`?`btn-sm`:``,r?`btn-full`:``,a].filter(Boolean).join(` `);
  return(0,V.jsxs)(`button`,{
    className:l,disabled:o||i,...s,children:[i&&(0,V.jsx)(`span`,{
      className:`loading-spinner`,"aria-hidden":`true`
    }),c&&(0,V.jsx)(`span`,{
      children:e
    })]
  })
}

var Xf={
  xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,focusable:`false`
};

function Zf({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`rect`,{
      x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`
    }),(0,V.jsx)(`path`,{
      d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`
    })]
  })
}

function Qf({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4`
    }),(0,V.jsx)(`path`,{
      d:`m21 2-9.6 9.6`
    }),(0,V.jsx)(`circle`,{
      cx:`7.5`,cy:`15.5`,r:`5.5`
    })]
  })
}

function $f({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`
    }),(0,V.jsx)(`path`,{
      d:`M14 2v4a2 2 0 0 0 2 2h4`
    }),(0,V.jsx)(`path`,{
      d:`M10 9H8`
    }),(0,V.jsx)(`path`,{
      d:`M16 13H8`
    }),(0,V.jsx)(`path`,{
      d:`M16 17H8`
    })]
  })
}

function ep({
  size:e=20,...t
}){
  return(0,V.jsx)(`svg`,{
    ...Xf,width:e,height:e,...t,children:(0,V.jsx)(`path`,{
      d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`
    })
  })
}

function tp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`
    }),(0,V.jsx)(`circle`,{
      cx:`12`,cy:`12`,r:`3`
    })]
  })
}

function np({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M15 12h-5`
    }),(0,V.jsx)(`path`,{
      d:`M15 8h-5`
    }),(0,V.jsx)(`path`,{
      d:`M19 17V5a2 2 0 0 0-2-2H4`
    }),(0,V.jsx)(`path`,{
      d:`M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3`
    })]
  })
}

function rp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`
    }),(0,V.jsx)(`path`,{
      d:`M21 3v5h-5`
    })]
  })
}

function ip({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`
    }),(0,V.jsx)(`path`,{
      d:`m15 5 4 4`
    })]
  })
}

function ap({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z`
    }),(0,V.jsx)(`path`,{
      d:`M12 9v4`
    }),(0,V.jsx)(`path`,{
      d:`M12 17h.01`
    })]
  })
}

function op({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`rect`,{
      x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`
    }),(0,V.jsx)(`path`,{
      d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`
    }),(0,V.jsx)(`path`,{
      d:`M12 12V8`
    })]
  })
}

function sp({
  size:e=20,...t
}){
  return(0,V.jsx)(`svg`,{
    ...Xf,width:e,height:e,...t,children:(0,V.jsx)(`path`,{
      d:`m6 9 6 6 6-6`
    })
  })
}

function cp({
  size:e=20,...t
}){
  return(0,V.jsx)(`svg`,{
    ...Xf,width:e,height:e,...t,children:(0,V.jsx)(`path`,{
      d:`m15 18-6-6 6-6`
    })
  })
}

function lp({
  size:e=20,...t
}){
  return(0,V.jsx)(`svg`,{
    ...Xf,width:e,height:e,...t,children:(0,V.jsx)(`path`,{
      d:`m9 18 6-6-6-6`
    })
  })
}

function up({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`m21 21-4.34-4.34`
    }),(0,V.jsx)(`circle`,{
      cx:`11`,cy:`11`,r:`8`
    })]
  })
}

function dp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M18 6 6 18`
    }),(0,V.jsx)(`path`,{
      d:`m6 6 12 12`
    })]
  })
}

function fp({
  size:e=20,...t
}){
  return(0,V.jsx)(`svg`,{
    ...Xf,width:e,height:e,...t,children:(0,V.jsx)(`path`,{
      d:`M20 6 9 17l-5-5`
    })
  })
}

function pp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`
    }),(0,V.jsx)(`circle`,{
      cx:`12`,cy:`12`,r:`3`
    })]
  })
}

function mp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`path`,{
      d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`
    }),(0,V.jsx)(`path`,{
      d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`
    }),(0,V.jsx)(`path`,{
      d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`
    }),(0,V.jsx)(`path`,{
      d:`m2 2 20 20`
    })]
  })
}

function hp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`polyline`,{
      points:`22 12 16 12 14 15 10 15 8 12 2 12`
    }),(0,V.jsx)(`path`,{
      d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`
    })]
  })
}

function gp({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`line`,{
      x1:`12`,x2:`12`,y1:`2`,y2:`22`
    }),(0,V.jsx)(`path`,{
      d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`
    })]
  })
}

function _p({
  size:e=20,...t
}){
  return(0,V.jsxs)(`svg`,{
    ...Xf,width:e,height:e,...t,children:[(0,V.jsx)(`rect`,{
      width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`
    }),(0,V.jsx)(`rect`,{
      width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`
    })]
  })
}

function vp(e){
  let t=(0,_.useCallback)(t=>{
    let n=window.matchMedia(e);return n.addEventListener(`change`,t),()=>n.removeEventListener(`change`,t)
  },[e]);
  return(0,_.useSyncExternalStore)(t,()=>window.matchMedia(e).matches)
}

function yp(e){
  throw TypeError(`unexpected variant: ${JSON.stringify(e)}`)
}

var bp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,xp=60;

function Sp(e){
  let t=e.email.trim();
  return{
    email:t===``?`required`:bp.test(t)?null:`format`,password:e.password===``?`required`:null
  }
}

function Cp(e){
  return e.email===null?e.password===null?null:{
    kind:`field`,field:`password`,problem:e.password
  }
  :{
    kind:`field`,field:`email`,problem:e.email
  }
}

var wp={
  credentials:`password`,role:`email`,"rate-limited":null,malformed:null,unavailable:null
};

function Tp(e){
  switch(e.kind){
    case`field`:return e.field;
    case`failure`:return wp[e.failure.kind];
    default:return yp(e)
  }
}

function Ep(e){
  return{
    email:e.email.trim(),password:e.password
  }
}

function Dp(e){
  if(e instanceof W)return{
    kind:`unavailable`
  };
  if(e.status===401)return{
    kind:`credentials`
  };
  if(e.status===403)return{
    kind:`role`
  };
  if(e.status===429){
    let t=e.retryAfterSeconds??xp;
    return{
      kind:`rate-limited`,minutes:Math.max(1,Math.ceil(t/60))
    }
  }
  return e.status===400?{
    kind:`malformed`
  }
  :{
    kind:`unavailable`
  }
}

var Op=`1`,q=El(e=>({
  principal:null,hasRestorableSession:()=>sr(lt)===Op,login:async t=>{
    let n=await Nf.login(Ep(t));cr(lt,Op),e({
      principal:n
    })
  },restoreSession:async()=>{
    if(sr(`ac3-session`)!==Op)return!1;try{
      return e({
        principal:await Nf.me()
      }),!0
    }catch(e){
      if(e instanceof U&&e.status===401)return cr(lt,null),!1;if(e instanceof U||e instanceof W)return!1;throw e
    }
  },logout:async()=>{
    try{
      await Nf.logout()
    }catch(e){
      if(!(e instanceof U&&e.status===401))throw e
    }
    cr(lt,null),e({
      principal:null
    })
  },expire:()=>{
    cr(lt,null),e({
      principal:null
    })
  }
}));

function kp(e,t){
  let n;
  try{
    n=e()
  }catch{
    return
  }
  return{
    getItem:e=>{
      let r=e=>e===null?null:JSON.parse(e,t?.reviver),i=n.getItem(e)??null;
      return i instanceof Promise?i.then(r):r(i)
    },setItem:(e,r)=>n.setItem(e,JSON.stringify(r,t?.replacer)),removeItem:e=>n.removeItem(e)
  }
}

var Ap=e=>t=>{
  try{
    let n=e(t);
    return n instanceof Promise?n:{
      then(e){
        return Ap(e)(n)
      },catch(e){
        return this
      }
    }
  }catch(e){
    return{
      then(e){
        return this
      },catch(t){
        return Ap(t)(e)
      }
    }
  }
},jp=El()(((e,t)=>(n,r,i)=>{
  let a={
    storage:kp(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({
      ...t,...e
    }),...t
  },o=!1,s=0,c=new Set,l=new Set,u=a.storage;if(!u)return e((...e)=>{
    console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)
  },r,i);let d=()=>{
    let e=a.partialize({
      ...r()
    });return u.setItem(a.name,{
      state:e,version:a.version
    })
  },f=i.setState;i.setState=(e,t)=>(f(e,t),d());let p=e((...e)=>(n(...e),d()),r,i);i.getInitialState=()=>p;let m,h=()=>{
    if(!u)return;let e=++s;o=!1,c.forEach(e=>e(r()??p));let t=a.onRehydrateStorage?.call(a,r()??p)||void 0;return Ap(u.getItem.bind(u))(a.name).then(e=>{
      if(e){
        if(typeof e.version==`number`&&e.version!==a.version){
          if(a.migrate){
            let t=a.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]
          }
          console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)
        }else return[!1,e.state]
      }
      return[!1,void 0]
    }).then(t=>{
      if(e!==s)return;let[i,o]=t;if(m=a.merge(o,r()??p),n(m,!0),i)return d()
    }).then(()=>{
      e===s&&(t?.(r(),void 0),m=r(),o=!0,l.forEach(e=>e(m)))
    }).catch(n=>{
      e===s&&t?.(void 0,n)
    })
  };return i.persist={
    setOptions:e=>{
      a={
        ...a,...e
      },e.storage&&(u=e.storage)
    },clearStorage:()=>{
      ++s,u?.removeItem(a.name)
    },getOptions:()=>a,rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:e=>(c.add(e),()=>{
      c.delete(e)
    }),onFinishHydration:e=>(l.add(e),()=>{
      l.delete(e)
    })
  },a.skipHydration||h(),m||p
})(e=>({
  language:fr(),setLanguage:t=>{
    lr(t)&&(hr.changeLanguage(t),e({
      language:t
    }))
  }
}),{
  name:ct,merge:(e,t)=>{
    let n=e?.language;return typeof n==`string`&&lr(n)?{
      ...t,...e,language:n
    }
    :t
  }
}));

function Mp(e){
  let t=e.split(/\r?\n\r?\n/),n=t.pop()??``;
  return{
    events:t.flatMap(e=>{
      let t=e.split(/\r?\n/).filter(e=>e.startsWith(`data:`)).map(e=>e.slice(5).trimStart()).join(`
`);return t===``?[]:[t]
    }),rest:n
  }
}

var Np=class extends Error{
  status;
  constructor(e){
    super(`provider stream refused: ${e}`),this.status=e
  }
},Pp=[2e3,5e3,15e3],Fp=15e3,Ip=5e3;

function Lp(e,t){
  return t&&e>=Ip
}

var Rp=e=>e instanceof TypeError||e instanceof Np||e instanceof bt||e instanceof DOMException&&e.name===`AbortError`,zp=(e,t)=>new Promise(n=>{
  let r=setTimeout(n,e);t.addEventListener(`abort`,()=>{
    clearTimeout(r),n()
  },{
    once:!0
  })
});

async function Bp(e,t){
  let{
    offset:n,limit:r
  }
  =e.page,i=jf(e.scope,{
    offset:String(n),limit:String(r)
  }),a=await fetch(`/portunex/admin/providers/live?${i}`,{
    headers:{
      accept:`text/event-stream`
    },credentials:`same-origin`,cache:`no-store`,signal:t
  });
  if(!a.ok||a.body===null)throw new Np(a.status);
  let o=a.body.pipeThrough(new TextDecoderStream).getReader(),s=``,c=!1;
  for(;;){
    let{
      value:t,done:n
    }
    =await o.read();
    if(n)return c;
    let r=Mp(s+t);
    s=r.rest;
    for(let t of r.events){
      let n=Ed.parse(qu(t));
      if(n.kind===`error`)throw new Np(a.status);
      if(n.kind===`complete`)return c;
      c=!0,e.onState(`live`),n.rpm!==null&&e.onTotal(n.rpm);
      let r=n.kind===`snapshot`;
      (r||n.rates.length>0)&&e.onRates(n.rates,r),e.onFrame(n)
    }
  }
}

function Vp(e){
  let t=new AbortController,{
    signal:n
  }
  =t;
  return(async()=>{
    let t=0,r={
      ...e,onState:n=>{
        n===`live`&&(t=0),e.onState(n)
      }
    };for(;!n.aborted;){
      e.onState(t===0?`connecting`:`offline`);let i=Date.now(),a=null;try{
        a=await Bp(r,n)
      }catch(t){
        if(!Rp(t))throw t;if(t instanceof Np&&t.status===401){
          e.onExpired();return
        }
      }
      if(n.aborted)return;a!==null&&Lp(Date.now()-i,a)||(t+=1,e.onState(`offline`),await zp(Pp[t-1]??Fp,n))
    }
  })(),()=>t.abort()
}

var Hp=`/ac3/notices`,Up={
  posted:async()=>Nd.parse(await G(`${Hp}/posted`)),post:async e=>Pd.parse(await G(Hp,{
    method:`POST`,body:JSON.stringify(e)
  })),withdraw:async e=>Pd.parse(await G(`${Hp}/${encodeURIComponent(e)}`,{
    method:`DELETE`
  }))
},Wp=class extends Error{
  status;
  constructor(e){
    super(`notice stream refused: ${e}`),this.status=e,this.name=`StreamRefused`
  }
},Gp=[2e3,5e3,15e3],Kp=15e3,qp=3e3,Jp=65e3,Yp=e=>e instanceof TypeError||e instanceof Wp||e instanceof DOMException&&e.name===`AbortError`;

function Xp(e){
  let t;
  try{
    t=JSON.parse(e)
  }catch(e){
    if(e instanceof SyntaxError)return null;
    throw e
  }
  let n=Ad.safeParse(t);
  return n.success?n.data:null
}

async function Zp(e){
  let{
    onNotices:t,onRatesMark:n,onPagesMark:r,onSound:i,signal:a
  }
  =e,o=await fetch(`${Hp}/live`,{
    headers:{
      accept:`text/event-stream`
    },credentials:`same-origin`,cache:`no-store`,signal:a
  });
  if(!o.ok||o.body===null)throw new Wp(o.status);
  let s=o.body.pipeThrough(new TextDecoderStream).getReader(),c=``;
  for(;;){
    let{
      value:e,done:a
    }
    =await s.read();
    if(a)return;
    i();
    let o=Mp(c+e);
    c=o.rest;
    for(let e of o.events){
      let i=Xp(e);
      i!==null&&(t(i.notices),i.ratesRevision!==null&&n(i.ratesRevision),i.pagesRevision!==null&&r(i.pagesRevision))
    }
  }
}

function Qp(e,t=()=>void 0,n=()=>void 0){
  let r=new AbortController;
  return(async()=>{
    let i=0;for(;!r.signal.aborted;){
      let a=new AbortController,o=()=>a.abort();r.signal.addEventListener(`abort`,o,{
        once:!0
      });let s=setTimeout(o,Jp),c=()=>{
        i=0,clearTimeout(s),s=setTimeout(o,Jp)
      };try{
        await Zp({
          onNotices:e,onRatesMark:t,onPagesMark:n,onSound:c,signal:a.signal
        })
      }catch(e){
        if(!Yp(e))throw e;if(e instanceof Wp&&e.status===401)return
      }finally{
        clearTimeout(s),r.signal.removeEventListener(`abort`,o)
      }
      i+=1,await zp((Gp[i-1]??Kp)+Math.random()*qp,r.signal)
    }
  })(),()=>r.abort()
}

var $p=El(()=>({
  mark:null
})),em=e=>$p.setState({
  mark:e
}),tm=()=>$p(e=>e.mark),nm=(e,t)=>e!==null&&t!==null&&t!==e,rm=12e3,im=1e3,am=(e,t)=>e!==null&&t>e,om={
  isBusy:()=>document.querySelector(`[role="dialog"], [aria-modal="true"]`)!==null,reload:()=>window.location.reload(),later:(e,t)=>{
    window.setTimeout(e,t)
  },chance:Math.random
};

function sm(e=om){
  let t=null,n=!1,r=()=>{
    e.isBusy()?e.later(r,im):e.reload()
  };
  return i=>{
    t===null?t=i:!n&&am(t,i)&&(n=!0,e.later(r,e.chance()*rm))
  }
}

var cm=sm(),lm=6e4,um=15e3;

function dm(){
  let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(()=>Date.now());
  return(0,_.useEffect)(()=>{
    let e=!1,n=0,i=async()=>{
      try{
        let n=await Nf.notices();e||t(n)
      }catch(e){
        if(!(e instanceof U||e instanceof W||e instanceof bt))throw e
      }
    },a=()=>{
      if(document.visibilityState!==`visible`)return;let e=Date.now();r(e),e-n<lm||(n=e,i())
    };a();let o=setInterval(a,um);return document.addEventListener(`visibilitychange`,a),()=>{
      e=!0,clearInterval(o),document.removeEventListener(`visibilitychange`,a)
    }
  },[]),(0,_.useEffect)(()=>Qp(e=>{
    t(e),r(Date.now())
  },em,cm),[]),(0,_.useMemo)(()=>jd(e,n),[e,n])
}

var fm={
  line:`NoticeBar-module__line___u9l-6`,bar:`NoticeBar-module__bar___YrCEh`,label:`NoticeBar-module__label___ikoxj`,window:`NoticeBar-module__window___GhB7l`,track:`NoticeBar-module__track___7Nx9D`,"notice-pass":`NoticeBar-module__notice-pass___LdCkx`,noticePass:`NoticeBar-module__notice-pass___LdCkx`,run:`NoticeBar-module__run___jIDXF`,item:`NoticeBar-module__item___BBIOm`
},pm=56;

function mm({
  notices:e
}){
  let{
    t
  }
  =N(),n=(0,_.useRef)(null),r=(0,_.useRef)(null),i=(0,_.useCallback)(()=>{
    let e=n.current,t=r.current;if(e===null||t===null)return;let{
      width:i
    }
    =t.getBoundingClientRect();e.style.setProperty(`--notice-run`,`${i}px`),e.style.setProperty(`--notice-seconds`,`${Math.max(1,i/pm)}s`)
  },[]);
  return(0,_.useLayoutEffect)(i),(0,_.useEffect)(()=>(window.addEventListener(`resize`,i),()=>window.removeEventListener(`resize`,i)),[i]),(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(`span`,{
      className:fm.label,"aria-hidden":`true`,children:t(`shell.notice_label`)
    }),(0,V.jsx)(`div`,{
      className:fm.window,"aria-hidden":`true`,children:(0,V.jsx)(`div`,{
        className:fm.track,ref:n,children:[r,null].map((t,n)=>(0,V.jsx)(`span`,{
          className:fm.run,ref:t,children:e.map(e=>(0,V.jsx)(`span`,{
            className:fm.item,children:e.text
          },e.id))
        },n===0?`first`:`again`))
      })
    })]
  })
}

function NoticeStrip({notices}){
  let {t}=N();
  return notices.length===0?null:(0,V.jsxs)(`div`,{
    className:fm.line,"data-notice-bar":!0,children:[(0,V.jsx)(`output`,{
      className:`visually-hidden`,children:`${t(`shell.notice_label`)}: ${notices.map(notice=>notice.text).join(` `)}`
    }),(0,V.jsx)(mm,{notices})]
  })
}

function hm({notices,canManage}){
  let {t}=N();
  return(0,V.jsxs)(`details`,{
    className:`console-popover console-announcements`,children:[(0,V.jsxs)(`summary`,{
      className:`console-icon-button`,title:t(`shell.notice_label`),"aria-label":t(`shell.notice_label`),children:[(0,V.jsx)(Bell,{size:18,"aria-hidden":true}),notices.length>0&&(0,V.jsx)(`span`,{className:`console-notice-dot`,"aria-hidden":true})]
    }),(0,V.jsxs)(`div`,{
      className:`console-popover-panel`,children:[(0,V.jsx)(`strong`,{children:t(`shell.notice_label`)}),notices.length?(0,V.jsx)(`ul`,{
        children:notices.map(notice=>(0,V.jsx)(`li`,{children:notice.text},notice.id))
      }):(0,V.jsx)(`p`,{children:t(`console_ui.no_notices`)}),canManage&&(0,V.jsx)(yc,{
        to:ym.to,onClick:event=>{event.currentTarget.closest(`details`).open=!1},children:t(ym.labelKey)
      })]
    })]
  })
}

var gm={
  id:`pool`,labelKey:`nav.pool`,icon:Yf,to:`/pool`
},_m={
  id:`hierarchy`,labelKey:`nav.hierarchy`,icon:op,to:`/hierarchy`
},vm={
  id:`settlement`,labelKey:`nav.settlement`,icon:gp,to:`/settlement`
},ym={
  id:`notices`,labelKey:`nav.notices`,icon:Kf,to:`/notices`
},bm={
  id:`usage`,labelKey:`nav.usage`,icon:$f,to:`/usage`
},xm={
  id:`overview`,labelKey:`nav.overview`,icon:_p,to:`/overview`
},Sm=e=>e?[xm]:[],Cm=e=>[{
  id:`operate`,labelKey:`nav.group_operate`,items:[...Sm(e),gm,_m,vm,...e?[ym]:[]]
},{
  id:`observe`,labelKey:`nav.group_observe`,items:[bm,{
    id:`detection`,labelKey:`nav.detection`,icon:ep,to:null
  },{
    id:`audit`,labelKey:`nav.audit`,icon:np,to:null
  }]
},{
  id:`system`,labelKey:`nav.group_system`,items:[{
    id:`settings`,labelKey:`nav.settings`,icon:tp,to:null
  }]
}];

function wm(e){
  return[{
    id:`partner`,labelKey:null,items:e.parent===null&&e.canCreateSuppliers?[gm,vm,_m]:[gm,vm]
  }]
}

function Tm(e){
  switch(e.role){
    case`admin`:return Cm(!0);
    case`observer`:return Cm(!1);
    case`supplier`:case`mock_supplier`:case`user`:return wm(e);
    default:return yp(e.role)
  }
}

function Em({
  labelled:e,onNavigate:t
}){
  let{
    t:n
  }
  =N(),r=q(e=>e.principal),i=r===null?[]:Tm(r),a=r=>{
    let i=n(r.labelKey),a=(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(`span`,{
        className:`nav-icon`,children:(0,V.jsx)(r.icon,{
          size:16
        })
      }),e&&(0,V.jsx)(`span`,{
        className:`nav-text`,children:(0,V.jsx)(`span`,{
          className:`nav-label`,children:i
        })
      })]
    });
    if(r.to===null){
      let t=n(`nav.pending`);
      return(0,V.jsxs)(`span`,{
        className:`nav-item nav-item-pending`,title:e?t:`${i} · ${t}`,children:[a,(0,V.jsx)(`span`,{
          className:`visually-hidden`,children:e?t:`${i} ${t}`
        })]
      },r.id)
    }
    return(0,V.jsx)(yc,{
      to:r.to,className:({
        isActive:e
      })=>`nav-item ${e?`active`:``}`,"aria-label":e?void 0:i,title:e?void 0:i,onClick:t,children:a
    },r.id)
  },o=t=>t.labelKey===null?null:e?(0,V.jsx)(`div`,{
    className:`nav-group-label`,children:n(t.labelKey)
  }):(0,V.jsx)(`div`,{
    className:`nav-group-divider`,"aria-hidden":`true`
  });
  return(0,V.jsx)(`nav`,{
    className:`nav-section`,"aria-label":n(`shell.navigation`),children:i.map(e=>(0,V.jsxs)(`div`,{
      className:`nav-group`,children:[o(e),e.items.map(a)]
    },e.id))
  })
}

function ConsoleSearch({principal}){
  let {t}=N(),[query,change]=(0,_.useState)(``),input=(0,_.useRef)(null);
  (0,_.useEffect)(()=>{
    const focus=event=>{
      if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()===`k`){
        event.preventDefault();input.current?.focus();
      }
    };
    document.addEventListener(`keydown`,focus);
    return()=>document.removeEventListener(`keydown`,focus);
  },[]);
  const term=query.trim().toLowerCase(),matches=principal===null?[]:Tm(principal).flatMap(group=>group.items).filter(item=>item.to!==null&&t(item.labelKey).toLowerCase().includes(term));
  const reset=()=>{change(``);input.current?.blur()};
  return(0,V.jsxs)(`search`,{
    className:`console-search`,onKeyDown:event=>{if(event.key===`Escape`)reset()},children:[(0,V.jsx)(Search,{size:16,"aria-hidden":true}),(0,V.jsx)(`input`,{
      ref:input,type:`search`,placeholder:t(`console_ui.search`),"aria-label":t(`console_ui.search`),value:query,onChange:event=>change(event.target.value),autoComplete:`off`
    }),(0,V.jsx)(`kbd`,{children:`Ctrl K`}),(0,V.jsx)(`div`,{
      className:`console-popover-panel console-search-results`,children:matches.length?matches.map(item=>(0,V.jsx)(yc,{
        to:item.to,onClick:event=>{event.currentTarget.blur();reset()},children:t(item.labelKey)
      },item.id)):(0,V.jsx)(`p`,{children:t(`console_ui.no_results`)})
    })]
  })
}

var Dm=`(max-width: 768px)`;

function Om(){
  let{
    t:e
  }
  =N(),t=q(e=>e.principal),n=q(e=>e.logout),r=jp(e=>e.language),i=jp(e=>e.setLanguage),a=vp(Dm),o=Ko().pathname===`/settlement`?`gold`:`brand`,s=(0,_.useRef)(null),[c]=(0,_.useState)(jl),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(`idle`),h=a&&d,g=!l||a,v=r===`zh-CN`?`en`:`zh-CN`;
  const notices=dm();
  d&&!a&&f(!1),(0,_.useEffect)(()=>{
    if(!h)return;let e=e=>{
      e.key===`Escape`&&(f(!1),s.current?.querySelector(`button`)?.focus())
    };return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)
  },[h]);
  let y=async()=>{
    m(`busy`);
    try{
      await n()
    }catch(e){
      if(m(`failed`),e instanceof U||e instanceof W)return;
      throw e
    }
  };
  return(0,V.jsxs)(`div`,{
    className:`app-shell ${l?`sidebar-is-collapsed`:``} ${c?`app-shell--arriving`:``}`,children:[(0,V.jsx)(`div`,{
      className:`top-gradient-blur`,"aria-hidden":`true`
    }),(0,V.jsxs)(`header`,{
      className:`main-header`,children:[(0,V.jsx)(`button`,{
        type:`button`,className:`sidebar-toggle-floating`,onClick:()=>u(e=>!e),"aria-label":e(l?`shell.expand`:`shell.collapse`),children:l?(0,V.jsx)(Jf,{
          size:14
        }):(0,V.jsx)(cp,{
          size:14
        })
      }),(0,V.jsx)(`div`,{
        className:`mobile-sidebar-actions`,ref:s,children:(0,V.jsx)(K,{
          className:`mobile-menu-btn`,variant:`ghost`,size:`sm`,onClick:()=>f(e=>!e),"aria-label":e(d?`shell.close_menu`:`shell.open_menu`),"aria-expanded":d,children:d?(0,V.jsx)(dp,{
            size:18
          }):(0,V.jsx)(qf,{
            size:18
          })
        })
      }),(0,V.jsx)(ConsoleSearch,{principal:t}),(0,V.jsxs)(`div`,{
        className:`header-actions floating-actions`,children:[(0,V.jsx)(hm,{notices,canManage:t?.role===`admin`}),(0,V.jsx)(K,{
          variant:`ghost`,size:`sm`,onClick:()=>i(v),"aria-label":e(`shell.switch_language`),title:e(`shell.switch_language`),lang:v,children:v===`en`?`EN`:`中`
        }),t!==null&&(0,V.jsxs)(`details`,{
          className:`console-popover`,children:[(0,V.jsxs)(`summary`,{
            className:`console-user-summary`,"aria-label":e(`console_ui.account`),children:[(0,V.jsx)(`span`,{className:`console-avatar`,"aria-hidden":true,children:t.email.slice(0,2).toUpperCase()}),(0,V.jsx)(ChevronDown,{size:14,"aria-hidden":true})]
          }),(0,V.jsxs)(`div`,{
            className:`console-popover-panel`,children:[(0,V.jsx)(`strong`,{children:t.email}),(0,V.jsx)(`p`,{
              children:e(t.role===`supplier`&&t.parent!==null?`role.sub_supplier`:`role.${t.role}`)
            }),(0,V.jsxs)(K,{
              variant:`ghost`,size:`sm`,className:`console-signout`,onClick:()=>void y(),disabled:p===`busy`,children:[(0,V.jsx)(Gf,{size:16}),e(`shell.sign_out`)]
            }),p===`failed`&&(0,V.jsx)(`p`,{role:`alert`,children:e(`shell.sign_out_failed`)})]
          })]
        })]
      })]
    }),h&&(0,V.jsx)(`button`,{
        type:`button`,className:`sidebar-backdrop visible`,onClick:()=>f(!1),"aria-label":e(`shell.close_menu`)
      }),(0,V.jsxs)(`div`,{
        className:`sidebar saas-nav ${h?`open`:``} ${l?`collapsed`:``}`,inert:a&&!d,children:[(0,V.jsx)(`div`,{
          className:`sidebar-header`,children:(0,V.jsxs)(`div`,{
            className:`sidebar-brand`,children:[(0,V.jsx)(zf,{
              size:22,tone:o
            }),g&&(0,V.jsxs)(`span`,{
              className:`sidebar-brand-text`,children:[(0,V.jsx)(`span`,{
                className:`sidebar-brand-title`,children:(0,V.jsx)(Bf,{
                  tone:o
                })
              }),(0,V.jsx)(`span`,{
                className:`sidebar-brand-subtitle`,children:e(`shell.subtitle`)
              })]
            })]
          })
        }),(0,V.jsx)(Em,{
          labelled:g,onNavigate:()=>f(!1)
        }),g&&t!==null&&(0,V.jsxs)(`div`,{
          className:`sidebar-account`,children:[(0,V.jsx)(`span`,{
            className:`sidebar-account-email`,title:t.email,children:t.email
          }),(0,V.jsx)(`span`,{
            className:`sidebar-account-role`,title:t.parent?.email?e(`role.under`,{
              email:t.parent.email
            }):void 0,children:e(t.role===`supplier`&&t.parent!==null?`role.sub_supplier`:`role.${t.role}`)
          })]
        })]
      }),(0,V.jsx)(`div`,{
      className:`main-body`,children:(0,V.jsx)(`div`,{
        className:`content`,inert:h,children:(0,V.jsxs)(`main`,{
          className:`main-content`,children:[(0,V.jsx)(NoticeStrip,{notices}),(0,V.jsx)(js,{})]
        })
      })
    })]
  })
}

var km={
  skeleton:`Skeleton-module__skeleton___XePp7`,shimmer:`Skeleton-module__shimmer___vu211`
};

function Am({
  width:e,height:t,rounded:n,className:r,style:i,...a
}){
  let o={
    ...i,width:e??i?.width,height:t??i?.height,borderRadius:n??i?.borderRadius
  },s=[km.skeleton,r].filter(Boolean).join(` `);
  return(0,V.jsx)(`div`,{
    className:s,style:o,"aria-hidden":`true`,...a
  })
}

var J={
  header:`PoolHeader-module__header___A3iIg`,top:`PoolHeader-module__top___vzjVr`,actions:`PoolHeader-module__actions___2YNWi`,refresh:`PoolHeader-module__refresh___e1JXa`,title:`PoolHeader-module__title___j0CZ6`,band:`PoolHeader-module__band___K9PQT`,heroes:`PoolHeader-module__heroes___DtjM6`,hero:`PoolHeader-module__hero___KmaiD`,swash:`PoolHeader-module__swash___fPorX`,heroName:`PoolHeader-module__heroName___-lEAW`,heroValue:`PoolHeader-module__heroValue___AjevY`,stats:`PoolHeader-module__stats___14bRw`,statsPaired:`PoolHeader-module__statsPaired___FPnro`,statsRow:`PoolHeader-module__statsRow___F0CJT`,stat:`PoolHeader-module__stat___77Fb8`,statName:`PoolHeader-module__statName___TjCQI`,statValue:`PoolHeader-module__statValue___8uhXe`,statOf:`PoolHeader-module__statOf___3zFkm`,live:`PoolHeader-module__live___S5Izl`,"live-beat":`PoolHeader-module__live-beat___UfgR8`,liveBeat:`PoolHeader-module__live-beat___UfgR8`
},jm=1e3,Mm=new Set,Nm=null,Pm=()=>Math.floor(Date.now()/jm)*jm;

function Fm(e){
  return Mm.add(e),Nm??=setInterval(()=>{
    for(let e of Mm)e()
  },jm),()=>{
    Mm.delete(e),Mm.size===0&&Nm!==null&&(clearInterval(Nm),Nm=null)
  }
}

var Im=()=>(0,_.useSyncExternalStore)(Fm,Pm),Lm={
  header:`VaultHeader-module__header___SYMFE`,copy:`VaultHeader-module__copy___K4BC8`,title:`VaultHeader-module__title___nszrg`,meta:`VaultHeader-module__meta___YjZlB`,metaDot:`VaultHeader-module__metaDot___5aTaK`,metaTotal:`VaultHeader-module__metaTotal___4Nax3`,metaActive:`VaultHeader-module__metaActive___2BKPM`,metaMuted:`VaultHeader-module__metaMuted___nCvzo`,metaProblem:`VaultHeader-module__metaProblem___klFlQ`,actions:`VaultHeader-module__actions___UfHnA`,primaryAction:`VaultHeader-module__primaryAction___BNp28`,ghostAction:`VaultHeader-module__ghostAction___-n2qr`,spinning:`VaultHeader-module__spinning___wRt7u`,"vault-spin":`VaultHeader-module__vault-spin___NZWFt`,vaultSpin:`VaultHeader-module__vault-spin___NZWFt`
},Rm={
  page:`PoolPage-module__page___OSzKx`,overview:`PoolPage-module__overview___37ULG`,workbench:`PoolPage-module__workbench___93U-x`,notice:`PoolPage-module__notice___Jmiv-`
},zm=[10,30,60,360,1440],Bm=[`minutes`,`hours`,`days`],Vm={
  minutes:1,hours:60,days:1440
},Hm={
  text:``,length:10,count:``,unit:`minutes`,timing:`now`,at:``
},Um=e=>e.text.replace(/\s*[\r\n]+\s*/g,` `).trim();

function Wm(e){
  if(e.length!==`custom`)return e.length;
  let t=e.count.trim();
  if(!/^\d{1,5}$/.test(t))return null;
  let n=Number(t)*Vm[e.unit];
  return n>=1&&n<=10080?n:null
}

function Gm(e,t){
  if(e.timing===`now`)return t;
  let n=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(e.at)?new Date(e.at).getTime():NaN;
  return Number.isNaN(n)?`missing`:n<=t?`past`:n-t>2592e6?`far`:n
}

function Km(e,t){
  let n=Um(e),r=Wm(e),i=Gm(e,t);
  return!(n!==``&&n.length<=200)||r===null||typeof i!=`number`?null:{
    draft:{
      text:n,minutes:r,from:e.timing===`now`?null:new Date(i).toISOString()
    },from:i,until:i+r*6e4
  }
}

function qm(e,t){
  let n=Gm(e,t),r=e.length===`custom`&&e.count.trim()!==``;
  return{
    text:Um(e).length>200?`long`:null,length:r&&Wm(e)===null?`range`:null,at:n===`past`||n===`far`?n:null
  }
}

function Jm(e){
  let t=new Date(e),n=e=>String(e).padStart(2,`0`);
  return`${`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`}T${n(t.getHours())}:${n(t.getMinutes())}`
}

var Ym=3e5,Xm=e=>Jm(Math.ceil((e+6*Ym)/Ym)*Ym);

function Zm(e){
  return e%Vm.days===0?{
    count:e/Vm.days,unit:`days`
  }
  :e%Vm.hours===0?{
    count:e/Vm.hours,unit:`hours`
  }
  :{
    count:e,unit:`minutes`
  }
}

var Qm=12,$m=e=>e.withdrawnAt??e.until;

function eh(e,t){
  let n=e.map(e=>({
    notice:e,stage:Fd(e,t)
  })),r=(...e)=>n.filter(({
    stage:t
  })=>e.includes(t)).map(({
    notice:e
  })=>e);
  return{
    showing:r(`showing`).toSorted((e,t)=>e.until-t.until),waiting:r(`waiting`).toSorted((e,t)=>e.from-t.from),past:r(`over`,`withdrawn`).toSorted((e,t)=>$m(t)-$m(e)).slice(0,Qm)
  }
}

function th(e,t,n){
  let r=new Date(e).toDateString()===new Date(t).toDateString();
  return new Intl.DateTimeFormat(n,{
    ...r?{}:{
      month:`short`,day:`numeric`
    },hour:`2-digit`,minute:`2-digit`,hour12:!1
  }).format(e)
}

export { zm, Zm, V, Bm, fm, mm, dp, K, th, Xm, Jm, Hm, Um, Km, qm, Up, U, W, uu, $m, yp, Fd, Im, Rm, J, Lm, rp, ap, Am, eh, q, El, tu, Nf, yl, Jf, iu, Ll, Vp, Xd, G, tf, $d, ef, sf, nd, Mp, zp, mu, hu, pu, Ud, bl, Iu, Ld, Hd, fp, Qf, up, sp, ip, ad, jf, Rd, zd, Bf, Zf, hp, lu, cp, lp, Jl, cu, af, Du, Eu, Mu, bu, Ou, Au, gu, rf, Nu, xu, Gd, np, tm, nm, Hf, Il, H, Ul, Vl, hd, Tp, mp, pp, jp, Al, kl, Cp, Sp, Dp, Uf, zf, Vf, Nl, Om };
