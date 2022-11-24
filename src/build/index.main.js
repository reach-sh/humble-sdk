// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    calcAmtIn_: ((_v25, _v26, _v27, _v28 ) => {
        const v25 = stdlib.protect(ctc0, _v25, null);
        const v26 = stdlib.protect(ctc0, _v26, null);
        const v27 = stdlib.protect(ctc0, _v27, null);
        const v28 = stdlib.protect(ctc0, _v28, null);
      
      const v30 = stdlib.safeSub(v26, v25);
      const v31 = stdlib.cast("UInt", "UInt256", v30, false, true);
      const v32 = stdlib.cast("UInt", "UInt256", v27, false, true);
      const v33 = stdlib.cast("UInt", "UInt256", v25, false, true);
      const v34 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v28);
      const v35 = stdlib.cast("UInt", "UInt256", v34, false, true);
      const v36 = stdlib.safeMul256(v33, v35);
      const v37 = stdlib.safeMul256(v31, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v38 = stdlib.safeMul256(v36, v32);
      const v39 = stdlib.safeDiv256(v38, v37);
      const v40 = stdlib.cast("UInt256", "UInt", v39, false, true);
      const v41 = stdlib.safeAdd(v40, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v41;}),
    computeMint_: ((_v42, _v43, _v44 ) => {
        const v42 = stdlib.protect(ctc1, _v42, null);
        const v43 = stdlib.protect(ctc1, _v43, null);
        const v44 = stdlib.protect(ctc1, _v44, null);
      
      const v45 = v42.A;
      const v46 = v42.B;
      const v47 = v43.A;
      const v48 = v43.B;
      const v50 = v44.B;
      let v51;
      const v58 = stdlib.eq(v50, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v58) {
        const v59 = stdlib.cast("UInt", "UInt256", v45, false, true);
        const v60 = stdlib.cast("UInt", "UInt256", v46, false, true);
        const v61 = stdlib.safeMul256(v59, v60);
        const v62 = stdlib.sqrt256(v61);
        const v63 = stdlib.cast("UInt256", "UInt", v62, false, true);
        v51 = v63;
        }
      else {
        const v72 = stdlib.safeMuldiv(v45, v50, v47);
        const v79 = stdlib.safeMuldiv(v46, v50, v48);
        const v81 = stdlib.lt(v72, v79);
        const v82 = v81 ? v72 : v79;
        v51 = v82;
        }
      
      return v51;}),
    computeSwap_: ((_v83, _v84, _v85, _v86 ) => {
        const v83 = stdlib.protect(ctc2, _v83, null);
        const v84 = stdlib.protect(ctc1, _v84, null);
        const v85 = stdlib.protect(ctc1, _v85, null);
        const v86 = stdlib.protect(ctc4, _v86, null);
      
      const v87 = v84.A;
      const v88 = v84.B;
      const v89 = v85.A;
      const v90 = v85.B;
      const v92 = v86.protoFee;
      const v93 = v86.lpFee;
      const v94 = v86.totFee;
      const v95 = stdlib.lt(v92, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v96 = stdlib.lt(v93, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v97 = v95 ? v96 : false;
      let v100;
      if (v97) {
        const v98 = stdlib.safeAdd(v93, v92);
        const v99 = stdlib.eq(v94, v98);
        v100 = v99;
        }
      else {
        v100 = false;
        }
      const v101 = stdlib.lt(v94, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v102 = v100 ? v101 : false;
      const v103 = stdlib.gt(v94, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v104 = v102 ? v103 : false;
      stdlib.assert(v104, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v106 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v106, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v122;
      if (v83) {
        const v127 = stdlib.eq(v88, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v127, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v150 = stdlib.cast("UInt", "UInt256", v90, false, true);
        const v151 = stdlib.cast("UInt", "UInt256", v89, false, true);
        const v152 = stdlib.cast("UInt", "UInt256", v87, false, true);
        const v153 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v94);
        const v154 = stdlib.cast("UInt", "UInt256", v153, false, true);
        const v155 = stdlib.safeMul256(v152, v154);
        const v156 = stdlib.safeMul256(v151, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v157 = stdlib.safeAdd256(v156, v155);
        const v158 = stdlib.safeMul256(v155, v150);
        const v159 = stdlib.safeDiv256(v158, v157);
        const v160 = stdlib.cast("UInt256", "UInt", v159, false, true);
        const v167 = stdlib.safeMul(v92, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v168 = stdlib.safeDiv(v167, v94);
        const v175 = stdlib.safeAdd(v89, v87);
        const v183 = stdlib.safeMuldiv(v87, v90, v175);
        const v188 = stdlib.safeSub(v183, v160);
        const v194 = stdlib.safeMuldiv(v188, v168, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v199 = stdlib.safeMuldiv(v87, v92, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v207 = stdlib.safeMuldiv(v199, v90, v175);
        const v208 = stdlib.gt(v207, v194);
        const v209 = [v199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v210 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v194];
        const v211 = v208 ? v209 : v210;
        const v213 = v211[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v214 = v211[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v215 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v160
          };
        const v216 = {
          A: v213,
          B: v214
          };
        const v217 = [v215, v216, v87];
        v122 = v217;
        }
      else {
        const v218 = stdlib.eq(v87, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v218, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v241 = stdlib.cast("UInt", "UInt256", v89, false, true);
        const v242 = stdlib.cast("UInt", "UInt256", v90, false, true);
        const v243 = stdlib.cast("UInt", "UInt256", v88, false, true);
        const v244 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v94);
        const v245 = stdlib.cast("UInt", "UInt256", v244, false, true);
        const v246 = stdlib.safeMul256(v243, v245);
        const v247 = stdlib.safeMul256(v242, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v248 = stdlib.safeAdd256(v247, v246);
        const v249 = stdlib.safeMul256(v246, v241);
        const v250 = stdlib.safeDiv256(v249, v248);
        const v251 = stdlib.cast("UInt256", "UInt", v250, false, true);
        const v258 = stdlib.safeMul(v92, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v259 = stdlib.safeDiv(v258, v94);
        const v266 = stdlib.safeAdd(v90, v88);
        const v274 = stdlib.safeMuldiv(v88, v89, v266);
        const v279 = stdlib.safeSub(v274, v251);
        const v285 = stdlib.safeMuldiv(v279, v259, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v290 = stdlib.safeMuldiv(v88, v92, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v298 = stdlib.safeMuldiv(v290, v89, v266);
        const v299 = stdlib.gt(v298, v285);
        const v300 = [v290, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v301 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v285];
        const v302 = v299 ? v300 : v301;
        const v304 = v302[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v305 = v302[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v306 = {
          A: v251,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v307 = {
          A: v305,
          B: v304
          };
        const v308 = [v306, v307, v88];
        v122 = v308;
        }
      const v309 = v122[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v310 = v122[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v312 = v309.A;
      const v313 = v309.B;
      const v314 = v310.A;
      const v315 = v310.B;
      const v316 = {
        A: v312,
        B: v313
        };
      const v317 = {
        A: v314,
        B: v315
        };
      const v318 = [v316, v317];
      
      return v318;})
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
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByACAAEmAQAiNQAxGEEAeShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARcAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rw==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60808060405234610016576101e5908161001c8239f35b600080fdfe6080604090808252600436101561001d575b5050361561001b57005b005b600090813560e01c9081631e93b0f1146101bc5750806383230757146101995763ab53f2c60361001157346101965780600319360112610196578054918051918060025490600182811c9080841693841561018c575b60209485841081146101785783895288949392918690821561015c575050600114610121575b5050601f801996879203011681019581871060018060401b0388111761010d5785858589958694858452855282818601528551809386015281955b8387106100f45750506060945090601f9185828601015201168101030190f35b86810182015188880160600152958101958795506100d4565b634e487b7160e01b84526041600452602484fd5b90849250600286528286209186925b828410610144575050508201013880610099565b8054848b018601528995508694909301928101610130565b925093505060ff191682840152151560051b8201013880610099565b634e487b7160e01b87526022600452602487fd5b91607f1691610073565b80fd5b5090346101b857816003193601126101b8576020906001549051908152f35b5080fd5b9050346101b857816003193601126101b8576020906003548152f3fea164736f6c6343000810000a`,
  BytecodeLen: 513,
  version: 9,
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
