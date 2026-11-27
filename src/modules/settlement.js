// @ts-nocheck
// Module: settlement — Financial Settlement, USDT Calculator, Segmented Ledger & Reversals
import { N, _, bt } from '../lib/vendor-runtime';
import { V, Am, af, U, W, K, Du, Eu, Mu, bu, pu, Ou, Au, gu, rf, Nu, xu, q, Gd, fp, Lm, np, J, rp, tm, nm, Rm, ap } from './core';
import { Th, Dh, mh, ph, Kh, Gh } from './notices';
import { h_, f_, sy, ry, p_, OS, Qx, cy, Zx, Ub, m_, rS, g_, nS, iS, oy, aS, eS, Xx, tS } from './overview';
import { xC, dC, pC, bC, SC, aC } from './hierarchy';
import { Xk, iA, sA, uT } from './pool';

var VM={
  owed:`Ledger-module__owed___gm532`,owedName:`Ledger-module__owedName___8YWna`,owedValue:`Ledger-module__owedValue___s3wKe`,owedNote:`Ledger-module__owedNote___bGynl`,progress:`Ledger-module__progress___CWlRN`,track:`Ledger-module__track___a2a9E`,fill:`Ledger-module__fill___lp0QT`,table:`Ledger-module__table___OfP1m`,num:`Ledger-module__num___9i65o`,entries:`Ledger-module__entries___0Hp9c`,entry:`Ledger-module__entry___PyJFz`,entryHead:`Ledger-module__entryHead___7YIxV`,entryPartner:`Ledger-module__entryPartner___Ee42b`,entryMethod:`Ledger-module__entryMethod___5Nels`,entryTag:`Ledger-module__entryTag___XXFXf`,entryAmount:`Ledger-module__entryAmount___0dr4e`,entryMeta:`Ledger-module__entryMeta___mFNXl`,entrySaid:`Ledger-module__entrySaid___tLD9M`,reverse:`Ledger-module__reverse___gqhQT`,changes:`Ledger-module__changes___FDP6I`,changeLine:`Ledger-module__changeLine___eqm-w`,failure:`Ledger-module__failure___B63e8`,closed:`Ledger-module__closed___YRGSD`
};

function HM(e,t){
  let[n=`0`,r]=e.split(`.`),i=new Intl.NumberFormat(t).format(BigInt(n));
  return r===void 0?i:`${i}.${r}`
}

function UM({
  lines:e,onReverse:t
}){
  let{
    t:n,i18n:r
  }
  =N(),i=r.language;
  return(0,V.jsx)(`ul`,{
    className:VM.entries,children:e.map(({
      entry:e,partner:r
    })=>{
      let a=n(`settlement.method_${e.method}`),o=e.kind===`payment`&&e.reversedBy!==null,s=h_(e.at,i),c=f_(e.amount,i),l=e.kind===`payment`?e.note:e.reason;return(0,V.jsxs)(`li`,{
        className:VM.entry,"data-kind":e.kind,"data-reversed":o||void 0,children:[(0,V.jsxs)(`div`,{
          className:VM.entryHead,children:[r!==null&&(0,V.jsx)(`span`,{
            className:VM.entryPartner,children:r
          }),(0,V.jsx)(`span`,{
            className:VM.entryMethod,children:e.kind===`reversal`?`${n(`settlement.entry_reversal`)} · ${a}`:a
          }),(0,V.jsx)(`time`,{
            dateTime:e.at,children:s
          }),o&&(0,V.jsx)(`span`,{
            className:VM.entryTag,children:n(`settlement.entry_reversed`)
          })]
        }),(0,V.jsx)(`span`,{
          className:VM.entryAmount,children:c
        }),(0,V.jsxs)(`div`,{
          className:VM.entryMeta,children:[e.kind===`payment`&&e.usdt!==null&&(0,V.jsx)(`span`,{
            children:n(`settlement.entry_usdt`,{
              amount:HM(e.usdt.amount,i),rate:e.usdt.rate
            })
          }),e.by!==null&&(0,V.jsx)(`span`,{
            title:e.by,children:n(`settlement.entry_by`,{
              who:Th(e.by)
            })
          }),l!==null&&(0,V.jsx)(`span`,{
            className:VM.entrySaid,children:e.kind===`payment`?l:n(`settlement.entry_reason`,{
              reason:l
            })
          })]
        }),t!==null&&e.kind===`payment`&&!o&&(0,V.jsx)(`button`,{
          type:`button`,className:VM.reverse,onClick:()=>t(e),"aria-haspopup":`dialog`,"aria-label":n(`settlement.reverse_of`,{
            time:s,amount:c
          }),children:n(`settlement.reverse`)
        })]
      },e.id)
    })
  })
}

function WM({
  open:e,version:t,onClose:n
}){
  let{
    t:r
  }
  =N(),i=sy(e?`entries`:null,t,ry.entries);
  return(0,V.jsx)(Xk,{
    open:e,onClose:n,size:`lg`,title:r(`settlement.all_entries`),description:r(`settlement.entries_desc`),children:(0,V.jsxs)(`div`,{
      className:iA.body,children:[i.status===`loading`&&(0,V.jsx)(Am,{
        height:240,rounded:8
      }),i.status===`failed`&&(0,V.jsx)(`p`,{
        className:VM.failure,role:`alert`,children:r(`settlement.entries_load_failed`)
      }),i.status===`ready`&&(0,V.jsxs)(`section`,{
        className:iA.section,children:[i.value.total>i.value.entries.length&&(0,V.jsx)(`p`,{
          className:iA.hint,children:r(`settlement.entries_shown`,{
            shown:i.value.entries.length,total:i.value.total
          })
        }),i.value.entries.length===0?(0,V.jsx)(`p`,{
          className:iA.hint,children:r(`settlement.entries_none`)
        }):(0,V.jsx)(UM,{
          lines:i.value.entries.map(({
            entry:e,account:t
          })=>({
            entry:e,partner:t.remark??Th(t.email)
          })),onReverse:null
        })]
      })]
    })
  })
}

function GM({
  closed:e
}){
  let{
    t,i18n:n
  }
  =N(),r=n.language;
  return e.length===0?null:(0,V.jsxs)(`section`,{
    className:iA.section,"data-ledger":`closed`,children:[(0,V.jsx)(`h3`,{
      className:iA.sectionTitle,children:t(`settlement.closed_title`)
    }),e.map(e=>(0,V.jsxs)(`div`,{
      className:VM.closed,children:[(0,V.jsx)(`p`,{
        className:iA.hint,children:t(`settlement.closed_with`,{
          payer:e.payer===null?t(`settlement.platform`):Th(e.payer),time:h_(e.until,r)
        })
      }),(0,V.jsx)(sA,{
        facts:[{
          label:t(`settlement.ledger_due`),value:p_(e.due,r)
        },{
          label:t(`settlement.ledger_paid`),value:f_(e.paid,r)
        },{
          label:t(`settlement.closed_unpaid`),value:p_(e.pending,r)
        }]
      }),e.entries.length>0&&(0,V.jsx)(UM,{
        lines:e.entries.map(e=>({
          entry:e,partner:null
        })),onReverse:null
      })]
    },e.until))]
  })
}

