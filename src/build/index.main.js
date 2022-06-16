// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    computeMint_: ((_v24, _v25, _v26 ) => {
        const v24 = stdlib.protect(ctc1, _v24, null);
        const v25 = stdlib.protect(ctc1, _v25, null);
        const v26 = stdlib.protect(ctc1, _v26, null);
      
      const v27 = v24.A;
      const v28 = v24.B;
      const v29 = v25.A;
      const v30 = v25.B;
      const v32 = v26.B;
      let v33;
      const v40 = stdlib.eq(v32, stdlib.checkedBigNumberify('284:19:decimal', stdlib.UInt_max, '0'));
      if (v40) {
        const v41 = stdlib.cast("UInt", "UInt256", v27, false);
        const v42 = stdlib.cast("UInt", "UInt256", v28, false);
        const v43 = stdlib.mul256(v41, v42);
        const v44 = stdlib.sqrt256(v43);
        const v45 = stdlib.cast("UInt256", "UInt", v44, false);
        v33 = v45;
        }
      else {
        const v54 = stdlib.muldiv(v27, v32, v29);
        const v61 = stdlib.muldiv(v28, v32, v30);
        const v63 = stdlib.lt(v54, v61);
        const v64 = v63 ? v54 : v61;
        v33 = v64;
        }
      
      return v33;}),
    computeSwap_: ((_v65, _v66, _v67, _v68 ) => {
        const v65 = stdlib.protect(ctc2, _v65, null);
        const v66 = stdlib.protect(ctc1, _v66, null);
        const v67 = stdlib.protect(ctc1, _v67, null);
        const v68 = stdlib.protect(ctc4, _v68, null);
      
      const v69 = v66.A;
      const v70 = v66.B;
      const v71 = v67.A;
      const v72 = v67.B;
      const v74 = v68.protoFee;
      const v75 = v68.lpFee;
      const v76 = v68.totFee;
      const v77 = stdlib.lt(v74, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v78 = stdlib.lt(v75, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v79 = v77 ? v78 : false;
      const v80 = stdlib.add(v75, v74);
      const v81 = stdlib.eq(v76, v80);
      const v82 = v79 ? v81 : false;
      const v83 = stdlib.lt(v76, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v84 = v82 ? v83 : false;
      const v85 = stdlib.gt(v76, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v86 = v84 ? v85 : false;
      stdlib.assert(v86, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v88 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v88, {
        at: '275:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v89;
      if (v65) {
        const v94 = stdlib.eq(v70, stdlib.checkedBigNumberify('./index.rsh:262:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v94, {
          at: './index.rsh:262:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v103 = stdlib.add(v71, v69);
        const v111 = stdlib.muldiv(v69, v72, v103);
        const v112 = stdlib.cast("UInt", "UInt256", v69, false);
        const v113 = stdlib.cast("UInt", "UInt256", v76, false);
        const v114 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v113);
        const v115 = stdlib.mul256(v112, v114);
        const v116 = stdlib.cast("UInt", "UInt256", v71, false);
        const v117 = stdlib.mul256(v116, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v118 = stdlib.add256(v117, v115);
        const v119 = stdlib.cast("UInt", "UInt256", v72, false);
        const v120 = stdlib.mul256(v115, v119);
        const v121 = stdlib.div256(v120, v118);
        const v122 = stdlib.cast("UInt256", "UInt", v121, false);
        const v127 = stdlib.sub(v111, v122);
        const v131 = stdlib.mul(v74, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v132 = stdlib.div(v131, v76);
        const v138 = stdlib.muldiv(v127, v132, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v143 = stdlib.muldiv(v69, v74, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v151 = stdlib.muldiv(v143, v72, v103);
        const v152 = stdlib.gt(v151, v138);
        const v153 = [v143, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v154 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v138];
        const v155 = v152 ? v153 : v154;
        const v157 = v155[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
        const v158 = v155[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
        const v160 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v122
          };
        const v162 = {
          A: v157,
          B: v158
          };
        const v163 = [v160, v162];
        v89 = v163;
        }
      else {
        const v164 = stdlib.eq(v69, stdlib.checkedBigNumberify('./index.rsh:267:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v164, {
          at: './index.rsh:267:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v173 = stdlib.add(v72, v70);
        const v181 = stdlib.muldiv(v70, v71, v173);
        const v182 = stdlib.cast("UInt", "UInt256", v70, false);
        const v183 = stdlib.cast("UInt", "UInt256", v76, false);
        const v184 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v183);
        const v185 = stdlib.mul256(v182, v184);
        const v186 = stdlib.cast("UInt", "UInt256", v72, false);
        const v187 = stdlib.mul256(v186, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v188 = stdlib.add256(v187, v185);
        const v189 = stdlib.cast("UInt", "UInt256", v71, false);
        const v190 = stdlib.mul256(v185, v189);
        const v191 = stdlib.div256(v190, v188);
        const v192 = stdlib.cast("UInt256", "UInt", v191, false);
        const v197 = stdlib.sub(v181, v192);
        const v201 = stdlib.mul(v74, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v202 = stdlib.div(v201, v76);
        const v208 = stdlib.muldiv(v197, v202, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v213 = stdlib.muldiv(v70, v74, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v221 = stdlib.muldiv(v213, v71, v173);
        const v222 = stdlib.gt(v221, v208);
        const v223 = [v213, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v224 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v208];
        const v225 = v222 ? v223 : v224;
        const v227 = v225[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
        const v228 = v225[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
        const v230 = {
          A: v192,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v232 = {
          A: v228,
          B: v227
          };
        const v233 = [v230, v232];
        v89 = v233;
        }
      const v234 = v89[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '0')];
      const v235 = v89[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '1')];
      const v236 = v234.A;
      const v237 = v234.B;
      const v238 = v235.A;
      const v239 = v235.B;
      const v240 = {
        A: v236,
        B: v237
        };
      const v241 = {
        A: v238,
        B: v239
        };
      const v242 = [v240, v241];
      
      return v242;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEAeShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARcAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
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
]`,
  Bytecode: `0x608060405234801561001057600080fd5b50610205806100206000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212203674230ef8acb124f0ab034b4914228c0bb52386fecb71b2dcb0f0037bb0c22964736f6c634300080c0033`,
  BytecodeLen: 549,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  };
export const _APIs = {
  };