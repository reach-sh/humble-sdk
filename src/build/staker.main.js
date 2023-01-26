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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Struct([['userReceived', ctc3], ['totalRemaining', ctc3]]);
  return {
    EmergencyWithdraw: [ctc0, ctc1, ctc2, ctc0],
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
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewards', ctc3], ['start', ctc2], ['end', ctc2], ['Rewarder0', ctc0]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc10 = stdlib.T_Struct([['opts', ctc4], ['totalStaked', ctc2], ['remainingRewards', ctc3], ['lastRewardsPerShare_', ctc9], ['REWARDS_PREC', ctc8]]);
  const ctc11 = stdlib.T_Object({
    rewards: ctc9,
    stake: ctc2
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Data({
    None: ctc12,
    Some: ctc11
    });
  const map0_ctc = ctc13;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6039, v6040, v6041, v6042, v6051, v6056, v6057, v6062, v6065, v6066, v6067, v6072] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = svs;
      return (await ((async () => {
        
        const v10819 = {
          REWARDS_PREC: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'),
          lastRewardsPerShare_: v10781,
          opts: v6040,
          remainingRewards: v10783,
          totalStaked: v10784
          };
        
        return v10819;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _Opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6039, v6040, v6041, v6042, v6051, v6056, v6057, v6062, v6065, v6066, v6067, v6072] = svs;
      return (await ((async () => {
        
        
        return v6040;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = svs;
      return (await ((async () => {
        
        
        return v6040;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = svs;
      return (await ((async () => {
        
        
        return v6040;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsAvailable = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6039, v6040, v6041, v6042, v6051, v6056, v6057, v6062, v6065, v6066, v6067, v6072] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = svs;
      return (await ((async (_v10901 ) => {
          const v10901 = stdlib.protect(ctc0, _v10901, null);
        
        let v10902;
        const v10903 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
        if (v10903) {
          v10902 = v10781;
          }
        else {
          const v10904 = stdlib.le(v6057, v10782);
          const v10905 = v10904 ? v6057 : v10782;
          const v10906 = stdlib.ge(v6056, v10782);
          const v10907 = v10906 ? v6056 : v10782;
          let v10908;
          const v10909 = stdlib.ge(v10907, v10905);
          if (v10909) {
            v10908 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10910 = stdlib.safeSub(v10905, v10907);
            v10908 = v10910;
            }
          const v10911 = stdlib.cast("UInt", "UInt256", v10908, false, true);
          const v10912 = stdlib.safeMul256(v6090, v10911);
          const v10913 = stdlib.cast("UInt", "UInt256", v10784, false, true);
          const v10914 = stdlib.safeDiv256(v10912, v10913);
          const v10915 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
          const v10916 = stdlib.safeAdd256(v10915, v10914);
          let v10921;
          if (v10909) {
            v10921 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10923 = stdlib.safeSub(v10905, v10907);
            v10921 = v10923;
            }
          const v10924 = stdlib.cast("UInt", "UInt256", v10921, false, true);
          const v10925 = stdlib.safeMul256(v6095, v10924);
          const v10927 = stdlib.safeDiv256(v10925, v10913);
          const v10928 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
          const v10929 = stdlib.safeAdd256(v10928, v10927);
          const v10930 = [v10916, v10929];
          v10902 = v10930;
          }
        const v10931 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v10901, ctc11), null);
        const v10933 = {
          rewards: v10780,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10934 = stdlib.fromSome(v10931, v10933);
        const v10935 = v10934.stake;
        const v10940 = v10934.rewards;
        const v10941 = v10940[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
        const v10943 = v10902[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
        const v10944 = stdlib.cast("UInt", "UInt256", v10935, false, true);
        const v10945 = stdlib.safeMul256(v10944, v10943);
        const v10946 = stdlib.safeDiv256(v10945, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10947;
        const v10948 = stdlib.ge256(v10941, v10946);
        if (v10948) {
          v10947 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10949 = stdlib.safeSub256(v10946, v10941);
          v10947 = v10949;
          }
        const v10950 = stdlib.cast("UInt256", "UInt", v10947, false, true);
        const v10951 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
        const v10952 = stdlib.le(v10950, v10951);
        const v10953 = v10952 ? v10950 : v10951;
        const v10964 = v10940[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
        const v10966 = v10902[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
        const v10968 = stdlib.safeMul256(v10944, v10966);
        const v10969 = stdlib.safeDiv256(v10968, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10970;
        const v10971 = stdlib.ge256(v10964, v10969);
        if (v10971) {
          v10970 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10972 = stdlib.safeSub256(v10969, v10964);
          v10970 = v10972;
          }
        const v10973 = stdlib.cast("UInt256", "UInt", v10970, false, true);
        const v10974 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
        const v10975 = stdlib.le(v10973, v10974);
        const v10976 = v10975 ? v10973 : v10974;
        const v10977 = [v10953, v10976];
        
        return v10977;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsAvailableAt = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6039, v6040, v6041, v6042, v6051, v6056, v6057, v6062, v6065, v6066, v6067, v6072] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = svs;
      return (await ((async (_v10821, _v10822 ) => {
          const v10821 = stdlib.protect(ctc0, _v10821, null);
          const v10822 = stdlib.protect(ctc2, _v10822, null);
        
        let v10823;
        const v10824 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
        if (v10824) {
          v10823 = v10781;
          }
        else {
          const v10825 = stdlib.le(v6057, v10822);
          const v10826 = v10825 ? v6057 : v10822;
          const v10827 = stdlib.ge(v6056, v10782);
          const v10828 = v10827 ? v6056 : v10782;
          let v10829;
          const v10830 = stdlib.ge(v10828, v10826);
          if (v10830) {
            v10829 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10831 = stdlib.safeSub(v10826, v10828);
            v10829 = v10831;
            }
          const v10832 = stdlib.cast("UInt", "UInt256", v10829, false, true);
          const v10833 = stdlib.safeMul256(v6090, v10832);
          const v10834 = stdlib.cast("UInt", "UInt256", v10784, false, true);
          const v10835 = stdlib.safeDiv256(v10833, v10834);
          const v10836 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
          const v10837 = stdlib.safeAdd256(v10836, v10835);
          let v10842;
          if (v10830) {
            v10842 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10844 = stdlib.safeSub(v10826, v10828);
            v10842 = v10844;
            }
          const v10845 = stdlib.cast("UInt", "UInt256", v10842, false, true);
          const v10846 = stdlib.safeMul256(v6095, v10845);
          const v10848 = stdlib.safeDiv256(v10846, v10834);
          const v10849 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
          const v10850 = stdlib.safeAdd256(v10849, v10848);
          const v10851 = [v10837, v10850];
          v10823 = v10851;
          }
        const v10852 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v10821, ctc11), null);
        const v10854 = {
          rewards: v10780,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10855 = stdlib.fromSome(v10852, v10854);
        const v10856 = v10855.stake;
        const v10861 = v10855.rewards;
        const v10862 = v10861[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
        const v10864 = v10823[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
        const v10865 = stdlib.cast("UInt", "UInt256", v10856, false, true);
        const v10866 = stdlib.safeMul256(v10865, v10864);
        const v10867 = stdlib.safeDiv256(v10866, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10868;
        const v10869 = stdlib.ge256(v10862, v10867);
        if (v10869) {
          v10868 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10870 = stdlib.safeSub256(v10867, v10862);
          v10868 = v10870;
          }
        const v10871 = stdlib.cast("UInt256", "UInt", v10868, false, true);
        const v10872 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
        const v10873 = stdlib.le(v10871, v10872);
        const v10874 = v10873 ? v10871 : v10872;
        const v10885 = v10861[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
        const v10887 = v10823[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
        const v10889 = stdlib.safeMul256(v10865, v10887);
        const v10890 = stdlib.safeDiv256(v10889, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10891;
        const v10892 = stdlib.ge256(v10885, v10890);
        if (v10892) {
          v10891 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10893 = stdlib.safeSub256(v10890, v10885);
          v10891 = v10893;
          }
        const v10894 = stdlib.cast("UInt256", "UInt", v10891, false, true);
        const v10895 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
        const v10896 = stdlib.le(v10894, v10895);
        const v10897 = v10896 ? v10894 : v10895;
        const v10898 = [v10874, v10897];
        
        return v10898;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _staked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6039, v6040, v6041, v6042, v6051, v6056, v6057, v6062, v6065, v6066, v6067, v6072] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = svs;
      return (await ((async (_v10774 ) => {
          const v10774 = stdlib.protect(ctc0, _v10774, null);
        
        const v10775 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v10774, ctc11), null);
        const v10776 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v10777 = {
          rewards: v10776,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10778 = stdlib.fromSome(v10775, v10777);
        const v10779 = v10778.stake;
        
        return v10779;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc10
        },
      Opts: {
        decode: _Opts,
        dom: [],
        rng: ctc4
        },
      rewardsAvailable: {
        decode: _rewardsAvailable,
        dom: [ctc0],
        rng: ctc3
        },
      rewardsAvailableAt: {
        decode: _rewardsAvailableAt,
        dom: [ctc0, ctc2],
        rng: ctc3
        },
      staked: {
        decode: _staked,
        dom: [ctc0],
        rng: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc7, ctc2, ctc2, ctc3, ctc0, ctc2, ctc2, ctc2],
      2: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc3, ctc0, ctc2, ctc7, ctc8, ctc8],
      6: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc0, ctc8, ctc8, ctc9, ctc9, ctc2, ctc3, ctc2, ctc7, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewards', ctc7], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc8]]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Setup_abortSetup0_150: ctc10,
    Setup_fund0_150: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Data({
    Staker_emergencyWithdraw0_2231: ctc10,
    Staker_harvest0_2231: ctc10,
    Staker_stake0_2231: ctc12,
    Staker_withdraw0_2231: ctc12,
    Staker_withdrawAndHarvest0_2231: ctc12
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  const ctc15 = stdlib.T_Struct([['userReceived', ctc7], ['totalRemaining', ctc7]]);
  const ctc16 = stdlib.T_Tuple([ctc14, ctc15]);
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Tuple([ctc3, ctc3, ctc17]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v6013 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v6014 = [v6013, v6013];
  const v6018 = stdlib.protect(ctc9, interact.opts, 'for Deployer\'s interact field opts');
  const v6019 = v6018.rewardToken1;
  const v6020 = v6018.stakeToken;
  const v6022 = v6018.start;
  const v6023 = v6018.end;
  
  const v6031 = stdlib.tokenEq(v6019, v6020);
  const v6032 = v6031 ? false : true;
  stdlib.assert(v6032, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:100:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:97:16:application call to [unknown function] (defined at: ./staker.rsh:97:20:function exp)'],
    msg: 'can only reward a different token than the one staked',
    who: 'Deployer'
    });
  const v6037 = stdlib.lt(v6022, v6023);
  stdlib.assert(v6037, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:101:14:application call to "checkOpts" (defined at: ./staker.rsh:93:28:function exp)', 'at ./staker.rsh:97:16:application call to [unknown function] (defined at: ./staker.rsh:97:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v6018, v6019, v6020],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9, ctc6, ctc6],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:103:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v6040, v6041, v6042], secs: v6044, time: v6043, didSend: v78, from: v6039 } = txn1;
      
      const v6045 = v6014[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0')];
      const v6046 = stdlib.Array_set(v6045, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
      const v6047 = stdlib.Array_set(v6014, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'), v6046);
      const v6049 = v6047[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1')];
      const v6050 = stdlib.Array_set(v6049, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
      const v6051 = stdlib.Array_set(v6047, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1'), v6050);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6041
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6042
        });
      ;
      const v6056 = v6040.start;
      const v6057 = v6040.end;
      const v6062 = v6040.rewards;
      const v6065 = v6040.Rewarder0;
      const v6066 = v6062[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '0')];
      const v6067 = v6062[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '1')];
      const v6072 = stdlib.safeSub(v6057, v6056);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc6, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v6040, v6041, v6042], secs: v6044, time: v6043, didSend: v78, from: v6039 } = txn1;
  const v6045 = v6014[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0')];
  const v6046 = stdlib.Array_set(v6045, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
  const v6047 = stdlib.Array_set(v6014, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'), v6046);
  const v6049 = v6047[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1')];
  const v6050 = stdlib.Array_set(v6049, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
  const v6051 = stdlib.Array_set(v6047, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1'), v6050);
  const v6053 = stdlib.tokenEq(v6042, v6041);
  const v6054 = v6053 ? false : true;
  stdlib.assert(v6054, {
    at: './staker.rsh:103:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const v6056 = v6040.start;
  const v6057 = v6040.end;
  const v6058 = stdlib.lt(v6056, v6057);
  stdlib.assert(v6058, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:104:12:application call to "checkOpts" (defined at: ./staker.rsh:93:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v6062 = v6040.rewards;
  const v6065 = v6040.Rewarder0;
  const v6066 = v6062[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '0')];
  const v6067 = v6062[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '1')];
  const v6072 = stdlib.safeSub(v6057, v6056);
  const txn2 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6051, v6056, v6057, v6062, v6065, v6066, v6067, v6072],
    evt_cnt: 0,
    funcNum: 1,
    lct: v6043,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0'), [[v6067, v6041]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v6076, time: v6075, didSend: v119, from: v6074 } = txn2;
      
      ;
      const v6078 = v6051[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
      const v6079 = v6078[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
      const v6080 = stdlib.add(v6079, v6067);
      const v6082 = stdlib.Array_set(v6078, '0', v6080);
      const v6083 = stdlib.Array_set(v6051, stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0'), v6082);
      sim_r.txns.push({
        amt: v6067,
        kind: 'to',
        tok: v6041
        });
      
      const v6087 = stdlib.cast("UInt", "UInt256", v6066, false, true);
      const v6088 = stdlib.safeMul256(v6087, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v6089 = stdlib.cast("UInt", "UInt256", v6072, false, true);
      const v6090 = stdlib.safeDiv256(v6088, v6089);
      const v6092 = stdlib.cast("UInt", "UInt256", v6067, false, true);
      const v6093 = stdlib.safeMul256(v6092, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v6095 = stdlib.safeDiv256(v6093, v6089);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9, ctc6, ctc6, ctc19, ctc3, ctc3, ctc7, ctc8, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6076, time: v6075, didSend: v119, from: v6074 } = txn2;
  ;
  const v6078 = v6051[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
  const v6079 = v6078[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
  const v6080 = stdlib.add(v6079, v6067);
  const v6082 = stdlib.Array_set(v6078, '0', v6080);
  const v6083 = stdlib.Array_set(v6051, stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0'), v6082);
  ;
  const v6084 = stdlib.addressEq(v6039, v6074);
  stdlib.assert(v6084, {
    at: './staker.rsh:110:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.readyForRewarder(), {
    at: './staker.rsh:111:37:application',
    fs: ['at ./staker.rsh:111:37:application call to [unknown function] (defined at: ./staker.rsh:111:37:function exp)', 'at ./staker.rsh:111:37:application call to "liftedInteract" (defined at: ./staker.rsh:111:37:application)'],
    msg: 'readyForRewarder',
    who: 'Deployer'
    });
  
  const v6087 = stdlib.cast("UInt", "UInt256", v6066, false, true);
  const v6088 = stdlib.safeMul256(v6087, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
  const v6089 = stdlib.cast("UInt", "UInt256", v6072, false, true);
  const v6090 = stdlib.safeDiv256(v6088, v6089);
  const v6092 = stdlib.cast("UInt", "UInt256", v6067, false, true);
  const v6093 = stdlib.safeMul256(v6092, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
  const v6095 = stdlib.safeDiv256(v6093, v6089);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc11],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v6142], secs: v6144, time: v6143, didSend: v433, from: v6141 } = txn3;
  switch (v6142[0]) {
    case 'Setup_abortSetup0_150': {
      const v6145 = v6142[1];
      undefined /* setApiDetails */;
      const v6150 = stdlib.addressEq(v6141, v6039);
      const v6151 = stdlib.addressEq(v6141, v6065);
      const v6152 = v6150 ? true : v6151;
      stdlib.assert(v6152, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v6165 = null;
      await txn3.getOutput('Setup_abortSetup', 'v6165', ctc0, v6165);
      const v6171 = v6083[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v6172 = v6171[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_150': {
      const v10711 = v6142[1];
      undefined /* setApiDetails */;
      const v10721 = stdlib.addressEq(v6141, v6065);
      stdlib.assert(v10721, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v10764 = null;
      await txn3.getOutput('Setup_fund', 'v10764', ctc0, v10764);
      stdlib.protect(ctc0, await interact.readyForStakers(), {
        at: './staker.rsh:143:36:application',
        fs: ['at ./staker.rsh:143:36:application call to [unknown function] (defined at: ./staker.rsh:143:36:function exp)', 'at ./staker.rsh:143:36:application call to "liftedInteract" (defined at: ./staker.rsh:143:36:application)'],
        msg: 'readyForStakers',
        who: 'Deployer'
        });
      
      const v10780 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      let v10781 = v10780;
      let v10782 = v6056;
      let v10783 = v6062;
      let v10784 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
      let v10785 = v6143;
      let v10791 = v6083;
      let v10792 = v6066;
      
      let txn4 = txn3;
      while (await (async () => {
        
        return true;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc13],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn5;
        switch (v11363[0]) {
          case 'Staker_emergencyWithdraw0_2231': {
            const v11366 = v11363[1];
            undefined /* setApiDetails */;
            ;
            const v11555 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v11556 = v11555[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            ;
            const v11562 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11362, ctc4), null);
            const v11564 = {
              rewards: v10780,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v11565 = stdlib.fromSome(v11562, v11564);
            const v11566 = v11565.stake;
            const v11567 = stdlib.safeSub(v10784, v11566);
            const v11568 = {
              newEveryoneStaked: v11567,
              newUserStaked: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            await txn5.getOutput('Staker_emergencyWithdraw', 'v11568', ctc14, v11568);
            const v11581 = stdlib.sub(v11556, v11566);
            const v11583 = stdlib.Array_set(v11555, '0', v11581);
            const v11584 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:287:48:application', stdlib.UInt_max, '1'), v11583);
            ;
            const v11589 = v11565.rewards;
            const v11591 = {
              rewards: v11589,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            await stdlib.mapSet(map0, ctc8, v11362, ctc4, v11591);
            null;
            const cv10781 = v10781;
            const cv10782 = v10782;
            const cv10783 = v10783;
            const cv10784 = v11567;
            const cv10785 = v11364;
            const cv10791 = v11584;
            const cv10792 = v10792;
            
            v10781 = cv10781;
            v10782 = cv10782;
            v10783 = cv10783;
            v10784 = cv10784;
            v10785 = cv10785;
            v10791 = cv10791;
            v10792 = cv10792;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_harvest0_2231': {
            const v12111 = v11363[1];
            undefined /* setApiDetails */;
            const v12125 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            ;
            let v12341;
            if (v12125) {
              v12341 = v10781;
              }
            else {
              const v12343 = stdlib.le(v6057, v11364);
              const v12344 = v12343 ? v6057 : v11364;
              const v12345 = stdlib.ge(v6056, v10782);
              const v12346 = v12345 ? v6056 : v10782;
              let v12347;
              const v12348 = stdlib.ge(v12346, v12344);
              if (v12348) {
                v12347 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v12349 = stdlib.safeSub(v12344, v12346);
                v12347 = v12349;
                }
              const v12350 = stdlib.cast("UInt", "UInt256", v12347, false, true);
              const v12351 = stdlib.safeMul256(v6090, v12350);
              const v12352 = stdlib.cast("UInt", "UInt256", v10784, false, true);
              const v12353 = stdlib.safeDiv256(v12351, v12352);
              const v12354 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v12355 = stdlib.safeAdd256(v12354, v12353);
              let v12360;
              if (v12348) {
                v12360 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v12362 = stdlib.safeSub(v12344, v12346);
                v12360 = v12362;
                }
              const v12363 = stdlib.cast("UInt", "UInt256", v12360, false, true);
              const v12364 = stdlib.safeMul256(v6095, v12363);
              const v12366 = stdlib.safeDiv256(v12364, v12352);
              const v12367 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v12368 = stdlib.safeAdd256(v12367, v12366);
              const v12369 = [v12355, v12368];
              v12341 = v12369;
              }
            const v12370 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11362, ctc4), null);
            const v12372 = {
              rewards: v10780,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v12373 = stdlib.fromSome(v12370, v12372);
            const v12374 = v12373.stake;
            const v12379 = v12373.rewards;
            const v12380 = v12379[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
            const v12382 = v12341[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
            const v12383 = stdlib.cast("UInt", "UInt256", v12374, false, true);
            const v12384 = stdlib.safeMul256(v12383, v12382);
            const v12385 = stdlib.safeDiv256(v12384, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v12386;
            const v12387 = stdlib.ge256(v12380, v12385);
            if (v12387) {
              v12386 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v12388 = stdlib.safeSub256(v12385, v12380);
              v12386 = v12388;
              }
            const v12389 = stdlib.cast("UInt256", "UInt", v12386, false, true);
            const v12390 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
            const v12391 = stdlib.le(v12389, v12390);
            const v12392 = v12391 ? v12389 : v12390;
            const v12403 = v12379[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
            const v12405 = v12341[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
            const v12407 = stdlib.safeMul256(v12383, v12405);
            const v12408 = stdlib.safeDiv256(v12407, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v12409;
            const v12410 = stdlib.ge256(v12403, v12408);
            if (v12410) {
              v12409 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v12411 = stdlib.safeSub256(v12408, v12403);
              v12409 = v12411;
              }
            const v12412 = stdlib.cast("UInt256", "UInt", v12409, false, true);
            const v12413 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
            const v12414 = stdlib.le(v12412, v12413);
            const v12415 = v12414 ? v12412 : v12413;
            const v12416 = [v12392, v12415];
            const v12424 = stdlib.sub(v10792, v12392);
            ;
            const v12425 = v10791[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v12426 = v12425[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v12430 = stdlib.sub(v12426, v12415);
            const v12432 = stdlib.Array_set(v12425, '0', v12430);
            const v12433 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v12432);
            ;
            const v12435 = stdlib.safeSub(v12390, v12392);
            const v12437 = stdlib.safeSub(v12413, v12415);
            const v12450 = stdlib.cast("UInt", "UInt256", v12392, false, true);
            const v12451 = stdlib.safeAdd256(v12380, v12450);
            const v12453 = stdlib.cast("UInt", "UInt256", v12415, false, true);
            const v12454 = stdlib.safeAdd256(v12403, v12453);
            const v12455 = [v12451, v12454];
            const v12456 = {
              rewards: v12455,
              stake: v12374
              };
            await stdlib.mapSet(map0, ctc8, v11362, ctc4, v12456);
            const v12461 = [v12435, v12437];
            const v12462 = {
              totalRemaining: v12461,
              userReceived: v12416
              };
            await txn5.getOutput('Staker_harvest', 'v12462', ctc15, v12462);
            null;
            const cv10781 = v12341;
            const cv10782 = v11364;
            const cv10783 = v12461;
            const cv10784 = v10784;
            const cv10785 = v11364;
            const cv10791 = v12433;
            const cv10792 = v12424;
            
            v10781 = cv10781;
            v10782 = cv10782;
            v10783 = cv10783;
            v10784 = cv10784;
            v10785 = cv10785;
            v10791 = cv10791;
            v10792 = cv10792;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_stake0_2231': {
            const v12856 = v11363[1];
            undefined /* setApiDetails */;
            const v12905 = v12856[stdlib.checkedBigNumberify('./staker.rsh:233:10:spread', stdlib.UInt_max, '0')];
            const v12907 = stdlib.lt(v10782, v6057);
            stdlib.assert(v12907, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'can only stake before the end',
              who: 'Deployer'
              });
            const v12909 = stdlib.gt(v12905, stdlib.checkedBigNumberify('./staker.rsh:238:19:decimal', stdlib.UInt_max, '0'));
            stdlib.assert(v12909, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'must stake more than 0',
              who: 'Deployer'
              });
            const v12912 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v13045 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13046 = v13045[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v13047 = stdlib.add(v13046, v12905);
            const v13049 = stdlib.Array_set(v13045, '0', v13047);
            const v13050 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13049);
            ;
            let v13235;
            if (v12912) {
              v13235 = v10781;
              }
            else {
              const v13237 = stdlib.le(v6057, v11364);
              const v13238 = v13237 ? v6057 : v11364;
              const v13239 = stdlib.ge(v6056, v10782);
              const v13240 = v13239 ? v6056 : v10782;
              let v13241;
              const v13242 = stdlib.ge(v13240, v13238);
              if (v13242) {
                v13241 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v13243 = stdlib.safeSub(v13238, v13240);
                v13241 = v13243;
                }
              const v13244 = stdlib.cast("UInt", "UInt256", v13241, false, true);
              const v13245 = stdlib.safeMul256(v6090, v13244);
              const v13246 = stdlib.cast("UInt", "UInt256", v10784, false, true);
              const v13247 = stdlib.safeDiv256(v13245, v13246);
              const v13248 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v13249 = stdlib.safeAdd256(v13248, v13247);
              let v13254;
              if (v13242) {
                v13254 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v13256 = stdlib.safeSub(v13238, v13240);
                v13254 = v13256;
                }
              const v13257 = stdlib.cast("UInt", "UInt256", v13254, false, true);
              const v13258 = stdlib.safeMul256(v6095, v13257);
              const v13260 = stdlib.safeDiv256(v13258, v13246);
              const v13261 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v13262 = stdlib.safeAdd256(v13261, v13260);
              const v13263 = [v13249, v13262];
              v13235 = v13263;
              }
            const v13265 = stdlib.safeAdd(v10784, v12905);
            const v13266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11362, ctc4), null);
            const v13268 = {
              rewards: v10780,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v13269 = stdlib.fromSome(v13266, v13268);
            const v13270 = v13269.stake;
            const v13271 = stdlib.safeAdd(v13270, v12905);
            const v13276 = v13269.rewards;
            const v13277 = v13235[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '0')];
            const v13278 = stdlib.cast("UInt", "UInt256", v12905, false, true);
            const v13279 = stdlib.safeMul256(v13278, v13277);
            const v13280 = stdlib.safeDiv256(v13279, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v13281 = v13276[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '0')];
            const v13282 = stdlib.safeAdd256(v13281, v13280);
            const v13283 = v13235[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '1')];
            const v13285 = stdlib.safeMul256(v13278, v13283);
            const v13286 = stdlib.safeDiv256(v13285, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v13287 = v13276[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '1')];
            const v13288 = stdlib.safeAdd256(v13287, v13286);
            const v13289 = [v13282, v13288];
            const v13290 = {
              rewards: v13289,
              stake: v13271
              };
            await stdlib.mapSet(map0, ctc8, v11362, ctc4, v13290);
            const v13291 = {
              newEveryoneStaked: v13265,
              newUserStaked: v13271
              };
            await txn5.getOutput('Staker_stake', 'v13291', ctc14, v13291);
            null;
            const cv10781 = v13235;
            const cv10782 = v11364;
            const cv10783 = v10783;
            const cv10784 = v13265;
            const cv10785 = v11364;
            const cv10791 = v13050;
            const cv10792 = v10792;
            
            v10781 = cv10781;
            v10782 = cv10782;
            v10783 = cv10783;
            v10784 = cv10784;
            v10785 = cv10785;
            v10791 = cv10791;
            v10792 = cv10792;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_withdraw0_2231': {
            const v13601 = v11363[1];
            undefined /* setApiDetails */;
            const v13692 = v13601[stdlib.checkedBigNumberify('./staker.rsh:270:10:spread', stdlib.UInt_max, '0')];
            const v13694 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11362, ctc4), null);
            const v13696 = {
              rewards: v10780,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v13697 = stdlib.fromSome(v13694, v13696);
            const v13698 = v13697.stake;
            const v13699 = stdlib.le(v13692, v13698);
            stdlib.assert(v13699, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            const v13702 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v13790 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13791 = v13790[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            ;
            let v14058;
            if (v13702) {
              v14058 = v10781;
              }
            else {
              const v14060 = stdlib.le(v6057, v11364);
              const v14061 = v14060 ? v6057 : v11364;
              const v14062 = stdlib.ge(v6056, v10782);
              const v14063 = v14062 ? v6056 : v10782;
              let v14064;
              const v14065 = stdlib.ge(v14063, v14061);
              if (v14065) {
                v14064 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14066 = stdlib.safeSub(v14061, v14063);
                v14064 = v14066;
                }
              const v14067 = stdlib.cast("UInt", "UInt256", v14064, false, true);
              const v14068 = stdlib.safeMul256(v6090, v14067);
              const v14069 = stdlib.cast("UInt", "UInt256", v10784, false, true);
              const v14070 = stdlib.safeDiv256(v14068, v14069);
              const v14071 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v14072 = stdlib.safeAdd256(v14071, v14070);
              let v14077;
              if (v14065) {
                v14077 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14079 = stdlib.safeSub(v14061, v14063);
                v14077 = v14079;
                }
              const v14080 = stdlib.cast("UInt", "UInt256", v14077, false, true);
              const v14081 = stdlib.safeMul256(v6095, v14080);
              const v14083 = stdlib.safeDiv256(v14081, v14069);
              const v14084 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v14085 = stdlib.safeAdd256(v14084, v14083);
              const v14086 = [v14072, v14085];
              v14058 = v14086;
              }
            const v14093 = stdlib.safeSub(v10784, v13692);
            const v14094 = stdlib.safeSub(v13698, v13692);
            const v14099 = v13697.rewards;
            const v14108 = stdlib.sub(v13791, v13692);
            const v14110 = stdlib.Array_set(v13790, '0', v14108);
            const v14111 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v14110);
            ;
            const v14112 = v14099[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
            const v14113 = v14058[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '0')];
            const v14114 = stdlib.cast("UInt", "UInt256", v13692, false, true);
            const v14115 = stdlib.safeMul256(v14114, v14113);
            const v14116 = stdlib.safeDiv256(v14115, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14117;
            const v14118 = stdlib.ge256(v14116, v14112);
            if (v14118) {
              v14117 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14119 = stdlib.safeSub256(v14112, v14116);
              v14117 = v14119;
              }
            const v14120 = v14099[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
            const v14121 = v14058[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '1')];
            const v14123 = stdlib.safeMul256(v14114, v14121);
            const v14124 = stdlib.safeDiv256(v14123, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14125;
            const v14126 = stdlib.ge256(v14124, v14120);
            if (v14126) {
              v14125 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14127 = stdlib.safeSub256(v14120, v14124);
              v14125 = v14127;
              }
            const v14128 = [v14117, v14125];
            const v14129 = {
              rewards: v14128,
              stake: v14094
              };
            await stdlib.mapSet(map0, ctc8, v11362, ctc4, v14129);
            const v14130 = {
              newEveryoneStaked: v14093,
              newUserStaked: v14094
              };
            await txn5.getOutput('Staker_withdraw', 'v14130', ctc14, v14130);
            null;
            const cv10781 = v14058;
            const cv10782 = v11364;
            const cv10783 = v10783;
            const cv10784 = v14093;
            const cv10785 = v11364;
            const cv10791 = v14111;
            const cv10792 = v10792;
            
            v10781 = cv10781;
            v10782 = cv10782;
            v10783 = cv10783;
            v10784 = cv10784;
            v10785 = cv10785;
            v10791 = cv10791;
            v10792 = cv10792;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_withdrawAndHarvest0_2231': {
            const v14346 = v11363[1];
            undefined /* setApiDetails */;
            const v14482 = v14346[stdlib.checkedBigNumberify('./staker.rsh:326:10:spread', stdlib.UInt_max, '0')];
            const v14484 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11362, ctc4), null);
            const v14486 = {
              rewards: v10780,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v14487 = stdlib.fromSome(v14484, v14486);
            const v14488 = v14487.stake;
            const v14489 = stdlib.le(v14482, v14488);
            stdlib.assert(v14489, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            const v14492 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            ;
            let v14897;
            if (v14492) {
              v14897 = v10781;
              }
            else {
              const v14899 = stdlib.le(v6057, v11364);
              const v14900 = v14899 ? v6057 : v11364;
              const v14901 = stdlib.ge(v6056, v10782);
              const v14902 = v14901 ? v6056 : v10782;
              let v14903;
              const v14904 = stdlib.ge(v14902, v14900);
              if (v14904) {
                v14903 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14905 = stdlib.safeSub(v14900, v14902);
                v14903 = v14905;
                }
              const v14906 = stdlib.cast("UInt", "UInt256", v14903, false, true);
              const v14907 = stdlib.safeMul256(v6090, v14906);
              const v14908 = stdlib.cast("UInt", "UInt256", v10784, false, true);
              const v14909 = stdlib.safeDiv256(v14907, v14908);
              const v14910 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v14911 = stdlib.safeAdd256(v14910, v14909);
              let v14916;
              if (v14904) {
                v14916 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14918 = stdlib.safeSub(v14900, v14902);
                v14916 = v14918;
                }
              const v14919 = stdlib.cast("UInt", "UInt256", v14916, false, true);
              const v14920 = stdlib.safeMul256(v6095, v14919);
              const v14922 = stdlib.safeDiv256(v14920, v14908);
              const v14923 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v14924 = stdlib.safeAdd256(v14923, v14922);
              const v14925 = [v14911, v14924];
              v14897 = v14925;
              }
            const v14936 = v14487.rewards;
            const v14937 = v14936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
            const v14939 = v14897[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
            const v14940 = stdlib.cast("UInt", "UInt256", v14488, false, true);
            const v14941 = stdlib.safeMul256(v14940, v14939);
            const v14942 = stdlib.safeDiv256(v14941, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14943;
            const v14944 = stdlib.ge256(v14937, v14942);
            if (v14944) {
              v14943 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14945 = stdlib.safeSub256(v14942, v14937);
              v14943 = v14945;
              }
            const v14946 = stdlib.cast("UInt256", "UInt", v14943, false, true);
            const v14947 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
            const v14948 = stdlib.le(v14946, v14947);
            const v14949 = v14948 ? v14946 : v14947;
            const v14960 = v14936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
            const v14962 = v14897[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
            const v14964 = stdlib.safeMul256(v14940, v14962);
            const v14965 = stdlib.safeDiv256(v14964, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14966;
            const v14967 = stdlib.ge256(v14960, v14965);
            if (v14967) {
              v14966 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14968 = stdlib.safeSub256(v14965, v14960);
              v14966 = v14968;
              }
            const v14969 = stdlib.cast("UInt256", "UInt", v14966, false, true);
            const v14970 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
            const v14971 = stdlib.le(v14969, v14970);
            const v14972 = v14971 ? v14969 : v14970;
            const v14973 = [v14949, v14972];
            const v14981 = stdlib.sub(v10792, v14949);
            ;
            const v14982 = v10791[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v14983 = v14982[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v14987 = stdlib.sub(v14983, v14972);
            const v14989 = stdlib.Array_set(v14982, '0', v14987);
            const v14990 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v14989);
            ;
            const v14992 = stdlib.safeSub(v14947, v14949);
            const v14994 = stdlib.safeSub(v14970, v14972);
            const v15007 = stdlib.cast("UInt", "UInt256", v14949, false, true);
            const v15008 = stdlib.safeAdd256(v14937, v15007);
            const v15010 = stdlib.cast("UInt", "UInt256", v14972, false, true);
            const v15011 = stdlib.safeAdd256(v14960, v15010);
            const v15012 = [v15008, v15011];
            const v15013 = {
              rewards: v15012,
              stake: v14488
              };
            await stdlib.mapSet(map0, ctc8, v11362, ctc4, v15013);
            const v15018 = [v14992, v14994];
            const v15019 = {
              totalRemaining: v15018,
              userReceived: v14973
              };
            const v15024 = v15013.stake;
            const v15025 = stdlib.safeSub(v10784, v14482);
            const v15026 = stdlib.safeSub(v15024, v14482);
            const v15031 = v15013.rewards;
            const v15035 = v14990[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1')];
            const v15036 = v15035[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '0')];
            const v15040 = stdlib.sub(v15036, v14482);
            const v15042 = stdlib.Array_set(v15035, '0', v15040);
            const v15043 = stdlib.Array_set(v14990, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v15042);
            ;
            const v15044 = v15031[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
            const v15046 = stdlib.cast("UInt", "UInt256", v14482, false, true);
            const v15047 = stdlib.safeMul256(v15046, v14939);
            const v15048 = stdlib.safeDiv256(v15047, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v15049;
            const v15050 = stdlib.ge256(v15048, v15044);
            if (v15050) {
              v15049 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v15051 = stdlib.safeSub256(v15044, v15048);
              v15049 = v15051;
              }
            const v15052 = v15031[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
            const v15055 = stdlib.safeMul256(v15046, v14962);
            const v15056 = stdlib.safeDiv256(v15055, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v15057;
            const v15058 = stdlib.ge256(v15056, v15052);
            if (v15058) {
              v15057 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v15059 = stdlib.safeSub256(v15052, v15056);
              v15057 = v15059;
              }
            const v15060 = [v15049, v15057];
            const v15061 = {
              rewards: v15060,
              stake: v15026
              };
            await stdlib.mapSet(map0, ctc8, v11362, ctc4, v15061);
            const v15062 = {
              newEveryoneStaked: v15025,
              newUserStaked: v15026
              };
            const v15067 = [v15062, v15019];
            await txn5.getOutput('Staker_withdrawAndHarvest', 'v15067', ctc16, v15067);
            null;
            null;
            const cv10781 = v14897;
            const cv10782 = v11364;
            const cv10783 = v15018;
            const cv10784 = v15025;
            const cv10785 = v11364;
            const cv10791 = v15043;
            const cv10792 = v14981;
            
            v10781 = cv10781;
            v10782 = cv10782;
            v10783 = cv10783;
            v10784 = cv10784;
            v10785 = cv10785;
            v10791 = cv10791;
            v10792 = cv10792;
            
            txn4 = txn5;
            continue;
            break;
            }
          }
        
        }
      const v15253 = v10791[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v15254 = v15253[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  
  
  
  };
export async function _Setup_abortSetup2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Setup_abortSetup2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Setup_abortSetup2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Setup_abortSetup0_150: ctc13,
    Setup_fund0_150: ctc13
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc8, ctc6, ctc3, ctc12, ctc1, ctc1]);
  const v6110 = ctc.selfAddress();
  const v6112 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_abortSetup0_150" (defined at: ./staker.rsh:134:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: 'in',
    who: 'Setup_abortSetup'
    });
  const v6113 = stdlib.addressEq(v6110, v6039);
  const v6114 = stdlib.addressEq(v6110, v6065);
  const v6115 = v6113 ? true : v6114;
  stdlib.assert(v6115, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_abortSetup0_150" (defined at: ./staker.rsh:134:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: null,
    who: 'Setup_abortSetup'
    });
  const v6120 = ['Setup_abortSetup0_150', v6112];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095, v6120],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:136:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v6142], secs: v6144, time: v6143, didSend: v433, from: v6141 } = txn1;
      
      switch (v6142[0]) {
        case 'Setup_abortSetup0_150': {
          const v6145 = v6142[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_abortSetup"
            });
          ;
          const v6165 = null;
          const v6166 = await txn1.getOutput('Setup_abortSetup', 'v6165', ctc0, v6165);
          
          const v6171 = v6083[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
          const v6172 = v6171[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v6039,
            tok: v6041
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v6042
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v6041
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Setup_fund0_150': {
          const v10711 = v6142[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc8, ctc6, ctc3, ctc12, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v6142], secs: v6144, time: v6143, didSend: v433, from: v6141 } = txn1;
  switch (v6142[0]) {
    case 'Setup_abortSetup0_150': {
      const v6145 = v6142[1];
      undefined /* setApiDetails */;
      const v6150 = stdlib.addressEq(v6141, v6039);
      const v6151 = stdlib.addressEq(v6141, v6065);
      const v6152 = v6150 ? true : v6151;
      stdlib.assert(v6152, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Setup_abortSetup'
        });
      ;
      const v6165 = null;
      const v6166 = await txn1.getOutput('Setup_abortSetup', 'v6165', ctc0, v6165);
      if (v433) {
        stdlib.protect(ctc0, await interact.out(v6145, v6166), {
          at: './staker.rsh:134:9:application',
          fs: ['at ./staker.rsh:134:9:application call to [unknown function] (defined at: ./staker.rsh:134:9:function exp)', 'at ./staker.rsh:136:27:application call to "k" (defined at: ./staker.rsh:136:21:function exp)'],
          msg: 'out',
          who: 'Setup_abortSetup'
          });
        }
      else {
        }
      
      const v6171 = v6083[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v6172 = v6171[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_150': {
      const v10711 = v6142[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Setup_fund2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Setup_fund2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Setup_fund2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Setup_abortSetup0_150: ctc13,
    Setup_fund0_150: ctc13
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc8, ctc6, ctc3, ctc12, ctc1, ctc1]);
  const v6122 = ctc.selfAddress();
  const v6124 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_fund0_150" (defined at: ./staker.rsh:138:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: 'in',
    who: 'Setup_fund'
    });
  const v6125 = stdlib.addressEq(v6122, v6065);
  stdlib.assert(v6125, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_fund0_150" (defined at: ./staker.rsh:138:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: null,
    who: 'Setup_fund'
    });
  const v6130 = ['Setup_fund0_150', v6124];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6062, v6065, v6066, v6083, v6090, v6095, v6130],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v6066, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v6142], secs: v6144, time: v6143, didSend: v433, from: v6141 } = txn1;
      
      switch (v6142[0]) {
        case 'Setup_abortSetup0_150': {
          const v6145 = v6142[1];
          
          break;
          }
        case 'Setup_fund0_150': {
          const v10711 = v6142[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_fund"
            });
          sim_r.txns.push({
            amt: v6066,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v10764 = null;
          const v10765 = await txn1.getOutput('Setup_fund', 'v10764', ctc0, v10764);
          
          const v10780 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v28359 = v10780;
          const v28360 = v6056;
          const v28361 = v6062;
          const v28362 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
          const v28364 = v6083;
          const v28365 = v6066;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc8, ctc6, ctc3, ctc12, ctc1, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v6142], secs: v6144, time: v6143, didSend: v433, from: v6141 } = txn1;
  switch (v6142[0]) {
    case 'Setup_abortSetup0_150': {
      const v6145 = v6142[1];
      return;
      break;
      }
    case 'Setup_fund0_150': {
      const v10711 = v6142[1];
      undefined /* setApiDetails */;
      const v10721 = stdlib.addressEq(v6141, v6065);
      stdlib.assert(v10721, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Setup_fund'
        });
      ;
      const v10764 = null;
      const v10765 = await txn1.getOutput('Setup_fund', 'v10764', ctc0, v10764);
      if (v433) {
        stdlib.protect(ctc0, await interact.out(v10711, v10765), {
          at: './staker.rsh:138:9:application',
          fs: ['at ./staker.rsh:138:9:application call to [unknown function] (defined at: ./staker.rsh:138:9:function exp)', 'at ./staker.rsh:140:38:application call to "k" (defined at: ./staker.rsh:140:32:function exp)'],
          msg: 'out',
          who: 'Setup_fund'
          });
        }
      else {
        }
      
      const v10780 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v28359 = v10780;
      const v28360 = v6056;
      const v28361 = v6062;
      const v28362 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
      const v28364 = v6083;
      const v28365 = v6066;
      return;
      
      break;
      }
    }
  
  
  };
export async function _Staker_emergencyWithdraw6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_emergencyWithdraw6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_emergencyWithdraw6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Data({
    Staker_emergencyWithdraw0_2231: ctc13,
    Staker_harvest0_2231: ctc13,
    Staker_stake0_2231: ctc14,
    Staker_withdraw0_2231: ctc14,
    Staker_withdrawAndHarvest0_2231: ctc14
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11078 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:281:40:application call to [unknown function] (defined at: ./staker.rsh:281:40:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_emergencyWithdraw0_2231" (defined at: ./staker.rsh:281:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_emergencyWithdraw'
    });
  const v11082 = ['Staker_emergencyWithdraw0_2231', v11078];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792, v11082],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:282:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:282:20:decimal', stdlib.UInt_max, '0'), v6042]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
      
      switch (v11363[0]) {
        case 'Staker_emergencyWithdraw0_2231': {
          const v11366 = v11363[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_emergencyWithdraw"
            });
          ;
          const v11555 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v11556 = v11555[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          ;
          const v11562 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v11362, ctc4), null);
          const v11564 = {
            rewards: v10780,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v11565 = stdlib.fromSome(v11562, v11564);
          const v11566 = v11565.stake;
          const v11567 = stdlib.safeSub(v10784, v11566);
          const v11568 = {
            newEveryoneStaked: v11567,
            newUserStaked: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v11569 = await txn1.getOutput('Staker_emergencyWithdraw', 'v11568', ctc16, v11568);
          
          const v11581 = stdlib.sub(v11556, v11566);
          const v11583 = stdlib.Array_set(v11555, '0', v11581);
          const v11584 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:287:48:application', stdlib.UInt_max, '1'), v11583);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: v6042
            });
          const v11589 = v11565.rewards;
          const v11591 = {
            rewards: v11589,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await stdlib.simMapSet(sim_r, 0, ctc6, v11362, ctc4, v11591);
          null;
          const v28368 = v10781;
          const v28369 = v10782;
          const v28370 = v10783;
          const v28371 = v11567;
          const v28373 = v11584;
          const v28374 = v10792;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_harvest0_2231': {
          const v12111 = v11363[1];
          
          break;
          }
        case 'Staker_stake0_2231': {
          const v12856 = v11363[1];
          
          break;
          }
        case 'Staker_withdraw0_2231': {
          const v13601 = v11363[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2231': {
          const v14346 = v11363[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
  switch (v11363[0]) {
    case 'Staker_emergencyWithdraw0_2231': {
      const v11366 = v11363[1];
      undefined /* setApiDetails */;
      ;
      const v11555 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v11556 = v11555[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      ;
      const v11562 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11362, ctc4), null);
      const v11564 = {
        rewards: v10780,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v11565 = stdlib.fromSome(v11562, v11564);
      const v11566 = v11565.stake;
      const v11567 = stdlib.safeSub(v10784, v11566);
      const v11568 = {
        newEveryoneStaked: v11567,
        newUserStaked: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v11569 = await txn1.getOutput('Staker_emergencyWithdraw', 'v11568', ctc16, v11568);
      if (v4727) {
        stdlib.protect(ctc0, await interact.out(v11366, v11569), {
          at: './staker.rsh:281:11:application',
          fs: ['at ./staker.rsh:281:11:application call to [unknown function] (defined at: ./staker.rsh:281:11:function exp)', 'at ./staker.rsh:286:10:application call to "k" (defined at: ./staker.rsh:282:39:function exp)', 'at ./staker.rsh:282:39:application call to [unknown function] (defined at: ./staker.rsh:282:39:function exp)'],
          msg: 'out',
          who: 'Staker_emergencyWithdraw'
          });
        }
      else {
        }
      
      const v11581 = stdlib.sub(v11556, v11566);
      const v11583 = stdlib.Array_set(v11555, '0', v11581);
      const v11584 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:287:48:application', stdlib.UInt_max, '1'), v11583);
      ;
      const v11589 = v11565.rewards;
      const v11591 = {
        rewards: v11589,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.mapSet(map0, ctc6, v11362, ctc4, v11591);
      null;
      const v28368 = v10781;
      const v28369 = v10782;
      const v28370 = v10783;
      const v28371 = v11567;
      const v28373 = v11584;
      const v28374 = v10792;
      return;
      
      break;
      }
    case 'Staker_harvest0_2231': {
      const v12111 = v11363[1];
      return;
      break;
      }
    case 'Staker_stake0_2231': {
      const v12856 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2231': {
      const v13601 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2231': {
      const v14346 = v11363[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_harvest6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_harvest6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_harvest6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Data({
    Staker_emergencyWithdraw0_2231: ctc13,
    Staker_harvest0_2231: ctc13,
    Staker_stake0_2231: ctc14,
    Staker_withdraw0_2231: ctc14,
    Staker_withdrawAndHarvest0_2231: ctc14
    });
  const ctc16 = stdlib.T_Struct([['userReceived', ctc8], ['totalRemaining', ctc8]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11086 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:316:30:application call to [unknown function] (defined at: ./staker.rsh:316:30:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_harvest0_2231" (defined at: ./staker.rsh:316:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v11120 = ['Staker_harvest0_2231', v11086];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792, v11120],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:319:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:319:21:decimal', stdlib.UInt_max, '0'), v6042]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
      
      switch (v11363[0]) {
        case 'Staker_emergencyWithdraw0_2231': {
          const v11366 = v11363[1];
          
          break;
          }
        case 'Staker_harvest0_2231': {
          const v12111 = v11363[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          const v12125 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          let v12341;
          if (v12125) {
            v12341 = v10781;
            }
          else {
            const v12343 = stdlib.le(v6057, v11364);
            const v12344 = v12343 ? v6057 : v11364;
            const v12345 = stdlib.ge(v6056, v10782);
            const v12346 = v12345 ? v6056 : v10782;
            let v12347;
            const v12348 = stdlib.ge(v12346, v12344);
            if (v12348) {
              v12347 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12349 = stdlib.safeSub(v12344, v12346);
              v12347 = v12349;
              }
            const v12350 = stdlib.cast("UInt", "UInt256", v12347, false, true);
            const v12351 = stdlib.safeMul256(v6090, v12350);
            const v12352 = stdlib.cast("UInt", "UInt256", v10784, false, true);
            const v12353 = stdlib.safeDiv256(v12351, v12352);
            const v12354 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v12355 = stdlib.safeAdd256(v12354, v12353);
            let v12360;
            if (v12348) {
              v12360 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12362 = stdlib.safeSub(v12344, v12346);
              v12360 = v12362;
              }
            const v12363 = stdlib.cast("UInt", "UInt256", v12360, false, true);
            const v12364 = stdlib.safeMul256(v6095, v12363);
            const v12366 = stdlib.safeDiv256(v12364, v12352);
            const v12367 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v12368 = stdlib.safeAdd256(v12367, v12366);
            const v12369 = [v12355, v12368];
            v12341 = v12369;
            }
          const v12370 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v11362, ctc4), null);
          const v12372 = {
            rewards: v10780,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v12373 = stdlib.fromSome(v12370, v12372);
          const v12374 = v12373.stake;
          const v12379 = v12373.rewards;
          const v12380 = v12379[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
          const v12382 = v12341[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
          const v12383 = stdlib.cast("UInt", "UInt256", v12374, false, true);
          const v12384 = stdlib.safeMul256(v12383, v12382);
          const v12385 = stdlib.safeDiv256(v12384, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v12386;
          const v12387 = stdlib.ge256(v12380, v12385);
          if (v12387) {
            v12386 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v12388 = stdlib.safeSub256(v12385, v12380);
            v12386 = v12388;
            }
          const v12389 = stdlib.cast("UInt256", "UInt", v12386, false, true);
          const v12390 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
          const v12391 = stdlib.le(v12389, v12390);
          const v12392 = v12391 ? v12389 : v12390;
          const v12403 = v12379[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
          const v12405 = v12341[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
          const v12407 = stdlib.safeMul256(v12383, v12405);
          const v12408 = stdlib.safeDiv256(v12407, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v12409;
          const v12410 = stdlib.ge256(v12403, v12408);
          if (v12410) {
            v12409 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v12411 = stdlib.safeSub256(v12408, v12403);
            v12409 = v12411;
            }
          const v12412 = stdlib.cast("UInt256", "UInt", v12409, false, true);
          const v12413 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
          const v12414 = stdlib.le(v12412, v12413);
          const v12415 = v12414 ? v12412 : v12413;
          const v12416 = [v12392, v12415];
          const v12424 = stdlib.sub(v10792, v12392);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: undefined /* Nothing */
            });
          const v12425 = v10791[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v12426 = v12425[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v12430 = stdlib.sub(v12426, v12415);
          const v12432 = stdlib.Array_set(v12425, '0', v12430);
          const v12433 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v12432);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: v6041
            });
          const v12435 = stdlib.safeSub(v12390, v12392);
          const v12437 = stdlib.safeSub(v12413, v12415);
          const v12450 = stdlib.cast("UInt", "UInt256", v12392, false, true);
          const v12451 = stdlib.safeAdd256(v12380, v12450);
          const v12453 = stdlib.cast("UInt", "UInt256", v12415, false, true);
          const v12454 = stdlib.safeAdd256(v12403, v12453);
          const v12455 = [v12451, v12454];
          const v12456 = {
            rewards: v12455,
            stake: v12374
            };
          await stdlib.simMapSet(sim_r, 0, ctc6, v11362, ctc4, v12456);
          const v12461 = [v12435, v12437];
          const v12462 = {
            totalRemaining: v12461,
            userReceived: v12416
            };
          const v12466 = await txn1.getOutput('Staker_harvest', 'v12462', ctc16, v12462);
          
          null;
          const v28422 = v12341;
          const v28423 = v11364;
          const v28424 = v12461;
          const v28425 = v10784;
          const v28427 = v12433;
          const v28428 = v12424;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_stake0_2231': {
          const v12856 = v11363[1];
          
          break;
          }
        case 'Staker_withdraw0_2231': {
          const v13601 = v11363[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2231': {
          const v14346 = v11363[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
  switch (v11363[0]) {
    case 'Staker_emergencyWithdraw0_2231': {
      const v11366 = v11363[1];
      return;
      break;
      }
    case 'Staker_harvest0_2231': {
      const v12111 = v11363[1];
      undefined /* setApiDetails */;
      const v12125 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      ;
      let v12341;
      if (v12125) {
        v12341 = v10781;
        }
      else {
        const v12343 = stdlib.le(v6057, v11364);
        const v12344 = v12343 ? v6057 : v11364;
        const v12345 = stdlib.ge(v6056, v10782);
        const v12346 = v12345 ? v6056 : v10782;
        let v12347;
        const v12348 = stdlib.ge(v12346, v12344);
        if (v12348) {
          v12347 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v12349 = stdlib.safeSub(v12344, v12346);
          v12347 = v12349;
          }
        const v12350 = stdlib.cast("UInt", "UInt256", v12347, false, true);
        const v12351 = stdlib.safeMul256(v6090, v12350);
        const v12352 = stdlib.cast("UInt", "UInt256", v10784, false, true);
        const v12353 = stdlib.safeDiv256(v12351, v12352);
        const v12354 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v12355 = stdlib.safeAdd256(v12354, v12353);
        let v12360;
        if (v12348) {
          v12360 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v12362 = stdlib.safeSub(v12344, v12346);
          v12360 = v12362;
          }
        const v12363 = stdlib.cast("UInt", "UInt256", v12360, false, true);
        const v12364 = stdlib.safeMul256(v6095, v12363);
        const v12366 = stdlib.safeDiv256(v12364, v12352);
        const v12367 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v12368 = stdlib.safeAdd256(v12367, v12366);
        const v12369 = [v12355, v12368];
        v12341 = v12369;
        }
      const v12370 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11362, ctc4), null);
      const v12372 = {
        rewards: v10780,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v12373 = stdlib.fromSome(v12370, v12372);
      const v12374 = v12373.stake;
      const v12379 = v12373.rewards;
      const v12380 = v12379[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
      const v12382 = v12341[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
      const v12383 = stdlib.cast("UInt", "UInt256", v12374, false, true);
      const v12384 = stdlib.safeMul256(v12383, v12382);
      const v12385 = stdlib.safeDiv256(v12384, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v12386;
      const v12387 = stdlib.ge256(v12380, v12385);
      if (v12387) {
        v12386 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v12388 = stdlib.safeSub256(v12385, v12380);
        v12386 = v12388;
        }
      const v12389 = stdlib.cast("UInt256", "UInt", v12386, false, true);
      const v12390 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
      const v12391 = stdlib.le(v12389, v12390);
      const v12392 = v12391 ? v12389 : v12390;
      const v12403 = v12379[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
      const v12405 = v12341[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
      const v12407 = stdlib.safeMul256(v12383, v12405);
      const v12408 = stdlib.safeDiv256(v12407, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v12409;
      const v12410 = stdlib.ge256(v12403, v12408);
      if (v12410) {
        v12409 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v12411 = stdlib.safeSub256(v12408, v12403);
        v12409 = v12411;
        }
      const v12412 = stdlib.cast("UInt256", "UInt", v12409, false, true);
      const v12413 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
      const v12414 = stdlib.le(v12412, v12413);
      const v12415 = v12414 ? v12412 : v12413;
      const v12416 = [v12392, v12415];
      const v12424 = stdlib.sub(v10792, v12392);
      ;
      const v12425 = v10791[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v12426 = v12425[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v12430 = stdlib.sub(v12426, v12415);
      const v12432 = stdlib.Array_set(v12425, '0', v12430);
      const v12433 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v12432);
      ;
      const v12435 = stdlib.safeSub(v12390, v12392);
      const v12437 = stdlib.safeSub(v12413, v12415);
      const v12450 = stdlib.cast("UInt", "UInt256", v12392, false, true);
      const v12451 = stdlib.safeAdd256(v12380, v12450);
      const v12453 = stdlib.cast("UInt", "UInt256", v12415, false, true);
      const v12454 = stdlib.safeAdd256(v12403, v12453);
      const v12455 = [v12451, v12454];
      const v12456 = {
        rewards: v12455,
        stake: v12374
        };
      await stdlib.mapSet(map0, ctc6, v11362, ctc4, v12456);
      const v12461 = [v12435, v12437];
      const v12462 = {
        totalRemaining: v12461,
        userReceived: v12416
        };
      const v12466 = await txn1.getOutput('Staker_harvest', 'v12462', ctc16, v12462);
      if (v4727) {
        stdlib.protect(ctc0, await interact.out(v12111, v12466), {
          at: './staker.rsh:316:11:application',
          fs: ['at ./staker.rsh:316:11:application call to [unknown function] (defined at: ./staker.rsh:316:11:function exp)', 'at ./staker.rsh:321:10:application call to "k" (defined at: ./staker.rsh:319:42:function exp)', 'at ./staker.rsh:319:42:application call to [unknown function] (defined at: ./staker.rsh:319:42:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v28422 = v12341;
      const v28423 = v11364;
      const v28424 = v12461;
      const v28425 = v10784;
      const v28427 = v12433;
      const v28428 = v12424;
      return;
      
      break;
      }
    case 'Staker_stake0_2231': {
      const v12856 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2231': {
      const v13601 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2231': {
      const v14346 = v11363[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_stake6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_stake6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_stake6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    Staker_emergencyWithdraw0_2231: ctc14,
    Staker_harvest0_2231: ctc14,
    Staker_stake0_2231: ctc13,
    Staker_withdraw0_2231: ctc13,
    Staker_withdrawAndHarvest0_2231: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v10983 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2231" (defined at: ./staker.rsh:233:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v10984 = v10983[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v10987 = stdlib.lt(v10782, v6057);
  stdlib.assert(v10987, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2231" (defined at: ./staker.rsh:233:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only stake before the end',
    who: 'Staker_stake'
    });
  const v10989 = stdlib.gt(v10984, stdlib.checkedBigNumberify('./staker.rsh:238:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v10989, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2231" (defined at: ./staker.rsh:233:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'must stake more than 0',
    who: 'Staker_stake'
    });
  const v11025 = ['Staker_stake0_2231', v10983];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792, v11025],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:240:17:decimal', stdlib.UInt_max, '0'), [[v10984, v6042]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
      
      switch (v11363[0]) {
        case 'Staker_emergencyWithdraw0_2231': {
          const v11366 = v11363[1];
          
          break;
          }
        case 'Staker_harvest0_2231': {
          const v12111 = v11363[1];
          
          break;
          }
        case 'Staker_stake0_2231': {
          const v12856 = v11363[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v12905 = v12856[stdlib.checkedBigNumberify('./staker.rsh:233:10:spread', stdlib.UInt_max, '0')];
          const v12912 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v13045 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13046 = v13045[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v13047 = stdlib.add(v13046, v12905);
          const v13049 = stdlib.Array_set(v13045, '0', v13047);
          const v13050 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13049);
          sim_r.txns.push({
            amt: v12905,
            kind: 'to',
            tok: v6042
            });
          let v13235;
          if (v12912) {
            v13235 = v10781;
            }
          else {
            const v13237 = stdlib.le(v6057, v11364);
            const v13238 = v13237 ? v6057 : v11364;
            const v13239 = stdlib.ge(v6056, v10782);
            const v13240 = v13239 ? v6056 : v10782;
            let v13241;
            const v13242 = stdlib.ge(v13240, v13238);
            if (v13242) {
              v13241 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v13243 = stdlib.safeSub(v13238, v13240);
              v13241 = v13243;
              }
            const v13244 = stdlib.cast("UInt", "UInt256", v13241, false, true);
            const v13245 = stdlib.safeMul256(v6090, v13244);
            const v13246 = stdlib.cast("UInt", "UInt256", v10784, false, true);
            const v13247 = stdlib.safeDiv256(v13245, v13246);
            const v13248 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v13249 = stdlib.safeAdd256(v13248, v13247);
            let v13254;
            if (v13242) {
              v13254 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v13256 = stdlib.safeSub(v13238, v13240);
              v13254 = v13256;
              }
            const v13257 = stdlib.cast("UInt", "UInt256", v13254, false, true);
            const v13258 = stdlib.safeMul256(v6095, v13257);
            const v13260 = stdlib.safeDiv256(v13258, v13246);
            const v13261 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v13262 = stdlib.safeAdd256(v13261, v13260);
            const v13263 = [v13249, v13262];
            v13235 = v13263;
            }
          const v13265 = stdlib.safeAdd(v10784, v12905);
          const v13266 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v11362, ctc4), null);
          const v13268 = {
            rewards: v10780,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v13269 = stdlib.fromSome(v13266, v13268);
          const v13270 = v13269.stake;
          const v13271 = stdlib.safeAdd(v13270, v12905);
          const v13276 = v13269.rewards;
          const v13277 = v13235[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '0')];
          const v13278 = stdlib.cast("UInt", "UInt256", v12905, false, true);
          const v13279 = stdlib.safeMul256(v13278, v13277);
          const v13280 = stdlib.safeDiv256(v13279, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v13281 = v13276[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '0')];
          const v13282 = stdlib.safeAdd256(v13281, v13280);
          const v13283 = v13235[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '1')];
          const v13285 = stdlib.safeMul256(v13278, v13283);
          const v13286 = stdlib.safeDiv256(v13285, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v13287 = v13276[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '1')];
          const v13288 = stdlib.safeAdd256(v13287, v13286);
          const v13289 = [v13282, v13288];
          const v13290 = {
            rewards: v13289,
            stake: v13271
            };
          await stdlib.simMapSet(sim_r, 0, ctc6, v11362, ctc4, v13290);
          const v13291 = {
            newEveryoneStaked: v13265,
            newUserStaked: v13271
            };
          const v13293 = await txn1.getOutput('Staker_stake', 'v13291', ctc16, v13291);
          
          null;
          const v28476 = v13235;
          const v28477 = v11364;
          const v28478 = v10783;
          const v28479 = v13265;
          const v28481 = v13050;
          const v28482 = v10792;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdraw0_2231': {
          const v13601 = v11363[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2231': {
          const v14346 = v11363[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
  switch (v11363[0]) {
    case 'Staker_emergencyWithdraw0_2231': {
      const v11366 = v11363[1];
      return;
      break;
      }
    case 'Staker_harvest0_2231': {
      const v12111 = v11363[1];
      return;
      break;
      }
    case 'Staker_stake0_2231': {
      const v12856 = v11363[1];
      undefined /* setApiDetails */;
      const v12905 = v12856[stdlib.checkedBigNumberify('./staker.rsh:233:10:spread', stdlib.UInt_max, '0')];
      const v12907 = stdlib.lt(v10782, v6057);
      stdlib.assert(v12907, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'can only stake before the end',
        who: 'Staker_stake'
        });
      const v12909 = stdlib.gt(v12905, stdlib.checkedBigNumberify('./staker.rsh:238:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v12909, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'must stake more than 0',
        who: 'Staker_stake'
        });
      const v12912 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v13045 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13046 = v13045[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v13047 = stdlib.add(v13046, v12905);
      const v13049 = stdlib.Array_set(v13045, '0', v13047);
      const v13050 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13049);
      ;
      let v13235;
      if (v12912) {
        v13235 = v10781;
        }
      else {
        const v13237 = stdlib.le(v6057, v11364);
        const v13238 = v13237 ? v6057 : v11364;
        const v13239 = stdlib.ge(v6056, v10782);
        const v13240 = v13239 ? v6056 : v10782;
        let v13241;
        const v13242 = stdlib.ge(v13240, v13238);
        if (v13242) {
          v13241 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v13243 = stdlib.safeSub(v13238, v13240);
          v13241 = v13243;
          }
        const v13244 = stdlib.cast("UInt", "UInt256", v13241, false, true);
        const v13245 = stdlib.safeMul256(v6090, v13244);
        const v13246 = stdlib.cast("UInt", "UInt256", v10784, false, true);
        const v13247 = stdlib.safeDiv256(v13245, v13246);
        const v13248 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v13249 = stdlib.safeAdd256(v13248, v13247);
        let v13254;
        if (v13242) {
          v13254 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v13256 = stdlib.safeSub(v13238, v13240);
          v13254 = v13256;
          }
        const v13257 = stdlib.cast("UInt", "UInt256", v13254, false, true);
        const v13258 = stdlib.safeMul256(v6095, v13257);
        const v13260 = stdlib.safeDiv256(v13258, v13246);
        const v13261 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v13262 = stdlib.safeAdd256(v13261, v13260);
        const v13263 = [v13249, v13262];
        v13235 = v13263;
        }
      const v13265 = stdlib.safeAdd(v10784, v12905);
      const v13266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11362, ctc4), null);
      const v13268 = {
        rewards: v10780,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v13269 = stdlib.fromSome(v13266, v13268);
      const v13270 = v13269.stake;
      const v13271 = stdlib.safeAdd(v13270, v12905);
      const v13276 = v13269.rewards;
      const v13277 = v13235[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '0')];
      const v13278 = stdlib.cast("UInt", "UInt256", v12905, false, true);
      const v13279 = stdlib.safeMul256(v13278, v13277);
      const v13280 = stdlib.safeDiv256(v13279, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v13281 = v13276[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '0')];
      const v13282 = stdlib.safeAdd256(v13281, v13280);
      const v13283 = v13235[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '1')];
      const v13285 = stdlib.safeMul256(v13278, v13283);
      const v13286 = stdlib.safeDiv256(v13285, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v13287 = v13276[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '1')];
      const v13288 = stdlib.safeAdd256(v13287, v13286);
      const v13289 = [v13282, v13288];
      const v13290 = {
        rewards: v13289,
        stake: v13271
        };
      await stdlib.mapSet(map0, ctc6, v11362, ctc4, v13290);
      const v13291 = {
        newEveryoneStaked: v13265,
        newUserStaked: v13271
        };
      const v13293 = await txn1.getOutput('Staker_stake', 'v13291', ctc16, v13291);
      if (v4727) {
        stdlib.protect(ctc0, await interact.out(v12856, v13293), {
          at: './staker.rsh:233:11:application',
          fs: ['at ./staker.rsh:233:11:application call to [unknown function] (defined at: ./staker.rsh:233:11:function exp)', 'at ./staker.rsh:242:10:application call to "k" (defined at: ./staker.rsh:240:44:function exp)', 'at ./staker.rsh:240:44:application call to [unknown function] (defined at: ./staker.rsh:240:44:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      null;
      const v28476 = v13235;
      const v28477 = v11364;
      const v28478 = v10783;
      const v28479 = v13265;
      const v28481 = v13050;
      const v28482 = v10792;
      return;
      
      break;
      }
    case 'Staker_withdraw0_2231': {
      const v13601 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2231': {
      const v14346 = v11363[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_withdraw6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_withdraw6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_withdraw6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    Staker_emergencyWithdraw0_2231: ctc14,
    Staker_harvest0_2231: ctc14,
    Staker_stake0_2231: ctc13,
    Staker_withdraw0_2231: ctc13,
    Staker_withdrawAndHarvest0_2231: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11027 = ctc.selfAddress();
  const v11029 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdraw0_2231" (defined at: ./staker.rsh:270:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v11030 = v11029[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11033 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11027, ctc4), null);
  const v11035 = {
    rewards: v10780,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v11036 = stdlib.fromSome(v11033, v11035);
  const v11037 = v11036.stake;
  const v11038 = stdlib.le(v11030, v11037);
  stdlib.assert(v11038, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdraw0_2231" (defined at: ./staker.rsh:270:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v11074 = ['Staker_withdraw0_2231', v11029];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792, v11074],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:274:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:274:21:decimal', stdlib.UInt_max, '0'), v6042]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
      
      switch (v11363[0]) {
        case 'Staker_emergencyWithdraw0_2231': {
          const v11366 = v11363[1];
          
          break;
          }
        case 'Staker_harvest0_2231': {
          const v12111 = v11363[1];
          
          break;
          }
        case 'Staker_stake0_2231': {
          const v12856 = v11363[1];
          
          break;
          }
        case 'Staker_withdraw0_2231': {
          const v13601 = v11363[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          const v13692 = v13601[stdlib.checkedBigNumberify('./staker.rsh:270:10:spread', stdlib.UInt_max, '0')];
          const v13694 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v11362, ctc4), null);
          const v13696 = {
            rewards: v10780,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v13697 = stdlib.fromSome(v13694, v13696);
          const v13698 = v13697.stake;
          const v13702 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v13790 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13791 = v13790[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          ;
          let v14058;
          if (v13702) {
            v14058 = v10781;
            }
          else {
            const v14060 = stdlib.le(v6057, v11364);
            const v14061 = v14060 ? v6057 : v11364;
            const v14062 = stdlib.ge(v6056, v10782);
            const v14063 = v14062 ? v6056 : v10782;
            let v14064;
            const v14065 = stdlib.ge(v14063, v14061);
            if (v14065) {
              v14064 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14066 = stdlib.safeSub(v14061, v14063);
              v14064 = v14066;
              }
            const v14067 = stdlib.cast("UInt", "UInt256", v14064, false, true);
            const v14068 = stdlib.safeMul256(v6090, v14067);
            const v14069 = stdlib.cast("UInt", "UInt256", v10784, false, true);
            const v14070 = stdlib.safeDiv256(v14068, v14069);
            const v14071 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v14072 = stdlib.safeAdd256(v14071, v14070);
            let v14077;
            if (v14065) {
              v14077 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14079 = stdlib.safeSub(v14061, v14063);
              v14077 = v14079;
              }
            const v14080 = stdlib.cast("UInt", "UInt256", v14077, false, true);
            const v14081 = stdlib.safeMul256(v6095, v14080);
            const v14083 = stdlib.safeDiv256(v14081, v14069);
            const v14084 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v14085 = stdlib.safeAdd256(v14084, v14083);
            const v14086 = [v14072, v14085];
            v14058 = v14086;
            }
          const v14093 = stdlib.safeSub(v10784, v13692);
          const v14094 = stdlib.safeSub(v13698, v13692);
          const v14099 = v13697.rewards;
          const v14108 = stdlib.sub(v13791, v13692);
          const v14110 = stdlib.Array_set(v13790, '0', v14108);
          const v14111 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v14110);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: v6042
            });
          const v14112 = v14099[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
          const v14113 = v14058[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '0')];
          const v14114 = stdlib.cast("UInt", "UInt256", v13692, false, true);
          const v14115 = stdlib.safeMul256(v14114, v14113);
          const v14116 = stdlib.safeDiv256(v14115, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14117;
          const v14118 = stdlib.ge256(v14116, v14112);
          if (v14118) {
            v14117 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14119 = stdlib.safeSub256(v14112, v14116);
            v14117 = v14119;
            }
          const v14120 = v14099[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
          const v14121 = v14058[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '1')];
          const v14123 = stdlib.safeMul256(v14114, v14121);
          const v14124 = stdlib.safeDiv256(v14123, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14125;
          const v14126 = stdlib.ge256(v14124, v14120);
          if (v14126) {
            v14125 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14127 = stdlib.safeSub256(v14120, v14124);
            v14125 = v14127;
            }
          const v14128 = [v14117, v14125];
          const v14129 = {
            rewards: v14128,
            stake: v14094
            };
          await stdlib.simMapSet(sim_r, 0, ctc6, v11362, ctc4, v14129);
          const v14130 = {
            newEveryoneStaked: v14093,
            newUserStaked: v14094
            };
          const v14132 = await txn1.getOutput('Staker_withdraw', 'v14130', ctc16, v14130);
          
          null;
          const v28530 = v14058;
          const v28531 = v11364;
          const v28532 = v10783;
          const v28533 = v14093;
          const v28535 = v14111;
          const v28536 = v10792;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2231': {
          const v14346 = v11363[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
  switch (v11363[0]) {
    case 'Staker_emergencyWithdraw0_2231': {
      const v11366 = v11363[1];
      return;
      break;
      }
    case 'Staker_harvest0_2231': {
      const v12111 = v11363[1];
      return;
      break;
      }
    case 'Staker_stake0_2231': {
      const v12856 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2231': {
      const v13601 = v11363[1];
      undefined /* setApiDetails */;
      const v13692 = v13601[stdlib.checkedBigNumberify('./staker.rsh:270:10:spread', stdlib.UInt_max, '0')];
      const v13694 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11362, ctc4), null);
      const v13696 = {
        rewards: v10780,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v13697 = stdlib.fromSome(v13694, v13696);
      const v13698 = v13697.stake;
      const v13699 = stdlib.le(v13692, v13698);
      stdlib.assert(v13699, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      const v13702 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v13790 = v10791[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13791 = v13790[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      ;
      let v14058;
      if (v13702) {
        v14058 = v10781;
        }
      else {
        const v14060 = stdlib.le(v6057, v11364);
        const v14061 = v14060 ? v6057 : v11364;
        const v14062 = stdlib.ge(v6056, v10782);
        const v14063 = v14062 ? v6056 : v10782;
        let v14064;
        const v14065 = stdlib.ge(v14063, v14061);
        if (v14065) {
          v14064 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14066 = stdlib.safeSub(v14061, v14063);
          v14064 = v14066;
          }
        const v14067 = stdlib.cast("UInt", "UInt256", v14064, false, true);
        const v14068 = stdlib.safeMul256(v6090, v14067);
        const v14069 = stdlib.cast("UInt", "UInt256", v10784, false, true);
        const v14070 = stdlib.safeDiv256(v14068, v14069);
        const v14071 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v14072 = stdlib.safeAdd256(v14071, v14070);
        let v14077;
        if (v14065) {
          v14077 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14079 = stdlib.safeSub(v14061, v14063);
          v14077 = v14079;
          }
        const v14080 = stdlib.cast("UInt", "UInt256", v14077, false, true);
        const v14081 = stdlib.safeMul256(v6095, v14080);
        const v14083 = stdlib.safeDiv256(v14081, v14069);
        const v14084 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v14085 = stdlib.safeAdd256(v14084, v14083);
        const v14086 = [v14072, v14085];
        v14058 = v14086;
        }
      const v14093 = stdlib.safeSub(v10784, v13692);
      const v14094 = stdlib.safeSub(v13698, v13692);
      const v14099 = v13697.rewards;
      const v14108 = stdlib.sub(v13791, v13692);
      const v14110 = stdlib.Array_set(v13790, '0', v14108);
      const v14111 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v14110);
      ;
      const v14112 = v14099[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
      const v14113 = v14058[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '0')];
      const v14114 = stdlib.cast("UInt", "UInt256", v13692, false, true);
      const v14115 = stdlib.safeMul256(v14114, v14113);
      const v14116 = stdlib.safeDiv256(v14115, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14117;
      const v14118 = stdlib.ge256(v14116, v14112);
      if (v14118) {
        v14117 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14119 = stdlib.safeSub256(v14112, v14116);
        v14117 = v14119;
        }
      const v14120 = v14099[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
      const v14121 = v14058[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '1')];
      const v14123 = stdlib.safeMul256(v14114, v14121);
      const v14124 = stdlib.safeDiv256(v14123, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14125;
      const v14126 = stdlib.ge256(v14124, v14120);
      if (v14126) {
        v14125 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14127 = stdlib.safeSub256(v14120, v14124);
        v14125 = v14127;
        }
      const v14128 = [v14117, v14125];
      const v14129 = {
        rewards: v14128,
        stake: v14094
        };
      await stdlib.mapSet(map0, ctc6, v11362, ctc4, v14129);
      const v14130 = {
        newEveryoneStaked: v14093,
        newUserStaked: v14094
        };
      const v14132 = await txn1.getOutput('Staker_withdraw', 'v14130', ctc16, v14130);
      if (v4727) {
        stdlib.protect(ctc0, await interact.out(v13601, v14132), {
          at: './staker.rsh:270:11:application',
          fs: ['at ./staker.rsh:270:11:application call to [unknown function] (defined at: ./staker.rsh:270:11:function exp)', 'at ./staker.rsh:276:10:application call to "k" (defined at: ./staker.rsh:274:42:function exp)', 'at ./staker.rsh:274:42:application call to [unknown function] (defined at: ./staker.rsh:274:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      null;
      const v28530 = v14058;
      const v28531 = v11364;
      const v28532 = v10783;
      const v28533 = v14093;
      const v28535 = v14111;
      const v28536 = v10792;
      return;
      
      break;
      }
    case 'Staker_withdrawAndHarvest0_2231': {
      const v14346 = v11363[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_withdrawAndHarvest6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_withdrawAndHarvest6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_withdrawAndHarvest6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Struct([['rewardToken1', ctc7], ['stakeToken', ctc7], ['rewards', ctc8], ['start', ctc3], ['end', ctc3], ['Rewarder0', ctc6]]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    Staker_emergencyWithdraw0_2231: ctc14,
    Staker_harvest0_2231: ctc14,
    Staker_stake0_2231: ctc13,
    Staker_withdraw0_2231: ctc13,
    Staker_withdrawAndHarvest0_2231: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  const ctc17 = stdlib.T_Struct([['userReceived', ctc8], ['totalRemaining', ctc8]]);
  const ctc18 = stdlib.T_Tuple([ctc16, ctc17]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11122 = ctc.selfAddress();
  const v11124 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdrawAndHarvest0_2231" (defined at: ./staker.rsh:326:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdrawAndHarvest'
    });
  const v11125 = v11124[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11128 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11122, ctc4), null);
  const v11130 = {
    rewards: v10780,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v11131 = stdlib.fromSome(v11128, v11130);
  const v11132 = v11131.stake;
  const v11133 = stdlib.le(v11125, v11132);
  stdlib.assert(v11133, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdrawAndHarvest0_2231" (defined at: ./staker.rsh:326:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdrawAndHarvest'
    });
  const v11169 = ['Staker_withdrawAndHarvest0_2231', v11124];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6039, v6040, v6041, v6042, v6056, v6057, v6065, v6090, v6095, v10780, v10781, v10782, v10783, v10784, v10791, v10792, v11169],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:330:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:330:21:decimal', stdlib.UInt_max, '0'), v6042]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
      
      switch (v11363[0]) {
        case 'Staker_emergencyWithdraw0_2231': {
          const v11366 = v11363[1];
          
          break;
          }
        case 'Staker_harvest0_2231': {
          const v12111 = v11363[1];
          
          break;
          }
        case 'Staker_stake0_2231': {
          const v12856 = v11363[1];
          
          break;
          }
        case 'Staker_withdraw0_2231': {
          const v13601 = v11363[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2231': {
          const v14346 = v11363[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdrawAndHarvest"
            });
          const v14482 = v14346[stdlib.checkedBigNumberify('./staker.rsh:326:10:spread', stdlib.UInt_max, '0')];
          const v14484 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v11362, ctc4), null);
          const v14486 = {
            rewards: v10780,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v14487 = stdlib.fromSome(v14484, v14486);
          const v14488 = v14487.stake;
          const v14492 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          let v14897;
          if (v14492) {
            v14897 = v10781;
            }
          else {
            const v14899 = stdlib.le(v6057, v11364);
            const v14900 = v14899 ? v6057 : v11364;
            const v14901 = stdlib.ge(v6056, v10782);
            const v14902 = v14901 ? v6056 : v10782;
            let v14903;
            const v14904 = stdlib.ge(v14902, v14900);
            if (v14904) {
              v14903 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14905 = stdlib.safeSub(v14900, v14902);
              v14903 = v14905;
              }
            const v14906 = stdlib.cast("UInt", "UInt256", v14903, false, true);
            const v14907 = stdlib.safeMul256(v6090, v14906);
            const v14908 = stdlib.cast("UInt", "UInt256", v10784, false, true);
            const v14909 = stdlib.safeDiv256(v14907, v14908);
            const v14910 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v14911 = stdlib.safeAdd256(v14910, v14909);
            let v14916;
            if (v14904) {
              v14916 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14918 = stdlib.safeSub(v14900, v14902);
              v14916 = v14918;
              }
            const v14919 = stdlib.cast("UInt", "UInt256", v14916, false, true);
            const v14920 = stdlib.safeMul256(v6095, v14919);
            const v14922 = stdlib.safeDiv256(v14920, v14908);
            const v14923 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v14924 = stdlib.safeAdd256(v14923, v14922);
            const v14925 = [v14911, v14924];
            v14897 = v14925;
            }
          const v14936 = v14487.rewards;
          const v14937 = v14936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
          const v14939 = v14897[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
          const v14940 = stdlib.cast("UInt", "UInt256", v14488, false, true);
          const v14941 = stdlib.safeMul256(v14940, v14939);
          const v14942 = stdlib.safeDiv256(v14941, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14943;
          const v14944 = stdlib.ge256(v14937, v14942);
          if (v14944) {
            v14943 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14945 = stdlib.safeSub256(v14942, v14937);
            v14943 = v14945;
            }
          const v14946 = stdlib.cast("UInt256", "UInt", v14943, false, true);
          const v14947 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
          const v14948 = stdlib.le(v14946, v14947);
          const v14949 = v14948 ? v14946 : v14947;
          const v14960 = v14936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
          const v14962 = v14897[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
          const v14964 = stdlib.safeMul256(v14940, v14962);
          const v14965 = stdlib.safeDiv256(v14964, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14966;
          const v14967 = stdlib.ge256(v14960, v14965);
          if (v14967) {
            v14966 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14968 = stdlib.safeSub256(v14965, v14960);
            v14966 = v14968;
            }
          const v14969 = stdlib.cast("UInt256", "UInt", v14966, false, true);
          const v14970 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
          const v14971 = stdlib.le(v14969, v14970);
          const v14972 = v14971 ? v14969 : v14970;
          const v14973 = [v14949, v14972];
          const v14981 = stdlib.sub(v10792, v14949);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: undefined /* Nothing */
            });
          const v14982 = v10791[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v14983 = v14982[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v14987 = stdlib.sub(v14983, v14972);
          const v14989 = stdlib.Array_set(v14982, '0', v14987);
          const v14990 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v14989);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: v6041
            });
          const v14992 = stdlib.safeSub(v14947, v14949);
          const v14994 = stdlib.safeSub(v14970, v14972);
          const v15007 = stdlib.cast("UInt", "UInt256", v14949, false, true);
          const v15008 = stdlib.safeAdd256(v14937, v15007);
          const v15010 = stdlib.cast("UInt", "UInt256", v14972, false, true);
          const v15011 = stdlib.safeAdd256(v14960, v15010);
          const v15012 = [v15008, v15011];
          const v15013 = {
            rewards: v15012,
            stake: v14488
            };
          await stdlib.simMapSet(sim_r, 0, ctc6, v11362, ctc4, v15013);
          const v15018 = [v14992, v14994];
          const v15019 = {
            totalRemaining: v15018,
            userReceived: v14973
            };
          const v15024 = v15013.stake;
          const v15025 = stdlib.safeSub(v10784, v14482);
          const v15026 = stdlib.safeSub(v15024, v14482);
          const v15031 = v15013.rewards;
          const v15035 = v14990[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1')];
          const v15036 = v15035[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '0')];
          const v15040 = stdlib.sub(v15036, v14482);
          const v15042 = stdlib.Array_set(v15035, '0', v15040);
          const v15043 = stdlib.Array_set(v14990, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v15042);
          sim_r.txns.push({
            kind: 'from',
            to: v11362,
            tok: v6042
            });
          const v15044 = v15031[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
          const v15046 = stdlib.cast("UInt", "UInt256", v14482, false, true);
          const v15047 = stdlib.safeMul256(v15046, v14939);
          const v15048 = stdlib.safeDiv256(v15047, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v15049;
          const v15050 = stdlib.ge256(v15048, v15044);
          if (v15050) {
            v15049 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v15051 = stdlib.safeSub256(v15044, v15048);
            v15049 = v15051;
            }
          const v15052 = v15031[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
          const v15055 = stdlib.safeMul256(v15046, v14962);
          const v15056 = stdlib.safeDiv256(v15055, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v15057;
          const v15058 = stdlib.ge256(v15056, v15052);
          if (v15058) {
            v15057 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v15059 = stdlib.safeSub256(v15052, v15056);
            v15057 = v15059;
            }
          const v15060 = [v15049, v15057];
          const v15061 = {
            rewards: v15060,
            stake: v15026
            };
          await stdlib.simMapSet(sim_r, 0, ctc6, v11362, ctc4, v15061);
          const v15062 = {
            newEveryoneStaked: v15025,
            newUserStaked: v15026
            };
          const v15067 = [v15062, v15019];
          const v15068 = await txn1.getOutput('Staker_withdrawAndHarvest', 'v15067', ctc18, v15067);
          
          null;
          null;
          const v28584 = v14897;
          const v28585 = v11364;
          const v28586 = v15018;
          const v28587 = v15025;
          const v28589 = v15043;
          const v28590 = v14981;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v11363], secs: v11365, time: v11364, didSend: v4727, from: v11362 } = txn1;
  switch (v11363[0]) {
    case 'Staker_emergencyWithdraw0_2231': {
      const v11366 = v11363[1];
      return;
      break;
      }
    case 'Staker_harvest0_2231': {
      const v12111 = v11363[1];
      return;
      break;
      }
    case 'Staker_stake0_2231': {
      const v12856 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2231': {
      const v13601 = v11363[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2231': {
      const v14346 = v11363[1];
      undefined /* setApiDetails */;
      const v14482 = v14346[stdlib.checkedBigNumberify('./staker.rsh:326:10:spread', stdlib.UInt_max, '0')];
      const v14484 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v11362, ctc4), null);
      const v14486 = {
        rewards: v10780,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14487 = stdlib.fromSome(v14484, v14486);
      const v14488 = v14487.stake;
      const v14489 = stdlib.le(v14482, v14488);
      stdlib.assert(v14489, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdrawAndHarvest'
        });
      const v14492 = stdlib.eq(v10784, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      ;
      let v14897;
      if (v14492) {
        v14897 = v10781;
        }
      else {
        const v14899 = stdlib.le(v6057, v11364);
        const v14900 = v14899 ? v6057 : v11364;
        const v14901 = stdlib.ge(v6056, v10782);
        const v14902 = v14901 ? v6056 : v10782;
        let v14903;
        const v14904 = stdlib.ge(v14902, v14900);
        if (v14904) {
          v14903 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14905 = stdlib.safeSub(v14900, v14902);
          v14903 = v14905;
          }
        const v14906 = stdlib.cast("UInt", "UInt256", v14903, false, true);
        const v14907 = stdlib.safeMul256(v6090, v14906);
        const v14908 = stdlib.cast("UInt", "UInt256", v10784, false, true);
        const v14909 = stdlib.safeDiv256(v14907, v14908);
        const v14910 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v14911 = stdlib.safeAdd256(v14910, v14909);
        let v14916;
        if (v14904) {
          v14916 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14918 = stdlib.safeSub(v14900, v14902);
          v14916 = v14918;
          }
        const v14919 = stdlib.cast("UInt", "UInt256", v14916, false, true);
        const v14920 = stdlib.safeMul256(v6095, v14919);
        const v14922 = stdlib.safeDiv256(v14920, v14908);
        const v14923 = v10781[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v14924 = stdlib.safeAdd256(v14923, v14922);
        const v14925 = [v14911, v14924];
        v14897 = v14925;
        }
      const v14936 = v14487.rewards;
      const v14937 = v14936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
      const v14939 = v14897[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
      const v14940 = stdlib.cast("UInt", "UInt256", v14488, false, true);
      const v14941 = stdlib.safeMul256(v14940, v14939);
      const v14942 = stdlib.safeDiv256(v14941, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14943;
      const v14944 = stdlib.ge256(v14937, v14942);
      if (v14944) {
        v14943 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14945 = stdlib.safeSub256(v14942, v14937);
        v14943 = v14945;
        }
      const v14946 = stdlib.cast("UInt256", "UInt", v14943, false, true);
      const v14947 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
      const v14948 = stdlib.le(v14946, v14947);
      const v14949 = v14948 ? v14946 : v14947;
      const v14960 = v14936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
      const v14962 = v14897[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
      const v14964 = stdlib.safeMul256(v14940, v14962);
      const v14965 = stdlib.safeDiv256(v14964, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14966;
      const v14967 = stdlib.ge256(v14960, v14965);
      if (v14967) {
        v14966 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14968 = stdlib.safeSub256(v14965, v14960);
        v14966 = v14968;
        }
      const v14969 = stdlib.cast("UInt256", "UInt", v14966, false, true);
      const v14970 = v10783[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
      const v14971 = stdlib.le(v14969, v14970);
      const v14972 = v14971 ? v14969 : v14970;
      const v14973 = [v14949, v14972];
      const v14981 = stdlib.sub(v10792, v14949);
      ;
      const v14982 = v10791[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v14983 = v14982[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v14987 = stdlib.sub(v14983, v14972);
      const v14989 = stdlib.Array_set(v14982, '0', v14987);
      const v14990 = stdlib.Array_set(v10791, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v14989);
      ;
      const v14992 = stdlib.safeSub(v14947, v14949);
      const v14994 = stdlib.safeSub(v14970, v14972);
      const v15007 = stdlib.cast("UInt", "UInt256", v14949, false, true);
      const v15008 = stdlib.safeAdd256(v14937, v15007);
      const v15010 = stdlib.cast("UInt", "UInt256", v14972, false, true);
      const v15011 = stdlib.safeAdd256(v14960, v15010);
      const v15012 = [v15008, v15011];
      const v15013 = {
        rewards: v15012,
        stake: v14488
        };
      await stdlib.mapSet(map0, ctc6, v11362, ctc4, v15013);
      const v15018 = [v14992, v14994];
      const v15019 = {
        totalRemaining: v15018,
        userReceived: v14973
        };
      const v15024 = v15013.stake;
      const v15025 = stdlib.safeSub(v10784, v14482);
      const v15026 = stdlib.safeSub(v15024, v14482);
      const v15031 = v15013.rewards;
      const v15035 = v14990[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1')];
      const v15036 = v15035[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '0')];
      const v15040 = stdlib.sub(v15036, v14482);
      const v15042 = stdlib.Array_set(v15035, '0', v15040);
      const v15043 = stdlib.Array_set(v14990, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v15042);
      ;
      const v15044 = v15031[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
      const v15046 = stdlib.cast("UInt", "UInt256", v14482, false, true);
      const v15047 = stdlib.safeMul256(v15046, v14939);
      const v15048 = stdlib.safeDiv256(v15047, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v15049;
      const v15050 = stdlib.ge256(v15048, v15044);
      if (v15050) {
        v15049 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v15051 = stdlib.safeSub256(v15044, v15048);
        v15049 = v15051;
        }
      const v15052 = v15031[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
      const v15055 = stdlib.safeMul256(v15046, v14962);
      const v15056 = stdlib.safeDiv256(v15055, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v15057;
      const v15058 = stdlib.ge256(v15056, v15052);
      if (v15058) {
        v15057 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v15059 = stdlib.safeSub256(v15052, v15056);
        v15057 = v15059;
        }
      const v15060 = [v15049, v15057];
      const v15061 = {
        rewards: v15060,
        stake: v15026
        };
      await stdlib.mapSet(map0, ctc6, v11362, ctc4, v15061);
      const v15062 = {
        newEveryoneStaked: v15025,
        newUserStaked: v15026
        };
      const v15067 = [v15062, v15019];
      const v15068 = await txn1.getOutput('Staker_withdrawAndHarvest', 'v15067', ctc18, v15067);
      if (v4727) {
        stdlib.protect(ctc0, await interact.out(v14346, v15068), {
          at: './staker.rsh:326:11:application',
          fs: ['at ./staker.rsh:326:11:application call to [unknown function] (defined at: ./staker.rsh:326:11:function exp)', 'at ./staker.rsh:333:10:application call to "k" (defined at: ./staker.rsh:330:42:function exp)', 'at ./staker.rsh:330:42:application call to [unknown function] (defined at: ./staker.rsh:330:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdrawAndHarvest'
          });
        }
      else {
        }
      
      null;
      null;
      const v28584 = v14897;
      const v28585 = v11364;
      const v28586 = v15018;
      const v28587 = v15025;
      const v28589 = v15043;
      const v28590 = v14981;
      return;
      
      break;
      }
    }
  
  
  };
export async function Setup_abortSetup(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Setup_abortSetup expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Setup_abortSetup expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Setup_abortSetup2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Setup_fund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Setup_fund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Setup_fund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Setup_fund2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_emergencyWithdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_emergencyWithdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_emergencyWithdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Staker_emergencyWithdraw6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Staker_harvest6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Staker_stake6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Staker_withdraw6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_withdrawAndHarvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdrawAndHarvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdrawAndHarvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Staker_withdrawAndHarvest6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Setup_abortSetup()void`, `Setup_fund()void`, `Staker_emergencyWithdraw()(uint64,uint64)`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `Staker_withdrawAndHarvest(uint64)((uint64,uint64),((uint64,uint64),(uint64,uint64)))`, `_reachp_0((uint64,(uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[0])))void`, `_reachp_4((uint64,(byte,byte[8])))void`],
    pure: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,(uint64,uint64),(uint256,uint256),uint256)`, `Opts()(uint64,uint64,(uint64,uint64),uint64,uint64,address)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`],
    sigs: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,(uint64,uint64),(uint256,uint256),uint256)`, `Opts()(uint64,uint64,(uint64,uint64),uint64,uint64,address)`, `Setup_abortSetup()void`, `Setup_fund()void`, `Staker_emergencyWithdraw()(uint64,uint64)`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `Staker_withdrawAndHarvest(uint64)((uint64,uint64),((uint64,uint64),(uint64,uint64)))`, `_reachp_0((uint64,(uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64,(byte,byte[0])))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`]
    },
  GlobalNumByteSlice: 5,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAUABgIQAEGSNTbAgIFoI0GIHB4EBHAAQSAAYgBJgggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlQL5AABAAABAgEDAQEEZX6kEARisklVMRhBDFMqZEkiWzUBSSRbNQIhDls1BSlkJwVkUCtkUCcEZFCCEAQOHHkeBBvC5TIEKHL47AQ2z5gHBE90MTwEYvmMFQRrDnNUBH7VyiwEhmXa1gSO9wFBBJ3eQhkEs9q1dwTJL5xSBNP2+PQE39kjKATqoQW7NhoAjhAP8QCPAAEA+wtvANABEAuoD/kLswDoAH8ALABEC50QBwA0ASEFEkSIEE40HTQRFlA0ElA0FFAoUDUEMRkiEkSABBUffHU0BFCwIQRDNAEhCAxBDMQ0ASEEEkSIEQQ0HTUEQv/WgQmvNRUhCDQBEkSIEKQ0FSJbNR80FVcIATUggATV3gbBNB8WUDQgULA0H4gQZDQgIlWNAgxzDHZC/4GACQAAAAAAAAAAATUVQv+6IQ+vNQshBTQBEkSID7s0CyJbNQw0C1cICTUNgAQpJ2w2NAwWUDQNULA0DIgQGTQNIlWNBQwoDEMMRgxJDExC/zCAEQAAAAAAAAAAAQAAAAAAAAAANQtC/6w2GgEXNQskrys0CxZQUDULQv+ZNhoBFzULJK+AAQQ0CxZQUDULQv+ENhoBFzULJK8nBDQLFlBQNQtC/3AxADQeEjEANBgSEUQqNQyACAAAAAAAABgVNAxQsDQMNQQ0C1cAESJbNBw0HogO3yI0GzIKMgmIEE8iNBwyCjIJiBBFMRkhCRJEsSKyASEFshA0BbIYIQmyGbMhCjQHCDUHiA9iIjIKMgmIEEY0A0D+lEL+hzEANBgSRDQMiA/rKjUVgAgAAAAAAAAqDDQVULA0FTUEJa9JNRU0GjQNIjIGNAs0DDUONQ81EDURNRI1EzUUNB40HVA0HBZQNBsWUDQaFlA0GRZQNBhQNBdQNBZQNBVQNBRQNBMWUDQSUDQRFlA0D1A0DhZQIQUyBjUCNQEpSwFXAH9nJwVLAVd/f2crSwFX/n9nJwRMgf0CgT1YZyo0ARY0AhZQNAUWUGcxGSISRIgOoUL/RDQPVxERNSA0FSSvUCohBq8pMQBQiA3ciA3QSTUfJVs1DTQRNA0JNQwkrzQMFlA1C4AIAAAAAAAALTA0C1CwNAs1BDQNNBsxAIgNmyEHKTEAUDQfVwBAJK9QiA2igASzYXC0MQBQNA0WUDQLUDEAULA0DDIGNA80IEkiWzQNCRZcAFwRNQ81EDURQv7+iA3tNBFACjw0FDUiNBUkr1AqIQavKTEAUIgNS4gNP0k1CyVbNSQ0C1cAQEk1DVcAIDUjI680JBZQSTULNCJXACCjiA0LKKKIDQY1DDQjNAynQQpzMgM1HzQfSZMlDkQjWzUMNBIiW0k1ITQMSTQhDk01IDQNVyAgNQw0CzQiVyAgo4gMyyiiiAzGNQ00DDQNp0EKQDIDNQs0C0mTJQ5EI1s1DTQSJFtJNQs0DUk0Cw5NNR80IDEAiA1UNA9XABE1DTQfNBwxAIgMkCEHKTEAUDQjI680IBZQoIgMdDQMI680HxZQoIgMaFA0JBZQiAyCNCE0IAkWNAs0HwkWUDUMNCAWNB8WUDQMUDULgAgAAAAAAAAwrjQLULA0CzUEJwYxAFA0C1AxAFCwNCIyBjQMMgY0DzQNSSJbNB8JFlwAXAA0DjQgCTUONQ81EDUSNRM1FEL9qogMmTQNIQRbNSQ0EzQZDEQ0JCINRDQPVxERNSM0JDQbiA1jNBFACWU0FDUiNBE0JAg1DTQVJK9QKiEGrykxAFCIC9CIC8RJNQslWzQkCDUMNAtXAEA1HyOvNCQWUDULIQcpMQBQNB9XACA0CzQiVwAgo4gLhyiiiAuCoIgLfjQfVyAgNAs0IlcgIKOIC24ooogLaaCIC2VQNAwWUIgLfzQMFjQNFlA1C4AIAAAAAAAAM+s0C1CwNAs1BIAE2rxNjTEAUDQkFlA0C1CwNCIyBjQNMgY0DzQjSSJbNCQIFlwAXBE1DzUQNRE1EzUUQvy7iAuqNA0hBFs1JjQVJK9QKiEGrykxAFCICwqICv5JNSUlWzUkNCY0JA5ENA9XERE1IzQRQAj7NBQ1IjQRNCYJNQw0JDQmCTULNCVXAEA1DTQmNBsxAIgKvzQNVwAgNSQjrzQmFlBJNSE0IlcAIKOICpwooogKl0k1HzQkp0EJNTIDNSA0DVcgIDUfNCE0IlcgIKOICngooogKc0k1DTQfp0EJHjIDNSEhBykxAFA0IDQhUDQLFlCICnY0CxY0DBZQNQ2ACAAAAAAAADcyNA1QsDQNNQQnBzEAUDQmFlA0DVAxAFCwNCIyBjQMMgY0DzQjSSJbNCYJFlwAXBE1DzUQNRE1EzUUQvuziAqiNA0hBFs1JTQVJK9QKiEGrykxAFCICgKICfZJNSQlWzUjNCU0Iw5ENBFACJc0FDUiNCRXAEBJNQtXACA1JDQiVwAgNSEjrzQjFlBJNSA0IaOICa8ooogJqjUMNCQ0DKdBCOQyAzUNNA1JkyUORCNbNQw0EiJbSTUfNAxJNB8OTTUNNAtXICA1DDQiVyAgNSY0IDQmo4gJayiiiAlmNQs0DDQLp0EI0zIDNSA0IEmTJQ5EI1s1CzQSJFtJNSc0C0k0Jw5NNSA0DTEAiAn0NA9XABE1CzQPNAtJIls0IAkWXABcADUoNCA0HDEAiAkfNCQjrzQNFlCgiAkJNAwjrzQgFlCgiAj9UDQjFlA1CyEHKTEAUDQLiAkNNB80DQkWNCc0IAkWUDUMNA0WNCAWUDQMUDUfNBE0JQk1JDQLJVs0JQk1IzQLVwBANSA0KFcRETUqNCU0GzEAiAizNCBXACA1KSOvNCUWUEk1JzQho4gIkyiiiAiOSTULNCmnQQgJMgM1ITQgVyAgNQs0JzQmo4gIciiiiAhtSTUgNAunQQf1MgM1JiEHKTEAUDQhNCZQNCMWUIgIcDQjFjQkFlBJNQs0H1A1IIAIAAAAAAAAOts0IFCwNCA1BCcGMQBQNB9QMQBQsCcHMQBQNCUWUDQLUDEAULA0IjIGNAw0JDIGNCg0KkkiWzQlCRZcAFwRNA40DQk1DjUPNRA1ETUSNRM1FEL5kDQBIQUSRIgICTQRQAclNBQ1DTQVJK9QKiEGryk0C1CIB9eIB8tJNQxXAEBJNQ9XACA1DiOvNAxXQAhQSTULNA1XACCjiAebKKKIB5Y1EDQONBCnQQOcMgM1DDQMSZMlDkQjWzUONBIiWzUQNA9XICA1DDQLNA1XICCjiAdlKKKIB2A1DzQMNA+nQQNzMgM1CzQLSZMlDkQjWzUMNBIkWzULNBA0Dkk0EA5NFjQLNAxJNAsOTRZQNQRC9xk0ASEFEkSIB040CzUNNBFAAz80FDUONBUkr1AqIQavKTQMUIgHGIgHDEk1C1cAQEk1D1cAIDUNI680C1dACFBJNQw0DlcAIKOIBtwooogG1zUQNA00EKdBA3oyAzULNAtJkyUORCNbNQ00EiJbNRA0D1cgIDULNAw0DlcgIKOIBqYooogGoTUPNAs0D6dBA1EyAzUMNAxJkyUORCNbNQs0EiRbNQw0EDQNSTQQDk0WNAw0C0k0DA5NFlA1BEL2WjQBIQUSRIgGjyEGryohBq8pNAtQiAZoiAZcV0AINQRC9jgxADUeNAsiWzUMNAtXCFA1HTQLgVhbNRw0C4FgWzUbgAQ/XHqwNAwWUDQdUDQcFlA0GxZQsDQMiAa6IQ+vSTULSVBJNQxJVwARJK9cAFwASTULSVcRESSvXABcETURNBs0HBNEIQqIBpUiNBwyCogF3yEKiAaIIjQbMgqIBdI0HSELWzUaNB2BKFs1GTQaNBkMRDQdVxAQNQ00HVcwIDUYNA0iWzUMNA0kWzUPNBk0Ggk1EDQeNB1QNBwWUDQbFlA0EVA0GhZQNBkWUDQNUDQYUDQMFlA0DxZQNBAWUCEQr1AhBDIGQvdGIQQ0ARJEiAZuNAsXNQ6ABNUVGRQ0DhZQsDQOiAXuNBFXABE1DjQRNA5JIls0DwgWXABcADULNA80HIgGqzQeMQASRCOvNBAWUDUOI680DBZQKKOIBQg0DqKIBQI1FyOvNA8WUCijiAT1NA6iiATvNRY0HjQdUDQcFlA0GxZQNBoWUDQZFlA0DVA0GFA0DBZQNAtQNBdQNBZQgZABr1AhCDIGQvahiAVRgcCaDIgFZ7EisgEhBbIQgAYIMQAyCRKyHoABCLIfs7Q9NQU2GgE1C0L+RYgFIzYaATULQv8iiAUYNhoBNRVC9JaIBQ02GgE1C0L01iIxNBJEIQkxNRJEIjE2EkQiMTcSRCI1BYgE6oG6A68iIkL2LiOvNBEWUDUPNBBBAD8iNRE0FFcAIDQXI680ExZQo4gEJTQPoogEH6CIBBs0FFcgIDQWI680ERZQo4gECjQPoogEBKCIBABQNQ1C/Co0DDQOCTURQv+6NBA0DqGIA+g1DEL8WzQPNAyhiAPbNQtC/IQ0DTQZSTQNDk01CzQTNBpJNBMPTUk1DTQLD0k1EEEATyI1EyOvNBEWUDUPNBBBAEkiNRE0FFcAIDQXI680ExZQo4gDkjQPoogDjKCIA4g0FFcgIDQWI680ERZQo4gDdzQPoogDcaCIA21QNQ5C/FY0CzQNCTUTQv+qNAs0DQk1EUL/sDQQNA2hiANLNQtC/H00DzQLoYgDPjUMQvymQvQyQvSjQvVUNAEhBQxBATI0ASEIEkSIA+00HTUEQvMKQvXFQvcWQvgCQvkHMgY0GUkyBg5NNSE0EzQaSTQTD01JNSA0IQ9JNR9BAE8iNQwjrzQRFlA1DTQfQQBJIjULNBRXACA0FyOvNAwWUKOIAsg0DaKIAsKgiAK+NBRXICA0FiOvNAsWUKOIAq00DaKIAqegiAKjUDUiQvVZNCE0IAk1DEL/qjQhNCAJNQtC/7A0DDQjoYgCgTUfQvWENA00DKGIAnQ1C0L1tzIGNBlJMgYOTTUhNBM0Gkk0Ew9NSTUgNCEPSTUfQQBPIjUMI680ERZQNQ00H0EAWSI1CzQUVwAgNBcjrzQMFlCjiAIrNA2iiAIloIgCITQUVyAgNBYjrzQLFlCjiAIQNA2iiAIKoIgCBlA1IkL2MDQhNCAJNQxC/6o0ASEFEkSIAh00HTUEQvHYNCE0IAk1C0L/oDIGNBlJMgYOTTUhNBM0Gkk0Ew9NSTUgNCEPSTUfQQBPIjUMI680ERZQNQ00H0EASSI1CzQUVwAgNBcjrzQMFlCjiAGYNA2iiAGSoIgBjjQUVyAgNBYjrzQLFlCjiAF9NA2iiAF3oIgBc1A1IkL2mjQhNCAJNQxC/6o0ITQgCTULQv+wNCQ0H6GIAVE1IEL2wjQfNA2hiAFENSFC9tkyBjQZSTIGDk01ITQTNBpJNBMPTUk1IDQhD0k1H0EATyI1DCOvNBEWUDUNNB9BAEkiNQs0FFcAIDQXI680DBZQo4gA+zQNoogA9aCIAPE0FFcgIDQWI680CxZQo4gA4DQNoogA2qCIANZQNSJC9v40ITQgCTUMQv+qNCE0IAk1C0L/sDQMNCShiAC0NQ1C9xM0EzQZSTQTDk01DDQTNBpJNBMPTUk1DjQMD0k1EEEATiI1E0L8QzQLNAyhiACBNSBC9yQ0KTQLoYgAdDUhQvfuNAs0IKGIAGc1JkL4AkhMv0iJIrIBIQSyELIHsgiziSKyASERshCyFLIRshKziTQMNA4JNRNC+/E2GgE1C0L4TTYaATYaAhc1CzUMQvj6NhoBNQtC+bFIiUwJSTUGMgmIAMuJCUlB/+5JNQaIAWeJSRUhC0wJr0xQibFC/6JJVwEATCJVTYm+SRZRBwhFBE1QiUxJvUD/dksDiACLQv9uSVcAIDUeSVcgUDUdSSEMWzUcSSENWzUbSSESWzUaSSETWzUZSVeQIDUYSVewIDUXSVfQIDUWSVfwQDUVSYGwAiVYNRRJgfACWzUTSYH4AiEOWDUSSYGIA1s1EUmBkAOBIlg1D4GyA1s1DokhBDUDibEisgEhBbIQNAWyGLOJSSISTDQCEhFEiTQGCDUGibFC/uE0BjQHSg9B/x5C/yZJVwAgNR5JVyBQNR1JIQxbNRxJIQ1bNRtJIRJbNRpJIRNbNRlJV5AQNQ1JV6AgNRhJIRBbNQxJV8giNQtJV+ogNReBigIhC1g1FolJVwAgNR5JVyBQNR1JIQxbNRxJIQ1bNRtJV4AiNRFJgaIBWzUaSYGqAVs1GUlXshA1DUlXwiA1GEmB4gFbNQxJgeoBWzUPgfIBWzUQiTEWNAAhBAhJNQAJRwI4BzIKEkQ4ECEEEkQ4CBJEibGyFUL+JjEWNAAhBAhJNQAJRwM4FDIKEkQ4ECEREkQ4EU8CEkQ4EhJEibGyCUL97w==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `15`,
    1000: `531`,
    1001: `532`,
    1002: `533`,
    1003: `533`,
    1004: `534`,
    1005: `534`,
    1006: `535`,
    1007: `535`,
    1008: `535`,
    1009: `536`,
    101: `16`,
    1010: `537`,
    1011: `537`,
    1012: `538`,
    1013: `538`,
    1014: `538`,
    1015: `539`,
    1016: `539`,
    1017: `540`,
    1018: `541`,
    1019: `542`,
    102: `16`,
    1020: `542`,
    1021: `543`,
    1022: `544`,
    1023: `545`,
    1024: `546`,
    1025: `546`,
    1026: `547`,
    1027: `547`,
    1028: `548`,
    1029: `548`,
    103: `17`,
    1030: `548`,
    1031: `549`,
    1032: `550`,
    1033: `550`,
    1034: `550`,
    1035: `551`,
    1036: `552`,
    1037: `553`,
    1038: `553`,
    1039: `553`,
    104: `18`,
    1040: `554`,
    1041: `554`,
    1042: `555`,
    1043: `555`,
    1044: `556`,
    1045: `556`,
    1046: `557`,
    1047: `558`,
    1048: `558`,
    1049: `558`,
    105: `18`,
    1050: `559`,
    1051: `559`,
    1052: `560`,
    1053: `560`,
    1054: `562`,
    1055: `562`,
    1056: `564`,
    1057: `565`,
    1058: `566`,
    1059: `567`,
    106: `19`,
    1060: `568`,
    1061: `569`,
    1062: `570`,
    1063: `571`,
    1064: `571`,
    1065: `572`,
    1066: `572`,
    1067: `573`,
    1068: `574`,
    1069: `575`,
    107: `20`,
    1070: `576`,
    1071: `576`,
    1072: `577`,
    1073: `577`,
    1074: `578`,
    1075: `579`,
    1076: `579`,
    1077: `580`,
    1078: `581`,
    1079: `582`,
    108: `21`,
    1080: `582`,
    1081: `583`,
    1082: `583`,
    1083: `584`,
    1084: `584`,
    1085: `584`,
    1086: `585`,
    1087: `585`,
    1088: `586`,
    1089: `586`,
    109: `21`,
    1090: `587`,
    1091: `587`,
    1092: `588`,
    1093: `588`,
    1094: `588`,
    1095: `589`,
    1096: `590`,
    1097: `590`,
    1098: `590`,
    1099: `591`,
    11: `2`,
    110: `22`,
    1100: `592`,
    1101: `593`,
    1102: `593`,
    1103: `593`,
    1104: `594`,
    1105: `594`,
    1106: `595`,
    1107: `595`,
    1108: `596`,
    1109: `596`,
    111: `23`,
    1110: `597`,
    1111: `598`,
    1112: `598`,
    1113: `598`,
    1114: `599`,
    1115: `599`,
    1116: `600`,
    1117: `600`,
    1118: `602`,
    1119: `602`,
    112: `24`,
    1120: `604`,
    1121: `605`,
    1122: `606`,
    1123: `607`,
    1124: `608`,
    1125: `609`,
    1126: `610`,
    1127: `611`,
    1128: `611`,
    1129: `612`,
    113: `25`,
    1130: `612`,
    1131: `613`,
    1132: `614`,
    1133: `615`,
    1134: `616`,
    1135: `616`,
    1136: `617`,
    1137: `617`,
    1138: `618`,
    1139: `619`,
    114: `26`,
    1140: `619`,
    1141: `620`,
    1142: `621`,
    1143: `622`,
    1144: `622`,
    1145: `623`,
    1146: `623`,
    1147: `624`,
    1148: `624`,
    1149: `625`,
    115: `27`,
    1150: `625`,
    1151: `625`,
    1152: `626`,
    1153: `626`,
    1154: `627`,
    1155: `627`,
    1156: `627`,
    1157: `628`,
    1158: `628`,
    1159: `629`,
    116: `27`,
    1160: `629`,
    1161: `631`,
    1162: `631`,
    1163: `632`,
    1164: `632`,
    1165: `633`,
    1166: `633`,
    1167: `633`,
    1168: `634`,
    1169: `634`,
    117: `28`,
    1170: `635`,
    1171: `636`,
    1172: `636`,
    1173: `637`,
    1174: `638`,
    1175: `638`,
    1176: `639`,
    1177: `640`,
    1178: `641`,
    1179: `641`,
    118: `29`,
    1180: `642`,
    1181: `643`,
    1182: `644`,
    1183: `645`,
    1184: `645`,
    1185: `645`,
    1186: `646`,
    1187: `646`,
    1188: `647`,
    1189: `648`,
    119: `31`,
    1190: `649`,
    1191: `649`,
    1192: `650`,
    1193: `651`,
    1194: `652`,
    1195: `653`,
    1196: `653`,
    1197: `653`,
    1198: `654`,
    1199: `655`,
    12: `2`,
    120: `31`,
    1200: `655`,
    1201: `656`,
    1202: `657`,
    1203: `658`,
    1204: `658`,
    1205: `658`,
    1206: `659`,
    1207: `659`,
    1208: `660`,
    1209: `660`,
    121: `31`,
    1210: `661`,
    1211: `662`,
    1212: `663`,
    1213: `663`,
    1214: `664`,
    1215: `664`,
    1216: `665`,
    1217: `666`,
    1218: `667`,
    1219: `668`,
    122: `31`,
    1220: `668`,
    1221: `669`,
    1222: `669`,
    1223: `670`,
    1224: `671`,
    1225: `671`,
    1226: `672`,
    1227: `673`,
    1228: `674`,
    1229: `674`,
    123: `31`,
    1230: `675`,
    1231: `676`,
    1232: `676`,
    1233: `677`,
    1234: `677`,
    1235: `677`,
    1236: `677`,
    1237: `677`,
    1238: `677`,
    1239: `677`,
    124: `31`,
    1240: `677`,
    1241: `677`,
    1242: `677`,
    1243: `678`,
    1244: `678`,
    1245: `679`,
    1246: `680`,
    1247: `681`,
    1248: `681`,
    1249: `682`,
    125: `31`,
    1250: `682`,
    1251: `683`,
    1252: `683`,
    1253: `684`,
    1254: `684`,
    1255: `685`,
    1256: `686`,
    1257: `686`,
    1258: `687`,
    1259: `688`,
    126: `31`,
    1260: `688`,
    1261: `689`,
    1262: `690`,
    1263: `692`,
    1264: `692`,
    1265: `693`,
    1266: `693`,
    1267: `694`,
    1268: `694`,
    1269: `695`,
    127: `31`,
    1270: `695`,
    1271: `696`,
    1272: `696`,
    1273: `697`,
    1274: `697`,
    1275: `698`,
    1276: `699`,
    1277: `700`,
    1278: `701`,
    1279: `701`,
    128: `31`,
    1280: `702`,
    1281: `703`,
    1282: `704`,
    1283: `704`,
    1284: `705`,
    1285: `705`,
    1286: `706`,
    1287: `706`,
    1288: `707`,
    1289: `707`,
    129: `31`,
    1290: `708`,
    1291: `709`,
    1292: `709`,
    1293: `710`,
    1294: `710`,
    1295: `711`,
    1296: `711`,
    1297: `712`,
    1298: `712`,
    1299: `713`,
    13: `2`,
    130: `31`,
    1300: `713`,
    1301: `714`,
    1302: `714`,
    1303: `715`,
    1304: `715`,
    1305: `715`,
    1306: `718`,
    1307: `718`,
    1308: `718`,
    1309: `720`,
    131: `31`,
    1310: `720`,
    1311: `721`,
    1312: `721`,
    1313: `722`,
    1314: `723`,
    1315: `723`,
    1316: `724`,
    1317: `724`,
    1318: `725`,
    1319: `725`,
    132: `31`,
    1320: `726`,
    1321: `727`,
    1322: `735`,
    1323: `735`,
    1324: `736`,
    1325: `737`,
    1326: `738`,
    1327: `746`,
    1328: `746`,
    1329: `747`,
    133: `31`,
    1330: `747`,
    1331: `747`,
    1332: `748`,
    1333: `748`,
    1334: `749`,
    1335: `749`,
    1336: `750`,
    1337: `750`,
    1338: `751`,
    1339: `751`,
    134: `31`,
    1340: `751`,
    1341: `754`,
    1342: `754`,
    1343: `755`,
    1344: `755`,
    1345: `755`,
    1346: `756`,
    1347: `756`,
    1348: `757`,
    1349: `757`,
    135: `31`,
    1350: `759`,
    1351: `759`,
    1352: `760`,
    1353: `760`,
    1354: `761`,
    1355: `762`,
    1356: `762`,
    1357: `763`,
    1358: `763`,
    1359: `764`,
    136: `31`,
    1360: `765`,
    1361: `766`,
    1362: `768`,
    1363: `769`,
    1364: `769`,
    1365: `770`,
    1366: `771`,
    1367: `772`,
    1368: `772`,
    1369: `773`,
    137: `31`,
    1370: `774`,
    1371: `774`,
    1372: `774`,
    1373: `775`,
    1374: `775`,
    1375: `775`,
    1376: `776`,
    1377: `777`,
    1378: `777`,
    1379: `778`,
    138: `31`,
    1380: `779`,
    1381: `780`,
    1382: `780`,
    1383: `781`,
    1384: `782`,
    1385: `782`,
    1386: `783`,
    1387: `783`,
    1388: `784`,
    1389: `784`,
    139: `31`,
    1390: `784`,
    1391: `785`,
    1392: `785`,
    1393: `786`,
    1394: `787`,
    1395: `788`,
    1396: `788`,
    1397: `789`,
    1398: `790`,
    1399: `791`,
    14: `2`,
    140: `31`,
    1400: `791`,
    1401: `792`,
    1402: `792`,
    1403: `793`,
    1404: `794`,
    1405: `794`,
    1406: `795`,
    1407: `796`,
    1408: `796`,
    1409: `797`,
    141: `31`,
    1410: `797`,
    1411: `797`,
    1412: `798`,
    1413: `798`,
    1414: `799`,
    1415: `799`,
    1416: `800`,
    1417: `800`,
    1418: `800`,
    1419: `801`,
    142: `31`,
    1420: `802`,
    1421: `802`,
    1422: `802`,
    1423: `803`,
    1424: `804`,
    1425: `805`,
    1426: `805`,
    1427: `805`,
    1428: `806`,
    1429: `807`,
    143: `31`,
    1430: `807`,
    1431: `807`,
    1432: `808`,
    1433: `808`,
    1434: `809`,
    1435: `809`,
    1436: `809`,
    1437: `810`,
    1438: `810`,
    1439: `811`,
    144: `31`,
    1440: `811`,
    1441: `812`,
    1442: `812`,
    1443: `812`,
    1444: `813`,
    1445: `814`,
    1446: `814`,
    1447: `814`,
    1448: `815`,
    1449: `816`,
    145: `31`,
    1450: `817`,
    1451: `817`,
    1452: `817`,
    1453: `818`,
    1454: `819`,
    1455: `819`,
    1456: `819`,
    1457: `820`,
    1458: `821`,
    1459: `821`,
    146: `31`,
    1460: `822`,
    1461: `823`,
    1462: `824`,
    1463: `824`,
    1464: `824`,
    1465: `825`,
    1466: `825`,
    1467: `826`,
    1468: `827`,
    1469: `827`,
    147: `31`,
    1470: `828`,
    1471: `829`,
    1472: `830`,
    1473: `830`,
    1474: `831`,
    1475: `831`,
    1476: `831`,
    1477: `831`,
    1478: `831`,
    1479: `831`,
    148: `31`,
    1480: `831`,
    1481: `831`,
    1482: `831`,
    1483: `831`,
    1484: `832`,
    1485: `832`,
    1486: `833`,
    1487: `834`,
    1488: `835`,
    1489: `835`,
    149: `31`,
    1490: `836`,
    1491: `836`,
    1492: `837`,
    1493: `837`,
    1494: `837`,
    1495: `837`,
    1496: `837`,
    1497: `837`,
    1498: `838`,
    1499: `838`,
    15: `2`,
    150: `31`,
    1500: `839`,
    1501: `840`,
    1502: `840`,
    1503: `841`,
    1504: `842`,
    1505: `843`,
    1506: `843`,
    1507: `844`,
    1508: `845`,
    1509: `847`,
    151: `31`,
    1510: `847`,
    1511: `848`,
    1512: `848`,
    1513: `849`,
    1514: `849`,
    1515: `850`,
    1516: `850`,
    1517: `851`,
    1518: `851`,
    1519: `852`,
    152: `31`,
    1520: `852`,
    1521: `853`,
    1522: `854`,
    1523: `855`,
    1524: `856`,
    1525: `856`,
    1526: `857`,
    1527: `858`,
    1528: `859`,
    1529: `859`,
    153: `31`,
    1530: `860`,
    1531: `860`,
    1532: `861`,
    1533: `861`,
    1534: `862`,
    1535: `862`,
    1536: `863`,
    1537: `863`,
    1538: `864`,
    1539: `864`,
    154: `31`,
    1540: `865`,
    1541: `865`,
    1542: `866`,
    1543: `866`,
    1544: `866`,
    1545: `869`,
    1546: `869`,
    1547: `869`,
    1548: `871`,
    1549: `871`,
    155: `31`,
    1550: `872`,
    1551: `872`,
    1552: `873`,
    1553: `874`,
    1554: `874`,
    1555: `875`,
    1556: `875`,
    1557: `876`,
    1558: `877`,
    1559: `878`,
    156: `31`,
    1560: `880`,
    1561: `881`,
    1562: `881`,
    1563: `882`,
    1564: `883`,
    1565: `884`,
    1566: `884`,
    1567: `885`,
    1568: `886`,
    1569: `886`,
    157: `31`,
    1570: `886`,
    1571: `887`,
    1572: `887`,
    1573: `887`,
    1574: `888`,
    1575: `889`,
    1576: `889`,
    1577: `890`,
    1578: `891`,
    1579: `892`,
    158: `31`,
    1580: `892`,
    1581: `893`,
    1582: `893`,
    1583: `894`,
    1584: `894`,
    1585: `895`,
    1586: `896`,
    1587: `904`,
    1588: `904`,
    1589: `905`,
    159: `31`,
    1590: `905`,
    1591: `905`,
    1592: `906`,
    1593: `906`,
    1594: `907`,
    1595: `907`,
    1596: `908`,
    1597: `908`,
    1598: `908`,
    1599: `909`,
    16: `2`,
    160: `31`,
    1600: `909`,
    1601: `910`,
    1602: `910`,
    1603: `912`,
    1604: `912`,
    1605: `913`,
    1606: `913`,
    1607: `914`,
    1608: `915`,
    1609: `915`,
    161: `31`,
    1610: `916`,
    1611: `916`,
    1612: `917`,
    1613: `917`,
    1614: `918`,
    1615: `919`,
    1616: `919`,
    1617: `920`,
    1618: `920`,
    1619: `921`,
    162: `31`,
    1620: `921`,
    1621: `921`,
    1622: `922`,
    1623: `922`,
    1624: `923`,
    1625: `923`,
    1626: `925`,
    1627: `925`,
    1628: `926`,
    1629: `926`,
    163: `31`,
    1630: `927`,
    1631: `927`,
    1632: `927`,
    1633: `928`,
    1634: `928`,
    1635: `929`,
    1636: `929`,
    1637: `929`,
    1638: `930`,
    1639: `930`,
    164: `31`,
    1640: `931`,
    1641: `932`,
    1642: `933`,
    1643: `933`,
    1644: `934`,
    1645: `935`,
    1646: `936`,
    1647: `937`,
    1648: `937`,
    1649: `938`,
    165: `31`,
    1650: `938`,
    1651: `939`,
    1652: `939`,
    1653: `939`,
    1654: `940`,
    1655: `941`,
    1656: `941`,
    1657: `941`,
    1658: `942`,
    1659: `943`,
    166: `31`,
    1660: `944`,
    1661: `944`,
    1662: `944`,
    1663: `945`,
    1664: `946`,
    1665: `946`,
    1666: `947`,
    1667: `947`,
    1668: `948`,
    1669: `949`,
    167: `31`,
    1670: `949`,
    1671: `949`,
    1672: `950`,
    1673: `950`,
    1674: `951`,
    1675: `951`,
    1676: `953`,
    1677: `953`,
    1678: `954`,
    1679: `954`,
    168: `31`,
    1680: `954`,
    1681: `955`,
    1682: `955`,
    1683: `956`,
    1684: `956`,
    1685: `957`,
    1686: `957`,
    1687: `958`,
    1688: `958`,
    1689: `958`,
    169: `31`,
    1690: `959`,
    1691: `960`,
    1692: `960`,
    1693: `960`,
    1694: `961`,
    1695: `962`,
    1696: `963`,
    1697: `963`,
    1698: `963`,
    1699: `964`,
    17: `2`,
    170: `31`,
    1700: `965`,
    1701: `965`,
    1702: `966`,
    1703: `966`,
    1704: `967`,
    1705: `968`,
    1706: `968`,
    1707: `968`,
    1708: `969`,
    1709: `969`,
    171: `31`,
    1710: `970`,
    1711: `970`,
    1712: `972`,
    1713: `972`,
    1714: `973`,
    1715: `974`,
    1716: `974`,
    1717: `975`,
    1718: `976`,
    1719: `976`,
    172: `31`,
    1720: `977`,
    1721: `977`,
    1722: `978`,
    1723: `979`,
    1724: `979`,
    1725: `980`,
    1726: `981`,
    1727: `982`,
    1728: `982`,
    1729: `982`,
    173: `31`,
    1730: `983`,
    1731: `983`,
    1732: `984`,
    1733: `985`,
    1734: `985`,
    1735: `986`,
    1736: `987`,
    1737: `988`,
    1738: `988`,
    1739: `989`,
    174: `31`,
    1740: `989`,
    1741: `989`,
    1742: `989`,
    1743: `989`,
    1744: `989`,
    1745: `989`,
    1746: `989`,
    1747: `989`,
    1748: `989`,
    1749: `990`,
    175: `31`,
    1750: `990`,
    1751: `991`,
    1752: `992`,
    1753: `993`,
    1754: `993`,
    1755: `994`,
    1756: `994`,
    1757: `995`,
    1758: `995`,
    1759: `996`,
    176: `31`,
    1760: `996`,
    1761: `997`,
    1762: `998`,
    1763: `998`,
    1764: `999`,
    1765: `1000`,
    1766: `1001`,
    1767: `1001`,
    1768: `1002`,
    1769: `1003`,
    177: `31`,
    1770: `1003`,
    1771: `1004`,
    1772: `1005`,
    1773: `1007`,
    1774: `1007`,
    1775: `1008`,
    1776: `1008`,
    1777: `1009`,
    1778: `1009`,
    1779: `1010`,
    178: `31`,
    1780: `1010`,
    1781: `1011`,
    1782: `1011`,
    1783: `1012`,
    1784: `1012`,
    1785: `1013`,
    1786: `1014`,
    1787: `1015`,
    1788: `1016`,
    1789: `1016`,
    179: `31`,
    1790: `1017`,
    1791: `1018`,
    1792: `1019`,
    1793: `1019`,
    1794: `1020`,
    1795: `1020`,
    1796: `1021`,
    1797: `1021`,
    1798: `1022`,
    1799: `1022`,
    18: `2`,
    180: `31`,
    1800: `1023`,
    1801: `1023`,
    1802: `1024`,
    1803: `1024`,
    1804: `1025`,
    1805: `1025`,
    1806: `1026`,
    1807: `1026`,
    1808: `1026`,
    1809: `1029`,
    181: `31`,
    1810: `1029`,
    1811: `1029`,
    1812: `1031`,
    1813: `1031`,
    1814: `1032`,
    1815: `1032`,
    1816: `1033`,
    1817: `1034`,
    1818: `1034`,
    1819: `1035`,
    182: `31`,
    1820: `1035`,
    1821: `1036`,
    1822: `1037`,
    1823: `1038`,
    1824: `1040`,
    1825: `1041`,
    1826: `1041`,
    1827: `1042`,
    1828: `1043`,
    1829: `1044`,
    183: `31`,
    1830: `1044`,
    1831: `1045`,
    1832: `1046`,
    1833: `1046`,
    1834: `1046`,
    1835: `1047`,
    1836: `1047`,
    1837: `1047`,
    1838: `1048`,
    1839: `1049`,
    184: `31`,
    1840: `1049`,
    1841: `1050`,
    1842: `1051`,
    1843: `1052`,
    1844: `1052`,
    1845: `1053`,
    1846: `1053`,
    1847: `1054`,
    1848: `1054`,
    1849: `1055`,
    185: `31`,
    1850: `1056`,
    1851: `1064`,
    1852: `1064`,
    1853: `1065`,
    1854: `1065`,
    1855: `1065`,
    1856: `1066`,
    1857: `1066`,
    1858: `1067`,
    1859: `1067`,
    186: `31`,
    1860: `1069`,
    1861: `1069`,
    1862: `1070`,
    1863: `1070`,
    1864: `1070`,
    1865: `1071`,
    1866: `1072`,
    1867: `1072`,
    1868: `1073`,
    1869: `1073`,
    187: `31`,
    1870: `1073`,
    1871: `1074`,
    1872: `1074`,
    1873: `1075`,
    1874: `1075`,
    1875: `1076`,
    1876: `1076`,
    1877: `1076`,
    1878: `1077`,
    1879: `1077`,
    188: `31`,
    1880: `1078`,
    1881: `1079`,
    1882: `1080`,
    1883: `1080`,
    1884: `1081`,
    1885: `1082`,
    1886: `1083`,
    1887: `1084`,
    1888: `1084`,
    1889: `1085`,
    189: `31`,
    1890: `1085`,
    1891: `1086`,
    1892: `1087`,
    1893: `1087`,
    1894: `1087`,
    1895: `1088`,
    1896: `1089`,
    1897: `1090`,
    1898: `1090`,
    1899: `1090`,
    19: `2`,
    190: `31`,
    1900: `1091`,
    1901: `1091`,
    1902: `1092`,
    1903: `1092`,
    1904: `1093`,
    1905: `1093`,
    1906: `1094`,
    1907: `1095`,
    1908: `1095`,
    1909: `1095`,
    191: `31`,
    1910: `1096`,
    1911: `1096`,
    1912: `1097`,
    1913: `1097`,
    1914: `1099`,
    1915: `1099`,
    1916: `1101`,
    1917: `1102`,
    1918: `1103`,
    1919: `1104`,
    192: `31`,
    1920: `1105`,
    1921: `1106`,
    1922: `1107`,
    1923: `1108`,
    1924: `1108`,
    1925: `1109`,
    1926: `1109`,
    1927: `1110`,
    1928: `1111`,
    1929: `1112`,
    193: `31`,
    1930: `1113`,
    1931: `1113`,
    1932: `1114`,
    1933: `1114`,
    1934: `1115`,
    1935: `1116`,
    1936: `1116`,
    1937: `1117`,
    1938: `1118`,
    1939: `1119`,
    194: `31`,
    1940: `1119`,
    1941: `1120`,
    1942: `1120`,
    1943: `1121`,
    1944: `1121`,
    1945: `1121`,
    1946: `1122`,
    1947: `1122`,
    1948: `1123`,
    1949: `1123`,
    195: `31`,
    1950: `1124`,
    1951: `1124`,
    1952: `1124`,
    1953: `1125`,
    1954: `1125`,
    1955: `1126`,
    1956: `1126`,
    1957: `1127`,
    1958: `1127`,
    1959: `1128`,
    196: `31`,
    1960: `1129`,
    1961: `1129`,
    1962: `1129`,
    1963: `1130`,
    1964: `1131`,
    1965: `1132`,
    1966: `1132`,
    1967: `1132`,
    1968: `1133`,
    1969: `1133`,
    197: `31`,
    1970: `1134`,
    1971: `1134`,
    1972: `1135`,
    1973: `1135`,
    1974: `1136`,
    1975: `1137`,
    1976: `1137`,
    1977: `1137`,
    1978: `1138`,
    1979: `1138`,
    198: `31`,
    1980: `1139`,
    1981: `1139`,
    1982: `1141`,
    1983: `1141`,
    1984: `1143`,
    1985: `1144`,
    1986: `1145`,
    1987: `1146`,
    1988: `1147`,
    1989: `1148`,
    199: `31`,
    1990: `1149`,
    1991: `1150`,
    1992: `1150`,
    1993: `1151`,
    1994: `1151`,
    1995: `1152`,
    1996: `1153`,
    1997: `1154`,
    1998: `1155`,
    1999: `1155`,
    2: `2`,
    20: `2`,
    200: `31`,
    2000: `1156`,
    2001: `1156`,
    2002: `1157`,
    2003: `1158`,
    2004: `1158`,
    2005: `1159`,
    2006: `1160`,
    2007: `1161`,
    2008: `1161`,
    2009: `1162`,
    201: `32`,
    2010: `1162`,
    2011: `1163`,
    2012: `1163`,
    2013: `1164`,
    2014: `1164`,
    2015: `1164`,
    2016: `1165`,
    2017: `1165`,
    2018: `1166`,
    2019: `1166`,
    202: `32`,
    2020: `1166`,
    2021: `1167`,
    2022: `1167`,
    2023: `1168`,
    2024: `1168`,
    2025: `1169`,
    2026: `1169`,
    2027: `1170`,
    2028: `1171`,
    2029: `1172`,
    203: `32`,
    2030: `1173`,
    2031: `1173`,
    2032: `1174`,
    2033: `1175`,
    2034: `1176`,
    2035: `1176`,
    2036: `1177`,
    2037: `1177`,
    2038: `1178`,
    2039: `1178`,
    204: `33`,
    2040: `1179`,
    2041: `1179`,
    2042: `1181`,
    2043: `1181`,
    2044: `1182`,
    2045: `1182`,
    2046: `1183`,
    2047: `1183`,
    2048: `1183`,
    2049: `1184`,
    205: `33`,
    2050: `1184`,
    2051: `1185`,
    2052: `1186`,
    2053: `1187`,
    2054: `1187`,
    2055: `1188`,
    2056: `1189`,
    2057: `1190`,
    2058: `1191`,
    2059: `1191`,
    206: `33`,
    2060: `1191`,
    2061: `1192`,
    2062: `1192`,
    2063: `1193`,
    2064: `1194`,
    2065: `1195`,
    2066: `1195`,
    2067: `1196`,
    2068: `1197`,
    2069: `1198`,
    207: `33`,
    2070: `1199`,
    2071: `1199`,
    2072: `1199`,
    2073: `1200`,
    2074: `1201`,
    2075: `1201`,
    2076: `1202`,
    2077: `1203`,
    2078: `1204`,
    2079: `1204`,
    208: `33`,
    2080: `1205`,
    2081: `1205`,
    2082: `1206`,
    2083: `1207`,
    2084: `1207`,
    2085: `1208`,
    2086: `1209`,
    2087: `1209`,
    2088: `1210`,
    2089: `1210`,
    209: `33`,
    2090: `1210`,
    2091: `1211`,
    2092: `1211`,
    2093: `1212`,
    2094: `1212`,
    2095: `1213`,
    2096: `1214`,
    2097: `1215`,
    2098: `1215`,
    2099: `1216`,
    21: `2`,
    210: `33`,
    2100: `1216`,
    2101: `1217`,
    2102: `1218`,
    2103: `1219`,
    2104: `1220`,
    2105: `1220`,
    2106: `1221`,
    2107: `1221`,
    2108: `1222`,
    2109: `1223`,
    211: `33`,
    2110: `1223`,
    2111: `1224`,
    2112: `1225`,
    2113: `1226`,
    2114: `1226`,
    2115: `1227`,
    2116: `1228`,
    2117: `1228`,
    2118: `1229`,
    2119: `1229`,
    212: `33`,
    2120: `1230`,
    2121: `1230`,
    2122: `1231`,
    2123: `1232`,
    2124: `1232`,
    2125: `1233`,
    2126: `1233`,
    2127: `1234`,
    2128: `1235`,
    2129: `1236`,
    213: `33`,
    2130: `1236`,
    2131: `1237`,
    2132: `1238`,
    2133: `1238`,
    2134: `1239`,
    2135: `1239`,
    2136: `1240`,
    2137: `1240`,
    2138: `1240`,
    2139: `1241`,
    214: `33`,
    2140: `1241`,
    2141: `1242`,
    2142: `1242`,
    2143: `1243`,
    2144: `1243`,
    2145: `1243`,
    2146: `1244`,
    2147: `1244`,
    2148: `1245`,
    2149: `1245`,
    215: `33`,
    2150: `1247`,
    2151: `1247`,
    2152: `1248`,
    2153: `1248`,
    2154: `1249`,
    2155: `1249`,
    2156: `1249`,
    2157: `1250`,
    2158: `1250`,
    2159: `1251`,
    216: `33`,
    2160: `1251`,
    2161: `1251`,
    2162: `1252`,
    2163: `1252`,
    2164: `1253`,
    2165: `1254`,
    2166: `1255`,
    2167: `1255`,
    2168: `1256`,
    2169: `1257`,
    217: `33`,
    2170: `1258`,
    2171: `1259`,
    2172: `1259`,
    2173: `1260`,
    2174: `1260`,
    2175: `1261`,
    2176: `1262`,
    2177: `1262`,
    2178: `1262`,
    2179: `1263`,
    218: `33`,
    2180: `1264`,
    2181: `1265`,
    2182: `1265`,
    2183: `1265`,
    2184: `1266`,
    2185: `1267`,
    2186: `1267`,
    2187: `1268`,
    2188: `1268`,
    2189: `1269`,
    219: `33`,
    2190: `1270`,
    2191: `1270`,
    2192: `1270`,
    2193: `1271`,
    2194: `1271`,
    2195: `1272`,
    2196: `1272`,
    2197: `1274`,
    2198: `1274`,
    2199: `1275`,
    22: `2`,
    220: `33`,
    2200: `1275`,
    2201: `1275`,
    2202: `1276`,
    2203: `1276`,
    2204: `1277`,
    2205: `1277`,
    2206: `1278`,
    2207: `1278`,
    2208: `1279`,
    2209: `1280`,
    221: `33`,
    2210: `1280`,
    2211: `1280`,
    2212: `1281`,
    2213: `1282`,
    2214: `1283`,
    2215: `1283`,
    2216: `1283`,
    2217: `1284`,
    2218: `1285`,
    2219: `1285`,
    222: `33`,
    2220: `1286`,
    2221: `1286`,
    2222: `1287`,
    2223: `1288`,
    2224: `1288`,
    2225: `1288`,
    2226: `1289`,
    2227: `1289`,
    2228: `1290`,
    2229: `1290`,
    223: `33`,
    2230: `1292`,
    2231: `1292`,
    2232: `1293`,
    2233: `1294`,
    2234: `1294`,
    2235: `1295`,
    2236: `1296`,
    2237: `1296`,
    2238: `1297`,
    2239: `1297`,
    224: `33`,
    2240: `1298`,
    2241: `1299`,
    2242: `1299`,
    2243: `1300`,
    2244: `1301`,
    2245: `1302`,
    2246: `1302`,
    2247: `1302`,
    2248: `1303`,
    2249: `1303`,
    225: `33`,
    2250: `1304`,
    2251: `1305`,
    2252: `1305`,
    2253: `1306`,
    2254: `1307`,
    2255: `1308`,
    2256: `1309`,
    2257: `1309`,
    2258: `1310`,
    2259: `1310`,
    226: `33`,
    2260: `1311`,
    2261: `1312`,
    2262: `1312`,
    2263: `1313`,
    2264: `1313`,
    2265: `1313`,
    2266: `1313`,
    2267: `1313`,
    2268: `1313`,
    2269: `1313`,
    227: `33`,
    2270: `1313`,
    2271: `1313`,
    2272: `1313`,
    2273: `1314`,
    2274: `1314`,
    2275: `1315`,
    2276: `1316`,
    2277: `1317`,
    2278: `1317`,
    2279: `1318`,
    228: `33`,
    2280: `1318`,
    2281: `1319`,
    2282: `1319`,
    2283: `1320`,
    2284: `1320`,
    2285: `1321`,
    2286: `1322`,
    2287: `1322`,
    2288: `1323`,
    2289: `1324`,
    229: `33`,
    2290: `1324`,
    2291: `1325`,
    2292: `1326`,
    2293: `1328`,
    2294: `1328`,
    2295: `1329`,
    2296: `1329`,
    2297: `1330`,
    2298: `1331`,
    2299: `1331`,
    23: `2`,
    230: `33`,
    2300: `1332`,
    2301: `1333`,
    2302: `1334`,
    2303: `1334`,
    2304: `1335`,
    2305: `1336`,
    2306: `1336`,
    2307: `1337`,
    2308: `1338`,
    2309: `1340`,
    231: `33`,
    2310: `1340`,
    2311: `1341`,
    2312: `1341`,
    2313: `1342`,
    2314: `1342`,
    2315: `1343`,
    2316: `1343`,
    2317: `1344`,
    2318: `1344`,
    2319: `1345`,
    232: `33`,
    2320: `1345`,
    2321: `1346`,
    2322: `1346`,
    2323: `1347`,
    2324: `1348`,
    2325: `1349`,
    2326: `1350`,
    2327: `1350`,
    2328: `1351`,
    2329: `1352`,
    233: `33`,
    2330: `1353`,
    2331: `1353`,
    2332: `1354`,
    2333: `1354`,
    2334: `1355`,
    2335: `1355`,
    2336: `1356`,
    2337: `1356`,
    2338: `1357`,
    2339: `1358`,
    234: `33`,
    2340: `1358`,
    2341: `1359`,
    2342: `1359`,
    2343: `1360`,
    2344: `1360`,
    2345: `1361`,
    2346: `1361`,
    2347: `1362`,
    2348: `1362`,
    2349: `1363`,
    235: `33`,
    2350: `1363`,
    2351: `1364`,
    2352: `1364`,
    2353: `1365`,
    2354: `1365`,
    2355: `1365`,
    2356: `1368`,
    2357: `1368`,
    2358: `1369`,
    2359: `1369`,
    236: `33`,
    2360: `1370`,
    2361: `1371`,
    2362: `1374`,
    2363: `1374`,
    2364: `1374`,
    2365: `1375`,
    2366: `1375`,
    2367: `1376`,
    2368: `1376`,
    2369: `1376`,
    237: `33`,
    2370: `1377`,
    2371: `1377`,
    2372: `1378`,
    2373: `1378`,
    2374: `1380`,
    2375: `1380`,
    2376: `1381`,
    2377: `1382`,
    2378: `1383`,
    2379: `1385`,
    238: `35`,
    2380: `1386`,
    2381: `1386`,
    2382: `1387`,
    2383: `1388`,
    2384: `1389`,
    2385: `1389`,
    2386: `1390`,
    2387: `1391`,
    2388: `1391`,
    2389: `1391`,
    239: `40`,
    2390: `1392`,
    2391: `1392`,
    2392: `1392`,
    2393: `1393`,
    2394: `1394`,
    2395: `1394`,
    2396: `1395`,
    2397: `1395`,
    2398: `1395`,
    2399: `1396`,
    24: `2`,
    240: `40`,
    2400: `1397`,
    2401: `1397`,
    2402: `1398`,
    2403: `1398`,
    2404: `1398`,
    2405: `1399`,
    2406: `1399`,
    2407: `1400`,
    2408: `1401`,
    2409: `1402`,
    241: `41`,
    2410: `1402`,
    2411: `1403`,
    2412: `1403`,
    2413: `1403`,
    2414: `1404`,
    2415: `1405`,
    2416: `1406`,
    2417: `1406`,
    2418: `1407`,
    2419: `1407`,
    242: `41`,
    2420: `1408`,
    2421: `1408`,
    2422: `1408`,
    2423: `1409`,
    2424: `1410`,
    2425: `1410`,
    2426: `1410`,
    2427: `1411`,
    2428: `1412`,
    2429: `1413`,
    243: `42`,
    2430: `1413`,
    2431: `1413`,
    2432: `1414`,
    2433: `1414`,
    2434: `1415`,
    2435: `1415`,
    2436: `1416`,
    2437: `1416`,
    2438: `1417`,
    2439: `1418`,
    244: `43`,
    2440: `1418`,
    2441: `1418`,
    2442: `1419`,
    2443: `1419`,
    2444: `1420`,
    2445: `1420`,
    2446: `1422`,
    2447: `1422`,
    2448: `1424`,
    2449: `1425`,
    245: `46`,
    2450: `1426`,
    2451: `1427`,
    2452: `1428`,
    2453: `1429`,
    2454: `1430`,
    2455: `1431`,
    2456: `1431`,
    2457: `1432`,
    2458: `1432`,
    2459: `1433`,
    246: `46`,
    2460: `1434`,
    2461: `1435`,
    2462: `1435`,
    2463: `1436`,
    2464: `1436`,
    2465: `1437`,
    2466: `1437`,
    2467: `1437`,
    2468: `1438`,
    2469: `1438`,
    247: `46`,
    2470: `1439`,
    2471: `1439`,
    2472: `1440`,
    2473: `1440`,
    2474: `1441`,
    2475: `1441`,
    2476: `1441`,
    2477: `1442`,
    2478: `1443`,
    2479: `1443`,
    248: `47`,
    2480: `1443`,
    2481: `1444`,
    2482: `1445`,
    2483: `1446`,
    2484: `1446`,
    2485: `1446`,
    2486: `1447`,
    2487: `1447`,
    2488: `1448`,
    2489: `1448`,
    249: `47`,
    2490: `1449`,
    2491: `1449`,
    2492: `1450`,
    2493: `1451`,
    2494: `1451`,
    2495: `1451`,
    2496: `1452`,
    2497: `1452`,
    2498: `1453`,
    2499: `1453`,
    25: `2`,
    250: `48`,
    2500: `1455`,
    2501: `1455`,
    2502: `1457`,
    2503: `1458`,
    2504: `1459`,
    2505: `1460`,
    2506: `1461`,
    2507: `1462`,
    2508: `1463`,
    2509: `1464`,
    251: `48`,
    2510: `1464`,
    2511: `1465`,
    2512: `1465`,
    2513: `1466`,
    2514: `1467`,
    2515: `1468`,
    2516: `1468`,
    2517: `1469`,
    2518: `1469`,
    2519: `1470`,
    252: `49`,
    2520: `1470`,
    2521: `1471`,
    2522: `1472`,
    2523: `1472`,
    2524: `1473`,
    2525: `1474`,
    2526: `1475`,
    2527: `1476`,
    2528: `1476`,
    2529: `1477`,
    253: `50`,
    2530: `1477`,
    2531: `1478`,
    2532: `1479`,
    2533: `1479`,
    2534: `1480`,
    2535: `1481`,
    2536: `1482`,
    2537: `1483`,
    2538: `1484`,
    2539: `1484`,
    254: `51`,
    2540: `1485`,
    2541: `1485`,
    2542: `1485`,
    2543: `1488`,
    2544: `1488`,
    2545: `1489`,
    2546: `1489`,
    2547: `1490`,
    2548: `1491`,
    2549: `1494`,
    255: `51`,
    2550: `1494`,
    2551: `1494`,
    2552: `1495`,
    2553: `1495`,
    2554: `1496`,
    2555: `1496`,
    2556: `1497`,
    2557: `1497`,
    2558: `1498`,
    2559: `1498`,
    256: `52`,
    2560: `1498`,
    2561: `1499`,
    2562: `1499`,
    2563: `1500`,
    2564: `1500`,
    2565: `1502`,
    2566: `1502`,
    2567: `1503`,
    2568: `1504`,
    2569: `1505`,
    257: `53`,
    2570: `1507`,
    2571: `1508`,
    2572: `1508`,
    2573: `1509`,
    2574: `1510`,
    2575: `1511`,
    2576: `1511`,
    2577: `1512`,
    2578: `1513`,
    2579: `1513`,
    258: `53`,
    2580: `1513`,
    2581: `1514`,
    2582: `1514`,
    2583: `1514`,
    2584: `1515`,
    2585: `1516`,
    2586: `1516`,
    2587: `1517`,
    2588: `1517`,
    2589: `1517`,
    259: `54`,
    2590: `1518`,
    2591: `1519`,
    2592: `1519`,
    2593: `1520`,
    2594: `1520`,
    2595: `1520`,
    2596: `1521`,
    2597: `1521`,
    2598: `1522`,
    2599: `1523`,
    26: `2`,
    260: `55`,
    2600: `1524`,
    2601: `1524`,
    2602: `1525`,
    2603: `1525`,
    2604: `1525`,
    2605: `1526`,
    2606: `1527`,
    2607: `1528`,
    2608: `1528`,
    2609: `1529`,
    261: `56`,
    2610: `1529`,
    2611: `1530`,
    2612: `1530`,
    2613: `1530`,
    2614: `1531`,
    2615: `1532`,
    2616: `1532`,
    2617: `1532`,
    2618: `1533`,
    2619: `1534`,
    262: `57`,
    2620: `1535`,
    2621: `1535`,
    2622: `1535`,
    2623: `1536`,
    2624: `1536`,
    2625: `1537`,
    2626: `1537`,
    2627: `1538`,
    2628: `1538`,
    2629: `1539`,
    263: `57`,
    2630: `1540`,
    2631: `1540`,
    2632: `1540`,
    2633: `1541`,
    2634: `1541`,
    2635: `1542`,
    2636: `1542`,
    2637: `1544`,
    2638: `1544`,
    2639: `1546`,
    264: `59`,
    2640: `1547`,
    2641: `1548`,
    2642: `1549`,
    2643: `1550`,
    2644: `1551`,
    2645: `1552`,
    2646: `1553`,
    2647: `1553`,
    2648: `1554`,
    2649: `1554`,
    265: `59`,
    2650: `1555`,
    2651: `1556`,
    2652: `1557`,
    2653: `1557`,
    2654: `1558`,
    2655: `1558`,
    2656: `1559`,
    2657: `1559`,
    2658: `1559`,
    2659: `1560`,
    266: `60`,
    2660: `1560`,
    2661: `1561`,
    2662: `1561`,
    2663: `1562`,
    2664: `1562`,
    2665: `1563`,
    2666: `1563`,
    2667: `1563`,
    2668: `1564`,
    2669: `1565`,
    267: `61`,
    2670: `1565`,
    2671: `1565`,
    2672: `1566`,
    2673: `1567`,
    2674: `1568`,
    2675: `1568`,
    2676: `1568`,
    2677: `1569`,
    2678: `1569`,
    2679: `1570`,
    268: `62`,
    2680: `1570`,
    2681: `1571`,
    2682: `1571`,
    2683: `1572`,
    2684: `1573`,
    2685: `1573`,
    2686: `1573`,
    2687: `1574`,
    2688: `1574`,
    2689: `1575`,
    269: `65`,
    2690: `1575`,
    2691: `1577`,
    2692: `1577`,
    2693: `1579`,
    2694: `1580`,
    2695: `1581`,
    2696: `1582`,
    2697: `1583`,
    2698: `1584`,
    2699: `1585`,
    27: `2`,
    270: `65`,
    2700: `1586`,
    2701: `1586`,
    2702: `1587`,
    2703: `1587`,
    2704: `1588`,
    2705: `1589`,
    2706: `1590`,
    2707: `1590`,
    2708: `1591`,
    2709: `1591`,
    271: `65`,
    2710: `1592`,
    2711: `1592`,
    2712: `1593`,
    2713: `1594`,
    2714: `1594`,
    2715: `1595`,
    2716: `1596`,
    2717: `1597`,
    2718: `1598`,
    2719: `1598`,
    272: `65`,
    2720: `1599`,
    2721: `1599`,
    2722: `1600`,
    2723: `1601`,
    2724: `1601`,
    2725: `1602`,
    2726: `1603`,
    2727: `1604`,
    2728: `1605`,
    2729: `1606`,
    273: `65`,
    2730: `1606`,
    2731: `1607`,
    2732: `1607`,
    2733: `1607`,
    2734: `1610`,
    2735: `1610`,
    2736: `1611`,
    2737: `1611`,
    2738: `1612`,
    2739: `1613`,
    274: `65`,
    2740: `1616`,
    2741: `1616`,
    2742: `1616`,
    2743: `1617`,
    2744: `1617`,
    2745: `1618`,
    2746: `1620`,
    2747: `1621`,
    2748: `1621`,
    2749: `1622`,
    275: `66`,
    2750: `1623`,
    2751: `1624`,
    2752: `1624`,
    2753: `1625`,
    2754: `1626`,
    2755: `1626`,
    2756: `1626`,
    2757: `1627`,
    2758: `1627`,
    2759: `1627`,
    276: `66`,
    2760: `1628`,
    2761: `1628`,
    2762: `1628`,
    2763: `1629`,
    2764: `1629`,
    2765: `1630`,
    2766: `1630`,
    2767: `1630`,
    2768: `1633`,
    2769: `1633`,
    277: `67`,
    2770: `1634`,
    2771: `1634`,
    2772: `1635`,
    2773: `1635`,
    2774: `1636`,
    2775: `1637`,
    2776: `1638`,
    2777: `1638`,
    2778: `1639`,
    2779: `1639`,
    278: `68`,
    2780: `1640`,
    2781: `1640`,
    2782: `1640`,
    2783: `1641`,
    2784: `1641`,
    2785: `1642`,
    2786: `1642`,
    2787: `1643`,
    2788: `1643`,
    2789: `1644`,
    279: `70`,
    2790: `1645`,
    2791: `1645`,
    2792: `1646`,
    2793: `1646`,
    2794: `1647`,
    2795: `1647`,
    2796: `1648`,
    2797: `1649`,
    2798: `1649`,
    2799: `1650`,
    28: `2`,
    280: `70`,
    2800: `1650`,
    2801: `1650`,
    2802: `1650`,
    2803: `1650`,
    2804: `1650`,
    2805: `1651`,
    2806: `1651`,
    2807: `1652`,
    2808: `1653`,
    2809: `1654`,
    281: `71`,
    2810: `1654`,
    2811: `1655`,
    2812: `1656`,
    2813: `1656`,
    2814: `1657`,
    2815: `1658`,
    2816: `1659`,
    2817: `1659`,
    2818: `1660`,
    2819: `1661`,
    282: `76`,
    2820: `1662`,
    2821: `1664`,
    2822: `1664`,
    2823: `1665`,
    2824: `1665`,
    2825: `1665`,
    2826: `1666`,
    2827: `1666`,
    2828: `1667`,
    2829: `1668`,
    283: `76`,
    2830: `1669`,
    2831: `1669`,
    2832: `1670`,
    2833: `1671`,
    2834: `1672`,
    2835: `1673`,
    2836: `1673`,
    2837: `1674`,
    2838: `1675`,
    2839: `1675`,
    284: `77`,
    2840: `1675`,
    2841: `1676`,
    2842: `1677`,
    2843: `1678`,
    2844: `1678`,
    2845: `1679`,
    2846: `1679`,
    2847: `1680`,
    2848: `1681`,
    2849: `1681`,
    285: `77`,
    2850: `1682`,
    2851: `1683`,
    2852: `1683`,
    2853: `1683`,
    2854: `1684`,
    2855: `1685`,
    2856: `1686`,
    2857: `1686`,
    2858: `1687`,
    2859: `1687`,
    286: `78`,
    2860: `1688`,
    2861: `1688`,
    2862: `1689`,
    2863: `1689`,
    2864: `1690`,
    2865: `1690`,
    2866: `1691`,
    2867: `1692`,
    2868: `1695`,
    2869: `1695`,
    287: `79`,
    2870: `1696`,
    2871: `1696`,
    2872: `1696`,
    2873: `1697`,
    2874: `1699`,
    2875: `1699`,
    2876: `1700`,
    2877: `1700`,
    2878: `1701`,
    2879: `1701`,
    288: `79`,
    2880: `1701`,
    2881: `1702`,
    2882: `1702`,
    2883: `1703`,
    2884: `1703`,
    2885: `1703`,
    2886: `1704`,
    2887: `1706`,
    2888: `1706`,
    2889: `1707`,
    289: `79`,
    2890: `1707`,
    2891: `1708`,
    2892: `1708`,
    2893: `1708`,
    2894: `1709`,
    2895: `1709`,
    2896: `1710`,
    2897: `1710`,
    2898: `1711`,
    2899: `1712`,
    29: `2`,
    290: `80`,
    2900: `1712`,
    2901: `1713`,
    2902: `1713`,
    2903: `1714`,
    2904: `1714`,
    2905: `1715`,
    2906: `1716`,
    2907: `1716`,
    2908: `1717`,
    2909: `1717`,
    291: `80`,
    2910: `1718`,
    2911: `1718`,
    2912: `1719`,
    2913: `1720`,
    2914: `1725`,
    2915: `1725`,
    2916: `1726`,
    2917: `1726`,
    2918: `1726`,
    2919: `1727`,
    292: `81`,
    2920: `1727`,
    2921: `1728`,
    2922: `1728`,
    2923: `1729`,
    2924: `1729`,
    2925: `1729`,
    2926: `1730`,
    2927: `1730`,
    2928: `1731`,
    2929: `1731`,
    293: `81`,
    2930: `1732`,
    2931: `1733`,
    2932: `1734`,
    2933: `1734`,
    2934: `1735`,
    2935: `1735`,
    2936: `1736`,
    2937: `1737`,
    2938: `1738`,
    2939: `1738`,
    294: `82`,
    2940: `1739`,
    2941: `1739`,
    2942: `1740`,
    2943: `1740`,
    2944: `1741`,
    2945: `1742`,
    2946: `1742`,
    2947: `1744`,
    2948: `1744`,
    2949: `1745`,
    295: `83`,
    2950: `1745`,
    2951: `1746`,
    2952: `1747`,
    2953: `1747`,
    2954: `1748`,
    2955: `1749`,
    2956: `1750`,
    2957: `1750`,
    2958: `1751`,
    2959: `1752`,
    296: `86`,
    2960: `1753`,
    2961: `1753`,
    2962: `1754`,
    2963: `1755`,
    2964: `1755`,
    2965: `1756`,
    2966: `1757`,
    2967: `1758`,
    2968: `1758`,
    2969: `1759`,
    297: `86`,
    2970: `1760`,
    2971: `1761`,
    2972: `1761`,
    2973: `1762`,
    2974: `1763`,
    2975: `1763`,
    2976: `1764`,
    2977: `1765`,
    2978: `1765`,
    2979: `1766`,
    298: `86`,
    2980: `1767`,
    2981: `1768`,
    2982: `1768`,
    2983: `1769`,
    2984: `1770`,
    2985: `1771`,
    2986: `1771`,
    2987: `1772`,
    2988: `1773`,
    2989: `1774`,
    299: `87`,
    2990: `1774`,
    2991: `1775`,
    2992: `1776`,
    2993: `1777`,
    2994: `1777`,
    2995: `1778`,
    2996: `1778`,
    2997: `1779`,
    2998: `1779`,
    2999: `1779`,
    3: `2`,
    30: `2`,
    300: `87`,
    3000: `1782`,
    3001: `1782`,
    3002: `1783`,
    3003: `1783`,
    3004: `1784`,
    3005: `1785`,
    3006: `1786`,
    3007: `1786`,
    3008: `1786`,
    3009: `1787`,
    301: `88`,
    3010: `1787`,
    3011: `1788`,
    3012: `1789`,
    3013: `1789`,
    3014: `1790`,
    3015: `1790`,
    3016: `1790`,
    3017: `1790`,
    3018: `1790`,
    3019: `1790`,
    302: `88`,
    3020: `1791`,
    3021: `1791`,
    3022: `1792`,
    3023: `1793`,
    3024: `1794`,
    3025: `1796`,
    3026: `1796`,
    3027: `1797`,
    3028: `1797`,
    3029: `1797`,
    303: `89`,
    3030: `1798`,
    3031: `1798`,
    3032: `1799`,
    3033: `1799`,
    3034: `1799`,
    3035: `1800`,
    3036: `1800`,
    3037: `1801`,
    3038: `1801`,
    3039: `1802`,
    304: `89`,
    3040: `1802`,
    3041: `1803`,
    3042: `1804`,
    3043: `1805`,
    3044: `1806`,
    3045: `1806`,
    3046: `1807`,
    3047: `1808`,
    3048: `1809`,
    3049: `1809`,
    305: `89`,
    3050: `1810`,
    3051: `1810`,
    3052: `1811`,
    3053: `1811`,
    3054: `1812`,
    3055: `1812`,
    3056: `1813`,
    3057: `1813`,
    3058: `1814`,
    3059: `1814`,
    306: `94`,
    3060: `1814`,
    3061: `1817`,
    3062: `1817`,
    3063: `1818`,
    3064: `1818`,
    3065: `1819`,
    3066: `1820`,
    3067: `1823`,
    3068: `1824`,
    3069: `1825`,
    307: `94`,
    3070: `1825`,
    3071: `1826`,
    3072: `1827`,
    3073: `1828`,
    3074: `1828`,
    3075: `1829`,
    3076: `1830`,
    3077: `1831`,
    3078: `1831`,
    3079: `1832`,
    308: `95`,
    3080: `1833`,
    3081: `1834`,
    3082: `1835`,
    3083: `1836`,
    3084: `1836`,
    3085: `1836`,
    3086: `1837`,
    3087: `1837`,
    3088: `1838`,
    3089: `1839`,
    309: `96`,
    3090: `1839`,
    3091: `1839`,
    3092: `1840`,
    3093: `1840`,
    3094: `1841`,
    3095: `1842`,
    3096: `1843`,
    3097: `1843`,
    3098: `1844`,
    3099: `1845`,
    31: `2`,
    310: `96`,
    3100: `1846`,
    3101: `1847`,
    3102: `1848`,
    3103: `1848`,
    3104: `1848`,
    3105: `1849`,
    3106: `1849`,
    3107: `1850`,
    3108: `1851`,
    3109: `1851`,
    311: `99`,
    3110: `1851`,
    3111: `1852`,
    3112: `1852`,
    3113: `1854`,
    3114: `1854`,
    3115: `1855`,
    3116: `1855`,
    3117: `1856`,
    3118: `1857`,
    3119: `1857`,
    312: `99`,
    3120: `1858`,
    3121: `1859`,
    3122: `1860`,
    3123: `1860`,
    3124: `1861`,
    3125: `1862`,
    3126: `1863`,
    3127: `1863`,
    3128: `1864`,
    3129: `1865`,
    313: `100`,
    3130: `1866`,
    3131: `1866`,
    3132: `1867`,
    3133: `1868`,
    3134: `1869`,
    3135: `1869`,
    3136: `1870`,
    3137: `1871`,
    3138: `1871`,
    3139: `1872`,
    314: `100`,
    3140: `1873`,
    3141: `1873`,
    3142: `1874`,
    3143: `1875`,
    3144: `1876`,
    3145: `1876`,
    3146: `1877`,
    3147: `1878`,
    3148: `1878`,
    3149: `1879`,
    315: `101`,
    3150: `1880`,
    3151: `1880`,
    3152: `1881`,
    3153: `1882`,
    3154: `1882`,
    3155: `1882`,
    3156: `1883`,
    3157: `1884`,
    3158: `1885`,
    3159: `1885`,
    316: `102`,
    3160: `1886`,
    3161: `1886`,
    3162: `1887`,
    3163: `1887`,
    3164: `1887`,
    3165: `1889`,
    3166: `1889`,
    3167: `1889`,
    3168: `1890`,
    3169: `1890`,
    317: `103`,
    3170: `1890`,
    3171: `1890`,
    3172: `1891`,
    3173: `1891`,
    3174: `1891`,
    3175: `1893`,
    3176: `1894`,
    3177: `1895`,
    3178: `1895`,
    3179: `1896`,
    318: `103`,
    3180: `1896`,
    3181: `1897`,
    3182: `1897`,
    3183: `1899`,
    3184: `1899`,
    3185: `1899`,
    3186: `1899`,
    3187: `1899`,
    3188: `1899`,
    3189: `1899`,
    319: `103`,
    3190: `1899`,
    3191: `1900`,
    3192: `1900`,
    3193: `1901`,
    3194: `1901`,
    3195: `1901`,
    3196: `1902`,
    3197: `1902`,
    3198: `1903`,
    3199: `1905`,
    32: `2`,
    320: `104`,
    3200: `1905`,
    3201: `1906`,
    3202: `1906`,
    3203: `1908`,
    3204: `1908`,
    3205: `1908`,
    3206: `1909`,
    3207: `1909`,
    3208: `1910`,
    3209: `1910`,
    321: `104`,
    3210: `1910`,
    3211: `1912`,
    3212: `1912`,
    3213: `1912`,
    3214: `1914`,
    3215: `1914`,
    3216: `1914`,
    3217: `1915`,
    3218: `1915`,
    3219: `1916`,
    322: `105`,
    3220: `1916`,
    3221: `1916`,
    3222: `1918`,
    3223: `1918`,
    3224: `1918`,
    3225: `1920`,
    3226: `1920`,
    3227: `1920`,
    3228: `1921`,
    3229: `1921`,
    323: `106`,
    3230: `1922`,
    3231: `1922`,
    3232: `1922`,
    3233: `1924`,
    3234: `1924`,
    3235: `1924`,
    3236: `1926`,
    3237: `1926`,
    3238: `1926`,
    3239: `1927`,
    324: `107`,
    3240: `1927`,
    3241: `1928`,
    3242: `1928`,
    3243: `1928`,
    3244: `1930`,
    3245: `1931`,
    3246: `1931`,
    3247: `1932`,
    3248: `1933`,
    3249: `1934`,
    325: `107`,
    3250: `1934`,
    3251: `1935`,
    3252: `1935`,
    3253: `1936`,
    3254: `1937`,
    3255: `1938`,
    3256: `1939`,
    3257: `1939`,
    3258: `1940`,
    3259: `1941`,
    326: `108`,
    3260: `1942`,
    3261: `1943`,
    3262: `1943`,
    3263: `1944`,
    3264: `1945`,
    3265: `1946`,
    3266: `1947`,
    3267: `1947`,
    3268: `1948`,
    3269: `1948`,
    327: `108`,
    3270: `1948`,
    3271: `1949`,
    3272: `1949`,
    3273: `1949`,
    3274: `1950`,
    3275: `1951`,
    3276: `1952`,
    3277: `1953`,
    3278: `1953`,
    3279: `1953`,
    328: `109`,
    3280: `1955`,
    3281: `1956`,
    3282: `1957`,
    3283: `1957`,
    3284: `1958`,
    3285: `1959`,
    3286: `1960`,
    3287: `1960`,
    3288: `1961`,
    3289: `1961`,
    329: `109`,
    3290: `1962`,
    3291: `1962`,
    3292: `1962`,
    3293: `1963`,
    3294: `1964`,
    3295: `1964`,
    3296: `1966`,
    3297: `1966`,
    3298: `1967`,
    3299: `1967`,
    33: `2`,
    330: `109`,
    3300: `1967`,
    3301: `1968`,
    3302: `1968`,
    3303: `1969`,
    3304: `1970`,
    3305: `1971`,
    3306: `1971`,
    3307: `1972`,
    3308: `1973`,
    3309: `1974`,
    331: `110`,
    3310: `1975`,
    3311: `1975`,
    3312: `1975`,
    3313: `1976`,
    3314: `1976`,
    3315: `1977`,
    3316: `1978`,
    3317: `1978`,
    3318: `1978`,
    3319: `1979`,
    332: `110`,
    3320: `1980`,
    3321: `1980`,
    3322: `1980`,
    3323: `1981`,
    3324: `1981`,
    3325: `1982`,
    3326: `1982`,
    3327: `1982`,
    3328: `1983`,
    3329: `1983`,
    333: `111`,
    3330: `1984`,
    3331: `1985`,
    3332: `1986`,
    3333: `1986`,
    3334: `1987`,
    3335: `1988`,
    3336: `1989`,
    3337: `1990`,
    3338: `1990`,
    3339: `1990`,
    334: `111`,
    3340: `1991`,
    3341: `1991`,
    3342: `1992`,
    3343: `1993`,
    3344: `1993`,
    3345: `1993`,
    3346: `1994`,
    3347: `1995`,
    3348: `1995`,
    3349: `1995`,
    335: `111`,
    3350: `1996`,
    3351: `1997`,
    3352: `1997`,
    3353: `1998`,
    3354: `1998`,
    3355: `1998`,
    3356: `2000`,
    3357: `2000`,
    3358: `2001`,
    3359: `2001`,
    336: `111`,
    3360: `2002`,
    3361: `2003`,
    3362: `2003`,
    3363: `2004`,
    3364: `2004`,
    3365: `2004`,
    3366: `2006`,
    3367: `2006`,
    3368: `2007`,
    3369: `2007`,
    337: `111`,
    3370: `2008`,
    3371: `2009`,
    3372: `2009`,
    3373: `2009`,
    3374: `2010`,
    3375: `2010`,
    3376: `2011`,
    3377: `2011`,
    3378: `2011`,
    3379: `2013`,
    338: `111`,
    3380: `2013`,
    3381: `2014`,
    3382: `2014`,
    3383: `2015`,
    3384: `2016`,
    3385: `2016`,
    3386: `2016`,
    3387: `2017`,
    3388: `2017`,
    3389: `2018`,
    339: `112`,
    3390: `2018`,
    3391: `2018`,
    3392: `2020`,
    3393: `2020`,
    3394: `2021`,
    3395: `2021`,
    3396: `2022`,
    3397: `2023`,
    3398: `2023`,
    3399: `2024`,
    34: `2`,
    340: `112`,
    3400: `2025`,
    3401: `2026`,
    3402: `2026`,
    3403: `2027`,
    3404: `2027`,
    3405: `2028`,
    3406: `2028`,
    3407: `2029`,
    3408: `2030`,
    3409: `2030`,
    341: `113`,
    3410: `2031`,
    3411: `2032`,
    3412: `2033`,
    3413: `2034`,
    3414: `2034`,
    3415: `2035`,
    3416: `2035`,
    3417: `2036`,
    3418: `2037`,
    3419: `2038`,
    342: `114`,
    3420: `2038`,
    3421: `2039`,
    3422: `2039`,
    3423: `2039`,
    3424: `2040`,
    3425: `2041`,
    3426: `2041`,
    3427: `2043`,
    3428: `2044`,
    3429: `2045`,
    343: `115`,
    3430: `2045`,
    3431: `2046`,
    3432: `2047`,
    3433: `2048`,
    3434: `2048`,
    3435: `2049`,
    3436: `2049`,
    3437: `2050`,
    3438: `2050`,
    3439: `2050`,
    344: `115`,
    3440: `2051`,
    3441: `2052`,
    3442: `2052`,
    3443: `2054`,
    3444: `2054`,
    3445: `2055`,
    3446: `2055`,
    3447: `2055`,
    3448: `2056`,
    3449: `2056`,
    345: `116`,
    3450: `2057`,
    3451: `2058`,
    3452: `2059`,
    3453: `2059`,
    3454: `2060`,
    3455: `2061`,
    3456: `2062`,
    3457: `2063`,
    3458: `2063`,
    3459: `2063`,
    346: `117`,
    3460: `2064`,
    3461: `2064`,
    3462: `2065`,
    3463: `2066`,
    3464: `2066`,
    3465: `2066`,
    3466: `2067`,
    3467: `2068`,
    3468: `2068`,
    3469: `2068`,
    347: `119`,
    3470: `2069`,
    3471: `2069`,
    3472: `2070`,
    3473: `2070`,
    3474: `2070`,
    3475: `2071`,
    3476: `2071`,
    3477: `2072`,
    3478: `2073`,
    3479: `2074`,
    348: `119`,
    3480: `2074`,
    3481: `2075`,
    3482: `2076`,
    3483: `2077`,
    3484: `2078`,
    3485: `2078`,
    3486: `2078`,
    3487: `2079`,
    3488: `2079`,
    3489: `2080`,
    349: `120`,
    3490: `2081`,
    3491: `2081`,
    3492: `2081`,
    3493: `2082`,
    3494: `2083`,
    3495: `2083`,
    3496: `2083`,
    3497: `2084`,
    3498: `2085`,
    3499: `2085`,
    35: `2`,
    350: `120`,
    3500: `2086`,
    3501: `2086`,
    3502: `2086`,
    3503: `2088`,
    3504: `2088`,
    3505: `2089`,
    3506: `2089`,
    3507: `2090`,
    3508: `2091`,
    3509: `2091`,
    351: `120`,
    3510: `2092`,
    3511: `2092`,
    3512: `2092`,
    3513: `2094`,
    3514: `2094`,
    3515: `2095`,
    3516: `2095`,
    3517: `2096`,
    3518: `2097`,
    3519: `2097`,
    352: `121`,
    3520: `2098`,
    3521: `2098`,
    3522: `2098`,
    3523: `2100`,
    3524: `2100`,
    3525: `2101`,
    3526: `2101`,
    3527: `2102`,
    3528: `2103`,
    3529: `2103`,
    353: `121`,
    3530: `2103`,
    3531: `2104`,
    3532: `2104`,
    3533: `2105`,
    3534: `2105`,
    3535: `2105`,
    3536: `2107`,
    3537: `2107`,
    3538: `2108`,
    3539: `2108`,
    354: `122`,
    3540: `2109`,
    3541: `2110`,
    3542: `2110`,
    3543: `2110`,
    3544: `2111`,
    3545: `2111`,
    3546: `2112`,
    3547: `2112`,
    3548: `2112`,
    3549: `2114`,
    355: `123`,
    3550: `2114`,
    3551: `2114`,
    3552: `2116`,
    3553: `2116`,
    3554: `2116`,
    3555: `2118`,
    3556: `2118`,
    3557: `2118`,
    3558: `2120`,
    3559: `2120`,
    356: `124`,
    3560: `2121`,
    3561: `2121`,
    3562: `2122`,
    3563: `2123`,
    3564: `2123`,
    3565: `2123`,
    3566: `2124`,
    3567: `2124`,
    3568: `2125`,
    3569: `2125`,
    357: `124`,
    3570: `2126`,
    3571: `2127`,
    3572: `2130`,
    3573: `2130`,
    3574: `2130`,
    3575: `2131`,
    3576: `2131`,
    3577: `2132`,
    3578: `2132`,
    3579: `2133`,
    358: `124`,
    3580: `2133`,
    3581: `2133`,
    3582: `2135`,
    3583: `2135`,
    3584: `2135`,
    3585: `2137`,
    3586: `2137`,
    3587: `2137`,
    3588: `2139`,
    3589: `2139`,
    359: `124`,
    3590: `2139`,
    3591: `2141`,
    3592: `2141`,
    3593: `2141`,
    3594: `2143`,
    3595: `2143`,
    3596: `2144`,
    3597: `2144`,
    3598: `2145`,
    3599: `2146`,
    36: `2`,
    360: `124`,
    3600: `2146`,
    3601: `2147`,
    3602: `2148`,
    3603: `2149`,
    3604: `2149`,
    3605: `2150`,
    3606: `2150`,
    3607: `2151`,
    3608: `2151`,
    3609: `2152`,
    361: `124`,
    3610: `2153`,
    3611: `2153`,
    3612: `2154`,
    3613: `2155`,
    3614: `2156`,
    3615: `2157`,
    3616: `2157`,
    3617: `2158`,
    3618: `2158`,
    3619: `2159`,
    362: `125`,
    3620: `2160`,
    3621: `2161`,
    3622: `2161`,
    3623: `2162`,
    3624: `2162`,
    3625: `2162`,
    3626: `2163`,
    3627: `2164`,
    3628: `2164`,
    3629: `2166`,
    363: `125`,
    3630: `2167`,
    3631: `2168`,
    3632: `2168`,
    3633: `2169`,
    3634: `2170`,
    3635: `2171`,
    3636: `2171`,
    3637: `2172`,
    3638: `2172`,
    3639: `2173`,
    364: `125`,
    3640: `2173`,
    3641: `2173`,
    3642: `2174`,
    3643: `2175`,
    3644: `2175`,
    3645: `2177`,
    3646: `2177`,
    3647: `2178`,
    3648: `2178`,
    3649: `2178`,
    365: `130`,
    3650: `2179`,
    3651: `2179`,
    3652: `2180`,
    3653: `2181`,
    3654: `2182`,
    3655: `2182`,
    3656: `2183`,
    3657: `2184`,
    3658: `2185`,
    3659: `2186`,
    366: `130`,
    3660: `2186`,
    3661: `2186`,
    3662: `2187`,
    3663: `2187`,
    3664: `2188`,
    3665: `2189`,
    3666: `2189`,
    3667: `2189`,
    3668: `2190`,
    3669: `2191`,
    367: `130`,
    3670: `2191`,
    3671: `2191`,
    3672: `2192`,
    3673: `2192`,
    3674: `2193`,
    3675: `2193`,
    3676: `2193`,
    3677: `2194`,
    3678: `2194`,
    3679: `2195`,
    368: `130`,
    3680: `2196`,
    3681: `2197`,
    3682: `2197`,
    3683: `2198`,
    3684: `2199`,
    3685: `2200`,
    3686: `2201`,
    3687: `2201`,
    3688: `2201`,
    3689: `2202`,
    369: `130`,
    3690: `2202`,
    3691: `2203`,
    3692: `2204`,
    3693: `2204`,
    3694: `2204`,
    3695: `2205`,
    3696: `2206`,
    3697: `2206`,
    3698: `2206`,
    3699: `2207`,
    37: `2`,
    370: `130`,
    3700: `2208`,
    3701: `2208`,
    3702: `2209`,
    3703: `2209`,
    3704: `2209`,
    3705: `2211`,
    3706: `2211`,
    3707: `2212`,
    3708: `2212`,
    3709: `2213`,
    371: `130`,
    3710: `2214`,
    3711: `2214`,
    3712: `2215`,
    3713: `2215`,
    3714: `2215`,
    3715: `2217`,
    3716: `2217`,
    3717: `2218`,
    3718: `2218`,
    3719: `2219`,
    372: `130`,
    3720: `2220`,
    3721: `2220`,
    3722: `2221`,
    3723: `2221`,
    3724: `2221`,
    3725: `2223`,
    3726: `2223`,
    3727: `2224`,
    3728: `2224`,
    3729: `2225`,
    373: `130`,
    3730: `2226`,
    3731: `2226`,
    3732: `2226`,
    3733: `2227`,
    3734: `2227`,
    3735: `2228`,
    3736: `2228`,
    3737: `2228`,
    3738: `2230`,
    3739: `2230`,
    374: `130`,
    3740: `2231`,
    3741: `2231`,
    3742: `2232`,
    3743: `2233`,
    3744: `2233`,
    3745: `2233`,
    3746: `2234`,
    3747: `2234`,
    3748: `2235`,
    3749: `2235`,
    375: `130`,
    3750: `2235`,
    3751: `2237`,
    3752: `2237`,
    3753: `2238`,
    3754: `2238`,
    3755: `2239`,
    3756: `2240`,
    3757: `2240`,
    3758: `2241`,
    3759: `2242`,
    376: `131`,
    3760: `2243`,
    3761: `2243`,
    3762: `2244`,
    3763: `2244`,
    3764: `2245`,
    3765: `2245`,
    3766: `2246`,
    3767: `2247`,
    3768: `2247`,
    3769: `2248`,
    377: `131`,
    3770: `2249`,
    3771: `2250`,
    3772: `2251`,
    3773: `2251`,
    3774: `2252`,
    3775: `2252`,
    3776: `2253`,
    3777: `2254`,
    3778: `2255`,
    3779: `2255`,
    378: `132`,
    3780: `2256`,
    3781: `2256`,
    3782: `2256`,
    3783: `2257`,
    3784: `2258`,
    3785: `2258`,
    3786: `2260`,
    3787: `2261`,
    3788: `2262`,
    3789: `2262`,
    379: `132`,
    3790: `2263`,
    3791: `2264`,
    3792: `2265`,
    3793: `2265`,
    3794: `2266`,
    3795: `2266`,
    3796: `2267`,
    3797: `2267`,
    3798: `2267`,
    3799: `2268`,
    38: `2`,
    380: `132`,
    3800: `2269`,
    3801: `2269`,
    3802: `2271`,
    3803: `2271`,
    3804: `2272`,
    3805: `2272`,
    3806: `2272`,
    3807: `2273`,
    3808: `2273`,
    3809: `2274`,
    381: `137`,
    3810: `2275`,
    3811: `2276`,
    3812: `2276`,
    3813: `2277`,
    3814: `2278`,
    3815: `2279`,
    3816: `2280`,
    3817: `2280`,
    3818: `2280`,
    3819: `2281`,
    382: `137`,
    3820: `2281`,
    3821: `2282`,
    3822: `2283`,
    3823: `2283`,
    3824: `2283`,
    3825: `2284`,
    3826: `2285`,
    3827: `2285`,
    3828: `2285`,
    3829: `2286`,
    383: `138`,
    3830: `2286`,
    3831: `2287`,
    3832: `2287`,
    3833: `2287`,
    3834: `2288`,
    3835: `2288`,
    3836: `2289`,
    3837: `2290`,
    3838: `2291`,
    3839: `2291`,
    384: `139`,
    3840: `2292`,
    3841: `2293`,
    3842: `2294`,
    3843: `2295`,
    3844: `2295`,
    3845: `2295`,
    3846: `2296`,
    3847: `2296`,
    3848: `2297`,
    3849: `2298`,
    385: `139`,
    3850: `2298`,
    3851: `2298`,
    3852: `2299`,
    3853: `2300`,
    3854: `2300`,
    3855: `2300`,
    3856: `2301`,
    3857: `2302`,
    3858: `2302`,
    3859: `2303`,
    386: `142`,
    3860: `2303`,
    3861: `2303`,
    3862: `2305`,
    3863: `2305`,
    3864: `2306`,
    3865: `2306`,
    3866: `2307`,
    3867: `2308`,
    3868: `2308`,
    3869: `2309`,
    387: `142`,
    3870: `2309`,
    3871: `2309`,
    3872: `2311`,
    3873: `2311`,
    3874: `2312`,
    3875: `2312`,
    3876: `2313`,
    3877: `2314`,
    3878: `2317`,
    3879: `2317`,
    388: `143`,
    3880: `2317`,
    3881: `2318`,
    3882: `2318`,
    3883: `2319`,
    3884: `2319`,
    3885: `2320`,
    3886: `2320`,
    3887: `2320`,
    3888: `2322`,
    3889: `2322`,
    389: `143`,
    3890: `2323`,
    3891: `2323`,
    3892: `2324`,
    3893: `2325`,
    3894: `2325`,
    3895: `2326`,
    3896: `2326`,
    3897: `2326`,
    3898: `2328`,
    3899: `2328`,
    39: `2`,
    390: `144`,
    3900: `2329`,
    3901: `2329`,
    3902: `2330`,
    3903: `2331`,
    3904: `2331`,
    3905: `2332`,
    3906: `2333`,
    3907: `2334`,
    3908: `2334`,
    3909: `2335`,
    391: `145`,
    3910: `2335`,
    3911: `2336`,
    3912: `2336`,
    3913: `2337`,
    3914: `2338`,
    3915: `2338`,
    3916: `2339`,
    3917: `2340`,
    3918: `2341`,
    3919: `2342`,
    392: `146`,
    3920: `2342`,
    3921: `2343`,
    3922: `2343`,
    3923: `2344`,
    3924: `2345`,
    3925: `2346`,
    3926: `2346`,
    3927: `2347`,
    3928: `2347`,
    3929: `2347`,
    393: `146`,
    3930: `2348`,
    3931: `2349`,
    3932: `2349`,
    3933: `2351`,
    3934: `2352`,
    3935: `2353`,
    3936: `2353`,
    3937: `2354`,
    3938: `2355`,
    3939: `2356`,
    394: `146`,
    3940: `2356`,
    3941: `2357`,
    3942: `2357`,
    3943: `2358`,
    3944: `2358`,
    3945: `2358`,
    3946: `2359`,
    3947: `2360`,
    3948: `2360`,
    3949: `2362`,
    395: `147`,
    3950: `2362`,
    3951: `2363`,
    3952: `2363`,
    3953: `2363`,
    3954: `2364`,
    3955: `2364`,
    3956: `2365`,
    3957: `2366`,
    3958: `2367`,
    3959: `2367`,
    396: `147`,
    3960: `2368`,
    3961: `2369`,
    3962: `2370`,
    3963: `2371`,
    3964: `2371`,
    3965: `2371`,
    3966: `2372`,
    3967: `2372`,
    3968: `2373`,
    3969: `2374`,
    397: `148`,
    3970: `2374`,
    3971: `2374`,
    3972: `2375`,
    3973: `2376`,
    3974: `2376`,
    3975: `2376`,
    3976: `2377`,
    3977: `2377`,
    3978: `2378`,
    3979: `2378`,
    398: `149`,
    3980: `2378`,
    3981: `2379`,
    3982: `2379`,
    3983: `2380`,
    3984: `2381`,
    3985: `2382`,
    3986: `2382`,
    3987: `2383`,
    3988: `2384`,
    3989: `2385`,
    399: `150`,
    3990: `2386`,
    3991: `2386`,
    3992: `2386`,
    3993: `2387`,
    3994: `2387`,
    3995: `2388`,
    3996: `2389`,
    3997: `2389`,
    3998: `2389`,
    3999: `2390`,
    4: `2`,
    40: `2`,
    400: `150`,
    4000: `2391`,
    4001: `2391`,
    4002: `2391`,
    4003: `2392`,
    4004: `2393`,
    4005: `2393`,
    4006: `2394`,
    4007: `2394`,
    4008: `2394`,
    4009: `2396`,
    401: `151`,
    4010: `2396`,
    4011: `2397`,
    4012: `2397`,
    4013: `2398`,
    4014: `2399`,
    4015: `2399`,
    4016: `2400`,
    4017: `2400`,
    4018: `2400`,
    4019: `2402`,
    402: `151`,
    4020: `2402`,
    4021: `2403`,
    4022: `2403`,
    4023: `2404`,
    4024: `2405`,
    4025: `2405`,
    4026: `2406`,
    4027: `2406`,
    4028: `2406`,
    4029: `2408`,
    403: `152`,
    4030: `2408`,
    4031: `2409`,
    4032: `2409`,
    4033: `2410`,
    4034: `2411`,
    4035: `2411`,
    4036: `2411`,
    4037: `2412`,
    4038: `2412`,
    4039: `2413`,
    404: `152`,
    4040: `2413`,
    4041: `2413`,
    4042: `2415`,
    4043: `2415`,
    4044: `2416`,
    4045: `2416`,
    4046: `2417`,
    4047: `2418`,
    4048: `2418`,
    4049: `2418`,
    405: `152`,
    4050: `2419`,
    4051: `2419`,
    4052: `2420`,
    4053: `2420`,
    4054: `2420`,
    4055: `2422`,
    4056: `2422`,
    4057: `2423`,
    4058: `2423`,
    4059: `2424`,
    406: `153`,
    4060: `2425`,
    4061: `2425`,
    4062: `2426`,
    4063: `2427`,
    4064: `2428`,
    4065: `2428`,
    4066: `2429`,
    4067: `2429`,
    4068: `2430`,
    4069: `2430`,
    407: `153`,
    4070: `2431`,
    4071: `2432`,
    4072: `2432`,
    4073: `2433`,
    4074: `2434`,
    4075: `2435`,
    4076: `2436`,
    4077: `2436`,
    4078: `2437`,
    4079: `2437`,
    408: `154`,
    4080: `2438`,
    4081: `2439`,
    4082: `2440`,
    4083: `2440`,
    4084: `2441`,
    4085: `2441`,
    4086: `2441`,
    4087: `2442`,
    4088: `2443`,
    4089: `2443`,
    409: `154`,
    4090: `2445`,
    4091: `2446`,
    4092: `2447`,
    4093: `2447`,
    4094: `2448`,
    4095: `2449`,
    4096: `2450`,
    4097: `2450`,
    4098: `2451`,
    4099: `2451`,
    41: `2`,
    410: `154`,
    4100: `2452`,
    4101: `2452`,
    4102: `2452`,
    4103: `2453`,
    4104: `2454`,
    4105: `2454`,
    4106: `2456`,
    4107: `2456`,
    4108: `2457`,
    4109: `2457`,
    411: `154`,
    4110: `2457`,
    4111: `2458`,
    4112: `2458`,
    4113: `2459`,
    4114: `2460`,
    4115: `2461`,
    4116: `2461`,
    4117: `2462`,
    4118: `2463`,
    4119: `2464`,
    412: `154`,
    4120: `2465`,
    4121: `2465`,
    4122: `2465`,
    4123: `2466`,
    4124: `2466`,
    4125: `2467`,
    4126: `2468`,
    4127: `2468`,
    4128: `2468`,
    4129: `2469`,
    413: `154`,
    4130: `2470`,
    4131: `2470`,
    4132: `2470`,
    4133: `2471`,
    4134: `2471`,
    4135: `2472`,
    4136: `2472`,
    4137: `2472`,
    4138: `2473`,
    4139: `2473`,
    414: `155`,
    4140: `2474`,
    4141: `2475`,
    4142: `2476`,
    4143: `2476`,
    4144: `2477`,
    4145: `2478`,
    4146: `2479`,
    4147: `2480`,
    4148: `2480`,
    4149: `2480`,
    415: `155`,
    4150: `2481`,
    4151: `2481`,
    4152: `2482`,
    4153: `2483`,
    4154: `2483`,
    4155: `2483`,
    4156: `2484`,
    4157: `2485`,
    4158: `2485`,
    4159: `2485`,
    416: `156`,
    4160: `2486`,
    4161: `2487`,
    4162: `2487`,
    4163: `2488`,
    4164: `2488`,
    4165: `2488`,
    4166: `2490`,
    4167: `2490`,
    4168: `2491`,
    4169: `2491`,
    417: `157`,
    4170: `2492`,
    4171: `2493`,
    4172: `2493`,
    4173: `2494`,
    4174: `2494`,
    4175: `2494`,
    4176: `2496`,
    4177: `2496`,
    4178: `2497`,
    4179: `2497`,
    418: `158`,
    4180: `2498`,
    4181: `2499`,
    4182: `2499`,
    4183: `2500`,
    4184: `2500`,
    4185: `2500`,
    4186: `2502`,
    4187: `2502`,
    4188: `2503`,
    4189: `2503`,
    419: `158`,
    4190: `2504`,
    4191: `2505`,
    4192: `2505`,
    4193: `2505`,
    4194: `2506`,
    4195: `2506`,
    4196: `2507`,
    4197: `2507`,
    4198: `2507`,
    4199: `2509`,
    42: `2`,
    420: `159`,
    4200: `2509`,
    4201: `2510`,
    4202: `2510`,
    4203: `2511`,
    4204: `2512`,
    4205: `2512`,
    4206: `2513`,
    4207: `2514`,
    4208: `2515`,
    4209: `2515`,
    421: `160`,
    4210: `2516`,
    4211: `2516`,
    4212: `2517`,
    4213: `2517`,
    4214: `2518`,
    4215: `2519`,
    4216: `2519`,
    4217: `2520`,
    4218: `2521`,
    4219: `2522`,
    422: `162`,
    4220: `2523`,
    4221: `2523`,
    4222: `2524`,
    4223: `2524`,
    4224: `2525`,
    4225: `2526`,
    4226: `2527`,
    4227: `2527`,
    4228: `2528`,
    4229: `2528`,
    423: `162`,
    4230: `2528`,
    4231: `2529`,
    4232: `2530`,
    4233: `2530`,
    4234: `2531`,
    4235: `2531`,
    4236: `2531`,
    4237: `2533`,
    4238: `2533`,
    4239: `2534`,
    424: `163`,
    4240: `2534`,
    4241: `2535`,
    4242: `2536`,
    4243: `2536`,
    4244: `2536`,
    4245: `2537`,
    4246: `2537`,
    4247: `2538`,
    4248: `2538`,
    4249: `2538`,
    425: `163`,
    4250: `2540`,
    4251: `2540`,
    4252: `2541`,
    4253: `2541`,
    4254: `2542`,
    4255: `2543`,
    4256: `2543`,
    4257: `2543`,
    4258: `2544`,
    4259: `2544`,
    426: `163`,
    4260: `2545`,
    4261: `2545`,
    4262: `2545`,
    4263: `2547`,
    4264: `2547`,
    4265: `2548`,
    4266: `2548`,
    4267: `2549`,
    4268: `2550`,
    4269: `2550`,
    427: `164`,
    4270: `2550`,
    4271: `2551`,
    4272: `2551`,
    4273: `2552`,
    4274: `2552`,
    4275: `2552`,
    4276: `2554`,
    4277: `2555`,
    4278: `2556`,
    4279: `2557`,
    428: `164`,
    4280: `2558`,
    4281: `2560`,
    4282: `2561`,
    4283: `2561`,
    4284: `2562`,
    4285: `2562`,
    4286: `2563`,
    4287: `2563`,
    4288: `2564`,
    4289: `2564`,
    429: `165`,
    4290: `2565`,
    4291: `2565`,
    4292: `2566`,
    4293: `2567`,
    4294: `2569`,
    4295: `2570`,
    4296: `2570`,
    4297: `2571`,
    4298: `2571`,
    4299: `2572`,
    43: `2`,
    430: `166`,
    4300: `2572`,
    4301: `2573`,
    4302: `2573`,
    4303: `2574`,
    4304: `2574`,
    4305: `2575`,
    4306: `2575`,
    4307: `2576`,
    4308: `2577`,
    4309: `2579`,
    431: `167`,
    4310: `2579`,
    4311: `2580`,
    4312: `2580`,
    4313: `2581`,
    4314: `2582`,
    4315: `2582`,
    4316: `2583`,
    4317: `2583`,
    4318: `2583`,
    4319: `2586`,
    432: `167`,
    4320: `2586`,
    4321: `2586`,
    4322: `2587`,
    4323: `2587`,
    4324: `2588`,
    4325: `2588`,
    4326: `2588`,
    4327: `2591`,
    4328: `2591`,
    4329: `2591`,
    433: `167`,
    4330: `2592`,
    4331: `2592`,
    4332: `2592`,
    4333: `2593`,
    4334: `2594`,
    4335: `2594`,
    4336: `2595`,
    4337: `2595`,
    4338: `2596`,
    4339: `2596`,
    434: `167`,
    4340: `2596`,
    4341: `2599`,
    4342: `2599`,
    4343: `2599`,
    4344: `2600`,
    4345: `2600`,
    4346: `2601`,
    4347: `2601`,
    4348: `2601`,
    4349: `2603`,
    435: `167`,
    4350: `2604`,
    4351: `2606`,
    4352: `2607`,
    4353: `2608`,
    4354: `2609`,
    4355: `2609`,
    4356: `2610`,
    4357: `2610`,
    4358: `2611`,
    4359: `2611`,
    436: `167`,
    4360: `2611`,
    4361: `2612`,
    4362: `2614`,
    4363: `2615`,
    4364: `2616`,
    4365: `2616`,
    4366: `2616`,
    4367: `2617`,
    4368: `2618`,
    4369: `2618`,
    437: `167`,
    4370: `2619`,
    4371: `2619`,
    4372: `2619`,
    4373: `2620`,
    4374: `2622`,
    4375: `2623`,
    4376: `2624`,
    4377: `2624`,
    4378: `2625`,
    4379: `2626`,
    438: `167`,
    4380: `2627`,
    4381: `2628`,
    4382: `2629`,
    4383: `2630`,
    4384: `2632`,
    4385: `2633`,
    4386: `2633`,
    4387: `2633`,
    4388: `2635`,
    4389: `2636`,
    439: `167`,
    4390: `2636`,
    4391: `2636`,
    4392: `2637`,
    4393: `2638`,
    4394: `2639`,
    4395: `2640`,
    4396: `2641`,
    4397: `2643`,
    4398: `2644`,
    4399: `2645`,
    44: `2`,
    440: `167`,
    4400: `2646`,
    4401: `2646`,
    4402: `2646`,
    4403: `2647`,
    4404: `2647`,
    4405: `2648`,
    4406: `2649`,
    4407: `2650`,
    4408: `2652`,
    4409: `2653`,
    441: `167`,
    4410: `2654`,
    4411: `2655`,
    4412: `2655`,
    4413: `2655`,
    4414: `2656`,
    4415: `2656`,
    4416: `2657`,
    4417: `2657`,
    4418: `2657`,
    4419: `2658`,
    442: `167`,
    4420: `2658`,
    4421: `2658`,
    4422: `2660`,
    4423: `2661`,
    4424: `2661`,
    4425: `2661`,
    4426: `2662`,
    4427: `2662`,
    4428: `2663`,
    4429: `2664`,
    443: `168`,
    4430: `2664`,
    4431: `2664`,
    4432: `2665`,
    4433: `2665`,
    4434: `2666`,
    4435: `2667`,
    4436: `2667`,
    4437: `2668`,
    4438: `2669`,
    4439: `2669`,
    444: `168`,
    4440: `2670`,
    4441: `2671`,
    4442: `2671`,
    4443: `2672`,
    4444: `2673`,
    4445: `2673`,
    4446: `2674`,
    4447: `2675`,
    4448: `2675`,
    4449: `2676`,
    445: `168`,
    4450: `2677`,
    4451: `2677`,
    4452: `2678`,
    4453: `2679`,
    4454: `2679`,
    4455: `2680`,
    4456: `2681`,
    4457: `2681`,
    4458: `2682`,
    4459: `2683`,
    446: `173`,
    4460: `2683`,
    4461: `2683`,
    4462: `2684`,
    4463: `2684`,
    4464: `2685`,
    4465: `2686`,
    4466: `2686`,
    4467: `2686`,
    4468: `2687`,
    4469: `2687`,
    447: `173`,
    4470: `2688`,
    4471: `2689`,
    4472: `2689`,
    4473: `2689`,
    4474: `2690`,
    4475: `2690`,
    4476: `2691`,
    4477: `2692`,
    4478: `2692`,
    4479: `2692`,
    448: `173`,
    4480: `2693`,
    4481: `2693`,
    4482: `2694`,
    4483: `2695`,
    4484: `2695`,
    4485: `2695`,
    4486: `2696`,
    4487: `2697`,
    4488: `2698`,
    4489: `2698`,
    449: `173`,
    4490: `2699`,
    4491: `2700`,
    4492: `2700`,
    4493: `2700`,
    4494: `2701`,
    4495: `2702`,
    4496: `2702`,
    4497: `2703`,
    4498: `2704`,
    4499: `2704`,
    45: `2`,
    450: `173`,
    4500: `2704`,
    4501: `2705`,
    4502: `2705`,
    4503: `2706`,
    4504: `2707`,
    4505: `2707`,
    4506: `2708`,
    4507: `2709`,
    4508: `2709`,
    4509: `2709`,
    451: `173`,
    4510: `2710`,
    4511: `2711`,
    4512: `2711`,
    4513: `2712`,
    4514: `2713`,
    4515: `2713`,
    4516: `2713`,
    4517: `2714`,
    4518: `2714`,
    4519: `2715`,
    452: `173`,
    4520: `2716`,
    4521: `2716`,
    4522: `2717`,
    4523: `2717`,
    4524: `2717`,
    4525: `2718`,
    4526: `2719`,
    4527: `2719`,
    4528: `2720`,
    4529: `2722`,
    453: `173`,
    4530: `2722`,
    4531: `2723`,
    4532: `2723`,
    4533: `2724`,
    4534: `2726`,
    4535: `2727`,
    4536: `2728`,
    4537: `2728`,
    4538: `2729`,
    4539: `2729`,
    454: `173`,
    4540: `2730`,
    4541: `2730`,
    4542: `2731`,
    4543: `2731`,
    4544: `2732`,
    4545: `2732`,
    4546: `2733`,
    4547: `2734`,
    4548: `2736`,
    4549: `2737`,
    455: `173`,
    4550: `2738`,
    4551: `2739`,
    4552: `2740`,
    4553: `2740`,
    4554: `2741`,
    4555: `2742`,
    4556: `2743`,
    4557: `2744`,
    4558: `2746`,
    4559: `2746`,
    456: `173`,
    4560: `2747`,
    4561: `2748`,
    4562: `2748`,
    4563: `2749`,
    4564: `2751`,
    4565: `2752`,
    4566: `2752`,
    4567: `2752`,
    4568: `2754`,
    4569: `2754`,
    457: `173`,
    4570: `2755`,
    4571: `2755`,
    4572: `2756`,
    4573: `2757`,
    4574: `2758`,
    4575: `2758`,
    4576: `2758`,
    4577: `2759`,
    4578: `2759`,
    4579: `2759`,
    458: `173`,
    4580: `2761`,
    4581: `2762`,
    4582: `2762`,
    4583: `2762`,
    4584: `2763`,
    4585: `2763`,
    4586: `2764`,
    4587: `2765`,
    4588: `2765`,
    4589: `2765`,
    459: `173`,
    4590: `2766`,
    4591: `2766`,
    4592: `2767`,
    4593: `2768`,
    4594: `2768`,
    4595: `2769`,
    4596: `2770`,
    4597: `2770`,
    4598: `2771`,
    4599: `2772`,
    46: `2`,
    460: `173`,
    4600: `2772`,
    4601: `2773`,
    4602: `2774`,
    4603: `2774`,
    4604: `2775`,
    4605: `2776`,
    4606: `2776`,
    4607: `2777`,
    4608: `2778`,
    4609: `2778`,
    461: `173`,
    4610: `2779`,
    4611: `2780`,
    4612: `2780`,
    4613: `2781`,
    4614: `2782`,
    4615: `2782`,
    4616: `2783`,
    4617: `2784`,
    4618: `2784`,
    4619: `2784`,
    462: `173`,
    4620: `2785`,
    4621: `2785`,
    4622: `2786`,
    4623: `2787`,
    4624: `2787`,
    4625: `2787`,
    4626: `2788`,
    4627: `2788`,
    4628: `2789`,
    4629: `2790`,
    463: `173`,
    4630: `2790`,
    4631: `2791`,
    4632: `2792`,
    4633: `2792`,
    4634: `2793`,
    4635: `2794`,
    4636: `2794`,
    4637: `2794`,
    4638: `2795`,
    4639: `2795`,
    464: `173`,
    4640: `2796`,
    4641: `2797`,
    4642: `2797`,
    4643: `2797`,
    4644: `2798`,
    4645: `2798`,
    4646: `2799`,
    4647: `2799`,
    4648: `2799`,
    4649: `2800`,
    465: `174`,
    4650: `2800`,
    4651: `2801`,
    4652: `2802`,
    4653: `2802`,
    4654: `2803`,
    4655: `2805`,
    4656: `2806`,
    4657: `2806`,
    4658: `2806`,
    4659: `2807`,
    466: `174`,
    4660: `2807`,
    4661: `2808`,
    4662: `2809`,
    4663: `2809`,
    4664: `2809`,
    4665: `2810`,
    4666: `2810`,
    4667: `2811`,
    4668: `2812`,
    4669: `2812`,
    467: `175`,
    4670: `2813`,
    4671: `2814`,
    4672: `2814`,
    4673: `2815`,
    4674: `2816`,
    4675: `2816`,
    4676: `2817`,
    4677: `2818`,
    4678: `2818`,
    4679: `2819`,
    468: `175`,
    4680: `2820`,
    4681: `2820`,
    4682: `2820`,
    4683: `2821`,
    4684: `2821`,
    4685: `2822`,
    4686: `2823`,
    4687: `2823`,
    4688: `2823`,
    4689: `2824`,
    469: `175`,
    4690: `2825`,
    4691: `2825`,
    4692: `2826`,
    4693: `2827`,
    4694: `2827`,
    4695: `2827`,
    4696: `2828`,
    4697: `2829`,
    4698: `2829`,
    4699: `2830`,
    47: `2`,
    470: `178`,
    4700: `2831`,
    4701: `2831`,
    4702: `2831`,
    4703: `2832`,
    4704: `2832`,
    4705: `2833`,
    4706: `2834`,
    4707: `2834`,
    4708: `2834`,
    4709: `2835`,
    471: `178`,
    4710: `2835`,
    4711: `2836`,
    4712: `2837`,
    4713: `2837`,
    4714: `2837`,
    4715: `2838`,
    4716: `2839`,
    4717: `2839`,
    4718: `2840`,
    4719: `2841`,
    472: `178`,
    4720: `2841`,
    4721: `2841`,
    4722: `2842`,
    4723: `2843`,
    4724: `2843`,
    4725: `2844`,
    4726: `2844`,
    4727: `2844`,
    4728: `2845`,
    4729: `2846`,
    473: `179`,
    4730: `2846`,
    4731: `2847`,
    4732: `2850`,
    4733: `2850`,
    4734: `2851`,
    4735: `2851`,
    4736: `2852`,
    4737: `2852`,
    4738: `2853`,
    4739: `2854`,
    474: `180`,
    4740: `2855`,
    4741: `2855`,
    4742: `2856`,
    4743: `2857`,
    4744: `2857`,
    4745: `2858`,
    4746: `2858`,
    4747: `2859`,
    4748: `2859`,
    4749: `2860`,
    475: `180`,
    4750: `2861`,
    4751: `2862`,
    4752: `2862`,
    4753: `2863`,
    4754: `2863`,
    4755: `2864`,
    4756: `2865`,
    4757: `2866`,
    4758: `2866`,
    4759: `2867`,
    476: `183`,
    4760: `2868`,
    4761: `2869`,
    4762: `2871`,
    4763: `2872`,
    4764: `2872`,
    4765: `2873`,
    4766: `2873`,
    4767: `2873`,
    4768: `2876`,
    4769: `2876`,
    477: `184`,
    4770: `2877`,
    4771: `2877`,
    4772: `2878`,
    4773: `2878`,
    4774: `2879`,
    4775: `2880`,
    4776: `2881`,
    4777: `2881`,
    4778: `2882`,
    4779: `2883`,
    478: `185`,
    4780: `2883`,
    4781: `2884`,
    4782: `2884`,
    4783: `2885`,
    4784: `2885`,
    4785: `2886`,
    4786: `2887`,
    4787: `2888`,
    4788: `2888`,
    4789: `2889`,
    479: `186`,
    4790: `2889`,
    4791: `2890`,
    4792: `2891`,
    4793: `2892`,
    4794: `2892`,
    4795: `2893`,
    4796: `2893`,
    4797: `2894`,
    4798: `2895`,
    4799: `2896`,
    48: `2`,
    480: `186`,
    4800: `2896`,
    4801: `2897`,
    4802: `2898`,
    4803: `2899`,
    4804: `2901`,
    4805: `2902`,
    4806: `2902`,
    4807: `2903`,
    481: `187`,
    482: `188`,
    483: `189`,
    484: `190`,
    485: `190`,
    486: `191`,
    487: `191`,
    488: `191`,
    489: `194`,
    49: `2`,
    490: `194`,
    491: `194`,
    492: `195`,
    493: `196`,
    494: `196`,
    495: `199`,
    496: `200`,
    497: `201`,
    498: `201`,
    499: `201`,
    5: `2`,
    50: `2`,
    500: `202`,
    501: `202`,
    502: `203`,
    503: `204`,
    504: `205`,
    505: `206`,
    506: `206`,
    507: `207`,
    508: `207`,
    509: `207`,
    51: `2`,
    510: `210`,
    511: `210`,
    512: `210`,
    513: `211`,
    514: `212`,
    515: `212`,
    516: `215`,
    517: `216`,
    518: `217`,
    519: `217`,
    52: `2`,
    520: `218`,
    521: `218`,
    522: `219`,
    523: `220`,
    524: `221`,
    525: `222`,
    526: `222`,
    527: `223`,
    528: `223`,
    529: `223`,
    53: `2`,
    530: `226`,
    531: `226`,
    532: `227`,
    533: `227`,
    534: `228`,
    535: `229`,
    536: `229`,
    537: `230`,
    538: `230`,
    539: `231`,
    54: `2`,
    540: `232`,
    541: `233`,
    542: `240`,
    543: `241`,
    544: `241`,
    545: `242`,
    546: `242`,
    547: `242`,
    548: `242`,
    549: `242`,
    55: `2`,
    550: `242`,
    551: `242`,
    552: `242`,
    553: `242`,
    554: `242`,
    555: `243`,
    556: `243`,
    557: `244`,
    558: `245`,
    559: `246`,
    56: `2`,
    560: `246`,
    561: `247`,
    562: `247`,
    563: `248`,
    564: `248`,
    565: `249`,
    566: `249`,
    567: `249`,
    568: `250`,
    569: `251`,
    57: `2`,
    570: `253`,
    571: `253`,
    572: `255`,
    573: `255`,
    574: `256`,
    575: `256`,
    576: `256`,
    577: `258`,
    578: `260`,
    579: `260`,
    58: `2`,
    580: `261`,
    581: `261`,
    582: `262`,
    583: `262`,
    584: `263`,
    585: `263`,
    586: `263`,
    587: `264`,
    588: `265`,
    589: `265`,
    59: `2`,
    590: `266`,
    591: `266`,
    592: `267`,
    593: `267`,
    594: `268`,
    595: `268`,
    596: `268`,
    597: `271`,
    598: `271`,
    599: `272`,
    6: `2`,
    60: `2`,
    600: `272`,
    601: `273`,
    602: `274`,
    603: `277`,
    604: `278`,
    605: `279`,
    606: `279`,
    607: `280`,
    608: `280`,
    609: `281`,
    61: `2`,
    610: `281`,
    611: `282`,
    612: `282`,
    613: `283`,
    614: `283`,
    615: `284`,
    616: `284`,
    617: `285`,
    618: `285`,
    619: `286`,
    62: `2`,
    620: `288`,
    621: `288`,
    622: `290`,
    623: `290`,
    624: `291`,
    625: `292`,
    626: `292`,
    627: `293`,
    628: `293`,
    629: `293`,
    63: `2`,
    630: `295`,
    631: `296`,
    632: `296`,
    633: `297`,
    634: `297`,
    635: `298`,
    636: `298`,
    637: `298`,
    638: `300`,
    639: `300`,
    64: `2`,
    640: `301`,
    641: `301`,
    642: `301`,
    643: `302`,
    644: `302`,
    645: `302`,
    646: `305`,
    647: `305`,
    648: `306`,
    649: `306`,
    65: `2`,
    650: `307`,
    651: `308`,
    652: `315`,
    653: `315`,
    654: `316`,
    655: `316`,
    656: `316`,
    657: `319`,
    658: `320`,
    659: `320`,
    66: `2`,
    660: `321`,
    661: `321`,
    662: `321`,
    663: `321`,
    664: `321`,
    665: `321`,
    666: `321`,
    667: `321`,
    668: `321`,
    669: `321`,
    67: `2`,
    670: `322`,
    671: `322`,
    672: `323`,
    673: `324`,
    674: `325`,
    675: `325`,
    676: `326`,
    677: `326`,
    678: `327`,
    679: `328`,
    68: `2`,
    680: `329`,
    681: `330`,
    682: `330`,
    683: `331`,
    684: `331`,
    685: `332`,
    686: `332`,
    687: `333`,
    688: `334`,
    689: `334`,
    69: `2`,
    690: `335`,
    691: `335`,
    692: `336`,
    693: `336`,
    694: `337`,
    695: `337`,
    696: `338`,
    697: `338`,
    698: `339`,
    699: `339`,
    7: `2`,
    70: `2`,
    700: `340`,
    701: `340`,
    702: `341`,
    703: `341`,
    704: `342`,
    705: `342`,
    706: `343`,
    707: `343`,
    708: `347`,
    709: `347`,
    71: `2`,
    710: `348`,
    711: `348`,
    712: `349`,
    713: `350`,
    714: `350`,
    715: `351`,
    716: `352`,
    717: `353`,
    718: `353`,
    719: `354`,
    72: `2`,
    720: `355`,
    721: `356`,
    722: `356`,
    723: `357`,
    724: `358`,
    725: `359`,
    726: `359`,
    727: `360`,
    728: `361`,
    729: `362`,
    73: `2`,
    730: `362`,
    731: `363`,
    732: `364`,
    733: `364`,
    734: `365`,
    735: `366`,
    736: `366`,
    737: `367`,
    738: `368`,
    739: `368`,
    74: `2`,
    740: `369`,
    741: `370`,
    742: `370`,
    743: `371`,
    744: `372`,
    745: `372`,
    746: `373`,
    747: `374`,
    748: `375`,
    749: `375`,
    75: `2`,
    750: `376`,
    751: `377`,
    752: `377`,
    753: `378`,
    754: `379`,
    755: `380`,
    756: `380`,
    757: `381`,
    758: `382`,
    759: `382`,
    76: `2`,
    760: `383`,
    761: `384`,
    762: `385`,
    763: `385`,
    764: `386`,
    765: `386`,
    766: `388`,
    767: `388`,
    768: `389`,
    769: `389`,
    77: `2`,
    770: `390`,
    771: `391`,
    772: `391`,
    773: `392`,
    774: `392`,
    775: `392`,
    776: `393`,
    777: `394`,
    778: `394`,
    779: `395`,
    78: `2`,
    780: `395`,
    781: `396`,
    782: `396`,
    783: `396`,
    784: `397`,
    785: `398`,
    786: `399`,
    787: `399`,
    788: `400`,
    789: `400`,
    79: `2`,
    790: `400`,
    791: `401`,
    792: `402`,
    793: `402`,
    794: `403`,
    795: `404`,
    796: `404`,
    797: `404`,
    798: `405`,
    799: `405`,
    8: `2`,
    80: `2`,
    800: `406`,
    801: `407`,
    802: `408`,
    803: `409`,
    804: `409`,
    805: `410`,
    806: `411`,
    807: `411`,
    808: `412`,
    809: `413`,
    81: `2`,
    810: `414`,
    811: `414`,
    812: `415`,
    813: `416`,
    814: `417`,
    815: `418`,
    816: `418`,
    817: `419`,
    818: `420`,
    819: `421`,
    82: `2`,
    820: `423`,
    821: `423`,
    822: `423`,
    823: `424`,
    824: `424`,
    825: `424`,
    826: `427`,
    827: `427`,
    828: `428`,
    829: `428`,
    83: `2`,
    830: `428`,
    831: `429`,
    832: `429`,
    833: `430`,
    834: `430`,
    835: `431`,
    836: `432`,
    837: `433`,
    838: `435`,
    839: `436`,
    84: `4`,
    840: `436`,
    841: `437`,
    842: `438`,
    843: `439`,
    844: `439`,
    845: `440`,
    846: `441`,
    847: `441`,
    848: `441`,
    849: `442`,
    85: `4`,
    850: `442`,
    851: `442`,
    852: `443`,
    853: `444`,
    854: `444`,
    855: `445`,
    856: `446`,
    857: `447`,
    858: `447`,
    859: `448`,
    86: `5`,
    860: `448`,
    861: `449`,
    862: `449`,
    863: `450`,
    864: `451`,
    865: `451`,
    866: `452`,
    867: `453`,
    868: `454`,
    869: `454`,
    87: `5`,
    870: `455`,
    871: `456`,
    872: `457`,
    873: `457`,
    874: `458`,
    875: `458`,
    876: `458`,
    877: `458`,
    878: `458`,
    879: `458`,
    88: `5`,
    880: `458`,
    881: `458`,
    882: `458`,
    883: `458`,
    884: `459`,
    885: `459`,
    886: `460`,
    887: `461`,
    888: `462`,
    889: `462`,
    89: `6`,
    890: `463`,
    891: `463`,
    892: `464`,
    893: `464`,
    894: `466`,
    895: `466`,
    896: `467`,
    897: `467`,
    898: `468`,
    899: `468`,
    9: `2`,
    90: `7`,
    900: `468`,
    901: `469`,
    902: `469`,
    903: `470`,
    904: `471`,
    905: `471`,
    906: `472`,
    907: `473`,
    908: `473`,
    909: `474`,
    91: `8`,
    910: `474`,
    911: `474`,
    912: `475`,
    913: `476`,
    914: `477`,
    915: `478`,
    916: `478`,
    917: `478`,
    918: `479`,
    919: `479`,
    92: `9`,
    920: `479`,
    921: `479`,
    922: `479`,
    923: `479`,
    924: `480`,
    925: `480`,
    926: `481`,
    927: `482`,
    928: `482`,
    929: `483`,
    93: `10`,
    930: `484`,
    931: `485`,
    932: `485`,
    933: `486`,
    934: `487`,
    935: `487`,
    936: `488`,
    937: `489`,
    938: `491`,
    939: `491`,
    94: `11`,
    940: `492`,
    941: `492`,
    942: `493`,
    943: `493`,
    944: `494`,
    945: `494`,
    946: `495`,
    947: `496`,
    948: `497`,
    949: `498`,
    95: `11`,
    950: `498`,
    951: `499`,
    952: `500`,
    953: `501`,
    954: `501`,
    955: `502`,
    956: `502`,
    957: `503`,
    958: `503`,
    959: `504`,
    96: `12`,
    960: `504`,
    961: `505`,
    962: `505`,
    963: `506`,
    964: `506`,
    965: `506`,
    966: `509`,
    967: `509`,
    968: `509`,
    969: `511`,
    97: `13`,
    970: `511`,
    971: `512`,
    972: `512`,
    973: `512`,
    974: `513`,
    975: `513`,
    976: `514`,
    977: `514`,
    978: `516`,
    979: `516`,
    98: `14`,
    980: `517`,
    981: `518`,
    982: `519`,
    983: `521`,
    984: `522`,
    985: `522`,
    986: `523`,
    987: `524`,
    988: `525`,
    989: `525`,
    99: `15`,
    990: `526`,
    991: `527`,
    992: `527`,
    993: `527`,
    994: `528`,
    995: `528`,
    996: `528`,
    997: `529`,
    998: `530`,
    999: `530`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Staker_harvest4: 1,
    _api_Staker_stake4: 1,
    _api_Staker_withdraw4: 1,
    _api_Staker_withdrawAndHarvest4: 1
    },
  extraPages: 2,
  stateKeys: 4,
  stateSize: 442,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T21","name":"v28651","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"v1","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T21","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T17","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T15","name":"which","type":"uint8"},{"internalType":"bool","name":"_Setup_abortSetup0_150","type":"bool"},{"internalType":"bool","name":"_Setup_fund0_150","type":"bool"}],"internalType":"struct T15","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T18","name":"which","type":"uint8"},{"internalType":"bool","name":"_Staker_emergencyWithdraw0_2231","type":"bool"},{"internalType":"bool","name":"_Staker_harvest0_2231","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_stake0_2231","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdraw0_2231","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdrawAndHarvest0_2231","type":"tuple"}],"internalType":"struct T18","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10764","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v11568","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"v0","type":"tuple"}],"name":"_reach_oe_v12462","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v13291","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v14130","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"elem0","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"v0","type":"tuple"}],"name":"_reach_oe_v15067","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6165","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"opts","type":"tuple"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"remainingRewards","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"lastRewardsPerShare_","type":"tuple"},{"internalType":"uint256","name":"REWARDS_PREC","type":"uint256"}],"internalType":"struct T5","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Opts","outputs":[{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Setup_abortSetup","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Setup_fund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Staker_emergencyWithdraw","outputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Staker_harvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"internalType":"struct T7","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v28636","type":"uint256"}],"name":"Staker_stake","outputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v28642","type":"uint256"}],"name":"Staker_withdraw","outputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v28648","type":"uint256"}],"name":"Staker_withdrawAndHarvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"elem0","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"_rewards","type":"tuple"},{"internalType":"uint256","name":"_stake","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"v28654","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T15","name":"which","type":"uint8"},{"internalType":"bool","name":"_Setup_abortSetup0_150","type":"bool"},{"internalType":"bool","name":"_Setup_fund0_150","type":"bool"}],"internalType":"struct T15","name":"elem1","type":"tuple"}],"internalType":"struct T16","name":"v28657","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T18","name":"which","type":"uint8"},{"internalType":"bool","name":"_Staker_emergencyWithdraw0_2231","type":"bool"},{"internalType":"bool","name":"_Staker_harvest0_2231","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_stake0_2231","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdraw0_2231","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdrawAndHarvest0_2231","type":"tuple"}],"internalType":"struct T18","name":"elem1","type":"tuple"}],"internalType":"struct T19","name":"v28660","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v28604","type":"address"}],"name":"rewardsAvailable","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v28609","type":"address"},{"internalType":"uint256","name":"v28610","type":"uint256"}],"name":"rewardsAvailableAt","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v28614","type":"address"}],"name":"staked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620059b238819003601f8101601f191683016001600160401b038111848210176200085257839282916040528339810103906101408212620009b15760405191608083016001600160401b0381118482101762000852576040528151835260e0601f19820112620009b1576040519060c08201906001600160401b03821183831017620008525760409182526200009b60208501620009ee565b8352620000aa828501620009ee565b6020840152605f190112620009b1576200012d9161012091604051620000d081620009b6565b6060830151815260808301516020820152604082015260a0820151606082015260c082015160808201526200010860e08301620009ee565b60a08201526020850152620001216101008201620009ee565b604085015201620009ee565b6060820152436003556040516101a081016001600160401b038111828210176200085257604090815260008252516001600160401b0360a082019081119082111762000852576000918160a061018093016040526200018b62000a03565b8152836020820152604051620001a181620009b6565b8481528460208201526040820152604051620001bd81620009b6565b84815284602082015260608201528360808201526020820152620001e062000a03565b6040820152826060820152826080820152604051620001ff81620009b6565b83815283602082015260a08201526200021762000a5c565b60c08201526040516200022a81620009b6565b83815283602082015260e08201526040516200024681620009b6565b8381528360208201526101008201526040516200026381620009b6565b6040516200027181620009b6565b84815284602082015281526200028662000a5c565b60208201526101208201526040516200029f81620009b6565b838152836020820152610140820152604051620002bc81620009b6565b8381528360208201526101608201520152604051620002db81620009d2565b620002e562000aa6565b8152620002f162000ad6565b60208201526200030062000ad6565b604082015260ff6004541662000998577f181a83270dd502d23287bae953b47e08d1066cf056b774902d788028cc67134f61016060405133815284516020820152620003556020860151604083019062000b10565b60408501516001600160a01b03908116610120830152606086015116610140820152a1815180159081156200098b575b501562000972576000815152600060208251015260006040825101528051602082015152805160208083015101526020810151805160406020820151910151151560405191620003d583620009d2565b6000835260208301526040820152620003ed62000ad6565b9160005b600281106200093857505081526040828101919091526060830151908301516001600160a01b03908116911603620009305760005b15620009175734620008fe576020820151608060608201519101511115620008e557604051906001600160401b03610180830190811190831117620008525760409061018083018252600083526200047d62000a03565b6020840152600082840152600060608401526200049962000ad6565b6080840152600060a0840152600060c08401528151620004b981620009b6565b600081526000602082015260e084015260006101008401526000610120840152600061014084015260006101608401523383526020840151602084015260018060a01b0382850151168284015260018060a01b0360608501511660608401520151916020830151604060208201519101511515604051916200053b83620009d2565b60008352602083015260408201526200055362000ad6565b9060005b60028110620008ab57506020809495508201526080840152606082820151015160a0840152608082820151015160c0840152604082820151015160e084015260018060a01b0360a0838301510151166101008401526040828201510151516101208401528160408183015101510151610140840152015160606080820151910151810390811162000895576101608201526001600055436001556040519060018060a01b038151166020830152620006186020820151604084019062000b10565b60408101516001600160a01b039081166101208401526060820151166101408301526080810151600061016084015b60028210620008685760a084015161022086015260c084015161024086015260e08401518051610260870152602001516102808601526101008401516001600160a01b03166102a08601526101208401516102c08601526101408401516102e08601526101608401516103008087019190915285528461032081016001600160401b03811182821017620008525760405280516001600160401b0381116200085257600254600181811c9116801562000847575b60208210146200083157601f8111620007c7575b50602091601f82116001146200075d5791819260009262000751575b50508160011b916000199060031b1c1916176002555b604051614e2b908162000b878239f35b0151905082806200072b565b601f19821692600260005260206000209160005b858110620007ae5750836001951062000794575b505050811b0160025562000741565b015160001960f88460031b161c1916905582808062000785565b9192602060018192868501518155019401920162000771565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000826575b601f0160051c01905b8181106200081957506200070f565b600081556001016200080a565b909150819062000801565b634e487b7160e01b600052602260045260246000fd5b90607f1690620006fb565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000647565b634e487b7160e01b600052601160045260246000fd5b620008b7818762000b5e565b51620008c4828562000b5e565b52620008d1818462000b5e565b506000198114620008955760010162000557565b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b600162000426565b62000944818362000b5e565b5162000951828662000b5e565b526200095e818562000b5e565b5060001981146200089557600101620003f1565b60405163100960cb60e01b8152600f6004820152602490fd5b9050600154143862000385565b60405163100960cb60e01b8152600e6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200085257604052565b606081019081106001600160401b038211176200085257604052565b51906001600160a01b0382168203620009b157565b6040519060c082016001600160401b0381118382101762000852576040528160a060009182815282602082015260405162000a3e81620009b6565b83815283602082015260408201528260608201528260808201520152565b6040519062000a6b82620009b6565b8160405162000a7a81620009b6565b6000815260006020820152815260206040519162000a9883620009b6565b600083526000828401520152565b60405190606082016001600160401b03811183821017620008525760405260006040838281528260208201520152565b60409081519162000ae783620009b6565b8260005b82811062000af857505050565b60209062000b0562000aa6565b818401520162000aeb565b60c09060a0600180821b039182815116855282602082015116602086015260206040820151805160408801520151606086015260608101516080860152608081015182860152015116910152565b90600281101562000b705760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461019457806336e56ea51461018b5780634012e02e146101825780635657588e14610179578063573b8510146101705780636f0fe5c914610167578063832307571461015e5780638608c1c5146101555780638712236d1461014c5780638f3e1f411461014357806398807d841461013a578063ab53f2c614610131578063b0c1f58a14610128578063c527ddba1461011f578063d288171c14610116578063e07352ca1461010d578063e280954914610104578063e82b89a4146100fb5763f396fd8b0361000e576100f66110a7565b61000e565b506100f661105e565b506100f6611006565b506100f6610f40565b506100f6610e7f565b506100f6610e40565b506100f6610df3565b506100f6610d7e565b506100f6610cae565b506100f6610c55565b506100f6610bf7565b506100f6610a58565b506100f6610a39565b506100f66106f4565b506100f6610471565b506100f6610404565b506100f661031f565b506100f661020f565b50346101b35760003660031901126101b3576020600354604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036101b357565b50634e487b7160e01b600052602160045260246000fd5b600211156101f657565b6101fe6101d5565b565b60208091805184520151910152565b50346101b35760203660031901126101b35760a0610240600435610232816101c4565b61023a6113dd565b5061141f565b602060408051928051610252816101ec565b845282810151151583850152015161026e604084018251610200565b01516080820152f35b6001600160a01b03169052565b60c09060a0600180821b03918281511685528260208201511660208601526102b460408201516040870190610200565b60608101516080860152608081015182860152015116910152565b91909161018060806101a08301946102e8848251610284565b602081015160e08501526103056040820151610100860190610200565b6103186060820151610140860190610200565b0151910152565b50346101b35760003660031901126101b357610339611507565b506103bd60206103476115a9565b61034f611647565b61035d600660005414611896565b61014061037961036b61122e565b85808251830101910161178f565b848101518351526101a0810151858451015261018081015160408451015201516060825101526402540be400608082510152519182910152604051918291826102cf565b0390f35b90604060206101fe936103d5848251610200565b0151910190610200565b6101fe909291926040602060c08301956103fa848251610200565b01519101906103c1565b5060203660031901126101b357610419611587565b506103bd6101206104286115a9565b61046381610434614af6565b600435815152602081019060048251525160a0825101526104536129e1565b9060008252516020820152612f52565b0151604051918291826103df565b506020806003193601126101b3576104876115a9565b5061049136614b20565b9061049a612971565b906104a96001600054146118b6565b6104c26104b461122e565b828082518301019101611dfd565b6104dd6104d86104d460045460ff1690565b1590565b6118d6565b60408051338152855160208201529094610527917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908790a15180159081156106d8575b506118f6565b6105313415611916565b838101928351610540906101b8565b6101408084019182513391610554926149f6565b61055d90611936565b835133906001600160a01b0390610573906101b8565b161461057e90611956565b61016093848101518452610590614ba0565b96815161059c906101b8565b6105a69089612038565b8682015187890152516105b8906101b8565b6105c490888a01612038565b60608101516105d2906101b8565b6105df9060608901612038565b60a0810151608088015260c081015160a088015260e081015160c0880152610100908181015161060e906101b8565b61061b9060e08a01612038565b61012090818101928351908a01526080015180518051865101908b8a8201519101511515906106486112d7565b9283528a83015215158b82015261065e91614a39565b908801525161066c90614910565b83516106779161498b565b908601525161068590614910565b90516106909161498b565b9083015261069e6002600055565b4360015582519182918201906106b391614c2d565b03601f19810182526106c5908261120b565b6106ce90612767565b5160008152602090f35b90506001541438610521565b6040810192916101fe9190610200565b50346101b35760403660031901126101b3576103bd600435610715816101c4565b61071d6113a4565b506107266115a9565b61072e6113a4565b6001600160a01b039092168252602435602080840191825261074e614cfa565b91600061075e6006825414611976565b8261077861076a61122e565b82808251830101910161178f565b92856101a0918286018051156000146109195750505061014084015186525b61022082610120998a8701516101008a019081515286838251015260016107d66107d16107cc6107c786516101b8565b6101b8565b61141f565b611f5c565b6107df816101ec565b0361091057506107f76107cc6107c7604093516101b8565b0151995b880199808b52015161082661081b6101408a01928084528a515190614940565b6402540be400900490565b996101609a808c8b015281515151818110156000146108fc575050856101808a01525b8461086a61081b61018094858d0151978d0197885251838d51015190614940565b6101c08b0181905291515101518181106108e8575050846101e08901525b6101e08801516102008901908152925195018051519095908082116108e05750965b01805196909652519251015190508082116108d85750905b82510152519182910152604051918291826106e4565b9050906108c2565b9050966108aa565b6108f1916148db565b6101e0890152610888565b610905916148db565b6101808a0152610849565b905051996107fb565b60a087015191516109ef9290808211610a3257505b8584019080825261098360808a01516101608b015180821015600014610a2a5750935b60408701858152929094101560808701908152935b845115610a13578960608801525b519360a0870194855251151590565b156109fc5750508560c08401525b6109c0856109c6896109c06109b8610140830198606060e08b515195015191015190614940565b86519061498b565b906148b9565b9460e08c0195865152510151916109e76101008a015160c08d015190614940565b90519061498b565b8382510152518652610797565b610a0991519051906148db565b60c0840152610991565b610a2084518451906148db565b6060880152610974565b905093610951565b905061092e565b50346101b35760003660031901126101b3576020600154604051908152f35b50346101b3576020806003193601126101b3576103bd9060043590610a7c826101c4565b610a846113a4565b50610a8d6115a9565b90610a96614cfa565b906000610aa66006825414611996565b610abf610ab161122e565b83808251830101910161178f565b90826101a085818501805115600014610b9657505061014084015186525b61022082610120998a870151906101008a019182515286838351015260018060a01b0316906001610b106107d18461141f565b610b19816101ec565b03610b8d5750610b2a60409161141f565b0151995b880199808b52015161014099610b5061081b8c8b01938085528b515190614940565b6101608a01819052815151518181106108fc575050856101808a01528461086a61081b61018094858d0151978d0197885251838d51015190614940565b90505199610b2e565b60a086015161016087018051610be3939290808211610bf057505b84870181815260808a01519251909261098391808210610a2a5750604087018181529211156080870190815293610966565b8382510152518652610add565b9050610bb1565b5060203660031901126101b357610c0c6113a4565b506040610100610c1a6115a9565b610c4581610c26614af6565b60043581515260208101906003825152516080825101526104536129e1565b0151610c5382518092610200565bf35b5060003660031901126101b35760206060610c6e6115a9565b610ca281610c7a611ee5565b8581019060008251525115158682510152610c93611ee5565b90600082525186820152612114565b01511515604051908152f35b50346101b3576020806003193601126101b3576101806103bd9160043590610cd5826101c4565b610cdd6115a9565b91610ce6614d9c565b90610cf56006600054146119b6565b610d0e610d0061122e565b84808251830101910161178f565b506000825152600083835101528282519201918251526000838351015260018060a01b0316906001610d426107d18461141f565b610d4b816101ec565b03610d765750610d5c60409161141f565b01515b015191018190526040519081529081906020820190565b905051610d5f565b50346101b357600080600319360112610df0578054610d9b61122e565b906040519283918252602090604082840152835191826040850152815b838110610dd957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610db8565b80fd5b5060203660031901126101b357610e086113a4565b50604060e0610e156115a9565b610c4581610e21614af6565b60043581515260208101906002825152516060825101526104536129e1565b5060003660031901126101b35760206080610e596115a9565b610ca281610e65611ee5565b858101906001825152511515604082510152610c93611ee5565b5060e03660031901126101b357610e946115a9565b60405190610ea182611177565b600435825260c03660231901126101b35760405191610ebf8361119f565b6024359260058410156101b357610f24938152604435610ede81611708565b6020820152610eeb614ced565b6040820152610ef936614b40565b6060820152610f0736614b60565b6080820152610f1536614b80565b60a08201526020820152612f52565b60405160008152602090f35b60e0810192916101fe9190610284565b50346101b35760003660031901126101b357610f5a6114cf565b506103bd6040610f686115a9565b6000546002811015610fa2576001610f809114611a16565b6020610f8d6104b461122e565b0151828201525b015160405191829182610f30565b6006811015610fdd576002610fb791146119f6565b6020610fd2610fc461122e565b828082518301019101611d34565b015182820152610f94565b6006610fe991146119d6565b6020610fd261076a61122e565b6080810192916101fe91906103c1565b5060003660031901126101b35761101b611565565b50608060c06110286115a9565b61104f816110346129e1565b602081019060018251525115156040825101526104536129e1565b0151610c5360405180926103c1565b5060003660031901126101b3576110736113a4565b50604060a06110806115a9565b610c458161108c6129e1565b602081019060008251525115156020825101526104536129e1565b5060803660031901126101b3576110bc6115a9565b604051906110c982611177565b600435825260603660231901126101b357604051916110e7836111ba565b6024359260028410156101b357610f2493815260443561110681611708565b602082015260643561111781611708565b60408201526020820152612114565b90600182811c92168015611156575b602083101461114057565b634e487b7160e01b600052602260045260246000fd5b91607f1691611135565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761119257604052565b61119a611160565b604052565b60c081019081106001600160401b0382111761119257604052565b606081019081106001600160401b0382111761119257604052565b602081019081106001600160401b0382111761119257604052565b60a081019081106001600160401b0382111761119257604052565b601f909101601f19168101906001600160401b0382119082101761119257604052565b604051906000826002549161124283611126565b8083526001938085169081156112b65750600114611268575b506101fe9250038361120b565b60026000908152600080516020614dbf83398151915294602093509091905b81831061129e5750506101fe93508201013861125b565b85548884018501529485019487945091830191611287565b90506101fe94506020925060ff191682840152151560051b8201013861125b565b604051906101fe826111ba565b604051906101a082016001600160401b0381118382101761119257604052565b6040519061020082016001600160401b0381118382101761119257604052565b6040519061018082016001600160401b0381118382101761119257604052565b6040519061022082016001600160401b0381118382101761119257604052565b60405190610d0082016001600160401b0381118382101761119257604052565b6040519061024082016001600160401b0381118382101761119257604052565b604051906113b182611177565b60006020838281520152565b604051906113ca82611177565b60006020836113d76113a4565b81520152565b604051906113ea826111ba565b81600081526000602082015260406114006113bd565b910152565b6001600160a01b0316600090815260056020526040902090565b906114286113dd565b9160018060a01b031660009080825260209160058352604091600160ff8484205416611453816101ec565b036114c357815260058352819020815193945091611470846111ba565b60ff8354818116611480816101ec565b865260081c16151581850152600382519361149a85611177565b83516114a581611177565b60018201548152600282015484820152855201549083015282015290565b50809291508452830152565b604051906114dc8261119f565b600060a0838281528260208201526114f26113a4565b60408201528260608201528260808201520152565b6040519060a082016001600160401b03811183821017611558575b60405260006080836115326114cf565b81528260208201526115426113a4565b604082015261154f6113a4565b60608201520152565b611560611160565b611522565b6040519061157282611177565b8161157b6113a4565b815260206114006113a4565b6040519061159482611177565b8161159d6113a4565b81526020611400611565565b6115b16112e4565b90600082526115be611507565b60208301526115cb6114cf565b604083015260006060830152600060808301526115e66113a4565b60a08301526115f3611565565b60c08301526116006113a4565b60e083015261160d6113a4565b61010083015261161b611587565b6101208301526116296113a4565b6101408301526116376113a4565b6101608301526000610180830152565b60405190611654826111d5565b8161165d611507565b9052565b51906101fe826101c4565b91908260409103126101b35760405161168481611177565b6020808294805184520151910152565b91909160e0818403126101b35760a060c0604051926116b28461119f565b6116e0849682516116c2816101c4565b865260208301516116d2816101c4565b60208701526040830161166c565b604085015260808101516060850152828101516080850152015191611704836101c4565b0152565b801515036101b357565b9080601f830112156101b35760409182519261172d84611177565b839260c08301928184116101b357935b83851061174c57505050505090565b6060858303126101b3578251606091611764826111ba565b8651825260209182880151838201528588015161178081611708565b8682015281520194019361173d565b906103c0828203126101b3576103a06117a6611304565b926117b081611661565b84526117bf8360208301611694565b60208501526101006117d2818301611661565b6040860152611889610120946117e9868501611661565b60608801526101408085015160808901526101608086015160a08a015261018090611815828801611661565b60c08b01526101a0928388015160e08c01526101c09687890151908c01526101e099611843868c8b0161166c565b908c0152611855856102208a0161166c565b908b0152610260870151908a015261187183610280880161166c565b908901526102c0850151908801526102e08401611712565b9085015201519082015290565b1561189d57565b60405163100960cb60e01b815260076004820152602490fd5b156118bd57565b60405163100960cb60e01b815260136004820152602490fd5b156118dd57565b60405163100960cb60e01b815260146004820152602490fd5b156118fd57565b60405163100960cb60e01b815260156004820152602490fd5b1561191d57565b60405163100960cb60e01b815260166004820152602490fd5b1561193d57565b60405163100960cb60e01b815260176004820152602490fd5b1561195d57565b60405163100960cb60e01b815260186004820152602490fd5b1561197d57565b60405163100960cb60e01b8152600c6004820152602490fd5b1561199d57565b60405163100960cb60e01b8152600b6004820152602490fd5b156119bd57565b60405163100960cb60e01b8152600d6004820152602490fd5b156119dd57565b60405163100960cb60e01b8152600a6004820152602490fd5b156119fd57565b60405163100960cb60e01b815260096004820152602490fd5b15611a1d57565b60405163100960cb60e01b815260086004820152602490fd5b15611a3d57565b60405163100960cb60e01b815260196004820152602490fd5b15611a5d57565b60405163100960cb60e01b8152601a6004820152602490fd5b15611a7d57565b60405163100960cb60e01b8152601b6004820152602490fd5b15611a9d57565b60405163100960cb60e01b8152601e6004820152602490fd5b15611abd57565b60405163100960cb60e01b8152601f6004820152602490fd5b15611add57565b60405163100960cb60e01b8152601c6004820152602490fd5b15611afd57565b60405163100960cb60e01b8152601d6004820152602490fd5b15611b1d57565b60405163100960cb60e01b815260206004820152602490fd5b15611b3d57565b60405163100960cb60e01b815260216004820152602490fd5b15611b5d57565b60405163100960cb60e01b815260226004820152602490fd5b15611b7d57565b60405163100960cb60e01b8152602e6004820152602490fd5b15611b9d57565b60405163100960cb60e01b8152602f6004820152602490fd5b15611bbd57565b60405163100960cb60e01b815260306004820152602490fd5b15611bdd57565b60405163100960cb60e01b8152602b6004820152602490fd5b15611bfd57565b60405163100960cb60e01b8152602c6004820152602490fd5b15611c1d57565b60405163100960cb60e01b8152602d6004820152602490fd5b15611c3d57565b60405163100960cb60e01b815260276004820152602490fd5b15611c5d57565b60405163100960cb60e01b815260286004820152602490fd5b15611c7d57565b60405163100960cb60e01b815260296004820152602490fd5b15611c9d57565b60405163100960cb60e01b8152602a6004820152602490fd5b15611cbd57565b60405163100960cb60e01b815260256004820152602490fd5b15611cdd57565b60405163100960cb60e01b815260266004820152602490fd5b15611cfd57565b60405163100960cb60e01b815260236004820152602490fd5b15611d1d57565b602460405163100960cb60e01b8152816004820152fd5b90610300828203126101b3576102e0611d4b611324565b92611d5581611661565b8452611d648360208301611694565b602085015261010092611d78848301611661565b6040860152610120611d8b818401611661565b6060870152611de661014092838501516080890152610160968786015160a08a0152611dbb82610180880161166c565b60c08a0152611dcd6101c08701611661565b60e08a01526101e0860151908901526102008501611712565b908601526102c08201519085015201519082015290565b610300818303126101b3576102e090611e14611324565b92611e1e82611661565b8452611e2d8160208401611694565b6020850152610100611e40818401611661565b604086015261012090611e54828501611661565b6060870152611e9161014093611e6c81868801611712565b608089015261020086015160a089015261022086015160c0890152610240860161166c565b60e0870152611ea36102808501611661565b908601526102a0830151908501526102c082015190840152015161016082015290565b60405190611ed3826111ba565b60006040838281528260208201520152565b60405190611ef282611177565b81600081526020611400611ec6565b60405190611f0e826111d5565b8161165d6113a4565b9092916040602060809260a085019660018060a01b0316855280518286015201518051611f43816101ec565b8285015260208101511515606085015201511515910152565b51611f66816101ec565b90565b604090815191611f7883611177565b8260005b828110611f8857505050565b602090611f93611ec6565b8184015201611f7c565b611fa5611344565b906000808352611fb36114cf565b60208401528060408401528060608401528060808401528060a08401528060c08401528060e084015280610100840152611feb6113a4565b610120840152611ff96113a4565b6101408401528061016084015261200e6113a4565b610180840152806101a0840152806101c084015261202a611f69565b6101e0840152610200830152565b6001600160a01b039091169052565b9060028110156120585760051b0190565b634e487b7160e01b600052603260045260246000fd5b818110612079575050565b6000815560010161206e565b50634e487b7160e01b600052601160045260246000fd5b6120a7600254611126565b806120af5750565b601f81116001146120c257506000600255565b600260005261210790601f0160051c600080516020614dbf833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61206e565b6000602081208160025555565b9061211d611f01565b60009161212d6002845414611a36565b61213561122e565b612149602091828082518301019101611d34565b9261216161215c6104d460045460ff1690565b611a56565b816040967f17ec5e38ba31c24e430a6a804a7954ae08580921024aa52b2d69ed2100c2e7d0885180612194843383611f17565b0390a16121ac815180159081156123fa575b50611a76565b016121b78151611f5c565b6121c0816101ec565b612280575050508293612252936060612230936121e06107c787516101b8565b3303612266576121f06001611ad6565b6121fa3415611af6565b8351600081527f910f5af9b3031d592563abcf72f14671a54ee9b747ab7520086b1c32765c4ff790602090a101528201516101b8565b61012061223d83516101b8565b9201515151916001600160a01b031690612406565b805561225e6000600155565b6101fe61209c565b6121f06122796107c760e08901516101b8565b3314611ad6565b61229260019196929495939651611f5c565b61229b816101ec565b146122a9575b505050505050565b6123ef9560e083016122c86122c16107c783516101b8565b3314611a96565b61235261010092846080858801996122e28b513414611ab6565b8351600081527f9a54683f678790415672561a3d0154e1ee68ee1cb47c5fc3af6b4e595e1d73b290602090a1015284875152848988510152612322611f9d565b9861233661233088516101b8565b8b612038565b80870151908a015261234a818701516101b8565b908901612038565b61236b61236260608601516101b8565b60608901612038565b61239661238d6080860192835160808b015260a087015160a08b0152516101b8565b60c08901612038565b6101408085015160e089015261016092838601519089015285519561012096878a01525190880152519086015260c08201516101808601526101a0850152436101c085015201516101e08301525161020082015261284a565b3880808080806122a1565b905060015414386121a6565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261248293600093849392849190608081016001600160401b03811182821017612489575b6040525193165af161247261246b612496565b80926124f8565b50602080825183010191016124e3565b156101b357565b612491611160565b612458565b3d156124de573d906001600160401b0382116124d1575b604051916124c5601f8201601f19166020018461120b565b82523d6000602084013e565b6124d9611160565b6124ad565b606090565b908160209103126101b35751611f6681611708565b156125005790565b80511561250f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156125305790565b80511561253f57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b612560611304565b90600080835261256e6114cf565b60208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401526125a66113a4565b6101208401526125b46113a4565b610140840152806101608401526125c96113a4565b610180840152806101a08401526125de611f69565b6101c08401526101e0830152565b6000915b600283106125fd57505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906125f0565b9190916103a0816103c0810194612644828251610277565b61265660208201516020840190610284565b610318604082015161266e6101009182860190610277565b6060830151906126846101209283870190610277565b61270b6080850151610140908188015260a086015161016090818901526126f460c0880151926126ba61018094858c0190610277565b6126e660e08a0151966101a097888d01528a0151976101c098898d01528a01516101e0809c0190610200565b8801516102208c0190610200565b8601516102608a0152850151610280890190610200565b8301516102c08701528201516102e08601906125ec565b90601f821161272f575050565b6101fe9160026000526020600020906020601f840160051c8301931061275d575b601f0160051c019061206e565b9091508190612750565b80519091906001600160401b03811161283d575b61278f8161278a600254611126565b612722565b602080601f83116001146127cb57508192936000926127c0575b50508160011b916000199060031b1c191617600255565b0151905038806127a9565b6002600052601f19831694909190600080516020614dbf833981519152926000905b87821061282557505083600195961061280c575b505050811b01600255565b015160001960f88460031b161c19169055388080612801565b806001859682949686015181550195019301906127ed565b612845611160565b61277b565b61295e61296c6101fe9261285c612558565b9061287061286a82516101b8565b83612038565b6020810151602083015261289361288a60408301516101b8565b60408401612038565b6128ac6128a360608301516101b8565b60608401612038565b6080810151608083015260a081015160a08301526128d96128d060c08301516101b8565b60c08401612038565b60e081015160e0830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a080820151908301526102006101e091828101516101c08501520151908201526129466006600055565b61294f43600155565b6040519283916020830161262c565b03601f19810183528261120b565b612767565b6040519061297e826111d5565b60008252565b604051906129918261119f565b8160a06000918281528260208201528260408201526040516129b2816111d5565b83815260608201526040516129c6816111d5565b8381526080820152604051926129db846111d5565b83520152565b604051906129ee82611177565b81600081526020611400612984565b600511156101f657565b612a0f611364565b90612a186113bd565b8252612a226113bd565b60208301526000806040840152612a376113a4565b6060840152612a446113bd565b6080840152612a516113a4565b60a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152612a866113a4565b610180840152612a946113bd565b6101a0840152612aa26113bd565b6101c0840152806101e08401528061020084015280610220840152806102408401528061026084015280610280840152806102a0840152806102c0840152806102e0840152612aef6113a4565b610300840152612afd6113a4565b610320840152612b0b6113bd565b610340840152612b196113a4565b610360840152612b27611565565b610380840152612b35612971565b6103a0840152612b436113a4565b6103c0840152806103e08401528061040084015280610420840152806104408401528061046084015280610480840152612b7b6113a4565b6104a0840152806104c0840152612b906113bd565b6104e0840152612b9e6113bd565b6105008401528061052084015280610540840152612bba6113a4565b610560840152612bc86113bd565b610580840152612bd66113a4565b6105a0840152612be4612971565b6105c0840152612bf26113bd565b6105e0840152612c006113bd565b610600840152612c0e6113a4565b610620840152806106408401528061066084015280610680840152806106a0840152806106c0840152806106e0840152612c466113a4565b61070084015280610720840152806107408401528061076084015280610780840152806107a0840152806107c0840152806107e0840152612c856113a4565b610800840152612c936113bd565b610820840152612ca16113a4565b610840840152612caf612971565b610860840152612cbd6113bd565b610880840152612ccb6113bd565b6108a0840152612cd96113a4565b6108c0840152806108e08401528061090084015280610920840152806109408401528061096084015280610980840152612d116113a4565b6109a0840152806109c0840152806109e084015280610a0084015280610a2084015280610a4084015280610a6084015280610a8084015280610aa084015280610ac0840152612d5e6113a4565b610ae0840152612d6c611f69565b610b00840152612d7a6113a4565b610b20840152612d886113bd565b610b40840152612d966113a4565b610b60840152612da4611565565b610b8084015280610ba084015280610bc084015280610be084015280610c0084015280610c2084015280610c40840152610c60830152612de26113a4565b610c80830152612df06113bd565b610ca0830152612dfe6113a4565b610cc0830152612e0c611587565b610ce0830152565b90929160a0602060e092610100850196600180851b03168552805182860152015180516005811015612e7b575b60408501526020810151151560608501526040810151151560808501526060810151518285015260808101515160c0850152015151910152565b612e836101d5565b612e41565b516005811015612e955790565b611f666101d5565b506040513d6000823e3d90fd5b805460ff19166001179055565b90602060029181815180518655015160018501550151910155565b6001600160a01b03918216815260c081019493909260a0929190612efa9060208601906103c1565b16910152565b9293612efa608093969560a086019760018060a01b03809516875260208701526040860190610200565b6001600160a01b03909116815260208101919091526080810192916101fe9160400190610200565b612f5a612a07565b90612f69600660005414611b16565b6020612f7661076a61122e565b91612f8e612f896104d460045460ff1690565b611b36565b7f2ca0da82a4ec26bb1c4144c2b5da2c4594a4450e25721ba32acee6edda58015960405180612fbe843383612e14565b0390a1612fd6815180159081156148ad575b50611b56565b01612fe18151612e88565b612fea816129fd565b61328f57506132716101fe936130003415611cf6565b606083019361302061301b61301587516101b8565b3361499b565b611d16565b61012090818501918251825152600060208351015260016130436107d13361141f565b61304c816101ec565b0361328757604061305c3361141f565b0151925b7fcd678def18eb21025b1186b60acc0f9a3d6f132e105815f3bc04e905f74b502f60208401958587526131496130a26101a0976020898d0151910151906148db565b95604081019687526060810192600084515287516020855101527ff52703ea2f2935f6806ee68787da0f522974cab84e741c4191955c71e76e0ca56130ee8551604051918291826106e4565b0390a160a084519101526131136131058d516101b8565b60208b510151903390612406565b6080895151910190815152600060208251015261313761313233611405565b612eaa565b51600161314333611405565b01612eb7565b602087510151905161316360405192839233913385612f00565b0390a16131ba6131b1613174611f9d565b996131886131828b516101b8565b8c612038565b60208a015160208c01526131ab6131a260408c01516101b8565b60408d01612038565b516101b8565b60608a01612038565b6080870151608089015260a087015160a08901526131e76131de60c08901516101b8565b60c08a01612038565b60e087015160e08901526101008088015190890152519087015261014080860151908701526101608086015190870152610180808601519087015251908501526101c0438186015283015161326c60208201519260208451915101519003926040602082015191015115159061325b6112d7565b948552602085015215156040840152565b614a96565b906101e09182840152015161020082015261284a565b815192613060565b600161329e8294939451612e88565b6132a7816129fd565b036138105750600080516020614ddf83398151915261356f6101fe946132cd3415611cb6565b6132e56132e061301560608801516101b8565b611cd6565b6101a08501516136f45761014085015160a08501525b6101208501516101a0850190815152600060208251015260016133206107d13361141f565b613329816101ec565b036136e5575061336161081b602060406133423361141f565b01515b806101c08901520151806101e088015260a08701515190614940565b61020085018190526101c085015151518181106136d157505060006102208501525b6102208401516102408501819052610180860151518082116136ca57505b6102608501526133c261081b6101e0860151602060a0880151015190614940565b61028085018190526101c085015151602001518181106136b657505060006102a08501525b6102a08401516102c08501819052610180860151602001518082116136af57505b6102e08501526102608401516103008501908151526102e085015160208251015260008080806102608901518181156136a6575b3390f115613699575b61346361345560408801516101b8565b6102e0870151903390612406565b6134cc61347d6101c08701515151610260880151906148b9565b6103208701908151526134a060206101c08901515101516102e0890151906148b9565b6020825101525161034087019081515260206101c0880151015160208251015261313761313233611405565b6134e261018087015151610260870151906148db565b61036086015152613502602061018088015101516102e0870151906148db565b6020610360870151015251906103808501918251526103608501516020835101527f146f82654b912489a6bbd87b8c3f1775c3214d9c82da313b1489539929061e85613555835160405191829182610ff6565b0390a160c082519101525160405191829133903384612ed2565b0390a16102606101e0613580611f9d565b9361359461358e82516101b8565b86612038565b602081015160208601526135b76135ae60408301516101b8565b60408701612038565b6135d06135c760608301516101b8565b60608701612038565b6080810151608086015260a081015160a08601526135fd6135f460c08301516101b8565b60c08701612038565b60e081015160e0860152610100808201519086015261012081015161012086015260a0840151610140860152436101608601526103608401516101808601526101a08101516101a0860152436101c08601526136836101c082015180519061367e82516102e08901519003926040602082015191015115159061325b6112d7565b614a39565b828601520151910151900361020082015261284a565b6136a1612e9d565b613445565b506108fc61343c565b9050613408565b6136bf916148db565b6102a08501526133e7565b90506133a1565b6136da916148db565b610220850152613383565b61081b60206133619251613345565b60a0850151438111613809575b6137c2856109c060c08201938085526109e760808b01519561016096878d0151808210156000146138015750905b60e08601828152939091108015610120870190815291906137e95760006101008701525b6101a08d01519361376d6101409384890196875251151590565b156137d35750506000878601525b8b019560206137a78d6109c061379f60e08c5151930151610100809b015190614940565b87519061498b565b976101808d0198895152510151948c0151908b015190614940565b6020825101525160a08501526132fb565b6137e091519051906148db565b8786015261377b565b6137f681518551906148db565b610100870152613753565b90509061372f565b5043613701565b600261381c8251612e88565b613825816129fd565b03613c8f57606090510151906103a08101918252610160908184019182519561385460a0870197885111611c36565b6138618551511515611c56565b61386b3415611c76565b606086019661388f61388a6138808a516101b8565b88515190336149f6565b611c96565b6138be6101a09585878a01918a835115600014613b805761014001516103c089015250505b51875151906148b9565b936104c08101948552610120918289019182516104e0820190815152600060208251015260016138f06107d13361141f565b6138f9816101ec565b03613b795750604061390a3361141f565b0151945b610500820195808752602001518a5151613927916148b9565b61052083019081528a5151966105408401888152815151516103c08601998a515161395191614940565b6402540be4009004613962916148b9565b91610560860192835152515160200151905189516020015161398391614940565b6402540be4009004613994916148b9565b815160200152516105808401908151528151815160200152336139b690611405565b6139bf90612eaa565b516139c933611405565b600101906139d691612eb7565b51916105a00191825152875182516020015281516040516139f88192826106e4565b037ffd4191b95db4766221ade678fe3e8e9a0a423cd081847cd426c3dd52d0560d5e91a181519060e0015288515190516040519182913391613a3a9284612f2a565b037fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec91a1613a66611f9d565b998951613a72906101b8565b613a7c908c612038565b60208a015160208c015260408a0151613a94906101b8565b613aa19060408d01612038565b51613aab906101b8565b613ab89060608c01612038565b608089015160808b01525160a08a015260c0880151613ad6906101b8565b613ae39060c08b01612038565b60e088015160e08a015261010080890151908a01525190880152516101408701524390860152610180808501519086015251908401526101c04381850152820151906020820151908151905151019060208101519060400151151590613b476112d7565b928352602083015215156040820152613b5f91614a96565b906101e0918284015201516102008201526101fe9061284a565b519461390e565b8551613c3d926109c091438111613c8757905b6103e0860182815260808501519151909190808210613c7f5750915b61040087018381529210801561044088019081529290613c675760006104208801525b87516104608801908152925115613c4f57505060006104808601525b6109e7610100602061014086016104a0613c25886109c0613c1d8d61042060e088515195015191015190614940565b89519061498b565b9901988951525101519401516104808d015190614940565b602082510152516103c08701526138b4565b613c5c91519051906148db565b610480860152613bee565b613c7482518251906148db565b610420880152613bd2565b905091613baf565b504390613b93565b6003613c9e8295939551612e88565b613ca7816129fd565b0361411157608090510151906105c08401918252610120938484019485516105e083019081515260006020825101526001613ce46107d13361141f565b613ced816101ec565b0361410a57506040613cfe3361141f565b0151905b613d1d61060084019280845260208751519101511015611bd6565b613d273415611bf6565b6060860196613d41613d3c6130158a516101b8565b611c16565b6101a094613d6c868901805115600014614001576101408a01516106208801525b51885151906148db565b946107208101958652613d87602086510151895151906148db565b6107408201908152613da7613d9c8c516101b8565b8a5151903390612406565b885151956020613dfb61081b61076086018a8152613dd061081b61062089019c8d515190614940565b61078088018190528551515190818110613fed57505060006107a08801525b51838b51015190614940565b6107c08501819052915151015190818110613fd957505060006107e08301525b6107a08201516108008301908151526107e083015181516020015251610820830190815152815181516020015233613e5290611405565b613e5b90612eaa565b51613e6533611405565b60010190613e7291612eb7565b5190610840019081515285518151602001528051604051613e948192826106e4565b037fe7e851cd6d8873e6259eee54d0f0ff967fd9b74acdb2165e02dcf63b55022e3091a1805161010080930152875151905160405191829133903392613eda9385612f00565b03600080516020614dff83398151915291a1613ef4611f9d565b988851613f00906101b8565b613f0a908b612038565b602089015160208b01526040890151613f22906101b8565b613f2f9060408c01612038565b51613f39906101b8565b613f469060608b01612038565b608088015160808a015260a088015160a08a015260c0880151613f68906101b8565b613f759060c08b01612038565b60e088015160e08a0152808801519089015251908701525161014086015243610160860152610180808501519086015251908401526101c0438185015282015190602082015190815190515190039060208101519060400151151590613b476112d7565b613fe2916148db565b6107e0830152613e1b565b613ff6916148db565b6107a0880152613def565b60a08a0151438111614103575b610640880181815260808c01516101608d01518082106140fb5750915b6106608a01838152921080156106a08b0190815292906140e35760006106808b01525b83516106c08b019081529251156140cb57505060006106e08901525b6140b98b6109c06101408201936109e78c6106e061010060206140a08a51516109c0613c1d60e08c015161068089015190614940565b9961070085019a8b515251015196015191015190614940565b60208251015251610620880152613d62565b6140d891519051906148db565b6106e089015261406a565b6140f082518251906148db565b6106808b015261404e565b90509161402b565b504361400e565b5190613d02565b60046141208295939551612e88565b614129816129fd565b14614135575b50505050565b61471a9360a0600080516020614dff83398151915292510151610860840152610120840151610880840190815152600060208251015260016141796107d13361141f565b614182816101ec565b036148a357506141b360406141963361141f565b01515b806108a08601526020610860860151519101511015611b76565b6141bd3415611b96565b6141d56141d061301560608701516101b8565b611bb6565b6101a0840151614797576101408401516108c08401525b61421061081b60206108a08601510151806109c08701526108c08601515190614940565b6109e084018190526108a084015151518181106147835750506000610a008401525b610a00830151610a2084018190526101808501515180821161477c57505b610a4084015261427261081b6109c085015160206108c0870151015190614940565b610a6084018190526108a084015151602001518181106147685750506000610a808401525b610a80830151610aa084018190526101808501516020015180821161476157505b610ac0840152610a40830151610ae084015152610ac08301516020610ae085015101526000808080610a40870151818115614758575b3390f11561474b575b6143266101c085015180519061367e8251610ac08801519003926040602082015191015115159061325b6112d7565b610b0084015261434a61433c60408601516101b8565b610ac0850151903390612406565b6143616108a08401515151610a40850151906148b9565b610b2084019081515261438460206108a0860151510151610ac0860151906148b9565b60208251015251610b408401515260206108a084015101516020610b4085015101526143b261313233611405565b6143c6610b40840151600161314333611405565b6143dc61018085015151610a40850151906148db565b610b60840151526143fc60206101808601510151610ac0850151906148db565b6020610b608501510152610ae0830151610b8084015152610b608301516020610b8085015101526144396101a085015161086085015151906148db565b610ba08401526144596020610b40850151015161086085015151906148db565b610bc0840190815261448061447160608701516101b8565b61086086015151903390612406565b6144dd61081b610860860151516144a961081b610be08901928084526108c08a01515190614940565b610c008801819052610b408801515151908181106147375750506000610c208801525b5160206108c0880151015190614940565b610c408501819052610b408501515160200151908181106147235750506000610c608501525b61453f610c20850151610c80860190815152610c6086015160208251015251610ca0860190815152825160208251015261313761313233611405565b5190610cc0840191825152610ba08401516020835101526101208251610ce0860190815152610b808601516020825101527fdbcb195ca30292bbebc0b65044fee8d90a8977cc723fdc6d4aa6eb6c8efce10a6145a28251604051918291826103df565b0390a151910152600080516020614ddf8339815191526145d0610b8085015160405191829133903384612ed2565b0390a16108608301515190516145ee60405192839233913385612f00565b0390a1610a406145fc611f9d565b9261461061460a82516101b8565b85612038565b6020810151602085015261463361462a60408301516101b8565b60408601612038565b61464c61464360608301516101b8565b60608601612038565b6080810151608085015260a081015160a085015261467961467060c08301516101b8565b60c08601612038565b60e081015160e085015261010080820151908501526101208101516101208501526108c083015161014085015243610160850152610b60830151610180850152610ba08301516101a0850152436101c08501526146ff610b0084015160208101519061326c8251610860880151519003926040602082015191015115159061325b6112d7565b906101e091828601520151910151900361020082015261284a565b3880808061412f565b61472c916148db565b610c60850152614503565b614740916148db565b610c208801526144cc565b614753612e9d565b6142f7565b506108fc6142ee565b90506142b8565b614771916148db565b610a80840152614297565b9050614250565b61478c916148db565b610a00840152614232565b60a084015143811161489c575b6108e0840181815260808601516101608701518082106148945750915b6109008601838152921080156109408701908152929061487c5760006109208701525b6101a0870151610960870190815292511561486457505060006109808501525b6148526101408601916109c0602061482f8551516109c06109b860e08d01516109208d015190614940565b946109a0890195865152510151916109e76101008a01516109808a015190614940565b602082510152516108c08401526141ec565b61487191519051906148db565b610980850152614804565b61488982518251906148db565b6109208701526147e4565b9050916147c1565b50436147a4565b6141b39051614199565b90506001541438612fd0565b91908201918281116148ce575b82106101b357565b6148d6612085565b6148c6565b9081039081116148e85790565b611f66612085565b81156148fa570490565b634e487b7160e01b600052601260045260246000fd5b906402540be4009182810292818404811482151715614933575b8304036101b357565b61493b612085565b61492a565b600092918015918215614957575b5050156101b357565b915092506149768382029382850481148315171561497e575b846148f0565b14388061494e565b614986612085565b614970565b9080156101b357611f66916148f0565b6000611f66928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526149df816111f0565b5193165af16124726149ef612496565b8092612528565b600091611f669383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526149df816111f0565b9190614a43611f69565b9260005b60028110614a555750508252565b80614a6260019284612047565b51614a6d8288612047565b52614a788187612047565b506000198114614a89575b01614a47565b614a91612085565b614a83565b9190614aa0611f69565b9260005b60028110614ab55750506020830152565b80614ac260019284612047565b51614acd8288612047565b52614ad88187612047565b506000198114614ae9575b01614aa4565b614af1612085565b614ae3565b60405190614b0382611177565b81604051614b10816111d5565b6000815281526020611400612984565b60209060031901126101b35760405190614b39826111d5565b6004358252565b60209060831901126101b35760405190614b59826111d5565b6084358252565b60209060a31901126101b35760405190614b79826111d5565b60a4358252565b60209060c31901126101b35760405190614b99826111d5565b60c4358252565b6040519061018082016001600160401b03811183821017614c20575b604052600080835261016083614bd06114cf565b60208201528260408201528260608201528260808201528260a0820152614bf56113a4565b60c08201528260e082015282610100820152614c0f611f69565b610120820152826101408201520152565b614c28611160565b614bbc565b9190916102e0610300820193614c44838251610277565b614c5660208201516020850190610284565b604081015190614c6c6101009283860190610277565b6060810151614c816101209182870190610277565b614cdd608083015191610140928388015260a0840151946101609586890152614cb360c08601516101808a0190610200565b614cc660e08601516101c08a0190610277565b8401516101e08801528301516102008701906125ec565b8101516102c08501520151910152565b606435906101fe82611708565b614d02611384565b90614d0b6113a4565b825260008060208401528060408401528060608401528060808401528060a08401528060c0840152614d3b6113a4565b60e0840152614d486113bd565b610100840152614d566113bd565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152614d946113a4565b610220830152565b60405190614da982611177565b81614db26113a4565b815260206114006113bd56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acebad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c650a164736f6c6343000811000a`,
  BytecodeLen: 22962,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './staker.rsh:108:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './staker.rsh:112:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:130:13:after expr stmt semicolon',
    fs: ['at ./staker.rsh:136:42:application call to "doAbort" (defined at: ./staker.rsh:127:22:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './staker.rsh:130:13:after expr stmt semicolon',
    fs: ['at ./staker.rsh:340:10:application call to "doAbort" (defined at: ./staker.rsh:127:22:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './staker.rsh:165:19:after expr stmt semicolon',
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
  "Deployer": Deployer,
  "Setup_abortSetup": Setup_abortSetup,
  "Setup_fund": Setup_fund,
  "Staker_emergencyWithdraw": Staker_emergencyWithdraw,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw,
  "Staker_withdrawAndHarvest": Staker_withdrawAndHarvest
  };
export const _APIs = {
  Setup: {
    abortSetup: Setup_abortSetup,
    fund: Setup_fund
    },
  Staker: {
    emergencyWithdraw: Staker_emergencyWithdraw,
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw,
    withdrawAndHarvest: Staker_withdrawAndHarvest
    }
  };
