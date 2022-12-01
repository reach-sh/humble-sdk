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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc3, ctc3, ctc6]
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
  const ctc3 = stdlib.T_Struct([['oldLPAmt', ctc0], ['oldlpToken', ctc1], ['tokA', ctc1], ['tokB', ctc1], ['oldPoolId', ctc2], ['newlpToken', ctc1], ['newPoolId', ctc2]]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7, ctc0]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0, ctc11]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  
  
  const v1389 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1390 = [v1389, v1389, v1389, v1389];
  const v1394 = stdlib.protect(ctc3, interact.opts, 'for Admin\'s interact field opts');
  const v1395 = v1394.oldLPAmt;
  const v1396 = v1394.oldlpToken;
  const v1397 = v1394.tokA;
  const v1398 = v1394.tokB;
  const v1399 = v1394.oldPoolId;
  const v1400 = v1394.newlpToken;
  const v1401 = v1394.newPoolId;
  
  const v1411 = stdlib.gt(v1395, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:49:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1411, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:38:15:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:38:19:function exp)'],
    msg: 'Must exchange more than 0 LP tokens',
    who: 'Admin'
    });
  const v1417 = stdlib.digest([ctc2], [v1399]);
  const v1418 = stdlib.digest([ctc2], [v1401]);
  const v1419 = stdlib.digestEq(v1417, v1418);
  const v1420 = v1419 ? false : true;
  stdlib.assert(v1420, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:28:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:50:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)', 'at ./liquidityMigrator.transfer.rsh:38:15:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:38:19:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v1423 = stdlib.tokenEq(v1397, v1398);
  const v1425 = stdlib.tokenEq(v1397, v1396);
  const v1427 = stdlib.tokenEq(v1397, v1400);
  const v1428 = v1427 ? false : true;
  const v1429 = v1425 ? false : v1428;
  const v1430 = v1423 ? false : v1429;
  const v1431 = stdlib.tokenEq(v1398, v1396);
  const v1433 = stdlib.tokenEq(v1398, v1400);
  const v1434 = v1433 ? false : true;
  const v1435 = v1431 ? false : v1434;
  const v1436 = stdlib.tokenEq(v1396, v1400);
  const v1437 = v1436 ? false : true;
  const v1438 = v1435 ? v1437 : false;
  const v1439 = v1430 ? v1438 : false;
  stdlib.assert(v1439, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:29:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:50:16:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)', 'at ./liquidityMigrator.transfer.rsh:38:15:application call to [unknown function] (defined at: ./liquidityMigrator.transfer.rsh:38:19:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1395, v1396, v1400, v1397, v1398, v1399, v1401],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1442, v1443, v1444, v1445, v1446, v1447, v1448], secs: v1450, time: v1449, didSend: v986, from: v1441 } = txn1;
      
      const v1451 = v1390[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0')];
      const v1452 = stdlib.Array_set(v1451, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v1453 = stdlib.Array_set(v1390, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'), v1452);
      const v1455 = v1453[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1')];
      const v1456 = stdlib.Array_set(v1455, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v1457 = stdlib.Array_set(v1453, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1'), v1456);
      const v1461 = v1457[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2')];
      const v1462 = stdlib.Array_set(v1461, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v1463 = stdlib.Array_set(v1457, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2'), v1462);
      const v1470 = v1463[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '3')];
      const v1471 = stdlib.Array_set(v1470, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
      const v1472 = stdlib.Array_set(v1463, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '3'), v1471);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1443
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1444
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1445
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1446
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1442, v1443, v1444, v1445, v1446, v1447, v1448], secs: v1450, time: v1449, didSend: v986, from: v1441 } = txn1;
  const v1451 = v1390[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0')];
  const v1452 = stdlib.Array_set(v1451, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v1453 = stdlib.Array_set(v1390, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'), v1452);
  const v1455 = v1453[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1')];
  const v1456 = stdlib.Array_set(v1455, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v1457 = stdlib.Array_set(v1453, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '1'), v1456);
  const v1459 = stdlib.tokenEq(v1444, v1443);
  const v1460 = v1459 ? false : true;
  stdlib.assert(v1460, {
    at: './liquidityMigrator.transfer.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v1461 = v1457[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2')];
  const v1462 = stdlib.Array_set(v1461, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v1463 = stdlib.Array_set(v1457, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '2'), v1462);
  const v1465 = stdlib.tokenEq(v1445, v1443);
  const v1467 = stdlib.tokenEq(v1445, v1444);
  const v1468 = v1467 ? false : true;
  const v1469 = v1465 ? false : v1468;
  stdlib.assert(v1469, {
    at: './liquidityMigrator.transfer.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v1470 = v1463[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '3')];
  const v1471 = stdlib.Array_set(v1470, '0', stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '0'));
  const v1472 = stdlib.Array_set(v1463, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:53:11:dot', stdlib.UInt_max, '3'), v1471);
  const v1474 = stdlib.tokenEq(v1446, v1443);
  const v1476 = stdlib.tokenEq(v1446, v1444);
  const v1477 = v1476 ? false : true;
  const v1478 = stdlib.tokenEq(v1446, v1445);
  const v1479 = v1478 ? false : true;
  const v1480 = v1476 ? false : v1479;
  const v1481 = v1474 ? false : v1480;
  stdlib.assert(v1481, {
    at: './liquidityMigrator.transfer.rsh:53:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  ;
  const v1486 = stdlib.digest([ctc2], [v1447]);
  const v1487 = stdlib.digest([ctc2], [v1448]);
  const v1488 = stdlib.digestEq(v1486, v1487);
  const v1489 = v1488 ? false : true;
  stdlib.assert(v1489, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:28:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:62:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)'],
    msg: 'Identical V2 and V3 Pool Ids',
    who: 'Admin'
    });
  const v1492 = stdlib.tokenEq(v1445, v1446);
  const v1504 = v1474 ? false : v1477;
  const v1505 = stdlib.tokenEq(v1443, v1444);
  const v1506 = v1505 ? false : true;
  const v1507 = v1504 ? v1506 : false;
  const v1508 = v1492 ? false : v1507;
  stdlib.assert(v1508, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:30:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:29:20:application call to "checkDistinct" (defined at: ./liquidityMigrator.shared.rsh:29:45:function exp)', 'at ./liquidityMigrator.transfer.rsh:62:14:application call to "CheckOpts" (defined at: ./liquidityMigrator.transfer.rsh:25:30:function exp)'],
    msg: 'Found duplicate token',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v1441, v1442, v1443, v1444, v1445, v1446, v1447, v1448, v1472],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1449,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0'), [[v1442, v1443]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1512, time: v1511, didSend: v1070, from: v1510 } = txn2;
      
      ;
      const v1513 = v1472[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
      const v1514 = v1513[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
      const v1515 = stdlib.add(v1514, v1442);
      const v1519 = stdlib.Array_set(v1513, '0', v1515);
      const v1520 = stdlib.Array_set(v1472, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0'), v1519);
      sim_r.txns.push({
        amt: v1442,
        kind: 'to',
        tok: v1443
        });
      const v1524 = v1520[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1525 = v1524[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1529 = stdlib.sub(v1525, v1442);
      const v1533 = stdlib.Array_set(v1524, '0', v1529);
      const v1534 = stdlib.Array_set(v1520, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0'), v1533);
      const v1535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1536 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1447,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '3'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1'),
            toks: [v1445, v1446, v1443]
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v1535 /* simTokensRecv */, ctc5.defaultValue /* simReturnVal */];})();
      const v1537 = await txn2.getOutput('internal', 'v1536', ctc6, v1536);
      const v1539 = v1537[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1540 = v1537[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
      const v1542 = v1540[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1543 = v1540[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
      const v1554 = v1534[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2')];
      const v1555 = v1554[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1556 = stdlib.add(v1555, v1542);
      const v1560 = stdlib.Array_set(v1554, '0', v1556);
      const v1561 = stdlib.Array_set(v1534, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2'), v1560);
      const v1563 = v1561[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '3')];
      const v1564 = v1563[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
      const v1565 = stdlib.add(v1564, v1543);
      const v1569 = stdlib.Array_set(v1563, '0', v1565);
      const v1570 = stdlib.Array_set(v1561, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '3'), v1569);
      const v1582 = v1570[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '2')];
      const v1583 = v1582[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '0')];
      const v1618 = stdlib.sub(v1583, v1542);
      const v1622 = stdlib.Array_set(v1582, '0', v1618);
      const v1623 = stdlib.Array_set(v1570, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '2'), v1622);
      const v1624 = v1623[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '3')];
      const v1625 = v1624[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
      const v1629 = stdlib.sub(v1625, v1543);
      const v1633 = stdlib.Array_set(v1624, '0', v1629);
      const v1634 = stdlib.Array_set(v1623, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '3'), v1633);
      const v1635 = [v1442];
      const v1636 = {
        A: v1542,
        B: v1543
        };
      const v1637 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1448,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '2'),
            fees: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:80:16:application', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '2'),
            toks: [v1444, v1445, v1446]
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v1635 /* simTokensRecv */, ctc0.defaultValue /* simReturnVal */];})();
      const v1638 = await txn2.getOutput('internal', 'v1637', ctc8, v1637);
      const v1640 = v1638[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
      const v1641 = v1638[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '1')];
      const v1642 = v1638[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '2')];
      const v1643 = v1641[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
      const v1648 = stdlib.add(v1539, v1640);
      const v1652 = v1634[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '1')];
      const v1653 = v1652[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
      const v1654 = stdlib.add(v1653, v1643);
      const v1658 = stdlib.Array_set(v1652, '0', v1654);
      const v1659 = stdlib.Array_set(v1634, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '1'), v1658);
      const v1668 = v1659[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:51:15:application', stdlib.UInt_max, '2')];
      const v1669 = v1668[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:51:15:application', stdlib.UInt_max, '0')];
      const v1670 = v1659[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:52:15:application', stdlib.UInt_max, '3')];
      const v1671 = v1670[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:52:15:application', stdlib.UInt_max, '0')];
      const v1672 = v1659[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
      const v1673 = v1672[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
      const v1695 = stdlib.sub(v1648, v1648);
      sim_r.txns.push({
        kind: 'from',
        to: v1441,
        tok: undefined /* Nothing */
        });
      const v1703 = stdlib.sub(v1669, v1669);
      const v1707 = stdlib.Array_set(v1668, '0', v1703);
      const v1708 = stdlib.Array_set(v1659, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '2'), v1707);
      sim_r.txns.push({
        kind: 'from',
        to: v1441,
        tok: v1445
        });
      const v1709 = v1708[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '3')];
      const v1710 = v1709[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
      const v1714 = stdlib.sub(v1710, v1671);
      const v1718 = stdlib.Array_set(v1709, '0', v1714);
      const v1719 = stdlib.Array_set(v1708, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '3'), v1718);
      sim_r.txns.push({
        kind: 'from',
        to: v1441,
        tok: v1446
        });
      const v1720 = v1719[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
      const v1721 = v1720[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
      const v1725 = stdlib.sub(v1721, v1673);
      const v1729 = stdlib.Array_set(v1720, '0', v1725);
      const v1730 = stdlib.Array_set(v1719, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'), v1729);
      sim_r.txns.push({
        kind: 'from',
        to: v1441,
        tok: v1443
        });
      const v1731 = v1730[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '1')];
      const v1732 = v1731[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1441,
        tok: v1444
        });
      const v1745 = (stdlib.le(await ctc.getBalance(), v1695) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1695));
      sim_r.txns.push({
        kind: 'from',
        to: v1441,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v1446
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1445
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1444
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1443
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
    tys: [ctc10, ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1512, time: v1511, didSend: v1070, from: v1510 } = txn2;
  ;
  const v1513 = v1472[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
  const v1514 = v1513[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0')];
  const v1515 = stdlib.add(v1514, v1442);
  const v1516 = stdlib.le(v1515, stdlib.UInt_max);
  stdlib.assert(v1516, {
    at: './liquidityMigrator.transfer.rsh:90:11:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1519 = stdlib.Array_set(v1513, '0', v1515);
  const v1520 = stdlib.Array_set(v1472, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:90:11:dot', stdlib.UInt_max, '0'), v1519);
  ;
  const v1521 = stdlib.addressEq(v1441, v1510);
  stdlib.assert(v1521, {
    at: './liquidityMigrator.transfer.rsh:90:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v1524 = v1520[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1525 = v1524[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1529 = stdlib.sub(v1525, v1442);
  const v1530 = stdlib.ge(v1529, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1530, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1533 = stdlib.Array_set(v1524, '0', v1529);
  const v1534 = stdlib.Array_set(v1520, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0'), v1533);
  const v1535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1536 = undefined /* Remote */;
  const v1537 = await txn2.getOutput('internal', 'v1536', ctc6, v1536);
  const v1539 = v1537[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1540 = v1537[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
  const v1542 = v1540[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1543 = v1540[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '1')];
  const v1551 = stdlib.le(v1539, stdlib.UInt_max);
  stdlib.assert(v1551, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1554 = v1534[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2')];
  const v1555 = v1554[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1556 = stdlib.add(v1555, v1542);
  const v1557 = stdlib.le(v1556, stdlib.UInt_max);
  stdlib.assert(v1557, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1560 = stdlib.Array_set(v1554, '0', v1556);
  const v1561 = stdlib.Array_set(v1534, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '2'), v1560);
  const v1563 = v1561[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '3')];
  const v1564 = v1563[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '0')];
  const v1565 = stdlib.add(v1564, v1543);
  const v1566 = stdlib.le(v1565, stdlib.UInt_max);
  stdlib.assert(v1566, {
    at: './liquidityMigrator.shared.rsh:93:30:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1569 = stdlib.Array_set(v1563, '0', v1565);
  const v1570 = stdlib.Array_set(v1561, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:93:30:application', stdlib.UInt_max, '3'), v1569);
  const v1576 = stdlib.eq(v1539, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:95:20:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1576, {
    at: './liquidityMigrator.shared.rsh:95:12:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'Received unexpected tokens',
    who: 'Admin'
    });
  const v1577 = stdlib.gt(v1542, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:96:21:decimal', stdlib.UInt_max, '0'));
  const v1578 = stdlib.gt(v1543, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:96:28:decimal', stdlib.UInt_max, '0'));
  const v1579 = v1577 ? v1578 : false;
  stdlib.assert(v1579, {
    at: './liquidityMigrator.shared.rsh:96:12:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:93:38:application call to "doWithdraw" (defined at: ./liquidityMigrator.shared.rsh:78:34:function exp)'],
    msg: 'Received invalid A or B amount',
    who: 'Admin'
    });
  const v1582 = v1570[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '2')];
  const v1583 = v1582[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:70:23:application', stdlib.UInt_max, '0')];
  const v1584 = stdlib.eq(v1542, v1583);
  stdlib.assert(v1584, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:101:16:application call to "confirmAmts" (defined at: ./liquidityMigrator.shared.rsh:67:55:function exp)'],
    msg: 'Invalid contract state',
    who: 'Admin'
    });
  const v1586 = v1570[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '3')];
  const v1587 = v1586[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:72:21:application', stdlib.UInt_max, '0')];
  const v1588 = stdlib.eq(v1543, v1587);
  stdlib.assert(v1588, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./liquidityMigrator.shared.rsh:72:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./liquidityMigrator.transfer.rsh:101:16:application call to "confirmAmts" (defined at: ./liquidityMigrator.shared.rsh:67:55:function exp)'],
    msg: 'Invalid contract state',
    who: 'Admin'
    });
  const v1618 = stdlib.sub(v1583, v1542);
  const v1619 = stdlib.ge(v1618, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1619, {
    at: './liquidityMigrator.transfer.rsh:82:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1622 = stdlib.Array_set(v1582, '0', v1618);
  const v1623 = stdlib.Array_set(v1570, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '2'), v1622);
  const v1624 = v1623[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '3')];
  const v1625 = v1624[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
  const v1629 = stdlib.sub(v1625, v1543);
  const v1630 = stdlib.ge(v1629, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1630, {
    at: './liquidityMigrator.transfer.rsh:82:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1633 = stdlib.Array_set(v1624, '0', v1629);
  const v1634 = stdlib.Array_set(v1623, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '3'), v1633);
  const v1635 = [v1442];
  const v1636 = {
    A: v1542,
    B: v1543
    };
  const v1637 = undefined /* Remote */;
  const v1638 = await txn2.getOutput('internal', 'v1637', ctc8, v1637);
  const v1640 = v1638[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
  const v1641 = v1638[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '1')];
  const v1642 = v1638[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '2')];
  const v1643 = v1641[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
  const v1648 = stdlib.add(v1539, v1640);
  const v1649 = stdlib.le(v1648, stdlib.UInt_max);
  stdlib.assert(v1649, {
    at: './liquidityMigrator.transfer.rsh:82:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1652 = v1634[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '1')];
  const v1653 = v1652[stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '0')];
  const v1654 = stdlib.add(v1653, v1643);
  const v1655 = stdlib.le(v1654, stdlib.UInt_max);
  stdlib.assert(v1655, {
    at: './liquidityMigrator.transfer.rsh:82:34:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1658 = stdlib.Array_set(v1652, '0', v1654);
  const v1659 = stdlib.Array_set(v1634, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:82:34:application', stdlib.UInt_max, '1'), v1658);
  const v1664 = stdlib.ge(v1642, v1442);
  stdlib.assert(v1664, {
    at: './liquidityMigrator.transfer.rsh:84:16:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:105:35:application call to "doDeposit" (defined at: ./liquidityMigrator.transfer.rsh:66:42:function exp)'],
    msg: 'LP change due to slippage',
    who: 'Admin'
    });
  const v1666 = stdlib.gt(v1642, stdlib.checkedBigNumberify('./liquidityMigrator.transfer.rsh:106:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1666, {
    at: './liquidityMigrator.transfer.rsh:106:12:application',
    fs: [],
    msg: 'Possible slippage in new pool',
    who: 'Admin'
    });
  const v1668 = v1659[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:51:15:application', stdlib.UInt_max, '2')];
  const v1669 = v1668[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:51:15:application', stdlib.UInt_max, '0')];
  const v1670 = v1659[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:52:15:application', stdlib.UInt_max, '3')];
  const v1671 = v1670[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:52:15:application', stdlib.UInt_max, '0')];
  const v1672 = v1659[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
  const v1673 = v1672[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:53:15:application', stdlib.UInt_max, '0')];
  const v1695 = stdlib.sub(v1648, v1648);
  const v1696 = stdlib.ge(v1695, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1696, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1703 = stdlib.sub(v1669, v1669);
  const v1704 = stdlib.ge(v1703, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1704, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1707 = stdlib.Array_set(v1668, '0', v1703);
  const v1708 = stdlib.Array_set(v1659, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '2'), v1707);
  ;
  const v1709 = v1708[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '3')];
  const v1710 = v1709[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
  const v1714 = stdlib.sub(v1710, v1671);
  const v1715 = stdlib.ge(v1714, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1715, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1718 = stdlib.Array_set(v1709, '0', v1714);
  const v1719 = stdlib.Array_set(v1708, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '3'), v1718);
  ;
  const v1720 = v1719[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
  const v1721 = v1720[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0')];
  const v1725 = stdlib.sub(v1721, v1673);
  const v1726 = stdlib.ge(v1725, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1726, {
    at: './liquidityMigrator.shared.rsh:54:10:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1729 = stdlib.Array_set(v1720, '0', v1725);
  const v1730 = stdlib.Array_set(v1719, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:54:10:application', stdlib.UInt_max, '0'), v1729);
  ;
  const v1731 = v1730[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '1')];
  const v1732 = v1731[stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:23:application', stdlib.UInt_max, '0')];
  const v1738 = stdlib.sub(v1732, v1732);
  const v1739 = stdlib.ge(v1738, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:59:53:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1739, {
    at: './liquidityMigrator.shared.rsh:59:53:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1745 = (stdlib.le(await ctc.getBalance(), v1695) ? stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:29:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1695));
  const v1746 = stdlib.safeAdd(v1745, v1695);
  const v1750 = stdlib.sub(v1746, v1745);
  const v1751 = stdlib.ge(v1750, stdlib.checkedBigNumberify('./liquidityMigrator.shared.rsh:63:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1751, {
    at: './liquidityMigrator.shared.rsh:63:35:application',
    fs: ['at ./liquidityMigrator.transfer.rsh:110:18:application call to "clearBalances" (defined at: ./liquidityMigrator.shared.rsh:39:53:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  stdlib.protect(ctc9, await interact.done(v1642, v1636), {
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
  appApproval: `ByAMAAQBCP///////////wEGEKCNBiAoMAUmBAABAAEBBWFwcElEIjUAMRhBBrgoZEkiWzUBSSVbNQIhBls1CDYaABdJQQAHIjUEJDUGADYaAhc1BDYaAzYaARdJJAxABHIkEkSxIrIBIQWyEDQIshizJDQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDSUpKSVcAIDX/IQhbNf4hCVs1/SEKWzX8gThbNfuBQFs1+ldYRDX5gASai5F0sDT5VwARSTX4Ils0/ghJNfchBA5ENPk0+DT3FlwAXAA19jT+NP2IBkA0/zEAEkQ09lcAEUk19SJbNP4JSTX0Ig9ENPY09TT0FlwAXAA18ys0A1dICFADNfEyCng18DIKYDTwCRYyCjT7cABIFlAyCjT6cABIFlA177EisgE0/rISI7IQNPGyFDT9shG2IrIBIQWyEDQDgUhbshiABKZlwJSyGjT+FrIaNP2yMDT7sjA0+rIwszIKYDTwCTTvIlsJFjIKNPtwAEg07yVbCRZQMgo0+nAASDTvIQZbCRZQtwE+VwQAUDXygAgAAAAAAAAGADTyULA08kk18SJbNfA08VcIEEk17yJbNe407yVbNe008CEEDkQ081ciEUk17CJbNO4ISTXrIQQORDTzNOw06xZcAFwiSTXqVzMRSTXpIls07QhJNeghBA5ENOo06TToFlwAXDM15zTwIhJENO4iDTTtIg0QRDTnVyIRSTXmIls15TTuNOUSRDTtNOdXMxEiWxJENOU07glJNeQiD0Q05zTmNOQWXABcIkk141czEUk14iJbNO0JSTXhIg9ENOM04jThFlwAXDM14Cs0A1dQCFADNd4yCng13TIKYDTdCRYyCjT8cABIFlA13LEisgE07rISI7IQNN6yFDT7shG2IrIBNO2yEiOyEDTeshQ0+rIRtiKyASEFshA0A4FQW7IYgAT00AoJsho07hY07RZQsho0/hayGjT8sjA0+7IwNPqyMDT8sjCzMgpgNN0JNNwiWwkWMgo0/HAASDTcJVsJFlC3Aj5XBABQNd+ACAAAAAAAAAZlNN9QsDTfSTXeIQZbNd008DTeIlsISTXcIQQORDTgVxERSTXbIls03iVbCEk12iEEDkQ04DTbNNoWXABcETXZNN00/g9ENN0iDUQ02VciEUk12CJbNdc02VczESJbNdY02VcAESJbNdU03EkJSTXUIg9EsSKyATTcsggkshA0/7IHszTXSQlJNdMiD0Q02TTYNNMWXABcIjXSsSKyATTXshIjshA0/7IUNPuyEbM00lczEUk10SJbNNYJSTXQIg9ENNI00TTQFlwAXDM1z7EisgE01rISI7IQNP+yFDT6shGzNM9XABFJNc4iWzTVCUk1zSIPRLEisgE01bISI7IQNP+yFDT9shGzNM80zjTNFlwAXABXEREiW0k1zEkJIg9EsSKyATTMshIjshA0/7IUNPyyEbMyCmAyCngJNNQJSTXLNNQINMsJIg9EsSKyATTLsggkshA0/7IHs7EisgEishIjshAyCbIVMgqyFDT6shGzsSKyASKyEiOyEDIJshUyCrIUNPuyEbOxIrIBIrISI7IQMgmyFTIKshQ0/LIRs7EisgEishIjshAyCbIVMgqyFDT9shGzQgGuSIHAmgyIAiyxIrIBIQWyECKyGIAGBzEAMgkSsh6AAQeyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkkiWzX/JVs1/iEGWzX9gRhbNfwhCFs1+yEJWzX6IQpbNfmABP4mOJ40/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsIERr0k1+ElQNPhQNPhQSTX3SVcAESWvXABcAEk19klXERElr1wAXBE19TT9NP4TRDT1SVciESWvXABcIjX0NPw0/hM0/DT9ExBENPRJVzMRJa9cAFwzNfM0+zT+EjXyNPs0/RI18TTyFDTxFDT7NPwTEBBEIQeIATmxIrIBIrISI7IQMgqyFDT+shGzIQeIASGxIrIBIrISI7IQMgqyFDT9shGzIQeIAQmxIrIBIrISI7IQMgqyFDT8shGzIQeIAPGxIrIBIrISI7IQMgqyFDT7shGzNPoWATT5FgETRDT8NPsTNPIUNPEUEDT+NP0TEBBEMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPNQKUsBVwB/ZypLAVd/HWdIJDUBMgY1AkIALTEZIQsSRLEisgEhBbIQNAiyGCELshmzsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJNABJSkkkCDUAOBQyChJEOBAjEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 156,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/liquidityMigrator.shared.rsh:93:30:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/liquidityMigrator.transfer.rsh:82:34:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"internalType":"struct T0","name":"v1827","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"},{"internalType":"address payable","name":"elem7","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"elem1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T5","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"v0","type":"tuple"}],"name":"_reach_oe_v1536","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"v0","type":"tuple"}],"name":"_reach_oe_v1637","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1829","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200293f388190036080601f8201601f19168101906001600160401b03821190821017620007f7576101009282916040526080391262000ae057604051620000478162000ae5565b608051815260a05160208201526200006060c062000b3a565b60408201526200007160e062000b3a565b60608201526200008361010062000b3a565b60808201526200009561012062000b3a565b60a0820152620000a761014062000b3a565b60c0820152620000b961016062000b3a565b60e0820152436003556040516001600160401b036020820190811190821117620007f757806020600092016040525260405190620000f78262000ae5565b6200010162000b4f565b82526200010d62000b70565b60208301526200011c62000b70565b60408301526200012b62000b70565b60608301526200013a62000b70565b60808301526200014962000b70565b60a0830152600060c0830152600060e083015260ff6004541662000ac75760408051338152825160208083019190915283015181830152908201516001600160a01b039081166060808401919091528301518116608080840191909152830151811660a080840191909152830151811660c080840191909152830151811660e080840191909152830151166101008201527f6f833b9b9affa212aceb367f98c650b9d30f65def6f81e809696bc8bff2de2ff9061012090a18051801590811562000aba575b501562000aa157600082515260006020835101526000604083510152815160208301515281516020808401510152815160406020840151015281516060602084015101526020820151805160406020820151910151151560405191620002748362000b02565b60008352602083015260408201526200028c62000b70565b9160005b6004811062000a675750508152806040840152602081015160406020820151910151151560405191620002c38362000b02565b6000835260208301526040820152620002db62000b70565b9160005b6004811062000a2d575050602082015260608381019190915281015160408201516001600160a01b0390811691160362000a255760005b1562000a0c576060820151604081015160406020820151910151151560405191620003418362000b02565b60008352602083015260408201526200035962000b70565b9160005b60048110620009d25750506040820152608083015260018060a01b0360808201511660018060a01b036040830151168114600014620009ae575060005b1562000995576080820151606081015160406020820151910151151560405191620003c58362000b02565b6000835260208301526040820152620003dd62000b70565b9160005b6004811062000945575050606082015260a083015260018060a01b0360a08201511660018060a01b03604083015116148060c084015260018060a01b0360a08301511660018060a01b0360608401511614908160e08501526000146200090a575060005b15620008f15734620008d85760018060a01b0360c0820151166040516020810191825260208152620004778162000b1e565b51902060018060a01b0360e0830151166040516020810191825260208152620004a08162000b1e565b51902003620008d05760005b15620008b757608081015160a08201516001600160a01b03908116911603620008535760005b156200083a57604051916001600160401b03610120840190811190841117620007f75760a09161012084016040526000845260006020850152600060408501526000606085015260006080850152600083850152600060c0850152600060e08501526200053e62000b70565b61010085015233845260208101516020850152600180841b036040820151166040850152600180841b036060820151166060850152600180841b036080820151166080850152600180841b03838201511683850152600180841b0360c08201511660c085015260e0600180851b039101511660e08401520151610100820152600160005543600155610100604051913360208401526020810151604084015260018060a01b03604082015116606084015260018060a01b03606082015116608084015260018060a01b0360808201511660a084015260018060a01b0360a08201511660c084015260018060a01b0360c08201511660e084015260018060a01b0360e08201511682840152015161012082016000905b600482106200080d576102808452836102a081016001600160401b03811182821017620007f75760405280516001600160401b038111620007f757600254600181811c91168015620007ec575b6020821014620007d657601f81116200076c575b50602091601f82116001146200070257918192600092620006f6575b50508160011b916000199060031b1c1916176002555b604051611d5e908162000be18239f35b015190508280620006d0565b601f19821692600260005260206000209160005b858110620007535750836001951062000739575b505050811b01600255620006e6565b015160001960f88460031b161c191690558280806200072a565b9192602060018192868501518155019401920162000716565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620007cb575b601f0160051c01905b818110620007be5750620006b4565b60008155600101620007af565b9091508190620007a6565b634e487b7160e01b600052602260045260246000fd5b90607f1690620006a0565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000653565b60405163100960cb60e01b8152600e6004820152602490fd5b60c0820151156200089c5760005b156200089457604081015160608201516001600160a01b039081169116036200088c576000620004d2565b6001620004d2565b6000620004d2565b60e082015115620008af57600062000861565b600162000861565b60405163100960cb60e01b8152600d6004820152602490fd5b6001620004ac565b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b156200091857600062000445565b60a081015160808201516001600160a01b039081169116036200093d57600062000445565b600162000445565b62000951818362000bb8565b516200095e828662000bb8565b526200096b818562000bb8565b5060001981146200097f57600101620003e1565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60608201516001600160a01b031603620009ca5760006200039a565b60016200039a565b620009de818362000bb8565b51620009eb828662000bb8565b52620009f8818562000bb8565b5060001981146200097f576001016200035d565b60405163100960cb60e01b815260096004820152602490fd5b600162000316565b62000a39818362000bb8565b5162000a46828662000bb8565b5262000a53818562000bb8565b5060001981146200097f57600101620002df565b62000a73818362000bb8565b5162000a80828662000bb8565b5262000a8d818562000bb8565b5060001981146200097f5760010162000290565b60405163100960cb60e01b815260086004820152602490fd5b905060015414386200020e565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b61010081019081106001600160401b03821117620007f757604052565b606081019081106001600160401b03821117620007f757604052565b604081019081106001600160401b03821117620007f757604052565b51906001600160a01b038216820362000ae057565b6040519062000b5e8262000b02565b60006040838281528260208201520152565b6040519060808083016001600160401b03811184821017620007f7576040528260005b82811062000ba057505050565b60209062000bad62000b4f565b818401520162000b93565b90600481101562000bca5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f114610c8a578063573b85101461005f57806383230757146100565763ab53f2c60361000e57610051610cc6565b61000e565b50610051610ca7565b6020366003190112610c8557600060405161007981610d8c565b52600080808060405161008b81610d8c565b6004358152610c0461033761009e610fee565b926100ba6100b56100b160045460ff1690565b1590565b6114d8565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a16100f960018654146114f8565b610128610116610107610e28565b6020808251830101910161123c565b91518015908115610c79575b50611518565b6101323415611538565b6101796101008201805151516020840151019081875251610174815160406020820151910151151590610163610ed3565b948552602085015215156040840152565b611bb4565b60208501526101a261019d6101916040840151611193565b60208401519033611a49565b611558565b6101be3360018060a01b036101b78451611193565b1614611578565b6101f160208501518051516020840151900390816040880152610174815160406020820151910151151590610163610ed3565b6060850152846020608086018281515251015261024061023b6102176040840151611193565b61022460c0850151611193565b6020850151916001600160a01b0390911690611b1e565b611598565b6102576102506080830151611193565b3090611b65565b6103c08501526102733061026e60a0840151611193565b611b65565b6103e085015261028a3061026e6040840151611193565b602082015190036104008501526102a83061026e6060840151611193565b610440850152476103a08501526102c7600160ff196004541617600455565b7f0c7f2c675b86cdc646d1d7b81b40726df0c53dbd891a74667978065842e46e3c61047886806103196103276020870151604051928391632e1a7d4d60e01b6020840152602483019190602083019252565b03601f198101835282610e05565b61033c61033760c0880151611193565b611193565b82602083519301915af1610358610351611307565b80926117f8565b5061036860ff1960045416600455565b61039161037c3061026e6040880151611193565b6104008901518082036104208b0152146115b8565b6103ba6103a53061026e6060880151611193565b6104408901518082036104608b0152146115d8565b61045f6103dd6103d13061026e6080890151611193565b6103c08a0151906114c0565b9160a08901926020845101515261040a6103fe3061026e60a08a0151611193565b6103e08b0151906114c0565b60208085510151015261044461043e6104266040890151611193565b61043661033760c08b0151611193565b903090611948565b156115f8565b476103a08a0151900383515260208082518301019101611354565b604082510152518060c08801526040519182918261137c565b0390a16105f56105b76105066104c4606088015160408101906104bf825151602060c08d015101515101928360e08d01525160406020820151910151151590610163610ed3565b611c11565b80610100890152606081019061050182515160208060c08d0151015101510192836101208c01525160406020820151910151151590610163610ed3565b611c71565b610140870190815261051d60c08801515115611618565b602060c08801510151805115158914610c6f57602061053f9101511515611638565b61055f602060c0890151015151610557835160400190565b515114611658565b61058160208060c08a015101510151610579835160600190565b515114611678565b5160408101906104bf825151602060c08b0151015151900392836101608b01525160406020820151910151151590610163610ed3565b80610180870152606081019061050182515160208060c08b015101510151900392836101a08a01525160406020820151910151151590610163610ed3565b6101c085015260208101516101e085015152602060c08501510151516102008501515260208060c0860151015101516020610200860151015261065c6106576106416060840151611193565b61065161033760e0860151611193565b90611ac9565b611698565b61069d61069861066f6080840151611193565b61067c60e0850151611193565b60c08801516020015151916001600160a01b0390911690611b1e565b6116b8565b6106e16106dc6106b060a0840151611193565b6106bd60e0850151611193565b60c08801516020908101510151916001600160a01b0390911690611b1e565b6116d8565b6106f23061026e6060840151611193565b6104a08501526107093061026e6040840151611193565b6104c08501526107203061026e6080840151611193565b602060c086015101515190036105008501526107433061026e60a0840151611193565b60208060c087015101510151900361054085015247610480850152610770600160ff196004541617600455565b610bfd85806107a46102008801516107b26020870151604051938491602083019463e24a2c3960e01b8652602484016113c0565b03601f198101845283610e05565b826107c361033760e0890151611193565b9251925af16107da6107d3611307565b8092611828565b506107ea60ff1960045416600455565b6108136107fe3061026e6040870151611193565b6104c08801518082036104e08a0152146116f8565b61083c6108273061026e6080870151611193565b6105008801518082036105208a015214611718565b6108656108503061026e60a0870151611193565b6105408801518082036105608a015214611738565b61090c61088861087c3061026e6060880151611193565b6104a0890151906114c0565b91610220880192602084510151526108bf6108b96108a96060880151611193565b61043661033760e08a0151611193565b15611758565b6108d86108d26108a96080880151611193565b15611778565b6108f16108eb6108a960a0880151611193565b15611798565b476104808901519003835152602080825183010191016113e3565b604082510152517fd82bfc77fd6ea0e9ff86dd99808ab6c0c59870412e1f1b756a02eccfed78ec876109686102408801928084526040519182918291909160408060608301948051845260208101515160208501520151910152565b0390a1610bdf60c087015151916109ff60406109d86102808b6109d3865198895101986102608301998a526101c0830151926020840191602083515191015151019485910152518560208201519101511515906109c3610ed3565b9485526020850152151585840152565b611cd1565b926102a08b019384526109f5828251015160208a015111156117b8565b51015115156117d8565b888080806102c08c0196818852610a196103378b51611193565b905190828215610c66575bf115610c59575b610ae5610320610a6f83518c6102e08d01526040810151906104bf604060208401519301511515610a5a610ed3565b93600085526020850152604084019015159052565b6103008b01908152610aaf610a8760808a0151611193565b610a918a51611193565b90610a9d875160400190565b5151916001600160a01b0316906119b5565b51610501606082018c815151610ac6885160600190565b5151900394859101525160406020820151910151151590610163610ed3565b906103408901918252610b14610afe60a0880151611193565b610b088851611193565b90610a9d845160600190565b610b56825151519151918251519003916103608b01928352610b396040890151611193565b610b438951611193565b915151916001600160a01b0316906119b5565b610b788251825190610174815160406020820151910151151590610163610ed3565b50610b9b8251825190610174815160406020820151910151151590610163610ed3565b50610a9d610bd9610baf6060890151611193565b92610bba8951611193565b9451905190610174815160406020820151910151151590610163610ed3565b60200190565b5147818082108914610c4e57505061038087965b019580875261149e565b5051611193565b905190828215610c45575bf115610c38575b60008055610c246000600155565b610c2c611416565b60405160008152602090f35b610c406113f2565b610c16565b506108fc610c0f565b610380910396610bf3565b610c616113f2565b610a2b565b506108fc610a24565b5061053f88611638565b9050600154148a610122565b600080fd5b34610c85576000366003190112610c855760035460805260206080f35b5034610c85576000366003190112610c85576020600154604051908152f35b5034610c8557600080600319360112610d38578054610ce3610e28565b906040519283918252602090604082840152835191826040850152815b838110610d2157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610d00565b80fd5b90600182811c92168015610d6b575b6020831014610d5557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d4a565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117610da757604052565b610daf610d75565b604052565b606081019081106001600160401b03821117610da757604052565b604081019081106001600160401b03821117610da757604052565b608081019081106001600160401b03821117610da757604052565b601f909101601f19168101906001600160401b03821190821017610da757604052565b6040519060008260025491610e3c83610d3b565b808352600193808516908115610eb25750600114610e64575b50610e6292500383610e05565b565b60026000908152600080516020611d3283398151915294602093509091905b818310610e9a575050610e62935082010138610e55565b85548884018501529485019487945091830191610e83565b9050610e6294506020925060ff191682840152151560051b82010138610e55565b60405190610e6282610db4565b6040519061058082016001600160401b03811183821017610da757604052565b6040519061012082016001600160401b03811183821017610da757604052565b60405190610f2d82610d8c565b60008252565b6040908151610f4181610dea565b8092600091825b60808110610f565750505050565b6020908351610f6481610db4565b858152858382015285858201528184015201610f48565b60405190610f8882610dcf565b60006020838281520152565b60405190610fa182610db4565b8160008152610fae610f7b565b60208201526040610fbd610f7b565b910152565b60405190610fcf82610db4565b60006040838281528151610fe281610d8c565b83815260208201520152565b610ff6610ee0565b906000808352611004610f33565b6020840152806040840152611017610f33565b6060840152611024610f7b565b6080840152611031610f94565b60a084015261103e610f94565b60c08401528060e0840152611051610f33565b61010084015280610120840152611066610f33565b6101408401528061016084015261107b610f33565b610180840152806101a0840152611090610f33565b6101c084015261109e610f20565b6101e08401526110ac610f7b565b6102008401526110ba610fc2565b6102208401526110c8610fc2565b61024084015280610260840152806102808401526110e4610f33565b6102a0840152806102c0840152806102e0840152611100610f33565b61030084015280610320840152611115610f33565b6103408401528061036084015280610380840152806103a0840152806103c0840152806103e08401528061040084015280610420840152806104408401528061046084015280610480840152806104a0840152806104c0840152806104e0840152806105008401528061052084015280610540840152610560830152565b6001600160a01b031690565b51906001600160a01b0382168203610c8557565b51908115158203610c8557565b9080601f83011215610c85576040918251926111db84610dea565b8392610180830192818411610c8557935b8385106111fb57505050505090565b606085830312610c8557825160609161121382610db4565b86518252602091828801518382015261122d8689016111b3565b868201528152019401936111ec565b61028081830312610c85576112d9611252610f00565b9261125c8361119f565b8452602083015160208501526112746040840161119f565b60408501526112856060840161119f565b60608501526112966080840161119f565b60808501526112a760a0840161119f565b60a08501526112b860c0840161119f565b60c08501526112c960e0840161119f565b60e08501526101008093016111c0565b9082015290565b9060048110156112f15760051b0190565b634e487b7160e01b600052603260045260246000fd5b3d1561134f573d906001600160401b038211611342575b60405191611336601f8201601f191660200184610e05565b82523d6000602084013e565b61134a610d75565b61131e565b606090565b90816040910312610c855760206040519161136e83610dcf565b805183520151602082015290565b610e62909291926060604060a0830195805184526113ac6020820151602086019060208091805184520151910152565b015191019060208091805184520151910152565b604090939291936113df81606081019660208091805184520151910152565b0152565b90816020910312610c85575190565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b611421600254610d3b565b806114295750565b601f811160011461143c57506000600255565b6002600090815290600190601f0160051c600080516020611d32833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b81811061149457505050602081208160025555565b838155820161147f565b91908201918281116114b3575b8210610c8557565b6114bb6113ff565b6114ab565b9081039081116114cd5790565b6114d56113ff565b90565b156114df57565b60405163100960cb60e01b8152600f6004820152602490fd5b156114ff57565b60405163100960cb60e01b815260106004820152602490fd5b1561151f57565b60405163100960cb60e01b815260116004820152602490fd5b1561153f57565b60405163100960cb60e01b815260126004820152602490fd5b1561155f57565b60405163100960cb60e01b815260146004820152602490fd5b1561157f57565b60405163100960cb60e01b815260156004820152602490fd5b1561159f57565b60405163100960cb60e01b815260176004820152602490fd5b156115bf57565b60405163100960cb60e01b815260196004820152602490fd5b156115df57565b60405163100960cb60e01b8152601a6004820152602490fd5b156115ff57565b60405163100960cb60e01b815260186004820152602490fd5b1561161f57565b60405163100960cb60e01b8152601f6004820152602490fd5b1561163f57565b60405163100960cb60e01b815260206004820152602490fd5b1561165f57565b60405163100960cb60e01b815260216004820152602490fd5b1561167f57565b60405163100960cb60e01b815260226004820152602490fd5b1561169f57565b60405163100960cb60e01b815260256004820152602490fd5b156116bf57565b60405163100960cb60e01b815260266004820152602490fd5b156116df57565b60405163100960cb60e01b815260276004820152602490fd5b156116ff57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561171f57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561173f57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561175f57565b60405163100960cb60e01b815260286004820152602490fd5b1561177f57565b60405163100960cb60e01b815260296004820152602490fd5b1561179f57565b60405163100960cb60e01b8152602a6004820152602490fd5b156117bf57565b60405163100960cb60e01b815260316004820152602490fd5b156117df57565b60405163100960cb60e01b815260326004820152602490fd5b156118005790565b80511561180f57805190602001fd5b60405163100960cb60e01b8152601b6004820152602490fd5b156118305790565b80511561183f57805190602001fd5b60405163100960cb60e01b8152602e6004820152602490fd5b156118605790565b80511561186f57805190602001fd5b60405163100960cb60e01b815260006004820152602490fd5b156118905790565b80511561189f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156118c05790565b8051156118cf57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156118f05790565b8051156118ff57805190602001fd5b60405163100960cb60e01b815260056004820152602490fd5b156119205790565b80511561192f57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b604051636eb1769f60e11b602082019081526001600160a01b03938416602483015293831660448083019190915281526114d59360009384939284919061198e81610dea565b5193165af16119a561199e611307565b8092611858565b50602080825183010191016113e3565b600091908291826103196119e4611a1397604051928391602083019663a9059cbb60e01b885260248401611a1a565b51926001600160a01b03165af1611a036119fc611307565b8092611888565b5060208082518301019101611a35565b15610c8557565b6001600160a01b039091168152602081019190915260400190565b90816020910312610c85576114d5906111b3565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526064808301959095529381526114d5936000938493909284919060a081016001600160401b03811182821017611abc575b6040525193165af1611a03611ab5611307565b80926118b8565b611ac4610d75565b611aa2565b600080916114d5938260405191602083019263095ea7b360e01b845260018060a01b03809216602482015282604482015260448152611b0781610dea565b5193165af1611a03611b17611307565b80926118e8565b60009190829182610319611b4d6114d597604051928391602083019663095ea7b360e01b885260248401611a1a565b51926001600160a01b03165af1611a03611b17611307565b600080916114d593826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152611b9d81610db4565b5193165af16119a5611bad611307565b8092611918565b9190611bbe610f33565b9260005b60048110611bd05750508252565b80611bdd600192846112e0565b51611be882886112e0565b52611bf381876112e0565b506000198114611c04575b01611bc2565b611c0c6113ff565b611bfe565b9190611c1b610f33565b9260005b60048110611c305750506040830152565b80611c3d600192846112e0565b51611c4882886112e0565b52611c5381876112e0565b506000198114611c64575b01611c1f565b611c6c6113ff565b611c5e565b9190611c7b610f33565b9260005b60048110611c905750506060830152565b80611c9d600192846112e0565b51611ca882886112e0565b52611cb381876112e0565b506000198114611cc4575b01611c7f565b611ccc6113ff565b611cbe565b9190611cdb610f33565b9260005b60048110611cf05750506020830152565b80611cfd600192846112e0565b51611d0882886112e0565b52611d1381876112e0565b506000198114611d24575b01611cdf565b611d2c6113ff565b611d1e56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10559,
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
