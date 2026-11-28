// @ts-nocheck
// Module: hierarchy — Alliance Hierarchy, Divisions, Multiplier Rules & Partner Clearance
import { N, _, B, $n, zStr as z, bt, As } from '../lib/vendor-runtime';
import { pu, V, K, Ud, Am, Ld, Nf, U, W, Hd, fp, ap, Qf, up, dp, sp, ip, Ll, G, ad, jf, q, El, Rd, zd, Rm, J } from './core';
import { Eh, mh, ph, Th, Dh, qh } from './notices';
import { f_, VS, Ub, hx, J_, bv, OS, Tb, Xv, q_, kS, Av, B_, $v, jS, PS } from './overview';

var HS={
  body:`ClearanceDialog-module__body___HsJEd`,subject:`ClearanceDialog-module__subject___Qtap6`,subjectName:`ClearanceDialog-module__subjectName___NNbzn`,subjectEmail:`ClearanceDialog-module__subjectEmail___2cSg5`,reminders:`ClearanceDialog-module__reminders___lt02x`,reminder:`ClearanceDialog-module__reminder___nHuBV`,confirm:`ClearanceDialog-module__confirm___6f-D9`,alert:`ClearanceDialog-module__alert___baOHR`,progress:`ClearanceDialog-module__progress___3fiQW`,done:`ClearanceDialog-module__done___Y6VNQ`,working:`ClearanceDialog-module__working___J9tj1`,doneTitle:`ClearanceDialog-module__doneTitle___1gkg5`,bar:`ClearanceDialog-module__bar___VwTvr`,track:`ClearanceDialog-module__track___7Vw4r`,fill:`ClearanceDialog-module__fill___RQGs3`,hint:`ClearanceDialog-module__hint___cTGBp`
};

function US(e,t){
  let{
    t:n,i18n:r
  }
  =N(),i=r.language,a=e=>Eh(e,i),{
    pending:o,accounts:s,below:c,owedBelow:l
  }
  =e,u=()=>o===null?n(`partners.c_settled_unset`):o>0n?n(`partners.c_settled_pending`,{
    amount:f_(o,i)
  }):o===0n?n(`partners.c_settled_clear`):n(`partners.c_settled_over`,{
    amount:f_(pu(-o),i)
  }),d={
    partners:a(c.partners),accounts:a(c.accounts)
  };
  return[{
    name:n(`partners.c_settled_name`),said:u(),isGrave:o!==null&&o>0n
  },{
    name:n(`partners.c_accounts_name`),said:s===0?n(`partners.c_accounts_none`):n(`partners.c_accounts`,{
      count:a(s)
    }),isGrave:s>0
  },{
    name:n(`partners.c_below_name`),said:c.partners===0?n(`partners.c_below_none`):n(t?`partners.c_below_platform`:`partners.c_below_mine`,d)
  },...l.partners===0?[]:[{
    name:n(`partners.c_owed_name`),said:n(`partners.c_owed`,{
      partners:a(l.partners),amount:f_(l.total,i)
    }),isGrave:!0
  }],{
    name:n(`partners.c_login_name`),said:n(`partners.c_login`)
  },{
    name:n(`partners.c_ledger_name`),said:n(`partners.c_ledger`)
  }]
}

function WS({
  said:e,byAdministrator:t
}){
  let n=US(e,t);
  return(0,V.jsx)(`dl`,{
    className:HS.reminders,children:n.map(e=>(0,V.jsxs)(`div`,{
      className:HS.reminder,children:[(0,V.jsx)(`dt`,{
        children:e.name
      }),(0,V.jsx)(`dd`,{
        "data-grave":e.isGrave||void 0,children:e.said
      })]
    },e.name))
  })
}

function GS({
  said:e
}){
  let{
    t,i18n:n
  }
  =N(),r=e.accountsAtStart??e.accounts,i=Math.max(0,r-e.accounts),a=e=>Eh(e,n.language);
  return(0,V.jsxs)(`div`,{
    className:HS.progress,"data-clearance":`clearing`,children:[(0,V.jsx)(`p`,{
      className:HS.working,children:t(`partners.c_working`)
    }),(0,V.jsxs)(`div`,{
      className:HS.bar,children:[(0,V.jsx)(`span`,{
        className:HS.track,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{
          className:HS.fill,style:{
            transform:`scaleX(${r===0?1:i/r})`
          }
        })
      }),(0,V.jsx)(`span`,{
        children:t(`partners.c_progress`,{
          done:a(i),total:a(r)
        })
      })]
    }),(0,V.jsx)(`p`,{
      className:HS.hint,children:t(`partners.c_working_hint`)
    })]
  })
}

function KS(e){
  let{
    partner:t,byAdministrator:n,onClose:r,onChanged:i
  }
  =e,{
    t:a
  }
  =N(),o=mh(t),{
    state:s,begin:c,refuse:l
  }
  =VS(t?.id??null,i),[u,d]=(0,_.useState)(null),f=(0,_.useId)(),{
    said:p
  }
  =s,m=t!==null&&u===t.id,h=p?.state===`open`,g=h?(0,V.jsxs)(V.Fragment,{
    children:[(0,V.jsx)(K,{
      variant:`secondary`,onClick:r,disabled:s.isSending,children:a(`common.cancel`)
    }),(0,V.jsx)(K,{
      variant:`danger`,onClick:()=>p?.blocked===`pending`?l():void c(),disabled:!m||s.isSending,"aria-busy":s.isSending,"aria-describedby":s.refusal===null?void 0:f,children:a(s.isSending?`partners.c_sending`:`partners.c_submit`)
    })]
  }):(0,V.jsx)(K,{
    variant:`secondary`,onClick:r,children:a(p?.state===`cleared`?`common.done`:`common.close`)
  });
  return(0,V.jsx)(ph,{
    open:t!==null,onClose:r,title:a(`partners.clear_title`),width:480,closeDisabled:s.isSending,footer:g,children:o!==null&&(0,V.jsxs)(`div`,{
      className:HS.body,children:[(0,V.jsxs)(`p`,{
        className:HS.subject,children:[(0,V.jsx)(`span`,{
          className:HS.subjectName,children:Ud(o)??Th(o.email)
        }),(0,V.jsx)(`span`,{
          className:HS.subjectEmail,children:o.email
        })]
      }),p===null&&!s.hasFailed&&(0,V.jsx)(Am,{
        height:168,rounded:8
      }),s.hasFailed&&(0,V.jsx)(`p`,{
        className:HS.alert,role:`alert`,children:a(`partners.c_load_failed`)
      }),p!==null&&h&&(0,V.jsxs)(V.Fragment,{
        children:[(0,V.jsx)(WS,{
          said:p,byAdministrator:n
        }),(0,V.jsxs)(`label`,{
          className:HS.confirm,children:[(0,V.jsx)(`input`,{
            type:`checkbox`,checked:m,disabled:s.isSending,onChange:e=>d(e.target.checked?o.id:null)
          }),(0,V.jsx)(`span`,{
            children:a(`partners.c_confirm`)
          })]
        }),s.refusal!==null&&(0,V.jsx)(`p`,{
          className:HS.alert,role:`alert`,id:f,children:a(s.refusal===`pending`?`partners.c_blocked`:`partners.c_failed`)
        })]
      }),p?.state===`clearing`&&(0,V.jsx)(GS,{
        said:p
      }),p?.state===`cleared`&&(0,V.jsxs)(`output`,{
        className:HS.done,"data-clearance":`cleared`,children:[(0,V.jsx)(`span`,{
          className:HS.doneTitle,children:a(`partners.c_done`)
        }),(0,V.jsx)(`span`,{
          className:HS.hint,children:a(`partners.c_done_hint`)
        })]
      })]
    })
  })
}

var qS=`ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789`,JS=224;

function YS(){
  for(;;){
    let e=``;
    for(;e.length<16;)for(let t of crypto.getRandomValues(new Uint8Array(32)))t<JS&&e.length<16&&(e+=qS.charAt(t%56));
    if(/[A-Z]/.test(e)&&/[a-z]/.test(e)&&/\d/.test(e))return e
  }
}

var XS=`ClearNode 直属`,ZS=({
  email:e,password:t,alliance:n,site:r
})=>[`【ClearNode】`,`账号邮箱：${e}`,`账号密码：${t}`,`所属联盟：${n}`,`访问网页：${r}`].join(`
`),Z={
  band:`Partners-module__band___-8zyl`,counts:`Partners-module__counts___wYdOy`,headFind:`Partners-module__headFind___HFnbp`,groups:`Partners-module__groups___bXZqg`,forest:`Partners-module__forest___S0KBt`,children:`Partners-module__children___urVjF`,group:`Partners-module__group___jjAoU`,noneBelow:`Partners-module__noneBelow___HkomQ`,fold:`Partners-module__fold___sY30t`,card:`Partners-module__card___aeY4I`,accent:`Partners-module__accent___SFCDL`,line:`Partners-module__line___fypKc`,name:`Partners-module__name___blz27`,remarkEdit:`Partners-module__remarkEdit___-3xac`,kinds:`Partners-module__kinds___1q1W9`,kind:`Partners-module__kind___ETXtw`,above:`Partners-module__above___aYPi3`,multiplier:`Partners-module__multiplier___Zcgtw`,deploys:`Partners-module__deploys___Lv1rU`,deploysSwitch:`Partners-module__deploysSwitch___1LI4N`,allianceKey:`Partners-module__allianceKey___Yk2CK`,deploysFailed:`Partners-module__deploysFailed___9cjAQ`,multiplierEdit:`Partners-module__multiplierEdit___cl3JY`,email:`Partners-module__email___jhYv9`,meta:`Partners-module__meta___OmjLy`,clear:`Partners-module__clear___8AdcE`,numbers:`Partners-module__numbers___8UWmn`,rates:`Partners-module__rates___wrS1W`,ratesName:`Partners-module__ratesName___WgqZ3`,figures:`Partners-module__figures___-3EBn`,earnings:`Partners-module__earnings___0OkOv`,figure:`Partners-module__figure___8TBBL`,awaited:`Partners-module__awaited___BUo-S`,of:`Partners-module__of___P0drh`,strip:`Partners-module__strip___eaPe2`,head:`Partners-module__head___K0ZrG`,form:`Partners-module__form___sI-bH`,subject:`Partners-module__subject___vE6Rs`,subjectNow:`Partners-module__subjectNow___cCPOQ`,choices:`Partners-module__choices___Vpq4i`,choice:`Partners-module__choice___tr0-g`,choiceName:`Partners-module__choiceName___yg9Gj`,choiceHint:`Partners-module__choiceHint___AiVwQ`,passwordInput:`Partners-module__passwordInput___0IcY9`,generate:`Partners-module__generate___oVhUf`,handover:`Partners-module__handover___fL8Vm`,handoverNote:`Partners-module__handoverNote___qotcb`,copyAll:`Partners-module__copyAll___DK-OG`,allow:`Partners-module__allow___qJNxR`,allowName:`Partners-module__allowName___GsBC9`,allowHint:`Partners-module__allowHint___XZQTT`,failure:`Partners-module__failure___5bMnD`,failureSaid:`Partners-module__failureSaid___Hhq-r`
};

