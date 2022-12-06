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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc6]
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
  const ctc4 = stdlib.T_Struct([['oldLPAmt', ctc0], ['oldlpToken', ctc1], ['tokA', ctc2], ['tokB', ctc1], ['oldPoolId', ctc3], ['newlpToken', ctc1], ['newPoolId', ctc3]]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v482 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v483 = [v482, v482, v482];
  const v487 = stdlib.protect(ctc4, interact.opts, 'for Admin\'s interact field opts');
  const v488 = v487.oldLPAmt;
  const v489 = v487.oldlpToken;
  const v490 = v487.tokA;
  const v491 = v487.tokB;
  const v492 = v487.oldPoolId;
  const v493 = v487.newlpToken;
  const v494 = v487.newPoolId;
  
  const v504 = stdlib.gt(v488, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:49:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v504, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:38:15:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:38:19:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'Admin'
    });
  const v510 = stdlib.digest([ctc3], [v492]);
  const v511 = stdlib.digest([ctc3], [v494]);
  const v512 = stdlib.digestEq(v510, v511);
  const v513 = v512 ? false : true;
  stdlib.assert(v513, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:28:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:50:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)', 'at ./liquidityMigrator.transfer.rsh:38:15:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:38:19:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v521 = stdlib.tokenEq(v491, v489);
  const v523 = stdlib.tokenEq(v491, v493);
  const v524 = v523 ? false : true;
  const v525 = v521 ? false : v524;
  const v526 = stdlib.tokenEq(v489, v493);
  const v527 = v526 ? false : true;
  const v528 = v525 ? v527 : false;
  stdlib.assert(v528, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:29:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:50:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)', 'at ./liquidityMigrator.transfer.rsh:38:15:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:38:19:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v488, v489, v493, v490, v491, v492, v494],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v532, v533, v534, v535, v536, v537, v538], secs: v540, time: v539, didSend: v146, from: v531 } = txn1;
      
      const v541 = v483[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0')];
      const v542 = stdlib.Array_set(v541, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v543 = stdlib.Array_set(v483, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'), v542);
      const v545 = v543[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1')];
      const v546 = stdlib.Array_set(v545, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v547 = stdlib.Array_set(v543, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1'), v546);
      const v551 = v547[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2')];
      const v552 = stdlib.Array_set(v551, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v553 = stdlib.Array_set(v547, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2'), v552);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v533
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v534
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v536
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v532, v533, v534, v535, v536, v537, v538], secs: v540, time: v539, didSend: v146, from: v531 } = txn1;
  const v541 = v483[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0')];
  const v542 = stdlib.Array_set(v541, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v543 = stdlib.Array_set(v483, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'), v542);
  const v545 = v543[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1')];
  const v546 = stdlib.Array_set(v545, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v547 = stdlib.Array_set(v543, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1'), v546);
  const v549 = stdlib.tokenEq(v534, v533);
  const v550 = v549 ? false : true;
  stdlib.assert(v550, {
    at: './liquidityMigrator.transfer.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v551 = v547[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2')];
  const v552 = stdlib.Array_set(v551, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v553 = stdlib.Array_set(v547, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2'), v552);
  const v555 = stdlib.tokenEq(v536, v533);
  const v557 = stdlib.tokenEq(v536, v534);
  const v558 = v557 ? false : true;
  const v559 = v555 ? false : v558;
  stdlib.assert(v559, {
    at: './liquidityMigrator.transfer.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  const v564 = stdlib.digest([ctc3], [v537]);
  const v565 = stdlib.digest([ctc3], [v538]);
  const v566 = stdlib.digestEq(v564, v565);
  const v567 = v566 ? false : true;
  stdlib.assert(v567, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:28:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:62:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v580 = stdlib.tokenEq(v533, v534);
  const v581 = v580 ? false : true;
  stdlib.assert(v581, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:29:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:62:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v531, v532, v533, v534, v536, v537, v538, v553],
    evt_cnt: 0,
    funcNum: 1,
    lct: v539,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0'), [[v532, v533]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v587, time: v586, didSend: v227, from: v585 } = txn2;
      
      ;
      const v588 = v553[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
      const v589 = v588[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
      const v590 = stdlib.add(v589, v532);
      const v594 = stdlib.Array_set(v588, '0', v590);
      const v595 = stdlib.Array_set(v553, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0'), v594);
      sim_r.txns.push({
        amt: v532,
        kind: 'to',
        tok: v533
        });
      const v599 = v595[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v600 = v599[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v604 = stdlib.sub(v600, v532);
      const v608 = stdlib.Array_set(v599, '0', v604);
      const v609 = stdlib.Array_set(v595, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0'), v608);
      const v610 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v611 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v537,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '2'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1'),
            toks: [v536, v533]
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v610 /* simTokensRecv */, ctc6.defaultValue /* simReturnVal */];})();
      const v612 = await txn2.getOutput('internal', 'v611', ctc7, v611);
      const v614 = v612[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v615 = v612[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1')];
      const v617 = v615[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v628 = v609[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '2')];
      const v629 = v628[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
      const v630 = stdlib.add(v629, v617);
      const v634 = stdlib.Array_set(v628, '0', v630);
      const v635 = stdlib.Array_set(v609, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '2'), v634);
      const v648 = v635[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '2')];
      const v649 = v648[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
      const v664 = stdlib.sub(v614, v614);
      const v675 = stdlib.sub(v649, v617);
      const v679 = stdlib.Array_set(v648, '0', v675);
      const v680 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '2'), v679);
      const v681 = [v532];
      const v682 = {
        A: v614,
        B: v617
        };
      const v683 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v538,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '2'),
            fees: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:72:16:application', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '2'),
            toks: [v534, v536]
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v681 /* simTokensRecv */, ctc0.defaultValue /* simReturnVal */];})();
      const v684 = await txn2.getOutput('internal', 'v683', ctc8, v683);
      const v686 = v684[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0')];
      const v687 = v684[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '1')];
      const v688 = v684[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '2')];
      const v689 = v687[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0')];
      const v694 = stdlib.add(v664, v686);
      const v698 = v680[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '1')];
      const v699 = v698[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0')];
      const v700 = stdlib.add(v699, v689);
      const v704 = stdlib.Array_set(v698, '0', v700);
      const v705 = stdlib.Array_set(v680, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '1'), v704);
      const v714 = v705[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:45:15:application', stdlib.UInt_max, '2')];
      const v715 = v714[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:45:15:application', stdlib.UInt_max, '0')];
      const v716 = v705[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
      const v717 = v716[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
      const v730 = stdlib.sub(v694, v694);
      sim_r.txns.push({
        kind: 'from',
        to: v531,
        tok: undefined /* Nothing */
        });
      const v738 = stdlib.sub(v715, v715);
      const v742 = stdlib.Array_set(v714, '0', v738);
      const v743 = stdlib.Array_set(v705, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '2'), v742);
      sim_r.txns.push({
        kind: 'from',
        to: v531,
        tok: v536
        });
      const v744 = v743[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0')];
      const v745 = v744[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0')];
      const v749 = stdlib.sub(v745, v717);
      const v753 = stdlib.Array_set(v744, '0', v749);
      const v754 = stdlib.Array_set(v743, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'), v753);
      sim_r.txns.push({
        kind: 'from',
        to: v531,
        tok: v533
        });
      const v755 = v754[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '1')];
      const v756 = v755[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v531,
        tok: v534
        });
      const v769 = (stdlib.le(await ctc.getBalance(), v730) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v730));
      sim_r.txns.push({
        kind: 'from',
        to: v531,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v536
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v534
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v533
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
    tys: [ctc9, ctc0, ctc1, ctc1, ctc1, ctc3, ctc3, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v587, time: v586, didSend: v227, from: v585 } = txn2;
  ;
  const v588 = v553[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
  const v589 = v588[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
  const v590 = stdlib.add(v589, v532);
  const v591 = stdlib.le(v590, stdlib.UInt_max);
  stdlib.assert(v591, {
    at: './liquidityMigrator.transfer.rsh:90:11:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v594 = stdlib.Array_set(v588, '0', v590);
  const v595 = stdlib.Array_set(v553, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0'), v594);
  ;
  const v596 = stdlib.addressEq(v531, v585);
  stdlib.assert(v596, {
    at: './liquidityMigrator.transfer.rsh:90:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v599 = v595[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v600 = v599[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v604 = stdlib.sub(v600, v532);
  const v605 = stdlib.ge(v604, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0'));
  stdlib.assert(v605, {
    at: './liquidityMigrator.shared.rsh:86:24:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v608 = stdlib.Array_set(v599, '0', v604);
  const v609 = stdlib.Array_set(v595, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0'), v608);
  const v610 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v611 = undefined /* Remote */;
  const v612 = await txn2.getOutput('internal', 'v611', ctc7, v611);
  const v614 = v612[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v615 = v612[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '1')];
  const v617 = v615[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v625 = stdlib.le(v614, stdlib.UInt_max);
  stdlib.assert(v625, {
    at: './liquidityMigrator.shared.rsh:86:24:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v628 = v609[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '2')];
  const v629 = v628[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '0')];
  const v630 = stdlib.add(v629, v617);
  const v631 = stdlib.le(v630, stdlib.UInt_max);
  stdlib.assert(v631, {
    at: './liquidityMigrator.shared.rsh:86:24:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v634 = stdlib.Array_set(v628, '0', v630);
  const v635 = stdlib.Array_set(v609, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:86:24:application', stdlib.UInt_max, '2'), v634);
  const v640 = stdlib.gt(v614, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:88:21:decimal', stdlib.UInt_max, '0'));
  const v641 = stdlib.gt(v617, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:88:28:decimal', stdlib.UInt_max, '0'));
  const v642 = v640 ? v641 : false;
  stdlib.assert(v642, {
    at: './liquidityMigrator.shared.rsh:88:12:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'Received invalid A or B amount',
    who: 'Admin'
    });
  const v648 = v635[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '2')];
  const v649 = v648[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
  const v650 = stdlib.eq(v617, v649);
  stdlib.assert(v650, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:72:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:101:16:application call to "confirmAmts" (defined at: ./liquidityMigrator.shared.rsh:67:55:function exp)'],
    msg: 'Invalid contract state',
    who: 'Admin'
    });
  const v664 = stdlib.sub(v614, v614);
  const v665 = stdlib.ge(v664, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0'));
  stdlib.assert(v665, {
    at: './liquidityMigrator.transfer.rsh:74:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v675 = stdlib.sub(v649, v617);
  const v676 = stdlib.ge(v675, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0'));
  stdlib.assert(v676, {
    at: './liquidityMigrator.transfer.rsh:74:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v679 = stdlib.Array_set(v648, '0', v675);
  const v680 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '2'), v679);
  const v681 = [v532];
  const v682 = {
    A: v614,
    B: v617
    };
  const v683 = undefined /* Remote */;
  const v684 = await txn2.getOutput('internal', 'v683', ctc8, v683);
  const v686 = v684[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0')];
  const v687 = v684[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '1')];
  const v688 = v684[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '2')];
  const v689 = v687[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0')];
  const v694 = stdlib.add(v664, v686);
  const v695 = stdlib.le(v694, stdlib.UInt_max);
  stdlib.assert(v695, {
    at: './liquidityMigrator.transfer.rsh:74:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v698 = v680[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '1')];
  const v699 = v698[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '0')];
  const v700 = stdlib.add(v699, v689);
  const v701 = stdlib.le(v700, stdlib.UInt_max);
  stdlib.assert(v701, {
    at: './liquidityMigrator.transfer.rsh:74:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v704 = stdlib.Array_set(v698, '0', v700);
  const v705 = stdlib.Array_set(v680, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:74:34:application', stdlib.UInt_max, '1'), v704);
  const v710 = stdlib.ge(v688, v532);
  stdlib.assert(v710, {
    at: './liquidityMigrator.transfer.rsh:76:16:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'LP change due to slippage',
    who: 'Admin'
    });
  const v712 = stdlib.gt(v688, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:106:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v712, {
    at: './liquidityMigrator.transfer.rsh:106:12:application',
    fs: [],
    msg: 'Possible slippage in new pool',
    who: 'Admin'
    });
  const v714 = v705[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:45:15:application', stdlib.UInt_max, '2')];
  const v715 = v714[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:45:15:application', stdlib.UInt_max, '0')];
  const v716 = v705[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
  const v717 = v716[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:46:15:application', stdlib.UInt_max, '0')];
  const v730 = stdlib.sub(v694, v694);
  const v731 = stdlib.ge(v730, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v731, {
    at: './liquidityMigrator.shared.rsh:47:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v738 = stdlib.sub(v715, v715);
  const v739 = stdlib.ge(v738, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v739, {
    at: './liquidityMigrator.shared.rsh:47:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v742 = stdlib.Array_set(v714, '0', v738);
  const v743 = stdlib.Array_set(v705, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '2'), v742);
  ;
  const v744 = v743[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0')];
  const v745 = v744[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0')];
  const v749 = stdlib.sub(v745, v717);
  const v750 = stdlib.ge(v749, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v750, {
    at: './liquidityMigrator.shared.rsh:47:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v753 = stdlib.Array_set(v744, '0', v749);
  const v754 = stdlib.Array_set(v743, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:47:10:application', stdlib.UInt_max, '0'), v753);
  ;
  const v755 = v754[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '1')];
  const v756 = v755[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '0')];
  const v762 = stdlib.sub(v756, v756);
  const v763 = stdlib.ge(v762, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:53:application', stdlib.UInt_max, '0'));
  stdlib.assert(v763, {
    at: './liquidityMigrator.shared.rsh:59:53:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v769 = (stdlib.le(await ctc.getBalance(), v730) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v730));
  const v770 = stdlib.safeAdd(v769, v730);
  const v774 = stdlib.sub(v770, v769);
  const v775 = stdlib.ge(v774, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v775, {
    at: './liquidityMigrator.shared.rsh:63:35:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  stdlib.protect(ctc2, await interact.done(v688, v682), {
    at: './liquidityMigrator.transfer.rsh:113:24:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:113:24:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:113:24:function exp)', 'at ./liquidityMigrator.transfer.rsh:113:24:application call to "liftedInteract" (defined at: ./liquidityMigrator.transfer.rsh:113:24:application)'],
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
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByALAAEECAb///////////8BEKCNBiAoBSYEAAEAAQEFYXBwSUQiNQAxGEEFkyhkSSJbNQFJJVs1AiEGWzUINhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEADpiMSRLEisgEhBLIQNAiyGLMjNAESRDQESSISTDQCEhFEKWQqZFBJNQNJSkpXACA1/yEIWzX+IQlbNf2BMFs1/IE4WzX7V1AzNfqABJqLkXSwNPpXABFJNfkiWzT+CEk1+CEFDkQ0+jT5NPgWXABcADX3NP40/YgFITT/MQASRDT3VwARSTX2Ils0/glJNfUiD0Q09zT2NPUWXABcADX0KzQDV0AIUAM18jIKeDXxMgpgNPEJFjIKNPtwAEgWUDXwsSKyATT+shIkshA08rIUNP2yEbYisgEhBLIQNAOBQFuyGIAEIDq+ZLIaNP4Wsho0/bIwNPuyMLMyCmA08Qk08CJbCRYyCjT7cABINPAlWwkWULcBPlcEAFA184AIAAAAAAAAAmM081CwNPNJNfIiWzXxNPIlWzXwNPEhBQ5ENPRXIhFJNe8iWzTwCEk17iEFDkQ09DTvNO4WXABcIjXtNPEiDTTwIg0QRDTtVyIRSTXsIls16zTwNOsSRDTxSQlJNeoiD0Q06zTwCUk16SIPRDTtNOw06RZcAFwiNegrNANXSAhQAzXmMgp4NeUyCmA05Qk08QkWMgo0/HAASBZQNeSxIrIBNPGyCCOyEDTmsge2IrIBNPCyEiSyEDTmshQ0+7IRtiKyASEEshA0A4FIW7IYgAQlWzngsho08RY08BZQsho0/hayGjT8sjA0+7IwNPyyMLMyCmA05Qk05CJbCRYyCjT8cABINOQlWwkWULcCPlcEAFA154AIAAAAAAAAAqs051CwNOdJNeYhBls15TTqNOYiWwhJNeQhBQ5ENOhXERFJNeMiWzTmJVsISTXiIQUORDToNOM04hZcAFwRNeE05TT+D0Q05SINRDThVyIRSTXgIls13zThVwARIls13jTkSQlJNd0iD0SxIrIBNOSyCCOyEDT/sgezNN9JCUk13CIPRDThNOA03BZcAFwiNduxIrIBNN+yEiSyEDT/shQ0+7IRszTbVwARSTXaIls03glJNdkiD0SxIrIBNN6yEiSyEDT/shQ0/bIRszTbNNo02RZcAFwAVxERIltJNdhJCSIPRLEisgE02LISJLIQNP+yFDT8shGzMgpgMgp4CTTdCUk11zTdCDTXCSIPRLEisgE017III7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0+7IRs7EisgEishIkshAyCbIVMgqyFDT8shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbNCAVVIgcCaDIgB07EisgEhBLIQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSSJbNf8lWzX+IQZbNf1IKDX8gRhbNfshCFs1+iEJWzX5gAT1D4vSNP8WUDT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQsIERr0k1+ElQNPhQSTX3SVcAESWvXABcAEk19klXERElr1wAXBE19TT9NP4TRDT1SVciESWvXABcIjX0NPs0/hM0+zT9ExBEIQeIAQ+xIrIBIrISJLIQMgqyFDT+shGzIQeIAPexIrIBIrISJLIQMgqyFDT9shGzIQeIAN+xIrIBIrISJLIQMgqyFDT7shGzNPoWATT5FgETRDT+NP0TRDEANP8WUDT+FlA0/RZQNPsWUDT6FlA0+RZQNPRQKUsBVwB/ZypLAVd/BGdIIzUBMgY1AkIALTEZIQoSRLEisgEhBLIQNAiyGCEKshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 131,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/liquidityMigrator.shared.rsh:86:24:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/liquidityMigrator.transfer.rsh:74:34:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"bool","name":"elem4","type":"bool"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"internalType":"struct T0","name":"v824","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"bool","name":"elem4","type":"bool"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T5","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v611","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"v0","type":"tuple"}],"name":"_reach_oe_v683","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v826","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f620024b738819003918201601f19168301916001600160401b038311848410176200070f57808492610100946040528339810103126200090e57604051906200004c8262000913565b8051825260208101516020830152620000686040820162000968565b60408301526200007b6060820162000968565b6060830152608081015180151581036200090e57620000c99160e0916080850152620000aa60a0820162000968565b60a0850152620000bd60c0820162000968565b60c08501520162000968565b60e08201524360035560405160208101906001600160401b038211818310176200070f57604091825260009052516001600160401b0360a08201908111908211176200070f5760a08101604052620001206200097d565b81526200012c6200099e565b60208201526200013b6200099e565b60408201526200014a6200099e565b6060820152620001596200099e565b608082015260ff60045416620008f5577ff618c3c49a5e4165f75598a956a6b41b16d5daf6bfdae0367cec6b2a06ddc0a7610120604051338152845160208201526020850151604082015260018060a01b03604086015116606082015260018060a01b0360608601511660808201526080850151151560a082015260018060a01b0360a08601511660c082015260018060a01b0360c08601511660e082015260018060a01b0360e086015116610100820152a181518015908115620008e8575b5015620008cf5760008151526000602082510152600060408251015280516020820151528051602080830151015280516040602083015101526020810151805160406020820151910151151560405191620002748362000930565b60008352602083015260408201526200028c6200099e565b9160005b60038110620008955750508152806040830152602081015160406020820151910151151560405191620002c38362000930565b6000835260208301526040820152620002db6200099e565b9160005b600381106200085b575050602082015260608281019190915282015160408301516001600160a01b03908116911603620008535760005b156200083a576060810151604081015160406020820151910151151560405191620003418362000930565b6000835260208301526040820152620003596200099e565b9160005b60038110620007ea5750506040820152608082015260018060a01b0360a08301511660018060a01b036040840151168114600014620007c6575060005b15620007ad5734620007945760018060a01b0360c0830151166040516020810191825260208152620003cc816200094c565b51902060018060a01b0360e0840151166040516020810191825260208152620003f5816200094c565b519020036200078c5760005b156200077357604082015160608301516001600160a01b039081169116036200076b5760005b156200075257608090604051926200043f8462000913565b60008452600060208501526000604085015260006060850152600083850152600060a0850152600060c0850152620004766200099e565b60e08501523384526020810151602085015260018060a01b03604082015116604085015260018060a01b03606082015116606085015260018060a01b0360a0820151168385015260018060a01b0360c08201511660a085015260e060018060a01b039101511660c0840152015160e082015260016000554360015560e0604051913360208401526020810151604084015260018060a01b03604082015116606084015260018060a01b03606082015116608084015260018060a01b0360808201511660a084015260018060a01b0360a08201511660c084015260018060a01b0360c08201511682840152015161010082016000905b60038210620007255761020084528361022081016001600160401b038111828210176200070f5760405280516001600160401b0381116200070f57600254600181811c9116801562000704575b6020821014620006ee57601f811162000684575b50602091601f82116001146200061a579181926000926200060e575b50508160011b916000199060031b1c1916176002555b604051611ab89081620009ff8239f35b015190508280620005e8565b601f19821692600260005260206000209160005b8581106200066b5750836001951062000651575b505050811b01600255620005fe565b015160001960f88460031b161c1916905582808062000642565b919260206001819286850151815501940192016200062e565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620006e3575b601f0160051c01905b818110620006d65750620005cc565b60008155600101620006c7565b9091508190620006be565b634e487b7160e01b600052602260045260246000fd5b90607f1690620005b8565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200056b565b60405163100960cb60e01b8152600d6004820152602490fd5b600162000427565b60405163100960cb60e01b8152600c6004820152602490fd5b600162000401565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60608301516001600160a01b031603620007e25760006200039a565b60016200039a565b620007f68183620009d6565b51620008038286620009d6565b52620008108185620009d6565b50600019811462000824576001016200035d565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260096004820152602490fd5b600162000316565b620008678183620009d6565b51620008748286620009d6565b52620008818185620009d6565b5060001981146200082457600101620002df565b620008a18183620009d6565b51620008ae8286620009d6565b52620008bb8185620009d6565b506000198114620008245760010162000290565b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000219565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b61010081019081106001600160401b038211176200070f57604052565b606081019081106001600160401b038211176200070f57604052565b604081019081106001600160401b038211176200070f57604052565b51906001600160a01b03821682036200090e57565b604051906200098c8262000930565b60006040838281528260208201520152565b60405190620009ad8262000930565b8160005b60608110620009be575050565b602090620009cb6200097d565b8184015201620009b1565b906003811015620009e85760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f114610b14578063573b85101461005f57806383230757146100565763ab53f2c60361000e57610051610b50565b61000e565b50610051610b31565b6020366003190112610b0f57600060405161007981610c16565b5260405161008681610c16565b6004358152610093610e45565b6100ae6100a96100a560045460ff1690565b1590565b6112e4565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a16100ee600160005414611304565b61011d61010b6100fc610c97565b60208082518301019101611046565b92518015908115610b03575b50611324565b6101273415611344565b61016f60e0830151515160208401510180835260e084015161016a815160406020820151910151151590610159610d42565b948552602085015215156040840152565b61196e565b60208201526101986101936101876040850151610f9d565b602085015190336117df565b611364565b6101b43360018060a01b036101ad8551610f9d565b1614611384565b6101e76020820151805151602085015190039081604085015261016a815160406020820151910151151590610159610d42565b6060820152600060808201515261023061022b6102076040850151610f9d565b61021460a0860151610f9d565b6020860151916001600160a01b03909116906118d8565b6113a4565b6102476102406080840151610f9d565b309061191f565b6103208201526102633061025e6040850151610f9d565b61191f565b602083015190036103408201527f5763ef3d234a729dedf4cd954c592b302186337ac1789f01b42b77a5995ba4db6104246102a53061025e6060870151610f9d565b610380840190815261040b479161030086019283526102cc600160ff196004541617600455565b6103966000808960208101518261032361031e60a060405195610317876103096020820198630c8083fb60e21b8a52602483019190602083019252565b03601f198101895288610c74565b0151610f9d565b610f9d565b9251925af19161033b610334611125565b8094611562565b5061034b60ff1960045416600455565b61037461035f3061025e60408d0151610f9d565b6103408a01518082036103608c0152146113c4565b6103853061025e60608c0151610f9d565b90518082036103a08a0152146113e4565b6103b66103aa3061025e60808b0151610f9d565b610320880151906112cc565b9260a0870193602085510151526103f46103ee6103d660408b0151610f9d565b6103e661031e60a08d0151610f9d565b9030906116b2565b15611404565b479051900383515260208082518301019101611172565b604082510152518060c08501526040519182918261119a565b0390a161046760608201516040810190610462825151602060c087015101515101928360e08701525160406020820151910151151590610159610d42565b6119cb565b61010082015260c0810151805115610af8576020610489910151511515611424565b60c081015160200151516101008201516040015151146104a890611444565b6101208101600090526101008101516040810180515160c084015160200151519003908161014085015251602081015190604001511515906104e8610d42565b928352602083015215156040820152610500916119cb565b61016082015260208201516101808201515260c0810151516101a082019081515260c08201516020015151815160200152606083015161053f90610f9d565b9060c0840191825161055090610f9d565b61055990610f9d565b6105629161185f565b61056b90611464565b608084015161057990610f9d565b825161058490610f9d565b60c085015160200151516105a39290916001600160a01b0316906118d8565b6105ac90611484565b3060608501516105bb90610f9d565b906105c59161191f565b906103e084019182523060408601516105dd90610f9d565b906105e79161191f565b9161040085019283523060808701516105ff90610f9d565b906106099161191f565b60c08601516020810151519091036104408701908152905147036103c087019081526004805460ff191660011790559251602088810151604051633402da1360e01b92810192835292839161066191602484016111cc565b03601f19810183526106739083610c74565b865161067e90610f9d565b61068790610f9d565b9060c0890151519251905a93600094938594f1936106a3611125565b94856106ae91611592565b506106be60ff1960045416600455565b3060408901516106cd90610f9d565b906106d79161191f565b90518082036104208901526106ec91146114a4565b3060808801516106fb90610f9d565b906107059161191f565b905180820361046088015261071a91146114c4565b30606087015161072990610f9d565b906107339161191f565b905161073e916112cc565b926101c085019384516020015152606086015161075a90610f9d565b815161076590610f9d565b61076e90610f9d565b30610778926116b2565b15610782906114e4565b608086015161079090610f9d565b905161079b90610f9d565b6107a490610f9d565b306107ae926116b2565b156107b890611504565b47905190038251528051810160200190602001906107d5916111ef565b81516040015251806101e083015260405161080d81928291909160408060608301948051845260208101515160208501520151910152565b037f06638249833d4ad1f9f1ca503cb5f17338d4701a0cb61dc8452e72bb248f832891a16101208101516101e082015190815101610200830152610160820151906020820190815151906020015151019081610220850152516020810151906040015115159061087b610d42565b92835260208301521515604082015261089391611a2b565b61024082019081526101e082015160400151602084015111156108b590611522565b6101e08201516040015115156108ca90611542565b6102608201916000835283516108df90610f9d565b6108e890610f9d565b90610200810151916000831596610a8660009897610a688a99988a808080809d9c610a8d9b61031e9b839f610aef575bf115610ae2575b61095c81518a6102808b0152604081015190610462604060208401519301511515610948610d42565b938e85526020850152604084019015159052565b906102a0890191825261099d6109756080880151610f9d565b61097f8851610f9d565b9061098b845160400190565b5151916001600160a01b03169061173d565b6109df825151519151918251519003916102c08b019283526109c26040890151610f9d565b6109cc8951610f9d565b915151916001600160a01b03169061173d565b610a01825182519061016a815160406020820151910151151590610159610d42565b50610a24825182519061016a815160406020820151910151151590610159610d42565b5061098b610a62610a386060890151610f9d565b92610a438951610f9d565b945190519061016a815160406020820151910151151590610159610d42565b60200190565b5147818082108914610ad75750506102e087965b01958087526112aa565b5051610f9d565b905190828215610ace575bf115610ac1575b60008055610aad6000600155565b610ab5611222565b60405160008152602090f35b610ac96111fe565b610a9f565b506108fc610a98565b6102e0910396610a7c565b610aea6111fe565b61091f565b506108fc610918565b506104896000611424565b90506001541484610117565b600080fd5b34610b0f576000366003190112610b0f5760035460805260206080f35b5034610b0f576000366003190112610b0f576020600154604051908152f35b5034610b0f57600080600319360112610bc2578054610b6d610c97565b906040519283918252602090604082840152835191826040850152815b838110610bab57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b8a565b80fd5b90600182811c92168015610bf5575b6020831014610bdf57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610bd4565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117610c3157604052565b610c39610bff565b604052565b606081019081106001600160401b03821117610c3157604052565b604081019081106001600160401b03821117610c3157604052565b601f909101601f19168101906001600160401b03821190821017610c3157604052565b6040519060008260025491610cab83610bc5565b808352600193808516908115610d215750600114610cd3575b50610cd192500383610c74565b565b60026000908152600080516020611a8c83398151915294602093509091905b818310610d09575050610cd1935082010138610cc4565b85548884018501529485019487945091830191610cf2565b9050610cd194506020925060ff191682840152151560051b82010138610cc4565b60405190610cd182610c3e565b6040519061048082016001600160401b03811183821017610c3157604052565b60405190610d7c82610c16565b60008252565b6040908151610d9081610c3e565b8092600091825b60608110610da55750505050565b6020908351610db381610c3e565b858152858382015285858201528184015201610d97565b60405190610dd782610c59565b60006020838281520152565b60405190610df082610c3e565b8160008152604051610e0181610c16565b6000815260208201526040610e14610dca565b910152565b60405190610e2682610c3e565b60006040838281528151610e3981610c16565b83815260208201520152565b610e4d610d4f565b906000808352610e5b610d82565b6020840152806040840152610e6e610d82565b6060840152610e7b610d6f565b6080840152610e88610de3565b60a0840152610e95610de3565b60c08401528060e0840152610ea8610d82565b6101008401528061012084015280610140840152610ec4610d82565b610160840152610ed2610d6f565b610180840152610ee0610dca565b6101a0840152610eee610e19565b6101c0840152610efc610e19565b6101e08401528061020084015280610220840152610f18610d82565b6102408401528061026084015280610280840152610f34610d82565b6102a0840152806102c0840152806102e08401528061030084015280610320840152806103408401528061036084015280610380840152806103a0840152806103c0840152806103e0840152806104008401528061042084015280610440840152610460830152565b6001600160a01b031690565b51906001600160a01b0382168203610b0f57565b51908115158203610b0f57565b9080601f83011215610b0f57604091825192610fe584610c3e565b8392610120830192818411610b0f57935b83851061100557505050505090565b606085830312610b0f57825160609161101d82610c3e565b865182526020918288015183820152611037868901610fbd565b86820152815201940193610ff6565b9061020082820312610b0f57604051916110e9919060e09061010085016001600160401b038111868210176110f1575b60405261108281610fa9565b85526020810151602086015261109a60408201610fa9565b60408601526110ab60608201610fa9565b60608601526110bc60808201610fa9565b60808601526110cd60a08201610fa9565b60a08601526110de60c08201610fa9565b60c086015201610fca565b60e082015290565b6110f9610bff565b611076565b90600381101561110f5760051b0190565b634e487b7160e01b600052603260045260246000fd5b3d1561116d573d906001600160401b038211611160575b60405191611154601f8201601f191660200184610c74565b82523d6000602084013e565b611168610bff565b61113c565b606090565b90816040910312610b0f5760206040519161118c83610c59565b805183520151602082015290565b610cd1909291926040806080830195805184526020810151516020850152015191019060208091805184520151910152565b604090939291936111eb81606081019660208091805184520151910152565b0152565b90816020910312610b0f575190565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b61122d600254610bc5565b806112355750565b601f811160011461124857506000600255565b6002600090815290600190601f0160051c600080516020611a8c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b8181106112a057505050602081208160025555565b838155820161128b565b91908201918281116112bf575b8210610b0f57565b6112c761120b565b6112b7565b9081039081116112d95790565b6112e161120b565b90565b156112eb57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561130b57565b60405163100960cb60e01b8152600f6004820152602490fd5b1561132b57565b60405163100960cb60e01b815260106004820152602490fd5b1561134b57565b60405163100960cb60e01b815260116004820152602490fd5b1561136b57565b60405163100960cb60e01b815260136004820152602490fd5b1561138b57565b60405163100960cb60e01b815260146004820152602490fd5b156113ab57565b60405163100960cb60e01b815260166004820152602490fd5b156113cb57565b60405163100960cb60e01b815260186004820152602490fd5b156113eb57565b60405163100960cb60e01b815260196004820152602490fd5b1561140b57565b60405163100960cb60e01b815260176004820152602490fd5b1561142b57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561144b57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561146b57565b60405163100960cb60e01b815260216004820152602490fd5b1561148b57565b60405163100960cb60e01b815260226004820152602490fd5b156114ab57565b60405163100960cb60e01b815260256004820152602490fd5b156114cb57565b60405163100960cb60e01b815260266004820152602490fd5b156114eb57565b60405163100960cb60e01b815260236004820152602490fd5b1561150b57565b602460405163100960cb60e01b8152816004820152fd5b1561152957565b60405163100960cb60e01b8152602a6004820152602490fd5b1561154957565b60405163100960cb60e01b8152602b6004820152602490fd5b1561156a5790565b80511561157957805190602001fd5b60405163100960cb60e01b8152601a6004820152602490fd5b1561159a5790565b8051156115a957805190602001fd5b60405163100960cb60e01b815260276004820152602490fd5b156115ca5790565b8051156115d957805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b156115fa5790565b80511561160957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561162a5790565b80511561163957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b1561165a5790565b80511561166957805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b1561168a5790565b80511561169957805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b604051636eb1769f60e11b602082019081526001600160a01b03938416602483015293831660448083019190915281526112e193600093849392849190608081016001600160401b03811182821017611730575b6040525193165af1611720611719611125565b80926115c2565b50602080825183010191016111ef565b611738610bff565b611706565b6000919082918261176c61177a6117a997604051928391602083019663a9059cbb60e01b8852602484016117b0565b03601f198101835282610c74565b51926001600160a01b03165af1611799611792611125565b80926115f2565b50602080825183010191016117cb565b15610b0f57565b6001600160a01b039091168152602081019190915260400190565b90816020910312610b0f576112e190610fbd565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526064808301959095529381526112e1936000938493909284919060a081016001600160401b03811182821017611852575b6040525193165af161179961184b611125565b8092611622565b61185a610bff565b611838565b60405163095ea7b360e01b602082019081526001600160a01b0393841660248301526000604480840182905283526112e194909384939092918491608081016001600160401b038111828210176118cb575b6040525193165af16117996118c4611125565b8092611652565b6118d3610bff565b6118b1565b6000919082918261176c6119076112e197604051928391602083019663095ea7b360e01b8852602484016117b0565b51926001600160a01b03165af16117996118c4611125565b600080916112e193826040519160208301926370a0823160e01b845260018060a01b0380921660248201526024815261195781610c3e565b5193165af1611720611967611125565b8092611682565b9190611978610d82565b9260005b6003811061198a5750508252565b80611997600192846110fe565b516119a282886110fe565b526119ad81876110fe565b5060001981146119be575b0161197c565b6119c661120b565b6119b8565b91906119d5610d82565b9260005b600381106119ea5750506040830152565b806119f7600192846110fe565b51611a0282886110fe565b52611a0d81876110fe565b506000198114611a1e575b016119d9565b611a2661120b565b611a18565b9190611a35610d82565b9260005b60038110611a4a5750506020830152565b80611a57600192846110fe565b51611a6282886110fe565b52611a6d81876110fe565b506000198114611a7e575b01611a39565b611a8661120b565b611a7856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 9399,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './liquidityMigrator.transfer.rsh:63:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './liquidityMigrator.transfer.rsh:114:13:after expr stmt semicolon',
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
