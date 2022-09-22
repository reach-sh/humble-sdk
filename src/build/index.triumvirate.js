const _version="0.1.10",_versionHash="0.1.10 (2604daf0)",_backendVersion=16;function getExports(e){const b=e.reachStdlib;e=b.T_UInt;const u=b.T_Struct([["A",e],["B",e]]),m=b.T_Bool;var n=b.T_Address;const f=b.T_Struct([["protoFee",e],["lpFee",e],["totFee",e],["protoAddr",n],["locked",m]]);return{computeMint_:(e,n,t)=>{var e=b.protect(u,e,null),n=b.protect(u,n,null),t=b.protect(u,t,null),a=e.A,e=e.B,i=n.A,n=n.B,t=t.B;let r;var o,d=b.eq(t,b.checkedBigNumberify("284:19:decimal",b.UInt_max,"0"));return r=d?(d=b.cast("UInt","UInt256",a,!1),o=b.cast("UInt","UInt256",e,!1),d=b.mul256(d,o),o=b.sqrt256(d),b.cast("UInt256","UInt",o,!1)):(d=b.muldiv(a,t,i),o=b.muldiv(e,t,n),b.lt(d,o)?d:o)},computeSwap_:(e,n,t,a)=>{var e=b.protect(m,e,null),n=b.protect(u,n,null),t=b.protect(u,t,null),a=b.protect(f,a,null),i=n.A,n=n.B,r=t.A,t=t.B,o=a.protoFee,d=a.lpFee,a=a.totFee,s=b.lt(o,b.checkedBigNumberify("./index.rsh:72:14:decimal",b.UInt_max,"100")),c=b.lt(d,b.checkedBigNumberify("./index.rsh:73:14:decimal",b.UInt_max,"100")),s=!!s&&c,c=b.add(d,o),d=b.eq(a,c),c=!!s&&d,s=b.lt(a,b.checkedBigNumberify("./index.rsh:75:15:decimal",b.UInt_max,"100")),d=!!c&&s,c=b.gt(a,b.checkedBigNumberify("./index.rsh:76:15:decimal",b.UInt_max,"0")),s=!!d&&c,d=(b.assert(s,{at:"<top level>",fs:[],msg:null,who:"Module"}),b.gt(b.UInt_max,b.checkedBigNumberify("./index.rsh:70:22:decimal",b.UInt_max,"10000")));b.assert(d,{at:"275:10:application",fs:['at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"});let p;var l=(p=e?(c=b.eq(n,b.checkedBigNumberify("./index.rsh:262:18:decimal",b.UInt_max,"0")),b.assert(c,{at:"./index.rsh:262:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),s=b.add(r,i),d=b.muldiv(i,t,s),e=b.cast("UInt","UInt256",i,!1),c=b.cast("UInt","UInt256",a,!1),c=b.sub256(b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),c),e=b.mul256(e,c),c=b.cast("UInt","UInt256",r,!1),c=b.mul256(c,b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),c=b.add256(c,e),l=b.cast("UInt","UInt256",t,!1),e=b.mul256(e,l),l=b.div256(e,c),e=b.cast("UInt256","UInt",l,!1),c=b.sub(d,e),l=b.mul(o,b.checkedBigNumberify("./index.rsh:243:40:decimal",b.UInt_max,"100")),d=b.div(l,a),l=b.muldiv(c,d,b.checkedBigNumberify("./index.rsh:245:54:decimal",b.UInt_max,"100")),c=b.muldiv(i,o,b.checkedBigNumberify("./index.rsh:247:49:decimal",b.UInt_max,"10000")),d=b.muldiv(c,t,s),s=b.gt(d,l),d=[c,b.checkedBigNumberify("<builtin>",b.UInt_max,"0")],c=[b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),l],s=(l=s?d:c)[b.checkedBigNumberify("./index.rsh:263:19:array",b.UInt_max,"0")],d=l[b.checkedBigNumberify("./index.rsh:263:19:array",b.UInt_max,"1")],[{A:b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),B:e},{A:s,B:d}]):(c=b.eq(i,b.checkedBigNumberify("./index.rsh:267:18:decimal",b.UInt_max,"0")),b.assert(c,{at:"./index.rsh:267:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),l=b.add(t,n),e=b.muldiv(n,r,l),s=b.cast("UInt","UInt256",n,!1),d=b.cast("UInt","UInt256",a,!1),i=b.sub256(b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),d),c=b.mul256(s,i),d=b.cast("UInt","UInt256",t,!1),s=b.mul256(d,b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),i=b.add256(s,c),t=b.cast("UInt","UInt256",r,!1),d=b.mul256(c,t),s=b.div256(d,i),c=b.cast("UInt256","UInt",s,!1),t=b.sub(e,c),d=b.mul(o,b.checkedBigNumberify("./index.rsh:243:40:decimal",b.UInt_max,"100")),i=b.div(d,a),s=b.muldiv(t,i,b.checkedBigNumberify("./index.rsh:245:54:decimal",b.UInt_max,"100")),e=b.muldiv(n,o,b.checkedBigNumberify("./index.rsh:247:49:decimal",b.UInt_max,"10000")),d=b.muldiv(e,r,l),a=b.gt(d,s),t=[e,b.checkedBigNumberify("<builtin>",b.UInt_max,"0")],i=[b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),s],o=(n=a?t:i)[b.checkedBigNumberify("./index.rsh:268:19:array",b.UInt_max,"0")],r=n[b.checkedBigNumberify("./index.rsh:268:19:array",b.UInt_max,"1")],[{A:c,B:b.checkedBigNumberify("<builtin>",b.UInt_max,"0")},{A:r,B:o}]))[b.checkedBigNumberify("276:11:array",b.UInt_max,"0")],d=p[b.checkedBigNumberify("276:11:array",b.UInt_max,"1")];return[{A:l.A,B:l.B},{A:d.A,B:d.B}]}}}function _getEvents(e){var e=e.reachStdlib,n=e.T_Address,t=e.T_Contract,a=e.T_Null,i=e.T_Token,r=e.T_Data({None:a,Some:i}),o=e.T_Tuple([t,r,i,n]),d=e.T_UInt,s=e.T_Bool,s=e.T_Struct([["protoFee",d],["lpFee",d],["totFee",d],["protoAddr",n],["locked",s]]),c=e.T_Array(n,e.checkedBigNumberify("<builtin>",e.UInt_max,"3")),e=e.T_Data({Harvest:o,Kill:a,NewInfo:s,NewTriumvirs:c,NoOp:a,Rewards:n});return{Propose:[n,e],Register:[t,r,i],Support:[n,d,e]}}function _getViews(e,n){const d=e.reachStdlib;var e=d.T_Contract,t=d.T_Null,a=d.T_Token,i=d.T_Data({None:t,Some:a}),r=d.T_Address,e=d.T_Tuple([e,i,a,r]),i=d.T_UInt,a=d.T_Bool,o=d.T_Struct([["protoFee",i],["lpFee",i],["totFee",i],["protoAddr",r],["locked",a]]),s=d.T_Array(r,d.checkedBigNumberify("<builtin>",d.UInt_max,"3")),e=d.T_Data({Harvest:e,Kill:t,NewInfo:o,NewTriumvirs:s,NoOp:t,Rewards:r}),t=d.T_Array(e,d.checkedBigNumberify("<builtin>",d.UInt_max,"3")),a=d.T_Object({locked:a,lpFee:i,protoAddr:r,protoFee:i,totFee:i});return{infos:{Info:{decode:async(e,n,t)=>{if(d.eq(e,d.checkedBigNumberify("<builtin>",d.UInt_max,"3"))){const[,i,r,o,,]=n;return[...t],e=r.protoFee,n=r.lpFee,t=r.totFee,a=r.protoAddr,n={locked:r.locked,lpFee:n,protoAddr:a,protoFee:e,totFee:t},{cmds:i,protoInfo:n,triumvirs:o}}var a;d.assert(!1,"illegal view")},ty:d.T_Struct([["triumvirs",s],["cmds",t],["protoInfo",o]])}},views:{3:[e,t,a,s,i]}}}function _getMaps(e){return{mapDataTy:e.reachStdlib.T_Tuple([])}}async function Admin(e,R){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for Admin expects to receive a contract as its first argument."));if("object"!=typeof R)return Promise.reject(new Error("The backend for Admin expects to receive an interact object as its second argument."));const a=e._initialize(),i=a.stdlib;var e=i.T_Address,n=i.T_Array(e,i.checkedBigNumberify("<builtin>",i.UInt_max,"3")),r=i.T_Null,O=i.T_Contract,t=i.T_Token,j=i.T_Data({None:r,Some:t}),M=i.T_Tuple([O,j,t,e]),o=i.T_UInt,d=i.T_Bool,P=i.T_Struct([["protoFee",o],["lpFee",o],["totFee",o],["protoAddr",e],["locked",d]]),d=i.T_Data({Harvest:M,Kill:r,NewInfo:P,NewTriumvirs:n,NoOp:r,Rewards:e}),J=i.T_Tuple([d]),M=i.T_Tuple([o,d]),e=i.T_Tuple([O,j,t]),V=i.T_Data({Triumvir_propose0_29646:J,Triumvir_support0_29646:M,register0_29646:e}),d=i.T_Struct([["A",o],["B",o]]),O=i.T_Tuple([d,o]),z=i.T_Tuple([o,O]),j=i.protect(n,R.triumvirs,"for Admin's interact field triumvirs"),{data:[t],time:M}=await a.sendrecv({args:[j],evt_cnt:1,funcNum:0,lct:i.checkedBigNumberify("./index.rsh:123:9:dot",i.UInt_max,"0"),onlyIf:!0,out_tys:[n],pay:[i.checkedBigNumberify("./index.rsh:123:9:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var n={txns:[],mapRefs:[],maps:[]};i.UInt_max;var[,]=e["data"],t=await a.getContractAddress();i.checkedBigNumberify("<builtin>",i.UInt_max,"25"),i.checkedBigNumberify("<builtin>",i.UInt_max,"5"),i.checkedBigNumberify("<builtin>",i.UInt_max,"30");i.checkedBigNumberify("./index.rsh:119:9:after expr stmt semicolon",i.UInt_max,"0");return await!0?n.isHalt=!1:(n.txns.push({kind:"halt",tok:void 0}),n.isHalt=!0),n},soloSend:!0,timeoutAt:void 0,tys:[n],waitIfNotPresent:!1}),e=await a.getContractAddress(),s=(i.protect(r,await R.ready(),{at:"./index.rsh:131:23:application",fs:["at ./index.rsh:131:23:application call to [unknown function] (defined at: ./index.rsh:131:23:function exp)",'at ./index.rsh:131:23:application call to "liftedInteract" (defined at: ./index.rsh:131:23:application)'],msg:"ready",who:"Admin"}),["NoOp",null]),d=[s,s,s],o={locked:!1,lpFee:i.checkedBigNumberify("<builtin>",i.UInt_max,"25"),protoAddr:e,protoFee:i.checkedBigNumberify("<builtin>",i.UInt_max,"5"),totFee:i.checkedBigNumberify("<builtin>",i.UInt_max,"30")};let c=d,p=!1,l=o,b=t,u=M,m=i.checkedBigNumberify("./index.rsh:119:9:after expr stmt semicolon",i.UInt_max,"0");for(;await!p;){var f=await a.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[V],timeoutAt:void 0,waitIfNotPresent:!1});const{data:[Q],time:C,from:D}=f;switch(Q[0]){case"Triumvir_propose0_29646":{var y=Q[1][i.checkedBigNumberify("./index.rsh:190:10:spread",i.UInt_max,"0")];let e;switch(y[0]){case"Harvest":y[1];e=!0;break;case"Kill":y[1];e=!0;break;case"NewInfo":var h=y[1],K=h.protoFee,x=h.lpFee,h=h.totFee,H=i.lt(K,i.checkedBigNumberify("./index.rsh:72:14:decimal",i.UInt_max,"100")),X=i.lt(x,i.checkedBigNumberify("./index.rsh:73:14:decimal",i.UInt_max,"100")),H=!!H&&X,X=i.add(x,K),x=i.eq(h,X),K=!!H&&x,X=i.lt(h,i.checkedBigNumberify("./index.rsh:75:15:decimal",i.UInt_max,"100")),H=!!K&&X,x=i.gt(h,i.checkedBigNumberify("./index.rsh:76:15:decimal",i.UInt_max,"0"));e=!!H&&x;break;case"NewTriumvirs":y[1];e=!0;break;case"NoOp":y[1];e=!0;break;case"Rewards":y[1];e=!0}i.assert(e,{at:"./index.rsh:191:12:application",fs:["at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"invalid command",who:"Admin"});var T=["None",null],q=await i.Array_asyncReduce([b],T,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=i.addressEq(D,e);return!!a&&e?["Some",t]:n});let n;switch(q[0]){case"None":q[1];n=!1;break;case"Some":q[1];n=!0}i.assert(n,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Admin"});let t;switch(y[0]){case"Harvest":y[1];t=!0;break;case"Kill":y[1];t=!0;break;case"NewInfo":var _=y[1],Y=_.protoFee,A=_.lpFee,_=_.totFee,G=i.lt(Y,i.checkedBigNumberify("./index.rsh:72:14:decimal",i.UInt_max,"100")),W=i.lt(A,i.checkedBigNumberify("./index.rsh:73:14:decimal",i.UInt_max,"100")),G=!!G&&W,W=i.add(A,Y),A=i.eq(_,W),Y=!!G&&A,W=i.lt(_,i.checkedBigNumberify("./index.rsh:75:15:decimal",i.UInt_max,"100")),G=!!Y&&W,A=i.gt(_,i.checkedBigNumberify("./index.rsh:76:15:decimal",i.UInt_max,"0"));t=!!G&&A;break;case"NewTriumvirs":y[1];t=!0;break;case"NoOp":y[1];t=!0;break;case"Rewards":y[1];t=!0}i.assert(t,{at:"./index.rsh:191:12:application",fs:["at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)"],msg:"invalid command",who:"Admin"});var k=await i.Array_asyncReduce([b],T,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=i.addressEq(D,e);return!!a&&e?["Some",t]:n});let a;switch(k[0]){case"None":k[1];a=!1;break;case"Some":k[1];a=!0}i.assert(a,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)"],msg:"not triumvir",who:"Admin"});var T=i.fromSome(k,i.checkedBigNumberify("./index.rsh:150:31:decimal",i.UInt_max,"0")),T=i.Array_set(c,T,y),w=(await f.getOutput("Triumvir_propose","v31209",r,null),l),L=b,Z=m;c=T,p=!1,l=w,b=L,u=C,m=Z;continue}case"Triumvir_support0_29646":{var T=Q[1],w=T[i.checkedBigNumberify("./index.rsh:200:10:spread",i.UInt_max,"0")],L=T[i.checkedBigNumberify("./index.rsh:200:10:spread",i.UInt_max,"1")],Z=i.lt(w,i.checkedBigNumberify("./index.rsh:201:29:dot",i.UInt_max,"3")),N=(i.assert(Z,{at:"./index.rsh:201:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"illegal idx",who:"Admin"}),["None",null]),g=await i.Array_asyncReduce([b],N,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=i.addressEq(D,e);return!!a&&e?["Some",t]:n});let e;switch(g[0]){case"None":g[1];e=!1;break;case"Some":g[1];e=!0}i.assert(e,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Admin"});var v=i.fromSome(g,i.checkedBigNumberify("./index.rsh:150:31:decimal",i.UInt_max,"0")),v=i.eq(w,v),I=(i.assert(!v,{at:"./index.rsh:203:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"cannot support self",who:"Admin"}),c[w]),v=i.digest(J,[L]),$=i.digest(J,[I]),v=i.digestEq(v,$),B=(i.assert(v,{at:"./index.rsh:205:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"command switched",who:"Admin"}),await i.Array_asyncReduce([b],N,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=i.addressEq(D,e);return!!a&&e?["Some",t]:n}));let n;switch(B[0]){case"None":B[1];n=!1;break;case"Some":B[1];n=!0}i.assert(n,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"not triumvir",who:"Admin"});var $=i.fromSome(B,i.checkedBigNumberify("./index.rsh:150:31:decimal",i.UInt_max,"0")),v=i.eq(w,$),U=(i.assert(!v,{at:"./index.rsh:203:12:application",fs:["at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"cannot support self",who:"Admin"}),i.Array_set(c,w,s));switch(await f.getOutput("Triumvir_support","v31718",r,null),I[0]){case"Harvest":var F=I[1],e0=(F[i.checkedBigNumberify("./index.rsh:156:19:array",i.UInt_max,"0")],F[i.checkedBigNumberify("./index.rsh:156:19:array",i.UInt_max,"1")]);F[i.checkedBigNumberify("./index.rsh:156:19:array",i.UInt_max,"2")],F[i.checkedBigNumberify("./index.rsh:156:19:array",i.UInt_max,"3")];switch(e0[0]){case"None":e0[1];l.protoFee,l.lpFee,l.totFee,l.protoAddr;l.locked;var S=(await f.getOutput("internal","v31790",z,void 0))[i.checkedBigNumberify("./index.rsh:163:15:application",i.UInt_max,"0")],n0=i.add(m,S),S=i.eq(i.checkedBigNumberify("./index.rsh:163:15:application",i.UInt_max,"0"),S),S=(i.assert(S,{at:"./index.rsh:163:15:application",fs:['at ./index.rsh:167:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)',"at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)","at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)",'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"remote bill check",who:"Admin"}),U),t0=l,a0=b;c=S,p=!1,l=t0,b=a0,u=C,m=n0;continue;case"Some":e0[1];l.protoFee,l.lpFee,l.totFee,l.protoAddr;l.locked;var S=(await f.getOutput("internal","v31831",z,void 0))[i.checkedBigNumberify("./index.rsh:163:15:application",i.UInt_max,"0")],t0=i.add(m,S),a0=i.eq(i.checkedBigNumberify("./index.rsh:163:15:application",i.UInt_max,"0"),S),n0=(i.assert(a0,{at:"./index.rsh:163:15:application",fs:['at ./index.rsh:166:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)',"at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)","at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)",'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"remote bill check",who:"Admin"}),U),i0=l,r0=b;c=n0,p=!1,l=i0,b=r0,u=C,m=t0;continue}break;case"Kill":I[1];var F=l,E=b,o0=m;c=U,p=!0,l=F,b=E,u=C,m=o0;continue;case"NewInfo":var E=I[1],o0=E.locked,d0=E.lpFee,s0=E.protoAddr,c0=E.protoFee,p0=E.totFee,l0=b,b0=m;c=U,p=!1,l={locked:o0,lpFee:d0,protoAddr:s0,protoFee:c0,totFee:p0},b=l0,u=C,m=b0;continue;case"NewTriumvirs":d0=I[1],s0=l,c0=m;c=U,p=!1,l=s0,b=d0,u=C,m=c0;continue;case"NoOp":I[1];p0=l,l0=b,b0=m;c=U,p=!1,l=p0,b=l0,u=C,m=b0;continue;case"Rewards":I[1];var u0=i.le(await a.getBalance(),m)?i.checkedBigNumberify("./index.rsh:172:44:application",i.UInt_max,"0"):i.sub(await a.getBalance(),m),m0=i.add(u0,m),m0=i.sub(m0,u0),u0=l,f0=b;c=U,p=!1,l=u0,b=f0,u=C,m=m0;continue}break}case"register0_29646":var N=Q[1],$=N[i.checkedBigNumberify("./index.rsh:181:10:spread",i.UInt_max,"0")],v=i.ctcAddrEq($,D),y0=(i.assert(v,{at:"./index.rsh:183:12:application",fs:["at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not contract",who:"Admin"}),N[i.checkedBigNumberify("./index.rsh:181:10:spread",i.UInt_max,"1")],N[i.checkedBigNumberify("./index.rsh:181:10:spread",i.UInt_max,"2")],l.protoFee),h0=l.lpFee,x0=l.totFee,T0=l.protoAddr,_0=l.locked,_0=(await f.getOutput("register","v32349",P,{locked:_0,lpFee:h0,protoAddr:T0,protoFee:y0,totFee:x0}),c),h0=l,T0=b,y0=m;c=_0,p=!1,l=h0,b=T0,u=C,m=y0;continue}}}async function _Triumvir_propose3(e,i){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Triumvir_propose3 expects to receive a contract as its first argument."));if("object"!=typeof i)return Promise.reject(new Error("The backend for _Triumvir_propose3 expects to receive an interact object as its second argument."));e=e._initialize();const o=e.stdlib;var n=o.T_Contract;const d=o.T_Null;var t=o.T_Token,a=o.T_Data({None:d,Some:t}),r=o.T_Address,s=o.T_Tuple([n,a,t,r]),c=o.T_UInt,p=o.T_Bool,l=o.T_Struct([["protoFee",c],["lpFee",c],["totFee",c],["protoAddr",r],["locked",p]]),b=o.T_Array(r,o.checkedBigNumberify("<builtin>",o.UInt_max,"3")),s=o.T_Data({Harvest:s,Kill:d,NewInfo:l,NewTriumvirs:b,NoOp:d,Rewards:r}),l=o.T_Array(s,o.checkedBigNumberify("<builtin>",o.UInt_max,"3")),p=o.T_Object({locked:p,lpFee:c,protoAddr:r,protoFee:c,totFee:c}),r=o.T_Tuple([s]),u=o.T_Tuple([c,s]),n=o.T_Tuple([n,a,t]),a=o.T_Data({Triumvir_propose0_29646:r,Triumvir_support0_29646:u,register0_29646:n});const[R,m,f,y,h]=await e.getState(o.checkedBigNumberify("<builtin>",o.UInt_max,"3"),[s,l,p,b,c]),O=e.selfAddress();var t=o.protect(r,await i.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_propose0_29646" (defined at: ./index.rsh:190:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"in",who:"Triumvir_propose"}),x=t[o.checkedBigNumberify("./index.rsh:1:23:application",o.UInt_max,"0")];let T;switch(x[0]){case"Harvest":x[1];T=!0;break;case"Kill":x[1];T=!0;break;case"NewInfo":var _=x[1],A=_.protoFee,k=_.lpFee,_=_.totFee,w=o.lt(A,o.checkedBigNumberify("./index.rsh:72:14:decimal",o.UInt_max,"100")),N=o.lt(k,o.checkedBigNumberify("./index.rsh:73:14:decimal",o.UInt_max,"100")),w=!!w&&N,N=o.add(k,A),k=o.eq(_,N),A=!!w&&k,N=o.lt(_,o.checkedBigNumberify("./index.rsh:75:15:decimal",o.UInt_max,"100")),w=!!A&&N,k=o.gt(_,o.checkedBigNumberify("./index.rsh:76:15:decimal",o.UInt_max,"0"));T=!!w&&k;break;case"NewTriumvirs":x[1];T=!0;break;case"NoOp":x[1];T=!0;break;case"Rewards":x[1];T=!0}o.assert(T,{at:"./index.rsh:191:12:application",fs:["at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_propose0_29646" (defined at: ./index.rsh:190:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"invalid command",who:"Triumvir_propose"});var u=["None",null],j=await o.Array_asyncReduce([y],u,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=o.addressEq(O,e);return!!a&&e?["Some",t]:n});let M;switch(j[0]){case"None":j[1];M=!1;break;case"Some":j[1];M=!0}o.assert(M,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_propose0_29646" (defined at: ./index.rsh:190:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Triumvir_propose"});n=["Triumvir_propose0_29646",t];let g;switch(x[0]){case"Harvest":x[1];g=!0;break;case"Kill":x[1];g=!0;break;case"NewInfo":var v=x[1],P=v.protoFee,I=v.lpFee,v=v.totFee,J=o.lt(P,o.checkedBigNumberify("./index.rsh:72:14:decimal",o.UInt_max,"100")),V=o.lt(I,o.checkedBigNumberify("./index.rsh:73:14:decimal",o.UInt_max,"100")),J=!!J&&V,V=o.add(I,P),I=o.eq(v,V),P=!!J&&I,V=o.lt(v,o.checkedBigNumberify("./index.rsh:75:15:decimal",o.UInt_max,"100")),J=!!P&&V,I=o.gt(v,o.checkedBigNumberify("./index.rsh:76:15:decimal",o.UInt_max,"0"));g=!!J&&I;break;case"NewTriumvirs":x[1];g=!0;break;case"NoOp":x[1];g=!0;break;case"Rewards":x[1];g=!0}o.assert(g,{at:"./index.rsh:191:12:application",fs:["at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"invalid command",who:"Triumvir_propose"});var z=await o.Array_asyncReduce([y],u,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=o.addressEq(O,e);return!!a&&e?["Some",t]:n});let K;switch(z[0]){case"None":z[1];K=!1;break;case"Some":z[1];K=!0}o.assert(K,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Triumvir_propose"});var H=await e.sendrecv({args:[R,m,f,y,h,n],evt_cnt:1,funcNum:2,lct:o.checkedBigNumberify("<builtin>",o.UInt_max,"0"),onlyIf:!0,out_tys:[a],pay:[o.checkedBigNumberify("./index.rsh:194:16:decimal",o.UInt_max,"0"),[]],sim_p:async e=>{var n={txns:[],mapRefs:[],maps:[]};o.UInt_max;const{data:[t],from:i}=e;switch(t[0]){case"Triumvir_propose0_29646":var a=t[1],a=(n.txns.push({kind:"api",who:"Triumvir_propose"}),a[o.checkedBigNumberify("./index.rsh:190:10:spread",o.UInt_max,"0")]),r=["None",null],r=await o.Array_asyncReduce([y],r,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=o.addressEq(i,e);return!!a&&e?["Some",t]:n}),r=o.fromSome(r,o.checkedBigNumberify("./index.rsh:150:31:decimal",o.UInt_max,"0"));o.Array_set(m,r,a),await e.getOutput("Triumvir_propose","v31209",d,null),f,y,h;n.isHalt=!1;break;case"Triumvir_support0_29646":t[1];break;case"register0_29646":t[1]}return n},soloSend:!1,timeoutAt:void 0,tys:[s,l,p,b,c,a],waitIfNotPresent:!1});const{data:[B],didSend:X,from:q}=H;switch(B[0]){case"Triumvir_propose0_29646":{var Y=B[1],U=Y[o.checkedBigNumberify("./index.rsh:190:10:spread",o.UInt_max,"0")];let e;switch(U[0]){case"Harvest":U[1];e=!0;break;case"Kill":U[1];e=!0;break;case"NewInfo":var F=U[1],G=F.protoFee,S=F.lpFee,F=F.totFee,W=o.lt(G,o.checkedBigNumberify("./index.rsh:72:14:decimal",o.UInt_max,"100")),L=o.lt(S,o.checkedBigNumberify("./index.rsh:73:14:decimal",o.UInt_max,"100")),W=!!W&&L,L=o.add(S,G),S=o.eq(F,L),G=!!W&&S,L=o.lt(F,o.checkedBigNumberify("./index.rsh:75:15:decimal",o.UInt_max,"100")),W=!!G&&L,S=o.gt(F,o.checkedBigNumberify("./index.rsh:76:15:decimal",o.UInt_max,"0"));e=!!W&&S;break;case"NewTriumvirs":U[1];e=!0;break;case"NoOp":U[1];e=!0;break;case"Rewards":U[1];e=!0}o.assert(e,{at:"./index.rsh:191:12:application",fs:["at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"invalid command",who:"Triumvir_propose"});var E=["None",null],Z=await o.Array_asyncReduce([y],E,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=o.addressEq(q,e);return!!a&&e?["Some",t]:n});let n;switch(Z[0]){case"None":Z[1];n=!1;break;case"Some":Z[1];n=!0}o.assert(n,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Triumvir_propose"});let t;switch(U[0]){case"Harvest":U[1];t=!0;break;case"Kill":U[1];t=!0;break;case"NewInfo":var Q=U[1],$=Q.protoFee,C=Q.lpFee,Q=Q.totFee,e0=o.lt($,o.checkedBigNumberify("./index.rsh:72:14:decimal",o.UInt_max,"100")),n0=o.lt(C,o.checkedBigNumberify("./index.rsh:73:14:decimal",o.UInt_max,"100")),e0=!!e0&&n0,n0=o.add(C,$),C=o.eq(Q,n0),$=!!e0&&C,n0=o.lt(Q,o.checkedBigNumberify("./index.rsh:75:15:decimal",o.UInt_max,"100")),e0=!!$&&n0,C=o.gt(Q,o.checkedBigNumberify("./index.rsh:76:15:decimal",o.UInt_max,"0"));t=!!e0&&C;break;case"NewTriumvirs":U[1];t=!0;break;case"NoOp":U[1];t=!0;break;case"Rewards":U[1];t=!0}o.assert(t,{at:"./index.rsh:191:12:application",fs:["at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)"],msg:"invalid command",who:"Triumvir_propose"});var D=await o.Array_asyncReduce([y],E,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=o.addressEq(q,e);return!!a&&e?["Some",t]:n});let a;switch(D[0]){case"None":D[1];a=!1;break;case"Some":D[1];a=!0}o.assert(a,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)"],msg:"not triumvir",who:"Triumvir_propose"});E=o.fromSome(D,o.checkedBigNumberify("./index.rsh:150:31:decimal",o.UInt_max,"0")),E=(o.Array_set(m,E,U),await H.getOutput("Triumvir_propose","v31209",d,null));X&&o.protect(d,await i.out(Y,E),{at:"./index.rsh:190:11:application",fs:["at ./index.rsh:190:11:application call to [unknown function] (defined at: ./index.rsh:190:11:function exp)",'at ./index.rsh:195:10:application call to "k" (defined at: ./index.rsh:194:23:function exp)',"at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)"],msg:"out",who:"Triumvir_propose"}),f,y,h;return}case"Triumvir_support0_29646":B[1];return;case"register0_29646":B[1]}}async function _Triumvir_support3(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _Triumvir_support3 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _Triumvir_support3 expects to receive an interact object as its second argument."));const u=e._initialize(),m=u.stdlib;e=m.T_Contract;const f=m.T_Null;var n=m.T_Token,a=m.T_Data({None:f,Some:n}),i=m.T_Address,r=m.T_Tuple([e,a,n,i]),o=m.T_UInt,d=m.T_Bool,s=m.T_Struct([["protoFee",o],["lpFee",o],["totFee",o],["protoAddr",i],["locked",d]]),c=m.T_Array(i,m.checkedBigNumberify("<builtin>",m.UInt_max,"3")),r=m.T_Data({Harvest:r,Kill:f,NewInfo:s,NewTriumvirs:c,NoOp:f,Rewards:i}),s=m.T_Array(r,m.checkedBigNumberify("<builtin>",m.UInt_max,"3")),d=m.T_Object({locked:d,lpFee:o,protoAddr:i,protoFee:o,totFee:o}),i=m.T_Tuple([o,r]),p=m.T_Tuple([r]),e=m.T_Tuple([e,a,n]),a=m.T_Data({Triumvir_propose0_29646:p,Triumvir_support0_29646:i,register0_29646:e}),n=m.T_Struct([["A",o],["B",o]]),e=m.T_Tuple([n,o]);const y=m.T_Tuple([o,e]),[h,x,T,_,A]=await u.getState(m.checkedBigNumberify("<builtin>",m.UInt_max,"3"),[r,s,d,c,o]),R=u.selfAddress();var n=m.protect(i,await t.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"in",who:"Triumvir_support"}),e=n[m.checkedBigNumberify("./index.rsh:1:23:application",m.UInt_max,"0")],i=n[m.checkedBigNumberify("./index.rsh:1:23:application",m.UInt_max,"1")],l=m.lt(e,m.checkedBigNumberify("./index.rsh:201:29:dot",m.UInt_max,"3")),l=(m.assert(l,{at:"./index.rsh:201:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"illegal idx",who:"Triumvir_support"}),["None",null]),b=await m.Array_asyncReduce([_],l,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=m.addressEq(R,e);return!!a&&e?["Some",t]:n});let k;switch(b[0]){case"None":b[1];k=!1;break;case"Some":b[1];k=!0}m.assert(k,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Triumvir_support"});var w=m.fromSome(b,m.checkedBigNumberify("./index.rsh:150:31:decimal",m.UInt_max,"0")),w=m.eq(e,w),w=(m.assert(!w,{at:"./index.rsh:203:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"cannot support self",who:"Triumvir_support"}),x[e]),i=m.digest(p,[i]),w=m.digest(p,[w]),i=m.digestEq(i,w),w=(m.assert(i,{at:"./index.rsh:205:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)",'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"command switched",who:"Triumvir_support"}),["Triumvir_support0_29646",n]),N=await m.Array_asyncReduce([_],l,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=m.addressEq(R,e);return!!a&&e?["Some",t]:n});let O;switch(N[0]){case"None":N[1];O=!1;break;case"Some":N[1];O=!0}m.assert(O,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Triumvir_support"});var i=m.fromSome(N,m.checkedBigNumberify("./index.rsh:150:31:decimal",m.UInt_max,"0")),n=m.eq(e,i),g=(m.assert(!n,{at:"./index.rsh:203:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"cannot support self",who:"Triumvir_support"}),await u.sendrecv({args:[h,x,T,_,A,w],evt_cnt:1,funcNum:2,lct:m.checkedBigNumberify("<builtin>",m.UInt_max,"0"),onlyIf:!0,out_tys:[a],pay:[m.checkedBigNumberify("./index.rsh:207:16:decimal",m.UInt_max,"0"),[]],sim_p:async e=>{var n={txns:[],mapRefs:[],maps:[]};m.UInt_max;var[t]=e["data"];switch(t[0]){case"Triumvir_propose0_29646":t[1];break;case"Triumvir_support0_29646":var a=t[1],a=(n.txns.push({kind:"api",who:"Triumvir_support"}),a[m.checkedBigNumberify("./index.rsh:200:10:spread",m.UInt_max,"0")]),i=x[a];m.Array_set(x,a,h);await e.getOutput("Triumvir_support","v31718",f,null);switch(i[0]){case"Harvest":var r=i[1],o=r[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"0")],d=r[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"1")],s=r[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"2")],c=r[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"3")];switch(d[0]){case"None":d[1];T.protoFee,T.lpFee,T.totFee,T.protoAddr;T.locked;var p=[m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),void n.txns.push({accs:[c],apps:[],bills:m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),fees:m.checkedBigNumberify("./index.rsh:160:40:application",m.UInt_max,"2"),kind:"remote",obj:o,pays:m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),toks:[s]})],p=(await e.getOutput("internal","v31790",y,p))[m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0")];m.add(A,p),T,_;n.isHalt=!1;break;case"Some":p=d[1],p=(T.protoFee,T.lpFee,T.totFee,T.protoAddr,T.locked,[m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),void n.txns.push({accs:[c],apps:[],bills:m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),fees:m.checkedBigNumberify("./index.rsh:160:40:application",m.UInt_max,"3"),kind:"remote",obj:o,pays:m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),toks:[p,s]})]),p=(await e.getOutput("internal","v31831",y,p))[m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0")];m.add(A,p),T,_;n.isHalt=!1}break;case"Kill":i[1];n.txns.push({kind:"halt",tok:void 0}),n.isHalt=!0;break;case"NewInfo":r=i[1];r.locked,r.lpFee,r.protoAddr,r.protoFee,r.totFee,_,A;n.isHalt=!1;break;case"NewTriumvirs":i[1],T,A;n.isHalt=!1;break;case"NoOp":i[1],T,_,A;n.isHalt=!1;break;case"Rewards":var r=i[1],l=m.le(await u.getBalance(),A)?m.checkedBigNumberify("./index.rsh:172:44:application",m.UInt_max,"0"):m.sub(await u.getBalance(),A),b=m.add(l,A);m.sub(b,l),n.txns.push({kind:"from",to:r,tok:void 0}),T,_;n.isHalt=!1}break;case"register0_29646":t[1]}return n},soloSend:!1,timeoutAt:void 0,tys:[r,s,d,c,o,a],waitIfNotPresent:!1}));const{data:[v],didSend:j,from:M}=g;switch(v[0]){case"Triumvir_propose0_29646":v[1];return;case"Triumvir_support0_29646":{var P=v[1],I=P[m.checkedBigNumberify("./index.rsh:200:10:spread",m.UInt_max,"0")],B=P[m.checkedBigNumberify("./index.rsh:200:10:spread",m.UInt_max,"1")],U=m.lt(I,m.checkedBigNumberify("./index.rsh:201:29:dot",m.UInt_max,"3")),U=(m.assert(U,{at:"./index.rsh:201:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"illegal idx",who:"Triumvir_support"}),["None",null]),F=await m.Array_asyncReduce([_],U,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=m.addressEq(M,e);return!!a&&e?["Some",t]:n});let e;switch(F[0]){case"None":F[1];e=!1;break;case"Some":F[1];e=!0}m.assert(e,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not triumvir",who:"Triumvir_support"});var S=m.fromSome(F,m.checkedBigNumberify("./index.rsh:150:31:decimal",m.UInt_max,"0")),S=m.eq(I,S),E=(m.assert(!S,{at:"./index.rsh:203:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"cannot support self",who:"Triumvir_support"}),x[I]),S=m.digest(p,[B]),B=m.digest(p,[E]),S=m.digestEq(S,B),Q=(m.assert(S,{at:"./index.rsh:205:12:application",fs:["at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"command switched",who:"Triumvir_support"}),await m.Array_asyncReduce([_],U,async([e],n,t)=>{let a;switch(n[0]){case"None":n[1];a=!0;break;case"Some":n[1];a=!1}e=m.addressEq(M,e);return!!a&&e?["Some",t]:n}));let n;switch(Q[0]){case"None":Q[1];n=!1;break;case"Some":Q[1];n=!0}m.assert(n,{at:"./index.rsh:149:14:application",fs:['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"not triumvir",who:"Triumvir_support"});B=m.fromSome(Q,m.checkedBigNumberify("./index.rsh:150:31:decimal",m.UInt_max,"0")),S=m.eq(I,B),U=(m.assert(!S,{at:"./index.rsh:203:12:application",fs:["at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"cannot support self",who:"Triumvir_support"}),m.Array_set(x,I,h),await g.getOutput("Triumvir_support","v31718",f,null));switch(j&&m.protect(f,await t.out(P,U),{at:"./index.rsh:200:11:application",fs:["at ./index.rsh:200:11:application call to [unknown function] (defined at: ./index.rsh:200:11:function exp)",'at ./index.rsh:208:10:application call to "k" (defined at: ./index.rsh:207:23:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"out",who:"Triumvir_support"}),E[0]){case"Harvest":var C=E[1],J=(C[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"0")],C[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"1")]);C[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"2")],C[m.checkedBigNumberify("./index.rsh:156:19:array",m.UInt_max,"3")];switch(J[0]){case"None":J[1];T.protoFee,T.lpFee,T.totFee,T.protoAddr;T.locked;var D=(await g.getOutput("internal","v31790",y,void 0))[m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0")],D=(m.add(A,D),m.eq(m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),D));m.assert(D,{at:"./index.rsh:163:15:application",fs:['at ./index.rsh:167:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)',"at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)","at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)",'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"remote bill check",who:"Triumvir_support"}),T,_;return;case"Some":J[1];T.protoFee,T.lpFee,T.totFee,T.protoAddr;D=(T.locked,(await g.getOutput("internal","v31831",y,void 0))[m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0")]),D=(m.add(A,D),m.eq(m.checkedBigNumberify("./index.rsh:163:15:application",m.UInt_max,"0"),D));m.assert(D,{at:"./index.rsh:163:15:application",fs:['at ./index.rsh:166:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)',"at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)","at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)",'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)',"at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)"],msg:"remote bill check",who:"Triumvir_support"}),T,_;return}break;case"Kill":E[1];return;case"NewInfo":C=E[1];C.locked,C.lpFee,C.protoAddr,C.protoFee,C.totFee,_,A;return;case"NewTriumvirs":E[1],T,A;return;case"NoOp":E[1],T,_,A;return;case"Rewards":E[1];var C=m.le(await u.getBalance(),A)?m.checkedBigNumberify("./index.rsh:172:44:application",m.UInt_max,"0"):m.sub(await u.getBalance(),A),V=m.add(C,A);m.sub(V,C),T,_;return}break}case"register0_29646":v[1]}}async function _register3(e,n){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _register3 expects to receive a contract as its first argument."));if("object"!=typeof n)return Promise.reject(new Error("The backend for _register3 expects to receive an interact object as its second argument."));e=e._initialize();const d=e.stdlib;var t=d.T_Contract,a=d.T_Null,i=d.T_Token,r=d.T_Data({None:a,Some:i}),o=d.T_Address,s=d.T_Tuple([t,r,i,o]),c=d.T_UInt,p=d.T_Bool;const l=d.T_Struct([["protoFee",c],["lpFee",c],["totFee",c],["protoAddr",o],["locked",p]]);var b=d.T_Array(o,d.checkedBigNumberify("<builtin>",d.UInt_max,"3")),s=d.T_Data({Harvest:s,Kill:a,NewInfo:l,NewTriumvirs:b,NoOp:a,Rewards:o}),u=d.T_Array(s,d.checkedBigNumberify("<builtin>",d.UInt_max,"3")),p=d.T_Object({locked:p,lpFee:c,protoAddr:o,protoFee:c,totFee:c}),o=d.T_Tuple([t,r,i]),t=d.T_Tuple([s]),r=d.T_Tuple([c,s]),i=d.T_Data({Triumvir_propose0_29646:t,Triumvir_support0_29646:r,register0_29646:o});const[m,f,y,h,x]=await e.getState(d.checkedBigNumberify("<builtin>",d.UInt_max,"3"),[s,u,p,b,c]);var t=e.selfAddress(),r=d.protect(o,await n.in(),{at:"./index.rsh:1:23:application",fs:["at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)",'at ./index.rsh:134:19:application call to "runregister0_29646" (defined at: ./index.rsh:181:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"in",who:"register"}),o=r[d.checkedBigNumberify("./index.rsh:1:23:application",d.UInt_max,"0")],o=d.ctcAddrEq(o,t),t=(d.assert(o,{at:"./index.rsh:183:12:application",fs:["at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)",'at ./index.rsh:134:19:application call to "runregister0_29646" (defined at: ./index.rsh:181:10:function exp)',"at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not contract",who:"register"}),["register0_29646",r]),T=await e.sendrecv({args:[m,f,y,h,x,t],evt_cnt:1,funcNum:2,lct:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),onlyIf:!0,out_tys:[i],pay:[d.checkedBigNumberify("./index.rsh:184:16:decimal",d.UInt_max,"0"),[]],sim_p:async e=>{var n={txns:[],mapRefs:[],maps:[]};d.UInt_max;var[t]=e["data"];switch(t[0]){case"Triumvir_propose0_29646":t[1];break;case"Triumvir_support0_29646":t[1];break;case"register0_29646":var a=t[1],a=(n.txns.push({kind:"api",who:"register"}),a[d.checkedBigNumberify("./index.rsh:181:10:spread",d.UInt_max,"0")],a[d.checkedBigNumberify("./index.rsh:181:10:spread",d.UInt_max,"1")],a[d.checkedBigNumberify("./index.rsh:181:10:spread",d.UInt_max,"2")],y.protoFee),i=y.lpFee,r=y.totFee,o=y.protoAddr,i={locked:y.locked,lpFee:i,protoAddr:o,protoFee:a,totFee:r};await e.getOutput("register","v32349",l,i),f,y,h,x;n.isHalt=!1}return n},soloSend:!1,timeoutAt:void 0,tys:[s,u,p,b,c,i],waitIfNotPresent:!1}),{data:[_],didSend:A,from:k}=T;switch(_[0]){case"Triumvir_propose0_29646":_[1];return;case"Triumvir_support0_29646":_[1];return;case"register0_29646":var w=_[1],N=w[d.checkedBigNumberify("./index.rsh:181:10:spread",d.UInt_max,"0")],N=d.ctcAddrEq(N,k),N=(d.assert(N,{at:"./index.rsh:183:12:application",fs:["at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)","at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)"],msg:"not contract",who:"register"}),w[d.checkedBigNumberify("./index.rsh:181:10:spread",d.UInt_max,"1")],w[d.checkedBigNumberify("./index.rsh:181:10:spread",d.UInt_max,"2")],y.protoFee),g=y.lpFee,v=y.totFee,I=y.protoAddr,B=y.locked,B=await T.getOutput("register","v32349",l,{locked:B,lpFee:g,protoAddr:I,protoFee:N,totFee:v});A&&d.protect(a,await n.out(w,B),{at:"./index.rsh:181:11:application",fs:["at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)",'at ./index.rsh:185:10:application call to "k" (defined at: ./index.rsh:184:23:function exp)',"at ./index.rsh:184:23:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)"],msg:"out",who:"register"}),f,y,h,x}}async function Triumvir_propose(e,n){var t,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Triumvir_propose expects to receive a contract as its first argument.")):"object"!=typeof n?Promise.reject(new Error("The backend for Triumvir_propose expects to receive an interact object as its second argument.")):(t=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),t.assert(3==a,"API called in the wrong state. Currently in state: "+a+", expected:  [3]"),3==a?_Triumvir_propose3(e,n):void 0)}async function Triumvir_support(e,n){var t,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for Triumvir_support expects to receive a contract as its first argument.")):"object"!=typeof n?Promise.reject(new Error("The backend for Triumvir_support expects to receive an interact object as its second argument.")):(t=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),t.assert(3==a,"API called in the wrong state. Currently in state: "+a+", expected:  [3]"),3==a?_Triumvir_support3(e,n):void 0)}async function register(e,n){var t,a;return"object"!=typeof e||void 0===e._initialize?Promise.reject(new Error("The backend for register expects to receive a contract as its first argument.")):"object"!=typeof n?Promise.reject(new Error("The backend for register expects to receive an interact object as its second argument.")):(t=(a=e._initialize()).stdlib,a=await a.getCurrentStep(),t.assert(3==a,"API called in the wrong state. Currently in state: "+a+", expected:  [3]"),3==a?_register3(e,n):void 0)}const _ALGO={ABI:{impure:["Triumvir_propose((byte,byte[96]))byte[0]","Triumvir_support(uint64,(byte,byte[96]))byte[0]","register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)"],pure:["Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))"],sigs:["Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))","Triumvir_propose((byte,byte[96]))byte[0]","Triumvir_support(uint64,(byte,byte[96]))byte[0]","register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)"]},appApproval:"BiAVAAEDYSAFAmQGCKMCEATMms7XBMWA36QO6JToygSEAzm9A2AJJggBAQABAAECAQMBBAVhcHBJRAQomkRuIjUAMRhBCRgpZEkiWzUBSSEJWzUCIQtbNQg2GgAXSUEAtyI1BCM1BkkhDQxAAC9JIQ4MQAAUIQ4SRDYaATX/KjT/UCEJr1BCAKchDRJENhoBNhoCUDX/KDT/UEIAk0khDwxAABwhDxJENhoBNhoCUDYaA1A1/ys0/1CBUK9QQgBwgfa70OUBEkQ0ASQSRCpkKGRQK2RQJwRkUCcFZFBJNQMhECERWDX/NAMhEiETWDQDJSEKWFA0/1cpCDT/VwEIUDT/VzEIUDT/VwkgUDT/VwABUFA1B0IIPzYaAhc1BDYaAzYaARdJIQYMQAaSIQYSRCQ0ARJENARJIhJMNAISEUQqZChkUCtkUCcEZFAnBWRQSTUDSUpJVwBhNf8lIQpYNf4hECERWDX9IRIhE1g1/IGdBFs1+0k1BTX6gASi6qESNPpQsDT6IlVJIwxAA/1JIQYMQACLIQYSRDT6VwEZNfU09SJbNfQnBjT0FlADMQASRIAIAAAAAAAAfl00/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUFCwNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVA1B4AEul39MzT0FlA09VcICVA09VcRCFCwNP80/iI0/TT8MgY0+0IGf0g0+lcBaTX1sSKyASEIshA0CLIYszT1IltJNfQkDEQhFK9JNfM18iI18TT8IQQ08QshBFg18DTyIlVAAAYjNe9CAAYiNe9CAAA08ig08RZQNO8xADTwEhBNNfI08SMISTXxJAxA/8M08iJVQAAGIjXxQgAGIzXxQgAANPFENPQiNPJJNfAjWzTwIlVNE0Q0/iU09AslWDXwNPVXCGEBNPABEkQ08zXvIjXuNPwhBDTuCyEEWDXtNO8iVUAABiM17EIABiI17EIAADTvKDTuFlA07DEANO0SEE017zTuIwhJNe4kDED/wzTvIlVAAAYiNe5CAAYjNe5CAAA07kQ09CI070k17SNbNO0iVU0TRDT+IiU09AtSNP9QNP4lSTT0CwghClJQNe2ACAAAAAAAAHvmsCk1B4AEoiDkRDEAUDT0FlA08FCwNPAiVUkkDEAAdEkhDAxAAFVJIQUMQAA9IQUSRDTwVwEgNewyCmAyCngJNPsJNeuxIrIBNOuyCCOyEDTssgezNP807SI0/TT8MgY06zT7CDTrCUIE5Eg0/zTtIjT9NPwyBjT7QgTTSDTwVwFgNew0/zTtIjT9NOwyBjT7QgS7SSMMQABLSSEGDEAAM0g08FcBOTXsNP807SI07Fc4ATTsVwgIUDTsVxggUDTsVwAIUDTsVxAIUDT8MgY0+0IEe0g0/zTtIzT9NPwyBjT7QgRqSDTwVwE5STXsIls16zTsgRFbNeo07FcZIDXpNOxXCAlJNegiVUAAkicGNOsWUAM15jIKYDIKeAkWNeWxIrIBIQiyEDTrshgnB7IaNOlJshyyGjT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQsho06rIwszIKYDIKeAk05RcJFrcAPlcEAFA154AIAAAAAAAAfC4051CwNOdJNeYiWzXlIjTlEkQ0/zTtIjT9NPwyBjT7NOUIQgOwNOgjWzXnJwY06xZQAzXlMgpgMgp4CRY15LEisgEhCLIQNOuyGCcHsho06UmyHLIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTnsjA06rIwszIKYDIKeAk05BcJFrcAPlcEAFA15oAIAAAAAAAAfFc05lCwNOZJNeUiWzXkIjTkEkQ0/zTtIjT9NPwyBjT7NOQIQgMUSDT6VwFhNfU09Uk19CJVSSQMQAAmSSEMDEAAGEkhBQxAAAohBRJEIzXzQgBoSCM180IAYUgjNfNCAFpJIwxAAE1JIQYMQAA/SDT0VwE5STXyIls18TTyIQlbNfA08iELWzXvNPEhBww08CEHDBA07zTwNPEIEhA07yEHDBA07yINEDXzQgAOSCM180IAB0gjNfNCAAA080QhFK9JNfI18SI18DT8IQQ08AshBFg17zTxIlVAAAYjNe5CAAYiNe5CAAA08Sg08BZQNO4xADTvEhBNNfE08CMISTXwJAxA/8M08SJVQAAGIjXwQgAGIzXwQgAANPBENPQiVUkkDEAAJkkhDAxAABhJIQUMQAAKIQUSRCM170IAaEgjNe9CAGFIIzXvQgBaSSMMQABNSSEGDEAAP0g09FcBOUk17iJbNe007iEJWzXsNO4hC1s16zTtIQcMNOwhBwwQNOs07DTtCBIQNOshBwwQNOsiDRA170IADkgjNe9CAAdIIzXvQgAANO9ENPI17iI17TT8IQQ07QshBFg17DTuIlVAAAYjNetCAAYiNetCAAA07ig07RZQNOsxADTsEhBNNe407SMISTXtJAxA/8M07iJVQAAGIjXtQgAGIzXtQgAANO1EgAgAAAAAAAB56bApNQeABO32BQMxAFA09FCwNP80/iIlIjTuSTXsI1s07CJVTQtSNPRQNP4lSSI07kk17CNbNOwiVU0LCCEKUlAiNP00/DIGNPtCAOEiEkSBwJoMiAGjsSKyASEIshAishiABgYxADIJErIegAEGsh+ztD01CCI0ARJENARJIhJMNAISEURJNQU1/4AEMirrWTT/ULCAYQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJNf5JSVA0/lAigAkAAAAAAAAAABkyClCACAAAAAAAAAAFUIAIAAAAAAAAAB5QNP8yBiJCAAA1/zX+Nf01/DX7Nfo1+TT7QQADQgBFNPk0+lA0/FA0/VA0/xZQKksBVwB/ZyhLAVd/f2crSwFX/n9nJwRLAYH9AoF/WGcnBUsBgfwDgSlYZ0gkNQEyBjUCQgAtMRkhBRJEsSKyASEIshA0CLIYIQWyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQIiNQhC/7w0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=",appClear:"Bg==",companionInfo:{api_Triumvir_support:1},extraPages:1,mapDataKeys:0,mapDataSize:0,stateKeys:5,stateSize:549,unsupported:[],version:10,warnings:["Step 2 calls a remote object at /app/index.rsh:163:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards."]},_ETH={ABI:`[
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
                "internalType": "address payable[3]",
                "name": "v30734",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "Propose",
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
            "internalType": "enum _enum_T1",
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
        "indexed": false,
        "internalType": "struct T1",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v2",
        "type": "address"
      }
    ],
    "name": "Register",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v2",
        "type": "tuple"
      }
    ],
    "name": "Support",
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
                "internalType": "address payable[3]",
                "name": "v30734",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_propose0_29646",
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
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_support0_29646",
                    "type": "tuple"
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
                            "internalType": "enum _enum_T1",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_register0_29646",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v31086",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v31209",
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
    "name": "_reach_oe_v31718",
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
                "internalType": "struct T19",
                "name": "elem0",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v31790",
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
                "internalType": "struct T19",
                "name": "elem0",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v31831",
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
        "internalType": "struct T3",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v32349",
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
            "internalType": "address payable[3]",
            "name": "triumvirs",
            "type": "address[3]"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T4",
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
                        "internalType": "enum _enum_T1",
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
                    "internalType": "struct T1",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem3",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "_Harvest",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "_Kill",
                "type": "bool"
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
                "internalType": "struct T3",
                "name": "_NewInfo",
                "type": "tuple"
              },
              {
                "internalType": "address payable[3]",
                "name": "_NewTriumvirs",
                "type": "address[3]"
              },
              {
                "internalType": "bool",
                "name": "_NoOp",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "_Rewards",
                "type": "address"
              }
            ],
            "internalType": "struct T4[3]",
            "name": "cmds",
            "type": "tuple[3]"
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
            "internalType": "struct T3",
            "name": "protoInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "",
        "type": "tuple"
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "internalType": "struct T4",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Triumvir_propose",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "internalType": "struct T4",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "Triumvir_support",
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
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_propose0_29646",
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
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_support0_29646",
                    "type": "tuple"
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
                            "internalType": "enum _enum_T1",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_register0_29646",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v31086",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
        "name": "_a1",
        "type": "tuple"
      },
      {
        "internalType": "address payable",
        "name": "_a2",
        "type": "address"
      }
    ],
    "name": "register",
    "outputs": [
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
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,Bytecode:"0x608060405260405162003c4738038062003c47833981016040819052620000269162000615565b60008055436003556200003862000213565b7fe5d35ee1d5d0380ec4bb3893af49ad0266757898dc8e4981d86f4fcd3a980e5533836040516200006b929190620006ff565b60405180910390a162000081341560086200013e565b8051600490528051600060a0909101819052815160208084018051929092528351825182015283519151604090810192909252818401805193909352825160199101528151309101528051600560609091015251601e608090910152620000e76200026d565b81518151526020808301518183018051919091528051600090830181905260408086015183519091015291850151518151606001528051436080909101525160a00152620001358162000168565b5050506200095a565b81620001645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019257600080805560018190556200018f9060029062000291565b50565b6200019c620002d0565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551620001e89183910162000863565b604051602081830303815290604052600290805190602001906200020e9291906200033e565b505050565b604051806060016040528062000228620003cd565b81526020016200023762000459565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b60405180604001604052806200028262000489565b8152602001620002686200049e565b5080546200029f906200091d565b6000825580601f10620002b0575050565b601f0160209004906000526020600020908101906200018f919062000522565b6040518060a00160405280620002e5620003cd565b8152602001620002f462000459565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200033162000539565b8152602001600081525090565b8280546200034c906200091d565b90600052602060002090601f016020900481019282620003705760008555620003bb565b82601f106200038b57805160ff1916838001178555620003bb565b82800160010185558215620003bb579182015b82811115620003bb5782518255916020019190600101906200039e565b50620003c992915062000522565b5090565b6040805160e081019091528060008152602001620003ea62000557565b8152602001600015158152602001620004366040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b81526020016200044562000539565b815260006020820181905260409091015290565b60405180606001604052806003905b62000472620003cd565b815260200190600190039081620004685790505090565b604051806020016040528062000268620003cd565b6040518060c00160405280620004b362000459565b8152602001600015158152602001620004ff6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81526020016200050e62000539565b815260200160008152602001600081525090565b5b80821115620003c9576000815560010162000523565b60405180606001604052806003906020820280368337509192915050565b604051806080016040528060006001600160a01b0316815260200162000445604080516060810190915280600062000445565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005c557620005c56200058a565b60405290565b604051602081016001600160401b0381118282101715620005c557620005c56200058a565b604051606081016001600160401b0381118282101715620005c557620005c56200058a565b600081830360808112156200062957600080fd5b62000633620005a0565b8351815260206060601f19840112156200064c57600080fd5b62000656620005cb565b925085603f8601126200066857600080fd5b62000672620005f0565b8060808701888111156200068557600080fd5b8388015b81811015620006b95780516001600160a01b0381168114620006ab5760008081fd5b845292840192840162000689565b50508452508101919091529392505050565b8060005b6003811015620006f95781516001600160a01b0316845260209384019390910190600101620006cf565b50505050565b600060a08201905060018060a01b03841682528251602083015260208301516200072e604084018251620006cb565b509392505050565b634e487b7160e01b600052602160045260246000fd5b80516006811062000761576200076162000736565b825260208181015180516001600160a01b03908116838601529181015180519192916002811062000796576200079662000736565b60408681019190915260208201511515606080880191909152918101518316608087015283015190911660a085015201516001600160a01b03811660c084015250604081015180151560e084015250606081810151805161010085015260208101516101208501526040810151610140850152908101516001600160a01b0316610160840152608081015115156101808401525060808101516200083f6101a0840182620006cb565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b6000610a2082019050620008798284516200074c565b60208084015161024080850160005b6003811015620008b0576200089f8285516200074c565b928401929082019060010162000888565b5050505060408481015180511515610900860152918201516109208501528101516001600160a01b03166109408401526060808201516109608501526080909101516109808401528301516200090b6109a0840182620006cb565b506080830151610a0083015292915050565b600181811c908216806200093257607f821691505b602082108114156200095457634e487b7160e01b600052602260045260246000fd5b50919050565b6132dd806200096a6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461010b578063ab53f2c614610120578063d379c61114610143578063dfcc43891461015657005b80631a6febfe146100825780631e93b0f1146100aa5780633b02a717146100c95780634012e02e146100e957005b3661008057005b005b610095610090366004612887565b610169565b60405190151581526020015b60405180910390f35b3480156100b657600080fd5b506003545b6040519081526020016100a1565b6100dc6100d73660046128b5565b6101c9565b6040516100a19190612937565b3480156100f557600080fd5b506100fe610243565b6040516100a19190612a98565b34801561011757600080fd5b506001546100bb565b34801561012c57600080fd5b50610135610381565b6040516100a1929190612b05565b610080610151366004612b3f565b61041e565b610095610164366004612b58565b610442565b6000610173611eec565b61017b611f10565b610183611f2a565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526101ba8284610496565b50506020015190505b92915050565b6101d1611f5f565b6101d9611eec565b6101e1611f10565b6101e9611f2a565b60408051606080820183526001600160a01b038a8116835260208084018b905290891683850152908401919091526002835281518082019092528282528301526102338284610496565b50506040015190505b9392505050565b61024b611f99565b600360005414156103725760006002805461026590612b75565b80601f016020809104026020016040519081016040528092919081815260200182805461029190612b75565b80156102de5780601f106102b3576101008083540402835291602001916102de565b820191906000526020600020905b8154815290600101906020018083116102c157829003601f168201915b50505050508060200190518101906102f69190612df1565b9050610300611fc6565b604080830180516060908101518451528151602090810151855182015282516080908101518651860152835185015186516001600160a01b0390911690840152925151855190151593019290925284015181840180519190915293810151845190910152905182519091015251919050565b61037e60006007611d75565b90565b60006060600054600280805461039690612b75565b80601f01602080910402602001604051908101604052809291908181526020018280546103c290612b75565b801561040f5780601f106103e45761010080835404028352916020019161040f565b820191906000526020600020905b8154815290600101906020018083116103f257829003601f168201915b50505050509050915091509091565b610426611eec565b61043e61043836849003840184612ef4565b82610496565b5050565b600061044c611eec565b610454611f10565b61045c611f2a565b60408051602080820183528782528381019190915260008352815180820190925282825283015261048d8284610496565b50505192915050565b6104a6600360005414601b611d75565b81516104c19015806104ba57508251600154145b601c611d75565b6000808055600280546104d390612b75565b80601f01602080910402602001604051908101604052809291908181526020018280546104ff90612b75565b801561054c5780601f106105215761010080835404028352916020019161054c565b820191906000526020600020905b81548152906001019060200180831161052f57829003601f168201915b50505050508060200190518101906105649190612df1565b905061056e611fe6565b7f6392de3086ad392d559b57a003ab34e70460d2baca532f308e45c5a87ed12206338560405161059f929190612fdb565b60405180910390a160006020850151515160028111156105c1576105c1612971565b1415610cf157602080850151510151815260008151515160058111156105e9576105e9612971565b14156105fb576001602082015261074b565b600181515151600581111561061257610612612971565b1415610624576001602082015261074b565b600281515151600581111561063b5761063b612971565b14156106d45780515160600151604082018190525160641161065e57600061066b565b6064816040015160200151105b610676576000610698565b6040810151805160209091015161068d919061309a565b816040015160400151145b6106a35760006106b0565b6064816040015160400151105b6106bb5760006106c8565b6000816040015160400151115b1515602082015261074b565b60038151515160058111156106eb576106eb612971565b14156106fd576001602082015261074b565b600481515151600581111561071457610714612971565b1415610726576001602082015261074b565b600581515151600581111561073d5761073d612971565b141561074b57600160208201525b61075a81602001516009611d75565b6060810180516000908190528151602001819052905160a08301525b60038110156108625782606001518160038110610795576107956130b2565b60200201516001600160a01b031660c0830152600060a08301515160018111156107c1576107c1612971565b14156107d357600160e08301526107fa565b600160a08301515160018111156107ec576107ec612971565b14156107fa57600060e08301525b61010082018051600190525160400181905260e082015161081c576000610836565b8160c001516001600160a01b0316336001600160a01b0316145b610844578160a0015161084b565b8161010001515b60a08301528061085a816130c8565b915050610776565b5060a08101516080820181905251600090600181111561088457610884612971565b14156108975760006101208201526108bf565b600160808201515160018111156108b0576108b0612971565b14156108bf5760016101208201525b6108cf816101200151600a611d75565b6108db3415600b611d75565b60008151515160058111156108f2576108f2612971565b1415610905576001610140820152610a60565b600181515151600581111561091c5761091c612971565b141561092f576001610140820152610a60565b600281515151600581111561094657610946612971565b14156109e6578051516060015161016082018190525160641161096a576000610978565b606481610160015160200151105b6109835760006109a7565b610160810151805160209091015161099b919061309a565b81610160015160400151145b6109b25760006109c0565b606481610160015160400151105b6109cb5760006109d9565b600081610160015160400151115b1515610140820152610a60565b60038151515160058111156109fd576109fd612971565b1415610a10576001610140820152610a60565b6004815151516005811115610a2757610a27612971565b1415610a3a576001610140820152610a60565b6005815151516005811115610a5157610a51612971565b1415610a605760016101408201525b610a70816101400151600c611d75565b60608101516101a082015260005b6003811015610b735782606001518160038110610a9d57610a9d6130b2565b60200201516001600160a01b03166101c083015260006101a0830151516001811115610acb57610acb612971565b1415610ade5760016101e0830152610b07565b60016101a0830151516001811115610af857610af8612971565b1415610b075760006101e08301525b6102008201805160019052516040018190526101e0820151610b2a576000610b45565b816101c001516001600160a01b0316336001600160a01b0316145b610b5457816101a00151610b5b565b8161020001515b6101a083015280610b6b816130c8565b915050610a7e565b506101a08101516101808201819052516000906001811115610b9757610b97612971565b1415610baa576000610220820152610bd3565b6001610180820151516001811115610bc457610bc4612971565b1415610bd35760016102208201525b610be3816102200151600d611d75565b604051600081527faf6d7c3ff3cfbdc85da0ddb587e544315cb5b71002878175075463be0d0cec6d9060200160405180910390a1600083528051516040517f510fa3e00163331e7163ef9e01f872b444c3d8848dda15e731d1789d76c6361891610c4f913391906130e3565b60405180910390a1610c5f61220b565b82518151526020830151610ca6906001610180850151516001811115610c8757610c87612971565b14610c93576000610c9e565b836101800151604001515b845151611d9b565b602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b50611d6f565b6001602085015151516002811115610d0b57610d0b612971565b1415611bdf5760208401515160400151610240820181905251610d3290600311600e611d75565b61026081018051600090819052815160200181905290516102a08301525b6003811015610e455782606001518160038110610d6f57610d6f6130b2565b60200201516001600160a01b03166102c083015260006102a0830151516001811115610d9d57610d9d612971565b1415610db05760016102e0830152610dd9565b60016102a0830151516001811115610dca57610dca612971565b1415610dd95760006102e08301525b6103008201805160019052516040018190526102e0820151610dfc576000610e17565b816102c001516001600160a01b0316336001600160a01b0316145b610e2657816102a00151610e2d565b8161030001515b6102a083015280610e3d816130c8565b915050610d50565b506102a08101516102808201819052516000906001811115610e6957610e69612971565b1415610e7c576000610320820152610ea5565b6001610280820151516001811115610e9657610e96612971565b1415610ea55760016103208201525b610eb5816103200151600f611d75565b610f066001610280830151516001811115610ed257610ed2612971565b14610ede576000610ee9565b816102800151604001515b6102408301515114610efc576001610eff565b60005b6010611d75565b610f8c82602001518261024001516000015160038110610f2857610f286130b2565b6020020151604051602001610f3d9190613101565b60408051601f198184030181529082905280516020918201206102408501518201519092610f6b9201613101565b6040516020818303038152906040528051906020012060001c146011611d75565b610f9834156012611d75565b61026081015161036082015260005b600381101561109c5782606001518160038110610fc657610fc66130b2565b60200201516001600160a01b03166103808301526000610360830151516001811115610ff457610ff4612971565b14156110075760016103a0830152611030565b600161036083015151600181111561102157611021612971565b14156110305760006103a08301525b6103c08201805160019052516040018190526103a082015161105357600061106e565b8161038001516001600160a01b0316336001600160a01b0316145b61107d57816103600151611084565b816103c001515b61036083015280611094816130c8565b915050610fa7565b5061036081015161034082018190525160009060018111156110c0576110c0612971565b14156110d35760006103e08201526110fc565b60016103408201515160018111156110ed576110ed612971565b14156110fc5760016103e08201525b61110c816103e001516013611d75565b61115d600161034083015151600181111561112957611129612971565b14611135576000611140565b816103400151604001515b6102408301515114611153576001611156565b60005b6014611d75565b6020820151610240820151518351611176929190611d9b565b610400820152604051600081527f5f6b7605f73fe937ad75068dd85ebd917a572f0dd5bb87df2de9969bf0fc76139060200160405180910390a1600060208085019190915261024082015151908301517f1ca272bbb6018d7b99180311121f45ec91a0b47a19077a7badd69e3dbd0db37e91339181600381106111fb576111fb6130b2565b602002015160405161120f93929190613110565b60405180910390a1600060208301516102408301515160038110611235576112356130b2565b602002015151600581111561124c5761124c612971565b1415611793576020820151610240820151516003811061126e5761126e6130b2565b602090810291909101518101516104208301819052015151600090600181111561129a5761129a612971565b14156115075760408083018051606090810151610440850180519190915282516020908101518251909101528251608090810151825186015283519094015181516001600160a01b03909116920191909152905151905190151591015261130260004761313d565b6106008201526104208101516060015161044082015160405160009263038da9cb60e21b9261133392602401613154565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836104200151600001516001600160a01b031660008460405161138e9190613171565b60006040518083038185875af1925050503d80600081146113cb576040519150601f19603f3d011682016040523d82523d6000602084013e6113d0565b606091505b50915091506113e182826015611eb1565b506106008401516113f2904761313d565b61046085015152805161140e908201602090810190830161318d565b61046085018051602001919091525161048085018190526040517fd79eee99c4e5fd655392f4641668b5da825147d3d3219fd25b7a92e3fefc913a9161147791815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16104808401515161149290156016611d75565b61149a61220b565b8551815152610400850151602080830180519290925281516000910152604080880151825190910152606080880151825190910152514360809182015261048086015151908701516114ec919061309a565b602082015160a001526114fe81611e0f565b50505050611d6f565b60016104208201516020015151600181111561152557611525612971565b141561178e576104208101516020908101516040908101516001600160a01b039081166104a085015284820180516060908101516104c0870180519190915282518601518151909601959095528151608090810151865186015282519094015185519316920191909152515191519115159101526115a460004761313d565b610620820152610420810151606001516104c082015160405160009263038da9cb60e21b926115d592602401613154565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836104200151600001516001600160a01b03166000846040516116309190613171565b60006040518083038185875af1925050503d806000811461166d576040519150601f19603f3d011682016040523d82523d6000602084013e611672565b606091505b509150915061168382826017611eb1565b50610620840151611694904761313d565b6104e08501515280516116b0908201602090810190830161318d565b6104e085018051602001919091525161050085018190526040517f4b287a3060fe6693268545b37c74768f32f172cc10542317266dc807f22e89919161171991815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16105008401515161173490156018611d75565b61173c61220b565b8551815152610400850151602080830180519290925281516000910152604080880151825190910152606080880151825190910152514360809182015261050086015151908701516114ec919061309a565b611d6f565b6001602083015161024083015151600381106117b1576117b16130b2565b60200201515160058111156117c8576117c8612971565b1415611826576117d661220b565b8251815152610400820151602080830180519290925281516001910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b600260208301516102408301515160038110611844576118446130b2565b602002015151600581111561185b5761185b612971565b141561193b576020820151610240820151516003811061187d5761187d6130b2565b602090810291909101516060908101516105208401818152608091820151610540860180519115159091528151850151815190950194909452805183015184516001600160a01b039091166040918201528151518551909401939093525190910151915101526118eb61220b565b8251815152610400820151602080830180519290925281516000910152610540830151815160400152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b600360208301516102408301515160038110611959576119596130b2565b602002015151600581111561197057611970612971565b14156119f95760208201516102408201515160038110611992576119926130b2565b6020020151608001516105608201526119a961220b565b8251815152610400820151602080830180519290925281516000910152604080850151825190910152610560830151815160600152805143608091820152840151905160a00152610ceb81611e0f565b600460208301516102408301515160038110611a1757611a176130b2565b6020020151516005811115611a2e57611a2e612971565b1415611a8c57611a3c61220b565b8251815152610400820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b600560208301516102408301515160038110611aaa57611aaa6130b2565b6020020151516005811115611ac157611ac1612971565b141561178e5760208201516102408201515160038110611ae357611ae36130b2565b602002015160c001516001600160a01b0316610580820152608082015147908110611b1c576080830151611b17908261313d565b611b1f565b60005b6105a083018190526105808301516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611b62573d6000803e3d6000fd5b50611b6b61220b565b835181515261040083015160208083018051929092528151600091015260408086015182519091015260608086015182519091015251436080918201526105a084015190850151611bbc908261309a565b611bc6919061313d565b602082015160a00152611bd881611e0f565b5050611d6f565b6002602085015151516002811115611bf957611bf9612971565b1415611d6f57602084015151606001516105c0820181905251611c28906001600160a01b031633146019611d75565b611c343415601a611d75565b604080830180516060908101516105e08501805191909152825160209081015182519091015282516080908101518251860152835185015182516001600160a01b0390911693019290925291515182519015159101525190517fbf82bc6b1a83d99dcac34069fc8607583ac2ea8b63940bd95bbd7147a6be267091611cb891612937565b60405180910390a16105e08101516040808501919091526105c0820151805160208201519183015192517ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf93611d0e93916131e6565b60405180910390a1611d1e61220b565b825181515260208084015181830180519190915280516000920191909152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b50505050565b8161043e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611da361222b565b60005b6003811015611def57848160038110611dc157611dc16130b2565b6020020151828260038110611dd857611dd86130b2565b602002015280611de7816130c8565b915050611da6565b5081818460038110611e0357611e036130b2565b60200201529392505050565b80602001516020015115611e365760008080556001819055611e3390600290612258565b50565b611e3e612292565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551611e8891839101613216565b60405160208183030381529060405260029080519060200190611eac9291906122d9565b505050565b60608315611ec057508161023c565b825115611ed05782518084602001fd5b60405163100960cb60e01b815260048101839052602401611d92565b6040805160608101825260008082526020820152908101611f0b611f5f565b905290565b604051806040016040528060008152602001611f0b61235d565b60408051608081019091528060008152602001611f45612370565b8152602001611f52612383565b8152602001611f0b61239d565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060600160405280611fac6123cd565b8152602001611fb961222b565b8152602001611f0b611f5f565b6040518060400160405280611fd9611f5f565b8152602001611f0b611f99565b604051806106400160405280611ffa612370565b81526000602082015260400161200e611f5f565b815260200161201b6123eb565b81526020016120286123eb565b81526020016120356123eb565b815260006020820181905260408201526060016120506123eb565b8152600060208201819052604082015260600161206b611f5f565b81526020016120786123eb565b81526020016120856123eb565b815260006020820181905260408201526060016120a06123eb565b8152600060208201526040016120b4612383565b81526020016120c16123eb565b81526020016120ce6123eb565b81526020016120db6123eb565b815260006020820181905260408201526060016120f66123eb565b81526000602082015260400161210a6123eb565b81526020016121176123eb565b815260006020820181905260408201526060016121326123eb565b81526000602082015260400161214661222b565b815260200161215361240e565b8152602001612160611f5f565b815260200161216d612431565b815260200161217a612431565b81526000602082015260400161218e611f5f565b815260200161219b612431565b81526020016121a8612431565b81526020016121b5611f5f565b81526020016121c261244b565b81526020016121cf6123cd565b815260006020820181905260408201526060016121ea61239d565b81526020016121f7611f5f565b815260200160008152602001600081525090565b604051806040016040528061221e612370565b8152602001611f0b612485565b60405180606001604052806003905b6122426124b9565b81526020019060019003908161223a5790505090565b50805461226490612b75565b6000825580601f10612274575050565b601f016020900490600052602060002090810190611e3391906124f5565b6040518060a001604052806122a56124b9565b81526020016122b261222b565b81526020016122bf61244b565b81526020016122cc6123cd565b8152602001600081525090565b8280546122e590612b75565b90600052602060002090601f016020900481019282612307576000855561234d565b82601f1061232057805160ff191683800117855561234d565b8280016001018555821561234d579182015b8281111561234d578251825591602001919060010190612332565b506123599291506124f5565b5090565b6040518060200160405280611f0b611f2a565b6040518060200160405280611f0b6124b9565b604051806040016040528060008152602001611f0b6124b9565b604051806060016040528060006001600160a01b031681526020016123c061250a565b8152600060209091015290565b60405180606001604052806003906020820280368337509192915050565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806080016040528060006001600160a01b031681526020016123fa61250a565b604051806040016040528060008152602001611f0b61251d565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060c0016040528061249861222b565b8152600060208201526040016124ac61244b565b81526020016121f76123cd565b6040805160e0810190915280600081526020016124d461240e565b8152600060208201526040016124e8611f5f565b81526020016123fa6123cd565b5b8082111561235957600081556001016124f6565b60408051606081019091528060006123fa565b60408051608081018252600091810182815260608201929092529081906122cc565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156125785761257861253f565b60405290565b6040516080810167ffffffffffffffff811182821017156125785761257861253f565b60405160a0810167ffffffffffffffff811182821017156125785761257861253f565b60405160e0810167ffffffffffffffff811182821017156125785761257861253f565b6040805190810167ffffffffffffffff811182821017156125785761257861253f565b6040516020810167ffffffffffffffff811182821017156125785761257861253f565b60068110611e3357600080fd5b6001600160a01b0381168114611e3357600080fd5b803561265a8161263a565b919050565b60028110611e3357600080fd5b8015158114611e3357600080fd5b803561265a8161266c565b60006060828403121561269757600080fd5b61269f612555565b905081356126ac8161265f565b815260208201356126bc8161266c565b602082015260408201356126cf8161263a565b604082015292915050565b600060a082840312156126ec57600080fd5b6126f46125a1565b9050813581526020820135602082015260408201356040820152606082013561271c8161263a565b6060820152608082013561272f8161266c565b608082015292915050565b600082601f83011261274b57600080fd5b612753612555565b80606084018581111561276557600080fd5b845b8181101561278857803561277a8161263a565b845260209384019301612767565b509095945050505050565b60008183036102408112156127a757600080fd5b6127af6125c4565b915082356127bc8161262d565b825260c0601f19820112156127d057600080fd5b506127d961257e565b60208301356127e78161263a565b81526127f68460408501612685565b602082015260a08301356128098161263a565b604082015260c083013561281c8161263a565b6060820152602082015261283260e0830161267a565b60408201526128458361010084016126da565b6060820152612858836101a0840161273a565b608082015261286a610200830161267a565b60a082015261287c610220830161264f565b60c082015292915050565b600080610260838503121561289b57600080fd5b823591506128ac8460208501612793565b90509250929050565b600080600060a084860312156128ca57600080fd5b83356128d58161263a565b92506128e48560208601612685565b915060808401356128f48161263a565b809150509250925092565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a081016101c382846128ff565b8060005b6003811015611d6f5781516001600160a01b0316845260209384019390910190600101612949565b634e487b7160e01b600052602160045260246000fd5b80516002811061299957612999612971565b82526020818101511515908301526040908101516001600160a01b0316910152565b8051600681106129cd576129cd612971565b825260208181015180516001600160a01b0390811683860152918101519091906129fa6040860182612987565b50604082810151821660a086015260609283015190911660c0850152820151151560e0840152810151612a316101008401826128ff565b506080810151612a456101a0840182612945565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b8060005b6003811015611d6f57612a818483516129bb565b610240939093019260209190910190600101612a6d565b60006107c082019050612aac828451612945565b6020830151612abe6060840182612a69565b506040830151612ad26107208401826128ff565b5092915050565b60005b83811015612af4578181015183820152602001612adc565b83811115611d6f5750506000910152565b8281526040602082015260008251806040840152612b2a816060850160208701612ad9565b601f01601f1916919091016060019392505050565b60006105808284031215612b5257600080fd5b50919050565b60006102408284031215612b6b57600080fd5b61023c8383612793565b600181811c90821680612b8957607f821691505b60208210811415612b5257634e487b7160e01b600052602260045260246000fd5b805161265a8161263a565b805161265a8161266c565b600060a08284031215612bd257600080fd5b612bda6125a1565b90508151815260208201516020820152604082015160408201526060820151612c028161263a565b6060820152608082015161272f8161266c565b600082601f830112612c2657600080fd5b612c2e612555565b806060840185811115612c4057600080fd5b845b81811015612788578051612c558161263a565b845260209384019301612c42565b6000818303610240811215612c7757600080fd5b612c7f6125c4565b91508251612c8c8161262d565b825260c0601f1982011215612ca057600080fd5b612ca861257e565b6020840151612cb68161263a565b81526060603f1983011215612cca57600080fd5b612cd2612555565b91506040840151612ce28161265f565b82526060840151612cf28161266c565b60208301526080840151612d058161263a565b604083015260208101829052612d1d60a08501612baa565b6040820152612d2e60c08501612baa565b6060820152602083015250612d4560e08301612bb5565b6040820152612d58836101008401612bc0565b6060820152612d6b836101a08401612c15565b6080820152612d7d6102008301612bb5565b60a082015261287c6102208301612baa565b600060a08284031215612da157600080fd5b612da96125a1565b90508151612db68161266c565b8152602082810151908201526040820151612dd08161263a565b80604083015250606082015160608201526080820151608082015292915050565b6000610a208284031215612e0457600080fd5b612e0c6125a1565b612e168484612c63565b81526102408461025f850112612e2b57600080fd5b612e33612555565b80610900860187811115612e4657600080fd5b8387015b81811015612e6b57612e5c8982612c63565b84526020909301928401612e4a565b50816020860152612e7c8882612d8f565b604086015250505050612e93846109a08501612c15565b6060820152610a009290920151608083015250919050565b600060a08284031215612ebd57600080fd5b612ec5612555565b90508135612ed28161263a565b8152612ee18360208401612685565b602082015260808201356126cf8161263a565b6000818303610580811215612f0857600080fd5b612f106125e7565b83358152610560601f1983011215612f2757600080fd5b612f2f61260a565b612f3761257e565b602086013560038110612f4957600080fd5b8152610240603f1985011215612f5e57600080fd5b612f6661260a565b612f738860408901612793565b8152602082015261026061027f1985011215612f8e57600080fd5b612f966125e7565b93506102808601358452612fae876102a08801612793565b6020850152836040820152612fc7876104e08801612eab565b606082015281526020820152949350505050565b6001600160a01b03838116825282516020808401919091528301515180516105a084019291906003811061301157613011612971565b80604086015250602081015161302b6060860182516129bb565b50604081015180516102a08601526020015161304b6102c08601826129bb565b506060015180518216610500850152602081015161306d610520860182612987565b508160408201511661058085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156130ad576130ad613084565b500190565b634e487b7160e01b600052603260045260246000fd5b60006000198214156130dc576130dc613084565b5060010190565b6001600160a01b0383168152610260810161023c60208301846129bb565b61024081016101c382846129bb565b6001600160a01b038416815260208101839052610280810161313560408301846129bb565b949350505050565b60008282101561314f5761314f613084565b500390565b6001600160a01b038316815260c0810161023c60208301846128ff565b60008251613183818460208701612ad9565b9190910192915050565b600081830360608112156131a057600080fd5b6131a86125e7565b60408212156131b657600080fd5b6131be6125e7565b9150835182526020840151602083015281815260408401516020820152809250505092915050565b6001600160a01b03848116825260a08201906132056020840186612987565b808416608084015250949350505050565b6000610a208201905061322a8284516129bb565b602083015161323d610240840182612a69565b50604083810151805115156109008501526020810151610920850152908101516001600160a01b03166109408401526060808201516109608501526080909101516109808401528301516132956109a0840182612945565b506080830151610a008301529291505056fea2646970667358221220d1e6b2bd11c549615f8a20ecc93a5aa058e092cd1ad9d5ac551c4bbb06012c8764736f6c634300080c0033",BytecodeLen:15431,Which:"oD",version:7,views:{Info:"Info"}},_stateSourceMap={2:{at:"./index.rsh:215:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./index.rsh:134:19:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Admin:Admin,Triumvir_propose:Triumvir_propose,Triumvir_support:Triumvir_support,register:register},_APIs={Triumvir:{propose:Triumvir_propose,support:Triumvir_support},register:register};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Admin,_Triumvir_propose3,_Triumvir_support3,_register3,Triumvir_propose,Triumvir_support,register,_stateSourceMap,_Connectors,_Participants,_APIs};