function QS({
  handover:e
}){
  let{
    t
  }
  =N(),n=[[`h_email`,e.email],[`h_password`,e.password],[`h_alliance`,e.alliance],[`h_site`,e.site]];
  return(0,V.jsxs)(`div`,{
    className:Z.form,children:[(0,V.jsx)(`dl`,{
      className:Z.handover,children:n.map(([e,n])=>(0,V.jsxs)(`div`,{
        children:[(0,V.jsx)(`dt`,{
          children:t(`partners.${e}`)
        }),(0,V.jsx)(`dd`,{
          children:n
        })]
      },e))
    }),(0,V.jsx)(`p`,{
      className:Z.handoverNote,children:t(`partners.h_note`)
    })]
  })
}

var $S=/^[^@\s]+@[^@\s]+\.[^@\s]+$/,eC=8,tC={
  email:``,password:``,multiplier:``,allowsBelow:!1
};

function nC(e){
  let{
    open:t,below:n,alliance:r,onClose:i,onCreated:a
  }
  =e,{
    t:o
  }
  =N(),s=(0,_.useId)(),[c,l]=(0,_.useState)(tC),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(`idle`),T=c.email.trim(),E=c.multiplier.trim(),D={
    email:$S.test(T),password:c.password.length>=eC,multiplier:Ld(E)
  },O=()=>{
    m||(l(tC),d(!1),p(!1),v(null),S(null),w(`idle`),i())
  },k=async()=>{
    if(p(!0),v(null),D.email&&D.password&&D.multiplier){
      h(!0);
      try{
        await Nf.openPartner({
          email:T,password:c.password,multiplier:E,canCreateSuppliers:!n&&c.allowsBelow
        })
      }catch(e){
        if(!(e instanceof U)&&!(e instanceof W))throw e;
        let t=e instanceof U?e.code:`other`;
        b(e instanceof U?e.detail??null:null),v(t===`email_taken`||t===`multiplier_required`?t:`other`),h(!1);
        return
      }
      h(!1),S({
        email:T,password:c.password,alliance:r,site:window.location.origin
      }),a()
    }
  },A=async()=>{
    if(x!==null)try{
      await navigator.clipboard.writeText(ZS(x)),w(`done`)
    }catch(e){
      if(!(e instanceof DOMException))throw e;
      w(`failed`)
    }
  },j=g===`email_taken`?`partners.email_taken`:`partners.email_invalid`,ee=f&&!D.multiplier||g===`multiplier_required`;
  return(0,V.jsx)(ph,{
    open:t,onClose:O,title:o(x===null?n?`partners.dialog_title_below`:`partners.dialog_title`:`partners.created_title`),width:460,closeDisabled:m,footer:x===null?(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:O,disabled:m,children:o(`common.cancel`)
      }),(0,V.jsx)(K,{
        type:`submit`,form:s,disabled:m,"aria-busy":m,children:o(m?`partners.sending`:`partners.submit`)
      })]
    }):(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:O,children:o(`partners.done`)
      }),(0,V.jsx)(K,{
        className:Z.copyAll,onClick:()=>void A(),children:o(C===`done`?`partners.copied`:`partners.copy_all`)
      })]
    }),children:x===null?(0,V.jsxs)(`form`,{
      id:s,className:Z.form,noValidate:!0,onSubmit:e=>{
        e.preventDefault(),k()
      },children:[(0,V.jsx)(Ub,{
        label:o(`partners.email`),type:`email`,name:`partner-email`,value:c.email,onChange:e=>l({
          ...c,email:e.target.value
        }),autoComplete:`off`,spellCheck:!1,"data-autofocus":!0,hint:o(`partners.email_hint`),error:f&&!D.email||g===`email_taken`?o(j):void 0
      }),(0,V.jsx)(Ub,{
        label:o(`partners.password`),type:u?`text`:`password`,name:`partner-password`,className:Z.passwordInput,value:c.password,onChange:e=>l({
          ...c,password:e.target.value
        }),autoComplete:`new-password`,spellCheck:!1,hint:o(`partners.password_hint`),error:f&&!D.password?o(`partners.password_short`):void 0,rightElement:(0,V.jsx)(`button`,{
          type:`button`,className:Z.generate,onClick:()=>{
            l({
              ...c,password:YS()
            }),d(!0)
          },children:o(`partners.generate`)
        })
      }),(0,V.jsx)(Ub,{
        label:o(`partners.multiplier_label`),name:`partner-multiplier`,inputMode:`decimal`,value:c.multiplier,onChange:e=>l({
          ...c,multiplier:e.target.value
        }),autoComplete:`off`,placeholder:`1.8`,"aria-required":`true`,hint:o(`partners.multiplier_hint`),error:ee?o(`partners.multiplier_invalid`):void 0
      }),!n&&(0,V.jsxs)(`div`,{
        className:Z.allow,children:[(0,V.jsxs)(`div`,{
          children:[(0,V.jsx)(`span`,{
            className:Z.allowName,children:o(`partners.allow_below`)
          }),(0,V.jsx)(`p`,{
            className:Z.allowHint,children:o(`partners.allow_below_hint`)
          })]
        }),(0,V.jsx)(hx,{
          checked:c.allowsBelow,onChange:e=>l({
            ...c,allowsBelow:e
          }),label:o(`partners.allow_below`),disabled:m
        })]
      }),g===`other`&&(0,V.jsxs)(`p`,{
        className:Z.failure,role:`alert`,children:[o(`partners.failed`),y!==null&&(0,V.jsx)(`span`,{
          className:Z.failureSaid,children:y
        })]
      })]
    }):(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(QS,{
        handover:x
      }),C===`failed`&&(0,V.jsx)(`p`,{
        className:Z.failure,role:`alert`,children:o(`partners.copy_failed`)
      })]
    })
  })
}

function rC({
  partner:e,onClose:t,onChanged:n
}){
  let{
    t:r
  }
  =N(),i=(0,_.useId)(),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),h=mh(e),g=a.trim(),v=g!==``&&g===h?.multiplier,y=Ld(g)&&!v,b=()=>{
    o(``),c(null),u(!1),m(!1)
  },x=()=>{
    d||(b(),t())
  },S=async()=>{
    if(u(!0),m(!1),h!==null&&y&&s!==null){
      f(!0);
      try{
        await Nf.changeMultiplier(h.id,{
          multiplier:g,applies:s
        })
      }catch(e){
        if(!(e instanceof U)&&!(e instanceof W))throw e;
        m(!0),f(!1);
        return
      }
      f(!1),b(),n()
    }
  };
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:x,title:r(`partners.m_title`),width:460,closeDisabled:d,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:x,disabled:d,children:r(`common.cancel`)
      }),(0,V.jsx)(K,{
        type:`submit`,form:i,disabled:d,"aria-busy":d,children:r(d?`partners.m_sending`:`partners.m_submit`)
      })]
    }),children:(0,V.jsxs)(`form`,{
      id:i,className:Z.form,noValidate:!0,onSubmit:e=>{
        e.preventDefault(),S()
      },children:[(0,V.jsxs)(`p`,{
        className:Z.subject,children:[(0,V.jsx)(`span`,{
          children:h?.email
        }),(0,V.jsx)(`span`,{
          className:Z.subjectNow,children:r(`partners.m_current`,{
            value:h?.multiplier==null?r(`partners.unset`):r(`partners.multiplier_of`,{
              value:h.multiplier
            })
          })
        })]
      }),(0,V.jsx)(Ub,{
        label:r(`partners.m_new`),name:`partner-new-multiplier`,inputMode:`decimal`,value:a,onChange:e=>o(e.target.value),autoComplete:`off`,placeholder:`1.8`,"aria-required":`true`,"data-autofocus":!0,hint:r(`partners.m_new_hint`),error:(()=>{
          if(l&&!y)return r(v?`partners.m_same`:`partners.multiplier_invalid`)
        })()
      }),(0,V.jsxs)(`fieldset`,{
        className:Z.choices,children:[(0,V.jsx)(`legend`,{
          children:r(`partners.m_applies`)
        }),Hd.map(e=>(0,V.jsxs)(`label`,{
          className:Z.choice,children:[(0,V.jsx)(`input`,{
            type:`radio`,name:`partner-multiplier-applies`,value:e,checked:s===e,onChange:()=>c(e)
          }),(0,V.jsxs)(`span`,{
            children:[(0,V.jsx)(`span`,{
              className:Z.choiceName,children:r(`partners.m_${e}`)
            }),(0,V.jsx)(`span`,{
              className:Z.choiceHint,children:r(`partners.m_${e}_hint`)
            })]
          })]
        },e)),l&&s===null&&(0,V.jsx)(`p`,{
          className:Z.failure,role:`alert`,children:r(`partners.m_applies_required`)
        })]
      }),p&&(0,V.jsx)(`p`,{
        className:Z.failure,role:`alert`,children:r(`partners.m_failed`)
      })]
    })
  })
}

