// Automatically generated with Reach 0.1.10 (31c3a32d)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (31c3a32d)';
export const _backendVersion = 12;

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
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc3], ['duration', ctc2]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Object({
    rewards: ctc3,
    stake: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc9
    });
  const map0_ctc = ctc10;
  
  
  return {
    infos: {
      end: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = svs;
            return (await ((async () => {
              
              
              return v1476;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = svs;
            return (await ((async () => {
              
              
              return v1476;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      opts: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458] = svs;
            return (await ((async () => {
              
              
              return v1432;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = svs;
            return (await ((async () => {
              
              
              return v1432;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = svs;
            return (await ((async () => {
              
              
              return v1432;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      remainingRewards: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = svs;
            return (await ((async () => {
              
              
              return v1495;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = svs;
            return (await ((async () => {
              
              
              return v1495;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = svs;
            return (await ((async (_v2631, _v2632 ) => {
                const v2631 = stdlib.protect(ctc0, _v2631, null);
                const v2632 = stdlib.protect(ctc2, _v2632, null);
              
              const v2633 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2631), null);
              const v2635 = {
                rewards: v1492,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v2636 = stdlib.fromSome(v2633, v2635);
              const v2637 = v2636.stake;
              const v2642 = v2636.rewards;
              const v2643 = v2642[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '0')];
              const v2646 = stdlib.le(v1476, v2632);
              const v2647 = v2646 ? v1476 : v2632;
              let v2648;
              const v2649 = stdlib.ge(v1496, v2647);
              if (v2649) {
                v2648 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2650 = stdlib.sub(v2647, v1496);
                v2648 = v2650;
                }
              const v2652 = stdlib.mul(v2648, v1455);
              const v2653 = stdlib.add(v2602, v2652);
              const v2655 = stdlib.le(v2653, v2611);
              const v2656 = v2655 ? v2653 : v2611;
              let v2659;
              const v2660 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
              if (v2660) {
                v2659 = v2656;
                }
              else {
                const v2661 = stdlib.muldiv(v2656, v2637, v1497);
                v2659 = v2661;
                }
              let v2662;
              const v2663 = stdlib.ge(v2643, v2659);
              if (v2663) {
                v2662 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2664 = stdlib.sub(v2659, v2643);
                v2662 = v2664;
                }
              const v2665 = stdlib.le(v2662, v2613);
              const v2666 = v2665 ? v2662 : v2613;
              const v2678 = v2642[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '1')];
              let v2683;
              if (v2649) {
                v2683 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2685 = stdlib.sub(v2647, v1496);
                v2683 = v2685;
                }
              const v2687 = stdlib.mul(v2683, v1457);
              const v2688 = stdlib.add(v2616, v2687);
              const v2690 = stdlib.le(v2688, v2625);
              const v2691 = v2690 ? v2688 : v2625;
              let v2694;
              if (v2660) {
                v2694 = v2691;
                }
              else {
                const v2696 = stdlib.muldiv(v2691, v2637, v1497);
                v2694 = v2696;
                }
              let v2697;
              const v2698 = stdlib.ge(v2678, v2694);
              if (v2698) {
                v2697 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2699 = stdlib.sub(v2694, v2678);
                v2697 = v2699;
                }
              const v2700 = stdlib.le(v2697, v2627);
              const v2701 = v2700 ? v2697 : v2627;
              const v2703 = [v2666, v2701];
              
              return v2703;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = svs;
            return (await ((async (_v1662, _v1663 ) => {
                const v1662 = stdlib.protect(ctc0, _v1662, null);
                const v1663 = stdlib.protect(ctc2, _v1663, null);
              
              const v1664 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1662), null);
              const v1666 = {
                rewards: v1492,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v1667 = stdlib.fromSome(v1664, v1666);
              const v1668 = v1667.stake;
              const v1673 = v1667.rewards;
              const v1674 = v1673[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '0')];
              const v1677 = stdlib.le(v1476, v1663);
              const v1678 = v1677 ? v1476 : v1663;
              let v1679;
              const v1680 = stdlib.ge(v1496, v1678);
              if (v1680) {
                v1679 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1681 = stdlib.sub(v1678, v1496);
                v1679 = v1681;
                }
              const v1683 = stdlib.mul(v1679, v1455);
              const v1684 = stdlib.add(v1633, v1683);
              const v1686 = stdlib.le(v1684, v1642);
              const v1687 = v1686 ? v1684 : v1642;
              let v1690;
              const v1691 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
              if (v1691) {
                v1690 = v1687;
                }
              else {
                const v1692 = stdlib.muldiv(v1687, v1668, v1497);
                v1690 = v1692;
                }
              let v1693;
              const v1694 = stdlib.ge(v1674, v1690);
              if (v1694) {
                v1693 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1695 = stdlib.sub(v1690, v1674);
                v1693 = v1695;
                }
              const v1696 = stdlib.le(v1693, v1644);
              const v1697 = v1696 ? v1693 : v1644;
              const v1709 = v1673[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '1')];
              let v1714;
              if (v1680) {
                v1714 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1716 = stdlib.sub(v1678, v1496);
                v1714 = v1716;
                }
              const v1718 = stdlib.mul(v1714, v1457);
              const v1719 = stdlib.add(v1647, v1718);
              const v1721 = stdlib.le(v1719, v1656);
              const v1722 = v1721 ? v1719 : v1656;
              let v1725;
              if (v1691) {
                v1725 = v1722;
                }
              else {
                const v1727 = stdlib.muldiv(v1722, v1668, v1497);
                v1725 = v1727;
                }
              let v1728;
              const v1729 = stdlib.ge(v1709, v1725);
              if (v1729) {
                v1728 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1730 = stdlib.sub(v1725, v1709);
                v1728 = v1730;
                }
              const v1731 = stdlib.le(v1728, v1658);
              const v1732 = v1731 ? v1728 : v1658;
              const v1734 = [v1697, v1732];
              
              return v1734;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = svs;
            return (await ((async (_v1477 ) => {
                const v1477 = stdlib.protect(ctc0, _v1477, null);
              
              const v1478 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1477), null);
              const v1479 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v1480 = {
                rewards: v1479,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v1481 = stdlib.fromSome(v1478, v1480);
              const v1482 = v1481.stake;
              
              return v1482;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = svs;
            return (await ((async (_v1477 ) => {
                const v1477 = stdlib.protect(ctc0, _v1477, null);
              
              const v1478 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1477), null);
              const v1479 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v1480 = {
                rewards: v1479,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v1481 = stdlib.fromSome(v1478, v1480);
              const v1482 = v1481.stake;
              
              return v1482;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      totalStaked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = svs;
            return (await ((async () => {
              
              
              return v1497;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = svs;
            return (await ((async () => {
              
              
              return v1497;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2],
      3: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]
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
  const ctc12 = stdlib.T_Data({
    Any_halt0_1148: ctc11,
    Deployer0_1148: ctc0
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v2713 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:250:9:application call to [unknown function] (defined at: ./staker.rsh:250:9:function exp)', 'at ./staker.rsh:248:7:application call to "runAny_halt0_1148" (defined at: ./staker.rsh:250:9:function exp)', 'at ./staker.rsh:248:7:application call to [unknown function] (defined at: ./staker.rsh:248:7:function exp)'],
    msg: 'in',
    who: 'Any_halt'
    });
  const v2717 = ['Any_halt0_1148', v2713];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627, v2717],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:250:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2722], secs: v2724, time: v2723, didSend: v1203, from: v2721 } = txn1;
      
      switch (v2722[0]) {
        case 'Any_halt0_1148': {
          const v2725 = v2722[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_halt"
            });
          ;
          const v2732 = null;
          const v2733 = await txn1.getOutput('Any_halt', 'v2732', ctc0, v2732);
          
          sim_r.txns.push({
            amt: v1505,
            kind: 'from',
            to: v1431,
            tok: undefined /* Nothing */
            });
          const v2743 = v1504[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
          const v2744 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
          const v2750 = stdlib.sub(v2744, v2744);
          const v2753 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '1')];
          const v2754 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '2')];
          const v2755 = [v2750, v2753, v2754];
          const v2756 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '0'), v2755);
          sim_r.txns.push({
            amt: v2744,
            kind: 'from',
            to: v1431,
            tok: v1433
            });
          const v2757 = v2756[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '1')];
          const v2758 = v2757[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v2758,
            kind: 'from',
            to: v1431,
            tok: v1434
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1434
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1433
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Deployer0_1148': {
          const v2822 = v2722[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2722], secs: v2724, time: v2723, didSend: v1203, from: v2721 } = txn1;
  switch (v2722[0]) {
    case 'Any_halt0_1148': {
      const v2725 = v2722[1];
      undefined /* setApiDetails */;
      ;
      const v2732 = null;
      const v2733 = await txn1.getOutput('Any_halt', 'v2732', ctc0, v2732);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v2725, v2733), {
          at: './staker.rsh:250:10:application',
          fs: ['at ./staker.rsh:250:10:application call to [unknown function] (defined at: ./staker.rsh:250:10:function exp)', 'at ./staker.rsh:250:30:application call to "k" (defined at: ./staker.rsh:250:24:function exp)'],
          msg: 'out',
          who: 'Any_halt'
          });
        }
      else {
        }
      
      ;
      const v2743 = v1504[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
      const v2744 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
      const v2750 = stdlib.sub(v2744, v2744);
      const v2753 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '1')];
      const v2754 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '2')];
      const v2755 = [v2750, v2753, v2754];
      const v2756 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '0'), v2755);
      ;
      const v2757 = v2756[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '1')];
      const v2758 = v2757[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Deployer0_1148': {
      const v2822 = v2722[1];
      return;
      break;
      }
    }
  
  
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
    Staker_harvest0_576: ctc7,
    Staker_stake0_576: ctc8,
    Staker_withdraw0_576: ctc8
    });
  const ctc10 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc11 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc12 = stdlib.T_Data({
    Any_halt0_1148: ctc7,
    Deployer0_1148: ctc0
    });
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v1419 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1420 = [v1419, v1419];
  const v1424 = stdlib.protect(ctc6, interact.opts, 'for Deployer\'s interact field opts');
  
  const v1427 = v1424.rewardToken1;
  const v1428 = v1424.stakeToken;
  const v1429 = stdlib.tokenEq(v1427, v1428);
  const v1430 = v1429 ? false : true;
  stdlib.assert(v1430, {
    at: './staker.rsh:71:11:application',
    fs: ['at ./staker.rsh:68:16:application call to [unknown function] (defined at: ./staker.rsh:68:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1424, v1427, v1428],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:73:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1432, v1433, v1434], secs: v1436, time: v1435, didSend: v36, from: v1431 } = txn1;
      
      const v1437 = stdlib.tokenEq(v1433, v1434);
      const v1438 = v1437 ? false : true;
      ;
      const v1439 = v1420[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '0')];
      const v1441 = v1439[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1')];
      const v1442 = v1439[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '2')];
      const v1443 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1441, v1442];
      const v1444 = stdlib.Array_set(v1420, stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '0'), v1443);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1433
        });
      const v1446 = v1444[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1')];
      const v1448 = v1446[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1')];
      const v1449 = v1446[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '2')];
      const v1450 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1448, v1449];
      const v1451 = stdlib.Array_set(v1444, stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1'), v1450);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1434
        });
      ;
      const v1453 = v1432.rewardsPerBlock;
      const v1454 = v1432.duration;
      const v1455 = v1453[stdlib.checkedBigNumberify('./staker.rsh:79:20:array ref', stdlib.UInt_max, '0')];
      const v1456 = stdlib.mul(v1455, v1454);
      const v1457 = v1453[stdlib.checkedBigNumberify('./staker.rsh:80:20:array ref', stdlib.UInt_max, '1')];
      const v1458 = stdlib.mul(v1457, v1454);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1432, v1433, v1434], secs: v1436, time: v1435, didSend: v36, from: v1431 } = txn1;
  const v1437 = stdlib.tokenEq(v1433, v1434);
  const v1438 = v1437 ? false : true;
  stdlib.assert(v1438, {
    at: './staker.rsh:73:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v1439 = v1420[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '0')];
  const v1441 = v1439[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1')];
  const v1442 = v1439[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '2')];
  const v1443 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1441, v1442];
  const v1444 = stdlib.Array_set(v1420, stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '0'), v1443);
  ;
  const v1446 = v1444[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1')];
  const v1448 = v1446[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1')];
  const v1449 = v1446[stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '2')];
  const v1450 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1448, v1449];
  const v1451 = stdlib.Array_set(v1444, stdlib.checkedBigNumberify('./staker.rsh:73:12:dot', stdlib.UInt_max, '1'), v1450);
  ;
  ;
  const v1453 = v1432.rewardsPerBlock;
  const v1454 = v1432.duration;
  const v1455 = v1453[stdlib.checkedBigNumberify('./staker.rsh:79:20:array ref', stdlib.UInt_max, '0')];
  const v1456 = stdlib.mul(v1455, v1454);
  const v1457 = v1453[stdlib.checkedBigNumberify('./staker.rsh:80:20:array ref', stdlib.UInt_max, '1')];
  const v1458 = stdlib.mul(v1457, v1454);
  const txn2 = await (ctc.sendrecv({
    args: [v1431, v1432, v1433, v1434, v1435, v1451, v1454, v1455, v1456, v1457, v1458],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1435,
    onlyIf: true,
    out_tys: [],
    pay: [v1456, [[v1458, v1433]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1461, time: v1460, didSend: v51, from: v1459 } = txn2;
      
      sim_r.txns.push({
        amt: v1456,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1464 = v1451[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '0')];
      const v1465 = v1464[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '0')];
      const v1466 = stdlib.add(v1465, v1458);
      const v1469 = v1464[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '1')];
      const v1470 = v1464[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '2')];
      const v1471 = [v1466, v1469, v1470];
      const v1472 = stdlib.Array_set(v1451, stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '0'), v1471);
      sim_r.txns.push({
        amt: v1458,
        kind: 'to',
        tok: v1433
        });
      const v1473 = stdlib.addressEq(v1431, v1459);
      ;
      const v1475 = stdlib.add(v1435, stdlib.checkedBigNumberify('./staker.rsh:87:39:decimal', stdlib.UInt_max, '2'));
      const v1476 = stdlib.add(v1475, v1454);
      
      const v1492 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1493 = [v1456, v1458];
      const v1494 = v1492;
      const v1495 = v1493;
      const v1496 = v1475;
      const v1497 = stdlib.checkedBigNumberify('./staker.rsh:120:21:decimal', stdlib.UInt_max, '0');
      const v1498 = v1460;
      const v1499 = v1435;
      const v1504 = v1472;
      const v1505 = v1456;
      
      if (await (async () => {
        const v1628 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:168:27:decimal', stdlib.UInt_max, '0'));
        const v1630 = stdlib.le(v1499, v1476);
        const v1631 = v1628 ? v1630 : true;
        
        return v1631;})()) {
        const v1633 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
        const v1634 = stdlib.le(v1476, v1499);
        const v1635 = v1634 ? v1476 : v1499;
        let v1636;
        const v1637 = stdlib.ge(v1496, v1635);
        if (v1637) {
          v1636 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1638 = stdlib.sub(v1635, v1496);
          v1636 = v1638;
          }
        const v1640 = stdlib.mul(v1636, v1455);
        const v1641 = stdlib.add(v1633, v1640);
        const v1642 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
        const v1643 = stdlib.le(v1641, v1642);
        const v1644 = v1643 ? v1641 : v1642;
        const v1647 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
        let v1650;
        if (v1637) {
          v1650 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1652 = stdlib.sub(v1635, v1496);
          v1650 = v1652;
          }
        const v1654 = stdlib.mul(v1650, v1457);
        const v1655 = stdlib.add(v1647, v1654);
        const v1656 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
        const v1657 = stdlib.le(v1655, v1656);
        const v1658 = v1657 ? v1655 : v1656;
        const v1661 = [v1644, v1658];
        sim_r.isHalt = false;
        }
      else {
        const v2602 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
        const v2603 = stdlib.le(v1476, v1499);
        const v2604 = v2603 ? v1476 : v1499;
        let v2605;
        const v2606 = stdlib.ge(v1496, v2604);
        if (v2606) {
          v2605 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2607 = stdlib.sub(v2604, v1496);
          v2605 = v2607;
          }
        const v2609 = stdlib.mul(v2605, v1455);
        const v2610 = stdlib.add(v2602, v2609);
        const v2611 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
        const v2612 = stdlib.le(v2610, v2611);
        const v2613 = v2612 ? v2610 : v2611;
        const v2616 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
        let v2619;
        if (v2606) {
          v2619 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2621 = stdlib.sub(v2604, v1496);
          v2619 = v2621;
          }
        const v2623 = stdlib.mul(v2619, v1457);
        const v2624 = stdlib.add(v2616, v2623);
        const v2625 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
        const v2626 = stdlib.le(v2624, v2625);
        const v2627 = v2626 ? v2624 : v2625;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc6, ctc5, ctc5, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1461, time: v1460, didSend: v51, from: v1459 } = txn2;
  ;
  const v1464 = v1451[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '0')];
  const v1465 = v1464[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '0')];
  const v1466 = stdlib.add(v1465, v1458);
  const v1469 = v1464[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '1')];
  const v1470 = v1464[stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '2')];
  const v1471 = [v1466, v1469, v1470];
  const v1472 = stdlib.Array_set(v1451, stdlib.checkedBigNumberify('./staker.rsh:82:12:dot', stdlib.UInt_max, '0'), v1471);
  ;
  const v1473 = stdlib.addressEq(v1431, v1459);
  stdlib.assert(v1473, {
    at: './staker.rsh:82:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v1475 = stdlib.add(v1435, stdlib.checkedBigNumberify('./staker.rsh:87:39:decimal', stdlib.UInt_max, '2'));
  const v1476 = stdlib.add(v1475, v1454);
  stdlib.protect(ctc0, await interact.readyForStakers(), {
    at: './staker.rsh:118:36:application',
    fs: ['at ./staker.rsh:118:36:application call to [unknown function] (defined at: ./staker.rsh:118:36:function exp)', 'at ./staker.rsh:118:36:application call to "liftedInteract" (defined at: ./staker.rsh:118:36:application)'],
    msg: 'readyForStakers',
    who: 'Deployer'
    });
  
  const v1492 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1493 = [v1456, v1458];
  let v1494 = v1492;
  let v1495 = v1493;
  let v1496 = v1475;
  let v1497 = stdlib.checkedBigNumberify('./staker.rsh:120:21:decimal', stdlib.UInt_max, '0');
  let v1498 = v1460;
  let v1499 = v1435;
  let v1504 = v1472;
  let v1505 = v1456;
  
  while (await (async () => {
    const v1628 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:168:27:decimal', stdlib.UInt_max, '0'));
    const v1630 = stdlib.le(v1499, v1476);
    const v1631 = v1628 ? v1630 : true;
    
    return v1631;})()) {
    const v1633 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
    const v1634 = stdlib.le(v1476, v1499);
    const v1635 = v1634 ? v1476 : v1499;
    let v1636;
    const v1637 = stdlib.ge(v1496, v1635);
    if (v1637) {
      v1636 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1638 = stdlib.sub(v1635, v1496);
      v1636 = v1638;
      }
    const v1640 = stdlib.mul(v1636, v1455);
    const v1641 = stdlib.add(v1633, v1640);
    const v1642 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
    const v1643 = stdlib.le(v1641, v1642);
    const v1644 = v1643 ? v1641 : v1642;
    const v1647 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
    let v1650;
    if (v1637) {
      v1650 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1652 = stdlib.sub(v1635, v1496);
      v1650 = v1652;
      }
    const v1654 = stdlib.mul(v1650, v1457);
    const v1655 = stdlib.add(v1647, v1654);
    const v1656 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
    const v1657 = stdlib.le(v1655, v1656);
    const v1658 = v1657 ? v1655 : v1656;
    const v1661 = [v1644, v1658];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn3;
    switch (v1800[0]) {
      case 'Staker_harvest0_576': {
        const v1803 = v1800[1];
        undefined /* setApiDetails */;
        ;
        const v1839 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
        const v1840 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
        const v1844 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
        const v1845 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
        const v1846 = [v1840, v1844, v1845];
        const v1847 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v1846);
        ;
        const v1849 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1799), null);
        const v1851 = {
          rewards: v1492,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1852 = stdlib.fromSome(v1849, v1851);
        const v1853 = v1852.stake;
        const v1858 = v1852.rewards;
        const v1859 = v1858[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '0')];
        let v1864;
        if (v1637) {
          v1864 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1866 = stdlib.sub(v1635, v1496);
          v1864 = v1866;
          }
        const v1868 = stdlib.mul(v1864, v1455);
        const v1869 = stdlib.add(v1633, v1868);
        const v1871 = stdlib.le(v1869, v1642);
        const v1872 = v1871 ? v1869 : v1642;
        let v1875;
        const v1876 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
        if (v1876) {
          v1875 = v1872;
          }
        else {
          const v1877 = stdlib.muldiv(v1872, v1853, v1497);
          v1875 = v1877;
          }
        let v1878;
        const v1879 = stdlib.ge(v1859, v1875);
        if (v1879) {
          v1878 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1880 = stdlib.sub(v1875, v1859);
          v1878 = v1880;
          }
        const v1881 = stdlib.le(v1878, v1644);
        const v1882 = v1881 ? v1878 : v1644;
        const v1894 = v1858[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '1')];
        let v1899;
        if (v1637) {
          v1899 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1901 = stdlib.sub(v1635, v1496);
          v1899 = v1901;
          }
        const v1903 = stdlib.mul(v1899, v1457);
        const v1904 = stdlib.add(v1647, v1903);
        const v1906 = stdlib.le(v1904, v1656);
        const v1907 = v1906 ? v1904 : v1656;
        let v1910;
        if (v1876) {
          v1910 = v1907;
          }
        else {
          const v1912 = stdlib.muldiv(v1907, v1853, v1497);
          v1910 = v1912;
          }
        let v1913;
        const v1914 = stdlib.ge(v1894, v1910);
        if (v1914) {
          v1913 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1915 = stdlib.sub(v1910, v1894);
          v1913 = v1915;
          }
        const v1916 = stdlib.le(v1913, v1658);
        const v1917 = v1916 ? v1913 : v1658;
        const v1919 = [v1882, v1917];
        const v1928 = stdlib.sub(v1505, v1882);
        ;
        const v1929 = v1847[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0')];
        const v1930 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0')];
        const v1934 = stdlib.sub(v1930, v1917);
        const v1937 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '1')];
        const v1938 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '2')];
        const v1939 = [v1934, v1937, v1938];
        const v1940 = stdlib.Array_set(v1847, stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0'), v1939);
        ;
        const v1942 = stdlib.sub(v1642, v1882);
        const v1944 = stdlib.sub(v1656, v1917);
        const v1957 = stdlib.add(v1859, v1882);
        const v1959 = stdlib.add(v1894, v1917);
        const v1960 = [v1957, v1959];
        const v1961 = {
          rewards: v1960,
          stake: v1853
          };
        await stdlib.mapSet(map0, v1799, v1961);
        const v1966 = [v1942, v1944];
        const v1967 = {
          totalRemaining: v1966,
          userReceived: v1919
          };
        await txn3.getOutput('Staker_harvest', 'v1967', ctc10, v1967);
        const v1973 = stdlib.sub(v1644, v1882);
        const v1974 = stdlib.sub(v1658, v1917);
        const v1976 = [v1973, v1974];
        const cv1494 = v1976;
        const cv1495 = v1966;
        const cv1496 = v1499;
        const cv1497 = v1497;
        const cv1498 = v1801;
        const cv1499 = v1498;
        const cv1504 = v1940;
        const cv1505 = v1928;
        
        v1494 = cv1494;
        v1495 = cv1495;
        v1496 = cv1496;
        v1497 = cv1497;
        v1498 = cv1498;
        v1499 = cv1499;
        v1504 = cv1504;
        v1505 = cv1505;
        
        continue;
        break;
        }
      case 'Staker_stake0_576': {
        const v2069 = v1800[1];
        undefined /* setApiDetails */;
        const v2081 = v2069[stdlib.checkedBigNumberify('./staker.rsh:169:9:spread', stdlib.UInt_max, '0')];
        ;
        const v2105 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
        const v2106 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
        const v2107 = stdlib.add(v2106, v2081);
        const v2110 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
        const v2111 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
        const v2112 = [v2107, v2110, v2111];
        const v2113 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v2112);
        ;
        const v2248 = stdlib.add(v1497, v2081);
        const v2249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1799), null);
        const v2251 = {
          rewards: v1492,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2252 = stdlib.fromSome(v2249, v2251);
        const v2253 = v2252.stake;
        const v2254 = stdlib.add(v2253, v2081);
        const v2259 = v2252.rewards;
        let v2260;
        const v2261 = stdlib.eq(v2248, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
        if (v2261) {
          v2260 = v1644;
          }
        else {
          const v2262 = stdlib.muldiv(v1644, v2081, v2248);
          v2260 = v2262;
          }
        const v2263 = v2259[stdlib.checkedBigNumberify('./staker.rsh:178:29:array ref', stdlib.UInt_max, '0')];
        const v2264 = stdlib.add(v2263, v2260);
        let v2265;
        if (v2261) {
          v2265 = v1658;
          }
        else {
          const v2267 = stdlib.muldiv(v1658, v2081, v2248);
          v2265 = v2267;
          }
        const v2268 = v2259[stdlib.checkedBigNumberify('./staker.rsh:178:29:array ref', stdlib.UInt_max, '1')];
        const v2269 = stdlib.add(v2268, v2265);
        const v2270 = [v2264, v2269];
        const v2271 = {
          rewards: v2270,
          stake: v2254
          };
        await stdlib.mapSet(map0, v1799, v2271);
        const v2272 = {
          newEveryoneStaked: v2248,
          newUserStaked: v2254
          };
        await txn3.getOutput('Staker_stake', 'v2272', ctc11, v2272);
        const cv1494 = v1661;
        const cv1495 = v1495;
        const cv1496 = v1499;
        const cv1497 = v2248;
        const cv1498 = v1801;
        const cv1499 = v1498;
        const cv1504 = v2113;
        const cv1505 = v1505;
        
        v1494 = cv1494;
        v1495 = cv1495;
        v1496 = cv1496;
        v1497 = cv1497;
        v1498 = cv1498;
        v1499 = cv1499;
        v1504 = cv1504;
        v1505 = cv1505;
        
        continue;
        break;
        }
      case 'Staker_withdraw0_576': {
        const v2335 = v1800[1];
        undefined /* setApiDetails */;
        ;
        const v2371 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
        const v2372 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
        const v2376 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
        const v2377 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
        const v2378 = [v2372, v2376, v2377];
        const v2379 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v2378);
        ;
        const v2548 = v2335[stdlib.checkedBigNumberify('./staker.rsh:190:9:spread', stdlib.UInt_max, '0')];
        const v2549 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1799), null);
        const v2551 = {
          rewards: v1492,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2552 = stdlib.fromSome(v2549, v2551);
        const v2553 = v2552.stake;
        const v2555 = stdlib.le(v2548, v2553);
        stdlib.assert(v2555, {
          at: './staker.rsh:196:16:application',
          fs: ['at ./staker.rsh:193:7:application call to [unknown function] (defined at: ./staker.rsh:193:7:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v2556 = v2379[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1')];
        const v2557 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '0')];
        const v2561 = stdlib.sub(v2557, v2548);
        const v2564 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1')];
        const v2565 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '2')];
        const v2566 = [v2561, v2564, v2565];
        const v2567 = stdlib.Array_set(v2379, stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1'), v2566);
        ;
        const v2568 = stdlib.sub(v1497, v2548);
        const v2569 = stdlib.sub(v2553, v2548);
        const v2574 = v2552.rewards;
        const v2575 = v2574[stdlib.checkedBigNumberify('./staker.rsh:205:50:array ref', stdlib.UInt_max, '0')];
        let v2576;
        const v2577 = stdlib.eq(v2568, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
        if (v2577) {
          v2576 = v1644;
          }
        else {
          const v2578 = stdlib.muldiv(v1644, v2548, v2568);
          v2576 = v2578;
          }
        let v2579;
        const v2580 = stdlib.ge(v2576, v2575);
        if (v2580) {
          v2579 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2581 = stdlib.sub(v2575, v2576);
          v2579 = v2581;
          }
        const v2582 = v2574[stdlib.checkedBigNumberify('./staker.rsh:205:50:array ref', stdlib.UInt_max, '1')];
        let v2583;
        if (v2577) {
          v2583 = v1658;
          }
        else {
          const v2585 = stdlib.muldiv(v1658, v2548, v2568);
          v2583 = v2585;
          }
        let v2586;
        const v2587 = stdlib.ge(v2583, v2582);
        if (v2587) {
          v2586 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2588 = stdlib.sub(v2582, v2583);
          v2586 = v2588;
          }
        const v2589 = [v2579, v2586];
        const v2590 = {
          rewards: v2589,
          stake: v2569
          };
        await stdlib.mapSet(map0, v1799, v2590);
        const v2592 = {
          newEveryoneStaked: v2568,
          newUserStaked: v2569
          };
        await txn3.getOutput('Staker_withdraw', 'v2592', ctc11, v2592);
        const cv1494 = v1661;
        const cv1495 = v1495;
        const cv1496 = v1499;
        const cv1497 = v2568;
        const cv1498 = v1801;
        const cv1499 = v1498;
        const cv1504 = v2567;
        const cv1505 = v1505;
        
        v1494 = cv1494;
        v1495 = cv1495;
        v1496 = cv1496;
        v1497 = cv1497;
        v1498 = cv1498;
        v1499 = cv1499;
        v1504 = cv1504;
        v1505 = cv1505;
        
        continue;
        break;
        }
      }
    
    }
  const v2602 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
  const v2603 = stdlib.le(v1476, v1499);
  const v2604 = v2603 ? v1476 : v1499;
  let v2605;
  const v2606 = stdlib.ge(v1496, v2604);
  if (v2606) {
    v2605 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v2607 = stdlib.sub(v2604, v1496);
    v2605 = v2607;
    }
  const v2609 = stdlib.mul(v2605, v1455);
  const v2610 = stdlib.add(v2602, v2609);
  const v2611 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
  const v2612 = stdlib.le(v2610, v2611);
  const v2613 = v2612 ? v2610 : v2611;
  const v2616 = v1494[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
  let v2619;
  if (v2606) {
    v2619 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v2621 = stdlib.sub(v2604, v1496);
    v2619 = v2621;
    }
  const v2623 = stdlib.mul(v2619, v1457);
  const v2624 = stdlib.add(v2616, v2623);
  const v2625 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
  const v2626 = stdlib.le(v2624, v2625);
  const v2627 = v2626 ? v2624 : v2625;
  const v2709 = ['Deployer0_1148', null];
  
  const txn3 = await (ctc.sendrecv({
    args: [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1504, v1505, v2602, v2611, v2613, v2616, v2625, v2627, v2709],
    evt_cnt: 1,
    funcNum: 3,
    lct: v1498,
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:249:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2722], secs: v2724, time: v2723, didSend: v1203, from: v2721 } = txn3;
      
      switch (v2722[0]) {
        case 'Any_halt0_1148': {
          const v2725 = v2722[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_halt"
            });
          ;
          const v2732 = null;
          await txn3.getOutput('Any_halt', 'v2732', ctc0, v2732);
          sim_r.txns.push({
            amt: v1505,
            kind: 'from',
            to: v1431,
            tok: undefined /* Nothing */
            });
          const v2743 = v1504[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
          const v2744 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
          const v2750 = stdlib.sub(v2744, v2744);
          const v2753 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '1')];
          const v2754 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '2')];
          const v2755 = [v2750, v2753, v2754];
          const v2756 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '0'), v2755);
          sim_r.txns.push({
            amt: v2744,
            kind: 'from',
            to: v1431,
            tok: v1433
            });
          const v2757 = v2756[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '1')];
          const v2758 = v2757[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v2758,
            kind: 'from',
            to: v1431,
            tok: v1434
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1434
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1433
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Deployer0_1148': {
          const v2822 = v2722[1];
          ;
          const v2877 = stdlib.addressEq(v2721, v1431);
          ;
          sim_r.txns.push({
            amt: v1505,
            kind: 'from',
            to: v1431,
            tok: undefined /* Nothing */
            });
          const v2883 = v1504[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
          const v2884 = v2883[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
          const v2890 = stdlib.sub(v2884, v2884);
          const v2893 = v2883[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '1')];
          const v2894 = v2883[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '2')];
          const v2895 = [v2890, v2893, v2894];
          const v2896 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '0'), v2895);
          sim_r.txns.push({
            amt: v2884,
            kind: 'from',
            to: v1431,
            tok: v1433
            });
          const v2897 = v2896[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '1')];
          const v2898 = v2897[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v2898,
            kind: 'from',
            to: v1431,
            tok: v1434
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1434
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1433
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc6, ctc5, ctc5, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2722], secs: v2724, time: v2723, didSend: v1203, from: v2721 } = txn3;
  switch (v2722[0]) {
    case 'Any_halt0_1148': {
      const v2725 = v2722[1];
      undefined /* setApiDetails */;
      ;
      const v2732 = null;
      await txn3.getOutput('Any_halt', 'v2732', ctc0, v2732);
      ;
      const v2743 = v1504[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
      const v2744 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
      const v2750 = stdlib.sub(v2744, v2744);
      const v2753 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '1')];
      const v2754 = v2743[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '2')];
      const v2755 = [v2750, v2753, v2754];
      const v2756 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '0'), v2755);
      ;
      const v2757 = v2756[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '1')];
      const v2758 = v2757[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Deployer0_1148': {
      const v2822 = v2722[1];
      ;
      const v2877 = stdlib.addressEq(v2721, v1431);
      stdlib.assert(v2877, {
        at: './staker.rsh:248:7:application',
        fs: [],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v2883 = v1504[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
      const v2884 = v2883[stdlib.checkedBigNumberify('./staker.rsh:254:21:application', stdlib.UInt_max, '0')];
      const v2890 = stdlib.sub(v2884, v2884);
      const v2893 = v2883[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '1')];
      const v2894 = v2883[stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '2')];
      const v2895 = [v2890, v2893, v2894];
      const v2896 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:254:55:application', stdlib.UInt_max, '0'), v2895);
      ;
      const v2897 = v2896[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '1')];
      const v2898 = v2897[stdlib.checkedBigNumberify('./staker.rsh:256:21:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    }
  
  
  
  
  
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
    Staker_harvest0_576: ctc11,
    Staker_stake0_576: ctc12,
    Staker_withdraw0_576: ctc12
    });
  const ctc14 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1761 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:217:9:application call to [unknown function] (defined at: ./staker.rsh:217:9:function exp)', 'at ./staker.rsh:120:19:application call to "runStaker_harvest0_576" (defined at: ./staker.rsh:217:9:function exp)', 'at ./staker.rsh:120:19:application call to [unknown function] (defined at: ./staker.rsh:120:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v1765 = ['Staker_harvest0_576', v1761];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661, v1765],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:218:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:218:19:decimal', stdlib.UInt_max, '0'), v1434]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn1;
      
      switch (v1800[0]) {
        case 'Staker_harvest0_576': {
          const v1803 = v1800[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          ;
          const v1839 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
          const v1840 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
          const v1844 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
          const v1845 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
          const v1846 = [v1840, v1844, v1845];
          const v1847 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v1846);
          ;
          const v1849 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1799), null);
          const v1851 = {
            rewards: v1492,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v1852 = stdlib.fromSome(v1849, v1851);
          const v1853 = v1852.stake;
          const v1858 = v1852.rewards;
          const v1859 = v1858[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '0')];
          let v1864;
          if (v1637) {
            v1864 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1866 = stdlib.sub(v1635, v1496);
            v1864 = v1866;
            }
          const v1868 = stdlib.mul(v1864, v1455);
          const v1869 = stdlib.add(v1633, v1868);
          const v1871 = stdlib.le(v1869, v1642);
          const v1872 = v1871 ? v1869 : v1642;
          let v1875;
          const v1876 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
          if (v1876) {
            v1875 = v1872;
            }
          else {
            const v1877 = stdlib.muldiv(v1872, v1853, v1497);
            v1875 = v1877;
            }
          let v1878;
          const v1879 = stdlib.ge(v1859, v1875);
          if (v1879) {
            v1878 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1880 = stdlib.sub(v1875, v1859);
            v1878 = v1880;
            }
          const v1881 = stdlib.le(v1878, v1644);
          const v1882 = v1881 ? v1878 : v1644;
          const v1894 = v1858[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '1')];
          let v1899;
          if (v1637) {
            v1899 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1901 = stdlib.sub(v1635, v1496);
            v1899 = v1901;
            }
          const v1903 = stdlib.mul(v1899, v1457);
          const v1904 = stdlib.add(v1647, v1903);
          const v1906 = stdlib.le(v1904, v1656);
          const v1907 = v1906 ? v1904 : v1656;
          let v1910;
          if (v1876) {
            v1910 = v1907;
            }
          else {
            const v1912 = stdlib.muldiv(v1907, v1853, v1497);
            v1910 = v1912;
            }
          let v1913;
          const v1914 = stdlib.ge(v1894, v1910);
          if (v1914) {
            v1913 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1915 = stdlib.sub(v1910, v1894);
            v1913 = v1915;
            }
          const v1916 = stdlib.le(v1913, v1658);
          const v1917 = v1916 ? v1913 : v1658;
          const v1919 = [v1882, v1917];
          const v1928 = stdlib.sub(v1505, v1882);
          sim_r.txns.push({
            amt: v1882,
            kind: 'from',
            to: v1799,
            tok: undefined /* Nothing */
            });
          const v1929 = v1847[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0')];
          const v1930 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0')];
          const v1934 = stdlib.sub(v1930, v1917);
          const v1937 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '1')];
          const v1938 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '2')];
          const v1939 = [v1934, v1937, v1938];
          const v1940 = stdlib.Array_set(v1847, stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0'), v1939);
          sim_r.txns.push({
            amt: v1917,
            kind: 'from',
            to: v1799,
            tok: v1433
            });
          const v1942 = stdlib.sub(v1642, v1882);
          const v1944 = stdlib.sub(v1656, v1917);
          const v1957 = stdlib.add(v1859, v1882);
          const v1959 = stdlib.add(v1894, v1917);
          const v1960 = [v1957, v1959];
          const v1961 = {
            rewards: v1960,
            stake: v1853
            };
          await stdlib.simMapSet(sim_r, 0, v1799, v1961);
          const v1966 = [v1942, v1944];
          const v1967 = {
            totalRemaining: v1966,
            userReceived: v1919
            };
          const v1968 = await txn1.getOutput('Staker_harvest', 'v1967', ctc14, v1967);
          
          const v1973 = stdlib.sub(v1644, v1882);
          const v1974 = stdlib.sub(v1658, v1917);
          const v4972 = v1966;
          const v4973 = v1499;
          const v4974 = v1497;
          const v4975 = v1801;
          const v4976 = v1498;
          const v4977 = v1940;
          const v4978 = v1928;
          const v4980 = stdlib.le(v1498, v1476);
          const v4981 = v1876 ? v4980 : true;
          if (v4981) {
            const v4982 = v1973;
            const v4983 = stdlib.le(v1476, v1498);
            const v4984 = v4983 ? v1476 : v1498;
            let v4985;
            const v4986 = stdlib.ge(v1499, v4984);
            if (v4986) {
              v4985 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v4987 = stdlib.sub(v4984, v1499);
              v4985 = v4987;
              }
            const v4988 = stdlib.mul(v4985, v1455);
            const v4989 = stdlib.add(v1973, v4988);
            const v4990 = v1942;
            const v4991 = stdlib.le(v4989, v1942);
            const v4992 = v4991 ? v4989 : v1942;
            const v4993 = v1974;
            let v4994;
            if (v4986) {
              v4994 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v4995 = stdlib.sub(v4984, v1499);
              v4994 = v4995;
              }
            const v4996 = stdlib.mul(v4994, v1457);
            const v4997 = stdlib.add(v1974, v4996);
            const v4998 = v1944;
            const v4999 = stdlib.le(v4997, v1944);
            const v5000 = v4999 ? v4997 : v1944;
            const v5001 = [v4992, v5000];
            sim_r.isHalt = false;
            }
          else {
            const v5002 = v1973;
            const v5003 = stdlib.le(v1476, v1498);
            const v5004 = v5003 ? v1476 : v1498;
            let v5005;
            const v5006 = stdlib.ge(v1499, v5004);
            if (v5006) {
              v5005 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5007 = stdlib.sub(v5004, v1499);
              v5005 = v5007;
              }
            const v5008 = stdlib.mul(v5005, v1455);
            const v5009 = stdlib.add(v1973, v5008);
            const v5010 = v1942;
            const v5011 = stdlib.le(v5009, v1942);
            const v5012 = v5011 ? v5009 : v1942;
            const v5013 = v1974;
            let v5014;
            if (v5006) {
              v5014 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5015 = stdlib.sub(v5004, v1499);
              v5014 = v5015;
              }
            const v5016 = stdlib.mul(v5014, v1457);
            const v5017 = stdlib.add(v1974, v5016);
            const v5018 = v1944;
            const v5019 = stdlib.le(v5017, v1944);
            const v5020 = v5019 ? v5017 : v1944;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_stake0_576': {
          const v2069 = v1800[1];
          
          break;
          }
        case 'Staker_withdraw0_576': {
          const v2335 = v1800[1];
          
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
  const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn1;
  switch (v1800[0]) {
    case 'Staker_harvest0_576': {
      const v1803 = v1800[1];
      undefined /* setApiDetails */;
      ;
      const v1839 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
      const v1840 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
      const v1844 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
      const v1845 = v1839[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
      const v1846 = [v1840, v1844, v1845];
      const v1847 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v1846);
      ;
      const v1849 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1799), null);
      const v1851 = {
        rewards: v1492,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1852 = stdlib.fromSome(v1849, v1851);
      const v1853 = v1852.stake;
      const v1858 = v1852.rewards;
      const v1859 = v1858[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '0')];
      let v1864;
      if (v1637) {
        v1864 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1866 = stdlib.sub(v1635, v1496);
        v1864 = v1866;
        }
      const v1868 = stdlib.mul(v1864, v1455);
      const v1869 = stdlib.add(v1633, v1868);
      const v1871 = stdlib.le(v1869, v1642);
      const v1872 = v1871 ? v1869 : v1642;
      let v1875;
      const v1876 = stdlib.eq(v1497, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
      if (v1876) {
        v1875 = v1872;
        }
      else {
        const v1877 = stdlib.muldiv(v1872, v1853, v1497);
        v1875 = v1877;
        }
      let v1878;
      const v1879 = stdlib.ge(v1859, v1875);
      if (v1879) {
        v1878 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1880 = stdlib.sub(v1875, v1859);
        v1878 = v1880;
        }
      const v1881 = stdlib.le(v1878, v1644);
      const v1882 = v1881 ? v1878 : v1644;
      const v1894 = v1858[stdlib.checkedBigNumberify('./staker.rsh:139:54:array ref', stdlib.UInt_max, '1')];
      let v1899;
      if (v1637) {
        v1899 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1901 = stdlib.sub(v1635, v1496);
        v1899 = v1901;
        }
      const v1903 = stdlib.mul(v1899, v1457);
      const v1904 = stdlib.add(v1647, v1903);
      const v1906 = stdlib.le(v1904, v1656);
      const v1907 = v1906 ? v1904 : v1656;
      let v1910;
      if (v1876) {
        v1910 = v1907;
        }
      else {
        const v1912 = stdlib.muldiv(v1907, v1853, v1497);
        v1910 = v1912;
        }
      let v1913;
      const v1914 = stdlib.ge(v1894, v1910);
      if (v1914) {
        v1913 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1915 = stdlib.sub(v1910, v1894);
        v1913 = v1915;
        }
      const v1916 = stdlib.le(v1913, v1658);
      const v1917 = v1916 ? v1913 : v1658;
      const v1919 = [v1882, v1917];
      const v1928 = stdlib.sub(v1505, v1882);
      ;
      const v1929 = v1847[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0')];
      const v1930 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0')];
      const v1934 = stdlib.sub(v1930, v1917);
      const v1937 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '1')];
      const v1938 = v1929[stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '2')];
      const v1939 = [v1934, v1937, v1938];
      const v1940 = stdlib.Array_set(v1847, stdlib.checkedBigNumberify('./staker.rsh:223:56:application', stdlib.UInt_max, '0'), v1939);
      ;
      const v1942 = stdlib.sub(v1642, v1882);
      const v1944 = stdlib.sub(v1656, v1917);
      const v1957 = stdlib.add(v1859, v1882);
      const v1959 = stdlib.add(v1894, v1917);
      const v1960 = [v1957, v1959];
      const v1961 = {
        rewards: v1960,
        stake: v1853
        };
      await stdlib.mapSet(map0, v1799, v1961);
      const v1966 = [v1942, v1944];
      const v1967 = {
        totalRemaining: v1966,
        userReceived: v1919
        };
      const v1968 = await txn1.getOutput('Staker_harvest', 'v1967', ctc14, v1967);
      if (v751) {
        stdlib.protect(ctc0, await interact.out(v1803, v1968), {
          at: './staker.rsh:217:10:application',
          fs: ['at ./staker.rsh:217:10:application call to [unknown function] (defined at: ./staker.rsh:217:10:function exp)', 'at ./staker.rsh:238:10:application call to "k" (defined at: ./staker.rsh:219:7:function exp)', 'at ./staker.rsh:219:7:application call to [unknown function] (defined at: ./staker.rsh:219:7:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      const v1973 = stdlib.sub(v1644, v1882);
      const v1974 = stdlib.sub(v1658, v1917);
      const v4972 = v1966;
      const v4973 = v1499;
      const v4974 = v1497;
      const v4975 = v1801;
      const v4976 = v1498;
      const v4977 = v1940;
      const v4978 = v1928;
      const v4980 = stdlib.le(v1498, v1476);
      const v4981 = v1876 ? v4980 : true;
      if (v4981) {
        const v4982 = v1973;
        const v4983 = stdlib.le(v1476, v1498);
        const v4984 = v4983 ? v1476 : v1498;
        let v4985;
        const v4986 = stdlib.ge(v1499, v4984);
        if (v4986) {
          v4985 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v4987 = stdlib.sub(v4984, v1499);
          v4985 = v4987;
          }
        const v4988 = stdlib.mul(v4985, v1455);
        const v4989 = stdlib.add(v1973, v4988);
        const v4990 = v1942;
        const v4991 = stdlib.le(v4989, v1942);
        const v4992 = v4991 ? v4989 : v1942;
        const v4993 = v1974;
        let v4994;
        if (v4986) {
          v4994 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v4995 = stdlib.sub(v4984, v1499);
          v4994 = v4995;
          }
        const v4996 = stdlib.mul(v4994, v1457);
        const v4997 = stdlib.add(v1974, v4996);
        const v4998 = v1944;
        const v4999 = stdlib.le(v4997, v1944);
        const v5000 = v4999 ? v4997 : v1944;
        const v5001 = [v4992, v5000];
        return;
        }
      else {
        const v5002 = v1973;
        const v5003 = stdlib.le(v1476, v1498);
        const v5004 = v5003 ? v1476 : v1498;
        let v5005;
        const v5006 = stdlib.ge(v1499, v5004);
        if (v5006) {
          v5005 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5007 = stdlib.sub(v5004, v1499);
          v5005 = v5007;
          }
        const v5008 = stdlib.mul(v5005, v1455);
        const v5009 = stdlib.add(v1973, v5008);
        const v5010 = v1942;
        const v5011 = stdlib.le(v5009, v1942);
        const v5012 = v5011 ? v5009 : v1942;
        const v5013 = v1974;
        let v5014;
        if (v5006) {
          v5014 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5015 = stdlib.sub(v5004, v1499);
          v5014 = v5015;
          }
        const v5016 = stdlib.mul(v5014, v1457);
        const v5017 = stdlib.add(v1974, v5016);
        const v5018 = v1944;
        const v5019 = stdlib.le(v5017, v1944);
        const v5020 = v5019 ? v5017 : v1944;
        return;
        }
      break;
      }
    case 'Staker_stake0_576': {
      const v2069 = v1800[1];
      return;
      break;
      }
    case 'Staker_withdraw0_576': {
      const v2335 = v1800[1];
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
    Staker_harvest0_576: ctc12,
    Staker_stake0_576: ctc11,
    Staker_withdraw0_576: ctc11
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1738 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:169:9:application call to [unknown function] (defined at: ./staker.rsh:169:9:function exp)', 'at ./staker.rsh:120:19:application call to "runStaker_stake0_576" (defined at: ./staker.rsh:169:9:function exp)', 'at ./staker.rsh:120:19:application call to [unknown function] (defined at: ./staker.rsh:120:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v1739 = v1738[stdlib.checkedBigNumberify('./staker.rsh:169:9:spread', stdlib.UInt_max, '0')];
  const v1743 = ['Staker_stake0_576', v1738];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661, v1743],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:170:18:decimal', stdlib.UInt_max, '0'), [[v1739, v1434]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn1;
      
      switch (v1800[0]) {
        case 'Staker_harvest0_576': {
          const v1803 = v1800[1];
          
          break;
          }
        case 'Staker_stake0_576': {
          const v2069 = v1800[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v2081 = v2069[stdlib.checkedBigNumberify('./staker.rsh:169:9:spread', stdlib.UInt_max, '0')];
          ;
          const v2105 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
          const v2106 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
          const v2107 = stdlib.add(v2106, v2081);
          const v2110 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
          const v2111 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
          const v2112 = [v2107, v2110, v2111];
          const v2113 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v2112);
          sim_r.txns.push({
            amt: v2081,
            kind: 'to',
            tok: v1434
            });
          const v2248 = stdlib.add(v1497, v2081);
          const v2249 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1799), null);
          const v2251 = {
            rewards: v1492,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v2252 = stdlib.fromSome(v2249, v2251);
          const v2253 = v2252.stake;
          const v2254 = stdlib.add(v2253, v2081);
          const v2259 = v2252.rewards;
          let v2260;
          const v2261 = stdlib.eq(v2248, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
          if (v2261) {
            v2260 = v1644;
            }
          else {
            const v2262 = stdlib.muldiv(v1644, v2081, v2248);
            v2260 = v2262;
            }
          const v2263 = v2259[stdlib.checkedBigNumberify('./staker.rsh:178:29:array ref', stdlib.UInt_max, '0')];
          const v2264 = stdlib.add(v2263, v2260);
          let v2265;
          if (v2261) {
            v2265 = v1658;
            }
          else {
            const v2267 = stdlib.muldiv(v1658, v2081, v2248);
            v2265 = v2267;
            }
          const v2268 = v2259[stdlib.checkedBigNumberify('./staker.rsh:178:29:array ref', stdlib.UInt_max, '1')];
          const v2269 = stdlib.add(v2268, v2265);
          const v2270 = [v2264, v2269];
          const v2271 = {
            rewards: v2270,
            stake: v2254
            };
          await stdlib.simMapSet(sim_r, 0, v1799, v2271);
          const v2272 = {
            newEveryoneStaked: v2248,
            newUserStaked: v2254
            };
          const v2273 = await txn1.getOutput('Staker_stake', 'v2272', ctc14, v2272);
          
          const v5284 = v1495;
          const v5285 = v1499;
          const v5286 = v2248;
          const v5287 = v1801;
          const v5288 = v1498;
          const v5289 = v2113;
          const v5290 = v1505;
          const v5292 = stdlib.le(v1498, v1476);
          const v5293 = v2261 ? v5292 : true;
          if (v5293) {
            const v5294 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
            const v5295 = stdlib.le(v1476, v1498);
            const v5296 = v5295 ? v1476 : v1498;
            let v5297;
            const v5298 = stdlib.ge(v1499, v5296);
            if (v5298) {
              v5297 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5299 = stdlib.sub(v5296, v1499);
              v5297 = v5299;
              }
            const v5300 = stdlib.mul(v5297, v1455);
            const v5301 = stdlib.add(v5294, v5300);
            const v5302 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
            const v5303 = stdlib.le(v5301, v5302);
            const v5304 = v5303 ? v5301 : v5302;
            const v5305 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
            let v5306;
            if (v5298) {
              v5306 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5307 = stdlib.sub(v5296, v1499);
              v5306 = v5307;
              }
            const v5308 = stdlib.mul(v5306, v1457);
            const v5309 = stdlib.add(v5305, v5308);
            const v5310 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
            const v5311 = stdlib.le(v5309, v5310);
            const v5312 = v5311 ? v5309 : v5310;
            const v5313 = [v5304, v5312];
            sim_r.isHalt = false;
            }
          else {
            const v5314 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
            const v5315 = stdlib.le(v1476, v1498);
            const v5316 = v5315 ? v1476 : v1498;
            let v5317;
            const v5318 = stdlib.ge(v1499, v5316);
            if (v5318) {
              v5317 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5319 = stdlib.sub(v5316, v1499);
              v5317 = v5319;
              }
            const v5320 = stdlib.mul(v5317, v1455);
            const v5321 = stdlib.add(v5314, v5320);
            const v5322 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
            const v5323 = stdlib.le(v5321, v5322);
            const v5324 = v5323 ? v5321 : v5322;
            const v5325 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
            let v5326;
            if (v5318) {
              v5326 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5327 = stdlib.sub(v5316, v1499);
              v5326 = v5327;
              }
            const v5328 = stdlib.mul(v5326, v1457);
            const v5329 = stdlib.add(v5325, v5328);
            const v5330 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
            const v5331 = stdlib.le(v5329, v5330);
            const v5332 = v5331 ? v5329 : v5330;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_withdraw0_576': {
          const v2335 = v1800[1];
          
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
  const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn1;
  switch (v1800[0]) {
    case 'Staker_harvest0_576': {
      const v1803 = v1800[1];
      return;
      break;
      }
    case 'Staker_stake0_576': {
      const v2069 = v1800[1];
      undefined /* setApiDetails */;
      const v2081 = v2069[stdlib.checkedBigNumberify('./staker.rsh:169:9:spread', stdlib.UInt_max, '0')];
      ;
      const v2105 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
      const v2106 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
      const v2107 = stdlib.add(v2106, v2081);
      const v2110 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
      const v2111 = v2105[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
      const v2112 = [v2107, v2110, v2111];
      const v2113 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v2112);
      ;
      const v2248 = stdlib.add(v1497, v2081);
      const v2249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1799), null);
      const v2251 = {
        rewards: v1492,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2252 = stdlib.fromSome(v2249, v2251);
      const v2253 = v2252.stake;
      const v2254 = stdlib.add(v2253, v2081);
      const v2259 = v2252.rewards;
      let v2260;
      const v2261 = stdlib.eq(v2248, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
      if (v2261) {
        v2260 = v1644;
        }
      else {
        const v2262 = stdlib.muldiv(v1644, v2081, v2248);
        v2260 = v2262;
        }
      const v2263 = v2259[stdlib.checkedBigNumberify('./staker.rsh:178:29:array ref', stdlib.UInt_max, '0')];
      const v2264 = stdlib.add(v2263, v2260);
      let v2265;
      if (v2261) {
        v2265 = v1658;
        }
      else {
        const v2267 = stdlib.muldiv(v1658, v2081, v2248);
        v2265 = v2267;
        }
      const v2268 = v2259[stdlib.checkedBigNumberify('./staker.rsh:178:29:array ref', stdlib.UInt_max, '1')];
      const v2269 = stdlib.add(v2268, v2265);
      const v2270 = [v2264, v2269];
      const v2271 = {
        rewards: v2270,
        stake: v2254
        };
      await stdlib.mapSet(map0, v1799, v2271);
      const v2272 = {
        newEveryoneStaked: v2248,
        newUserStaked: v2254
        };
      const v2273 = await txn1.getOutput('Staker_stake', 'v2272', ctc14, v2272);
      if (v751) {
        stdlib.protect(ctc0, await interact.out(v2069, v2273), {
          at: './staker.rsh:169:10:application',
          fs: ['at ./staker.rsh:169:10:application call to [unknown function] (defined at: ./staker.rsh:169:10:function exp)', 'at ./staker.rsh:187:10:application call to "k" (defined at: ./staker.rsh:171:7:function exp)', 'at ./staker.rsh:171:7:application call to [unknown function] (defined at: ./staker.rsh:171:7:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      const v5284 = v1495;
      const v5285 = v1499;
      const v5286 = v2248;
      const v5287 = v1801;
      const v5288 = v1498;
      const v5289 = v2113;
      const v5290 = v1505;
      const v5292 = stdlib.le(v1498, v1476);
      const v5293 = v2261 ? v5292 : true;
      if (v5293) {
        const v5294 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
        const v5295 = stdlib.le(v1476, v1498);
        const v5296 = v5295 ? v1476 : v1498;
        let v5297;
        const v5298 = stdlib.ge(v1499, v5296);
        if (v5298) {
          v5297 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5299 = stdlib.sub(v5296, v1499);
          v5297 = v5299;
          }
        const v5300 = stdlib.mul(v5297, v1455);
        const v5301 = stdlib.add(v5294, v5300);
        const v5302 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
        const v5303 = stdlib.le(v5301, v5302);
        const v5304 = v5303 ? v5301 : v5302;
        const v5305 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
        let v5306;
        if (v5298) {
          v5306 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5307 = stdlib.sub(v5296, v1499);
          v5306 = v5307;
          }
        const v5308 = stdlib.mul(v5306, v1457);
        const v5309 = stdlib.add(v5305, v5308);
        const v5310 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
        const v5311 = stdlib.le(v5309, v5310);
        const v5312 = v5311 ? v5309 : v5310;
        const v5313 = [v5304, v5312];
        return;
        }
      else {
        const v5314 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
        const v5315 = stdlib.le(v1476, v1498);
        const v5316 = v5315 ? v1476 : v1498;
        let v5317;
        const v5318 = stdlib.ge(v1499, v5316);
        if (v5318) {
          v5317 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5319 = stdlib.sub(v5316, v1499);
          v5317 = v5319;
          }
        const v5320 = stdlib.mul(v5317, v1455);
        const v5321 = stdlib.add(v5314, v5320);
        const v5322 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
        const v5323 = stdlib.le(v5321, v5322);
        const v5324 = v5323 ? v5321 : v5322;
        const v5325 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
        let v5326;
        if (v5318) {
          v5326 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5327 = stdlib.sub(v5316, v1499);
          v5326 = v5327;
          }
        const v5328 = stdlib.mul(v5326, v1457);
        const v5329 = stdlib.add(v5325, v5328);
        const v5330 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
        const v5331 = stdlib.le(v5329, v5330);
        const v5332 = v5331 ? v5329 : v5330;
        return;
        }
      break;
      }
    case 'Staker_withdraw0_576': {
      const v2335 = v1800[1];
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
    Staker_harvest0_576: ctc12,
    Staker_stake0_576: ctc11,
    Staker_withdraw0_576: ctc11
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1745 = ctc.selfAddress();
  const v1747 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:191:7:application call to [unknown function] (defined at: ./staker.rsh:191:7:function exp)', 'at ./staker.rsh:120:19:application call to "runStaker_withdraw0_576" (defined at: ./staker.rsh:190:9:function exp)', 'at ./staker.rsh:120:19:application call to [unknown function] (defined at: ./staker.rsh:120:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v1748 = v1747[stdlib.checkedBigNumberify('./staker.rsh:190:9:spread', stdlib.UInt_max, '0')];
  const v1749 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1745), null);
  const v1751 = {
    rewards: v1492,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v1752 = stdlib.fromSome(v1749, v1751);
  const v1753 = v1752.stake;
  const v1754 = stdlib.le(v1748, v1753);
  stdlib.assert(v1754, {
    at: './staker.rsh:191:23:application',
    fs: ['at ./staker.rsh:191:7:application call to [unknown function] (defined at: ./staker.rsh:191:14:function exp)', 'at ./staker.rsh:191:7:application call to [unknown function] (defined at: ./staker.rsh:191:7:function exp)', 'at ./staker.rsh:120:19:application call to "runStaker_withdraw0_576" (defined at: ./staker.rsh:190:9:function exp)', 'at ./staker.rsh:120:19:application call to [unknown function] (defined at: ./staker.rsh:120:19:function exp)'],
    msg: null,
    who: 'Staker_withdraw'
    });
  const v1757 = ['Staker_withdraw0_576', v1747];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1431, v1432, v1433, v1434, v1455, v1457, v1476, v1492, v1495, v1496, v1497, v1498, v1499, v1504, v1505, v1633, v1635, v1637, v1642, v1644, v1647, v1656, v1658, v1661, v1757],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:192:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:192:20:decimal', stdlib.UInt_max, '0'), v1434]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn1;
      
      switch (v1800[0]) {
        case 'Staker_harvest0_576': {
          const v1803 = v1800[1];
          
          break;
          }
        case 'Staker_stake0_576': {
          const v2069 = v1800[1];
          
          break;
          }
        case 'Staker_withdraw0_576': {
          const v2335 = v1800[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          ;
          const v2371 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
          const v2372 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
          const v2376 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
          const v2377 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
          const v2378 = [v2372, v2376, v2377];
          const v2379 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v2378);
          ;
          const v2548 = v2335[stdlib.checkedBigNumberify('./staker.rsh:190:9:spread', stdlib.UInt_max, '0')];
          const v2549 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1799), null);
          const v2551 = {
            rewards: v1492,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v2552 = stdlib.fromSome(v2549, v2551);
          const v2553 = v2552.stake;
          const v2555 = stdlib.le(v2548, v2553);
          ;
          const v2556 = v2379[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1')];
          const v2557 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '0')];
          const v2561 = stdlib.sub(v2557, v2548);
          const v2564 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1')];
          const v2565 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '2')];
          const v2566 = [v2561, v2564, v2565];
          const v2567 = stdlib.Array_set(v2379, stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1'), v2566);
          sim_r.txns.push({
            amt: v2548,
            kind: 'from',
            to: v1799,
            tok: v1434
            });
          const v2568 = stdlib.sub(v1497, v2548);
          const v2569 = stdlib.sub(v2553, v2548);
          const v2574 = v2552.rewards;
          const v2575 = v2574[stdlib.checkedBigNumberify('./staker.rsh:205:50:array ref', stdlib.UInt_max, '0')];
          let v2576;
          const v2577 = stdlib.eq(v2568, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
          if (v2577) {
            v2576 = v1644;
            }
          else {
            const v2578 = stdlib.muldiv(v1644, v2548, v2568);
            v2576 = v2578;
            }
          let v2579;
          const v2580 = stdlib.ge(v2576, v2575);
          if (v2580) {
            v2579 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2581 = stdlib.sub(v2575, v2576);
            v2579 = v2581;
            }
          const v2582 = v2574[stdlib.checkedBigNumberify('./staker.rsh:205:50:array ref', stdlib.UInt_max, '1')];
          let v2583;
          if (v2577) {
            v2583 = v1658;
            }
          else {
            const v2585 = stdlib.muldiv(v1658, v2548, v2568);
            v2583 = v2585;
            }
          let v2586;
          const v2587 = stdlib.ge(v2583, v2582);
          if (v2587) {
            v2586 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2588 = stdlib.sub(v2582, v2583);
            v2586 = v2588;
            }
          const v2589 = [v2579, v2586];
          const v2590 = {
            rewards: v2589,
            stake: v2569
            };
          await stdlib.simMapSet(sim_r, 0, v1799, v2590);
          const v2592 = {
            newEveryoneStaked: v2568,
            newUserStaked: v2569
            };
          const v2593 = await txn1.getOutput('Staker_withdraw', 'v2592', ctc14, v2592);
          
          const v5596 = v1495;
          const v5597 = v1499;
          const v5598 = v2568;
          const v5599 = v1801;
          const v5600 = v1498;
          const v5601 = v2567;
          const v5602 = v1505;
          const v5604 = stdlib.le(v1498, v1476);
          const v5605 = v2577 ? v5604 : true;
          if (v5605) {
            const v5606 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
            const v5607 = stdlib.le(v1476, v1498);
            const v5608 = v5607 ? v1476 : v1498;
            let v5609;
            const v5610 = stdlib.ge(v1499, v5608);
            if (v5610) {
              v5609 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5611 = stdlib.sub(v5608, v1499);
              v5609 = v5611;
              }
            const v5612 = stdlib.mul(v5609, v1455);
            const v5613 = stdlib.add(v5606, v5612);
            const v5614 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
            const v5615 = stdlib.le(v5613, v5614);
            const v5616 = v5615 ? v5613 : v5614;
            const v5617 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
            let v5618;
            if (v5610) {
              v5618 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5619 = stdlib.sub(v5608, v1499);
              v5618 = v5619;
              }
            const v5620 = stdlib.mul(v5618, v1457);
            const v5621 = stdlib.add(v5617, v5620);
            const v5622 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
            const v5623 = stdlib.le(v5621, v5622);
            const v5624 = v5623 ? v5621 : v5622;
            const v5625 = [v5616, v5624];
            sim_r.isHalt = false;
            }
          else {
            const v5626 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
            const v5627 = stdlib.le(v1476, v1498);
            const v5628 = v5627 ? v1476 : v1498;
            let v5629;
            const v5630 = stdlib.ge(v1499, v5628);
            if (v5630) {
              v5629 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5631 = stdlib.sub(v5628, v1499);
              v5629 = v5631;
              }
            const v5632 = stdlib.mul(v5629, v1455);
            const v5633 = stdlib.add(v5626, v5632);
            const v5634 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
            const v5635 = stdlib.le(v5633, v5634);
            const v5636 = v5635 ? v5633 : v5634;
            const v5637 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
            let v5638;
            if (v5630) {
              v5638 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v5639 = stdlib.sub(v5628, v1499);
              v5638 = v5639;
              }
            const v5640 = stdlib.mul(v5638, v1457);
            const v5641 = stdlib.add(v5637, v5640);
            const v5642 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
            const v5643 = stdlib.le(v5641, v5642);
            const v5644 = v5643 ? v5641 : v5642;
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
  const {data: [v1800], secs: v1802, time: v1801, didSend: v751, from: v1799 } = txn1;
  switch (v1800[0]) {
    case 'Staker_harvest0_576': {
      const v1803 = v1800[1];
      return;
      break;
      }
    case 'Staker_stake0_576': {
      const v2069 = v1800[1];
      return;
      break;
      }
    case 'Staker_withdraw0_576': {
      const v2335 = v1800[1];
      undefined /* setApiDetails */;
      ;
      const v2371 = v1504[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
      const v2372 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '0')];
      const v2376 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1')];
      const v2377 = v2371[stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '2')];
      const v2378 = [v2372, v2376, v2377];
      const v2379 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./staker.rsh:120:19:dot', stdlib.UInt_max, '1'), v2378);
      ;
      const v2548 = v2335[stdlib.checkedBigNumberify('./staker.rsh:190:9:spread', stdlib.UInt_max, '0')];
      const v2549 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1799), null);
      const v2551 = {
        rewards: v1492,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2552 = stdlib.fromSome(v2549, v2551);
      const v2553 = v2552.stake;
      const v2555 = stdlib.le(v2548, v2553);
      stdlib.assert(v2555, {
        at: './staker.rsh:196:16:application',
        fs: ['at ./staker.rsh:193:7:application call to [unknown function] (defined at: ./staker.rsh:193:7:function exp)'],
        msg: null,
        who: 'Staker_withdraw'
        });
      const v2556 = v2379[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1')];
      const v2557 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '0')];
      const v2561 = stdlib.sub(v2557, v2548);
      const v2564 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1')];
      const v2565 = v2556[stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '2')];
      const v2566 = [v2561, v2564, v2565];
      const v2567 = stdlib.Array_set(v2379, stdlib.checkedBigNumberify('./staker.rsh:197:41:application', stdlib.UInt_max, '1'), v2566);
      ;
      const v2568 = stdlib.sub(v1497, v2548);
      const v2569 = stdlib.sub(v2553, v2548);
      const v2574 = v2552.rewards;
      const v2575 = v2574[stdlib.checkedBigNumberify('./staker.rsh:205:50:array ref', stdlib.UInt_max, '0')];
      let v2576;
      const v2577 = stdlib.eq(v2568, stdlib.checkedBigNumberify('./staker.rsh:30:13:decimal', stdlib.UInt_max, '0'));
      if (v2577) {
        v2576 = v1644;
        }
      else {
        const v2578 = stdlib.muldiv(v1644, v2548, v2568);
        v2576 = v2578;
        }
      let v2579;
      const v2580 = stdlib.ge(v2576, v2575);
      if (v2580) {
        v2579 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2581 = stdlib.sub(v2575, v2576);
        v2579 = v2581;
        }
      const v2582 = v2574[stdlib.checkedBigNumberify('./staker.rsh:205:50:array ref', stdlib.UInt_max, '1')];
      let v2583;
      if (v2577) {
        v2583 = v1658;
        }
      else {
        const v2585 = stdlib.muldiv(v1658, v2548, v2568);
        v2583 = v2585;
        }
      let v2586;
      const v2587 = stdlib.ge(v2583, v2582);
      if (v2587) {
        v2586 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2588 = stdlib.sub(v2582, v2583);
        v2586 = v2588;
        }
      const v2589 = [v2579, v2586];
      const v2590 = {
        rewards: v2589,
        stake: v2569
        };
      await stdlib.mapSet(map0, v1799, v2590);
      const v2592 = {
        newEveryoneStaked: v2568,
        newUserStaked: v2569
        };
      const v2593 = await txn1.getOutput('Staker_withdraw', 'v2592', ctc14, v2592);
      if (v751) {
        stdlib.protect(ctc0, await interact.out(v2335, v2593), {
          at: './staker.rsh:190:10:application',
          fs: ['at ./staker.rsh:190:10:application call to [unknown function] (defined at: ./staker.rsh:190:10:function exp)', 'at ./staker.rsh:214:10:application call to "k" (defined at: ./staker.rsh:193:7:function exp)', 'at ./staker.rsh:193:7:application call to [unknown function] (defined at: ./staker.rsh:193:7:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      const v5596 = v1495;
      const v5597 = v1499;
      const v5598 = v2568;
      const v5599 = v1801;
      const v5600 = v1498;
      const v5601 = v2567;
      const v5602 = v1505;
      const v5604 = stdlib.le(v1498, v1476);
      const v5605 = v2577 ? v5604 : true;
      if (v5605) {
        const v5606 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
        const v5607 = stdlib.le(v1476, v1498);
        const v5608 = v5607 ? v1476 : v1498;
        let v5609;
        const v5610 = stdlib.ge(v1499, v5608);
        if (v5610) {
          v5609 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5611 = stdlib.sub(v5608, v1499);
          v5609 = v5611;
          }
        const v5612 = stdlib.mul(v5609, v1455);
        const v5613 = stdlib.add(v5606, v5612);
        const v5614 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
        const v5615 = stdlib.le(v5613, v5614);
        const v5616 = v5615 ? v5613 : v5614;
        const v5617 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
        let v5618;
        if (v5610) {
          v5618 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5619 = stdlib.sub(v5608, v1499);
          v5618 = v5619;
          }
        const v5620 = stdlib.mul(v5618, v1457);
        const v5621 = stdlib.add(v5617, v5620);
        const v5622 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
        const v5623 = stdlib.le(v5621, v5622);
        const v5624 = v5623 ? v5621 : v5622;
        const v5625 = [v5616, v5624];
        return;
        }
      else {
        const v5626 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '0')];
        const v5627 = stdlib.le(v1476, v1498);
        const v5628 = v5627 ? v1476 : v1498;
        let v5629;
        const v5630 = stdlib.ge(v1499, v5628);
        if (v5630) {
          v5629 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5631 = stdlib.sub(v5628, v1499);
          v5629 = v5631;
          }
        const v5632 = stdlib.mul(v5629, v1455);
        const v5633 = stdlib.add(v5626, v5632);
        const v5634 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '0')];
        const v5635 = stdlib.le(v5633, v5634);
        const v5636 = v5635 ? v5633 : v5634;
        const v5637 = v1661[stdlib.checkedBigNumberify('./staker.rsh:126:31:array ref', stdlib.UInt_max, '1')];
        let v5638;
        if (v5630) {
          v5638 = stdlib.checkedBigNumberify('./staker.rsh:25:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5639 = stdlib.sub(v5628, v1499);
          v5638 = v5639;
          }
        const v5640 = stdlib.mul(v5638, v1457);
        const v5641 = stdlib.add(v5637, v5640);
        const v5642 = v1495[stdlib.checkedBigNumberify('./staker.rsh:127:27:array ref', stdlib.UInt_max, '1')];
        const v5643 = stdlib.le(v5641, v5642);
        const v5644 = v5643 ? v5641 : v5642;
        return;
        }
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Any_halt()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`],
    pure: [`end()uint64`, `opts()(uint64,uint64,(uint64,uint64),uint64)`, `remainingRewards()(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`, `totalStaked()uint64`],
    sigs: [`Any_halt()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `end()uint64`, `opts()(uint64,uint64,(uint64,uint64),uint64)`, `remainingRewards()(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`, `totalStaked()uint64`]
    },
  appApproval: `BiAjAAgBBAYDEFhokAGYAdoBYEhQAqCNBhmZhPnuCemfutwNu4uE1Q7pmI/tDhjwqd2tDdTmudgG1rWXswiWjOy7CesB8wGDAosC+wHSAeIBlZjmlwYmBAEAAQEBAgAiNQAxGEEPMCtkSSJbNQEjWzUCMRkkEkEACjEAKCERr2ZCDv02GgAXSUEEeiI1BCQ1BkkhEgxAARFJIRMMQADlSSEUDEAAjEkhFQxAADghFRJENAFJIQQMQAAXIQQSRChkKWRQKmRQSTUDV4AQNQdCDr4hBRJEKGQpZFBJNQNXgBA1B0IOqiEUEkQ0AUkhBAxAACAhBBJEIRavNhoBiA6hSTX/VwEYNP8iVU1XEAg1B0IOfSEFEkQhFq82GgGIDoFJNf9XARg0/yJVTVcQCDUHQg5dIRMSRDQBSSEFDEAAMkkhBAxAABchBBJEKGQpZFAqZFBJNQNXICg1B0IOMiEFEkQoZClkUEk1A1cgKDUHQg4eJBJEKGQpZFBJNQNXICg1B0IOC0khFwxAAA4hFxJEKzX/KDT/UEIIUyESEkQ2GgE1/yk0/1BCA3lJIRgMQAMBSSEZDEAC6kkhGgxAADghGhJENAFJIQQMQAAXIQQSRChkKWRQKmRQSTUDV5gINQdCDa0hBRJEKGQpZFBJNQNXmAg1B0INmSEZEkQ0AUkhBAxAAU8hBBJENhoCFzX/KGQpZFAqZFBJNQNJSkpJIQhbNf4hCVs1/SEKWzX8IRtbNfshHFs1+iEdWzX5IR5bNfg0A1dwECOvUDYaAYgNU0k19lcBGDT2IlVNSTX3IQZbNfY091cAEEk19SJbNfQ0/zT+STT/Dk018zT9NPMPSTXxQQAGIjXyQgAHNPM0/Qk18jQDIQtbNPI0AyEHWwsINfA0+zTwSTT7Dk017zT8IhJJNe1BAAc07zXuQgAKNO809h00/Jc17jT0NO4PQQAGIjXsQgAHNO409Ak17DT1I1s16zTxQQAGIjXqQgAHNPM0/Qk16jQDIR9bNOo0AyEMWwsINek0+TTpSTT5Dk016DTtQQAHNOg150IACjToNPYdNPyXNec06zTnD0EABiI15kIABzTnNOsJNeY0+jTsSTT6Dk0WNPg05kk0+A5NFlA1B0IMPSEFEkQ2GgIXNf8oZClkUEk1A0lKSkkhCFs1/iEJWzX9IQpbNfwhIFs1+yELWzX6geoBWzX5gfIBWzX4NANXcBAjr1A2GgGIDAVJNfZXARg09iJVTUk19yEGWzX2NPdXABBJNfUiWzX0NP80/kk0/w5NNfM0/TTzD0k18UEABiI18kIABzTzNP0JNfI0A4HKAVs08jQDIQdbCwg18DT7NPBJNPsOTTXvNPwiEkk17UEABzTvNe5CAAo07zT2HTT8lzXuNPQ07g9BAAYiNexCAAc07jT0CTXsNPUjWzXrNPFBAAYiNepCAAc08zT9CTXqNAMhIVs06jQDIQxbCwg16TT5NOlJNPkOTTXoNO1BAAc06DXnQgAKNOg09h00/Jc15zTrNOcPQQAGIjXmQgAHNOc06wk15jT6NOxJNPoOTRY0+DTmSTT4Dk0WUDUHQgruIRgSRDYaATX/KjT/UEIAcUkhIgxAABEhIhJEKzX/KDT/UCOvUEIAWYGGqt2oAxJENAFJIQQMQAAXIQQSRChkKWRQKmRQSTUDV2gINQdCCp4hBRJEKGQpZFBJNQNXaAg1B0IKijYaAhc1BDYaAzYaARdJIQUMQAZRSSUMQATMJRJEIQQ0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKSkpKSkpKSkpKVwAgNf9XICg1/iENWzX9IQ5bNfwhB1s1+yEMWzX6IQhbNflXcBA1+FeAEDX3IQlbNfYhCls19YGgAVs19IGoAVs181ewIjXyISBbNfEhIVs18FfqARc17yEbWzXuIRxbNe0hHVs17CEeWzXrgZMCIQZYNepJNQU16YAE1Y4dqzTpULA06SJVSSQMQAJESSEPDEABUSEPEkQ06VcBCDXoNPJXERE15zTyVwARNOdXAAg051cICFA051cQAVBQNeY06Bc15TT4I69QMQCICYlJNeNXARg04yJVTUk15CEGWzXjNOU04w5ENOZXERE14rEisgE05bISJbIQMQCyFDT8shGzNPU05Qk14TTjNOUJNeA05FcAEEk13yJbNd404SISSTXcQQAHNO013UIACjTtNOUdNOGXNd003TTeD0EABiI120IABzTeNN0JNds03yNbNdo03EEABzTrNdlCAAo06zTlHTThlzXZNNk02g9BAAYiNdhCAAc02jTZCTXYMQAoKTTbFjTYFlA04BZQUGaACAAAAAAAAAogNOAWNOEWUFCwNOAWNOEWUDUHNP80/jT9NPw0+zT6NPk0+DTqNPc08zThMgY09DTmVwARNOIiWzTlCRY04lcICFA04lcQAVBQNPFCBhxINOlXAQg16DToFzXnNPJXERE15jTnNPyICH409TTnCDXlNPgjr1AxAIgIRkk141cBGDTjIlVNSTXkIQZbNOcINeM05FcAEDXiNOUiEkk14EEABzTtNeFCAAo07TTnHTTllzXhNOBBAAc06zXfQgAKNOs05x005Zc13zEAKCk04iJbNOEIFjTiI1s03wgWUDTjFlBQZoAIAAAAAAAACOA04xY05RZQULA04xY05RZQNQc0/zT+NP00/DT7NPo0+TT4NOo09zTzNOUyBjT0NPJXABE05iJbNOcIFjTmVwgIUDTmVxABUFA08UIFMEg08lcRETXoNPJXABE06FcACDToVwgIUDToVxABUFA15zT4I69QMQCIB1tJNeVXARg05SJVTUk15iEGWzXlNOZXABBJNeQiWzXjNO9BAAYiNeJCAAc08DT2CTXiNAMhC1s04jT7Cwg14TTuNOFJNO4OTTXgNPUiEkk13kEABzTgNd9CAAo04DTlHTT1lzXfNOM03w9BAAYiNd1CAAc03zTjCTXdNO003Uk07Q5NNdw05CNbNds070EABiI12kIABzTwNPYJNdo0AyEfWzTaNPoLCDXZNOw02Uk07A5NNdg03kEABzTYNddCAAo02DTlHTT1lzXXNNs01w9BAAYiNdZCAAc01zTbCTXWNOs01kk06w5NNdWxIrIBNNyyCCSyEDEAsgezNOdXABE11LEisgE01bISJbIQMQCyFDT9shGzMQAoKTTjNNwIFjTbNNUIFlA05RZQUGY07jTcCRY07DTVCRZQNdOACAAAAAAAAAevNNwWNNUWUDTTUFCwNNwWNNUWUDTTUDUHNP80/jT9NPw0+zT6NPk0+DTtNNwJFjTrNNUJFlA00zTzNPUyBjT0NNQiWzTVCRY01FcICFA01FcQAVA051cREVA08TTcCUIDX0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpJVwAgNf8hDVs1/iEOWzX9V6AiNfyBwgFbNftJNQU1+oAELkXGATT6ULA0+iJVQACdgAgAAAAAAAAKrLArNQexIrIBNPuyCCSyEDT/sgezNPxXABFJNfkiWzX4sSKyATT4shIlshA0/7IUNP6yEbOxIrIBNPhJCRY0+VcICFA0+VcQAVA0/FcREVBXEREiW7ISJbIQNP+yFDT9shGzsSKyASKyEiWyEDIJshUyCrIUNP2yEbOxIrIBIrISJbIQMgmyFTIKshQ0/rIRs0IEcjEANP8SRLEisgE0+7IIJLIQNP+yB7M0/FcAEUk1+SJbNfixIrIBNPiyEiWyEDT/shQ0/rIRs7EisgE0+EkJFjT5VwgIUDT5VxABUDT8VxERUFcRESJbshIlshA0/7IUNP2yEbOxIrIBIrISJbIQMgmyFTIKshQ0/bIRs7EisgEishIlshAyCbIVMgqyFDT+shGzQgPdSSQMQAC9JBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8hDVs1/iEHWzX9V2AiNfyBkgFbNfuBogFbNfqABJqLkXSwNPuIA/U0/FcAETX5NPo0/ogD/zT/MQASRDT9IQ8INfghBq819zT/NANXICg0/jQDIQ5bNAOBigFbNAOBmgFbNPg0A4GCAVsINPdJNPsWNPoWUDT4IjIGNP00+SJbNPoIFjT5VwgIUDT5VxABUDT8VxERUDT7QgEdSCI0ARJENARJIhJMNAISEURJNQVJSVcAKDX/gShbNf6BMFs1/YAEXohMcDT/UDT+FlA0/RZQsCEQiANGgRGvSTX8SVA1+zT+NP0TRDT7VwARNfojrzT6VwgIUDT6VxABUDT7VxERUDX5IRCIAxSxIrIBIrISJbIQMgqyFDT+shGzNPlXERE1+DT5VwARI680+FcICFA0+FcQAVBQNfchEIgC37EisgEishIlshAyCrIUNP2yEbM0/1cQEDX2NP+BIFs19TT2IltJNfQ09Qs18zT2I1tJNfI09Qs18TEANP9QNP4WUDT9FlAyBhZQNPdQNPUWUDT0FlA08xZQNPIWUDTxFlAoSwFXAH9nKUsBV38rZ0gkNQEyBjUCQgIZNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA0+yITNP009g4RQQD7NPgiWzXvNP009kk0/Q5NNe40+jTuD0k17EEABiI17UIABzTuNPoJNe007zTtNPQLCDXrNPkiW0k16jTrSTTqDk016TT4I1s16DTsQQAGIjXnQgAHNO40+gk15zToNOc09QsINeY0+SNbSTXlNOZJNOUOTTXkNOkWNOQWUDXjNPA08VA08hZQNPMWUDT0FlA09RZQNPYWUDT3UDT5UDT6FlA0+xZQNPwWUDT9FlA0/lA0/xZQNO8WUDTuFlA07BZRBwhQNOoWUDTpFlA06BZQNOUWUDTkFlA041AoSwFXAH9nKUsBV39/ZypLAVf+JWdIIQQ1ATIGNQJCAPE0+CJbNe80/TT2STT9Dk017jT6NO4PSTXsQQAGIjXtQgAHNO40+gk17TTvNO009AsINes0+SJbSTXqNOtJNOoOTTXpNPgjWzXoNOxBAAYiNedCAAc07jT6CTXnNOg05zT1Cwg15jT5I1tJNeU05kk05Q5NNeQ08DTxUDTyFlA08xZQNPQWUDT1FlA09hZQNPdQNPlQNPoWUDT7FlA0/lA0/xZQNO8WUDTqFlA06RZQNOgWUDTlFlA05BZQKEsBVwB/ZylLAVd/e2dIIQU1ATIGNQJCABwxGYEFEkSxIrIBIrIIJLIQMgmyCTIKsgezQgAFMRkiEkQrNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yI1ASI1AkL/w0kxGGFAAAVIIRGviShiiTQASUokCDUAOAcyChJEOBAkEkQ4CBJEiTQASUpJJAg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
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
                "name": "v1432",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1433",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1434",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
                "name": "v1432",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1433",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1434",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
        "internalType": "struct T15",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_1148",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Deployer0_1148",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v2722",
                "type": "tuple"
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
                    "name": "_Staker_harvest0_576",
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
                    "name": "_Staker_stake0_576",
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
                    "name": "_Staker_withdraw0_576",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1800",
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
    "name": "_reach_oe_v1967",
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
    "name": "_reach_oe_v2272",
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
    "name": "_reach_oe_v2592",
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
    "name": "_reach_oe_v2732",
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
        "internalType": "struct T15",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_1148",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Deployer0_1148",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v2722",
                "type": "tuple"
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
                    "name": "_Staker_harvest0_576",
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
                    "name": "_Staker_stake0_576",
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
                    "name": "_Staker_withdraw0_576",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1800",
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
    "inputs": [],
    "name": "end",
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
    "name": "opts",
    "outputs": [
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
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remainingRewards",
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
        "name": "v5680",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v5681",
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
        "name": "v5684",
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
    "inputs": [],
    "name": "totalStaked",
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
  Bytecode: `0x608060405260405162005b1438038062005b148339810160408190526200002691620006b9565b6000805543600355620000386200039e565b6040805183518152602080850151805180516001600160a01b0390811684860152818401518116858701528186015180516060808801919091529085015160808701529091015160a085015291810151821660c08401528301511660e082015290517fbe0a8f83451a5b85df174b5589dfb4490569d5cf8a8e57fad89c07e242f973e4918190036101000190a1805160009081905281516020908101829052825160409081019290925282518184018051919091528351905182015283810151918201519101516200012a916001600160a01b039182169116146200011f57600162000122565b60005b600d620002f1565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200016c92906200031b565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001b291906001906200031b565b60a0820152620001c53415600e620002f1565b602082015151606081015160409091015151620001e39190620007db565b60c0820152602080830151516060810151604090910151909101516200020a9190620007db565b60e08201526200021962000447565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151909116606080860191909152436080860181905260a080880151908701528351519091015160c0808701919091528351518301515160e0808801919091529087015161010087015292515182015184015161012086015291850151610140850152600160008190559190915551620002c19183910162000843565b60405160208183030381529060405260029080519060200190620002e7929190620004ba565b505050506200097f565b81620003175760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200032562000549565b60005b60028110156200037b57848160028110620003475762000347620007af565b6020020151828260028110620003615762000361620007af565b602002015280620003728162000924565b91505062000328565b5081818460028110620003925762000392620007af565b60200201529392505050565b604080516101608101909152600061010082018181526101208301829052610140830191909152815260208101620003d562000549565b815260408051606081018252600080825260208281018290529282015291019081526020016200040462000549565b815260408051606081018252600080825260208281018290529282015291019081526020016200043362000549565b815260200160008152602001600081525090565b60405180610160016040528060006001600160a01b031681526020016200046d62000596565b81526000602082018190526040820181905260608201526080016200049162000549565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054620004c89062000942565b90600052602060002090601f016020900481019282620004ec576000855562000537565b82601f106200050757805160ff191683800117855562000537565b8280016001018555821562000537579182015b82811115620005375782518255916020019190600101906200051a565b5062000545929150620005ec565b5090565b60405180604001604052806002905b6200057f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005585790505090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001620005df604051806040016040528060008152602001600081525090565b8152602001600081525090565b5b80821115620005455760008155600101620005ed565b604080519081016001600160401b03811182821017156200063457634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200063457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200063457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620006b457600080fd5b919050565b6000818303610100811215620006ce57600080fd5b620006d862000603565b83518152601f19820160e0811215620006f057600080fd5b620006fa6200063a565b60a08212156200070957600080fd5b620007136200066b565b915062000723602087016200069c565b825262000733604087016200069c565b60208301526040605f19850112156200074b57600080fd5b6200075562000603565b9350606086015184526080860151602085015283604083015260a086015160608301528181526200078960c087016200069c565b60208201526200079c60e087016200069c565b6040820152602083015250949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620007f857620007f8620007c5565b500290565b8060005b60028110156200083d57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000801565b50505050565b81516001600160a01b03168152610280810160208381015180516001600160a01b03908116858401528183015116604080860191909152810151805160608087019190915292015160808501529081015160a08401525060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120620008e981860184620007fd565b60c08601516101e086015260e08601516102008601529085015161022085015284015161024084015250610140909201516102609091015290565b60006000198214156200093b576200093b620007c5565b5060010190565b600181811c908216806200095757607f821691505b602082108114156200097957634e487b7160e01b600052602260045260246000fd5b50919050565b615185806200098f6000396000f3fe6080604052600436106100f65760003560e01c80638521eb921161008f578063ab53f2c611610061578063ab53f2c614610251578063afb62e5614610274578063b0c1f58a14610289578063e28095491461029c578063efbe1c1c146102b157005b80638521eb92146101f35780638712236d1461020b57806398807d841461021e578063a1bb51161461023e57005b80633bc5b7bf116100c85780633bc5b7bf1461016f5780636f0fe5c91461019c578063817b1cd2146101c957806383230757146101de57005b80630329cf49146100ff5780630a47debc146101125780631e93b0f11461013d5780632c10a1591461015c57005b366100fd57005b005b6100fd61010d366004614313565b6102c6565b34801561011e57600080fd5b506101276102ea565b604051610134919061436f565b60405180910390f35b34801561014957600080fd5b506003545b604051908152602001610134565b6100fd61016a36600461437d565b61050c565b34801561017b57600080fd5b5061018f61018a3660046143a4565b61052c565b60405161013491906143e7565b3480156101a857600080fd5b506101bc6101b7366004614435565b610543565b6040516101349190614461565b3480156101d557600080fd5b5061014e610d58565b3480156101ea57600080fd5b5060015461014e565b6101fb610f82565b6040519015158152602001610134565b6101bc610219366004614478565b610fd5565b34801561022a57600080fd5b5061014e6102393660046143a4565b61103f565b6100fd61024c366004614491565b6112d3565b34801561025d57600080fd5b506102666112f3565b6040516101349291906144cf565b34801561028057600080fd5b506101bc611390565b6101bc610297366004614478565b6115cc565b6102a4611635565b6040516101349190614509565b3480156102bd57600080fd5b5061014e611688565b6102ce61383f565b6102e66102e03684900384018461469f565b826118b1565b5050565b6102f26138a4565b600160005414156103a75760006002805461030c9061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546103389061473e565b80156103855780601f1061035a57610100808354040283529160200191610385565b820191906000526020600020905b81548152906001019060200180831161036857829003601f168201915b505050505080602001905181019061039d91906148a0565b6020015192915050565b60036000541415610452576000600280546103c19061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546103ed9061473e565b801561043a5780601f1061040f5761010080835404028352916020019161043a565b820191906000526020600020905b81548152906001019060200180831161041d57829003601f168201915b505050505080602001905181019061039d919061495a565b600660005414156104fd5760006002805461046c9061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546104989061473e565b80156104e55780601f106104ba576101008083540402835291602001916104e5565b820191906000526020600020905b8154815290600101906020018083116104c857829003601f168201915b505050505080602001905181019061039d9190614a87565b610509600060086128c5565b90565b61051461383f565b6102e661052636849003840184614bff565b826128eb565b6105346138f9565b61053d82612bcc565b92915050565b604080518082019091526000808252602082015260016000541415610612576000600280546105719061473e565b80601f016020809104026020016040519081016040528092919081815260200182805461059d9061473e565b80156105ea5780601f106105bf576101008083540402835291602001916105ea565b820191906000526020600020905b8154815290600101906020018083116105cd57829003601f168201915b505050505080602001905181019061060291906148a0565b90506106106000600a6128c5565b505b600360005414156109bf5760006002805461062c9061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546106589061473e565b80156106a55780601f1061067a576101008083540402835291602001916106a5565b820191906000526020600020905b81548152906001019060200180831161068857829003601f168201915b50505050508060200190518101906106bd919061495a565b90506106c7613918565b60e08201518151528051600060209091015260016106e486612bcc565b5160018111156106f6576106f66143c1565b14610702578051610710565b61070b85612bcc565b604001515b602082015260c0820151841015610727578361072d565b8160c001515b604082018190526101208301511080156080830152610752576000606082015261076d565b81610120015181604001516107679190614c4d565b60608201525b816080015181606001516107819190614c64565b826101a001516107919190614c83565b60a082018190526101c083015110156107af57816101c001516107b5565b8060a001515b60c0820152610140820151156101008201819052156107dd5760c081015160e082015261080b565b8161014001518160200151602001518260c001516107fb9190614c64565b6108059190614c9b565b60e08201525b60e08101516020820151515110610829576000610120820152610846565b6020810151515160e082015161083f9190614c4d565b6101208201525b80608001511561085d576000610140820152610879565b81610120015181604001516108729190614c4d565b6101408201525b8160a0015181610140015161088e9190614c64565b82610200015161089e9190614c83565b610160820181905261022083015110156108bd578161022001516108c4565b8061016001515b610180820152610100810151156108e6576101808101516101a0820152610916565b8161014001518160200151602001518261018001516109059190614c64565b61090f9190614c9b565b6101a08201525b6101a0810151602080830151510151106109375760006101c0820152610957565b6020808201515101516101a08201516109509190614c4d565b6101c08201525b816101e00151816101200151111561097457816101e0015161097b565b8061012001515b6101e0820151526102408201516101c0820151111561099f578161024001516109a6565b806101c001515b6101e090910180516020019190915251915061053d9050565b60066000541415610d4c576000600280546109d99061473e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a059061473e565b8015610a525780601f10610a2757610100808354040283529160200191610a52565b820191906000526020600020905b815481529060010190602001808311610a3557829003601f168201915b5050505050806020019051810190610a6a9190614a87565b9050610a74613918565b60e0820151815152805160006020909101526001610a9186612bcc565b516001811115610aa357610aa36143c1565b14610aaf578051610abd565b610ab885612bcc565b604001515b602082015260c0820151841015610ad45783610ada565b8160c001515b604082018190526101208301511080156080830152610aff5760006060820152610b1a565b8161012001518160400151610b149190614c4d565b60608201525b81608001518160600151610b2e9190614c64565b826101e00151610b3e9190614c83565b60a082018190526102408301511015610b5c57816102400151610b62565b8060a001515b60c082015261014082015115610100820181905215610b8a5760c081015160e0820152610bb8565b8161014001518160200151602001518260c00151610ba89190614c64565b610bb29190614c9b565b60e08201525b60e08101516020820151515110610bd6576000610120820152610bf3565b6020810151515160e0820151610bec9190614c4d565b6101208201525b806080015115610c0a576000610140820152610c26565b8161012001518160400151610c1f9190614c4d565b6101408201525b8160a00151816101400151610c3b9190614c64565b826102800151610c4b9190614c83565b61016082018190526102a08301511015610c6a57816102a00151610c71565b8061016001515b61018082015261010081015115610c93576101808101516101a0820152610cc3565b816101400151816020015160200151826101800151610cb29190614c64565b610cbc9190614c9b565b6101a08201525b6101a081015160208083015151015110610ce45760006101c0820152610d04565b6020808201515101516101a0820151610cfd9190614c4d565b6101c08201525b8161026001518161012001511115610d2157816102600151610d28565b8061012001515b6101e0820151526102c08201516101c0820151111561099f57816102c001516109a6565b61053d6000600a6128c5565b600060016000541415610e1557600060028054610d749061473e565b80601f0160208091040260200160405190810160405280929190818152602001828054610da09061473e565b8015610ded5780601f10610dc257610100808354040283529160200191610ded565b820191906000526020600020905b815481529060010190602001808311610dd057829003601f168201915b5050505050806020019051810190610e0591906148a0565b9050610e136000600c6128c5565b505b60036000541415610ecb57600060028054610e2f9061473e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5b9061473e565b8015610ea85780601f10610e7d57610100808354040283529160200191610ea8565b820191906000526020600020905b815481529060010190602001808311610e8b57829003601f168201915b5050505050806020019051810190610ec0919061495a565b610140015192915050565b60066000541415610f7657600060028054610ee59061473e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f119061473e565b8015610f5e5780601f10610f3357610100808354040283529160200191610f5e565b820191906000526020600020905b815481529060010190602001808311610f4157829003601f168201915b5050505050806020019051810190610ec09190614a87565b6105096000600c6128c5565b6000610f8c61383f565b610f946139ba565b6040805160608101825260008082526020808301829052828401919091528251808201909352818352830191909152610fcd8284612cb1565b505051919050565b6040805180820190915260008082526020820152610ff161383f565b610ff96139f3565b611001613a0d565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261103382846118b1565b50506060015192915050565b6000600160005414156110fc5760006002805461105b9061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546110879061473e565b80156110d45780601f106110a9576101008083540402835291602001916110d4565b820191906000526020600020905b8154815290600101906020018083116110b757829003601f168201915b50505050508060200190518101906110ec91906148a0565b90506110fa6000600b6128c5565b505b60036000541415611217576000600280546111169061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546111429061473e565b801561118f5780601f106111645761010080835404028352916020019161118f565b820191906000526020600020905b81548152906001019060200180831161117257829003601f168201915b50505050508060200190518101906111a7919061495a565b90506111b1613a45565b805160009081905281516020908101829052825181840180519190915251015260016111dc85612bcc565b5160018111156111ee576111ee6143c1565b146111fd57806020015161120b565b61120684612bcc565b604001515b60200151949350505050565b600660005414156112c2576000600280546112319061473e565b80601f016020809104026020016040519081016040528092919081815260200182805461125d9061473e565b80156112aa5780601f1061127f576101008083540402835291602001916112aa565b820191906000526020600020905b81548152906001019060200180831161128d57829003601f168201915b50505050508060200190518101906111a79190614a87565b6112ce6000600b6128c5565b919050565b6112db61383f565b6102e66112ed36849003840184614cbd565b82612cb1565b6000606060005460028080546113089061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546113349061473e565b80156113815780601f1061135657610100808354040283529160200191611381565b820191906000526020600020905b81548152906001019060200180831161136457829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526001600054141561145f576000600280546113be9061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546113ea9061473e565b80156114375780601f1061140c57610100808354040283529160200191611437565b820191906000526020600020905b81548152906001019060200180831161141a57829003601f168201915b505050505080602001905181019061144f91906148a0565b905061145d600060096128c5565b505b60036000541415611515576000600280546114799061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546114a59061473e565b80156114f25780601f106114c7576101008083540402835291602001916114f2565b820191906000526020600020905b8154815290600101906020018083116114d557829003601f168201915b505050505080602001905181019061150a919061495a565b610100015192915050565b600660005414156115c05760006002805461152f9061473e565b80601f016020809104026020016040519081016040528092919081815260200182805461155b9061473e565b80156115a85780601f1061157d576101008083540402835291602001916115a8565b820191906000526020600020905b81548152906001019060200180831161158b57829003601f168201915b505050505080602001905181019061150a9190614a87565b610509600060096128c5565b60408051808201909152600080825260208201526115e861383f565b6115f06139f3565b6115f8613a0d565b60408051602080820183528782528383019190915260018352815180820190925282825283015261162982846118b1565b50506040015192915050565b61163d613a6e565b61164561383f565b61164d6139f3565b611655613a0d565b60006020828101829052908252604080518083019091528281529083015261167d82846118b1565b505060200151919050565b600060016000541415611745576000600280546116a49061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546116d09061473e565b801561171d5780601f106116f25761010080835404028352916020019161171d565b820191906000526020600020905b81548152906001019060200180831161170057829003601f168201915b505050505080602001905181019061173591906148a0565b9050611743600060076128c5565b505b600360005414156117fa5760006002805461175f9061473e565b80601f016020809104026020016040519081016040528092919081815260200182805461178b9061473e565b80156117d85780601f106117ad576101008083540402835291602001916117d8565b820191906000526020600020905b8154815290600101906020018083116117bb57829003601f168201915b50505050508060200190518101906117f0919061495a565b60c0015192915050565b600660005414156118a5576000600280546118149061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546118409061473e565b801561188d5780601f106118625761010080835404028352916020019161188d565b820191906000526020600020905b81548152906001019060200180831161187057829003601f168201915b50505050508060200190518101906117f09190614a87565b610509600060076128c5565b6118c160066000541460206128c5565b81516118dc9015806118d557508251600154145b60216128c5565b6000808055600280546118ee9061473e565b80601f016020809104026020016040519081016040528092919081815260200182805461191a9061473e565b80156119675780601f1061193c57610100808354040283529160200191611967565b820191906000526020600020905b81548152906001019060200180831161194a57829003601f168201915b505050505080602001905181019061197f9190614a87565b9050611989613a90565b7f669ebcfdce7c382cf0aa9c383864dd37ed14852b33172c3c058763fe2cedf982846040516119b89190614d4b565b60405180910390a160006020850151515160028111156119da576119da6143c1565b141561204c576119ec341560196128c5565b6101a0820180516020908101515183515281518101518101518351820152815101516040908101518351901515910152518151611a2c9190600190613038565b8160200181905250611a4e611a4733846060015160006130ac565b601a6128c5565b60e0820151604082018051919091525160006020909101526001611a7133612bcc565b516001811115611a8357611a836143c1565b14611a92578060400151611aa0565b611a9b33612bcc565b604001515b606082015261022082015115611abc5760006080820152611ad8565b816101200151826102000151611ad29190614c4d565b60808201525b81608001518160800151611aec9190614c64565b826101e00151611afc9190614c83565b60a082018190526102408301511015611b1a57816102400151611b20565b8060a001515b60c082015261014082015115610100820181905215611b485760c081015160e0820152611b76565b8161014001518160600151602001518260c00151611b669190614c64565b611b709190614c9b565b60e08201525b60e08101516060820151515110611b94576000610120820152611bb1565b6060810151515160e0820151611baa9190614c4d565b6101208201525b8161026001518161012001511115611bce57816102600151611bd5565b8061012001515b61014082015261022082015115611bf3576000610160820152611c10565b816101200151826102000151611c099190614c4d565b6101608201525b8160a00151816101600151611c259190614c64565b826102800151611c359190614c83565b61018082018190526102a08301511015611c5457816102a00151611c5b565b8061018001515b6101a082015261010081015115611c7d576101a08101516101c0820152611cad565b816101400151816060015160200151826101a00151611c9c9190614c64565b611ca69190614c9b565b6101c08201525b6101c08101516060820151516020015110611ccf5760006101e0820152611cf0565b606081015151602001516101c0820151611ce99190614c4d565b6101e08201525b816102c00151816101e001511115611d0d57816102c00151611d14565b806101e001515b6102008201908152610140820180516102208401805191909152915191516020019190915251604051339180156108fc02916000818181858888f19350505050158015611d65573d6000803e3d6000fd5b5061020081015160208201515151611d7d9190614c4d565b610240820180519190915260208083018051518201518351909201919091525151604090810151915191151591810191909152820151610200820151611dc5919033906130c4565b61014081015160608201515151611ddc9190614c83565b6102608201515261020081015160608201515160200151611dfd9190614c83565b61026082018051602090810192909252516102808301805191909152606083015182015181518301523360009081526004835260409020805460ff19166001908117825591518051805193830193909355918301516002820155910151600390910155610140810151610240830151611e769190614c4d565b6102a0808301519190915261020082015190830151611e959190614c4d565b6102a0820180516020908101929092526102208301516102c084018051919091529051815190920191909152516040517f795e28f644a180ba86daa25407acab7c0ee4c308b5748c0d4a0782955c7990d391611ef091614509565b60405180910390a16102c08101516020840152610140810151610260830151611f199190614c4d565b6102e0820151526102008101516102c0830151611f369190614c4d565b6102e082015160200152611f48613dad565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08701518487018051919091526102a088015181518601526101808901518151909401939093526101408801518351909501949094528151439101526101608601519051909201919091528201516102408301516120159190600090613038565b602082015160c001526101408201516101c08401516120349190614c4d565b602082015160e00152612046816130dd565b506128bf565b6001602085015151516002811115612066576120666143c1565b141561242957602084015151604001516103008201526120883415601b6128c5565b610300810151516101a083015160200151516120a49190614c83565b61032082018051919091526101a08301805160209081015181015183518201529051015160409081015191519115159101526060820151610300820151516120f9916120f2913391906130ac565b601c6128c5565b610300810151516101408301516121109190614c83565b61034082015260e08201516103608201805191909152516000602090910152600161213a33612bcc565b51600181111561214c5761214c6143c1565b1461215c5780610360015161216a565b61216533612bcc565b604001515b6103808201819052610300820151516020909101516121899190614c83565b6103a0820152610340810151156103e08201819052156121b4576102608201516103c08201526121e2565b610340810151610300820151516102608401516121d19190614c64565b6121db9190614c9b565b6103c08201525b806103e00151156121fe576102c082015161040082015261222c565b610340810151610300820151516102c084015161221b9190614c64565b6122259190614c9b565b6104008201525b6103c081015161038082015151516122449190614c83565b6104208201515261040081015161038082015151602001516122669190614c83565b610420820180516020908101929092525161044083018051919091526103a083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516104608401805191909152610340840151815190930192909252905190517f721ef17fe714b7316a4147cdd750d3cafec44ab7273f009a23e2583cd46a65ec9161231891614461565b60405180910390a16104608101516040840152612333613dad565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08801518487018051919091526101008901518151909501949094526101808801518451909301929092526103408601518351909401939093528151439301929092526101608501519051909101526101a08301516103208301516124079190600190613038565b60208201805160c001919091526101c0840151905160e00152612046816130dd565b6002602085015151516002811115612443576124436143c1565b14156128bf57602084015151606001516104808201526124653415601d6128c5565b6101a082018051602090810151516104a08401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516124b09190600190613038565b816104c001819052506124d36124cc33846060015160006130ac565b601e6128c5565b60e08201516104e0820180519190915251600060209091015260016124f733612bcc565b516001811115612509576125096143c1565b1461251957806104e00151612527565b61252233612bcc565b604001515b61050082018190526020015161048082015151612547911015601f6128c5565b610480810151516104c082015160200151516125639190614c4d565b61052082018051919091526104c08201805160209081015181015183518201529051015160409081015191519115159101526060820151610480820151516125ad919033906130c4565b610480810151516101408301516125c49190614c4d565b61054082015261048081015151610500820151602001516125e59190614c4d565b610560820152610540810151156105a08201819052156126105761026082015161058082015261263e565b6105408101516104808201515161026084015161262d9190614c64565b6126379190614c9b565b6105808201525b61050081015151516105808201511061265e5760006105c082015261267d565b61058081015161050082015151516126769190614c4d565b6105c08201525b806105a0015115612699576102c08201516105e08201526126c7565b610540810151610480820151516102c08401516126b69190614c64565b6126c09190614c9b565b6105e08201525b61050081015151602001516105e0820151106126ea57600061060082015261270c565b6105e081015161050082015151602001516127059190614c4d565b6106008201525b6105c0810151610620820180519190915261060082015181516020908101919091529051610640830180519190915261056083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516106608401805191909152610540840151815190930192909252905190517e68efdb71d0f6fec3d1da0e070364f208fde852f3dd56891fed3f18da27c7d8916127d091614461565b60405180910390a161066081015160608401526127eb613dad565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08801518487018051919091526101008901518151909501949094526101808801518451909301929092526105408601518351909401939093528151439301929092526101608501519051909101526104c08201516105208301516124079190600190613038565b50505050565b816102e65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6128fb60016000541460126128c5565b815161291690158061290f57508251600154145b60136128c5565b6000808055600280546129289061473e565b80601f01602080910402602001604051908101604052809291908181526020018280546129549061473e565b80156129a15780601f10612976576101008083540402835291602001916129a1565b820191906000526020600020905b81548152906001019060200180831161298457829003601f168201915b50505050508060200190518101906129b991906148a0565b90506129c3613dcd565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1612a148261010001513414600f6128c5565b61014082015160a08301515151612a2b9190614c83565b81515260a082018051516020908101518351909101525151604090810151825190151590820152820151610140830151612a7291612a6b913391906130ac565b60106128c5565b8151612a8a906001600160a01b0316331460116128c5565b60028260800151612a9b9190614c83565b602080830191909152604082018051600090819052905182015261010083015160608301805191909152610140840151905190910152612ad9613dad565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451931692019190915260e0840151825160800152610120840151825160a0015260c084015190830151612b3d9190614c83565b815160c0015260408083018051835160e00152516020808401805192909252606080860151835183015290850151825190930192909252805160009201829052805143608091820152850151905160a0908101919091528401518351612ba39290613038565b60208201805160c00191909152610100840151905160e00152612bc5816130dd565b5050505050565b612bd46138f9565b60016001600160a01b03831660009081526004602052604090205460ff166001811115612c0357612c036143c1565b1415612ca2576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115612c4457612c446143c1565b6001811115612c5557612c556143c1565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b60008082526020820152919050565b612cc160036000541460176128c5565b8151612cdc901580612cd557508251600154145b60186128c5565b600080805560028054612cee9061473e565b80601f0160208091040260200160405190810160405280929190818152602001828054612d1a9061473e565b8015612d675780601f10612d3c57610100808354040283529160200191612d67565b820191906000526020600020905b815481529060010190602001808311612d4a57829003601f168201915b5050505050806020019051810190612d7f919061495a565b9050612dcb6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b7f6aaed0856b0c8f841cffcf9b31e427e232358731a01886d87bb61ef30c84d3a984604051612dfa9190614db3565b60405180910390a16000602085015151516001811115612e1c57612e1c6143c1565b1415612f3d57612e2e341560146128c5565b604051600081527f8ce4af3c9d23b60acac0c1d7590fcb8e226ef9f8cd629184cf4b643f886a1bbe9060200160405180910390a1600080845282516101808401516040516001600160a01b039092169281156108fc029290818181858888f19350505050158015612ea3573d6000803e3d6000fd5b506101608201515151612eb69080614c4d565b815152610160820180515160209081015183519091015280515160409081015183519015159082015283015183519151612ef9929060005b6020020151516130c4565b612f2282606001518360000151612f1b85610160015160008660000151613038565b6001612eee565b60008080556001819055612f3890600290613e1b565b6128bf565b6001602085015151516001811115612f5757612f576143c1565b14156128bf57612f69341560156128c5565b8151612f81906001600160a01b0316331460166128c5565b81516101808301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612fbf573d6000803e3d6000fd5b506101608201515151612fd29080614c4d565b60208281018051929092526101608401805151820151835190920191909152805151604090810151925192151592810192909252908301518351915161301a92906000612eee565b612f2282606001518360000151612f1b856101600151600086602001515b613040613e58565b60005b600281101561308c5784816002811061305e5761305e614d9d565b602002015182826002811061307557613075614d9d565b60200201528061308481614df4565b915050613043565b50818184600281106130a0576130a0614d9d565b60200201529392505050565b60006130ba83853085613659565b90505b9392505050565b6130cf838383613733565b6130d857600080fd5b505050565b6130e5613ea3565b602082015160600151156130fa57600161310c565b815160c00151602083015160a0015111155b156133e457602082015160a00151825160c00151111561313457816020015160a0015161313b565b815160c001515b8082526020830151604090810151919091108015918301919091526131665760006020820152613181565b602082015160400151815161317b9190614c4d565b60208201525b81516080015160208201516131969190614c64565b602083015151516131a79190614c83565b6060820181905260208084015101515110156131cb576020808301510151516131d1565b80606001515b60808201526040810151156131ec57600060a0820152613207565b60208201516040015181516132019190614c4d565b60a08201525b816000015160a001518160a0015161321f9190614c64565b6020808401515101516132329190614c83565b60c082018190526020808401518101510151101561325c5781602001516020015160200151613262565b8060c001515b60e08201908152608082015161010083018051919091529051905160200152613289613f46565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015181860152865160a09081015181870152875160c09081015181880152885160e09081015181890152858a018051870151610100808b019190915281518701516101208b01528151909801516101408a015280518501516101608a01528051909301516101808901528251909101516101a088015281518101516101c0880152815151516101e0880152875161020088015287840151151561022088015281518501515161024088015291870151610260870152805151840151610280870152518301518301516102a08601528501516102c0850152918401516102e084015260066000554360015590516133c091839101614e4d565b604051602081830303815290604052600290805190602001906128bf92919061406f565b602082015160a00151825160c00151111561340757816020015160a0015161340e565b815160c001515b6101208201819052602083015160400151108015610160830152613439576000610140820152613459565b8160200151604001518161012001516134529190614c4d565b6101408201525b81516080015161014082015161346f9190614c64565b602083015151516134809190614c83565b610180820181905260208084015101515110156134a5576020808301510151516134ac565b8061018001515b6101a0820152610160810151156134ca5760006101c08201526134ea565b8160200151604001518161012001516134e39190614c4d565b6101c08201525b815160a001516101c08201516135009190614c64565b6020808401515101516135139190614c83565b6101e082018190526020808401518101510151101561353e5781602001516020015160200151613545565b806101e001515b6102008201526135536140f3565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c09081015181860152865160e090810151818701528388018051850151610100880152805184015161012088015280519095015161014087015284519091015161016086015283510151610180850152825151516101a0808601919091528351830151516101c08601528501516101e08501528251518201516102008086019190915292518201518201516102208501529184015161024084015260036000554360015590516133c091839101614fda565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916136c091615116565b60006040518083038185875af1925050503d80600081146136fd576040519150601f19603f3d011682016040523d82523d6000602084013e613702565b606091505b509150915061371382826001613804565b50808060200190518101906137289190615132565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161379291615116565b60006040518083038185875af1925050503d80600081146137cf576040519150601f19603f3d011682016040523d82523d6000602084013e6137d4565b606091505b50915091506137e582826002613804565b50808060200190518101906137fa9190615132565b9695505050505050565b606083156138135750816130bd565b8251156138235782518084602001fd5b60405163100960cb60e01b8152600481018390526024016128e2565b604051806080016040528060001515815260200161385b613a6e565b815260200161387d604051806040016040528060008152602001600081525090565b815260200161389f604051806040016040528060008152602001600081525090565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016138ec604051806040016040528060008152602001600081525090565b8152602001600081525090565b604080516060810182526000808252602082015290810161389f6141e2565b60405180610200016040528061392c6141e2565b81526020016139396141e2565b8152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161389f604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161389f60408051608081018252600060208201818152928201819052606082015290815290565b60405180604001604052806000815260200161389f614204565b604080516080810182526000808252602080830182905283518082018552828152838501528351908101909352825290606082015290565b60408051608081018252600091810182815260608201929092529081526020810161389f6141e2565b604080516080810182526000918101828152606082019290925290819061387d565b604080516106e08101909152600061068082018181526106a083018290526106c0830191909152815260208101613ac5613e58565b8152602001613ad26141e2565b8152602001613adf6141e2565b8152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613b5e604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613ba0604051806040016040528060008152602001600081525090565b8152602001613bad6141e2565b8152602001613bcf604051806040016040528060008152602001600081525090565b8152602001613bdc613a6e565b8152602001613bfe604051806040016040528060008152602001600081525090565b8152602001613c196040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001613c4d6141e2565b8152602001613c5a6141e2565b8152602001600081526020016000815260200160001515815260200160008152602001613c9a604051806040016040528060008152602001600081525090565b8152602001613ca76141e2565b8152602001613cc9604051806040016040528060008152602001600081525090565b8152602001613ce46040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613d11613e58565b8152602001613d1e6141e2565b8152602001613d2b6141e2565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001613da0604051806040016040528060008152602001600081525090565b815260200161387d6141e2565b6040518060400160405280613dc0614217565b815260200161389f614292565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152819081526020016000815260200161387d604051806040016040528060008152602001600081525090565b508054613e279061473e565b6000825580601f10613e37575050565b601f016020900490600052602060002090810190613e5591906142fe565b50565b60405180604001604052806002905b613e8d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613e675790505090565b60405180610220016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001613f06604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610300016040528060006001600160a01b03168152602001613f6a6138a4565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001613fc1604051806040016040528060008152602001600081525090565b8152602001613fe3604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200161400c613e58565b8152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200161389f604051806040016040528060008152602001600081525090565b82805461407b9061473e565b90600052602060002090601f01602090048101928261409d57600085556140e3565b82601f106140b657805160ff19168380011785556140e3565b828001600101855582156140e3579182015b828111156140e35782518255916020019190600101906140c8565b506140ef9291506142fe565b5090565b60405180610260016040528060006001600160a01b031681526020016141176138a4565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161416e604051806040016040528060008152602001600081525090565b8152602001614190604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016141ab613e58565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051608081018252600091810182815260608201929092529081906138ec565b604051806020016040528061389f613a0d565b60405180610100016040528060006001600160a01b0316815260200161423b6138a4565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161389f604051806040016040528060008152602001600081525090565b60408051610140810190915260006101008201818152610120830191909152819081526020016142d5604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016138ec613e58565b5b808211156140ef57600081556001016142ff565b600060a0828403121561432557600080fd5b50919050565b60018060a01b03808251168352806020830151166020840152506040810151614361604084018280518252602090810151910152565b506060015160809190910152565b60a0810161053d828461432b565b60006040828403121561432557600080fd5b6001600160a01b0381168114613e5557600080fd5b6000602082840312156143b657600080fd5b81356130bd8161438f565b634e487b7160e01b600052602160045260246000fd5b60028110613e5557613e556143c1565b815160a08201906143f7816143d7565b80835250602083015115156020830152604083015161442460408401825180518252602090810151910152565b602081015160808401525092915050565b6000806040838503121561444857600080fd5b82356144538161438f565b946020939093013593505050565b81518152602080830151908201526040810161053d565b60006020828403121561448a57600080fd5b5035919050565b60006080828403121561432557600080fd5b60005b838110156144be5781810151838201526020016144a6565b838111156128bf5750506000910152565b82815260406020820152600082518060408401526144f48160608501602087016144a3565b601f01601f1916919091016060019392505050565b8151805182526020908101519082015260808101602083810151805160408501529081015160608401525b5092915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156145745761457461453b565b60405290565b6040516020810167ffffffffffffffff811182821017156145745761457461453b565b6040516080810167ffffffffffffffff811182821017156145745761457461453b565b6040516060810167ffffffffffffffff811182821017156145745761457461453b565b604051610160810167ffffffffffffffff811182821017156145745761457461453b565b604051610260810167ffffffffffffffff811182821017156145745761457461453b565b604051610300810167ffffffffffffffff811182821017156145745761457461453b565b8015158114613e5557600080fd5b60006020828403121561466f57600080fd5b6040516020810181811067ffffffffffffffff821117156146925761469261453b565b6040529135825250919050565b600081830360a08112156146b257600080fd5b6146ba614551565b833581526080601f19830112156146d057600080fd5b6146d861457a565b91506146e261459d565b6020850135600381106146f457600080fd5b815260408501356147048161464f565b6020820152614716866060870161465d565b6040820152614728866080870161465d565b6060820152825260208101919091529392505050565b600181811c9082168061475257607f821691505b6020821081141561432557634e487b7160e01b600052602260045260246000fd5b80516112ce8161438f565b60006040828403121561479057600080fd5b614798614551565b9050815181526020820151602082015292915050565b600060a082840312156147c057600080fd5b6147c861459d565b905081516147d58161438f565b815260208201516147e58161438f565b60208201526147f7836040840161477e565b60408201526080820151606082015292915050565b80516112ce8161464f565b600082601f83011261482857600080fd5b614830614551565b8060c084018581111561484257600080fd5b845b81811015614895576060818803121561485d5760008081fd5b6148656145c0565b81518152602080830151818301526040808401516148828161464f565b9083015290855290930192606001614844565b509095945050505050565b600061028082840312156148b357600080fd5b6148bb6145e3565b6148c483614773565b81526148d384602085016147ae565b60208201526148e460c08401614773565b60408201526148f560e08401614773565b606082015261010080840151608083015261012061491586828701614817565b60a08401526101e085015160c084015261020085015160e084015261022085015191830191909152610240840151908201526102609092015161014083015250919050565b60006103c0828403121561496d57600080fd5b614975614607565b61497e83614773565b815261498d84602085016147ae565b602082015261499e60c08401614773565b60408201526149af60e08401614773565b60608201526101008084015160808301526101208085015160a08401526101408086015160c08501526101606149e78882890161477e565b60e08601526101a06149fb89828a0161477e565b858701526101e094508488015184870152610200935083880151838701526102209250614a2a89848a01614817565b918601919091526102e0870151610180860152610300870151908501526103208601516101c08501526103408601519284019290925261036085015190830152610380840151908201526103a09092015161024083015250919050565b60006104808284031215614a9a57600080fd5b614aa261462b565b614aab83614773565b8152614aba84602085016147ae565b6020820152614acb60c08401614773565b6040820152614adc60e08401614773565b60608201526101008084015160808301526101208085015160a08401526101408086015160c0850152610160614b148882890161477e565b60e08601526101a0614b2889828a0161477e565b858701526101e0945084880151848701526102009350838801518387015261022092508288015182870152610240915081880151610180870152610260614b718a828b01614817565b828801526103208901516101c08801526103408901518688015261036089015185880152614ba26103808a0161480c565b848801526103a0890151838801526103c0890151818801525050505050506103e08301516102808201526104008301516102a08201526104208301516102c0820152614bf284610440850161477e565b6102e08201529392505050565b600060408284031215614c1157600080fd5b614c19614551565b823581526020830135614c2b8161464f565b60208201529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015614c5f57614c5f614c37565b500390565b6000816000190483118215151615614c7e57614c7e614c37565b500290565b60008219821115614c9657614c96614c37565b500190565b600082614cb857634e487b7160e01b600052601260045260246000fd5b500490565b60008183036080811215614cd057600080fd5b614cd8614551565b833581526060601f1983011215614cee57600080fd5b614cf661457a565b9150614d006145c0565b602085013560028110614d1257600080fd5b81526040850135614d228161464f565b60208201526060850135614d358161464f565b6040820152825260208101919091529392505050565b81518152602082015151805160a08301919060038110614d6d57614d6d6143c1565b80602085015250602081015115156040840152604081015151606084015260608101515160808401525092915050565b634e487b7160e01b600052603260045260246000fd5b815181526020820151518051608083019190614dce816143d7565b806020850152506020810151151560408401526040810151151560608401525092915050565b6000600019821415614e0857614e08614c37565b5060010190565b8060005b60028110156128bf578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614e13565b81516001600160a01b0316815261048081016020830151614e71602084018261432b565b5060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120828186015260c08601519250610140838187015260e08701519350610160614ee78188018680518252602090810151910152565b9287015193506101a092614f078785018680518252602090810151910152565b918701516101e087810191909152908701516102008088019190915291870151610220808801919091526101808801516102408089019190915293880151945061026093919291614f5a85890187614e0f565b6101c0890151610320890152928801516103408801529087015161036087015286015115156103808601528501516103a08501528401516103c0840152506102808301516103e08301526102a08301516104008301526102c08301516104208301526102e083015180516104408401526020810151610460840152614534565b81516001600160a01b031681526103c081016020830151614ffe602084018261432b565b5060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120828186015260c08601519250610140838187015260e087015193506101606150748188018680518252602090810151910152565b9287015193506101a0926150948785018680518252602090810151910152565b918701516101e0878101919091529087015161020080880191909152918701519350906102206150c681880186614e0f565b6101808801516102e0880152928701516103008701526101c08701516103208701529086015161034086015285015161036085015284015161038084015250610240909201516103a09091015290565b600082516151288184602087016144a3565b9190910192915050565b60006020828403121561514457600080fd5b81516130bd8161464f56fea26469706673582212200e7bc66bb23ba1c9c9aa0a734a803ac8c36bf8371660c2a0a3ef470327ad5ca264736f6c634300080c0033`,
  BytecodeLen: 23316,
  Which: `oD`,
  version: 6,
  views: {
    end: `end`,
    opts: `opts`,
    remainingRewards: `remainingRewards`,
    rewardsAvailableAt: `rewardsAvailableAt`,
    staked: `staked`,
    totalStaked: `totalStaked`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './staker.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:246:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './staker.rsh:258:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './staker.rsh:258:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './staker.rsh:120:19:after expr stmt semicolon',
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