function KM({
  ledger:e
}){
  let{
    t,i18n:n
  }
  =N(),r=n.language,{
    account:i,segments:a
  }
  =e,o=e=>Dh(e,r),s=(e,n)=>{
    if(e===null&&n===null)return t(`settlement.seg_all`);
    if(e===null)return t(`settlement.seg_until`,{
      time:h_(n??``,r)
    });
    let i=h_(e,r);
    return n===null?t(`settlement.seg_since`,{
      time:i
    }):t(`settlement.seg_between`,{
      from:i,until:h_(n,r)
    })
  };
  return(0,V.jsxs)(`section`,{
    className:iA.section,children:[(0,V.jsx)(`h3`,{
      className:iA.sectionTitle,children:t(`settlement.ledger_segments`)
    }),(0,V.jsxs)(`table`,{
      className:VM.table,children:[(0,V.jsx)(`thead`,{
        children:(0,V.jsxs)(`tr`,{
          children:[(0,V.jsx)(`th`,{
            scope:`col`,children:t(`settlement.seg_span`)
          }),(0,V.jsx)(`th`,{
            scope:`col`,className:VM.num,children:t(`settlement.seg_earned`)
          }),(0,V.jsx)(`th`,{
            scope:`col`,className:VM.num,children:t(`settlement.seg_multiplier`)
          }),(0,V.jsx)(`th`,{
            scope:`col`,className:VM.num,children:t(`settlement.seg_due`)
          })]
        })
      }),(0,V.jsx)(`tbody`,{
        children:a.map(e=>(0,V.jsxs)(`tr`,{
          children:[(0,V.jsx)(`td`,{
            children:s(e.from,e.until)
          }),(0,V.jsx)(`td`,{
            className:VM.num,children:o(e.earned)
          }),(0,V.jsx)(`td`,{
            className:VM.num,children:e.multiplier===null?t(`settlement.seg_unset`):t(`settlement.multiplier`,{
              value:e.multiplier
            })
          }),(0,V.jsx)(`td`,{
            className:VM.num,children:f_(e.due,r)
          })]
        },e.from??`start`))
      }),a.length>1&&(0,V.jsx)(`tfoot`,{
        children:(0,V.jsxs)(`tr`,{
          children:[(0,V.jsx)(`td`,{
            children:t(`settlement.seg_total`)
          }),(0,V.jsx)(`td`,{
            className:VM.num,children:o(i.earned)
          }),(0,V.jsx)(`td`,{}),(0,V.jsx)(`td`,{
            className:VM.num,children:p_(i.due,r)
          })]
        })
      })]
    })]
  })
}

var qM={
  groups:`Settlement-module__groups___pz-x4`,group:`Settlement-module__group___h7moY`,groupHead:`Settlement-module__groupHead___UGUHF`,groupTitle:`Settlement-module__groupTitle___JvKAe`,grid:`Settlement-module__grid___EVkFn`,card:`Settlement-module__card___QSkTO`,nameButton:`Settlement-module__nameButton___LMxFc`,accent:`Settlement-module__accent___d4NDE`,line:`Settlement-module__line___y2DRH`,name:`Settlement-module__name___84gqs`,kind:`Settlement-module__kind___zgfvz`,mark:`Settlement-module__mark___mjMQj`,multiplier:`Settlement-module__multiplier___9BELW`,email:`Settlement-module__email___A-xrP`,meta:`Settlement-module__meta___kL9cB`,lower:`Settlement-module__lower___yjzZm`,cardFigures:`Settlement-module__cardFigures___puqk9`,pending:`Settlement-module__pending___3fc7f`,pendingName:`Settlement-module__pendingName___3Ccjd`,pendingLine:`Settlement-module__pendingLine___8s2LL`,pendingValue:`Settlement-module__pendingValue___Hl-ql`,pendingNote:`Settlement-module__pendingNote___AIDqZ`,cardFigure:`Settlement-module__cardFigure___o-YNZ`,act:`Settlement-module__act___pHPvV`,settle:`Settlement-module__settle___b0ki0`,settleDots:`Settlement-module__settleDots___rTLkJ`,ledgerLink:`Settlement-module__ledgerLink___j25QX`
},JM={
  columns:5,rows:3,pitch:5
};

function YM({
  name:e,onSettle:t,disabled:n=!1,title:r,seed:i
}){
  let{
    t:a
  }
  =N();
  return(0,V.jsxs)(`button`,{
    type:`button`,className:qM.settle,disabled:n,title:r,"aria-haspopup":`dialog`,"aria-label":a(`settlement.settle_for`,{
      name:e
    }),onClick:e=>{
      e.currentTarget.focus(),t()
    },children:[(0,V.jsx)(OS,{
      className:qM.settleDots,tone:n?`disabled`:`gold`,shape:`block`,seed:i,...JM
    }),(0,V.jsx)(`span`,{
      children:a(`settlement.settle`)
    })]
  })
}

var XM={
  columns:9,rows:7,pitch:5
},ZM={
  pending:`gold`,cleared:`disabled`,overpaid:`fault`,unset:`disabled`
},QM=[],$M=e=>e.remark??Th(e.email);