var iC={
  zone:`HostedZone-module__zone___y59hz`,head:`HostedZone-module__head___PKUFM`,title:`HostedZone-module__title___ahoP1`,hint:`HostedZone-module__hint___apI3r`
};

function aC({
  children:e
}){
  let{
    t
  }
  =N();
  return(0,V.jsxs)(`section`,{
    className:iC.zone,"aria-labelledby":`hosted-zone`,"data-hosted-zone":!0,children:[(0,V.jsxs)(`div`,{
      className:iC.head,children:[(0,V.jsx)(`h2`,{
        className:iC.title,id:`hosted-zone`,children:t(`partners.hosted_title`)
      }),(0,V.jsx)(`p`,{
        className:iC.hint,children:t(`partners.hosted_hint`)
      })]
    }),e]
  })
}

var oC={
  copy:`CopyButton-module__copy___HO73E`
},sC=1600;

function cC({
  name:e,held:t
}){
  let{
    t:n
  }
  =N(),[r,i]=(0,_.useState)(`idle`);
  (0,_.useEffect)(()=>{
    if(r===`idle`)return;let e=setTimeout(()=>i(`idle`),sC);return()=>clearTimeout(e)
  },[r]);
  let a=async()=>{
    if(t.status===`held`)try{
      await navigator.clipboard.writeText(t.key),i(`copied`)
    }catch(e){
      if(!(e instanceof DOMException))throw e;
      i(`failed`)
    }
  },o=t.status===`held`?n(`partners.key_copy_of`,{
    name:e
  }):n(t.status===`reading`?`partners.key_reading_of`:`partners.key_none_of`,{
    name:e
  });
  return(0,V.jsxs)(`button`,{
    type:`button`,className:`${oC.copy} ${Z.allianceKey}`,"data-alliance-key":t.status,"data-outcome":r,"aria-disabled":t.status!==`held`||void 0,onClick:()=>void a(),"aria-label":o,title:o,children:[r===`copied`&&(0,V.jsx)(fp,{
      size:14
    }),r===`failed`&&(0,V.jsx)(ap,{
      size:14
    }),r===`idle`&&(0,V.jsx)(Qf,{
      size:14
    }),(0,V.jsxs)(`span`,{
      className:`visually-hidden`,"aria-live":`polite`,children:[r===`copied`&&n(`common.copied`),r===`failed`&&n(`common.copy_failed`)]
    })]
  })
}

function lC({
  name:e,open:t,onSwitch:n,allianceKey:r
}){
  let{
    t:i
  }
  =N(),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(!1),l=async e=>{
    o(e),c(!1);
    try{
      await n(e)
    }catch(e){
      if(!(e instanceof U)&&!(e instanceof W))throw e;
      c(!0)
    }finally{
      o(null)
    }
  };
  return(0,V.jsxs)(`span`,{
    className:Z.deploys,children:[(0,V.jsx)(`output`,{
      className:Z.deploysFailed,children:s?i(`partners.deploys_failed`):null
    }),r!==null&&(0,V.jsx)(cC,{
      name:e,held:r
    }),(0,V.jsx)(`span`,{
      className:Z.deploysSwitch,title:i(`partners.deploys_hint`),children:(0,V.jsx)(hx,{
        checked:a??t,disabled:a!==null,label:i(`partners.deploys_open_of`,{
          name:e
        }),onChange:e=>void l(e)
      })
    })]
  })
}

var uC=e=>e.normalize(`NFKC`).toLowerCase(),dC=e=>uC(e).split(/\s+/).filter(e=>e!==``);

function fC({
  names:e,email:t
},n){
  let r=uC([...e.filter(e=>e!==null),t].join(`
`));
  return n.every(e=>r.includes(e))
}

var pC=(e,t,n)=>e.filter(e=>fC(n(e),t)),mC=({
  partner:e
})=>({
  names:[e.remark,e.remarkAbove],email:e.email
}),hC=(e,t)=>fC(mC(e),t)||e.children.some(e=>hC(e,t)),gC=new Set;

function _C(e,t){
  if(t.length===0)return{
    forest:e,opened:gC,count:e.reduce((e,t)=>e+1+t.children.length,0)
  };
  let n=[],r=new Set,i=0;
  for(let a of e){
    let e=fC(mC(a),t),o=a.children.filter(e=>hC(e,t));
    (e||o.length!==0)&&(i+=o.length+ +!!e,o.length===0?n.push(a):(n.push({
      ...a,children:o
    }),r.add(a.partner.id)))
  }
  return{
    forest:n,opened:r,count:i
  }
}

function vC(e,t){
  let n=uC(e),r=[{
    text:e,isFound:!1,at:0
  }];
  if(e===``||t.length===0||n.length!==e.length)return r;
  let i=Array(e.length).fill(!1);
  for(let e of t)for(let t=n.indexOf(e);t!==-1;t=n.indexOf(e,t+1))i.fill(!0,t,t+e.length);
  let a=[];
  for(let t=0;t<e.length;){
    let n=t+1;
    for(;n<e.length&&i[n]===i[t];)n+=1;
    a.push({
      text:e.slice(t,n),isFound:i[t]===!0,at:t
    }),t=n
  }
  return a
}

var yC={
  find:`PartnerSearch-module__find___RGxJH`,found:`PartnerSearch-module__found___ITv0t`,box:`PartnerSearch-module__box___d-EVT`,icon:`PartnerSearch-module__icon___FN6Ch`,clear:`PartnerSearch-module__clear___aWxRj`,mark:`PartnerSearch-module__mark___cQi4F`
};

