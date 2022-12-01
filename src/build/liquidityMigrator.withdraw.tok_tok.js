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
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc3, ctc6]
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
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Struct([['oldLPAmt', ctc0], ['oldlpToken', ctc1], ['tokA', ctc1], ['tokB', ctc1], ['oldPoolId', ctc2]]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc5]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v957 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v958 = [v957, v957, v957];
  const v962 = stdlib.protect(ctc3, interact.opts, 'for Admin\'s interact field opts');
  const v963 = v962.oldLPAmt;
  const v964 = v962.oldlpToken;
  const v965 = v962.tokA;
  const v966 = v962.tokB;
  const v967 = v962.oldPoolId;
  
  const v976 = stdlib.gt(v963, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:25:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v976, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:25:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:34:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)', 'at ./liquidityMigrator.withdraw.rsh:30:15:application call to [unknown function] (defined at: ./liquidityMigrator.withdraw.rsh:30:19:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'Admin'
    });
  const v981 = stdlib.tokenEq(v965, v966);
  const v983 = stdlib.tokenEq(v965, v964);
  const v984 = v983 ? false : true;
  const v985 = v981 ? false : v984;
  const v986 = stdlib.tokenEq(v966, v964);
  const v987 = v986 ? false : true;
  const v988 = v985 ? v987 : false;
  stdlib.assert(v988, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:27:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.withdraw.rsh:34:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)', 'at ./liquidityMigrator.withdraw.rsh:30:15:application call to [unknown function] (defined at: ./liquidityMigrator.withdraw.rsh:30:19:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v963, v964, v965, v966, v967],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v991, v992, v993, v994, v995], secs: v997, time: v996, didSend: v671, from: v990 } = txn1;
      
      const v998 = v958[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0')];
      const v999 = stdlib.Array_set(v998, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
      const v1000 = stdlib.Array_set(v958, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'), v999);
      const v1002 = v1000[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1')];
      const v1003 = stdlib.Array_set(v1002, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
      const v1004 = stdlib.Array_set(v1000, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1'), v1003);
      const v1008 = v1004[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '2')];
      const v1009 = stdlib.Array_set(v1008, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
      const v1010 = stdlib.Array_set(v1004, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '2'), v1009);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v992
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v993
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v994
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v991, v992, v993, v994, v995], secs: v997, time: v996, didSend: v671, from: v990 } = txn1;
  const v998 = v958[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0')];
  const v999 = stdlib.Array_set(v998, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
  const v1000 = stdlib.Array_set(v958, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'), v999);
  const v1002 = v1000[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1')];
  const v1003 = stdlib.Array_set(v1002, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
  const v1004 = stdlib.Array_set(v1000, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '1'), v1003);
  const v1006 = stdlib.tokenEq(v993, v992);
  const v1007 = v1006 ? false : true;
  stdlib.assert(v1007, {
    at: './liquidityMigrator.withdraw.rsh:37:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v1008 = v1004[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '2')];
  const v1009 = stdlib.Array_set(v1008, '0', stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '0'));
  const v1010 = stdlib.Array_set(v1004, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:37:11:dot', stdlib.UInt_max, '2'), v1009);
  const v1012 = stdlib.tokenEq(v994, v992);
  const v1013 = v1012 ? false : true;
  const v1014 = stdlib.tokenEq(v994, v993);
  const v1015 = v1014 ? false : true;
  const v1016 = v1012 ? false : v1015;
  stdlib.assert(v1016, {
    at: './liquidityMigrator.withdraw.rsh:37:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  const v1018 = stdlib.gt(v991, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:25:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1018, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:25:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:38:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'Admin'
    });
  const v1023 = stdlib.tokenEq(v993, v994);
  const v1030 = v1023 ? false : v1013;
  stdlib.assert(v1030, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:27:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.withdraw.rsh:38:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.withdraw.rsh:24:69:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v990, v991, v992, v993, v994, v995, v1010],
    evt_cnt: 0,
    funcNum: 1,
    lct: v996,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0'), [[v991, v992]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1034, time: v1033, didSend: v742, from: v1032 } = txn2;
      
      ;
      const v1035 = v1010[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
      const v1036 = v1035[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
      const v1037 = stdlib.add(v1036, v991);
      const v1041 = stdlib.Array_set(v1035, '0', v1037);
      const v1042 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0'), v1041);
      sim_r.txns.push({
        amt: v991,
        kind: 'to',
        tok: v992
        });
      const v1046 = v1042[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1047 = v1046[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1051 = stdlib.sub(v1047, v991);
      const v1055 = stdlib.Array_set(v1046, '0', v1051);
      const v1056 = stdlib.Array_set(v1042, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0'), v1055);
      const v1057 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1058 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v995,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '3'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1'),
            toks: [v993, v994, v992]
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v1057 /* simTokensRecv */, ctc5.defaultValue /* simReturnVal */];})();
      const v1059 = await txn2.getOutput('internal', 'v1058', ctc6, v1058);
      const v1061 = v1059[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1062 = v1059[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
      const v1064 = v1062[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1065 = v1062[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
      const v1076 = v1056[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
      const v1077 = v1076[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1078 = stdlib.add(v1077, v1064);
      const v1082 = stdlib.Array_set(v1076, '0', v1078);
      const v1083 = stdlib.Array_set(v1056, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1'), v1082);
      const v1085 = v1083[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2')];
      const v1086 = v1085[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1087 = stdlib.add(v1086, v1065);
      const v1091 = stdlib.Array_set(v1085, '0', v1087);
      const v1092 = stdlib.Array_set(v1083, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2'), v1091);
      const v1104 = v1092[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '1')];
      const v1105 = v1104[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '0')];
      const v1108 = v1092[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '2')];
      const v1109 = v1108[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
      const v1117 = v1092[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
      const v1118 = v1117[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
      const v1140 = stdlib.sub(v1061, v1061);
      sim_r.txns.push({
        kind: 'from',
        to: v990,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v990,
        tok: v993
        });
      sim_r.txns.push({
        kind: 'from',
        to: v990,
        tok: v994
        });
      sim_r.txns.push({
        kind: 'from',
        to: v990,
        tok: v992
        });
      const v1177 = (stdlib.le(await ctc.getBalance(), v1140) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1140));
      sim_r.txns.push({
        kind: 'from',
        to: v990,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v994
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v993
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v992
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
    tys: [ctc8, ctc0, ctc1, ctc1, ctc1, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1034, time: v1033, didSend: v742, from: v1032 } = txn2;
  ;
  const v1035 = v1010[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
  const v1036 = v1035[stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0')];
  const v1037 = stdlib.add(v1036, v991);
  const v1038 = stdlib.le(v1037, stdlib.UInt_max);
  stdlib.assert(v1038, {
    at: './liquidityMigrator.withdraw.rsh:42:11:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1041 = stdlib.Array_set(v1035, '0', v1037);
  const v1042 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./liquidityMigrator.withdraw.rsh:42:11:dot', stdlib.UInt_max, '0'), v1041);
  ;
  const v1043 = stdlib.addressEq(v990, v1032);
  stdlib.assert(v1043, {
    at: './liquidityMigrator.withdraw.rsh:42:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v1046 = v1042[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1047 = v1046[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1051 = stdlib.sub(v1047, v991);
  const v1052 = stdlib.ge(v1051, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1052, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1055 = stdlib.Array_set(v1046, '0', v1051);
  const v1056 = stdlib.Array_set(v1042, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0'), v1055);
  const v1057 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1058 = undefined /* Remote */;
  const v1059 = await txn2.getOutput('internal', 'v1058', ctc6, v1058);
  const v1061 = v1059[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1062 = v1059[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
  const v1064 = v1062[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1065 = v1062[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
  const v1073 = stdlib.le(v1061, stdlib.UInt_max);
  stdlib.assert(v1073, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1076 = v1056[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
  const v1077 = v1076[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1078 = stdlib.add(v1077, v1064);
  const v1079 = stdlib.le(v1078, stdlib.UInt_max);
  stdlib.assert(v1079, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1082 = stdlib.Array_set(v1076, '0', v1078);
  const v1083 = stdlib.Array_set(v1056, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1'), v1082);
  const v1085 = v1083[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2')];
  const v1086 = v1085[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1087 = stdlib.add(v1086, v1065);
  const v1088 = stdlib.le(v1087, stdlib.UInt_max);
  stdlib.assert(v1088, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1091 = stdlib.Array_set(v1085, '0', v1087);
  const v1092 = stdlib.Array_set(v1083, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2'), v1091);
  const v1098 = stdlib.eq(v1061, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:95:20:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1098, {
    at: './liquidityMigrator.shared.rsh:95:12:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'Received unexpected tokens',
    who: 'Admin'
    });
  const v1099 = stdlib.gt(v1064, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:96:21:decimal', stdlib.UInt_max, '0'));
  const v1100 = stdlib.gt(v1065, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:96:28:decimal', stdlib.UInt_max, '0'));
  const v1101 = v1099 ? v1100 : false;
  stdlib.assert(v1101, {
    at: './liquidityMigrator.shared.rsh:96:12:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:45:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'Received invalid A or B amount',
    who: 'Admin'
    });
  const v1104 = v1092[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '1')];
  const v1105 = v1104[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '0')];
  const v1106 = stdlib.eq(v1064, v1105);
  stdlib.assert(v1106, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:53:16:application call to "confirmAmts" (defined at: ./liquidityMigrator.shared.rsh:67:55:function exp)'],
    msg: 'Invalid contract state',
    who: 'Admin'
    });
  const v1108 = v1092[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '2')];
  const v1109 = v1108[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
  const v1110 = stdlib.eq(v1065, v1109);
  stdlib.assert(v1110, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:72:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.withdraw.rsh:53:16:application call to "confirmAmts" (defined at: ./liquidityMigrator.shared.rsh:67:55:function exp)'],
    msg: 'Invalid contract state',
    who: 'Admin'
    });
  const v1117 = v1092[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
  const v1118 = v1117[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
  const v1140 = stdlib.sub(v1061, v1061);
  const v1141 = stdlib.ge(v1140, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1141, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1148 = stdlib.sub(v1105, v1105);
  const v1149 = stdlib.ge(v1148, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1149, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1152 = stdlib.Array_set(v1104, '0', v1148);
  const v1153 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '1'), v1152);
  ;
  const v1154 = v1153[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '2')];
  const v1155 = v1154[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
  const v1159 = stdlib.sub(v1155, v1109);
  const v1160 = stdlib.ge(v1159, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1160, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1163 = stdlib.Array_set(v1154, '0', v1159);
  const v1164 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '2'), v1163);
  ;
  const v1165 = v1164[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
  const v1166 = v1165[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
  const v1170 = stdlib.sub(v1166, v1118);
  const v1171 = stdlib.ge(v1170, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1171, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1177 = (stdlib.le(await ctc.getBalance(), v1140) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1140));
  const v1178 = stdlib.safeAdd(v1177, v1140);
  const v1182 = stdlib.sub(v1178, v1177);
  const v1183 = stdlib.ge(v1182, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1183, {
    at: './liquidityMigrator.shared.rsh:63:35:application',
    fs: ['at ./liquidityMigrator.withdraw.rsh:57:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1187 = {
    A: v1064,
    B: v1065
    };
  stdlib.protect(ctc7, await interact.done(v1187), {
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
  appApproval: `ByAIAAEECP///////////wGgjQYgECYCAAEAIjUAMRhBBHEoZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAtkjEkQjNAESRDQESSISTDQCEhFEKWRJNQNJSkpXACA1/yEGWzX+gShbNf2BMFs1/IE4WzX7V0gzNfqABJqLkXSwNPpXABFJNfkiWzT+CEk1+CEEDkQ0+jT5NPgWXABcADX3NP40/YgEEjT/MQASRDT3VwARSTX2Ils0/glJNfUiD0Q09zT2NPUWXABcADX0gAVhcHBJRDQDV0AIUAM18jIKeDXxMgpgNPEJFjIKNPxwAEgWUDIKNPtwAEgWUDXwsSKyATT+shIkshA08rIUNP2yEbYisgGBBrIQNAOBQFuyGIAEpmXAlLIaNP4Wsho0/bIwNPyyMDT7sjCzMgpgNPEJNPAiWwkWMgo0/HAASDTwJVsJFlAyCjT7cABINPAhB1sJFlC3AT5XBABQNfOACAAAAAAAAAQiNPNQsDTzSTXyIls18TTyVwgQSTXwIls17zTwJVs17jTxIQQORDT0VxERSTXtIls07whJNewhBA5ENPQ07TTsFlwAXBFJNetXIhFJNeoiWzTuCEk16SEEDkQ06zTqNOkWXABcIjXoNPEiEkQ07yINNO4iDRBENOhXERFJNeciWzXmNO805hJENOhXIhEiWzXlNO405RJENOhXABEiWzXkNPFJCUk14yIPRLEisgE08bIII7IQNP+yB7M05kkJSTXiIg9ENOg05zTiFlwAXBE14bEisgE05rISJLIQNP+yFDT8shGzNOFXIhFJNeAiWzTlCUk13yIPRLEisgE05bISJLIQNP+yFDT7shGzNOE04DTfFlwAXCJXABEiWzTkCSIPRLEisgE05LISJLIQNP+yFDT9shGzMgpgMgp4CTTjCUk13jTjCDTeCSIPRLEisgE03rIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0+7IRs7EisgEishIkshAyCbIVMgqyFDT8shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbNCARtIIQWIAYMiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yVbNf4hB1s1/YEYWzX8IQZbNfuABE1+Byc0/xZQNP4WUDT9FlA0/BZQNPsWULCBEa9JNfpJUDT6UEk1+UlXABElr1wAXABJNfhJVxERJa9cAFwRNfc0/TT+E0Q090lXIhElr1wAXCI19jT8NP4SSTX1FDT8NP0TEEQhBYgA67EisgEishIkshAyCrIUNP6yEbMhBYgA07EisgEishIkshAyCrIUNP2yEbMhBYgAu7EisgEishIkshAyCrIUNPyyEbM0/yINRDT9NPwTNPUUEEQxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPZQKUsBVwB7Z0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 123,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/liquidityMigrator.shared.rsh:93:30:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T0","name":"v1237","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T5","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"v0","type":"tuple"}],"name":"_reach_oe_v1058","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1239","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62001deb38819003918201601f19168301916001600160401b03831184841017620006315780849260c09460405283398101031262000844576200009f60a060405192620000518462000849565b80518452602081015160208501526200006d6040820162000881565b6040850152620000806060820162000881565b6060850152620000936080820162000881565b60808501520162000881565b60a08201524360035560405160208101906001600160401b0382118183101762000631576000916040525260405190620000d98262000849565b620000e362000896565b8252620000ef620008b7565b6020830152620000fe620008b7565b60408301526200010d620008b7565b60608301526200011c620008b7565b6080830152600060a083015260ff600454166200082b577f3f2a95b1341ebec90b87aa69ecd458d60620417f3011f0cc901c502d8150690360e0604051338152835160208201526020840151604082015260018060a01b03604085015116606082015260018060a01b03606085015116608082015260018060a01b0360808501511660a082015260018060a01b0360a08501511660c0820152a1805180159081156200081e575b50156200080557600082515260006020835101526000604083510152815160208301515281516020808401510152815160406020840151015260208201518051604060208201519101511515604051916200021e8362000865565b600083526020830152604082015262000236620008b7565b9160005b60038110620007cb57505081528060408401526020810151604060208201519101511515604051916200026d8362000865565b600083526020830152604082015262000285620008b7565b9160005b6003811062000791575050602082015260608381019190915281015160408201516001600160a01b03908116911603620007895760005b1562000770576060820151604081015160406020820151910151151560405191620002eb8362000865565b600083526020830152604082015262000303620008b7565b9160005b60038110620007205750506040820152608083015260018060a01b0360808201511660018060a01b03604083015116148060a0840152600014620006f35760005b15620006da5734620006c157602081015115620006a857606081015160808201516001600160a01b039081169116036200068d5760005b156200067457604051916001600160401b0360e0840190811190841117620006315760809160e0840160405260008452600060208501526000604085015260006060850152600083850152600060a0850152620003db620008b7565b60c0858101918252338087526020848101518189019081526040808701516001600160a01b03908116828c019081526060808a01518316818e019081528c8b015184168d8f015260a09a8b015184168b8f019081529b909c0151895260016000818155439091558451968701979097529351928501929092529051811691830191909152965187166080828101919091529097015186169387019390935292519093169184019190915290519060e083015b6003821062000647576101e084528361020081016001600160401b03811182821017620006315760405280516001600160401b0381116200063157600254600181811c9116801562000626575b60208210146200061057601f8111620005a6575b50602091601f82116001146200053c5791819260009262000530575b50508160011b916000199060031b1c1916176002555b6040516114d39081620009188239f35b0151905082806200050a565b601f19821692600260005260206000209160005b8581106200058d5750836001951062000573575b505050811b0160025562000520565b015160001960f88460031b161c1916905582808062000564565b9192602060018192868501518155019401920162000550565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000605575b601f0160051c01905b818110620005f85750620004ee565b60008155600101620005e9565b9091508190620005e0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004da565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200048d565b60405163100960cb60e01b8152600d6004820152602490fd5b60a082015115620006a05760006200037f565b60016200037f565b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b608081015160608201516001600160a01b039081169116036200071857600062000348565b600162000348565b6200072c8183620008ef565b51620007398286620008ef565b52620007468185620008ef565b5060001981146200075a5760010162000307565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260096004820152602490fd5b6001620002c0565b6200079d8183620008ef565b51620007aa8286620008ef565b52620007b78185620008ef565b5060001981146200075a5760010162000289565b620007d78183620008ef565b51620007e48286620008ef565b52620007f18185620008ef565b5060001981146200075a576001016200023a565b60405163100960cb60e01b815260086004820152602490fd5b90506001541438620001c3565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60c081019081106001600160401b038211176200063157604052565b606081019081106001600160401b038211176200063157604052565b51906001600160a01b03821682036200084457565b60405190620008a58262000865565b60006040838281528260208201520152565b60405190620008c68262000865565b8160005b60608110620008d7575050565b602090620008e462000896565b8184015201620008ca565b906003811015620009015760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146107bb578063573b85101461005f57806383230757146100565763ab53f2c60361000e576100516107f7565b61000e565b506100516107d8565b60203660031901126107b6576000604051610079816108bd565b52604051610086816108bd565b6004358152610093610ac0565b906100af6100aa6100a660045460ff1690565b1590565b610e70565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a16100ef600160005414610e90565b61011e61010c6100fd610959565b60208082518301019101610bb9565b915180159081156107aa575b50610eb0565b6101283415610ed0565b60c0810180515151906020830191825101908185525190815160208101519060400151151590610156610a04565b92835260208301521515604082015261016e91611389565b60208401908152604083015161018390610b8c565b825161018f913361126c565b61019890610ef0565b825133906001600160a01b03906101ae90610b8c565b16146101b990610f10565b51805151825190038060408601528151602081015190604001511515906101de610a04565b9283526020830152151560408201526101f691611389565b6060840152608083018051600090525160200160009052604082015161021b90610b8c565b9060a0830191825161022c90610b8c565b82516102439290916001600160a01b0316906112ec565b61024c90610f30565b606083015161025a90610b8c565b306102649161133a565b90610220850191825230608085015161027c90610b8c565b906102869161133a565b92610240860193845230604086015161029e90610b8c565b906102a89161133a565b82519003926102608701938452479261020088019384526102d1600160ff196004541617600455565b51604051632e1a7d4d60e01b602082019081526024808301939093529181526102fb604482610936565b835161030690610b8c565b61030f90610b8c565b90515a9260008094938194f193610324610cd1565b948561032f91611010565b5061033f60ff1960045416600455565b30604088015161034e90610b8c565b906103589161133a565b90518082036102808a015261036d9114610f50565b30606087015161037c90610b8c565b906103869161133a565b905161039191610e58565b9360a0870194855160200151523060808701516103ad90610b8c565b906103b79161133a565b90516103c291610e58565b8451602001516020015260408501516103da90610b8c565b90516103e590610b8c565b6103ee90610b8c565b306103f89261113f565b1561040290610f70565b479051900382515280518101602001906020019061041f91610d1e565b815160400152518060c084015260405161043a819282610d46565b037ffd2cd3498596f982bb7fd69d106e7cf9f2f1be49e400091e07f8c1622dee7bcd91a160608201516020810180515160c0850151602001515101908160e08601525160208101519060400151151590610492610a04565b9283526020830152151560408201526104aa916113e6565b806101008401526040810180515160c0850151602001516020015101908161012086015251602081015190604001511515906104e4610a04565b9283526020830152151560408201526104fc91611446565b61014083015260c0820151511561051290610f90565b60c082015160200151805115156000146000936107356105a68695869586956107a05760206105449101511515610fb0565b610568602060c086015101515161056061014087015160200190565b515114610fd0565b61058e60208060c08701510151015161058661014087015160400190565b515114610ff0565b84610160850152848080806105ab6105a68651610b8c565b610b8c565b60c08901515190828215610797575bf11561078a575b6106d261060a610140860151876101808801526020810151906106056040602084015193015115156105f1610a04565b938b85526020850152604084019015159052565b6113e6565b6101a0860190815261064e6106226060850151610b8c565b61062c8551610b8c565b9061063c6101408a015160200190565b5151916001600160a01b0316906111ca565b805160400151519061069b604061014089015101928351519003926101c0890193845261067e6080870151610b8c565b6106888751610b8c565b915151916001600160a01b0316906111ca565b519051906106cd6040820151604060208201519101511515906106bc610a04565b948552602085015215156040840152565b611446565b506107076106e36040830151610b8c565b6106ed8351610b8c565b6101408701515151916001600160a01b03909116906111ca565b61072e476101608601519081808210891461077f5750506101e087965b0195808752610e36565b5051610b8c565b905190828215610776575bf115610769575b600080556107556000600155565b61075d610dae565b60405160008152602090f35b610771610d8a565b610747565b506108fc610740565b6101e0910396610724565b610792610d8a565b6105c1565b506108fc6105ba565b5061054485610fb0565b90506001541484610118565b600080fd5b346107b65760003660031901126107b65760035460805260206080f35b50346107b65760003660031901126107b6576020600154604051908152f35b50346107b657600080600319360112610869578054610814610959565b906040519283918252602090604082840152835191826040850152815b83811061085257505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610831565b80fd5b90600182811c9216801561089c575b602083101461088657565b634e487b7160e01b600052602260045260246000fd5b91607f169161087b565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176108d857604052565b6108e06108a6565b604052565b606081019081106001600160401b038211176108d857604052565b604081019081106001600160401b038211176108d857604052565b60e081019081106001600160401b038211176108d857604052565b601f909101601f19168101906001600160401b038211908210176108d857604052565b604051906000826002549161096d8361086c565b8083526001938085169081156109e35750600114610995575b5061099392500383610936565b565b600260009081526000805160206114a783398151915294602093509091905b8183106109cb575050610993935082010138610986565b855488840185015294850194879450918301916109b4565b905061099394506020925060ff191682840152151560051b82010138610986565b60405190610993826108e5565b604051906102a082016001600160401b038111838210176108d857604052565b6040908151610a3f816108e5565b8092600091825b60608110610a545750505050565b6020908351610a62816108e5565b858152858382015285858201528184015201610a46565b60405190610a8682610900565b60006020838281520152565b60405190610a9f826108e5565b8160008152610aac610a79565b60208201526040610abb610a79565b910152565b610ac8610a11565b906000808352610ad6610a31565b6020840152806040840152610ae9610a31565b6060840152610af6610a79565b6080840152610b03610a92565b60a0840152610b10610a92565b60c08401528060e0840152610b23610a31565b61010084015280610120840152610b38610a31565b6101408401528061016084015280610180840152610b54610a31565b6101a0840152806101c0840152806101e084015280610200840152806102208401528061024084015280610260840152610280830152565b6001600160a01b031690565b51906001600160a01b03821682036107b657565b519081151582036107b657565b906101e09182818303126107b657604090815193610bd68561091b565b610bdf82610b98565b85526020908183015182870152610bf7848401610b98565b84870152606093610c09858501610b98565b85880152610c1960808501610b98565b6080880152610c2a60a08501610b98565b60a08801528560df850112156107b657805195610c46876108e5565b86928501948186116107b65760c001925b858410610c6d575050505050505060c082015290565b86848303126107b6578487918451610c84816108e5565b865181528287015183820152610c9b868801610bac565b86820152815201930192610c57565b906003811015610cbb5760051b0190565b634e487b7160e01b600052603260045260246000fd5b3d15610d19573d906001600160401b038211610d0c575b60405191610d00601f8201601f191660200184610936565b82523d6000602084013e565b610d146108a6565b610ce8565b606090565b908160409103126107b657602060405191610d3883610900565b805183520151602082015290565b610993909291926060604060a083019580518452610d766020820151602086019060208091805184520151910152565b015191019060208091805184520151910152565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b610db960025461086c565b80610dc15750565b601f8111600114610dd457506000600255565b6002600090815290600190601f0160051c6000805160206114a7833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b818110610e2c57505050602081208160025555565b8381558201610e17565b9190820191828111610e4b575b82106107b657565b610e53610d97565b610e43565b908103908111610e655790565b610e6d610d97565b90565b15610e7757565b60405163100960cb60e01b8152600e6004820152602490fd5b15610e9757565b60405163100960cb60e01b8152600f6004820152602490fd5b15610eb757565b60405163100960cb60e01b815260106004820152602490fd5b15610ed757565b60405163100960cb60e01b815260116004820152602490fd5b15610ef757565b60405163100960cb60e01b815260136004820152602490fd5b15610f1757565b60405163100960cb60e01b815260146004820152602490fd5b15610f3757565b60405163100960cb60e01b815260166004820152602490fd5b15610f5757565b60405163100960cb60e01b815260186004820152602490fd5b15610f7757565b60405163100960cb60e01b815260176004820152602490fd5b15610f9757565b60405163100960cb60e01b8152601d6004820152602490fd5b15610fb757565b60405163100960cb60e01b8152601e6004820152602490fd5b15610fd757565b60405163100960cb60e01b8152601f6004820152602490fd5b15610ff757565b60405163100960cb60e01b815260206004820152602490fd5b156110185790565b80511561102757805190602001fd5b60405163100960cb60e01b815260196004820152602490fd5b156110485790565b80511561105757805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b156110785790565b80511561108757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156110a85790565b8051156110b757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156110d85790565b8051156110e757805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b156111085790565b80511561111757805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b908160209103126107b6575190565b604051636eb1769f60e11b602082019081526001600160a01b0393841660248301529383166044808301919091528152610e6d93600093849392849190608081016001600160401b038111828210176111bd575b6040525193165af16111ad6111a6610cd1565b8092611040565b5060208082518301019101611130565b6111c56108a6565b611193565b600091908291826111f961120761123697604051928391602083019663a9059cbb60e01b88526024840161123d565b03601f198101835282610936565b51926001600160a01b03165af161122661121f610cd1565b8092611070565b5060208082518301019101611258565b156107b657565b6001600160a01b039091168152602081019190915260400190565b908160209103126107b657610e6d90610bac565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610e6d936000938493909284919060a081016001600160401b038111828210176112df575b6040525193165af16112266112d8610cd1565b80926110a0565b6112e76108a6565b6112c5565b600091908291826111f961131b610e6d97604051928391602083019663095ea7b360e01b88526024840161123d565b51926001600160a01b03165af1611226611333610cd1565b80926110d0565b60008091610e6d93826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152611372816108e5565b5193165af16111ad611382610cd1565b8092611100565b9190611393610a31565b9260005b600381106113a55750508252565b806113b260019284610caa565b516113bd8288610caa565b526113c88187610caa565b5060001981146113d9575b01611397565b6113e1610d97565b6113d3565b91906113f0610a31565b9260005b600381106114055750506020830152565b8061141260019284610caa565b5161141d8288610caa565b526114288187610caa565b506000198114611439575b016113f4565b611441610d97565b611433565b9190611450610a31565b9260005b600381106114655750506040830152565b8061147260019284610caa565b5161147d8288610caa565b526114888187610caa565b506000198114611499575b01611454565b6114a1610d97565b61149356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 7659,
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
