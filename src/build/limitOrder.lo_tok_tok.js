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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3]]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v4418, v4419, v4420, v4421, v4422, v4423, v4424] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4418, v4419, v4420, v4421, v4422, v4423] = svs;
      return (await ((async () => {
        
        
        return v4419;}))(...args));
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
    Cancel0_3947: ctc5,
    SwapViaPool0_3947: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v4418, v4419, v4420, v4421, v4422, v4423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]);
  const v4506 = ctc.selfAddress();
  const v4508 = stdlib.protect(ctc5, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_3947" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v4509 = stdlib.addressEq(v4506, v4418);
  stdlib.assert(v4509, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:117:24:application call to [unknown function] (defined at: ./limitOrder.rsh:117:24:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runCancel0_3947" (defined at: ./limitOrder.rsh:117:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v4514 = ['Cancel0_3947', v4508];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4418, v4419, v4420, v4421, v4422, v4423, v4514],
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
      
      
      const {data: [v4519], secs: v4521, time: v4520, didSend: v4096, from: v4518 } = txn1;
      
      switch (v4519[0]) {
        case 'Cancel0_3947': {
          const v4522 = v4519[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v4531 = null;
          const v4532 = await txn1.getOutput('Cancel', 'v4531', ctc9, v4531);
          
          sim_r.txns.push({
            kind: 'from',
            to: v4418,
            tok: v4420
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v4421
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v4420
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_3947': {
          const v4749 = v4519[1];
          
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
  const {data: [v4519], secs: v4521, time: v4520, didSend: v4096, from: v4518 } = txn1;
  switch (v4519[0]) {
    case 'Cancel0_3947': {
      const v4522 = v4519[1];
      undefined /* setApiDetails */;
      ;
      const v4529 = stdlib.addressEq(v4518, v4418);
      stdlib.assert(v4529, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v4531 = null;
      const v4532 = await txn1.getOutput('Cancel', 'v4531', ctc9, v4531);
      if (v4096) {
        stdlib.protect(ctc9, await interact.out(v4522, v4532), {
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
    case 'SwapViaPool0_3947': {
      const v4749 = v4519[1];
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
    Cancel0_3947: ctc6,
    SwapViaPool0_3947: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc10, ctc11]);
  const ctc13 = stdlib.T_Address;
  
  
  const v4400 = stdlib.protect(ctc3, interact.opts, 'for D\'s interact field opts');
  const v4401 = v4400.tokA;
  const v4402 = v4400.tokB;
  const v4403 = v4400.amtA;
  const v4404 = v4400.amtB;
  const v4405 = v4400.ctcAnnouncer;
  
  const v4413 = stdlib.tokenEq(v4401, v4402);
  const v4414 = v4413 ? false : true;
  stdlib.assert(v4414, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:12:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:45:19:application call to "checkOpts" (defined at: ./limitOrder.rsh:11:42:function exp)', 'at ./limitOrder.rsh:42:9:application call to [unknown function] (defined at: ./limitOrder.rsh:42:13:function exp)'],
    msg: null,
    who: 'D'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4400, v4401, v4402, v4403, v4404, v4405],
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
      
      
      const {data: [v4419, v4420, v4421, v4422, v4423, v4424], secs: v4426, time: v4425, didSend: v3849, from: v4418 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4420
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4421
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
  const {data: [v4419, v4420, v4421, v4422, v4423, v4424], secs: v4426, time: v4425, didSend: v3849, from: v4418 } = txn1;
  const v4435 = stdlib.tokenEq(v4421, v4420);
  const v4436 = v4435 ? false : true;
  stdlib.assert(v4436, {
    at: './limitOrder.rsh:47:5:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'D'
    });
  ;
  ;
  ;
  const v4437 = stdlib.tokenEq(v4420, v4421);
  const v4438 = v4437 ? false : true;
  stdlib.assert(v4438, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:12:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:48:35:application call to "checkOpts" (defined at: ./limitOrder.rsh:11:42:function exp)'],
    msg: null,
    who: 'D'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v4418, v4419, v4420, v4421, v4422, v4423, v4424],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4425,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:51:5:dot', stdlib.UInt_max, '0'), [[v4422, v4420]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v4446, time: v4445, didSend: v3915, from: v4444 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v4422,
        kind: 'to',
        tok: v4420
        });
      
      const v4462 = await ctc.getContractInfo();
      const v4463 = ['Some', v4420];
      const v4464 = ['Some', v4421];
      const v4467 = [];
      const v4470 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v4424,
          remote: ({
            accs: [v4418],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v4467 /* simTokensRecv */, undefined /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v4470', ctc5, v4470);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc3, ctc0, ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4446, time: v4445, didSend: v3915, from: v4444 } = txn2;
  ;
  ;
  const v4455 = stdlib.addressEq(v4418, v4444);
  stdlib.assert(v4455, {
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
  
  const v4462 = await ctc.getContractInfo();
  const v4463 = ['Some', v4420];
  const v4464 = ['Some', v4421];
  const v4467 = [];
  const v4470 = undefined /* Remote */;
  const v4471 = await txn2.getOutput('internal', 'v4470', ctc5, v4470);
  const v4473 = v4471[stdlib.checkedBigNumberify('./limitOrder.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v4479 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4473);
  stdlib.assert(v4479, {
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
  const {data: [v4519], secs: v4521, time: v4520, didSend: v4096, from: v4518 } = txn3;
  switch (v4519[0]) {
    case 'Cancel0_3947': {
      const v4522 = v4519[1];
      undefined /* setApiDetails */;
      ;
      const v4529 = stdlib.addressEq(v4518, v4418);
      stdlib.assert(v4529, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v4531 = null;
      await txn3.getOutput('Cancel', 'v4531', ctc4, v4531);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_3947': {
      const v4749 = v4519[1];
      undefined /* setApiDetails */;
      ;
      const v4784 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v4785 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v4786 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v4787 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v4788 = stdlib.le(v4786, v4422);
      stdlib.assert(v4788, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v4794 = null;
      await txn3.getOutput('SwapViaPool', 'v4794', ctc4, v4794);
      if (v4785) {
        const v4817 = [v4423];
        const v4818 = undefined /* Remote */;
        const v4819 = await txn3.getOutput('internal', 'v4818', ctc12, v4818);
        const v4821 = v4819[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4822 = v4819[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v4824 = v4822[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4843 = stdlib.eq(v4821, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4843, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v4845 = stdlib.ge(v4824, v4423);
        stdlib.assert(v4845, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v4846 = stdlib.safeSub(v4422, v4786);
        const v4847 = stdlib.safeSub(v4824, v4423);
        const v4848 = stdlib.ge(v4847, v4787);
        stdlib.assert(v4848, {
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
        const v4903 = [v4423];
        const v4904 = undefined /* Remote */;
        const v4905 = await txn3.getOutput('internal', 'v4904', ctc12, v4904);
        const v4907 = v4905[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4908 = v4905[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v4910 = v4908[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4929 = stdlib.eq(v4907, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4929, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v4931 = stdlib.ge(v4910, v4423);
        stdlib.assert(v4931, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v4932 = stdlib.safeSub(v4422, v4786);
        const v4933 = stdlib.safeSub(v4910, v4423);
        const v4934 = stdlib.ge(v4933, v4787);
        stdlib.assert(v4934, {
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
    Cancel0_3947: ctc7,
    SwapViaPool0_3947: ctc6
    });
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc10, ctc11]);
  
  
  const [v4418, v4419, v4420, v4421, v4422, v4423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]);
  const v4482 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_3947" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v4485 = v4482[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4491 = stdlib.le(v4485, v4422);
  stdlib.assert(v4491, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:66:62:application call to [unknown function] (defined at: ./limitOrder.rsh:66:62:function exp)', 'at ./limitOrder.rsh:65:7:application call to "runSwapViaPool0_3947" (defined at: ./limitOrder.rsh:66:10:function exp)', 'at ./limitOrder.rsh:65:7:application call to [unknown function] (defined at: ./limitOrder.rsh:65:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v4504 = ['SwapViaPool0_3947', v4482];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4418, v4419, v4420, v4421, v4422, v4423, v4504],
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
      
      
      const {data: [v4519], secs: v4521, time: v4520, didSend: v4096, from: v4518 } = txn1;
      
      switch (v4519[0]) {
        case 'Cancel0_3947': {
          const v4522 = v4519[1];
          
          break;
          }
        case 'SwapViaPool0_3947': {
          const v4749 = v4519[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v4784 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
          const v4785 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
          const v4786 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
          const v4794 = null;
          const v4795 = await txn1.getOutput('SwapViaPool', 'v4794', ctc9, v4794);
          
          if (v4785) {
            const v4817 = [v4423];
            const v4818 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4784,
                remote: ({
                  accs: [],
                  apps: [v4784],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v4421, v4420]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v4817 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v4819 = await txn1.getOutput('internal', 'v4818', ctc12, v4818);
            const v4822 = v4819[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v4824 = v4822[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v4846 = stdlib.safeSub(v4422, v4786);
            const v4847 = stdlib.safeSub(v4824, v4423);
            sim_r.txns.push({
              kind: 'from',
              to: v4518,
              tok: v4420
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4518,
              tok: v4421
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4418,
              tok: v4421
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4421
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4420
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v4903 = [v4423];
            const v4904 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4784,
                remote: ({
                  accs: [],
                  apps: [v4784],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '2'),
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:80:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1'),
                  toks: [v4421, v4420]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v4903 /* simTokensRecv */, undefined /* simReturnVal */];})();
            const v4905 = await txn1.getOutput('internal', 'v4904', ctc12, v4904);
            const v4908 = v4905[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
            const v4910 = v4908[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
            const v4932 = stdlib.safeSub(v4422, v4786);
            const v4933 = stdlib.safeSub(v4910, v4423);
            sim_r.txns.push({
              kind: 'from',
              to: v4518,
              tok: v4420
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4518,
              tok: v4421
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4418,
              tok: v4421
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4421
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4420
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
  const {data: [v4519], secs: v4521, time: v4520, didSend: v4096, from: v4518 } = txn1;
  switch (v4519[0]) {
    case 'Cancel0_3947': {
      const v4522 = v4519[1];
      return;
      break;
      }
    case 'SwapViaPool0_3947': {
      const v4749 = v4519[1];
      undefined /* setApiDetails */;
      ;
      const v4784 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '0')];
      const v4785 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '1')];
      const v4786 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '2')];
      const v4787 = v4749[stdlib.checkedBigNumberify('./limitOrder.rsh:66:10:spread', stdlib.UInt_max, '3')];
      const v4788 = stdlib.le(v4786, v4422);
      stdlib.assert(v4788, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v4794 = null;
      const v4795 = await txn1.getOutput('SwapViaPool', 'v4794', ctc9, v4794);
      if (v4096) {
        stdlib.protect(ctc9, await interact.out(v4749, v4795), {
          at: './limitOrder.rsh:66:11:application',
          fs: ['at ./limitOrder.rsh:66:11:application call to [unknown function] (defined at: ./limitOrder.rsh:66:11:function exp)', 'at ./limitOrder.rsh:69:10:application call to "k" (defined at: ./limitOrder.rsh:68:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v4785) {
        const v4817 = [v4423];
        const v4818 = undefined /* Remote */;
        const v4819 = await txn1.getOutput('internal', 'v4818', ctc12, v4818);
        const v4821 = v4819[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4822 = v4819[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v4824 = v4822[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4843 = stdlib.eq(v4821, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4843, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:103:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v4845 = stdlib.ge(v4824, v4423);
        stdlib.assert(v4845, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v4846 = stdlib.safeSub(v4422, v4786);
        const v4847 = stdlib.safeSub(v4824, v4423);
        const v4848 = stdlib.ge(v4847, v4787);
        stdlib.assert(v4848, {
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
        const v4903 = [v4423];
        const v4904 = undefined /* Remote */;
        const v4905 = await txn1.getOutput('internal', 'v4904', ctc12, v4904);
        const v4907 = v4905[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4908 = v4905[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '1')];
        const v4910 = v4908[stdlib.checkedBigNumberify('./limitOrder.rsh:86:15:application', stdlib.UInt_max, '0')];
        const v4929 = stdlib.eq(v4907, stdlib.checkedBigNumberify('./limitOrder.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4929, {
          at: './limitOrder.rsh:87:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:77:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v4931 = stdlib.ge(v4910, v4423);
        stdlib.assert(v4931, {
          at: './limitOrder.rsh:107:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v4932 = stdlib.safeSub(v4422, v4786);
        const v4933 = stdlib.safeSub(v4910, v4423);
        const v4934 = stdlib.ge(v4933, v4787);
        stdlib.assert(v4934, {
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
  appApproval: `ByANAAQBAghIBqCNBorT//4E4Yy5/g5QWGAmBAEAAAEBBWFwcElEIjUAMRhBBakpZEkiWzUBIQRbNQI2GgAXSUEAWyI1BCQ1BkkhCAxAADlJIQkMQAAcIQkSRDYaATYaAlA2GgNQNhoEUDX/KjT/UEIARyEIEkQ0ASUSRChkSTUDVyAoNQdCBUeBuo/tZRJEKTX/KDT/UIEZr1BCABw2GgIXNQQ2GgM2GgEXSSQMQAQYSSUMQAMfJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEKWzX9IQtbNfwhDFs1+0k1BTX6gATBZMZfNPpQsDT6IlVAAFkxADT/EkSACAAAAAAAABGzsCk1B7EisgE0/LISI7IQNP+yFDT+shGzsSKyASKyEiOyEDIJshUyCrIUNP2yEbOxIrIBIrISI7IQMgmyFTIKshQ0/rIRs0IELjT6VwEZNfk0+SJbNfg0+YEJWzX3NPmBEVs19jT3NPwORIAIAAAAAAAAErqwKTUHNPlXCAEXQQEiKzT4FlADNfQyCng18zIKYDTzCRYyCjT9cABIFlA18rEisgE097ISI7IQNPSyFDT+shG2IrIBIQayEDT4shiABKDo9ZmyGjT3FrIaNPsWsho0/rIwNP2yMDT4sjKzMgpgNPMJNPIiWwkWMgo0/XAASDTyIQRbCRZQtwE+VwQAUDX1gAgAAAAAAAAS0jT1ULA09Uk19CEEWzXzNPQiWyISRDTzNPsPRDTzNPsJSTXyNPYPRLEisgE0/DT3CbISI7IQMQCyFDT+shGzsSKyATTyshIjshAxALIUNP2yEbOxIrIBNPuyEiOyEDT/shQ0/bIRs7EisgEishIjshAyCbIVMgqyFDT9shGzsSKyASKyEiOyEDIJshUyCrIUNP6yEbNCAtQrNPgWUAM19DIKeDXzMgpgNPMJFjIKNP1wAEgWUDXysSKyATT3shIjshA09LIUNP6yEbYisgEhBrIQNPiyGIAEfKR7uLIaNPcWsho0+xayGjT+sjA0/bIwNPiyMrMyCmA08wk08iJbCRYyCjT9cABINPIhBFsJFlC3AT5XBABQNfWACAAAAAAAABMoNPVQsDT1STX0IQRbNfM09CJbIhJENPM0+w9ENPM0+wlJNfI09g9EsSKyATT8NPcJshIjshAxALIUNP6yEbOxIrIBNPKyEiOyEDEAshQ0/bIRs7EisgE0+7ISI7IQNP+yFDT9shGzsSKyASKyEiOyEDIJshUyCrIUNP2yEbOxIrIBIrISI7IQMgmyFTIKshQ0/rIRs0IBskgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/1cgKDX+IQVbNf0hCls1/CELWzX7IQxbNfqABJqLkXSwNPs0/YgB8jT/MQASRCs0A1doCFADNfgyCng19zIKYDT3CRY19rEisgEhBrIQNAOBaFuyGIAE+pmLTLIaNP9JshyyGjEYFrIaKjT9FlCyGio0/BZQsho0+xayGjT6FrIaszIKYDT3CTT2FwkWtwA+VwQAUDX5gAgAAAAAAAARdjT5ULA0+TX4IjT4IlsSRDT/NP5QNP0WUDT8FlA0+xZQNPoWUChLAVcAaGdIJTUBMgY1AkIA20ghB4gBJiI0ARJENARJIhJMNAISEURJNQVJSkpXACg1/4EoWzX+gTBbNf2BOFs1/IFAWzX7IQVbNfqABIryZVc0/1A0/hZQNP0WUDT8FlA0+xZQNPoWULA0/TT+E0QhB4gAybEisgEishIjshAyCrIUNP6yEbMhB4gAsbEisgEishIjshAyCrIUNP2yEbM0/jT9E0QxADT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQKEsBVwBwZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUokCDUAOAcyChJEOBAkEkQ4CBJEiTQASUpJJAg1ADgUMgoSRDgQIxJEOBFPAhJEOBISRIk=`,
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
                "name": "v4419",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4420",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v4421",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v4422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v4423",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v4424",
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
                "name": "v4419",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4420",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v4421",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v4422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v4423",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v4424",
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
                    "name": "_Cancel0_3947",
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
                    "name": "_SwapViaPool0_3947",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v4519",
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
    "name": "_reach_oe_v4470",
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
    "name": "_reach_oe_v4531",
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
    "name": "_reach_oe_v4794",
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
    "name": "_reach_oe_v4818",
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
    "name": "_reach_oe_v4904",
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
                    "name": "_Cancel0_3947",
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
                    "name": "_SwapViaPool0_3947",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v4519",
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
            "internalType": "address payable",
            "name": "tokA",
            "type": "address"
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
  Bytecode: `0x6080604052604051620027e5380380620027e583398101604081905262000026916200038f565b60008055436003556040517fac7bf5bd57da04e00cba326be0a262ba581db0d5629016efda776ddefb562df39062000062903390849062000498565b60405180910390a1620000ab8160200151602001516001600160a01b03168260200151604001516001600160a01b031614620000a0576001620000a3565b60005b600862000209565b620000b93415600962000209565b620000fa8160200151604001516001600160a01b03168260200151602001516001600160a01b031614620000ef576001620000f2565b60005b600a62000209565b620001636040805160e0810182526000808252825160a08101845281815260208181018390529381018290526060810182905260808101919091529091820190815260006020820181905260408201819052606082018190526080820181905260a09091015290565b33815260208083018051518284015280518201516001600160a01b0390811660408086019190915282518101518216606080870191909152835101516080808701919091528351015160a0808701919091529251909201511660c08401526001600081905543905551620001da9183910162000542565b604051602081830303815290604052600290805190602001906200020092919062000233565b50505062000621565b816200022f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200024190620005e4565b90600052602060002090601f016020900481019282620002655760008555620002b0565b82601f106200028057805160ff1916838001178555620002b0565b82800160010185558215620002b0579182015b82811115620002b057825182559160200191906001019062000293565b50620002be929150620002c2565b5090565b5b80821115620002be5760008155600101620002c3565b604080519081016001600160401b03811182821017156200030a57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200030a57634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200030a57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200038a57600080fd5b919050565b6000818303610160811215620003a457600080fd5b620003ae620002d9565b83518152601f198201915061014080831215620003ca57600080fd5b620003d462000310565b60a0841215620003e357600080fd5b620003ed62000341565b9350620003fd6020870162000372565b84526200040d6040870162000372565b602085015260608601516040850152608086015160608501526200043460a0870162000372565b60808501528381526200044a60c0870162000372565b60208201526200045d60e0870162000372565b6040820152610100860151606082015261012086015160808201526200048582870162000372565b60a0820152602083015250949350505050565b60006101808201905060018060a01b038085168352835160208401526020840151620004fe60408501825180516001600160a01b039081168352602080830151821690840152604080830151908401526060808301519084015260809182015116910152565b6020810151821660e0850152604081015182166101008501526060810151610120850152608081015161014085015260a00151166101609092019190915292915050565b81516001600160a01b03908116825260208084015161016084019291620005a19085018280516001600160a01b039081168352602080830151821690840152604080830151908401526060808301519084015260809182015116910152565b508060408501511660c08401528060608501511660e0840152608084015161010084015260a08401516101208401528060c0850151166101408401525092915050565b600181811c90821680620005f957607f821691505b602082108114156200061b57634e487b7160e01b600052602260045260246000fd5b50919050565b6121b480620006316000396000f3fe6080604052600436106100795760003560e01c80635e43ae8e1161004b5780635e43ae8e146100f7578063832307571461010a578063ab53f2c61461011f578063e0cd1a061461014257005b80630a47debc146100825780631e93b0f1146100ad5780632c10a159146100cc5780634aa8e773146100df57005b3661008057005b005b34801561008e57600080fd5b50610097610155565b6040516100a491906119f3565b60405180910390f35b3480156100b957600080fd5b506003545b6040519081526020016100a4565b6100806100da366004611a01565b61018f565b6100e76101bf565b60405190151581526020016100a4565b6100e7610105366004611a3c565b6101ce565b34801561011657600080fd5b506001546100be565b34801561012b57600080fd5b506101346101e5565b6040516100a4929190611aae565b610080610150366004611ae8565b610282565b6040805160a081018252600080825260208201819052918101829052606081018290526080810182905290610189816102ae565b91505090565b60408051808201909152600080825260208201526101bb6101b536849003840184611bc4565b82610459565b5050565b60006101c9610859565b905090565b60006101dc85858585610892565b95945050505050565b6000606060005460028080546101fa90611bfc565b80601f016020809104026020016040519081016040528092919081815260200182805461022690611bfc565b80156102735780601f1061024857610100808354040283529160200191610273565b820191906000526020600020905b81548152906001019060200180831161025657829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101bb6102a836849003840184611c31565b8261090d565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052905460011415610392576000600280546102f190611bfc565b80601f016020809104026020016040519081016040528092919081815260200182805461031d90611bfc565b801561036a5780601f1061033f5761010080835404028352916020019161036a565b820191906000526020600020905b81548152906001019060200180831161034d57829003601f168201915b50505050508060200190518101906103829190611db1565b905061039060006007611160565b505b60026000541415610448576000600280546103ac90611bfc565b80601f01602080910402602001604051908101604052809291908181526020018280546103d890611bfc565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b505050505080602001905181019061043d9190611e6a565b602001519392505050565b61045460006007611160565b919050565b6104696001600054146012611160565b815161048490158061047d57508251600154145b6013611160565b60008080556002805461049690611bfc565b80601f01602080910402602001604051908101604052809291908181526020018280546104c290611bfc565b801561050f5780601f106104e45761010080835404028352916020019161050f565b820191906000526020600020905b8154815290600101906020018083116104f257829003601f168201915b50505050508060200190518101906105279190611db1565b9050610531611632565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610562929190611f13565b60405180910390a16105763415600b611160565b61059361058c3384604001518560800151611186565b600c611160565b81516105ab906001600160a01b03163314600d611160565b80516001908190526040838101805184516001600160a01b0391821690840152602085018051949094526060860151935193169290910191909152516105f8906105f5903061119e565b90565b60c08201526060820151610610906105f5903061119e565b6101008201524760a08083019190915282518251602084015160808601519386015160405160009563014d07ad60e21b956106579590943094919390929190602401611f9d565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460c001516001600160a01b03166000846040516106ad9190611fe6565b60006040518083038185875af1925050503d80600081146106ea576040519150601f19603f3d011682016040523d82523d6000602084013e6106ef565b606091505b509150915061070082826010611261565b5061071c61071286604001513061119e565b8560c00151900390565b60e0850181905261072f9015600e611160565b61074b61074086606001513061119e565b856101000151900390565b610120850181905261075f9015600f611160565b60a084015147036060850180519190915251608085018190526040517f267474611ab3e16ce3cbbabb1b5a7967d3c173b25bfa968a184290c2a2d84f1194506107ab9350909150612002565b60405180910390a16080810151516107c590156011611160565b6107cd6116f5565b82516001600160a01b03908116825260208085015181840152604080860151831681850152606080870151909316928401929092526080808601519084015260a08086015190840152600260005543600155905161082d9183910161201b565b60405160208183030381529060405260029080519060200190610851929190611763565b505050505050565b60006108636117e7565b60208181015151600090819052604080518082019091528181529182015261088b828261090d565b5192915050565b600061089c6117e7565b6020818101805151600190528051516040908101516001600160a01b038a16905281515181015188151590840152815151810151810187905290515181015160600185905280518082019091526000808252918101919091526108ff828261090d565b602001519695505050505050565b61091d6002600054146026611160565b815161093890158061093157508251600154145b6027611160565b60008080556002805461094a90611bfc565b80601f016020809104026020016040519081016040528092919081815260200182805461097690611bfc565b80156109c35780601f10610998576101008083540402835291602001916109c3565b820191906000526020600020905b8154815290600101906020018083116109a657829003601f168201915b50505050508060200190518101906109db9190611e6a565b90506109e5611844565b7fb6370803f5808d5248ae02f0b1012b90554877556c5a1a77bedc93d33c77a49b3385604051610a16929190612076565b60405180910390a16000602085015151516001811115610a3857610a38611f3c565b1415610acc57610a4a34156014611160565b8151610a62906001600160a01b031633146015611160565b604051600081527f21ace137931ffcc63a4ab669dd7e4dbaca6385470824ef3b354f93a5ebb64cf69060200160405180910390a160008352604082015182516080840151610ab192919061129c565b60008080556001819055610ac79060029061191c565b61115a565b6001602085015151516001811115610ae657610ae6611f3c565b141561115a57602084015151604001518152610b0434156016611160565b610b1e826080015182600001516040015111156017611160565b604051600081527fbc0b4ed516388584a51954ed0895876d8ae4b94f83ff79f68c3cbf1869e1b6739060200160405180910390a160006020808501919091528151015115610e745760a082015160208201515260408083015182518051920151610b9392610b8c92916112b5565b6018611160565b610ba182606001513061119e565b6101408201526040820151610bc590610bba903061119e565b825160400151900390565b61016082015247610120820152805160409081015160a0840151915160009263c8867ae960e01b92610c0592909190602401918252602082015260400190565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808360000151600001516001600160a01b0316600084604051610c5f9190611fe6565b60006040518083038185875af1925050503d8060008114610c9c576040519150601f19603f3d011682016040523d82523d6000602084013e610ca1565b606091505b5091509150610cb28282601b611261565b50610ccf610cc486604001513061119e565b856101600151900390565b6101808501819052610ce39015601a611160565b610cff610cf486606001513061119e565b856101400151611386565b6040808601516020015191909152850151845151610d2a91610d229130906113db565b156019611160565b61012084015147036040850151528051610d4d90820160209081019083016120f1565b60408581018051820192909252905160608087018290528251825181526020808401515181830152928401518051948201949094529290910151908201527fea354d3160671606966fa5be2846b81bf9df87859fa596b600a7c309386a6a0193506080019150610dba9050565b60405180910390a1606081015151610dd49015601c611160565b610df28260a00151826060015160200151600001511015601d611160565b610e0c816060015160200151600001518360a00151611386565b60808201819052815160600151610e26911015601e611160565b610e4a826040015133610e458560800151856000015160400151611386565b61129c565b610e5d826060015133836080015161129c565b610ab1826060015183600001518460a0015161129c565b60a080830151908201515260408083015182518051920151610ea192610e9a92916112b5565b601f611160565b610eaf82606001513061119e565b6101c08201526040820151610ec890610bba903061119e565b6101e0820152476101a0820152805160409081015160a0840151915160009263dc8d714f60e01b92610f0892909190602401918252602082015260400190565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808360000151600001516001600160a01b0316600084604051610f629190611fe6565b60006040518083038185875af1925050503d8060008114610f9f576040519150601f19603f3d011682016040523d82523d6000602084013e610fa4565b606091505b5091509150610fb582826022611261565b50610fd2610fc786604001513061119e565b856101e00151900390565b6102008501819052610fe690156021611160565b611002610ff786606001513061119e565b856101c00151611386565b60c08501516020015152604085015184515161102b916110239130906113db565b156020611160565b6101a0840151470360c085015152805161104e90820160209081019083016120f1565b60c0850180516040908101929092525160e0860181905281518151815260208083015151818301529183015180519382019390935291015160608201527f46c334f82fc05d5c1026b2d644bc1f3d3ffae10e24a6185ed7ada0dea3d1ae2f935060800191506110ba9050565b60405180910390a160e0810151516110d490156023611160565b6110f28260a001518260e00151602001516000015110156024611160565b61110c8160e0015160200151600001518360a00151611386565b61010082018190528151606001516111279110156025611160565b611146826040015133610e458560800151856000015160400151611386565b610e5d82606001513383610100015161129c565b50505050565b816101bb5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611194838530856114a6565b90505b9392505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b1790529151600092839283929187169183916111f991611fe6565b60006040518083038185875af1925050503d8060008114611236576040519150601f19603f3d011682016040523d82523d6000602084013e61123b565b606091505b509150915061124c82826006611261565b50808060200190518101906101dc9190612123565b60608315611270575081611197565b8251156112805782518084602001fd5b60405163100960cb60e01b81526004810183905260240161117d565b6112a7838383611580565b6112b057600080fd5b505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b17905291516000928392839291881691839161131491611fe6565b60006040518083038185875af1925050503d8060008114611351576040519150601f19603f3d011682016040523d82523d6000602084013e611356565b606091505b509150915061136782826005611261565b508080602001905181019061137c919061213c565b9695505050505050565b6000826113938382612159565b91508111156113d55760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161117d565b92915050565b604080516001600160a01b03848116602483015283811660448084019190915283518084039091018152606490920183526020820180516001600160e01b0316636eb1769f60e11b17905291516000928392839291881691839161143e91611fe6565b60006040518083038185875af1925050503d806000811461147b576040519150601f19603f3d011682016040523d82523d6000602084013e611480565b606091505b509150915061149182826000611261565b508080602001905181019061137c9190612123565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161150d91611fe6565b60006040518083038185875af1925050503d806000811461154a576040519150601f19603f3d011682016040523d82523d6000602084013e61154f565b606091505b509150915061156082826001611261565b5080806020019051810190611575919061213c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916115df91611fe6565b60006040518083038185875af1925050503d806000811461161c576040519150601f19603f3d011682016040523d82523d6000602084013e611621565b606091505b509150915061136782826002611261565b604080516101a081019091526000610140820181815261016083018290526101808301919091528190815260408051606081018252600080825260208281018290529282015291019081526020016000151581526020016116a86040518060400160405280600081526020016000151581525090565b81526020016116cc6040518060400160405280600081526020016000151581525090565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b031681526020016117416040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152600060208201819052604082018190526060820181905260809091015290565b82805461176f90611bfc565b90600052602060002090601f01602090048101928261179157600085556117d7565b82601f106117aa57805160ff19168380011785556117d7565b828001600101855582156117d7579182015b828111156117d75782518255916020019190600101906117bc565b506117e3929150611959565b5090565b60405180604001604052806000815260200161183f6040805160808082018352600060208084018281528486018390528551938401865282845290830182905293820181905260608281019190915282015290815290565b905290565b604080516102a0810182526000610220820181815261024083018290526102608301829052610280830182905282528251602080820185529181529082015290810161188e61196e565b815260200161189b61196e565b8152602001600081526020016118bd6040518060200160405280600081525090565b81526020016118ca61196e565b81526020016118d761196e565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b50805461192890611bfc565b6000825580601f10611938575050565b601f0160209004906000526020600020908101906119569190611959565b50565b5b808211156117e3576000815560010161195a565b6040518060600160405280600081526020016119966040518060200160405280600081525090565b815260200161183f604051806040016040528060008152602001600081525090565b80516001600160a01b039081168352602080830151821690840152604080830151908401526060808301519084015260809182015116910152565b60a081016113d582846119b8565b600060408284031215611a1357600080fd5b50919050565b6001600160a01b038116811461195657600080fd5b801515811461195657600080fd5b60008060008060808587031215611a5257600080fd5b8435611a5d81611a19565b93506020850135611a6d81611a2e565b93969395505050506040820135916060013590565b60005b83811015611a9d578181015183820152602001611a85565b8381111561115a5750506000910152565b8281526040602082015260008251806040840152611ad3816060850160208701611a82565b601f01601f1916919091016060019392505050565b600060e08284031215611a1357600080fd5b6040805190810167ffffffffffffffff81118282101715611b2b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611b2b57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611b2b57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611b2b57634e487b7160e01b600052604160045260246000fd5b600060408284031215611bd657600080fd5b611bde611afa565b823581526020830135611bf081611a2e565b60208201529392505050565b600181811c90821680611c1057607f821691505b60208210811415611a1357634e487b7160e01b600052602260045260246000fd5b600081830360e0811215611c4457600080fd5b611c4c611afa565b8335815260c0601f1983011215611c6257600080fd5b611c6a611b31565b611c72611b62565b602086013560028110611c8457600080fd5b81526040860135611c9481611a2e565b60208201526080605f1985011215611cab57600080fd5b611cb3611b93565b93506060860135611cc381611a19565b84526080860135611cd381611a2e565b8060208601525060a0860135604085015260c086013560608501528360408201528082525080602083015250809250505092915050565b805161045481611a19565b600060a08284031215611d2757600080fd5b60405160a0810181811067ffffffffffffffff82111715611d5857634e487b7160e01b600052604160045260246000fd5b80604052508091508251611d6b81611a19565b81526020830151611d7b81611a19565b8060208301525060408301516040820152606083015160608201526080830151611da481611a19565b6080919091015292915050565b60006101608284031215611dc457600080fd5b60405160e0810181811067ffffffffffffffff82111715611df557634e487b7160e01b600052604160045260246000fd5b6040528251611e0381611a19565b8152611e128460208501611d15565b602082015260c0830151611e2581611a19565b6040820152611e3660e08401611d0a565b6060820152610100830151608082015261012083015160a0820152611e5e6101408401611d0a565b60c08201529392505050565b60006101408284031215611e7d57600080fd5b60405160c0810181811067ffffffffffffffff82111715611eae57634e487b7160e01b600052604160045260246000fd5b6040528251611ebc81611a19565b8152611ecb8460208501611d15565b602082015260c0830151611ede81611a19565b604082015260e0830151611ef181611a19565b606082015261010083015160808201526101209092015160a083015250919050565b6001600160a01b0383168152606081016111976020830184805182526020908101511515910152565b634e487b7160e01b600052602160045260246000fd5b6002811061195657634e487b7160e01b600052602160045260246000fd5b8051611f7b81611f52565b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b038781168252861660208201526101408101611fc36040830187611f70565b611fd060a0830186611f70565b6101008201939093526101200152949350505050565b60008251611ff8818460208701611a82565b9190910192915050565b81518152602080830151151590820152604081016113d5565b81516001600160a01b03908116825260208084015161014084019291612043908501826119b8565b506040840151811660c084015260608401511660e0830152608083015161010083015260a0909201516101209091015290565b6001600160a01b038381168252825160208084019190915283015151805161010084019291906120a581611f52565b80604086015250602081015115156060850152604081015190508181511660808501526020810151151560a0850152604081015160c0850152606081015160e085015250509392505050565b60006040828403121561210357600080fd5b61210b611afa565b82518152602083015160208201528091505092915050565b60006020828403121561213557600080fd5b5051919050565b60006020828403121561214e57600080fd5b815161119781611a2e565b60008282101561217957634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220a5d4c90273f7f55092cf905cf6981cae7ce130be49cf8ffd9c71529b0dffd21864736f6c634300080c0033`,
  BytecodeLen: 10213,
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