function bC({
  value:e,onChange:t,found:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=(0,_.useRef)(null),o=dC(e).length>0,s=()=>{
    t(``),a.current?.querySelector(`input`)?.focus()
  };
  return(0,V.jsxs)(`search`,{
    className:yC.find,children:[(0,V.jsx)(`output`,{
      className:yC.found,children:o&&(n===0?r(`partners.find_none`):r(`partners.find_count`,{
        count:Eh(n,i.language)
      }))
    }),(0,V.jsx)(`div`,{
      className:yC.box,ref:a,children:(0,V.jsx)(Ub,{
        type:`search`,value:e,onChange:e=>t(e.target.value),onKeyDown:t=>{
          t.key===`Escape`&&e!==``&&(t.preventDefault(),s())
        },placeholder:r(`partners.find_placeholder`),"aria-label":r(`partners.find_label`),autoComplete:`off`,spellCheck:!1,rightElement:e===``?(0,V.jsx)(up,{
          className:yC.icon,size:16
        }):(0,V.jsx)(`button`,{
          type:`button`,className:yC.clear,onClick:s,"aria-label":r(`partners.find_clear`),children:(0,V.jsx)(dp,{
            size:14
          })
        })
      })
    })]
  })
}

function xC({
  text:e,terms:t
}){
  let n=vC(e,t);
  return n.every(e=>!e.isFound)?e:n.map(e=>e.isFound?(0,V.jsx)(`mark`,{
    className:yC.mark,children:e.text
  },e.at):e.text)
}

function SC({
  onClear:e
}){
  let{
    t
  }
  =N();
  return(0,V.jsxs)(`div`,{
    className:`empty-state`,children:[(0,V.jsx)(`div`,{
      className:`empty-content`,children:(0,V.jsxs)(`div`,{
        children:[(0,V.jsx)(`div`,{
          className:`empty-title`,children:t(`partners.find_empty_title`)
        }),(0,V.jsx)(`div`,{
          className:`empty-desc`,children:t(`partners.find_empty_desc`)
        })]
      })
    }),(0,V.jsx)(`div`,{
      className:`empty-action`,children:(0,V.jsx)(K,{
        variant:`secondary`,onClick:e,children:t(`partners.find_clear`)
      })
    })]
  })
}

function CC({
  name:e,shown:t,onSwitch:n
}){
  let{
    t:r
  }
  =N(),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(!1),c=async e=>{
    a(e),s(!1);
    try{
      await n(e)
    }catch(e){
      if(!(e instanceof U)&&!(e instanceof W))throw e;
      s(!0)
    }finally{
      a(null)
    }
  };
  return(0,V.jsxs)(`span`,{
    className:Z.rates,title:r(`partners.rates_hint`),children:[(0,V.jsx)(`output`,{
      className:Z.ratesName,"data-failed":o||void 0,children:r(o?`partners.rates_failed`:`partners.rates_shown`)
    }),(0,V.jsx)(hx,{
      checked:i??t,disabled:i!==null,label:r(`partners.rates_shown_of`,{
        name:e
      }),onChange:e=>void c(e)
    })]
  })
}

var wC={
  columns:9,rows:7,pitch:5
},TC=.3;

function EC({
  figures:e
}){
  return e.total===0?`disabled`:e.dead/e.total>TC?`fault`:e.limited/e.total>TC?`limited`:`enabled`
}

var DC=(e,t)=>e===null?`–`:new Intl.DateTimeFormat(t,{
  dateStyle:`medium`
}).format(new Date(e));

function OC({
  name:e,mark:t,children:n
}){
  return(0,V.jsxs)(`div`,{
    className:Z.figure,children:[(0,V.jsxs)(`dt`,{
      children:[t,e]
    }),(0,V.jsx)(`dd`,{
      children:n
    })]
  })
}

function kC(e){
  let{
    node:t,kind:n,lead:r,fold:i,onEditMultiplier:a,onEditRemark:o,onClear:s,onSwitchRates:c
  }
  =e,{
    marks:l,onSwitchDeploys:u,allianceKey:d
  }
  =e,{
    t:f,i18n:p
  }
  =N(),{
    partner:m,figures:h,states:g,below:_
  }
  =t,v=e.heading??(n===`below`?`h3`:`h2`),y=e=>Eh(e,p.language),b=J_(m.id),x=e=>b===`pending`?(0,V.jsx)(Am,{
    className:Z.awaited,width:r?64:44,height:r?18:12,rounded:4
  }):Dh(b?.[e],p.language),S=bv.filter(e=>g[e]>0),C=m.remarkAbove===null||m.remarkAbove===m.remark?null:m.remark===null?f(`partners.remark_above`):f(`partners.remark_above_is`,{
    name:m.remarkAbove
  }),w=m.multiplier===null?f(`partners.unset`):f(`partners.multiplier_of`,{
    value:m.multiplier
  });
  return(0,V.jsxs)(`article`,{
    className:Z.card,"data-lead":r||void 0,children:[(0,V.jsx)(OS,{
      className:Z.accent,tone:EC(t),shape:`corner`,seed:Number(m.id.slice(-6)),...wC
    }),i!==null&&(0,V.jsx)(`button`,{
      type:`button`,className:Z.fold,"aria-expanded":i.expanded,"aria-label":f(i.expanded?`partners.collapse`:`partners.expand`,{
        name:m.email
      }),onClick:i.onToggle,children:(0,V.jsx)(sp,{
        size:16
      })
    }),(0,V.jsxs)(`div`,{
      className:`${Z.line} ${Z.head}`,children:[(0,V.jsx)(v,{
        className:Z.name,title:m.email,children:(0,V.jsx)(xC,{
          text:Ud(m)??Th(m.email),terms:l
        })
      }),o!==null&&(0,V.jsx)(`button`,{
        type:`button`,className:Z.remarkEdit,onClick:o,"aria-label":m.remark===null?f(`partners.remark_add_for`,{
          name:m.email
        }):f(`partners.remark_edit_of`,{
          name:m.email,value:m.remark
        }),title:f(`partners.remark`),children:(0,V.jsx)(ip,{
          size:12
        })
      }),(0,V.jsxs)(`span`,{
        className:Z.kinds,children:[C!==null&&(0,V.jsx)(`span`,{
          className:Z.above,title:f(`partners.remark_above_hint`),children:(0,V.jsx)(xC,{
            text:C,terms:l
          })
        }),(0,V.jsx)(`span`,{
          className:Z.kind,children:f(`partners.kind_${n}`)
        }),_>0&&(0,V.jsx)(`span`,{
          className:Z.kind,children:f(r?`partners.below`:`partners.below_inside`,{
            shown:y(_)
          })
        })]
      }),u!==null&&(0,V.jsx)(lC,{
        name:m.email,open:!m.isDeployClosed,onSwitch:u,allianceKey:d
      }),a===null?(0,V.jsx)(`span`,{
        className:Z.multiplier,"data-unset":m.multiplier===null||void 0,children:w
      }):(0,V.jsxs)(`button`,{
        type:`button`,className:`${Z.multiplier} ${Z.multiplierEdit}`,"data-unset":m.multiplier===null||void 0,onClick:a,"aria-label":f(`partners.edit_multiplier_of`,{
          name:m.email,value:w
        }),title:f(`partners.edit_multiplier`),children:[w,(0,V.jsx)(ip,{
          size:12
        })]
      })]
    }),(0,V.jsxs)(`div`,{
      className:Z.line,children:[(0,V.jsx)(`span`,{
        className:Z.email,children:(0,V.jsx)(xC,{
          text:m.email,terms:l
        })
      }),(0,V.jsx)(`span`,{
        className:Z.meta,children:f(`partners.opened`,{
          date:DC(m.createdAt,p.language)
        })
      }),s!==null&&(0,V.jsx)(`button`,{
        type:`button`,className:Z.clear,onClick:s,"aria-haspopup":`dialog`,"aria-label":f(`partners.clear_of`,{
          name:m.email
        }),children:f(m.isClearing?`partners.clearing`:`partners.clear`)
      })]
    }),(0,V.jsxs)(`div`,{
      className:Z.numbers,children:[(0,V.jsxs)(`dl`,{
        className:Z.figures,children:[(0,V.jsx)(OC,{
          name:f(`pool.stat_accounts`),children:y(h.total)
        }),(0,V.jsx)(OC,{
          name:`RPM`,children:y(h.rpm)
        }),(0,V.jsxs)(OC,{
          name:f(`pool.stat_available`),children:[y(h.serving),(0,V.jsxs)(`span`,{
            className:Z.of,children:[`/ `,y(h.healthy)]
          })]
        }),(0,V.jsx)(OC,{
          name:f(`pool.stat_limited`),mark:(0,V.jsx)(Tb,{
            state:`limited`
          }),children:y(h.limited)
        }),(0,V.jsx)(OC,{
          name:f(`pool.stat_dead`),mark:(0,V.jsx)(Tb,{
            state:`fault`
          }),children:y(h.dead)
        })]
      }),(0,V.jsxs)(`dl`,{
        className:`${Z.figures} ${Z.earnings}`,"data-earned":b===`pending`?`pending`:b===null?`unknown`:`known`,title:b===null?f(`partners.earned_unknown`):void 0,children:[(0,V.jsx)(OC,{
          name:f(`pool.stat_today`),children:x(`today`)
        }),(0,V.jsx)(OC,{
          name:f(`pool.stat_total`),children:x(`total`)
        })]
      }),c!==null&&(0,V.jsx)(CC,{
        name:m.email,shown:m.showsRates,onSwitch:c
      })]
    }),(0,V.jsx)(`div`,{
      className:Z.strip,"aria-hidden":`true`,children:S.map(e=>(0,V.jsx)(`span`,{
        "data-state":e,style:{
          flexGrow:g[e]
        }
      },e))
    })]
  })
}

var AC=[`...XXX...`,`.XXXXXXX.`,`XXXXXXXXX`,`XXXXXXXXX`,`XX..X..XX`,`XX..X..XX`,`XXXXXXXXX`,`XXXXXXXXX`,`XXXXXXXXX`,`X.XX.XX.X`],jC=AC[0].length,MC=AC.length,NC=AC.flatMap((e,t)=>[...e.matchAll(/X+/g)].map(e=>`M${e.index} ${t}h${e[0].length}v1h-${e[0].length}z`)).join(``);

function PC({
  className:e
}){
  return(0,V.jsx)(`svg`,{
    className:e,viewBox:`0 0 ${jC} ${MC}`,width:jC,height:MC,shapeRendering:`crispEdges`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{
      d:NC,fill:`currentColor`
    })
  })
}

var FC={
  sections:`Divisions-module__sections___HQ4RI`,section:`Divisions-module__section___44L0J`,bar:`Divisions-module__bar___ytkHe`,title:`Divisions-module__title___JrY5i`,name:`Divisions-module__name___7UJ-t`,toggle:`Divisions-module__toggle___-Vc-4`,chevron:`Divisions-module__chevron___bsbMH`,nameText:`Divisions-module__nameText___3DW-o`,count:`Divisions-module__count___pEO4u`,edit:`Divisions-module__edit___l97Qk`,figures:`Divisions-module__figures___bYZqE`,figure:`Divisions-module__figure___PYnvC`,of:`Divisions-module__of___ydUW5`,awaited:`Divisions-module__awaited___kS6Gg`,ghost:`Divisions-module__ghost___rtGBN`,strip:`Divisions-module__strip___a2HXa`,members:`Divisions-module__members___rBAhE`,nobody:`Divisions-module__nobody___cVuV6`,headTools:`Divisions-module__headTools___uZCvH`,picker:`Divisions-module__picker___aR13F`,pickerName:`Divisions-module__pickerName___eQ6KF`,pickerCount:`Divisions-module__pickerCount___JsQ0W`,pickerTools:`Divisions-module__pickerTools___jfVlP`,pickerFind:`Divisions-module__pickerFind___-Uty4`,pickerIcon:`Divisions-module__pickerIcon___CY1b-`,pickerAll:`Divisions-module__pickerAll___fG0gQ`,pickerList:`Divisions-module__pickerList___2boEn`,pickerNone:`Divisions-module__pickerNone___EvuaZ`,pick:`Divisions-module__pick___8Cjhd`,pickBox:`Divisions-module__pickBox___-La92`,pickName:`Divisions-module__pickName___i7mUo`,pickEmail:`Divisions-module__pickEmail___nwIcX`,pickSide:`Divisions-module__pickSide___opuVT`,moving:`Divisions-module__moving___cEurx`,dissolve:`Divisions-module__dissolve___qcYlq`,dissolveNote:`Divisions-module__dissolveNote___FFPGC`
};

function IC({
  name:e,mark:t,children:n
}){
  return(0,V.jsxs)(`div`,{
    className:FC.figure,children:[(0,V.jsxs)(`dt`,{
      children:[t,e]
    }),(0,V.jsx)(`dd`,{
      children:n
    })]
  })
}

function LC(){
  return(0,V.jsx)(Am,{
    className:FC.awaited,width:44,height:12,rounded:4
  })
}

