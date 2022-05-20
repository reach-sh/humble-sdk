// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

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
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc3], ['startDelay', ctc2], ['duration', ctc2], ['graceDuration', ctc2], ['Rewarder0', ctc0]]);
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
            const [v4897, v4898, v4899, v4900, v4917, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = svs;
            return (await ((async () => {
              
              const v10817 = {
                end: v10427,
                opts: v4898,
                remainingRewards: v10448,
                totalStaked: v10450
                };
              
              return v10817;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      rewardsAvailable: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4897, v4898, v4899, v4900, v4917, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = svs;
            return (await ((async (_v10893 ) => {
                const v10893 = stdlib.protect(ctc0, _v10893, null);
              
              const v10894 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v10893), null);
              const v10896 = {
                rewards: v10444,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v10897 = stdlib.fromSome(v10894, v10896);
              const v10898 = v10897.stake;
              const v10903 = v10897.rewards;
              const v10904 = v10903[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
              let v10909;
              if (v10792) {
                v10909 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10911 = stdlib.sub(v10790, v10449);
                v10909 = v10911;
                }
              const v10913 = stdlib.mul(v10909, v4924);
              const v10914 = stdlib.add(v10788, v10913);
              const v10916 = stdlib.le(v10914, v10797);
              const v10917 = v10916 ? v10914 : v10797;
              let v10920;
              const v10921 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
              if (v10921) {
                v10920 = v10917;
                }
              else {
                const v10922 = stdlib.muldiv(v10917, v10898, v10450);
                v10920 = v10922;
                }
              let v10923;
              const v10924 = stdlib.ge(v10904, v10920);
              if (v10924) {
                v10923 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10925 = stdlib.sub(v10920, v10904);
                v10923 = v10925;
                }
              const v10926 = stdlib.le(v10923, v10799);
              const v10927 = v10926 ? v10923 : v10799;
              const v10939 = v10903[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
              let v10944;
              if (v10792) {
                v10944 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10946 = stdlib.sub(v10790, v10449);
                v10944 = v10946;
                }
              const v10948 = stdlib.mul(v10944, v4926);
              const v10949 = stdlib.add(v10802, v10948);
              const v10951 = stdlib.le(v10949, v10811);
              const v10952 = v10951 ? v10949 : v10811;
              let v10955;
              if (v10921) {
                v10955 = v10952;
                }
              else {
                const v10957 = stdlib.muldiv(v10952, v10898, v10450);
                v10955 = v10957;
                }
              let v10958;
              const v10959 = stdlib.ge(v10939, v10955);
              if (v10959) {
                v10958 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10960 = stdlib.sub(v10955, v10939);
                v10958 = v10960;
                }
              const v10961 = stdlib.le(v10958, v10813);
              const v10962 = v10961 ? v10958 : v10813;
              const v10964 = [v10927, v10962];
              
              return v10964;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4897, v4898, v4899, v4900, v4917, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = svs;
            return (await ((async (_v10819, _v10820 ) => {
                const v10819 = stdlib.protect(ctc0, _v10819, null);
                const v10820 = stdlib.protect(ctc2, _v10820, null);
              
              const v10821 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v10819), null);
              const v10823 = {
                rewards: v10444,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v10824 = stdlib.fromSome(v10821, v10823);
              const v10825 = v10824.stake;
              const v10830 = v10824.rewards;
              const v10831 = v10830[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
              const v10834 = stdlib.le(v10427, v10820);
              const v10835 = v10834 ? v10427 : v10820;
              let v10836;
              const v10837 = stdlib.ge(v10449, v10835);
              if (v10837) {
                v10836 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10838 = stdlib.sub(v10835, v10449);
                v10836 = v10838;
                }
              const v10840 = stdlib.mul(v10836, v4924);
              const v10841 = stdlib.add(v10788, v10840);
              const v10843 = stdlib.le(v10841, v10797);
              const v10844 = v10843 ? v10841 : v10797;
              let v10847;
              const v10848 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
              if (v10848) {
                v10847 = v10844;
                }
              else {
                const v10849 = stdlib.muldiv(v10844, v10825, v10450);
                v10847 = v10849;
                }
              let v10850;
              const v10851 = stdlib.ge(v10831, v10847);
              if (v10851) {
                v10850 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10852 = stdlib.sub(v10847, v10831);
                v10850 = v10852;
                }
              const v10853 = stdlib.le(v10850, v10799);
              const v10854 = v10853 ? v10850 : v10799;
              const v10866 = v10830[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
              let v10871;
              if (v10837) {
                v10871 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10873 = stdlib.sub(v10835, v10449);
                v10871 = v10873;
                }
              const v10875 = stdlib.mul(v10871, v4926);
              const v10876 = stdlib.add(v10802, v10875);
              const v10878 = stdlib.le(v10876, v10811);
              const v10879 = v10878 ? v10876 : v10811;
              let v10882;
              if (v10848) {
                v10882 = v10879;
                }
              else {
                const v10884 = stdlib.muldiv(v10879, v10825, v10450);
                v10882 = v10884;
                }
              let v10885;
              const v10886 = stdlib.ge(v10866, v10882);
              if (v10886) {
                v10885 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10887 = stdlib.sub(v10882, v10866);
                v10885 = v10887;
                }
              const v10888 = stdlib.le(v10885, v10813);
              const v10889 = v10888 ? v10885 : v10813;
              const v10891 = [v10854, v10889];
              
              return v10891;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4897, v4898, v4899, v4900, v4917, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = svs;
            return (await ((async (_v10429 ) => {
                const v10429 = stdlib.protect(ctc0, _v10429, null);
              
              const v10430 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v10429), null);
              const v10431 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v10432 = {
                rewards: v10431,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v10433 = stdlib.fromSome(v10430, v10432);
              const v10434 = v10433.stake;
              
              return v10434;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc7, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2],
      2: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc7],
      6: [ctc0, ctc4, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc5, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]
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
export async function _Any_eject6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_eject6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_eject6 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc11,
    Any_halt0_2664: ctc12,
    Any_nop0_2664: ctc12,
    Any_reclaimRewards0_2664: ctc12,
    Staker_harvest0_2664: ctc12,
    Staker_stake0_2664: ctc13,
    Staker_withdraw0_2664: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v11018 = ctc.selfAddress();
  const v11020 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:308:32:application call to [unknown function] (defined at: ./staker.rsh:308:32:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_eject0_2664" (defined at: ./staker.rsh:308:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Any_eject'
    });
  const v11021 = v11020[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11022 = v11020[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11025 = stdlib.addressEq(v11018, v11021);
  const v11026 = stdlib.ge(v10452, v10427);
  const v11027 = stdlib.addressEq(v11021, v11022);
  const v11028 = v11026 ? v11027 : false;
  const v11029 = v11025 ? true : v11028;
  stdlib.assert(v11029, {
    at: './staker.rsh:309:12:application',
    fs: ['at ./staker.rsh:308:32:application call to [unknown function] (defined at: ./staker.rsh:308:32:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_eject0_2664" (defined at: ./staker.rsh:308:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only eject under certain conditions',
    who: 'Any_eject'
    });
  const v11037 = ['Any_eject0_2664', v11020];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v11037],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:316:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:316:21:decimal', stdlib.UInt_max, '0'), v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_eject"
            });
          const v11178 = v11173[stdlib.checkedBigNumberify('./staker.rsh:308:10:spread', stdlib.UInt_max, '0')];
          const v11179 = v11173[stdlib.checkedBigNumberify('./staker.rsh:308:10:spread', stdlib.UInt_max, '1')];
          ;
          const v11267 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v11268 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v11272 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v11273 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v11274 = [v11268, v11272, v11273];
          const v11275 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v11274);
          ;
          const v11286 = null;
          const v11287 = await txn1.getOutput('Any_eject', 'v11286', ctc0, v11286);
          
          const v11294 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11178), null);
          const v11296 = {
            rewards: v10444,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v11297 = stdlib.fromSome(v11294, v11296);
          const v11298 = v11297.stake;
          const v11303 = v11297.rewards;
          const v11304 = v11303[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
          let v11309;
          if (v10792) {
            v11309 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11311 = stdlib.sub(v10790, v10449);
            v11309 = v11311;
            }
          const v11313 = stdlib.mul(v11309, v4924);
          const v11314 = stdlib.add(v10788, v11313);
          const v11316 = stdlib.le(v11314, v10797);
          const v11317 = v11316 ? v11314 : v10797;
          let v11320;
          const v11321 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
          if (v11321) {
            v11320 = v11317;
            }
          else {
            const v11322 = stdlib.muldiv(v11317, v11298, v10450);
            v11320 = v11322;
            }
          let v11323;
          const v11324 = stdlib.ge(v11304, v11320);
          if (v11324) {
            v11323 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11325 = stdlib.sub(v11320, v11304);
            v11323 = v11325;
            }
          const v11326 = stdlib.le(v11323, v10799);
          const v11327 = v11326 ? v11323 : v10799;
          const v11339 = v11303[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
          let v11344;
          if (v10792) {
            v11344 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11346 = stdlib.sub(v10790, v10449);
            v11344 = v11346;
            }
          const v11348 = stdlib.mul(v11344, v4926);
          const v11349 = stdlib.add(v10802, v11348);
          const v11351 = stdlib.le(v11349, v10811);
          const v11352 = v11351 ? v11349 : v10811;
          let v11355;
          if (v11321) {
            v11355 = v11352;
            }
          else {
            const v11357 = stdlib.muldiv(v11352, v11298, v10450);
            v11355 = v11357;
            }
          let v11358;
          const v11359 = stdlib.ge(v11339, v11355);
          if (v11359) {
            v11358 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11360 = stdlib.sub(v11355, v11339);
            v11358 = v11360;
            }
          const v11361 = stdlib.le(v11358, v10813);
          const v11362 = v11361 ? v11358 : v10813;
          const v11364 = [v11327, v11362];
          const v11373 = stdlib.sub(v10458, v11327);
          sim_r.txns.push({
            kind: 'from',
            to: v11179,
            tok: undefined /* Nothing */
            });
          const v11374 = v11275[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
          const v11375 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
          const v11379 = stdlib.sub(v11375, v11362);
          const v11382 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '1')];
          const v11383 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '2')];
          const v11384 = [v11379, v11382, v11383];
          const v11385 = stdlib.Array_set(v11275, stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0'), v11384);
          sim_r.txns.push({
            kind: 'from',
            to: v11179,
            tok: v4899
            });
          const v11387 = stdlib.sub(v10797, v11327);
          const v11389 = stdlib.sub(v10811, v11362);
          const v11402 = stdlib.add(v11304, v11327);
          const v11404 = stdlib.add(v11339, v11362);
          const v11405 = [v11402, v11404];
          const v11406 = {
            rewards: v11405,
            stake: v11298
            };
          await stdlib.simMapSet(sim_r, 0, v11178, v11406);
          const v11411 = [v11387, v11389];
          const v11412 = {
            totalRemaining: v11411,
            userReceived: v11364
            };
          const v11417 = v11406.stake;
          const v11423 = stdlib.sub(v10450, v11417);
          const v11424 = stdlib.sub(v11417, v11417);
          const v11429 = v11406.rewards;
          const v11433 = v11385[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
          const v11434 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '0')];
          const v11438 = stdlib.sub(v11434, v11417);
          const v11441 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
          const v11442 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '2')];
          const v11443 = [v11438, v11441, v11442];
          const v11444 = stdlib.Array_set(v11385, stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1'), v11443);
          sim_r.txns.push({
            kind: 'from',
            to: v11179,
            tok: v4900
            });
          const v11445 = v11429[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '0')];
          let v11446;
          const v11447 = stdlib.eq(v11423, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
          if (v11447) {
            v11446 = v10799;
            }
          else {
            const v11448 = stdlib.muldiv(v10799, v11417, v11423);
            v11446 = v11448;
            }
          let v11449;
          const v11450 = stdlib.ge(v11446, v11445);
          if (v11450) {
            v11449 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11451 = stdlib.sub(v11445, v11446);
            v11449 = v11451;
            }
          const v11452 = v11429[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '1')];
          let v11453;
          if (v11447) {
            v11453 = v10813;
            }
          else {
            const v11455 = stdlib.muldiv(v10813, v11417, v11423);
            v11453 = v11455;
            }
          let v11456;
          const v11457 = stdlib.ge(v11453, v11452);
          if (v11457) {
            v11456 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11458 = stdlib.sub(v11452, v11453);
            v11456 = v11458;
            }
          const v11459 = [v11449, v11456];
          const v11460 = {
            rewards: v11459,
            stake: v11424
            };
          await stdlib.simMapSet(sim_r, 0, v11178, v11460);
          const v11461 = {
            newEveryoneStaked: v11423,
            newUserStaked: v11424
            };
          null;
          const v11466 = stdlib.sub(v10799, v11327);
          const v11467 = stdlib.sub(v10813, v11362);
          const v80318 = v10446;
          const v80320 = v11411;
          const v80321 = v10452;
          const v80322 = v11423;
          const v80323 = v11171;
          const v80324 = v10451;
          const v80325 = v11444;
          const v80326 = v11373;
          const v80328 = v10446 ? v11447 : false;
          if (v80328) {
            const v80369 = (stdlib.le(await ctc.getBalance(), v11373) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v11373));
            const v80370 = stdlib.add(v11373, v80369);
            sim_r.txns.push({
              kind: 'from',
              to: v4923,
              tok: undefined /* Nothing */
              });
            const v80371 = v11444[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v80372 = v80371[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v80373 = (sim_r.txns.push({
              kind: 'info',
              tok: v4899
              }),stdlib.le(await ctc.getBalance(v4899), v80372) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v80372));
            const v80374 = stdlib.add(v80372, v80373);
            sim_r.txns.push({
              kind: 'from',
              to: v4897,
              tok: v4899
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4900
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4899
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v80330 = v11466;
            const v80331 = stdlib.le(v10427, v10451);
            const v80332 = v80331 ? v10427 : v10451;
            let v80333;
            const v80334 = stdlib.ge(v10452, v80332);
            if (v80334) {
              v80333 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v80335 = stdlib.sub(v80332, v10452);
              v80333 = v80335;
              }
            const v80336 = stdlib.mul(v80333, v4924);
            const v80337 = stdlib.add(v11466, v80336);
            const v80338 = v11387;
            const v80339 = stdlib.le(v80337, v11387);
            const v80340 = v80339 ? v80337 : v11387;
            const v80341 = v11467;
            let v80342;
            if (v80334) {
              v80342 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v80343 = stdlib.sub(v80332, v10452);
              v80342 = v80343;
              }
            const v80344 = stdlib.mul(v80342, v4926);
            const v80345 = stdlib.add(v11467, v80344);
            const v80346 = v11389;
            const v80347 = stdlib.le(v80345, v11389);
            const v80348 = v80347 ? v80345 : v11389;
            const v80349 = [v80340, v80348];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      undefined /* setApiDetails */;
      const v11178 = v11173[stdlib.checkedBigNumberify('./staker.rsh:308:10:spread', stdlib.UInt_max, '0')];
      const v11179 = v11173[stdlib.checkedBigNumberify('./staker.rsh:308:10:spread', stdlib.UInt_max, '1')];
      const v11180 = stdlib.addressEq(v11169, v11178);
      const v11181 = stdlib.ge(v10452, v10427);
      const v11182 = stdlib.addressEq(v11178, v11179);
      const v11183 = v11181 ? v11182 : false;
      const v11184 = v11180 ? true : v11183;
      stdlib.assert(v11184, {
        at: './staker.rsh:309:12:application',
        fs: ['at ./staker.rsh:308:32:application call to [unknown function] (defined at: ./staker.rsh:308:32:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:308:32:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: 'can only eject under certain conditions',
        who: 'Any_eject'
        });
      ;
      const v11267 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v11268 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v11272 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v11273 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v11274 = [v11268, v11272, v11273];
      const v11275 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v11274);
      ;
      const v11286 = null;
      const v11287 = await txn1.getOutput('Any_eject', 'v11286', ctc0, v11286);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v11173, v11287), {
          at: './staker.rsh:308:11:application',
          fs: ['at ./staker.rsh:308:11:application call to [unknown function] (defined at: ./staker.rsh:308:11:function exp)', 'at ./staker.rsh:317:10:application call to "k" (defined at: ./staker.rsh:316:42:function exp)', 'at ./staker.rsh:316:42:application call to [unknown function] (defined at: ./staker.rsh:316:42:function exp)'],
          msg: 'out',
          who: 'Any_eject'
          });
        }
      else {
        }
      
      const v11294 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11178), null);
      const v11296 = {
        rewards: v10444,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v11297 = stdlib.fromSome(v11294, v11296);
      const v11298 = v11297.stake;
      const v11303 = v11297.rewards;
      const v11304 = v11303[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
      let v11309;
      if (v10792) {
        v11309 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11311 = stdlib.sub(v10790, v10449);
        v11309 = v11311;
        }
      const v11313 = stdlib.mul(v11309, v4924);
      const v11314 = stdlib.add(v10788, v11313);
      const v11316 = stdlib.le(v11314, v10797);
      const v11317 = v11316 ? v11314 : v10797;
      let v11320;
      const v11321 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
      if (v11321) {
        v11320 = v11317;
        }
      else {
        const v11322 = stdlib.muldiv(v11317, v11298, v10450);
        v11320 = v11322;
        }
      let v11323;
      const v11324 = stdlib.ge(v11304, v11320);
      if (v11324) {
        v11323 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11325 = stdlib.sub(v11320, v11304);
        v11323 = v11325;
        }
      const v11326 = stdlib.le(v11323, v10799);
      const v11327 = v11326 ? v11323 : v10799;
      const v11339 = v11303[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
      let v11344;
      if (v10792) {
        v11344 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11346 = stdlib.sub(v10790, v10449);
        v11344 = v11346;
        }
      const v11348 = stdlib.mul(v11344, v4926);
      const v11349 = stdlib.add(v10802, v11348);
      const v11351 = stdlib.le(v11349, v10811);
      const v11352 = v11351 ? v11349 : v10811;
      let v11355;
      if (v11321) {
        v11355 = v11352;
        }
      else {
        const v11357 = stdlib.muldiv(v11352, v11298, v10450);
        v11355 = v11357;
        }
      let v11358;
      const v11359 = stdlib.ge(v11339, v11355);
      if (v11359) {
        v11358 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11360 = stdlib.sub(v11355, v11339);
        v11358 = v11360;
        }
      const v11361 = stdlib.le(v11358, v10813);
      const v11362 = v11361 ? v11358 : v10813;
      const v11364 = [v11327, v11362];
      const v11373 = stdlib.sub(v10458, v11327);
      ;
      const v11374 = v11275[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
      const v11375 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
      const v11379 = stdlib.sub(v11375, v11362);
      const v11382 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '1')];
      const v11383 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '2')];
      const v11384 = [v11379, v11382, v11383];
      const v11385 = stdlib.Array_set(v11275, stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0'), v11384);
      ;
      const v11387 = stdlib.sub(v10797, v11327);
      const v11389 = stdlib.sub(v10811, v11362);
      const v11402 = stdlib.add(v11304, v11327);
      const v11404 = stdlib.add(v11339, v11362);
      const v11405 = [v11402, v11404];
      const v11406 = {
        rewards: v11405,
        stake: v11298
        };
      await stdlib.mapSet(map0, v11178, v11406);
      const v11411 = [v11387, v11389];
      const v11412 = {
        totalRemaining: v11411,
        userReceived: v11364
        };
      const v11417 = v11406.stake;
      const v11423 = stdlib.sub(v10450, v11417);
      const v11424 = stdlib.sub(v11417, v11417);
      const v11429 = v11406.rewards;
      const v11433 = v11385[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
      const v11434 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '0')];
      const v11438 = stdlib.sub(v11434, v11417);
      const v11441 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
      const v11442 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '2')];
      const v11443 = [v11438, v11441, v11442];
      const v11444 = stdlib.Array_set(v11385, stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1'), v11443);
      ;
      const v11445 = v11429[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '0')];
      let v11446;
      const v11447 = stdlib.eq(v11423, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
      if (v11447) {
        v11446 = v10799;
        }
      else {
        const v11448 = stdlib.muldiv(v10799, v11417, v11423);
        v11446 = v11448;
        }
      let v11449;
      const v11450 = stdlib.ge(v11446, v11445);
      if (v11450) {
        v11449 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11451 = stdlib.sub(v11445, v11446);
        v11449 = v11451;
        }
      const v11452 = v11429[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '1')];
      let v11453;
      if (v11447) {
        v11453 = v10813;
        }
      else {
        const v11455 = stdlib.muldiv(v10813, v11417, v11423);
        v11453 = v11455;
        }
      let v11456;
      const v11457 = stdlib.ge(v11453, v11452);
      if (v11457) {
        v11456 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11458 = stdlib.sub(v11452, v11453);
        v11456 = v11458;
        }
      const v11459 = [v11449, v11456];
      const v11460 = {
        rewards: v11459,
        stake: v11424
        };
      await stdlib.mapSet(map0, v11178, v11460);
      const v11461 = {
        newEveryoneStaked: v11423,
        newUserStaked: v11424
        };
      null;
      const v11466 = stdlib.sub(v10799, v11327);
      const v11467 = stdlib.sub(v10813, v11362);
      const v80318 = v10446;
      const v80320 = v11411;
      const v80321 = v10452;
      const v80322 = v11423;
      const v80323 = v11171;
      const v80324 = v10451;
      const v80325 = v11444;
      const v80326 = v11373;
      const v80328 = v10446 ? v11447 : false;
      if (v80328) {
        const v80369 = (stdlib.le(await ctc.getBalance(), v11373) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v11373));
        const v80370 = stdlib.add(v11373, v80369);
        ;
        const v80371 = v11444[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v80372 = v80371[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v80373 = (stdlib.le(await ctc.getBalance(v4899), v80372) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v80372));
        const v80374 = stdlib.add(v80372, v80373);
        ;
        return;
        }
      else {
        const v80330 = v11466;
        const v80331 = stdlib.le(v10427, v10451);
        const v80332 = v80331 ? v10427 : v10451;
        let v80333;
        const v80334 = stdlib.ge(v10452, v80332);
        if (v80334) {
          v80333 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v80335 = stdlib.sub(v80332, v10452);
          v80333 = v80335;
          }
        const v80336 = stdlib.mul(v80333, v4924);
        const v80337 = stdlib.add(v11466, v80336);
        const v80338 = v11387;
        const v80339 = stdlib.le(v80337, v11387);
        const v80340 = v80339 ? v80337 : v11387;
        const v80341 = v11467;
        let v80342;
        if (v80334) {
          v80342 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v80343 = stdlib.sub(v80332, v10452);
          v80342 = v80343;
          }
        const v80344 = stdlib.mul(v80342, v4926);
        const v80345 = stdlib.add(v11467, v80344);
        const v80346 = v11389;
        const v80347 = stdlib.le(v80345, v11389);
        const v80348 = v80347 ? v80345 : v11389;
        const v80349 = [v80340, v80348];
        return;
        }
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      return;
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      return;
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      return;
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      return;
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_halt6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_halt6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_halt6 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc12,
    Any_halt0_2664: ctc11,
    Any_nop0_2664: ctc11,
    Any_reclaimRewards0_2664: ctc11,
    Staker_harvest0_2664: ctc11,
    Staker_stake0_2664: ctc13,
    Staker_withdraw0_2664: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v11056 = ctc.selfAddress();
  const v11058 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_halt0_2664" (defined at: ./staker.rsh:344:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Any_halt'
    });
  const v11059 = stdlib.addressEq(v11056, v4897);
  stdlib.assert(v11059, {
    at: './staker.rsh:345:12:application',
    fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_halt0_2664" (defined at: ./staker.rsh:344:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'only Deployer can rewardHalt',
    who: 'Any_halt'
    });
  const v11060 = stdlib.ge(v10452, v10427);
  stdlib.assert(v11060, {
    at: './staker.rsh:346:12:application',
    fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_halt0_2664" (defined at: ./staker.rsh:344:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only halt after the end',
    who: 'Any_halt'
    });
  const v11061 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:347:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v11061, {
    at: './staker.rsh:347:12:application',
    fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_halt0_2664" (defined at: ./staker.rsh:344:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only halt when no stake is left',
    who: 'Any_halt'
    });
  const v11065 = ['Any_halt0_2664', v11058];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v11065],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:348:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:348:21:decimal', stdlib.UInt_max, '0'), v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_halt"
            });
          ;
          const v11892 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v11893 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v11897 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v11898 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v11899 = [v11893, v11897, v11898];
          const v11900 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v11899);
          ;
          const v12104 = null;
          const v12105 = await txn1.getOutput('Any_halt', 'v12104', ctc0, v12104);
          
          const v80825 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
          const v80826 = stdlib.add(v10458, v80825);
          sim_r.txns.push({
            kind: 'from',
            to: v4923,
            tok: undefined /* Nothing */
            });
          const v80827 = v11900[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
          const v80828 = v80827[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
          const v80829 = (sim_r.txns.push({
            kind: 'info',
            tok: v4899
            }),stdlib.le(await ctc.getBalance(v4899), v80828) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v80828));
          const v80830 = stdlib.add(v80828, v80829);
          sim_r.txns.push({
            kind: 'from',
            to: v4897,
            tok: v4899
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v4900
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v4899
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      return;
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      undefined /* setApiDetails */;
      const v11817 = stdlib.addressEq(v11169, v4897);
      stdlib.assert(v11817, {
        at: './staker.rsh:345:12:application',
        fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: 'only Deployer can rewardHalt',
        who: 'Any_halt'
        });
      const v11818 = stdlib.ge(v10452, v10427);
      stdlib.assert(v11818, {
        at: './staker.rsh:346:12:application',
        fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: 'can only halt after the end',
        who: 'Any_halt'
        });
      const v11819 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:347:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v11819, {
        at: './staker.rsh:347:12:application',
        fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: 'can only halt when no stake is left',
        who: 'Any_halt'
        });
      ;
      const v11892 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v11893 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v11897 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v11898 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v11899 = [v11893, v11897, v11898];
      const v11900 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v11899);
      ;
      const v12104 = null;
      const v12105 = await txn1.getOutput('Any_halt', 'v12104', ctc0, v12104);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v11798, v12105), {
          at: './staker.rsh:344:11:application',
          fs: ['at ./staker.rsh:344:11:application call to [unknown function] (defined at: ./staker.rsh:344:11:function exp)', 'at ./staker.rsh:349:10:application call to "k" (defined at: ./staker.rsh:348:42:function exp)', 'at ./staker.rsh:348:42:application call to [unknown function] (defined at: ./staker.rsh:348:42:function exp)'],
          msg: 'out',
          who: 'Any_halt'
          });
        }
      else {
        }
      
      const v80825 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
      const v80826 = stdlib.add(v10458, v80825);
      ;
      const v80827 = v11900[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
      const v80828 = v80827[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
      const v80829 = (stdlib.le(await ctc.getBalance(v4899), v80828) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v80828));
      const v80830 = stdlib.add(v80828, v80829);
      ;
      return;
      
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      return;
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      return;
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      return;
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_nop6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_nop6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_nop6 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc12,
    Any_halt0_2664: ctc11,
    Any_nop0_2664: ctc11,
    Any_reclaimRewards0_2664: ctc11,
    Staker_harvest0_2664: ctc11,
    Staker_stake0_2664: ctc13,
    Staker_withdraw0_2664: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v11041 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:327:23:application call to [unknown function] (defined at: ./staker.rsh:327:23:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_nop0_2664" (defined at: ./staker.rsh:327:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Any_nop'
    });
  const v11045 = ['Any_nop0_2664', v11041];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v11045],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:329:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:329:20:decimal', stdlib.UInt_max, '0'), v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_nop"
            });
          ;
          const v12517 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v12518 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v12522 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v12523 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v12524 = [v12518, v12522, v12523];
          const v12525 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v12524);
          ;
          const v12739 = null;
          const v12740 = await txn1.getOutput('Any_nop', 'v12739', ctc0, v12739);
          
          const v81230 = v10446;
          const v81232 = v10448;
          const v81233 = v10452;
          const v81234 = v10450;
          const v81235 = v11171;
          const v81236 = v10451;
          const v81237 = v12525;
          const v81238 = v10458;
          const v81239 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:264:39:decimal', stdlib.UInt_max, '0'));
          const v81240 = v10446 ? v81239 : false;
          if (v81240) {
            const v81281 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
            const v81282 = stdlib.add(v10458, v81281);
            sim_r.txns.push({
              kind: 'from',
              to: v4923,
              tok: undefined /* Nothing */
              });
            const v81283 = v12525[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v81284 = v81283[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v81285 = (sim_r.txns.push({
              kind: 'info',
              tok: v4899
              }),stdlib.le(await ctc.getBalance(v4899), v81284) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v81284));
            const v81286 = stdlib.add(v81284, v81285);
            sim_r.txns.push({
              kind: 'from',
              to: v4897,
              tok: v4899
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4900
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4899
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v81242 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
            const v81243 = stdlib.le(v10427, v10451);
            const v81244 = v81243 ? v10427 : v10451;
            let v81245;
            const v81246 = stdlib.ge(v10452, v81244);
            if (v81246) {
              v81245 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v81247 = stdlib.sub(v81244, v10452);
              v81245 = v81247;
              }
            const v81248 = stdlib.mul(v81245, v4924);
            const v81249 = stdlib.add(v81242, v81248);
            const v81250 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
            const v81251 = stdlib.le(v81249, v81250);
            const v81252 = v81251 ? v81249 : v81250;
            const v81253 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
            let v81254;
            if (v81246) {
              v81254 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v81255 = stdlib.sub(v81244, v10452);
              v81254 = v81255;
              }
            const v81256 = stdlib.mul(v81254, v4926);
            const v81257 = stdlib.add(v81253, v81256);
            const v81258 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
            const v81259 = stdlib.le(v81257, v81258);
            const v81260 = v81259 ? v81257 : v81258;
            const v81261 = [v81252, v81260];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      return;
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      return;
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      undefined /* setApiDetails */;
      ;
      const v12517 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v12518 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v12522 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v12523 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v12524 = [v12518, v12522, v12523];
      const v12525 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v12524);
      ;
      const v12739 = null;
      const v12740 = await txn1.getOutput('Any_nop', 'v12739', ctc0, v12739);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v12423, v12740), {
          at: './staker.rsh:327:11:application',
          fs: ['at ./staker.rsh:327:11:application call to [unknown function] (defined at: ./staker.rsh:327:11:function exp)', 'at ./staker.rsh:330:10:application call to "k" (defined at: ./staker.rsh:329:41:function exp)', 'at ./staker.rsh:329:41:application call to [unknown function] (defined at: ./staker.rsh:329:41:function exp)'],
          msg: 'out',
          who: 'Any_nop'
          });
        }
      else {
        }
      
      const v81230 = v10446;
      const v81232 = v10448;
      const v81233 = v10452;
      const v81234 = v10450;
      const v81235 = v11171;
      const v81236 = v10451;
      const v81237 = v12525;
      const v81238 = v10458;
      const v81239 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:264:39:decimal', stdlib.UInt_max, '0'));
      const v81240 = v10446 ? v81239 : false;
      if (v81240) {
        const v81281 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
        const v81282 = stdlib.add(v10458, v81281);
        ;
        const v81283 = v12525[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v81284 = v81283[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v81285 = (stdlib.le(await ctc.getBalance(v4899), v81284) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v81284));
        const v81286 = stdlib.add(v81284, v81285);
        ;
        return;
        }
      else {
        const v81242 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
        const v81243 = stdlib.le(v10427, v10451);
        const v81244 = v81243 ? v10427 : v10451;
        let v81245;
        const v81246 = stdlib.ge(v10452, v81244);
        if (v81246) {
          v81245 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v81247 = stdlib.sub(v81244, v10452);
          v81245 = v81247;
          }
        const v81248 = stdlib.mul(v81245, v4924);
        const v81249 = stdlib.add(v81242, v81248);
        const v81250 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
        const v81251 = stdlib.le(v81249, v81250);
        const v81252 = v81251 ? v81249 : v81250;
        const v81253 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
        let v81254;
        if (v81246) {
          v81254 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v81255 = stdlib.sub(v81244, v10452);
          v81254 = v81255;
          }
        const v81256 = stdlib.mul(v81254, v4926);
        const v81257 = stdlib.add(v81253, v81256);
        const v81258 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
        const v81259 = stdlib.le(v81257, v81258);
        const v81260 = v81259 ? v81257 : v81258;
        const v81261 = [v81252, v81260];
        return;
        }
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      return;
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      return;
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_reclaimRewards6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_reclaimRewards6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_reclaimRewards6 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc12,
    Any_halt0_2664: ctc11,
    Any_nop0_2664: ctc11,
    Any_reclaimRewards0_2664: ctc11,
    Staker_harvest0_2664: ctc11,
    Staker_stake0_2664: ctc13,
    Staker_withdraw0_2664: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v11049 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:336:34:application call to [unknown function] (defined at: ./staker.rsh:336:34:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_reclaimRewards0_2664" (defined at: ./staker.rsh:336:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Any_reclaimRewards'
    });
  const v11050 = stdlib.ge(v10452, v10428);
  stdlib.assert(v11050, {
    at: './staker.rsh:337:12:application',
    fs: ['at ./staker.rsh:336:34:application call to [unknown function] (defined at: ./staker.rsh:336:34:function exp)', 'at ./staker.rsh:165:19:application call to "runAny_reclaimRewards0_2664" (defined at: ./staker.rsh:336:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: null,
    who: 'Any_reclaimRewards'
    });
  const v11054 = ['Any_reclaimRewards0_2664', v11049];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v11054],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:338:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:338:21:decimal', stdlib.UInt_max, '0'), v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_reclaimRewards"
            });
          ;
          const v13142 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13143 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v13147 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13148 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v13149 = [v13143, v13147, v13148];
          const v13150 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13149);
          ;
          const v13375 = null;
          const v13376 = await txn1.getOutput('Any_reclaimRewards', 'v13375', ctc0, v13375);
          
          const v13383 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
          const v13384 = stdlib.add(v13383, v10458);
          const v13385 = stdlib.add(v10458, v13383);
          const v13389 = stdlib.sub(v13384, v13385);
          sim_r.txns.push({
            kind: 'from',
            to: v4923,
            tok: undefined /* Nothing */
            });
          const v13390 = v13150[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
          const v13391 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
          const v13394 = (sim_r.txns.push({
            kind: 'info',
            tok: v4899
            }),stdlib.le(await ctc.getBalance(v4899), v13391) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v13391));
          const v13395 = stdlib.add(v13394, v13391);
          const v13398 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '1')];
          const v13399 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '2')];
          const v13400 = [v13395, v13398, v13399];
          const v13401 = stdlib.Array_set(v13150, stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0'), v13400);
          const v13402 = stdlib.add(v13391, v13394);
          const v13403 = v13401[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0')];
          const v13404 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0')];
          const v13408 = stdlib.sub(v13404, v13402);
          const v13411 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '1')];
          const v13412 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '2')];
          const v13413 = [v13408, v13411, v13412];
          const v13414 = stdlib.Array_set(v13401, stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0'), v13413);
          sim_r.txns.push({
            kind: 'from',
            to: v4897,
            tok: v4899
            });
          const v81686 = v10446;
          const v81688 = v10444;
          const v81689 = v10452;
          const v81690 = v10450;
          const v81691 = v11171;
          const v81692 = v10451;
          const v81693 = v13414;
          const v81694 = v13389;
          const v81695 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:264:39:decimal', stdlib.UInt_max, '0'));
          const v81696 = v10446 ? v81695 : false;
          if (v81696) {
            const v81737 = (stdlib.le(await ctc.getBalance(), v13389) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v13389));
            const v81738 = stdlib.add(v13389, v81737);
            sim_r.txns.push({
              kind: 'from',
              to: v4923,
              tok: undefined /* Nothing */
              });
            const v81739 = v13414[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v81740 = v81739[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v81741 = (sim_r.txns.push({
              kind: 'info',
              tok: v4899
              }),stdlib.le(await ctc.getBalance(v4899), v81740) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v81740));
            const v81742 = stdlib.add(v81740, v81741);
            sim_r.txns.push({
              kind: 'from',
              to: v4897,
              tok: v4899
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4900
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4899
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v81698 = v10444[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
            const v81699 = stdlib.le(v10427, v10451);
            const v81700 = v81699 ? v10427 : v10451;
            let v81701;
            const v81702 = stdlib.ge(v10452, v81700);
            if (v81702) {
              v81701 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v81703 = stdlib.sub(v81700, v10452);
              v81701 = v81703;
              }
            const v81704 = stdlib.mul(v81701, v4924);
            const v81705 = stdlib.add(v81698, v81704);
            const v81707 = stdlib.le(v81705, v81698);
            const v81708 = v81707 ? v81705 : v81698;
            const v81709 = v10444[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
            let v81710;
            if (v81702) {
              v81710 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v81711 = stdlib.sub(v81700, v10452);
              v81710 = v81711;
              }
            const v81712 = stdlib.mul(v81710, v4926);
            const v81713 = stdlib.add(v81709, v81712);
            const v81715 = stdlib.le(v81713, v81709);
            const v81716 = v81715 ? v81713 : v81709;
            const v81717 = [v81708, v81716];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      return;
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      return;
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      return;
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      undefined /* setApiDetails */;
      const v13084 = stdlib.ge(v10452, v10428);
      stdlib.assert(v13084, {
        at: './staker.rsh:337:12:application',
        fs: ['at ./staker.rsh:336:34:application call to [unknown function] (defined at: ./staker.rsh:336:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:336:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: null,
        who: 'Any_reclaimRewards'
        });
      ;
      const v13142 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13143 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v13147 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13148 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v13149 = [v13143, v13147, v13148];
      const v13150 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13149);
      ;
      const v13375 = null;
      const v13376 = await txn1.getOutput('Any_reclaimRewards', 'v13375', ctc0, v13375);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v13048, v13376), {
          at: './staker.rsh:336:11:application',
          fs: ['at ./staker.rsh:336:11:application call to [unknown function] (defined at: ./staker.rsh:336:11:function exp)', 'at ./staker.rsh:339:10:application call to "k" (defined at: ./staker.rsh:338:42:function exp)', 'at ./staker.rsh:338:42:application call to [unknown function] (defined at: ./staker.rsh:338:42:function exp)'],
          msg: 'out',
          who: 'Any_reclaimRewards'
          });
        }
      else {
        }
      
      const v13383 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
      const v13384 = stdlib.add(v13383, v10458);
      const v13385 = stdlib.add(v10458, v13383);
      const v13389 = stdlib.sub(v13384, v13385);
      ;
      const v13390 = v13150[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
      const v13391 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
      const v13394 = (stdlib.le(await ctc.getBalance(v4899), v13391) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v13391));
      const v13395 = stdlib.add(v13394, v13391);
      const v13398 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '1')];
      const v13399 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '2')];
      const v13400 = [v13395, v13398, v13399];
      const v13401 = stdlib.Array_set(v13150, stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0'), v13400);
      const v13402 = stdlib.add(v13391, v13394);
      const v13403 = v13401[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0')];
      const v13404 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0')];
      const v13408 = stdlib.sub(v13404, v13402);
      const v13411 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '1')];
      const v13412 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '2')];
      const v13413 = [v13408, v13411, v13412];
      const v13414 = stdlib.Array_set(v13401, stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0'), v13413);
      ;
      const v81686 = v10446;
      const v81688 = v10444;
      const v81689 = v10452;
      const v81690 = v10450;
      const v81691 = v11171;
      const v81692 = v10451;
      const v81693 = v13414;
      const v81694 = v13389;
      const v81695 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:264:39:decimal', stdlib.UInt_max, '0'));
      const v81696 = v10446 ? v81695 : false;
      if (v81696) {
        const v81737 = (stdlib.le(await ctc.getBalance(), v13389) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v13389));
        const v81738 = stdlib.add(v13389, v81737);
        ;
        const v81739 = v13414[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v81740 = v81739[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v81741 = (stdlib.le(await ctc.getBalance(v4899), v81740) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v81740));
        const v81742 = stdlib.add(v81740, v81741);
        ;
        return;
        }
      else {
        const v81698 = v10444[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
        const v81699 = stdlib.le(v10427, v10451);
        const v81700 = v81699 ? v10427 : v10451;
        let v81701;
        const v81702 = stdlib.ge(v10452, v81700);
        if (v81702) {
          v81701 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v81703 = stdlib.sub(v81700, v10452);
          v81701 = v81703;
          }
        const v81704 = stdlib.mul(v81701, v4924);
        const v81705 = stdlib.add(v81698, v81704);
        const v81707 = stdlib.le(v81705, v81698);
        const v81708 = v81707 ? v81705 : v81698;
        const v81709 = v10444[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
        let v81710;
        if (v81702) {
          v81710 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v81711 = stdlib.sub(v81700, v10452);
          v81710 = v81711;
          }
        const v81712 = stdlib.mul(v81710, v4926);
        const v81713 = stdlib.add(v81709, v81712);
        const v81715 = stdlib.le(v81713, v81709);
        const v81716 = v81715 ? v81713 : v81709;
        const v81717 = [v81708, v81716];
        return;
        }
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      return;
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
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
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc5], ['stakeToken', ctc5], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc6]]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Setup_abortSetup0_64: ctc8,
    Setup_fund0_64: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    Any_eject0_2664: ctc10,
    Any_halt0_2664: ctc8,
    Any_nop0_2664: ctc8,
    Any_reclaimRewards0_2664: ctc8,
    Staker_harvest0_2664: ctc8,
    Staker_stake0_2664: ctc11,
    Staker_withdraw0_2664: ctc11
    });
  const ctc13 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1, ctc15]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v4876 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v4877 = [v4876, v4876];
  const v4881 = stdlib.protect(ctc7, interact.opts, 'for Deployer\'s interact field opts');
  const v4882 = v4881.rewardToken1;
  const v4883 = v4881.stakeToken;
  
  const v4895 = stdlib.tokenEq(v4882, v4883);
  const v4896 = v4895 ? false : true;
  stdlib.assert(v4896, {
    at: './staker.rsh:92:10:application',
    fs: ['at ./staker.rsh:89:16:application call to [unknown function] (defined at: ./staker.rsh:89:20:function exp)'],
    msg: 'can only reward a different token than the one staked',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4881, v4882, v4883],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:94:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4898, v4899, v4900], secs: v4902, time: v4901, didSend: v45, from: v4897 } = txn1;
      
      const v4905 = v4877[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '0')];
      const v4907 = v4905[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1')];
      const v4908 = v4905[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '2')];
      const v4909 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4907, v4908];
      const v4910 = stdlib.Array_set(v4877, stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '0'), v4909);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4899
        });
      const v4912 = v4910[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1')];
      const v4914 = v4912[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1')];
      const v4915 = v4912[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '2')];
      const v4916 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4914, v4915];
      const v4917 = stdlib.Array_set(v4910, stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1'), v4916);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4900
        });
      ;
      const v4919 = v4898.rewardsPerBlock;
      const v4920 = v4898.duration;
      const v4921 = v4898.startDelay;
      const v4922 = v4898.graceDuration;
      const v4923 = v4898.Rewarder0;
      const v4924 = v4919[stdlib.checkedBigNumberify('./staker.rsh:101:20:array ref', stdlib.UInt_max, '0')];
      const v4925 = stdlib.mul(v4924, v4920);
      const v4926 = v4919[stdlib.checkedBigNumberify('./staker.rsh:102:20:array ref', stdlib.UInt_max, '1')];
      const v4927 = stdlib.mul(v4926, v4920);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v4898, v4899, v4900], secs: v4902, time: v4901, didSend: v45, from: v4897 } = txn1;
  const v4903 = stdlib.tokenEq(v4899, v4900);
  const v4904 = v4903 ? false : true;
  stdlib.assert(v4904, {
    at: './staker.rsh:94:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v4905 = v4877[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '0')];
  const v4907 = v4905[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1')];
  const v4908 = v4905[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '2')];
  const v4909 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4907, v4908];
  const v4910 = stdlib.Array_set(v4877, stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '0'), v4909);
  ;
  const v4912 = v4910[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1')];
  const v4914 = v4912[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1')];
  const v4915 = v4912[stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '2')];
  const v4916 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4914, v4915];
  const v4917 = stdlib.Array_set(v4910, stdlib.checkedBigNumberify('./staker.rsh:94:12:dot', stdlib.UInt_max, '1'), v4916);
  ;
  ;
  const v4919 = v4898.rewardsPerBlock;
  const v4920 = v4898.duration;
  const v4921 = v4898.startDelay;
  const v4922 = v4898.graceDuration;
  const v4923 = v4898.Rewarder0;
  const v4924 = v4919[stdlib.checkedBigNumberify('./staker.rsh:101:20:array ref', stdlib.UInt_max, '0')];
  const v4925 = stdlib.mul(v4924, v4920);
  const v4926 = v4919[stdlib.checkedBigNumberify('./staker.rsh:102:20:array ref', stdlib.UInt_max, '1')];
  const v4927 = stdlib.mul(v4926, v4920);
  const txn2 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4917, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4901,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0'), [[v4927, v4899]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v4930, time: v4929, didSend: v61, from: v4928 } = txn2;
      
      ;
      const v4931 = v4917[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0')];
      const v4932 = v4931[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0')];
      const v4933 = stdlib.add(v4932, v4927);
      const v4936 = v4931[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '1')];
      const v4937 = v4931[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '2')];
      const v4938 = [v4933, v4936, v4937];
      const v4939 = stdlib.Array_set(v4917, stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0'), v4938);
      sim_r.txns.push({
        amt: v4927,
        kind: 'to',
        tok: v4899
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc5, ctc5, ctc17, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4930, time: v4929, didSend: v61, from: v4928 } = txn2;
  ;
  const v4931 = v4917[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0')];
  const v4932 = v4931[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0')];
  const v4933 = stdlib.add(v4932, v4927);
  const v4936 = v4931[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '1')];
  const v4937 = v4931[stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '2')];
  const v4938 = [v4933, v4936, v4937];
  const v4939 = stdlib.Array_set(v4917, stdlib.checkedBigNumberify('./staker.rsh:104:12:dot', stdlib.UInt_max, '0'), v4938);
  ;
  const v4940 = stdlib.addressEq(v4897, v4928);
  stdlib.assert(v4940, {
    at: './staker.rsh:104:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc9],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v4964], secs: v4966, time: v4965, didSend: v135, from: v4963 } = txn3;
  switch (v4964[0]) {
    case 'Setup_abortSetup0_64': {
      const v4967 = v4964[1];
      undefined /* setApiDetails */;
      const v4972 = stdlib.addressEq(v4963, v4897);
      stdlib.assert(v4972, {
        at: './staker.rsh:109:10:application',
        fs: ['at ./staker.rsh:108:30:application call to [unknown function] (defined at: ./staker.rsh:108:30:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:108:30:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v4979 = null;
      await txn3.getOutput('Setup_abortSetup', 'v4979', ctc0, v4979);
      const v4986 = v4939[stdlib.checkedBigNumberify('./staker.rsh:112:36:application', stdlib.UInt_max, '0')];
      const v4987 = v4986[stdlib.checkedBigNumberify('./staker.rsh:112:36:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_64': {
      const v10369 = v4964[1];
      undefined /* setApiDetails */;
      const v10376 = stdlib.addressEq(v4963, v4923);
      stdlib.assert(v10376, {
        at: './staker.rsh:118:10:application',
        fs: ['at ./staker.rsh:117:24:application call to [unknown function] (defined at: ./staker.rsh:117:24:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:117:24:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v10416 = null;
      await txn3.getOutput('Setup_fund', 'v10416', ctc0, v10416);
      const v10425 = stdlib.add(v4929, stdlib.checkedBigNumberify('./staker.rsh:127:39:decimal', stdlib.UInt_max, '2'));
      const v10426 = stdlib.add(v10425, v4921);
      const v10427 = stdlib.add(v10426, v4920);
      const v10428 = stdlib.add(v10427, v4922);
      stdlib.protect(ctc0, await interact.readyForStakers(), {
        at: './staker.rsh:163:36:application',
        fs: ['at ./staker.rsh:163:36:application call to [unknown function] (defined at: ./staker.rsh:163:36:function exp)', 'at ./staker.rsh:163:36:application call to "liftedInteract" (defined at: ./staker.rsh:163:36:application)'],
        msg: 'readyForStakers',
        who: 'Deployer'
        });
      
      const v10444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v10445 = [v4925, v4927];
      let v10446 = false;
      let v10447 = v10444;
      let v10448 = v10445;
      let v10449 = v10426;
      let v10450 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
      let v10451 = v4965;
      let v10452 = v4929;
      let v10457 = v4939;
      let v10458 = v4925;
      
      while (await (async () => {
        const v10784 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:264:39:decimal', stdlib.UInt_max, '0'));
        const v10785 = v10446 ? v10784 : false;
        const v10786 = v10785 ? false : true;
        
        return v10786;})()) {
        const v10788 = v10447[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
        const v10789 = stdlib.le(v10427, v10452);
        const v10790 = v10789 ? v10427 : v10452;
        let v10791;
        const v10792 = stdlib.ge(v10449, v10790);
        if (v10792) {
          v10791 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v10793 = stdlib.sub(v10790, v10449);
          v10791 = v10793;
          }
        const v10795 = stdlib.mul(v10791, v4924);
        const v10796 = stdlib.add(v10788, v10795);
        const v10797 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
        const v10798 = stdlib.le(v10796, v10797);
        const v10799 = v10798 ? v10796 : v10797;
        const v10802 = v10447[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
        let v10805;
        if (v10792) {
          v10805 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v10807 = stdlib.sub(v10790, v10449);
          v10805 = v10807;
          }
        const v10809 = stdlib.mul(v10805, v4926);
        const v10810 = stdlib.add(v10802, v10809);
        const v10811 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
        const v10812 = stdlib.le(v10810, v10811);
        const v10813 = v10812 ? v10810 : v10811;
        const v10816 = [v10799, v10813];
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc12],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn4;
        switch (v11170[0]) {
          case 'Any_eject0_2664': {
            const v11173 = v11170[1];
            undefined /* setApiDetails */;
            const v11178 = v11173[stdlib.checkedBigNumberify('./staker.rsh:308:10:spread', stdlib.UInt_max, '0')];
            const v11179 = v11173[stdlib.checkedBigNumberify('./staker.rsh:308:10:spread', stdlib.UInt_max, '1')];
            const v11180 = stdlib.addressEq(v11169, v11178);
            const v11181 = stdlib.ge(v10452, v10427);
            const v11182 = stdlib.addressEq(v11178, v11179);
            const v11183 = v11181 ? v11182 : false;
            const v11184 = v11180 ? true : v11183;
            stdlib.assert(v11184, {
              at: './staker.rsh:309:12:application',
              fs: ['at ./staker.rsh:308:32:application call to [unknown function] (defined at: ./staker.rsh:308:32:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:308:32:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: 'can only eject under certain conditions',
              who: 'Deployer'
              });
            ;
            const v11267 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v11268 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v11272 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v11273 = v11267[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v11274 = [v11268, v11272, v11273];
            const v11275 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v11274);
            ;
            const v11286 = null;
            await txn4.getOutput('Any_eject', 'v11286', ctc0, v11286);
            const v11294 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11178), null);
            const v11296 = {
              rewards: v10444,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v11297 = stdlib.fromSome(v11294, v11296);
            const v11298 = v11297.stake;
            const v11303 = v11297.rewards;
            const v11304 = v11303[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
            let v11309;
            if (v10792) {
              v11309 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11311 = stdlib.sub(v10790, v10449);
              v11309 = v11311;
              }
            const v11313 = stdlib.mul(v11309, v4924);
            const v11314 = stdlib.add(v10788, v11313);
            const v11316 = stdlib.le(v11314, v10797);
            const v11317 = v11316 ? v11314 : v10797;
            let v11320;
            const v11321 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
            if (v11321) {
              v11320 = v11317;
              }
            else {
              const v11322 = stdlib.muldiv(v11317, v11298, v10450);
              v11320 = v11322;
              }
            let v11323;
            const v11324 = stdlib.ge(v11304, v11320);
            if (v11324) {
              v11323 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11325 = stdlib.sub(v11320, v11304);
              v11323 = v11325;
              }
            const v11326 = stdlib.le(v11323, v10799);
            const v11327 = v11326 ? v11323 : v10799;
            const v11339 = v11303[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
            let v11344;
            if (v10792) {
              v11344 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11346 = stdlib.sub(v10790, v10449);
              v11344 = v11346;
              }
            const v11348 = stdlib.mul(v11344, v4926);
            const v11349 = stdlib.add(v10802, v11348);
            const v11351 = stdlib.le(v11349, v10811);
            const v11352 = v11351 ? v11349 : v10811;
            let v11355;
            if (v11321) {
              v11355 = v11352;
              }
            else {
              const v11357 = stdlib.muldiv(v11352, v11298, v10450);
              v11355 = v11357;
              }
            let v11358;
            const v11359 = stdlib.ge(v11339, v11355);
            if (v11359) {
              v11358 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11360 = stdlib.sub(v11355, v11339);
              v11358 = v11360;
              }
            const v11361 = stdlib.le(v11358, v10813);
            const v11362 = v11361 ? v11358 : v10813;
            const v11364 = [v11327, v11362];
            const v11373 = stdlib.sub(v10458, v11327);
            ;
            const v11374 = v11275[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
            const v11375 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
            const v11379 = stdlib.sub(v11375, v11362);
            const v11382 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '1')];
            const v11383 = v11374[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '2')];
            const v11384 = [v11379, v11382, v11383];
            const v11385 = stdlib.Array_set(v11275, stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0'), v11384);
            ;
            const v11387 = stdlib.sub(v10797, v11327);
            const v11389 = stdlib.sub(v10811, v11362);
            const v11402 = stdlib.add(v11304, v11327);
            const v11404 = stdlib.add(v11339, v11362);
            const v11405 = [v11402, v11404];
            const v11406 = {
              rewards: v11405,
              stake: v11298
              };
            await stdlib.mapSet(map0, v11178, v11406);
            const v11411 = [v11387, v11389];
            const v11412 = {
              totalRemaining: v11411,
              userReceived: v11364
              };
            const v11417 = v11406.stake;
            const v11423 = stdlib.sub(v10450, v11417);
            const v11424 = stdlib.sub(v11417, v11417);
            const v11429 = v11406.rewards;
            const v11433 = v11385[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
            const v11434 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '0')];
            const v11438 = stdlib.sub(v11434, v11417);
            const v11441 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
            const v11442 = v11433[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '2')];
            const v11443 = [v11438, v11441, v11442];
            const v11444 = stdlib.Array_set(v11385, stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1'), v11443);
            ;
            const v11445 = v11429[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '0')];
            let v11446;
            const v11447 = stdlib.eq(v11423, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
            if (v11447) {
              v11446 = v10799;
              }
            else {
              const v11448 = stdlib.muldiv(v10799, v11417, v11423);
              v11446 = v11448;
              }
            let v11449;
            const v11450 = stdlib.ge(v11446, v11445);
            if (v11450) {
              v11449 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11451 = stdlib.sub(v11445, v11446);
              v11449 = v11451;
              }
            const v11452 = v11429[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '1')];
            let v11453;
            if (v11447) {
              v11453 = v10813;
              }
            else {
              const v11455 = stdlib.muldiv(v10813, v11417, v11423);
              v11453 = v11455;
              }
            let v11456;
            const v11457 = stdlib.ge(v11453, v11452);
            if (v11457) {
              v11456 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11458 = stdlib.sub(v11452, v11453);
              v11456 = v11458;
              }
            const v11459 = [v11449, v11456];
            const v11460 = {
              rewards: v11459,
              stake: v11424
              };
            await stdlib.mapSet(map0, v11178, v11460);
            const v11461 = {
              newEveryoneStaked: v11423,
              newUserStaked: v11424
              };
            null;
            const v11466 = stdlib.sub(v10799, v11327);
            const v11467 = stdlib.sub(v10813, v11362);
            const v11468 = [v11466, v11467];
            const cv10446 = v10446;
            const cv10447 = v11468;
            const cv10448 = v11411;
            const cv10449 = v10452;
            const cv10450 = v11423;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v11444;
            const cv10458 = v11373;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          case 'Any_halt0_2664': {
            const v11798 = v11170[1];
            undefined /* setApiDetails */;
            const v11817 = stdlib.addressEq(v11169, v4897);
            stdlib.assert(v11817, {
              at: './staker.rsh:345:12:application',
              fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: 'only Deployer can rewardHalt',
              who: 'Deployer'
              });
            const v11818 = stdlib.ge(v10452, v10427);
            stdlib.assert(v11818, {
              at: './staker.rsh:346:12:application',
              fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: 'can only halt after the end',
              who: 'Deployer'
              });
            const v11819 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:347:28:decimal', stdlib.UInt_max, '0'));
            stdlib.assert(v11819, {
              at: './staker.rsh:347:12:application',
              fs: ['at ./staker.rsh:344:24:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:344:24:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: 'can only halt when no stake is left',
              who: 'Deployer'
              });
            ;
            const v11892 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v11893 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v11897 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v11898 = v11892[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v11899 = [v11893, v11897, v11898];
            const v11900 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v11899);
            ;
            const v12104 = null;
            await txn4.getOutput('Any_halt', 'v12104', ctc0, v12104);
            const cv10446 = true;
            const cv10447 = v10816;
            const cv10448 = v10448;
            const cv10449 = v10452;
            const cv10450 = v10450;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v11900;
            const cv10458 = v10458;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          case 'Any_nop0_2664': {
            const v12423 = v11170[1];
            undefined /* setApiDetails */;
            ;
            const v12517 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v12518 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v12522 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v12523 = v12517[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v12524 = [v12518, v12522, v12523];
            const v12525 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v12524);
            ;
            const v12739 = null;
            await txn4.getOutput('Any_nop', 'v12739', ctc0, v12739);
            const cv10446 = v10446;
            const cv10447 = v10816;
            const cv10448 = v10448;
            const cv10449 = v10452;
            const cv10450 = v10450;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v12525;
            const cv10458 = v10458;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          case 'Any_reclaimRewards0_2664': {
            const v13048 = v11170[1];
            undefined /* setApiDetails */;
            const v13084 = stdlib.ge(v10452, v10428);
            stdlib.assert(v13084, {
              at: './staker.rsh:337:12:application',
              fs: ['at ./staker.rsh:336:34:application call to [unknown function] (defined at: ./staker.rsh:336:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:336:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            ;
            const v13142 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13143 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v13147 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13148 = v13142[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v13149 = [v13143, v13147, v13148];
            const v13150 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13149);
            ;
            const v13375 = null;
            await txn4.getOutput('Any_reclaimRewards', 'v13375', ctc0, v13375);
            const v13383 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
            const v13384 = stdlib.add(v13383, v10458);
            const v13385 = stdlib.add(v10458, v13383);
            const v13389 = stdlib.sub(v13384, v13385);
            ;
            const v13390 = v13150[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v13391 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v13394 = (stdlib.le(await ctc.getBalance(v4899), v13391) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v13391));
            const v13395 = stdlib.add(v13394, v13391);
            const v13398 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '1')];
            const v13399 = v13390[stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '2')];
            const v13400 = [v13395, v13398, v13399];
            const v13401 = stdlib.Array_set(v13150, stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0'), v13400);
            const v13402 = stdlib.add(v13391, v13394);
            const v13403 = v13401[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0')];
            const v13404 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0')];
            const v13408 = stdlib.sub(v13404, v13402);
            const v13411 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '1')];
            const v13412 = v13403[stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '2')];
            const v13413 = [v13408, v13411, v13412];
            const v13414 = stdlib.Array_set(v13401, stdlib.checkedBigNumberify('./staker.rsh:160:91:application', stdlib.UInt_max, '0'), v13413);
            ;
            const cv10446 = v10446;
            const cv10447 = v10444;
            const cv10448 = v10444;
            const cv10449 = v10452;
            const cv10450 = v10450;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v13414;
            const cv10458 = v13389;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          case 'Staker_harvest0_2664': {
            const v13673 = v11170[1];
            undefined /* setApiDetails */;
            ;
            const v13767 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13768 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v13772 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v13773 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v13774 = [v13768, v13772, v13773];
            const v13775 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13774);
            ;
            const v14047 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11169), null);
            const v14049 = {
              rewards: v10444,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v14050 = stdlib.fromSome(v14047, v14049);
            const v14051 = v14050.stake;
            const v14056 = v14050.rewards;
            const v14057 = v14056[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
            let v14062;
            if (v10792) {
              v14062 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14064 = stdlib.sub(v10790, v10449);
              v14062 = v14064;
              }
            const v14066 = stdlib.mul(v14062, v4924);
            const v14067 = stdlib.add(v10788, v14066);
            const v14069 = stdlib.le(v14067, v10797);
            const v14070 = v14069 ? v14067 : v10797;
            let v14073;
            const v14074 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
            if (v14074) {
              v14073 = v14070;
              }
            else {
              const v14075 = stdlib.muldiv(v14070, v14051, v10450);
              v14073 = v14075;
              }
            let v14076;
            const v14077 = stdlib.ge(v14057, v14073);
            if (v14077) {
              v14076 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14078 = stdlib.sub(v14073, v14057);
              v14076 = v14078;
              }
            const v14079 = stdlib.le(v14076, v10799);
            const v14080 = v14079 ? v14076 : v10799;
            const v14092 = v14056[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
            let v14097;
            if (v10792) {
              v14097 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14099 = stdlib.sub(v10790, v10449);
              v14097 = v14099;
              }
            const v14101 = stdlib.mul(v14097, v4926);
            const v14102 = stdlib.add(v10802, v14101);
            const v14104 = stdlib.le(v14102, v10811);
            const v14105 = v14104 ? v14102 : v10811;
            let v14108;
            if (v14074) {
              v14108 = v14105;
              }
            else {
              const v14110 = stdlib.muldiv(v14105, v14051, v10450);
              v14108 = v14110;
              }
            let v14111;
            const v14112 = stdlib.ge(v14092, v14108);
            if (v14112) {
              v14111 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v14113 = stdlib.sub(v14108, v14092);
              v14111 = v14113;
              }
            const v14114 = stdlib.le(v14111, v10813);
            const v14115 = v14114 ? v14111 : v10813;
            const v14117 = [v14080, v14115];
            const v14126 = stdlib.sub(v10458, v14080);
            ;
            const v14127 = v13775[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
            const v14128 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
            const v14132 = stdlib.sub(v14128, v14115);
            const v14135 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '1')];
            const v14136 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '2')];
            const v14137 = [v14132, v14135, v14136];
            const v14138 = stdlib.Array_set(v13775, stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0'), v14137);
            ;
            const v14140 = stdlib.sub(v10797, v14080);
            const v14142 = stdlib.sub(v10811, v14115);
            const v14155 = stdlib.add(v14057, v14080);
            const v14157 = stdlib.add(v14092, v14115);
            const v14158 = [v14155, v14157];
            const v14159 = {
              rewards: v14158,
              stake: v14051
              };
            await stdlib.mapSet(map0, v11169, v14159);
            const v14164 = [v14140, v14142];
            const v14165 = {
              totalRemaining: v14164,
              userReceived: v14117
              };
            await txn4.getOutput('Staker_harvest', 'v14165', ctc13, v14165);
            null;
            const v14183 = stdlib.sub(v10799, v14080);
            const v14184 = stdlib.sub(v10813, v14115);
            const v14185 = [v14183, v14184];
            const cv10446 = v10446;
            const cv10447 = v14185;
            const cv10448 = v14164;
            const cv10449 = v10452;
            const cv10450 = v10450;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v14138;
            const cv10458 = v14126;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          case 'Staker_stake0_2664': {
            const v14298 = v11170[1];
            undefined /* setApiDetails */;
            const v14349 = v14298[stdlib.checkedBigNumberify('./staker.rsh:265:10:spread', stdlib.UInt_max, '0')];
            const v14350 = stdlib.lt(v10452, v10427);
            stdlib.assert(v14350, {
              at: './staker.rsh:266:12:application',
              fs: ['at ./staker.rsh:265:31:application call to [unknown function] (defined at: ./staker.rsh:265:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:265:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: 'can only stake before the end',
              who: 'Deployer'
              });
            ;
            const v14392 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v14393 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v14394 = stdlib.add(v14393, v14349);
            const v14397 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v14398 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v14399 = [v14394, v14397, v14398];
            const v14400 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v14399);
            ;
            const v14819 = stdlib.add(v10450, v14349);
            const v14820 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11169), null);
            const v14822 = {
              rewards: v10444,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v14823 = stdlib.fromSome(v14820, v14822);
            const v14824 = v14823.stake;
            const v14825 = stdlib.add(v14824, v14349);
            const v14830 = v14823.rewards;
            let v14832;
            const v14833 = stdlib.eq(v14819, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
            if (v14833) {
              v14832 = v10799;
              }
            else {
              const v14834 = stdlib.muldiv(v10799, v14349, v14819);
              v14832 = v14834;
              }
            const v14835 = v14830[stdlib.checkedBigNumberify('./staker.rsh:273:27:array ref', stdlib.UInt_max, '0')];
            const v14836 = stdlib.add(v14835, v14832);
            let v14837;
            if (v14833) {
              v14837 = v10813;
              }
            else {
              const v14839 = stdlib.muldiv(v10813, v14349, v14819);
              v14837 = v14839;
              }
            const v14840 = v14830[stdlib.checkedBigNumberify('./staker.rsh:273:27:array ref', stdlib.UInt_max, '1')];
            const v14841 = stdlib.add(v14840, v14837);
            const v14842 = [v14836, v14841];
            const v14843 = {
              rewards: v14842,
              stake: v14825
              };
            await stdlib.mapSet(map0, v11169, v14843);
            const v14844 = {
              newEveryoneStaked: v14819,
              newUserStaked: v14825
              };
            await txn4.getOutput('Staker_stake', 'v14844', ctc14, v14844);
            null;
            const cv10446 = v10446;
            const cv10447 = v10816;
            const cv10448 = v10448;
            const cv10449 = v10452;
            const cv10450 = v14819;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v14400;
            const cv10458 = v10458;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          case 'Staker_withdraw0_2664': {
            const v14923 = v11170[1];
            undefined /* setApiDetails */;
            const v14995 = v14923[stdlib.checkedBigNumberify('./staker.rsh:289:10:spread', stdlib.UInt_max, '0')];
            const v14996 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11169), null);
            const v14998 = {
              rewards: v10444,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v14999 = stdlib.fromSome(v14996, v14998);
            const v15000 = v14999.stake;
            const v15001 = stdlib.le(v14995, v15000);
            stdlib.assert(v15001, {
              at: './staker.rsh:290:12:application',
              fs: ['at ./staker.rsh:289:34:application call to [unknown function] (defined at: ./staker.rsh:289:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:289:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            ;
            const v15017 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v15018 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
            const v15022 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
            const v15023 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
            const v15024 = [v15018, v15022, v15023];
            const v15025 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v15024);
            ;
            const v15496 = stdlib.sub(v10450, v14995);
            const v15497 = stdlib.sub(v15000, v14995);
            const v15502 = v14999.rewards;
            const v15506 = v15025[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
            const v15507 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '0')];
            const v15511 = stdlib.sub(v15507, v14995);
            const v15514 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
            const v15515 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '2')];
            const v15516 = [v15511, v15514, v15515];
            const v15517 = stdlib.Array_set(v15025, stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1'), v15516);
            ;
            const v15518 = v15502[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '0')];
            let v15519;
            const v15520 = stdlib.eq(v15496, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
            if (v15520) {
              v15519 = v10799;
              }
            else {
              const v15521 = stdlib.muldiv(v10799, v14995, v15496);
              v15519 = v15521;
              }
            let v15522;
            const v15523 = stdlib.ge(v15519, v15518);
            if (v15523) {
              v15522 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15524 = stdlib.sub(v15518, v15519);
              v15522 = v15524;
              }
            const v15525 = v15502[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '1')];
            let v15526;
            if (v15520) {
              v15526 = v10813;
              }
            else {
              const v15528 = stdlib.muldiv(v10813, v14995, v15496);
              v15526 = v15528;
              }
            let v15529;
            const v15530 = stdlib.ge(v15526, v15525);
            if (v15530) {
              v15529 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v15531 = stdlib.sub(v15525, v15526);
              v15529 = v15531;
              }
            const v15532 = [v15522, v15529];
            const v15533 = {
              rewards: v15532,
              stake: v15497
              };
            await stdlib.mapSet(map0, v11169, v15533);
            const v15534 = {
              newEveryoneStaked: v15496,
              newUserStaked: v15497
              };
            await txn4.getOutput('Staker_withdraw', 'v15534', ctc14, v15534);
            null;
            const cv10446 = v10446;
            const cv10447 = v10816;
            const cv10448 = v10448;
            const cv10449 = v10452;
            const cv10450 = v15496;
            const cv10451 = v11171;
            const cv10452 = v10451;
            const cv10457 = v15517;
            const cv10458 = v10458;
            
            v10446 = cv10446;
            v10447 = cv10447;
            v10448 = cv10448;
            v10449 = cv10449;
            v10450 = cv10450;
            v10451 = cv10451;
            v10452 = cv10452;
            v10457 = cv10457;
            v10458 = cv10458;
            
            continue;
            break;
            }
          }
        
        }
      const v15730 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
      const v15732 = stdlib.add(v10458, v15730);
      ;
      const v15737 = v10457[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
      const v15738 = v15737[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
      const v15741 = (stdlib.le(await ctc.getBalance(v4899), v15738) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v15738));
      const v15749 = stdlib.add(v15738, v15741);
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Setup_abortSetup0_64: ctc11,
    Setup_fund0_64: ctc11
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc10]);
  const v4941 = ctc.selfAddress();
  const v4943 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:108:30:application call to [unknown function] (defined at: ./staker.rsh:108:30:function exp)', 'at ./staker.rsh:107:7:application call to "runSetup_abortSetup0_64" (defined at: ./staker.rsh:108:8:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
    msg: 'in',
    who: 'Setup_abortSetup'
    });
  const v4944 = stdlib.addressEq(v4941, v4897);
  stdlib.assert(v4944, {
    at: './staker.rsh:109:10:application',
    fs: ['at ./staker.rsh:108:30:application call to [unknown function] (defined at: ./staker.rsh:108:30:function exp)', 'at ./staker.rsh:107:7:application call to "runSetup_abortSetup0_64" (defined at: ./staker.rsh:108:8:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
    msg: null,
    who: 'Setup_abortSetup'
    });
  const v4948 = ['Setup_abortSetup0_64', v4943];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939, v4948],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:110:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4964], secs: v4966, time: v4965, didSend: v135, from: v4963 } = txn1;
      
      switch (v4964[0]) {
        case 'Setup_abortSetup0_64': {
          const v4967 = v4964[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_abortSetup"
            });
          ;
          const v4979 = null;
          const v4980 = await txn1.getOutput('Setup_abortSetup', 'v4979', ctc0, v4979);
          
          const v4986 = v4939[stdlib.checkedBigNumberify('./staker.rsh:112:36:application', stdlib.UInt_max, '0')];
          const v4987 = v4986[stdlib.checkedBigNumberify('./staker.rsh:112:36:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v4897,
            tok: v4899
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v4900
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v4899
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Setup_fund0_64': {
          const v10369 = v4964[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc10, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v4964], secs: v4966, time: v4965, didSend: v135, from: v4963 } = txn1;
  switch (v4964[0]) {
    case 'Setup_abortSetup0_64': {
      const v4967 = v4964[1];
      undefined /* setApiDetails */;
      const v4972 = stdlib.addressEq(v4963, v4897);
      stdlib.assert(v4972, {
        at: './staker.rsh:109:10:application',
        fs: ['at ./staker.rsh:108:30:application call to [unknown function] (defined at: ./staker.rsh:108:30:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:108:30:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
        msg: null,
        who: 'Setup_abortSetup'
        });
      ;
      const v4979 = null;
      const v4980 = await txn1.getOutput('Setup_abortSetup', 'v4979', ctc0, v4979);
      if (v135) {
        stdlib.protect(ctc0, await interact.out(v4967, v4980), {
          at: './staker.rsh:108:9:application',
          fs: ['at ./staker.rsh:108:9:application call to [unknown function] (defined at: ./staker.rsh:108:9:function exp)', 'at ./staker.rsh:111:8:application call to "k" (defined at: ./staker.rsh:110:21:function exp)'],
          msg: 'out',
          who: 'Setup_abortSetup'
          });
        }
      else {
        }
      
      const v4986 = v4939[stdlib.checkedBigNumberify('./staker.rsh:112:36:application', stdlib.UInt_max, '0')];
      const v4987 = v4986[stdlib.checkedBigNumberify('./staker.rsh:112:36:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_64': {
      const v10369 = v4964[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Setup_abortSetup0_64: ctc11,
    Setup_fund0_64: ctc11
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc10]);
  const v4950 = ctc.selfAddress();
  const v4952 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:117:24:application call to [unknown function] (defined at: ./staker.rsh:117:24:function exp)', 'at ./staker.rsh:107:7:application call to "runSetup_fund0_64" (defined at: ./staker.rsh:117:8:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
    msg: 'in',
    who: 'Setup_fund'
    });
  const v4953 = stdlib.addressEq(v4950, v4923);
  stdlib.assert(v4953, {
    at: './staker.rsh:118:10:application',
    fs: ['at ./staker.rsh:117:24:application call to [unknown function] (defined at: ./staker.rsh:117:24:function exp)', 'at ./staker.rsh:107:7:application call to "runSetup_fund0_64" (defined at: ./staker.rsh:117:8:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
    msg: null,
    who: 'Setup_fund'
    });
  const v4957 = ['Setup_fund0_64', v4952];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4920, v4921, v4922, v4923, v4924, v4925, v4926, v4927, v4929, v4939, v4957],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [v4925, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4964], secs: v4966, time: v4965, didSend: v135, from: v4963 } = txn1;
      
      switch (v4964[0]) {
        case 'Setup_abortSetup0_64': {
          const v4967 = v4964[1];
          
          break;
          }
        case 'Setup_fund0_64': {
          const v10369 = v4964[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_fund"
            });
          sim_r.txns.push({
            amt: v4925,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v10416 = null;
          const v10417 = await txn1.getOutput('Setup_fund', 'v10416', ctc0, v10416);
          
          const v10425 = stdlib.add(v4929, stdlib.checkedBigNumberify('./staker.rsh:127:39:decimal', stdlib.UInt_max, '2'));
          const v10426 = stdlib.add(v10425, v4921);
          const v10427 = stdlib.add(v10426, v4920);
          const v10428 = stdlib.add(v10427, v4922);
          const v10444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v10445 = [v4925, v4927];
          const v81971 = false;
          const v81973 = v10445;
          const v81974 = v10426;
          const v81975 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
          const v81976 = v4965;
          const v81977 = v4929;
          const v81978 = v4939;
          const v81979 = v4925;
          const v81983 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
          const v81984 = stdlib.le(v10427, v4929);
          const v81985 = v81984 ? v10427 : v4929;
          let v81986;
          const v81987 = stdlib.ge(v10426, v81985);
          if (v81987) {
            v81986 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v81988 = stdlib.sub(v81985, v10426);
            v81986 = v81988;
            }
          const v81989 = stdlib.mul(v81986, v4924);
          const v81991 = v4925;
          const v81992 = stdlib.le(v81989, v4925);
          const v81993 = v81992 ? v81989 : v4925;
          const v81994 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
          let v81995;
          if (v81987) {
            v81995 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v81996 = stdlib.sub(v81985, v10426);
            v81995 = v81996;
            }
          const v81997 = stdlib.mul(v81995, v4926);
          const v81999 = v4927;
          const v82000 = stdlib.le(v81997, v4927);
          const v82001 = v82000 ? v81997 : v4927;
          const v82002 = [v81993, v82001];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc10, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v4964], secs: v4966, time: v4965, didSend: v135, from: v4963 } = txn1;
  switch (v4964[0]) {
    case 'Setup_abortSetup0_64': {
      const v4967 = v4964[1];
      return;
      break;
      }
    case 'Setup_fund0_64': {
      const v10369 = v4964[1];
      undefined /* setApiDetails */;
      const v10376 = stdlib.addressEq(v4963, v4923);
      stdlib.assert(v10376, {
        at: './staker.rsh:118:10:application',
        fs: ['at ./staker.rsh:117:24:application call to [unknown function] (defined at: ./staker.rsh:117:24:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:117:24:function exp)', 'at ./staker.rsh:107:7:application call to [unknown function] (defined at: ./staker.rsh:107:7:function exp)'],
        msg: null,
        who: 'Setup_fund'
        });
      ;
      const v10416 = null;
      const v10417 = await txn1.getOutput('Setup_fund', 'v10416', ctc0, v10416);
      if (v135) {
        stdlib.protect(ctc0, await interact.out(v10369, v10417), {
          at: './staker.rsh:117:9:application',
          fs: ['at ./staker.rsh:117:9:application call to [unknown function] (defined at: ./staker.rsh:117:9:function exp)', 'at ./staker.rsh:119:43:application call to "k" (defined at: ./staker.rsh:119:37:function exp)'],
          msg: 'out',
          who: 'Setup_fund'
          });
        }
      else {
        }
      
      const v10425 = stdlib.add(v4929, stdlib.checkedBigNumberify('./staker.rsh:127:39:decimal', stdlib.UInt_max, '2'));
      const v10426 = stdlib.add(v10425, v4921);
      const v10427 = stdlib.add(v10426, v4920);
      const v10428 = stdlib.add(v10427, v4922);
      const v10444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v10445 = [v4925, v4927];
      const v81971 = false;
      const v81973 = v10445;
      const v81974 = v10426;
      const v81975 = stdlib.checkedBigNumberify('./staker.rsh:165:21:decimal', stdlib.UInt_max, '0');
      const v81976 = v4965;
      const v81977 = v4929;
      const v81978 = v4939;
      const v81979 = v4925;
      const v81983 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
      const v81984 = stdlib.le(v10427, v4929);
      const v81985 = v81984 ? v10427 : v4929;
      let v81986;
      const v81987 = stdlib.ge(v10426, v81985);
      if (v81987) {
        v81986 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v81988 = stdlib.sub(v81985, v10426);
        v81986 = v81988;
        }
      const v81989 = stdlib.mul(v81986, v4924);
      const v81991 = v4925;
      const v81992 = stdlib.le(v81989, v4925);
      const v81993 = v81992 ? v81989 : v4925;
      const v81994 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
      let v81995;
      if (v81987) {
        v81995 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v81996 = stdlib.sub(v81985, v10426);
        v81995 = v81996;
        }
      const v81997 = stdlib.mul(v81995, v4926);
      const v81999 = v4927;
      const v82000 = stdlib.le(v81997, v4927);
      const v82001 = v82000 ? v81997 : v4927;
      const v82002 = [v81993, v82001];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc12,
    Any_halt0_2664: ctc11,
    Any_nop0_2664: ctc11,
    Any_reclaimRewards0_2664: ctc11,
    Staker_harvest0_2664: ctc11,
    Staker_stake0_2664: ctc13,
    Staker_withdraw0_2664: ctc13
    });
  const ctc15 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v11012 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:298:30:application call to [unknown function] (defined at: ./staker.rsh:298:30:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_harvest0_2664" (defined at: ./staker.rsh:298:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v11016 = ['Staker_harvest0_2664', v11012];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v11016],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:299:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:299:21:decimal', stdlib.UInt_max, '0'), v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          ;
          const v13767 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13768 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v13772 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v13773 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v13774 = [v13768, v13772, v13773];
          const v13775 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13774);
          ;
          const v14047 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11169), null);
          const v14049 = {
            rewards: v10444,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v14050 = stdlib.fromSome(v14047, v14049);
          const v14051 = v14050.stake;
          const v14056 = v14050.rewards;
          const v14057 = v14056[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
          let v14062;
          if (v10792) {
            v14062 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v14064 = stdlib.sub(v10790, v10449);
            v14062 = v14064;
            }
          const v14066 = stdlib.mul(v14062, v4924);
          const v14067 = stdlib.add(v10788, v14066);
          const v14069 = stdlib.le(v14067, v10797);
          const v14070 = v14069 ? v14067 : v10797;
          let v14073;
          const v14074 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
          if (v14074) {
            v14073 = v14070;
            }
          else {
            const v14075 = stdlib.muldiv(v14070, v14051, v10450);
            v14073 = v14075;
            }
          let v14076;
          const v14077 = stdlib.ge(v14057, v14073);
          if (v14077) {
            v14076 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v14078 = stdlib.sub(v14073, v14057);
            v14076 = v14078;
            }
          const v14079 = stdlib.le(v14076, v10799);
          const v14080 = v14079 ? v14076 : v10799;
          const v14092 = v14056[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
          let v14097;
          if (v10792) {
            v14097 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v14099 = stdlib.sub(v10790, v10449);
            v14097 = v14099;
            }
          const v14101 = stdlib.mul(v14097, v4926);
          const v14102 = stdlib.add(v10802, v14101);
          const v14104 = stdlib.le(v14102, v10811);
          const v14105 = v14104 ? v14102 : v10811;
          let v14108;
          if (v14074) {
            v14108 = v14105;
            }
          else {
            const v14110 = stdlib.muldiv(v14105, v14051, v10450);
            v14108 = v14110;
            }
          let v14111;
          const v14112 = stdlib.ge(v14092, v14108);
          if (v14112) {
            v14111 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v14113 = stdlib.sub(v14108, v14092);
            v14111 = v14113;
            }
          const v14114 = stdlib.le(v14111, v10813);
          const v14115 = v14114 ? v14111 : v10813;
          const v14117 = [v14080, v14115];
          const v14126 = stdlib.sub(v10458, v14080);
          sim_r.txns.push({
            kind: 'from',
            to: v11169,
            tok: undefined /* Nothing */
            });
          const v14127 = v13775[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
          const v14128 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
          const v14132 = stdlib.sub(v14128, v14115);
          const v14135 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '1')];
          const v14136 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '2')];
          const v14137 = [v14132, v14135, v14136];
          const v14138 = stdlib.Array_set(v13775, stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0'), v14137);
          sim_r.txns.push({
            kind: 'from',
            to: v11169,
            tok: v4899
            });
          const v14140 = stdlib.sub(v10797, v14080);
          const v14142 = stdlib.sub(v10811, v14115);
          const v14155 = stdlib.add(v14057, v14080);
          const v14157 = stdlib.add(v14092, v14115);
          const v14158 = [v14155, v14157];
          const v14159 = {
            rewards: v14158,
            stake: v14051
            };
          await stdlib.simMapSet(sim_r, 0, v11169, v14159);
          const v14164 = [v14140, v14142];
          const v14165 = {
            totalRemaining: v14164,
            userReceived: v14117
            };
          const v14169 = await txn1.getOutput('Staker_harvest', 'v14165', ctc15, v14165);
          
          null;
          const v14183 = stdlib.sub(v10799, v14080);
          const v14184 = stdlib.sub(v10813, v14115);
          const v82256 = v10446;
          const v82258 = v14164;
          const v82259 = v10452;
          const v82260 = v10450;
          const v82261 = v11171;
          const v82262 = v10451;
          const v82263 = v14138;
          const v82264 = v14126;
          const v82266 = v10446 ? v14074 : false;
          if (v82266) {
            const v82307 = (stdlib.le(await ctc.getBalance(), v14126) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14126));
            const v82308 = stdlib.add(v14126, v82307);
            sim_r.txns.push({
              kind: 'from',
              to: v4923,
              tok: undefined /* Nothing */
              });
            const v82309 = v14138[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v82310 = v82309[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v82311 = (sim_r.txns.push({
              kind: 'info',
              tok: v4899
              }),stdlib.le(await ctc.getBalance(v4899), v82310) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v82310));
            const v82312 = stdlib.add(v82310, v82311);
            sim_r.txns.push({
              kind: 'from',
              to: v4897,
              tok: v4899
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4900
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4899
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v82268 = v14183;
            const v82269 = stdlib.le(v10427, v10451);
            const v82270 = v82269 ? v10427 : v10451;
            let v82271;
            const v82272 = stdlib.ge(v10452, v82270);
            if (v82272) {
              v82271 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v82273 = stdlib.sub(v82270, v10452);
              v82271 = v82273;
              }
            const v82274 = stdlib.mul(v82271, v4924);
            const v82275 = stdlib.add(v14183, v82274);
            const v82276 = v14140;
            const v82277 = stdlib.le(v82275, v14140);
            const v82278 = v82277 ? v82275 : v14140;
            const v82279 = v14184;
            let v82280;
            if (v82272) {
              v82280 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v82281 = stdlib.sub(v82270, v10452);
              v82280 = v82281;
              }
            const v82282 = stdlib.mul(v82280, v4926);
            const v82283 = stdlib.add(v14184, v82282);
            const v82284 = v14142;
            const v82285 = stdlib.le(v82283, v14142);
            const v82286 = v82285 ? v82283 : v14142;
            const v82287 = [v82278, v82286];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      return;
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      return;
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      return;
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      return;
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      undefined /* setApiDetails */;
      ;
      const v13767 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13768 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v13772 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v13773 = v13767[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v13774 = [v13768, v13772, v13773];
      const v13775 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v13774);
      ;
      const v14047 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11169), null);
      const v14049 = {
        rewards: v10444,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14050 = stdlib.fromSome(v14047, v14049);
      const v14051 = v14050.stake;
      const v14056 = v14050.rewards;
      const v14057 = v14056[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '0')];
      let v14062;
      if (v10792) {
        v14062 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v14064 = stdlib.sub(v10790, v10449);
        v14062 = v14064;
        }
      const v14066 = stdlib.mul(v14062, v4924);
      const v14067 = stdlib.add(v10788, v14066);
      const v14069 = stdlib.le(v14067, v10797);
      const v14070 = v14069 ? v14067 : v10797;
      let v14073;
      const v14074 = stdlib.eq(v10450, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
      if (v14074) {
        v14073 = v14070;
        }
      else {
        const v14075 = stdlib.muldiv(v14070, v14051, v10450);
        v14073 = v14075;
        }
      let v14076;
      const v14077 = stdlib.ge(v14057, v14073);
      if (v14077) {
        v14076 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v14078 = stdlib.sub(v14073, v14057);
        v14076 = v14078;
        }
      const v14079 = stdlib.le(v14076, v10799);
      const v14080 = v14079 ? v14076 : v10799;
      const v14092 = v14056[stdlib.checkedBigNumberify('./staker.rsh:184:54:array ref', stdlib.UInt_max, '1')];
      let v14097;
      if (v10792) {
        v14097 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v14099 = stdlib.sub(v10790, v10449);
        v14097 = v14099;
        }
      const v14101 = stdlib.mul(v14097, v4926);
      const v14102 = stdlib.add(v10802, v14101);
      const v14104 = stdlib.le(v14102, v10811);
      const v14105 = v14104 ? v14102 : v10811;
      let v14108;
      if (v14074) {
        v14108 = v14105;
        }
      else {
        const v14110 = stdlib.muldiv(v14105, v14051, v10450);
        v14108 = v14110;
        }
      let v14111;
      const v14112 = stdlib.ge(v14092, v14108);
      if (v14112) {
        v14111 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v14113 = stdlib.sub(v14108, v14092);
        v14111 = v14113;
        }
      const v14114 = stdlib.le(v14111, v10813);
      const v14115 = v14114 ? v14111 : v10813;
      const v14117 = [v14080, v14115];
      const v14126 = stdlib.sub(v10458, v14080);
      ;
      const v14127 = v13775[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
      const v14128 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0')];
      const v14132 = stdlib.sub(v14128, v14115);
      const v14135 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '1')];
      const v14136 = v14127[stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '2')];
      const v14137 = [v14132, v14135, v14136];
      const v14138 = stdlib.Array_set(v13775, stdlib.checkedBigNumberify('./staker.rsh:230:60:application', stdlib.UInt_max, '0'), v14137);
      ;
      const v14140 = stdlib.sub(v10797, v14080);
      const v14142 = stdlib.sub(v10811, v14115);
      const v14155 = stdlib.add(v14057, v14080);
      const v14157 = stdlib.add(v14092, v14115);
      const v14158 = [v14155, v14157];
      const v14159 = {
        rewards: v14158,
        stake: v14051
        };
      await stdlib.mapSet(map0, v11169, v14159);
      const v14164 = [v14140, v14142];
      const v14165 = {
        totalRemaining: v14164,
        userReceived: v14117
        };
      const v14169 = await txn1.getOutput('Staker_harvest', 'v14165', ctc15, v14165);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v13673, v14169), {
          at: './staker.rsh:298:11:application',
          fs: ['at ./staker.rsh:298:11:application call to [unknown function] (defined at: ./staker.rsh:298:11:function exp)', 'at ./staker.rsh:302:10:application call to "k" (defined at: ./staker.rsh:299:42:function exp)', 'at ./staker.rsh:299:42:application call to [unknown function] (defined at: ./staker.rsh:299:42:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v14183 = stdlib.sub(v10799, v14080);
      const v14184 = stdlib.sub(v10813, v14115);
      const v82256 = v10446;
      const v82258 = v14164;
      const v82259 = v10452;
      const v82260 = v10450;
      const v82261 = v11171;
      const v82262 = v10451;
      const v82263 = v14138;
      const v82264 = v14126;
      const v82266 = v10446 ? v14074 : false;
      if (v82266) {
        const v82307 = (stdlib.le(await ctc.getBalance(), v14126) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v14126));
        const v82308 = stdlib.add(v14126, v82307);
        ;
        const v82309 = v14138[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v82310 = v82309[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v82311 = (stdlib.le(await ctc.getBalance(v4899), v82310) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v82310));
        const v82312 = stdlib.add(v82310, v82311);
        ;
        return;
        }
      else {
        const v82268 = v14183;
        const v82269 = stdlib.le(v10427, v10451);
        const v82270 = v82269 ? v10427 : v10451;
        let v82271;
        const v82272 = stdlib.ge(v10452, v82270);
        if (v82272) {
          v82271 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v82273 = stdlib.sub(v82270, v10452);
          v82271 = v82273;
          }
        const v82274 = stdlib.mul(v82271, v4924);
        const v82275 = stdlib.add(v14183, v82274);
        const v82276 = v14140;
        const v82277 = stdlib.le(v82275, v14140);
        const v82278 = v82277 ? v82275 : v14140;
        const v82279 = v14184;
        let v82280;
        if (v82272) {
          v82280 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v82281 = stdlib.sub(v82270, v10452);
          v82280 = v82281;
          }
        const v82282 = stdlib.mul(v82280, v4926);
        const v82283 = stdlib.add(v14184, v82282);
        const v82284 = v14142;
        const v82285 = stdlib.le(v82283, v14142);
        const v82286 = v82285 ? v82283 : v14142;
        const v82287 = [v82278, v82286];
        return;
        }
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc12,
    Any_halt0_2664: ctc13,
    Any_nop0_2664: ctc13,
    Any_reclaimRewards0_2664: ctc13,
    Staker_harvest0_2664: ctc13,
    Staker_stake0_2664: ctc11,
    Staker_withdraw0_2664: ctc11
    });
  const ctc15 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v10969 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:265:31:application call to [unknown function] (defined at: ./staker.rsh:265:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2664" (defined at: ./staker.rsh:265:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v10970 = v10969[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v10972 = stdlib.lt(v10452, v10427);
  stdlib.assert(v10972, {
    at: './staker.rsh:266:12:application',
    fs: ['at ./staker.rsh:265:31:application call to [unknown function] (defined at: ./staker.rsh:265:31:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_stake0_2664" (defined at: ./staker.rsh:265:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only stake before the end',
    who: 'Staker_stake'
    });
  const v10990 = ['Staker_stake0_2664', v10969];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v10990],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:275:17:decimal', stdlib.UInt_max, '0'), [[v10970, v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v14349 = v14298[stdlib.checkedBigNumberify('./staker.rsh:265:10:spread', stdlib.UInt_max, '0')];
          ;
          const v14392 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v14393 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v14394 = stdlib.add(v14393, v14349);
          const v14397 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v14398 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v14399 = [v14394, v14397, v14398];
          const v14400 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v14399);
          sim_r.txns.push({
            amt: v14349,
            kind: 'to',
            tok: v4900
            });
          const v14819 = stdlib.add(v10450, v14349);
          const v14820 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11169), null);
          const v14822 = {
            rewards: v10444,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v14823 = stdlib.fromSome(v14820, v14822);
          const v14824 = v14823.stake;
          const v14825 = stdlib.add(v14824, v14349);
          const v14830 = v14823.rewards;
          let v14832;
          const v14833 = stdlib.eq(v14819, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
          if (v14833) {
            v14832 = v10799;
            }
          else {
            const v14834 = stdlib.muldiv(v10799, v14349, v14819);
            v14832 = v14834;
            }
          const v14835 = v14830[stdlib.checkedBigNumberify('./staker.rsh:273:27:array ref', stdlib.UInt_max, '0')];
          const v14836 = stdlib.add(v14835, v14832);
          let v14837;
          if (v14833) {
            v14837 = v10813;
            }
          else {
            const v14839 = stdlib.muldiv(v10813, v14349, v14819);
            v14837 = v14839;
            }
          const v14840 = v14830[stdlib.checkedBigNumberify('./staker.rsh:273:27:array ref', stdlib.UInt_max, '1')];
          const v14841 = stdlib.add(v14840, v14837);
          const v14842 = [v14836, v14841];
          const v14843 = {
            rewards: v14842,
            stake: v14825
            };
          await stdlib.simMapSet(sim_r, 0, v11169, v14843);
          const v14844 = {
            newEveryoneStaked: v14819,
            newUserStaked: v14825
            };
          const v14845 = await txn1.getOutput('Staker_stake', 'v14844', ctc15, v14844);
          
          null;
          const v82712 = v10446;
          const v82714 = v10448;
          const v82715 = v10452;
          const v82716 = v14819;
          const v82717 = v11171;
          const v82718 = v10451;
          const v82719 = v14400;
          const v82720 = v10458;
          const v82722 = v10446 ? v14833 : false;
          if (v82722) {
            const v82763 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
            const v82764 = stdlib.add(v10458, v82763);
            sim_r.txns.push({
              kind: 'from',
              to: v4923,
              tok: undefined /* Nothing */
              });
            const v82765 = v14400[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v82766 = v82765[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v82767 = (sim_r.txns.push({
              kind: 'info',
              tok: v4899
              }),stdlib.le(await ctc.getBalance(v4899), v82766) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v82766));
            const v82768 = stdlib.add(v82766, v82767);
            sim_r.txns.push({
              kind: 'from',
              to: v4897,
              tok: v4899
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4900
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4899
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v82724 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
            const v82725 = stdlib.le(v10427, v10451);
            const v82726 = v82725 ? v10427 : v10451;
            let v82727;
            const v82728 = stdlib.ge(v10452, v82726);
            if (v82728) {
              v82727 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v82729 = stdlib.sub(v82726, v10452);
              v82727 = v82729;
              }
            const v82730 = stdlib.mul(v82727, v4924);
            const v82731 = stdlib.add(v82724, v82730);
            const v82732 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
            const v82733 = stdlib.le(v82731, v82732);
            const v82734 = v82733 ? v82731 : v82732;
            const v82735 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
            let v82736;
            if (v82728) {
              v82736 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v82737 = stdlib.sub(v82726, v10452);
              v82736 = v82737;
              }
            const v82738 = stdlib.mul(v82736, v4926);
            const v82739 = stdlib.add(v82735, v82738);
            const v82740 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
            const v82741 = stdlib.le(v82739, v82740);
            const v82742 = v82741 ? v82739 : v82740;
            const v82743 = [v82734, v82742];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      return;
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      return;
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      return;
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      return;
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      return;
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      undefined /* setApiDetails */;
      const v14349 = v14298[stdlib.checkedBigNumberify('./staker.rsh:265:10:spread', stdlib.UInt_max, '0')];
      const v14350 = stdlib.lt(v10452, v10427);
      stdlib.assert(v14350, {
        at: './staker.rsh:266:12:application',
        fs: ['at ./staker.rsh:265:31:application call to [unknown function] (defined at: ./staker.rsh:265:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:265:31:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: 'can only stake before the end',
        who: 'Staker_stake'
        });
      ;
      const v14392 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v14393 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v14394 = stdlib.add(v14393, v14349);
      const v14397 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v14398 = v14392[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v14399 = [v14394, v14397, v14398];
      const v14400 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v14399);
      ;
      const v14819 = stdlib.add(v10450, v14349);
      const v14820 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11169), null);
      const v14822 = {
        rewards: v10444,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14823 = stdlib.fromSome(v14820, v14822);
      const v14824 = v14823.stake;
      const v14825 = stdlib.add(v14824, v14349);
      const v14830 = v14823.rewards;
      let v14832;
      const v14833 = stdlib.eq(v14819, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
      if (v14833) {
        v14832 = v10799;
        }
      else {
        const v14834 = stdlib.muldiv(v10799, v14349, v14819);
        v14832 = v14834;
        }
      const v14835 = v14830[stdlib.checkedBigNumberify('./staker.rsh:273:27:array ref', stdlib.UInt_max, '0')];
      const v14836 = stdlib.add(v14835, v14832);
      let v14837;
      if (v14833) {
        v14837 = v10813;
        }
      else {
        const v14839 = stdlib.muldiv(v10813, v14349, v14819);
        v14837 = v14839;
        }
      const v14840 = v14830[stdlib.checkedBigNumberify('./staker.rsh:273:27:array ref', stdlib.UInt_max, '1')];
      const v14841 = stdlib.add(v14840, v14837);
      const v14842 = [v14836, v14841];
      const v14843 = {
        rewards: v14842,
        stake: v14825
        };
      await stdlib.mapSet(map0, v11169, v14843);
      const v14844 = {
        newEveryoneStaked: v14819,
        newUserStaked: v14825
        };
      const v14845 = await txn1.getOutput('Staker_stake', 'v14844', ctc15, v14844);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v14298, v14845), {
          at: './staker.rsh:265:11:application',
          fs: ['at ./staker.rsh:265:11:application call to [unknown function] (defined at: ./staker.rsh:265:11:function exp)', 'at ./staker.rsh:284:10:application call to "k" (defined at: ./staker.rsh:275:44:function exp)', 'at ./staker.rsh:275:44:application call to [unknown function] (defined at: ./staker.rsh:275:44:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      null;
      const v82712 = v10446;
      const v82714 = v10448;
      const v82715 = v10452;
      const v82716 = v14819;
      const v82717 = v11171;
      const v82718 = v10451;
      const v82719 = v14400;
      const v82720 = v10458;
      const v82722 = v10446 ? v14833 : false;
      if (v82722) {
        const v82763 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
        const v82764 = stdlib.add(v10458, v82763);
        ;
        const v82765 = v14400[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v82766 = v82765[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v82767 = (stdlib.le(await ctc.getBalance(v4899), v82766) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v82766));
        const v82768 = stdlib.add(v82766, v82767);
        ;
        return;
        }
      else {
        const v82724 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
        const v82725 = stdlib.le(v10427, v10451);
        const v82726 = v82725 ? v10427 : v10451;
        let v82727;
        const v82728 = stdlib.ge(v10452, v82726);
        if (v82728) {
          v82727 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v82729 = stdlib.sub(v82726, v10452);
          v82727 = v82729;
          }
        const v82730 = stdlib.mul(v82727, v4924);
        const v82731 = stdlib.add(v82724, v82730);
        const v82732 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
        const v82733 = stdlib.le(v82731, v82732);
        const v82734 = v82733 ? v82731 : v82732;
        const v82735 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
        let v82736;
        if (v82728) {
          v82736 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v82737 = stdlib.sub(v82726, v10452);
          v82736 = v82737;
          }
        const v82738 = stdlib.mul(v82736, v4926);
        const v82739 = stdlib.add(v82735, v82738);
        const v82740 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
        const v82741 = stdlib.le(v82739, v82740);
        const v82742 = v82741 ? v82739 : v82740;
        const v82743 = [v82734, v82742];
        return;
        }
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['startDelay', ctc1], ['duration', ctc1], ['graceDuration', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Any_eject0_2664: ctc12,
    Any_halt0_2664: ctc13,
    Any_nop0_2664: ctc13,
    Any_reclaimRewards0_2664: ctc13,
    Staker_harvest0_2664: ctc13,
    Staker_stake0_2664: ctc11,
    Staker_withdraw0_2664: ctc11
    });
  const ctc15 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v10992 = ctc.selfAddress();
  const v10994 = stdlib.protect(ctc11, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:289:34:application call to [unknown function] (defined at: ./staker.rsh:289:34:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdraw0_2664" (defined at: ./staker.rsh:289:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v10995 = v10994[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v10997 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10992), null);
  const v10999 = {
    rewards: v10444,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v11000 = stdlib.fromSome(v10997, v10999);
  const v11001 = v11000.stake;
  const v11002 = stdlib.le(v10995, v11001);
  stdlib.assert(v11002, {
    at: './staker.rsh:290:12:application',
    fs: ['at ./staker.rsh:289:34:application call to [unknown function] (defined at: ./staker.rsh:289:34:function exp)', 'at ./staker.rsh:165:19:application call to "runStaker_withdraw0_2664" (defined at: ./staker.rsh:289:10:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v11008 = ['Staker_withdraw0_2664', v10994];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4897, v4898, v4899, v4900, v4923, v4924, v4926, v10427, v10428, v10444, v10446, v10448, v10449, v10450, v10451, v10452, v10457, v10458, v10788, v10790, v10792, v10797, v10799, v10802, v10811, v10813, v10816, v11008],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:291:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:291:21:decimal', stdlib.UInt_max, '0'), v4900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
      
      switch (v11170[0]) {
        case 'Any_eject0_2664': {
          const v11173 = v11170[1];
          
          break;
          }
        case 'Any_halt0_2664': {
          const v11798 = v11170[1];
          
          break;
          }
        case 'Any_nop0_2664': {
          const v12423 = v11170[1];
          
          break;
          }
        case 'Any_reclaimRewards0_2664': {
          const v13048 = v11170[1];
          
          break;
          }
        case 'Staker_harvest0_2664': {
          const v13673 = v11170[1];
          
          break;
          }
        case 'Staker_stake0_2664': {
          const v14298 = v11170[1];
          
          break;
          }
        case 'Staker_withdraw0_2664': {
          const v14923 = v11170[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          const v14995 = v14923[stdlib.checkedBigNumberify('./staker.rsh:289:10:spread', stdlib.UInt_max, '0')];
          const v14996 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11169), null);
          const v14998 = {
            rewards: v10444,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v14999 = stdlib.fromSome(v14996, v14998);
          const v15000 = v14999.stake;
          ;
          const v15017 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v15018 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
          const v15022 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
          const v15023 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
          const v15024 = [v15018, v15022, v15023];
          const v15025 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v15024);
          ;
          const v15496 = stdlib.sub(v10450, v14995);
          const v15497 = stdlib.sub(v15000, v14995);
          const v15502 = v14999.rewards;
          const v15506 = v15025[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
          const v15507 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '0')];
          const v15511 = stdlib.sub(v15507, v14995);
          const v15514 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
          const v15515 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '2')];
          const v15516 = [v15511, v15514, v15515];
          const v15517 = stdlib.Array_set(v15025, stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1'), v15516);
          sim_r.txns.push({
            kind: 'from',
            to: v11169,
            tok: v4900
            });
          const v15518 = v15502[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '0')];
          let v15519;
          const v15520 = stdlib.eq(v15496, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
          if (v15520) {
            v15519 = v10799;
            }
          else {
            const v15521 = stdlib.muldiv(v10799, v14995, v15496);
            v15519 = v15521;
            }
          let v15522;
          const v15523 = stdlib.ge(v15519, v15518);
          if (v15523) {
            v15522 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v15524 = stdlib.sub(v15518, v15519);
            v15522 = v15524;
            }
          const v15525 = v15502[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '1')];
          let v15526;
          if (v15520) {
            v15526 = v10813;
            }
          else {
            const v15528 = stdlib.muldiv(v10813, v14995, v15496);
            v15526 = v15528;
            }
          let v15529;
          const v15530 = stdlib.ge(v15526, v15525);
          if (v15530) {
            v15529 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v15531 = stdlib.sub(v15525, v15526);
            v15529 = v15531;
            }
          const v15532 = [v15522, v15529];
          const v15533 = {
            rewards: v15532,
            stake: v15497
            };
          await stdlib.simMapSet(sim_r, 0, v11169, v15533);
          const v15534 = {
            newEveryoneStaked: v15496,
            newUserStaked: v15497
            };
          const v15536 = await txn1.getOutput('Staker_withdraw', 'v15534', ctc15, v15534);
          
          null;
          const v83168 = v10446;
          const v83170 = v10448;
          const v83171 = v10452;
          const v83172 = v15496;
          const v83173 = v11171;
          const v83174 = v10451;
          const v83175 = v15517;
          const v83176 = v10458;
          const v83178 = v10446 ? v15520 : false;
          if (v83178) {
            const v83219 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
            const v83220 = stdlib.add(v10458, v83219);
            sim_r.txns.push({
              kind: 'from',
              to: v4923,
              tok: undefined /* Nothing */
              });
            const v83221 = v15517[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v83222 = v83221[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
            const v83223 = (sim_r.txns.push({
              kind: 'info',
              tok: v4899
              }),stdlib.le(await ctc.getBalance(v4899), v83222) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v83222));
            const v83224 = stdlib.add(v83222, v83223);
            sim_r.txns.push({
              kind: 'from',
              to: v4897,
              tok: v4899
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4900
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v4899
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v83180 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
            const v83181 = stdlib.le(v10427, v10451);
            const v83182 = v83181 ? v10427 : v10451;
            let v83183;
            const v83184 = stdlib.ge(v10452, v83182);
            if (v83184) {
              v83183 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v83185 = stdlib.sub(v83182, v10452);
              v83183 = v83185;
              }
            const v83186 = stdlib.mul(v83183, v4924);
            const v83187 = stdlib.add(v83180, v83186);
            const v83188 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
            const v83189 = stdlib.le(v83187, v83188);
            const v83190 = v83189 ? v83187 : v83188;
            const v83191 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
            let v83192;
            if (v83184) {
              v83192 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v83193 = stdlib.sub(v83182, v10452);
              v83192 = v83193;
              }
            const v83194 = stdlib.mul(v83192, v4926);
            const v83195 = stdlib.add(v83191, v83194);
            const v83196 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
            const v83197 = stdlib.le(v83195, v83196);
            const v83198 = v83197 ? v83195 : v83196;
            const v83199 = [v83190, v83198];
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc5, ctc1, ctc1, ctc1, ctc1, ctc2, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v11170], secs: v11172, time: v11171, didSend: v3151, from: v11169 } = txn1;
  switch (v11170[0]) {
    case 'Any_eject0_2664': {
      const v11173 = v11170[1];
      return;
      break;
      }
    case 'Any_halt0_2664': {
      const v11798 = v11170[1];
      return;
      break;
      }
    case 'Any_nop0_2664': {
      const v12423 = v11170[1];
      return;
      break;
      }
    case 'Any_reclaimRewards0_2664': {
      const v13048 = v11170[1];
      return;
      break;
      }
    case 'Staker_harvest0_2664': {
      const v13673 = v11170[1];
      return;
      break;
      }
    case 'Staker_stake0_2664': {
      const v14298 = v11170[1];
      return;
      break;
      }
    case 'Staker_withdraw0_2664': {
      const v14923 = v11170[1];
      undefined /* setApiDetails */;
      const v14995 = v14923[stdlib.checkedBigNumberify('./staker.rsh:289:10:spread', stdlib.UInt_max, '0')];
      const v14996 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11169), null);
      const v14998 = {
        rewards: v10444,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v14999 = stdlib.fromSome(v14996, v14998);
      const v15000 = v14999.stake;
      const v15001 = stdlib.le(v14995, v15000);
      stdlib.assert(v15001, {
        at: './staker.rsh:290:12:application',
        fs: ['at ./staker.rsh:289:34:application call to [unknown function] (defined at: ./staker.rsh:289:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:289:34:function exp)', 'at ./staker.rsh:165:19:application call to [unknown function] (defined at: ./staker.rsh:165:19:function exp)', 'at ./staker.rsh:263:14:application call to [unknown function] (defined at: ./staker.rsh:263:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      ;
      const v15017 = v10457[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v15018 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '0')];
      const v15022 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1')];
      const v15023 = v15017[stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '2')];
      const v15024 = [v15018, v15022, v15023];
      const v15025 = stdlib.Array_set(v10457, stdlib.checkedBigNumberify('./staker.rsh:165:19:dot', stdlib.UInt_max, '1'), v15024);
      ;
      const v15496 = stdlib.sub(v10450, v14995);
      const v15497 = stdlib.sub(v15000, v14995);
      const v15502 = v14999.rewards;
      const v15506 = v15025[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
      const v15507 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '0')];
      const v15511 = stdlib.sub(v15507, v14995);
      const v15514 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1')];
      const v15515 = v15506[stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '2')];
      const v15516 = [v15511, v15514, v15515];
      const v15517 = stdlib.Array_set(v15025, stdlib.checkedBigNumberify('./staker.rsh:216:41:application', stdlib.UInt_max, '1'), v15516);
      ;
      const v15518 = v15502[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '0')];
      let v15519;
      const v15520 = stdlib.eq(v15496, stdlib.checkedBigNumberify('./staker.rsh:33:13:decimal', stdlib.UInt_max, '0'));
      if (v15520) {
        v15519 = v10799;
        }
      else {
        const v15521 = stdlib.muldiv(v10799, v14995, v15496);
        v15519 = v15521;
        }
      let v15522;
      const v15523 = stdlib.ge(v15519, v15518);
      if (v15523) {
        v15522 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v15524 = stdlib.sub(v15518, v15519);
        v15522 = v15524;
        }
      const v15525 = v15502[stdlib.checkedBigNumberify('./staker.rsh:215:50:array ref', stdlib.UInt_max, '1')];
      let v15526;
      if (v15520) {
        v15526 = v10813;
        }
      else {
        const v15528 = stdlib.muldiv(v10813, v14995, v15496);
        v15526 = v15528;
        }
      let v15529;
      const v15530 = stdlib.ge(v15526, v15525);
      if (v15530) {
        v15529 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v15531 = stdlib.sub(v15525, v15526);
        v15529 = v15531;
        }
      const v15532 = [v15522, v15529];
      const v15533 = {
        rewards: v15532,
        stake: v15497
        };
      await stdlib.mapSet(map0, v11169, v15533);
      const v15534 = {
        newEveryoneStaked: v15496,
        newUserStaked: v15497
        };
      const v15536 = await txn1.getOutput('Staker_withdraw', 'v15534', ctc15, v15534);
      if (v3151) {
        stdlib.protect(ctc0, await interact.out(v14923, v15536), {
          at: './staker.rsh:289:11:application',
          fs: ['at ./staker.rsh:289:11:application call to [unknown function] (defined at: ./staker.rsh:289:11:function exp)', 'at ./staker.rsh:293:10:application call to "k" (defined at: ./staker.rsh:291:42:function exp)', 'at ./staker.rsh:291:42:application call to [unknown function] (defined at: ./staker.rsh:291:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      null;
      const v83168 = v10446;
      const v83170 = v10448;
      const v83171 = v10452;
      const v83172 = v15496;
      const v83173 = v11171;
      const v83174 = v10451;
      const v83175 = v15517;
      const v83176 = v10458;
      const v83178 = v10446 ? v15520 : false;
      if (v83178) {
        const v83219 = (stdlib.le(await ctc.getBalance(), v10458) ? stdlib.checkedBigNumberify('./staker.rsh:159:43:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v10458));
        const v83220 = stdlib.add(v10458, v83219);
        ;
        const v83221 = v15517[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v83222 = v83221[stdlib.checkedBigNumberify('./staker.rsh:160:23:application', stdlib.UInt_max, '0')];
        const v83223 = (stdlib.le(await ctc.getBalance(v4899), v83222) ? stdlib.checkedBigNumberify('./staker.rsh:160:57:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(v4899), v83222));
        const v83224 = stdlib.add(v83222, v83223);
        ;
        return;
        }
      else {
        const v83180 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '0')];
        const v83181 = stdlib.le(v10427, v10451);
        const v83182 = v83181 ? v10427 : v10451;
        let v83183;
        const v83184 = stdlib.ge(v10452, v83182);
        if (v83184) {
          v83183 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v83185 = stdlib.sub(v83182, v10452);
          v83183 = v83185;
          }
        const v83186 = stdlib.mul(v83183, v4924);
        const v83187 = stdlib.add(v83180, v83186);
        const v83188 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '0')];
        const v83189 = stdlib.le(v83187, v83188);
        const v83190 = v83189 ? v83187 : v83188;
        const v83191 = v10816[stdlib.checkedBigNumberify('./staker.rsh:171:31:array ref', stdlib.UInt_max, '1')];
        let v83192;
        if (v83184) {
          v83192 = stdlib.checkedBigNumberify('./staker.rsh:28:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v83193 = stdlib.sub(v83182, v10452);
          v83192 = v83193;
          }
        const v83194 = stdlib.mul(v83192, v4926);
        const v83195 = stdlib.add(v83191, v83194);
        const v83196 = v10448[stdlib.checkedBigNumberify('./staker.rsh:172:27:array ref', stdlib.UInt_max, '1')];
        const v83197 = stdlib.le(v83195, v83196);
        const v83198 = v83197 ? v83195 : v83196;
        const v83199 = [v83190, v83198];
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
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Any_eject6(ctcTop, interact);}
  };
export async function Any_halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Any_halt6(ctcTop, interact);}
  };
export async function Any_nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Any_nop6(ctcTop, interact);}
  };
export async function Any_reclaimRewards(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_reclaimRewards expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_reclaimRewards expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Any_reclaimRewards6(ctcTop, interact);}
  };
export async function Setup_abortSetup(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Setup_abortSetup expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Setup_abortSetup expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 2, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [2]');
  if (step == 2) {return _Setup_abortSetup2(ctcTop, interact);}
  };
export async function Setup_fund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Setup_fund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Setup_fund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 2, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [2]');
  if (step == 2) {return _Setup_fund2(ctcTop, interact);}
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Staker_harvest6(ctcTop, interact);}
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Staker_stake6(ctcTop, interact);}
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Staker_withdraw6(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Any_eject(address,address)byte[0]`, `Any_halt()byte[0]`, `Any_nop()byte[0]`, `Any_reclaimRewards()byte[0]`, `Setup_abortSetup()byte[0]`, `Setup_fund()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`],
    pure: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,uint64,address),uint64,(uint64,uint64),uint64)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`],
    sigs: [`Any_eject(address,address)byte[0]`, `Any_halt()byte[0]`, `Any_nop()byte[0]`, `Any_reclaimRewards()byte[0]`, `Info()((uint64,uint64,(uint64,uint64),uint64,uint64,uint64,address),uint64,(uint64,uint64),uint64)`, `Setup_abortSetup()byte[0]`, `Setup_fund()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`]
    },
  appApproval: `BiAoAAgBBAYQAkDpAfEBxALMAtwC5AKzAqgB1AKwAXiAAQUZ6s/yhQfp+NWDCvCp3a0Nu4uE1Q6miqqkDda1l7MImYT57gk4uAGhsvy5BJWY5pcG1Oa52Aae8vFw/rbdhgO7AsMCwAGgjQYmBQEAAQEAAQIBBiI1ADEYQRPJKmRJIls1AUkjWzUCIQVbNQgxGSQSQQAKMQAoIRWvZkITkDYaABdJQQPzIjUEJDUGSSEWDEACAUkhFwxAAG1JIRgMQAA/SSEZDEAAJiEZEkQ0ASEEEkSBGK82GgGIE3ZJNf9XARg0/yJVTVcQCDUHQhNPIRgSRCo1/yk0/1AhB69QQgO2SSEaDEAAEiEaEkQqNf8rNP9QIQevUEIDnSEXEkQqNf8oNP9QQg1xSSEbDEABckkhHAxAABYhHBJENhoBNf+AAQU0/1AhHa9QQgNrIRsSRDQBIQQSRDYaAhc1/yhkKWRQK2RQSTUDSUpKSSEeWzX+IQhbNf0hCVs1/CEKWzX7IQtbNfohDFs1+SENWzX4NANXyBAjr1A2GgGIErZJNfZXARg09iJVTUk19yEFWzX2NPdXABBJNfUiWzX0NP80/kk0/w5NNfM0/TTzD0k18UEABiI18kIABzTzNP0JNfI0AyEOWzTyNAMhD1sLCDXwNPs08Ek0+w5NNe80/CISSTXtQQAHNO817kIACjTvNPYdNPyXNe409DTuD0EABiI17EIABzTuNPQJNew09SNbNes08UEABiI16kIABzTzNP0JNeo0AyEQWzTqNAMhEVsLCDXpNPk06Uk0+Q5NNeg07UEABzToNedCAAo06DT2HTT8lzXnNOs05w9BAAYiNeZCAAc05zTrCTXmNPo07Ek0+g5NFjT4NOZJNPgOTRZQNQdCEZ0hFhJENhoBNhoCUDX/KDT/UEICAkkhHwxAAEtJISAMQAAwSSEhDEAAFSEhEkQ2GgE1/ycENP9QIR2vUEIB2CEgEkQqNf+AAQQ0/1AhB69QQgHEIR8SRCo1/4ABAzT/UCEHr1BCAbBJISIMQAFaSSEjDEAADiEjEkQqNf8pNP9QQgt2ISISRDQBIQQSRChkKWRQK2RQSTUDSUpKSiEIWzX/IQlbNf4hJFs1/SElJFgXNfwhCls1+yELWzX6IQxbNfkhDVs1+DQDV8gQI69QNhoBiBDeSTX2VwEYNPYiVU1JNfchBVs19jT3VwAQSTX1Ils19DT8QQAGIjXzQgAHNP00/wk18zQDIQ5bNPM0AyEPWwsINfI0+zTySTT7Dk018TT+IhJJNe9BAAc08TXwQgAKNPE09h00/pc18DT0NPAPQQAGIjXuQgAHNPA09Ak17jT1I1s17TT8QQAGIjXsQgAHNP00/wk17DQDIRBbNOw0AyERWwsINes0+TTrSTT5Dk016jTvQQAHNOo16UIACjTqNPYdNP6XNek07TTpD0EABiI16EIABzTpNO0JNeg0+jTuSTT6Dk0WNPg06Ek0+A5NFlA1B0IP1oHyzPBgEkQ0ASEEEkQoZClkUCtkUEk1A1cgWDQDV/EIUDQDV9kQUDQDV7gIUDUHQg+kNhoCFzUENhoDNhoBF0khBgxACxhJJQxACeElEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQSTUDSUpKSkpKSkpKSkpKSklXACA1/1cgWDX+IRJbNf0hE1s1/FeIIDX7IQ9bNfohEVs1+SEeWzX4ISZbNfdXyBA19lfYARc19VfZEDX0IQhbNfMhCVs18oH5AVs18YGBAls18IGJAoEiWDXvgasCWzXuIQ5bNe0hJFs17CElJFgXNeshCls16iELWzXpIRBbNeghDFs15yENWzXmgewCIQVYNeVJNQU15IAEpHZzlzTkULA05CJVSYEDDEAFYEkhFAxAAnpJIQQMQAFrIQQSRDTkVwEINeM04xc14jT2I69QMQCIDpxJNeBXARg04CJVTUk14SEFWzXgNOI04A5ENO9XERE13zTvVwARNN9XAAg031cICFA031cQAVBQNd408jTiCTXdNOA04gk13DThVwAQNds03lcRETXasSKyATTishIlshAxALIUNPyyEbM02yJbNdk03SISSTXXQQAHNOk12EIACjTpNOIdNN2XNdg02DTZD0EABiI11kIABzTZNNgJNdY02yNbNdU010EABzTmNdRCAAo05jTiHTTdlzXUNNQ01Q9BAAYiNdNCAAc01TTUCTXTMQAoKTTWFjTTFlA03BZQUGY03BY03RZQNdKACAAAAAAAADyuNNJQsDTSNQeABGKySVUxAFA04hZQNNJQMQBQsDT/NP40/TT8NPs0+jT5NPg09zT2NPU05TT0NPA03TIGNPE03lcAETTaIls04gkWNNpXCAhQNNpXEAFQUDTuQgsaSDTkVwEINeM04xc14jTwNPgMRDTvVxERNeE04jT8iA1RNPI04gg14DT2I69QMQCIDRlJNd5XARg03iJVTUk13yEFWzTiCDXeNN9XABA13TTgIhJJNdtBAAc06TXcQgAKNOk04h004Jc13DTbQQAHNOY12kIACjTmNOIdNOCXNdoxACgpNN0iWzTcCBY03SNbNNoIFlA03hZQUGY03hY04BZQNdmACAAAAAAAADn8NNlQsDTZNQeABNq8TY0xAFA04hZQNNlQsDT/NP40/TT8NPs0+jT5NPg09zT2NPU05TT0NPA04DIGNPE071cAETThIls04ggWNOFXCAhQNOFXEAFQUDTuQgoSSSUMQAHdSDTvVxERNeM071cAETTjVwAINONXCAhQNONXEAFQUDXiNPYjr1AxAIgMEkk14FcBGDTgIlVNSTXhIQVbNeA04VcAEEk13yJbNd4060EABiI13UIABzTsNPMJNd007TTdNPoLCDXcNOo03Ek06g5NNds08iISSTXZQQAHNNs12kIACjTbNOAdNPKXNdo03jTaD0EABiI12EIABzTaNN4JNdg06TTYSTTpDk011zTfI1s11jTrQQAGIjXVQgAHNOw08wk11TToNNU0+QsINdQ05zTUSTTnDk010zTZQQAHNNM10kIACjTTNOAdNPKXNdI01jTSD0EABiI10UIABzTSNNYJNdE05jTRSTTmDk010LEisgE017IIJLIQMQCyB7M04lcAETXPsSKyATTQshIlshAxALIUNP2yEbMxACgpNN401wgWNNY00AgWUDTgFlBQZjTqNNcJFjTnNNAJFlA1zjTXFjTQFlA0zlA1zYAIAAAAAAAAN1U0zVCwNM01B4AEZX6kEDEAUDTNUDEAULA0/zT+NP00/DT7NPo0+TT4NPc09jT1NOk01wkWNOY00AkWUDTONPA08jIGNPE0zyJbNNAJFjTPVwgIUDTPVxABUDTiVxERUDTuNNcJQggvSDTwNPcPRDTvVxERNeM071cAETTjVwAINONXCAhQNONXEAFQUDXigAgAAAAAAAA0P7AqNQcyCmAyCngJNO4JNeE07jThCDXgsSKyATTgsggkshA0+7IHszTiVwARSTXfIls13jIKNP1wAEg03koMQAAECUIAA0hIIkk13TTeCBY031cICFA031cQAVA04lcREVA13DTeNN0INds03FcAETXasSKyATTbshIlshA0/7IUNP2yEbM0/zT+NP00/DT7NPo0+TT4NPc09jT1NPZJNPA08jIGNPE02iJbNNsJFjTaVwgIUDTaVxABUDTcVxERUDThNO4INOAJQgczSSQMQAC/SSEGDEAAVEg071cRETXjgAgAAAAAAAAxw7AqNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NOU09DTwNPIyBjTxNO9XABE041cACDTjVwgIUDTjVxABUFA07kIG0kgxADT/EkQ08DT4D0Q08iISRDTvVxERNeOACAAAAAAAAC9IsCo1BzT/NP40/TT8NPs0+jT5NPg09zT2JDTlNPQ08DTyMgY08TTvVwARNONXAAg041cICFA041cQAVBQNO5CBm5INORXAUA147EisgEhBLIQNAiyGLM041cAIDXiNONXICA14TEANOISNPA0+A804jThEhARRDTvVxERNeA071cAETTgVwAINOBXCAhQNOBXEAFQUDXfgAgAAAAAAAAsFrAqNQc09iOvUDTiiAgySTXdVwEYNN0iVU1JNd4hBVs13TTeVwAQSTXcIls12zTrQQAGIjXaQgAHNOw08wk12jTtNNo0+gsINdk06jTZSTTqDk012DTyIhJJNdZBAAc02DXXQgAKNNg03R008pc11zTbNNcPQQAGIjXVQgAHNNc02wk11TTpNNVJNOkOTTXUNNwjWzXTNOtBAAYiNdJCAAc07DTzCTXSNOg00jT5Cwg10TTnNNFJNOcOTTXQNNZBAAc00DXPQgAKNNA03R008pc1zzTTNM8PQQAGIjXOQgAHNM800wk1zjTmNM5JNOYOTTXNsSKyATTUsggkshA04bIHszTfVwARSTXMIls0zQkWNMxXCAhQNMxXEAFQNN9XERFQNcuxIrIBNM2yEiWyEDThshQ0/bIRszTbNNQIFjTTNM0IFlA03RZQNco04igpNMpQZjTqNNQJFjTnNM0JFlA1yTTKIQVbNcg08jTICTXHNMhJCTXGNMpXABA1xTTLVxERNcSxIrIBNMiyEiWyEDThshQ0/LIRszTFIls1wzTHIhJJNcFBAAc06TXCQgAKNOk0yB00x5c1wjTCNMMPQQAGIjXAQgAHNMM0wgk1wDTFI1s1vzTBQQAHNOY1vkIACjTmNMgdNMeXNb40vjS/D0EABiI1vUIABzS/NL4JNb004igpNMAWNL0WUDTGFlBQZoAE8hPCyDTiUDTIFlA0xhY0xxZQUDTUFjTNFlA0yVBQNOFQsDT/NP40/TT8NPs0+jT5NPg09zT2NPU06TTUCRY05jTNCRZQNMk08DTHMgY08TTLVwARNMQiWzTICRY0xFcICFA0xFcQAVBQNO401AlCA4whBhJEIQY0ARJENARJIhJMNAISEUQoZClkUCtkUEk1A0lKSklXACA1/yESWzX+IRNbNf1XoCA1/IHIAVs1+4HgAVs1+lfoIjX5STUFNfiABNnfPAs0+FCwNPgiVUAAXjEANP8SRIAIAAAAAAAAE3OwKjUHsSKyATT5VwARIluyEiWyEDT/shQ0/rIRs7EisgEishIlshAyCbIVMgqyFDT9shGzsSKyASKyEiWyEDIJshUyCrIUNP6yEbNCBI8xADT8EkQ0+4gFBIAIAAAAAAAAKLCwKjUHNPohBgg0A4GQAVsISTX3NAOBiAFbCDX2IQWvNfU0/zQDVyBYNP40/TT8NAMhJls0A4HQAVs09kk0A4GYAVsINPUiNPU0+xY0A1fYCFA09yIyBjT6NPk0+0ICW0kkDEAA9UgkNAESRDQESSISTDQCEhFEKGQpZFArZFBJNQNJSkpKSkpJVwAgNf9XIFg1/iESWzX9IRNbNfxXiCI1+4GqAVs1+oGyAVs1+YG6AVs1+FfCIDX3geIBWzX2geoBWzX1gfIBWzX0gfoBWzXzgASai5F0sDT7VwARSTXyIls08wgWNPJXCAhQNPJXEAFQNPtXERFQNfE08zT9iAQSNP8xABJENP80/lA0/RZQNPwWUDT6FlA0+RZQNPgWUDT3UDT2FlA09RZQNPQWUDTzFlAyBhZQNPFQKEsBVwB/ZylLAVd/f2crSwFX/gxnSCEGNQEyBjUCQgNNSIHAmgyIA5ixIrIBIQSyECKyGIAGBjEAMgkSsh4nBLIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUlXAFg1/4FYWzX+gWBbNf2ABODzl580/1A0/hZQNP0WULCBEa9JNfxJUDX7NP40/RNENPtXABE1+iOvNPpXCAhQNPpXEAFQNPtXERFQNfkhJ4gDErEisgEishIlshAyCrIUNP6yEbM0+VcRETX4NPlXABEjrzT4VwgIUDT4VxABUFA19yEniALdsSKyASKyEiWyEDIKshQ0/bIRszT/VxAQNfY0/4EoWzX1NP+BIFs19DT/gTBbNfM0/1c4IDXyNPYiW0k18TT1CzXwNPYjW0k17zT1CzXuMQA0/1A0/hZQNP0WUDT3UDT1FlA09BZQNPMWUDTyUDTxFlA08BZQNO8WUDTuFlAoSwFXAH9nKUsBV39/ZytLAVf+BGdIJDUBMgY1AkIB7TX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNPc0+yISEEEAhzIKYDIKeAk0/wk17LEisgE0/zTsCLIIJLIQNPGyB7M0/lcAESJbNesyCjTvcABINOtKDEAABAlCAANISCI16rEisgE06zTqCLISJbIQNO2yFDTvshGzsSKyASKyEiWyEDIJshUyCrIUNPCyEbOxIrIBIrISJbIQMgmyFTIKshQ077IRs0IBCTT4Ils17DT9NPRJNP0OTTXrNPo06w9JNelBAAYiNepCAAc06zT6CTXqNOw06jTyCwg16DT5IltJNec06Ek05w5NNeY0+CNbNeU06UEABiI15EIABzTrNPoJNeQ05TTkNPMLCDXjNPkjW0k14jTjSTTiDk014TTmFjThFlA14DTtNO5QNO8WUDTwFlA08VA08hZQNPMWUDT0FlA09RZQNPZQNPcWUQcIUDT5UDT6FlA0+xZQNPwWUDT9FlA0/lA0/xZQNOwWUDTrFlA06RZRBwhQNOcWUDTmFlA05RZQNOIWUDThFlA04FAoSwFXAH9nKUsBV39/ZytLAVf+fmdIIQQ1ATIGNQJCAC0xGSEUEkSxIrIBIQSyEDQIshghFLIZs7EisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yI1ASI1AiI1CEL/vEkxGGFAAAVIIRWviShiiTQASUokCDUAOAcyChJEOBAkEkQ4CBJEiTQASUpJJAg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: {
    api_Any_eject: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 3,
  stateSize: 380,
  unsupported: [],
  version: 10,
  warnings: [`API api_Any_eject may use up to 10 transaction references, but the limit is 8. API api_Any_eject starts at /app/staker.rsh:165:19:application.`, `Step 4 may use up to 10 transaction references, but the limit is 8. Step 4 starts at /app/staker.rsh:165:19:dot.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                  },
                  {
                    "internalType": "address payable",
                    "name": "Rewarder0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v4898",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4899",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v4900",
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
        "internalType": "struct T24",
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
        "internalType": "struct T25",
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
        "internalType": "struct T25",
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
        "internalType": "struct T24",
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
        "internalType": "struct T24",
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
                  },
                  {
                    "internalType": "address payable",
                    "name": "Rewarder0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T3",
                "name": "v4898",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4899",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v4900",
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
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_abortSetup0_64",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_fund0_64",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v4964",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
                    "internalType": "enum _enum_T23",
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
                    "internalType": "struct T21",
                    "name": "_Any_eject0_2664",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_2664",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_nop0_2664",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_reclaimRewards0_2664",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_2664",
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
                    "internalType": "struct T22",
                    "name": "_Staker_stake0_2664",
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
                    "internalType": "struct T22",
                    "name": "_Staker_withdraw0_2664",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v11170",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
    "name": "_reach_oe_v10416",
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
    "name": "_reach_oe_v11286",
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
    "name": "_reach_oe_v12104",
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
    "name": "_reach_oe_v12739",
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
    "name": "_reach_oe_v13375",
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
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v14165",
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
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v14844",
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
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v15534",
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
    "name": "_reach_oe_v4979",
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
    "name": "Any_reclaimRewards",
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
              },
              {
                "internalType": "address payable",
                "name": "Rewarder0",
                "type": "address"
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
        "internalType": "struct T25",
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
        "internalType": "struct T24",
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
        "internalType": "struct T24",
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
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_abortSetup0_64",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_fund0_64",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v4964",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
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
                    "internalType": "enum _enum_T23",
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
                    "internalType": "struct T21",
                    "name": "_Any_eject0_2664",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_2664",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_nop0_2664",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_reclaimRewards0_2664",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_2664",
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
                    "internalType": "struct T22",
                    "name": "_Staker_stake0_2664",
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
                    "internalType": "struct T22",
                    "name": "_Staker_withdraw0_2664",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v11170",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
        "name": "v83226",
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
        "name": "v83228",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v83229",
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
        "name": "v83231",
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
  Bytecode: `0x608060405260405162007477380380620074778339810160408190526200002691620006ba565b6000805543600355620000386200036a565b7f178d405b7b053c30f0000e34f563ab487d322a1cf1b26a21e453a725d9f0549033836040516200006b929190620007dd565b60405180910390a180516000908190528151602090810182905282516040908101929092528251818401805191909152835190518201528381015191820151910151620000d8916001600160a01b03918216911614620000cd576001620000d0565b60005b600b620002bd565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011a9290620002e7565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001609190600190620002e7565b60a0820152620001733415600c620002bd565b602082015151608081015160409091015151620001919190620008b5565b60c082015260208083015151608081015160409091015190910151620001b89190620008b5565b60e0820152620001c762000413565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151821660608087019190915260a0808801516080808901919091528551510151818801528451519091015160c0808801919091528451519091015160e0808801919091528451518201519093166101008701528351518201515161012087015286015161014086015291515182015183015161016085015284015161018084015260016000819055439055516200028d918391016200091d565b60405160208183030381529060405260029080519060200190620002b39291906200049d565b5050505062000ab0565b81620002e35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002f16200052c565b60005b6002811015620003475784816002811062000313576200031362000889565b60200201518282600281106200032d576200032d62000889565b6020020152806200033e8162000a55565b915050620002f4565b50818184600281106200035e576200035e62000889565b60200201529392505050565b604080516101608101909152600061010082018181526101208301829052610140830191909152815260208101620003a16200052c565b81526040805160608101825260008082526020828101829052928201529101908152602001620003d06200052c565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ff6200052c565b815260200160008152602001600081525090565b604051806101a0016040528060006001600160a01b031681526020016200043962000579565b81526000602082018190526040820152606001620004566200052c565b815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b828054620004ab9062000a73565b90600052602060002090601f016020900481019282620004cf57600085556200051a565b82601f10620004ea57805160ff19168380011785556200051a565b828001600101855582156200051a579182015b828111156200051a578251825591602001919060010190620004fd565b5062000528929150620005ed565b5090565b60405180604001604052806002905b62000562604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200053b5790505090565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001620005c2604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b5b80821115620005285760008155600101620005ee565b604080519081016001600160401b03811182821017156200063557634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200063557634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200063557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620006b557600080fd5b919050565b6000818303610160811215620006cf57600080fd5b620006d962000604565b83518152601f19820161014080821215620006f357600080fd5b620006fd6200063b565b610100808412156200070e57600080fd5b620007186200066c565b935062000728602089016200069d565b845262000738604089016200069d565b60208501526040605f19870112156200075057600080fd5b6200075a62000604565b9550606088015186526080880151602087015285604085015260a0880151606085015260c0880151608085015260e088015160a08501526200079e8189016200069d565b60c085015250828152620007b661012088016200069d565b6020820152620007c88288016200069d565b60408201526020840152509095945050505050565b60006101808201905060018060a01b0380851683528351602084015260208401516200086760408501825160018060a01b03808251168352806020830151166020840152604082015180516040850152602081015160608501525060608201516080840152608082015160a084015260a082015160c08401528060c08301511660e0840152505050565b6020810151821661014085015260400151166101609092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620008d257620008d26200089f565b500290565b8060005b600281101562000917578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101620008db565b50505050565b81516001600160a01b03168152610320810160208301516200099c602084018260018060a01b03808251168352806020830151166020840152604082015180516040850152602081015160608501525060608201516080840152608082015160a084015260a082015160c08401528060c08301511660e0840152505050565b506040830151610120620009ba818501836001600160a01b03169052565b60608501519150610140620009d9818601846001600160a01b03169052565b60808601519250610160620009f181870185620008d7565b60a087015161022087015260c087015161024087015260e08701516102608701526101008701516001600160a01b0316610280870152918601516102a08601528501516102c08501528401516102e084015250610180909201516103009091015290565b600060001982141562000a6c5762000a6c6200089f565b5060010190565b600181811c9082168062000a8857607f821691505b6020821081141562000aaa57634e487b7160e01b600052602260045260246000fd5b50919050565b6169b78062000ac06000396000f3fe6080604052600436106101175760003560e01c80638f3e1f411161009a578063c527ddba11610061578063c527ddba146102b7578063d9d7e3ee146102bf578063e2809549146102d2578063f6d40995146102e7578063ffe6f638146102ef57005b80638f3e1f411461024657806398807d841461024e578063ab53f2c61461026e578063b0c1f58a14610291578063c2e7f44e146102a457005b80636f0fe5c9116100de5780636f0fe5c9146101b957806383230757146101e65780638521eb92146101fb5780638608c1c5146102135780638712236d1461023357005b806316822e2c146101205780631e93b0f1146101335780632c10a159146101575780633bc5b7bf1461016a5780634012e02e1461019757005b3661011e57005b005b61011e61012e3660046158af565b6102f7565b34801561013f57600080fd5b506003545b6040519081526020015b60405180910390f35b61011e6101653660046158c8565b61031b565b34801561017657600080fd5b5061018a6101853660046158ef565b61033b565b60405161014e9190615932565b3480156101a357600080fd5b506101ac610352565b60405161014e91906159e5565b3480156101c557600080fd5b506101d96101d4366004615a2a565b6105c7565b60405161014e9190615a56565b3480156101f257600080fd5b50600154610144565b610203610b0b565b604051901515815260200161014e565b34801561021f57600080fd5b506101d961022e3660046158ef565b610b5b565b6101d9610241366004615a6d565b611079565b6102036110e4565b34801561025a57600080fd5b506101446102693660046158ef565b61113a565b34801561027a57600080fd5b506102836113d9565b60405161014e929190615ab2565b6101d961029f366004615a6d565b611476565b6102036102b2366004615aec565b6114e0565b610203611548565b61011e6102cd366004615b25565b61159f565b6102da6115bf565b60405161014e9190615b63565b610203611612565b61020361165f565b6102ff614968565b61031761031136849003840184615d23565b826116ac565b5050565b610323614968565b61031761033536849003840184615e09565b82613a46565b6103436149f0565b61034c82613cf7565b92915050565b61035a614a0f565b600160005414156104155760006002805461037490615e41565b80601f01602080910402602001604051908101604052809291908181526020018280546103a090615e41565b80156103ed5780601f106103c2576101008083540402835291602001916103ed565b820191906000526020600020905b8154815290600101906020018083116103d057829003601f168201915b50505050508060200190518101906104059190615fee565b905061041360006007613ddc565b505b600260005414156104d05760006002805461042f90615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461045b90615e41565b80156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b50505050508060200190518101906104c091906160c8565b90506104ce60006007613ddc565b505b600660005414156105b8576000600280546104ea90615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461051690615e41565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b505050505080602001905181019061057b91906161ae565b9050610585614a58565b6020808301518251526101a083015182519091015261016082015181516040015260e09091015181516060015251919050565b6105c460006007613ddc565b90565b604080518082019091526000808252602082015260016000541415610696576000600280546105f590615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461062190615e41565b801561066e5780601f106106435761010080835404028352916020019161066e565b820191906000526020600020905b81548152906001019060200180831161065157829003601f168201915b50505050508060200190518101906106869190615fee565b905061069460006009613ddc565b505b60026000541415610751576000600280546106b090615e41565b80601f01602080910402602001604051908101604052809291908181526020018280546106dc90615e41565b80156107295780601f106106fe57610100808354040283529160200191610729565b820191906000526020600020905b81548152906001019060200180831161070c57829003601f168201915b505050505080602001905181019061074191906160c8565b905061074f60006009613ddc565b505b60066000541415610aff5760006002805461076b90615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461079790615e41565b80156107e45780601f106107b9576101008083540402835291602001916107e4565b820191906000526020600020905b8154815290600101906020018083116107c757829003601f168201915b50505050508060200190518101906107fc91906161ae565b9050610806614a6b565b61012082015181515280516000602090910152600161082486613cf7565b5160018111156108365761083661590c565b14610842578051610850565b61084b85613cf7565b604001515b602082015260e0820151841015610867578361086d565b8160e001515b60408201819052610180830151108015608083015261089257600060608201526108ad565b81610180015181604001516108a79190616372565b60608201525b8160a0015181606001516108c19190616389565b8261024001516108d191906163a8565b60a082018190526102a083015110156108ef57816102a001516108f5565b8060a001515b60c08201526101a08201511561010082018190521561091d5760c081015160e082015261094b565b816101a001518160200151602001518260c0015161093b9190616389565b61094591906163c0565b60e08201525b60e08101516020820151515110610969576000610120820152610986565b6020810151515160e082015161097f9190616372565b6101208201525b80608001511561099d5760006101408201526109b9565b81610180015181604001516109b29190616372565b6101408201525b8160c001518161014001516109ce9190616389565b826102e001516109de91906163a8565b610160820181905261030083015110156109fd57816103000151610a04565b8061016001515b61018082015261010081015115610a26576101808101516101a0820152610a56565b816101a00151816020015160200151826101800151610a459190616389565b610a4f91906163c0565b6101a08201525b6101a081015160208083015151015110610a775760006101c0820152610a97565b6020808201515101516101a0820151610a909190616372565b6101c08201525b816102c001518161012001511115610ab457816102c00151610abb565b8061012001515b6101e0820151526103208201516101c08201511115610adf57816103200151610ae6565b806101c001515b6101e090910180516020019190915251915061034c9050565b61034c60006009613ddc565b6000610b15614968565b610b1d614b0d565b610b25614b27565b600060408201526001818190525060408051602080820190925282815290830152610b5082846116ac565b505060200151919050565b604080518082019091526000808252602082015260016000541415610c2a57600060028054610b8990615e41565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb590615e41565b8015610c025780601f10610bd757610100808354040283529160200191610c02565b820191906000526020600020905b815481529060010190602001808311610be557829003601f168201915b5050505050806020019051810190610c1a9190615fee565b9050610c2860006008613ddc565b505b60026000541415610ce557600060028054610c4490615e41565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7090615e41565b8015610cbd5780601f10610c9257610100808354040283529160200191610cbd565b820191906000526020600020905b815481529060010190602001808311610ca057829003601f168201915b5050505050806020019051810190610cd591906160c8565b9050610ce360006008613ddc565b505b6006600054141561106857600060028054610cff90615e41565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b90615e41565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b5050505050806020019051810190610d9091906161ae565b9050610d9a614b99565b610120820151815152805160006020909101526001610db885613cf7565b516001811115610dca57610dca61590c565b14610dd6578051610de4565b610ddf84613cf7565b604001515b602082015261028082015115610e005760006040820152610e1c565b816101800151826102600151610e169190616372565b60408201525b8160a001518160400151610e309190616389565b826102400151610e4091906163a8565b606082018190526102a08301511015610e5e57816102a00151610e64565b80606001515b60808201526101a08201511560c0820181905215610e8b57608081015160a0820152610eb9565b816101a001518160200151602001518260800151610ea99190616389565b610eb391906163c0565b60a08201525b60a08101516020820151515110610ed657600060e0820152610ef2565b6020810151515160a0820151610eec9190616372565b60e08201525b81610280015115610f0a576000610100820152610f27565b816101800151826102600151610f209190616372565b6101008201525b8160c00151816101000151610f3c9190616389565b826102e00151610f4c91906163a8565b61012082018190526103008301511015610f6b57816103000151610f72565b8061012001515b61014082015260c081015115610f9357610140810151610160820152610fc3565b816101a00151816020015160200151826101400151610fb29190616389565b610fbc91906163c0565b6101608201525b61016081015160208083015151015110610fe4576000610180820152611004565b602080820151510151610160820151610ffd9190616372565b6101808201525b816102c001518160e00151111561102057816102c00151611026565b8060e001515b6101a082015152610320820151610180820151111561104a57816103200151611051565b8061018001515b6101a0909101805160200191909152519392505050565b61107460006008613ddc565b919050565b6040805180820190915260008082526020820152611095614968565b61109d614b0d565b6110a5614b27565b604080516020808201835287825260e08401919091526006835281518082019092528282528301526110d782846116ac565b5050610100015192915050565b60006110ee614968565b6110f6614c2b565b604080516060810182526000808252602080830182905282840191909152825180820190935281835283019190915261112f8284613e02565b505060800151919050565b6000600160005414156111f75760006002805461115690615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461118290615e41565b80156111cf5780601f106111a4576101008083540402835291602001916111cf565b820191906000526020600020905b8154815290600101906020018083116111b257829003601f168201915b50505050508060200190518101906111e79190615fee565b90506111f56000600a613ddc565b505b600260005414156112b25760006002805461121190615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461123d90615e41565b801561128a5780601f1061125f5761010080835404028352916020019161128a565b820191906000526020600020905b81548152906001019060200180831161126d57829003601f168201915b50505050508060200190518101906112a291906160c8565b90506112b06000600a613ddc565b505b600660005414156113cd576000600280546112cc90615e41565b80601f01602080910402602001604051908101604052809291908181526020018280546112f890615e41565b80156113455780601f1061131a57610100808354040283529160200191611345565b820191906000526020600020905b81548152906001019060200180831161132857829003601f168201915b505050505080602001905181019061135d91906161ae565b9050611367614c64565b8051600090819052815160209081018290528251818401805191909152510152600161139285613cf7565b5160018111156113a4576113a461590c565b146113b35780602001516113c1565b6113bc84613cf7565b604001515b60200151949350505050565b6110746000600a613ddc565b6000606060005460028080546113ee90615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461141a90615e41565b80156114675780601f1061143c57610100808354040283529160200191611467565b820191906000526020600020905b81548152906001019060200180831161144a57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152611492614968565b61149a614b0d565b6114a2614b27565b604080516020808201835287825260c08401919091526005835281518082019092528282528301526114d482846116ac565b505060e0015192915050565b60006114ea614968565b6114f2614b0d565b6114fa614b27565b6040805180820182526001600160a01b03888116825287166020808301919091528381019190915260008352815180820190925282825283015261153e82846116ac565b5050519392505050565b6000611552614968565b61155a614c2b565b6040805160608101825260006020808301829052828401919091526001825282518082019093528183528301919091526115948284613e02565b505060a00151919050565b6115a7614968565b6103176115b9368490038401846163e2565b82613e02565b6115c7614c8d565b6115cf614968565b6115d7614b0d565b6115df614b27565b600060a0820152600481526040805160208082019092528281529083015261160782846116ac565b505060c00151919050565b600061161c614968565b611624614b0d565b61162c614b27565b60006060820152600281526040805160208082019092528281529083015261165482846116ac565b505060400151919050565b6000611669614968565b611671614b0d565b611679614b27565b6000608082015260038152604080516020808201909252828152908301526116a182846116ac565b505060600151919050565b6116bc600660005414602d613ddc565b81516116d79015806116d057508251600154145b602e613ddc565b6000808055600280546116e990615e41565b80601f016020809104026020016040519081016040528092919081815260200182805461171590615e41565b80156117625780601f1061173757610100808354040283529160200191611762565b820191906000526020600020905b81548152906001019060200180831161174557829003601f168201915b505050505080602001905181019061177a91906161ae565b9050611784614caf565b7f7579bae5f09064efe1a650f8621d73171456405f9e767a1edbfd078e8d23bae633856040516117b5929190616470565b60405180910390a160006020850151515160068111156117d7576117d761590c565b14156121fe576020848101515101518082525161183b906001600160a01b03163314611831578260e00151836101e001511015611815576000611834565b8151602081015190516001600160a01b03908116911614611834565b60015b6018613ddc565b61184734156019613ddc565b61020082018051602090810151518382018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161189091906001906141db565b81604001819052506118b26118ab338460600151600061424f565b601a613ddc565b604051600081527f82ca378273002d041ecb8b64fbbb1d82aa90b5063b6c37520cf9ec27b76f01b59060200160405180910390a16000808452610120830151606083018051919091525160200152600181515161190e90613cf7565b5160018111156119205761192061590c565b1461192f578060600151611940565b80515161193b90613cf7565b604001515b60808201526102808201511561195c57600060a0820152611978565b8161018001518261026001516119729190616372565b60a08201525b8160a001518160a0015161198c9190616389565b82610240015161199c91906163a8565b60c082018190526102a083015110156119ba57816102a001516119c0565b8060c001515b60e08201526101a0820151156101208201819052156119e95760e0810151610100820152611a18565b816101a001518160800151602001518260e00151611a079190616389565b611a1191906163c0565b6101008201525b6101008101516080820151515110611a37576000610140820152611a55565b60808101515151610100820151611a4e9190616372565b6101408201525b816102c001518161014001511115611a7257816102c00151611a79565b8061014001515b61016082015261028082015115611a97576000610180820152611ab4565b816101800151826102600151611aad9190616372565b6101808201525b8160c00151816101800151611ac99190616389565b826102e00151611ad991906163a8565b6101a082018190526103008301511015611af857816103000151611aff565b806101a001515b6101c082015261012081015115611b21576101c08101516101e0820152611b51565b816101a00151816080015160200151826101c00151611b409190616389565b611b4a91906163c0565b6101e08201525b6101e08101516080820151516020015110611b73576000610200820152611b94565b608081015151602001516101e0820151611b8d9190616372565b6102008201525b8161032001518161020001511115611bb157816103200151611bb8565b8061020001515b61022082019081526101608201805161024084018051919091529151915160209081019290925282519091015190516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611c1d573d6000803e3d6000fd5b5061022081015160408201515151611c359190616372565b610260820180519190915260408083018051516020908101518451909101528051518201518351901515920191909152519051611c7591906000906141db565b6102808201526040820151815160200151610220830151611c97929190614267565b61016081015160808201515151611cae91906163a8565b6102a08201515261022081015160808201515160200151611ccf91906163a8565b6102a08281018051602090810193909352516102c08401805191909152608084015183015181518401528351516001600160a01b039081166000908152600485526040808220805460ff1916600190811790915593518751519093168252902081518051938201939093559184015160028301559092015160039092019190915561016082015190830151611d649190616372565b6102e082015152610220810151610300830151611d819190616372565b6102e0820180516020908101929092526102408301516103008401805191909152905190518201526102c082015101516101a0830151611dc19190616372565b6103208201526102c081015160200151611ddb9080616372565b6103408201526102c0810151602001516102808201516001602002015151611e039190616372565b610360820180519190915261028082018051602090810151810151835182015290518101516040908101519251921515920191909152606083015182518201516102c084015190920151611e579290614267565b610320810151156103a0820181905215611e7c576102c0820151610380820152611ead565b806103200151816102c0015160200151836102c00151611e9c9190616389565b611ea691906163c0565b6103808201525b6102c0810151515161038082015110611ecd5760006103c0820152611eec565b6103808101516102c08201515151611ee59190616372565b6103c08201525b806103a0015115611f08576103208201516103e0820152611f39565b806103200151816102c0015160200151836103200151611f289190616389565b611f3291906163c0565b6103e08201525b6102c081015151602001516103e082015110611f5c576000610400820152611f7e565b6103e08101516102c08201515160200151611f779190616372565b6104008201525b6103c081015161042082018051919091526104008201518151602090810191909152905161044083018051919091526103408301805182518401528351516001600160a01b039081166000908152600485526040808220805460ff1916600190811790915594518751519093168252908190208251805195820195909555938501516002850155908401516003909301929092555161046084018051919091526103208401518151840152835180516102c08601518501519251610300870151929095015193517fbc6287d05f27343f7d3ad6b8b81a7e11c37f68abba3f452ef69046d1f8322d6595612077959294939092909161653e565b60405180910390a1806101600151826102c001516120959190616372565b610480820151526102208101516103208301516120b29190616372565b610480820151602001526120c46152f8565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526104808901518151909601959095526102e08801518551909401939093526101e08801518451909201919091526103208601518351909401939093528151439301929092526101c08501519051909101526102808201516103608301516121c691906001906141db565b602082015160e001526101608201516102208401516121e59190616372565b602082015161010001526121f881614280565b50613a40565b60016020850151515160068111156122185761221861590c565b1415612423578151612236906001600160a01b03163314601b613ddc565b61224d8260e00151836101e001511015601c613ddc565b6122606000836101a0015114601d613ddc565b61226c3415601e613ddc565b61020082018051602090810151516104a084018051919091528251820151820151815183015291510151604090810151915191151591015260608201516122c1906122ba903390600061424f565b601f613ddc565b604051600081527f311d72d2eedfca613062f0bd06cac15074cc58d6bd9e04d34a7387e463b6f8359060200160405180910390a1600060208401526123046152f8565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015284870180516001908190526103408b01518251909701969096526101608a01518151909501949094526101e08901518451909301929092526101a08801518351909501949094528151439401939093526101c08601519051909201919091526102008401516104a084015161240092906141db565b60208201805160e00191909152610220840151905161010001526121f881614280565b600260208501515151600681111561243d5761243d61590c565b14156125e95761244f34156020613ddc565b61020082018051602090810151516104c084018051919091528251820151820151815183015291510151604090810151915191151591015260608201516124a49061249d903390600061424f565b6021613ddc565b604051600081527facfbb35ead4aa0ff823ae8f2aaa7f0f9794a5524a49a08d099eedfe7715dd2c69060200160405180910390a1600060408401526124e76152f8565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526103408a01518151909601959095526101608901518551909401939093526101e08801518451909201919091526101a08701518351909401939093528151439301929092526101c08501519051909101526102008301516104c083015161240091906001906141db565b60036020850151515160068111156126035761260361590c565b14156129bb57612621826101000151836101e0015110156022613ddc565b61262d34156023613ddc565b61020082018051602090810151516104e084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161267891906001906141db565b81610500018190525061269b612694338460600151600061424f565b6024613ddc565b604051600081527f3cf1ac7fed445217777f506c2236bcf582552ef30838a465092b082db1927e579060200160405180910390a160006060840152610220820151479081106126f9576102208301516126f49082616372565b6126fc565b60005b610520830181905261022084015161271491906163a8565b610540830181905260808401516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612756573d6000803e3d6000fd5b5060006127678460400151306146b6565b6105008401515151909150811061278f57610500830151515161278a9082616372565b612792565b60005b610560840181905261050084015151516127ab916163a8565b6105808401805191909152610500840180515160209081015183519091015280515160409081015183519015159101525190516127eb91906000906141db565b6105a0840152610560830151610500840151515161280991906163a8565b6105c084018190526105a084015151516128239190616372565b6105e084018051919091526105a08401805151602090810151835190910152515160409081015191519115159181019190915284015184516105c085015161286c929190614267565b6128746152f8565b845181516001600160a01b03918216905260208087015183518201526040808801518451908416908201526060808901518551908516908201526080808a0151865195169481019490945260a0808a0151865182015260c0808b0151875182015260e0808c0151885190910152610100808c0151885190910152610120808c0180518951909201919091526101408c015186890180519115159091528151815190970196909652518551909401939093526101e08a01518451909201919091526101a08901518351909401939093528151439301929092526101c08701519051909101526105a08401516105e085015161297191906000906141db565b602082015160e0015261054084015161022086015161052086015161299691906163a8565b6129a09190616372565b602082015161010001526129b381614280565b505050613a40565b60046020850151515160068111156129d5576129d561590c565b14156130c5576129e734156025613ddc565b6102008201805160209081015151610600840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051612a3291906001906141db565b816106200181905250612a55612a4e338460600151600061424f565b6026613ddc565b61012082015161064082018051919091525160006020909101526001612a7a33613cf7565b516001811115612a8c57612a8c61590c565b14612a9c57806106400151612aaa565b612aa533613cf7565b604001515b61066082015261028082015115612ac8576000610680820152612ae5565b816101800151826102600151612ade9190616372565b6106808201525b8160a00151816106800151612afa9190616389565b826102400151612b0a91906163a8565b6106a082018190526102a08301511015612b2957816102a00151612b30565b806106a001515b6106c08201526101a082015115610700820181905215612b5b576106c08101516106e0820152612b8c565b816101a0015181610660015160200151826106c00151612b7b9190616389565b612b8591906163c0565b6106e08201525b6106e0810151610660820151515110612bac576000610720820152612bcb565b61066081015151516106e0820151612bc49190616372565b6107208201525b816102c001518161072001511115612be857816102c00151612bef565b8061072001515b61074082015261028082015115612c0d576000610760820152612c2a565b816101800151826102600151612c239190616372565b6107608201525b8160c00151816107600151612c3f9190616389565b826102e00151612c4f91906163a8565b61078082018190526103008301511015612c6e57816103000151612c75565b8061078001515b6107a082015261070081015115612c97576107a08101516107c0820152612cc8565b816101a0015181610660015160200151826107a00151612cb79190616389565b612cc191906163c0565b6107c08201525b6107c0810151610660820151516020015110612ceb5760006107e0820152612d0d565b61066081015151602001516107c0820151612d069190616372565b6107e08201525b816103200151816107e001511115612d2a57816103200151612d31565b806107e001515b6108008201908152610740820180516108208401805191909152915191516020019190915251604051339180156108fc02916000818181858888f19350505050158015612d82573d6000803e3d6000fd5b506108008101516106208201515151612d9b9190616372565b610840820180519190915261062082018051516020908101518351909101525151604090810151915191151591810191909152820151610800820151612de391903390614267565b6107408101516106608201515151612dfb91906163a8565b610860820151526108008101516106608201515160200151612e1d91906163a8565b6108608201805160209081019290925251610880830180519190915261066083015182015181518301523360009081526004835260409020805460ff191660019081178255915180518051938301939093559183015160028201559101516003909101556107408101516102a0830151612e979190616372565b6108a082015152610800810151610300830151612eb49190616372565b6108a0820180516020908101929092526108208301516108c084018051919091529051815190920191909152516040517ff5b467b3260dbbe4073047fa1a85817918a4335ec00d41384a474e37412d212a91612f0f91615b63565b60405180910390a16108c08101805160c0850152516040517fbad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b91612f57913391908290616589565b60405180910390a1806107400151826102c00151612f759190616372565b6108e082015152610800810151610320830151612f929190616372565b6108e082015160200152612fa46152f8565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526108e08901518151909601959095526108a08801518551909401939093526101e08801518451909201919091526101a08701518351909401939093528151439301929092526101c08501519051909101526106208201516108408301516130a691906000906141db565b602082015160e001526107408201516102208401516121e59190616372565b60056020850151515160068111156130df576130df61590c565b141561351b5760208401515160c0015161090082015260e08201516101e083015161310c91116027613ddc565b61311834156028613ddc565b61090081015151610200830151602001515161313491906163a8565b6109208201805191909152610200830180516020908101518101518351820152905101516040908101519151911515910152606082015161090082015151613189916131829133919061424f565b6029613ddc565b610900810151516101a08301516131a091906163a8565b610940820152610120820151610960820180519190915251600060209091015260016131cb33613cf7565b5160018111156131dd576131dd61590c565b146131ed578061096001516131fb565b6131f633613cf7565b604001515b61098082018190526109008201515160209091015161321a91906163a8565b6109a0820152610940810151156109e0820181905215613245576102c08201516109c0820152613273565b610940810151610900820151516102c08401516132629190616389565b61326c91906163c0565b6109c08201525b806109e001511561328f57610320820151610a008201526132bd565b610940810151610900820151516103208401516132ac9190616389565b6132b691906163c0565b610a008201525b6109c081015161098082015151516132d591906163a8565b610a2082015152610a0081015161098082015151602001516132f791906163a8565b610a208201805160209081019290925251610a4083018051919091526109a083018051825184015233600090815260048452604090819020805460ff191660019081178255935180518051958301959095559385015160028201559284015160039093019290925551610a608401805191909152610940840151815190930192909252905190517fb280ed45957b3701f6c2dd43472f2183e0cfdfc99dbf4db25cc47b973c7aae86916133a991615a56565b60405180910390a1610a608101805160e08501526109008201515190516040805133815260208082019490945282518183015292909101516060830152517fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec9181900360800190a16134196152f8565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526103408a01518151909601959095526101608901518551909401939093526101e08801518451909201919091526109408601518351909401939093528151439301929092526101c085015190519091015261020083015161092083015161240091906001906141db565b60066020850151515160068111156135355761353561590c565b1415613a40576020808501515160e00151610a80830152610120830151610aa08301805191909152516000910152600161356e33613cf7565b5160018111156135805761358061590c565b146135905780610aa0015161359e565b61359933613cf7565b604001515b610ac0820181905260200151610a80820151516135be911015602a613ddc565b6135ca3415602b613ddc565b6102008201805160209081015151610ae084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161361591906001906141db565b81610b000181905250613638613631338460600151600061424f565b602c613ddc565b610a80810151516101a083015161364f9190616372565b610b20820152610a8081015151610ac0820151602001516136709190616372565b610b40820152610a8081015151610b0082015160200151516136929190616372565b610b608201805191909152610b008201805160209081015181015183518201529051015160409081015191519115159101526060820151610a80820151516136dc91903390614267565b610b2081015115610ba0820181905215613701576102c0820151610b8082015261372f565b610b20810151610a80820151516102c084015161371e9190616389565b61372891906163c0565b610b808201525b610ac08101515151610b808201511061374f576000610bc082015261376e565b610b80810151610ac082015151516137679190616372565b610bc08201525b80610ba001511561378a57610320820151610be08201526137b8565b610b20810151610a80820151516103208401516137a79190616389565b6137b191906163c0565b610be08201525b610ac08101515160200151610be0820151106137db576000610c008201526137fd565b610be0810151610ac082015151602001516137f69190616372565b610c008201525b610bc0810151610c208201805191909152610c0082015181516020908101919091529051610c408301805191909152610b4083018051825184015233600090815260048452604090819020805460ff191660019081178255935180518051958301959095559385015160028201559284015160039093019290925551610c608401805191909152610b20840151815190930192909252905190517ff16ebf3c6e780d8df4e21b51f2232a5032ef36e98a4f2227b11947d2aab39222916138c291615a56565b60405180910390a1610c6081018051610100850152610a8082015151905160408051338082526020808301959095528351928201929092529290910151606083015260808201527f54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c6509060a00160405180910390a161393e6152f8565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a0151885190910152610100808a0151885190910152610120808a015188519091015261014089015185880180519115159091526103408a01518151909601959095526101608901518551909401939093526101e0880151845190920191909152610b208601518351909401939093528151439301929092526101c0850151905190910152610b00820151610b6083015161240091906001906141db565b50505050565b613a566001600054146010613ddc565b8151613a71901580613a6a57508251600154145b6011613ddc565b600080805560028054613a8390615e41565b80601f0160208091040260200160405190810160405280929190818152602001828054613aaf90615e41565b8015613afc5780601f10613ad157610100808354040283529160200191613afc565b820191906000526020600020905b815481529060010190602001808311613adf57829003601f168201915b5050505050806020019051810190613b149190615fee565b9050613b1e615318565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1613b713415600d613ddc565b61018082015160808301515151613b8891906163a8565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151613bbf91906000906141db565b8160200181905250613be5613bde33846040015185610180015161424f565b600e613ddc565b8151613bfd906001600160a01b03163314600f613ddc565b613c05615348565b82516001600160a01b0390811682526020808501518184015260408086015183168185015260608087015184169085015260a080870151608086015260c0808801519186019190915260e080880151918601919091526101008088015190941690850152610120808701519385019390935261014080870151938501939093526101608087015193850193909352610180808701519385019390935243928401839052848201516101a085015260026000556001929092559051613ccb918391016165f7565b60405160208183030381529060405260029080519060200190613cef9291906153e1565b505050505050565b613cff6149f0565b60016001600160a01b03831660009081526004602052604090205460ff166001811115613d2e57613d2e61590c565b1415613dcd576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115613d6f57613d6f61590c565b6001811115613d8057613d8061590c565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b60008082526020820152919050565b816103175760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613e126002600054146016613ddc565b8151613e2d901580613e2657508251600154145b6017613ddc565b600080805560028054613e3f90615e41565b80601f0160208091040260200160405190810160405280929190818152602001828054613e6b90615e41565b8015613eb85780601f10613e8d57610100808354040283529160200191613eb8565b820191906000526020600020905b815481529060010190602001808311613e9b57829003601f168201915b5050505050806020019051810190613ed091906160c8565b9050613eda615465565b7f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc223385604051613f0b9291906166e3565b60405180910390a16000602085015151516001811115613f2d57613f2d61590c565b1415613fc7578151613f4b906001600160a01b031633146012613ddc565b613f5734156013613ddc565b604051600081527fa859ea44efa90bc57f6fa454a4553018767e3315c27c07ce2d1a02cb726af13d9060200160405180910390a160006080840152604082015182516101a08401515151613fac929190614267565b60008080556001819055613fc29060029061549b565b613a40565b6001602085015151516001811115613fe157613fe161590c565b1415613a405761400a8260e001516001600160a01b0316336001600160a01b0316146014613ddc565b61401c82610120015134146015613ddc565b604051600081527ffd24edefd6b61438ca8fdb98c7d35d85120ed7cce4e8dd6b13151c7c621c77f99060200160405180910390a1600060a080850191909152820151610180830151614070906002906163a8565b61407a91906163a8565b808252608083015161408b916163a8565b6020808301919091526040820180516000908190529051820152610120830151606083018051919091526101608401519051909101526140c96152f8565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845190841691015260e08086015184519316608090930192909252610100850151835160a00152610140850151835160c0908101919091529084018051845190930192909252840151905161414e91906163a8565b81516101009081019190915260408084018051845161012090810191909152602080860180516000908190529351815190920191909152606080880151825190950194909452865181519094019390935282516080019190915281514360a090910152610180860151825160c001526101a0860151825160e001528501519051909101526121f881614280565b6141e36154d8565b60005b600281101561422f5784816002811061420157614201616528565b602002015182826002811061421857614218616528565b60200201528061422781616736565b9150506141e6565b508181846002811061424357614243616528565b60200201529392505050565b600061425d83853085614782565b90505b9392505050565b61427283838361485c565b61427b57600080fd5b505050565b614288615523565b6020820151516142995760006142a4565b602082015160800151155b156143bb5760208201516101000151479081106142d457602083015161010001516142cf9082616372565b6142d7565b60005b6101208301819052835160800151602085015161010001516001600160a01b03909116916108fc9161430991906163a8565b6040518115909202916000818181858888f19350505050158015614331573d6000803e3d6000fd5b506000614346846000015160400151306146b6565b602085015160e001515151909150811061437457602084015160e00151515161436f9082616372565b614377565b60005b6101408401819052845160408101519051602087015160e0015151516143a5936143a0916163a8565b614267565b60008080556001819055613a409060029061549b565b602082015160c00151825160e0015111156143de57816020015160c001516143e5565b815160e001515b80825260208301516060015110801560408301526144095760006020820152614424565b602082015160600151815161441e9190616372565b60208201525b815160a0015160208201516144399190616389565b60208084015101515161444c91906163a8565b606082018190526020830151604001515110156144725760208201516040015151614478565b80606001515b608082015260408101511561449357600060a08201526144ae565b60208201516060015181516144a89190616372565b60a08201525b815160c0015160a08201516144c39190616389565b826020015160200151602001516144da91906163a8565b60c082018190526020808401516040015101511015614505578160200151604001516020015161450b565b8060c001515b60e0820190815260808201516101008301805191909152905190516020015261453261559a565b8251516001600160a01b03908116825283516020908101518184015284516040908101518316818501528551606090810151841681860152865160809081015190941684860152865160a09081015181870152875160c09081015181880152885160e09081015181890152895161010090810151818a01528a5161012090810151908a0152868b0180515115156101408b015280518701516101608b01528051909501516101808a015284518801516101a08a01528451909301516101c08901528351909101516101e08801528251810151610200880152825182015161022088015282518501515161024088015287516102608801528784015115156102808801528251840151516102a0880152948701516102c087015281518401518401516102e087015290518201518301516103008601529285015161032085015291840151610340840152600660005543600155905161469291839101616751565b60405160208183030381529060405260029080519060200190613a409291906153e1565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b1790529151600092839283929187169183916147119161692f565b60006040518083038185875af1925050503d806000811461474e576040519150601f19603f3d011682016040523d82523d6000602084013e614753565b606091505b50915091506147648282600661492d565b5080806020019051810190614779919061694b565b95945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916147e99161692f565b60006040518083038185875af1925050503d8060008114614826576040519150601f19603f3d011682016040523d82523d6000602084013e61482b565b606091505b509150915061483c8282600161492d565b50808060200190518101906148519190616964565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916148bb9161692f565b60006040518083038185875af1925050503d80600081146148f8576040519150601f19603f3d011682016040523d82523d6000602084013e6148fd565b606091505b509150915061490e8282600261492d565b50808060200190518101906149239190616964565b9695505050505050565b6060831561493c575081614260565b82511561494c5782518084602001fd5b60405163100960cb60e01b815260048101839052602401613df9565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016149a7614c8d565b81526020016149c9604051806040016040528060008152602001600081525090565b81526020016149eb604051806040016040528060008152602001600081525090565b905290565b60408051606081018252600080825260208201529081016149eb6156e3565b6040518060800160405280614a22615705565b815260200160008152602001614a4b604051806040016040528060008152602001600081525090565b8152602001600081525090565b60405180602001604052806149eb614a0f565b604051806102000160405280614a7f6156e3565b8152602001614a8c6156e3565b815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016149eb604051806040016040528060008152602001600081525090565b6040518060400160405280600081526020016149eb615778565b6040805161010081019091528060008152602001614b55604080518082019091526000808252602082015290565b815260006020808301829052604080840183905260608401839052608084018390528051808301825283815260a08501528051918201905290815260c09091015290565b604051806101c00160405280614bad6156e3565b8152602001614bba6156e3565b8152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016149eb604051806040016040528060008152602001600081525090565b6040518060400160405280600081526020016149eb60408051608081018252600060208201818152928201819052606082015290815290565b6040805160808101825260009181018281526060820192909252908152602081016149eb6156e3565b60408051608081018252600091810182815260608201929092529081906149c9565b60408051610cc0810182526000610c808201818152610ca083018290528252825160608101845281815260208082018390528185019290925290820152908101614cf76154d8565b8152602001614d046156e3565b8152602001614d116156e3565b8152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614d90604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001614dbd6154d8565b8152602001614ddf604051806040016040528060008152602001600081525090565b8152602001614dec6156e3565b8152602001614e0e604051806040016040528060008152602001600081525090565b8152602001614e1b614c8d565b81526020016000815260200160008152602001614e54604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001600015158152602001600081526020016000815260200160008152602001614e9b604051806040016040528060008152602001600081525090565b8152602001614ea86156e3565b8152602001614eca604051806040016040528060008152602001600081525090565b8152602001614eec604051806040016040528060008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001614f596154d8565b8152602001600081526020016000815260200160008152602001614f99604051806060016040528060008152602001600081526020016000151581525090565b8152602001614fa66154d8565b815260200160008152602001614fd8604051806060016040528060008152602001600081526020016000151581525090565b815260408051606081018252600080825260208281018290529282015291019081526020016150056154d8565b81526020016150126156e3565b815260200161501f6156e3565b815260200160008152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161509e604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016150e0604051806040016040528060008152602001600081525090565b81526020016150ed6156e3565b815260200161510f604051806040016040528060008152602001600081525090565b815260200161511c614c8d565b815260200161513e604051806040016040528060008152602001600081525090565b81526020016151596040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200161518d6156e3565b815260200161519a6156e3565b81526020016000815260200160008152602001600015158152602001600081526020016151da604051806040016040528060008152602001600081525090565b81526020016151e76156e3565b8152602001615209604051806040016040528060008152602001600081525090565b81526020016152246040518060200160405280600081525090565b81526020016152316156e3565b815260200161523e6156e3565b8152604080516060810182526000808252602082810182905292820152910190815260200161526b6154d8565b815260200160008152602001600081526020016152a4604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016000151581526020016000815260200160008152602001600081526020016152eb604051806040016040528060008152602001600081525090565b81526020016149c96156e3565b604051806040016040528061530b61578b565b81526020016149eb61581d565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016149eb6154d8565b604051806101c0016040528060006001600160a01b0316815260200161536c615705565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016149eb6154d8565b8280546153ed90615e41565b90600052602060002090601f01602090048101928261540f5760008555615455565b82601f1061542857805160ff1916838001178555615455565b82800160010185558215615455579182015b8281111561545557825182559160200191906001019061543a565b5061546192915061589a565b5090565b604051806080016040528060008152602001600081526020016149c9604051806040016040528060008152602001600081525090565b5080546154a790615e41565b6000825580601f106154b7575050565b601f0160209004906000526020600020908101906154d5919061589a565b50565b60405180604001604052806002905b61550d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816154e75790505090565b60405180610160016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001615586604051806040016040528060008152602001600081525090565b815260200160008152602001600081525090565b60405180610360016040528060006001600160a01b031681526020016155be615705565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200161562c604051806040016040528060008152602001600081525090565b8152602001600015158152602001615657604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016156806154d8565b815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016149eb604051806040016040528060008152602001600081525090565b6040805160808101825260009181018281526060820192909252908190614a4b565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200161574d604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b60405180602001604052806149eb614b27565b60405180610140016040528060006001600160a01b031681526020016157af615705565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016149eb604051806040016040528060008152602001600081525090565b60405180610120016040528060001515815260200161584f604051806040016040528060008152602001600081525090565b8152602001615871604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001614a4b6154d8565b5b80821115615461576000815560010161589b565b600061014082840312156158c257600080fd5b50919050565b6000604082840312156158c257600080fd5b6001600160a01b03811681146154d557600080fd5b60006020828403121561590157600080fd5b8135614260816158da565b634e487b7160e01b600052602160045260246000fd5b600281106154d5576154d561590c565b815160a082019061594281615922565b80835250602083015115156020830152604083015161596f60408401825180518252602090810151910152565b602081015160808401525092915050565b60018060a01b0380825116835280602083015116602084015260408201516159b5604085018280518252602090810151910152565b5060608201516080840152608082015160a084015260a082015160c08401528060c08301511660e0840152505050565b6000610180820190506159f9828451615980565b6020838101516101008401526040840151805161012085015201516101408301526060909201516101609091015290565b60008060408385031215615a3d57600080fd5b8235615a48816158da565b946020939093013593505050565b81518152602080830151908201526040810161034c565b600060208284031215615a7f57600080fd5b5035919050565b60005b83811015615aa1578181015183820152602001615a89565b83811115613a405750506000910152565b8281526040602082015260008251806040840152615ad7816060850160208701615a86565b601f01601f1916919091016060019392505050565b60008060408385031215615aff57600080fd5b8235615b0a816158da565b91506020830135615b1a816158da565b809150509250929050565b6000608082840312156158c257600080fd5b615b4c82825180518252602090810151910152565b602090810151805160408401520151606090910152565b6080810161034c8284615b37565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715615baa57615baa615b71565b60405290565b6040516020810167ffffffffffffffff81118282101715615baa57615baa615b71565b604051610100810167ffffffffffffffff81118282101715615baa57615baa615b71565b6040516060810167ffffffffffffffff81118282101715615baa57615baa615b71565b6040516101a0810167ffffffffffffffff81118282101715615baa57615baa615b71565b6040516101c0810167ffffffffffffffff81118282101715615baa57615baa615b71565b604051610360810167ffffffffffffffff81118282101715615baa57615baa615b71565b600060408284031215615c9857600080fd5b615ca0615b87565b90508135615cad816158da565b81526020820135615cbd816158da565b602082015292915050565b80151581146154d557600080fd5b803561107481615cc8565b600060208284031215615cf357600080fd5b6040516020810181811067ffffffffffffffff82111715615d1657615d16615b71565b6040529135825250919050565b6000818303610140811215615d3757600080fd5b615d3f615b87565b8335815261012080601f1984011215615d5757600080fd5b615d5f615bb0565b9250615d69615bd3565b602086013560078110615d7b57600080fd5b8152615d8a8760408801615c86565b6020820152615d9b60808701615cd6565b6040820152615dac60a08701615cd6565b6060820152615dbd60c08701615cd6565b6080820152615dce60e08701615cd6565b60a0820152615de1876101008801615ce1565b60c0820152615df287838801615ce1565b60e082015283525060208101919091529392505050565b600060408284031215615e1b57600080fd5b615e23615b87565b823581526020830135615e3581615cc8565b60208201529392505050565b600181811c90821680615e5557607f821691505b602082108114156158c257634e487b7160e01b600052602260045260246000fd5b8051611074816158da565b600060408284031215615e9357600080fd5b615e9b615b87565b9050815181526020820151602082015292915050565b60006101008284031215615ec457600080fd5b60405160e0810181811067ffffffffffffffff82111715615ee757615ee7615b71565b80604052508091508251615efa816158da565b81526020830151615f0a816158da565b6020820152615f1c8460408501615e81565b60408201526080830151606082015260a0830151608082015260c083015160a082015260e0830151615f4d816158da565b60c0919091015292915050565b805161107481615cc8565b600082601f830112615f7657600080fd5b615f7e615b87565b8060c0840185811115615f9057600080fd5b845b81811015615fe35760608188031215615fab5760008081fd5b615fb3615bf7565b8151815260208083015181830152604080840151615fd081615cc8565b9083015290855290930192606001615f92565b509095945050505050565b6000610320828403121561600157600080fd5b616009615c1a565b61601283615e76565b81526160218460208501615eb1565b6020820152610120616034818501615e76565b6040830152610140616047818601615e76565b606084015261016061605b87828801615f65565b608085015261022086015160a085015261024086015160c085015261026086015160e085015261608e6102808701615e76565b6101008501526102a0860151928401929092526102c0850151908301526102e0840151908201526103009092015161018083015250919050565b600061034082840312156160db57600080fd5b6160e3615c3e565b6160ec83615e76565b81526160fb8460208501615eb1565b602082015261012061610e818501615e76565b6040830152610140616121818601615e76565b60608401526101608086015160808501526101808087015160a08601526101a08088015160c08701526161576101c08901615e76565b60e08701526101e08801516101008701526102008801518587015261022088015184870152610240880151838701526102608801518287015261619e896102808a01615f65565b9086015250929695505050505050565b600061054082840312156161c157600080fd5b6161c9615c62565b6161d283615e76565b81526161e18460208501615eb1565b60208201526101206161f4818501615e76565b6040830152610140616207818601615e76565b606084015261016061621a818701615e76565b60808501526101808087015160a08601526101a08088015160c08701526101c08089015160e08801526101e0808a015161010089015261020061625f8c828d01615e81565b888a01526102409750616273888c01615f5a565b878a015261026096506162888c888d01615e81565b868a01526102a09550858b0151858a01526102c09450848b0151848a01526102e09350838b0151838a01526103009250828b0151828a015261032091506162d18c838d01615f65565b908901526103e08a01516102208901526104008a0151878901526104208a0151868901526163026104408b01615f5a565b6102808901526104608a0151858901526104808a0151848901526104a08a0151838901526104c08a0151828901526104e08a0151818901525050505050505061634f846105008501615e81565b6103408201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156163845761638461635c565b500390565b60008160001904831182151516156163a3576163a361635c565b500290565b600082198211156163bb576163bb61635c565b500190565b6000826163dd57634e487b7160e01b600052601260045260246000fd5b500490565b600081830360808112156163f557600080fd5b6163fd615b87565b833581526060601f198301121561641357600080fd5b61641b615bb0565b9150616425615bf7565b60208501356002811061643757600080fd5b8152604085013561644781615cc8565b6020820152606085013561645a81615cc8565b6040820152825260208101919091529392505050565b6001600160a01b03838116825282516020808401919091528301515180516101608401929190600781106164a6576164a661590c565b604085810191909152602082810151805185166060880152015190921660808501529081015180151560a085015290606081015180151560c08601529150608081015180151560e0860152915060a0810151801515610100860152915060c08101518051610120860152915060e0015180516101408501529050509392505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03868116825260208083018790528551604084015285015160608301526101208201906165756080840186615b37565b808416610100840152509695505050505050565b6001600160a01b03848116825260c08201906165a86020840186615b37565b80841660a084015250949350505050565b8060005b6002811015613a405781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016165bd565b81516001600160a01b031681526103408101602083015161661b6020840182615980565b506040830151610120616638818501836001600160a01b03169052565b60608501519150610140616656818601846001600160a01b03169052565b60808601516101608681019190915260a08701516101808088019190915260c08801516101a08089019190915260e08901516001600160a01b03166101c08901526101008901516101e0890152938801516102008801529187015161022087015286015161024086015285015161026085015284015190506166dc6102808401826165b9565b5092915050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919061670f81615922565b80604085015250602081015115156060840152604081015115156080840152509392505050565b600060001982141561674a5761674a61635c565b5060010190565b81516001600160a01b03168152610540810160208301516167756020840182615980565b506040830151610120616792818501836001600160a01b03169052565b606085015191506101406167b0818601846001600160a01b03169052565b608086015192506101606167ce818701856001600160a01b03169052565b60a08701516101808781019190915260c08801516101a08089019190915260e08901516101c0808a01919091526101008a01516101e0808b0191909152958a015196506102009561682b878b018980518252602090810151910152565b948a01519650610240946168428a87018915159052565b938a01519650610260936168628a86018980518252602090810151910152565b928a01516102a08a810191909152918a01516102c0808b0191909152908a01516102e0808b0191909152928a0151610300808b0191909152958a0151965061032095919290916168b4878b01896165b9565b6102208b01516103e08b0152948a01516104008a0152928901516104208901526102808901511515610440890152908801516104608801528701516104808701528601516104a08601528501516104c08501528401516104e084015250610340830151805161050084015260208101516105208401526166dc565b60008251616941818460208701615a86565b9190910192915050565b60006020828403121561695d57600080fd5b5051919050565b60006020828403121561697657600080fd5b815161426081615cc856fea2646970667358221220716a06caca1f5a64d3457d3f9fe5131aa95a8fd3f265b00144b1518e17f088a164736f6c634300080c0033`,
  BytecodeLen: 29815,
  Which: `oD`,
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
    at: './staker.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './staker.rsh:105:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:113:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './staker.rsh:355:11:after expr stmt semicolon',
    fs: [],
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
  "Any_eject": Any_eject,
  "Any_halt": Any_halt,
  "Any_nop": Any_nop,
  "Any_reclaimRewards": Any_reclaimRewards,
  "Deployer": Deployer,
  "Setup_abortSetup": Setup_abortSetup,
  "Setup_fund": Setup_fund,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw
  };
export const _APIs = {
  Any: {
    eject: Any_eject,
    halt: Any_halt,
    nop: Any_nop,
    reclaimRewards: Any_reclaimRewards
    },
  Setup: {
    abortSetup: Setup_abortSetup,
    fund: Setup_fund
    },
  Staker: {
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw
    }
  };
