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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3]]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v4566, v4567, v4568, v4569, v4570, v4571, v4572] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4566, v4567, v4568, v4569, v4570, v4571] = svs;
      return (await ((async () => {
        
        
        return v4567;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      opts: {
        decode: _opts,
        dom: [],
        rng: ctc4
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc3],
      2: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3]]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc6, ctc2, ctc2]);
  const ctc8 = stdlib.T_Data({
    Cancel0_4095: ctc5,
    SwapViaPool0_4095: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v4566, v4567, v4568, v4569, v4570, v4571] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]);
  const v4654 = ctc.selfAddress();
  const v4656 = stdlib.protect(ctc5, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_4095" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v4657 = stdlib.addressEq(v4654, v4566);
  stdlib.assert(v4657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_4095" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v4662 = ['Cancel0_4095', v4656];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4566, v4567, v4568, v4569, v4570, v4571, v4662],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:117:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4667], secs: v4669, time: v4668, didSend: v4244, from: v4666 } = txn1;
      
      switch (v4667[0]) {
        case 'Cancel0_4095': {
          const v4670 = v4667[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v4679 = null;
          const v4680 = await txn1.getOutput('Cancel', 'v4679', ctc9, v4679);
          
          sim_r.txns.push({
            kind: 'from',
            to: v4566,
            tok: v4568
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v4569
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v4568
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_4095': {
          const v4897 = v4667[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v4667], secs: v4669, time: v4668, didSend: v4244, from: v4666 } = txn1;
  switch (v4667[0]) {
    case 'Cancel0_4095': {
      const v4670 = v4667[1];
      undefined /* setApiDetails */;
      ;
      const v4677 = stdlib.addressEq(v4666, v4566);
      stdlib.assert(v4677, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v4679 = null;
      const v4680 = await txn1.getOutput('Cancel', 'v4679', ctc9, v4679);
      if (v4244) {
        stdlib.protect(ctc9, await interact.out(v4670, v4680), {
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
    case 'SwapViaPool0_4095': {
      const v4897 = v4667[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Struct([['tokA', ctc0], ['tokB', ctc0], ['amtA', ctc1], ['amtB', ctc1], ['ctcAnnouncer', ctc2]]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc7, ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    Cancel0_4095: ctc6,
    SwapViaPool0_4095: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc10, ctc11]);
  const ctc13 = stdlib.T_Address;
  
  
  const v4548 = stdlib.protect(ctc3, interact.opts, 'for D\'s interact field opts');
  const v4549 = v4548.tokA;
  const v4550 = v4548.tokB;
  const v4551 = v4548.amtA;
  const v4552 = v4548.amtB;
  const v4553 = v4548.ctcAnnouncer;
  
  const v4561 = stdlib.tokenEq(v4549, v4550);
  const v4562 = v4561 ? false : true;
  stdlib.assert(v4562, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:12:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:45:19:application call to "checkOpts" (defined at: ./limitOrder.rsh:11:42:function exp)', 'at ./limitOrder.rsh:42:9:application call to [unknown function] (defined at: ./limitOrder.rsh:42:13:function exp)'],
    msg: null,
    who: 'D'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4548, v4549, v4550, v4551, v4552, v4553],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./limitOrder.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4567, v4568, v4569, v4570, v4571, v4572], secs: v4574, time: v4573, didSend: v3997, from: v4566 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4568
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4569
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v4567, v4568, v4569, v4570, v4571, v4572], secs: v4574, time: v4573, didSend: v3997, from: v4566 } = txn1;
  const v4583 = stdlib.tokenEq(v4569, v4568);
  const v4584 = v4583 ? false : true;
  stdlib.assert(v4584, {
    at: './limitOrder.rsh:47:5:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'D'
    });
  ;
  ;
  ;
  const v4585 = stdlib.tokenEq(v4568, v4569);
  const v4586 = v4585 ? false : true;
  stdlib.assert(v4586, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:12:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:48:35:application call to "checkOpts" (defined at: ./limitOrder.rsh:11:42:function exp)'],
    msg: null,
    who: 'D'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v4566, v4567, v4568, v4569, v4570, v4571, v4572],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4573,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:51:5:dot', stdlib.UInt_max, '0'), [[v4570, v4568]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v4594, time: v4593, didSend: v4063, from: v4592 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v4570,
        kind: 'to',
        tok: v4568
        });
      
      const v4610 = await ctc.getContractInfo();
      const v4611 = ['Some', v4568];
      const v4612 = ['Some', v4569];
      const v4615 = [];
      const v4618 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v4572,
          remote: ({
            accs: [v4566],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v4618', ctc5, v4618);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc3, ctc0, ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4594, time: v4593, didSend: v4063, from: v4592 } = txn2;
  ;
  ;
  const v4603 = stdlib.addressEq(v4566, v4592);
  stdlib.assert(v4603, {
    at: './limitOrder.rsh:51:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc4, await interact.ready(), {
    at: './limitOrder.rsh:52:19:application',
    fs: ['at ./limitOrder.rsh:52:19:application call to [unknown function] (defined at: ./limitOrder.rsh:52:19:function exp)', 'at ./limitOrder.rsh:52:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:52:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v4610 = await ctc.getContractInfo();
  const v4611 = ['Some', v4568];
  const v4612 = ['Some', v4569];
  const v4615 = [];
  const v4618 = undefined /* Remote */;
  const v4619 = await txn2.getOutput('internal', 'v4618', ctc5, v4618);
  const v4621 = v4619[stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v4627 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4621);
  stdlib.assert(v4627, {
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
  const {data: [v4667], secs: v4669, time: v4668, didSend: v4244, from: v4666 } = txn3;
  switch (v4667[0]) {
    case 'Cancel0_4095': {
      const v4670 = v4667[1];
      undefined /* setApiDetails */;
      ;
      const v4677 = stdlib.addressEq(v4666, v4566);
      stdlib.assert(v4677, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v4679 = null;
      await txn3.getOutput('Cancel', 'v4679', ctc4, v4679);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_4095': {
      const v4897 = v4667[1];
      undefined /* setApiDetails */;
      ;
      const v4932 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v4933 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v4934 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v4935 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v4936 = stdlib.le(v4934, v4570);
      stdlib.assert(v4936, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v4942 = null;
      await txn3.getOutput('SwapViaPool', 'v4942', ctc4, v4942);
      if (v4933) {
        const v4965 = [v4571];
        const v4966 = undefined /* Remote */;
        const v4967 = await txn3.getOutput('internal', 'v4966', ctc12, v4966);
        const v4969 = v4967[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4970 = v4967[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v4972 = v4970[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4991 = stdlib.eq(v4969, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4991, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v4993 = stdlib.ge(v4972, v4571);
        stdlib.assert(v4993, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v4994 = stdlib.safeSub(v4570, v4934);
        const v4995 = stdlib.safeSub(v4972, v4571);
        const v4996 = stdlib.ge(v4995, v4935);
        stdlib.assert(v4996, {
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
        const v5051 = [v4571];
        const v5052 = undefined /* Remote */;
        const v5053 = await txn3.getOutput('internal', 'v5052', ctc12, v5052);
        const v5055 = v5053[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v5056 = v5053[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v5058 = v5056[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v5077 = stdlib.eq(v5055, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5077, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v5079 = stdlib.ge(v5058, v4571);
        stdlib.assert(v5079, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v5080 = stdlib.safeSub(v4570, v4934);
        const v5081 = stdlib.safeSub(v5058, v4571);
        const v5082 = stdlib.ge(v5081, v4935);
        stdlib.assert(v5082, {
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc5, ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Cancel0_4095: ctc7,
    SwapViaPool0_4095: ctc6
    });
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc10, ctc11]);
  
  
  const [v4566, v4567, v4568, v4569, v4570, v4571] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]);
  const v4630 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_4095" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v4633 = v4630[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4639 = stdlib.le(v4633, v4570);
  stdlib.assert(v4639, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_4095" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v4652 = ['SwapViaPool0_4095', v4630];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4566, v4567, v4568, v4569, v4570, v4571, v4652],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4667], secs: v4669, time: v4668, didSend: v4244, from: v4666 } = txn1;
      
      switch (v4667[0]) {
        case 'Cancel0_4095': {
          const v4670 = v4667[1];
          
          break;
          }
        case 'SwapViaPool0_4095': {
          const v4897 = v4667[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v4932 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
          const v4933 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
          const v4934 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
          const v4942 = null;
          const v4943 = await txn1.getOutput('SwapViaPool', 'v4942', ctc9, v4942);
          
          if (v4933) {
            const v4965 = [v4571];
            const v4966 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4932,
                remote: ({
                  accs: [],
                  apps: [v4932],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v4569, v4568]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v4965 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v4967 = await txn1.getOutput('internal', 'v4966', ctc12, v4966);
            const v4970 = v4967[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v4972 = v4970[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v4994 = stdlib.safeSub(v4570, v4934);
            const v4995 = stdlib.safeSub(v4972, v4571);
            sim_r.txns.push({
              kind: 'from',
              to: v4666,
              tok: v4568
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4666,
              tok: v4569
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4566,
              tok: v4569
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4569
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4568
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v5051 = [v4571];
            const v5052 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4932,
                remote: ({
                  accs: [],
                  apps: [v4932],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v4569, v4568]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v5051 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5053 = await txn1.getOutput('internal', 'v5052', ctc12, v5052);
            const v5056 = v5053[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v5058 = v5056[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v5080 = stdlib.safeSub(v4570, v4934);
            const v5081 = stdlib.safeSub(v5058, v4571);
            sim_r.txns.push({
              kind: 'from',
              to: v4666,
              tok: v4568
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4666,
              tok: v4569
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4566,
              tok: v4569
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4569
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4568
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
    tys: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v4667], secs: v4669, time: v4668, didSend: v4244, from: v4666 } = txn1;
  switch (v4667[0]) {
    case 'Cancel0_4095': {
      const v4670 = v4667[1];
      return;
      break;
      }
    case 'SwapViaPool0_4095': {
      const v4897 = v4667[1];
      undefined /* setApiDetails */;
      ;
      const v4932 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v4933 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v4934 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v4935 = v4897[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v4936 = stdlib.le(v4934, v4570);
      stdlib.assert(v4936, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v4942 = null;
      const v4943 = await txn1.getOutput('SwapViaPool', 'v4942', ctc9, v4942);
      if (v4244) {
        stdlib.protect(ctc9, await interact.out(v4897, v4943), {
          at: './limitOrder.rsh:66:11:application',
          fs: ['at ./limitOrder.rsh:66:11:application call to [unknown function] (defined at: ./limitOrder.rsh:66:11:function exp)', 'at ./limitOrder.rsh:69:10:application call to "k" (defined at: ./limitOrder.rsh:68:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v4933) {
        const v4965 = [v4571];
        const v4966 = undefined /* Remote */;
        const v4967 = await txn1.getOutput('internal', 'v4966', ctc12, v4966);
        const v4969 = v4967[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4970 = v4967[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v4972 = v4970[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4991 = stdlib.eq(v4969, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4991, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v4993 = stdlib.ge(v4972, v4571);
        stdlib.assert(v4993, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v4994 = stdlib.safeSub(v4570, v4934);
        const v4995 = stdlib.safeSub(v4972, v4571);
        const v4996 = stdlib.ge(v4995, v4935);
        stdlib.assert(v4996, {
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
        const v5051 = [v4571];
        const v5052 = undefined /* Remote */;
        const v5053 = await txn1.getOutput('internal', 'v5052', ctc12, v5052);
        const v5055 = v5053[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v5056 = v5053[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v5058 = v5056[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v5077 = stdlib.eq(v5055, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5077, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v5079 = stdlib.ge(v5058, v4571);
        stdlib.assert(v5079, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v5080 = stdlib.safeSub(v4570, v4934);
        const v5081 = stdlib.safeSub(v5058, v4571);
        const v5082 = stdlib.ge(v5081, v4935);
        stdlib.assert(v5082, {
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
    pure: [`opts()(uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`Cancel()byte[0]`, `SwapViaPool(uint64,byte,uint64,uint64)byte[0]`, `opts()(uint64,uint64,uint64,uint64,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByANAAQBAghIBqCNBorT//4E4Yy5/g5QWGAmBAEAAAEBBWFwcElEIjUAMRhBBakpZEkiWzUBIQRbNQI2GgAXSUEAWyI1BCQ1BkkhCAxAADlJIQkMQAAcIQkSRDYaATYaAlA2GgNQNhoEUDX/KjT/UEIARyEIEkQ0ASUSRChkSTUDVyAoNQdCBUeBuo/tZRJEKTX/KDT/UIEZr1BCABw2GgIXNQQ2GgM2GgEXSSQMQAQYSSUMQAMfJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEKWzX9IQtbNfwhDFs1+0k1BTX6gATBZMZfNPpQsDT6IlVAAFkxADT/EkSACAAAAAAAABJHsCk1B7EisgE0/LISI7IQNP+yFDT+shGzsSKyASKyEiOyEDIJshUyCrIUNP2yEbOxIrIBIrISI7IQMgmyFTIKshQ0/rIRs0IELjT6VwEZNfk0+SJbNfg0+YEJWzX3NPmBEVs19jT3NPwORIAIAAAAAAAAE06wKTUHNPlXCAEXQQEiKzT4FlADNfQyCng18zIKYDTzCRYyCjT9cABIFlA18rEisgE097ISI7IQNPSyFDT+shG2IrIBIQayEDT4shiABKDo9ZmyGjT3FrIaNPsWsho0/rIwNP2yMDT4sjKzMgpgNPMJNPIiWwkWMgo0/XAASDTyIQRbCRZQtwE+VwQAUDX1gAgAAAAAAAATZjT1ULA09Uk19CEEWzXzNPQiWyISRDTzNPsPRDTzNPsJSTXyNPYPRLEisgE0/DT3CbISI7IQMQCyFDT+shGzsSKyATTyshIjshAxALIUNP2yEbOxIrIBNPuyEiOyEDT/shQ0/bIRs7EisgEishIjshAyCbIVMgqyFDT9shGzsSKyASKyEiOyEDIJshUyCrIUNP6yEbNCAtQrNPgWUAM19DIKeDXzMgpgNPMJFjIKNP1wAEgWUDXysSKyATT3shIjshA09LIUNP6yEbYisgEhBrIQNPiyGIAEfKR7uLIaNPcWsho0+xayGjT+sjA0/bIwNPiyMrMyCmA08wk08iJbCRYyCjT9cABINPIhBFsJFlC3AT5XBABQNfWACAAAAAAAABO8NPVQsDT1STX0IQRbNfM09CJbIhJENPM0+w9ENPM0+wlJNfI09g9EsSKyATT8NPcJshIjshAxALIUNP6yEbOxIrIBNPKyEiOyEDEAshQ0/bIRs7EisgE0+7ISI7IQNP+yFDT9shGzsSKyASKyEiOyEDIJshUyCrIUNP2yEbOxIrIBIrISI7IQMgmyFTIKshQ0/rIRs0IBskgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/1cgKDX+IQVbNf0hCls1/CELWzX7IQxbNfqABJqLkXSwNPs0/YgB8jT/MQASRCs0A1doCFADNfgyCng19zIKYDT3CRY19rEisgEhBrIQNAOBaFuyGIAE+pmLTLIaNP9JshyyGjEYFrIaKjT9FlCyGio0/BZQsho0+xayGjT6FrIaszIKYDT3CTT2FwkWtwA+VwQAUDX5gAgAAAAAAAASCjT5ULA0+TX4IjT4IlsSRDT/NP5QNP0WUDT8FlA0+xZQNPoWUChLAVcAaGdIJTUBMgY1AkIA20ghB4gBJiI0ARJENARJIhJMNAISEURJNQVJSkpXACg1/4EoWzX+gTBbNf2BOFs1/IFAWzX7IQVbNfqABIryZVc0/1A0/hZQNP0WUDT8FlA0+xZQNPoWULA0/TT+E0QhB4gAybEisgEishIjshAyCrIUNP6yEbMhB4gAsbEisgEishIjshAyCrIUNP2yEbM0/jT9E0QxADT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQKEsBVwBwZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUokCDUAOAcyChJEOBAkEkQ4CBJEiTQASUpJJAg1ADgUMgoSRDgQIxJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/limitOrder.rsh:55:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/limitOrder.rsh:86:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T6","name":"v5199","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_4095","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_4095","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v4618","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4679","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4942","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v4966","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v5052","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Cancel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v5190","type":"address"},{"internalType":"bool","name":"v5191","type":"bool"},{"internalType":"uint256","name":"v5192","type":"uint256"},{"internalType":"uint256","name":"v5193","type":"uint256"}],"name":"SwapViaPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v5201","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_4095","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_4095","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v5203","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"opts","outputs":[{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620027ab38819003601f8101601f191683016001600160401b038111848210176200050057839282916040528339810103906101608212620005b05760a0604051926200004e84620005b5565b82518452601f190112620005b0576040519060a08201906001600160401b0382118383101762000500576200011692610140926040526200009260208301620005d1565b8152620000a260408301620005d1565b60208201526060820151604082015260808201516060820152620000c960a08301620005d1565b60808201526020850152620000e160c08201620005d1565b6040850152620000f460e08201620005d1565b6060850152610100810151608085015261012081015160a085015201620005d1565b60c0820152436003556040516001600160401b03608082019081119082111762000500576080810160405260008152600060208201526000604082015260606200015f620005e6565b91015260ff6004541662000597577f91bf354a5132f59892c5a924530ee90b6645e9b4575dbb85d81c3c29f707623161018060405133815283516020820152620001b26020850151604083019062000622565b60408401516001600160a01b0390811660e083015260608501518116610100830152608085015161012083015260a085015161014083015260c085015116610160820152a1805180159081156200058a575b50156200057157606081015160408201516001600160a01b03908116911603620005695760005b156200055057346200053757604081015160608201516001600160a01b039081169116036200052f5760005b156200051657604051906200026c82620005b5565b600082526200027a620005e6565b6020830152600060408301526000606083015260006080830152600060a0830152600060c08301523382526020810151602083015260018060a01b03604082015116604083015260018060a01b0360608201511660608301526080810151608083015260a081015160a083015260c060018060a01b039101511660c082015260016000554360015560405190336020830152620003206020820151604084019062000622565b60408101516001600160a01b0390811660e084015260608201518116610100840152608082015161012084015260a082015161014084015260c0909101511661016080830191909152815261018081016001600160401b03811182821017620005005760405280516001600160401b0381116200050057600254600181811c91168015620004f5575b6020821014620004df57601f811162000475575b50602091601f82116001146200040b57918192600092620003ff575b50508160011b916000199060031b1c1916176002555b60405161214d90816200065e8239f35b015190503880620003d9565b601f19821692600260005260206000209160005b8581106200045c5750836001951062000442575b505050811b01600255620003ef565b015160001960f88460031b161c1916905538808062000433565b919260206001819286850151815501940192016200041f565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004d4575b601f0160051c01905b818110620004c75750620003bd565b60008155600101620004b8565b9091508190620004af565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003a9565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b600162000257565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60016200022b565b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000204565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b60e081019081106001600160401b038211176200050057604052565b51906001600160a01b0382168203620005b057565b6040519060a082016001600160401b03811183821017620005005760405260006080838281528260208201528260408201528260608201520152565b80516001600160a01b03908116835260208083015182169084015260408083015190840152606080830151908401526080918201511691015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081630a47debc146100bb575080631e93b0f1146100b25780634aa8e773146100a9578063573b8510146100a05780635e43ae8e1461009757806382b7c09b1461008e57806383230757146100855763ab53f2c60361000e5761008061078e565b61000e565b5061008061076f565b506100806106b8565b506100806105b0565b506100806101e5565b5061008061018d565b50610080610169565b3461011f578060031936011261011f57606060a0916100d86109b8565b506100ee60026100e6610a01565b925414611635565b60206101096100fb6108ed565b828082518301019101610cbc565b0151918291015261011d604051809261012e565bf35b80fd5b6001600160a01b031690565b80516001600160a01b039081168352602080830151821690840152604080830151908401526060808301519084015260809182015116910152565b5034610188576000366003190112610188576020600354604051908152f35b600080fd5b506000366003190112610188576020806101a5610a01565b6101d9816101b1610a87565b84810190600082515251151585825101526101ca610a87565b90600082525185820152610e8d565b01511515604051908152f35b50602080600319360112610188576101fb610a01565b506102a360408092815161020e81610851565b600435815261021b611d2e565b61023661023161022d60045460ff1690565b1590565b611655565b8351338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a1610276600160005414611675565b61028f6102816108ed565b848082518301019101611db5565b948592518015908115610589575b50611695565b6102ad34156116b5565b8382019081516102bc90610122565b916080840192835133916102cf926120a0565b6102d8906116d5565b835133906001600160a01b03906102ee90610122565b16146102f9906116f5565b815160019052805161030a90610122565b868351019061031891610a55565b818501805160019052916060850192835161033290610122565b888251019061034091610a55565b825161034b90610122565b3061035591611cc0565b60c0830190815230855161036890610122565b9061037291611cc0565b906101008401918252479260a08501938452610396600160ff196004541617600455565b8989516103a290610122565b865192519c8a519b60a0019b8c5191519e8f9485019563014d07ad60e21b87523060248701956103d196611e83565b039a601f199b8c810182526103e690826108ca565b60c08d01516103f490610122565b6103fd90610122565b90515a9260008094938194f1610411610d5e565b61041a916119d3565b5061042a60ff1960045416600455565b30855161043690610122565b9061044091611cc0565b905180820360e08601526104549114611715565b30855161046090610122565b9061046a91611cc0565b905180820361012085015261047f9114611735565b4790519003606082019081515251906080019080825289516104b581928291909160208060408301948051845201511515910152565b037fd6df63783d6640eb480380812b89afc041510e7ed9fa44154ae87909d895e2bf91a15151156104e590611755565b846104ee611ecd565b9780516104fa90610122565b610504908a610a55565b0151858801525161051490610122565b61052090878901610a55565b5161052a90610122565b6105379060608701610a55565b5160808501525160a084015261054d6002600055565b43600155835192839182019061056291611f23565b03908101825261057290826108ca565b61057b90611fbd565b5160008152602090f35b0390f35b9050600154143861029d565b6001600160a01b0381160361018857565b8015150361018857565b506080366003190112610188576105856004356105cc81610595565b6106a76024356105db816105a6565b6105e3610a01565b6105eb610a30565b9360018060a01b031684526020840191151582526106a081604095869485820160443581526060830190606435825261066a61065e89519461062c86610879565b610634610a30565b86526106586106516020880198610649610a64565b8a5251610122565b8751610a55565b51151590565b60208551019015159052565b51878351015251606082510152610682825160019052565b518582510152610690610a87565b9060008252516020820152610e8d565b0151151590565b905190151581529081906020820190565b5060e0366003190112610188576106cd610a01565b6040908151906106dc82610879565b600435825260c0366023190112610188578251916106f983610894565b6024356002811015610188578352604435610713816105a6565b602084015260803660631901126101885761057b928451610733816108af565b60643561073f81610595565b815260843561074d816105a6565b602082015260a4358682015260c4356060820152858201526020820152610e8d565b5034610188576000366003190112610188576020600154604051908152f35b50346101885760008060031936011261011f5780546107ab6108ed565b906040519283918252602090604082840152835191826040850152815b8381106107e957505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016107c8565b90600182811c92168015610830575b602083101461081a57565b634e487b7160e01b600052602260045260246000fd5b91607f169161080f565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761086c57604052565b61087461083a565b604052565b604081019081106001600160401b0382111761086c57604052565b606081019081106001600160401b0382111761086c57604052565b608081019081106001600160401b0382111761086c57604052565b601f909101601f19168101906001600160401b0382119082101761086c57604052565b604051906000826002549161090183610800565b8083526001938085169081156109775750600114610929575b50610927925003836108ca565b565b6002600090815260008051602061212183398151915294602093509091905b81831061095f57505061092793508201013861091a565b85548884018501529485019487945091830191610948565b905061092794506020925060ff191682840152151560051b8201013861091a565b6040519061022082016001600160401b0381118382101761086c57604052565b6040519060a082016001600160401b038111838210176109f4575b60405260006080838281528260208201528260408201528260608201520152565b6109fc61083a565b6109d3565b60405190610a0e826108af565b816000815260006020820152600060408201526060610a2b6109b8565b910152565b60405190610a3d826108af565b60006060838281528260208201528260408201520152565b6001600160a01b039091169052565b60405190610a7182610894565b8160008152600060208201526040610a2b610a30565b60405190610a9482610879565b81600081526020610a2b610a64565b60021115610aad57565b634e487b7160e01b600052602160045260246000fd5b60405190610ad082610851565b60008252565b60405190610ae382610879565b60006020838281520152565b60405190610afc82610894565b8160008152604051610b0d81610851565b6000815260208201526040610a2b610ad6565b610b28610998565b90610b31610a30565b8252610b3b610ac3565b6020830152610b48610aef565b6040830152610b55610aef565b60608301526000806080840152610b6a610ac3565b60a0840152610b77610aef565b60c0840152610b84610aef565b60e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b90606060e0919493946040602061010086019760018060a01b03809416875280518288015201518051610bfb81610aa3565b82870152602081015115158487015201519081511660808501526020810151151560a0850152604081015160c08501520151910152565b519061092782610595565b91908260a09103126101885760405160a081016001600160401b03811182821017610caf575b60405260808082948051610c7681610595565b84526020810151610c8681610595565b60208501526040810151604085015260608101516060850152015191610cab83610595565b0152565b610cb761083a565b610c63565b6101408183031261018857604051916101209190610d049060c085016001600160401b03811186821017610d44575b6040528251610cf981610595565b855260208301610c3d565b602084015260c0810151610d1781610595565b604084015260e0810151610d2a81610595565b60608401526101008101516080840152015160a082015290565b610d4c61083a565b610ceb565b51610d5b81610aa3565b90565b3d15610da6573d906001600160401b038211610d99575b60405191610d8d601f8201601f1916602001846108ca565b82523d6000602084013e565b610da161083a565b610d75565b606090565b9081604091031261018857602060405191610dc583610879565b805183520151602082015290565b9190916060602060406080840195805185528281015151838601520151805160408501520151910152565b818110610e09575050565b60008155600101610dfe565b610e20600254610800565b80610e285750565b601f8111600114610e3b57506000600255565b6002600052610e8090601f0160051c600080516020612121833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610dfe565b6000602081208160025555565b610e95610b20565b90610ead610ea861022d60045460ff1690565b611775565b60407f777de14fc85a1499bf334c9d8f8617049165fc617a06b7359e02f68714658fa1815180610ede853383610bc9565b0390a1610f116000948594610ef66002875414611795565b610efe6108ed565b6020938185808094518301019101610cbc565b95610f2781518015908115611606575b506117b5565b01610f328151610d51565b610f3b81610aa3565b610fda57505093610fa79291610fc695610f553415611993565b610f71610f6a610f658851610122565b610122565b33146119b3565b8351600081527fb4ade46f54cf59956617f7d7978cacffc6e04e9c6a7ac97c1b8aedea234492e490602090a10152820151610122565b6080610fb38351610122565b920151916001600160a01b031690611bcf565b8055610fd26000600155565b610927610e15565b90919495506001610feb8251610d51565b610ff481610aa3565b14611003575b50505050505050565b51830151815261101334156117d5565b858380835101519561102c6080890197885110156117f5565b8151600081527fc86eed619082e4f0a79e61faf4d58e52966762ace490c9c1fabe46b24959945490602090a101528051820151156113375760a08501938451838301515283860191825161107f90610122565b9481519581875161108f90610122565b9701516001600160a01b03976110a89290891690611c72565b6110b1906118d5565b606088019485516110c190610122565b306110cb91611cc0565b61014084019081523086516110df90610122565b906110e991611cc0565b908385510191825190039061016086019182528c804794610120890195865261111a600160ff196004541617600455565b518d51885163c8867ae960e01b89820190815260248201939093526044808201929092529081529061114d6064836108ca565b89515183906001600160a01b031661116490610122565b9251925af191611172610d5e565b928361117d91611a33565b5061118d60ff1960045416600455565b30895161119990610122565b906111a391611cc0565b90518082036101808901526111b891146118f5565b3089516111c490610122565b906111ce91611cc0565b90516111d991611612565b918486019284845101515287516111ef90610122565b8651516001600160a01b031661120490610122565b3061120e92611b62565b1561121890611915565b47905190038251528280825183010191019061123391610dab565b8382510152516060840190808252835161124e819282610dd3565b037fdf158ec68030e1bf47c5eee22902c693494d06f47a95a37b5c49615608442d9c91a18051511561127f90611935565b8181510151518951111561129290611955565b5101515187516112a191611612565b93608083019480865283516060015111156112bb90611975565b516112c590610122565b9251915101516112d491611612565b336112de92611bcf565b81516112e990610122565b9051336112f592611bcf565b516112ff90610122565b925161130a90610122565b9151911661131792611bcf565b80556113236000600155565b61132b610e15565b38808080808080610ffa565b60a0850193845160a08301515283860191825161135390610122565b9481519581875161136390610122565b9701516001600160a01b039761137c9290891690611c72565b61138590611815565b6060880194855161139590610122565b3061139f91611cc0565b6101c084019081523086516113b390610122565b906113bd91611cc0565b90838551019182519003906101e086019182528c8047946101a089019586526113ee600160ff196004541617600455565b518d51885163dc8d714f60e01b8982019081526024820193909352604480820192909252908152906114216064836108ca565b89515183906001600160a01b031661143890610122565b9251925af191611446610d5e565b928361145191611a03565b5061146160ff1960045416600455565b30895161146d90610122565b9061147791611cc0565b905180820361020089015261148c9114611835565b30895161149890610122565b906114a291611cc0565b90516114ad91611612565b9160c086019284845101515287516114c490610122565b8651516001600160a01b03166114d990610122565b306114e392611b62565b156114ed90611855565b47905190038251528280825183010191019061150891610dab565b83825101525160e08401908082528351611523819282610dd3565b037f05245254588ab2a38a943ea4665b626f33f6415807465f2d3b69eee4f7f9c10191a18051511561155490611875565b8181510151518951111561156790611895565b51015151875161157691611612565b936101008301948086528351606001511115611591906118b5565b5161159b90610122565b9251915101516115aa91611612565b336115b492611bcf565b81516115bf90610122565b9051336115cb92611bcf565b516115d590610122565b92516115e090610122565b915191166115ed92611bcf565b80556115f96000600155565b611601610e15565b61132b565b90506001541438610f21565b90810390811161161f5790565b634e487b7160e01b600052601160045260246000fd5b1561163c57565b60405163100960cb60e01b815260076004820152602490fd5b1561165c57565b60405163100960cb60e01b8152600d6004820152602490fd5b1561167c57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561169c57565b60405163100960cb60e01b8152600f6004820152602490fd5b156116bc57565b60405163100960cb60e01b815260106004820152602490fd5b156116dc57565b60405163100960cb60e01b815260116004820152602490fd5b156116fc57565b60405163100960cb60e01b815260126004820152602490fd5b1561171c57565b60405163100960cb60e01b815260136004820152602490fd5b1561173c57565b60405163100960cb60e01b815260146004820152602490fd5b1561175c57565b60405163100960cb60e01b815260166004820152602490fd5b1561177c57565b60405163100960cb60e01b815260176004820152602490fd5b1561179c57565b60405163100960cb60e01b815260186004820152602490fd5b156117bc57565b60405163100960cb60e01b815260196004820152602490fd5b156117dc57565b60405163100960cb60e01b8152601c6004820152602490fd5b156117fc57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561181c57565b60405163100960cb60e01b815260256004820152602490fd5b1561183c57565b60405163100960cb60e01b815260276004820152602490fd5b1561185c57565b60405163100960cb60e01b815260266004820152602490fd5b1561187c57565b60405163100960cb60e01b815260296004820152602490fd5b1561189c57565b60405163100960cb60e01b8152602a6004820152602490fd5b156118bc57565b60405163100960cb60e01b8152602b6004820152602490fd5b156118dc57565b60405163100960cb60e01b8152601e6004820152602490fd5b156118fc57565b60405163100960cb60e01b815260206004820152602490fd5b1561191c57565b60405163100960cb60e01b8152601f6004820152602490fd5b1561193c57565b60405163100960cb60e01b815260226004820152602490fd5b1561195c57565b60405163100960cb60e01b815260236004820152602490fd5b1561197c57565b602460405163100960cb60e01b8152816004820152fd5b1561199a57565b60405163100960cb60e01b8152601a6004820152602490fd5b156119ba57565b60405163100960cb60e01b8152601b6004820152602490fd5b156119db5790565b8051156119ea57805190602001fd5b60405163100960cb60e01b815260156004820152602490fd5b15611a0b5790565b805115611a1a57805190602001fd5b60405163100960cb60e01b815260286004820152602490fd5b15611a3b5790565b805115611a4a57805190602001fd5b60405163100960cb60e01b815260216004820152602490fd5b15611a6b5790565b805115611a7a57805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b15611a9b5790565b805115611aaa57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15611acb5790565b805115611ada57805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b15611afb5790565b805115611b0a57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15611b2b5790565b805115611b3a57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610188575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610d5b93600093849392849190611ba8816108af565b5193165af1611bbf611bb8610d5e565b8092611a63565b5060208082518301019101611b53565b60009190829182611bfe611c0c611c3b97604051928391602083019663a9059cbb60e01b885260248401611c42565b03601f1981018352826108ca565b51926001600160a01b03165af1611c2b611c24610d5e565b8092611a93565b5060208082518301019101611c5d565b1561018857565b6001600160a01b039091168152602081019190915260400190565b908160209103126101885751610d5b816105a6565b60009190829182611bfe611ca1610d5b97604051928391602083019663095ea7b360e01b885260248401611c42565b51926001600160a01b03165af1611c2b611cb9610d5e565b8092611ac3565b60008091610d5b93826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152611cf881610894565b5193165af1611bbf611d08610d5e565b8092611af3565b60405190611d1c82610894565b60006040838281528260208201520152565b6040519061014082016001600160401b03811183821017611da8575b60405281611d56611d0f565b8152611d60611d0f565b6020820152610120600091826040820152611d79610ad6565b6060820152611d86610ad6565b60808201528260a08201528260c08201528260e0820152826101008201520152565b611db061083a565b611d4a565b610160818303126101885760405191611e419161014091611dfe9060e086016001600160401b03811187821017611e49575b604052611df383610c32565b865260208301610c3d565b6020850152611e0f60c08201610c32565b6040850152611e2060e08201610c32565b6060850152610100810151608085015261012081015160a085015201610c32565b60c082015290565b611e5161083a565b611de7565b6040908051611e6481610aa3565b83526020818101511515908401528101516001600160a01b0316910152565b6001600160a01b0391821681529116602082015261014081019594936101209391929091611ec391611eb9906040860190611e56565b60a0840190611e56565b6101008201520152565b6040519060c082016001600160401b03811183821017611f16575b604052600060a083828152611efb6109b8565b60208201528260408201528260608201528260808201520152565b611f1e61083a565b611ee8565b91909161012060a0610140830194600180831b03808251168552611f4f6020830151602087019061012e565b8060408301511660c086015260608201511660e085015260808101516101008501520151910152565b90601f8211611f85575050565b6109279160026000526020600020906020601f840160051c83019310611fb3575b601f0160051c0190610dfe565b9091508190611fa6565b80519091906001600160401b038111612093575b611fe581611fe0600254610800565b611f78565b602080601f83116001146120215750819293600092612016575b50508160011b916000199060031b1c191617600255565b015190503880611fff565b6002600052601f19831694909190600080516020612121833981519152926000905b87821061207b575050836001959610612062575b505050811b01600255565b015160001960f88460031b161c19169055388080612057565b80600185968294968601518155019501930190612043565b61209b61083a565b611fd1565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610d5b936000938493909284919060a081016001600160401b03811182821017612113575b6040525193165af1611c2b61210c610d5e565b8092611b23565b61211b61083a565b6120f956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10155,
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
