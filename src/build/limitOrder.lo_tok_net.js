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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3258, v3259, v3260, v3262, v3263, v3264] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v3258, v3259, v3260, v3262, v3263, v3299] = svs;
      return (await ((async () => {
        
        
        return v3259;}))(...args));
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
      1: [ctc0, ctc5, ctc1, ctc3, ctc3, ctc4],
      2: [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7, ctc3, ctc3]);
  const ctc9 = stdlib.T_Data({
    Cancel0_2877: ctc6,
    SwapViaPool0_2877: ctc8
    });
  
  
  const [v3258, v3259, v3260, v3262, v3263, v3299] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]);
  const v3338 = ctc.selfAddress();
  const v3340 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_2877" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v3341 = stdlib.addressEq(v3338, v3258);
  stdlib.assert(v3341, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_2877" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v3346 = ['Cancel0_2877', v3340];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3258, v3259, v3260, v3262, v3263, v3299, v3346],
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
      
      
      const {data: [v3351], secs: v3353, time: v3352, didSend: v3026, from: v3350 } = txn1;
      
      switch (v3351[0]) {
        case 'Cancel0_2877': {
          const v3354 = v3351[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v3363 = null;
          const v3364 = await txn1.getOutput('Cancel', 'v3363', ctc2, v3363);
          
          sim_r.txns.push({
            kind: 'from',
            to: v3258,
            tok: v3260
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v3260
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_2877': {
          const v3522 = v3351[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3351], secs: v3353, time: v3352, didSend: v3026, from: v3350 } = txn1;
  switch (v3351[0]) {
    case 'Cancel0_2877': {
      const v3354 = v3351[1];
      undefined /* setApiDetails */;
      ;
      const v3361 = stdlib.addressEq(v3350, v3258);
      stdlib.assert(v3361, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v3363 = null;
      const v3364 = await txn1.getOutput('Cancel', 'v3363', ctc2, v3363);
      if (v3026) {
        stdlib.protect(ctc2, await interact.out(v3354, v3364), {
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
    case 'SwapViaPool0_2877': {
      const v3522 = v3351[1];
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc0], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3]]);
  const ctc5 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc7, ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    Cancel0_2877: ctc6,
    SwapViaPool0_2877: ctc8
    });
  const ctc10 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc11 = stdlib.T_Tuple([ctc2, ctc10]);
  const ctc12 = stdlib.T_Address;
  
  
  const v3242 = stdlib.protect(ctc4, interact.opts, 'for D\'s interact field opts');
  const v3243 = v3242.tokA;
  const v3244 = v3242.tokB;
  const v3245 = v3242.amtA;
  const v3246 = v3242.amtB;
  const v3247 = v3242.ctcAnnouncer;
  
  const txn1 = await (ctc.sendrecv({
    args: [v3242, v3243, v3244, v3245, v3246, v3247],
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
      
      
      const {data: [v3259, v3260, v3261, v3262, v3263, v3264], secs: v3266, time: v3265, didSend: v2781, from: v3258 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3260
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
  const {data: [v3259, v3260, v3261, v3262, v3263, v3264], secs: v3266, time: v3265, didSend: v2781, from: v3258 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3258, v3259, v3260, v3262, v3263, v3264],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3265,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:51:5:dot', stdlib.UInt_max, '0'), [[v3262, v3260]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v3278, time: v3277, didSend: v2845, from: v3276 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v3262,
        kind: 'to',
        tok: v3260
        });
      
      const v3294 = await ctc.getContractInfo();
      const v3295 = ['Some', v3260];
      const v3296 = ['None', null];
      const v3299 = [];
      const v3302 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v3264,
          remote: ({
            accs: [v3258],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v3299 /* simTokensRecv */, undefined /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v3302', ctc5, v3302);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc12, ctc4, ctc0, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3278, time: v3277, didSend: v2845, from: v3276 } = txn2;
  ;
  ;
  const v3287 = stdlib.addressEq(v3258, v3276);
  stdlib.assert(v3287, {
    at: './limitOrder.rsh:51:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc1, await interact.ready(), {
    at: './limitOrder.rsh:52:19:application',
    fs: ['at ./limitOrder.rsh:52:19:application call to [unknown function] (defined at: ./limitOrder.rsh:52:19:function exp)', 'at ./limitOrder.rsh:52:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:52:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v3294 = await ctc.getContractInfo();
  const v3295 = ['Some', v3260];
  const v3296 = ['None', null];
  const v3299 = [];
  const v3302 = undefined /* Remote */;
  const v3303 = await txn2.getOutput('internal', 'v3302', ctc5, v3302);
  const v3305 = v3303[stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v3311 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3305);
  stdlib.assert(v3311, {
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
  const {data: [v3351], secs: v3353, time: v3352, didSend: v3026, from: v3350 } = txn3;
  switch (v3351[0]) {
    case 'Cancel0_2877': {
      const v3354 = v3351[1];
      undefined /* setApiDetails */;
      ;
      const v3361 = stdlib.addressEq(v3350, v3258);
      stdlib.assert(v3361, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v3363 = null;
      await txn3.getOutput('Cancel', 'v3363', ctc1, v3363);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_2877': {
      const v3522 = v3351[1];
      undefined /* setApiDetails */;
      ;
      const v3554 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v3555 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v3556 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v3557 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v3558 = stdlib.le(v3556, v3262);
      stdlib.assert(v3558, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v3564 = null;
      await txn3.getOutput('SwapViaPool', 'v3564', ctc1, v3564);
      if (v3555) {
        const v3588 = undefined /* Remote */;
        const v3589 = await txn3.getOutput('internal', 'v3588', ctc11, v3588);
        const v3591 = v3589[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3602 = stdlib.ge(v3591, v3263);
        stdlib.assert(v3602, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v3603 = stdlib.safeSub(v3262, v3556);
        const v3604 = stdlib.safeSub(v3591, v3263);
        const v3605 = stdlib.ge(v3604, v3557);
        stdlib.assert(v3605, {
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
        const v3646 = undefined /* Remote */;
        const v3647 = await txn3.getOutput('internal', 'v3646', ctc11, v3646);
        const v3649 = v3647[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3660 = stdlib.ge(v3649, v3263);
        stdlib.assert(v3660, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v3661 = stdlib.safeSub(v3262, v3556);
        const v3662 = stdlib.safeSub(v3649, v3263);
        const v3663 = stdlib.ge(v3662, v3557);
        stdlib.assert(v3663, {
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7, ctc3, ctc3]);
  const ctc9 = stdlib.T_Data({
    Cancel0_2877: ctc6,
    SwapViaPool0_2877: ctc8
    });
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc10]);
  
  
  const [v3258, v3259, v3260, v3262, v3263, v3299] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]);
  const v3314 = stdlib.protect(ctc8, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_2877" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v3317 = v3314[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3323 = stdlib.le(v3317, v3262);
  stdlib.assert(v3323, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_2877" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v3336 = ['SwapViaPool0_2877', v3314];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3258, v3259, v3260, v3262, v3263, v3299, v3336],
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
      
      
      const {data: [v3351], secs: v3353, time: v3352, didSend: v3026, from: v3350 } = txn1;
      
      switch (v3351[0]) {
        case 'Cancel0_2877': {
          const v3354 = v3351[1];
          
          break;
          }
        case 'SwapViaPool0_2877': {
          const v3522 = v3351[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v3554 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
          const v3555 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
          const v3556 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
          const v3564 = null;
          const v3565 = await txn1.getOutput('SwapViaPool', 'v3564', ctc2, v3564);
          
          if (v3555) {
            const v3588 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v3554,
                remote: ({
                  accs: [],
                  apps: [v3554],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:91:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  toks: [v3260]
                  })
                })
              return [v3263 /* simNetRecv */, v3299 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v3589 = await txn1.getOutput('internal', 'v3588', ctc11, v3588);
            const v3591 = v3589[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
            const v3603 = stdlib.safeSub(v3262, v3556);
            const v3604 = stdlib.safeSub(v3591, v3263);
            sim_r.txns.push({
              kind: 'from',
              to: v3350,
              tok: v3260
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3350,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3258,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3260
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3646 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v3554,
                remote: ({
                  accs: [],
                  apps: [v3554],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:91:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  toks: [v3260]
                  })
                })
              return [v3263 /* simNetRecv */, v3299 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v3647 = await txn1.getOutput('internal', 'v3646', ctc11, v3646);
            const v3649 = v3647[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
            const v3661 = stdlib.safeSub(v3262, v3556);
            const v3662 = stdlib.safeSub(v3649, v3263);
            sim_r.txns.push({
              kind: 'from',
              to: v3350,
              tok: v3260
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3350,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3258,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3260
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
    tys: [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3351], secs: v3353, time: v3352, didSend: v3026, from: v3350 } = txn1;
  switch (v3351[0]) {
    case 'Cancel0_2877': {
      const v3354 = v3351[1];
      return;
      break;
      }
    case 'SwapViaPool0_2877': {
      const v3522 = v3351[1];
      undefined /* setApiDetails */;
      ;
      const v3554 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v3555 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v3556 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v3557 = v3522[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v3558 = stdlib.le(v3556, v3262);
      stdlib.assert(v3558, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v3564 = null;
      const v3565 = await txn1.getOutput('SwapViaPool', 'v3564', ctc2, v3564);
      if (v3026) {
        stdlib.protect(ctc2, await interact.out(v3522, v3565), {
          at: './limitOrder.rsh:66:11:application',
          fs: ['at ./limitOrder.rsh:66:11:application call to [unknown function] (defined at: ./limitOrder.rsh:66:11:function exp)', 'at ./limitOrder.rsh:69:10:application call to "k" (defined at: ./limitOrder.rsh:68:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v3555) {
        const v3588 = undefined /* Remote */;
        const v3589 = await txn1.getOutput('internal', 'v3588', ctc11, v3588);
        const v3591 = v3589[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3602 = stdlib.ge(v3591, v3263);
        stdlib.assert(v3602, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v3603 = stdlib.safeSub(v3262, v3556);
        const v3604 = stdlib.safeSub(v3591, v3263);
        const v3605 = stdlib.ge(v3604, v3557);
        stdlib.assert(v3605, {
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
        const v3646 = undefined /* Remote */;
        const v3647 = await txn1.getOutput('internal', 'v3646', ctc11, v3646);
        const v3649 = v3647[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3660 = stdlib.ge(v3649, v3263);
        stdlib.assert(v3660, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v3661 = stdlib.safeSub(v3262, v3556);
        const v3662 = stdlib.safeSub(v3649, v3263);
        const v3663 = stdlib.ge(v3662, v3557);
        stdlib.assert(v3663, {
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
    pure: [`opts()(uint64,byte[0],uint64,uint64,uint64)`],
    sigs: [`Cancel()byte[0]`, `SwapViaPool(uint64,byte,uint64,uint64)byte[0]`, `opts()(uint64,byte[0],uint64,uint64,uint64)`]
    },
  appApproval: `ByAMAAEEAgbhjLn+Dtmtpa8PQEhQCaCNBiYEAAEABWFwcElEAQEiNQAxGEEE2ChkSSJbNQGBCFs1AjYaABdJQQBbIjUEIzUGSSEFDEAAOUkhBgxAABYhBhJENAElEkQpZEk1A1cgIDUHQgSSIQUSRDYaATYaAlA2GgNQNhoEUDX/KzT/UEIAMYG6j+1lEkQoNf8pNP9QgRmvUEIAHDYaAhc1BDYaAzYaARdJIwxAA3FJJQxAAn0lEkQlNAESRDQESSISTDQCEhFEKWRJNQNJSklXACA1/yEHWzX+IQhbNf0hCVs1/EgoNftJNQU1+oAEwWTGXzT6ULA0+iJVQABCMQA0/xJEgAgAAAAAAAANI7AoNQexIrIBNP2yEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgN1NPpXARk1+TT5Ils1+DT5IQpbNfc0+YERWzX2NPc0/Q5EgAgAAAAAAAAN7LAoNQc0+VcIARdBAN0qNPgWUAM19DIKeDXzMgpgNPMJFjXysSKyATT3shIkshA09LIUNP6yEbYisgEhBLIQNPiyGIAEoOj1mbIaNPcWsho0/BayGjT+sjA0+LIyszIKYDTzCTTyFwkWtwE+VwQAUDX1gAgAAAAAAAAOBDT1ULA09Uk19CJbSTXzNPwPRDTzNPwJSTXyNPYPRLEisgE0/TT3CbISJLIQMQCyFDT+shGzsSKyATTysggjshAxALIHs7EisgE0/LIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICYCo0+BZQAzX0Mgp4NfMyCmA08wkWNfKxIrIBNPeyEiSyEDT0shQ0/rIRtiKyASEEshA0+LIYgAR8pHu4sho09xayGjT8FrIaNP6yMDT4sjKzMgpgNPMJNPIXCRa3AT5XBABQNfWACAAAAAAAAA4+NPVQsDT1STX0IltJNfM0/A9ENPM0/AlJNfI09g9EsSKyATT9NPcJshIkshAxALIUNP6yEbOxIrIBNPKyCCOyEDEAsgezsSKyATT8sggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgGDSCM0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/VyAgNf4hB1s1/SEIWzX8IQlbNfuABJqLkXSwNPw0/YgByDT/MQASRCg1+io0A1dYCFADNfgyCng19zIKYDT3CRY19rEisgEhBLIQNAOBWFuyGIAE+pmLTLIaNP9JshyyGjEYFrIaKzT9FlCyGiEKr7IaNPwWsho0+xayGrMyCmA09wk09hcJFrcAPlcEAFA1+YAIAAAAAAAADOY0+VCwNPk1+CI0+CJbEkQ0/zT+UDT9FlA0/BZQNPsWUDT6UClLAVcAWGdIJTUBMgY1AkIAsUghC4gA/CI0ARJENARJIhJMNAISEURJNQVJSkpXACA1/4EgWzX+SCg1/YEoWzX8gTBbNfuBOFs1+oAEXhU+jTT/UDT+FlA0/VA0/BZQNPsWUDT6FlCwIQuIAKexIrIBIrISJLIQMgqyFDT+shGzMQA0/1A0/hZQNPwWUDT7FlA0+hZQKUsBVwBgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/limitOrder.rsh:55:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/limitOrder.rsh:97:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                    "internalType": "address payable",
                    "name": "tokA",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "tokB",
                    "type": "bool"
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
                "name": "v3259",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3260",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v3261",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3262",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v3263",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v3264",
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
                    "internalType": "address payable",
                    "name": "tokA",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "tokB",
                    "type": "bool"
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
                "name": "v3259",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3260",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v3261",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3262",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v3263",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v3264",
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
                    "name": "_Cancel0_2877",
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
                    "name": "_SwapViaPool0_2877",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v3351",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
    "name": "_reach_oe_v3302",
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
    "name": "_reach_oe_v3363",
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
    "name": "_reach_oe_v3564",
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
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3588",
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
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3646",
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
                    "name": "_Cancel0_2877",
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
                    "name": "_SwapViaPool0_2877",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v3351",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
            "internalType": "address payable",
            "name": "tokA",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "tokB",
            "type": "bool"
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
  Bytecode: `0x6080604052604051620025e6380380620025e6833981016040819052620000269162000308565b60008055436003556040517fcc4d003d0a515ed247682131f49a52475b3f16a056309dbc7cb6a54ad2557a529062000062903390849062000411565b60405180910390a1620000783415600862000171565b620000da6040805160c0810182526000808252825160a081018452818152602081810183905293810182905260608101829052608081019190915290918201908152600060208201819052604082018190526060820181905260809091015290565b33815260208083018051518284015280518201516001600160a01b03908116604080860191909152825160609081015190860152825160809081015190860152915160a0908101519091169084015260016000819055439055516200014291839101620004bb565b60405160208183030381529060405260029080519060200190620001689291906200019b565b5050506200058c565b81620001975760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001a9906200054f565b90600052602060002090601f016020900481019282620001cd576000855562000218565b82601f10620001e857805160ff191683800117855562000218565b8280016001018555821562000218579182015b8281111562000218578251825591602001919060010190620001fb565b50620002269291506200022a565b5090565b5b808211156200022657600081556001016200022b565b604080519081016001600160401b03811182821017156200027257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200027257634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200027257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002f257600080fd5b919050565b80518015158114620002f257600080fd5b60008183036101608112156200031d57600080fd5b6200032762000241565b83518152601f1982019150610140808312156200034357600080fd5b6200034d62000278565b60a08412156200035c57600080fd5b62000366620002a9565b93506200037660208701620002da565b84526200038660408701620002f7565b60208501526060860151604085015260808601516060850152620003ad60a08701620002da565b6080850152838152620003c360c08701620002da565b6020820152620003d660e08701620002f7565b604082015261010086015160608201526101208601516080820152620003fe828701620002da565b60a0820152602083015250949350505050565b60006101808201905060018060a01b0380851683528351602084015260208401516200047760408501825180516001600160a01b039081168352602080830151151590840152604080830151908401526060808301519084015260809182015116910152565b6020810151821660e0850152604081015115156101008501526060810151610120850152608081015161014085015260a00151166101609092019190915292915050565b81516001600160a01b039081168252602080840151610140840192916200051a9085018280516001600160a01b039081168352602080830151151590840152604080830151908401526060808301519084015260809182015116910152565b506040840151811660c0840152606084015160e0840152608084015161010084015260a0909301519092166101209091015290565b600181811c908216806200056457607f821691505b602082108114156200058657634e487b7160e01b600052602260045260246000fd5b50919050565b61204a806200059c6000396000f3fe6080604052600436106100795760003560e01c80635e43ae8e1161004b5780635e43ae8e146100f7578063832307571461010a578063ab53f2c61461011f578063e0cd1a061461014257005b80630a47debc146100825780631e93b0f1146100ad5780632c10a159146100cc5780634aa8e773146100df57005b3661008057005b005b34801561008e57600080fd5b50610097610155565b6040516100a491906118d7565b60405180910390f35b3480156100b957600080fd5b506003545b6040519081526020016100a4565b6100806100da3660046118e5565b61018f565b6100e76101bf565b60405190151581526020016100a4565b6100e7610105366004611920565b6101ce565b34801561011657600080fd5b506001546100be565b34801561012b57600080fd5b506101346101e5565b6040516100a4929190611992565b6100806101503660046119cc565b610282565b6040805160a081018252600080825260208201819052918101829052606081018290526080810182905290610189816102ae565b91505090565b60408051808201909152600080825260208201526101bb6101b536849003840184611ad9565b82610459565b5050565b60006101c9610800565b905090565b60006101dc85858585610839565b95945050505050565b6000606060005460028080546101fa90611b11565b80601f016020809104026020016040519081016040528092919081815260200182805461022690611b11565b80156102735780601f1061024857610100808354040283529160200191610273565b820191906000526020600020905b81548152906001019060200180831161025657829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101bb6102a836849003840184611b46565b826108b4565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052905460011415610392576000600280546102f190611b11565b80601f016020809104026020016040519081016040528092919081815260200182805461031d90611b11565b801561036a5780601f1061033f5761010080835404028352916020019161036a565b820191906000526020600020905b81548152906001019060200180831161034d57829003601f168201915b50505050508060200190518101906103829190611cbb565b9050610390600060076110a3565b505b60026000541415610448576000600280546103ac90611b11565b80601f01602080910402602001604051908101604052809291908181526020018280546103d890611b11565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b505050505080602001905181019061043d9190611d38565b602001519392505050565b610454600060076110a3565b919050565b610469600160005414600f6110a3565b815161048490158061047d57508251600154145b60106110a3565b60008080556002805461049690611b11565b80601f01602080910402602001604051908101604052809291908181526020018280546104c290611b11565b801561050f5780601f106104e45761010080835404028352916020019161050f565b820191906000526020600020905b8154815290600101906020018083116104f257829003601f168201915b50505050508060200190518101906105279190611cbb565b9050610531611575565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610562929190611da9565b60405180910390a1610576341560096110a3565b61059361058c33846040015185606001516110c9565b600a6110a3565b81516105ab906001600160a01b03163314600b6110a3565b8051600190526040828101805183516001600160a01b0390911692019190915260208083018051600090819052905190910152516105f0906105ed90306110e1565b90565b60c08201524760a08201528151815160208301516060850151608086015160405160009563014d07ad60e21b9561063295919430949193909190602401611e33565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460a001516001600160a01b03166000846040516106889190611e7c565b60006040518083038185875af1925050503d80600081146106c5576040519150601f19603f3d011682016040523d82523d6000602084013e6106ca565b606091505b50915091506106db8282600d6111a4565b506106f76106ed8660400151306110e1565b8560c00151900390565b60e0850181905261070a9015600c6110a3565b60a084015147036060850180519190915251608085018190526040517fb6db2ffa4d7398f668f287a63760bd9e3920f5fe0eb166fa6bec299d20c7895e94506107569350909150611e98565b60405180910390a16080810151516107709015600e6110a3565b61077861162a565b82516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015283820151151560a084015260026000554360015590516107d491839101611eb1565b604051602081830303815290604052600290805190602001906107f8929190611698565b505050505050565b600061080a61171c565b60208181015151600090819052604080518082019091528181529182015261083282826108b4565b5192915050565b600061084361171c565b6020818101805151600190528051516040908101516001600160a01b038a16905281515181015188151590840152815151810151810187905290515181015160600185905280518082019091526000808252918101919091526108a682826108b4565b602001519695505050505050565b6108c460026000541460216110a3565b81516108df9015806108d857508251600154145b60226110a3565b6000808055600280546108f190611b11565b80601f016020809104026020016040519081016040528092919081815260200182805461091d90611b11565b801561096a5780601f1061093f5761010080835404028352916020019161096a565b820191906000526020600020905b81548152906001019060200180831161094d57829003601f168201915b50505050508060200190518101906109829190611d38565b905061098c611779565b7fb6370803f5808d5248ae02f0b1012b90554877556c5a1a77bedc93d33c77a49b33856040516109bd929190611f0c565b60405180910390a160006020850151515160018111156109df576109df611dd2565b1415610a73576109f1341560116110a3565b8151610a09906001600160a01b0316331460126110a3565b604051600081527f0aeb9bd4b5d3d803280f865d3c438f151e0e764f54af1893b6f4f831f716c68e9060200160405180910390a160008352604082015182516060840151610a589291906111df565b60008080556001819055610a6e9060029061181b565b61109d565b6001602085015151516001811115610a8d57610a8d611dd2565b141561109d57602084015151604001518152610aab341560136110a3565b610ac58260600151826000015160400151111560146110a3565b604051600081527f500c900dab18753e7efcd903029aeb7f591c2f3acae99e5bd1e981e4d38057719060200160405180910390a160006020808501919091528151015115610e075760408083015182518051920151610b2f92610b2892916111f8565b60156110a3565b610b4b610b408360400151306110e1565b825160400151900390565b6101008201524760e082015280516040908101516080840151915160009263c8867ae960e01b92610b8a92909190602401918252602082015260400190565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808360000151600001516001600160a01b0316600084604051610be49190611e7c565b60006040518083038185875af1925050503d8060008114610c21576040519150601f19603f3d011682016040523d82523d6000602084013e610c26565b606091505b5091509150610c37828260186111a4565b50610c54610c498660400151306110e1565b856101000151900390565b6101208501819052610c68901560176110a3565b6040850151845151610c8791610c7f9130906112c9565b1560166110a3565b60e08401514703602080860151919091528151610cab919083018101908301611f87565b6020808601805190910191909152516040808601829052517fe01917a5f31df97b620176351a396dce3d0211c3e23c12514ed2aefb539bc48b9450610d0d93509091508151815260209182015180518383015290910151604082015260600190565b60405180910390a1610d2f8260800151826040015160000151101560196110a3565b610d458160400151600001518360800151611394565b606080830182905282510151610d5e911015601a6110a3565b610d82826040015133610d7d8560600151856000015160400151611394565b6111df565b6060810151604051339180156108fc02916000818181858888f19350505050158015610db2573d6000803e3d6000fd5b50815160808301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610df0573d6000803e3d6000fd5b5060008080556001819055610a6e9060029061181b565b60408083015182518051920151610e2992610e2292916111f8565b601b6110a3565b610e3a610b408360400151306110e1565b6101608201524761014082015280516040908101516080840151915160009263dc8d714f60e01b92610e7a92909190602401918252602082015260400190565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808360000151600001516001600160a01b0316600084604051610ed49190611e7c565b60006040518083038185875af1925050503d8060008114610f11576040519150601f19603f3d011682016040523d82523d6000602084013e610f16565b606091505b5091509150610f278282601e6111a4565b50610f44610f398660400151306110e1565b856101600151900390565b6101808501819052610f589015601d6110a3565b6040850151845151610f7791610f6f9130906112c9565b15601c6110a3565b61014084015147036080850151528051610f9a9082016020908101908301611f87565b608085018051602001919091525160a085018190526040517f73cd75c9b1ae2bd6b557200a53bde6f6e5bc61bcdf7de68f0e1728a7d06b4c629450610ffc93509091508151815260209182015180518383015290910151604082015260600190565b60405180910390a161101e82608001518260a00151600001511015601f6110a3565b6110348160a00151600001518360800151611394565b60c0820181905281516060015161104e91101560206110a3565b61106d826040015133610d7d8560600151856000015160400151611394565b60c0810151604051339180156108fc02916000818181858888f19350505050158015610db2573d6000803e3d6000fd5b50505050565b816101bb5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006110d7838530856113e9565b90505b9392505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b17905291516000928392839291871691839161113c91611e7c565b60006040518083038185875af1925050503d8060008114611179576040519150601f19603f3d011682016040523d82523d6000602084013e61117e565b606091505b509150915061118f828260066111a4565b50808060200190518101906101dc9190611fb9565b606083156111b35750816110da565b8251156111c35782518084602001fd5b60405163100960cb60e01b8152600481018390526024016110c0565b6111ea8383836114c3565b6111f357600080fd5b505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b17905291516000928392839291881691839161125791611e7c565b60006040518083038185875af1925050503d8060008114611294576040519150601f19603f3d011682016040523d82523d6000602084013e611299565b606091505b50915091506112aa828260056111a4565b50808060200190518101906112bf9190611fd2565b9695505050505050565b604080516001600160a01b03848116602483015283811660448084019190915283518084039091018152606490920183526020820180516001600160e01b0316636eb1769f60e11b17905291516000928392839291881691839161132c91611e7c565b60006040518083038185875af1925050503d8060008114611369576040519150601f19603f3d011682016040523d82523d6000602084013e61136e565b606091505b509150915061137f828260006111a4565b50808060200190518101906112bf9190611fb9565b6000826113a18382611fef565b91508111156113e35760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016110c0565b92915050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161145091611e7c565b60006040518083038185875af1925050503d806000811461148d576040519150601f19603f3d011682016040523d82523d6000602084013e611492565b606091505b50915091506114a3828260016111a4565b50808060200190518101906114b89190611fd2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161152291611e7c565b60006040518083038185875af1925050503d806000811461155f576040519150601f19603f3d011682016040523d82523d6000602084013e611564565b606091505b50915091506112aa828260026111a4565b6040805161016081019091526000610100820181815261012083018290526101408301919091528190815260408051606081018252600080825260208281018290529282015291019081526020016000151581526020016115eb6040518060400160405280600081526020016000151581525090565b815260200161160f6040518060400160405280600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b031681526020016116766040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152600060208201819052604082018190526060820181905260809091015290565b8280546116a490611b11565b90600052602060002090601f0160209004810192826116c6576000855561170c565b82601f106116df57805160ff191683800117855561170c565b8280016001018555821561170c579182015b8281111561170c5782518255916020019190600101906116f1565b50611718929150611858565b5090565b6040518060400160405280600081526020016117746040805160808082018352600060208084018281528486018390528551938401865282845290830182905293820181905260608281019190915282015290815290565b905290565b60408051610220810190915260006101a082018181526101c083018290526101e083018290526102008301919091528152602081016117b661186d565b81526020016117c361186d565b8152602001600081526020016117d761186d565b81526020016117e461186d565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b50805461182790611b11565b6000825580601f10611837575050565b601f0160209004906000526020600020908101906118559190611858565b50565b5b808211156117185760008155600101611859565b604051806040016040528060008152602001611774604051806040016040528060008152602001600081525090565b80516001600160a01b039081168352602080830151151590840152604080830151908401526060808301519084015260809182015116910152565b60a081016113e3828461189c565b6000604082840312156118f757600080fd5b50919050565b6001600160a01b038116811461185557600080fd5b801515811461185557600080fd5b6000806000806080858703121561193657600080fd5b8435611941816118fd565b9350602085013561195181611912565b93969395505050506040820135916060013590565b60005b83811015611981578181015183820152602001611969565b8381111561109d5750506000910152565b82815260406020820152600082518060408401526119b7816060850160208701611966565b601f01601f1916919091016060019392505050565b600060e082840312156118f757600080fd5b6040805190810167ffffffffffffffff81118282101715611a0f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611a0f57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611a0f57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611a0f57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611a0f57634e487b7160e01b600052604160045260246000fd5b600060408284031215611aeb57600080fd5b611af36119de565b823581526020830135611b0581611912565b60208201529392505050565b600181811c90821680611b2557607f821691505b602082108114156118f757634e487b7160e01b600052602260045260246000fd5b600081830360e0811215611b5957600080fd5b611b616119de565b8335815260c0601f1983011215611b7757600080fd5b611b7f611a15565b611b87611a46565b602086013560028110611b9957600080fd5b81526040860135611ba981611912565b60208201526080605f1985011215611bc057600080fd5b611bc8611a77565b93506060860135611bd8816118fd565b84526080860135611be881611912565b8060208601525060a0860135604085015260c086013560608501528360408201528082525080602083015250809250505092915050565b600060a08284031215611c3157600080fd5b60405160a0810181811067ffffffffffffffff82111715611c6257634e487b7160e01b600052604160045260246000fd5b80604052508091508251611c75816118fd565b81526020830151611c8581611912565b8060208301525060408301516040820152606083015160608201526080830151611cae816118fd565b6080919091015292915050565b60006101408284031215611cce57600080fd5b611cd6611aa8565b8251611ce1816118fd565b8152611cf08460208501611c1f565b602082015260c0830151611d03816118fd565b604082015260e083015160608201526101008301516080820152610120830151611d2c816118fd565b60a08201529392505050565b60006101408284031215611d4b57600080fd5b611d53611aa8565b8251611d5e816118fd565b8152611d6d8460208501611c1f565b602082015260c0830151611d80816118fd565b604082015260e083015160608201526101008301516080820152610120830151611d2c81611912565b6001600160a01b0383168152606081016110da6020830184805182526020908101511515910152565b634e487b7160e01b600052602160045260246000fd5b6002811061185557634e487b7160e01b600052602160045260246000fd5b8051611e1181611de8565b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b038781168252861660208201526101408101611e596040830187611e06565b611e6660a0830186611e06565b6101008201939093526101200152949350505050565b60008251611e8e818460208701611966565b9190910192915050565b81518152602080830151151590820152604081016113e3565b81516001600160a01b03908116825260208084015161014084019291611ed99085018261189c565b5060408401511660c0830152606083015160e0830152608083015161010083015260a09092015115156101209091015290565b6001600160a01b03838116825282516020808401919091528301515180516101008401929190611f3b81611de8565b80604086015250602081015115156060850152604081015190508181511660808501526020810151151560a0850152604081015160c0850152606081015160e085015250509392505050565b600060408284031215611f9957600080fd5b611fa16119de565b82518152602083015160208201528091505092915050565b600060208284031215611fcb57600080fd5b5051919050565b600060208284031215611fe457600080fd5b81516110da81611912565b60008282101561200f57634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220cec6a46e3ce42285d28fcbf9c76a5e6b52bd87fb299199275f3f4efc093e009864736f6c634300080c0033`,
  BytecodeLen: 9702,
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