function eN(e){
  let{
    account:t,heading:n,names:r,onOpen:i,marks:a=QM
  }
  =e,{
    t:o,i18n:s
  }
  =N(),c=s.language,l=Qx(t.pending),u=n.rank,d=()=>l===`cleared`?o(`settlement.card_cleared`):l===`unset`?e.unset?.text??null:l===`overpaid`?o(`settlement.card_overpaid`):null;
  return(0,V.jsxs)(`article`,{
    className:qM.card,"data-standing":l,"data-wide":e.wide||void 0,children:[(0,V.jsx)(OS,{
      className:qM.accent,tone:ZM[l],shape:`corner`,seed:Number(t.id.slice(-6)),...XM
    }),(0,V.jsxs)(`div`,{
      className:`${qM.line} ${qM.head}`,children:[(0,V.jsx)(u,{
        className:qM.name,children:(0,V.jsx)(`button`,{
          type:`button`,className:qM.nameButton,onClick:i,"aria-label":n.label,title:t.email,children:(0,V.jsx)(xC,{
            text:n.text,terms:a
          })
        })
      }),(0,V.jsx)(`span`,{
        className:qM.kind,children:e.beside
      }),e.mark!==void 0&&(0,V.jsx)(`span`,{
        className:qM.mark,children:e.mark
      }),e.brief!==!0&&(0,V.jsx)(`span`,{
        className:qM.multiplier,"data-unset":t.multiplier===null||void 0,children:t.multiplier===null?o(`partners.unset`):o(`settlement.multiplier`,{
          value:t.multiplier
        })
      })]
    }),(0,V.jsxs)(`div`,{
      className:qM.line,children:[(0,V.jsx)(`span`,{
        className:qM.email,children:(0,V.jsx)(xC,{
          text:t.email,terms:a
        })
      }),(0,V.jsx)(`span`,{
        className:qM.meta,children:t.lastPaidAt===null?o(`settlement.card_never`):o(`settlement.card_last`,{
          time:h_(t.lastPaidAt,c)
        })
      })]
    }),(0,V.jsxs)(`div`,{
      className:qM.lower,children:[(0,V.jsxs)(`div`,{
        className:qM.pending,children:[(0,V.jsx)(`span`,{
          className:qM.pendingName,children:r.pending
        }),(0,V.jsxs)(`span`,{
          className:qM.pendingLine,children:[(0,V.jsx)(`span`,{
            className:qM.pendingValue,children:p_(t.pending,c)
          }),(0,V.jsx)(`span`,{
            className:qM.pendingNote,title:l===`unset`?e.unset?.hint:void 0,children:d()
          })]
        })]
      }),(0,V.jsxs)(`dl`,{
        className:qM.cardFigures,children:[(0,V.jsxs)(`div`,{
          className:qM.cardFigure,title:o(`settlement.card_points_hint`),children:[(0,V.jsx)(`dt`,{
            children:o(`settlement.card_points_pending`)
          }),(0,V.jsx)(`dd`,{
            children:Dh(t.pendingPoints,c)
          })]
        }),(0,V.jsxs)(`div`,{
          className:qM.cardFigure,children:[(0,V.jsx)(`dt`,{
            children:o(`settlement.card_earned`)
          }),(0,V.jsx)(`dd`,{
            children:Dh(t.earned,c)
          })]
        }),(0,V.jsxs)(`div`,{
          className:qM.cardFigure,children:[(0,V.jsx)(`dt`,{
            children:r.today
          }),(0,V.jsx)(`dd`,{
            children:p_(t.dueToday,c)
          })]
        }),(0,V.jsxs)(`div`,{
          className:qM.cardFigure,children:[(0,V.jsx)(`dt`,{
            children:r.paid
          }),(0,V.jsx)(`dd`,{
            children:f_(t.paid,c)
          })]
        }),(0,V.jsxs)(`div`,{
          className:qM.cardFigure,children:[(0,V.jsx)(`dt`,{
            children:r.due
          }),(0,V.jsx)(`dd`,{
            children:p_(t.due,c)
          })]
        })]
      }),e.action!==!1&&(0,V.jsx)(`div`,{
        className:qM.act,children:e.action
      })]
    })]
  })
}

function tN(e){
  let{
    account:t,rank:n,canSettle:r,onOpen:i,onSettle:a,marks:o
  }
  =e,{
    t:s
  }
  =N(),c=$M(t),l=t.pending!==null&&t.pending>0n;
  return(0,V.jsx)(eN,{
    account:t,marks:o,heading:{
      rank:n,text:c,label:s(`settlement.open_ledger`,{
        name:c
      })
    },beside:s(`partners.kind_${t.kind}`),mark:t.clearedAt===null?void 0:s(`settlement.cleared`),names:{
      pending:s(`settlement.card_pending`),today:s(`settlement.card_due_today`),paid:s(`settlement.card_paid`),due:s(`settlement.card_due`)
    },unset:{
      text:s(`settlement.card_unset`),hint:s(`settlement.card_unset_hint`)
    },onOpen:i,action:r&&(0,V.jsx)(YM,{
      name:c,seed:Number(t.id.slice(-4)),onSettle:a,disabled:!l,title:t.pending===null?s(`settlement.card_unset_hint`):void 0
    })
  })
}

function nN({
  due:e,paid:t
}){
  if(e===null||e<=0n)return null;
  let n=Number(t*100n/e);
  return Math.min(100,Math.max(0,n))
}