function RC(e){
  let{
    name:t,isUnfiled:n,members:r,inside:i,tally:a,earned:o,residents:s
  }
  =e,{
    expanded:c,onToggle:l,onEdit:u
  }
  =e,{
    t:d,i18n:f
  }
  =N(),p=e=>Eh(e,f.language),{
    figures:m,states:h
  }
  =a,g=bv.filter(e=>h[e]>0),_=e=>o===`pending`?(0,V.jsx)(LC,{}):Dh(o?.[e],f.language);
  return(0,V.jsxs)(`div`,{
    className:FC.bar,"data-division-bar":!0,"data-unfiled":n||void 0,"data-open":c,children:[(0,V.jsxs)(`div`,{
      className:FC.title,children:[(0,V.jsx)(`h3`,{
        className:FC.name,children:(0,V.jsxs)(`button`,{
          type:`button`,className:FC.toggle,"aria-expanded":c,"aria-label":d(c?`partners.div_collapse`:`partners.div_expand`,{
            name:t
          }),onClick:l,children:[(0,V.jsx)(`span`,{
            className:FC.chevron,"aria-hidden":`true`,children:(0,V.jsx)(sp,{
              size:16
            })
          }),(0,V.jsx)(`span`,{
            className:FC.nameText,title:t,children:t
          })]
        })
      }),(0,V.jsx)(`span`,{
        className:FC.count,"data-division-count":!0,children:d(`partners.div_members`,{
          count:r
        })
      }),i>0&&(0,V.jsx)(`span`,{
        className:FC.count,"data-division-inside":!0,children:d(`partners.below_inside`,{
          shown:p(i)
        })
      }),u!==null&&(0,V.jsx)(`button`,{
        type:`button`,className:FC.edit,onClick:u,"aria-haspopup":`dialog`,"aria-label":d(`partners.div_edit_of`,{
          name:t
        }),title:d(`partners.div_title_edit`),children:(0,V.jsx)(ip,{
          size:12
        })
      })]
    }),(0,V.jsxs)(`dl`,{
      className:FC.figures,children:[(0,V.jsx)(IC,{
        name:d(`pool.stat_accounts`),children:p(m.total)
      }),(0,V.jsx)(IC,{
        name:`RPM`,children:p(m.rpm)
      }),(0,V.jsxs)(IC,{
        name:d(`pool.stat_available`),children:[p(m.serving),(0,V.jsxs)(`span`,{
          className:FC.of,children:[`/ `,p(m.healthy)]
        })]
      }),(0,V.jsx)(IC,{
        name:d(`pool.stat_limited`),mark:(0,V.jsx)(Tb,{
          state:`limited`
        }),children:p(m.limited)
      }),(0,V.jsx)(IC,{
        name:d(`pool.stat_dead`),mark:(0,V.jsx)(Tb,{
          state:`fault`
        }),children:p(m.dead)
      }),(0,V.jsx)(IC,{
        name:d(`pool.stat_today`),children:_(`today`)
      }),(0,V.jsx)(IC,{
        name:d(`pool.stat_total`),children:_(`total`)
      }),(0,V.jsx)(IC,{
        name:d(`pool.valley`),mark:(0,V.jsx)(PC,{
          className:FC.ghost
        }),children:s===`pending`?(0,V.jsx)(LC,{}):s===null?`–`:p(s)
      })]
    }),(0,V.jsx)(`div`,{
      className:`${Z.strip} ${FC.strip}`,"aria-hidden":`true`,children:g.map(e=>(0,V.jsx)(`span`,{
        "data-state":e,style:{
          flexGrow:h[e]
        }
      },e))
    })]
  })
}

var zC=e=>e.trim(),BC=e=>e!==``&&e===e.trim()&&[...e].length<=24&&!/\p{Cc}/u.test(e),VC=e=>e.normalize(`NFKC`).toLowerCase(),HC=B({
  divisions:$n(B({
    lead_id:Ll,divisions:$n(B({
      id:z().regex(/^d[0-9a-z]{1,23}$/).brand(`DivisionId`),name:z(),members:$n(Ll)
    }).passthrough().transform(e=>({
      id:e.id,name:e.name,members:e.members
    })))
  }).passthrough().transform(e=>({
    leadId:e.lead_id,divisions:e.divisions
  })))
}).passthrough().transform(e=>e.divisions);

B({
  name:z().refine(BC),members:$n(Ll).max(2e3)
}).strict();

var UC=e=>({
  name:e.name,members:[...new Set(e.members)]
}),WC=`/ac3/divisions`,GC=(e,t)=>({
  method:e,body:JSON.stringify(t)
});

async function KC(){
  try{
    return HC.parse(await G(WC))
  }catch(e){
    if(e instanceof U&&e.status===404)return null;
    throw e
  }
}

async function qC(e){
  await G(WC,GC(`POST`,UC(e)))
}

async function JC(e,t){
  await G(`${WC}/${encodeURIComponent(e)}`,GC(`PUT`,UC(t)))
}

async function YC(e){
  await G(`${WC}/${encodeURIComponent(e)}`,{
    method:`DELETE`
  })
}

var XC=e=>e instanceof W?`failed`:e instanceof U?e.code===`name_taken`||e.code===`too_many`?e.code:`failed`:null;

function ZC({
  subject:e,divisions:t,onClose:n,onChanged:r
}){
  let{
    t:i,i18n:a
  }
  =N(),o=(0,_.useId)(),s=mh(e),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(!1),C=s?.division??null,w=s?.lead.children??[],T=c??C?.name??``,E=(0,_.useMemo)(()=>u??new Set(C?.members),[u,C]),D=(0,_.useMemo)(()=>{
    let e=new Map;for(let n of t)if(n.id!==C?.id)for(let t of n.members)e.set(t,n.name);return e
  },[t,C]),O=(0,_.useMemo)(()=>{
    let e=e=>C?.members.some(t=>t===e)?0:D.has(e)?2:1;return w.map((t,n)=>({
      node:t,at:n,rank:e(t.partner.id)
    })).toSorted((e,t)=>e.rank-t.rank||e.at-t.at).map(({
      node:e
    })=>e)
  },[w,C,D]),k=dC(f),A=O.filter(({
    partner:e
  })=>fC({
    names:[e.remark,e.remarkAbove],email:e.email
  },k)),j=A.length>0&&A.every(({
    partner:e
  })=>E.has(e.id)),ee=w.filter(({
    partner:e
  })=>E.has(e.id)&&D.has(e.id)).length,te=e=>Eh(e,a.language),ne=()=>{
    l(null),d(null),p(``),h(!1),b(null),S(!1)
  },re=()=>{
    g===null&&(ne(),n())
  },ie=(e,t)=>{
    let n=new Set(E);
    t?n.add(e):n.delete(e),d(n)
  },ae=e=>{
    let t=new Set(E);
    for(let{
      partner:n
    }
    of A)e?t.add(n.id):t.delete(n.id);
    d(t)
  },oe=async(e,t)=>{
    b(null),v(e);
    try{
      await t()
    }catch(e){
      let t=XC(e);
      if(t===null)throw e;
      b(t),v(null);
      return
    }
    v(null),ne(),r()
  },se=()=>{
    if(s===null)return;
    let e=zC(T),n=t.some(t=>t.id!==C?.id&&VC(t.name)===VC(e));
    if(!BC(e))return h(!0);
    if(n)return b(`name_taken`);
    let r={
      name:e,members:w.map(({
        partner:e
      })=>e.id).filter(e=>E.has(e))
    };
    oe(`save`,()=>C===null?qC(r):JC(C.id,r))
  },ce=()=>{
    if(C!==null){
      if(!x)return S(!0);
      oe(`dissolve`,()=>YC(C.id))
    }
  },le=C===null&&t.length>=40;
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:re,title:i(C===null?`partners.div_title_new`:`partners.div_title_edit`),width:560,closeDisabled:g!==null,footer:(0,V.jsxs)(V.Fragment,{
      children:[C!==null&&(0,V.jsxs)(`span`,{
        className:FC.dissolve,children:[(0,V.jsx)(K,{
          variant:x?`danger`:`ghost`,onClick:ce,disabled:g!==null,"aria-busy":g===`dissolve`,"data-division-dissolve":!0,children:i(g===`dissolve`?`partners.div_dissolving`:x?`partners.div_dissolve_sure`:`partners.div_dissolve`)
        }),(0,V.jsx)(`output`,{
          className:FC.dissolveNote,children:x&&g===null?i(`partners.div_dissolve_note`):null
        })]
      }),(0,V.jsx)(K,{
        variant:`secondary`,onClick:re,disabled:g!==null,children:i(`common.cancel`)
      }),(0,V.jsx)(K,{
        type:`submit`,form:o,disabled:g!==null||le,"aria-busy":g===`save`,children:i(g===`save`?`partners.div_saving`:`partners.div_save`)
      })]
    }),children:(0,V.jsxs)(`form`,{
      id:o,className:Z.form,noValidate:!0,onSubmit:e=>{
        e.preventDefault(),se()
      },children:[(0,V.jsx)(Ub,{
        label:i(`partners.div_name`),name:`division-name`,value:T,maxLength:48,onChange:e=>{
          l(e.target.value),h(!1),b(null)
        },autoComplete:`off`,spellCheck:!1,"data-autofocus":!0,hint:i(`partners.div_name_hint`,{
          max:24
        }),error:m?i(`partners.div_name_invalid`,{
          max:24
        }):y===`name_taken`?i(`partners.div_name_taken`):void 0
      }),(0,V.jsxs)(`fieldset`,{
        className:FC.picker,children:[(0,V.jsxs)(`legend`,{
          className:FC.pickerName,children:[i(`partners.div_members_label`),(0,V.jsx)(`span`,{
            className:FC.pickerCount,"data-division-ticked":!0,children:i(`partners.div_ticked`,{
              count:te(E.size),of:te(w.length)
            })
          })]
        }),(0,V.jsxs)(`div`,{
          className:FC.pickerTools,children:[(0,V.jsx)(`div`,{
            className:FC.pickerFind,children:(0,V.jsx)(Ub,{
              type:`search`,value:f,onChange:e=>p(e.target.value),placeholder:i(`partners.find_placeholder`),"aria-label":i(`partners.div_find`),autoComplete:`off`,spellCheck:!1,rightElement:(0,V.jsx)(up,{
                className:FC.pickerIcon,size:16
              })
            })
          }),(0,V.jsx)(`button`,{
            type:`button`,className:FC.pickerAll,onClick:()=>ae(!j),disabled:A.length===0,children:i(j?`partners.div_untick_listed`:`partners.div_tick_listed`,{
              count:te(A.length)
            })
          })]
        }),A.length===0?(0,V.jsx)(`p`,{
          className:FC.pickerNone,children:i(w.length===0?`partners.none_below`:`partners.find_none`)
        }):(0,V.jsx)(`ul`,{
          className:FC.pickerList,children:A.map(({
            partner:e,figures:t
          })=>{
            let n=E.has(e.id),r=D.get(e.id);return(0,V.jsx)(`li`,{
              children:(0,V.jsxs)(`label`,{
                className:FC.pick,"data-in":n||void 0,children:[(0,V.jsx)(`input`,{
                  type:`checkbox`,checked:n,onChange:t=>ie(e.id,t.target.checked)
                }),(0,V.jsx)(`span`,{
                  className:FC.pickBox,"aria-hidden":`true`,children:n&&(0,V.jsx)(fp,{
                    size:12
                  })
                }),(0,V.jsx)(`span`,{
                  className:FC.pickName,children:Ud(e)??Th(e.email)
                }),(0,V.jsx)(`span`,{
                  className:FC.pickEmail,children:e.email
                }),(0,V.jsx)(`span`,{
                  className:FC.pickSide,children:r===void 0?i(`partners.div_pick_accounts`,{
                    count:te(t.total)
                  }):i(n?`partners.div_pick_moves`:`partners.div_pick_in`,{
                    name:r
                  })
                })]
              })
            },e.id)
          })
        })]
      }),(0,V.jsx)(`output`,{
        className:FC.moving,children:ee>0?i(`partners.div_moving`,{
          count:te(ee)
        }):null
      }),le&&(0,V.jsx)(`p`,{
        className:Z.failure,role:`alert`,children:i(`partners.div_too_many`,{
          max:40
        })
      }),(y===`failed`||y===`too_many`&&!le)&&(0,V.jsx)(`p`,{
        className:Z.failure,role:`alert`,children:i(y===`failed`?`partners.div_failed`:`partners.div_too_many`,{
          max:40
        })
      })]
    })
  })
}

