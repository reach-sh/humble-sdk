const _version="0.1.10",_versionHash="0.1.10 (2604daf0)",_backendVersion=16;function getExports(e){const l=e.reachStdlib;e=l.T_UInt;const u=l.T_Struct([["A",e],["B",e]]),f=l.T_Bool;var t=l.T_Address;const m=l.T_Struct([["protoFee",e],["lpFee",e],["totFee",e],["protoAddr",t],["locked",f]]);return{computeMint_:(e,t,n)=>{var e=l.protect(u,e,null),t=l.protect(u,t,null),n=l.protect(u,n,null),a=e.A,e=e.B,i=t.A,t=t.B,n=n.B;let d;var r,c=l.eq(n,l.checkedBigNumberify("284:19:decimal",l.UInt_max,"0"));return d=c?(c=l.cast("UInt","UInt256",a,!1),r=l.cast("UInt","UInt256",e,!1),c=l.mul256(c,r),r=l.sqrt256(c),l.cast("UInt256","UInt",r,!1)):(c=l.muldiv(a,n,i),r=l.muldiv(e,n,t),l.lt(c,r)?c:r)},computeSwap_:(e,t,n,a)=>{var e=l.protect(f,e,null),t=l.protect(u,t,null),n=l.protect(u,n,null),a=l.protect(m,a,null),i=t.A,t=t.B,d=n.A,n=n.B,r=a.protoFee,c=a.lpFee,a=a.totFee,o=l.lt(r,l.checkedBigNumberify("./index.rsh:72:14:decimal",l.UInt_max,"100")),b=l.lt(c,l.checkedBigNumberify("./index.rsh:73:14:decimal",l.UInt_max,"100")),o=!!o&&b,b=l.add(c,r),c=l.eq(a,b),b=!!o&&c,o=l.lt(a,l.checkedBigNumberify("./index.rsh:75:15:decimal",l.UInt_max,"100")),c=!!b&&o,b=l.gt(a,l.checkedBigNumberify("./index.rsh:76:15:decimal",l.UInt_max,"0")),o=!!c&&b,c=(l.assert(o,{at:"<top level>",fs:[],msg:null,who:"Module"}),l.gt(l.UInt_max,l.checkedBigNumberify("./index.rsh:70:22:decimal",l.UInt_max,"10000")));l.assert(c,{at:"275:10:application",fs:['at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"});let s;var p=(s=e?(b=l.eq(t,l.checkedBigNumberify("./index.rsh:262:18:decimal",l.UInt_max,"0")),l.assert(b,{at:"./index.rsh:262:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),o=l.add(d,i),c=l.muldiv(i,n,o),e=l.cast("UInt","UInt256",i,!1),b=l.cast("UInt","UInt256",a,!1),b=l.sub256(l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),b),e=l.mul256(e,b),b=l.cast("UInt","UInt256",d,!1),b=l.mul256(b,l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),b=l.add256(b,e),p=l.cast("UInt","UInt256",n,!1),e=l.mul256(e,p),p=l.div256(e,b),e=l.cast("UInt256","UInt",p,!1),b=l.sub(c,e),p=l.mul(r,l.checkedBigNumberify("./index.rsh:243:40:decimal",l.UInt_max,"100")),c=l.div(p,a),p=l.muldiv(b,c,l.checkedBigNumberify("./index.rsh:245:54:decimal",l.UInt_max,"100")),b=l.muldiv(i,r,l.checkedBigNumberify("./index.rsh:247:49:decimal",l.UInt_max,"10000")),c=l.muldiv(b,n,o),o=l.gt(c,p),c=[b,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],b=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),p],o=(p=o?c:b)[l.checkedBigNumberify("./index.rsh:263:19:array",l.UInt_max,"0")],c=p[l.checkedBigNumberify("./index.rsh:263:19:array",l.UInt_max,"1")],[{A:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),B:e},{A:o,B:c}]):(b=l.eq(i,l.checkedBigNumberify("./index.rsh:267:18:decimal",l.UInt_max,"0")),l.assert(b,{at:"./index.rsh:267:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),p=l.add(n,t),e=l.muldiv(t,d,p),o=l.cast("UInt","UInt256",t,!1),c=l.cast("UInt","UInt256",a,!1),i=l.sub256(l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),c),b=l.mul256(o,i),c=l.cast("UInt","UInt256",n,!1),o=l.mul256(c,l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),i=l.add256(o,b),n=l.cast("UInt","UInt256",d,!1),c=l.mul256(b,n),o=l.div256(c,i),b=l.cast("UInt256","UInt",o,!1),n=l.sub(e,b),c=l.mul(r,l.checkedBigNumberify("./index.rsh:243:40:decimal",l.UInt_max,"100")),i=l.div(c,a),o=l.muldiv(n,i,l.checkedBigNumberify("./index.rsh:245:54:decimal",l.UInt_max,"100")),e=l.muldiv(t,r,l.checkedBigNumberify("./index.rsh:247:49:decimal",l.UInt_max,"10000")),c=l.muldiv(e,d,p),a=l.gt(c,o),n=[e,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],i=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),o],r=(t=a?n:i)[l.checkedBigNumberify("./index.rsh:268:19:array",l.UInt_max,"0")],d=t[l.checkedBigNumberify("./index.rsh:268:19:array",l.UInt_max,"1")],[{A:b,B:l.checkedBigNumberify("<builtin>",l.UInt_max,"0")},{A:d,B:r}]))[l.checkedBigNumberify("276:11:array",l.UInt_max,"0")],c=s[l.checkedBigNumberify("276:11:array",l.UInt_max,"1")];return[{A:p.A,B:p.B},{A:c.A,B:c.B}]}}}function _getEvents(e){var e=e.reachStdlib,t=e.T_Address,n=e.T_UInt,a=e.T_Struct([["A",n],["B",n]]),i=e.T_Bool;return{Deposit:[t,a,n,a,a],Harvest:[e.T_Struct([["protoFee",n],["lpFee",n],["totFee",n],["protoAddr",t],["locked",i]])],Swap:[t,a,a,a],Withdraw:[t,n,a,a,a]}}function _getViews(e,t){const w=e.reachStdlib;var e=w.T_Token,n=w.T_Null,n=w.T_Data({None:n,Some:e}),a=w.T_UInt,i=w.T_Object({A:a,B:a}),d=w.T_Address,r=w.T_Bool,r=w.T_Struct([["protoFee",a],["lpFee",a],["totFee",a],["protoAddr",d],["locked",r]]),c=w.T_Struct([["A",a],["B",a]]);return{infos:{Info:{decode:async(e,t,n)=>{if(w.eq(e,w.checkedBigNumberify("<builtin>",w.UInt_max,"2"))){const[,p,l,u,f,m,h,x]=t;return[...n],c=f.A,o=f.B,s=m.A,b=m.B,d=x.protoFee,a=x.lpFee,r=x.totFee,i=x.protoAddr,c={A:c,B:o},o={A:s,B:b},s={locked:x.locked,lpFee:a,protoAddr:i,protoFee:d,totFee:r},b={A:h.A,B:h.B},{liquidityToken:u,lptBals:c,poolBals:o,protoBals:b,protoInfo:s,tokA:l,tokB:p}}var a,i,d,r,c,o,b,s;if(w.eq(e,w.checkedBigNumberify("<builtin>",w.UInt_max,"4"))){const[,,y,_,T,,A,I,B,k,,]=t;return[...n],a=A.A,i=A.B,d=I.A,r=I.B,c=k.protoFee,o=k.lpFee,b=k.totFee,s=k.protoAddr,a={A:a,B:i},i={A:d,B:r},d={locked:k.locked,lpFee:o,protoAddr:s,protoFee:c,totFee:b},r={A:B.A,B:B.B},{liquidityToken:T,lptBals:a,poolBals:i,protoBals:r,protoInfo:d,tokA:_,tokB:y}}w.assert(!1,"illegal view")},ty:w.T_Struct([["liquidityToken",e],["lptBals",c],["poolBals",c],["protoInfo",r],["protoBals",c],["tokB",e],["tokA",n]])}},views:{2:[e,e,n,e,i,i,i,r],4:[d,e,e,n,e,i,i,i,i,r,a]}}}function _getMaps(e){return{mapDataTy:e.reachStdlib.T_Tuple([])}}async function Admin(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for Admin expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for Admin expects to receive an interact object as its second argument."));const o=e._initialize(),b=o.stdlib;var e=b.T_Bytes(b.checkedBigNumberify("<builtin>",b.UInt_max,"32")),j=b.T_Bytes(b.checkedBigNumberify("<builtin>",b.UInt_max,"8")),n=b.T_Contract;const s=b.T_Token;var a=b.T_UInt,C=b.T_Address,z=b.T_Bool,z=b.T_Struct([["protoFee",a],["lpFee",a],["totFee",a],["protoAddr",C],["locked",z]]);const O=b.T_Tuple([a,z]);var X=b.T_Null,C=b.T_Tuple([C,z]),R=b.T_Struct([["A",a],["B",a]]),z=b.T_Tuple([R]),i=b.T_Tuple([a]),d=b.T_Tuple([a,a]),J=b.T_Data({Protocol_harvest0_14502:C,Provider_deposit0_14502:z,Provider_withdraw0_14502:i,Trader_swapAForB0_14502:d,Trader_swapBForA0_14502:d}),W=b.T_Tuple([R,a]),C=b.T_Tuple([]),z=b.protect(e,t.ltName,"for Admin's interact field ltName"),i=b.protect(j,t.ltSymbol,"for Admin's interact field ltSymbol"),d=b.protect(n,t.proto,"for Admin's interact field proto"),M=b.protect(s,t.tokA,"for Admin's interact field tokA"),q=b.protect(s,t.tokB,"for Admin's interact field tokB"),V=b.gt(b.UInt_max,b.checkedBigNumberify("./index.rsh:70:22:decimal",b.UInt_max,"10000")),V=(b.assert(V,{at:"./index.rsh:348:10:application",fs:['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],msg:null,who:"Admin"}),b.tokenEq(M,q)),V=(b.assert(!V,{at:"./index.rsh:349:10:application",fs:['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],msg:null,who:"Admin"}),await o.sendrecv({args:[M,q,z,i,d],evt_cnt:5,funcNum:0,lct:b.checkedBigNumberify("./index.rsh:358:9:dot",b.UInt_max,"0"),onlyIf:!0,out_tys:[s,s,e,j,n],pay:[b.checkedBigNumberify("./index.rsh:358:9:decimal",b.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};let n=b.UInt_max;var[a,i,d,r,c]=e["data"],a=(t.txns.push({amt:b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),kind:"init",tok:a}),t.txns.push({amt:b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),kind:"init",tok:i}),await o.getContractInfo(),[b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0"),void t.txns.push({accs:[],apps:[],bills:b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0"),fees:b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0"),kind:"remote",obj:c,pays:b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0"),toks:[]})]),i=await e.getOutput("internal","v18325",O,a),c=(i[b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0")],i[b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"1")],b.UInt_max,b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),b.simTokenNew(t,d,r,"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0","\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",b.UInt_max,void 0,n=n.sub(1)));await e.getOutput("internal","v18351",s,c),b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),b.checkedBigNumberify("<builtin>",b.UInt_max,"0");return await 0,t.isHalt=!1,t},soloSend:!0,timeoutAt:void 0,tys:[s,s,e,j,n],waitIfNotPresent:!1})),{data:[M,q,,,,],time:z,from:G}=V,i=b.gt(b.UInt_max,b.checkedBigNumberify("./index.rsh:70:22:decimal",b.UInt_max,"10000")),d=(b.assert(i,{at:"./index.rsh:348:10:application",fs:['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],msg:null,who:"Admin"}),b.tokenEq(M,q)),e=(b.assert(!d,{at:"./index.rsh:349:10:application",fs:['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],msg:null,who:"Admin"}),await o.getContractInfo(),await V.getOutput("internal","v18325",O,void 0)),j=e[b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0")],n=e[b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"1")],i=n.protoFee,d=n.lpFee,e=n.totFee,Z=b.lt(i,b.checkedBigNumberify("./index.rsh:72:14:decimal",b.UInt_max,"100")),H=b.lt(d,b.checkedBigNumberify("./index.rsh:73:14:decimal",b.UInt_max,"100")),Z=!!Z&&H,H=b.add(d,i),d=b.eq(e,H),i=!!Z&&d,H=b.lt(e,b.checkedBigNumberify("./index.rsh:75:15:decimal",b.UInt_max,"100")),Z=!!i&&H,d=b.gt(e,b.checkedBigNumberify("./index.rsh:76:15:decimal",b.UInt_max,"0")),i=(b.assert(!!Z&&d,{at:"./index.rsh:363:14:application",fs:[],msg:null,who:"Admin"}),b.eq(b.checkedBigNumberify("./index.rsh:363:14:application",b.UInt_max,"0"),j)),H=(b.assert(i,{at:"./index.rsh:363:14:application",fs:[],msg:"remote bill check",who:"Admin"}),{A:b.UInt_max,B:b.checkedBigNumberify("<builtin>",b.UInt_max,"0")});const Y=await V.getOutput("internal","v18351",s,void 0);var e=await b.Array_asyncReduce([[M,q]],!1,async([e],t,n)=>{e=b.tokenEq(Y,e);return t||e}),K=(b.assert(!e,{at:"./index.rsh:367:25:application",fs:[],msg:"New token is unique",who:"Admin"}),b.protect(X,await t.signalPoolCreation(Y),{at:"./index.rsh:375:36:application",fs:["at ./index.rsh:375:36:application call to [unknown function] (defined at: ./index.rsh:375:36:function exp)",'at ./index.rsh:375:36:application call to "liftedInteract" (defined at: ./index.rsh:375:36:application)'],msg:"signalPoolCreation",who:"Admin"}),{A:b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),B:b.checkedBigNumberify("<builtin>",b.UInt_max,"0")});let L=!1,r=H,c=K,p=K,l=n,$=z,u=j;for(;await!L;){const D=await o.recv({didSend:!1,evt_cnt:1,funcNum:3,out_tys:[J],timeoutAt:void 0,waitIfNotPresent:!1});var{data:[e0],time:t0}=D;switch(e0[0]){case"Protocol_harvest0_14502":var f=e0[1],f=(f[b.checkedBigNumberify("./index.rsh:438:9:spread",b.UInt_max,"0")],f[b.checkedBigNumberify("./index.rsh:438:9:spread",b.UInt_max,"1")]),m=l.protoAddr,m=b.addressEq(G,m),m=(b.assert(m,{at:"./index.rsh:422:14:application",fs:['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:"Thou art not the Protocol",who:"Admin"}),f.protoFee),h=f.lpFee,x=f.totFee,y=b.lt(m,b.checkedBigNumberify("./index.rsh:72:14:decimal",b.UInt_max,"100")),_=b.lt(h,b.checkedBigNumberify("./index.rsh:73:14:decimal",b.UInt_max,"100")),y=!!y&&_,_=b.add(h,m),h=b.eq(x,_),m=!!y&&h,_=b.lt(x,b.checkedBigNumberify("./index.rsh:75:15:decimal",b.UInt_max,"100")),y=!!m&&_,h=b.gt(x,b.checkedBigNumberify("./index.rsh:76:15:decimal",b.UInt_max,"0")),m=(b.assert(!!y&&h,{at:"./index.rsh:78:29:application",fs:['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)','at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:null,who:"Admin"}),b.le(await o.getBalance(),u)?b.checkedBigNumberify("./index.rsh:424:42:application",b.UInt_max,"0"):b.sub(await o.getBalance(),u)),_=b.add(m,u),x=r.B,y=f.locked,h=b.eq(x,b.checkedBigNumberify("./index.rsh:427:56:decimal",b.UInt_max,"0")),x=!!y&&h,y=c.A,h=c.B,y=b.eq(y,b.checkedBigNumberify("./index.rsh:391:37:decimal",b.UInt_max,"0")),h=b.eq(h,b.checkedBigNumberify("./index.rsh:391:47:decimal",b.UInt_max,"0")),x=!!x&&(!!y&&h),y=p.A,h=p.B,_=b.sub(_,m),y=(await D.getOutput("Protocol_harvest","v19954",W,[{A:y,B:h},m]),f.protoAddr,r),h=c;L=x,r=y,c=h,p=K,l=f,$=t0,u=_;continue;case"Provider_deposit0_14502":{m=e0[1][b.checkedBigNumberify("./index.rsh:459:10:spread",b.UInt_max,"0")],x=l.locked,y=(b.assert(!x,{at:"./index.rsh:460:12:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"locked",who:"Admin"}),m.A),h=m.B,f=r.B,_=b.eq(f,b.checkedBigNumberify("./index.rsh:284:19:decimal",b.UInt_max,"0"));let e;var n0,a0,T=r.A,i0=(e=_?(n0=b.cast("UInt","UInt256",y,!1),a0=b.cast("UInt","UInt256",h,!1),n0=b.mul256(n0,a0),a0=b.sqrt256(n0),b.cast("UInt256","UInt",a0,!1)):(n0=c.A,a0=c.B,i0=b.muldiv(y,f,n0),d0=b.muldiv(h,f,a0),b.lt(i0,d0)?i0:d0),c.A),d0=b.add(y,i0),r0=c.B,r0=b.add(h,r0),r0={A:d0,B:r0},T=b.sub(T,e),c0=b.add(f,e),T={A:T,B:c0},c0=(await D.getOutput("Provider_deposit","v21115",a,e),p),o0=l,b0=u;L=!1,r=T,c=r0,p=c0,l=o0,$=t0,u=b0;continue}case"Provider_withdraw0_14502":var T=e0[1][b.checkedBigNumberify("./index.rsh:447:10:spread",b.UInt_max,"0")],r0=r.A,c0=r.B,o0=c.A,b0=c.B,s0=b.muldiv(T,o0,c0),p0=b.muldiv(T,b0,c0),l0=b.add(r0,T),A=b.sub(c0,T),l0={A:l0,B:A},A=b.sub(o0,s0),u0=b.sub(b0,p0),A={A:A,B:u0},u0=(await D.getOutput("Provider_withdraw","v22429",R,{A:s0,B:p0}),p),s0=l,p0=u;L=!1,r=l0,c=A,p=u0,l=s0,$=t0,u=p0;continue;case"Trader_swapAForB0_14502":var l0=e0[1],A=l0[b.checkedBigNumberify("./index.rsh:514:10:spread",b.UInt_max,"0")],u0=l0[b.checkedBigNumberify("./index.rsh:514:10:spread",b.UInt_max,"1")],s0=l.locked,p0=(b.assert(!s0,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"locked",who:"Admin"}),c.A),I=c.B,B=l.protoFee,k=l.totFee,w=b.add(p0,A),g=b.muldiv(A,I,w),v=b.cast("UInt","UInt256",A,!1),N=b.cast("UInt","UInt256",k,!1),N=b.sub256(b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),N),v=b.mul256(v,N),N=b.cast("UInt","UInt256",p0,!1),U=b.mul256(N,b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),U=b.add256(U,v),P=b.cast("UInt","UInt256",I,!1),v=b.mul256(v,P),v=b.div256(v,U),U=b.cast("UInt256","UInt",v,!1),v=b.sub(g,U),g=b.mul(B,b.checkedBigNumberify("./index.rsh:243:40:decimal",b.UInt_max,"100")),g=b.div(g,k),k=b.muldiv(v,g,b.checkedBigNumberify("./index.rsh:245:54:decimal",b.UInt_max,"100")),v=b.muldiv(A,B,b.checkedBigNumberify("./index.rsh:247:49:decimal",b.UInt_max,"10000")),g=b.muldiv(v,I,w),B=b.gt(g,k),g=[v,b.checkedBigNumberify("<builtin>",b.UInt_max,"0")],v=[b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),k],k=B?g:v,B=k[b.checkedBigNumberify("./index.rsh:263:19:array",b.UInt_max,"0")],g=k[b.checkedBigNumberify("./index.rsh:263:19:array",b.UInt_max,"1")],v=b.sub(I,U),k=b.sub(w,B),I=b.sub(v,g),w=b.le(u0,U),v=(b.assert(w,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"slippage",who:"Admin"}),b.mul256(N,P)),w=b.cast("UInt","UInt256",k,!1),N=b.cast("UInt","UInt256",I,!1),P=b.mul256(w,N),w=b.ge256(P,v),N=(b.assert(w,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"constant product",who:"Admin"}),{A:k,B:I}),P=p.A,v=b.add(P,B),w=p.B,k={A:v,B:b.add(w,g)},I={A:b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),B:U},P=(await D.getOutput("Trader_swapAForB","v23708",R,I),b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),r),B=l,v=u;L=!1,r=P,c=N,p=k,l=B,$=t0,u=v;continue;case"Trader_swapBForA0_14502":var w=e0[1],g=w[b.checkedBigNumberify("./index.rsh:518:10:spread",b.UInt_max,"0")],U=w[b.checkedBigNumberify("./index.rsh:518:10:spread",b.UInt_max,"1")],I=l.locked,P=(b.assert(!I,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"locked",who:"Admin"}),c.A),N=c.B,k=l.protoFee,B=l.totFee,v=b.add(N,g),F=b.muldiv(g,P,v),E=b.cast("UInt","UInt256",g,!1),Q=b.cast("UInt","UInt256",B,!1),Q=b.sub256(b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),Q),E=b.mul256(E,Q),Q=b.cast("UInt","UInt256",N,!1),f0=b.mul256(Q,b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),f0=b.add256(f0,E),m0=b.cast("UInt","UInt256",P,!1),E=b.mul256(E,m0),E=b.div256(E,f0),f0=b.cast("UInt256","UInt",E,!1),E=b.sub(F,f0),F=b.mul(k,b.checkedBigNumberify("./index.rsh:243:40:decimal",b.UInt_max,"100")),F=b.div(F,B),E=b.muldiv(E,F,b.checkedBigNumberify("./index.rsh:245:54:decimal",b.UInt_max,"100")),F=b.muldiv(g,k,b.checkedBigNumberify("./index.rsh:247:49:decimal",b.UInt_max,"10000")),S=b.muldiv(F,P,v),S=b.gt(S,E),F=[F,b.checkedBigNumberify("<builtin>",b.UInt_max,"0")],E=[b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),E],S=S?F:E,F=S[b.checkedBigNumberify("./index.rsh:268:19:array",b.UInt_max,"0")],E=S[b.checkedBigNumberify("./index.rsh:268:19:array",b.UInt_max,"1")],S=b.sub(P,f0),S=b.sub(S,E),h0=b.sub(v,F),x0=b.le(U,f0),x0=(b.assert(x0,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"slippage",who:"Admin"}),b.mul256(m0,Q)),m0=b.cast("UInt","UInt256",S,!1),Q=b.cast("UInt","UInt256",h0,!1),m0=b.mul256(m0,Q),Q=b.ge256(m0,x0),m0=(b.assert(Q,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"constant product",who:"Admin"}),{A:S,B:h0}),x0=p.A,Q=b.add(x0,E),S=p.B,h0={A:Q,B:b.add(S,F)},x0={A:f0,B:b.checkedBigNumberify("<builtin>",b.UInt_max,"0")},E=(await D.getOutput("Trader_swapBForA","v24992",R,x0),b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),r),Q=l,S=u;L=!1,r=E,c=m0,p=h0,l=Q,$=t0,u=S;continue}}const D=await o.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[C],timeoutAt:void 0,waitIfNotPresent:!1});var[,]=D["data"];await D.getOutput("Protocol_delete","v25043",X,null)}async function _Protocol_delete2(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Protocol_delete2 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Protocol_delete2 expects to receive an interact object as its second argument."));e=e._initialize();const n=e.stdlib;var a=n.T_Token;const i=n.T_Null;var d=n.T_Data({None:i,Some:a}),r=n.T_UInt,c=n.T_Object({A:r,B:r}),o=n.T_Address,b=n.T_Bool,r=n.T_Struct([["protoFee",r],["lpFee",r],["totFee",r],["protoAddr",o],["locked",b]]),o=n.T_Tuple([]);const[s,p,l,u,f,m,h,x]=await e.getState(n.checkedBigNumberify("<builtin>",n.UInt_max,"2"),[a,a,d,a,c,c,c,r]);var b=n.protect(o,await t.in(),{at:"./index.rsh:525:3:application",fs:["at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)"],msg:"in",who:"Protocol_delete"}),e=await e.sendrecv({args:[s,p,l,u,f,m,h,x,b],evt_cnt:1,funcNum:2,lct:n.checkedBigNumberify("<builtin>",n.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[n.checkedBigNumberify("./index.rsh:525:3:decimal",n.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};n.UInt_max;var[,]=e["data"];t.txns.push({kind:"api",who:"Protocol_delete"}),await e.getOutput("Protocol_delete","v25043",i,null);return n.simTokenBurn(t,u,n.UInt_max),n.simTokenDestroy(t,u),t.txns.push({kind:"halt",tok:p}),t.txns.push({kind:"halt",tok:s}),t.txns.push({kind:"halt",tok:void 0}),t.isHalt=!0,t},soloSend:!1,timeoutAt:void 0,tys:[a,a,d,a,c,c,c,r,o],waitIfNotPresent:!1}),[b]=e["data"],d=await e.getOutput("Protocol_delete","v25043",i,null);n.protect(i,await t.out(b,d),{at:"./index.rsh:525:3:application",fs:["at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)",'at ./index.rsh:526:4:application call to "k" (defined at: ./index.rsh:525:3:function exp)'],msg:"out",who:"Protocol_delete"})}async function _Protocol_harvest4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Protocol_harvest4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Protocol_harvest4 expects to receive an interact object as its second argument."));const b=e._initialize(),s=b.stdlib;var e=s.T_Address,n=s.T_Token,a=s.T_Null,i=s.T_Data({None:a,Some:n}),d=s.T_UInt,r=s.T_Object({A:d,B:d}),c=s.T_Bool,c=s.T_Struct([["protoFee",d],["lpFee",d],["totFee",d],["protoAddr",e],["locked",c]]),o=s.T_Tuple([e,c]),p=s.T_Struct([["A",d],["B",d]]),l=s.T_Tuple([p]),u=s.T_Tuple([d]),f=s.T_Tuple([d,d]),l=s.T_Data({Protocol_harvest0_14502:o,Provider_deposit0_14502:l,Provider_withdraw0_14502:u,Trader_swapAForB0_14502:f,Trader_swapBForA0_14502:f});const m=s.T_Tuple([p,d]),[h,x,y,j,_,T,A,I,B,k,w]=await b.getState(s.checkedBigNumberify("<builtin>",s.UInt_max,"4"),[e,n,n,i,n,r,r,r,r,c,d]);var u=s.protect(o,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)",'at ./index.rsh:378:19:application call to "runProtocol_harvest0_14502" (defined at: ./index.rsh:438:9:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Protocol_harvest"}),f=u[s.checkedBigNumberify("./index.rsh:1:23:application",s.UInt_max,"1")],p=f.protoFee,o=f.lpFee,f=f.totFee,g=s.lt(p,s.checkedBigNumberify("./index.rsh:72:14:decimal",s.UInt_max,"100")),v=s.lt(o,s.checkedBigNumberify("./index.rsh:73:14:decimal",s.UInt_max,"100")),g=!!g&&v,v=s.add(o,p),o=s.eq(f,v),p=!!g&&o,v=s.lt(f,s.checkedBigNumberify("./index.rsh:75:15:decimal",s.UInt_max,"100")),g=!!p&&v,o=s.gt(f,s.checkedBigNumberify("./index.rsh:76:15:decimal",s.UInt_max,"0")),p=(s.assert(!!g&&o,{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)",'at ./index.rsh:378:19:application call to "runProtocol_harvest0_14502" (defined at: ./index.rsh:438:9:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:null,who:"Protocol_harvest"}),k.protoAddr),v=s.addressEq(h,p),f=(s.assert(v,{at:"./index.rsh:422:14:application",fs:['at ./index.rsh:440:28:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)","at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)",'at ./index.rsh:378:19:application call to "runProtocol_harvest0_14502" (defined at: ./index.rsh:438:9:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"Thou art not the Protocol",who:"Protocol_harvest"}),s.le(await b.getBalance(),w)?s.checkedBigNumberify("./index.rsh:424:42:application",s.UInt_max,"0"):s.sub(await b.getBalance(),w),["Protocol_harvest0_14502",u]),C=await b.sendrecv({args:[h,x,y,j,_,T,A,I,B,k,w,f],evt_cnt:1,funcNum:3,lct:s.checkedBigNumberify("<builtin>",s.UInt_max,"0"),onlyIf:!0,out_tys:[l],pay:[s.checkedBigNumberify("./index.rsh:370:34:decimal",s.UInt_max,"0"),[[s.checkedBigNumberify("./index.rsh:442:25:decimal",s.UInt_max,"0"),_],[s.checkedBigNumberify("./index.rsh:442:28:decimal",s.UInt_max,"0"),x],[s.checkedBigNumberify("./index.rsh:442:31:decimal",s.UInt_max,"0"),y]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};s.UInt_max;var[n]=e["data"];switch(n[0]){case"Protocol_harvest0_14502":var a=n[1],i=(t.txns.push({kind:"api",who:"Protocol_harvest"}),a[s.checkedBigNumberify("./index.rsh:438:9:spread",s.UInt_max,"0")]),a=a[s.checkedBigNumberify("./index.rsh:438:9:spread",s.UInt_max,"1")],d=(a.protoFee,a.lpFee,a.totFee,s.le(await b.getBalance(),w)?s.checkedBigNumberify("./index.rsh:424:42:application",s.UInt_max,"0"):s.sub(await b.getBalance(),w)),r=s.add(d,w),c=A.B,c=(a.locked,s.eq(c,s.checkedBigNumberify("./index.rsh:427:56:decimal",s.UInt_max,"0")),I.A),o=I.B,c=(s.eq(c,s.checkedBigNumberify("./index.rsh:391:37:decimal",s.UInt_max,"0")),s.eq(o,s.checkedBigNumberify("./index.rsh:391:47:decimal",s.UInt_max,"0")),B.A),o=B.B,r=(s.sub(r,d),t.txns.push({kind:"from",to:i,tok:void 0}),t.txns.push({kind:"from",to:i,tok:x}),t.txns.push({kind:"from",to:i,tok:y}),{A:c,B:o}),i=[r,d];await e.getOutput("Protocol_harvest","v19954",m,i),a.protoAddr,A,I,T;t.isHalt=!1;break;case"Provider_deposit0_14502":n[1];break;case"Provider_withdraw0_14502":n[1];break;case"Trader_swapAForB0_14502":n[1];break;case"Trader_swapBForA0_14502":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[e,n,n,i,n,r,r,r,r,c,d,l],waitIfNotPresent:!1}),{data:[N],didSend:z}=C;switch(N[0]){case"Protocol_harvest0_14502":var U=N[1],P=(U[s.checkedBigNumberify("./index.rsh:438:9:spread",s.UInt_max,"0")],U[s.checkedBigNumberify("./index.rsh:438:9:spread",s.UInt_max,"1")]),F=k.protoAddr,F=s.addressEq(h,F),F=(s.assert(F,{at:"./index.rsh:422:14:application",fs:['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:"Thou art not the Protocol",who:"Protocol_harvest"}),P.protoFee),E=P.lpFee,Q=P.totFee,S=s.lt(F,s.checkedBigNumberify("./index.rsh:72:14:decimal",s.UInt_max,"100")),D=s.lt(E,s.checkedBigNumberify("./index.rsh:73:14:decimal",s.UInt_max,"100")),S=!!S&&D,D=s.add(E,F),E=s.eq(Q,D),F=!!S&&E,D=s.lt(Q,s.checkedBigNumberify("./index.rsh:75:15:decimal",s.UInt_max,"100")),S=!!F&&D,E=s.gt(Q,s.checkedBigNumberify("./index.rsh:76:15:decimal",s.UInt_max,"0")),F=(s.assert(!!S&&E,{at:"./index.rsh:78:29:application",fs:['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)','at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:null,who:"Protocol_harvest"}),s.le(await b.getBalance(),w)?s.checkedBigNumberify("./index.rsh:424:42:application",s.UInt_max,"0"):s.sub(await b.getBalance(),w)),D=s.add(F,w),Q=A.B,S=(P.locked,s.eq(Q,s.checkedBigNumberify("./index.rsh:427:56:decimal",s.UInt_max,"0")),I.A),E=I.B,Q=(s.eq(S,s.checkedBigNumberify("./index.rsh:391:37:decimal",s.UInt_max,"0")),s.eq(E,s.checkedBigNumberify("./index.rsh:391:47:decimal",s.UInt_max,"0")),B.A),S=B.B,E=(s.sub(D,F),await C.getOutput("Protocol_harvest","v19954",m,[{A:Q,B:S},F]));z&&s.protect(a,await t.out(U,E),{at:"./index.rsh:438:10:application",fs:["at ./index.rsh:438:10:application call to [unknown function] (defined at: ./index.rsh:438:10:function exp)",'at ./index.rsh:430:12:application call to "k" (defined at: ./index.rsh:443:30:function exp)',"at ./index.rsh:444:44:application call to [unknown function] (defined at: ./index.rsh:428:20:function exp)","at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:"out",who:"Protocol_harvest"}),P.protoAddr,A,I,T;return void 0;case"Provider_deposit0_14502":N[1];return;case"Provider_withdraw0_14502":N[1];return;case"Trader_swapAForB0_14502":N[1];return;case"Trader_swapBForA0_14502":N[1]}}async function _Provider_deposit4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Provider_deposit4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Provider_deposit4 expects to receive an interact object as its second argument."));e=e._initialize();const p=e.stdlib;var n=p.T_Address,a=p.T_Token,i=p.T_Null,d=p.T_Data({None:i,Some:a});const l=p.T_UInt;var r=p.T_Object({A:l,B:l}),c=p.T_Bool,c=p.T_Struct([["protoFee",l],["lpFee",l],["totFee",l],["protoAddr",n],["locked",c]]),o=p.T_Struct([["A",l],["B",l]]),o=p.T_Tuple([o]),b=p.T_Tuple([n,c]),s=p.T_Tuple([l]),u=p.T_Tuple([l,l]),b=p.T_Data({Protocol_harvest0_14502:b,Provider_deposit0_14502:o,Provider_withdraw0_14502:s,Trader_swapAForB0_14502:u,Trader_swapBForA0_14502:u});const[f,m,h,x,y,_,T,A,I,B,k]=await e.getState(p.checkedBigNumberify("<builtin>",p.UInt_max,"4"),[n,a,a,d,a,r,r,r,r,c,l]);var s=p.protect(o,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)",'at ./index.rsh:378:19:application call to "runProvider_deposit0_14502" (defined at: ./index.rsh:459:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Provider_deposit"}),u=s[p.checkedBigNumberify("./index.rsh:1:23:application",p.UInt_max,"0")],o=u.A,u=u.B,w=B.locked,w=(p.assert(!w,{at:"./index.rsh:460:12:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)",'at ./index.rsh:378:19:application call to "runProvider_deposit0_14502" (defined at: ./index.rsh:459:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"locked",who:"Provider_deposit"}),["Provider_deposit0_14502",s]),g=await e.sendrecv({args:[f,m,h,x,y,_,T,A,I,B,k,w],evt_cnt:1,funcNum:3,lct:p.checkedBigNumberify("<builtin>",p.UInt_max,"0"),onlyIf:!0,out_tys:[b],pay:[p.checkedBigNumberify("./index.rsh:374:36:decimal",p.UInt_max,"0"),[[p.checkedBigNumberify("./index.rsh:374:50:decimal",p.UInt_max,"0"),y],[o,m],[u,h]]],sim_p:async t=>{var n={txns:[],mapRefs:[],maps:[]};p.UInt_max;var{data:[a],from:i}=t;switch(a[0]){case"Protocol_harvest0_14502":a[1];break;case"Provider_deposit0_14502":{var d=a[1],d=(n.txns.push({kind:"api",who:"Provider_deposit"}),d[p.checkedBigNumberify("./index.rsh:459:10:spread",p.UInt_max,"0")]),r=d.A,d=d.B,c=T.B,o=p.eq(c,p.checkedBigNumberify("./index.rsh:284:19:decimal",p.UInt_max,"0"));n.txns.push({amt:r,kind:"to",tok:m}),n.txns.push({amt:d,kind:"to",tok:h});let e;var b=T.A,o=(e=o?(o=p.cast("UInt","UInt256",r,!1),s=p.cast("UInt","UInt256",d,!1),o=p.mul256(o,s),s=p.sqrt256(o),p.cast("UInt256","UInt",s,!1)):(o=A.A,s=A.B,o=p.muldiv(r,c,o),s=p.muldiv(d,c,s),p.lt(o,s)?o:s),A.A),s=(p.add(r,o),A.B);p.add(d,s),p.sub(b,e),p.add(c,e),n.txns.push({kind:"from",to:i,tok:y}),await t.getOutput("Provider_deposit","v21115",l,e),I,B,k;n.isHalt=!1;break}case"Provider_withdraw0_14502":a[1];break;case"Trader_swapAForB0_14502":a[1];break;case"Trader_swapBForA0_14502":a[1]}return n},soloSend:!1,timeoutAt:void 0,tys:[n,a,a,d,a,r,r,r,r,c,l,b],waitIfNotPresent:!1}),{data:[v],didSend:N}=g;switch(v[0]){case"Protocol_harvest0_14502":v[1];return;case"Provider_deposit0_14502":{var U=v[1],P=U[p.checkedBigNumberify("./index.rsh:459:10:spread",p.UInt_max,"0")],F=B.locked,F=(p.assert(!F,{at:"./index.rsh:460:12:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"locked",who:"Provider_deposit"}),P.A),P=P.B,E=T.B,Q=p.eq(E,p.checkedBigNumberify("./index.rsh:284:19:decimal",p.UInt_max,"0"));let e;var S=T.A,Q=(e=Q?(Q=p.cast("UInt","UInt256",F,!1),D=p.cast("UInt","UInt256",P,!1),Q=p.mul256(Q,D),D=p.sqrt256(Q),p.cast("UInt256","UInt",D,!1)):(Q=A.A,D=A.B,Q=p.muldiv(F,E,Q),D=p.muldiv(P,E,D),p.lt(Q,D)?Q:D),A.A),D=(p.add(F,Q),A.B),F=(p.add(P,D),p.sub(S,e),p.add(E,e),await g.getOutput("Provider_deposit","v21115",l,e));N&&p.protect(i,await t.out(U,F),{at:"./index.rsh:459:11:application",fs:["at ./index.rsh:459:11:application call to [unknown function] (defined at: ./index.rsh:459:11:function exp)",'at ./index.rsh:467:10:application call to "k" (defined at: ./index.rsh:465:39:function exp)',"at ./index.rsh:465:39:application call to [unknown function] (defined at: ./index.rsh:465:39:function exp)"],msg:"out",who:"Provider_deposit"}),I,B,k;return}case"Provider_withdraw0_14502":v[1];return;case"Trader_swapAForB0_14502":v[1];return;case"Trader_swapBForA0_14502":v[1]}}async function _Provider_withdraw4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Provider_withdraw4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Provider_withdraw4 expects to receive an interact object as its second argument."));e=e._initialize();const p=e.stdlib;var n=p.T_Address,a=p.T_Token,i=p.T_Null,d=p.T_Data({None:i,Some:a}),r=p.T_UInt,c=p.T_Object({A:r,B:r}),o=p.T_Bool,o=p.T_Struct([["protoFee",r],["lpFee",r],["totFee",r],["protoAddr",n],["locked",o]]),b=p.T_Tuple([r]),s=p.T_Tuple([n,o]);const l=p.T_Struct([["A",r],["B",r]]);var u=p.T_Tuple([l]),f=p.T_Tuple([r,r]),s=p.T_Data({Protocol_harvest0_14502:s,Provider_deposit0_14502:u,Provider_withdraw0_14502:b,Trader_swapAForB0_14502:f,Trader_swapBForA0_14502:f});const[m,h,x,y,_,T,A,I,B,k,w]=await e.getState(p.checkedBigNumberify("<builtin>",p.UInt_max,"4"),[n,a,a,d,a,c,c,c,c,o,r]);var u=p.protect(b,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:447:35:application call to [unknown function] (defined at: ./index.rsh:447:35:function exp)",'at ./index.rsh:378:19:application call to "runProvider_withdraw0_14502" (defined at: ./index.rsh:447:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Provider_withdraw"}),f=u[p.checkedBigNumberify("./index.rsh:1:23:application",p.UInt_max,"0")],g=await e.sendrecv({args:[m,h,x,y,_,T,A,I,B,k,w,["Provider_withdraw0_14502",u]],evt_cnt:1,funcNum:3,lct:p.checkedBigNumberify("<builtin>",p.UInt_max,"0"),onlyIf:!0,out_tys:[s],pay:[p.checkedBigNumberify("./index.rsh:370:34:decimal",p.UInt_max,"0"),[[f,_],[p.checkedBigNumberify("./index.rsh:452:28:decimal",p.UInt_max,"0"),h],[p.checkedBigNumberify("./index.rsh:452:31:decimal",p.UInt_max,"0"),x]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};p.UInt_max;var{data:[n],from:a}=e;switch(n[0]){case"Protocol_harvest0_14502":n[1];break;case"Provider_deposit0_14502":n[1];break;case"Provider_withdraw0_14502":var i=n[1],i=(t.txns.push({kind:"api",who:"Provider_withdraw"}),i[p.checkedBigNumberify("./index.rsh:447:10:spread",p.UInt_max,"0")]),d=(t.txns.push({amt:i,kind:"to",tok:_}),A.A),r=A.B,c=I.A,o=I.B,b=p.muldiv(i,c,r),s=p.muldiv(i,o,r),d=(p.add(d,i),p.sub(r,i),p.sub(c,b),p.sub(o,s),t.txns.push({kind:"from",to:a,tok:h}),t.txns.push({kind:"from",to:a,tok:x}),{A:b,B:s});await e.getOutput("Provider_withdraw","v22429",l,d),B,k,w;t.isHalt=!1;break;case"Trader_swapAForB0_14502":n[1];break;case"Trader_swapBForA0_14502":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,a,a,d,a,c,c,c,c,o,r,s],waitIfNotPresent:!1}),{data:[v],didSend:j}=g;switch(v[0]){case"Protocol_harvest0_14502":v[1];return;case"Provider_deposit0_14502":v[1];return;case"Provider_withdraw0_14502":var N=v[1],U=N[p.checkedBigNumberify("./index.rsh:447:10:spread",p.UInt_max,"0")],P=A.A,F=A.B,E=I.A,Q=I.B,S=p.muldiv(U,E,F),D=p.muldiv(U,Q,F),P=(p.add(P,U),p.sub(F,U),p.sub(E,S),p.sub(Q,D),await g.getOutput("Provider_withdraw","v22429",l,{A:S,B:D}));j&&p.protect(i,await t.out(N,P),{at:"./index.rsh:447:11:application",fs:["at ./index.rsh:447:11:application call to [unknown function] (defined at: ./index.rsh:447:11:function exp)",'at ./index.rsh:454:10:application call to "k" (defined at: ./index.rsh:452:39:function exp)',"at ./index.rsh:452:39:application call to [unknown function] (defined at: ./index.rsh:452:39:function exp)"],msg:"out",who:"Provider_withdraw"}),B,k,w;return;case"Trader_swapAForB0_14502":v[1];return;case"Trader_swapBForA0_14502":v[1]}}async function _Trader_swapAForB4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Trader_swapAForB4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Trader_swapAForB4 expects to receive an interact object as its second argument."));e=e._initialize();const u=e.stdlib;var n=u.T_Address,a=u.T_Token,j=u.T_Null,C=u.T_Data({None:j,Some:a}),i=u.T_UInt,d=u.T_Object({A:i,B:i}),r=u.T_Bool,r=u.T_Struct([["protoFee",i],["lpFee",i],["totFee",i],["protoAddr",n],["locked",r]]),c=u.T_Tuple([i,i]),o=u.T_Tuple([n,r]);const f=u.T_Struct([["A",i],["B",i]]);var b=u.T_Tuple([f]),s=u.T_Tuple([i]),o=u.T_Data({Protocol_harvest0_14502:o,Provider_deposit0_14502:b,Provider_withdraw0_14502:s,Trader_swapAForB0_14502:c,Trader_swapBForA0_14502:c});const[z,m,h,O,X,R,J,x,y,_,W]=await e.getState(u.checkedBigNumberify("<builtin>",u.UInt_max,"4"),[n,a,a,C,a,d,d,d,d,r,i]);var b=u.protect(c,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Trader_swapAForB"}),s=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"0")],c=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"1")],p=_.locked,p=(u.assert(!p,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"locked",who:"Trader_swapAForB"}),x.A),l=x.B,T=_.protoFee,A=_.totFee,I=u.add(p,s),B=u.muldiv(s,l,I),k=u.cast("UInt","UInt256",s,!1),w=u.cast("UInt","UInt256",A,!1),w=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),w),k=u.mul256(k,w),w=u.cast("UInt","UInt256",p,!1),p=u.mul256(w,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),p=u.add256(p,k),M=u.cast("UInt","UInt256",l,!1),k=u.mul256(k,M),k=u.div256(k,p),p=u.cast("UInt256","UInt",k,!1),k=u.sub(B,p),B=u.mul(T,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),B=u.div(B,A),A=u.muldiv(k,B,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),k=u.muldiv(s,T,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),B=u.muldiv(k,l,I),T=u.gt(B,A),B=[k,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],k=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),A],A=T?B:k,T=A[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"0")],B=A[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"1")],k=u.sub(l,p),A=u.sub(I,T),l=u.sub(k,B),I=u.le(c,p),T=(u.assert(I,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"slippage",who:"Trader_swapAForB"}),u.mul256(w,M)),k=u.cast("UInt","UInt256",A,!1),B=u.cast("UInt","UInt256",l,!1),c=u.mul256(k,B),p=u.ge256(c,T),I=(u.assert(p,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_14502" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"constant product",who:"Trader_swapAForB"}),["Trader_swapAForB0_14502",b]),q=await e.sendrecv({args:[z,m,h,O,X,R,J,x,y,_,W,I],evt_cnt:1,funcNum:3,lct:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[u.checkedBigNumberify("./index.rsh:370:34:decimal",u.UInt_max,"0"),[[u.checkedBigNumberify("./index.rsh:516:24:decimal",u.UInt_max,"0"),X],[s,m],[u.checkedBigNumberify("./index.rsh:516:30:decimal",u.UInt_max,"0"),h]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};u.UInt_max;var{data:[n],from:a}=e;switch(n[0]){case"Protocol_harvest0_14502":n[1];break;case"Provider_deposit0_14502":n[1];break;case"Provider_withdraw0_14502":n[1];break;case"Trader_swapAForB0_14502":var i=n[1],i=(t.txns.push({kind:"api",who:"Trader_swapAForB"}),i[u.checkedBigNumberify("./index.rsh:514:10:spread",u.UInt_max,"0")]),d=x.A,r=x.B,c=_.protoFee,o=_.totFee,b=u.add(d,i),s=u.muldiv(i,r,b),p=u.cast("UInt","UInt256",i,!1),l=u.cast("UInt","UInt256",o,!1),l=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),l),p=u.mul256(p,l),l=u.cast("UInt","UInt256",d,!1),d=u.mul256(l,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),l=u.add256(d,p),d=u.cast("UInt","UInt256",r,!1),p=u.mul256(p,d),d=u.div256(p,l),p=u.cast("UInt256","UInt",d,!1),l=u.sub(s,p),d=u.mul(c,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),s=u.div(d,o),d=u.muldiv(l,s,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),o=u.muldiv(i,c,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),l=u.muldiv(o,r,b),s=u.gt(l,d),c=[o,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],l=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),d],o=s?c:l,d=o[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"0")],s=o[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"1")],c=u.sub(r,p),l=(u.sub(b,d),u.sub(c,s),t.txns.push({amt:i,kind:"to",tok:m}),y.A),o=(u.add(l,d),y.B),r=(u.add(o,s),t.txns.push({kind:"from",to:a,tok:h}),{A:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),B:p});await e.getOutput("Trader_swapAForB","v23708",f,r),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),J,_,W;t.isHalt=!1;break;case"Trader_swapBForA0_14502":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,a,a,C,a,d,d,d,d,r,i,o],waitIfNotPresent:!1}),{data:[g],didSend:V}=q;switch(g[0]){case"Protocol_harvest0_14502":g[1];return;case"Provider_deposit0_14502":g[1];return;case"Provider_withdraw0_14502":g[1];return;case"Trader_swapAForB0_14502":var G=g[1],v=G[u.checkedBigNumberify("./index.rsh:514:10:spread",u.UInt_max,"0")],Z=G[u.checkedBigNumberify("./index.rsh:514:10:spread",u.UInt_max,"1")],N=_.locked,N=(u.assert(!N,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"locked",who:"Trader_swapAForB"}),x.A),U=x.B,P=_.protoFee,F=_.totFee,E=u.add(N,v),Q=u.muldiv(v,U,E),S=u.cast("UInt","UInt256",v,!1),D=u.cast("UInt","UInt256",F,!1),D=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),D),S=u.mul256(S,D),D=u.cast("UInt","UInt256",N,!1),N=u.mul256(D,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),N=u.add256(N,S),H=u.cast("UInt","UInt256",U,!1),S=u.mul256(S,H),S=u.div256(S,N),N=u.cast("UInt256","UInt",S,!1),S=u.sub(Q,N),Q=u.mul(P,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),Q=u.div(Q,F),F=u.muldiv(S,Q,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),S=u.muldiv(v,P,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),Q=u.muldiv(S,U,E),v=u.gt(Q,F),P=[S,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],Q=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),F],S=v?P:Q,F=S[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"0")],v=S[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"1")],P=u.sub(U,N),Q=u.sub(E,F),S=u.sub(P,v),U=u.le(Z,N),E=(u.assert(U,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"slippage",who:"Trader_swapAForB"}),u.mul256(D,H)),P=u.cast("UInt","UInt256",Q,!1),Z=u.cast("UInt","UInt256",S,!1),U=u.mul256(P,Z),D=u.ge256(U,E),H=(u.assert(D,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"constant product",who:"Trader_swapAForB"}),y.A),Q=(u.add(H,F),y.B),S=(u.add(Q,v),{A:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),B:N}),P=await q.getOutput("Trader_swapAForB","v23708",f,S);V&&u.protect(j,await t.out(G,P),{at:"./index.rsh:514:11:application",fs:["at ./index.rsh:514:11:application call to [unknown function] (defined at: ./index.rsh:514:11:function exp)",'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:516:38:function exp)','at ./index.rsh:516:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)',"at ./index.rsh:516:38:application call to [unknown function] (defined at: ./index.rsh:516:38:function exp)"],msg:"out",who:"Trader_swapAForB"}),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),J,_,W;return;case"Trader_swapBForA0_14502":g[1]}}async function _Trader_swapBForA4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Trader_swapBForA4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Trader_swapBForA4 expects to receive an interact object as its second argument."));e=e._initialize();const u=e.stdlib;var n=u.T_Address,a=u.T_Token,j=u.T_Null,C=u.T_Data({None:j,Some:a}),i=u.T_UInt,d=u.T_Object({A:i,B:i}),r=u.T_Bool,r=u.T_Struct([["protoFee",i],["lpFee",i],["totFee",i],["protoAddr",n],["locked",r]]),c=u.T_Tuple([i,i]),o=u.T_Tuple([n,r]);const f=u.T_Struct([["A",i],["B",i]]);var b=u.T_Tuple([f]),s=u.T_Tuple([i]),o=u.T_Data({Protocol_harvest0_14502:o,Provider_deposit0_14502:b,Provider_withdraw0_14502:s,Trader_swapAForB0_14502:c,Trader_swapBForA0_14502:c});const[z,m,h,O,X,R,J,x,y,_,W]=await e.getState(u.checkedBigNumberify("<builtin>",u.UInt_max,"4"),[n,a,a,C,a,d,d,d,d,r,i]);var b=u.protect(c,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Trader_swapBForA"}),s=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"0")],c=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"1")],p=_.locked,p=(u.assert(!p,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"locked",who:"Trader_swapBForA"}),x.A),l=x.B,T=_.protoFee,A=_.totFee,I=u.add(l,s),B=u.muldiv(s,p,I),k=u.cast("UInt","UInt256",s,!1),w=u.cast("UInt","UInt256",A,!1),w=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),w),k=u.mul256(k,w),w=u.cast("UInt","UInt256",l,!1),l=u.mul256(w,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),l=u.add256(l,k),M=u.cast("UInt","UInt256",p,!1),k=u.mul256(k,M),k=u.div256(k,l),l=u.cast("UInt256","UInt",k,!1),k=u.sub(B,l),B=u.mul(T,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),B=u.div(B,A),A=u.muldiv(k,B,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),k=u.muldiv(s,T,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),B=u.muldiv(k,p,I),T=u.gt(B,A),B=[k,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],k=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),A],A=T?B:k,T=A[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"0")],B=A[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"1")],k=u.sub(p,l),A=u.sub(k,B),p=u.sub(I,T),k=u.le(c,l),B=(u.assert(k,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"slippage",who:"Trader_swapBForA"}),u.mul256(M,w)),I=u.cast("UInt","UInt256",A,!1),T=u.cast("UInt","UInt256",p,!1),c=u.mul256(I,T),l=u.ge256(c,B),k=(u.assert(l,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_14502" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"constant product",who:"Trader_swapBForA"}),["Trader_swapBForA0_14502",b]),q=await e.sendrecv({args:[z,m,h,O,X,R,J,x,y,_,W,k],evt_cnt:1,funcNum:3,lct:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[u.checkedBigNumberify("./index.rsh:370:34:decimal",u.UInt_max,"0"),[[u.checkedBigNumberify("./index.rsh:520:24:decimal",u.UInt_max,"0"),X],[u.checkedBigNumberify("./index.rsh:520:27:decimal",u.UInt_max,"0"),m],[s,h]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};u.UInt_max;var{data:[n],from:a}=e;switch(n[0]){case"Protocol_harvest0_14502":n[1];break;case"Provider_deposit0_14502":n[1];break;case"Provider_withdraw0_14502":n[1];break;case"Trader_swapAForB0_14502":n[1];break;case"Trader_swapBForA0_14502":var i=n[1],i=(t.txns.push({kind:"api",who:"Trader_swapBForA"}),i[u.checkedBigNumberify("./index.rsh:518:10:spread",u.UInt_max,"0")]),d=x.A,r=x.B,c=_.protoFee,o=_.totFee,b=u.add(r,i),s=u.muldiv(i,d,b),p=u.cast("UInt","UInt256",i,!1),l=u.cast("UInt","UInt256",o,!1),l=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),l),p=u.mul256(p,l),l=u.cast("UInt","UInt256",r,!1),r=u.mul256(l,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),l=u.add256(r,p),r=u.cast("UInt","UInt256",d,!1),p=u.mul256(p,r),r=u.div256(p,l),p=u.cast("UInt256","UInt",r,!1),l=u.sub(s,p),r=u.mul(c,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),s=u.div(r,o),r=u.muldiv(l,s,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),o=u.muldiv(i,c,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),l=u.muldiv(o,d,b),s=u.gt(l,r),c=[o,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],l=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),r],o=s?c:l,r=o[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"0")],s=o[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"1")],c=u.sub(d,p),l=(u.sub(c,s),u.sub(b,r),t.txns.push({amt:i,kind:"to",tok:h}),y.A),o=(u.add(l,s),y.B),d=(u.add(o,r),t.txns.push({kind:"from",to:a,tok:m}),{A:p,B:u.checkedBigNumberify("<builtin>",u.UInt_max,"0")});await e.getOutput("Trader_swapBForA","v24992",f,d),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),J,_,W;t.isHalt=!1}return t},soloSend:!1,timeoutAt:void 0,tys:[n,a,a,C,a,d,d,d,d,r,i,o],waitIfNotPresent:!1}),{data:[g],didSend:V}=q;switch(g[0]){case"Protocol_harvest0_14502":g[1];return;case"Provider_deposit0_14502":g[1];return;case"Provider_withdraw0_14502":g[1];return;case"Trader_swapAForB0_14502":g[1];return;case"Trader_swapBForA0_14502":var G=g[1],v=G[u.checkedBigNumberify("./index.rsh:518:10:spread",u.UInt_max,"0")],Z=G[u.checkedBigNumberify("./index.rsh:518:10:spread",u.UInt_max,"1")],N=_.locked,N=(u.assert(!N,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"locked",who:"Trader_swapBForA"}),x.A),U=x.B,P=_.protoFee,F=_.totFee,E=u.add(U,v),Q=u.muldiv(v,N,E),S=u.cast("UInt","UInt256",v,!1),D=u.cast("UInt","UInt256",F,!1),D=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),D),S=u.mul256(S,D),D=u.cast("UInt","UInt256",U,!1),U=u.mul256(D,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),U=u.add256(U,S),H=u.cast("UInt","UInt256",N,!1),S=u.mul256(S,H),S=u.div256(S,U),U=u.cast("UInt256","UInt",S,!1),S=u.sub(Q,U),Q=u.mul(P,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),Q=u.div(Q,F),F=u.muldiv(S,Q,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),S=u.muldiv(v,P,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),Q=u.muldiv(S,N,E),v=u.gt(Q,F),P=[S,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],Q=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),F],S=v?P:Q,F=S[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"0")],v=S[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"1")],P=u.sub(N,U),Q=u.sub(P,v),S=u.sub(E,F),N=u.le(Z,U),P=(u.assert(N,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"slippage",who:"Trader_swapBForA"}),u.mul256(H,D)),E=u.cast("UInt","UInt256",Q,!1),Z=u.cast("UInt","UInt256",S,!1),N=u.mul256(E,Z),H=u.ge256(N,P),D=(u.assert(H,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:45:application call to [unknown function] (defined at: ./index.rsh:419:45:function exp)"],msg:"constant product",who:"Trader_swapBForA"}),y.A),Q=(u.add(D,v),y.B),S=(u.add(Q,F),{A:U,B:u.checkedBigNumberify("<builtin>",u.UInt_max,"0")}),E=await q.getOutput("Trader_swapBForA","v24992",f,S);V&&u.protect(j,await t.out(G,E),{at:"./index.rsh:518:11:application",fs:["at ./index.rsh:518:11:application call to [unknown function] (defined at: ./index.rsh:518:11:function exp)",'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:520:38:function exp)','at ./index.rsh:520:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)',"at ./index.rsh:520:38:application call to [unknown function] (defined at: ./index.rsh:520:38:function exp)"],msg:"out",who:"Trader_swapBForA"}),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),J,_,W}}async function Protocol_delete(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Protocol_delete expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Protocol_delete expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(2==a,"API called in the wrong state. Currently in state: "+a+", expected:  [2]"),2==a?_Protocol_delete2(e,t):void 0)}async function Protocol_harvest(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Protocol_harvest expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Protocol_harvest expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Protocol_harvest4(e,t):void 0)}async function Provider_deposit(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Provider_deposit expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Provider_deposit expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Provider_deposit4(e,t):void 0)}async function Provider_withdraw(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Provider_withdraw expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Provider_withdraw expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Provider_withdraw4(e,t):void 0)}async function Trader_swapAForB(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Trader_swapAForB expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Trader_swapAForB expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Trader_swapAForB4(e,t):void 0)}async function Trader_swapBForA(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Trader_swapBForA expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Trader_swapBForA expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Trader_swapBForA4(e,t):void 0)}const _ALGO={ABI:{impure:["Protocol_delete()byte[0]","Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)","Provider_deposit((uint64,uint64))uint64","Provider_withdraw(uint64)(uint64,uint64)","Trader_swapAForB(uint64,uint64)(uint64,uint64)","Trader_swapBForA(uint64,uint64)(uint64,uint64)"],pure:["Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))"],sigs:["Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))","Protocol_delete()byte[0]","Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)","Provider_deposit((uint64,uint64))uint64","Provider_withdraw(uint64)(uint64,uint64)","Trader_swapAForB(uint64,uint64)(uint64,uint64)","Trader_swapBForA(uint64,uint64)(uint64,uint64)"]},appApproval:"BiAVAAgEGAFkEAIDoI0GSZBOteDwwQeZ66OHCtmUrKAKuPeR5Qf89bu8Au6I6cQCIP///////////wEGJgUBAQEAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC9MqZEkiWzUBI1s1AjYaABdJQQGuIjUEIQQ1BkkhDAxAAVBJIQ0MQAEgSSEODEAA/yEOEkQ0AUkkDEAAeSQSRClkKGRQSTUDSUpXURA1/1dhEDX+V3EQNf1XgTk1/DQDVzkINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXKAhQNANXMAlQNQdCCxchBxJEKWQoZFBJNQNJSlchEDX/VzEQNf5XQRA1/VdROTX8NANXGQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cICFA0A1cQCVA1B0IKnSENEkQ2GgE2GgJQNf+AAQM0/1AhCq9QQgCYSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhCq9QQgB3IQwSRCpCBydJIRAMQAAvSSERDEAAFCEREkQ2GgE2GgJQNf8pNP9QQgBNIRASRDYaATX/KDT/UCEKr1BCADmB5PzqgQISRDYaATX/gAECNP9QgVGvUEIAHzYaAhc1BDYaAzYaARdJIQcMQAdASSEIDEAGuyEIEkQkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSklXACA1/yESWzX+gShbNf1XMAk1/IE5WzX7V0EQNfpXURA1+VdhEDX4V3EQNfdXgTk19oG6AVs19Uk1BTX0gARHaEcfNPRQsDT0IlVJIQcMQAP5SSEIDEADEEkkDEABhiQSRDT0VwEQNfM08yJbNfI09lc4ARcURDT4Ils18TT4I1s18DT2Ils17zT2IQZbNe408DTyCDXtJa808hZQKyWvNO4WUKGICXCjiAlsNewlrzTwFlA16yWvNPEWUDXqNOw06qOICVI06yujiAlLNOygiAlFoogJQUlKIQZbIhJEI1siEkQiWyISRCVbNek08jTxHTTtlzTpCTTvIQULNO4KHSEFlzXoNPI07x0hC5c15yOvNOgWUDTnFiOvUDTnNPEdNO2XNOgNTUk15iJbNeU05iNbNeQ08TTpCTTkCTXjNO005Qk14jTzI1s06Q5EJa804xZQJa804hZQo4gIujTqNOujiAiyp0Q08jT9iAiJsSKyATTpshIkshAxALIUNP6yEbM06RYjr1A14YAIAAAAAAAAYaA04VCwNOE1BycEMQBQI6808hZQUDThUDTjFjTiFlBQsDT/NP40/TT8NPs0+iI0+TTjFjTiFlA09yJbNOQIFjT3I1s05QgWUDT2MgY09UIHDUg09FcBEDXzNPMiWzXyNPZXOAEXFEQ0+CJbNfE0+CNbNfA09iJbNe809iEGWzXuNPE08gg17SWvNPIWUCslrzTuFlChiAfso4gH6DXsJa808RZQNeslrzTwFlA16jTsNOqjiAfONOsro4gHxzTsoIgHwaKIB71JSiEGWyISRCNbIhJEIlsiEkQlWzXpNPI08B007Zc06Qk07yEFCzTuCh0hBZc16DTyNO8dIQuXNecjrzToFlA05xYjr1A05zTwHTTtlzToDU1JNeYiWzXlNOYjWzXkNO005Qk14zTwNOkJNOQJNeI08yNbNOkORCWvNOMWUCWvNOIWUKOIBzY06zTqo4gHLqdENPI0/ogHBbEisgE06bISJLIQMQCyFDT9shGzI6806RZQNeGACAAAAAAAAFycNOFQsDThNQcnBDEAUDTyFiOvUFA04VA04xY04hZQULA0/zT+NP00/DT7NPoiNPk04xY04hZQNPciWzTlCBY09yNbNOQIFlA09jIGNPVCBYlINPRXAQg18zTzFzXyNPI0+4gGezT5I1s18TT4Ils18DT4I1s17zTyNPAdNPGXNe408jTvHTTxlzXtNPkiWzTyCDXsNPE08gk16zTwNO4JNeo07zTtCTXpsSKyATTushIkshAxALIUNP6yEbOxIrIBNO2yEiSyEDEAshQ0/bIRszTuFjTtFlA16IAIAAAAAAAAV5006FCwNOg1B4AEHNSuXzEAUDTyFlA06FA06hY06RZQUDTsFjTrFlBQsDT/NP40/TT8NPs0+iI07BY06xZQNOoWNOkWUDT3NPYyBjT1QgSnSSEEDEABIEg09FcBEDXzNPM18jT2VzgBFxRENPIiWzXxNPIjWzXwNPkjWzXvNPE0/ogFeTTwNP2IBXI07yISQQAtJa808RZQJa808BZQo4gFe5aIBXdJSiEGWyISRCNbIhJEIlsiEkQlWzXuQgAiNPE07x00+CJblzXtNPA07x00+CNbl0k17DTtSTTsDE017jTxNPgiWwg17TTwNPgjWwg17DT5Ils07gk16zTvNO4INeqxIrIBNO6yEiSyEDEAshQ0+7IRs4AIAAAAAAAAUns07hZQsDTuFjUHgATeGyn1MQBQNPEWNPAWUFA07hZQNO0WNOwWUFA06xY06hZQULA0/zT+NP00/DT7NPoiNOsWNOoWUDTtFjTsFlA09zT2MgY09UIDgEg09FcBWTXzNPNXACA18jTzVyA5NfE0/zT2VxggEkQ08SJbNfA08SNbNe808SEGWzXuNPAhBQw07yEFDBA07jTvNPAIEhA07iEFDBA07iINEEQyCmAyCngJNPUJNe008Vc4ARc17DT3Ils16zT3I1s16rEisgE07bIIIQSyEDTysgezsSKyATTrshIkshA08rIUNP6yEbOxIrIBNOqyEiSyEDTyshQ0/bIRs4AIAAAAAAAATfI06xY06hZQNO0WUFCwNOsWNOoWUDTtFlA1B4AEVq11PDTwFjTvFlA07hZQNPFXGCBQNOwWUQcIUFCwNP80/jT9NPw0+zT6NOw0+SNbIhIQNPgiWyISNPgjWyISEBA0+TT4NPo08TIGNO009Qg07QlCAllIIQc0ARJENARJIhJMNAISEUQpZChkUEk1A4EZWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAABh07AqNQexIrIBIQiyEDT/siGzsSKyASKyEiSyEDIJshUyCrIUNAMjW7IRs7EisgEishIkshAyCbIVMgqyFDQDIluyEbNCAmsiEkQhCYgCvyI0ARJENARJIhJMNAISEURJNQVJSkkiWzX/I1s1/lcQIDX9VzAINfyBOFs1+4AEpmTiYTT/FlA0/hZQNP1QNPxQNPsWULAhEyELDUQ0/zT+E0QhCYgCaLEisgEishIkshAyCrIUNP+yEbMhCYgCULEisgEishIkshAyCrIUNP6yEbMoNP8WUDX6gAVhcHBJRDT7FlADNfgyCmAyCngJFjX3sSKyASEUshA0+7IYgARJWgposhoxGBayGjT6sho0/hayGrMyCmAyCngJNPcXCRa3AD5XBABQNfmACAAAAAAAAEeVNPlQsDT5STX4Ils19zT4Vwg5STX2Ils19TT2I1s19DT2IQZbNfM09SEFDDT0IQUMEDTzNPQ09QgSEDTzIQUMEDTzIg0QRCI09xJEIQmIAYyxIrIBIQiyECETsiIhFLIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfKACAAAAAAAAEevNPIWULA08jXxIjXwIjXvNP8WNP4WUCM07wsjWBc17jTxNO4SNPBJTTXwNO8hBAhJNe8hBwxA/9c08BREIQavNe8xADT/NP40+jTxNO8igBD//////////wAAAAAAAAAANO9JNPYyBjT3QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0+UEANDT0FjT1FlA09lA09xZQNPpQNPtQNPxQNP1QKUsBVwB/ZyhLAVd/C2dIIQc1ATIGNQJCAFo08zT0FlA09RZQNPZQNPcWUDT4UDT6UDT7UDT8UDT9UDT/FlApSwFXAH9nKEsBV39DZ0gkNQEyBjUCQgAdMRmBBRJEsSKyASKyCCEEshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSEECDIEEkQxFhJEIQRDMRkiEkRC/90iNQEiNQJC/8E0AElKIQQINQA4BzIKEkQ4ECEEEkQ4CBJEiTQASUpJIQQINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJSRUhEkwJr0xQiQ==",appClear:"Bg==",companionInfo:null,extraPages:1,mapDataKeys:0,mapDataSize:0,stateKeys:2,stateSize:194,unsupported:[],version:10,warnings:["Step 0 calls a remote object at /app/index.rsh:363:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards."]},_ETH={ABI:`[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v18294",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v18295",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T12",
                "name": "v18296",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T14",
                "name": "v18297",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v18298",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v3",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v4",
        "type": "tuple"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "protoFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totFee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "protoAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "Harvest",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v3",
        "type": "tuple"
      }
    ],
    "name": "Swap",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v3",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v4",
        "type": "tuple"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v18294",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v18295",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T12",
                "name": "v18296",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T14",
                "name": "v18297",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v18298",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v25040",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "protoFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lpFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "totFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "protoAddr",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T0",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Provider_withdraw0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapAForB0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapBForA0_14502",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v19405",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "protoFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lpFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totFee",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "protoAddr",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              }
            ],
            "internalType": "struct T1",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v18325",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v18351",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v19954",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v21115",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v22429",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v23708",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v24992",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v25043",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "liquidityToken",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "lptBals",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "poolBals",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "protoFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lpFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totFee",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "protoAddr",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              }
            ],
            "internalType": "struct T1",
            "name": "protoInfo",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "protoBals",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "tokB",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T2",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "_Some",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "tokA",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Protocol_delete",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "protoFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totFee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "protoAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "Protocol_harvest",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T25",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Provider_deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Provider_withdraw",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Trader_swapAForB",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Trader_swapBForA",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v25040",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "protoFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lpFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "totFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "protoAddr",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T0",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Provider_withdraw0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapAForB0_14502",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Trader_swapBForA0_14502",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v19405",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,Bytecode:"0x608060405260405162005f7b38038062005f7b833981016040819052620000269162000ee4565b60008055436003556200003862000a2f565b6040805133815283516020808301919091528085015180516001600160a01b0390811684860152918101518216606080850191909152818501515160808086019190915290820151516001600160c01b03191660a085015201511660c082015290517f66095a5d4ca377fa5a0b722e6c172d5ca90f298b536389b9d6a157cb6c4a67a29181900360e00190a1620000d26001600862000763565b620001138260200151602001516001600160a01b03168360200151600001516001600160a01b031614620001085760016200010b565b60005b600962000763565b620001213415600a62000763565b8051600190526020820180515182516001600160a01b0390911660409091015251516000906200015290306200078e565b6200015e919062000ff7565b6101c082015260208083015101516000906200017b90306200078e565b62000187919062000ff7565b6102008201526200019a60004762000ff7565b6101a082015280516020808401510151604051600092633b02a71760e01b92620001cb923092919060240162001054565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620002279190620010b9565b60006040518083038185875af1925050503d806000811462000266576040519150601f19603f3d011682016040523d82523d6000602084013e6200026b565b606091505b5090925090506200027f8282600d62000872565b506101c08401516020860151516200029890306200078e565b620002a4919062000ff7565b6101e08501819052620002ba9015600b62000763565b6102008401516020808701510151620002d490306200078e565b620002e0919062000ff7565b6102208501819052620002f69015600c62000763565b6101a084015162000308904762000ff7565b60208086015191909152815162000327919083018101908301620010d7565b6020808601805190910191909152516040808601829052517f9e3d053a86518cdcdba0943d46f1e08b1fa98da519c85cafabcc4fa1f1d87d45916200036c91620011a3565b60405180910390a1620004226064856040015160200151600001511062000395576000620003a6565b606485604001516020015160200151105b620003b3576000620003de565b60408501516020908101518051910151620003cf9190620011c7565b85604001516020015160400151145b620003eb576000620003fc565b606485604001516020015160400151105b620004095760006200041a565b600085604001516020015160400151115b600e62000763565b604084015151620004369015600f62000763565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620005219062000b11565b620005329695949392919062001210565b604051809103906000f0801580156200054f573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f4a4b31ccf038cbc9bd60faed8d060398a0c1672791b61c9d49e73201f0eca0bb9162000597916200127b565b60405180910390a16020858101805151610100870180516001600160a01b039283169052915183015191519116910152600061014085018190525b60028110156200065d578461010001518160028110620005f657620005f66200128f565b60200201516001600160a01b031661016086015261014085015162000639578461016001516001600160a01b03168560e001516001600160a01b03161462000640565b8461014001515b1515610140860152806200065481620012a5565b915050620005d2565b50610140840151151561012085018190526200068b906200068057600162000683565b60005b601062000763565b61018084018051600090819052905160200152620006a862000b1f565b8051339052602080870180515183516001600160a01b0391821690840152905182015183519082166040918201528751845160609081019190915260e08901518551931660809384015261018089018051865160a090810191909152858701805160009052838c01518151880152825181518601529151825190930192909252918901805190940151825190930192909252805143920191909152905151905160c001526200075781620008b8565b505050505050620014ad565b816200078a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620007ba91906200127b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620007fa9190620010b9565b60006040518083038185875af1925050503d806000811462000839576040519150601f19603f3d011682016040523d82523d6000602084013e6200083e565b606091505b509092509050620008528282600662000872565b5080806020019051810190620008699190620012c3565b95945050505050565b6060831562000883575081620008b1565b825115620008945782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000781565b9392505050565b602081015151156200097a57620008ce62000b48565b81516020908101516001600160a01b0390811683528351604090810151821684840152845160609081015182860152855160809081015190931681860152838601805185015184870152805183015160a087015280519091015160c0860152519091015160e0840152600260005543600155516200094f91839101620012ec565b604051602081830303815290604052600290805190602001906200097592919062000bad565b505050565b6200098462000c3c565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151831681850152845160609081015181860152855160809081015190941684860152855160a09081015190860152828601805184015160c080880191909152815184015160e088015281519092015161010087015280519094015161012086015292519092015161014084015260046000554360015590516200094f9183910162001384565b60405180610240016040528062000a4562000cc7565b815260200162000a5462000ce9565b815260200162000a6362000ce9565b815260200162000a7262000d05565b81526040805160608101825260008082526020828101829052928201529101908152604080516020818101909252600081529101908152600060208201819052604082015260600162000ac462000d1f565b815260006020820181905260408201819052606082015260800162000ae862000d05565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6110298062004f5283390190565b604051806040016040528062000b3462000d3d565b815260200162000b4362000d7e565b905290565b60408051610100810182526000808252602082015290810162000b6a62000cc7565b81526000602082015260400162000b8062000d05565b815260200162000b8f62000d05565b815260200162000b9e62000d05565b815260200162000b4362000ddd565b82805462000bbb9062001470565b90600052602060002090601f01602090048101928262000bdf576000855562000c2a565b82601f1062000bfa57805160ff191683800117855562000c2a565b8280016001018555821562000c2a579182015b8281111562000c2a57825182559160200191906001019062000c0d565b5062000c3892915062000e17565b5090565b6040805161016081018252600080825260208201819052918101919091526060810162000c6862000cc7565b81526000602082015260400162000c7e62000d05565b815260200162000c8d62000d05565b815260200162000c9c62000d05565b815260200162000cab62000d05565b815260200162000cba62000ddd565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b60405180604001604052806000815260200162000b4362000ddd565b604051806040016040528060008152602001600081525090565b60405180604001604052806002906020820280368337509192915050565b6040805160c081018252600080825260208201819052918101919091526060810162000d6862000cc7565b81526000602082015260400162000b4362000d05565b6040518060e0016040528060001515815260200162000d9c62000d05565b815260200162000dab62000d05565b815260200162000dba62000d05565b815260200162000dc962000ddd565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000c38576000815560010162000e18565b604080519081016001600160401b038111828210171562000e5f57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000e5f57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000e5f57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811462000edf57600080fd5b919050565b600081830360c081121562000ef857600080fd5b62000f0262000e2e565b8351815260a0601f198301121562000f1957600080fd5b62000f2362000e65565b62000f316020860162000ec7565b815262000f416040860162000ec7565b60208201526020605f198401121562000f5957600080fd5b62000f6362000e96565b6060860151815260408201526020607f198401121562000f8257600080fd5b62000f8c62000e96565b60808601519093506001600160c01b03198116811462000fab57600080fd5b83526060810183905262000fc260a0860162000ec7565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b6000828210156200100c576200100c62000fe1565b500390565b8051600281106200103257634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062001075602084018662001011565b808416608084015250949350505050565b60005b83811015620010a357818101518382015260200162001089565b83811115620010b3576000848401525b50505050565b60008251620010cd81846020870162001086565b9190910192915050565b600060a08284031215620010ea57600080fd5b60405160a081016001600160401b03811182821017156200111b57634e487b7160e01b600052604160045260246000fd5b8060405250825181526020830151602082015260408301516040820152620011466060840162000ec7565b6060820152608083015180151581146200115f57600080fd5b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c0830191620011c0908401826200116b565b5092915050565b60008219821115620011dd57620011dd62000fe1565b500190565b60008151808452620011fc81602086016020860162001086565b601f01601f19169290920160200192915050565b60c0815260006200122560c0830189620011e2565b8281036020840152620012398189620011e2565b905082810360408401526200124f8188620011e2565b90508281036060840152620012658187620011e2565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620012bc57620012bc62000fe1565b5060010190565b600060208284031215620012d657600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b03908116825260208084015182169083015260408084015161022084019291620013229085018262001011565b5060608401511660a083015260808301516200134260c0840182620012dd565b5060a083015162001358610100840182620012dd565b5060c08301516200136e610140840182620012dd565b5060e0830151620011c06101808401826200116b565b60006102a0820190506200139a82845162000fd4565b6020830151620013ae602084018262000fd4565b506040830151620013c3604084018262000fd4565b506060830151620013d8606084018262001011565b506080830151620013ed60c084018262000fd4565b5060a08301516200140260e0840182620012dd565b5060c08301516101206200141981850183620012dd565b60e0850151915062001430610160850183620012dd565b6101008501519150620014486101a0850183620012dd565b84015190506200145d6101e08401826200116b565b5061014083015161028083015292915050565b600181811c908216806200148557607f821691505b60208210811415620014a757634e487b7160e01b600052602260045260246000fd5b50919050565b613a9580620014bd6000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633e59bac4146101095780634012e02e1461011c5780634272dbc21461013e5780638323075714610151578063842463da14610166578063ab53f2c61461017e578063c8867ae9146101a1578063d02b6307146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612f52565b6101da565b6040516100c19190612f97565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612fba565b610249565b6040516100c19190612fd3565b61009f610117366004612fe1565b6102a7565b34801561012857600080fd5b506101316102cb565b6040516100c19190613082565b6100db61014c36600461313b565b61062e565b34801561015d57600080fd5b506001546100db565b61016e610685565b60405190151581526020016100c1565b34801561018a57600080fd5b506101936106bc565b6040516100c1929190613183565b6100fc6101af3660046131bd565b610759565b61009f6101c23660046131df565b6107be565b6100fc6101d53660046131bd565b6107de565b6101e2612664565b6101ea612684565b6101f26126d3565b6101fa6126ed565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a8284610843565b50506020015190505b92915050565b610251612730565b610259612684565b6102616126d3565b6102696126ed565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b8284610843565b50506060015192915050565b6102af612684565b6102c76102c1368490038401846131f2565b82611f16565b5050565b6102d361274a565b60026000541415610475576000600280546102ed90613277565b80601f016020809104026020016040519081016040528092919081815260200182805461031990613277565b80156103665780601f1061033b57610100808354040283529160200191610366565b820191906000526020600020905b81548152906001019060200180831161034957829003601f168201915b505050505080602001905181019061037e91906133c5565b90506103886127a8565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152828c01518b8b0180519188169091529a518b518a015295518a5184015292518951909101529251875190960195909552928601518551931692909101919091529092015181519092019190915251919050565b6004600054141561061f5760006002805461048f90613277565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb90613277565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b50505050508060200190518101906105209190613471565b905061052a6127a8565b60c080830180515183515251602090810151835182015260e0840180515182850180519190915290518201518151830152610120850180515160408087018051929092528251850151825186015282518101518251820152825160609081015183516001600160a01b039182169083015293516080908101518451901515908201526101008a01805151838b0180519190915290518801518151890152818b0151828b01805191881690915299518a519098019790975294518851830152915187518301529351865190930192909252918501518451921660a092909201919091529092015181519092019190915251919050565b61062b600060076120ad565b90565b6000610638612684565b6106406126d3565b6106486126ed565b6040805160208082018352878252838301919091526001835281518082019092528282528301526106798284610843565b50506040015192915050565b600061068f612684565b6106976127ef565b60408051602080820190925260008152908201526106b58183611f16565b5051919050565b6000606060005460028080546106d190613277565b80601f01602080910402602001604051908101604052809291908181526020018280546106fd90613277565b801561074a5780601f1061071f5761010080835404028352916020019161074a565b820191906000526020600020905b81548152906001019060200180831161072d57829003601f168201915b50505050509050915091509091565b610761612730565b610769612684565b6107716126d3565b6107796126ed565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107b18284610843565b5050608001519392505050565b6107c6612684565b6102c76107d8368490038401846135e2565b82610843565b6107e6612730565b6107ee612684565b6107f66126d3565b6107fe6126ed565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526108368284610843565b505060a001519392505050565b61085360046000541460316120ad565b815161086e90158061086757508251600154145b60326120ad565b60008080556002805461088090613277565b80601f01602080910402602001604051908101604052809291908181526020018280546108ac90613277565b80156108f95780601f106108ce576101008083540402835291602001916108f9565b820191906000526020600020905b8154815290600101906020018083116108dc57829003601f168201915b50505050508060200190518101906109119190613471565b905061091b612819565b7f0c36ecdcbe3fc67e26de932e0ef4b0434fa375ec7e902fe67403914b10d86be1338560405161094c9291906136b5565b60405180910390a1600060208501515151600481111561096e5761096e613038565b1415610d5e57602080850151510151815261098b341560146120ad565b6109a561099e33846080015160006120d3565b60156120ad565b6109bf6109b833846020015160006120d3565b60166120ad565b6109d96109d233846040015160006120d3565b60176120ad565b610a05826101200151606001516001600160a01b031683600001516001600160a01b03161460186120ad565b80516020015151610a9590606411610a1e576000610a2f565b606482600001516020015160200151105b610a3a576000610a5d565b81516020908101518051910151610a51919061377b565b82516020015160400151145b610a68576000610a76565b815160200151604001516064115b610a81576000610a8e565b8151602001516040015115155b60196120ad565b61014082015147908110610ab857610140830151610ab39082613793565b610abb565b60005b602083018190528251516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610afa573d6000803e3d6000fd5b50602083015182515161010085015151610b159291906120eb565b604083015182515161010085015160200151610b329291906120eb565b6101008301805151604080850180519290925291516020908101518251820152905160608501805191909152818501518151909201919091525190517f6c2a1bdff59da173274ead0f0123581c29d795ee236d8ebdd6490252b5d42e4991610b9991612f97565b60405180910390a160608083015160208087019190915283518101515160808086018051929092528551830151830151825184015285518301516040908101518351820152865184015185015183516001600160a01b0390911695019490945285519092015182015181519015159201919091525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c3b916137aa565b60405180910390a1610c4b612aae565b835181516001600160a01b0391821690526020808601518351908316908201526040808701518451908416910152606080870151845190910152608080870151845193169281019290925260a080870151845190910152845101510151610cb3576000610cbe565b60c084015160200151155b610cc9576000610ce6565b60e08401515115610cdb576000610ce6565b60e084015160200151155b6020808301805192151590925260c0860151825182015260e086015182516040015260a0808701518351606001528551820151835160800152915143920191909152830151610140850151610d3b908261377b565b610d459190613793565b602082015160c00152610d57816120ff565b5050611f10565b6001602085015151516004811115610d7857610d78613038565b141561115c576020840151516040015160a082015261012082015160800151610db090610da6576001610da9565b60005b601a6120ad565b610dbc3415601b6120ad565b610dd6610dcf33846080015160006120d3565b601c6120ad565b610dfb610df43384602001518460a0015160000151600001516120d3565b601d6120ad565b610e20610e193384604001518460a0015160000151602001516120d3565b601e6120ad565b60c082015160200151610e565760a08101515160208101519051610e4c91610e47916137b8565b612269565b60c0820152610ee5565b60e08201515160c08301516020015160a08301515151610e7691906137b8565b610e8091906137d7565b8160e00181815250508160e00151602001518260c00151602001518260a001516000015160200151610eb291906137b8565b610ebc91906137d7565b610100820181905260e082015110610ed957806101000151610edf565b8060e001515b60c08201525b60e08201515160a08201515151610efc919061377b565b61012082015260e082015160209081015160a08301515190910151610f21919061377b565b61014082019081526101208201516101608301805191909152905190516020015260c0808201519083015151610f579190613793565b61018082015260c0808201519083015160200151610f75919061377b565b6101a082019081526101808201516101c083018051919091529051905160200152608082015160c0820151610fac919033906120eb565b7fe7633952106679237087108748a1bc8bb03ffd69ff8f20f6b2850b052e43e91d8160c00151604051610fe191815260200190565b60405180910390a160c08101805160408086019190915260a08301805151516101e0850180519190915290515160209081015182518201526101208501516102008601805191909152610140860151815183015261018086015161022087018051919091526101a0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb94611090943394919391926137f9565b60405180910390a16110a0612aae565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186518201528386018051600090526101c0880151815190950194909452610160870151845190930192909252610100870151835190910152610120860151825190930192909252805143920191909152610140840151905160c00152611156816120ff565b50611f10565b600260208501515151600481111561117657611176613038565b14156114d857602084015151606001516102408201526111983415601f6120ad565b6111ba6111b3338460800151846102400151600001516120d3565b60206120ad565b6111d46111cd33846020015160006120d3565b60216120ad565b6111ee6111e733846040015160006120d3565b60226120ad565b60c08201516020015160e0830151516102408301515161120e91906137b8565b61121891906137d7565b61026082015260c082015160209081015160e0840151909101516102408301515161124391906137b8565b61124d91906137d7565b6102808201526102408101515160c08301515161126a919061377b565b6102a08201526102408101515160c08301516020015161128a9190613793565b6102c082019081526102a08201516102e08301805191909152905190516020015261026081015160e0830151516112c19190613793565b61030082015261028081015160e0830151602001516112e09190613793565b610320820190815261030082015161034083018051919091529051905160209081019190915282015161026082015161131b919033906120eb565b61132f8260400151338361028001516120eb565b6102608101516103608201805191909152610280820151815160200152516040517f64171e1b31d75357ae6aba8e7883869df74c92bc137b0d4eba5695338d3e339c9161137b91612fd3565b60405180910390a1610360810180516060850152610300820151610380830180519190915261032083015181516020908101919091526102a08401516103a085018051919091526102c0850151815190920191909152610240840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef8559461141294339491939092613837565b60405180910390a1611422612aae565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186518201528386018051600090526102e0880151815190950194909452610340870151845190930192909252610100870151835190910152610120860151825190930192909252805143920191909152610140840151905160c00152611156816120ff565b60036020850151515160048111156114f2576114f2613038565b14156119f5576020840151516080908101516103c0830152610120830151015161152b90611521576001611524565b60005b60236120ad565b6103c08101515160e083015151611542919061377b565b6103e08201526101208201516040015161155e90612710613793565b6103c08201515161156f91906137b8565b610400820181905260e08301805151610420840181905290516020015161044084015261159f90612710906137b8565b6115a9919061377b565b8161044001518261040001516115bf91906137b8565b6115c991906137d7565b61046082015261012082015160408101519051606491906115eb9083906137b8565b6115f591906137d7565b6104608301516103e084015160e0860151602001516103c08601515161161b91906137b8565b61162591906137d7565b61162f9190613793565b61163991906137b8565b61164391906137d7565b610480820152610120820151516103c08201515161271091611664916137b8565b61166e91906137d7565b6104a082018181526104c083018051929092529051600060209182018190526104e08401805191909152610480840180519151830191909152516103e084015160e086015190920151925190926116c4916137b8565b6116ce91906137d7565b116116de57806104e001516116e5565b806104c001515b6105008201819052516103e08201516116fe9190613793565b81610520018181525050806105000151602001518161046001518360e001516020015161172b9190613793565b6117359190613793565b6105408201526104608101516103c08201516020015161175891101560246120ad565b61179081610440015182610420015161177191906137b8565b82610540015183610520015161178791906137b8565b101560256120ad565b61179c341560266120ad565b6117b66117af33846080015160006120d3565b60276120ad565b6117d86117d1338460200151846103c00151600001516120d3565b60286120ad565b6117f26117eb33846040015160006120d3565b60296120ad565b61052081015161056082018051919091526105408201519051602001526105008101515161010083015151611827919061377b565b610580820151526105008101516020908101516101008401519091015161184e919061377b565b61058082015160200152604082015161046082015161186f919033906120eb565b6105a08101805160009052610460820151815160200152516040517f9221b3de2c21b755d01a988d07f552184ead6a63c7b6b327fcb3c46f51e0e760916118b591612fd3565b60405180910390a16105a08101805160808501526103c0820151516105c08301805191909152805160006020918201526105208401516105e08501805191909152610540850151815190920191909152905191519051604051600080516020613a408339815191529361192e9333939192909190613869565b60405180910390a161193e612aae565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015283860180516000905260c0808a015182519096019590955261056088015181519094019390935261058087015183519092019190915261012087015182519094019390935280514393019290925261014085015191510152611156816120ff565b6004602085015151516004811115611a0f57611a0f613038565b1415611f105760208401515160a0015161060082015261012082015160800151611a4890611a3e576001611a41565b60005b602a6120ad565b6106008101515160e083015160200151611a62919061377b565b61062082015261012082015160400151611a7e90612710613793565b61060082015151611a8f91906137b8565b610640820181905260e083018051602001516106608401819052905151610680840152611abf90612710906137b8565b611ac9919061377b565b816106800151826106400151611adf91906137b8565b611ae991906137d7565b6106a08201526101208201516040810151905160649190611b0b9083906137b8565b611b1591906137d7565b6106a083015161062084015160e08601515161060086015151611b3891906137b8565b611b4291906137d7565b611b4c9190613793565b611b5691906137b8565b611b6091906137d7565b6106c0820152610120820151516106008201515161271091611b81916137b8565b611b8b91906137d7565b6106e08201818152610700830180519290925290516000602091820181905261072084018051919091526106c0840180519151909201525161062083015160e085015151925191929091611bdf91906137b8565b611be991906137d7565b11611bf957806107200151611c00565b8061070001515b6107408201819052602001516106a082015160e084015151611c229190613793565b611c2c9190613793565b61076082015261074081015151610620820151611c499190613793565b6107808201526106a081015161060082015160200151611c6c911015602b6120ad565b611ca4816106600151826106800151611c8591906137b8565b826107800151836107600151611c9b91906137b8565b1015602c6120ad565b611cb03415602d6120ad565b611cca611cc333846080015160006120d3565b602e6120ad565b611ce4611cdd33846020015160006120d3565b602f6120ad565b611d06611cff338460400151846106000151600001516120d3565b60306120ad565b6107608101516107a082018051919091526107808201519051602090810191909152610740820151015161010083015151611d41919061377b565b6107c0820151526107408101515161010083015160200151611d63919061377b565b816107c001516020018181525050611d85826020015133836106a001516120eb565b6106a08101516107e0820180519190915280516000602090910152516040517f55a1cff276441524d2726959431cc6863f0f66b6fb5dd9a68416723c9e96037391611dcf91612fd3565b60405180910390a16107e08101805160a085015261080082018051600090526106008301515181516020908101919091526107608401516108208501805191909152610780850151815190920191909152905191519051604051600080516020613a4083398151915293611e499333939192909190613869565b60405180910390a1611e59612aae565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015283860180516000905260c0808a01518251909601959095526107a08801518151909401939093526107c087015183519092019190915261012087015182519094019390935280514393019290925261014085015191510152611156816120ff565b50505050565b611f2660026000541460126120ad565b8151611f41901580611f3a57508251600154145b60136120ad565b600080805560028054611f5390613277565b80601f0160208091040260200160405190810160405280929190818152602001828054611f7f90613277565b8015611fcc5780601f10611fa157610100808354040283529160200191611fcc565b820191906000526020600020905b815481529060010190602001808311611faf57829003601f168201915b5050505050806020019051810190611fe491906133c5565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a161203c341560116120ad565b604051600081527f9364ea699f958c16aaf7567bf654993a43e45582885cbb78593752c275d1cb549060200160405180910390a1600082526060810151612085906000196122d9565b61209281606001516122ec565b600080805560018190556120a890600290612ace565b505050565b816102c75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006120e1838530856122fe565b90505b9392505050565b6120f68383836123d8565b6120a857600080fd5b602081015151156121b557612112612b08565b81516020908101516001600160a01b0390811683528351604090810151821684840152845160609081015182860152855160809081015190931681860152838601805185015184870152805183015160a087015280519091015160c0860152519091015160e084015260026000554360015551612191918391016138a0565b604051602081830303815290604052600290805190602001906120a8929190612b63565b6121bd612be7565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151831681850152845160609081015181860152855160809081015190941684860152855160a09081015190860152828601805184015160c080880191909152815184015160e088015281519092015161010087015280519094015161012086015292519092015161014084015260046000554360015590516121919183910161392e565b50565b600060038211156122ca57508060006122836002836137d7565b61228e90600161377b565b90505b818110156122c4579050806002816122a981866137d7565b6122b3919061377b565b6122bd91906137d7565b9050612291565b50919050565b81156122d4575060015b919050565b6122e382826124a9565b6102c757600080fd5b6122f581612584565b61226657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161236591613a06565b60006040518083038185875af1925050503d80600081146123a2576040519150601f19603f3d011682016040523d82523d6000602084013e6123a7565b606091505b50915091506123b882826001612629565b50808060200190518101906123cd9190613a22565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161243791613a06565b60006040518083038185875af1925050503d8060008114612474576040519150601f19603f3d011682016040523d82523d6000602084013e612479565b606091505b509150915061248a82826002612629565b508080602001905181019061249f9190613a22565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016124d591815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516125139190613a06565b60006040518083038185875af1925050503d8060008114612550576040519150601f19603f3d011682016040523d82523d6000602084013e612555565b606091505b509150915061256682826003612629565b508080602001905181019061257b9190613a22565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916125cb91613a06565b60006040518083038185875af1925050503d8060008114612608576040519150601f19603f3d011682016040523d82523d6000602084013e61260d565b606091505b509150915061261e82826004612629565b506001949350505050565b606083156126385750816120e4565b8251156126485782518084602001fd5b60405163100960cb60e01b8152600481018390526024016120ca565b6040518060400160405280612677612730565b8152602001600081525090565b6040518060c001604052806000151581526020016126a0612664565b8152602001600081526020016126b4612730565b81526020016126c1612730565b81526020016126ce612730565b905290565b6040518060400160405280600081526020016126ce612c59565b6040805160c081019091528060008152602001612708612c6c565b8152602001612715612c8f565b81526020016126b46040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b0316815260200161276d612730565b815260200161277a612730565b8152602001612787612ca2565b8152602001612794612730565b8152600060208201526040016126ce612cdc565b6040518060a001604052806127bb612730565b81526020016127c8612730565b81526020016127d5612ca2565b81526020016127e2612730565b81526020016126ce61274a565b6040518060400160405280600081526020016126ce60405180602001604052806000151581525090565b60405180610840016040528061282d612c6c565b815260200160008152602001612841612730565b815260200161284e612664565b815260200161285b612ca2565b8152602001612868612c8f565b81526020016000815260200160008152602001600081526020016000815260200160008152602001612898612730565b815260200160008152602001600081526020016128b3612730565b81526020016128c0612730565b81526020016128cd612730565b81526020016128da612730565b81526020016128f56040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000815260200161291e612730565b81526020016000815260200160008152602001612939612730565b8152602001612946612730565b8152602001612953612730565b8152602001612960612730565b815260200161296d612730565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129ab612730565b81526020016129b8612730565b81526020016129c5612730565b815260200160008152602001600081526020016129e0612730565b81526020016129ed612730565b81526020016129fa612730565b8152602001612a07612730565b8152602001612a14612730565b8152602001612a21612730565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612a5f612730565b8152602001612a6c612730565b8152602001612a79612730565b81526020016000815260200160008152602001612a94612730565b8152602001612aa1612730565b81526020016126b4612730565b6040518060400160405280612ac1612cfe565b81526020016126ce612d3b565b508054612ada90613277565b6000825580601f10612aea575050565b601f0160209004906000526020600020908101906122669190612d92565b604080516101008101825260008082526020820152908101612b28612cdc565b815260006020820152604001612b3c612730565b8152602001612b49612730565b8152602001612b56612730565b81526020016126ce612ca2565b828054612b6f90613277565b90600052602060002090601f016020900481019282612b915760008555612bd7565b82601f10612baa57805160ff1916838001178555612bd7565b82800160010185558215612bd7579182015b82811115612bd7578251825591602001919060010190612bbc565b50612be3929150612d92565b5090565b60408051610160810182526000808252602082018190529181019190915260608101612c11612cdc565b815260006020820152604001612c25612730565b8152602001612c32612730565b8152602001612c3f612730565b8152602001612c4c612730565b8152602001612677612ca2565b60405180602001604052806126ce6126ed565b604051806040016040528060006001600160a01b031681526020016126ce612ca2565b60405180602001604052806126ce612730565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040805160c0810182526000808252602082018190529181019190915260608101612d27612cdc565b8152600060208201526040016126ce612730565b6040518060e00160405280600015158152602001612d57612730565b8152602001612d64612730565b8152602001612d71612730565b8152602001612d7e612ca2565b815260200160008152602001600081525090565b5b80821115612be35760008155600101612d93565b6001600160a01b038116811461226657600080fd5b60405160a081016001600160401b0381118282101715612dec57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612dec57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612dec57634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715612dec57634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b0381118282101715612dec57634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612dec57634e487b7160e01b600052604160045260246000fd5b801515811461226657600080fd5b600060a08284031215612f0457600080fd5b612f0c612dbc565b90508135815260208201356020820152604082013560408201526060820135612f3481612da7565b60608201526080820135612f4781612ee4565b608082015292915050565b60008060c08385031215612f6557600080fd5b8235612f7081612da7565b9150612f7f8460208501612ef2565b90509250929050565b80518252602090810151910152565b6000606082019050612faa828451612f88565b6020830151604083015292915050565b600060208284031215612fcc57600080fd5b5035919050565b604081016102438284612f88565b6000604082840312156122c457600080fd5b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b80516002811061306057613060613038565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b039081168252602080840151610200840192916130aa90850182612f88565b5060408401516130bd6060850182612f88565b5060608401516130d060a0850182613000565b5060808401516130e4610140850182612f88565b5060a08401511661018083015260c08301516131046101a084018261304e565b5092915050565b60006040828403121561311d57600080fd5b613125612df2565b9050813581526020820135602082015292915050565b60006040828403121561314d57600080fd5b6120e4838361310b565b60005b8381101561317257818101518382015260200161315a565b83811115611f105750506000910152565b82815260406020820152600082518060408401526131a8816060850160208701613157565b601f01601f1916919091016060019392505050565b600080604083850312156131d057600080fd5b50508035926020909101359150565b60006101e082840312156122c457600080fd5b6000818303604081121561320557600080fd5b604080519081016001600160401b038111828210171561323557634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561324e57600080fd5b613256612e22565b9150602084013561326681612ee4565b825260208101919091529392505050565b600181811c9082168061328b57607f821691505b602082108114156122c457634e487b7160e01b600052602260045260246000fd5b80516122d481612da7565b6000606082840312156132c957600080fd5b604051606081016001600160401b03811182821017156132f957634e487b7160e01b600052604160045260246000fd5b806040525080915082516002811061331057600080fd5b8152602083015161332081612ee4565b6020820152604083015161333381612da7565b6040919091015292915050565b60006040828403121561335257600080fd5b61335a612df2565b9050815181526020820151602082015292915050565b600060a0828403121561338257600080fd5b61338a612dbc565b905081518152602082015160208201526040820151604082015260608201516133b281612da7565b60608201526080820151612f4781612ee4565b600061022082840312156133d857600080fd5b6133e0612e52565b6133e9836132ac565b81526133f7602084016132ac565b602082015261340984604085016132b7565b604082015261341a60a084016132ac565b606082015261342c8460c08501613340565b608082015261343f846101008501613340565b60a0820152613452846101408501613340565b60c0820152613465846101808501613370565b60e08201529392505050565b60006102a0828403121561348457600080fd5b61348c612e83565b613495836132ac565b81526134a3602084016132ac565b60208201526134b4604084016132ac565b60408201526134c684606085016132b7565b60608201526134d760c084016132ac565b60808201526134e98460e08501613340565b60a08201526101206134fd85828601613340565b60c0830152613510856101608601613340565b60e0830152613523856101a08601613340565b610100830152613537856101e08601613370565b90820152610280929092015161014083015250919050565b600060c0828403121561356157600080fd5b613569612df2565b9050813561357681612da7565b81526135858360208401612ef2565b602082015292915050565b6000604082840312156135a257600080fd5b6135aa612e22565b90506135b6838361310b565b815292915050565b6000602082840312156135d057600080fd5b6135d8612e22565b9135825250919050565b60008183036101e08112156135f657600080fd5b6135fe612df2565b833581526101c0601f198301121561361557600080fd5b61361d612e22565b9150613627612eb4565b60208501356005811061363957600080fd5b8152613648866040870161354f565b602082015261365b866101008701613590565b604082015261366e8661014087016135be565b606082015261368186610160870161310b565b6080820152613694866101a0870161310b565b60a0820152825260208101919091529392505050565b6102c7828251612f88565b6001600160a01b03838116825282516020808401919091528301515180516102008401929190600581106136eb576136eb613038565b6040850152602081810151805190931660608601529190910151906137136080850183613000565b604081015191506137286101208501836136aa565b60608101515161016085015260808101519150613749610180850183612f88565b60a00151905061375d6101c0840182612f88565b509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561378e5761378e613765565b500190565b6000828210156137a5576137a5613765565b500390565b60a081016102438284613000565b60008160001904831182151516156137d2576137d2613765565b500290565b6000826137f457634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016138176020830187612f88565b84606083015261382a6080830185612f88565b61249f60c0830184612f88565b6001600160a01b038616815260208101859052610100810161385c6040830186612f88565b61382a6080830185612f88565b6001600160a01b038516815260e081016138866020830186612f88565b6138936060830185612f88565b61257b60a0830184612f88565b81516001600160a01b039081168252602080840151821690830152604080840151610220840192916138d49085018261304e565b5060608401511660a083015260808301516138f260c0840182612f88565b5060a0830151613906610100840182612f88565b5060c083015161391a610140840182612f88565b5060e0830151613104610180840182613000565b60006102a082019050613942828451612ff3565b60208301516139546020840182612ff3565b5060408301516139676040840182612ff3565b50606083015161397a606084018261304e565b50608083015161398d60c0840182612ff3565b5060a08301516139a060e0840182612f88565b5060c08301516101206139b581850183612f88565b60e085015191506139ca610160850183612f88565b61010085015191506139e06101a0850183612f88565b84015190506139f36101e0840182613000565b5061014083015161028083015292915050565b60008251613a18818460208701613157565b9190910192915050565b600060208284031215613a3457600080fd5b81516120e481612ee456fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a264697066735822122066b529446442da873f4cf4d7f780bc1fb8f6d4279147a7969fe00a318d18fcfd64736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212205190f88b674a3b79f6125452340ba06765befb1246bdd1193fdea3970bcaa6e864736f6c634300080c0033",BytecodeLen:24443,Which:"o1",version:7,views:{Info:"Info"}},_stateSourceMap={2:{at:"./index.rsh:523:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./index.rsh:529:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},4:{at:"./index.rsh:378:19:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Admin:Admin,Protocol_delete:Protocol_delete,Protocol_harvest:Protocol_harvest,Provider_deposit:Provider_deposit,Provider_withdraw:Provider_withdraw,Trader_swapAForB:Trader_swapAForB,Trader_swapBForA:Trader_swapBForA},_APIs={Protocol_delete:Protocol_delete,Protocol_harvest:Protocol_harvest,Provider:{deposit:Provider_deposit,withdraw:Provider_withdraw},Trader:{swapAForB:Trader_swapAForB,swapBForA:Trader_swapBForA}};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Admin,_Protocol_delete2,_Protocol_harvest4,_Provider_deposit4,_Provider_withdraw4,_Trader_swapAForB4,_Trader_swapBForA4,Protocol_delete,Protocol_harvest,Provider_deposit,Provider_withdraw,Trader_swapAForB,Trader_swapBForA,_stateSourceMap,_Connectors,_Participants,_APIs};