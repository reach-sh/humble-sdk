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
    computeMint_: ((_v11007, _v11008, _v11009, _v11010 ) => {
        const v11007 = stdlib.protect(ctc1, _v11007, null);
        const v11008 = stdlib.protect(ctc0, _v11008, null);
        const v11009 = stdlib.protect(ctc1, _v11009, null);
        const v11010 = stdlib.protect(ctc1, _v11010, null);
      
      let v11011;
      const v11012 = v11007.A;
      const v11013 = v11007.B;
      const v11016 = v11010.B;
      const v11018 = stdlib.eq(v11016, stdlib.checkedBigNumberify('158:19:decimal', stdlib.UInt_max, '0'));
      if (v11018) {
        const v11019 = stdlib.cast(false, true, v11012);
        const v11020 = stdlib.cast(false, true, v11013);
        const v11021 = stdlib.mul256(v11019, v11020);
        const v11022 = stdlib.cast(false, true, v11008);
        const v11024 = stdlib.mul256(v11022, v11022);
        const v11025 = stdlib.eq256(v11021, v11024);
        stdlib.assert(v11025, {
          at: '161:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        v11011 = v11008;
        }
      else {
        const v11026 = v11009.A;
        const v11027 = v11009.B;
        const v11028 = stdlib.eq(v11008, stdlib.checkedBigNumberify('165:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11028, {
          at: '165:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v11035 = stdlib.muldiv(v11012, v11026, v11016);
        const v11042 = stdlib.muldiv(v11013, v11027, v11016);
        const v11044 = stdlib.lt(v11035, v11042);
        const v11045 = v11044 ? v11035 : v11042;
        v11011 = v11045;
        }
      
      return v11011;}),
    computeSwap_: ((_v11046, _v11047, _v11048, _v11049 ) => {
        const v11046 = stdlib.protect(ctc2, _v11046, null);
        const v11047 = stdlib.protect(ctc1, _v11047, null);
        const v11048 = stdlib.protect(ctc1, _v11048, null);
        const v11049 = stdlib.protect(ctc4, _v11049, null);
      
      const v11051 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v11051, {
        at: '148:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v11054 = v11049.protoFee;
      const v11055 = v11049.lpFee;
      const v11056 = stdlib.lt(v11054, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v11056, {
        at: './index.rsh:79:8:application',
        fs: ['at ./index.rsh:83:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at 149:12:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v11057 = stdlib.lt(v11055, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v11057, {
        at: './index.rsh:80:8:application',
        fs: ['at ./index.rsh:83:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at 149:12:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      const v11061 = v11049.totFee;
      const v11065 = stdlib.add(v11055, v11054);
      const v11066 = stdlib.eq(v11061, v11065);
      const v11068 = stdlib.lt(v11061, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v11069 = v11066 ? v11068 : false;
      const v11070 = stdlib.gt(v11061, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v11071 = v11069 ? v11070 : false;
      stdlib.assert(v11071, {
        at: './index.rsh:84:8:application',
        fs: ['at 149:12:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v11072;
      const v11073 = v11047.A;
      const v11074 = v11047.B;
      const v11075 = v11048.A;
      const v11076 = v11048.B;
      if (v11046) {
        const v11085 = stdlib.add(v11075, v11073);
        const v11093 = stdlib.muldiv(v11073, v11076, v11085);
        const v11094 = stdlib.cast(false, true, v11073);
        const v11095 = stdlib.cast(false, true, v11061);
        const v11096 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v11095);
        const v11097 = stdlib.mul256(v11094, v11096);
        const v11098 = stdlib.cast(false, true, v11085);
        const v11099 = stdlib.mul256(v11098, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11100 = stdlib.add256(v11099, v11097);
        const v11101 = stdlib.cast(false, true, v11076);
        const v11102 = stdlib.mul256(v11097, v11101);
        const v11103 = stdlib.div256(v11102, v11100);
        const v11104 = stdlib.cast(true, false, v11103);
        const v11109 = stdlib.sub(v11093, v11104);
        const v11113 = stdlib.mul(v11054, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v11114 = stdlib.div(v11113, v11061);
        const v11120 = stdlib.muldiv(v11109, v11114, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v11125 = stdlib.muldiv(v11073, v11054, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v11133 = stdlib.muldiv(v11125, v11076, v11085);
        const v11134 = stdlib.gt(v11133, v11120);
        const v11135 = [v11125, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11136 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11120];
        const v11137 = v11134 ? v11135 : v11136;
        const v11139 = v11137[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
        const v11140 = v11137[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
        const v11142 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v11104
          };
        const v11144 = {
          A: v11139,
          B: v11140
          };
        const v11145 = [v11142, v11144];
        v11072 = v11145;
        }
      else {
        const v11146 = stdlib.eq(v11073, stdlib.checkedBigNumberify('./index.rsh:140:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v11146, {
          at: './index.rsh:140:10:application',
          fs: ['at 150:31:application call to "computeSwap" (defined at: ./index.rsh:132:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v11155 = stdlib.add(v11076, v11074);
        const v11163 = stdlib.muldiv(v11074, v11075, v11155);
        const v11164 = stdlib.cast(false, true, v11074);
        const v11165 = stdlib.cast(false, true, v11061);
        const v11166 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v11165);
        const v11167 = stdlib.mul256(v11164, v11166);
        const v11168 = stdlib.cast(false, true, v11155);
        const v11169 = stdlib.mul256(v11168, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11170 = stdlib.add256(v11169, v11167);
        const v11171 = stdlib.cast(false, true, v11075);
        const v11172 = stdlib.mul256(v11167, v11171);
        const v11173 = stdlib.div256(v11172, v11170);
        const v11174 = stdlib.cast(true, false, v11173);
        const v11179 = stdlib.sub(v11163, v11174);
        const v11183 = stdlib.mul(v11054, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v11184 = stdlib.div(v11183, v11061);
        const v11190 = stdlib.muldiv(v11179, v11184, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v11195 = stdlib.muldiv(v11074, v11054, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v11203 = stdlib.muldiv(v11195, v11075, v11155);
        const v11204 = stdlib.gt(v11203, v11190);
        const v11205 = [v11195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11206 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11190];
        const v11207 = v11204 ? v11205 : v11206;
        const v11209 = v11207[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
        const v11210 = v11207[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
        const v11212 = {
          A: v11174,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v11214 = {
          A: v11210,
          B: v11209
          };
        const v11215 = [v11212, v11214];
        v11072 = v11215;
        }
      const v11216 = v11072[stdlib.checkedBigNumberify('150:11:array', stdlib.UInt_max, '0')];
      const v11217 = v11072[stdlib.checkedBigNumberify('150:11:array', stdlib.UInt_max, '1')];
      const v11218 = v11216.A;
      const v11219 = v11216.B;
      const v11220 = v11217.A;
      const v11221 = v11217.B;
      const v11222 = {
        A: v11218,
        B: v11219
        };
      const v11223 = {
        A: v11220,
        B: v11221
        };
      const v11224 = [v11222, v11223];
      
      return v11224;})
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
            const [v14342, v14343, v14378, v14413, v14414, v14415, v14416] = svs;
            return (await ((async () => {
              
              const v19207 = v14413.A;
              const v19208 = v14413.B;
              const v19209 = v14414.A;
              const v19210 = v14414.B;
              const v19211 = v14416.protoFee;
              const v19212 = v14416.lpFee;
              const v19213 = v14416.totFee;
              const v19214 = v14416.protoAddr;
              const v19215 = v14416.locked;
              const v19216 = v14415.A;
              const v19217 = v14415.B;
              const v19218 = {
                A: v19207,
                B: v19208
                };
              const v19219 = {
                A: v19209,
                B: v19210
                };
              const v19220 = {
                locked: v19215,
                lpFee: v19212,
                protoAddr: v19214,
                protoFee: v19211,
                totFee: v19213
                };
              const v19221 = {
                A: v19216,
                B: v19217
                };
              const v19222 = ['Some', v14342];
              const v19223 = {
                liquidityToken: v14378,
                lptBals: v19218,
                poolBals: v19219,
                protoBals: v19221,
                protoInfo: v19220,
                tokA: v19222,
                tokB: v14343
                };
              
              return v19223;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420] = svs;
            return (await ((async () => {
              
              const v14489 = v14413.A;
              const v14490 = v14413.B;
              const v14491 = v14414.A;
              const v14492 = v14414.B;
              const v14493 = v14416.protoFee;
              const v14494 = v14416.lpFee;
              const v14495 = v14416.totFee;
              const v14496 = v14416.protoAddr;
              const v14497 = v14416.locked;
              const v14498 = v14415.A;
              const v14499 = v14415.B;
              const v14500 = {
                A: v14489,
                B: v14490
                };
              const v14501 = {
                A: v14491,
                B: v14492
                };
              const v14502 = {
                locked: v14497,
                lpFee: v14494,
                protoAddr: v14496,
                protoFee: v14493,
                totFee: v14495
                };
              const v14503 = {
                A: v14498,
                B: v14499
                };
              const v14504 = ['Some', v14342];
              const v14505 = {
                liquidityToken: v14378,
                lptBals: v14500,
                poolBals: v14501,
                protoBals: v14503,
                protoInfo: v14502,
                tokA: v14504,
                tokB: v14343
                };
              
              return v14505;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        }
      },
    views: {
      2: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]
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
    Harvester_harvest0_11459: ctc8,
    Provider_deposit0_11459: ctc10,
    Provider_withdraw0_11459: ctc11,
    Trader_swapAForB0_11459: ctc12,
    Trader_swapBForA0_11459: ctc12
    });
  const ctc14 = stdlib.T_Tuple([]);
  
  
  const v14330 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v14331 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v14332 = stdlib.protect(ctc2, interact.protoAddr, 'for Admin\'s interact field protoAddr');
  const v14333 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v14334 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v14338 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v14338, {
    at: './index.rsh:217:10:application',
    fs: ['at ./index.rsh:226:15:application call to "checkInput" (defined at: ./index.rsh:216:37:function exp)', 'at ./index.rsh:220:13:application call to [unknown function] (defined at: ./index.rsh:220:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v14339 = stdlib.tokenEq(v14333, v14334);
  const v14340 = v14339 ? false : true;
  stdlib.assert(v14340, {
    at: './index.rsh:218:10:application',
    fs: ['at ./index.rsh:226:15:application call to "checkInput" (defined at: ./index.rsh:216:37:function exp)', 'at ./index.rsh:220:13:application call to [unknown function] (defined at: ./index.rsh:220:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v14333, v14334, v14330, v14331, v14332],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:228:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:228:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v14342, v14343, v14344, v14345, v14346], secs: v14348, time: v14347, didSend: v11251, from: v14341 } = txn1;
      
      const v14349 = stdlib.tokenEq(v14342, v14343);
      const v14350 = v14349 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v14342
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v14343
        });
      ;
      const v14366 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      ;
      const v14374 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14375 = '                                                                                                ';
      const v14376 = '                                ';
      const v14377 = stdlib.simTokenNew(sim_r, v14344, v14345, v14375, v14376, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v14378 = await txn1.getOutput('internal', 'v14377', ctc3, v14377);
      const v14379 = [v14342, v14343];
      const v14380 = await stdlib.Array_asyncReduce([v14379], false, async([v14382], v14381, v14383) => {
        const v14384 = stdlib.tokenEq(v14378, v14382);
        const v14386 = v14381 ? v14381 : v14384;
        
        return v14386;})
      const v14387 = v14380 ? false : true;
      ;
      
      const v14409 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14411 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v14346,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v14412 = false;
      const v14413 = v14374;
      const v14414 = v14409;
      const v14415 = v14409;
      const v14416 = v14411;
      const v14417 = v14347;
      const v14420 = stdlib.checkedBigNumberify('./index.rsh:214:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v14488 = v14412 ? false : true;
        
        return v14488;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v14342, v14343, v14344, v14345, v14346], secs: v14348, time: v14347, didSend: v11251, from: v14341 } = txn1;
  const v14349 = stdlib.tokenEq(v14342, v14343);
  const v14350 = v14349 ? false : true;
  stdlib.assert(v14350, {
    at: './index.rsh:228:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  const v14366 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v14366, {
    at: './index.rsh:217:10:application',
    fs: ['at ./index.rsh:229:13:application call to "checkInput" (defined at: ./index.rsh:216:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v14374 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v14375 = '                                                                                                ';
  const v14376 = '                                ';
  const v14377 = undefined /* TokenNew */;
  const v14378 = await txn1.getOutput('internal', 'v14377', ctc3, v14377);
  const v14379 = [v14342, v14343];
  const v14380 = await stdlib.Array_asyncReduce([v14379], false, async([v14382], v14381, v14383) => {
    const v14384 = stdlib.tokenEq(v14378, v14382);
    const v14386 = v14381 ? v14381 : v14384;
    
    return v14386;})
  const v14387 = v14380 ? false : true;
  stdlib.assert(v14387, {
    at: './index.rsh:239:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v14378), {
    at: './index.rsh:247:36:application',
    fs: ['at ./index.rsh:247:36:application call to [unknown function] (defined at: ./index.rsh:247:36:function exp)', 'at ./index.rsh:247:36:application call to "liftedInteract" (defined at: ./index.rsh:247:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v14409 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v14411 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v14346,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v14412 = false;
  let v14413 = v14374;
  let v14414 = v14409;
  let v14415 = v14409;
  let v14416 = v14411;
  let v14417 = v14347;
  let v14420 = stdlib.checkedBigNumberify('./index.rsh:214:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v14488 = v14412 ? false : true;
    
    return v14488;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn2;
    switch (v15119[0]) {
      case 'Harvester_harvest0_11459': {
        const v15122 = v15119[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        ;
        const v15291 = v15122[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '0')];
        const v15292 = v15122[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
        const v15293 = v15292.protoAddr;
        const v15294 = v15292.protoFee;
        const v15295 = v15292.lpFee;
        const v15296 = v15292.locked;
        const v15297 = v14416.protoAddr;
        const v15298 = stdlib.addressEq(v15118, v15297);
        stdlib.assert(v15298, {
          at: './index.rsh:277:14:application',
          fs: ['at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: 'Thou art not the harvester',
          who: 'Admin'
          });
        const v15300 = stdlib.lt(v15294, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v15300, {
          at: './index.rsh:79:8:application',
          fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v15301 = stdlib.lt(v15295, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v15301, {
          at: './index.rsh:80:8:application',
          fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v15305 = stdlib.add(v15294, v15295);
        const v15314 = stdlib.add(v15295, v15294);
        const v15315 = stdlib.eq(v15305, v15314);
        const v15317 = stdlib.lt(v15305, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v15318 = v15315 ? v15317 : false;
        const v15319 = stdlib.gt(v15305, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v15320 = v15318 ? v15319 : false;
        stdlib.assert(v15320, {
          at: './index.rsh:84:8:application',
          fs: ['at ./index.rsh:280:16:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v15322 = (stdlib.le(await ctc.getBalance(), v14420) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14420));
        const v15323 = stdlib.add(v15322, v14420);
        const v15325 = v14413.B;
        const v15328 = stdlib.eq(v15325, stdlib.checkedBigNumberify('./index.rsh:284:45:decimal', stdlib.UInt_max, '0'));
        const v15329 = v15296 ? v15328 : false;
        const v15330 = v14414.A;
        const v15331 = v14414.B;
        const v15332 = stdlib.eq(v15330, stdlib.checkedBigNumberify('./index.rsh:263:37:decimal', stdlib.UInt_max, '0'));
        const v15333 = stdlib.eq(v15331, stdlib.checkedBigNumberify('./index.rsh:263:47:decimal', stdlib.UInt_max, '0'));
        const v15334 = v15332 ? v15333 : false;
        const v15335 = v15329 ? v15334 : false;
        const v15336 = v14415.A;
        const v15337 = v14415.B;
        const v15367 = stdlib.sub(v15323, v15322);
        ;
        ;
        ;
        const v15394 = {
          A: v15336,
          B: v15337
          };
        const v15395 = [v15394, v15322];
        await txn2.getOutput('Harvester_harvest', 'v15395', ctc10, v15395);
        const v15401 = {
          locked: v15296,
          lpFee: v15295,
          protoAddr: v15293,
          protoFee: v15294,
          totFee: v15305
          };
        null;
        const v15402 = {
          locked: v15296,
          lpFee: v15295,
          protoAddr: v15293,
          protoFee: v15294,
          totFee: v15305
          };
        const cv14412 = v15335;
        const cv14413 = v14413;
        const cv14414 = v14414;
        const cv14415 = v14409;
        const cv14416 = v15402;
        const cv14417 = v15120;
        const cv14420 = v15367;
        
        v14412 = cv14412;
        v14413 = cv14413;
        v14414 = cv14414;
        v14415 = cv14415;
        v14416 = cv14416;
        v14417 = cv14417;
        v14420 = cv14420;
        
        continue;
        break;
        }
      case 'Provider_deposit0_11459': {
        const v15939 = v15119[1];
        undefined /* setApiDetails */;
        const v15963 = v15939[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
        const v15965 = v15963.A;
        const v15966 = v15963.B;
        ;
        ;
        ;
        ;
        const v16229 = v15939[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
        const v16230 = v14416.locked;
        const v16231 = v16230 ? false : true;
        stdlib.assert(v16231, {
          at: './index.rsh:305:14:application',
          fs: ['at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v16232;
        const v16235 = v14413.A;
        const v16236 = v14413.B;
        const v16238 = stdlib.eq(v16236, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
        if (v16238) {
          const v16239 = stdlib.cast(false, true, v15965);
          const v16240 = stdlib.cast(false, true, v15966);
          const v16241 = stdlib.mul256(v16239, v16240);
          const v16242 = stdlib.cast(false, true, v16229);
          const v16244 = stdlib.mul256(v16242, v16242);
          const v16245 = stdlib.eq256(v16241, v16244);
          stdlib.assert(v16245, {
            at: './index.rsh:161:10:application',
            fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
            msg: null,
            who: 'Admin'
            });
          v16232 = v16229;
          }
        else {
          const v16246 = v14414.A;
          const v16247 = v14414.B;
          const v16248 = stdlib.eq(v16229, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v16248, {
            at: './index.rsh:165:10:application',
            fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
            msg: null,
            who: 'Admin'
            });
          const v16252 = stdlib.muldiv(v15965, v16246, v16236);
          const v16256 = stdlib.muldiv(v15966, v16247, v16236);
          const v16257 = stdlib.lt(v16252, v16256);
          const v16258 = v16257 ? v16252 : v16256;
          v16232 = v16258;
          }
        const v16260 = v14414.A;
        const v16264 = stdlib.add(v15965, v16260);
        const v16266 = v14414.B;
        const v16270 = stdlib.add(v15966, v16266);
        const v16271 = {
          A: v16264,
          B: v16270
          };
        const v16278 = stdlib.sub(v16235, v16232);
        const v16282 = stdlib.add(v16236, v16232);
        const v16283 = {
          A: v16278,
          B: v16282
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v16232', ctc5, v16232);
        const v16326 = {
          A: v15965,
          B: v15966
          };
        const v16327 = {
          A: v16264,
          B: v16270
          };
        const v16328 = {
          A: v16278,
          B: v16282
          };
        null;
        const cv14412 = false;
        const cv14413 = v16283;
        const cv14414 = v16271;
        const cv14415 = v14415;
        const cv14416 = v14416;
        const cv14417 = v15120;
        const cv14420 = v14420;
        
        v14412 = cv14412;
        v14413 = cv14413;
        v14414 = cv14414;
        v14415 = cv14415;
        v14416 = cv14416;
        v14417 = cv14417;
        v14420 = cv14420;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_11459': {
        const v16756 = v15119[1];
        undefined /* setApiDetails */;
        const v16805 = v16756[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v17156 = v14413.A;
        const v17157 = v14413.B;
        const v17160 = v14414.A;
        const v17161 = v14414.B;
        const v17165 = stdlib.muldiv(v16805, v17160, v17157);
        const v17169 = stdlib.muldiv(v16805, v17161, v17157);
        const v17178 = stdlib.add(v17156, v16805);
        const v17181 = stdlib.sub(v17157, v16805);
        const v17182 = {
          A: v17178,
          B: v17181
          };
        const v17187 = stdlib.sub(v17160, v17165);
        const v17191 = stdlib.sub(v17161, v17169);
        const v17192 = {
          A: v17187,
          B: v17191
          };
        ;
        ;
        const v17243 = {
          A: v17165,
          B: v17169
          };
        await txn2.getOutput('Provider_withdraw', 'v17243', ctc9, v17243);
        const v17250 = {
          A: v17187,
          B: v17191
          };
        const v17251 = {
          A: v17178,
          B: v17181
          };
        null;
        const cv14412 = false;
        const cv14413 = v17182;
        const cv14414 = v17192;
        const cv14415 = v14415;
        const cv14416 = v14416;
        const cv14417 = v15120;
        const cv14420 = v14420;
        
        v14412 = cv14412;
        v14413 = cv14413;
        v14414 = cv14414;
        v14415 = cv14415;
        v14416 = cv14416;
        v14417 = cv14417;
        v14420 = cv14420;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_11459': {
        const v17573 = v15119[1];
        undefined /* setApiDetails */;
        const v17640 = v17573[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v18079 = v17573[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
        const v18082 = v14416.locked;
        const v18083 = v18082 ? false : true;
        stdlib.assert(v18083, {
          at: './index.rsh:317:14:application',
          fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v18084 = v14414.A;
        const v18085 = v14414.B;
        const v18086 = v14416.protoFee;
        const v18087 = v14416.totFee;
        const v18091 = stdlib.add(v18084, v17640);
        const v18095 = stdlib.muldiv(v17640, v18085, v18091);
        const v18096 = stdlib.cast(false, true, v17640);
        const v18097 = stdlib.cast(false, true, v18087);
        const v18098 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18097);
        const v18099 = stdlib.mul256(v18096, v18098);
        const v18100 = stdlib.cast(false, true, v18091);
        const v18101 = stdlib.mul256(v18100, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v18102 = stdlib.add256(v18101, v18099);
        const v18103 = stdlib.cast(false, true, v18085);
        const v18104 = stdlib.mul256(v18099, v18103);
        const v18105 = stdlib.div256(v18104, v18102);
        const v18106 = stdlib.cast(true, false, v18105);
        const v18109 = stdlib.sub(v18095, v18106);
        const v18112 = stdlib.mul(v18086, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v18113 = stdlib.div(v18112, v18087);
        const v18116 = stdlib.muldiv(v18109, v18113, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v18118 = stdlib.muldiv(v17640, v18086, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v18122 = stdlib.muldiv(v18118, v18085, v18091);
        const v18123 = stdlib.gt(v18122, v18116);
        const v18124 = [v18118, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v18125 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18116];
        const v18126 = v18123 ? v18124 : v18125;
        const v18128 = v18126[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
        const v18129 = v18126[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
        const v18148 = stdlib.sub(v18085, v18106);
        const v18152 = stdlib.sub(v18091, v18128);
        const v18155 = stdlib.sub(v18148, v18129);
        const v18156 = {
          A: v18152,
          B: v18155
          };
        const v18157 = v14415.A;
        const v18161 = stdlib.add(v18157, v18128);
        const v18162 = v14415.B;
        const v18166 = stdlib.add(v18162, v18129);
        const v18167 = {
          A: v18161,
          B: v18166
          };
        const v18168 = stdlib.le(v18079, v18106);
        stdlib.assert(v18168, {
          at: './index.rsh:338:14:application',
          fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v18171 = stdlib.cast(false, true, v18084);
        const v18173 = stdlib.mul256(v18171, v18103);
        const v18174 = stdlib.cast(false, true, v18152);
        const v18175 = stdlib.cast(false, true, v18155);
        const v18176 = stdlib.mul256(v18174, v18175);
        const v18177 = stdlib.ge256(v18176, v18173);
        stdlib.assert(v18177, {
          at: './index.rsh:348:14:application',
          fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        const v18216 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v18106
          };
        await txn2.getOutput('Trader_swapAForB', 'v18216', ctc9, v18216);
        const v18222 = {
          A: v17640,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v18224 = {
          A: v18152,
          B: v18155
          };
        null;
        const cv14412 = false;
        const cv14413 = v14413;
        const cv14414 = v18156;
        const cv14415 = v18167;
        const cv14416 = v14416;
        const cv14417 = v15120;
        const cv14420 = v14420;
        
        v14412 = cv14412;
        v14413 = cv14413;
        v14414 = cv14414;
        v14415 = cv14415;
        v14416 = cv14416;
        v14417 = cv14417;
        v14420 = cv14420;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_11459': {
        const v18390 = v15119[1];
        undefined /* setApiDetails */;
        const v18476 = v18390[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        ;
        const v19052 = v18390[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
        const v19055 = v14416.locked;
        const v19056 = v19055 ? false : true;
        stdlib.assert(v19056, {
          at: './index.rsh:317:14:application',
          fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v19057 = v14414.A;
        const v19058 = v14414.B;
        const v19059 = v14416.protoFee;
        const v19060 = v14416.totFee;
        const v19064 = stdlib.add(v19058, v18476);
        const v19068 = stdlib.muldiv(v18476, v19057, v19064);
        const v19069 = stdlib.cast(false, true, v18476);
        const v19070 = stdlib.cast(false, true, v19060);
        const v19071 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19070);
        const v19072 = stdlib.mul256(v19069, v19071);
        const v19073 = stdlib.cast(false, true, v19064);
        const v19074 = stdlib.mul256(v19073, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v19075 = stdlib.add256(v19074, v19072);
        const v19076 = stdlib.cast(false, true, v19057);
        const v19077 = stdlib.mul256(v19072, v19076);
        const v19078 = stdlib.div256(v19077, v19075);
        const v19079 = stdlib.cast(true, false, v19078);
        const v19082 = stdlib.sub(v19068, v19079);
        const v19085 = stdlib.mul(v19059, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
        const v19086 = stdlib.div(v19085, v19060);
        const v19089 = stdlib.muldiv(v19082, v19086, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
        const v19091 = stdlib.muldiv(v18476, v19059, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
        const v19095 = stdlib.muldiv(v19091, v19057, v19064);
        const v19096 = stdlib.gt(v19095, v19089);
        const v19097 = [v19091, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v19098 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19089];
        const v19099 = v19096 ? v19097 : v19098;
        const v19101 = v19099[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
        const v19102 = v19099[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
        const v19119 = stdlib.sub(v19057, v19079);
        const v19125 = stdlib.sub(v19119, v19102);
        const v19128 = stdlib.sub(v19064, v19101);
        const v19129 = {
          A: v19125,
          B: v19128
          };
        const v19130 = v14415.A;
        const v19134 = stdlib.add(v19130, v19102);
        const v19135 = v14415.B;
        const v19139 = stdlib.add(v19135, v19101);
        const v19140 = {
          A: v19134,
          B: v19139
          };
        const v19141 = stdlib.le(v19052, v19079);
        stdlib.assert(v19141, {
          at: './index.rsh:338:14:application',
          fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v19146 = stdlib.cast(false, true, v19058);
        const v19147 = stdlib.mul256(v19076, v19146);
        const v19148 = stdlib.cast(false, true, v19125);
        const v19149 = stdlib.cast(false, true, v19128);
        const v19150 = stdlib.mul256(v19148, v19149);
        const v19151 = stdlib.ge256(v19150, v19147);
        stdlib.assert(v19151, {
          at: './index.rsh:348:14:application',
          fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        const v19190 = {
          A: v19079,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v19190', ctc9, v19190);
        const v19196 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v18476
          };
        const v19198 = {
          A: v19125,
          B: v19128
          };
        null;
        const cv14412 = false;
        const cv14413 = v14413;
        const cv14414 = v19129;
        const cv14415 = v19140;
        const cv14416 = v14416;
        const cv14417 = v15120;
        const cv14420 = v14420;
        
        v14412 = cv14412;
        v14413 = cv14413;
        v14414 = cv14414;
        v14415 = cv14415;
        v14416 = cv14416;
        v14417 = cv14417;
        v14420 = cv14420;
        
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
  const {data: [v19234], secs: v19236, time: v19235, didSend: v13840, from: v19233 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v19237 = null;
  await txn2.getOutput('Harvester_delete', 'v19237', ctc4, v19237);
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
  
  
  const [v14342, v14343, v14378, v14413, v14414, v14415, v14416] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc5]);
  const v19232 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:402:3:application',
    fs: ['at ./index.rsh:402:3:application call to [unknown function] (defined at: ./index.rsh:402:3:function exp)'],
    msg: 'in',
    who: 'Harvester_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v14342, v14343, v14378, v14413, v14414, v14415, v14416, v19232],
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
      
      
      const {data: [v19234], secs: v19236, time: v19235, didSend: v13840, from: v19233 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Harvester_delete"
        });
      ;
      const v19237 = null;
      const v19238 = await txn1.getOutput('Harvester_delete', 'v19237', ctc7, v19237);
      
      stdlib.simTokenBurn(sim_r, v14378, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v14378);
      sim_r.txns.push({
        kind: 'halt',
        tok: v14343
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v14342
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
    tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v19234], secs: v19236, time: v19235, didSend: v13840, from: v19233 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v19237 = null;
  const v19238 = await txn1.getOutput('Harvester_delete', 'v19237', ctc7, v19237);
  stdlib.protect(ctc7, await interact.out(v19234, v19238), {
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
    Harvester_harvest0_11459: ctc7,
    Provider_deposit0_11459: ctc9,
    Provider_withdraw0_11459: ctc10,
    Trader_swapAForB0_11459: ctc11,
    Trader_swapBForA0_11459: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v14512 = ctc.selfAddress();
  const v14514 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_11459" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Harvester_harvest'
    });
  const v14516 = v14514[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
  const v14519 = v14516.protoFee;
  const v14520 = v14516.lpFee;
  const v14522 = v14416.protoAddr;
  const v14523 = stdlib.addressEq(v14512, v14522);
  stdlib.assert(v14523, {
    at: './index.rsh:277:14:application',
    fs: ['at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_11459" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'Thou art not the harvester',
    who: 'Harvester_harvest'
    });
  const v14525 = stdlib.lt(v14519, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v14525, {
    at: './index.rsh:79:8:application',
    fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_11459" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v14526 = stdlib.lt(v14520, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v14526, {
    at: './index.rsh:80:8:application',
    fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_11459" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v14530 = stdlib.add(v14519, v14520);
  const v14539 = stdlib.add(v14520, v14519);
  const v14540 = stdlib.eq(v14530, v14539);
  const v14542 = stdlib.lt(v14530, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v14543 = v14540 ? v14542 : false;
  const v14544 = stdlib.gt(v14530, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v14545 = v14543 ? v14544 : false;
  stdlib.assert(v14545, {
    at: './index.rsh:84:8:application',
    fs: ['at ./index.rsh:280:16:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:375:41:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:375:17:application call to [unknown function] (defined at: ./index.rsh:375:17:function exp)', 'at ./index.rsh:250:19:application call to "runHarvester_harvest0_11459" (defined at: ./index.rsh:374:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v14420) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14420));
  const v14563 = ['Harvester_harvest0_11459', v14514];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420, v14563],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:376:25:decimal', stdlib.UInt_max, '0'), v14378], [stdlib.checkedBigNumberify('./index.rsh:376:28:decimal', stdlib.UInt_max, '0'), v14342], [stdlib.checkedBigNumberify('./index.rsh:376:31:decimal', stdlib.UInt_max, '0'), v14343]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
      
      switch (v15119[0]) {
        case 'Harvester_harvest0_11459': {
          const v15122 = v15119[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Harvester_harvest"
            });
          ;
          ;
          ;
          ;
          const v15291 = v15122[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '0')];
          const v15292 = v15122[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
          const v15293 = v15292.protoAddr;
          const v15294 = v15292.protoFee;
          const v15295 = v15292.lpFee;
          const v15296 = v15292.locked;
          const v15297 = v14416.protoAddr;
          const v15298 = stdlib.addressEq(v15118, v15297);
          ;
          const v15300 = stdlib.lt(v15294, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
          ;
          const v15301 = stdlib.lt(v15295, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
          ;
          const v15305 = stdlib.add(v15294, v15295);
          const v15314 = stdlib.add(v15295, v15294);
          const v15315 = stdlib.eq(v15305, v15314);
          const v15317 = stdlib.lt(v15305, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v15318 = v15315 ? v15317 : false;
          const v15319 = stdlib.gt(v15305, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v15320 = v15318 ? v15319 : false;
          ;
          const v15322 = (stdlib.le(await ctc.getBalance(), v14420) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14420));
          const v15323 = stdlib.add(v15322, v14420);
          const v15325 = v14413.B;
          const v15328 = stdlib.eq(v15325, stdlib.checkedBigNumberify('./index.rsh:284:45:decimal', stdlib.UInt_max, '0'));
          const v15329 = v15296 ? v15328 : false;
          const v15330 = v14414.A;
          const v15331 = v14414.B;
          const v15332 = stdlib.eq(v15330, stdlib.checkedBigNumberify('./index.rsh:263:37:decimal', stdlib.UInt_max, '0'));
          const v15333 = stdlib.eq(v15331, stdlib.checkedBigNumberify('./index.rsh:263:47:decimal', stdlib.UInt_max, '0'));
          const v15334 = v15332 ? v15333 : false;
          const v15335 = v15329 ? v15334 : false;
          const v15336 = v14415.A;
          const v15337 = v14415.B;
          const v15367 = stdlib.sub(v15323, v15322);
          sim_r.txns.push({
            amt: v15322,
            kind: 'from',
            to: v15291,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v15336,
            kind: 'from',
            to: v15291,
            tok: v14342
            });
          sim_r.txns.push({
            amt: v15337,
            kind: 'from',
            to: v15291,
            tok: v14343
            });
          const v15394 = {
            A: v15336,
            B: v15337
            };
          const v15395 = [v15394, v15322];
          const v15396 = await txn1.getOutput('Harvester_harvest', 'v15395', ctc9, v15395);
          
          const v15401 = {
            locked: v15296,
            lpFee: v15295,
            protoAddr: v15293,
            protoFee: v15294,
            totFee: v15305
            };
          null;
          const v15402 = {
            locked: v15296,
            lpFee: v15295,
            protoAddr: v15293,
            protoFee: v15294,
            totFee: v15305
            };
          const v23097 = v14413;
          const v23098 = v14414;
          const v23099 = v14409;
          const v23100 = v15402;
          const v23102 = v15367;
          if (v15335) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_11459': {
          const v15939 = v15119[1];
          
          break;
          }
        case 'Provider_withdraw0_11459': {
          const v16756 = v15119[1];
          
          break;
          }
        case 'Trader_swapAForB0_11459': {
          const v17573 = v15119[1];
          
          break;
          }
        case 'Trader_swapBForA0_11459': {
          const v18390 = v15119[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
  switch (v15119[0]) {
    case 'Harvester_harvest0_11459': {
      const v15122 = v15119[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      ;
      const v15291 = v15122[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '0')];
      const v15292 = v15122[stdlib.checkedBigNumberify('./index.rsh:374:9:spread', stdlib.UInt_max, '1')];
      const v15293 = v15292.protoAddr;
      const v15294 = v15292.protoFee;
      const v15295 = v15292.lpFee;
      const v15296 = v15292.locked;
      const v15297 = v14416.protoAddr;
      const v15298 = stdlib.addressEq(v15118, v15297);
      stdlib.assert(v15298, {
        at: './index.rsh:277:14:application',
        fs: ['at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: 'Thou art not the harvester',
        who: 'Harvester_harvest'
        });
      const v15300 = stdlib.lt(v15294, stdlib.checkedBigNumberify('./index.rsh:79:20:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v15300, {
        at: './index.rsh:79:8:application',
        fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v15301 = stdlib.lt(v15295, stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v15301, {
        at: './index.rsh:80:8:application',
        fs: ['at ./index.rsh:88:12:application call to "chkFeesIn" (defined at: ./index.rsh:78:41:function exp)', 'at ./index.rsh:278:39:application call to "computeFeeInfo" (defined at: ./index.rsh:86:28:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v15305 = stdlib.add(v15294, v15295);
      const v15314 = stdlib.add(v15295, v15294);
      const v15315 = stdlib.eq(v15305, v15314);
      const v15317 = stdlib.lt(v15305, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v15318 = v15315 ? v15317 : false;
      const v15319 = stdlib.gt(v15305, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v15320 = v15318 ? v15319 : false;
      stdlib.assert(v15320, {
        at: './index.rsh:84:8:application',
        fs: ['at ./index.rsh:280:16:application call to "chkFees" (defined at: ./index.rsh:82:21:function exp)', 'at ./index.rsh:377:32:application call to "doHarvest" (defined at: ./index.rsh:276:76:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v15322 = (stdlib.le(await ctc.getBalance(), v14420) ? stdlib.checkedBigNumberify('./index.rsh:281:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14420));
      const v15323 = stdlib.add(v15322, v14420);
      const v15325 = v14413.B;
      const v15328 = stdlib.eq(v15325, stdlib.checkedBigNumberify('./index.rsh:284:45:decimal', stdlib.UInt_max, '0'));
      const v15329 = v15296 ? v15328 : false;
      const v15330 = v14414.A;
      const v15331 = v14414.B;
      const v15332 = stdlib.eq(v15330, stdlib.checkedBigNumberify('./index.rsh:263:37:decimal', stdlib.UInt_max, '0'));
      const v15333 = stdlib.eq(v15331, stdlib.checkedBigNumberify('./index.rsh:263:47:decimal', stdlib.UInt_max, '0'));
      const v15334 = v15332 ? v15333 : false;
      const v15335 = v15329 ? v15334 : false;
      const v15336 = v14415.A;
      const v15337 = v14415.B;
      const v15367 = stdlib.sub(v15323, v15322);
      ;
      ;
      ;
      const v15394 = {
        A: v15336,
        B: v15337
        };
      const v15395 = [v15394, v15322];
      const v15396 = await txn1.getOutput('Harvester_harvest', 'v15395', ctc9, v15395);
      if (v13002) {
        stdlib.protect(ctc13, await interact.out(v15122, v15396), {
          at: './index.rsh:374:10:application',
          fs: ['at ./index.rsh:374:10:application call to [unknown function] (defined at: ./index.rsh:374:10:function exp)', 'at ./index.rsh:287:12:application call to "k" (defined at: ./index.rsh:377:20:function exp)', 'at ./index.rsh:377:47:application call to [unknown function] (defined at: ./index.rsh:285:20:function exp)', 'at ./index.rsh:377:20:application call to [unknown function] (defined at: ./index.rsh:377:20:function exp)'],
          msg: 'out',
          who: 'Harvester_harvest'
          });
        }
      else {
        }
      
      const v15401 = {
        locked: v15296,
        lpFee: v15295,
        protoAddr: v15293,
        protoFee: v15294,
        totFee: v15305
        };
      null;
      const v15402 = {
        locked: v15296,
        lpFee: v15295,
        protoAddr: v15293,
        protoFee: v15294,
        totFee: v15305
        };
      const v23097 = v14413;
      const v23098 = v14414;
      const v23099 = v14409;
      const v23100 = v15402;
      const v23102 = v15367;
      if (v15335) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_11459': {
      const v15939 = v15119[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11459': {
      const v16756 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11459': {
      const v17573 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11459': {
      const v18390 = v15119[1];
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
    Harvester_harvest0_11459: ctc9,
    Provider_deposit0_11459: ctc7,
    Provider_withdraw0_11459: ctc10,
    Trader_swapAForB0_11459: ctc11,
    Trader_swapBForA0_11459: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v14613 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_11459" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v14614 = v14613[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
  const v14615 = v14613[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
  const v14617 = v14416.locked;
  const v14618 = v14617 ? false : true;
  stdlib.assert(v14618, {
    at: './index.rsh:305:14:application',
    fs: ['at ./index.rsh:385:41:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_11459" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Provider_deposit'
    });
  const v14620 = v14614.A;
  const v14621 = v14614.B;
  const v14623 = v14413.B;
  const v14625 = stdlib.eq(v14623, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
  if (v14625) {
    const v14626 = stdlib.cast(false, true, v14620);
    const v14627 = stdlib.cast(false, true, v14621);
    const v14628 = stdlib.mul256(v14626, v14627);
    const v14629 = stdlib.cast(false, true, v14615);
    const v14631 = stdlib.mul256(v14629, v14629);
    const v14632 = stdlib.eq256(v14628, v14631);
    stdlib.assert(v14632, {
      at: './index.rsh:161:10:application',
      fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:385:41:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_11459" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
      msg: null,
      who: 'Provider_deposit'
      });
    }
  else {
    const v14635 = stdlib.eq(v14615, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v14635, {
      at: './index.rsh:165:10:application',
      fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:385:41:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:385:17:application call to [unknown function] (defined at: ./index.rsh:385:17:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_deposit0_11459" (defined at: ./index.rsh:384:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
      msg: null,
      who: 'Provider_deposit'
      });
    }
  const v14674 = ['Provider_deposit0_11459', v14613];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420, v14674],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:246:50:decimal', stdlib.UInt_max, '0'), v14378], [v14620, v14342], [v14621, v14343]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
      
      switch (v15119[0]) {
        case 'Harvester_harvest0_11459': {
          const v15122 = v15119[1];
          
          break;
          }
        case 'Provider_deposit0_11459': {
          const v15939 = v15119[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v15963 = v15939[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
          const v15965 = v15963.A;
          const v15966 = v15963.B;
          ;
          ;
          sim_r.txns.push({
            amt: v15965,
            kind: 'to',
            tok: v14342
            });
          sim_r.txns.push({
            amt: v15966,
            kind: 'to',
            tok: v14343
            });
          const v16229 = v15939[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
          const v16230 = v14416.locked;
          const v16231 = v16230 ? false : true;
          ;
          let v16232;
          const v16235 = v14413.A;
          const v16236 = v14413.B;
          const v16238 = stdlib.eq(v16236, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
          if (v16238) {
            const v16239 = stdlib.cast(false, true, v15965);
            const v16240 = stdlib.cast(false, true, v15966);
            const v16241 = stdlib.mul256(v16239, v16240);
            const v16242 = stdlib.cast(false, true, v16229);
            const v16244 = stdlib.mul256(v16242, v16242);
            const v16245 = stdlib.eq256(v16241, v16244);
            ;
            v16232 = v16229;
            }
          else {
            const v16246 = v14414.A;
            const v16247 = v14414.B;
            const v16248 = stdlib.eq(v16229, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
            ;
            const v16252 = stdlib.muldiv(v15965, v16246, v16236);
            const v16256 = stdlib.muldiv(v15966, v16247, v16236);
            const v16257 = stdlib.lt(v16252, v16256);
            const v16258 = v16257 ? v16252 : v16256;
            v16232 = v16258;
            }
          const v16260 = v14414.A;
          const v16264 = stdlib.add(v15965, v16260);
          const v16266 = v14414.B;
          const v16270 = stdlib.add(v15966, v16266);
          const v16271 = {
            A: v16264,
            B: v16270
            };
          const v16278 = stdlib.sub(v16235, v16232);
          const v16282 = stdlib.add(v16236, v16232);
          const v16283 = {
            A: v16278,
            B: v16282
            };
          sim_r.txns.push({
            amt: v16232,
            kind: 'from',
            to: v15118,
            tok: v14378
            });
          const v16319 = await txn1.getOutput('Provider_deposit', 'v16232', ctc1, v16232);
          
          const v16326 = {
            A: v15965,
            B: v15966
            };
          const v16327 = {
            A: v16264,
            B: v16270
            };
          const v16328 = {
            A: v16278,
            B: v16282
            };
          null;
          const v23187 = v16283;
          const v23188 = v16271;
          const v23189 = v14415;
          const v23190 = v14416;
          const v23192 = v14420;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_11459': {
          const v16756 = v15119[1];
          
          break;
          }
        case 'Trader_swapAForB0_11459': {
          const v17573 = v15119[1];
          
          break;
          }
        case 'Trader_swapBForA0_11459': {
          const v18390 = v15119[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
  switch (v15119[0]) {
    case 'Harvester_harvest0_11459': {
      const v15122 = v15119[1];
      return;
      break;
      }
    case 'Provider_deposit0_11459': {
      const v15939 = v15119[1];
      undefined /* setApiDetails */;
      const v15963 = v15939[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '0')];
      const v15965 = v15963.A;
      const v15966 = v15963.B;
      ;
      ;
      ;
      ;
      const v16229 = v15939[stdlib.checkedBigNumberify('./index.rsh:384:9:spread', stdlib.UInt_max, '1')];
      const v16230 = v14416.locked;
      const v16231 = v16230 ? false : true;
      stdlib.assert(v16231, {
        at: './index.rsh:305:14:application',
        fs: ['at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
        msg: null,
        who: 'Provider_deposit'
        });
      let v16232;
      const v16235 = v14413.A;
      const v16236 = v14413.B;
      const v16238 = stdlib.eq(v16236, stdlib.checkedBigNumberify('./index.rsh:158:19:decimal', stdlib.UInt_max, '0'));
      if (v16238) {
        const v16239 = stdlib.cast(false, true, v15965);
        const v16240 = stdlib.cast(false, true, v15966);
        const v16241 = stdlib.mul256(v16239, v16240);
        const v16242 = stdlib.cast(false, true, v16229);
        const v16244 = stdlib.mul256(v16242, v16242);
        const v16245 = stdlib.eq256(v16241, v16244);
        stdlib.assert(v16245, {
          at: './index.rsh:161:10:application',
          fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: null,
          who: 'Provider_deposit'
          });
        v16232 = v16229;
        }
      else {
        const v16246 = v14414.A;
        const v16247 = v14414.B;
        const v16248 = stdlib.eq(v16229, stdlib.checkedBigNumberify('./index.rsh:165:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v16248, {
          at: './index.rsh:165:10:application',
          fs: ['at ./index.rsh:306:31:application call to "computeMint" (defined at: ./index.rsh:155:52:function exp)', 'at ./index.rsh:387:32:application call to "doDeposit" (defined at: ./index.rsh:304:42:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: null,
          who: 'Provider_deposit'
          });
        const v16252 = stdlib.muldiv(v15965, v16246, v16236);
        const v16256 = stdlib.muldiv(v15966, v16247, v16236);
        const v16257 = stdlib.lt(v16252, v16256);
        const v16258 = v16257 ? v16252 : v16256;
        v16232 = v16258;
        }
      const v16260 = v14414.A;
      const v16264 = stdlib.add(v15965, v16260);
      const v16266 = v14414.B;
      const v16270 = stdlib.add(v15966, v16266);
      const v16271 = {
        A: v16264,
        B: v16270
        };
      const v16278 = stdlib.sub(v16235, v16232);
      const v16282 = stdlib.add(v16236, v16232);
      const v16283 = {
        A: v16278,
        B: v16282
        };
      ;
      const v16319 = await txn1.getOutput('Provider_deposit', 'v16232', ctc1, v16232);
      if (v13002) {
        stdlib.protect(ctc13, await interact.out(v15939, v16319), {
          at: './index.rsh:384:10:application',
          fs: ['at ./index.rsh:384:10:application call to [unknown function] (defined at: ./index.rsh:384:10:function exp)', 'at ./index.rsh:311:12:application call to "k" (defined at: ./index.rsh:387:20:function exp)', 'at ./index.rsh:387:47:application call to [unknown function] (defined at: ./index.rsh:309:20:function exp)', 'at ./index.rsh:387:20:application call to [unknown function] (defined at: ./index.rsh:387:20:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v16326 = {
        A: v15965,
        B: v15966
        };
      const v16327 = {
        A: v16264,
        B: v16270
        };
      const v16328 = {
        A: v16278,
        B: v16282
        };
      null;
      const v23187 = v16283;
      const v23188 = v16271;
      const v23189 = v14415;
      const v23190 = v14416;
      const v23192 = v14420;
      return;
      
      break;
      }
    case 'Provider_withdraw0_11459': {
      const v16756 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11459': {
      const v17573 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11459': {
      const v18390 = v15119[1];
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
    Harvester_harvest0_11459: ctc8,
    Provider_deposit0_11459: ctc10,
    Provider_withdraw0_11459: ctc6,
    Trader_swapAForB0_11459: ctc11,
    Trader_swapBForA0_11459: ctc11
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v14567 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:380:11:application call to [unknown function] (defined at: ./index.rsh:380:11:function exp)', 'at ./index.rsh:250:19:application call to "runProvider_withdraw0_11459" (defined at: ./index.rsh:379:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v14568 = v14567[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
  const v14609 = ['Provider_withdraw0_11459', v14567];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420, v14609],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[v14568, v14378], [stdlib.checkedBigNumberify('./index.rsh:381:25:decimal', stdlib.UInt_max, '0'), v14342], [stdlib.checkedBigNumberify('./index.rsh:381:28:decimal', stdlib.UInt_max, '0'), v14343]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
      
      switch (v15119[0]) {
        case 'Harvester_harvest0_11459': {
          const v15122 = v15119[1];
          
          break;
          }
        case 'Provider_deposit0_11459': {
          const v15939 = v15119[1];
          
          break;
          }
        case 'Provider_withdraw0_11459': {
          const v16756 = v15119[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v16805 = v16756[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v16805,
            kind: 'to',
            tok: v14378
            });
          ;
          ;
          const v17156 = v14413.A;
          const v17157 = v14413.B;
          const v17160 = v14414.A;
          const v17161 = v14414.B;
          const v17165 = stdlib.muldiv(v16805, v17160, v17157);
          const v17169 = stdlib.muldiv(v16805, v17161, v17157);
          const v17178 = stdlib.add(v17156, v16805);
          const v17181 = stdlib.sub(v17157, v16805);
          const v17182 = {
            A: v17178,
            B: v17181
            };
          const v17187 = stdlib.sub(v17160, v17165);
          const v17191 = stdlib.sub(v17161, v17169);
          const v17192 = {
            A: v17187,
            B: v17191
            };
          sim_r.txns.push({
            amt: v17165,
            kind: 'from',
            to: v15118,
            tok: v14342
            });
          sim_r.txns.push({
            amt: v17169,
            kind: 'from',
            to: v15118,
            tok: v14343
            });
          const v17243 = {
            A: v17165,
            B: v17169
            };
          const v17244 = await txn1.getOutput('Provider_withdraw', 'v17243', ctc9, v17243);
          
          const v17250 = {
            A: v17187,
            B: v17191
            };
          const v17251 = {
            A: v17178,
            B: v17181
            };
          null;
          const v23277 = v17182;
          const v23278 = v17192;
          const v23279 = v14415;
          const v23280 = v14416;
          const v23282 = v14420;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_11459': {
          const v17573 = v15119[1];
          
          break;
          }
        case 'Trader_swapBForA0_11459': {
          const v18390 = v15119[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
  switch (v15119[0]) {
    case 'Harvester_harvest0_11459': {
      const v15122 = v15119[1];
      return;
      break;
      }
    case 'Provider_deposit0_11459': {
      const v15939 = v15119[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11459': {
      const v16756 = v15119[1];
      undefined /* setApiDetails */;
      const v16805 = v16756[stdlib.checkedBigNumberify('./index.rsh:379:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v17156 = v14413.A;
      const v17157 = v14413.B;
      const v17160 = v14414.A;
      const v17161 = v14414.B;
      const v17165 = stdlib.muldiv(v16805, v17160, v17157);
      const v17169 = stdlib.muldiv(v16805, v17161, v17157);
      const v17178 = stdlib.add(v17156, v16805);
      const v17181 = stdlib.sub(v17157, v16805);
      const v17182 = {
        A: v17178,
        B: v17181
        };
      const v17187 = stdlib.sub(v17160, v17165);
      const v17191 = stdlib.sub(v17161, v17169);
      const v17192 = {
        A: v17187,
        B: v17191
        };
      ;
      ;
      const v17243 = {
        A: v17165,
        B: v17169
        };
      const v17244 = await txn1.getOutput('Provider_withdraw', 'v17243', ctc9, v17243);
      if (v13002) {
        stdlib.protect(ctc13, await interact.out(v16756, v17244), {
          at: './index.rsh:379:10:application',
          fs: ['at ./index.rsh:379:10:application call to [unknown function] (defined at: ./index.rsh:379:10:function exp)', 'at ./index.rsh:299:12:application call to "k" (defined at: ./index.rsh:382:14:function exp)', 'at ./index.rsh:382:36:application call to [unknown function] (defined at: ./index.rsh:297:20:function exp)', 'at ./index.rsh:382:14:application call to [unknown function] (defined at: ./index.rsh:382:14:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v17250 = {
        A: v17187,
        B: v17191
        };
      const v17251 = {
        A: v17178,
        B: v17181
        };
      null;
      const v23277 = v17182;
      const v23278 = v17192;
      const v23279 = v14415;
      const v23280 = v14416;
      const v23282 = v14420;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_11459': {
      const v17573 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11459': {
      const v18390 = v15119[1];
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
    Harvester_harvest0_11459: ctc8,
    Provider_deposit0_11459: ctc10,
    Provider_withdraw0_11459: ctc11,
    Trader_swapAForB0_11459: ctc6,
    Trader_swapBForA0_11459: ctc6
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v14678 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_11459" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v14679 = v14678[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
  const v14680 = v14678[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
  const v14684 = v14416.locked;
  const v14685 = v14684 ? false : true;
  stdlib.assert(v14685, {
    at: './index.rsh:317:14:application',
    fs: ['at ./index.rsh:390:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_11459" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v14686 = v14414.A;
  const v14687 = v14414.B;
  const v14688 = v14416.protoFee;
  const v14689 = v14416.totFee;
  const v14693 = stdlib.add(v14686, v14679);
  const v14697 = stdlib.muldiv(v14679, v14687, v14693);
  const v14698 = stdlib.cast(false, true, v14679);
  const v14699 = stdlib.cast(false, true, v14689);
  const v14700 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14699);
  const v14701 = stdlib.mul256(v14698, v14700);
  const v14702 = stdlib.cast(false, true, v14693);
  const v14703 = stdlib.mul256(v14702, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v14704 = stdlib.add256(v14703, v14701);
  const v14705 = stdlib.cast(false, true, v14687);
  const v14706 = stdlib.mul256(v14701, v14705);
  const v14707 = stdlib.div256(v14706, v14704);
  const v14708 = stdlib.cast(true, false, v14707);
  const v14711 = stdlib.sub(v14697, v14708);
  const v14714 = stdlib.mul(v14688, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
  const v14715 = stdlib.div(v14714, v14689);
  const v14718 = stdlib.muldiv(v14711, v14715, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
  const v14720 = stdlib.muldiv(v14679, v14688, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
  const v14724 = stdlib.muldiv(v14720, v14687, v14693);
  const v14725 = stdlib.gt(v14724, v14718);
  const v14726 = [v14720, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v14727 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14718];
  const v14728 = v14725 ? v14726 : v14727;
  const v14730 = v14728[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
  const v14731 = v14728[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
  const v14750 = stdlib.sub(v14687, v14708);
  const v14754 = stdlib.sub(v14693, v14730);
  const v14757 = stdlib.sub(v14750, v14731);
  const v14770 = stdlib.le(v14680, v14708);
  stdlib.assert(v14770, {
    at: './index.rsh:338:14:application',
    fs: ['at ./index.rsh:390:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_11459" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v14773 = stdlib.cast(false, true, v14686);
  const v14775 = stdlib.mul256(v14773, v14705);
  const v14776 = stdlib.cast(false, true, v14754);
  const v14777 = stdlib.cast(false, true, v14757);
  const v14778 = stdlib.mul256(v14776, v14777);
  const v14779 = stdlib.ge256(v14778, v14775);
  stdlib.assert(v14779, {
    at: './index.rsh:348:14:application',
    fs: ['at ./index.rsh:390:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:390:15:application call to [unknown function] (defined at: ./index.rsh:390:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapAForB0_11459" (defined at: ./index.rsh:389:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v14782 = ['Trader_swapAForB0_11459', v14678];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420, v14782],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:391:25:decimal', stdlib.UInt_max, '0'), v14378], [v14679, v14342], [stdlib.checkedBigNumberify('./index.rsh:391:31:decimal', stdlib.UInt_max, '0'), v14343]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
      
      switch (v15119[0]) {
        case 'Harvester_harvest0_11459': {
          const v15122 = v15119[1];
          
          break;
          }
        case 'Provider_deposit0_11459': {
          const v15939 = v15119[1];
          
          break;
          }
        case 'Provider_withdraw0_11459': {
          const v16756 = v15119[1];
          
          break;
          }
        case 'Trader_swapAForB0_11459': {
          const v17573 = v15119[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v17640 = v17573[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          sim_r.txns.push({
            amt: v17640,
            kind: 'to',
            tok: v14342
            });
          ;
          const v18079 = v17573[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
          const v18082 = v14416.locked;
          const v18083 = v18082 ? false : true;
          ;
          const v18084 = v14414.A;
          const v18085 = v14414.B;
          const v18086 = v14416.protoFee;
          const v18087 = v14416.totFee;
          const v18091 = stdlib.add(v18084, v17640);
          const v18095 = stdlib.muldiv(v17640, v18085, v18091);
          const v18096 = stdlib.cast(false, true, v17640);
          const v18097 = stdlib.cast(false, true, v18087);
          const v18098 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18097);
          const v18099 = stdlib.mul256(v18096, v18098);
          const v18100 = stdlib.cast(false, true, v18091);
          const v18101 = stdlib.mul256(v18100, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v18102 = stdlib.add256(v18101, v18099);
          const v18103 = stdlib.cast(false, true, v18085);
          const v18104 = stdlib.mul256(v18099, v18103);
          const v18105 = stdlib.div256(v18104, v18102);
          const v18106 = stdlib.cast(true, false, v18105);
          const v18109 = stdlib.sub(v18095, v18106);
          const v18112 = stdlib.mul(v18086, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
          const v18113 = stdlib.div(v18112, v18087);
          const v18116 = stdlib.muldiv(v18109, v18113, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
          const v18118 = stdlib.muldiv(v17640, v18086, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
          const v18122 = stdlib.muldiv(v18118, v18085, v18091);
          const v18123 = stdlib.gt(v18122, v18116);
          const v18124 = [v18118, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v18125 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18116];
          const v18126 = v18123 ? v18124 : v18125;
          const v18128 = v18126[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
          const v18129 = v18126[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
          const v18148 = stdlib.sub(v18085, v18106);
          const v18152 = stdlib.sub(v18091, v18128);
          const v18155 = stdlib.sub(v18148, v18129);
          const v18156 = {
            A: v18152,
            B: v18155
            };
          const v18157 = v14415.A;
          const v18161 = stdlib.add(v18157, v18128);
          const v18162 = v14415.B;
          const v18166 = stdlib.add(v18162, v18129);
          const v18167 = {
            A: v18161,
            B: v18166
            };
          const v18168 = stdlib.le(v18079, v18106);
          ;
          const v18171 = stdlib.cast(false, true, v18084);
          const v18173 = stdlib.mul256(v18171, v18103);
          const v18174 = stdlib.cast(false, true, v18152);
          const v18175 = stdlib.cast(false, true, v18155);
          const v18176 = stdlib.mul256(v18174, v18175);
          const v18177 = stdlib.ge256(v18176, v18173);
          ;
          sim_r.txns.push({
            amt: v18106,
            kind: 'from',
            to: v15118,
            tok: v14343
            });
          const v18216 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v18106
            };
          const v18217 = await txn1.getOutput('Trader_swapAForB', 'v18216', ctc9, v18216);
          
          const v18222 = {
            A: v17640,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v18224 = {
            A: v18152,
            B: v18155
            };
          null;
          const v23367 = v14413;
          const v23368 = v18156;
          const v23369 = v18167;
          const v23370 = v14416;
          const v23372 = v14420;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_11459': {
          const v18390 = v15119[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
  switch (v15119[0]) {
    case 'Harvester_harvest0_11459': {
      const v15122 = v15119[1];
      return;
      break;
      }
    case 'Provider_deposit0_11459': {
      const v15939 = v15119[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11459': {
      const v16756 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11459': {
      const v17573 = v15119[1];
      undefined /* setApiDetails */;
      const v17640 = v17573[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v18079 = v17573[stdlib.checkedBigNumberify('./index.rsh:389:9:spread', stdlib.UInt_max, '1')];
      const v18082 = v14416.locked;
      const v18083 = v18082 ? false : true;
      stdlib.assert(v18083, {
        at: './index.rsh:317:14:application',
        fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v18084 = v14414.A;
      const v18085 = v14414.B;
      const v18086 = v14416.protoFee;
      const v18087 = v14416.totFee;
      const v18091 = stdlib.add(v18084, v17640);
      const v18095 = stdlib.muldiv(v17640, v18085, v18091);
      const v18096 = stdlib.cast(false, true, v17640);
      const v18097 = stdlib.cast(false, true, v18087);
      const v18098 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v18097);
      const v18099 = stdlib.mul256(v18096, v18098);
      const v18100 = stdlib.cast(false, true, v18091);
      const v18101 = stdlib.mul256(v18100, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v18102 = stdlib.add256(v18101, v18099);
      const v18103 = stdlib.cast(false, true, v18085);
      const v18104 = stdlib.mul256(v18099, v18103);
      const v18105 = stdlib.div256(v18104, v18102);
      const v18106 = stdlib.cast(true, false, v18105);
      const v18109 = stdlib.sub(v18095, v18106);
      const v18112 = stdlib.mul(v18086, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
      const v18113 = stdlib.div(v18112, v18087);
      const v18116 = stdlib.muldiv(v18109, v18113, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
      const v18118 = stdlib.muldiv(v17640, v18086, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
      const v18122 = stdlib.muldiv(v18118, v18085, v18091);
      const v18123 = stdlib.gt(v18122, v18116);
      const v18124 = [v18118, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v18125 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18116];
      const v18126 = v18123 ? v18124 : v18125;
      const v18128 = v18126[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '0')];
      const v18129 = v18126[stdlib.checkedBigNumberify('./index.rsh:136:19:array', stdlib.UInt_max, '1')];
      const v18148 = stdlib.sub(v18085, v18106);
      const v18152 = stdlib.sub(v18091, v18128);
      const v18155 = stdlib.sub(v18148, v18129);
      const v18156 = {
        A: v18152,
        B: v18155
        };
      const v18157 = v14415.A;
      const v18161 = stdlib.add(v18157, v18128);
      const v18162 = v14415.B;
      const v18166 = stdlib.add(v18162, v18129);
      const v18167 = {
        A: v18161,
        B: v18166
        };
      const v18168 = stdlib.le(v18079, v18106);
      stdlib.assert(v18168, {
        at: './index.rsh:338:14:application',
        fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v18171 = stdlib.cast(false, true, v18084);
      const v18173 = stdlib.mul256(v18171, v18103);
      const v18174 = stdlib.cast(false, true, v18152);
      const v18175 = stdlib.cast(false, true, v18155);
      const v18176 = stdlib.mul256(v18174, v18175);
      const v18177 = stdlib.ge256(v18176, v18173);
      stdlib.assert(v18177, {
        at: './index.rsh:348:14:application',
        fs: ['at ./index.rsh:392:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      ;
      const v18216 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v18106
        };
      const v18217 = await txn1.getOutput('Trader_swapAForB', 'v18216', ctc9, v18216);
      if (v13002) {
        stdlib.protect(ctc13, await interact.out(v17573, v18217), {
          at: './index.rsh:389:10:application',
          fs: ['at ./index.rsh:389:10:application call to [unknown function] (defined at: ./index.rsh:389:10:function exp)', 'at ./index.rsh:351:12:application call to "k" (defined at: ./index.rsh:392:18:function exp)', 'at ./index.rsh:392:54:application call to [unknown function] (defined at: ./index.rsh:349:20:function exp)', 'at ./index.rsh:392:18:application call to [unknown function] (defined at: ./index.rsh:392:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v18222 = {
        A: v17640,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v18224 = {
        A: v18152,
        B: v18155
        };
      null;
      const v23367 = v14413;
      const v23368 = v18156;
      const v23369 = v18167;
      const v23370 = v14416;
      const v23372 = v14420;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_11459': {
      const v18390 = v15119[1];
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
    Harvester_harvest0_11459: ctc8,
    Provider_deposit0_11459: ctc10,
    Provider_withdraw0_11459: ctc11,
    Trader_swapAForB0_11459: ctc6,
    Trader_swapBForA0_11459: ctc6
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1]);
  const v14786 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_11459" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v14787 = v14786[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
  const v14788 = v14786[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
  const v14792 = v14416.locked;
  const v14793 = v14792 ? false : true;
  stdlib.assert(v14793, {
    at: './index.rsh:317:14:application',
    fs: ['at ./index.rsh:395:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_11459" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v14794 = v14414.A;
  const v14795 = v14414.B;
  const v14796 = v14416.protoFee;
  const v14797 = v14416.totFee;
  const v14801 = stdlib.add(v14795, v14787);
  const v14805 = stdlib.muldiv(v14787, v14794, v14801);
  const v14806 = stdlib.cast(false, true, v14787);
  const v14807 = stdlib.cast(false, true, v14797);
  const v14808 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14807);
  const v14809 = stdlib.mul256(v14806, v14808);
  const v14810 = stdlib.cast(false, true, v14801);
  const v14811 = stdlib.mul256(v14810, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v14812 = stdlib.add256(v14811, v14809);
  const v14813 = stdlib.cast(false, true, v14794);
  const v14814 = stdlib.mul256(v14809, v14813);
  const v14815 = stdlib.div256(v14814, v14812);
  const v14816 = stdlib.cast(true, false, v14815);
  const v14819 = stdlib.sub(v14805, v14816);
  const v14822 = stdlib.mul(v14796, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
  const v14823 = stdlib.div(v14822, v14797);
  const v14826 = stdlib.muldiv(v14819, v14823, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
  const v14828 = stdlib.muldiv(v14787, v14796, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
  const v14832 = stdlib.muldiv(v14828, v14794, v14801);
  const v14833 = stdlib.gt(v14832, v14826);
  const v14834 = [v14828, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v14835 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14826];
  const v14836 = v14833 ? v14834 : v14835;
  const v14838 = v14836[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
  const v14839 = v14836[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
  const v14856 = stdlib.sub(v14794, v14816);
  const v14862 = stdlib.sub(v14856, v14839);
  const v14865 = stdlib.sub(v14801, v14838);
  const v14878 = stdlib.le(v14788, v14816);
  stdlib.assert(v14878, {
    at: './index.rsh:338:14:application',
    fs: ['at ./index.rsh:395:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_11459" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v14883 = stdlib.cast(false, true, v14795);
  const v14884 = stdlib.mul256(v14813, v14883);
  const v14885 = stdlib.cast(false, true, v14862);
  const v14886 = stdlib.cast(false, true, v14865);
  const v14887 = stdlib.mul256(v14885, v14886);
  const v14888 = stdlib.ge256(v14887, v14884);
  stdlib.assert(v14888, {
    at: './index.rsh:348:14:application',
    fs: ['at ./index.rsh:395:36:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:395:15:application call to [unknown function] (defined at: ./index.rsh:395:15:function exp)', 'at ./index.rsh:250:19:application call to "runTrader_swapBForA0_11459" (defined at: ./index.rsh:394:9:function exp)', 'at ./index.rsh:250:19:application call to [unknown function] (defined at: ./index.rsh:250:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v14891 = ['Trader_swapBForA0_11459', v14786];
  
  const txn1 = await (ctc.sendrecv({
    args: [v14342, v14343, v14378, v14409, v14413, v14414, v14415, v14416, v14420, v14891],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:396:25:decimal', stdlib.UInt_max, '0'), v14378], [stdlib.checkedBigNumberify('./index.rsh:396:28:decimal', stdlib.UInt_max, '0'), v14342], [v14787, v14343]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
      
      switch (v15119[0]) {
        case 'Harvester_harvest0_11459': {
          const v15122 = v15119[1];
          
          break;
          }
        case 'Provider_deposit0_11459': {
          const v15939 = v15119[1];
          
          break;
          }
        case 'Provider_withdraw0_11459': {
          const v16756 = v15119[1];
          
          break;
          }
        case 'Trader_swapAForB0_11459': {
          const v17573 = v15119[1];
          
          break;
          }
        case 'Trader_swapBForA0_11459': {
          const v18390 = v15119[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v18476 = v18390[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v18476,
            kind: 'to',
            tok: v14343
            });
          const v19052 = v18390[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
          const v19055 = v14416.locked;
          const v19056 = v19055 ? false : true;
          ;
          const v19057 = v14414.A;
          const v19058 = v14414.B;
          const v19059 = v14416.protoFee;
          const v19060 = v14416.totFee;
          const v19064 = stdlib.add(v19058, v18476);
          const v19068 = stdlib.muldiv(v18476, v19057, v19064);
          const v19069 = stdlib.cast(false, true, v18476);
          const v19070 = stdlib.cast(false, true, v19060);
          const v19071 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19070);
          const v19072 = stdlib.mul256(v19069, v19071);
          const v19073 = stdlib.cast(false, true, v19064);
          const v19074 = stdlib.mul256(v19073, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v19075 = stdlib.add256(v19074, v19072);
          const v19076 = stdlib.cast(false, true, v19057);
          const v19077 = stdlib.mul256(v19072, v19076);
          const v19078 = stdlib.div256(v19077, v19075);
          const v19079 = stdlib.cast(true, false, v19078);
          const v19082 = stdlib.sub(v19068, v19079);
          const v19085 = stdlib.mul(v19059, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
          const v19086 = stdlib.div(v19085, v19060);
          const v19089 = stdlib.muldiv(v19082, v19086, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
          const v19091 = stdlib.muldiv(v18476, v19059, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
          const v19095 = stdlib.muldiv(v19091, v19057, v19064);
          const v19096 = stdlib.gt(v19095, v19089);
          const v19097 = [v19091, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v19098 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19089];
          const v19099 = v19096 ? v19097 : v19098;
          const v19101 = v19099[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
          const v19102 = v19099[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
          const v19119 = stdlib.sub(v19057, v19079);
          const v19125 = stdlib.sub(v19119, v19102);
          const v19128 = stdlib.sub(v19064, v19101);
          const v19129 = {
            A: v19125,
            B: v19128
            };
          const v19130 = v14415.A;
          const v19134 = stdlib.add(v19130, v19102);
          const v19135 = v14415.B;
          const v19139 = stdlib.add(v19135, v19101);
          const v19140 = {
            A: v19134,
            B: v19139
            };
          const v19141 = stdlib.le(v19052, v19079);
          ;
          const v19146 = stdlib.cast(false, true, v19058);
          const v19147 = stdlib.mul256(v19076, v19146);
          const v19148 = stdlib.cast(false, true, v19125);
          const v19149 = stdlib.cast(false, true, v19128);
          const v19150 = stdlib.mul256(v19148, v19149);
          const v19151 = stdlib.ge256(v19150, v19147);
          ;
          sim_r.txns.push({
            amt: v19079,
            kind: 'from',
            to: v15118,
            tok: v14342
            });
          const v19190 = {
            A: v19079,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v19191 = await txn1.getOutput('Trader_swapBForA', 'v19190', ctc9, v19190);
          
          const v19196 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v18476
            };
          const v19198 = {
            A: v19125,
            B: v19128
            };
          null;
          const v23457 = v14413;
          const v23458 = v19129;
          const v23459 = v19140;
          const v23460 = v14416;
          const v23462 = v14420;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc5, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v15119], secs: v15121, time: v15120, didSend: v13002, from: v15118 } = txn1;
  switch (v15119[0]) {
    case 'Harvester_harvest0_11459': {
      const v15122 = v15119[1];
      return;
      break;
      }
    case 'Provider_deposit0_11459': {
      const v15939 = v15119[1];
      return;
      break;
      }
    case 'Provider_withdraw0_11459': {
      const v16756 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_11459': {
      const v17573 = v15119[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_11459': {
      const v18390 = v15119[1];
      undefined /* setApiDetails */;
      const v18476 = v18390[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      ;
      const v19052 = v18390[stdlib.checkedBigNumberify('./index.rsh:394:9:spread', stdlib.UInt_max, '1')];
      const v19055 = v14416.locked;
      const v19056 = v19055 ? false : true;
      stdlib.assert(v19056, {
        at: './index.rsh:317:14:application',
        fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v19057 = v14414.A;
      const v19058 = v14414.B;
      const v19059 = v14416.protoFee;
      const v19060 = v14416.totFee;
      const v19064 = stdlib.add(v19058, v18476);
      const v19068 = stdlib.muldiv(v18476, v19057, v19064);
      const v19069 = stdlib.cast(false, true, v18476);
      const v19070 = stdlib.cast(false, true, v19060);
      const v19071 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v19070);
      const v19072 = stdlib.mul256(v19069, v19071);
      const v19073 = stdlib.cast(false, true, v19064);
      const v19074 = stdlib.mul256(v19073, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v19075 = stdlib.add256(v19074, v19072);
      const v19076 = stdlib.cast(false, true, v19057);
      const v19077 = stdlib.mul256(v19072, v19076);
      const v19078 = stdlib.div256(v19077, v19075);
      const v19079 = stdlib.cast(true, false, v19078);
      const v19082 = stdlib.sub(v19068, v19079);
      const v19085 = stdlib.mul(v19059, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, '100'));
      const v19086 = stdlib.div(v19085, v19060);
      const v19089 = stdlib.muldiv(v19082, v19086, stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, '100'));
      const v19091 = stdlib.muldiv(v18476, v19059, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '10000'));
      const v19095 = stdlib.muldiv(v19091, v19057, v19064);
      const v19096 = stdlib.gt(v19095, v19089);
      const v19097 = [v19091, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v19098 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19089];
      const v19099 = v19096 ? v19097 : v19098;
      const v19101 = v19099[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '0')];
      const v19102 = v19099[stdlib.checkedBigNumberify('./index.rsh:141:19:array', stdlib.UInt_max, '1')];
      const v19119 = stdlib.sub(v19057, v19079);
      const v19125 = stdlib.sub(v19119, v19102);
      const v19128 = stdlib.sub(v19064, v19101);
      const v19129 = {
        A: v19125,
        B: v19128
        };
      const v19130 = v14415.A;
      const v19134 = stdlib.add(v19130, v19102);
      const v19135 = v14415.B;
      const v19139 = stdlib.add(v19135, v19101);
      const v19140 = {
        A: v19134,
        B: v19139
        };
      const v19141 = stdlib.le(v19052, v19079);
      stdlib.assert(v19141, {
        at: './index.rsh:338:14:application',
        fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v19146 = stdlib.cast(false, true, v19058);
      const v19147 = stdlib.mul256(v19076, v19146);
      const v19148 = stdlib.cast(false, true, v19125);
      const v19149 = stdlib.cast(false, true, v19128);
      const v19150 = stdlib.mul256(v19148, v19149);
      const v19151 = stdlib.ge256(v19150, v19147);
      stdlib.assert(v19151, {
        at: './index.rsh:348:14:application',
        fs: ['at ./index.rsh:397:27:application call to "doSwap" (defined at: ./index.rsh:316:57:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      ;
      const v19190 = {
        A: v19079,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v19191 = await txn1.getOutput('Trader_swapBForA', 'v19190', ctc9, v19190);
      if (v13002) {
        stdlib.protect(ctc13, await interact.out(v18390, v19191), {
          at: './index.rsh:394:10:application',
          fs: ['at ./index.rsh:394:10:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:351:12:application call to "k" (defined at: ./index.rsh:397:18:function exp)', 'at ./index.rsh:397:55:application call to [unknown function] (defined at: ./index.rsh:349:20:function exp)', 'at ./index.rsh:397:18:application call to [unknown function] (defined at: ./index.rsh:397:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v19196 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v18476
        };
      const v19198 = {
        A: v19125,
        B: v19128
        };
      null;
      const v23457 = v14413;
      const v23458 = v19129;
      const v23459 = v19140;
      const v23460 = v14416;
      const v23462 = v14420;
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
  appApproval: `BiAVAAgYBAFkAhADoI0GkE6Z66OHCoOjz9MKgO7B5AzZlKygCkng8+yqArj3keUHKTH///////////8BJgUBAQEAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEARUVMunIjUAMRhBCzAqZEkiWzUBI1s1AjYaABdJQQG2IjUEIQQ1BkkhCwxAAU5JIQwMQAAjSSENDEAAFCENEkQ2GgE2GgJQNf8pNP9QQgGlIQwSRCpCCEdJIQ4MQAEDIQ4SRDQBSSUMQAB7JRJEKWQoZFBJNQNJSlcoEDX/VzgQNf5XSBA1/VdYOTX8NANXEAg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcpCDT8VwEIUDT8VzEIUDT8VwkgUDT8VwABUFA0/VcACDT9VwgIUFA0A1cICFAoNANXAAhQUDUHQgpPIQYSRClkKGRQSTUDSUpXGBA1/1coEDX+VzgQNf1XSDk1/DQDVxAINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXKQg0/FcBCFA0/FcxCFA0/FcJIFA0/FcAAVBQNP1XAAg0/VcICFBQNANXCAhQKDQDVwAIUFA1B0IJ0yELEkQ2GgE2GgJQNf+AAQM0/1AhD69QQgB5SSEQDEAAOUkhEQxAABohERJENhoBNhoCUDX/gAEENP9QIQ+vUEIAUSEQEkQ2GgE2GgJQNf8oNP9QgUGvUEIAOYHk/OqBAhJENhoBNf+AAQI0/1CBUa9QQgAfNhoCFzUENhoDNhoBF0khBgxABzJJIQgMQAatIQgSRCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpJIls1/yNbNf4hB1s1/VcYEDX8VygQNftXOBA1+ldIEDX5V1g5NfiBkQFbNfdJNQU19oAER2hHHzT2ULA09iJVSSEGDEAD5kkhCAxAAwRJJQxAAYAlEkQ09lcBEDX1NPUiWzX0NPQ0/ogI5DT4VwABFxRENPoiWzXzNPojWzXyNPghEls18TT4IRNbNfA08jT0CDXvJK809BZQKySvNPAWUKGICMqjiAjGNe4krzTzFlA17TTuNO2jiAi0JK807xZQK6OICKk07qCICKOiiAifSUohB1siEkQjWyISRCJbIhJEJFs17DT0NPMdNO+XNOwJNPEhBQs08AodIQWXNes09DTxHSEKlzXqI6806xZQNOoWI69QNOo08x0075c06w1NSTXpIls16DTpI1s15zTzNOwJNOcJNeY07zToCTXlNPUjWzTsDkQkrzTmFlAkrzTlFlCjiAgYNO0krzTyFlCjiAgMp0SxIrIBNOyyEiWyEDEAshQ0/7IRszTsFiOvUDXkgAgAAAAAAABK9jTkULA05DUHJwQjrzT0FlBQNORQNOYWNOUWUFCwNP80/jT9NPwiNPs05hY05RZQNPkiWzTnCBY0+SNbNOgIFlA0+DIGNPdCBoJINPZXARA19TT1Ils19DT0NP+IB2Y0+FcAARcURDT6Ils18zT6I1s18jT4IRJbNfE0+CETWzXwNPM09Ag17ySvNPQWUCskrzTwFlChiAdMo4gHSDXuJK808hZQNe007jTto4gHNiSvNO8WUCujiAcrNO6giAcloogHIUlKIQdbIhJEI1siEkQiWyISRCRbNew09DTyHTTvlzTsCTTxIQULNPAKHSEFlzXrNPQ08R0hCpc16iOvNOsWUDTqFiOvUDTqNPIdNO+XNOsNTUk16SJbNeg06SNbNec07zToCTXmNPI07Ak05wk15TT1I1s07A5EJK805hZQJK805RZQo4gGmiSvNPMWUDTto4gGjqdEsSKyATTsshIlshAxALIUNP6yEbMjrzTsFlA15IAIAAAAAAAARyg05FCwNOQ1BycENPQWI69QUDTkUDTmFjTlFlBQsDT/NP40/TT8IjT7NOYWNOUWUDT5Ils06AgWNPkjWzTnCBZQNPgyBjT3QgUESDT2VwEINfU09Rc19DT0NP2IBek0+yNbNfM0+iJbNfI0+iNbNfE09DTyHTTzlzXwNPQ08R0085c17zT7Ils09Ag17jTzNPQJNe008jTwCTXsNPE07wk167EisgE08LISJbIQMQCyFDT/shGzsSKyATTvshIlshAxALIUNP6yEbM08BY07xZQNeqACAAAAAAAAENbNOpQsDTqNQeABN1wlmU09BZQNOpQNOwWNOsWUFA07hY07RZQULA0/zT+NP00/CI07hY07RZQNOwWNOsWUDT5NPgyBjT3QgQpSSEEDEABIUg09lcBGDX1NPVXABBJNfQiWzXzNPQjWzXyNPM0/4gE+jTyNP6IBPM09SEHWzXxNPhXAAEXFEQ0+yNbSTXvIhJBACgkrzTxFlA17iSvNPMWUCSvNPIWUKOIBOA07kmjiATZqEQ08TXwQgAnNPEiEkQ08zT6IlsdNO+XNe408jT6I1sdNO+XSTXtNO5JNO0MTTXwNPM0+iJbCDXuNPI0+iNbCDXtNPsiWzTwCTXsNO808Ag167EisgE08LISJbIQMQCyFDT9shGzgAgAAAAAAAA/aDTwFlCwNPAWNQeABAGCU+o08xY08hZQUDTwFlA07hY07RZQUDTsFjTrFlBQsDT/NP40/TT8IjTsFjTrFlA07hY07RZQNPk0+DIGNPdCAwFINPZXAVk19TT1VwAgNfQ09VcgOUk181cYIDXyNPMiWzXxNPMjWzXwNPNXOAEXNe8xADT4VwkgEkQ08SEFDEQ08CEFDEQ08TTwCEk17jTwNPEIEjTuIQUMEDTuIg0QRDIKYDIKeAk09wk17TT5Ils17DT5I1s167EisgE07bIIIQSyEDT0sgezsSKyATTsshIlshA09LIUNP+yEbOxIrIBNOuyEiWyEDT0shQ0/rIRs4AIAAAAAAAAPCM07BY06xZQNO0WUFCwNOwWNOsWUDTtFlA1B4AEVq11PDTxFjTwFlA07hZQNPJQNO8WUQcIUFCwNP80/jT9NPw07zT7I1siEhA0+iJbIhI0+iNbIhIQEDT7NPo0/DTvFlEHCDTwFlA08lA08RZQNO4WUDIGNO009wg07QlCAclIIQY0ARJENARJIhJMNAISEUQpZChkUEk1AyEHWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAABLJbAqNQexIrIBIQiyEDT/siGzsSKyASKyEiWyEDIJshUyCrIUNAMjW7IRs7EisgEishIlshAyCbIVMgqyFDQDIluyEbNCAc4iEkQiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yNbNf5XECA1/VcwCDX8VzggNfuABP2Z2wU0/xZQNP4WUDT9UDT8UDT7ULAhCYgB3TT/NP4TRCEJiAHSsSKyASKyEiWyEDIKshQ0/7IRsyEJiAG6sSKyASKyEiWyEDIKshQ0/rIRsyEUIQoNRCEJiAGcsSKyASEIshAhFLIigQayIzT8siU0/bImgWCvsicyA7IoMgqyKbO0PDX6gAgAAAAAAAA4KTT6FlCwNPo1+SI1+CI19zT/FjT+FlAjNPcLI1gXNfY0+TT2EjT4SU01+DT3IQQISTX3IQYMQP/XNPgURCEHrzX3NP80/jT5NPcigBD//////////wAAAAAAAAAANPdJgAkAAAAAAAAAABk0+1CACAAAAAAAAAAFUIAIAAAAAAAAAB5QMgYiQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT5QQAxNPUWNPYWUDT3FlA0+lA0+1A0/FA0/VApSwFXAH9nKEsBV38CZ0ghBjUBMgY1AkIAVDT1FjT2FlA09xZQNPhQNPpQNPtQNPxQNP1QNP8WUClLAVcAf2coSwFXfxpnSCU1ATIGNQJCAB0xGYEFEkSxIrIBIrIIIQSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIQQIMgQSRDEWEkQhBEMxGSISREL/3SI1ASI1AkL/wTQASUohBAg1ADgHMgoSRDgQIQQSRDgIEkSJNABJSkkhBAg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFYEgTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 153,
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
                "internalType": "address payable",
                "name": "v14342",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v14343",
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
                "name": "v14344",
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
                "name": "v14345",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v14346",
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
                "internalType": "address payable",
                "name": "v14342",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v14343",
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
                "name": "v14344",
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
                "name": "v14345",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v14346",
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
                "name": "v19234",
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
                    "name": "_Harvester_harvest0_11459",
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
                    "name": "_Provider_deposit0_11459",
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
                    "name": "_Provider_withdraw0_11459",
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
                    "name": "_Trader_swapAForB0_11459",
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
                    "name": "_Trader_swapBForA0_11459",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v15119",
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
    "name": "_reach_oe_v14377",
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
    "name": "_reach_oe_v15395",
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
    "name": "_reach_oe_v16232",
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
    "name": "_reach_oe_v17243",
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
    "name": "_reach_oe_v18216",
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
    "name": "_reach_oe_v19190",
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
    "name": "_reach_oe_v19237",
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
                "name": "v19234",
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
                    "name": "_Harvester_harvest0_11459",
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
                    "name": "_Provider_deposit0_11459",
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
                    "name": "_Provider_withdraw0_11459",
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
                    "name": "_Trader_swapAForB0_11459",
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
                    "name": "_Trader_swapBForA0_11459",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v15119",
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
  Bytecode: `0x608060405260405162005c2f38038062005c2f833981016040819052620000269162000a56565b6000805543600355620000386200067c565b604080518351815260208085015180516001600160a01b0390811683850152918101518216838501528084015151606080850191909152810151516001600160c01b03191660808085019190915201511660a082015290517f8e455783dec28612d137090f254caa13d244b757017d0cf8f68488802eeab29b9181900360c00190a1620000fb8260200151602001516001600160a01b03168360200151600001516001600160a01b031614620000f0576001620000f3565b60005b600862000458565b620001093415600962000458565b620001176001600a62000458565b80516000199052805160006020918201819052818301805182905280518301829052516040908101829052808401519190915283820151810151518151928301520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260208581015180518183015191850151928601529284019290925260608301919091529060800160408051808303601f190181528282528582015151602084015291016040516020818303038152906040526000196012604051620001fc9062000761565b6200020d9695949392919062000b96565b604051809103906000f0801580156200022a573d6000803e3d6000fd5b506001600160a01b031660608201819052608082018190526040519081527f1646bea963e8b481aa9e47311c045a2b48dd60e4869fd71daf292f9762b423579060200160405180910390a1602082810180515160a0840180516001600160a01b039283169052915183015191519116910152600060e082018190525b60028110156200032d578160a001518160028110620002c957620002c962000c01565b60200201516001600160a01b031661010083015260e08201516200030b578161010001516001600160a01b031682608001516001600160a01b03161462000311565b8160e001515b151560e083015280620003248162000c17565b915050620002a6565b5060e0810151151560c0820181905262000359906200034e57600162000351565b60005b600b62000458565b61012081018051600090819052905160209081018290526101408301805192909252815160199082015283015160809081015182516001600160a01b03909116604090910152815160056060909101529051601e910152620003ba6200076f565b602080840180515183516001600160a01b039182169052905182015183519082169083015260808085015184519216604092830152610120850180518551606090810191909152858501805160009081905288518251909701969096528251815190950194909452905183519091015261014085015182519091015280514360a0909101525160c001526200044f8162000482565b50505062000e4c565b816200047e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156200053c5762000498620007c1565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c08401526002600055436001559051620005119183910162000c41565b604051602081830303815290604052600290805190602001906200053792919062000822565b505050565b620005ec6040805161012081018252600080825260208083018290528284018290528351808501855282815280820183905260608401528351808501855282815280820183905260808401528351808501855282815280820183905260a084015283518085019094528184528301529060c082019081526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001600081525090565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e08601525101516101008401526004600055436001559051620005119183910162000d07565b604080516101a08101825260006101608201818152610180830182905282528251606080820185528282526020808301849052828601849052808501929092528451918201855282825293830152918101829052608081019190915260a08101620006e6620008b1565b815260200160001515815260200160001515815260200160006001600160a01b031681526020016200072b604051806040016040528060008152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b6110878062004ba883390190565b6040518060400160405280620007b26040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b81526020016200075c620008cf565b6040805160e0810182526000808252602080830182905282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015283518085019094528184528301529060a08201906200072b565b828054620008309062000e0f565b90600052602060002090601f0160209004810192826200085457600085556200089f565b82601f106200086f57805160ff19168380011785556200089f565b828001600101855582156200089f579182015b828111156200089f57825182559160200191906001019062000882565b50620008ad92915062000989565b5090565b60405180604001604052806002906020820280368337509192915050565b6040518060e0016040528060001515815260200162000901604051806040016040528060008152602001600081525090565b815260200162000924604051806040016040528060008152602001600081525090565b815260200162000947604051806040016040528060008152602001600081525090565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260200160008152602001600081525090565b5b80821115620008ad57600081556001016200098a565b604080519081016001600160401b0381118282101715620009d157634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620009d157634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620009d157634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811462000a5157600080fd5b919050565b600081830360c081121562000a6a57600080fd5b62000a74620009a0565b8351815260a0601f198301121562000a8b57600080fd5b62000a95620009d7565b62000aa36020860162000a39565b815262000ab36040860162000a39565b60208201526020605f198401121562000acb57600080fd5b62000ad562000a08565b6060860151815260408201526020607f198401121562000af457600080fd5b62000afe62000a08565b60808601519093506001600160c01b03198116811462000b1d57600080fd5b83526060810183905262000b3460a0860162000a39565b60808201526020820152949350505050565b6000815180845260005b8181101562000b6e5760208185018101518683018201520162000b50565b8181111562000b81576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000bab60c083018962000b46565b828103602084015262000bbf818962000b46565b9050828103604084015262000bd5818862000b46565b9050828103606084015262000beb818762000b46565b6080840195909552505060a00152949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000c3a57634e487b7160e01b600052601160045260246000fd5b5060010190565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060808301516101c083019162000c8c9084018280518252602090810151910152565b506080830151805160a0840152602081015160c08401525060a0830151805160e084015260208101516101008401525060c083015180511515610120840152602081015161014084015260408101516001600160a01b0316610160840152606081015161018084015260808101516101a08401525092915050565b81516001600160a01b0316815260208083015161022083019162000d35908401826001600160a01b03169052565b50604083015162000d5160408401826001600160a01b03169052565b50606083015162000d6f606084018280518252602090810151910152565b506080830151805160a0840152602081015160c08401525060a0830151805160e084015260208101516101008401525060c0830151805161012084015260208101516101408401525060e083015180511515610160840152602081015161018084015260408101516001600160a01b03166101a084015260608101516101c084015260808101516101e08401525061010083015161020083015292915050565b600181811c9082168062000e2457607f821691505b6020821081141562000e4657634e487b7160e01b600052602260045260246000fd5b50919050565b613d4c8062000e5c6000396000f3fe6080604052600436106100a55760003560e01c80638323075711610061578063832307571461015e5780638bf8964914610173578063ab53f2c614610186578063b035d7a1146101a9578063c8867ae9146101c1578063dc8d714f146101d457005b80630398fba2146100ae5780631e93b0f1146100d757806332020fec146100f65780633402da13146101165780633e59bac4146101295780634012e02e1461013c57005b366100ac57005b005b6100c16100bc366004613279565b6101e7565b6040516100ce91906132d1565b60405180910390f35b3480156100e357600080fd5b506003545b6040519081526020016100ce565b6101096101043660046132df565b610256565b6040516100ce91906132f8565b6100e861012436600461333f565b6102c0565b6100ac61013736600461336a565b61031e565b34801561014857600080fd5b50610151610342565b6040516100ce91906133d0565b34801561016a57600080fd5b506001546100e8565b6100ac610181366004613488565b610693565b34801561019257600080fd5b5061019b6106b3565b6040516100ce9291906134c7565b6101b1610750565b60405190151581526020016100ce565b6101096101cf366004613501565b610787565b6101096101e2366004613501565b6107f8565b6101ef612646565b6101f7612671565b6101ff6126ff565b610207612719565b6040805180820182526001600160a01b03881681526020808201889052838101919091526000835281518082019092528282528301526102478284610869565b50506020015190505b92915050565b6040805180820190915260008082526020820152610272612671565b61027a6126ff565b610282612719565b604080516020808201835287825260608401919091526002835281518082019092528282528301526102b48284610869565b50506060015192915050565b60006102ca612671565b6102d26126ff565b6102da612719565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526103118284610869565b5050604001519392505050565b610326612671565b61033e61033836849003840184613523565b82611f94565b5050565b61034a61275c565b6002600054141561052b57600060028054610364906135a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610390906135a9565b80156103dd5780601f106103b2576101008083540402835291602001916103dd565b820191906000526020600020905b8154815290600101906020018083116103c057829003601f168201915b50505050508060200190518101906103f59190613680565b90506103ff612816565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151905183015260c085018051840151604080870180519290925282518501518251860152825184015182518201528251015181516001600160a01b039091169086015290515190519015159082015260a085018051519385018051949094525182015192519091019190915281015160015b908160018111156104b0576104b06133ba565b9052508151608080830180516001600160a01b039384166040918201528086015160a080870180519287169092528651825160209081019190915280880151835185015292870151825160609081019190915290960151815190940193909352909401518151921691909201529051815160c0015251919050565b6004600054141561068457600060028054610545906135a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610571906135a9565b80156105be5780601f10610593576101008083540402835291602001916105be565b820191906000526020600020905b8154815290600101906020018083116105a157829003601f168201915b50505050508060200190518101906105d6919061374a565b90506105e0612816565b608080830180515183515251602090810151835182015260a084018051518285018051919091529051820151905182015260e084018051606090810151604080870180519290925283518501518251860152835186015182518201528351015181516001600160a01b039091169083015291515191519115159184019190915260c0850180515191850180519290925251820151905190910152810151600161049d565b61069060006007612122565b90565b61069b612671565b61033e6106ad368490038401846138cb565b82610869565b6000606060005460028080546106c8906135a9565b80601f01602080910402602001604051908101604052809291908181526020018280546106f4906135a9565b80156107415780601f1061071657610100808354040283529160200191610741565b820191906000526020600020905b81548152906001019060200180831161072457829003601f168201915b50505050509050915091509091565b600061075a612671565b6107626128b3565b60408051602080820190925260008152908201526107808183611f94565b5051919050565b60408051808201909152600080825260208201526107a3612671565b6107ab6126ff565b6107b3612719565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107eb8284610869565b5050608001519392505050565b6040805180820190915260008082526020820152610814612671565b61081c6126ff565b610824612719565b604080518082018252878152602080820188905260a084019190915260048352815180820190925282825283015261085c8284610869565b505060a001519392505050565b6108796004600054146030612122565b815161089490158061088d57508251600154145b6031612122565b6000808055600280546108a6906135a9565b80601f01602080910402602001604051908101604052809291908181526020018280546108d2906135a9565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b5050505050806020019051810190610937919061374a565b90506109416128dd565b7f66b62a870cdd5d0d83f552ce4da25f289d47d844a4993871eaeb4a934c3f6cb2846040516109709190613993565b60405180910390a16000602085015151516004811115610992576109926133ba565b1415610dd45760208085015151015181526109af3415600f612122565b6109c96109c23384604001516000612148565b6010612122565b6109e36109dc3384600001516000612148565b6011612122565b6109fd6109f63384602001516000612148565b6012612122565b610a248260e00151604001516001600160a01b0316336001600160a01b0316146013612122565b80516020015151610a39906064116014612122565b610a53606482600001516020015160200151106015612122565b8051602090810151908101519051610a6b9190613a53565b60208083019190915281518101518051910151610ac091610a8b91613a53565b826020015114610a9c576000610aa5565b60648260200151105b610ab0576000610ab9565b60008260200151115b6016612122565b61010082015147908110610ae357610100830151610ade9082613a6b565b610ae6565b60005b604080840182905283515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610b25573d6000803e3d6000fd5b50825182515160c085015151610b3c929190612160565b610b5b83602001518360000151600001518560c0015160200151612160565b60c0830180515160608401805191909152905160209081015182518201529051608084018051919091526040808501518251909301929092525190517fa05e2256c3667c3c762537bf26d59ca2a47ca2c30bf7c3006fbd648c8fa6e8ff91610bc2916132d1565b60405180910390a160808083015160208087019190915283518101515160a0850180519190915284518201518201518151830152818501518151604090810191909152855183015160609081015183516001600160a01b039091169101528551909201518301518151901515930192909252905190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c6391613a82565b60405180910390a1815160209081015160809081015160c08501805191151590915284518301518301518151840152845183015160609081015182516001600160a01b039091166040909101528551840151518251909101529184015191510152610ccc612db6565b835181516001600160a01b039182169052602080860151835190831690820152604080870151845193169201919091526060808601518351909101528351015160800151610d1b576000610d26565b608084015160200151155b610d31576000610d4e565b60a08401515115610d43576000610d4e565b60a084015160200151155b6020808301805192151590925260808087015183519092019190915260a080870151835160409081019190915260608089015185519091015260c0870151845190930192909252915143920191909152830151610100850151610db19082613a53565b610dbb9190613a6b565b602082015160c00152610dcd81612174565b5050611f8e565b6001602085015151516004811115610dee57610dee6133ba565b14156111ef576020840151516040015160e0820152610e0f34156017612122565b610e29610e223384604001516000612148565b6018612122565b815160e08201515151610e4991610e4291339190612148565b6019612122565b610e6e610e673384602001518460e001516000015160200151612148565b601a612122565b60e082015151610e8d90610e83576001610e86565b60005b601b612122565b608082015160200151610eec5760e0810151602001516101208201819052610ed890610eb99080613a90565b60e08301515160208101519051610ed09190613a90565b14601c612122565b60e081015160200151610100820152610f90565b610f0260008260e001516020015114601d612122565b60808201516020015160a08301515160e08301515151610f229190613a90565b610f2c9190613aaf565b610140820152608082015160209081015160a084015182015160e084015151909201519091610f5a91613a90565b610f649190613aaf565b610160820181905261014082015110610f8257806101600151610f89565b8061014001515b6101008201525b60a08201515160e08201515151610fa79190613a53565b61018082015260a082015160209081015160e08301515190910151610fcc9190613a53565b6101a082019081526101808201516101c0830180519190915290519051602001526101008101516080830151516110039190613a6b565b6101e08201526101008101516080830151602001516110229190613a53565b61020082019081526101e082015161022083018051919091529051905160200152604082015161010082015161105a91903390612160565b7fa2eed48c7233d4d8dbeeb5ddff7393a969e0df08733639b5798fa74291bee59881610100015160405161109091815260200190565b60405180910390a16101008101805160408086019190915260e08301805151516102408501805191909152905151602090810151825182015261018085015161026086018051919091526101a086015181518301526101e08601516102808701805191909152610200870151815190930192909252915193519151905192517f706e0e243d48b0263407243d4c88fe2ae827775c9df4b5f0685ea93fc4ea78699461113e9490939291613ad1565b60405180910390a161114e612db6565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051600090526102208601518151909301929092526101c085015182519093019290925260c08086015182519093019290925260e085015181516080015280514360a0909101526101008501519051909101526111e981612174565b50611f8e565b6002602085015151516004811115611209576112096133ba565b141561154a57602084015151606001516102a082015261122b3415601e612122565b61124d611246338460400151846102a0015160000151612148565b601f612122565b6112676112603384600001516000612148565b6020612122565b61128161127a3384602001516000612148565b6021612122565b60808201516020015160a0830151516102a0830151516112a19190613a90565b6112ab9190613aaf565b6102c0820152608082015160209081015160a0840151909101516102a0830151516112d69190613a90565b6112e09190613aaf565b6102e08201526102a0810151516080830151516112fd9190613a53565b6103008201526102a08101515160808301516020015161131d9190613a6b565b6103208201908152610300820151610340830180519190915290519051602001526102c081015160a0830151516113549190613a6b565b6103608201526102e081015160a0830151602001516113739190613a6b565b61038082019081526103608201516103a08301805191909152905190516020015281516102c08201516113a891903390612160565b6113bc826020015133836102e00151612160565b6102c08101516103c082018051919091526102e0820151815160200152516040517f59864d945886ee65b5c47fc84c6c5a3a1f07c78004e308c8b17b40dbce32461791611408916132f8565b60405180910390a16103c08101805160608501526103608201516103e08301805191909152610380830151815160209081019190915261030084015161040085018051919091526103208501518151909201919091526102a0840151519251915190516040517ffda6e27a38e82dfb3032bc90d0f9904b3e2c92c1f1517fd73928c75c485ab8ca9461149f94909390929091613b10565b60405180910390a16114af612db6565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051600090526103408601518151909301929092526103a085015182519093019290925260c08086015182519093019290925260e085015181516080015280514360a0909101526101008501519051909101526111e981612174565b6003602085015151516004811115611564576115646133ba565b1415611a6f576020840151516080015161042082015261158634156022612122565b6115a06115993384604001516000612148565b6023612122565b6115c26115bb33846000015184610420015160000151612148565b6024612122565b6115dc6115d53384602001516000612148565b6025612122565b60e0820151516115fb906115f15760016115f4565b60005b6026612122565b6104208101515160a0830151516116129190613a53565b61044082015260e08201516080015161162d90612710613a6b565b6104208201515161163e9190613a90565b610460820181905260a0830151602001516104808301526104408201516116689061271090613a90565b6116729190613a53565b8161048001518261046001516116889190613a90565b6116929190613aaf565b6104a082015260e08201516080810151606090910151606491906116b7908390613a90565b6116c19190613aaf565b6104a083015161044084015160a086015160200151610420860151516116e79190613a90565b6116f19190613aaf565b6116fb9190613a6b565b6117059190613a90565b61170f9190613aaf565b6104c082015260e082015160600151610420820151516127109161173291613a90565b61173c9190613aaf565b6104e08201818152610500830180519290925290516000602091820181905261052084018051919091526104c08401805191518301919091525161044084015160a0860151909201519251909261179291613a90565b61179c9190613aaf565b116117ac578061052001516117b3565b8061050001515b6105408201819052516104408201516117cc9190613a6b565b8161056001818152505080610540015160200151816104a001518360a00151602001516117f99190613a6b565b6118039190613a6b565b61058082019081526105608201516105a0830180519190915290519051602001526105408101515160c08301515161183b9190613a53565b6105c08201515261054081015160209081015160c0840151909101516118619190613a53565b816105c00151602001818152505061188b816104a001518261042001516020015111156027612122565b61048081015160a0830151516118c3916118a491613a90565b8261058001518361056001516118ba9190613a90565b10156028612122565b6118d7826020015133836104a00151612160565b6105e081018051600090526104a0820151815160200152516040517f7d05477a4d6716077cbe656065a0ab6c47113c680b5e7c9ad6b498d903a0d5e79161191d916132f8565b60405180910390a16105e081018051608085810191909152610420830151516106008401805191909152805160006020918201526105608501516106208601805191909152610580860151815183015291519351915160408051865181529583015186840152835190860152918101516060850152815192840192909252015160a08201527f6ae684f28b604987e150fdf4f25ddbfa02339b21865a275b2d0061481beb084b9060c00160405180910390a16119d7612db6565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051600090526080808801518251909401939093526105a08601518151909401939093526105c085015183519091015260e085015182519091015280514360a090910152610100840151905160c001526111e981612174565b6004602085015151516004811115611a8957611a896133ba565b1415611f8e5760208401515160a00151610640820152611aab34156029612122565b611ac5611abe3384604001516000612148565b602a612122565b611adf611ad83384600001516000612148565b602b612122565b611b01611afa33846020015184610640015160000151612148565b602c612122565b60e082015151611b2090611b16576001611b19565b60005b602d612122565b6106408101515160a083015160200151611b3a9190613a53565b61066082015260e082015160800151611b5590612710613a6b565b61064082015151611b669190613a90565b610680820181905260a0830151516106a0830152610660820151611b8d9061271090613a90565b611b979190613a53565b816106a00151826106800151611bad9190613a90565b611bb79190613aaf565b6106c082015260e0820151608081015160609091015160649190611bdc908390613a90565b611be69190613aaf565b6106c083015161066084015160a08601515161064086015151611c099190613a90565b611c139190613aaf565b611c1d9190613a6b565b611c279190613a90565b611c319190613aaf565b6106e082015260e0820151606001516106408201515161271091611c5491613a90565b611c5e9190613aaf565b6107008201818152610720830180519290925290516000602091820181905261074084018051919091526106e0840180519151909201525161066083015160a085015151925191929091611cb29190613a90565b611cbc9190613aaf565b11611ccc57806107400151611cd3565b8061072001515b6107608201819052602001516106c082015160a084015151611cf59190613a6b565b611cff9190613a6b565b61078082015261076081015151610660820151611d1c9190613a6b565b6107a082019081526107808201516107c0830180519190915290519051602090810191909152610760820151015160c083015151611d5a9190613a53565b6107e0820151526107608101515160c083015160200151611d7b9190613a53565b816107e001516020018181525050611da5816106c00151826106400151602001511115602e612122565b611de08260a0015160200151826106a00151611dc19190613a90565b826107a00151836107800151611dd79190613a90565b1015602f612122565b611df4826000015133836106c00151612160565b6106c0810151610800820180519190915280516000602090910152516040517fb2e07055ac2c494a2a3a4beb14a6c456cb2fb5c1f16388620b39234aa541ddd791611e3e916132f8565b60405180910390a16108008101805160a085810191909152610820830180516000905261064084015151815160209081019190915261078085015161084086018051919091526107a0860151815183015291519351915160408051865181529583015186840152835190860152918101516060850152815160808501520151908201527f6ae684f28b604987e150fdf4f25ddbfa02339b21865a275b2d0061481beb084b9060c00160405180910390a1611ef6612db6565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051600090526080808801518251909401939093526107c08601518151909401939093526107e085015183519091015260e085015182519091015280514360a090910152610100840151905160c001526111e981612174565b50505050565b611fa4600260005414600d612122565b8151611fbf901580611fb857508251600154145b600e612122565b600080805560028054611fd1906135a9565b80601f0160208091040260200160405190810160405280929190818152602001828054611ffd906135a9565b801561204a5780601f1061201f5761010080835404028352916020019161204a565b820191906000526020600020905b81548152906001019060200180831161202d57829003601f168201915b50505050508060200190518101906120629190613680565b6040805185518152602080870151511515908201529192507fd87af78abaccc59d995cd712c21929e42321bf30f94e6164c3f52c0c14084d52910160405180910390a16120b13415600c612122565b604051600081527f4fcd63d5161ff21be8210faeb5883ca05660f66a396099635db9b81e456d77cb9060200160405180910390a16000825260408101516120fa906000196122bb565b61210781604001516122ce565b6000808055600181905561211d90600290612e05565b505050565b8161033e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000612156838530856122e0565b90505b9392505050565b61216b8383836123ba565b61211d57600080fd5b6020810151511561222257612187612e3f565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c084015260026000554360015590516121fe91839101613b7c565b6040516020818303038152906040526002908051906020019061211d929190612ea7565b61222a612f2b565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e086015251015161010084015260046000554360015590516121fe91839101613c09565b50565b6122c5828261248b565b61033e57600080fd5b6122d781612566565b6122b857600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161234791613cdd565b60006040518083038185875af1925050503d8060008114612384576040519150601f19603f3d011682016040523d82523d6000602084013e612389565b606091505b509150915061239a8282600161260b565b50808060200190518101906123af9190613cf9565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161241991613cdd565b60006040518083038185875af1925050503d8060008114612456576040519150601f19603f3d011682016040523d82523d6000602084013e61245b565b606091505b509150915061246c8282600261260b565b50808060200190518101906124819190613cf9565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016124b791815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516124f59190613cdd565b60006040518083038185875af1925050503d8060008114612532576040519150601f19603f3d011682016040523d82523d6000602084013e612537565b606091505b50915091506125488282600361260b565b508080602001905181019061255d9190613cf9565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916125ad91613cdd565b60006040518083038185875af1925050503d80600081146125ea576040519150601f19603f3d011682016040523d82523d6000602084013e6125ef565b606091505b50915091506126008282600461260b565b506001949350505050565b6060831561261a575081612159565b82511561262a5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161213f565b60408051608081018252600091810182815260608201929092529081905b8152602001600081525090565b6040518060c0016040528060001515815260200161268d612646565b8152602001600081526020016126b6604051806040016040528060008152602001600081525090565b81526020016126d8604051806040016040528060008152602001600081525090565b81526020016126fa604051806040016040528060008152602001600081525090565b905290565b6040518060400160405280600081526020016126fa612fa9565b6040805160c081019091528060008152602001612734612fbc565b8152602001612741612646565b81526020016126b66040518060200160405280600081525090565b6040518060e0016040528060006001600160a01b03168152602001612794604051806040016040528060008152602001600081525090565b81526020016127b6604051806040016040528060008152602001600081525090565b81526020016127c3612fdb565b81526020016127e5604051806040016040528060008152602001600081525090565b8152600060208201526040016126fa6040805160608101909152806000815260006020820181905260409091015290565b604080516101008101909152600060c0820181815260e083019190915281908152602001612857604051806040016040528060008152602001600081525090565b8152602001612864612fdb565b8152602001612886604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016126fa61275c565b6040518060400160405280600081526020016126fa60405180602001604052806000151581525090565b6040518061086001604052806128f1612fbc565b81526020016000815260200160008152602001612921604051806040016040528060008152602001600081525090565b815260200161292e612646565b815260200161293b612fdb565b8152602001612948613015565b8152602001612955612646565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129a1604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016129d1604051806040016040528060008152602001600081525090565b81526020016129f3604051806040016040528060008152602001600081525090565b8152602001612a15604051806040016040528060008152602001600081525090565b8152602001612a37604051806040016040528060008152602001600081525090565b8152602001612a526040518060200160405280600081525090565b815260200160008152602001600081526020016000815260200160008152602001612a90604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001612ac0604051806040016040528060008152602001600081525090565b8152602001612ae2604051806040016040528060008152602001600081525090565b8152602001612b04604051806040016040528060008152602001600081525090565b8152602001612b26604051806040016040528060008152602001600081525090565b8152602001612b48604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612b94604051806040016040528060008152602001600081525090565b8152602001612bb6604051806040016040528060008152602001600081525090565b8152602001612bd8604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001612c08604051806040016040528060008152602001600081525090565b8152602001612c2a604051806040016040528060008152602001600081525090565b8152602001612c4c604051806040016040528060008152602001600081525090565b8152602001612c6e604051806040016040528060008152602001600081525090565b8152602001612c90604051806040016040528060008152602001600081525090565b8152602001612cb2604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612cfe604051806040016040528060008152602001600081525090565b8152602001612d20604051806040016040528060008152602001600081525090565b8152602001612d42604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001612d72604051806040016040528060008152602001600081525090565b8152602001612d94604051806040016040528060008152602001600081525090565b81526020016126b6604051806040016040528060008152602001600081525090565b6040518060400160405280612df86040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b81526020016126fa61304f565b508054612e11906135a9565b6000825580601f10612e21575050565b601f0160209004906000526020600020908101906122b891906130e5565b6040805160e0810182526000808252602080830182905282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015283518085019094528184528301529060a082019081526020016126fa613015565b828054612eb3906135a9565b90600052602060002090601f016020900481019282612ed55760008555612f1b565b82601f10612eee57805160ff1916838001178555612f1b565b82800160010185558215612f1b579182015b82811115612f1b578251825591602001919060010190612f00565b50612f279291506130e5565b5090565b6040805161012081018252600080825260208083018290528284018290528351808501855282815280820183905260608401528351808501855282815280820183905260808401528351808501855282815280820183905260a084015283518085019094528184528301529060c08201908152602001612664613015565b60405180602001604052806126fa612719565b604051806040016040528060006001600160a01b031681526020016126fa5b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060e00160405280600015158152602001613080604051806040016040528060008152602001600081525090565b81526020016130a2604051806040016040528060008152602001600081525090565b81526020016130c4604051806040016040528060008152602001600081525090565b81526020016130d1613015565b815260200160008152602001600081525090565b5b80821115612f2757600081556001016130e6565b6001600160a01b03811681146122b857600080fd5b60405160a0810167ffffffffffffffff8111828210171561314057634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561314057634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561314057634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561314057634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561314057634e487b7160e01b600052604160045260246000fd5b80151581146122b857600080fd5b600060a0828403121561322b57600080fd5b61323361310f565b9050813581526020820135602082015260408201356040820152606082013561325b816130fa565b6060820152608082013561326e8161320b565b608082015292915050565b60008060c0838503121561328c57600080fd5b8235613297816130fa565b91506132a68460208501613219565b90509250929050565b6132c482825180518252602090810151910152565b6020015160409190910152565b6060810161025082846132af565b6000602082840312156132f157600080fd5b5035919050565b815181526020808301519082015260408101610250565b60006040828403121561332157600080fd5b613329613146565b9050813581526020820135602082015292915050565b6000806060838503121561335257600080fd5b61335c848461330f565b946040939093013593505050565b60006040828403121561337c57600080fd5b50919050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b81516001600160a01b03908116825260208084015180518285015290810151604084015261020083019190506040840151805160608501526020810151608085015250606084015161342560a0850182613382565b50608084015180516101408501526020015161016084015260a0840151811661018084015260c0840151805160028110613461576134616133ba565b6101a0850152602081015115156101c085015260400151166101e090920191909152919050565b6000610200828403121561337c57600080fd5b60005b838110156134b657818101518382015260200161349e565b83811115611f8e5750506000910152565b82815260406020820152600082518060408401526134ec81606085016020870161349b565b601f01601f1916919091016060019392505050565b6000806040838503121561351457600080fd5b50508035926020909101359150565b6000818303604081121561353657600080fd5b6040516040810181811067ffffffffffffffff8211171561356757634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561358057600080fd5b613588613177565b915060208401356135988161320b565b825260208101919091529392505050565b600181811c908216806135bd57607f821691505b6020821081141561337c57634e487b7160e01b600052602260045260246000fd5b80516135e9816130fa565b919050565b60006040828403121561360057600080fd5b613608613146565b9050815181526020820151602082015292915050565b600060a0828403121561363057600080fd5b61363861310f565b905081516136458161320b565b815260208281015190820152604082015161365f816130fa565b80604083015250606082015160608201526080820151608082015292915050565b60006101c0828403121561369357600080fd5b60405160e0810181811067ffffffffffffffff821117156136c457634e487b7160e01b600052604160045260246000fd5b60405282516136d2816130fa565b815260208301516136e2816130fa565b602082015260408301516136f5816130fa565b604082015261370784606085016135ee565b60608201526137198460a085016135ee565b608082015261372b8460e085016135ee565b60a082015261373e84610120850161361e565b60c08201529392505050565b6000610220828403121561375d57600080fd5b6137656131a8565b61376e836135de565b815261377c602084016135de565b602082015261378d604084016135de565b604082015261379f84606085016135ee565b60608201526137b18460a085016135ee565b60808201526137c38460e085016135ee565b60a08201526137d68461012085016135ee565b60c08201526137e984610160850161361e565b60e0820152610200929092015161010083015250919050565b600060c0828403121561381457600080fd5b61381c613146565b90508135613829816130fa565b81526138388360208401613219565b602082015292915050565b60006060828403121561385557600080fd5b61385d613146565b9050613869838361330f565b81526040820135602082015292915050565b60006020828403121561388d57600080fd5b6040516020810181811067ffffffffffffffff821117156138be57634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b60008183036102008112156138df57600080fd5b6138e7613146565b833581526101e0601f19830112156138fe57600080fd5b613906613177565b91506139106131da565b60208501356005811061392257600080fd5b81526139318660408701613802565b6020820152613944866101008701613843565b604082015261395786610160870161387b565b606082015261396a86610180870161330f565b608082015261397d866101c0870161330f565b60a0820152825260208101919091529392505050565b81518152602082015151805161020083019190600581106139b6576139b66133ba565b6020848101919091528181015180516001600160a01b0316604086015201516139e26060850182613382565b5060408101516139f66101008501826132af565b5060608101518051610160850152506080810151805161018085015260208101516101a08501525060a0015180516101c084015260208101516101e08401525b5092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115613a6657613a66613a3d565b500190565b600082821015613a7d57613a7d613a3d565b500390565b60a081016102508284613382565b6000816000190483118215151615613aaa57613aaa613a3d565b500290565b600082613acc57634e487b7160e01b600052601260045260246000fd5b500490565b84518152602080860151818301526040820185905283516060830152830151608082015260e081015b825160a0830152602083015160c083015261255d565b84815260e08101613b2e602083018680518252602090810151910152565b8351606083015260208401516080830152613afa565b805115158252602080820151908301526040808201516001600160a01b03169083015260608082015190830152608090810151910152565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060808301516101c0830191613bc69084018280518252602090810151910152565b506080830151805160a0840152602081015160c08401525060a0830151805160e084015260208101516101008401525060c0830151613a36610120840182613b44565b81516001600160a01b03168152602080830151610220830191613c36908401826001600160a01b03169052565b506040830151613c5160408401826001600160a01b03169052565b506060830151613c6e606084018280518252602090810151910152565b506080830151805160a0840152602081015160c08401525060a0830151805160e084015260208101516101008401525060c0830151805161012084015260208101516101408401525060e0830151613cca610160840182613b44565b5061010083015161020083015292915050565b60008251613cef81846020870161349b565b9190910192915050565b600060208284031215613d0b57600080fd5b81516121598161320b56fea26469706673582212205e19c7ae0cdfad3bd5cad74c015d51f58ceb80ae3bd519858f959248305442fc64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220d6d4055f758751e4bea785bcd4ecc71a3f5826767d79fdf6fb8ea57db427e97a64736f6c634300080c0033`,
  BytecodeLen: 23599,
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
