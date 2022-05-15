// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Struct([['userReceived', ctc3], ['totalRemaining', ctc3]]);
  return {
    Eject: [ctc0, ctc1, ctc2, ctc4, ctc0],
    Harvest: [ctc0, ctc4, ctc0],
    Stake: [ctc0, ctc1, ctc2],
    Withdraw: [ctc0, ctc1, ctc2, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc3], ['startDelay', ctc2], ['duration', ctc2], ['graceDuration', ctc2]]);
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
            const [v2473, v2474, v2475, v2476, v2477, v2493, v2496, v2497, v2498, v2499, v2500, v2501, v2502] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = svs;
            return (await ((async () => {
              
              const v2708 = {
                end: v2521,
                opts: v2474,
                remainingRewards: v2542,
                totalStaked: v2544
                };
              
              return v2708;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      rewardsAvailable: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2473, v2474, v2475, v2476, v2477, v2493, v2496, v2497, v2498, v2499, v2500, v2501, v2502] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = svs;
            return (await ((async (_v2784 ) => {
                const v2784 = stdlib.protect(ctc0, _v2784, null);
              
              const v2785 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2784), null);
              const v2787 = {
                rewards: v2538,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v2788 = stdlib.fromSome(v2785, v2787);
              const v2789 = v2788.stake;
              const v2794 = v2788.rewards;
              const v2795 = v2794[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
              let v2800;
              if (v2683) {
                v2800 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2802 = stdlib.sub(v2681, v2543);
                v2800 = v2802;
                }
              const v2804 = stdlib.mul(v2800, v2499);
              const v2805 = stdlib.add(v2679, v2804);
              const v2807 = stdlib.le(v2805, v2688);
              const v2808 = v2807 ? v2805 : v2688;
              let v2811;
              const v2812 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
              if (v2812) {
                v2811 = v2808;
                }
              else {
                const v2813 = stdlib.muldiv(v2808, v2789, v2544);
                v2811 = v2813;
                }
              let v2814;
              const v2815 = stdlib.ge(v2795, v2811);
              if (v2815) {
                v2814 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2816 = stdlib.sub(v2811, v2795);
                v2814 = v2816;
                }
              const v2817 = stdlib.le(v2814, v2690);
              const v2818 = v2817 ? v2814 : v2690;
              const v2830 = v2794[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
              let v2835;
              if (v2683) {
                v2835 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2837 = stdlib.sub(v2681, v2543);
                v2835 = v2837;
                }
              const v2839 = stdlib.mul(v2835, v2501);
              const v2840 = stdlib.add(v2693, v2839);
              const v2842 = stdlib.le(v2840, v2702);
              const v2843 = v2842 ? v2840 : v2702;
              let v2846;
              if (v2812) {
                v2846 = v2843;
                }
              else {
                const v2848 = stdlib.muldiv(v2843, v2789, v2544);
                v2846 = v2848;
                }
              let v2849;
              const v2850 = stdlib.ge(v2830, v2846);
              if (v2850) {
                v2849 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2851 = stdlib.sub(v2846, v2830);
                v2849 = v2851;
                }
              const v2852 = stdlib.le(v2849, v2704);
              const v2853 = v2852 ? v2849 : v2704;
              const v2855 = [v2818, v2853];
              
              return v2855;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2473, v2474, v2475, v2476, v2477, v2493, v2496, v2497, v2498, v2499, v2500, v2501, v2502] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = svs;
            return (await ((async (_v2710, _v2711 ) => {
                const v2710 = stdlib.protect(ctc0, _v2710, null);
                const v2711 = stdlib.protect(ctc2, _v2711, null);
              
              const v2712 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2710), null);
              const v2714 = {
                rewards: v2538,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v2715 = stdlib.fromSome(v2712, v2714);
              const v2716 = v2715.stake;
              const v2721 = v2715.rewards;
              const v2722 = v2721[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
              const v2725 = stdlib.le(v2521, v2711);
              const v2726 = v2725 ? v2521 : v2711;
              let v2727;
              const v2728 = stdlib.ge(v2543, v2726);
              if (v2728) {
                v2727 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2729 = stdlib.sub(v2726, v2543);
                v2727 = v2729;
                }
              const v2731 = stdlib.mul(v2727, v2499);
              const v2732 = stdlib.add(v2679, v2731);
              const v2734 = stdlib.le(v2732, v2688);
              const v2735 = v2734 ? v2732 : v2688;
              let v2738;
              const v2739 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
              if (v2739) {
                v2738 = v2735;
                }
              else {
                const v2740 = stdlib.muldiv(v2735, v2716, v2544);
                v2738 = v2740;
                }
              let v2741;
              const v2742 = stdlib.ge(v2722, v2738);
              if (v2742) {
                v2741 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2743 = stdlib.sub(v2738, v2722);
                v2741 = v2743;
                }
              const v2744 = stdlib.le(v2741, v2690);
              const v2745 = v2744 ? v2741 : v2690;
              const v2757 = v2721[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
              let v2762;
              if (v2728) {
                v2762 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2764 = stdlib.sub(v2726, v2543);
                v2762 = v2764;
                }
              const v2766 = stdlib.mul(v2762, v2501);
              const v2767 = stdlib.add(v2693, v2766);
              const v2769 = stdlib.le(v2767, v2702);
              const v2770 = v2769 ? v2767 : v2702;
              let v2773;
              if (v2739) {
                v2773 = v2770;
                }
              else {
                const v2775 = stdlib.muldiv(v2770, v2716, v2544);
                v2773 = v2775;
                }
              let v2776;
              const v2777 = stdlib.ge(v2757, v2773);
              if (v2777) {
                v2776 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v2778 = stdlib.sub(v2773, v2757);
                v2776 = v2778;
                }
              const v2779 = stdlib.le(v2776, v2704);
              const v2780 = v2779 ? v2776 : v2704;
              const v2782 = [v2745, v2780];
              
              return v2782;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2473, v2474, v2475, v2476, v2477, v2493, v2496, v2497, v2498, v2499, v2500, v2501, v2502] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = svs;
            return (await ((async (_v2523 ) => {
                const v2523 = stdlib.protect(ctc0, _v2523, null);
              
              const v2524 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2523), null);
              const v2525 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v2526 = {
                rewards: v2525,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v2527 = stdlib.fromSome(v2524, v2526);
              const v2528 = v2527.stake;
              
              return v2528;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      4: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc5, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]
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
export async function _Any_eject4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_eject4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_eject4 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_894: ctc11,
    Any_halt0_894: ctc12,
    Any_nop0_894: ctc12,
    Staker_harvest0_894: ctc12,
    Staker_stake0_894: ctc13,
    Staker_withdraw0_894: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v2909 = ctc.selfAddress();
  const v2911 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:279:32:application call to [unknown function] (defined at: ./staker.rsh:279:32:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_eject0_894" (defined at: ./staker.rsh:279:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Any_eject'
    });
  const v2912 = v2911[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2913 = v2911[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2916 = stdlib.addressEq(v2909, v2912);
  const v2917 = stdlib.ge(v2546, v2521);
  const v2918 = stdlib.addressEq(v2912, v2913);
  const v2919 = v2917 ? v2918 : false;
  const v2920 = v2916 ? true : v2919;
  const v2921 = stdlib.gt(v2498, stdlib.checkedBigNumberify('./staker.rsh:287:29:decimal', stdlib.UInt_max, '0'));
  const v2922 = stdlib.ge(v2546, v2522);
  const v2923 = v2921 ? v2922 : false;
  const v2924 = stdlib.addressEq(v2909, v2473);
  const v2925 = v2923 ? v2924 : false;
  const v2926 = v2920 ? true : v2925;
  stdlib.assert(v2926, {
    at: './staker.rsh:280:12:application',
    fs: ['at ./staker.rsh:279:32:application call to [unknown function] (defined at: ./staker.rsh:279:32:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_eject0_894" (defined at: ./staker.rsh:279:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'can only eject under certain conditions',
    who: 'Any_eject'
    });
  const v2934 = ['Any_eject0_894', v2911];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707, v2934],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:290:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:290:21:decimal', stdlib.UInt_max, '0'), v2476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
      
      switch (v3053[0]) {
        case 'Any_eject0_894': {
          const v3056 = v3053[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_eject"
            });
          const v3061 = v3056[stdlib.checkedBigNumberify('./staker.rsh:279:10:spread', stdlib.UInt_max, '0')];
          const v3062 = v3056[stdlib.checkedBigNumberify('./staker.rsh:279:10:spread', stdlib.UInt_max, '1')];
          ;
          const v3148 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v3149 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
          const v3153 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v3154 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
          const v3155 = [v3149, v3153, v3154];
          const v3156 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v3155);
          ;
          const v3173 = null;
          const v3174 = await txn1.getOutput('Any_eject', 'v3173', ctc0, v3173);
          
          const v3181 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3061), null);
          const v3183 = {
            rewards: v2538,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v3184 = stdlib.fromSome(v3181, v3183);
          const v3185 = v3184.stake;
          const v3190 = v3184.rewards;
          const v3191 = v3190[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
          let v3196;
          if (v2683) {
            v3196 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v3198 = stdlib.sub(v2681, v2543);
            v3196 = v3198;
            }
          const v3200 = stdlib.mul(v3196, v2499);
          const v3201 = stdlib.add(v2679, v3200);
          const v3203 = stdlib.le(v3201, v2688);
          const v3204 = v3203 ? v3201 : v2688;
          let v3207;
          const v3208 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
          if (v3208) {
            v3207 = v3204;
            }
          else {
            const v3209 = stdlib.muldiv(v3204, v3185, v2544);
            v3207 = v3209;
            }
          let v3210;
          const v3211 = stdlib.ge(v3191, v3207);
          if (v3211) {
            v3210 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v3212 = stdlib.sub(v3207, v3191);
            v3210 = v3212;
            }
          const v3213 = stdlib.le(v3210, v2690);
          const v3214 = v3213 ? v3210 : v2690;
          const v3226 = v3190[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
          let v3231;
          if (v2683) {
            v3231 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v3233 = stdlib.sub(v2681, v2543);
            v3231 = v3233;
            }
          const v3235 = stdlib.mul(v3231, v2501);
          const v3236 = stdlib.add(v2693, v3235);
          const v3238 = stdlib.le(v3236, v2702);
          const v3239 = v3238 ? v3236 : v2702;
          let v3242;
          if (v3208) {
            v3242 = v3239;
            }
          else {
            const v3244 = stdlib.muldiv(v3239, v3185, v2544);
            v3242 = v3244;
            }
          let v3245;
          const v3246 = stdlib.ge(v3226, v3242);
          if (v3246) {
            v3245 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v3247 = stdlib.sub(v3242, v3226);
            v3245 = v3247;
            }
          const v3248 = stdlib.le(v3245, v2704);
          const v3249 = v3248 ? v3245 : v2704;
          const v3251 = [v3214, v3249];
          const v3260 = stdlib.sub(v2552, v3214);
          sim_r.txns.push({
            kind: 'from',
            to: v3062,
            tok: undefined /* Nothing */
            });
          const v3261 = v3156[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
          const v3262 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
          const v3266 = stdlib.sub(v3262, v3249);
          const v3269 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '1')];
          const v3270 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '2')];
          const v3271 = [v3266, v3269, v3270];
          const v3272 = stdlib.Array_set(v3156, stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0'), v3271);
          sim_r.txns.push({
            kind: 'from',
            to: v3062,
            tok: v2475
            });
          const v3274 = stdlib.sub(v2688, v3214);
          const v3276 = stdlib.sub(v2702, v3249);
          const v3289 = stdlib.add(v3191, v3214);
          const v3291 = stdlib.add(v3226, v3249);
          const v3292 = [v3289, v3291];
          const v3293 = {
            rewards: v3292,
            stake: v3185
            };
          await stdlib.simMapSet(sim_r, 0, v3061, v3293);
          const v3298 = [v3274, v3276];
          const v3299 = {
            totalRemaining: v3298,
            userReceived: v3251
            };
          const v3304 = v3293.stake;
          const v3310 = stdlib.sub(v2544, v3304);
          const v3311 = stdlib.sub(v3304, v3304);
          const v3316 = v3293.rewards;
          const v3320 = v3272[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
          const v3321 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '0')];
          const v3325 = stdlib.sub(v3321, v3304);
          const v3328 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
          const v3329 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '2')];
          const v3330 = [v3325, v3328, v3329];
          const v3331 = stdlib.Array_set(v3272, stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1'), v3330);
          sim_r.txns.push({
            kind: 'from',
            to: v3062,
            tok: v2476
            });
          const v3332 = v3316[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '0')];
          let v3333;
          const v3334 = stdlib.eq(v3310, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
          if (v3334) {
            v3333 = v2690;
            }
          else {
            const v3335 = stdlib.muldiv(v2690, v3304, v3310);
            v3333 = v3335;
            }
          let v3336;
          const v3337 = stdlib.ge(v3333, v3332);
          if (v3337) {
            v3336 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v3338 = stdlib.sub(v3332, v3333);
            v3336 = v3338;
            }
          const v3339 = v3316[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '1')];
          let v3340;
          if (v3334) {
            v3340 = v2704;
            }
          else {
            const v3342 = stdlib.muldiv(v2704, v3304, v3310);
            v3340 = v3342;
            }
          let v3343;
          const v3344 = stdlib.ge(v3340, v3339);
          if (v3344) {
            v3343 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v3345 = stdlib.sub(v3339, v3340);
            v3343 = v3345;
            }
          const v3346 = [v3336, v3343];
          const v3347 = {
            rewards: v3346,
            stake: v3311
            };
          await stdlib.simMapSet(sim_r, 0, v3061, v3347);
          const v3348 = {
            newEveryoneStaked: v3310,
            newUserStaked: v3311
            };
          null;
          const v3353 = stdlib.sub(v2690, v3214);
          const v3354 = stdlib.sub(v2704, v3249);
          const v14013 = v2540;
          const v14015 = v3298;
          const v14016 = v2546;
          const v14017 = v3310;
          const v14018 = v3054;
          const v14019 = v2545;
          const v14020 = v3331;
          const v14021 = v3260;
          const v14023 = v2540 ? v3334 : false;
          if (v14023) {
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: undefined /* Nothing */
              });
            const v14064 = v3331[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            const v14065 = v14064[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: v2475
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2476
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2475
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v14025 = v3353;
            const v14026 = stdlib.le(v2521, v2545);
            const v14027 = v14026 ? v2521 : v2545;
            let v14028;
            const v14029 = stdlib.ge(v2546, v14027);
            if (v14029) {
              v14028 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14030 = stdlib.sub(v14027, v2546);
              v14028 = v14030;
              }
            const v14031 = stdlib.mul(v14028, v2499);
            const v14032 = stdlib.add(v3353, v14031);
            const v14033 = v3274;
            const v14034 = stdlib.le(v14032, v3274);
            const v14035 = v14034 ? v14032 : v3274;
            const v14036 = v3354;
            let v14037;
            if (v14029) {
              v14037 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14038 = stdlib.sub(v14027, v2546);
              v14037 = v14038;
              }
            const v14039 = stdlib.mul(v14037, v2501);
            const v14040 = stdlib.add(v3354, v14039);
            const v14041 = v3276;
            const v14042 = stdlib.le(v14040, v3276);
            const v14043 = v14042 ? v14040 : v3276;
            const v14044 = [v14035, v14043];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Any_halt0_894': {
          const v3637 = v3053[1];
          
          break;
          }
        case 'Any_nop0_894': {
          const v4218 = v3053[1];
          
          break;
          }
        case 'Staker_harvest0_894': {
          const v4799 = v3053[1];
          
          break;
          }
        case 'Staker_stake0_894': {
          const v5380 = v3053[1];
          
          break;
          }
        case 'Staker_withdraw0_894': {
          const v5961 = v3053[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
  switch (v3053[0]) {
    case 'Any_eject0_894': {
      const v3056 = v3053[1];
      undefined /* setApiDetails */;
      const v3061 = v3056[stdlib.checkedBigNumberify('./staker.rsh:279:10:spread', stdlib.UInt_max, '0')];
      const v3062 = v3056[stdlib.checkedBigNumberify('./staker.rsh:279:10:spread', stdlib.UInt_max, '1')];
      const v3063 = stdlib.addressEq(v3052, v3061);
      const v3064 = stdlib.ge(v2546, v2521);
      const v3065 = stdlib.addressEq(v3061, v3062);
      const v3066 = v3064 ? v3065 : false;
      const v3067 = v3063 ? true : v3066;
      const v3068 = stdlib.gt(v2498, stdlib.checkedBigNumberify('./staker.rsh:287:29:decimal', stdlib.UInt_max, '0'));
      const v3069 = stdlib.ge(v2546, v2522);
      const v3070 = v3068 ? v3069 : false;
      const v3071 = stdlib.addressEq(v3052, v2473);
      const v3072 = v3070 ? v3071 : false;
      const v3073 = v3067 ? true : v3072;
      stdlib.assert(v3073, {
        at: './staker.rsh:280:12:application',
        fs: ['at ./staker.rsh:279:32:application call to [unknown function] (defined at: ./staker.rsh:279:32:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:279:32:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
        msg: 'can only eject under certain conditions',
        who: 'Any_eject'
        });
      ;
      const v3148 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v3149 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
      const v3153 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v3154 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
      const v3155 = [v3149, v3153, v3154];
      const v3156 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v3155);
      ;
      const v3173 = null;
      const v3174 = await txn1.getOutput('Any_eject', 'v3173', ctc0, v3173);
      if (v1359) {
        stdlib.protect(ctc0, await interact.out(v3056, v3174), {
          at: './staker.rsh:279:11:application',
          fs: ['at ./staker.rsh:279:11:application call to [unknown function] (defined at: ./staker.rsh:279:11:function exp)', 'at ./staker.rsh:291:10:application call to "k" (defined at: ./staker.rsh:290:42:function exp)', 'at ./staker.rsh:290:42:application call to [unknown function] (defined at: ./staker.rsh:290:42:function exp)'],
          msg: 'out',
          who: 'Any_eject'
          });
        }
      else {
        }
      
      const v3181 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3061), null);
      const v3183 = {
        rewards: v2538,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3184 = stdlib.fromSome(v3181, v3183);
      const v3185 = v3184.stake;
      const v3190 = v3184.rewards;
      const v3191 = v3190[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
      let v3196;
      if (v2683) {
        v3196 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v3198 = stdlib.sub(v2681, v2543);
        v3196 = v3198;
        }
      const v3200 = stdlib.mul(v3196, v2499);
      const v3201 = stdlib.add(v2679, v3200);
      const v3203 = stdlib.le(v3201, v2688);
      const v3204 = v3203 ? v3201 : v2688;
      let v3207;
      const v3208 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
      if (v3208) {
        v3207 = v3204;
        }
      else {
        const v3209 = stdlib.muldiv(v3204, v3185, v2544);
        v3207 = v3209;
        }
      let v3210;
      const v3211 = stdlib.ge(v3191, v3207);
      if (v3211) {
        v3210 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v3212 = stdlib.sub(v3207, v3191);
        v3210 = v3212;
        }
      const v3213 = stdlib.le(v3210, v2690);
      const v3214 = v3213 ? v3210 : v2690;
      const v3226 = v3190[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
      let v3231;
      if (v2683) {
        v3231 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v3233 = stdlib.sub(v2681, v2543);
        v3231 = v3233;
        }
      const v3235 = stdlib.mul(v3231, v2501);
      const v3236 = stdlib.add(v2693, v3235);
      const v3238 = stdlib.le(v3236, v2702);
      const v3239 = v3238 ? v3236 : v2702;
      let v3242;
      if (v3208) {
        v3242 = v3239;
        }
      else {
        const v3244 = stdlib.muldiv(v3239, v3185, v2544);
        v3242 = v3244;
        }
      let v3245;
      const v3246 = stdlib.ge(v3226, v3242);
      if (v3246) {
        v3245 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v3247 = stdlib.sub(v3242, v3226);
        v3245 = v3247;
        }
      const v3248 = stdlib.le(v3245, v2704);
      const v3249 = v3248 ? v3245 : v2704;
      const v3251 = [v3214, v3249];
      const v3260 = stdlib.sub(v2552, v3214);
      ;
      const v3261 = v3156[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
      const v3262 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
      const v3266 = stdlib.sub(v3262, v3249);
      const v3269 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '1')];
      const v3270 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '2')];
      const v3271 = [v3266, v3269, v3270];
      const v3272 = stdlib.Array_set(v3156, stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0'), v3271);
      ;
      const v3274 = stdlib.sub(v2688, v3214);
      const v3276 = stdlib.sub(v2702, v3249);
      const v3289 = stdlib.add(v3191, v3214);
      const v3291 = stdlib.add(v3226, v3249);
      const v3292 = [v3289, v3291];
      const v3293 = {
        rewards: v3292,
        stake: v3185
        };
      await stdlib.mapSet(map0, v3061, v3293);
      const v3298 = [v3274, v3276];
      const v3299 = {
        totalRemaining: v3298,
        userReceived: v3251
        };
      const v3304 = v3293.stake;
      const v3310 = stdlib.sub(v2544, v3304);
      const v3311 = stdlib.sub(v3304, v3304);
      const v3316 = v3293.rewards;
      const v3320 = v3272[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
      const v3321 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '0')];
      const v3325 = stdlib.sub(v3321, v3304);
      const v3328 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
      const v3329 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '2')];
      const v3330 = [v3325, v3328, v3329];
      const v3331 = stdlib.Array_set(v3272, stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1'), v3330);
      ;
      const v3332 = v3316[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '0')];
      let v3333;
      const v3334 = stdlib.eq(v3310, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
      if (v3334) {
        v3333 = v2690;
        }
      else {
        const v3335 = stdlib.muldiv(v2690, v3304, v3310);
        v3333 = v3335;
        }
      let v3336;
      const v3337 = stdlib.ge(v3333, v3332);
      if (v3337) {
        v3336 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v3338 = stdlib.sub(v3332, v3333);
        v3336 = v3338;
        }
      const v3339 = v3316[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '1')];
      let v3340;
      if (v3334) {
        v3340 = v2704;
        }
      else {
        const v3342 = stdlib.muldiv(v2704, v3304, v3310);
        v3340 = v3342;
        }
      let v3343;
      const v3344 = stdlib.ge(v3340, v3339);
      if (v3344) {
        v3343 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v3345 = stdlib.sub(v3339, v3340);
        v3343 = v3345;
        }
      const v3346 = [v3336, v3343];
      const v3347 = {
        rewards: v3346,
        stake: v3311
        };
      await stdlib.mapSet(map0, v3061, v3347);
      const v3348 = {
        newEveryoneStaked: v3310,
        newUserStaked: v3311
        };
      null;
      const v3353 = stdlib.sub(v2690, v3214);
      const v3354 = stdlib.sub(v2704, v3249);
      const v14013 = v2540;
      const v14015 = v3298;
      const v14016 = v2546;
      const v14017 = v3310;
      const v14018 = v3054;
      const v14019 = v2545;
      const v14020 = v3331;
      const v14021 = v3260;
      const v14023 = v2540 ? v3334 : false;
      if (v14023) {
        ;
        const v14064 = v3331[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        const v14065 = v14064[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        const v14025 = v3353;
        const v14026 = stdlib.le(v2521, v2545);
        const v14027 = v14026 ? v2521 : v2545;
        let v14028;
        const v14029 = stdlib.ge(v2546, v14027);
        if (v14029) {
          v14028 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14030 = stdlib.sub(v14027, v2546);
          v14028 = v14030;
          }
        const v14031 = stdlib.mul(v14028, v2499);
        const v14032 = stdlib.add(v3353, v14031);
        const v14033 = v3274;
        const v14034 = stdlib.le(v14032, v3274);
        const v14035 = v14034 ? v14032 : v3274;
        const v14036 = v3354;
        let v14037;
        if (v14029) {
          v14037 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14038 = stdlib.sub(v14027, v2546);
          v14037 = v14038;
          }
        const v14039 = stdlib.mul(v14037, v2501);
        const v14040 = stdlib.add(v3354, v14039);
        const v14041 = v3276;
        const v14042 = stdlib.le(v14040, v3276);
        const v14043 = v14042 ? v14040 : v3276;
        const v14044 = [v14035, v14043];
        return;
        }
      break;
      }
    case 'Any_halt0_894': {
      const v3637 = v3053[1];
      return;
      break;
      }
    case 'Any_nop0_894': {
      const v4218 = v3053[1];
      return;
      break;
      }
    case 'Staker_harvest0_894': {
      const v4799 = v3053[1];
      return;
      break;
      }
    case 'Staker_stake0_894': {
      const v5380 = v3053[1];
      return;
      break;
      }
    case 'Staker_withdraw0_894': {
      const v5961 = v3053[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_halt4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_halt4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_halt4 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_894: ctc12,
    Any_halt0_894: ctc11,
    Any_nop0_894: ctc11,
    Staker_harvest0_894: ctc11,
    Staker_stake0_894: ctc13,
    Staker_withdraw0_894: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v2944 = ctc.selfAddress();
  const v2946 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_halt0_894" (defined at: ./staker.rsh:308:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Any_halt'
    });
  const v2947 = stdlib.addressEq(v2944, v2473);
  stdlib.assert(v2947, {
    at: './staker.rsh:309:12:application',
    fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_halt0_894" (defined at: ./staker.rsh:308:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'only Deployer can halt',
    who: 'Any_halt'
    });
  const v2948 = stdlib.ge(v2546, v2521);
  stdlib.assert(v2948, {
    at: './staker.rsh:310:12:application',
    fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_halt0_894" (defined at: ./staker.rsh:308:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'can only halt after the end',
    who: 'Any_halt'
    });
  const v2949 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:311:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2949, {
    at: './staker.rsh:311:12:application',
    fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_halt0_894" (defined at: ./staker.rsh:308:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'can only halt when no stake is left',
    who: 'Any_halt'
    });
  const v2953 = ['Any_halt0_894', v2946];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707, v2953],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:312:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:312:21:decimal', stdlib.UInt_max, '0'), v2476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
      
      switch (v3053[0]) {
        case 'Any_eject0_894': {
          const v3056 = v3053[1];
          
          break;
          }
        case 'Any_halt0_894': {
          const v3637 = v3053[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_halt"
            });
          ;
          const v3729 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v3730 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
          const v3734 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v3735 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
          const v3736 = [v3730, v3734, v3735];
          const v3737 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v3736);
          ;
          const v3947 = null;
          const v3948 = await txn1.getOutput('Any_halt', 'v3947', ctc0, v3947);
          
          sim_r.txns.push({
            kind: 'from',
            to: v2473,
            tok: undefined /* Nothing */
            });
          const v14435 = v3737[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
          const v14436 = v14435[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v2473,
            tok: v2475
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v2476
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v2475
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Any_nop0_894': {
          const v4218 = v3053[1];
          
          break;
          }
        case 'Staker_harvest0_894': {
          const v4799 = v3053[1];
          
          break;
          }
        case 'Staker_stake0_894': {
          const v5380 = v3053[1];
          
          break;
          }
        case 'Staker_withdraw0_894': {
          const v5961 = v3053[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
  switch (v3053[0]) {
    case 'Any_eject0_894': {
      const v3056 = v3053[1];
      return;
      break;
      }
    case 'Any_halt0_894': {
      const v3637 = v3053[1];
      undefined /* setApiDetails */;
      const v3662 = stdlib.addressEq(v3052, v2473);
      stdlib.assert(v3662, {
        at: './staker.rsh:309:12:application',
        fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
        msg: 'only Deployer can halt',
        who: 'Any_halt'
        });
      const v3663 = stdlib.ge(v2546, v2521);
      stdlib.assert(v3663, {
        at: './staker.rsh:310:12:application',
        fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
        msg: 'can only halt after the end',
        who: 'Any_halt'
        });
      const v3664 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:311:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3664, {
        at: './staker.rsh:311:12:application',
        fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
        msg: 'can only halt when no stake is left',
        who: 'Any_halt'
        });
      ;
      const v3729 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v3730 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
      const v3734 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v3735 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
      const v3736 = [v3730, v3734, v3735];
      const v3737 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v3736);
      ;
      const v3947 = null;
      const v3948 = await txn1.getOutput('Any_halt', 'v3947', ctc0, v3947);
      if (v1359) {
        stdlib.protect(ctc0, await interact.out(v3637, v3948), {
          at: './staker.rsh:308:11:application',
          fs: ['at ./staker.rsh:308:11:application call to [unknown function] (defined at: ./staker.rsh:308:11:function exp)', 'at ./staker.rsh:313:10:application call to "k" (defined at: ./staker.rsh:312:42:function exp)', 'at ./staker.rsh:312:42:application call to [unknown function] (defined at: ./staker.rsh:312:42:function exp)'],
          msg: 'out',
          who: 'Any_halt'
          });
        }
      else {
        }
      
      ;
      const v14435 = v3737[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
      const v14436 = v14435[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Any_nop0_894': {
      const v4218 = v3053[1];
      return;
      break;
      }
    case 'Staker_harvest0_894': {
      const v4799 = v3053[1];
      return;
      break;
      }
    case 'Staker_stake0_894': {
      const v5380 = v3053[1];
      return;
      break;
      }
    case 'Staker_withdraw0_894': {
      const v5961 = v3053[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_nop4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_nop4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_nop4 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_894: ctc12,
    Any_halt0_894: ctc11,
    Any_nop0_894: ctc11,
    Staker_harvest0_894: ctc11,
    Staker_stake0_894: ctc13,
    Staker_withdraw0_894: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v2938 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:301:23:application call to [unknown function] (defined at: ./staker.rsh:301:23:function exp)', 'at ./staker.rsh:134:19:application call to "runAny_nop0_894" (defined at: ./staker.rsh:301:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Any_nop'
    });
  const v2942 = ['Any_nop0_894', v2938];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707, v2942],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:303:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:303:20:decimal', stdlib.UInt_max, '0'), v2476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
      
      switch (v3053[0]) {
        case 'Any_eject0_894': {
          const v3056 = v3053[1];
          
          break;
          }
        case 'Any_halt0_894': {
          const v3637 = v3053[1];
          
          break;
          }
        case 'Any_nop0_894': {
          const v4218 = v3053[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_nop"
            });
          ;
          const v4310 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v4311 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
          const v4315 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v4316 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
          const v4317 = [v4311, v4315, v4316];
          const v4318 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v4317);
          ;
          const v4538 = null;
          const v4539 = await txn1.getOutput('Any_nop', 'v4538', ctc0, v4538);
          
          const v14755 = v2540;
          const v14757 = v2542;
          const v14758 = v2546;
          const v14759 = v2544;
          const v14760 = v3054;
          const v14761 = v2545;
          const v14762 = v4318;
          const v14763 = v2552;
          const v14764 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:235:39:decimal', stdlib.UInt_max, '0'));
          const v14765 = v2540 ? v14764 : false;
          if (v14765) {
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: undefined /* Nothing */
              });
            const v14806 = v4318[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            const v14807 = v14806[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: v2475
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2476
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2475
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v14767 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
            const v14768 = stdlib.le(v2521, v2545);
            const v14769 = v14768 ? v2521 : v2545;
            let v14770;
            const v14771 = stdlib.ge(v2546, v14769);
            if (v14771) {
              v14770 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14772 = stdlib.sub(v14769, v2546);
              v14770 = v14772;
              }
            const v14773 = stdlib.mul(v14770, v2499);
            const v14774 = stdlib.add(v14767, v14773);
            const v14775 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
            const v14776 = stdlib.le(v14774, v14775);
            const v14777 = v14776 ? v14774 : v14775;
            const v14778 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
            let v14779;
            if (v14771) {
              v14779 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14780 = stdlib.sub(v14769, v2546);
              v14779 = v14780;
              }
            const v14781 = stdlib.mul(v14779, v2501);
            const v14782 = stdlib.add(v14778, v14781);
            const v14783 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
            const v14784 = stdlib.le(v14782, v14783);
            const v14785 = v14784 ? v14782 : v14783;
            const v14786 = [v14777, v14785];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_harvest0_894': {
          const v4799 = v3053[1];
          
          break;
          }
        case 'Staker_stake0_894': {
          const v5380 = v3053[1];
          
          break;
          }
        case 'Staker_withdraw0_894': {
          const v5961 = v3053[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
  switch (v3053[0]) {
    case 'Any_eject0_894': {
      const v3056 = v3053[1];
      return;
      break;
      }
    case 'Any_halt0_894': {
      const v3637 = v3053[1];
      return;
      break;
      }
    case 'Any_nop0_894': {
      const v4218 = v3053[1];
      undefined /* setApiDetails */;
      ;
      const v4310 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v4311 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
      const v4315 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v4316 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
      const v4317 = [v4311, v4315, v4316];
      const v4318 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v4317);
      ;
      const v4538 = null;
      const v4539 = await txn1.getOutput('Any_nop', 'v4538', ctc0, v4538);
      if (v1359) {
        stdlib.protect(ctc0, await interact.out(v4218, v4539), {
          at: './staker.rsh:301:11:application',
          fs: ['at ./staker.rsh:301:11:application call to [unknown function] (defined at: ./staker.rsh:301:11:function exp)', 'at ./staker.rsh:304:10:application call to "k" (defined at: ./staker.rsh:303:41:function exp)', 'at ./staker.rsh:303:41:application call to [unknown function] (defined at: ./staker.rsh:303:41:function exp)'],
          msg: 'out',
          who: 'Any_nop'
          });
        }
      else {
        }
      
      const v14755 = v2540;
      const v14757 = v2542;
      const v14758 = v2546;
      const v14759 = v2544;
      const v14760 = v3054;
      const v14761 = v2545;
      const v14762 = v4318;
      const v14763 = v2552;
      const v14764 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:235:39:decimal', stdlib.UInt_max, '0'));
      const v14765 = v2540 ? v14764 : false;
      if (v14765) {
        ;
        const v14806 = v4318[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        const v14807 = v14806[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        const v14767 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
        const v14768 = stdlib.le(v2521, v2545);
        const v14769 = v14768 ? v2521 : v2545;
        let v14770;
        const v14771 = stdlib.ge(v2546, v14769);
        if (v14771) {
          v14770 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14772 = stdlib.sub(v14769, v2546);
          v14770 = v14772;
          }
        const v14773 = stdlib.mul(v14770, v2499);
        const v14774 = stdlib.add(v14767, v14773);
        const v14775 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
        const v14776 = stdlib.le(v14774, v14775);
        const v14777 = v14776 ? v14774 : v14775;
        const v14778 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
        let v14779;
        if (v14771) {
          v14779 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14780 = stdlib.sub(v14769, v2546);
          v14779 = v14780;
          }
        const v14781 = stdlib.mul(v14779, v2501);
        const v14782 = stdlib.add(v14778, v14781);
        const v14783 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
        const v14784 = stdlib.le(v14782, v14783);
        const v14785 = v14784 ? v14782 : v14783;
        const v14786 = [v14777, v14785];
        return;
        }
      break;
      }
    case 'Staker_harvest0_894': {
      const v4799 = v3053[1];
      return;
      break;
      }
    case 'Staker_stake0_894': {
      const v5380 = v3053[1];
      return;
      break;
      }
    case 'Staker_withdraw0_894': {
      const v5961 = v3053[1];
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
  const ctc6 = stdlib.T_Struct([['rewardToken1', ctc5], ['stakeToken', ctc5], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Any_eject0_894: ctc8,
    Any_halt0_894: ctc9,
    Any_nop0_894: ctc9,
    Staker_harvest0_894: ctc9,
    Staker_stake0_894: ctc10,
    Staker_withdraw0_894: ctc10
    });
  const ctc12 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc13 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
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
  
  
  const v2453 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2454 = [v2453, v2453];
  const v2458 = stdlib.protect(ctc6, interact.opts, 'for Deployer\'s interact field opts');
  const v2459 = v2458.rewardToken1;
  const v2460 = v2458.stakeToken;
  
  const v2471 = stdlib.tokenEq(v2459, v2460);
  const v2472 = v2471 ? false : true;
  stdlib.assert(v2472, {
    at: './staker.rsh:86:10:application',
    fs: ['at ./staker.rsh:83:16:application call to [unknown function] (defined at: ./staker.rsh:83:20:function exp)'],
    msg: 'can only reward a different token than the one staked',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2458, v2459, v2460],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:88:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2474, v2475, v2476], secs: v2478, time: v2477, didSend: v44, from: v2473 } = txn1;
      
      const v2481 = v2454[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '0')];
      const v2483 = v2481[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1')];
      const v2484 = v2481[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '2')];
      const v2485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2483, v2484];
      const v2486 = stdlib.Array_set(v2454, stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '0'), v2485);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2475
        });
      const v2488 = v2486[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1')];
      const v2490 = v2488[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1')];
      const v2491 = v2488[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '2')];
      const v2492 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2490, v2491];
      const v2493 = stdlib.Array_set(v2486, stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1'), v2492);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2476
        });
      ;
      const v2495 = v2474.rewardsPerBlock;
      const v2496 = v2474.duration;
      const v2497 = v2474.startDelay;
      const v2498 = v2474.graceDuration;
      const v2499 = v2495[stdlib.checkedBigNumberify('./staker.rsh:93:20:array ref', stdlib.UInt_max, '0')];
      const v2500 = stdlib.mul(v2499, v2496);
      const v2501 = v2495[stdlib.checkedBigNumberify('./staker.rsh:94:20:array ref', stdlib.UInt_max, '1')];
      const v2502 = stdlib.mul(v2501, v2496);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v2474, v2475, v2476], secs: v2478, time: v2477, didSend: v44, from: v2473 } = txn1;
  const v2479 = stdlib.tokenEq(v2475, v2476);
  const v2480 = v2479 ? false : true;
  stdlib.assert(v2480, {
    at: './staker.rsh:88:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v2481 = v2454[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '0')];
  const v2483 = v2481[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1')];
  const v2484 = v2481[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '2')];
  const v2485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2483, v2484];
  const v2486 = stdlib.Array_set(v2454, stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '0'), v2485);
  ;
  const v2488 = v2486[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1')];
  const v2490 = v2488[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1')];
  const v2491 = v2488[stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '2')];
  const v2492 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2490, v2491];
  const v2493 = stdlib.Array_set(v2486, stdlib.checkedBigNumberify('./staker.rsh:88:12:dot', stdlib.UInt_max, '1'), v2492);
  ;
  ;
  const v2495 = v2474.rewardsPerBlock;
  const v2496 = v2474.duration;
  const v2497 = v2474.startDelay;
  const v2498 = v2474.graceDuration;
  const v2499 = v2495[stdlib.checkedBigNumberify('./staker.rsh:93:20:array ref', stdlib.UInt_max, '0')];
  const v2500 = stdlib.mul(v2499, v2496);
  const v2501 = v2495[stdlib.checkedBigNumberify('./staker.rsh:94:20:array ref', stdlib.UInt_max, '1')];
  const v2502 = stdlib.mul(v2501, v2496);
  const txn2 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2477, v2493, v2496, v2497, v2498, v2499, v2500, v2501, v2502],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2477,
    onlyIf: true,
    out_tys: [],
    pay: [v2500, [[v2502, v2475]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v2505, time: v2504, didSend: v61, from: v2503 } = txn2;
      
      sim_r.txns.push({
        amt: v2500,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2508 = v2493[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v2509 = v2508[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '0')];
      const v2510 = stdlib.add(v2509, v2502);
      const v2513 = v2508[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '1')];
      const v2514 = v2508[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '2')];
      const v2515 = [v2510, v2513, v2514];
      const v2516 = stdlib.Array_set(v2493, stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '0'), v2515);
      sim_r.txns.push({
        amt: v2502,
        kind: 'to',
        tok: v2475
        });
      const v2519 = stdlib.add(v2477, stdlib.checkedBigNumberify('./staker.rsh:101:39:decimal', stdlib.UInt_max, '2'));
      const v2520 = stdlib.add(v2519, v2497);
      const v2521 = stdlib.add(v2520, v2496);
      const v2522 = stdlib.add(v2521, v2498);
      
      const v2538 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2539 = [v2500, v2502];
      const v2540 = false;
      const v2541 = v2538;
      const v2542 = v2539;
      const v2543 = v2520;
      const v2544 = stdlib.checkedBigNumberify('./staker.rsh:134:21:decimal', stdlib.UInt_max, '0');
      const v2545 = v2504;
      const v2546 = v2477;
      const v2551 = v2516;
      const v2552 = v2500;
      
      if (await (async () => {
        const v2675 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:235:39:decimal', stdlib.UInt_max, '0'));
        const v2676 = v2540 ? v2675 : false;
        const v2677 = v2676 ? false : true;
        
        return v2677;})()) {
        const v2679 = v2541[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
        const v2680 = stdlib.le(v2521, v2546);
        const v2681 = v2680 ? v2521 : v2546;
        let v2682;
        const v2683 = stdlib.ge(v2543, v2681);
        if (v2683) {
          v2682 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2684 = stdlib.sub(v2681, v2543);
          v2682 = v2684;
          }
        const v2686 = stdlib.mul(v2682, v2499);
        const v2687 = stdlib.add(v2679, v2686);
        const v2688 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
        const v2689 = stdlib.le(v2687, v2688);
        const v2690 = v2689 ? v2687 : v2688;
        const v2693 = v2541[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
        let v2696;
        if (v2683) {
          v2696 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2698 = stdlib.sub(v2681, v2543);
          v2696 = v2698;
          }
        const v2700 = stdlib.mul(v2696, v2501);
        const v2701 = stdlib.add(v2693, v2700);
        const v2702 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
        const v2703 = stdlib.le(v2701, v2702);
        const v2704 = v2703 ? v2701 : v2702;
        const v2707 = [v2690, v2704];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v2473,
          tok: undefined /* Nothing */
          });
        const v6727 = v2551[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        const v6728 = v6727[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2473,
          tok: v2475
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2476
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2475
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
    tys: [ctc7, ctc6, ctc5, ctc5, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2505, time: v2504, didSend: v61, from: v2503 } = txn2;
  ;
  const v2508 = v2493[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v2509 = v2508[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '0')];
  const v2510 = stdlib.add(v2509, v2502);
  const v2513 = v2508[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '1')];
  const v2514 = v2508[stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '2')];
  const v2515 = [v2510, v2513, v2514];
  const v2516 = stdlib.Array_set(v2493, stdlib.checkedBigNumberify('./staker.rsh:96:12:dot', stdlib.UInt_max, '0'), v2515);
  ;
  const v2517 = stdlib.addressEq(v2473, v2503);
  stdlib.assert(v2517, {
    at: './staker.rsh:96:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v2519 = stdlib.add(v2477, stdlib.checkedBigNumberify('./staker.rsh:101:39:decimal', stdlib.UInt_max, '2'));
  const v2520 = stdlib.add(v2519, v2497);
  const v2521 = stdlib.add(v2520, v2496);
  const v2522 = stdlib.add(v2521, v2498);
  stdlib.protect(ctc0, await interact.readyForStakers(), {
    at: './staker.rsh:132:36:application',
    fs: ['at ./staker.rsh:132:36:application call to [unknown function] (defined at: ./staker.rsh:132:36:function exp)', 'at ./staker.rsh:132:36:application call to "liftedInteract" (defined at: ./staker.rsh:132:36:application)'],
    msg: 'readyForStakers',
    who: 'Deployer'
    });
  
  const v2538 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2539 = [v2500, v2502];
  let v2540 = false;
  let v2541 = v2538;
  let v2542 = v2539;
  let v2543 = v2520;
  let v2544 = stdlib.checkedBigNumberify('./staker.rsh:134:21:decimal', stdlib.UInt_max, '0');
  let v2545 = v2504;
  let v2546 = v2477;
  let v2551 = v2516;
  let v2552 = v2500;
  
  while (await (async () => {
    const v2675 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:235:39:decimal', stdlib.UInt_max, '0'));
    const v2676 = v2540 ? v2675 : false;
    const v2677 = v2676 ? false : true;
    
    return v2677;})()) {
    const v2679 = v2541[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
    const v2680 = stdlib.le(v2521, v2546);
    const v2681 = v2680 ? v2521 : v2546;
    let v2682;
    const v2683 = stdlib.ge(v2543, v2681);
    if (v2683) {
      v2682 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v2684 = stdlib.sub(v2681, v2543);
      v2682 = v2684;
      }
    const v2686 = stdlib.mul(v2682, v2499);
    const v2687 = stdlib.add(v2679, v2686);
    const v2688 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
    const v2689 = stdlib.le(v2687, v2688);
    const v2690 = v2689 ? v2687 : v2688;
    const v2693 = v2541[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
    let v2696;
    if (v2683) {
      v2696 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v2698 = stdlib.sub(v2681, v2543);
      v2696 = v2698;
      }
    const v2700 = stdlib.mul(v2696, v2501);
    const v2701 = stdlib.add(v2693, v2700);
    const v2702 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
    const v2703 = stdlib.le(v2701, v2702);
    const v2704 = v2703 ? v2701 : v2702;
    const v2707 = [v2690, v2704];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn3;
    switch (v3053[0]) {
      case 'Any_eject0_894': {
        const v3056 = v3053[1];
        undefined /* setApiDetails */;
        const v3061 = v3056[stdlib.checkedBigNumberify('./staker.rsh:279:10:spread', stdlib.UInt_max, '0')];
        const v3062 = v3056[stdlib.checkedBigNumberify('./staker.rsh:279:10:spread', stdlib.UInt_max, '1')];
        const v3063 = stdlib.addressEq(v3052, v3061);
        const v3064 = stdlib.ge(v2546, v2521);
        const v3065 = stdlib.addressEq(v3061, v3062);
        const v3066 = v3064 ? v3065 : false;
        const v3067 = v3063 ? true : v3066;
        const v3068 = stdlib.gt(v2498, stdlib.checkedBigNumberify('./staker.rsh:287:29:decimal', stdlib.UInt_max, '0'));
        const v3069 = stdlib.ge(v2546, v2522);
        const v3070 = v3068 ? v3069 : false;
        const v3071 = stdlib.addressEq(v3052, v2473);
        const v3072 = v3070 ? v3071 : false;
        const v3073 = v3067 ? true : v3072;
        stdlib.assert(v3073, {
          at: './staker.rsh:280:12:application',
          fs: ['at ./staker.rsh:279:32:application call to [unknown function] (defined at: ./staker.rsh:279:32:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:279:32:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
          msg: 'can only eject under certain conditions',
          who: 'Deployer'
          });
        ;
        const v3148 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v3149 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
        const v3153 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v3154 = v3148[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
        const v3155 = [v3149, v3153, v3154];
        const v3156 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v3155);
        ;
        const v3173 = null;
        await txn3.getOutput('Any_eject', 'v3173', ctc0, v3173);
        const v3181 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3061), null);
        const v3183 = {
          rewards: v2538,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3184 = stdlib.fromSome(v3181, v3183);
        const v3185 = v3184.stake;
        const v3190 = v3184.rewards;
        const v3191 = v3190[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
        let v3196;
        if (v2683) {
          v3196 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3198 = stdlib.sub(v2681, v2543);
          v3196 = v3198;
          }
        const v3200 = stdlib.mul(v3196, v2499);
        const v3201 = stdlib.add(v2679, v3200);
        const v3203 = stdlib.le(v3201, v2688);
        const v3204 = v3203 ? v3201 : v2688;
        let v3207;
        const v3208 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
        if (v3208) {
          v3207 = v3204;
          }
        else {
          const v3209 = stdlib.muldiv(v3204, v3185, v2544);
          v3207 = v3209;
          }
        let v3210;
        const v3211 = stdlib.ge(v3191, v3207);
        if (v3211) {
          v3210 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3212 = stdlib.sub(v3207, v3191);
          v3210 = v3212;
          }
        const v3213 = stdlib.le(v3210, v2690);
        const v3214 = v3213 ? v3210 : v2690;
        const v3226 = v3190[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
        let v3231;
        if (v2683) {
          v3231 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3233 = stdlib.sub(v2681, v2543);
          v3231 = v3233;
          }
        const v3235 = stdlib.mul(v3231, v2501);
        const v3236 = stdlib.add(v2693, v3235);
        const v3238 = stdlib.le(v3236, v2702);
        const v3239 = v3238 ? v3236 : v2702;
        let v3242;
        if (v3208) {
          v3242 = v3239;
          }
        else {
          const v3244 = stdlib.muldiv(v3239, v3185, v2544);
          v3242 = v3244;
          }
        let v3245;
        const v3246 = stdlib.ge(v3226, v3242);
        if (v3246) {
          v3245 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3247 = stdlib.sub(v3242, v3226);
          v3245 = v3247;
          }
        const v3248 = stdlib.le(v3245, v2704);
        const v3249 = v3248 ? v3245 : v2704;
        const v3251 = [v3214, v3249];
        const v3260 = stdlib.sub(v2552, v3214);
        ;
        const v3261 = v3156[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
        const v3262 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
        const v3266 = stdlib.sub(v3262, v3249);
        const v3269 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '1')];
        const v3270 = v3261[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '2')];
        const v3271 = [v3266, v3269, v3270];
        const v3272 = stdlib.Array_set(v3156, stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0'), v3271);
        ;
        const v3274 = stdlib.sub(v2688, v3214);
        const v3276 = stdlib.sub(v2702, v3249);
        const v3289 = stdlib.add(v3191, v3214);
        const v3291 = stdlib.add(v3226, v3249);
        const v3292 = [v3289, v3291];
        const v3293 = {
          rewards: v3292,
          stake: v3185
          };
        await stdlib.mapSet(map0, v3061, v3293);
        const v3298 = [v3274, v3276];
        const v3299 = {
          totalRemaining: v3298,
          userReceived: v3251
          };
        const v3304 = v3293.stake;
        const v3310 = stdlib.sub(v2544, v3304);
        const v3311 = stdlib.sub(v3304, v3304);
        const v3316 = v3293.rewards;
        const v3320 = v3272[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
        const v3321 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '0')];
        const v3325 = stdlib.sub(v3321, v3304);
        const v3328 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
        const v3329 = v3320[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '2')];
        const v3330 = [v3325, v3328, v3329];
        const v3331 = stdlib.Array_set(v3272, stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1'), v3330);
        ;
        const v3332 = v3316[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '0')];
        let v3333;
        const v3334 = stdlib.eq(v3310, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
        if (v3334) {
          v3333 = v2690;
          }
        else {
          const v3335 = stdlib.muldiv(v2690, v3304, v3310);
          v3333 = v3335;
          }
        let v3336;
        const v3337 = stdlib.ge(v3333, v3332);
        if (v3337) {
          v3336 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3338 = stdlib.sub(v3332, v3333);
          v3336 = v3338;
          }
        const v3339 = v3316[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '1')];
        let v3340;
        if (v3334) {
          v3340 = v2704;
          }
        else {
          const v3342 = stdlib.muldiv(v2704, v3304, v3310);
          v3340 = v3342;
          }
        let v3343;
        const v3344 = stdlib.ge(v3340, v3339);
        if (v3344) {
          v3343 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3345 = stdlib.sub(v3339, v3340);
          v3343 = v3345;
          }
        const v3346 = [v3336, v3343];
        const v3347 = {
          rewards: v3346,
          stake: v3311
          };
        await stdlib.mapSet(map0, v3061, v3347);
        const v3348 = {
          newEveryoneStaked: v3310,
          newUserStaked: v3311
          };
        null;
        const v3353 = stdlib.sub(v2690, v3214);
        const v3354 = stdlib.sub(v2704, v3249);
        const v3355 = [v3353, v3354];
        const cv2540 = v2540;
        const cv2541 = v3355;
        const cv2542 = v3298;
        const cv2543 = v2546;
        const cv2544 = v3310;
        const cv2545 = v3054;
        const cv2546 = v2545;
        const cv2551 = v3331;
        const cv2552 = v3260;
        
        v2540 = cv2540;
        v2541 = cv2541;
        v2542 = cv2542;
        v2543 = cv2543;
        v2544 = cv2544;
        v2545 = cv2545;
        v2546 = cv2546;
        v2551 = cv2551;
        v2552 = cv2552;
        
        continue;
        break;
        }
      case 'Any_halt0_894': {
        const v3637 = v3053[1];
        undefined /* setApiDetails */;
        const v3662 = stdlib.addressEq(v3052, v2473);
        stdlib.assert(v3662, {
          at: './staker.rsh:309:12:application',
          fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
          msg: 'only Deployer can halt',
          who: 'Deployer'
          });
        const v3663 = stdlib.ge(v2546, v2521);
        stdlib.assert(v3663, {
          at: './staker.rsh:310:12:application',
          fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
          msg: 'can only halt after the end',
          who: 'Deployer'
          });
        const v3664 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:311:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3664, {
          at: './staker.rsh:311:12:application',
          fs: ['at ./staker.rsh:308:24:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:308:24:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
          msg: 'can only halt when no stake is left',
          who: 'Deployer'
          });
        ;
        const v3729 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v3730 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
        const v3734 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v3735 = v3729[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
        const v3736 = [v3730, v3734, v3735];
        const v3737 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v3736);
        ;
        const v3947 = null;
        await txn3.getOutput('Any_halt', 'v3947', ctc0, v3947);
        const cv2540 = true;
        const cv2541 = v2707;
        const cv2542 = v2542;
        const cv2543 = v2546;
        const cv2544 = v2544;
        const cv2545 = v3054;
        const cv2546 = v2545;
        const cv2551 = v3737;
        const cv2552 = v2552;
        
        v2540 = cv2540;
        v2541 = cv2541;
        v2542 = cv2542;
        v2543 = cv2543;
        v2544 = cv2544;
        v2545 = cv2545;
        v2546 = cv2546;
        v2551 = cv2551;
        v2552 = cv2552;
        
        continue;
        break;
        }
      case 'Any_nop0_894': {
        const v4218 = v3053[1];
        undefined /* setApiDetails */;
        ;
        const v4310 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v4311 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
        const v4315 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v4316 = v4310[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
        const v4317 = [v4311, v4315, v4316];
        const v4318 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v4317);
        ;
        const v4538 = null;
        await txn3.getOutput('Any_nop', 'v4538', ctc0, v4538);
        const cv2540 = v2540;
        const cv2541 = v2707;
        const cv2542 = v2542;
        const cv2543 = v2546;
        const cv2544 = v2544;
        const cv2545 = v3054;
        const cv2546 = v2545;
        const cv2551 = v4318;
        const cv2552 = v2552;
        
        v2540 = cv2540;
        v2541 = cv2541;
        v2542 = cv2542;
        v2543 = cv2543;
        v2544 = cv2544;
        v2545 = cv2545;
        v2546 = cv2546;
        v2551 = cv2551;
        v2552 = cv2552;
        
        continue;
        break;
        }
      case 'Staker_harvest0_894': {
        const v4799 = v3053[1];
        undefined /* setApiDetails */;
        ;
        const v4891 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v4892 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
        const v4896 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v4897 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
        const v4898 = [v4892, v4896, v4897];
        const v4899 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v4898);
        ;
        const v5129 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3052), null);
        const v5131 = {
          rewards: v2538,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5132 = stdlib.fromSome(v5129, v5131);
        const v5133 = v5132.stake;
        const v5138 = v5132.rewards;
        const v5139 = v5138[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
        let v5144;
        if (v2683) {
          v5144 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5146 = stdlib.sub(v2681, v2543);
          v5144 = v5146;
          }
        const v5148 = stdlib.mul(v5144, v2499);
        const v5149 = stdlib.add(v2679, v5148);
        const v5151 = stdlib.le(v5149, v2688);
        const v5152 = v5151 ? v5149 : v2688;
        let v5155;
        const v5156 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
        if (v5156) {
          v5155 = v5152;
          }
        else {
          const v5157 = stdlib.muldiv(v5152, v5133, v2544);
          v5155 = v5157;
          }
        let v5158;
        const v5159 = stdlib.ge(v5139, v5155);
        if (v5159) {
          v5158 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5160 = stdlib.sub(v5155, v5139);
          v5158 = v5160;
          }
        const v5161 = stdlib.le(v5158, v2690);
        const v5162 = v5161 ? v5158 : v2690;
        const v5174 = v5138[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
        let v5179;
        if (v2683) {
          v5179 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5181 = stdlib.sub(v2681, v2543);
          v5179 = v5181;
          }
        const v5183 = stdlib.mul(v5179, v2501);
        const v5184 = stdlib.add(v2693, v5183);
        const v5186 = stdlib.le(v5184, v2702);
        const v5187 = v5186 ? v5184 : v2702;
        let v5190;
        if (v5156) {
          v5190 = v5187;
          }
        else {
          const v5192 = stdlib.muldiv(v5187, v5133, v2544);
          v5190 = v5192;
          }
        let v5193;
        const v5194 = stdlib.ge(v5174, v5190);
        if (v5194) {
          v5193 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v5195 = stdlib.sub(v5190, v5174);
          v5193 = v5195;
          }
        const v5196 = stdlib.le(v5193, v2704);
        const v5197 = v5196 ? v5193 : v2704;
        const v5199 = [v5162, v5197];
        const v5208 = stdlib.sub(v2552, v5162);
        ;
        const v5209 = v4899[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
        const v5210 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
        const v5214 = stdlib.sub(v5210, v5197);
        const v5217 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '1')];
        const v5218 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '2')];
        const v5219 = [v5214, v5217, v5218];
        const v5220 = stdlib.Array_set(v4899, stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0'), v5219);
        ;
        const v5222 = stdlib.sub(v2688, v5162);
        const v5224 = stdlib.sub(v2702, v5197);
        const v5237 = stdlib.add(v5139, v5162);
        const v5239 = stdlib.add(v5174, v5197);
        const v5240 = [v5237, v5239];
        const v5241 = {
          rewards: v5240,
          stake: v5133
          };
        await stdlib.mapSet(map0, v3052, v5241);
        const v5246 = [v5222, v5224];
        const v5247 = {
          totalRemaining: v5246,
          userReceived: v5199
          };
        await txn3.getOutput('Staker_harvest', 'v5247', ctc12, v5247);
        null;
        const v5265 = stdlib.sub(v2690, v5162);
        const v5266 = stdlib.sub(v2704, v5197);
        const v5267 = [v5265, v5266];
        const cv2540 = v2540;
        const cv2541 = v5267;
        const cv2542 = v5246;
        const cv2543 = v2546;
        const cv2544 = v2544;
        const cv2545 = v3054;
        const cv2546 = v2545;
        const cv2551 = v5220;
        const cv2552 = v5208;
        
        v2540 = cv2540;
        v2541 = cv2541;
        v2542 = cv2542;
        v2543 = cv2543;
        v2544 = cv2544;
        v2545 = cv2545;
        v2546 = cv2546;
        v2551 = cv2551;
        v2552 = cv2552;
        
        continue;
        break;
        }
      case 'Staker_stake0_894': {
        const v5380 = v3053[1];
        undefined /* setApiDetails */;
        const v5429 = v5380[stdlib.checkedBigNumberify('./staker.rsh:236:10:spread', stdlib.UInt_max, '0')];
        const v5430 = stdlib.lt(v2546, v2521);
        stdlib.assert(v5430, {
          at: './staker.rsh:237:12:application',
          fs: ['at ./staker.rsh:236:31:application call to [unknown function] (defined at: ./staker.rsh:236:31:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:236:31:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
          msg: 'can only stake before the end',
          who: 'Deployer'
          });
        ;
        const v5472 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v5473 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
        const v5474 = stdlib.add(v5473, v5429);
        const v5477 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v5478 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
        const v5479 = [v5474, v5477, v5478];
        const v5480 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v5479);
        ;
        const v5857 = stdlib.add(v2544, v5429);
        const v5858 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3052), null);
        const v5860 = {
          rewards: v2538,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5861 = stdlib.fromSome(v5858, v5860);
        const v5862 = v5861.stake;
        const v5863 = stdlib.add(v5862, v5429);
        const v5868 = v5861.rewards;
        let v5870;
        const v5871 = stdlib.eq(v5857, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
        if (v5871) {
          v5870 = v2690;
          }
        else {
          const v5872 = stdlib.muldiv(v2690, v5429, v5857);
          v5870 = v5872;
          }
        const v5873 = v5868[stdlib.checkedBigNumberify('./staker.rsh:244:27:array ref', stdlib.UInt_max, '0')];
        const v5874 = stdlib.add(v5873, v5870);
        let v5875;
        if (v5871) {
          v5875 = v2704;
          }
        else {
          const v5877 = stdlib.muldiv(v2704, v5429, v5857);
          v5875 = v5877;
          }
        const v5878 = v5868[stdlib.checkedBigNumberify('./staker.rsh:244:27:array ref', stdlib.UInt_max, '1')];
        const v5879 = stdlib.add(v5878, v5875);
        const v5880 = [v5874, v5879];
        const v5881 = {
          rewards: v5880,
          stake: v5863
          };
        await stdlib.mapSet(map0, v3052, v5881);
        const v5882 = {
          newEveryoneStaked: v5857,
          newUserStaked: v5863
          };
        await txn3.getOutput('Staker_stake', 'v5882', ctc13, v5882);
        null;
        const cv2540 = v2540;
        const cv2541 = v2707;
        const cv2542 = v2542;
        const cv2543 = v2546;
        const cv2544 = v5857;
        const cv2545 = v3054;
        const cv2546 = v2545;
        const cv2551 = v5480;
        const cv2552 = v2552;
        
        v2540 = cv2540;
        v2541 = cv2541;
        v2542 = cv2542;
        v2543 = cv2543;
        v2544 = cv2544;
        v2545 = cv2545;
        v2546 = cv2546;
        v2551 = cv2551;
        v2552 = cv2552;
        
        continue;
        break;
        }
      case 'Staker_withdraw0_894': {
        const v5961 = v3053[1];
        undefined /* setApiDetails */;
        const v6031 = v5961[stdlib.checkedBigNumberify('./staker.rsh:260:10:spread', stdlib.UInt_max, '0')];
        const v6032 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3052), null);
        const v6034 = {
          rewards: v2538,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6035 = stdlib.fromSome(v6032, v6034);
        const v6036 = v6035.stake;
        const v6037 = stdlib.le(v6031, v6036);
        stdlib.assert(v6037, {
          at: './staker.rsh:261:12:application',
          fs: ['at ./staker.rsh:260:34:application call to [unknown function] (defined at: ./staker.rsh:260:34:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:260:34:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
          msg: 'can only withdraw if balance is sufficient',
          who: 'Deployer'
          });
        ;
        const v6053 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v6054 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
        const v6058 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
        const v6059 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
        const v6060 = [v6054, v6058, v6059];
        const v6061 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v6060);
        ;
        const v6490 = stdlib.sub(v2544, v6031);
        const v6491 = stdlib.sub(v6036, v6031);
        const v6496 = v6035.rewards;
        const v6500 = v6061[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
        const v6501 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '0')];
        const v6505 = stdlib.sub(v6501, v6031);
        const v6508 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
        const v6509 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '2')];
        const v6510 = [v6505, v6508, v6509];
        const v6511 = stdlib.Array_set(v6061, stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1'), v6510);
        ;
        const v6512 = v6496[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '0')];
        let v6513;
        const v6514 = stdlib.eq(v6490, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
        if (v6514) {
          v6513 = v2690;
          }
        else {
          const v6515 = stdlib.muldiv(v2690, v6031, v6490);
          v6513 = v6515;
          }
        let v6516;
        const v6517 = stdlib.ge(v6513, v6512);
        if (v6517) {
          v6516 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v6518 = stdlib.sub(v6512, v6513);
          v6516 = v6518;
          }
        const v6519 = v6496[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '1')];
        let v6520;
        if (v6514) {
          v6520 = v2704;
          }
        else {
          const v6522 = stdlib.muldiv(v2704, v6031, v6490);
          v6520 = v6522;
          }
        let v6523;
        const v6524 = stdlib.ge(v6520, v6519);
        if (v6524) {
          v6523 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v6525 = stdlib.sub(v6519, v6520);
          v6523 = v6525;
          }
        const v6526 = [v6516, v6523];
        const v6527 = {
          rewards: v6526,
          stake: v6491
          };
        await stdlib.mapSet(map0, v3052, v6527);
        const v6528 = {
          newEveryoneStaked: v6490,
          newUserStaked: v6491
          };
        await txn3.getOutput('Staker_withdraw', 'v6528', ctc13, v6528);
        null;
        const cv2540 = v2540;
        const cv2541 = v2707;
        const cv2542 = v2542;
        const cv2543 = v2546;
        const cv2544 = v6490;
        const cv2545 = v3054;
        const cv2546 = v2545;
        const cv2551 = v6511;
        const cv2552 = v2552;
        
        v2540 = cv2540;
        v2541 = cv2541;
        v2542 = cv2542;
        v2543 = cv2543;
        v2544 = cv2544;
        v2545 = cv2545;
        v2546 = cv2546;
        v2551 = cv2551;
        v2552 = cv2552;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v6727 = v2551[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
  const v6728 = v6727[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  };
export async function _Staker_harvest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_harvest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_harvest4 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_894: ctc12,
    Any_halt0_894: ctc11,
    Any_nop0_894: ctc11,
    Staker_harvest0_894: ctc11,
    Staker_stake0_894: ctc13,
    Staker_withdraw0_894: ctc13
    });
  const ctc15 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v2903 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:269:30:application call to [unknown function] (defined at: ./staker.rsh:269:30:function exp)', 'at ./staker.rsh:134:19:application call to "runStaker_harvest0_894" (defined at: ./staker.rsh:269:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v2907 = ['Staker_harvest0_894', v2903];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707, v2907],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:270:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:270:21:decimal', stdlib.UInt_max, '0'), v2476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
      
      switch (v3053[0]) {
        case 'Any_eject0_894': {
          const v3056 = v3053[1];
          
          break;
          }
        case 'Any_halt0_894': {
          const v3637 = v3053[1];
          
          break;
          }
        case 'Any_nop0_894': {
          const v4218 = v3053[1];
          
          break;
          }
        case 'Staker_harvest0_894': {
          const v4799 = v3053[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          ;
          const v4891 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v4892 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
          const v4896 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v4897 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
          const v4898 = [v4892, v4896, v4897];
          const v4899 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v4898);
          ;
          const v5129 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3052), null);
          const v5131 = {
            rewards: v2538,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5132 = stdlib.fromSome(v5129, v5131);
          const v5133 = v5132.stake;
          const v5138 = v5132.rewards;
          const v5139 = v5138[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
          let v5144;
          if (v2683) {
            v5144 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v5146 = stdlib.sub(v2681, v2543);
            v5144 = v5146;
            }
          const v5148 = stdlib.mul(v5144, v2499);
          const v5149 = stdlib.add(v2679, v5148);
          const v5151 = stdlib.le(v5149, v2688);
          const v5152 = v5151 ? v5149 : v2688;
          let v5155;
          const v5156 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
          if (v5156) {
            v5155 = v5152;
            }
          else {
            const v5157 = stdlib.muldiv(v5152, v5133, v2544);
            v5155 = v5157;
            }
          let v5158;
          const v5159 = stdlib.ge(v5139, v5155);
          if (v5159) {
            v5158 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v5160 = stdlib.sub(v5155, v5139);
            v5158 = v5160;
            }
          const v5161 = stdlib.le(v5158, v2690);
          const v5162 = v5161 ? v5158 : v2690;
          const v5174 = v5138[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
          let v5179;
          if (v2683) {
            v5179 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v5181 = stdlib.sub(v2681, v2543);
            v5179 = v5181;
            }
          const v5183 = stdlib.mul(v5179, v2501);
          const v5184 = stdlib.add(v2693, v5183);
          const v5186 = stdlib.le(v5184, v2702);
          const v5187 = v5186 ? v5184 : v2702;
          let v5190;
          if (v5156) {
            v5190 = v5187;
            }
          else {
            const v5192 = stdlib.muldiv(v5187, v5133, v2544);
            v5190 = v5192;
            }
          let v5193;
          const v5194 = stdlib.ge(v5174, v5190);
          if (v5194) {
            v5193 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v5195 = stdlib.sub(v5190, v5174);
            v5193 = v5195;
            }
          const v5196 = stdlib.le(v5193, v2704);
          const v5197 = v5196 ? v5193 : v2704;
          const v5199 = [v5162, v5197];
          const v5208 = stdlib.sub(v2552, v5162);
          sim_r.txns.push({
            kind: 'from',
            to: v3052,
            tok: undefined /* Nothing */
            });
          const v5209 = v4899[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
          const v5210 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
          const v5214 = stdlib.sub(v5210, v5197);
          const v5217 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '1')];
          const v5218 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '2')];
          const v5219 = [v5214, v5217, v5218];
          const v5220 = stdlib.Array_set(v4899, stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0'), v5219);
          sim_r.txns.push({
            kind: 'from',
            to: v3052,
            tok: v2475
            });
          const v5222 = stdlib.sub(v2688, v5162);
          const v5224 = stdlib.sub(v2702, v5197);
          const v5237 = stdlib.add(v5139, v5162);
          const v5239 = stdlib.add(v5174, v5197);
          const v5240 = [v5237, v5239];
          const v5241 = {
            rewards: v5240,
            stake: v5133
            };
          await stdlib.simMapSet(sim_r, 0, v3052, v5241);
          const v5246 = [v5222, v5224];
          const v5247 = {
            totalRemaining: v5246,
            userReceived: v5199
            };
          const v5251 = await txn1.getOutput('Staker_harvest', 'v5247', ctc15, v5247);
          
          null;
          const v5265 = stdlib.sub(v2690, v5162);
          const v5266 = stdlib.sub(v2704, v5197);
          const v15126 = v2540;
          const v15128 = v5246;
          const v15129 = v2546;
          const v15130 = v2544;
          const v15131 = v3054;
          const v15132 = v2545;
          const v15133 = v5220;
          const v15134 = v5208;
          const v15136 = v2540 ? v5156 : false;
          if (v15136) {
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: undefined /* Nothing */
              });
            const v15177 = v5220[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            const v15178 = v15177[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: v2475
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2476
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2475
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v15138 = v5265;
            const v15139 = stdlib.le(v2521, v2545);
            const v15140 = v15139 ? v2521 : v2545;
            let v15141;
            const v15142 = stdlib.ge(v2546, v15140);
            if (v15142) {
              v15141 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15143 = stdlib.sub(v15140, v2546);
              v15141 = v15143;
              }
            const v15144 = stdlib.mul(v15141, v2499);
            const v15145 = stdlib.add(v5265, v15144);
            const v15146 = v5222;
            const v15147 = stdlib.le(v15145, v5222);
            const v15148 = v15147 ? v15145 : v5222;
            const v15149 = v5266;
            let v15150;
            if (v15142) {
              v15150 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15151 = stdlib.sub(v15140, v2546);
              v15150 = v15151;
              }
            const v15152 = stdlib.mul(v15150, v2501);
            const v15153 = stdlib.add(v5266, v15152);
            const v15154 = v5224;
            const v15155 = stdlib.le(v15153, v5224);
            const v15156 = v15155 ? v15153 : v5224;
            const v15157 = [v15148, v15156];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_stake0_894': {
          const v5380 = v3053[1];
          
          break;
          }
        case 'Staker_withdraw0_894': {
          const v5961 = v3053[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
  switch (v3053[0]) {
    case 'Any_eject0_894': {
      const v3056 = v3053[1];
      return;
      break;
      }
    case 'Any_halt0_894': {
      const v3637 = v3053[1];
      return;
      break;
      }
    case 'Any_nop0_894': {
      const v4218 = v3053[1];
      return;
      break;
      }
    case 'Staker_harvest0_894': {
      const v4799 = v3053[1];
      undefined /* setApiDetails */;
      ;
      const v4891 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v4892 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
      const v4896 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v4897 = v4891[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
      const v4898 = [v4892, v4896, v4897];
      const v4899 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v4898);
      ;
      const v5129 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3052), null);
      const v5131 = {
        rewards: v2538,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5132 = stdlib.fromSome(v5129, v5131);
      const v5133 = v5132.stake;
      const v5138 = v5132.rewards;
      const v5139 = v5138[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '0')];
      let v5144;
      if (v2683) {
        v5144 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v5146 = stdlib.sub(v2681, v2543);
        v5144 = v5146;
        }
      const v5148 = stdlib.mul(v5144, v2499);
      const v5149 = stdlib.add(v2679, v5148);
      const v5151 = stdlib.le(v5149, v2688);
      const v5152 = v5151 ? v5149 : v2688;
      let v5155;
      const v5156 = stdlib.eq(v2544, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
      if (v5156) {
        v5155 = v5152;
        }
      else {
        const v5157 = stdlib.muldiv(v5152, v5133, v2544);
        v5155 = v5157;
        }
      let v5158;
      const v5159 = stdlib.ge(v5139, v5155);
      if (v5159) {
        v5158 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v5160 = stdlib.sub(v5155, v5139);
        v5158 = v5160;
        }
      const v5161 = stdlib.le(v5158, v2690);
      const v5162 = v5161 ? v5158 : v2690;
      const v5174 = v5138[stdlib.checkedBigNumberify('./staker.rsh:153:54:array ref', stdlib.UInt_max, '1')];
      let v5179;
      if (v2683) {
        v5179 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v5181 = stdlib.sub(v2681, v2543);
        v5179 = v5181;
        }
      const v5183 = stdlib.mul(v5179, v2501);
      const v5184 = stdlib.add(v2693, v5183);
      const v5186 = stdlib.le(v5184, v2702);
      const v5187 = v5186 ? v5184 : v2702;
      let v5190;
      if (v5156) {
        v5190 = v5187;
        }
      else {
        const v5192 = stdlib.muldiv(v5187, v5133, v2544);
        v5190 = v5192;
        }
      let v5193;
      const v5194 = stdlib.ge(v5174, v5190);
      if (v5194) {
        v5193 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v5195 = stdlib.sub(v5190, v5174);
        v5193 = v5195;
        }
      const v5196 = stdlib.le(v5193, v2704);
      const v5197 = v5196 ? v5193 : v2704;
      const v5199 = [v5162, v5197];
      const v5208 = stdlib.sub(v2552, v5162);
      ;
      const v5209 = v4899[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
      const v5210 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0')];
      const v5214 = stdlib.sub(v5210, v5197);
      const v5217 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '1')];
      const v5218 = v5209[stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '2')];
      const v5219 = [v5214, v5217, v5218];
      const v5220 = stdlib.Array_set(v4899, stdlib.checkedBigNumberify('./staker.rsh:199:56:application', stdlib.UInt_max, '0'), v5219);
      ;
      const v5222 = stdlib.sub(v2688, v5162);
      const v5224 = stdlib.sub(v2702, v5197);
      const v5237 = stdlib.add(v5139, v5162);
      const v5239 = stdlib.add(v5174, v5197);
      const v5240 = [v5237, v5239];
      const v5241 = {
        rewards: v5240,
        stake: v5133
        };
      await stdlib.mapSet(map0, v3052, v5241);
      const v5246 = [v5222, v5224];
      const v5247 = {
        totalRemaining: v5246,
        userReceived: v5199
        };
      const v5251 = await txn1.getOutput('Staker_harvest', 'v5247', ctc15, v5247);
      if (v1359) {
        stdlib.protect(ctc0, await interact.out(v4799, v5251), {
          at: './staker.rsh:269:11:application',
          fs: ['at ./staker.rsh:269:11:application call to [unknown function] (defined at: ./staker.rsh:269:11:function exp)', 'at ./staker.rsh:273:10:application call to "k" (defined at: ./staker.rsh:270:42:function exp)', 'at ./staker.rsh:270:42:application call to [unknown function] (defined at: ./staker.rsh:270:42:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v5265 = stdlib.sub(v2690, v5162);
      const v5266 = stdlib.sub(v2704, v5197);
      const v15126 = v2540;
      const v15128 = v5246;
      const v15129 = v2546;
      const v15130 = v2544;
      const v15131 = v3054;
      const v15132 = v2545;
      const v15133 = v5220;
      const v15134 = v5208;
      const v15136 = v2540 ? v5156 : false;
      if (v15136) {
        ;
        const v15177 = v5220[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        const v15178 = v15177[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        const v15138 = v5265;
        const v15139 = stdlib.le(v2521, v2545);
        const v15140 = v15139 ? v2521 : v2545;
        let v15141;
        const v15142 = stdlib.ge(v2546, v15140);
        if (v15142) {
          v15141 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v15143 = stdlib.sub(v15140, v2546);
          v15141 = v15143;
          }
        const v15144 = stdlib.mul(v15141, v2499);
        const v15145 = stdlib.add(v5265, v15144);
        const v15146 = v5222;
        const v15147 = stdlib.le(v15145, v5222);
        const v15148 = v15147 ? v15145 : v5222;
        const v15149 = v5266;
        let v15150;
        if (v15142) {
          v15150 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v15151 = stdlib.sub(v15140, v2546);
          v15150 = v15151;
          }
        const v15152 = stdlib.mul(v15150, v2501);
        const v15153 = stdlib.add(v5266, v15152);
        const v15154 = v5224;
        const v15155 = stdlib.le(v15153, v5224);
        const v15156 = v15155 ? v15153 : v5224;
        const v15157 = [v15148, v15156];
        return;
        }
      break;
      }
    case 'Staker_stake0_894': {
      const v5380 = v3053[1];
      return;
      break;
      }
    case 'Staker_withdraw0_894': {
      const v5961 = v3053[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_stake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_stake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_stake4 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_894: ctc12,
    Any_halt0_894: ctc13,
    Any_nop0_894: ctc13,
    Staker_harvest0_894: ctc13,
    Staker_stake0_894: ctc11,
    Staker_withdraw0_894: ctc11
    });
  const ctc15 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v2860 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:236:31:application call to [unknown function] (defined at: ./staker.rsh:236:31:function exp)', 'at ./staker.rsh:134:19:application call to "runStaker_stake0_894" (defined at: ./staker.rsh:236:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v2861 = v2860[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2863 = stdlib.lt(v2546, v2521);
  stdlib.assert(v2863, {
    at: './staker.rsh:237:12:application',
    fs: ['at ./staker.rsh:236:31:application call to [unknown function] (defined at: ./staker.rsh:236:31:function exp)', 'at ./staker.rsh:134:19:application call to "runStaker_stake0_894" (defined at: ./staker.rsh:236:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'can only stake before the end',
    who: 'Staker_stake'
    });
  const v2881 = ['Staker_stake0_894', v2860];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707, v2881],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:246:17:decimal', stdlib.UInt_max, '0'), [[v2861, v2476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
      
      switch (v3053[0]) {
        case 'Any_eject0_894': {
          const v3056 = v3053[1];
          
          break;
          }
        case 'Any_halt0_894': {
          const v3637 = v3053[1];
          
          break;
          }
        case 'Any_nop0_894': {
          const v4218 = v3053[1];
          
          break;
          }
        case 'Staker_harvest0_894': {
          const v4799 = v3053[1];
          
          break;
          }
        case 'Staker_stake0_894': {
          const v5380 = v3053[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v5429 = v5380[stdlib.checkedBigNumberify('./staker.rsh:236:10:spread', stdlib.UInt_max, '0')];
          ;
          const v5472 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v5473 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
          const v5474 = stdlib.add(v5473, v5429);
          const v5477 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v5478 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
          const v5479 = [v5474, v5477, v5478];
          const v5480 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v5479);
          sim_r.txns.push({
            amt: v5429,
            kind: 'to',
            tok: v2476
            });
          const v5857 = stdlib.add(v2544, v5429);
          const v5858 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3052), null);
          const v5860 = {
            rewards: v2538,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5861 = stdlib.fromSome(v5858, v5860);
          const v5862 = v5861.stake;
          const v5863 = stdlib.add(v5862, v5429);
          const v5868 = v5861.rewards;
          let v5870;
          const v5871 = stdlib.eq(v5857, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
          if (v5871) {
            v5870 = v2690;
            }
          else {
            const v5872 = stdlib.muldiv(v2690, v5429, v5857);
            v5870 = v5872;
            }
          const v5873 = v5868[stdlib.checkedBigNumberify('./staker.rsh:244:27:array ref', stdlib.UInt_max, '0')];
          const v5874 = stdlib.add(v5873, v5870);
          let v5875;
          if (v5871) {
            v5875 = v2704;
            }
          else {
            const v5877 = stdlib.muldiv(v2704, v5429, v5857);
            v5875 = v5877;
            }
          const v5878 = v5868[stdlib.checkedBigNumberify('./staker.rsh:244:27:array ref', stdlib.UInt_max, '1')];
          const v5879 = stdlib.add(v5878, v5875);
          const v5880 = [v5874, v5879];
          const v5881 = {
            rewards: v5880,
            stake: v5863
            };
          await stdlib.simMapSet(sim_r, 0, v3052, v5881);
          const v5882 = {
            newEveryoneStaked: v5857,
            newUserStaked: v5863
            };
          const v5883 = await txn1.getOutput('Staker_stake', 'v5882', ctc15, v5882);
          
          null;
          const v15497 = v2540;
          const v15499 = v2542;
          const v15500 = v2546;
          const v15501 = v5857;
          const v15502 = v3054;
          const v15503 = v2545;
          const v15504 = v5480;
          const v15505 = v2552;
          const v15507 = v2540 ? v5871 : false;
          if (v15507) {
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: undefined /* Nothing */
              });
            const v15548 = v5480[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            const v15549 = v15548[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: v2475
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2476
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2475
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v15509 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
            const v15510 = stdlib.le(v2521, v2545);
            const v15511 = v15510 ? v2521 : v2545;
            let v15512;
            const v15513 = stdlib.ge(v2546, v15511);
            if (v15513) {
              v15512 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15514 = stdlib.sub(v15511, v2546);
              v15512 = v15514;
              }
            const v15515 = stdlib.mul(v15512, v2499);
            const v15516 = stdlib.add(v15509, v15515);
            const v15517 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
            const v15518 = stdlib.le(v15516, v15517);
            const v15519 = v15518 ? v15516 : v15517;
            const v15520 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
            let v15521;
            if (v15513) {
              v15521 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15522 = stdlib.sub(v15511, v2546);
              v15521 = v15522;
              }
            const v15523 = stdlib.mul(v15521, v2501);
            const v15524 = stdlib.add(v15520, v15523);
            const v15525 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
            const v15526 = stdlib.le(v15524, v15525);
            const v15527 = v15526 ? v15524 : v15525;
            const v15528 = [v15519, v15527];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_withdraw0_894': {
          const v5961 = v3053[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
  switch (v3053[0]) {
    case 'Any_eject0_894': {
      const v3056 = v3053[1];
      return;
      break;
      }
    case 'Any_halt0_894': {
      const v3637 = v3053[1];
      return;
      break;
      }
    case 'Any_nop0_894': {
      const v4218 = v3053[1];
      return;
      break;
      }
    case 'Staker_harvest0_894': {
      const v4799 = v3053[1];
      return;
      break;
      }
    case 'Staker_stake0_894': {
      const v5380 = v3053[1];
      undefined /* setApiDetails */;
      const v5429 = v5380[stdlib.checkedBigNumberify('./staker.rsh:236:10:spread', stdlib.UInt_max, '0')];
      const v5430 = stdlib.lt(v2546, v2521);
      stdlib.assert(v5430, {
        at: './staker.rsh:237:12:application',
        fs: ['at ./staker.rsh:236:31:application call to [unknown function] (defined at: ./staker.rsh:236:31:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:236:31:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
        msg: 'can only stake before the end',
        who: 'Staker_stake'
        });
      ;
      const v5472 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v5473 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
      const v5474 = stdlib.add(v5473, v5429);
      const v5477 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v5478 = v5472[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
      const v5479 = [v5474, v5477, v5478];
      const v5480 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v5479);
      ;
      const v5857 = stdlib.add(v2544, v5429);
      const v5858 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3052), null);
      const v5860 = {
        rewards: v2538,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5861 = stdlib.fromSome(v5858, v5860);
      const v5862 = v5861.stake;
      const v5863 = stdlib.add(v5862, v5429);
      const v5868 = v5861.rewards;
      let v5870;
      const v5871 = stdlib.eq(v5857, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
      if (v5871) {
        v5870 = v2690;
        }
      else {
        const v5872 = stdlib.muldiv(v2690, v5429, v5857);
        v5870 = v5872;
        }
      const v5873 = v5868[stdlib.checkedBigNumberify('./staker.rsh:244:27:array ref', stdlib.UInt_max, '0')];
      const v5874 = stdlib.add(v5873, v5870);
      let v5875;
      if (v5871) {
        v5875 = v2704;
        }
      else {
        const v5877 = stdlib.muldiv(v2704, v5429, v5857);
        v5875 = v5877;
        }
      const v5878 = v5868[stdlib.checkedBigNumberify('./staker.rsh:244:27:array ref', stdlib.UInt_max, '1')];
      const v5879 = stdlib.add(v5878, v5875);
      const v5880 = [v5874, v5879];
      const v5881 = {
        rewards: v5880,
        stake: v5863
        };
      await stdlib.mapSet(map0, v3052, v5881);
      const v5882 = {
        newEveryoneStaked: v5857,
        newUserStaked: v5863
        };
      const v5883 = await txn1.getOutput('Staker_stake', 'v5882', ctc15, v5882);
      if (v1359) {
        stdlib.protect(ctc0, await interact.out(v5380, v5883), {
          at: './staker.rsh:236:11:application',
          fs: ['at ./staker.rsh:236:11:application call to [unknown function] (defined at: ./staker.rsh:236:11:function exp)', 'at ./staker.rsh:255:10:application call to "k" (defined at: ./staker.rsh:246:44:function exp)', 'at ./staker.rsh:246:44:application call to [unknown function] (defined at: ./staker.rsh:246:44:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      null;
      const v15497 = v2540;
      const v15499 = v2542;
      const v15500 = v2546;
      const v15501 = v5857;
      const v15502 = v3054;
      const v15503 = v2545;
      const v15504 = v5480;
      const v15505 = v2552;
      const v15507 = v2540 ? v5871 : false;
      if (v15507) {
        ;
        const v15548 = v5480[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        const v15549 = v15548[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        const v15509 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
        const v15510 = stdlib.le(v2521, v2545);
        const v15511 = v15510 ? v2521 : v2545;
        let v15512;
        const v15513 = stdlib.ge(v2546, v15511);
        if (v15513) {
          v15512 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v15514 = stdlib.sub(v15511, v2546);
          v15512 = v15514;
          }
        const v15515 = stdlib.mul(v15512, v2499);
        const v15516 = stdlib.add(v15509, v15515);
        const v15517 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
        const v15518 = stdlib.le(v15516, v15517);
        const v15519 = v15518 ? v15516 : v15517;
        const v15520 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
        let v15521;
        if (v15513) {
          v15521 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v15522 = stdlib.sub(v15511, v2546);
          v15521 = v15522;
          }
        const v15523 = stdlib.mul(v15521, v2501);
        const v15524 = stdlib.add(v15520, v15523);
        const v15525 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
        const v15526 = stdlib.le(v15524, v15525);
        const v15527 = v15526 ? v15524 : v15525;
        const v15528 = [v15519, v15527];
        return;
        }
      break;
      }
    case 'Staker_withdraw0_894': {
      const v5961 = v3053[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_withdraw4 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_894: ctc12,
    Any_halt0_894: ctc13,
    Any_nop0_894: ctc13,
    Staker_harvest0_894: ctc13,
    Staker_stake0_894: ctc11,
    Staker_withdraw0_894: ctc11
    });
  const ctc15 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v2883 = ctc.selfAddress();
  const v2885 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:260:34:application call to [unknown function] (defined at: ./staker.rsh:260:34:function exp)', 'at ./staker.rsh:134:19:application call to "runStaker_withdraw0_894" (defined at: ./staker.rsh:260:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v2886 = v2885[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2888 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2883), null);
  const v2890 = {
    rewards: v2538,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v2891 = stdlib.fromSome(v2888, v2890);
  const v2892 = v2891.stake;
  const v2893 = stdlib.le(v2886, v2892);
  stdlib.assert(v2893, {
    at: './staker.rsh:261:12:application',
    fs: ['at ./staker.rsh:260:34:application call to [unknown function] (defined at: ./staker.rsh:260:34:function exp)', 'at ./staker.rsh:134:19:application call to "runStaker_withdraw0_894" (defined at: ./staker.rsh:260:10:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v2899 = ['Staker_withdraw0_894', v2885];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2498, v2499, v2501, v2521, v2522, v2538, v2540, v2542, v2543, v2544, v2545, v2546, v2551, v2552, v2679, v2681, v2683, v2688, v2690, v2693, v2702, v2704, v2707, v2899],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:262:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:262:21:decimal', stdlib.UInt_max, '0'), v2476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
      
      switch (v3053[0]) {
        case 'Any_eject0_894': {
          const v3056 = v3053[1];
          
          break;
          }
        case 'Any_halt0_894': {
          const v3637 = v3053[1];
          
          break;
          }
        case 'Any_nop0_894': {
          const v4218 = v3053[1];
          
          break;
          }
        case 'Staker_harvest0_894': {
          const v4799 = v3053[1];
          
          break;
          }
        case 'Staker_stake0_894': {
          const v5380 = v3053[1];
          
          break;
          }
        case 'Staker_withdraw0_894': {
          const v5961 = v3053[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          const v6031 = v5961[stdlib.checkedBigNumberify('./staker.rsh:260:10:spread', stdlib.UInt_max, '0')];
          const v6032 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3052), null);
          const v6034 = {
            rewards: v2538,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6035 = stdlib.fromSome(v6032, v6034);
          const v6036 = v6035.stake;
          ;
          const v6053 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v6054 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
          const v6058 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
          const v6059 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
          const v6060 = [v6054, v6058, v6059];
          const v6061 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v6060);
          ;
          const v6490 = stdlib.sub(v2544, v6031);
          const v6491 = stdlib.sub(v6036, v6031);
          const v6496 = v6035.rewards;
          const v6500 = v6061[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
          const v6501 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '0')];
          const v6505 = stdlib.sub(v6501, v6031);
          const v6508 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
          const v6509 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '2')];
          const v6510 = [v6505, v6508, v6509];
          const v6511 = stdlib.Array_set(v6061, stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1'), v6510);
          sim_r.txns.push({
            kind: 'from',
            to: v3052,
            tok: v2476
            });
          const v6512 = v6496[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '0')];
          let v6513;
          const v6514 = stdlib.eq(v6490, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
          if (v6514) {
            v6513 = v2690;
            }
          else {
            const v6515 = stdlib.muldiv(v2690, v6031, v6490);
            v6513 = v6515;
            }
          let v6516;
          const v6517 = stdlib.ge(v6513, v6512);
          if (v6517) {
            v6516 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v6518 = stdlib.sub(v6512, v6513);
            v6516 = v6518;
            }
          const v6519 = v6496[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '1')];
          let v6520;
          if (v6514) {
            v6520 = v2704;
            }
          else {
            const v6522 = stdlib.muldiv(v2704, v6031, v6490);
            v6520 = v6522;
            }
          let v6523;
          const v6524 = stdlib.ge(v6520, v6519);
          if (v6524) {
            v6523 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v6525 = stdlib.sub(v6519, v6520);
            v6523 = v6525;
            }
          const v6526 = [v6516, v6523];
          const v6527 = {
            rewards: v6526,
            stake: v6491
            };
          await stdlib.simMapSet(sim_r, 0, v3052, v6527);
          const v6528 = {
            newEveryoneStaked: v6490,
            newUserStaked: v6491
            };
          const v6530 = await txn1.getOutput('Staker_withdraw', 'v6528', ctc15, v6528);
          
          null;
          const v15868 = v2540;
          const v15870 = v2542;
          const v15871 = v2546;
          const v15872 = v6490;
          const v15873 = v3054;
          const v15874 = v2545;
          const v15875 = v6511;
          const v15876 = v2552;
          const v15878 = v2540 ? v6514 : false;
          if (v15878) {
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: undefined /* Nothing */
              });
            const v15919 = v6511[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            const v15920 = v15919[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2473,
              tok: v2475
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2476
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2475
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v15880 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
            const v15881 = stdlib.le(v2521, v2545);
            const v15882 = v15881 ? v2521 : v2545;
            let v15883;
            const v15884 = stdlib.ge(v2546, v15882);
            if (v15884) {
              v15883 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15885 = stdlib.sub(v15882, v2546);
              v15883 = v15885;
              }
            const v15886 = stdlib.mul(v15883, v2499);
            const v15887 = stdlib.add(v15880, v15886);
            const v15888 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
            const v15889 = stdlib.le(v15887, v15888);
            const v15890 = v15889 ? v15887 : v15888;
            const v15891 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
            let v15892;
            if (v15884) {
              v15892 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15893 = stdlib.sub(v15882, v2546);
              v15892 = v15893;
              }
            const v15894 = stdlib.mul(v15892, v2501);
            const v15895 = stdlib.add(v15891, v15894);
            const v15896 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
            const v15897 = stdlib.le(v15895, v15896);
            const v15898 = v15897 ? v15895 : v15896;
            const v15899 = [v15890, v15898];
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3053], secs: v3055, time: v3054, didSend: v1359, from: v3052 } = txn1;
  switch (v3053[0]) {
    case 'Any_eject0_894': {
      const v3056 = v3053[1];
      return;
      break;
      }
    case 'Any_halt0_894': {
      const v3637 = v3053[1];
      return;
      break;
      }
    case 'Any_nop0_894': {
      const v4218 = v3053[1];
      return;
      break;
      }
    case 'Staker_harvest0_894': {
      const v4799 = v3053[1];
      return;
      break;
      }
    case 'Staker_stake0_894': {
      const v5380 = v3053[1];
      return;
      break;
      }
    case 'Staker_withdraw0_894': {
      const v5961 = v3053[1];
      undefined /* setApiDetails */;
      const v6031 = v5961[stdlib.checkedBigNumberify('./staker.rsh:260:10:spread', stdlib.UInt_max, '0')];
      const v6032 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3052), null);
      const v6034 = {
        rewards: v2538,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6035 = stdlib.fromSome(v6032, v6034);
      const v6036 = v6035.stake;
      const v6037 = stdlib.le(v6031, v6036);
      stdlib.assert(v6037, {
        at: './staker.rsh:261:12:application',
        fs: ['at ./staker.rsh:260:34:application call to [unknown function] (defined at: ./staker.rsh:260:34:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:260:34:function exp)', 'at ./staker.rsh:134:19:application call to [unknown function] (defined at: ./staker.rsh:134:19:function exp)', 'at ./staker.rsh:234:14:application call to [unknown function] (defined at: ./staker.rsh:234:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      ;
      const v6053 = v2551[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v6054 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '0')];
      const v6058 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1')];
      const v6059 = v6053[stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '2')];
      const v6060 = [v6054, v6058, v6059];
      const v6061 = stdlib.Array_set(v2551, stdlib.checkedBigNumberify('./staker.rsh:134:19:dot', stdlib.UInt_max, '1'), v6060);
      ;
      const v6490 = stdlib.sub(v2544, v6031);
      const v6491 = stdlib.sub(v6036, v6031);
      const v6496 = v6035.rewards;
      const v6500 = v6061[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
      const v6501 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '0')];
      const v6505 = stdlib.sub(v6501, v6031);
      const v6508 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1')];
      const v6509 = v6500[stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '2')];
      const v6510 = [v6505, v6508, v6509];
      const v6511 = stdlib.Array_set(v6061, stdlib.checkedBigNumberify('./staker.rsh:185:41:application', stdlib.UInt_max, '1'), v6510);
      ;
      const v6512 = v6496[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '0')];
      let v6513;
      const v6514 = stdlib.eq(v6490, stdlib.checkedBigNumberify('./staker.rsh:32:13:decimal', stdlib.UInt_max, '0'));
      if (v6514) {
        v6513 = v2690;
        }
      else {
        const v6515 = stdlib.muldiv(v2690, v6031, v6490);
        v6513 = v6515;
        }
      let v6516;
      const v6517 = stdlib.ge(v6513, v6512);
      if (v6517) {
        v6516 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v6518 = stdlib.sub(v6512, v6513);
        v6516 = v6518;
        }
      const v6519 = v6496[stdlib.checkedBigNumberify('./staker.rsh:184:50:array ref', stdlib.UInt_max, '1')];
      let v6520;
      if (v6514) {
        v6520 = v2704;
        }
      else {
        const v6522 = stdlib.muldiv(v2704, v6031, v6490);
        v6520 = v6522;
        }
      let v6523;
      const v6524 = stdlib.ge(v6520, v6519);
      if (v6524) {
        v6523 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v6525 = stdlib.sub(v6519, v6520);
        v6523 = v6525;
        }
      const v6526 = [v6516, v6523];
      const v6527 = {
        rewards: v6526,
        stake: v6491
        };
      await stdlib.mapSet(map0, v3052, v6527);
      const v6528 = {
        newEveryoneStaked: v6490,
        newUserStaked: v6491
        };
      const v6530 = await txn1.getOutput('Staker_withdraw', 'v6528', ctc15, v6528);
      if (v1359) {
        stdlib.protect(ctc0, await interact.out(v5961, v6530), {
          at: './staker.rsh:260:11:application',
          fs: ['at ./staker.rsh:260:11:application call to [unknown function] (defined at: ./staker.rsh:260:11:function exp)', 'at ./staker.rsh:264:10:application call to "k" (defined at: ./staker.rsh:262:42:function exp)', 'at ./staker.rsh:262:42:application call to [unknown function] (defined at: ./staker.rsh:262:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      null;
      const v15868 = v2540;
      const v15870 = v2542;
      const v15871 = v2546;
      const v15872 = v6490;
      const v15873 = v3054;
      const v15874 = v2545;
      const v15875 = v6511;
      const v15876 = v2552;
      const v15878 = v2540 ? v6514 : false;
      if (v15878) {
        ;
        const v15919 = v6511[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        const v15920 = v15919[stdlib.checkedBigNumberify('./staker.rsh:320:21:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        const v15880 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '0')];
        const v15881 = stdlib.le(v2521, v2545);
        const v15882 = v15881 ? v2521 : v2545;
        let v15883;
        const v15884 = stdlib.ge(v2546, v15882);
        if (v15884) {
          v15883 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v15885 = stdlib.sub(v15882, v2546);
          v15883 = v15885;
          }
        const v15886 = stdlib.mul(v15883, v2499);
        const v15887 = stdlib.add(v15880, v15886);
        const v15888 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '0')];
        const v15889 = stdlib.le(v15887, v15888);
        const v15890 = v15889 ? v15887 : v15888;
        const v15891 = v2707[stdlib.checkedBigNumberify('./staker.rsh:140:31:array ref', stdlib.UInt_max, '1')];
        let v15892;
        if (v15884) {
          v15892 = stdlib.checkedBigNumberify('./staker.rsh:27:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v15893 = stdlib.sub(v15882, v2546);
          v15892 = v15893;
          }
        const v15894 = stdlib.mul(v15892, v2501);
        const v15895 = stdlib.add(v15891, v15894);
        const v15896 = v2542[stdlib.checkedBigNumberify('./staker.rsh:141:27:array ref', stdlib.UInt_max, '1')];
        const v15897 = stdlib.le(v15895, v15896);
        const v15898 = v15897 ? v15895 : v15896;
        const v15899 = [v15890, v15898];
        return;
        }
      break;
      }
    }
  
  
  };
export async function Any_eject(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_eject expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_eject expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Any_eject4(ctcTop, interact);}
  };
export async function Any_halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Any_halt4(ctcTop, interact);}
  };
export async function Any_nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Any_nop4(ctcTop, interact);}
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Staker_harvest4(ctcTop, interact);}
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Staker_stake4(ctcTop, interact);}
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Staker_withdraw4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Any_eject(address,address)byte[0]`, `Any_halt()byte[0]`, `Any_nop()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`],
    pure: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,uint64),uint64,(uint64,uint64),uint64)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`],
    sigs: [`Any_eject(address,address)byte[0]`, `Any_halt()byte[0]`, `Any_nop()byte[0]`, `Info()((uint64,uint64,(uint64,uint64),uint64,uint64,uint64),uint64,(uint64,uint64),uint64)`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`]
    },
  appApproval: `BiAmAAgBBBBABTixAbkBjAKUAqQCrAL7AXCcAngDBhmni4+CCaaKqqQN8KndrQ27i4TVDpmE+e4J1Oa52Abqz/KFB9a1l7MIgAGVmOaXBoMCiwJYYGgCoI0GJgQBAAEBAAECIjUAMRhBEP4qZEkiWzUBSSNbNQIhBFs1CDEZJBJBAAoxACghFK9mQhDFNhoAF0lBA6siNQQkNQZJIRUMQACpSSEWDEAAV0khFwxAAD5JIRgMQAAlIRgSRDQBJRJEgRivNhoBiBCsSTX/VwEYNP8iVU1XEAg1B0IQhSEXEkQqNf8pNP9QIQWvUEIDcCEWEkQqNf8rNP9QIQWvUEIDXkkhGQxAABYhGRJENhoBNf+AAQQ0/1AhB69QQgNBIRUSRDQBJRJEKGQpZFArZFBJNQNXIDg0A1e5CFA0A1ehEFA0A1eACFA1B0IQFkkhGgxAAYxJIRsMQAFvSSEcDEABVCEcEkQ0ASUSRDYaAhc1/yhkKWRQK2RQSTUDSUpKSSEdWzX+IQhbNf0hCVs1/CEKWzX7IQtbNfohDFs1+SENWzX4NANXkBAjr1A2GgGID8ZJNfZXARg09iJVTUk19yEEWzX2NPdXABBJNfUiWzX0NP80/kk0/w5NNfM0/TTzD0k18UEABiI18kIABzTzNP0JNfI0AyEOWzTyNAMhD1sLCDXwNPs08Ek0+w5NNe80/CISSTXtQQAHNO817kIACjTvNPYdNPyXNe409DTuD0EABiI17EIABzTuNPQJNew09SNbNes08UEABiI16kIABzTzNP0JNeo0AyEQWzTqNAMhEVsLCDXpNPk06Uk0+Q5NNeg07UEABzToNedCAAo06DT2HTT8lzXnNOs05w9BAAYiNeZCAAc05zTrCTXmNPo07Ek0+g5NFjT4NOZJNPgOTRZQNQdCDq0hGxJENhoBNhoCUDX/KDT/UEIBliEaEkQ2GgE1/4ABBTT/UCEHr1BCAYBJIR4MQAAUIR4SRCo1/4ABAzT/UCEFr1BCAWWBnvLxcBJENAElEkQoZClkUCtkUEk1A0lKSkohCFs1/yEJWzX+IR9bNf0hICRYFzX8IQpbNfshC1s1+iEMWzX5IQ1bNfg0A1eQECOvUDYaAYgOKUk19lcBGDT2IlVNSTX3IQRbNfY091cAEEk19SJbNfQ0/EEABiI180IABzT9NP8JNfM0AyEOWzTzNAMhD1sLCDXyNPs08kk0+w5NNfE0/iISSTXvQQAHNPE18EIACjTxNPYdNP6XNfA09DTwD0EABiI17kIABzTwNPQJNe409SNbNe00/EEABiI17EIABzT9NP8JNew0AyEQWzTsNAMhEVsLCDXrNPk060k0+Q5NNeo070EABzTqNelCAAo06jT2HTT+lzXpNO006Q9BAAYiNehCAAc06TTtCTXoNPo07kk0+g5NFjT4NOhJNPgOTRZQNQdCDSE2GgIXNQQ2GgM2GgEXSSQMQAnKSSESDEAI7SESEkQlNAESRDQESSISTDQCEhFEKGQpZFArZFBJNQNJSkpKSkpKSkpKSkpKSVcAIDX/VyA4Nf4hIVs1/SEiWzX8ISNbNfshD1s1+iERWzX5IR1bNfiBiAFbNfdXkBA19legARc19VehEDX0IQhbNfMhCVs18oHBAVs18YHJAVs18FfRIjXvgfMBWzXuIQ5bNe0hH1s17CEgJFgXNeshCls16iELWzXpIRBbNeghDFs15yENWzXmgbQCIQRYNeVJNQU15IAERA2/lDTkULA05CJVSSESDEAEXUklDEACekkhBgxAAWshBhJENORXAQg14zTjFzXiNPYjr1AxAIgMHEk14FcBGDTgIlVNSTXhIQRbNeA04jTgDkQ071cRETXfNO9XABE031cACDTfVwgIUDTfVxABUFA13jTyNOIJNd004DTiCTXcNOFXABA12zTeVxERNdqxIrIBNOKyEiWyEDEAshQ0/LIRszTbIls12TTdIhJJNddBAAc06TXYQgAKNOk04h003Zc12DTYNNkPQQAGIjXWQgAHNNk02Ak11jTbI1s11TTXQQAHNOY11EIACjTmNOIdNN2XNdQ01DTVD0EABiI100IABzTVNNQJNdMxACgpNNYWNNMWUDTcFlBQZjTcFjTdFlA10oAIAAAAAAAAGYA00lCwNNI1B4AEYrJJVTEAUDTiFlA00lAxAFCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TTlNPQ08DTdMgY08TTeVwARNNoiWzTiCRY02lcICFA02lcQAVBQNO5CCMdINORXAQg14zTjFzXiNPA0+AxENO9XERE14TTiNPyICtE08jTiCDXgNPYjr1AxAIgKmUk13lcBGDTeIlVNSTXfIQRbNOIINd4031cAEDXdNOAiEkk120EABzTpNdxCAAo06TTiHTTglzXcNNtBAAc05jXaQgAKNOY04h004Jc12jEAKCk03SJbNNwIFjTdI1s02ggWUDTeFlBQZjTeFjTgFlA12YAIAAAAAAAAFvo02VCwNNk1B4AE2rxNjTEAUDTiFlA02VCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TTlNPQ08DTgMgY08TTvVwARNOEiWzTiCBY04VcICFA04VcQAVBQNO5CB79INO9XERE14zTvVwARNONXAAg041cICFA041cQAVBQNeI09iOvUDEAiAmYSTXgVwEYNOAiVU1JNeEhBFs14DThVwAQSTXfIls13jTrQQAGIjXdQgAHNOw08wk13TTtNN00+gsINdw06jTcSTTqDk012zTyIhJJNdlBAAc02zXaQgAKNNs04B008pc12jTeNNoPQQAGIjXYQgAHNNo03gk12DTpNNhJNOkOTTXXNN8jWzXWNOtBAAYiNdVCAAc07DTzCTXVNOg01TT5Cwg11DTnNNRJNOcOTTXTNNlBAAc00zXSQgAKNNM04B008pc10jTWNNIPQQAGIjXRQgAHNNI01gk10TTmNNFJNOYOTTXQsSKyATTXsggkshAxALIHszTiVwARNc+xIrIBNNCyEiWyEDEAshQ0/bIRszEAKCk03jTXCBY01jTQCBZQNOAWUFBmNOo01wkWNOc00AkWUDXONNcWNNAWUDTOUDXNgAgAAAAAAAAUfzTNULA0zTUHgARlfqQQMQBQNM1QMQBQsDT/NP40/TT8NPs0+jT5NPg09zT2NPU06TTXCRY05jTQCRZQNM408DTyMgY08TTPIls00AkWNM9XCAhQNM9XEAFQNOJXERFQNO401wlCBeJJJAxAAL9JISQMQABUSDTvVxERNeOACAAAAAAAABG6sCo1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU05TT0NPA08jIGNPE071cAETTjVwAINONXCAhQNONXEAFQUDTuQgWBSDEANP8SRDTwNPgPRDTyIhJENO9XERE144AIAAAAAAAAD2uwKjUHNP80/jT9NPw0+zT6NPk0+DT3NPYkNOU09DTwNPIyBjTxNO9XABE041cACDTjVwgIUDTjVxABUFA07kIFHUg05FcBQDXjsSKyASETshA0CLIYszTjVwAgNeI041cgIDXhMQA04hI08DT4DzTiNOESEBE0+yINNPA09w8QMQA0/xIQEUQ071cRETXgNO9XABE04FcACDTgVwgIUDTgVxABUFA134AIAAAAAAAADGWwKjUHNPYjr1A04ogGo0k13VcBGDTdIlVNSTXeIQRbNd003lcAEEk13CJbNds060EABiI12kIABzTsNPMJNdo07TTaNPoLCDXZNOo02Uk06g5NNdg08iISSTXWQQAHNNg110IACjTYNN0dNPKXNdc02zTXD0EABiI11UIABzTXNNsJNdU06TTVSTTpDk011DTcI1s10zTrQQAGIjXSQgAHNOw08wk10jToNNI0+QsINdE05zTRSTTnDk010DTWQQAHNNA1z0IACjTQNN0dNPKXNc800zTPD0EABiI1zkIABzTPNNMJNc405jTOSTTmDk01zbEisgE01LIIJLIQNOGyB7M031cAEUk1zCJbNM0JFjTMVwgIUDTMVxABUDTfVxERUDXLsSKyATTNshIlshA04bIUNP2yEbM02zTUCBY00zTNCBZQNN0WUDXKNOIoKTTKUGY06jTUCRY05zTNCRZQNck0yiEEWzXINPI0yAk1xzTISQk1xjTKVwAQNcU0y1cRETXEsSKyATTIshIlshA04bIUNPyyEbM0xSJbNcM0xyISSTXBQQAHNOk1wkIACjTpNMgdNMeXNcI0wjTDD0EABiI1wEIABzTDNMIJNcA0xSNbNb80wUEABzTmNb5CAAo05jTIHTTHlzW+NL40vw9BAAYiNb1CAAc0vzS+CTW9NOIoKTTAFjS9FlA0xhZQUGaABPITwsg04lA0yBZQNMYWNMcWUFA01BY0zRZQNMlQUDThULA0/zT+NP00/DT7NPo0+TT4NPc09jT1NOk01AkWNOY0zQkWUDTJNPA0xzIGNPE0y1cAETTEIls0yAkWNMRXCAhQNMRXEAFQUDTuNNQJQgIqJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/ISFbNf4hI1s1/VdwIjX8gaIBWzX7gbIBWzX6gcIBWzX5gASai5F0sDT6iAPsNPxXABE1+DT5NP6IA/Y0/zEAEkQ0/SEkCDQDgZoBWwhJNfc0A4GSAVsINfYhBK819TT/NANXIDg0/jQDISJbNPs0A4GqAVs0A4G6AVs09kk0+wg09SI09TT6FjT5FlA09yIyBjT9NPgiWzT5CBY0+FcICFA0+FcQAVA0/FcREVA0+kIBVEiBwJoMiANfsSKyASETshAishiABgYxADIJErIegAEGsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSVcAODX/IQdbNf4hBVs1/YAEZNJaDTT/UDT+FlA0/RZQsIERr0k1/ElQNfs0/jT9E0Q0+1cAETX6I680+lcICFA0+lcQAVA0+1cREVA1+SEliALYsSKyASKyEiWyEDIKshQ0/rIRszT5VxERNfg0+VcAESOvNPhXCAhQNPhXEAFQUDX3ISWIAqOxIrIBIrISJbIQMgqyFDT9shGzNP9XEBA19jT/gShbNfU0/4EgWzX0NP+BMFs18zT2IltJNfI09Qs18TT2I1tJNfA09Qs17zEANP9QNP4WUDT9FlAyBhZQNPdQNPUWUDT0FlA08xZQNPIWUDTxFlA08BZQNO8WUChLAVcAf2cpSwFXf0tnSCQ1ATIGNQJCAcA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TT3NPsiEhBBAFqxIrIBNP+yCCSyEDTtsgezsSKyATT+VwARIluyEiWyEDTtshQ077IRs7EisgEishIlshAyCbIVMgqyFDTwshGzsSKyASKyEiWyEDIJshUyCrIUNO+yEbNCAQk0+CJbNew0/TT0STT9Dk016zT6NOsPSTXpQQAGIjXqQgAHNOs0+gk16jTsNOo08gsINeg0+SJbSTXnNOhJNOcOTTXmNPgjWzXlNOlBAAYiNeRCAAc06zT6CTXkNOU05DTzCwg14zT5I1tJNeI040k04g5NNeE05hY04RZQNeA07TTuUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1FlA09lA09xZRBwhQNPlQNPoWUDT7FlA0/BZQNP0WUDT+UDT/FlA07BZQNOsWUDTpFlEHCFA05xZQNOYWUDTlFlA04hZQNOEWUDTgUChLAVcAf2cpSwFXf39nK0sBV/5GZ0glNQEyBjUCQgAtMRkhBhJEsSKyASETshA0CLIYIQayGbOxIrIBIrIIJLIQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iNQEiNQIiNQhC/7xJMRhhQAAFSCEUr4koYok0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: {
    api_Any_eject: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 3,
  stateSize: 324,
  unsupported: [],
  version: 10,
  warnings: [`API api_Any_eject may use up to 9 transaction references, but the limit is 8. API api_Any_eject starts at /app/staker.rsh:134:19:application.`, `Step 3 may use up to 9 transaction references, but the limit is 8. Step 3 starts at /app/staker.rsh:134:19:dot.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                    "name": "startDelay",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "graceDuration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v2474",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2475",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2476",
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
        "internalType": "struct T20",
        "name": "v2",
        "type": "tuple"
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
        "internalType": "struct T21",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      }
    ],
    "name": "Eject",
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
        "internalType": "struct T21",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v2",
        "type": "address"
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
        "name": "v2",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v3",
        "type": "address"
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
                    "name": "startDelay",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "graceDuration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v2474",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2475",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2476",
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
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_Any_eject0_894",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_894",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_nop0_894",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_894",
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
                    "internalType": "struct T18",
                    "name": "_Staker_stake0_894",
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
                    "internalType": "struct T18",
                    "name": "_Staker_withdraw0_894",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v3053",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3173",
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
    "name": "_reach_oe_v3947",
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
    "name": "_reach_oe_v4538",
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
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5247",
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
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5882",
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
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v6528",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      }
    ],
    "name": "Any_eject",
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
    "name": "Any_nop",
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
                "name": "startDelay",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "graceDuration",
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
        "internalType": "struct T21",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_Any_eject0_894",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_894",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_nop0_894",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_894",
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
                    "internalType": "struct T18",
                    "name": "_Staker_stake0_894",
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
                    "internalType": "struct T18",
                    "name": "_Staker_withdraw0_894",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v3053",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
        "internalType": "address payable",
        "name": "v15922",
        "type": "address"
      }
    ],
    "name": "rewardsAvailable",
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
        "name": "v15924",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v15925",
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
        "name": "v15927",
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
  Bytecode: `0x608060405260405162005dd838038062005dd883398101604081905262000026916200066f565b60008055436003556200003862000366565b7f63f61576939462def82672e85b10ca155e1e27c2e2a115dfa28c64444d95ee5533836040516200006b929190620007dd565b60405180910390a180516000908190528151602090810182905282516040908101929092528251818401805191909152835190518201528381015191820151910151620000d8916001600160a01b03918216911614620000cd576001620000d0565b60005b600b620002b9565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011a9290620002e3565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001609190600190620002e3565b60a0820152620001733415600c620002b9565b6020820151516080810151604090910151516200019191906200085c565b60c082015260208083015151608081015160409091015190910151620001b891906200085c565b60e0820152620001c7620003db565b33815260208084018051518284015280518201516001600160a01b03908116604080860191909152825181015190911660608086019190915243608080870182905260a080890151818901528551519091015160c0808901919091528551519093015160e0808901919091528551519091015161010088015284515184015151610120880152918701516101408701529251518201518401516101608601528501516101808501526001600081905591909155516200028991839101620008c4565b60405160208183030381529060405260029080519060200190620002af9291906200045c565b50505050620009ed565b81620002df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002ed620004eb565b60005b600281101562000343578481600281106200030f576200030f62000830565b602002015182826002811062000329576200032962000830565b6020020152806200033a8162000992565b915050620002f0565b50818184600281106200035a576200035a62000830565b60200201529392505050565b6040518061010001604052806200037c6200051b565b81526020016200038b620004eb565b81526020016200039a6200051b565b8152602001620003a9620004eb565b8152602001620003b86200051b565b8152602001620003c7620004eb565b815260200160008152602001600081525090565b604051806101a0016040528060006001600160a01b03168152602001620004016200053e565b815260006020820181905260408201819052606082015260800162000425620004eb565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8280546200046a90620009b0565b90600052602060002090601f0160209004810192826200048e5760008555620004d9565b82601f10620004a957805160ff1916838001178555620004d9565b82800160010185558215620004d9579182015b82811115620004d9578251825591602001919060010190620004bc565b50620004e7929150620005a2565b5090565b60405180604001604052806002905b620005046200051b565b815260200190600190039081620004fa5790505090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200162000587604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081525090565b5b80821115620004e75760008155600101620005a3565b604080519081016001600160401b0381118282101715620005ea57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620005ea57634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620005ea57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200066a57600080fd5b919050565b60008183036101408112156200068457600080fd5b6200068e620005b9565b83518152601f19820161012080821215620006a857600080fd5b620006b2620005f0565b60e0831215620006c157600080fd5b620006cb62000621565b9250620006db6020880162000652565b8352620006eb6040880162000652565b60208401526040605f19860112156200070357600080fd5b6200070d620005b9565b9450606087015185526080870151602086015284604084015260a0870151606084015260c0870151608084015260e087015160a084015282815262000756610100880162000652565b60208201526200076882880162000652565b60408201526020840152509095945050505050565b6001600160a01b03169052565b60018060a01b0380825116835280602083015116602084015250604081015180516040840152602081015160608401525060608101516080830152608081015160a083015260a081015160c08301525050565b60006101608201905060018060a01b0380851683528351602084015260208401516200080e6040850182516200078a565b6020810151821661012085015260400151166101409092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161562000879576200087962000846565b500290565b8060005b6002811015620008be57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000882565b50505050565b600061030082019050620008da8284516200077d565b6020830151620008ee60208401826200078a565b50604083015161010062000905818501836200077d565b606085015191506101206200091d818601846200077d565b60808601519250610140838187015260a0870151935061016062000944818801866200087e565b60c088015161022088015260e088015161024088015292870151610260870152908601516102808601528501516102a08501528401516102c084015250610180909201516102e09091015290565b6000600019821415620009a957620009a962000846565b5060010190565b600181811c90821680620009c557607f821691505b60208210811415620009e757634e487b7160e01b600052602260045260246000fd5b50919050565b6153db80620009fd6000396000f3fe6080604052600436106100c45760003560e01c80631e93b0f1146100cd5780632c10a159146100f15780632f0371fe146101045780633bc5b7bf146101175780634012e02e146101445780636f0fe5c91461016657806383230757146101935780638521eb92146101a85780638608c1c5146101c05780638712236d146101e057806398807d84146101f3578063ab53f2c614610213578063b0c1f58a14610236578063c2e7f44e14610249578063e28095491461025c578063f6d409951461027157005b366100cb57005b005b3480156100d957600080fd5b506003545b6040519081526020015b60405180910390f35b6100cb6100ff36600461461a565b610279565b6100cb610112366004614632565b61029d565b34801561012357600080fd5b5061013761013236600461465a565b6102bd565b6040516100e8919061469c565b34801561015057600080fd5b506101596102d4565b6040516100e89190614743565b34801561017257600080fd5b50610186610181366004614786565b61048e565b6040516100e891906147b2565b34801561019f57600080fd5b506001546100de565b6101b061090b565b60405190151581526020016100e8565b3480156101cc57600080fd5b506101866101db36600461465a565b61095b565b6101866101ee3660046147c0565b610db2565b3480156101ff57600080fd5b506100de61020e36600461465a565b610e10565b34801561021f57600080fd5b50610228610ff4565b6040516100e8929190614805565b6101866102443660046147c0565b611091565b6101b061025736600461483f565b6110ef565b610264611157565b6040516100e89190614895565b6101b06111aa565b610281613c0a565b610299610293368490038401846149a6565b826111f7565b5050565b6102a5613c0a565b6102996102b736849003840184614a61565b82611526565b6102c5613c52565b6102ce826134da565b92915050565b6102dc613c71565b60016000541415610397576000600280546102f690614b35565b80601f016020809104026020016040519081016040528092919081815260200182805461032290614b35565b801561036f5780601f106103445761010080835404028352916020019161036f565b820191906000526020600020905b81548152906001019060200180831161035257829003601f168201915b50505050508060200190518101906103879190614ccc565b9050610395600060076135bf565b505b6004600054141561047f576000600280546103b190614b35565b80601f01602080910402602001604051908101604052809291908181526020018280546103dd90614b35565b801561042a5780601f106103ff5761010080835404028352916020019161042a565b820191906000526020600020905b81548152906001019060200180831161040d57829003601f168201915b50505050508060200190518101906104429190614da1565b905061044c613ca5565b6020808301518251526101a083015182519091015261016082015181516040015260e09091015181516060015251919050565b61048b600060076135bf565b90565b610496613cb8565b60016000541415610551576000600280546104b090614b35565b80601f01602080910402602001604051908101604052809291908181526020018280546104dc90614b35565b80156105295780601f106104fe57610100808354040283529160200191610529565b820191906000526020600020905b81548152906001019060200180831161050c57829003601f168201915b50505050508060200190518101906105419190614ccc565b905061054f600060096135bf565b505b600460005414156108ff5760006002805461056b90614b35565b80601f016020809104026020016040519081016040528092919081815260200182805461059790614b35565b80156105e45780601f106105b9576101008083540402835291602001916105e4565b820191906000526020600020905b8154815290600101906020018083116105c757829003601f168201915b50505050508060200190518101906105fc9190614da1565b9050610606613cd2565b610120820151815152805160006020909101526001610624866134da565b51600181111561063657610636614677565b14610642578051610650565b61064b856134da565b604001515b602082015260e0820151841015610667578361066d565b8160e001515b60408201819052610180830151108015608083015261069257600060608201526106ad565b81610180015181604001516106a79190614f5f565b60608201525b8160a0015181606001516106c19190614f76565b8261024001516106d19190614f95565b60a082018190526102a083015110156106ef57816102a001516106f5565b8060a001515b60c08201526101a08201511561010082018190521561071d5760c081015160e082015261074b565b816101a001518160200151602001518260c0015161073b9190614f76565b6107459190614fad565b60e08201525b60e08101516020820151515110610769576000610120820152610786565b6020810151515160e082015161077f9190614f5f565b6101208201525b80608001511561079d5760006101408201526107b9565b81610180015181604001516107b29190614f5f565b6101408201525b8160c001518161014001516107ce9190614f76565b826102e001516107de9190614f95565b610160820181905261030083015110156107fd57816103000151610804565b8061016001515b61018082015261010081015115610826576101808101516101a0820152610856565b816101a001518160200151602001518261018001516108459190614f76565b61084f9190614fad565b6101a08201525b6101a0810151602080830151510151106108775760006101c0820152610897565b6020808201515101516101a08201516108909190614f5f565b6101c08201525b816102c0015181610120015111156108b457816102c001516108bb565b8061012001515b6101e0820151526103208201516101c082015111156108df578161032001516108e6565b806101c001515b6101e09091018051602001919091525191506102ce9050565b6102ce600060096135bf565b6000610915613c0a565b61091d613d5f565b610925613d79565b6000604082015260018181905250604080516020808201909252828152908301526109508284611526565b505060200151919050565b610963613cb8565b60016000541415610a1e5760006002805461097d90614b35565b80601f01602080910402602001604051908101604052809291908181526020018280546109a990614b35565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190614ccc565b9050610a1c600060086135bf565b505b60046000541415610da157600060028054610a3890614b35565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6490614b35565b8015610ab15780601f10610a8657610100808354040283529160200191610ab1565b820191906000526020600020905b815481529060010190602001808311610a9457829003601f168201915b5050505050806020019051810190610ac99190614da1565b9050610ad3613dc3565b610120820151815152805160006020909101526001610af1856134da565b516001811115610b0357610b03614677565b14610b0f578051610b1d565b610b18846134da565b604001515b602082015261028082015115610b395760006040820152610b55565b816101800151826102600151610b4f9190614f5f565b60408201525b8160a001518160400151610b699190614f76565b826102400151610b799190614f95565b606082018190526102a08301511015610b9757816102a00151610b9d565b80606001515b60808201526101a08201511560c0820181905215610bc457608081015160a0820152610bf2565b816101a001518160200151602001518260800151610be29190614f76565b610bec9190614fad565b60a08201525b60a08101516020820151515110610c0f57600060e0820152610c2b565b6020810151515160a0820151610c259190614f5f565b60e08201525b81610280015115610c43576000610100820152610c60565b816101800151826102600151610c599190614f5f565b6101008201525b8160c00151816101000151610c759190614f76565b826102e00151610c859190614f95565b61012082018190526103008301511015610ca457816103000151610cab565b8061012001515b61014082015260c081015115610ccc57610140810151610160820152610cfc565b816101a00151816020015160200151826101400151610ceb9190614f76565b610cf59190614fad565b6101608201525b61016081015160208083015151015110610d1d576000610180820152610d3d565b602080820151510151610160820151610d369190614f5f565b6101808201525b816102c001518160e001511115610d5957816102c00151610d5f565b8060e001515b6101a0820151526103208201516101808201511115610d8357816103200151610d8a565b8061018001515b6101a0909101805160200191909152519392505050565b610dad600060086135bf565b919050565b610dba613cb8565b610dc2613c0a565b610dca613d5f565b610dd2613d79565b604080516020808201835287825260c0840191909152600583528151808201909252828252830152610e048284611526565b505060a0015192915050565b600060016000541415610ecd57600060028054610e2c90614b35565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5890614b35565b8015610ea55780601f10610e7a57610100808354040283529160200191610ea5565b820191906000526020600020905b815481529060010190602001808311610e8857829003601f168201915b5050505050806020019051810190610ebd9190614ccc565b9050610ecb6000600a6135bf565b505b60046000541415610fe857600060028054610ee790614b35565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1390614b35565b8015610f605780601f10610f3557610100808354040283529160200191610f60565b820191906000526020600020905b815481529060010190602001808311610f4357829003601f168201915b5050505050806020019051810190610f789190614da1565b9050610f82613e40565b80516000908190528151602090810182905282518184018051919091525101526001610fad856134da565b516001811115610fbf57610fbf614677565b14610fce578060200151610fdc565b610fd7846134da565b604001515b60200151949350505050565b610dad6000600a6135bf565b60006060600054600280805461100990614b35565b80601f016020809104026020016040519081016040528092919081815260200182805461103590614b35565b80156110825780601f1061105757610100808354040283529160200191611082565b820191906000526020600020905b81548152906001019060200180831161106557829003601f168201915b50505050509050915091509091565b611099613cb8565b6110a1613c0a565b6110a9613d5f565b6110b1613d79565b604080516020808201835287825260a08401919091526004835281518082019092528282528301526110e38284611526565b50506080015192915050565b60006110f9613c0a565b611101613d5f565b611109613d79565b6040805180820182526001600160a01b03888116825287166020808301919091528381019190915260008352815180820190925282825283015261114d8284611526565b5050519392505050565b61115f613e60565b611167613c0a565b61116f613d5f565b611177613d79565b60006080820152600381526040805160208082019092528281529083015261119f8284611526565b505060600151919050565b60006111b4613c0a565b6111bc613d5f565b6111c4613d79565b6000606082015260028152604080516020808201909252828152908301526111ec8284611526565b505060400151919050565b61120760016000541460106135bf565b815161122290158061121b57508251600154145b60116135bf565b60008080556002805461123490614b35565b80601f016020809104026020016040519081016040528092919081815260200182805461126090614b35565b80156112ad5780601f10611282576101008083540402835291602001916112ad565b820191906000526020600020905b81548152906001019060200180831161129057829003601f168201915b50505050508060200190518101906112c59190614ccc565b90506112cf613e73565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16113288261014001513414600d6135bf565b61018082015160a0830151515161133f9190614f95565b81515260a0820180515160209081015183519091015251516040908101518251901515908201528201516101808301516113869161137f913391906135e5565b600e6135bf565b815161139e906001600160a01b03163314600f6135bf565b8160e00151600283608001516113b49190614f95565b6113be9190614f95565b6020820181905260c08301516113d391614f95565b6040820152606081018051600090819052905160209081019190915261014083015160808301805191909152610180840151905190910152611413613ea1565b825181516001600160a01b0391821690526020808501518351909101526040808501518351908316908201526060808601518451931692019190915261010084018051835160800152610120850151835160a00152610160850151835160c001529083018051835160e001529051905161148d9190614f95565b8151610100015260608083018051835161012001526020808401805160009081905292518151830152608080870151825160400152918601518151909401939093528251810182905282514360a09182015290860151925160c001929092529084015183516114fc92906135fd565b60208201805160e001919091526101408401519051610100015261151f81613671565b5050505050565b61153660046000541460246135bf565b815161155190158061154a57508251600154145b60256135bf565b60008080556002805461156390614b35565b80601f016020809104026020016040519081016040528092919081815260200182805461158f90614b35565b80156115dc5780601f106115b1576101008083540402835291602001916115dc565b820191906000526020600020905b8154815290600101906020018083116115bf57829003601f168201915b50505050508060200190518101906115f49190614da1565b90506115fe613ec1565b7f9d5d94f6a559687d9189e029c6c54e4532bbc6694288e63cc749c45f30568d68338560405161162f929190614fe5565b60405180910390a1600060208501515151600581111561165157611651614677565b14156120b757602084810151510151808252516116fb906001600160a01b031633146116ab578260e00151836101e00151101561168f5760006116ae565b8151602081015190516001600160a01b039081169116146116ae565b60015b6116f15760008360800151116116c55760006116d4565b826101000151836101e0015110155b6116df5760006116f4565b82516001600160a01b031633146116f4565b60015b60126135bf565b611707341560136135bf565b61020082018051602090810151518382018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161175091906001906135fd565b816040018190525061177261176b33846060015160006135e5565b60146135bf565b604051600081527f249435be0efb9bff96fb6f3922bf41b07fa0e8da356b92996d7774927b0e47869060200160405180910390a1600080845261012083015160608301805191909152516020015260018151516117ce906134da565b5160018111156117e0576117e0614677565b146117ef578060600151611800565b8051516117fb906134da565b604001515b60808201526102808201511561181c57600060a0820152611838565b8161018001518261026001516118329190614f5f565b60a08201525b8160a001518160a0015161184c9190614f76565b82610240015161185c9190614f95565b60c082018190526102a0830151101561187a57816102a00151611880565b8060c001515b60e08201526101a0820151156101208201819052156118a95760e08101516101008201526118d8565b816101a001518160800151602001518260e001516118c79190614f76565b6118d19190614fad565b6101008201525b61010081015160808201515151106118f7576000610140820152611915565b6080810151515161010082015161190e9190614f5f565b6101408201525b816102c00151816101400151111561193257816102c00151611939565b8061014001515b61016082015261028082015115611957576000610180820152611974565b81610180015182610260015161196d9190614f5f565b6101808201525b8160c001518161018001516119899190614f76565b826102e001516119999190614f95565b6101a0820181905261030083015110156119b8578161030001516119bf565b806101a001515b6101c0820152610120810151156119e1576101c08101516101e0820152611a11565b816101a00151816080015160200151826101c00151611a009190614f76565b611a0a9190614fad565b6101e08201525b6101e08101516080820151516020015110611a33576000610200820152611a54565b608081015151602001516101e0820151611a4d9190614f5f565b6102008201525b8161032001518161020001511115611a7157816103200151611a78565b8061020001515b61022082019081526101608201805161024084018051919091529151915160209081019290925282519091015190516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611add573d6000803e3d6000fd5b5061022081015160408201515151611af59190614f5f565b610260820180519190915260408083018051516020908101518451909101528051518201518351901515920191909152519051611b3591906000906135fd565b6102808201526040820151815160200151610220830151611b57929190613a0b565b61016081015160808201515151611b6e9190614f95565b6102a08201515261022081015160808201515160200151611b8f9190614f95565b6102a08281018051602090810193909352516102c08401805191909152608084015183015181518401528351516001600160a01b039081166000908152600485526040808220805460ff1916600190811790915593518751519093168252902081518051938201939093559184015160028301559092015160039092019190915561016082015190830151611c249190614f5f565b6102e082015152610220810151610300830151611c419190614f5f565b6102e0820180516020908101929092526102408301516103008401805191909152905190518201526102c082015101516101a0830151611c819190614f5f565b6103208201526102c081015160200151611c9b9080614f5f565b6103408201526102c0810151602001516102808201516001602002015151611cc39190614f5f565b610360820180519190915261028082018051602090810151810151835182015290518101516040908101519251921515920191909152606083015182518201516102c084015190920151611d179290613a0b565b610320810151156103a0820181905215611d3c576102c0820151610380820152611d6d565b806103200151816102c0015160200151836102c00151611d5c9190614f76565b611d669190614fad565b6103808201525b6102c0810151515161038082015110611d8d5760006103c0820152611dac565b6103808101516102c08201515151611da59190614f5f565b6103c08201525b806103a0015115611dc8576103208201516103e0820152611df9565b806103200151816102c0015160200151836103200151611de89190614f76565b611df29190614fad565b6103e08201525b6102c081015151602001516103e082015110611e1c576000610400820152611e3e565b6103e08101516102c08201515160200151611e379190614f5f565b6104008201525b6103c081015161042082018051919091526104008201518151602090810191909152905161044083018051919091526103408301805182518401528351516001600160a01b039081166000908152600485526040808220805460ff1916600190811790915594518751519093168252908190208251805195820195909555938501516002850155908401516003909301929092555161046084018051919091526103208401518151840152835180516102c08601518501519251610300870151929095015193517fbc6287d05f27343f7d3ad6b8b81a7e11c37f68abba3f452ef69046d1f8322d6595611f37959294939092909161508d565b60405180910390a1806101600151826102c00151611f559190614f5f565b61048082015152610220810151610320830151611f729190614f5f565b61048082015160200152611f84613ea1565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526104808901518151909601959095526102e08801518551909401939093526101e08801518451909501949094526103208601518351909101528151439301929092526101c085015190519091015261028082015161036083015161207f91906001906135fd565b602082015160e0015261016082015161022084015161209e9190614f5f565b602082015161010001526120b181613671565b506134d4565b60016020850151515160058111156120d1576120d1614677565b14156122d55781516120ef906001600160a01b0316331460156135bf565b6121068260e00151836101e00151101560166135bf565b6121196000836101a001511460176135bf565b612125341560186135bf565b61020082018051602090810151516104a0840180519190915282518201518201518151830152915101516040908101519151911515910152606082015161217a9061217390339060006135e5565b60196135bf565b604051600081527f5024befe63c2a09e8f7534a3912b9c456c19967a45f7fb89480d1be8422f8e719060200160405180910390a1600060208401526121bd613ea1565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015284870180516001908190526103408b01518251909701969096526101608a01518151909501949094526101e08901518451909601959095526101a08801518351909201919091528151439101526101c08601519051909201919091526102008401516104a08401516122b292906135fd565b60208201805160e00191909152610220840151905161010001526120b181613671565b60026020850151515160058111156122ef576122ef614677565b1415612494576123013415601a6135bf565b61020082018051602090810151516104c084018051919091528251820151820151815183015291510151604090810151915191151591015260608201516123569061234f90339060006135e5565b601b6135bf565b604051600081527f6ee22b9d071eb622944111858245e47df1791541a08ffb03c6ce315a997ec7679060200160405180910390a160006040840152612399613ea1565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526103408a01518151909601959095526101608901518551909401939093526101e08801518451909501949094526101a08701518351909101528151439301929092526101c08501519051909101526102008301516104c08301516122b291906001906135fd565b60036020850151515160058111156124ae576124ae614677565b1415612b97576124c03415601c6135bf565b61020082018051602090810151516104e084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161250b91906001906135fd565b81610500018190525061252e61252733846060015160006135e5565b601d6135bf565b61012082015161052082018051919091525160006020909101526001612553336134da565b51600181111561256557612565614677565b1461257557806105200151612583565b61257e336134da565b604001515b610540820152610280820151156125a15760006105608201526125be565b8161018001518261026001516125b79190614f5f565b6105608201525b8160a001518161056001516125d39190614f76565b8261024001516125e39190614f95565b61058082018190526102a0830151101561260257816102a00151612609565b8061058001515b6105a08201526101a0820151156105e0820181905215612634576105a08101516105c0820152612665565b816101a0015181610540015160200151826105a001516126549190614f76565b61265e9190614fad565b6105c08201525b6105c08101516105408201515151106126855760006106008201526126a4565b61054081015151516105c082015161269d9190614f5f565b6106008201525b816102c0015181610600015111156126c157816102c001516126c8565b8061060001515b610620820152610280820151156126e6576000610640820152612703565b8161018001518261026001516126fc9190614f5f565b6106408201525b8160c001518161064001516127189190614f76565b826102e001516127289190614f95565b610660820181905261030083015110156127475781610300015161274e565b8061066001515b6106808201526105e081015115612770576106808101516106a08201526127a1565b816101a00151816105400151602001518261068001516127909190614f76565b61279a9190614fad565b6106a08201525b6106a08101516105408201515160200151106127c45760006106c08201526127e6565b61054081015151602001516106a08201516127df9190614f5f565b6106c08201525b816103200151816106c0015111156128035781610320015161280a565b806106c001515b6106e08201908152610620820180516107008401805191909152915191516020019190915251604051339180156108fc02916000818181858888f1935050505015801561285b573d6000803e3d6000fd5b506106e081015161050082015151516128749190614f5f565b6107208201805191909152610500820180515160209081015183519091015251516040908101519151911515918101919091528201516106e08201516128bc91903390613a0b565b61062081015161054082015151516128d49190614f95565b610740820151526106e081015161054082015151602001516128f69190614f95565b6107408201805160209081019290925251610760830180519190915261054083015182015181518301523360009081526004835260409020805460ff191660019081178255915180518051938301939093559183015160028201559101516003909101556106208101516102a08301516129709190614f5f565b610780820151526106e081015161030083015161298d9190614f5f565b610780820180516020908101929092526107008301516107a084018051919091529051815190920191909152516040517fd692645f2c9878e909e55cad79b462c4c8f21868d156065ca9622b40420627e8916129e891614895565b60405180910390a16107a0810180516060850152516040517fbad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b91612a309133919082906150d5565b60405180910390a1806106200151826102c00151612a4e9190614f5f565b6107c0820151526106e0810151610320830151612a6b9190614f5f565b6107c082015160200152612a7d613ea1565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526107c08901518151909601959095526107808801518551909401939093526101e08801518451909501949094526101a08701518351909101528151439301929092526101c0850151905190910152610500820151610720830151612b7891906000906135fd565b602082015160e0015261062082015161022084015161209e9190614f5f565b6004602085015151516005811115612bb157612bb1614677565b1415612fd35760208401515160a001516107e082015260e08201516101e0830151612bde9111601e6135bf565b612bea3415601f6135bf565b6107e0810151516102008301516020015151612c069190614f95565b610800820180519190915261020083018051602090810151810151835182015290510151604090810151915191151591015260608201516107e082015151612c5b91612c54913391906135e5565b60206135bf565b6107e0810151516101a0830151612c729190614f95565b61082082015261012082015161084082018051919091525160006020909101526001612c9d336134da565b516001811115612caf57612caf614677565b14612cbf57806108400151612ccd565b612cc8336134da565b604001515b61086082018190526107e082015151602090910151612cec9190614f95565b610880820152610820810151156108c0820181905215612d17576102c08201516108a0820152612d45565b6108208101516107e0820151516102c0840151612d349190614f76565b612d3e9190614fad565b6108a08201525b806108c0015115612d61576103208201516108e0820152612d8f565b6108208101516107e082015151610320840151612d7e9190614f76565b612d889190614fad565b6108e08201525b6108a08101516108608201515151612da79190614f95565b610900820151526108e08101516108608201515160200151612dc99190614f95565b6109008201805160209081019290925251610920830180519190915261088083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516109408401805191909152610820840151815190930192909252905190517f897be16787001dfc12f4ec25ed3db155c9b1d43e5527dfc34d980f30565f1add91612e7b916147b2565b60405180910390a16109408101805160808501526107e08201515190516040517fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec92612ec8923392615105565b60405180910390a1612ed8613ea1565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526103408a01518151909601959095526101608901518551909401939093526101e08801518451909501949094526108208601518351909101528151439301929092526101c08501519051909101526102008301516108008301516122b291906001906135fd565b6005602085015151516005811115612fed57612fed614677565b14156134d4576020808501515160c0015161096083015261012083015161098083018051919091525160009101526001613026336134da565b51600181111561303857613038614677565b1461304857806109800151613056565b613051336134da565b604001515b6109a08201819052602001516109608201515161307691101560216135bf565b613082341560226135bf565b61020082018051602090810151516109c08401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516130cd91906001906135fd565b816109e001819052506130f06130e933846060015160006135e5565b60236135bf565b610960810151516101a08301516131079190614f5f565b610a00820152610960810151516109a0820151602001516131289190614f5f565b610a20820152610960810151516109e0820151602001515161314a9190614f5f565b610a4082018051919091526109e082018051602090810151810151835182015290510151604090810151915191151591015260608201516109608201515161319491903390613a0b565b610a0081015115610a808201819052156131b9576102c0820151610a608201526131e7565b610a00810151610960820151516102c08401516131d69190614f76565b6131e09190614fad565b610a608201525b6109a08101515151610a6082015110613207576000610aa0820152613226565b610a608101516109a0820151515161321f9190614f5f565b610aa08201525b80610a8001511561324257610320820151610ac0820152613270565b610a008101516109608201515161032084015161325f9190614f76565b6132699190614fad565b610ac08201525b6109a08101515160200151610ac082015110613293576000610ae08201526132b5565b610ac08101516109a082015151602001516132ae9190614f5f565b610ae08201525b610aa0810151610b008201805191909152610ae082015181516020908101919091529051610b208301805191909152610a2083018051825184015233600090815260048452604090819020805460ff191660019081178255935180518051958301959095559385015160028201559284015160039093019290925551610b408401805191909152610a00840151815190930192909252905190517f72bb87bec291e71917756c6b183150c60f8de04f6e22702df25cd526726821169161337a916147b2565b60405180910390a1610b408101805160a08501526109608201515190516040517f54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c650926133c99233928390615131565b60405180910390a16133d9613ea1565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526103408a01518151909601959095526101608901518551909401939093526101e0880151845190950194909452610a008601518351909101528151439301929092526101c08501519051909101526109e0820151610a408301516122b291906001906135fd565b50505050565b6134e2613c52565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561351157613511614677565b14156135b0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561355257613552614677565b600181111561356357613563614677565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b60008082526020820152919050565b816102995760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006135f383853085613a24565b90505b9392505050565b613605614256565b60005b60028110156136515784816002811061362357613623614fcf565b602002015182826002811061363a5761363a614fcf565b60200201528061364981615169565b915050613608565b508181846002811061366557613665614fcf565b60200201529392505050565b613679614283565b60208201515161368a576000613695565b602082015160800151155b1561371357815151602083015161010001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156136dd573d6000803e3d6000fd5b50815160408101519051602084015160e0015151516136fd929190613a0b565b60008080556001819055610299906002906142d1565b602082015160c00151825160e00151111561373657816020015160c0015161373d565b815160e001515b8082526020830151606001511080156040830152613761576000602082015261377c565b60208201516060015181516137769190614f5f565b60208201525b815160a0015160208201516137919190614f76565b6020808401510151516137a49190614f95565b606082018190526020830151604001515110156137ca57602082015160400151516137d0565b80606001515b60808201526040810151156137eb57600060a0820152613806565b60208201516060015181516138009190614f5f565b60a08201525b815160c0015160a082015161381b9190614f76565b826020015160200151602001516138329190614f95565b60c08201819052602080840151604001510151101561385d5781602001516040015160200151613863565b8060c001515b60e0820190815260808201516101008301805191909152905190516020015261388a61430e565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015181860152865160a09081015181870152875160c09081015181880152885160e09081015181890152895161010090810151818a01528a5161012090810151908a0152868b0180515115156101408b015280518701516101608b01528051909801516101808a015287518501516101a08a01528751909301516101c08901528651909101516101e08801528551810151610200880152855182015161022088015285518501515161024088015287516102608801528784015115156102808801528551840151516102a0880152918701516102c087015284518401518401516102e087015293518201518301516103008601528501516103208501529184015161034084015260046000554360015590516139e7918391016151c2565b604051602081830303815290604052600290805190602001906134d492919061440d565b613a16838383613afe565b613a1f57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613a8b9161536c565b60006040518083038185875af1925050503d8060008114613ac8576040519150601f19603f3d011682016040523d82523d6000602084013e613acd565b606091505b5091509150613ade82826001613bcf565b5080806020019051810190613af39190615388565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613b5d9161536c565b60006040518083038185875af1925050503d8060008114613b9a576040519150601f19603f3d011682016040523d82523d6000602084013e613b9f565b606091505b5091509150613bb082826002613bcf565b5080806020019051810190613bc59190615388565b9695505050505050565b60608315613bde5750816135f6565b825115613bee5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016135dc565b6040805160c0810182526000808252602082018190529181019190915260608101613c33613e60565b8152602001613c40613cb8565b8152602001613c4d613cb8565b905290565b6040805160608101825260008082526020820152908101613c4d614491565b6040518060800160405280613c846144a4565b815260200160008152602001613c98613cb8565b8152602001600081525090565b6040518060200160405280613c4d613c71565b604051806040016040528060008152602001600081525090565b604051806102000160405280613ce6614491565b8152602001613cf3614491565b81526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613c4d613cb8565b604051806040016040528060008152602001613c4d6144de565b6040805160e081019091528060008152602001613d946144f1565b8152600060208201819052604082018190526060820152608001613db6614508565b8152602001613c4d614508565b604051806101c00160405280613dd7614491565b8152602001613de4614491565b815260200160008152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613c4d613cb8565b6040518060400160405280613e53613cb8565b8152602001613c4d614491565b6040518060400160405280613c40613cb8565b6040518060a00160405280613e8661451b565b81526020016000815260200160008152602001613c40613cb8565b6040518060400160405280613eb461453e565b8152602001613c4d6145b2565b60405180610b600160405280613ed56144f1565b8152602001613ee261451b565b8152602001613eef614256565b8152602001613efc614491565b8152602001613f09614491565b8152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613f73613cb8565b8152602001613f8061451b565b8152602001613f8d614256565b8152602001613f9a613cb8565b8152602001613fa7614491565b8152602001613fb4613cb8565b8152602001613fc1613e60565b81526020016000815260200160008152602001613fdc61451b565b81526020016000815260200160001515815260200160008152602001600081526020016000815260200161400e613cb8565b815260200161401b614491565b8152602001614028613cb8565b8152602001614035613cb8565b815260200161404261451b565b815260200161404f61451b565b815260200161405c61451b565b8152602001614069614256565b8152602001614076614491565b8152602001614083614491565b81526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016140ed613cb8565b81526020016140fa61451b565b8152602001614107613cb8565b8152602001614114614491565b8152602001614121613cb8565b815260200161412e613e60565b815260200161413b613cb8565b8152602001614148614508565b815260200161415561451b565b815260200160008152602001614169614491565b8152602001614176614491565b81526020016000815260200160008152602001600015158152602001600081526020016141a1613cb8565b81526020016141ae614491565b81526020016141bb613cb8565b81526020016141c8614508565b81526020016141d5614491565b81526020016141e2614491565b81526020016141ef61451b565b81526020016141fc614256565b8152602001600081526020016000815260200161421761451b565b815260200160008152602001600015158152602001600081526020016000815260200160008152602001614249613cb8565b8152602001613c40614491565b60405180604001604052806002905b61426d61451b565b8152602001906001900390816142655790505090565b60405180610120016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001613c4d613cb8565b5080546142dd90614b35565b6000825580601f106142ed575050565b601f01602090049060005260206000209081019061430b9190614605565b50565b60405180610360016040528060006001600160a01b031681526020016143326144a4565b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001614382613cb8565b815260006020820152604001614396613cb8565b8152602001600081526020016000815260200160008152602001600081526020016143bf614256565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001613c4d613cb8565b82805461441990614b35565b90600052602060002090601f01602090048101928261443b5760008555614481565b82601f1061445457805160ff1916838001178555614481565b82800160010185558215614481579182015b82811115614481578251825591602001919060010190614466565b5061448d929150614605565b5090565b6040518060400160405280613c98613cb8565b6040805160c081018252600080825260208201529081016144c3613cb8565b81526020016000815260200160008152602001600081525090565b6040518060200160405280613c4d613d79565b604080518082019091526000808252602082015290565b6040518060200160405280600081525090565b604051806060016040528060008152602001600081526020016000151581525090565b60405180610140016040528060006001600160a01b031681526020016145626144a4565b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001613c4d613cb8565b6040518061012001604052806000151581526020016145cf613cb8565b81526020016145dc613cb8565b815260200160008152602001600081526020016000815260200160008152602001613c98614256565b5b8082111561448d5760008155600101614606565b60006040828403121561462c57600080fd5b50919050565b6000610120828403121561462c57600080fd5b6001600160a01b038116811461430b57600080fd5b60006020828403121561466c57600080fd5b81356135f681614645565b634e487b7160e01b600052602160045260246000fd5b80518252602090810151910152565b815160a0820190600281106146b3576146b3614677565b8083525060208301511515602083015260408301516146d660408401825161468d565b602081015160808401525092915050565b6001600160a01b03169052565b60018060a01b03808251168352806020830151166020840152506040810151614720604084018261468d565b5060608101516080830152608081015160a083015260a081015160c08301525050565b6000610160820190506147578284516146f4565b602083015160e0830152604083015161477461010084018261468d565b50606083015161014083015292915050565b6000806040838503121561479957600080fd5b82356147a481614645565b946020939093013593505050565b604081016102ce828461468d565b6000602082840312156147d257600080fd5b5035919050565b60005b838110156147f45781810151838201526020016147dc565b838111156134d45750506000910152565b828152604060208201526000825180604084015261482a8160608501602087016147d9565b601f01601f1916919091016060019392505050565b6000806040838503121561485257600080fd5b823561485d81614645565b9150602083013561486d81614645565b809150509250929050565b61488382825161468d565b6020810151613a1f604084018261468d565b608081016102ce8284614878565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156148db576148db6148a3565b60405290565b604051602081016001600160401b03811182821017156148db576148db6148a3565b60405160e081016001600160401b03811182821017156148db576148db6148a3565b604051606081016001600160401b03811182821017156148db576148db6148a3565b6040516101a081016001600160401b03811182821017156148db576148db6148a3565b60405161036081016001600160401b03811182821017156148db576148db6148a3565b801515811461430b57600080fd5b8035610dad8161498d565b6000604082840312156149b857600080fd5b6149c06148b9565b8235815260208301356149d28161498d565b60208201529392505050565b6000604082840312156149f057600080fd5b6149f86148b9565b90508135614a0581614645565b81526020820135614a1581614645565b602082015292915050565b600060208284031215614a3257600080fd5b604051602081016001600160401b0381118282101715614a5457614a546148a3565b6040529135825250919050565b6000818303610120811215614a7557600080fd5b614a7d6148b9565b8335815261010080601f1984011215614a9557600080fd5b614a9d6148e1565b9250614aa7614903565b602086013560068110614ab957600080fd5b8152614ac887604088016149de565b6020820152614ad96080870161499b565b6040820152614aea60a0870161499b565b6060820152614afb60c0870161499b565b6080820152614b0d8760e08801614a20565b60a0820152614b1e87838801614a20565b60c082015283525060208101919091529392505050565b600181811c90821680614b4957607f821691505b6020821081141561462c57634e487b7160e01b600052602260045260246000fd5b8051610dad81614645565b600060408284031215614b8757600080fd5b614b8f6148b9565b9050815181526020820151602082015292915050565b600060e08284031215614bb757600080fd5b60405160c081016001600160401b0381118282101715614bd957614bd96148a3565b80604052508091508251614bec81614645565b81526020830151614bfc81614645565b6020820152614c0e8460408501614b75565b60408201526080830151606082015260a0830151608082015260c083015160a08201525092915050565b8051610dad8161498d565b600082601f830112614c5457600080fd5b614c5c6148b9565b8060c0840185811115614c6e57600080fd5b845b81811015614cc15760608188031215614c895760008081fd5b614c91614925565b8151815260208083015181830152604080840151614cae8161498d565b9083015290855290930192606001614c70565b509095945050505050565b60006103008284031215614cdf57600080fd5b614ce7614947565b614cf083614b6a565b8152614cff8460208501614ba5565b6020820152610100614d12818501614b6a565b6040830152610120614d25818601614b6a565b6060840152610140808601516080850152610160614d4588828901614c43565b60a086015261022087015160c086015261024087015160e086015261026087015193850193909352610280860151918401919091526102a0850151908301526102c0840151908201526102e09092015161018083015250919050565b60006105208284031215614db457600080fd5b614dbc61496a565b614dc583614b6a565b8152614dd48460208501614ba5565b6020820152610100614de7818501614b6a565b6040830152610120614dfa818601614b6a565b60608401526101408086015160808501526101608087015160a08601526101808088015160c08701526101a08089015160e08801526101c0808a0151878901526101e09650614e4b8b888c01614b75565b868901526102209550614e5f868b01614c38565b858901526102409450614e748b868c01614b75565b848901526102809350838a0151838901526102a09250828a0151828901526102c09150818a015181890152506102e0808a0151878901526103009650614ebc8b888c01614c43565b6102008901526103c08a0151868901526103e08a0151858901526104008a0151610260890152614eef6104208b01614c38565b848901526104408a0151838901526104608a0151828901526104808a0151818901525050505050506104a084015181830152506104c0830151610320820152614f3c846104e08501614b75565b6103408201529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015614f7157614f71614f49565b500390565b6000816000190483118215151615614f9057614f90614f49565b500290565b60008219821115614fa857614fa8614f49565b500190565b600082614fca57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038381168252825160208084019190915283015151805161014084019291906006811061501b5761501b614677565b604085810191909152602082810151805185166060880152015190921660808501529081015180151560a085015290606081015180151560c08601529150608081015180151560e0860152915060a08101518051610100860152915060c0015180516101208501529050509392505050565b6001600160a01b038681168252602082018690526101208201906150b4604084018761468d565b6150c16080840186614878565b808416610100840152509695505050505050565b6001600160a01b03848116825260c08201906150f46020840186614878565b80841660a084015250949350505050565b6001600160a01b03841681526020810183905260808101615129604083018461468d565b949350505050565b6001600160a01b0385811682526020820185905260a0820190615157604084018661468d565b80841660808401525095945050505050565b600060001982141561517d5761517d614f49565b5060010190565b8060005b60028110156134d4578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101615188565b6000610520820190506151d68284516146e7565b60208301516151e860208401826146f4565b5060408301516101006151fd818501836146e7565b60608501519150610120615213818601846146e7565b60808601519250610140838187015260a08701519350610160848188015260c08801519450610180858189015260e089015195506101a086818a0152858a015196506101c0955086868a0152848a015196506101e09450615276858a018861468d565b9289015195506102209261528d8985018815159052565b918901519550610240916152a38984018861468d565b9089015161028089810191909152908901516102a0808a0191909152948901516102c0808a0191909152938901516102e0808a01919091526102008a0151965093946103006152f4818b0189615184565b938a01516103c08a0152918901516103e08901526102608901516104008901528801511515610420880152870151610440870152918601516104608601528501516104808501528401516104a0840152506103208301516104c08301526103408301516153656104e084018261468d565b5092915050565b6000825161537e8184602087016147d9565b9190910192915050565b60006020828403121561539a57600080fd5b81516135f68161498d56fea264697066735822122028806d8952ec7c0965c672dcc5386bd6e5fd3a52f6819c0d1f330f7f9a8bdc3d64736f6c634300080c0033`,
  BytecodeLen: 24024,
  Which: `o1`,
  version: 7,
  views: {
    Info: `Info`,
    rewardsAvailable: `rewardsAvailable`,
    rewardsAvailableAt: `rewardsAvailableAt`,
    staked: `staked`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './staker.rsh:90:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:324:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './staker.rsh:134:19:after expr stmt semicolon',
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
  "Any_eject": Any_eject,
  "Any_halt": Any_halt,
  "Any_nop": Any_nop,
  "Deployer": Deployer,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw
  };
export const _APIs = {
  Any: {
    eject: Any_eject,
    halt: Any_halt,
    nop: Any_nop
    },
  Staker: {
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw
    }
  };