function rN(e){
  let{
    target:t,isOwn:n,brief:r,version:i,covered:a,onClose:o,onSettle:s,onReverse:c
  }
  =e,{
    t:l,i18n:u
  }
  =N(),d=u.language,f=mh(t),p=cy(t?.id??null,i),m=p.status===`ready`?p.value:null,h=m?.account??f,g=e=>Dh(e,d),_=n?`_own`:``,v=h===null?`unset`:Qx(h.pending),y=h===null?null:nN(h),b={
    pending:null,cleared:l(`settlement.card_cleared`),overpaid:l(`settlement.card_overpaid`),unset:r?null:l(n?`settlement.mine_unset`:`settlement.card_unset`)
  }
  [v];
  return(0,V.jsx)(Xk,{
    open:t!==null,onClose:o,closeDisabled:a,size:`lg`,title:h===null?void 0:n?l(`settlement.mine_title`):$M(h),description:h===null?void 0:[h.email,l(`partners.kind_${h.kind}`),...h.clearedAt===null?[]:[l(`settlement.cleared`)]].join(` · `),footer:m?.canSettle&&h!==null&&(0,V.jsx)(YM,{
      name:$M(h),seed:Number(h.id.slice(-4)),onSettle:()=>s(h),disabled:v!==`pending`
    }),children:h!==null&&(0,V.jsxs)(`div`,{
      className:iA.body,children:[(0,V.jsxs)(`section`,{
        className:iA.section,children:[(0,V.jsx)(`h3`,{
          className:iA.sectionTitle,children:l(`settlement.ledger_overview`)
        }),(0,V.jsxs)(`p`,{
          className:VM.owed,children:[(0,V.jsx)(`span`,{
            className:VM.owedName,children:l(n?`settlement.stat_receivable`:`settlement.card_pending`)
          }),(0,V.jsx)(`span`,{
            className:VM.owedValue,"data-standing":v,children:p_(h.pending,d)
          }),b!==null&&(0,V.jsx)(`span`,{
            className:VM.owedNote,"data-standing":v,children:b
          })]
        }),y!==null&&(0,V.jsxs)(`div`,{
          className:VM.progress,children:[(0,V.jsx)(`span`,{
            className:VM.track,"aria-hidden":`true`,children:(0,V.jsx)(`span`,{
              className:VM.fill,style:{
                transform:`scaleX(${y/100})`
              }
            })
          }),(0,V.jsx)(`span`,{
            children:l(`settlement.ledger_progress${_}`,{
              share:`${y}%`
            })
          })]
        }),(0,V.jsx)(sA,{
          facts:[{
            label:l(`settlement.ledger_due${_}`),value:p_(h.due,d)
          },{
            label:l(`settlement.ledger_paid${_}`),value:f_(h.paid,d)
          },{
            label:l(`settlement.ledger_due_today${_}`),value:p_(h.dueToday,d)
          },...r?[]:[{
            label:l(`settlement.ledger_multiplier`),value:h.multiplier===null?l(`partners.unset`):l(`settlement.multiplier`,{
              value:h.multiplier
            })
          }],{
            label:l(`settlement.ledger_earned`),value:g(h.earned)
          },{
            label:l(`settlement.ledger_earned_today`),value:g(h.earnedToday)
          },{
            label:l(`settlement.ledger_last`),value:h.lastPaidAt===null?l(`settlement.card_never`):h_(h.lastPaidAt,d)
          },...m===null?[]:[{
            label:l(`settlement.ledger_payer`),value:m.payer===null?l(`settlement.platform`):Th(m.payer)
          }]]
        })]
      }),p.status===`failed`&&(0,V.jsx)(`p`,{
        className:VM.failure,role:`alert`,children:l(`settlement.ledger_load_failed`)
      }),p.status===`loading`&&(0,V.jsx)(Am,{
        height:180,rounded:8
      }),m!==null&&(0,V.jsxs)(V.Fragment,{
        children:[!r&&(0,V.jsx)(KM,{
          ledger:m
        }),(0,V.jsxs)(`section`,{
          className:iA.section,children:[(0,V.jsx)(`h3`,{
            className:iA.sectionTitle,children:l(`settlement.ledger_entries`)
          }),m.entries.length===0?(0,V.jsx)(`p`,{
            className:iA.hint,children:l(`settlement.entries_none`)
          }):(0,V.jsx)(UM,{
            lines:m.entries.map(e=>({
              entry:e,partner:null
            })),onReverse:m.canSettle?e=>c(e,h):null
          })]
        }),!r&&m.rateChanges.length>0&&(0,V.jsxs)(`section`,{
          className:iA.section,children:[(0,V.jsx)(`h3`,{
            className:iA.sectionTitle,children:l(`settlement.ledger_changes`)
          }),(0,V.jsx)(`ul`,{
            className:VM.changes,children:m.rateChanges.map(e=>(0,V.jsxs)(`li`,{
              children:[(0,V.jsx)(`time`,{
                dateTime:e.at,children:h_(e.at,d)
              }),(0,V.jsx)(`span`,{
                className:VM.changeLine,children:l(`settlement.change_line`,{
                  from:e.from??l(`settlement.seg_unset`),to:e.to
                })
              }),(0,V.jsx)(`span`,{
                children:l(`settlement.change_${e.applies}`)
              }),e.by!==null&&(0,V.jsx)(`span`,{
                title:e.by,children:l(`settlement.change_by`,{
                  who:Th(e.by)
                })
              })]
            },e.at))
          })]
        }),(0,V.jsx)(GM,{
          closed:m.closed
        })]
      })]
    })
  })
}

function iN({
  mine:e,onOpen:t
}){
  let{
    t:n
  }
  =N(),r=n(`settlement.mine_title`),i=Zx(e);
  return(0,V.jsx)(eN,{
    account:e.account,wide:!0,brief:i,heading:{
      rank:`h2`,text:r,label:n(`settlement.open_ledger`,{
        name:r
      })
    },beside:e.payer===null?n(`settlement.mine_payer_platform`):n(`settlement.mine_payer`,{
      name:Th(e.payer)
    }),names:{
      pending:n(`settlement.stat_receivable`),today:n(`settlement.mine_today`),paid:n(`settlement.stat_received`),due:n(`settlement.stat_due`)
    },unset:i?null:{
      text:n(`settlement.mine_unset`),hint:n(`settlement.mine_unset`)
    },onOpen:t,action:(0,V.jsx)(`button`,{
      type:`button`,className:qM.ledgerLink,onClick:t,children:n(`settlement.mine_ledger`)
    })
  })
}

var Q={
  form:`SettleDialog-module__form___Gwla9`,subject:`SettleDialog-module__subject___mWvm2`,subjectWho:`SettleDialog-module__subjectWho___Ry-Jk`,subjectLabel:`SettleDialog-module__subjectLabel___NZ9AO`,subjectName:`SettleDialog-module__subjectName___DkZTj`,subjectEmail:`SettleDialog-module__subjectEmail___N945F`,subjectPending:`SettleDialog-module__subjectPending___cjIKM`,subjectAmount:`SettleDialog-module__subjectAmount___De1K2`,methods:`SettleDialog-module__methods___fxjNC`,method:`SettleDialog-module__method___vZqZs`,field:`SettleDialog-module__field___o0i7i`,labelRow:`SettleDialog-module__labelRow___vqDfK`,label:`SettleDialog-module__label___-kN14`,fill:`SettleDialog-module__fill___PbWm-`,affixed:`SettleDialog-module__affixed___FMbJk`,lead:`SettleDialog-module__lead___zUF-9`,trail:`SettleDialog-module__trail___zgAjk`,control:`SettleDialog-module__control___hw3pq`,note:`SettleDialog-module__note___CqaV5`,hint:`SettleDialog-module__hint___Cm1gL`,problem:`SettleDialog-module__problem___YH0fL`,explain:`SettleDialog-module__explain___d9sdY`,echo:`SettleDialog-module__echo___-jo1t`,echoRow:`SettleDialog-module__echoRow___4TFCP`,guard:`SettleDialog-module__guard___D50z6`,check:`SettleDialog-module__check___fJg4W`,refusal:`SettleDialog-module__refusal___FMt8A`,refusalHead:`SettleDialog-module__refusalHead___g6zbu`,refusalSaid:`SettleDialog-module__refusalSaid___sTP-g`,refusalCode:`SettleDialog-module__refusalCode___7Jv80`,confirm:`SettleDialog-module__confirm___lnAMB`,pair:`SettleDialog-module__pair___EoGGd`,outcome:`SettleDialog-module__outcome___K2MjM`,outcomeMark:`SettleDialog-module__outcomeMark___DZhRK`,outcomeTitle:`SettleDialog-module__outcomeTitle___MBjC7`,outcomeName:`SettleDialog-module__outcomeName___bb5O-`,outcomeLine:`SettleDialog-module__outcomeLine___Sy9Xv`,outcomeNote:`SettleDialog-module__outcomeNote___9mOuH`
};

