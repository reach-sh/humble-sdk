// Automatically generated with Reach 0.1.12 (b99432c0*)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (b99432c0*)';
export const _backendVersion = 25;

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
                    "internalType": "struct T4",
                    "name": "rewards",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "Rewarder0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T5",
                "name": "v6038",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v6039",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v6040",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
        "internalType": "struct T26",
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
    "name": "EmergencyWithdraw",
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
            "internalType": "struct T4",
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
            "internalType": "struct T4",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
        "internalType": "struct T26",
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
        "internalType": "struct T26",
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
                    "internalType": "struct T4",
                    "name": "rewards",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "Rewarder0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T5",
                "name": "v6038",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v6039",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v6040",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T17",
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
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_abortSetup0_150",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_fund0_150",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v6140",
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
    "name": "_reach_e2",
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
                    "internalType": "enum _enum_T25",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_emergencyWithdraw0_2229",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_2229",
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
                    "internalType": "struct T24",
                    "name": "_Staker_stake0_2229",
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
                    "internalType": "struct T24",
                    "name": "_Staker_withdraw0_2229",
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
                    "internalType": "struct T24",
                    "name": "_Staker_withdrawAndHarvest0_2229",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T25",
                "name": "v11359",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
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
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v10761",
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
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v11564",
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
            "internalType": "struct T4",
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
            "internalType": "struct T4",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v12458",
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
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v13287",
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
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v14126",
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
                "name": "newUserStaked",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "newEveryoneStaked",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "elem0",
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
                "internalType": "struct T4",
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
                "internalType": "struct T4",
                "name": "totalRemaining",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v15063",
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
    "name": "_reach_oe_v6163",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
                "internalType": "struct T4",
                "name": "rewards",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "end",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "Rewarder0",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
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
            "internalType": "struct T4",
            "name": "remainingRewards",
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
            "name": "lastRewardsPerShare_",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "REWARDS_PREC",
            "type": "uint256"
          }
        ],
        "internalType": "struct T6",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Opts",
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
            "internalType": "struct T4",
            "name": "rewards",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "end",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "Rewarder0",
            "type": "address"
          }
        ],
        "internalType": "struct T5",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Setup_abortSetup",
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
    "name": "Setup_fund",
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
    "name": "Staker_emergencyWithdraw",
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
        "internalType": "struct T26",
        "name": "",
        "type": "tuple"
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
            "internalType": "struct T4",
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
            "internalType": "struct T4",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
        "internalType": "struct T26",
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
        "internalType": "struct T26",
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
    "name": "Staker_withdrawAndHarvest",
    "outputs": [
      {
        "components": [
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
            "internalType": "struct T26",
            "name": "elem0",
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
                "internalType": "struct T4",
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
                "internalType": "struct T4",
                "name": "totalRemaining",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
        "internalType": "struct T17",
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
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_abortSetup0_150",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_fund0_150",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v6140",
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
    "name": "_reach_m2",
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
                    "internalType": "enum _enum_T25",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_emergencyWithdraw0_2229",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_2229",
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
                    "internalType": "struct T24",
                    "name": "_Staker_stake0_2229",
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
                    "internalType": "struct T24",
                    "name": "_Staker_withdraw0_2229",
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
                    "internalType": "struct T24",
                    "name": "_Staker_withdrawAndHarvest0_2229",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T25",
                "name": "v11359",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
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
        "name": "v28133",
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
        "internalType": "struct T4",
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
        "name": "v28135",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v28136",
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
        "internalType": "struct T4",
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
        "name": "v28138",
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
  Bytecode: `0x60806040526040516200677a3803806200677a833981016040819052620000269162000601565b600080554360035562000038620003a1565b7f86d4fbbb239592c63665160c6b1537b4c4a76645fc65e7b6e566ad0dc88686ed33836040516200006b92919062000774565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015280518251606081018452858152825151850151948101949094529051620000de9491939192820190835b602002015160400151151590526200029a565b60408281018281528151606081018352600081528151602090810151810151908201529051620001189392600192919082019083620000cb565b8160600181905250620001618260200151602001516001600160a01b03168360200151604001516001600160a01b0316146200015657600162000159565b60005b600c6200031d565b6200016f3415600d6200031d565b60208201515160808101516060909101516200018e9111600e6200031d565b6020820151516080810151606090910151620001ab919062000348565b6080820152620001ba62000400565b33815260208084018051518284015280518201516001600160a01b0390811660408086019190915282518101518216606080870191909152868101516080808801919091528451519091015160a08088019190915284515182015160c088015284515183015160e08801528451510151909216610100860152825151810151516101208601529151518201518301516101408501528401516101608401526001600081905543905551620002719183910162000823565b6040516020818303038152906040526002908162000290919062000991565b5050505062000aa5565b620002a46200049f565b60005b6002811015620002fa57848160028110620002c657620002c6620007c7565b6020020151828260028110620002e057620002e0620007c7565b602002015280620002f18162000a73565b915050620002a7565b5081818460028110620003115762000311620007c7565b60200201529392505050565b81620003445760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000357838262000a8f565b91508111156200039b5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016200033b565b92915050565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101620003d56200049f565b8152602001620003e46200049f565b8152602001620003f36200049f565b8152602001600081525090565b60405180610180016040528060006001600160a01b0316815260200162000426620004ec565b81526000602082018190526040820152606001620004436200049f565b8152602001600081526020016000815260200162000474604051806040016040528060008152602001600081525090565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b60405180604001604052806002905b620004d5604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004ae5790505090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200162000535604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b031681525090565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562000594576200059462000559565b60405290565b604051606081016001600160401b038111828210171562000594576200059462000559565b60405160c081016001600160401b038111828210171562000594576200059462000559565b80516001600160a01b0381168114620005fc57600080fd5b919050565b60008183036101408112156200061657600080fd5b620006206200056f565b83518152601f198201610120808212156200063a57600080fd5b620006446200059a565b60e08312156200065357600080fd5b6200065d620005bf565b92506200066d60208801620005e4565b83526200067d60408801620005e4565b60208401526040605f19860112156200069557600080fd5b6200069f6200056f565b9450606087015185526080870151602086015284604084015260a0870151606084015260c08701516080840152620006da60e08801620005e4565b60a0840152828152620006f16101008801620005e4565b602082015262000703828801620005e4565b60408201526020840152509095945050505050565b60018060a01b0380825116835280602083015116602084015260408201516200074e604085018280518252602090810151910152565b5060608201516080840152608082015160a08401528060a08301511660c0840152505050565b60006101608201905060018060a01b038085168352835160208401526020840151620007a560408501825162000718565b6020810151821661012085015260400151166101409092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b8060005b60028110156200081d578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101620007e1565b50505050565b81516001600160a01b031681526103008101602083015162000849602084018262000718565b50604083015161010062000867818501836001600160a01b03169052565b6060850151915061012062000886818601846001600160a01b03169052565b608086015192506101406200089e81870185620007dd565b60a087015161020087015260c087015161022087015260e0870151805161024088015260200151610260870152918601516001600160a01b03166102808601528501516102a08501528401516102c084015250610160909201516102e09091015290565b600181811c908216806200091757607f821691505b6020821081036200093857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200098c57600081815260208120601f850160051c81016020861015620009675750805b601f850160051c820191505b81811015620009885782815560010162000973565b5050505b505050565b81516001600160401b03811115620009ad57620009ad62000559565b620009c581620009be845462000902565b846200093e565b602080601f831160018114620009fd5760008415620009e45750858301515b600019600386901b1c1916600185901b17855562000988565b600085815260208120601f198616915b8281101562000a2e5788860151825594840194600190910190840162000a0d565b508582101562000a4d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b60006001820162000a885762000a8862000a5d565b5060010190565b818103818111156200039b576200039b62000a5d565b615cc58062000ab56000396000f3fe60806040526004361061010c5760003560e01c80638f3e1f411161009a578063cc428ab211610061578063cc428ab2146102a6578063d9d7e3ee146102b9578063e07352ca146102cc578063e2809549146102ee578063e82b89a41461030357005b80638f3e1f411461023057806398807d8414610248578063ab53f2c614610268578063b0c1f58a1461028b578063c527ddba1461029e57005b80635657588e116100de5780635657588e1461019b5780636f0fe5c9146101bb57806383230757146101e85780638608c1c5146101fd5780638712236d1461021d57005b80631e93b0f1146101155780632c10a159146101395780633bc5b7bf1461014c5780634012e02e1461017957005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b610113610147366004614d46565b61030b565b34801561015857600080fd5b5061016c610167366004614d73565b61032f565b6040516101309190614db6565b34801561018557600080fd5b5061018e610346565b6040516101309190614e5f565b6101ae6101a9366004614eb9565b61035f565b6040516101309190614efe565b3480156101c757600080fd5b506101db6101d6366004614f2b565b610370565b6040516101309190614f57565b3480156101f457600080fd5b50600154610126565b34801561020957600080fd5b506101db610218366004614d73565b6103b2565b6101db61022b366004614eb9565b6103f1565b61023861040e565b6040519015158152602001610130565b34801561025457600080fd5b50610126610263366004614d73565b61041d565b34801561027457600080fd5b5061027d610440565b604051610130929190614f92565b6101db610299366004614eb9565b6104dd565b6102386104fa565b6101136102b4366004614fcc565b610504565b6101136102c7366004614fde565b610524565b3480156102d857600080fd5b506102e1610544565b6040516101309190614ff0565b6102f6610557565b6040516101309190614ffe565b6101db610567565b610313614052565b61032b6103253684900384018461510a565b82610583565b5050565b6103376140ef565b610340826108a0565b92915050565b61034e61410e565b600061035981610985565b91505090565b610367614179565b61034082610c04565b604080518082018252600080825260208083019190915282518084019093526001600160a01b03851683528201839052906103aa81610c45565b949350505050565b60408051808201909152600080825260208201526040805160208101909152600081526001600160a01b03831681526103ea81611182565b9392505050565b6040805180820190915260008082526020820152610340826113fd565b600061041861144a565b905090565b60408051602081019091526001600160a01b03821681526000906103ea81611477565b60006060600054600280805461045590615142565b80601f016020809104026020016040519081016040528092919081815260200182805461048190615142565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261034082611717565b6000610418611764565b61050c614052565b61032b61051e368490038401846151b8565b82611794565b61052c614052565b61032b61053e3684900384018461527c565b8261354d565b61054c6141a2565b6000610359816138cd565b61055f61420e565b610418613aea565b6040805180820190915260008082526020820152610418613b20565b6105936001600054146012613b62565b81516105ae9015806105a757508251600154145b6013613b62565b6000808055600280546105c090615142565b80601f01602080910402602001604051908101604052809291908181526020018280546105ec90615142565b80156106395780601f1061060e57610100808354040283529160200191610639565b820191906000526020600020905b81548152906001019060200180831161061c57829003601f168201915b50505050508060200190518101906106519190615449565b905061065b61424d565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16106ae3415600f613b62565b6107408260800151600060405180606001604052806106ed87608001516000600281106106dd576106dd61551f565b6020020151516101408901510190565b815260200186608001516000600281106107095761070961551f565b6020020151602001518152602001866080015160006002811061072e5761072e61551f565b60200201516040015115159052613b88565b815260408201516101408301516107649161075d91339190613bfc565b6010613b62565b815161077c906001600160a01b031633146011613b62565b61016082015160208201526101208201516107aa906107a0906402540be400613c0a565b8260200151613c69565b60408201526101408201516107c8906107a0906402540be400613c0a565b60608201526107d561427b565b82516001600160a01b0390811682526020808501518184015260408086015183168185015260608087015184168186015260a080880151608087015260c0808901519187019190915260e08089015191870191909152610100808901519095169086015261012080880151948601949094528551938501939093528481015161014085015291840151610160840152600260005543600155905161087b91839101615573565b60405160208183030381529060405260029081610898919061569e565b505050505050565b6108a86140ef565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156108d7576108d7614d90565b03610975576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561091757610917614d90565b600181111561092857610928614d90565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b600080825260208201525b919050565b61098d61410e565b600160005403610a47576000600280546109a690615142565b80601f01602080910402602001604051908101604052809291908181526020018280546109d290615142565b8015610a1f5780601f106109f457610100808354040283529160200191610a1f565b820191906000526020600020905b815481529060010190602001808311610a0257829003601f168201915b5050505050806020019051810190610a379190615449565b9050610a4560006007613b62565b505b600260005403610b0157600060028054610a6090615142565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8c90615142565b8015610ad95780601f10610aae57610100808354040283529160200191610ad9565b820191906000526020600020905b815481529060010190602001808311610abc57829003601f168201915b5050505050806020019051810190610af1919061575e565b9050610aff60006007613b62565b505b600660005403610bf857600060028054610b1a90615142565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4690615142565b8015610b935780601f10610b6857610100808354040283529160200191610b93565b820191906000526020600020905b815481529060010190602001808311610b7657829003601f168201915b5050505050806020019051810190610bab9190615837565b9050610bb561431e565b6020808301518251526101a08301518251909101526101808201518151604001526101409091015181516060015280516402540be4006080909101525192915050565b61098060006007613b62565b610c0c614179565b610c14614331565b6020810180515160049052515160a00151839052610c30614052565b610c3a8282611794565b60c001519392505050565b6040805180820190915260008082526020820152600160005403610d1357600060028054610c7290615142565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9e90615142565b8015610ceb5780601f10610cc057610100808354040283529160200191610ceb565b820191906000526020600020905b815481529060010190602001808311610cce57829003601f168201915b5050505050806020019051810190610d039190615449565b9050610d116000600a613b62565b505b600260005403610dcd57600060028054610d2c90615142565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5890615142565b8015610da55780601f10610d7a57610100808354040283529160200191610da5565b820191906000526020600020905b815481529060010190602001808311610d8857829003601f168201915b5050505050806020019051810190610dbd919061575e565b9050610dcb6000600a613b62565b505b60066000540361117657600060028054610de690615142565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1290615142565b8015610e5f5780601f10610e3457610100808354040283529160200191610e5f565b820191906000526020600020905b815481529060010190602001808311610e4257829003601f168201915b5050505050806020019051810190610e779190615837565b9050610e8161439b565b6101a0820151610e98576101408201518152610fc4565b83602001518260a001511115610eb2578360200151610eb8565b8160a001515b602082015261016082015160808301511015610ed957816101600151610edf565b81608001515b6040820181905260208201511180156080830152610f035760006060820152610f1b565b610f1581602001518260400151613cb3565b60608201525b6101a082015160a0820152608081015115610f3c57600060c0820152610f54565b610f4e81602001518260400151613cb3565b60c08201525b610f8582610140015160000151610f80610f768560e001518560600151613c0a565b8460a00151613c69565b613d02565b60e0820151526101408201516020015161010083015160c0830151610fb39291610f8091610f769190613c0a565b60e082018051602001919091525181525b610120820151610100820180519190915251600060209091015260018451610feb906108a0565b516001811115610ffd57610ffd614d90565b1461100d5780610100015161101d565b8351611018906108a0565b604001515b610120820181905260200151610140820181905281515161104c9161104191613c0a565b6402540be400613c69565b610160820181905261012082015151511061106e57600061018082015261108d565b61016081015161012082015151516110869190613cb3565b6101808201525b6101808101516101a08201526101408101518151602001516110b29161104191613c0a565b6101c082018190526101208201515160200151106110d75760006101e08201526110fa565b6110f3816101c001518261012001516000015160200151613cb3565b6101e08201525b6101e0810151610200820152610180820151516101a08201511115611125576101808201515161112c565b806101a001515b61022082015152610180820151602001516102008201511115611158578161018001516020015161115f565b8061020001515b610220909101805160200191909152519392505050565b6109806000600a613b62565b6040805180820190915260008082526020820152600160005403611250576000600280546111af90615142565b80601f01602080910402602001604051908101604052809291908181526020018280546111db90615142565b80156112285780601f106111fd57610100808354040283529160200191611228565b820191906000526020600020905b81548152906001019060200180831161120b57829003601f168201915b50505050508060200190518101906112409190615449565b905061124e60006009613b62565b505b60026000540361130a5760006002805461126990615142565b80601f016020809104026020016040519081016040528092919081815260200182805461129590615142565b80156112e25780601f106112b7576101008083540402835291602001916112e2565b820191906000526020600020905b8154815290600101906020018083116112c557829003601f168201915b50505050508060200190518101906112fa919061575e565b905061130860006009613b62565b505b6006600054036113f15760006002805461132390615142565b80601f016020809104026020016040519081016040528092919081815260200182805461134f90615142565b801561139c5780601f106113715761010080835404028352916020019161139c565b820191906000526020600020905b81548152906001019060200180831161137f57829003601f168201915b50505050508060200190518101906113b49190615837565b90506113be61439b565b6101a08201516113d5576101408201518152610fc4565b8161016001518260a001511115610eb257816101600151610eb8565b61098060006009613b62565b6040805180820190915260008082526020820152611419614331565b6020810180515160039052515160800151839052611435614052565b61143f8282611794565b60a001519392505050565b6000611454614477565b60208101515160009052611466614052565b611470828261354d565b5192915050565b60006001600054036115335760006002805461149290615142565b80601f01602080910402602001604051908101604052809291908181526020018280546114be90615142565b801561150b5780601f106114e05761010080835404028352916020019161150b565b820191906000526020600020905b8154815290600101906020018083116114ee57829003601f168201915b50505050508060200190518101906115239190615449565b90506115316000600b613b62565b505b6002600054036115ed5760006002805461154c90615142565b80601f016020809104026020016040519081016040528092919081815260200182805461157890615142565b80156115c55780601f1061159a576101008083540402835291602001916115c5565b820191906000526020600020905b8154815290600101906020018083116115a857829003601f168201915b50505050508060200190518101906115dd919061575e565b90506115eb6000600b613b62565b505b60066000540361170b5760006002805461160690615142565b80601f016020809104026020016040519081016040528092919081815260200182805461163290615142565b801561167f5780601f106116545761010080835404028352916020019161167f565b820191906000526020600020905b81548152906001019060200180831161166257829003601f168201915b50505050508060200190518101906116979190615837565b90506116a16144b0565b8051600090819052815160209081018290528251818401805191909152510152600184516116ce906108a0565b5160018111156116e0576116e0614d90565b146116ef5780602001516116ff565b83516116fa906108a0565b604001515b60200151949350505050565b6109806000600b613b62565b6040805180820190915260008082526020820152611733614331565b602081018051516002905251516060015183905261174f614052565b6117598282611794565b608001519392505050565b600061176e614477565b60208101515160019052611780614052565b61178a828261354d565b6020015192915050565b6117a46006600054146028613b62565b81516117bf9015806117b857508251600154145b6029613b62565b6000808055600280546117d190615142565b80601f01602080910402602001604051908101604052809291908181526020018280546117fd90615142565b801561184a5780601f1061181f5761010080835404028352916020019161184a565b820191906000526020600020905b81548152906001019060200180831161182d57829003601f168201915b50505050508060200190518101906118629190615837565b905061186c6144d9565b7f621bc490545d114655492d51b64d71212350282d33af1db13985cad8a5bb1ee4338560405161189d92919061594d565b60405180910390a160006020850151515160048111156118bf576118bf614d90565b03611bbd576118d03415601a613b62565b6118ea6118e33384606001516000613bfc565b601b613b62565b610120820151815152805160006020909101526001611908336108a0565b51600181111561191a5761191a614d90565b14611926578051611934565b61192f336108a0565b604001515b60208083018290526101a084015191015161194f9190613cb3565b6040808301918252606083018051600090529151825160200152905190517fca35ae28a11ba5e8656347543d6476f4e5bccaa018238395f12225539a786d789161199891614f57565b60405180910390a1806060015183604001819052506119c4826060015133836020015160200151613d4f565b602081810180515160808401805191909152805160009084018190523380825260048552604091829020805460ff1916600190811782559351805180519583019590955593860151600282015592850151600390930192909255915190920151606084015191517fcd678def18eb21025b1186b60acc0f9a3d6f132e105815f3bc04e905f74b502f93611a5b9390929183906159c9565b60405180910390a1611a6b614a7c565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e08088015186519091015261010080880151865190910152610120808801518651909101526101408701518386018051919091526101608801518151850152610180880151815184015286830151815183015251439401939093526101c086018051825194850190925251820151518583015190920151611b95939192600192918291035b8152602001876101c00151600160028110611b6f57611b6f61551f565b6020020151602001518152602001876101c0015160016002811061072e5761072e61551f565b60208201805160a001919091526101e0840151905160c00152611bb781613d68565b50613547565b6001602085015151516004811115611bd757611bd7614d90565b036121e457611be83415601c613b62565b611c02611bfb3384606001516000613bfc565b601d613b62565b6101a0820151611c1c5761014082015160a0820152611d4a565b438260a001511115611c2e5743611c34565b8160a001515b60c082015261016082015160808301511015611c5557816101600151611c5b565b81608001515b60e0820181905260c0820151118015610120830152611c81576000610100820152611c9a565b611c938160c001518260e00151613cb3565b6101008201525b6101a082015161014082015261012081015115611cbe576000610160820152611cd7565b611cd08160c001518260e00151613cb3565b6101608201525b611d0582610140015160000151610f80611cfa8560e00151856101000151613c0a565b846101400151613c69565b6101808201515261014082015160200151610100830151610160830151611d359291610f8091611cfa9190613c0a565b61018082018051602001919091525160a08201525b6101208201516101a082018051919091525160006020909101526001611d6f336108a0565b516001811115611d8157611d81614d90565b14611d9157806101a00151611d9f565b611d9a336108a0565b604001515b6101c08201819052602001516101e0820181905260a082015151611dc69161104191613c0a565b61020082018190526101c0820151515110611de8576000610220820152611e07565b6102008101516101c08201515151611e009190613cb3565b6102208201525b6102208101516102408201819052610180830151511015611e2e5761018082015151611e35565b8061024001515b6102608201526101e081015160a082015160200151611e579161104191613c0a565b61028082018190526101c0820151516020015110611e7c5760006102a0820152611e9f565b611e98816102800151826101c001516000015160200151613cb3565b6102a08201525b6102a08101516102c08201819052610180830151602001511015611ecc5781610180015160200151611ed3565b806102c001515b6102e08201908152610260820180516103008401805191909152915191516020019190915251604051339180156108fc02916000818181858888f19350505050158015611f24573d6000803e3d6000fd5b50611f39826040015133836102e00151613d4f565b6101c08101515151610260820151611f519190613d02565b610320820151526101c081015151602001516102e0820151611f739190613d02565b610320820180516020908101929092525161034083018051919091526101c083015182015181518301523360009081526004835260409020805460ff1916600190811782559151805180519383019390935591830151600282015591015160039091015561018082015151610260820151611fee9190613cb3565b61036082015152610180820151602001516102e082015161200f9190613cb3565b6103608201805160209081019290925261030083015161038084018051919091529051815190920191909152516040517fc5ddc52c2bca4b842624c6c0c97c0e1124b5b07fb0b4b01d592c0bb72b9a688f9161206a91614ffe565b60405180910390a1610380810180516060850152516040517fbad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b916120b29133919082906159fd565b60405180910390a16120c2614a7c565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a080890151875182015260c0808a01518851971696019590955260e08089015187519091015261010080890151875190910152610120808901518751909101529386015183860180519190915280514390850181905261036088015182518501526101a089015182518401529051909401939093526101c08601805182519485018352815151516102e08801519003855281515184015193850193909352516121ba936000929091908201908361072e565b602082015160a001526101e083015161026083015190035b602082015160c00152611bb781613d68565b60026020850151515160048111156121fe576121fe614d90565b036126d957602084015151606001516103a082015260a082015161016083015161222a9111601e613b62565b6103a08101515161223e901515601f613b62565b61224a34156020613b62565b61226c612265338460600151846103a0015160000151613bfc565b6021613b62565b6101a0820151612287576101408201516103c08201526123bd565b438260a001511115612299574361229f565b8160a001515b6103e0820152610160820151608083015110156122c1578161016001516122c7565b81608001515b61040082018190526103e08201511180156104408301526122ef57600061042082015261230a565b612303816103e00151826104000151613cb3565b6104208201525b6101a08201516104608201526104408101511561232e576000610480820152612349565b612342816103e00151826104000151613cb3565b6104808201525b61237782610140015160000151610f8061236c8560e00151856104200151613c0a565b846104600151613c69565b6104a082015152610140820151602001516101008301516104808301516123a79291610f809161236c9190613c0a565b6104a08201805160200191909152516103c08201525b6123d5826101a00151826103a0015160000151613d02565b6104c08201526101208201516104e082018051919091525160006020909101526001612400336108a0565b51600181111561241257612412614d90565b1461242257806104e00151612430565b61242b336108a0565b604001515b6105008201819052602001516103a08201515161244d9190613d02565b6105208201526103a081015151610540820181905261050082015151516103c08301515161248392610f80916110419190613c0a565b61056082015152610500810151516020908101516105408301516103c0840151909201516124b992610f80916110419190613c0a565b6105608201805160209081019290925251610580830180519190915261052083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516105a084018051919091526104c0840151815190930192909252905190517f92d18ef5c920fc246e1f838cfe29d67235814fd5ba9ff1ac359c442ea66c26bb9161256b91614f57565b60405180910390a16105a08101805160808501526103a08201515190516040517fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec926125de9233926001600160a01b03939093168352602080840192909252805160408401520151606082015260800190565b60405180910390a16125ee614a7c565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e08088015186519091015261010080880151865190910152610120808801518651909101526103c0860151838601805191909152805143940184905261018088015181518401526104c0870151815183015251909301919091526101c085018051825193840190925251611b95926001918190611b5290846020020151516103a0890151510190565b60036020850151515160048111156126f3576126f3614d90565b03612c205760208085015151608001516105c08301526101208301516105e08301805191909152516000910152600161272b336108a0565b51600181111561273d5761273d614d90565b1461274d57806105e0015161275b565b612756336108a0565b604001515b6106008201819052602001516105c08201515161277b9110156022613b62565b61278734156023613b62565b6127a161279a3384606001516000613bfc565b6024613b62565b6101a08201516127bc576101408201516106208201526128f2565b438260a0015111156127ce57436127d4565b8160a001515b610640820152610160820151608083015110156127f6578161016001516127fc565b81608001515b61066082018190526106408201511180156106a083015261282457600061068082015261283f565b612838816106400151826106600151613cb3565b6106808201525b6101a08201516106c08201526106a0810151156128635760006106e082015261287e565b612877816106400151826106600151613cb3565b6106e08201525b6128ac82610140015160000151610f806128a18560e00151856106800151613c0a565b846106c00151613c69565b61070082015152610140820151602001516101008301516106e08301516128dc9291610f80916128a19190613c0a565b6107008201805160200191909152516106208201525b61290a826101a00151826105c0015160000151613cb3565b610720820152610600810151602001516105c08201515161292b9190613cb3565b61074082015260608201516105c08201515161294991903390613d4f565b6105c08101515161076082018190526106208201515161296c9161104191613c0a565b610780820181905261060082015151511161298e5760006107a08201526129ad565b61060081015151516107808201516129a69190613cb3565b6107a08201525b6129c861104182610760015183610620015160200151613c0a565b6107c082018190526106008201515160200151116129ed5760006107e0820152612a10565b612a098161060001516000015160200151826107c00151613cb3565b6107e08201525b6107a081015161080082018051919091526107e082015181516020908101919091529051610820830180519190915261074083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516108408401805191909152610720840151815190930192909252905190517f0a28f992dbbe4f537ab2bfcbce503d532a1c31e2af98d3cbdc96a3df88b39ca791612ad591614f57565b60405180910390a16108408101805160a08501526105c08201515190516040517f54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c65092612b2492339283906159c9565b60405180910390a1612b34614a7c565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e080880151865190910152610100808801518651909101526101208088015186519091015261062086015183860180519190915280514394018490526101808801518151840152610720870151815183015251909301919091526101c085018051825193840190925251611b95926001918190611b5290846020020151516105c089015151900390565b6004602085015151516004811115612c3a57612c3a614d90565b03613547576020808501515160a0015161086083015261012083015161088083018051919091525160009101526001612c72336108a0565b516001811115612c8457612c84614d90565b14612c9457806108800151612ca2565b612c9d336108a0565b604001515b6108a082018190526020015161086082015151612cc29110156025613b62565b612cce34156026613b62565b612ce8612ce13384606001516000613bfc565b6027613b62565b6101a0820151612d03576101408201516108c0820152612e39565b438260a001511115612d155743612d1b565b8160a001515b6108e082015261016082015160808301511015612d3d57816101600151612d43565b81608001515b61090082018190526108e0820151118015610940830152612d6b576000610920820152612d86565b612d7f816108e00151826109000151613cb3565b6109208201525b6101a082015161096082015261094081015115612daa576000610980820152612dc5565b612dbe816108e00151826109000151613cb3565b6109808201525b612df382610140015160000151610f80612de88560e00151856109200151613c0a565b846109600151613c69565b6109a08201515261014082015160200151610100830151610980830151612e239291610f8091612de89190613c0a565b6109a08201805160200191909152516108c08201525b6108a0810151602001516109c082018190526108c082015151612e5f9161104191613c0a565b6109e082018190526108a0820151515110612e81576000610a00820152612ea0565b6109e08101516108a08201515151612e999190613cb3565b610a008201525b610a00810151610a208201819052610180830151511015612ec75761018082015151612ece565b80610a2001515b610a408201526109c08101516108c082015160200151612ef19161104191613c0a565b610a6082018190526108a0820151516020015110612f16576000610a80820152612f39565b612f3281610a600151826108a001516000015160200151613cb3565b610a808201525b610a80810151610aa08201819052610180830151602001511015612f665781610180015160200151612f6d565b80610aa001515b610ac08201908152610a4082018051610ae08401805191909152915191516020019190915251604051339180156108fc02916000818181858888f19350505050158015612fbe573d6000803e3d6000fd5b50613044826101c0015160006040518060600160405280613001876101c00151600060028110612ff057612ff061551f565b602002015151610ac0880151900390565b8152602001866101c0015160006002811061301e5761301e61551f565b6020020151602001518152602001866101c0015160006002811061072e5761072e61551f565b81610b00018190525061306182604001513383610ac00151613d4f565b6108a08101515151610a408201516130799190613d02565b610b20820151526108a08101515160200151610ac082015161309b9190613d02565b610b208201805160209081019290925251610b4083018051919091526108a083015182015181518301523360009081526004835260409020805460ff1916600190811782559151805180519383019390935591830151600282015591015160039091015561018082015151610a408201516131169190613cb3565b610b608201515261018082015160200151610ac08201516131379190613cb3565b610b6082018051602090810192909252610ae0830151610b80840180519190915290519051909101526101a0820151610860820151516131779190613cb3565b610ba0820152610b4081015160200151610860820151516131989190613cb3565b610bc08201526060820151610860820151516131b691903390613d4f565b61086081015151610be082018190526108c0820151516131d99161104191613c0a565b610c008201819052610b408201515151116131fb576000610c2082015261321a565b610b408101515151610c008201516132139190613cb3565b610c208201525b61323561104182610be00151836108c0015160200151613c0a565b610c408201819052610b4082015151602001511161325a576000610c6082015261327d565b61327681610b400151600001516020015182610c400151613cb3565b610c608201525b610c20810151610c808201805191909152610c6082015181516020908101919091529051610ca08301805191909152610bc083018051825184015233600090815260048452604090819020805460ff191660019081178255935180518051958301959095559385015160028201559284015160039093019290925551610cc08401805191909152610ba0840151815184015251610ce08401805191909152610b80840151815190930192909252905190517f6e8e065ec5216a13fb77fa01a7fcac6fc715e57ee9b3d2aa944e07a21fcd36869161335991614efe565b60405180910390a1610ce081015160c0840152610b808101516040517fbad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b916133a59133919082906159fd565b60405180910390a161086081015151610cc08201516040517f54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c650926133ec92339283906159c9565b60405180910390a16133fc614a7c565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e08088015186519091015261010080880151865190910152610120808801518651909101526108c08601518386018051919091528051439401849052610b608701518151840152610ba087015181518301525190930191909152610b008401805182519384019092525161352b9260019181906134e8908460200201515161086089015151900390565b815260200186610b0001516001600281106135055761350561551f565b602002015160200151815260200186610b00015160016002811061072e5761072e61551f565b602082015160a001526101e0830151610a4083015190036121d2565b50505050565b61355d6002600054146018613b62565b815161357890158061357157508251600154145b6019613b62565b60008080556002805461358a90615142565b80601f01602080910402602001604051908101604052809291908181526020018280546135b690615142565b80156136035780601f106135d857610100808354040283529160200191613603565b820191906000526020600020905b8154815290600101906020018083116135e657829003601f168201915b505050505080602001905181019061361b919061575e565b905061363d604080516060810182526000602082018181529282015290815290565b7f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc22338560405161366e929190615a2d565b60405180910390a1600060208501515151600181111561369057613690614d90565b0361374b5781516136d2906001600160a01b031633146136c8578260e001516001600160a01b0316336001600160a01b0316146136cb565b60015b6014613b62565b6136de34156015613b62565b604051600081527f1a30561631ef53b116e75654b632ae5cad71f57b94200cf94fb1fb90af44fbdd9060200160405180910390a160008352604082015182516101208401515151613730929190613d4f565b6000808055600181905561374690600290614a9c565b613547565b600160208501515151600181111561376557613765614d90565b036135475761378d8260e001516001600160a01b0316336001600160a01b0316146016613b62565b61379f82610100015134146017613b62565b604051600081527f18c7c457bc7528f33ae42807da64a4a000e2e8a5b5fef441ee185030a023220e9060200160405180910390a1600060208085018290528251829052825101526137ee614a7c565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169082015260608087015185519085169082015260808088018051875183015260a0808a0151885182015260e0808b01518951981660c0988901526101408b01518951909101526101608a015188516101009081019190915289518951610120908101919091528a51888b018051919091529351845190980197909752878b01518351909601959095528151600094019390935280514392019190915292870151835190910152850151905190910152611bb781613d68565b6138d56141a2565b60016000540361398a576000600280546138ee90615142565b80601f016020809104026020016040519081016040528092919081815260200182805461391a90615142565b80156139675780601f1061393c57610100808354040283529160200191613967565b820191906000526020600020905b81548152906001019060200180831161394a57829003601f168201915b505050505080602001905181019061397f9190615449565b602001519392505050565b600260005403613a34576000600280546139a390615142565b80601f01602080910402602001604051908101604052809291908181526020018280546139cf90615142565b8015613a1c5780601f106139f157610100808354040283529160200191613a1c565b820191906000526020600020905b8154815290600101906020018083116139ff57829003601f168201915b505050505080602001905181019061397f919061575e565b600660005403613ade57600060028054613a4d90615142565b80601f0160208091040260200160405190810160405280929190818152602001828054613a7990615142565b8015613ac65780601f10613a9b57610100808354040283529160200191613ac6565b820191906000526020600020905b815481529060010190602001808311613aa957829003601f168201915b505050505080602001905181019061397f9190615837565b61098060006008613b62565b613af261420e565b613afa614331565b60208101515160019052613b0c614052565b613b168282611794565b6060015192915050565b6040805180820190915260008082526020820152613b3c614331565b60208101515160009052613b4e614052565b613b588282611794565b6040015192915050565b8161032b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613b90614ad9565b60005b6002811015613bdc57848160028110613bae57613bae61551f565b6020020151828260028110613bc557613bc561551f565b602002015280613bd481615a96565b915050613b93565b5081818460028110613bf057613bf061551f565b60200201529392505050565b60006103aa83853085613e6c565b6000811580613c2e57508282613c208183615aaf565b9250613c2c9083615ace565b145b6103405760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401613b7f565b600081600003613ca95760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401613b7f565b6103ea8284615ace565b600082613cc08382615af0565b91508111156103405760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401613b7f565b600082613d0f8382615b03565b91508110156103405760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401613b7f565b613d5a838383613f46565b613d6357600080fd5b505050565b613d70614b24565b8151516001600160a01b03908116825282516020908101518184015283516040908101518316818501528451606090810151841681860152855160809081015190860152855160a09081015181870152865160c09081015190951685870152865160e090810151908701528651610100908101519087015286516101209081015190870152838701805151610140880152805185015161016088015280518401516101808801528051909201516101a0870152815101516101c086015251909201516101e08401526006600055436001559051613e4f91839101615b16565b60405160208183030381529060405260029081613d63919061569e565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613ed391615c56565b60006040518083038185875af1925050503d8060008114613f10576040519150601f19603f3d011682016040523d82523d6000602084013e613f15565b606091505b5091509150613f2682826001614017565b5080806020019051810190613f3b9190615c72565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613fa591615c56565b60006040518083038185875af1925050503d8060008114613fe2576040519150601f19603f3d011682016040523d82523d6000602084013e613fe7565b606091505b5091509150613ff882826002614017565b508080602001905181019061400d9190615c72565b9695505050505050565b606083156140265750816103ea565b8251156140365782518084602001fd5b60405163100960cb60e01b815260048101839052602401613b7f565b6040518060e0016040528060001515815260200160001515815260200161408c604051806040016040528060008152602001600081525090565b815260200161409961420e565b81526020016140bb604051806040016040528060008152602001600081525090565b81526020016140dd604051806040016040528060008152602001600081525090565b81526020016140ea614179565b905290565b60408051606081018252600080825260208201529081016140ea614c15565b6040518060a001604052806141216141a2565b81526020016000815260200161414a604051806040016040528060008152602001600081525090565b815260200161416c604051806040016040528060008152602001600081525090565b8152602001600081525090565b6040805160808101825260009181018281526060820192909252908152602081016140ea61420e565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016141ea604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b031681525090565b604080516080810182526000918101828152606082019290925290819081526020016140ea604051806040016040528060008152602001600081525090565b6040518060800160405280614260614ad9565b81526020016000815260200160008152602001600081525090565b60405180610180016040528060006001600160a01b0316815260200161429f6141a2565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016142ef604051806040016040528060008152602001600081525090565b8152600060208201819052604082015260600161430a614ad9565b815260200160008152602001600081525090565b60405180602001604052806140ea61410e565b6040518060400160405280600081526020016140ea6040805160e08101825260006020808301828152838501839052606084018390528451808301865283815260808501528451808301865283815260a0850152845191820190945290815260c082015290815290565b6040805161028081019091526000610240820181815261026083019190915281908152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200161440a604051806040016040528060008152602001600081525090565b8152602001614417614c15565b8152602001614424614c15565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016140ea604051806040016040528060008152602001600081525090565b6040518060400160405280600081526020016140ea60408051608081018252600060208201818152928201819052606082015290815290565b6040805160808101825260009181018281526060820192909252908152602081016140ea614c15565b60405180610d0001604052806144ed614c15565b81526020016144fa614c15565b815260200160008152602001614523604051806040016040528060008152602001600081525090565b8152602001614530614c15565b8152602001614552604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016145a0604051806040016040528060008152602001600081525090565b81526020016145ad614c15565b81526020016145ba614c15565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161461b604051806040016040528060008152602001600081525090565b815260200161463d604051806040016040528060008152602001600081525090565b815260200161464a614c15565b815260200161466c604051806040016040528060008152602001600081525090565b815260200161467961420e565b81526020016146946040518060200160405280600081525090565b81526020016146b6604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001614704604051806040016040528060008152602001600081525090565b815260200160008152602001614718614c15565b8152602001614725614c15565b81526020016000815260200160008152602001614755604051806040016040528060008152602001600081525090565b8152602001614762614c15565b8152602001614784604051806040016040528060008152602001600081525090565b815260200161479f6040518060200160405280600081525090565b81526020016147ac614c15565b81526020016147b9614c15565b81526020016147db604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001614829604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161487c604051806040016040528060008152602001600081525090565b8152602001614889614c15565b81526020016148ab604051806040016040528060008152602001600081525090565b81526020016148c66040518060200160405280600081525090565b81526020016148d3614c15565b81526020016148e0614c15565b8152602001614902604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001614950604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016149b1604051806040016040528060008152602001600081525090565b81526020016149be614ad9565b81526020016149e0604051806040016040528060008152602001600081525090565b81526020016149ed614c15565b8152602001614a0f604051806040016040528060008152602001600081525090565b8152602001614a1c61420e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614a6f604051806040016040528060008152602001600081525090565b81526020016140bb614c15565b6040518060400160405280614a8f614c37565b81526020016140ea614cc9565b508054614aa890615142565b6000825580601f10614ab8575050565b601f016020900490600052602060002090810190614ad69190614d2d565b50565b60405180604001604052806002905b614b0e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081614ae85790505090565b60405180610200016040528060006001600160a01b03168152602001614b486141a2565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001614bb6604051806040016040528060008152602001600081525090565b8152602001614bd8604051806040016040528060008152602001600081525090565b815260200160008152602001614c01604051806040016040528060008152602001600081525090565b81526020016000815260200161416c614ad9565b604080516080810182526000918101828152606082019290925290819061416c565b60405180610140016040528060006001600160a01b03168152602001614c5b6141a2565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016140ea604051806040016040528060008152602001600081525090565b604080516101208101909152600060e082018181526101008301919091528190815260200160008152602001614d12604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161416c614ad9565b5b80821115614d425760008155600101614d2e565b5090565b600060408284031215614d5857600080fd5b50919050565b6001600160a01b0381168114614ad657600080fd5b600060208284031215614d8557600080fd5b81356103ea81614d5e565b634e487b7160e01b600052602160045260246000fd5b60028110614ad657614ad6614d90565b815160a0820190614dc681614da6565b808352506020830151151560208301526040830151614df360408401825180518252602090810151910152565b602081015160808401525092915050565b60018060a01b038082511683528060208301511660208401526040820151614e39604085018280518252602090810151910152565b5060608201516080840152608082015160a08401528060a08301511660c0840152505050565b60006101a082019050614e73828451614e04565b60208381015160e0840152604084015180516101008501528101516101208401526060840151805161014085015201516101608301526080909201516101809091015290565b600060208284031215614ecb57600080fd5b5035919050565b614ee782825180518252602090810151910152565b602090810151805160408401520151606090910152565b8151805182526020908101519082015260c081016020830151614f246040840182614ed2565b5092915050565b60008060408385031215614f3e57600080fd5b8235614f4981614d5e565b946020939093013593505050565b815181526020808301519082015260408101610340565b60005b83811015614f89578181015183820152602001614f71565b50506000910152565b8281526040602082015260008251806040840152614fb7816060850160208701614f6e565b601f01601f1916919091016060019392505050565b600060e08284031215614d5857600080fd5b600060808284031215614d5857600080fd5b60e081016103408284614e04565b608081016103408284614ed2565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156150455761504561500c565b60405290565b6040516020810167ffffffffffffffff811182821017156150455761504561500c565b60405160c0810167ffffffffffffffff811182821017156150455761504561500c565b6040516060810167ffffffffffffffff811182821017156150455761504561500c565b604051610180810167ffffffffffffffff811182821017156150455761504561500c565b604051610200810167ffffffffffffffff811182821017156150455761504561500c565b8015158114614ad657600080fd5b60006040828403121561511c57600080fd5b615124615022565b823581526020830135615136816150fc565b60208201529392505050565b600181811c9082168061515657607f821691505b602082108103614d5857634e487b7160e01b600052602260045260246000fd5b60006020828403121561518857600080fd5b6040516020810181811067ffffffffffffffff821117156151ab576151ab61500c565b6040529135825250919050565b600081830360e08112156151cb57600080fd5b6151d3615022565b8335815260c0601f19830112156151e957600080fd5b6151f161504b565b91506151fb61506e565b60208501356005811061520d57600080fd5b8152604085013561521d816150fc565b60208201526060850135615230816150fc565b60408201526152428660808701615176565b60608201526152548660a08701615176565b60808201526152668660c08701615176565b60a0820152825260208101919091529392505050565b6000818303608081121561528f57600080fd5b615297615022565b833581526060601f19830112156152ad57600080fd5b6152b561504b565b91506152bf615091565b6020850135600281106152d157600080fd5b815260408501356152e1816150fc565b602082015260608501356152f4816150fc565b6040820152825260208101919091529392505050565b805161098081614d5e565b60006040828403121561532757600080fd5b61532f615022565b9050815181526020820151602082015292915050565b600060e0828403121561535757600080fd5b61535f61506e565b9050815161536c81614d5e565b8152602082015161537c81614d5e565b602082015261538e8360408401615315565b60408201526080820151606082015260a0820151608082015260c08201516153b581614d5e565b60a082015292915050565b600082601f8301126153d157600080fd5b6153d9615022565b8060c08401858111156153eb57600080fd5b845b8181101561543e57606081880312156154065760008081fd5b61540e615091565b815181526020808301518183015260408084015161542b816150fc565b90830152908552909301926060016153ed565b509095945050505050565b6000610300828403121561545c57600080fd5b6154646150b4565b61546d8361530a565b815261547c8460208501615345565b602082015261010061548f81850161530a565b60408301526101206154a281860161530a565b60608401526101406154b6878288016153c0565b608085015261020086015160a085015261022086015160c08501526154df876102408801615315565b60e08501526154f1610280870161530a565b928401929092526102a0850151908301526102c0840151908201526102e09092015161016083015250919050565b634e487b7160e01b600052603260045260246000fd5b8060005b6002811015613547578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101615539565b81516001600160a01b03168152610300810160208301516155976020840182614e04565b5060408301516101006155b4818501836001600160a01b03169052565b606085015191506101206155d2818601846001600160a01b03169052565b60808601516101408681019190915260a08701516101608088019190915260c08801518051610180890152602001516101a088015260e08801516001600160a01b03166101c0880152838801516101e0880152828801519450615639610200880186615535565b818801516102c0880152808801516102e0880152505050505092915050565b601f821115613d6357600081815260208120601f850160051c8101602086101561567f5750805b601f850160051c820191505b818110156108985782815560010161568b565b815167ffffffffffffffff8111156156b8576156b861500c565b6156cc816156c68454615142565b84615658565b602080601f83116001811461570157600084156156e95750858301515b600019600386901b1c1916600185901b178555610898565b600085815260208120601f198616915b8281101561573057888601518255948401946001909101908401615711565b508582101561574e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000610300828403121561577157600080fd5b6157796150b4565b6157828361530a565b81526157918460208501615345565b60208201526101006157a481850161530a565b60408301526101206157b781860161530a565b60608401526101408086015160808501526101608087015160a08601526157e2886101808901615315565b60c08601526157f46101c0880161530a565b60e08601526101e0870151848601526158118861020089016153c0565b838601526102c0870151828601526102e087015181860152505050508091505092915050565b60006103c0828403121561584a57600080fd5b6158526150d8565b61585b8361530a565b815261586a8460208501615345565b602082015261010061587d81850161530a565b604083015261012061589081860161530a565b60608401526101408086015160808501526101608087015160a08601526101806158bb81890161530a565b60c08701526101a08089015160e08801526101c0808a0151878901526101e096506158e88b888c01615315565b868901526158fa8b6102208c01615315565b858901526102608a0151848901526159168b6102808c01615315565b838901526102c08a0151828901526159328b6102e08c016153c0565b90880152505050506103a09490940151908201529392505050565b6001600160a01b03831681528151602080830191909152820151518051610100830191906005811061598157615981614d90565b8060408501525060208101511515606084015260408101511515608084015260608101515160a084015260808101515160c084015260a08101515160e0840152509392505050565b6001600160a01b03948516815260208082019490945282516040820152919092015160608201529116608082015260a00190565b6001600160a01b03848116825260c0820190615a1c6020840186614ed2565b80841660a084015250949350505050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190615a5981614da6565b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600060018201615aa857615aa8615a80565b5060010190565b6000816000190483118215151615615ac957615ac9615a80565b500290565b600082615aeb57634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561034057610340615a80565b8082018082111561034057610340615a80565b81516001600160a01b031681526103c081016020830151615b3a6020840182614e04565b506040830151610100615b57818501836001600160a01b03169052565b60608501519150610120615b75818601846001600160a01b03169052565b60808601519250610140838187015260a08701519350610160848188015260c08801519450610180615bb1818901876001600160a01b03169052565b60e089015195506101a086818a0152858a015196506101c0955086868a0152848a015196506101e09450615bf1858a018880518252602090810151910152565b9289015180516102208a01526020908101516102408a015291890151610260890152880151805161028089015201516102a08701528601516102c0860152818601519250615c436102e0860184615535565b808601516103a086015250505092915050565b60008251615c68818460208701614f6e565b9190910192915050565b600060208284031215615c8457600080fd5b81516103ea816150fc56fea26469706673582212208f19531defafe2ebb8114b3b7ba218d721903c0dd7d6c110832c87ad087f6f7564736f6c63430008100033`,
  BytecodeLen: 26490,
  Which: `oD`,
  version: 8,
  views: {
    Info: `Info`,
    Opts: `Opts`,
    rewardsAvailable: `rewardsAvailable`,
    rewardsAvailableAt: `rewardsAvailableAt`,
    staked: `staked`
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
