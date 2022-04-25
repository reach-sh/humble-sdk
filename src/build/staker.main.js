// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc4 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  return {
    Harvest: [ctc0, ctc3],
    Stake: [ctc0, ctc1, ctc4],
    Withdraw: [ctc0, ctc1, ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc3], ['duration', ctc2]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Struct([['opts', ctc4], ['totalStaked', ctc2], ['remainingRewards', ctc3], ['end', ctc2]]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Object({
    rewards: ctc3,
    stake: ctc2
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc10
    });
  const map0_ctc = ctc11;
  
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1367, v1368, v1369, v1370, v1371, v1387, v1390, v1391, v1392, v1393, v1394] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1440, v1441, v2595, v2604, v2606, v2609, v2618, v2620] = svs;
            return (await ((async () => {
              
              const v2624 = {
                end: v1412,
                opts: v1368,
                remainingRewards: v1431,
                totalStaked: v1433
                };
              
              return v2624;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597] = svs;
            return (await ((async () => {
              
              const v1598 = {
                end: v1412,
                opts: v1368,
                remainingRewards: v1431,
                totalStaked: v1433
                };
              
              return v1598;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1367, v1368, v1369, v1370, v1371, v1387, v1390, v1391, v1392, v1393, v1394] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1440, v1441, v2595, v2604, v2606, v2609, v2618, v2620] = svs;
            return (await ((async (_v2626, _v2627 ) => {
                const v2626 = stdlib.protect(ctc0, _v2626, null);
                const v2627 = stdlib.protect(ctc2, _v2627, null);
              
              const v2628 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2626), null);
              const v2630 = {
                rewards: v1428,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v2631 = stdlib.fromSome(v2628, v2630);
              const v2632 = v2631.stake;
              const v2637 = v2631.rewards;
              const v2638 = v2637[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '0')];
              const v2641 = stdlib.le(v1412, v2627);
              const v2642 = v2641 ? v1412 : v2627;
              let v2643;
              const v2644 = stdlib.ge(v1432, v2642);
              if (v2644) {
                v2643 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2645 = stdlib.sub(v2642, v1432);
                v2643 = v2645;
                }
              const v2647 = stdlib.mul(v2643, v1391);
              const v2648 = stdlib.add(v2595, v2647);
              const v2650 = stdlib.le(v2648, v2604);
              const v2651 = v2650 ? v2648 : v2604;
              let v2654;
              const v2655 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
              if (v2655) {
                v2654 = v2651;
                }
              else {
                const v2656 = stdlib.muldiv(v2651, v2632, v1433);
                v2654 = v2656;
                }
              let v2657;
              const v2658 = stdlib.ge(v2638, v2654);
              if (v2658) {
                v2657 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2659 = stdlib.sub(v2654, v2638);
                v2657 = v2659;
                }
              const v2660 = stdlib.le(v2657, v2606);
              const v2661 = v2660 ? v2657 : v2606;
              const v2673 = v2637[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '1')];
              let v2678;
              if (v2644) {
                v2678 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2680 = stdlib.sub(v2642, v1432);
                v2678 = v2680;
                }
              const v2682 = stdlib.mul(v2678, v1393);
              const v2683 = stdlib.add(v2609, v2682);
              const v2685 = stdlib.le(v2683, v2618);
              const v2686 = v2685 ? v2683 : v2618;
              let v2689;
              if (v2655) {
                v2689 = v2686;
                }
              else {
                const v2691 = stdlib.muldiv(v2686, v2632, v1433);
                v2689 = v2691;
                }
              let v2692;
              const v2693 = stdlib.ge(v2673, v2689);
              if (v2693) {
                v2692 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2694 = stdlib.sub(v2689, v2673);
                v2692 = v2694;
                }
              const v2695 = stdlib.le(v2692, v2620);
              const v2696 = v2695 ? v2692 : v2620;
              const v2698 = [v2661, v2696];
              
              return v2698;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597] = svs;
            return (await ((async (_v1600, _v1601 ) => {
                const v1600 = stdlib.protect(ctc0, _v1600, null);
                const v1601 = stdlib.protect(ctc2, _v1601, null);
              
              const v1602 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1600), null);
              const v1604 = {
                rewards: v1428,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v1605 = stdlib.fromSome(v1602, v1604);
              const v1606 = v1605.stake;
              const v1611 = v1605.rewards;
              const v1612 = v1611[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '0')];
              const v1615 = stdlib.le(v1412, v1601);
              const v1616 = v1615 ? v1412 : v1601;
              let v1617;
              const v1618 = stdlib.ge(v1432, v1616);
              if (v1618) {
                v1617 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1619 = stdlib.sub(v1616, v1432);
                v1617 = v1619;
                }
              const v1621 = stdlib.mul(v1617, v1391);
              const v1622 = stdlib.add(v1569, v1621);
              const v1624 = stdlib.le(v1622, v1578);
              const v1625 = v1624 ? v1622 : v1578;
              let v1628;
              const v1629 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
              if (v1629) {
                v1628 = v1625;
                }
              else {
                const v1630 = stdlib.muldiv(v1625, v1606, v1433);
                v1628 = v1630;
                }
              let v1631;
              const v1632 = stdlib.ge(v1612, v1628);
              if (v1632) {
                v1631 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1633 = stdlib.sub(v1628, v1612);
                v1631 = v1633;
                }
              const v1634 = stdlib.le(v1631, v1580);
              const v1635 = v1634 ? v1631 : v1580;
              const v1647 = v1611[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '1')];
              let v1652;
              if (v1618) {
                v1652 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1654 = stdlib.sub(v1616, v1432);
                v1652 = v1654;
                }
              const v1656 = stdlib.mul(v1652, v1393);
              const v1657 = stdlib.add(v1583, v1656);
              const v1659 = stdlib.le(v1657, v1592);
              const v1660 = v1659 ? v1657 : v1592;
              let v1663;
              if (v1629) {
                v1663 = v1660;
                }
              else {
                const v1665 = stdlib.muldiv(v1660, v1606, v1433);
                v1663 = v1665;
                }
              let v1666;
              const v1667 = stdlib.ge(v1647, v1663);
              if (v1667) {
                v1666 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1668 = stdlib.sub(v1663, v1647);
                v1666 = v1668;
                }
              const v1669 = stdlib.le(v1666, v1594);
              const v1670 = v1669 ? v1666 : v1594;
              const v1672 = [v1635, v1670];
              
              return v1672;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1367, v1368, v1369, v1370, v1371, v1387, v1390, v1391, v1392, v1393, v1394] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1440, v1441, v2595, v2604, v2606, v2609, v2618, v2620] = svs;
            return (await ((async (_v1413 ) => {
                const v1413 = stdlib.protect(ctc0, _v1413, null);
              
              const v1414 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1413), null);
              const v1415 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v1416 = {
                rewards: v1415,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v1417 = stdlib.fromSome(v1414, v1416);
              const v1418 = v1417.stake;
              
              return v1418;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597] = svs;
            return (await ((async (_v1413 ) => {
                const v1413 = stdlib.protect(ctc0, _v1413, null);
              
              const v1414 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1413), null);
              const v1415 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v1416 = {
                rewards: v1415,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v1417 = stdlib.fromSome(v1414, v1416);
              const v1418 = v1417.stake;
              
              return v1418;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2],
      3: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      5: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Any_halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1440, v1441, v2595, v2604, v2606, v2609, v2618, v2620] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v2702 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:261:3:application',
    fs: ['at ./staker.rsh:261:3:application call to [unknown function] (defined at: ./staker.rsh:261:3:function exp)'],
    msg: 'in',
    who: 'Any_halt'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1440, v1441, v2595, v2604, v2606, v2609, v2618, v2620, v2702],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:261:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2704], secs: v2706, time: v2705, didSend: v1197, from: v2703 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_halt"
        });
      ;
      const v2707 = null;
      const v2708 = await txn1.getOutput('Any_halt', 'v2707', ctc0, v2707);
      
      sim_r.txns.push({
        amt: v1441,
        kind: 'from',
        to: v1367,
        tok: undefined /* Nothing */
        });
      const v2717 = v1440[stdlib.checkedBigNumberify('./staker.rsh:266:21:application', stdlib.UInt_max, '0')];
      const v2718 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:21:application', stdlib.UInt_max, '0')];
      const v2724 = stdlib.sub(v2718, v2718);
      const v2727 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '1')];
      const v2728 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '2')];
      const v2729 = [v2724, v2727, v2728];
      const v2730 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '0'), v2729);
      sim_r.txns.push({
        amt: v2718,
        kind: 'from',
        to: v1367,
        tok: v1369
        });
      const v2731 = v2730[stdlib.checkedBigNumberify('./staker.rsh:268:21:application', stdlib.UInt_max, '1')];
      const v2732 = v2731[stdlib.checkedBigNumberify('./staker.rsh:268:21:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v2732,
        kind: 'from',
        to: v1367,
        tok: v1370
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1370
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1369
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2704], secs: v2706, time: v2705, didSend: v1197, from: v2703 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v2707 = null;
  const v2708 = await txn1.getOutput('Any_halt', 'v2707', ctc0, v2707);
  stdlib.protect(ctc0, await interact.out(v2704, v2708), {
    at: './staker.rsh:261:3:application',
    fs: ['at ./staker.rsh:261:3:application call to [unknown function] (defined at: ./staker.rsh:261:3:function exp)', 'at ./staker.rsh:262:4:application call to "k" (defined at: ./staker.rsh:261:3:function exp)'],
    msg: 'out',
    who: 'Any_halt'
    });
  
  ;
  const v2717 = v1440[stdlib.checkedBigNumberify('./staker.rsh:266:21:application', stdlib.UInt_max, '0')];
  const v2718 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:21:application', stdlib.UInt_max, '0')];
  const v2724 = stdlib.sub(v2718, v2718);
  const v2727 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '1')];
  const v2728 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '2')];
  const v2729 = [v2724, v2727, v2728];
  const v2730 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '0'), v2729);
  ;
  const v2731 = v2730[stdlib.checkedBigNumberify('./staker.rsh:268:21:application', stdlib.UInt_max, '1')];
  const v2732 = v2731[stdlib.checkedBigNumberify('./staker.rsh:268:21:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Struct([['rewardToken1', ctc5], ['stakeToken', ctc5], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Staker_harvest0_591: ctc7,
    Staker_stake0_591: ctc8,
    Staker_withdraw0_591: ctc8
    });
  const ctc10 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc11 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc12 = stdlib.T_Address;
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc13]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v1349 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1350 = [v1349, v1349];
  const v1354 = stdlib.protect(ctc6, interact.opts, 'for Deployer\'s interact field opts');
  const v1355 = v1354.rewardToken1;
  const v1356 = v1354.stakeToken;
  
  const v1365 = stdlib.tokenEq(v1355, v1356);
  const v1366 = v1365 ? false : true;
  stdlib.assert(v1366, {
    at: './staker.rsh:79:11:application',
    fs: ['at ./staker.rsh:76:16:application call to [unknown function] (defined at: ./staker.rsh:76:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1354, v1355, v1356],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:81:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1368, v1369, v1370], secs: v1372, time: v1371, didSend: v42, from: v1367 } = txn1;
      
      const v1373 = stdlib.tokenEq(v1369, v1370);
      const v1374 = v1373 ? false : true;
      ;
      const v1375 = v1350[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '0')];
      const v1377 = v1375[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1')];
      const v1378 = v1375[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '2')];
      const v1379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1377, v1378];
      const v1380 = stdlib.Array_set(v1350, stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '0'), v1379);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1369
        });
      const v1382 = v1380[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1')];
      const v1384 = v1382[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1')];
      const v1385 = v1382[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '2')];
      const v1386 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1384, v1385];
      const v1387 = stdlib.Array_set(v1380, stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1'), v1386);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1370
        });
      ;
      const v1389 = v1368.rewardsPerBlock;
      const v1390 = v1368.duration;
      const v1391 = v1389[stdlib.checkedBigNumberify('./staker.rsh:86:20:array ref', stdlib.UInt_max, '0')];
      const v1392 = stdlib.mul(v1391, v1390);
      const v1393 = v1389[stdlib.checkedBigNumberify('./staker.rsh:87:20:array ref', stdlib.UInt_max, '1')];
      const v1394 = stdlib.mul(v1393, v1390);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1368, v1369, v1370], secs: v1372, time: v1371, didSend: v42, from: v1367 } = txn1;
  const v1373 = stdlib.tokenEq(v1369, v1370);
  const v1374 = v1373 ? false : true;
  stdlib.assert(v1374, {
    at: './staker.rsh:81:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v1375 = v1350[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '0')];
  const v1377 = v1375[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1')];
  const v1378 = v1375[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '2')];
  const v1379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1377, v1378];
  const v1380 = stdlib.Array_set(v1350, stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '0'), v1379);
  ;
  const v1382 = v1380[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1')];
  const v1384 = v1382[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1')];
  const v1385 = v1382[stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '2')];
  const v1386 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1384, v1385];
  const v1387 = stdlib.Array_set(v1380, stdlib.checkedBigNumberify('./staker.rsh:81:12:dot', stdlib.UInt_max, '1'), v1386);
  ;
  ;
  const v1389 = v1368.rewardsPerBlock;
  const v1390 = v1368.duration;
  const v1391 = v1389[stdlib.checkedBigNumberify('./staker.rsh:86:20:array ref', stdlib.UInt_max, '0')];
  const v1392 = stdlib.mul(v1391, v1390);
  const v1393 = v1389[stdlib.checkedBigNumberify('./staker.rsh:87:20:array ref', stdlib.UInt_max, '1')];
  const v1394 = stdlib.mul(v1393, v1390);
  const txn2 = await (ctc.sendrecv({
    args: [v1367, v1368, v1369, v1370, v1371, v1387, v1390, v1391, v1392, v1393, v1394],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1371,
    onlyIf: true,
    out_tys: [],
    pay: [v1392, [[v1394, v1369]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1397, time: v1396, didSend: v57, from: v1395 } = txn2;
      
      sim_r.txns.push({
        amt: v1392,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1400 = v1387[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '0')];
      const v1401 = v1400[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '0')];
      const v1402 = stdlib.add(v1401, v1394);
      const v1405 = v1400[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '1')];
      const v1406 = v1400[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '2')];
      const v1407 = [v1402, v1405, v1406];
      const v1408 = stdlib.Array_set(v1387, stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '0'), v1407);
      sim_r.txns.push({
        amt: v1394,
        kind: 'to',
        tok: v1369
        });
      const v1409 = stdlib.addressEq(v1367, v1395);
      ;
      const v1411 = stdlib.add(v1371, stdlib.checkedBigNumberify('./staker.rsh:94:39:decimal', stdlib.UInt_max, '2'));
      const v1412 = stdlib.add(v1411, v1390);
      
      const v1428 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1429 = [v1392, v1394];
      const v1430 = v1428;
      const v1431 = v1429;
      const v1432 = v1411;
      const v1433 = stdlib.checkedBigNumberify('./staker.rsh:126:21:decimal', stdlib.UInt_max, '0');
      const v1434 = v1396;
      const v1435 = v1371;
      const v1440 = v1408;
      const v1441 = v1392;
      
      if (await (async () => {
        const v1564 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:175:27:decimal', stdlib.UInt_max, '0'));
        const v1566 = stdlib.le(v1435, v1412);
        const v1567 = v1564 ? v1566 : true;
        
        return v1567;})()) {
        const v1569 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
        const v1570 = stdlib.le(v1412, v1435);
        const v1571 = v1570 ? v1412 : v1435;
        let v1572;
        const v1573 = stdlib.ge(v1432, v1571);
        if (v1573) {
          v1572 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1574 = stdlib.sub(v1571, v1432);
          v1572 = v1574;
          }
        const v1576 = stdlib.mul(v1572, v1391);
        const v1577 = stdlib.add(v1569, v1576);
        const v1578 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
        const v1579 = stdlib.le(v1577, v1578);
        const v1580 = v1579 ? v1577 : v1578;
        const v1583 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
        let v1586;
        if (v1573) {
          v1586 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1588 = stdlib.sub(v1571, v1432);
          v1586 = v1588;
          }
        const v1590 = stdlib.mul(v1586, v1393);
        const v1591 = stdlib.add(v1583, v1590);
        const v1592 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
        const v1593 = stdlib.le(v1591, v1592);
        const v1594 = v1593 ? v1591 : v1592;
        const v1597 = [v1580, v1594];
        sim_r.isHalt = false;
        }
      else {
        const v2595 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
        const v2596 = stdlib.le(v1412, v1435);
        const v2597 = v2596 ? v1412 : v1435;
        let v2598;
        const v2599 = stdlib.ge(v1432, v2597);
        if (v2599) {
          v2598 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2600 = stdlib.sub(v2597, v1432);
          v2598 = v2600;
          }
        const v2602 = stdlib.mul(v2598, v1391);
        const v2603 = stdlib.add(v2595, v2602);
        const v2604 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
        const v2605 = stdlib.le(v2603, v2604);
        const v2606 = v2605 ? v2603 : v2604;
        const v2609 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
        let v2612;
        if (v2599) {
          v2612 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2614 = stdlib.sub(v2597, v1432);
          v2612 = v2614;
          }
        const v2616 = stdlib.mul(v2612, v1393);
        const v2617 = stdlib.add(v2609, v2616);
        const v2618 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
        const v2619 = stdlib.le(v2617, v2618);
        const v2620 = v2619 ? v2617 : v2618;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc12, ctc6, ctc5, ctc5, ctc1, ctc15, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1397, time: v1396, didSend: v57, from: v1395 } = txn2;
  ;
  const v1400 = v1387[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '0')];
  const v1401 = v1400[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '0')];
  const v1402 = stdlib.add(v1401, v1394);
  const v1405 = v1400[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '1')];
  const v1406 = v1400[stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '2')];
  const v1407 = [v1402, v1405, v1406];
  const v1408 = stdlib.Array_set(v1387, stdlib.checkedBigNumberify('./staker.rsh:89:12:dot', stdlib.UInt_max, '0'), v1407);
  ;
  const v1409 = stdlib.addressEq(v1367, v1395);
  stdlib.assert(v1409, {
    at: './staker.rsh:89:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v1411 = stdlib.add(v1371, stdlib.checkedBigNumberify('./staker.rsh:94:39:decimal', stdlib.UInt_max, '2'));
  const v1412 = stdlib.add(v1411, v1390);
  stdlib.protect(ctc0, await interact.readyForStakers(), {
    at: './staker.rsh:124:36:application',
    fs: ['at ./staker.rsh:124:36:application call to [unknown function] (defined at: ./staker.rsh:124:36:function exp)', 'at ./staker.rsh:124:36:application call to "liftedInteract" (defined at: ./staker.rsh:124:36:application)'],
    msg: 'readyForStakers',
    who: 'Deployer'
    });
  
  const v1428 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1429 = [v1392, v1394];
  let v1430 = v1428;
  let v1431 = v1429;
  let v1432 = v1411;
  let v1433 = stdlib.checkedBigNumberify('./staker.rsh:126:21:decimal', stdlib.UInt_max, '0');
  let v1434 = v1396;
  let v1435 = v1371;
  let v1440 = v1408;
  let v1441 = v1392;
  
  while (await (async () => {
    const v1564 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:175:27:decimal', stdlib.UInt_max, '0'));
    const v1566 = stdlib.le(v1435, v1412);
    const v1567 = v1564 ? v1566 : true;
    
    return v1567;})()) {
    const v1569 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
    const v1570 = stdlib.le(v1412, v1435);
    const v1571 = v1570 ? v1412 : v1435;
    let v1572;
    const v1573 = stdlib.ge(v1432, v1571);
    if (v1573) {
      v1572 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1574 = stdlib.sub(v1571, v1432);
      v1572 = v1574;
      }
    const v1576 = stdlib.mul(v1572, v1391);
    const v1577 = stdlib.add(v1569, v1576);
    const v1578 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
    const v1579 = stdlib.le(v1577, v1578);
    const v1580 = v1579 ? v1577 : v1578;
    const v1583 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
    let v1586;
    if (v1573) {
      v1586 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1588 = stdlib.sub(v1571, v1432);
      v1586 = v1588;
      }
    const v1590 = stdlib.mul(v1586, v1393);
    const v1591 = stdlib.add(v1583, v1590);
    const v1592 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
    const v1593 = stdlib.le(v1591, v1592);
    const v1594 = v1593 ? v1591 : v1592;
    const v1597 = [v1580, v1594];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn3;
    switch (v1742[0]) {
      case 'Staker_harvest0_591': {
        const v1745 = v1742[1];
        undefined /* setApiDetails */;
        ;
        const v1781 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
        const v1782 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
        const v1786 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
        const v1787 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
        const v1788 = [v1782, v1786, v1787];
        const v1789 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v1788);
        ;
        const v1791 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1741), null);
        const v1793 = {
          rewards: v1428,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1794 = stdlib.fromSome(v1791, v1793);
        const v1795 = v1794.stake;
        const v1800 = v1794.rewards;
        const v1801 = v1800[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '0')];
        let v1806;
        if (v1573) {
          v1806 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1808 = stdlib.sub(v1571, v1432);
          v1806 = v1808;
          }
        const v1810 = stdlib.mul(v1806, v1391);
        const v1811 = stdlib.add(v1569, v1810);
        const v1813 = stdlib.le(v1811, v1578);
        const v1814 = v1813 ? v1811 : v1578;
        let v1817;
        const v1818 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
        if (v1818) {
          v1817 = v1814;
          }
        else {
          const v1819 = stdlib.muldiv(v1814, v1795, v1433);
          v1817 = v1819;
          }
        let v1820;
        const v1821 = stdlib.ge(v1801, v1817);
        if (v1821) {
          v1820 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1822 = stdlib.sub(v1817, v1801);
          v1820 = v1822;
          }
        const v1823 = stdlib.le(v1820, v1580);
        const v1824 = v1823 ? v1820 : v1580;
        const v1836 = v1800[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '1')];
        let v1841;
        if (v1573) {
          v1841 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1843 = stdlib.sub(v1571, v1432);
          v1841 = v1843;
          }
        const v1845 = stdlib.mul(v1841, v1393);
        const v1846 = stdlib.add(v1583, v1845);
        const v1848 = stdlib.le(v1846, v1592);
        const v1849 = v1848 ? v1846 : v1592;
        let v1852;
        if (v1818) {
          v1852 = v1849;
          }
        else {
          const v1854 = stdlib.muldiv(v1849, v1795, v1433);
          v1852 = v1854;
          }
        let v1855;
        const v1856 = stdlib.ge(v1836, v1852);
        if (v1856) {
          v1855 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1857 = stdlib.sub(v1852, v1836);
          v1855 = v1857;
          }
        const v1858 = stdlib.le(v1855, v1594);
        const v1859 = v1858 ? v1855 : v1594;
        const v1861 = [v1824, v1859];
        const v1870 = stdlib.sub(v1441, v1824);
        ;
        const v1871 = v1789[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0')];
        const v1872 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0')];
        const v1876 = stdlib.sub(v1872, v1859);
        const v1879 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '1')];
        const v1880 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '2')];
        const v1881 = [v1876, v1879, v1880];
        const v1882 = stdlib.Array_set(v1789, stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0'), v1881);
        ;
        const v1884 = stdlib.sub(v1578, v1824);
        const v1886 = stdlib.sub(v1592, v1859);
        const v1899 = stdlib.add(v1801, v1824);
        const v1901 = stdlib.add(v1836, v1859);
        const v1902 = [v1899, v1901];
        const v1903 = {
          rewards: v1902,
          stake: v1795
          };
        await stdlib.mapSet(map0, v1741, v1903);
        const v1908 = [v1884, v1886];
        const v1909 = {
          totalRemaining: v1908,
          userReceived: v1861
          };
        await txn3.getOutput('Staker_harvest', 'v1909', ctc10, v1909);
        null;
        const v1924 = stdlib.sub(v1580, v1824);
        const v1925 = stdlib.sub(v1594, v1859);
        const v1927 = [v1924, v1925];
        const cv1430 = v1927;
        const cv1431 = v1908;
        const cv1432 = v1435;
        const cv1433 = v1433;
        const cv1434 = v1743;
        const cv1435 = v1434;
        const cv1440 = v1882;
        const cv1441 = v1870;
        
        v1430 = cv1430;
        v1431 = cv1431;
        v1432 = cv1432;
        v1433 = cv1433;
        v1434 = cv1434;
        v1435 = cv1435;
        v1440 = cv1440;
        v1441 = cv1441;
        
        continue;
        break;
        }
      case 'Staker_stake0_591': {
        const v2028 = v1742[1];
        undefined /* setApiDetails */;
        const v2040 = v2028[stdlib.checkedBigNumberify('./staker.rsh:176:9:spread', stdlib.UInt_max, '0')];
        ;
        const v2064 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
        const v2065 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
        const v2066 = stdlib.add(v2065, v2040);
        const v2069 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
        const v2070 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
        const v2071 = [v2066, v2069, v2070];
        const v2072 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v2071);
        ;
        const v2216 = stdlib.add(v1433, v2040);
        const v2217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1741), null);
        const v2219 = {
          rewards: v1428,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2220 = stdlib.fromSome(v2217, v2219);
        const v2221 = v2220.stake;
        const v2222 = stdlib.add(v2221, v2040);
        const v2227 = v2220.rewards;
        let v2228;
        const v2229 = stdlib.eq(v2216, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
        if (v2229) {
          v2228 = v1580;
          }
        else {
          const v2230 = stdlib.muldiv(v1580, v2040, v2216);
          v2228 = v2230;
          }
        const v2231 = v2227[stdlib.checkedBigNumberify('./staker.rsh:185:29:array ref', stdlib.UInt_max, '0')];
        const v2232 = stdlib.add(v2231, v2228);
        let v2233;
        if (v2229) {
          v2233 = v1594;
          }
        else {
          const v2235 = stdlib.muldiv(v1594, v2040, v2216);
          v2233 = v2235;
          }
        const v2236 = v2227[stdlib.checkedBigNumberify('./staker.rsh:185:29:array ref', stdlib.UInt_max, '1')];
        const v2237 = stdlib.add(v2236, v2233);
        const v2238 = [v2232, v2237];
        const v2239 = {
          rewards: v2238,
          stake: v2222
          };
        await stdlib.mapSet(map0, v1741, v2239);
        const v2240 = {
          newEveryoneStaked: v2216,
          newUserStaked: v2222
          };
        await txn3.getOutput('Staker_stake', 'v2240', ctc11, v2240);
        null;
        const cv1430 = v1597;
        const cv1431 = v1431;
        const cv1432 = v1435;
        const cv1433 = v2216;
        const cv1434 = v1743;
        const cv1435 = v1434;
        const cv1440 = v2072;
        const cv1441 = v1441;
        
        v1430 = cv1430;
        v1431 = cv1431;
        v1432 = cv1432;
        v1433 = cv1433;
        v1434 = cv1434;
        v1435 = cv1435;
        v1440 = cv1440;
        v1441 = cv1441;
        
        continue;
        break;
        }
      case 'Staker_withdraw0_591': {
        const v2311 = v1742[1];
        undefined /* setApiDetails */;
        ;
        const v2347 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
        const v2348 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
        const v2352 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
        const v2353 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
        const v2354 = [v2348, v2352, v2353];
        const v2355 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v2354);
        ;
        const v2537 = v2311[stdlib.checkedBigNumberify('./staker.rsh:199:9:spread', stdlib.UInt_max, '0')];
        const v2538 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1741), null);
        const v2540 = {
          rewards: v1428,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2541 = stdlib.fromSome(v2538, v2540);
        const v2542 = v2541.stake;
        const v2544 = stdlib.le(v2537, v2542);
        stdlib.assert(v2544, {
          at: './staker.rsh:205:16:application',
          fs: ['at ./staker.rsh:202:7:application call to [unknown function] (defined at: ./staker.rsh:202:7:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v2545 = v2355[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1')];
        const v2546 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '0')];
        const v2550 = stdlib.sub(v2546, v2537);
        const v2553 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1')];
        const v2554 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '2')];
        const v2555 = [v2550, v2553, v2554];
        const v2556 = stdlib.Array_set(v2355, stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1'), v2555);
        ;
        const v2557 = stdlib.sub(v1433, v2537);
        const v2558 = stdlib.sub(v2542, v2537);
        const v2563 = v2541.rewards;
        const v2564 = v2563[stdlib.checkedBigNumberify('./staker.rsh:214:50:array ref', stdlib.UInt_max, '0')];
        let v2565;
        const v2566 = stdlib.eq(v2557, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
        if (v2566) {
          v2565 = v1580;
          }
        else {
          const v2567 = stdlib.muldiv(v1580, v2537, v2557);
          v2565 = v2567;
          }
        let v2568;
        const v2569 = stdlib.ge(v2565, v2564);
        if (v2569) {
          v2568 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2570 = stdlib.sub(v2564, v2565);
          v2568 = v2570;
          }
        const v2571 = v2563[stdlib.checkedBigNumberify('./staker.rsh:214:50:array ref', stdlib.UInt_max, '1')];
        let v2572;
        if (v2566) {
          v2572 = v1594;
          }
        else {
          const v2574 = stdlib.muldiv(v1594, v2537, v2557);
          v2572 = v2574;
          }
        let v2575;
        const v2576 = stdlib.ge(v2572, v2571);
        if (v2576) {
          v2575 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2577 = stdlib.sub(v2571, v2572);
          v2575 = v2577;
          }
        const v2578 = [v2568, v2575];
        const v2579 = {
          rewards: v2578,
          stake: v2558
          };
        await stdlib.mapSet(map0, v1741, v2579);
        const v2581 = {
          newEveryoneStaked: v2557,
          newUserStaked: v2558
          };
        await txn3.getOutput('Staker_withdraw', 'v2581', ctc11, v2581);
        null;
        const cv1430 = v1597;
        const cv1431 = v1431;
        const cv1432 = v1435;
        const cv1433 = v2557;
        const cv1434 = v1743;
        const cv1435 = v1434;
        const cv1440 = v2556;
        const cv1441 = v1441;
        
        v1430 = cv1430;
        v1431 = cv1431;
        v1432 = cv1432;
        v1433 = cv1433;
        v1434 = cv1434;
        v1435 = cv1435;
        v1440 = cv1440;
        v1441 = cv1441;
        
        continue;
        break;
        }
      }
    
    }
  const v2595 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
  const v2596 = stdlib.le(v1412, v1435);
  const v2597 = v2596 ? v1412 : v1435;
  let v2598;
  const v2599 = stdlib.ge(v1432, v2597);
  if (v2599) {
    v2598 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v2600 = stdlib.sub(v2597, v1432);
    v2598 = v2600;
    }
  const v2602 = stdlib.mul(v2598, v1391);
  const v2603 = stdlib.add(v2595, v2602);
  const v2604 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
  const v2605 = stdlib.le(v2603, v2604);
  const v2606 = v2605 ? v2603 : v2604;
  const v2609 = v1430[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
  let v2612;
  if (v2599) {
    v2612 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v2614 = stdlib.sub(v2597, v1432);
    v2612 = v2614;
    }
  const v2616 = stdlib.mul(v2612, v1393);
  const v2617 = stdlib.add(v2609, v2616);
  const v2618 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
  const v2619 = stdlib.le(v2617, v2618);
  const v2620 = v2619 ? v2617 : v2618;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2704], secs: v2706, time: v2705, didSend: v1197, from: v2703 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v2707 = null;
  await txn3.getOutput('Any_halt', 'v2707', ctc0, v2707);
  ;
  const v2717 = v1440[stdlib.checkedBigNumberify('./staker.rsh:266:21:application', stdlib.UInt_max, '0')];
  const v2718 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:21:application', stdlib.UInt_max, '0')];
  const v2724 = stdlib.sub(v2718, v2718);
  const v2727 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '1')];
  const v2728 = v2717[stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '2')];
  const v2729 = [v2724, v2727, v2728];
  const v2730 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:266:55:application', stdlib.UInt_max, '0'), v2729);
  ;
  const v2731 = v2730[stdlib.checkedBigNumberify('./staker.rsh:268:21:application', stdlib.UInt_max, '1')];
  const v2732 = v2731[stdlib.checkedBigNumberify('./staker.rsh:268:21:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  
  
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Staker_harvest0_591: ctc11,
    Staker_stake0_591: ctc12,
    Staker_withdraw0_591: ctc12
    });
  const ctc14 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1703 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:228:9:application call to [unknown function] (defined at: ./staker.rsh:228:9:function exp)', 'at ./staker.rsh:126:19:application call to "runStaker_harvest0_591" (defined at: ./staker.rsh:228:9:function exp)', 'at ./staker.rsh:126:19:application call to [unknown function] (defined at: ./staker.rsh:126:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v1707 = ['Staker_harvest0_591', v1703];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597, v1707],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:229:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:229:19:decimal', stdlib.UInt_max, '0'), v1370]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn1;
      
      switch (v1742[0]) {
        case 'Staker_harvest0_591': {
          const v1745 = v1742[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          ;
          const v1781 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
          const v1782 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
          const v1786 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
          const v1787 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
          const v1788 = [v1782, v1786, v1787];
          const v1789 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v1788);
          ;
          const v1791 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1741), null);
          const v1793 = {
            rewards: v1428,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v1794 = stdlib.fromSome(v1791, v1793);
          const v1795 = v1794.stake;
          const v1800 = v1794.rewards;
          const v1801 = v1800[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '0')];
          let v1806;
          if (v1573) {
            v1806 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1808 = stdlib.sub(v1571, v1432);
            v1806 = v1808;
            }
          const v1810 = stdlib.mul(v1806, v1391);
          const v1811 = stdlib.add(v1569, v1810);
          const v1813 = stdlib.le(v1811, v1578);
          const v1814 = v1813 ? v1811 : v1578;
          let v1817;
          const v1818 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
          if (v1818) {
            v1817 = v1814;
            }
          else {
            const v1819 = stdlib.muldiv(v1814, v1795, v1433);
            v1817 = v1819;
            }
          let v1820;
          const v1821 = stdlib.ge(v1801, v1817);
          if (v1821) {
            v1820 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1822 = stdlib.sub(v1817, v1801);
            v1820 = v1822;
            }
          const v1823 = stdlib.le(v1820, v1580);
          const v1824 = v1823 ? v1820 : v1580;
          const v1836 = v1800[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '1')];
          let v1841;
          if (v1573) {
            v1841 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1843 = stdlib.sub(v1571, v1432);
            v1841 = v1843;
            }
          const v1845 = stdlib.mul(v1841, v1393);
          const v1846 = stdlib.add(v1583, v1845);
          const v1848 = stdlib.le(v1846, v1592);
          const v1849 = v1848 ? v1846 : v1592;
          let v1852;
          if (v1818) {
            v1852 = v1849;
            }
          else {
            const v1854 = stdlib.muldiv(v1849, v1795, v1433);
            v1852 = v1854;
            }
          let v1855;
          const v1856 = stdlib.ge(v1836, v1852);
          if (v1856) {
            v1855 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1857 = stdlib.sub(v1852, v1836);
            v1855 = v1857;
            }
          const v1858 = stdlib.le(v1855, v1594);
          const v1859 = v1858 ? v1855 : v1594;
          const v1861 = [v1824, v1859];
          const v1870 = stdlib.sub(v1441, v1824);
          sim_r.txns.push({
            amt: v1824,
            kind: 'from',
            to: v1741,
            tok: undefined /* Nothing */
            });
          const v1871 = v1789[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0')];
          const v1872 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0')];
          const v1876 = stdlib.sub(v1872, v1859);
          const v1879 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '1')];
          const v1880 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '2')];
          const v1881 = [v1876, v1879, v1880];
          const v1882 = stdlib.Array_set(v1789, stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0'), v1881);
          sim_r.txns.push({
            amt: v1859,
            kind: 'from',
            to: v1741,
            tok: v1369
            });
          const v1884 = stdlib.sub(v1578, v1824);
          const v1886 = stdlib.sub(v1592, v1859);
          const v1899 = stdlib.add(v1801, v1824);
          const v1901 = stdlib.add(v1836, v1859);
          const v1902 = [v1899, v1901];
          const v1903 = {
            rewards: v1902,
            stake: v1795
            };
          await stdlib.simMapSet(sim_r, 0, v1741, v1903);
          const v1908 = [v1884, v1886];
          const v1909 = {
            totalRemaining: v1908,
            userReceived: v1861
            };
          const v1910 = await txn1.getOutput('Staker_harvest', 'v1909', ctc14, v1909);
          
          null;
          const v1924 = stdlib.sub(v1580, v1824);
          const v1925 = stdlib.sub(v1594, v1859);
          const v4750 = v1908;
          const v4751 = v1435;
          const v4752 = v1433;
          const v4753 = v1743;
          const v4754 = v1434;
          const v4755 = v1882;
          const v4756 = v1870;
          const v4758 = stdlib.le(v1434, v1412);
          const v4759 = v1818 ? v4758 : true;
          if (v4759) {
            const v4760 = v1924;
            const v4761 = stdlib.le(v1412, v1434);
            const v4762 = v4761 ? v1412 : v1434;
            let v4763;
            const v4764 = stdlib.ge(v1435, v4762);
            if (v4764) {
              v4763 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v4765 = stdlib.sub(v4762, v1435);
              v4763 = v4765;
              }
            const v4766 = stdlib.mul(v4763, v1391);
            const v4767 = stdlib.add(v1924, v4766);
            const v4768 = v1884;
            const v4769 = stdlib.le(v4767, v1884);
            const v4770 = v4769 ? v4767 : v1884;
            const v4771 = v1925;
            let v4772;
            if (v4764) {
              v4772 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v4773 = stdlib.sub(v4762, v1435);
              v4772 = v4773;
              }
            const v4774 = stdlib.mul(v4772, v1393);
            const v4775 = stdlib.add(v1925, v4774);
            const v4776 = v1886;
            const v4777 = stdlib.le(v4775, v1886);
            const v4778 = v4777 ? v4775 : v1886;
            const v4779 = [v4770, v4778];
            sim_r.isHalt = false;
            }
          else {
            const v4780 = v1924;
            const v4781 = stdlib.le(v1412, v1434);
            const v4782 = v4781 ? v1412 : v1434;
            let v4783;
            const v4784 = stdlib.ge(v1435, v4782);
            if (v4784) {
              v4783 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v4785 = stdlib.sub(v4782, v1435);
              v4783 = v4785;
              }
            const v4786 = stdlib.mul(v4783, v1391);
            const v4787 = stdlib.add(v1924, v4786);
            const v4788 = v1884;
            const v4789 = stdlib.le(v4787, v1884);
            const v4790 = v4789 ? v4787 : v1884;
            const v4791 = v1925;
            let v4792;
            if (v4784) {
              v4792 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v4793 = stdlib.sub(v4782, v1435);
              v4792 = v4793;
              }
            const v4794 = stdlib.mul(v4792, v1393);
            const v4795 = stdlib.add(v1925, v4794);
            const v4796 = v1886;
            const v4797 = stdlib.le(v4795, v1886);
            const v4798 = v4797 ? v4795 : v1886;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_stake0_591': {
          const v2028 = v1742[1];
          
          break;
          }
        case 'Staker_withdraw0_591': {
          const v2311 = v1742[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn1;
  switch (v1742[0]) {
    case 'Staker_harvest0_591': {
      const v1745 = v1742[1];
      undefined /* setApiDetails */;
      ;
      const v1781 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
      const v1782 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
      const v1786 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
      const v1787 = v1781[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
      const v1788 = [v1782, v1786, v1787];
      const v1789 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v1788);
      ;
      const v1791 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1741), null);
      const v1793 = {
        rewards: v1428,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1794 = stdlib.fromSome(v1791, v1793);
      const v1795 = v1794.stake;
      const v1800 = v1794.rewards;
      const v1801 = v1800[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '0')];
      let v1806;
      if (v1573) {
        v1806 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1808 = stdlib.sub(v1571, v1432);
        v1806 = v1808;
        }
      const v1810 = stdlib.mul(v1806, v1391);
      const v1811 = stdlib.add(v1569, v1810);
      const v1813 = stdlib.le(v1811, v1578);
      const v1814 = v1813 ? v1811 : v1578;
      let v1817;
      const v1818 = stdlib.eq(v1433, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
      if (v1818) {
        v1817 = v1814;
        }
      else {
        const v1819 = stdlib.muldiv(v1814, v1795, v1433);
        v1817 = v1819;
        }
      let v1820;
      const v1821 = stdlib.ge(v1801, v1817);
      if (v1821) {
        v1820 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1822 = stdlib.sub(v1817, v1801);
        v1820 = v1822;
        }
      const v1823 = stdlib.le(v1820, v1580);
      const v1824 = v1823 ? v1820 : v1580;
      const v1836 = v1800[stdlib.checkedBigNumberify('./staker.rsh:145:54:array ref', stdlib.UInt_max, '1')];
      let v1841;
      if (v1573) {
        v1841 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1843 = stdlib.sub(v1571, v1432);
        v1841 = v1843;
        }
      const v1845 = stdlib.mul(v1841, v1393);
      const v1846 = stdlib.add(v1583, v1845);
      const v1848 = stdlib.le(v1846, v1592);
      const v1849 = v1848 ? v1846 : v1592;
      let v1852;
      if (v1818) {
        v1852 = v1849;
        }
      else {
        const v1854 = stdlib.muldiv(v1849, v1795, v1433);
        v1852 = v1854;
        }
      let v1855;
      const v1856 = stdlib.ge(v1836, v1852);
      if (v1856) {
        v1855 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1857 = stdlib.sub(v1852, v1836);
        v1855 = v1857;
        }
      const v1858 = stdlib.le(v1855, v1594);
      const v1859 = v1858 ? v1855 : v1594;
      const v1861 = [v1824, v1859];
      const v1870 = stdlib.sub(v1441, v1824);
      ;
      const v1871 = v1789[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0')];
      const v1872 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0')];
      const v1876 = stdlib.sub(v1872, v1859);
      const v1879 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '1')];
      const v1880 = v1871[stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '2')];
      const v1881 = [v1876, v1879, v1880];
      const v1882 = stdlib.Array_set(v1789, stdlib.checkedBigNumberify('./staker.rsh:234:56:application', stdlib.UInt_max, '0'), v1881);
      ;
      const v1884 = stdlib.sub(v1578, v1824);
      const v1886 = stdlib.sub(v1592, v1859);
      const v1899 = stdlib.add(v1801, v1824);
      const v1901 = stdlib.add(v1836, v1859);
      const v1902 = [v1899, v1901];
      const v1903 = {
        rewards: v1902,
        stake: v1795
        };
      await stdlib.mapSet(map0, v1741, v1903);
      const v1908 = [v1884, v1886];
      const v1909 = {
        totalRemaining: v1908,
        userReceived: v1861
        };
      const v1910 = await txn1.getOutput('Staker_harvest', 'v1909', ctc14, v1909);
      if (v772) {
        stdlib.protect(ctc0, await interact.out(v1745, v1910), {
          at: './staker.rsh:228:10:application',
          fs: ['at ./staker.rsh:228:10:application call to [unknown function] (defined at: ./staker.rsh:228:10:function exp)', 'at ./staker.rsh:250:10:application call to "k" (defined at: ./staker.rsh:230:7:function exp)', 'at ./staker.rsh:230:7:application call to [unknown function] (defined at: ./staker.rsh:230:7:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v1924 = stdlib.sub(v1580, v1824);
      const v1925 = stdlib.sub(v1594, v1859);
      const v4750 = v1908;
      const v4751 = v1435;
      const v4752 = v1433;
      const v4753 = v1743;
      const v4754 = v1434;
      const v4755 = v1882;
      const v4756 = v1870;
      const v4758 = stdlib.le(v1434, v1412);
      const v4759 = v1818 ? v4758 : true;
      if (v4759) {
        const v4760 = v1924;
        const v4761 = stdlib.le(v1412, v1434);
        const v4762 = v4761 ? v1412 : v1434;
        let v4763;
        const v4764 = stdlib.ge(v1435, v4762);
        if (v4764) {
          v4763 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v4765 = stdlib.sub(v4762, v1435);
          v4763 = v4765;
          }
        const v4766 = stdlib.mul(v4763, v1391);
        const v4767 = stdlib.add(v1924, v4766);
        const v4768 = v1884;
        const v4769 = stdlib.le(v4767, v1884);
        const v4770 = v4769 ? v4767 : v1884;
        const v4771 = v1925;
        let v4772;
        if (v4764) {
          v4772 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v4773 = stdlib.sub(v4762, v1435);
          v4772 = v4773;
          }
        const v4774 = stdlib.mul(v4772, v1393);
        const v4775 = stdlib.add(v1925, v4774);
        const v4776 = v1886;
        const v4777 = stdlib.le(v4775, v1886);
        const v4778 = v4777 ? v4775 : v1886;
        const v4779 = [v4770, v4778];
        return;
        }
      else {
        const v4780 = v1924;
        const v4781 = stdlib.le(v1412, v1434);
        const v4782 = v4781 ? v1412 : v1434;
        let v4783;
        const v4784 = stdlib.ge(v1435, v4782);
        if (v4784) {
          v4783 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v4785 = stdlib.sub(v4782, v1435);
          v4783 = v4785;
          }
        const v4786 = stdlib.mul(v4783, v1391);
        const v4787 = stdlib.add(v1924, v4786);
        const v4788 = v1884;
        const v4789 = stdlib.le(v4787, v1884);
        const v4790 = v4789 ? v4787 : v1884;
        const v4791 = v1925;
        let v4792;
        if (v4784) {
          v4792 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v4793 = stdlib.sub(v4782, v1435);
          v4792 = v4793;
          }
        const v4794 = stdlib.mul(v4792, v1393);
        const v4795 = stdlib.add(v1925, v4794);
        const v4796 = v1886;
        const v4797 = stdlib.le(v4795, v1886);
        const v4798 = v4797 ? v4795 : v1886;
        return;
        }
      break;
      }
    case 'Staker_stake0_591': {
      const v2028 = v1742[1];
      return;
      break;
      }
    case 'Staker_withdraw0_591': {
      const v2311 = v1742[1];
      return;
      break;
      }
    }
  
  
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Staker_harvest0_591: ctc12,
    Staker_stake0_591: ctc11,
    Staker_withdraw0_591: ctc11
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1676 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:176:9:application call to [unknown function] (defined at: ./staker.rsh:176:9:function exp)', 'at ./staker.rsh:126:19:application call to "runStaker_stake0_591" (defined at: ./staker.rsh:176:9:function exp)', 'at ./staker.rsh:126:19:application call to [unknown function] (defined at: ./staker.rsh:126:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v1677 = v1676[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1683 = ['Staker_stake0_591', v1676];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597, v1683],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:177:18:decimal', stdlib.UInt_max, '0'), [[v1677, v1370]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn1;
      
      switch (v1742[0]) {
        case 'Staker_harvest0_591': {
          const v1745 = v1742[1];
          
          break;
          }
        case 'Staker_stake0_591': {
          const v2028 = v1742[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v2040 = v2028[stdlib.checkedBigNumberify('./staker.rsh:176:9:spread', stdlib.UInt_max, '0')];
          ;
          const v2064 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
          const v2065 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
          const v2066 = stdlib.add(v2065, v2040);
          const v2069 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
          const v2070 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
          const v2071 = [v2066, v2069, v2070];
          const v2072 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v2071);
          sim_r.txns.push({
            amt: v2040,
            kind: 'to',
            tok: v1370
            });
          const v2216 = stdlib.add(v1433, v2040);
          const v2217 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1741), null);
          const v2219 = {
            rewards: v1428,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v2220 = stdlib.fromSome(v2217, v2219);
          const v2221 = v2220.stake;
          const v2222 = stdlib.add(v2221, v2040);
          const v2227 = v2220.rewards;
          let v2228;
          const v2229 = stdlib.eq(v2216, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
          if (v2229) {
            v2228 = v1580;
            }
          else {
            const v2230 = stdlib.muldiv(v1580, v2040, v2216);
            v2228 = v2230;
            }
          const v2231 = v2227[stdlib.checkedBigNumberify('./staker.rsh:185:29:array ref', stdlib.UInt_max, '0')];
          const v2232 = stdlib.add(v2231, v2228);
          let v2233;
          if (v2229) {
            v2233 = v1594;
            }
          else {
            const v2235 = stdlib.muldiv(v1594, v2040, v2216);
            v2233 = v2235;
            }
          const v2236 = v2227[stdlib.checkedBigNumberify('./staker.rsh:185:29:array ref', stdlib.UInt_max, '1')];
          const v2237 = stdlib.add(v2236, v2233);
          const v2238 = [v2232, v2237];
          const v2239 = {
            rewards: v2238,
            stake: v2222
            };
          await stdlib.simMapSet(sim_r, 0, v1741, v2239);
          const v2240 = {
            newEveryoneStaked: v2216,
            newUserStaked: v2222
            };
          const v2241 = await txn1.getOutput('Staker_stake', 'v2240', ctc14, v2240);
          
          null;
          const v5014 = v1431;
          const v5015 = v1435;
          const v5016 = v2216;
          const v5017 = v1743;
          const v5018 = v1434;
          const v5019 = v2072;
          const v5020 = v1441;
          const v5022 = stdlib.le(v1434, v1412);
          const v5023 = v2229 ? v5022 : true;
          if (v5023) {
            const v5024 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
            const v5025 = stdlib.le(v1412, v1434);
            const v5026 = v5025 ? v1412 : v1434;
            let v5027;
            const v5028 = stdlib.ge(v1435, v5026);
            if (v5028) {
              v5027 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5029 = stdlib.sub(v5026, v1435);
              v5027 = v5029;
              }
            const v5030 = stdlib.mul(v5027, v1391);
            const v5031 = stdlib.add(v5024, v5030);
            const v5032 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
            const v5033 = stdlib.le(v5031, v5032);
            const v5034 = v5033 ? v5031 : v5032;
            const v5035 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
            let v5036;
            if (v5028) {
              v5036 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5037 = stdlib.sub(v5026, v1435);
              v5036 = v5037;
              }
            const v5038 = stdlib.mul(v5036, v1393);
            const v5039 = stdlib.add(v5035, v5038);
            const v5040 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
            const v5041 = stdlib.le(v5039, v5040);
            const v5042 = v5041 ? v5039 : v5040;
            const v5043 = [v5034, v5042];
            sim_r.isHalt = false;
            }
          else {
            const v5044 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
            const v5045 = stdlib.le(v1412, v1434);
            const v5046 = v5045 ? v1412 : v1434;
            let v5047;
            const v5048 = stdlib.ge(v1435, v5046);
            if (v5048) {
              v5047 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5049 = stdlib.sub(v5046, v1435);
              v5047 = v5049;
              }
            const v5050 = stdlib.mul(v5047, v1391);
            const v5051 = stdlib.add(v5044, v5050);
            const v5052 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
            const v5053 = stdlib.le(v5051, v5052);
            const v5054 = v5053 ? v5051 : v5052;
            const v5055 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
            let v5056;
            if (v5048) {
              v5056 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5057 = stdlib.sub(v5046, v1435);
              v5056 = v5057;
              }
            const v5058 = stdlib.mul(v5056, v1393);
            const v5059 = stdlib.add(v5055, v5058);
            const v5060 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
            const v5061 = stdlib.le(v5059, v5060);
            const v5062 = v5061 ? v5059 : v5060;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_withdraw0_591': {
          const v2311 = v1742[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn1;
  switch (v1742[0]) {
    case 'Staker_harvest0_591': {
      const v1745 = v1742[1];
      return;
      break;
      }
    case 'Staker_stake0_591': {
      const v2028 = v1742[1];
      undefined /* setApiDetails */;
      const v2040 = v2028[stdlib.checkedBigNumberify('./staker.rsh:176:9:spread', stdlib.UInt_max, '0')];
      ;
      const v2064 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
      const v2065 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
      const v2066 = stdlib.add(v2065, v2040);
      const v2069 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
      const v2070 = v2064[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
      const v2071 = [v2066, v2069, v2070];
      const v2072 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v2071);
      ;
      const v2216 = stdlib.add(v1433, v2040);
      const v2217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1741), null);
      const v2219 = {
        rewards: v1428,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2220 = stdlib.fromSome(v2217, v2219);
      const v2221 = v2220.stake;
      const v2222 = stdlib.add(v2221, v2040);
      const v2227 = v2220.rewards;
      let v2228;
      const v2229 = stdlib.eq(v2216, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
      if (v2229) {
        v2228 = v1580;
        }
      else {
        const v2230 = stdlib.muldiv(v1580, v2040, v2216);
        v2228 = v2230;
        }
      const v2231 = v2227[stdlib.checkedBigNumberify('./staker.rsh:185:29:array ref', stdlib.UInt_max, '0')];
      const v2232 = stdlib.add(v2231, v2228);
      let v2233;
      if (v2229) {
        v2233 = v1594;
        }
      else {
        const v2235 = stdlib.muldiv(v1594, v2040, v2216);
        v2233 = v2235;
        }
      const v2236 = v2227[stdlib.checkedBigNumberify('./staker.rsh:185:29:array ref', stdlib.UInt_max, '1')];
      const v2237 = stdlib.add(v2236, v2233);
      const v2238 = [v2232, v2237];
      const v2239 = {
        rewards: v2238,
        stake: v2222
        };
      await stdlib.mapSet(map0, v1741, v2239);
      const v2240 = {
        newEveryoneStaked: v2216,
        newUserStaked: v2222
        };
      const v2241 = await txn1.getOutput('Staker_stake', 'v2240', ctc14, v2240);
      if (v772) {
        stdlib.protect(ctc0, await interact.out(v2028, v2241), {
          at: './staker.rsh:176:10:application',
          fs: ['at ./staker.rsh:176:10:application call to [unknown function] (defined at: ./staker.rsh:176:10:function exp)', 'at ./staker.rsh:195:10:application call to "k" (defined at: ./staker.rsh:178:7:function exp)', 'at ./staker.rsh:178:7:application call to [unknown function] (defined at: ./staker.rsh:178:7:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      null;
      const v5014 = v1431;
      const v5015 = v1435;
      const v5016 = v2216;
      const v5017 = v1743;
      const v5018 = v1434;
      const v5019 = v2072;
      const v5020 = v1441;
      const v5022 = stdlib.le(v1434, v1412);
      const v5023 = v2229 ? v5022 : true;
      if (v5023) {
        const v5024 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
        const v5025 = stdlib.le(v1412, v1434);
        const v5026 = v5025 ? v1412 : v1434;
        let v5027;
        const v5028 = stdlib.ge(v1435, v5026);
        if (v5028) {
          v5027 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5029 = stdlib.sub(v5026, v1435);
          v5027 = v5029;
          }
        const v5030 = stdlib.mul(v5027, v1391);
        const v5031 = stdlib.add(v5024, v5030);
        const v5032 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
        const v5033 = stdlib.le(v5031, v5032);
        const v5034 = v5033 ? v5031 : v5032;
        const v5035 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
        let v5036;
        if (v5028) {
          v5036 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5037 = stdlib.sub(v5026, v1435);
          v5036 = v5037;
          }
        const v5038 = stdlib.mul(v5036, v1393);
        const v5039 = stdlib.add(v5035, v5038);
        const v5040 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
        const v5041 = stdlib.le(v5039, v5040);
        const v5042 = v5041 ? v5039 : v5040;
        const v5043 = [v5034, v5042];
        return;
        }
      else {
        const v5044 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
        const v5045 = stdlib.le(v1412, v1434);
        const v5046 = v5045 ? v1412 : v1434;
        let v5047;
        const v5048 = stdlib.ge(v1435, v5046);
        if (v5048) {
          v5047 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5049 = stdlib.sub(v5046, v1435);
          v5047 = v5049;
          }
        const v5050 = stdlib.mul(v5047, v1391);
        const v5051 = stdlib.add(v5044, v5050);
        const v5052 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
        const v5053 = stdlib.le(v5051, v5052);
        const v5054 = v5053 ? v5051 : v5052;
        const v5055 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
        let v5056;
        if (v5048) {
          v5056 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5057 = stdlib.sub(v5046, v1435);
          v5056 = v5057;
          }
        const v5058 = stdlib.mul(v5056, v1393);
        const v5059 = stdlib.add(v5055, v5058);
        const v5060 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
        const v5061 = stdlib.le(v5059, v5060);
        const v5062 = v5061 ? v5059 : v5060;
        return;
        }
      break;
      }
    case 'Staker_withdraw0_591': {
      const v2311 = v1742[1];
      return;
      break;
      }
    }
  
  
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Staker_harvest0_591: ctc12,
    Staker_stake0_591: ctc11,
    Staker_withdraw0_591: ctc11
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1685 = ctc.selfAddress();
  const v1687 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:200:7:application call to [unknown function] (defined at: ./staker.rsh:200:7:function exp)', 'at ./staker.rsh:126:19:application call to "runStaker_withdraw0_591" (defined at: ./staker.rsh:199:9:function exp)', 'at ./staker.rsh:126:19:application call to [unknown function] (defined at: ./staker.rsh:126:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v1688 = v1687[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1690 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1685), null);
  const v1692 = {
    rewards: v1428,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v1693 = stdlib.fromSome(v1690, v1692);
  const v1694 = v1693.stake;
  const v1695 = stdlib.le(v1688, v1694);
  stdlib.assert(v1695, {
    at: './staker.rsh:200:23:application',
    fs: ['at ./staker.rsh:200:7:application call to [unknown function] (defined at: ./staker.rsh:200:14:function exp)', 'at ./staker.rsh:200:7:application call to [unknown function] (defined at: ./staker.rsh:200:7:function exp)', 'at ./staker.rsh:126:19:application call to "runStaker_withdraw0_591" (defined at: ./staker.rsh:199:9:function exp)', 'at ./staker.rsh:126:19:application call to [unknown function] (defined at: ./staker.rsh:126:19:function exp)'],
    msg: null,
    who: 'Staker_withdraw'
    });
  const v1699 = ['Staker_withdraw0_591', v1687];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1367, v1368, v1369, v1370, v1391, v1393, v1412, v1428, v1431, v1432, v1433, v1434, v1435, v1440, v1441, v1569, v1571, v1573, v1578, v1580, v1583, v1592, v1594, v1597, v1699],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:201:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:201:20:decimal', stdlib.UInt_max, '0'), v1370]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn1;
      
      switch (v1742[0]) {
        case 'Staker_harvest0_591': {
          const v1745 = v1742[1];
          
          break;
          }
        case 'Staker_stake0_591': {
          const v2028 = v1742[1];
          
          break;
          }
        case 'Staker_withdraw0_591': {
          const v2311 = v1742[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          ;
          const v2347 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
          const v2348 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
          const v2352 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
          const v2353 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
          const v2354 = [v2348, v2352, v2353];
          const v2355 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v2354);
          ;
          const v2537 = v2311[stdlib.checkedBigNumberify('./staker.rsh:199:9:spread', stdlib.UInt_max, '0')];
          const v2538 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1741), null);
          const v2540 = {
            rewards: v1428,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v2541 = stdlib.fromSome(v2538, v2540);
          const v2542 = v2541.stake;
          const v2544 = stdlib.le(v2537, v2542);
          ;
          const v2545 = v2355[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1')];
          const v2546 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '0')];
          const v2550 = stdlib.sub(v2546, v2537);
          const v2553 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1')];
          const v2554 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '2')];
          const v2555 = [v2550, v2553, v2554];
          const v2556 = stdlib.Array_set(v2355, stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1'), v2555);
          sim_r.txns.push({
            amt: v2537,
            kind: 'from',
            to: v1741,
            tok: v1370
            });
          const v2557 = stdlib.sub(v1433, v2537);
          const v2558 = stdlib.sub(v2542, v2537);
          const v2563 = v2541.rewards;
          const v2564 = v2563[stdlib.checkedBigNumberify('./staker.rsh:214:50:array ref', stdlib.UInt_max, '0')];
          let v2565;
          const v2566 = stdlib.eq(v2557, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
          if (v2566) {
            v2565 = v1580;
            }
          else {
            const v2567 = stdlib.muldiv(v1580, v2537, v2557);
            v2565 = v2567;
            }
          let v2568;
          const v2569 = stdlib.ge(v2565, v2564);
          if (v2569) {
            v2568 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2570 = stdlib.sub(v2564, v2565);
            v2568 = v2570;
            }
          const v2571 = v2563[stdlib.checkedBigNumberify('./staker.rsh:214:50:array ref', stdlib.UInt_max, '1')];
          let v2572;
          if (v2566) {
            v2572 = v1594;
            }
          else {
            const v2574 = stdlib.muldiv(v1594, v2537, v2557);
            v2572 = v2574;
            }
          let v2575;
          const v2576 = stdlib.ge(v2572, v2571);
          if (v2576) {
            v2575 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2577 = stdlib.sub(v2571, v2572);
            v2575 = v2577;
            }
          const v2578 = [v2568, v2575];
          const v2579 = {
            rewards: v2578,
            stake: v2558
            };
          await stdlib.simMapSet(sim_r, 0, v1741, v2579);
          const v2581 = {
            newEveryoneStaked: v2557,
            newUserStaked: v2558
            };
          const v2582 = await txn1.getOutput('Staker_withdraw', 'v2581', ctc14, v2581);
          
          null;
          const v5278 = v1431;
          const v5279 = v1435;
          const v5280 = v2557;
          const v5281 = v1743;
          const v5282 = v1434;
          const v5283 = v2556;
          const v5284 = v1441;
          const v5286 = stdlib.le(v1434, v1412);
          const v5287 = v2566 ? v5286 : true;
          if (v5287) {
            const v5288 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
            const v5289 = stdlib.le(v1412, v1434);
            const v5290 = v5289 ? v1412 : v1434;
            let v5291;
            const v5292 = stdlib.ge(v1435, v5290);
            if (v5292) {
              v5291 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5293 = stdlib.sub(v5290, v1435);
              v5291 = v5293;
              }
            const v5294 = stdlib.mul(v5291, v1391);
            const v5295 = stdlib.add(v5288, v5294);
            const v5296 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
            const v5297 = stdlib.le(v5295, v5296);
            const v5298 = v5297 ? v5295 : v5296;
            const v5299 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
            let v5300;
            if (v5292) {
              v5300 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5301 = stdlib.sub(v5290, v1435);
              v5300 = v5301;
              }
            const v5302 = stdlib.mul(v5300, v1393);
            const v5303 = stdlib.add(v5299, v5302);
            const v5304 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
            const v5305 = stdlib.le(v5303, v5304);
            const v5306 = v5305 ? v5303 : v5304;
            const v5307 = [v5298, v5306];
            sim_r.isHalt = false;
            }
          else {
            const v5308 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
            const v5309 = stdlib.le(v1412, v1434);
            const v5310 = v5309 ? v1412 : v1434;
            let v5311;
            const v5312 = stdlib.ge(v1435, v5310);
            if (v5312) {
              v5311 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5313 = stdlib.sub(v5310, v1435);
              v5311 = v5313;
              }
            const v5314 = stdlib.mul(v5311, v1391);
            const v5315 = stdlib.add(v5308, v5314);
            const v5316 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
            const v5317 = stdlib.le(v5315, v5316);
            const v5318 = v5317 ? v5315 : v5316;
            const v5319 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
            let v5320;
            if (v5312) {
              v5320 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5321 = stdlib.sub(v5310, v1435);
              v5320 = v5321;
              }
            const v5322 = stdlib.mul(v5320, v1393);
            const v5323 = stdlib.add(v5319, v5322);
            const v5324 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
            const v5325 = stdlib.le(v5323, v5324);
            const v5326 = v5325 ? v5323 : v5324;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1742], secs: v1744, time: v1743, didSend: v772, from: v1741 } = txn1;
  switch (v1742[0]) {
    case 'Staker_harvest0_591': {
      const v1745 = v1742[1];
      return;
      break;
      }
    case 'Staker_stake0_591': {
      const v2028 = v1742[1];
      return;
      break;
      }
    case 'Staker_withdraw0_591': {
      const v2311 = v1742[1];
      undefined /* setApiDetails */;
      ;
      const v2347 = v1440[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
      const v2348 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '0')];
      const v2352 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1')];
      const v2353 = v2347[stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '2')];
      const v2354 = [v2348, v2352, v2353];
      const v2355 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./staker.rsh:126:19:dot', stdlib.UInt_max, '1'), v2354);
      ;
      const v2537 = v2311[stdlib.checkedBigNumberify('./staker.rsh:199:9:spread', stdlib.UInt_max, '0')];
      const v2538 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1741), null);
      const v2540 = {
        rewards: v1428,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2541 = stdlib.fromSome(v2538, v2540);
      const v2542 = v2541.stake;
      const v2544 = stdlib.le(v2537, v2542);
      stdlib.assert(v2544, {
        at: './staker.rsh:205:16:application',
        fs: ['at ./staker.rsh:202:7:application call to [unknown function] (defined at: ./staker.rsh:202:7:function exp)'],
        msg: null,
        who: 'Staker_withdraw'
        });
      const v2545 = v2355[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1')];
      const v2546 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '0')];
      const v2550 = stdlib.sub(v2546, v2537);
      const v2553 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1')];
      const v2554 = v2545[stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '2')];
      const v2555 = [v2550, v2553, v2554];
      const v2556 = stdlib.Array_set(v2355, stdlib.checkedBigNumberify('./staker.rsh:206:41:application', stdlib.UInt_max, '1'), v2555);
      ;
      const v2557 = stdlib.sub(v1433, v2537);
      const v2558 = stdlib.sub(v2542, v2537);
      const v2563 = v2541.rewards;
      const v2564 = v2563[stdlib.checkedBigNumberify('./staker.rsh:214:50:array ref', stdlib.UInt_max, '0')];
      let v2565;
      const v2566 = stdlib.eq(v2557, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
      if (v2566) {
        v2565 = v1580;
        }
      else {
        const v2567 = stdlib.muldiv(v1580, v2537, v2557);
        v2565 = v2567;
        }
      let v2568;
      const v2569 = stdlib.ge(v2565, v2564);
      if (v2569) {
        v2568 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2570 = stdlib.sub(v2564, v2565);
        v2568 = v2570;
        }
      const v2571 = v2563[stdlib.checkedBigNumberify('./staker.rsh:214:50:array ref', stdlib.UInt_max, '1')];
      let v2572;
      if (v2566) {
        v2572 = v1594;
        }
      else {
        const v2574 = stdlib.muldiv(v1594, v2537, v2557);
        v2572 = v2574;
        }
      let v2575;
      const v2576 = stdlib.ge(v2572, v2571);
      if (v2576) {
        v2575 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2577 = stdlib.sub(v2571, v2572);
        v2575 = v2577;
        }
      const v2578 = [v2568, v2575];
      const v2579 = {
        rewards: v2578,
        stake: v2558
        };
      await stdlib.mapSet(map0, v1741, v2579);
      const v2581 = {
        newEveryoneStaked: v2557,
        newUserStaked: v2558
        };
      const v2582 = await txn1.getOutput('Staker_withdraw', 'v2581', ctc14, v2581);
      if (v772) {
        stdlib.protect(ctc0, await interact.out(v2311, v2582), {
          at: './staker.rsh:199:10:application',
          fs: ['at ./staker.rsh:199:10:application call to [unknown function] (defined at: ./staker.rsh:199:10:function exp)', 'at ./staker.rsh:224:10:application call to "k" (defined at: ./staker.rsh:202:7:function exp)', 'at ./staker.rsh:202:7:application call to [unknown function] (defined at: ./staker.rsh:202:7:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      null;
      const v5278 = v1431;
      const v5279 = v1435;
      const v5280 = v2557;
      const v5281 = v1743;
      const v5282 = v1434;
      const v5283 = v2556;
      const v5284 = v1441;
      const v5286 = stdlib.le(v1434, v1412);
      const v5287 = v2566 ? v5286 : true;
      if (v5287) {
        const v5288 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
        const v5289 = stdlib.le(v1412, v1434);
        const v5290 = v5289 ? v1412 : v1434;
        let v5291;
        const v5292 = stdlib.ge(v1435, v5290);
        if (v5292) {
          v5291 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5293 = stdlib.sub(v5290, v1435);
          v5291 = v5293;
          }
        const v5294 = stdlib.mul(v5291, v1391);
        const v5295 = stdlib.add(v5288, v5294);
        const v5296 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
        const v5297 = stdlib.le(v5295, v5296);
        const v5298 = v5297 ? v5295 : v5296;
        const v5299 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
        let v5300;
        if (v5292) {
          v5300 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5301 = stdlib.sub(v5290, v1435);
          v5300 = v5301;
          }
        const v5302 = stdlib.mul(v5300, v1393);
        const v5303 = stdlib.add(v5299, v5302);
        const v5304 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
        const v5305 = stdlib.le(v5303, v5304);
        const v5306 = v5305 ? v5303 : v5304;
        const v5307 = [v5298, v5306];
        return;
        }
      else {
        const v5308 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '0')];
        const v5309 = stdlib.le(v1412, v1434);
        const v5310 = v5309 ? v1412 : v1434;
        let v5311;
        const v5312 = stdlib.ge(v1435, v5310);
        if (v5312) {
          v5311 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5313 = stdlib.sub(v5310, v1435);
          v5311 = v5313;
          }
        const v5314 = stdlib.mul(v5311, v1391);
        const v5315 = stdlib.add(v5308, v5314);
        const v5316 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '0')];
        const v5317 = stdlib.le(v5315, v5316);
        const v5318 = v5317 ? v5315 : v5316;
        const v5319 = v1597[stdlib.checkedBigNumberify('./staker.rsh:132:31:array ref', stdlib.UInt_max, '1')];
        let v5320;
        if (v5312) {
          v5320 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5321 = stdlib.sub(v5310, v1435);
          v5320 = v5321;
          }
        const v5322 = stdlib.mul(v5320, v1393);
        const v5323 = stdlib.add(v5319, v5322);
        const v5324 = v1431[stdlib.checkedBigNumberify('./staker.rsh:133:27:array ref', stdlib.UInt_max, '1')];
        const v5325 = stdlib.le(v5323, v5324);
        const v5326 = v5325 ? v5323 : v5324;
        return;
        }
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Any_halt()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`],
    pure: [`Info()((uint64,uint64,(uint64,uint64),uint64),uint64,(uint64,uint64),uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`],
    sigs: [`Any_halt()byte[0]`, `Info()((uint64,uint64,(uint64,uint64),uint64),uint64,(uint64,uint64),uint64)`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`]
    },
  appApproval: `BiAgAAgBBAUQA1hokAGYAdoBYEhQAqCNBhnWtZezCPCp3a0Nu4uE1Q4YmYT57gnrAfMBgwKLAvsB0gHiAZWY5pcG1Oa52AYmBAEAAQEAAQIiNQAxGEEOACpkSSJbNQEjWzUCMRkkEkEACjEAKCERr2ZCDc02GgAXSUEDwCI1BCQ1BkkhEgxAAyVJIRMMQABcSSEUDEAATSEUEkQ0AUkhBAxAACAhBBJEIRWvNhoBiA2wSTX/VwEYNP8iVU1XEAg1B0INjCEGEkQhFa82GgGIDZBJNf9XARg0/yJVTVcQCDUHQg1sIRMSRCpCCGBJIRYMQAAQIRYSRDYaATX/KTT/UEIDViESEkQ0AUkhBAxAAU8hBBJENhoCFzX/KGQpZFArZFBJNQNJSkpJIQhbNf4hCVs1/SEKWzX8IRdbNfshGFs1+iEZWzX5IRpbNfg0A1dwECOvUDYaAYgNB0k19lcBGDT2IlVNSTX3IQVbNfY091cAEEk19SJbNfQ0/zT+STT/Dk018zT9NPMPSTXxQQAGIjXyQgAHNPM0/Qk18jQDIQtbNPI0AyEHWwsINfA0+zTwSTT7Dk017zT8IhJJNe1BAAc07zXuQgAKNO809h00/Jc17jT0NO4PQQAGIjXsQgAHNO409Ak17DT1I1s16zTxQQAGIjXqQgAHNPM0/Qk16jQDIRtbNOo0AyEMWwsINek0+TTpSTT5Dk016DTtQQAHNOg150IACjToNPYdNPyXNec06zTnD0EABiI15kIABzTnNOsJNeY0+jTsSTT6Dk0WNPg05kk0+A5NFlA1B0IL8SEGEkQ2GgIXNf8oZClkUEk1A0lKSkkhCFs1/iEJWzX9IQpbNfwhHFs1+yELWzX6geoBWzX5gfIBWzX4NANXcBAjr1A2GgGIC7lJNfZXARg09iJVTUk19yEFWzX2NPdXABBJNfUiWzX0NP80/kk0/w5NNfM0/TTzD0k18UEABiI18kIABzTzNP0JNfI0A4HKAVs08jQDIQdbCwg18DT7NPBJNPsOTTXvNPwiEkk17UEABzTvNe5CAAo07zT2HTT8lzXuNPQ07g9BAAYiNexCAAc07jT0CTXsNPUjWzXrNPFBAAYiNepCAAc08zT9CTXqNAMhHVs06jQDIQxbCwg16TT5NOlJNPkOTTXoNO1BAAc06DXnQgAKNOg09h00/Jc15zTrNOcPQQAGIjXmQgAHNOc06wk15jT6NOxJNPoOTRY0+DTmSTT4Dk0WUDUHQgqiSSEeDEAAKEkhHwxAABAhHxJENhoBNf8rNP9QQgCNIR4SRCo1/yg0/1Ajr1BCAHyBx46FOxJENAFJIQQMQAApIQQSRChkKWRQK2RQSTUDVyAoNANXmAhQNANXgBBQNANXaAhQNQdCCjohBhJEKGQpZFBJNQNXICg0A1eYCFA0A1eAEFA0A1doCFA1B0IKFDYaAhc1BDYaAzYaARdJIQYMQAXbSSUMQAT1JRJEIQQ0ARJENARJIhJMNAISEUQoZClkUCtkUEk1A0lKSkpKSkpKSkpKVwAgNf9XICg1/iENWzX9IQ5bNfwhB1s1+yEMWzX6IQhbNflXcBA1+FeAEDX3IQlbNfYhCls19YGgAVs19IGoAVs181ewIjXyIRxbNfEhHVs18FfqARc17yEXWzXuIRhbNe0hGVs17CEaWzXrgZMCIQVYNepJNQU16YAE1Y4dqzTpULA06SJVSSQMQAJkSSEPDEABYSEPEkQ06VcBCDXoNPJXERE15zTyVwARNOdXAAg051cICFA051cQAVBQNeY06Bc15TT4I69QMQCICRNJNeNXARg04yJVTUk15CEFWzXjNOU04w5ENOZXERE14rEisgE05bISJbIQMQCyFDT8shGzNPU05Qk14TTjNOUJNeA05FcAEEk13yJbNd404SISSTXcQQAHNO013UIACjTtNOUdNOGXNd003TTeD0EABiI120IABzTeNN0JNds03yNbNdo03EEABzTrNdlCAAo06zTlHTThlzXZNNk02g9BAAYiNdhCAAc02jTZCTXYMQAoKTTbFjTYFlA04BZQUGY04BY04RZQNdeACAAAAAAAAAoVNNdQsDTXNQeABIObz1wxAFA05RZQNNdQsDT/NP40/TT8NPs0+jT5NPg06jT3NPM04TIGNPQ05lcAETTiIls05QkWNOJXCAhQNOJXEAFQUDTxQgWWSDTpVwEINeg06Bc15zTyVxERNeY05zT8iAf4NPU05wg15TT4I69QMQCIB8BJNeNXARg04yJVTUk15CEFWzTnCDXjNORXABA14jTlIhJJNeBBAAc07TXhQgAKNO005x005Zc14TTgQQAHNOs130IACjTrNOcdNOWXNd8xACgpNOIiWzThCBY04iNbNN8IFlA04xZQUGY04xY05RZQNd6ACAAAAAAAAAjANN5QsDTeNQeABNq8TY0xAFA05xZQNN5QsDT/NP40/TT8NPs0+jT5NPg06jT3NPM05TIGNPQ08lcAETTmIls05wgWNOZXCAhQNOZXEAFQUDTxQgSaSDTyVxERNeg08lcAETToVwAINOhXCAhQNOhXEAFQUDXnNPgjr1AxAIgGxUk15VcBGDTlIlVNSTXmIQVbNeU05lcAEEk15CJbNeM070EABiI14kIABzTwNPYJNeI0AyELWzTiNPsLCDXhNO404Uk07g5NNeA09SISSTXeQQAHNOA130IACjTgNOUdNPWXNd804zTfD0EABiI13UIABzTfNOMJNd007TTdSTTtDk013DTkI1s12zTvQQAGIjXaQgAHNPA09gk12jQDIRtbNNo0+gsINdk07DTZSTTsDk012DTeQQAHNNg110IACjTYNOUdNPWXNdc02zTXD0EABiI11kIABzTXNNsJNdY06zTWSTTrDk011bEisgE03LIIJLIQMQCyB7M051cAETXUsSKyATTVshIlshAxALIUNP2yEbMxACgpNOM03AgWNNs01QgWUDTlFlBQZjTuNNwJFjTsNNUJFlA10zTcFjTVFlA001A10oAIAAAAAAAAB3U00lCwNNI1B4AE5CsiFjEAUDTSULA0/zT+NP00/DT7NPo0+TT4NO003AkWNOs01QkWUDTTNPM09TIGNPQ01CJbNNUJFjTUVwgIUDTUVxABUDTnVxERUDTxNNwJQgLASCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSlcAIDX/IQ1bNf4hDls1/VegIjX8STUFNfuABMiaD7s0+1CwgAgAAAAAAAAKk7AqNQexIrIBNAOBwgFbsggkshA0/7IHszT8VwARSTX6Ils1+bEisgE0+bISJbIQNP+yFDT+shGzsSKyATT5SQkWNPpXCAhQNPpXEAFQNPxXERFQVxERIluyEiWyEDT/shQ0/bIRs7EisgEishIlshAyCbIVMgqyFDT9shGzsSKyASKyEiWyEDIJshUyCrIUNP6yEbNCA91JJAxAAL0kEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yENWzX+IQdbNf1XYCI1/IGSAVs1+4GiAVs1+oAEmouRdLA0+4gD9TT8VwARNfk0+jT+iAP/NP8xABJENP0hDwg1+CEFrzX3NP80A1cgKDT+NAMhDls0A4GKAVs0A4GaAVs0+DQDgYIBWwg090k0+xY0+hZQNPgiMgY0/TT5Ils0+ggWNPlXCAhQNPlXEAFQNPxXERFQNPtCAR1IIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAoNf+BKFs1/oEwWzX9gAReiExwNP9QNP4WUDT9FlCwIRCIA0aBEa9JNfxJUDX7NP40/RNENPtXABE1+iOvNPpXCAhQNPpXEAFQNPtXERFQNfkhEIgDFLEisgEishIlshAyCrIUNP6yEbM0+VcRETX4NPlXABEjrzT4VwgIUDT4VxABUFA19yEQiALfsSKyASKyEiWyEDIKshQ0/bIRszT/VxAQNfY0/4EgWzX1NPYiW0k19DT1CzXzNPYjW0k18jT1CzXxMQA0/1A0/hZQNP0WUDIGFlA091A09RZQNPQWUDTzFlA08hZQNPEWUChLAVcAf2cpSwFXfytnSCQ1ATIGNQJCAhk1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DT7IhM0/TT2DhFBAPs0+CJbNe80/TT2STT9Dk017jT6NO4PSTXsQQAGIjXtQgAHNO40+gk17TTvNO009AsINes0+SJbSTXqNOtJNOoOTTXpNPgjWzXoNOxBAAYiNedCAAc07jT6CTXnNOg05zT1Cwg15jT5I1tJNeU05kk05Q5NNeQ06RY05BZQNeM08DTxUDTyFlA08xZQNPQWUDT1FlA09hZQNPdQNPlQNPoWUDT7FlA0/BZQNP0WUDT+UDT/FlA07xZQNO4WUDTsFlEHCFA06hZQNOkWUDToFlA05RZQNOQWUDTjUChLAVcAf2cpSwFXf39nK0sBV/4lZ0ghBDUBMgY1AkIA8TT4Ils17zT9NPZJNP0OTTXuNPo07g9JNexBAAYiNe1CAAc07jT6CTXtNO807TT0Cwg16zT5IltJNeo060k06g5NNek0+CNbNeg07EEABiI150IABzTuNPoJNec06DTnNPULCDXmNPkjW0k15TTmSTTlDk015DTwNPFQNPIWUDTzFlA09BZQNPUWUDT2FlA091A0+VA0+hZQNPsWUDT+UDT/FlA07xZQNOoWUDTpFlA06BZQNOUWUDTkFlAoSwFXAH9nKUsBV397Z0ghBjUBMgY1AkIAHDEZIQQSRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghEa+JKGKJNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJNABJSkkkCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 3,
  stateSize: 291,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                    "name": "rewardToken1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "rewardsPerBlock",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v1368",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1369",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1370",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "userReceived",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "Harvest",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v2",
        "type": "tuple"
      }
    ],
    "name": "Stake",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v2",
        "type": "tuple"
      }
    ],
    "name": "Withdraw",
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
                    "internalType": "address payable",
                    "name": "rewardToken1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "rewardsPerBlock",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v1368",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1369",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1370",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T16",
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
                "internalType": "bool",
                "name": "v2704",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_591",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_stake0_591",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_withdraw0_591",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1742",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "userReceived",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1909",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2240",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2581",
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
    "name": "_reach_oe_v2707",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Any_halt",
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
    "name": "Info",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "rewardToken1",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "stakeToken",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T0",
                "name": "rewardsPerBlock",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "opts",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "totalStaked",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "remainingRewards",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "end",
            "type": "uint256"
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Staker_harvest",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "userReceived",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_stake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_withdraw",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T0",
                "name": "_rewards",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "_stake",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
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
        "internalType": "struct T16",
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
                "internalType": "bool",
                "name": "v2704",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_591",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_stake0_591",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_withdraw0_591",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1742",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v5345",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v5346",
        "type": "uint256"
      }
    ],
    "name": "rewardsAvailableAt",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v5349",
        "type": "address"
      }
    ],
    "name": "staked",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005445380380620054458339810160408190526200002691620006c2565b600080554360035562000038620003a7565b60408051338152835160208083019190915280850151805180516001600160a01b0390811685870152818401518116606080870191909152828701518051608088015285015160a08701529091015160c085015291810151821660e08401528301511661010082015290517f6bd7c8063e6b1dc627782fb35527cc7aa50e98985ff2db9a1d20c9099549c27a918190036101200190a18051600090819052815160209081018290528251604090810192909252825181840180519190915283519051820152838101519182015191015162000133916001600160a01b03918216911614620001285760016200012b565b60005b600a620002fa565b60408181018051600090819052602080850180515182015184519092019190915280515184015183519015159401939093529151905162000175929062000324565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001bb919060019062000324565b60a0820152620001ce3415600b620002fa565b602082015151606081015160409091015151620001ec9190620007e4565b60c082015260208083015151606081015160409091015190910151620002139190620007e4565b60e08201526200022262000450565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151909116606080860191909152436080860181905260a080880151908701528351519091015160c0808701919091528351518301515160e0808801919091529087015161010087015292515182015184015161012086015291850151610140850152600160008190559190915551620002ca918391016200084c565b60405160208183030381529060405260029080519060200190620002f0929190620004c3565b5050505062000985565b81620003205760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200032e62000552565b60005b60028110156200038457848160028110620003505762000350620007b8565b60200201518282600281106200036a576200036a620007b8565b6020020152806200037b816200092d565b91505062000331565b50818184600281106200039b576200039b620007b8565b60200201529392505050565b604080516101608101909152600061010082018181526101208301829052610140830191909152815260208101620003de62000552565b815260408051606081018252600080825260208281018290529282015291019081526020016200040d62000552565b815260408051606081018252600080825260208281018290529282015291019081526020016200043c62000552565b815260200160008152602001600081525090565b60405180610160016040528060006001600160a01b03168152602001620004766200059f565b81526000602082018190526040820181905260608201526080016200049a62000552565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054620004d19062000949565b90600052602060002090601f016020900481019282620004f5576000855562000540565b82601f106200051057805160ff191683800117855562000540565b8280016001018555821562000540579182015b828111156200054057825182559160200191906001019062000523565b506200054e929150620005f5565b5090565b60405180604001604052806002905b62000588604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005615790505090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001620005e8604051806040016040528060008152602001600081525090565b8152602001600081525090565b5b808211156200054e5760008155600101620005f6565b604080519081016001600160401b03811182821017156200063d57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200063d57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200063d57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620006bd57600080fd5b919050565b6000818303610100811215620006d757600080fd5b620006e16200060c565b83518152601f19820160e0811215620006f957600080fd5b6200070362000643565b60a08212156200071257600080fd5b6200071c62000674565b91506200072c60208701620006a5565b82526200073c60408701620006a5565b60208301526040605f19850112156200075457600080fd5b6200075e6200060c565b9350606086015184526080860151602085015283604083015260a086015160608301528181526200079260c08701620006a5565b6020820152620007a560e08701620006a5565b6040820152602083015250949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620008015762000801620007ce565b500290565b8060005b6002811015620008465781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016200080a565b50505050565b81516001600160a01b03168152610280810160208381015180516001600160a01b03908116858401528183015116604080860191909152810151805160608087019190915292015160808501529081015160a08401525060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120620008f28186018462000806565b60c08601516101e086015260e08601516102008601529085015161022085015284015161024084015250610140909201516102609091015290565b600060018201620009425762000942620007ce565b5060010190565b600181811c908216806200095e57607f821691505b6020821081036200097f57634e487b7160e01b600052602260045260246000fd5b50919050565b614ab080620009956000396000f3fe6080604052600436106100d55760003560e01c80638521eb9211610079578063ab53f2c611610056578063ab53f2c614610204578063b0c1f58a14610227578063e2186a081461023a578063e28095491461024d57005b80638521eb92146101b95780638712236d146101d157806398807d84146101e457005b80633bc5b7bf116100b25780633bc5b7bf146101285780634012e02e146101555780636f0fe5c91461017757806383230757146101a457005b80630329cf49146100de5780631e93b0f1146100f15780632c10a1591461011557005b366100dc57005b005b6100dc6100ec366004613c4b565b610262565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610123366004613c75565b610286565b34801561013457600080fd5b50610148610143366004613ca6565b6102a6565b60405161010c9190613cd9565b34801561016157600080fd5b5061016a6102bd565b60405161010c9190613d72565b34801561018357600080fd5b50610197610192366004613db4565b61051f565b60405161010c9190613de0565b3480156101b057600080fd5b50600154610102565b6101c1610d31565b604051901515815260200161010c565b6101976101df366004613df7565b610d68565b3480156101f057600080fd5b506101026101ff366004613ca6565b610dd2565b34801561021057600080fd5b50610219611063565b60405161010c929190613e3c565b610197610235366004613df7565b611100565b6100dc610248366004613c75565b611169565b610255611189565b60405161010c9190613ea2565b61026a613137565b61028261027c36849003840184614014565b826111dc565b5050565b61028e613137565b6102826102a0368490038401846140b3565b826122e8565b6102ae61319c565b6102b7826125d1565b92915050565b6102c56131bb565b60016000540361037f576000600280546102de906140eb565b80601f016020809104026020016040519081016040528092919081815260200182805461030a906140eb565b80156103575780601f1061032c57610100808354040283529160200191610357565b820191906000526020600020905b81548152906001019060200180831161033a57829003601f168201915b505050505080602001905181019061036f919061424c565b905061037d600060076126b5565b505b60036000540361046657600060028054610398906140eb565b80601f01602080910402602001604051908101604052809291908181526020018280546103c4906140eb565b80156104115780601f106103e657610100808354040283529160200191610411565b820191906000526020600020905b8154815290600101906020018083116103f457829003601f168201915b50505050508060200190518101906104299190614306565b9050610433613204565b60208083015182515261014083015182519091015261010082015181516040015260c09091015181516060015251919050565b6005600054036105105760006002805461047f906140eb565b80601f01602080910402602001604051908101604052809291908181526020018280546104ab906140eb565b80156104f85780601f106104cd576101008083540402835291602001916104f8565b820191906000526020600020905b8154815290600101906020018083116104db57829003601f168201915b50505050508060200190518101906104299190614433565b61051c600060076126b5565b90565b60408051808201909152600080825260208201526001600054036105ed5760006002805461054c906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610578906140eb565b80156105c55780601f1061059a576101008083540402835291602001916105c5565b820191906000526020600020905b8154815290600101906020018083116105a857829003601f168201915b50505050508060200190518101906105dd919061424c565b90506105eb600060086126b5565b505b60036000540361099957600060028054610606906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610632906140eb565b801561067f5780601f106106545761010080835404028352916020019161067f565b820191906000526020600020905b81548152906001019060200180831161066257829003601f168201915b50505050508060200190518101906106979190614306565b90506106a1613217565b60e08201518151528051600060209091015260016106be866125d1565b5160018111156106d0576106d0613cc3565b146106dc5780516106ea565b6106e5856125d1565b604001515b602082015260c08201518410156107015783610707565b8160c001515b60408201819052610120830151108015608083015261072c5760006060820152610747565b816101200151816040015161074191906145c1565b60608201525b8160800151816060015161075b91906145d8565b826101a0015161076b91906145f7565b60a082018190526101c0830151101561078957816101c0015161078f565b8060a001515b60c0820152610140820151156101008201819052156107b75760c081015160e08201526107e5565b8161014001518160200151602001518260c001516107d591906145d8565b6107df919061460f565b60e08201525b60e08101516020820151515110610803576000610120820152610820565b6020810151515160e082015161081991906145c1565b6101208201525b806080015115610837576000610140820152610853565b816101200151816040015161084c91906145c1565b6101408201525b8160a0015181610140015161086891906145d8565b82610200015161087891906145f7565b610160820181905261022083015110156108975781610220015161089e565b8061016001515b610180820152610100810151156108c0576101808101516101a08201526108f0565b8161014001518160200151602001518261018001516108df91906145d8565b6108e9919061460f565b6101a08201525b6101a0810151602080830151510151106109115760006101c0820152610931565b6020808201515101516101a082015161092a91906145c1565b6101c08201525b816101e00151816101200151111561094e57816101e00151610955565b8061012001515b6101e0820151526102408201516101c0820151111561097957816102400151610980565b806101c001515b6101e09091018051602001919091525191506102b79050565b600560005403610d25576000600280546109b2906140eb565b80601f01602080910402602001604051908101604052809291908181526020018280546109de906140eb565b8015610a2b5780601f10610a0057610100808354040283529160200191610a2b565b820191906000526020600020905b815481529060010190602001808311610a0e57829003601f168201915b5050505050806020019051810190610a439190614433565b9050610a4d613217565b60e0820151815152805160006020909101526001610a6a866125d1565b516001811115610a7c57610a7c613cc3565b14610a88578051610a96565b610a91856125d1565b604001515b602082015260c0820151841015610aad5783610ab3565b8160c001515b604082018190526101208301511080156080830152610ad85760006060820152610af3565b8161012001518160400151610aed91906145c1565b60608201525b81608001518160600151610b0791906145d8565b826101e00151610b1791906145f7565b60a082018190526102408301511015610b3557816102400151610b3b565b8060a001515b60c082015261014082015115610100820181905215610b635760c081015160e0820152610b91565b8161014001518160200151602001518260c00151610b8191906145d8565b610b8b919061460f565b60e08201525b60e08101516020820151515110610baf576000610120820152610bcc565b6020810151515160e0820151610bc591906145c1565b6101208201525b806080015115610be3576000610140820152610bff565b8161012001518160400151610bf891906145c1565b6101408201525b8160a00151816101400151610c1491906145d8565b826102800151610c2491906145f7565b61016082018190526102a08301511015610c4357816102a00151610c4a565b8061016001515b61018082015261010081015115610c6c576101808101516101a0820152610c9c565b816101400151816020015160200151826101800151610c8b91906145d8565b610c95919061460f565b6101a08201525b6101a081015160208083015151015110610cbd5760006101c0820152610cdd565b6020808201515101516101a0820151610cd691906145c1565b6101c08201525b8161026001518161012001511115610cfa57816102600151610d01565b8061012001515b6101e0820151526102c08201516101c0820151111561097957816102c00151610980565b6102b7600060086126b5565b6000610d3b613137565b610d436132b9565b6040805160208082019092526000815290820152610d6181836126db565b5051919050565b6040805180820190915260008082526020820152610d84613137565b610d8c6132e3565b610d946132fd565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610dc682846111dc565b50506060015192915050565b6000600160005403610e8e57600060028054610ded906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610e19906140eb565b8015610e665780601f10610e3b57610100808354040283529160200191610e66565b820191906000526020600020905b815481529060010190602001808311610e4957829003601f168201915b5050505050806020019051810190610e7e919061424c565b9050610e8c600060096126b5565b505b600360005403610fa857600060028054610ea7906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed3906140eb565b8015610f205780601f10610ef557610100808354040283529160200191610f20565b820191906000526020600020905b815481529060010190602001808311610f0357829003601f168201915b5050505050806020019051810190610f389190614306565b9050610f42613335565b80516000908190528151602090810182905282518184018051919091525101526001610f6d856125d1565b516001811115610f7f57610f7f613cc3565b14610f8e578060200151610f9c565b610f97846125d1565b604001515b60200151949350505050565b60056000540361105257600060028054610fc1906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610fed906140eb565b801561103a5780601f1061100f5761010080835404028352916020019161103a565b820191906000526020600020905b81548152906001019060200180831161101d57829003601f168201915b5050505050806020019051810190610f389190614433565b61105e600060096126b5565b919050565b600060606000546002808054611078906140eb565b80601f01602080910402602001604051908101604052809291908181526020018280546110a4906140eb565b80156110f15780601f106110c6576101008083540402835291602001916110f1565b820191906000526020600020905b8154815290600101906020018083116110d457829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261111c613137565b6111246132e3565b61112c6132fd565b60408051602080820183528782528383019190915260018352815180820190925282825283015261115d82846111dc565b50506040015192915050565b611171613137565b61028261118336849003840184614631565b826126db565b61119161335e565b611199613137565b6111a16132e3565b6111a96132fd565b6000602082810182905290825260408051808301909152828152908301526111d182846111dc565b505060200151919050565b6111ec600560005414601b6126b5565b815161120790158061120057508251600154145b601c6126b5565b600080805560028054611219906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054611245906140eb565b80156112925780601f1061126757610100808354040283529160200191611292565b820191906000526020600020905b81548152906001019060200180831161127557829003601f168201915b50505050508060200190518101906112aa9190614433565b90506112b4613380565b7f1e32d019ee301b7afce8bdcf66594cad07aa0dfc423abb9a3279b3efc317a03633856040516112e592919061468b565b60405180910390a1600060208501515151600281111561130757611307613cc3565b036119b357611318341560146126b5565b6101a08201805160209081015151835152815181015181015183518201528151015160409081015183519015159101525181516113589190600190612930565b816020018190525061137a61137333846060015160006129a4565b60156126b5565b60e082015160408201805191909152516000602090910152600161139d336125d1565b5160018111156113af576113af613cc3565b146113be5780604001516113cc565b6113c7336125d1565b604001515b6060820152610220820151156113e85760006080820152611404565b8161012001518261020001516113fe91906145c1565b60808201525b8160800151816080015161141891906145d8565b826101e0015161142891906145f7565b60a0820181905261024083015110156114465781610240015161144c565b8060a001515b60c0820152610140820151156101008201819052156114745760c081015160e08201526114a2565b8161014001518160600151602001518260c0015161149291906145d8565b61149c919061460f565b60e08201525b60e081015160608201515151106114c05760006101208201526114dd565b6060810151515160e08201516114d691906145c1565b6101208201525b81610260015181610120015111156114fa57816102600151611501565b8061012001515b6101408201526102208201511561151f57600061016082015261153c565b81610120015182610200015161153591906145c1565b6101608201525b8160a0015181610160015161155191906145d8565b82610280015161156191906145f7565b61018082018190526102a0830151101561158057816102a00151611587565b8061018001515b6101a0820152610100810151156115a9576101a08101516101c08201526115d9565b816101400151816060015160200151826101a001516115c891906145d8565b6115d2919061460f565b6101c08201525b6101c081015160608201515160200151106115fb5760006101e082015261161c565b606081015151602001516101c082015161161591906145c1565b6101e08201525b816102c00151816101e00151111561163957816102c00151611640565b806101e001515b6102008201908152610140820180516102208401805191909152915191516020019190915251604051339180156108fc02916000818181858888f19350505050158015611691573d6000803e3d6000fd5b50610200810151602082015151516116a991906145c1565b6102408201805191909152602080830180515182015183519092019190915251516040908101519151911515918101919091528201516102008201516116f1919033906129bc565b6101408101516060820151515161170891906145f7565b610260820151526102008101516060820151516020015161172991906145f7565b61026082018051602090810192909252516102808301805191909152606083015182015181518301523360009081526004835260409020805460ff191660019081178255915180518051938301939093559183015160028201559101516003909101556101408101516102408301516117a291906145c1565b6102a08083015191909152610200820151908301516117c191906145c1565b6102a0820180516020908101929092526102208301516102c084018051919091529051815190920191909152516040517f24dc257f536cf2a37eed2fa00a1d78285d3048e00ee6bf056f1754b4c29d1dab9161181c91613ea2565b60405180910390a16102c0810180516020850152516040517fd4c8a776984a5453e54d5190a5435591673fa352ad0c55104738bb93e2197b489161186291339190614705565b60405180910390a180610140015182610260015161188091906145c1565b6102e0820151526102008101516102c083015161189d91906145c1565b6102e0820151602001526118af61369d565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08701518487018051919091526102a0880151815186015261018089015181519094019390935261014088015183519095019490945281514391015261016086015190519092019190915282015161024083015161197c9190600090612930565b602082015160c001526101408201516101c084015161199b91906145c1565b602082015160e001526119ad816129d5565b506122e2565b60016020850151515160028111156119cd576119cd613cc3565b03611de457602084015151604001516103008201526119ee341560166126b5565b610300810151516101a08301516020015151611a0a91906145f7565b61032082018051919091526101a0830180516020908101518101518351820152905101516040908101519151911515910152606082015161030082015151611a5f91611a58913391906129a4565b60176126b5565b61030081015151610140830151611a7691906145f7565b61034082015260e082015161036082018051919091525160006020909101526001611aa0336125d1565b516001811115611ab257611ab2613cc3565b14611ac257806103600151611ad0565b611acb336125d1565b604001515b610380820181905261030082015151602090910151611aef91906145f7565b6103a0820152610340810151156103e0820181905215611b1a576102608201516103c0820152611b48565b61034081015161030082015151610260840151611b3791906145d8565b611b41919061460f565b6103c08201525b806103e0015115611b64576102c0820151610400820152611b92565b610340810151610300820151516102c0840151611b8191906145d8565b611b8b919061460f565b6104008201525b6103c08101516103808201515151611baa91906145f7565b610420820151526104008101516103808201515160200151611bcc91906145f7565b610420820180516020908101929092525161044083018051919091526103a083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516104608401805191909152610340840151815190930192909252905190517f331cc3a2d0541865e52606a7ccf81b55ce9201ae75162dcc4cd879cd069ddc8f91611c7e91613de0565b60405180910390a16104608101805160408581019190915261030083015151915181513381526020808201949094528151818401529201516060830152517fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec9181900360800190a1611cee61369d565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08801518487018051919091526101008901518151909501949094526101808801518451909301929092526103408601518351909401939093528151439301929092526101608501519051909101526101a0830151610320830151611dc29190600190612930565b60208201805160c001919091526101c0840151905160e001526119ad816129d5565b6002602085015151516002811115611dfe57611dfe613cc3565b036122e25760208401515160600151610480820152611e1f341560186126b5565b6101a082018051602090810151516104a0840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611e6a9190600190612930565b816104c00181905250611e8d611e8633846060015160006129a4565b60196126b5565b60e08201516104e082018051919091525160006020909101526001611eb1336125d1565b516001811115611ec357611ec3613cc3565b14611ed357806104e00151611ee1565b611edc336125d1565b604001515b61050082018190526020015161048082015151611f01911015601a6126b5565b610480810151516104c08201516020015151611f1d91906145c1565b61052082018051919091526104c0820180516020908101518101518351820152905101516040908101519151911515910152606082015161048082015151611f67919033906129bc565b61048081015151610140830151611f7e91906145c1565b6105408201526104808101515161050082015160200151611f9f91906145c1565b610560820152610540810151156105a0820181905215611fca57610260820151610580820152611ff8565b61054081015161048082015151610260840151611fe791906145d8565b611ff1919061460f565b6105808201525b6105008101515151610580820151106120185760006105c0820152612037565b610580810151610500820151515161203091906145c1565b6105c08201525b806105a0015115612053576102c08201516105e0820152612081565b610540810151610480820151516102c084015161207091906145d8565b61207a919061460f565b6105e08201525b61050081015151602001516105e0820151106120a45760006106008201526120c6565b6105e081015161050082015151602001516120bf91906145c1565b6106008201525b6105c0810151610620820180519190915261060082015181516020908101919091529051610640830180519190915261056083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516106608401805191909152610540840151815190930192909252905190517f4a4a386e6ce7773e7afed1d7e94f877d04af18728bbdd15b2d3e13b8633356bd9161218b91613de0565b60405180910390a16106608101805160608501526104808201515190516040517f9576807a80f8a4e446f7415ebed295d3082afbb62d51db57072a0331cfb68aae926121fe9233926001600160a01b03939093168352602080840192909252805160408401520151606082015260800190565b60405180910390a161220e61369d565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08801518487018051919091526101008901518151909501949094526101808801518451909301929092526105408601518351909401939093528151439301929092526101608501519051909101526104c0820151610520830151611dc29190600190612930565b50505050565b6122f8600160005414600f6126b5565b815161231390158061230c57508251600154145b60106126b5565b600080805560028054612325906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054612351906140eb565b801561239e5780601f106123735761010080835404028352916020019161239e565b820191906000526020600020905b81548152906001019060200180831161238157829003601f168201915b50505050508060200190518101906123b6919061424c565b90506123c06136bd565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16124198261010001513414600c6126b5565b61014082015160a0830151515161243091906145f7565b81515260a08201805151602090810151835190910152515160409081015182519015159082015282015161014083015161247791612470913391906129a4565b600d6126b5565b815161248f906001600160a01b03163314600e6126b5565b600282608001516124a091906145f7565b6020808301919091526040820180516000908190529051820152610100830151606083018051919091526101408401519051909101526124de61369d565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451931692019190915260e0840151825160800152610120840151825160a0015260c08401519083015161254291906145f7565b815160c0015260408083018051835160e00152516020808401805192909252606080860151835183015290850151825190930192909252805160009201829052805143608091820152850151905160a09081019190915284015183516125a89290612930565b60208201805160c00191909152610100840151905160e001526125ca816129d5565b5050505050565b6125d961319c565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561260857612608613cc3565b036126a6576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561264857612648613cc3565b600181111561265957612659613cc3565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b60008082526020820152919050565b816102825760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6126eb60036000541460126126b5565b81516127069015806126ff57508251600154145b60136126b5565b600080805560028054612718906140eb565b80601f0160208091040260200160405190810160405280929190818152602001828054612744906140eb565b80156127915780601f1061276657610100808354040283529160200191612791565b820191906000526020600020905b81548152906001019060200180831161277457829003601f168201915b50505050508060200190518101906127a99190614306565b90506127d260408051608081018252600060208201818152928201819052606082015290815290565b6040805133815285516020808301919091528601515115158183015290517fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e359181900360600190a1612826341560116126b5565b604051600081527f46b7debdec7930d85de757ace14cf958057531e31b6c71a14b3a901e55b267fd9060200160405180910390a1600080845282516101808401516040516001600160a01b039092169281156108fc029290818181858888f1935050505015801561289b573d6000803e3d6000fd5b5061016082015151516128ae90806145c1565b8151526101608201805151602090810151835190910152805151604090810151835190151590820152830151835191516128f1929060005b6020020151516129bc565b61291a8260600151836000015161291385610160015160008660000151612930565b60016128e6565b600080805560018190556122e29060029061370b565b612938613748565b60005b600281101561298457848160028110612956576129566146ef565b602002015182826002811061296d5761296d6146ef565b60200201528061297c81614722565b91505061293b565b5081818460028110612998576129986146ef565b60200201529392505050565b60006129b283853085612f51565b90505b9392505050565b6129c783838361302b565b6129d057600080fd5b505050565b6129dd613793565b602082015160600151156129f2576001612a04565b815160c00151602083015160a0015111155b15612cdc57602082015160a00151825160c001511115612a2c57816020015160a00151612a33565b815160c001515b808252602083015160409081015191909110801591830191909152612a5e5760006020820152612a79565b6020820151604001518151612a7391906145c1565b60208201525b8151608001516020820151612a8e91906145d8565b60208301515151612a9f91906145f7565b606082018190526020808401510151511015612ac357602080830151015151612ac9565b80606001515b6080820152604081015115612ae457600060a0820152612aff565b6020820151604001518151612af991906145c1565b60a08201525b816000015160a001518160a00151612b1791906145d8565b602080840151510151612b2a91906145f7565b60c0820181905260208084015181015101511015612b545781602001516020015160200151612b5a565b8060c001515b60e08201908152608082015161010083018051919091529051905160200152612b81613836565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015181860152865160a09081015181870152875160c09081015181880152885160e09081015181890152858a018051870151610100808b019190915281518701516101208b01528151909801516101408a015280518501516101608a01528051909301516101808901528251909101516101a088015281518101516101c0880152815151516101e0880152875161020088015287840151151561022088015281518501515161024088015291870151610260870152805151840151610280870152518301518301516102a08601528501516102c0850152918401516102e08401526005600055436001559051612cb891839101614779565b604051602081830303815290604052600290805190602001906122e292919061395f565b602082015160a00151825160c001511115612cff57816020015160a00151612d06565b815160c001515b6101208201819052602083015160400151108015610160830152612d31576000610140820152612d51565b816020015160400151816101200151612d4a91906145c1565b6101408201525b815160800151610140820151612d6791906145d8565b60208301515151612d7891906145f7565b61018082018190526020808401510151511015612d9d57602080830151015151612da4565b8061018001515b6101a082015261016081015115612dc25760006101c0820152612de2565b816020015160400151816101200151612ddb91906145c1565b6101c08201525b815160a001516101c0820151612df891906145d8565b602080840151510151612e0b91906145f7565b6101e0820181905260208084015181015101511015612e365781602001516020015160200151612e3d565b806101e001515b610200820152612e4b6139e3565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c09081015181860152865160e090810151818701528388018051850151610100880152805184015161012088015280519095015161014087015284519091015161016086015283510151610180850152825151516101a0808601919091528351830151516101c08601528501516101e0850152825151820151610200808601919091529251820151820151610220850152918401516102408401526003600055436001559051612cb891839101614905565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612fb891614a41565b60006040518083038185875af1925050503d8060008114612ff5576040519150601f19603f3d011682016040523d82523d6000602084013e612ffa565b606091505b509150915061300b828260016130fc565b50808060200190518101906130209190614a5d565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161308a91614a41565b60006040518083038185875af1925050503d80600081146130c7576040519150601f19603f3d011682016040523d82523d6000602084013e6130cc565b606091505b50915091506130dd828260026130fc565b50808060200190518101906130f29190614a5d565b9695505050505050565b6060831561310b5750816129b5565b82511561311b5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016126d2565b604051806080016040528060001515815260200161315361335e565b8152602001613175604051806040016040528060008152602001600081525090565b8152602001613197604051806040016040528060008152602001600081525090565b905290565b6040805160608101825260008082526020820152908101613197613ad2565b60405180608001604052806131ce613af4565b8152602001600081526020016131f7604051806040016040528060008152602001600081525090565b8152602001600081525090565b60405180602001604052806131976131bb565b60405180610200016040528061322b613ad2565b8152602001613238613ad2565b81526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613197604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161319760405180602001604052806000151581525090565b604051806040016040528060008152602001613197613b3c565b604080516080810182526000808252602080830182905283518082018552828152838501528351908101909352825290606082015290565b604080516080810182526000918101828152606082019290925290815260208101613197613ad2565b6040805160808101825260009181018281526060820192909252908190613175565b604080516106e08101909152600061068082018181526106a083018290526106c08301919091528152602081016133b5613748565b81526020016133c2613ad2565b81526020016133cf613ad2565b815260200160008152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161344e604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613490604051806040016040528060008152602001600081525090565b815260200161349d613ad2565b81526020016134bf604051806040016040528060008152602001600081525090565b81526020016134cc61335e565b81526020016134ee604051806040016040528060008152602001600081525090565b81526020016135096040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200161353d613ad2565b815260200161354a613ad2565b815260200160008152602001600081526020016000151581526020016000815260200161358a604051806040016040528060008152602001600081525090565b8152602001613597613ad2565b81526020016135b9604051806040016040528060008152602001600081525090565b81526020016135d46040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613601613748565b815260200161360e613ad2565b815260200161361b613ad2565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001613690604051806040016040528060008152602001600081525090565b8152602001613175613ad2565b60405180604001604052806136b0613b4f565b8152602001613197613bca565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528190815260200160008152602001613175604051806040016040528060008152602001600081525090565b508054613717906140eb565b6000825580601f10613727575050565b601f0160209004906000526020600020908101906137459190613c36565b50565b60405180604001604052806002905b61377d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816137575790505090565b604051806102200160405280600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016137f6604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610300016040528060006001600160a01b0316815260200161385a613af4565b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016138b1604051806040016040528060008152602001600081525090565b81526020016138d3604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016138fc613748565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001613197604051806040016040528060008152602001600081525090565b82805461396b906140eb565b90600052602060002090601f01602090048101928261398d57600085556139d3565b82601f106139a657805160ff19168380011785556139d3565b828001600101855582156139d3579182015b828111156139d35782518255916020019190600101906139b8565b506139df929150613c36565b5090565b60405180610260016040528060006001600160a01b03168152602001613a07613af4565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001613a5e604051806040016040528060008152602001600081525090565b8152602001613a80604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001613a9b613748565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051608081018252600091810182815260608201929092529081906131f7565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016131f7604051806040016040528060008152602001600081525090565b60405180602001604052806131976132fd565b60405180610100016040528060006001600160a01b03168152602001613b73613af4565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001613197604051806040016040528060008152602001600081525090565b6040805161014081019091526000610100820181815261012083019190915281908152602001613c0d604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016131f7613748565b5b808211156139df5760008155600101613c37565b600060a08284031215613c5d57600080fd5b50919050565b600060408284031215613c5d57600080fd5b600060408284031215613c8757600080fd5b6129b58383613c63565b6001600160a01b038116811461374557600080fd5b600060208284031215613cb857600080fd5b81356129b581613c91565b634e487b7160e01b600052602160045260246000fd5b815160a082019060028110613cf057613cf0613cc3565b808352506020830151151560208301526040830151613d1d60408401825180518252602090810151910152565b602081015160808401525092915050565b60018060a01b03808251168352806020830151166020840152506040810151613d64604084018280518252602090810151910152565b506060015160809190910152565b600061012082019050613d86828451613d2e565b60208381015160a08401526040840151805160c0850152015160e08301526060909201516101009091015290565b60008060408385031215613dc757600080fd5b8235613dd281613c91565b946020939093013593505050565b8151815260208083015190820152604081016102b7565b600060208284031215613e0957600080fd5b5035919050565b60005b83811015613e2b578181015183820152602001613e13565b838111156122e25750506000910152565b8281526040602082015260008251806040840152613e61816060850160208701613e10565b601f01601f1916919091016060019392505050565b613e8b82825180518252602090810151910152565b602090810151805160408401520151606090910152565b608081016102b78284613e76565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b60405290565b6040516020810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b6040516080810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b6040516060810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b604051610160810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b604051610260810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b604051610300810167ffffffffffffffff81118282101715613ee957613ee9613eb0565b801515811461374557600080fd5b600060208284031215613fe457600080fd5b6040516020810181811067ffffffffffffffff8211171561400757614007613eb0565b6040529135825250919050565b600081830360a081121561402757600080fd5b61402f613ec6565b833581526080601f198301121561404557600080fd5b61404d613eef565b9150614057613f12565b60208501356003811061406957600080fd5b8152604085013561407981613fc4565b602082015261408b8660608701613fd2565b604082015261409d8660808701613fd2565b6060820152825260208101919091529392505050565b6000604082840312156140c557600080fd5b6140cd613ec6565b8235815260208301356140df81613fc4565b60208201529392505050565b600181811c908216806140ff57607f821691505b602082108103613c5d57634e487b7160e01b600052602260045260246000fd5b805161105e81613c91565b60006040828403121561413c57600080fd5b614144613ec6565b9050815181526020820151602082015292915050565b600060a0828403121561416c57600080fd5b614174613f12565b9050815161418181613c91565b8152602082015161419181613c91565b60208201526141a3836040840161412a565b60408201526080820151606082015292915050565b805161105e81613fc4565b600082601f8301126141d457600080fd5b6141dc613ec6565b8060c08401858111156141ee57600080fd5b845b8181101561424157606081880312156142095760008081fd5b614211613f35565b815181526020808301518183015260408084015161422e81613fc4565b90830152908552909301926060016141f0565b509095945050505050565b6000610280828403121561425f57600080fd5b614267613f58565b6142708361411f565b815261427f846020850161415a565b602082015261429060c0840161411f565b60408201526142a160e0840161411f565b60608201526101008084015160808301526101206142c1868287016141c3565b60a08401526101e085015160c084015261020085015160e084015261022085015191830191909152610240840151908201526102609092015161014083015250919050565b60006103c0828403121561431957600080fd5b614321613f7c565b61432a8361411f565b8152614339846020850161415a565b602082015261434a60c0840161411f565b604082015261435b60e0840161411f565b60608201526101008084015160808301526101208085015160a08401526101408086015160c08501526101606143938882890161412a565b60e08601526101a06143a789828a0161412a565b858701526101e0945084880151848701526102009350838801518387015261022092506143d689848a016141c3565b918601919091526102e0870151610180860152610300870151908501526103208601516101c08501526103408601519284019290925261036085015190830152610380840151908201526103a09092015161024083015250919050565b6000610480828403121561444657600080fd5b61444e613fa0565b6144578361411f565b8152614466846020850161415a565b602082015261447760c0840161411f565b604082015261448860e0840161411f565b60608201526101008084015160808301526101208085015160a08401526101408086015160c08501526101606144c08882890161412a565b60e08601526101a06144d489828a0161412a565b858701526101e094508488015184870152610200935083880151838701526102209250828801518287015261024091508188015161018087015261026061451d8a828b016141c3565b828801526103208901516101c0880152610340890151868801526103608901518588015261454e6103808a016141b8565b848801526103a0890151838801526103c0890151818801525050505050506103e08301516102808201526104008301516102a08201526104208301516102c082015261459e84610440850161412a565b6102e08201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156145d3576145d36145ab565b500390565b60008160001904831182151516156145f2576145f26145ab565b500290565b6000821982111561460a5761460a6145ab565b500190565b60008261462c57634e487b7160e01b600052601260045260246000fd5b500490565b6000818303604081121561464457600080fd5b61464c613ec6565b833581526020601f198301121561466257600080fd5b61466a613eef565b9150602084013561467a81613fc4565b825260208101919091529392505050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190600381106146be576146be613cc3565b80604085015250602081015115156060840152604081015151608084015260608101515160a0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038316815260a081016129b56020830184613e76565b600060018201614734576147346145ab565b5060010190565b8060005b60028110156122e257815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161473f565b81516001600160a01b031681526104808101602083015161479d6020840182613d2e565b5060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120828186015260c08601519250610140838187015260e087015193506101606148138188018680518252602090810151910152565b9287015193506101a0926148338785018680518252602090810151910152565b918701516101e0878101919091529087015161020080880191909152918701516102208088019190915261018088015161024080890191909152938801519450610260939192916148868589018761473b565b6101c0890151610320890152928801516103408801529087015161036087015286015115156103808601528501516103a08501528401516103c0840152506102808301516103e08301526102a08301516104008301526102c08301516104208301526102e0909201518051610440830152602001516104609091015290565b81516001600160a01b031681526103c0810160208301516149296020840182613d2e565b5060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120828186015260c08601519250610140838187015260e0870151935061016061499f8188018680518252602090810151910152565b9287015193506101a0926149bf8785018680518252602090810151910152565b918701516101e0878101919091529087015161020080880191909152918701519350906102206149f18188018661473b565b6101808801516102e0880152928701516103008701526101c08701516103208701529086015161034086015285015161036085015284015161038084015250610240909201516103a09091015290565b60008251614a53818460208701613e10565b9190910192915050565b600060208284031215614a6f57600080fd5b81516129b581613fc456fea264697066735822122079b875665a67486d5b2fe6cbc9a9c76d00628d9c3b9ecd76477cba7deef8b92564736f6c634300080d0033`,
  BytecodeLen: 21573,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`,
    rewardsAvailableAt: `rewardsAvailableAt`,
    staked: `staked`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './staker.rsh:83:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:259:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './staker.rsh:270:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './staker.rsh:126:19:after expr stmt semicolon',
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
  "Any_halt": Any_halt,
  "Deployer": Deployer,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw
  };
export const _APIs = {
  Any: {
    halt: Any_halt
    },
  Staker: {
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw
    }
  };
