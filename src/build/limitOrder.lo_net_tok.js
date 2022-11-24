// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2256, v2257, v2259, v2260, v2261, v2262] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2256, v2257, v2259, v2260, v2261] = svs;
      return (await ((async () => {
        
        
        return v2257;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      opts: {
        decode: _opts,
        dom: [],
        rng: ctc5
        }
      },
    views: {
      1: [ctc0, ctc5, ctc2, ctc3, ctc3, ctc4],
      2: [ctc0, ctc5, ctc2, ctc3, ctc3]
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
export async function _Cancel2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Cancel2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Cancel2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7, ctc3, ctc3]);
  const ctc9 = stdlib.T_Data({
    Cancel0_1861: ctc6,
    SwapViaPool0_1861: ctc8
    });
  
  
  const [v2256, v2257, v2259, v2260, v2261] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc2, ctc3, ctc3]);
  const v2330 = ctc.selfAddress();
  const v2332 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_1861" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v2333 = stdlib.addressEq(v2330, v2256);
  stdlib.assert(v2333, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_1861" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v2338 = ['Cancel0_1861', v2332];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2256, v2257, v2259, v2260, v2261, v2338],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:117:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2343], secs: v2345, time: v2344, didSend: v2010, from: v2342 } = txn1;
      
      switch (v2343[0]) {
        case 'Cancel0_1861': {
          const v2346 = v2343[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v2355 = null;
          const v2356 = await txn1.getOutput('Cancel', 'v2355', ctc1, v2355);
          
          sim_r.txns.push({
            kind: 'from',
            to: v2256,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v2259
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_1861': {
          const v2530 = v2343[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc2, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2343], secs: v2345, time: v2344, didSend: v2010, from: v2342 } = txn1;
  switch (v2343[0]) {
    case 'Cancel0_1861': {
      const v2346 = v2343[1];
      undefined /* setApiDetails */;
      ;
      const v2353 = stdlib.addressEq(v2342, v2256);
      stdlib.assert(v2353, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v2355 = null;
      const v2356 = await txn1.getOutput('Cancel', 'v2355', ctc1, v2355);
      if (v2010) {
        stdlib.protect(ctc1, await interact.out(v2346, v2356), {
          at: './limitOrder.rsh:117:11:application',
          fs: ['at ./limitOrder.rsh:117:11:application call to [unknown function] (defined at: ./limitOrder.rsh:117:11:function exp)', 'at ./limitOrder.rsh:120:10:application call to "k" (defined at: ./limitOrder.rsh:119:17:function exp)'],
          msg: 'out',
          who: 'Cancel'
          });
        }
      else {
        }
      
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_1861': {
      const v2530 = v2343[1];
      return;
      break;
      }
    }
  
  
  };
export async function D(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for D expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for D expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc0], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3]]);
  const ctc5 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc7, ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    Cancel0_1861: ctc6,
    SwapViaPool0_1861: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc10, ctc11]);
  const ctc13 = stdlib.T_Address;
  
  
  const v2240 = stdlib.protect(ctc4, interact.opts, 'for D\'s interact field opts');
  const v2241 = v2240.tokA;
  const v2242 = v2240.tokB;
  const v2243 = v2240.amtA;
  const v2244 = v2240.amtB;
  const v2245 = v2240.ctcAnnouncer;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2240, v2241, v2242, v2243, v2244, v2245],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./limitOrder.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc0, ctc1, ctc2, ctc2, ctc3],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2257, v2258, v2259, v2260, v2261, v2262], secs: v2264, time: v2263, didSend: v1767, from: v2256 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2259
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v2257, v2258, v2259, v2260, v2261, v2262], secs: v2264, time: v2263, didSend: v1767, from: v2256 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2256, v2257, v2259, v2260, v2261, v2262],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2263,
    onlyIf: true,
    out_tys: [],
    pay: [v2260, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v2275, time: v2274, didSend: v1829, from: v2273 } = txn2;
      
      sim_r.txns.push({
        amt: v2260,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v2286 = await ctc.getContractInfo();
      const v2287 = ['None', null];
      const v2288 = ['Some', v2259];
      const v2291 = [];
      const v2294 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2262,
          remote: ({
            accs: [v2256],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2294', ctc5, v2294);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2275, time: v2274, didSend: v1829, from: v2273 } = txn2;
  ;
  const v2279 = stdlib.addressEq(v2256, v2273);
  stdlib.assert(v2279, {
    at: './limitOrder.rsh:51:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './limitOrder.rsh:52:19:application',
    fs: ['at ./limitOrder.rsh:52:19:application call to [unknown function] (defined at: ./limitOrder.rsh:52:19:function exp)', 'at ./limitOrder.rsh:52:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:52:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v2286 = await ctc.getContractInfo();
  const v2287 = ['None', null];
  const v2288 = ['Some', v2259];
  const v2291 = [];
  const v2294 = undefined /* Remote */;
  const v2295 = await txn2.getOutput('internal', 'v2294', ctc5, v2294);
  const v2297 = v2295[stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v2303 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2297);
  stdlib.assert(v2303, {
    at: './limitOrder.rsh:55:24:application',
    fs: [],
    msg: 'remote bill check',
    who: 'D'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc9],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2343], secs: v2345, time: v2344, didSend: v2010, from: v2342 } = txn3;
  switch (v2343[0]) {
    case 'Cancel0_1861': {
      const v2346 = v2343[1];
      undefined /* setApiDetails */;
      ;
      const v2353 = stdlib.addressEq(v2342, v2256);
      stdlib.assert(v2353, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v2355 = null;
      await txn3.getOutput('Cancel', 'v2355', ctc0, v2355);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_1861': {
      const v2530 = v2343[1];
      undefined /* setApiDetails */;
      ;
      const v2556 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v2557 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v2558 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v2559 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v2560 = stdlib.le(v2558, v2260);
      stdlib.assert(v2560, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v2566 = null;
      await txn3.getOutput('SwapViaPool', 'v2566', ctc0, v2566);
      if (v2557) {
        const v2581 = [v2261];
        const v2582 = undefined /* Remote */;
        const v2583 = await txn3.getOutput('internal', 'v2582', ctc12, v2582);
        const v2585 = v2583[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2586 = v2583[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2588 = v2586[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2607 = stdlib.eq(v2585, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2607, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v2609 = stdlib.ge(v2588, v2261);
        stdlib.assert(v2609, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v2610 = stdlib.safeSub(v2260, v2558);
        const v2611 = stdlib.safeSub(v2588, v2261);
        const v2612 = stdlib.ge(v2611, v2559);
        stdlib.assert(v2612, {
          at: './limitOrder.rsh:110:16:application',
          fs: [],
          msg: 'botProfitB >= minProfitB',
          who: 'D'
          });
        ;
        ;
        ;
        return;
        }
      else {
        const v2650 = [v2261];
        const v2651 = undefined /* Remote */;
        const v2652 = await txn3.getOutput('internal', 'v2651', ctc12, v2651);
        const v2654 = v2652[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2655 = v2652[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2657 = v2655[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2676 = stdlib.eq(v2654, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2676, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v2678 = stdlib.ge(v2657, v2261);
        stdlib.assert(v2678, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v2679 = stdlib.safeSub(v2260, v2558);
        const v2680 = stdlib.safeSub(v2657, v2261);
        const v2681 = stdlib.ge(v2680, v2559);
        stdlib.assert(v2681, {
          at: './limitOrder.rsh:110:16:application',
          fs: [],
          msg: 'botProfitB >= minProfitB',
          who: 'D'
          });
        ;
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  
  
  
  };
export async function _SwapViaPool2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SwapViaPool2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SwapViaPool2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc6, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Cancel0_1861: ctc8,
    SwapViaPool0_1861: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10, ctc11]);
  
  
  const [v2256, v2257, v2259, v2260, v2261] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc2, ctc3, ctc3]);
  const v2306 = stdlib.protect(ctc7, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_1861" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v2309 = v2306[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2315 = stdlib.le(v2309, v2260);
  stdlib.assert(v2315, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_1861" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v2328 = ['SwapViaPool0_1861', v2306];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2256, v2257, v2259, v2260, v2261, v2328],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2343], secs: v2345, time: v2344, didSend: v2010, from: v2342 } = txn1;
      
      switch (v2343[0]) {
        case 'Cancel0_1861': {
          const v2346 = v2343[1];
          
          break;
          }
        case 'SwapViaPool0_1861': {
          const v2530 = v2343[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v2556 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
          const v2557 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
          const v2558 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
          const v2566 = null;
          const v2567 = await txn1.getOutput('SwapViaPool', 'v2566', ctc1, v2566);
          
          if (v2557) {
            const v2581 = [v2261];
            const v2582 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v2556,
                remote: ({
                  accs: [],
                  apps: [v2556],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v2259]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2581 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v2583 = await txn1.getOutput('internal', 'v2582', ctc12, v2582);
            const v2586 = v2583[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v2588 = v2586[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v2610 = stdlib.safeSub(v2260, v2558);
            const v2611 = stdlib.safeSub(v2588, v2261);
            sim_r.txns.push({
              kind: 'from',
              to: v2342,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2342,
              tok: v2259
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2256,
              tok: v2259
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2259
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v2650 = [v2261];
            const v2651 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v2556,
                remote: ({
                  accs: [],
                  apps: [v2556],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v2259]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2650 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v2652 = await txn1.getOutput('internal', 'v2651', ctc12, v2651);
            const v2655 = v2652[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v2657 = v2655[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v2679 = stdlib.safeSub(v2260, v2558);
            const v2680 = stdlib.safeSub(v2657, v2261);
            sim_r.txns.push({
              kind: 'from',
              to: v2342,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2342,
              tok: v2259
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2256,
              tok: v2259
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2259
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc2, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2343], secs: v2345, time: v2344, didSend: v2010, from: v2342 } = txn1;
  switch (v2343[0]) {
    case 'Cancel0_1861': {
      const v2346 = v2343[1];
      return;
      break;
      }
    case 'SwapViaPool0_1861': {
      const v2530 = v2343[1];
      undefined /* setApiDetails */;
      ;
      const v2556 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v2557 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v2558 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v2559 = v2530[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v2560 = stdlib.le(v2558, v2260);
      stdlib.assert(v2560, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v2566 = null;
      const v2567 = await txn1.getOutput('SwapViaPool', 'v2566', ctc1, v2566);
      if (v2010) {
        stdlib.protect(ctc1, await interact.out(v2530, v2567), {
          at: './limitOrder.rsh:66:11:application',
          fs: ['at ./limitOrder.rsh:66:11:application call to [unknown function] (defined at: ./limitOrder.rsh:66:11:function exp)', 'at ./limitOrder.rsh:69:10:application call to "k" (defined at: ./limitOrder.rsh:68:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v2557) {
        const v2581 = [v2261];
        const v2582 = undefined /* Remote */;
        const v2583 = await txn1.getOutput('internal', 'v2582', ctc12, v2582);
        const v2585 = v2583[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2586 = v2583[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2588 = v2586[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2607 = stdlib.eq(v2585, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2607, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v2609 = stdlib.ge(v2588, v2261);
        stdlib.assert(v2609, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v2610 = stdlib.safeSub(v2260, v2558);
        const v2611 = stdlib.safeSub(v2588, v2261);
        const v2612 = stdlib.ge(v2611, v2559);
        stdlib.assert(v2612, {
          at: './limitOrder.rsh:110:16:application',
          fs: [],
          msg: 'botProfitB >= minProfitB',
          who: 'SwapViaPool'
          });
        ;
        ;
        ;
        return;
        }
      else {
        const v2650 = [v2261];
        const v2651 = undefined /* Remote */;
        const v2652 = await txn1.getOutput('internal', 'v2651', ctc12, v2651);
        const v2654 = v2652[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2655 = v2652[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2657 = v2655[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2676 = stdlib.eq(v2654, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2676, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v2678 = stdlib.ge(v2657, v2261);
        stdlib.assert(v2678, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v2679 = stdlib.safeSub(v2260, v2558);
        const v2680 = stdlib.safeSub(v2657, v2261);
        const v2681 = stdlib.ge(v2680, v2559);
        stdlib.assert(v2681, {
          at: './limitOrder.rsh:110:16:application',
          fs: [],
          msg: 'botProfitB >= minProfitB',
          who: 'SwapViaPool'
          });
        ;
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Cancel(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Cancel expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Cancel expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Cancel2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function SwapViaPool(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SwapViaPool expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SwapViaPool expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _SwapViaPool2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Cancel()byte[0]`, `SwapViaPool(uint64,byte,uint64,uint64)byte[0]`],
    pure: [`opts()(byte[0],uint64,uint64,uint64,uint64)`],
    sigs: [`Cancel()byte[0]`, `SwapViaPool(uint64,byte,uint64,uint64)byte[0]`, `opts()(byte[0],uint64,uint64,uint64,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByANAAEEAggG4ICxsALhjLn+DkBIUAmgjQYmBAABAAVhcHBJRAEBIjUAMRhBBREoZEkiWzUBIQRbNQI2GgAXSUEAWyI1BCM1BkkhBgxAADlJIQcMQAAcIQcSRDYaATYaAlA2GgNQNhoEUDX/KzT/UEIARyEGEkQ0ASUSRClkSTUDVyAgNQdCBK+Buo/tZRJEKDX/KTT/UIEZr1BCABw2GgIXNQQ2GgM2GgEXSSMMQAOqSSUMQAK+JRJEJTQBEkQ0BEkiEkw0AhIRRClkSTUDSUpXACA1/yEIWzX+IQlbNf0hCls1/Ek1BTX7gATBZMZfNPtQsDT7IlVAAD4xADT/EkSACAAAAAAAAAkzsCg1B7EisgE0/bIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IDtzT7VwEZNfo0+iJbNfk0+iELWzX4NPqBEVs19zT4NP0ORIAIAAAAAAAACgawKDUHNPpXCAEXQQECKjT5FlADNfUyCng19DIKYDT0CTT4CRYyCjT+cABIFlA187EisgE0+LIII7IQNPWyB7YisgEhBbIQNPmyGIAEoOj1mbIaNPgWsho0/BayGjT+sjA0+bIyszIKYDT0CTTzIlsJFjIKNP5wAEg08yEEWwkWULcBPlcEAFA19oAIAAAAAAAAChY09lCwNPZJNfUhBFs19DT1IlsiEkQ09DT8D0Q09DT8CUk18zT3D0SxIrIBNP00+AmyCCOyEDEAsgezsSKyATTzshIkshAxALIUNP6yEbOxIrIBNPyyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgJ9KjT5FlADNfUyCng19DIKYDT0CTT4CRYyCjT+cABIFlA187EisgE0+LIII7IQNPWyB7YisgEhBbIQNPmyGIAEfKR7uLIaNPgWsho0/BayGjT+sjA0+bIyszIKYDT0CTTzIlsJFjIKNP5wAEg08yEEWwkWULcBPlcEAFA19oAIAAAAAAAACls09lCwNPZJNfUhBFs19DT1IlsiEkQ09DT8D0Q09DT8CUk18zT3D0SxIrIBNP00+AmyCCOyEDEAsgezsSKyATTzshIkshAxALIUNP6yEbOxIrIBNPyyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgF7SCM0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/VyAgNf4hCFs1/SEJWzX8IQpbNfuABJqLkXSwNPyIAao0/zEAEkQqNANXWAhQAzX5Mgp4NfgyCmA0+AkWNfexIrIBIQWyEDQDgVhbshiABPqZi0yyGjT/SbIcshoxGBayGiELr7IaKzT9FlCyGjT8FrIaNPsWshqzMgpgNPgJNPcXCRa3AD5XBABQNfqACAAAAAAAAAj2NPpQsDT6NfkiNPkiWxJENP80/lA0/RZQNPwWUDT7FlApSwFXAFhnSCU1ATIGNQJCALFIIQyIAPwiNAESRDQESSISTDQCEhFESTUFSUpKVwAgNf9IKDX+gSBbNf2BKFs1/IEwWzX7gThbNfqABFtPXxw0/1A0/lA0/RZQNPwWUDT7FlA0+hZQsCEMiACnsSKyASKyEiSyEDIKshQ0/bIRszEANP9QNP0WUDT8FlA0+xZQNPoWUClLAVcAYGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/limitOrder.rsh:55:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/limitOrder.rsh:86:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T6","name":"v2789","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_1861","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_1861","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v2294","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2355","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2566","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v2582","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v2651","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Cancel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v2780","type":"address"},{"internalType":"bool","name":"v2781","type":"bool"},{"internalType":"uint256","name":"v2782","type":"uint256"},{"internalType":"uint256","name":"v2783","type":"uint256"}],"name":"SwapViaPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v2791","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_1861","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_1861","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2793","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"opts","outputs":[{"components":[{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200216838819003601f8101601f191683016001600160401b03811184821017620004b35783928291604052833981010390610160821262000521576040519160e08301906001600160401b03821184831017620004b35760a09160405282518452601f19011262000521576040519060a08201906001600160401b03821183831017620004b357620001279261014092604052620000a36020830162000526565b8152620000b36040830162000534565b60208201526060820151604082015260808201516060820152620000da60a0830162000534565b60808201526020850152620000f260c0820162000526565b60408501526200010560e0820162000534565b6060850152610100810151608085015261012081015160a08501520162000534565b60c0820152436003556040516001600160401b036080820190811190821117620004b3576080810160405260008152600060208201526000604082015260606200017062000549565b91015260ff6004541662000508577fe883ac7913334d4785e3b8972973722c2169b723e792404f3a7630c3d5e4bead61018060405133815283516020820152620001c36020850151604083019062000585565b6040840151151560e082015260608401516001600160a01b03908116610100830152608085015161012083015260a085015161014083015260c085015116610160820152a180518015908115620004fb575b5015620004e25734620004c957604051906001600160401b0360c0830190811190831117620004b35760c08201604052600082526200025362000549565b6020830152600060408301526000606083015260006080830152600060a08301523382526020810151602083015260018060a01b0360608201511660408301526080810151606083015260a0810151608083015260c060018060a01b039101511660a082015260016000554360015560405190336020830152620002e06020820151604084019062000585565b60408101516001600160a01b0390811660e08401526060820151610100840152608082015161012084015260a0909101511661014080830191909152815261016081018181106001600160401b03821117620004b35760405280516001600160401b038111620004b357600254600181811c91168015620004a8575b60208210146200049257601f811162000428575b50602091601f8211600114620003be57918192600092620003b2575b50508160011b916000199060031b1c1916176002555b604051611ba89081620005c08239f35b0151905038806200038c565b601f19821692600260005260206000209160005b8581106200040f57508360019510620003f5575b505050811b01600255620003a2565b015160001960f88460031b161c19169055388080620003e6565b91926020600181928685015181550194019201620003d2565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000487575b601f0160051c01905b8181106200047a575062000370565b600081556001016200046b565b909150819062000462565b634e487b7160e01b600052602260045260246000fd5b90607f16906200035c565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000215565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b519081151582036200052157565b51906001600160a01b03821682036200052157565b6040519060a082016001600160401b03811183821017620004b35760405260006080838281528260208201528260408201528260608201520152565b6080908051151583528160018060a01b0391826020820151166020860152604081015160408601526060810151606086015201511691015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081630a47debc146100bb575080631e93b0f1146100b25780634aa8e773146100a9578063573b8510146100a05780635e43ae8e1461009757806382b7c09b1461008e57806383230757146100855763ab53f2c60361000e576100806106f6565b61000e565b506100806106d7565b50610080610620565b50610080610518565b506100806101e4565b5061008061018c565b50610080610168565b3461011f578060031936011261011f57606060a0916100d8610937565b506100ee60026100e6610962565b9254146113cc565b60206101096100fb61088c565b828082518301019101610bdd565b0151918291015261011d604051809261012e565bf35b80fd5b6001600160a01b031690565b6080908051151583528160018060a01b03918260208201511660208601526040810151604086015260608101516060860152015116910152565b5034610187576000366003190112610187576020600354604051908152f35b600080fd5b506000366003190112610187576020806101a4610962565b6101d8816101b06109e8565b84810190600082515251151585825101526101c96109e8565b90600082525185820152610d87565b01511515604051908152f35b50602080600319360112610187576101fa610962565b5060409081519061020a826107b9565b600435825261021761185f565b9061023361022e61022a60045460ff1690565b1590565b6113ec565b8351338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a161027360016000541461140c565b6102a161028f61028161088c565b8380825183010191016118d7565b935180159081156104f1575b5061142c565b6060830191825134146102b39061144c565b835133906001600160a01b03906102c990610122565b16146102d49061146c565b805160009081905281518301528181018051600190529285850180516102f990610122565b8786510190610307916109b6565b805161031290610122565b3061031c916117da565b9260c081019384524760a0820190815261033e600160ff196004541617600455565b875161034990610122565b94825197519785519860808b019788518d519b8c938c85019563014d07ad60e21b875230602487019561037b9661198e565b0398601f19998a810182526103909082610869565b60a08b015161039e90610122565b6103a790610122565b90515a9260008094938194f16103bb610c4b565b6103c49161166c565b506103d460ff1960045416600455565b3084516103e090610122565b906103ea916117da565b905180820360e08501526103fe911461148c565b47905190036060820190815152519060800190808252885161043481928291909160208060408301948051845201511515910152565b037fe6cac464fee4d6ccbd1a9ac1754dabe2e3a1866c51f0c912b5d323089fdd6b3291a1515115610464906114ac565b8361046d6119d8565b96805161047990610122565b61048390896109b6565b0151848701525161049390610122565b61049f908688016109b6565b5160608501525160808401526104b56002600055565b4360015583519283918201906104ca91611a0a565b0390810182526104da9082610869565b6104e390611a98565b5160008152602090f35b0390f35b9050600154143861029b565b6001600160a01b0381160361018757565b8015150361018757565b506080366003190112610187576104ed600435610534816104fd565b61060f6024356105438161050e565b61054b610962565b610553610991565b9360018060a01b031684526020840191151582526106088160409586948582016044358152606083019060643582526105d26105c6895194610594866107e1565b61059c610991565b86526105c06105b960208801986105b16109c5565b8a5251610122565b87516109b6565b51151590565b60208551019015159052565b518783510152516060825101526105ea825160019052565b5185825101526105f86109e8565b9060008252516020820152610d87565b0151151590565b905190151581529081906020820190565b5060e036600319011261018757610635610962565b604090815190610644826107e1565b600435825260c036602319011261018757825191610661836107fc565b602435600281101561018757835260443561067b8161050e565b60208401526080366063190112610187576104e392845161069b81610817565b6064356106a7816104fd565b81526084356106b58161050e565b602082015260a4358682015260c4356060820152858201526020820152610d87565b5034610187576000366003190112610187576020600154604051908152f35b50346101875760008060031936011261011f57805461071361088c565b906040519283918252602090604082840152835191826040850152815b83811061075157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610730565b90600182811c92168015610798575b602083101461078257565b634e487b7160e01b600052602260045260246000fd5b91607f1691610777565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176107d457604052565b6107dc6107a2565b604052565b604081019081106001600160401b038211176107d457604052565b606081019081106001600160401b038211176107d457604052565b608081019081106001600160401b038211176107d457604052565b60a081019081106001600160401b038211176107d457604052565b6101a081019081106001600160401b038211176107d457604052565b601f909101601f19168101906001600160401b038211908210176107d457604052565b60405190600082600254916108a083610768565b80835260019380851690811561091657506001146108c8575b506108c692500383610869565b565b60026000908152600080516020611b7c83398151915294602093509091905b8183106108fe5750506108c69350820101386108b9565b855488840185015294850194879450918301916108e7565b90506108c694506020925060ff191682840152151560051b820101386108b9565b6040519061094482610832565b60006080838281528260208201528260408201528260608201520152565b6040519061096f82610817565b81600081526000602082015260006040820152606061098c610937565b910152565b6040519061099e82610817565b60006060838281528260208201528260408201520152565b6001600160a01b039091169052565b604051906109d2826107fc565b816000815260006020820152604061098c610991565b604051906109f5826107e1565b8160008152602061098c6109c5565b60021115610a0e57565b634e487b7160e01b600052602160045260246000fd5b60405190610a31826107b9565b60008252565b60405190610a44826107e1565b60006020838281520152565b60405190610a5d826107fc565b8160008152604051610a6e816107b9565b600081526020820152604061098c610a37565b60405190610a8e8261084d565b81610a97610991565b8152610aa1610a24565b6020820152610aae610a50565b6040820152610abb610a50565b6060820152610180600091826080820152610ad4610a24565b60a0820152610ae1610a50565b60c0820152610aee610a50565b60e0820152826101008201528261012082015282610140820152826101608201520152565b90606060e0919493946040602061010086019760018060a01b03809416875280518288015201518051610b4581610a04565b82870152602081015115158487015201519081511660808501526020810151151560a0850152604081015160c08501520151910152565b91908260a091031261018757604051610b9481610832565b60808082948051610ba48161050e565b84526020810151610bb4816104fd565b60208501526040810151604085015260608101516060850152015191610bd9836104fd565b0152565b610120818303126101875761010090610c1260405193610bfc85610832565b8251610c07816104fd565b855260208301610b7c565b602084015260c0810151610c25816104fd565b604084015260e081015160608401520151608082015290565b51610c4881610a04565b90565b3d15610c93573d906001600160401b038211610c86575b60405191610c7a601f8201601f191660200184610869565b82523d6000602084013e565b610c8e6107a2565b610c62565b606090565b9081604091031261018757602060405191610cb2836107e1565b805183520151602082015290565b9190916060602060406080840195805185528281015151838601520151805160408501520151910152565b506040513d6000823e3d90fd5b818110610d03575050565b60008155600101610cf8565b610d1a600254610768565b80610d225750565b601f8111600114610d3557506000600255565b6002600052610d7a90601f0160051c600080516020611b7c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610cf8565b6000602081208160025555565b610e0d90610d93610a81565b90610dab610da661022a60045460ff1690565b6114cc565b6040937f777de14fc85a1499bf334c9d8f8617049165fc617a06b7359e02f68714658fa1855180610ddd853383610b13565b0390a16000948593610df260028654146114ec565b610dfa61088c565b6020968188808094518301019101610bdd565b94610e238151801590811561139d575b5061150c565b01610e2e8151610c3e565b610e3781610a04565b610ee4575050918380958194937fcfd78bda05c8d6501f691aa91bd51f3ebc875c06216fed73d6e7ffc356ce728c8395610e71341561162c565b610e8d610e86610e818851610122565b610122565b331461164c565b5160008152602090a101526060610ea7610e818351610122565b91015190828215610edb575bf115610ece575b8055610ec66000600155565b6108c6610d0f565b610ed6610ceb565b610eba565b506108fc610eb3565b92919450946001610ef58451610c3e565b610efe81610a04565b14610f0d575b50505050505050565b86958587945101518152610f21341561152c565b8386808351015194610f3a60608901968751101561154c565b8151600081527f955fae54050ed2769e4d5260295082151dea782a5aae1316baf147d459c8ca5090602090a101528051820151156111aa57608085019586518383015152808601928351610f8d90610122565b30610f97916117da565b610140840190815247908780858751019384519003936101208801948552610fc7600160ff196004541617600455565b518c51875163c8867ae960e01b888201908152602482019390935260448082019290925290815290610ffa606483610869565b88519188835161100990610122565b61101290610122565b9301519051925af190611023610c4b565b918261102e916116cc565b5061103e60ff1960045416600455565b30875161104a90610122565b90611054916117da565b905161105f916113a9565b918486019284845101515247905190038251528280825183010191019061108591610c98565b838251015251606084019080825283516110a0819282610cc0565b037fad07956a8e1e055ba5716f72f46f8e18e2c4199cb084fbdcf6a4b4cf9c34a93391a1805151156110d1906115cc565b818151015151895111156110e4906115ec565b5101515187516110f3916113a9565b936080830194808652835160600151111561110d9061160c565b519151015161111b916113a9565b91839084808515996111629761115b97611155966111749d6111a1575b3390f115611194575b61114b8351610122565b905190339061175c565b51610122565b9151610122565b9151916001600160a01b03169061175c565b80556111806000600155565b611188610d0f565b38808080808080610f04565b61119c610ceb565b611141565b506108fc611138565b6080850195865160a0830151528086019283516111c690610122565b306111d0916117da565b610180840190815247908780858751019384519003936101608801948552611200600160ff196004541617600455565b518c51875163dc8d714f60e01b888201908152602482019390935260448082019290925290815290611233606483610869565b88519188835161124290610122565b61124b90610122565b9301519051925af19061125c610c4b565b91826112679161169c565b5061127760ff1960045416600455565b30875161128390610122565b9061128d916117da565b9051611298916113a9565b9160c08601928484510151524790519003825152828082518301019101906112bf91610c98565b83825101525160e084019080825283516112da819282610cc0565b037fc00b9be54797689d6d9924f3658e417fc372edca27ebf6f48d55f1787acd7ee591a18051511561130b9061156c565b8181510151518951111561131e9061158c565b51015151875161132d916113a9565b936101008301948086528351606001511115611348906115ac565b5191510151611356916113a9565b91839084808515996111629761115b97611155966113849d6111a1573390f1156111945761114b8351610122565b80556113906000600155565b611398610d0f565b611188565b90506001541438610e1d565b9081039081116113b65790565b634e487b7160e01b600052601160045260246000fd5b156113d357565b60405163100960cb60e01b815260076004820152602490fd5b156113f357565b60405163100960cb60e01b8152600b6004820152602490fd5b1561141357565b60405163100960cb60e01b8152600c6004820152602490fd5b1561143357565b60405163100960cb60e01b8152600d6004820152602490fd5b1561145357565b60405163100960cb60e01b8152600e6004820152602490fd5b1561147357565b60405163100960cb60e01b8152600f6004820152602490fd5b1561149357565b60405163100960cb60e01b815260106004820152602490fd5b156114b357565b60405163100960cb60e01b815260126004820152602490fd5b156114d357565b60405163100960cb60e01b815260136004820152602490fd5b156114f357565b60405163100960cb60e01b815260146004820152602490fd5b1561151357565b60405163100960cb60e01b815260156004820152602490fd5b1561153357565b60405163100960cb60e01b815260186004820152602490fd5b1561155357565b60405163100960cb60e01b815260196004820152602490fd5b1561157357565b60405163100960cb60e01b8152601f6004820152602490fd5b1561159357565b60405163100960cb60e01b815260206004820152602490fd5b156115b357565b60405163100960cb60e01b815260216004820152602490fd5b156115d357565b60405163100960cb60e01b8152601b6004820152602490fd5b156115f357565b60405163100960cb60e01b8152601c6004820152602490fd5b1561161357565b60405163100960cb60e01b8152601d6004820152602490fd5b1561163357565b60405163100960cb60e01b815260166004820152602490fd5b1561165357565b60405163100960cb60e01b815260176004820152602490fd5b156116745790565b80511561168357805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b156116a45790565b8051156116b357805190602001fd5b60405163100960cb60e01b8152601e6004820152602490fd5b156116d45790565b8051156116e357805190602001fd5b60405163100960cb60e01b8152601a6004820152602490fd5b156117045790565b80511561171357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156117345790565b80511561174357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381529061179482610817565b60009384809481945193165af16117b36117ac610c4b565b80926116fc565b506020818051810103126117d657602001516117ce8161050e565b1561011f5750565b5080fd5b6040516370a0823160e01b602082019081526001600160a01b039384166024808401919091528252600093849392849190611814816107fc565b5193165af161182b611824610c4b565b809261172c565b50602081805181010312610187576020015190565b6040519061184d826107fc565b60006040838281528260208201520152565b6040519061010082016001600160401b038111838210176118ca575b604052600060e08361188b611840565b8152611895611840565b60208201528260408201526118a8610a37565b60608201526118b5610a37565b60808201528260a08201528260c08201520152565b6118d26107a2565b61187b565b61014081830312610187576040519161012091906119149060c085016001600160401b03811186821017611954575b6040528251610c07816104fd565b602084015260c0810151611927816104fd565b604084015260e081015160608401526101008101516080840152015161194c816104fd565b60a082015290565b61195c6107a2565b611906565b604090805161196f81610a04565b83526020818101511515908401528101516001600160a01b0316910152565b6001600160a01b03918216815291166020820152610140810195949361012093919290916119ce916119c4906040860190611961565b60a0840190611961565b6101008201520152565b604051906119e582610832565b60006080838281526119f5610937565b60208201528260408201528260608201520152565b919091610100608061012083019460018060a01b03808251168552611a376020830151602087019061012e565b60408201511660c0850152606081015160e08501520151910152565b90601f8211611a60575050565b6108c69160026000526020600020906020601f840160051c83019310611a8e575b601f0160051c0190610cf8565b9091508190611a81565b80519091906001600160401b038111611b6e575b611ac081611abb600254610768565b611a53565b602080601f8311600114611afc5750819293600092611af1575b50508160011b916000199060031b1c191617600255565b015190503880611ada565b6002600052601f19831694909190600080516020611b7c833981519152926000905b878210611b56575050836001959610611b3d575b505050811b01600255565b015160001960f88460031b161c19169055388080611b32565b80600185968294968601518155019501930190611b1e565b611b766107a2565b611aac56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 8552,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './limitOrder.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './limitOrder.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './limitOrder.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './limitOrder.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './limitOrder.rsh:124:11:after expr stmt semicolon',
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
  "Cancel": Cancel,
  "D": D,
  "SwapViaPool": SwapViaPool
  };
export const _APIs = {
  Cancel: Cancel,
  SwapViaPool: SwapViaPool
  };