function aN({
  reversing:e,onClose:t,onRecorded:n
}){
  let{
    t:r,i18n:i
  }
  =N(),a=i.language,o=mh(e),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(()=>crypto.randomUUID()),h=(0,_.useId)(),g=s.trim(),v=()=>{
    l||(c(``),f(null),m(crypto.randomUUID()),t())
  },y=async()=>{
    if(o!==null&&af(g)){
      u(!0),f(null);
      try{
        let e=await ry.reverse(o.payment.id,{
          requestId:p,reason:g
        });
        u(!1),c(``),m(crypto.randomUUID()),n(e)
      }catch(e){
        if(!(e instanceof U||e instanceof W||e instanceof bt))throw e;
        u(!1);
        let t=e instanceof U&&e.code===`already_reversed`;
        f(r(t?`settlement.refused_already_reversed`:`settlement.r_failed`))
      }
    }
  },b=o===null?``:f_(o.payment.amount,a);
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:v,title:r(`settlement.r_title`),width:460,closeDisabled:l,footer:(0,V.jsxs)(V.Fragment,{
      children:[(0,V.jsx)(K,{
        variant:`secondary`,onClick:v,disabled:l,children:r(`common.cancel`)
      }),(0,V.jsx)(K,{
        variant:`danger`,onClick:()=>void y(),disabled:l||!af(g),"aria-busy":l,children:r(l?`settlement.r_sending`:`settlement.r_submit`)
      })]
    }),children:o!==null&&(0,V.jsxs)(`div`,{
      className:Q.form,children:[(0,V.jsxs)(`p`,{
        className:Q.subject,children:[(0,V.jsxs)(`span`,{
          className:Q.subjectWho,children:[(0,V.jsx)(`span`,{
            className:Q.subjectName,children:$M(o.account)
          }),(0,V.jsxs)(`span`,{
            className:Q.subjectEmail,children:[h_(o.payment.at,a),` ·`,` `,r(`settlement.method_${o.payment.method}`)]
          })]
        }),(0,V.jsx)(`span`,{
          className:Q.subjectAmount,children:b
        })]
      }),(0,V.jsx)(`p`,{
        className:Q.explain,id:h,children:r(`settlement.r_explain`,{
          amount:b
        })
      }),(0,V.jsx)(Ub,{
        label:r(`settlement.r_reason`),name:`settlement-reversal-reason`,value:s,onChange:e=>c(e.target.value),onKeyDown:e=>{
          e.key===`Enter`&&e.preventDefault()
        },autoComplete:`off`,maxLength:120,"aria-required":`true`,"aria-describedby":h,"data-autofocus":!0,hint:r(`settlement.r_reason_hint`)
      }),d!==null&&(0,V.jsx)(`p`,{
        className:Q.problem,role:`alert`,children:d
      })]
    })
  })
}

var oN=e=>({
  method:e,rate:``,amount:``,note:``,isChecked:!1,requestId:crypto.randomUUID()
});

function sN(e){
  let[t,n]=(0,_.useState)(()=>oN(`usdt`)),{
    method:r,rate:i,amount:a,note:o
  }
  =t,s=r===`usdt`,c=e=>n(t=>({
    ...t,isChecked:!1,...e
  })),l=s?Du(a):Eu(a),u=s?Mu(a,i):l?bu(a):null,d=e!==null&&e>0n?e:pu(0n),f=u!==null&&u>d?pu(u-d):null,p=s&&Ou(i)&&!Au(i),m=u!==null&&u>gu,h=o.trim(),g={
    rate:s&&i!==``&&!Ou(i)?`d_rate_invalid`:null,amount:m?`d_amount_too_large`:a!==``&&!l?s?`d_amount_invalid_usdt`:`d_amount_invalid_cny`:null,note:h!==``&&!rf(h)?`d_note_invalid`:null
  },v=f!==null||p,y=u!==null&&u>0n&&!m&&g.note===null&&(!v||t.isChecked),b=()=>{
    if(!y||u===null)return null;
    let e={
      requestId:t.requestId,amount:u,note:h===``?null:h
    };
    return r===`usdt`?{
      ...e,method:r,usdt:{
        amount:a,rate:i
      }
    }
    :{
      ...e,method:r,usdt:null
    }
  },x=s?Nu(d,i):d>0n?xu(d):null;
  return{
    typed:t,isUsdt:s,converted:u,over:f,isUnusual:p,needsCheck:v,problems:g,isReady:y,after:u===null||e===null?null:pu(e-u),cover:x,payment:b,setMethod:e=>c({
      method:e,amount:``
    }),setRate:e=>c({
      rate:m_(e,4)
    }),setAmount:e=>c({
      amount:m_(e,s?6:2)
    }),setNote:e=>n(t=>({
      ...t,note:e
    })),setChecked:e=>n(t=>({
      ...t,isChecked:e
    })),fill:()=>{
      x!==null&&c({
        amount:x
      })
    },startOver:()=>n(e=>oN(e.method))
  }
}

var cN={
  stage:`form`,isSending:!1,failure:null
};

function lN(e){
  return e.stage===`done`?`success`:e.isSending?`working`:e.failure===null?`calm`:`alarm`
}

function uN(e){
  let[t,n]=(0,_.useState)(cN);
  return{
    flow:t,send:(0,_.useCallback)(async(t,r)=>{
      n({
        stage:`form`,isSending:!0,failure:null
      });try{
        let i=await ry.pay(t,r);n({
          stage:`done`,recorded:i,payment:r
        }),e(i)
      }catch(e){
        if(e instanceof U){
          e.status===401&&q.getState().expire();let t={
            kind:`refused`,code:e.code,status:e.status
          };n({
            stage:`form`,isSending:!1,failure:t
          });return
        }
        if(!(e instanceof W)&&!(e instanceof bt))throw e;n({
          stage:`form`,isSending:!1,failure:{
            kind:`lost`
          }
        })
      }
    },[e]),reset:(0,_.useCallback)(()=>n(cN),[])
  }
}

var dN=new Set([`amount_mismatch`,`multiplier_unset`,`not_allowed`]);