async function QC(e){
  try{
    return ad.parse(await G(`/ac3/ghosts?${jf(e,{})}`))
  }catch(e){
    if(e instanceof U&&e.status===404)return null;
    throw e
  }
}

var $C=e=>e.division?.id??`-`;

function ew(e,t){
  if(t.length===0)return[];
  let n=new Map;
  for(let e of t)for(let t of e.members)n.has(t)||n.set(t,e.id);
  let r=t.map(t=>({
    division:t,members:e.filter(e=>n.get(e.partner.id)===t.id)
  })),i=e.filter(e=>!n.has(e.partner.id));
  return i.length>0?[...r,{
    division:null,members:i
  }]:r
}

function tw(e,t){
  let n=new Set(t.map(e=>e.partner.id));
  return e.map(e=>({
    ...e,members:e.members.filter(e=>n.has(e.partner.id))
  })).filter(e=>e.members.length>0)
}

var nw=[`enabled`,`limited`,`fault`,`disabled`,`deploying`,`deploy_failed`];

function rw(e){
  let t=t=>e.reduce((e,n)=>e+t(n),0),n=Object.fromEntries(nw.map(e=>[e,t(t=>t.states[e])]));
  return{
    figures:{
      total:t(e=>e.figures.total),healthy:t(e=>e.figures.healthy),serving:t(e=>e.figures.serving),limited:t(e=>e.figures.limited),dead:t(e=>e.figures.dead),rpm:t(e=>e.figures.rpm)
    },states:n
  }
}

function iw(e,t){
  let n=0,r=0;
  for(let i of e){
    let e=t.byPartner.get(i.partner.id)?.branch;
    if(e===void 0)return null;
    n+=e.total,r=r===null||e.today===null?null:r+e.today
  }
  return{
    today:r,total:n
  }
}

function aw(e){
  return[e.partner.id,...e.children.flatMap(aw)]
}

function ow(e){
  let t=new Map;
  for(let{
    owner:n
  }
  of e)n!==null&&t.set(n.id,(t.get(n.id)??0)+1);
  return t
}

function sw(e,t){
  return e.flatMap(aw).reduce((e,n)=>e+(t.get(n)??0),0)
}

function cw(e,t,n){
  return n!==t.has($C(e))
}

var lw=e=>e instanceof U||e instanceof W||e instanceof bt;

function uw(e){
  let[t,n]=(0,_.useState)(null),r=(0,_.useCallback)(async()=>{
    if(e!==null)try{
      let t=await KC();if(q.getState().principal?.id!==e)return;let r=new Map((t??[]).map(e=>[e.leadId,e.divisions]));n(t===null?null:{
        viewerId:e,filed:r
      })
    }catch(e){
      if(!lw(e))throw e;e instanceof U&&e.status===401&&q.getState().expire()
    }
  },[e]);
  return(0,_.useEffect)(()=>{
    r()
  },[r]),{
    filed:t!==null&&t.viewerId===e?t.filed:null,reload:r
  }
}

var dw=El(()=>({
  viewerId:null,readFor:null,residents:`pending`
}));

async function fw(e,t){
  let n=()=>{
    let n=dw.getState();
    return n.viewerId===e&&n.readFor===t
  };
  try{
    let e=await QC(null);
    n()&&dw.setState({
      residents:e===null?null:ow(e.ghosts)
    })
  }catch(e){
    if(!lw(e))throw e;
    e instanceof U&&e.status===401?q.getState().expire():n()&&dw.setState({
      residents:null
    })
  }
}

function pw(e){
  let t=q(({
    principal:e
  })=>e?.id??null),n=dw();
  return(0,_.useEffect)(()=>{
    if(t===null||e===null)return;let n=dw.getState();if(n.viewerId===t&&n.readFor===e)return;let r=n.viewerId===t?n.residents:`pending`;dw.setState({
      viewerId:t,readFor:e,residents:r
    }),fw(t,e)
  },[t,e]),t!==null&&n.viewerId===t?n.residents:`pending`
}

var mw=[],hw=(0,_.createContext)(null),gw=()=>(0,_.useContext)(hw);

function _w({
  forest:e,onFiled:t,children:n
}){
  let r=q(e=>e.principal),i=r?.id??null,a=r?.role===`supplier`&&r.parent===null&&r.canCreateSuppliers,{
    filed:o,reload:s
  }
  =uw((a||r?.role===`admin`)&&e!==null?i:null),[c,l]=(0,_.useState)(null),u=(0,_.useMemo)(()=>({
    divisionsOf:e=>o?.get(e)??mw,wholeOf:t=>e?.find(e=>e.partner.id===t)??null,canFile:e=>a&&o!==null&&e===i,open:(e,t)=>l({
      lead:e,division:t
    })
  }),[o,e,a,i]);
  return(0,V.jsxs)(hw.Provider,{
    value:u,children:[n,(0,V.jsx)(ZC,{
      subject:c,divisions:c===null?mw:u.divisionsOf(c.lead.partner.id),onClose:()=>l(null),onChanged:()=>{
        c!==null&&t(c.lead.partner.id),l(null),s()
      }
    })]
  })
}

var vw=new Set;

function yw({
  node:e,edits:t,marks:n,plain:r
}){
  let{
    t:i
  }
  =N(),a=gw(),o=e.partner.id,s=a?.divisionsOf(o)??[],c=s.length>0,l=Xv(e=>e.data),u=l.status===`ready`?l.loadedAt:null,d=q_(u),f=pw(c?u:null),p=n.join(` `),[m,h]=(0,_.useState)({
    searched:p,keys:vw
  });
  if(a===null||!c)return r;
  let g=a.wholeOf(o)??e,v=ew(g.children,s),y=n.length>0,b=y?tw(v,e.children):v,x=m.searched===p?m.keys:vw,S=e=>{
    let t=new Set(x);
    t.delete(e)||t.add(e),h({
      searched:p,keys:t
    })
  },C=a.canFile(o),w=e=>v.find(t=>$C(t)===$C(e))??e;
  return(0,V.jsx)(`div`,{
    className:FC.sections,"data-divisions":o,children:b.map(e=>{
      let r=$C(e),o=w(e).members,s=cw(e,x,y),{
        division:c
      }
      =e;return(0,V.jsxs)(`section`,{
        className:FC.section,"data-division":r,"aria-label":c?.name??i(`partners.div_unfiled`),children:[(0,V.jsx)(RC,{
          name:c?.name??i(`partners.div_unfiled`),isUnfiled:c===null,members:o.length,inside:o.reduce((e,t)=>e+t.below,0),tally:rw(o),earned:d===`pending`||d===null?d:iw(o,d),residents:f===`pending`||f===null?f:sw(o,f),expanded:s,onToggle:()=>S(r),onEdit:C&&c!==null?()=>a.open(g,c):null
        }),s&&e.members.length===0&&(0,V.jsx)(`p`,{
          className:FC.nobody,children:i(`partners.div_empty`)
        }),s&&e.members.length>0&&(0,V.jsx)(`div`,{
          className:FC.members,children:e.members.map(e=>(0,V.jsx)(kC,{
            node:e,kind:`below`,heading:`h4`,lead:!1,fold:null,onEditMultiplier:t.multiplier(e,1),onEditRemark:t.remark(e,1),onClear:t.clear(e,1),onSwitchRates:t.rates(e,1),onSwitchDeploys:t.deploys(e,1),allianceKey:t.allianceKey(e,1),marks:n
          },e.partner.id))
        })]
      },r)
    })
  })
}

