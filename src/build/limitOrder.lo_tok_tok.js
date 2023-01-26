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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3], ['creator', ctc0]]);
  
  const _opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v4613, v4614, v4615, v4616, v4617, v4618, v4619] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4613, v4614, v4615, v4616, v4617, v4618] = svs;
      return (await ((async () => {
        
        
        return v4614;}))(...args));
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
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3], ['creator', ctc0]]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc6, ctc2, ctc2]);
  const ctc8 = stdlib.T_Data({
    Cancel0_4141: ctc5,
    SwapViaPool0_4141: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v4613, v4614, v4615, v4616, v4617, v4618] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]);
  const v4702 = ctc.selfAddress();
  const v4704 = stdlib.protect(ctc5, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:118:24:application call to [unknown function] (defined at: ./limitOrder.rsh:118:24:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runCancel0_4141" (defined at: ./limitOrder.rsh:118:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'in',
    who: 'Cancel'
    });
  const v4705 = stdlib.addressEq(v4702, v4613);
  stdlib.assert(v4705, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:118:24:application call to [unknown function] (defined at: ./limitOrder.rsh:118:24:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runCancel0_4141" (defined at: ./limitOrder.rsh:118:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: null,
    who: 'Cancel'
    });
  const v4710 = ['Cancel0_4141', v4704];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4613, v4614, v4615, v4616, v4617, v4618, v4710],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:118:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4715], secs: v4717, time: v4716, didSend: v4290, from: v4714 } = txn1;
      
      switch (v4715[0]) {
        case 'Cancel0_4141': {
          const v4718 = v4715[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Cancel"
            });
          ;
          const v4727 = null;
          const v4728 = await txn1.getOutput('Cancel', 'v4727', ctc9, v4727);
          
          sim_r.txns.push({
            kind: 'from',
            to: v4613,
            tok: v4615
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v4616
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v4615
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'SwapViaPool0_4141': {
          const v4945 = v4715[1];
          
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
  const {data: [v4715], secs: v4717, time: v4716, didSend: v4290, from: v4714 } = txn1;
  switch (v4715[0]) {
    case 'Cancel0_4141': {
      const v4718 = v4715[1];
      undefined /* setApiDetails */;
      ;
      const v4725 = stdlib.addressEq(v4714, v4613);
      stdlib.assert(v4725, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'Cancel'
        });
      const v4727 = null;
      const v4728 = await txn1.getOutput('Cancel', 'v4727', ctc9, v4727);
      if (v4290) {
        stdlib.protect(ctc9, await interact.out(v4718, v4728), {
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
    case 'SwapViaPool0_4141': {
      const v4945 = v4715[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['tokA', ctc0], ['tokB', ctc0], ['amtA', ctc1], ['amtB', ctc1], ['ctcAnnouncer', ctc2], ['creator', ctc3]]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc8, ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    Cancel0_4141: ctc7,
    SwapViaPool0_4141: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc11, ctc12]);
  
  
  const v4594 = stdlib.protect(ctc4, interact.opts, 'for D\'s interact field opts');
  const v4595 = v4594.tokA;
  const v4596 = v4594.tokB;
  const v4597 = v4594.amtA;
  const v4598 = v4594.amtB;
  const v4599 = v4594.ctcAnnouncer;
  
  const v4608 = stdlib.tokenEq(v4595, v4596);
  const v4609 = v4608 ? false : true;
  stdlib.assert(v4609, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:13:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:46:19:application call to "checkOpts" (defined at: ./limitOrder.rsh:12:42:function exp)', 'at ./limitOrder.rsh:43:9:application call to [unknown function] (defined at: ./limitOrder.rsh:43:13:function exp)'],
    msg: null,
    who: 'D'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4594, v4595, v4596, v4597, v4598, v4599],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./limitOrder.rsh:48:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc0, ctc0, ctc1, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:48:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4614, v4615, v4616, v4617, v4618, v4619], secs: v4621, time: v4620, didSend: v4042, from: v4613 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4615
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4616
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v4614, v4615, v4616, v4617, v4618, v4619], secs: v4621, time: v4620, didSend: v4042, from: v4613 } = txn1;
  const v4630 = stdlib.tokenEq(v4616, v4615);
  const v4631 = v4630 ? false : true;
  stdlib.assert(v4631, {
    at: './limitOrder.rsh:48:5:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'D'
    });
  ;
  ;
  ;
  const v4632 = stdlib.tokenEq(v4615, v4616);
  const v4633 = v4632 ? false : true;
  stdlib.assert(v4633, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:13:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:49:35:application call to "checkOpts" (defined at: ./limitOrder.rsh:12:42:function exp)'],
    msg: null,
    who: 'D'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v4613, v4614, v4615, v4616, v4617, v4618, v4619],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4620,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:52:5:dot', stdlib.UInt_max, '0'), [[v4617, v4615]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v4641, time: v4640, didSend: v4108, from: v4639 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v4617,
        kind: 'to',
        tok: v4615
        });
      
      const v4658 = await ctc.getContractInfo();
      const v4659 = ['Some', v4615];
      const v4660 = ['Some', v4616];
      const v4663 = [];
      const v4666 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v4619,
          remote: ({
            accs: [v4613],
            apps: [],
            bills: stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc5.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v4666', ctc6, v4666);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc0, ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4641, time: v4640, didSend: v4108, from: v4639 } = txn2;
  ;
  ;
  const v4650 = stdlib.addressEq(v4613, v4639);
  stdlib.assert(v4650, {
    at: './limitOrder.rsh:52:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc5, await interact.ready(), {
    at: './limitOrder.rsh:53:19:application',
    fs: ['at ./limitOrder.rsh:53:19:application call to [unknown function] (defined at: ./limitOrder.rsh:53:19:function exp)', 'at ./limitOrder.rsh:53:19:application call to "liftedInteract" (defined at: ./limitOrder.rsh:53:19:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v4658 = await ctc.getContractInfo();
  const v4659 = ['Some', v4615];
  const v4660 = ['Some', v4616];
  const v4663 = [];
  const v4666 = undefined /* Remote */;
  const v4667 = await txn2.getOutput('internal', 'v4666', ctc6, v4666);
  const v4669 = v4667[stdlib.checkedBigNumberify('./limitOrder.rsh:56:24:application', stdlib.UInt_max, '0')];
  const v4675 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4669);
  stdlib.assert(v4675, {
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
  const {data: [v4715], secs: v4717, time: v4716, didSend: v4290, from: v4714 } = txn3;
  switch (v4715[0]) {
    case 'Cancel0_4141': {
      const v4718 = v4715[1];
      undefined /* setApiDetails */;
      ;
      const v4725 = stdlib.addressEq(v4714, v4613);
      stdlib.assert(v4725, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: null,
        who: 'D'
        });
      const v4727 = null;
      await txn3.getOutput('Cancel', 'v4727', ctc5, v4727);
      ;
      return;
      
      break;
      }
    case 'SwapViaPool0_4141': {
      const v4945 = v4715[1];
      undefined /* setApiDetails */;
      ;
      const v4980 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v4981 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v4982 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v4983 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '3')];
      const v4984 = stdlib.le(v4982, v4617);
      stdlib.assert(v4984, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'D'
        });
      const v4990 = null;
      await txn3.getOutput('SwapViaPool', 'v4990', ctc5, v4990);
      if (v4981) {
        const v5013 = [v4618];
        const v5014 = undefined /* Remote */;
        const v5015 = await txn3.getOutput('internal', 'v5014', ctc13, v5014);
        const v5017 = v5015[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5018 = v5015[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v5020 = v5018[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5039 = stdlib.eq(v5017, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5039, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v5041 = stdlib.ge(v5020, v4618);
        stdlib.assert(v5041, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v5042 = stdlib.safeSub(v4617, v4982);
        const v5043 = stdlib.safeSub(v5020, v4618);
        const v5044 = stdlib.ge(v5043, v4983);
        stdlib.assert(v5044, {
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
        const v5099 = [v4618];
        const v5100 = undefined /* Remote */;
        const v5101 = await txn3.getOutput('internal', 'v5100', ctc13, v5100);
        const v5103 = v5101[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5104 = v5101[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v5106 = v5104[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5125 = stdlib.eq(v5103, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5125, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:105:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'D'
          });
        const v5127 = stdlib.ge(v5106, v4618);
        stdlib.assert(v5127, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'D'
          });
        const v5128 = stdlib.safeSub(v4617, v4982);
        const v5129 = stdlib.safeSub(v5106, v4618);
        const v5130 = stdlib.ge(v5129, v4983);
        stdlib.assert(v5130, {
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['tokA', ctc1], ['tokB', ctc1], ['amtA', ctc2], ['amtB', ctc2], ['ctcAnnouncer', ctc3], ['creator', ctc0]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc5, ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Cancel0_4141: ctc7,
    SwapViaPool0_4141: ctc6
    });
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc10, ctc11]);
  
  
  const [v4613, v4614, v4615, v4616, v4617, v4618] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2]);
  const v4678 = stdlib.protect(ctc6, await interact.in(), {
    at: './limitOrder.rsh:1:23:application',
    fs: ['at ./limitOrder.rsh:67:62:application call to [unknown function] (defined at: ./limitOrder.rsh:67:62:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runSwapViaPool0_4141" (defined at: ./limitOrder.rsh:67:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'in',
    who: 'SwapViaPool'
    });
  const v4681 = v4678[stdlib.checkedBigNumberify('./limitOrder.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4687 = stdlib.le(v4681, v4617);
  stdlib.assert(v4687, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./limitOrder.rsh:67:62:application call to [unknown function] (defined at: ./limitOrder.rsh:67:62:function exp)', 'at ./limitOrder.rsh:66:7:application call to "runSwapViaPool0_4141" (defined at: ./limitOrder.rsh:67:10:function exp)', 'at ./limitOrder.rsh:66:7:application call to [unknown function] (defined at: ./limitOrder.rsh:66:7:function exp)'],
    msg: 'giveA <= amtA',
    who: 'SwapViaPool'
    });
  const v4700 = ['SwapViaPool0_4141', v4678];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4613, v4614, v4615, v4616, v4617, v4618, v4700],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4715], secs: v4717, time: v4716, didSend: v4290, from: v4714 } = txn1;
      
      switch (v4715[0]) {
        case 'Cancel0_4141': {
          const v4718 = v4715[1];
          
          break;
          }
        case 'SwapViaPool0_4141': {
          const v4945 = v4715[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SwapViaPool"
            });
          ;
          const v4980 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
          const v4981 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
          const v4982 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
          const v4990 = null;
          const v4991 = await txn1.getOutput('SwapViaPool', 'v4990', ctc9, v4990);
          
          if (v4981) {
            const v5013 = [v4618];
            const v5014 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4980,
                remote: ({
                  accs: [],
                  apps: [v4980],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '2'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:81:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1'),
                  toks: [v4616, v4615]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v5013 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5015 = await txn1.getOutput('internal', 'v5014', ctc12, v5014);
            const v5018 = v5015[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
            const v5020 = v5018[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
            const v5042 = stdlib.safeSub(v4617, v4982);
            const v5043 = stdlib.safeSub(v5020, v4618);
            sim_r.txns.push({
              kind: 'from',
              to: v4714,
              tok: v4615
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4714,
              tok: v4616
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4613,
              tok: v4616
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4616
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4615
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v5099 = [v4618];
            const v5100 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4980,
                remote: ({
                  accs: [],
                  apps: [v4980],
                  bills: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '2'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('./limitOrder.rsh:81:20:application', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1'),
                  toks: [v4616, v4615]
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v5099 /* simTokensRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5101 = await txn1.getOutput('internal', 'v5100', ctc12, v5100);
            const v5104 = v5101[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
            const v5106 = v5104[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
            const v5128 = stdlib.safeSub(v4617, v4982);
            const v5129 = stdlib.safeSub(v5106, v4618);
            sim_r.txns.push({
              kind: 'from',
              to: v4714,
              tok: v4615
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4714,
              tok: v4616
              });
            sim_r.txns.push({
              kind: 'from',
              to: v4613,
              tok: v4616
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4616
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4615
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
  const {data: [v4715], secs: v4717, time: v4716, didSend: v4290, from: v4714 } = txn1;
  switch (v4715[0]) {
    case 'Cancel0_4141': {
      const v4718 = v4715[1];
      return;
      break;
      }
    case 'SwapViaPool0_4141': {
      const v4945 = v4715[1];
      undefined /* setApiDetails */;
      ;
      const v4980 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v4981 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v4982 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v4983 = v4945[stdlib.checkedBigNumberify('./limitOrder.rsh:67:10:spread', stdlib.UInt_max, '3')];
      const v4984 = stdlib.le(v4982, v4617);
      stdlib.assert(v4984, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./limitOrder.rsh:68:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'giveA <= amtA',
        who: 'SwapViaPool'
        });
      const v4990 = null;
      const v4991 = await txn1.getOutput('SwapViaPool', 'v4990', ctc9, v4990);
      if (v4290) {
        stdlib.protect(ctc9, await interact.out(v4945, v4991), {
          at: './limitOrder.rsh:67:11:application',
          fs: ['at ./limitOrder.rsh:67:11:application call to [unknown function] (defined at: ./limitOrder.rsh:67:11:function exp)', 'at ./limitOrder.rsh:70:10:application call to "k" (defined at: ./limitOrder.rsh:69:17:function exp)'],
          msg: 'out',
          who: 'SwapViaPool'
          });
        }
      else {
        }
      
      if (v4981) {
        const v5013 = [v4618];
        const v5014 = undefined /* Remote */;
        const v5015 = await txn1.getOutput('internal', 'v5014', ctc12, v5014);
        const v5017 = v5015[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5018 = v5015[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v5020 = v5018[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5039 = stdlib.eq(v5017, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5039, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:104:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v5041 = stdlib.ge(v5020, v4618);
        stdlib.assert(v5041, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v5042 = stdlib.safeSub(v4617, v4982);
        const v5043 = stdlib.safeSub(v5020, v4618);
        const v5044 = stdlib.ge(v5043, v4983);
        stdlib.assert(v5044, {
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
        const v5099 = [v4618];
        const v5100 = undefined /* Remote */;
        const v5101 = await txn1.getOutput('internal', 'v5100', ctc12, v5100);
        const v5103 = v5101[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5104 = v5101[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '1')];
        const v5106 = v5104[stdlib.checkedBigNumberify('./limitOrder.rsh:87:15:application', stdlib.UInt_max, '0')];
        const v5125 = stdlib.eq(v5103, stdlib.checkedBigNumberify('./limitOrder.rsh:88:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5125, {
          at: './limitOrder.rsh:88:20:application',
          fs: ['at ./limitOrder.rsh:105:19:application call to "doSwap" (defined at: ./limitOrder.rsh:78:31:function exp)'],
          msg: 'net == 0',
          who: 'SwapViaPool'
          });
        const v5127 = stdlib.ge(v5106, v4618);
        stdlib.assert(v5127, {
          at: './limitOrder.rsh:108:16:application',
          fs: [],
          msg: 'recvB >= amtB',
          who: 'SwapViaPool'
          });
        const v5128 = stdlib.safeSub(v4617, v4982);
        const v5129 = stdlib.safeSub(v5106, v4618);
        const v5130 = stdlib.ge(v5129, v4983);
        stdlib.assert(v5130, {
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
    impure: [`Cancel()void`, `SwapViaPool(uint64,byte,uint64,uint64)void`, `_reachp_0((uint64,(uint64,uint64,uint64,uint64,uint64,address),uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[25])))void`],
    pure: [`opts()(uint64,uint64,uint64,uint64,uint64,address)`],
    sigs: [`Cancel()void`, `SwapViaPool(uint64,byte,uint64,uint64)void`, `_reachp_0((uint64,(uint64,uint64,uint64,uint64,uint64,address),uint64,uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[25])))void`, `opts()(uint64,uint64,uint64,uint64,uint64,address)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEIAgZocKCNBgR4gAEmBAABAQVhcHBJRAEAMRhBBCUoZEkiWzUBJFs1AitkKWRQggYEBpuE9AQXlmayBH7cseEEpsvLIQTGdVwQBN/ZIyg2GgCOBgA7BRcDvgPZAAEDzgCBIq81CyU0ARJEiAVbNAsiWzUMNAtXCBo1DYAEQlXiHDQMFlA0DVCwNAyIBSs0DSJVjQIE3APNQv/FNhoBFzYaAhc2GgMXNhoEFzULNQw1DTUOJK8pNA4WNA0WUQcIUDQMFlA0CxZQUFA1C0L/lzEANBISRCg1C4AIAAAAAAAAEnc0C1CwNAs1BDQPNBE0EogEuCI0EDIKMgmIBLIiNBEyCjIJiASoMRmBBRJEiATdIjIKMgmIBOk0A0AACoAEFR98dTQEULAjQzQLIls1FDQLgQlbNRM0C4ERWzUNNBM0Dw5EKDUMgAgAAAAAAAATfjQMULA0DDUENAtXCAEXQQMOKjQUFlADNQgyCng1CSgyCmA0CQkWMgo0EHAASBZQNQo0EzQRNAiIBG+2IrIBIQSyEDQUshiABKDo9ZmyGjQTFrIaNA4Wsho0EbIwNBCyMDQUsjKzMgpgNAkJNAoiWwkWMgo0EHAASDQKJFsJFlC3AT5XBABQNQuACAAAAAAAABOWNAtQsDQLSTUMJFs1CzQMIlsiEkQ0CzQOD0Q0CzQOCUk1DDQND0Q0DzQTCTQRMQCIA5c0DDQQMQCIA440DjQQNBKIA4UiNBAyCjIJiAN/IjQRMgoyCYgDdUL+yjQBJRJEiAOENAw1BDEZIhJEQv7MMQA1EjQLIls1DTQLVwhINQw0C4FQWzURNAuBWFs1EDQLgWBbNQ80CyEFWzUONAshBls1E4AEsCa8WjQNFlA0DFA0ERZQNBAWUDQPFlA0DhZQNBMWULA0DYgDDTQQNBETRCEHiAMMIjQRMgqIAuwhB4gC/yI0EDIKiALfNBE0EBNENBI0DFA0ERZQNBAWUDQPFlA0DhZQNBMWUCMyBjUCNQErSwFXAH9nKUxXfxFnKDQBFjQCFlBnMRkiEkSIAt1C/gUjNAESRElXACA1EklXIEg1DEkhBVs1EUkhBls1EEkhCVs1D0khCls1DoGIAVs1EzQLFzUNgATVFRkUNA0WULA0DYgCYjQPNBExFjQAIwhJNQAJRwM4FDIKEkQ4ECEIEkQ4EU8CEkQ4EhJENBIxABJEKjQTFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQTshiABEqca8myGjQSSbIcshoxGBayGik0ERZQshopNBAWULIaNA8Wsho0DhayGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAEjo0C1CwNAs1DSI0DSJbEkQ0EjQMUDQRFlA0EBZQNA8WUDQOFlAkr1AlMgZC/tCIAZQhB4gBnTYaATULQv4jiAGENhoBNQtC/tqIAXk2GgE1C0L8IiIxNBJEgQMxNRJEIjE2EkQiMTcSRIgBWYGQAa8iIkL+iTQNVwEZNQtC/LoqNBQWUAM1CDIKeDUJKDIKYDQJCRYyCjQQcABIFlA1CjQTNBE0CIgBYbYisgEhBLIQNBSyGIAEfKR7uLIaNBMWsho0DhayGjQRsjA0ELIwNBSyMrMyCmA0CQk0CiJbCRYyCjQQcABINAokWwkWULcBPlcEAFA1C4AIAAAAAAAAE+w0C1CwNAtJNQwkWzULNAwiWyISRDQLNA4PRDQLNA4JSTUMNA0PRDQPNBMJNBExAIgAiTQMNBAxAIgAgDQONBA0EogAdyI0EDIKMgmIAHEiNBEyCjIJiABnQvu8IrIBIQiyELIUshGyEokisgEhCLIQshSyEbISs4kisgEjshCyB7IIs4lC+1hC/MNIiUwJSTUGMgmIAHeJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJsUL/qrGyFUL/pCM1A4lJIhJMNAISEUSJNAYINQaJSVcAIDUSSVcgSDUMSSEFWzURSSEGWzUQSSEJWzUPIQpbNQ6JNAY0B0oPQf+GQv+OsUL/TrFC/2exsglC/2E=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `25`,
    1000: `607`,
    1001: `608`,
    1002: `608`,
    1003: `609`,
    1004: `609`,
    1005: `609`,
    1006: `609`,
    1007: `609`,
    1008: `609`,
    1009: `609`,
    101: `28`,
    1010: `609`,
    1011: `609`,
    1012: `609`,
    1013: `610`,
    1014: `610`,
    1015: `611`,
    1016: `612`,
    1017: `613`,
    1018: `613`,
    1019: `614`,
    102: `28`,
    1020: `614`,
    1021: `615`,
    1022: `616`,
    1023: `616`,
    1024: `617`,
    1025: `618`,
    1026: `619`,
    1027: `620`,
    1028: `624`,
    1029: `624`,
    103: `29`,
    1030: `625`,
    1031: `625`,
    1032: `626`,
    1033: `627`,
    1034: `627`,
    1035: `628`,
    1036: `629`,
    1037: `630`,
    1038: `630`,
    1039: `631`,
    104: `30`,
    1040: `632`,
    1041: `633`,
    1042: `633`,
    1043: `634`,
    1044: `635`,
    1045: `636`,
    1046: `636`,
    1047: `637`,
    1048: `638`,
    1049: `639`,
    105: `30`,
    1050: `640`,
    1051: `641`,
    1052: `642`,
    1053: `643`,
    1054: `643`,
    1055: `644`,
    1056: `644`,
    1057: `644`,
    1058: `646`,
    1059: `646`,
    106: `32`,
    1060: `646`,
    1061: `647`,
    1062: `647`,
    1063: `648`,
    1064: `648`,
    1065: `648`,
    1066: `649`,
    1067: `649`,
    1068: `649`,
    1069: `650`,
    107: `33`,
    1070: `650`,
    1071: `651`,
    1072: `651`,
    1073: `651`,
    1074: `653`,
    1075: `653`,
    1076: `653`,
    1077: `654`,
    1078: `654`,
    1079: `654`,
    108: `33`,
    1080: `655`,
    1081: `655`,
    1082: `656`,
    1083: `656`,
    1084: `656`,
    1085: `658`,
    1086: `658`,
    1087: `658`,
    1088: `659`,
    1089: `659`,
    109: `34`,
    1090: `659`,
    1091: `660`,
    1092: `660`,
    1093: `661`,
    1094: `661`,
    1095: `661`,
    1096: `663`,
    1097: `664`,
    1098: `664`,
    1099: `665`,
    11: `2`,
    110: `35`,
    1100: `666`,
    1101: `667`,
    1102: `667`,
    1103: `668`,
    1104: `668`,
    1105: `669`,
    1106: `670`,
    1107: `671`,
    1108: `672`,
    1109: `672`,
    111: `36`,
    1110: `673`,
    1111: `674`,
    1112: `675`,
    1113: `676`,
    1114: `676`,
    1115: `677`,
    1116: `678`,
    1117: `679`,
    1118: `679`,
    1119: `679`,
    112: `36`,
    1120: `680`,
    1121: `680`,
    1122: `680`,
    1123: `681`,
    1124: `682`,
    1125: `683`,
    1126: `684`,
    1127: `684`,
    1128: `684`,
    1129: `686`,
    113: `36`,
    1130: `686`,
    1131: `687`,
    1132: `687`,
    1133: `687`,
    1134: `688`,
    1135: `688`,
    1136: `689`,
    1137: `689`,
    1138: `689`,
    1139: `691`,
    114: `37`,
    1140: `692`,
    1141: `692`,
    1142: `693`,
    1143: `694`,
    1144: `695`,
    1145: `696`,
    1146: `696`,
    1147: `697`,
    1148: `697`,
    1149: `698`,
    115: `37`,
    1150: `699`,
    1151: `699`,
    1152: `700`,
    1153: `701`,
    1154: `701`,
    1155: `702`,
    1156: `703`,
    1157: `703`,
    1158: `704`,
    1159: `705`,
    116: `38`,
    1160: `706`,
    1161: `706`,
    1162: `708`,
    1163: `708`,
    1164: `709`,
    1165: `709`,
    1166: `710`,
    1167: `711`,
    1168: `712`,
    1169: `713`,
    117: `39`,
    1170: `713`,
    1171: `714`,
    1172: `714`,
    1173: `716`,
    1174: `716`,
    1175: `717`,
    1176: `717`,
    1177: `718`,
    1178: `718`,
    1179: `718`,
    118: `40`,
    1180: `719`,
    1181: `720`,
    1182: `721`,
    1183: `721`,
    1184: `722`,
    1185: `722`,
    1186: `723`,
    1187: `723`,
    1188: `724`,
    1189: `724`,
    119: `40`,
    1190: `726`,
    1191: `726`,
    1192: `727`,
    1193: `727`,
    1194: `727`,
    1195: `727`,
    1196: `727`,
    1197: `727`,
    1198: `728`,
    1199: `728`,
    12: `2`,
    120: `41`,
    1200: `729`,
    1201: `729`,
    1202: `730`,
    1203: `731`,
    1204: `731`,
    1205: `732`,
    1206: `732`,
    1207: `733`,
    1208: `734`,
    1209: `734`,
    121: `41`,
    1210: `735`,
    1211: `735`,
    1212: `736`,
    1213: `736`,
    1214: `737`,
    1215: `737`,
    1216: `738`,
    1217: `738`,
    1218: `739`,
    1219: `739`,
    122: `42`,
    1220: `740`,
    1221: `740`,
    1222: `741`,
    1223: `745`,
    1224: `745`,
    1225: `746`,
    1226: `747`,
    1227: `747`,
    1228: `748`,
    1229: `749`,
    123: `42`,
    1230: `749`,
    1231: `750`,
    1232: `751`,
    1233: `752`,
    1234: `753`,
    1235: `754`,
    1236: `754`,
    1237: `755`,
    1238: `755`,
    1239: `756`,
    124: `42`,
    1240: `756`,
    1241: `757`,
    1242: `758`,
    1243: `758`,
    1244: `759`,
    1245: `760`,
    1246: `761`,
    1247: `762`,
    1248: `763`,
    1249: `764`,
    125: `43`,
    1250: `764`,
    1251: `764`,
    1252: `765`,
    1253: `765`,
    1254: `765`,
    1255: `766`,
    1256: `767`,
    1257: `767`,
    1258: `768`,
    1259: `768`,
    126: `43`,
    1260: `768`,
    1261: `768`,
    1262: `768`,
    1263: `768`,
    1264: `768`,
    1265: `768`,
    1266: `768`,
    1267: `768`,
    1268: `769`,
    1269: `769`,
    127: `44`,
    1270: `770`,
    1271: `771`,
    1272: `772`,
    1273: `772`,
    1274: `773`,
    1275: `774`,
    1276: `774`,
    1277: `775`,
    1278: `776`,
    1279: `777`,
    128: `44`,
    1280: `777`,
    1281: `778`,
    1282: `778`,
    1283: `779`,
    1284: `780`,
    1285: `781`,
    1286: `782`,
    1287: `783`,
    1288: `787`,
    1289: `787`,
    129: `44`,
    1290: `788`,
    1291: `788`,
    1292: `789`,
    1293: `790`,
    1294: `793`,
    1295: `793`,
    1296: `794`,
    1297: `794`,
    1298: `795`,
    1299: `796`,
    13: `2`,
    130: `44`,
    1300: `797`,
    1301: `797`,
    1302: `798`,
    1303: `798`,
    1304: `799`,
    1305: `800`,
    1306: `803`,
    1307: `803`,
    1308: `804`,
    1309: `804`,
    131: `44`,
    1310: `805`,
    1311: `806`,
    1312: `806`,
    1313: `808`,
    1314: `808`,
    1315: `809`,
    1316: `809`,
    1317: `809`,
    1318: `810`,
    1319: `810`,
    132: `44`,
    1320: `811`,
    1321: `811`,
    1322: `812`,
    1323: `812`,
    1324: `813`,
    1325: `813`,
    1326: `813`,
    1327: `814`,
    1328: `814`,
    1329: `815`,
    133: `45`,
    1330: `815`,
    1331: `817`,
    1332: `817`,
    1333: `818`,
    1334: `818`,
    1335: `818`,
    1336: `820`,
    1337: `821`,
    1338: `821`,
    1339: `822`,
    134: `45`,
    1340: `822`,
    1341: `823`,
    1342: `823`,
    1343: `824`,
    1344: `824`,
    1345: `824`,
    1346: `825`,
    1347: `826`,
    1348: `826`,
    1349: `827`,
    135: `46`,
    1350: `827`,
    1351: `828`,
    1352: `828`,
    1353: `829`,
    1354: `829`,
    1355: `829`,
    1356: `830`,
    1357: `830`,
    1358: `830`,
    1359: `832`,
    136: `47`,
    1360: `833`,
    1361: `833`,
    1362: `834`,
    1363: `834`,
    1364: `835`,
    1365: `835`,
    1366: `836`,
    1367: `836`,
    1368: `837`,
    1369: `837`,
    137: `48`,
    1370: `838`,
    1371: `838`,
    1372: `839`,
    1373: `841`,
    1374: `842`,
    1375: `842`,
    1376: `843`,
    1377: `843`,
    1378: `844`,
    1379: `844`,
    138: `48`,
    1380: `845`,
    1381: `845`,
    1382: `846`,
    1383: `846`,
    1384: `847`,
    1385: `847`,
    1386: `848`,
    1387: `849`,
    1388: `851`,
    1389: `852`,
    139: `49`,
    1390: `852`,
    1391: `853`,
    1392: `854`,
    1393: `854`,
    1394: `855`,
    1395: `855`,
    1396: `856`,
    1397: `856`,
    1398: `857`,
    1399: `858`,
    14: `2`,
    140: `50`,
    1400: `860`,
    1401: `860`,
    1402: `860`,
    1403: `862`,
    1404: `862`,
    1405: `862`,
    1406: `864`,
    1407: `865`,
    1408: `867`,
    1409: `868`,
    141: `52`,
    1410: `869`,
    1411: `870`,
    1412: `870`,
    1413: `871`,
    1414: `871`,
    1415: `872`,
    1416: `872`,
    1417: `872`,
    1418: `873`,
    1419: `875`,
    142: `52`,
    1420: `876`,
    1421: `877`,
    1422: `877`,
    1423: `877`,
    1424: `878`,
    1425: `879`,
    1426: `879`,
    1427: `882`,
    1428: `882`,
    1429: `883`,
    143: `53`,
    1430: `883`,
    1431: `884`,
    1432: `885`,
    1433: `886`,
    1434: `887`,
    1435: `887`,
    1436: `888`,
    1437: `889`,
    1438: `889`,
    1439: `890`,
    144: `53`,
    1440: `890`,
    1441: `891`,
    1442: `891`,
    1443: `892`,
    1444: `893`,
    1445: `894`,
    1446: `894`,
    1447: `895`,
    1448: `896`,
    1449: `897`,
    145: `53`,
    1450: `898`,
    1451: `898`,
    1452: `899`,
    1453: `900`,
    1454: `901`,
    1455: `903`,
    1456: `904`,
    1457: `904`,
    1458: `904`,
    1459: `906`,
    146: `54`,
    1460: `907`,
    1461: `907`,
    1462: `908`,
    1463: `908`,
    1464: `908`,
    1465: `910`,
    1466: `911`,
    1467: `911`,
    1468: `912`,
    1469: `914`,
    147: `54`,
    1470: `915`,
    1471: `916`,
    1472: `917`,
    1473: `918`,
    1474: `918`,
    1475: `919`,
    1476: `920`,
    1477: `921`,
    1478: `922`,
    1479: `924`,
    148: `55`,
    1480: `924`,
    1481: `925`,
    1482: `926`,
    1483: `926`,
    1484: `927`,
    1485: `929`,
    1486: `930`,
    1487: `930`,
    1488: `930`,
    1489: `931`,
    149: `56`,
    1490: `931`,
    1491: `932`,
    1492: `933`,
    1493: `933`,
    1494: `933`,
    1495: `934`,
    1496: `934`,
    1497: `935`,
    1498: `936`,
    1499: `936`,
    15: `2`,
    150: `57`,
    1500: `937`,
    1501: `938`,
    1502: `938`,
    1503: `939`,
    1504: `940`,
    1505: `940`,
    1506: `941`,
    1507: `942`,
    1508: `942`,
    1509: `943`,
    151: `57`,
    1510: `944`,
    1511: `944`,
    1512: `945`,
    1513: `946`,
    1514: `946`,
    1515: `947`,
    1516: `947`,
    1517: `948`,
    1518: `949`,
    1519: `949`,
    152: `57`,
    1520: `950`,
    1521: `952`,
    1522: `952`,
    1523: `953`,
    1524: `953`,
    1525: `954`,
    1526: `955`,
    1527: `956`,
    1528: `956`,
    1529: `956`,
    153: `57`,
    1530: `957`,
    1531: `957`,
    1532: `957`,
    1533: `959`,
    1534: `960`,
    1535: `960`,
    1536: `960`,
    1537: `962`,
    1538: `963`,
    1539: `963`,
    154: `57`,
    1540: `963`,
    1541: `965`,
    1542: `966`,
    1543: `966`,
    1544: `967`,
    155: `57`,
    156: `58`,
    157: `58`,
    158: `58`,
    159: `60`,
    16: `2`,
    160: `60`,
    161: `60`,
    162: `61`,
    163: `62`,
    164: `62`,
    165: `62`,
    166: `63`,
    167: `64`,
    168: `64`,
    169: `64`,
    17: `2`,
    170: `65`,
    171: `66`,
    172: `66`,
    173: `66`,
    174: `67`,
    175: `68`,
    176: `68`,
    177: `69`,
    178: `69`,
    179: `70`,
    18: `2`,
    180: `70`,
    181: `71`,
    182: `71`,
    183: `73`,
    184: `74`,
    185: `75`,
    186: `76`,
    187: `76`,
    188: `77`,
    189: `78`,
    19: `2`,
    190: `78`,
    191: `79`,
    192: `80`,
    193: `80`,
    194: `80`,
    195: `81`,
    196: `82`,
    197: `82`,
    198: `83`,
    199: `84`,
    2: `2`,
    20: `2`,
    200: `85`,
    201: `85`,
    202: `86`,
    203: `87`,
    204: `88`,
    205: `89`,
    206: `90`,
    207: `90`,
    208: `91`,
    209: `91`,
    21: `2`,
    210: `91`,
    211: `93`,
    212: `93`,
    213: `94`,
    214: `94`,
    215: `95`,
    216: `96`,
    217: `100`,
    218: `101`,
    219: `101`,
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
    229: `102`,
    23: `2`,
    230: `103`,
    231: `103`,
    232: `104`,
    233: `105`,
    234: `106`,
    235: `106`,
    236: `107`,
    237: `107`,
    238: `108`,
    239: `108`,
    24: `2`,
    240: `110`,
    241: `110`,
    242: `112`,
    243: `112`,
    244: `113`,
    245: `113`,
    246: `113`,
    247: `115`,
    248: `117`,
    249: `117`,
    25: `2`,
    250: `118`,
    251: `118`,
    252: `119`,
    253: `119`,
    254: `120`,
    255: `120`,
    256: `120`,
    257: `121`,
    258: `122`,
    259: `122`,
    26: `2`,
    260: `123`,
    261: `123`,
    262: `124`,
    263: `124`,
    264: `125`,
    265: `125`,
    266: `125`,
    267: `127`,
    268: `127`,
    269: `128`,
    27: `2`,
    270: `128`,
    271: `129`,
    272: `130`,
    273: `132`,
    274: `132`,
    275: `132`,
    276: `134`,
    277: `135`,
    278: `135`,
    279: `136`,
    28: `2`,
    280: `136`,
    281: `137`,
    282: `137`,
    283: `137`,
    284: `139`,
    285: `139`,
    286: `140`,
    287: `140`,
    288: `140`,
    289: `142`,
    29: `2`,
    290: `142`,
    291: `142`,
    292: `142`,
    293: `142`,
    294: `142`,
    295: `143`,
    296: `143`,
    297: `144`,
    298: `145`,
    299: `147`,
    3: `2`,
    30: `4`,
    300: `148`,
    301: `150`,
    302: `150`,
    303: `151`,
    304: `152`,
    305: `153`,
    306: `153`,
    307: `154`,
    308: `154`,
    309: `155`,
    31: `4`,
    310: `155`,
    311: `156`,
    312: `157`,
    313: `157`,
    314: `158`,
    315: `158`,
    316: `159`,
    317: `159`,
    318: `160`,
    319: `161`,
    32: `5`,
    320: `161`,
    321: `162`,
    322: `162`,
    323: `163`,
    324: `163`,
    325: `164`,
    326: `165`,
    327: `169`,
    328: `170`,
    329: `170`,
    33: `5`,
    330: `171`,
    331: `171`,
    332: `171`,
    333: `171`,
    334: `171`,
    335: `171`,
    336: `171`,
    337: `171`,
    338: `171`,
    339: `171`,
    34: `5`,
    340: `172`,
    341: `172`,
    342: `173`,
    343: `174`,
    344: `175`,
    345: `175`,
    346: `176`,
    347: `176`,
    348: `177`,
    349: `177`,
    35: `6`,
    350: `178`,
    351: `178`,
    352: `178`,
    353: `179`,
    354: `180`,
    355: `180`,
    356: `180`,
    357: `181`,
    358: `182`,
    359: `182`,
    36: `7`,
    360: `183`,
    361: `184`,
    362: `185`,
    363: `186`,
    364: `186`,
    365: `187`,
    366: `187`,
    367: `188`,
    368: `189`,
    369: `189`,
    37: `8`,
    370: `190`,
    371: `191`,
    372: `191`,
    373: `192`,
    374: `193`,
    375: `193`,
    376: `194`,
    377: `195`,
    378: `196`,
    379: `196`,
    38: `9`,
    380: `198`,
    381: `198`,
    382: `199`,
    383: `199`,
    384: `200`,
    385: `201`,
    386: `202`,
    387: `203`,
    388: `203`,
    389: `204`,
    39: `10`,
    390: `204`,
    391: `206`,
    392: `206`,
    393: `207`,
    394: `207`,
    395: `208`,
    396: `208`,
    397: `208`,
    398: `209`,
    399: `210`,
    4: `2`,
    40: `11`,
    400: `211`,
    401: `211`,
    402: `212`,
    403: `212`,
    404: `213`,
    405: `213`,
    406: `214`,
    407: `214`,
    408: `216`,
    409: `216`,
    41: `11`,
    410: `217`,
    411: `217`,
    412: `217`,
    413: `217`,
    414: `217`,
    415: `217`,
    416: `218`,
    417: `218`,
    418: `219`,
    419: `219`,
    42: `12`,
    420: `220`,
    421: `221`,
    422: `221`,
    423: `222`,
    424: `222`,
    425: `223`,
    426: `224`,
    427: `224`,
    428: `225`,
    429: `225`,
    43: `13`,
    430: `226`,
    431: `226`,
    432: `227`,
    433: `227`,
    434: `228`,
    435: `228`,
    436: `229`,
    437: `229`,
    438: `230`,
    439: `230`,
    44: `14`,
    440: `231`,
    441: `235`,
    442: `235`,
    443: `236`,
    444: `237`,
    445: `237`,
    446: `238`,
    447: `239`,
    448: `239`,
    449: `240`,
    45: `14`,
    450: `241`,
    451: `242`,
    452: `243`,
    453: `244`,
    454: `244`,
    455: `245`,
    456: `245`,
    457: `246`,
    458: `246`,
    459: `247`,
    46: `15`,
    460: `248`,
    461: `248`,
    462: `249`,
    463: `250`,
    464: `251`,
    465: `252`,
    466: `253`,
    467: `254`,
    468: `254`,
    469: `254`,
    47: `16`,
    470: `255`,
    471: `255`,
    472: `255`,
    473: `256`,
    474: `257`,
    475: `257`,
    476: `258`,
    477: `258`,
    478: `258`,
    479: `258`,
    48: `17`,
    480: `258`,
    481: `258`,
    482: `258`,
    483: `258`,
    484: `258`,
    485: `258`,
    486: `259`,
    487: `259`,
    488: `260`,
    489: `261`,
    49: `18`,
    490: `262`,
    491: `262`,
    492: `263`,
    493: `264`,
    494: `264`,
    495: `265`,
    496: `266`,
    497: `267`,
    498: `267`,
    499: `268`,
    5: `2`,
    50: `19`,
    500: `268`,
    501: `269`,
    502: `270`,
    503: `271`,
    504: `272`,
    505: `273`,
    506: `277`,
    507: `277`,
    508: `278`,
    509: `278`,
    51: `21`,
    510: `279`,
    511: `280`,
    512: `283`,
    513: `283`,
    514: `284`,
    515: `284`,
    516: `285`,
    517: `286`,
    518: `287`,
    519: `287`,
    52: `21`,
    520: `288`,
    521: `288`,
    522: `289`,
    523: `290`,
    524: `293`,
    525: `293`,
    526: `294`,
    527: `294`,
    528: `295`,
    529: `296`,
    53: `21`,
    530: `296`,
    531: `298`,
    532: `298`,
    533: `299`,
    534: `299`,
    535: `299`,
    536: `300`,
    537: `300`,
    538: `301`,
    539: `301`,
    54: `21`,
    540: `302`,
    541: `302`,
    542: `303`,
    543: `303`,
    544: `303`,
    545: `304`,
    546: `304`,
    547: `305`,
    548: `305`,
    549: `307`,
    55: `21`,
    550: `307`,
    551: `308`,
    552: `308`,
    553: `308`,
    554: `310`,
    555: `311`,
    556: `311`,
    557: `312`,
    558: `312`,
    559: `313`,
    56: `21`,
    560: `313`,
    561: `314`,
    562: `314`,
    563: `314`,
    564: `315`,
    565: `316`,
    566: `316`,
    567: `317`,
    568: `317`,
    569: `318`,
    57: `21`,
    570: `318`,
    571: `319`,
    572: `319`,
    573: `319`,
    574: `320`,
    575: `320`,
    576: `320`,
    577: `322`,
    578: `322`,
    579: `323`,
    58: `21`,
    580: `324`,
    581: `325`,
    582: `328`,
    583: `328`,
    584: `328`,
    585: `329`,
    586: `329`,
    587: `330`,
    588: `330`,
    589: `332`,
    59: `21`,
    590: `332`,
    591: `333`,
    592: `334`,
    593: `335`,
    594: `337`,
    595: `337`,
    596: `337`,
    597: `339`,
    598: `339`,
    599: `340`,
    6: `2`,
    60: `21`,
    600: `340`,
    601: `341`,
    602: `341`,
    603: `342`,
    604: `343`,
    605: `344`,
    606: `344`,
    607: `345`,
    608: `345`,
    609: `346`,
    61: `21`,
    610: `346`,
    611: `346`,
    612: `347`,
    613: `347`,
    614: `348`,
    615: `348`,
    616: `349`,
    617: `349`,
    618: `350`,
    619: `351`,
    62: `21`,
    620: `351`,
    621: `352`,
    622: `352`,
    623: `353`,
    624: `353`,
    625: `354`,
    626: `355`,
    627: `355`,
    628: `356`,
    629: `356`,
    63: `21`,
    630: `357`,
    631: `357`,
    632: `358`,
    633: `359`,
    634: `359`,
    635: `360`,
    636: `360`,
    637: `361`,
    638: `361`,
    639: `362`,
    64: `21`,
    640: `363`,
    641: `363`,
    642: `364`,
    643: `364`,
    644: `365`,
    645: `365`,
    646: `366`,
    647: `367`,
    648: `367`,
    649: `368`,
    65: `21`,
    650: `368`,
    651: `368`,
    652: `368`,
    653: `368`,
    654: `368`,
    655: `369`,
    656: `369`,
    657: `370`,
    658: `371`,
    659: `372`,
    66: `21`,
    660: `372`,
    661: `373`,
    662: `374`,
    663: `374`,
    664: `375`,
    665: `376`,
    666: `377`,
    667: `377`,
    668: `378`,
    669: `379`,
    67: `21`,
    670: `380`,
    671: `380`,
    672: `381`,
    673: `382`,
    674: `383`,
    675: `383`,
    676: `384`,
    677: `385`,
    678: `386`,
    679: `386`,
    68: `21`,
    680: `387`,
    681: `388`,
    682: `389`,
    683: `391`,
    684: `391`,
    685: `392`,
    686: `392`,
    687: `392`,
    688: `393`,
    689: `393`,
    69: `21`,
    690: `394`,
    691: `394`,
    692: `395`,
    693: `396`,
    694: `399`,
    695: `399`,
    696: `400`,
    697: `400`,
    698: `400`,
    699: `401`,
    7: `2`,
    70: `21`,
    700: `403`,
    701: `403`,
    702: `404`,
    703: `404`,
    704: `405`,
    705: `405`,
    706: `405`,
    707: `406`,
    708: `406`,
    709: `407`,
    71: `21`,
    710: `407`,
    711: `407`,
    712: `408`,
    713: `410`,
    714: `410`,
    715: `411`,
    716: `411`,
    717: `412`,
    718: `412`,
    719: `412`,
    72: `21`,
    720: `413`,
    721: `413`,
    722: `414`,
    723: `414`,
    724: `415`,
    725: `416`,
    726: `422`,
    727: `422`,
    728: `423`,
    729: `423`,
    73: `21`,
    730: `424`,
    731: `425`,
    732: `425`,
    733: `426`,
    734: `427`,
    735: `428`,
    736: `428`,
    737: `429`,
    738: `430`,
    739: `431`,
    74: `21`,
    740: `431`,
    741: `432`,
    742: `433`,
    743: `434`,
    744: `434`,
    745: `435`,
    746: `436`,
    747: `437`,
    748: `437`,
    749: `438`,
    75: `21`,
    750: `439`,
    751: `440`,
    752: `441`,
    753: `441`,
    754: `443`,
    755: `443`,
    756: `444`,
    757: `444`,
    758: `445`,
    759: `446`,
    76: `21`,
    760: `446`,
    761: `447`,
    762: `447`,
    763: `447`,
    764: `448`,
    765: `449`,
    766: `450`,
    767: `451`,
    768: `451`,
    769: `451`,
    77: `21`,
    770: `452`,
    771: `453`,
    772: `454`,
    773: `454`,
    774: `455`,
    775: `456`,
    776: `456`,
    777: `457`,
    778: `458`,
    779: `459`,
    78: `21`,
    780: `460`,
    781: `460`,
    782: `461`,
    783: `462`,
    784: `463`,
    785: `465`,
    786: `465`,
    787: `465`,
    788: `466`,
    789: `466`,
    79: `21`,
    790: `466`,
    791: `468`,
    792: `469`,
    793: `469`,
    794: `470`,
    795: `471`,
    796: `473`,
    797: `474`,
    798: `474`,
    799: `474`,
    8: `2`,
    80: `21`,
    800: `475`,
    801: `475`,
    802: `476`,
    803: `477`,
    804: `477`,
    805: `477`,
    806: `478`,
    807: `478`,
    808: `479`,
    809: `480`,
    81: `21`,
    810: `480`,
    811: `481`,
    812: `482`,
    813: `482`,
    814: `483`,
    815: `484`,
    816: `484`,
    817: `485`,
    818: `486`,
    819: `486`,
    82: `21`,
    820: `487`,
    821: `488`,
    822: `488`,
    823: `489`,
    824: `490`,
    825: `490`,
    826: `491`,
    827: `492`,
    828: `492`,
    829: `493`,
    83: `22`,
    830: `494`,
    831: `494`,
    832: `495`,
    833: `495`,
    834: `495`,
    835: `496`,
    836: `497`,
    837: `497`,
    838: `498`,
    839: `498`,
    84: `22`,
    840: `499`,
    841: `500`,
    842: `500`,
    843: `501`,
    844: `501`,
    845: `501`,
    846: `501`,
    847: `501`,
    848: `501`,
    849: `502`,
    85: `22`,
    850: `502`,
    851: `503`,
    852: `504`,
    853: `505`,
    854: `507`,
    855: `507`,
    856: `508`,
    857: `508`,
    858: `508`,
    859: `509`,
    86: `23`,
    860: `509`,
    861: `510`,
    862: `510`,
    863: `513`,
    864: `513`,
    865: `514`,
    866: `514`,
    867: `515`,
    868: `516`,
    869: `517`,
    87: `23`,
    870: `518`,
    871: `518`,
    872: `519`,
    873: `520`,
    874: `520`,
    875: `521`,
    876: `521`,
    877: `522`,
    878: `522`,
    879: `523`,
    88: `23`,
    880: `524`,
    881: `525`,
    882: `525`,
    883: `526`,
    884: `526`,
    885: `527`,
    886: `528`,
    887: `529`,
    888: `529`,
    889: `530`,
    89: `23`,
    890: `530`,
    891: `531`,
    892: `532`,
    893: `533`,
    894: `533`,
    895: `534`,
    896: `535`,
    897: `538`,
    898: `538`,
    899: `539`,
    9: `2`,
    90: `23`,
    900: `539`,
    901: `540`,
    902: `541`,
    903: `544`,
    904: `545`,
    905: `545`,
    906: `546`,
    907: `547`,
    908: `548`,
    909: `549`,
    91: `23`,
    910: `549`,
    911: `550`,
    912: `550`,
    913: `551`,
    914: `552`,
    915: `552`,
    916: `553`,
    917: `554`,
    918: `554`,
    919: `555`,
    92: `23`,
    920: `556`,
    921: `556`,
    922: `557`,
    923: `558`,
    924: `559`,
    925: `559`,
    926: `560`,
    927: `561`,
    928: `562`,
    929: `562`,
    93: `23`,
    930: `563`,
    931: `563`,
    932: `564`,
    933: `564`,
    934: `565`,
    935: `565`,
    936: `567`,
    937: `567`,
    938: `568`,
    939: `568`,
    94: `23`,
    940: `568`,
    941: `568`,
    942: `568`,
    943: `568`,
    944: `569`,
    945: `569`,
    946: `570`,
    947: `570`,
    948: `572`,
    949: `573`,
    95: `23`,
    950: `573`,
    951: `574`,
    952: `574`,
    953: `575`,
    954: `575`,
    955: `576`,
    956: `577`,
    957: `577`,
    958: `578`,
    959: `579`,
    96: `23`,
    960: `579`,
    961: `580`,
    962: `581`,
    963: `582`,
    964: `582`,
    965: `583`,
    966: `584`,
    967: `584`,
    968: `585`,
    969: `586`,
    97: `23`,
    970: `587`,
    971: `587`,
    972: `588`,
    973: `588`,
    974: `589`,
    975: `590`,
    976: `590`,
    977: `591`,
    978: `591`,
    979: `592`,
    98: `23`,
    980: `593`,
    981: `593`,
    982: `594`,
    983: `597`,
    984: `597`,
    985: `598`,
    986: `599`,
    987: `599`,
    988: `600`,
    989: `601`,
    99: `23`,
    990: `601`,
    991: `602`,
    992: `603`,
    993: `604`,
    994: `605`,
    995: `605`,
    996: `605`,
    997: `606`,
    998: `606`,
    999: `606`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/limitOrder.rsh:56:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/limitOrder.rsh:87:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T6","name":"v5252","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_4141","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_4141","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"v0","type":"tuple"}],"name":"_reach_oe_v4666","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4727","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4990","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v5014","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T11","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"v0","type":"tuple"}],"name":"_reach_oe_v5100","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Cancel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v5246","type":"address"},{"internalType":"bool","name":"v5247","type":"bool"},{"internalType":"uint256","name":"v5248","type":"uint256"},{"internalType":"uint256","name":"v5249","type":"uint256"}],"name":"SwapViaPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v5255","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Cancel0_4141","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_SwapViaPool0_4141","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v5258","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"opts","outputs":[{"components":[{"internalType":"address payable","name":"tokA","type":"address"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"uint256","name":"amtA","type":"uint256"},{"internalType":"uint256","name":"amtB","type":"uint256"},{"internalType":"address payable","name":"ctcAnnouncer","type":"address"},{"internalType":"address payable","name":"creator","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200279638819003601f8101601f191683016001600160401b038111848210176200051157839282916040528339810103906101808212620005c15760c0604051926200004e84620005c6565b82518452601f190112620005c1576040519060c08201906001600160401b0382118383101762000511576200012a92610160926040526200009260208301620005e2565b8152620000a260408301620005e2565b60208201526060820151604082015260808201516060820152620000c960a08301620005e2565b6080820152620000dc60c08301620005e2565b60a08201526020850152620000f460e08201620005e2565b6040850152620001086101008201620005e2565b6060850152610120810151608085015261014081015160a085015201620005e2565b60c082015243600355604051608081016001600160401b03811182821017620005115760405260008152600060208201526000604082015260606200016e620005f7565b91015260ff60045416620005a8577f5f266e645e867694213670c488b3d4c56cba980683061426b9d47c8611210c2c6101a060405133815283516020820152620001c1602085015160408301906200063a565b60408401516001600160a01b0390811661010083015260608501518116610120830152608085015161014083015260a085015161016083015260c085015116610180820152a1805180159081156200059b575b50156200058257606081015160408201516001600160a01b039081169116036200057a5760005b156200056157346200054857604081015160608201516001600160a01b03908116911603620005405760005b156200052757604051906200027c82620005c6565b600082526200028a620005f7565b6020830152600060408301526000606083015260006080830152600060a0830152600060c08301523382526020810151602083015260018060a01b03604082015116604083015260018060a01b0360608201511660608301526080810151608083015260a081015160a083015260c060018060a01b039101511660c08201526001600055436001556040519033602083015262000330602082015160408401906200063a565b60408101516001600160a01b0390811661010084015260608201518116610120840152608082015161014084015260a082015161016084015260c090910151166101808083019190915281526101a081016001600160401b03811182821017620005115760405280516001600160401b0381116200051157600254600181811c9116801562000506575b6020821014620004f057601f811162000486575b50602091601f82116001146200041c5791819260009262000410575b50508160011b916000199060031b1c1916176002555b6040516121169081620006808239f35b015190503880620003ea565b601f19821692600260005260206000209160005b8581106200046d5750836001951062000453575b505050811b0160025562000400565b015160001960f88460031b161c1916905538808062000444565b9192602060018192868501518155019401920162000430565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004e5575b601f0160051c01905b818110620004d85750620003ce565b60008155600101620004c9565b9091508190620004c0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ba565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b600162000267565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60016200023b565b60405163100960cb60e01b815260096004820152602490fd5b9050600154143862000214565b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b60e081019081106001600160401b038211176200051157604052565b51906001600160a01b0382168203620005c157565b6040519060c082016001600160401b0381118382101762000511576040528160a06000918281528260208201528260408201528260608201528260808201520152565b60a09081600180821b0391828151168552826020820151166020860152604081015160408601526060810151606086015282608082015116608086015201511691015256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081630a47debc146100bb575080631e93b0f1146100b25780634aa8e773146100a9578063573b8510146100a05780635e43ae8e1461009757806382b7c09b1461008e57806383230757146100855763ab53f2c60361000e57610080610798565b61000e565b50610080610779565b506100806106c2565b506100806105ba565b506100806101ef565b50610080610197565b50610080610173565b3461011f578060031936011261011f57606060c0916100d86109dd565b506100ee60026100e6610a0f565b92541461160b565b60206101096100fb610912565b828082518301019101610c47565b0151918291015261011d604051809261012e565bf35b80fd5b6001600160a01b031690565b60a09081600180821b03918281511685528260208201511660208601526040810151604086015260608101516060860152826080820151166080860152015116910152565b5034610192576000366003190112610192576020600354604051908152f35b600080fd5b506000366003190112610192576020806101af610a0f565b6101e3816101bb610a86565b84810190600082515251151585825101526101d4610a86565b90600082525185820152610e62565b01511515604051908152f35b5060208060031936011261019257610205610a0f565b506102ad6040809281516102188161085b565b6004358152610225611d13565b61023360016000541461162b565b61024c61023e610912565b848082518301019101611d9a565b94859261026a61026561026160045460ff1690565b1590565b61164b565b8551338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a1518015908115610593575b5061166b565b6102b7341561168b565b8382019081516102c690610122565b916080840192835133916102d992612069565b6102e2906116ab565b835133906001600160a01b03906102f890610122565b1614610303906116cb565b815160019052805161031490610122565b868351019061032291611ce5565b818501805160019052916060850192835161033c90610122565b888251019061034a91611ce5565b825161035590610122565b3061035f91611c96565b60c0830190815230855161037290610122565b9061037c91611c96565b906101008401918252479260a085019384526103a0600160ff196004541617600455565b8989516103ac90610122565b865192519c8a519b60a0019b8c5191519e8f9485019563014d07ad60e21b87523060248701956103db96611e69565b039a601f199b8c810182526103f090826108ef565b60c08d01516103fe90610122565b61040790610122565b90515a9260008094938194f161041b610d33565b610424916119a9565b5061043460ff1960045416600455565b30855161044090610122565b9061044a91611c96565b905180820360e086015261045e91146116eb565b30855161046a90610122565b9061047491611c96565b9051808203610120850152610489911461170b565b4790519003606082019081515251906080019080825289516104bf81928291909160208060408301948051845201511515910152565b037fd9bffe237a12d657c4aec677c6d1c652feddf70472c703820f2e9219305b3bdc91a15151156104ef9061172b565b846104f8611eb3565b97805161050490610122565b61050e908a611ce5565b0151858801525161051e90610122565b61052a90878901611ce5565b5161053490610122565b6105419060608701611ce5565b5160808501525160a08401526105576002600055565b43600155835192839182019061056c91611eeb565b03908101825261057c90826108ef565b61058590611f86565b5160008152602090f35b0390f35b905060015414386102a7565b6001600160a01b0381160361019257565b8015150361019257565b5060803660031901126101925761058f6004356105d68161059f565b6106b16024356105e5816105b0565b6105ed610a0f565b6105f5610a3e565b9360018060a01b031684526020840191151582526106aa81604095869485820160443581526060830190606435825261067461066889519461063686610883565b61063e610a3e565b865261066261065b6020880198610653610a63565b8a5251610122565b8751611ce5565b51151590565b60208551019015159052565b5187835101525160608251015261068c825160019052565b51858251015261069a610a86565b9060008252516020820152610e62565b0151151590565b905190151581529081906020820190565b5060e0366003190112610192576106d7610a0f565b6040908151906106e682610883565b600435825260c0366023190112610192578251916107038361089e565b602435600281101561019257835260443561071d816105b0565b602084015260803660631901126101925761058592845161073d816108b9565b6064356107498161059f565b8152608435610757816105b0565b602082015260a4358682015260c4356060820152858201526020820152610e62565b5034610192576000366003190112610192576020600154604051908152f35b50346101925760008060031936011261011f5780546107b5610912565b906040519283918252602090604082840152835191826040850152815b8381106107f357505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016107d2565b90600182811c9216801561083a575b602083101461082457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610819565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761087657604052565b61087e610844565b604052565b604081019081106001600160401b0382111761087657604052565b606081019081106001600160401b0382111761087657604052565b608081019081106001600160401b0382111761087657604052565b60c081019081106001600160401b0382111761087657604052565b601f909101601f19168101906001600160401b0382119082101761087657604052565b60405190600082600254916109268361080a565b80835260019380851690811561099c575060011461094e575b5061094c925003836108ef565b565b600260009081526000805160206120ea83398151915294602093509091905b81831061098457505061094c93508201013861093f565b8554888401850152948501948794509183019161096d565b905061094c94506020925060ff191682840152151560051b8201013861093f565b6040519061022082016001600160401b0381118382101761087657604052565b604051906109ea826108d4565b8160a06000918281528260208201528260408201528260608201528260808201520152565b60405190610a1c826108b9565b816000815260006020820152600060408201526060610a396109dd565b910152565b60405190610a4b826108b9565b60006060838281528260208201528260408201520152565b60405190610a708261089e565b8160008152600060208201526040610a39610a3e565b60405190610a9382610883565b81600081526020610a39610a63565b60021115610aac57565b634e487b7160e01b600052602160045260246000fd5b60405190610acf8261085b565b60008252565b60405190610ae282610883565b60006020838281520152565b60405190610afb8261089e565b8160008152604051610b0c8161085b565b6000815260208201526040610a39610ad5565b610b276109bd565b90610b30610a3e565b8252610b3a610ac2565b6020830152610b47610aee565b6040830152610b54610aee565b60608301526000806080840152610b69610ac2565b60a0840152610b76610aee565b60c0840152610b83610aee565b60e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b519061094c8261059f565b91908260c091031261019257604051610beb816108d4565b60a08082948051610bfb8161059f565b84526020810151610c0b8161059f565b602085015260408101516040850152606081015160608501526080810151610c328161059f565b6080850152015191610c438361059f565b0152565b610160818303126101925761014090610c7c60405193610c66856108d4565b8251610c718161059f565b855260208301610bd3565b602084015260e0810151610c8f8161059f565b6040840152610100810151610ca38161059f565b60608401526101208101516080840152015160a082015290565b90606060e0919493946040602061010086019760018060a01b03809416875280518288015201518051610cef81610aa2565b82870152602081015115158487015201519081511660808501526020810151151560a0850152604081015160c08501520151910152565b51610d3081610aa2565b90565b3d15610d7b573d906001600160401b038211610d6e575b60405191610d62601f8201601f1916602001846108ef565b82523d6000602084013e565b610d76610844565b610d4a565b606090565b9081604091031261019257602060405191610d9a83610883565b805183520151602082015290565b9190916060602060406080840195805185528281015151838601520151805160408501520151910152565b818110610dde575050565b60008155600101610dd3565b610df560025461080a565b80610dfd5750565b601f8111600114610e1057506000600255565b6002600052610e5590601f0160051c6000805160206120ea833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610dd3565b6000602081208160025555565b90610e6b610b1f565b6000928392610e7d600285541461174b565b610e85610912565b90610e9a602092838082518301019101610c47565b93610eb2610ead61026160045460ff1690565b61176b565b826040947f777de14fc85a1499bf334c9d8f8617049165fc617a06b7359e02f68714658fa1865180610ee5843383610cbd565b0390a1610efd815180159081156115dc575b5061178b565b01610f088151610d26565b610f1181610aa2565b610fb057505093610f7d9291610f9c95610f2b3415611969565b610f47610f40610f3b8851610122565b610122565b3314611989565b8351600081527f14aed3c13ea2ea9625aa6c5f144244b3156fbf35dd07a53b13f21ecddf3be88090602090a10152820151610122565b6080610f898351610122565b920151916001600160a01b031690611ba5565b8055610fa86000600155565b61094c610dea565b90919495506001610fc18251610d26565b610fca81610aa2565b14610fd9575b50505050505050565b518301518152610fe934156117ab565b85838083510151956110026080890197885110156117cb565b8151600081527fd184d9ef8f1b0589e6fba02bf11686d91a028e6ddb3555080ee80b1645c7030a90602090a1015280518201511561130d5760a08501938451838301515283860191825161105590610122565b9481519581875161106590610122565b9701516001600160a01b039761107e9290891690611c48565b611087906118ab565b6060880194855161109790610122565b306110a191611c96565b61014084019081523086516110b590610122565b906110bf91611c96565b908385510191825190039061016086019182528c80479461012089019586526110f0600160ff196004541617600455565b518d51885163c8867ae960e01b8982019081526024820193909352604480820192909252908152906111236064836108ef565b89515183906001600160a01b031661113a90610122565b9251925af191611148610d33565b928361115391611a09565b5061116360ff1960045416600455565b30895161116f90610122565b9061117991611c96565b905180820361018089015261118e91146118cb565b30895161119a90610122565b906111a491611c96565b90516111af916115e8565b918486019284845101515287516111c590610122565b8651516001600160a01b03166111da90610122565b306111e492611b38565b156111ee906118eb565b47905190038251528280825183010191019061120991610d80565b83825101525160608401908082528351611224819282610da8565b037f8eba3e65f8f36499711777935df25035dc2bf16eb60f0b98dd096bd9cc87272a91a1805151156112559061190b565b818151015151895111156112689061192b565b510151518751611277916115e8565b93608083019480865283516060015111156112919061194b565b5161129b90610122565b9251915101516112aa916115e8565b336112b492611ba5565b81516112bf90610122565b9051336112cb92611ba5565b516112d590610122565b92516112e090610122565b915191166112ed92611ba5565b80556112f96000600155565b611301610dea565b38808080808080610fd0565b60a0850193845160a08301515283860191825161132990610122565b9481519581875161133990610122565b9701516001600160a01b03976113529290891690611c48565b61135b906117eb565b6060880194855161136b90610122565b3061137591611c96565b6101c0840190815230865161138990610122565b9061139391611c96565b90838551019182519003906101e086019182528c8047946101a089019586526113c4600160ff196004541617600455565b518d51885163dc8d714f60e01b8982019081526024820193909352604480820192909252908152906113f76064836108ef565b89515183906001600160a01b031661140e90610122565b9251925af19161141c610d33565b9283611427916119d9565b5061143760ff1960045416600455565b30895161144390610122565b9061144d91611c96565b9051808203610200890152611462911461180b565b30895161146e90610122565b9061147891611c96565b9051611483916115e8565b9160c0860192848451015152875161149a90610122565b8651516001600160a01b03166114af90610122565b306114b992611b38565b156114c39061182b565b4790519003825152828082518301019101906114de91610d80565b83825101525160e084019080825283516114f9819282610da8565b037f82867dbc7fb2a8086e827e78298c3fcb6eb4f34edf309e00ea2f574e9e34378e91a18051511561152a9061184b565b8181510151518951111561153d9061186b565b51015151875161154c916115e8565b9361010083019480865283516060015111156115679061188b565b5161157190610122565b925191510151611580916115e8565b3361158a92611ba5565b815161159590610122565b9051336115a192611ba5565b516115ab90610122565b92516115b690610122565b915191166115c392611ba5565b80556115cf6000600155565b6115d7610dea565b611301565b90506001541438610ef7565b9081039081116115f55790565b634e487b7160e01b600052601160045260246000fd5b1561161257565b60405163100960cb60e01b815260076004820152602490fd5b1561163257565b60405163100960cb60e01b8152600d6004820152602490fd5b1561165257565b60405163100960cb60e01b8152600e6004820152602490fd5b1561167257565b60405163100960cb60e01b8152600f6004820152602490fd5b1561169257565b60405163100960cb60e01b815260106004820152602490fd5b156116b257565b60405163100960cb60e01b815260116004820152602490fd5b156116d257565b60405163100960cb60e01b815260126004820152602490fd5b156116f257565b60405163100960cb60e01b815260136004820152602490fd5b1561171257565b60405163100960cb60e01b815260146004820152602490fd5b1561173257565b60405163100960cb60e01b815260166004820152602490fd5b1561175257565b60405163100960cb60e01b815260176004820152602490fd5b1561177257565b60405163100960cb60e01b815260186004820152602490fd5b1561179257565b60405163100960cb60e01b815260196004820152602490fd5b156117b257565b60405163100960cb60e01b8152601c6004820152602490fd5b156117d257565b60405163100960cb60e01b8152601d6004820152602490fd5b156117f257565b60405163100960cb60e01b815260256004820152602490fd5b1561181257565b60405163100960cb60e01b815260276004820152602490fd5b1561183257565b60405163100960cb60e01b815260266004820152602490fd5b1561185257565b60405163100960cb60e01b815260296004820152602490fd5b1561187257565b60405163100960cb60e01b8152602a6004820152602490fd5b1561189257565b60405163100960cb60e01b8152602b6004820152602490fd5b156118b257565b60405163100960cb60e01b8152601e6004820152602490fd5b156118d257565b60405163100960cb60e01b815260206004820152602490fd5b156118f257565b60405163100960cb60e01b8152601f6004820152602490fd5b1561191257565b60405163100960cb60e01b815260226004820152602490fd5b1561193257565b60405163100960cb60e01b815260236004820152602490fd5b1561195257565b602460405163100960cb60e01b8152816004820152fd5b1561197057565b60405163100960cb60e01b8152601a6004820152602490fd5b1561199057565b60405163100960cb60e01b8152601b6004820152602490fd5b156119b15790565b8051156119c057805190602001fd5b60405163100960cb60e01b815260156004820152602490fd5b156119e15790565b8051156119f057805190602001fd5b60405163100960cb60e01b815260286004820152602490fd5b15611a115790565b805115611a2057805190602001fd5b60405163100960cb60e01b815260216004820152602490fd5b15611a415790565b805115611a5057805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b15611a715790565b805115611a8057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15611aa15790565b805115611ab057805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b15611ad15790565b805115611ae057805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15611b015790565b805115611b1057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610192575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610d3093600093849392849190611b7e816108b9565b5193165af1611b95611b8e610d33565b8092611a39565b5060208082518301019101611b29565b60009190829182611bd4611be2611c1197604051928391602083019663a9059cbb60e01b885260248401611c18565b03601f1981018352826108ef565b51926001600160a01b03165af1611c01611bfa610d33565b8092611a69565b5060208082518301019101611c33565b1561019257565b6001600160a01b039091168152602081019190915260400190565b908160209103126101925751610d30816105b0565b60009190829182611bd4611c77610d3097604051928391602083019663095ea7b360e01b885260248401611c18565b51926001600160a01b03165af1611c01611c8f610d33565b8092611a99565b60008091610d3093826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152611cce8161089e565b5193165af1611b95611cde610d33565b8092611ac9565b6001600160a01b039091169052565b60405190611d018261089e565b60006040838281528260208201520152565b6040519061014082016001600160401b03811183821017611d8d575b60405281611d3b611cf4565b8152611d45611cf4565b6020820152610120600091826040820152611d5e610ad5565b6060820152611d6b610ad5565b60808201528260a08201528260c08201528260e0820152826101008201520152565b611d95610844565b611d2f565b610180818303126101925760405191611e279161016091611de39060e086016001600160401b03811187821017611e2f575b604052611dd883610bc8565b865260208301610bd3565b6020850152611df460e08201610bc8565b6040850152611e066101008201610bc8565b6060850152610120810151608085015261014081015160a085015201610bc8565b60c082015290565b611e37610844565b611dcc565b6040908051611e4a81610aa2565b83526020818101511515908401528101516001600160a01b0316910152565b6001600160a01b0391821681529116602082015261014081019594936101209391929091611ea991611e9f906040860190611e3c565b60a0840190611e3c565b6101008201520152565b60405190611ec0826108d4565b600060a083828152611ed06109dd565b60208201528260408201528260608201528260808201520152565b91909161014060a0610160830194600180831b03808251168552611f176020830151602087019061012e565b8060408301511660e086015260608201511661010085015260808101516101208501520151910152565b90601f8211611f4e575050565b61094c9160026000526020600020906020601f840160051c83019310611f7c575b601f0160051c0190610dd3565b9091508190611f6f565b80519091906001600160401b03811161205c575b611fae81611fa960025461080a565b611f41565b602080601f8311600114611fea5750819293600092611fdf575b50508160011b916000199060031b1c191617600255565b015190503880611fc8565b6002600052601f198316949091906000805160206120ea833981519152926000905b87821061204457505083600195961061202b575b505050811b01600255565b015160001960f88460031b161c19169055388080612020565b8060018596829496860151815501950193019061200c565b612064610844565b611f9a565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610d30936000938493909284919060a081016001600160401b038111828210176120dc575b6040525193165af1611c016120d5610d33565b8092611af9565b6120e4610844565b6120c256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 10134,
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
