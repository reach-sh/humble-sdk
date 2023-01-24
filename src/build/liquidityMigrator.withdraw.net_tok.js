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
            boxes: [],
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
    msg: 'Invalid Token B balance',
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
    impure: [`_reachp_0((uint64,uint64,uint64,byte[0],uint64,uint64))void`, `_reachp_1((uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64,byte[0],uint64,uint64))void`, `_reachp_1((uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAHAAEIoI0G////////////AQQgJgIAAQAxGEEDHChkSSJbNQEkWzUCKWSCAgQztvYWBN/ZIyg2GgCOAgLgAu8AMQA1EjQLIls1DDQLJFs1ETQLgRBbNRA0C4EYWzUPNAshBls1DoAENB2hsTQMFlA0ERZQNBAWUDQPFlA0DhZQsDQMiANIgRGvSTULSVBJNQxJVwARJK9cAFwASTULSVcRESSvXABcETUNNA80EBNEJYgDECI0EDIKiAMAJYgDBCI0DzIKiAL0NBEiDUQ0EjQRFlA0EBZQNA8WUDQOFlA0DVAjMgY1AjUBKUxXAGJnKDQBFjQCFlBnMRkiEkSIAtg0A0AACoAEFR98dTQEULAjQyM0ARJESVcAIDUSSSEGWzURSYEoWzUQSYEwWzUPSYE4WzUOV0AiNQ00Cxc1DIAE1RUZFDQMFlCwNAyIAoA0DVcAEUk1EyJbNBEISTUMIQQORDQNNBM0DBZcAFwANQs0ETQQMRY0ACMISTUACUcDOBQyChJEOBAhBRJEOBFPAhJEOBISRDQSMQASRDQLVwARSTUTIls0EQlJNQ0iD0Q0CzQTNA0WXABcADUMgAVhcHBJRDQOFlADNQgyCng1CSgyCmA0CQkWMgo0D3AASBZQNQo0ETQQNAiIAgC2IrIBgQayEDQOshiABCA6vmSyGjQRFrIaNBCyMDQPsjCzMgpgNAkJNAoiWwkWMgo0D3AASDQKJFsJFlC3AT5XBABQNQuACAAAAAAAAAGyNAtQsDQLSTUNIls1DjQNJFs1CzQOIQQORDQMVxERSTUTIls0CwhJNREhBA5ENAw0EzQRFlwAXBE1DTQOIg00CyINEEQ0DVcREUk1ESJbNQw0CzQMEkQ0DVcAESJbNRM0DkkJSTULIg9ENA40EogBFzQMSQlJNQ4iD0Q0DDQPNBKIAQA0DTQRNA4WXABcEVcAESJbNBMJIg9ENBM0EDQSiADhMgpgMgp4CTQLCUk1DDQLCDQMCSIPRDQMNBKIAMgiNA8yCjIJiADiIjQQMgoyCYgA2DEZgQUSRIgAwyIyCjIJiADRQv3giACnJYgAnTYaATULQv0SiACYNhoBNQtC/dciMTQSRIECMTUSRCIxNhJEIjE3EkSIAHiBYq8iIkL9izEZIhJEQv2jIrIBI7IQsgeyCLOJIrIBIQWyELIUshGyEokisgEhBbIQshSyEbISs4lIiUwJSTUGMgmIACmJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJsUL/vLFC/540Bgg1BokjNQOJSSISTDQCEhFEiTQGNAdKD0H/rEL/tLGyFUL/krFC/4CxsglC/24=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `44`,
    1000: `673`,
    1001: `673`,
    1002: `673`,
    1003: `675`,
    1004: `676`,
    1005: `676`,
    1006: `676`,
    1007: `678`,
    1008: `679`,
    1009: `679`,
    101: `45`,
    1010: `680`,
    102: `45`,
    103: `46`,
    104: `46`,
    105: `46`,
    106: `46`,
    107: `46`,
    108: `46`,
    109: `47`,
    11: `2`,
    110: `47`,
    111: `48`,
    112: `49`,
    113: `50`,
    114: `50`,
    115: `51`,
    116: `52`,
    117: `53`,
    118: `53`,
    119: `54`,
    12: `2`,
    120: `55`,
    121: `56`,
    122: `56`,
    123: `57`,
    124: `58`,
    125: `59`,
    126: `59`,
    127: `60`,
    128: `61`,
    129: `62`,
    13: `2`,
    130: `64`,
    131: `64`,
    132: `65`,
    133: `65`,
    134: `65`,
    135: `66`,
    136: `66`,
    137: `67`,
    138: `68`,
    139: `69`,
    14: `2`,
    140: `69`,
    141: `70`,
    142: `71`,
    143: `72`,
    144: `73`,
    145: `73`,
    146: `74`,
    147: `75`,
    148: `75`,
    149: `75`,
    15: `2`,
    150: `76`,
    151: `77`,
    152: `78`,
    153: `78`,
    154: `79`,
    155: `79`,
    156: `80`,
    157: `81`,
    158: `81`,
    159: `82`,
    16: `2`,
    160: `83`,
    161: `83`,
    162: `83`,
    163: `84`,
    164: `85`,
    165: `86`,
    166: `86`,
    167: `87`,
    168: `87`,
    169: `88`,
    17: `2`,
    170: `88`,
    171: `89`,
    172: `89`,
    173: `90`,
    174: `90`,
    175: `91`,
    176: `92`,
    177: `95`,
    178: `96`,
    179: `96`,
    18: `2`,
    180: `96`,
    181: `97`,
    182: `99`,
    183: `99`,
    184: `100`,
    185: `100`,
    186: `101`,
    187: `101`,
    188: `101`,
    189: `102`,
    19: `2`,
    190: `103`,
    191: `103`,
    192: `103`,
    193: `104`,
    194: `106`,
    195: `106`,
    196: `107`,
    197: `107`,
    198: `108`,
    199: `108`,
    2: `2`,
    20: `2`,
    200: `108`,
    201: `109`,
    202: `109`,
    203: `110`,
    204: `111`,
    205: `112`,
    206: `118`,
    207: `118`,
    208: `119`,
    209: `119`,
    21: `2`,
    210: `120`,
    211: `121`,
    212: `122`,
    213: `122`,
    214: `123`,
    215: `124`,
    216: `125`,
    217: `125`,
    218: `126`,
    219: `127`,
    22: `2`,
    220: `128`,
    221: `128`,
    222: `129`,
    223: `130`,
    224: `131`,
    225: `131`,
    226: `132`,
    227: `133`,
    228: `134`,
    229: `134`,
    23: `2`,
    230: `136`,
    231: `136`,
    232: `137`,
    233: `137`,
    234: `138`,
    235: `139`,
    236: `140`,
    237: `140`,
    238: `140`,
    239: `141`,
    24: `2`,
    240: `142`,
    241: `143`,
    242: `143`,
    243: `144`,
    244: `145`,
    245: `145`,
    246: `146`,
    247: `147`,
    248: `148`,
    249: `149`,
    25: `2`,
    250: `149`,
    251: `150`,
    252: `151`,
    253: `152`,
    254: `154`,
    255: `154`,
    256: `154`,
    257: `156`,
    258: `156`,
    259: `157`,
    26: `4`,
    260: `157`,
    261: `157`,
    262: `159`,
    263: `159`,
    264: `159`,
    265: `159`,
    266: `159`,
    267: `159`,
    268: `160`,
    269: `160`,
    27: `4`,
    270: `161`,
    271: `162`,
    272: `164`,
    273: `165`,
    274: `167`,
    275: `168`,
    276: `168`,
    277: `169`,
    278: `170`,
    279: `172`,
    28: `5`,
    280: `173`,
    281: `173`,
    282: `173`,
    283: `174`,
    284: `174`,
    285: `175`,
    286: `176`,
    287: `176`,
    288: `177`,
    289: `178`,
    29: `5`,
    290: `178`,
    291: `179`,
    292: `180`,
    293: `180`,
    294: `181`,
    295: `182`,
    296: `182`,
    297: `183`,
    298: `184`,
    299: `184`,
    3: `2`,
    30: `5`,
    300: `185`,
    301: `186`,
    302: `186`,
    303: `187`,
    304: `188`,
    305: `188`,
    306: `189`,
    307: `190`,
    308: `190`,
    309: `191`,
    31: `6`,
    310: `191`,
    311: `191`,
    312: `192`,
    313: `192`,
    314: `193`,
    315: `193`,
    316: `194`,
    317: `195`,
    318: `195`,
    319: `196`,
    32: `7`,
    320: `196`,
    321: `196`,
    322: `196`,
    323: `196`,
    324: `196`,
    325: `197`,
    326: `197`,
    327: `198`,
    328: `199`,
    329: `200`,
    33: `8`,
    330: `202`,
    331: `202`,
    332: `203`,
    333: `203`,
    334: `203`,
    335: `204`,
    336: `204`,
    337: `205`,
    338: `205`,
    339: `205`,
    34: `9`,
    340: `206`,
    341: `207`,
    342: `207`,
    343: `208`,
    344: `209`,
    345: `210`,
    346: `210`,
    347: `211`,
    348: `212`,
    349: `213`,
    35: `10`,
    350: `213`,
    351: `214`,
    352: `214`,
    353: `215`,
    354: `216`,
    355: `219`,
    356: `219`,
    357: `220`,
    358: `220`,
    359: `221`,
    36: `11`,
    360: `221`,
    361: `222`,
    362: `223`,
    363: `223`,
    364: `224`,
    365: `224`,
    366: `225`,
    367: `225`,
    368: `226`,
    369: `226`,
    37: `11`,
    370: `227`,
    371: `227`,
    372: `230`,
    373: `230`,
    374: `231`,
    375: `231`,
    376: `232`,
    377: `233`,
    378: `234`,
    379: `235`,
    38: `12`,
    380: `235`,
    381: `236`,
    382: `237`,
    383: `237`,
    384: `238`,
    385: `238`,
    386: `239`,
    387: `239`,
    388: `240`,
    389: `241`,
    39: `13`,
    390: `242`,
    391: `242`,
    392: `243`,
    393: `243`,
    394: `244`,
    395: `245`,
    396: `246`,
    397: `246`,
    398: `247`,
    399: `247`,
    4: `2`,
    40: `14`,
    400: `248`,
    401: `249`,
    402: `250`,
    403: `250`,
    404: `251`,
    405: `252`,
    406: `255`,
    407: `255`,
    408: `256`,
    409: `256`,
    41: `14`,
    410: `257`,
    411: `258`,
    412: `261`,
    413: `261`,
    414: `262`,
    415: `262`,
    416: `262`,
    417: `263`,
    418: `264`,
    419: `264`,
    42: `15`,
    420: `265`,
    421: `266`,
    422: `267`,
    423: `267`,
    424: `268`,
    425: `269`,
    426: `270`,
    427: `270`,
    428: `271`,
    429: `272`,
    43: `16`,
    430: `273`,
    431: `277`,
    432: `277`,
    433: `278`,
    434: `278`,
    435: `279`,
    436: `279`,
    437: `280`,
    438: `281`,
    439: `281`,
    44: `18`,
    440: `282`,
    441: `282`,
    442: `283`,
    443: `283`,
    444: `284`,
    445: `284`,
    446: `284`,
    447: `284`,
    448: `284`,
    449: `284`,
    45: `18`,
    450: `284`,
    451: `285`,
    452: `285`,
    453: `286`,
    454: `287`,
    455: `288`,
    456: `289`,
    457: `289`,
    458: `290`,
    459: `290`,
    46: `18`,
    460: `291`,
    461: `292`,
    462: `292`,
    463: `293`,
    464: `294`,
    465: `294`,
    466: `295`,
    467: `296`,
    468: `296`,
    469: `297`,
    47: `18`,
    470: `298`,
    471: `299`,
    472: `299`,
    473: `301`,
    474: `301`,
    475: `302`,
    476: `302`,
    477: `303`,
    478: `304`,
    479: `305`,
    48: `18`,
    480: `306`,
    481: `306`,
    482: `307`,
    483: `307`,
    484: `309`,
    485: `309`,
    486: `310`,
    487: `310`,
    488: `311`,
    489: `311`,
    49: `18`,
    490: `311`,
    491: `312`,
    492: `313`,
    493: `314`,
    494: `314`,
    495: `315`,
    496: `315`,
    497: `316`,
    498: `316`,
    499: `317`,
    5: `2`,
    50: `18`,
    500: `317`,
    501: `319`,
    502: `319`,
    503: `320`,
    504: `320`,
    505: `320`,
    506: `320`,
    507: `320`,
    508: `320`,
    509: `321`,
    51: `18`,
    510: `321`,
    511: `322`,
    512: `322`,
    513: `323`,
    514: `324`,
    515: `324`,
    516: `325`,
    517: `325`,
    518: `326`,
    519: `326`,
    52: `18`,
    520: `327`,
    521: `327`,
    522: `328`,
    523: `328`,
    524: `329`,
    525: `333`,
    526: `333`,
    527: `334`,
    528: `335`,
    529: `335`,
    53: `18`,
    530: `336`,
    531: `337`,
    532: `337`,
    533: `338`,
    534: `339`,
    535: `340`,
    536: `341`,
    537: `342`,
    538: `342`,
    539: `343`,
    54: `18`,
    540: `343`,
    541: `344`,
    542: `344`,
    543: `345`,
    544: `346`,
    545: `346`,
    546: `347`,
    547: `348`,
    548: `349`,
    549: `350`,
    55: `18`,
    550: `351`,
    551: `352`,
    552: `352`,
    553: `352`,
    554: `353`,
    555: `353`,
    556: `353`,
    557: `354`,
    558: `355`,
    559: `355`,
    56: `19`,
    560: `356`,
    561: `356`,
    562: `356`,
    563: `356`,
    564: `356`,
    565: `356`,
    566: `356`,
    567: `356`,
    568: `356`,
    569: `356`,
    57: `19`,
    570: `357`,
    571: `357`,
    572: `358`,
    573: `359`,
    574: `360`,
    575: `360`,
    576: `361`,
    577: `362`,
    578: `362`,
    579: `363`,
    58: `19`,
    580: `364`,
    581: `365`,
    582: `365`,
    583: `366`,
    584: `366`,
    585: `367`,
    586: `368`,
    587: `369`,
    588: `369`,
    589: `370`,
    59: `20`,
    590: `370`,
    591: `371`,
    592: `371`,
    593: `372`,
    594: `373`,
    595: `377`,
    596: `377`,
    597: `378`,
    598: `378`,
    599: `378`,
    6: `2`,
    60: `20`,
    600: `379`,
    601: `380`,
    602: `380`,
    603: `381`,
    604: `382`,
    605: `383`,
    606: `383`,
    607: `384`,
    608: `385`,
    609: `386`,
    61: `20`,
    610: `386`,
    611: `387`,
    612: `387`,
    613: `388`,
    614: `389`,
    615: `393`,
    616: `393`,
    617: `394`,
    618: `394`,
    619: `395`,
    62: `20`,
    620: `395`,
    621: `396`,
    622: `397`,
    623: `397`,
    624: `398`,
    625: `398`,
    626: `399`,
    627: `399`,
    628: `400`,
    629: `400`,
    63: `20`,
    630: `401`,
    631: `402`,
    632: `403`,
    633: `403`,
    634: `404`,
    635: `405`,
    636: `406`,
    637: `407`,
    638: `411`,
    639: `411`,
    64: `20`,
    640: `412`,
    641: `412`,
    642: `412`,
    643: `413`,
    644: `414`,
    645: `414`,
    646: `415`,
    647: `416`,
    648: `417`,
    649: `417`,
    65: `22`,
    650: `418`,
    651: `418`,
    652: `419`,
    653: `419`,
    654: `420`,
    655: `421`,
    656: `426`,
    657: `426`,
    658: `427`,
    659: `427`,
    66: `24`,
    660: `427`,
    661: `428`,
    662: `429`,
    663: `430`,
    664: `430`,
    665: `431`,
    666: `431`,
    667: `432`,
    668: `433`,
    669: `434`,
    67: `24`,
    670: `435`,
    671: `435`,
    672: `436`,
    673: `437`,
    674: `438`,
    675: `442`,
    676: `442`,
    677: `444`,
    678: `444`,
    679: `445`,
    68: `25`,
    680: `445`,
    681: `445`,
    682: `446`,
    683: `446`,
    684: `447`,
    685: `448`,
    686: `449`,
    687: `450`,
    688: `450`,
    689: `451`,
    69: `25`,
    690: `452`,
    691: `453`,
    692: `457`,
    693: `457`,
    694: `458`,
    695: `458`,
    696: `459`,
    697: `459`,
    698: `460`,
    699: `460`,
    7: `2`,
    70: `26`,
    700: `460`,
    701: `461`,
    702: `461`,
    703: `462`,
    704: `462`,
    705: `463`,
    706: `463`,
    707: `464`,
    708: `465`,
    709: `465`,
    71: `26`,
    710: `466`,
    711: `466`,
    712: `467`,
    713: `467`,
    714: `467`,
    715: `468`,
    716: `469`,
    717: `470`,
    718: `470`,
    719: `471`,
    72: `27`,
    720: `472`,
    721: `473`,
    722: `474`,
    723: `478`,
    724: `478`,
    725: `479`,
    726: `479`,
    727: `480`,
    728: `480`,
    729: `481`,
    73: `28`,
    730: `481`,
    731: `481`,
    732: `482`,
    733: `482`,
    734: `483`,
    735: `484`,
    736: `484`,
    737: `485`,
    738: `486`,
    739: `487`,
    74: `29`,
    740: `487`,
    741: `488`,
    742: `490`,
    743: `491`,
    744: `491`,
    745: `492`,
    746: `492`,
    747: `493`,
    748: `494`,
    749: `494`,
    75: `29`,
    750: `495`,
    751: `496`,
    752: `497`,
    753: `498`,
    754: `502`,
    755: `502`,
    756: `503`,
    757: `503`,
    758: `504`,
    759: `504`,
    76: `30`,
    760: `504`,
    761: `506`,
    762: `507`,
    763: `507`,
    764: `508`,
    765: `508`,
    766: `509`,
    767: `509`,
    768: `510`,
    769: `510`,
    77: `30`,
    770: `510`,
    771: `511`,
    772: `512`,
    773: `512`,
    774: `513`,
    775: `513`,
    776: `514`,
    777: `514`,
    778: `515`,
    779: `515`,
    78: `31`,
    780: `515`,
    781: `517`,
    782: `517`,
    783: `518`,
    784: `518`,
    785: `519`,
    786: `520`,
    787: `522`,
    788: `522`,
    789: `522`,
    79: `32`,
    790: `524`,
    791: `525`,
    792: `525`,
    793: `526`,
    794: `526`,
    795: `527`,
    796: `527`,
    797: `527`,
    798: `528`,
    799: `528`,
    8: `2`,
    80: `33`,
    800: `528`,
    801: `530`,
    802: `530`,
    803: `530`,
    804: `531`,
    805: `532`,
    806: `532`,
    807: `532`,
    808: `533`,
    809: `533`,
    81: `33`,
    810: `533`,
    811: `534`,
    812: `534`,
    813: `535`,
    814: `535`,
    815: `535`,
    816: `537`,
    817: `537`,
    818: `537`,
    819: `538`,
    82: `34`,
    820: `538`,
    821: `538`,
    822: `539`,
    823: `539`,
    824: `540`,
    825: `540`,
    826: `540`,
    827: `542`,
    828: `543`,
    829: `543`,
    83: `34`,
    830: `544`,
    831: `545`,
    832: `546`,
    833: `546`,
    834: `547`,
    835: `547`,
    836: `548`,
    837: `549`,
    838: `550`,
    839: `551`,
    84: `35`,
    840: `551`,
    841: `552`,
    842: `553`,
    843: `554`,
    844: `555`,
    845: `555`,
    846: `556`,
    847: `557`,
    848: `558`,
    849: `558`,
    85: `35`,
    850: `558`,
    851: `559`,
    852: `559`,
    853: `560`,
    854: `561`,
    855: `562`,
    856: `563`,
    857: `563`,
    858: `563`,
    859: `565`,
    86: `36`,
    860: `565`,
    861: `566`,
    862: `567`,
    863: `568`,
    864: `570`,
    865: `570`,
    866: `570`,
    867: `572`,
    868: `573`,
    869: `573`,
    87: `37`,
    870: `574`,
    871: `575`,
    872: `575`,
    873: `576`,
    874: `576`,
    875: `577`,
    876: `577`,
    877: `578`,
    878: `579`,
    879: `581`,
    88: `37`,
    880: `582`,
    881: `582`,
    882: `583`,
    883: `583`,
    884: `584`,
    885: `584`,
    886: `585`,
    887: `585`,
    888: `586`,
    889: `586`,
    89: `38`,
    890: `587`,
    891: `587`,
    892: `588`,
    893: `590`,
    894: `591`,
    895: `591`,
    896: `592`,
    897: `592`,
    898: `593`,
    899: `593`,
    9: `2`,
    90: `38`,
    900: `594`,
    901: `594`,
    902: `595`,
    903: `595`,
    904: `596`,
    905: `596`,
    906: `597`,
    907: `598`,
    908: `600`,
    909: `601`,
    91: `39`,
    910: `603`,
    911: `604`,
    912: `605`,
    913: `606`,
    914: `606`,
    915: `607`,
    916: `607`,
    917: `608`,
    918: `608`,
    919: `608`,
    92: `39`,
    920: `609`,
    921: `611`,
    922: `612`,
    923: `613`,
    924: `613`,
    925: `613`,
    926: `614`,
    927: `615`,
    928: `615`,
    929: `618`,
    93: `40`,
    930: `618`,
    931: `619`,
    932: `619`,
    933: `620`,
    934: `621`,
    935: `622`,
    936: `623`,
    937: `623`,
    938: `624`,
    939: `625`,
    94: `41`,
    940: `625`,
    941: `626`,
    942: `626`,
    943: `627`,
    944: `627`,
    945: `628`,
    946: `629`,
    947: `630`,
    948: `630`,
    949: `631`,
    95: `41`,
    950: `632`,
    951: `633`,
    952: `634`,
    953: `634`,
    954: `635`,
    955: `636`,
    956: `637`,
    957: `639`,
    958: `640`,
    959: `640`,
    96: `42`,
    960: `640`,
    961: `642`,
    962: `643`,
    963: `643`,
    964: `643`,
    965: `645`,
    966: `645`,
    967: `646`,
    968: `647`,
    969: `647`,
    97: `42`,
    970: `648`,
    971: `650`,
    972: `651`,
    973: `651`,
    974: `652`,
    975: `654`,
    976: `655`,
    977: `656`,
    978: `657`,
    979: `658`,
    98: `43`,
    980: `658`,
    981: `659`,
    982: `660`,
    983: `661`,
    984: `662`,
    985: `664`,
    986: `664`,
    987: `665`,
    988: `665`,
    989: `666`,
    99: `43`,
    990: `667`,
    991: `668`,
    992: `668`,
    993: `668`,
    994: `669`,
    995: `669`,
    996: `669`,
    997: `671`,
    998: `672`,
    999: `672`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/liquidityMigrator.shared.rsh:86:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T0","name":"v564","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bool","name":"elem3","type":"bool"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T5","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v434","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v567","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200197a38819003918201601f19168301916001600160401b03831184841017620005255780849260c0946040528339810103126200068457604051906200004b8262000689565b80518252602081015160208301526200006760408201620006c1565b60408301526060810151908115158203620006845760a0620000a491606085019384526200009860808201620006c1565b608086015201620006c1565b60a08301524360035560405160208101906001600160401b0382118183101762000525576000916040525260405190620000de82620006a5565b620000e8620006d6565b82526020820190620000f9620006f7565b825262000105620006f7565b604084015260ff600454166200066b5760e07f907f325501b9e2bbdefe7720945545a8ac54766b9baec7eeccaabea92f27d9729160405190338252865160208301526020870151604083015260018060a01b036040880151166060830152511515608082015260018060a01b0360808701511660a082015260018060a01b0360a08701511660c0820152a1825180159081156200065e575b501562000645576000825152600060208351015260006040835101528151815152815160208251015251805160406020820151910151151560405191620001e483620006a5565b6000835260208301526040820152620001fc620006f7565b9160005b600281106200060b57505081526040828101919091526080830151908301516001600160a01b03908116911603620006035760005b15620005ea5734620005d157602082015115620005b8576040908151926200025d8462000689565b6000845260006020850152600083850152600060608501526000608085015262000286620006f7565b60a08501523384526020810151602085015260018060a01b0383820151168385015260018060a01b03608082015116606085015260a0600180821b039101511660808401520151602081015160406020820151910151151560405191620002ed83620006a5565b600083526020830152604082015262000305620006f7565b9160005b6002811062000568575050602082015260a082015260016000554360015560a060405191600180831b03815116602084015260208101516040840152600180831b036040820151166060840152600180831b036060820151166080840152600180831b0360808201511682840152015160c082016000905b600282106200053b5761016084528361018081016001600160401b03811182821017620005255760405280516001600160401b0381116200052557600254600181811c911680156200051a575b60208210146200050457601f81116200049a575b50602091601f8211600114620004305791819260009262000424575b50508160011b916000199060031b1c1916176002555b6040516112139081620007678239f35b015190508280620003fe565b601f19821692600260005260206000209160005b858110620004815750836001951062000467575b505050811b0160025562000414565b015160001960f88460031b161c1916905582808062000458565b9192602060018192868501518155019401920162000444565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004f9575b601f0160051c01905b818110620004ec5750620003e2565b60008155600101620004dd565b9091508190620004d4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ce565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000381565b6200057481836200073e565b516200058182866200073e565b526200058e81856200073e565b506000198114620005a25760010162000309565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b600162000235565b6200061781836200073e565b516200062482866200073e565b526200063181856200073e565b506000198114620005a25760010162000200565b60405163100960cb60e01b815260086004820152602490fd5b905060015414386200019d565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60c081019081106001600160401b038211176200052557604052565b606081019081106001600160401b038211176200052557604052565b51906001600160a01b03821682036200068457565b60405190620006e582620006a5565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620005255781528260005b8281106200072657505050565b60209062000733620006d6565b818401520162000719565b906002811015620007505760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f114610612578063573b85101461005f57806383230757146100565763ab53f2c60361000e5761005161064e565b61000e565b5061005161062f565b602036600319011261060d57600060405161007981610714565b52600080808060405161008b81610714565b600435815261058c6102f261009e610926565b926100ac6001865414610c50565b6101286100c96100ba6107b0565b602080825183010191016109ee565b916100e56100e06100dc60045460ff1690565b1590565b610c70565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1518015908115610601575b50610c90565b6101323415610cb0565b6101ee61017b60a0830180515151602085015101908188525161017681516040602082015191015115159061016561085b565b948552602085015215156040840152565b611129565b602086019081526101a66101a161019560408601516109c1565b6020860151903361100c565b610cd0565b6101c23360018060a01b036101bb86516109c1565b1614610cf0565b51805151602084015190039081604088015261017681516040602082015191015115159061016561085b565b60608501528460808501515261023661023161020d60408401516109c1565b61021a60808501516109c1565b6020850151916001600160a01b039091169061108c565b610d10565b8480808061025161024a60608701516109c1565b30906110da565b6101a089019081526103b26102723061026d60408a01516109c1565b6110da565b602088015190036101c08b0190815261035c47936101808d019485526102a0600160ff196004541617600455565b6103438d87808d6020810151826102f76102f26080604051956102eb876102dd6020820198630c8083fb60e21b8a52602483019190602083019252565b03601f19810189528861078d565b01516109c1565b6109c1565b9251925af19461030f610308610af5565b8097610db0565b5061031f60ff1960045416600455565b6103318d61026d6040309201516109c1565b9051916101e083830391015214610d30565b6103543061026d60608d01516109c1565b905190610c38565b9260a08c01936020855101515261039b6103958a61038d6102f2608061038560408501516109c1565b9301516109c1565b903090610edf565b15610d50565b479051900383515260208082518301019101610b42565b604082510152517f52d687c4af55c8e5fbc841ec1bfff2f9ee3d6620d0eabddfae2e9ab7d6c24cf861041760c08b0192808452604051918291829190916060602060406080840195805185528281015151838601520151805160408501520151910152565b0390a161045760e060608b0151610452602082018d81515160208851015151019485910152516040602082015191015115159061016561085b565b611186565b6101008a015280518051151583146105f7576020610479910151511515610d70565b61049a602082510151516104926101008c015160200190565b515114610d90565b816101208a01526104ae6102f287516109c1565b905151908282156105ee575bf1156105e1575b6105296020610100860151016105036101408701918883526104e660608601516109c1565b6104f086516109c1565b915151916001600160a01b031690610f6a565b61010086015190519061045260208201516040602082015191015115159061016561085b565b5061055e61053a60408301516109c1565b61054483516109c1565b6101008701515151916001600160a01b0390911690610f6a565b61058547610120860151908180821089146105d657505061016087965b0195808752610c16565b50516109c1565b9051908282156105cd575bf1156105c0575b600080556105ac6000600155565b6105b4610b8e565b60405160008152602090f35b6105c8610b6a565b61059e565b506108fc610597565b61016091039661057b565b6105e9610b6a565b6104c1565b506108fc6104ba565b5061047982610d70565b9050600154148a610122565b600080fd5b3461060d57600036600319011261060d5760035460805260206080f35b503461060d57600036600319011261060d576020600154604051908152f35b503461060d576000806003193601126106c057805461066b6107b0565b906040519283918252602090604082840152835191826040850152815b8381106106a957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610688565b80fd5b90600182811c921680156106f3575b60208310146106dd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916106d2565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761072f57604052565b6107376106fd565b604052565b606081019081106001600160401b0382111761072f57604052565b604081019081106001600160401b0382111761072f57604052565b60c081019081106001600160401b0382111761072f57604052565b601f909101601f19168101906001600160401b0382119082101761072f57604052565b60405190600082600254916107c4836106c3565b80835260019380851690811561083a57506001146107ec575b506107ea9250038361078d565b565b600260009081526000805160206111e783398151915294602093509091905b8183106108225750506107ea9350820101386107dd565b8554888401850152948501948794509183019161080b565b90506107ea94506020925060ff191682840152151560051b820101386107dd565b604051906107ea8261073c565b6040519061020082016001600160401b0381118382101761072f57604052565b6040519061089582610714565b60008252565b60409081516108a981610757565b8092600091825b8281106108bd5750505050565b60209083516108cb8161073c565b8581528583820152858582015281840152016108b0565b604051906108ef8261073c565b816000815260405161090081610714565b600081526020820152604080519161091783610757565b60008352600060208401520152565b61092e610868565b90600080835261093c61089b565b602084015280604084015261094f61089b565b606084015261095c610888565b60808401526109696108e2565b60a08401526109766108e2565b60c08401528060e084015261098961089b565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c08401526101e0830152565b6001600160a01b031690565b51906001600160a01b038216820361060d57565b5190811515820361060d57565b9061016091828183031261060d57604090815193610a0b85610772565b610a14826109cd565b85526020908183015182870152610a2c8484016109cd565b84870152606093610a3e8585016109cd565b85880152610a4e608085016109cd565b60808801528560bf8501121561060d57805195610a6a87610757565b869285019481861161060d5760a001925b858410610a91575050505050505060a082015290565b868483031261060d578487918451610aa88161073c565b865181528287015183820152610abf8688016109e1565b86820152815201930192610a7b565b906002811015610adf5760051b0190565b634e487b7160e01b600052603260045260246000fd5b3d15610b3d573d906001600160401b038211610b30575b60405191610b24601f8201601f19166020018461078d565b82523d6000602084013e565b610b386106fd565b610b0c565b606090565b9081604091031261060d57602060405191610b5c83610757565b805183520151602082015290565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b610b996002546106c3565b80610ba15750565b601f8111600114610bb457506000600255565b6002600090815290600190601f0160051c6000805160206111e7833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b818110610c0c57505050602081208160025555565b8381558201610bf7565b9190820191828111610c2b575b821061060d57565b610c33610b77565b610c23565b908103908111610c455790565b610c4d610b77565b90565b15610c5757565b60405163100960cb60e01b8152600c6004820152602490fd5b15610c7757565b60405163100960cb60e01b8152600d6004820152602490fd5b15610c9757565b60405163100960cb60e01b8152600e6004820152602490fd5b15610cb757565b60405163100960cb60e01b8152600f6004820152602490fd5b15610cd757565b60405163100960cb60e01b815260116004820152602490fd5b15610cf757565b60405163100960cb60e01b815260126004820152602490fd5b15610d1757565b60405163100960cb60e01b815260146004820152602490fd5b15610d3757565b60405163100960cb60e01b815260166004820152602490fd5b15610d5757565b60405163100960cb60e01b815260156004820152602490fd5b15610d7757565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d9757565b60405163100960cb60e01b8152601b6004820152602490fd5b15610db85790565b805115610dc757805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b15610de85790565b805115610df757805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b15610e185790565b805115610e2757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15610e485790565b805115610e5757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15610e785790565b805115610e8757805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b15610ea85790565b805115610eb757805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b9081602091031261060d575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610c4d93600093849392849190608081016001600160401b03811182821017610f5d575b6040525193165af1610f4d610f46610af5565b8092610de0565b5060208082518301019101610ed0565b610f656106fd565b610f33565b60009190829182610f99610fa7610fd697604051928391602083019663a9059cbb60e01b885260248401610fdd565b03601f19810183528261078d565b51926001600160a01b03165af1610fc6610fbf610af5565b8092610e10565b5060208082518301019101610ff8565b1561060d57565b6001600160a01b039091168152602081019190915260400190565b9081602091031261060d57610c4d906109e1565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610c4d936000938493909284919060a081016001600160401b0381118282101761107f575b6040525193165af1610fc6611078610af5565b8092610e40565b6110876106fd565b611065565b60009190829182610f996110bb610c4d97604051928391602083019663095ea7b360e01b885260248401610fdd565b51926001600160a01b03165af1610fc66110d3610af5565b8092610e70565b60008091610c4d93826040519160208301926370a0823160e01b845260018060a01b038092166024820152602481526111128161073c565b5193165af1610f4d611122610af5565b8092610ea0565b919061113361089b565b9260005b600281106111455750508252565b8061115260019284610ace565b5161115d8288610ace565b526111688187610ace565b506000198114611179575b01611137565b611181610b77565b611173565b919061119061089b565b9260005b600281106111a55750506020830152565b806111b260019284610ace565b516111bd8288610ace565b526111c88187610ace565b5060001981146111d9575b01611194565b6111e1610b77565b6111d356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6522,
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
