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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  return {
    migrated: [ctc0, ctc1, ctc2, ctc1],
    withdrew: [ctc0, ctc1, ctc2, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Struct([['name', ctc0], ['v2lpToken', ctc1], ['v3lpToken', ctc1], ['tokA', ctc2], ['tokB', ctc1], ['v2PoolId', ctc3], ['v3PoolId', ctc3]]);
  
  const _admin = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545] = svs;
      return (await ((async () => {
        
        
        return v1540;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545] = svs;
      return (await ((async () => {
        
        const v1537 = {
          name: v1486,
          tokA: v1489,
          tokB: v1490,
          v2PoolId: v1491,
          v2lpToken: v1487,
          v3PoolId: v1492,
          v3lpToken: v1488
          };
        
        return v1537;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      admin: {
        decode: _admin,
        dom: [],
        rng: ctc4
        },
      info: {
        decode: _info,
        dom: [],
        rng: ctc9
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5]
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Struct([['name', ctc0], ['v2lpToken', ctc1], ['v3lpToken', ctc1], ['tokA', ctc2], ['tokB', ctc1], ['v2PoolId', ctc3], ['v3PoolId', ctc3]]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    changeAdmin0_263: ctc6,
    halt0_263: ctc7,
    migrate0_263: ctc9,
    withdraw0_263: ctc9
    });
  const ctc11 = stdlib.T_Struct([['A', ctc8], ['B', ctc8]]);
  const ctc12 = stdlib.T_Tuple([ctc8, ctc9, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc9, ctc8]);
  
  
  const v1433 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1434 = [v1433, v1433, v1433];
  const v1438 = stdlib.protect(ctc4, interact.opts, 'for Admin\'s interact field opts');
  const v1439 = v1438.name;
  const v1440 = v1438.v2lpToken;
  const v1441 = v1438.v3lpToken;
  const v1442 = v1438.tokA;
  const v1443 = v1438.tokB;
  const v1444 = v1438.v2PoolId;
  const v1445 = v1438.v3PoolId;
  
  stdlib.assert(false, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:51:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:62:16:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)', 'at ./poolMigrator.rsh:60:15:application call to [unknown function] (defined at: ./poolMigrator.rsh:60:19:function exp)'],
    msg: 'Expected Null Token A',
    who: 'Admin'
    });
  const v1457 = stdlib.digest([ctc3], [v1444]);
  const v1458 = stdlib.digest([ctc3], [v1445]);
  const v1459 = stdlib.digestEq(v1457, v1458);
  const v1460 = v1459 ? false : true;
  stdlib.assert(v1460, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:62:16:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)', 'at ./poolMigrator.rsh:60:15:application call to [unknown function] (defined at: ./poolMigrator.rsh:60:19:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v1468 = stdlib.tokenEq(v1443, v1440);
  const v1470 = stdlib.tokenEq(v1443, v1441);
  const v1471 = v1470 ? false : true;
  const v1472 = v1468 ? false : v1471;
  const v1473 = stdlib.tokenEq(v1440, v1441);
  const v1474 = v1473 ? false : true;
  const v1475 = v1472 ? v1474 : false;
  stdlib.assert(v1475, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:62:16:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)', 'at ./poolMigrator.rsh:60:15:application call to [unknown function] (defined at: ./poolMigrator.rsh:60:19:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1439, v1440, v1441, v1442, v1443, v1444, v1445],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1486, v1487, v1488, v1489, v1490, v1491, v1492], secs: v1494, time: v1493, didSend: v151, from: v1485 } = txn1;
      
      const v1495 = v1434[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0')];
      const v1496 = stdlib.Array_set(v1495, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v1497 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'), v1496);
      const v1499 = v1497[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1')];
      const v1500 = stdlib.Array_set(v1499, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v1501 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1'), v1500);
      const v1505 = v1501[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2')];
      const v1506 = stdlib.Array_set(v1505, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
      const v1507 = stdlib.Array_set(v1501, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2'), v1506);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1487
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1488
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1490
        });
      ;
      const v1538 = await ctc.getContractInfo();
      
      const v1540 = v1485;
      const v1541 = true;
      const v1542 = v1493;
      const v1544 = v1507;
      const v1545 = stdlib.checkedBigNumberify('./poolMigrator.rsh:46:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v1541;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v3105 = stdlib.sub(v1545, v1545);
        sim_r.txns.push({
          kind: 'from',
          to: v1540,
          tok: undefined /* Nothing */
          });
        const v3108 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
        const v3109 = v3108[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
        const v3115 = stdlib.sub(v3109, v3109);
        const v3119 = stdlib.Array_set(v3108, '0', v3115);
        const v3120 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v3119);
        sim_r.txns.push({
          kind: 'from',
          to: v1540,
          tok: v1490
          });
        const v3121 = v3120[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v3122 = v3121[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1540,
          tok: v1487
          });
        const v3139 = stdlib.sub(v3105, v3105);
        sim_r.txns.push({
          kind: 'from',
          to: v1540,
          tok: undefined /* Nothing */
          });
        const v3143 = (stdlib.le(await ctc.getBalance(), v3139) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3139));
        sim_r.txns.push({
          kind: 'from',
          to: v1540,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1490
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1488
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1487
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1486, v1487, v1488, v1489, v1490, v1491, v1492], secs: v1494, time: v1493, didSend: v151, from: v1485 } = txn1;
  const v1495 = v1434[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0')];
  const v1496 = stdlib.Array_set(v1495, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v1497 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'), v1496);
  const v1499 = v1497[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1')];
  const v1500 = stdlib.Array_set(v1499, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v1501 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '1'), v1500);
  const v1503 = stdlib.tokenEq(v1488, v1487);
  const v1504 = v1503 ? false : true;
  stdlib.assert(v1504, {
    at: './poolMigrator.rsh:67:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v1505 = v1501[stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2')];
  const v1506 = stdlib.Array_set(v1505, '0', stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '0'));
  const v1507 = stdlib.Array_set(v1501, stdlib.checkedBigNumberify('./poolMigrator.rsh:67:11:dot', stdlib.UInt_max, '2'), v1506);
  const v1509 = stdlib.tokenEq(v1490, v1487);
  const v1511 = stdlib.tokenEq(v1490, v1488);
  const v1512 = v1511 ? false : true;
  const v1513 = v1509 ? false : v1512;
  stdlib.assert(v1513, {
    at: './poolMigrator.rsh:67:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  stdlib.assert(false, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:51:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:68:14:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)'],
    msg: 'Expected Null Token A',
    who: 'Admin'
    });
  const v1516 = stdlib.digest([ctc3], [v1491]);
  const v1517 = stdlib.digest([ctc3], [v1492]);
  const v1518 = stdlib.digestEq(v1516, v1517);
  const v1519 = v1518 ? false : true;
  stdlib.assert(v1519, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:68:14:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v1532 = stdlib.tokenEq(v1487, v1488);
  const v1533 = v1532 ? false : true;
  stdlib.assert(v1533, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:68:14:application call to "checkOpts" (defined at: ./poolMigrator.rsh:48:30:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  const v1538 = await ctc.getContractInfo();
  stdlib.protect(ctc2, await interact.done(v1538), {
    at: './poolMigrator.rsh:81:24:application',
    fs: ['at ./poolMigrator.rsh:81:24:application call to [unknown function] (defined at: ./poolMigrator.rsh:81:24:function exp)', 'at ./poolMigrator.rsh:81:24:application call to "liftedInteract" (defined at: ./poolMigrator.rsh:81:24:application)'],
    msg: 'done',
    who: 'Admin'
    });
  
  let v1540 = v1485;
  let v1541 = true;
  let v1542 = v1493;
  let v1544 = v1507;
  let v1545 = stdlib.checkedBigNumberify('./poolMigrator.rsh:46:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return v1541;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn3;
    switch (v1658[0]) {
      case 'changeAdmin0_263': {
        const v1661 = v1658[1];
        undefined /* setApiDetails */;
        const v1704 = stdlib.le(v1545, stdlib.UInt_max);
        stdlib.assert(v1704, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v1706 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v1707 = v1706[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v1709 = stdlib.le(v1707, stdlib.UInt_max);
        stdlib.assert(v1709, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v1715 = v1661[stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:spread', stdlib.UInt_max, '0')];
        const v1716 = stdlib.addressEq(v1657, v1540);
        stdlib.assert(v1716, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
          msg: 'UNAUTHORIZED ACTION',
          who: 'Admin'
          });
        const v1718 = stdlib.addressEq(v1540, v1715);
        const v1719 = v1718 ? false : true;
        stdlib.assert(v1719, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
          msg: 'New and old admin are the same',
          who: 'Admin'
          });
        const v1722 = null;
        await txn3.getOutput('changeAdmin', 'v1722', ctc2, v1722);
        const cv1540 = v1715;
        const cv1541 = true;
        const cv1542 = v1659;
        const cv1544 = v1544;
        const cv1545 = v1545;
        
        v1540 = cv1540;
        v1541 = cv1541;
        v1542 = cv1542;
        v1544 = cv1544;
        v1545 = cv1545;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'halt0_263': {
        const v2021 = v1658[1];
        undefined /* setApiDetails */;
        const v2064 = stdlib.le(v1545, stdlib.UInt_max);
        stdlib.assert(v2064, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v2066 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v2067 = v2066[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v2069 = stdlib.le(v2067, stdlib.UInt_max);
        stdlib.assert(v2069, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v2091 = stdlib.addressEq(v1657, v1540);
        stdlib.assert(v2091, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:175:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:175:18:function exp)'],
          msg: 'UNAUTHORIZED ACTION',
          who: 'Admin'
          });
        const v2093 = null;
        await txn3.getOutput('halt', 'v2093', ctc2, v2093);
        const cv1540 = v1540;
        const cv1541 = false;
        const cv1542 = v1659;
        const cv1544 = v1544;
        const cv1545 = v1545;
        
        v1540 = cv1540;
        v1541 = cv1541;
        v1542 = cv1542;
        v1544 = cv1544;
        v1545 = cv1545;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'migrate0_263': {
        const v2381 = v1658[1];
        undefined /* setApiDetails */;
        const v2396 = v2381[stdlib.checkedBigNumberify('./poolMigrator.rsh:202:12:spread', stdlib.UInt_max, '0')];
        const v2397 = stdlib.gt(v2396, stdlib.checkedBigNumberify('./poolMigrator.rsh:203:25:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
          msg: 'Must exchange more than 0 LP tokens',
          who: 'Admin'
          });
        const v2424 = stdlib.le(v1545, stdlib.UInt_max);
        stdlib.assert(v2424, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v2426 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v2427 = v2426[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v2428 = stdlib.add(v2427, v2396);
        const v2429 = stdlib.le(v2428, stdlib.UInt_max);
        stdlib.assert(v2429, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v2432 = stdlib.Array_set(v2426, '0', v2428);
        const v2433 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v2432);
        ;
        const v2467 = v2433[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v2468 = v2467[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v2472 = stdlib.sub(v2468, v2396);
        const v2473 = stdlib.ge(v2472, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2473, {
          at: './poolMigrator.rsh:108:28:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v2476 = stdlib.Array_set(v2467, '0', v2472);
        const v2477 = stdlib.Array_set(v2433, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'), v2476);
        const v2478 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2479 = undefined /* Remote */;
        const v2480 = await txn3.getOutput('internal', 'v2479', ctc12, v2479);
        const v2482 = v2480[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v2483 = v2480[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1')];
        const v2485 = v2483[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v2492 = stdlib.add(v1545, v2482);
        const v2493 = stdlib.le(v2492, stdlib.UInt_max);
        stdlib.assert(v2493, {
          at: './poolMigrator.rsh:108:28:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v2496 = v2477[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2')];
        const v2497 = v2496[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v2498 = stdlib.add(v2497, v2485);
        const v2499 = stdlib.le(v2498, stdlib.UInt_max);
        stdlib.assert(v2499, {
          at: './poolMigrator.rsh:108:28:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v2502 = stdlib.Array_set(v2496, '0', v2498);
        const v2503 = stdlib.Array_set(v2477, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'), v2502);
        const v2508 = stdlib.gt(v2482, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:25:decimal', stdlib.UInt_max, '0'));
        const v2509 = stdlib.gt(v2485, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:32:decimal', stdlib.UInt_max, '0'));
        const v2510 = v2508 ? v2509 : false;
        stdlib.assert(v2510, {
          at: './poolMigrator.rsh:110:16:application',
          fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Received invalid A or B amount',
          who: 'Admin'
          });
        const v2514 = stdlib.eq(v2482, v2492);
        stdlib.assert(v2514, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:94:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v2516 = v2503[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '2')];
        const v2517 = v2516[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
        const v2518 = stdlib.eq(v2485, v2517);
        stdlib.assert(v2518, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v2532 = stdlib.sub(v2492, v2482);
        const v2533 = stdlib.ge(v2532, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2533, {
          at: './poolMigrator.rsh:128:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v2543 = stdlib.sub(v2517, v2485);
        const v2544 = stdlib.ge(v2543, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2544, {
          at: './poolMigrator.rsh:128:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v2547 = stdlib.Array_set(v2516, '0', v2543);
        const v2548 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2'), v2547);
        const v2549 = [v2396];
        const v2550 = {
          A: v2482,
          B: v2485
          };
        const v2551 = undefined /* Remote */;
        const v2552 = await txn3.getOutput('internal', 'v2551', ctc13, v2551);
        const v2554 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2555 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1')];
        const v2556 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2')];
        const v2557 = v2555[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2562 = stdlib.add(v2532, v2554);
        const v2563 = stdlib.le(v2562, stdlib.UInt_max);
        stdlib.assert(v2563, {
          at: './poolMigrator.rsh:128:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v2566 = v2548[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1')];
        const v2567 = v2566[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2568 = stdlib.add(v2567, v2557);
        const v2569 = stdlib.le(v2568, stdlib.UInt_max);
        stdlib.assert(v2569, {
          at: './poolMigrator.rsh:128:33:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v2572 = stdlib.Array_set(v2566, '0', v2568);
        const v2573 = stdlib.Array_set(v2548, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1'), v2572);
        const v2578 = stdlib.ge(v2556, v2396);
        stdlib.assert(v2578, {
          at: './poolMigrator.rsh:130:16:application',
          fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'LP change due to slippage',
          who: 'Admin'
          });
        const v2580 = stdlib.gt(v2556, stdlib.checkedBigNumberify('./poolMigrator.rsh:215:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2580, {
          at: './poolMigrator.rsh:215:20:application',
          fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'Possible slippage in new pool',
          who: 'Admin'
          });
        const v2585 = stdlib.sub(v2562, v2562);
        const v2586 = stdlib.ge(v2585, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2586, {
          at: './poolMigrator.rsh:88:26:application',
          fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v2588 = v2573[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
        const v2589 = v2588[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
        const v2595 = stdlib.sub(v2589, v2589);
        const v2596 = stdlib.ge(v2595, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2596, {
          at: './poolMigrator.rsh:89:39:application',
          fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v2599 = stdlib.Array_set(v2588, '0', v2595);
        const v2600 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v2599);
        ;
        const v2601 = v2600[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v2602 = v2601[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v2608 = stdlib.sub(v2602, v2602);
        const v2609 = stdlib.ge(v2608, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2609, {
          at: './poolMigrator.rsh:90:49:application',
          fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v2612 = stdlib.Array_set(v2601, '0', v2608);
        const v2613 = stdlib.Array_set(v2600, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v2612);
        ;
        const v2615 = v2613[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '1')];
        const v2616 = v2615[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '0')];
        const v2622 = stdlib.sub(v2616, v2616);
        const v2623 = stdlib.ge(v2622, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2623, {
          at: './poolMigrator.rsh:219:55:application',
          fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v2626 = stdlib.Array_set(v2615, '0', v2622);
        const v2627 = stdlib.Array_set(v2613, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '1'), v2626);
        ;
        await txn3.getOutput('migrate', 'v2556', ctc8, v2556);
        const v2634 = null;
        null;
        const cv1540 = v1540;
        const cv1541 = true;
        const cv1542 = v1659;
        const cv1544 = v2627;
        const cv1545 = v2585;
        
        v1540 = cv1540;
        v1541 = cv1541;
        v1542 = cv1542;
        v1544 = cv1544;
        v1545 = cv1545;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_263': {
        const v2741 = v1658[1];
        undefined /* setApiDetails */;
        const v2766 = v2741[stdlib.checkedBigNumberify('./poolMigrator.rsh:183:12:spread', stdlib.UInt_max, '0')];
        const v2767 = stdlib.gt(v2766, stdlib.checkedBigNumberify('./poolMigrator.rsh:184:25:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2767, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
          msg: 'Must exchange more than 0 LP tokens',
          who: 'Admin'
          });
        const v2784 = stdlib.le(v1545, stdlib.UInt_max);
        stdlib.assert(v2784, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v2786 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v2787 = v2786[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
        const v2788 = stdlib.add(v2787, v2766);
        const v2789 = stdlib.le(v2788, stdlib.UInt_max);
        stdlib.assert(v2789, {
          at: './poolMigrator.rsh:144:46:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v2792 = stdlib.Array_set(v2786, '0', v2788);
        const v2793 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v2792);
        ;
        const v3003 = v2793[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v3004 = v3003[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v3008 = stdlib.sub(v3004, v2766);
        const v3009 = stdlib.ge(v3008, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3009, {
          at: './poolMigrator.rsh:108:28:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v3012 = stdlib.Array_set(v3003, '0', v3008);
        const v3013 = stdlib.Array_set(v2793, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'), v3012);
        const v3014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v3015 = undefined /* Remote */;
        const v3016 = await txn3.getOutput('internal', 'v3015', ctc12, v3015);
        const v3018 = v3016[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v3019 = v3016[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1')];
        const v3021 = v3019[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v3028 = stdlib.add(v1545, v3018);
        const v3029 = stdlib.le(v3028, stdlib.UInt_max);
        stdlib.assert(v3029, {
          at: './poolMigrator.rsh:108:28:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v3032 = v3013[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2')];
        const v3033 = v3032[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
        const v3034 = stdlib.add(v3033, v3021);
        const v3035 = stdlib.le(v3034, stdlib.UInt_max);
        stdlib.assert(v3035, {
          at: './poolMigrator.rsh:108:28:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v3038 = stdlib.Array_set(v3032, '0', v3034);
        const v3039 = stdlib.Array_set(v3013, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'), v3038);
        const v3044 = stdlib.gt(v3018, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:25:decimal', stdlib.UInt_max, '0'));
        const v3045 = stdlib.gt(v3021, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:32:decimal', stdlib.UInt_max, '0'));
        const v3046 = v3044 ? v3045 : false;
        stdlib.assert(v3046, {
          at: './poolMigrator.rsh:110:16:application',
          fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Received invalid A or B amount',
          who: 'Admin'
          });
        const v3050 = stdlib.eq(v3018, v3028);
        stdlib.assert(v3050, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:94:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v3052 = v3039[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '2')];
        const v3053 = v3052[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
        const v3054 = stdlib.eq(v3021, v3053);
        stdlib.assert(v3054, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'Invalid contract state',
          who: 'Admin'
          });
        const v3060 = stdlib.sub(v3028, v3028);
        const v3061 = stdlib.ge(v3060, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3061, {
          at: './poolMigrator.rsh:88:26:application',
          fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v3070 = stdlib.sub(v3053, v3053);
        const v3071 = stdlib.ge(v3070, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3071, {
          at: './poolMigrator.rsh:89:39:application',
          fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v3074 = stdlib.Array_set(v3052, '0', v3070);
        const v3075 = stdlib.Array_set(v3039, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v3074);
        ;
        const v3076 = v3075[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v3077 = v3076[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
        const v3083 = stdlib.sub(v3077, v3077);
        const v3084 = stdlib.ge(v3083, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3084, {
          at: './poolMigrator.rsh:90:49:application',
          fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v3087 = stdlib.Array_set(v3076, '0', v3083);
        const v3088 = stdlib.Array_set(v3075, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v3087);
        ;
        const v3090 = {
          A: v3018,
          B: v3021
          };
        await txn3.getOutput('withdraw', 'v3090', ctc11, v3090);
        const v3099 = null;
        null;
        const cv1540 = v1540;
        const cv1541 = true;
        const cv1542 = v1659;
        const cv1544 = v3088;
        const cv1545 = v3060;
        
        v1540 = cv1540;
        v1541 = cv1541;
        v1542 = cv1542;
        v1544 = cv1544;
        v1545 = cv1545;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v3105 = stdlib.sub(v1545, v1545);
  const v3106 = stdlib.ge(v3105, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3106, {
    at: './poolMigrator.rsh:88:26:application',
    fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v3108 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
  const v3109 = v3108[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
  const v3115 = stdlib.sub(v3109, v3109);
  const v3116 = stdlib.ge(v3115, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3116, {
    at: './poolMigrator.rsh:89:39:application',
    fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v3119 = stdlib.Array_set(v3108, '0', v3115);
  const v3120 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v3119);
  ;
  const v3121 = v3120[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
  const v3122 = v3121[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
  const v3128 = stdlib.sub(v3122, v3122);
  const v3129 = stdlib.ge(v3128, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3129, {
    at: './poolMigrator.rsh:90:49:application',
    fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v3139 = stdlib.sub(v3105, v3105);
  const v3140 = stdlib.ge(v3139, stdlib.checkedBigNumberify('./poolMigrator.rsh:229:27:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3140, {
    at: './poolMigrator.rsh:229:27:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v3143 = (stdlib.le(await ctc.getBalance(), v3139) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3139));
  const v3144 = stdlib.safeAdd(v3143, v3139);
  const v3148 = stdlib.sub(v3144, v3143);
  const v3149 = stdlib.ge(v3148, stdlib.checkedBigNumberify('./poolMigrator.rsh:230:37:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3149, {
    at: './poolMigrator.rsh:230:37:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  return;
  
  
  };
export async function _changeAdmin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _changeAdmin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _changeAdmin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Data({
    changeAdmin0_263: ctc9,
    halt0_263: ctc10,
    migrate0_263: ctc11,
    withdraw0_263: ctc11
    });
  
  
  const [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5]);
  const v1560 = ctc.selfAddress();
  const v1562 = stdlib.protect(ctc9, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:158:45:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:45:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runchangeAdmin0_263" (defined at: ./poolMigrator.rsh:158:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'changeAdmin'
    });
  const v1563 = v1562[stdlib.checkedBigNumberify('./poolMigrator.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1565 = stdlib.addressEq(v1560, v1540);
  stdlib.assert(v1565, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:158:45:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:45:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runchangeAdmin0_263" (defined at: ./poolMigrator.rsh:158:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'UNAUTHORIZED ACTION',
    who: 'changeAdmin'
    });
  const v1567 = stdlib.addressEq(v1540, v1563);
  const v1568 = v1567 ? false : true;
  stdlib.assert(v1568, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:158:45:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:45:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runchangeAdmin0_263" (defined at: ./poolMigrator.rsh:158:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'New and old admin are the same',
    who: 'changeAdmin'
    });
  const v1575 = ['changeAdmin0_263', v1562];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545, v1575],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./poolMigrator.rsh:145:16:decimal', stdlib.UInt_max, '0'), v1487]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'changeAdmin0_263': {
          const v1661 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "changeAdmin"
            });
          ;
          ;
          const v1715 = v1661[stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:spread', stdlib.UInt_max, '0')];
          const v1722 = null;
          const v1723 = await txn1.getOutput('changeAdmin', 'v1722', ctc2, v1722);
          
          const v3897 = v1715;
          const v3900 = v1544;
          const v3901 = v1545;
          sim_r.isHalt = false;
          
          break;
          }
        case 'halt0_263': {
          const v2021 = v1658[1];
          
          break;
          }
        case 'migrate0_263': {
          const v2381 = v1658[1];
          
          break;
          }
        case 'withdraw0_263': {
          const v2741 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'changeAdmin0_263': {
      const v1661 = v1658[1];
      undefined /* setApiDetails */;
      const v1704 = stdlib.le(v1545, stdlib.UInt_max);
      stdlib.assert(v1704, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'changeAdmin'
        });
      ;
      const v1706 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v1707 = v1706[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v1709 = stdlib.le(v1707, stdlib.UInt_max);
      stdlib.assert(v1709, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'changeAdmin'
        });
      ;
      const v1715 = v1661[stdlib.checkedBigNumberify('./poolMigrator.rsh:158:12:spread', stdlib.UInt_max, '0')];
      const v1716 = stdlib.addressEq(v1657, v1540);
      stdlib.assert(v1716, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
        msg: 'UNAUTHORIZED ACTION',
        who: 'changeAdmin'
        });
      const v1718 = stdlib.addressEq(v1540, v1715);
      const v1719 = v1718 ? false : true;
      stdlib.assert(v1719, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
        msg: 'New and old admin are the same',
        who: 'changeAdmin'
        });
      const v1722 = null;
      const v1723 = await txn1.getOutput('changeAdmin', 'v1722', ctc2, v1722);
      if (v697) {
        stdlib.protect(ctc2, await interact.out(v1661, v1723), {
          at: './poolMigrator.rsh:158:13:application',
          fs: ['at ./poolMigrator.rsh:158:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:158:13:function exp)', 'at ./poolMigrator.rsh:164:17:application call to "done" (defined at: ./poolMigrator.rsh:163:18:function exp)', 'at ./poolMigrator.rsh:163:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:163:18:function exp)'],
          msg: 'out',
          who: 'changeAdmin'
          });
        }
      else {
        }
      
      const v3897 = v1715;
      const v3900 = v1544;
      const v3901 = v1545;
      return;
      
      break;
      }
    case 'halt0_263': {
      const v2021 = v1658[1];
      return;
      break;
      }
    case 'migrate0_263': {
      const v2381 = v1658[1];
      return;
      break;
      }
    case 'withdraw0_263': {
      const v2741 = v1658[1];
      return;
      break;
      }
    }
  
  
  };
export async function _halt3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _halt3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _halt3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Data({
    changeAdmin0_263: ctc10,
    halt0_263: ctc9,
    migrate0_263: ctc11,
    withdraw0_263: ctc11
    });
  
  
  const [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5]);
  const v1577 = ctc.selfAddress();
  const v1579 = stdlib.protect(ctc9, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:171:30:application call to [unknown function] (defined at: ./poolMigrator.rsh:171:30:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runhalt0_263" (defined at: ./poolMigrator.rsh:171:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'halt'
    });
  const v1580 = stdlib.addressEq(v1577, v1540);
  stdlib.assert(v1580, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:171:30:application call to [unknown function] (defined at: ./poolMigrator.rsh:171:30:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runhalt0_263" (defined at: ./poolMigrator.rsh:171:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'UNAUTHORIZED ACTION',
    who: 'halt'
    });
  const v1585 = ['halt0_263', v1579];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545, v1585],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:171:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./poolMigrator.rsh:145:16:decimal', stdlib.UInt_max, '0'), v1487]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'changeAdmin0_263': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'halt0_263': {
          const v2021 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "halt"
            });
          ;
          ;
          const v2093 = null;
          const v2094 = await txn1.getOutput('halt', 'v2093', ctc2, v2093);
          
          const v4017 = stdlib.sub(v1545, v1545);
          sim_r.txns.push({
            kind: 'from',
            to: v1540,
            tok: undefined /* Nothing */
            });
          const v4019 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
          const v4020 = v4019[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
          const v4021 = stdlib.sub(v4020, v4020);
          const v4023 = stdlib.Array_set(v4019, '0', v4021);
          const v4024 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v4023);
          sim_r.txns.push({
            kind: 'from',
            to: v1540,
            tok: v1490
            });
          const v4025 = v4024[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v4026 = v4025[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v1540,
            tok: v1487
            });
          const v4029 = stdlib.sub(v4017, v4017);
          sim_r.txns.push({
            kind: 'from',
            to: v1540,
            tok: undefined /* Nothing */
            });
          const v4031 = (stdlib.le(await ctc.getBalance(), v4029) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4029));
          sim_r.txns.push({
            kind: 'from',
            to: v1540,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1490
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1488
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1487
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'migrate0_263': {
          const v2381 = v1658[1];
          
          break;
          }
        case 'withdraw0_263': {
          const v2741 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'changeAdmin0_263': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'halt0_263': {
      const v2021 = v1658[1];
      undefined /* setApiDetails */;
      const v2064 = stdlib.le(v1545, stdlib.UInt_max);
      stdlib.assert(v2064, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'halt'
        });
      ;
      const v2066 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v2067 = v2066[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v2069 = stdlib.le(v2067, stdlib.UInt_max);
      stdlib.assert(v2069, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'halt'
        });
      ;
      const v2091 = stdlib.addressEq(v1657, v1540);
      stdlib.assert(v2091, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:175:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:175:18:function exp)'],
        msg: 'UNAUTHORIZED ACTION',
        who: 'halt'
        });
      const v2093 = null;
      const v2094 = await txn1.getOutput('halt', 'v2093', ctc2, v2093);
      if (v697) {
        stdlib.protect(ctc2, await interact.out(v2021, v2094), {
          at: './poolMigrator.rsh:171:13:application',
          fs: ['at ./poolMigrator.rsh:171:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:171:13:function exp)', 'at ./poolMigrator.rsh:176:17:application call to "done" (defined at: ./poolMigrator.rsh:175:18:function exp)', 'at ./poolMigrator.rsh:175:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:175:18:function exp)'],
          msg: 'out',
          who: 'halt'
          });
        }
      else {
        }
      
      const v4017 = stdlib.sub(v1545, v1545);
      const v4018 = stdlib.ge(v4017, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4018, {
        at: './poolMigrator.rsh:88:26:application',
        fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      const v4019 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
      const v4020 = v4019[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
      const v4021 = stdlib.sub(v4020, v4020);
      const v4022 = stdlib.ge(v4021, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4022, {
        at: './poolMigrator.rsh:89:39:application',
        fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
        msg: 'assume >= 0',
        who: 'halt'
        });
      const v4023 = stdlib.Array_set(v4019, '0', v4021);
      const v4024 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v4023);
      ;
      const v4025 = v4024[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v4026 = v4025[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v4027 = stdlib.sub(v4026, v4026);
      const v4028 = stdlib.ge(v4027, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4028, {
        at: './poolMigrator.rsh:90:49:application',
        fs: ['at ./poolMigrator.rsh:228:18:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)'],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      const v4029 = stdlib.sub(v4017, v4017);
      const v4030 = stdlib.ge(v4029, stdlib.checkedBigNumberify('./poolMigrator.rsh:229:27:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4030, {
        at: './poolMigrator.rsh:229:27:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      const v4031 = (stdlib.le(await ctc.getBalance(), v4029) ? stdlib.checkedBigNumberify('./poolMigrator.rsh:230:31:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4029));
      const v4032 = stdlib.safeAdd(v4031, v4029);
      const v4033 = stdlib.sub(v4032, v4031);
      const v4034 = stdlib.ge(v4033, stdlib.checkedBigNumberify('./poolMigrator.rsh:230:37:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4034, {
        at: './poolMigrator.rsh:230:37:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'halt'
        });
      ;
      return;
      
      break;
      }
    case 'migrate0_263': {
      const v2381 = v1658[1];
      return;
      break;
      }
    case 'withdraw0_263': {
      const v2741 = v1658[1];
      return;
      break;
      }
    }
  
  
  };
export async function _migrate3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _migrate3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _migrate3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    changeAdmin0_263: ctc10,
    halt0_263: ctc11,
    migrate0_263: ctc9,
    withdraw0_263: ctc9
    });
  const ctc13 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc9, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc5, ctc9, ctc5]);
  
  
  const [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5]);
  const v1603 = stdlib.protect(ctc9, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runmigrate0_263" (defined at: ./poolMigrator.rsh:202:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'migrate'
    });
  const v1604 = v1603[stdlib.checkedBigNumberify('./poolMigrator.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1606 = stdlib.gt(v1604, stdlib.checkedBigNumberify('./poolMigrator.rsh:203:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1606, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runmigrate0_263" (defined at: ./poolMigrator.rsh:202:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'migrate'
    });
  const v1613 = ['migrate0_263', v1603];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545, v1613],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:206:12:decimal', stdlib.UInt_max, '0'), [[v1604, v1487]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'changeAdmin0_263': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'halt0_263': {
          const v2021 = v1658[1];
          
          break;
          }
        case 'migrate0_263': {
          const v2381 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "migrate"
            });
          const v2396 = v2381[stdlib.checkedBigNumberify('./poolMigrator.rsh:202:12:spread', stdlib.UInt_max, '0')];
          ;
          const v2426 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v2427 = v2426[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v2428 = stdlib.add(v2427, v2396);
          const v2432 = stdlib.Array_set(v2426, '0', v2428);
          const v2433 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v2432);
          sim_r.txns.push({
            amt: v2396,
            kind: 'to',
            tok: v1487
            });
          const v2467 = v2433[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v2468 = v2467[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v2472 = stdlib.sub(v2468, v2396);
          const v2476 = stdlib.Array_set(v2467, '0', v2472);
          const v2477 = stdlib.Array_set(v2433, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'), v2476);
          const v2478 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2479 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1491,
              remote: ({
                accs: [],
                apps: [v1491],
                bills: stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'),
                fees: stdlib.checkedBigNumberify('./poolMigrator.rsh:106:16:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1'),
                toks: [v1490, v1487]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2478 /* simTokensRecv */, ctc13.defaultValue /* simReturnVal */];})();
          const v2480 = await txn1.getOutput('internal', 'v2479', ctc14, v2479);
          const v2482 = v2480[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v2483 = v2480[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1')];
          const v2485 = v2483[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v2492 = stdlib.add(v1545, v2482);
          const v2496 = v2477[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2')];
          const v2497 = v2496[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v2498 = stdlib.add(v2497, v2485);
          const v2502 = stdlib.Array_set(v2496, '0', v2498);
          const v2503 = stdlib.Array_set(v2477, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'), v2502);
          const v2516 = v2503[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '2')];
          const v2517 = v2516[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
          const v2532 = stdlib.sub(v2492, v2482);
          const v2543 = stdlib.sub(v2517, v2485);
          const v2547 = stdlib.Array_set(v2516, '0', v2543);
          const v2548 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2'), v2547);
          const v2549 = [v2396];
          const v2550 = {
            A: v2482,
            B: v2485
            };
          const v2551 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1492,
              remote: ({
                accs: [],
                apps: [v1492],
                bills: stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2'),
                fees: stdlib.checkedBigNumberify('./poolMigrator.rsh:126:16:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2'),
                toks: [v1488, v1490]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v2549 /* simTokensRecv */, ctc5.defaultValue /* simReturnVal */];})();
          const v2552 = await txn1.getOutput('internal', 'v2551', ctc15, v2551);
          const v2554 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
          const v2555 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1')];
          const v2556 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2')];
          const v2557 = v2555[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
          const v2562 = stdlib.add(v2532, v2554);
          const v2566 = v2548[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1')];
          const v2567 = v2566[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
          const v2568 = stdlib.add(v2567, v2557);
          const v2572 = stdlib.Array_set(v2566, '0', v2568);
          const v2573 = stdlib.Array_set(v2548, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1'), v2572);
          const v2585 = stdlib.sub(v2562, v2562);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: undefined /* Nothing */
            });
          const v2588 = v2573[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
          const v2589 = v2588[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
          const v2595 = stdlib.sub(v2589, v2589);
          const v2599 = stdlib.Array_set(v2588, '0', v2595);
          const v2600 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v2599);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: v1490
            });
          const v2601 = v2600[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v2602 = v2601[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v2608 = stdlib.sub(v2602, v2602);
          const v2612 = stdlib.Array_set(v2601, '0', v2608);
          const v2613 = stdlib.Array_set(v2600, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v2612);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: v1487
            });
          const v2615 = v2613[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '1')];
          const v2616 = v2615[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '0')];
          const v2622 = stdlib.sub(v2616, v2616);
          const v2626 = stdlib.Array_set(v2615, '0', v2622);
          const v2627 = stdlib.Array_set(v2613, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '1'), v2626);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: v1488
            });
          const v2628 = await txn1.getOutput('migrate', 'v2556', ctc5, v2556);
          
          const v2634 = null;
          null;
          const v4127 = v1540;
          const v4130 = v2627;
          const v4131 = v2585;
          sim_r.isHalt = false;
          
          break;
          }
        case 'withdraw0_263': {
          const v2741 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'changeAdmin0_263': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'halt0_263': {
      const v2021 = v1658[1];
      return;
      break;
      }
    case 'migrate0_263': {
      const v2381 = v1658[1];
      undefined /* setApiDetails */;
      const v2396 = v2381[stdlib.checkedBigNumberify('./poolMigrator.rsh:202:12:spread', stdlib.UInt_max, '0')];
      const v2397 = stdlib.gt(v2396, stdlib.checkedBigNumberify('./poolMigrator.rsh:203:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:202:40:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:40:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
        msg: 'Must exchange more than 0 LP tokens',
        who: 'migrate'
        });
      const v2424 = stdlib.le(v1545, stdlib.UInt_max);
      stdlib.assert(v2424, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      ;
      const v2426 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v2427 = v2426[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v2428 = stdlib.add(v2427, v2396);
      const v2429 = stdlib.le(v2428, stdlib.UInt_max);
      stdlib.assert(v2429, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v2432 = stdlib.Array_set(v2426, '0', v2428);
      const v2433 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v2432);
      ;
      const v2467 = v2433[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v2468 = v2467[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v2472 = stdlib.sub(v2468, v2396);
      const v2473 = stdlib.ge(v2472, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2473, {
        at: './poolMigrator.rsh:108:28:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v2476 = stdlib.Array_set(v2467, '0', v2472);
      const v2477 = stdlib.Array_set(v2433, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'), v2476);
      const v2478 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2479 = undefined /* Remote */;
      const v2480 = await txn1.getOutput('internal', 'v2479', ctc14, v2479);
      const v2482 = v2480[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v2483 = v2480[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1')];
      const v2485 = v2483[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v2492 = stdlib.add(v1545, v2482);
      const v2493 = stdlib.le(v2492, stdlib.UInt_max);
      stdlib.assert(v2493, {
        at: './poolMigrator.rsh:108:28:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v2496 = v2477[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2')];
      const v2497 = v2496[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v2498 = stdlib.add(v2497, v2485);
      const v2499 = stdlib.le(v2498, stdlib.UInt_max);
      stdlib.assert(v2499, {
        at: './poolMigrator.rsh:108:28:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v2502 = stdlib.Array_set(v2496, '0', v2498);
      const v2503 = stdlib.Array_set(v2477, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'), v2502);
      const v2508 = stdlib.gt(v2482, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:25:decimal', stdlib.UInt_max, '0'));
      const v2509 = stdlib.gt(v2485, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:32:decimal', stdlib.UInt_max, '0'));
      const v2510 = v2508 ? v2509 : false;
      stdlib.assert(v2510, {
        at: './poolMigrator.rsh:110:16:application',
        fs: ['at ./poolMigrator.rsh:209:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Received invalid A or B amount',
        who: 'migrate'
        });
      const v2514 = stdlib.eq(v2482, v2492);
      stdlib.assert(v2514, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:94:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'migrate'
        });
      const v2516 = v2503[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '2')];
      const v2517 = v2516[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
      const v2518 = stdlib.eq(v2485, v2517);
      stdlib.assert(v2518, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:210:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'migrate'
        });
      const v2532 = stdlib.sub(v2492, v2482);
      const v2533 = stdlib.ge(v2532, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2533, {
        at: './poolMigrator.rsh:128:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v2543 = stdlib.sub(v2517, v2485);
      const v2544 = stdlib.ge(v2543, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2544, {
        at: './poolMigrator.rsh:128:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v2547 = stdlib.Array_set(v2516, '0', v2543);
      const v2548 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2'), v2547);
      const v2549 = [v2396];
      const v2550 = {
        A: v2482,
        B: v2485
        };
      const v2551 = undefined /* Remote */;
      const v2552 = await txn1.getOutput('internal', 'v2551', ctc15, v2551);
      const v2554 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
      const v2555 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1')];
      const v2556 = v2552[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '2')];
      const v2557 = v2555[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
      const v2562 = stdlib.add(v2532, v2554);
      const v2563 = stdlib.le(v2562, stdlib.UInt_max);
      stdlib.assert(v2563, {
        at: './poolMigrator.rsh:128:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v2566 = v2548[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1')];
      const v2567 = v2566[stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '0')];
      const v2568 = stdlib.add(v2567, v2557);
      const v2569 = stdlib.le(v2568, stdlib.UInt_max);
      stdlib.assert(v2569, {
        at: './poolMigrator.rsh:128:33:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'migrate'
        });
      const v2572 = stdlib.Array_set(v2566, '0', v2568);
      const v2573 = stdlib.Array_set(v2548, stdlib.checkedBigNumberify('./poolMigrator.rsh:128:33:application', stdlib.UInt_max, '1'), v2572);
      const v2578 = stdlib.ge(v2556, v2396);
      stdlib.assert(v2578, {
        at: './poolMigrator.rsh:130:16:application',
        fs: ['at ./poolMigrator.rsh:214:43:application call to "doDeposit" (defined at: ./poolMigrator.rsh:123:42:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'LP change due to slippage',
        who: 'migrate'
        });
      const v2580 = stdlib.gt(v2556, stdlib.checkedBigNumberify('./poolMigrator.rsh:215:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2580, {
        at: './poolMigrator.rsh:215:20:application',
        fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'Possible slippage in new pool',
        who: 'migrate'
        });
      const v2585 = stdlib.sub(v2562, v2562);
      const v2586 = stdlib.ge(v2585, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2586, {
        at: './poolMigrator.rsh:88:26:application',
        fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      ;
      const v2588 = v2573[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '2')];
      const v2589 = v2588[stdlib.checkedBigNumberify('./poolMigrator.rsh:89:23:application', stdlib.UInt_max, '0')];
      const v2595 = stdlib.sub(v2589, v2589);
      const v2596 = stdlib.ge(v2595, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2596, {
        at: './poolMigrator.rsh:89:39:application',
        fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v2599 = stdlib.Array_set(v2588, '0', v2595);
      const v2600 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v2599);
      ;
      const v2601 = v2600[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v2602 = v2601[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v2608 = stdlib.sub(v2602, v2602);
      const v2609 = stdlib.ge(v2608, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2609, {
        at: './poolMigrator.rsh:90:49:application',
        fs: ['at ./poolMigrator.rsh:218:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v2612 = stdlib.Array_set(v2601, '0', v2608);
      const v2613 = stdlib.Array_set(v2600, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v2612);
      ;
      const v2615 = v2613[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '1')];
      const v2616 = v2615[stdlib.checkedBigNumberify('./poolMigrator.rsh:219:29:application', stdlib.UInt_max, '0')];
      const v2622 = stdlib.sub(v2616, v2616);
      const v2623 = stdlib.ge(v2622, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2623, {
        at: './poolMigrator.rsh:219:55:application',
        fs: ['at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
        msg: 'assume >= 0',
        who: 'migrate'
        });
      const v2626 = stdlib.Array_set(v2615, '0', v2622);
      const v2627 = stdlib.Array_set(v2613, stdlib.checkedBigNumberify('./poolMigrator.rsh:219:55:application', stdlib.UInt_max, '1'), v2626);
      ;
      const v2628 = await txn1.getOutput('migrate', 'v2556', ctc5, v2556);
      if (v697) {
        stdlib.protect(ctc2, await interact.out(v2381, v2628), {
          at: './poolMigrator.rsh:202:13:application',
          fs: ['at ./poolMigrator.rsh:202:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:202:13:function exp)', 'at ./poolMigrator.rsh:220:17:application call to "done" (defined at: ./poolMigrator.rsh:207:18:function exp)', 'at ./poolMigrator.rsh:207:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:207:18:function exp)'],
          msg: 'out',
          who: 'migrate'
          });
        }
      else {
        }
      
      const v2634 = null;
      null;
      const v4127 = v1540;
      const v4130 = v2627;
      const v4131 = v2585;
      return;
      
      break;
      }
    case 'withdraw0_263': {
      const v2741 = v1658[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    changeAdmin0_263: ctc10,
    halt0_263: ctc11,
    migrate0_263: ctc9,
    withdraw0_263: ctc9
    });
  const ctc13 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc9, ctc13]);
  
  
  const [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5]);
  const v1589 = stdlib.protect(ctc9, await interact.in(), {
    at: './poolMigrator.rsh:1:23:application',
    fs: ['at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runwithdraw0_263" (defined at: ./poolMigrator.rsh:183:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v1590 = v1589[stdlib.checkedBigNumberify('./poolMigrator.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1592 = stdlib.gt(v1590, stdlib.checkedBigNumberify('./poolMigrator.rsh:184:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1592, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./poolMigrator.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to "runwithdraw0_263" (defined at: ./poolMigrator.rsh:183:12:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'withdraw'
    });
  const v1599 = ['withdraw0_263', v1589];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1486, v1487, v1488, v1489, v1490, v1491, v1492, v1540, v1544, v1545, v1599],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./poolMigrator.rsh:187:12:decimal', stdlib.UInt_max, '0'), [[v1590, v1487]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'changeAdmin0_263': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'halt0_263': {
          const v2021 = v1658[1];
          
          break;
          }
        case 'migrate0_263': {
          const v2381 = v1658[1];
          
          break;
          }
        case 'withdraw0_263': {
          const v2741 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          const v2766 = v2741[stdlib.checkedBigNumberify('./poolMigrator.rsh:183:12:spread', stdlib.UInt_max, '0')];
          ;
          const v2786 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v2787 = v2786[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
          const v2788 = stdlib.add(v2787, v2766);
          const v2792 = stdlib.Array_set(v2786, '0', v2788);
          const v2793 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v2792);
          sim_r.txns.push({
            amt: v2766,
            kind: 'to',
            tok: v1487
            });
          const v3003 = v2793[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v3004 = v3003[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v3008 = stdlib.sub(v3004, v2766);
          const v3012 = stdlib.Array_set(v3003, '0', v3008);
          const v3013 = stdlib.Array_set(v2793, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'), v3012);
          const v3014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3015 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1491,
              remote: ({
                accs: [],
                apps: [v1491],
                bills: stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'),
                fees: stdlib.checkedBigNumberify('./poolMigrator.rsh:106:16:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1'),
                toks: [v1490, v1487]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v3014 /* simTokensRecv */, ctc13.defaultValue /* simReturnVal */];})();
          const v3016 = await txn1.getOutput('internal', 'v3015', ctc14, v3015);
          const v3018 = v3016[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v3019 = v3016[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1')];
          const v3021 = v3019[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v3028 = stdlib.add(v1545, v3018);
          const v3032 = v3013[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2')];
          const v3033 = v3032[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
          const v3034 = stdlib.add(v3033, v3021);
          const v3038 = stdlib.Array_set(v3032, '0', v3034);
          const v3039 = stdlib.Array_set(v3013, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'), v3038);
          const v3052 = v3039[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '2')];
          const v3053 = v3052[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
          const v3060 = stdlib.sub(v3028, v3028);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: undefined /* Nothing */
            });
          const v3070 = stdlib.sub(v3053, v3053);
          const v3074 = stdlib.Array_set(v3052, '0', v3070);
          const v3075 = stdlib.Array_set(v3039, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v3074);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: v1490
            });
          const v3076 = v3075[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v3077 = v3076[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
          const v3083 = stdlib.sub(v3077, v3077);
          const v3087 = stdlib.Array_set(v3076, '0', v3083);
          const v3088 = stdlib.Array_set(v3075, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v3087);
          sim_r.txns.push({
            kind: 'from',
            to: v1657,
            tok: v1487
            });
          const v3090 = {
            A: v3018,
            B: v3021
            };
          const v3091 = await txn1.getOutput('withdraw', 'v3090', ctc13, v3090);
          
          const v3099 = null;
          null;
          const v4242 = v1540;
          const v4245 = v3088;
          const v4246 = v3060;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc3, ctc3, ctc4, ctc8, ctc5, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v697, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'changeAdmin0_263': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'halt0_263': {
      const v2021 = v1658[1];
      return;
      break;
      }
    case 'migrate0_263': {
      const v2381 = v1658[1];
      return;
      break;
      }
    case 'withdraw0_263': {
      const v2741 = v1658[1];
      undefined /* setApiDetails */;
      const v2766 = v2741[stdlib.checkedBigNumberify('./poolMigrator.rsh:183:12:spread', stdlib.UInt_max, '0')];
      const v2767 = stdlib.gt(v2766, stdlib.checkedBigNumberify('./poolMigrator.rsh:184:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2767, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:183:41:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:41:function exp)', 'at ./poolMigrator.rsh:144:46:application call to [unknown function] (defined at: ./poolMigrator.rsh:144:46:function exp)', 'at ./poolMigrator.rsh:145:16:application call to [unknown function] (defined at: ./poolMigrator.rsh:145:16:function exp)'],
        msg: 'Must exchange more than 0 LP tokens',
        who: 'withdraw'
        });
      const v2784 = stdlib.le(v1545, stdlib.UInt_max);
      stdlib.assert(v2784, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      ;
      const v2786 = v1544[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v2787 = v2786[stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0')];
      const v2788 = stdlib.add(v2787, v2766);
      const v2789 = stdlib.le(v2788, stdlib.UInt_max);
      stdlib.assert(v2789, {
        at: './poolMigrator.rsh:144:46:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v2792 = stdlib.Array_set(v2786, '0', v2788);
      const v2793 = stdlib.Array_set(v1544, stdlib.checkedBigNumberify('./poolMigrator.rsh:144:46:dot', stdlib.UInt_max, '0'), v2792);
      ;
      const v3003 = v2793[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v3004 = v3003[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v3008 = stdlib.sub(v3004, v2766);
      const v3009 = stdlib.ge(v3008, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3009, {
        at: './poolMigrator.rsh:108:28:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v3012 = stdlib.Array_set(v3003, '0', v3008);
      const v3013 = stdlib.Array_set(v2793, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0'), v3012);
      const v3014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3015 = undefined /* Remote */;
      const v3016 = await txn1.getOutput('internal', 'v3015', ctc14, v3015);
      const v3018 = v3016[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v3019 = v3016[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '1')];
      const v3021 = v3019[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v3028 = stdlib.add(v1545, v3018);
      const v3029 = stdlib.le(v3028, stdlib.UInt_max);
      stdlib.assert(v3029, {
        at: './poolMigrator.rsh:108:28:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v3032 = v3013[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2')];
      const v3033 = v3032[stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '0')];
      const v3034 = stdlib.add(v3033, v3021);
      const v3035 = stdlib.le(v3034, stdlib.UInt_max);
      stdlib.assert(v3035, {
        at: './poolMigrator.rsh:108:28:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v3038 = stdlib.Array_set(v3032, '0', v3034);
      const v3039 = stdlib.Array_set(v3013, stdlib.checkedBigNumberify('./poolMigrator.rsh:108:28:application', stdlib.UInt_max, '2'), v3038);
      const v3044 = stdlib.gt(v3018, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:25:decimal', stdlib.UInt_max, '0'));
      const v3045 = stdlib.gt(v3021, stdlib.checkedBigNumberify('./poolMigrator.rsh:110:32:decimal', stdlib.UInt_max, '0'));
      const v3046 = v3044 ? v3045 : false;
      stdlib.assert(v3046, {
        at: './poolMigrator.rsh:110:16:application',
        fs: ['at ./poolMigrator.rsh:189:46:application call to "doWithdraw" (defined at: ./poolMigrator.rsh:101:38:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Received invalid A or B amount',
        who: 'withdraw'
        });
      const v3050 = stdlib.eq(v3018, v3028);
      stdlib.assert(v3050, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:94:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'withdraw'
        });
      const v3052 = v3039[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '2')];
      const v3053 = v3052[stdlib.checkedBigNumberify('./poolMigrator.rsh:98:25:application', stdlib.UInt_max, '0')];
      const v3054 = stdlib.eq(v3021, v3053);
      stdlib.assert(v3054, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./poolMigrator.rsh:98:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./poolMigrator.rsh:190:24:application call to "confirmAmts" (defined at: ./poolMigrator.rsh:93:32:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'Invalid contract state',
        who: 'withdraw'
        });
      const v3060 = stdlib.sub(v3028, v3028);
      const v3061 = stdlib.ge(v3060, stdlib.checkedBigNumberify('./poolMigrator.rsh:88:26:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3061, {
        at: './poolMigrator.rsh:88:26:application',
        fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      ;
      const v3070 = stdlib.sub(v3053, v3053);
      const v3071 = stdlib.ge(v3070, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3071, {
        at: './poolMigrator.rsh:89:39:application',
        fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v3074 = stdlib.Array_set(v3052, '0', v3070);
      const v3075 = stdlib.Array_set(v3039, stdlib.checkedBigNumberify('./poolMigrator.rsh:89:39:application', stdlib.UInt_max, '2'), v3074);
      ;
      const v3076 = v3075[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v3077 = v3076[stdlib.checkedBigNumberify('./poolMigrator.rsh:90:23:application', stdlib.UInt_max, '0')];
      const v3083 = stdlib.sub(v3077, v3077);
      const v3084 = stdlib.ge(v3083, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3084, {
        at: './poolMigrator.rsh:90:49:application',
        fs: ['at ./poolMigrator.rsh:192:26:application call to "clearBalances" (defined at: ./poolMigrator.rsh:87:34:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v3087 = stdlib.Array_set(v3076, '0', v3083);
      const v3088 = stdlib.Array_set(v3075, stdlib.checkedBigNumberify('./poolMigrator.rsh:90:49:application', stdlib.UInt_max, '0'), v3087);
      ;
      const v3090 = {
        A: v3018,
        B: v3021
        };
      const v3091 = await txn1.getOutput('withdraw', 'v3090', ctc13, v3090);
      if (v697) {
        stdlib.protect(ctc2, await interact.out(v2741, v3091), {
          at: './poolMigrator.rsh:183:13:application',
          fs: ['at ./poolMigrator.rsh:183:13:application call to [unknown function] (defined at: ./poolMigrator.rsh:183:13:function exp)', 'at ./poolMigrator.rsh:193:17:application call to "done" (defined at: ./poolMigrator.rsh:188:18:function exp)', 'at ./poolMigrator.rsh:188:18:application call to [unknown function] (defined at: ./poolMigrator.rsh:188:18:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v3099 = null;
      null;
      const v4242 = v1540;
      const v4245 = v3088;
      const v4246 = v3060;
      return;
      
      break;
      }
    }
  
  
  };
export async function changeAdmin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for changeAdmin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for changeAdmin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _changeAdmin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _halt3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function migrate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for migrate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for migrate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _migrate3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`changeAdmin(address)byte[0]`, `halt()byte[0]`, `migrate(uint64)uint64`, `withdraw(uint64)(uint64,uint64)`],
    pure: [`admin()address`, `info()(byte[96],uint64,uint64,byte[0],uint64,uint64,uint64)`],
    sigs: [`admin()address`, `changeAdmin(address)byte[0]`, `halt()byte[0]`, `info()(byte[96],uint64,uint64,byte[0],uint64,uint64,uint64)`, `migrate(uint64)uint64`, `withdraw(uint64)(uint64,uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAWAAEE////////////AQgDBgKgjQYQ35TEqwqUgZezCtXF/coKGLPtvlLd+cLXBmBocHiAAQUmBQABAAEBBWFwcElEBKZlwJQiNQAxGEEKTShkSSJbNQFJIQRbNQIhCVs1CDYaABdJQQDLIjUEIzUGSSEKDEAAbEkhCwxAAFVJIQwMQAA4IQwSRDQBIQUSRClkKmRQSTUDVwBgNANXYAhQNANXaAhQNANXcAhQNANXeAhQNANXgAhQNQdCCdghCxJENhoBNf+AAQM0/1AhDa9QQgB6IQoSRDYaATX/KTT/UEIAakkhDgxAADdJIQ8MQAAWIQ8SRDYaATX/gAECNP9QIQ2vUEIARiEOEkQ0ASEFEkQpZCpkUEk1A1eIIDUHQgl0geeI6U8SRCg1/yo0/1AyA1BCABg2GgIXNQQ2GgM2GgEXSSEHDEAGYiEHEkQhBTQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDSUpKSkpXAGA1/yEQWzX+IRFbNf1IKDX8IRJbNfshE1s1+iEUWzX5V4ggNfhXqDM194HbAVs19kk1BTX1gASixbPbNPVQsDT1IlVJIQcMQAVhSSEFDEACAyEFEkQ09VcBCDX0NPQXSTXzIg1ENPYlDkQ091cAEUk18iJbNPMISTXxJQ5ENPc08jTxFlwAXAA18DTzNP6ICNg08FcAEUk17yJbNPMJSTXuIg9ENPA07zTuFlwAXAA17Ss0+hZQAzXrMgp4NeoyCmA06gkWMgo0+3AASBZQNemxIrIBNPOyEiSyEDTrshQ0/rIRtiKyASEGshA0+rIYJwSyGjTzFrIaNP6yMDT7sjA0+rIyszIKYDTqCTTpIlsJFjIKNPtwAEg06SEEWwkWULcBPlcEAFA17IAIAAAAAAAAC8c07FCwNOxJNesiWzXqNOshBFs16TT2NOoISTXoJQ5ENO1XIhFJNeciWzTpCEk15iUORDTtNOc05hZcAFwiNeU06iINNOkiDRBENOo06BJENOVXIhFJNeQiWzXjNOk04xJENOhJCUk14iIPRLEisgE06LIII7IQMQCyB7M040kJSTXhIg9ENOU05DThFlwAXCI14LEisgE047ISJLIQMQCyFDT7shGzNOBXABFJNd8iW0k13kkJSTXdIg9EsSKyATTeshIkshAxALIUNP6yEbOACAAAAAAAAAwSNOoWNOkWUFCwNOoWNOkWUDUHgASCY7YqNOoWUDT7FlA06RZQsDT/NP40/TT8NPs0+jT5NPgjMgY04DTfNN0WXABcADTiQgUmSDT1VwEINfSxIrIBIQayEDQIshizNPQXSTXzIg1ENPYlDkQ091cAEUk18iJbNPMISTXxJQ5ENPc08jTxFlwAXAA18DTzNP6IBss08FcAEUk17yJbNPMJSTXuIg9ENPA07zTuFlwAXAA17Ss0+hZQAzXrMgp4NeoyCmA06gkWMgo0+3AASBZQNemxIrIBNPOyEiSyEDTrshQ0/rIRtiKyASEGshA0+rIYJwSyGjTzFrIaNP6yMDT7sjA0+rIyszIKYDTqCTTpIlsJFjIKNPtwAEg06SEEWwkWULcBPlcEAFA17IAIAAAAAAAACa807FCwNOxJNesiWzXqNOshBFs16TT2NOoISTXoJQ5ENO1XIhFJNeciWzTpCEk15iUORDTtNOc05hZcAFwiNeU06iINNOkiDRBENOo06BJENOVXIhFJNeQiWzXjNOk04xJENOg06glJNeIiD0Q04zTpCUk14SIPRDTlNOQ04RZcAFwiNeArNPkWUAM13jIKeDXdMgpgNN0JNOoJFjIKNP1wAEgWUDXcsSKyATTqsggjshA03rIHtiKyATTpshIkshA03rIUNPuyEbYisgEhBrIQNPmyGIAE9NAKCbIaNOoWNOkWULIaNPMWsho0/bIwNPuyMDT9sjA0+bIyszIKYDTdCTTcIlsJFjIKNP1wAEg03CEEWwkWULcCPlcEAFA134AIAAAAAAAACfc031CwNN9JNd4hCVs13TTiNN4iWwhJNdwlDkQ04FcREUk12yJbNN4hBFsISTXaJQ5ENOA02zTaFlwAXBE12TTdNPMPRDTdIg1ENNxJCUk12CIPRLEisgE03LIII7IQMQCyB7M02VciEUk11yJbSTXWSQlJNdUiD0Q02TTXNNUWXABcIjXUsSKyATTWshIkshAxALIUNPuyEbM01FcAEUk10yJbSTXSSQlJNdEiD0Q01DTTNNEWXABcADXQsSKyATTSshIkshAxALIUNP6yEbM00FcREUk1zyJbSTXOSQlJNc0iD0SxIrIBNM6yEiSyEDEAshQ0/bIRs4AIAAAAAAAACfw03RZQsDTdFjUHgATfvVJPNOoWUDT7FlA06RZQsDT/NP40/TT8NPs0+jT5NPgjMgY00DTPNM0WXABcETTYQgHPSSMMQAA+SDT2JQ5ENPdXABEiWyUORDEANPgSRIAIAAAAAAAACC2wKDUHNP80/jT9NPw0+zT6NPk0+CIyBjT3NPZCAYtINPVXASA19DT2JQ5ENPdXABEiWyUORDT0NfMxADT4EkQ0+DTzE0SACAAAAAAAAAa6sCg1BzT/NP40/TT8NPs0+jT5NPMjMgY09zT2QgE8IhJEgcCaDIgDCbEisgEhBrIQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSVcAYDX/IRBbNf4hEVs1/UgoNfwhEls1+yETWzX6IRRbNfmABBczPrc0/1A0/hZQNP0WUDT8UDT7FlA0+hZQNPkWULCBEa9JNfhJUDT4UEk190lXABEhBK9cAFwASTX2SVcRESEEr1wAXBE19TT9NP4TRDT7NP4TNPs0/RMQRCEIiAJQsSKyASKyEiSyEDIKshQ0/rIRsyEIiAI4sSKyASKyEiSyEDIKshQ0/bIRsyEIiAIgsSKyASKyEiSyEDIKshQ0+7IRsyJENPoWATT5FgETRDT+NP0TRDT/NP40/TT8NPs0+jT5MQAjMgY09UlXIhEhBK9cAFwiIkIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT8QQA9NPQ09RZQNPYWUDT3UDT4FlA0+RZQNPoWUDT7UDT+UDT/FlApSwFXAH9nKksBV39kZ0ghBTUBMgY1AkIBJDT/SQlJNfMiD0SxIrIBNP+yCCOyEDT7sgezNP5XIhFJNfIiW0k18UkJSTXwIg9EsSKyATTxshIkshA0+7IUNPiyEbM0/jTyNPAWXABcIlcAESJbSTXvSQkiD0SxIrIBNO+yEiSyEDT7shQ09bIRszTzSQlJNe4iD0SxIrIBNPOyCCOyEDT7sgezMgpgMgp4CTTuCUk17TTuCDTtCSIPRLEisgE07bIII7IQNPuyB7OxIrIBIrISJLIQMgmyFTIKshQ0+LIRs7EisgEishIkshAyCbIVMgqyFDT2shGzsSKyASKyEiSyEDIJshUyCrIUNPWyEbNCAAAxGSEVEkSxIrIBIQayEDQIshghFbIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/pzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: {
    api_migrate: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 227,
  unsupported: [],
  version: 11,
  warnings: [`API api_migrate may use up to 11 transaction references, but the limit is 8. API api_migrate starts at /app/poolMigrator.rsh:144:46:application.`, `Step 0 may use up to 9 transaction references, but the limit is 8. Step 0 starts at /app/poolMigrator.rsh:67:11:dot.`, `Step 2 calls a remote object at /app/poolMigrator.rsh:108:28:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/poolMigrator.rsh:128:33:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 11 transaction references, but the limit is 8. Step 2 starts at /app/poolMigrator.rsh:144:46:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"bool","name":"elem4","type":"bool"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"internalType":"struct T11","name":"v4289","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"bool","name":"elem4","type":"bool"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T7","name":"_changeAdmin0_263","type":"tuple"},{"internalType":"bool","name":"_halt0_263","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_migrate0_263","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_withdraw0_263","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1722","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2093","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T2","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T13","name":"v0","type":"tuple"}],"name":"_reach_oe_v2479","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v2551","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v2556","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T2","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T13","name":"v0","type":"tuple"}],"name":"_reach_oe_v3015","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"v0","type":"tuple"}],"name":"_reach_oe_v3090","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"migrated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"uint256","name":"v3","type":"uint256"}],"name":"withdrew","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T7","name":"_changeAdmin0_263","type":"tuple"},{"internalType":"bool","name":"_halt0_263","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_migrate0_263","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_withdraw0_263","type":"tuple"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v4296","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4269","type":"address"}],"name":"changeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"halt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"info","outputs":[{"components":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"name","type":"tuple"},{"internalType":"address payable","name":"v2lpToken","type":"address"},{"internalType":"address payable","name":"v3lpToken","type":"address"},{"internalType":"bool","name":"tokA","type":"bool"},{"internalType":"address payable","name":"tokB","type":"address"},{"internalType":"address payable","name":"v2PoolId","type":"address"},{"internalType":"address payable","name":"v3PoolId","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4278","type":"uint256"}],"name":"migrate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4283","type":"uint256"}],"name":"withdraw","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060408190526200087f38819003908190601f8201601f191684016001600160401b03811185821017620000c9575b60405283396101408112620000c457620000c2916200005e6200005162000137565b9282518452820162000169565b60208301526200006d620001bd565b60408301526200007c620001d5565b60608301526200008b62000235565b9082015262000099620001ed565b60a0820152620000a862000205565b60c0820152620000b76200021d565b60e082015262000287565b005b600080fd5b620000d3620000d9565b6200002f565b50634e487b7160e01b600052604160045260246000fd5b60e081019081106001600160401b038211176200010c57604052565b62000116620000d9565b604052565b606081019081106001600160401b038211176200010c57604052565b6040519061010082016001600160401b038111838210176200010c57604052565b6040519062000167826200011b565b565b606090609f190112620000c45760405190606082016001600160401b03811183821017620001ad575b6040528160a051815260c0516020820152604060e051910152565b620001b7620000d9565b62000192565b61010051906001600160a01b0382168203620000c457565b61012051906001600160a01b0382168203620000c457565b61016051906001600160a01b0382168203620000c457565b61018051906001600160a01b0382168203620000c457565b6101a051906001600160a01b0382168203620000c457565b61014051908115158203620000c457565b60405190606082016001600160401b0381118382101762000277575b60405260006040838281528260208201520152565b62000281620000d9565b62000262565b620001679060008080554360035560c0604091825190620002a882620000f0565b80825280602083015280848301528060608301528351620002c981620000f0565b620002d362000246565b815281602082015281858201528160608201528160808201528160a0820152818482015260808301528060a08301528351938085019085821060018060401b038311176200032d575b5280845260208401520152620004b2565b62000337620000d9565b6200031c565b604051906200034c826200011b565b8160005b606081106200035d575050565b6020906200036a62000246565b818401520162000350565b60405190608082016001600160401b03811183821017620003d0575b604052816200039f62000246565b8152620003ab6200033d565b6020820152620003ba6200033d565b60408201526060620003cb6200033d565b910152565b620003da620000d9565b62000391565b61014060e06200016793959461016084019660018060a01b038091168552815160208601526200042c602083015160408701906040809180518452602081015160208501520151910152565b6040820151811660a086810191909152606083015190911660c086015260808201511515838601528101516001600160a01b031661010085015260c08101516001600160a01b031661012085015201516001600160a01b0316910152565b9060038110156200049c5760051b0190565b634e487b7160e01b600052603260045260246000fd5b620004bc62000375565b90620004dc620004d6620004d260045460ff1690565b1590565b620006cf565b60407f0c991479ccc71b763d1cf864096de19bb9d464e6aaead0c2fc87d5139f1438e58151806200050f853383620003e0565b0390a16200052a82518015908115620006c2575b50620006f0565b600092838151526060620005d460208681855101528685855101526200059d845182860190815152855162000560825160200190565b5285518151604001525180519062000597888584015193015115156200058562000158565b938c8552868501528984019015159052565b620007a5565b8086860152620005ce828201518784820151910151151590620005bf62000158565b8b815294850152151587840152565b62000810565b910152606082019062000656620006126200064860a0620005fb865160018060a01b031690565b94870180519097906200061e906001600160a01b03165b6001600160a01b031690565b6000196001841b0196871603620006b6576200063a8962000711565b01516001600160a01b031690565b94516001600160a01b031690565b9216918203620006835750506200066d9062000732565b62000679341562000753565b6200016762000774565b5162000698906001600160a01b031662000612565b03620006a9576200066d9062000732565b506200066d600162000732565b6200063a600162000711565b9050600154143862000523565b15620006d757565b60405163100960cb60e01b815260096004820152602490fd5b15620006f857565b60405163100960cb60e01b8152600a6004820152602490fd5b156200071957565b60405163100960cb60e01b8152600b6004820152602490fd5b156200073a57565b60405163100960cb60e01b8152600c6004820152602490fd5b156200075b57565b60405163100960cb60e01b8152600d6004820152602490fd5b5060405163100960cb60e01b8152600e6004820152602490fd5b50634e487b7160e01b600052601160045260246000fd5b9190620007b16200033d565b9260005b60038110620007c45750508252565b80620007d3600192846200048a565b51620007e082886200048a565b52620007ed81876200048a565b50600019811462000800575b01620007b5565b6200080a6200078e565b620007f9565b91906200081c6200033d565b9260005b60038110620008325750506020830152565b8062000841600192846200048a565b516200084e82886200048a565b526200085b81876200048a565b5060001981146200086e575b0162000820565b620008786200078e565b6200086756fe`,
  BytecodeLen: 2175,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './poolMigrator.rsh:231:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './poolMigrator.rsh:144:46:after expr stmt semicolon',
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
  "Admin": Admin,
  "changeAdmin": changeAdmin,
  "halt": halt,
  "migrate": migrate,
  "withdraw": withdraw
  };
export const _APIs = {
  changeAdmin: changeAdmin,
  halt: halt,
  migrate: migrate,
  withdraw: withdraw
  };