function fN({
  formId:e,target:t,fields:n,isHeld:r,failure:i,onSubmit:a
}){
  let{
    t:o,i18n:s
  }
  =N(),c=s.language,l=(0,_.useId)(),{
    typed:u,isUsdt:d,problems:f
  }
  =n,p=t=>n=>{
    n.key===`Enter`&&(n.preventDefault(),(t===null?document.querySelector(`button[form="${e}"]`):document.getElementById(t))?.focus())
  },m=(e,t)=>f[e]!==null&&(0,V.jsx)(`p`,{
    id:`${t}-problem`,className:Q.problem,children:o(`settlement.${f[e]}`)
  }),h=`${l}-amount`,g=`${l}-rate`,v=`${l}-note`;
  return(0,V.jsxs)(`form`,{
    id:e,className:Q.form,noValidate:!0,onSubmit:e=>{
      e.preventDefault(),a()
    },children:[(0,V.jsxs)(`p`,{
      className:Q.subject,children:[(0,V.jsxs)(`span`,{
        className:Q.subjectWho,children:[(0,V.jsx)(`span`,{
          className:Q.subjectLabel,children:o(`settlement.d_to`)
        }),(0,V.jsx)(`span`,{
          className:Q.subjectName,children:$M(t)
        }),(0,V.jsx)(`span`,{
          className:Q.subjectEmail,children:t.email
        })]
      }),(0,V.jsx)(`span`,{
        className:Q.subjectPending,children:o(`settlement.d_pending`,{
          amount:p_(t.pending,c)
        })
      })]
    }),(0,V.jsxs)(`fieldset`,{
      className:Q.methods,disabled:r,children:[(0,V.jsx)(`legend`,{
        children:o(`settlement.d_method`)
      }),Gd.map(e=>(0,V.jsxs)(`label`,{
        className:Q.method,children:[(0,V.jsx)(`input`,{
          type:`radio`,name:`${l}-method`,value:e,checked:u.method===e,onChange:()=>n.setMethod(e)
        }),(0,V.jsx)(`span`,{
          children:o(`settlement.method_${e}`)
        })]
      },e))]
    }),d&&(0,V.jsxs)(`div`,{
      className:Q.field,children:[(0,V.jsx)(`label`,{
        className:Q.label,htmlFor:g,children:o(`settlement.d_rate`)
      }),(0,V.jsxs)(`div`,{
        className:Q.affixed,children:[(0,V.jsx)(`span`,{
          className:Q.lead,"aria-hidden":`true`,children:`¥`
        }),(0,V.jsx)(`input`,{
          id:g,className:`input ${Q.control}`,inputMode:`decimal`,autoComplete:`off`,placeholder:`6.65`,value:u.rate,onChange:e=>n.setRate(e.target.value),onKeyDown:p(h),readOnly:r,"aria-invalid":f.rate!==null,"aria-describedby":`${g}-hint${f.rate===null?``:` ${g}-problem`}`,"data-autofocus":!0
        })]
      }),(0,V.jsx)(`p`,{
        id:`${g}-hint`,className:Q.hint,children:o(`settlement.d_rate_hint`)
      }),m(`rate`,g)]
    }),(0,V.jsxs)(`div`,{
      className:Q.field,children:[(0,V.jsxs)(`div`,{
        className:Q.labelRow,children:[(0,V.jsx)(`label`,{
          className:Q.label,htmlFor:h,children:o(`settlement.d_amount`)
        }),(0,V.jsx)(`button`,{
          type:`button`,className:Q.fill,onClick:n.fill,disabled:r||n.cover===null,children:o(`settlement.d_fill`)
        })]
      }),(0,V.jsxs)(`div`,{
        className:Q.affixed,children:[!d&&(0,V.jsx)(`span`,{
          className:Q.lead,"aria-hidden":`true`,children:`¥`
        }),(0,V.jsx)(`input`,{
          id:h,className:`input ${Q.control}`,"data-trail":d||void 0,inputMode:`decimal`,autoComplete:`off`,placeholder:d?`10000`:`66500.00`,value:u.amount,onChange:e=>n.setAmount(e.target.value),onKeyDown:p(v),readOnly:r,"aria-invalid":f.amount!==null,"aria-describedby":f.amount===null?void 0:`${h}-problem`,"data-autofocus":!d||void 0
        }),d&&(0,V.jsx)(`span`,{
          className:Q.trail,"aria-hidden":`true`,children:`USDT`
        })]
      }),m(`amount`,h)]
    }),(0,V.jsxs)(`output`,{
      className:Q.echo,"aria-live":`polite`,children:[d&&(0,V.jsxs)(`span`,{
        className:Q.echoRow,children:[(0,V.jsx)(`span`,{
          children:o(`settlement.d_converted`)
        }),(0,V.jsx)(`strong`,{
          children:p_(n.converted,c)
        })]
      }),(0,V.jsxs)(`span`,{
        className:Q.echoRow,children:[(0,V.jsx)(`span`,{
          children:o(n.over===null?`settlement.d_after`:`settlement.d_after_over`)
        }),(0,V.jsx)(`strong`,{
          "data-over":n.over!==null||void 0,children:n.over===null?p_(n.after??t.pending,c):f_(n.over,c)
        })]
      })]
    }),(0,V.jsxs)(`div`,{
      className:Q.field,children:[(0,V.jsx)(`label`,{
        className:Q.label,htmlFor:v,children:o(`settlement.d_note`)
      }),(0,V.jsx)(`input`,{
        id:v,className:`input ${Q.control} ${Q.note}`,autoComplete:`off`,placeholder:o(`settlement.d_note_placeholder`),value:u.note,onChange:e=>n.setNote(e.target.value),onKeyDown:p(null),readOnly:r,"aria-invalid":f.note!==null,"aria-describedby":f.note===null?void 0:`${v}-problem`
      }),m(`note`,v)]
    }),n.needsCheck&&(0,V.jsxs)(`div`,{
      className:Q.guard,children:[n.over!==null&&(0,V.jsx)(`p`,{
        children:o(`settlement.d_over`,{
          amount:f_(n.over,c)
        })
      }),n.isUnusual&&(0,V.jsx)(`p`,{
        children:o(`settlement.d_rate_unusual`)
      }),(0,V.jsxs)(`label`,{
        className:Q.check,children:[(0,V.jsx)(`input`,{
          type:`checkbox`,checked:u.isChecked,disabled:r,onChange:e=>n.setChecked(e.target.checked)
        }),(0,V.jsx)(`span`,{
          children:o(`settlement.d_checked`)
        })]
      })]
    }),i!==null&&(0,V.jsxs)(`div`,{
      className:Q.refusal,role:`alert`,children:[(0,V.jsx)(`p`,{
        className:Q.refusalHead,children:o(`settlement.d_failed`)
      }),(0,V.jsx)(`p`,{
        className:Q.refusalSaid,children:i.kind===`lost`?o(`settlement.d_lost`):o(`settlement.refused_${dN.has(i.code)?i.code:`other`}`)
      }),i.kind===`refused`&&(0,V.jsxs)(`p`,{
        className:Q.refusalCode,children:[o(`settlement.d_status`,{
          status:i.status
        }),` · `,i.code]
      })]
    })]
  })
}

function pN({
  recorded:e,payment:t,next:n,minHeight:r
}){
  let{
    t:i,i18n:a
  }
  =N(),o=a.language,{
    account:s
  }
  =e,c=Qx(s.pending);
  return(0,V.jsxs)(`output`,{
    className:Q.outcome,style:r===null?void 0:{
      minHeight:r
    },"data-outcome":`recorded`,children:[(0,V.jsx)(`span`,{
      className:Q.outcomeMark,"aria-hidden":`true`,children:(0,V.jsx)(fp,{
        size:28
      })
    }),(0,V.jsx)(`p`,{
      className:Q.outcomeTitle,children:i(`settlement.s_title`)
    }),(0,V.jsx)(`p`,{
      className:Q.outcomeName,children:$M(s)
    }),(0,V.jsx)(`p`,{
      className:Q.outcomeLine,children:i(`settlement.s_line`,{
        amount:f_(t.amount,o),method:i(`settlement.method_${t.method}`)
      })
    }),(0,V.jsx)(`p`,{
      className:Q.outcomeLine,children:s.pending===null||c===`cleared`?i(`settlement.s_cleared`):c===`overpaid`?i(`settlement.s_after_over`,{
        amount:f_(pu(-s.pending),o)
      }):i(`settlement.s_after`,{
        amount:f_(s.pending,o)
      })
    }),(0,V.jsx)(`p`,{
      className:Q.outcomeNote,children:n===null?i(`settlement.s_all_clear`):i(`settlement.s_next`,{
        name:$M(n),amount:p_(n.pending,o)
      })
    })]
  })
}

