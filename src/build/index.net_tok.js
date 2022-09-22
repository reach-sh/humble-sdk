const _version="0.1.10",_versionHash="0.1.10 (2604daf0)",_backendVersion=16;function getExports(e){const l=e.reachStdlib;e=l.T_UInt;const u=l.T_Struct([["A",e],["B",e]]),f=l.T_Bool;var t=l.T_Address;const m=l.T_Struct([["protoFee",e],["lpFee",e],["totFee",e],["protoAddr",t],["locked",f]]);return{computeMint_:(e,t,n)=>{var e=l.protect(u,e,null),t=l.protect(u,t,null),n=l.protect(u,n,null),a=e.A,e=e.B,i=t.A,t=t.B,n=n.B;let d;var r,c=l.eq(n,l.checkedBigNumberify("284:19:decimal",l.UInt_max,"0"));return d=c?(c=l.cast("UInt","UInt256",a,!1),r=l.cast("UInt","UInt256",e,!1),c=l.mul256(c,r),r=l.sqrt256(c),l.cast("UInt256","UInt",r,!1)):(c=l.muldiv(a,n,i),r=l.muldiv(e,n,t),l.lt(c,r)?c:r)},computeSwap_:(e,t,n,a)=>{var e=l.protect(f,e,null),t=l.protect(u,t,null),n=l.protect(u,n,null),a=l.protect(m,a,null),i=t.A,t=t.B,d=n.A,n=n.B,r=a.protoFee,c=a.lpFee,a=a.totFee,o=l.lt(r,l.checkedBigNumberify("./index.rsh:72:14:decimal",l.UInt_max,"100")),b=l.lt(c,l.checkedBigNumberify("./index.rsh:73:14:decimal",l.UInt_max,"100")),o=!!o&&b,b=l.add(c,r),c=l.eq(a,b),b=!!o&&c,o=l.lt(a,l.checkedBigNumberify("./index.rsh:75:15:decimal",l.UInt_max,"100")),c=!!b&&o,b=l.gt(a,l.checkedBigNumberify("./index.rsh:76:15:decimal",l.UInt_max,"0")),o=!!c&&b,c=(l.assert(o,{at:"<top level>",fs:[],msg:null,who:"Module"}),l.gt(l.UInt_max,l.checkedBigNumberify("./index.rsh:70:22:decimal",l.UInt_max,"10000")));l.assert(c,{at:"275:10:application",fs:['at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"});let s;var p=(s=e?(b=l.eq(t,l.checkedBigNumberify("./index.rsh:262:18:decimal",l.UInt_max,"0")),l.assert(b,{at:"./index.rsh:262:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),o=l.add(d,i),c=l.muldiv(i,n,o),e=l.cast("UInt","UInt256",i,!1),b=l.cast("UInt","UInt256",a,!1),b=l.sub256(l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),b),e=l.mul256(e,b),b=l.cast("UInt","UInt256",d,!1),b=l.mul256(b,l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),b=l.add256(b,e),p=l.cast("UInt","UInt256",n,!1),e=l.mul256(e,p),p=l.div256(e,b),e=l.cast("UInt256","UInt",p,!1),b=l.sub(c,e),p=l.mul(r,l.checkedBigNumberify("./index.rsh:243:40:decimal",l.UInt_max,"100")),c=l.div(p,a),p=l.muldiv(b,c,l.checkedBigNumberify("./index.rsh:245:54:decimal",l.UInt_max,"100")),b=l.muldiv(i,r,l.checkedBigNumberify("./index.rsh:247:49:decimal",l.UInt_max,"10000")),c=l.muldiv(b,n,o),o=l.gt(c,p),c=[b,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],b=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),p],o=(p=o?c:b)[l.checkedBigNumberify("./index.rsh:263:19:array",l.UInt_max,"0")],c=p[l.checkedBigNumberify("./index.rsh:263:19:array",l.UInt_max,"1")],[{A:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),B:e},{A:o,B:c}]):(b=l.eq(i,l.checkedBigNumberify("./index.rsh:267:18:decimal",l.UInt_max,"0")),l.assert(b,{at:"./index.rsh:267:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),p=l.add(n,t),e=l.muldiv(t,d,p),o=l.cast("UInt","UInt256",t,!1),c=l.cast("UInt","UInt256",a,!1),i=l.sub256(l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),c),b=l.mul256(o,i),c=l.cast("UInt","UInt256",n,!1),o=l.mul256(c,l.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),i=l.add256(o,b),n=l.cast("UInt","UInt256",d,!1),c=l.mul256(b,n),o=l.div256(c,i),b=l.cast("UInt256","UInt",o,!1),n=l.sub(e,b),c=l.mul(r,l.checkedBigNumberify("./index.rsh:243:40:decimal",l.UInt_max,"100")),i=l.div(c,a),o=l.muldiv(n,i,l.checkedBigNumberify("./index.rsh:245:54:decimal",l.UInt_max,"100")),e=l.muldiv(t,r,l.checkedBigNumberify("./index.rsh:247:49:decimal",l.UInt_max,"10000")),c=l.muldiv(e,d,p),a=l.gt(c,o),n=[e,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],i=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),o],r=(t=a?n:i)[l.checkedBigNumberify("./index.rsh:268:19:array",l.UInt_max,"0")],d=t[l.checkedBigNumberify("./index.rsh:268:19:array",l.UInt_max,"1")],[{A:b,B:l.checkedBigNumberify("<builtin>",l.UInt_max,"0")},{A:d,B:r}]))[l.checkedBigNumberify("276:11:array",l.UInt_max,"0")],c=s[l.checkedBigNumberify("276:11:array",l.UInt_max,"1")];return[{A:p.A,B:p.B},{A:c.A,B:c.B}]}}}function _getEvents(e){var e=e.reachStdlib,t=e.T_Address,n=e.T_UInt,a=e.T_Struct([["A",n],["B",n]]),i=e.T_Bool;return{Deposit:[t,a,n,a,a],Harvest:[e.T_Struct([["protoFee",n],["lpFee",n],["totFee",n],["protoAddr",t],["locked",i]])],Swap:[t,a,a,a],Withdraw:[t,n,a,a,a]}}function _getViews(e,t){const k=e.reachStdlib;var e=k.T_Token,n=k.T_Null,n=k.T_Data({None:n,Some:e}),a=k.T_UInt,i=k.T_Object({A:a,B:a}),d=k.T_Address,r=k.T_Bool,r=k.T_Struct([["protoFee",a],["lpFee",a],["totFee",a],["protoAddr",d],["locked",r]]),c=k.T_Struct([["A",a],["B",a]]);return{infos:{Info:{decode:async(e,t,n)=>{if(k.eq(e,k.checkedBigNumberify("<builtin>",k.UInt_max,"2"))){const[p,l,u,f,m,h,x]=t;return[...n],c=f.A,o=f.B,s=m.A,b=m.B,d=x.protoFee,a=x.lpFee,r=x.totFee,i=x.protoAddr,c={A:c,B:o},o={A:s,B:b},s={locked:x.locked,lpFee:a,protoAddr:i,protoFee:d,totFee:r},b={A:h.A,B:h.B},{liquidityToken:u,lptBals:c,poolBals:o,protoBals:b,protoInfo:s,tokA:l,tokB:p}}var a,i,d,r,c,o,b,s;if(k.eq(e,k.checkedBigNumberify("<builtin>",k.UInt_max,"4"))){const[,y,_,T,,A,B,I,w,,]=t;return[...n],a=A.A,i=A.B,d=B.A,r=B.B,c=w.protoFee,o=w.lpFee,b=w.totFee,s=w.protoAddr,a={A:a,B:i},i={A:d,B:r},d={locked:w.locked,lpFee:o,protoAddr:s,protoFee:c,totFee:b},r={A:I.A,B:I.B},{liquidityToken:T,lptBals:a,poolBals:i,protoBals:r,protoInfo:d,tokA:_,tokB:y}}k.assert(!1,"illegal view")},ty:k.T_Struct([["liquidityToken",e],["lptBals",c],["poolBals",c],["protoInfo",r],["protoBals",c],["tokB",e],["tokA",n]])}},views:{2:[e,n,e,i,i,i,r],4:[d,e,n,e,i,i,i,i,r,a]}}}function _getMaps(e){return{mapDataTy:e.reachStdlib.T_Tuple([])}}async function Admin(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for Admin expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for Admin expects to receive an interact object as its second argument."));const c=e._initialize(),o=c.stdlib;var e=o.T_Bytes(o.checkedBigNumberify("<builtin>",o.UInt_max,"32")),n=o.T_Bytes(o.checkedBigNumberify("<builtin>",o.UInt_max,"8")),a=o.T_Contract;const j=o.T_Token;var D=o.T_Null,i=o.T_UInt,z=o.T_Address,O=o.T_Bool,O=o.T_Struct([["protoFee",i],["lpFee",i],["totFee",i],["protoAddr",z],["locked",O]]);const R=o.T_Tuple([i,O]);var z=o.T_Tuple([z,O]),M=o.T_Struct([["A",i],["B",i]]),O=o.T_Tuple([M]),d=o.T_Tuple([i]),r=o.T_Tuple([i,i]),X=o.T_Data({Protocol_harvest0_720:z,Provider_deposit0_720:O,Provider_withdraw0_720:d,Trader_swapAForB0_720:r,Trader_swapBForA0_720:r}),J=o.T_Tuple([M,i]),z=o.T_Tuple([]),O=o.protect(e,t.ltName,"for Admin's interact field ltName"),d=o.protect(n,t.ltSymbol,"for Admin's interact field ltSymbol"),r=o.protect(a,t.proto,"for Admin's interact field proto"),q=o.protect(j,t.tokB,"for Admin's interact field tokB"),W=o.gt(o.UInt_max,o.checkedBigNumberify("./index.rsh:70:22:decimal",o.UInt_max,"10000")),W=(o.assert(W,{at:"./index.rsh:348:10:application",fs:['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],msg:null,who:"Admin"}),await c.sendrecv({args:[null,q,O,d,r],evt_cnt:5,funcNum:0,lct:o.checkedBigNumberify("./index.rsh:358:9:dot",o.UInt_max,"0"),onlyIf:!0,out_tys:[D,j,e,n,a],pay:[o.checkedBigNumberify("./index.rsh:358:9:decimal",o.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};let n=o.UInt_max;var[,a,i,d,r]=e["data"],a=(t.txns.push({amt:o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),kind:"init",tok:a}),await c.getContractInfo(),[o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0"),void t.txns.push({accs:[],apps:[],bills:o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0"),fees:o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0"),kind:"remote",obj:r,pays:o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0"),toks:[]})]),r=await e.getOutput("internal","v4160",R,a),a=(r[o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0")],r[o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"1")],o.UInt_max,o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),o.simTokenNew(t,i,d,"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0","\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",o.UInt_max,void 0,n=n.sub(1)));await e.getOutput("internal","v4186",j,a),o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),o.checkedBigNumberify("<builtin>",o.UInt_max,"0");return await 0,t.isHalt=!1,t},soloSend:!0,timeoutAt:void 0,tys:[D,j,e,n,a],waitIfNotPresent:!1})),{data:[,q,,,,],time:O,from:V}=W,d=o.gt(o.UInt_max,o.checkedBigNumberify("./index.rsh:70:22:decimal",o.UInt_max,"10000")),r=(o.assert(d,{at:"./index.rsh:348:10:application",fs:['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],msg:null,who:"Admin"}),await c.getContractInfo(),await W.getOutput("internal","v4160",R,void 0)),e=r[o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0")],n=r[o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"1")],a=n.protoFee,d=n.lpFee,r=n.totFee,K=o.lt(a,o.checkedBigNumberify("./index.rsh:72:14:decimal",o.UInt_max,"100")),Y=o.lt(d,o.checkedBigNumberify("./index.rsh:73:14:decimal",o.UInt_max,"100")),K=!!K&&Y,Y=o.add(d,a),d=o.eq(r,Y),a=!!K&&d,Y=o.lt(r,o.checkedBigNumberify("./index.rsh:75:15:decimal",o.UInt_max,"100")),K=!!a&&Y,d=o.gt(r,o.checkedBigNumberify("./index.rsh:76:15:decimal",o.UInt_max,"0")),a=(o.assert(!!K&&d,{at:"./index.rsh:363:14:application",fs:[],msg:null,who:"Admin"}),o.eq(o.checkedBigNumberify("./index.rsh:363:14:application",o.UInt_max,"0"),e)),Y=(o.assert(a,{at:"./index.rsh:363:14:application",fs:[],msg:"remote bill check",who:"Admin"}),{A:o.UInt_max,B:o.checkedBigNumberify("<builtin>",o.UInt_max,"0")}),r=await W.getOutput("internal","v4186",j,void 0),K=[q][o.checkedBigNumberify("reach standard library:143:21:application",o.UInt_max,"0")],d=o.tokenEq(r,K),H=(o.assert(!d,{at:"./index.rsh:367:25:application",fs:[],msg:"New token is unique",who:"Admin"}),o.protect(D,await t.signalPoolCreation(r),{at:"./index.rsh:375:36:application",fs:["at ./index.rsh:375:36:application call to [unknown function] (defined at: ./index.rsh:375:36:function exp)",'at ./index.rsh:375:36:application call to "liftedInteract" (defined at: ./index.rsh:375:36:application)'],msg:"signalPoolCreation",who:"Admin"}),{A:o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),B:o.checkedBigNumberify("<builtin>",o.UInt_max,"0")});let Z=!1,b=Y,s=H,p=H,l=n,G=O,u=e;for(;await!Z;){const C=await c.recv({didSend:!1,evt_cnt:1,funcNum:3,out_tys:[X],timeoutAt:void 0,waitIfNotPresent:!1});var{data:[L],time:$}=C;switch(L[0]){case"Protocol_harvest0_720":var f=L[1],f=(f[o.checkedBigNumberify("./index.rsh:438:9:spread",o.UInt_max,"0")],f[o.checkedBigNumberify("./index.rsh:438:9:spread",o.UInt_max,"1")]),m=l.protoAddr,m=o.addressEq(V,m),m=(o.assert(m,{at:"./index.rsh:422:14:application",fs:['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:"Thou art not the Protocol",who:"Admin"}),f.protoFee),h=f.lpFee,x=f.totFee,y=o.lt(m,o.checkedBigNumberify("./index.rsh:72:14:decimal",o.UInt_max,"100")),_=o.lt(h,o.checkedBigNumberify("./index.rsh:73:14:decimal",o.UInt_max,"100")),y=!!y&&_,_=o.add(h,m),h=o.eq(x,_),m=!!y&&h,_=o.lt(x,o.checkedBigNumberify("./index.rsh:75:15:decimal",o.UInt_max,"100")),y=!!m&&_,h=o.gt(x,o.checkedBigNumberify("./index.rsh:76:15:decimal",o.UInt_max,"0")),m=(o.assert(!!y&&h,{at:"./index.rsh:78:29:application",fs:['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)','at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:null,who:"Admin"}),o.le(await c.getBalance(),u)?o.checkedBigNumberify("./index.rsh:424:42:application",o.UInt_max,"0"):o.sub(await c.getBalance(),u)),_=o.add(m,u),x=b.B,y=f.locked,h=o.eq(x,o.checkedBigNumberify("./index.rsh:427:56:decimal",o.UInt_max,"0")),x=!!y&&h,y=s.A,h=s.B,y=o.eq(y,o.checkedBigNumberify("./index.rsh:391:37:decimal",o.UInt_max,"0")),h=o.eq(h,o.checkedBigNumberify("./index.rsh:391:47:decimal",o.UInt_max,"0")),x=!!x&&(!!y&&h),y=p.A,h=p.B,e0=o.add(y,m),_=o.sub(_,e0),e0=(await C.getOutput("Protocol_harvest","v5645",J,[{A:y,B:h},m]),f.protoAddr,b),y=s;Z=x,b=e0,s=y,p=H,l=f,G=$,u=_;continue;case"Provider_deposit0_720":{h=L[1][o.checkedBigNumberify("./index.rsh:459:10:spread",o.UInt_max,"0")],m=l.locked,x=(o.assert(!m,{at:"./index.rsh:460:12:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"locked",who:"Admin"}),h.A),e0=h.B,y=b.B,f=o.eq(y,o.checkedBigNumberify("./index.rsh:284:19:decimal",o.UInt_max,"0")),_=o.add(u,x);let e;var t0,n0,T=b.A,a0=(e=f?(t0=o.cast("UInt","UInt256",x,!1),n0=o.cast("UInt","UInt256",e0,!1),t0=o.mul256(t0,n0),n0=o.sqrt256(t0),o.cast("UInt256","UInt",n0,!1)):(t0=s.A,n0=s.B,a0=o.muldiv(x,y,t0),i0=o.muldiv(e0,y,n0),o.lt(a0,i0)?a0:i0),s.A),i0=o.add(x,a0),d0=s.B,d0=o.add(e0,d0),d0={A:i0,B:d0},T=o.sub(T,e),r0=o.add(y,e),T={A:T,B:r0},r0=(await C.getOutput("Provider_deposit","v6681",i,e),p),c0=l;Z=!1,b=T,s=d0,p=r0,l=c0,G=$,u=_;continue}case"Provider_withdraw0_720":var T=L[1][o.checkedBigNumberify("./index.rsh:447:10:spread",o.UInt_max,"0")],d0=b.A,r0=b.B,c0=s.A,o0=s.B,b0=o.muldiv(T,c0,r0),s0=o.muldiv(T,o0,r0),p0=o.add(d0,T),A=o.sub(r0,T),p0={A:p0,B:A},A=o.sub(c0,b0),o0=o.sub(o0,s0),A={A:A,B:o0},o0=o.sub(u,b0),b0=(await C.getOutput("Provider_withdraw","v7841",M,{A:b0,B:s0}),p),s0=l;Z=!1,b=p0,s=A,p=b0,l=s0,G=$,u=o0;continue;case"Trader_swapAForB0_720":var p0=L[1],A=p0[o.checkedBigNumberify("./index.rsh:514:10:spread",o.UInt_max,"0")],b0=p0[o.checkedBigNumberify("./index.rsh:514:10:spread",o.UInt_max,"1")],s0=l.locked,o0=(o.assert(!s0,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"locked",who:"Admin"}),s.A),B=s.B,I=l.protoFee,w=l.totFee,k=o.add(o0,A),g=o.muldiv(A,B,k),v=o.cast("UInt","UInt256",A,!1),U=o.cast("UInt","UInt256",w,!1),U=o.sub256(o.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),U),v=o.mul256(v,U),U=o.cast("UInt","UInt256",o0,!1),N=o.mul256(U,o.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),N=o.add256(N,v),l0=o.cast("UInt","UInt256",B,!1),v=o.mul256(v,l0),v=o.div256(v,N),N=o.cast("UInt256","UInt",v,!1),v=o.sub(g,N),g=o.mul(I,o.checkedBigNumberify("./index.rsh:243:40:decimal",o.UInt_max,"100")),g=o.div(g,w),w=o.muldiv(v,g,o.checkedBigNumberify("./index.rsh:245:54:decimal",o.UInt_max,"100")),v=o.muldiv(A,I,o.checkedBigNumberify("./index.rsh:247:49:decimal",o.UInt_max,"10000")),g=o.muldiv(v,B,k),I=o.gt(g,w),g=[v,o.checkedBigNumberify("<builtin>",o.UInt_max,"0")],v=[o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),w],w=I?g:v,I=w[o.checkedBigNumberify("./index.rsh:263:19:array",o.UInt_max,"0")],g=w[o.checkedBigNumberify("./index.rsh:263:19:array",o.UInt_max,"1")],v=o.sub(B,N),w=o.sub(k,I),B=o.sub(v,g),k=o.le(b0,N),v=(o.assert(k,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"slippage",who:"Admin"}),o.mul256(U,l0)),k=o.cast("UInt","UInt256",w,!1),U=o.cast("UInt","UInt256",B,!1),l0=o.mul256(k,U),k=o.ge256(l0,v),U=(o.assert(k,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"constant product",who:"Admin"}),o.add(u,A)),l0={A:w,B:B},v=p.A,k=o.add(v,I),w=p.B,B={A:k,B:o.add(w,g)},v={A:o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),B:N},I=(await C.getOutput("Trader_swapAForB","v8984",M,v),o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),b),k=l;Z=!1,b=I,s=l0,p=B,l=k,G=$,u=U;continue;case"Trader_swapBForA0_720":var w=L[1],g=w[o.checkedBigNumberify("./index.rsh:518:10:spread",o.UInt_max,"0")],N=w[o.checkedBigNumberify("./index.rsh:518:10:spread",o.UInt_max,"1")],v=l.locked,I=(o.assert(!v,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"locked",who:"Admin"}),s.A),l0=s.B,B=l.protoFee,k=l.totFee,U=o.add(l0,g),P=o.muldiv(g,I,U),F=o.cast("UInt","UInt256",g,!1),E=o.cast("UInt","UInt256",k,!1),E=o.sub256(o.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),E),F=o.mul256(F,E),E=o.cast("UInt","UInt256",l0,!1),S=o.mul256(E,o.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),S=o.add256(S,F),u0=o.cast("UInt","UInt256",I,!1),F=o.mul256(F,u0),F=o.div256(F,S),S=o.cast("UInt256","UInt",F,!1),F=o.sub(P,S),P=o.mul(B,o.checkedBigNumberify("./index.rsh:243:40:decimal",o.UInt_max,"100")),P=o.div(P,k),F=o.muldiv(F,P,o.checkedBigNumberify("./index.rsh:245:54:decimal",o.UInt_max,"100")),P=o.muldiv(g,B,o.checkedBigNumberify("./index.rsh:247:49:decimal",o.UInt_max,"10000")),Q=o.muldiv(P,I,U),Q=o.gt(Q,F),P=[P,o.checkedBigNumberify("<builtin>",o.UInt_max,"0")],F=[o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),F],Q=Q?P:F,P=Q[o.checkedBigNumberify("./index.rsh:268:19:array",o.UInt_max,"0")],F=Q[o.checkedBigNumberify("./index.rsh:268:19:array",o.UInt_max,"1")],Q=o.sub(I,S),Q=o.sub(Q,F),f0=o.sub(U,P),m0=o.le(N,S),m0=(o.assert(m0,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"slippage",who:"Admin"}),o.mul256(u0,E)),u0=o.cast("UInt","UInt256",Q,!1),E=o.cast("UInt","UInt256",f0,!1),u0=o.mul256(u0,E),E=o.ge256(u0,m0),u0=(o.assert(E,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"constant product",who:"Admin"}),{A:Q,B:f0}),m0=p.A,E=o.add(m0,F),Q=p.B,f0={A:E,B:o.add(Q,P)},m0=o.sub(u,S),F={A:S,B:o.checkedBigNumberify("<builtin>",o.UInt_max,"0")},E=(await C.getOutput("Trader_swapBForA","v10124",M,F),o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),b),Q=l;Z=!1,b=E,s=u0,p=f0,l=Q,G=$,u=m0;continue}}const C=await c.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[z],timeoutAt:void 0,waitIfNotPresent:!1});var[,]=C["data"];await C.getOutput("Protocol_delete","v10175",D,null)}async function _Protocol_delete2(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Protocol_delete2 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Protocol_delete2 expects to receive an interact object as its second argument."));e=e._initialize();const n=e.stdlib;var a=n.T_Token;const i=n.T_Null;var d=n.T_Data({None:i,Some:a}),r=n.T_UInt,c=n.T_Object({A:r,B:r}),o=n.T_Address,b=n.T_Bool,r=n.T_Struct([["protoFee",r],["lpFee",r],["totFee",r],["protoAddr",o],["locked",b]]),o=n.T_Tuple([]);const[s,p,l,u,f,m,h]=await e.getState(n.checkedBigNumberify("<builtin>",n.UInt_max,"2"),[a,d,a,c,c,c,r]);var b=n.protect(o,await t.in(),{at:"./index.rsh:525:3:application",fs:["at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)"],msg:"in",who:"Protocol_delete"}),e=await e.sendrecv({args:[s,p,l,u,f,m,h,b],evt_cnt:1,funcNum:2,lct:n.checkedBigNumberify("<builtin>",n.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[n.checkedBigNumberify("./index.rsh:525:3:decimal",n.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};n.UInt_max;var[,]=e["data"];t.txns.push({kind:"api",who:"Protocol_delete"}),await e.getOutput("Protocol_delete","v10175",i,null);return n.simTokenBurn(t,l,n.UInt_max),n.simTokenDestroy(t,l),t.txns.push({kind:"halt",tok:s}),t.txns.push({kind:"halt",tok:void 0}),t.isHalt=!0,t},soloSend:!1,timeoutAt:void 0,tys:[a,d,a,c,c,c,r,o],waitIfNotPresent:!1}),[b]=e["data"],d=await e.getOutput("Protocol_delete","v10175",i,null);n.protect(i,await t.out(b,d),{at:"./index.rsh:525:3:application",fs:["at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)",'at ./index.rsh:526:4:application call to "k" (defined at: ./index.rsh:525:3:function exp)'],msg:"out",who:"Protocol_delete"})}async function _Protocol_harvest4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Protocol_harvest4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Protocol_harvest4 expects to receive an interact object as its second argument."));const s=e._initialize(),p=s.stdlib;var e=p.T_Address,n=p.T_Token,a=p.T_Null,i=p.T_Data({None:a,Some:n}),d=p.T_UInt,r=p.T_Object({A:d,B:d}),c=p.T_Bool,c=p.T_Struct([["protoFee",d],["lpFee",d],["totFee",d],["protoAddr",e],["locked",c]]),o=p.T_Tuple([e,c]),b=p.T_Struct([["A",d],["B",d]]),l=p.T_Tuple([b]),u=p.T_Tuple([d]),f=p.T_Tuple([d,d]),l=p.T_Data({Protocol_harvest0_720:o,Provider_deposit0_720:l,Provider_withdraw0_720:u,Trader_swapAForB0_720:f,Trader_swapBForA0_720:f});const m=p.T_Tuple([b,d]),[h,x,j,y,_,T,A,B,I,w]=await s.getState(p.checkedBigNumberify("<builtin>",p.UInt_max,"4"),[e,n,i,n,r,r,r,r,c,d]);var u=p.protect(o,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)",'at ./index.rsh:378:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:438:9:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Protocol_harvest"}),f=u[p.checkedBigNumberify("./index.rsh:1:23:application",p.UInt_max,"1")],b=f.protoFee,o=f.lpFee,f=f.totFee,k=p.lt(b,p.checkedBigNumberify("./index.rsh:72:14:decimal",p.UInt_max,"100")),g=p.lt(o,p.checkedBigNumberify("./index.rsh:73:14:decimal",p.UInt_max,"100")),k=!!k&&g,g=p.add(o,b),o=p.eq(f,g),b=!!k&&o,g=p.lt(f,p.checkedBigNumberify("./index.rsh:75:15:decimal",p.UInt_max,"100")),k=!!b&&g,o=p.gt(f,p.checkedBigNumberify("./index.rsh:76:15:decimal",p.UInt_max,"0")),b=(p.assert(!!k&&o,{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)",'at ./index.rsh:378:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:438:9:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:null,who:"Protocol_harvest"}),I.protoAddr),g=p.addressEq(h,b),f=(p.assert(g,{at:"./index.rsh:422:14:application",fs:['at ./index.rsh:440:28:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)","at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)",'at ./index.rsh:378:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:438:9:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"Thou art not the Protocol",who:"Protocol_harvest"}),p.le(await s.getBalance(),w)?p.checkedBigNumberify("./index.rsh:424:42:application",p.UInt_max,"0"):p.sub(await s.getBalance(),w),["Protocol_harvest0_720",u]),v=await s.sendrecv({args:[h,x,j,y,_,T,A,B,I,w,f],evt_cnt:1,funcNum:3,lct:p.checkedBigNumberify("<builtin>",p.UInt_max,"0"),onlyIf:!0,out_tys:[l],pay:[p.checkedBigNumberify("./index.rsh:370:34:decimal",p.UInt_max,"0"),[[p.checkedBigNumberify("./index.rsh:442:25:decimal",p.UInt_max,"0"),y],[p.checkedBigNumberify("./index.rsh:442:31:decimal",p.UInt_max,"0"),x]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};p.UInt_max;var[n]=e["data"];switch(n[0]){case"Protocol_harvest0_720":var a=n[1],i=(t.txns.push({kind:"api",who:"Protocol_harvest"}),a[p.checkedBigNumberify("./index.rsh:438:9:spread",p.UInt_max,"0")]),a=a[p.checkedBigNumberify("./index.rsh:438:9:spread",p.UInt_max,"1")],d=(a.protoFee,a.lpFee,a.totFee,p.le(await s.getBalance(),w)?p.checkedBigNumberify("./index.rsh:424:42:application",p.UInt_max,"0"):p.sub(await s.getBalance(),w)),r=p.add(d,w),c=T.B,c=(a.locked,p.eq(c,p.checkedBigNumberify("./index.rsh:427:56:decimal",p.UInt_max,"0")),A.A),o=A.B,c=(p.eq(c,p.checkedBigNumberify("./index.rsh:391:37:decimal",p.UInt_max,"0")),p.eq(o,p.checkedBigNumberify("./index.rsh:391:47:decimal",p.UInt_max,"0")),B.A),o=B.B,b=p.add(c,d),r=(p.sub(r,b),t.txns.push({kind:"from",to:i,tok:void 0}),t.txns.push({kind:"from",to:i,tok:x}),{A:c,B:o}),b=[r,d];await e.getOutput("Protocol_harvest","v5645",m,b),a.protoAddr,T,A,_;t.isHalt=!1;break;case"Provider_deposit0_720":n[1];break;case"Provider_withdraw0_720":n[1];break;case"Trader_swapAForB0_720":n[1];break;case"Trader_swapBForA0_720":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[e,n,i,n,r,r,r,r,c,d,l],waitIfNotPresent:!1}),{data:[U],didSend:D}=v;switch(U[0]){case"Protocol_harvest0_720":var N=U[1],P=(N[p.checkedBigNumberify("./index.rsh:438:9:spread",p.UInt_max,"0")],N[p.checkedBigNumberify("./index.rsh:438:9:spread",p.UInt_max,"1")]),F=I.protoAddr,F=p.addressEq(h,F),F=(p.assert(F,{at:"./index.rsh:422:14:application",fs:['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:"Thou art not the Protocol",who:"Protocol_harvest"}),P.protoFee),E=P.lpFee,S=P.totFee,Q=p.lt(F,p.checkedBigNumberify("./index.rsh:72:14:decimal",p.UInt_max,"100")),C=p.lt(E,p.checkedBigNumberify("./index.rsh:73:14:decimal",p.UInt_max,"100")),Q=!!Q&&C,C=p.add(E,F),E=p.eq(S,C),F=!!Q&&E,C=p.lt(S,p.checkedBigNumberify("./index.rsh:75:15:decimal",p.UInt_max,"100")),Q=!!F&&C,E=p.gt(S,p.checkedBigNumberify("./index.rsh:76:15:decimal",p.UInt_max,"0")),F=(p.assert(!!Q&&E,{at:"./index.rsh:78:29:application",fs:['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)','at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)',"at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:null,who:"Protocol_harvest"}),p.le(await s.getBalance(),w)?p.checkedBigNumberify("./index.rsh:424:42:application",p.UInt_max,"0"):p.sub(await s.getBalance(),w)),C=p.add(F,w),S=T.B,Q=(P.locked,p.eq(S,p.checkedBigNumberify("./index.rsh:427:56:decimal",p.UInt_max,"0")),A.A),E=A.B,S=(p.eq(Q,p.checkedBigNumberify("./index.rsh:391:37:decimal",p.UInt_max,"0")),p.eq(E,p.checkedBigNumberify("./index.rsh:391:47:decimal",p.UInt_max,"0")),B.A),Q=B.B,E=p.add(S,F),C=(p.sub(C,E),await v.getOutput("Protocol_harvest","v5645",m,[{A:S,B:Q},F]));D&&p.protect(a,await t.out(N,C),{at:"./index.rsh:438:10:application",fs:["at ./index.rsh:438:10:application call to [unknown function] (defined at: ./index.rsh:438:10:function exp)",'at ./index.rsh:430:12:application call to "k" (defined at: ./index.rsh:443:30:function exp)',"at ./index.rsh:444:44:application call to [unknown function] (defined at: ./index.rsh:428:20:function exp)","at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)"],msg:"out",who:"Protocol_harvest"}),P.protoAddr,T,A,_;return void 0;case"Provider_deposit0_720":U[1];return;case"Provider_withdraw0_720":U[1];return;case"Trader_swapAForB0_720":U[1];return;case"Trader_swapBForA0_720":U[1]}}async function _Provider_deposit4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Provider_deposit4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Provider_deposit4 expects to receive an interact object as its second argument."));e=e._initialize();const p=e.stdlib;var n=p.T_Address,a=p.T_Token,i=p.T_Null,d=p.T_Data({None:i,Some:a});const l=p.T_UInt;var r=p.T_Object({A:l,B:l}),c=p.T_Bool,c=p.T_Struct([["protoFee",l],["lpFee",l],["totFee",l],["protoAddr",n],["locked",c]]),o=p.T_Struct([["A",l],["B",l]]),o=p.T_Tuple([o]),b=p.T_Tuple([n,c]),s=p.T_Tuple([l]),u=p.T_Tuple([l,l]),b=p.T_Data({Protocol_harvest0_720:b,Provider_deposit0_720:o,Provider_withdraw0_720:s,Trader_swapAForB0_720:u,Trader_swapBForA0_720:u});const[f,m,h,x,y,_,T,A,B,I]=await e.getState(p.checkedBigNumberify("<builtin>",p.UInt_max,"4"),[n,a,d,a,r,r,r,r,c,l]);var s=p.protect(o,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)",'at ./index.rsh:378:19:application call to "runProvider_deposit0_720" (defined at: ./index.rsh:459:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Provider_deposit"}),u=s[p.checkedBigNumberify("./index.rsh:1:23:application",p.UInt_max,"0")],o=u.A,u=u.B,w=B.locked,w=(p.assert(!w,{at:"./index.rsh:460:12:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)",'at ./index.rsh:378:19:application call to "runProvider_deposit0_720" (defined at: ./index.rsh:459:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"locked",who:"Provider_deposit"}),["Provider_deposit0_720",s]),k=await e.sendrecv({args:[f,m,h,x,y,_,T,A,B,I,w],evt_cnt:1,funcNum:3,lct:p.checkedBigNumberify("<builtin>",p.UInt_max,"0"),onlyIf:!0,out_tys:[b],pay:[o,[[p.checkedBigNumberify("./index.rsh:374:50:decimal",p.UInt_max,"0"),x],[u,m]]],sim_p:async t=>{var n={txns:[],mapRefs:[],maps:[]};p.UInt_max;var{data:[a],from:i}=t;switch(a[0]){case"Protocol_harvest0_720":a[1];break;case"Provider_deposit0_720":{var d=a[1],d=(n.txns.push({kind:"api",who:"Provider_deposit"}),d[p.checkedBigNumberify("./index.rsh:459:10:spread",p.UInt_max,"0")]),r=d.A,d=d.B,c=_.B,o=p.eq(c,p.checkedBigNumberify("./index.rsh:284:19:decimal",p.UInt_max,"0"));p.add(I,r);n.txns.push({amt:r,kind:"to",tok:void 0}),n.txns.push({amt:d,kind:"to",tok:m});let e;var b=_.A,o=(e=o?(o=p.cast("UInt","UInt256",r,!1),s=p.cast("UInt","UInt256",d,!1),o=p.mul256(o,s),s=p.sqrt256(o),p.cast("UInt256","UInt",s,!1)):(o=T.A,s=T.B,o=p.muldiv(r,c,o),s=p.muldiv(d,c,s),p.lt(o,s)?o:s),T.A),s=(p.add(r,o),T.B);p.add(d,s),p.sub(b,e),p.add(c,e),n.txns.push({kind:"from",to:i,tok:x}),await t.getOutput("Provider_deposit","v6681",l,e),A,B;n.isHalt=!1;break}case"Provider_withdraw0_720":a[1];break;case"Trader_swapAForB0_720":a[1];break;case"Trader_swapBForA0_720":a[1]}return n},soloSend:!1,timeoutAt:void 0,tys:[n,a,d,a,r,r,r,r,c,l,b],waitIfNotPresent:!1}),{data:[g],didSend:v}=k;switch(g[0]){case"Protocol_harvest0_720":g[1];return;case"Provider_deposit0_720":{var U=g[1],N=U[p.checkedBigNumberify("./index.rsh:459:10:spread",p.UInt_max,"0")],P=B.locked,P=(p.assert(!P,{at:"./index.rsh:460:12:application",fs:["at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"locked",who:"Provider_deposit"}),N.A),N=N.B,F=_.B,E=p.eq(F,p.checkedBigNumberify("./index.rsh:284:19:decimal",p.UInt_max,"0"));p.add(I,P);let e;var S=_.A,E=(e=E?(E=p.cast("UInt","UInt256",P,!1),Q=p.cast("UInt","UInt256",N,!1),E=p.mul256(E,Q),Q=p.sqrt256(E),p.cast("UInt256","UInt",Q,!1)):(E=T.A,Q=T.B,E=p.muldiv(P,F,E),Q=p.muldiv(N,F,Q),p.lt(E,Q)?E:Q),T.A),Q=(p.add(P,E),T.B),P=(p.add(N,Q),p.sub(S,e),p.add(F,e),await k.getOutput("Provider_deposit","v6681",l,e));v&&p.protect(i,await t.out(U,P),{at:"./index.rsh:459:11:application",fs:["at ./index.rsh:459:11:application call to [unknown function] (defined at: ./index.rsh:459:11:function exp)",'at ./index.rsh:467:10:application call to "k" (defined at: ./index.rsh:465:39:function exp)',"at ./index.rsh:465:39:application call to [unknown function] (defined at: ./index.rsh:465:39:function exp)"],msg:"out",who:"Provider_deposit"}),A,B;return}case"Provider_withdraw0_720":g[1];return;case"Trader_swapAForB0_720":g[1];return;case"Trader_swapBForA0_720":g[1]}}async function _Provider_withdraw4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Provider_withdraw4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Provider_withdraw4 expects to receive an interact object as its second argument."));e=e._initialize();const p=e.stdlib;var n=p.T_Address,a=p.T_Token,i=p.T_Null,d=p.T_Data({None:i,Some:a}),r=p.T_UInt,c=p.T_Object({A:r,B:r}),o=p.T_Bool,o=p.T_Struct([["protoFee",r],["lpFee",r],["totFee",r],["protoAddr",n],["locked",o]]),b=p.T_Tuple([r]),s=p.T_Tuple([n,o]);const l=p.T_Struct([["A",r],["B",r]]);var u=p.T_Tuple([l]),f=p.T_Tuple([r,r]),s=p.T_Data({Protocol_harvest0_720:s,Provider_deposit0_720:u,Provider_withdraw0_720:b,Trader_swapAForB0_720:f,Trader_swapBForA0_720:f});const[m,h,x,y,_,T,A,B,I,w]=await e.getState(p.checkedBigNumberify("<builtin>",p.UInt_max,"4"),[n,a,d,a,c,c,c,c,o,r]);var u=p.protect(b,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:447:35:application call to [unknown function] (defined at: ./index.rsh:447:35:function exp)",'at ./index.rsh:378:19:application call to "runProvider_withdraw0_720" (defined at: ./index.rsh:447:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Provider_withdraw"}),f=u[p.checkedBigNumberify("./index.rsh:1:23:application",p.UInt_max,"0")],k=await e.sendrecv({args:[m,h,x,y,_,T,A,B,I,w,["Provider_withdraw0_720",u]],evt_cnt:1,funcNum:3,lct:p.checkedBigNumberify("<builtin>",p.UInt_max,"0"),onlyIf:!0,out_tys:[s],pay:[p.checkedBigNumberify("./index.rsh:370:34:decimal",p.UInt_max,"0"),[[f,y],[p.checkedBigNumberify("./index.rsh:452:31:decimal",p.UInt_max,"0"),h]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};p.UInt_max;var{data:[n],from:a}=e;switch(n[0]){case"Protocol_harvest0_720":n[1];break;case"Provider_deposit0_720":n[1];break;case"Provider_withdraw0_720":var i=n[1],i=(t.txns.push({kind:"api",who:"Provider_withdraw"}),i[p.checkedBigNumberify("./index.rsh:447:10:spread",p.UInt_max,"0")]),d=(t.txns.push({amt:i,kind:"to",tok:y}),T.A),r=T.B,c=A.A,o=A.B,b=p.muldiv(i,c,r),s=p.muldiv(i,o,r),d=(p.add(d,i),p.sub(r,i),p.sub(c,b),p.sub(o,s),p.sub(w,b),t.txns.push({kind:"from",to:a,tok:void 0}),t.txns.push({kind:"from",to:a,tok:h}),{A:b,B:s});await e.getOutput("Provider_withdraw","v7841",l,d),B,I;t.isHalt=!1;break;case"Trader_swapAForB0_720":n[1];break;case"Trader_swapBForA0_720":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,a,d,a,c,c,c,c,o,r,s],waitIfNotPresent:!1}),{data:[g],didSend:v}=k;switch(g[0]){case"Protocol_harvest0_720":g[1];return;case"Provider_deposit0_720":g[1];return;case"Provider_withdraw0_720":var U=g[1],N=U[p.checkedBigNumberify("./index.rsh:447:10:spread",p.UInt_max,"0")],P=T.A,F=T.B,E=A.A,S=A.B,Q=p.muldiv(N,E,F),C=p.muldiv(N,S,F),P=(p.add(P,N),p.sub(F,N),p.sub(E,Q),p.sub(S,C),p.sub(w,Q),await k.getOutput("Provider_withdraw","v7841",l,{A:Q,B:C}));v&&p.protect(i,await t.out(U,P),{at:"./index.rsh:447:11:application",fs:["at ./index.rsh:447:11:application call to [unknown function] (defined at: ./index.rsh:447:11:function exp)",'at ./index.rsh:454:10:application call to "k" (defined at: ./index.rsh:452:39:function exp)',"at ./index.rsh:452:39:application call to [unknown function] (defined at: ./index.rsh:452:39:function exp)"],msg:"out",who:"Provider_withdraw"}),B,I;return;case"Trader_swapAForB0_720":g[1];return;case"Trader_swapBForA0_720":g[1]}}async function _Trader_swapAForB4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Trader_swapAForB4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Trader_swapAForB4 expects to receive an interact object as its second argument."));e=e._initialize();const u=e.stdlib;var n=u.T_Address,a=u.T_Token,j=u.T_Null,D=u.T_Data({None:j,Some:a}),i=u.T_UInt,d=u.T_Object({A:i,B:i}),r=u.T_Bool,r=u.T_Struct([["protoFee",i],["lpFee",i],["totFee",i],["protoAddr",n],["locked",r]]),c=u.T_Tuple([i,i]),o=u.T_Tuple([n,r]);const f=u.T_Struct([["A",i],["B",i]]);var b=u.T_Tuple([f]),s=u.T_Tuple([i]),o=u.T_Data({Protocol_harvest0_720:o,Provider_deposit0_720:b,Provider_withdraw0_720:s,Trader_swapAForB0_720:c,Trader_swapBForA0_720:c});const[z,m,O,R,M,h,x,y,_,X]=await e.getState(u.checkedBigNumberify("<builtin>",u.UInt_max,"4"),[n,a,D,a,d,d,d,d,r,i]);var b=u.protect(c,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Trader_swapAForB"}),s=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"0")],c=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"1")],p=_.locked,p=(u.assert(!p,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"locked",who:"Trader_swapAForB"}),x.A),l=x.B,T=_.protoFee,A=_.totFee,B=u.add(p,s),I=u.muldiv(s,l,B),w=u.cast("UInt","UInt256",s,!1),k=u.cast("UInt","UInt256",A,!1),k=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),k),w=u.mul256(w,k),k=u.cast("UInt","UInt256",p,!1),p=u.mul256(k,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),p=u.add256(p,w),J=u.cast("UInt","UInt256",l,!1),w=u.mul256(w,J),w=u.div256(w,p),p=u.cast("UInt256","UInt",w,!1),w=u.sub(I,p),I=u.mul(T,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),I=u.div(I,A),A=u.muldiv(w,I,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),w=u.muldiv(s,T,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),I=u.muldiv(w,l,B),T=u.gt(I,A),I=[w,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],w=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),A],A=T?I:w,T=A[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"0")],I=A[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"1")],w=u.sub(l,p),A=u.sub(B,T),l=u.sub(w,I),B=u.le(c,p),T=(u.assert(B,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"slippage",who:"Trader_swapAForB"}),u.mul256(k,J)),w=u.cast("UInt","UInt256",A,!1),I=u.cast("UInt","UInt256",l,!1),c=u.mul256(w,I),p=u.ge256(c,T),B=(u.assert(p,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"constant product",who:"Trader_swapAForB"}),["Trader_swapAForB0_720",b]),q=await e.sendrecv({args:[z,m,O,R,M,h,x,y,_,X,B],evt_cnt:1,funcNum:3,lct:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[s,[[u.checkedBigNumberify("./index.rsh:516:24:decimal",u.UInt_max,"0"),R],[u.checkedBigNumberify("./index.rsh:516:30:decimal",u.UInt_max,"0"),m]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};u.UInt_max;var{data:[n],from:a}=e;switch(n[0]){case"Protocol_harvest0_720":n[1];break;case"Provider_deposit0_720":n[1];break;case"Provider_withdraw0_720":n[1];break;case"Trader_swapAForB0_720":var i=n[1],i=(t.txns.push({kind:"api",who:"Trader_swapAForB"}),i[u.checkedBigNumberify("./index.rsh:514:10:spread",u.UInt_max,"0")]),d=x.A,r=x.B,c=_.protoFee,o=_.totFee,b=u.add(d,i),s=u.muldiv(i,r,b),p=u.cast("UInt","UInt256",i,!1),l=u.cast("UInt","UInt256",o,!1),l=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),l),p=u.mul256(p,l),l=u.cast("UInt","UInt256",d,!1),d=u.mul256(l,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),l=u.add256(d,p),d=u.cast("UInt","UInt256",r,!1),p=u.mul256(p,d),d=u.div256(p,l),p=u.cast("UInt256","UInt",d,!1),l=u.sub(s,p),d=u.mul(c,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),s=u.div(d,o),d=u.muldiv(l,s,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),o=u.muldiv(i,c,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),l=u.muldiv(o,r,b),s=u.gt(l,d),c=[o,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],l=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),d],o=s?c:l,d=o[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"0")],s=o[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"1")],c=u.sub(r,p),l=(u.sub(b,d),u.sub(c,s),u.add(X,i),t.txns.push({amt:i,kind:"to",tok:void 0}),y.A),o=(u.add(l,d),y.B),r=(u.add(o,s),t.txns.push({kind:"from",to:a,tok:m}),{A:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),B:p});await e.getOutput("Trader_swapAForB","v8984",f,r),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),h,_;t.isHalt=!1;break;case"Trader_swapBForA0_720":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,a,D,a,d,d,d,d,r,i,o],waitIfNotPresent:!1}),{data:[g],didSend:W}=q;switch(g[0]){case"Protocol_harvest0_720":g[1];return;case"Provider_deposit0_720":g[1];return;case"Provider_withdraw0_720":g[1];return;case"Trader_swapAForB0_720":var V=g[1],v=V[u.checkedBigNumberify("./index.rsh:514:10:spread",u.UInt_max,"0")],K=V[u.checkedBigNumberify("./index.rsh:514:10:spread",u.UInt_max,"1")],U=_.locked,U=(u.assert(!U,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"locked",who:"Trader_swapAForB"}),x.A),N=x.B,P=_.protoFee,F=_.totFee,E=u.add(U,v),S=u.muldiv(v,N,E),Q=u.cast("UInt","UInt256",v,!1),C=u.cast("UInt","UInt256",F,!1),C=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),C),Q=u.mul256(Q,C),C=u.cast("UInt","UInt256",U,!1),U=u.mul256(C,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),U=u.add256(U,Q),Y=u.cast("UInt","UInt256",N,!1),Q=u.mul256(Q,Y),Q=u.div256(Q,U),U=u.cast("UInt256","UInt",Q,!1),Q=u.sub(S,U),S=u.mul(P,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),S=u.div(S,F),F=u.muldiv(Q,S,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),Q=u.muldiv(v,P,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),S=u.muldiv(Q,N,E),P=u.gt(S,F),S=[Q,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],Q=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),F],F=P?S:Q,P=F[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"0")],S=F[u.checkedBigNumberify("./index.rsh:263:19:array",u.UInt_max,"1")],Q=u.sub(N,U),F=u.sub(E,P),N=u.sub(Q,S),E=u.le(K,U),Q=(u.assert(E,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"slippage",who:"Trader_swapAForB"}),u.mul256(C,Y)),K=u.cast("UInt","UInt256",F,!1),E=u.cast("UInt","UInt256",N,!1),C=u.mul256(K,E),Y=u.ge256(C,Q),F=(u.assert(Y,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"constant product",who:"Trader_swapAForB"}),u.add(X,v),y.A),N=(u.add(F,P),y.B),K=(u.add(N,S),{A:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),B:U}),E=await q.getOutput("Trader_swapAForB","v8984",f,K);W&&u.protect(j,await t.out(V,E),{at:"./index.rsh:514:11:application",fs:["at ./index.rsh:514:11:application call to [unknown function] (defined at: ./index.rsh:514:11:function exp)",'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:516:38:function exp)','at ./index.rsh:516:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)',"at ./index.rsh:516:38:application call to [unknown function] (defined at: ./index.rsh:516:38:function exp)"],msg:"out",who:"Trader_swapAForB"}),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),h,_;return;case"Trader_swapBForA0_720":g[1]}}async function _Trader_swapBForA4(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Trader_swapBForA4 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Trader_swapBForA4 expects to receive an interact object as its second argument."));e=e._initialize();const u=e.stdlib;var n=u.T_Address,a=u.T_Token,j=u.T_Null,D=u.T_Data({None:j,Some:a}),i=u.T_UInt,d=u.T_Object({A:i,B:i}),r=u.T_Bool,r=u.T_Struct([["protoFee",i],["lpFee",i],["totFee",i],["protoAddr",n],["locked",r]]),c=u.T_Tuple([i,i]),o=u.T_Tuple([n,r]);const f=u.T_Struct([["A",i],["B",i]]);var b=u.T_Tuple([f]),s=u.T_Tuple([i]),o=u.T_Data({Protocol_harvest0_720:o,Provider_deposit0_720:b,Provider_withdraw0_720:s,Trader_swapAForB0_720:c,Trader_swapBForA0_720:c});const[z,m,O,R,M,h,x,y,_,X]=await e.getState(u.checkedBigNumberify("<builtin>",u.UInt_max,"4"),[n,a,D,a,d,d,d,d,r,i]);var b=u.protect(c,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"in",who:"Trader_swapBForA"}),s=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"0")],c=b[u.checkedBigNumberify("./index.rsh:1:23:application",u.UInt_max,"1")],p=_.locked,p=(u.assert(!p,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"locked",who:"Trader_swapBForA"}),x.A),l=x.B,T=_.protoFee,A=_.totFee,B=u.add(l,s),I=u.muldiv(s,p,B),w=u.cast("UInt","UInt256",s,!1),k=u.cast("UInt","UInt256",A,!1),k=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),k),w=u.mul256(w,k),k=u.cast("UInt","UInt256",l,!1),l=u.mul256(k,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),l=u.add256(l,w),J=u.cast("UInt","UInt256",p,!1),w=u.mul256(w,J),w=u.div256(w,l),l=u.cast("UInt256","UInt",w,!1),w=u.sub(I,l),I=u.mul(T,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),I=u.div(I,A),A=u.muldiv(w,I,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),w=u.muldiv(s,T,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),I=u.muldiv(w,p,B),T=u.gt(I,A),I=[w,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],w=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),A],A=T?I:w,T=A[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"0")],I=A[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"1")],w=u.sub(p,l),A=u.sub(w,I),p=u.sub(B,T),w=u.le(c,l),I=(u.assert(w,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"slippage",who:"Trader_swapBForA"}),u.mul256(J,k)),B=u.cast("UInt","UInt256",A,!1),T=u.cast("UInt","UInt256",p,!1),c=u.mul256(B,T),l=u.ge256(c,I),w=(u.assert(l,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)",'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)',"at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)"],msg:"constant product",who:"Trader_swapBForA"}),["Trader_swapBForA0_720",b]),q=await e.sendrecv({args:[z,m,O,R,M,h,x,y,_,X,w],evt_cnt:1,funcNum:3,lct:u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[u.checkedBigNumberify("./index.rsh:370:34:decimal",u.UInt_max,"0"),[[u.checkedBigNumberify("./index.rsh:520:24:decimal",u.UInt_max,"0"),R],[s,m]]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};u.UInt_max;var{data:[n],from:a}=e;switch(n[0]){case"Protocol_harvest0_720":n[1];break;case"Provider_deposit0_720":n[1];break;case"Provider_withdraw0_720":n[1];break;case"Trader_swapAForB0_720":n[1];break;case"Trader_swapBForA0_720":var i=n[1],i=(t.txns.push({kind:"api",who:"Trader_swapBForA"}),i[u.checkedBigNumberify("./index.rsh:518:10:spread",u.UInt_max,"0")]),d=x.A,r=x.B,c=_.protoFee,o=_.totFee,b=u.add(r,i),s=u.muldiv(i,d,b),p=u.cast("UInt","UInt256",i,!1),l=u.cast("UInt","UInt256",o,!1),l=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),l),p=u.mul256(p,l),l=u.cast("UInt","UInt256",r,!1),r=u.mul256(l,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),l=u.add256(r,p),r=u.cast("UInt","UInt256",d,!1),p=u.mul256(p,r),r=u.div256(p,l),p=u.cast("UInt256","UInt",r,!1),l=u.sub(s,p),r=u.mul(c,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),s=u.div(r,o),r=u.muldiv(l,s,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),o=u.muldiv(i,c,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),l=u.muldiv(o,d,b),s=u.gt(l,r),c=[o,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],l=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),r],o=s?c:l,r=o[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"0")],s=o[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"1")],c=u.sub(d,p),l=(u.sub(c,s),u.sub(b,r),t.txns.push({amt:i,kind:"to",tok:m}),y.A),o=(u.add(l,s),y.B),d=(u.add(o,r),u.sub(X,p),t.txns.push({kind:"from",to:a,tok:void 0}),{A:p,B:u.checkedBigNumberify("<builtin>",u.UInt_max,"0")});await e.getOutput("Trader_swapBForA","v10124",f,d),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),h,_;t.isHalt=!1}return t},soloSend:!1,timeoutAt:void 0,tys:[n,a,D,a,d,d,d,d,r,i,o],waitIfNotPresent:!1}),{data:[g],didSend:W}=q;switch(g[0]){case"Protocol_harvest0_720":g[1];return;case"Provider_deposit0_720":g[1];return;case"Provider_withdraw0_720":g[1];return;case"Trader_swapAForB0_720":g[1];return;case"Trader_swapBForA0_720":var V=g[1],v=V[u.checkedBigNumberify("./index.rsh:518:10:spread",u.UInt_max,"0")],K=V[u.checkedBigNumberify("./index.rsh:518:10:spread",u.UInt_max,"1")],U=_.locked,U=(u.assert(!U,{at:"./index.rsh:474:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"locked",who:"Trader_swapBForA"}),x.A),N=x.B,P=_.protoFee,F=_.totFee,E=u.add(N,v),S=u.muldiv(v,U,E),Q=u.cast("UInt","UInt256",v,!1),C=u.cast("UInt","UInt256",F,!1),C=u.sub256(u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),C),Q=u.mul256(Q,C),C=u.cast("UInt","UInt256",N,!1),N=u.mul256(C,u.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),N=u.add256(N,Q),Y=u.cast("UInt","UInt256",U,!1),Q=u.mul256(Q,Y),Q=u.div256(Q,N),N=u.cast("UInt256","UInt",Q,!1),Q=u.sub(S,N),S=u.mul(P,u.checkedBigNumberify("./index.rsh:243:40:decimal",u.UInt_max,"100")),S=u.div(S,F),F=u.muldiv(Q,S,u.checkedBigNumberify("./index.rsh:245:54:decimal",u.UInt_max,"100")),Q=u.muldiv(v,P,u.checkedBigNumberify("./index.rsh:247:49:decimal",u.UInt_max,"10000")),S=u.muldiv(Q,U,E),v=u.gt(S,F),P=[Q,u.checkedBigNumberify("<builtin>",u.UInt_max,"0")],S=[u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),F],Q=v?P:S,F=Q[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"0")],v=Q[u.checkedBigNumberify("./index.rsh:268:19:array",u.UInt_max,"1")],P=u.sub(U,N),S=u.sub(P,v),Q=u.sub(E,F),U=u.le(K,N),P=(u.assert(U,{at:"./index.rsh:495:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"slippage",who:"Trader_swapBForA"}),u.mul256(Y,C)),E=u.cast("UInt","UInt256",S,!1),K=u.cast("UInt","UInt256",Q,!1),U=u.mul256(E,K),Y=u.ge256(U,P),C=(u.assert(Y,{at:"./index.rsh:505:14:application",fs:['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)',"at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)","at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)","at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)"],msg:"constant product",who:"Trader_swapBForA"}),y.A),S=(u.add(C,v),y.B),Q=(u.add(S,F),u.sub(X,N),{A:N,B:u.checkedBigNumberify("<builtin>",u.UInt_max,"0")}),E=await q.getOutput("Trader_swapBForA","v10124",f,Q);W&&u.protect(j,await t.out(V,E),{at:"./index.rsh:518:11:application",fs:["at ./index.rsh:518:11:application call to [unknown function] (defined at: ./index.rsh:518:11:function exp)",'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:520:38:function exp)','at ./index.rsh:520:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)',"at ./index.rsh:520:38:application call to [unknown function] (defined at: ./index.rsh:520:38:function exp)"],msg:"out",who:"Trader_swapBForA"}),u.checkedBigNumberify("<builtin>",u.UInt_max,"0"),h,_}}async function Protocol_delete(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Protocol_delete expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Protocol_delete expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(2==a,"API called in the wrong state. Currently in state: "+a+", expected:  [2]"),2==a?_Protocol_delete2(e,t):void 0)}async function Protocol_harvest(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Protocol_harvest expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Protocol_harvest expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Protocol_harvest4(e,t):void 0)}async function Provider_deposit(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Provider_deposit expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Provider_deposit expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Provider_deposit4(e,t):void 0)}async function Provider_withdraw(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Provider_withdraw expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Provider_withdraw expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Provider_withdraw4(e,t):void 0)}async function Trader_swapAForB(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Trader_swapAForB expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Trader_swapAForB expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Trader_swapAForB4(e,t):void 0)}async function Trader_swapBForA(e,t){var n,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Trader_swapBForA expects to receive a contract as its first argument.")):"object"!=typeof t?Promise.reject(new Error("The backend for Trader_swapBForA expects to receive an interact object as its second argument.")):(n=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),n.assert(4==a,"API called in the wrong state. Currently in state: "+a+", expected:  [4]"),4==a?_Trader_swapBForA4(e,t):void 0)}const _ALGO={ABI:{impure:["Protocol_delete()byte[0]","Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)","Provider_deposit((uint64,uint64))uint64","Provider_withdraw(uint64)(uint64,uint64)","Trader_swapAForB(uint64,uint64)(uint64,uint64)","Trader_swapBForA(uint64,uint64)(uint64,uint64)"],pure:["Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))"],sigs:["Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))","Protocol_delete()byte[0]","Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)","Provider_deposit((uint64,uint64))uint64","Provider_withdraw(uint64)(uint64,uint64)","Trader_swapAForB(uint64,uint64)(uint64,uint64)","Trader_swapBForA(uint64,uint64)(uint64,uint64)"]},appApproval:"BiAVAAgYBAFkEAIDSZBOoI0GteDwwQeZ66OHCtmUrKAKuPeR5Qf89bu8Au6I6cQCIP///////////wEGJgUBAAEBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC0cqZEkiWzUBI1s1AjYaABdJQQGuIjUEIQQ1BkkhDAxAAVBJIQ0MQAEgSSEODEAA/yEOEkQ0AUklDEAAeSUSRChkKWRQSTUDSUpXSRA1/1dZEDX+V2kQNf1XeTk1/DQDVzEINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXIAhQNANXKAlQNQdCCoshBxJEKGQpZFBJNQNJSlcZEDX/VykQNf5XORA1/VdJOTX8NANXEQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cACFA0A1cICVA1B0IKESENEkQ2GgE2GgJQNf+AAQM0/1AhCa9QQgCYSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhCa9QQgB3IQwSRCpCBwxJIRAMQAAvSSERDEAAFCEREkQ2GgE2GgJQNf8oNP9QQgBNIRASRDYaATX/KTT/UCEJr1BCADmB5PzqgQISRDYaATX/gAECNP9QgVGvUEIAHzYaAhc1BDYaAzYaARdJIQcMQAcMSSEIDEAGoCEIEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/IRJbNf5XKAk1/YExWzX8VzkQNftXSRA1+ldZEDX5V2kQNfhXeTk194GyAVs19kk1BTX1gARHaEcfNPVQsDT1IlVJIQcMQAP0SSEIDEADDUklDEABhCUSRDT1VwEQNfQ09CJbNfM091c4ARcURDT5Ils18jT5I1s18TT3Ils18DT3IQZbNe808TTzCDXuJK808xZQKySvNO8WUKGICOqjiAjmNe0krzTxFlA17CSvNPIWUDXrNO0066OICMw07CujiAjFNO2giAi/oogIu0lKIQZbIhJEI1siEkQiWyISRCRbNeo08zTyHTTulzTqCTTwIQULNO8KHSEFlzXpNPM08B0hCpc16COvNOkWUDToFiOvUDToNPIdNO6XNOkNTUk15yJbNeY05yNbNeU08jTqCTTlCTXkNO405gk14zT0I1s06g5EJK805BZQJK804xZQo4gINDTrNOyjiAgsp0Q08zT+iAgDsSKyATTqsgghBLIQMQCyB7M06hYjr1A14oAIAAAAAAAAJ4w04lCwNOI1BycEMQBQI6808xZQUDTiUDTkFjTjFlBQsDT/NP40/TT8NPsiNPo05BY04xZQNPgiWzTlCBY0+CNbNOYIFlA09zIGNPY06glCBpNINPVXARA19DT0Ils18zT3VzgBFxRENPkiWzXyNPkjWzXxNPciWzXwNPchBls17zTyNPMINe4krzTzFlArJK807xZQoYgHaKOIB2Q17SSvNPIWUDXsJK808RZQNes07TTro4gHSjTsK6OIB0M07aCIBz2iiAc5SUohBlsiEkQjWyISRCJbIhJEJFs16jTzNPEdNO6XNOoJNPAhBQs07wodIQWXNek08zTwHSEKlzXoI6806RZQNOgWI69QNOg08R007pc06Q1NSTXnIls15jTnI1s15TTuNOYJNeQ08TTqCTTlCTXjNPQjWzTqDkQkrzTkFlAkrzTjFlCjiAayNOw066OIBqqnRDTziAZpsSKyATTqshIlshAxALIUNP6yEbMjrzTqFlA14oAIAAAAAAAAIxg04lCwNOI1BycEMQBQNPMWI69QUDTiUDTkFjTjFlBQsDT/NP40/TT8NPsiNPo05BY04xZQNPgiWzTmCBY0+CNbNOUIFlA09zIGNPY08whCBRBINPVXAQg19DT0FzXzNPM0/IgF+DT6I1s18jT5Ils18TT5I1s18DTzNPEdNPKXNe808zTwHTTylzXuNPoiWzTzCDXtNPI08wk17DTxNO8JNes08DTuCTXqsSKyATTvsgghBLIQMQCyB7OxIrIBNO6yEiWyEDEAshQ0/rIRszTvFjTuFlA16YAIAAAAAAAAHqE06VCwNOk1B4AEHNSuXzEAUDTzFlA06VA06xY06hZQUDTtFjTsFlBQsDT/NP40/TT8NPsiNO0WNOwWUDTrFjTqFlA0+DT3MgY09jTvCUIEMEkhBAxAAR9INPVXARA19DT0NfM091c4ARcURDTzIls18jTzI1s18TT6I1s18DTyiATgNPE0/ogE8zTwIhJBAC0krzTyFlAkrzTxFlCjiAT8logE+ElKIQZbIhJEI1siEkQiWyISRCRbNe9CACI08jTwHTT5IluXNe408TTwHTT5I1uXSTXtNO5JNO0MTTXvNPI0+SJbCDXuNPE0+SNbCDXtNPoiWzTvCTXsNPA07wg167EisgE077ISJbIQMQCyFDT8shGzgAgAAAAAAAAaGTTvFlCwNO8WNQeABN4bKfUxAFA08hY08RZQUDTvFlA07hY07RZQUDTsFjTrFlBQsDT/NP40/TT8NPsiNOwWNOsWUDTuFjTtFlA0+DT3MgY09jTyCEIDCkg09VcBWTX0NPRXACA18zT0VyA5NfI0/zT3VxggEkQ08iJbNfE08iNbNfA08iEGWzXvNPEhBQw08CEFDBA07zTwNPEIEhA07yEFDBA07yINEEQyCmAyCngJNPYJNe408lc4ARc17TT4Ils17DT4I1s16zTsNO4INeqxIrIBNOqyCCEEshA087IHs7EisgE067ISJbIQNPOyFDT+shGzgAgAAAAAAAAWDTTsFjTrFlA07hZQULA07BY06xZQNO4WUDUHgARWrXU8NPEWNPAWUDTvFlA08lcYIFA07RZRBwhQULA0/zT+NP00/DT7NO00+iNbIhIQNPkiWyISNPkjWyISEBA0+jT5NPs08jIGNO409gg06glCAfJIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A4ERWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAAAnv7AqNQexIrIBIQiyEDT/siGzsSKyASKyEiWyEDIJshUyCrIUNAMiW7IRs0ICEyISRCELiAJnIjQBEkQ0BEkiEkw0AhIRREk1BUlKSUgqNf8iWzX+VwggNf1XKAg1/IEwWzX7gATgHc6vNP9QNP4WUDT9UDT8UDT7FlCwIRMhCg1EIQuIAhexIrIBIrISJbIQMgqyFDT+shGzgQmvNfqABWFwcElENPsWUAM1+DIKYDIKeAkWNfexIrIBIRSyEDT7shiABElaCmiyGjEYFrIaNPqyGjT+FrIaszIKYDIKeAk09xcJFrcAPlcEAFA1+YAIAAAAAAAAEEA0+VCwNPlJNfgiWzX3NPhXCDlJNfYiWzX1NPYjWzX0NPYhBls18zT1IQUMNPQhBQwQNPM09DT1CBIQNPMhBQwQNPMiDRBEIjT3EkQhC4gBVbEisgEhCLIQIROyIiEUsiM0/LIlNP2yJoFgr7InMgOyKDIKsimztDw18oAIAAAAAAAAEFo08hZQsDTySTXxNP4WIlsTRCEGrzXwMQA0/jT6NPE08CKAEP//////////AAAAAAAAAAA08Ek09jIGNPdCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0+UEAMDT1FjT2UDT3FlA0+lA0+1A0/FA0/VAoSwFXAH9nKUsBV38DZ0ghBzUBMgY1AkIAVjT0NPUWUDT2UDT3FlA0+FA0+lA0+1A0/FA0/VA0/xZQKEsBVwB/ZylLAVd/O2dIJTUBMgY1AkIAHTEZgQUSRLEisgEisgghBLIQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkhBAgyBBJEMRYSRCEEQzEZIhJEQv/dIjUBIjUCQv/BNABJSiEECDUAOAcyChJEOBAhBBJEOAgSRIk0AElKSSEECDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiUkVIRJMCa9MUIk=",appClear:"Bg==",companionInfo:null,extraPages:1,mapDataKeys:0,mapDataSize:0,stateKeys:2,stateSize:186,unsupported:[],version:10,warnings:["Step 0 calls a remote object at /app/index.rsh:363:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards."]},_ETH={ABI:`[
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
                "name": "v4140",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v4141",
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
                "name": "v4142",
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
                "name": "v4143",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4144",
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
                "internalType": "bool",
                "name": "v4140",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v4141",
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
                "name": "v4142",
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
                "name": "v4143",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4144",
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
                "name": "v10172",
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
                    "name": "_Protocol_harvest0_720",
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
                    "name": "_Provider_deposit0_720",
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
                    "name": "_Provider_withdraw0_720",
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
                    "name": "_Trader_swapAForB0_720",
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
                    "name": "_Trader_swapBForA0_720",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v5162",
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
    "name": "_reach_oe_v10124",
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
    "name": "_reach_oe_v10175",
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
    "name": "_reach_oe_v4160",
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
    "name": "_reach_oe_v4186",
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
    "name": "_reach_oe_v5645",
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
    "name": "_reach_oe_v6681",
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
    "name": "_reach_oe_v7841",
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
    "name": "_reach_oe_v8984",
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
                "name": "v10172",
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
                    "name": "_Protocol_harvest0_720",
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
                    "name": "_Provider_deposit0_720",
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
                    "name": "_Provider_withdraw0_720",
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
                    "name": "_Trader_swapAForB0_720",
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
                    "name": "_Trader_swapBForA0_720",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v5162",
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
]`,Bytecode:"0x608060405260405162005c8738038062005c87833981016040819052620000269162000d44565b600080554360035562000038620008b2565b604080513381528351602080830191909152808501518051151583850152908101516001600160a01b03908116606080850191909152828501515160808086019190915290830151516001600160c01b03191660a0850152909101511660c082015290517fd3b5645add4f5895f5ee0b79e70dbc6ff85aad0f1cb6dcc4ce616f0276ef28e19181900360e00190a1620000d46001600862000600565b620000e23415600962000600565b8051600090819052815160209081018290528381015101516200010690306200062b565b62000112919062000e57565b6101608201526200012560004762000e57565b61014082015280516020808401510151604051600092633b02a71760e01b9262000156923092919060240162000eb4565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620001b2919062000f19565b60006040518083038185875af1925050503d8060008114620001f1576040519150601f19603f3d011682016040523d82523d6000602084013e620001f6565b606091505b5090925090506200020a8282600b6200070f565b5061016084015160208087015101516200022590306200062b565b62000231919062000e57565b6101808501819052620002479015600a62000600565b61014084015162000259904762000e57565b6020808601519190915281516200027891908301810190830162000f37565b6020808601805190910191909152516040808601829052517f11b886c8340af2b7a8d9564ce1a955727b90c461563f4f6f5d1f533276abca9c91620002bd9162000ffd565b60405180910390a16200037360648560400151602001516000015110620002e6576000620002f7565b606485604001516020015160200151105b620003045760006200032f565b6040850151602090810151805191015162000320919062001021565b85604001516020015160400151145b6200033c5760006200034d565b606485604001516020015160400151105b6200035a5760006200036b565b600085604001516020015160400151115b600c62000600565b604084015151620003879015600d62000600565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620004729062000971565b62000483969594939291906200106a565b604051809103906000f080158015620004a0573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f50aa605419450efe0709618c849a80b501e5c88465e8e51b33a8d521a581804791620004e891620010d5565b60405180910390a16020858101510151610100850180516001600160a01b039283169052515160e086015162000536929081169116146200052b5760016200052e565b60005b600e62000600565b61012084018051600090819052905160200152620005536200097f565b805133905260208087015181015182516001600160a01b03918216908301528651835160409081019190915260e088015184519216606092830152610120880180518551608090810191909152848601805160009052848b0151815187015282518151850152915182519094019390935290880180519093015181519092019190915280514360a09190910152905151905160c00152620005f48162000755565b505050505050620012b0565b81620006275760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620006579190620010d5565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162000697919062000f19565b60006040518083038185875af1925050503d8060008114620006d6576040519150601f19603f3d011682016040523d82523d6000602084013e620006db565b606091505b509092509050620006ef828260066200070f565b5080806020019051810190620007069190620010e9565b95945050505050565b60608315620007205750816200074e565b825115620007315782518084602001fd5b60405163100960cb60e01b8152600481018390526024016200061e565b9392505050565b602081015151156200080d576200076b620009a8565b81516020908101516001600160a01b039081168352835160409081015184840152845160609081015190921681850152828501805184015183860152805182015160808087019190915281519093015160a0860152519091015160c084015260026000554360015551620007e29183910162001112565b604051602081830303815290604052600290805190602001906200080892919062000a10565b505050565b6200081762000a9f565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e087015280519091015161010086015251909201516101208401526004600055436001559051620007e2918391016200119d565b604051806101a00160405280620008c862000b20565b8152602001620008d762000b42565b8152602001620008e662000b42565b8152602001620008f562000b5e565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260006020820181905260408201526060016200094762000b78565b81526020016200095662000b5e565b81526020016000815260200160008152602001600081525090565b6110298062004c5e83390190565b60405180604001604052806200099462000b96565b8152602001620009a362000bcd565b905290565b6040518060e0016040528060006001600160a01b03168152602001620009cd62000b20565b815260006020820152604001620009e362000b5e565b8152602001620009f262000b5e565b815260200162000a0162000b5e565b8152602001620009a362000c2c565b82805462000a1e9062001273565b90600052602060002090601f01602090048101928262000a42576000855562000a8d565b82601f1062000a5d57805160ff191683800117855562000a8d565b8280016001018555821562000a8d579182015b8281111562000a8d57825182559160200191906001019062000a70565b5062000a9b92915062000c66565b5090565b60408051610140810182526000808252602082015290810162000ac162000b20565b81526000602082015260400162000ad762000b5e565b815260200162000ae662000b5e565b815260200162000af562000b5e565b815260200162000b0462000b5e565b815260200162000b1362000c2c565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b604051806040016040528060008152602001620009a362000c2c565b604051806040016040528060008152602001600081525090565b60405180602001604052806001906020820280368337509192915050565b6040805160a0810182526000808252602082015290810162000bb762000b20565b815260006020820152604001620009a362000b5e565b6040518060e0016040528060001515815260200162000beb62000b5e565b815260200162000bfa62000b5e565b815260200162000c0962000b5e565b815260200162000c1862000c2c565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000a9b576000815560010162000c67565b604080519081016001600160401b038111828210171562000cae57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000cae57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000cae57634e487b7160e01b600052604160045260246000fd5b8051801515811462000d2757600080fd5b919050565b80516001600160a01b038116811462000d2757600080fd5b600081830360c081121562000d5857600080fd5b62000d6262000c7d565b8351815260a0601f198301121562000d7957600080fd5b62000d8362000cb4565b62000d916020860162000d16565b815262000da16040860162000d2c565b60208201526020605f198401121562000db957600080fd5b62000dc362000ce5565b6060860151815260408201526020607f198401121562000de257600080fd5b62000dec62000ce5565b60808601519093506001600160c01b03198116811462000e0b57600080fd5b83526060810183905262000e2260a0860162000d2c565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b60008282101562000e6c5762000e6c62000e41565b500390565b80516002811062000e9257634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062000ed5602084018662000e71565b808416608084015250949350505050565b60005b8381101562000f0357818101518382015260200162000ee9565b8381111562000f13576000848401525b50505050565b6000825162000f2d81846020870162000ee6565b9190910192915050565b600060a0828403121562000f4a57600080fd5b60405160a081016001600160401b038111828210171562000f7b57634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015262000fa66060840162000d2c565b606082015262000fb96080840162000d16565b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c08301916200101a9084018262000fc5565b5092915050565b6000821982111562001037576200103762000e41565b500190565b600081518084526200105681602086016020860162000ee6565b601f01601f19169290920160200192915050565b60c0815260006200107f60c08301896200103c565b82810360208401526200109381896200103c565b90508281036040840152620010a981886200103c565b90508281036060840152620010bf81876200103c565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b600060208284031215620010fc57600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b039081168252602080840151610200840192916200113c9085018262000e71565b50604084015116608083015260608301516200115c60a084018262001103565b5060808301516200117160e084018262001103565b5060a08301516200118761012084018262001103565b5060c08301516200101a61016084018262000fc5565b600061028082019050620011b382845162000e34565b6020830151620011c7602084018262000e34565b506040830151620011dc604084018262000e71565b506060830151620011f160a084018262000e34565b5060808301516200120660c084018262001103565b5060a08301516101006200121d8185018362001103565b60c085015191506200123461014085018362001103565b60e085015191506200124b61018085018362001103565b8401519050620012606101c084018262000fc5565b5061012083015161026083015292915050565b600181811c908216806200128857607f821691505b60208210811415620012aa57634e487b7160e01b600052602260045260246000fd5b50919050565b61399e80620012c06000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633e59bac4146101095780634012e02e1461011c5780634272dbc21461013e5780638323075714610151578063842463da14610166578063ab53f2c61461017e578063c8867ae9146101a1578063d02b6307146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612e71565b6101da565b6040516100c19190612eb6565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612ed9565b610249565b6040516100c19190612ef2565b61009f610117366004612f00565b6102a7565b34801561012857600080fd5b506101316102cb565b6040516100c19190612fa1565b6100db61014c36600461305a565b610626565b34801561015d57600080fd5b506001546100db565b61016e61067d565b60405190151581526020016100c1565b34801561018a57600080fd5b506101936106b4565b6040516100c19291906130a2565b6100fc6101af3660046130dc565b610751565b61009f6101c23660046130fe565b6107b6565b6100fc6101d53660046130dc565b6107d6565b6101e26125be565b6101ea6125de565b6101f261262d565b6101fa612647565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a828461083b565b50506020015190505b92915050565b61025161268a565b6102596125de565b61026161262d565b610269612647565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b828461083b565b50506060015192915050565b6102af6125de565b6102c76102c136849003840184613111565b82611e8a565b5050565b6102d36126a4565b60026000541415610476576000600280546102ed90613196565b80601f016020809104026020016040519081016040528092919081815260200182805461031990613196565b80156103665780601f1061033b57610100808354040283529160200191610366565b820191906000526020600020905b81548152906001019060200180831161034957829003601f168201915b505050505080602001905181019061037e91906132e4565b9050610388612702565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151815184015260c080870180515160408089018051929092528251870151825188015282518101518251820152825188015182516001600160a01b03918216908a0152925186015182519015159087015260a0808b018051518b8b01805191909152905189015181518a0152828c0151888c0180519187169091529a518b518a015295518a5190920191909152905188519097019690965291518651909301929092528551855191169301929092529092015181519092019190915251919050565b600460005414156106175760006002805461049090613196565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc90613196565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b505050505080602001905181019061052191906133ad565b905061052b612702565b60a080830180515183515251602090810151835182015260c080850180515183860180519190915290518301518151840152610100860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935160809081015184519015159082015260e08b01805151838c01805191909152905189015181518a0152828c0151828c0180519188169091529a518b518a015295518a51840152925189519091015292518751909101529286015185519316929093019190915292015181519092019190915251919050565b61062360006007612021565b90565b60006106306125de565b61063861262d565b610640612647565b604080516020808201835287825283830191909152600183528151808201909252828252830152610671828461083b565b50506040015192915050565b60006106876125de565b61068f612749565b60408051602080820190925260008152908201526106ad8183611e8a565b5051919050565b6000606060005460028080546106c990613196565b80601f01602080910402602001604051908101604052809291908181526020018280546106f590613196565b80156107425780601f1061071757610100808354040283529160200191610742565b820191906000526020600020905b81548152906001019060200180831161072557829003601f168201915b50505050509050915091509091565b61075961268a565b6107616125de565b61076961262d565b610771612647565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107a9828461083b565b5050608001519392505050565b6107be6125de565b6102c76107d03684900384018461350c565b8261083b565b6107de61268a565b6107e66125de565b6107ee61262d565b6107f6612647565b604080518082018252878152602080820188905260a084019190915260048352815180820190925282825283015261082e828461083b565b505060a001519392505050565b61084b600460005414602a612021565b815161086690158061085f57508251600154145b602b612021565b60008080556002805461087890613196565b80601f01602080910402602001604051908101604052809291908181526020018280546108a490613196565b80156108f15780601f106108c6576101008083540402835291602001916108f1565b820191906000526020600020905b8154815290600101906020018083116108d457829003601f168201915b505050505080602001905181019061090991906133ad565b9050610913612773565b7f0c36ecdcbe3fc67e26de932e0ef4b0434fa375ec7e902fe67403914b10d86be133856040516109449291906135df565b60405180910390a1600060208501515151600481111561096657610966612f57565b1415610d3557602080850151510151815261098334156012612021565b61099d6109963384606001516000612047565b6013612021565b6109b76109b03384602001516000612047565b6014612021565b6109e3826101000151606001516001600160a01b031683600001516001600160a01b0316146015612021565b80516020015151610a73906064116109fc576000610a0d565b606482600001516020015160200151105b610a18576000610a3b565b81516020908101518051910151610a2f91906136a5565b82516020015160400151145b610a46576000610a54565b815160200151604001516064115b610a5f576000610a6c565b8151602001516040015115155b6016612021565b61012082015147908110610a9657610120830151610a9190826136bd565b610a99565b60005b6020830181905260e084015151610ab091906136a5565b604080840182905283515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610aef573d6000803e3d6000fd5b50610b0f83602001518360000151600001518560e001516020015161205f565b60e08301805151606084018051919091529051602090810151825182015290516080840180519190915281840151815190920191909152516040517fa3a6d3172d65b955ab8d0a450b2a2f85233e9c2b3bb7aa0654cea0f0ce27b54091610b7591612eb6565b60405180910390a160808083015160208087019190915283518101515160a085018051919091528451820151820151815183015284518201516040908101518251820152855183015160609081015183516001600160a01b039091169101528551909201518301518151901515930192909252905190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c17916136d4565b60405180910390a1610c27612a0f565b835181516001600160a01b0391821690526020808601518351908316908201526040808701518451909101526060808701518451931692019190915260808086015183518201528451909101510151610c81576000610c8c565b60a084015160200151155b610c97576000610cb4565b60c08401515115610ca9576000610cb4565b60c084015160200151155b6020808301805192151590925260a080870151835183015260c08701518351604090810191909152608080890151855160600152875184015185519091015292514391015290840151610120860151918501519091610d12916136a5565b610d1c91906136bd565b602082015160c00152610d2e81612073565b5050611e84565b6001602085015151516004811115610d4f57610d4f612f57565b1415611119576020840151516040015160c082015261010082015160800151610d8790610d7d576001610d80565b60005b6017612021565b60c08101515151610d9b9034146018612021565b610db5610dae3384606001516000612047565b6019612021565b610dda610dd33384602001518460c001516000015160200151612047565b601a612021565b60a082015160200151610e105760c08101515160208101519051610e0691610e01916136e2565b6121c3565b60e0820152610e9e565b60c0808301515160a0840151602001519183015151519091610e31916136e2565b610e3b9190613701565b61010082015260c08083015160209081015160a08501518201519284015151909101519091610e69916136e2565b610e739190613701565b610120820181905261010082015110610e9157806101200151610e98565b8061010001515b60e08201525b60c08083015151908201515151610eb591906136a5565b61014082015260c08083015160209081015191830151510151610ed891906136a5565b61016082019081526101408201516101808301805191909152905190516020015260e081015160a083015151610f0e91906136bd565b6101a082015260e081015160a083015160200151610f2c91906136a5565b6101c082019081526101a08201516101e083018051919091529051905160200152606082015160e0820151610f639190339061205f565b7f79b04f21bd133f23ef2ae23dbc1d7474a3b35b7104efb5fc61c121d3d38c19008160e00151604051610f9891815260200190565b60405180910390a160e08101805160408086019190915260c083018051515161020085018051919091529051516020908101518251820152610140850151610220860180519190915261016086015181518301526101a086015161024087018051919091526101c0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb9461104794339491939192613723565b60405180910390a1611057612a0f565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260808087015185518201528285018051600090526101e087015181519094019390935261018086015183519092019190915260e0860151825190930192909252610100850151815190920191909152514360a09091015260c0820151515161012084015161110191906136a5565b602082015160c0015261111381612073565b50611e84565b600260208501515151600481111561113357611133612f57565b141561148657602084015151606001516102608201526111553415601b612021565b61117761117033846060015184610260015160000151612047565b601c612021565b61119161118a3384602001516000612047565b601d612021565b60a08201516020015160c083015151610260830151516111b191906136e2565b6111bb9190613701565b61028082015260a082015160209081015160c084015190910151610260830151516111e691906136e2565b6111f09190613701565b6102a08201526102608101515160a08301515161120d91906136a5565b6102c08201526102608101515160a08301516020015161122d91906136bd565b6102e082019081526102c08201516103008301805191909152905190516020015261028081015160c08301515161126491906136bd565b6103208201526102a081015160c08301516020015161128391906136bd565b610340820190815261032082015161036083018051919091529051905160200152610280810151604051339180156108fc02916000818181858888f193505050501580156112d5573d6000803e3d6000fd5b506112ea826020015133836102a0015161205f565b61028081015161038082018051919091526102a0820151815160200152516040517fcd568ff39f8ac11472a061a30900f0bae0d072781e26abe338d6d3cbf5d940099161133691612ef2565b60405180910390a16103808101805160608501526103208201516103a0830180519190915261034083015181516020908101919091526102c08401516103c085018051919091526102e0850151815190920191909152610260840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef855946113cd94339491939092613761565b60405180910390a16113dd612a0f565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905261030087015181519094019390935261036086015183519092019190915260e0860151825190930192909252610100850151815190920191909152514360a09091015261028082015161012084015161110191906136bd565b60036020850151515160048111156114a0576114a0612f57565b141561197a576020840151516080908101516103e083015261010083015101516114d9906114cf5760016114d2565b60005b601e612021565b6103e08101515160c0830151516114f091906136a5565b6104008201526101008201516040015161150c906127106136bd565b6103e08201515161151d91906136e2565b610420820181905260c08301805151610440840181905290516020015161046084015261154d90612710906136e2565b61155791906136a5565b81610460015182610420015161156d91906136e2565b6115779190613701565b61048082015261010082015160408101519051606491906115999083906136e2565b6115a39190613701565b61048083015161040084015160c0860151602001516103e0860151516115c991906136e2565b6115d39190613701565b6115dd91906136bd565b6115e791906136e2565b6115f19190613701565b6104a0820152610100820151516103e08201515161271091611612916136e2565b61161c9190613701565b6104c082018181526104e0830180519290925290516000602091820181905261050084018051919091526104a08401805191518301919091525161040084015160c08601519092015192519092611672916136e2565b61167c9190613701565b1161168c57806105000151611693565b806104e001515b6105208201819052516104008201516116ac91906136bd565b81610540018181525050806105200151602001518161048001518360c00151602001516116d991906136bd565b6116e391906136bd565b6105608201526104808101516103e082015160200151611706911015601f612021565b61173e81610460015182610440015161171f91906136e2565b82610560015183610540015161173591906136e2565b10156020612021565b6103e0810151516117529034146021612021565b61176c6117653384606001516000612047565b6022612021565b61178661177f3384602001516000612047565b6023612021565b61054081015161058082018051919091526105608201519051602001526105208101515160e0830151516117ba91906136a5565b6105a08201515261052081015160209081015160e0840151909101516117e091906136a5565b816105a00151602001818152505061180282602001513383610480015161205f565b6105c08101805160009052610480820151815160200152516040517f0ac043cb085efcfebcf381062d382aa6b6f2fb97080a5e8d63039190dc7095689161184891612ef2565b60405180910390a16105c08101805160808501526103e0820151516105e08301805191909152805160006020918201526105408401516106008501805191909152610560850151815190920191909152905191519051604051600080516020613949833981519152936118c19333939192909190613793565b60405180910390a16118d1612a0f565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526105808701518151909301929092526105a08601518251909401939093526101008601518151909301929092529051439101526103e08201515161012084015161110191906136a5565b600460208501515151600481111561199457611994612f57565b1415611e845760208401515160a00151610620820152610100820151608001516119cd906119c35760016119c6565b60005b6024612021565b6106208101515160c0830151602001516119e791906136a5565b61064082015261010082015160400151611a03906127106136bd565b61062082015151611a1491906136e2565b610660820181905260c0830180516020015161068084018190529051516106a0840152611a4490612710906136e2565b611a4e91906136a5565b816106a00151826106600151611a6491906136e2565b611a6e9190613701565b6106c08201526101008201516040810151905160649190611a909083906136e2565b611a9a9190613701565b6106c083015161064084015160c08601515161062086015151611abd91906136e2565b611ac79190613701565b611ad191906136bd565b611adb91906136e2565b611ae59190613701565b6106e0820152610100820151516106208201515161271091611b06916136e2565b611b109190613701565b6107008201818152610720830180519290925290516000602091820181905261074084018051919091526106e0840180519151909201525161064083015160c085015151925191929091611b6491906136e2565b611b6e9190613701565b11611b7e57806107400151611b85565b8061072001515b6107608201819052602001516106c082015160c084015151611ba791906136bd565b611bb191906136bd565b61078082015261076081015151610640820151611bce91906136bd565b6107a08201526106c081015161062082015160200151611bf19110156025612021565b611c29816106800151826106a00151611c0a91906136e2565b826107a00151836107800151611c2091906136e2565b10156026612021565b611c3534156027612021565b611c4f611c483384606001516000612047565b6028612021565b611c71611c6a33846020015184610620015160000151612047565b6029612021565b6107808101516107c082018051919091526107a08201519051602090810191909152610760820151015160e083015151611cab91906136a5565b6107e0820151526107608101515160e083015160200151611ccc91906136a5565b6107e0820151602001526106c0810151604051339180156108fc02916000818181858888f19350505050158015611d07573d6000803e3d6000fd5b506106c0810151610800820180519190915280516000602090910152516040517fc3a0cbe28e9eaaec7e6926efcef1e0b606df538f211f6291e2a9480cad3fb19d91611d5291612ef2565b60405180910390a16108008101805160a0850152610820820180516000905261062083015151815160209081019190915261078084015161084085018051919091526107a085015181519092019190915290519151905160405160008051602061394983398151915293611dcc9333939192909190613793565b60405180910390a1611ddc612a0f565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526107c08701518151909301929092526107e08601518251909401939093526101008601518151909301929092529051439101526106c082015161012084015161110191906136bd565b50505050565b611e9a6002600054146010612021565b8151611eb5901580611eae57508251600154145b6011612021565b600080805560028054611ec790613196565b80601f0160208091040260200160405190810160405280929190818152602001828054611ef390613196565b8015611f405780601f10611f1557610100808354040283529160200191611f40565b820191906000526020600020905b815481529060010190602001808311611f2357829003601f168201915b5050505050806020019051810190611f5891906132e4565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1611fb03415600f612021565b604051600081527f1abe6635a6bf11359e3428d5bdceef88135f6b48fc810bbe8af0661df0f6abf49060200160405180910390a1600082526040810151611ff990600019612233565b6120068160400151612246565b6000808055600181905561201c90600290612a2f565b505050565b816102c75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061205583853085612258565b90505b9392505050565b61206a838383612332565b61201c57600080fd5b6020810151511561211f57612086612a69565b81516020908101516001600160a01b039081168352835160409081015184840152845160609081015190921681850152828501805184015183860152805182015160808087019190915281519093015160a0860152519091015160c0840152600260005543600155516120fb918391016137ca565b6040516020818303038152906040526002908051906020019061201c929190612ac7565b612127612b4b565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e0870152805190910151610100860152519092015161012084015260046000554360015590516120fb9183910161384b565b50565b6000600382111561222457508060006121dd600283613701565b6121e89060016136a5565b90505b8181101561221e579050806002816122038186613701565b61220d91906136a5565b6122179190613701565b90506121eb565b50919050565b811561222e575060015b919050565b61223d8282612403565b6102c757600080fd5b61224f816124de565b6121c057600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916122bf9161390f565b60006040518083038185875af1925050503d80600081146122fc576040519150601f19603f3d011682016040523d82523d6000602084013e612301565b606091505b509150915061231282826001612583565b5080806020019051810190612327919061392b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916123919161390f565b60006040518083038185875af1925050503d80600081146123ce576040519150601f19603f3d011682016040523d82523d6000602084013e6123d3565b606091505b50915091506123e482826002612583565b50808060200190518101906123f9919061392b565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161242f91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161246d919061390f565b60006040518083038185875af1925050503d80600081146124aa576040519150601f19603f3d011682016040523d82523d6000602084013e6124af565b606091505b50915091506124c082826003612583565b50808060200190518101906124d5919061392b565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916125259161390f565b60006040518083038185875af1925050503d8060008114612562576040519150601f19603f3d011682016040523d82523d6000602084013e612567565b606091505b509150915061257882826004612583565b506001949350505050565b60608315612592575081612058565b8251156125a25782518084602001fd5b60405163100960cb60e01b81526004810183905260240161203e565b60405180604001604052806125d161268a565b8152602001600081525090565b6040518060c001604052806000151581526020016125fa6125be565b81526020016000815260200161260e61268a565b815260200161261b61268a565b815260200161262861268a565b905290565b604051806040016040528060008152602001612628612bb3565b6040805160c081019091528060008152602001612662612bc6565b815260200161266f612be9565b815260200161260e6040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016126c761268a565b81526020016126d461268a565b81526020016126e1612bfc565b81526020016126ee61268a565b815260006020820152604001612628612c36565b6040518060a0016040528061271561268a565b815260200161272261268a565b815260200161272f612bfc565b815260200161273c61268a565b81526020016126286126a4565b60405180604001604052806000815260200161262860405180602001604052806000151581525090565b604051806108600160405280612787612bc6565b815260200160008152602001600081526020016127a261268a565b81526020016127af6125be565b81526020016127bc612bfc565b81526020016127c9612be9565b815260200160008152602001600081526020016000815260200160008152602001600081526020016127f961268a565b8152602001600081526020016000815260200161281461268a565b815260200161282161268a565b815260200161282e61268a565b815260200161283b61268a565b81526020016128566040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000815260200161287f61268a565b8152602001600081526020016000815260200161289a61268a565b81526020016128a761268a565b81526020016128b461268a565b81526020016128c161268a565b81526020016128ce61268a565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161290c61268a565b815260200161291961268a565b815260200161292661268a565b8152602001600081526020016000815260200161294161268a565b815260200161294e61268a565b815260200161295b61268a565b815260200161296861268a565b815260200161297561268a565b815260200161298261268a565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129c061268a565b81526020016129cd61268a565b81526020016129da61268a565b815260200160008152602001600081526020016129f561268a565b8152602001612a0261268a565b815260200161260e61268a565b6040518060400160405280612a22612c58565b8152602001612628612c8b565b508054612a3b90613196565b6000825580601f10612a4b575050565b601f0160209004906000526020600020908101906121c09190612ce2565b6040518060e0016040528060006001600160a01b03168152602001612a8c612c36565b815260006020820152604001612aa061268a565b8152602001612aad61268a565b8152602001612aba61268a565b8152602001612628612bfc565b828054612ad390613196565b90600052602060002090601f016020900481019282612af55760008555612b3b565b82601f10612b0e57805160ff1916838001178555612b3b565b82800160010185558215612b3b579182015b82811115612b3b578251825591602001919060010190612b20565b50612b47929150612ce2565b5090565b604080516101408101825260008082526020820152908101612b6b612c36565b815260006020820152604001612b7f61268a565b8152602001612b8c61268a565b8152602001612b9961268a565b8152602001612ba661268a565b81526020016125d1612bfc565b6040518060200160405280612628612647565b604051806040016040528060006001600160a01b03168152602001612628612bfc565b604051806020016040528061262861268a565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040805160a08101825260008082526020820152908101612c77612c36565b81526000602082015260400161262861268a565b6040518060e00160405280600015158152602001612ca761268a565b8152602001612cb461268a565b8152602001612cc161268a565b8152602001612cce612bfc565b815260200160008152602001600081525090565b5b80821115612b475760008155600101612ce3565b6001600160a01b03811681146121c057600080fd5b60405160a081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612d3c57634e487b7160e01b600052604160045260246000fd5b80151581146121c057600080fd5b600060a08284031215612e2357600080fd5b612e2b612d0c565b90508135815260208201356020820152604082013560408201526060820135612e5381612cf7565b60608201526080820135612e6681612e03565b608082015292915050565b60008060c08385031215612e8457600080fd5b8235612e8f81612cf7565b9150612e9e8460208501612e11565b90509250929050565b80518252602090810151910152565b6000606082019050612ec9828451612ea7565b6020830151604083015292915050565b600060208284031215612eeb57600080fd5b5035919050565b604081016102438284612ea7565b60006040828403121561221e57600080fd5b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b805160028110612f7f57612f7f612f57565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015161020084019291612fc990850182612ea7565b506040840151612fdc6060850182612ea7565b506060840151612fef60a0850182612f1f565b506080840151613003610140850182612ea7565b5060a08401511661018083015260c08301516130236101a0840182612f6d565b5092915050565b60006040828403121561303c57600080fd5b613044612d42565b9050813581526020820135602082015292915050565b60006040828403121561306c57600080fd5b612058838361302a565b60005b83811015613091578181015183820152602001613079565b83811115611e845750506000910152565b82815260406020820152600082518060408401526130c7816060850160208701613076565b601f01601f1916919091016060019392505050565b600080604083850312156130ef57600080fd5b50508035926020909101359150565b60006101e0828403121561221e57600080fd5b6000818303604081121561312457600080fd5b604080519081016001600160401b038111828210171561315457634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561316d57600080fd5b613175612d72565b9150602084013561318581612e03565b825260208101919091529392505050565b600181811c908216806131aa57607f821691505b6020821081141561221e57634e487b7160e01b600052602260045260246000fd5b805161222e81612cf7565b6000606082840312156131e857600080fd5b604051606081016001600160401b038111828210171561321857634e487b7160e01b600052604160045260246000fd5b806040525080915082516002811061322f57600080fd5b8152602083015161323f81612e03565b6020820152604083015161325281612cf7565b6040919091015292915050565b60006040828403121561327157600080fd5b613279612d42565b9050815181526020820151602082015292915050565b600060a082840312156132a157600080fd5b6132a9612d0c565b905081518152602082015160208201526040820151604082015260608201516132d181612cf7565b60608201526080820151612e6681612e03565b600061020082840312156132f757600080fd5b60405160e081016001600160401b038111828210171561332757634e487b7160e01b600052604160045260246000fd5b604052825161333581612cf7565b815261334484602085016131d6565b6020820152608083015161335781612cf7565b60408201526133698460a0850161325f565b606082015261337b8460e0850161325f565b608082015261338e84610120850161325f565b60a08201526133a184610160850161328f565b60c08201529392505050565b600061028082840312156133c057600080fd5b6133c8612da2565b6133d1836131cb565b81526133df602084016131cb565b60208201526133f184604085016131d6565b604082015261340260a084016131cb565b60608201526134148460c0850161325f565b60808201526101006134288582860161325f565b60a083015261343b85610140860161325f565b60c083015261344e85610180860161325f565b60e0830152613461856101c0860161328f565b90820152610260929092015161012083015250919050565b600060c0828403121561348b57600080fd5b613493612d42565b905081356134a081612cf7565b81526134af8360208401612e11565b602082015292915050565b6000604082840312156134cc57600080fd5b6134d4612d72565b90506134e0838361302a565b815292915050565b6000602082840312156134fa57600080fd5b613502612d72565b9135825250919050565b60008183036101e081121561352057600080fd5b613528612d42565b833581526101c0601f198301121561353f57600080fd5b613547612d72565b9150613551612dd3565b60208501356005811061356357600080fd5b81526135728660408701613479565b60208201526135858661010087016134ba565b60408201526135988661014087016134e8565b60608201526135ab86610160870161302a565b60808201526135be866101a0870161302a565b60a0820152825260208101919091529392505050565b6102c7828251612ea7565b6001600160a01b038381168252825160208084019190915283015151805161020084019291906005811061361557613615612f57565b60408501526020818101518051909316606086015291909101519061363d6080850183612f1f565b604081015191506136526101208501836135d4565b60608101515161016085015260808101519150613673610180850183612ea7565b60a0015190506136876101c0840182612ea7565b509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156136b8576136b861368f565b500190565b6000828210156136cf576136cf61368f565b500390565b60a081016102438284612f1f565b60008160001904831182151516156136fc576136fc61368f565b500290565b60008261371e57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016137416020830187612ea7565b8460608301526137546080830185612ea7565b6123f960c0830184612ea7565b6001600160a01b03861681526020810185905261010081016137866040830186612ea7565b6137546080830185612ea7565b6001600160a01b038516815260e081016137b06020830186612ea7565b6137bd6060830185612ea7565b6124d560a0830184612ea7565b81516001600160a01b039081168252602080840151610200840192916137f290850182612f6d565b506040840151166080830152606083015161381060a0840182612ea7565b50608083015161382360e0840182612ea7565b5060a0830151613837610120840182612ea7565b5060c0830151613023610160840182612f1f565b60006102808201905061385f828451612f12565b60208301516138716020840182612f12565b5060408301516138846040840182612f6d565b50606083015161389760a0840182612f12565b5060808301516138aa60c0840182612ea7565b5060a08301516101006138bf81850183612ea7565b60c085015191506138d4610140850183612ea7565b60e085015191506138e9610180850183612ea7565b84015190506138fc6101c0840182612f1f565b5061012083015161026083015292915050565b60008251613921818460208701613076565b9190910192915050565b60006020828403121561393d57600080fd5b815161205881612e0356fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a2646970667358221220b11fbbb32502970803fc92b483649b51c800d51de896f3c64f9ef5df2528a0cf64736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212203722dbc0cf26eb133af579e77b6e86ac0caecce09dbaaed38182b0dee1459b3264736f6c634300080c0033",BytecodeLen:23687,Which:"o1",version:7,views:{Info:"Info"}},_stateSourceMap={2:{at:"./index.rsh:523:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./index.rsh:529:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},4:{at:"./index.rsh:378:19:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Admin:Admin,Protocol_delete:Protocol_delete,Protocol_harvest:Protocol_harvest,Provider_deposit:Provider_deposit,Provider_withdraw:Provider_withdraw,Trader_swapAForB:Trader_swapAForB,Trader_swapBForA:Trader_swapBForA},_APIs={Protocol_delete:Protocol_delete,Protocol_harvest:Protocol_harvest,Provider:{deposit:Provider_deposit,withdraw:Provider_withdraw},Trader:{swapAForB:Trader_swapAForB,swapBForA:Trader_swapBForA}};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Admin,_Protocol_delete2,_Protocol_harvest4,_Provider_deposit4,_Provider_withdraw4,_Trader_swapAForB4,_Trader_swapBForA4,Protocol_delete,Protocol_harvest,Provider_deposit,Provider_withdraw,Trader_swapAForB,Trader_swapBForA,_stateSourceMap,_Connectors,_Participants,_APIs};