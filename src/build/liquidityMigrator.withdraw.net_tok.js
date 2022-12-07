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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc6]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['oldLPAmt', ctc0], ['oldlpToken', ctc1], ['tokA', ctc2], ['tokB', ctc1], ['oldPoolId', ctc3]]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc6]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v346 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v347 = [v346, v346];
  const v351 = stdlib.protect(ctc4, interact.opts, 'for Admin\'s interact field opts');
  const v352 = v351.oldLPAmt;
  const v353 = v351.oldlpToken;
  const v354 = v351.tokA;
  const v355 = v351.tokB;
  const v356 = v351.oldPoolId;
  
  const v365 = stdlib.gt(v352, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:25:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v365, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:25:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:34:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)', 'at ./liquidityMigrator.withdraw.rsh:30:15:application call to [unknown function] (defined at: ./liquidityMigrator.withdraw.rsh:30:19:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'Admin'
    });
  const v373 = stdlib.tokenEq(v355, v353);
  const v374 = v373 ? false : true;
  stdlib.assert(v374, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:27:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.withdraw.rsh:34:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)', 'at ./liquidityMigrator.withdraw.rsh:30:15:application call to [unknown function] (defined at: ./liquidityMigrator.withdraw.rsh:30:19:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v352, v353, v354, v355, v356],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc2, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v378, v379, v380, v381, v382], secs: v384, time: v383, didSend: v107, from: v377 } = txn1;
      
      const v385 = v347[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0')];
      const v386 = stdlib.Array_set(v385, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
      const v387 = stdlib.Array_set(v347, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'), v386);
      const v389 = v387[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1')];
      const v390 = stdlib.Array_set(v389, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
      const v391 = stdlib.Array_set(v387, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1'), v390);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v379
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v381
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v378, v379, v380, v381, v382], secs: v384, time: v383, didSend: v107, from: v377 } = txn1;
  const v385 = v347[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0')];
  const v386 = stdlib.Array_set(v385, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
  const v387 = stdlib.Array_set(v347, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'), v386);
  const v389 = v387[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1')];
  const v390 = stdlib.Array_set(v389, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
  const v391 = stdlib.Array_set(v387, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1'), v390);
  const v393 = stdlib.tokenEq(v381, v379);
  const v394 = v393 ? false : true;
  stdlib.assert(v394, {
    at: './liquidityMigrator.withdraw.rsh:37:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  const v396 = stdlib.gt(v378, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:25:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v396, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:25:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:38:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v377, v378, v379, v381, v382, v391],
    evt_cnt: 0,
    funcNum: 1,
    lct: v383,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0'), [[v378, v379]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v410, time: v409, didSend: v176, from: v408 } = txn2;
      
      ;
      const v411 = v391[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
      const v412 = v411[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
      const v413 = stdlib.add(v412, v378);
      const v417 = stdlib.Array_set(v411, '0', v413);
      const v418 = stdlib.Array_set(v391, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0'), v417);
      sim_r.txns.push({
        amt: v378,
        kind: 'to',
        tok: v379
        });
      const v422 = v418[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v423 = v422[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v427 = stdlib.sub(v423, v378);
      const v431 = stdlib.Array_set(v422, '0', v427);
      const v432 = stdlib.Array_set(v418, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0'), v431);
      const v433 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v434 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v382,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '2'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1'),
            toks: [v381, v379]
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v433 /* simTokensRecv */, ctc6.defaultValue /* simReturnVal */];})();
      const v435 = await txn2.getOutput('internal', 'v434', ctc7, v434);
      const v437 = v435[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v438 = v435[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1')];
      const v440 = v438[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v451 = v432[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1')];
      const v452 = v451[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v453 = stdlib.add(v452, v440);
      const v457 = stdlib.Array_set(v451, '0', v453);
      const v458 = stdlib.Array_set(v432, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1'), v457);
      const v471 = v458[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '1')];
      const v472 = v471[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
      const v478 = v458[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
      const v479 = v478[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
      const v492 = stdlib.sub(v437, v437);
      sim_r.txns.push({
        kind: 'from',
        to: v377,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v377,
        tok: v381
        });
      sim_r.txns.push({
        kind: 'from',
        to: v377,
        tok: v379
        });
      const v518 = (stdlib.le(await ctc.getBalance(), v492) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v492));
      sim_r.txns.push({
        kind: 'from',
        to: v377,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v381
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v379
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc0, ctc1, ctc1, ctc3, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v410, time: v409, didSend: v176, from: v408 } = txn2;
  ;
  const v411 = v391[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
  const v412 = v411[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
  const v413 = stdlib.add(v412, v378);
  const v414 = stdlib.le(v413, stdlib.UInt_max);
  stdlib.assert(v414, {
    at: './liquidityMigrator.withdraw.rsh:42:11:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v417 = stdlib.Array_set(v411, '0', v413);
  const v418 = stdlib.Array_set(v391, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0'), v417);
  ;
  const v419 = stdlib.addressEq(v377, v408);
  stdlib.assert(v419, {
    at: './liquidityMigrator.withdraw.rsh:42:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v422 = v418[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v423 = v422[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v427 = stdlib.sub(v423, v378);
  const v428 = stdlib.ge(v427, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0'));
  stdlib.assert(v428, {
    at: './liquidityMigrator.shared.rsh:86:24:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v431 = stdlib.Array_set(v422, '0', v427);
  const v432 = stdlib.Array_set(v418, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0'), v431);
  const v433 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v434 = undefined /* Remote */;
  const v435 = await txn2.getOutput('internal', 'v434', ctc7, v434);
  const v437 = v435[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v438 = v435[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1')];
  const v440 = v438[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v448 = stdlib.le(v437, stdlib.UInt_max);
  stdlib.assert(v448, {
    at: './liquidityMigrator.shared.rsh:86:24:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v451 = v432[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1')];
  const v452 = v451[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v453 = stdlib.add(v452, v440);
  const v454 = stdlib.le(v453, stdlib.UInt_max);
  stdlib.assert(v454, {
    at: './liquidityMigrator.shared.rsh:86:24:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v457 = stdlib.Array_set(v451, '0', v453);
  const v458 = stdlib.Array_set(v432, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1'), v457);
  const v463 = stdlib.gt(v437, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:88:21:decimal', stdlib.UInt_max, '0'));
  const v464 = stdlib.gt(v440, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:88:28:decimal', stdlib.UInt_max, '0'));
  const v465 = v463 ? v464 : false;
  stdlib.assert(v465, {
    at: './liquidityMigrator.shared.rsh:88:12:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'Received invalid A or B amount',
    who: 'Admin'
    });
  const v471 = v458[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '1')];
  const v472 = v471[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
  const v473 = stdlib.eq(v440, v472);
  stdlib.assert(v473, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:72:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:53:16:application call to "confirmAmts" (defined at: ./liquidityMigrator.shared.rsh:67:55:function exp)'],
    msg: 'Invalid contract state',
    who: 'Admin'
    });
  const v478 = v458[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
  const v479 = v478[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
  const v492 = stdlib.sub(v437, v437);
  const v493 = stdlib.ge(v492, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v493, {
    at: './liquidityMigrator.shared.rsh:47:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v500 = stdlib.sub(v472, v472);
  const v501 = stdlib.ge(v500, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v501, {
    at: './liquidityMigrator.shared.rsh:47:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v504 = stdlib.Array_set(v471, '0', v500);
  const v505 = stdlib.Array_set(v458, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '1'), v504);
  ;
  const v506 = v505[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0')];
  const v507 = v506[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0')];
  const v511 = stdlib.sub(v507, v479);
  const v512 = stdlib.ge(v511, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v512, {
    at: './liquidityMigrator.shared.rsh:47:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v518 = (stdlib.le(await ctc.getBalance(), v492) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v492));
  const v519 = stdlib.safeAdd(v518, v492);
  const v523 = stdlib.sub(v519, v518);
  const v524 = stdlib.ge(v523, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v524, {
    at: './liquidityMigrator.shared.rsh:63:35:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v528 = {
    A: v437,
    B: v440
    };
  stdlib.protect(ctc2, await interact.done(v528), {
    at: './liquidityMigrator.withdraw.rsh:60:24:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:60:24:application call to [unknown function] (defined at: ./liquidityMigrator.withdraw.rsh:60:24:function exp)', 'at ./liquidityMigrator.withdraw.rsh:60:24:application call to "liftedInteract" (defined at: ./liquidityMigrator.withdraw.rsh:60:24:application)'],
    msg: 'done',
    who: 'Admin'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAGAAEECP///////////wGgjQYmAgABACI1ADEYQQN8KGRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAItIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDSUpJVwAgNf+BIFs1/oEoWzX9gTBbNfxXQCI1+4AEmouRdLA0+1cAEUk1+iJbNP4ISTX5IQQORDT7NPo0+RZcAFwANfg0/jT9iAMiNP8xABJENPhXABFJNfciWzT+CUk19iIPRDT4NPc09hZcAFwANfWABWFwcElENANXOAhQAzXzMgp4NfIyCmA08gkWMgo0/HAASBZQNfGxIrIBNP6yEiSyEDTzshQ0/bIRtiKyAYEGshA0A4E4W7IYgAQgOr5ksho0/hayGjT9sjA0/LIwszIKYDTyCTTxIlsJFjIKNPxwAEg08SVbCRZQtwE+VwQAUDX0gAgAAAAAAAABsjT0ULA09Ek18yJbNfI08yVbNfE08iEEDkQ09VcREUk18CJbNPEISTXvIQQORDT1NPA07xZcAFwRNe408iINNPEiDRBENO5XERFJNe0iWzXsNPE07BJENO5XABEiWzXrNPJJCUk16iIPRLEisgE08rIII7IQNP+yB7M07EkJSTXpIg9EsSKyATTsshIkshA0/7IUNPyyEbM07jTtNOkWXABcEVcAESJbNOsJIg9EsSKyATTrshIkshA0/7IUNP2yEbMyCmAyCngJNOoJSTXoNOoINOgJIg9EsSKyATTosggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT8shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbNCANJIIQWIAToiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yVbNf5IKDX9gRBbNfyBGFs1+4AEyX0O9zT/FlA0/hZQNP1QNPwWUDT7FlCwgRGvSTX6SVBJNflJVwARJa9cAFwASTX4SVcRESWvXABcETX3NPw0/hNEIQWIAMWxIrIBIrISJLIQMgqyFDT+shGzIQWIAK2xIrIBIrISJLIQMgqyFDT8shGzNP8iDUQxADT/FlA0/hZQNPwWUDT7FlA091ApSwFXAGJnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/liquidityMigrator.shared.rsh:86:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T0","name":"v563","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T5","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v434","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v565","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200198a38819003918201601f19168301916001600160401b03831184841017620005355780849260c0946040528339810103126200069457604051906200004b8262000699565b80518252602081015160208301526200006760408201620006d1565b60408301526060810151908115158203620006945760a0620000a491606085019384526200009860808201620006d1565b608086015201620006d1565b60a08301524360035560405160208101906001600160401b0382118183101762000535576040918252600090525190608082016001600160401b038111838210176200053557604052620000f7620006e6565b82526200010362000707565b60208301526200011262000707565b60408301526200012162000707565b606083015260ff600454166200067b5760e07f907f325501b9e2bbdefe7720945545a8ac54766b9baec7eeccaabea92f27d9729160405190338252855160208301526020860151604083015260018060a01b036040870151166060830152511515608082015260018060a01b0360808601511660a082015260018060a01b0360a08601511660c0820152a1815180159081156200066e575b5015620006555760008151526000602082510152600060408251015280516020820151528051602080830151015260208101518051604060208201519101511515604051916200020983620006b5565b60008352602083015260408201526200022162000707565b9160005b600281106200061b57505081528060408301526020810151604060208201519101511515604051916200025883620006b5565b60008352602083015260408201526200027062000707565b9160005b60028110620005cb57505060208201526060820152608082015160408301516001600160a01b03908116911603620005c35760005b15620005aa57346200059157602082015115620005785760609060405192620002d28462000699565b60008452600060208501526000604085015260008385015260006080850152620002fb62000707565b60a0858101918252338087526020848101518189019081526040808701516001600160a01b03908116828c019081526080808a015183168c8e0152988701518216898d0190815299909a015187526001600081815543909155825194850195909552915190830152965187166060828101919091529097015186169387019390935292519093169184019190915290519060c083015b600282106200054b5761016084528361018081016001600160401b03811182821017620005355760405280516001600160401b0381116200053557600254600181811c911680156200052a575b60208210146200051457601f8111620004aa575b50602091601f8211600114620004405791819260009262000434575b50508160011b916000199060031b1c1916176002555b6040516112139081620007778239f35b0151905082806200040e565b601f19821692600260005260206000209160005b858110620004915750836001951062000477575b505050811b0160025562000424565b015160001960f88460031b161c1916905582808062000468565b9192602060018192868501518155019401920162000454565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000509575b601f0160051c01905b818110620004fc5750620003f2565b60008155600101620004ed565b9091508190620004e4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003de565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000391565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b6001620002a9565b620005d781836200074e565b51620005e482866200074e565b52620005f181856200074e565b506000198114620006055760010162000274565b634e487b7160e01b600052601160045260246000fd5b6200062781836200074e565b516200063482866200074e565b526200064181856200074e565b506000198114620006055760010162000225565b60405163100960cb60e01b815260086004820152602490fd5b90506001541438620001b9565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60c081019081106001600160401b038211176200053557604052565b606081019081106001600160401b038211176200053557604052565b51906001600160a01b03821682036200069457565b60405190620006f582620006b5565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620005355781528260005b8281106200073657505050565b60209062000743620006e6565b818401520162000729565b906002811015620007605760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f114610612578063573b85101461005f57806383230757146100565763ab53f2c60361000e5761005161064e565b61000e565b5061005161062f565b602036600319011261060d57600060405161007981610714565b52600080808060405161008b81610714565b600435815261058c6102f261009e610926565b926100ba6100b56100b160045460ff1690565b1590565b610c50565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a16100f96001865414610c70565b6101286101166101076107b0565b602080825183010191016109ee565b91518015908115610601575b50610c90565b6101323415610cb0565b6101ee61017b60a0830180515151602085015101908188525161017681516040602082015191015115159061016561085b565b948552602085015215156040840152565b611129565b602086019081526101a66101a161019560408601516109c1565b6020860151903361100c565b610cd0565b6101c23360018060a01b036101bb86516109c1565b1614610cf0565b51805151602084015190039081604088015261017681516040602082015191015115159061016561085b565b60608501528460808501515261023661023161020d60408401516109c1565b61021a60808501516109c1565b6020850151916001600160a01b039091169061108c565b610d10565b8480808061025161024a60608701516109c1565b30906110da565b6101a089019081526103b26102723061026d60408a01516109c1565b6110da565b602088015190036101c08b0190815261035c47936101808d019485526102a0600160ff196004541617600455565b6103438d87808d6020810151826102f76102f26080604051956102eb876102dd6020820198630c8083fb60e21b8a52602483019190602083019252565b03601f19810189528861078d565b01516109c1565b6109c1565b9251925af19461030f610308610af5565b8097610db0565b5061031f60ff1960045416600455565b6103318d61026d6040309201516109c1565b9051916101e083830391015214610d30565b6103543061026d60608d01516109c1565b905190610c38565b9260a08c01936020855101515261039b6103958a61038d6102f2608061038560408501516109c1565b9301516109c1565b903090610edf565b15610d50565b479051900383515260208082518301019101610b42565b604082510152517f52d687c4af55c8e5fbc841ec1bfff2f9ee3d6620d0eabddfae2e9ab7d6c24cf861041760c08b0192808452604051918291829190916060602060406080840195805185528281015151838601520151805160408501520151910152565b0390a161045760e060608b0151610452602082018d81515160208851015151019485910152516040602082015191015115159061016561085b565b611186565b6101008a015280518051151583146105f7576020610479910151511515610d70565b61049a602082510151516104926101008c015160200190565b515114610d90565b816101208a01526104ae6102f287516109c1565b905151908282156105ee575bf1156105e1575b6105296020610100860151016105036101408701918883526104e660608601516109c1565b6104f086516109c1565b915151916001600160a01b031690610f6a565b61010086015190519061045260208201516040602082015191015115159061016561085b565b5061055e61053a60408301516109c1565b61054483516109c1565b6101008701515151916001600160a01b0390911690610f6a565b61058547610120860151908180821089146105d657505061016087965b0195808752610c16565b50516109c1565b9051908282156105cd575bf1156105c0575b600080556105ac6000600155565b6105b4610b8e565b60405160008152602090f35b6105c8610b6a565b61059e565b506108fc610597565b61016091039661057b565b6105e9610b6a565b6104c1565b506108fc6104ba565b5061047982610d70565b9050600154148a610122565b600080fd5b3461060d57600036600319011261060d5760035460805260206080f35b503461060d57600036600319011261060d576020600154604051908152f35b503461060d576000806003193601126106c057805461066b6107b0565b906040519283918252602090604082840152835191826040850152815b8381106106a957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610688565b80fd5b90600182811c921680156106f3575b60208310146106dd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916106d2565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761072f57604052565b6107376106fd565b604052565b606081019081106001600160401b0382111761072f57604052565b604081019081106001600160401b0382111761072f57604052565b60c081019081106001600160401b0382111761072f57604052565b601f909101601f19168101906001600160401b0382119082101761072f57604052565b60405190600082600254916107c4836106c3565b80835260019380851690811561083a57506001146107ec575b506107ea9250038361078d565b565b600260009081526000805160206111e783398151915294602093509091905b8183106108225750506107ea9350820101386107dd565b8554888401850152948501948794509183019161080b565b90506107ea94506020925060ff191682840152151560051b820101386107dd565b604051906107ea8261073c565b6040519061020082016001600160401b0381118382101761072f57604052565b6040519061089582610714565b60008252565b60409081516108a981610757565b8092600091825b8281106108bd5750505050565b60209083516108cb8161073c565b8581528583820152858582015281840152016108b0565b604051906108ef8261073c565b816000815260405161090081610714565b600081526020820152604080519161091783610757565b60008352600060208401520152565b61092e610868565b90600080835261093c61089b565b602084015280604084015261094f61089b565b606084015261095c610888565b60808401526109696108e2565b60a08401526109766108e2565b60c08401528060e084015261098961089b565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c08401526101e0830152565b6001600160a01b031690565b51906001600160a01b038216820361060d57565b5190811515820361060d57565b9061016091828183031261060d57604090815193610a0b85610772565b610a14826109cd565b85526020908183015182870152610a2c8484016109cd565b84870152606093610a3e8585016109cd565b85880152610a4e608085016109cd565b60808801528560bf8501121561060d57805195610a6a87610757565b869285019481861161060d5760a001925b858410610a91575050505050505060a082015290565b868483031261060d578487918451610aa88161073c565b865181528287015183820152610abf8688016109e1565b86820152815201930192610a7b565b906002811015610adf5760051b0190565b634e487b7160e01b600052603260045260246000fd5b3d15610b3d573d906001600160401b038211610b30575b60405191610b24601f8201601f19166020018461078d565b82523d6000602084013e565b610b386106fd565b610b0c565b606090565b9081604091031261060d57602060405191610b5c83610757565b805183520151602082015290565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b610b996002546106c3565b80610ba15750565b601f8111600114610bb457506000600255565b6002600090815290600190601f0160051c6000805160206111e7833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b818110610c0c57505050602081208160025555565b8381558201610bf7565b9190820191828111610c2b575b821061060d57565b610c33610b77565b610c23565b908103908111610c455790565b610c4d610b77565b90565b15610c5757565b60405163100960cb60e01b8152600c6004820152602490fd5b15610c7757565b60405163100960cb60e01b8152600d6004820152602490fd5b15610c9757565b60405163100960cb60e01b8152600e6004820152602490fd5b15610cb757565b60405163100960cb60e01b8152600f6004820152602490fd5b15610cd757565b60405163100960cb60e01b815260116004820152602490fd5b15610cf757565b60405163100960cb60e01b815260126004820152602490fd5b15610d1757565b60405163100960cb60e01b815260146004820152602490fd5b15610d3757565b60405163100960cb60e01b815260166004820152602490fd5b15610d5757565b60405163100960cb60e01b815260156004820152602490fd5b15610d7757565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d9757565b60405163100960cb60e01b8152601b6004820152602490fd5b15610db85790565b805115610dc757805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b15610de85790565b805115610df757805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b15610e185790565b805115610e2757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15610e485790565b805115610e5757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15610e785790565b805115610e8757805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b15610ea85790565b805115610eb757805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b9081602091031261060d575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610c4d93600093849392849190608081016001600160401b03811182821017610f5d575b6040525193165af1610f4d610f46610af5565b8092610de0565b5060208082518301019101610ed0565b610f656106fd565b610f33565b60009190829182610f99610fa7610fd697604051928391602083019663a9059cbb60e01b885260248401610fdd565b03601f19810183528261078d565b51926001600160a01b03165af1610fc6610fbf610af5565b8092610e10565b5060208082518301019101610ff8565b1561060d57565b6001600160a01b039091168152602081019190915260400190565b9081602091031261060d57610c4d906109e1565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610c4d936000938493909284919060a081016001600160401b0381118282101761107f575b6040525193165af1610fc6611078610af5565b8092610e40565b6110876106fd565b611065565b60009190829182610f996110bb610c4d97604051928391602083019663095ea7b360e01b885260248401610fdd565b51926001600160a01b03165af1610fc66110d3610af5565b8092610e70565b60008091610c4d93826040519160208301926370a0823160e01b845260018060a01b038092166024820152602481526111128161073c565b5193165af1610f4d611122610af5565b8092610ea0565b919061113361089b565b9260005b600281106111455750508252565b8061115260019284610ace565b5161115d8288610ace565b526111688187610ace565b506000198114611179575b01611137565b611181610b77565b611173565b919061119061089b565b9260005b600281106111a55750506020830152565b806111b260019284610ace565b516111bd8288610ace565b526111c88187610ace565b5060001981146111d9575b01611194565b6111e1610b77565b6111d356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 6538,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './liquidityMigrator.withdraw.rsh:39:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './liquidityMigrator.withdraw.rsh:61:13:after expr stmt semicolon',
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
  "Admin": Admin
  };
export const _APIs = {
  };