function bw({
  node:e,expanded:t,onToggle:n,edits:r,marks:i
}){
  let{
    t:a
  }
  =N(),o=e.children.length>0,s=(0,V.jsx)(`div`,{
    className:Z.children,children:e.children.map(e=>(0,V.jsx)(kC,{
      node:e,kind:`below`,lead:!1,fold:null,onEditMultiplier:r.multiplier(e,1),onEditRemark:r.remark(e,1),onClear:r.clear(e,1),onSwitchRates:r.rates(e,1),onSwitchDeploys:r.deploys(e,1),allianceKey:r.allianceKey(e,1),marks:i
    },e.partner.id))
  });
  return(0,V.jsxs)(`section`,{
    className:Z.group,"aria-label":e.partner.email,children:[(0,V.jsx)(kC,{
      node:e,kind:`opening`,lead:!0,fold:o?{
        expanded:t,onToggle:n
      }
      :null,onEditMultiplier:r.multiplier(e,0),onEditRemark:r.remark(e,0),onClear:r.clear(e,0),onSwitchRates:r.rates(e,0),onSwitchDeploys:r.deploys(e,0),allianceKey:r.allianceKey(e,0),marks:i
    }),!o&&(0,V.jsx)(`p`,{
      className:Z.noneBelow,children:a(`partners.none_below`)
    }),o&&t&&(0,V.jsx)(yw,{
      node:e,edits:r,marks:i,plain:s
    })]
  })
}

var xw=[`a`,`b`,`c`,`d`,`e`,`f`],Sw=e=>e.partner.canCreateSuppliers||e.children.length>0;

function Cw(e){
  let{
    forest:t,hosted:n,hasFailed:r,onRetry:i,edits:a,search:o,reveal:s=null
  }
  =e,{
    t:c
  }
  =N(),[l,u]=(0,_.useState)(new Set),d=e=>u(t=>{
    let n=new Set(t);return n.delete(e)||n.add(e),n
  }),f=`${[...o.opened].join(`,`)}|${o.marks.join(` `)}`;
  (0,_.useEffect)(()=>{
    let[e=``]=f.split(`|`);e!==``&&u(t=>new Set([...t,...e.split(`,`)]))
  },[f]);
  let p=s===null?null:`${s.turn}|${s.id}`;
  return(0,_.useEffect)(()=>{
    if(p===null)return;let e=p.slice(p.indexOf(`|`)+1);u(t=>new Set([...t,e]))
  },[p]),r?(0,V.jsxs)(`div`,{
    className:`empty-state`,children:[(0,V.jsxs)(`div`,{
      className:`empty-content`,children:[(0,V.jsx)(`div`,{
        className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
          size:20
        })
      }),(0,V.jsx)(`div`,{
        role:`alert`,children:(0,V.jsx)(`div`,{
          className:`empty-title`,children:c(`partners.load_failed`)
        })
      })]
    }),(0,V.jsx)(`div`,{
      className:`empty-action`,children:(0,V.jsx)(K,{
        onClick:i,children:c(`common.retry`)
      })
    })]
  }):t===null?(0,V.jsx)(`div`,{
    className:Z.forest,children:xw.map(e=>(0,V.jsx)(Am,{
      height:112,rounded:12
    },e))
  }):t.length===0&&n.length===0&&o.marks.length>0?(0,V.jsx)(SC,{
    onClear:o.onClear
  }):t.length===0&&n.length===0?(0,V.jsx)(`div`,{
    className:`empty-state`,children:(0,V.jsx)(`div`,{
      className:`empty-content`,children:(0,V.jsxs)(`div`,{
        children:[(0,V.jsx)(`div`,{
          className:`empty-title`,children:c(`partners.empty_title`)
        }),(0,V.jsx)(`div`,{
          className:`empty-desc`,children:c(`partners.empty_desc`)
        })]
      })
    })
  }):(0,V.jsxs)(V.Fragment,{
    children:[m(t),n.length>0&&(0,V.jsx)(aC,{
      children:m(n)
    })]
  });
  function m(e){
    let t=e.filter(Sw),n=e.filter(e=>!Sw(e));
    return(0,V.jsxs)(V.Fragment,{
      children:[t.length>0&&(0,V.jsx)(`div`,{
        className:Z.groups,children:t.map(e=>(0,V.jsx)(bw,{
          node:e,expanded:l.has(e.partner.id),onToggle:()=>d(e.partner.id),edits:a,marks:o.marks
        },e.partner.id))
      }),n.length>0&&(0,V.jsx)(`div`,{
        className:Z.forest,children:n.map(e=>(0,V.jsx)(kC,{
          node:e,kind:`top`,lead:!1,fold:null,onEditMultiplier:a.multiplier(e,0),onEditRemark:a.remark(e,0),onClear:a.clear(e,0),onSwitchRates:a.rates(e,0),onSwitchDeploys:a.deploys(e,0),allianceKey:a.allianceKey(e,0),marks:o.marks
        },e.partner.id))
      })]
    })
  }
}

var ww={
  idle:`partners.refresh_all`,asking:`partners.refresh_all`,told:`partners.refresh_all_done`,failed:`partners.refresh_all_failed`
};

function Tw(){
  let{
    t:e
  }
  =N(),[t,n]=(0,_.useState)(`idle`),r=async()=>{
    n(`asking`);
    try{
      await Nf.refreshPages(),n(`told`)
    }catch(e){
      if(!(e instanceof U)&&!(e instanceof W))throw e;
      e instanceof U&&e.status===401&&q.getState().expire(),n(`failed`)
    }
  };
  return(0,V.jsx)(`button`,{
    type:`button`,className:`${kS.deploy} ${kS.plain}`,title:e(`partners.refresh_all_hint`),"data-refresh-all":t,disabled:t===`asking`||t===`told`,onClick:()=>void r(),children:(0,V.jsx)(`output`,{
      children:e(ww[t])
    })
  })
}

function Ew({
  subject:e,kind:t,onClose:n,onChanged:r
}){
  let{
    t:i
  }
  =N(),a=(0,_.useId)(),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),m=mh(e),h=o??m?.remark??``,g=()=>{
    s(null),l(!1),p(!1)
  },v=()=>{
    u||(g(),n())
  },y=async()=>{
    if(m===null)return;
    let e=Rd(h);
    if(p(!1),e===m.remark)v();
    else if(e!==null&&!zd(e))l(!0);
    else{
      d(!0);
      try{
        await m.save(e)
      }catch(e){
        if(!(e instanceof U)&&!(e instanceof W))throw e;
        p(!0),d(!1);
        return
      }
      d(!1),g(),r()
    }
  };
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:v,title:i(`${t}.r_title`),width:460,closeDisabled:u,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:v,disabled:u,children:i(`common.cancel`)
      }),(0,V.jsx)(K,{
        type:`submit`,form:a,disabled:u,"aria-busy":u,children:i(u?`partners.r_sending`:`partners.r_submit`)
      })]
    }),children:(0,V.jsxs)(`form`,{
      id:a,className:Z.form,noValidate:!0,onSubmit:e=>{
        e.preventDefault(),y()
      },children:[(0,V.jsxs)(`p`,{
        className:Z.subject,children:[(0,V.jsx)(`span`,{
          children:m?.line
        }),m?.above!=null&&(0,V.jsx)(`span`,{
          className:Z.subjectNow,children:i(`partners.remark_above_is`,{
            name:m.above
          })
        })]
      }),(0,V.jsx)(Ub,{
        label:i(`${t}.r_label`),name:`${t}-remark`,value:h,onChange:e=>{
          s(e.target.value),l(!1)
        },autoComplete:`off`,spellCheck:!1,"data-autofocus":!0,hint:m?.hint??i(`${t}.r_hint`),error:c?i(`partners.r_invalid`):void 0
      }),f&&(0,V.jsx)(`p`,{
        className:Z.failure,role:`alert`,children:i(`partners.r_failed`)
      })]
    })
  })
}

function Dw({
  lead:e
}){
  let{
    t
  }
  =N(),n=gw();
  return n===null||!n.canFile(e.partner.id)?null:(0,V.jsx)(`div`,{
    className:FC.headTools,children:(0,V.jsx)(`button`,{
      type:`button`,className:`${kS.deploy} ${kS.plain}`,onClick:()=>n.open(e,null),"aria-haspopup":`dialog`,"data-new-division":!0,children:t(`partners.div_new`)
    })
  })
}

function Ow(e){
  let t={
    enabled:0,limited:0,fault:0,disabled:0,deploying:0,deploy_failed:0
  };
  for(let n of e)t[n.state]+=1;
  return t
}

function kw(e,t){
  let n=new Map;
  for(let r of e){
    let e=t(r),i=n.get(e);
    i===void 0?n.set(e,[r]):i.push(r)
  }
  return n
}

var Aw=(e,t)=>t.figures.total-e.figures.total||e.partner.email.localeCompare(t.partner.email);

function jw(e,t,n){
  let r=kw(t,e=>e.row.owner?.id??null),i=new Set(e.map(e=>e.id)),a=e=>e.parentId===null||!i.has(e.parentId),o=kw(e.filter(e=>!a(e)),e=>e.parentId),s=e=>{
    let t=(o.get(e.id)??[]).map(s),i=[...r.get(e.id)??[],...t.flatMap(([,e])=>e)],a=t.map(([e])=>e).toSorted(Aw),c=i.reduce((e,t)=>e+(t.row.rpm??0),0);
    return[{
      partner:e,figures:{
        ...Av(i,n),rpm:c
      },states:Ow(i),below:a.reduce((e,t)=>e+1+t.below,0),children:a
    },i]
  };
  return e.filter(a).map(e=>s(e)[0]).toSorted(Aw)
}

