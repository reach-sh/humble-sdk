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
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Object({
    rewards: ctc9,
    stake: ctc2
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6037, v6038, v6039, v6040, v6049, v6054, v6055, v6060, v6063, v6064, v6065, v6070] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = svs;
      return (await ((async () => {
        
        const v10815 = {
          REWARDS_PREC: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'),
          lastRewardsPerShare_: v10778,
          opts: v6038,
          remainingRewards: v10780,
          totalStaked: v10781
          };
        
        return v10815;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _Opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6037, v6038, v6039, v6040, v6049, v6054, v6055, v6060, v6063, v6064, v6065, v6070] = svs;
      return (await ((async () => {
        
        
        return v6038;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = svs;
      return (await ((async () => {
        
        
        return v6038;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = svs;
      return (await ((async () => {
        
        
        return v6038;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsAvailable = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6037, v6038, v6039, v6040, v6049, v6054, v6055, v6060, v6063, v6064, v6065, v6070] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = svs;
      return (await ((async (_v10897 ) => {
          const v10897 = stdlib.protect(ctc0, _v10897, null);
        
        let v10898;
        const v10899 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
        if (v10899) {
          v10898 = v10778;
          }
        else {
          const v10900 = stdlib.le(v6055, v10779);
          const v10901 = v10900 ? v6055 : v10779;
          const v10902 = stdlib.ge(v6054, v10779);
          const v10903 = v10902 ? v6054 : v10779;
          let v10904;
          const v10905 = stdlib.ge(v10903, v10901);
          if (v10905) {
            v10904 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10906 = stdlib.safeSub(v10901, v10903);
            v10904 = v10906;
            }
          const v10907 = stdlib.cast("UInt", "UInt256", v10904, false, true);
          const v10908 = stdlib.safeMul256(v6088, v10907);
          const v10909 = stdlib.cast("UInt", "UInt256", v10781, false, true);
          const v10910 = stdlib.safeDiv256(v10908, v10909);
          const v10911 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
          const v10912 = stdlib.safeAdd256(v10911, v10910);
          let v10917;
          if (v10905) {
            v10917 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10919 = stdlib.safeSub(v10901, v10903);
            v10917 = v10919;
            }
          const v10920 = stdlib.cast("UInt", "UInt256", v10917, false, true);
          const v10921 = stdlib.safeMul256(v6093, v10920);
          const v10923 = stdlib.safeDiv256(v10921, v10909);
          const v10924 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
          const v10925 = stdlib.safeAdd256(v10924, v10923);
          const v10926 = [v10912, v10925];
          v10898 = v10926;
          }
        const v10927 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v10897), null);
        const v10929 = {
          rewards: v10777,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10930 = stdlib.fromSome(v10927, v10929);
        const v10931 = v10930.stake;
        const v10936 = v10930.rewards;
        const v10937 = v10936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
        const v10939 = v10898[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
        const v10940 = stdlib.cast("UInt", "UInt256", v10931, false, true);
        const v10941 = stdlib.safeMul256(v10940, v10939);
        const v10942 = stdlib.safeDiv256(v10941, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10943;
        const v10944 = stdlib.ge256(v10937, v10942);
        if (v10944) {
          v10943 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10945 = stdlib.safeSub256(v10942, v10937);
          v10943 = v10945;
          }
        const v10946 = stdlib.cast("UInt256", "UInt", v10943, false, true);
        const v10947 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
        const v10948 = stdlib.le(v10946, v10947);
        const v10949 = v10948 ? v10946 : v10947;
        const v10960 = v10936[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
        const v10962 = v10898[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
        const v10964 = stdlib.safeMul256(v10940, v10962);
        const v10965 = stdlib.safeDiv256(v10964, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10966;
        const v10967 = stdlib.ge256(v10960, v10965);
        if (v10967) {
          v10966 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10968 = stdlib.safeSub256(v10965, v10960);
          v10966 = v10968;
          }
        const v10969 = stdlib.cast("UInt256", "UInt", v10966, false, true);
        const v10970 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
        const v10971 = stdlib.le(v10969, v10970);
        const v10972 = v10971 ? v10969 : v10970;
        const v10973 = [v10949, v10972];
        
        return v10973;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsAvailableAt = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6037, v6038, v6039, v6040, v6049, v6054, v6055, v6060, v6063, v6064, v6065, v6070] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = svs;
      return (await ((async (_v10817, _v10818 ) => {
          const v10817 = stdlib.protect(ctc0, _v10817, null);
          const v10818 = stdlib.protect(ctc2, _v10818, null);
        
        let v10819;
        const v10820 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
        if (v10820) {
          v10819 = v10778;
          }
        else {
          const v10821 = stdlib.le(v6055, v10818);
          const v10822 = v10821 ? v6055 : v10818;
          const v10823 = stdlib.ge(v6054, v10779);
          const v10824 = v10823 ? v6054 : v10779;
          let v10825;
          const v10826 = stdlib.ge(v10824, v10822);
          if (v10826) {
            v10825 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10827 = stdlib.safeSub(v10822, v10824);
            v10825 = v10827;
            }
          const v10828 = stdlib.cast("UInt", "UInt256", v10825, false, true);
          const v10829 = stdlib.safeMul256(v6088, v10828);
          const v10830 = stdlib.cast("UInt", "UInt256", v10781, false, true);
          const v10831 = stdlib.safeDiv256(v10829, v10830);
          const v10832 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
          const v10833 = stdlib.safeAdd256(v10832, v10831);
          let v10838;
          if (v10826) {
            v10838 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10840 = stdlib.safeSub(v10822, v10824);
            v10838 = v10840;
            }
          const v10841 = stdlib.cast("UInt", "UInt256", v10838, false, true);
          const v10842 = stdlib.safeMul256(v6093, v10841);
          const v10844 = stdlib.safeDiv256(v10842, v10830);
          const v10845 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
          const v10846 = stdlib.safeAdd256(v10845, v10844);
          const v10847 = [v10833, v10846];
          v10819 = v10847;
          }
        const v10848 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v10817), null);
        const v10850 = {
          rewards: v10777,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10851 = stdlib.fromSome(v10848, v10850);
        const v10852 = v10851.stake;
        const v10857 = v10851.rewards;
        const v10858 = v10857[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
        const v10860 = v10819[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
        const v10861 = stdlib.cast("UInt", "UInt256", v10852, false, true);
        const v10862 = stdlib.safeMul256(v10861, v10860);
        const v10863 = stdlib.safeDiv256(v10862, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10864;
        const v10865 = stdlib.ge256(v10858, v10863);
        if (v10865) {
          v10864 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10866 = stdlib.safeSub256(v10863, v10858);
          v10864 = v10866;
          }
        const v10867 = stdlib.cast("UInt256", "UInt", v10864, false, true);
        const v10868 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
        const v10869 = stdlib.le(v10867, v10868);
        const v10870 = v10869 ? v10867 : v10868;
        const v10881 = v10857[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
        const v10883 = v10819[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
        const v10885 = stdlib.safeMul256(v10861, v10883);
        const v10886 = stdlib.safeDiv256(v10885, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v10887;
        const v10888 = stdlib.ge256(v10881, v10886);
        if (v10888) {
          v10887 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v10889 = stdlib.safeSub256(v10886, v10881);
          v10887 = v10889;
          }
        const v10890 = stdlib.cast("UInt256", "UInt", v10887, false, true);
        const v10891 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
        const v10892 = stdlib.le(v10890, v10891);
        const v10893 = v10892 ? v10890 : v10891;
        const v10894 = [v10870, v10893];
        
        return v10894;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _staked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6037, v6038, v6039, v6040, v6049, v6054, v6055, v6060, v6063, v6064, v6065, v6070] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = svs;
      return (await ((async (_v10771 ) => {
          const v10771 = stdlib.protect(ctc0, _v10771, null);
        
        const v10772 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v10771), null);
        const v10773 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v10774 = {
          rewards: v10773,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10775 = stdlib.fromSome(v10772, v10774);
        const v10776 = v10775.stake;
        
        return v10776;}))(...args));
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
    Staker_emergencyWithdraw0_2229: ctc10,
    Staker_harvest0_2229: ctc10,
    Staker_stake0_2229: ctc12,
    Staker_withdraw0_2229: ctc12,
    Staker_withdrawAndHarvest0_2229: ctc12
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
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v6011 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v6012 = [v6011, v6011];
  const v6016 = stdlib.protect(ctc9, interact.opts, 'for Deployer\'s interact field opts');
  const v6017 = v6016.rewardToken1;
  const v6018 = v6016.stakeToken;
  const v6020 = v6016.start;
  const v6021 = v6016.end;
  
  const v6029 = stdlib.tokenEq(v6017, v6018);
  const v6030 = v6029 ? false : true;
  stdlib.assert(v6030, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:100:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:97:16:application call to [unknown function] (defined at: ./staker.rsh:97:20:function exp)'],
    msg: 'can only reward a different token than the one staked',
    who: 'Deployer'
    });
  const v6035 = stdlib.lt(v6020, v6021);
  stdlib.assert(v6035, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:101:14:application call to "checkOpts" (defined at: ./staker.rsh:93:28:function exp)', 'at ./staker.rsh:97:16:application call to [unknown function] (defined at: ./staker.rsh:97:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v6016, v6017, v6018],
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
      
      const {data: [v6038, v6039, v6040], secs: v6042, time: v6041, didSend: v78, from: v6037 } = txn1;
      
      const v6043 = v6012[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0')];
      const v6044 = stdlib.Array_set(v6043, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
      const v6045 = stdlib.Array_set(v6012, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'), v6044);
      const v6047 = v6045[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1')];
      const v6048 = stdlib.Array_set(v6047, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
      const v6049 = stdlib.Array_set(v6045, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1'), v6048);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6039
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6040
        });
      ;
      const v6054 = v6038.start;
      const v6055 = v6038.end;
      const v6060 = v6038.rewards;
      const v6063 = v6038.Rewarder0;
      const v6064 = v6060[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '0')];
      const v6065 = v6060[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '1')];
      const v6070 = stdlib.safeSub(v6055, v6054);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc6, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v6038, v6039, v6040], secs: v6042, time: v6041, didSend: v78, from: v6037 } = txn1;
  const v6043 = v6012[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0')];
  const v6044 = stdlib.Array_set(v6043, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
  const v6045 = stdlib.Array_set(v6012, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'), v6044);
  const v6047 = v6045[stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1')];
  const v6048 = stdlib.Array_set(v6047, '0', stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '0'));
  const v6049 = stdlib.Array_set(v6045, stdlib.checkedBigNumberify('./staker.rsh:103:12:dot', stdlib.UInt_max, '1'), v6048);
  const v6051 = stdlib.tokenEq(v6040, v6039);
  const v6052 = v6051 ? false : true;
  stdlib.assert(v6052, {
    at: './staker.rsh:103:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const v6054 = v6038.start;
  const v6055 = v6038.end;
  const v6056 = stdlib.lt(v6054, v6055);
  stdlib.assert(v6056, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:95:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:104:12:application call to "checkOpts" (defined at: ./staker.rsh:93:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v6060 = v6038.rewards;
  const v6063 = v6038.Rewarder0;
  const v6064 = v6060[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '0')];
  const v6065 = v6060[stdlib.checkedBigNumberify('./staker.rsh:105:13:application', stdlib.UInt_max, '1')];
  const v6070 = stdlib.safeSub(v6055, v6054);
  const txn2 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6049, v6054, v6055, v6060, v6063, v6064, v6065, v6070],
    evt_cnt: 0,
    funcNum: 1,
    lct: v6041,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0'), [[v6065, v6039]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v6074, time: v6073, didSend: v119, from: v6072 } = txn2;
      
      ;
      const v6076 = v6049[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
      const v6077 = v6076[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
      const v6078 = stdlib.add(v6077, v6065);
      const v6080 = stdlib.Array_set(v6076, '0', v6078);
      const v6081 = stdlib.Array_set(v6049, stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0'), v6080);
      sim_r.txns.push({
        amt: v6065,
        kind: 'to',
        tok: v6039
        });
      
      const v6085 = stdlib.cast("UInt", "UInt256", v6064, false, true);
      const v6086 = stdlib.safeMul256(v6085, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v6087 = stdlib.cast("UInt", "UInt256", v6070, false, true);
      const v6088 = stdlib.safeDiv256(v6086, v6087);
      const v6090 = stdlib.cast("UInt", "UInt256", v6065, false, true);
      const v6091 = stdlib.safeMul256(v6090, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v6093 = stdlib.safeDiv256(v6091, v6087);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9, ctc6, ctc6, ctc19, ctc3, ctc3, ctc7, ctc8, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6074, time: v6073, didSend: v119, from: v6072 } = txn2;
  ;
  const v6076 = v6049[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
  const v6077 = v6076[stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0')];
  const v6078 = stdlib.add(v6077, v6065);
  const v6080 = stdlib.Array_set(v6076, '0', v6078);
  const v6081 = stdlib.Array_set(v6049, stdlib.checkedBigNumberify('./staker.rsh:110:12:dot', stdlib.UInt_max, '0'), v6080);
  ;
  const v6082 = stdlib.addressEq(v6037, v6072);
  stdlib.assert(v6082, {
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
  
  const v6085 = stdlib.cast("UInt", "UInt256", v6064, false, true);
  const v6086 = stdlib.safeMul256(v6085, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
  const v6087 = stdlib.cast("UInt", "UInt256", v6070, false, true);
  const v6088 = stdlib.safeDiv256(v6086, v6087);
  const v6090 = stdlib.cast("UInt", "UInt256", v6065, false, true);
  const v6091 = stdlib.safeMul256(v6090, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
  const v6093 = stdlib.safeDiv256(v6091, v6087);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc11],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v6140], secs: v6142, time: v6141, didSend: v433, from: v6139 } = txn3;
  switch (v6140[0]) {
    case 'Setup_abortSetup0_150': {
      const v6143 = v6140[1];
      undefined /* setApiDetails */;
      const v6148 = stdlib.addressEq(v6139, v6037);
      const v6149 = stdlib.addressEq(v6139, v6063);
      const v6150 = v6148 ? true : v6149;
      stdlib.assert(v6150, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v6163 = null;
      await txn3.getOutput('Setup_abortSetup', 'v6163', ctc0, v6163);
      const v6169 = v6081[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v6170 = v6169[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_150': {
      const v10708 = v6140[1];
      undefined /* setApiDetails */;
      const v10718 = stdlib.addressEq(v6139, v6063);
      stdlib.assert(v10718, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v10761 = null;
      await txn3.getOutput('Setup_fund', 'v10761', ctc0, v10761);
      stdlib.protect(ctc0, await interact.readyForStakers(), {
        at: './staker.rsh:143:36:application',
        fs: ['at ./staker.rsh:143:36:application call to [unknown function] (defined at: ./staker.rsh:143:36:function exp)', 'at ./staker.rsh:143:36:application call to "liftedInteract" (defined at: ./staker.rsh:143:36:application)'],
        msg: 'readyForStakers',
        who: 'Deployer'
        });
      
      const v10777 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      let v10778 = v10777;
      let v10779 = v6054;
      let v10780 = v6060;
      let v10781 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
      let v10782 = v6141;
      let v10788 = v6081;
      let v10789 = v6064;
      
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
        const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn5;
        switch (v11359[0]) {
          case 'Staker_emergencyWithdraw0_2229': {
            const v11362 = v11359[1];
            undefined /* setApiDetails */;
            ;
            const v11551 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v11552 = v11551[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            ;
            const v11558 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
            const v11560 = {
              rewards: v10777,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v11561 = stdlib.fromSome(v11558, v11560);
            const v11562 = v11561.stake;
            const v11563 = stdlib.safeSub(v10781, v11562);
            const v11564 = {
              newEveryoneStaked: v11563,
              newUserStaked: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            await txn5.getOutput('Staker_emergencyWithdraw', 'v11564', ctc14, v11564);
            const v11577 = stdlib.sub(v11552, v11562);
            const v11579 = stdlib.Array_set(v11551, '0', v11577);
            const v11580 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:287:48:application', stdlib.UInt_max, '1'), v11579);
            ;
            const v11585 = v11561.rewards;
            const v11587 = {
              rewards: v11585,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            await stdlib.mapSet(map0, v11358, v11587);
            null;
            const cv10778 = v10778;
            const cv10779 = v10779;
            const cv10780 = v10780;
            const cv10781 = v11563;
            const cv10782 = v11360;
            const cv10788 = v11580;
            const cv10789 = v10789;
            
            v10778 = cv10778;
            v10779 = cv10779;
            v10780 = cv10780;
            v10781 = cv10781;
            v10782 = cv10782;
            v10788 = cv10788;
            v10789 = cv10789;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_harvest0_2229': {
            const v12107 = v11359[1];
            undefined /* setApiDetails */;
            const v12121 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            ;
            let v12337;
            if (v12121) {
              v12337 = v10778;
              }
            else {
              const v12339 = stdlib.le(v6055, v11360);
              const v12340 = v12339 ? v6055 : v11360;
              const v12341 = stdlib.ge(v6054, v10779);
              const v12342 = v12341 ? v6054 : v10779;
              let v12343;
              const v12344 = stdlib.ge(v12342, v12340);
              if (v12344) {
                v12343 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v12345 = stdlib.safeSub(v12340, v12342);
                v12343 = v12345;
                }
              const v12346 = stdlib.cast("UInt", "UInt256", v12343, false, true);
              const v12347 = stdlib.safeMul256(v6088, v12346);
              const v12348 = stdlib.cast("UInt", "UInt256", v10781, false, true);
              const v12349 = stdlib.safeDiv256(v12347, v12348);
              const v12350 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v12351 = stdlib.safeAdd256(v12350, v12349);
              let v12356;
              if (v12344) {
                v12356 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v12358 = stdlib.safeSub(v12340, v12342);
                v12356 = v12358;
                }
              const v12359 = stdlib.cast("UInt", "UInt256", v12356, false, true);
              const v12360 = stdlib.safeMul256(v6093, v12359);
              const v12362 = stdlib.safeDiv256(v12360, v12348);
              const v12363 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v12364 = stdlib.safeAdd256(v12363, v12362);
              const v12365 = [v12351, v12364];
              v12337 = v12365;
              }
            const v12366 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
            const v12368 = {
              rewards: v10777,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v12369 = stdlib.fromSome(v12366, v12368);
            const v12370 = v12369.stake;
            const v12375 = v12369.rewards;
            const v12376 = v12375[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
            const v12378 = v12337[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
            const v12379 = stdlib.cast("UInt", "UInt256", v12370, false, true);
            const v12380 = stdlib.safeMul256(v12379, v12378);
            const v12381 = stdlib.safeDiv256(v12380, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v12382;
            const v12383 = stdlib.ge256(v12376, v12381);
            if (v12383) {
              v12382 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v12384 = stdlib.safeSub256(v12381, v12376);
              v12382 = v12384;
              }
            const v12385 = stdlib.cast("UInt256", "UInt", v12382, false, true);
            const v12386 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
            const v12387 = stdlib.le(v12385, v12386);
            const v12388 = v12387 ? v12385 : v12386;
            const v12399 = v12375[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
            const v12401 = v12337[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
            const v12403 = stdlib.safeMul256(v12379, v12401);
            const v12404 = stdlib.safeDiv256(v12403, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v12405;
            const v12406 = stdlib.ge256(v12399, v12404);
            if (v12406) {
              v12405 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v12407 = stdlib.safeSub256(v12404, v12399);
              v12405 = v12407;
              }
            const v12408 = stdlib.cast("UInt256", "UInt", v12405, false, true);
            const v12409 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
            const v12410 = stdlib.le(v12408, v12409);
            const v12411 = v12410 ? v12408 : v12409;
            const v12412 = [v12388, v12411];
            const v12420 = stdlib.sub(v10789, v12388);
            ;
            const v12421 = v10788[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v12422 = v12421[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v12426 = stdlib.sub(v12422, v12411);
            const v12428 = stdlib.Array_set(v12421, '0', v12426);
            const v12429 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v12428);
            ;
            const v12431 = stdlib.safeSub(v12386, v12388);
            const v12433 = stdlib.safeSub(v12409, v12411);
            const v12446 = stdlib.cast("UInt", "UInt256", v12388, false, true);
            const v12447 = stdlib.safeAdd256(v12376, v12446);
            const v12449 = stdlib.cast("UInt", "UInt256", v12411, false, true);
            const v12450 = stdlib.safeAdd256(v12399, v12449);
            const v12451 = [v12447, v12450];
            const v12452 = {
              rewards: v12451,
              stake: v12370
              };
            await stdlib.mapSet(map0, v11358, v12452);
            const v12457 = [v12431, v12433];
            const v12458 = {
              totalRemaining: v12457,
              userReceived: v12412
              };
            await txn5.getOutput('Staker_harvest', 'v12458', ctc15, v12458);
            null;
            const cv10778 = v12337;
            const cv10779 = v11360;
            const cv10780 = v12457;
            const cv10781 = v10781;
            const cv10782 = v11360;
            const cv10788 = v12429;
            const cv10789 = v12420;
            
            v10778 = cv10778;
            v10779 = cv10779;
            v10780 = cv10780;
            v10781 = cv10781;
            v10782 = cv10782;
            v10788 = cv10788;
            v10789 = cv10789;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_stake0_2229': {
            const v12852 = v11359[1];
            undefined /* setApiDetails */;
            const v12901 = v12852[stdlib.checkedBigNumberify('./staker.rsh:233:10:spread', stdlib.UInt_max, '0')];
            const v12903 = stdlib.lt(v10779, v6055);
            stdlib.assert(v12903, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'can only stake before the end',
              who: 'Deployer'
              });
            const v12905 = stdlib.gt(v12901, stdlib.checkedBigNumberify('./staker.rsh:238:19:decimal', stdlib.UInt_max, '0'));
            stdlib.assert(v12905, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'must stake more than 0',
              who: 'Deployer'
              });
            const v12908 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v13041 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13042 = v13041[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v13043 = stdlib.add(v13042, v12901);
            const v13045 = stdlib.Array_set(v13041, '0', v13043);
            const v13046 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13045);
            ;
            let v13231;
            if (v12908) {
              v13231 = v10778;
              }
            else {
              const v13233 = stdlib.le(v6055, v11360);
              const v13234 = v13233 ? v6055 : v11360;
              const v13235 = stdlib.ge(v6054, v10779);
              const v13236 = v13235 ? v6054 : v10779;
              let v13237;
              const v13238 = stdlib.ge(v13236, v13234);
              if (v13238) {
                v13237 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v13239 = stdlib.safeSub(v13234, v13236);
                v13237 = v13239;
                }
              const v13240 = stdlib.cast("UInt", "UInt256", v13237, false, true);
              const v13241 = stdlib.safeMul256(v6088, v13240);
              const v13242 = stdlib.cast("UInt", "UInt256", v10781, false, true);
              const v13243 = stdlib.safeDiv256(v13241, v13242);
              const v13244 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v13245 = stdlib.safeAdd256(v13244, v13243);
              let v13250;
              if (v13238) {
                v13250 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v13252 = stdlib.safeSub(v13234, v13236);
                v13250 = v13252;
                }
              const v13253 = stdlib.cast("UInt", "UInt256", v13250, false, true);
              const v13254 = stdlib.safeMul256(v6093, v13253);
              const v13256 = stdlib.safeDiv256(v13254, v13242);
              const v13257 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v13258 = stdlib.safeAdd256(v13257, v13256);
              const v13259 = [v13245, v13258];
              v13231 = v13259;
              }
            const v13261 = stdlib.safeAdd(v10781, v12901);
            const v13262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
            const v13264 = {
              rewards: v10777,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v13265 = stdlib.fromSome(v13262, v13264);
            const v13266 = v13265.stake;
            const v13267 = stdlib.safeAdd(v13266, v12901);
            const v13272 = v13265.rewards;
            const v13273 = v13231[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '0')];
            const v13274 = stdlib.cast("UInt", "UInt256", v12901, false, true);
            const v13275 = stdlib.safeMul256(v13274, v13273);
            const v13276 = stdlib.safeDiv256(v13275, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v13277 = v13272[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '0')];
            const v13278 = stdlib.safeAdd256(v13277, v13276);
            const v13279 = v13231[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '1')];
            const v13281 = stdlib.safeMul256(v13274, v13279);
            const v13282 = stdlib.safeDiv256(v13281, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v13283 = v13272[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '1')];
            const v13284 = stdlib.safeAdd256(v13283, v13282);
            const v13285 = [v13278, v13284];
            const v13286 = {
              rewards: v13285,
              stake: v13267
              };
            await stdlib.mapSet(map0, v11358, v13286);
            const v13287 = {
              newEveryoneStaked: v13261,
              newUserStaked: v13267
              };
            await txn5.getOutput('Staker_stake', 'v13287', ctc14, v13287);
            null;
            const cv10778 = v13231;
            const cv10779 = v11360;
            const cv10780 = v10780;
            const cv10781 = v13261;
            const cv10782 = v11360;
            const cv10788 = v13046;
            const cv10789 = v10789;
            
            v10778 = cv10778;
            v10779 = cv10779;
            v10780 = cv10780;
            v10781 = cv10781;
            v10782 = cv10782;
            v10788 = cv10788;
            v10789 = cv10789;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_withdraw0_2229': {
            const v13597 = v11359[1];
            undefined /* setApiDetails */;
            const v13688 = v13597[stdlib.checkedBigNumberify('./staker.rsh:270:10:spread', stdlib.UInt_max, '0')];
            const v13690 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
            const v13692 = {
              rewards: v10777,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v13693 = stdlib.fromSome(v13690, v13692);
            const v13694 = v13693.stake;
            const v13695 = stdlib.le(v13688, v13694);
            stdlib.assert(v13695, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            const v13698 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v13786 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13787 = v13786[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            ;
            let v14054;
            if (v13698) {
              v14054 = v10778;
              }
            else {
              const v14056 = stdlib.le(v6055, v11360);
              const v14057 = v14056 ? v6055 : v11360;
              const v14058 = stdlib.ge(v6054, v10779);
              const v14059 = v14058 ? v6054 : v10779;
              let v14060;
              const v14061 = stdlib.ge(v14059, v14057);
              if (v14061) {
                v14060 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14062 = stdlib.safeSub(v14057, v14059);
                v14060 = v14062;
                }
              const v14063 = stdlib.cast("UInt", "UInt256", v14060, false, true);
              const v14064 = stdlib.safeMul256(v6088, v14063);
              const v14065 = stdlib.cast("UInt", "UInt256", v10781, false, true);
              const v14066 = stdlib.safeDiv256(v14064, v14065);
              const v14067 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v14068 = stdlib.safeAdd256(v14067, v14066);
              let v14073;
              if (v14061) {
                v14073 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14075 = stdlib.safeSub(v14057, v14059);
                v14073 = v14075;
                }
              const v14076 = stdlib.cast("UInt", "UInt256", v14073, false, true);
              const v14077 = stdlib.safeMul256(v6093, v14076);
              const v14079 = stdlib.safeDiv256(v14077, v14065);
              const v14080 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v14081 = stdlib.safeAdd256(v14080, v14079);
              const v14082 = [v14068, v14081];
              v14054 = v14082;
              }
            const v14089 = stdlib.safeSub(v10781, v13688);
            const v14090 = stdlib.safeSub(v13694, v13688);
            const v14095 = v13693.rewards;
            const v14104 = stdlib.sub(v13787, v13688);
            const v14106 = stdlib.Array_set(v13786, '0', v14104);
            const v14107 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v14106);
            ;
            const v14108 = v14095[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
            const v14109 = v14054[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '0')];
            const v14110 = stdlib.cast("UInt", "UInt256", v13688, false, true);
            const v14111 = stdlib.safeMul256(v14110, v14109);
            const v14112 = stdlib.safeDiv256(v14111, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14113;
            const v14114 = stdlib.ge256(v14112, v14108);
            if (v14114) {
              v14113 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14115 = stdlib.safeSub256(v14108, v14112);
              v14113 = v14115;
              }
            const v14116 = v14095[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
            const v14117 = v14054[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '1')];
            const v14119 = stdlib.safeMul256(v14110, v14117);
            const v14120 = stdlib.safeDiv256(v14119, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14121;
            const v14122 = stdlib.ge256(v14120, v14116);
            if (v14122) {
              v14121 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14123 = stdlib.safeSub256(v14116, v14120);
              v14121 = v14123;
              }
            const v14124 = [v14113, v14121];
            const v14125 = {
              rewards: v14124,
              stake: v14090
              };
            await stdlib.mapSet(map0, v11358, v14125);
            const v14126 = {
              newEveryoneStaked: v14089,
              newUserStaked: v14090
              };
            await txn5.getOutput('Staker_withdraw', 'v14126', ctc14, v14126);
            null;
            const cv10778 = v14054;
            const cv10779 = v11360;
            const cv10780 = v10780;
            const cv10781 = v14089;
            const cv10782 = v11360;
            const cv10788 = v14107;
            const cv10789 = v10789;
            
            v10778 = cv10778;
            v10779 = cv10779;
            v10780 = cv10780;
            v10781 = cv10781;
            v10782 = cv10782;
            v10788 = cv10788;
            v10789 = cv10789;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Staker_withdrawAndHarvest0_2229': {
            const v14342 = v11359[1];
            undefined /* setApiDetails */;
            const v14478 = v14342[stdlib.checkedBigNumberify('./staker.rsh:326:10:spread', stdlib.UInt_max, '0')];
            const v14480 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
            const v14482 = {
              rewards: v10777,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v14483 = stdlib.fromSome(v14480, v14482);
            const v14484 = v14483.stake;
            const v14485 = stdlib.le(v14478, v14484);
            stdlib.assert(v14485, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./staker.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            const v14488 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
            ;
            ;
            let v14893;
            if (v14488) {
              v14893 = v10778;
              }
            else {
              const v14895 = stdlib.le(v6055, v11360);
              const v14896 = v14895 ? v6055 : v11360;
              const v14897 = stdlib.ge(v6054, v10779);
              const v14898 = v14897 ? v6054 : v10779;
              let v14899;
              const v14900 = stdlib.ge(v14898, v14896);
              if (v14900) {
                v14899 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14901 = stdlib.safeSub(v14896, v14898);
                v14899 = v14901;
                }
              const v14902 = stdlib.cast("UInt", "UInt256", v14899, false, true);
              const v14903 = stdlib.safeMul256(v6088, v14902);
              const v14904 = stdlib.cast("UInt", "UInt256", v10781, false, true);
              const v14905 = stdlib.safeDiv256(v14903, v14904);
              const v14906 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
              const v14907 = stdlib.safeAdd256(v14906, v14905);
              let v14912;
              if (v14900) {
                v14912 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v14914 = stdlib.safeSub(v14896, v14898);
                v14912 = v14914;
                }
              const v14915 = stdlib.cast("UInt", "UInt256", v14912, false, true);
              const v14916 = stdlib.safeMul256(v6093, v14915);
              const v14918 = stdlib.safeDiv256(v14916, v14904);
              const v14919 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
              const v14920 = stdlib.safeAdd256(v14919, v14918);
              const v14921 = [v14907, v14920];
              v14893 = v14921;
              }
            const v14932 = v14483.rewards;
            const v14933 = v14932[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
            const v14935 = v14893[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
            const v14936 = stdlib.cast("UInt", "UInt256", v14484, false, true);
            const v14937 = stdlib.safeMul256(v14936, v14935);
            const v14938 = stdlib.safeDiv256(v14937, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14939;
            const v14940 = stdlib.ge256(v14933, v14938);
            if (v14940) {
              v14939 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14941 = stdlib.safeSub256(v14938, v14933);
              v14939 = v14941;
              }
            const v14942 = stdlib.cast("UInt256", "UInt", v14939, false, true);
            const v14943 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
            const v14944 = stdlib.le(v14942, v14943);
            const v14945 = v14944 ? v14942 : v14943;
            const v14956 = v14932[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
            const v14958 = v14893[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
            const v14960 = stdlib.safeMul256(v14936, v14958);
            const v14961 = stdlib.safeDiv256(v14960, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v14962;
            const v14963 = stdlib.ge256(v14956, v14961);
            if (v14963) {
              v14962 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v14964 = stdlib.safeSub256(v14961, v14956);
              v14962 = v14964;
              }
            const v14965 = stdlib.cast("UInt256", "UInt", v14962, false, true);
            const v14966 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
            const v14967 = stdlib.le(v14965, v14966);
            const v14968 = v14967 ? v14965 : v14966;
            const v14969 = [v14945, v14968];
            const v14977 = stdlib.sub(v10789, v14945);
            ;
            const v14978 = v10788[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v14979 = v14978[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
            const v14983 = stdlib.sub(v14979, v14968);
            const v14985 = stdlib.Array_set(v14978, '0', v14983);
            const v14986 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v14985);
            ;
            const v14988 = stdlib.safeSub(v14943, v14945);
            const v14990 = stdlib.safeSub(v14966, v14968);
            const v15003 = stdlib.cast("UInt", "UInt256", v14945, false, true);
            const v15004 = stdlib.safeAdd256(v14933, v15003);
            const v15006 = stdlib.cast("UInt", "UInt256", v14968, false, true);
            const v15007 = stdlib.safeAdd256(v14956, v15006);
            const v15008 = [v15004, v15007];
            const v15009 = {
              rewards: v15008,
              stake: v14484
              };
            await stdlib.mapSet(map0, v11358, v15009);
            const v15014 = [v14988, v14990];
            const v15015 = {
              totalRemaining: v15014,
              userReceived: v14969
              };
            const v15020 = v15009.stake;
            const v15021 = stdlib.safeSub(v10781, v14478);
            const v15022 = stdlib.safeSub(v15020, v14478);
            const v15027 = v15009.rewards;
            const v15031 = v14986[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1')];
            const v15032 = v15031[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '0')];
            const v15036 = stdlib.sub(v15032, v14478);
            const v15038 = stdlib.Array_set(v15031, '0', v15036);
            const v15039 = stdlib.Array_set(v14986, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v15038);
            ;
            const v15040 = v15027[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
            const v15042 = stdlib.cast("UInt", "UInt256", v14478, false, true);
            const v15043 = stdlib.safeMul256(v15042, v14935);
            const v15044 = stdlib.safeDiv256(v15043, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v15045;
            const v15046 = stdlib.ge256(v15044, v15040);
            if (v15046) {
              v15045 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v15047 = stdlib.safeSub256(v15040, v15044);
              v15045 = v15047;
              }
            const v15048 = v15027[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
            const v15051 = stdlib.safeMul256(v15042, v14958);
            const v15052 = stdlib.safeDiv256(v15051, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            let v15053;
            const v15054 = stdlib.ge256(v15052, v15048);
            if (v15054) {
              v15053 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              }
            else {
              const v15055 = stdlib.safeSub256(v15048, v15052);
              v15053 = v15055;
              }
            const v15056 = [v15045, v15053];
            const v15057 = {
              rewards: v15056,
              stake: v15022
              };
            await stdlib.mapSet(map0, v11358, v15057);
            const v15058 = {
              newEveryoneStaked: v15021,
              newUserStaked: v15022
              };
            const v15063 = [v15058, v15015];
            await txn5.getOutput('Staker_withdrawAndHarvest', 'v15063', ctc16, v15063);
            null;
            null;
            const cv10778 = v14893;
            const cv10779 = v11360;
            const cv10780 = v15014;
            const cv10781 = v15021;
            const cv10782 = v11360;
            const cv10788 = v15039;
            const cv10789 = v14977;
            
            v10778 = cv10778;
            v10779 = cv10779;
            v10780 = cv10780;
            v10781 = cv10781;
            v10782 = cv10782;
            v10788 = cv10788;
            v10789 = cv10789;
            
            txn4 = txn5;
            continue;
            break;
            }
          }
        
        }
      const v15249 = v10788[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v15250 = v15249[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
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
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc8, ctc6, ctc3, ctc12, ctc1, ctc1]);
  const v6108 = ctc.selfAddress();
  const v6110 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_abortSetup0_150" (defined at: ./staker.rsh:134:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: 'in',
    who: 'Setup_abortSetup'
    });
  const v6111 = stdlib.addressEq(v6108, v6037);
  const v6112 = stdlib.addressEq(v6108, v6063);
  const v6113 = v6111 ? true : v6112;
  stdlib.assert(v6113, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_abortSetup0_150" (defined at: ./staker.rsh:134:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: null,
    who: 'Setup_abortSetup'
    });
  const v6118 = ['Setup_abortSetup0_150', v6110];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093, v6118],
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
      
      const {data: [v6140], secs: v6142, time: v6141, didSend: v433, from: v6139 } = txn1;
      
      switch (v6140[0]) {
        case 'Setup_abortSetup0_150': {
          const v6143 = v6140[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_abortSetup"
            });
          ;
          const v6163 = null;
          const v6164 = await txn1.getOutput('Setup_abortSetup', 'v6163', ctc0, v6163);
          
          const v6169 = v6081[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
          const v6170 = v6169[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v6037,
            tok: v6039
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v6040
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v6039
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Setup_fund0_150': {
          const v10708 = v6140[1];
          
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
  const {data: [v6140], secs: v6142, time: v6141, didSend: v433, from: v6139 } = txn1;
  switch (v6140[0]) {
    case 'Setup_abortSetup0_150': {
      const v6143 = v6140[1];
      undefined /* setApiDetails */;
      const v6148 = stdlib.addressEq(v6139, v6037);
      const v6149 = stdlib.addressEq(v6139, v6063);
      const v6150 = v6148 ? true : v6149;
      stdlib.assert(v6150, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:134:30:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:134:30:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Setup_abortSetup'
        });
      ;
      const v6163 = null;
      const v6164 = await txn1.getOutput('Setup_abortSetup', 'v6163', ctc0, v6163);
      if (v433) {
        stdlib.protect(ctc0, await interact.out(v6143, v6164), {
          at: './staker.rsh:134:9:application',
          fs: ['at ./staker.rsh:134:9:application call to [unknown function] (defined at: ./staker.rsh:134:9:function exp)', 'at ./staker.rsh:136:27:application call to "k" (defined at: ./staker.rsh:136:21:function exp)'],
          msg: 'out',
          who: 'Setup_abortSetup'
          });
        }
      else {
        }
      
      const v6169 = v6081[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      const v6170 = v6169[stdlib.checkedBigNumberify('./staker.rsh:128:23:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_150': {
      const v10708 = v6140[1];
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
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc8, ctc6, ctc3, ctc12, ctc1, ctc1]);
  const v6120 = ctc.selfAddress();
  const v6122 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_fund0_150" (defined at: ./staker.rsh:138:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: 'in',
    who: 'Setup_fund'
    });
  const v6123 = stdlib.addressEq(v6120, v6063);
  stdlib.assert(v6123, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to "runSetup_fund0_150" (defined at: ./staker.rsh:138:8:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
    msg: null,
    who: 'Setup_fund'
    });
  const v6128 = ['Setup_fund0_150', v6122];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6060, v6063, v6064, v6081, v6088, v6093, v6128],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v6064, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v6140], secs: v6142, time: v6141, didSend: v433, from: v6139 } = txn1;
      
      switch (v6140[0]) {
        case 'Setup_abortSetup0_150': {
          const v6143 = v6140[1];
          
          break;
          }
        case 'Setup_fund0_150': {
          const v10708 = v6140[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_fund"
            });
          sim_r.txns.push({
            amt: v6064,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v10761 = null;
          const v10762 = await txn1.getOutput('Setup_fund', 'v10761', ctc0, v10761);
          
          const v10777 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v27895 = v10777;
          const v27896 = v6054;
          const v27897 = v6060;
          const v27898 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
          const v27900 = v6081;
          const v27901 = v6064;
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
  const {data: [v6140], secs: v6142, time: v6141, didSend: v433, from: v6139 } = txn1;
  switch (v6140[0]) {
    case 'Setup_abortSetup0_150': {
      const v6143 = v6140[1];
      return;
      break;
      }
    case 'Setup_fund0_150': {
      const v10708 = v6140[1];
      undefined /* setApiDetails */;
      const v10718 = stdlib.addressEq(v6139, v6063);
      stdlib.assert(v10718, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:138:24:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:138:24:function exp)', 'at ./staker.rsh:133:7:application call to [unknown function] (defined at: ./staker.rsh:133:7:function exp)'],
        msg: null,
        who: 'Setup_fund'
        });
      ;
      const v10761 = null;
      const v10762 = await txn1.getOutput('Setup_fund', 'v10761', ctc0, v10761);
      if (v433) {
        stdlib.protect(ctc0, await interact.out(v10708, v10762), {
          at: './staker.rsh:138:9:application',
          fs: ['at ./staker.rsh:138:9:application call to [unknown function] (defined at: ./staker.rsh:138:9:function exp)', 'at ./staker.rsh:140:38:application call to "k" (defined at: ./staker.rsh:140:32:function exp)'],
          msg: 'out',
          who: 'Setup_fund'
          });
        }
      else {
        }
      
      const v10777 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v27895 = v10777;
      const v27896 = v6054;
      const v27897 = v6060;
      const v27898 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
      const v27900 = v6081;
      const v27901 = v6064;
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
    Staker_emergencyWithdraw0_2229: ctc13,
    Staker_harvest0_2229: ctc13,
    Staker_stake0_2229: ctc14,
    Staker_withdraw0_2229: ctc14,
    Staker_withdrawAndHarvest0_2229: ctc14
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11074 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:281:40:application call to [unknown function] (defined at: ./staker.rsh:281:40:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_emergencyWithdraw0_2229" (defined at: ./staker.rsh:281:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_emergencyWithdraw'
    });
  const v11078 = ['Staker_emergencyWithdraw0_2229', v11074];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789, v11078],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:282:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:282:20:decimal', stdlib.UInt_max, '0'), v6040]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
      
      switch (v11359[0]) {
        case 'Staker_emergencyWithdraw0_2229': {
          const v11362 = v11359[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_emergencyWithdraw"
            });
          ;
          const v11551 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v11552 = v11551[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          ;
          const v11558 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11358), null);
          const v11560 = {
            rewards: v10777,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v11561 = stdlib.fromSome(v11558, v11560);
          const v11562 = v11561.stake;
          const v11563 = stdlib.safeSub(v10781, v11562);
          const v11564 = {
            newEveryoneStaked: v11563,
            newUserStaked: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v11565 = await txn1.getOutput('Staker_emergencyWithdraw', 'v11564', ctc16, v11564);
          
          const v11577 = stdlib.sub(v11552, v11562);
          const v11579 = stdlib.Array_set(v11551, '0', v11577);
          const v11580 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:287:48:application', stdlib.UInt_max, '1'), v11579);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: v6040
            });
          const v11585 = v11561.rewards;
          const v11587 = {
            rewards: v11585,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await stdlib.simMapSet(sim_r, 0, v11358, v11587);
          null;
          const v27904 = v10778;
          const v27905 = v10779;
          const v27906 = v10780;
          const v27907 = v11563;
          const v27909 = v11580;
          const v27910 = v10789;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_harvest0_2229': {
          const v12107 = v11359[1];
          
          break;
          }
        case 'Staker_stake0_2229': {
          const v12852 = v11359[1];
          
          break;
          }
        case 'Staker_withdraw0_2229': {
          const v13597 = v11359[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2229': {
          const v14342 = v11359[1];
          
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
  const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
  switch (v11359[0]) {
    case 'Staker_emergencyWithdraw0_2229': {
      const v11362 = v11359[1];
      undefined /* setApiDetails */;
      ;
      const v11551 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v11552 = v11551[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      ;
      const v11558 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
      const v11560 = {
        rewards: v10777,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v11561 = stdlib.fromSome(v11558, v11560);
      const v11562 = v11561.stake;
      const v11563 = stdlib.safeSub(v10781, v11562);
      const v11564 = {
        newEveryoneStaked: v11563,
        newUserStaked: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v11565 = await txn1.getOutput('Staker_emergencyWithdraw', 'v11564', ctc16, v11564);
      if (v4725) {
        stdlib.protect(ctc0, await interact.out(v11362, v11565), {
          at: './staker.rsh:281:11:application',
          fs: ['at ./staker.rsh:281:11:application call to [unknown function] (defined at: ./staker.rsh:281:11:function exp)', 'at ./staker.rsh:286:10:application call to "k" (defined at: ./staker.rsh:282:39:function exp)', 'at ./staker.rsh:282:39:application call to [unknown function] (defined at: ./staker.rsh:282:39:function exp)'],
          msg: 'out',
          who: 'Staker_emergencyWithdraw'
          });
        }
      else {
        }
      
      const v11577 = stdlib.sub(v11552, v11562);
      const v11579 = stdlib.Array_set(v11551, '0', v11577);
      const v11580 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:287:48:application', stdlib.UInt_max, '1'), v11579);
      ;
      const v11585 = v11561.rewards;
      const v11587 = {
        rewards: v11585,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.mapSet(map0, v11358, v11587);
      null;
      const v27904 = v10778;
      const v27905 = v10779;
      const v27906 = v10780;
      const v27907 = v11563;
      const v27909 = v11580;
      const v27910 = v10789;
      return;
      
      break;
      }
    case 'Staker_harvest0_2229': {
      const v12107 = v11359[1];
      return;
      break;
      }
    case 'Staker_stake0_2229': {
      const v12852 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2229': {
      const v13597 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2229': {
      const v14342 = v11359[1];
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
    Staker_emergencyWithdraw0_2229: ctc13,
    Staker_harvest0_2229: ctc13,
    Staker_stake0_2229: ctc14,
    Staker_withdraw0_2229: ctc14,
    Staker_withdrawAndHarvest0_2229: ctc14
    });
  const ctc16 = stdlib.T_Struct([['userReceived', ctc8], ['totalRemaining', ctc8]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11082 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:316:30:application call to [unknown function] (defined at: ./staker.rsh:316:30:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_harvest0_2229" (defined at: ./staker.rsh:316:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v11116 = ['Staker_harvest0_2229', v11082];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789, v11116],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:319:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:319:21:decimal', stdlib.UInt_max, '0'), v6040]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
      
      switch (v11359[0]) {
        case 'Staker_emergencyWithdraw0_2229': {
          const v11362 = v11359[1];
          
          break;
          }
        case 'Staker_harvest0_2229': {
          const v12107 = v11359[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          const v12121 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          let v12337;
          if (v12121) {
            v12337 = v10778;
            }
          else {
            const v12339 = stdlib.le(v6055, v11360);
            const v12340 = v12339 ? v6055 : v11360;
            const v12341 = stdlib.ge(v6054, v10779);
            const v12342 = v12341 ? v6054 : v10779;
            let v12343;
            const v12344 = stdlib.ge(v12342, v12340);
            if (v12344) {
              v12343 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12345 = stdlib.safeSub(v12340, v12342);
              v12343 = v12345;
              }
            const v12346 = stdlib.cast("UInt", "UInt256", v12343, false, true);
            const v12347 = stdlib.safeMul256(v6088, v12346);
            const v12348 = stdlib.cast("UInt", "UInt256", v10781, false, true);
            const v12349 = stdlib.safeDiv256(v12347, v12348);
            const v12350 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v12351 = stdlib.safeAdd256(v12350, v12349);
            let v12356;
            if (v12344) {
              v12356 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12358 = stdlib.safeSub(v12340, v12342);
              v12356 = v12358;
              }
            const v12359 = stdlib.cast("UInt", "UInt256", v12356, false, true);
            const v12360 = stdlib.safeMul256(v6093, v12359);
            const v12362 = stdlib.safeDiv256(v12360, v12348);
            const v12363 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v12364 = stdlib.safeAdd256(v12363, v12362);
            const v12365 = [v12351, v12364];
            v12337 = v12365;
            }
          const v12366 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11358), null);
          const v12368 = {
            rewards: v10777,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v12369 = stdlib.fromSome(v12366, v12368);
          const v12370 = v12369.stake;
          const v12375 = v12369.rewards;
          const v12376 = v12375[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
          const v12378 = v12337[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
          const v12379 = stdlib.cast("UInt", "UInt256", v12370, false, true);
          const v12380 = stdlib.safeMul256(v12379, v12378);
          const v12381 = stdlib.safeDiv256(v12380, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v12382;
          const v12383 = stdlib.ge256(v12376, v12381);
          if (v12383) {
            v12382 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v12384 = stdlib.safeSub256(v12381, v12376);
            v12382 = v12384;
            }
          const v12385 = stdlib.cast("UInt256", "UInt", v12382, false, true);
          const v12386 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
          const v12387 = stdlib.le(v12385, v12386);
          const v12388 = v12387 ? v12385 : v12386;
          const v12399 = v12375[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
          const v12401 = v12337[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
          const v12403 = stdlib.safeMul256(v12379, v12401);
          const v12404 = stdlib.safeDiv256(v12403, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v12405;
          const v12406 = stdlib.ge256(v12399, v12404);
          if (v12406) {
            v12405 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v12407 = stdlib.safeSub256(v12404, v12399);
            v12405 = v12407;
            }
          const v12408 = stdlib.cast("UInt256", "UInt", v12405, false, true);
          const v12409 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
          const v12410 = stdlib.le(v12408, v12409);
          const v12411 = v12410 ? v12408 : v12409;
          const v12412 = [v12388, v12411];
          const v12420 = stdlib.sub(v10789, v12388);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: undefined /* Nothing */
            });
          const v12421 = v10788[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v12422 = v12421[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v12426 = stdlib.sub(v12422, v12411);
          const v12428 = stdlib.Array_set(v12421, '0', v12426);
          const v12429 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v12428);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: v6039
            });
          const v12431 = stdlib.safeSub(v12386, v12388);
          const v12433 = stdlib.safeSub(v12409, v12411);
          const v12446 = stdlib.cast("UInt", "UInt256", v12388, false, true);
          const v12447 = stdlib.safeAdd256(v12376, v12446);
          const v12449 = stdlib.cast("UInt", "UInt256", v12411, false, true);
          const v12450 = stdlib.safeAdd256(v12399, v12449);
          const v12451 = [v12447, v12450];
          const v12452 = {
            rewards: v12451,
            stake: v12370
            };
          await stdlib.simMapSet(sim_r, 0, v11358, v12452);
          const v12457 = [v12431, v12433];
          const v12458 = {
            totalRemaining: v12457,
            userReceived: v12412
            };
          const v12462 = await txn1.getOutput('Staker_harvest', 'v12458', ctc16, v12458);
          
          null;
          const v27958 = v12337;
          const v27959 = v11360;
          const v27960 = v12457;
          const v27961 = v10781;
          const v27963 = v12429;
          const v27964 = v12420;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_stake0_2229': {
          const v12852 = v11359[1];
          
          break;
          }
        case 'Staker_withdraw0_2229': {
          const v13597 = v11359[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2229': {
          const v14342 = v11359[1];
          
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
  const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
  switch (v11359[0]) {
    case 'Staker_emergencyWithdraw0_2229': {
      const v11362 = v11359[1];
      return;
      break;
      }
    case 'Staker_harvest0_2229': {
      const v12107 = v11359[1];
      undefined /* setApiDetails */;
      const v12121 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      ;
      let v12337;
      if (v12121) {
        v12337 = v10778;
        }
      else {
        const v12339 = stdlib.le(v6055, v11360);
        const v12340 = v12339 ? v6055 : v11360;
        const v12341 = stdlib.ge(v6054, v10779);
        const v12342 = v12341 ? v6054 : v10779;
        let v12343;
        const v12344 = stdlib.ge(v12342, v12340);
        if (v12344) {
          v12343 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v12345 = stdlib.safeSub(v12340, v12342);
          v12343 = v12345;
          }
        const v12346 = stdlib.cast("UInt", "UInt256", v12343, false, true);
        const v12347 = stdlib.safeMul256(v6088, v12346);
        const v12348 = stdlib.cast("UInt", "UInt256", v10781, false, true);
        const v12349 = stdlib.safeDiv256(v12347, v12348);
        const v12350 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v12351 = stdlib.safeAdd256(v12350, v12349);
        let v12356;
        if (v12344) {
          v12356 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v12358 = stdlib.safeSub(v12340, v12342);
          v12356 = v12358;
          }
        const v12359 = stdlib.cast("UInt", "UInt256", v12356, false, true);
        const v12360 = stdlib.safeMul256(v6093, v12359);
        const v12362 = stdlib.safeDiv256(v12360, v12348);
        const v12363 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v12364 = stdlib.safeAdd256(v12363, v12362);
        const v12365 = [v12351, v12364];
        v12337 = v12365;
        }
      const v12366 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
      const v12368 = {
        rewards: v10777,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v12369 = stdlib.fromSome(v12366, v12368);
      const v12370 = v12369.stake;
      const v12375 = v12369.rewards;
      const v12376 = v12375[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
      const v12378 = v12337[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
      const v12379 = stdlib.cast("UInt", "UInt256", v12370, false, true);
      const v12380 = stdlib.safeMul256(v12379, v12378);
      const v12381 = stdlib.safeDiv256(v12380, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v12382;
      const v12383 = stdlib.ge256(v12376, v12381);
      if (v12383) {
        v12382 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v12384 = stdlib.safeSub256(v12381, v12376);
        v12382 = v12384;
        }
      const v12385 = stdlib.cast("UInt256", "UInt", v12382, false, true);
      const v12386 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
      const v12387 = stdlib.le(v12385, v12386);
      const v12388 = v12387 ? v12385 : v12386;
      const v12399 = v12375[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
      const v12401 = v12337[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
      const v12403 = stdlib.safeMul256(v12379, v12401);
      const v12404 = stdlib.safeDiv256(v12403, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v12405;
      const v12406 = stdlib.ge256(v12399, v12404);
      if (v12406) {
        v12405 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v12407 = stdlib.safeSub256(v12404, v12399);
        v12405 = v12407;
        }
      const v12408 = stdlib.cast("UInt256", "UInt", v12405, false, true);
      const v12409 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
      const v12410 = stdlib.le(v12408, v12409);
      const v12411 = v12410 ? v12408 : v12409;
      const v12412 = [v12388, v12411];
      const v12420 = stdlib.sub(v10789, v12388);
      ;
      const v12421 = v10788[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v12422 = v12421[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v12426 = stdlib.sub(v12422, v12411);
      const v12428 = stdlib.Array_set(v12421, '0', v12426);
      const v12429 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v12428);
      ;
      const v12431 = stdlib.safeSub(v12386, v12388);
      const v12433 = stdlib.safeSub(v12409, v12411);
      const v12446 = stdlib.cast("UInt", "UInt256", v12388, false, true);
      const v12447 = stdlib.safeAdd256(v12376, v12446);
      const v12449 = stdlib.cast("UInt", "UInt256", v12411, false, true);
      const v12450 = stdlib.safeAdd256(v12399, v12449);
      const v12451 = [v12447, v12450];
      const v12452 = {
        rewards: v12451,
        stake: v12370
        };
      await stdlib.mapSet(map0, v11358, v12452);
      const v12457 = [v12431, v12433];
      const v12458 = {
        totalRemaining: v12457,
        userReceived: v12412
        };
      const v12462 = await txn1.getOutput('Staker_harvest', 'v12458', ctc16, v12458);
      if (v4725) {
        stdlib.protect(ctc0, await interact.out(v12107, v12462), {
          at: './staker.rsh:316:11:application',
          fs: ['at ./staker.rsh:316:11:application call to [unknown function] (defined at: ./staker.rsh:316:11:function exp)', 'at ./staker.rsh:321:10:application call to "k" (defined at: ./staker.rsh:319:42:function exp)', 'at ./staker.rsh:319:42:application call to [unknown function] (defined at: ./staker.rsh:319:42:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v27958 = v12337;
      const v27959 = v11360;
      const v27960 = v12457;
      const v27961 = v10781;
      const v27963 = v12429;
      const v27964 = v12420;
      return;
      
      break;
      }
    case 'Staker_stake0_2229': {
      const v12852 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2229': {
      const v13597 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2229': {
      const v14342 = v11359[1];
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
    Staker_emergencyWithdraw0_2229: ctc14,
    Staker_harvest0_2229: ctc14,
    Staker_stake0_2229: ctc13,
    Staker_withdraw0_2229: ctc13,
    Staker_withdrawAndHarvest0_2229: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v10979 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2229" (defined at: ./staker.rsh:233:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v10980 = v10979[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v10983 = stdlib.lt(v10779, v6055);
  stdlib.assert(v10983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2229" (defined at: ./staker.rsh:233:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only stake before the end',
    who: 'Staker_stake'
    });
  const v10985 = stdlib.gt(v10980, stdlib.checkedBigNumberify('./staker.rsh:238:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v10985, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2229" (defined at: ./staker.rsh:233:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'must stake more than 0',
    who: 'Staker_stake'
    });
  const v11021 = ['Staker_stake0_2229', v10979];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789, v11021],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:240:17:decimal', stdlib.UInt_max, '0'), [[v10980, v6040]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
      
      switch (v11359[0]) {
        case 'Staker_emergencyWithdraw0_2229': {
          const v11362 = v11359[1];
          
          break;
          }
        case 'Staker_harvest0_2229': {
          const v12107 = v11359[1];
          
          break;
          }
        case 'Staker_stake0_2229': {
          const v12852 = v11359[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v12901 = v12852[stdlib.checkedBigNumberify('./staker.rsh:233:10:spread', stdlib.UInt_max, '0')];
          const v12908 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v13041 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13042 = v13041[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v13043 = stdlib.add(v13042, v12901);
          const v13045 = stdlib.Array_set(v13041, '0', v13043);
          const v13046 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13045);
          sim_r.txns.push({
            amt: v12901,
            kind: 'to',
            tok: v6040
            });
          let v13231;
          if (v12908) {
            v13231 = v10778;
            }
          else {
            const v13233 = stdlib.le(v6055, v11360);
            const v13234 = v13233 ? v6055 : v11360;
            const v13235 = stdlib.ge(v6054, v10779);
            const v13236 = v13235 ? v6054 : v10779;
            let v13237;
            const v13238 = stdlib.ge(v13236, v13234);
            if (v13238) {
              v13237 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v13239 = stdlib.safeSub(v13234, v13236);
              v13237 = v13239;
              }
            const v13240 = stdlib.cast("UInt", "UInt256", v13237, false, true);
            const v13241 = stdlib.safeMul256(v6088, v13240);
            const v13242 = stdlib.cast("UInt", "UInt256", v10781, false, true);
            const v13243 = stdlib.safeDiv256(v13241, v13242);
            const v13244 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v13245 = stdlib.safeAdd256(v13244, v13243);
            let v13250;
            if (v13238) {
              v13250 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v13252 = stdlib.safeSub(v13234, v13236);
              v13250 = v13252;
              }
            const v13253 = stdlib.cast("UInt", "UInt256", v13250, false, true);
            const v13254 = stdlib.safeMul256(v6093, v13253);
            const v13256 = stdlib.safeDiv256(v13254, v13242);
            const v13257 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v13258 = stdlib.safeAdd256(v13257, v13256);
            const v13259 = [v13245, v13258];
            v13231 = v13259;
            }
          const v13261 = stdlib.safeAdd(v10781, v12901);
          const v13262 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11358), null);
          const v13264 = {
            rewards: v10777,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v13265 = stdlib.fromSome(v13262, v13264);
          const v13266 = v13265.stake;
          const v13267 = stdlib.safeAdd(v13266, v12901);
          const v13272 = v13265.rewards;
          const v13273 = v13231[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '0')];
          const v13274 = stdlib.cast("UInt", "UInt256", v12901, false, true);
          const v13275 = stdlib.safeMul256(v13274, v13273);
          const v13276 = stdlib.safeDiv256(v13275, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v13277 = v13272[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '0')];
          const v13278 = stdlib.safeAdd256(v13277, v13276);
          const v13279 = v13231[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '1')];
          const v13281 = stdlib.safeMul256(v13274, v13279);
          const v13282 = stdlib.safeDiv256(v13281, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v13283 = v13272[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '1')];
          const v13284 = stdlib.safeAdd256(v13283, v13282);
          const v13285 = [v13278, v13284];
          const v13286 = {
            rewards: v13285,
            stake: v13267
            };
          await stdlib.simMapSet(sim_r, 0, v11358, v13286);
          const v13287 = {
            newEveryoneStaked: v13261,
            newUserStaked: v13267
            };
          const v13289 = await txn1.getOutput('Staker_stake', 'v13287', ctc16, v13287);
          
          null;
          const v28012 = v13231;
          const v28013 = v11360;
          const v28014 = v10780;
          const v28015 = v13261;
          const v28017 = v13046;
          const v28018 = v10789;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdraw0_2229': {
          const v13597 = v11359[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2229': {
          const v14342 = v11359[1];
          
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
  const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
  switch (v11359[0]) {
    case 'Staker_emergencyWithdraw0_2229': {
      const v11362 = v11359[1];
      return;
      break;
      }
    case 'Staker_harvest0_2229': {
      const v12107 = v11359[1];
      return;
      break;
      }
    case 'Staker_stake0_2229': {
      const v12852 = v11359[1];
      undefined /* setApiDetails */;
      const v12901 = v12852[stdlib.checkedBigNumberify('./staker.rsh:233:10:spread', stdlib.UInt_max, '0')];
      const v12903 = stdlib.lt(v10779, v6055);
      stdlib.assert(v12903, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'can only stake before the end',
        who: 'Staker_stake'
        });
      const v12905 = stdlib.gt(v12901, stdlib.checkedBigNumberify('./staker.rsh:238:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v12905, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:233:31:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:233:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'must stake more than 0',
        who: 'Staker_stake'
        });
      const v12908 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v13041 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13042 = v13041[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v13043 = stdlib.add(v13042, v12901);
      const v13045 = stdlib.Array_set(v13041, '0', v13043);
      const v13046 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13045);
      ;
      let v13231;
      if (v12908) {
        v13231 = v10778;
        }
      else {
        const v13233 = stdlib.le(v6055, v11360);
        const v13234 = v13233 ? v6055 : v11360;
        const v13235 = stdlib.ge(v6054, v10779);
        const v13236 = v13235 ? v6054 : v10779;
        let v13237;
        const v13238 = stdlib.ge(v13236, v13234);
        if (v13238) {
          v13237 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v13239 = stdlib.safeSub(v13234, v13236);
          v13237 = v13239;
          }
        const v13240 = stdlib.cast("UInt", "UInt256", v13237, false, true);
        const v13241 = stdlib.safeMul256(v6088, v13240);
        const v13242 = stdlib.cast("UInt", "UInt256", v10781, false, true);
        const v13243 = stdlib.safeDiv256(v13241, v13242);
        const v13244 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v13245 = stdlib.safeAdd256(v13244, v13243);
        let v13250;
        if (v13238) {
          v13250 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v13252 = stdlib.safeSub(v13234, v13236);
          v13250 = v13252;
          }
        const v13253 = stdlib.cast("UInt", "UInt256", v13250, false, true);
        const v13254 = stdlib.safeMul256(v6093, v13253);
        const v13256 = stdlib.safeDiv256(v13254, v13242);
        const v13257 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v13258 = stdlib.safeAdd256(v13257, v13256);
        const v13259 = [v13245, v13258];
        v13231 = v13259;
        }
      const v13261 = stdlib.safeAdd(v10781, v12901);
      const v13262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
      const v13264 = {
        rewards: v10777,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v13265 = stdlib.fromSome(v13262, v13264);
      const v13266 = v13265.stake;
      const v13267 = stdlib.safeAdd(v13266, v12901);
      const v13272 = v13265.rewards;
      const v13273 = v13231[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '0')];
      const v13274 = stdlib.cast("UInt", "UInt256", v12901, false, true);
      const v13275 = stdlib.safeMul256(v13274, v13273);
      const v13276 = stdlib.safeDiv256(v13275, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v13277 = v13272[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '0')];
      const v13278 = stdlib.safeAdd256(v13277, v13276);
      const v13279 = v13231[stdlib.checkedBigNumberify('./staker.rsh:220:60:array ref', stdlib.UInt_max, '1')];
      const v13281 = stdlib.safeMul256(v13274, v13279);
      const v13282 = stdlib.safeDiv256(v13281, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v13283 = v13272[stdlib.checkedBigNumberify('./staker.rsh:221:29:array ref', stdlib.UInt_max, '1')];
      const v13284 = stdlib.safeAdd256(v13283, v13282);
      const v13285 = [v13278, v13284];
      const v13286 = {
        rewards: v13285,
        stake: v13267
        };
      await stdlib.mapSet(map0, v11358, v13286);
      const v13287 = {
        newEveryoneStaked: v13261,
        newUserStaked: v13267
        };
      const v13289 = await txn1.getOutput('Staker_stake', 'v13287', ctc16, v13287);
      if (v4725) {
        stdlib.protect(ctc0, await interact.out(v12852, v13289), {
          at: './staker.rsh:233:11:application',
          fs: ['at ./staker.rsh:233:11:application call to [unknown function] (defined at: ./staker.rsh:233:11:function exp)', 'at ./staker.rsh:242:10:application call to "k" (defined at: ./staker.rsh:240:44:function exp)', 'at ./staker.rsh:240:44:application call to [unknown function] (defined at: ./staker.rsh:240:44:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      null;
      const v28012 = v13231;
      const v28013 = v11360;
      const v28014 = v10780;
      const v28015 = v13261;
      const v28017 = v13046;
      const v28018 = v10789;
      return;
      
      break;
      }
    case 'Staker_withdraw0_2229': {
      const v13597 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2229': {
      const v14342 = v11359[1];
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
    Staker_emergencyWithdraw0_2229: ctc14,
    Staker_harvest0_2229: ctc14,
    Staker_stake0_2229: ctc13,
    Staker_withdraw0_2229: ctc13,
    Staker_withdrawAndHarvest0_2229: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11023 = ctc.selfAddress();
  const v11025 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdraw0_2229" (defined at: ./staker.rsh:270:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v11026 = v11025[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11029 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11023), null);
  const v11031 = {
    rewards: v10777,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v11032 = stdlib.fromSome(v11029, v11031);
  const v11033 = v11032.stake;
  const v11034 = stdlib.le(v11026, v11033);
  stdlib.assert(v11034, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdraw0_2229" (defined at: ./staker.rsh:270:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v11070 = ['Staker_withdraw0_2229', v11025];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789, v11070],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:274:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:274:21:decimal', stdlib.UInt_max, '0'), v6040]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
      
      switch (v11359[0]) {
        case 'Staker_emergencyWithdraw0_2229': {
          const v11362 = v11359[1];
          
          break;
          }
        case 'Staker_harvest0_2229': {
          const v12107 = v11359[1];
          
          break;
          }
        case 'Staker_stake0_2229': {
          const v12852 = v11359[1];
          
          break;
          }
        case 'Staker_withdraw0_2229': {
          const v13597 = v11359[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          const v13688 = v13597[stdlib.checkedBigNumberify('./staker.rsh:270:10:spread', stdlib.UInt_max, '0')];
          const v13690 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11358), null);
          const v13692 = {
            rewards: v10777,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v13693 = stdlib.fromSome(v13690, v13692);
          const v13694 = v13693.stake;
          const v13698 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v13786 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13787 = v13786[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          ;
          let v14054;
          if (v13698) {
            v14054 = v10778;
            }
          else {
            const v14056 = stdlib.le(v6055, v11360);
            const v14057 = v14056 ? v6055 : v11360;
            const v14058 = stdlib.ge(v6054, v10779);
            const v14059 = v14058 ? v6054 : v10779;
            let v14060;
            const v14061 = stdlib.ge(v14059, v14057);
            if (v14061) {
              v14060 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14062 = stdlib.safeSub(v14057, v14059);
              v14060 = v14062;
              }
            const v14063 = stdlib.cast("UInt", "UInt256", v14060, false, true);
            const v14064 = stdlib.safeMul256(v6088, v14063);
            const v14065 = stdlib.cast("UInt", "UInt256", v10781, false, true);
            const v14066 = stdlib.safeDiv256(v14064, v14065);
            const v14067 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v14068 = stdlib.safeAdd256(v14067, v14066);
            let v14073;
            if (v14061) {
              v14073 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14075 = stdlib.safeSub(v14057, v14059);
              v14073 = v14075;
              }
            const v14076 = stdlib.cast("UInt", "UInt256", v14073, false, true);
            const v14077 = stdlib.safeMul256(v6093, v14076);
            const v14079 = stdlib.safeDiv256(v14077, v14065);
            const v14080 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v14081 = stdlib.safeAdd256(v14080, v14079);
            const v14082 = [v14068, v14081];
            v14054 = v14082;
            }
          const v14089 = stdlib.safeSub(v10781, v13688);
          const v14090 = stdlib.safeSub(v13694, v13688);
          const v14095 = v13693.rewards;
          const v14104 = stdlib.sub(v13787, v13688);
          const v14106 = stdlib.Array_set(v13786, '0', v14104);
          const v14107 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v14106);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: v6040
            });
          const v14108 = v14095[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
          const v14109 = v14054[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '0')];
          const v14110 = stdlib.cast("UInt", "UInt256", v13688, false, true);
          const v14111 = stdlib.safeMul256(v14110, v14109);
          const v14112 = stdlib.safeDiv256(v14111, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14113;
          const v14114 = stdlib.ge256(v14112, v14108);
          if (v14114) {
            v14113 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14115 = stdlib.safeSub256(v14108, v14112);
            v14113 = v14115;
            }
          const v14116 = v14095[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
          const v14117 = v14054[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '1')];
          const v14119 = stdlib.safeMul256(v14110, v14117);
          const v14120 = stdlib.safeDiv256(v14119, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14121;
          const v14122 = stdlib.ge256(v14120, v14116);
          if (v14122) {
            v14121 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14123 = stdlib.safeSub256(v14116, v14120);
            v14121 = v14123;
            }
          const v14124 = [v14113, v14121];
          const v14125 = {
            rewards: v14124,
            stake: v14090
            };
          await stdlib.simMapSet(sim_r, 0, v11358, v14125);
          const v14126 = {
            newEveryoneStaked: v14089,
            newUserStaked: v14090
            };
          const v14128 = await txn1.getOutput('Staker_withdraw', 'v14126', ctc16, v14126);
          
          null;
          const v28066 = v14054;
          const v28067 = v11360;
          const v28068 = v10780;
          const v28069 = v14089;
          const v28071 = v14107;
          const v28072 = v10789;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2229': {
          const v14342 = v11359[1];
          
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
  const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
  switch (v11359[0]) {
    case 'Staker_emergencyWithdraw0_2229': {
      const v11362 = v11359[1];
      return;
      break;
      }
    case 'Staker_harvest0_2229': {
      const v12107 = v11359[1];
      return;
      break;
      }
    case 'Staker_stake0_2229': {
      const v12852 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2229': {
      const v13597 = v11359[1];
      undefined /* setApiDetails */;
      const v13688 = v13597[stdlib.checkedBigNumberify('./staker.rsh:270:10:spread', stdlib.UInt_max, '0')];
      const v13690 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
      const v13692 = {
        rewards: v10777,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v13693 = stdlib.fromSome(v13690, v13692);
      const v13694 = v13693.stake;
      const v13695 = stdlib.le(v13688, v13694);
      stdlib.assert(v13695, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:270:34:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:270:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      const v13698 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v13786 = v10788[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13787 = v13786[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      ;
      let v14054;
      if (v13698) {
        v14054 = v10778;
        }
      else {
        const v14056 = stdlib.le(v6055, v11360);
        const v14057 = v14056 ? v6055 : v11360;
        const v14058 = stdlib.ge(v6054, v10779);
        const v14059 = v14058 ? v6054 : v10779;
        let v14060;
        const v14061 = stdlib.ge(v14059, v14057);
        if (v14061) {
          v14060 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14062 = stdlib.safeSub(v14057, v14059);
          v14060 = v14062;
          }
        const v14063 = stdlib.cast("UInt", "UInt256", v14060, false, true);
        const v14064 = stdlib.safeMul256(v6088, v14063);
        const v14065 = stdlib.cast("UInt", "UInt256", v10781, false, true);
        const v14066 = stdlib.safeDiv256(v14064, v14065);
        const v14067 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v14068 = stdlib.safeAdd256(v14067, v14066);
        let v14073;
        if (v14061) {
          v14073 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14075 = stdlib.safeSub(v14057, v14059);
          v14073 = v14075;
          }
        const v14076 = stdlib.cast("UInt", "UInt256", v14073, false, true);
        const v14077 = stdlib.safeMul256(v6093, v14076);
        const v14079 = stdlib.safeDiv256(v14077, v14065);
        const v14080 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v14081 = stdlib.safeAdd256(v14080, v14079);
        const v14082 = [v14068, v14081];
        v14054 = v14082;
        }
      const v14089 = stdlib.safeSub(v10781, v13688);
      const v14090 = stdlib.safeSub(v13694, v13688);
      const v14095 = v13693.rewards;
      const v14104 = stdlib.sub(v13787, v13688);
      const v14106 = stdlib.Array_set(v13786, '0', v14104);
      const v14107 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v14106);
      ;
      const v14108 = v14095[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
      const v14109 = v14054[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '0')];
      const v14110 = stdlib.cast("UInt", "UInt256", v13688, false, true);
      const v14111 = stdlib.safeMul256(v14110, v14109);
      const v14112 = stdlib.safeDiv256(v14111, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14113;
      const v14114 = stdlib.ge256(v14112, v14108);
      if (v14114) {
        v14113 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14115 = stdlib.safeSub256(v14108, v14112);
        v14113 = v14115;
        }
      const v14116 = v14095[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
      const v14117 = v14054[stdlib.checkedBigNumberify('./staker.rsh:256:65:array ref', stdlib.UInt_max, '1')];
      const v14119 = stdlib.safeMul256(v14110, v14117);
      const v14120 = stdlib.safeDiv256(v14119, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14121;
      const v14122 = stdlib.ge256(v14120, v14116);
      if (v14122) {
        v14121 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14123 = stdlib.safeSub256(v14116, v14120);
        v14121 = v14123;
        }
      const v14124 = [v14113, v14121];
      const v14125 = {
        rewards: v14124,
        stake: v14090
        };
      await stdlib.mapSet(map0, v11358, v14125);
      const v14126 = {
        newEveryoneStaked: v14089,
        newUserStaked: v14090
        };
      const v14128 = await txn1.getOutput('Staker_withdraw', 'v14126', ctc16, v14126);
      if (v4725) {
        stdlib.protect(ctc0, await interact.out(v13597, v14128), {
          at: './staker.rsh:270:11:application',
          fs: ['at ./staker.rsh:270:11:application call to [unknown function] (defined at: ./staker.rsh:270:11:function exp)', 'at ./staker.rsh:276:10:application call to "k" (defined at: ./staker.rsh:274:42:function exp)', 'at ./staker.rsh:274:42:application call to [unknown function] (defined at: ./staker.rsh:274:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      null;
      const v28066 = v14054;
      const v28067 = v11360;
      const v28068 = v10780;
      const v28069 = v14089;
      const v28071 = v14107;
      const v28072 = v10789;
      return;
      
      break;
      }
    case 'Staker_withdrawAndHarvest0_2229': {
      const v14342 = v11359[1];
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
    Staker_emergencyWithdraw0_2229: ctc14,
    Staker_harvest0_2229: ctc14,
    Staker_stake0_2229: ctc13,
    Staker_withdraw0_2229: ctc13,
    Staker_withdrawAndHarvest0_2229: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc3], ['newEveryoneStaked', ctc3]]);
  const ctc17 = stdlib.T_Struct([['userReceived', ctc8], ['totalRemaining', ctc8]]);
  const ctc18 = stdlib.T_Tuple([ctc16, ctc17]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc6, ctc9, ctc7, ctc7, ctc3, ctc3, ctc6, ctc1, ctc1, ctc2, ctc2, ctc3, ctc8, ctc3, ctc12, ctc3]);
  const v11118 = ctc.selfAddress();
  const v11120 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdrawAndHarvest0_2229" (defined at: ./staker.rsh:326:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdrawAndHarvest'
    });
  const v11121 = v11120[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11124 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11118), null);
  const v11126 = {
    rewards: v10777,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v11127 = stdlib.fromSome(v11124, v11126);
  const v11128 = v11127.stake;
  const v11129 = stdlib.le(v11121, v11128);
  stdlib.assert(v11129, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdrawAndHarvest0_2229" (defined at: ./staker.rsh:326:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdrawAndHarvest'
    });
  const v11165 = ['Staker_withdrawAndHarvest0_2229', v11120];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6037, v6038, v6039, v6040, v6054, v6055, v6063, v6088, v6093, v10777, v10778, v10779, v10780, v10781, v10788, v10789, v11165],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:330:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:330:21:decimal', stdlib.UInt_max, '0'), v6040]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
      
      switch (v11359[0]) {
        case 'Staker_emergencyWithdraw0_2229': {
          const v11362 = v11359[1];
          
          break;
          }
        case 'Staker_harvest0_2229': {
          const v12107 = v11359[1];
          
          break;
          }
        case 'Staker_stake0_2229': {
          const v12852 = v11359[1];
          
          break;
          }
        case 'Staker_withdraw0_2229': {
          const v13597 = v11359[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_2229': {
          const v14342 = v11359[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdrawAndHarvest"
            });
          const v14478 = v14342[stdlib.checkedBigNumberify('./staker.rsh:326:10:spread', stdlib.UInt_max, '0')];
          const v14480 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11358), null);
          const v14482 = {
            rewards: v10777,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v14483 = stdlib.fromSome(v14480, v14482);
          const v14484 = v14483.stake;
          const v14488 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          let v14893;
          if (v14488) {
            v14893 = v10778;
            }
          else {
            const v14895 = stdlib.le(v6055, v11360);
            const v14896 = v14895 ? v6055 : v11360;
            const v14897 = stdlib.ge(v6054, v10779);
            const v14898 = v14897 ? v6054 : v10779;
            let v14899;
            const v14900 = stdlib.ge(v14898, v14896);
            if (v14900) {
              v14899 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14901 = stdlib.safeSub(v14896, v14898);
              v14899 = v14901;
              }
            const v14902 = stdlib.cast("UInt", "UInt256", v14899, false, true);
            const v14903 = stdlib.safeMul256(v6088, v14902);
            const v14904 = stdlib.cast("UInt", "UInt256", v10781, false, true);
            const v14905 = stdlib.safeDiv256(v14903, v14904);
            const v14906 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
            const v14907 = stdlib.safeAdd256(v14906, v14905);
            let v14912;
            if (v14900) {
              v14912 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14914 = stdlib.safeSub(v14896, v14898);
              v14912 = v14914;
              }
            const v14915 = stdlib.cast("UInt", "UInt256", v14912, false, true);
            const v14916 = stdlib.safeMul256(v6093, v14915);
            const v14918 = stdlib.safeDiv256(v14916, v14904);
            const v14919 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
            const v14920 = stdlib.safeAdd256(v14919, v14918);
            const v14921 = [v14907, v14920];
            v14893 = v14921;
            }
          const v14932 = v14483.rewards;
          const v14933 = v14932[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
          const v14935 = v14893[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
          const v14936 = stdlib.cast("UInt", "UInt256", v14484, false, true);
          const v14937 = stdlib.safeMul256(v14936, v14935);
          const v14938 = stdlib.safeDiv256(v14937, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14939;
          const v14940 = stdlib.ge256(v14933, v14938);
          if (v14940) {
            v14939 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14941 = stdlib.safeSub256(v14938, v14933);
            v14939 = v14941;
            }
          const v14942 = stdlib.cast("UInt256", "UInt", v14939, false, true);
          const v14943 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
          const v14944 = stdlib.le(v14942, v14943);
          const v14945 = v14944 ? v14942 : v14943;
          const v14956 = v14932[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
          const v14958 = v14893[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
          const v14960 = stdlib.safeMul256(v14936, v14958);
          const v14961 = stdlib.safeDiv256(v14960, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v14962;
          const v14963 = stdlib.ge256(v14956, v14961);
          if (v14963) {
            v14962 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v14964 = stdlib.safeSub256(v14961, v14956);
            v14962 = v14964;
            }
          const v14965 = stdlib.cast("UInt256", "UInt", v14962, false, true);
          const v14966 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
          const v14967 = stdlib.le(v14965, v14966);
          const v14968 = v14967 ? v14965 : v14966;
          const v14969 = [v14945, v14968];
          const v14977 = stdlib.sub(v10789, v14945);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: undefined /* Nothing */
            });
          const v14978 = v10788[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v14979 = v14978[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v14983 = stdlib.sub(v14979, v14968);
          const v14985 = stdlib.Array_set(v14978, '0', v14983);
          const v14986 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v14985);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: v6039
            });
          const v14988 = stdlib.safeSub(v14943, v14945);
          const v14990 = stdlib.safeSub(v14966, v14968);
          const v15003 = stdlib.cast("UInt", "UInt256", v14945, false, true);
          const v15004 = stdlib.safeAdd256(v14933, v15003);
          const v15006 = stdlib.cast("UInt", "UInt256", v14968, false, true);
          const v15007 = stdlib.safeAdd256(v14956, v15006);
          const v15008 = [v15004, v15007];
          const v15009 = {
            rewards: v15008,
            stake: v14484
            };
          await stdlib.simMapSet(sim_r, 0, v11358, v15009);
          const v15014 = [v14988, v14990];
          const v15015 = {
            totalRemaining: v15014,
            userReceived: v14969
            };
          const v15020 = v15009.stake;
          const v15021 = stdlib.safeSub(v10781, v14478);
          const v15022 = stdlib.safeSub(v15020, v14478);
          const v15027 = v15009.rewards;
          const v15031 = v14986[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1')];
          const v15032 = v15031[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '0')];
          const v15036 = stdlib.sub(v15032, v14478);
          const v15038 = stdlib.Array_set(v15031, '0', v15036);
          const v15039 = stdlib.Array_set(v14986, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v15038);
          sim_r.txns.push({
            kind: 'from',
            to: v11358,
            tok: v6040
            });
          const v15040 = v15027[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
          const v15042 = stdlib.cast("UInt", "UInt256", v14478, false, true);
          const v15043 = stdlib.safeMul256(v15042, v14935);
          const v15044 = stdlib.safeDiv256(v15043, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v15045;
          const v15046 = stdlib.ge256(v15044, v15040);
          if (v15046) {
            v15045 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v15047 = stdlib.safeSub256(v15040, v15044);
            v15045 = v15047;
            }
          const v15048 = v15027[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
          const v15051 = stdlib.safeMul256(v15042, v14958);
          const v15052 = stdlib.safeDiv256(v15051, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v15053;
          const v15054 = stdlib.ge256(v15052, v15048);
          if (v15054) {
            v15053 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v15055 = stdlib.safeSub256(v15048, v15052);
            v15053 = v15055;
            }
          const v15056 = [v15045, v15053];
          const v15057 = {
            rewards: v15056,
            stake: v15022
            };
          await stdlib.simMapSet(sim_r, 0, v11358, v15057);
          const v15058 = {
            newEveryoneStaked: v15021,
            newUserStaked: v15022
            };
          const v15063 = [v15058, v15015];
          const v15064 = await txn1.getOutput('Staker_withdrawAndHarvest', 'v15063', ctc18, v15063);
          
          null;
          null;
          const v28120 = v14893;
          const v28121 = v11360;
          const v28122 = v15014;
          const v28123 = v15021;
          const v28125 = v15039;
          const v28126 = v14977;
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
  const {data: [v11359], secs: v11361, time: v11360, didSend: v4725, from: v11358 } = txn1;
  switch (v11359[0]) {
    case 'Staker_emergencyWithdraw0_2229': {
      const v11362 = v11359[1];
      return;
      break;
      }
    case 'Staker_harvest0_2229': {
      const v12107 = v11359[1];
      return;
      break;
      }
    case 'Staker_stake0_2229': {
      const v12852 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2229': {
      const v13597 = v11359[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_2229': {
      const v14342 = v11359[1];
      undefined /* setApiDetails */;
      const v14478 = v14342[stdlib.checkedBigNumberify('./staker.rsh:326:10:spread', stdlib.UInt_max, '0')];
      const v14480 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11358), null);
      const v14482 = {
        rewards: v10777,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14483 = stdlib.fromSome(v14480, v14482);
      const v14484 = v14483.stake;
      const v14485 = stdlib.le(v14478, v14484);
      stdlib.assert(v14485, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:326:44:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:326:44:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:212:14:application call to [unknown function] (defined at: ./staker.rsh:212:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdrawAndHarvest'
        });
      const v14488 = stdlib.eq(v10781, stdlib.checkedBigNumberify('./staker.rsh:169:28:decimal', stdlib.UInt_max, '0'));
      ;
      ;
      let v14893;
      if (v14488) {
        v14893 = v10778;
        }
      else {
        const v14895 = stdlib.le(v6055, v11360);
        const v14896 = v14895 ? v6055 : v11360;
        const v14897 = stdlib.ge(v6054, v10779);
        const v14898 = v14897 ? v6054 : v10779;
        let v14899;
        const v14900 = stdlib.ge(v14898, v14896);
        if (v14900) {
          v14899 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14901 = stdlib.safeSub(v14896, v14898);
          v14899 = v14901;
          }
        const v14902 = stdlib.cast("UInt", "UInt256", v14899, false, true);
        const v14903 = stdlib.safeMul256(v6088, v14902);
        const v14904 = stdlib.cast("UInt", "UInt256", v10781, false, true);
        const v14905 = stdlib.safeDiv256(v14903, v14904);
        const v14906 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '0')];
        const v14907 = stdlib.safeAdd256(v14906, v14905);
        let v14912;
        if (v14900) {
          v14912 = stdlib.checkedBigNumberify('./staker.rsh:46:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v14914 = stdlib.safeSub(v14896, v14898);
          v14912 = v14914;
          }
        const v14915 = stdlib.cast("UInt", "UInt256", v14912, false, true);
        const v14916 = stdlib.safeMul256(v6093, v14915);
        const v14918 = stdlib.safeDiv256(v14916, v14904);
        const v14919 = v10778[stdlib.checkedBigNumberify('./staker.rsh:175:40:array ref', stdlib.UInt_max, '1')];
        const v14920 = stdlib.safeAdd256(v14919, v14918);
        const v14921 = [v14907, v14920];
        v14893 = v14921;
        }
      const v14932 = v14483.rewards;
      const v14933 = v14932[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '0')];
      const v14935 = v14893[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '0')];
      const v14936 = stdlib.cast("UInt", "UInt256", v14484, false, true);
      const v14937 = stdlib.safeMul256(v14936, v14935);
      const v14938 = stdlib.safeDiv256(v14937, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14939;
      const v14940 = stdlib.ge256(v14933, v14938);
      if (v14940) {
        v14939 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14941 = stdlib.safeSub256(v14938, v14933);
        v14939 = v14941;
        }
      const v14942 = stdlib.cast("UInt256", "UInt", v14939, false, true);
      const v14943 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '0')];
      const v14944 = stdlib.le(v14942, v14943);
      const v14945 = v14944 ? v14942 : v14943;
      const v14956 = v14932[stdlib.checkedBigNumberify('./staker.rsh:182:54:array ref', stdlib.UInt_max, '1')];
      const v14958 = v14893[stdlib.checkedBigNumberify('./staker.rsh:184:74:array ref', stdlib.UInt_max, '1')];
      const v14960 = stdlib.safeMul256(v14936, v14958);
      const v14961 = stdlib.safeDiv256(v14960, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v14962;
      const v14963 = stdlib.ge256(v14956, v14961);
      if (v14963) {
        v14962 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v14964 = stdlib.safeSub256(v14961, v14956);
        v14962 = v14964;
        }
      const v14965 = stdlib.cast("UInt256", "UInt", v14962, false, true);
      const v14966 = v10780[stdlib.checkedBigNumberify('./staker.rsh:190:54:array ref', stdlib.UInt_max, '1')];
      const v14967 = stdlib.le(v14965, v14966);
      const v14968 = v14967 ? v14965 : v14966;
      const v14969 = [v14945, v14968];
      const v14977 = stdlib.sub(v10789, v14945);
      ;
      const v14978 = v10788[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v14979 = v14978[stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v14983 = stdlib.sub(v14979, v14968);
      const v14985 = stdlib.Array_set(v14978, '0', v14983);
      const v14986 = stdlib.Array_set(v10788, stdlib.checkedBigNumberify('./staker.rsh:298:60:application', stdlib.UInt_max, '0'), v14985);
      ;
      const v14988 = stdlib.safeSub(v14943, v14945);
      const v14990 = stdlib.safeSub(v14966, v14968);
      const v15003 = stdlib.cast("UInt", "UInt256", v14945, false, true);
      const v15004 = stdlib.safeAdd256(v14933, v15003);
      const v15006 = stdlib.cast("UInt", "UInt256", v14968, false, true);
      const v15007 = stdlib.safeAdd256(v14956, v15006);
      const v15008 = [v15004, v15007];
      const v15009 = {
        rewards: v15008,
        stake: v14484
        };
      await stdlib.mapSet(map0, v11358, v15009);
      const v15014 = [v14988, v14990];
      const v15015 = {
        totalRemaining: v15014,
        userReceived: v14969
        };
      const v15020 = v15009.stake;
      const v15021 = stdlib.safeSub(v10781, v14478);
      const v15022 = stdlib.safeSub(v15020, v14478);
      const v15027 = v15009.rewards;
      const v15031 = v14986[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1')];
      const v15032 = v15031[stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '0')];
      const v15036 = stdlib.sub(v15032, v14478);
      const v15038 = stdlib.Array_set(v15031, '0', v15036);
      const v15039 = stdlib.Array_set(v14986, stdlib.checkedBigNumberify('./staker.rsh:259:41:application', stdlib.UInt_max, '1'), v15038);
      ;
      const v15040 = v15027[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '0')];
      const v15042 = stdlib.cast("UInt", "UInt256", v14478, false, true);
      const v15043 = stdlib.safeMul256(v15042, v14935);
      const v15044 = stdlib.safeDiv256(v15043, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v15045;
      const v15046 = stdlib.ge256(v15044, v15040);
      if (v15046) {
        v15045 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v15047 = stdlib.safeSub256(v15040, v15044);
        v15045 = v15047;
        }
      const v15048 = v15027[stdlib.checkedBigNumberify('./staker.rsh:258:50:array ref', stdlib.UInt_max, '1')];
      const v15051 = stdlib.safeMul256(v15042, v14958);
      const v15052 = stdlib.safeDiv256(v15051, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v15053;
      const v15054 = stdlib.ge256(v15052, v15048);
      if (v15054) {
        v15053 = stdlib.checkedBigNumberify('./staker.rsh:17:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v15055 = stdlib.safeSub256(v15048, v15052);
        v15053 = v15055;
        }
      const v15056 = [v15045, v15053];
      const v15057 = {
        rewards: v15056,
        stake: v15022
        };
      await stdlib.mapSet(map0, v11358, v15057);
      const v15058 = {
        newEveryoneStaked: v15021,
        newUserStaked: v15022
        };
      const v15063 = [v15058, v15015];
      const v15064 = await txn1.getOutput('Staker_withdrawAndHarvest', 'v15063', ctc18, v15063);
      if (v4725) {
        stdlib.protect(ctc0, await interact.out(v14342, v15064), {
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
      const v28120 = v14893;
      const v28121 = v11360;
      const v28122 = v15014;
      const v28123 = v15021;
      const v28125 = v15039;
      const v28126 = v14977;
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
    impure: [`Setup_abortSetup()byte[0]`, `Setup_fund()byte[0]`, `Staker_emergencyWithdraw()(uint64,uint64)`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `Staker_withdrawAndHarvest(uint64)((uint64,uint64),((uint64,uint64),(uint64,uint64)))`],
    pure: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,(uint64,uint64),(uint256,uint256),uint256)`, `Opts()(uint64,uint64,(uint64,uint64),uint64,uint64,address)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`],
    sigs: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,(uint64,uint64),(uint256,uint256),uint256)`, `Opts()(uint64,uint64,(uint64,uint64),uint64,uint64,address)`, `Setup_abortSetup()byte[0]`, `Setup_fund()byte[0]`, `Staker_emergencyWithdraw()(uint64,uint64)`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `Staker_withdrawAndHarvest(uint64)((uint64,uint64),((uint64,uint64),(uint64,uint64)))`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`]
    },
  GlobalNumByteSlice: 5,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAgABgIQAEEBgIQgAGIAbAC+AKIA/ACcHggBUnU5rnYBun41YMK0ri+yQy7i4TVDta1l7MImYT57gn+tt2GA4ewvrYDlZjmlwayyoveAezxy8MCoI0GJggBAAEBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJUC+QAAQIAAQMEZX6kEARisklVIjUAMRhBEzMnBGRJIls1AUkkWzUCIQhbNQgxGSEEEkEACjEAKCETr2ZCEvY2GgAXSUEEvSI1BCEENQZJIRQMQAJySSEVDEAAnUkhFgxAAIdJIRcMQAAmIRcSRDQBIQYSRIFIrzYaAYgS80k1/1cBSDT/IlVNV0AINQdCErYhFhJENAFJIQcMQAA5SSEGDEAAGyEGEkQoZClkUCtkUCcFZFBJNQNXIFA1B0IShyEHEkQoZClkUCtkUEk1A1cgUDUHQhJwIQQSRChkKWRQSTUDVyBQNQdCElwhFRJEJwQ1/yg0/1BCDhtJIRgMQAG2SSEZDEAAECEZEkQ2GgE1/ys0/1BCBAwhGBJENAEhBhJENhoCFzX/KGQpZFArZFAnBWRQSTUDSUpKIQlbNf4hCls1/SELJVg1/CEOWzX7IQwhCFg1+iENW0k1+SISQQAHNPw1+EIAhjT/NP1JNP8OTTX3NPs0/kk0+w9NSTX2NPcPSTX0QQAGIjX1QgAHNPc09gk19SOvNPkWUDXzNPRBAAYiNfJCAAc09zT2CTXyNPxXACA0A1ewICOvNPUWUKOIEfg086KIEfKgiBHuNPxXICA0A1fQICOvNPIWUKOIEdo086KIEdSgiBHQUDX4NANX8EAkr1A2GgGIEXVJNfZXAUg09iJVTUk191cAQEk19lcAIDX1I68091dACFBJNfQ0+FcAIKOIEZIqoogRjTXzNPU086dBAAcyAzXyQgAKNPM09aGIEXQ18jTySZMlDkQjWzXxNPoiWzXwNPZXICA17zT0NPhXICCjiBFPKqKIEUo17jTvNO6nQQAHMgM17UIACjTuNO+hiBExNe007UmTJQ5EI1s17DT6JFs16zTwNPFJNPAOTRY06zTsSTTrDk0WUDUHQhCQIRQSRDYaATX/JwU0/1BCAlxJIRoMQABBSSEbDEAAK0khHAxAABIhHBJEJwQ1/yk0/1Akr1BCAjUhGxJENhoBNf+AAQQ0/1BCAiMhGhJEJwQ1/yk0/1BCDAVJIR0MQABSSSEeDEAAOSEeEkQ0ASEGEkQoZClkUCtkUCcFZFBJNQNXIFA0AyENJFhQNAMhDCEIWFA0AyELJVhQKlA1B0IP8CEdEkQnBDX/KDT/UCSvUEIBu4Ge8vFwEkQ0ASEGEkQoZClkUCtkUCcFZFBJNQNJSkohCVs1/yEKWzX+IQslWDX9IQ5bNfwhDCEIWDX7IQ1bSTX6IhJBAAc0/TX5QgCGNPw0/kk0/A5NNfg0/DT/STT8D01JNfc0+A9JNfVBAAYiNfZCAAc0+DT3CTX2I680+hZQNfQ09UEABiI180IABzT4NPcJNfM0/VcAIDQDV7AgI6809hZQo4gPqjT0oogPpKCID6A0/VcgIDQDV9AgI6808xZQo4gPjDT0oogPhqCID4JQNfk0A1fwQCSvUDYaAYgPJ0k191cBSDT3IlVNSTX4VwBASTX3VwAgNfYjrzT4V0AIUEk19TT5VwAgo4gPRCqiiA8/NfQ09jT0p0EABzIDNfNCAAo09DT2oYgPJjXzNPNJkyUORCNbNfI0+yJbNfE091cgIDXwNPU0+VcgIKOIDwEqoogO/DXvNPA076dBAAcyAzXuQgAKNO808KGIDuM17jTuSZMlDkQjWzXtNPskWzXsNPE08kk08Q5NFjTsNO1JNOwOTRZQNQdCDkI2GgIXNQQ2GgM2GgEXSSEHDEALEUkhBQxACfEhBRJEIQY0ARJENARJIhJMNAISEUQoZClkUCtkUCcFZFBJNQNJSkpKSkpKSlcAIDX/VyBQNf4hD1s1/SEQWzX8IQlbNfshCls1+leQIDX5V7AgNfhX0CA191fwQDX2IQslWDX1IQ5bNfQhDCEIWDXzIQ1bNfKBkAOBIlg18YGyA1s18Ek1BTXvgATVjh2rNO9QsDTvIlVJIQcMQAaCSYEDDEAE6kkhBQxAAxMhBRJENO9XAQg15rEisgEhBrIQNAiyGLM05hc15TT2JK9QMQCIDX9JNeNXAUg04yJVTUk15CVbNeM05TTjDkQ08iISQQAHNPU14kIAgDIGNPpJMgYOTTXhNPQ0+0k09A9NSTXgNOEPSTXeQQAGIjXfQgAHNOE04Ak13yOvNPIWUDXdNN5BAAYiNdxCAAc04TTgCTXcNPVXACA0+COvNN8WUKOIDUs03aKIDUWgiA1BNPVXICA09yOvNNwWUKOIDTA03aKIDSqgiA0mUDXiNORXAEBJNeFXACA14DTiVwAgNd8jrzTjFlBJNd4036OIDQAqoogM+zXdNOA03adBAAcyAzXcQgAKNN004KGIDOI13DTcSZMlDkQjWzXbNPMiW0k12jTbSTTaDk012TThVyAgNdg04lcgIDXXNN4016OIDK8qoogMqjXWNNg01qdBAAcyAzXVQgAKNNY02KGIDJE11TTVSZMlDkQjWzXUNPMkW0k10zTUSTTTDk010rEisgE02bIIIQSyEDEAsgezNPFXABE10TTxNNFJIls00gkWXABcADXQsSKyATTSshIhBbIQMQCyFDT9shGzNOAjrzTZFlCgiAwqNNgjrzTSFlCgiAweUDTjFlA1zzEAKCk0z1BmNNo02QkWNNM00gkWUDXONNkWNNIWUDTOUDXNNPI05Qk1zDTPJVs05Qk1yzTPVwBANco00FcRETXJsSKyATTlshIhBbIQMQCyFDT8shGzNMpXACA1yCOvNOUWUEk1xzTfo4gLqyqiiAumSTXGNMinQQAHMgM1xUIACjTINMahiAuONcU0ylcgIDXENMc016OIC30qoogLeEk1wzTEp0EABzIDNcJCAAo0xDTDoYgLYDXCMQAoKTTFNMJQNMsWUFBmNMsWNMwWUDXBgAgAAAAAAAA61zTBNM1QULA0wTTNUDUHJwYxAFA0zVAxAFCwJwcxAFA05RZQNMFQMQBQsDT/NP40/TT8NPs0+jT5NPg09zT2NOIyBjTONMwyBjTQNMlJIls05QkWXABcETTwNNkJQgmFSDTvVwEINeaxIrIBIQayEDQIshizNOYXNeU09iSvUDEAiApvSTXjVwFINOMiVU1JNeQlWzXjNOU04w5ENPFXERE14jTyIhJBAAc09TXhQgCAMgY0+kkyBg5NNeA09DT7STT0D01JNd804A9JNd1BAAYiNd5CAAc04DTfCTXeI6808hZQNdw03UEABiI120IABzTgNN8JNds09VcAIDT4I6803hZQo4gKNDTcoogKLqCICio09VcgIDT3I6802xZQo4gKGTTcoogKE6CICg9QNeE08jTlCTXgNOM05Qk13zTkVwBANd6xIrIBNOWyEiEFshAxALIUNPyyEbM03lcAIDXdI6805RZQSTXcNOFXACCjiAnJKqKICcRJNds03adBAAcyAzXaQgAKNN0026GICaw12jTeVyAgNdk03DThVyAgo4gJmCqiiAmTSTXYNNmnQQAHMgM110IACjTZNNihiAl7NdcxACgpNNo011A03xZQUGY03xY04BZQNdaACAAAAAAAADcuNNZQsDTWNQcnBzEAUDTlFlA01lAxAFCwNP80/jT9NPw0+zT6NPk0+DT3NPY04TIGNPM04DIGNPE04kkiWzTlCRZcAFwRNPBCB7VINO9XAQg15rEisgEhBrIQNAiyGLM05hc15TT0NPoMRDTlIg1ENPFXERE15DTlNPyICLk08iISQQAHNPU140IAgDIGNPpJMgYOTTXiNPQ0+0k09A9NSTXhNOIPSTXfQQAGIjXgQgAHNOI04Qk14COvNPIWUDXeNN9BAAYiNd1CAAc04jThCTXdNPVXACA0+COvNOAWUKOICHQ03qKICG6giAhqNPVXICA09yOvNN0WUKOICFk03qKICFOgiAhPUDXjNPI05Qg14jT2JK9QMQCIB/FJNeBXAUg04CJVTUk14SVbNOUINeA04VcAQDXfI6805RZQNd4xACgpNN9XACA03jTjVwAgo4gIAyqiiAf+oIgH+jTfVyAgNN4041cgIKOIB+oqoogH5aCIB+FQNOAWUFBmNOAWNOIWUDXdgAgAAAAAAAAz5zTdULA03TUHgATavE2NMQBQNOUWUDTdULA0/zT+NP00/DT7NPo0+TT4NPc09jTjMgY08zTiMgY08TTkSSJbNOUIFlwAXBE08EIGJEkhBAxAAh1IsSKyASEGshA0CLIYszTyIhJBAAc09TXmQgCAMgY0+kkyBg5NNeU09DT7STT0D01JNeQ05Q9JNeJBAAYiNeNCAAc05TTkCTXjI6808hZQNeE04kEABiI14EIABzTlNOQJNeA09VcAIDT4I6804xZQo4gHATThoogG+6CIBvc09VcgIDT3I6804BZQo4gG5jThoogG4KCIBtxQNeY09iSvUDEAiAaFSTXkVwFINOQiVU1JNeUlWzXkNOVXAEBJNeNXACA14iOvNOQWUEk14TTmVwAgo4gGniqiiAaZNeA04jTgp0EABzIDNd9CAAo04DTioYgGgDXfNN9JkyUORCNbNd408yJbSTXdNN5JNN0OTTXcNONXICA12zThNOZXICCjiAZRKqKIBkw12jTbNNqnQQAHMgM12UIACjTaNNuhiAYzNdk02UmTJQ5EI1s12DTzJFtJNdc02Ek01w5NNdaxIrIBNNyyCCEEshAxALIHszTxVwARNdWxIrIBNNayEiEFshAxALIUNP2yEbMxACgpNOIjrzTcFlCgiAXZNNsjrzTWFlCgiAXNUDTkFlBQZjTdNNwJFjTXNNYJFlA11DTcFjTWFlA01FA104AIAAAAAAAAMKo001CwNNM1BycGMQBQNNNQMQBQsDT/NP40/TT8NPs0+jT5NPg09zT2NOYyBjTUNPIyBjTxNNVJIls01gkWXABcADTwNNwJQgQASDTxVxERNeY09iSvUDEAiAT8STXkVwFINOQiVU1JNeUlWzXkNPI05Ak14ySvNOMWUDXigAgAAAAAAAAtLDTiULA04jUHsSKyATTkshIhBbIQMQCyFDT8shGzMQAoKTTlVwBAJK9QUGaABLNhcLQxAFA05BZQNOJQMQBQsDT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNOMyBjTxNOZJIls05AkWXABcETTwQgNSIQcSRCEHNAESRDQESSISTDQCEhFEKGQpZFArZFBJNQNJSkpJVwAgNf8hD1s1/iEQWzX9IQlbNfxXoCA1+4HAAVs1+lfIIjX5STUFNfiABNnfPAs0+FCwNPgiVUAAaDEANP8SMQA0+xIRRIAIAAAAAAAAGBOwJwQ1B7EisgE0+VcAESJbshIhBbIQNP+yFDT+shGzsSKyASKyEiEFshAyCbIVMgqyFDT9shGzsSKyASKyEiEFshAyCbIVMgqyFDT+shGzQgMPMQA0+xJENPqIA56ACAAAAAAAACoJsCcENQclrzX3NP80A1cgUDT+NP00/DQDIQpbNPs0A1fqIDQDgYoCIRFYNPdJNPw0A1eQECIyBjT5NPpCAjlJIQQMQAEASCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSklXACA1/1cgUDX+IQ9bNf0hEFs1/FeAIjX7gaIBWzX6gaoBWzX5V7IQNfhXwiA194HiAVs19oHqAVs19YAEmouRdLA0+1cAETX0NPs09EkiWzT1CBZcAFwANfM09TT9iALoNP8xABJEI680A1fyCFA18iOvNPYWUCqjiALuNPKiiALoNfEjrzT1FlAqo4gC2zTyoogC1TXwNP80/lA0/RZQNPwWUDT6FlA0+RZQNPhQNPdQNPYWUDTzUDTxUDTwUChLAVcAf2cpSwFXf39nK0sBV/4sZ0ghBzUBMgY1AkIB40iBwJoMiAJHsSKyASEGshAishiABgcxADIJErIegAEHsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSVcAUDX/gVBbNf6BWFs1/YAE+QofjzT/UDT+FlA0/RZQsIERr0k1/ElQSTX7SVcAESSvXABcAEk1+klXEREkr1wAXBE1+TT9NP4TRCEfiAHDsSKyASKyEiEFshAyCrIUNP6yEbMhH4gBqrEisgEishIhBbIQMgqyFDT9shGzNP8hEVs1+DT/gShbNfc0+DT3DEQ0/1cQEDX2NP9XMCA19TT2Ils19DT2JFs18zT3NPgJNfIxADT/UDT+FlA0/RZQNPlQNPgWUDT3FlA09lA09VA09BZQNPMWUDTyFlAoSwFXAH9nKUsBV397Z0ghBDUBMgY1AkIAsTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwSTXvNPBQNPEWUDTyFlA08xZQNPQWUDT1UDT2UDT3UDT4UDT5UDT6FlA0+1A0/BZQNP5QNP8WUChLAVcAf2cpSwFXf39nK0sBV/5/ZycFSwGB/QKBPVhnSCEGNQEyBjUCQgAuMRkhEhJEsSKyASEGshA0CLIYIRKyGbOxIrIBIrIIIQSyEDIJsgkyCrIHs0IABTEZIhJEJwQ0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkhBAgyBBJEMRYSRCEEQzEZIhJEQv/dIjE0EkQhEjE1EkQiMTYSRCEEMTcSRCI1ASI1AiI1CEL/o0kxGGFAAAVIIROviShiiTQASUohBAg1ADgHMgoSRDgQIQQSRDgIEkSJNABJSkkhBAg1ADgUMgoSRDgQIQUSRDgRTwISRDgSEkSJSRUhEUwJr0xQiQ==`,
  appClear: `Bw==`,
  companionInfo: {
    api_Staker_harvest: 1,
    api_Staker_stake: 1,
    api_Staker_withdraw: 1,
    api_Staker_withdrawAndHarvest: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 73,
  stateKeys: 4,
  stateSize: 442,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T21","name":"v28179","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"v1","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T21","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T17","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T15","name":"which","type":"uint8"},{"internalType":"bool","name":"_Setup_abortSetup0_150","type":"bool"},{"internalType":"bool","name":"_Setup_fund0_150","type":"bool"}],"internalType":"struct T15","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T18","name":"which","type":"uint8"},{"internalType":"bool","name":"_Staker_emergencyWithdraw0_2229","type":"bool"},{"internalType":"bool","name":"_Staker_harvest0_2229","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_stake0_2229","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdraw0_2229","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdrawAndHarvest0_2229","type":"tuple"}],"internalType":"struct T18","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10761","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v11564","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"v0","type":"tuple"}],"name":"_reach_oe_v12458","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v13287","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"v0","type":"tuple"}],"name":"_reach_oe_v14126","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"elem0","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"v0","type":"tuple"}],"name":"_reach_oe_v15063","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6163","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"opts","type":"tuple"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"remainingRewards","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"lastRewardsPerShare_","type":"tuple"},{"internalType":"uint256","name":"REWARDS_PREC","type":"uint256"}],"internalType":"struct T5","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Opts","outputs":[{"components":[{"internalType":"address payable","name":"rewardToken1","type":"address"},{"internalType":"address payable","name":"stakeToken","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"rewards","type":"tuple"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address payable","name":"Rewarder0","type":"address"}],"internalType":"struct T4","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Setup_abortSetup","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Setup_fund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Staker_emergencyWithdraw","outputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Staker_harvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"internalType":"struct T7","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v28163","type":"uint256"}],"name":"Staker_stake","outputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v28168","type":"uint256"}],"name":"Staker_withdraw","outputs":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v28173","type":"uint256"}],"name":"Staker_withdrawAndHarvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"newUserStaked","type":"uint256"},{"internalType":"uint256","name":"newEveryoneStaked","type":"uint256"}],"internalType":"struct T6","name":"elem0","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"userReceived","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"totalRemaining","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"_rewards","type":"tuple"},{"internalType":"uint256","name":"_stake","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"v28181","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T15","name":"which","type":"uint8"},{"internalType":"bool","name":"_Setup_abortSetup0_150","type":"bool"},{"internalType":"bool","name":"_Setup_fund0_150","type":"bool"}],"internalType":"struct T15","name":"elem1","type":"tuple"}],"internalType":"struct T16","name":"v28183","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T18","name":"which","type":"uint8"},{"internalType":"bool","name":"_Staker_emergencyWithdraw0_2229","type":"bool"},{"internalType":"bool","name":"_Staker_harvest0_2229","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_stake0_2229","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdraw0_2229","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T17","name":"_Staker_withdrawAndHarvest0_2229","type":"tuple"}],"internalType":"struct T18","name":"elem1","type":"tuple"}],"internalType":"struct T19","name":"v28192","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v28137","type":"address"}],"name":"rewardsAvailable","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v28140","type":"address"},{"internalType":"uint256","name":"v28141","type":"uint256"}],"name":"rewardsAvailableAt","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v28144","type":"address"}],"name":"staked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062005a1a38819003601f8101601f191683016001600160401b038111848210176200085057839282916040528339810103906101408212620009af5760405191608083016001600160401b0381118482101762000850576040528151835260e0601f19820112620009af576040519060c08201906001600160401b03821183831017620008505760409182526200009b6020850162000a08565b8352620000aa82850162000a08565b6020840152605f190112620009af576200012d9161012091604051620000d081620009b4565b6060830151815260808301516020820152604082015260a0820151606082015260c082015160808201526200010860e0830162000a08565b60a0820152602085015262000121610100820162000a08565b60408501520162000a08565b6060820152436003556040516101a081016001600160401b038111828210176200085057600091610180916040528281526040516200016c81620009d0565b6200017662000a1d565b81528360208201526040516200018c81620009b4565b8481528460208201526040820152604051620001a881620009b4565b84815284602082015260608201528360808201526020820152620001cb62000a1d565b6040820152826060820152826080820152604051620001ea81620009b4565b83815283602082015260a08201526200020262000a76565b60c08201526040516200021581620009b4565b83815283602082015260e08201526040516200023181620009b4565b8381528360208201526101008201526040516200024e81620009b4565b6040516200025c81620009b4565b84815284602082015281526200027162000a76565b60208201526101208201526040516200028a81620009b4565b838152836020820152610140820152604051620002a781620009b4565b838152836020820152610160820152015260405190620002c782620009d0565b620002d162000ac0565b8252620002dd62000af0565b6020830152620002ec62000af0565b6040830152620002fb62000af0565b60608301526000608083015260ff6004541662000996577f181a83270dd502d23287bae953b47e08d1066cf056b774902d788028cc67134f61016060405133815283516020820152620003576020850151604083019062000b2a565b60408401516001600160a01b03908116610120830152606085015116610140820152a18051801590811562000989575b501562000970576000825152600060208351015260006040835101528151602083015152815160208084015101526020820151805160406020820151910151151560405191620003d783620009ec565b6000835260208301526040820152620003ef62000af0565b9160005b600281106200093657505081528060408401526020810151604060208201519101511515604051916200042683620009ec565b60008352602083015260408201526200043e62000af0565b9160005b60028110620008fc575050602082015260608381019190915281015160408201516001600160a01b03908116911603620008f45760005b15620008db5734620008c2576020810151608060608201519101511115620008a957602081015160606080820151910151810390811162000893576080830152604051916001600160401b03610180840190811190841117620008505760206040816080946101808701835260008752620004f362000a1d565b82880152600083880152600060608801526200050e62000af0565b86880152600060a0880152600060c088015282516200052d81620009b4565b6000815260008382015260e08801526000610100880152600061012088015260006101408801526000610160880152338752818101518288015260018060a01b0383820151168388015260018060a01b036060820151166060880152606085015186880152606082820151015160a08801528582820151015160c08801528282820151015160e088015260018060a01b0360a0838301510151166101008801528282820151015151610120880152015101510151610140840152015161016082015260016000554360015560405190336020830152620006166020820151604084019062000b2a565b60408101516001600160a01b039081166101208401526060820151166101408301526080810151600061016084015b60028210620008665760a084015161022086015260c084015161024086015260e08401518051610260870152602001516102808601526101008401516001600160a01b03166102a08601526101208401516102c08601526101408401516102e08601526101608401516103008087019190915285528461032081016001600160401b03811182821017620008505760405280516001600160401b0381116200085057600254600181811c9116801562000845575b60208210146200082f57601f8111620007c5575b50602091601f82116001146200075b579181926000926200074f575b50508160011b916000199060031b1c1916176002555b604051614e79908162000ba18239f35b01519050828062000729565b601f19821692600260005260206000209160005b858110620007ac5750836001951062000792575b505050811b016002556200073f565b015160001960f88460031b161c1916905582808062000783565b919260206001819286850151815501940192016200076f565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000824575b601f0160051c01905b8181106200081757506200070d565b6000815560010162000808565b9091508190620007ff565b634e487b7160e01b600052602260045260246000fd5b90607f1690620006f9565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000645565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b600162000479565b62000908818362000b78565b5162000915828662000b78565b5262000922818562000b78565b506000198114620008935760010162000442565b62000942818362000b78565b516200094f828662000b78565b526200095c818562000b78565b5060001981146200089357600101620003f3565b60405163100960cb60e01b8152600f6004820152602490fd5b9050600154143862000387565b60405163100960cb60e01b8152600e6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200085057604052565b60a081019081106001600160401b038211176200085057604052565b606081019081106001600160401b038211176200085057604052565b51906001600160a01b0382168203620009af57565b6040519060c082016001600160401b0381118382101762000850576040528160a060009182815282602082015260405162000a5881620009b4565b83815283602082015260408201528260608201528260808201520152565b6040519062000a8582620009b4565b8160405162000a9481620009b4565b6000815260006020820152815260206040519162000ab283620009b4565b600083526000828401520152565b60405190606082016001600160401b03811183821017620008505760405260006040838281528260208201520152565b60409081519162000b0183620009b4565b8260005b82811062000b1257505050565b60209062000b1f62000ac0565b818401520162000b05565b60c09060a0600180821b039182815116855282602082015116602086015260206040820151805160408801520151606086015260608101516080860152608081015182860152015116910152565b90600281101562000b8a5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461019457806336e56ea51461018b5780634012e02e146101825780635657588e14610179578063573b8510146101705780636f0fe5c914610167578063832307571461015e5780638608c1c5146101555780638712236d1461014c5780638f3e1f411461014357806398807d841461013a578063ab53f2c614610131578063b0c1f58a14610128578063c527ddba1461011f578063d288171c14610116578063e07352ca1461010d578063e280954914610104578063e82b89a4146100fb5763f396fd8b0361000e576100f66110be565b61000e565b506100f6611075565b506100f661101d565b506100f6610f49565b506100f6610e88565b506100f6610e49565b506100f6610dfc565b506100f6610d87565b506100f6610cb7565b506100f6610c5e565b506100f6610c00565b506100f6610a61565b506100f6610a42565b506100f6610705565b506100f6610471565b506100f6610404565b506100f661031f565b506100f661020f565b50346101b35760003660031901126101b3576020600354604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036101b357565b50634e487b7160e01b600052602160045260246000fd5b600211156101f657565b6101fe6101d5565b565b60208091805184520151910152565b50346101b35760203660031901126101b35760a0610240600435610232816101c4565b61023a6113f4565b50611436565b602060408051928051610252816101ec565b845282810151151583850152015161026e604084018251610200565b01516080820152f35b6001600160a01b03169052565b60c09060a0600180821b03918281511685528260208201511660208601526102b460408201516040870190610200565b60608101516080860152608081015182860152015116910152565b91909161018060806101a08301946102e8848251610284565b602081015160e08501526103056040820151610100860190610200565b6103186060820151610140860190610200565b0151910152565b50346101b35760003660031901126101b35761033961151e565b506103bd60206103476115c0565b61034f61165e565b61035d6006600054146118ad565b61014061037961036b611245565b8580825183010191016117a6565b848101518351526101a0810151858451015261018081015160408451015201516060825101526402540be400608082510152519182910152604051918291826102cf565b0390f35b90604060206101fe936103d5848251610200565b0151910190610200565b6101fe909291926040602060c08301956103fa848251610200565b01519101906103c1565b5060203660031901126101b35761041961159e565b506103bd6101206104286115c0565b61046381610434611fae565b600435815152602081019060048251525160a082510152610453611f88565b9060008252516020820152612b7b565b0151604051918291826103df565b506020806003193601126101b3576104876115c0565b506106df61049436614b24565b6106da61049f614ba4565b936104bb6104b66104b260045460ff1690565b1590565b6118cd565b60408051338152845160208201529095907fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908790a16104ff6001600054146118ed565b61052d61051b61050d611245565b848082518301019101611e14565b945180159081156106e9575b5061190d565b610537341561192d565b608084015180519061057b82519261014092610576848a0195865101928c898201519101511515906105676112ee565b9485528985015215158c840152565b614661565b835287808701966105a061059b6105928a516101b8565b8651903361461e565b61194d565b6105bc3360018060a01b036105b584516101b8565b161461196d565b610160948582015191878201928352610602610120936105fa858401986105ee6105e68b51614534565b8451906145b3565b97860197885251614534565b9051906145b3565b95606083019687526106448d61063c610619614bee565b9d8e61062e61062888516101b8565b8261210f565b8d80880151910152516101b8565b908d0161210f565b61065d61065460608401516101b8565b60608d0161210f565b60a082015160808c015260c082015160a08c015260e082015160c08c015261069661068d610100809401516101b8565b60e08d0161210f565b51908a01525190880152519086015251908401526106b46002600055565b6106bd43600155565b6106cc85519384928301614c7b565b03601f198101835282611222565b61492d565b5160008152602090f35b90506001541438610527565b6040810192916101fe9190610200565b50346101b35760403660031901126101b3576103bd600435610726816101c4565b61072e6113bb565b506107376115c0565b61073f6113bb565b6001600160a01b039092168252602435602080840191825261075f614d48565b91600061076f600682541461198d565b8261078961077b611245565b8280825183010191016117a6565b92856101a09182860180511560001461092a5750505061014084015186525b61022082610120998a8701516101008a019081515286838251015260016107e76107e26107dd6107d886516101b8565b6101b8565b611436565b612033565b6107f0816101ec565b0361092157506108086107dd6107d8604093516101b8565b0151995b880199808b52015161083761082c6101408a01928084528a515190614566565b6402540be400900490565b996101609a808c8b0152815151518181101560001461090d575050856101808a01525b8461087b61082c61018094858d0151978d0197885251838d51015190614566565b6101c08b0181905291515101518181106108f9575050846101e08901525b6101e08801516102008901908152925195018051519095908082116108f15750965b01805196909652519251015190508082116108e95750905b82510152519182910152604051918291826106f5565b9050906108d3565b9050966108bb565b610902916144ff565b6101e0890152610899565b610916916144ff565b6101808a015261085a565b9050519961080c565b60a087015191516109f89290808211610a3b57505b8584019080825261099460808a01516101608b015180821015600014610a335750935b60408701858152929094101560808701908152935b845115610a1c578960608801525b519360a0870194855251151590565b15610a055750508560c08401525b6109d1856109d7896109d16109c9610140830198606060e08b515195015191015190614566565b8651906145b3565b906144dd565b9460e08c0195865152510151916105fa6101008a015160c08d015190614566565b83825101525186526107a8565b610a1291519051906144ff565b60c08401526109a2565b610a2984518451906144ff565b6060880152610985565b905093610962565b905061093f565b50346101b35760003660031901126101b3576020600154604051908152f35b50346101b3576020806003193601126101b3576103bd9060043590610a85826101c4565b610a8d6113bb565b50610a966115c0565b90610a9f614d48565b906000610aaf60068254146119ad565b610ac8610aba611245565b8380825183010191016117a6565b90826101a085818501805115600014610b9f57505061014084015186525b61022082610120998a870151906101008a019182515286838351015260018060a01b0316906001610b196107e284611436565b610b22816101ec565b03610b965750610b33604091611436565b0151995b880199808b52015161014099610b5961082c8c8b01938085528b515190614566565b6101608a018190528151515181811061090d575050856101808a01528461087b61082c61018094858d0151978d0197885251838d51015190614566565b90505199610b37565b60a086015161016087018051610bec939290808211610bf957505b84870181815260808a01519251909261099491808210610a335750604087018181529211156080870190815293610977565b8382510152518652610ae6565b9050610bba565b5060203660031901126101b357610c156113bb565b506040610100610c236115c0565b610c4e81610c2f611fae565b6004358151526020810190600382515251608082510152610453611f88565b0151610c5c82518092610200565bf35b5060003660031901126101b35760206060610c776115c0565b610cab81610c83611efc565b8581019060008251525115158682510152610c9c611efc565b906000825251868201526121eb565b01511515604051908152f35b50346101b3576020806003193601126101b3576101806103bd9160043590610cde826101c4565b610ce66115c0565b91610cef614dea565b90610cfe6006600054146119cd565b610d17610d09611245565b8480825183010191016117a6565b506000825152600083835101528282519201918251526000838351015260018060a01b0316906001610d4b6107e284611436565b610d54816101ec565b03610d7f5750610d65604091611436565b01515b015191018190526040519081529081906020820190565b905051610d68565b50346101b357600080600319360112610df9578054610da4611245565b906040519283918252602090604082840152835191826040850152815b838110610de257505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610dc1565b80fd5b5060203660031901126101b357610e116113bb565b50604060e0610e1e6115c0565b610c4e81610e2a611fae565b6004358151526020810190600282515251606082510152610453611f88565b5060003660031901126101b35760206080610e626115c0565b610cab81610e6e611efc565b858101906001825152511515604082510152610c9c611efc565b5060e03660031901126101b357610e9d6115c0565b60405190610eaa8261118e565b600435825260c03660231901126101b35760405191610ec8836111b6565b6024359260058410156101b357610f2d938152604435610ee78161171f565b6020820152610ef4614d3b565b6040820152610f0236614b44565b6060820152610f1036614b64565b6080820152610f1e36614b84565b60a08201526020820152612b7b565b60405160008152602090f35b60e0810192916101fe9190610284565b50346101b35760003660031901126101b357610f636114e6565b506103bd6040610f716115c0565b6000546002811015610fb9576001610f899114611a2d565b6020610fa4610f96611245565b828082518301019101611e14565b0151828201525b015160405191829182610f39565b6006811015610ff4576002610fce9114611a0d565b6020610fe9610fdb611245565b828082518301019101611d4b565b015182820152610fab565b600661100091146119ed565b6020610fe961077b611245565b6080810192916101fe91906103c1565b5060003660031901126101b35761103261157c565b50608060c061103f6115c0565b6110668161104b611f88565b60208101906001825152511515604082510152610453611f88565b0151610c5c60405180926103c1565b5060003660031901126101b35761108a6113bb565b50604060a06110976115c0565b610c4e816110a3611f88565b60208101906000825152511515602082510152610453611f88565b5060803660031901126101b3576110d36115c0565b604051906110e08261118e565b600435825260603660231901126101b357604051916110fe836111d1565b6024359260028410156101b357610f2d93815260443561111d8161171f565b602082015260643561112e8161171f565b604082015260208201526121eb565b90600182811c9216801561116d575b602083101461115757565b634e487b7160e01b600052602260045260246000fd5b91607f169161114c565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176111a957604052565b6111b1611177565b604052565b60c081019081106001600160401b038211176111a957604052565b606081019081106001600160401b038211176111a957604052565b602081019081106001600160401b038211176111a957604052565b60a081019081106001600160401b038211176111a957604052565b601f909101601f19168101906001600160401b038211908210176111a957604052565b60405190600082600254916112598361113d565b8083526001938085169081156112cd575060011461127f575b506101fe92500383611222565b60026000908152600080516020614e0d83398151915294602093509091905b8183106112b55750506101fe935082010138611272565b8554888401850152948501948794509183019161129e565b90506101fe94506020925060ff191682840152151560051b82010138611272565b604051906101fe826111d1565b604051906101a082016001600160401b038111838210176111a957604052565b6040519061020082016001600160401b038111838210176111a957604052565b6040519061018082016001600160401b038111838210176111a957604052565b6040519061022082016001600160401b038111838210176111a957604052565b60405190610d0082016001600160401b038111838210176111a957604052565b6040519061024082016001600160401b038111838210176111a957604052565b604051906113c88261118e565b60006020838281520152565b604051906113e18261118e565b60006020836113ee6113bb565b81520152565b60405190611401826111d1565b81600081526000602082015260406114176113d4565b910152565b6001600160a01b0316600090815260056020526040902090565b9061143f6113f4565b9160018060a01b031660009080825260209160058352604091600160ff848420541661146a816101ec565b036114da57815260058352819020815193945091611487846111d1565b60ff8354818116611497816101ec565b865260081c1615158185015260038251936114b18561118e565b83516114bc8161118e565b60018201548152600282015484820152855201549083015282015290565b50809291508452830152565b604051906114f3826111b6565b600060a0838281528260208201526115096113bb565b60408201528260608201528260808201520152565b6040519060a082016001600160401b0381118382101761156f575b60405260006080836115496114e6565b81528260208201526115596113bb565b60408201526115666113bb565b60608201520152565b611577611177565b611539565b604051906115898261118e565b816115926113bb565b815260206114176113bb565b604051906115ab8261118e565b816115b46113bb565b8152602061141761157c565b6115c86112fb565b90600082526115d561151e565b60208301526115e26114e6565b604083015260006060830152600060808301526115fd6113bb565b60a083015261160a61157c565b60c08301526116176113bb565b60e08301526116246113bb565b61010083015261163261159e565b6101208301526116406113bb565b61014083015261164e6113bb565b6101608301526000610180830152565b6040519061166b826111ec565b8161167461151e565b9052565b51906101fe826101c4565b91908260409103126101b35760405161169b8161118e565b6020808294805184520151910152565b91909160e0818403126101b35760a060c0604051926116c9846111b6565b6116f7849682516116d9816101c4565b865260208301516116e9816101c4565b602087015260408301611683565b60408501526080810151606085015282810151608085015201519161171b836101c4565b0152565b801515036101b357565b9080601f830112156101b3576040918251926117448461118e565b839260c08301928184116101b357935b83851061176357505050505090565b6060858303126101b357825160609161177b826111d1565b865182526020918288015183820152858801516117978161171f565b86820152815201940193611754565b906103c0828203126101b3576103a06117bd61131b565b926117c781611678565b84526117d683602083016116ab565b60208501526101006117e9818301611678565b60408601526118a061012094611800868501611678565b60608801526101408085015160808901526101608086015160a08a01526101809061182c828801611678565b60c08b01526101a0928388015160e08c01526101c09687890151908c01526101e09961185a868c8b01611683565b908c015261186c856102208a01611683565b908b0152610260870151908a0152611888836102808801611683565b908901526102c0850151908801526102e08401611729565b9085015201519082015290565b156118b457565b60405163100960cb60e01b815260076004820152602490fd5b156118d457565b60405163100960cb60e01b815260136004820152602490fd5b156118f457565b60405163100960cb60e01b815260146004820152602490fd5b1561191457565b60405163100960cb60e01b815260156004820152602490fd5b1561193457565b60405163100960cb60e01b815260166004820152602490fd5b1561195457565b60405163100960cb60e01b815260176004820152602490fd5b1561197457565b60405163100960cb60e01b815260186004820152602490fd5b1561199457565b60405163100960cb60e01b8152600c6004820152602490fd5b156119b457565b60405163100960cb60e01b8152600b6004820152602490fd5b156119d457565b60405163100960cb60e01b8152600d6004820152602490fd5b156119f457565b60405163100960cb60e01b8152600a6004820152602490fd5b15611a1457565b60405163100960cb60e01b815260096004820152602490fd5b15611a3457565b60405163100960cb60e01b815260086004820152602490fd5b15611a5457565b60405163100960cb60e01b815260196004820152602490fd5b15611a7457565b60405163100960cb60e01b8152601a6004820152602490fd5b15611a9457565b60405163100960cb60e01b8152601b6004820152602490fd5b15611ab457565b60405163100960cb60e01b8152601e6004820152602490fd5b15611ad457565b60405163100960cb60e01b8152601f6004820152602490fd5b15611af457565b60405163100960cb60e01b8152601c6004820152602490fd5b15611b1457565b60405163100960cb60e01b8152601d6004820152602490fd5b15611b3457565b60405163100960cb60e01b815260206004820152602490fd5b15611b5457565b60405163100960cb60e01b815260216004820152602490fd5b15611b7457565b60405163100960cb60e01b815260226004820152602490fd5b15611b9457565b60405163100960cb60e01b8152602e6004820152602490fd5b15611bb457565b60405163100960cb60e01b8152602f6004820152602490fd5b15611bd457565b60405163100960cb60e01b815260306004820152602490fd5b15611bf457565b60405163100960cb60e01b8152602b6004820152602490fd5b15611c1457565b60405163100960cb60e01b8152602c6004820152602490fd5b15611c3457565b60405163100960cb60e01b8152602d6004820152602490fd5b15611c5457565b60405163100960cb60e01b815260276004820152602490fd5b15611c7457565b60405163100960cb60e01b815260286004820152602490fd5b15611c9457565b60405163100960cb60e01b815260296004820152602490fd5b15611cb457565b60405163100960cb60e01b8152602a6004820152602490fd5b15611cd457565b60405163100960cb60e01b815260256004820152602490fd5b15611cf457565b60405163100960cb60e01b815260266004820152602490fd5b15611d1457565b60405163100960cb60e01b815260236004820152602490fd5b15611d3457565b602460405163100960cb60e01b8152816004820152fd5b90610300828203126101b3576102e0611d6261133b565b92611d6c81611678565b8452611d7b83602083016116ab565b602085015261010092611d8f848301611678565b6040860152610120611da2818401611678565b6060870152611dfd61014092838501516080890152610160968786015160a08a0152611dd2826101808801611683565b60c08a0152611de46101c08701611678565b60e08a01526101e0860151908901526102008501611729565b908601526102c08201519085015201519082015290565b610300818303126101b3576102e090611e2b61133b565b92611e3582611678565b8452611e4481602084016116ab565b6020850152610100611e57818401611678565b604086015261012090611e6b828501611678565b6060870152611ea861014093611e8381868801611729565b608089015261020086015160a089015261022086015160c08901526102408601611683565b60e0870152611eba6102808501611678565b908601526102a0830151908501526102c082015190840152015161016082015290565b60405190611eea826111d1565b60006040838281528260208201520152565b60405190611f098261118e565b81600081526020611417611edd565b60405190611f25826111ec565b60008252565b60405190611f38826111b6565b8160a0600091828152826020820152826040820152604051611f59816111ec565b8381526060820152604051611f6d816111ec565b838152608082015260405192611f82846111ec565b83520152565b60405190611f958261118e565b81600081526020611417611f2b565b600511156101f657565b60405190611fbb8261118e565b81604051611fc8816111ec565b6000815281526020611417611f2b565b60405190611fe5826111ec565b816116746113bb565b9092916040602060809260a085019660018060a01b031685528051828601520151805161201a816101ec565b8285015260208101511515606085015201511515910152565b5161203d816101ec565b90565b60409081519161204f8361118e565b8260005b82811061205f57505050565b60209061206a611edd565b8184015201612053565b61207c61135b565b90600080835261208a6114e6565b60208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401526120c26113bb565b6101208401526120d06113bb565b610140840152806101608401526120e56113bb565b610180840152806101a0840152806101c0840152612101612040565b6101e0840152610200830152565b6001600160a01b039091169052565b90600281101561212f5760051b0190565b634e487b7160e01b600052603260045260246000fd5b818110612150575050565b60008155600101612145565b50634e487b7160e01b600052601160045260246000fd5b61217e60025461113d565b806121865750565b601f811160011461219957506000600255565b60026000526121de90601f0160051c600080516020614e0d833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612145565b6000602081208160025555565b6121f3611fd8565b9061220b6122066104b260045460ff1690565b611a4d565b6040927f17ec5e38ba31c24e430a6a804a7954ae08580921024aa52b2d69ed2100c2e7d084518061223d853383611fee565b0390a161226e6000936122536002865414611a6d565b61225b611245565b6020928184808094518301019101611d4b565b94612284815180159081156124d2575b50611a8d565b0161228f8151612033565b612298816101ec565b61235857505050829361232a936060612308936122b86107d887516101b8565b330361233e576122c86001611aed565b6122d23415611b0d565b8351600081527f1a30561631ef53b116e75654b632ae5cad71f57b94200cf94fb1fb90af44fbdd90602090a101528201516101b8565b61012061231583516101b8565b9201515151916001600160a01b0316906124de565b80556123366000600155565b6101fe612173565b6122c86123516107d860e08901516101b8565b3314611aed565b61236a60019196929495939651612033565b612373816101ec565b14612381575b505050505050565b6124c79560e083016123a06123996107d883516101b8565b3314611aad565b61242a61010092846080858801996123ba8b513414611acd565b8351600081527f18c7c457bc7528f33ae42807da64a4a000e2e8a5b5fef441ee185030a023220e90602090a10152848751528489885101526123fa612074565b9861240e61240888516101b8565b8b61210f565b80870151908a0152612422818701516101b8565b90890161210f565b61244361243a60608601516101b8565b6060890161210f565b61246e6124656080860192835160808b015260a087015160a08b0152516101b8565b60c0890161210f565b6101408085015160e089015261016092838601519089015285519561012096878a01525190880152519086015260c08201516101808601526101a0850152436101c085015201516101e083015251610200820152614a10565b388080808080612379565b9050600154143861227e565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261255a93600093849392849190608081016001600160401b03811182821017612561575b6040525193165af161254a61254361256e565b80926125d0565b50602080825183010191016125bb565b156101b357565b612569611177565b612530565b3d156125b6573d906001600160401b0382116125a9575b6040519161259d601f8201601f191660200184611222565b82523d6000602084013e565b6125b1611177565b612585565b606090565b908160209103126101b3575161203d8161171f565b156125d85790565b8051156125e757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156126085790565b80511561261757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b61263861137b565b906126416113d4565b825261264b6113d4565b602083015260008060408401526126606113bb565b606084015261266d6113d4565b608084015261267a6113bb565b60a08401528060c08401528060e0840152806101008401528061012084015280610140840152806101608401526126af6113bb565b6101808401526126bd6113d4565b6101a08401526126cb6113d4565b6101c0840152806101e08401528061020084015280610220840152806102408401528061026084015280610280840152806102a0840152806102c0840152806102e08401526127186113bb565b6103008401526127266113bb565b6103208401526127346113d4565b6103408401526127426113bb565b61036084015261275061157c565b61038084015261275e611f18565b6103a084015261276c6113bb565b6103c0840152806103e084015280610400840152806104208401528061044084015280610460840152806104808401526127a46113bb565b6104a0840152806104c08401526127b96113d4565b6104e08401526127c76113d4565b61050084015280610520840152806105408401526127e36113bb565b6105608401526127f16113d4565b6105808401526127ff6113bb565b6105a084015261280d611f18565b6105c084015261281b6113d4565b6105e08401526128296113d4565b6106008401526128376113bb565b610620840152806106408401528061066084015280610680840152806106a0840152806106c0840152806106e084015261286f6113bb565b61070084015280610720840152806107408401528061076084015280610780840152806107a0840152806107c0840152806107e08401526128ae6113bb565b6108008401526128bc6113d4565b6108208401526128ca6113bb565b6108408401526128d8611f18565b6108608401526128e66113d4565b6108808401526128f46113d4565b6108a08401526129026113bb565b6108c0840152806108e0840152806109008401528061092084015280610940840152806109608401528061098084015261293a6113bb565b6109a0840152806109c0840152806109e084015280610a0084015280610a2084015280610a4084015280610a6084015280610a8084015280610aa084015280610ac08401526129876113bb565b610ae0840152612995612040565b610b008401526129a36113bb565b610b208401526129b16113d4565b610b408401526129bf6113bb565b610b608401526129cd61157c565b610b8084015280610ba084015280610bc084015280610be084015280610c0084015280610c2084015280610c40840152610c60830152612a0b6113bb565b610c80830152612a196113d4565b610ca0830152612a276113bb565b610cc0830152612a3561159e565b610ce0830152565b90929160a0602060e092610100850196600180851b03168552805182860152015180516005811015612aa4575b60408501526020810151151560608501526040810151151560808501526060810151518285015260808101515160c0850152015151910152565b612aac6101d5565b612a6a565b516005811015612abe5790565b61203d6101d5565b506040513d6000823e3d90fd5b805460ff19166001179055565b90602060029181815180518655015160018501550151910155565b6001600160a01b03918216815260c081019493909260a0929190612b239060208601906103c1565b16910152565b9293612b23608093969560a086019760018060a01b03809516875260208701526040860190610200565b6001600160a01b03909116815260208101919091526080810192916101fe9160400190610200565b612b83612630565b90612b9b612b966104b260045460ff1690565b611b2d565b7f2ca0da82a4ec26bb1c4144c2b5da2c4594a4450e25721ba32acee6edda58015960405180612bcb843383612a3d565b0390a1612bdc600660005414611b4d565b6020612be961077b611245565b91612bff815180159081156144d1575b50611b6d565b01612c0a8151612ab1565b612c1381611fa4565b612eb85750612e9a6101fe93612c293415611d0d565b6060830193612c49612c44612c3e87516101b8565b336145c3565b611d2d565b6101209081850191825182515260006020835101526001612c6c6107e233611436565b612c75816101ec565b03612eb0576040612c8533611436565b0151925b7fcd678def18eb21025b1186b60acc0f9a3d6f132e105815f3bc04e905f74b502f6020840195858752612d72612ccb6101a0976020898d0151910151906144ff565b95604081019687526060810192600084515287516020855101527fca35ae28a11ba5e8656347543d6476f4e5bccaa018238395f12225539a786d78612d178551604051918291826106f5565b0390a160a08451910152612d3c612d2e8d516101b8565b60208b5101519033906124de565b60808951519101908151526000602082510152612d60612d5b3361141c565b612ad3565b516001612d6c3361141c565b01612ae0565b6020875101519051612d8c60405192839233913385612b29565b0390a1612de3612dda612d9d612074565b99612db1612dab8b516101b8565b8c61210f565b60208a015160208c0152612dd4612dcb60408c01516101b8565b60408d0161210f565b516101b8565b60608a0161210f565b6080870151608089015260a087015160a0890152612e10612e0760c08901516101b8565b60c08a0161210f565b60e087015160e08901526101008088015190890152519087015261014080860151908701526101608086015190870152610180808601519087015251908501526101c04381860152830151612e95602082015192602084519151015190039260406020820151910151151590612e846112ee565b948552602085015215156040840152565b6146be565b906101e091828401520151610200820152614a10565b815192612c89565b6001612ec78294939451612ab1565b612ed081611fa4565b036134345750600080516020614e2d8339815191526131986101fe94612ef63415611ccd565b612f0e612f09612c3e60608801516101b8565b611ced565b6101a08501516133185761014085015160a08501525b6101208501516101a085019081515260006020825101526001612f496107e233611436565b612f52816101ec565b036133095750612f8a61082c60206040612f6b33611436565b01515b806101c08901520151806101e088015260a08701515190614566565b61020085018190526101c085015151518181106132f557505060006102208501525b6102208401516102408501819052610180860151518082116132ee57505b610260850152612feb61082c6101e0860151602060a0880151015190614566565b61028085018190526101c085015151602001518181106132da57505060006102a08501525b6102a08401516102c08501819052610180860151602001518082116132d357505b6102e08501526102608401516103008501908151526102e085015160208251015260008080806102608901518181156132ca575b3390f1156132bd575b61308c61307e60408801516101b8565b6102e08701519033906124de565b6130f56130a66101c08701515151610260880151906144dd565b6103208701908151526130c960206101c08901515101516102e0890151906144dd565b6020825101525161034087019081515260206101c08801510151602082510152612d60612d5b3361141c565b61310b61018087015151610260870151906144ff565b6103608601515261312b602061018088015101516102e0870151906144ff565b6020610360870151015251906103808501918251526103608501516020835101527fc5ddc52c2bca4b842624c6c0c97c0e1124b5b07fb0b4b01d592c0bb72b9a688f61317e83516040519182918261100d565b0390a160c082519101525160405191829133903384612afb565b0390a16102606101e06131a9612074565b936131bd6131b782516101b8565b8661210f565b602081015160208601526131e06131d760408301516101b8565b6040870161210f565b6131f96131f060608301516101b8565b6060870161210f565b6080810151608086015260a081015160a086015261322661321d60c08301516101b8565b60c0870161210f565b60e081015160e0860152610100808201519086015261012081015161012086015260a0840151610140860152436101608601526103608401516101808601526101a08101516101a0860152436101c08601526132a76101c082015180519061057682516102e089015190039260406020820151910151151590612e846112ee565b8286015201519101519003610200820152614a10565b6132c5612ac6565b61306e565b506108fc613065565b9050613031565b6132e3916144ff565b6102a0850152613010565b9050612fca565b6132fe916144ff565b610220850152612fac565b61082c6020612f8a9251612f6e565b60a085015143811161342d575b6133e6856109d160c08201938085526105fa60808b01519561016096878d0151808210156000146134255750905b60e086018281529390911080156101208701908152919061340d5760006101008701525b6101a08d0151936133916101409384890196875251151590565b156133f75750506000878601525b8b019560206133cb8d6109d16133c360e08c5151930151610100809b015190614566565b8751906145b3565b976101808d0198895152510151948c0151908b015190614566565b6020825101525160a0850152612f24565b61340491519051906144ff565b8786015261339f565b61341a81518551906144ff565b610100870152613377565b905090613353565b5043613325565b60026134408251612ab1565b61344981611fa4565b036138b357606090510151906103a08101918252610160908184019182519561347860a0870197885111611c4d565b6134858551511515611c6d565b61348f3415611c8d565b60608601966134b36134ae6134a48a516101b8565b885151903361461e565b611cad565b6134e26101a09585878a01918a8351156000146137a45761014001516103c089015250505b51875151906144dd565b936104c08101948552610120918289019182516104e0820190815152600060208251015260016135146107e233611436565b61351d816101ec565b0361379d5750604061352e33611436565b0151945b610500820195808752602001518a515161354b916144dd565b61052083019081528a5151966105408401888152815151516103c08601998a515161357591614566565b6402540be4009004613586916144dd565b9161056086019283515251516020015190518951602001516135a791614566565b6402540be40090046135b8916144dd565b815160200152516105808401908151528151815160200152336135da9061141c565b6135e390612ad3565b516135ed3361141c565b600101906135fa91612ae0565b51916105a001918251528751825160200152815160405161361c8192826106f5565b037f92d18ef5c920fc246e1f838cfe29d67235814fd5ba9ff1ac359c442ea66c26bb91a181519060e001528851519051604051918291339161365e9284612b53565b037fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec91a161368a612074565b998951613696906101b8565b6136a0908c61210f565b60208a015160208c015260408a01516136b8906101b8565b6136c59060408d0161210f565b516136cf906101b8565b6136dc9060608c0161210f565b608089015160808b01525160a08a015260c08801516136fa906101b8565b6137079060c08b0161210f565b60e088015160e08a015261010080890151908a01525190880152516101408701524390860152610180808501519086015251908401526101c0438185015282015190602082015190815190515101906020810151906040015115159061376b6112ee565b928352602083015215156040820152613783916146be565b906101e0918284015201516102008201526101fe90614a10565b5194613532565b8551613861926109d1914381116138ab57905b6103e08601828152608085015191519091908082106138a35750915b6104008701838152921080156104408801908152929061388b5760006104208801525b8751610460880190815292511561387357505060006104808601525b6105fa610100602061014086016104a0613849886109d16138418d61042060e088515195015191015190614566565b8951906145b3565b9901988951525101519401516104808d015190614566565b602082510152516103c08701526134d8565b61388091519051906144ff565b610480860152613812565b61389882518251906144ff565b6104208801526137f6565b9050916137d3565b5043906137b7565b60036138c28295939551612ab1565b6138cb81611fa4565b03613d3557608090510151906105c08401918252610120938484019485516105e0830190815152600060208251015260016139086107e233611436565b613911816101ec565b03613d2e5750604061392233611436565b0151905b61394161060084019280845260208751519101511015611bed565b61394b3415611c0d565b6060860196613965613960612c3e8a516101b8565b611c2d565b6101a094613990868901805115600014613c25576101408a01516106208801525b51885151906144ff565b9461072081019586526139ab602086510151895151906144ff565b61074082019081526139cb6139c08c516101b8565b8a51519033906124de565b885151956020613a1f61082c61076086018a81526139f461082c61062089019c8d515190614566565b61078088018190528551515190818110613c1157505060006107a08801525b51838b51015190614566565b6107c08501819052915151015190818110613bfd57505060006107e08301525b6107a08201516108008301908151526107e083015181516020015251610820830190815152815181516020015233613a769061141c565b613a7f90612ad3565b51613a893361141c565b60010190613a9691612ae0565b5190610840019081515285518151602001528051604051613ab88192826106f5565b037f0a28f992dbbe4f537ab2bfcbce503d532a1c31e2af98d3cbdc96a3df88b39ca791a1805161010080930152875151905160405191829133903392613afe9385612b29565b03600080516020614e4d83398151915291a1613b18612074565b988851613b24906101b8565b613b2e908b61210f565b602089015160208b01526040890151613b46906101b8565b613b539060408c0161210f565b51613b5d906101b8565b613b6a9060608b0161210f565b608088015160808a015260a088015160a08a015260c0880151613b8c906101b8565b613b999060c08b0161210f565b60e088015160e08a0152808801519089015251908701525161014086015243610160860152610180808501519086015251908401526101c043818501528201519060208201519081519051519003906020810151906040015115159061376b6112ee565b613c06916144ff565b6107e0830152613a3f565b613c1a916144ff565b6107a0880152613a13565b60a08a0151438111613d27575b610640880181815260808c01516101608d0151808210613d1f5750915b6106608a01838152921080156106a08b019081529290613d075760006106808b01525b83516106c08b01908152925115613cef57505060006106e08901525b613cdd8b6109d16101408201936105fa8c6106e06101006020613cc48a51516109d161384160e08c015161068089015190614566565b9961070085019a8b515251015196015191015190614566565b60208251015251610620880152613986565b613cfc91519051906144ff565b6106e0890152613c8e565b613d1482518251906144ff565b6106808b0152613c72565b905091613c4f565b5043613c32565b5190613926565b6004613d448295939551612ab1565b613d4d81611fa4565b14613d59575b50505050565b61433e9360a0600080516020614e4d8339815191529251015161086084015261012084015161088084019081515260006020825101526001613d9d6107e233611436565b613da6816101ec565b036144c75750613dd76040613dba33611436565b01515b806108a08601526020610860860151519101511015611b8d565b613de13415611bad565b613df9613df4612c3e60608701516101b8565b611bcd565b6101a08401516143bb576101408401516108c08401525b613e3461082c60206108a08601510151806109c08701526108c08601515190614566565b6109e084018190526108a084015151518181106143a75750506000610a008401525b610a00830151610a208401819052610180850151518082116143a057505b610a40840152613e9661082c6109c085015160206108c0870151015190614566565b610a6084018190526108a0840151516020015181811061438c5750506000610a808401525b610a80830151610aa084018190526101808501516020015180821161438557505b610ac0840152610a40830151610ae084015152610ac08301516020610ae085015101526000808080610a4087015181811561437c575b3390f11561436f575b613f4a6101c08501518051906105768251610ac088015190039260406020820151910151151590612e846112ee565b610b00840152613f6e613f6060408601516101b8565b610ac08501519033906124de565b613f856108a08401515151610a40850151906144dd565b610b20840190815152613fa860206108a0860151510151610ac0860151906144dd565b60208251015251610b408401515260206108a084015101516020610b408501510152613fd6612d5b3361141c565b613fea610b408401516001612d6c3361141c565b61400061018085015151610a40850151906144ff565b610b608401515261402060206101808601510151610ac0850151906144ff565b6020610b608501510152610ae0830151610b8084015152610b608301516020610b80850151015261405d6101a085015161086085015151906144ff565b610ba084015261407d6020610b40850151015161086085015151906144ff565b610bc084019081526140a461409560608701516101b8565b610860860151519033906124de565b61410161082c610860860151516140cd61082c610be08901928084526108c08a01515190614566565b610c008801819052610b4088015151519081811061435b5750506000610c208801525b5160206108c0880151015190614566565b610c408501819052610b408501515160200151908181106143475750506000610c608501525b614163610c20850151610c80860190815152610c6086015160208251015251610ca08601908151528251602082510152612d60612d5b3361141c565b5190610cc0840191825152610ba08401516020835101526101208251610ce0860190815152610b808601516020825101527f6e8e065ec5216a13fb77fa01a7fcac6fc715e57ee9b3d2aa944e07a21fcd36866141c68251604051918291826103df565b0390a151910152600080516020614e2d8339815191526141f4610b8085015160405191829133903384612afb565b0390a161086083015151905161421260405192839233913385612b29565b0390a1610a40614220612074565b9261423461422e82516101b8565b8561210f565b6020810151602085015261425761424e60408301516101b8565b6040860161210f565b61427061426760608301516101b8565b6060860161210f565b6080810151608085015260a081015160a085015261429d61429460c08301516101b8565b60c0860161210f565b60e081015160e085015261010080820151908501526101208101516101208501526108c083015161014085015243610160850152610b60830151610180850152610ba08301516101a0850152436101c0850152614323610b00840151602081015190612e9582516108608801515190039260406020820151910151151590612e846112ee565b906101e0918286015201519101519003610200820152614a10565b38808080613d53565b614350916144ff565b610c60850152614127565b614364916144ff565b610c208801526140f0565b614377612ac6565b613f1b565b506108fc613f12565b9050613edc565b614395916144ff565b610a80840152613ebb565b9050613e74565b6143b0916144ff565b610a00840152613e56565b60a08401514381116144c0575b6108e0840181815260808601516101608701518082106144b85750915b610900860183815292108015610940870190815292906144a05760006109208701525b6101a0870151610960870190815292511561448857505060006109808501525b6144766101408601916109d160206144538551516109d16109c960e08d01516109208d015190614566565b946109a0890195865152510151916105fa6101008a01516109808a015190614566565b602082510152516108c0840152613e10565b61449591519051906144ff565b610980850152614428565b6144ad82518251906144ff565b610920870152614408565b9050916143e5565b50436143c8565b613dd79051613dbd565b90506001541438612bf9565b91908201918281116144f2575b82106101b357565b6144fa61215c565b6144ea565b90810390811161450c5790565b61203d61215c565b811561451e570490565b634e487b7160e01b600052601260045260246000fd5b906402540be400918060001904831181151516614559575b828102928304036101b357565b61456161215c565b61454c565b60009291801591821561457d575b5050156101b357565b9150925080600019048311811515166145a6575b61459e8382029384614514565b143880614574565b6145ae61215c565b614591565b9080156101b35761203d91614514565b600061203d928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261460781611207565b5193165af161254a61461761256e565b8092612600565b60009161203d9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261460781611207565b919061466b612040565b9260005b6002811061467d5750508252565b8061468a6001928461211e565b51614695828861211e565b526146a0818761211e565b5060001981146146b1575b0161466f565b6146b961215c565b6146ab565b91906146c8612040565b9260005b600281106146dd5750506020830152565b806146ea6001928461211e565b516146f5828861211e565b52614700818761211e565b506000198114614711575b016146cc565b61471961215c565b61470b565b61472661131b565b9060008083526147346114e6565b60208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015261476c6113bb565b61012084015261477a6113bb565b6101408401528061016084015261478f6113bb565b610180840152806101a08401526147a4612040565b6101c08401526101e0830152565b6000915b600283106147c357505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906147b6565b9190916103a0816103c081019461480a828251610277565b61481c60208201516020840190610284565b61031860408201516148346101009182860190610277565b60608301519061484a6101209283870190610277565b6148d16080850151610140908188015260a086015161016090818901526148ba60c08801519261488061018094858c0190610277565b6148ac60e08a0151966101a097888d01528a0151976101c098898d01528a01516101e0809c0190610200565b8801516102208c0190610200565b8601516102608a0152850151610280890190610200565b8301516102c08701528201516102e08601906147b2565b90601f82116148f5575050565b6101fe9160026000526020600020906020601f840160051c83019310614923575b601f0160051c0190612145565b9091508190614916565b80519091906001600160401b038111614a03575b6149558161495060025461113d565b6148e8565b602080601f83116001146149915750819293600092614986575b50508160011b916000199060031b1c191617600255565b01519050388061496f565b6002600052601f19831694909190600080516020614e0d833981519152926000905b8782106149eb5750508360019596106149d2575b505050811b01600255565b015160001960f88460031b161c191690553880806149c7565b806001859682949686015181550195019301906149b3565b614a0b611177565b614941565b6106cc6106da6101fe92614a2261471e565b90614a36614a3082516101b8565b8361210f565b60208101516020830152614a59614a5060408301516101b8565b6040840161210f565b614a72614a6960608301516101b8565b6060840161210f565b6080810151608083015260a081015160a0830152614a9f614a9660c08301516101b8565b60c0840161210f565b60e081015160e0830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a080820151908301526102006101e091828101516101c0850152015190820152614b0c6006600055565b614b1543600155565b604051928391602083016147f2565b60209060031901126101b35760405190614b3d826111ec565b6004358252565b60209060831901126101b35760405190614b5d826111ec565b6084358252565b60209060a31901126101b35760405190614b7d826111ec565b60a4358252565b60209060c31901126101b35760405190614b9d826111ec565b60c4358252565b60405190608082016001600160401b03811183821017614be1575b6040526000606083614bcf612040565b81528260208201528260408201520152565b614be9611177565b614bbf565b6040519061018082016001600160401b03811183821017614c6e575b604052600080835261016083614c1e6114e6565b60208201528260408201528260608201528260808201528260a0820152614c436113bb565b60c08201528260e082015282610100820152614c5d612040565b610120820152826101408201520152565b614c76611177565b614c0a565b9190916102e0610300820193614c92838251610277565b614ca460208201516020850190610284565b604081015190614cba6101009283860190610277565b6060810151614ccf6101209182870190610277565b614d2b608083015191610140928388015260a0840151946101609586890152614d0160c08601516101808a0190610200565b614d1460e08601516101c08a0190610277565b8401516101e08801528301516102008701906147b2565b8101516102c08501520151910152565b606435906101fe8261171f565b614d5061139b565b90614d596113bb565b825260008060208401528060408401528060608401528060808401528060a08401528060c0840152614d896113bb565b60e0840152614d966113d4565b610100840152614da46113d4565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152614de26113bb565b610220830152565b60405190614df78261118e565b81614e006113bb565b815260206114176113d456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acebad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c650a164736f6c6343000810000a`,
  BytecodeLen: 23066,
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