var mN={
  calm:`gold`,working:`gold`,success:`gold-surge`,alarm:`alarm`
};

function hN({
  target:e,next:t,onRecorded:n,onContinue:r,onClose:i
}){
  let{
    t:a,i18n:o
  }
  =N(),s=(0,_.useId)(),c=(0,_.useRef)(null),l=mh(e),{
    flow:u,send:d,reset:f
  }
  =uN(n),p=sN(l?.pending??null),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(null),x=(0,_.useRef)(null),S=u.stage===`form`&&u.isSending,C=u.stage===`form`&&u.failure?.kind===`lost`,{
    stage:w
  }
  =u;
  (0,_.useEffect)(()=>{
    w===`done`&&c.current?.closest(`[role="dialog"]`)?.focus()
  },[w]),(0,_.useEffect)(()=>{
    m>0&&c.current?.querySelector(`[data-autofocus]`)?.focus()
  },[m]);
  let T=(0,_.useCallback)(e=>{
    x.current=e,v(!0)
  },[]),E=(0,_.useCallback)(()=>{
    let e=x.current;x.current=null,e?.()
  },[]),D=(0,_.useCallback)(()=>new Promise(e=>T(e)),[T]),O=()=>{
    let e=p.payment();
    l!==null&&e!==null&&(b(c.current?.offsetHeight??null),d(l.id,e))
  },k=e=>T(()=>{
    f(),p.startOver(),b(null),r(e),h(e=>e+1),v(!1)
  }),A=u.stage===`form`?(0,V.jsx)(`button`,{
    type:`submit`,form:s,className:Q.confirm,disabled:!p.isReady||S,"aria-busy":S,children:S?a(`settlement.d_sending`):C?a(`settlement.d_resend`):p.converted===null?a(`settlement.d_submit_idle`):a(`settlement.d_submit`,{
      amount:f_(p.converted,o.language)
    })
  }):(0,V.jsxs)(`div`,{
    className:Q.pair,children:[(0,V.jsx)(K,{
      variant:`secondary`,onClick:()=>T(i),disabled:g,children:a(`settlement.exit`)
    }),t!==null&&(0,V.jsx)(`button`,{
      type:`button`,className:Q.confirm,onClick:()=>k(t),disabled:g,children:a(`settlement.continue`)
    })]
  });
  return(0,V.jsx)(ph,{
    open:e!==null,onClose:i,title:a(`settlement.d_title`),width:520,closeDisabled:S,beforeClose:D,backdrop:(0,V.jsx)(uT,{
      mood:lN(u),isLeaving:g,onGone:E,tones:mN
    },m),footer:A,children:(0,V.jsxs)(`div`,{
      ref:c,children:[l!==null&&u.stage===`form`&&(0,V.jsx)(fN,{
        formId:s,target:l,fields:p,isHeld:S||C,failure:u.failure,onSubmit:O
      },m),u.stage===`done`&&(0,V.jsx)(pN,{
        recorded:u.recorded,payment:u.payment,next:t,minHeight:y
      })]
    })
  })
}

function gN(e){
  let t=e.target!==null,[n,r]=(0,_.useState)({
    count:0,isOpen:!1
  });
  return n.isOpen!==t&&r({
    count:n.count+ +!!t,isOpen:t
  }),n.count===0?null:(0,V.jsx)(hN,{
    ...e
  },n.count)
}

var _N={
  header:`SettlementHeader-module__header___LzBIO`,band:`SettlementHeader-module__band___cqQbE`,lead:`SettlementHeader-module__lead___V3cgb`,title:`SettlementHeader-module__title___3Hoi8`,asOf:`SettlementHeader-module__asOf___r8aRX`,figures:`SettlementHeader-module__figures___KDpeg`,figure:`SettlementHeader-module__figure___-1VMY`,figureName:`SettlementHeader-module__figureName___S3yul`,figureValue:`SettlementHeader-module__figureValue___AIXe8`,swash:`SettlementHeader-module__swash___ISmdj`,actions:`SettlementHeader-module__actions___v-RLN`,ghost:`SettlementHeader-module__ghost___DcAFo`
},vN={
  columns:42,rows:10,pitch:6
},yN=[`a`,`b`,`c`,`d`];

function bN(e){
  let{
    book:t,hasFailed:n,isRefreshing:r,onRefresh:i,onOpenEntries:a
  }
  =e,{
    t:o,i18n:s
  }
  =N(),c=s.language,l=e=>e.unit===`yuan`?p_(e.value,c):Dh(e.value,c),u=t===null?null:rS(t.payees);
  return(0,V.jsx)(`header`,{
    className:_N.header,children:(0,V.jsxs)(`div`,{
      className:_N.band,children:[(0,V.jsxs)(`div`,{
        className:_N.lead,children:[(0,V.jsx)(`h1`,{
          className:_N.title,"data-detect-ignore":`gradient-text`,children:o(`settlement.title`)
        }),(0,V.jsx)(`p`,{
          className:_N.asOf,children:t!==null&&(0,V.jsxs)(V.Fragment,{
            children:[(0,V.jsx)(`span`,{
              children:o(`settlement.as_of`,{
                time:g_(t.asOf,c)
              })
            }),t.payees.length>0&&(0,V.jsx)(`span`,{
              children:o(`settlement.count`,{
                total:t.payees.length,pending:nS(t.payees)
              })
            }),u!==null&&u>0n&&(0,V.jsx)(`span`,{
              children:o(`settlement.overpaid_also`,{
                amount:f_(u,c)
              })
            })]
          })
        })]
      }),!n&&(0,V.jsx)(`dl`,{
        className:_N.figures,"data-figures":`settlement`,children:t===null?yN.map((e,t)=>(0,V.jsx)(`div`,{
          className:_N.figure,"data-lead":t===0||void 0,children:t===0?(0,V.jsx)(Am,{
            width:252,height:54,rounded:8
          }):(0,V.jsx)(Am,{
            width:132,height:48,rounded:8
          })
        },e)):iS(t).map((e,t)=>(0,V.jsxs)(`div`,{
          className:_N.figure,"data-lead":t===0||void 0,children:[t===0&&(0,V.jsx)(`span`,{
            className:_N.swash,children:(0,V.jsx)(OS,{
              tone:`gold`,shape:`swash`,seed:61,...vN
            })
          }),(0,V.jsx)(`dt`,{
            className:_N.figureName,children:o(`settlement.stat_${e.name}`)
          }),(0,V.jsx)(`dd`,{
            className:_N.figureValue,children:l(e)
          })]
        },e.name))
      }),(0,V.jsxs)(`div`,{
        className:_N.actions,children:[a!==null&&(0,V.jsxs)(`button`,{
          type:`button`,className:`${Lm.ghostAction} ${_N.ghost}`,onClick:a,"aria-haspopup":`dialog`,children:[(0,V.jsx)(np,{
            size:14
          }),(0,V.jsx)(`span`,{
            children:o(`settlement.all_entries`)
          })]
        }),(0,V.jsxs)(`button`,{
          type:`button`,className:`${Lm.ghostAction} ${J.refresh}`,onClick:i,disabled:r||t===null&&!n,"aria-busy":r,"aria-label":o(`pool.refresh`),children:[(0,V.jsx)(rp,{
            size:14,className:r?Lm.spinning:void 0
          }),(0,V.jsx)(`span`,{
            children:o(`pool.refresh`)
          })]
        })]
      })]
    })
  })
}

