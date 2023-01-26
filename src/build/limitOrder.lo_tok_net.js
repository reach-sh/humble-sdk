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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4], ['creator', ctc0]]);
  const ctc6 = stdlib.T_Tuple([]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3411, v3412, v3413, v3415, v3416, v3417] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v3411, v3412, v3413, v3415, v3416, v3453] = svs;
      return (await ((async () => {
        
        
        return v3412;}))(...args));
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
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4], ['creator', ctc0]]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7, ctc3, ctc3]);
  const ctc9 = stdlib.T_Data({
    Cancel0_3029: ctc6,
    SwapViaPool0_3029: ctc8
    });
  
  
  const [v3411, v3412, v3413, v3415, v3416, v3453] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]);
  const v3492 = ctc.selfAddress();
  const v3494 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:118:24:application call to [unknown function] (defined at: ./limitOrder.rsh:118:24:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runCancel0_3029" (defined at: ./limitOrder.rsh:118:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v3495 = stdlib.addressEq(v3492, v3411);
  stdlib.assert(v3495, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:118:24:application call to [unknown function] (defined at: ./limitOrder.rsh:118:24:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runCancel0_3029" (defined at: ./limitOrder.rsh:118:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v3500 = ['Cancel0_3029', v3494];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3411, v3412, v3413, v3415, v3416, v3453, v3500],
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
      
      
      const {data: [v3505], secs: v3507, time: v3506, didSend: v3178, from: v3504 } = txn1;
      
      switch (v3505[0]) {
        case 'Cancel0_3029': {
          const v3508 = v3505[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v3517 = null;
          const v3518 = await txn1.getOutput('Cancel', 'v3517', ctc2, v3517);
          
          sim_r.txns.push({
            kind: 'from',
            to: v3411,
            tok: v3413
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v3413
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_3029': {
          const v3676 = v3505[1];
          
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
  const {data: [v3505], secs: v3507, time: v3506, didSend: v3178, from: v3504 } = txn1;
  switch (v3505[0]) {
    case 'Cancel0_3029': {
      const v3508 = v3505[1];
      undefined /* setApiDetails */;
      ;
      const v3515 = stdlib.addressEq(v3504, v3411);
      stdlib.assert(v3515, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v3517 = null;
      const v3518 = await txn1.getOutput('Cancel', 'v3517', ctc2, v3517);
      if (v3178) {
        stdlib.protect(ctc2, await interact.out(v3508, v3518), {
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
    case 'SwapViaPool0_3029': {
      const v3676 = v3505[1];
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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Struct([['tokA', ctc0], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3], ['creator', ctc4]]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc3, ctc8, ctc2, ctc2]);
  const ctc10 = stdlib.T_Data({
    Cancel0_3029: ctc7,
    SwapViaPool0_3029: ctc9
    });
  const ctc11 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc11]);
  
  
  const v3394 = stdlib.protect(ctc5, interact.opts, 'for D\'s interact field opts');
  const v3395 = v3394.tokA;
  const v3396 = v3394.tokB;
  const v3397 = v3394.amtA;
  const v3398 = v3394.amtB;
  const v3399 = v3394.ctcAnnouncer;
  
  const txn1 = await (ctc.sendrecv({
    args: [v3394, v3395, v3396, v3397, v3398, v3399],
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
      
      
      const {data: [v3412, v3413, v3414, v3415, v3416, v3417], secs: v3419, time: v3418, didSend: v2932, from: v3411 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3413
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
  const {data: [v3412, v3413, v3414, v3415, v3416, v3417], secs: v3419, time: v3418, didSend: v2932, from: v3411 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3411, v3412, v3413, v3415, v3416, v3417],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3418,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:52:5:dot', stdlib.UInt_max, '0'), [[v3415, v3413]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v3431, time: v3430, didSend: v2996, from: v3429 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v3415,
        kind: 'to',
        tok: v3413
        });
      
      const v3448 = await ctc.getContractInfo();
      const v3449 = ['Some', v3413];
      const v3450 = ['None', null];
      const v3453 = [];
      const v3456 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v3417,
          remote: ({
            accs: [v3411],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v3456', ctc6, v3456);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc0, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3431, time: v3430, didSend: v2996, from: v3429 } = txn2;
  ;
  ;
  const v3440 = stdlib.addressEq(v3411, v3429);
  stdlib.assert(v3440, {
    at: './limitOrder.rsh:52:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc1, await interact.ready(), {
    at: './limitOrder.rsh:53:19:application',
    fs: ['at ./limitOrder.rsh:53:19:application call to [unknown function] (defined at: ./limitOrder.rsh:53:19:function exp)', 'at ./limitOrder.rsh:53:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:53:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v3448 = await ctc.getContractInfo();
  const v3449 = ['Some', v3413];
  const v3450 = ['None', null];
  const v3453 = [];
  const v3456 = undefined /* Remote */;
  const v3457 = await txn2.getOutput('internal', 'v3456', ctc6, v3456);
  const v3459 = v3457[stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0')];
  const v3465 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3459);
  stdlib.assert(v3465, {
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
  const {data: [v3505], secs: v3507, time: v3506, didSend: v3178, from: v3504 } = txn3;
  switch (v3505[0]) {
    case 'Cancel0_3029': {
      const v3508 = v3505[1];
      undefined /* setApiDetails */;
      ;
      const v3515 = stdlib.addressEq(v3504, v3411);
      stdlib.assert(v3515, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v3517 = null;
      await txn3.getOutput('Cancel', 'v3517', ctc1, v3517);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_3029': {
      const v3676 = v3505[1];
      undefined /* setApiDetails */;
      ;
      const v3708 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v3709 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v3710 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v3711 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '3')];
      const v3712 = stdlib.le(v3710, v3415);
      stdlib.assert(v3712, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v3718 = null;
      await txn3.getOutput('SwapViaPool', 'v3718', ctc1, v3718);
      if (v3709) {
        const v3742 = undefined /* Remote */;
        const v3743 = await txn3.getOutput('internal', 'v3742', ctc12, v3742);
        const v3745 = v3743[stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '0')];
        const v3756 = stdlib.ge(v3745, v3416);
        stdlib.assert(v3756, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v3757 = stdlib.safeSub(v3415, v3710);
        const v3758 = stdlib.safeSub(v3745, v3416);
        const v3759 = stdlib.ge(v3758, v3711);
        stdlib.assert(v3759, {
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
        const v3800 = undefined /* Remote */;
        const v3801 = await txn3.getOutput('internal', 'v3800', ctc12, v3800);
        const v3803 = v3801[stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '0')];
        const v3814 = stdlib.ge(v3803, v3416);
        stdlib.assert(v3814, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v3815 = stdlib.safeSub(v3415, v3710);
        const v3816 = stdlib.safeSub(v3803, v3416);
        const v3817 = stdlib.ge(v3816, v3711);
        stdlib.assert(v3817, {
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4], ['creator', ctc0]]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7, ctc3, ctc3]);
  const ctc9 = stdlib.T_Data({
    Cancel0_3029: ctc6,
    SwapViaPool0_3029: ctc8
    });
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc10]);
  
  
  const [v3411, v3412, v3413, v3415, v3416, v3453] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]);
  const v3468 = stdlib.protect(ctc8, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:67:62:application call to [unknown function] (defined at: ./limitOrder.rsh:67:62:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runSwapViaPool0_3029" (defined at: ./limitOrder.rsh:67:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v3471 = v3468[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3477 = stdlib.le(v3471, v3415);
  stdlib.assert(v3477, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:67:62:application call to [unknown function] (defined at: ./limitOrder.rsh:67:62:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runSwapViaPool0_3029" (defined at: ./limitOrder.rsh:67:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v3490 = ['SwapViaPool0_3029', v3468];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3411, v3412, v3413, v3415, v3416, v3453, v3490],
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
      
      
      const {data: [v3505], secs: v3507, time: v3506, didSend: v3178, from: v3504 } = txn1;
      
      switch (v3505[0]) {
        case 'Cancel0_3029': {
          const v3508 = v3505[1];
          
          break;
          }
        case 'SwapViaPool0_3029': {
          const v3676 = v3505[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v3708 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
          const v3709 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
          const v3710 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
          const v3718 = null;
          const v3719 = await txn1.getOutput('SwapViaPool', 'v3718', ctc2, v3718);
          
          if (v3709) {
            const v3742 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v3708,
                remote: ({
                  accs: [],
                  apps: [v3708],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '1'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:92:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '1'),
                  toks: [v3413]
                  })
                })
              return [v3416 /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
            const v3743 = await txn1.getOutput('internal', 'v3742', ctc11, v3742);
            const v3745 = v3743[stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '0')];
            const v3757 = stdlib.safeSub(v3415, v3710);
            const v3758 = stdlib.safeSub(v3745, v3416);
            sim_r.txns.push({
              kind: 'from',
              to: v3504,
              tok: v3413
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3504,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3411,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3413
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3800 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v3708,
                remote: ({
                  accs: [],
                  apps: [v3708],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '1'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:92:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '1'),
                  toks: [v3413]
                  })
                })
              return [v3416 /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
            const v3801 = await txn1.getOutput('internal', 'v3800', ctc11, v3800);
            const v3803 = v3801[stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '0')];
            const v3815 = stdlib.safeSub(v3415, v3710);
            const v3816 = stdlib.safeSub(v3803, v3416);
            sim_r.txns.push({
              kind: 'from',
              to: v3504,
              tok: v3413
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3504,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3411,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3413
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
  const {data: [v3505], secs: v3507, time: v3506, didSend: v3178, from: v3504 } = txn1;
  switch (v3505[0]) {
    case 'Cancel0_3029': {
      const v3508 = v3505[1];
      return;
      break;
      }
    case 'SwapViaPool0_3029': {
      const v3676 = v3505[1];
      undefined /* setApiDetails */;
      ;
      const v3708 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v3709 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v3710 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v3711 = v3676[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '3')];
      const v3712 = stdlib.le(v3710, v3415);
      stdlib.assert(v3712, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v3718 = null;
      const v3719 = await txn1.getOutput('SwapViaPool', 'v3718', ctc2, v3718);
      if (v3178) {
        stdlib.protect(ctc2, await interact.out(v3676, v3719), {
          at: './limitOrder.rsh:67:11:application',
          fs: ['at ./limitOrder.rsh:67:11:application call to [unknown function] (defined at: ./limitOrder.rsh:67:11:function exp)', 'at ./limitOrder.rsh:70:10:application call to "k" (defined at: ./limitOrder.rsh:69:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v3709) {
        const v3742 = undefined /* Remote */;
        const v3743 = await txn1.getOutput('internal', 'v3742', ctc11, v3742);
        const v3745 = v3743[stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '0')];
        const v3756 = stdlib.ge(v3745, v3416);
        stdlib.assert(v3756, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v3757 = stdlib.safeSub(v3415, v3710);
        const v3758 = stdlib.safeSub(v3745, v3416);
        const v3759 = stdlib.ge(v3758, v3711);
        stdlib.assert(v3759, {
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
        const v3800 = undefined /* Remote */;
        const v3801 = await txn1.getOutput('internal', 'v3800', ctc11, v3800);
        const v3803 = v3801[stdlib.checkedBigNumberify('./limitOrder.rsh:98:15:application', stdlib.UInt_max, '0')];
        const v3814 = stdlib.ge(v3803, v3416);
        stdlib.assert(v3814, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v3815 = stdlib.safeSub(v3415, v3710);
        const v3816 = stdlib.safeSub(v3803, v3416);
        const v3817 = stdlib.ge(v3816, v3711);
        stdlib.assert(v3817, {
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
    impure: [`Cancel()void`, `SwapViaPool(uint64,byte,uint64,uint64)void`, `_reachp_0((uint64,(uint64,byte[0],uint64,uint64,uint64,address),uint64,byte[0],uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[25])))void`],
    pure: [`opts()(uint64,byte[0],uint64,uint64,uint64,address)`],
    sigs: [`Cancel()void`, `SwapViaPool(uint64,byte,uint64,uint64)void`, `_reachp_0((uint64,(uint64,byte[0],uint64,uint64,uint64,address),uint64,byte[0],uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[25])))void`, `opts()(uint64,byte[0],uint64,uint64,uint64,address)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEIAgZgBAmgjQZocCYEAAEBBWFwcElEAQAxGEEDuihkSSJbNQEkWzUCK2QpZFCCBgQGm4T0BG61siAEpsvLIQTGdVwQBNClMNUE39kjKDYaAI4GADsDUwNuAAEEegNjAIEirzULJTQBEkSIBLw0CyJbNQw0C1cIGjUNgARCVeIcNAwWUDQNULA0DIgEjDQNIlWNAgQ/A2JC/8U2GgEXNhoCFzYaAxc2GgQXNQs1DDUNNQ4kryk0DhY0DRZRBwhQNAwWUDQLFlBQUDULQv+XMQA0EhJEKDULgAgAAAAAAAANvTQLULA0CzUENBA0ETQSiAQfIjQRMgoyCYgEJzEZgQUSRIgETSIyCjIJiARVNANAAAqABBUffHU0BFCwI0M0CyJbNRQ0CyEHWzUTNAuBEVs1DTQTNBAORCg1DIAIAAAAAAAADoY0DFCwNAw1BDQLVwgBF0ECrSo0FBZQAzUIMgp4NQkoMgpgNAkJFjUKNBM0ETQIiAPotiKyASEEshA0FLIYgASg6PWZsho0ExayGjQPFrIaNBGyMDQUsjKzMgpgNAkJNAoXCRa3AT5XBABQNQuACAAAAAAAAA6eNAtQsDQLSTUMIltJNQs0Dw9ENAs0DwlJNQw0DQ9ENBA0Ewk0ETEAiAMsNAwxAIgDITQPNBKIAxoiNBEyCjIJiAMmQv78NAElEkSIAyE0DDUEMRkiEkRC/v4xADUSNA0iWzUONA1XCEA1DDQNgUhbNRE0DYFQWzUQNA2BWFs1DzQNIQVbNQuABGV025U0DhZQNAxQNBEWUDQQFlA0DxZQNAsWULA0DogCtSEIiALjIjQRMgqIAqA0EjQMUDQRFlA0EBZQNA8WUDQLFlAjMgY1AjUBK0sBVwB/ZylMV38BZyg0ARY0AhZQZzEZIhJEiAKnQv5fIzQBEkRJVwAgNRJJVyBANQxJIQVbNRFJIQlbNRBJIQpbNQ+BeFs1CzQNFzUOgATVFRkUNA4WULA0DogCLjQQNBExFjQAIwhJNQAJRwM4FDIKEkQ4ECEGEkQ4EU8CEkQ4EhJENBIxABJEKDUOKjQLFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQLshiABEqca8myGjQSSbIcshoxGBayGik0ERZQshohB6+yGjQQFrIaNA8WshqzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAAA2ANA1QsDQNNQsiNAsiWxJENBI0DFA0ERZQNBAWUDQPFlA0DlAkr1AlMgZC/teIAWAhCIgBkjYaATUNQv5SiAFQNhoBNQ1C/uGIAUU2GgE1C0L8jSIxNBJEgQMxNRJEIjE2EkQiMTcSRIgBJYGAAa8iIkL+kDQNVwEZNQtC/RsqNBQWUAM1CDIKeDUJKDIKYDQJCRY1CjQTNBE0CIgBO7YisgEhBLIQNBSyGIAEfKR7uLIaNBMWsho0DxayGjQRsjA0FLIyszIKYDQJCTQKFwkWtwE+VwQAUDULgAgAAAAAAAAO2DQLULA0C0k1DCJbSTULNA8PRDQLNA8JSTUMNA0PRDQQNBMJNBExAIgAfzQMMQCIAHQ0DzQSiABtIjQRMgoyCYgAeUL8TyKyASOyELIHsgiziSKyASEGshCyFLIRshKJIrIBIQayELIUshGyErOJQvv1Qv0kSIlMCUk1BjIJiAAliQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEibFC/5yxQv+yIzUDiUkiEkw0AhIRRImxshVC/55JVwAgNRJJVyBANQxJIQVbNRFJIQlbNRBJIQpbNQ9IKDUOiTQGCDUGiTQGNAdKD0H/g0L/i7FC/1exsglC/0U=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `28`,
    1000: `594`,
    1001: `594`,
    1002: `595`,
    1003: `596`,
    1004: `597`,
    1005: `598`,
    1006: `598`,
    1007: `599`,
    1008: `600`,
    1009: `601`,
    101: `28`,
    1010: `601`,
    1011: `601`,
    1012: `602`,
    1013: `602`,
    1014: `602`,
    1015: `603`,
    1016: `604`,
    1017: `605`,
    1018: `606`,
    1019: `606`,
    102: `29`,
    1020: `606`,
    1021: `608`,
    1022: `608`,
    1023: `609`,
    1024: `609`,
    1025: `609`,
    1026: `610`,
    1027: `610`,
    1028: `611`,
    1029: `611`,
    103: `30`,
    1030: `611`,
    1031: `613`,
    1032: `614`,
    1033: `614`,
    1034: `615`,
    1035: `616`,
    1036: `617`,
    1037: `618`,
    1038: `618`,
    1039: `619`,
    104: `30`,
    1040: `619`,
    1041: `620`,
    1042: `621`,
    1043: `621`,
    1044: `622`,
    1045: `623`,
    1046: `623`,
    1047: `624`,
    1048: `625`,
    1049: `625`,
    105: `32`,
    1050: `626`,
    1051: `627`,
    1052: `628`,
    1053: `628`,
    1054: `629`,
    1055: `629`,
    1056: `631`,
    1057: `631`,
    1058: `632`,
    1059: `632`,
    106: `33`,
    1060: `633`,
    1061: `633`,
    1062: `633`,
    1063: `634`,
    1064: `635`,
    1065: `636`,
    1066: `636`,
    1067: `637`,
    1068: `637`,
    1069: `638`,
    107: `33`,
    1070: `638`,
    1071: `639`,
    1072: `639`,
    1073: `641`,
    1074: `641`,
    1075: `642`,
    1076: `642`,
    1077: `642`,
    1078: `642`,
    1079: `642`,
    108: `34`,
    1080: `642`,
    1081: `643`,
    1082: `643`,
    1083: `644`,
    1084: `644`,
    1085: `645`,
    1086: `646`,
    1087: `646`,
    1088: `647`,
    1089: `647`,
    109: `35`,
    1090: `648`,
    1091: `649`,
    1092: `649`,
    1093: `650`,
    1094: `650`,
    1095: `651`,
    1096: `651`,
    1097: `652`,
    1098: `652`,
    1099: `653`,
    11: `2`,
    110: `36`,
    1100: `653`,
    1101: `654`,
    1102: `658`,
    1103: `658`,
    1104: `659`,
    1105: `660`,
    1106: `660`,
    1107: `661`,
    1108: `662`,
    1109: `662`,
    111: `36`,
    1110: `663`,
    1111: `664`,
    1112: `665`,
    1113: `666`,
    1114: `666`,
    1115: `666`,
    1116: `667`,
    1117: `667`,
    1118: `667`,
    1119: `668`,
    112: `36`,
    1120: `669`,
    1121: `669`,
    1122: `670`,
    1123: `670`,
    1124: `670`,
    1125: `670`,
    1126: `670`,
    1127: `670`,
    1128: `670`,
    1129: `670`,
    113: `37`,
    1130: `670`,
    1131: `670`,
    1132: `671`,
    1133: `671`,
    1134: `672`,
    1135: `673`,
    1136: `674`,
    1137: `674`,
    1138: `675`,
    1139: `676`,
    114: `37`,
    1140: `676`,
    1141: `677`,
    1142: `678`,
    1143: `679`,
    1144: `680`,
    1145: `680`,
    1146: `681`,
    1147: `681`,
    1148: `682`,
    1149: `683`,
    115: `38`,
    1150: `686`,
    1151: `686`,
    1152: `687`,
    1153: `687`,
    1154: `688`,
    1155: `689`,
    1156: `690`,
    1157: `690`,
    1158: `691`,
    1159: `691`,
    116: `39`,
    1160: `692`,
    1161: `693`,
    1162: `696`,
    1163: `696`,
    1164: `697`,
    1165: `697`,
    1166: `698`,
    1167: `699`,
    1168: `699`,
    1169: `701`,
    117: `40`,
    1170: `701`,
    1171: `702`,
    1172: `702`,
    1173: `702`,
    1174: `703`,
    1175: `703`,
    1176: `704`,
    1177: `704`,
    1178: `705`,
    1179: `705`,
    118: `40`,
    1180: `705`,
    1181: `706`,
    1182: `706`,
    1183: `708`,
    1184: `708`,
    1185: `709`,
    1186: `709`,
    1187: `709`,
    1188: `711`,
    1189: `712`,
    119: `41`,
    1190: `712`,
    1191: `713`,
    1192: `713`,
    1193: `714`,
    1194: `714`,
    1195: `715`,
    1196: `715`,
    1197: `715`,
    1198: `716`,
    1199: `716`,
    12: `2`,
    120: `41`,
    1200: `716`,
    1201: `718`,
    1202: `719`,
    1203: `719`,
    1204: `720`,
    1205: `721`,
    1206: `721`,
    1207: `722`,
    1208: `722`,
    1209: `723`,
    121: `42`,
    1210: `723`,
    1211: `724`,
    1212: `725`,
    1213: `727`,
    1214: `728`,
    1215: `728`,
    1216: `729`,
    1217: `729`,
    1218: `730`,
    1219: `730`,
    122: `42`,
    1220: `731`,
    1221: `731`,
    1222: `732`,
    1223: `732`,
    1224: `733`,
    1225: `733`,
    1226: `734`,
    1227: `736`,
    1228: `737`,
    1229: `737`,
    123: `42`,
    1230: `738`,
    1231: `738`,
    1232: `739`,
    1233: `739`,
    1234: `740`,
    1235: `740`,
    1236: `741`,
    1237: `741`,
    1238: `742`,
    1239: `742`,
    124: `43`,
    1240: `743`,
    1241: `744`,
    1242: `746`,
    1243: `746`,
    1244: `746`,
    1245: `748`,
    1246: `748`,
    1247: `748`,
    1248: `750`,
    1249: `751`,
    125: `43`,
    1250: `753`,
    1251: `754`,
    1252: `755`,
    1253: `756`,
    1254: `756`,
    1255: `757`,
    1256: `757`,
    1257: `758`,
    1258: `758`,
    1259: `758`,
    126: `44`,
    1260: `759`,
    1261: `761`,
    1262: `762`,
    1263: `763`,
    1264: `763`,
    1265: `763`,
    1266: `764`,
    1267: `765`,
    1268: `765`,
    1269: `768`,
    127: `44`,
    1270: `768`,
    1271: `769`,
    1272: `769`,
    1273: `770`,
    1274: `771`,
    1275: `772`,
    1276: `773`,
    1277: `773`,
    1278: `774`,
    1279: `775`,
    128: `44`,
    1280: `775`,
    1281: `776`,
    1282: `776`,
    1283: `777`,
    1284: `777`,
    1285: `778`,
    1286: `779`,
    1287: `780`,
    1288: `780`,
    1289: `781`,
    129: `44`,
    1290: `782`,
    1291: `783`,
    1292: `784`,
    1293: `784`,
    1294: `785`,
    1295: `786`,
    1296: `787`,
    1297: `789`,
    1298: `790`,
    1299: `790`,
    13: `2`,
    130: `44`,
    1300: `790`,
    1301: `792`,
    1302: `793`,
    1303: `793`,
    1304: `793`,
    1305: `795`,
    1306: `796`,
    1307: `796`,
    1308: `797`,
    1309: `799`,
    131: `44`,
    1310: `800`,
    1311: `801`,
    1312: `802`,
    1313: `803`,
    1314: `803`,
    1315: `804`,
    1316: `805`,
    1317: `806`,
    1318: `807`,
    1319: `809`,
    132: `45`,
    1320: `810`,
    1321: `810`,
    1322: `811`,
    1323: `811`,
    1324: `811`,
    1325: `813`,
    1326: `814`,
    1327: `814`,
    1328: `814`,
    1329: `815`,
    133: `45`,
    1330: `815`,
    1331: `816`,
    1332: `817`,
    1333: `817`,
    1334: `817`,
    1335: `818`,
    1336: `818`,
    1337: `819`,
    1338: `820`,
    1339: `820`,
    134: `46`,
    1340: `821`,
    1341: `822`,
    1342: `822`,
    1343: `823`,
    1344: `824`,
    1345: `824`,
    1346: `825`,
    1347: `826`,
    1348: `826`,
    1349: `827`,
    135: `47`,
    1350: `828`,
    1351: `828`,
    1352: `829`,
    1353: `830`,
    1354: `830`,
    1355: `831`,
    1356: `832`,
    1357: `833`,
    1358: `833`,
    1359: `834`,
    136: `48`,
    1360: `836`,
    1361: `836`,
    1362: `837`,
    1363: `838`,
    1364: `838`,
    1365: `839`,
    1366: `841`,
    1367: `841`,
    1368: `842`,
    1369: `842`,
    137: `48`,
    1370: `843`,
    1371: `844`,
    1372: `845`,
    1373: `845`,
    1374: `845`,
    1375: `846`,
    1376: `846`,
    1377: `846`,
    1378: `848`,
    1379: `849`,
    138: `49`,
    1380: `849`,
    1381: `849`,
    1382: `851`,
    1383: `852`,
    1384: `852`,
    1385: `853`,
    139: `50`,
    14: `2`,
    140: `52`,
    141: `52`,
    142: `53`,
    143: `53`,
    144: `53`,
    145: `54`,
    146: `54`,
    147: `55`,
    148: `56`,
    149: `57`,
    15: `2`,
    150: `57`,
    151: `57`,
    152: `57`,
    153: `57`,
    154: `57`,
    155: `58`,
    156: `58`,
    157: `58`,
    158: `60`,
    159: `60`,
    16: `2`,
    160: `60`,
    161: `61`,
    162: `62`,
    163: `62`,
    164: `62`,
    165: `63`,
    166: `64`,
    167: `64`,
    168: `64`,
    169: `65`,
    17: `2`,
    170: `66`,
    171: `66`,
    172: `66`,
    173: `67`,
    174: `68`,
    175: `68`,
    176: `69`,
    177: `69`,
    178: `70`,
    179: `70`,
    18: `2`,
    180: `71`,
    181: `71`,
    182: `73`,
    183: `74`,
    184: `75`,
    185: `76`,
    186: `76`,
    187: `77`,
    188: `78`,
    189: `78`,
    19: `2`,
    190: `79`,
    191: `80`,
    192: `80`,
    193: `80`,
    194: `81`,
    195: `82`,
    196: `82`,
    197: `83`,
    198: `84`,
    199: `85`,
    2: `2`,
    20: `2`,
    200: `85`,
    201: `86`,
    202: `87`,
    203: `88`,
    204: `89`,
    205: `90`,
    206: `90`,
    207: `91`,
    208: `91`,
    209: `91`,
    21: `2`,
    210: `93`,
    211: `93`,
    212: `94`,
    213: `94`,
    214: `95`,
    215: `96`,
    216: `100`,
    217: `101`,
    218: `101`,
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
    228: `102`,
    229: `103`,
    23: `2`,
    230: `103`,
    231: `104`,
    232: `105`,
    233: `106`,
    234: `106`,
    235: `107`,
    236: `107`,
    237: `108`,
    238: `108`,
    239: `110`,
    24: `2`,
    240: `110`,
    241: `112`,
    242: `112`,
    243: `113`,
    244: `113`,
    245: `113`,
    246: `115`,
    247: `116`,
    248: `116`,
    249: `117`,
    25: `2`,
    250: `117`,
    251: `118`,
    252: `118`,
    253: `119`,
    254: `119`,
    255: `119`,
    256: `121`,
    257: `121`,
    258: `122`,
    259: `122`,
    26: `2`,
    260: `123`,
    261: `124`,
    262: `126`,
    263: `126`,
    264: `126`,
    265: `128`,
    266: `129`,
    267: `129`,
    268: `130`,
    269: `130`,
    27: `2`,
    270: `131`,
    271: `131`,
    272: `131`,
    273: `133`,
    274: `133`,
    275: `134`,
    276: `134`,
    277: `134`,
    278: `136`,
    279: `136`,
    28: `2`,
    280: `136`,
    281: `136`,
    282: `136`,
    283: `136`,
    284: `137`,
    285: `137`,
    286: `138`,
    287: `139`,
    288: `141`,
    289: `142`,
    29: `4`,
    290: `144`,
    291: `144`,
    292: `145`,
    293: `146`,
    294: `147`,
    295: `147`,
    296: `148`,
    297: `148`,
    298: `149`,
    299: `149`,
    3: `2`,
    30: `4`,
    300: `150`,
    301: `151`,
    302: `151`,
    303: `152`,
    304: `152`,
    305: `153`,
    306: `153`,
    307: `154`,
    308: `155`,
    309: `155`,
    31: `5`,
    310: `156`,
    311: `156`,
    312: `157`,
    313: `157`,
    314: `158`,
    315: `159`,
    316: `163`,
    317: `164`,
    318: `164`,
    319: `165`,
    32: `5`,
    320: `165`,
    321: `165`,
    322: `165`,
    323: `165`,
    324: `165`,
    325: `165`,
    326: `165`,
    327: `165`,
    328: `165`,
    329: `166`,
    33: `5`,
    330: `166`,
    331: `167`,
    332: `168`,
    333: `169`,
    334: `169`,
    335: `170`,
    336: `170`,
    337: `171`,
    338: `171`,
    339: `172`,
    34: `6`,
    340: `172`,
    341: `172`,
    342: `173`,
    343: `174`,
    344: `174`,
    345: `174`,
    346: `175`,
    347: `176`,
    348: `176`,
    349: `177`,
    35: `7`,
    350: `178`,
    351: `179`,
    352: `180`,
    353: `180`,
    354: `181`,
    355: `181`,
    356: `182`,
    357: `183`,
    358: `183`,
    359: `184`,
    36: `8`,
    360: `185`,
    361: `185`,
    362: `186`,
    363: `187`,
    364: `187`,
    365: `188`,
    366: `189`,
    367: `190`,
    368: `190`,
    369: `191`,
    37: `9`,
    370: `191`,
    371: `193`,
    372: `193`,
    373: `194`,
    374: `194`,
    375: `195`,
    376: `195`,
    377: `195`,
    378: `196`,
    379: `197`,
    38: `10`,
    380: `198`,
    381: `198`,
    382: `199`,
    383: `199`,
    384: `200`,
    385: `200`,
    386: `201`,
    387: `201`,
    388: `203`,
    389: `203`,
    39: `11`,
    390: `204`,
    391: `204`,
    392: `204`,
    393: `204`,
    394: `204`,
    395: `204`,
    396: `205`,
    397: `205`,
    398: `206`,
    399: `206`,
    4: `2`,
    40: `11`,
    400: `207`,
    401: `208`,
    402: `208`,
    403: `209`,
    404: `209`,
    405: `210`,
    406: `211`,
    407: `211`,
    408: `212`,
    409: `212`,
    41: `12`,
    410: `213`,
    411: `213`,
    412: `214`,
    413: `214`,
    414: `215`,
    415: `215`,
    416: `216`,
    417: `220`,
    418: `220`,
    419: `221`,
    42: `13`,
    420: `222`,
    421: `222`,
    422: `223`,
    423: `224`,
    424: `224`,
    425: `225`,
    426: `226`,
    427: `227`,
    428: `228`,
    429: `228`,
    43: `14`,
    430: `228`,
    431: `229`,
    432: `229`,
    433: `229`,
    434: `230`,
    435: `231`,
    436: `231`,
    437: `232`,
    438: `232`,
    439: `232`,
    44: `14`,
    440: `232`,
    441: `232`,
    442: `232`,
    443: `232`,
    444: `232`,
    445: `232`,
    446: `232`,
    447: `233`,
    448: `233`,
    449: `234`,
    45: `15`,
    450: `235`,
    451: `236`,
    452: `236`,
    453: `237`,
    454: `238`,
    455: `238`,
    456: `239`,
    457: `240`,
    458: `241`,
    459: `242`,
    46: `16`,
    460: `242`,
    461: `243`,
    462: `243`,
    463: `244`,
    464: `245`,
    465: `248`,
    466: `248`,
    467: `249`,
    468: `249`,
    469: `250`,
    47: `17`,
    470: `251`,
    471: `252`,
    472: `252`,
    473: `253`,
    474: `253`,
    475: `254`,
    476: `255`,
    477: `258`,
    478: `258`,
    479: `259`,
    48: `18`,
    480: `259`,
    481: `260`,
    482: `261`,
    483: `261`,
    484: `263`,
    485: `263`,
    486: `264`,
    487: `264`,
    488: `264`,
    489: `265`,
    49: `19`,
    490: `265`,
    491: `266`,
    492: `266`,
    493: `267`,
    494: `267`,
    495: `267`,
    496: `268`,
    497: `268`,
    498: `270`,
    499: `270`,
    5: `2`,
    50: `21`,
    500: `271`,
    501: `271`,
    502: `271`,
    503: `273`,
    504: `274`,
    505: `274`,
    506: `275`,
    507: `275`,
    508: `276`,
    509: `276`,
    51: `21`,
    510: `277`,
    511: `277`,
    512: `277`,
    513: `278`,
    514: `278`,
    515: `278`,
    516: `280`,
    517: `280`,
    518: `281`,
    519: `282`,
    52: `21`,
    520: `283`,
    521: `286`,
    522: `286`,
    523: `286`,
    524: `287`,
    525: `287`,
    526: `288`,
    527: `288`,
    528: `290`,
    529: `290`,
    53: `21`,
    530: `291`,
    531: `292`,
    532: `293`,
    533: `295`,
    534: `295`,
    535: `295`,
    536: `297`,
    537: `297`,
    538: `298`,
    539: `298`,
    54: `21`,
    540: `299`,
    541: `299`,
    542: `300`,
    543: `301`,
    544: `302`,
    545: `302`,
    546: `303`,
    547: `303`,
    548: `304`,
    549: `304`,
    55: `21`,
    550: `304`,
    551: `305`,
    552: `305`,
    553: `306`,
    554: `306`,
    555: `307`,
    556: `307`,
    557: `308`,
    558: `309`,
    559: `309`,
    56: `21`,
    560: `310`,
    561: `310`,
    562: `311`,
    563: `311`,
    564: `312`,
    565: `313`,
    566: `313`,
    567: `314`,
    568: `314`,
    569: `315`,
    57: `21`,
    570: `315`,
    571: `316`,
    572: `317`,
    573: `317`,
    574: `318`,
    575: `318`,
    576: `319`,
    577: `319`,
    578: `320`,
    579: `321`,
    58: `21`,
    580: `321`,
    581: `322`,
    582: `322`,
    583: `322`,
    584: `322`,
    585: `322`,
    586: `322`,
    587: `323`,
    588: `323`,
    589: `324`,
    59: `21`,
    590: `325`,
    591: `326`,
    592: `326`,
    593: `327`,
    594: `328`,
    595: `328`,
    596: `329`,
    597: `330`,
    598: `331`,
    599: `331`,
    6: `2`,
    60: `21`,
    600: `332`,
    601: `333`,
    602: `334`,
    603: `334`,
    604: `335`,
    605: `336`,
    606: `337`,
    607: `337`,
    608: `338`,
    609: `339`,
    61: `21`,
    610: `340`,
    611: `342`,
    612: `342`,
    613: `343`,
    614: `343`,
    615: `343`,
    616: `344`,
    617: `344`,
    618: `345`,
    619: `345`,
    62: `21`,
    620: `345`,
    621: `346`,
    622: `348`,
    623: `348`,
    624: `349`,
    625: `349`,
    626: `350`,
    627: `350`,
    628: `350`,
    629: `352`,
    63: `21`,
    630: `352`,
    631: `353`,
    632: `353`,
    633: `354`,
    634: `355`,
    635: `355`,
    636: `356`,
    637: `357`,
    638: `358`,
    639: `358`,
    64: `21`,
    640: `359`,
    641: `360`,
    642: `361`,
    643: `361`,
    644: `362`,
    645: `363`,
    646: `364`,
    647: `364`,
    648: `365`,
    649: `366`,
    65: `21`,
    650: `367`,
    651: `368`,
    652: `368`,
    653: `370`,
    654: `370`,
    655: `371`,
    656: `371`,
    657: `372`,
    658: `373`,
    659: `373`,
    66: `21`,
    660: `374`,
    661: `374`,
    662: `374`,
    663: `375`,
    664: `376`,
    665: `377`,
    666: `378`,
    667: `378`,
    668: `378`,
    669: `379`,
    67: `21`,
    670: `380`,
    671: `381`,
    672: `381`,
    673: `382`,
    674: `383`,
    675: `383`,
    676: `384`,
    677: `385`,
    678: `386`,
    679: `387`,
    68: `21`,
    680: `387`,
    681: `388`,
    682: `389`,
    683: `390`,
    684: `392`,
    685: `392`,
    686: `392`,
    687: `393`,
    688: `393`,
    689: `393`,
    69: `21`,
    690: `395`,
    691: `396`,
    692: `396`,
    693: `397`,
    694: `398`,
    695: `400`,
    696: `401`,
    697: `401`,
    698: `401`,
    699: `402`,
    7: `2`,
    70: `21`,
    700: `402`,
    701: `403`,
    702: `404`,
    703: `404`,
    704: `404`,
    705: `405`,
    706: `405`,
    707: `406`,
    708: `407`,
    709: `407`,
    71: `21`,
    710: `408`,
    711: `409`,
    712: `409`,
    713: `410`,
    714: `411`,
    715: `411`,
    716: `412`,
    717: `413`,
    718: `413`,
    719: `414`,
    72: `21`,
    720: `415`,
    721: `415`,
    722: `416`,
    723: `417`,
    724: `417`,
    725: `418`,
    726: `418`,
    727: `419`,
    728: `420`,
    729: `420`,
    73: `21`,
    730: `421`,
    731: `421`,
    732: `422`,
    733: `423`,
    734: `423`,
    735: `424`,
    736: `424`,
    737: `424`,
    738: `424`,
    739: `424`,
    74: `21`,
    740: `424`,
    741: `425`,
    742: `425`,
    743: `426`,
    744: `427`,
    745: `428`,
    746: `430`,
    747: `430`,
    748: `431`,
    749: `431`,
    75: `21`,
    750: `431`,
    751: `432`,
    752: `432`,
    753: `433`,
    754: `433`,
    755: `436`,
    756: `436`,
    757: `437`,
    758: `437`,
    759: `438`,
    76: `21`,
    760: `439`,
    761: `440`,
    762: `441`,
    763: `441`,
    764: `442`,
    765: `443`,
    766: `443`,
    767: `444`,
    768: `444`,
    769: `445`,
    77: `21`,
    770: `445`,
    771: `446`,
    772: `447`,
    773: `448`,
    774: `448`,
    775: `449`,
    776: `449`,
    777: `450`,
    778: `451`,
    779: `452`,
    78: `21`,
    780: `452`,
    781: `453`,
    782: `453`,
    783: `454`,
    784: `455`,
    785: `456`,
    786: `456`,
    787: `457`,
    788: `458`,
    789: `461`,
    79: `21`,
    790: `461`,
    791: `462`,
    792: `462`,
    793: `463`,
    794: `464`,
    795: `467`,
    796: `468`,
    797: `468`,
    798: `469`,
    799: `470`,
    8: `2`,
    80: `21`,
    800: `470`,
    801: `471`,
    802: `472`,
    803: `473`,
    804: `474`,
    805: `474`,
    806: `475`,
    807: `475`,
    808: `476`,
    809: `477`,
    81: `21`,
    810: `477`,
    811: `478`,
    812: `479`,
    813: `479`,
    814: `480`,
    815: `481`,
    816: `481`,
    817: `482`,
    818: `483`,
    819: `484`,
    82: `22`,
    820: `484`,
    821: `485`,
    822: `486`,
    823: `487`,
    824: `487`,
    825: `488`,
    826: `488`,
    827: `489`,
    828: `489`,
    829: `490`,
    83: `22`,
    830: `490`,
    831: `492`,
    832: `492`,
    833: `493`,
    834: `493`,
    835: `493`,
    836: `493`,
    837: `493`,
    838: `493`,
    839: `494`,
    84: `22`,
    840: `494`,
    841: `495`,
    842: `495`,
    843: `497`,
    844: `498`,
    845: `498`,
    846: `499`,
    847: `499`,
    848: `500`,
    849: `500`,
    85: `23`,
    850: `501`,
    851: `502`,
    852: `502`,
    853: `503`,
    854: `504`,
    855: `504`,
    856: `505`,
    857: `506`,
    858: `507`,
    859: `507`,
    86: `23`,
    860: `508`,
    861: `508`,
    862: `509`,
    863: `510`,
    864: `510`,
    865: `511`,
    866: `511`,
    867: `512`,
    868: `513`,
    869: `513`,
    87: `23`,
    870: `514`,
    871: `514`,
    872: `515`,
    873: `516`,
    874: `516`,
    875: `517`,
    876: `520`,
    877: `520`,
    878: `521`,
    879: `522`,
    88: `23`,
    880: `522`,
    881: `523`,
    882: `524`,
    883: `524`,
    884: `525`,
    885: `526`,
    886: `527`,
    887: `528`,
    888: `528`,
    889: `528`,
    89: `23`,
    890: `529`,
    891: `529`,
    892: `529`,
    893: `530`,
    894: `531`,
    895: `531`,
    896: `532`,
    897: `532`,
    898: `532`,
    899: `532`,
    9: `2`,
    90: `23`,
    900: `532`,
    901: `532`,
    902: `532`,
    903: `532`,
    904: `532`,
    905: `532`,
    906: `533`,
    907: `533`,
    908: `534`,
    909: `535`,
    91: `23`,
    910: `536`,
    911: `536`,
    912: `537`,
    913: `537`,
    914: `538`,
    915: `539`,
    916: `539`,
    917: `540`,
    918: `541`,
    919: `542`,
    92: `23`,
    920: `543`,
    921: `547`,
    922: `547`,
    923: `548`,
    924: `548`,
    925: `549`,
    926: `550`,
    927: `550`,
    928: `551`,
    929: `552`,
    93: `23`,
    930: `553`,
    931: `553`,
    932: `554`,
    933: `555`,
    934: `556`,
    935: `556`,
    936: `557`,
    937: `558`,
    938: `559`,
    939: `559`,
    94: `23`,
    940: `560`,
    941: `561`,
    942: `562`,
    943: `563`,
    944: `564`,
    945: `565`,
    946: `565`,
    947: `566`,
    948: `566`,
    949: `566`,
    95: `23`,
    950: `568`,
    951: `568`,
    952: `568`,
    953: `569`,
    954: `569`,
    955: `570`,
    956: `570`,
    957: `570`,
    958: `571`,
    959: `571`,
    96: `23`,
    960: `571`,
    961: `572`,
    962: `572`,
    963: `573`,
    964: `573`,
    965: `573`,
    966: `575`,
    967: `575`,
    968: `575`,
    969: `576`,
    97: `23`,
    970: `576`,
    971: `576`,
    972: `577`,
    973: `577`,
    974: `578`,
    975: `578`,
    976: `578`,
    977: `580`,
    978: `580`,
    979: `580`,
    98: `23`,
    980: `581`,
    981: `581`,
    982: `581`,
    983: `582`,
    984: `582`,
    985: `583`,
    986: `583`,
    987: `583`,
    988: `585`,
    989: `586`,
    99: `25`,
    990: `586`,
    991: `587`,
    992: `588`,
    993: `589`,
    994: `589`,
    995: `590`,
    996: `590`,
    997: `591`,
    998: `592`,
    999: `593`
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
  warnings: [`Step 1 calls a remote object at /app/limitOrder.rsh:56:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/limitOrder.rsh:98:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"bool","name":"tokB","type":"bool"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T6","name":"v3924","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"bool","name":"tokB","type":"bool"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_3029","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_3029","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v3456","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3517","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3718","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v3742","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v3800","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Cancel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v3918","type":"address"},{"internalType":"bool","name":"v3919","type":"bool"},{"internalType":"uint256","name":"v3920","type":"uint256"},{"internalType":"uint256","name":"v3921","type":"uint256"}],"name":"SwapViaPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v3927","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_3029","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_3029","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v3930","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"opts","outputs":[{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"bool","name":"tokB","type":"bool"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620024e838819003601f8101601f191683016001600160401b038111848210176200049e578392829160405283398101039061018082126200050c576040519160e08301906001600160401b038211848310176200049e5760c09160405282518452601f1901126200050c576101606200012991604051620000838162000511565b62000091602083016200052d565b8152620000a16040830162000542565b60208201526060820151604082015260808201516060820152620000c860a083016200052d565b6080820152620000db60c083016200052d565b60a08201526020850152620000f360e082016200052d565b604085015262000107610100820162000542565b6060850152610120810151608085015261014081015160a0850152016200052d565b60c082015243600355604051608081016001600160401b038111828210176200049e5760405260008152600060208201526000604082015260606200016d62000550565b91015260ff60045416620004f3577f0e8c6afe153e45c27ad11d5ffa29dac436b2722d9a3444ea385c425e6ce6d9056101a060405133815283516020820152620001c06020850151604083019062000593565b60408401516001600160a01b0390811661010083015260608501511515610120830152608085015161014083015260a085015161016083015260c085015116610180820152a180518015908115620004e6575b5015620004cd5734620004b457604051906200022f8262000511565b600082526200023d62000550565b6020830152600060408301526000606083015260006080830152600060a08301523382526020810151602083015260018060a01b0360408201511660408301526080810151606083015260a0810151608083015260c060018060a01b039101511660a082015260016000554360015560405190336020830152620002ca6020820151604084019062000593565b60408101516001600160a01b039081166101008401526060820151610120840152608082015161014084015260a0909101511661016080830191909152815261018081018181106001600160401b038211176200049e5760405280516001600160401b0381116200049e57600254600181811c9116801562000493575b60208210146200047d57601f811162000413575b50602091601f8211600114620003a9579181926000926200039d575b50508160011b916000199060031b1c1916176002555b604051611f0f9081620005d98239f35b01519050388062000377565b601f19821692600260005260206000209160005b858110620003fa57508360019510620003e0575b505050811b016002556200038d565b015160001960f88460031b161c19169055388080620003d1565b91926020600181928685015181550194019201620003bd565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000472575b601f0160051c01905b8181106200046557506200035b565b6000815560010162000456565b90915081906200044d565b634e487b7160e01b600052602260045260246000fd5b90607f169062000347565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000213565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b60c081019081106001600160401b038211176200049e57604052565b51906001600160a01b03821682036200050c57565b519081151582036200050c57565b6040519060c082016001600160401b038111838210176200049e576040528160a06000918281528260208201528260408201528260608201528260808201520152565b60a09081600180821b0391828151168552602081015115156020860152604081015160408601526060810151606086015282608082015116608086015201511691015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081630a47debc146100bb575080631e93b0f1146100b25780634aa8e773146100a9578063573b8510146100a05780635e43ae8e1461009757806382b7c09b1461008e57806383230757146100855763ab53f2c60361000e57610080610722565b61000e565b50610080610703565b5061008061064c565b50610080610544565b506100806101ef565b50610080610197565b50610080610173565b3461011f578060031936011261011f57606060c0916100d8610947565b506100ee60026100e6610979565b9254146114bd565b60206101096100fb61089c565b828082518301019101610b78565b0151918291015261011d604051809261012e565bf35b80fd5b6001600160a01b031690565b60a09081600180821b03918281511685526020810151151560208601526040810151604086015260608101516060860152826080820151166080860152015116910152565b5034610192576000366003190112610192576020600354604051908152f35b600080fd5b506000366003190112610192576020806101af610979565b6101e3816101bb6109f0565b84810190600082515251151585825101526101d46109f0565b90600082525185820152610d94565b01511515604051908152f35b5060208060031936011261019257610205610979565b506040906102b2825191610218836107e5565b600435835283610226611b65565b60009461023660018754146114dd565b61024f61024161089c565b858082518301019101611bdd565b958695869261026f61026a61026660045460ff1690565b1590565b6114fd565b8551338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a151801590811561051d575b5061151d565b6102bc341561153d565b83820180516102ca90610122565b916060840192835133916102dd92611e62565b6102e69061155d565b835133906001600160a01b03906102fc90610122565b16146103079061157d565b845160019052815161031890610122565b868651019061032691611b37565b8685019080825152808883510152825161033f90610122565b3061034991611ae8565b9060c0870191825280479360a0890194855261036d600160ff196004541617600455565b875161037890610122565b90828c8b519251938d8b519c6080019c8d51915196879485019663014d07ad60e21b88523060248701956103ab96611c62565b039d601f199e8f810185526103c09085610879565b60a001516103cd90610122565b6103d690610122565b9251925af16103e3610c64565b6103ec916117fd565b506103fc60ff1960045416600455565b30835161040890610122565b9061041291611ae8565b905180820360e0880152610426911461159d565b47905190036060850190815152516080850190808252865161045c81928291909160208060408301948051845201511515910152565b037f8af052c4f3ffdd913fd5beb00304887c9f67ed797e397c66995211a858feaca391a151511561048c906115bd565b85610495611cac565b9880516104a190610122565b6104ab908b611b37565b015186890152516104bb90610122565b6104c790888601611b37565b5160608701525160808601520151151560a084015260026000554360015583519283918201906104f691611ce4565b0390810182526105069082610879565b61050f90611d7f565b5160008152602090f35b0390f35b905060015414386102ac565b6001600160a01b0381160361019257565b8015150361019257565b5060803660031901126101925761051960043561056081610529565b61063b60243561056f8161053a565b610577610979565b61057f6109a8565b9360018060a01b031684526020840191151582526106348160409586948582016044358152606083019060643582526105fe6105f28951946105c08661080d565b6105c86109a8565b86526105ec6105e560208801986105dd6109cd565b8a5251610122565b8751611b37565b51151590565b60208551019015159052565b51878351015251606082510152610616825160019052565b5185825101526106246109f0565b9060008252516020820152610d94565b0151151590565b905190151581529081906020820190565b5060e036600319011261019257610661610979565b6040908151906106708261080d565b600435825260c03660231901126101925782519161068d83610828565b60243560028110156101925783526044356106a78161053a565b602084015260803660631901126101925761050f9284516106c781610843565b6064356106d381610529565b81526084356106e18161053a565b602082015260a4358682015260c4356060820152858201526020820152610d94565b5034610192576000366003190112610192576020600154604051908152f35b50346101925760008060031936011261011f57805461073f61089c565b906040519283918252602090604082840152835191826040850152815b83811061077d57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161075c565b90600182811c921680156107c4575b60208310146107ae57565b634e487b7160e01b600052602260045260246000fd5b91607f16916107a3565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761080057604052565b6108086107ce565b604052565b604081019081106001600160401b0382111761080057604052565b606081019081106001600160401b0382111761080057604052565b608081019081106001600160401b0382111761080057604052565b60c081019081106001600160401b0382111761080057604052565b601f909101601f19168101906001600160401b0382119082101761080057604052565b60405190600082600254916108b083610794565b80835260019380851690811561092657506001146108d8575b506108d692500383610879565b565b60026000908152600080516020611ee383398151915294602093509091905b81831061090e5750506108d69350820101386108c9565b855488840185015294850194879450918301916108f7565b90506108d694506020925060ff191682840152151560051b820101386108c9565b604051906109548261085e565b8160a06000918281528260208201528260408201528260608201528260808201520152565b6040519061098682610843565b8160008152600060208201526000604082015260606109a3610947565b910152565b604051906109b582610843565b60006060838281528260208201528260408201520152565b604051906109da82610828565b81600081526000602082015260406109a36109a8565b604051906109fd8261080d565b816000815260206109a36109cd565b60021115610a1657565b634e487b7160e01b600052602160045260246000fd5b60405190610a398261080d565b60006020838281520152565b60405190610a528261080d565b816000815260206109a3610a2c565b604051906101a082016001600160401b03811183821017610af7575b60405281610a896109a8565b8152610a93610a45565b6020820152610aa0610a45565b6040820152610180600091826060820152610ab9610a45565b6080820152610ac6610a45565b60a08201528260c08201528260e0820152826101008201528261012082015282610140820152826101608201520152565b610aff6107ce565b610a7d565b91908260c091031261019257604051610b1c8161085e565b60a08082948051610b2c81610529565b84526020810151610b3c8161053a565b602085015260408101516040850152606081015160608501526080810151610b6381610529565b6080850152015191610b7483610529565b0152565b610160818303126101925761014090610bad60405193610b978561085e565b8251610ba281610529565b855260208301610b04565b602084015260e0810151610bc081610529565b6040840152610100810151606084015261012081015160808401520151610be68161053a565b60a082015290565b90606060e0919493946040602061010086019760018060a01b03809416875280518288015201518051610c2081610a0c565b82870152602081015115158487015201519081511660808501526020810151151560a0850152604081015160c08501520151910152565b51610c6181610a0c565b90565b3d15610cac573d906001600160401b038211610c9f575b60405191610c93601f8201601f191660200184610879565b82523d6000602084013e565b610ca76107ce565b610c7b565b606090565b9081604091031261019257602060405191610ccb8361080d565b805183520151602082015290565b8151815260209182015180518383015290910151604082015260600190565b506040513d6000823e3d90fd5b818110610d10575050565b60008155600101610d05565b610d27600254610794565b80610d2f5750565b601f8111600114610d4257506000600255565b6002600052610d8790601f0160051c600080516020611ee3833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610d05565b6000602081208160025555565b90610d9d610a61565b600092610dad60028554146115dd565b83610db661089c565b610dca602091828082518301019101610b78565b93610de2610ddd61026660045460ff1690565b6115fd565b816040947f777de14fc85a1499bf334c9d8f8617049165fc617a06b7359e02f68714658fa1865180610e15843383610bee565b0390a1610e2d8151801590811561148e575b5061161d565b01610e388151610c57565b610e4181610a0c565b610ee057505090610ead9291610ecc95610e5b34156117bd565b610e77610e70610e6b8851610122565b610122565b33146117dd565b8351600081527f6183c98c2d864e7ed841815b1e75310ea482cf3bf1406fc3315807b8f02868f990602090a10152820151610122565b6060610eb98351610122565b920151916001600160a01b0316906119f7565b8055610ed86000600155565b6108d6610d1c565b92509294936001610ef18451610c57565b610efa81610a0c565b14610f09575b50505050505050565b85879695879695879687965101518152610f23341561163d565b8583808351015193610f3c60608801958651101561165d565b8151600081527f95ad1ee1f3194ba235d8dfd4ad8c88970200fb6cd83e5fd5afc734fe7c0d0df990602090a10152805185810151156112105750828401928351610f8590610122565b8251828151610f9390610122565b910151610fab9290916001600160a01b031690611a9a565b610fb49061171d565b8351610fbf90610122565b30610fc991611ae8565b95818351019687519003906101008401918252479760e08501988952610ff7600160ff196004541617600455565b51608088018051855163c8867ae960e01b85820190815260248201949094526044808201929092529081529099918b918291611034606483610879565b88515183906001600160a01b031661104b90610122565b9251925af192611059610c64565b93846110649161185b565b5061107460ff1960045416600455565b30885161108090610122565b9061108a91611ae8565b905180820361012088015261109f911461173d565b86516110aa90610122565b8551516001600160a01b03166110bf90610122565b306110c99261198a565b156110d39061175d565b47905190039181850192835152818082518301019101906110f391610cb1565b90825101525181830190808252825161110d819282610cd9565b037f09412ef6769cb6c7619555f90bb7977b45a3456750f12c082a2082343e33569b91a1805151875111156111419061177d565b5151865161114e9161149a565b93606083019480865283516060015111156111689061179d565b5161117290610122565b9251915101516111819161149a565b3361118b926119f7565b5190839084808080861596610e6b966111b298611207575b3390f1156111fa575b51610122565b9051908282156111f1575bf1156111e4575b80556111d06000600155565b6111d8610d1c565b38808080808080610f00565b6111ec610cf8565b6111c4565b506108fc6111bd565b611202610cf8565b6111ac565b506108fc6111a3565b9280850193845161122090610122565b9082815161122d90610122565b9101516112459290916001600160a01b031690611a9a565b61124e9061167d565b835161125990610122565b3061126391611ae8565b9581835101968751900390610160840191825247976101408501988952611292600160ff196004541617600455565b51608088018051855163dc8d714f60e01b85820190815260248201949094526044808201929092529081529099918b9182916112cf606483610879565b88515183906001600160a01b03166112e690610122565b9251925af1926112f4610c64565b93846112ff9161182d565b5061130f60ff1960045416600455565b30885161131b90610122565b9061132591611ae8565b905180820361018088015261133a911461169d565b865161134590610122565b8551516001600160a01b031661135a90610122565b306113649261198a565b1561136e906116bd565b47905190039160808501928351528180825183010191019061138f91610cb1565b90825101525160a083019080825282516113aa819282610cd9565b037f8ebaacb11c08948cf050a6afa39da41ad80f71b311598787ebe5980e4ff0e06191a1805151875111156113de906116dd565b515186516113eb9161149a565b9360c08301948086528351606001511115611405906116fd565b5161140f90610122565b92519151015161141e9161149a565b33611428926119f7565b5190839084808080861596610e6b9661144d98611207573390f1156111fa5751610122565b905190828215611485575bf115611478575b805561146b6000600155565b611473610d1c565b6111d8565b611480610cf8565b61145f565b506108fc611458565b90506001541438610e27565b9081039081116114a75790565b634e487b7160e01b600052601160045260246000fd5b156114c457565b60405163100960cb60e01b815260076004820152602490fd5b156114e457565b60405163100960cb60e01b8152600b6004820152602490fd5b1561150457565b60405163100960cb60e01b8152600c6004820152602490fd5b1561152457565b60405163100960cb60e01b8152600d6004820152602490fd5b1561154457565b60405163100960cb60e01b8152600e6004820152602490fd5b1561156457565b60405163100960cb60e01b8152600f6004820152602490fd5b1561158457565b60405163100960cb60e01b815260106004820152602490fd5b156115a457565b60405163100960cb60e01b815260116004820152602490fd5b156115c457565b60405163100960cb60e01b815260136004820152602490fd5b156115e457565b60405163100960cb60e01b815260146004820152602490fd5b1561160457565b60405163100960cb60e01b815260156004820152602490fd5b1561162457565b60405163100960cb60e01b815260166004820152602490fd5b1561164457565b60405163100960cb60e01b815260196004820152602490fd5b1561166457565b60405163100960cb60e01b8152601a6004820152602490fd5b1561168457565b60405163100960cb60e01b815260216004820152602490fd5b156116a457565b60405163100960cb60e01b815260236004820152602490fd5b156116c457565b60405163100960cb60e01b815260226004820152602490fd5b156116e457565b60405163100960cb60e01b815260256004820152602490fd5b1561170457565b60405163100960cb60e01b815260266004820152602490fd5b1561172457565b60405163100960cb60e01b8152601b6004820152602490fd5b1561174457565b60405163100960cb60e01b8152601d6004820152602490fd5b1561176457565b60405163100960cb60e01b8152601c6004820152602490fd5b1561178457565b60405163100960cb60e01b8152601f6004820152602490fd5b156117a457565b60405163100960cb60e01b815260206004820152602490fd5b156117c457565b60405163100960cb60e01b815260176004820152602490fd5b156117e457565b60405163100960cb60e01b815260186004820152602490fd5b156118055790565b80511561181457805190602001fd5b60405163100960cb60e01b815260126004820152602490fd5b156118355790565b80511561184457805190602001fd5b602460405163100960cb60e01b8152816004820152fd5b156118635790565b80511561187257805190602001fd5b60405163100960cb60e01b8152601e6004820152602490fd5b156118935790565b8051156118a257805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b156118c35790565b8051156118d257805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156118f35790565b80511561190257805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b156119235790565b80511561193257805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b156119535790565b80511561196257805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610192575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610c61936000938493928491906119d081610843565b5193165af16119e76119e0610c64565b809261188b565b506020808251830101910161197b565b60009190829182611a26611a34611a6397604051928391602083019663a9059cbb60e01b885260248401611a6a565b03601f198101835282610879565b51926001600160a01b03165af1611a53611a4c610c64565b80926118bb565b5060208082518301019101611a85565b1561019257565b6001600160a01b039091168152602081019190915260400190565b908160209103126101925751610c618161053a565b60009190829182611a26611ac9610c6197604051928391602083019663095ea7b360e01b885260248401611a6a565b51926001600160a01b03165af1611a53611ae1610c64565b80926118eb565b60008091610c6193826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152611b2081610828565b5193165af16119e7611b30610c64565b809261191b565b6001600160a01b039091169052565b60405190611b5382610828565b60006040838281528260208201520152565b6040519061010082016001600160401b03811183821017611bd0575b604052600060e083611b91611b46565b8152611b9b611b46565b6020820152826040820152611bae610a2c565b6060820152611bbb610a2c565b60808201528260a08201528260c08201520152565b611bd86107ce565b611b81565b610160818303126101925761014090611bfc60405193610b978561085e565b602084015260e0810151611c0f81610529565b6040840152610100810151606084015261012081015160808401520151610be681610529565b6040908051611c4381610a0c565b83526020818101511515908401528101516001600160a01b0316910152565b6001600160a01b0391821681529116602082015261014081019594936101209391929091611ca291611c98906040860190611c35565b60a0840190611c35565b6101008201520152565b60405190611cb98261085e565b600060a083828152611cc9610947565b60208201528260408201528260608201528260808201520152565b91909161014060a0610160830194600180831b03808251168552611d106020830151602087019061012e565b60408201511660e08501526060810151610100850152608081015161012085015201511515910152565b90601f8211611d47575050565b6108d69160026000526020600020906020601f840160051c83019310611d75575b601f0160051c0190610d05565b9091508190611d68565b80519091906001600160401b038111611e55575b611da781611da2600254610794565b611d3a565b602080601f8311600114611de35750819293600092611dd8575b50508160011b916000199060031b1c191617600255565b015190503880611dc1565b6002600052601f19831694909190600080516020611ee3833981519152926000905b878210611e3d575050836001959610611e24575b505050811b01600255565b015160001960f88460031b161c19169055388080611e19565b80600185968294968601518155019501930190611e05565b611e5d6107ce565b611d93565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610c61936000938493909284919060a081016001600160401b03811182821017611ed5575b6040525193165af1611a53611ece610c64565b809261194b565b611edd6107ce565b611ebb56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 9448,
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
