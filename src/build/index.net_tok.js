// Automatically generated with Reach 0.1.10 (31c3a32d)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (31c3a32d)';
export const _backendVersion = 12;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    computeMint_: ((_v24, _v25, _v26, _v27 ) => {
        const v24 = stdlib.protect(ctc1, _v24, null);
        const v25 = stdlib.protect(ctc0, _v25, null);
        const v26 = stdlib.protect(ctc1, _v26, null);
        const v27 = stdlib.protect(ctc1, _v27, null);
      
      let v28;
      const v29 = v24.A;
      const v30 = v24.B;
      const v33 = v27.B;
      const v35 = stdlib.eq(v33, stdlib.checkedBigNumberify('158:19:decimal', stdlib.UInt_max, '0'));
      if (v35) {
        const v36 = stdlib.cast(false, true, v29);
        const v37 = stdlib.cast(false, true, v30);
        const v38 = stdlib.mul256(v36, v37);
        const v39 = stdlib.cast(false, true, v25);
        const v41 = stdlib.mul256(v39, v39);
        const v42 = stdlib.eq256(v38, v41);
        stdlib.assert(v42, {
          at: '161:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        v28 = v25;
        }
      else {
        const v43 = v26.A;
        const v44 = v26.B;
        const v45 = stdlib.eq(v25, stdlib.checkedBigNumberify('165:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v45, {
          at: '165:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v52 = stdlib.muldiv(v29, v43, v33);
        const v59 = stdlib.muldiv(v30, v44, v33);
        const v61 = stdlib.lt(v52, v59);
        const v62 = v61 ? v52 : v59;
        v28 = v62;
        }
      
      return v28;}),
    computeSwap_: ((_v63, _v64, _v65, _v66 ) => {
        const v63 = stdlib.protect(ctc2, _v63, null);
        const v64 = stdlib.protect(ctc1, _v64, null);
        const v65 = stdlib.protect(ctc1, _v65, null);
        const v66 = stdlib.protect(ctc4, _v66, null);
      
      const v68 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v68, {
        at: '148:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v71 = v66.protoFee;
      const v72 = v66.lpFee;
      const v73 = stdlib.lt(v71, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v73, {
        at: './index.rsh:79:8:application',
        fs: ['at ./index.rsh:83:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at 149:12:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v74 = stdlib.lt(v72, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v74, {
        at: './index.rsh:80:8:application',
        fs: ['at ./index.rsh:83:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at 149:12:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v78 = v66.totFee;
      const v82 = stdlib.add(v72, v71);
      const v83 = stdlib.eq(v78, v82);
      const v85 = stdlib.lt(v78, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v86 = v83 ? v85 : false;
      const v87 = stdlib.gt(v78, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v88 = v86 ? v87 : false;
      stdlib.assert(v88, {
        at: './index.rsh:84:8:application',
        fs: ['at 149:12:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v89;
      const v90 = v64.A;
      const v91 = v64.B;
      const v92 = v65.A;
      const v93 = v65.B;
      if (v63) {
        const v102 = stdlib.add(v92, v90);
        const v110 = stdlib.muldiv(v90, v93, v102);
        const v111 = stdlib.cast(false, true, v90);
        const v112 = stdlib.cast(false, true, v78);
        const v113 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v112);
        const v114 = stdlib.mul256(v111, v113);
        const v115 = stdlib.cast(false, true, v102);
        const v116 = stdlib.mul256(v115, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v117 = stdlib.add256(v116, v114);
        const v118 = stdlib.cast(false, true, v93);
        const v119 = stdlib.mul256(v114, v118);
        const v120 = stdlib.div256(v119, v117);
        const v121 = stdlib.cast(true, false, v120);
        const v126 = stdlib.sub(v110, v121);
        const v130 = stdlib.mul(v71, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v131 = stdlib.div(v130, v78);
        const v137 = stdlib.muldiv(v126, v131, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v142 = stdlib.muldiv(v90, v71, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v150 = stdlib.muldiv(v142, v93, v102);
        const v151 = stdlib.gt(v150, v137);
        const v152 = [v142, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v153 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v137];
        const v154 = v151 ? v152 : v153;
        const v156 = v154[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
        const v157 = v154[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
        const v159 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v121
          };
        const v161 = {
          A: v156,
          B: v157
          };
        const v162 = [v159, v161];
        v89 = v162;
        }
      else {
        const v163 = stdlib.eq(v90, stdlib.checkedBigNumberify('./index.rsh:140:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v163, {
          at: './index.rsh:140:10:application',
          fs: ['at 150:31:application call to "computeSwap" (defined at: ./index.rsh:132:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v172 = stdlib.add(v93, v91);
        const v180 = stdlib.muldiv(v91, v92, v172);
        const v181 = stdlib.cast(false, true, v91);
        const v182 = stdlib.cast(false, true, v78);
        const v183 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v182);
        const v184 = stdlib.mul256(v181, v183);
        const v185 = stdlib.cast(false, true, v172);
        const v186 = stdlib.mul256(v185, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v187 = stdlib.add256(v186, v184);
        const v188 = stdlib.cast(false, true, v92);
        const v189 = stdlib.mul256(v184, v188);
        const v190 = stdlib.div256(v189, v187);
        const v191 = stdlib.cast(true, false, v190);
        const v196 = stdlib.sub(v180, v191);
        const v200 = stdlib.mul(v71, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v201 = stdlib.div(v200, v78);
        const v207 = stdlib.muldiv(v196, v201, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v212 = stdlib.muldiv(v91, v71, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v220 = stdlib.muldiv(v212, v92, v172);
        const v221 = stdlib.gt(v220, v207);
        const v222 = [v212, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v223 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v207];
        const v224 = v221 ? v222 : v223;
        const v226 = v224[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
        const v227 = v224[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
        const v229 = {
          A: v191,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v231 = {
          A: v227,
          B: v226
          };
        const v232 = [v229, v231];
        v89 = v232;
        }
      const v233 = v89[stdlib.checkedBigNumberify('150:11:array', stdlib.UInt_max, '0')];
      const v234 = v89[stdlib.checkedBigNumberify('150:11:array', stdlib.UInt_max, '1')];
      const v235 = v233.A;
      const v236 = v233.B;
      const v237 = v234.A;
      const v238 = v234.B;
      const v239 = {
        A: v235,
        B: v236
        };
      const v240 = {
        A: v237,
        B: v238
        };
      const v241 = [v239, v240];
      
      return v241;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc2], ['locked', ctc3]]);
  return {
    Deposit: [ctc1, ctc0, ctc1, ctc1],
    Harvest: [ctc4],
    Swap: [ctc1, ctc1, ctc1],
    Withdraw: [ctc0, ctc1, ctc1, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc7 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc0
    });
  const ctc10 = stdlib.T_Struct([['liquidityToken', ctc0], ['lptBals', ctc6], ['poolBals', ctc6], ['protoInfo', ctc7], ['protoBals', ctc6], ['tokB', ctc0], ['tokA', ctc9]]);
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v2978, v3002, v3037, v3038, v3039, v3040] = svs;
            return (await ((async () => {
              
              const v7128 = v3037.A;
              const v7129 = v3037.B;
              const v7130 = v3038.A;
              const v7131 = v3038.B;
              const v7132 = v3040.protoFee;
              const v7133 = v3040.lpFee;
              const v7134 = v3040.totFee;
              const v7135 = v3040.protoAddr;
              const v7136 = v3040.locked;
              const v7137 = v3039.A;
              const v7138 = v3039.B;
              const v7139 = {
                A: v7128,
                B: v7129
                };
              const v7140 = {
                A: v7130,
                B: v7131
                };
              const v7141 = {
                locked: v7136,
                lpFee: v7133,
                protoAddr: v7135,
                protoFee: v7132,
                totFee: v7134
                };
              const v7142 = {
                A: v7137,
                B: v7138
                };
              const v7143 = ['None', null];
              const v7144 = {
                liquidityToken: v3002,
                lptBals: v7139,
                poolBals: v7140,
                protoBals: v7142,
                protoInfo: v7141,
                tokA: v7143,
                tokB: v2978
                };
              
              return v7144;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044] = svs;
            return (await ((async () => {
              
              const v3111 = v3037.A;
              const v3112 = v3037.B;
              const v3113 = v3038.A;
              const v3114 = v3038.B;
              const v3115 = v3040.protoFee;
              const v3116 = v3040.lpFee;
              const v3117 = v3040.totFee;
              const v3118 = v3040.protoAddr;
              const v3119 = v3040.locked;
              const v3120 = v3039.A;
              const v3121 = v3039.B;
              const v3122 = {
                A: v3111,
                B: v3112
                };
              const v3123 = {
                A: v3113,
                B: v3114
                };
              const v3124 = {
                locked: v3119,
                lpFee: v3116,
                protoAddr: v3118,
                protoFee: v3115,
                totFee: v3117
                };
              const v3125 = {
                A: v3120,
                B: v3121
                };
              const v3126 = ['None', null];
              const v3127 = {
                liquidityToken: v3002,
                lptBals: v3122,
                poolBals: v3123,
                protoBals: v3125,
                protoInfo: v3124,
                tokA: v3126,
                tokB: v2978
                };
              
              return v3127;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        }
      },
    views: {
      2: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]
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
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc2], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc10 = stdlib.T_Tuple([ctc9, ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_466: ctc8,
    Provider_deposit0_466: ctc10,
    Provider_withdraw0_466: ctc11,
    Trader_swapAForB0_466: ctc12,
    Trader_swapBForA0_466: ctc12
    });
  const ctc14 = stdlib.T_Tuple([]);
  
  
  const v2968 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v2969 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v2970 = stdlib.protect(ctc2, interact.protoAddr, 'for Admin\'s interact field protoAddr');
  const v2971 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v2975 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2975, {
    at: './index.rsh:217:10:application',
    fs: ['at ./index.rsh:226:15:application call to "checkInput" (defined at: ./index.rsh:216:37:function exp)', 'at ./index.rsh:220:13:application call to [unknown function] (defined at: ./index.rsh:220:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [null, v2971, v2968, v2969, v2970],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:228:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:228:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2977, v2978, v2979, v2980, v2981], secs: v2983, time: v2982, didSend: v262, from: v2976 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2978
        });
      ;
      const v2992 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      ;
      const v2998 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2999 = '                                                                                                ';
      const v3000 = '                                ';
      const v3001 = stdlib.simTokenNew(sim_r, v2979, v2980, v2999, v3000, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v3002 = await txn1.getOutput('internal', 'v3001', ctc3, v3001);
      const v3003 = [v2978];
      const v7207 = v3003[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
      const v7211 = stdlib.tokenEq(v3002, v7207);
      const v3011 = v7211 ? false : true;
      ;
      
      const v3033 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3035 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v2981,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v3036 = false;
      const v3037 = v2998;
      const v3038 = v3033;
      const v3039 = v3033;
      const v3040 = v3035;
      const v3041 = v2982;
      const v3044 = stdlib.checkedBigNumberify('./index.rsh:214:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v3110 = v3036 ? false : true;
        
        return v3110;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v2977, v2978, v2979, v2980, v2981], secs: v2983, time: v2982, didSend: v262, from: v2976 } = txn1;
  ;
  ;
  const v2992 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2992, {
    at: './index.rsh:217:10:application',
    fs: ['at ./index.rsh:229:13:application call to "checkInput" (defined at: ./index.rsh:216:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v2998 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v2999 = '                                                                                                ';
  const v3000 = '                                ';
  const v3001 = undefined /* TokenNew */;
  const v3002 = await txn1.getOutput('internal', 'v3001', ctc3, v3001);
  const v3003 = [v2978];
  const v7207 = v3003[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v7211 = stdlib.tokenEq(v3002, v7207);
  const v3011 = v7211 ? false : true;
  stdlib.assert(v3011, {
    at: './index.rsh:239:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v3002), {
    at: './index.rsh:247:36:application',
    fs: ['at ./index.rsh:247:36:application call to [unknown function] (defined at: ./index.rsh:247:36:function exp)', 'at ./index.rsh:247:36:application call to "liftedInteract" (defined at: ./index.rsh:247:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v3033 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v3035 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v2981,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v3036 = false;
  let v3037 = v2998;
  let v3038 = v3033;
  let v3039 = v3033;
  let v3040 = v3035;
  let v3041 = v2982;
  let v3044 = stdlib.checkedBigNumberify('./index.rsh:214:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v3110 = v3036 ? false : true;
    
    return v3110;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn2;
    switch (v3665[0]) {
      case 'Harvester_harvest0_466': {
        const v3668 = v3665[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v3793 = v3668[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '0')];
        const v3794 = v3668[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
        const v3795 = v3794.protoAddr;
        const v3796 = v3794.protoFee;
        const v3797 = v3794.lpFee;
        const v3798 = v3794.locked;
        const v3799 = v3040.protoAddr;
        const v3800 = stdlib.addressEq(v3664, v3799);
        stdlib.assert(v3800, {
          at: './index.rsh:277:14:application',
          fs: ['at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: 'Thou art not the harvester',
          who: 'Admin'
          });
        const v3802 = stdlib.lt(v3796, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v3802, {
          at: './index.rsh:79:8:application',
          fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3803 = stdlib.lt(v3797, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v3803, {
          at: './index.rsh:80:8:application',
          fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3807 = stdlib.add(v3796, v3797);
        const v3816 = stdlib.add(v3797, v3796);
        const v3817 = stdlib.eq(v3807, v3816);
        const v3819 = stdlib.lt(v3807, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v3820 = v3817 ? v3819 : false;
        const v3821 = stdlib.gt(v3807, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v3822 = v3820 ? v3821 : false;
        stdlib.assert(v3822, {
          at: './index.rsh:84:8:application',
          fs: ['at ./index.rsh:280:16:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3824 = (stdlib.le(await ctc.getBalance(), v3044) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3044));
        const v3825 = stdlib.add(v3824, v3044);
        const v3827 = v3037.B;
        const v3830 = stdlib.eq(v3827, stdlib.checkedBigNumberify('./index.rsh:284:45:decimal', stdlib.UInt_max, '0'));
        const v3831 = v3798 ? v3830 : false;
        const v3832 = v3038.A;
        const v3833 = v3038.B;
        const v3834 = stdlib.eq(v3832, stdlib.checkedBigNumberify('./index.rsh:263:37:decimal', stdlib.UInt_max, '0'));
        const v3835 = stdlib.eq(v3833, stdlib.checkedBigNumberify('./index.rsh:263:47:decimal', stdlib.UInt_max, '0'));
        const v3836 = v3834 ? v3835 : false;
        const v3837 = v3831 ? v3836 : false;
        const v3838 = v3039.A;
        const v3839 = v3039.B;
        const v3840 = stdlib.add(v3838, v3824);
        const v3859 = stdlib.sub(v3825, v3840);
        ;
        ;
        const v3874 = {
          A: v3838,
          B: v3839
          };
        const v3875 = [v3874, v3824];
        await txn2.getOutput('Harvester_harvest', 'v3875', ctc10, v3875);
        const v3881 = {
          locked: v3798,
          lpFee: v3797,
          protoAddr: v3795,
          protoFee: v3796,
          totFee: v3807
          };
        null;
        const v3882 = {
          locked: v3798,
          lpFee: v3797,
          protoAddr: v3795,
          protoFee: v3796,
          totFee: v3807
          };
        const cv3036 = v3837;
        const cv3037 = v3037;
        const cv3038 = v3038;
        const cv3039 = v3033;
        const cv3040 = v3882;
        const cv3041 = v3666;
        const cv3044 = v3859;
        
        v3036 = cv3036;
        v3037 = cv3037;
        v3038 = cv3038;
        v3039 = cv3039;
        v3040 = cv3040;
        v3041 = cv3041;
        v3044 = cv3044;
        
        continue;
        break;
        }
      case 'Provider_deposit0_466': {
        const v4360 = v3665[1];
        undefined /* setApiDetails */;
        const v4380 = v4360[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
        const v4382 = v4380.A;
        const v4383 = v4380.B;
        const v4465 = stdlib.add(v3044, v4382);
        ;
        ;
        ;
        const v4584 = v4360[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
        const v4585 = v3040.locked;
        const v4586 = v4585 ? false : true;
        stdlib.assert(v4586, {
          at: './index.rsh:305:14:application',
          fs: ['at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v4587;
        const v4590 = v3037.A;
        const v4591 = v3037.B;
        const v4593 = stdlib.eq(v4591, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
        if (v4593) {
          const v4594 = stdlib.cast(false, true, v4382);
          const v4595 = stdlib.cast(false, true, v4383);
          const v4596 = stdlib.mul256(v4594, v4595);
          const v4597 = stdlib.cast(false, true, v4584);
          const v4599 = stdlib.mul256(v4597, v4597);
          const v4600 = stdlib.eq256(v4596, v4599);
          stdlib.assert(v4600, {
            at: './index.rsh:161:10:application',
            fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
            msg: null,
            who: 'Admin'
            });
          v4587 = v4584;
          }
        else {
          const v4601 = v3038.A;
          const v4602 = v3038.B;
          const v4603 = stdlib.eq(v4584, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4603, {
            at: './index.rsh:165:10:application',
            fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
            msg: null,
            who: 'Admin'
            });
          const v4607 = stdlib.muldiv(v4382, v4601, v4591);
          const v4611 = stdlib.muldiv(v4383, v4602, v4591);
          const v4612 = stdlib.lt(v4607, v4611);
          const v4613 = v4612 ? v4607 : v4611;
          v4587 = v4613;
          }
        const v4615 = v3038.A;
        const v4619 = stdlib.add(v4382, v4615);
        const v4621 = v3038.B;
        const v4625 = stdlib.add(v4383, v4621);
        const v4626 = {
          A: v4619,
          B: v4625
          };
        const v4633 = stdlib.sub(v4590, v4587);
        const v4637 = stdlib.add(v4591, v4587);
        const v4638 = {
          A: v4633,
          B: v4637
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v4587', ctc5, v4587);
        const v4671 = {
          A: v4382,
          B: v4383
          };
        const v4672 = {
          A: v4619,
          B: v4625
          };
        const v4673 = {
          A: v4633,
          B: v4637
          };
        null;
        const cv3036 = false;
        const cv3037 = v4638;
        const cv3038 = v4626;
        const cv3039 = v3039;
        const cv3040 = v3040;
        const cv3041 = v3666;
        const cv3044 = v4465;
        
        v3036 = cv3036;
        v3037 = cv3037;
        v3038 = cv3038;
        v3039 = cv3039;
        v3040 = cv3040;
        v3041 = cv3041;
        v3044 = cv3044;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_466': {
        const v5052 = v3665[1];
        undefined /* setApiDetails */;
        const v5092 = v5052[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v5376 = v3037.A;
        const v5377 = v3037.B;
        const v5380 = v3038.A;
        const v5381 = v3038.B;
        const v5385 = stdlib.muldiv(v5092, v5380, v5377);
        const v5389 = stdlib.muldiv(v5092, v5381, v5377);
        const v5398 = stdlib.add(v5376, v5092);
        const v5401 = stdlib.sub(v5377, v5092);
        const v5402 = {
          A: v5398,
          B: v5401
          };
        const v5407 = stdlib.sub(v5380, v5385);
        const v5411 = stdlib.sub(v5381, v5389);
        const v5412 = {
          A: v5407,
          B: v5411
          };
        const v5431 = stdlib.sub(v3044, v5385);
        ;
        ;
        const v5444 = {
          A: v5385,
          B: v5389
          };
        await txn2.getOutput('Provider_withdraw', 'v5444', ctc9, v5444);
        const v5451 = {
          A: v5407,
          B: v5411
          };
        const v5452 = {
          A: v5398,
          B: v5401
          };
        null;
        const cv3036 = false;
        const cv3037 = v5402;
        const cv3038 = v5412;
        const cv3039 = v3039;
        const cv3040 = v3040;
        const cv3041 = v3666;
        const cv3044 = v5431;
        
        v3036 = cv3036;
        v3037 = cv3037;
        v3038 = cv3038;
        v3039 = cv3039;
        v3040 = cv3040;
        v3041 = cv3041;
        v3044 = cv3044;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_466': {
        const v5744 = v3665[1];
        undefined /* setApiDetails */;
        const v5798 = v5744[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
        const v5849 = stdlib.add(v3044, v5798);
        ;
        ;
        ;
        const v6155 = v5744[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
        const v6158 = v3040.locked;
        const v6159 = v6158 ? false : true;
        stdlib.assert(v6159, {
          at: './index.rsh:317:14:application',
          fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6160 = v3038.A;
        const v6161 = v3038.B;
        const v6162 = v3040.protoFee;
        const v6163 = v3040.totFee;
        const v6167 = stdlib.add(v6160, v5798);
        const v6171 = stdlib.muldiv(v5798, v6161, v6167);
        const v6172 = stdlib.cast(false, true, v5798);
        const v6173 = stdlib.cast(false, true, v6163);
        const v6174 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6173);
        const v6175 = stdlib.mul256(v6172, v6174);
        const v6176 = stdlib.cast(false, true, v6167);
        const v6177 = stdlib.mul256(v6176, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v6178 = stdlib.add256(v6177, v6175);
        const v6179 = stdlib.cast(false, true, v6161);
        const v6180 = stdlib.mul256(v6175, v6179);
        const v6181 = stdlib.div256(v6180, v6178);
        const v6182 = stdlib.cast(true, false, v6181);
        const v6185 = stdlib.sub(v6171, v6182);
        const v6188 = stdlib.mul(v6162, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v6189 = stdlib.div(v6188, v6163);
        const v6192 = stdlib.muldiv(v6185, v6189, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v6194 = stdlib.muldiv(v5798, v6162, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v6198 = stdlib.muldiv(v6194, v6161, v6167);
        const v6199 = stdlib.gt(v6198, v6192);
        const v6200 = [v6194, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6201 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6192];
        const v6202 = v6199 ? v6200 : v6201;
        const v6204 = v6202[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
        const v6205 = v6202[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
        const v6224 = stdlib.sub(v6161, v6182);
        const v6228 = stdlib.sub(v6167, v6204);
        const v6231 = stdlib.sub(v6224, v6205);
        const v6232 = {
          A: v6228,
          B: v6231
          };
        const v6233 = v3039.A;
        const v6237 = stdlib.add(v6233, v6204);
        const v6238 = v3039.B;
        const v6242 = stdlib.add(v6238, v6205);
        const v6243 = {
          A: v6237,
          B: v6242
          };
        const v6244 = stdlib.le(v6155, v6182);
        stdlib.assert(v6244, {
          at: './index.rsh:338:14:application',
          fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6247 = stdlib.cast(false, true, v6160);
        const v6249 = stdlib.mul256(v6247, v6179);
        const v6250 = stdlib.cast(false, true, v6228);
        const v6251 = stdlib.cast(false, true, v6231);
        const v6252 = stdlib.mul256(v6250, v6251);
        const v6253 = stdlib.ge256(v6252, v6249);
        stdlib.assert(v6253, {
          at: './index.rsh:348:14:application',
          fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        const v6281 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v6182
          };
        await txn2.getOutput('Trader_swapAForB', 'v6281', ctc9, v6281);
        const v6287 = {
          A: v5798,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6289 = {
          A: v6228,
          B: v6231
          };
        null;
        const cv3036 = false;
        const cv3037 = v3037;
        const cv3038 = v6232;
        const cv3039 = v6243;
        const cv3040 = v3040;
        const cv3041 = v3666;
        const cv3044 = v5849;
        
        v3036 = cv3036;
        v3037 = cv3037;
        v3038 = cv3038;
        v3039 = cv3039;
        v3040 = cv3040;
        v3041 = cv3041;
        v3044 = cv3044;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_466': {
        const v6436 = v3665[1];
        undefined /* setApiDetails */;
        const v6505 = v6436[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v6992 = v6436[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
        const v6995 = v3040.locked;
        const v6996 = v6995 ? false : true;
        stdlib.assert(v6996, {
          at: './index.rsh:317:14:application',
          fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6997 = v3038.A;
        const v6998 = v3038.B;
        const v6999 = v3040.protoFee;
        const v7000 = v3040.totFee;
        const v7004 = stdlib.add(v6998, v6505);
        const v7008 = stdlib.muldiv(v6505, v6997, v7004);
        const v7009 = stdlib.cast(false, true, v6505);
        const v7010 = stdlib.cast(false, true, v7000);
        const v7011 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7010);
        const v7012 = stdlib.mul256(v7009, v7011);
        const v7013 = stdlib.cast(false, true, v7004);
        const v7014 = stdlib.mul256(v7013, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v7015 = stdlib.add256(v7014, v7012);
        const v7016 = stdlib.cast(false, true, v6997);
        const v7017 = stdlib.mul256(v7012, v7016);
        const v7018 = stdlib.div256(v7017, v7015);
        const v7019 = stdlib.cast(true, false, v7018);
        const v7022 = stdlib.sub(v7008, v7019);
        const v7025 = stdlib.mul(v6999, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v7026 = stdlib.div(v7025, v7000);
        const v7029 = stdlib.muldiv(v7022, v7026, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v7031 = stdlib.muldiv(v6505, v6999, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v7035 = stdlib.muldiv(v7031, v6997, v7004);
        const v7036 = stdlib.gt(v7035, v7029);
        const v7037 = [v7031, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v7038 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7029];
        const v7039 = v7036 ? v7037 : v7038;
        const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
        const v7042 = v7039[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
        const v7059 = stdlib.sub(v6997, v7019);
        const v7065 = stdlib.sub(v7059, v7042);
        const v7068 = stdlib.sub(v7004, v7041);
        const v7069 = {
          A: v7065,
          B: v7068
          };
        const v7070 = v3039.A;
        const v7074 = stdlib.add(v7070, v7042);
        const v7075 = v3039.B;
        const v7079 = stdlib.add(v7075, v7041);
        const v7080 = {
          A: v7074,
          B: v7079
          };
        const v7081 = stdlib.le(v6992, v7019);
        stdlib.assert(v7081, {
          at: './index.rsh:338:14:application',
          fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7086 = stdlib.cast(false, true, v6998);
        const v7087 = stdlib.mul256(v7016, v7086);
        const v7088 = stdlib.cast(false, true, v7065);
        const v7089 = stdlib.cast(false, true, v7068);
        const v7090 = stdlib.mul256(v7088, v7089);
        const v7091 = stdlib.ge256(v7090, v7087);
        stdlib.assert(v7091, {
          at: './index.rsh:348:14:application',
          fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7110 = stdlib.sub(v3044, v7019);
        ;
        const v7111 = {
          A: v7019,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v7111', ctc9, v7111);
        const v7117 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v6505
          };
        const v7119 = {
          A: v7065,
          B: v7068
          };
        null;
        const cv3036 = false;
        const cv3037 = v3037;
        const cv3038 = v7069;
        const cv3039 = v7080;
        const cv3040 = v3040;
        const cv3041 = v3666;
        const cv3044 = v7110;
        
        v3036 = cv3036;
        v3037 = cv3037;
        v3038 = cv3038;
        v3039 = cv3039;
        v3040 = cv3040;
        v3041 = cv3041;
        v3044 = cv3044;
        
        continue;
        break;
        }
      }
    
    }
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc14],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v7155], secs: v7157, time: v7156, didSend: v2644, from: v7154 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v7158 = null;
  await txn2.getOutput('Harvester_delete', 'v7158', ctc4, v7158);
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  };
export async function Harvester_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Harvester_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Harvester_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v2978, v3002, v3037, v3038, v3039, v3040] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc2, ctc2, ctc5]);
  const v7153 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:402:3:application',
    fs: ['at ./index.rsh:402:3:application call to [unknown function] (defined at: ./index.rsh:402:3:function exp)'],
    msg: 'in',
    who: 'Harvester_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2978, v3002, v3037, v3038, v3039, v3040, v7153],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:402:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7155], secs: v7157, time: v7156, didSend: v2644, from: v7154 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Harvester_delete"
        });
      ;
      const v7158 = null;
      const v7159 = await txn1.getOutput('Harvester_delete', 'v7158', ctc7, v7158);
      
      stdlib.simTokenBurn(sim_r, v3002, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v3002);
      sim_r.txns.push({
        kind: 'halt',
        tok: v2978
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v7155], secs: v7157, time: v7156, didSend: v2644, from: v7154 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v7158 = null;
  const v7159 = await txn1.getOutput('Harvester_delete', 'v7158', ctc7, v7158);
  stdlib.protect(ctc7, await interact.out(v7155, v7159), {
    at: './index.rsh:402:3:application',
    fs: ['at ./index.rsh:402:3:application call to [unknown function] (defined at: ./index.rsh:402:3:function exp)', 'at ./index.rsh:403:4:application call to "k" (defined at: ./index.rsh:402:3:function exp)'],
    msg: 'out',
    who: 'Harvester_delete'
    });
  
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  };
export async function Harvester_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Harvester_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Harvester_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc6]);
  const ctc8 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc9 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Data({
    Harvester_harvest0_466: ctc7,
    Provider_deposit0_466: ctc9,
    Provider_withdraw0_466: ctc10,
    Trader_swapAForB0_466: ctc11,
    Trader_swapBForA0_466: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v3134 = ctc.selfAddress();
  const v3136 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_466" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Harvester_harvest'
    });
  const v3138 = v3136[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
  const v3141 = v3138.protoFee;
  const v3142 = v3138.lpFee;
  const v3144 = v3040.protoAddr;
  const v3145 = stdlib.addressEq(v3134, v3144);
  stdlib.assert(v3145, {
    at: './index.rsh:277:14:application',
    fs: ['at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_466" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'Thou art not the harvester',
    who: 'Harvester_harvest'
    });
  const v3147 = stdlib.lt(v3141, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3147, {
    at: './index.rsh:79:8:application',
    fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_466" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v3148 = stdlib.lt(v3142, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3148, {
    at: './index.rsh:80:8:application',
    fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_466" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v3152 = stdlib.add(v3141, v3142);
  const v3161 = stdlib.add(v3142, v3141);
  const v3162 = stdlib.eq(v3152, v3161);
  const v3164 = stdlib.lt(v3152, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v3165 = v3162 ? v3164 : false;
  const v3166 = stdlib.gt(v3152, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v3167 = v3165 ? v3166 : false;
  stdlib.assert(v3167, {
    at: './index.rsh:84:8:application',
    fs: ['at ./index.rsh:280:16:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_466" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v3044) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3044));
  const v3185 = ['Harvester_harvest0_466', v3136];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044, v3185],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:376:25:decimal', stdlib.UInt_max, '0'), v3002], [stdlib.checkedBigNumberify('./index.rsh:376:31:decimal', stdlib.UInt_max, '0'), v2978]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
      
      switch (v3665[0]) {
        case 'Harvester_harvest0_466': {
          const v3668 = v3665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Harvester_harvest"
            });
          ;
          ;
          ;
          const v3793 = v3668[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '0')];
          const v3794 = v3668[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
          const v3795 = v3794.protoAddr;
          const v3796 = v3794.protoFee;
          const v3797 = v3794.lpFee;
          const v3798 = v3794.locked;
          const v3799 = v3040.protoAddr;
          const v3800 = stdlib.addressEq(v3664, v3799);
          ;
          const v3802 = stdlib.lt(v3796, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
          ;
          const v3803 = stdlib.lt(v3797, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
          ;
          const v3807 = stdlib.add(v3796, v3797);
          const v3816 = stdlib.add(v3797, v3796);
          const v3817 = stdlib.eq(v3807, v3816);
          const v3819 = stdlib.lt(v3807, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v3820 = v3817 ? v3819 : false;
          const v3821 = stdlib.gt(v3807, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v3822 = v3820 ? v3821 : false;
          ;
          const v3824 = (stdlib.le(await ctc.getBalance(), v3044) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3044));
          const v3825 = stdlib.add(v3824, v3044);
          const v3827 = v3037.B;
          const v3830 = stdlib.eq(v3827, stdlib.checkedBigNumberify('./index.rsh:284:45:decimal', stdlib.UInt_max, '0'));
          const v3831 = v3798 ? v3830 : false;
          const v3832 = v3038.A;
          const v3833 = v3038.B;
          const v3834 = stdlib.eq(v3832, stdlib.checkedBigNumberify('./index.rsh:263:37:decimal', stdlib.UInt_max, '0'));
          const v3835 = stdlib.eq(v3833, stdlib.checkedBigNumberify('./index.rsh:263:47:decimal', stdlib.UInt_max, '0'));
          const v3836 = v3834 ? v3835 : false;
          const v3837 = v3831 ? v3836 : false;
          const v3838 = v3039.A;
          const v3839 = v3039.B;
          const v3840 = stdlib.add(v3838, v3824);
          const v3859 = stdlib.sub(v3825, v3840);
          sim_r.txns.push({
            amt: v3840,
            kind: 'from',
            to: v3793,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v3839,
            kind: 'from',
            to: v3793,
            tok: v2978
            });
          const v3874 = {
            A: v3838,
            B: v3839
            };
          const v3875 = [v3874, v3824];
          const v3876 = await txn1.getOutput('Harvester_harvest', 'v3875', ctc9, v3875);
          
          const v3881 = {
            locked: v3798,
            lpFee: v3797,
            protoAddr: v3795,
            protoFee: v3796,
            totFee: v3807
            };
          null;
          const v3882 = {
            locked: v3798,
            lpFee: v3797,
            protoAddr: v3795,
            protoFee: v3796,
            totFee: v3807
            };
          const v10630 = v3037;
          const v10631 = v3038;
          const v10632 = v3033;
          const v10633 = v3882;
          const v10635 = v3859;
          if (v3837) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_466': {
          const v4360 = v3665[1];
          
          break;
          }
        case 'Provider_withdraw0_466': {
          const v5052 = v3665[1];
          
          break;
          }
        case 'Trader_swapAForB0_466': {
          const v5744 = v3665[1];
          
          break;
          }
        case 'Trader_swapBForA0_466': {
          const v6436 = v3665[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
  switch (v3665[0]) {
    case 'Harvester_harvest0_466': {
      const v3668 = v3665[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v3793 = v3668[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '0')];
      const v3794 = v3668[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
      const v3795 = v3794.protoAddr;
      const v3796 = v3794.protoFee;
      const v3797 = v3794.lpFee;
      const v3798 = v3794.locked;
      const v3799 = v3040.protoAddr;
      const v3800 = stdlib.addressEq(v3664, v3799);
      stdlib.assert(v3800, {
        at: './index.rsh:277:14:application',
        fs: ['at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: 'Thou art not the harvester',
        who: 'Harvester_harvest'
        });
      const v3802 = stdlib.lt(v3796, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v3802, {
        at: './index.rsh:79:8:application',
        fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v3803 = stdlib.lt(v3797, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v3803, {
        at: './index.rsh:80:8:application',
        fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v3807 = stdlib.add(v3796, v3797);
      const v3816 = stdlib.add(v3797, v3796);
      const v3817 = stdlib.eq(v3807, v3816);
      const v3819 = stdlib.lt(v3807, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v3820 = v3817 ? v3819 : false;
      const v3821 = stdlib.gt(v3807, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v3822 = v3820 ? v3821 : false;
      stdlib.assert(v3822, {
        at: './index.rsh:84:8:application',
        fs: ['at ./index.rsh:280:16:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v3824 = (stdlib.le(await ctc.getBalance(), v3044) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3044));
      const v3825 = stdlib.add(v3824, v3044);
      const v3827 = v3037.B;
      const v3830 = stdlib.eq(v3827, stdlib.checkedBigNumberify('./index.rsh:284:45:decimal', stdlib.UInt_max, '0'));
      const v3831 = v3798 ? v3830 : false;
      const v3832 = v3038.A;
      const v3833 = v3038.B;
      const v3834 = stdlib.eq(v3832, stdlib.checkedBigNumberify('./index.rsh:263:37:decimal', stdlib.UInt_max, '0'));
      const v3835 = stdlib.eq(v3833, stdlib.checkedBigNumberify('./index.rsh:263:47:decimal', stdlib.UInt_max, '0'));
      const v3836 = v3834 ? v3835 : false;
      const v3837 = v3831 ? v3836 : false;
      const v3838 = v3039.A;
      const v3839 = v3039.B;
      const v3840 = stdlib.add(v3838, v3824);
      const v3859 = stdlib.sub(v3825, v3840);
      ;
      ;
      const v3874 = {
        A: v3838,
        B: v3839
        };
      const v3875 = [v3874, v3824];
      const v3876 = await txn1.getOutput('Harvester_harvest', 'v3875', ctc9, v3875);
      if (v1878) {
        stdlib.protect(ctc13, await interact.out(v3668, v3876), {
          at: './index.rsh:374:10:application',
          fs: ['at ./index.rsh:374:10:application call to [unknown function] (defined at: ./index.rsh:374:10:function exp)', 'at ./index.rsh:287:12:application call to "k" (defined at: ./index.rsh:377:20:function exp)', 'at ./index.rsh:377:47:application call to [unknown function] (defined at: ./index.rsh:285:20:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: 'out',
          who: 'Harvester_harvest'
          });
        }
      else {
        }
      
      const v3881 = {
        locked: v3798,
        lpFee: v3797,
        protoAddr: v3795,
        protoFee: v3796,
        totFee: v3807
        };
      null;
      const v3882 = {
        locked: v3798,
        lpFee: v3797,
        protoAddr: v3795,
        protoFee: v3796,
        totFee: v3807
        };
      const v10630 = v3037;
      const v10631 = v3038;
      const v10632 = v3033;
      const v10633 = v3882;
      const v10635 = v3859;
      if (v3837) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_466': {
      const v4360 = v3665[1];
      return;
      break;
      }
    case 'Provider_withdraw0_466': {
      const v5052 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_466': {
      const v5744 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_466': {
      const v6436 = v3665[1];
      return;
      break;
      }
    }
  
  
  };
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc7 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Data({
    Harvester_harvest0_466: ctc9,
    Provider_deposit0_466: ctc7,
    Provider_withdraw0_466: ctc10,
    Trader_swapAForB0_466: ctc11,
    Trader_swapBForA0_466: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v3235 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_466" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v3236 = v3235[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
  const v3237 = v3235[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
  const v3239 = v3040.locked;
  const v3240 = v3239 ? false : true;
  stdlib.assert(v3240, {
    at: './index.rsh:305:14:application',
    fs: ['at ./index.rsh:385:41:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_466" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Provider_deposit'
    });
  const v3242 = v3236.A;
  const v3243 = v3236.B;
  const v3245 = v3037.B;
  const v3247 = stdlib.eq(v3245, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
  if (v3247) {
    const v3248 = stdlib.cast(false, true, v3242);
    const v3249 = stdlib.cast(false, true, v3243);
    const v3250 = stdlib.mul256(v3248, v3249);
    const v3251 = stdlib.cast(false, true, v3237);
    const v3253 = stdlib.mul256(v3251, v3251);
    const v3254 = stdlib.eq256(v3250, v3253);
    stdlib.assert(v3254, {
      at: './index.rsh:161:10:application',
      fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:385:41:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_466" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
      msg: null,
      who: 'Provider_deposit'
      });
    }
  else {
    const v3257 = stdlib.eq(v3237, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v3257, {
      at: './index.rsh:165:10:application',
      fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:385:41:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_466" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
      msg: null,
      who: 'Provider_deposit'
      });
    }
  const v3296 = ['Provider_deposit0_466', v3235];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044, v3296],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [v3242, [[stdlib.checkedBigNumberify('./index.rsh:246:50:decimal', stdlib.UInt_max, '0'), v3002], [v3243, v2978]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
      
      switch (v3665[0]) {
        case 'Harvester_harvest0_466': {
          const v3668 = v3665[1];
          
          break;
          }
        case 'Provider_deposit0_466': {
          const v4360 = v3665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v4380 = v4360[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
          const v4382 = v4380.A;
          const v4383 = v4380.B;
          const v4465 = stdlib.add(v3044, v4382);
          sim_r.txns.push({
            amt: v4382,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          sim_r.txns.push({
            amt: v4383,
            kind: 'to',
            tok: v2978
            });
          const v4584 = v4360[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
          const v4585 = v3040.locked;
          const v4586 = v4585 ? false : true;
          ;
          let v4587;
          const v4590 = v3037.A;
          const v4591 = v3037.B;
          const v4593 = stdlib.eq(v4591, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
          if (v4593) {
            const v4594 = stdlib.cast(false, true, v4382);
            const v4595 = stdlib.cast(false, true, v4383);
            const v4596 = stdlib.mul256(v4594, v4595);
            const v4597 = stdlib.cast(false, true, v4584);
            const v4599 = stdlib.mul256(v4597, v4597);
            const v4600 = stdlib.eq256(v4596, v4599);
            ;
            v4587 = v4584;
            }
          else {
            const v4601 = v3038.A;
            const v4602 = v3038.B;
            const v4603 = stdlib.eq(v4584, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
            ;
            const v4607 = stdlib.muldiv(v4382, v4601, v4591);
            const v4611 = stdlib.muldiv(v4383, v4602, v4591);
            const v4612 = stdlib.lt(v4607, v4611);
            const v4613 = v4612 ? v4607 : v4611;
            v4587 = v4613;
            }
          const v4615 = v3038.A;
          const v4619 = stdlib.add(v4382, v4615);
          const v4621 = v3038.B;
          const v4625 = stdlib.add(v4383, v4621);
          const v4626 = {
            A: v4619,
            B: v4625
            };
          const v4633 = stdlib.sub(v4590, v4587);
          const v4637 = stdlib.add(v4591, v4587);
          const v4638 = {
            A: v4633,
            B: v4637
            };
          sim_r.txns.push({
            amt: v4587,
            kind: 'from',
            to: v3664,
            tok: v3002
            });
          const v4664 = await txn1.getOutput('Provider_deposit', 'v4587', ctc1, v4587);
          
          const v4671 = {
            A: v4382,
            B: v4383
            };
          const v4672 = {
            A: v4619,
            B: v4625
            };
          const v4673 = {
            A: v4633,
            B: v4637
            };
          null;
          const v10720 = v4638;
          const v10721 = v4626;
          const v10722 = v3039;
          const v10723 = v3040;
          const v10725 = v4465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_466': {
          const v5052 = v3665[1];
          
          break;
          }
        case 'Trader_swapAForB0_466': {
          const v5744 = v3665[1];
          
          break;
          }
        case 'Trader_swapBForA0_466': {
          const v6436 = v3665[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
  switch (v3665[0]) {
    case 'Harvester_harvest0_466': {
      const v3668 = v3665[1];
      return;
      break;
      }
    case 'Provider_deposit0_466': {
      const v4360 = v3665[1];
      undefined /* setApiDetails */;
      const v4380 = v4360[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
      const v4382 = v4380.A;
      const v4383 = v4380.B;
      const v4465 = stdlib.add(v3044, v4382);
      ;
      ;
      ;
      const v4584 = v4360[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
      const v4585 = v3040.locked;
      const v4586 = v4585 ? false : true;
      stdlib.assert(v4586, {
        at: './index.rsh:305:14:application',
        fs: ['at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
        msg: null,
        who: 'Provider_deposit'
        });
      let v4587;
      const v4590 = v3037.A;
      const v4591 = v3037.B;
      const v4593 = stdlib.eq(v4591, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
      if (v4593) {
        const v4594 = stdlib.cast(false, true, v4382);
        const v4595 = stdlib.cast(false, true, v4383);
        const v4596 = stdlib.mul256(v4594, v4595);
        const v4597 = stdlib.cast(false, true, v4584);
        const v4599 = stdlib.mul256(v4597, v4597);
        const v4600 = stdlib.eq256(v4596, v4599);
        stdlib.assert(v4600, {
          at: './index.rsh:161:10:application',
          fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: null,
          who: 'Provider_deposit'
          });
        v4587 = v4584;
        }
      else {
        const v4601 = v3038.A;
        const v4602 = v3038.B;
        const v4603 = stdlib.eq(v4584, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4603, {
          at: './index.rsh:165:10:application',
          fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: null,
          who: 'Provider_deposit'
          });
        const v4607 = stdlib.muldiv(v4382, v4601, v4591);
        const v4611 = stdlib.muldiv(v4383, v4602, v4591);
        const v4612 = stdlib.lt(v4607, v4611);
        const v4613 = v4612 ? v4607 : v4611;
        v4587 = v4613;
        }
      const v4615 = v3038.A;
      const v4619 = stdlib.add(v4382, v4615);
      const v4621 = v3038.B;
      const v4625 = stdlib.add(v4383, v4621);
      const v4626 = {
        A: v4619,
        B: v4625
        };
      const v4633 = stdlib.sub(v4590, v4587);
      const v4637 = stdlib.add(v4591, v4587);
      const v4638 = {
        A: v4633,
        B: v4637
        };
      ;
      const v4664 = await txn1.getOutput('Provider_deposit', 'v4587', ctc1, v4587);
      if (v1878) {
        stdlib.protect(ctc13, await interact.out(v4360, v4664), {
          at: './index.rsh:384:10:application',
          fs: ['at ./index.rsh:384:10:application call to [unknown function] (defined at: ./index.rsh:384:10:function exp)', 'at ./index.rsh:311:12:application call to "k" (defined at: ./index.rsh:387:20:function exp)', 'at ./index.rsh:387:47:application call to [unknown function] (defined at: ./index.rsh:309:20:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v4671 = {
        A: v4382,
        B: v4383
        };
      const v4672 = {
        A: v4619,
        B: v4625
        };
      const v4673 = {
        A: v4633,
        B: v4637
        };
      null;
      const v10720 = v4638;
      const v10721 = v4626;
      const v10722 = v3039;
      const v10723 = v3040;
      const v10725 = v4465;
      return;
      
      break;
      }
    case 'Provider_withdraw0_466': {
      const v5052 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_466': {
      const v5744 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_466': {
      const v6436 = v3665[1];
      return;
      break;
      }
    }
  
  
  };
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Data({
    Harvester_harvest0_466: ctc8,
    Provider_deposit0_466: ctc10,
    Provider_withdraw0_466: ctc6,
    Trader_swapAForB0_466: ctc11,
    Trader_swapBForA0_466: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v3189 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:380:11:application call to [unknown function] (defined at: ./index.rsh:380:11:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_withdraw0_466" (defined at: ./index.rsh:379:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v3190 = v3189[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
  const v3231 = ['Provider_withdraw0_466', v3189];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044, v3231],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[v3190, v3002], [stdlib.checkedBigNumberify('./index.rsh:381:28:decimal', stdlib.UInt_max, '0'), v2978]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
      
      switch (v3665[0]) {
        case 'Harvester_harvest0_466': {
          const v3668 = v3665[1];
          
          break;
          }
        case 'Provider_deposit0_466': {
          const v4360 = v3665[1];
          
          break;
          }
        case 'Provider_withdraw0_466': {
          const v5052 = v3665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v5092 = v5052[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v5092,
            kind: 'to',
            tok: v3002
            });
          ;
          const v5376 = v3037.A;
          const v5377 = v3037.B;
          const v5380 = v3038.A;
          const v5381 = v3038.B;
          const v5385 = stdlib.muldiv(v5092, v5380, v5377);
          const v5389 = stdlib.muldiv(v5092, v5381, v5377);
          const v5398 = stdlib.add(v5376, v5092);
          const v5401 = stdlib.sub(v5377, v5092);
          const v5402 = {
            A: v5398,
            B: v5401
            };
          const v5407 = stdlib.sub(v5380, v5385);
          const v5411 = stdlib.sub(v5381, v5389);
          const v5412 = {
            A: v5407,
            B: v5411
            };
          const v5431 = stdlib.sub(v3044, v5385);
          sim_r.txns.push({
            amt: v5385,
            kind: 'from',
            to: v3664,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v5389,
            kind: 'from',
            to: v3664,
            tok: v2978
            });
          const v5444 = {
            A: v5385,
            B: v5389
            };
          const v5445 = await txn1.getOutput('Provider_withdraw', 'v5444', ctc9, v5444);
          
          const v5451 = {
            A: v5407,
            B: v5411
            };
          const v5452 = {
            A: v5398,
            B: v5401
            };
          null;
          const v10810 = v5402;
          const v10811 = v5412;
          const v10812 = v3039;
          const v10813 = v3040;
          const v10815 = v5431;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_466': {
          const v5744 = v3665[1];
          
          break;
          }
        case 'Trader_swapBForA0_466': {
          const v6436 = v3665[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
  switch (v3665[0]) {
    case 'Harvester_harvest0_466': {
      const v3668 = v3665[1];
      return;
      break;
      }
    case 'Provider_deposit0_466': {
      const v4360 = v3665[1];
      return;
      break;
      }
    case 'Provider_withdraw0_466': {
      const v5052 = v3665[1];
      undefined /* setApiDetails */;
      const v5092 = v5052[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v5376 = v3037.A;
      const v5377 = v3037.B;
      const v5380 = v3038.A;
      const v5381 = v3038.B;
      const v5385 = stdlib.muldiv(v5092, v5380, v5377);
      const v5389 = stdlib.muldiv(v5092, v5381, v5377);
      const v5398 = stdlib.add(v5376, v5092);
      const v5401 = stdlib.sub(v5377, v5092);
      const v5402 = {
        A: v5398,
        B: v5401
        };
      const v5407 = stdlib.sub(v5380, v5385);
      const v5411 = stdlib.sub(v5381, v5389);
      const v5412 = {
        A: v5407,
        B: v5411
        };
      const v5431 = stdlib.sub(v3044, v5385);
      ;
      ;
      const v5444 = {
        A: v5385,
        B: v5389
        };
      const v5445 = await txn1.getOutput('Provider_withdraw', 'v5444', ctc9, v5444);
      if (v1878) {
        stdlib.protect(ctc13, await interact.out(v5052, v5445), {
          at: './index.rsh:379:10:application',
          fs: ['at ./index.rsh:379:10:application call to [unknown function] (defined at: ./index.rsh:379:10:function exp)', 'at ./index.rsh:299:12:application call to "k" (defined at: ./index.rsh:382:14:function exp)', 'at ./index.rsh:382:36:application call to [unknown function] (defined at: ./index.rsh:297:20:function exp)', 'at ./index.rsh:382:14:application call to [unknown function] (defined at: ./index.rsh:382:14:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v5451 = {
        A: v5407,
        B: v5411
        };
      const v5452 = {
        A: v5398,
        B: v5401
        };
      null;
      const v10810 = v5402;
      const v10811 = v5412;
      const v10812 = v3039;
      const v10813 = v3040;
      const v10815 = v5431;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_466': {
      const v5744 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_466': {
      const v6436 = v3665[1];
      return;
      break;
      }
    }
  
  
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    Harvester_harvest0_466: ctc8,
    Provider_deposit0_466: ctc10,
    Provider_withdraw0_466: ctc11,
    Trader_swapAForB0_466: ctc6,
    Trader_swapBForA0_466: ctc6
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v3300 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_466" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v3301 = v3300[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
  const v3302 = v3300[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
  const v3306 = v3040.locked;
  const v3307 = v3306 ? false : true;
  stdlib.assert(v3307, {
    at: './index.rsh:317:14:application',
    fs: ['at ./index.rsh:390:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_466" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3308 = v3038.A;
  const v3309 = v3038.B;
  const v3310 = v3040.protoFee;
  const v3311 = v3040.totFee;
  const v3315 = stdlib.add(v3308, v3301);
  const v3319 = stdlib.muldiv(v3301, v3309, v3315);
  const v3320 = stdlib.cast(false, true, v3301);
  const v3321 = stdlib.cast(false, true, v3311);
  const v3322 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v3321);
  const v3323 = stdlib.mul256(v3320, v3322);
  const v3324 = stdlib.cast(false, true, v3315);
  const v3325 = stdlib.mul256(v3324, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v3326 = stdlib.add256(v3325, v3323);
  const v3327 = stdlib.cast(false, true, v3309);
  const v3328 = stdlib.mul256(v3323, v3327);
  const v3329 = stdlib.div256(v3328, v3326);
  const v3330 = stdlib.cast(true, false, v3329);
  const v3333 = stdlib.sub(v3319, v3330);
  const v3336 = stdlib.mul(v3310, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
  const v3337 = stdlib.div(v3336, v3311);
  const v3340 = stdlib.muldiv(v3333, v3337, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
  const v3342 = stdlib.muldiv(v3301, v3310, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
  const v3346 = stdlib.muldiv(v3342, v3309, v3315);
  const v3347 = stdlib.gt(v3346, v3340);
  const v3348 = [v3342, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3349 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3340];
  const v3350 = v3347 ? v3348 : v3349;
  const v3352 = v3350[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
  const v3353 = v3350[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
  const v3372 = stdlib.sub(v3309, v3330);
  const v3376 = stdlib.sub(v3315, v3352);
  const v3379 = stdlib.sub(v3372, v3353);
  const v3392 = stdlib.le(v3302, v3330);
  stdlib.assert(v3392, {
    at: './index.rsh:338:14:application',
    fs: ['at ./index.rsh:390:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_466" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3395 = stdlib.cast(false, true, v3308);
  const v3397 = stdlib.mul256(v3395, v3327);
  const v3398 = stdlib.cast(false, true, v3376);
  const v3399 = stdlib.cast(false, true, v3379);
  const v3400 = stdlib.mul256(v3398, v3399);
  const v3401 = stdlib.ge256(v3400, v3397);
  stdlib.assert(v3401, {
    at: './index.rsh:348:14:application',
    fs: ['at ./index.rsh:390:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_466" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3404 = ['Trader_swapAForB0_466', v3300];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044, v3404],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [v3301, [[stdlib.checkedBigNumberify('./index.rsh:391:25:decimal', stdlib.UInt_max, '0'), v3002], [stdlib.checkedBigNumberify('./index.rsh:391:31:decimal', stdlib.UInt_max, '0'), v2978]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
      
      switch (v3665[0]) {
        case 'Harvester_harvest0_466': {
          const v3668 = v3665[1];
          
          break;
          }
        case 'Provider_deposit0_466': {
          const v4360 = v3665[1];
          
          break;
          }
        case 'Provider_withdraw0_466': {
          const v5052 = v3665[1];
          
          break;
          }
        case 'Trader_swapAForB0_466': {
          const v5744 = v3665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v5798 = v5744[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
          const v5849 = stdlib.add(v3044, v5798);
          sim_r.txns.push({
            amt: v5798,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          const v6155 = v5744[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
          const v6158 = v3040.locked;
          const v6159 = v6158 ? false : true;
          ;
          const v6160 = v3038.A;
          const v6161 = v3038.B;
          const v6162 = v3040.protoFee;
          const v6163 = v3040.totFee;
          const v6167 = stdlib.add(v6160, v5798);
          const v6171 = stdlib.muldiv(v5798, v6161, v6167);
          const v6172 = stdlib.cast(false, true, v5798);
          const v6173 = stdlib.cast(false, true, v6163);
          const v6174 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6173);
          const v6175 = stdlib.mul256(v6172, v6174);
          const v6176 = stdlib.cast(false, true, v6167);
          const v6177 = stdlib.mul256(v6176, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v6178 = stdlib.add256(v6177, v6175);
          const v6179 = stdlib.cast(false, true, v6161);
          const v6180 = stdlib.mul256(v6175, v6179);
          const v6181 = stdlib.div256(v6180, v6178);
          const v6182 = stdlib.cast(true, false, v6181);
          const v6185 = stdlib.sub(v6171, v6182);
          const v6188 = stdlib.mul(v6162, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
          const v6189 = stdlib.div(v6188, v6163);
          const v6192 = stdlib.muldiv(v6185, v6189, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
          const v6194 = stdlib.muldiv(v5798, v6162, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
          const v6198 = stdlib.muldiv(v6194, v6161, v6167);
          const v6199 = stdlib.gt(v6198, v6192);
          const v6200 = [v6194, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6201 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6192];
          const v6202 = v6199 ? v6200 : v6201;
          const v6204 = v6202[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
          const v6205 = v6202[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
          const v6224 = stdlib.sub(v6161, v6182);
          const v6228 = stdlib.sub(v6167, v6204);
          const v6231 = stdlib.sub(v6224, v6205);
          const v6232 = {
            A: v6228,
            B: v6231
            };
          const v6233 = v3039.A;
          const v6237 = stdlib.add(v6233, v6204);
          const v6238 = v3039.B;
          const v6242 = stdlib.add(v6238, v6205);
          const v6243 = {
            A: v6237,
            B: v6242
            };
          const v6244 = stdlib.le(v6155, v6182);
          ;
          const v6247 = stdlib.cast(false, true, v6160);
          const v6249 = stdlib.mul256(v6247, v6179);
          const v6250 = stdlib.cast(false, true, v6228);
          const v6251 = stdlib.cast(false, true, v6231);
          const v6252 = stdlib.mul256(v6250, v6251);
          const v6253 = stdlib.ge256(v6252, v6249);
          ;
          sim_r.txns.push({
            amt: v6182,
            kind: 'from',
            to: v3664,
            tok: v2978
            });
          const v6281 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v6182
            };
          const v6282 = await txn1.getOutput('Trader_swapAForB', 'v6281', ctc9, v6281);
          
          const v6287 = {
            A: v5798,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6289 = {
            A: v6228,
            B: v6231
            };
          null;
          const v10900 = v3037;
          const v10901 = v6232;
          const v10902 = v6243;
          const v10903 = v3040;
          const v10905 = v5849;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_466': {
          const v6436 = v3665[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
  switch (v3665[0]) {
    case 'Harvester_harvest0_466': {
      const v3668 = v3665[1];
      return;
      break;
      }
    case 'Provider_deposit0_466': {
      const v4360 = v3665[1];
      return;
      break;
      }
    case 'Provider_withdraw0_466': {
      const v5052 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_466': {
      const v5744 = v3665[1];
      undefined /* setApiDetails */;
      const v5798 = v5744[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
      const v5849 = stdlib.add(v3044, v5798);
      ;
      ;
      ;
      const v6155 = v5744[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
      const v6158 = v3040.locked;
      const v6159 = v6158 ? false : true;
      stdlib.assert(v6159, {
        at: './index.rsh:317:14:application',
        fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v6160 = v3038.A;
      const v6161 = v3038.B;
      const v6162 = v3040.protoFee;
      const v6163 = v3040.totFee;
      const v6167 = stdlib.add(v6160, v5798);
      const v6171 = stdlib.muldiv(v5798, v6161, v6167);
      const v6172 = stdlib.cast(false, true, v5798);
      const v6173 = stdlib.cast(false, true, v6163);
      const v6174 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6173);
      const v6175 = stdlib.mul256(v6172, v6174);
      const v6176 = stdlib.cast(false, true, v6167);
      const v6177 = stdlib.mul256(v6176, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v6178 = stdlib.add256(v6177, v6175);
      const v6179 = stdlib.cast(false, true, v6161);
      const v6180 = stdlib.mul256(v6175, v6179);
      const v6181 = stdlib.div256(v6180, v6178);
      const v6182 = stdlib.cast(true, false, v6181);
      const v6185 = stdlib.sub(v6171, v6182);
      const v6188 = stdlib.mul(v6162, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
      const v6189 = stdlib.div(v6188, v6163);
      const v6192 = stdlib.muldiv(v6185, v6189, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
      const v6194 = stdlib.muldiv(v5798, v6162, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
      const v6198 = stdlib.muldiv(v6194, v6161, v6167);
      const v6199 = stdlib.gt(v6198, v6192);
      const v6200 = [v6194, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6201 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6192];
      const v6202 = v6199 ? v6200 : v6201;
      const v6204 = v6202[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
      const v6205 = v6202[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
      const v6224 = stdlib.sub(v6161, v6182);
      const v6228 = stdlib.sub(v6167, v6204);
      const v6231 = stdlib.sub(v6224, v6205);
      const v6232 = {
        A: v6228,
        B: v6231
        };
      const v6233 = v3039.A;
      const v6237 = stdlib.add(v6233, v6204);
      const v6238 = v3039.B;
      const v6242 = stdlib.add(v6238, v6205);
      const v6243 = {
        A: v6237,
        B: v6242
        };
      const v6244 = stdlib.le(v6155, v6182);
      stdlib.assert(v6244, {
        at: './index.rsh:338:14:application',
        fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v6247 = stdlib.cast(false, true, v6160);
      const v6249 = stdlib.mul256(v6247, v6179);
      const v6250 = stdlib.cast(false, true, v6228);
      const v6251 = stdlib.cast(false, true, v6231);
      const v6252 = stdlib.mul256(v6250, v6251);
      const v6253 = stdlib.ge256(v6252, v6249);
      stdlib.assert(v6253, {
        at: './index.rsh:348:14:application',
        fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      ;
      const v6281 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v6182
        };
      const v6282 = await txn1.getOutput('Trader_swapAForB', 'v6281', ctc9, v6281);
      if (v1878) {
        stdlib.protect(ctc13, await interact.out(v5744, v6282), {
          at: './index.rsh:389:10:application',
          fs: ['at ./index.rsh:389:10:application call to [unknown function] (defined at: ./index.rsh:389:10:function exp)', 'at ./index.rsh:351:12:application call to "k" (defined at: ./index.rsh:392:18:function exp)', 'at ./index.rsh:392:54:application call to [unknown function] (defined at: ./index.rsh:349:20:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v6287 = {
        A: v5798,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6289 = {
        A: v6228,
        B: v6231
        };
      null;
      const v10900 = v3037;
      const v10901 = v6232;
      const v10902 = v6243;
      const v10903 = v3040;
      const v10905 = v5849;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_466': {
      const v6436 = v3665[1];
      return;
      break;
      }
    }
  
  
  };
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    A: ctc1,
    B: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    locked: ctc3,
    lpFee: ctc1,
    protoAddr: ctc4,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    Harvester_harvest0_466: ctc8,
    Provider_deposit0_466: ctc10,
    Provider_withdraw0_466: ctc11,
    Trader_swapAForB0_466: ctc6,
    Trader_swapBForA0_466: ctc6
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v3408 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_466" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v3409 = v3408[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
  const v3410 = v3408[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
  const v3414 = v3040.locked;
  const v3415 = v3414 ? false : true;
  stdlib.assert(v3415, {
    at: './index.rsh:317:14:application',
    fs: ['at ./index.rsh:395:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_466" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3416 = v3038.A;
  const v3417 = v3038.B;
  const v3418 = v3040.protoFee;
  const v3419 = v3040.totFee;
  const v3423 = stdlib.add(v3417, v3409);
  const v3427 = stdlib.muldiv(v3409, v3416, v3423);
  const v3428 = stdlib.cast(false, true, v3409);
  const v3429 = stdlib.cast(false, true, v3419);
  const v3430 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v3429);
  const v3431 = stdlib.mul256(v3428, v3430);
  const v3432 = stdlib.cast(false, true, v3423);
  const v3433 = stdlib.mul256(v3432, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v3434 = stdlib.add256(v3433, v3431);
  const v3435 = stdlib.cast(false, true, v3416);
  const v3436 = stdlib.mul256(v3431, v3435);
  const v3437 = stdlib.div256(v3436, v3434);
  const v3438 = stdlib.cast(true, false, v3437);
  const v3441 = stdlib.sub(v3427, v3438);
  const v3444 = stdlib.mul(v3418, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
  const v3445 = stdlib.div(v3444, v3419);
  const v3448 = stdlib.muldiv(v3441, v3445, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
  const v3450 = stdlib.muldiv(v3409, v3418, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
  const v3454 = stdlib.muldiv(v3450, v3416, v3423);
  const v3455 = stdlib.gt(v3454, v3448);
  const v3456 = [v3450, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3457 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3448];
  const v3458 = v3455 ? v3456 : v3457;
  const v3460 = v3458[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
  const v3461 = v3458[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
  const v3478 = stdlib.sub(v3416, v3438);
  const v3484 = stdlib.sub(v3478, v3461);
  const v3487 = stdlib.sub(v3423, v3460);
  const v3500 = stdlib.le(v3410, v3438);
  stdlib.assert(v3500, {
    at: './index.rsh:338:14:application',
    fs: ['at ./index.rsh:395:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_466" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3505 = stdlib.cast(false, true, v3417);
  const v3506 = stdlib.mul256(v3435, v3505);
  const v3507 = stdlib.cast(false, true, v3484);
  const v3508 = stdlib.cast(false, true, v3487);
  const v3509 = stdlib.mul256(v3507, v3508);
  const v3510 = stdlib.ge256(v3509, v3506);
  stdlib.assert(v3510, {
    at: './index.rsh:348:14:application',
    fs: ['at ./index.rsh:395:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_466" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3513 = ['Trader_swapBForA0_466', v3408];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2978, v3002, v3033, v3037, v3038, v3039, v3040, v3044, v3513],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:396:25:decimal', stdlib.UInt_max, '0'), v3002], [v3409, v2978]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
      
      switch (v3665[0]) {
        case 'Harvester_harvest0_466': {
          const v3668 = v3665[1];
          
          break;
          }
        case 'Provider_deposit0_466': {
          const v4360 = v3665[1];
          
          break;
          }
        case 'Provider_withdraw0_466': {
          const v5052 = v3665[1];
          
          break;
          }
        case 'Trader_swapAForB0_466': {
          const v5744 = v3665[1];
          
          break;
          }
        case 'Trader_swapBForA0_466': {
          const v6436 = v3665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v6505 = v6436[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          sim_r.txns.push({
            amt: v6505,
            kind: 'to',
            tok: v2978
            });
          const v6992 = v6436[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
          const v6995 = v3040.locked;
          const v6996 = v6995 ? false : true;
          ;
          const v6997 = v3038.A;
          const v6998 = v3038.B;
          const v6999 = v3040.protoFee;
          const v7000 = v3040.totFee;
          const v7004 = stdlib.add(v6998, v6505);
          const v7008 = stdlib.muldiv(v6505, v6997, v7004);
          const v7009 = stdlib.cast(false, true, v6505);
          const v7010 = stdlib.cast(false, true, v7000);
          const v7011 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7010);
          const v7012 = stdlib.mul256(v7009, v7011);
          const v7013 = stdlib.cast(false, true, v7004);
          const v7014 = stdlib.mul256(v7013, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v7015 = stdlib.add256(v7014, v7012);
          const v7016 = stdlib.cast(false, true, v6997);
          const v7017 = stdlib.mul256(v7012, v7016);
          const v7018 = stdlib.div256(v7017, v7015);
          const v7019 = stdlib.cast(true, false, v7018);
          const v7022 = stdlib.sub(v7008, v7019);
          const v7025 = stdlib.mul(v6999, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
          const v7026 = stdlib.div(v7025, v7000);
          const v7029 = stdlib.muldiv(v7022, v7026, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
          const v7031 = stdlib.muldiv(v6505, v6999, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
          const v7035 = stdlib.muldiv(v7031, v6997, v7004);
          const v7036 = stdlib.gt(v7035, v7029);
          const v7037 = [v7031, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7038 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7029];
          const v7039 = v7036 ? v7037 : v7038;
          const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
          const v7042 = v7039[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
          const v7059 = stdlib.sub(v6997, v7019);
          const v7065 = stdlib.sub(v7059, v7042);
          const v7068 = stdlib.sub(v7004, v7041);
          const v7069 = {
            A: v7065,
            B: v7068
            };
          const v7070 = v3039.A;
          const v7074 = stdlib.add(v7070, v7042);
          const v7075 = v3039.B;
          const v7079 = stdlib.add(v7075, v7041);
          const v7080 = {
            A: v7074,
            B: v7079
            };
          const v7081 = stdlib.le(v6992, v7019);
          ;
          const v7086 = stdlib.cast(false, true, v6998);
          const v7087 = stdlib.mul256(v7016, v7086);
          const v7088 = stdlib.cast(false, true, v7065);
          const v7089 = stdlib.cast(false, true, v7068);
          const v7090 = stdlib.mul256(v7088, v7089);
          const v7091 = stdlib.ge256(v7090, v7087);
          ;
          const v7110 = stdlib.sub(v3044, v7019);
          sim_r.txns.push({
            amt: v7019,
            kind: 'from',
            to: v3664,
            tok: undefined /* Nothing */
            });
          const v7111 = {
            A: v7019,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v7112 = await txn1.getOutput('Trader_swapBForA', 'v7111', ctc9, v7111);
          
          const v7117 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v6505
            };
          const v7119 = {
            A: v7065,
            B: v7068
            };
          null;
          const v10990 = v3037;
          const v10991 = v7069;
          const v10992 = v7080;
          const v10993 = v3040;
          const v10995 = v7110;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3665], secs: v3667, time: v3666, didSend: v1878, from: v3664 } = txn1;
  switch (v3665[0]) {
    case 'Harvester_harvest0_466': {
      const v3668 = v3665[1];
      return;
      break;
      }
    case 'Provider_deposit0_466': {
      const v4360 = v3665[1];
      return;
      break;
      }
    case 'Provider_withdraw0_466': {
      const v5052 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_466': {
      const v5744 = v3665[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_466': {
      const v6436 = v3665[1];
      undefined /* setApiDetails */;
      const v6505 = v6436[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v6992 = v6436[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
      const v6995 = v3040.locked;
      const v6996 = v6995 ? false : true;
      stdlib.assert(v6996, {
        at: './index.rsh:317:14:application',
        fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v6997 = v3038.A;
      const v6998 = v3038.B;
      const v6999 = v3040.protoFee;
      const v7000 = v3040.totFee;
      const v7004 = stdlib.add(v6998, v6505);
      const v7008 = stdlib.muldiv(v6505, v6997, v7004);
      const v7009 = stdlib.cast(false, true, v6505);
      const v7010 = stdlib.cast(false, true, v7000);
      const v7011 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7010);
      const v7012 = stdlib.mul256(v7009, v7011);
      const v7013 = stdlib.cast(false, true, v7004);
      const v7014 = stdlib.mul256(v7013, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v7015 = stdlib.add256(v7014, v7012);
      const v7016 = stdlib.cast(false, true, v6997);
      const v7017 = stdlib.mul256(v7012, v7016);
      const v7018 = stdlib.div256(v7017, v7015);
      const v7019 = stdlib.cast(true, false, v7018);
      const v7022 = stdlib.sub(v7008, v7019);
      const v7025 = stdlib.mul(v6999, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
      const v7026 = stdlib.div(v7025, v7000);
      const v7029 = stdlib.muldiv(v7022, v7026, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
      const v7031 = stdlib.muldiv(v6505, v6999, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
      const v7035 = stdlib.muldiv(v7031, v6997, v7004);
      const v7036 = stdlib.gt(v7035, v7029);
      const v7037 = [v7031, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7038 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7029];
      const v7039 = v7036 ? v7037 : v7038;
      const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
      const v7042 = v7039[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
      const v7059 = stdlib.sub(v6997, v7019);
      const v7065 = stdlib.sub(v7059, v7042);
      const v7068 = stdlib.sub(v7004, v7041);
      const v7069 = {
        A: v7065,
        B: v7068
        };
      const v7070 = v3039.A;
      const v7074 = stdlib.add(v7070, v7042);
      const v7075 = v3039.B;
      const v7079 = stdlib.add(v7075, v7041);
      const v7080 = {
        A: v7074,
        B: v7079
        };
      const v7081 = stdlib.le(v6992, v7019);
      stdlib.assert(v7081, {
        at: './index.rsh:338:14:application',
        fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v7086 = stdlib.cast(false, true, v6998);
      const v7087 = stdlib.mul256(v7016, v7086);
      const v7088 = stdlib.cast(false, true, v7065);
      const v7089 = stdlib.cast(false, true, v7068);
      const v7090 = stdlib.mul256(v7088, v7089);
      const v7091 = stdlib.ge256(v7090, v7087);
      stdlib.assert(v7091, {
        at: './index.rsh:348:14:application',
        fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v7110 = stdlib.sub(v3044, v7019);
      ;
      const v7111 = {
        A: v7019,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v7112 = await txn1.getOutput('Trader_swapBForA', 'v7111', ctc9, v7111);
      if (v1878) {
        stdlib.protect(ctc13, await interact.out(v6436, v7112), {
          at: './index.rsh:394:10:application',
          fs: ['at ./index.rsh:394:10:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:351:12:application call to "k" (defined at: ./index.rsh:397:18:function exp)', 'at ./index.rsh:397:55:application call to [unknown function] (defined at: ./index.rsh:349:20:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v7117 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v6505
        };
      const v7119 = {
        A: v7065,
        B: v7068
        };
      null;
      const v10990 = v3037;
      const v10991 = v7069;
      const v10992 = v7080;
      const v10993 = v3040;
      const v10995 = v7110;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Harvester_delete()byte[0]`, `Harvester_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`],
    sigs: [`Harvester_delete()byte[0]`, `Harvester_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`]
    },
  appApproval: `BiAWAAgYBAFkAgMQkE6gjQaZ66OHCoOjz9MKgO7B5AzZlKygCglJ4PPsqgK495HlBykx////////////ASYFAQAAAQEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxAEVFTLpyI1ADEYQQqQKWRJIls1ASNbNQI2GgAXSUEBqyI1BCEENQZJIQsMQAFDSSEMDEAAI0khDQxAABQhDRJENhoBNhoCUDX/KDT/UEIBmiEMEkQpQgghSSEODEAA+CEOEkQ0AUklDEAAdyUSRChkKmRQSTUDSUpXIBA1/1cwEDX+V0AQNf1XUDk1/DQDVwgINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXKQg0/FcBCFA0/FcxCFA0/FcJIFA0/FcAAVBQNP1XAAg0/VcICFBQNANXAAhQIQ+vUDUHQgmzIQYSRChkSTUDSUpXEBA1/1cgEDX+VzAQNf1XQDk1/DQDVwgINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXKQg0/FcBCFA0/FcxCFA0/FcJIFA0/FcAAVBQNP1XAAg0/VcICFBQNANXAAhQIQ+vUDUHQgk+IQsSRDYaATYaAlA1/4ABAzT/UCEQr1BCAHlJIREMQAA5SSESDEAAGiESEkQ2GgE2GgJQNf+AAQQ0/1AhEK9QQgBRIRESRDYaATYaAlA1/yo0/1CBQa9QQgA5geT86oECEkQ2GgE1/4ABAjT/UIFRr1BCAB82GgIXNQQ2GgM2GgEXSSEGDEAG+kkhBwxABpIhBxJEJTQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpKSiJbNf8jWzX+VxAQNf1XIBA1/FcwEDX7V0AQNfpXUDk1+YGJAVs1+Ek1BTX3gARHaEcfNPdQsDT3IlVJIQYMQAPhSSEHDEADAUklDEABfiUSRDT3VwEQNfY09iJbNfU09TT/iAhVNPlXAAEXFEQ0+yJbNfQ0+yNbNfM0+SETWzXyNPkhFFs18TTzNPUINfAkrzT1FlArJK808RZQoYgIO6OICDc17ySvNPQWUDXuNO807qOICCUkrzTwFlAro4gIGjTvoIgIFKKICBBJSiEIWyISRCNbIhJEIlsiEkQkWzXtNPU09B008Jc07Qk08iEFCzTxCh0hBZc17DT1NPIdIQmXNesjrzTsFlA06xYjr1A06zT0HTTwlzTsDU1JNeoiWzXpNOojWzXoNPQ07Qk06Ak15zTwNOkJNeY09iNbNO0ORCSvNOcWUCSvNOYWUKOIB4k07iSvNPMWUKOIB32nRLEisgE07bIIIQSyEDEAsgezNO0WI69QNeWACAAAAAAAABvHNOVQsDTlNQcnBCOvNPUWUFA05VA05xY05hZQULA0/zT+NP0iNPw05xY05hZQNPoiWzToCBY0+iNbNOkIFlA0+TIGNPg07QlCBgZINPdXARA19jT2Ils19TT1iAbBNPlXAAEXFEQ0+yJbNfQ0+yNbNfM0+SETWzXyNPkhFFs18TT0NPUINfAkrzT1FlArJK808RZQoYgGwaOIBr017ySvNPMWUDXuNO807qOIBqskrzTwFlAro4gGoDTvoIgGmqKIBpZJSiEIWyISRCNbIhJEIlsiEkQkWzXtNPU08x008Jc07Qk08iEFCzTxCh0hBZc17DT1NPIdIQmXNesjrzTsFlA06xYjr1A06zTzHTTwlzTsDU1JNeoiWzXpNOojWzXoNPA06Qk15zTzNO0JNOgJNeY09iNbNO0ORCSvNOcWUCSvNOYWUKOIBg8krzT0FlA07qOIBgOnRLEisgE07bISJbIQMQCyFDT/shGzI6807RZQNeWACAAAAAAAABiJNOVQsDTlNQcnBDT1FiOvUFA05VA05xY05hZQULA0/zT+NP0iNPw05xY05hZQNPoiWzTpCBY0+iNbNOgIFlA0+TIGNPg09QhCBIlINPdXAQg19jT2FzX1NPU0/ogFXTT8I1s19DT7Ils18zT7I1s18jT1NPMdNPSXNfE09TTyHTT0lzXwNPwiWzT1CDXvNPQ09Qk17jTzNPEJNe008jTwCTXssSKyATTxsgghBLIQMQCyB7OxIrIBNPCyEiWyEDEAshQ0/7IRszTxFjTwFlA164AIAAAAAAAAFUQ061CwNOs1B4AE3XCWZTT1FlA061A07RY07BZQUDTvFjTuFlBQsDT/NP40/SI07xY07hZQNO0WNOwWUDT6NPkyBjT4NPEJQgOwSSEEDEABIEg091cBGDX2NPZXABBJNfUiWzX0NPUjWzXzNPSIBFg08zT/iARrNPYhCFs18jT5VwABFxRENPwjW0k18CISQQAoJK808hZQNe8krzT0FlAkrzTzFlCjiARYNO9Jo4gEUahENPI18UIAJzTyIhJENPQ0+yJbHTTwlzXvNPM0+yNbHTTwl0k17jTvSTTuDE018TT0NPsiWwg17zTzNPsjWwg17jT8Ils08Qk17TTwNPEINeyxIrIBNPGyEiWyEDEAshQ0/rIRs4AIAAAAAAAAEes08RZQsDTxFjUHgAQBglPqNPQWNPMWUFA08RZQNO8WNO4WUFA07RY07BZQULA0/zT+NP0iNO0WNOwWUDTvFjTuFlA0+jT5MgY0+DT0CEICiUg091cBWTX2NPZXACA19TT2VyA5STX0VxggNfM09CJbNfI09CNbNfE09Fc4ARc18DEANPlXCSASRDTyIQUMRDTxIQUMRDTyNPEISTXvNPE08ggSNO8hBQwQNO8iDRBEMgpgMgp4CTT4CTXuNPoiWzXtNPojWzXsNO007gg167EisgE067IIIQSyEDT1sgezsSKyATTsshIlshA09bIUNP+yEbOACAAAAAAAAA8jNO0WNOwWUDTuFlBQsDTtFjTsFlA07hZQNQeABFatdTw08hY08RZQNO8WUDTzUDTwFlEHCFBQsDT/NP40/TTwNPwjWyISEDT7IlsiEjT7I1siEhAQNPw0+zT9NPAWUQcINPEWUDTzUDTyFlA07xZQMgY07jT4CDTrCUIBYEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDI1s1/0k1BTX+gAQlPLfXNP5QsIAIAAAAAAAAG/awKTUHsSKyASEHshA0/7Ihs7EisgEishIlshAyCbIVMgqyFDQDIluyEbNCAXEiEkQiNAESRDQESSISTDQCEhFESTUFSUpJSCk1/yJbNf5XCCA1/VcoCDX8VzAgNfuABD5Flz80/1A0/hZQNP1QNPxQNPtQsCEKiAGBIQqIAXyxIrIBIrISJbIQMgqyFDT+shGzIRUhCQ1EIQqIAV6xIrIBIQeyECEVsiKBBrIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfqACAAAAAAAAAu5NPoWULA0+kk1+TT+FiJbE0QhCK81+DT+NPk0+CKAEP//////////AAAAAAAAAAA0+EmACQAAAAAAAAAAGTT7UIAIAAAAAAAAAAVQgAgAAAAAAAAAHlAyBiJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jT5QQAmNPYWNPcWUDT6UDT7UDT8UDT9UChLAVcAeWdIIQY1ATIGNQJCAFA09hY09xZQNPhQNPpQNPtQNPxQNP1QNP8WUChLAVcAf2cqSwFXfxJnSCU1ATIGNQJCAB0xGYEFEkSxIrIBIrIIIQSyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIQQIMgQSRDEWEkQhBEMxGSISREL/3SI1ASI1AkL/wTQASUohBAg1ADgHMgoSRDgQIQQSRDgIEkSJNABJSkkhBAg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFYEgTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 145,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
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
                "name": "v2977",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2978",
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
                "name": "v2979",
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
                "name": "v2980",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2981",
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
        "internalType": "uint256",
        "name": "v0",
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
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
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
                "name": "v2977",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2978",
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
                "name": "v2979",
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
                "name": "v2980",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2981",
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
                "name": "v7155",
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
                    "name": "_Harvester_harvest0_466",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_466",
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
                    "name": "_Provider_withdraw0_466",
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
                    "name": "_Trader_swapAForB0_466",
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
                    "name": "_Trader_swapBForA0_466",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v3665",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v3001",
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
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3875",
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
    "name": "_reach_oe_v4587",
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
    "name": "_reach_oe_v5444",
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
    "name": "_reach_oe_v6281",
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
    "name": "_reach_oe_v7111",
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
    "name": "_reach_oe_v7158",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Harvester_delete",
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
    "name": "Harvester_harvest",
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
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
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
                "name": "v7155",
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
                    "name": "_Harvester_harvest0_466",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_466",
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
                    "name": "_Provider_withdraw0_466",
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
                    "name": "_Trader_swapAForB0_466",
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
                    "name": "_Trader_swapBForA0_466",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v3665",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
]`,
  Bytecode: `0x608060405260405162005aa538038062005aa5833981016040819052620000269162000a0d565b600080554360035562000038620004d4565b60408051835181526020808501518051151582840152908101516001600160a01b03908116838501529281015151606080840191909152810151516001600160c01b031916608080840191909152015190911660a08201527f130649345bbe2a41e0b9c576e46f2e3de49bcd0eb18c1d638d3abcba907cd6109060c00160405180910390a1620000cb341560086200036e565b620000d9600160096200036e565b80516000199052805160006020918201819052818301805182905280518301829052516040908101829052808401519190915283820151810151518151928301520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260208581015180518183015191850151928601529284019290925260608301919091529060800160408051808303601f190181528282528582015151602084015291016040516020818303038152906040526000196012604051620001be9062000597565b620001cf9695949392919062000b25565b604051809103906000f080158015620001ec573d6000803e3d6000fd5b506001600160a01b031660608201819052608082018190526040519081527f943a677bf6e3e589e460f67a83b1d953a29a2038e6b9463918ba0ce26fe262439060200160405180910390a1602082810151015160a0820180516001600160a01b039283169052515160808301516200027c929081169116146200027157600162000274565b60005b600a6200036e565b60c0810180516000908190529051602090810182905260e08301805192909252815160199082015283015160809081015182516001600160a01b03909116604090910152815160056060909101529051601e910152620002db620005a5565b60208084015181015182516001600160a01b039182169052608080850151845192169183019190915260c080850180518551604090810191909152858501805160009081905288518251909701969096528251815190920191909152905181516060015260e086015181519093019290925281514360a09091015290510152620003658162000398565b50505062000d63565b81620003945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156200044757620003ae620005c9565b8151516001600160a01b039081168252825160209081015190911681830152808301805182015160408085019190915281518101516060808601919091528251015160808086019190915291519091015160a0840152600260005543600155516200041c9183910162000b90565b604051602081830303815290604052600290805190602001906200044292919062000635565b505050565b62000451620006c4565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528184018051830151606080860191909152815183015160808087019190915282519091015160a08601528151015160c0808601919091529051015160e0840152600460005543600155516200041c9183910162000c49565b604080516101408101825260006101008201818152610120830182905282528251606080820185528282526020808301849052828601849052808501929092528451918201855282825293830152918101829052608081019190915260a081016200053e620007b2565b815260200162000561604051806040016040528060008152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b6110878062004a1e83390190565b6040518060400160405280620005ba620007d0565b81526020016200059262000819565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200162000612604051806040016040528060008152602001600081525090565b81526020016200053e604051806040016040528060008152602001600081525090565b828054620006439062000d26565b90600052602060002090601f016020900481019282620006675760008555620006b2565b82601f106200068257805160ff1916838001178555620006b2565b82800160010185558215620006b2579182015b82811115620006b257825182559160200191906001019062000695565b50620006c0929150620008d3565b5090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016200070e604051806040016040528060008152602001600081525090565b815260200162000731604051806040016040528060008152602001600081525090565b815260200162000754604051806040016040528060008152602001600081525090565b815260200162000777604051806040016040528060008152602001600081525090565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001600081525090565b60405180602001604052806001906020820280368337509192915050565b604051806060016040528060006001600160a01b0316815260200160006001600160a01b0316815260200162000592604051806040016040528060008152602001600081525090565b6040518060e001604052806000151581526020016200084b604051806040016040528060008152602001600081525090565b81526020016200086e604051806040016040528060008152602001600081525090565b815260200162000891604051806040016040528060008152602001600081525090565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260200160008152602001600081525090565b5b80821115620006c05760008155600101620008d4565b604080519081016001600160401b03811182821017156200091b57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200091b57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200091b57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200099b57600080fd5b919050565b600060208284031215620009b357600080fd5b604051602081016001600160401b0381118282101715620009e457634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160c01b03198116811462000a0557600080fd5b905292915050565b600081830360c081121562000a2157600080fd5b62000a2b620008ea565b8351815260a0601f198301121562000a4257600080fd5b62000a4c62000921565b6020850151801515811462000a6057600080fd5b815262000a706040860162000983565b60208201526020605f198401121562000a8857600080fd5b62000a9262000952565b92506060850151835282604082015262000ab08660808701620009a0565b606082015262000ac360a0860162000983565b60808201526020820152949350505050565b6000815180845260005b8181101562000afd5760208185018101518683018201520162000adf565b8181111562000b10576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b3a60c083018962000ad5565b828103602084015262000b4e818962000ad5565b9050828103604084015262000b64818862000ad5565b9050828103606084015262000b7a818762000ad5565b6080840195909552505060a00152949350505050565b81516001600160a01b039081168252602080840151909116908201526040808301516101a083019162000bcf9084018280518252602090810151910152565b50606083015180516080840152602081015160a0840152506080830151805160c0840152602081015160e08401525060a083015180511515610100840152602081015161012084015260408101516001600160a01b0316610140840152606081015161016084015260808101516101808401525092915050565b81516001600160a01b0390811682526020808401519091169082015260408083015161020083019162000c889084018280518252602090810151910152565b50606083015180516080840152602081015160a0840152506080830151805160c0840152602081015160e08401525060a0830151805161010084015260208101516101208401525060c083015180511515610140840152602081015161016084015260408101516001600160a01b031661018084015260608101516101a084015260808101516101c08401525060e08301516101e083015292915050565b600181811c9082168062000d3b57607f821691505b6020821081141562000d5d57634e487b7160e01b600052602260045260246000fd5b50919050565b613cab8062000d736000396000f3fe6080604052600436106100a55760003560e01c80638323075711610061578063832307571461015e5780638bf8964914610173578063ab53f2c614610186578063b035d7a1146101a9578063c8867ae9146101c1578063dc8d714f146101d457005b80630398fba2146100ae5780631e93b0f1146100d757806332020fec146100f65780633402da13146101165780633e59bac4146101295780634012e02e1461013c57005b366100ac57005b005b6100c16100bc36600461325f565b6101e7565b6040516100ce91906132b7565b60405180910390f35b3480156100e357600080fd5b506003545b6040519081526020016100ce565b6101096101043660046132c5565b610256565b6040516100ce91906132de565b6100e8610124366004613325565b6102c0565b6100ac610137366004613350565b61031e565b34801561014857600080fd5b50610151610342565b6040516100ce91906133b6565b34801561016a57600080fd5b506001546100e8565b6100ac61018136600461346e565b610688565b34801561019257600080fd5b5061019b6106a8565b6040516100ce9291906134ad565b6101b1610745565b60405190151581526020016100ce565b6101096101cf3660046134e7565b61077c565b6101096101e23660046134e7565b6107ed565b6101ef61259d565b6101f76125c8565b6101ff612656565b610207612670565b6040805180820182526001600160a01b0388168152602080820188905283810191909152600083528151808201909252828252830152610247828461085e565b50506020015190505b92915050565b60408051808201909152600080825260208201526102726125c8565b61027a612656565b610282612670565b604080516020808201835287825260608401919091526002835281518082019092528282528301526102b4828461085e565b50506060015192915050565b60006102ca6125c8565b6102d2612656565b6102da612670565b604080518082018252878152602080820188905283830191909152600183528151808201909252828252830152610311828461085e565b5050604001519392505050565b6103266125c8565b61033e61033836849003840184613509565b82611f03565b5050565b61034a6126b3565b60026000541415610522576000600280546103649061358f565b80601f01602080910402602001604051908101604052809291908181526020018280546103909061358f565b80156103dd5780601f106103b2576101008083540402835291602001916103dd565b820191906000526020600020905b8154815290600101906020018083116103c057829003601f168201915b50505050508060200190518101906103f59190613666565b90506103ff61276d565b604080830180515183515251602090810151835182015260608085018051518386018051919091529051830151905183015260a085018051820151858501805191909152815184015181518501528151608090810151825187015282519095015181516001600160a01b03909116908401529051519051901515908401528285018051519185018051929092525182015190519091015281015160005b908160018111156104af576104af6133a0565b9052506080808201805160006020918201528481015160a080860180516001600160a01b03938416905286518151850152928601518351604090810191909152860151835160609081019190915290950151825190940193909352935184519216919092015251815160c0015251919050565b600460005414156106795760006002805461053c9061358f565b80601f01602080910402602001604051908101604052809291908181526020018280546105689061358f565b80156105b55780601f1061058a576101008083540402835291602001916105b5565b820191906000526020600020905b81548152906001019060200180831161059857829003601f168201915b50505050508060200190518101906105cd91906136f1565b90506105d761276d565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151905183015260c085018051840151604080870180519290925282518501518251860152825184015182518201528251015181516001600160a01b039091169086015290515190519015159082015260a0850180515193850180519490945251820151925190910191909152810151600061049c565b61068560006007612091565b90565b6106906125c8565b61033e6106a236849003840184613860565b8261085e565b6000606060005460028080546106bd9061358f565b80601f01602080910402602001604051908101604052809291908181526020018280546106e99061358f565b80156107365780601f1061070b57610100808354040283529160200191610736565b820191906000526020600020905b81548152906001019060200180831161071957829003601f168201915b50505050509050915091509091565b600061074f6125c8565b61075761280a565b60408051602080820190925260008152908201526107758183611f03565b5051919050565b60408051808201909152600080825260208201526107986125c8565b6107a0612656565b6107a8612670565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107e0828461085e565b5050608001519392505050565b60408051808201909152600080825260208201526108096125c8565b610811612656565b610819612670565b604080518082018252878152602080820188905260a0840191909152600483528151808201909252828252830152610851828461085e565b505060a001519392505050565b61086e600460005414602a612091565b815161088990158061088257508251600154145b602b612091565b60008080556002805461089b9061358f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c79061358f565b80156109145780601f106108e957610100808354040283529160200191610914565b820191906000526020600020905b8154815290600101906020018083116108f757829003601f168201915b505050505080602001905181019061092c91906136f1565b9050610936612834565b7f66b62a870cdd5d0d83f552ce4da25f289d47d844a4993871eaeb4a934c3f6cb2846040516109659190613928565b60405180910390a16000602085015151516004811115610987576109876133a0565b1415610d9b5760208085015151015181526109a43415600e612091565b6109be6109b733846020015160006120b7565b600f612091565b6109d86109d133846000015160006120b7565b6010612091565b6109ff8260c00151604001516001600160a01b0316336001600160a01b0316146011612091565b80516020015151610a14906064116012612091565b610a2e606482600001516020015160200151106013612091565b8051602090810151908101519051610a4691906139e8565b60208083019190915281518101518051910151610a9b91610a66916139e8565b826020015114610a77576000610a80565b60648260200151105b610a8b576000610a94565b60008260200151115b6014612091565b60e082015147908110610abc5760e0830151610ab79082613a00565b610abf565b60005b6040830181905260a084015151610ad691906139e8565b606083018190528251516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610b15573d6000803e3d6000fd5b50825182515160a085015160200151610b2f9291906120cf565b60a080840180515160808501805191909152905160209081015182518201529051918401805192909252604080850151835190920191909152905190517f60114cfc6ede93262a04336a5326dabcb76fcf07b039236da9a5fafbe4f47ba991610b97916132b7565b60405180910390a160a082015160208086019190915282518101515160c0840180519190915283518201518201518151830152818401518151604090810191909152845183015160609081015183516001600160a01b0390911691015284519092015160809081015182519015159101525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c3691613a17565b60405180910390a1815160209081015160809081015160e08501805191151590915284518301518301518151840152845183015160609081015182516001600160a01b039091166040909101528551840151518251909101529184015191510152610c9f612d14565b835181516001600160a01b03918216905260208086015183519216918101919091526040808601518351909101528351015160800151610ce0576000610ceb565b606084015160200151155b610cf6576000610d13565b60808401515115610d08576000610d13565b608084015160200151155b60208083018051921515909252606080870151835190920191909152608080870151835160409081019190915280880151845184015260e08088015185519093019290925292514360a0909101529085015190860151918501519091610d78916139e8565b610d829190613a00565b602082015160c00152610d94816120e3565b5050611efd565b6001602085015151516004811115610db557610db56133a0565b14156111a5576020840151516040015161010082018190525151610ddc9034146015612091565b610df6610def33846020015160006120b7565b6016612091565b610e1c610e1533846000015184610100015160000151602001516120b7565b6017612091565b60c082015151610e3b90610e31576001610e34565b60005b6018612091565b606082015160200151610e9d57610100810151602001516101408201819052610e8890610e689080613a25565b6101008301515160208101519051610e809190613a25565b146019612091565b61010081015160200151610120820152610f44565b610eb460008261010001516020015114601a612091565b6060820151602001516080830151516101008301515151610ed59190613a25565b610edf9190613a44565b6101608201526060820151602090810151608084015182015161010084015151909201519091610f0e91613a25565b610f189190613a44565b610180820181905261016082015110610f3657806101800151610f3d565b8061016001515b6101208201525b6080820151516101008201515151610f5c91906139e8565b6101a082015260808201516020908101516101008301515190910151610f8291906139e8565b6101c082019081526101a08201516101e083018051919091529051905160200152610120810151606083015151610fb99190613a00565b610200820152610120810151606083015160200151610fd891906139e8565b6102208201908152610200820151610240830180519190915290519051602090810191909152820151610120820151611013919033906120cf565b7f0515f0f9011a57eaa12c1c1fdf5f64c3c26a708212b995bab69324842e99de1c81610120015160405161104991815260200190565b60405180910390a161012081018051604080860191909152610100830180515151610260850180519190915290515160209081015182518201526101a085015161028086018051919091526101c086015181518301526102008601516102a08701805191909152610220870151815190930192909252915193519151905192517f706e0e243d48b0263407243d4c88fe2ae827775c9df4b5f0685ea93fc4ea7869946110f89490939291613a66565b60405180910390a1611108612d14565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051600090526102408501518151909301929092526101e084015182519091015260a08085015182516060015260c0850151825160800152905143910152610100820151515160e084015161118d91906139e8565b602082015160c0015261119f816120e3565b50611efd565b60026020850151515160048111156111bf576111bf6133a0565b14156114ec57602084015151606001516102c08201526111e13415601b612091565b6112036111fc338460200151846102c00151600001516120b7565b601c612091565b61121d61121633846000015160006120b7565b601d612091565b6060820151602001516080830151516102c08301515161123d9190613a25565b6112479190613a44565b6102e082015260608201516020908101516080840151909101516102c0830151516112729190613a25565b61127c9190613a44565b6103008201526102c08101515160608301515161129991906139e8565b6103208201526102c0810151516060830151602001516112b99190613a00565b6103408201908152610320820151610360830180519190915290519051602001526102e08101516080830151516112f09190613a00565b61038082015261030081015160808301516020015161130f9190613a00565b6103a082019081526103808201516103c0830180519190915290519051602001526102e0810151604051339180156108fc02916000818181858888f19350505050158015611361573d6000803e3d6000fd5b506113768260000151338361030001516120cf565b6102e08101516103e08201805191909152610300820151815160200152516040517f3502c05e0f564130e2ec6382ccef17bd37119e91a664624ea4a90c88e3f3a85d916113c2916132de565b60405180910390a16103e081018051606085015261038082015161040083018051919091526103a0830151815160209081019190915261032084015161042085018051919091526103408501518151909201919091526102c0840151519251915190516040517ffda6e27a38e82dfb3032bc90d0f9904b3e2c92c1f1517fd73928c75c485ab8ca9461145994909390929091613aa5565b60405180910390a1611469612d14565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051600090526103608501518151909301929092526103c084015182519091015260a08085015182516060015260c08501518251608001529051439101526102e082015160e084015161118d9190613a00565b6003602085015151516004811115611506576115066133a0565b14156119e7576020840151516080015161044082018190525161152c903414601e612091565b61154661153f33846020015160006120b7565b601f612091565b61156061155933846000015160006120b7565b6020612091565b60c08201515161157f90611575576001611578565b60005b6021612091565b6104408101515160808301515161159691906139e8565b61046082015260c0820151608001516115b190612710613a00565b610440820151516115c29190613a25565b61048082018190526080830151602001516104a08301526104608201516115ec9061271090613a25565b6115f691906139e8565b816104a0015182610480015161160c9190613a25565b6116169190613a44565b6104c082015260c082015160808101516060909101516064919061163b908390613a25565b6116459190613a44565b6104c08301516104608401516080860151602001516104408601515161166b9190613a25565b6116759190613a44565b61167f9190613a00565b6116899190613a25565b6116939190613a44565b6104e082015260c08201516060015161044082015151612710916116b691613a25565b6116c09190613a44565b6105008201818152610520830180519290925290516000602091820181905261054084018051919091526104e0840180519151830191909152516104608401516080860151909201519251909261171691613a25565b6117209190613a44565b1161173057806105400151611737565b8061052001515b6105608201819052516104608201516117509190613a00565b8161058001818152505080610560015160200151816104c0015183608001516020015161177d9190613a00565b6117879190613a00565b6105a082019081526105808201516105c0830180519190915290519051602001526105608101515160a0830151516117bf91906139e8565b6105e08201515261056081015160209081015160a0840151909101516117e591906139e8565b816105e00151602001818152505061180f816104c001518261044001516020015111156022612091565b6104a08101516080830151516118479161182891613a25565b826105a0015183610580015161183e9190613a25565b10156023612091565b61185b826000015133836104c001516120cf565b61060081018051600090526104c0820151815160200152516040517f0d0867a154526bc92c31760c9aafc5ce5a743b086748747458f94e5ee9394eed916118a1916132de565b60405180910390a1610600810180516080858101919091526104408301515161062084018051919091528051600060209182015261058085015161064086018051919091526105a0860151815183015291519351915160408051865181529583015186840152835190860152918101516060850152815192840192909252015160a08201527f6ae684f28b604987e150fdf4f25ddbfa02339b21865a275b2d0061481beb084b9060c00160405180910390a161195b612d14565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051600090526060808701518251909401939093526105c08501518151909201919091526105e084015181519092019190915260c0840151815160800152514360a0909101526104408201515160e084015161118d91906139e8565b6004602085015151516004811115611a0157611a016133a0565b1415611efd5760208401515160a00151610660820152611a2334156024612091565b611a3d611a3633846020015160006120b7565b6025612091565b611a5f611a58338460000151846106600151600001516120b7565b6026612091565b60c082015151611a7e90611a74576001611a77565b60005b6027612091565b61066081015151608083015160200151611a9891906139e8565b61068082015260c082015160800151611ab390612710613a00565b61066082015151611ac49190613a25565b6106a082018190526080830151516106c0830152610680820151611aeb9061271090613a25565b611af591906139e8565b816106c00151826106a00151611b0b9190613a25565b611b159190613a44565b6106e082015260c0820151608081015160609091015160649190611b3a908390613a25565b611b449190613a44565b6106e083015161068084015160808601515161066086015151611b679190613a25565b611b719190613a44565b611b7b9190613a00565b611b859190613a25565b611b8f9190613a44565b61070082015260c0820151606001516106608201515161271091611bb291613a25565b611bbc9190613a44565b6107208201818152610740830180519290925290516000602091820181905261076084018051919091526107008401805191519092015251610680830151608085015151925191929091611c109190613a25565b611c1a9190613a44565b11611c2a57806107600151611c31565b8061074001515b6107808201819052602001516106e0820151608084015151611c539190613a00565b611c5d9190613a00565b6107a082015261078081015151610680820151611c7a9190613a00565b6107c082019081526107a08201516107e0830180519190915290519051602090810191909152610780820151015160a083015151611cb891906139e8565b610800820151526107808101515160a083015160200151611cd991906139e8565b8161080001516020018181525050611d03816106e001518261066001516020015111156028612091565b611d3e826080015160200151826106c00151611d1f9190613a25565b826107c00151836107a00151611d359190613a25565b10156029612091565b6106e0810151604051339180156108fc02916000818181858888f19350505050158015611d6f573d6000803e3d6000fd5b506106e0810151610820820180519190915280516000602090910152516040517f809a8e24c8101df342717d4319d8788f43a6be42b3c4e7263e7d381dec01c32991611dba916132de565b60405180910390a16108208101805160a08581019190915261084083018051600090526106608401515181516020908101919091526107a085015161086086018051919091526107c0860151815183015291519351915160408051865181529583015186840152835190860152918101516060850152815160808501520151908201527f6ae684f28b604987e150fdf4f25ddbfa02339b21865a275b2d0061481beb084b9060c00160405180910390a1611e72612d14565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051600090526060808701518251909401939093526107e085015181519092019190915261080084015181519092019190915260c0840151815160800152514360a0909101526106e082015160e084015161118d9190613a00565b50505050565b611f13600260005414600c612091565b8151611f2e901580611f2757508251600154145b600d612091565b600080805560028054611f409061358f565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6c9061358f565b8015611fb95780601f10611f8e57610100808354040283529160200191611fb9565b820191906000526020600020905b815481529060010190602001808311611f9c57829003601f168201915b5050505050806020019051810190611fd19190613666565b6040805185518152602080870151511515908201529192507fd87af78abaccc59d995cd712c21929e42321bf30f94e6164c3f52c0c14084d52910160405180910390a16120203415600b612091565b604051600081527f72516386f1e47bc2515e245254f08935bbc640f92a26f18f432076cd5de6f7819060200160405180910390a160008252602081015161206990600019612212565b6120768160200151612225565b6000808055600181905561208c90600290612d34565b505050565b8161033e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006120c583853085612237565b90505b9392505050565b6120da838383612311565b61208c57600080fd5b60208101515115612186576120f6612d6e565b8151516001600160a01b039081168252825160209081015190911681830152808301805182015160408085019190915281518101516060808601919091528251015160808086019190915291519091015160a08401526002600055436001555161216291839101613b11565b6040516020818303038152906040526002908051906020019061208c929190612e07565b61218e612e8b565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528184018051830151606080860191909152815183015160808087019190915282519091015160a08601528151015160c0808601919091529051015160e08401526004600055436001555161216291839101613b91565b50565b61221c82826123e2565b61033e57600080fd5b61222e816124bd565b61220f57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161229e91613c3c565b60006040518083038185875af1925050503d80600081146122db576040519150601f19603f3d011682016040523d82523d6000602084013e6122e0565b606091505b50915091506122f182826001612562565b50808060200190518101906123069190613c58565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161237091613c3c565b60006040518083038185875af1925050503d80600081146123ad576040519150601f19603f3d011682016040523d82523d6000602084013e6123b2565b606091505b50915091506123c382826002612562565b50808060200190518101906123d89190613c58565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161240e91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161244c9190613c3c565b60006040518083038185875af1925050503d8060008114612489576040519150601f19603f3d011682016040523d82523d6000602084013e61248e565b606091505b509150915061249f82826003612562565b50808060200190518101906124b49190613c58565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b03861691839161250491613c3c565b60006040518083038185875af1925050503d8060008114612541576040519150601f19603f3d011682016040523d82523d6000602084013e612546565b606091505b509150915061255782826004612562565b506001949350505050565b606083156125715750816120c8565b8251156125815782518084602001fd5b60405163100960cb60e01b8152600481018390526024016120ae565b60408051608081018252600091810182815260608201929092529081905b8152602001600081525090565b6040518060c001604052806000151581526020016125e461259d565b81526020016000815260200161260d604051806040016040528060008152602001600081525090565b815260200161262f604051806040016040528060008152602001600081525090565b8152602001612651604051806040016040528060008152602001600081525090565b905290565b604051806040016040528060008152602001612651612f47565b6040805160c08101909152806000815260200161268b612f5a565b815260200161269861259d565b815260200161260d6040518060200160405280600081525090565b6040518060e0016040528060006001600160a01b031681526020016126eb604051806040016040528060008152602001600081525090565b815260200161270d604051806040016040528060008152602001600081525090565b815260200161271a612f79565b815260200161273c604051806040016040528060008152602001600081525090565b8152600060208201526040016126516040805160608101909152806000815260006020820181905260409091015290565b604080516101008101909152600060c0820181815260e0830191909152819081526020016127ae604051806040016040528060008152602001600081525090565b81526020016127bb612f79565b81526020016127dd604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016126516126b3565b60405180604001604052806000815260200161265160405180602001604052806000151581525090565b604051806108800160405280612848612f5a565b815260200160008152602001600081526020016000815260200161287f604051806040016040528060008152602001600081525090565b815260200161288c61259d565b8152602001612899612f79565b81526020016128a6612fb3565b81526020016128b361259d565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016128ff604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161292f604051806040016040528060008152602001600081525090565b8152602001612951604051806040016040528060008152602001600081525090565b8152602001612973604051806040016040528060008152602001600081525090565b8152602001612995604051806040016040528060008152602001600081525090565b81526020016129b06040518060200160405280600081525090565b8152602001600081526020016000815260200160008152602001600081526020016129ee604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001612a1e604051806040016040528060008152602001600081525090565b8152602001612a40604051806040016040528060008152602001600081525090565b8152602001612a62604051806040016040528060008152602001600081525090565b8152602001612a84604051806040016040528060008152602001600081525090565b8152602001612aa6604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612af2604051806040016040528060008152602001600081525090565b8152602001612b14604051806040016040528060008152602001600081525090565b8152602001612b36604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001612b66604051806040016040528060008152602001600081525090565b8152602001612b88604051806040016040528060008152602001600081525090565b8152602001612baa604051806040016040528060008152602001600081525090565b8152602001612bcc604051806040016040528060008152602001600081525090565b8152602001612bee604051806040016040528060008152602001600081525090565b8152602001612c10604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612c5c604051806040016040528060008152602001600081525090565b8152602001612c7e604051806040016040528060008152602001600081525090565b8152602001612ca0604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001612cd0604051806040016040528060008152602001600081525090565b8152602001612cf2604051806040016040528060008152602001600081525090565b815260200161260d604051806040016040528060008152602001600081525090565b6040518060400160405280612d27612fed565b8152602001612651613035565b508054612d409061358f565b6000825580601f10612d50575050565b601f01602090049060005260206000209081019061220f91906130cb565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001612db6604051806040016040528060008152602001600081525090565b8152602001612dd8604051806040016040528060008152602001600081525090565b8152602001612dfa604051806040016040528060008152602001600081525090565b8152602001612651612fb3565b828054612e139061358f565b90600052602060002090601f016020900481019282612e355760008555612e7b565b82601f10612e4e57805160ff1916838001178555612e7b565b82800160010185558215612e7b579182015b82811115612e7b578251825591602001919060010190612e60565b50612e879291506130cb565b5090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001612ed4604051806040016040528060008152602001600081525090565b8152602001612ef6604051806040016040528060008152602001600081525090565b8152602001612f18604051806040016040528060008152602001600081525090565b8152602001612f3a604051806040016040528060008152602001600081525090565b81526020016125bb612fb3565b6040518060200160405280612651612670565b604051806040016040528060006001600160a01b031681526020016126515b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160006001600160a01b03168152602001612651604051806040016040528060008152602001600081525090565b6040518060e00160405280600015158152602001613066604051806040016040528060008152602001600081525090565b8152602001613088604051806040016040528060008152602001600081525090565b81526020016130aa604051806040016040528060008152602001600081525090565b81526020016130b7612fb3565b815260200160008152602001600081525090565b5b80821115612e8757600081556001016130cc565b6001600160a01b038116811461220f57600080fd5b60405160a0810167ffffffffffffffff8111828210171561312657634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561312657634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561312657634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561312657634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff8111828210171561312657634e487b7160e01b600052604160045260246000fd5b801515811461220f57600080fd5b600060a0828403121561321157600080fd5b6132196130f5565b90508135815260208201356020820152604082013560408201526060820135613241816130e0565b60608201526080820135613254816131f1565b608082015292915050565b60008060c0838503121561327257600080fd5b823561327d816130e0565b915061328c84602085016131ff565b90509250929050565b6132aa82825180518252602090810151910152565b6020015160409190910152565b606081016102508284613295565b6000602082840312156132d757600080fd5b5035919050565b815181526020808301519082015260408101610250565b60006040828403121561330757600080fd5b61330f61312c565b9050813581526020820135602082015292915050565b6000806060838503121561333857600080fd5b61334284846132f5565b946040939093013593505050565b60006040828403121561336257600080fd5b50919050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b81516001600160a01b03908116825260208084015180518285015290810151604084015261020083019190506040840151805160608501526020810151608085015250606084015161340b60a0850182613368565b50608084015180516101408501526020015161016084015260a0840151811661018084015260c0840151805160028110613447576134476133a0565b6101a0850152602081015115156101c085015260400151166101e090920191909152919050565b6000610200828403121561336257600080fd5b60005b8381101561349c578181015183820152602001613484565b83811115611efd5750506000910152565b82815260406020820152600082518060408401526134d2816060850160208701613481565b601f01601f1916919091016060019392505050565b600080604083850312156134fa57600080fd5b50508035926020909101359150565b6000818303604081121561351c57600080fd5b6040516040810181811067ffffffffffffffff8211171561354d57634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561356657600080fd5b61356e61315d565b9150602084013561357e816131f1565b825260208101919091529392505050565b600181811c908216806135a357607f821691505b6020821081141561336257634e487b7160e01b600052602260045260246000fd5b80516135cf816130e0565b919050565b6000604082840312156135e657600080fd5b6135ee61312c565b9050815181526020820151602082015292915050565b600060a0828403121561361657600080fd5b61361e6130f5565b9050815161362b816131f1565b8152602082810151908201526040820151613645816130e0565b80604083015250606082015160608201526080820151608082015292915050565b60006101a0828403121561367957600080fd5b61368161318e565b825161368c816130e0565b8152602083015161369c816130e0565b60208201526136ae84604085016135d4565b60408201526136c084608085016135d4565b60608201526136d28460c085016135d4565b60808201526136e5846101008501613604565b60a08201529392505050565b6000610200828403121561370457600080fd5b61370c6131bf565b613715836135c4565b8152613723602084016135c4565b602082015261373584604085016135d4565b604082015261374784608085016135d4565b60608201526137598460c085016135d4565b608082015261376c8461010085016135d4565b60a082015261377f846101408501613604565b60c08201526101e0929092015160e083015250919050565b600060c082840312156137a957600080fd5b6137b161312c565b905081356137be816130e0565b81526137cd83602084016131ff565b602082015292915050565b6000606082840312156137ea57600080fd5b6137f261312c565b90506137fe83836132f5565b81526040820135602082015292915050565b60006020828403121561382257600080fd5b6040516020810181811067ffffffffffffffff8211171561385357634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b600081830361020081121561387457600080fd5b61387c61312c565b833581526101e0601f198301121561389357600080fd5b61389b61315d565b91506138a561318e565b6020850135600581106138b757600080fd5b81526138c68660408701613797565b60208201526138d98661010087016137d8565b60408201526138ec866101608701613810565b60608201526138ff8661018087016132f5565b6080820152613912866101c087016132f5565b60a0820152825260208101919091529392505050565b815181526020820151518051610200830191906005811061394b5761394b6133a0565b6020848101919091528181015180516001600160a01b0316604086015201516139776060850182613368565b50604081015161398b610100850182613295565b5060608101518051610160850152506080810151805161018085015260208101516101a08501525060a0015180516101c084015260208101516101e08401525b5092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156139fb576139fb6139d2565b500190565b600082821015613a1257613a126139d2565b500390565b60a081016102508284613368565b6000816000190483118215151615613a3f57613a3f6139d2565b500290565b600082613a6157634e487b7160e01b600052601260045260246000fd5b500490565b84518152602080860151818301526040820185905283516060830152830151608082015260e081015b825160a0830152602083015160c08301526124b4565b84815260e08101613ac3602083018680518252602090810151910152565b8351606083015260208401516080830152613a8f565b805115158252602080820151908301526040808201516001600160a01b03169083015260608082015190830152608090810151910152565b81516001600160a01b039081168252602080840151909116908201526040808301516101a0830191613b4f9084018280518252602090810151910152565b50606083015180516080840152602081015160a0840152506080830151805160c0840152602081015160e08401525060a08301516139cb610100840182613ad9565b81516001600160a01b03908116825260208084015190911690820152604080830151610200830191613bcf9084018280518252602090810151910152565b50606083015180516080840152602081015160a0840152506080830151805160c0840152602081015160e08401525060a0830151805161010084015260208101516101208401525060c0830151613c2a610140840182613ad9565b5060e08301516101e083015292915050565b60008251613c4e818460208701613481565b9190910192915050565b600060208284031215613c6a57600080fd5b81516120c8816131f156fea26469706673582212201c6b326763525402ff2f5a28de0c627a53951f0c93b387c8b0cca4c57c091e4964736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220e448404c437f978c93765a614fe97466588476884f1f2bf7b747bf354524110064736f6c634300080c0033`,
  BytecodeLen: 23205,
  Which: `oD`,
  version: 6,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:400:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:406:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:250:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Harvester_delete": Harvester_delete,
  "Harvester_harvest": Harvester_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_withdraw": Provider_withdraw,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Harvester: {
    delete: Harvester_delete,
    harvest: Harvester_harvest
    },
  Provider: {
    deposit: Provider_deposit,
    withdraw: Provider_withdraw
    },
  Trader: {
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    }
  };
