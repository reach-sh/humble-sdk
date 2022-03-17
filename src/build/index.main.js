// Automatically generated with Reach 0.1.8 (4bfdf20d)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (4bfdf20d)';
export const _backendVersion = 9;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    balA: ctc2,
    balB: ctc2
    });
  const ctc4 = stdlib.T_Object({
    addr: ctc0,
    fee: ctc2,
    lpFee: ctc2,
    totFee: ctc2
    });
  
  return {
    infos: {
      Tokens: {
        aBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2125;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        aTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              return (await ((async () => {
                
                
                return v2083;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2083;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        bBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2126;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        bTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              return (await ((async () => {
                
                
                return v2084;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2084;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        liquidityToken: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              return (await ((async () => {
                
                
                return v2104;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2104;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        minted: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2115;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        protocolBals: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2116;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        protocolInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2082, v2083, v2084, v2087, v2104] = svs;
              return (await ((async () => {
                
                const v2096 = {
                  addr: v2087,
                  fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
                  lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
                  totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
                  };
                
                return v2096;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = svs;
              return (await ((async () => {
                
                
                return v2117;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0, ctc1],
      4: [ctc1, ctc1, ctc1, ctc3, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2]
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Data({
    None: ctc4,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Struct([['receiver', ctc0], ['newHarvesterAddr', ctc5], ['newProtocolFee', ctc7], ['newProviderFee', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_164: ctc9,
    Provider_deposit0_164: ctc10,
    Provider_withdraw0_164: ctc11,
    Trader_swapAForB0_164: ctc12,
    Trader_swapBForA0_164: ctc12
    });
  const ctc14 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc6, ctc6, ctc6]);
  
  
  const v2072 = stdlib.protect(ctc0, interact.humbleAddr, 'for Admin\'s interact field humbleAddr');
  const v2073 = stdlib.protect(ctc1, interact.ltName, 'for Admin\'s interact field ltName');
  const v2074 = stdlib.protect(ctc2, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v2075 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v2076 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v2079 = stdlib.tokenEq(v2075, v2076);
  const v2080 = v2079 ? false : true;
  stdlib.assert(v2080, {
    at: './index.rsh:41:11:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v2081 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:44:23:decimal', stdlib.UInt_max, 10000));
  stdlib.assert(v2081, {
    at: './index.rsh:44:11:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2075, v2076, v2073, v2074, v2072],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2083, v2084, v2085, v2086, v2087], secs: v2089, time: v2088, didSend: v80, from: v2082 } = txn1;
      
      const v2090 = stdlib.tokenEq(v2083, v2084);
      const v2091 = v2090 ? false : true;
      stdlib.assert(v2091, {
        at: './index.rsh:48:9:dot',
        fs: [],
        msg: 'non-network tokens distinct',
        who: 'Admin'
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v2083
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v2084
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:48:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v2101 = '                                                                                                ';
      const v2102 = '                                ';
      const v2103 = stdlib.simTokenNew(sim_r, v2085, v2086, v2101, v2102, stdlib.UInt_max, undefined);
      const v2104 = await txn1.getOutput('internal', 'v2103', ctc3, v2103);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v2083, v2084, v2085, v2086, v2087], secs: v2089, time: v2088, didSend: v80, from: v2082 } = txn1;
  const v2090 = stdlib.tokenEq(v2083, v2084);
  const v2091 = v2090 ? false : true;
  stdlib.assert(v2091, {
    at: './index.rsh:48:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  const v2101 = '                                                                                                ';
  const v2102 = '                                ';
  const v2103 = undefined;
  const v2104 = await txn1.getOutput('internal', 'v2103', ctc3, v2103);
  const txn2 = await (ctc.sendrecv({
    args: [v2082, v2083, v2084, v2087, v2104],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2088,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v2107, time: v2106, didSend: v101, from: v2105 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:72:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v2109 = stdlib.addressEq(v2082, v2105);
      stdlib.assert(v2109, {
        at: './index.rsh:72:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      
      const v2113 = {
        balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      const v2114 = {
        addr: v2087,
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
        };
      const v2115 = stdlib.checkedBigNumberify('./index.rsh:79:22:decimal', stdlib.UInt_max, 0);
      const v2116 = v2113;
      const v2117 = v2114;
      const v2118 = v2106;
      const v2125 = stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0);
      const v2126 = stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0);
      const v2127 = stdlib.UInt_max;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2084
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2083
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc3, ctc3, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2107, time: v2106, didSend: v101, from: v2105 } = txn2;
  ;
  const v2109 = stdlib.addressEq(v2082, v2105);
  stdlib.assert(v2109, {
    at: './index.rsh:72:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v2104), {
    at: './index.rsh:73:47:application',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:17:function exp)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v2113 = {
    balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
    };
  const v2114 = {
    addr: v2087,
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
    };
  let v2115 = stdlib.checkedBigNumberify('./index.rsh:79:22:decimal', stdlib.UInt_max, 0);
  let v2116 = v2113;
  let v2117 = v2114;
  let v2118 = v2106;
  let v2125 = stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0);
  let v2126 = stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0);
  let v2127 = stdlib.UInt_max;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn3;
    switch (v2637[0]) {
      case 'Harvester_harvest0_164': {
        const v2640 = v2637[1];
        ;
        ;
        ;
        ;
        undefined;
        const v2744 = v2640[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
        const v2745 = v2117.addr;
        const v2746 = v2117.fee;
        const v2747 = v2117.lpFee;
        const v2748 = v2116.balA;
        const v2749 = v2116.balB;
        const v2750 = v2744.newHarvesterAddr;
        const v2751 = v2744.newProtocolFee;
        const v2752 = v2744.newProviderFee;
        const v2753 = v2744.receiver;
        const v2754 = stdlib.addressEq(v2636, v2745);
        stdlib.assert(v2754, {
          at: './util.rsh:278:10:application',
          fs: ['at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
          msg: 'Thou art not the harvester                                      ',
          who: 'Admin'
          });
        const v2760 = stdlib.sub(v2125, v2748);
        ;
        const v2768 = stdlib.sub(v2126, v2749);
        ;
        const v2769 = [v2748, v2749];
        await txn3.getOutput('Harvester_harvest', 'v2769', ctc12, v2769);
        let v2775;
        switch (v2750[0]) {
          case 'None': {
            const v2776 = v2750[1];
            v2775 = v2745;
            
            break;
            }
          case 'Some': {
            const v2777 = v2750[1];
            v2775 = v2777;
            
            break;
            }
          }
        let v2778;
        switch (v2751[0]) {
          case 'None': {
            const v2779 = v2751[1];
            v2778 = v2746;
            
            break;
            }
          case 'Some': {
            const v2780 = v2751[1];
            v2778 = v2780;
            
            break;
            }
          }
        let v2781;
        switch (v2752[0]) {
          case 'None': {
            const v2782 = v2752[1];
            v2781 = v2747;
            
            break;
            }
          case 'Some': {
            const v2783 = v2752[1];
            v2781 = v2783;
            
            break;
            }
          }
        const v2785 = stdlib.add(v2778, v2781);
        const v2789 = stdlib.add(v2781, v2778);
        const v2790 = stdlib.eq(v2785, v2789);
        const v2791 = stdlib.lt(v2785, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
        const v2792 = v2790 ? v2791 : false;
        const v2793 = stdlib.gt(v2785, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
        const v2794 = v2792 ? v2793 : false;
        stdlib.assert(v2794, {
          at: './util.rsh:94:4:application',
          fs: ['at ./util.rsh:291:21:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v2795 = {
          addr: v2775,
          fee: v2778,
          lpFee: v2781,
          totFee: v2785
          };
        const cv2115 = v2115;
        const cv2116 = v2113;
        const cv2117 = v2795;
        const cv2118 = v2638;
        const cv2125 = v2760;
        const cv2126 = v2768;
        const cv2127 = v2127;
        
        v2115 = cv2115;
        v2116 = cv2116;
        v2117 = cv2117;
        v2118 = cv2118;
        v2125 = cv2125;
        v2126 = cv2126;
        v2127 = cv2127;
        
        continue;
        break;
        }
      case 'Provider_deposit0_164': {
        const v3108 = v2637[1];
        const v3109 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
        const v3110 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
        const v3111 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
        ;
        ;
        const v3219 = stdlib.add(v2125, v3109);
        ;
        const v3221 = stdlib.add(v2126, v3110);
        ;
        undefined;
        const v3286 = stdlib.gt(v3109, stdlib.checkedBigNumberify('./index.rsh:177:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v3286, {
          at: './index.rsh:177:18:application',
          fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'amtA > 0',
          who: 'Admin'
          });
        const v3287 = stdlib.gt(v3110, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v3287, {
          at: './index.rsh:178:18:application',
          fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'amtB > 0',
          who: 'Admin'
          });
        const v3289 = v2116.balA;
        const v3290 = stdlib.sub(v3219, v3289);
        const v3292 = v2116.balB;
        const v3293 = stdlib.sub(v3221, v3292);
        const v3296 = stdlib.eq(v2115, stdlib.checkedBigNumberify('./index.rsh:185:30:decimal', stdlib.UInt_max, 0));
        let v3297;
        if (v3296) {
          const v3300 = stdlib.muldiv(v3109, v3110, v3111);
          const v3301 = stdlib.ge(v3300, v3111);
          stdlib.assert(v3301, {
            at: './util.rsh:185:4:application',
            fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
            who: 'Admin'
            });
          const v3302 = stdlib.le(v3111, v2127);
          stdlib.assert(v3302, {
            at: './util.rsh:186:4:application',
            fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'minted <= poolBalance                                           ',
            who: 'Admin'
            });
          v3297 = v3111;
          }
        else {
          const v3303 = stdlib.sub(v3290, v3109);
          const v3304 = stdlib.sub(v3293, v3110);
          const v3308 = stdlib.muldiv(v3109, v2115, v3303);
          const v3309 = stdlib.muldiv(v3110, v2115, v3304);
          const v3312 = stdlib.add(v3308, v3309);
          const v3313 = stdlib.div(v3312, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
          const v3314 = stdlib.le(v3313, v2127);
          stdlib.assert(v3314, {
            at: './util.rsh:166:4:application',
            fs: ['at ./index.rsh:187:34:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'result <= poolBalance                                           ',
            who: 'Admin'
            });
          v3297 = v3313;
          }
        const v3318 = stdlib.sub(v2127, v3297);
        ;
        const v3319 = stdlib.add(v2115, v3297);
        await txn3.getOutput('Provider_deposit', 'v3297', ctc6, v3297);
        const cv2115 = v3319;
        const cv2116 = v2116;
        const cv2117 = v2117;
        const cv2118 = v2638;
        const cv2125 = v3219;
        const cv2126 = v3221;
        const cv2127 = v3318;
        
        v2115 = cv2115;
        v2116 = cv2116;
        v2117 = cv2117;
        v2118 = cv2118;
        v2125 = cv2125;
        v2126 = cv2126;
        v2127 = cv2127;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_164': {
        const v3587 = v2637[1];
        const v3588 = v3587[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
        ;
        const v3690 = stdlib.add(v2127, v3588);
        ;
        ;
        ;
        undefined;
        const v3805 = v2116.balA;
        const v3806 = stdlib.sub(v2125, v3805);
        const v3808 = v2116.balB;
        const v3809 = stdlib.sub(v2126, v3808);
        const v3814 = stdlib.muldiv(v3588, v3806, v2115);
        const v3815 = stdlib.le(v3814, v3806);
        stdlib.assert(v3815, {
          at: './index.rsh:135:18:application',
          fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3821 = stdlib.sub(v2125, v3814);
        ;
        const v3822 = stdlib.muldiv(v3588, v3809, v2115);
        const v3823 = stdlib.le(v3822, v3809);
        stdlib.assert(v3823, {
          at: './index.rsh:140:18:application',
          fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3827 = stdlib.sub(v2126, v3822);
        ;
        const v3828 = stdlib.sub(v2115, v3588);
        const v3829 = [v3814, v3822];
        await txn3.getOutput('Provider_withdraw', 'v3829', ctc14, v3829);
        const cv2115 = v3828;
        const cv2116 = v2116;
        const cv2117 = v2117;
        const cv2118 = v2638;
        const cv2125 = v3821;
        const cv2126 = v3827;
        const cv2127 = v3690;
        
        v2115 = cv2115;
        v2116 = cv2116;
        v2117 = cv2117;
        v2118 = cv2118;
        v2125 = cv2125;
        v2126 = cv2126;
        v2127 = cv2127;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_164': {
        const v4060 = v2637[1];
        const v4061 = v4060[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
        const v4062 = v4060[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
        ;
        ;
        const v4165 = stdlib.add(v2125, v4061);
        ;
        ;
        undefined;
        const v4313 = v2116.balA;
        const v4314 = stdlib.sub(v4165, v4313);
        const v4316 = v2116.balB;
        const v4317 = stdlib.sub(v2126, v4316);
        const v4318 = stdlib.lt(v4061, v4314);
        stdlib.assert(v4318, {
          at: './util.rsh:231:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v4319 = stdlib.gt(v4061, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4319, {
          at: './util.rsh:234:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v4320 = stdlib.sub(v4314, v4061);
        const v4321 = v2117.fee;
        const v4323 = v2117.totFee;
        const v4326 = stdlib.mul(v4321, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
        const v4327 = stdlib.div(v4326, v4323);
        const v4344 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v4323);
        const v4348 = stdlib.mul(v4061, v4344);
        const v4351 = stdlib.mul(v4320, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
        const v4354 = stdlib.add(v4351, v4348);
        const v4355 = stdlib.muldiv(v4348, v4317, v4354);
        const v4356 = stdlib.gt(v4355, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4356, {
          at: './util.rsh:122:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v4359 = stdlib.add(v4320, v4061);
        const v4360 = stdlib.gt(v4359, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4360, {
          at: './util.rsh:65:4:application',
          fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4361 = stdlib.muldiv(v4061, v4317, v4359);
        const v4363 = stdlib.sub(v4361, v4355);
        const v4364 = stdlib.muldiv(v4061, v4321, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
        const v4368 = stdlib.mul(v4363, v4327);
        const v4369 = stdlib.div(v4368, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
        const v4370 = stdlib.le(v4369, v4363);
        stdlib.assert(v4370, {
          at: './util.rsh:128:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v4371 = stdlib.muldiv(v4369, v4320, v4317);
        const v4372 = stdlib.ge(v4371, v4364);
        const v4373 = [v4355, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4369];
        const v4374 = [v4355, v4364, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v4375 = v4372 ? v4373 : v4374;
        const v4376 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
        const v4377 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
        const v4378 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
        const v4379 = stdlib.ge(v4376, v4062);
        stdlib.assert(v4379, {
          at: './util.rsh:236:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v4380 = stdlib.le(v4376, v4317);
        stdlib.assert(v4380, {
          at: './util.rsh:237:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v4384 = stdlib.sub(v2126, v4376);
        ;
        const v4388 = stdlib.sub(v4384, v4316);
        const v4390 = stdlib.gt(v4320, v4317);
        const v4391 = v4390 ? v4320 : v4317;
        const v4392 = stdlib.lt(v4320, v4317);
        const v4393 = v4392 ? v4320 : v4317;
        const v4394 = stdlib.muldiv(v4314, v4388, v4391);
        const v4395 = stdlib.ge(v4394, v4393);
        stdlib.assert(v4395, {
          at: './util.rsh:246:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v4399 = stdlib.add(v4313, v4377);
        const v4403 = stdlib.add(v4316, v4378);
        const v4404 = {
          balA: v4399,
          balB: v4403
          };
        const v4409 = [v4376, v4377, v4378, v4388, v4314];
        await txn3.getOutput('Trader_swapAForB', 'v4409', ctc15, v4409);
        const cv2115 = v2115;
        const cv2116 = v4404;
        const cv2117 = v2117;
        const cv2118 = v2638;
        const cv2125 = v4165;
        const cv2126 = v4384;
        const cv2127 = v2127;
        
        v2115 = cv2115;
        v2116 = cv2116;
        v2117 = cv2117;
        v2118 = cv2118;
        v2125 = cv2125;
        v2126 = cv2126;
        v2127 = cv2127;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_164': {
        const v4533 = v2637[1];
        const v4534 = v4533[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
        const v4535 = v4533[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
        ;
        ;
        ;
        const v4640 = stdlib.add(v2126, v4534);
        ;
        undefined;
        const v4897 = v2116.balB;
        const v4898 = stdlib.sub(v4640, v4897);
        const v4900 = v2116.balA;
        const v4901 = stdlib.sub(v2125, v4900);
        const v4902 = stdlib.lt(v4534, v4898);
        stdlib.assert(v4902, {
          at: './util.rsh:231:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v4903 = stdlib.gt(v4534, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4903, {
          at: './util.rsh:234:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v4904 = stdlib.sub(v4898, v4534);
        const v4905 = v2117.fee;
        const v4907 = v2117.totFee;
        const v4910 = stdlib.mul(v4905, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
        const v4911 = stdlib.div(v4910, v4907);
        const v4928 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v4907);
        const v4932 = stdlib.mul(v4534, v4928);
        const v4935 = stdlib.mul(v4904, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
        const v4938 = stdlib.add(v4935, v4932);
        const v4939 = stdlib.muldiv(v4932, v4901, v4938);
        const v4940 = stdlib.gt(v4939, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4940, {
          at: './util.rsh:122:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v4943 = stdlib.add(v4904, v4534);
        const v4944 = stdlib.gt(v4943, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4944, {
          at: './util.rsh:65:4:application',
          fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4945 = stdlib.muldiv(v4534, v4901, v4943);
        const v4947 = stdlib.sub(v4945, v4939);
        const v4948 = stdlib.muldiv(v4534, v4905, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
        const v4952 = stdlib.mul(v4947, v4911);
        const v4953 = stdlib.div(v4952, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
        const v4954 = stdlib.le(v4953, v4947);
        stdlib.assert(v4954, {
          at: './util.rsh:128:4:application',
          fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v4955 = stdlib.muldiv(v4953, v4904, v4901);
        const v4956 = stdlib.ge(v4955, v4948);
        const v4957 = [v4939, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4953];
        const v4958 = [v4939, v4948, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v4959 = v4956 ? v4957 : v4958;
        const v4960 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
        const v4961 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
        const v4962 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
        const v4963 = stdlib.ge(v4960, v4535);
        stdlib.assert(v4963, {
          at: './util.rsh:236:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v4964 = stdlib.le(v4960, v4901);
        stdlib.assert(v4964, {
          at: './util.rsh:237:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v4970 = stdlib.sub(v2125, v4960);
        ;
        const v4974 = stdlib.sub(v4970, v4900);
        const v4976 = stdlib.gt(v4904, v4901);
        const v4977 = v4976 ? v4904 : v4901;
        const v4978 = stdlib.lt(v4904, v4901);
        const v4979 = v4978 ? v4904 : v4901;
        const v4980 = stdlib.muldiv(v4898, v4974, v4977);
        const v4981 = stdlib.ge(v4980, v4979);
        stdlib.assert(v4981, {
          at: './util.rsh:246:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v4985 = stdlib.add(v4900, v4962);
        const v4989 = stdlib.add(v4897, v4961);
        const v4990 = {
          balA: v4985,
          balB: v4989
          };
        const v4995 = [v4960, v4961, v4962, v4974, v4898];
        await txn3.getOutput('Trader_swapBForA', 'v4995', ctc15, v4995);
        const cv2115 = v2115;
        const cv2116 = v4990;
        const cv2117 = v2117;
        const cv2118 = v2638;
        const cv2125 = v4970;
        const cv2126 = v4640;
        const cv2127 = v2127;
        
        v2115 = cv2115;
        v2116 = cv2116;
        v2117 = cv2117;
        v2118 = cv2118;
        v2125 = cv2125;
        v2126 = cv2126;
        v2127 = cv2127;
        
        continue;
        break;
        }
      }
    
    }
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
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc5,
    Some: ctc1
    });
  const ctc8 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc6], ['newProtocolFee', ctc7], ['newProviderFee', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_164: ctc9,
    Provider_deposit0_164: ctc10,
    Provider_withdraw0_164: ctc11,
    Trader_swapAForB0_164: ctc12,
    Trader_swapBForA0_164: ctc12
    });
  
  
  const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2164 = ctc.selfAddress();
  const v2166 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:79:19:application call to "runHarvester_harvest0_164" (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Harvester_harvest'
    });
  const v2167 = v2166[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
  const v2169 = v2117.addr;
  const v2170 = v2117.fee;
  const v2171 = v2117.lpFee;
  const v2172 = stdlib.addressEq(v2164, v2169);
  stdlib.assert(v2172, {
    at: './util.rsh:264:9:application',
    fs: ['at ./index.rsh:101:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:262:54:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:79:19:application call to "runHarvester_harvest0_164" (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'Thou art not the harvester                                      ',
    who: 'Harvester_harvest'
    });
  const v2173 = v2167.newProtocolFee;
  const v2174 = v2167.newProviderFee;
  let v2175;
  switch (v2173[0]) {
    case 'None': {
      const v2176 = v2173[1];
      v2175 = v2170;
      
      break;
      }
    case 'Some': {
      const v2177 = v2173[1];
      v2175 = v2177;
      
      break;
      }
    }
  let v2178;
  switch (v2174[0]) {
    case 'None': {
      const v2179 = v2174[1];
      v2178 = v2171;
      
      break;
      }
    case 'Some': {
      const v2180 = v2174[1];
      v2178 = v2180;
      
      break;
      }
    }
  const v2182 = stdlib.add(v2175, v2178);
  const v2186 = stdlib.add(v2178, v2175);
  const v2187 = stdlib.eq(v2182, v2186);
  const v2188 = stdlib.lt(v2182, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
  const v2189 = v2187 ? v2188 : false;
  const v2190 = stdlib.gt(v2182, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
  const v2191 = v2189 ? v2190 : false;
  stdlib.assert(v2191, {
    at: './util.rsh:94:4:application',
    fs: ['at ./util.rsh:269:20:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./index.rsh:101:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:262:54:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:79:19:application call to "runHarvester_harvest0_164" (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v2193 = ['Harvester_harvest0_164', v2166];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127, v2193],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:102:21:decimal', stdlib.UInt_max, 0), v2104], [stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, 0), v2083], [stdlib.checkedBigNumberify('./index.rsh:102:43:decimal', stdlib.UInt_max, 0), v2084]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
      
      switch (v2637[0]) {
        case 'Harvester_harvest0_164': {
          const v2640 = v2637[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2104
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2083
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2084
            });
          undefined;
          const v2744 = v2640[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
          const v2748 = v2116.balA;
          const v2749 = v2116.balB;
          const v2750 = v2744.newHarvesterAddr;
          const v2751 = v2744.newProtocolFee;
          const v2752 = v2744.newProviderFee;
          const v2753 = v2744.receiver;
          const v2754 = stdlib.addressEq(v2636, v2169);
          stdlib.assert(v2754, {
            at: './util.rsh:278:10:application',
            fs: ['at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
            msg: 'Thou art not the harvester                                      ',
            who: 'Harvester_harvest'
            });
          const v2760 = stdlib.sub(v2125, v2748);
          sim_r.txns.push({
            amt: v2748,
            kind: 'from',
            to: v2753,
            tok: v2083
            });
          const v2768 = stdlib.sub(v2126, v2749);
          sim_r.txns.push({
            amt: v2749,
            kind: 'from',
            to: v2753,
            tok: v2084
            });
          const v2769 = [v2748, v2749];
          const v2770 = await txn1.getOutput('Harvester_harvest', 'v2769', ctc12, v2769);
          
          let v2775;
          switch (v2750[0]) {
            case 'None': {
              const v2776 = v2750[1];
              v2775 = v2169;
              
              break;
              }
            case 'Some': {
              const v2777 = v2750[1];
              v2775 = v2777;
              
              break;
              }
            }
          let v2778;
          switch (v2751[0]) {
            case 'None': {
              const v2779 = v2751[1];
              v2778 = v2170;
              
              break;
              }
            case 'Some': {
              const v2780 = v2751[1];
              v2778 = v2780;
              
              break;
              }
            }
          let v2781;
          switch (v2752[0]) {
            case 'None': {
              const v2782 = v2752[1];
              v2781 = v2171;
              
              break;
              }
            case 'Some': {
              const v2783 = v2752[1];
              v2781 = v2783;
              
              break;
              }
            }
          const v2785 = stdlib.add(v2778, v2781);
          const v2789 = stdlib.add(v2781, v2778);
          const v2790 = stdlib.eq(v2785, v2789);
          const v2791 = stdlib.lt(v2785, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
          const v2792 = v2790 ? v2791 : false;
          const v2793 = stdlib.gt(v2785, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
          const v2794 = v2792 ? v2793 : false;
          stdlib.assert(v2794, {
            at: './util.rsh:94:4:application',
            fs: ['at ./util.rsh:291:21:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
            msg: null,
            who: 'Harvester_harvest'
            });
          const v2795 = {
            addr: v2775,
            fee: v2778,
            lpFee: v2781,
            totFee: v2785
            };
          const v7224 = v2115;
          const v7225 = v2113;
          const v7226 = v2795;
          const v7228 = v2760;
          const v7229 = v2768;
          const v7230 = v2127;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_deposit0_164': {
          const v3108 = v2637[1];
          
          break;
          }
        case 'Provider_withdraw0_164': {
          const v3587 = v2637[1];
          
          break;
          }
        case 'Trader_swapAForB0_164': {
          const v4060 = v2637[1];
          
          break;
          }
        case 'Trader_swapBForA0_164': {
          const v4533 = v2637[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
  switch (v2637[0]) {
    case 'Harvester_harvest0_164': {
      const v2640 = v2637[1];
      ;
      ;
      ;
      ;
      undefined;
      const v2744 = v2640[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
      const v2748 = v2116.balA;
      const v2749 = v2116.balB;
      const v2750 = v2744.newHarvesterAddr;
      const v2751 = v2744.newProtocolFee;
      const v2752 = v2744.newProviderFee;
      const v2753 = v2744.receiver;
      const v2754 = stdlib.addressEq(v2636, v2169);
      stdlib.assert(v2754, {
        at: './util.rsh:278:10:application',
        fs: ['at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
        msg: 'Thou art not the harvester                                      ',
        who: 'Harvester_harvest'
        });
      const v2760 = stdlib.sub(v2125, v2748);
      ;
      const v2768 = stdlib.sub(v2126, v2749);
      ;
      const v2769 = [v2748, v2749];
      const v2770 = await txn1.getOutput('Harvester_harvest', 'v2769', ctc12, v2769);
      if (v1467) {
        stdlib.protect(ctc5, await interact.out(v2640, v2770), {
          at: './index.rsh:100:12:application',
          fs: ['at ./index.rsh:100:12:application call to [unknown function] (defined at: ./index.rsh:100:12:function exp)', 'at ./util.rsh:283:14:application call to "harvestDone" (defined at: ./index.rsh:103:28:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
          msg: 'out',
          who: 'Harvester_harvest'
          });
        }
      else {
        }
      
      let v2775;
      switch (v2750[0]) {
        case 'None': {
          const v2776 = v2750[1];
          v2775 = v2169;
          
          break;
          }
        case 'Some': {
          const v2777 = v2750[1];
          v2775 = v2777;
          
          break;
          }
        }
      let v2778;
      switch (v2751[0]) {
        case 'None': {
          const v2779 = v2751[1];
          v2778 = v2170;
          
          break;
          }
        case 'Some': {
          const v2780 = v2751[1];
          v2778 = v2780;
          
          break;
          }
        }
      let v2781;
      switch (v2752[0]) {
        case 'None': {
          const v2782 = v2752[1];
          v2781 = v2171;
          
          break;
          }
        case 'Some': {
          const v2783 = v2752[1];
          v2781 = v2783;
          
          break;
          }
        }
      const v2785 = stdlib.add(v2778, v2781);
      const v2789 = stdlib.add(v2781, v2778);
      const v2790 = stdlib.eq(v2785, v2789);
      const v2791 = stdlib.lt(v2785, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
      const v2792 = v2790 ? v2791 : false;
      const v2793 = stdlib.gt(v2785, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
      const v2794 = v2792 ? v2793 : false;
      stdlib.assert(v2794, {
        at: './util.rsh:94:4:application',
        fs: ['at ./util.rsh:291:21:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:272:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v2795 = {
        addr: v2775,
        fee: v2778,
        lpFee: v2781,
        totFee: v2785
        };
      const v7224 = v2115;
      const v7225 = v2113;
      const v7226 = v2795;
      const v7228 = v2760;
      const v7229 = v2768;
      const v7230 = v2127;
      return;
      
      break;
      }
    case 'Provider_deposit0_164': {
      const v3108 = v2637[1];
      return;
      break;
      }
    case 'Provider_withdraw0_164': {
      const v3587 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_164': {
      const v4060 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_164': {
      const v4533 = v2637[1];
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
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_164: ctc10,
    Provider_deposit0_164: ctc5,
    Provider_withdraw0_164: ctc11,
    Trader_swapAForB0_164: ctc12,
    Trader_swapBForA0_164: ctc12
    });
  
  
  const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2223 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v2224 = v2223[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
  const v2225 = v2223[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
  const v2226 = v2223[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
  const v2228 = stdlib.gt(v2224, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2228, {
    at: './index.rsh:153:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Provider_deposit'
    });
  const v2229 = stdlib.gt(v2225, stdlib.checkedBigNumberify('./index.rsh:154:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2229, {
    at: './index.rsh:154:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtB > 0',
    who: 'Provider_deposit'
    });
  const v2231 = v2116.balA;
  const v2232 = stdlib.sub(v2125, v2231);
  const v2234 = v2116.balB;
  const v2235 = stdlib.sub(v2126, v2234);
  const v2237 = stdlib.sub(stdlib.UInt_max, v2125);
  const v2238 = stdlib.ge(v2237, v2224);
  stdlib.assert(v2238, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:157:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v2239 = stdlib.add(v2125, v2224);
  const v2241 = stdlib.sub(stdlib.UInt_max, v2126);
  const v2242 = stdlib.ge(v2241, v2225);
  stdlib.assert(v2242, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:158:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v2243 = stdlib.add(v2126, v2225);
  const v2247 = stdlib.sub(stdlib.UInt_max, v2232);
  const v2248 = stdlib.ge(v2247, v2224);
  stdlib.assert(v2248, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:159:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v2249 = stdlib.add(v2232, v2224);
  const v2253 = stdlib.sub(stdlib.UInt_max, v2235);
  const v2254 = stdlib.ge(v2253, v2225);
  stdlib.assert(v2254, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:160:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v2255 = stdlib.add(v2235, v2225);
  const v2256 = stdlib.le(v2239, stdlib.UInt_max);
  stdlib.assert(v2256, {
    at: './index.rsh:161:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'actBalAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2257 = stdlib.le(v2243, stdlib.UInt_max);
  stdlib.assert(v2257, {
    at: './index.rsh:162:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'actBalBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2258 = stdlib.le(v2249, stdlib.UInt_max);
  stdlib.assert(v2258, {
    at: './index.rsh:163:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2259 = stdlib.le(v2255, stdlib.UInt_max);
  stdlib.assert(v2259, {
    at: './index.rsh:164:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2260 = stdlib.eq(v2115, stdlib.checkedBigNumberify('./index.rsh:166:47:decimal', stdlib.UInt_max, 0));
  let v2261;
  if (v2260) {
    const v2263 = stdlib.gt(v2226, stdlib.checkedBigNumberify('./util.rsh:183:15:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2263, {
      at: './util.rsh:183:5:application',
      fs: ['at ./index.rsh:167:34:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'minted > 0                                                      ',
      who: 'Provider_deposit'
      });
    const v2264 = stdlib.muldiv(v2224, v2225, v2226);
    const v2265 = stdlib.ge(v2264, v2226);
    stdlib.assert(v2265, {
      at: './util.rsh:185:4:application',
      fs: ['at ./index.rsh:167:34:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
      who: 'Provider_deposit'
      });
    const v2266 = stdlib.le(v2226, v2127);
    stdlib.assert(v2266, {
      at: './util.rsh:186:4:application',
      fs: ['at ./index.rsh:167:34:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'minted <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v2261 = v2226;
    }
  else {
    const v2268 = stdlib.gt(v2232, stdlib.checkedBigNumberify('./util.rsh:161:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2268, {
      at: './util.rsh:161:5:application',
      fs: ['at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'balA > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v2269 = stdlib.gt(v2235, stdlib.checkedBigNumberify('./util.rsh:162:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2269, {
      at: './util.rsh:162:5:application',
      fs: ['at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'balB > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v2270 = stdlib.muldiv(v2224, v2115, v2232);
    const v2271 = stdlib.muldiv(v2225, v2115, v2235);
    const v2272 = stdlib.sub(stdlib.UInt_max, v2270);
    const v2273 = stdlib.ge(v2272, v2271);
    stdlib.assert(v2273, {
      at: './util.rsh:14:4:application',
      fs: ['at ./util.rsh:54:19:application call to [unknown function] (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:165:21:application call to "avg" (defined at: ./util.rsh:53:30:function exp)', 'at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'add overflow                                                    ',
      who: 'Provider_deposit'
      });
    const v2274 = stdlib.add(v2270, v2271);
    const v2275 = stdlib.div(v2274, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
    const v2276 = stdlib.le(v2275, v2127);
    stdlib.assert(v2276, {
      at: './util.rsh:166:4:application',
      fs: ['at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'result <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v2261 = v2275;
    }
  const v2277 = stdlib.sub(stdlib.UInt_max, v2115);
  const v2278 = stdlib.ge(v2277, v2261);
  stdlib.assert(v2278, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:169:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_164" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_deposit'
    });
  const v2281 = ['Provider_deposit0_164', v2223];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127, v2281],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:171:30:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:171:35:decimal', stdlib.UInt_max, 0), v2104], [v2224, v2083], [v2225, v2084]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
      
      switch (v2637[0]) {
        case 'Harvester_harvest0_164': {
          const v2640 = v2637[1];
          
          break;
          }
        case 'Provider_deposit0_164': {
          const v3108 = v2637[1];
          const v3109 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
          const v3110 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
          const v3111 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2104
            });
          const v3219 = stdlib.add(v2125, v3109);
          sim_r.txns.push({
            amt: v3109,
            kind: 'to',
            tok: v2083
            });
          const v3221 = stdlib.add(v2126, v3110);
          sim_r.txns.push({
            amt: v3110,
            kind: 'to',
            tok: v2084
            });
          undefined;
          const v3286 = stdlib.gt(v3109, stdlib.checkedBigNumberify('./index.rsh:177:26:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3286, {
            at: './index.rsh:177:18:application',
            fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'amtA > 0',
            who: 'Provider_deposit'
            });
          const v3287 = stdlib.gt(v3110, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3287, {
            at: './index.rsh:178:18:application',
            fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'amtB > 0',
            who: 'Provider_deposit'
            });
          const v3290 = stdlib.sub(v3219, v2231);
          const v3293 = stdlib.sub(v3221, v2234);
          let v3297;
          if (v2260) {
            const v3300 = stdlib.muldiv(v3109, v3110, v3111);
            const v3301 = stdlib.ge(v3300, v3111);
            stdlib.assert(v3301, {
              at: './util.rsh:185:4:application',
              fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
              msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
              who: 'Provider_deposit'
              });
            const v3302 = stdlib.le(v3111, v2127);
            stdlib.assert(v3302, {
              at: './util.rsh:186:4:application',
              fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
              msg: 'minted <= poolBalance                                           ',
              who: 'Provider_deposit'
              });
            v3297 = v3111;
            }
          else {
            const v3303 = stdlib.sub(v3290, v3109);
            const v3304 = stdlib.sub(v3293, v3110);
            const v3308 = stdlib.muldiv(v3109, v2115, v3303);
            const v3309 = stdlib.muldiv(v3110, v2115, v3304);
            const v3312 = stdlib.add(v3308, v3309);
            const v3313 = stdlib.div(v3312, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
            const v3314 = stdlib.le(v3313, v2127);
            stdlib.assert(v3314, {
              at: './util.rsh:166:4:application',
              fs: ['at ./index.rsh:187:34:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
              msg: 'result <= poolBalance                                           ',
              who: 'Provider_deposit'
              });
            v3297 = v3313;
            }
          const v3318 = stdlib.sub(v2127, v3297);
          sim_r.txns.push({
            amt: v3297,
            kind: 'from',
            to: v2636,
            tok: v2104
            });
          const v3319 = stdlib.add(v2115, v3297);
          const v3323 = await txn1.getOutput('Provider_deposit', 'v3297', ctc1, v3297);
          
          const v7266 = v3319;
          const v7267 = v2116;
          const v7268 = v2117;
          const v7270 = v3219;
          const v7271 = v3221;
          const v7272 = v3318;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_164': {
          const v3587 = v2637[1];
          
          break;
          }
        case 'Trader_swapAForB0_164': {
          const v4060 = v2637[1];
          
          break;
          }
        case 'Trader_swapBForA0_164': {
          const v4533 = v2637[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
  switch (v2637[0]) {
    case 'Harvester_harvest0_164': {
      const v2640 = v2637[1];
      return;
      break;
      }
    case 'Provider_deposit0_164': {
      const v3108 = v2637[1];
      const v3109 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
      const v3110 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
      const v3111 = v3108[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
      ;
      ;
      const v3219 = stdlib.add(v2125, v3109);
      ;
      const v3221 = stdlib.add(v2126, v3110);
      ;
      undefined;
      const v3286 = stdlib.gt(v3109, stdlib.checkedBigNumberify('./index.rsh:177:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3286, {
        at: './index.rsh:177:18:application',
        fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
        msg: 'amtA > 0',
        who: 'Provider_deposit'
        });
      const v3287 = stdlib.gt(v3110, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3287, {
        at: './index.rsh:178:18:application',
        fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
        msg: 'amtB > 0',
        who: 'Provider_deposit'
        });
      const v3290 = stdlib.sub(v3219, v2231);
      const v3293 = stdlib.sub(v3221, v2234);
      let v3297;
      if (v2260) {
        const v3300 = stdlib.muldiv(v3109, v3110, v3111);
        const v3301 = stdlib.ge(v3300, v3111);
        stdlib.assert(v3301, {
          at: './util.rsh:185:4:application',
          fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
          who: 'Provider_deposit'
          });
        const v3302 = stdlib.le(v3111, v2127);
        stdlib.assert(v3302, {
          at: './util.rsh:186:4:application',
          fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:182:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'minted <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v3297 = v3111;
        }
      else {
        const v3303 = stdlib.sub(v3290, v3109);
        const v3304 = stdlib.sub(v3293, v3110);
        const v3308 = stdlib.muldiv(v3109, v2115, v3303);
        const v3309 = stdlib.muldiv(v3110, v2115, v3304);
        const v3312 = stdlib.add(v3308, v3309);
        const v3313 = stdlib.div(v3312, stdlib.checkedBigNumberify('./util.rsh:54:28:decimal', stdlib.UInt_max, 2));
        const v3314 = stdlib.le(v3313, v2127);
        stdlib.assert(v3314, {
          at: './util.rsh:166:4:application',
          fs: ['at ./index.rsh:187:34:application call to [unknown function] (defined at: ./util.rsh:160:87:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'result <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v3297 = v3313;
        }
      const v3318 = stdlib.sub(v2127, v3297);
      ;
      const v3319 = stdlib.add(v2115, v3297);
      const v3323 = await txn1.getOutput('Provider_deposit', 'v3297', ctc1, v3297);
      if (v1467) {
        stdlib.protect(ctc6, await interact.out(v3108, v3323), {
          at: './index.rsh:151:12:application',
          fs: ['at ./index.rsh:151:12:application call to [unknown function] (defined at: ./index.rsh:151:12:function exp)', 'at ./index.rsh:196:22:application call to "depositDone" (defined at: ./index.rsh:176:46:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v7266 = v3319;
      const v7267 = v2116;
      const v7268 = v2117;
      const v7270 = v3219;
      const v7271 = v3221;
      const v7272 = v3318;
      return;
      
      break;
      }
    case 'Provider_withdraw0_164': {
      const v3587 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_164': {
      const v4060 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_164': {
      const v4533 = v2637[1];
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
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_164: ctc10,
    Provider_deposit0_164: ctc11,
    Provider_withdraw0_164: ctc5,
    Trader_swapAForB0_164: ctc12,
    Trader_swapBForA0_164: ctc12
    });
  const ctc14 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  
  const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2197 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v2198 = v2197[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
  const v2200 = stdlib.gt(v2115, stdlib.checkedBigNumberify('./index.rsh:107:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2200, {
    at: './index.rsh:107:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'There has been liquidity dispensed.',
    who: 'Provider_withdraw'
    });
  const v2201 = stdlib.le(v2198, v2115);
  stdlib.assert(v2201, {
    at: './index.rsh:108:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'liquidity less than total',
    who: 'Provider_withdraw'
    });
  const v2203 = v2116.balA;
  const v2204 = stdlib.sub(v2125, v2203);
  const v2206 = v2116.balB;
  const v2207 = stdlib.sub(v2126, v2206);
  const v2208 = stdlib.gt(v2204, stdlib.checkedBigNumberify('./index.rsh:111:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2208, {
    at: './index.rsh:111:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2209 = stdlib.gt(v2207, stdlib.checkedBigNumberify('./index.rsh:112:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2209, {
    at: './index.rsh:112:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2210 = stdlib.muldiv(v2198, v2204, v2115);
  const v2211 = stdlib.le(v2210, v2204);
  stdlib.assert(v2211, {
    at: './index.rsh:114:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2212 = stdlib.muldiv(v2198, v2207, v2115);
  const v2213 = stdlib.le(v2212, v2207);
  stdlib.assert(v2213, {
    at: './index.rsh:116:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2215 = stdlib.sub(stdlib.UInt_max, v2127);
  const v2216 = stdlib.ge(v2215, v2198);
  stdlib.assert(v2216, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:117:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_164" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_withdraw'
    });
  const v2219 = ['Provider_withdraw0_164', v2197];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127, v2219],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:28:decimal', stdlib.UInt_max, 0), [[v2198, v2104], [stdlib.checkedBigNumberify('./index.rsh:120:54:decimal', stdlib.UInt_max, 0), v2083], [stdlib.checkedBigNumberify('./index.rsh:120:67:decimal', stdlib.UInt_max, 0), v2084]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
      
      switch (v2637[0]) {
        case 'Harvester_harvest0_164': {
          const v2640 = v2637[1];
          
          break;
          }
        case 'Provider_deposit0_164': {
          const v3108 = v2637[1];
          
          break;
          }
        case 'Provider_withdraw0_164': {
          const v3587 = v2637[1];
          const v3588 = v3587[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v3690 = stdlib.add(v2127, v3588);
          sim_r.txns.push({
            amt: v3588,
            kind: 'to',
            tok: v2104
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2083
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2084
            });
          undefined;
          const v3814 = stdlib.muldiv(v3588, v2204, v2115);
          const v3815 = stdlib.le(v3814, v2204);
          stdlib.assert(v3815, {
            at: './index.rsh:135:18:application',
            fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
            msg: null,
            who: 'Provider_withdraw'
            });
          const v3821 = stdlib.sub(v2125, v3814);
          sim_r.txns.push({
            amt: v3814,
            kind: 'from',
            to: v2636,
            tok: v2083
            });
          const v3822 = stdlib.muldiv(v3588, v2207, v2115);
          const v3823 = stdlib.le(v3822, v2207);
          stdlib.assert(v3823, {
            at: './index.rsh:140:18:application',
            fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
            msg: null,
            who: 'Provider_withdraw'
            });
          const v3827 = stdlib.sub(v2126, v3822);
          sim_r.txns.push({
            amt: v3822,
            kind: 'from',
            to: v2636,
            tok: v2084
            });
          const v3828 = stdlib.sub(v2115, v3588);
          const v3829 = [v3814, v3822];
          const v3830 = await txn1.getOutput('Provider_withdraw', 'v3829', ctc14, v3829);
          
          const v7308 = v3828;
          const v7309 = v2116;
          const v7310 = v2117;
          const v7312 = v3821;
          const v7313 = v3827;
          const v7314 = v3690;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_164': {
          const v4060 = v2637[1];
          
          break;
          }
        case 'Trader_swapBForA0_164': {
          const v4533 = v2637[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
  switch (v2637[0]) {
    case 'Harvester_harvest0_164': {
      const v2640 = v2637[1];
      return;
      break;
      }
    case 'Provider_deposit0_164': {
      const v3108 = v2637[1];
      return;
      break;
      }
    case 'Provider_withdraw0_164': {
      const v3587 = v2637[1];
      const v3588 = v3587[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
      ;
      const v3690 = stdlib.add(v2127, v3588);
      ;
      ;
      ;
      undefined;
      const v3814 = stdlib.muldiv(v3588, v2204, v2115);
      const v3815 = stdlib.le(v3814, v2204);
      stdlib.assert(v3815, {
        at: './index.rsh:135:18:application',
        fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v3821 = stdlib.sub(v2125, v3814);
      ;
      const v3822 = stdlib.muldiv(v3588, v2207, v2115);
      const v3823 = stdlib.le(v3822, v2207);
      stdlib.assert(v3823, {
        at: './index.rsh:140:18:application',
        fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v3827 = stdlib.sub(v2126, v3822);
      ;
      const v3828 = stdlib.sub(v2115, v3588);
      const v3829 = [v3814, v3822];
      const v3830 = await txn1.getOutput('Provider_withdraw', 'v3829', ctc14, v3829);
      if (v1467) {
        stdlib.protect(ctc6, await interact.out(v3587, v3830), {
          at: './index.rsh:105:12:application',
          fs: ['at ./index.rsh:105:12:application call to [unknown function] (defined at: ./index.rsh:105:12:function exp)', 'at ./index.rsh:146:23:application call to "withdrawDone" (defined at: ./index.rsh:123:35:function exp)', 'at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v7308 = v3828;
      const v7309 = v2116;
      const v7310 = v2117;
      const v7312 = v3821;
      const v7313 = v3827;
      const v7314 = v3690;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_164': {
      const v4060 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_164': {
      const v4533 = v2637[1];
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
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_164: ctc10,
    Provider_deposit0_164: ctc11,
    Provider_withdraw0_164: ctc12,
    Trader_swapAForB0_164: ctc5,
    Trader_swapBForA0_164: ctc5
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2285 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v2286 = v2285[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
  const v2287 = v2285[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
  const v2290 = v2116.balA;
  const v2291 = stdlib.sub(v2125, v2290);
  const v2293 = v2116.balB;
  const v2294 = stdlib.sub(v2126, v2293);
  const v2295 = stdlib.gt(v2286, stdlib.checkedBigNumberify('./util.rsh:195:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2295, {
    at: './util.rsh:195:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapAForB'
    });
  const v2296 = stdlib.gt(v2291, v2286);
  stdlib.assert(v2296, {
    at: './util.rsh:196:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapAForB'
    });
  const v2297 = stdlib.gt(v2294, stdlib.checkedBigNumberify('./util.rsh:197:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2297, {
    at: './util.rsh:197:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapAForB'
    });
  const v2298 = stdlib.gt(v2287, stdlib.checkedBigNumberify('./util.rsh:198:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2298, {
    at: './util.rsh:198:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2299 = stdlib.lt(v2287, v2294);
  stdlib.assert(v2299, {
    at: './util.rsh:199:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2301 = stdlib.sub(stdlib.UInt_max, v2125);
  const v2302 = stdlib.ge(v2301, v2286);
  stdlib.assert(v2302, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:201:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v2303 = stdlib.add(v2125, v2286);
  const v2304 = stdlib.lt(v2303, stdlib.UInt_max);
  stdlib.assert(v2304, {
    at: './util.rsh:202:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2305 = stdlib.sub(stdlib.UInt_max, v2291);
  const v2306 = stdlib.ge(v2305, v2286);
  stdlib.assert(v2306, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:203:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v2307 = stdlib.add(v2291, v2286);
  const v2308 = stdlib.lt(v2307, stdlib.UInt_max);
  stdlib.assert(v2308, {
    at: './util.rsh:204:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2309 = stdlib.lt(v2294, stdlib.UInt_max);
  stdlib.assert(v2309, {
    at: './util.rsh:205:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2310 = v2117.fee;
  const v2311 = v2117.lpFee;
  const v2312 = v2117.totFee;
  const v2315 = stdlib.mul(v2310, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
  const v2316 = stdlib.div(v2315, v2312);
  const v2326 = stdlib.add(v2311, v2310);
  const v2327 = stdlib.eq(v2312, v2326);
  const v2328 = stdlib.lt(v2312, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
  const v2329 = v2327 ? v2328 : false;
  const v2330 = stdlib.gt(v2312, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
  const v2331 = v2329 ? v2330 : false;
  stdlib.assert(v2331, {
    at: './util.rsh:94:4:application',
    fs: ['at ./util.rsh:100:15:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2333 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v2312);
  const v2334 = stdlib.gt(v2333, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2334, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v2335 = stdlib.div(stdlib.UInt_max, v2333);
  const v2336 = stdlib.le(v2286, v2335);
  stdlib.assert(v2336, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2337 = stdlib.mul(v2286, v2333);
  const v2338 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2339 = stdlib.le(v2291, v2338);
  stdlib.assert(v2339, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:104:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2340 = stdlib.mul(v2291, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2341 = stdlib.sub(stdlib.UInt_max, v2340);
  const v2342 = stdlib.ge(v2341, v2337);
  stdlib.assert(v2342, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2343 = stdlib.add(v2340, v2337);
  const v2344 = stdlib.muldiv(v2337, v2294, v2343);
  const v2345 = stdlib.gt(v2344, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2345, {
    at: './util.rsh:122:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2349 = stdlib.gt(v2307, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2349, {
    at: './util.rsh:65:4:application',
    fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2350 = stdlib.muldiv(v2286, v2294, v2307);
  const v2351 = stdlib.ge(v2350, v2344);
  stdlib.assert(v2351, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:124:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapAForB'
    });
  const v2352 = stdlib.sub(v2350, v2344);
  const v2353 = stdlib.muldiv(v2286, v2310, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
  const v2354 = stdlib.gt(v2316, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2354, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v2355 = stdlib.div(stdlib.UInt_max, v2316);
  const v2356 = stdlib.le(v2352, v2355);
  stdlib.assert(v2356, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapAForB'
    });
  const v2357 = stdlib.mul(v2352, v2316);
  const v2358 = stdlib.div(v2357, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
  const v2359 = stdlib.le(v2358, v2352);
  stdlib.assert(v2359, {
    at: './util.rsh:128:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapAForB'
    });
  const v2360 = stdlib.muldiv(v2358, v2291, v2294);
  const v2361 = stdlib.ge(v2360, v2353);
  const v2362 = [v2344, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2358];
  const v2363 = [v2344, v2353, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v2364 = v2361 ? v2362 : v2363;
  const v2365 = v2364[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 0)];
  const v2366 = v2364[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 1)];
  const v2367 = v2364[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 2)];
  const v2368 = stdlib.ge(v2365, v2287);
  stdlib.assert(v2368, {
    at: './util.rsh:208:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapAForB'
    });
  const v2369 = stdlib.le(v2365, v2294);
  stdlib.assert(v2369, {
    at: './util.rsh:209:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapAForB'
    });
  const v2370 = stdlib.sub(v2294, v2365);
  const v2372 = stdlib.sub(v2126, v2365);
  const v2375 = stdlib.sub(stdlib.UInt_max, v2290);
  const v2376 = stdlib.ge(v2375, v2366);
  stdlib.assert(v2376, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:215:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2377 = stdlib.add(v2290, v2366);
  const v2378 = stdlib.le(v2377, v2303);
  stdlib.assert(v2378, {
    at: './util.rsh:216:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2379 = stdlib.sub(stdlib.UInt_max, v2293);
  const v2380 = stdlib.ge(v2379, v2367);
  stdlib.assert(v2380, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:217:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2381 = stdlib.add(v2293, v2367);
  const v2382 = stdlib.le(v2381, v2372);
  stdlib.assert(v2382, {
    at: './util.rsh:218:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2396 = stdlib.gt(v2291, v2294);
  const v2397 = v2396 ? v2291 : v2294;
  const v2398 = stdlib.lt(v2291, v2294);
  const v2399 = v2398 ? v2291 : v2294;
  const v2400 = stdlib.muldiv(v2307, v2370, v2397);
  const v2401 = stdlib.ge(v2400, v2399);
  stdlib.assert(v2401, {
    at: './util.rsh:225:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_164" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapAForB'
    });
  const v2403 = ['Trader_swapAForB0_164', v2285];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127, v2403],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:204:26:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, 0), v2104], [v2286, v2083], [stdlib.checkedBigNumberify('./index.rsh:204:59:decimal', stdlib.UInt_max, 0), v2084]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
      
      switch (v2637[0]) {
        case 'Harvester_harvest0_164': {
          const v2640 = v2637[1];
          
          break;
          }
        case 'Provider_deposit0_164': {
          const v3108 = v2637[1];
          
          break;
          }
        case 'Provider_withdraw0_164': {
          const v3587 = v2637[1];
          
          break;
          }
        case 'Trader_swapAForB0_164': {
          const v4060 = v2637[1];
          const v4061 = v4060[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
          const v4062 = v4060[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2104
            });
          const v4165 = stdlib.add(v2125, v4061);
          sim_r.txns.push({
            amt: v4061,
            kind: 'to',
            tok: v2083
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2084
            });
          undefined;
          const v4314 = stdlib.sub(v4165, v2290);
          const v4318 = stdlib.lt(v4061, v4314);
          stdlib.assert(v4318, {
            at: './util.rsh:231:10:application',
            fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'amtIn <= balance(amtInTok)',
            who: 'Trader_swapAForB'
            });
          const v4319 = stdlib.gt(v4061, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4319, {
            at: './util.rsh:234:10:application',
            fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'amtIn > 0',
            who: 'Trader_swapAForB'
            });
          const v4320 = stdlib.sub(v4314, v4061);
          const v4348 = stdlib.mul(v4061, v2333);
          const v4351 = stdlib.mul(v4320, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
          const v4354 = stdlib.add(v4351, v4348);
          const v4355 = stdlib.muldiv(v4348, v2294, v4354);
          const v4356 = stdlib.gt(v4355, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4356, {
            at: './util.rsh:122:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'amtOut > 0',
            who: 'Trader_swapAForB'
            });
          const v4359 = stdlib.add(v4320, v4061);
          const v4360 = stdlib.gt(v4359, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4360, {
            at: './util.rsh:65:4:application',
            fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: null,
            who: 'Trader_swapAForB'
            });
          const v4361 = stdlib.muldiv(v4061, v2294, v4359);
          const v4363 = stdlib.sub(v4361, v4355);
          const v4364 = stdlib.muldiv(v4061, v2310, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
          const v4368 = stdlib.mul(v4363, v2316);
          const v4369 = stdlib.div(v4368, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
          const v4370 = stdlib.le(v4369, v4363);
          stdlib.assert(v4370, {
            at: './util.rsh:128:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'pFeeOut <= outFee',
            who: 'Trader_swapAForB'
            });
          const v4371 = stdlib.muldiv(v4369, v4320, v2294);
          const v4372 = stdlib.ge(v4371, v4364);
          const v4373 = [v4355, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4369];
          const v4374 = [v4355, v4364, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v4375 = v4372 ? v4373 : v4374;
          const v4376 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
          const v4377 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
          const v4378 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
          const v4379 = stdlib.ge(v4376, v4062);
          stdlib.assert(v4379, {
            at: './util.rsh:236:10:application',
            fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'out >= expectedOut',
            who: 'Trader_swapAForB'
            });
          const v4380 = stdlib.le(v4376, v2294);
          stdlib.assert(v4380, {
            at: './util.rsh:237:10:application',
            fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'amtOut <= bal(out)',
            who: 'Trader_swapAForB'
            });
          const v4384 = stdlib.sub(v2126, v4376);
          sim_r.txns.push({
            amt: v4376,
            kind: 'from',
            to: v2636,
            tok: v2084
            });
          const v4388 = stdlib.sub(v4384, v2293);
          const v4390 = stdlib.gt(v4320, v2294);
          const v4391 = v4390 ? v4320 : v2294;
          const v4392 = stdlib.lt(v4320, v2294);
          const v4393 = v4392 ? v4320 : v2294;
          const v4394 = stdlib.muldiv(v4314, v4388, v4391);
          const v4395 = stdlib.ge(v4394, v4393);
          stdlib.assert(v4395, {
            at: './util.rsh:246:10:application',
            fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
            msg: 'newK >= market.k',
            who: 'Trader_swapAForB'
            });
          const v4399 = stdlib.add(v2290, v4377);
          const v4403 = stdlib.add(v2293, v4378);
          const v4404 = {
            balA: v4399,
            balB: v4403
            };
          const v4409 = [v4376, v4377, v4378, v4388, v4314];
          const v4410 = await txn1.getOutput('Trader_swapAForB', 'v4409', ctc14, v4409);
          
          const v7350 = v2115;
          const v7351 = v4404;
          const v7352 = v2117;
          const v7354 = v4165;
          const v7355 = v4384;
          const v7356 = v2127;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_164': {
          const v4533 = v2637[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
  switch (v2637[0]) {
    case 'Harvester_harvest0_164': {
      const v2640 = v2637[1];
      return;
      break;
      }
    case 'Provider_deposit0_164': {
      const v3108 = v2637[1];
      return;
      break;
      }
    case 'Provider_withdraw0_164': {
      const v3587 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_164': {
      const v4060 = v2637[1];
      const v4061 = v4060[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
      const v4062 = v4060[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
      ;
      ;
      const v4165 = stdlib.add(v2125, v4061);
      ;
      ;
      undefined;
      const v4314 = stdlib.sub(v4165, v2290);
      const v4318 = stdlib.lt(v4061, v4314);
      stdlib.assert(v4318, {
        at: './util.rsh:231:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapAForB'
        });
      const v4319 = stdlib.gt(v4061, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4319, {
        at: './util.rsh:234:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapAForB'
        });
      const v4320 = stdlib.sub(v4314, v4061);
      const v4348 = stdlib.mul(v4061, v2333);
      const v4351 = stdlib.mul(v4320, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
      const v4354 = stdlib.add(v4351, v4348);
      const v4355 = stdlib.muldiv(v4348, v2294, v4354);
      const v4356 = stdlib.gt(v4355, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4356, {
        at: './util.rsh:122:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapAForB'
        });
      const v4359 = stdlib.add(v4320, v4061);
      const v4360 = stdlib.gt(v4359, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4360, {
        at: './util.rsh:65:4:application',
        fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v4361 = stdlib.muldiv(v4061, v2294, v4359);
      const v4363 = stdlib.sub(v4361, v4355);
      const v4364 = stdlib.muldiv(v4061, v2310, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
      const v4368 = stdlib.mul(v4363, v2316);
      const v4369 = stdlib.div(v4368, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
      const v4370 = stdlib.le(v4369, v4363);
      stdlib.assert(v4370, {
        at: './util.rsh:128:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapAForB'
        });
      const v4371 = stdlib.muldiv(v4369, v4320, v2294);
      const v4372 = stdlib.ge(v4371, v4364);
      const v4373 = [v4355, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4369];
      const v4374 = [v4355, v4364, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v4375 = v4372 ? v4373 : v4374;
      const v4376 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
      const v4377 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
      const v4378 = v4375[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
      const v4379 = stdlib.ge(v4376, v4062);
      stdlib.assert(v4379, {
        at: './util.rsh:236:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapAForB'
        });
      const v4380 = stdlib.le(v4376, v2294);
      stdlib.assert(v4380, {
        at: './util.rsh:237:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapAForB'
        });
      const v4384 = stdlib.sub(v2126, v4376);
      ;
      const v4388 = stdlib.sub(v4384, v2293);
      const v4390 = stdlib.gt(v4320, v2294);
      const v4391 = v4390 ? v4320 : v2294;
      const v4392 = stdlib.lt(v4320, v2294);
      const v4393 = v4392 ? v4320 : v2294;
      const v4394 = stdlib.muldiv(v4314, v4388, v4391);
      const v4395 = stdlib.ge(v4394, v4393);
      stdlib.assert(v4395, {
        at: './util.rsh:246:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapAForB'
        });
      const v4399 = stdlib.add(v2290, v4377);
      const v4403 = stdlib.add(v2293, v4378);
      const v4404 = {
        balA: v4399,
        balB: v4403
        };
      const v4409 = [v4376, v4377, v4378, v4388, v4314];
      const v4410 = await txn1.getOutput('Trader_swapAForB', 'v4409', ctc14, v4409);
      if (v1467) {
        stdlib.protect(ctc6, await interact.out(v4060, v4410), {
          at: './index.rsh:201:12:application',
          fs: ['at ./index.rsh:201:12:application call to [unknown function] (defined at: ./index.rsh:201:12:function exp)', 'at ./util.rsh:253:12:application call to "tradeDone" (defined at: ./index.rsh:207:40:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v7350 = v2115;
      const v7351 = v4404;
      const v7352 = v2117;
      const v7354 = v4165;
      const v7355 = v4384;
      const v7356 = v2127;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_164': {
      const v4533 = v2637[1];
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
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc1
    });
  const ctc9 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc7], ['newProtocolFee', ctc8], ['newProviderFee', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_164: ctc10,
    Provider_deposit0_164: ctc11,
    Provider_withdraw0_164: ctc12,
    Trader_swapAForB0_164: ctc5,
    Trader_swapBForA0_164: ctc5
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1]);
  const v2407 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v2408 = v2407[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
  const v2409 = v2407[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
  const v2412 = v2116.balB;
  const v2413 = stdlib.sub(v2126, v2412);
  const v2415 = v2116.balA;
  const v2416 = stdlib.sub(v2125, v2415);
  const v2417 = stdlib.gt(v2408, stdlib.checkedBigNumberify('./util.rsh:195:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2417, {
    at: './util.rsh:195:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapBForA'
    });
  const v2418 = stdlib.gt(v2413, v2408);
  stdlib.assert(v2418, {
    at: './util.rsh:196:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapBForA'
    });
  const v2419 = stdlib.gt(v2416, stdlib.checkedBigNumberify('./util.rsh:197:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2419, {
    at: './util.rsh:197:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapBForA'
    });
  const v2420 = stdlib.gt(v2409, stdlib.checkedBigNumberify('./util.rsh:198:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2420, {
    at: './util.rsh:198:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2421 = stdlib.lt(v2409, v2416);
  stdlib.assert(v2421, {
    at: './util.rsh:199:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2423 = stdlib.sub(stdlib.UInt_max, v2126);
  const v2424 = stdlib.ge(v2423, v2408);
  stdlib.assert(v2424, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:201:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v2425 = stdlib.add(v2126, v2408);
  const v2426 = stdlib.lt(v2425, stdlib.UInt_max);
  stdlib.assert(v2426, {
    at: './util.rsh:202:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2427 = stdlib.sub(stdlib.UInt_max, v2413);
  const v2428 = stdlib.ge(v2427, v2408);
  stdlib.assert(v2428, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:203:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v2429 = stdlib.add(v2413, v2408);
  const v2430 = stdlib.lt(v2429, stdlib.UInt_max);
  stdlib.assert(v2430, {
    at: './util.rsh:204:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2431 = stdlib.lt(v2416, stdlib.UInt_max);
  stdlib.assert(v2431, {
    at: './util.rsh:205:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2432 = v2117.fee;
  const v2433 = v2117.lpFee;
  const v2434 = v2117.totFee;
  const v2437 = stdlib.mul(v2432, stdlib.checkedBigNumberify('./util.rsh:117:38:decimal', stdlib.UInt_max, 100));
  const v2438 = stdlib.div(v2437, v2434);
  const v2448 = stdlib.add(v2433, v2432);
  const v2449 = stdlib.eq(v2434, v2448);
  const v2450 = stdlib.lt(v2434, stdlib.checkedBigNumberify('./util.rsh:90:95:decimal', stdlib.UInt_max, 100));
  const v2451 = v2449 ? v2450 : false;
  const v2452 = stdlib.gt(v2434, stdlib.checkedBigNumberify('./util.rsh:90:111:decimal', stdlib.UInt_max, 0));
  const v2453 = v2451 ? v2452 : false;
  stdlib.assert(v2453, {
    at: './util.rsh:94:4:application',
    fs: ['at ./util.rsh:100:15:application call to [unknown function] (defined at: ./util.rsh:92:37:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2455 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:102:15:decimal', stdlib.UInt_max, 10000), v2434);
  const v2456 = stdlib.gt(v2455, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2456, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v2457 = stdlib.div(stdlib.UInt_max, v2455);
  const v2458 = stdlib.le(v2408, v2457);
  stdlib.assert(v2458, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:103:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2459 = stdlib.mul(v2408, v2455);
  const v2460 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2461 = stdlib.le(v2413, v2460);
  stdlib.assert(v2461, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:104:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2462 = stdlib.mul(v2413, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
  const v2463 = stdlib.sub(stdlib.UInt_max, v2462);
  const v2464 = stdlib.ge(v2463, v2459);
  stdlib.assert(v2464, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:121:36:application call to [unknown function] (defined at: ./util.rsh:97:68:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2465 = stdlib.add(v2462, v2459);
  const v2466 = stdlib.muldiv(v2459, v2416, v2465);
  const v2467 = stdlib.gt(v2466, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2467, {
    at: './util.rsh:122:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2471 = stdlib.gt(v2429, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2471, {
    at: './util.rsh:65:4:application',
    fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2472 = stdlib.muldiv(v2408, v2416, v2429);
  const v2473 = stdlib.ge(v2472, v2466);
  stdlib.assert(v2473, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:124:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapBForA'
    });
  const v2474 = stdlib.sub(v2472, v2466);
  const v2475 = stdlib.muldiv(v2408, v2432, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
  const v2476 = stdlib.gt(v2438, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2476, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v2477 = stdlib.div(stdlib.UInt_max, v2438);
  const v2478 = stdlib.le(v2474, v2477);
  stdlib.assert(v2478, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:127:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapBForA'
    });
  const v2479 = stdlib.mul(v2474, v2438);
  const v2480 = stdlib.div(v2479, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
  const v2481 = stdlib.le(v2480, v2474);
  stdlib.assert(v2481, {
    at: './util.rsh:128:4:application',
    fs: ['at ./util.rsh:207:60:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapBForA'
    });
  const v2482 = stdlib.muldiv(v2480, v2413, v2416);
  const v2483 = stdlib.ge(v2482, v2475);
  const v2484 = [v2466, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2480];
  const v2485 = [v2466, v2475, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v2486 = v2483 ? v2484 : v2485;
  const v2487 = v2486[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 0)];
  const v2488 = v2486[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 1)];
  const v2489 = v2486[stdlib.checkedBigNumberify('./util.rsh:207:9:array', stdlib.UInt_max, 2)];
  const v2490 = stdlib.ge(v2487, v2409);
  stdlib.assert(v2490, {
    at: './util.rsh:208:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapBForA'
    });
  const v2491 = stdlib.le(v2487, v2416);
  stdlib.assert(v2491, {
    at: './util.rsh:209:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapBForA'
    });
  const v2492 = stdlib.sub(v2416, v2487);
  const v2494 = stdlib.sub(v2125, v2487);
  const v2497 = stdlib.sub(stdlib.UInt_max, v2412);
  const v2498 = stdlib.ge(v2497, v2488);
  stdlib.assert(v2498, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:215:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2499 = stdlib.add(v2412, v2488);
  const v2500 = stdlib.le(v2499, v2425);
  stdlib.assert(v2500, {
    at: './util.rsh:216:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2501 = stdlib.sub(stdlib.UInt_max, v2415);
  const v2502 = stdlib.ge(v2501, v2489);
  stdlib.assert(v2502, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:217:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2503 = stdlib.add(v2415, v2489);
  const v2504 = stdlib.le(v2503, v2494);
  stdlib.assert(v2504, {
    at: './util.rsh:218:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2518 = stdlib.gt(v2413, v2416);
  const v2519 = v2518 ? v2413 : v2416;
  const v2520 = stdlib.lt(v2413, v2416);
  const v2521 = v2520 ? v2413 : v2416;
  const v2522 = stdlib.muldiv(v2429, v2492, v2519);
  const v2523 = stdlib.ge(v2522, v2521);
  stdlib.assert(v2523, {
    at: './util.rsh:225:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:192:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_164" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapBForA'
    });
  const v2525 = ['Trader_swapBForA0_164', v2407];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2083, v2084, v2104, v2113, v2115, v2116, v2117, v2125, v2126, v2127, v2525],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:222:26:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:222:31:decimal', stdlib.UInt_max, 0), v2104], [stdlib.checkedBigNumberify('./index.rsh:222:44:decimal', stdlib.UInt_max, 0), v2083], [v2408, v2084]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
      
      switch (v2637[0]) {
        case 'Harvester_harvest0_164': {
          const v2640 = v2637[1];
          
          break;
          }
        case 'Provider_deposit0_164': {
          const v3108 = v2637[1];
          
          break;
          }
        case 'Provider_withdraw0_164': {
          const v3587 = v2637[1];
          
          break;
          }
        case 'Trader_swapAForB0_164': {
          const v4060 = v2637[1];
          
          break;
          }
        case 'Trader_swapBForA0_164': {
          const v4533 = v2637[1];
          const v4534 = v4533[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
          const v4535 = v4533[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2104
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v2083
            });
          const v4640 = stdlib.add(v2126, v4534);
          sim_r.txns.push({
            amt: v4534,
            kind: 'to',
            tok: v2084
            });
          undefined;
          const v4898 = stdlib.sub(v4640, v2412);
          const v4902 = stdlib.lt(v4534, v4898);
          stdlib.assert(v4902, {
            at: './util.rsh:231:10:application',
            fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'amtIn <= balance(amtInTok)',
            who: 'Trader_swapBForA'
            });
          const v4903 = stdlib.gt(v4534, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4903, {
            at: './util.rsh:234:10:application',
            fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'amtIn > 0',
            who: 'Trader_swapBForA'
            });
          const v4904 = stdlib.sub(v4898, v4534);
          const v4932 = stdlib.mul(v4534, v2455);
          const v4935 = stdlib.mul(v4904, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
          const v4938 = stdlib.add(v4935, v4932);
          const v4939 = stdlib.muldiv(v4932, v2416, v4938);
          const v4940 = stdlib.gt(v4939, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4940, {
            at: './util.rsh:122:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'amtOut > 0',
            who: 'Trader_swapBForA'
            });
          const v4943 = stdlib.add(v4904, v4534);
          const v4944 = stdlib.gt(v4943, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4944, {
            at: './util.rsh:65:4:application',
            fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: null,
            who: 'Trader_swapBForA'
            });
          const v4945 = stdlib.muldiv(v4534, v2416, v4943);
          const v4947 = stdlib.sub(v4945, v4939);
          const v4948 = stdlib.muldiv(v4534, v2432, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
          const v4952 = stdlib.mul(v4947, v2438);
          const v4953 = stdlib.div(v4952, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
          const v4954 = stdlib.le(v4953, v4947);
          stdlib.assert(v4954, {
            at: './util.rsh:128:4:application',
            fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'pFeeOut <= outFee',
            who: 'Trader_swapBForA'
            });
          const v4955 = stdlib.muldiv(v4953, v4904, v2416);
          const v4956 = stdlib.ge(v4955, v4948);
          const v4957 = [v4939, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4953];
          const v4958 = [v4939, v4948, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v4959 = v4956 ? v4957 : v4958;
          const v4960 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
          const v4961 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
          const v4962 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
          const v4963 = stdlib.ge(v4960, v4535);
          stdlib.assert(v4963, {
            at: './util.rsh:236:10:application',
            fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'out >= expectedOut',
            who: 'Trader_swapBForA'
            });
          const v4964 = stdlib.le(v4960, v2416);
          stdlib.assert(v4964, {
            at: './util.rsh:237:10:application',
            fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'amtOut <= bal(out)',
            who: 'Trader_swapBForA'
            });
          const v4970 = stdlib.sub(v2125, v4960);
          sim_r.txns.push({
            amt: v4960,
            kind: 'from',
            to: v2636,
            tok: v2083
            });
          const v4974 = stdlib.sub(v4970, v2415);
          const v4976 = stdlib.gt(v4904, v2416);
          const v4977 = v4976 ? v4904 : v2416;
          const v4978 = stdlib.lt(v4904, v2416);
          const v4979 = v4978 ? v4904 : v2416;
          const v4980 = stdlib.muldiv(v4898, v4974, v4977);
          const v4981 = stdlib.ge(v4980, v4979);
          stdlib.assert(v4981, {
            at: './util.rsh:246:10:application',
            fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
            msg: 'newK >= market.k',
            who: 'Trader_swapBForA'
            });
          const v4985 = stdlib.add(v2415, v4962);
          const v4989 = stdlib.add(v2412, v4961);
          const v4990 = {
            balA: v4985,
            balB: v4989
            };
          const v4995 = [v4960, v4961, v4962, v4974, v4898];
          const v4996 = await txn1.getOutput('Trader_swapBForA', 'v4995', ctc14, v4995);
          
          const v7392 = v2115;
          const v7393 = v4990;
          const v7394 = v2117;
          const v7396 = v4970;
          const v7397 = v4640;
          const v7398 = v2127;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2637], secs: v2639, time: v2638, didSend: v1467, from: v2636 } = txn1;
  switch (v2637[0]) {
    case 'Harvester_harvest0_164': {
      const v2640 = v2637[1];
      return;
      break;
      }
    case 'Provider_deposit0_164': {
      const v3108 = v2637[1];
      return;
      break;
      }
    case 'Provider_withdraw0_164': {
      const v3587 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_164': {
      const v4060 = v2637[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_164': {
      const v4533 = v2637[1];
      const v4534 = v4533[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
      const v4535 = v4533[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
      ;
      ;
      ;
      const v4640 = stdlib.add(v2126, v4534);
      ;
      undefined;
      const v4898 = stdlib.sub(v4640, v2412);
      const v4902 = stdlib.lt(v4534, v4898);
      stdlib.assert(v4902, {
        at: './util.rsh:231:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapBForA'
        });
      const v4903 = stdlib.gt(v4534, stdlib.checkedBigNumberify('./util.rsh:234:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4903, {
        at: './util.rsh:234:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapBForA'
        });
      const v4904 = stdlib.sub(v4898, v4534);
      const v4932 = stdlib.mul(v4534, v2455);
      const v4935 = stdlib.mul(v4904, stdlib.checkedBigNumberify('./util.rsh:104:43:decimal', stdlib.UInt_max, 10000));
      const v4938 = stdlib.add(v4935, v4932);
      const v4939 = stdlib.muldiv(v4932, v2416, v4938);
      const v4940 = stdlib.gt(v4939, stdlib.checkedBigNumberify('./util.rsh:122:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4940, {
        at: './util.rsh:122:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapBForA'
        });
      const v4943 = stdlib.add(v4904, v4534);
      const v4944 = stdlib.gt(v4943, stdlib.checkedBigNumberify('./util.rsh:65:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4944, {
        at: './util.rsh:65:4:application',
        fs: ['at ./util.rsh:123:48:application call to [unknown function] (defined at: ./util.rsh:62:75:function exp)', 'at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v4945 = stdlib.muldiv(v4534, v2416, v4943);
      const v4947 = stdlib.sub(v4945, v4939);
      const v4948 = stdlib.muldiv(v4534, v2432, stdlib.checkedBigNumberify('./util.rsh:126:38:decimal', stdlib.UInt_max, 10000));
      const v4952 = stdlib.mul(v4947, v2438);
      const v4953 = stdlib.div(v4952, stdlib.checkedBigNumberify('./util.rsh:127:52:decimal', stdlib.UInt_max, 100));
      const v4954 = stdlib.le(v4953, v4947);
      stdlib.assert(v4954, {
        at: './util.rsh:128:4:application',
        fs: ['at ./util.rsh:235:61:application call to [unknown function] (defined at: ./util.rsh:110:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapBForA'
        });
      const v4955 = stdlib.muldiv(v4953, v4904, v2416);
      const v4956 = stdlib.ge(v4955, v4948);
      const v4957 = [v4939, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4953];
      const v4958 = [v4939, v4948, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v4959 = v4956 ? v4957 : v4958;
      const v4960 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 0)];
      const v4961 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 1)];
      const v4962 = v4959[stdlib.checkedBigNumberify('./util.rsh:235:9:array', stdlib.UInt_max, 2)];
      const v4963 = stdlib.ge(v4960, v4535);
      stdlib.assert(v4963, {
        at: './util.rsh:236:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapBForA'
        });
      const v4964 = stdlib.le(v4960, v2416);
      stdlib.assert(v4964, {
        at: './util.rsh:237:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapBForA'
        });
      const v4970 = stdlib.sub(v2125, v4960);
      ;
      const v4974 = stdlib.sub(v4970, v2415);
      const v4976 = stdlib.gt(v4904, v2416);
      const v4977 = v4976 ? v4904 : v2416;
      const v4978 = stdlib.lt(v4904, v2416);
      const v4979 = v4978 ? v4904 : v2416;
      const v4980 = stdlib.muldiv(v4898, v4974, v4977);
      const v4981 = stdlib.ge(v4980, v4979);
      stdlib.assert(v4981, {
        at: './util.rsh:246:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapBForA'
        });
      const v4985 = stdlib.add(v2415, v4962);
      const v4989 = stdlib.add(v2412, v4961);
      const v4990 = {
        balA: v4985,
        balB: v4989
        };
      const v4995 = [v4960, v4961, v4962, v4974, v4898];
      const v4996 = await txn1.getOutput('Trader_swapBForA', 'v4995', ctc14, v4995);
      if (v1467) {
        stdlib.protect(ctc6, await interact.out(v4533, v4996), {
          at: './index.rsh:219:12:application',
          fs: ['at ./index.rsh:219:12:application call to [unknown function] (defined at: ./index.rsh:219:12:function exp)', 'at ./util.rsh:253:12:application call to "tradeDone" (defined at: ./index.rsh:225:40:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:228:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v7392 = v2115;
      const v7393 = v4990;
      const v7394 = v2117;
      const v7396 = v4970;
      const v7397 = v4640;
      const v7398 = v2127;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    sigs: [`Harvester_harvest((address,(byte,byte[32]),(byte,byte[8]),(byte,byte[8])))(uint64,uint64)`, `Provider_deposit(uint64,uint64,uint64)uint64`, `Provider_withdraw(uint64)uint64[2]`, `Trader_swapAForB(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BSASAAEECJBOZAMQIKCNBgIo////////////AeHUmdEB2e/5uAPmxMq4DKfS2Z4BMCYFAQAIAAAAAAAAAAAAAQFDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI1ADEYQQu6KmRJIls1ASVbNQI2GgAXSUEBJyI1AyM1BUkhDQxAAJNJIQ4MQABxSSEPDEAAEiEPEkQ2GgE1/yg0/1A1BEIBGyEOEkQ2GgE2GgJQNhoDUDX/KzT/UIA7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQNQRCAMMhDRJENhoBNhoCUDX/gAEDNP9QJwRQNQRCAKhJIRAMQAAbIRASRDYaATYaAlA1/4ABBDT/UCcEUDUEQgCGgdvY7UUSRDYaATX/gAECNP9QgEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQNQRCACE2GgEXNhoCFzUDNhoDNQRJIQoMQAeASSEGDEAHeCEGEkQkNAESRDQDSSISTDQCEhFEKGQrZFBJIls1/0klWzX+SSEHWzX9SVcYEDX8SSELWzX7SVcwEDX6SVdAODX5SYF4WzX4SYGAAVs190mBiAFbNfZINARJFYFUEkRJNfVIgARdaqU5NPVQsDT1STX0IlVJIQoMQASHSSEGDEADmkkkDEAByyQSRDT0VwEQSTXzIls18jT3NPIINfE08klBACU0AEkjCDUATEsBOBISRDT+SwE4ERJEJEsBOBASRDIKSwE4FBJESDT6JVs18DTxNPAJNe80+iJbNe40+DTuCTXtNPI07wxENPIiDUQ07zTyCTXsNPkhCFs16zT5IRFbNeo08iEENOoJC0k16TTtHSI07CEECzTpCB9ISEwiEkRJNegiDUQ07DTyCEk15yINRDTyNO0dIjTnH0hITCISRDToCTXmNPI06x0iIQQfSEhMIhJENeU05jTrIQULNOoKCyEFCkk15DTmDkQ06BY05RZQKVA06BYpUDTkFlA05DTsHSI07R9ISEwiEkQ05Q9NSTXjIls14jTjJVs14TTjIQdbNeA04jTzJVsPRDTiNO0ORDT4NOIJNd804klBABCxshIkshAxALIUNP+yEbMiSDTfNO4JNd407zTeHSI07TTsSTTtDU0fSEhMIhJENO007Ek07QxND0SACAAAAAAAABODNOIWNOEWUDTgFlA03hZQNO8WUFCwNOIWNOEWUDTgFlA03hZQNO8WUEk1BjT/NP40/TT8NPs07jTgCBY08DThCBZQNPkyBjTfNPE09kIHkUg09FcBEEk18yJbNfI0+DTyCDXxNPJJQQAlNABJIwg1AExLATgSEkQ0/0sBOBESRCRLATgQEkQyCksBOBQSREg0+iJbNfA08TTwCTXvNPolWzXuNPc07gk17TTyNO8MRDTyIg1ENO808gk17DT5IQhbNes0+SERWzXqNPIhBDTqCQtJNek07R0iNOwhBAs06QgfSEhMIhJESTXoIg1ENOw08ghJNeciDUQ08jTtHSI05x9ISEwiEkQ06Ak15jTyNOsdIiEEH0hITCISRDXlNOY06yEFCzTqCgshBQpJNeQ05g5ENOgWNOUWUClQNOgWKVA05BZQNOQ07B0iNO0fSEhMIhJENOUPTUk14yJbNeI04yVbNeE04yEHWzXgNOI08yVbD0Q04jTtDkQ09zTiCTXfNOJJQQAQsbISJLIQMQCyFDT+shGzIkg03zTuCTXeNO803h0iNO007Ek07Q1NH0hITCISRDTtNOxJNO0MTQ9EgAgAAAAAAAAROTTiFjThFlA04BZQNN4WUDTvFlBQsDTiFjThFlA04BZQNN4WUDTvFlBJNQY0/zT+NP00/DT7NPA04QgWNO404AgWUDT5MgY08TTfNPZCBchINPRXAQhJNfMXNfI08klBACU0AEkjCDUATEsBOBISRDT9SwE4ERJEJEsBOBASRDIKSwE4FBJESDT4NPoiWwk18TT3NPolWwk18DTyNPEdIjT7H0hITCISREk17zTxDkQ070lBABCxshIkshAxALIUNP+yEbMiSDTyNPAdIjT7H0hITCISREk17jTwDkQ07klBABCxshIkshAxALIUNP6yEbMiSIAIAAAAAAAADvU07xY07hZQULA07xY07hZQSTUGNP80/jT9NPw0+zTyCTT6NPkyBjT4NO8JNPc07gk09jTyCEIE4kkjDEABOUg09FcBGEk18yJbNfI08yVbNfE08yEHWzXwNPg08gg17zTySUEAJTQASSMINQBMSwE4EhJENP9LATgREkQkSwE4EBJEMgpLATgUEkRINPc08Qg17jTxSUEAJTQASSMINQBMSwE4EhJENP5LATgREkQkSwE4EBJEMgpLATgUEkRINPIiDUQ08SINRDT7IhJBACA08jTxHSI08B9ISEwiEkQ08A9ENPA09g5ENPA17UIAPTTyNPsdIjTvNPoiWwk08gkfSEhMIhJENPE0+x0iNO40+iVbCTTxCR9ISEwiEkQIIQoKSTXsNPYORDTsNe007UlBABCxshIkshAxALIUNP2yEbMiSIAIAAAAAAAADOE07RZQsDTtSRY1BjT/NP40/TT8NPs07Qg0+jT5MgY07zTuNPY07QlCA6NINPRXAVM18zTzNfI0+VcAIDXxNPoiWzXwNPolWzXvNPJXACA17jEANPESRDTwSUEAELGyEiSyEDTushQ0/7IRsyJINO9JQQAQsbISJLIQNO6yFDT+shGzIkiACAAAAAAAAArRNPAWNO8WUFCwNPAWNO8WUEk1BjTyVyAhSTXsIlVJIwxAABAjEkQ07FcBIEk16zXtQgAISDTxNe1CAAA08ldBCUk16yJVSSMMQAAPIxJENOsjW0k16jXsQgALSDT5IQhbNexCAAA08ldKCUk16iJVSSMMQAAPIxJENOojW0k16TXrQgALSDT5IQtbNetCAAA07DTrCEk16jTrNOwIEjTqIQUMEDTqIg0QRDT/NP40/TT8NPs0/DTtNOwWUDTrFlA06hZQMgY0+DTwCTT3NO8JNPZCAmtISSMMQACSSCM0ARJENANJIhJMNAISEUQoZElXACA1/0khCFs1/kkhC1s1/UlXMCA1/EmBUFs1+0g0BEkVIhJESIAEmouRdLA0/zEAEkSAEAAAAAAAAAAAAAAAAAAAAAA1+jT+NP00+zT6IjT6NPyACAAAAAAAAAAFUIAIAAAAAAAAABlQgAgAAAAAAAAAHlAyBiIiIQxCAdJIIjQBEkQ0A0kiEkw0AhIRRCpINARJFYFYEkRJIls1/0klWzX+SVcQIDX9SVcwCDX8SVc4IDX7SIAE/ZnbBTT/FlA0/hZQNP1QNPxQNPtQsCEJSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT/NP4SFEQhCUlBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgisbISJLIQMgqyFDT/shGzIkghCUlBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgisbISJLIQMgqyFDT+shGzIkghDCEEDUQhCUlBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREixIQayECEMsiKBBrIjNPyyJTT9siaAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALInMgOyKDIKsimztDw1+oAIAAAAAAAACDc0+hZQsDT6NfkxADT/FlA0/hZQNPtQNPkWUChLAVcAWGdIIzUBMgY1AjEZIhJEQgBXNf81/jX9Nfw1+zX6Nfk1+DX3NfZJNfUWNPYWUDT3FlA0+FA0+RZQNPpQNPtQNP0WUDT+FlA0/xZQKEsBVwB/ZytLAVd/EWdIJDUBMgY1AjEZIhJEQgAAKjQBFjQCFlBnNAVBAAqABBUffHU0BlCwNABJIwgyBBJEMRYSRCNDIkMxGSISRCI1ASI1AkL/yQ==`,
  appClear: `BQ==`,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 9,
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
                "name": "v2083",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2084",
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
                "internalType": "struct T5",
                "name": "v2085",
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
                "internalType": "struct T6",
                "name": "v2086",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2087",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v2083",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2084",
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
                "internalType": "struct T5",
                "name": "v2085",
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
                "internalType": "struct T6",
                "name": "v2086",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2087",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "receiver",
                            "type": "address"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T14",
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
                            "internalType": "struct T14",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Harvester_harvest0_164",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Provider_deposit0_164",
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
                    "internalType": "struct T19",
                    "name": "_Provider_withdraw0_164",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapAForB0_164",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapBForA0_164",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v2637",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
    "name": "_reach_oe_v2103",
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
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2769",
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
    "name": "_reach_oe_v3297",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[2]",
        "name": "v0",
        "type": "uint256[2]"
      }
    ],
    "name": "_reach_oe_v3829",
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
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v4409",
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
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v4995",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "receiver",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T14",
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
            "internalType": "struct T14",
            "name": "newHarvesterAddr",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T15",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_Some",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "newProtocolFee",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T15",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_Some",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "newProviderFee",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Harvester_harvest",
    "outputs": [
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
        "internalType": "struct T20",
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
      },
      {
        "internalType": "uint256",
        "name": "_a2",
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
        "internalType": "uint256[2]",
        "name": "",
        "type": "uint256[2]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_aBal",
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
    "name": "Tokens_aTok",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_bBal",
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
    "name": "Tokens_bTok",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_liquidityToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_minted",
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
    "name": "Tokens_protocolBals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_balA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_balB",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_protocolInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "_addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_totFee",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
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
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
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
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "receiver",
                            "type": "address"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T14",
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
                            "internalType": "struct T14",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T15",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T15",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Harvester_harvest0_164",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Provider_deposit0_164",
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
                    "internalType": "struct T19",
                    "name": "_Provider_withdraw0_164",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapAForB0_164",
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
                    "internalType": "struct T20",
                    "name": "_Trader_swapBForA0_164",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v2637",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
  Bytecode: `0x60806040526040516200568c3803806200568c8339810160408190526200002691620004f1565b6000808055436003556040805160e0810182526080810183815260a0820184905260c0820184905281528151602080820184528482528201529081018290526060810191909152604080518351815260208085015180516001600160a01b0390811683850152918101518216838501528084015151606080850191909152810151516001600160c01b03191660808085019190915201511660a082015290517f8e455783dec28612d137090f254caa13d244b757017d0cf8f68488802eeab29b9181900360c00190a1620001308260200151602001516001600160a01b03168360200151600001516001600160a01b0316146200012557600162000128565b60005b600f6200035d565b6200013e341560106200035d565b6200014c600160116200035d565b80516000908190528151602090810182905282516040908101839052818401519290925283810151820151518251918201520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f190181528282528451805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252602086810151519084015291016040516020818303038152906040526000196012604051620002219062000387565b620002329695949392919062000631565b604051809103906000f0801580156200024f573d6000803e3d6000fd5b506001600160a01b0316604082810182905260608301829052519081527fe9cd69053644fe8c2d65bc88795a0aeaf3273352b1eb2f39235bd00b0777ed229060200160405180910390a16040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d88018051516001600160a01b03908116895281518a0151811688529051840151811685528d860151811683526001998a9055439099558b51978801529451871699860199909952915185169084015251831695820195909552935116908301529060c001604051602081830303815290604052600290805190602001906200035392919062000395565b50505050620006d9565b81620003835760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610f75806200471783390190565b828054620003a3906200069c565b90600052602060002090601f016020900481019282620003c7576000855562000412565b82601f10620003e257805160ff191683800117855562000412565b8280016001018555821562000412579182015b8281111562000412578251825591602001919060010190620003f5565b506200042092915062000424565b5090565b5b8082111562000420576000815560010162000425565b604080519081016001600160401b03811182821017156200046c57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200046c57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200046c57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004ec57600080fd5b919050565b600081830360c08112156200050557600080fd5b6200050f6200043b565b8351815260a0601f19830112156200052657600080fd5b6200053062000472565b6200053e60208601620004d4565b81526200054e60408601620004d4565b60208201526020605f19840112156200056657600080fd5b62000570620004a3565b6060860151815260408201526020607f19840112156200058f57600080fd5b62000599620004a3565b60808601519093506001600160c01b031981168114620005b857600080fd5b835260608101839052620005cf60a08601620004d4565b60808201526020820152949350505050565b6000815180845260005b818110156200060957602081850181015186830182015201620005eb565b818111156200061c576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200064660c0830189620005e1565b82810360208401526200065a8189620005e1565b90508281036040840152620006708188620005e1565b90508281036060840152620006868187620005e1565b6080840195909552505060a00152949350505050565b600181811c90821680620006b157607f821691505b60208210811415620006d357634e487b7160e01b600052602260045260246000fd5b50919050565b61402e80620006e96000396000f3fe6080604052600436106101015760003560e01c806368ac35681161008f578063c8dc446711610061578063c8dc44671461027a578063d2846e011461028f578063d469fcc7146102a4578063d4a2311c146102b9578063dc8d714f146102cc57005b806368ac35681461020d5780638323075714610222578063ab53f2c614610237578063c8867ae91461025a57005b806332020fec116100d357806332020fec1461016957806358b394ee146101895780635ac10ac2146101ab5780635bbc0ed6146101be5780635f827f46146101eb57005b80631894c0a11461010a5780631e93b0f11461011d57806328db2cb2146101415780632c10a1591461015657005b3661010857005b005b6101086101183660046134e2565b6102df565b34801561012957600080fd5b506003545b6040519081526020015b60405180910390f35b34801561014d57600080fd5b5061012e610303565b6101086101643660046134fb565b610484565b61017c61017736600461350d565b6104a4565b6040516101389190613526565b34801561019557600080fd5b5061019e610502565b6040516101389190613557565b61012e6101b936600461356e565b610692565b3480156101ca57600080fd5b506101d36106fa565b6040516001600160a01b039091168152602001610138565b3480156101f757600080fd5b50610200610872565b604051610138919061359a565b34801561021957600080fd5b506101d3610a29565b34801561022e57600080fd5b5060015461012e565b34801561024357600080fd5b5061024c610b94565b6040516101389291906135fa565b61026d610268366004613634565b610c31565b6040516101389190613656565b34801561028657600080fd5b506101d3610c98565b34801561029b57600080fd5b5061012e610dfc565b3480156102b057600080fd5b5061012e610f7b565b61019e6102c73660046138e9565b6110f9565b61026d6102da366004613634565b61115f565b6102e7612d77565b6102ff6102f9368490038401846139c3565b826111c4565b5050565b6000600160005414156103c05760006002805461031f90613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461034b90613a8b565b80156103985780601f1061036d57610100808354040283529160200191610398565b820191906000526020600020905b81548152906001019060200180831161037b57829003601f168201915b50505050508060200190518101906103b09190613ad0565b90506103be6000600c61285a565b505b60046000541415610475576000600280546103da90613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461040690613a8b565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b505050505080602001905181019061046b9190613bf5565b6080015192915050565b6104816000600c61285a565b90565b61048c612d77565b6102ff61049e36849003840184613ca7565b82612880565b6104ac612dc2565b6104b4612d77565b6104bc612de0565b6104c4612dfa565b604080516020808201835287825260608401919091526002835281518082019092528282528301526104f682846111c4565b50506040015192915050565b6040805180820190915260008082526020820152600160005414156105d15760006002805461053090613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461055c90613a8b565b80156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b50505050508060200190518101906105c19190613ad0565b90506105cf6000600d61285a565b505b60046000541415610686576000600280546105eb90613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461061790613a8b565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b505050505080602001905181019061067c9190613bf5565b60a0015192915050565b6104816000600d61285a565b600061069c612d77565b6106a4612de0565b6106ac612dfa565b604080516060810182528881526020808201899052818301889052838301919091526001835281518082019092528282528301526106ea82846111c4565b50506020015190505b9392505050565b6000600160005414156107b15760006002805461071690613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461074290613a8b565b801561078f5780601f106107645761010080835404028352916020019161078f565b820191906000526020600020905b81548152906001019060200180831161077257829003601f168201915b50505050508060200190518101906107a79190613ad0565b6040015192915050565b60046000541415610866576000600280546107cb90613a8b565b80601f01602080910402602001604051908101604052809291908181526020018280546107f790613a8b565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b505050505080602001905181019061085c9190613bf5565b6020015192915050565b6104816000600a61285a565b61087a612e9d565b600160005414156109685760006002805461089490613a8b565b80601f01602080910402602001604051908101604052809291908181526020018280546108c090613a8b565b801561090d5780601f106108e25761010080835404028352916020019161090d565b820191906000526020600020905b8154815290600101906020018083116108f057829003601f168201915b50505050508060200190518101906109259190613ad0565b905061092f612ece565b60609182015181516001600160a01b03909116905280516005602090910152805160196040909101528051601e92019190915251919050565b60046000541415610a1d5760006002805461098290613a8b565b80601f01602080910402602001604051908101604052809291908181526020018280546109ae90613a8b565b80156109fb5780601f106109d0576101008083540402835291602001916109fb565b820191906000526020600020905b8154815290600101906020018083116109de57829003601f168201915b5050505050806020019051810190610a139190613bf5565b60c0015192915050565b6104816000600e61285a565b600060016000541415610ad657600060028054610a4590613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7190613a8b565b8015610abe5780601f10610a9357610100808354040283529160200191610abe565b820191906000526020600020905b815481529060010190602001808311610aa157829003601f168201915b505050505080602001905181019061085c9190613ad0565b60046000541415610b8857600060028054610af090613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1c90613a8b565b8015610b695780601f10610b3e57610100808354040283529160200191610b69565b820191906000526020600020905b815481529060010190602001808311610b4c57829003601f168201915b5050505050806020019051810190610b819190613bf5565b5192915050565b6104816000600861285a565b600060606000546002808054610ba990613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd590613a8b565b8015610c225780601f10610bf757610100808354040283529160200191610c22565b820191906000526020600020905b815481529060010190602001808311610c0557829003601f168201915b50505050509050915091509091565b610c39612ee1565b610c41612d77565b610c49612de0565b610c51612dfa565b60408051808201825287815260208082018890526080840191909152600383528151808201909252828252830152610c8982846111c4565b50506060015190505b92915050565b600060016000541415610d4557600060028054610cb490613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce090613a8b565b8015610d2d5780601f10610d0257610100808354040283529160200191610d2d565b820191906000526020600020905b815481529060010190602001808311610d1057829003601f168201915b505050505080602001905181019061046b9190613ad0565b60046000541415610df057600060028054610d5f90613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8b90613a8b565b8015610dd85780601f10610dad57610100808354040283529160200191610dd8565b820191906000526020600020905b815481529060010190602001808311610dbb57829003601f168201915b50505050508060200190518101906107a79190613bf5565b6104816000600b61285a565b600060016000541415610eb957600060028054610e1890613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4490613a8b565b8015610e915780601f10610e6657610100808354040283529160200191610e91565b820191906000526020600020905b815481529060010190602001808311610e7457829003601f168201915b5050505050806020019051810190610ea99190613ad0565b9050610eb76000600961285a565b505b60046000541415610f6f57600060028054610ed390613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610eff90613a8b565b8015610f4c5780601f10610f2157610100808354040283529160200191610f4c565b820191906000526020600020905b815481529060010190602001808311610f2f57829003601f168201915b5050505050806020019051810190610f649190613bf5565b610100015192915050565b6104816000600961285a565b60006001600054141561103857600060028054610f9790613a8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc390613a8b565b80156110105780601f10610fe557610100808354040283529160200191611010565b820191906000526020600020905b815481529060010190602001808311610ff357829003601f168201915b50505050508060200190518101906110289190613ad0565b90506110366000600761285a565b505b600460005414156110ed5760006002805461105290613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461107e90613a8b565b80156110cb5780601f106110a0576101008083540402835291602001916110cb565b820191906000526020600020905b8154815290600101906020018083116110ae57829003601f168201915b50505050508060200190518101906110e39190613bf5565b60e0015192915050565b6104816000600761285a565b6040805180820190915260008082526020820152611115612d77565b61111d612de0565b611125612dfa565b60408051602080820183528782528381019190915260008352815180820190925282825283015261115682846111c4565b50505192915050565b611167612ee1565b61116f612d77565b611177612de0565b61117f612dfa565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526111b782846111c4565b5050608001519392505050565b6111d4600460005414604361285a565b81516111ef9015806111e857508251600154145b604461285a565b60008080556002805461120190613a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461122d90613a8b565b801561127a5780601f1061124f5761010080835404028352916020019161127a565b820191906000526020600020905b81548152906001019060200180831161125d57829003601f168201915b50505050508060200190518101906112929190613bf5565b905061129c612f10565b7f92cab69d2c81bf85be48024420d7e5e5b977d37539cb53e37dcb1b534c45aed1846040516112cb9190613d55565b60405180910390a160006020850151515160048111156112ed576112ed613d0b565b14156116d957602080850151510151815261130a3415601661285a565b61132461131d3384604001516000612a9c565b601761285a565b61133e6113373384600001516000612a9c565b601861285a565b6113586113513384602001516000612a9c565b601961285a565b60c082015151611374906001600160a01b03163314601a61285a565b81518151515160a08401515161138b929190612ab2565b6020808301518251515160a0850151909201516113a89290612ab2565b60a0820180515160208084018051929092529151820151815190920191909152516040517f0b10467e0e89a0bf1bf4eb90b5444b14485208f689314aeb76e2f576c3ec479f916113f791613557565b60405180910390a16020810151835260008151516020015151600181111561142157611421613d0b565b14156114405760c0820151516001600160a01b03166040820152611483565b60018151516020015151600181111561145b5761145b613d0b565b141561148357805151602001516040908101516001600160a01b031660608301819052908201525b60008151516040015151600181111561149e5761149e613d0b565b14156114b75760c08201516020015160808201526114f0565b6001815151604001515160018111156114d2576114d2613d0b565b14156114f057805151604090810151015160a0820181905260808201525b60008151516060015151600181111561150b5761150b613d0b565b14156115245760c080830151604001519082015261155d565b60018151516060015151600181111561153f5761153f613d0b565b141561155d57805151606001516040015160e0820181905260c08201525b8060c0015181608001516115719190613e62565b610100820152608081015160c08201516115c69161158e91613e62565b826101000151146115a05760006115aa565b6064826101000151105b6115b55760006115bf565b6000826101000151115b601b61285a565b604080820151610120830180516001600160a01b03909216909152608083015181516020015260c083015181519092019190915261010082015190516060015261160e613252565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086018051855183015260808701518386018051919091529051815190930192909252610120850151825190930192909252514391015260a08301515160e084015161168d9190613e7a565b6020808301516080019190915260a084015101516101008401516116b19190613e7a565b60208201805160a00191909152610120840151905160c001526116d381612acb565b50612854565b60016020850151515160048111156116f3576116f3613d0b565b1415611a3e57602084015151604001516101408201526117153415601c61285a565b61172f6117283384604001516000612a9c565b601d61285a565b6101408101515160e08301516117459190613e62565b61016082015281516101408201515161176b9161176491339190612a9c565b601e61285a565b806101400151602001518261010001516117859190613e62565b816101800181815250506117b16117aa33846020015184610140015160200151612a9c565b601f61285a565b610140810151516117c5901515602061285a565b6117dc60008261014001516020015111602161285a565b608082015161184b5761014081015160408101516020820151915161181a9282916118079190613e91565b6118119190613eb0565b1015602261285a565b611836826101200151826101400151604001511115602361285a565b610140810151604001516101a0820152611920565b6002816101400151602001518360a00151602001518361018001516118709190613e7a565b61187a9190613e7a565b8360800151836101400151602001516118939190613e91565b61189d9190613eb0565b6101408301515160a0850151516101608501516118ba9190613e7a565b6118c49190613e7a565b6080850151610140850151516118da9190613e91565b6118e49190613eb0565b6118ee9190613e62565b6118f89190613eb0565b6101c08201819052610120830151611913911115602461285a565b6101c08101516101a08201525b611934826040015133836101a00151612ab2565b7f7cea4b8f1ed946f7318bbc9d1edeeda4cdca5d1e389da10c324658b0a7b8af0d816101a0015160405161196a91815260200190565b60405180910390a16101a08101516020840152611985613252565b825181516001600160a01b0391821690526020808501518351908316910152604080850151835192169101526060808401518251909101526101a082015160808401516119d29190613e62565b602080830180519290925260a08086015183519092019190915260c0850151825160400152815143606090910152610160840151825160800152610180840151915101526101a0820151610120840151611a2c9190613e7a565b602082015160c001526116d381612acb565b6002602085015151516004811115611a5857611a58613d0b565b1415611ce657602084015151606001516101e0820152611a7a3415602561285a565b611a9c611a95338460400151846101e0015160000151612a9c565b602661285a565b611ab6611aaf3384600001516000612a9c565b602761285a565b611ad0611ac93384602001516000612a9c565b602861285a565b60a08201515160e0830151611ae59190613e7a565b61020082015260a082015160200151610100830151611b049190613e7a565b61022082015260808201516102008201516101e083015151611b269190613e91565b611b309190613eb0565b6102408201819052610200820151611b4b911115602961285a565b611b5f826000015133836102400151612ab2565b60808201516102208201516101e083015151611b7b9190613e91565b611b859190613eb0565b6102608201819052610220820151611ba0911115602a61285a565b611bb4826020015133836102600151612ab2565b6102408101516102808201805191909152610260820151815160200152516040517f3f56e997199778970122e0673356a0af905937342ae10d520025994a719c71f991611c0091613526565b60405180910390a16102808101516040840152611c1b613252565b825181516001600160a01b0391821690526020808501518351908316910152604080850151835192169101526060808401518251909101526101e0820151516080840151611c699190613e7a565b602080830180519290925260a085015182519091015260c0840151815160400152514360609091015261024082015160e0840151611ca79190613e7a565b602082015160800152610260820151610100840151611cc69190613e7a565b602082015160a001526101e082015151610120840151611a2c9190613e62565b6003602085015151516004811115611d0057611d00613d0b565b141561229e57602084015151608001516102a0820152611d223415602b61285a565b611d3c611d353384604001516000612a9c565b602c61285a565b6102a08101515160e0830151611d529190613e62565b6102c082015281516102a082015151611d7891611d7191339190612a9c565b602d61285a565b611d92611d8b3384602001516000612a9c565b602e61285a565b60a0820151516102c0820151611da89190613e7a565b6102e082015260a082015160200151610100830151611dc79190613e7a565b6103008201526102e08101516102a082015151611de69111602f61285a565b6102a081015151611dfa901515603061285a565b6102a0810151516102e0820151611e119190613e7a565b61032082015260c082015160600151611e2c90612710613e7a565b6102a082015151611e3d9190613e91565b6103408201819052610320820151611e589061271090613e91565b611e629190613e62565b816103000151826103400151611e789190613e91565b611e829190613eb0565b6103608201819052611e97901515603161285a565b6102a081015151610320820151611eae9190613e62565b6103808201819052611ec3901515603261285a565b6103608101516103808201516103008301516102a084015151611ee69190613e91565b611ef09190613eb0565b611efa9190613e7a565b6103a082015260c0820151602001516102a08201515161271091611f1d91613e91565b611f279190613eb0565b6103c082015260c0820151606081015160209091015160649190611f4c908390613e91565b611f569190613eb0565b826103a00151611f669190613e91565b611f709190613eb0565b6103e082018190526103a0820151611f8b911115603361285a565b6103608101805161040083018051919091528051600060209182018190526103e0850180519351604090810194909452935161042086018051919091526103c086018051825190940193909352519092019190915251610300830151610320840151925191929091611ffd9190613e91565b6120079190613eb0565b10156120185780610420015161201f565b8061040001515b61044082018190526102a0820151602001519051612040911115603461285a565b61205c816103000151826104400151600001511115603561285a565b610440810151516101008301516120739190613e7a565b61046082015260208201516104408201515161209191903390612ab2565b8160a00151602001518161046001516120aa9190613e7a565b61048082015261030081015161032082015161212391116120d0578161030001516120d7565b8161032001515b826103000151836103200151116120f3578261030001516120fa565b8261032001515b836104800151846102e001516121109190613e91565b61211a9190613eb0565b1015603661285a565b6104408101516020015160a08301515161213d9190613e62565b6104a0820151526104408101516040015160a0830151602001516121619190613e62565b6104a082015160209081019190915261044082018051516104c0840180519190915281518301518151909301929092525160409081015182518201526104808301518251606001526102e0830151825160800152905190517f7274ff68d32484213496c16df6bb8a081acd49e31929a872ebdd99fd6a21c55f916121e491613656565b60405180910390a16104c081015160608401526121ff613252565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201526080808701518386018051919091526104a087015181519094019390935260c0808801518451909501949094528251439201919091526102c0850151825190910152610460840151815160a001526101208501519051909101526116d381612acb565b60046020850151515160048111156122b8576122b8613d0b565b14156128545760208401515160a001516104e08201526122da3415603761285a565b6122f46122ed3384604001516000612a9c565b603861285a565b61230e6123073384600001516000612a9c565b603961285a565b6104e0810151516101008301516123259190613e62565b61050082015260208201516104e08201515161234e9161234791339190612a9c565b603a61285a565b8160a00151602001518161050001516123679190613e7a565b61052082015260a08201515160e08301516123829190613e7a565b6105408201526105208101516104e0820151516123a19111603b61285a565b6104e0810151516123b5901515603c61285a565b6104e0810151516105208201516123cc9190613e7a565b61056082015260c0820151606001516123e790612710613e7a565b6104e0820151516123f89190613e91565b61058082018190526105608201516124139061271090613e91565b61241d9190613e62565b8161054001518261058001516124339190613e91565b61243d9190613eb0565b6105a08201819052612452901515603d61285a565b6104e0810151516105608201516124699190613e62565b6105c0820181905261247e901515603e61285a565b6105a08101516105c08201516105408301516104e0840151516124a19190613e91565b6124ab9190613eb0565b6124b59190613e7a565b6105e082015260c0820151602001516104e082015151612710916124d891613e91565b6124e29190613eb0565b61060082015260c0820151606081015160209091015160649190612507908390613e91565b6125119190613eb0565b826105e001516125219190613e91565b61252b9190613eb0565b61062082018190526105e0820151612546911115603f61285a565b6105a081018051610640830180519190915280516000602091820181905261062085018051935160409081019490945293516106608601805191909152610600860180518251909401939093525190920191909152516105408301516105608401519251919290916125b89190613e91565b6125c29190613eb0565b10156125d3578061066001516125da565b8061064001515b61068082018190526104e08201516020015190516125fb911115604061285a565b612617816105400151826106800151600001511115604161285a565b6106808101515160e083015161262d9190613e7a565b6106a082015281516106808201515161264891903390612ab2565b60a0820151516106a082015161265e9190613e7a565b6106c08201526105408101516105608201516126d791116126845781610540015161268b565b8161056001515b826105400151836105600151116126a7578261054001516126ae565b8261056001515b836106c001518461052001516126c49190613e91565b6126ce9190613eb0565b1015604261285a565b6106808101516040015160a0830151516126f19190613e62565b6106e08201515261068081015160209081015160a0840151909101516127179190613e62565b6106e08201516020908101919091526106808201805151610700840180519190915281518301518151909301929092525160409081015182518201526106c0830151825160600152610520830151825160800152905190517f85611398ed9a76155d1a5a766571a71a6d74dbac07438505be67a2f185d0c8b09161279a91613656565b60405180910390a161070081015160808401526127b5613252565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201526080808701518386018051919091526106e087015181519094019390935260c0808801518451909501949094528251439201919091526106a0850151825190910152610500840151815160a001526101208501519051909101526116d381612acb565b50505050565b816102ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b612890600160005414601461285a565b81516128ab9015806128a457508251600154145b601561285a565b6000808055600280546128bd90613a8b565b80601f01602080910402602001604051908101604052809291908181526020018280546128e990613a8b565b80156129365780601f1061290b57610100808354040283529160200191612936565b820191906000526020600020905b81548152906001019060200180831161291957829003601f168201915b505050505080602001905181019061294e9190613ad0565b90506129586132a1565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16129a33415601261285a565b81516129bb906001600160a01b03163314601361285a565b8051600090819052815160209081019190915260608084015182840180516001600160a01b0390921690915280516005930192909252815160196040909101529051601e910152612a0a613252565b60208084015182516001600160a01b039182169052604080860151845190831690840152608080870151855193169282019290925284518451606090810191909152848401805160009081905287518251870152948701518151909301929092528151439101528051909101829052805160a001919091525160001960c090910152612a9581612acb565b5050505050565b6000612aaa83853085612b91565b949350505050565b612abd838383612c6b565b612ac657600080fd5b505050565b612ad36132ca565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015190840152808401805151608080860191909152815183015160a080870191909152825185015160c08088019190915283519092015160e087015282510151610100860152905101516101208401526004600055436001559051612b6d91839101613ed2565b60405160208183030381529060405260029080519060200190612ac6929190613340565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612bf891613fbf565b60006040518083038185875af1925050503d8060008114612c35576040519150601f19603f3d011682016040523d82523d6000602084013e612c3a565b606091505b5091509150612c4b82826001612d3c565b5080806020019051810190612c609190613fdb565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612cca91613fbf565b60006040518083038185875af1925050503d8060008114612d07576040519150601f19603f3d011682016040523d82523d6000602084013e612d0c565b606091505b5091509150612d1d82826002612d3c565b5080806020019051810190612d329190613fdb565b9695505050505050565b60608315612d4b5750816106f3565b825115612d5b5782518084602001fd5b60405163100960cb60e01b815260048101839052602401612877565b6040805160e081018252600060a0820181815260c0830182905282526020820152908101612da3612dc2565b8152602001612db0612ee1565b8152602001612dbd612ee1565b905290565b60405180604001604052806002906020820280368337509192915050565b604051806040016040528060008152602001612dbd6133c4565b6040805160c081019091528060008152602001612e156133d7565b8152602001612e3e60405180606001604052806000815260200160008152602001600081525090565b8152602001612e596040518060200160405280600081525090565b8152602001612e7b604051806040016040528060008152602001600081525090565b8152602001612dbd604051806040016040528060008152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280612dbd612e9d565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806107200160405280612f246133d7565b8152602001612f46604051806040016040528060008152602001600081525090565b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001612f96612e9d565b8152602001612fbf60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001612ff66040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000815260200161301f612dc2565b8152602001613041604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016130b060405180606001604052806000815260200160008152602001600081525090565b81526020016130d960405180606001604052806000815260200160008152602001600081525090565b815260200161310260405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200160008152602001613132604051806040016040528060008152602001600081525090565b815260200161313f612ee1565b8152602001613161604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016131d060405180606001604052806000815260200160008152602001600081525090565b81526020016131f960405180606001604052806000815260200160008152602001600081525090565b815260200161322260405180606001604052806000815260200160008152602001600081525090565b81526020016000815260200160008152602001612db0604051806040016040528060008152602001600081525090565b60405180604001604052806132946040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b8152602001612dbd6133ea565b604080516080810182526000918101828152606082019290925290815260208101612dbd612e9d565b6040805161014081018252600080825260208083018290528284018290528351808501855282815280820183905260608401526080830182905283518085019094528184528301529060a08201908152602001613325612e9d565b81526020016000815260200160008152602001600081525090565b82805461334c90613a8b565b90600052602060002090601f01602090048101928261336e57600085556133b4565b82601f1061338757805160ff19168380011785556133b4565b828001600101855582156133b4579182015b828111156133b4578251825591602001919060010190613399565b506133c0929150613448565b5090565b6040518060200160405280612dbd612dfa565b6040518060200160405280612dbd61345d565b6040518060e0016040528060008152602001613419604051806040016040528060008152602001600081525090565b8152602001613426612e9d565b8152602001600081526020016000815260200160008152602001600081525090565b5b808211156133c05760008155600101613449565b604051806080016040528060006001600160a01b0316815260200161349d6040805160608101909152806000815260006020820181905260409091015290565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190612dbd565b600061028082840312156134f557600080fd5b50919050565b6000604082840312156134f557600080fd5b60006020828403121561351f57600080fd5b5035919050565b60408101818360005b600281101561354e57815183526020928301929091019060010161352f565b50505092915050565b815181526020808301519082015260408101610c92565b60008060006060848603121561358357600080fd5b505081359360208301359350604090920135919050565b81516001600160a01b0316815260208083015190820152604080830151908201526060808301519082015260808101610c92565b60005b838110156135e95781810151838201526020016135d1565b838111156128545750506000910152565b828152604060208201526000825180604084015261361f8160608501602087016135ce565b601f01601f1916919091016060019392505050565b6000806040838503121561364757600080fd5b50508035926020909101359150565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b6040516060810167ffffffffffffffff811182821017156136c157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff811182821017156136c157634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156136c157634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156136c157634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156136c157634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156136c157634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146137d257600080fd5b50565b600281106137d257600080fd5b80151581146137d257600080fd5b60006060828403121561380257600080fd5b61380a613690565b90508135613817816137d5565b81526020820135613827816137e2565b806020830152506040820135604082015292915050565b600081830361014081121561385257600080fd5b61385a6136c7565b91508235613867816137bd565b82526060601f198201121561387b57600080fd5b50613884613690565b6020830135613892816137d5565b815260408301356138a2816137e2565b602082015260608301356138b5816137bd565b604082015260208201526138cc83608084016137f0565b60408201526138de8360e084016137f0565b606082015292915050565b600061014082840312156138fc57600080fd5b6106f3838361383e565b6000610140828403121561391957600080fd5b6139216136f8565b905061392d838361383e565b815292915050565b60006060828403121561394757600080fd5b61394f613690565b905081358152602082013560208201526040820135604082015292915050565b60006020828403121561398157600080fd5b6139896136f8565b9135825250919050565b6000604082840312156139a557600080fd5b6139ad613729565b9050813581526020820135602082015292915050565b60008183036102808112156139d757600080fd5b6139df613729565b83358152610260601f19830112156139f657600080fd5b6139fe6136f8565b9150613a0861375a565b602085013560058110613a1a57600080fd5b8152613a298660408701613906565b6020820152613a3c866101808701613935565b6040820152613a4f866101e0870161396f565b6060820152613a62866102008701613993565b6080820152613a75866102408701613993565b60a0820152825260208101919091529392505050565b600181811c90821680613a9f57607f821691505b602082108114156134f557634e487b7160e01b600052602260045260246000fd5b8051613acb816137bd565b919050565b600060a08284031215613ae257600080fd5b60405160a0810181811067ffffffffffffffff82111715613b1357634e487b7160e01b600052604160045260246000fd5b6040528251613b21816137bd565b81526020830151613b31816137bd565b60208201526040830151613b44816137bd565b60408201526060830151613b57816137bd565b60608201526080830151613b6a816137bd565b60808201529392505050565b600060408284031215613b8857600080fd5b613b90613729565b9050815181526020820151602082015292915050565b600060808284031215613bb857600080fd5b613bc06136c7565b90508151613bcd816137bd565b8082525060208201516020820152604082015160408201526060820151606082015292915050565b60006101e08284031215613c0857600080fd5b613c1061378b565b613c1983613ac0565b8152613c2760208401613ac0565b6020820152613c3860408401613ac0565b6040820152613c4a8460608501613b76565b606082015260a08301516080820152613c668460c08501613b76565b60a0820152610100613c7a85828601613ba6565b60c083015261018084015160e08301526101a0840151908201526101c09092015161012083015250919050565b600060408284031215613cb957600080fd5b6040516040810181811067ffffffffffffffff82111715613cea57634e487b7160e01b600052604160045260246000fd5b604052823581526020830135613cff816137e2565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b600281106137d2576137d2613d0b565b8051613d3c81613d21565b8252602081810151151590830152604090810151910152565b8151815260208201515180516102808301919060058110613d7857613d78613d0b565b8060208501525060208101515160018060a01b0380825116604086015260208201518051613da581613d21565b606087015260208101511515608087015260409081015190911660a0860152810151613dd460c0860182613d31565b5060600151613de7610120850182613d31565b5060408181015180516101808601526020808201516101a08701529101516101c08501526060820151516101e08501526080820151805161020086015281015161022085015260a0909101518051610240850152015161026090920191909152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115613e7557613e75613e4c565b500190565b600082821015613e8c57613e8c613e4c565b500390565b6000816000190483118215151615613eab57613eab613e4c565b500290565b600082613ecd57634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b031681526101e081016020830151613efe60208401826001600160a01b03169052565b506040830151613f1960408401826001600160a01b03169052565b506060830151613f36606084018280518252602090810151910152565b50608083015160a083015260a0830151613f5d60c084018280518252602090810151910152565b5060c083015180516001600160a01b03166101008481019190915260208201516101208501526040820151610140850152606082015161016085015260e08501516101808501528401516101a084015250610120909201516101c09091015290565b60008251613fd18184602087016135ce565b9190910192915050565b600060208284031215613fed57600080fd5b81516106f3816137e256fea2646970667358221220e9780677e33cf7c41d50946ade4f9f5b3a5cd83b73546e57a6b45d93a72c108f64736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220cd4ea8eb16c07a373df1e246f51e6458a18b9dfd6c25a8c3a76a7d728542fe5e64736f6c63430008090033`,
  BytecodeLen: 22156,
  Which: `oD`,
  version: 6,
  views: {
    Tokens: {
      aBal: `Tokens_aBal`,
      aTok: `Tokens_aTok`,
      bBal: `Tokens_bBal`,
      bTok: `Tokens_bTok`,
      liquidityToken: `Tokens_liquidityToken`,
      minted: `Tokens_minted`,
      protocolBals: `Tokens_protocolBals`,
      protocolInfo: `Tokens_protocolInfo`
      }
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Harvester_harvest": Harvester_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_withdraw": Provider_withdraw,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Harvester: {
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
