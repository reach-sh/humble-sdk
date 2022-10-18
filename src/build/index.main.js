const _version="0.1.10",_versionHash="0.1.10 (2604daf0)",_backendVersion=16;function getExports(e){const b=e.reachStdlib;e=b.T_UInt;const o=b.T_Struct([["A",e],["B",e]]),p=b.T_Bool;var t=b.T_Address;const f=b.T_Struct([["protoFee",e],["lpFee",e],["totFee",e],["protoAddr",t],["locked",p]]);return{computeMint_:(e,t,i)=>{var e=b.protect(o,e,null),t=b.protect(o,t,null),i=b.protect(o,i,null),a=e.A,e=e.B,n=t.A,t=t.B,i=i.B;let c;var r,d=b.eq(i,b.checkedBigNumberify("284:19:decimal",b.UInt_max,"0"));return c=d?(d=b.cast("UInt","UInt256",a,!1),r=b.cast("UInt","UInt256",e,!1),d=b.mul256(d,r),r=b.sqrt256(d),b.cast("UInt256","UInt",r,!1)):(d=b.muldiv(a,i,n),r=b.muldiv(e,i,t),b.lt(d,r)?d:r)},computeSwap_:(e,t,i,a)=>{var e=b.protect(p,e,null),t=b.protect(o,t,null),i=b.protect(o,i,null),a=b.protect(f,a,null),n=t.A,t=t.B,c=i.A,i=i.B,r=a.protoFee,d=a.lpFee,a=a.totFee,l=b.lt(r,b.checkedBigNumberify("./index.rsh:72:14:decimal",b.UInt_max,"100")),u=b.lt(d,b.checkedBigNumberify("./index.rsh:73:14:decimal",b.UInt_max,"100")),l=!!l&&u,u=b.add(d,r),d=b.eq(a,u),u=!!l&&d,l=b.lt(a,b.checkedBigNumberify("./index.rsh:75:15:decimal",b.UInt_max,"100")),d=!!u&&l,u=b.gt(a,b.checkedBigNumberify("./index.rsh:76:15:decimal",b.UInt_max,"0")),l=!!d&&u,d=(b.assert(l,{at:"<top level>",fs:[],msg:null,who:"Module"}),b.gt(b.UInt_max,b.checkedBigNumberify("./index.rsh:70:22:decimal",b.UInt_max,"10000")));b.assert(d,{at:"275:10:application",fs:['at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"});let m;var s=(m=e?(u=b.eq(t,b.checkedBigNumberify("./index.rsh:262:18:decimal",b.UInt_max,"0")),b.assert(u,{at:"./index.rsh:262:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),l=b.add(c,n),d=b.muldiv(n,i,l),e=b.cast("UInt","UInt256",n,!1),u=b.cast("UInt","UInt256",a,!1),u=b.sub256(b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),u),e=b.mul256(e,u),u=b.cast("UInt","UInt256",c,!1),u=b.mul256(u,b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),u=b.add256(u,e),s=b.cast("UInt","UInt256",i,!1),e=b.mul256(e,s),s=b.div256(e,u),e=b.cast("UInt256","UInt",s,!1),u=b.sub(d,e),s=b.mul(r,b.checkedBigNumberify("./index.rsh:243:40:decimal",b.UInt_max,"100")),d=b.div(s,a),s=b.muldiv(u,d,b.checkedBigNumberify("./index.rsh:245:54:decimal",b.UInt_max,"100")),u=b.muldiv(n,r,b.checkedBigNumberify("./index.rsh:247:49:decimal",b.UInt_max,"10000")),d=b.muldiv(u,i,l),l=b.gt(d,s),d=[u,b.checkedBigNumberify("<builtin>",b.UInt_max,"0")],u=[b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),s],l=(s=l?d:u)[b.checkedBigNumberify("./index.rsh:263:19:array",b.UInt_max,"0")],d=s[b.checkedBigNumberify("./index.rsh:263:19:array",b.UInt_max,"1")],[{A:b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),B:e},{A:l,B:d}]):(u=b.eq(n,b.checkedBigNumberify("./index.rsh:267:18:decimal",b.UInt_max,"0")),b.assert(u,{at:"./index.rsh:267:10:application",fs:['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)','at <top level> call to "computeSwap_" (defined at: <top level>)'],msg:null,who:"Module"}),s=b.add(i,t),e=b.muldiv(t,c,s),l=b.cast("UInt","UInt256",t,!1),d=b.cast("UInt","UInt256",a,!1),n=b.sub256(b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000"),d),u=b.mul256(l,n),d=b.cast("UInt","UInt256",i,!1),l=b.mul256(d,b.checkedBigNumberify("./index.rsh:70:22:decimal","115792089237316195423570985008687907853269984665640564039457584007913129639935","10000")),n=b.add256(l,u),i=b.cast("UInt","UInt256",c,!1),d=b.mul256(u,i),l=b.div256(d,n),u=b.cast("UInt256","UInt",l,!1),i=b.sub(e,u),d=b.mul(r,b.checkedBigNumberify("./index.rsh:243:40:decimal",b.UInt_max,"100")),n=b.div(d,a),l=b.muldiv(i,n,b.checkedBigNumberify("./index.rsh:245:54:decimal",b.UInt_max,"100")),e=b.muldiv(t,r,b.checkedBigNumberify("./index.rsh:247:49:decimal",b.UInt_max,"10000")),d=b.muldiv(e,c,s),a=b.gt(d,l),i=[e,b.checkedBigNumberify("<builtin>",b.UInt_max,"0")],n=[b.checkedBigNumberify("<builtin>",b.UInt_max,"0"),l],r=(t=a?i:n)[b.checkedBigNumberify("./index.rsh:268:19:array",b.UInt_max,"0")],c=t[b.checkedBigNumberify("./index.rsh:268:19:array",b.UInt_max,"1")],[{A:u,B:b.checkedBigNumberify("<builtin>",b.UInt_max,"0")},{A:c,B:r}]))[b.checkedBigNumberify("276:11:array",b.UInt_max,"0")],d=m[b.checkedBigNumberify("276:11:array",b.UInt_max,"1")];return[{A:s.A,B:s.B},{A:d.A,B:d.B}]}}}function _getEvents(e){e.reachStdlib;return{}}function _getViews(e,t){e.reachStdlib;return{infos:{},views:{}}}function _getMaps(e){return{mapDataTy:e.reachStdlib.T_Tuple([])}}const _ALGO={ABI:{impure:[],pure:[],sigs:[]},appApproval:"BiACAAEmAQAiNQAxGEEAeShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARcAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M=",appClear:"Bg==",companionInfo:null,extraPages:0,mapDataKeys:0,mapDataSize:0,stateKeys:0,stateSize:0,unsupported:[],version:10,warnings:[]},_ETH={ABI:`[
  {
    "stateMutability": "payable",
    "type": "fallback"
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,Bytecode:"0x608060405234801561001057600080fd5b50610205806100206000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212203674230ef8acb124f0ab034b4914228c0bb52386fecb71b2dcb0f0037bb0c22964736f6c634300080c0033",BytecodeLen:549,Which:"oD",version:7,views:{}},_stateSourceMap={},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={},_APIs={};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,_stateSourceMap,_Connectors,_Participants,_APIs};