function Mw(e,t){
  return t.members.size===0?{
    ours:e,hosted:[]
  }
  :{
    ours:e.filter(e=>!t.members.has(e.partner.id)),hosted:e.filter(e=>t.members.has(e.partner.id))
  }
}

var Nw={
  status:`reading`
},Pw=El(()=>({
  readerId:null,state:Nw
}));

q.subscribe((e,t)=>{
  e.principal!==t.principal&&Pw.setState({
    readerId:null,state:Nw
  })
});

async function Fw(e){
  let t=()=>q.getState().principal?.id===e;
  try{
    let n=await Nf.allianceKeys();
    t()&&Pw.setState({
      readerId:e,state:{
        status:`read`,keys:n
      }
    })
  }catch(n){
    if(!(n instanceof U||n instanceof W||n instanceof bt))throw n;
    if(!t())return;
    if(n instanceof U&&n.status===401){
      q.getState().expire();
      return
    }
    let r=n instanceof U&&n.status===404,i=Pw.getState().state;
    if(!r&&i.status===`read`)return;
    Pw.setState({
      readerId:e,state:{
        status:r?`none`:`unread`
      }
    })
  }
}

function Iw(){
  let e=q(({
    principal:e
  })=>e?.role===`admin`?e.id:null),t=Pw();
  return(0,_.useEffect)(()=>{
    e!==null&&Pw.getState().readerId!==e&&(Pw.setState({
      readerId:e,state:Nw
    }),Fw(e))
  },[e]),e===null?{
    status:`none`
  }
  :t.readerId===e?t.state:Nw
}

var Lw=[];

function Rw(e,t){
  let n=t.toLowerCase().split(/\s+/).filter(Boolean);
  return n.length===0?e:e.filter(({
    remark:e,email:t
  })=>{
    let r=`${e} ${t}`.toLowerCase();return n.every(e=>r.includes(e))
  })
}

var zw=e=>new Map(e.map(e=>[e.id,e.remark])),Bw=El(()=>({
  authorId:null,remarks:Lw
}));

async function Vw(e){
  try{
    let t=await Nf.remarks();
    q.getState().principal?.id===e&&Bw.setState({
      authorId:e,remarks:t
    })
  }catch(t){
    if(!(t instanceof U||t instanceof W||t instanceof bt))throw t;
    t instanceof U&&t.status===401?q.getState().expire():Bw.getState().authorId===e&&Bw.setState({
      authorId:null,remarks:Lw
    })
  }
}

function Hw(){
  let e=q(({
    principal:e
  })=>e!==null&&(e.role===`admin`||e.role===`supplier`&&e.canCreateSuppliers)?e.id:null),t=Bw();
  return(0,_.useEffect)(()=>{
    e!==null&&Bw.getState().authorId!==e&&(Bw.setState({
      authorId:e,remarks:Lw
    }),Vw(e))
  },[e]),e!==null&&t.authorId===e?t.remarks:Lw
}

var Uw=new Set;

function Ww(){
  let{
    t:e,i18n:t
  }
  =N(),n=q(e=>e.principal),r=Xv(e=>e.data),{
    state:i,reload:a
  }
  =B_(),o=Iw(),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(null),b=(0,_.useCallback)(async()=>{
    await a();let e=q.getState().principal;e?.role===`admin`&&await Fw(e.id)
  },[a]),x=(0,_.useCallback)(()=>{
    b(),Xv.getState().load()
  },[b]);
  (0,_.useEffect)(()=>{
    let{
      scope:e,load:t,setScope:n
    }
    =Xv.getState();e===null?t():n(null)
  },[]);
  let S=qh(),C=(0,_.useMemo)(()=>{
    if(i.status!==`ready`||r.status!==`ready`)return null;let e=r.hosted.length===0?r.accounts:[...r.accounts,...r.hosted];return Mw(jw(i.partners,e,r.loadedAt),S)
  },[i,r,S]),w=C?.ours??null,T=(0,_.useMemo)(()=>C===null?null:[...C.ours,...C.hosted],[C]),E=(0,_.useMemo)(()=>dC(h),[h]),D=(0,_.useMemo)(()=>{
    if(C===null)return null;let[e,t]=[_C(C.ours,E),_C(C.hosted,E)];return{
      forest:e.forest,hosted:t.forest,opened:new Set([...e.opened,...t.opened]),count:e.count+t.count
    }
  },[C,E]),O=(0,_.useMemo)(()=>r.status===`ready`?Av(r.accounts,r.loadedAt):`pending`,[r]);
  $v(null,r.status!==`failed`),q_(r.status===`ready`?r.loadedAt:null);
  let k=(0,_.useMemo)(()=>d===null?null:{
    line:d.email,remark:d.remark,above:d.remarkAbove,hint:e(n?.role===`admin`?`partners.r_hint`:`partners.r_hint_lead`),save:e=>Nf.setRemark(d.id,e)
  },[d,n,e]),A=n?.role===`admin`,j=n?.role===`supplier`&&n.parent===null&&n.canCreateSuppliers;
  if(n?.role===`supplier`&&!j)return(0,V.jsx)(As,{
    to:`/pool`,replace:!0
  });
  let ee=i.status===`failed`||r.status===`failed`,te={
    multiplier:(e,t)=>A&&t===0||j&&t===1?()=>u(e.partner):null,remark:(e,t)=>A||j&&t===1?()=>f(e.partner):null,clear:(e,t)=>A&&t===0||j&&t===1?()=>m(e.partner):null,rates:(e,t)=>t>=1&&(A||j)?async t=>{
      await Nf.setRatesShown(e.partner.id,t),await b()
    }
    :null,deploys:(e,t)=>A&&t===0?async t=>{
      await Nf.setDeployOpen(e.partner.id,t),await b()
    }
    :null,allianceKey:(e,t)=>{
      if(!A||t!==0||o.status===`none`)return null;
      if(o.status===`reading`)return{
        status:`reading`
      };
      let n=o.status===`read`?o.keys.get(e.partner.id):void 0;
      return n===void 0?{
        status:`missing`
      }
      :{
        status:`held`,key:n
      }
    }
  },ne=i.status===`ready`?i.partners.filter(e=>!S.members.has(e.id)):[],re=e=>Eh(e,t.language),ie=w?.length??0,ae=[...A?[{
    name:`count_top`,value:ie
  },{
    name:`count_opening`,value:ne.filter(e=>e.canCreateSuppliers).length
  }]:[],{
    name:`count_below`,value:ne.length-ie
  },{
    name:`count_unset`,value:ne.filter(e=>e.multiplier===null).length
  }],oe=w?.find(e=>e.partner.id===n?.id)??null;
  return(0,V.jsx)(_w,{
    forest:T,onFiled:e=>y(t=>({
      id:e,turn:(t?.turn??0)+1
    })),children:(0,V.jsxs)(`div`,{
      className:Rm.page,"aria-busy":w===null&&!ee,children:[(0,V.jsxs)(`header`,{
        className:J.header,children:[(0,V.jsxs)(`div`,{
          className:J.top,children:[(0,V.jsx)(`h1`,{
            className:J.title,"data-detect-ignore":`gradient-text`,children:e(`partners.title`)
          }),(0,V.jsxs)(`div`,{
            className:J.actions,children:[(A||j)&&(0,V.jsx)(jS,{
              onOpen:()=>c(!0),label:e(j?`partners.open_below`:`partners.open`)
            }),(0,V.jsx)(`button`,{
              type:`button`,className:`${kS.deploy} ${kS.plain}`,onClick:x,children:e(`pool.refresh`)
            }),A&&(0,V.jsx)(Tw,{})]
          }),oe!==null&&(0,V.jsx)(Dw,{
            lead:oe
          }),D!==null&&C!==null&&C.ours.length+C.hosted.length>0&&!ee&&(0,V.jsx)(`div`,{
            className:Z.headFind,children:(0,V.jsx)(bC,{
              value:h,onChange:g,found:D.count
            })
          })]
        }),w!==null&&(0,V.jsxs)(`div`,{
          className:Z.band,children:[(0,V.jsx)(`dl`,{
            className:`${J.stats} ${Z.counts}`,"data-figures":`partners`,children:ae.map(({
              name:t,value:n
            })=>(0,V.jsxs)(`div`,{
              className:J.stat,children:[(0,V.jsx)(`dt`,{
                className:J.statName,children:e(`partners.${t}`)
              }),(0,V.jsx)(`dd`,{
                className:J.statValue,children:re(n)
              })]
            },t))
          }),(0,V.jsx)(PS,{
            headline:O,layout:`row`
          })]
        })]
      }),(0,V.jsx)(Cw,{
        forest:D?.forest??null,hosted:D?.hosted??[],hasFailed:ee,onRetry:x,edits:te,search:{
          marks:E,opened:D?.opened??Uw,onClear:()=>g(``)
        },reveal:v
      }),(0,V.jsx)(nC,{
        open:s,below:j,alliance:j&&n!==null?Th(n.email):XS,onClose:()=>c(!1),onCreated:()=>void b()
      }),(0,V.jsx)(rC,{
        partner:l,onClose:()=>u(null),onChanged:()=>{
          u(null),b()
        }
      }),(0,V.jsx)(KS,{
        partner:p,byAdministrator:A,onClose:()=>m(null),onChanged:x
      }),(0,V.jsx)(Ew,{
        kind:`partners`,subject:k,onClose:()=>f(null),onChanged:()=>{
          f(null),b(),n!==null&&Vw(n.id)
        }
      })]
    })
  })
}

export { Hw, zw, PC, oC, Ew, Rw, QC, xC, dC, pC, bC, SC, aC, Ww };
