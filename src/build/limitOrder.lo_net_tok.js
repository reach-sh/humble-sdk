// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

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
      const [v2170, v2171, v2173, v2174, v2175, v2176] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2170, v2171, v2173, v2174, v2175] = svs;
      return (await ((async () => {
        
        
        return v2171;}))(...args));
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
    Cancel0_1775: ctc6,
    SwapViaPool0_1775: ctc8
    });
  
  
  const [v2170, v2171, v2173, v2174, v2175] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc2, ctc3, ctc3]);
  const v2244 = ctc.selfAddress();
  const v2246 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_1775" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v2247 = stdlib.addressEq(v2244, v2170);
  stdlib.assert(v2247, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_1775" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v2252 = ['Cancel0_1775', v2246];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2170, v2171, v2173, v2174, v2175, v2252],
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
      
      
      const {data: [v2257], secs: v2259, time: v2258, didSend: v1924, from: v2256 } = txn1;
      
      switch (v2257[0]) {
        case 'Cancel0_1775': {
          const v2260 = v2257[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v2269 = null;
          const v2270 = await txn1.getOutput('Cancel', 'v2269', ctc1, v2269);
          
          sim_r.txns.push({
            kind: 'from',
            to: v2170,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v2173
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_1775': {
          const v2444 = v2257[1];
          
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
  const {data: [v2257], secs: v2259, time: v2258, didSend: v1924, from: v2256 } = txn1;
  switch (v2257[0]) {
    case 'Cancel0_1775': {
      const v2260 = v2257[1];
      undefined /* setApiDetails */;
      ;
      const v2267 = stdlib.addressEq(v2256, v2170);
      stdlib.assert(v2267, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v2269 = null;
      const v2270 = await txn1.getOutput('Cancel', 'v2269', ctc1, v2269);
      if (v1924) {
        stdlib.protect(ctc1, await interact.out(v2260, v2270), {
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
    case 'SwapViaPool0_1775': {
      const v2444 = v2257[1];
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
    Cancel0_1775: ctc6,
    SwapViaPool0_1775: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc10, ctc11]);
  const ctc13 = stdlib.T_Address;
  
  
  const v2154 = stdlib.protect(ctc4, interact.opts, 'for D\'s interact field opts');
  const v2155 = v2154.tokA;
  const v2156 = v2154.tokB;
  const v2157 = v2154.amtA;
  const v2158 = v2154.amtB;
  const v2159 = v2154.ctcAnnouncer;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2154, v2155, v2156, v2157, v2158, v2159],
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
      
      
      const {data: [v2171, v2172, v2173, v2174, v2175, v2176], secs: v2178, time: v2177, didSend: v1681, from: v2170 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2173
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
  const {data: [v2171, v2172, v2173, v2174, v2175, v2176], secs: v2178, time: v2177, didSend: v1681, from: v2170 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v2170, v2171, v2173, v2174, v2175, v2176],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2177,
    onlyIf: true,
    out_tys: [],
    pay: [v2174, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v2189, time: v2188, didSend: v1743, from: v2187 } = txn2;
      
      sim_r.txns.push({
        amt: v2174,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v2200 = await ctc.getContractInfo();
      const v2201 = ['None', null];
      const v2202 = ['Some', v2173];
      const v2205 = [];
      const v2208 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2176,
          remote: ({
            accs: [v2170],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2205 /* simTokensRecv */, undefined /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2208', ctc5, v2208);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2189, time: v2188, didSend: v1743, from: v2187 } = txn2;
  ;
  const v2193 = stdlib.addressEq(v2170, v2187);
  stdlib.assert(v2193, {
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
  
  const v2200 = await ctc.getContractInfo();
  const v2201 = ['None', null];
  const v2202 = ['Some', v2173];
  const v2205 = [];
  const v2208 = undefined /* Remote */;
  const v2209 = await txn2.getOutput('internal', 'v2208', ctc5, v2208);
  const v2211 = v2209[stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v2217 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2211);
  stdlib.assert(v2217, {
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
  const {data: [v2257], secs: v2259, time: v2258, didSend: v1924, from: v2256 } = txn3;
  switch (v2257[0]) {
    case 'Cancel0_1775': {
      const v2260 = v2257[1];
      undefined /* setApiDetails */;
      ;
      const v2267 = stdlib.addressEq(v2256, v2170);
      stdlib.assert(v2267, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v2269 = null;
      await txn3.getOutput('Cancel', 'v2269', ctc0, v2269);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_1775': {
      const v2444 = v2257[1];
      undefined /* setApiDetails */;
      ;
      const v2470 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v2471 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v2472 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v2473 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v2474 = stdlib.le(v2472, v2174);
      stdlib.assert(v2474, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v2480 = null;
      await txn3.getOutput('SwapViaPool', 'v2480', ctc0, v2480);
      if (v2471) {
        const v2495 = [v2175];
        const v2496 = undefined /* Remote */;
        const v2497 = await txn3.getOutput('internal', 'v2496', ctc12, v2496);
        const v2499 = v2497[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2500 = v2497[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2502 = v2500[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2521 = stdlib.eq(v2499, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2521, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v2523 = stdlib.ge(v2502, v2175);
        stdlib.assert(v2523, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v2524 = stdlib.safeSub(v2174, v2472);
        const v2525 = stdlib.safeSub(v2502, v2175);
        const v2526 = stdlib.ge(v2525, v2473);
        stdlib.assert(v2526, {
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
        const v2564 = [v2175];
        const v2565 = undefined /* Remote */;
        const v2566 = await txn3.getOutput('internal', 'v2565', ctc12, v2565);
        const v2568 = v2566[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2569 = v2566[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2571 = v2569[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2590 = stdlib.eq(v2568, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2590, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v2592 = stdlib.ge(v2571, v2175);
        stdlib.assert(v2592, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v2593 = stdlib.safeSub(v2174, v2472);
        const v2594 = stdlib.safeSub(v2571, v2175);
        const v2595 = stdlib.ge(v2594, v2473);
        stdlib.assert(v2595, {
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
    Cancel0_1775: ctc8,
    SwapViaPool0_1775: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10, ctc11]);
  
  
  const [v2170, v2171, v2173, v2174, v2175] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc2, ctc3, ctc3]);
  const v2220 = stdlib.protect(ctc7, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_1775" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v2223 = v2220[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2229 = stdlib.le(v2223, v2174);
  stdlib.assert(v2229, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_1775" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v2242 = ['SwapViaPool0_1775', v2220];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2170, v2171, v2173, v2174, v2175, v2242],
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
      
      
      const {data: [v2257], secs: v2259, time: v2258, didSend: v1924, from: v2256 } = txn1;
      
      switch (v2257[0]) {
        case 'Cancel0_1775': {
          const v2260 = v2257[1];
          
          break;
          }
        case 'SwapViaPool0_1775': {
          const v2444 = v2257[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v2470 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
          const v2471 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
          const v2472 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
          const v2480 = null;
          const v2481 = await txn1.getOutput('SwapViaPool', 'v2480', ctc1, v2480);
          
          if (v2471) {
            const v2495 = [v2175];
            const v2496 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v2470,
                remote: ({
                  accs: [],
                  apps: [v2470],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v2173]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2495 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v2497 = await txn1.getOutput('internal', 'v2496', ctc12, v2496);
            const v2500 = v2497[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v2502 = v2500[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v2524 = stdlib.safeSub(v2174, v2472);
            const v2525 = stdlib.safeSub(v2502, v2175);
            sim_r.txns.push({
              kind: 'from',
              to: v2256,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2256,
              tok: v2173
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2170,
              tok: v2173
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2173
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v2564 = [v2175];
            const v2565 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v2470,
                remote: ({
                  accs: [],
                  apps: [v2470],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v2173]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2564 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v2566 = await txn1.getOutput('internal', 'v2565', ctc12, v2565);
            const v2569 = v2566[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v2571 = v2569[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v2593 = stdlib.safeSub(v2174, v2472);
            const v2594 = stdlib.safeSub(v2571, v2175);
            sim_r.txns.push({
              kind: 'from',
              to: v2256,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2256,
              tok: v2173
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2170,
              tok: v2173
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2173
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
  const {data: [v2257], secs: v2259, time: v2258, didSend: v1924, from: v2256 } = txn1;
  switch (v2257[0]) {
    case 'Cancel0_1775': {
      const v2260 = v2257[1];
      return;
      break;
      }
    case 'SwapViaPool0_1775': {
      const v2444 = v2257[1];
      undefined /* setApiDetails */;
      ;
      const v2470 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v2471 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v2472 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v2473 = v2444[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v2474 = stdlib.le(v2472, v2174);
      stdlib.assert(v2474, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v2480 = null;
      const v2481 = await txn1.getOutput('SwapViaPool', 'v2480', ctc1, v2480);
      if (v1924) {
        stdlib.protect(ctc1, await interact.out(v2444, v2481), {
          at: './limitOrder.rsh:66:11:application',
          fs: ['at ./limitOrder.rsh:66:11:application call to [unknown function] (defined at: ./limitOrder.rsh:66:11:function exp)', 'at ./limitOrder.rsh:69:10:application call to "k" (defined at: ./limitOrder.rsh:68:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v2471) {
        const v2495 = [v2175];
        const v2496 = undefined /* Remote */;
        const v2497 = await txn1.getOutput('internal', 'v2496', ctc12, v2496);
        const v2499 = v2497[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2500 = v2497[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2502 = v2500[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2521 = stdlib.eq(v2499, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2521, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v2523 = stdlib.ge(v2502, v2175);
        stdlib.assert(v2523, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v2524 = stdlib.safeSub(v2174, v2472);
        const v2525 = stdlib.safeSub(v2502, v2175);
        const v2526 = stdlib.ge(v2525, v2473);
        stdlib.assert(v2526, {
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
        const v2564 = [v2175];
        const v2565 = undefined /* Remote */;
        const v2566 = await txn1.getOutput('internal', 'v2565', ctc12, v2565);
        const v2568 = v2566[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2569 = v2566[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v2571 = v2569[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v2590 = stdlib.eq(v2568, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2590, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v2592 = stdlib.ge(v2571, v2175);
        stdlib.assert(v2592, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v2593 = stdlib.safeSub(v2174, v2472);
        const v2594 = stdlib.safeSub(v2571, v2175);
        const v2595 = stdlib.ge(v2594, v2473);
        stdlib.assert(v2595, {
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
  appApproval: `ByANAAEEAggG4ICxsALhjLn+DkBIUAmgjQYmBAABAAVhcHBJRAEBIjUAMRhBBREoZEkiWzUBIQRbNQI2GgAXSUEAWyI1BCM1BkkhBgxAADlJIQcMQAAcIQcSRDYaATYaAlA2GgNQNhoEUDX/KzT/UEIARyEGEkQ0ASUSRClkSTUDVyAgNQdCBK+Buo/tZRJEKDX/KTT/UIEZr1BCABw2GgIXNQQ2GgM2GgEXSSMMQAOqSSUMQAK+JRJEJTQBEkQ0BEkiEkw0AhIRRClkSTUDSUpXACA1/yEIWzX+IQlbNf0hCls1/Ek1BTX7gATBZMZfNPtQsDT7IlVAAD4xADT/EkSACAAAAAAAAAjdsCg1B7EisgE0/bIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IDtzT7VwEZNfo0+iJbNfk0+iELWzX4NPqBEVs19zT4NP0ORIAIAAAAAAAACbCwKDUHNPpXCAEXQQECKjT5FlADNfUyCng19DIKYDT0CTT4CRYyCjT+cABIFlA187EisgE0+LIII7IQNPWyB7YisgEhBbIQNPmyGIAEoOj1mbIaNPgWsho0/BayGjT+sjA0+bIyszIKYDT0CTTzIlsJFjIKNP5wAEg08yEEWwkWULcBPlcEAFA19oAIAAAAAAAACcA09lCwNPZJNfUhBFs19DT1IlsiEkQ09DT8D0Q09DT8CUk18zT3D0SxIrIBNP00+AmyCCOyEDEAsgezsSKyATTzshIkshAxALIUNP6yEbOxIrIBNPyyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgJ9KjT5FlADNfUyCng19DIKYDT0CTT4CRYyCjT+cABIFlA187EisgE0+LIII7IQNPWyB7YisgEhBbIQNPmyGIAEfKR7uLIaNPgWsho0/BayGjT+sjA0+bIyszIKYDT0CTTzIlsJFjIKNP5wAEg08yEEWwkWULcBPlcEAFA19oAIAAAAAAAACgU09lCwNPZJNfUhBFs19DT1IlsiEkQ09DT8D0Q09DT8CUk18zT3D0SxIrIBNP00+AmyCCOyEDEAsgezsSKyATTzshIkshAxALIUNP6yEbOxIrIBNPyyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgF7SCM0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/VyAgNf4hCFs1/SEJWzX8IQpbNfuABJqLkXSwNPyIAao0/zEAEkQqNANXWAhQAzX5Mgp4NfgyCmA0+AkWNfexIrIBIQWyEDQDgVhbshiABPqZi0yyGjT/SbIcshoxGBayGiELr7IaKzT9FlCyGjT8FrIaNPsWshqzMgpgNPgJNPcXCRa3AD5XBABQNfqACAAAAAAAAAigNPpQsDT6NfkiNPkiWxJENP80/lA0/RZQNPwWUDT7FlApSwFXAFhnSCU1ATIGNQJCALFIIQyIAPwiNAESRDQESSISTDQCEhFESTUFSUpKVwAgNf9IKDX+gSBbNf2BKFs1/IEwWzX7gThbNfqABFtPXxw0/1A0/lA0/RZQNPwWUDT7FlA0+hZQsCEMiACnsSKyASKyEiSyEDIKshQ0/bIRszEANP9QNP0WUDT8FlA0+xZQNPoWUClLAVcAYGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "components": [
                  {
                    "internalType": "bool",
                    "name": "tokA",
                    "type": "bool"
                  },
                  {
                    "internalType": "address payable",
                    "name": "tokB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amtA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amtB",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "ctcAnnouncer",
                    "type": "address"
                  }
                ],
                "internalType": "struct T1",
                "name": "v2171",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2172",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2173",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2174",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2175",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2176",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                    "internalType": "bool",
                    "name": "tokA",
                    "type": "bool"
                  },
                  {
                    "internalType": "address payable",
                    "name": "tokB",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amtA",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "amtB",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "ctcAnnouncer",
                    "type": "address"
                  }
                ],
                "internalType": "struct T1",
                "name": "v2171",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2172",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2173",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2174",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2175",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2176",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Cancel0_1775",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem1",
                        "type": "bool"
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
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_SwapViaPool0_1775",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v2257",
                "type": "tuple"
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
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2208",
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
    "name": "_reach_oe_v2269",
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
    "name": "_reach_oe_v2480",
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
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "elem1",
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
            "internalType": "struct T12",
            "name": "elem2",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2496",
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
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "elem1",
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
            "internalType": "struct T12",
            "name": "elem2",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2565",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Cancel",
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
        "internalType": "bool",
        "name": "_a1",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a3",
        "type": "uint256"
      }
    ],
    "name": "SwapViaPool",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
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
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Cancel0_1775",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem1",
                        "type": "bool"
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
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_SwapViaPool0_1775",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v2257",
                "type": "tuple"
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
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "opts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "tokA",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "tokB",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amtA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amtB",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "ctcAnnouncer",
            "type": "address"
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200231438038062002314833981016040819052620000269162000309565b60008055436003556040517fb68250fe1f1e7269fc4b97e00437239dc934b8bb332fc16400d7ff1f32d448f99062000062903390849062000412565b60405180910390a1620000783415600862000172565b620000da6040805160c0810182526000808252825160a081018452818152602081810183905293810182905260608101829052608081019190915290918201908152600060208201819052604082018190526060820181905260809091015290565b33815260208083018051518284015280516040908101516001600160a01b0390811682860152825160609081015190860152825160809081015190860152915160a0908101519092169184019190915260016000819055439055516200014391839101620004bf565b60405160208183030381529060405260029080519060200190620001699291906200019c565b50505062000593565b81620001985760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001aa9062000556565b90600052602060002090601f016020900481019282620001ce576000855562000219565b82601f10620001e957805160ff191683800117855562000219565b8280016001018555821562000219579182015b8281111562000219578251825591602001919060010190620001fc565b50620002279291506200022b565b5090565b5b808211156200022757600081556001016200022c565b604080519081016001600160401b03811182821017156200027357634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200027357634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200027357634e487b7160e01b600052604160045260246000fd5b80518015158114620002ec57600080fd5b919050565b80516001600160a01b0381168114620002ec57600080fd5b60008183036101608112156200031e57600080fd5b6200032862000242565b83518152601f1982019150610140808312156200034457600080fd5b6200034e62000279565b60a08412156200035d57600080fd5b62000367620002aa565b93506200037760208701620002db565b84526200038760408701620002f1565b60208501526060860151604085015260808601516060850152620003ae60a08701620002f1565b6080850152838152620003c460c08701620002db565b6020820152620003d760e08701620002f1565b604082015261010086015160608201526101208601516080820152620003ff828701620002f1565b60a0820152602083015250949350505050565b60006101808201905060018060a01b0380851683528351602084015260208401516200047b6040850182518051151582526020808201516001600160a01b0390811691840191909152604080830151908401526060808301519084015260809182015116910152565b6020810151151560e0850152604081015182166101008501526060810151610120850152608081015161014085015260a00151166101609092019190915292915050565b81516001600160a01b0390811682526020808401516101408401929162000521908501828051151582526020808201516001600160a01b0390811691840191909152604080830151908401526060808301519084015260809182015116910152565b506040840151811660c0840152606084015160e0840152608084015161010084015260a0909301519092166101209091015290565b600181811c908216806200056b57607f821691505b602082108114156200058d57634e487b7160e01b600052602260045260246000fd5b50919050565b611d7180620005a36000396000f3fe6080604052600436106100795760003560e01c80635e43ae8e1161004b5780635e43ae8e146100f7578063832307571461010a578063ab53f2c61461011f578063e0cd1a061461014257005b80630a47debc146100825780631e93b0f1146100ad5780632c10a159146100cc5780634aa8e773146100df57005b3661008057005b005b34801561008e57600080fd5b50610097610155565b6040516100a49190611618565b60405180910390f35b3480156100b957600080fd5b506003545b6040519081526020016100a4565b6100806100da366004611626565b61018f565b6100e76101bf565b60405190151581526020016100a4565b6100e7610105366004611661565b6101ce565b34801561011657600080fd5b506001546100be565b34801561012b57600080fd5b506101346101e5565b6040516100a49291906116d3565b61008061015036600461170d565b610282565b6040805160a081018252600080825260208201819052918101829052606081018290526080810182905290610189816102ae565b91505090565b60408051808201909152600080825260208201526101bb6101b53684900384018461181a565b82610459565b5050565b60006101c9610839565b905090565b60006101dc85858585610872565b95945050505050565b6000606060005460028080546101fa90611852565b80601f016020809104026020016040519081016040528092919081815260200182805461022690611852565b80156102735780601f1061024857610100808354040283529160200191610273565b820191906000526020600020905b81548152906001019060200180831161025657829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101bb6102a836849003840184611887565b826108ed565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052905460011415610392576000600280546102f190611852565b80601f016020809104026020016040519081016040528092919081815260200182805461031d90611852565b801561036a5780601f1061033f5761010080835404028352916020019161036a565b820191906000526020600020905b81548152906001019060200180831161034d57829003601f168201915b505050505080602001905181019061038291906119cb565b905061039060006007611082565b505b60026000541415610448576000600280546103ac90611852565b80601f01602080910402602001604051908101604052809291908181526020018280546103d890611852565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b505050505080602001905181019061043d9190611a74565b602001519392505050565b61045460006007611082565b919050565b610469600160005414600e611082565b815161048490158061047d57508251600154145b600f611082565b60008080556002805461049690611852565b80601f01602080910402602001604051908101604052809291908181526020018280546104c290611852565b801561050f5780601f106104e45761010080835404028352916020019161050f565b820191906000526020600020905b8154815290600101906020018083116104f257829003601f168201915b505050505080602001905181019061052791906119cb565b90506105316112ec565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610562929190611add565b60405180910390a161057b826060015134146009611082565b8151610593906001600160a01b03163314600a611082565b8051600090819052815160209081019190915281018051600190526040838101805192516001600160a01b039093169290910191909152516105dc906105d990306110a8565b90565b60c08201524760a08201528151815160208301516060850151608086015160405160009563014d07ad60e21b9561061e95919430949193909190602401611b67565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460a001516001600160a01b03166000846040516106749190611bb0565b60006040518083038185875af1925050503d80600081146106b1576040519150601f19603f3d011682016040523d82523d6000602084013e6106b6565b606091505b50915091506106c78282600c61116b565b506106e36106d98660400151306110a8565b8560c00151900390565b60e085018190526106f69015600b611082565b60a084015147036060850180519190915251608085018190526040517f237c0ef34182667400af21bd75474aa5af12aedad0825daf2d584d667e232c7d94506107429350909150611bcc565b60405180910390a160808101515161075c9015600d611082565b6107bc6040805160a0808201835260008083528351918201845280825260208281018290529382018190526060820181905260808201529091820190815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260808086015190840152600260005543600155905161080d91839101611be5565b604051602081830303815290604052600290805190602001906108319291906113a1565b505050505050565b6000610843611425565b60208181015151600090819052604080518082019091528181529182015261086b82826108ed565b5192915050565b600061087c611425565b6020818101805151600190528051516040908101516001600160a01b038a16905281515181015188151590840152815151810151810187905290515181015160600185905280518082019091526000808252918101919091526108df82826108ed565b602001519695505050505050565b6108fd600260005414601c611082565b815161091890158061091157508251600154145b601d611082565b60008080556002805461092a90611852565b80601f016020809104026020016040519081016040528092919081815260200182805461095690611852565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b50505050508060200190518101906109bb9190611a74565b90506109c5611482565b7fb6370803f5808d5248ae02f0b1012b90554877556c5a1a77bedc93d33c77a49b33856040516109f6929190611c33565b60405180910390a16000602085015151516001811115610a1857610a18611b06565b1415610ad257610a2a34156010611082565b8151610a42906001600160a01b031633146011611082565b604051600081527fd7dfd9fb4a62726fb0adad2fb5204d1eae74a67fafa8037e772386cac51ec3d39060200160405180910390a16000808452825160608401516040516001600160a01b039092169281156108fc029290818181858888f19350505050158015610ab6573d6000803e3d6000fd5b5060008080556001819055610acd9060029061153e565b61107c565b6001602085015151516001811115610aec57610aec611b06565b141561107c57602084015151604001518152610b0a34156012611082565b610b24826060015182600001516040015111156013611082565b604051600081527fd84b2bc78b433424f305411c68253012c1908b9fe913176a2780cc98fd90a4189060200160405180910390a160006020808501919091528151015115610e0a5760808201516020820151526040820151610b8690306110a8565b61014082015280516040908101805147036101208401525160808401518251602481019290925260448083019190915282518083039091018152606490910182526020810180516001600160e01b031663c8867ae960e01b17905282518051908301519251919260009283926001600160a01b03169190610c08908690611bb0565b60006040518083038185875af1925050503d8060008114610c45576040519150601f19603f3d011682016040523d82523d6000602084013e610c4a565b606091505b5091509150610c5b8282601461116b565b50610c78610c6d8660400151306110a8565b8561014001516111ad565b6040850151602001515261012084015147036040850151528051610ca59082016020908101908301611cae565b60408581018051820192909252905160608087018290528251825181526020808401515181830152928401518051948201949094529290910151908201527ff879ad0c295f22b7ee67d7c96b75a34785a6e4f61be8e3fd4c65040c48b6f3bc93506080019150610d129050565b60405180910390a1606081015151610d2c90156015611082565b610d4a82608001518260600151602001516000015110156016611082565b610d648160600151602001516000015183608001516111ad565b60808201819052815160600151610d7e9110156017611082565b336001600160a01b03166108fc610da184606001518460000151604001516111ad565b6040518115909202916000818181858888f19350505050158015610dc9573d6000803e3d6000fd5b50610ddd8260400151338360800151611202565b610df4826040015183600001518460800151611202565b60008080556001819055610acd9060029061153e565b608082015160a0820151526040820151610e2490306110a8565b61018082015280516040908101805147036101608401525160808401518251602481019290925260448083019190915282518083039091018152606490910182526020810180516001600160e01b031663dc8d714f60e01b17905282518051908301519251919260009283926001600160a01b03169190610ea6908690611bb0565b60006040518083038185875af1925050503d8060008114610ee3576040519150601f19603f3d011682016040523d82523d6000602084013e610ee8565b606091505b5091509150610ef98282601861116b565b50610f16610f0b8660400151306110a8565b8561018001516111ad565b60c08501516020015152610160840151470360c0850151528051610f439082016020908101908301611cae565b60c0850180516040908101929092525160e0860181905281518151815260208083015151818301529183015180519382019390935291015160608201527f1be1db276baa18d9c0fcbf70e5acfc61d531314a8bb7238df944653bf7253e7a93506080019150610faf9050565b60405180910390a160e081015151610fc990156019611082565b610fe782608001518260e0015160200151600001511015601a611082565b6110018160e00151602001516000015183608001516111ad565b610100820181905281516060015161101c911015601b611082565b336001600160a01b03166108fc61103f84606001518460000151604001516111ad565b6040518115909202916000818181858888f19350505050158015611067573d6000803e3d6000fd5b50610ddd826040015133836101000151611202565b50505050565b816101bb5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b17905291516000928392839291871691839161110391611bb0565b60006040518083038185875af1925050503d8060008114611140576040519150601f19603f3d011682016040523d82523d6000602084013e611145565b606091505b50915091506111568282600661116b565b50808060200190518101906101dc9190611ce0565b6060831561117a5750816111a6565b82511561118a5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161109f565b9392505050565b6000826111ba8382611cf9565b91508111156111fc5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161109f565b92915050565b61120d83838361121b565b61121657600080fd5b505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161127a91611bb0565b60006040518083038185875af1925050503d80600081146112b7576040519150601f19603f3d011682016040523d82523d6000602084013e6112bc565b606091505b50915091506112cd8282600261116b565b50808060200190518101906112e29190611d1e565b9695505050505050565b6040805161016081019091526000610100820181815261012083018290526101408301919091528190815260408051606081018252600080825260208281018290529282015291019081526020016000151581526020016113626040518060400160405280600081526020016000151581525090565b81526020016113866040518060400160405280600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b8280546113ad90611852565b90600052602060002090601f0160209004810192826113cf5760008555611415565b82601f106113e857805160ff1916838001178555611415565b82800160010185558215611415579182015b828111156114155782518255916020019190600101906113fa565b5061142192915061157b565b5090565b60405180604001604052806000815260200161147d6040805160808082018352600060208084018281528486018390528551938401865282845290830182905293820181905260608281019190915282015290815290565b905290565b604080516102208101825260006101a082018181526101c083018290526101e0830182905261020083018290528252825160208082018552918152908201529081016114cc611590565b81526020016114d9611590565b8152602001600081526020016114fb6040518060200160405280600081525090565b8152602001611508611590565b8152602001611515611590565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b50805461154a90611852565b6000825580601f1061155a575050565b601f016020900490600052602060002090810190611578919061157b565b50565b5b80821115611421576000815560010161157c565b6040518060600160405280600081526020016115b86040518060200160405280600081525090565b815260200161147d604051806040016040528060008152602001600081525090565b8051151582526020808201516001600160a01b0390811691840191909152604080830151908401526060808301519084015260809182015116910152565b60a081016111fc82846115da565b60006040828403121561163857600080fd5b50919050565b6001600160a01b038116811461157857600080fd5b801515811461157857600080fd5b6000806000806080858703121561167757600080fd5b84356116828161163e565b9350602085013561169281611653565b93969395505050506040820135916060013590565b60005b838110156116c25781810151838201526020016116aa565b8381111561107c5750506000910152565b82815260406020820152600082518060408401526116f88160608501602087016116a7565b601f01601f1916919091016060019392505050565b600060e0828403121561163857600080fd5b6040805190810167ffffffffffffffff8111828210171561175057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561175057634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561175057634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561175057634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561175057634e487b7160e01b600052604160045260246000fd5b60006040828403121561182c57600080fd5b61183461171f565b82358152602083013561184681611653565b60208201529392505050565b600181811c9082168061186657607f821691505b6020821081141561163857634e487b7160e01b600052602260045260246000fd5b600081830360e081121561189a57600080fd5b6118a261171f565b8335815260c0601f19830112156118b857600080fd5b6118c0611756565b6118c8611787565b6020860135600281106118da57600080fd5b815260408601356118ea81611653565b60208201526080605f198501121561190157600080fd5b6119096117b8565b935060608601356119198161163e565b8452608086013561192981611653565b8060208601525060a0860135604085015260c086013560608501528360408201528082525080602083015250809250505092915050565b600060a0828403121561197257600080fd5b61197a6117e9565b9050815161198781611653565b815260208201516119978161163e565b80602083015250604082015160408201526060820151606082015260808201516119c08161163e565b608082015292915050565b600061014082840312156119de57600080fd5b60405160c0810181811067ffffffffffffffff82111715611a0f57634e487b7160e01b600052604160045260246000fd5b6040528251611a1d8161163e565b8152611a2c8460208501611960565b602082015260c0830151611a3f8161163e565b604082015260e083015160608201526101008301516080820152610120830151611a688161163e565b60a08201529392505050565b60006101208284031215611a8757600080fd5b611a8f6117e9565b8251611a9a8161163e565b8152611aa98460208501611960565b602082015260c0830151611abc8161163e565b604082015260e0830151606082015261010090920151608083015250919050565b6001600160a01b0383168152606081016111a66020830184805182526020908101511515910152565b634e487b7160e01b600052602160045260246000fd5b6002811061157857634e487b7160e01b600052602160045260246000fd5b8051611b4581611b1c565b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b038781168252861660208201526101408101611b8d6040830187611b3a565b611b9a60a0830186611b3a565b6101008201939093526101200152949350505050565b60008251611bc28184602087016116a7565b9190910192915050565b81518152602080830151151590820152604081016111fc565b81516001600160a01b03908116825260208084015161012084019291611c0d908501826115da565b5060408401511660c0830152606083015160e08301526080909201516101009091015290565b6001600160a01b03838116825282516020808401919091528301515180516101008401929190611c6281611b1c565b80604086015250602081015115156060850152604081015190508181511660808501526020810151151560a0850152604081015160c0850152606081015160e085015250509392505050565b600060408284031215611cc057600080fd5b611cc861171f565b82518152602083015160208201528091505092915050565b600060208284031215611cf257600080fd5b5051919050565b600082821015611d1957634e487b7160e01b600052601160045260246000fd5b500390565b600060208284031215611d3057600080fd5b81516111a68161165356fea26469706673582212209e0b262cd74f97e4c6b40a36e4594a6152261af7d3f43c0e22579ee2066ff8e664736f6c634300080c0033`,
  BytecodeLen: 8980,
  Which: `oD`,
  version: 8,
  views: {
    opts: `opts`
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
