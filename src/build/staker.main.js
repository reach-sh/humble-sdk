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
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc4 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  return {
    Harvest: [ctc0, ctc3, ctc0],
    Stake: [ctc0, ctc1, ctc4],
    Withdraw: [ctc0, ctc1, ctc4, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc3], ['start', ctc2], ['end', ctc2], ['Rewarder0', ctc0]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc10 = stdlib.T_Struct([['opts', ctc4], ['totalStaked', ctc2], ['remainingRewards', ctc3]]);
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Object({
    rewards: ctc3,
    stake: ctc2
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4889, v4890, v4891, v4892, v4909, v4912, v4913, v4920, v4930, v4933, v4935, v4937] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = svs;
            return (await ((async () => {
              
              const v8770 = {
                opts: v4890,
                remainingRewards: v8737,
                totalStaked: v8738
                };
              
              return v8770;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      Opts: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4889, v4890, v4891, v4892, v4909, v4912, v4913, v4920, v4930, v4933, v4935, v4937] = svs;
            return (await ((async () => {
              
              
              return v4890;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = svs;
            return (await ((async () => {
              
              
              return v4890;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = svs;
            return (await ((async () => {
              
              
              return v4890;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      rewardsAvailable: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4889, v4890, v4891, v4892, v4909, v4912, v4913, v4920, v4930, v4933, v4935, v4937] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = svs;
            return (await ((async (_v8852 ) => {
                const v8852 = stdlib.protect(ctc0, _v8852, null);
              
              let v8853;
              const v8854 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
              if (v8854) {
                v8853 = v8735;
                }
              else {
                const v8855 = stdlib.le(v4913, v8736);
                const v8856 = v8855 ? v4913 : v8736;
                const v8857 = stdlib.ge(v4912, v8736);
                const v8858 = v8857 ? v4912 : v8736;
                let v8859;
                const v8860 = stdlib.ge(v8858, v8856);
                if (v8860) {
                  v8859 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v8861 = stdlib.sub(v8856, v8858);
                  v8859 = v8861;
                  }
                const v8862 = stdlib.cast("UInt", "UInt256", v8859, false);
                const v8863 = stdlib.mul256(v4930, v8862);
                const v8864 = stdlib.cast("UInt", "UInt256", v8738, false);
                const v8865 = stdlib.div256(v8863, v8864);
                const v8866 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
                const v8867 = stdlib.add256(v8866, v8865);
                let v8872;
                if (v8860) {
                  v8872 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v8874 = stdlib.sub(v8856, v8858);
                  v8872 = v8874;
                  }
                const v8875 = stdlib.cast("UInt", "UInt256", v8872, false);
                const v8876 = stdlib.mul256(v4933, v8875);
                const v8878 = stdlib.div256(v8876, v8864);
                const v8879 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
                const v8880 = stdlib.add256(v8879, v8878);
                const v8881 = [v8867, v8880];
                v8853 = v8881;
                }
              const v8882 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v8852), null);
              const v8883 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v8884 = {
                rewards: v8883,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v8885 = stdlib.fromSome(v8882, v8884);
              const v8886 = v8885.stake;
              const v8891 = v8885.rewards;
              const v8892 = v8891[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
              const v8894 = v8853[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
              const v8895 = stdlib.cast("UInt", "UInt256", v8886, false);
              const v8896 = stdlib.mul256(v8895, v8894);
              const v8897 = stdlib.div256(v8896, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
              const v8898 = stdlib.cast("UInt256", "UInt", v8897, false);
              let v8899;
              const v8900 = stdlib.ge(v8892, v8898);
              if (v8900) {
                v8899 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v8901 = stdlib.sub(v8898, v8892);
                v8899 = v8901;
                }
              const v8902 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
              const v8903 = stdlib.le(v8899, v8902);
              const v8904 = v8903 ? v8899 : v8902;
              const v8915 = v8891[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
              const v8917 = v8853[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
              const v8919 = stdlib.mul256(v8895, v8917);
              const v8920 = stdlib.div256(v8919, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
              const v8921 = stdlib.cast("UInt256", "UInt", v8920, false);
              let v8922;
              const v8923 = stdlib.ge(v8915, v8921);
              if (v8923) {
                v8922 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v8924 = stdlib.sub(v8921, v8915);
                v8922 = v8924;
                }
              const v8925 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
              const v8926 = stdlib.le(v8922, v8925);
              const v8927 = v8926 ? v8922 : v8925;
              const v8928 = [v8904, v8927];
              
              return v8928;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4889, v4890, v4891, v4892, v4909, v4912, v4913, v4920, v4930, v4933, v4935, v4937] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = svs;
            return (await ((async (_v8772, _v8773 ) => {
                const v8772 = stdlib.protect(ctc0, _v8772, null);
                const v8773 = stdlib.protect(ctc2, _v8773, null);
              
              let v8774;
              const v8775 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
              if (v8775) {
                v8774 = v8735;
                }
              else {
                const v8776 = stdlib.le(v4913, v8773);
                const v8777 = v8776 ? v4913 : v8773;
                const v8778 = stdlib.ge(v4912, v8736);
                const v8779 = v8778 ? v4912 : v8736;
                let v8780;
                const v8781 = stdlib.ge(v8779, v8777);
                if (v8781) {
                  v8780 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v8782 = stdlib.sub(v8777, v8779);
                  v8780 = v8782;
                  }
                const v8783 = stdlib.cast("UInt", "UInt256", v8780, false);
                const v8784 = stdlib.mul256(v4930, v8783);
                const v8785 = stdlib.cast("UInt", "UInt256", v8738, false);
                const v8786 = stdlib.div256(v8784, v8785);
                const v8787 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
                const v8788 = stdlib.add256(v8787, v8786);
                let v8793;
                if (v8781) {
                  v8793 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v8795 = stdlib.sub(v8777, v8779);
                  v8793 = v8795;
                  }
                const v8796 = stdlib.cast("UInt", "UInt256", v8793, false);
                const v8797 = stdlib.mul256(v4933, v8796);
                const v8799 = stdlib.div256(v8797, v8785);
                const v8800 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
                const v8801 = stdlib.add256(v8800, v8799);
                const v8802 = [v8788, v8801];
                v8774 = v8802;
                }
              const v8803 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v8772), null);
              const v8804 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v8805 = {
                rewards: v8804,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v8806 = stdlib.fromSome(v8803, v8805);
              const v8807 = v8806.stake;
              const v8812 = v8806.rewards;
              const v8813 = v8812[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
              const v8815 = v8774[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
              const v8816 = stdlib.cast("UInt", "UInt256", v8807, false);
              const v8817 = stdlib.mul256(v8816, v8815);
              const v8818 = stdlib.div256(v8817, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
              const v8819 = stdlib.cast("UInt256", "UInt", v8818, false);
              let v8820;
              const v8821 = stdlib.ge(v8813, v8819);
              if (v8821) {
                v8820 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v8822 = stdlib.sub(v8819, v8813);
                v8820 = v8822;
                }
              const v8823 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
              const v8824 = stdlib.le(v8820, v8823);
              const v8825 = v8824 ? v8820 : v8823;
              const v8836 = v8812[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
              const v8838 = v8774[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
              const v8840 = stdlib.mul256(v8816, v8838);
              const v8841 = stdlib.div256(v8840, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
              const v8842 = stdlib.cast("UInt256", "UInt", v8841, false);
              let v8843;
              const v8844 = stdlib.ge(v8836, v8842);
              if (v8844) {
                v8843 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v8845 = stdlib.sub(v8842, v8836);
                v8843 = v8845;
                }
              const v8846 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
              const v8847 = stdlib.le(v8843, v8846);
              const v8848 = v8847 ? v8843 : v8846;
              const v8849 = [v8825, v8848];
              
              return v8849;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v4889, v4890, v4891, v4892, v4909, v4912, v4913, v4920, v4930, v4933, v4935, v4937] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = svs;
            return (await ((async (_v8719 ) => {
                const v8719 = stdlib.protect(ctc0, _v8719, null);
              
              const v8720 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v8719), null);
              const v8721 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v8722 = {
                rewards: v8721,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              const v8723 = stdlib.fromSome(v8720, v8722);
              const v8724 = v8723.stake;
              
              return v8724;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc7, ctc2, ctc2, ctc0, ctc8, ctc8, ctc2, ctc2],
      2: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc0, ctc8, ctc8, ctc2, ctc2, ctc7],
      6: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc0, ctc8, ctc8, ctc9, ctc2, ctc3, ctc2, ctc7, ctc2]
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc5], ['stakeToken', ctc5], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc6]]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Setup_abortSetup0_89: ctc8,
    Setup_fund0_89: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Staker_harvest0_1959: ctc8,
    Staker_stake0_1959: ctc10,
    Staker_withdraw0_1959: ctc10,
    Staker_withdrawAndHarvest0_1959: ctc10
    });
  const ctc12 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc13 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc14 = stdlib.T_Tuple([ctc13, ctc12]);
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1, ctc15]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc18 = stdlib.T_UInt256;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v4865 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v4866 = [v4865, v4865];
  const v4870 = stdlib.protect(ctc7, interact.opts, 'for Deployer\'s interact field opts');
  const v4871 = v4870.rewardToken1;
  const v4872 = v4870.stakeToken;
  const v4874 = v4870.start;
  const v4875 = v4870.end;
  
  const v4883 = stdlib.tokenEq(v4871, v4872);
  const v4884 = v4883 ? false : true;
  stdlib.assert(v4884, {
    at: './staker.rsh:94:10:application',
    fs: ['at ./staker.rsh:91:16:application call to [unknown function] (defined at: ./staker.rsh:91:20:function exp)'],
    msg: 'can only reward a different token than the one staked',
    who: 'Deployer'
    });
  const v4888 = stdlib.lt(v4874, v4875);
  stdlib.assert(v4888, {
    at: './staker.rsh:89:10:application',
    fs: ['at ./staker.rsh:95:14:application call to "checkOpts" (defined at: ./staker.rsh:87:28:function exp)', 'at ./staker.rsh:91:16:application call to [unknown function] (defined at: ./staker.rsh:91:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4870, v4871, v4872],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:97:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4890, v4891, v4892], secs: v4894, time: v4893, didSend: v48, from: v4889 } = txn1;
      
      const v4897 = v4866[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '0')];
      const v4899 = v4897[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1')];
      const v4900 = v4897[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '2')];
      const v4901 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4899, v4900];
      const v4902 = stdlib.Array_set(v4866, stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '0'), v4901);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4891
        });
      const v4904 = v4902[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1')];
      const v4906 = v4904[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1')];
      const v4907 = v4904[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '2')];
      const v4908 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4906, v4907];
      const v4909 = stdlib.Array_set(v4902, stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1'), v4908);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4892
        });
      ;
      const v4912 = v4890.start;
      const v4913 = v4890.end;
      const v4917 = v4890.rewardsPerBlock;
      const v4920 = v4890.Rewarder0;
      const v4921 = v4917[stdlib.checkedBigNumberify('./staker.rsh:99:13:application', stdlib.UInt_max, '0')];
      const v4922 = v4917[stdlib.checkedBigNumberify('./staker.rsh:99:13:application', stdlib.UInt_max, '1')];
      const v4927 = stdlib.sub(v4913, v4912);
      const v4929 = stdlib.cast("UInt", "UInt256", v4921, false);
      const v4930 = stdlib.mul256(v4929, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v4932 = stdlib.cast("UInt", "UInt256", v4922, false);
      const v4933 = stdlib.mul256(v4932, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v4935 = stdlib.mul(v4921, v4927);
      const v4937 = stdlib.mul(v4922, v4927);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v4890, v4891, v4892], secs: v4894, time: v4893, didSend: v48, from: v4889 } = txn1;
  const v4895 = stdlib.tokenEq(v4891, v4892);
  const v4896 = v4895 ? false : true;
  stdlib.assert(v4896, {
    at: './staker.rsh:97:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v4897 = v4866[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '0')];
  const v4899 = v4897[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1')];
  const v4900 = v4897[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '2')];
  const v4901 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4899, v4900];
  const v4902 = stdlib.Array_set(v4866, stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '0'), v4901);
  ;
  const v4904 = v4902[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1')];
  const v4906 = v4904[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1')];
  const v4907 = v4904[stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '2')];
  const v4908 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4906, v4907];
  const v4909 = stdlib.Array_set(v4902, stdlib.checkedBigNumberify('./staker.rsh:97:12:dot', stdlib.UInt_max, '1'), v4908);
  ;
  ;
  const v4912 = v4890.start;
  const v4913 = v4890.end;
  const v4914 = stdlib.lt(v4912, v4913);
  stdlib.assert(v4914, {
    at: './staker.rsh:89:10:application',
    fs: ['at ./staker.rsh:98:12:application call to "checkOpts" (defined at: ./staker.rsh:87:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v4917 = v4890.rewardsPerBlock;
  const v4920 = v4890.Rewarder0;
  const v4921 = v4917[stdlib.checkedBigNumberify('./staker.rsh:99:13:application', stdlib.UInt_max, '0')];
  const v4922 = v4917[stdlib.checkedBigNumberify('./staker.rsh:99:13:application', stdlib.UInt_max, '1')];
  const v4927 = stdlib.sub(v4913, v4912);
  const v4929 = stdlib.cast("UInt", "UInt256", v4921, false);
  const v4930 = stdlib.mul256(v4929, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
  const v4932 = stdlib.cast("UInt", "UInt256", v4922, false);
  const v4933 = stdlib.mul256(v4932, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
  const v4935 = stdlib.mul(v4921, v4927);
  const v4937 = stdlib.mul(v4922, v4927);
  const txn2 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4909, v4912, v4913, v4920, v4930, v4933, v4935, v4937],
    evt_cnt: 0,
    funcNum: 1,
    lct: v4893,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0'), [[v4937, v4891]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v4940, time: v4939, didSend: v82, from: v4938 } = txn2;
      
      ;
      const v4941 = v4909[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0')];
      const v4942 = v4941[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0')];
      const v4943 = stdlib.add(v4942, v4937);
      const v4946 = v4941[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '1')];
      const v4947 = v4941[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '2')];
      const v4948 = [v4943, v4946, v4947];
      const v4949 = stdlib.Array_set(v4909, stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0'), v4948);
      sim_r.txns.push({
        amt: v4937,
        kind: 'to',
        tok: v4891
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc5, ctc5, ctc17, ctc1, ctc1, ctc6, ctc18, ctc18, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4940, time: v4939, didSend: v82, from: v4938 } = txn2;
  ;
  const v4941 = v4909[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0')];
  const v4942 = v4941[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0')];
  const v4943 = stdlib.add(v4942, v4937);
  const v4946 = v4941[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '1')];
  const v4947 = v4941[stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '2')];
  const v4948 = [v4943, v4946, v4947];
  const v4949 = stdlib.Array_set(v4909, stdlib.checkedBigNumberify('./staker.rsh:112:12:dot', stdlib.UInt_max, '0'), v4948);
  ;
  const v4950 = stdlib.addressEq(v4889, v4938);
  stdlib.assert(v4950, {
    at: './staker.rsh:112:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.readyForRewarder(), {
    at: './staker.rsh:115:37:application',
    fs: ['at ./staker.rsh:115:37:application call to [unknown function] (defined at: ./staker.rsh:115:37:function exp)', 'at ./staker.rsh:115:37:application call to "liftedInteract" (defined at: ./staker.rsh:115:37:application)'],
    msg: 'readyForRewarder',
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
  const {data: [v4979], secs: v4981, time: v4980, didSend: v188, from: v4978 } = txn3;
  switch (v4979[0]) {
    case 'Setup_abortSetup0_89': {
      const v4982 = v4979[1];
      undefined /* setApiDetails */;
      const v4987 = stdlib.addressEq(v4978, v4889);
      const v4988 = stdlib.addressEq(v4978, v4920);
      const v4989 = v4987 ? true : v4988;
      stdlib.assert(v4989, {
        at: './staker.rsh:125:10:application',
        fs: ['at ./staker.rsh:124:30:application call to [unknown function] (defined at: ./staker.rsh:124:30:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:124:30:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v4998 = null;
      await txn3.getOutput('Setup_abortSetup', 'v4998', ctc0, v4998);
      const v5004 = v4949[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
      const v5005 = v5004[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_89': {
      const v8659 = v4979[1];
      undefined /* setApiDetails */;
      const v8668 = stdlib.addressEq(v4978, v4920);
      stdlib.assert(v8668, {
        at: './staker.rsh:129:10:application',
        fs: ['at ./staker.rsh:128:24:application call to [unknown function] (defined at: ./staker.rsh:128:24:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:128:24:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v8710 = null;
      await txn3.getOutput('Setup_fund', 'v8710', ctc0, v8710);
      stdlib.protect(ctc0, await interact.readyForStakers(), {
        at: './staker.rsh:133:36:application',
        fs: ['at ./staker.rsh:133:36:application call to [unknown function] (defined at: ./staker.rsh:133:36:function exp)', 'at ./staker.rsh:133:36:application call to "liftedInteract" (defined at: ./staker.rsh:133:36:application)'],
        msg: 'readyForStakers',
        who: 'Deployer'
        });
      
      const v8733 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v8734 = [v4935, v4937];
      let v8735 = v8733;
      let v8736 = v4912;
      let v8737 = v8734;
      let v8738 = stdlib.checkedBigNumberify('./staker.rsh:163:21:decimal', stdlib.UInt_max, '0');
      let v8739 = v4980;
      let v8745 = v4949;
      let v8746 = v4935;
      
      while (await (async () => {
        
        return true;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc11],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn4;
        switch (v9288[0]) {
          case 'Staker_harvest0_1959': {
            const v9291 = v9288[1];
            undefined /* setApiDetails */;
            const v9298 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v9469 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v9470 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
            const v9474 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v9475 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
            const v9476 = [v9470, v9474, v9475];
            const v9477 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v9476);
            ;
            let v9480;
            if (v9298) {
              v9480 = v8735;
              }
            else {
              const v9482 = stdlib.le(v4913, v9289);
              const v9483 = v9482 ? v4913 : v9289;
              const v9484 = stdlib.ge(v4912, v8736);
              const v9485 = v9484 ? v4912 : v8736;
              let v9486;
              const v9487 = stdlib.ge(v9485, v9483);
              if (v9487) {
                v9486 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v9488 = stdlib.sub(v9483, v9485);
                v9486 = v9488;
                }
              const v9489 = stdlib.cast("UInt", "UInt256", v9486, false);
              const v9490 = stdlib.mul256(v4930, v9489);
              const v9491 = stdlib.cast("UInt", "UInt256", v8738, false);
              const v9492 = stdlib.div256(v9490, v9491);
              const v9493 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
              const v9494 = stdlib.add256(v9493, v9492);
              let v9499;
              if (v9487) {
                v9499 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v9501 = stdlib.sub(v9483, v9485);
                v9499 = v9501;
                }
              const v9502 = stdlib.cast("UInt", "UInt256", v9499, false);
              const v9503 = stdlib.mul256(v4933, v9502);
              const v9505 = stdlib.div256(v9503, v9491);
              const v9506 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
              const v9507 = stdlib.add256(v9506, v9505);
              const v9508 = [v9494, v9507];
              v9480 = v9508;
              }
            const v9509 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
            const v9510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v9511 = {
              rewards: v9510,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v9512 = stdlib.fromSome(v9509, v9511);
            const v9513 = v9512.stake;
            const v9518 = v9512.rewards;
            const v9519 = v9518[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
            const v9521 = v9480[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
            const v9522 = stdlib.cast("UInt", "UInt256", v9513, false);
            const v9523 = stdlib.mul256(v9522, v9521);
            const v9524 = stdlib.div256(v9523, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v9525 = stdlib.cast("UInt256", "UInt", v9524, false);
            let v9526;
            const v9527 = stdlib.ge(v9519, v9525);
            if (v9527) {
              v9526 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v9528 = stdlib.sub(v9525, v9519);
              v9526 = v9528;
              }
            const v9529 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
            const v9530 = stdlib.le(v9526, v9529);
            const v9531 = v9530 ? v9526 : v9529;
            const v9542 = v9518[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
            const v9544 = v9480[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
            const v9546 = stdlib.mul256(v9522, v9544);
            const v9547 = stdlib.div256(v9546, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v9548 = stdlib.cast("UInt256", "UInt", v9547, false);
            let v9549;
            const v9550 = stdlib.ge(v9542, v9548);
            if (v9550) {
              v9549 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v9551 = stdlib.sub(v9548, v9542);
              v9549 = v9551;
              }
            const v9552 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
            const v9553 = stdlib.le(v9549, v9552);
            const v9554 = v9553 ? v9549 : v9552;
            const v9555 = [v9531, v9554];
            const v9563 = stdlib.sub(v8746, v9531);
            ;
            const v9564 = v9477[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
            const v9565 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
            const v9569 = stdlib.sub(v9565, v9554);
            const v9572 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '1')];
            const v9573 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '2')];
            const v9574 = [v9569, v9572, v9573];
            const v9575 = stdlib.Array_set(v9477, stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0'), v9574);
            ;
            const v9577 = stdlib.sub(v9529, v9531);
            const v9579 = stdlib.sub(v9552, v9554);
            const v9592 = stdlib.add(v9519, v9531);
            const v9594 = stdlib.add(v9542, v9554);
            const v9595 = [v9592, v9594];
            const v9596 = {
              rewards: v9595,
              stake: v9513
              };
            await stdlib.mapSet(map0, v9287, v9596);
            const v9601 = [v9577, v9579];
            const v9602 = {
              totalRemaining: v9601,
              userReceived: v9555
              };
            await txn4.getOutput('Staker_harvest', 'v9602', ctc12, v9602);
            null;
            const cv8735 = v9480;
            const cv8736 = v9289;
            const cv8737 = v9601;
            const cv8738 = v8738;
            const cv8739 = v9289;
            const cv8745 = v9575;
            const cv8746 = v9563;
            
            v8735 = cv8735;
            v8736 = cv8736;
            v8737 = cv8737;
            v8738 = cv8738;
            v8739 = cv8739;
            v8745 = cv8745;
            v8746 = cv8746;
            
            continue;
            break;
            }
          case 'Staker_stake0_1959': {
            const v10005 = v9288[1];
            undefined /* setApiDetails */;
            const v10047 = v10005[stdlib.checkedBigNumberify('./staker.rsh:230:10:spread', stdlib.UInt_max, '0')];
            const v10049 = stdlib.lt(v8736, v4913);
            stdlib.assert(v10049, {
              at: './staker.rsh:232:12:application',
              fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
              msg: 'can only stake before the end',
              who: 'Deployer'
              });
            const v10050 = stdlib.gt(v10047, stdlib.checkedBigNumberify('./staker.rsh:235:19:decimal', stdlib.UInt_max, '0'));
            stdlib.assert(v10050, {
              at: './staker.rsh:235:12:application',
              fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
              msg: 'must stake more than 0',
              who: 'Deployer'
              });
            const v10052 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v10183 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v10184 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
            const v10185 = stdlib.add(v10184, v10047);
            const v10188 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v10189 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
            const v10190 = [v10185, v10188, v10189];
            const v10191 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v10190);
            ;
            let v10342;
            if (v10052) {
              v10342 = v8735;
              }
            else {
              const v10344 = stdlib.le(v4913, v9289);
              const v10345 = v10344 ? v4913 : v9289;
              const v10346 = stdlib.ge(v4912, v8736);
              const v10347 = v10346 ? v4912 : v8736;
              let v10348;
              const v10349 = stdlib.ge(v10347, v10345);
              if (v10349) {
                v10348 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10350 = stdlib.sub(v10345, v10347);
                v10348 = v10350;
                }
              const v10351 = stdlib.cast("UInt", "UInt256", v10348, false);
              const v10352 = stdlib.mul256(v4930, v10351);
              const v10353 = stdlib.cast("UInt", "UInt256", v8738, false);
              const v10354 = stdlib.div256(v10352, v10353);
              const v10355 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
              const v10356 = stdlib.add256(v10355, v10354);
              let v10361;
              if (v10349) {
                v10361 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v10363 = stdlib.sub(v10345, v10347);
                v10361 = v10363;
                }
              const v10364 = stdlib.cast("UInt", "UInt256", v10361, false);
              const v10365 = stdlib.mul256(v4933, v10364);
              const v10367 = stdlib.div256(v10365, v10353);
              const v10368 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
              const v10369 = stdlib.add256(v10368, v10367);
              const v10370 = [v10356, v10369];
              v10342 = v10370;
              }
            const v10372 = stdlib.add(v8738, v10047);
            const v10373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
            const v10374 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10375 = {
              rewards: v10374,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v10376 = stdlib.fromSome(v10373, v10375);
            const v10377 = v10376.stake;
            const v10378 = stdlib.add(v10377, v10047);
            const v10383 = v10376.rewards;
            const v10384 = v10342[stdlib.checkedBigNumberify('./staker.rsh:217:60:array ref', stdlib.UInt_max, '0')];
            const v10385 = stdlib.cast("UInt", "UInt256", v10047, false);
            const v10386 = stdlib.mul256(v10385, v10384);
            const v10387 = stdlib.div256(v10386, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v10388 = stdlib.cast("UInt256", "UInt", v10387, false);
            const v10389 = v10383[stdlib.checkedBigNumberify('./staker.rsh:218:29:array ref', stdlib.UInt_max, '0')];
            const v10390 = stdlib.add(v10389, v10388);
            const v10391 = v10342[stdlib.checkedBigNumberify('./staker.rsh:217:60:array ref', stdlib.UInt_max, '1')];
            const v10393 = stdlib.mul256(v10385, v10391);
            const v10394 = stdlib.div256(v10393, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v10395 = stdlib.cast("UInt256", "UInt", v10394, false);
            const v10396 = v10383[stdlib.checkedBigNumberify('./staker.rsh:218:29:array ref', stdlib.UInt_max, '1')];
            const v10397 = stdlib.add(v10396, v10395);
            const v10398 = [v10390, v10397];
            const v10399 = {
              rewards: v10398,
              stake: v10378
              };
            await stdlib.mapSet(map0, v9287, v10399);
            const v10400 = {
              newEveryoneStaked: v10372,
              newUserStaked: v10378
              };
            await txn4.getOutput('Staker_stake', 'v10400', ctc13, v10400);
            null;
            const cv8735 = v10342;
            const cv8736 = v9289;
            const cv8737 = v8737;
            const cv8738 = v10372;
            const cv8739 = v9289;
            const cv8745 = v10191;
            const cv8746 = v8746;
            
            v8735 = cv8735;
            v8736 = cv8736;
            v8737 = cv8737;
            v8738 = cv8738;
            v8739 = cv8739;
            v8745 = cv8745;
            v8746 = cv8746;
            
            continue;
            break;
            }
          case 'Staker_withdraw0_1959': {
            const v10719 = v9288[1];
            undefined /* setApiDetails */;
            const v10801 = v10719[stdlib.checkedBigNumberify('./staker.rsh:267:10:spread', stdlib.UInt_max, '0')];
            const v10803 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
            const v10804 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v10805 = {
              rewards: v10804,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v10806 = stdlib.fromSome(v10803, v10805);
            const v10807 = v10806.stake;
            const v10808 = stdlib.le(v10801, v10807);
            stdlib.assert(v10808, {
              at: './staker.rsh:269:12:application',
              fs: ['at ./staker.rsh:267:34:application call to [unknown function] (defined at: ./staker.rsh:267:34:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:267:34:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            const v10810 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v10897 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v10898 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
            const v10902 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v10903 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
            const v10904 = [v10898, v10902, v10903];
            const v10905 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v10904);
            ;
            let v11135;
            if (v10810) {
              v11135 = v8735;
              }
            else {
              const v11137 = stdlib.le(v4913, v9289);
              const v11138 = v11137 ? v4913 : v9289;
              const v11139 = stdlib.ge(v4912, v8736);
              const v11140 = v11139 ? v4912 : v8736;
              let v11141;
              const v11142 = stdlib.ge(v11140, v11138);
              if (v11142) {
                v11141 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v11143 = stdlib.sub(v11138, v11140);
                v11141 = v11143;
                }
              const v11144 = stdlib.cast("UInt", "UInt256", v11141, false);
              const v11145 = stdlib.mul256(v4930, v11144);
              const v11146 = stdlib.cast("UInt", "UInt256", v8738, false);
              const v11147 = stdlib.div256(v11145, v11146);
              const v11148 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
              const v11149 = stdlib.add256(v11148, v11147);
              let v11154;
              if (v11142) {
                v11154 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v11156 = stdlib.sub(v11138, v11140);
                v11154 = v11156;
                }
              const v11157 = stdlib.cast("UInt", "UInt256", v11154, false);
              const v11158 = stdlib.mul256(v4933, v11157);
              const v11160 = stdlib.div256(v11158, v11146);
              const v11161 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
              const v11162 = stdlib.add256(v11161, v11160);
              const v11163 = [v11149, v11162];
              v11135 = v11163;
              }
            const v11170 = stdlib.sub(v8738, v10801);
            const v11171 = stdlib.sub(v10807, v10801);
            const v11176 = v10806.rewards;
            const v11180 = v10905[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
            const v11181 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '0')];
            const v11185 = stdlib.sub(v11181, v10801);
            const v11188 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
            const v11189 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '2')];
            const v11190 = [v11185, v11188, v11189];
            const v11191 = stdlib.Array_set(v10905, stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1'), v11190);
            ;
            const v11192 = v11176[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '0')];
            const v11193 = v11135[stdlib.checkedBigNumberify('./staker.rsh:253:65:array ref', stdlib.UInt_max, '0')];
            const v11194 = stdlib.cast("UInt", "UInt256", v10801, false);
            const v11195 = stdlib.mul256(v11194, v11193);
            const v11196 = stdlib.div256(v11195, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v11197 = stdlib.cast("UInt256", "UInt", v11196, false);
            let v11198;
            const v11199 = stdlib.ge(v11197, v11192);
            if (v11199) {
              v11198 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11200 = stdlib.sub(v11192, v11197);
              v11198 = v11200;
              }
            const v11201 = v11176[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '1')];
            const v11202 = v11135[stdlib.checkedBigNumberify('./staker.rsh:253:65:array ref', stdlib.UInt_max, '1')];
            const v11204 = stdlib.mul256(v11194, v11202);
            const v11205 = stdlib.div256(v11204, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v11206 = stdlib.cast("UInt256", "UInt", v11205, false);
            let v11207;
            const v11208 = stdlib.ge(v11206, v11201);
            if (v11208) {
              v11207 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11209 = stdlib.sub(v11201, v11206);
              v11207 = v11209;
              }
            const v11210 = [v11198, v11207];
            const v11211 = {
              rewards: v11210,
              stake: v11171
              };
            await stdlib.mapSet(map0, v9287, v11211);
            const v11212 = {
              newEveryoneStaked: v11170,
              newUserStaked: v11171
              };
            await txn4.getOutput('Staker_withdraw', 'v11212', ctc13, v11212);
            null;
            const cv8735 = v11135;
            const cv8736 = v9289;
            const cv8737 = v8737;
            const cv8738 = v11170;
            const cv8739 = v9289;
            const cv8745 = v11191;
            const cv8746 = v8746;
            
            v8735 = cv8735;
            v8736 = cv8736;
            v8737 = cv8737;
            v8738 = cv8738;
            v8739 = cv8739;
            v8745 = cv8745;
            v8746 = cv8746;
            
            continue;
            break;
            }
          case 'Staker_withdrawAndHarvest0_1959': {
            const v11433 = v9288[1];
            undefined /* setApiDetails */;
            const v11559 = v11433[stdlib.checkedBigNumberify('./staker.rsh:311:10:spread', stdlib.UInt_max, '0')];
            const v11561 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
            const v11562 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v11563 = {
              rewards: v11562,
              stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v11564 = stdlib.fromSome(v11561, v11563);
            const v11565 = v11564.stake;
            const v11566 = stdlib.le(v11559, v11565);
            stdlib.assert(v11566, {
              at: './staker.rsh:313:12:application',
              fs: ['at ./staker.rsh:311:44:application call to [unknown function] (defined at: ./staker.rsh:311:44:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:311:44:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
              msg: 'can only withdraw if balance is sufficient',
              who: 'Deployer'
              });
            const v11568 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
            ;
            const v11611 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v11612 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
            const v11616 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
            const v11617 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
            const v11618 = [v11612, v11616, v11617];
            const v11619 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v11618);
            ;
            let v11947;
            if (v11568) {
              v11947 = v8735;
              }
            else {
              const v11949 = stdlib.le(v4913, v9289);
              const v11950 = v11949 ? v4913 : v9289;
              const v11951 = stdlib.ge(v4912, v8736);
              const v11952 = v11951 ? v4912 : v8736;
              let v11953;
              const v11954 = stdlib.ge(v11952, v11950);
              if (v11954) {
                v11953 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v11955 = stdlib.sub(v11950, v11952);
                v11953 = v11955;
                }
              const v11956 = stdlib.cast("UInt", "UInt256", v11953, false);
              const v11957 = stdlib.mul256(v4930, v11956);
              const v11958 = stdlib.cast("UInt", "UInt256", v8738, false);
              const v11959 = stdlib.div256(v11957, v11958);
              const v11960 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
              const v11961 = stdlib.add256(v11960, v11959);
              let v11966;
              if (v11954) {
                v11966 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v11968 = stdlib.sub(v11950, v11952);
                v11966 = v11968;
                }
              const v11969 = stdlib.cast("UInt", "UInt256", v11966, false);
              const v11970 = stdlib.mul256(v4933, v11969);
              const v11972 = stdlib.div256(v11970, v11958);
              const v11973 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
              const v11974 = stdlib.add256(v11973, v11972);
              const v11975 = [v11961, v11974];
              v11947 = v11975;
              }
            const v11986 = v11564.rewards;
            const v11987 = v11986[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
            const v11989 = v11947[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
            const v11990 = stdlib.cast("UInt", "UInt256", v11565, false);
            const v11991 = stdlib.mul256(v11990, v11989);
            const v11992 = stdlib.div256(v11991, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v11993 = stdlib.cast("UInt256", "UInt", v11992, false);
            let v11994;
            const v11995 = stdlib.ge(v11987, v11993);
            if (v11995) {
              v11994 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11996 = stdlib.sub(v11993, v11987);
              v11994 = v11996;
              }
            const v11997 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
            const v11998 = stdlib.le(v11994, v11997);
            const v11999 = v11998 ? v11994 : v11997;
            const v12010 = v11986[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
            const v12012 = v11947[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
            const v12014 = stdlib.mul256(v11990, v12012);
            const v12015 = stdlib.div256(v12014, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v12016 = stdlib.cast("UInt256", "UInt", v12015, false);
            let v12017;
            const v12018 = stdlib.ge(v12010, v12016);
            if (v12018) {
              v12017 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12019 = stdlib.sub(v12016, v12010);
              v12017 = v12019;
              }
            const v12020 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
            const v12021 = stdlib.le(v12017, v12020);
            const v12022 = v12021 ? v12017 : v12020;
            const v12023 = [v11999, v12022];
            const v12031 = stdlib.sub(v8746, v11999);
            ;
            const v12032 = v11619[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
            const v12033 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
            const v12037 = stdlib.sub(v12033, v12022);
            const v12040 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '1')];
            const v12041 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '2')];
            const v12042 = [v12037, v12040, v12041];
            const v12043 = stdlib.Array_set(v11619, stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0'), v12042);
            ;
            const v12045 = stdlib.sub(v11997, v11999);
            const v12047 = stdlib.sub(v12020, v12022);
            const v12060 = stdlib.add(v11987, v11999);
            const v12062 = stdlib.add(v12010, v12022);
            const v12063 = [v12060, v12062];
            const v12064 = {
              rewards: v12063,
              stake: v11565
              };
            await stdlib.mapSet(map0, v9287, v12064);
            const v12069 = [v12045, v12047];
            const v12070 = {
              totalRemaining: v12069,
              userReceived: v12023
              };
            const v12075 = v12064.stake;
            const v12076 = stdlib.sub(v8738, v11559);
            const v12077 = stdlib.sub(v12075, v11559);
            const v12082 = v12064.rewards;
            const v12086 = v12043[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
            const v12087 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '0')];
            const v12091 = stdlib.sub(v12087, v11559);
            const v12094 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
            const v12095 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '2')];
            const v12096 = [v12091, v12094, v12095];
            const v12097 = stdlib.Array_set(v12043, stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1'), v12096);
            ;
            const v12098 = v12082[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '0')];
            const v12100 = stdlib.cast("UInt", "UInt256", v11559, false);
            const v12101 = stdlib.mul256(v12100, v11989);
            const v12102 = stdlib.div256(v12101, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v12103 = stdlib.cast("UInt256", "UInt", v12102, false);
            let v12104;
            const v12105 = stdlib.ge(v12103, v12098);
            if (v12105) {
              v12104 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12106 = stdlib.sub(v12098, v12103);
              v12104 = v12106;
              }
            const v12107 = v12082[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '1')];
            const v12110 = stdlib.mul256(v12100, v12012);
            const v12111 = stdlib.div256(v12110, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
            const v12112 = stdlib.cast("UInt256", "UInt", v12111, false);
            let v12113;
            const v12114 = stdlib.ge(v12112, v12107);
            if (v12114) {
              v12113 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v12115 = stdlib.sub(v12107, v12112);
              v12113 = v12115;
              }
            const v12116 = [v12104, v12113];
            const v12117 = {
              rewards: v12116,
              stake: v12077
              };
            await stdlib.mapSet(map0, v9287, v12117);
            const v12118 = {
              newEveryoneStaked: v12076,
              newUserStaked: v12077
              };
            const v12123 = [v12118, v12070];
            await txn4.getOutput('Staker_withdrawAndHarvest', 'v12123', ctc14, v12123);
            null;
            null;
            const cv8735 = v11947;
            const cv8736 = v9289;
            const cv8737 = v12069;
            const cv8738 = v12076;
            const cv8739 = v9289;
            const cv8745 = v12097;
            const cv8746 = v12031;
            
            v8735 = cv8735;
            v8736 = cv8736;
            v8737 = cv8737;
            v8738 = cv8738;
            v8739 = cv8739;
            v8745 = cv8745;
            v8746 = cv8746;
            
            continue;
            break;
            }
          }
        
        }
      const v12309 = v8745[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
      const v12310 = v12309[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Setup_abortSetup0_89: ctc12,
    Setup_fund0_89: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc1, ctc1, ctc11]);
  const v4952 = ctc.selfAddress();
  const v4954 = stdlib.protect(ctc12, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:124:30:application call to [unknown function] (defined at: ./staker.rsh:124:30:function exp)', 'at ./staker.rsh:123:7:application call to "runSetup_abortSetup0_89" (defined at: ./staker.rsh:124:8:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
    msg: 'in',
    who: 'Setup_abortSetup'
    });
  const v4955 = stdlib.addressEq(v4952, v4889);
  const v4956 = stdlib.addressEq(v4952, v4920);
  const v4957 = v4955 ? true : v4956;
  stdlib.assert(v4957, {
    at: './staker.rsh:125:10:application',
    fs: ['at ./staker.rsh:124:30:application call to [unknown function] (defined at: ./staker.rsh:124:30:function exp)', 'at ./staker.rsh:123:7:application call to "runSetup_abortSetup0_89" (defined at: ./staker.rsh:124:8:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
    msg: null,
    who: 'Setup_abortSetup'
    });
  const v4961 = ['Setup_abortSetup0_89', v4954];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949, v4961],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:126:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4979], secs: v4981, time: v4980, didSend: v188, from: v4978 } = txn1;
      
      switch (v4979[0]) {
        case 'Setup_abortSetup0_89': {
          const v4982 = v4979[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_abortSetup"
            });
          ;
          const v4998 = null;
          const v4999 = await txn1.getOutput('Setup_abortSetup', 'v4998', ctc0, v4998);
          
          const v5004 = v4949[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
          const v5005 = v5004[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v4889,
            tok: v4891
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v4892
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v4891
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Setup_fund0_89': {
          const v8659 = v4979[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc1, ctc1, ctc11, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4979], secs: v4981, time: v4980, didSend: v188, from: v4978 } = txn1;
  switch (v4979[0]) {
    case 'Setup_abortSetup0_89': {
      const v4982 = v4979[1];
      undefined /* setApiDetails */;
      const v4987 = stdlib.addressEq(v4978, v4889);
      const v4988 = stdlib.addressEq(v4978, v4920);
      const v4989 = v4987 ? true : v4988;
      stdlib.assert(v4989, {
        at: './staker.rsh:125:10:application',
        fs: ['at ./staker.rsh:124:30:application call to [unknown function] (defined at: ./staker.rsh:124:30:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:124:30:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
        msg: null,
        who: 'Setup_abortSetup'
        });
      ;
      const v4998 = null;
      const v4999 = await txn1.getOutput('Setup_abortSetup', 'v4998', ctc0, v4998);
      if (v188) {
        stdlib.protect(ctc0, await interact.out(v4982, v4999), {
          at: './staker.rsh:124:9:application',
          fs: ['at ./staker.rsh:124:9:application call to [unknown function] (defined at: ./staker.rsh:124:9:function exp)', 'at ./staker.rsh:126:27:application call to "k" (defined at: ./staker.rsh:126:21:function exp)'],
          msg: 'out',
          who: 'Setup_abortSetup'
          });
        }
      else {
        }
      
      const v5004 = v4949[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
      const v5005 = v5004[stdlib.checkedBigNumberify('./staker.rsh:118:23:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      break;
      }
    case 'Setup_fund0_89': {
      const v8659 = v4979[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Setup_abortSetup0_89: ctc12,
    Setup_fund0_89: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc1, ctc1, ctc11]);
  const v4963 = ctc.selfAddress();
  const v4965 = stdlib.protect(ctc12, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:128:24:application call to [unknown function] (defined at: ./staker.rsh:128:24:function exp)', 'at ./staker.rsh:123:7:application call to "runSetup_fund0_89" (defined at: ./staker.rsh:128:8:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
    msg: 'in',
    who: 'Setup_fund'
    });
  const v4966 = stdlib.addressEq(v4963, v4920);
  stdlib.assert(v4966, {
    at: './staker.rsh:129:10:application',
    fs: ['at ./staker.rsh:128:24:application call to [unknown function] (defined at: ./staker.rsh:128:24:function exp)', 'at ./staker.rsh:123:7:application call to "runSetup_fund0_89" (defined at: ./staker.rsh:128:8:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
    msg: null,
    who: 'Setup_fund'
    });
  const v4970 = ['Setup_fund0_89', v4965];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v4935, v4937, v4949, v4970],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4935, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4979], secs: v4981, time: v4980, didSend: v188, from: v4978 } = txn1;
      
      switch (v4979[0]) {
        case 'Setup_abortSetup0_89': {
          const v4982 = v4979[1];
          
          break;
          }
        case 'Setup_fund0_89': {
          const v8659 = v4979[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Setup_fund"
            });
          sim_r.txns.push({
            amt: v4935,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8710 = null;
          const v8711 = await txn1.getOutput('Setup_fund', 'v8710', ctc0, v8710);
          
          const v8733 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v8734 = [v4935, v4937];
          const v20622 = v8733;
          const v20623 = v4912;
          const v20624 = v8734;
          const v20625 = stdlib.checkedBigNumberify('./staker.rsh:163:21:decimal', stdlib.UInt_max, '0');
          const v20627 = v4949;
          const v20628 = v4935;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc1, ctc1, ctc11, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v4979], secs: v4981, time: v4980, didSend: v188, from: v4978 } = txn1;
  switch (v4979[0]) {
    case 'Setup_abortSetup0_89': {
      const v4982 = v4979[1];
      return;
      break;
      }
    case 'Setup_fund0_89': {
      const v8659 = v4979[1];
      undefined /* setApiDetails */;
      const v8668 = stdlib.addressEq(v4978, v4920);
      stdlib.assert(v8668, {
        at: './staker.rsh:129:10:application',
        fs: ['at ./staker.rsh:128:24:application call to [unknown function] (defined at: ./staker.rsh:128:24:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:128:24:function exp)', 'at ./staker.rsh:123:7:application call to [unknown function] (defined at: ./staker.rsh:123:7:function exp)'],
        msg: null,
        who: 'Setup_fund'
        });
      ;
      const v8710 = null;
      const v8711 = await txn1.getOutput('Setup_fund', 'v8710', ctc0, v8710);
      if (v188) {
        stdlib.protect(ctc0, await interact.out(v8659, v8711), {
          at: './staker.rsh:128:9:application',
          fs: ['at ./staker.rsh:128:9:application call to [unknown function] (defined at: ./staker.rsh:128:9:function exp)', 'at ./staker.rsh:130:43:application call to "k" (defined at: ./staker.rsh:130:37:function exp)'],
          msg: 'out',
          who: 'Setup_fund'
          });
        }
      else {
        }
      
      const v8733 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v8734 = [v4935, v4937];
      const v20622 = v8733;
      const v20623 = v4912;
      const v20624 = v8734;
      const v20625 = stdlib.checkedBigNumberify('./staker.rsh:163:21:decimal', stdlib.UInt_max, '0');
      const v20627 = v4949;
      const v20628 = v4935;
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Staker_harvest0_1959: ctc13,
    Staker_stake0_1959: ctc14,
    Staker_withdraw0_1959: ctc14,
    Staker_withdrawAndHarvest0_1959: ctc14
    });
  const ctc16 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1]);
  const v9026 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:301:30:application call to [unknown function] (defined at: ./staker.rsh:301:30:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_harvest0_1959" (defined at: ./staker.rsh:301:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v9060 = ['Staker_harvest0_1959', v9026];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746, v9060],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:304:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:304:21:decimal', stdlib.UInt_max, '0'), v4892]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
      
      switch (v9288[0]) {
        case 'Staker_harvest0_1959': {
          const v9291 = v9288[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          const v9298 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v9469 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v9470 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
          const v9474 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v9475 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
          const v9476 = [v9470, v9474, v9475];
          const v9477 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v9476);
          ;
          let v9480;
          if (v9298) {
            v9480 = v8735;
            }
          else {
            const v9482 = stdlib.le(v4913, v9289);
            const v9483 = v9482 ? v4913 : v9289;
            const v9484 = stdlib.ge(v4912, v8736);
            const v9485 = v9484 ? v4912 : v8736;
            let v9486;
            const v9487 = stdlib.ge(v9485, v9483);
            if (v9487) {
              v9486 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v9488 = stdlib.sub(v9483, v9485);
              v9486 = v9488;
              }
            const v9489 = stdlib.cast("UInt", "UInt256", v9486, false);
            const v9490 = stdlib.mul256(v4930, v9489);
            const v9491 = stdlib.cast("UInt", "UInt256", v8738, false);
            const v9492 = stdlib.div256(v9490, v9491);
            const v9493 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
            const v9494 = stdlib.add256(v9493, v9492);
            let v9499;
            if (v9487) {
              v9499 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v9501 = stdlib.sub(v9483, v9485);
              v9499 = v9501;
              }
            const v9502 = stdlib.cast("UInt", "UInt256", v9499, false);
            const v9503 = stdlib.mul256(v4933, v9502);
            const v9505 = stdlib.div256(v9503, v9491);
            const v9506 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
            const v9507 = stdlib.add256(v9506, v9505);
            const v9508 = [v9494, v9507];
            v9480 = v9508;
            }
          const v9509 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9287), null);
          const v9510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v9511 = {
            rewards: v9510,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v9512 = stdlib.fromSome(v9509, v9511);
          const v9513 = v9512.stake;
          const v9518 = v9512.rewards;
          const v9519 = v9518[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
          const v9521 = v9480[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
          const v9522 = stdlib.cast("UInt", "UInt256", v9513, false);
          const v9523 = stdlib.mul256(v9522, v9521);
          const v9524 = stdlib.div256(v9523, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v9525 = stdlib.cast("UInt256", "UInt", v9524, false);
          let v9526;
          const v9527 = stdlib.ge(v9519, v9525);
          if (v9527) {
            v9526 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v9528 = stdlib.sub(v9525, v9519);
            v9526 = v9528;
            }
          const v9529 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
          const v9530 = stdlib.le(v9526, v9529);
          const v9531 = v9530 ? v9526 : v9529;
          const v9542 = v9518[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
          const v9544 = v9480[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
          const v9546 = stdlib.mul256(v9522, v9544);
          const v9547 = stdlib.div256(v9546, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v9548 = stdlib.cast("UInt256", "UInt", v9547, false);
          let v9549;
          const v9550 = stdlib.ge(v9542, v9548);
          if (v9550) {
            v9549 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v9551 = stdlib.sub(v9548, v9542);
            v9549 = v9551;
            }
          const v9552 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
          const v9553 = stdlib.le(v9549, v9552);
          const v9554 = v9553 ? v9549 : v9552;
          const v9555 = [v9531, v9554];
          const v9563 = stdlib.sub(v8746, v9531);
          sim_r.txns.push({
            kind: 'from',
            to: v9287,
            tok: undefined /* Nothing */
            });
          const v9564 = v9477[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
          const v9565 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
          const v9569 = stdlib.sub(v9565, v9554);
          const v9572 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '1')];
          const v9573 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '2')];
          const v9574 = [v9569, v9572, v9573];
          const v9575 = stdlib.Array_set(v9477, stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0'), v9574);
          sim_r.txns.push({
            kind: 'from',
            to: v9287,
            tok: v4891
            });
          const v9577 = stdlib.sub(v9529, v9531);
          const v9579 = stdlib.sub(v9552, v9554);
          const v9592 = stdlib.add(v9519, v9531);
          const v9594 = stdlib.add(v9542, v9554);
          const v9595 = [v9592, v9594];
          const v9596 = {
            rewards: v9595,
            stake: v9513
            };
          await stdlib.simMapSet(sim_r, 0, v9287, v9596);
          const v9601 = [v9577, v9579];
          const v9602 = {
            totalRemaining: v9601,
            userReceived: v9555
            };
          const v9606 = await txn1.getOutput('Staker_harvest', 'v9602', ctc16, v9602);
          
          null;
          const v20631 = v9480;
          const v20632 = v9289;
          const v20633 = v9601;
          const v20634 = v8738;
          const v20636 = v9575;
          const v20637 = v9563;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_stake0_1959': {
          const v10005 = v9288[1];
          
          break;
          }
        case 'Staker_withdraw0_1959': {
          const v10719 = v9288[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_1959': {
          const v11433 = v9288[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
  switch (v9288[0]) {
    case 'Staker_harvest0_1959': {
      const v9291 = v9288[1];
      undefined /* setApiDetails */;
      const v9298 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v9469 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v9470 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
      const v9474 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v9475 = v9469[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
      const v9476 = [v9470, v9474, v9475];
      const v9477 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v9476);
      ;
      let v9480;
      if (v9298) {
        v9480 = v8735;
        }
      else {
        const v9482 = stdlib.le(v4913, v9289);
        const v9483 = v9482 ? v4913 : v9289;
        const v9484 = stdlib.ge(v4912, v8736);
        const v9485 = v9484 ? v4912 : v8736;
        let v9486;
        const v9487 = stdlib.ge(v9485, v9483);
        if (v9487) {
          v9486 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v9488 = stdlib.sub(v9483, v9485);
          v9486 = v9488;
          }
        const v9489 = stdlib.cast("UInt", "UInt256", v9486, false);
        const v9490 = stdlib.mul256(v4930, v9489);
        const v9491 = stdlib.cast("UInt", "UInt256", v8738, false);
        const v9492 = stdlib.div256(v9490, v9491);
        const v9493 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
        const v9494 = stdlib.add256(v9493, v9492);
        let v9499;
        if (v9487) {
          v9499 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v9501 = stdlib.sub(v9483, v9485);
          v9499 = v9501;
          }
        const v9502 = stdlib.cast("UInt", "UInt256", v9499, false);
        const v9503 = stdlib.mul256(v4933, v9502);
        const v9505 = stdlib.div256(v9503, v9491);
        const v9506 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
        const v9507 = stdlib.add256(v9506, v9505);
        const v9508 = [v9494, v9507];
        v9480 = v9508;
        }
      const v9509 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
      const v9510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v9511 = {
        rewards: v9510,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v9512 = stdlib.fromSome(v9509, v9511);
      const v9513 = v9512.stake;
      const v9518 = v9512.rewards;
      const v9519 = v9518[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
      const v9521 = v9480[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
      const v9522 = stdlib.cast("UInt", "UInt256", v9513, false);
      const v9523 = stdlib.mul256(v9522, v9521);
      const v9524 = stdlib.div256(v9523, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v9525 = stdlib.cast("UInt256", "UInt", v9524, false);
      let v9526;
      const v9527 = stdlib.ge(v9519, v9525);
      if (v9527) {
        v9526 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v9528 = stdlib.sub(v9525, v9519);
        v9526 = v9528;
        }
      const v9529 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
      const v9530 = stdlib.le(v9526, v9529);
      const v9531 = v9530 ? v9526 : v9529;
      const v9542 = v9518[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
      const v9544 = v9480[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
      const v9546 = stdlib.mul256(v9522, v9544);
      const v9547 = stdlib.div256(v9546, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v9548 = stdlib.cast("UInt256", "UInt", v9547, false);
      let v9549;
      const v9550 = stdlib.ge(v9542, v9548);
      if (v9550) {
        v9549 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v9551 = stdlib.sub(v9548, v9542);
        v9549 = v9551;
        }
      const v9552 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
      const v9553 = stdlib.le(v9549, v9552);
      const v9554 = v9553 ? v9549 : v9552;
      const v9555 = [v9531, v9554];
      const v9563 = stdlib.sub(v8746, v9531);
      ;
      const v9564 = v9477[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
      const v9565 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
      const v9569 = stdlib.sub(v9565, v9554);
      const v9572 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '1')];
      const v9573 = v9564[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '2')];
      const v9574 = [v9569, v9572, v9573];
      const v9575 = stdlib.Array_set(v9477, stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0'), v9574);
      ;
      const v9577 = stdlib.sub(v9529, v9531);
      const v9579 = stdlib.sub(v9552, v9554);
      const v9592 = stdlib.add(v9519, v9531);
      const v9594 = stdlib.add(v9542, v9554);
      const v9595 = [v9592, v9594];
      const v9596 = {
        rewards: v9595,
        stake: v9513
        };
      await stdlib.mapSet(map0, v9287, v9596);
      const v9601 = [v9577, v9579];
      const v9602 = {
        totalRemaining: v9601,
        userReceived: v9555
        };
      const v9606 = await txn1.getOutput('Staker_harvest', 'v9602', ctc16, v9602);
      if (v3627) {
        stdlib.protect(ctc0, await interact.out(v9291, v9606), {
          at: './staker.rsh:301:11:application',
          fs: ['at ./staker.rsh:301:11:application call to [unknown function] (defined at: ./staker.rsh:301:11:function exp)', 'at ./staker.rsh:306:10:application call to "k" (defined at: ./staker.rsh:304:42:function exp)', 'at ./staker.rsh:304:42:application call to [unknown function] (defined at: ./staker.rsh:304:42:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v20631 = v9480;
      const v20632 = v9289;
      const v20633 = v9601;
      const v20634 = v8738;
      const v20636 = v9575;
      const v20637 = v9563;
      return;
      
      break;
      }
    case 'Staker_stake0_1959': {
      const v10005 = v9288[1];
      return;
      break;
      }
    case 'Staker_withdraw0_1959': {
      const v10719 = v9288[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_1959': {
      const v11433 = v9288[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    Staker_harvest0_1959: ctc14,
    Staker_stake0_1959: ctc13,
    Staker_withdraw0_1959: ctc13,
    Staker_withdrawAndHarvest0_1959: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1]);
  const v8934 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_stake0_1959" (defined at: ./staker.rsh:230:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v8935 = v8934[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v8938 = stdlib.lt(v8736, v4913);
  stdlib.assert(v8938, {
    at: './staker.rsh:232:12:application',
    fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_stake0_1959" (defined at: ./staker.rsh:230:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'can only stake before the end',
    who: 'Staker_stake'
    });
  const v8939 = stdlib.gt(v8935, stdlib.checkedBigNumberify('./staker.rsh:235:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v8939, {
    at: './staker.rsh:235:12:application',
    fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_stake0_1959" (defined at: ./staker.rsh:230:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'must stake more than 0',
    who: 'Staker_stake'
    });
  const v8974 = ['Staker_stake0_1959', v8934];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746, v8974],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:237:17:decimal', stdlib.UInt_max, '0'), [[v8935, v4892]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
      
      switch (v9288[0]) {
        case 'Staker_harvest0_1959': {
          const v9291 = v9288[1];
          
          break;
          }
        case 'Staker_stake0_1959': {
          const v10005 = v9288[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v10047 = v10005[stdlib.checkedBigNumberify('./staker.rsh:230:10:spread', stdlib.UInt_max, '0')];
          const v10052 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v10183 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v10184 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
          const v10185 = stdlib.add(v10184, v10047);
          const v10188 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v10189 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
          const v10190 = [v10185, v10188, v10189];
          const v10191 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v10190);
          sim_r.txns.push({
            amt: v10047,
            kind: 'to',
            tok: v4892
            });
          let v10342;
          if (v10052) {
            v10342 = v8735;
            }
          else {
            const v10344 = stdlib.le(v4913, v9289);
            const v10345 = v10344 ? v4913 : v9289;
            const v10346 = stdlib.ge(v4912, v8736);
            const v10347 = v10346 ? v4912 : v8736;
            let v10348;
            const v10349 = stdlib.ge(v10347, v10345);
            if (v10349) {
              v10348 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v10350 = stdlib.sub(v10345, v10347);
              v10348 = v10350;
              }
            const v10351 = stdlib.cast("UInt", "UInt256", v10348, false);
            const v10352 = stdlib.mul256(v4930, v10351);
            const v10353 = stdlib.cast("UInt", "UInt256", v8738, false);
            const v10354 = stdlib.div256(v10352, v10353);
            const v10355 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
            const v10356 = stdlib.add256(v10355, v10354);
            let v10361;
            if (v10349) {
              v10361 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v10363 = stdlib.sub(v10345, v10347);
              v10361 = v10363;
              }
            const v10364 = stdlib.cast("UInt", "UInt256", v10361, false);
            const v10365 = stdlib.mul256(v4933, v10364);
            const v10367 = stdlib.div256(v10365, v10353);
            const v10368 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
            const v10369 = stdlib.add256(v10368, v10367);
            const v10370 = [v10356, v10369];
            v10342 = v10370;
            }
          const v10372 = stdlib.add(v8738, v10047);
          const v10373 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9287), null);
          const v10374 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v10375 = {
            rewards: v10374,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v10376 = stdlib.fromSome(v10373, v10375);
          const v10377 = v10376.stake;
          const v10378 = stdlib.add(v10377, v10047);
          const v10383 = v10376.rewards;
          const v10384 = v10342[stdlib.checkedBigNumberify('./staker.rsh:217:60:array ref', stdlib.UInt_max, '0')];
          const v10385 = stdlib.cast("UInt", "UInt256", v10047, false);
          const v10386 = stdlib.mul256(v10385, v10384);
          const v10387 = stdlib.div256(v10386, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v10388 = stdlib.cast("UInt256", "UInt", v10387, false);
          const v10389 = v10383[stdlib.checkedBigNumberify('./staker.rsh:218:29:array ref', stdlib.UInt_max, '0')];
          const v10390 = stdlib.add(v10389, v10388);
          const v10391 = v10342[stdlib.checkedBigNumberify('./staker.rsh:217:60:array ref', stdlib.UInt_max, '1')];
          const v10393 = stdlib.mul256(v10385, v10391);
          const v10394 = stdlib.div256(v10393, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v10395 = stdlib.cast("UInt256", "UInt", v10394, false);
          const v10396 = v10383[stdlib.checkedBigNumberify('./staker.rsh:218:29:array ref', stdlib.UInt_max, '1')];
          const v10397 = stdlib.add(v10396, v10395);
          const v10398 = [v10390, v10397];
          const v10399 = {
            rewards: v10398,
            stake: v10378
            };
          await stdlib.simMapSet(sim_r, 0, v9287, v10399);
          const v10400 = {
            newEveryoneStaked: v10372,
            newUserStaked: v10378
            };
          const v10402 = await txn1.getOutput('Staker_stake', 'v10400', ctc16, v10400);
          
          null;
          const v20676 = v10342;
          const v20677 = v9289;
          const v20678 = v8737;
          const v20679 = v10372;
          const v20681 = v10191;
          const v20682 = v8746;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdraw0_1959': {
          const v10719 = v9288[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_1959': {
          const v11433 = v9288[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
  switch (v9288[0]) {
    case 'Staker_harvest0_1959': {
      const v9291 = v9288[1];
      return;
      break;
      }
    case 'Staker_stake0_1959': {
      const v10005 = v9288[1];
      undefined /* setApiDetails */;
      const v10047 = v10005[stdlib.checkedBigNumberify('./staker.rsh:230:10:spread', stdlib.UInt_max, '0')];
      const v10049 = stdlib.lt(v8736, v4913);
      stdlib.assert(v10049, {
        at: './staker.rsh:232:12:application',
        fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
        msg: 'can only stake before the end',
        who: 'Staker_stake'
        });
      const v10050 = stdlib.gt(v10047, stdlib.checkedBigNumberify('./staker.rsh:235:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10050, {
        at: './staker.rsh:235:12:application',
        fs: ['at ./staker.rsh:230:31:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:230:31:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
        msg: 'must stake more than 0',
        who: 'Staker_stake'
        });
      const v10052 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v10183 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v10184 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
      const v10185 = stdlib.add(v10184, v10047);
      const v10188 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v10189 = v10183[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
      const v10190 = [v10185, v10188, v10189];
      const v10191 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v10190);
      ;
      let v10342;
      if (v10052) {
        v10342 = v8735;
        }
      else {
        const v10344 = stdlib.le(v4913, v9289);
        const v10345 = v10344 ? v4913 : v9289;
        const v10346 = stdlib.ge(v4912, v8736);
        const v10347 = v10346 ? v4912 : v8736;
        let v10348;
        const v10349 = stdlib.ge(v10347, v10345);
        if (v10349) {
          v10348 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v10350 = stdlib.sub(v10345, v10347);
          v10348 = v10350;
          }
        const v10351 = stdlib.cast("UInt", "UInt256", v10348, false);
        const v10352 = stdlib.mul256(v4930, v10351);
        const v10353 = stdlib.cast("UInt", "UInt256", v8738, false);
        const v10354 = stdlib.div256(v10352, v10353);
        const v10355 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
        const v10356 = stdlib.add256(v10355, v10354);
        let v10361;
        if (v10349) {
          v10361 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v10363 = stdlib.sub(v10345, v10347);
          v10361 = v10363;
          }
        const v10364 = stdlib.cast("UInt", "UInt256", v10361, false);
        const v10365 = stdlib.mul256(v4933, v10364);
        const v10367 = stdlib.div256(v10365, v10353);
        const v10368 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
        const v10369 = stdlib.add256(v10368, v10367);
        const v10370 = [v10356, v10369];
        v10342 = v10370;
        }
      const v10372 = stdlib.add(v8738, v10047);
      const v10373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
      const v10374 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v10375 = {
        rewards: v10374,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10376 = stdlib.fromSome(v10373, v10375);
      const v10377 = v10376.stake;
      const v10378 = stdlib.add(v10377, v10047);
      const v10383 = v10376.rewards;
      const v10384 = v10342[stdlib.checkedBigNumberify('./staker.rsh:217:60:array ref', stdlib.UInt_max, '0')];
      const v10385 = stdlib.cast("UInt", "UInt256", v10047, false);
      const v10386 = stdlib.mul256(v10385, v10384);
      const v10387 = stdlib.div256(v10386, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v10388 = stdlib.cast("UInt256", "UInt", v10387, false);
      const v10389 = v10383[stdlib.checkedBigNumberify('./staker.rsh:218:29:array ref', stdlib.UInt_max, '0')];
      const v10390 = stdlib.add(v10389, v10388);
      const v10391 = v10342[stdlib.checkedBigNumberify('./staker.rsh:217:60:array ref', stdlib.UInt_max, '1')];
      const v10393 = stdlib.mul256(v10385, v10391);
      const v10394 = stdlib.div256(v10393, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v10395 = stdlib.cast("UInt256", "UInt", v10394, false);
      const v10396 = v10383[stdlib.checkedBigNumberify('./staker.rsh:218:29:array ref', stdlib.UInt_max, '1')];
      const v10397 = stdlib.add(v10396, v10395);
      const v10398 = [v10390, v10397];
      const v10399 = {
        rewards: v10398,
        stake: v10378
        };
      await stdlib.mapSet(map0, v9287, v10399);
      const v10400 = {
        newEveryoneStaked: v10372,
        newUserStaked: v10378
        };
      const v10402 = await txn1.getOutput('Staker_stake', 'v10400', ctc16, v10400);
      if (v3627) {
        stdlib.protect(ctc0, await interact.out(v10005, v10402), {
          at: './staker.rsh:230:11:application',
          fs: ['at ./staker.rsh:230:11:application call to [unknown function] (defined at: ./staker.rsh:230:11:function exp)', 'at ./staker.rsh:239:10:application call to "k" (defined at: ./staker.rsh:237:44:function exp)', 'at ./staker.rsh:237:44:application call to [unknown function] (defined at: ./staker.rsh:237:44:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      null;
      const v20676 = v10342;
      const v20677 = v9289;
      const v20678 = v8737;
      const v20679 = v10372;
      const v20681 = v10191;
      const v20682 = v8746;
      return;
      
      break;
      }
    case 'Staker_withdraw0_1959': {
      const v10719 = v9288[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_1959': {
      const v11433 = v9288[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    Staker_harvest0_1959: ctc14,
    Staker_stake0_1959: ctc13,
    Staker_withdraw0_1959: ctc13,
    Staker_withdrawAndHarvest0_1959: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1]);
  const v8976 = ctc.selfAddress();
  const v8978 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:267:34:application call to [unknown function] (defined at: ./staker.rsh:267:34:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_withdraw0_1959" (defined at: ./staker.rsh:267:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v8979 = v8978[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v8982 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v8976), null);
  const v8983 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v8984 = {
    rewards: v8983,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v8985 = stdlib.fromSome(v8982, v8984);
  const v8986 = v8985.stake;
  const v8987 = stdlib.le(v8979, v8986);
  stdlib.assert(v8987, {
    at: './staker.rsh:269:12:application',
    fs: ['at ./staker.rsh:267:34:application call to [unknown function] (defined at: ./staker.rsh:267:34:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_withdraw0_1959" (defined at: ./staker.rsh:267:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v9022 = ['Staker_withdraw0_1959', v8978];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746, v9022],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:271:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:271:21:decimal', stdlib.UInt_max, '0'), v4892]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
      
      switch (v9288[0]) {
        case 'Staker_harvest0_1959': {
          const v9291 = v9288[1];
          
          break;
          }
        case 'Staker_stake0_1959': {
          const v10005 = v9288[1];
          
          break;
          }
        case 'Staker_withdraw0_1959': {
          const v10719 = v9288[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          const v10801 = v10719[stdlib.checkedBigNumberify('./staker.rsh:267:10:spread', stdlib.UInt_max, '0')];
          const v10803 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9287), null);
          const v10804 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v10805 = {
            rewards: v10804,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v10806 = stdlib.fromSome(v10803, v10805);
          const v10807 = v10806.stake;
          const v10810 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v10897 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v10898 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
          const v10902 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v10903 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
          const v10904 = [v10898, v10902, v10903];
          const v10905 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v10904);
          ;
          let v11135;
          if (v10810) {
            v11135 = v8735;
            }
          else {
            const v11137 = stdlib.le(v4913, v9289);
            const v11138 = v11137 ? v4913 : v9289;
            const v11139 = stdlib.ge(v4912, v8736);
            const v11140 = v11139 ? v4912 : v8736;
            let v11141;
            const v11142 = stdlib.ge(v11140, v11138);
            if (v11142) {
              v11141 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11143 = stdlib.sub(v11138, v11140);
              v11141 = v11143;
              }
            const v11144 = stdlib.cast("UInt", "UInt256", v11141, false);
            const v11145 = stdlib.mul256(v4930, v11144);
            const v11146 = stdlib.cast("UInt", "UInt256", v8738, false);
            const v11147 = stdlib.div256(v11145, v11146);
            const v11148 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
            const v11149 = stdlib.add256(v11148, v11147);
            let v11154;
            if (v11142) {
              v11154 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11156 = stdlib.sub(v11138, v11140);
              v11154 = v11156;
              }
            const v11157 = stdlib.cast("UInt", "UInt256", v11154, false);
            const v11158 = stdlib.mul256(v4933, v11157);
            const v11160 = stdlib.div256(v11158, v11146);
            const v11161 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
            const v11162 = stdlib.add256(v11161, v11160);
            const v11163 = [v11149, v11162];
            v11135 = v11163;
            }
          const v11170 = stdlib.sub(v8738, v10801);
          const v11171 = stdlib.sub(v10807, v10801);
          const v11176 = v10806.rewards;
          const v11180 = v10905[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
          const v11181 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '0')];
          const v11185 = stdlib.sub(v11181, v10801);
          const v11188 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
          const v11189 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '2')];
          const v11190 = [v11185, v11188, v11189];
          const v11191 = stdlib.Array_set(v10905, stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1'), v11190);
          sim_r.txns.push({
            kind: 'from',
            to: v9287,
            tok: v4892
            });
          const v11192 = v11176[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '0')];
          const v11193 = v11135[stdlib.checkedBigNumberify('./staker.rsh:253:65:array ref', stdlib.UInt_max, '0')];
          const v11194 = stdlib.cast("UInt", "UInt256", v10801, false);
          const v11195 = stdlib.mul256(v11194, v11193);
          const v11196 = stdlib.div256(v11195, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v11197 = stdlib.cast("UInt256", "UInt", v11196, false);
          let v11198;
          const v11199 = stdlib.ge(v11197, v11192);
          if (v11199) {
            v11198 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11200 = stdlib.sub(v11192, v11197);
            v11198 = v11200;
            }
          const v11201 = v11176[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '1')];
          const v11202 = v11135[stdlib.checkedBigNumberify('./staker.rsh:253:65:array ref', stdlib.UInt_max, '1')];
          const v11204 = stdlib.mul256(v11194, v11202);
          const v11205 = stdlib.div256(v11204, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v11206 = stdlib.cast("UInt256", "UInt", v11205, false);
          let v11207;
          const v11208 = stdlib.ge(v11206, v11201);
          if (v11208) {
            v11207 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11209 = stdlib.sub(v11201, v11206);
            v11207 = v11209;
            }
          const v11210 = [v11198, v11207];
          const v11211 = {
            rewards: v11210,
            stake: v11171
            };
          await stdlib.simMapSet(sim_r, 0, v9287, v11211);
          const v11212 = {
            newEveryoneStaked: v11170,
            newUserStaked: v11171
            };
          const v11214 = await txn1.getOutput('Staker_withdraw', 'v11212', ctc16, v11212);
          
          null;
          const v20721 = v11135;
          const v20722 = v9289;
          const v20723 = v8737;
          const v20724 = v11170;
          const v20726 = v11191;
          const v20727 = v8746;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_1959': {
          const v11433 = v9288[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
  switch (v9288[0]) {
    case 'Staker_harvest0_1959': {
      const v9291 = v9288[1];
      return;
      break;
      }
    case 'Staker_stake0_1959': {
      const v10005 = v9288[1];
      return;
      break;
      }
    case 'Staker_withdraw0_1959': {
      const v10719 = v9288[1];
      undefined /* setApiDetails */;
      const v10801 = v10719[stdlib.checkedBigNumberify('./staker.rsh:267:10:spread', stdlib.UInt_max, '0')];
      const v10803 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
      const v10804 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v10805 = {
        rewards: v10804,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10806 = stdlib.fromSome(v10803, v10805);
      const v10807 = v10806.stake;
      const v10808 = stdlib.le(v10801, v10807);
      stdlib.assert(v10808, {
        at: './staker.rsh:269:12:application',
        fs: ['at ./staker.rsh:267:34:application call to [unknown function] (defined at: ./staker.rsh:267:34:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:267:34:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      const v10810 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v10897 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v10898 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
      const v10902 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v10903 = v10897[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
      const v10904 = [v10898, v10902, v10903];
      const v10905 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v10904);
      ;
      let v11135;
      if (v10810) {
        v11135 = v8735;
        }
      else {
        const v11137 = stdlib.le(v4913, v9289);
        const v11138 = v11137 ? v4913 : v9289;
        const v11139 = stdlib.ge(v4912, v8736);
        const v11140 = v11139 ? v4912 : v8736;
        let v11141;
        const v11142 = stdlib.ge(v11140, v11138);
        if (v11142) {
          v11141 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v11143 = stdlib.sub(v11138, v11140);
          v11141 = v11143;
          }
        const v11144 = stdlib.cast("UInt", "UInt256", v11141, false);
        const v11145 = stdlib.mul256(v4930, v11144);
        const v11146 = stdlib.cast("UInt", "UInt256", v8738, false);
        const v11147 = stdlib.div256(v11145, v11146);
        const v11148 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
        const v11149 = stdlib.add256(v11148, v11147);
        let v11154;
        if (v11142) {
          v11154 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v11156 = stdlib.sub(v11138, v11140);
          v11154 = v11156;
          }
        const v11157 = stdlib.cast("UInt", "UInt256", v11154, false);
        const v11158 = stdlib.mul256(v4933, v11157);
        const v11160 = stdlib.div256(v11158, v11146);
        const v11161 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
        const v11162 = stdlib.add256(v11161, v11160);
        const v11163 = [v11149, v11162];
        v11135 = v11163;
        }
      const v11170 = stdlib.sub(v8738, v10801);
      const v11171 = stdlib.sub(v10807, v10801);
      const v11176 = v10806.rewards;
      const v11180 = v10905[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
      const v11181 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '0')];
      const v11185 = stdlib.sub(v11181, v10801);
      const v11188 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
      const v11189 = v11180[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '2')];
      const v11190 = [v11185, v11188, v11189];
      const v11191 = stdlib.Array_set(v10905, stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1'), v11190);
      ;
      const v11192 = v11176[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '0')];
      const v11193 = v11135[stdlib.checkedBigNumberify('./staker.rsh:253:65:array ref', stdlib.UInt_max, '0')];
      const v11194 = stdlib.cast("UInt", "UInt256", v10801, false);
      const v11195 = stdlib.mul256(v11194, v11193);
      const v11196 = stdlib.div256(v11195, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v11197 = stdlib.cast("UInt256", "UInt", v11196, false);
      let v11198;
      const v11199 = stdlib.ge(v11197, v11192);
      if (v11199) {
        v11198 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11200 = stdlib.sub(v11192, v11197);
        v11198 = v11200;
        }
      const v11201 = v11176[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '1')];
      const v11202 = v11135[stdlib.checkedBigNumberify('./staker.rsh:253:65:array ref', stdlib.UInt_max, '1')];
      const v11204 = stdlib.mul256(v11194, v11202);
      const v11205 = stdlib.div256(v11204, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v11206 = stdlib.cast("UInt256", "UInt", v11205, false);
      let v11207;
      const v11208 = stdlib.ge(v11206, v11201);
      if (v11208) {
        v11207 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11209 = stdlib.sub(v11201, v11206);
        v11207 = v11209;
        }
      const v11210 = [v11198, v11207];
      const v11211 = {
        rewards: v11210,
        stake: v11171
        };
      await stdlib.mapSet(map0, v9287, v11211);
      const v11212 = {
        newEveryoneStaked: v11170,
        newUserStaked: v11171
        };
      const v11214 = await txn1.getOutput('Staker_withdraw', 'v11212', ctc16, v11212);
      if (v3627) {
        stdlib.protect(ctc0, await interact.out(v10719, v11214), {
          at: './staker.rsh:267:11:application',
          fs: ['at ./staker.rsh:267:11:application call to [unknown function] (defined at: ./staker.rsh:267:11:function exp)', 'at ./staker.rsh:273:10:application call to "k" (defined at: ./staker.rsh:271:42:function exp)', 'at ./staker.rsh:271:42:application call to [unknown function] (defined at: ./staker.rsh:271:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      null;
      const v20721 = v11135;
      const v20722 = v9289;
      const v20723 = v8737;
      const v20724 = v11170;
      const v20726 = v11191;
      const v20727 = v8746;
      return;
      
      break;
      }
    case 'Staker_withdrawAndHarvest0_1959': {
      const v11433 = v9288[1];
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
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['start', ctc1], ['end', ctc1], ['Rewarder0', ctc5]]);
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    Staker_harvest0_1959: ctc14,
    Staker_stake0_1959: ctc13,
    Staker_withdraw0_1959: ctc13,
    Staker_withdrawAndHarvest0_1959: ctc13
    });
  const ctc16 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc17 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc18 = stdlib.T_Tuple([ctc16, ctc17]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1]);
  const v9062 = ctc.selfAddress();
  const v9064 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:311:44:application call to [unknown function] (defined at: ./staker.rsh:311:44:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_withdrawAndHarvest0_1959" (defined at: ./staker.rsh:311:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdrawAndHarvest'
    });
  const v9065 = v9064[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v9068 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9062), null);
  const v9069 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v9070 = {
    rewards: v9069,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v9071 = stdlib.fromSome(v9068, v9070);
  const v9072 = v9071.stake;
  const v9073 = stdlib.le(v9065, v9072);
  stdlib.assert(v9073, {
    at: './staker.rsh:313:12:application',
    fs: ['at ./staker.rsh:311:44:application call to [unknown function] (defined at: ./staker.rsh:311:44:function exp)', 'at ./staker.rsh:163:19:application call to "runStaker_withdrawAndHarvest0_1959" (defined at: ./staker.rsh:311:10:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdrawAndHarvest'
    });
  const v9108 = ['Staker_withdrawAndHarvest0_1959', v9064];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4889, v4890, v4891, v4892, v4912, v4913, v4920, v4930, v4933, v8735, v8736, v8737, v8738, v8745, v8746, v9108],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:315:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./staker.rsh:315:21:decimal', stdlib.UInt_max, '0'), v4892]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
      
      switch (v9288[0]) {
        case 'Staker_harvest0_1959': {
          const v9291 = v9288[1];
          
          break;
          }
        case 'Staker_stake0_1959': {
          const v10005 = v9288[1];
          
          break;
          }
        case 'Staker_withdraw0_1959': {
          const v10719 = v9288[1];
          
          break;
          }
        case 'Staker_withdrawAndHarvest0_1959': {
          const v11433 = v9288[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdrawAndHarvest"
            });
          const v11559 = v11433[stdlib.checkedBigNumberify('./staker.rsh:311:10:spread', stdlib.UInt_max, '0')];
          const v11561 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9287), null);
          const v11562 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v11563 = {
            rewards: v11562,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v11564 = stdlib.fromSome(v11561, v11563);
          const v11565 = v11564.stake;
          const v11568 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
          ;
          const v11611 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v11612 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
          const v11616 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
          const v11617 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
          const v11618 = [v11612, v11616, v11617];
          const v11619 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v11618);
          ;
          let v11947;
          if (v11568) {
            v11947 = v8735;
            }
          else {
            const v11949 = stdlib.le(v4913, v9289);
            const v11950 = v11949 ? v4913 : v9289;
            const v11951 = stdlib.ge(v4912, v8736);
            const v11952 = v11951 ? v4912 : v8736;
            let v11953;
            const v11954 = stdlib.ge(v11952, v11950);
            if (v11954) {
              v11953 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11955 = stdlib.sub(v11950, v11952);
              v11953 = v11955;
              }
            const v11956 = stdlib.cast("UInt", "UInt256", v11953, false);
            const v11957 = stdlib.mul256(v4930, v11956);
            const v11958 = stdlib.cast("UInt", "UInt256", v8738, false);
            const v11959 = stdlib.div256(v11957, v11958);
            const v11960 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
            const v11961 = stdlib.add256(v11960, v11959);
            let v11966;
            if (v11954) {
              v11966 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11968 = stdlib.sub(v11950, v11952);
              v11966 = v11968;
              }
            const v11969 = stdlib.cast("UInt", "UInt256", v11966, false);
            const v11970 = stdlib.mul256(v4933, v11969);
            const v11972 = stdlib.div256(v11970, v11958);
            const v11973 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
            const v11974 = stdlib.add256(v11973, v11972);
            const v11975 = [v11961, v11974];
            v11947 = v11975;
            }
          const v11986 = v11564.rewards;
          const v11987 = v11986[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
          const v11989 = v11947[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
          const v11990 = stdlib.cast("UInt", "UInt256", v11565, false);
          const v11991 = stdlib.mul256(v11990, v11989);
          const v11992 = stdlib.div256(v11991, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v11993 = stdlib.cast("UInt256", "UInt", v11992, false);
          let v11994;
          const v11995 = stdlib.ge(v11987, v11993);
          if (v11995) {
            v11994 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11996 = stdlib.sub(v11993, v11987);
            v11994 = v11996;
            }
          const v11997 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
          const v11998 = stdlib.le(v11994, v11997);
          const v11999 = v11998 ? v11994 : v11997;
          const v12010 = v11986[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
          const v12012 = v11947[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
          const v12014 = stdlib.mul256(v11990, v12012);
          const v12015 = stdlib.div256(v12014, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v12016 = stdlib.cast("UInt256", "UInt", v12015, false);
          let v12017;
          const v12018 = stdlib.ge(v12010, v12016);
          if (v12018) {
            v12017 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v12019 = stdlib.sub(v12016, v12010);
            v12017 = v12019;
            }
          const v12020 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
          const v12021 = stdlib.le(v12017, v12020);
          const v12022 = v12021 ? v12017 : v12020;
          const v12023 = [v11999, v12022];
          const v12031 = stdlib.sub(v8746, v11999);
          sim_r.txns.push({
            kind: 'from',
            to: v9287,
            tok: undefined /* Nothing */
            });
          const v12032 = v11619[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
          const v12033 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
          const v12037 = stdlib.sub(v12033, v12022);
          const v12040 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '1')];
          const v12041 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '2')];
          const v12042 = [v12037, v12040, v12041];
          const v12043 = stdlib.Array_set(v11619, stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0'), v12042);
          sim_r.txns.push({
            kind: 'from',
            to: v9287,
            tok: v4891
            });
          const v12045 = stdlib.sub(v11997, v11999);
          const v12047 = stdlib.sub(v12020, v12022);
          const v12060 = stdlib.add(v11987, v11999);
          const v12062 = stdlib.add(v12010, v12022);
          const v12063 = [v12060, v12062];
          const v12064 = {
            rewards: v12063,
            stake: v11565
            };
          await stdlib.simMapSet(sim_r, 0, v9287, v12064);
          const v12069 = [v12045, v12047];
          const v12070 = {
            totalRemaining: v12069,
            userReceived: v12023
            };
          const v12075 = v12064.stake;
          const v12076 = stdlib.sub(v8738, v11559);
          const v12077 = stdlib.sub(v12075, v11559);
          const v12082 = v12064.rewards;
          const v12086 = v12043[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
          const v12087 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '0')];
          const v12091 = stdlib.sub(v12087, v11559);
          const v12094 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
          const v12095 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '2')];
          const v12096 = [v12091, v12094, v12095];
          const v12097 = stdlib.Array_set(v12043, stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1'), v12096);
          sim_r.txns.push({
            kind: 'from',
            to: v9287,
            tok: v4892
            });
          const v12098 = v12082[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '0')];
          const v12100 = stdlib.cast("UInt", "UInt256", v11559, false);
          const v12101 = stdlib.mul256(v12100, v11989);
          const v12102 = stdlib.div256(v12101, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v12103 = stdlib.cast("UInt256", "UInt", v12102, false);
          let v12104;
          const v12105 = stdlib.ge(v12103, v12098);
          if (v12105) {
            v12104 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v12106 = stdlib.sub(v12098, v12103);
            v12104 = v12106;
            }
          const v12107 = v12082[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '1')];
          const v12110 = stdlib.mul256(v12100, v12012);
          const v12111 = stdlib.div256(v12110, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v12112 = stdlib.cast("UInt256", "UInt", v12111, false);
          let v12113;
          const v12114 = stdlib.ge(v12112, v12107);
          if (v12114) {
            v12113 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v12115 = stdlib.sub(v12107, v12112);
            v12113 = v12115;
            }
          const v12116 = [v12104, v12113];
          const v12117 = {
            rewards: v12116,
            stake: v12077
            };
          await stdlib.simMapSet(sim_r, 0, v9287, v12117);
          const v12118 = {
            newEveryoneStaked: v12076,
            newUserStaked: v12077
            };
          const v12123 = [v12118, v12070];
          const v12124 = await txn1.getOutput('Staker_withdrawAndHarvest', 'v12123', ctc18, v12123);
          
          null;
          null;
          const v20766 = v11947;
          const v20767 = v9289;
          const v20768 = v12069;
          const v20769 = v12076;
          const v20771 = v12097;
          const v20772 = v12031;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc5, ctc8, ctc8, ctc9, ctc1, ctc2, ctc1, ctc12, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v9288], secs: v9290, time: v9289, didSend: v3627, from: v9287 } = txn1;
  switch (v9288[0]) {
    case 'Staker_harvest0_1959': {
      const v9291 = v9288[1];
      return;
      break;
      }
    case 'Staker_stake0_1959': {
      const v10005 = v9288[1];
      return;
      break;
      }
    case 'Staker_withdraw0_1959': {
      const v10719 = v9288[1];
      return;
      break;
      }
    case 'Staker_withdrawAndHarvest0_1959': {
      const v11433 = v9288[1];
      undefined /* setApiDetails */;
      const v11559 = v11433[stdlib.checkedBigNumberify('./staker.rsh:311:10:spread', stdlib.UInt_max, '0')];
      const v11561 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9287), null);
      const v11562 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v11563 = {
        rewards: v11562,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v11564 = stdlib.fromSome(v11561, v11563);
      const v11565 = v11564.stake;
      const v11566 = stdlib.le(v11559, v11565);
      stdlib.assert(v11566, {
        at: './staker.rsh:313:12:application',
        fs: ['at ./staker.rsh:311:44:application call to [unknown function] (defined at: ./staker.rsh:311:44:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:311:44:function exp)', 'at ./staker.rsh:163:19:application call to [unknown function] (defined at: ./staker.rsh:163:19:function exp)', 'at ./staker.rsh:209:14:application call to [unknown function] (defined at: ./staker.rsh:209:14:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdrawAndHarvest'
        });
      const v11568 = stdlib.eq(v8738, stdlib.checkedBigNumberify('./staker.rsh:167:28:decimal', stdlib.UInt_max, '0'));
      ;
      const v11611 = v8745[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v11612 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '0')];
      const v11616 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1')];
      const v11617 = v11611[stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '2')];
      const v11618 = [v11612, v11616, v11617];
      const v11619 = stdlib.Array_set(v8745, stdlib.checkedBigNumberify('./staker.rsh:163:19:dot', stdlib.UInt_max, '1'), v11618);
      ;
      let v11947;
      if (v11568) {
        v11947 = v8735;
        }
      else {
        const v11949 = stdlib.le(v4913, v9289);
        const v11950 = v11949 ? v4913 : v9289;
        const v11951 = stdlib.ge(v4912, v8736);
        const v11952 = v11951 ? v4912 : v8736;
        let v11953;
        const v11954 = stdlib.ge(v11952, v11950);
        if (v11954) {
          v11953 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v11955 = stdlib.sub(v11950, v11952);
          v11953 = v11955;
          }
        const v11956 = stdlib.cast("UInt", "UInt256", v11953, false);
        const v11957 = stdlib.mul256(v4930, v11956);
        const v11958 = stdlib.cast("UInt", "UInt256", v8738, false);
        const v11959 = stdlib.div256(v11957, v11958);
        const v11960 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '0')];
        const v11961 = stdlib.add256(v11960, v11959);
        let v11966;
        if (v11954) {
          v11966 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v11968 = stdlib.sub(v11950, v11952);
          v11966 = v11968;
          }
        const v11969 = stdlib.cast("UInt", "UInt256", v11966, false);
        const v11970 = stdlib.mul256(v4933, v11969);
        const v11972 = stdlib.div256(v11970, v11958);
        const v11973 = v8735[stdlib.checkedBigNumberify('./staker.rsh:173:40:array ref', stdlib.UInt_max, '1')];
        const v11974 = stdlib.add256(v11973, v11972);
        const v11975 = [v11961, v11974];
        v11947 = v11975;
        }
      const v11986 = v11564.rewards;
      const v11987 = v11986[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '0')];
      const v11989 = v11947[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '0')];
      const v11990 = stdlib.cast("UInt", "UInt256", v11565, false);
      const v11991 = stdlib.mul256(v11990, v11989);
      const v11992 = stdlib.div256(v11991, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v11993 = stdlib.cast("UInt256", "UInt", v11992, false);
      let v11994;
      const v11995 = stdlib.ge(v11987, v11993);
      if (v11995) {
        v11994 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v11996 = stdlib.sub(v11993, v11987);
        v11994 = v11996;
        }
      const v11997 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '0')];
      const v11998 = stdlib.le(v11994, v11997);
      const v11999 = v11998 ? v11994 : v11997;
      const v12010 = v11986[stdlib.checkedBigNumberify('./staker.rsh:180:54:array ref', stdlib.UInt_max, '1')];
      const v12012 = v11947[stdlib.checkedBigNumberify('./staker.rsh:182:74:array ref', stdlib.UInt_max, '1')];
      const v12014 = stdlib.mul256(v11990, v12012);
      const v12015 = stdlib.div256(v12014, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v12016 = stdlib.cast("UInt256", "UInt", v12015, false);
      let v12017;
      const v12018 = stdlib.ge(v12010, v12016);
      if (v12018) {
        v12017 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v12019 = stdlib.sub(v12016, v12010);
        v12017 = v12019;
        }
      const v12020 = v8737[stdlib.checkedBigNumberify('./staker.rsh:187:54:array ref', stdlib.UInt_max, '1')];
      const v12021 = stdlib.le(v12017, v12020);
      const v12022 = v12021 ? v12017 : v12020;
      const v12023 = [v11999, v12022];
      const v12031 = stdlib.sub(v8746, v11999);
      ;
      const v12032 = v11619[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
      const v12033 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0')];
      const v12037 = stdlib.sub(v12033, v12022);
      const v12040 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '1')];
      const v12041 = v12032[stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '2')];
      const v12042 = [v12037, v12040, v12041];
      const v12043 = stdlib.Array_set(v11619, stdlib.checkedBigNumberify('./staker.rsh:283:60:application', stdlib.UInt_max, '0'), v12042);
      ;
      const v12045 = stdlib.sub(v11997, v11999);
      const v12047 = stdlib.sub(v12020, v12022);
      const v12060 = stdlib.add(v11987, v11999);
      const v12062 = stdlib.add(v12010, v12022);
      const v12063 = [v12060, v12062];
      const v12064 = {
        rewards: v12063,
        stake: v11565
        };
      await stdlib.mapSet(map0, v9287, v12064);
      const v12069 = [v12045, v12047];
      const v12070 = {
        totalRemaining: v12069,
        userReceived: v12023
        };
      const v12075 = v12064.stake;
      const v12076 = stdlib.sub(v8738, v11559);
      const v12077 = stdlib.sub(v12075, v11559);
      const v12082 = v12064.rewards;
      const v12086 = v12043[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
      const v12087 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '0')];
      const v12091 = stdlib.sub(v12087, v11559);
      const v12094 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1')];
      const v12095 = v12086[stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '2')];
      const v12096 = [v12091, v12094, v12095];
      const v12097 = stdlib.Array_set(v12043, stdlib.checkedBigNumberify('./staker.rsh:256:41:application', stdlib.UInt_max, '1'), v12096);
      ;
      const v12098 = v12082[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '0')];
      const v12100 = stdlib.cast("UInt", "UInt256", v11559, false);
      const v12101 = stdlib.mul256(v12100, v11989);
      const v12102 = stdlib.div256(v12101, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v12103 = stdlib.cast("UInt256", "UInt", v12102, false);
      let v12104;
      const v12105 = stdlib.ge(v12103, v12098);
      if (v12105) {
        v12104 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v12106 = stdlib.sub(v12098, v12103);
        v12104 = v12106;
        }
      const v12107 = v12082[stdlib.checkedBigNumberify('./staker.rsh:255:50:array ref', stdlib.UInt_max, '1')];
      const v12110 = stdlib.mul256(v12100, v12012);
      const v12111 = stdlib.div256(v12110, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v12112 = stdlib.cast("UInt256", "UInt", v12111, false);
      let v12113;
      const v12114 = stdlib.ge(v12112, v12107);
      if (v12114) {
        v12113 = stdlib.checkedBigNumberify('./staker.rsh:43:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v12115 = stdlib.sub(v12107, v12112);
        v12113 = v12115;
        }
      const v12116 = [v12104, v12113];
      const v12117 = {
        rewards: v12116,
        stake: v12077
        };
      await stdlib.mapSet(map0, v9287, v12117);
      const v12118 = {
        newEveryoneStaked: v12076,
        newUserStaked: v12077
        };
      const v12123 = [v12118, v12070];
      const v12124 = await txn1.getOutput('Staker_withdrawAndHarvest', 'v12123', ctc18, v12123);
      if (v3627) {
        stdlib.protect(ctc0, await interact.out(v11433, v12124), {
          at: './staker.rsh:311:11:application',
          fs: ['at ./staker.rsh:311:11:application call to [unknown function] (defined at: ./staker.rsh:311:11:function exp)', 'at ./staker.rsh:318:10:application call to "k" (defined at: ./staker.rsh:315:42:function exp)', 'at ./staker.rsh:315:42:application call to [unknown function] (defined at: ./staker.rsh:315:42:function exp)'],
          msg: 'out',
          who: 'Staker_withdrawAndHarvest'
          });
        }
      else {
        }
      
      null;
      null;
      const v20766 = v11947;
      const v20767 = v9289;
      const v20768 = v12069;
      const v20769 = v12076;
      const v20771 = v12097;
      const v20772 = v12031;
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
export async function Staker_withdrawAndHarvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdrawAndHarvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdrawAndHarvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Staker_withdrawAndHarvest6(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Setup_abortSetup()byte[0]`, `Setup_fund()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `Staker_withdrawAndHarvest(uint64)((uint64,uint64),((uint64,uint64),(uint64,uint64)))`],
    pure: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,(uint64,uint64))`, `Opts()(uint64,uint64,(uint64,uint64),uint64,uint64,address)`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`],
    sigs: [`Info()((uint64,uint64,(uint64,uint64),uint64,uint64,address),uint64,(uint64,uint64))`, `Opts()(uint64,uint64,(uint64,uint64),uint64,uint64,address)`, `Setup_abortSetup()byte[0]`, `Setup_fund()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `Staker_withdrawAndHarvest(uint64)((uint64,uint64),((uint64,uint64),(uint64,uint64)))`, `rewardsAvailable(address)(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`]
    },
  appApproval: `BiAfABgIEAEGBAKAAYgBuALIArACcHgZ1Oa52Abp+NWDCtK4vskMu4uE1Q7WtZezCJmE+e4Jh7C+tgOVmOaXBo3nmq4G/rbdhgMiA6CNBiAFJgcBAAEBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJUC+QAAQIABGV+pBAEYrJJVSI1ADEYQRMvJwRkSSJbNQFJJFs1AiVbNQgxGSEEEkEACjEAKCEPr2ZCEvM2GgAXSUEEhyI1BCEENQZJIRAMQAJpSSERDEAAm0khEgxAAIVJIRMMQAAlIRMSRDQBIQUSRCOvNhoBiBLbSTX/VwEYNP8iVU1XEAg1B0IStCESEkQ0AUkhBwxAADVJIQUMQAAXIQUSRChkKWRQK2RQSTUDVyBQNQdCEokhBxJEKGQpZFArZFBJNQNXIFA1B0ISciEEEkQoZClkUCtkUEk1A1cgUDUHQhJbIRESRCcENf8oNP9QQg35SSEUDEABsEkhFQxAABAhFRJENhoBNf8pNP9QQgPYIRQSRDQBIQUSRDYaAhc1/yhkKWRQK2RQSTUDSUpKIQhbNf4hCVs1/VfwQDX8IQxbNfshCiVYNfohC1tJNfkiEkEABzT8NfhCAIY0/zT9STT/Dk019zT7NP5JNPsPTUk19jT3D0k19EEABiI19UIABzT3NPYJNfUjrzT5FlA18zT0QQAGIjXyQgAHNPc09gk18jT8VwAgNANXsCAjrzT1FlCjiBHnNPOiiBHhoIgR3TT8VyAgNANX0CAjrzTyFlCjiBHJNPOiiBHDoIgRv1A1+COvNhoBiBFqSTX2VwEYNPYiVU1JNfdXABBJNfYiWzX1I68091cQCFBJNfQ0+FcAIKOIEYgqoogRg0lKJVsiEkQkWyISRCJbIhJEI1s18zT1NPMPQQAGIjXyQgAHNPM09Qk18jT6Ils18TT2JFs18DT0NPhXICCjiBFCKqKIET1JSiVbIhJEJFsiEkQiWyISRCNbNe808DTvD0EABiI17kIABzTvNPAJNe40+iRbNe008TTySTTxDk0WNO007kk07Q5NFlA1B0IQlSEQEkQ2GgE1/ys0/1BCAi9JIRYMQABdSSEXDEAAREkhGAxAACshGBJENAEhBRJEKGQpZFArZFBJNQNXIFA0AyELJFhQNAMhCiVYUDUHQhBFIRcSRCcENf8oNP9QJK9QQgHdIRYSRDYaATX/gAEDNP9QQgHLSSEZDEAADyEZEkQnBDX/KTT/UEILuIGe8vFwEkQ0ASEFEkQoZClkUCtkUEk1A0lKSiEIWzX/IQlbNf5X8EA1/SEMWzX8IQolWDX7IQtbSTX6IhJBAAc0/TX5QgCGNPw0/kk0/A5NNfg0/DT/STT8D01JNfc0+A9JNfVBAAYiNfZCAAc0+DT3CTX2I680+hZQNfQ09UEABiI180IABzT4NPcJNfM0/VcAIDQDV7AgI6809hZQo4gPxzT0oogPwaCID700/VcgIDQDV9AgI6808xZQo4gPqTT0oogPo6CID59QNfkjrzYaAYgPSkk191cBGDT3IlVNSTX4VwAQSTX3Ils19iOvNPhXEAhQSTX1NPlXACCjiA9oKqKID2NJSiVbIhJEJFsiEkQiWyISRCNbNfQ09jT0D0EABiI180IABzT0NPYJNfM0+yJbNfI09yRbNfE09TT5VyAgo4gPIiqiiA8dSUolWyISRCRbIhJEIlsiEkQjWzXwNPE08A9BAAYiNe9CAAc08DTxCTXvNPskWzXuNPI080k08g5NFjTuNO9JNO4OTRZQNQdCDnU2GgIXNQQ2GgM2GgEXSSEHDEALI0khBgxACgMhBhJEIQU0ARJENARJIhJMNAISEUQoZClkUCtkUEk1A0lKSkpKSkpJVwAgNf9XIFA1/iENWzX9IQ5bNfwhCFs1+yEJWzX6V5AgNflXsCA1+FfQIDX3V/BANfYhDFs19SEKJVg19CELWzXzgdACIRpYNfKB8gJbNfFJNQU18IAE1Y4dqzTwULA08CJVSSEHDEAFdkkhGwxAA1shGxJENPBXAQg157EisgEhBbIQNAiyGLM05xc15iOvMQCIDbFJNeRXARg05CJVTUk15SVbNeQ05jTkDkQ08lcRETXjNPJXABE041cACDTjVwgIUDTjVxABUFA14jTzIhJBAAc09jXhQgCAMgY0+kkyBg5NNeA09TT7STT1D01JNd804A9JNd1BAAYiNd5CAAc04DTfCTXeI6808xZQNdw03UEABiI120IABzTgNN8JNds09lcAIDT4I6803hZQo4gNXTTcoogNV6CIDVM09lcgIDT3I6802xZQo4gNQjTcoogNPKCIDThQNeE05VcAEEk14CJbNd804VcAIDXeI6805BZQSTXdNN6jiA0TKqKIDQ5JSiVbIhJEJFsiEkQiWyISRCNbNdw03zTcD0EABiI120IABzTcNN8JNds09CJbSTXaNNtJNNoOTTXZNOAkWzXYNOFXICA11zTdNNejiAy/KqKIDLpJSiVbIhJEJFsiEkQiWyISRCNbNdY02DTWD0EABiI11UIABzTWNNgJNdU09CRbSTXUNNVJNNQOTTXTsSKyATTZsgghBLIQMQCyB7M04lcAEUk10iJbNNMJFjTSVwgIUDTSVxABUDTiVxERUDXRsSKyATTTshIhBrIQMQCyFDT9shGzNN802QgWNNg00wgWUDTkFlA10DEAKCk00FBmNNo02QkWNNQ00wkWUDXPNNkWNNMWUDTPUDXONPM05gk1zTTQJVs05gk1zDTQVwAQNcs00VcRETXKsSKyATTmshIhBrIQMQCyFDT8shGzNMsiWzXJI6805hZQSTXINN6jiAu6KqKIC7VJSiVbIhJEJFsiEkQiWyISRCNbSTXHNMkPQQAGIjXGQgAHNMk0xwk1xjTLJFs1xTTINNejiAt+KqKIC3lJSiVbIhJEJFsiEkQiWyISRCNbSTXENMUPQQAGIjXDQgAHNMU0xAk1wzEAKCk0xhY0wxZQNMwWUFBmNMwWNM0WUDXCgAgAAAAAAAAvWzTCNM5QULA0wjTOUDUHJwUxAFA0zlAxAFCwJwYxAFA05hZQNMJQMQBQsDT/NP40/TT8NPs0+jT5NPg09zThMgY0zzTNMgY00VcAETTKIls05gkWNMpXCAhQNMpXEAFQUDTxNNkJQgmSSDTwVwEINeexIrIBIQWyEDQIshizNOcXNeYjrzEAiApZSTXkVwEYNOQiVU1JNeUlWzXkNOY05A5ENPJXERE14zTyVwARNONXAAg041cICFA041cQAVBQNeI08yISQQAHNPY14UIAgDIGNPpJMgYOTTXgNPU0+0k09Q9NSTXfNOAPSTXdQQAGIjXeQgAHNOA03wk13iOvNPMWUDXcNN1BAAYiNdtCAAc04DTfCTXbNPZXACA0+COvNN4WUKOICgU03KKICf+giAn7NPZXICA09yOvNNsWUKOICeo03KKICeSgiAngUDXhNPM05gk14DTkNOYJNd805VcAEDXeNOJXERE13bEisgE05rISIQayEDEAshQ0/LIRszTeIls13COvNOYWUEk12zThVwAgo4gJlCqiiAmPSUolWyISRCRbIhJEIlsiEkQjW0k12jTcD0EABiI12UIABzTcNNoJNdk03iRbNdg02zThVyAgo4gJVSqiiAlQSUolWyISRCRbIhJEIlsiEkQjW0k11zTYD0EABiI11kIABzTYNNcJNdYxACgpNNkWNNYWUDTfFlBQZjTfFjTgFlA11YAIAAAAAAAAK8w01VCwNNU1BycGMQBQNOYWUDTVUDEAULA0/zT+NP00/DT7NPo0+TT4NPc04TIGNPQ04DIGNOJXABE03SJbNOYJFjTdVwgIUDTdVxABUFA08UIHfkkhBAxAAbdINPBXAQg157EisgEhBbIQNAiyGLM05xc15jT1NPoMRDTmIg1ENPJXERE15TTmNPyICFU08yISQQAHNPY15EIAgDIGNPpJMgYOTTXjNPU0+0k09Q9NSTXiNOMPSTXgQQAGIjXhQgAHNOM04gk14SOvNPMWUDXfNOBBAAYiNd5CAAc04zTiCTXeNPZXACA0+COvNOEWUKOICBA036KICAqgiAgGNPZXICA09yOvNN4WUKOIB/U036KIB++giAfrUDXkNPM05gg14yOvMQCIB5BJNeFXARg04SJVTUk14iVbNOYINeE04lcAEDXgI6805hZQNd8xACgpNOAiWzTfNORXACCjiAejKqKIB55JSiVbIhJEJFsiEkQiWyISRCNbCBY04CRbNN805FcgIKOIB3oqoogHdUlKJVsiEkQkWyISRCJbIhJEI1sIFlA04RZQUGY04RY04xZQNd6ACAAAAAAAACigNN5QsDTeNQeABNq8TY0xAFA05hZQNN5QsDT/NP40/TT8NPs0+jT5NPg09zTkMgY09DTjMgY08lcAETTlIls05ggWNOVXCAhQNOVXEAFQUDTxQgXASLEisgEhBbIQNAiyGLM08lcRETXnNPJXABE051cACDTnVwgIUDTnVxABUFA15jTzIhJBAAc09jXlQgCAMgY0+kkyBg5NNeQ09TT7STT1D01JNeM05A9JNeFBAAYiNeJCAAc05DTjCTXiI6808xZQNeA04UEABiI130IABzTkNOMJNd809lcAIDT4I6804hZQo4gGXjTgoogGWKCIBlQ09lcgIDT3I6803xZQo4gGQzTgoogGPaCIBjlQNeUjrzEAiAXlSTXjVwEYNOMiVU1JNeQlWzXjNORXABBJNeIiWzXhI6804xZQSTXgNOVXACCjiAX/KqKIBfpJSiVbIhJEJFsiEkQiWyISRCNbNd804TTfD0EABiI13kIABzTfNOEJNd409CJbSTXdNN5JNN0OTTXcNOIkWzXbNOA05VcgIKOIBa8qoogFqklKJVsiEkQkWyISRCJbIhJEI1s12jTbNNoPQQAGIjXZQgAHNNo02wk12TT0JFtJNdg02Uk02A5NNdexIrIBNNyyCCEEshAxALIHszTmVwARNdaxIrIBNNeyEiEGshAxALIUNP2yEbMxACgpNOE03AgWNNs01wgWUDTjFlBQZjTdNNwJFjTYNNcJFlA11TTcFjTXFlA01VA11IAIAAAAAAAAJYI01FCwNNQ1BycFMQBQNNRQMQBQsDT/NP40/TT8NPs0+jT5NPg09zTlMgY01TTzMgY01iJbNNcJFjTWVwgIUDTWVxABUDTmVxERUDTxNNwJQgODIQcSRCEHNAESRDQESSISTDQCEhFEKGQpZFArZFBJNQNJSkpJVwAgNf8hDVs1/iEOWzX9IQhbNfxXkCA1+4HwAVs1+oGAAiEaWDX5STUFNfiABNnfPAs0+FCwNPgiVUAAaDEANP8SMQA0+xIRRIAIAAAAAAAAE4awJwQ1B7EisgE0+VcAESJbshIhBrIQNP+yFDT+shGzsSKyASKyEiEGshAyCbIVMgqyFDT9shGzsSKyASKyEiEGshAyCbIVMgqyFDT+shGzQgMtMQA0+xJENPqIA6aACAAAAAAAACIGsCcENQc0/zQDVyBQNP40/TT8NAMhCVs0+zQDV7AgNANX0CCBQK80/DT6FjQDV/gIUCIyBjT5NPpCAmpJIQQMQADjSCEENAESRDQESSISTDQCEhFEKGQpZFArZFBJNQNJSkpKSkpXACA1/1cgUDX+IQ1bNf0hDls1/FeAIjX7gaIBWzX6gaoBWzX5V7IgNfhX0iA191fyIDX2gZICWzX1gZoCWzX0gASai5F0sDT7VwARSTXzIls09AgWNPNXCAhQNPNXEAFQNPtXERFQNfI09DT9iALhNP8xABJENP80/lA0/RZQNPwWUDT6FlA0+RZQNPhQNPdQNPZQNPUWUDT0FlA08lAoSwFXAH9nKUsBV39/ZytLAVf+JGdIIQc1ATIGNQJCAiFIgcCaDIgCb7EisgEhBbIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUlXAFA1/4FQWzX+gVhbNf2ABPkKH480/1A0/hZQNP0WULCBEa9JNfxJUDX7NP40/RNENPtXABE1+iSvNPpXCAhQNPpXEAFQNPtXERFQNfkhHIgB6LEisgEishIhBrIQMgqyFDT+shGzNPlXERE1+DT5VwARJK80+FcICFA0+FcQAVBQNfchHIgBsrEisgEishIhBrIQMgqyFDT9shGzNP8hHVs19jT/gShbNfU09jT1DEQ0/1cQEDX0NP9XMCA18zT0Ils18jT0JFs18TT1NPYJNfAjrzTyFlAqo4gBmTXvI6808RZQKqOIAYw17jTyNPALNe008TTwCzXsMQA0/1A0/hZQNP0WUDT3UDT2FlA09RZQNPNQNO9QNO5QNO0WUDTsFlAoSwFXAH9nKUsBV39/ZytLAVf+JGdIIQQ1ATIGNQJCAKE1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfFJNfA08VA08hZQNPMWUDT0FlA09RZQNPZQNPdQNPhQNPlQNPoWUDT7UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/nxnSCEFNQEyBjUCQgAuMRkhHhJEsSKyASEFshA0CLIYIR6yGbOxIrIBIrIIIQSyEDIJsgkyCrIHs0IABTEZIhJEJwQ0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkhBAgyBBJEMRYSRCEEQzEZIhJEQv/dIjUBIjUCIjUIQv+5STEYYUAABUghD6+JKGKJNABJSiEECDUAOAcyChJEOBAhBBJEOAgSRIk0AElKSSEECDUAOBQyChJEOBAhBhJEOBFPAhJEOBISRIlJFSEdTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: {
    api_Staker_harvest: 1,
    api_Staker_stake: 1,
    api_Staker_withdraw: 1,
    api_Staker_withdrawAndHarvest: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 3,
  stateSize: 378,
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
                "internalType": "struct T3",
                "name": "v4890",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4891",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v4892",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
        "internalType": "struct T24",
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
        "internalType": "struct T25",
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
        "internalType": "struct T25",
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
                "internalType": "struct T3",
                "name": "v4890",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4891",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v4892",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_abortSetup0_89",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_fund0_89",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v4979",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
                    "internalType": "bool",
                    "name": "_Staker_harvest0_1959",
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
                    "name": "_Staker_stake0_1959",
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
                    "name": "_Staker_withdraw0_1959",
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
                    "name": "_Staker_withdrawAndHarvest0_1959",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v9288",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v10400",
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
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v11212",
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
            "internalType": "struct T25",
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
            "internalType": "struct T24",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v12123",
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
    "name": "_reach_oe_v4998",
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
    "name": "_reach_oe_v8710",
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
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v9602",
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
                "internalType": "struct T0",
                "name": "rewardsPerBlock",
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
            "internalType": "struct T0",
            "name": "rewardsPerBlock",
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
            "internalType": "struct T25",
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
            "internalType": "struct T24",
            "name": "elem1",
            "type": "tuple"
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
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_abortSetup0_89",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Setup_fund0_89",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v4979",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
                    "internalType": "bool",
                    "name": "_Staker_harvest0_1959",
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
                    "name": "_Staker_stake0_1959",
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
                    "name": "_Staker_withdraw0_1959",
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
                    "name": "_Staker_withdrawAndHarvest0_1959",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v9288",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
        "name": "v20779",
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
        "name": "v20781",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v20782",
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
        "name": "v20784",
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
  Bytecode: `0x60806040526040516200676738038062006767833981016040819052620000269162000737565b600080554360035562000038620003e0565b7f86d4fbbb239592c63665160c6b1537b4c4a76645fc65e7b6e566ad0dc88686ed33836040516200006b9291906200084e565b60405180910390a180516000908190528151602090810182905282516040908101929092528251818401805191909152835190518201528381015191820151910151620000d8916001600160a01b03918216911614620000cd576001620000d0565b60005b600c62000333565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011a92906200035d565b606082019081526080820180516000905281516020908101518101518251820152825101516040908101518251901515910152905190516200016091906001906200035d565b60a0820152620001733415600d62000333565b6020820151516080810151606090910151620001929111600e62000333565b6020820151516060810151608090910151620001af91906200091c565b60c08201526020820151516040015151620001d1906402540be4009062000936565b60e082015260208083015151604001510151620001f5906402540be4009062000936565b61010082015260c0810151602083015151604001515162000217919062000936565b61012082015260c0810151602080840151516040015101516200023b919062000936565b6101408201526200024b6200049e565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151821660608087019190915260a08088015160808089019190915285515190920151818801528451519091015160c0870152925151909201511660e080850191909152840151610100808501919091528401516101208085019190915284015161014080850191909152840151610160840152600160008190554390555162000303918391016200099e565b604051602081830303815290604052600290805190602001906200032992919062000521565b5050505062000b1b565b81620003595760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000367620005b0565b60005b6002811015620003bd57848160028110620003895762000389620008f0565b6020020151828260028110620003a357620003a3620008f0565b602002015280620003b48162000ac0565b9150506200036a565b5081818460028110620003d457620003d4620008f0565b60200201529392505050565b604080516101c081019091526000610160820181815261018083018290526101a083019190915281526020810162000417620005b0565b8152604080516060810182526000808252602082810182905292820152910190815260200162000446620005b0565b8152604080516060810182526000808252602082810182905292820152910190815260200162000475620005b0565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610180016040528060006001600160a01b03168152602001620004c4620005fd565b81526000602082018190526040820152606001620004e1620005b0565b8152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8280546200052f9062000ade565b90600052602060002090601f0160209004810192826200055357600085556200059e565b82601f106200056e57805160ff19168380011785556200059e565b828001600101855582156200059e579182015b828111156200059e57825182559160200191906001019062000581565b50620005ac9291506200066a565b5090565b60405180604001604052806002905b620005e6604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005bf5790505090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200162000646604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b031681525090565b5b80821115620005ac57600081556001016200066b565b604080519081016001600160401b0381118282101715620006b257634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620006b257634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620006b257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200073257600080fd5b919050565b60008183036101408112156200074c57600080fd5b6200075662000681565b83518152601f198201610120808212156200077057600080fd5b6200077a620006b8565b60e08312156200078957600080fd5b62000793620006e9565b9250620007a3602088016200071a565b8352620007b3604088016200071a565b60208401526040605f1986011215620007cb57600080fd5b620007d562000681565b9450606087015185526080870151602086015284604084015260a0870151606084015260c087015160808401526200081060e088016200071a565b60a08401528281526200082761010088016200071a565b6020820152620008398288016200071a565b60408201526020840152509095945050505050565b60006101608201905060018060a01b038085168352835160208401526020840151620008ce60408501825160018060a01b03808251168352806020830151166020840152604082015180516040850152602081015160608501525060608201516080840152608082015160a08401528060a08301511660c0840152505050565b6020810151821661012085015260400151166101409092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101562000931576200093162000906565b500390565b600081600019048311821515161562000953576200095362000906565b500290565b8060005b6002811015620009985781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016200095c565b50505050565b81516001600160a01b031681526102e08101602083015162000a13602084018260018060a01b03808251168352806020830151166020840152604082015180516040850152602081015160608501525060608201516080840152608082015160a08401528060a08301511660c0840152505050565b50604083015161010062000a31818501836001600160a01b03169052565b6060850151915061012062000a50818601846001600160a01b03169052565b6080860151925061014062000a688187018562000958565b60a087015161020087015260c087015161022087015260e08701516001600160a01b0316610240870152918601516102608601528501516102808501528401516102a084015250610160909201516102c09091015290565b600060001982141562000ad75762000ad762000906565b5060010190565b600181811c9082168062000af357607f821691505b6020821081141562000b1557634e487b7160e01b600052602260045260246000fd5b50919050565b615c3c8062000b2b6000396000f3fe6080604052600436106101015760003560e01c80638712236d1161008f578063b0c1f58a11610061578063b0c1f58a14610293578063c527ddba146102a6578063d9d7e3ee146102ae578063e07352ca146102c1578063e2809549146102e357005b80638712236d146102255780638f3e1f411461023857806398807d8414610250578063ab53f2c61461027057005b80635657588e116100d35780635657588e146101905780636f0fe5c9146101b05780637efdbd71146101dd57806383230757146101f05780638608c1c51461020557005b80631e93b0f11461010a5780632c10a1591461012e5780633bc5b7bf146101415780634012e02e1461016e57005b3661010857005b005b34801561011657600080fd5b506003545b6040519081526020015b60405180910390f35b61010861013c366004614e61565b6102f8565b34801561014d57600080fd5b5061016161015c366004614e8e565b61031c565b6040516101259190614ed1565b34801561017a57600080fd5b50610183610333565b6040516101259190614f7a565b6101a361019e366004614fb8565b61059d565b6040516101259190614ffd565b3480156101bc57600080fd5b506101d06101cb366004615023565b6105fb565b604051610125919061504f565b6101086101eb366004615066565b610b4e565b3480156101fc57600080fd5b5060015461011b565b34801561021157600080fd5b506101d0610220366004614e8e565b610b6e565b6101d0610233366004614fb8565b6110ce565b610240611138565b6040519015158152602001610125565b34801561025c57600080fd5b5061011b61026b366004614e8e565b61118b565b34801561027c57600080fd5b5061028561142a565b6040516101259291906150a4565b6101d06102a1366004614fb8565b6114c7565b610240611530565b6101086102bc3660046150de565b611587565b3480156102cd57600080fd5b506102d66115a7565b60405161012591906150f0565b6102eb6117c6565b60405161012591906150fe565b610300614013565b6103186103123684900384018461520a565b82611819565b5050565b610324614088565b61032d82611ab4565b92915050565b61033b6140a7565b600160005414156103f65760006002805461035590615242565b80601f016020809104026020016040519081016040528092919081815260200182805461038190615242565b80156103ce5780601f106103a3576101008083540402835291602001916103ce565b820191906000526020600020905b8154815290600101906020018083116103b157829003601f168201915b50505050508060200190518101906103e691906153d9565b90506103f460006007611b99565b505b600260005414156104b15760006002805461041090615242565b80601f016020809104026020016040519081016040528092919081815260200182805461043c90615242565b80156104895780601f1061045e57610100808354040283529160200191610489565b820191906000526020600020905b81548152906001019060200180831161046c57829003601f168201915b50505050508060200190518101906104a191906154a7565b90506104af60006007611b99565b505b6006600054141561058e576000600280546104cb90615242565b80601f01602080910402602001604051908101604052809291908181526020018280546104f790615242565b80156105445780601f1061051957610100808354040283529160200191610544565b820191906000526020600020905b81548152906001019060200180831161052757829003601f168201915b505050505080602001905181019061055c9190615575565b90506105666140e3565b6020808301518251526101808301518251909101526101609091015181516040015251919050565b61059a60006007611b99565b90565b6105a56140f6565b6105ad614013565b6105b561411f565b6105bd614139565b604080516020808201835287825260808401919091526003835281518082019092528282528301526105ef8284611bbf565b505060a0015192915050565b6040805180820190915260008082526020820152600160005414156106ca5760006002805461062990615242565b80601f016020809104026020016040519081016040528092919081815260200182805461065590615242565b80156106a25780601f10610677576101008083540402835291602001916106a2565b820191906000526020600020905b81548152906001019060200180831161068557829003601f168201915b50505050508060200190518101906106ba91906153d9565b90506106c86000600a611b99565b505b60026000541415610785576000600280546106e490615242565b80601f016020809104026020016040519081016040528092919081815260200182805461071090615242565b801561075d5780601f106107325761010080835404028352916020019161075d565b820191906000526020600020905b81548152906001019060200180831161074057829003601f168201915b505050505080602001905181019061077591906154a7565b90506107836000600a611b99565b505b60066000541415610b425760006002805461079f90615242565b80601f01602080910402602001604051908101604052809291908181526020018280546107cb90615242565b80156108185780601f106107ed57610100808354040283529160200191610818565b820191906000526020600020905b8154815290600101906020018083116107fb57829003601f168201915b50505050508060200190518101906108309190615575565b905061083a614180565b61018082015161085157610120820151815261098c565b838260a0015111156108635783610869565b8160a001515b60208201526101408201516080830151101561088a57816101400151610890565b81608001515b60408201819052602082015111801560808301526108b457600060608201526108ce565b806040015181602001516108c89190615690565b60608201525b61018082015160a08201526080810151156108ef57600060c0820152610909565b806040015181602001516109039190615690565b60c08201525b8060a0015181606001518360e0015161092291906156a7565b61092c91906156c6565b6101208301515161093d91906156e8565b60e08201515260a081015160c082015161010084015161095d91906156a7565b61096791906156c6565b8261012001516020015161097b91906156e8565b60e082018051602001919091525181525b610100810180516000908190528151602090810182905291516101208401805191909152519091015260016109c086611ab4565b5160018111156109d2576109d2614eab565b146109e2578061012001516109f0565b6109eb85611ab4565b604001515b61014082018190526020015161016082018190528151516402540be40091610a1891906156a7565b610a2291906156c6565b6101808201819052610140820151515110610a445760006101a0820152610a63565b6101408101515151610180820151610a5c9190615690565b6101a08201525b8051602001516101608201516402540be40091610a7f916156a7565b610a8991906156c6565b6101c08201819052610140820151516020015110610aae5760006101e0820152610ad0565b61014081015151602001516101c0820151610ac99190615690565b6101e08201525b610160820151516101a08201511115610aef5761016082015151610af6565b806101a001515b61020082015152610160820151602001516101e08201511115610b225781610160015160200151610b29565b806101e001515b61020090910180516020019190915251915061032d9050565b61032d6000600a611b99565b610b56614013565b610318610b6836849003840184615742565b82611bbf565b604080518082019091526000808252602082015260016000541415610c3d57600060028054610b9c90615242565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc890615242565b8015610c155780601f10610bea57610100808354040283529160200191610c15565b820191906000526020600020905b815481529060010190602001808311610bf857829003601f168201915b5050505050806020019051810190610c2d91906153d9565b9050610c3b60006009611b99565b505b60026000541415610cf857600060028054610c5790615242565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8390615242565b8015610cd05780601f10610ca557610100808354040283529160200191610cd0565b820191906000526020600020905b815481529060010190602001808311610cb357829003601f168201915b5050505050806020019051810190610ce891906154a7565b9050610cf660006009611b99565b505b600660005414156110bd57600060028054610d1290615242565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3e90615242565b8015610d8b5780601f10610d6057610100808354040283529160200191610d8b565b820191906000526020600020905b815481529060010190602001808311610d6e57829003601f168201915b5050505050806020019051810190610da39190615575565b9050610dad614180565b610180820151610dc4576101208201518152610f09565b8161014001518260a001511115610de057816101400151610de6565b8160a001515b602082015261014082015160808301511015610e0757816101400151610e0d565b81608001515b6040820181905260208201511180156080830152610e315760006060820152610e4b565b80604001518160200151610e459190615690565b60608201525b61018082015160a0820152608081015115610e6c57600060c0820152610e86565b80604001518160200151610e809190615690565b60c08201525b8060a0015181606001518360e00151610e9f91906156a7565b610ea991906156c6565b61012083015151610eba91906156e8565b60e08201515260a081015160c0820151610100840151610eda91906156a7565b610ee491906156c6565b82610120015160200151610ef891906156e8565b60e082018051602001919091525181525b61010081018051600090819052815160209081018290529151610120840180519190915251909101526001610f3d85611ab4565b516001811115610f4f57610f4f614eab565b14610f5f57806101200151610f6d565b610f6884611ab4565b604001515b61014082018190526020015161016082018190528151516402540be40091610f9591906156a7565b610f9f91906156c6565b6101808201819052610140820151515110610fc15760006101a0820152610fe0565b6101408101515151610180820151610fd99190615690565b6101a08201525b8051602001516101608201516402540be40091610ffc916156a7565b61100691906156c6565b6101c0820181905261014082015151602001511061102b5760006101e082015261104d565b61014081015151602001516101c08201516110469190615690565b6101e08201525b610160820151516101a0820151111561106c5761016082015151611073565b806101a001515b61020082015152610160820151602001516101e0820151111561109f57816101600151602001516110a6565b806101e001515b610200909101805160200191909152519392505050565b6110c960006009611b99565b919050565b60408051808201909152600080825260208201526110ea614013565b6110f261411f565b6110fa614139565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261112c8284611bbf565b50506080015192915050565b6000611142614013565b61114a614270565b60408051606081018252600080825260208083018290528284019190915282518082019093528183528301919091526111838284613912565b505051919050565b600060016000541415611248576000600280546111a790615242565b80601f01602080910402602001604051908101604052809291908181526020018280546111d390615242565b80156112205780601f106111f557610100808354040283529160200191611220565b820191906000526020600020905b81548152906001019060200180831161120357829003601f168201915b505050505080602001905181019061123891906153d9565b90506112466000600b611b99565b505b600260005414156113035760006002805461126290615242565b80601f016020809104026020016040519081016040528092919081815260200182805461128e90615242565b80156112db5780601f106112b0576101008083540402835291602001916112db565b820191906000526020600020905b8154815290600101906020018083116112be57829003601f168201915b50505050508060200190518101906112f391906154a7565b90506113016000600b611b99565b505b6006600054141561141e5760006002805461131d90615242565b80601f016020809104026020016040519081016040528092919081815260200182805461134990615242565b80156113965780601f1061136b57610100808354040283529160200191611396565b820191906000526020600020905b81548152906001019060200180831161137957829003601f168201915b50505050508060200190518101906113ae9190615575565b90506113b86142a9565b805160009081905281516020908101829052825181840180519190915251015260016113e385611ab4565b5160018111156113f5576113f5614eab565b14611404578060200151611412565b61140d84611ab4565b604001515b60200151949350505050565b6110c96000600b611b99565b60006060600054600280805461143f90615242565b80601f016020809104026020016040519081016040528092919081815260200182805461146b90615242565b80156114b85780601f1061148d576101008083540402835291602001916114b8565b820191906000526020600020905b81548152906001019060200180831161149b57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526114e3614013565b6114eb61411f565b6114f3614139565b6040805160208082018352878252838301919091526001835281518082019092528282528301526115248284611bbf565b50506060015192915050565b600061153a614013565b611542614270565b60408051606081018252600060208083018290528284019190915260018252825180820190935281835283019190915261157c8284613912565b505060200151919050565b61158f614013565b6103186115a1368490038401846157f3565b82613912565b6115af6142d2565b60016000541415611664576000600280546115c990615242565b80601f01602080910402602001604051908101604052809291908181526020018280546115f590615242565b80156116425780601f1061161757610100808354040283529160200191611642565b820191906000526020600020905b81548152906001019060200180831161162557829003601f168201915b505050505080602001905181019061165a91906153d9565b6020015192915050565b6002600054141561170f5760006002805461167e90615242565b80601f01602080910402602001604051908101604052809291908181526020018280546116aa90615242565b80156116f75780601f106116cc576101008083540402835291602001916116f7565b820191906000526020600020905b8154815290600101906020018083116116da57829003601f168201915b505050505080602001905181019061165a91906154a7565b600660005414156117ba5760006002805461172990615242565b80601f016020809104026020016040519081016040528092919081815260200182805461175590615242565b80156117a25780601f10611777576101008083540402835291602001916117a2565b820191906000526020600020905b81548152906001019060200180831161178557829003601f168201915b505050505080602001905181019061165a9190615575565b61059a60006008611b99565b6117ce61433e565b6117d6614013565b6117de61411f565b6117e6614139565b60006020828101829052908252604080518083019091528281529083015261180e8284611bbf565b505060400151919050565b6118296001600054146012611b99565b815161184490158061183d57508251600154145b6013611b99565b60008080556002805461185690615242565b80601f016020809104026020016040519081016040528092919081815260200182805461188290615242565b80156118cf5780601f106118a4576101008083540402835291602001916118cf565b820191906000526020600020905b8154815290600101906020018083116118b257829003601f168201915b50505050508060200190518101906118e791906153d9565b90506118f161437d565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16119443415600f611b99565b6101608201516080830151515161195b91906156e8565b8151526080820180515160209081015183519091015280515160409081015183519015159101525181516119929190600090613c8a565b81602001819052506119b86119b1338460400151856101600151613cfe565b6010611b99565b81516119d0906001600160a01b031633146011611b99565b6119d86143ad565b82516001600160a01b0390811682526020808501518184015260408086015183168185015260608087015184169085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701519385019390935261012080870151938501939093526101408087015193850193909352610160808701519385019390935284820151928401929092526002600055436001559051611a88918391016158d5565b60405160208183030381529060405260029080519060200190611aac929190614438565b505050505050565b611abc614088565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611aeb57611aeb614eab565b1415611b8a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611b2c57611b2c614eab565b6001811115611b3d57611b3d614eab565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b60008082526020820152919050565b816103185760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611bcf6006600054146026611b99565b8151611bea901580611be357508251600154145b6027611b99565b600080805560028054611bfc90615242565b80601f0160208091040260200160405190810160405280929190818152602001828054611c2890615242565b8015611c755780601f10611c4a57610100808354040283529160200191611c75565b820191906000526020600020905b815481529060010190602001808311611c5857829003601f168201915b5050505050806020019051810190611c8d9190615575565b9050611c976144bc565b7f010c9a37a60c8ff8472b11738c290f8f19750659558ef6444c3536e0c96848ce3385604051611cc89291906159a1565b60405180910390a16000602085015151516003811115611cea57611cea614eab565b141561239f57611cfc3415601a611b99565b6101a0820180516020908101515183515281518101518101518351820152815101516040908101518351901515910152518151611d3c9190600190613c8a565b8160200181905250611d5e611d573384606001516000613cfe565b601b611b99565b610180820151611d78576101208201516040820152611eba565b438260a001511115611d8a5743611d90565b8160a001515b606082015261014082015160808301511015611db157816101400151611db7565b81608001515b60808201819052606082015111801560c0830152611ddb57600060a0820152611df5565b80608001518160600151611def9190615690565b60a08201525b61018082015160e082015260c081015115611e17576000610100820152611e32565b80608001518160600151611e2b9190615690565b6101008201525b8060e001518160a001518360e00151611e4b91906156a7565b611e5591906156c6565b61012083015151611e6691906156e8565b6101208201515260e08101516101008083015190840151611e8791906156a7565b611e9191906156c6565b82610120015160200151611ea591906156e8565b61012082018051602001919091525160408201525b61014081018051600090819052815160209081018290529151610160840180519190915251909101526001611eee33611ab4565b516001811115611f0057611f00614eab565b14611f1057806101600151611f1e565b611f1933611ab4565b604001515b6101808201819052602001516101a082018190526040820151516402540be40091611f4991906156a7565b611f5391906156c6565b6101c08201819052610180820151515110611f755760006101e0820152611f94565b61018081015151516101c0820151611f8d9190615690565b6101e08201525b610160820151516101e08201511115611fb35761016082015151611fba565b806101e001515b6102008201526040810151602001516101a08201516402540be40091611fdf916156a7565b611fe991906156c6565b610220820181905261018082015151602001511061200e576000610240820152612030565b61018081015151602001516102208201516120299190615690565b6102408201525b816101600151602001518161024001511115612055578161016001516020015161205c565b8061024001515b6102608201908152610200820180516102808401805191909152915191516020019190915251604051339180156108fc02916000818181858888f193505050501580156120ad573d6000803e3d6000fd5b50610260810151602082015151516120c59190615690565b6102a082018051919091526020808301805151820151835190920191909152515160409081015191519115159181019190915282015161026082015161210d91903390613d16565b610200810151610180820151515161212591906156e8565b6102c082015152610260810151610180820151516020015161214791906156e8565b6102c082018051602090810192909252516102e0830180519190915261018083015182015181518301523360009081526004835260409020805460ff19166001908117825591518051805193830193909355918301516002820155910151600390910155610200810151610160830151516121c29190615690565b61030082015152610260810151610160830151602001516121e39190615690565b6103008201805160209081019290925261028083015161032084018051919091529051815190920191909152516040517f4eee8d2aca6e7e0a6ce9170a8acd0fa570ddea32849b747643fe8ab4d1d513e09161223e916150fe565b60405180910390a180610320015183604001819052507fbad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b338261032001513360405161228c93929190615a10565b60405180910390a161229c614bb9565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e080880151865190910152610100808801518651909101528582015183860180519190915280514390850181905261030088015182519094019390935261018088015181519092019190915251909201919091528201516102a08301516123689190600090613c8a565b602082015160a001526102008201516101c08401516123879190615690565b602082015160c0015261239981613d2f565b5061390c565b60016020850151515160038111156123b9576123b9614eab565b1415612935576020840151516040015161034082015260a08201516101408301516123e69111601c611b99565b610340810151516123fa901515601d611b99565b6124063415601e611b99565b610340810151516101a0830151602001515161242291906156e8565b61036082018051919091526101a08301805160209081015181015183518201529051015160409081015191519115159101526060820151610340820151516124779161247091339190613cfe565b601f611b99565b610180820151612492576101208201516103808201526125e5565b438260a0015111156124a457436124aa565b8160a001515b6103a0820152610140820151608083015110156124cc578161014001516124d2565b81608001515b6103c082018190526103a08201511180156104008301526124fa5760006103e0820152612517565b806103c00151816103a001516125109190615690565b6103e08201525b6101808201516104208201526104008101511561253b576000610440820152612558565b806103c00151816103a001516125519190615690565b6104408201525b806104200151816103e001518360e0015161257391906156a7565b61257d91906156c6565b6101208301515161258e91906156e8565b610460820151526104208101516104408201516101008401516125b191906156a7565b6125bb91906156c6565b826101200151602001516125cf91906156e8565b6104608201805160200191909152516103808201525b610340810151516101808301516125fc91906156e8565b6104808201526104a0810180516000908190528151602090810182905291516104c084018051919091525190910152600161263633611ab4565b51600181111561264857612648614eab565b1461265857806104c00151612666565b61266133611ab4565b604001515b6104e082018190526103408201515160209091015161268591906156e8565b610500820152610340810151516105208201819052610380820151516402540be400916126b291906156a7565b6126bc91906156c6565b6104e082015151516126ce91906156e8565b61054082015152610380810151602001516105208201516402540be400916126f5916156a7565b6126ff91906156c6565b6104e0820151516020015161271491906156e8565b6105408201805160209081019290925251610560830180519190915261050083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516105808401805191909152610480840151815190930192909252905190517f2a178ad1f676cdd8a1b21fc5ccd30ae074938ff8968714ba60016797bde9c4ba916127c69161504f565b60405180910390a16105808101805160608501526103408201515190516040517fe226074f8b6b7f251a6a0fe0fe51760a26d52b6699993672f9fa981b1a54a4ec926128399233926001600160a01b03939093168352602080840192909252805160408401520151606082015260800190565b60405180910390a1612849614bb9565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e08088015186519091015261010080880151865190910152610380860151838601805191909152805143940184905261016088015181519093019290925261048086015182519091015251909101526101a08301516103608301516129139190600190613c8a565b60208201805160a001919091526101c0840151905160c0015261239981613d2f565b600260208501515151600381111561294f5761294f614eab565b1415612f635760208085015151606001516105a08301526105c0820180516000908190528151830181905290516105e084018051919091525190910152600161299733611ab4565b5160018111156129a9576129a9614eab565b146129b957806105e001516129c7565b6129c233611ab4565b604001515b61060082018190526020908101516105a0830151516129e99291101590611b99565b6129f534156021611b99565b6101a08201805160209081015151610620840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051612a409190600190613c8a565b816106400181905250612a63612a5c3384606001516000613cfe565b6022611b99565b610180820151612a7e57610120820151610660820152612bd1565b438260a001511115612a905743612a96565b8160a001515b61068082015261014082015160808301511015612ab857816101400151612abe565b81608001515b6106a082018190526106808201511180156106e0830152612ae65760006106c0820152612b03565b806106a00151816106800151612afc9190615690565b6106c08201525b6101808201516107008201526106e081015115612b27576000610720820152612b44565b806106a00151816106800151612b3d9190615690565b6107208201525b806107000151816106c001518360e00151612b5f91906156a7565b612b6991906156c6565b61012083015151612b7a91906156e8565b61074082015152610700810151610720820151610100840151612b9d91906156a7565b612ba791906156c6565b82610120015160200151612bbb91906156e8565b6107408201805160200191909152516106608201525b6105a081015151610180830151612be89190615690565b6107608201526105a08101515161060082015160200151612c099190615690565b6107808201526105a0810151516106408201516020015151612c2b9190615690565b6107a0820180519190915261064082018051602090810151810151835182015290510151604090810151915191151591015260608201516105a082015151612c7591903390613d16565b6105a0810151516107c08201819052610660820151516402540be40091612c9c91906156a7565b612ca691906156c6565b6107e08201819052610600820151515111612cc8576000610800820152612ce7565b6107e08101516106008201515151612ce09190615690565b6108008201525b6402540be40081610660015160200151826107c00151612d0791906156a7565b612d1191906156c6565b6108208201819052610600820151516020015111612d36576000610840820152612d58565b6108208101516106008201515160200151612d519190615690565b6108408201525b610800810151610860820180519190915261084082015181516020908101919091529051610880830180519190915261078083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516108a08401805191909152610760840151815190930192909252905190517fa32cc556f64a5536d7284897c3e6fe8b6ea57c61472afe61601e23ce41fe6d2591612e1d9161504f565b60405180910390a16108a0810180516080858101919091526105a083015151915160408051338082526020808301969096528351828401529490920151606083015291810192909252517f54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c6509181900360a00190a1612e99614bb9565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e08088015186519091015261010080880151865190910152610660860151838601805191909152805143940184905261016088015181519093019290925261076086015182519091015251909101526106408201516107a08301516129139190600190613c8a565b6003602085015151516003811115612f7d57612f7d614eab565b141561390c5760208085015151608001516108c08301526108e082018051600090819052815183018190529051610900840180519190915251909101526001612fc533611ab4565b516001811115612fd757612fd7614eab565b14612fe757806109000151612ff5565b612ff033611ab4565b604001515b6109208201819052602001516108c0820151516130159110156023611b99565b61302134156024611b99565b6101a0820180516020908101515161094084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161306c9190600190613c8a565b81610960018190525061308f6130883384606001516000613cfe565b6025611b99565b6101808201516130aa576101208201516109808201526131fd565b438260a0015111156130bc57436130c2565b8160a001515b6109a0820152610140820151608083015110156130e4578161014001516130ea565b81608001515b6109c082018190526109a0820151118015610a008301526131125760006109e082015261312f565b806109c00151816109a001516131289190615690565b6109e08201525b610180820151610a20820152610a0081015115613153576000610a40820152613170565b806109c00151816109a001516131699190615690565b610a408201525b80610a200151816109e001518360e0015161318b91906156a7565b61319591906156c6565b610120830151516131a691906156e8565b610a6082015152610a20810151610a408201516101008401516131c991906156a7565b6131d391906156c6565b826101200151602001516131e791906156e8565b610a608201805160200191909152516109808201525b61092081015160200151610a808201819052610980820151516402540be4009161322791906156a7565b61323191906156c6565b610aa08201819052610920820151515110613253576000610ac0820152613272565b6109208101515151610aa082015161326b9190615690565b610ac08201525b61016082015151610ac082015111156132915761016082015151613298565b80610ac001515b610ae082015261098081015160200151610a808201516402540be400916132be916156a7565b6132c891906156c6565b610b0082018190526109208201515160200151106132ed576000610b2082015261330f565b6109208101515160200151610b008201516133089190615690565b610b208201525b8161016001516020015181610b2001511115613334578161016001516020015161333b565b80610b2001515b610b408201908152610ae082018051610b608401805191909152915191516020019190915251604051339180156108fc02916000818181858888f1935050505015801561338c573d6000803e3d6000fd5b50610b4081015161096082015151516133a59190615690565b610b808201805191909152610960820180515160209081015183519091015280515160409081015183519015159101525190516133e59190600090613c8a565b81610ba0018190525061340282604001513383610b400151613d16565b610ae0810151610920820151515161341a91906156e8565b610bc082015152610b40810151610920820151516020015161343c91906156e8565b610bc08201805160209081019290925251610be0830180519190915261092083015182015181518301523360009081526004835260409020805460ff19166001908117825591518051805193830193909355918301516002820155910151600390910155610ae0810151610160830151516134b79190615690565b610c0082015152610b40810151610160830151602001516134d89190615690565b610c0082018051602090810192909252610b60830151610c20840180519190915290519051909101526108c0810151516101808301516135189190615690565b610c408201526108c081015151610be0820151602001516135399190615690565b610c608201526108c081015151610ba0820151602001515161355b9190615690565b610c808201805191909152610ba082018051602090810151810151835182015290510151604090810151915191151591015260608201516108c0820151516135a591903390613d16565b6108c081015151610ca08201819052610980820151516402540be400916135cc91906156a7565b6135d691906156c6565b610cc08201819052610be08201515151116135f8576000610ce0820152613617565b610cc0810151610be082015151516136109190615690565b610ce08201525b6402540be4008161098001516020015182610ca0015161363791906156a7565b61364191906156c6565b610d008201819052610be0820151516020015111613666576000610d20820152613688565b610d00810151610be082015151602001516136819190615690565b610d208201525b610ce0810151610d408201805191909152610d2082015181516020908101919091529051610d608301805191909152610c6083018051825184015233600090815260048452604090819020805460ff191660019081178255935180518051958301959095559385015160028201559284015160039093019290925551610d808401805191909152610c40840151815184015251610da08401805191909152610c20840151815190930192909252905190517f694e0adc9064e28fd4651c25fe91d30036814b76a5d735c9134864370dec9bc19161376491614ffd565b60405180910390a1610da081015160a0840152610c208101516040517fbad2481826a88f4762213af1f78b4aeda7c0d77e4ab574f1c8c76aaf27844a5b916137b0913391908290615a10565b60405180910390a16108c081015151610d8082015160408051338082526020808301959095528351928201929092529290910151606083015260808201527f54945bdcd7fadc4aeb14fbf6a112c091a049253c9f76cabdcd197227bd10c6509060a00160405180910390a1613823614bb9565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855190851690820152608080880151865182015260a08089015187519091015260c0808901518751961695019490945260e080880151865190910152610100808801518651909101526109808601518386018051919091528051439401849052610c00870151815190930192909252610c408601518251909101525190910152610ba0820151610c808301516138ed9190600190613c8a565b602082015160a00152610ae08201516101c08401516123879190615690565b50505050565b6139226002600054146018611b99565b815161393d90158061393657508251600154145b6019611b99565b60008080556002805461394f90615242565b80601f016020809104026020016040519081016040528092919081815260200182805461397b90615242565b80156139c85780601f1061399d576101008083540402835291602001916139c8565b820191906000526020600020905b8154815290600101906020018083116139ab57829003601f168201915b50505050508060200190518101906139e091906154a7565b90506139ea61433e565b7f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc223385604051613a1b929190615a40565b60405180910390a16000602085015151516001811115613a3d57613a3d614eab565b1415613af9578151613a80906001600160a01b03163314613a76578260c001516001600160a01b0316336001600160a01b031614613a79565b60015b6014611b99565b613a8c34156015611b99565b604051600081527f19e9e8d7d862f7a571a39f1438dcb602e1405278075f4177b172511a1e37b27d9060200160405180910390a160008352604082015182516101608401515151613ade929190613d16565b60008080556001819055613af490600290614bd9565b61390c565b6001602085015151516001811115613b1357613b13614eab565b141561390c57613b3c8260c001516001600160a01b0316336001600160a01b0316146016611b99565b613b4e82610120015134146017611b99565b604051600081527f2bccb19e7f54ae7d3d537352e0fd33b1e883391f2dd7db614fa238cbf769bceb9060200160405180910390a16000602080850182905282518290528251810191909152610120830151828201805191909152610140840151905190910152613bbc614bb9565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169082015260608087015185519085169082015260808088018051875183015260a0808a0151885182015260c0808b0151895198169781019790975260e0808b0151895190910152610100808b0151895190910152885186890180519190915291518251870152948801518151909401939093528251600092019190915281514391015261016086015181519092019190915261012085015190519091015261239981613d2f565b613c92614c16565b60005b6002811015613cde57848160028110613cb057613cb0615881565b6020020151828260028110613cc757613cc7615881565b602002015280613cd681615a93565b915050613c95565b5081818460028110613cf257613cf2615881565b60200201529392505050565b6000613d0c83853085613e2d565b90505b9392505050565b613d21838383613f07565b613d2a57600080fd5b505050565b613d37614c61565b8151516001600160a01b03908116825282516020908101518184015283516040908101518316818501528451606090810151841681860152855160809081015190860152855160a09081015181870152865160c09081015190951685870152865160e090810151908701528651610100908101519087015283870180515161012088015280518501516101408801528051840151610160880152805190920151610180870152815101516101a086015251909201516101c08401526006600055436001559051613e0991839101615aae565b60405160208183030381529060405260029080519060200190613d2a929190614438565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613e9491615bcd565b60006040518083038185875af1925050503d8060008114613ed1576040519150601f19603f3d011682016040523d82523d6000602084013e613ed6565b606091505b5091509150613ee782826001613fd8565b5080806020019051810190613efc9190615be9565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613f6691615bcd565b60006040518083038185875af1925050503d8060008114613fa3576040519150601f19603f3d011682016040523d82523d6000602084013e613fa8565b606091505b5091509150613fb982826002613fd8565b5080806020019051810190613fce9190615be9565b9695505050505050565b60608315613fe7575081613d0f565b825115613ff75782518084602001fd5b60405163100960cb60e01b815260048101839052602401611bb6565b6040805160c0810182526000808252602082015290810161403261433e565b8152602001614054604051806040016040528060008152602001600081525090565b8152602001614076604051806040016040528060008152602001600081525090565b81526020016140836140f6565b905290565b6040805160608101825260008082526020820152908101614083614d3d565b60405180606001604052806140ba6142d2565b815260200160008152602001614083604051806040016040528060008152602001600081525090565b60405180602001604052806140836140a7565b60408051608081018252600091810182815260608201929092529081526020810161408361433e565b604051806040016040528060008152602001614083614d5f565b6040805160a0810182526000808252602080830182905283518082018552828152838501528351808201855282815260608401528351908101909352825290608082015290565b604080516102608101909152600061022082018181526102408301919091528190815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016141ef604051806040016040528060008152602001600081525090565b8152602001614211604051806040016040528060008152602001600081525090565b815260200161421e614d3d565b815260200161422b614d3d565b81526020016000815260200160008152602001600081526020016000815260200160008152602001614083604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161408360408051608081018252600060208201818152928201819052606082015290815290565b604080516080810182526000918101828152606082019290925290815260208101614083614d3d565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200161431a604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160006001600160a01b031681525090565b60408051608081018252600091810182815260608201929092529081908152602001614083604051806040016040528060008152602001600081525090565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101614083614c16565b60405180610180016040528060006001600160a01b031681526020016143d16142d2565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001614083614c16565b82805461444490615242565b90600052602060002090601f01602090048101928261446657600085556144ac565b82601f1061447f57805160ff19168380011785556144ac565b828001600101855582156144ac579182015b828111156144ac578251825591602001919060010190614491565b506144b8929150614d72565b5090565b60408051610e2081019091526000610dc08201818152610de08301829052610e008301919091528152602081016144f1614c16565b8152602001614513604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001614561604051806040016040528060008152602001600081525090565b8152602001614583604051806040016040528060008152602001600081525090565b8152602001614590614d3d565b815260200161459d614d3d565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016145f0604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001614632604051806040016040528060008152602001600081525090565b815260200161463f614d3d565b8152602001614661604051806040016040528060008152602001600081525090565b815260200161466e61433e565b81526020016146896040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016146cb604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001614719604051806040016040528060008152602001600081525090565b815260200160008152602001614742604051806040016040528060008152602001600081525090565b815260200161474f614d3d565b815260200161475c614d3d565b8152602001600081526020016000815260200161478c604051806040016040528060008152602001600081525090565b8152602001614799614d3d565b81526020016147bb604051806040016040528060008152602001600081525090565b81526020016147d66040518060200160405280600081525090565b81526020016147f8604051806040016040528060008152602001600081525090565b8152602001614805614d3d565b8152602001614812614d3d565b8152604080516060810182526000808252602082810182905292820152910190815260200161483f614c16565b8152602001614861604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016148af604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016148e8604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200161492d604051806040016040528060008152602001600081525090565b815260200161493a614d3d565b815260200161495c604051806040016040528060008152602001600081525090565b81526020016149776040518060200160405280600081525090565b8152602001614999604051806040016040528060008152602001600081525090565b81526020016149a6614d3d565b81526020016149b3614d3d565b815260408051606081018252600080825260208281018290529282015291019081526020016149e0614c16565b8152602001614a02604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001614a50604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614aa3604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001614ad0614c16565b8152602001614af2604051806040016040528060008152602001600081525090565b8152602001614aff614d3d565b8152602001614b21604051806040016040528060008152602001600081525090565b8152602001614b2e61433e565b81526020016000815260200160008152602001614b67604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001614bac604051806040016040528060008152602001600081525090565b8152602001614054614d3d565b6040518060400160405280614bcc614d87565b8152602001614083614dfd565b508054614be590615242565b6000825580601f10614bf5575050565b601f016020900490600052602060002090810190614c139190614d72565b50565b60405180604001604052806002905b614c4b604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081614c255790505090565b604051806101e0016040528060006001600160a01b03168152602001614c856142d2565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001614cf3604051806040016040528060008152602001600081525090565b815260200160008152602001614d1c604051806040016040528060008152602001600081525090565b815260200160008152602001614d30614c16565b8152602001600081525090565b6040805160808101825260009181018281526060820192909252908190614d30565b6040518060200160405280614083614139565b5b808211156144b85760008155600101614d73565b60405180610120016040528060006001600160a01b03168152602001614dab6142d2565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b604080516101208101909152600060e082018181526101008301919091528190815260200160008152602001614e46604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614d30614c16565b600060408284031215614e7357600080fd5b50919050565b6001600160a01b0381168114614c1357600080fd5b600060208284031215614ea057600080fd5b8135613d0f81614e79565b634e487b7160e01b600052602160045260246000fd5b60028110614c1357614c13614eab565b815160a0820190614ee181614ec1565b808352506020830151151560208301526040830151614f0e60408401825180518252602090810151910152565b602081015160808401525092915050565b60018060a01b038082511683528060208301511660208401526040820151614f54604085018280518252602090810151910152565b5060608201516080840152608082015160a08401528060a08301511660c0840152505050565b600061014082019050614f8e828451614f1f565b60208381015160e084015260408401518051610100850152908101516101208401525b5092915050565b600060208284031215614fca57600080fd5b5035919050565b614fe682825180518252602090810151910152565b602090810151805160408401520151606090910152565b8151805182526020908101519082015260c081016020830151614fb16040840182614fd1565b6000806040838503121561503657600080fd5b823561504181614e79565b946020939093013593505050565b81518152602080830151908201526040810161032d565b600060c08284031215614e7357600080fd5b60005b8381101561509357818101518382015260200161507b565b8381111561390c5750506000910152565b82815260406020820152600082518060408401526150c9816060850160208701615078565b601f01601f1916919091016060019392505050565b600060808284031215614e7357600080fd5b60e0810161032d8284614f1f565b6080810161032d8284614fd1565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156151455761514561510c565b60405290565b6040516060810167ffffffffffffffff811182821017156151455761514561510c565b604051610180810167ffffffffffffffff811182821017156151455761514561510c565b6040516101e0810167ffffffffffffffff811182821017156151455761514561510c565b6040516020810167ffffffffffffffff811182821017156151455761514561510c565b60405160a0810167ffffffffffffffff811182821017156151455761514561510c565b8015158114614c1357600080fd5b60006040828403121561521c57600080fd5b615224615122565b823581526020830135615236816151fc565b60208201529392505050565b600181811c9082168061525657607f821691505b60208210811415614e7357634e487b7160e01b600052602260045260246000fd5b80516110c981614e79565b60006040828403121561529457600080fd5b61529c615122565b9050815181526020820151602082015292915050565b600060e082840312156152c457600080fd5b60405160c0810181811067ffffffffffffffff821117156152e7576152e761510c565b806040525080915082516152fa81614e79565b8152602083015161530a81614e79565b602082015261531c8460408501615282565b60408201526080830151606082015260a0830151608082015260c083015161534381614e79565b60a0919091015292915050565b600082601f83011261536157600080fd5b615369615122565b8060c084018581111561537b57600080fd5b845b818110156153ce57606081880312156153965760008081fd5b61539e61514b565b81518152602080830151818301526040808401516153bb816151fc565b908301529085529093019260600161537d565b509095945050505050565b60006102e082840312156153ec57600080fd5b6153f461516e565b6153fd83615277565b815261540c84602085016152b2565b602082015261010061541f818501615277565b6040830152610120615432818601615277565b606084015261014061544687828801615350565b608085015261020086015160a085015261022086015160c085015261546e6102408701615277565b60e085015261026086015192840192909252610280850151908301526102a0840151908201526102c09092015161016083015250919050565b60006102e082840312156154ba57600080fd5b6154c261516e565b6154cb83615277565b81526154da84602085016152b2565b60208201526101006154ed818501615277565b6040830152610120615500818601615277565b60608401526101408086015160808501526101608087015160a086015261552a6101808801615277565b60c08601526101a087015160e08601526101c0870151848601526101e08701518386015261020087015182860152615566886102208901615350565b90850152509195945050505050565b6000610380828403121561558857600080fd5b615590615192565b61559983615277565b81526155a884602085016152b2565b60208201526101006155bb818501615277565b60408301526101206155ce818601615277565b60608401526101408086015160808501526101608087015160a08601526101806155f9818901615277565b60c08701526101a08089015160e08801526101c0808a0151878901526156238b6101e08c01615282565b868901526102208a01518589015261563f8b6102408c01615282565b848901526102808a01518389015261565b8b6102a08c01615350565b828901526103608a015181890152505050505050508091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156156a2576156a261567a565b500390565b60008160001904831182151516156156c1576156c161567a565b500290565b6000826156e357634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156156fb576156fb61567a565b500190565b60006020828403121561571257600080fd5b6040516020810181811067ffffffffffffffff821117156157355761573561510c565b6040529135825250919050565b600081830360c081121561575557600080fd5b61575d615122565b8335815260a0601f198301121561577357600080fd5b61577b6151b6565b91506157856151d9565b60208501356004811061579757600080fd5b815260408501356157a7816151fc565b60208201526157b98660608701615700565b60408201526157cb8660808701615700565b60608201526157dd8660a08701615700565b6080820152825260208101919091529392505050565b6000818303608081121561580657600080fd5b61580e615122565b833581526060601f198301121561582457600080fd5b61582c6151b6565b915061583661514b565b60208501356002811061584857600080fd5b81526040850135615858816151fc565b6020820152606085013561586b816151fc565b6040820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b8060005b600281101561390c57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161589b565b81516001600160a01b031681526102e0810160208301516158f96020840182614f1f565b506040830151610100615916818501836001600160a01b03169052565b60608501519150610120615934818601846001600160a01b03169052565b60808601516101408681019190915260a08701516101608088019190915260c08801516001600160a01b031661018088015260e08801516101a0880152928701516101c0870152908601516101e08601528501516102008501528401519050614fb1610220840182615897565b6001600160a01b0383168152815160208083019190915282015151805160e083019190600481106159d4576159d4614eab565b80604085015250602081015115156060840152604081015151608084015260608101515160a084015260808101515160c0840152509392505050565b6001600160a01b03848116825260c0820190615a2f6020840186614fd1565b80841660a084015250949350505050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190615a6c81614ec1565b80604085015250602081015115156060840152604081015115156080840152509392505050565b6000600019821415615aa757615aa761567a565b5060010190565b81516001600160a01b0316815261038081016020830151615ad26020840182614f1f565b506040830151610100615aef818501836001600160a01b03169052565b60608501519150610120615b0d818601846001600160a01b03169052565b60808601519250610140838187015260a08701519350610160848188015260c08801519450610180615b49818901876001600160a01b03169052565b60e08901516101a089810191909152948901516101c0808a01919091529389015180516101e08a01526020908101516102008a01529289015161022089015290880151805161024089015290910151610260870152860151610280860152908501519150615bbb6102a0850183615897565b80850151610360850152505092915050565b60008251615bdf818460208701615078565b9190910192915050565b600060208284031215615bfb57600080fd5b8151613d0f816151fc56fea26469706673582212209fd7e65af647b47efb9bb40cf0961264d375942acbdb68e6bfca16820da1f65e64736f6c634300080c0033`,
  BytecodeLen: 26471,
  Which: `oD`,
  version: 7,
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
    at: './staker.rsh:101:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './staker.rsh:113:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:120:13:after expr stmt semicolon',
    fs: ['at ./staker.rsh:126:42:application call to "doAbort" (defined at: ./staker.rsh:117:22:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './staker.rsh:120:13:after expr stmt semicolon',
    fs: ['at ./staker.rsh:325:10:application call to "doAbort" (defined at: ./staker.rsh:117:22:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './staker.rsh:163:19:after expr stmt semicolon',
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
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw,
    withdrawAndHarvest: Staker_withdrawAndHarvest
    }
  };
