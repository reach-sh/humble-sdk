// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc6 = stdlib.T_Object({
    balA: ctc2,
    balB: ctc2
    });
  const ctc7 = stdlib.T_Object({
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
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2521;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        aTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        bBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2558;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        bTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              return (await ((async () => {
                
                
                return v2449;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2449;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        liquidityToken: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              return (await ((async () => {
                
                
                return v2472;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2472;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        minted: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2511;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        protocolBals: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2512;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          },
        protocolInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2448, v2449, v2452, v2472, v2500] = svs;
              return (await ((async () => {
                
                const v2463 = {
                  addr: v2452,
                  fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
                  lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
                  totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
                  };
                
                return v2463;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = svs;
              return (await ((async () => {
                
                
                return v2513;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc7
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc0, ctc1, ctc5],
      4: [ctc1, ctc1, ctc6, ctc2, ctc6, ctc7, ctc5, ctc2, ctc2]
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
    Harvester_harvest0_161: ctc9,
    Provider_deposit0_161: ctc10,
    Provider_withdraw0_161: ctc11,
    Trader_swapAForB0_161: ctc12,
    Trader_swapBForA0_161: ctc12
    });
  const ctc14 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc6, ctc6, ctc6]);
  const ctc16 = stdlib.T_Bool;
  const ctc17 = stdlib.T_Tuple([ctc6, ctc6, ctc16]);
  const ctc18 = stdlib.T_Array(ctc17, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  
  const v2423 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v2424 = [v2423, v2423];
  const v2441 = stdlib.protect(ctc0, interact.humbleAddr, 'for Admin\'s interact field humbleAddr');
  const v2442 = stdlib.protect(ctc1, interact.ltName, 'for Admin\'s interact field ltName');
  const v2443 = stdlib.protect(ctc2, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v2444 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v2447 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./n2nn.rsh:42:23:decimal', stdlib.UInt_max, 10000));
  stdlib.assert(v2447, {
    at: './n2nn.rsh:42:11:application',
    fs: ['at ./n2nn.rsh:38:13:application call to [unknown function] (defined at: ./n2nn.rsh:38:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2444, v2442, v2443, v2441],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:46:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2449, v2450, v2451, v2452], secs: v2454, time: v2453, didSend: v72, from: v2448 } = txn1;
      
      const v2455 = v2424[stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0)];
      const v2457 = v2455[stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 1)];
      const v2458 = v2455[stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 2)];
      const v2459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2457, v2458];
      const v2460 = stdlib.Array_set(v2424, stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0), v2459);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v2449
        });
      ;
      const v2462 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./n2nn.rsh:53:22:decimal', stdlib.UInt_max, 10000));
      ;
      const v2469 = '                                                                                                ';
      const v2470 = '                                ';
      const v2471 = stdlib.simTokenNew(sim_r, v2450, v2451, v2469, v2470, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v2472 = await txn1.getOutput('internal', 'v2471', ctc3, v2471);
      const v2473 = [v2449];
      const v5688 = v2473[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v5692 = stdlib.tokenEq(v2472, v5688);
      const v2481 = v5692 ? false : true;
      ;
      const v2482 = v2460[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
      const v2484 = v2482[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
      const v2485 = v2482[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 2)];
      const v2486 = [stdlib.UInt_max, v2484, v2485];
      const v2487 = stdlib.Array_set(v2460, stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1), v2486);
      const v2489 = v2487[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
      const v2490 = v2489[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 0)];
      const v2492 = v2489[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 2)];
      const v2493 = [v2490, stdlib.UInt_max, v2492];
      const v2494 = stdlib.Array_set(v2487, stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1), v2493);
      const v2495 = v2494[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
      const v2496 = v2495[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 0)];
      const v2497 = v2495[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
      const v2499 = [v2496, v2497, false];
      const v2500 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1), v2499);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v2449, v2450, v2451, v2452], secs: v2454, time: v2453, didSend: v72, from: v2448 } = txn1;
  const v2455 = v2424[stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0)];
  const v2457 = v2455[stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 1)];
  const v2458 = v2455[stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 2)];
  const v2459 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2457, v2458];
  const v2460 = stdlib.Array_set(v2424, stdlib.checkedBigNumberify('./n2nn.rsh:46:9:dot', stdlib.UInt_max, 0), v2459);
  ;
  ;
  const v2462 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./n2nn.rsh:53:22:decimal', stdlib.UInt_max, 10000));
  stdlib.assert(v2462, {
    at: './n2nn.rsh:53:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v2469 = '                                                                                                ';
  const v2470 = '                                ';
  const v2471 = undefined /* TokenNew */;
  const v2472 = await txn1.getOutput('internal', 'v2471', ctc3, v2471);
  const v2473 = [v2449];
  const v5688 = v2473[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v5692 = stdlib.tokenEq(v2472, v5688);
  const v2481 = v5692 ? false : true;
  stdlib.assert(v2481, {
    at: './n2nn.rsh:65:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v2482 = v2460[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
  const v2484 = v2482[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
  const v2485 = v2482[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 2)];
  const v2486 = [stdlib.UInt_max, v2484, v2485];
  const v2487 = stdlib.Array_set(v2460, stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1), v2486);
  const v2489 = v2487[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
  const v2490 = v2489[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 0)];
  const v2492 = v2489[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 2)];
  const v2493 = [v2490, stdlib.UInt_max, v2492];
  const v2494 = stdlib.Array_set(v2487, stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1), v2493);
  const v2495 = v2494[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
  const v2496 = v2495[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 0)];
  const v2497 = v2495[stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1)];
  const v2499 = [v2496, v2497, false];
  const v2500 = stdlib.Array_set(v2494, stdlib.checkedBigNumberify('./n2nn.rsh:65:25:application', stdlib.UInt_max, 1), v2499);
  const txn2 = await (ctc.sendrecv({
    args: [v2448, v2449, v2452, v2472, v2500],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2453,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:70:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v2503, time: v2502, didSend: v101, from: v2501 } = txn2;
      
      ;
      const v2504 = stdlib.addressEq(v2448, v2501);
      ;
      
      const v2509 = {
        balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      const v2510 = {
        addr: v2452,
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
        };
      const v2511 = stdlib.checkedBigNumberify('./n2nn.rsh:76:22:decimal', stdlib.UInt_max, 0);
      const v2512 = v2509;
      const v2513 = v2510;
      const v2514 = v2502;
      const v2520 = v2500;
      const v2521 = stdlib.checkedBigNumberify('./n2nn.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return true;})()) {
        const v2557 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v2558 = v2557[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2449
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc3, ctc0, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2503, time: v2502, didSend: v101, from: v2501 } = txn2;
  ;
  const v2504 = stdlib.addressEq(v2448, v2501);
  stdlib.assert(v2504, {
    at: './n2nn.rsh:70:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v2472), {
    at: './n2nn.rsh:71:47:application',
    fs: ['at ./n2nn.rsh:71:13:application call to [unknown function] (defined at: ./n2nn.rsh:71:17:function exp)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v2509 = {
    balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
    };
  const v2510 = {
    addr: v2452,
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
    };
  let v2511 = stdlib.checkedBigNumberify('./n2nn.rsh:76:22:decimal', stdlib.UInt_max, 0);
  let v2512 = v2509;
  let v2513 = v2510;
  let v2514 = v2502;
  let v2520 = v2500;
  let v2521 = stdlib.checkedBigNumberify('./n2nn.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return true;})()) {
    const v2557 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
    const v2558 = v2557[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn3;
    switch (v3072[0]) {
      case 'Harvester_harvest0_161': {
        const v3075 = v3072[1];
        undefined /* setApiDetails */;
        ;
        const v3161 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v3162 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v3166 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v3167 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v3168 = [v3162, v3166, v3167];
        const v3169 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v3168);
        ;
        const v3170 = v3169[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v3171 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v3175 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v3176 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v3177 = [v3171, v3175, v3176];
        const v3178 = stdlib.Array_set(v3169, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v3177);
        ;
        const v3180 = v3075[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
        const v3181 = v2513.addr;
        const v3182 = v2513.fee;
        const v3183 = v2513.lpFee;
        const v3184 = v2512.balA;
        const v3185 = v2512.balB;
        const v3186 = v3180.newHarvesterAddr;
        const v3187 = v3180.newProtocolFee;
        const v3188 = v3180.newProviderFee;
        const v3189 = v3180.receiver;
        const v3190 = stdlib.addressEq(v3071, v3181);
        stdlib.assert(v3190, {
          at: './util.rsh:282:10:application',
          fs: ['at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
          msg: 'Thou art not the harvester                                      ',
          who: 'Admin'
          });
        const v3194 = stdlib.sub(v2521, v3184);
        ;
        const v3196 = (stdlib.le(await ctc.getBalance(), v3194) ? stdlib.checkedBigNumberify('./util.rsh:284:27:application', stdlib.UInt_max, 0) : stdlib.sub(await ctc.getBalance(), v3194));
        const v3197 = stdlib.add(v3196, v3194);
        const v3201 = stdlib.sub(v3197, v3196);
        ;
        const v3204 = v3178[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
        const v3205 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
        const v3209 = stdlib.sub(v3205, v3185);
        const v3212 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
        const v3213 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 2)];
        const v3214 = [v3209, v3212, v3213];
        const v3215 = stdlib.Array_set(v3178, stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0), v3214);
        ;
        const v3216 = [v3184, v3185];
        await txn3.getOutput('Harvester_harvest', 'v3216', ctc12, v3216);
        let v3222;
        switch (v3186[0]) {
          case 'None': {
            const v3223 = v3186[1];
            v3222 = v3181;
            
            break;
            }
          case 'Some': {
            const v3224 = v3186[1];
            v3222 = v3224;
            
            break;
            }
          }
        let v3225;
        switch (v3187[0]) {
          case 'None': {
            const v3226 = v3187[1];
            v3225 = v3182;
            
            break;
            }
          case 'Some': {
            const v3227 = v3187[1];
            v3225 = v3227;
            
            break;
            }
          }
        let v3228;
        switch (v3188[0]) {
          case 'None': {
            const v3229 = v3188[1];
            v3228 = v3183;
            
            break;
            }
          case 'Some': {
            const v3230 = v3188[1];
            v3228 = v3230;
            
            break;
            }
          }
        const v3232 = stdlib.add(v3225, v3228);
        const v3236 = stdlib.add(v3228, v3225);
        const v3237 = stdlib.eq(v3232, v3236);
        const v3238 = stdlib.lt(v3232, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
        const v3239 = v3237 ? v3238 : false;
        const v3240 = stdlib.gt(v3232, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
        const v3241 = v3239 ? v3240 : false;
        stdlib.assert(v3241, {
          at: './util.rsh:96:4:application',
          fs: ['at ./util.rsh:295:21:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3242 = {
          addr: v3222,
          fee: v3225,
          lpFee: v3228,
          totFee: v3232
          };
        const cv2511 = v2511;
        const cv2512 = v2509;
        const cv2513 = v3242;
        const cv2514 = v3073;
        const cv2520 = v3215;
        const cv2521 = v3201;
        
        v2511 = cv2511;
        v2512 = cv2512;
        v2513 = cv2513;
        v2514 = cv2514;
        v2520 = cv2520;
        v2521 = cv2521;
        
        continue;
        break;
        }
      case 'Provider_deposit0_161': {
        const v3589 = v3072[1];
        undefined /* setApiDetails */;
        const v3590 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
        const v3591 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
        const v3592 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
        const v3686 = stdlib.add(v2521, v3590);
        ;
        const v3687 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v3688 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v3692 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v3693 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v3694 = [v3688, v3692, v3693];
        const v3695 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v3694);
        ;
        const v3696 = v3695[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v3697 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v3698 = stdlib.add(v3697, v3591);
        const v3701 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v3702 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v3703 = [v3698, v3701, v3702];
        const v3704 = stdlib.Array_set(v3695, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v3703);
        ;
        const v3780 = stdlib.gt(v3590, stdlib.checkedBigNumberify('./n2nn.rsh:173:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v3780, {
          at: './n2nn.rsh:173:18:application',
          fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'amtA > 0',
          who: 'Admin'
          });
        const v3781 = stdlib.gt(v3591, stdlib.checkedBigNumberify('./n2nn.rsh:174:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v3781, {
          at: './n2nn.rsh:174:18:application',
          fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'amtB > 0',
          who: 'Admin'
          });
        const v3783 = v2512.balA;
        const v3784 = stdlib.sub(v3686, v3783);
        const v3785 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v3786 = v3785[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v3787 = v2512.balB;
        const v3788 = stdlib.sub(v3786, v3787);
        const v3791 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./n2nn.rsh:181:30:decimal', stdlib.UInt_max, 0));
        let v3792;
        if (v3791) {
          const v3793 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:182:70:application', stdlib.UInt_max, 1)];
          const v3794 = v3793[stdlib.checkedBigNumberify('./n2nn.rsh:182:70:application', stdlib.UInt_max, 0)];
          const v3796 = stdlib.muldiv(v3590, v3591, v3592);
          const v3797 = stdlib.ge(v3796, v3592);
          stdlib.assert(v3797, {
            at: './util.rsh:189:4:application',
            fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
            who: 'Admin'
            });
          const v3798 = stdlib.le(v3592, v3794);
          stdlib.assert(v3798, {
            at: './util.rsh:190:4:application',
            fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'minted <= poolBalance                                           ',
            who: 'Admin'
            });
          v3792 = v3592;
          }
        else {
          const v3799 = stdlib.sub(v3784, v3590);
          const v3800 = stdlib.sub(v3788, v3591);
          const v3801 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:183:92:application', stdlib.UInt_max, 1)];
          const v3802 = v3801[stdlib.checkedBigNumberify('./n2nn.rsh:183:92:application', stdlib.UInt_max, 0)];
          const v3805 = stdlib.muldiv(v3590, v2511, v3799);
          const v3806 = stdlib.muldiv(v3591, v2511, v3800);
          const v3807 = stdlib.lt(v3805, v3806);
          const v3808 = v3807 ? v3805 : v3806;
          const v3809 = stdlib.le(v3808, v3802);
          stdlib.assert(v3809, {
            at: './util.rsh:170:4:application',
            fs: ['at ./n2nn.rsh:183:34:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
            msg: 'result <= poolBalance                                           ',
            who: 'Admin'
            });
          v3792 = v3808;
          }
        const v3810 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1)];
        const v3811 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 0)];
        const v3815 = stdlib.sub(v3811, v3792);
        const v3818 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1)];
        const v3819 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 2)];
        const v3820 = [v3815, v3818, v3819];
        const v3821 = stdlib.Array_set(v3704, stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1), v3820);
        ;
        const v3822 = stdlib.add(v2511, v3792);
        await txn3.getOutput('Provider_deposit', 'v3792', ctc6, v3792);
        const cv2511 = v3822;
        const cv2512 = v2512;
        const cv2513 = v2513;
        const cv2514 = v3073;
        const cv2520 = v3821;
        const cv2521 = v3686;
        
        v2511 = cv2511;
        v2512 = cv2512;
        v2513 = cv2513;
        v2514 = cv2514;
        v2520 = cv2520;
        v2521 = cv2521;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_161': {
        const v4115 = v3072[1];
        undefined /* setApiDetails */;
        const v4116 = v4115[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
        const v4118 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:117:47:application', stdlib.UInt_max, 1)];
        const v4119 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:117:47:application', stdlib.UInt_max, 0)];
        ;
        const v4209 = stdlib.add(v4119, v4116);
        const v4212 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v4213 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v4214 = [v4209, v4212, v4213];
        const v4215 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v4214);
        ;
        const v4216 = v4215[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v4217 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v4221 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v4222 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v4223 = [v4217, v4221, v4222];
        const v4224 = stdlib.Array_set(v4215, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v4223);
        ;
        const v4356 = v2512.balA;
        const v4357 = stdlib.sub(v2521, v4356);
        const v4358 = v4224[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v4359 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v4360 = v2512.balB;
        const v4361 = stdlib.sub(v4359, v4360);
        const v4366 = stdlib.muldiv(v4116, v4357, v2511);
        const v4367 = stdlib.le(v4366, v4357);
        stdlib.assert(v4367, {
          at: './n2nn.rsh:131:18:application',
          fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4371 = stdlib.sub(v2521, v4366);
        ;
        const v4372 = stdlib.muldiv(v4116, v4361, v2511);
        const v4373 = stdlib.le(v4372, v4361);
        stdlib.assert(v4373, {
          at: './n2nn.rsh:136:18:application',
          fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4379 = stdlib.sub(v4359, v4372);
        const v4382 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 1)];
        const v4383 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 2)];
        const v4384 = [v4379, v4382, v4383];
        const v4385 = stdlib.Array_set(v4224, stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 0), v4384);
        ;
        const v4386 = stdlib.sub(v2511, v4116);
        const v4387 = [v4366, v4372];
        await txn3.getOutput('Provider_withdraw', 'v4387', ctc14, v4387);
        const cv2511 = v4386;
        const cv2512 = v2512;
        const cv2513 = v2513;
        const cv2514 = v3073;
        const cv2520 = v4385;
        const cv2521 = v4371;
        
        v2511 = cv2511;
        v2512 = cv2512;
        v2513 = cv2513;
        v2514 = cv2514;
        v2520 = cv2520;
        v2521 = cv2521;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_161': {
        const v4635 = v3072[1];
        undefined /* setApiDetails */;
        const v4636 = v4635[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
        const v4637 = v4635[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
        const v4725 = stdlib.add(v2521, v4636);
        ;
        const v4726 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v4727 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v4731 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v4732 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v4733 = [v4727, v4731, v4732];
        const v4734 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v4733);
        ;
        const v4735 = v4734[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v4736 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v4740 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v4741 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v4742 = [v4736, v4740, v4741];
        const v4743 = stdlib.Array_set(v4734, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v4742);
        ;
        const v4917 = v2512.balA;
        const v4918 = stdlib.sub(v4725, v4917);
        const v4919 = v4743[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v4920 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v4921 = v2512.balB;
        const v4922 = stdlib.sub(v4920, v4921);
        const v4923 = stdlib.lt(v4636, v4918);
        stdlib.assert(v4923, {
          at: './util.rsh:235:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v4924 = stdlib.gt(v4636, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4924, {
          at: './util.rsh:238:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v4925 = stdlib.sub(v4918, v4636);
        const v4926 = v2513.fee;
        const v4928 = v2513.totFee;
        const v4931 = stdlib.mul(v4926, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
        const v4932 = stdlib.div(v4931, v4928);
        const v4949 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v4928);
        const v4953 = stdlib.mul(v4636, v4949);
        const v4956 = stdlib.mul(v4925, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
        const v4959 = stdlib.add(v4956, v4953);
        const v4960 = stdlib.muldiv(v4953, v4922, v4959);
        const v4961 = stdlib.gt(v4960, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4961, {
          at: './util.rsh:124:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v4964 = stdlib.add(v4925, v4636);
        const v4965 = stdlib.gt(v4964, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4965, {
          at: './util.rsh:67:4:application',
          fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4966 = stdlib.muldiv(v4636, v4922, v4964);
        const v4968 = stdlib.sub(v4966, v4960);
        const v4969 = stdlib.muldiv(v4636, v4926, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
        const v4973 = stdlib.mul(v4968, v4932);
        const v4974 = stdlib.div(v4973, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
        const v4975 = stdlib.le(v4974, v4968);
        stdlib.assert(v4975, {
          at: './util.rsh:130:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v4977 = stdlib.le(v4969, v4964);
        stdlib.assert(v4977, {
          at: './util.rsh:131:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'pFeeIn <= reserveIn',
          who: 'Admin'
          });
        const v4978 = stdlib.le(v4974, v4922);
        stdlib.assert(v4978, {
          at: './util.rsh:132:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'pFeeOut <= reserveOut',
          who: 'Admin'
          });
        const v4979 = stdlib.muldiv(v4974, v4925, v4922);
        const v4980 = stdlib.ge(v4979, v4969);
        const v4981 = [v4960, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4974];
        const v4982 = [v4960, v4969, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v4983 = v4980 ? v4981 : v4982;
        const v4984 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
        const v4985 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
        const v4986 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
        const v4987 = stdlib.ge(v4984, v4637);
        stdlib.assert(v4987, {
          at: './util.rsh:240:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v4988 = stdlib.le(v4984, v4922);
        stdlib.assert(v4988, {
          at: './util.rsh:241:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v4994 = stdlib.sub(v4920, v4984);
        const v4997 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 1)];
        const v4998 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 2)];
        const v4999 = [v4994, v4997, v4998];
        const v5000 = stdlib.Array_set(v4743, stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 0), v4999);
        ;
        const v5002 = v5000[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v5003 = v5002[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v5005 = stdlib.sub(v5003, v4921);
        const v5007 = stdlib.gt(v4925, v4922);
        const v5008 = v5007 ? v4925 : v4922;
        const v5009 = stdlib.lt(v4925, v4922);
        const v5010 = v5009 ? v4925 : v4922;
        const v5011 = stdlib.muldiv(v4918, v5005, v5008);
        const v5012 = stdlib.ge(v5011, v5010);
        stdlib.assert(v5012, {
          at: './util.rsh:250:10:application',
          fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v5016 = stdlib.add(v4917, v4985);
        const v5020 = stdlib.add(v4921, v4986);
        const v5021 = {
          balA: v5016,
          balB: v5020
          };
        const v5027 = [v4984, v4985, v4986, v5005, v4918];
        await txn3.getOutput('Trader_swapAForB', 'v5027', ctc15, v5027);
        const cv2511 = v2511;
        const cv2512 = v5021;
        const cv2513 = v2513;
        const cv2514 = v3073;
        const cv2520 = v5000;
        const cv2521 = v4725;
        
        v2511 = cv2511;
        v2512 = cv2512;
        v2513 = cv2513;
        v2514 = cv2514;
        v2520 = cv2520;
        v2521 = cv2521;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_161': {
        const v5154 = v3072[1];
        undefined /* setApiDetails */;
        const v5155 = v5154[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
        const v5156 = v5154[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
        ;
        const v5246 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v5247 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v5251 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v5252 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v5253 = [v5247, v5251, v5252];
        const v5254 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v5253);
        ;
        const v5255 = v5254[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v5256 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
        const v5257 = stdlib.add(v5256, v5155);
        const v5260 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
        const v5261 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
        const v5262 = [v5257, v5260, v5261];
        const v5263 = stdlib.Array_set(v5254, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v5262);
        ;
        const v5561 = v5263[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v5562 = v5561[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
        const v5563 = v2512.balB;
        const v5564 = stdlib.sub(v5562, v5563);
        const v5566 = v2512.balA;
        const v5567 = stdlib.sub(v2521, v5566);
        const v5568 = stdlib.lt(v5155, v5564);
        stdlib.assert(v5568, {
          at: './util.rsh:235:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v5569 = stdlib.gt(v5155, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v5569, {
          at: './util.rsh:238:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v5570 = stdlib.sub(v5564, v5155);
        const v5571 = v2513.fee;
        const v5573 = v2513.totFee;
        const v5576 = stdlib.mul(v5571, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
        const v5577 = stdlib.div(v5576, v5573);
        const v5594 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v5573);
        const v5598 = stdlib.mul(v5155, v5594);
        const v5601 = stdlib.mul(v5570, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
        const v5604 = stdlib.add(v5601, v5598);
        const v5605 = stdlib.muldiv(v5598, v5567, v5604);
        const v5606 = stdlib.gt(v5605, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v5606, {
          at: './util.rsh:124:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v5609 = stdlib.add(v5570, v5155);
        const v5610 = stdlib.gt(v5609, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v5610, {
          at: './util.rsh:67:4:application',
          fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5611 = stdlib.muldiv(v5155, v5567, v5609);
        const v5613 = stdlib.sub(v5611, v5605);
        const v5614 = stdlib.muldiv(v5155, v5571, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
        const v5618 = stdlib.mul(v5613, v5577);
        const v5619 = stdlib.div(v5618, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
        const v5620 = stdlib.le(v5619, v5613);
        stdlib.assert(v5620, {
          at: './util.rsh:130:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v5622 = stdlib.le(v5614, v5609);
        stdlib.assert(v5622, {
          at: './util.rsh:131:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'pFeeIn <= reserveIn',
          who: 'Admin'
          });
        const v5623 = stdlib.le(v5619, v5567);
        stdlib.assert(v5623, {
          at: './util.rsh:132:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'pFeeOut <= reserveOut',
          who: 'Admin'
          });
        const v5624 = stdlib.muldiv(v5619, v5570, v5567);
        const v5625 = stdlib.ge(v5624, v5614);
        const v5626 = [v5605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v5619];
        const v5627 = [v5605, v5614, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v5628 = v5625 ? v5626 : v5627;
        const v5629 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
        const v5630 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
        const v5631 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
        const v5632 = stdlib.ge(v5629, v5156);
        stdlib.assert(v5632, {
          at: './util.rsh:240:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v5633 = stdlib.le(v5629, v5567);
        stdlib.assert(v5633, {
          at: './util.rsh:241:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v5637 = stdlib.sub(v2521, v5629);
        ;
        const v5641 = stdlib.sub(v5637, v5566);
        const v5643 = stdlib.gt(v5570, v5567);
        const v5644 = v5643 ? v5570 : v5567;
        const v5645 = stdlib.lt(v5570, v5567);
        const v5646 = v5645 ? v5570 : v5567;
        const v5647 = stdlib.muldiv(v5564, v5641, v5644);
        const v5648 = stdlib.ge(v5647, v5646);
        stdlib.assert(v5648, {
          at: './util.rsh:250:10:application',
          fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v5652 = stdlib.add(v5566, v5631);
        const v5656 = stdlib.add(v5563, v5630);
        const v5657 = {
          balA: v5652,
          balB: v5656
          };
        const v5663 = [v5629, v5630, v5631, v5641, v5564];
        await txn3.getOutput('Trader_swapBForA', 'v5663', ctc15, v5663);
        const cv2511 = v2511;
        const cv2512 = v5657;
        const cv2513 = v2513;
        const cv2514 = v3073;
        const cv2520 = v5263;
        const cv2521 = v5637;
        
        v2511 = cv2511;
        v2512 = cv2512;
        v2513 = cv2513;
        v2514 = cv2514;
        v2520 = cv2520;
        v2521 = cv2521;
        
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc3
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc1
    });
  const ctc11 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc9], ['newProtocolFee', ctc10], ['newProviderFee', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_161: ctc12,
    Provider_deposit0_161: ctc13,
    Provider_withdraw0_161: ctc14,
    Trader_swapAForB0_161: ctc15,
    Trader_swapBForA0_161: ctc15
    });
  
  
  const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2559 = ctc.selfAddress();
  const v2561 = stdlib.protect(ctc12, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:76:19:application call to "runHarvester_harvest0_161" (defined at: ./n2nn.rsh:96:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Harvester_harvest'
    });
  const v2562 = v2561[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
  const v2564 = v2513.addr;
  const v2565 = v2513.fee;
  const v2566 = v2513.lpFee;
  const v2567 = stdlib.addressEq(v2559, v2564);
  stdlib.assert(v2567, {
    at: './util.rsh:268:9:application',
    fs: ['at ./n2nn.rsh:97:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:266:54:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:76:19:application call to "runHarvester_harvest0_161" (defined at: ./n2nn.rsh:96:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'Thou art not the harvester                                      ',
    who: 'Harvester_harvest'
    });
  const v2568 = v2562.newProtocolFee;
  const v2569 = v2562.newProviderFee;
  let v2570;
  switch (v2568[0]) {
    case 'None': {
      const v2571 = v2568[1];
      v2570 = v2565;
      
      break;
      }
    case 'Some': {
      const v2572 = v2568[1];
      v2570 = v2572;
      
      break;
      }
    }
  let v2573;
  switch (v2569[0]) {
    case 'None': {
      const v2574 = v2569[1];
      v2573 = v2566;
      
      break;
      }
    case 'Some': {
      const v2575 = v2569[1];
      v2573 = v2575;
      
      break;
      }
    }
  const v2577 = stdlib.add(v2570, v2573);
  const v2581 = stdlib.add(v2573, v2570);
  const v2582 = stdlib.eq(v2577, v2581);
  const v2583 = stdlib.lt(v2577, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
  const v2584 = v2582 ? v2583 : false;
  const v2585 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
  const v2586 = v2584 ? v2585 : false;
  stdlib.assert(v2586, {
    at: './util.rsh:96:4:application',
    fs: ['at ./util.rsh:273:20:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./n2nn.rsh:97:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:266:54:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:97:15:application call to [unknown function] (defined at: ./n2nn.rsh:97:15:function exp)', 'at ./n2nn.rsh:76:19:application call to "runHarvester_harvest0_161" (defined at: ./n2nn.rsh:96:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v2589 = ['Harvester_harvest0_161', v2561];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558, v2589],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:98:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./n2nn.rsh:98:21:decimal', stdlib.UInt_max, 0), v2472], [stdlib.checkedBigNumberify('./n2nn.rsh:98:32:decimal', stdlib.UInt_max, 0), v2449]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
      
      switch (v3072[0]) {
        case 'Harvester_harvest0_161': {
          const v3075 = v3072[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Harvester_harvest"
            });
          ;
          const v3161 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v3162 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v3166 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v3167 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v3168 = [v3162, v3166, v3167];
          const v3169 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v3168);
          ;
          const v3170 = v3169[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v3171 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v3175 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v3176 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v3177 = [v3171, v3175, v3176];
          const v3178 = stdlib.Array_set(v3169, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v3177);
          ;
          const v3180 = v3075[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
          const v3181 = v2513.addr;
          const v3182 = v2513.fee;
          const v3183 = v2513.lpFee;
          const v3184 = v2512.balA;
          const v3185 = v2512.balB;
          const v3186 = v3180.newHarvesterAddr;
          const v3187 = v3180.newProtocolFee;
          const v3188 = v3180.newProviderFee;
          const v3189 = v3180.receiver;
          const v3190 = stdlib.addressEq(v3071, v3181);
          ;
          const v3194 = stdlib.sub(v2521, v3184);
          sim_r.txns.push({
            amt: v3184,
            kind: 'from',
            to: v3189,
            tok: undefined /* Nothing */
            });
          const v3196 = (stdlib.le(await ctc.getBalance(), v3194) ? stdlib.checkedBigNumberify('./util.rsh:284:27:application', stdlib.UInt_max, 0) : stdlib.sub(await ctc.getBalance(), v3194));
          const v3197 = stdlib.add(v3196, v3194);
          const v3201 = stdlib.sub(v3197, v3196);
          sim_r.txns.push({
            amt: v3196,
            kind: 'from',
            to: v3189,
            tok: undefined /* Nothing */
            });
          const v3204 = v3178[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
          const v3205 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
          const v3209 = stdlib.sub(v3205, v3185);
          const v3212 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
          const v3213 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 2)];
          const v3214 = [v3209, v3212, v3213];
          const v3215 = stdlib.Array_set(v3178, stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0), v3214);
          sim_r.txns.push({
            amt: v3185,
            kind: 'from',
            to: v3189,
            tok: v2449
            });
          const v3216 = [v3184, v3185];
          const v3217 = await txn1.getOutput('Harvester_harvest', 'v3216', ctc15, v3216);
          
          let v3222;
          switch (v3186[0]) {
            case 'None': {
              const v3223 = v3186[1];
              v3222 = v3181;
              
              break;
              }
            case 'Some': {
              const v3224 = v3186[1];
              v3222 = v3224;
              
              break;
              }
            }
          let v3225;
          switch (v3187[0]) {
            case 'None': {
              const v3226 = v3187[1];
              v3225 = v3182;
              
              break;
              }
            case 'Some': {
              const v3227 = v3187[1];
              v3225 = v3227;
              
              break;
              }
            }
          let v3228;
          switch (v3188[0]) {
            case 'None': {
              const v3229 = v3188[1];
              v3228 = v3183;
              
              break;
              }
            case 'Some': {
              const v3230 = v3188[1];
              v3228 = v3230;
              
              break;
              }
            }
          const v3232 = stdlib.add(v3225, v3228);
          const v3236 = stdlib.add(v3228, v3225);
          const v3237 = stdlib.eq(v3232, v3236);
          const v3238 = stdlib.lt(v3232, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
          const v3239 = v3237 ? v3238 : false;
          const v3240 = stdlib.gt(v3232, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
          const v3241 = v3239 ? v3240 : false;
          ;
          const v3242 = {
            addr: v3222,
            fee: v3225,
            lpFee: v3228,
            totFee: v3232
            };
          const v7909 = v2511;
          const v7910 = v2509;
          const v7911 = v3242;
          const v7913 = v3215;
          const v7914 = v3201;
          const v7915 = v3215[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v7916 = v7915[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_deposit0_161': {
          const v3589 = v3072[1];
          
          break;
          }
        case 'Provider_withdraw0_161': {
          const v4115 = v3072[1];
          
          break;
          }
        case 'Trader_swapAForB0_161': {
          const v4635 = v3072[1];
          
          break;
          }
        case 'Trader_swapBForA0_161': {
          const v5154 = v3072[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
  switch (v3072[0]) {
    case 'Harvester_harvest0_161': {
      const v3075 = v3072[1];
      undefined /* setApiDetails */;
      ;
      const v3161 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v3162 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v3166 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v3167 = v3161[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v3168 = [v3162, v3166, v3167];
      const v3169 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v3168);
      ;
      const v3170 = v3169[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v3171 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v3175 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v3176 = v3170[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v3177 = [v3171, v3175, v3176];
      const v3178 = stdlib.Array_set(v3169, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v3177);
      ;
      const v3180 = v3075[stdlib.checkedBigNumberify('./n2nn.rsh:96:11:spread', stdlib.UInt_max, 0)];
      const v3181 = v2513.addr;
      const v3182 = v2513.fee;
      const v3183 = v2513.lpFee;
      const v3184 = v2512.balA;
      const v3185 = v2512.balB;
      const v3186 = v3180.newHarvesterAddr;
      const v3187 = v3180.newProtocolFee;
      const v3188 = v3180.newProviderFee;
      const v3189 = v3180.receiver;
      const v3190 = stdlib.addressEq(v3071, v3181);
      stdlib.assert(v3190, {
        at: './util.rsh:282:10:application',
        fs: ['at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
        msg: 'Thou art not the harvester                                      ',
        who: 'Harvester_harvest'
        });
      const v3194 = stdlib.sub(v2521, v3184);
      ;
      const v3196 = (stdlib.le(await ctc.getBalance(), v3194) ? stdlib.checkedBigNumberify('./util.rsh:284:27:application', stdlib.UInt_max, 0) : stdlib.sub(await ctc.getBalance(), v3194));
      const v3197 = stdlib.add(v3196, v3194);
      const v3201 = stdlib.sub(v3197, v3196);
      ;
      const v3204 = v3178[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
      const v3205 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
      const v3209 = stdlib.sub(v3205, v3185);
      const v3212 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
      const v3213 = v3204[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 2)];
      const v3214 = [v3209, v3212, v3213];
      const v3215 = stdlib.Array_set(v3178, stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0), v3214);
      ;
      const v3216 = [v3184, v3185];
      const v3217 = await txn1.getOutput('Harvester_harvest', 'v3216', ctc15, v3216);
      if (v1503) {
        stdlib.protect(ctc8, await interact.out(v3075, v3217), {
          at: './n2nn.rsh:96:12:application',
          fs: ['at ./n2nn.rsh:96:12:application call to [unknown function] (defined at: ./n2nn.rsh:96:12:function exp)', 'at ./util.rsh:287:14:application call to "harvestDone" (defined at: ./n2nn.rsh:99:28:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
          msg: 'out',
          who: 'Harvester_harvest'
          });
        }
      else {
        }
      
      let v3222;
      switch (v3186[0]) {
        case 'None': {
          const v3223 = v3186[1];
          v3222 = v3181;
          
          break;
          }
        case 'Some': {
          const v3224 = v3186[1];
          v3222 = v3224;
          
          break;
          }
        }
      let v3225;
      switch (v3187[0]) {
        case 'None': {
          const v3226 = v3187[1];
          v3225 = v3182;
          
          break;
          }
        case 'Some': {
          const v3227 = v3187[1];
          v3225 = v3227;
          
          break;
          }
        }
      let v3228;
      switch (v3188[0]) {
        case 'None': {
          const v3229 = v3188[1];
          v3228 = v3183;
          
          break;
          }
        case 'Some': {
          const v3230 = v3188[1];
          v3228 = v3230;
          
          break;
          }
        }
      const v3232 = stdlib.add(v3225, v3228);
      const v3236 = stdlib.add(v3228, v3225);
      const v3237 = stdlib.eq(v3232, v3236);
      const v3238 = stdlib.lt(v3232, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
      const v3239 = v3237 ? v3238 : false;
      const v3240 = stdlib.gt(v3232, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
      const v3241 = v3239 ? v3240 : false;
      stdlib.assert(v3241, {
        at: './util.rsh:96:4:application',
        fs: ['at ./util.rsh:295:21:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./n2nn.rsh:99:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./n2nn.rsh:99:28:application call to [unknown function] (defined at: ./n2nn.rsh:99:28:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v3242 = {
        addr: v3222,
        fee: v3225,
        lpFee: v3228,
        totFee: v3232
        };
      const v7909 = v2511;
      const v7910 = v2509;
      const v7911 = v3242;
      const v7913 = v3215;
      const v7914 = v3201;
      const v7915 = v3215[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v7916 = v7915[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Provider_deposit0_161': {
      const v3589 = v3072[1];
      return;
      break;
      }
    case 'Provider_withdraw0_161': {
      const v4115 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_161': {
      const v4635 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_161': {
      const v5154 = v3072[1];
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_161: ctc13,
    Provider_deposit0_161: ctc8,
    Provider_withdraw0_161: ctc14,
    Trader_swapAForB0_161: ctc15,
    Trader_swapBForA0_161: ctc15
    });
  
  
  const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2622 = stdlib.protect(ctc8, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v2623 = v2622[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
  const v2624 = v2622[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
  const v2625 = v2622[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
  const v2627 = stdlib.gt(v2623, stdlib.checkedBigNumberify('./n2nn.rsh:149:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2627, {
    at: './n2nn.rsh:149:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Provider_deposit'
    });
  const v2628 = stdlib.gt(v2624, stdlib.checkedBigNumberify('./n2nn.rsh:150:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2628, {
    at: './n2nn.rsh:150:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtB > 0',
    who: 'Provider_deposit'
    });
  const v2630 = v2512.balA;
  const v2631 = stdlib.sub(v2521, v2630);
  const v2634 = v2512.balB;
  const v2635 = stdlib.sub(v2558, v2634);
  const v2637 = stdlib.sub(stdlib.UInt_max, v2521);
  const v2638 = stdlib.ge(v2637, v2623);
  stdlib.assert(v2638, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:153:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v2639 = stdlib.add(v2521, v2623);
  const v2642 = stdlib.sub(stdlib.UInt_max, v2558);
  const v2643 = stdlib.ge(v2642, v2624);
  stdlib.assert(v2643, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:154:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v2644 = stdlib.add(v2558, v2624);
  const v2648 = stdlib.sub(stdlib.UInt_max, v2631);
  const v2649 = stdlib.ge(v2648, v2623);
  stdlib.assert(v2649, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:155:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v2650 = stdlib.add(v2631, v2623);
  const v2655 = stdlib.sub(stdlib.UInt_max, v2635);
  const v2656 = stdlib.ge(v2655, v2624);
  stdlib.assert(v2656, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:156:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v2657 = stdlib.add(v2635, v2624);
  const v2658 = stdlib.le(v2639, stdlib.UInt_max);
  stdlib.assert(v2658, {
    at: './n2nn.rsh:157:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'actBalAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2659 = stdlib.le(v2644, stdlib.UInt_max);
  stdlib.assert(v2659, {
    at: './n2nn.rsh:158:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'actBalBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2660 = stdlib.le(v2650, stdlib.UInt_max);
  stdlib.assert(v2660, {
    at: './n2nn.rsh:159:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2661 = stdlib.le(v2657, stdlib.UInt_max);
  stdlib.assert(v2661, {
    at: './n2nn.rsh:160:17:application',
    fs: ['at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v2662 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./n2nn.rsh:162:47:decimal', stdlib.UInt_max, 0));
  let v2663;
  if (v2662) {
    const v2664 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:163:65:application', stdlib.UInt_max, 1)];
    const v2665 = v2664[stdlib.checkedBigNumberify('./n2nn.rsh:163:65:application', stdlib.UInt_max, 0)];
    const v2666 = stdlib.gt(v2625, stdlib.checkedBigNumberify('./util.rsh:187:15:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2666, {
      at: './util.rsh:187:5:application',
      fs: ['at ./n2nn.rsh:163:34:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'minted > 0                                                      ',
      who: 'Provider_deposit'
      });
    const v2667 = stdlib.muldiv(v2623, v2624, v2625);
    const v2668 = stdlib.ge(v2667, v2625);
    stdlib.assert(v2668, {
      at: './util.rsh:189:4:application',
      fs: ['at ./n2nn.rsh:163:34:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
      who: 'Provider_deposit'
      });
    const v2669 = stdlib.le(v2625, v2665);
    stdlib.assert(v2669, {
      at: './util.rsh:190:4:application',
      fs: ['at ./n2nn.rsh:163:34:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'minted <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v2663 = v2625;
    }
  else {
    const v2670 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:164:73:application', stdlib.UInt_max, 1)];
    const v2671 = v2670[stdlib.checkedBigNumberify('./n2nn.rsh:164:73:application', stdlib.UInt_max, 0)];
    const v2672 = stdlib.gt(v2631, stdlib.checkedBigNumberify('./util.rsh:165:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2672, {
      at: './util.rsh:165:5:application',
      fs: ['at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'balA > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v2673 = stdlib.gt(v2635, stdlib.checkedBigNumberify('./util.rsh:166:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v2673, {
      at: './util.rsh:166:5:application',
      fs: ['at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'balB > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v2674 = stdlib.muldiv(v2623, v2511, v2631);
    const v2675 = stdlib.muldiv(v2624, v2511, v2635);
    const v2676 = stdlib.lt(v2674, v2675);
    const v2677 = v2676 ? v2674 : v2675;
    const v2678 = stdlib.le(v2677, v2671);
    stdlib.assert(v2678, {
      at: './util.rsh:170:4:application',
      fs: ['at ./n2nn.rsh:164:29:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
      msg: 'result <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v2663 = v2677;
    }
  const v2679 = stdlib.sub(stdlib.UInt_max, v2511);
  const v2680 = stdlib.ge(v2679, v2663);
  stdlib.assert(v2680, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:165:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:148:33:application call to [unknown function] (defined at: ./n2nn.rsh:148:33:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_deposit0_161" (defined at: ./n2nn.rsh:147:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_deposit'
    });
  const v2684 = ['Provider_deposit0_161', v2622];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558, v2684],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v2623, [[stdlib.checkedBigNumberify('./n2nn.rsh:167:38:decimal', stdlib.UInt_max, 0), v2472], [v2624, v2449]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
      
      switch (v3072[0]) {
        case 'Harvester_harvest0_161': {
          const v3075 = v3072[1];
          
          break;
          }
        case 'Provider_deposit0_161': {
          const v3589 = v3072[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v3590 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
          const v3591 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
          const v3592 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
          const v3686 = stdlib.add(v2521, v3590);
          sim_r.txns.push({
            amt: v3590,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3687 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v3688 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v3692 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v3693 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v3694 = [v3688, v3692, v3693];
          const v3695 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v3694);
          ;
          const v3696 = v3695[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v3697 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v3698 = stdlib.add(v3697, v3591);
          const v3701 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v3702 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v3703 = [v3698, v3701, v3702];
          const v3704 = stdlib.Array_set(v3695, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v3703);
          sim_r.txns.push({
            amt: v3591,
            kind: 'to',
            tok: v2449
            });
          const v3780 = stdlib.gt(v3590, stdlib.checkedBigNumberify('./n2nn.rsh:173:26:decimal', stdlib.UInt_max, 0));
          ;
          const v3781 = stdlib.gt(v3591, stdlib.checkedBigNumberify('./n2nn.rsh:174:26:decimal', stdlib.UInt_max, 0));
          ;
          const v3783 = v2512.balA;
          const v3784 = stdlib.sub(v3686, v3783);
          const v3785 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v3786 = v3785[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v3787 = v2512.balB;
          const v3788 = stdlib.sub(v3786, v3787);
          const v3791 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./n2nn.rsh:181:30:decimal', stdlib.UInt_max, 0));
          let v3792;
          if (v3791) {
            const v3793 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:182:70:application', stdlib.UInt_max, 1)];
            const v3794 = v3793[stdlib.checkedBigNumberify('./n2nn.rsh:182:70:application', stdlib.UInt_max, 0)];
            const v3796 = stdlib.muldiv(v3590, v3591, v3592);
            const v3797 = stdlib.ge(v3796, v3592);
            ;
            const v3798 = stdlib.le(v3592, v3794);
            ;
            v3792 = v3592;
            }
          else {
            const v3799 = stdlib.sub(v3784, v3590);
            const v3800 = stdlib.sub(v3788, v3591);
            const v3801 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:183:92:application', stdlib.UInt_max, 1)];
            const v3802 = v3801[stdlib.checkedBigNumberify('./n2nn.rsh:183:92:application', stdlib.UInt_max, 0)];
            const v3805 = stdlib.muldiv(v3590, v2511, v3799);
            const v3806 = stdlib.muldiv(v3591, v2511, v3800);
            const v3807 = stdlib.lt(v3805, v3806);
            const v3808 = v3807 ? v3805 : v3806;
            const v3809 = stdlib.le(v3808, v3802);
            ;
            v3792 = v3808;
            }
          const v3810 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1)];
          const v3811 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 0)];
          const v3815 = stdlib.sub(v3811, v3792);
          const v3818 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1)];
          const v3819 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 2)];
          const v3820 = [v3815, v3818, v3819];
          const v3821 = stdlib.Array_set(v3704, stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1), v3820);
          sim_r.txns.push({
            amt: v3792,
            kind: 'from',
            to: v3071,
            tok: v2472
            });
          const v3822 = stdlib.add(v2511, v3792);
          const v3827 = await txn1.getOutput('Provider_deposit', 'v3792', ctc1, v3792);
          
          const v7969 = v3822;
          const v7970 = v2512;
          const v7971 = v2513;
          const v7973 = v3821;
          const v7974 = v3686;
          const v7975 = v3821[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v7976 = v7975[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_161': {
          const v4115 = v3072[1];
          
          break;
          }
        case 'Trader_swapAForB0_161': {
          const v4635 = v3072[1];
          
          break;
          }
        case 'Trader_swapBForA0_161': {
          const v5154 = v3072[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
  switch (v3072[0]) {
    case 'Harvester_harvest0_161': {
      const v3075 = v3072[1];
      return;
      break;
      }
    case 'Provider_deposit0_161': {
      const v3589 = v3072[1];
      undefined /* setApiDetails */;
      const v3590 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 0)];
      const v3591 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 1)];
      const v3592 = v3589[stdlib.checkedBigNumberify('./n2nn.rsh:147:11:spread', stdlib.UInt_max, 2)];
      const v3686 = stdlib.add(v2521, v3590);
      ;
      const v3687 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v3688 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v3692 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v3693 = v3687[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v3694 = [v3688, v3692, v3693];
      const v3695 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v3694);
      ;
      const v3696 = v3695[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v3697 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v3698 = stdlib.add(v3697, v3591);
      const v3701 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v3702 = v3696[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v3703 = [v3698, v3701, v3702];
      const v3704 = stdlib.Array_set(v3695, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v3703);
      ;
      const v3780 = stdlib.gt(v3590, stdlib.checkedBigNumberify('./n2nn.rsh:173:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3780, {
        at: './n2nn.rsh:173:18:application',
        fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
        msg: 'amtA > 0',
        who: 'Provider_deposit'
        });
      const v3781 = stdlib.gt(v3591, stdlib.checkedBigNumberify('./n2nn.rsh:174:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3781, {
        at: './n2nn.rsh:174:18:application',
        fs: ['at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
        msg: 'amtB > 0',
        who: 'Provider_deposit'
        });
      const v3783 = v2512.balA;
      const v3784 = stdlib.sub(v3686, v3783);
      const v3785 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v3786 = v3785[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v3787 = v2512.balB;
      const v3788 = stdlib.sub(v3786, v3787);
      const v3791 = stdlib.eq(v2511, stdlib.checkedBigNumberify('./n2nn.rsh:181:30:decimal', stdlib.UInt_max, 0));
      let v3792;
      if (v3791) {
        const v3793 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:182:70:application', stdlib.UInt_max, 1)];
        const v3794 = v3793[stdlib.checkedBigNumberify('./n2nn.rsh:182:70:application', stdlib.UInt_max, 0)];
        const v3796 = stdlib.muldiv(v3590, v3591, v3592);
        const v3797 = stdlib.ge(v3796, v3592);
        stdlib.assert(v3797, {
          at: './util.rsh:189:4:application',
          fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
          who: 'Provider_deposit'
          });
        const v3798 = stdlib.le(v3592, v3794);
        stdlib.assert(v3798, {
          at: './util.rsh:190:4:application',
          fs: ['at ./n2nn.rsh:182:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'minted <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v3792 = v3592;
        }
      else {
        const v3799 = stdlib.sub(v3784, v3590);
        const v3800 = stdlib.sub(v3788, v3591);
        const v3801 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:183:92:application', stdlib.UInt_max, 1)];
        const v3802 = v3801[stdlib.checkedBigNumberify('./n2nn.rsh:183:92:application', stdlib.UInt_max, 0)];
        const v3805 = stdlib.muldiv(v3590, v2511, v3799);
        const v3806 = stdlib.muldiv(v3591, v2511, v3800);
        const v3807 = stdlib.lt(v3805, v3806);
        const v3808 = v3807 ? v3805 : v3806;
        const v3809 = stdlib.le(v3808, v3802);
        stdlib.assert(v3809, {
          at: './util.rsh:170:4:application',
          fs: ['at ./n2nn.rsh:183:34:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'result <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v3792 = v3808;
        }
      const v3810 = v3704[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1)];
      const v3811 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 0)];
      const v3815 = stdlib.sub(v3811, v3792);
      const v3818 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1)];
      const v3819 = v3810[stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 2)];
      const v3820 = [v3815, v3818, v3819];
      const v3821 = stdlib.Array_set(v3704, stdlib.checkedBigNumberify('./n2nn.rsh:187:42:application', stdlib.UInt_max, 1), v3820);
      ;
      const v3822 = stdlib.add(v2511, v3792);
      const v3827 = await txn1.getOutput('Provider_deposit', 'v3792', ctc1, v3792);
      if (v1503) {
        stdlib.protect(ctc9, await interact.out(v3589, v3827), {
          at: './n2nn.rsh:147:12:application',
          fs: ['at ./n2nn.rsh:147:12:application call to [unknown function] (defined at: ./n2nn.rsh:147:12:function exp)', 'at ./n2nn.rsh:192:22:application call to "depositDone" (defined at: ./n2nn.rsh:172:46:function exp)', 'at ./n2nn.rsh:172:46:application call to [unknown function] (defined at: ./n2nn.rsh:172:46:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v7969 = v3822;
      const v7970 = v2512;
      const v7971 = v2513;
      const v7973 = v3821;
      const v7974 = v3686;
      const v7975 = v3821[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v7976 = v7975[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Provider_withdraw0_161': {
      const v4115 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_161': {
      const v4635 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_161': {
      const v5154 = v3072[1];
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_161: ctc13,
    Provider_deposit0_161: ctc14,
    Provider_withdraw0_161: ctc8,
    Trader_swapAForB0_161: ctc15,
    Trader_swapBForA0_161: ctc15
    });
  const ctc17 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  
  const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2593 = stdlib.protect(ctc8, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v2594 = v2593[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
  const v2596 = stdlib.gt(v2511, stdlib.checkedBigNumberify('./n2nn.rsh:103:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2596, {
    at: './n2nn.rsh:103:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'There has been liquidity dispensed.',
    who: 'Provider_withdraw'
    });
  const v2597 = stdlib.le(v2594, v2511);
  stdlib.assert(v2597, {
    at: './n2nn.rsh:104:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'liquidity less than total',
    who: 'Provider_withdraw'
    });
  const v2599 = v2512.balA;
  const v2600 = stdlib.sub(v2521, v2599);
  const v2603 = v2512.balB;
  const v2604 = stdlib.sub(v2558, v2603);
  const v2605 = stdlib.gt(v2600, stdlib.checkedBigNumberify('./n2nn.rsh:107:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2605, {
    at: './n2nn.rsh:107:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2606 = stdlib.gt(v2604, stdlib.checkedBigNumberify('./n2nn.rsh:108:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2606, {
    at: './n2nn.rsh:108:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2607 = stdlib.muldiv(v2594, v2600, v2511);
  const v2608 = stdlib.le(v2607, v2600);
  stdlib.assert(v2608, {
    at: './n2nn.rsh:110:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2609 = stdlib.muldiv(v2594, v2604, v2511);
  const v2610 = stdlib.le(v2609, v2604);
  stdlib.assert(v2610, {
    at: './n2nn.rsh:112:17:application',
    fs: ['at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2611 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:113:30:application', stdlib.UInt_max, 1)];
  const v2612 = v2611[stdlib.checkedBigNumberify('./n2nn.rsh:113:30:application', stdlib.UInt_max, 0)];
  const v2613 = stdlib.sub(stdlib.UInt_max, v2612);
  const v2614 = stdlib.ge(v2613, v2594);
  stdlib.assert(v2614, {
    at: './util.rsh:14:4:application',
    fs: ['at ./n2nn.rsh:113:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:102:21:application call to [unknown function] (defined at: ./n2nn.rsh:102:21:function exp)', 'at ./n2nn.rsh:76:19:application call to "runProvider_withdraw0_161" (defined at: ./n2nn.rsh:101:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_withdraw'
    });
  const v2618 = ['Provider_withdraw0_161', v2593];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558, v2618],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:116:28:decimal', stdlib.UInt_max, 0), [[v2594, v2472], [stdlib.checkedBigNumberify('./n2nn.rsh:116:54:decimal', stdlib.UInt_max, 0), v2449]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
      
      switch (v3072[0]) {
        case 'Harvester_harvest0_161': {
          const v3075 = v3072[1];
          
          break;
          }
        case 'Provider_deposit0_161': {
          const v3589 = v3072[1];
          
          break;
          }
        case 'Provider_withdraw0_161': {
          const v4115 = v3072[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v4116 = v4115[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
          const v4118 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:117:47:application', stdlib.UInt_max, 1)];
          const v4119 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:117:47:application', stdlib.UInt_max, 0)];
          ;
          const v4209 = stdlib.add(v4119, v4116);
          const v4212 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v4213 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v4214 = [v4209, v4212, v4213];
          const v4215 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v4214);
          sim_r.txns.push({
            amt: v4116,
            kind: 'to',
            tok: v2472
            });
          const v4216 = v4215[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v4217 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v4221 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v4222 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v4223 = [v4217, v4221, v4222];
          const v4224 = stdlib.Array_set(v4215, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v4223);
          ;
          const v4356 = v2512.balA;
          const v4357 = stdlib.sub(v2521, v4356);
          const v4358 = v4224[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v4359 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v4360 = v2512.balB;
          const v4361 = stdlib.sub(v4359, v4360);
          const v4366 = stdlib.muldiv(v4116, v4357, v2511);
          const v4367 = stdlib.le(v4366, v4357);
          ;
          const v4371 = stdlib.sub(v2521, v4366);
          sim_r.txns.push({
            amt: v4366,
            kind: 'from',
            to: v3071,
            tok: undefined /* Nothing */
            });
          const v4372 = stdlib.muldiv(v4116, v4361, v2511);
          const v4373 = stdlib.le(v4372, v4361);
          ;
          const v4379 = stdlib.sub(v4359, v4372);
          const v4382 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 1)];
          const v4383 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 2)];
          const v4384 = [v4379, v4382, v4383];
          const v4385 = stdlib.Array_set(v4224, stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 0), v4384);
          sim_r.txns.push({
            amt: v4372,
            kind: 'from',
            to: v3071,
            tok: v2449
            });
          const v4386 = stdlib.sub(v2511, v4116);
          const v4387 = [v4366, v4372];
          const v4388 = await txn1.getOutput('Provider_withdraw', 'v4387', ctc17, v4387);
          
          const v8029 = v4386;
          const v8030 = v2512;
          const v8031 = v2513;
          const v8033 = v4385;
          const v8034 = v4371;
          const v8035 = v4385[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v8036 = v8035[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_161': {
          const v4635 = v3072[1];
          
          break;
          }
        case 'Trader_swapBForA0_161': {
          const v5154 = v3072[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
  switch (v3072[0]) {
    case 'Harvester_harvest0_161': {
      const v3075 = v3072[1];
      return;
      break;
      }
    case 'Provider_deposit0_161': {
      const v3589 = v3072[1];
      return;
      break;
      }
    case 'Provider_withdraw0_161': {
      const v4115 = v3072[1];
      undefined /* setApiDetails */;
      const v4116 = v4115[stdlib.checkedBigNumberify('./n2nn.rsh:101:11:spread', stdlib.UInt_max, 0)];
      const v4118 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:117:47:application', stdlib.UInt_max, 1)];
      const v4119 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:117:47:application', stdlib.UInt_max, 0)];
      ;
      const v4209 = stdlib.add(v4119, v4116);
      const v4212 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v4213 = v4118[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v4214 = [v4209, v4212, v4213];
      const v4215 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v4214);
      ;
      const v4216 = v4215[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v4217 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v4221 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v4222 = v4216[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v4223 = [v4217, v4221, v4222];
      const v4224 = stdlib.Array_set(v4215, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v4223);
      ;
      const v4356 = v2512.balA;
      const v4357 = stdlib.sub(v2521, v4356);
      const v4358 = v4224[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v4359 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v4360 = v2512.balB;
      const v4361 = stdlib.sub(v4359, v4360);
      const v4366 = stdlib.muldiv(v4116, v4357, v2511);
      const v4367 = stdlib.le(v4366, v4357);
      stdlib.assert(v4367, {
        at: './n2nn.rsh:131:18:application',
        fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v4371 = stdlib.sub(v2521, v4366);
      ;
      const v4372 = stdlib.muldiv(v4116, v4361, v2511);
      const v4373 = stdlib.le(v4372, v4361);
      stdlib.assert(v4373, {
        at: './n2nn.rsh:136:18:application',
        fs: ['at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v4379 = stdlib.sub(v4359, v4372);
      const v4382 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 1)];
      const v4383 = v4358[stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 2)];
      const v4384 = [v4379, v4382, v4383];
      const v4385 = stdlib.Array_set(v4224, stdlib.checkedBigNumberify('./n2nn.rsh:137:37:application', stdlib.UInt_max, 0), v4384);
      ;
      const v4386 = stdlib.sub(v2511, v4116);
      const v4387 = [v4366, v4372];
      const v4388 = await txn1.getOutput('Provider_withdraw', 'v4387', ctc17, v4387);
      if (v1503) {
        stdlib.protect(ctc9, await interact.out(v4115, v4388), {
          at: './n2nn.rsh:101:12:application',
          fs: ['at ./n2nn.rsh:101:12:application call to [unknown function] (defined at: ./n2nn.rsh:101:12:function exp)', 'at ./n2nn.rsh:142:23:application call to "withdrawDone" (defined at: ./n2nn.rsh:119:35:function exp)', 'at ./n2nn.rsh:119:35:application call to [unknown function] (defined at: ./n2nn.rsh:119:35:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v8029 = v4386;
      const v8030 = v2512;
      const v8031 = v2513;
      const v8033 = v4385;
      const v8034 = v4371;
      const v8035 = v4385[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v8036 = v8035[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Trader_swapAForB0_161': {
      const v4635 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_161': {
      const v5154 = v3072[1];
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_161: ctc13,
    Provider_deposit0_161: ctc14,
    Provider_withdraw0_161: ctc15,
    Trader_swapAForB0_161: ctc8,
    Trader_swapBForA0_161: ctc8
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2688 = stdlib.protect(ctc8, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v2689 = v2688[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
  const v2690 = v2688[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
  const v2693 = v2512.balA;
  const v2694 = stdlib.sub(v2521, v2693);
  const v2697 = v2512.balB;
  const v2698 = stdlib.sub(v2558, v2697);
  const v2699 = stdlib.gt(v2689, stdlib.checkedBigNumberify('./util.rsh:199:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2699, {
    at: './util.rsh:199:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapAForB'
    });
  const v2700 = stdlib.gt(v2694, v2689);
  stdlib.assert(v2700, {
    at: './util.rsh:200:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapAForB'
    });
  const v2701 = stdlib.gt(v2698, stdlib.checkedBigNumberify('./util.rsh:201:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2701, {
    at: './util.rsh:201:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapAForB'
    });
  const v2702 = stdlib.gt(v2690, stdlib.checkedBigNumberify('./util.rsh:202:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2702, {
    at: './util.rsh:202:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2703 = stdlib.lt(v2690, v2698);
  stdlib.assert(v2703, {
    at: './util.rsh:203:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2705 = stdlib.sub(stdlib.UInt_max, v2521);
  const v2706 = stdlib.ge(v2705, v2689);
  stdlib.assert(v2706, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:205:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v2707 = stdlib.add(v2521, v2689);
  const v2708 = stdlib.lt(v2707, stdlib.UInt_max);
  stdlib.assert(v2708, {
    at: './util.rsh:206:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2709 = stdlib.sub(stdlib.UInt_max, v2694);
  const v2710 = stdlib.ge(v2709, v2689);
  stdlib.assert(v2710, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:207:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v2711 = stdlib.add(v2694, v2689);
  const v2712 = stdlib.lt(v2711, stdlib.UInt_max);
  stdlib.assert(v2712, {
    at: './util.rsh:208:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2713 = stdlib.lt(v2698, stdlib.UInt_max);
  stdlib.assert(v2713, {
    at: './util.rsh:209:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v2714 = v2513.fee;
  const v2715 = v2513.lpFee;
  const v2716 = v2513.totFee;
  const v2719 = stdlib.mul(v2714, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
  const v2720 = stdlib.div(v2719, v2716);
  const v2730 = stdlib.add(v2715, v2714);
  const v2731 = stdlib.eq(v2716, v2730);
  const v2732 = stdlib.lt(v2716, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
  const v2733 = v2731 ? v2732 : false;
  const v2734 = stdlib.gt(v2716, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
  const v2735 = v2733 ? v2734 : false;
  stdlib.assert(v2735, {
    at: './util.rsh:96:4:application',
    fs: ['at ./util.rsh:102:15:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2737 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v2716);
  const v2738 = stdlib.gt(v2737, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2738, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v2739 = stdlib.div(stdlib.UInt_max, v2737);
  const v2740 = stdlib.le(v2689, v2739);
  stdlib.assert(v2740, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2741 = stdlib.mul(v2689, v2737);
  const v2742 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v2743 = stdlib.le(v2694, v2742);
  stdlib.assert(v2743, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:106:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2744 = stdlib.mul(v2694, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v2745 = stdlib.sub(stdlib.UInt_max, v2744);
  const v2746 = stdlib.ge(v2745, v2741);
  stdlib.assert(v2746, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:107:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2747 = stdlib.add(v2744, v2741);
  const v2748 = stdlib.muldiv(v2741, v2698, v2747);
  const v2749 = stdlib.gt(v2748, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2749, {
    at: './util.rsh:124:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapAForB'
    });
  const v2753 = stdlib.gt(v2711, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2753, {
    at: './util.rsh:67:4:application',
    fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2754 = stdlib.muldiv(v2689, v2698, v2711);
  const v2755 = stdlib.ge(v2754, v2748);
  stdlib.assert(v2755, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:126:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapAForB'
    });
  const v2756 = stdlib.sub(v2754, v2748);
  const v2757 = stdlib.muldiv(v2689, v2714, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
  const v2758 = stdlib.gt(v2720, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2758, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v2759 = stdlib.div(stdlib.UInt_max, v2720);
  const v2760 = stdlib.le(v2756, v2759);
  stdlib.assert(v2760, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapAForB'
    });
  const v2761 = stdlib.mul(v2756, v2720);
  const v2762 = stdlib.div(v2761, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
  const v2763 = stdlib.le(v2762, v2756);
  stdlib.assert(v2763, {
    at: './util.rsh:130:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapAForB'
    });
  const v2765 = stdlib.le(v2757, v2711);
  stdlib.assert(v2765, {
    at: './util.rsh:131:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeIn <= reserveIn',
    who: 'Trader_swapAForB'
    });
  const v2766 = stdlib.le(v2762, v2698);
  stdlib.assert(v2766, {
    at: './util.rsh:132:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeOut <= reserveOut',
    who: 'Trader_swapAForB'
    });
  const v2767 = stdlib.muldiv(v2762, v2694, v2698);
  const v2768 = stdlib.ge(v2767, v2757);
  const v2769 = [v2748, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2762];
  const v2770 = [v2748, v2757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v2771 = v2768 ? v2769 : v2770;
  const v2772 = v2771[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 0)];
  const v2773 = v2771[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 1)];
  const v2774 = v2771[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 2)];
  const v2775 = stdlib.ge(v2772, v2690);
  stdlib.assert(v2775, {
    at: './util.rsh:212:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapAForB'
    });
  const v2776 = stdlib.le(v2772, v2698);
  stdlib.assert(v2776, {
    at: './util.rsh:213:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapAForB'
    });
  const v2777 = stdlib.sub(v2698, v2772);
  const v2780 = stdlib.sub(v2558, v2772);
  const v2783 = stdlib.sub(stdlib.UInt_max, v2693);
  const v2784 = stdlib.ge(v2783, v2773);
  stdlib.assert(v2784, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:219:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2785 = stdlib.add(v2693, v2773);
  const v2786 = stdlib.le(v2785, v2707);
  stdlib.assert(v2786, {
    at: './util.rsh:220:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2787 = stdlib.sub(stdlib.UInt_max, v2697);
  const v2788 = stdlib.ge(v2787, v2774);
  stdlib.assert(v2788, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:221:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v2789 = stdlib.add(v2697, v2774);
  const v2790 = stdlib.le(v2789, v2780);
  stdlib.assert(v2790, {
    at: './util.rsh:222:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2804 = stdlib.gt(v2694, v2698);
  const v2805 = v2804 ? v2694 : v2698;
  const v2806 = stdlib.lt(v2694, v2698);
  const v2807 = v2806 ? v2694 : v2698;
  const v2808 = stdlib.muldiv(v2711, v2777, v2805);
  const v2809 = stdlib.ge(v2808, v2807);
  stdlib.assert(v2809, {
    at: './util.rsh:229:9:application',
    fs: ['at ./n2nn.rsh:198:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:198:29:application call to [unknown function] (defined at: ./n2nn.rsh:198:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapAForB0_161" (defined at: ./n2nn.rsh:197:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapAForB'
    });
  const v2812 = ['Trader_swapAForB0_161', v2688];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558, v2812],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v2689, [[stdlib.checkedBigNumberify('./n2nn.rsh:200:34:decimal', stdlib.UInt_max, 0), v2472], [stdlib.checkedBigNumberify('./n2nn.rsh:200:47:decimal', stdlib.UInt_max, 0), v2449]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
      
      switch (v3072[0]) {
        case 'Harvester_harvest0_161': {
          const v3075 = v3072[1];
          
          break;
          }
        case 'Provider_deposit0_161': {
          const v3589 = v3072[1];
          
          break;
          }
        case 'Provider_withdraw0_161': {
          const v4115 = v3072[1];
          
          break;
          }
        case 'Trader_swapAForB0_161': {
          const v4635 = v3072[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v4636 = v4635[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
          const v4637 = v4635[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
          const v4725 = stdlib.add(v2521, v4636);
          sim_r.txns.push({
            amt: v4636,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4726 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v4727 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v4731 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v4732 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v4733 = [v4727, v4731, v4732];
          const v4734 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v4733);
          ;
          const v4735 = v4734[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v4736 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v4740 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v4741 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v4742 = [v4736, v4740, v4741];
          const v4743 = stdlib.Array_set(v4734, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v4742);
          ;
          const v4917 = v2512.balA;
          const v4918 = stdlib.sub(v4725, v4917);
          const v4919 = v4743[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v4920 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v4921 = v2512.balB;
          const v4922 = stdlib.sub(v4920, v4921);
          const v4923 = stdlib.lt(v4636, v4918);
          ;
          const v4924 = stdlib.gt(v4636, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
          ;
          const v4925 = stdlib.sub(v4918, v4636);
          const v4926 = v2513.fee;
          const v4928 = v2513.totFee;
          const v4931 = stdlib.mul(v4926, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
          const v4932 = stdlib.div(v4931, v4928);
          const v4949 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v4928);
          const v4953 = stdlib.mul(v4636, v4949);
          const v4956 = stdlib.mul(v4925, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
          const v4959 = stdlib.add(v4956, v4953);
          const v4960 = stdlib.muldiv(v4953, v4922, v4959);
          const v4961 = stdlib.gt(v4960, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
          ;
          const v4964 = stdlib.add(v4925, v4636);
          const v4965 = stdlib.gt(v4964, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
          ;
          const v4966 = stdlib.muldiv(v4636, v4922, v4964);
          const v4968 = stdlib.sub(v4966, v4960);
          const v4969 = stdlib.muldiv(v4636, v4926, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
          const v4973 = stdlib.mul(v4968, v4932);
          const v4974 = stdlib.div(v4973, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
          const v4975 = stdlib.le(v4974, v4968);
          ;
          const v4977 = stdlib.le(v4969, v4964);
          ;
          const v4978 = stdlib.le(v4974, v4922);
          ;
          const v4979 = stdlib.muldiv(v4974, v4925, v4922);
          const v4980 = stdlib.ge(v4979, v4969);
          const v4981 = [v4960, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4974];
          const v4982 = [v4960, v4969, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v4983 = v4980 ? v4981 : v4982;
          const v4984 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
          const v4985 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
          const v4986 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
          const v4987 = stdlib.ge(v4984, v4637);
          ;
          const v4988 = stdlib.le(v4984, v4922);
          ;
          const v4994 = stdlib.sub(v4920, v4984);
          const v4997 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 1)];
          const v4998 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 2)];
          const v4999 = [v4994, v4997, v4998];
          const v5000 = stdlib.Array_set(v4743, stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 0), v4999);
          sim_r.txns.push({
            amt: v4984,
            kind: 'from',
            to: v3071,
            tok: v2449
            });
          const v5002 = v5000[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v5003 = v5002[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v5005 = stdlib.sub(v5003, v4921);
          const v5007 = stdlib.gt(v4925, v4922);
          const v5008 = v5007 ? v4925 : v4922;
          const v5009 = stdlib.lt(v4925, v4922);
          const v5010 = v5009 ? v4925 : v4922;
          const v5011 = stdlib.muldiv(v4918, v5005, v5008);
          const v5012 = stdlib.ge(v5011, v5010);
          ;
          const v5016 = stdlib.add(v4917, v4985);
          const v5020 = stdlib.add(v4921, v4986);
          const v5021 = {
            balA: v5016,
            balB: v5020
            };
          const v5027 = [v4984, v4985, v4986, v5005, v4918];
          const v5028 = await txn1.getOutput('Trader_swapAForB', 'v5027', ctc17, v5027);
          
          const v8089 = v2511;
          const v8090 = v5021;
          const v8091 = v2513;
          const v8093 = v5000;
          const v8094 = v4725;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_161': {
          const v5154 = v3072[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
  switch (v3072[0]) {
    case 'Harvester_harvest0_161': {
      const v3075 = v3072[1];
      return;
      break;
      }
    case 'Provider_deposit0_161': {
      const v3589 = v3072[1];
      return;
      break;
      }
    case 'Provider_withdraw0_161': {
      const v4115 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_161': {
      const v4635 = v3072[1];
      undefined /* setApiDetails */;
      const v4636 = v4635[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 0)];
      const v4637 = v4635[stdlib.checkedBigNumberify('./n2nn.rsh:197:11:spread', stdlib.UInt_max, 1)];
      const v4725 = stdlib.add(v2521, v4636);
      ;
      const v4726 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v4727 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v4731 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v4732 = v4726[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v4733 = [v4727, v4731, v4732];
      const v4734 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v4733);
      ;
      const v4735 = v4734[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v4736 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v4740 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v4741 = v4735[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v4742 = [v4736, v4740, v4741];
      const v4743 = stdlib.Array_set(v4734, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v4742);
      ;
      const v4917 = v2512.balA;
      const v4918 = stdlib.sub(v4725, v4917);
      const v4919 = v4743[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v4920 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v4921 = v2512.balB;
      const v4922 = stdlib.sub(v4920, v4921);
      const v4923 = stdlib.lt(v4636, v4918);
      stdlib.assert(v4923, {
        at: './util.rsh:235:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapAForB'
        });
      const v4924 = stdlib.gt(v4636, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4924, {
        at: './util.rsh:238:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapAForB'
        });
      const v4925 = stdlib.sub(v4918, v4636);
      const v4926 = v2513.fee;
      const v4928 = v2513.totFee;
      const v4931 = stdlib.mul(v4926, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
      const v4932 = stdlib.div(v4931, v4928);
      const v4949 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v4928);
      const v4953 = stdlib.mul(v4636, v4949);
      const v4956 = stdlib.mul(v4925, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
      const v4959 = stdlib.add(v4956, v4953);
      const v4960 = stdlib.muldiv(v4953, v4922, v4959);
      const v4961 = stdlib.gt(v4960, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4961, {
        at: './util.rsh:124:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapAForB'
        });
      const v4964 = stdlib.add(v4925, v4636);
      const v4965 = stdlib.gt(v4964, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4965, {
        at: './util.rsh:67:4:application',
        fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v4966 = stdlib.muldiv(v4636, v4922, v4964);
      const v4968 = stdlib.sub(v4966, v4960);
      const v4969 = stdlib.muldiv(v4636, v4926, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
      const v4973 = stdlib.mul(v4968, v4932);
      const v4974 = stdlib.div(v4973, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
      const v4975 = stdlib.le(v4974, v4968);
      stdlib.assert(v4975, {
        at: './util.rsh:130:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapAForB'
        });
      const v4977 = stdlib.le(v4969, v4964);
      stdlib.assert(v4977, {
        at: './util.rsh:131:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'pFeeIn <= reserveIn',
        who: 'Trader_swapAForB'
        });
      const v4978 = stdlib.le(v4974, v4922);
      stdlib.assert(v4978, {
        at: './util.rsh:132:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'pFeeOut <= reserveOut',
        who: 'Trader_swapAForB'
        });
      const v4979 = stdlib.muldiv(v4974, v4925, v4922);
      const v4980 = stdlib.ge(v4979, v4969);
      const v4981 = [v4960, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v4974];
      const v4982 = [v4960, v4969, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v4983 = v4980 ? v4981 : v4982;
      const v4984 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
      const v4985 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
      const v4986 = v4983[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
      const v4987 = stdlib.ge(v4984, v4637);
      stdlib.assert(v4987, {
        at: './util.rsh:240:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapAForB'
        });
      const v4988 = stdlib.le(v4984, v4922);
      stdlib.assert(v4988, {
        at: './util.rsh:241:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapAForB'
        });
      const v4994 = stdlib.sub(v4920, v4984);
      const v4997 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 1)];
      const v4998 = v4919[stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 2)];
      const v4999 = [v4994, v4997, v4998];
      const v5000 = stdlib.Array_set(v4743, stdlib.checkedBigNumberify('./n2nn.rsh:205:35:application', stdlib.UInt_max, 0), v4999);
      ;
      const v5002 = v5000[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v5003 = v5002[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v5005 = stdlib.sub(v5003, v4921);
      const v5007 = stdlib.gt(v4925, v4922);
      const v5008 = v5007 ? v4925 : v4922;
      const v5009 = stdlib.lt(v4925, v4922);
      const v5010 = v5009 ? v4925 : v4922;
      const v5011 = stdlib.muldiv(v4918, v5005, v5008);
      const v5012 = stdlib.ge(v5011, v5010);
      stdlib.assert(v5012, {
        at: './util.rsh:250:10:application',
        fs: ['at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapAForB'
        });
      const v5016 = stdlib.add(v4917, v4985);
      const v5020 = stdlib.add(v4921, v4986);
      const v5021 = {
        balA: v5016,
        balB: v5020
        };
      const v5027 = [v4984, v4985, v4986, v5005, v4918];
      const v5028 = await txn1.getOutput('Trader_swapAForB', 'v5027', ctc17, v5027);
      if (v1503) {
        stdlib.protect(ctc9, await interact.out(v4635, v5028), {
          at: './n2nn.rsh:197:12:application',
          fs: ['at ./n2nn.rsh:197:12:application call to [unknown function] (defined at: ./n2nn.rsh:197:12:function exp)', 'at ./util.rsh:257:12:application call to "tradeDone" (defined at: ./n2nn.rsh:203:40:function exp)', 'at ./n2nn.rsh:212:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:203:40:application call to [unknown function] (defined at: ./n2nn.rsh:203:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v8089 = v2511;
      const v8090 = v5021;
      const v8091 = v2513;
      const v8093 = v5000;
      const v8094 = v4725;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_161': {
      const v5154 = v3072[1];
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_161: ctc13,
    Provider_deposit0_161: ctc14,
    Provider_withdraw0_161: ctc15,
    Trader_swapAForB0_161: ctc8,
    Trader_swapBForA0_161: ctc8
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2816 = stdlib.protect(ctc8, await interact.in(), {
    at: './n2nn.rsh:1:23:application',
    fs: ['at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v2817 = v2816[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
  const v2818 = v2816[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
  const v2822 = v2512.balB;
  const v2823 = stdlib.sub(v2558, v2822);
  const v2825 = v2512.balA;
  const v2826 = stdlib.sub(v2521, v2825);
  const v2827 = stdlib.gt(v2817, stdlib.checkedBigNumberify('./util.rsh:199:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2827, {
    at: './util.rsh:199:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapBForA'
    });
  const v2828 = stdlib.gt(v2823, v2817);
  stdlib.assert(v2828, {
    at: './util.rsh:200:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapBForA'
    });
  const v2829 = stdlib.gt(v2826, stdlib.checkedBigNumberify('./util.rsh:201:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2829, {
    at: './util.rsh:201:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapBForA'
    });
  const v2830 = stdlib.gt(v2818, stdlib.checkedBigNumberify('./util.rsh:202:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2830, {
    at: './util.rsh:202:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2831 = stdlib.lt(v2818, v2826);
  stdlib.assert(v2831, {
    at: './util.rsh:203:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2834 = stdlib.sub(stdlib.UInt_max, v2558);
  const v2835 = stdlib.ge(v2834, v2817);
  stdlib.assert(v2835, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:205:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v2836 = stdlib.add(v2558, v2817);
  const v2837 = stdlib.lt(v2836, stdlib.UInt_max);
  stdlib.assert(v2837, {
    at: './util.rsh:206:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2838 = stdlib.sub(stdlib.UInt_max, v2823);
  const v2839 = stdlib.ge(v2838, v2817);
  stdlib.assert(v2839, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:207:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v2840 = stdlib.add(v2823, v2817);
  const v2841 = stdlib.lt(v2840, stdlib.UInt_max);
  stdlib.assert(v2841, {
    at: './util.rsh:208:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2842 = stdlib.lt(v2826, stdlib.UInt_max);
  stdlib.assert(v2842, {
    at: './util.rsh:209:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v2843 = v2513.fee;
  const v2844 = v2513.lpFee;
  const v2845 = v2513.totFee;
  const v2848 = stdlib.mul(v2843, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
  const v2849 = stdlib.div(v2848, v2845);
  const v2859 = stdlib.add(v2844, v2843);
  const v2860 = stdlib.eq(v2845, v2859);
  const v2861 = stdlib.lt(v2845, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
  const v2862 = v2860 ? v2861 : false;
  const v2863 = stdlib.gt(v2845, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
  const v2864 = v2862 ? v2863 : false;
  stdlib.assert(v2864, {
    at: './util.rsh:96:4:application',
    fs: ['at ./util.rsh:102:15:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2866 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v2845);
  const v2867 = stdlib.gt(v2866, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2867, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v2868 = stdlib.div(stdlib.UInt_max, v2866);
  const v2869 = stdlib.le(v2817, v2868);
  stdlib.assert(v2869, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2870 = stdlib.mul(v2817, v2866);
  const v2871 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v2872 = stdlib.le(v2823, v2871);
  stdlib.assert(v2872, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:106:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2873 = stdlib.mul(v2823, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v2874 = stdlib.sub(stdlib.UInt_max, v2873);
  const v2875 = stdlib.ge(v2874, v2870);
  stdlib.assert(v2875, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:107:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2876 = stdlib.add(v2873, v2870);
  const v2877 = stdlib.muldiv(v2870, v2826, v2876);
  const v2878 = stdlib.gt(v2877, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2878, {
    at: './util.rsh:124:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapBForA'
    });
  const v2882 = stdlib.gt(v2840, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2882, {
    at: './util.rsh:67:4:application',
    fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2883 = stdlib.muldiv(v2817, v2826, v2840);
  const v2884 = stdlib.ge(v2883, v2877);
  stdlib.assert(v2884, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:126:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapBForA'
    });
  const v2885 = stdlib.sub(v2883, v2877);
  const v2886 = stdlib.muldiv(v2817, v2843, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
  const v2887 = stdlib.gt(v2849, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2887, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v2888 = stdlib.div(stdlib.UInt_max, v2849);
  const v2889 = stdlib.le(v2885, v2888);
  stdlib.assert(v2889, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapBForA'
    });
  const v2890 = stdlib.mul(v2885, v2849);
  const v2891 = stdlib.div(v2890, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
  const v2892 = stdlib.le(v2891, v2885);
  stdlib.assert(v2892, {
    at: './util.rsh:130:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapBForA'
    });
  const v2894 = stdlib.le(v2886, v2840);
  stdlib.assert(v2894, {
    at: './util.rsh:131:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeIn <= reserveIn',
    who: 'Trader_swapBForA'
    });
  const v2895 = stdlib.le(v2891, v2826);
  stdlib.assert(v2895, {
    at: './util.rsh:132:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'pFeeOut <= reserveOut',
    who: 'Trader_swapBForA'
    });
  const v2896 = stdlib.muldiv(v2891, v2823, v2826);
  const v2897 = stdlib.ge(v2896, v2886);
  const v2898 = [v2877, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2891];
  const v2899 = [v2877, v2886, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v2900 = v2897 ? v2898 : v2899;
  const v2901 = v2900[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 0)];
  const v2902 = v2900[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 1)];
  const v2903 = v2900[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 2)];
  const v2904 = stdlib.ge(v2901, v2818);
  stdlib.assert(v2904, {
    at: './util.rsh:212:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapBForA'
    });
  const v2905 = stdlib.le(v2901, v2826);
  stdlib.assert(v2905, {
    at: './util.rsh:213:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapBForA'
    });
  const v2906 = stdlib.sub(v2826, v2901);
  const v2908 = stdlib.sub(v2521, v2901);
  const v2911 = stdlib.sub(stdlib.UInt_max, v2822);
  const v2912 = stdlib.ge(v2911, v2902);
  stdlib.assert(v2912, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:219:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2913 = stdlib.add(v2822, v2902);
  const v2914 = stdlib.le(v2913, v2836);
  stdlib.assert(v2914, {
    at: './util.rsh:220:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2915 = stdlib.sub(stdlib.UInt_max, v2825);
  const v2916 = stdlib.ge(v2915, v2903);
  stdlib.assert(v2916, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:221:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v2917 = stdlib.add(v2825, v2903);
  const v2918 = stdlib.le(v2917, v2908);
  stdlib.assert(v2918, {
    at: './util.rsh:222:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v2932 = stdlib.gt(v2823, v2826);
  const v2933 = v2932 ? v2823 : v2826;
  const v2934 = stdlib.lt(v2823, v2826);
  const v2935 = v2934 ? v2823 : v2826;
  const v2936 = stdlib.muldiv(v2840, v2906, v2933);
  const v2937 = stdlib.ge(v2936, v2935);
  stdlib.assert(v2937, {
    at: './util.rsh:229:9:application',
    fs: ['at ./n2nn.rsh:216:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:216:29:application call to [unknown function] (defined at: ./n2nn.rsh:216:29:function exp)', 'at ./n2nn.rsh:76:19:application call to "runTrader_swapBForA0_161" (defined at: ./n2nn.rsh:215:11:function exp)', 'at ./n2nn.rsh:76:19:application call to [unknown function] (defined at: ./n2nn.rsh:76:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapBForA'
    });
  const v2940 = ['Trader_swapBForA0_161', v2816];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2449, v2472, v2509, v2511, v2512, v2513, v2520, v2521, v2558, v2940],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./n2nn.rsh:218:26:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./n2nn.rsh:218:31:decimal', stdlib.UInt_max, 0), v2472], [v2817, v2449]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
      
      switch (v3072[0]) {
        case 'Harvester_harvest0_161': {
          const v3075 = v3072[1];
          
          break;
          }
        case 'Provider_deposit0_161': {
          const v3589 = v3072[1];
          
          break;
          }
        case 'Provider_withdraw0_161': {
          const v4115 = v3072[1];
          
          break;
          }
        case 'Trader_swapAForB0_161': {
          const v4635 = v3072[1];
          
          break;
          }
        case 'Trader_swapBForA0_161': {
          const v5154 = v3072[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v5155 = v5154[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
          const v5156 = v5154[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
          ;
          const v5246 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v5247 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v5251 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v5252 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v5253 = [v5247, v5251, v5252];
          const v5254 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v5253);
          ;
          const v5255 = v5254[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v5256 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
          const v5257 = stdlib.add(v5256, v5155);
          const v5260 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
          const v5261 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
          const v5262 = [v5257, v5260, v5261];
          const v5263 = stdlib.Array_set(v5254, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v5262);
          sim_r.txns.push({
            amt: v5155,
            kind: 'to',
            tok: v2449
            });
          const v5561 = v5263[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v5562 = v5561[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
          const v5563 = v2512.balB;
          const v5564 = stdlib.sub(v5562, v5563);
          const v5566 = v2512.balA;
          const v5567 = stdlib.sub(v2521, v5566);
          const v5568 = stdlib.lt(v5155, v5564);
          ;
          const v5569 = stdlib.gt(v5155, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
          ;
          const v5570 = stdlib.sub(v5564, v5155);
          const v5571 = v2513.fee;
          const v5573 = v2513.totFee;
          const v5576 = stdlib.mul(v5571, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
          const v5577 = stdlib.div(v5576, v5573);
          const v5594 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v5573);
          const v5598 = stdlib.mul(v5155, v5594);
          const v5601 = stdlib.mul(v5570, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
          const v5604 = stdlib.add(v5601, v5598);
          const v5605 = stdlib.muldiv(v5598, v5567, v5604);
          const v5606 = stdlib.gt(v5605, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
          ;
          const v5609 = stdlib.add(v5570, v5155);
          const v5610 = stdlib.gt(v5609, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
          ;
          const v5611 = stdlib.muldiv(v5155, v5567, v5609);
          const v5613 = stdlib.sub(v5611, v5605);
          const v5614 = stdlib.muldiv(v5155, v5571, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
          const v5618 = stdlib.mul(v5613, v5577);
          const v5619 = stdlib.div(v5618, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
          const v5620 = stdlib.le(v5619, v5613);
          ;
          const v5622 = stdlib.le(v5614, v5609);
          ;
          const v5623 = stdlib.le(v5619, v5567);
          ;
          const v5624 = stdlib.muldiv(v5619, v5570, v5567);
          const v5625 = stdlib.ge(v5624, v5614);
          const v5626 = [v5605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v5619];
          const v5627 = [v5605, v5614, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v5628 = v5625 ? v5626 : v5627;
          const v5629 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
          const v5630 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
          const v5631 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
          const v5632 = stdlib.ge(v5629, v5156);
          ;
          const v5633 = stdlib.le(v5629, v5567);
          ;
          const v5637 = stdlib.sub(v2521, v5629);
          sim_r.txns.push({
            amt: v5629,
            kind: 'from',
            to: v3071,
            tok: undefined /* Nothing */
            });
          const v5641 = stdlib.sub(v5637, v5566);
          const v5643 = stdlib.gt(v5570, v5567);
          const v5644 = v5643 ? v5570 : v5567;
          const v5645 = stdlib.lt(v5570, v5567);
          const v5646 = v5645 ? v5570 : v5567;
          const v5647 = stdlib.muldiv(v5564, v5641, v5644);
          const v5648 = stdlib.ge(v5647, v5646);
          ;
          const v5652 = stdlib.add(v5566, v5631);
          const v5656 = stdlib.add(v5563, v5630);
          const v5657 = {
            balA: v5652,
            balB: v5656
            };
          const v5663 = [v5629, v5630, v5631, v5641, v5564];
          const v5664 = await txn1.getOutput('Trader_swapBForA', 'v5663', ctc17, v5663);
          
          const v8149 = v2511;
          const v8150 = v5657;
          const v8151 = v2513;
          const v8153 = v5263;
          const v8154 = v5637;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3072], secs: v3074, time: v3073, didSend: v1503, from: v3071 } = txn1;
  switch (v3072[0]) {
    case 'Harvester_harvest0_161': {
      const v3075 = v3072[1];
      return;
      break;
      }
    case 'Provider_deposit0_161': {
      const v3589 = v3072[1];
      return;
      break;
      }
    case 'Provider_withdraw0_161': {
      const v4115 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_161': {
      const v4635 = v3072[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_161': {
      const v5154 = v3072[1];
      undefined /* setApiDetails */;
      const v5155 = v5154[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 0)];
      const v5156 = v5154[stdlib.checkedBigNumberify('./n2nn.rsh:215:11:spread', stdlib.UInt_max, 1)];
      ;
      const v5246 = v2520[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v5247 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v5251 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v5252 = v5246[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v5253 = [v5247, v5251, v5252];
      const v5254 = stdlib.Array_set(v2520, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1), v5253);
      ;
      const v5255 = v5254[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v5256 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0)];
      const v5257 = stdlib.add(v5256, v5155);
      const v5260 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 1)];
      const v5261 = v5255[stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 2)];
      const v5262 = [v5257, v5260, v5261];
      const v5263 = stdlib.Array_set(v5254, stdlib.checkedBigNumberify('./n2nn.rsh:76:19:dot', stdlib.UInt_max, 0), v5262);
      ;
      const v5561 = v5263[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v5562 = v5561[stdlib.checkedBigNumberify('./n2nn.rsh:48:36:application', stdlib.UInt_max, 0)];
      const v5563 = v2512.balB;
      const v5564 = stdlib.sub(v5562, v5563);
      const v5566 = v2512.balA;
      const v5567 = stdlib.sub(v2521, v5566);
      const v5568 = stdlib.lt(v5155, v5564);
      stdlib.assert(v5568, {
        at: './util.rsh:235:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapBForA'
        });
      const v5569 = stdlib.gt(v5155, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v5569, {
        at: './util.rsh:238:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapBForA'
        });
      const v5570 = stdlib.sub(v5564, v5155);
      const v5571 = v2513.fee;
      const v5573 = v2513.totFee;
      const v5576 = stdlib.mul(v5571, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
      const v5577 = stdlib.div(v5576, v5573);
      const v5594 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v5573);
      const v5598 = stdlib.mul(v5155, v5594);
      const v5601 = stdlib.mul(v5570, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
      const v5604 = stdlib.add(v5601, v5598);
      const v5605 = stdlib.muldiv(v5598, v5567, v5604);
      const v5606 = stdlib.gt(v5605, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v5606, {
        at: './util.rsh:124:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapBForA'
        });
      const v5609 = stdlib.add(v5570, v5155);
      const v5610 = stdlib.gt(v5609, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v5610, {
        at: './util.rsh:67:4:application',
        fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v5611 = stdlib.muldiv(v5155, v5567, v5609);
      const v5613 = stdlib.sub(v5611, v5605);
      const v5614 = stdlib.muldiv(v5155, v5571, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
      const v5618 = stdlib.mul(v5613, v5577);
      const v5619 = stdlib.div(v5618, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
      const v5620 = stdlib.le(v5619, v5613);
      stdlib.assert(v5620, {
        at: './util.rsh:130:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapBForA'
        });
      const v5622 = stdlib.le(v5614, v5609);
      stdlib.assert(v5622, {
        at: './util.rsh:131:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'pFeeIn <= reserveIn',
        who: 'Trader_swapBForA'
        });
      const v5623 = stdlib.le(v5619, v5567);
      stdlib.assert(v5623, {
        at: './util.rsh:132:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'pFeeOut <= reserveOut',
        who: 'Trader_swapBForA'
        });
      const v5624 = stdlib.muldiv(v5619, v5570, v5567);
      const v5625 = stdlib.ge(v5624, v5614);
      const v5626 = [v5605, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v5619];
      const v5627 = [v5605, v5614, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v5628 = v5625 ? v5626 : v5627;
      const v5629 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
      const v5630 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
      const v5631 = v5628[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
      const v5632 = stdlib.ge(v5629, v5156);
      stdlib.assert(v5632, {
        at: './util.rsh:240:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapBForA'
        });
      const v5633 = stdlib.le(v5629, v5567);
      stdlib.assert(v5633, {
        at: './util.rsh:241:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapBForA'
        });
      const v5637 = stdlib.sub(v2521, v5629);
      ;
      const v5641 = stdlib.sub(v5637, v5566);
      const v5643 = stdlib.gt(v5570, v5567);
      const v5644 = v5643 ? v5570 : v5567;
      const v5645 = stdlib.lt(v5570, v5567);
      const v5646 = v5645 ? v5570 : v5567;
      const v5647 = stdlib.muldiv(v5564, v5641, v5644);
      const v5648 = stdlib.ge(v5647, v5646);
      stdlib.assert(v5648, {
        at: './util.rsh:250:10:application',
        fs: ['at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapBForA'
        });
      const v5652 = stdlib.add(v5566, v5631);
      const v5656 = stdlib.add(v5563, v5630);
      const v5657 = {
        balA: v5652,
        balB: v5656
        };
      const v5663 = [v5629, v5630, v5631, v5641, v5564];
      const v5664 = await txn1.getOutput('Trader_swapBForA', 'v5663', ctc17, v5663);
      if (v1503) {
        stdlib.protect(ctc9, await interact.out(v5154, v5664), {
          at: './n2nn.rsh:215:12:application',
          fs: ['at ./n2nn.rsh:215:12:application call to [unknown function] (defined at: ./n2nn.rsh:215:12:function exp)', 'at ./util.rsh:257:12:application call to "tradeDone" (defined at: ./n2nn.rsh:221:40:function exp)', 'at ./n2nn.rsh:230:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./n2nn.rsh:221:40:application call to [unknown function] (defined at: ./n2nn.rsh:221:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v8149 = v2511;
      const v8150 = v5657;
      const v8151 = v2513;
      const v8153 = v5263;
      const v8154 = v5637;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Harvester_harvest((address,(byte,byte[32]),(byte,byte[8]),(byte,byte[8])))(uint64,uint64)`, `Provider_deposit(uint64,uint64,uint64)uint64`, `Provider_withdraw(uint64)uint64[2]`, `Trader_swapAForB(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`],
    pure: [`Tokens_aBal()uint64`, `Tokens_aTok()uint64`, `Tokens_bBal()uint64`, `Tokens_bTok()uint64`, `Tokens_liquidityToken()uint64`, `Tokens_minted()uint64`, `Tokens_protocolBals()(uint64,uint64)`, `Tokens_protocolInfo()(address,uint64,uint64,uint64)`],
    sigs: [`Harvester_harvest((address,(byte,byte[32]),(byte,byte[8]),(byte,byte[8])))(uint64,uint64)`, `Provider_deposit(uint64,uint64,uint64)uint64`, `Provider_withdraw(uint64)uint64[2]`, `Tokens_aBal()uint64`, `Tokens_aTok()uint64`, `Tokens_bBal()uint64`, `Tokens_bTok()uint64`, `Tokens_liquidityToken()uint64`, `Tokens_minted()uint64`, `Tokens_protocolBals()(uint64,uint64)`, `Tokens_protocolInfo()(address,uint64,uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BiAZAAEECJBOIGQDEKCNBo7X0MkEss6u7wvch4rVDcinq4cP5sTKuAzDmYfpBtPxxsUJ4dSZ0QHgmun1Atnv+bgDQ6fS2Z4B7rGitwEw////////////ASYHAQABAQAIAAAAAAAAAAUIAAAAAAAAABkIAAAAAAAAAB4I//////////8iNQAxGEEMNSpkSSJbNQElWzUCNhoAF0lBAdMiNQQjNQZJIQoMQADySSELDEAAcEkhDAxAADlJIQ0MQAAZIQ0SRDQBJBJEKGQpZFBJNQNXmgg1B0IL3yEMEkQ0ASQSRChkKWRQSTUDVyAINQdCC8ZJIQ4MQAAQIQ4SRDYaATX/KDT/UEIBhiELEkQ0ASQSRChkKWRQSTUDVygQNQdCC5ZJIQ8MQABFSSEQDEAAByEQEkQ0AQAhDxJENAFJJAxAABMkEkQoZClkUEk1A1c4ODUHQgtiIxJEKGRJNQNXKCArUCcEUCcFUDUHQgtKIQoSRDQBSSQMQAATJBJEKGQpZFBJNQNXCAg1B0ILKyMSRChkSTUDV0gINQdCCxtJIREMQABzSSESDEAAUkkhEwxAABwhExJENhoBNhoCUDYaA1A1/yk0/1CBO69QQgDBIRISRDQBSSQMQAATJBJEKGQpZFBJNQNXAAg1B0IKyyMSRChkSTUDVyAINQdCCrshERJENhoBNhoCUDX/gAEDNP9QIRSvUEIAeEkhFQxAADpJIRYMQAAZIRYSRDQBJBJEKGQpZFBJNQNXkgg1B0IKeiEVEkQ2GgE2GgJQNf+AAQQ0/1AhFK9QQgA3gdvY7UUSRDYaATX/gAECNP9QgUuvUEIAHjYaAhc1BDYaAzYaARdJIwxACFNJIQcMQAf5IQcSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkoiWzX/JVs1/lcQEDX9IQVbNfxXKBA1+1c4ODX6V3AiNfmBkgFbNfhJNQU194AEXWqlOTT3ULA09yJVSYECDEAEvkkhBwxAA7VJJAxAAcYkEkQ091cBEDX2NPYiWzX1NPlXERE19DT5VwARNPRXAAg09FcICFA09FcQAVBQNfM081cAEUk18iJbNPUIFjTyVwgIUDTyVxABUDTzVxERUDXxNPU0/4gJjzT7JVs18DTxVwARIls08Ak17zT7Ils17jT4NO4JNe009TTvDEQ09SINRDTvNPUJNew0+iEFWzXrNPohF1s16jT1IQQ06gkLSTXpNO0dNOwhBAs06QiXSTXoIg1ENOw09QhJNeciDUQ09TTtHTTnlzToCTXmNPU06x0hBJc15TTmNOshBgs06goLIQYKSTXkNOYORDTlNOcORDTkNO0ORDToFjTlFlAlr1A06BYlr1A05BZQNOQ07B007Zc05Q9NSTXjIls14jTjJVs14TTjIQhbNeA04jT2JVsPRDTiNO0ORDT4NOIJNd+xIrIBNOKyCCOyEDEAsgezNN807gk13jTvNN4dNO007Ek07Q1NlzTtNOxJNO0MTQ9EgAgAAAAAAAAWHzTiFjThFlA04BZQNN4WUDTvFlBQsDTiFjThFlA04BZQNN4WUDTvFlA1BzT/NP40/TT8NO404AgWNPA04QgWUDT6MgY08TTfQgdeSDT3VwEQNfY09iJbNfU0+DT1CDX0NPWIB/A0+VcRETXzNPlXABE081cACDTzVwgIUDTzVxABUFA18jTyVwARSTXxVwAINPFXCAhQNPFXEAFQNPJXERFQNfA0+yJbNe809DTvCTXuNPBXABFJNe0iWzXsNPslWzXrNOw06wk16jT1NO4MRDT1Ig1ENO409Qk16TT6IQVbNeg0+iEXWzXnNPUhBDTnCQtJNeY06h006SEECzTmCJdJNeUiDUQ06TT1CEk15CINRDT1NOodNOSXNOUJNeM09TToHSEElzXiNOM06CEGCzTnCgshBgpJNeE04w5ENOI05A5ENOE06g5ENOUWNOIWUCWvUDTlFiWvUDThFlA04TTpHTTqlzTiD01JNeAiWzXfNOAlWzXeNOAhCFs13TTfNPYlWw9ENN806g5ENOw03wkWNO1XCAhQNO1XEAFQNPBXERFQNdyxIrIBNN+yEiSyEDEAshQ0/7IRszTcVwARIls06wk12zTuNNsdNOo06Uk06g1NlzTqNOlJNOoMTQ9EgAgAAAAAAAATozTfFjTeFlA03RZQNNsWUDTuFlBQsDTfFjTeFlA03RZQNNsWUDTuFlA1BzT/NP40/TT8NO803ggWNOs03QgWUDT6MgY03DT0QgV1SDT3VwEINfY09hc19TT5VxERNfQ0+VcAETT0Ils09QgWNPRXCAhQNPRXEAFQUDXzNPU0/ogGAjTzVwARSTXyVwAINPJXCAhQNPJXEAFQNPNXERFQNfE0+DT7IlsJNfA08VcAEUk17yJbSTXuNPslWwk17TT1NPAdNPyXSTXsNPAORLEisgE07LIII7IQMQCyB7M09TTtHTT8l0k16zTtDkSxIrIBNOuyEiSyEDEAshQ0/7IRs4AIAAAAAAAAESM07BY06xZQULA07BY06xZQNQc0/zT+NP00/DT1CTT7NPoyBjTuNOsJFjTvVwgIUDTvVxABUDTxVxERUDT4NOwJQgRzSSMMQAE/SDT3VwEYNfY09iJbNfU09iVbNfQ09iEIWzXzNPg09Qg18jT1iATyNPlXERE18TT5VwARNPFXAAg08VcICFA08VcQAVBQNfA08FcAEUk17yJbNPQIFjTvVwgIUDTvVxABUDTwVxERUDXuNPQ0/4gEwTT1Ig1ENPQiDUQ0/CISQQAeNPU09B0085c08w9ENPM07lcRESJbDkQ08zXtQgBBNPU0/B008jT7IlsJNPUJlzXsNPQ0/B007lcAESJbNPslWwk09AmXSTXrNOxJNOsMTUk16jTuVxERIlsORDTqNe007lcRETXssSKyATTtshIkshAxALIUNP6yEbOACAAAAAAAAA7QNO0WULA07RY1BzT/NP40/TT8NO0INPs0+jIGNO5XABE07CJbNO0JFjTsVwgIUDTsVxABUFA08kIDLkg091cBUzX2NPlXERE19TT5VwARNPVXAAg09VcICFA09VcQAVBQNfQ09FcAEUk181cACDTzVwgIUDTzVxABUDT0VxERUDXyNPY18TT6VwAgNfA0+yJbNe80+yVbNe408VcAIDXtMQA08BJENPg07wk17LEisgE077III7IQNO2yB7MyCmAyCngJNOwJNeuxIrIBNOuyCCOyEDTtsgezNPJXABE16rEisgE07rISJLIQNO2yFDT/shGzgAgAAAAAAAAMkDTvFjTuFlBQsDTvFjTuFlA1BzTxVyAhSTXoIlVAAAc08DXpQgANNOhXASBJNec16UIAADTxV0EJSTXnIlVAAAo0+iEFWzXoQgAMNOcjW0k15jXoQgAANPFXSglJNeYiVUAACjT6gShbNedCAAw05iNbSTXlNedCAAA06DTnCEk15jTnNOgIEjTmIQYMEDTmIg0QRDT/NP40/TT8NP006TToFlA05xZQNOYWUDIGNOoiWzTuCRY06lcICFA06lcQAVA08lcREVA06zTsCDTrCUIBmSMSRCM0ARJENARJIhJMNAISEUQoZDUDgASai5F0sDQDVwAgMQASRCEIrzX/NAMhBVs0A4FIWzT/IjT/NANXKCArUCcEUCcFUDIGNANXUCIiQgFGSCI0ARJENARJIhJMNAISEURJNQVJSiJbNf9XCCA1/lcoCDX9VzAgNfyABHAIXmE0/xZQNP5QNP1QNPxQsCEJiAGwgRGvSTX7SVBJNfpXABE1+SWvNPlXCAhQNPlXEAFQNPpXERFQNfghCYgBhbEisgEishIkshAyCrIUNP+yEbMhGCEEDUQhCYgBZ7EisgEhB7IQIRiyIoEGsiM0/bIlNP6yJoFgr7InMgOyKDIKsimztDw194AIAAAAAAAACac09xZQsDT3STX2NP8WIlsTRDT4VxERNfU0+FcAEScGNPVXCAhQNPVXEAFQUEk19FcRETXzNPRXABE081cACCcGUDTzVxABUFBJNfJXERE18TTyVwARNPFXAAg08VcICFAoUFA18DEANP8WUDT8UDT2FlA08FAoSwFXAHJnSCM1ATIGNQJCAG81/zX+Nf01/DX7Nfo1+TX4Nfc0/lcAESJbNfY09xY0+BZQNPlQNPoWUDT7UDT8UDT+UDT/FlA09hZQKEsBVwB/ZylLAVd/I2dIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 162,
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
                "name": "v2449",
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
                "internalType": "struct T7",
                "name": "v2450",
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
                "internalType": "struct T9",
                "name": "v2451",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2452",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                "name": "v2449",
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
                "internalType": "struct T7",
                "name": "v2450",
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
                "internalType": "struct T9",
                "name": "v2451",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2452",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T16",
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
                    "internalType": "enum _enum_T24",
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
                                "internalType": "enum _enum_T17",
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
                            "internalType": "struct T17",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
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
                            "internalType": "struct T18",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
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
                            "internalType": "struct T18",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Harvester_harvest0_161",
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
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_161",
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
                    "name": "_Provider_withdraw0_161",
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
                    "name": "_Trader_swapAForB0_161",
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
                    "name": "_Trader_swapBForA0_161",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v3072",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
    "name": "_reach_oe_v2471",
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
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3216",
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
    "name": "_reach_oe_v3792",
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
    "name": "_reach_oe_v4387",
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
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5027",
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
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5663",
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
                "internalType": "enum _enum_T17",
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
            "internalType": "struct T17",
            "name": "newHarvesterAddr",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T18",
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
            "internalType": "struct T18",
            "name": "newProtocolFee",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T18",
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
            "internalType": "struct T18",
            "name": "newProviderFee",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
        "internalType": "address payable",
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
        "internalType": "address payable",
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
        "internalType": "address payable",
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
        "internalType": "struct T4",
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
        "internalType": "struct T26",
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
        "internalType": "struct T26",
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
        "internalType": "struct T16",
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
                    "internalType": "enum _enum_T24",
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
                                "internalType": "enum _enum_T17",
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
                            "internalType": "struct T17",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
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
                            "internalType": "struct T18",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
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
                            "internalType": "struct T18",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Harvester_harvest0_161",
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
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_161",
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
                    "name": "_Provider_withdraw0_161",
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
                    "name": "_Trader_swapAForB0_161",
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
                    "name": "_Trader_swapBForA0_161",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v3072",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
  Bytecode: `0x608060405260405162005fc438038062005fc48339810160408190526200002691620007ec565b600080554360035562000038620004eb565b604080518351815260208085015180516001600160a01b039081168385015291810151518385015280840151516001600160c01b031916606080850191909152015116608082015290517fa3648a8496052b1e61f9726e60fca4bdeb5ec4ebeb65d899247c06fa79186d609181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915284518151840152818501805185905281515184015181519094019390935280515182015183519015159201919091525190516200011192906200043e565b6060820152620001243415600f620004c1565b6200013260016010620004c1565b608081018051600090819052815160209081018290529151604090810182905260a08401519190915283820151820151518151928301520160408051808303601f1901815282825260208581015190920151516001600160c01b031916918301919091529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a0860151516020840152910160405160208183030381529060405260001960126040516200021090620005df565b620002219695949392919062000931565b604051809103906000f0801580156200023e573d6000803e3d6000fd5b506001600160a01b031660c0820181905260e082018190526040519081527f3e7c5af4f568856c8c8d2aeb615c5f5f46649e4aea2678d0afef9575d726787c9060200160405180910390a1602082015151610100820180516001600160a01b039283169052515160e0830151620002cd92908116911614620002c2576001620002c5565b60005b6011620004c1565b61012081018051600019905260608201805160209081015181015183518201528151015160409081015183519015159101525190516200031191906001906200043e565b610140820181815260209182015151610160840180519190915280516000199084015281519092015160409081015183519015159101525190516200035a91906001906200043e565b6101808201818152602091820151516101a08401805191909152815183015183015181519093019290925281516000604090910152519051620003a191906001906200043e565b6101c0820152620003b1620005ed565b33815260208084018051516001600160a01b03908116838501529051606090810151821660408086019190915260e0860151909216908401526101c0840151608084015260016000819055439055516200040e918391016200099c565b60405160208183030381529060405260029080519060200190620004349291906200061f565b5050505062000a8a565b62000448620006ae565b60005b60028110156200049e578481600281106200046a576200046a620008cb565b6020020151828260028110620004845762000484620008cb565b602002015280620004958162000a23565b9150506200044b565b5081818460028110620004b557620004b5620008cb565b60200201529392505050565b81620004e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806101e0016040528062000501620006de565b815260200162000510620006ae565b81526020016200051f620006de565b81526020016200052e620006ae565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260006020820181905260408201526060016200058062000701565b81526020016200058f620006de565b81526020016200059e620006ae565b8152602001620005ad620006de565b8152602001620005bc620006ae565b8152602001620005cb620006de565b8152602001620005da620006ae565b905290565b6110298062004f9b83390190565b6040805160a081018252600080825260208201819052918101829052606081019190915260808101620005da620006ae565b8280546200062d9062000a4d565b90600052602060002090601f0160209004810192826200065157600085556200069c565b82601f106200066c57805160ff19168380011785556200069c565b828001600101855582156200069c579182015b828111156200069c5782518255916020019190600101906200067f565b50620006aa9291506200071f565b5090565b60405180604001604052806002905b620006c7620006de565b815260200190600190039081620006bd5790505090565b604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001906020820280368337509192915050565b5b80821115620006aa576000815560010162000720565b604080519081016001600160401b03811182821017156200076757634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200076757634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200076757634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620007e757600080fd5b919050565b600081830360a08112156200080057600080fd5b6200080a62000736565b835181526080601f19830112156200082157600080fd5b6200082b6200076d565b6200083960208601620007cf565b81526020603f19840112156200084e57600080fd5b620008586200079e565b60408601518152806020830152506020605f19840112156200087957600080fd5b620008836200079e565b60608601519093506001600160c01b031981168114620008a257600080fd5b835260408101839052620008b960808601620007cf565b60608201526020820152949350505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156200090957602081850181015186830182015201620008eb565b818111156200091c576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200094660c0830189620008e1565b82810360208401526200095a8189620008e1565b90508281036040840152620009708188620008e1565b90508281036060840152620009868187620008e1565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401518216818401526040808501518316818501526060808601519093168385015260808086015161014086019490939291860160005b600281101562000a175785518051835285810151868401528401511515848301529484019490820190600101620009e5565b50505050505092915050565b600060001982141562000a4657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000a6257607f821691505b6020821081141562000a8457634e487b7160e01b600052602260045260246000fd5b50919050565b6145018062000a9a6000396000f3fe6080604052600436106100da5760003560e01c80631894c0a1146100e35780631e93b0f1146100f657806328db2cb21461011a5780632c10a1591461012f57806332020fec1461014257806358b394ee146101625780635ac10ac2146101845780635bbc0ed6146101975780635f827f46146101c457806368ac3568146101e657806383230757146101fb578063ab53f2c614610210578063c8867ae914610233578063c8dc446714610253578063d2846e0114610268578063d469fcc71461027d578063d4a2311c14610292578063dc8d714f146102a557005b366100e157005b005b6100e16100f1366004613990565b6102b8565b34801561010257600080fd5b506003545b6040519081526020015b60405180910390f35b34801561012657600080fd5b506101076102dc565b6100e161013d3660046139a9565b61045d565b6101556101503660046139bb565b61047d565b60405161011191906139d4565b34801561016e57600080fd5b506101776104db565b6040516101119190613a14565b610107610192366004613a22565b61065f565b3480156101a357600080fd5b506101ac6106c7565b6040516001600160a01b039091168152602001610111565b3480156101d057600080fd5b506101d961083c565b6040516101119190613a7a565b3480156101f257600080fd5b506101ac6109f3565b34801561020757600080fd5b50600154610107565b34801561021c57600080fd5b50610225610b77565b604051610111929190613ab4565b610246610241366004613aee565b610c14565b6040516101119190613b10565b34801561025f57600080fd5b506101ac610c7b565b34801561027457600080fd5b50610107610ddf565b34801561028957600080fd5b50610107610f5e565b6101776102a0366004613d5f565b6110dc565b6102466102b3366004613aee565b611136565b6102c0613237565b6102d86102d236849003840184613e39565b8261119b565b5050565b600060016000541415610399576000600280546102f890613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461032490613f01565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b50505050508060200190518101906103899190613fcf565b90506103976000600c612cd0565b505b6004600054141561044e576000600280546103b390613f01565b80601f01602080910402602001604051908101604052809291908181526020018280546103df90613f01565b801561042c5780601f106104015761010080835404028352916020019161042c565b820191906000526020600020905b81548152906001019060200180831161040f57829003601f168201915b505050505080602001905181019061044491906140e5565b6060015192915050565b61045a6000600c612cd0565b90565b610465613237565b6102d86104773684900384018461418d565b82612cf6565b61048561327d565b61048d613237565b61049561329b565b61049d6132b5565b604080516020808201835287825260608401919091526002835281518082019092528282528301526104cf828461119b565b50506040015192915050565b6104e361330e565b6001600054141561059e576000600280546104fd90613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461052990613f01565b80156105765780601f1061054b57610100808354040283529160200191610576565b820191906000526020600020905b81548152906001019060200180831161055957829003601f168201915b505050505080602001905181019061058e9190613fcf565b905061059c6000600d612cd0565b505b60046000541415610653576000600280546105b890613f01565b80601f01602080910402602001604051908101604052809291908181526020018280546105e490613f01565b80156106315780601f1061060657610100808354040283529160200191610631565b820191906000526020600020905b81548152906001019060200180831161061457829003601f168201915b505050505080602001905181019061064991906140e5565b6080015192915050565b61045a6000600d612cd0565b6000610669613237565b61067161329b565b6106796132b5565b604080516060810182528881526020808201899052818301889052838301919091526001835281518082019092528282528301526106b7828461119b565b50506020015190505b9392505050565b60006001600054141561077e576000600280546106e390613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461070f90613f01565b801561075c5780601f106107315761010080835404028352916020019161075c565b820191906000526020600020905b81548152906001019060200180831161073f57829003601f168201915b50505050508060200190518101906107749190613fcf565b6020015192915050565b600460005414156108305760006002805461079890613f01565b80601f01602080910402602001604051908101604052809291908181526020018280546107c490613f01565b80156108115780601f106107e657610100808354040283529160200191610811565b820191906000526020600020905b8154815290600101906020018083116107f457829003601f168201915b505050505080602001905181019061082991906140e5565b5192915050565b61045a6000600a612cd0565b610844613328565b600160005414156109325760006002805461085e90613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461088a90613f01565b80156108d75780601f106108ac576101008083540402835291602001916108d7565b820191906000526020600020905b8154815290600101906020018083116108ba57829003601f168201915b50505050508060200190518101906108ef9190613fcf565b90506108f9613359565b60409182015181516001600160a01b03909116905280516005602090910152805160199201919091528051601e60609091015251919050565b600460005414156109e75760006002805461094c90613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461097890613f01565b80156109c55780601f1061099a576101008083540402835291602001916109c5565b820191906000526020600020905b8154815290600101906020018083116109a857829003601f168201915b50505050508060200190518101906109dd91906140e5565b60a0015192915050565b61045a6000600e612cd0565b600060016000541415610ab057600060028054610a0f90613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3b90613f01565b8015610a885780601f10610a5d57610100808354040283529160200191610a88565b820191906000526020600020905b815481529060010190602001808311610a6b57829003601f168201915b5050505050806020019051810190610aa09190613fcf565b9050610aae60006008612cd0565b505b60046000541415610b6b57600060028054610aca90613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610af690613f01565b8015610b435780601f10610b1857610100808354040283529160200191610b43565b820191906000526020600020905b815481529060010190602001808311610b2657829003601f168201915b5050505050806020019051810190610b5b91906140e5565b9050610b6960006008612cd0565b505b61045a60006008612cd0565b600060606000546002808054610b8c90613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb890613f01565b8015610c055780601f10610bda57610100808354040283529160200191610c05565b820191906000526020600020905b815481529060010190602001808311610be857829003601f168201915b50505050509050915091509091565b610c1c61336c565b610c24613237565b610c2c61329b565b610c346132b5565b60408051808201825287815260208082018890526080840191909152600383528151808201909252828252830152610c6c828461119b565b50506060015190505b92915050565b600060016000541415610d2857600060028054610c9790613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc390613f01565b8015610d105780601f10610ce557610100808354040283529160200191610d10565b820191906000526020600020905b815481529060010190602001808311610cf357829003601f168201915b50505050508060200190518101906104449190613fcf565b60046000541415610dd357600060028054610d4290613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6e90613f01565b8015610dbb5780601f10610d9057610100808354040283529160200191610dbb565b820191906000526020600020905b815481529060010190602001808311610d9e57829003601f168201915b505050505080602001905181019061077491906140e5565b61045a6000600b612cd0565b600060016000541415610e9c57600060028054610dfb90613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2790613f01565b8015610e745780601f10610e4957610100808354040283529160200191610e74565b820191906000526020600020905b815481529060010190602001808311610e5757829003601f168201915b5050505050806020019051810190610e8c9190613fcf565b9050610e9a60006009612cd0565b505b60046000541415610f5257600060028054610eb690613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee290613f01565b8015610f2f5780601f10610f0457610100808354040283529160200191610f2f565b820191906000526020600020905b815481529060010190602001808311610f1257829003601f168201915b5050505050806020019051810190610f4791906140e5565b610100015192915050565b61045a60006009612cd0565b60006001600054141561101b57600060028054610f7a90613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa690613f01565b8015610ff35780601f10610fc857610100808354040283529160200191610ff3565b820191906000526020600020905b815481529060010190602001808311610fd657829003601f168201915b505050505080602001905181019061100b9190613fcf565b905061101960006007612cd0565b505b600460005414156110d05760006002805461103590613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461106190613f01565b80156110ae5780601f10611083576101008083540402835291602001916110ae565b820191906000526020600020905b81548152906001019060200180831161109157829003601f168201915b50505050508060200190518101906110c691906140e5565b60e0015192915050565b61045a60006007612cd0565b6110e461330e565b6110ec613237565b6110f461329b565b6110fc6132b5565b60408051602080820183528782528381019190915260008352815180820190925282825283015261112d828461119b565b50505192915050565b61113e61336c565b611146613237565b61114e61329b565b6111566132b5565b604080518082018252878152602080820188905260a084019190915260048352815180820190925282825283015261118e828461119b565b5050608001519392505050565b6111ab6004600054146042612cd0565b81516111c69015806111bf57508251600154145b6043612cd0565b6000808055600280546111d890613f01565b80601f016020809104026020016040519081016040528092919081815260200182805461120490613f01565b80156112515780601f1061122657610100808354040283529160200191611251565b820191906000526020600020905b81548152906001019060200180831161123457829003601f168201915b505050505080602001905181019061126991906140e5565b905061127361339b565b7f92cab69d2c81bf85be48024420d7e5e5b977d37539cb53e37dcb1b534c45aed1846040516112a2919061420f565b60405180910390a160006020850151515160048111156112c4576112c46141c5565b14156118125760208085015151015181526112e134156016612cd0565b60c08201805160209081015151838201805191909152825182015182015181518301528251909101516040908101518251901515910152905190516113299190600190612efb565b816040018190525061134b6113443384602001516000612f6f565b6017612cd0565b60408181018051515160608401805191909152815151602090810151825190910152815151830151815190151593019290925251905161138e9190600090612efb565b608082015281516113ad906113a69033906000612f6f565b6018612cd0565b60a0820151516113c9906001600160a01b031633146019612cd0565b60808201515160e08301516113de9190614328565b60a0820152805151516080830151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611423573d6000803e3d6000fd5b5060a0810151479081106114455760a08201516114409082614328565b611448565b60005b60c08301819052825151516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611488573d6000803e3d6000fd5b50608083810151602001519083015151516114a39190614328565b60e0830180519190915260808084018051516020908101518451820152905151604090810151935193151593019290925284518451515191860151909201516114ed929190612f85565b6080830180515161010084018051919091529051602090810151825190910152516040517f82109cfef56c4dc260cec85fbb9dcf8be69be06327da5c3a347f90eb45c7924a9161153c91613a14565b60405180910390a16101008201518452600082515160200151516001811115611567576115676141c5565b14156115875760a0830151516001600160a01b03166101208301526115cb565b6001825151602001515160018111156115a2576115a26141c5565b14156115cb5781515160200151604001516001600160a01b031661014083018190526101208301525b6000825151604001515160018111156115e6576115e66141c5565b14156116005760a08301516020015161016083015261163b565b60018251516040015151600181111561161b5761161b6141c5565b141561163b57815151604090810151015161018083018190526101608301525b600082515160600151516001811115611656576116566141c5565b14156116705760a0830151604001516101a08301526116ab565b60018251516060015151600181111561168b5761168b6141c5565b14156116ab5781515160600151604001516101c083018190526101a08301525b816101a001518261016001516116c1919061433f565b6101e08301526101608201516101a0830151611718916116e09161433f565b836101e00151146116f25760006116fc565b6064836101e00151105b611707576000611711565b6000836101e00151115b601a612cd0565b610120820151610200830180516001600160a01b039092169091526101608301518151602001526101a08301518151604001526101e083015190516060015261175f6136fc565b835181516001600160a01b039182169052602080860151835192169181019190915260408086018051845183015260608088015184860180519190915291518251909401939093526102008601518151909201919091525143910152608083015160e08401516117d29190600090612efb565b60208201516080015260c083015160a08401516117ef908261433f565b6117f99190614328565b602082015160a0015261180b81612f9e565b5050612cca565b600160208501515151600481111561182c5761182c6141c5565b1415611c54576020840151516040015161022082018190525160e0830151611854919061433f565b6102408201526102208101515161186e903414601b612cd0565b60c082018051602090810151516102608401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516118b89190600190612efb565b8161028001819052506118db6118d43384602001516000612f6f565b601c612cd0565b6102208101516020015161028082015151516118f7919061433f565b6102a08201805191909152610280820180515160209081015183519091015280515160409081015183519015159101525190516119379190600090612efb565b6102c08201528151610220820151602001516119609161195991339190612f6f565b601d612cd0565b61022081015151611974901515601e612cd0565b61198b60008261022001516020015111601f612cd0565b6060820151611a00576102208101516040810151602082015191516119c99282916119b69190614357565b6119c09190614376565b10156020612cd0565b6102c08101516020015151610220820151604001516119eb9110156021612cd0565b610220810151604001516102e0820152611af3565b61022081015151608083015151610240830151611a1d9190614328565b611a279190614328565b606083015161022083015151611a3d9190614357565b611a479190614376565b6103008201526102208101516020908101516080840151909101516102c08301515151611a749190614328565b611a7e9190614328565b826060015182610220015160200151611a979190614357565b611aa19190614376565b610320820181905261030082015110611abf57806103200151611ac6565b8061030001515b61034082018190526102c08201516020015151611ae69111156022612cd0565b6103408101516102e08201525b6102e08101516102c08201516020015151611b0e9190614328565b61036082018051919091526102c0820180516020908101518101518351820152905181015160409081015192519215159201919091528201516102e0820151611b5991903390612f85565b7f8e56e2134813a201e7411c2ed5fb08920dff8e33f487913077593beed0392a8c816102e00151604051611b8f91815260200190565b60405180910390a16102e08101516020840152611baa6136fc565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526102e08201516060840151611be9919061433f565b6020808301805192909252608085015182519091015260a08401518151604001525143606091909101526102c0820151610360830151611c2c9190600190612efb565b60208201805160800191909152610240830151905160a00152611c4e81612f9e565b50612cca565b6002602085015151516004811115611c6e57611c6e6141c5565b1415611fdf5760208401515160600151610380820152611c9034156023612cd0565b6103808101515160c08301516020015151611cab919061433f565b6103a0820180519190915260c0830180516020908101518101518351820152815101516040908101518351901515910152519051611cec9190600190612efb565b6103c0820152602082015161038082015151611d1591611d0e91339190612f6f565b6024612cd0565b6103c08101805151516103e08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611d5a9190600090612efb565b6104008201528151611d7a90611d739033906000612f6f565b6025612cd0565b60808201515160e0830151611d8f9190614328565b6104208201526080820151602001516104008201515151611db09190614328565b610440820152606082015161042082015161038083015151611dd29190614357565b611ddc9190614376565b6104608201819052610420820151611df79111156026612cd0565b610460810151604051339180156108fc02916000818181858888f19350505050158015611e28573d6000803e3d6000fd5b50606082015161044082015161038083015151611e459190614357565b611e4f9190614376565b6104808201819052610440820151611e6a9111156027612cd0565b6104808101516104008201515151611e829190614328565b6104a082018051919091526104008201805151602090810151835190910152515160409081015191519115159101528151610480820151611ec591903390612f85565b6104608101516104c08201805191909152610480820151815160200152516040517f1219dc899769be4d5529960c2fd8448809e23f31f3d668adb5ef594489eaf5ff91611f11916139d4565b60405180910390a16104c08101516040840152611f2c6136fc565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152610380820151516060840151611f6c9190614328565b6020808301805192909252608085015182519091015260a08401518151604001525143606091909101526104008201516104a0830151611faf9190600090612efb565b60208201516080015261046082015160e0840151611fcd9190614328565b602082015160a00152611c4e81612f9e565b6003602085015151516004811115611ff957611ff96141c5565b141561266c57602084015151608001516104e082018190525160e0830151612021919061433f565b6105008201526104e08101515161203b9034146028612cd0565b60c082018051602090810151516105208401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516120859190600190612efb565b8161054001819052506120a86120a13384602001516000612f6f565b6029612cd0565b61054081018051515161056083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516120ed9190600090612efb565b610580820152815161210d906121069033906000612f6f565b602a612cd0565b6080820151516105008201516121239190614328565b6105a082015260808201516020015161058082015151516121449190614328565b6105c08201526105a08101516104e0820151516121639111602b612cd0565b6104e081015151612177901515602c612cd0565b6104e0810151516105a082015161218e9190614328565b6105e082015260a0820151606001516121a990612710614328565b6104e0820151516121ba9190614357565b61060082018190526105e08201516121d59061271090614357565b6121df919061433f565b816105c001518261060001516121f59190614357565b6121ff9190614376565b6106208201819052612214901515602d612cd0565b6104e0810151516105e082015161222b919061433f565b6106408201819052612240901515602e612cd0565b6106208101516106408201516105c08301516104e0840151516122639190614357565b61226d9190614376565b6122779190614328565b61066082015260a0820151602001516104e0820151516127109161229a91614357565b6122a49190614376565b61068082015260a08201516060810151602090910151606491906122c9908390614357565b6122d39190614376565b8261066001516122e39190614357565b6122ed9190614376565b6106a08201819052610660820151612308911115602f612cd0565b61232081610640015182610680015111156030612cd0565b612338816105c00151826106a0015111156031612cd0565b610620810180516106c083018051919091528051600060209182018190526106a085018051935160409081019490945293516106e08601805191909152610680860180518251909401939093525190920191909152516105c08301516105e08401519251919290916123aa9190614357565b6123b49190614376565b10156123c557806106e001516123cc565b806106c001515b61070082018190526104e08201516020015190516123ed9111156032612cd0565b612409816105c001518261070001516000015111156033612cd0565b6107008101515161058082015151516124229190614328565b6107208201805191909152610580820180515160209081015183519091015280515160409081015183519015159101525190516124629190600090612efb565b61074082015281516107008201515161247d91903390612f85565b60808201516020015161074082015151516124989190614328565b6107608201526105c08101516105e082015161251191116124be57816105c001516124c5565b816105e001515b826105c00151836105e00151116124e157826105c001516124e8565b826105e001515b836107600151846105a001516124fe9190614357565b6125089190614376565b10156034612cd0565b6107008101516020015160808301515161252b919061433f565b610780820151526107008101516040015160808301516020015161254f919061433f565b61078082015160209081019190915261070082018051516107a0840180519190915281518301518151909301929092525160409081015182518201526107608301518251606001526105a0830151825160800152905190517fdaaaae7af8f7a0974ebdfa5bc8dd8013ecf838c3506aae28d7ce6b201184524c916125d291613b10565b60405180910390a16107a081015160608401526125ed6136fc565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015183850180519190915261078086015181519094019390935260a08087015184519093019290925282514391015261074084015182516080015261050084015191510152611c4e81612f9e565b6004602085015151516004811115612686576126866141c5565b1415612cca5760208401515160a001516107c08201526126a834156035612cd0565b60c082018051602090810151516107e08401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516126f29190600190612efb565b81610800018190525061271561270e3384602001516000612f6f565b6036612cd0565b6107c081015151610800820151515161272e919061433f565b61082082018051919091526108008201805151602090810151835190910152805151604090810151835190151591015251905161276e9190600090612efb565b61084082015281516107c0820151516127949161278d91339190612f6f565b6037612cd0565b60808201516020015161084082015151516127af9190614328565b61086082015260808201515160e08301516127ca9190614328565b6108808201526108608101516107c0820151516127e991116038612cd0565b6107c0810151516127fd9015156039612cd0565b6107c0810151516108608201516128149190614328565b6108a082015260a08201516060015161282f90612710614328565b6107c0820151516128409190614357565b6108c082018190526108a082015161285b9061271090614357565b612865919061433f565b816108800151826108c0015161287b9190614357565b6128859190614376565b6108e0820181905261289a901515603a612cd0565b6107c0810151516108a08201516128b1919061433f565b61090082018190526128c6901515603b612cd0565b6108e08101516109008201516108808301516107c0840151516128e99190614357565b6128f39190614376565b6128fd9190614328565b61092082015260a0820151602001516107c0820151516127109161292091614357565b61292a9190614376565b61094082015260a082015160608101516020909101516064919061294f908390614357565b6129599190614376565b8261092001516129699190614357565b6129739190614376565b610960820181905261092082015161298e911115603c612cd0565b6129a68161090001518261094001511115603d612cd0565b6129be8161088001518261096001511115603e612cd0565b6108e081018051610980830180519190915280516000602091820181905261096085018051935160409081019490945293516109a08601805191909152610940860180518251909401939093525190920191909152516108808301516108a0840151925191929091612a309190614357565b612a3a9190614376565b1015612a4b57806109a00151612a52565b8061098001515b6109c082018190526107c0820151602001519051612a73911115603f612cd0565b612a8f816108800151826109c001516000015111156040612cd0565b6109c08101515160e0830151612aa59190614328565b6109e08201526109c081015151604051339180156108fc02916000818181858888f19350505050158015612add573d6000803e3d6000fd5b506080820151516109e0820151612af49190614328565b610a008201526108808101516108a0820151612b6d9111612b1a57816108800151612b21565b816108a001515b826108800151836108a0015111612b3d57826108800151612b44565b826108a001515b83610a000151846108600151612b5a9190614357565b612b649190614376565b10156041612cd0565b6109c081015160400151608083015151612b87919061433f565b610a20820151526109c0810151602090810151608084015190910151612bad919061433f565b610a208201516020908101919091526109c08201805151610a4084018051919091528151830151815190930192909252516040908101518251820152610a00830151825160600152610860830151825160800152905190517f0817d6be354f1a1f99ddec8e1c9be9cd77d5e813e03f54900aa9a78261fb0a2391612c3091613b10565b60405180910390a1610a408101516080840152612c4b6136fc565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151838501805191909152610a2086015181519094019390935260a0808701518451909301929092528251439101526108408401518251608001526109e084015191510152611c4e81612f9e565b50505050565b816102d85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b612d066001600054146014612cd0565b8151612d21901580612d1a57508251600154145b6015612cd0565b600080805560028054612d3390613f01565b80601f0160208091040260200160405190810160405280929190818152602001828054612d5f90613f01565b8015612dac5780601f10612d8157610100808354040283529160200191612dac565b820191906000526020600020905b815481529060010190602001808311612d8f57829003601f168201915b5050505050806020019051810190612dc49190613fcf565b9050612dce61371c565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1612e1934156012612cd0565b8151612e31906001600160a01b031633146013612cd0565b8051600090819052815160209081019190915260408084015182840180516001600160a01b03909216909152805160059301929092528151601991015251601e606090910152612e7f6136fc565b60208084015182516001600160a01b039182169052606080860151845192169183019190915283518351604090810191909152838301805160009081905286518251860152938601518151909201919091528051439201919091526080808601518251909101525160a00152612ef481612f9e565b5050505050565b612f0361373c565b60005b6002811015612f4f57848160028110612f2157612f216142fc565b6020020151828260028110612f3857612f386142fc565b602002015280612f4781614398565b915050612f06565b5081818460028110612f6357612f636142fc565b60200201529392505050565b6000612f7d83853085613051565b949350505050565b612f9083838361312b565b612f9957600080fd5b505050565b612fa6613769565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015281840180515160608501528051830151608080860191909152815183015160a080870191909152825182015160c08701528251015160e08601529051015151516101008401526004600055436001555161302d918391016143f1565b60405160208183030381529060405260029080519060200190612f999291906137cb565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916130b891614492565b60006040518083038185875af1925050503d80600081146130f5576040519150601f19603f3d011682016040523d82523d6000602084013e6130fa565b606091505b509150915061310b828260016131fc565b508080602001905181019061312091906144ae565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161318a91614492565b60006040518083038185875af1925050503d80600081146131c7576040519150601f19603f3d011682016040523d82523d6000602084013e6131cc565b606091505b50915091506131dd828260026131fc565b50808060200190518101906131f291906144ae565b9695505050505050565b6060831561320b5750816106c0565b82511561321b5782518084602001fd5b60405163100960cb60e01b815260048101839052602401612ced565b6040518060a0016040528061324a61330e565b81526020016000815260200161325e61327d565b815260200161326b61336c565b815260200161327861336c565b905290565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806000815260200161327861384f565b6040805160c0810190915280600081526020016132d0613862565b81526020016132dd613875565b81526020016132f86040518060200160405280600081525090565b815260200161330561330e565b81526020016132785b604051806040016040528060008152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280613278613328565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180610a6001604052806133af613862565b81526020016133bc613896565b81526020016133c961373c565b81526020016133d6613896565b81526020016133e361373c565b815260200160008152602001600081526020016133fe613896565b815260200161340b61330e565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200161345b613328565b8152602001613468613875565b81526020016000815260200161347c613896565b815260200161348961373c565b8152602001613496613896565b81526020016134a361373c565b8152602001600081526020016000815260200160008152602001600081526020016134cc613896565b81526020016134e76040518060200160405280600081525090565b81526020016134f4613896565b815260200161350161373c565b815260200161350e613896565b815260200161351b61373c565b815260200160008152602001600081526020016000815260200160008152602001613544613896565b815260200161355161327d565b815260200161355e61330e565b815260200160008152602001613572613896565b815260200161357f61373c565b815260200161358c613896565b815260200161359961373c565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016135e5613875565b81526020016135f2613875565b81526020016135ff613875565b815260200161360c613896565b815260200161361961373c565b81526020016000815260200161362d61330e565b815260200161363a61336c565b815260200161364761330e565b8152602001613654613896565b815260200161366161373c565b815260200161366e613896565b815260200161367b61373c565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016136c7613875565b81526020016136d4613875565b81526020016136e1613875565b8152602001600081526020016000815260200161326b61330e565b604051806040016040528061370f6138b9565b81526020016132786138d8565b604051806040016040528061372f61330e565b8152602001613278613328565b60405180604001604052806002905b613753613896565b81526020019060019003908161374b5790505090565b60408051610120810182526000808252602082015290810161378961330e565b81526020016000815260200161379d61330e565b81526020016137aa613328565b81526020016137b761373c565b815260200160008152602001600081525090565b8280546137d790613f01565b90600052602060002090601f0160209004810192826137f9576000855561383f565b82601f1061381257805160ff191683800117855561383f565b8280016001018555821561383f579182015b8281111561383f578251825591602001919060010190613824565b5061384b929150613920565b5090565b60405180602001604052806132786132b5565b6040518060200160405280613278613935565b60405180606001604052806000815260200160008152602001600081525090565b604051806060016040528060008152602001600081526020016000151581525090565b604080516060810182526000808252602082015290810161327861330e565b6040518060c00160405280600081526020016138f261330e565b81526020016138ff613328565b81526020016000815260200161391361373c565b8152602001600081525090565b5b8082111561384b5760008155600101613921565b604051806080016040528060006001600160a01b0316815260200161395861396e565b815260200161396561396e565b81526020016132785b6040805160608101909152806000815260006020820181905260409091015290565b600061028082840312156139a357600080fd5b50919050565b6000604082840312156139a357600080fd5b6000602082840312156139cd57600080fd5b5035919050565b60408101818360005b60028110156139fc5781518352602092830192909101906001016139dd565b50505092915050565b80518252602090810151910152565b60408101610c758284613a05565b600080600060608486031215613a3757600080fd5b505081359360208301359350604090920135919050565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b60808101610c758284613a4e565b60005b83811015613aa3578181015183820152602001613a8b565b83811115612cca5750506000910152565b8281526040602082015260008251806040840152613ad9816060850160208701613a88565b601f01601f1916919091016060019392505050565b60008060408385031215613b0157600080fd5b50508035926020909101359150565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b0381118282101715613b8257613b82613b4a565b60405290565b604051608081016001600160401b0381118282101715613b8257613b82613b4a565b604051602081016001600160401b0381118282101715613b8257613b82613b4a565b604080519081016001600160401b0381118282101715613b8257613b82613b4a565b60405160c081016001600160401b0381118282101715613b8257613b82613b4a565b60405161012081016001600160401b0381118282101715613b8257613b82613b4a565b6001600160a01b0381168114613c4857600080fd5b50565b60028110613c4857600080fd5b8015158114613c4857600080fd5b600060608284031215613c7857600080fd5b613c80613b60565b90508135613c8d81613c4b565b81526020820135613c9d81613c58565b806020830152506040820135604082015292915050565b6000818303610140811215613cc857600080fd5b613cd0613b88565b91508235613cdd81613c33565b82526060601f1982011215613cf157600080fd5b50613cfa613b60565b6020830135613d0881613c4b565b81526040830135613d1881613c58565b60208201526060830135613d2b81613c33565b60408201526020820152613d428360808401613c66565b6040820152613d548360e08401613c66565b606082015292915050565b60006101408284031215613d7257600080fd5b6106c08383613cb4565b60006101408284031215613d8f57600080fd5b613d97613baa565b9050613da38383613cb4565b815292915050565b600060608284031215613dbd57600080fd5b613dc5613b60565b905081358152602082013560208201526040820135604082015292915050565b600060208284031215613df757600080fd5b613dff613baa565b9135825250919050565b600060408284031215613e1b57600080fd5b613e23613bcc565b9050813581526020820135602082015292915050565b6000818303610280811215613e4d57600080fd5b613e55613bcc565b83358152610260601f1983011215613e6c57600080fd5b613e74613baa565b9150613e7e613bee565b602085013560058110613e9057600080fd5b8152613e9f8660408701613d7c565b6020820152613eb2866101808701613dab565b6040820152613ec5866101e08701613de5565b6060820152613ed8866102008701613e09565b6080820152613eeb866102408701613e09565b60a0820152825260208101919091529392505050565b600181811c90821680613f1557607f821691505b602082108114156139a357634e487b7160e01b600052602260045260246000fd5b8051613f4181613c33565b919050565b600082601f830112613f5757600080fd5b613f5f613bcc565b8060c0840185811115613f7157600080fd5b845b81811015613fc45760608188031215613f8c5760008081fd5b613f94613b60565b8151815260208083015181830152604080840151613fb181613c58565b9083015290855290930192606001613f73565b509095945050505050565b60006101408284031215613fe257600080fd5b60405160a081016001600160401b038111828210171561400457614004613b4a565b604052825161401281613c33565b8152602083015161402281613c33565b6020820152604083015161403581613c33565b6040820152606083015161404881613c33565b606082015261405a8460808501613f46565b60808201529392505050565b60006040828403121561407857600080fd5b614080613bcc565b9050815181526020820151602082015292915050565b6000608082840312156140a857600080fd5b6140b0613b88565b905081516140bd81613c33565b8082525060208201516020820152604082015160408201526060820151606082015292915050565b600061026082840312156140f857600080fd5b614100613c10565b61410983613f36565b815261411760208401613f36565b60208201526141298460408501614066565b6040820152608083015160608201526141458460a08501614066565b60808201526141578460e08501614096565b60a082015261416a846101608501613f46565b60c082015261022083015160e08201526102409092015161010083015250919050565b60006040828403121561419f57600080fd5b6141a7613bcc565b8235815260208301356141b981613c58565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b60028110613c4857613c486141c5565b80516141f6816141db565b8252602081810151151590830152604090810151910152565b8151815260208201515180516102808301919060058110614232576142326141c5565b8060208501525060208101515160018060a01b038082511660408601526020820151805161425f816141db565b606087015260208101511515608087015260409081015190911660a086015281015161428e60c08601826141eb565b50606001516142a16101208501826141eb565b50604081810151805161018086015260208101516101a086015201516101c08401526060810151516101e084015260808101516142e2610200850182613a05565b5060a001516142f5610240840182613a05565b5092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561433a5761433a614312565b500390565b6000821982111561435257614352614312565b500190565b600081600019048311821515161561437157614371614312565b500290565b60008261439357634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156143ac576143ac614312565b5060010190565b8060005b6002811015612cca5781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016143b7565b81516001600160a01b0316815260208083015161026083019161441e908401826001600160a01b03169052565b5060408301516144316040840182613a05565b5060608301516080830152608083015161444e60a0840182613a05565b5060a083015161446160e0840182613a4e565b5060c08301516144756101608401826143b3565b5060e0830151610220830152610100909201516102409091015290565b600082516144a4818460208701613a88565b9190910192915050565b6000602082840312156144c057600080fd5b81516106c081613c5856fea2646970667358221220097e91d7725d56fb86a821baff6fd27e8d0c57e17ecf87bf2e079447d6b3e99764736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220f6219445000b5c062898f2f65ae17d981034dac2454cfc0646be5c686377a11e64736f6c634300080c0033`,
  BytecodeLen: 24516,
  Which: `o1`,
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
export const _stateSourceMap = {
  1: {
    at: './n2nn.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './n2nn.rsh:235:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './n2nn.rsh:76:19:after expr stmt semicolon',
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
