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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc2], ['amtA', ctc3], ['amtB', ctc3], ['ctcAnnouncer', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v3375, v3376, v3377, v3379, v3380, v3381] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v3375, v3376, v3377, v3379, v3380, v3416] = svs;
      return (await ((async () => {
        
        
        return v3376;}))(...args));
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
    Cancel0_2994: ctc6,
    SwapViaPool0_2994: ctc8
    });
  
  
  const [v3375, v3376, v3377, v3379, v3380, v3416] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]);
  const v3455 = ctc.selfAddress();
  const v3457 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_2994" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v3458 = stdlib.addressEq(v3455, v3375);
  stdlib.assert(v3458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_2994" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v3463 = ['Cancel0_2994', v3457];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3375, v3376, v3377, v3379, v3380, v3416, v3463],
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
      
      
      const {data: [v3468], secs: v3470, time: v3469, didSend: v3143, from: v3467 } = txn1;
      
      switch (v3468[0]) {
        case 'Cancel0_2994': {
          const v3471 = v3468[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v3480 = null;
          const v3481 = await txn1.getOutput('Cancel', 'v3480', ctc2, v3480);
          
          sim_r.txns.push({
            kind: 'from',
            to: v3375,
            tok: v3377
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v3377
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_2994': {
          const v3639 = v3468[1];
          
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
  const {data: [v3468], secs: v3470, time: v3469, didSend: v3143, from: v3467 } = txn1;
  switch (v3468[0]) {
    case 'Cancel0_2994': {
      const v3471 = v3468[1];
      undefined /* setApiDetails */;
      ;
      const v3478 = stdlib.addressEq(v3467, v3375);
      stdlib.assert(v3478, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v3480 = null;
      const v3481 = await txn1.getOutput('Cancel', 'v3480', ctc2, v3480);
      if (v3143) {
        stdlib.protect(ctc2, await interact.out(v3471, v3481), {
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
    case 'SwapViaPool0_2994': {
      const v3639 = v3468[1];
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
    Cancel0_2994: ctc6,
    SwapViaPool0_2994: ctc8
    });
  const ctc10 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc11 = stdlib.T_Tuple([ctc2, ctc10]);
  const ctc12 = stdlib.T_Address;
  
  
  const v3359 = stdlib.protect(ctc4, interact.opts, 'for D\'s interact field opts');
  const v3360 = v3359.tokA;
  const v3361 = v3359.tokB;
  const v3362 = v3359.amtA;
  const v3363 = v3359.amtB;
  const v3364 = v3359.ctcAnnouncer;
  
  const txn1 = await (ctc.sendrecv({
    args: [v3359, v3360, v3361, v3362, v3363, v3364],
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
      
      
      const {data: [v3376, v3377, v3378, v3379, v3380, v3381], secs: v3383, time: v3382, didSend: v2898, from: v3375 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3377
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
  const {data: [v3376, v3377, v3378, v3379, v3380, v3381], secs: v3383, time: v3382, didSend: v2898, from: v3375 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v3375, v3376, v3377, v3379, v3380, v3381],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3382,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:51:5:dot', stdlib.UInt_max, '0'), [[v3379, v3377]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v3395, time: v3394, didSend: v2962, from: v3393 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v3379,
        kind: 'to',
        tok: v3377
        });
      
      const v3411 = await ctc.getContractInfo();
      const v3412 = ['Some', v3377];
      const v3413 = ['None', null];
      const v3416 = [];
      const v3419 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v3381,
          remote: ({
            accs: [v3375],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v3419', ctc5, v3419);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc12, ctc4, ctc0, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3395, time: v3394, didSend: v2962, from: v3393 } = txn2;
  ;
  ;
  const v3404 = stdlib.addressEq(v3375, v3393);
  stdlib.assert(v3404, {
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
  
  const v3411 = await ctc.getContractInfo();
  const v3412 = ['Some', v3377];
  const v3413 = ['None', null];
  const v3416 = [];
  const v3419 = undefined /* Remote */;
  const v3420 = await txn2.getOutput('internal', 'v3419', ctc5, v3419);
  const v3422 = v3420[stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v3428 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3422);
  stdlib.assert(v3428, {
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
  const {data: [v3468], secs: v3470, time: v3469, didSend: v3143, from: v3467 } = txn3;
  switch (v3468[0]) {
    case 'Cancel0_2994': {
      const v3471 = v3468[1];
      undefined /* setApiDetails */;
      ;
      const v3478 = stdlib.addressEq(v3467, v3375);
      stdlib.assert(v3478, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v3480 = null;
      await txn3.getOutput('Cancel', 'v3480', ctc1, v3480);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_2994': {
      const v3639 = v3468[1];
      undefined /* setApiDetails */;
      ;
      const v3671 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v3672 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v3673 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v3674 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v3675 = stdlib.le(v3673, v3379);
      stdlib.assert(v3675, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v3681 = null;
      await txn3.getOutput('SwapViaPool', 'v3681', ctc1, v3681);
      if (v3672) {
        const v3705 = undefined /* Remote */;
        const v3706 = await txn3.getOutput('internal', 'v3705', ctc11, v3705);
        const v3708 = v3706[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3719 = stdlib.ge(v3708, v3380);
        stdlib.assert(v3719, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v3720 = stdlib.safeSub(v3379, v3673);
        const v3721 = stdlib.safeSub(v3708, v3380);
        const v3722 = stdlib.ge(v3721, v3674);
        stdlib.assert(v3722, {
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
        const v3763 = undefined /* Remote */;
        const v3764 = await txn3.getOutput('internal', 'v3763', ctc11, v3763);
        const v3766 = v3764[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3777 = stdlib.ge(v3766, v3380);
        stdlib.assert(v3777, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v3778 = stdlib.safeSub(v3379, v3673);
        const v3779 = stdlib.safeSub(v3766, v3380);
        const v3780 = stdlib.ge(v3779, v3674);
        stdlib.assert(v3780, {
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
    Cancel0_2994: ctc6,
    SwapViaPool0_2994: ctc8
    });
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc10]);
  
  
  const [v3375, v3376, v3377, v3379, v3380, v3416] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc5, ctc1, ctc3, ctc3, ctc6]);
  const v3431 = stdlib.protect(ctc8, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_2994" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v3434 = v3431[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3440 = stdlib.le(v3434, v3379);
  stdlib.assert(v3440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_2994" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v3453 = ['SwapViaPool0_2994', v3431];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3375, v3376, v3377, v3379, v3380, v3416, v3453],
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
      
      
      const {data: [v3468], secs: v3470, time: v3469, didSend: v3143, from: v3467 } = txn1;
      
      switch (v3468[0]) {
        case 'Cancel0_2994': {
          const v3471 = v3468[1];
          
          break;
          }
        case 'SwapViaPool0_2994': {
          const v3639 = v3468[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v3671 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
          const v3672 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
          const v3673 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
          const v3681 = null;
          const v3682 = await txn1.getOutput('SwapViaPool', 'v3681', ctc2, v3681);
          
          if (v3672) {
            const v3705 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v3671,
                remote: ({
                  accs: [],
                  apps: [v3671],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:91:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  toks: [v3377]
                  })
                })
              return [v3380 /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
            const v3706 = await txn1.getOutput('internal', 'v3705', ctc11, v3705);
            const v3708 = v3706[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
            const v3720 = stdlib.safeSub(v3379, v3673);
            const v3721 = stdlib.safeSub(v3708, v3380);
            sim_r.txns.push({
              kind: 'from',
              to: v3467,
              tok: v3377
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3467,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3375,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3377
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3763 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v3671,
                remote: ({
                  accs: [],
                  apps: [v3671],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:91:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '1'),
                  toks: [v3377]
                  })
                })
              return [v3380 /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
            const v3764 = await txn1.getOutput('internal', 'v3763', ctc11, v3763);
            const v3766 = v3764[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
            const v3778 = stdlib.safeSub(v3379, v3673);
            const v3779 = stdlib.safeSub(v3766, v3380);
            sim_r.txns.push({
              kind: 'from',
              to: v3467,
              tok: v3377
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3467,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v3375,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v3377
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
  const {data: [v3468], secs: v3470, time: v3469, didSend: v3143, from: v3467 } = txn1;
  switch (v3468[0]) {
    case 'Cancel0_2994': {
      const v3471 = v3468[1];
      return;
      break;
      }
    case 'SwapViaPool0_2994': {
      const v3639 = v3468[1];
      undefined /* setApiDetails */;
      ;
      const v3671 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v3672 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v3673 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v3674 = v3639[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v3675 = stdlib.le(v3673, v3379);
      stdlib.assert(v3675, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v3681 = null;
      const v3682 = await txn1.getOutput('SwapViaPool', 'v3681', ctc2, v3681);
      if (v3143) {
        stdlib.protect(ctc2, await interact.out(v3639, v3682), {
          at: './limitOrder.rsh:66:11:application',
          fs: ['at ./limitOrder.rsh:66:11:application call to [unknown function] (defined at: ./limitOrder.rsh:66:11:function exp)', 'at ./limitOrder.rsh:69:10:application call to "k" (defined at: ./limitOrder.rsh:68:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v3672) {
        const v3705 = undefined /* Remote */;
        const v3706 = await txn1.getOutput('internal', 'v3705', ctc11, v3705);
        const v3708 = v3706[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3719 = stdlib.ge(v3708, v3380);
        stdlib.assert(v3719, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v3720 = stdlib.safeSub(v3379, v3673);
        const v3721 = stdlib.safeSub(v3708, v3380);
        const v3722 = stdlib.ge(v3721, v3674);
        stdlib.assert(v3722, {
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
        const v3763 = undefined /* Remote */;
        const v3764 = await txn1.getOutput('internal', 'v3763', ctc11, v3763);
        const v3766 = v3764[stdlib.checkedBigNumberify('./limitOrder.rsh:97:15:application', stdlib.UInt_max, '0')];
        const v3777 = stdlib.ge(v3766, v3380);
        stdlib.assert(v3777, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v3778 = stdlib.safeSub(v3379, v3673);
        const v3779 = stdlib.safeSub(v3766, v3380);
        const v3780 = stdlib.ge(v3779, v3674);
        stdlib.assert(v3780, {
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
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAMAAEEAgbhjLn+Dtmtpa8PQEhQCaCNBiYEAAEABWFwcElEAQEiNQAxGEEE2ChkSSJbNQGBCFs1AjYaABdJQQBbIjUEIzUGSSEFDEAAOUkhBgxAABYhBhJENAElEkQpZEk1A1cgIDUHQgSSIQUSRDYaATYaAlA2GgNQNhoEUDX/KzT/UEIAMYG6j+1lEkQoNf8pNP9QgRmvUEIAHDYaAhc1BDYaAzYaARdJIwxAA3FJJQxAAn0lEkQlNAESRDQESSISTDQCEhFEKWRJNQNJSklXACA1/yEHWzX+IQhbNf0hCVs1/EgoNftJNQU1+oAEwWTGXzT6ULA0+iJVQABCMQA0/xJEgAgAAAAAAAANmLAoNQexIrIBNP2yEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgN1NPpXARk1+TT5Ils1+DT5IQpbNfc0+YERWzX2NPc0/Q5EgAgAAAAAAAAOYbAoNQc0+VcIARdBAN0qNPgWUAM19DIKeDXzMgpgNPMJFjXysSKyATT3shIkshA09LIUNP6yEbYisgEhBLIQNPiyGIAEoOj1mbIaNPcWsho0/BayGjT+sjA0+LIyszIKYDTzCTTyFwkWtwE+VwQAUDX1gAgAAAAAAAAOeTT1ULA09Uk19CJbSTXzNPwPRDTzNPwJSTXyNPYPRLEisgE0/TT3CbISJLIQMQCyFDT+shGzsSKyATTysggjshAxALIHs7EisgE0/LIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICYCo0+BZQAzX0Mgp4NfMyCmA08wkWNfKxIrIBNPeyEiSyEDT0shQ0/rIRtiKyASEEshA0+LIYgAR8pHu4sho09xayGjT8FrIaNP6yMDT4sjKzMgpgNPMJNPIXCRa3AT5XBABQNfWACAAAAAAAAA6zNPVQsDT1STX0IltJNfM0/A9ENPM0/AlJNfI09g9EsSKyATT9NPcJshIkshAxALIUNP6yEbOxIrIBNPKyCCOyEDEAsgezsSKyATT8sggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgGDSCM0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/VyAgNf4hB1s1/SEIWzX8IQlbNfuABJqLkXSwNPw0/YgByDT/MQASRCg1+io0A1dYCFADNfgyCng19zIKYDT3CRY19rEisgEhBLIQNAOBWFuyGIAE+pmLTLIaNP9JshyyGjEYFrIaKzT9FlCyGiEKr7IaNPwWsho0+xayGrMyCmA09wk09hcJFrcAPlcEAFA1+YAIAAAAAAAADVs0+VCwNPk1+CI0+CJbEkQ0/zT+UDT9FlA0/BZQNPsWUDT6UClLAVcAWGdIJTUBMgY1AkIAsUghC4gA/CI0ARJENARJIhJMNAISEURJNQVJSkpXACA1/4EgWzX+SCg1/YEoWzX8gTBbNfuBOFs1+oAEXhU+jTT/UDT+FlA0/VA0/BZQNPsWUDT6FlCwIQuIAKexIrIBIrISJLIQMgqyFDT+shGzMQA0/1A0/hZQNPwWUDT7FlA0+hZQKUsBVwBgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"bool","name":"tokB","type":"bool"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T6","name":"v3882","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"bool","name":"tokB","type":"bool"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_2994","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_2994","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v3419","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3480","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3681","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v3705","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v3763","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Cancel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v3873","type":"address"},{"internalType":"bool","name":"v3874","type":"bool"},{"internalType":"uint256","name":"v3875","type":"uint256"},{"internalType":"uint256","name":"v3876","type":"uint256"}],"name":"SwapViaPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v3884","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_2994","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_2994","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v3886","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"opts","outputs":[{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"bool","name":"tokB","type":"bool"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200250638819003601f8101601f191683016001600160401b03811184821017620004b35783928291604052833981010390610160821262000521576040519160e08301906001600160401b03821184831017620004b35760a09160405282518452601f19011262000521576040519060a08201906001600160401b03821183831017620004b357620001279261014092604052620000a36020830162000526565b8152620000b3604083016200053b565b60208201526060820151604082015260808201516060820152620000da60a0830162000526565b60808201526020850152620000f260c0820162000526565b60408501526200010560e082016200053b565b6060850152610100810151608085015261012081015160a08501520162000526565b60c0820152436003556040516001600160401b036080820190811190821117620004b3576080810160405260008152600060208201526000604082015260606200017062000549565b91015260ff6004541662000508577f5207dc63935b565f752cb5135ef5143baae14413d0e0eed0ea5be699fedc395461018060405133815283516020820152620001c36020850151604083019062000585565b60408401516001600160a01b0390811660e083015260608501511515610100830152608085015161012083015260a085015161014083015260c085015116610160820152a180518015908115620004fb575b5015620004e25734620004c957604051906001600160401b0360c0830190811190831117620004b35760c08201604052600082526200025362000549565b6020830152600060408301526000606083015260006080830152600060a08301523382526020810151602083015260018060a01b0360408201511660408301526080810151606083015260a0810151608083015260c060018060a01b039101511660a082015260016000554360015560405190336020830152620002e06020820151604084019062000585565b60408101516001600160a01b0390811660e08401526060820151610100840152608082015161012084015260a0909101511661014080830191909152815261016081018181106001600160401b03821117620004b35760405280516001600160401b038111620004b357600254600181811c91168015620004a8575b60208210146200049257601f811162000428575b50602091601f8211600114620003be57918192600092620003b2575b50508160011b916000199060031b1c1916176002555b604051611f459081620005c18239f35b0151905038806200038c565b601f19821692600260005260206000209160005b8581106200040f57508360019510620003f5575b505050811b01600255620003a2565b015160001960f88460031b161c19169055388080620003e6565b91926020600181928685015181550194019201620003d2565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000487575b601f0160051c01905b8181106200047a575062000370565b600081556001016200046b565b909150819062000462565b634e487b7160e01b600052602260045260246000fd5b90607f16906200035c565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000215565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b51906001600160a01b03821682036200052157565b519081151582036200052157565b6040519060a082016001600160401b03811183821017620004b35760405260006080838281528260208201528260408201528260608201520152565b80516001600160a01b03908116835260208083015115159084015260408083015190840152606080830151908401526080918201511691015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081630a47debc146100bb575080631e93b0f1146100b25780634aa8e773146100a9578063573b8510146100a05780635e43ae8e1461009757806382b7c09b1461008e57806383230757146100855763ab53f2c60361000e57610080610718565b61000e565b506100806106f9565b50610080610642565b5061008061053a565b506100806101e5565b5061008061018d565b50610080610169565b3461011f578060031936011261011f57606060a0916100d861093d565b506100ee60026100e6610986565b9254146114e6565b60206101096100fb610892565b828082518301019101610c08565b0151918291015261011d604051809261012e565bf35b80fd5b6001600160a01b031690565b80516001600160a01b039081168352602080830151151590840152604080830151908401526060808301519084015260809182015116910152565b5034610188576000366003190112610188576020600354604051908152f35b600080fd5b506000366003190112610188576020806101a5610986565b6101d9816101b1610a0c565b84810190600082515251151585825101526101ca610a0c565b90600082525185820152610dba565b01511515604051908152f35b50602080600319360112610188576101fb610986565b506040906102a882519161020e836107db565b60043583528361021c611b7f565b61023761023261022e60045460ff1690565b1590565b611506565b8151338152855160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a16000946102796001875414611526565b610292610284610892565b858082518301019101611bf7565b9586958692518015908115610513575b50611546565b6102b23415611566565b83820180516102c090610122565b916060840192835133916102d392611e98565b6102dc90611586565b835133906001600160a01b03906102f290610122565b16146102fd906115a6565b845160019052815161030e90610122565b868651019061031c916109da565b8685019080825152808883510152825161033590610122565b3061033f91611b11565b9060c0870191825280479360a08901948552610363600160ff196004541617600455565b875161036e90610122565b90828c8b519251938d8b519c6080019c8d51915196879485019663014d07ad60e21b88523060248701956103a196611c7b565b039d601f199e8f810185526103b6908561086f565b60a001516103c390610122565b6103cc90610122565b9251925af16103d9610c8a565b6103e291611826565b506103f260ff1960045416600455565b3083516103fe90610122565b9061040891611b11565b905180820360e088015261041c91146115c6565b47905190036060850190815152516080850190808252865161045281928291909160208060408301948051845201511515910152565b037f07ec34535ece9d0ca33d3008e525b33dee32e82eb3729a7aa5b3cea2938faa7691a1515115610482906115e6565b8561048b611cc5565b98805161049790610122565b6104a1908b6109da565b015186890152516104b190610122565b6104bd908886016109da565b5160608701525160808601520151151560a084015260026000554360015583519283918201906104ec91611d1b565b0390810182526104fc908261086f565b61050590611db5565b5160008152602090f35b0390f35b905060015414386102a2565b6001600160a01b0381160361018857565b8015150361018857565b5060803660031901126101885761050f6004356105568161051f565b61063160243561056581610530565b61056d610986565b6105756109b5565b9360018060a01b0316845260208401911515825261062a8160409586948582016044358152606083019060643582526105f46105e88951946105b686610803565b6105be6109b5565b86526105e26105db60208801986105d36109e9565b8a5251610122565b87516109da565b51151590565b60208551019015159052565b5187835101525160608251015261060c825160019052565b51858251015261061a610a0c565b9060008252516020820152610dba565b0151151590565b905190151581529081906020820190565b5060e036600319011261018857610657610986565b60409081519061066682610803565b600435825260c0366023190112610188578251916106838361081e565b602435600281101561018857835260443561069d81610530565b60208401526080366063190112610188576105059284516106bd81610839565b6064356106c98161051f565b81526084356106d781610530565b602082015260a4358682015260c4356060820152858201526020820152610dba565b5034610188576000366003190112610188576020600154604051908152f35b50346101885760008060031936011261011f578054610735610892565b906040519283918252602090604082840152835191826040850152815b83811061077357505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610752565b90600182811c921680156107ba575b60208310146107a457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610799565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176107f657604052565b6107fe6107c4565b604052565b604081019081106001600160401b038211176107f657604052565b606081019081106001600160401b038211176107f657604052565b608081019081106001600160401b038211176107f657604052565b60c081019081106001600160401b038211176107f657604052565b601f909101601f19168101906001600160401b038211908210176107f657604052565b60405190600082600254916108a68361078a565b80835260019380851690811561091c57506001146108ce575b506108cc9250038361086f565b565b60026000908152600080516020611f1983398151915294602093509091905b8183106109045750506108cc9350820101386108bf565b855488840185015294850194879450918301916108ed565b90506108cc94506020925060ff191682840152151560051b820101386108bf565b6040519060a082016001600160401b03811183821017610979575b60405260006080838281528260208201528260408201528260608201520152565b6109816107c4565b610958565b6040519061099382610839565b8160008152600060208201526000604082015260606109b061093d565b910152565b604051906109c282610839565b60006060838281528260208201528260408201520152565b6001600160a01b039091169052565b604051906109f68261081e565b81600081526000602082015260406109b06109b5565b60405190610a1982610803565b816000815260206109b06109e9565b60021115610a3257565b634e487b7160e01b600052602160045260246000fd5b60405190610a5582610803565b60006020838281520152565b60405190610a6e82610803565b816000815260206109b0610a48565b604051906101a082016001600160401b03811183821017610b13575b60405281610aa56109b5565b8152610aaf610a61565b6020820152610abc610a61565b6040820152610180600091826060820152610ad5610a61565b6080820152610ae2610a61565b60a08201528260c08201528260e0820152826101008201528261012082015282610140820152826101608201520152565b610b1b6107c4565b610a99565b90606060e0919493946040602061010086019760018060a01b03809416875280518288015201518051610b5281610a28565b82870152602081015115158487015201519081511660808501526020810151151560a0850152604081015160c08501520151910152565b91908260a09103126101885760405160a081016001600160401b03811182821017610bfb575b60405260808082948051610bc28161051f565b84526020810151610bd281610530565b60208501526040810151604085015260608101516060850152015191610bf78361051f565b0152565b610c036107c4565b610baf565b610140818303126101885761012090610c3d60405193610c2785610854565b8251610c328161051f565b855260208301610b89565b602084015260c0810151610c508161051f565b604084015260e0810151606084015261010081015160808401520151610c7581610530565b60a082015290565b51610c8781610a28565b90565b3d15610cd2573d906001600160401b038211610cc5575b60405191610cb9601f8201601f19166020018461086f565b82523d6000602084013e565b610ccd6107c4565b610ca1565b606090565b9081604091031261018857602060405191610cf183610803565b805183520151602082015290565b8151815260209182015180518383015290910151604082015260600190565b506040513d6000823e3d90fd5b818110610d36575050565b60008155600101610d2b565b610d4d60025461078a565b80610d555750565b601f8111600114610d6857506000600255565b6002600052610dad90601f0160051c600080516020611f19833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610d2b565b6000602081208160025555565b90610e4091610dc7610a7d565b610dde610dd961022e60045460ff1690565b611606565b6040907f777de14fc85a1499bf334c9d8f8617049165fc617a06b7359e02f68714658fa1825180610e10863383610b20565b0390a16000948591610e256002845414611626565b610e2d610892565b6020928184808094518301019101610c08565b95610e56815180159081156114b7575b50611646565b01610e618151610c7d565b610e6a81610a28565b610f0957505090610ed69291610ef595610e8434156117e6565b610ea0610e99610e948851610122565b610122565b3314611806565b8351600081527f7170462fb9ec8d0ef116bed9b1e9e4c2ed92fbd529293a6f5dd3701c5d7aae6990602090a10152820151610122565b6060610ee28351610122565b920151916001600160a01b031690611a20565b8055610f016000600155565b6108cc610d42565b92509294936001610f1a8451610c7d565b610f2381610a28565b14610f32575b50505050505050565b85879695879695879687965101518152610f4c3415611666565b8583808351015193610f65606088019586511015611686565b8151600081527fca6ee69dc510b9688dcd234bb67dab2604bc5d914e29eb85257c2eb0d8436faa90602090a10152805185810151156112395750828401928351610fae90610122565b8251828151610fbc90610122565b910151610fd49290916001600160a01b031690611ac3565b610fdd90611746565b8351610fe890610122565b30610ff291611b11565b95818351019687519003906101008401918252479760e08501988952611020600160ff196004541617600455565b51608088018051855163c8867ae960e01b85820190815260248201949094526044808201929092529081529099918b91829161105d60648361086f565b88515183906001600160a01b031661107490610122565b9251925af192611082610c8a565b938461108d91611884565b5061109d60ff1960045416600455565b3088516110a990610122565b906110b391611b11565b90518082036101208801526110c89114611766565b86516110d390610122565b8551516001600160a01b03166110e890610122565b306110f2926119b3565b156110fc90611786565b479051900391818501928351528180825183010191019061111c91610cd7565b908251015251818301908082528251611136819282610cff565b037f9e35b9c5e64a589cd9fbe4ff1b7927d1b2d09717a7de68f281279e1481f4690f91a18051518751111561116a906117a6565b51518651611177916114c3565b9360608301948086528351606001511115611191906117c6565b5161119b90610122565b9251915101516111aa916114c3565b336111b492611a20565b5190839084808080861596610e94966111db98611230575b3390f115611223575b51610122565b90519082821561121a575bf11561120d575b80556111f96000600155565b611201610d42565b38808080808080610f29565b611215610d1e565b6111ed565b506108fc6111e6565b61122b610d1e565b6111d5565b506108fc6111cc565b9280850193845161124990610122565b9082815161125690610122565b91015161126e9290916001600160a01b031690611ac3565b611277906116a6565b835161128290610122565b3061128c91611b11565b95818351019687519003906101608401918252479761014085019889526112bb600160ff196004541617600455565b51608088018051855163dc8d714f60e01b85820190815260248201949094526044808201929092529081529099918b9182916112f860648361086f565b88515183906001600160a01b031661130f90610122565b9251925af19261131d610c8a565b938461132891611856565b5061133860ff1960045416600455565b30885161134490610122565b9061134e91611b11565b905180820361018088015261136391146116c6565b865161136e90610122565b8551516001600160a01b031661138390610122565b3061138d926119b3565b15611397906116e6565b4790519003916080850192835152818082518301019101906113b891610cd7565b90825101525160a083019080825282516113d3819282610cff565b037f5681b32e05396a738f5e55c48572cf323d483e42439c27afe389ce7fc410203f91a18051518751111561140790611706565b51518651611414916114c3565b9360c0830194808652835160600151111561142e90611726565b5161143890610122565b925191510151611447916114c3565b3361145192611a20565b5190839084808080861596610e949661147698611230573390f1156112235751610122565b9051908282156114ae575bf1156114a1575b80556114946000600155565b61149c610d42565b611201565b6114a9610d1e565b611488565b506108fc611481565b90506001541438610e50565b9081039081116114d05790565b634e487b7160e01b600052601160045260246000fd5b156114ed57565b60405163100960cb60e01b815260076004820152602490fd5b1561150d57565b60405163100960cb60e01b8152600b6004820152602490fd5b1561152d57565b60405163100960cb60e01b8152600c6004820152602490fd5b1561154d57565b60405163100960cb60e01b8152600d6004820152602490fd5b1561156d57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561158d57565b60405163100960cb60e01b8152600f6004820152602490fd5b156115ad57565b60405163100960cb60e01b815260106004820152602490fd5b156115cd57565b60405163100960cb60e01b815260116004820152602490fd5b156115ed57565b60405163100960cb60e01b815260136004820152602490fd5b1561160d57565b60405163100960cb60e01b815260146004820152602490fd5b1561162d57565b60405163100960cb60e01b815260156004820152602490fd5b1561164d57565b60405163100960cb60e01b815260166004820152602490fd5b1561166d57565b60405163100960cb60e01b815260196004820152602490fd5b1561168d57565b60405163100960cb60e01b8152601a6004820152602490fd5b156116ad57565b60405163100960cb60e01b815260216004820152602490fd5b156116cd57565b60405163100960cb60e01b815260236004820152602490fd5b156116ed57565b60405163100960cb60e01b815260226004820152602490fd5b1561170d57565b60405163100960cb60e01b815260256004820152602490fd5b1561172d57565b60405163100960cb60e01b815260266004820152602490fd5b1561174d57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561176d57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561178d57565b60405163100960cb60e01b8152601c6004820152602490fd5b156117ad57565b60405163100960cb60e01b8152601f6004820152602490fd5b156117cd57565b60405163100960cb60e01b815260206004820152602490fd5b156117ed57565b60405163100960cb60e01b815260176004820152602490fd5b1561180d57565b60405163100960cb60e01b815260186004820152602490fd5b1561182e5790565b80511561183d57805190602001fd5b60405163100960cb60e01b815260126004820152602490fd5b1561185e5790565b80511561186d57805190602001fd5b602460405163100960cb60e01b8152816004820152fd5b1561188c5790565b80511561189b57805190602001fd5b60405163100960cb60e01b8152601e6004820152602490fd5b156118bc5790565b8051156118cb57805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b156118ec5790565b8051156118fb57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561191c5790565b80511561192b57805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b1561194c5790565b80511561195b57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b1561197c5790565b80511561198b57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610188575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610c87936000938493928491906119f981610839565b5193165af1611a10611a09610c8a565b80926118b4565b50602080825183010191016119a4565b60009190829182611a4f611a5d611a8c97604051928391602083019663a9059cbb60e01b885260248401611a93565b03601f19810183528261086f565b51926001600160a01b03165af1611a7c611a75610c8a565b80926118e4565b5060208082518301019101611aae565b1561018857565b6001600160a01b039091168152602081019190915260400190565b908160209103126101885751610c8781610530565b60009190829182611a4f611af2610c8797604051928391602083019663095ea7b360e01b885260248401611a93565b51926001600160a01b03165af1611a7c611b0a610c8a565b8092611914565b60008091610c8793826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152611b498161081e565b5193165af1611a10611b59610c8a565b8092611944565b60405190611b6d8261081e565b60006040838281528260208201520152565b6040519061010082016001600160401b03811183821017611bea575b604052600060e083611bab611b60565b8152611bb5611b60565b6020820152826040820152611bc8610a48565b6060820152611bd5610a48565b60808201528260a08201528260c08201520152565b611bf26107c4565b611b9b565b610140818303126101885761012090611c1660405193610c2785610854565b602084015260c0810151611c298161051f565b604084015260e0810151606084015261010081015160808401520151610c758161051f565b6040908051611c5c81610a28565b83526020818101511515908401528101516001600160a01b0316910152565b6001600160a01b0391821681529116602082015261014081019594936101209391929091611cbb91611cb1906040860190611c4e565b60a0840190611c4e565b6101008201520152565b6040519060c082016001600160401b03811183821017611d0e575b604052600060a083828152611cf361093d565b60208201528260408201528260608201528260808201520152565b611d166107c4565b611ce0565b91909161012060a0610140830194600180831b03808251168552611d476020830151602087019061012e565b60408201511660c0850152606081015160e0850152608081015161010085015201511515910152565b90601f8211611d7d575050565b6108cc9160026000526020600020906020601f840160051c83019310611dab575b601f0160051c0190610d2b565b9091508190611d9e565b80519091906001600160401b038111611e8b575b611ddd81611dd860025461078a565b611d70565b602080601f8311600114611e195750819293600092611e0e575b50508160011b916000199060031b1c191617600255565b015190503880611df7565b6002600052601f19831694909190600080516020611f19833981519152926000905b878210611e73575050836001959610611e5a575b505050811b01600255565b015160001960f88460031b161c19169055388080611e4f565b80600185968294968601518155019501930190611e3b565b611e936107c4565b611dc9565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610c87936000938493909284919060a081016001600160401b03811182821017611f0b575b6040525193165af1611a7c611f04610c8a565b8092611974565b611f136107c4565b611ef156fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 9478,
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
