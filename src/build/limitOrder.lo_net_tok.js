// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

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
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4], ['creator', ctc0]]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2281, v2282, v2284, v2285, v2286, v2287] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2281, v2282, v2284, v2285, v2286] = svs;
      return (await ((async () => {
        
        
        return v2282;}))(...args));
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
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4], ['creator', ctc0]]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7, ctc3, ctc3]);
  const ctc9 = stdlib.T_Data({
    Cancel0_1885: ctc6,
    SwapViaPool0_1885: ctc8
    });
  
  
  const [v2281, v2282, v2284, v2285, v2286] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc2, ctc3, ctc3]);
  const v2356 = ctc.selfAddress();
  const v2358 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:118:24:application call to [unknown function] (defined at: ./limitOrder.rsh:118:24:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runCancel0_1885" (defined at: ./limitOrder.rsh:118:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v2359 = stdlib.addressEq(v2356, v2281);
  stdlib.assert(v2359, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:118:24:application call to [unknown function] (defined at: ./limitOrder.rsh:118:24:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runCancel0_1885" (defined at: ./limitOrder.rsh:118:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v2364 = ['Cancel0_1885', v2358];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2281, v2282, v2284, v2285, v2286, v2364],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:118:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2369], secs: v2371, time: v2370, didSend: v2034, from: v2368 } = txn1;
      
      switch (v2369[0]) {
        case 'Cancel0_1885': {
          const v2372 = v2369[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v2381 = null;
          const v2382 = await txn1.getOutput('Cancel', 'v2381', ctc1, v2381);
          
          sim_r.txns.push({
            kind: 'from',
            to: v2281,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v2284
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_1885': {
          const v2556 = v2369[1];
          
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
  const {data: [v2369], secs: v2371, time: v2370, didSend: v2034, from: v2368 } = txn1;
  switch (v2369[0]) {
    case 'Cancel0_1885': {
      const v2372 = v2369[1];
      undefined /* setApiDetails */;
      ;
      const v2379 = stdlib.addressEq(v2368, v2281);
      stdlib.assert(v2379, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v2381 = null;
      const v2382 = await txn1.getOutput('Cancel', 'v2381', ctc1, v2381);
      if (v2034) {
        stdlib.protect(ctc1, await interact.out(v2372, v2382), {
          at: './limitOrder.rsh:118:11:application',
          fs: ['at ./limitOrder.rsh:118:11:application call to [unknown function] (defined at: ./limitOrder.rsh:118:11:function exp)', 'at ./limitOrder.rsh:121:10:application call to "k" (defined at: ./limitOrder.rsh:120:17:function exp)'],
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
    case 'SwapViaPool0_1885': {
      const v2556 = v2369[1];
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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Struct([['tokA', ctc0], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3], ['creator', ctc4]]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc3, ctc8, ctc2, ctc2]);
  const ctc10 = stdlib.T_Data({
    Cancel0_1885: ctc7,
    SwapViaPool0_1885: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc13 = stdlib.T_Tuple([ctc2, ctc11, ctc12]);
  
  
  const v2264 = stdlib.protect(ctc5, interact.opts, 'for D\'s interact field opts');
  const v2265 = v2264.tokA;
  const v2266 = v2264.tokB;
  const v2267 = v2264.amtA;
  const v2268 = v2264.amtB;
  const v2269 = v2264.ctcAnnouncer;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2264, v2265, v2266, v2267, v2268, v2269],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./limitOrder.rsh:48:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc0, ctc1, ctc2, ctc2, ctc3],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:48:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2282, v2283, v2284, v2285, v2286, v2287], secs: v2289, time: v2288, didSend: v1790, from: v2281 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2284
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc1, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v2282, v2283, v2284, v2285, v2286, v2287], secs: v2289, time: v2288, didSend: v1790, from: v2281 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2281, v2282, v2284, v2285, v2286, v2287],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2288,
    onlyIf: true,
    out_tys: [],
    pay: [v2285, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v2300, time: v2299, didSend: v1852, from: v2298 } = txn2;
      
      sim_r.txns.push({
        amt: v2285,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v2312 = await ctc.getContractInfo();
      const v2313 = ['None', null];
      const v2314 = ['Some', v2284];
      const v2317 = [];
      const v2320 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2287,
          remote: ({
            accs: [v2281],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2320', ctc6, v2320);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2300, time: v2299, didSend: v1852, from: v2298 } = txn2;
  ;
  const v2304 = stdlib.addressEq(v2281, v2298);
  stdlib.assert(v2304, {
    at: './limitOrder.rsh:52:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './limitOrder.rsh:53:19:application',
    fs: ['at ./limitOrder.rsh:53:19:application call to [unknown function] (defined at: ./limitOrder.rsh:53:19:function exp)', 'at ./limitOrder.rsh:53:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:53:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v2312 = await ctc.getContractInfo();
  const v2313 = ['None', null];
  const v2314 = ['Some', v2284];
  const v2317 = [];
  const v2320 = undefined /* Remote */;
  const v2321 = await txn2.getOutput('internal', 'v2320', ctc6, v2320);
  const v2323 = v2321[stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0')];
  const v2329 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2323);
  stdlib.assert(v2329, {
    at: './limitOrder.rsh:56:24:application',
    fs: [],
    msg: 'remote bill check',
    who: 'D'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc10],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2369], secs: v2371, time: v2370, didSend: v2034, from: v2368 } = txn3;
  switch (v2369[0]) {
    case 'Cancel0_1885': {
      const v2372 = v2369[1];
      undefined /* setApiDetails */;
      ;
      const v2379 = stdlib.addressEq(v2368, v2281);
      stdlib.assert(v2379, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v2381 = null;
      await txn3.getOutput('Cancel', 'v2381', ctc0, v2381);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_1885': {
      const v2556 = v2369[1];
      undefined /* setApiDetails */;
      ;
      const v2582 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v2583 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v2584 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v2585 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '3')];
      const v2586 = stdlib.le(v2584, v2285);
      stdlib.assert(v2586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v2592 = null;
      await txn3.getOutput('SwapViaPool', 'v2592', ctc0, v2592);
      if (v2583) {
        const v2607 = [v2286];
        const v2608 = undefined /* Remote */;
        const v2609 = await txn3.getOutput('internal', 'v2608', ctc13, v2608);
        const v2611 = v2609[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2612 = v2609[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v2614 = v2612[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2633 = stdlib.eq(v2611, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2633, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v2635 = stdlib.ge(v2614, v2286);
        stdlib.assert(v2635, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v2636 = stdlib.safeSub(v2285, v2584);
        const v2637 = stdlib.safeSub(v2614, v2286);
        const v2638 = stdlib.ge(v2637, v2585);
        stdlib.assert(v2638, {
          at: './limitOrder.rsh:111:16:application',
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
        const v2676 = [v2286];
        const v2677 = undefined /* Remote */;
        const v2678 = await txn3.getOutput('internal', 'v2677', ctc13, v2677);
        const v2680 = v2678[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2681 = v2678[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v2683 = v2681[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2702 = stdlib.eq(v2680, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2702, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:105:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v2704 = stdlib.ge(v2683, v2286);
        stdlib.assert(v2704, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v2705 = stdlib.safeSub(v2285, v2584);
        const v2706 = stdlib.safeSub(v2683, v2286);
        const v2707 = stdlib.ge(v2706, v2585);
        stdlib.assert(v2707, {
          at: './limitOrder.rsh:111:16:application',
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
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4], ['creator', ctc0]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc6, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Cancel0_1885: ctc8,
    SwapViaPool0_1885: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10, ctc11]);
  
  
  const [v2281, v2282, v2284, v2285, v2286] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc2, ctc3, ctc3]);
  const v2332 = stdlib.protect(ctc7, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:67:62:application call to [unknown function] (defined at: ./limitOrder.rsh:67:62:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runSwapViaPool0_1885" (defined at: ./limitOrder.rsh:67:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v2335 = v2332[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2341 = stdlib.le(v2335, v2285);
  stdlib.assert(v2341, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:67:62:application call to [unknown function] (defined at: ./limitOrder.rsh:67:62:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runSwapViaPool0_1885" (defined at: ./limitOrder.rsh:67:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v2354 = ['SwapViaPool0_1885', v2332];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2281, v2282, v2284, v2285, v2286, v2354],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2369], secs: v2371, time: v2370, didSend: v2034, from: v2368 } = txn1;
      
      switch (v2369[0]) {
        case 'Cancel0_1885': {
          const v2372 = v2369[1];
          
          break;
          }
        case 'SwapViaPool0_1885': {
          const v2556 = v2369[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v2582 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
          const v2583 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
          const v2584 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
          const v2592 = null;
          const v2593 = await txn1.getOutput('SwapViaPool', 'v2592', ctc1, v2592);
          
          if (v2583) {
            const v2607 = [v2286];
            const v2608 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v2582,
                remote: ({
                  accs: [],
                  apps: [v2582],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '2'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:81:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1'),
                  toks: [v2284]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2607 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v2609 = await txn1.getOutput('internal', 'v2608', ctc12, v2608);
            const v2612 = v2609[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
            const v2614 = v2612[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
            const v2636 = stdlib.safeSub(v2285, v2584);
            const v2637 = stdlib.safeSub(v2614, v2286);
            sim_r.txns.push({
              kind: 'from',
              to: v2368,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2368,
              tok: v2284
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2281,
              tok: v2284
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2284
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v2676 = [v2286];
            const v2677 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v2582,
                remote: ({
                  accs: [],
                  apps: [v2582],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '2'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:81:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1'),
                  toks: [v2284]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2676 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v2678 = await txn1.getOutput('internal', 'v2677', ctc12, v2677);
            const v2681 = v2678[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
            const v2683 = v2681[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
            const v2705 = stdlib.safeSub(v2285, v2584);
            const v2706 = stdlib.safeSub(v2683, v2286);
            sim_r.txns.push({
              kind: 'from',
              to: v2368,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2368,
              tok: v2284
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2281,
              tok: v2284
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2284
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
  const {data: [v2369], secs: v2371, time: v2370, didSend: v2034, from: v2368 } = txn1;
  switch (v2369[0]) {
    case 'Cancel0_1885': {
      const v2372 = v2369[1];
      return;
      break;
      }
    case 'SwapViaPool0_1885': {
      const v2556 = v2369[1];
      undefined /* setApiDetails */;
      ;
      const v2582 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v2583 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v2584 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v2585 = v2556[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '3')];
      const v2586 = stdlib.le(v2584, v2285);
      stdlib.assert(v2586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v2592 = null;
      const v2593 = await txn1.getOutput('SwapViaPool', 'v2592', ctc1, v2592);
      if (v2034) {
        stdlib.protect(ctc1, await interact.out(v2556, v2593), {
          at: './limitOrder.rsh:67:11:application',
          fs: ['at ./limitOrder.rsh:67:11:application call to [unknown function] (defined at: ./limitOrder.rsh:67:11:function exp)', 'at ./limitOrder.rsh:70:10:application call to "k" (defined at: ./limitOrder.rsh:69:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v2583) {
        const v2607 = [v2286];
        const v2608 = undefined /* Remote */;
        const v2609 = await txn1.getOutput('internal', 'v2608', ctc12, v2608);
        const v2611 = v2609[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2612 = v2609[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v2614 = v2612[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2633 = stdlib.eq(v2611, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2633, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v2635 = stdlib.ge(v2614, v2286);
        stdlib.assert(v2635, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v2636 = stdlib.safeSub(v2285, v2584);
        const v2637 = stdlib.safeSub(v2614, v2286);
        const v2638 = stdlib.ge(v2637, v2585);
        stdlib.assert(v2638, {
          at: './limitOrder.rsh:111:16:application',
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
        const v2676 = [v2286];
        const v2677 = undefined /* Remote */;
        const v2678 = await txn1.getOutput('internal', 'v2677', ctc12, v2677);
        const v2680 = v2678[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2681 = v2678[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v2683 = v2681[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v2702 = stdlib.eq(v2680, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2702, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:105:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v2704 = stdlib.ge(v2683, v2286);
        stdlib.assert(v2704, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v2705 = stdlib.safeSub(v2285, v2584);
        const v2706 = stdlib.safeSub(v2683, v2286);
        const v2707 = stdlib.ge(v2706, v2585);
        stdlib.assert(v2707, {
          at: './limitOrder.rsh:111:16:application',
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
    impure: [`Cancel()void`, `SwapViaPool(uint64,byte,uint64,uint64)void`, `_reachp_0((uint64,(byte[0],uint64,uint64,uint64,uint64,address),byte[0],uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[25])))void`],
    pure: [`opts()(byte[0],uint64,uint64,uint64,uint64,address)`],
    sigs: [`Cancel()void`, `SwapViaPool(uint64,byte,uint64,uint64)void`, `_reachp_0((uint64,(byte[0],uint64,uint64,uint64,uint64,address),byte[0],uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[25])))void`, `opts()(byte[0],uint64,uint64,uint64,uint64,address)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEIAgZgCaCNBmhwJgQAAQEFYXBwSUQBADEYQQO0KGRJIls1ASRbNQIrZClkUIIGBAabhPQEa/GgDwSL/pyxBKbLyyEExnVcEATf2SMoNhoAjgYAOwSUA00DaAABA10AgSKvNQslNAESRIgE2jQLIls1DDQLVwgaNQ2ABEJV4hw0DBZQNA1QsDQMiASONA0iVY0CBFkDXEL/xTYaARc2GgIXNhoDFzYaBBc1CzUMNQ01DiSvKTQOFjQNFlEHCFA0DBZQNAsWUFBQNQtC/5cxADQREkQoNQuACAAAAAAAAAlNNAtQsDQLNQQ0DzQRiAQjIjQQMgoyCYgEKzEZgQUSRIgEaCIyCjIJiARwNANAAAqABBUffHU0BFCwI0M0CyJbNRM0CyEGWzUSNAuBEVs1DTQSNA8ORCg1DIAIAAAAAAAACiA0DFCwNAw1BDQLVwgBF0ECqSo0ExZQAzUIMgp4NQkoMgpgNAkJNBIJFjIKNBBwAEgWUDUKNBI0CIgD+bYisgEhBLIQNBOyGIAEoOj1mbIaNBIWsho0DhayGjQQsjA0E7IyszIKYDQJCTQKIlsJFjIKNBBwAEg0CiRbCRZQtwE+VwQAUDULgAgAAAAAAAAKMDQLULA0C0k1DCRbNQs0DCJbIhJENAs0Dg9ENAs0DglJNQw0DQ9ENA80EgkxAIgDETQMNBAxAIgDBDQONBA0EYgC+yI0EDIKMgmIAwdC/tk0ASUSRIgDHjQMNQQxGSISREL+2zEANRE0CyJbNQ00C1cIQDUMNAuBSFs1EDQLgVBbNQ80C4FYWzUONAshBVs1EoAEFCI07TQNFlA0DFA0EBZQNA8WUDQOFlA0EhZQsDQNiAKWIQeIAtsiNBAyCogCfTQRNAxQNBAWUDQPFlA0DhZQNBIWUCMyBjUCNQErSwFXAH9nKUxXfwFnKDQBFjQCFlBnMRkiEkSIAp9C/jwjNAESRElXACA1EUlXIEA1DEkhBVs1EEkhCFs1D0khCVs1DoF4WzUSNAsXNQ2ABNUVGRQ0DRZQsDQNiAIPNA+IAho0ETEAEkQqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGIAESpxrybIaNBFJshyyGjEYFrIaIQavshopNBAWULIaNA8Wsho0DhayGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAACRA0C1CwNAs1DSI0DSJbEkQ0ETQMUDQQFlA0DxZQNA4WUCSvUCUyBkL+/ogBaCEHiAGxNhoBNQtC/nmIAVg2GgE1C0L/CIgBTTYaATULQvyTIjE0EkSBAzE1EkQiMTYSRCIxNxJEiAEtgYABryIiQv63NA1XARk1C0L9Hyo0ExZQAzUIMgp4NQkoMgpgNAkJNBIJFjIKNBBwAEgWUDUKNBI0CIgBULYisgEhBLIQNBOyGIAEfKR7uLIaNBIWsho0DhayGjQQsjA0E7IyszIKYDQJCTQKIlsJFjIKNBBwAEg0CiRbCRZQtwE+VwQAUDULgAgAAAAAAAAKdTQLULA0C0k1DCRbNQs0DCJbIhJENAs0Dg9ENAs0DglJNQw0DQ9ENA80EgkxAIgAaDQMNBAxAIgAWzQONBA0EYgAUiI0EDIKMgmIAF5C/DAisgEjshCyB7IIiSKyASOyELIHsgiziSKyAYEEshCyFLIRshKziUL720L9K0iJTAlJNQYyCYgAEYkJSUH/7kk1BogAHYmxQv/OsUL/viM1A4lJIhJMNAISEUSJsbIVQv+2MRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiUlXACA1EUlXIEA1DEkhBVs1EEkhCFs1DyEJWzUOiTQGCDUGiTQGNAdKD0H/hEL/jLFC/0+xsglC/1Q=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `28`,
    1000: `597`,
    1001: `598`,
    1002: `599`,
    1003: `599`,
    1004: `599`,
    1005: `600`,
    1006: `600`,
    1007: `600`,
    1008: `601`,
    1009: `602`,
    101: `29`,
    1010: `603`,
    1011: `604`,
    1012: `604`,
    1013: `604`,
    1014: `606`,
    1015: `606`,
    1016: `607`,
    1017: `607`,
    1018: `607`,
    1019: `608`,
    102: `30`,
    1020: `608`,
    1021: `609`,
    1022: `609`,
    1023: `609`,
    1024: `611`,
    1025: `612`,
    1026: `612`,
    1027: `613`,
    1028: `614`,
    1029: `615`,
    103: `30`,
    1030: `616`,
    1031: `616`,
    1032: `617`,
    1033: `617`,
    1034: `618`,
    1035: `619`,
    1036: `619`,
    1037: `620`,
    1038: `621`,
    1039: `621`,
    104: `32`,
    1040: `622`,
    1041: `623`,
    1042: `623`,
    1043: `624`,
    1044: `625`,
    1045: `625`,
    1046: `626`,
    1047: `627`,
    1048: `628`,
    1049: `628`,
    105: `33`,
    1050: `630`,
    1051: `630`,
    1052: `631`,
    1053: `631`,
    1054: `632`,
    1055: `633`,
    1056: `634`,
    1057: `635`,
    1058: `635`,
    1059: `636`,
    106: `33`,
    1060: `636`,
    1061: `637`,
    1062: `637`,
    1063: `638`,
    1064: `638`,
    1065: `638`,
    1066: `639`,
    1067: `640`,
    1068: `641`,
    1069: `641`,
    107: `34`,
    1070: `642`,
    1071: `642`,
    1072: `643`,
    1073: `643`,
    1074: `644`,
    1075: `644`,
    1076: `646`,
    1077: `646`,
    1078: `647`,
    1079: `647`,
    108: `35`,
    1080: `647`,
    1081: `647`,
    1082: `647`,
    1083: `647`,
    1084: `648`,
    1085: `648`,
    1086: `649`,
    1087: `649`,
    1088: `650`,
    1089: `651`,
    109: `36`,
    1090: `651`,
    1091: `652`,
    1092: `652`,
    1093: `653`,
    1094: `654`,
    1095: `654`,
    1096: `655`,
    1097: `655`,
    1098: `656`,
    1099: `656`,
    11: `2`,
    110: `36`,
    1100: `657`,
    1101: `657`,
    1102: `658`,
    1103: `658`,
    1104: `659`,
    1105: `663`,
    1106: `663`,
    1107: `664`,
    1108: `665`,
    1109: `665`,
    111: `36`,
    1110: `666`,
    1111: `667`,
    1112: `667`,
    1113: `668`,
    1114: `669`,
    1115: `670`,
    1116: `671`,
    1117: `672`,
    1118: `672`,
    1119: `673`,
    112: `37`,
    1120: `673`,
    1121: `674`,
    1122: `674`,
    1123: `675`,
    1124: `676`,
    1125: `676`,
    1126: `677`,
    1127: `678`,
    1128: `679`,
    1129: `680`,
    113: `37`,
    1130: `681`,
    1131: `682`,
    1132: `682`,
    1133: `682`,
    1134: `683`,
    1135: `683`,
    1136: `683`,
    1137: `684`,
    1138: `685`,
    1139: `685`,
    114: `38`,
    1140: `686`,
    1141: `686`,
    1142: `686`,
    1143: `686`,
    1144: `686`,
    1145: `686`,
    1146: `686`,
    1147: `686`,
    1148: `686`,
    1149: `686`,
    115: `39`,
    1150: `687`,
    1151: `687`,
    1152: `688`,
    1153: `689`,
    1154: `690`,
    1155: `690`,
    1156: `691`,
    1157: `692`,
    1158: `692`,
    1159: `693`,
    116: `40`,
    1160: `694`,
    1161: `695`,
    1162: `695`,
    1163: `696`,
    1164: `696`,
    1165: `697`,
    1166: `698`,
    1167: `699`,
    1168: `700`,
    1169: `701`,
    117: `40`,
    1170: `705`,
    1171: `705`,
    1172: `706`,
    1173: `706`,
    1174: `707`,
    1175: `708`,
    1176: `711`,
    1177: `711`,
    1178: `712`,
    1179: `712`,
    118: `41`,
    1180: `713`,
    1181: `714`,
    1182: `715`,
    1183: `715`,
    1184: `716`,
    1185: `716`,
    1186: `717`,
    1187: `718`,
    1188: `721`,
    1189: `721`,
    119: `41`,
    1190: `722`,
    1191: `722`,
    1192: `723`,
    1193: `725`,
    1194: `725`,
    1195: `726`,
    1196: `726`,
    1197: `726`,
    1198: `727`,
    1199: `727`,
    12: `2`,
    120: `42`,
    1200: `728`,
    1201: `728`,
    1202: `729`,
    1203: `729`,
    1204: `730`,
    1205: `730`,
    1206: `730`,
    1207: `731`,
    1208: `731`,
    1209: `732`,
    121: `42`,
    1210: `732`,
    1211: `734`,
    1212: `734`,
    1213: `735`,
    1214: `735`,
    1215: `735`,
    1216: `737`,
    1217: `738`,
    1218: `738`,
    1219: `739`,
    122: `42`,
    1220: `739`,
    1221: `740`,
    1222: `740`,
    1223: `741`,
    1224: `741`,
    1225: `741`,
    1226: `742`,
    1227: `742`,
    1228: `742`,
    1229: `744`,
    123: `43`,
    1230: `745`,
    1231: `745`,
    1232: `746`,
    1233: `747`,
    1234: `747`,
    1235: `748`,
    1236: `748`,
    1237: `749`,
    1238: `749`,
    1239: `750`,
    124: `43`,
    1240: `752`,
    1241: `753`,
    1242: `753`,
    1243: `754`,
    1244: `755`,
    1245: `755`,
    1246: `756`,
    1247: `756`,
    1248: `757`,
    1249: `757`,
    125: `44`,
    1250: `758`,
    1251: `759`,
    1252: `761`,
    1253: `762`,
    1254: `762`,
    1255: `763`,
    1256: `763`,
    1257: `764`,
    1258: `764`,
    1259: `765`,
    126: `44`,
    1260: `765`,
    1261: `766`,
    1262: `766`,
    1263: `767`,
    1264: `767`,
    1265: `768`,
    1266: `769`,
    1267: `771`,
    1268: `771`,
    1269: `771`,
    127: `44`,
    1270: `773`,
    1271: `773`,
    1272: `773`,
    1273: `775`,
    1274: `776`,
    1275: `778`,
    1276: `779`,
    1277: `780`,
    1278: `781`,
    1279: `781`,
    128: `44`,
    1280: `782`,
    1281: `782`,
    1282: `783`,
    1283: `783`,
    1284: `783`,
    1285: `784`,
    1286: `786`,
    1287: `787`,
    1288: `788`,
    1289: `788`,
    129: `44`,
    1290: `788`,
    1291: `789`,
    1292: `790`,
    1293: `790`,
    1294: `791`,
    1295: `791`,
    1296: `791`,
    1297: `792`,
    1298: `794`,
    1299: `795`,
    13: `2`,
    130: `44`,
    1300: `795`,
    1301: `795`,
    1302: `797`,
    1303: `798`,
    1304: `798`,
    1305: `798`,
    1306: `800`,
    1307: `801`,
    1308: `801`,
    1309: `802`,
    131: `45`,
    1310: `804`,
    1311: `805`,
    1312: `806`,
    1313: `807`,
    1314: `808`,
    1315: `808`,
    1316: `809`,
    1317: `810`,
    1318: `811`,
    1319: `812`,
    132: `45`,
    1320: `814`,
    1321: `815`,
    1322: `815`,
    1323: `816`,
    1324: `816`,
    1325: `816`,
    1326: `819`,
    1327: `819`,
    1328: `820`,
    1329: `820`,
    133: `46`,
    1330: `821`,
    1331: `822`,
    1332: `823`,
    1333: `824`,
    1334: `824`,
    1335: `825`,
    1336: `826`,
    1337: `826`,
    1338: `827`,
    1339: `827`,
    134: `47`,
    1340: `828`,
    1341: `828`,
    1342: `829`,
    1343: `830`,
    1344: `831`,
    1345: `831`,
    1346: `832`,
    1347: `833`,
    1348: `834`,
    1349: `835`,
    135: `48`,
    1350: `835`,
    1351: `836`,
    1352: `837`,
    1353: `838`,
    1354: `840`,
    1355: `841`,
    1356: `841`,
    1357: `841`,
    1358: `842`,
    1359: `842`,
    136: `48`,
    1360: `843`,
    1361: `844`,
    1362: `844`,
    1363: `844`,
    1364: `845`,
    1365: `845`,
    1366: `846`,
    1367: `847`,
    1368: `847`,
    1369: `848`,
    137: `49`,
    1370: `849`,
    1371: `849`,
    1372: `850`,
    1373: `851`,
    1374: `851`,
    1375: `852`,
    1376: `853`,
    1377: `853`,
    1378: `854`,
    1379: `854`,
    138: `50`,
    1380: `855`,
    1381: `856`,
    1382: `856`,
    1383: `857`,
    1384: `859`,
    1385: `859`,
    1386: `860`,
    1387: `861`,
    1388: `861`,
    1389: `862`,
    139: `52`,
    1390: `864`,
    1391: `864`,
    1392: `865`,
    1393: `865`,
    1394: `866`,
    1395: `867`,
    1396: `868`,
    1397: `868`,
    1398: `868`,
    1399: `869`,
    14: `2`,
    140: `52`,
    1400: `869`,
    1401: `869`,
    1402: `871`,
    1403: `872`,
    1404: `872`,
    1405: `872`,
    1406: `874`,
    1407: `875`,
    1408: `875`,
    1409: `876`,
    141: `53`,
    142: `53`,
    143: `53`,
    144: `54`,
    145: `54`,
    146: `55`,
    147: `56`,
    148: `57`,
    149: `57`,
    15: `2`,
    150: `57`,
    151: `57`,
    152: `57`,
    153: `57`,
    154: `58`,
    155: `58`,
    156: `58`,
    157: `60`,
    158: `60`,
    159: `60`,
    16: `2`,
    160: `61`,
    161: `62`,
    162: `62`,
    163: `62`,
    164: `63`,
    165: `64`,
    166: `64`,
    167: `64`,
    168: `65`,
    169: `66`,
    17: `2`,
    170: `66`,
    171: `66`,
    172: `67`,
    173: `68`,
    174: `68`,
    175: `69`,
    176: `69`,
    177: `70`,
    178: `70`,
    179: `71`,
    18: `2`,
    180: `71`,
    181: `73`,
    182: `74`,
    183: `75`,
    184: `76`,
    185: `76`,
    186: `77`,
    187: `78`,
    188: `78`,
    189: `79`,
    19: `2`,
    190: `80`,
    191: `80`,
    192: `80`,
    193: `81`,
    194: `82`,
    195: `82`,
    196: `83`,
    197: `84`,
    198: `85`,
    199: `85`,
    2: `2`,
    20: `2`,
    200: `86`,
    201: `87`,
    202: `88`,
    203: `89`,
    204: `90`,
    205: `90`,
    206: `91`,
    207: `91`,
    208: `91`,
    209: `93`,
    21: `2`,
    210: `93`,
    211: `94`,
    212: `94`,
    213: `95`,
    214: `96`,
    215: `100`,
    216: `101`,
    217: `101`,
    218: `102`,
    219: `102`,
    22: `2`,
    220: `102`,
    221: `102`,
    222: `102`,
    223: `102`,
    224: `102`,
    225: `102`,
    226: `102`,
    227: `102`,
    228: `103`,
    229: `103`,
    23: `2`,
    230: `104`,
    231: `105`,
    232: `106`,
    233: `106`,
    234: `107`,
    235: `107`,
    236: `108`,
    237: `108`,
    238: `110`,
    239: `110`,
    24: `2`,
    240: `111`,
    241: `111`,
    242: `111`,
    243: `113`,
    244: `115`,
    245: `115`,
    246: `116`,
    247: `116`,
    248: `117`,
    249: `117`,
    25: `2`,
    250: `118`,
    251: `118`,
    252: `118`,
    253: `120`,
    254: `120`,
    255: `121`,
    256: `121`,
    257: `122`,
    258: `123`,
    259: `125`,
    26: `2`,
    260: `125`,
    261: `125`,
    262: `127`,
    263: `128`,
    264: `128`,
    265: `129`,
    266: `129`,
    267: `130`,
    268: `130`,
    269: `130`,
    27: `2`,
    270: `132`,
    271: `132`,
    272: `133`,
    273: `133`,
    274: `133`,
    275: `135`,
    276: `135`,
    277: `135`,
    278: `135`,
    279: `135`,
    28: `4`,
    280: `135`,
    281: `136`,
    282: `136`,
    283: `137`,
    284: `138`,
    285: `140`,
    286: `141`,
    287: `143`,
    288: `143`,
    289: `144`,
    29: `4`,
    290: `145`,
    291: `146`,
    292: `146`,
    293: `147`,
    294: `147`,
    295: `148`,
    296: `148`,
    297: `149`,
    298: `150`,
    299: `150`,
    3: `2`,
    30: `5`,
    300: `151`,
    301: `151`,
    302: `152`,
    303: `152`,
    304: `153`,
    305: `154`,
    306: `154`,
    307: `155`,
    308: `155`,
    309: `156`,
    31: `5`,
    310: `156`,
    311: `157`,
    312: `158`,
    313: `162`,
    314: `163`,
    315: `163`,
    316: `164`,
    317: `164`,
    318: `164`,
    319: `164`,
    32: `5`,
    320: `164`,
    321: `164`,
    322: `164`,
    323: `164`,
    324: `164`,
    325: `164`,
    326: `165`,
    327: `165`,
    328: `166`,
    329: `167`,
    33: `6`,
    330: `168`,
    331: `168`,
    332: `169`,
    333: `169`,
    334: `170`,
    335: `170`,
    336: `171`,
    337: `171`,
    338: `171`,
    339: `172`,
    34: `7`,
    340: `173`,
    341: `173`,
    342: `173`,
    343: `174`,
    344: `175`,
    345: `175`,
    346: `176`,
    347: `177`,
    348: `178`,
    349: `179`,
    35: `8`,
    350: `179`,
    351: `180`,
    352: `180`,
    353: `181`,
    354: `182`,
    355: `182`,
    356: `183`,
    357: `184`,
    358: `184`,
    359: `185`,
    36: `9`,
    360: `186`,
    361: `186`,
    362: `187`,
    363: `188`,
    364: `188`,
    365: `189`,
    366: `190`,
    367: `191`,
    368: `191`,
    369: `193`,
    37: `10`,
    370: `193`,
    371: `194`,
    372: `194`,
    373: `195`,
    374: `196`,
    375: `197`,
    376: `198`,
    377: `198`,
    378: `199`,
    379: `199`,
    38: `11`,
    380: `200`,
    381: `200`,
    382: `201`,
    383: `201`,
    384: `201`,
    385: `202`,
    386: `203`,
    387: `204`,
    388: `204`,
    389: `205`,
    39: `11`,
    390: `205`,
    391: `206`,
    392: `206`,
    393: `207`,
    394: `207`,
    395: `209`,
    396: `209`,
    397: `210`,
    398: `210`,
    399: `210`,
    4: `2`,
    40: `12`,
    400: `210`,
    401: `210`,
    402: `210`,
    403: `211`,
    404: `211`,
    405: `212`,
    406: `212`,
    407: `213`,
    408: `214`,
    409: `214`,
    41: `13`,
    410: `215`,
    411: `215`,
    412: `216`,
    413: `217`,
    414: `217`,
    415: `218`,
    416: `218`,
    417: `219`,
    418: `219`,
    419: `220`,
    42: `14`,
    420: `220`,
    421: `221`,
    422: `221`,
    423: `222`,
    424: `226`,
    425: `226`,
    426: `227`,
    427: `228`,
    428: `228`,
    429: `229`,
    43: `14`,
    430: `230`,
    431: `230`,
    432: `231`,
    433: `232`,
    434: `233`,
    435: `234`,
    436: `235`,
    437: `235`,
    438: `236`,
    439: `236`,
    44: `15`,
    440: `237`,
    441: `237`,
    442: `238`,
    443: `239`,
    444: `239`,
    445: `240`,
    446: `241`,
    447: `242`,
    448: `243`,
    449: `244`,
    45: `16`,
    450: `245`,
    451: `245`,
    452: `245`,
    453: `246`,
    454: `246`,
    455: `246`,
    456: `247`,
    457: `248`,
    458: `248`,
    459: `249`,
    46: `17`,
    460: `249`,
    461: `249`,
    462: `249`,
    463: `249`,
    464: `249`,
    465: `249`,
    466: `249`,
    467: `249`,
    468: `249`,
    469: `250`,
    47: `18`,
    470: `250`,
    471: `251`,
    472: `252`,
    473: `253`,
    474: `253`,
    475: `254`,
    476: `255`,
    477: `255`,
    478: `256`,
    479: `257`,
    48: `19`,
    480: `258`,
    481: `258`,
    482: `259`,
    483: `259`,
    484: `260`,
    485: `261`,
    486: `262`,
    487: `263`,
    488: `264`,
    489: `268`,
    49: `21`,
    490: `268`,
    491: `269`,
    492: `269`,
    493: `270`,
    494: `271`,
    495: `274`,
    496: `274`,
    497: `275`,
    498: `275`,
    499: `276`,
    5: `2`,
    50: `21`,
    500: `277`,
    501: `278`,
    502: `278`,
    503: `279`,
    504: `279`,
    505: `280`,
    506: `281`,
    507: `284`,
    508: `284`,
    509: `285`,
    51: `21`,
    510: `285`,
    511: `286`,
    512: `288`,
    513: `288`,
    514: `289`,
    515: `289`,
    516: `289`,
    517: `290`,
    518: `290`,
    519: `291`,
    52: `21`,
    520: `291`,
    521: `292`,
    522: `292`,
    523: `293`,
    524: `293`,
    525: `293`,
    526: `294`,
    527: `294`,
    528: `295`,
    529: `295`,
    53: `21`,
    530: `297`,
    531: `297`,
    532: `298`,
    533: `298`,
    534: `298`,
    535: `300`,
    536: `301`,
    537: `301`,
    538: `302`,
    539: `302`,
    54: `21`,
    540: `303`,
    541: `303`,
    542: `304`,
    543: `304`,
    544: `304`,
    545: `305`,
    546: `305`,
    547: `305`,
    548: `307`,
    549: `307`,
    55: `21`,
    550: `308`,
    551: `309`,
    552: `310`,
    553: `313`,
    554: `313`,
    555: `313`,
    556: `314`,
    557: `314`,
    558: `315`,
    559: `315`,
    56: `21`,
    560: `317`,
    561: `317`,
    562: `318`,
    563: `319`,
    564: `320`,
    565: `322`,
    566: `322`,
    567: `322`,
    568: `324`,
    569: `324`,
    57: `21`,
    570: `325`,
    571: `325`,
    572: `326`,
    573: `326`,
    574: `327`,
    575: `328`,
    576: `329`,
    577: `329`,
    578: `330`,
    579: `330`,
    58: `21`,
    580: `331`,
    581: `331`,
    582: `331`,
    583: `332`,
    584: `332`,
    585: `333`,
    586: `333`,
    587: `334`,
    588: `334`,
    589: `335`,
    59: `21`,
    590: `336`,
    591: `336`,
    592: `337`,
    593: `337`,
    594: `338`,
    595: `338`,
    596: `339`,
    597: `340`,
    598: `340`,
    599: `341`,
    6: `2`,
    60: `21`,
    600: `341`,
    601: `342`,
    602: `342`,
    603: `343`,
    604: `344`,
    605: `344`,
    606: `345`,
    607: `345`,
    608: `346`,
    609: `346`,
    61: `21`,
    610: `347`,
    611: `348`,
    612: `348`,
    613: `349`,
    614: `349`,
    615: `349`,
    616: `349`,
    617: `349`,
    618: `349`,
    619: `350`,
    62: `21`,
    620: `350`,
    621: `351`,
    622: `352`,
    623: `353`,
    624: `353`,
    625: `354`,
    626: `355`,
    627: `355`,
    628: `356`,
    629: `357`,
    63: `21`,
    630: `358`,
    631: `358`,
    632: `359`,
    633: `360`,
    634: `361`,
    635: `361`,
    636: `362`,
    637: `363`,
    638: `364`,
    639: `364`,
    64: `21`,
    640: `365`,
    641: `366`,
    642: `367`,
    643: `369`,
    644: `369`,
    645: `370`,
    646: `370`,
    647: `370`,
    648: `371`,
    649: `371`,
    65: `21`,
    650: `372`,
    651: `372`,
    652: `372`,
    653: `373`,
    654: `375`,
    655: `375`,
    656: `376`,
    657: `376`,
    658: `377`,
    659: `377`,
    66: `21`,
    660: `377`,
    661: `379`,
    662: `379`,
    663: `380`,
    664: `380`,
    665: `381`,
    666: `382`,
    667: `382`,
    668: `383`,
    669: `384`,
    67: `21`,
    670: `385`,
    671: `385`,
    672: `386`,
    673: `387`,
    674: `388`,
    675: `388`,
    676: `389`,
    677: `390`,
    678: `391`,
    679: `391`,
    68: `21`,
    680: `392`,
    681: `393`,
    682: `394`,
    683: `395`,
    684: `395`,
    685: `397`,
    686: `397`,
    687: `398`,
    688: `398`,
    689: `399`,
    69: `21`,
    690: `400`,
    691: `400`,
    692: `401`,
    693: `401`,
    694: `401`,
    695: `402`,
    696: `403`,
    697: `404`,
    698: `405`,
    699: `405`,
    7: `2`,
    70: `21`,
    700: `405`,
    701: `406`,
    702: `407`,
    703: `408`,
    704: `408`,
    705: `409`,
    706: `410`,
    707: `410`,
    708: `411`,
    709: `412`,
    71: `21`,
    710: `413`,
    711: `414`,
    712: `414`,
    713: `415`,
    714: `416`,
    715: `417`,
    716: `419`,
    717: `419`,
    718: `419`,
    719: `420`,
    72: `21`,
    720: `420`,
    721: `420`,
    722: `422`,
    723: `423`,
    724: `423`,
    725: `424`,
    726: `425`,
    727: `427`,
    728: `428`,
    729: `428`,
    73: `21`,
    730: `428`,
    731: `429`,
    732: `429`,
    733: `430`,
    734: `431`,
    735: `431`,
    736: `431`,
    737: `432`,
    738: `432`,
    739: `433`,
    74: `21`,
    740: `434`,
    741: `434`,
    742: `435`,
    743: `436`,
    744: `436`,
    745: `437`,
    746: `438`,
    747: `438`,
    748: `439`,
    749: `440`,
    75: `21`,
    750: `440`,
    751: `441`,
    752: `442`,
    753: `442`,
    754: `443`,
    755: `444`,
    756: `444`,
    757: `445`,
    758: `445`,
    759: `446`,
    76: `21`,
    760: `447`,
    761: `447`,
    762: `448`,
    763: `448`,
    764: `449`,
    765: `450`,
    766: `450`,
    767: `451`,
    768: `451`,
    769: `451`,
    77: `21`,
    770: `451`,
    771: `451`,
    772: `451`,
    773: `452`,
    774: `452`,
    775: `453`,
    776: `454`,
    777: `455`,
    778: `457`,
    779: `457`,
    78: `21`,
    780: `458`,
    781: `458`,
    782: `458`,
    783: `459`,
    784: `459`,
    785: `460`,
    786: `460`,
    787: `460`,
    788: `463`,
    789: `463`,
    79: `21`,
    790: `464`,
    791: `464`,
    792: `465`,
    793: `466`,
    794: `469`,
    795: `470`,
    796: `470`,
    797: `471`,
    798: `472`,
    799: `473`,
    8: `2`,
    80: `21`,
    800: `474`,
    801: `474`,
    802: `475`,
    803: `475`,
    804: `476`,
    805: `477`,
    806: `477`,
    807: `478`,
    808: `479`,
    809: `479`,
    81: `22`,
    810: `480`,
    811: `481`,
    812: `481`,
    813: `482`,
    814: `483`,
    815: `484`,
    816: `484`,
    817: `485`,
    818: `486`,
    819: `487`,
    82: `22`,
    820: `487`,
    821: `488`,
    822: `488`,
    823: `489`,
    824: `489`,
    825: `490`,
    826: `490`,
    827: `492`,
    828: `492`,
    829: `493`,
    83: `22`,
    830: `493`,
    831: `493`,
    832: `493`,
    833: `493`,
    834: `493`,
    835: `494`,
    836: `494`,
    837: `495`,
    838: `495`,
    839: `497`,
    84: `23`,
    840: `498`,
    841: `498`,
    842: `499`,
    843: `499`,
    844: `500`,
    845: `500`,
    846: `501`,
    847: `502`,
    848: `502`,
    849: `503`,
    85: `23`,
    850: `503`,
    851: `504`,
    852: `505`,
    853: `505`,
    854: `506`,
    855: `507`,
    856: `507`,
    857: `508`,
    858: `509`,
    859: `510`,
    86: `23`,
    860: `510`,
    861: `511`,
    862: `511`,
    863: `512`,
    864: `513`,
    865: `513`,
    866: `514`,
    867: `514`,
    868: `515`,
    869: `516`,
    87: `23`,
    870: `516`,
    871: `517`,
    872: `520`,
    873: `520`,
    874: `521`,
    875: `522`,
    876: `522`,
    877: `523`,
    878: `524`,
    879: `524`,
    88: `23`,
    880: `525`,
    881: `526`,
    882: `527`,
    883: `528`,
    884: `528`,
    885: `528`,
    886: `529`,
    887: `529`,
    888: `529`,
    889: `530`,
    89: `23`,
    890: `531`,
    891: `531`,
    892: `532`,
    893: `532`,
    894: `532`,
    895: `532`,
    896: `532`,
    897: `532`,
    898: `532`,
    899: `532`,
    9: `2`,
    90: `23`,
    900: `532`,
    901: `532`,
    902: `533`,
    903: `533`,
    904: `534`,
    905: `535`,
    906: `536`,
    907: `536`,
    908: `537`,
    909: `537`,
    91: `23`,
    910: `538`,
    911: `539`,
    912: `539`,
    913: `540`,
    914: `541`,
    915: `542`,
    916: `543`,
    917: `547`,
    918: `547`,
    919: `548`,
    92: `23`,
    920: `548`,
    921: `549`,
    922: `550`,
    923: `550`,
    924: `551`,
    925: `552`,
    926: `553`,
    927: `553`,
    928: `554`,
    929: `555`,
    93: `23`,
    930: `556`,
    931: `556`,
    932: `557`,
    933: `558`,
    934: `559`,
    935: `560`,
    936: `561`,
    937: `562`,
    938: `563`,
    939: `563`,
    94: `23`,
    940: `564`,
    941: `564`,
    942: `564`,
    943: `566`,
    944: `566`,
    945: `566`,
    946: `567`,
    947: `567`,
    948: `568`,
    949: `568`,
    95: `23`,
    950: `568`,
    951: `569`,
    952: `569`,
    953: `569`,
    954: `570`,
    955: `570`,
    956: `571`,
    957: `571`,
    958: `571`,
    959: `573`,
    96: `23`,
    960: `573`,
    961: `573`,
    962: `574`,
    963: `574`,
    964: `574`,
    965: `575`,
    966: `575`,
    967: `576`,
    968: `576`,
    969: `576`,
    97: `23`,
    970: `578`,
    971: `578`,
    972: `578`,
    973: `579`,
    974: `579`,
    975: `579`,
    976: `580`,
    977: `580`,
    978: `581`,
    979: `581`,
    98: `25`,
    980: `581`,
    981: `583`,
    982: `584`,
    983: `584`,
    984: `585`,
    985: `586`,
    986: `587`,
    987: `587`,
    988: `588`,
    989: `588`,
    99: `28`,
    990: `589`,
    991: `590`,
    992: `591`,
    993: `592`,
    994: `592`,
    995: `593`,
    996: `594`,
    997: `595`,
    998: `596`,
    999: `596`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/limitOrder.rsh:56:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/limitOrder.rsh:87:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T6","name":"v2820","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_1885","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_1885","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v2320","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2381","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2592","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v2608","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v2677","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Cancel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v2814","type":"address"},{"internalType":"bool","name":"v2815","type":"bool"},{"internalType":"uint256","name":"v2816","type":"uint256"},{"internalType":"uint256","name":"v2817","type":"uint256"}],"name":"SwapViaPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v2823","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_1885","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_1885","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2826","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"opts","outputs":[{"components":[{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620021e438819003601f8101601f191683016001600160401b038111848210176200049e578392829160405283398101039061018082126200050c576040519160e08301906001600160401b038211848310176200049e5760c09160405282518452601f1901126200050c576101606200012991604051620000838162000511565b62000091602083016200052d565b8152620000a1604083016200053b565b60208201526060820151604082015260808201516060820152620000c860a083016200053b565b6080820152620000db60c083016200053b565b60a08201526020850152620000f360e082016200052d565b60408501526200010761010082016200053b565b6060850152610120810151608085015261014081015160a0850152016200053b565b60c082015243600355604051608081016001600160401b038111828210176200049e5760405260008152600060208201526000604082015260606200016d62000550565b91015260ff60045416620004f3577f32bd43f4674b2c453c2d29740f29b8f6de7d63718a9165a471267ee1fe50006e6101a060405133815283516020820152620001c06020850151604083019062000593565b6040840151151561010082015260608401516001600160a01b03908116610120830152608085015161014083015260a085015161016083015260c085015116610180820152a180518015908115620004e6575b5015620004cd5734620004b457604051906200022f8262000511565b600082526200023d62000550565b6020830152600060408301526000606083015260006080830152600060a08301523382526020810151602083015260018060a01b0360608201511660408301526080810151606083015260a0810151608083015260c060018060a01b039101511660a082015260016000554360015560405190336020830152620002ca6020820151604084019062000593565b60408101516001600160a01b039081166101008401526060820151610120840152608082015161014084015260a0909101511661016080830191909152815261018081018181106001600160401b038211176200049e5760405280516001600160401b0381116200049e57600254600181811c9116801562000493575b60208210146200047d57601f811162000413575b50602091601f8211600114620003a9579181926000926200039d575b50508160011b916000199060031b1c1916176002555b604051611c0b9081620005d98239f35b01519050388062000377565b601f19821692600260005260206000209160005b858110620003fa57508360019510620003e0575b505050811b016002556200038d565b015160001960f88460031b161c19169055388080620003d1565b91926020600181928685015181550194019201620003bd565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000472575b601f0160051c01905b8181106200046557506200035b565b6000815560010162000456565b90915081906200044d565b634e487b7160e01b600052602260045260246000fd5b90607f169062000347565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000213565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b60c081019081106001600160401b038211176200049e57604052565b519081151582036200050c57565b51906001600160a01b03821682036200050c57565b6040519060c082016001600160401b038111838210176200049e576040528160a06000918281528260208201528260408201528260608201528260808201520152565b60a09080511515835281600180821b0391826020820151166020860152604081015160408601526060810151606086015282608082015116608086015201511691015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081630a47debc146100bb575080631e93b0f1146100b25780634aa8e773146100a9578063573b8510146100a05780635e43ae8e1461009757806382b7c09b1461008e57806383230757146100855763ab53f2c60361000e57610080610701565b61000e565b506100806106e2565b5061008061062b565b50610080610523565b506100806101ef565b50610080610197565b50610080610173565b3461011f578060031936011261011f57606060c0916100d8610942565b506100ee60026100e6610992565b925414611420565b60206101096100fb610897565b828082518301019101610ba8565b0151918291015261011d604051809261012e565bf35b80fd5b6001600160a01b031690565b60a09080511515835281600180821b03918260208201511660208601526040810151604086015260608101516060860152826080820151166080860152015116910152565b5034610192576000366003190112610192576020600354604051908152f35b600080fd5b506000366003190112610192576020806101af610992565b6101e3816101bb610a09565b84810190600082515251151585825101526101d4610a09565b90600082525185820152610ddc565b01511515604051908152f35b5060208060031936011261019257610205610992565b50604090815190610215826107c4565b60043582526102226118c2565b90610231600160005414611440565b6102ac61024d61023f610897565b83808251830101910161193a565b9361026961026461026060045460ff1690565b1590565b611460565b8551338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a15180159081156104fc575b50611480565b6060830191825134146102be906114a0565b835133906001600160a01b03906102d490610122565b16146102df906114c0565b8051600090819052815183015281810180516001905292858501805161030490610122565b878651019061031291611894565b805161031d90610122565b306103279161182e565b9260c081019384524760a08201908152610349600160ff196004541617600455565b875161035490610122565b94825197519785519860808b019788518d519b8c938c85019563014d07ad60e21b8752306024870195610386966119d2565b0398601f19998a8101825261039b9082610874565b60a08b01516103a990610122565b6103b290610122565b90515a9260008094938194f16103c6610ca0565b6103cf916116c0565b506103df60ff1960045416600455565b3084516103eb90610122565b906103f59161182e565b905180820360e085015261040991146114e0565b47905190036060820190815152519060800190808252885161043f81928291909160208060408301948051845201511515910152565b037ff855553a41551d1e3a7008e676ad7a4cfcd3e28d1640920780456bc2d919175091a151511561046f90611500565b83610478611a1c565b96805161048490610122565b61048e9089611894565b0151848701525161049e90610122565b6104aa90868801611894565b5160608501525160808401526104c06002600055565b4360015583519283918201906104d591611a6c565b0390810182526104e59082610874565b6104ee90611afb565b5160008152602090f35b0390f35b905060015414386102a6565b6001600160a01b0381160361019257565b8015150361019257565b506080366003190112610192576104f860043561053f81610508565b61061a60243561054e81610519565b610556610992565b61055e6109c1565b9360018060a01b031684526020840191151582526106138160409586948582016044358152606083019060643582526105dd6105d189519461059f866107ec565b6105a76109c1565b86526105cb6105c460208801986105bc6109e6565b8a5251610122565b8751611894565b51151590565b60208551019015159052565b518783510152516060825101526105f5825160019052565b518582510152610603610a09565b9060008252516020820152610ddc565b0151151590565b905190151581529081906020820190565b5060e036600319011261019257610640610992565b60409081519061064f826107ec565b600435825260c03660231901126101925782519161066c83610807565b602435600281101561019257835260443561068681610519565b60208401526080366063190112610192576104ee9284516106a681610822565b6064356106b281610508565b81526084356106c081610519565b602082015260a4358682015260c4356060820152858201526020820152610ddc565b5034610192576000366003190112610192576020600154604051908152f35b50346101925760008060031936011261011f57805461071e610897565b906040519283918252602090604082840152835191826040850152815b83811061075c57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161073b565b90600182811c921680156107a3575b602083101461078d57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610782565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176107df57604052565b6107e76107ad565b604052565b604081019081106001600160401b038211176107df57604052565b606081019081106001600160401b038211176107df57604052565b608081019081106001600160401b038211176107df57604052565b60c081019081106001600160401b038211176107df57604052565b6101a081019081106001600160401b038211176107df57604052565b601f909101601f19168101906001600160401b038211908210176107df57604052565b60405190600082600254916108ab83610773565b80835260019380851690811561092157506001146108d3575b506108d192500383610874565b565b60026000908152600080516020611bdf83398151915294602093509091905b8183106109095750506108d19350820101386108c4565b855488840185015294850194879450918301916108f2565b90506108d194506020925060ff191682840152151560051b820101386108c4565b6040519060c082016001600160401b03811183821017610985575b6040528160a06000918281528260208201528260408201528260608201528260808201520152565b61098d6107ad565b61095d565b6040519061099f82610822565b8160008152600060208201526000604082015260606109bc610942565b910152565b604051906109ce82610822565b60006060838281528260208201528260408201520152565b604051906109f382610807565b81600081526000602082015260406109bc6109c1565b60405190610a16826107ec565b816000815260206109bc6109e6565b60021115610a2f57565b634e487b7160e01b600052602160045260246000fd5b60405190610a52826107c4565b60008252565b60405190610a65826107ec565b60006020838281520152565b60405190610a7e82610807565b8160008152604051610a8f816107c4565b60008152602082015260406109bc610a58565b60405190610aaf82610858565b81610ab86109c1565b8152610ac2610a45565b6020820152610acf610a71565b6040820152610adc610a71565b6060820152610180600091826080820152610af5610a45565b60a0820152610b02610a71565b60c0820152610b0f610a71565b60e0820152826101008201528261012082015282610140820152826101608201520152565b91908260c091031261019257604051610b4c8161083d565b60a08082948051610b5c81610519565b84526020810151610b6c81610508565b602085015260408101516040850152606081015160608501526080810151610b9381610508565b6080850152015191610ba483610508565b0152565b6101408183031261019257604051916101209190610bf09060a085016001600160401b03811186821017610c1d575b6040528251610be581610508565b855260208301610b34565b602084015260e0810151610c0381610508565b604084015261010081015160608401520151608082015290565b610c256107ad565b610bd7565b90606060e0919493946040602061010086019760018060a01b03809416875280518288015201518051610c5c81610a25565b82870152602081015115158487015201519081511660808501526020810151151560a0850152604081015160c08501520151910152565b51610c9d81610a25565b90565b3d15610ce8573d906001600160401b038211610cdb575b60405191610ccf601f8201601f191660200184610874565b82523d6000602084013e565b610ce36107ad565b610cb7565b606090565b9081604091031261019257602060405191610d07836107ec565b805183520151602082015290565b9190916060602060406080840195805185528281015151838601520151805160408501520151910152565b506040513d6000823e3d90fd5b818110610d58575050565b60008155600101610d4d565b610d6f600254610773565b80610d775750565b601f8111600114610d8a57506000600255565b6002600052610dcf90601f0160051c600080516020611bdf833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610d4d565b6000602081208160025555565b610de4610aa2565b916000928391610df76002845414611520565b610dff610897565b93610e14602095868082518301019101610ba8565b92610e2c610e2761026060045460ff1690565b611540565b856040927f777de14fc85a1499bf334c9d8f8617049165fc617a06b7359e02f68714658fa1845180610e5f843383610c2a565b0390a1610e77815180159081156113f1575b50611560565b01610e828151610c93565b610e8b81610a25565b610f38575050918380958194937f0cafaff400a53905529c7cd5b71d4e4f63ce49ecc14c9fbe580681ea8492ff3d8395610ec53415611680565b610ee1610eda610ed58851610122565b610122565b33146116a0565b5160008152602090a101526060610efb610ed58351610122565b91015190828215610f2f575bf115610f22575b8055610f1a6000600155565b6108d1610d64565b610f2a610d40565b610f0e565b506108fc610f07565b92919450946001610f498451610c93565b610f5281610a25565b14610f61575b50505050505050565b86958587945101518152610f753415611580565b8386808351015194610f8e6060890196875110156115a0565b8151600081527f9360d93391d4296406973b996c5dde73f73de6d16ab6636289c63cf162acf70d90602090a101528051820151156111fe57608085019586518383015152808601928351610fe190610122565b30610feb9161182e565b61014084019081524790878085875101938451900393610120880194855261101b600160ff196004541617600455565b518c51875163c8867ae960e01b88820190815260248201939093526044808201929092529081529061104e606483610874565b88519188835161105d90610122565b61106690610122565b9301519051925af190611077610ca0565b918261108291611720565b5061109260ff1960045416600455565b30875161109e90610122565b906110a89161182e565b90516110b3916113fd565b91848601928484510151524790519003825152828082518301019101906110d991610ced565b838251015251606084019080825283516110f4819282610d15565b037fd09cc16afbbfb81b9c08b8cda5156898eb9187921f69d9377a26a337850e431791a18051511561112590611620565b8181510151518951111561113890611640565b510151518751611147916113fd565b936080830194808652835160600151111561116190611660565b519151015161116f916113fd565b91839084808515996111b6976111af976111a9966111c89d6111f5575b3390f1156111e8575b61119f8351610122565b90519033906117b0565b51610122565b9151610122565b9151916001600160a01b0316906117b0565b80556111d46000600155565b6111dc610d64565b38808080808080610f58565b6111f0610d40565b611195565b506108fc61118c565b6080850195865160a08301515280860192835161121a90610122565b306112249161182e565b610180840190815247908780858751019384519003936101608801948552611254600160ff196004541617600455565b518c51875163dc8d714f60e01b888201908152602482019390935260448082019290925290815290611287606483610874565b88519188835161129690610122565b61129f90610122565b9301519051925af1906112b0610ca0565b91826112bb916116f0565b506112cb60ff1960045416600455565b3087516112d790610122565b906112e19161182e565b90516112ec916113fd565b9160c086019284845101515247905190038251528280825183010191019061131391610ced565b83825101525160e0840190808252835161132e819282610d15565b037f6878108c2ce7880d556bb6b8a2e03ee715eab10ea124d2de6e53a82962505dee91a18051511561135f906115c0565b81815101515189511115611372906115e0565b510151518751611381916113fd565b93610100830194808652835160600151111561139c90611600565b51915101516113aa916113fd565b91839084808515996111b6976111af976111a9966113d89d6111f5573390f1156111e85761119f8351610122565b80556113e46000600155565b6113ec610d64565b6111dc565b90506001541438610e71565b90810390811161140a5790565b634e487b7160e01b600052601160045260246000fd5b1561142757565b60405163100960cb60e01b815260076004820152602490fd5b1561144757565b60405163100960cb60e01b8152600b6004820152602490fd5b1561146757565b60405163100960cb60e01b8152600c6004820152602490fd5b1561148757565b60405163100960cb60e01b8152600d6004820152602490fd5b156114a757565b60405163100960cb60e01b8152600e6004820152602490fd5b156114c757565b60405163100960cb60e01b8152600f6004820152602490fd5b156114e757565b60405163100960cb60e01b815260106004820152602490fd5b1561150757565b60405163100960cb60e01b815260126004820152602490fd5b1561152757565b60405163100960cb60e01b815260136004820152602490fd5b1561154757565b60405163100960cb60e01b815260146004820152602490fd5b1561156757565b60405163100960cb60e01b815260156004820152602490fd5b1561158757565b60405163100960cb60e01b815260186004820152602490fd5b156115a757565b60405163100960cb60e01b815260196004820152602490fd5b156115c757565b60405163100960cb60e01b8152601f6004820152602490fd5b156115e757565b60405163100960cb60e01b815260206004820152602490fd5b1561160757565b60405163100960cb60e01b815260216004820152602490fd5b1561162757565b60405163100960cb60e01b8152601b6004820152602490fd5b1561164757565b60405163100960cb60e01b8152601c6004820152602490fd5b1561166757565b60405163100960cb60e01b8152601d6004820152602490fd5b1561168757565b60405163100960cb60e01b815260166004820152602490fd5b156116a757565b60405163100960cb60e01b815260176004820152602490fd5b156116c85790565b8051156116d757805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b156116f85790565b80511561170757805190602001fd5b60405163100960cb60e01b8152601e6004820152602490fd5b156117285790565b80511561173757805190602001fd5b60405163100960cb60e01b8152601a6004820152602490fd5b156117585790565b80511561176757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156117885790565b80511561179757805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152906117e882610822565b60009384809481945193165af1611807611800610ca0565b8092611750565b5060208180518101031261182a576020015161182281610519565b1561011f5750565b5080fd5b6040516370a0823160e01b602082019081526001600160a01b03938416602480840191909152825260009384939284919061186881610807565b5193165af161187f611878610ca0565b8092611780565b50602081805181010312610192576020015190565b6001600160a01b039091169052565b604051906118b082610807565b60006040838281528260208201520152565b6040519061010082016001600160401b0381118382101761192d575b604052600060e0836118ee6118a3565b81526118f86118a3565b602082015282604082015261190b610a58565b6060820152611918610a58565b60808201528260a08201528260c08201520152565b6119356107ad565b6118de565b610160818303126101925761014090611964604051936119598561083d565b8251610be581610508565b602084015260e081015161197781610508565b604084015261010081015160608401526101208101516080840152015161199d81610508565b60a082015290565b60409080516119b381610a25565b83526020818101511515908401528101516001600160a01b0316910152565b6001600160a01b0391821681529116602082015261014081019594936101209391929091611a1291611a089060408601906119a5565b60a08401906119a5565b6101008201520152565b6040519060a082016001600160401b03811183821017611a5f575b6040526000608083828152611a4a610942565b60208201528260408201528260608201520152565b611a676107ad565b611a37565b919091610120608061014083019460018060a01b03808251168552611a996020830151602087019061012e565b60408201511660e085015260608101516101008501520151910152565b90601f8211611ac3575050565b6108d19160026000526020600020906020601f840160051c83019310611af1575b601f0160051c0190610d4d565b9091508190611ae4565b80519091906001600160401b038111611bd1575b611b2381611b1e600254610773565b611ab6565b602080601f8311600114611b5f5750819293600092611b54575b50508160011b916000199060031b1c191617600255565b015190503880611b3d565b6002600052601f19831694909190600080516020611bdf833981519152926000905b878210611bb9575050836001959610611ba0575b505050811b01600255565b015160001960f88460031b161c19169055388080611b95565b80600185968294968601518155019501930190611b81565b611bd96107ad565b611b0f56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 8676,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './limitOrder.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './limitOrder.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './limitOrder.rsh:125:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './limitOrder.rsh:125:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './limitOrder.rsh:125:11:after expr stmt semicolon',
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