var xN=[`a`,`b`,`c`,`d`];

function SN(){
  let{
    t:e
  }
  =N(),{
    state:t,reload:n,note:r
  }
  =oy(),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(0),g=Kh(),v=t.status===`loading`||t.status===`ready`&&g===`pending`,y=t.status===`failed`||g===null,b=t.status===`ready`&&g!==`pending`&&g!==null?t.book:null,x=(0,_.useMemo)(()=>b===null||g===`pending`||g===null?{
    ours:[],hosted:[]
  }
  :aS(eS(b.payees),g),[b,g]),S=x.ours,C=(0,_.useMemo)(()=>b===null?null:{
    ...b,payees:x.ours
  },[b,x]),w=()=>{
    n(),Gh()
  },T=(0,_.useMemo)(()=>dC(f),[f]),E=(0,_.useMemo)(()=>pC(S,T,({
    remark:e,email:t
  })=>({
    names:[e],email:t
  })),[S,T]),D=(0,_.useMemo)(()=>pC(x.hosted,T,({
    remark:e,email:t
  })=>({
    names:[e],email:t
  })),[x,T]),O=b===null?null:Xx(b),k=i!==null&&i.id===b?.mine?.account.id,A=({
    account:e
  })=>{
    r(e),h(e=>e+1)
  },j=tm(),ee=(0,_.useRef)(j);
  return(0,_.useEffect)(()=>{
    let e=nm(ee.current,j);ee.current=j,e&&(n(),h(e=>e+1))
  },[j,n]),(0,V.jsxs)(`div`,{
    className:Rm.page,"aria-busy":v,children:[(0,V.jsx)(bN,{
      book:C,hasFailed:y,isRefreshing:t.status===`ready`&&t.isRefreshing,onRefresh:w,onOpenEntries:S.length+x.hosted.length>0?()=>d(!0):null
    }),y&&(0,V.jsxs)(`div`,{
      className:`empty-state`,children:[(0,V.jsxs)(`div`,{
        className:`empty-content`,children:[(0,V.jsx)(`div`,{
          className:`empty-icon`,"aria-hidden":`true`,children:(0,V.jsx)(ap,{
            size:20
          })
        }),(0,V.jsx)(`div`,{
          role:`alert`,children:(0,V.jsx)(`div`,{
            className:`empty-title`,children:e(`settlement.load_failed`)
          })
        })]
      }),(0,V.jsx)(`div`,{
        className:`empty-action`,children:(0,V.jsx)(K,{
          onClick:w,children:e(`common.retry`)
        })
      })]
    }),v&&!y&&(0,V.jsx)(`div`,{
      className:qM.grid,children:xN.map(e=>(0,V.jsx)(Am,{
        height:136,rounded:12
      },e))
    }),b!==null&&!y&&(0,V.jsxs)(`div`,{
      className:qM.groups,children:[b.mine!==null&&(0,V.jsx)(iN,{
        mine:b.mine,onOpen:()=>a(b.mine?.account??null)
      }),S.length+x.hosted.length>0&&(0,V.jsxs)(`section`,{
        className:qM.group,children:[(0,V.jsxs)(`div`,{
          className:qM.groupHead,children:[O===`lead`&&(0,V.jsx)(`h2`,{
            className:qM.groupTitle,children:e(`settlement.payees_heading`)
          }),(0,V.jsx)(bC,{
            value:f,onChange:p,found:E.length+D.length
          })]
        }),E.length===0?T.length>0&&D.length===0&&(0,V.jsx)(SC,{
          onClear:()=>p(``)
        }):(0,V.jsx)(`div`,{
          className:qM.grid,children:E.map(e=>(0,V.jsx)(tN,{
            account:e,rank:O===`lead`?`h3`:`h2`,canSettle:b.canSettle,onOpen:()=>a(e),onSettle:()=>s(e),marks:T
          },e.id))
        })]
      }),D.length>0&&(0,V.jsx)(aC,{
        children:(0,V.jsx)(`div`,{
          className:qM.grid,children:D.map(e=>(0,V.jsx)(tN,{
            account:e,rank:`h3`,canSettle:b.canSettle,onOpen:()=>a(e),onSettle:()=>s(e),marks:T
          },e.id))
        })
      }),O===`overseer`&&S.length===0&&x.hosted.length===0&&(0,V.jsx)(`div`,{
        className:`empty-state`,children:(0,V.jsx)(`div`,{
          className:`empty-content`,children:(0,V.jsxs)(`div`,{
            children:[(0,V.jsx)(`div`,{
              className:`empty-title`,children:e(`settlement.empty_title`)
            }),(0,V.jsx)(`div`,{
              className:`empty-desc`,children:e(`settlement.empty_desc`)
            })]
          })
        })
      })]
    }),(0,V.jsx)(rN,{
      target:i,isOwn:k,brief:k&&Zx(b?.mine??null),version:m,covered:o!==null||c!==null,onClose:()=>a(null),onSettle:s,onReverse:(e,t)=>l({
        payment:e,account:t
      })
    }),(0,V.jsx)(WM,{
      open:u,version:m,onClose:()=>d(!1)
    }),(0,V.jsx)(gN,{
      target:o,next:tS(S),onRecorded:A,onContinue:s,onClose:()=>{
        s(null),n()
      }
    }),(0,V.jsx)(aN,{
      reversing:c,onClose:()=>l(null),onRecorded:e=>{
        A(e),l(null),n()
      }
    })]
  })
}

export { SN };
