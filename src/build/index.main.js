// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc6 = stdlib.T_Object({
    balA: ctc2,
    balB: ctc2
    });
  const ctc7 = stdlib.T_Object({
    addr: ctc0,
    fee: ctc2,
    lpFee: ctc2,
    totFee: ctc2
    });
  
  return {
    infos: {
      Tokens: {
        aBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2929;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        aTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              return (await ((async () => {
                
                
                return v2802;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2802;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        bBal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2931;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        bTok: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              return (await ((async () => {
                
                
                return v2803;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2803;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        liquidityToken: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              return (await ((async () => {
                
                
                return v2838;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2838;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        minted: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2877;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        protocolBals: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2878;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          },
        protocolInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v2801, v2802, v2803, v2806, v2838, v2866] = svs;
              return (await ((async () => {
                
                const v2828 = {
                  addr: v2806,
                  fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
                  lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
                  totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
                  };
                
                return v2828;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = svs;
              return (await ((async () => {
                
                
                return v2879;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc7
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc5],
      4: [ctc1, ctc1, ctc1, ctc6, ctc2, ctc6, ctc7, ctc5, ctc2, ctc2]
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Data({
    None: ctc4,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Struct([['receiver', ctc0], ['newHarvesterAddr', ctc5], ['newProtocolFee', ctc7], ['newProviderFee', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Data({
    Harvester_harvest0_174: ctc9,
    Provider_deposit0_174: ctc10,
    Provider_withdraw0_174: ctc11,
    Trader_swapAForB0_174: ctc12,
    Trader_swapBForA0_174: ctc12
    });
  const ctc14 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc6, ctc6, ctc6]);
  const ctc16 = stdlib.T_Bool;
  const ctc17 = stdlib.T_Tuple([ctc6, ctc6, ctc16]);
  const ctc18 = stdlib.T_Array(ctc17, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  
  
  const v2773 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v2774 = [v2773, v2773, v2773];
  const v2791 = stdlib.protect(ctc0, interact.humbleAddr, 'for Admin\'s interact field humbleAddr');
  const v2792 = stdlib.protect(ctc1, interact.ltName, 'for Admin\'s interact field ltName');
  const v2793 = stdlib.protect(ctc2, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v2794 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v2795 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v2798 = stdlib.tokenEq(v2794, v2795);
  const v2799 = v2798 ? false : true;
  stdlib.assert(v2799, {
    at: './index.rsh:41:11:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v2800 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:44:23:decimal', stdlib.UInt_max, 10000));
  stdlib.assert(v2800, {
    at: './index.rsh:44:11:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2794, v2795, v2792, v2793, v2791],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2802, v2803, v2804, v2805, v2806], secs: v2808, time: v2807, didSend: v79, from: v2801 } = txn1;
      
      const v2809 = stdlib.tokenEq(v2802, v2803);
      const v2810 = v2809 ? false : true;
      ;
      const v2811 = v2774[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0)];
      const v2813 = v2811[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v2814 = v2811[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 2)];
      const v2815 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2813, v2814];
      const v2816 = stdlib.Array_set(v2774, stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0), v2815);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v2802
        });
      const v2818 = v2816[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v2820 = v2818[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v2821 = v2818[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 2)];
      const v2822 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2820, v2821];
      const v2823 = stdlib.Array_set(v2816, stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1), v2822);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v2803
        });
      ;
      const v2827 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:55:22:decimal', stdlib.UInt_max, 10000));
      ;
      const v2835 = '                                                                                                ';
      const v2836 = '                                ';
      const v2837 = stdlib.simTokenNew(sim_r, v2804, v2805, v2835, v2836, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v2838 = await txn1.getOutput('internal', 'v2837', ctc3, v2837);
      const v2839 = [v2802, v2803];
      const v2840 = await stdlib.Array_asyncReduce([v2839], false, async([v2842], v2841, v2843) => {
        const v2844 = stdlib.tokenEq(v2838, v2842);
        const v2846 = v2841 ? v2841 : v2844;
        
        return v2846;})
      const v2847 = v2840 ? false : true;
      ;
      const v2848 = v2823[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
      const v2850 = v2848[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 1)];
      const v2851 = v2848[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
      const v2852 = [stdlib.UInt_max, v2850, v2851];
      const v2853 = stdlib.Array_set(v2823, stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2), v2852);
      const v2855 = v2853[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
      const v2856 = v2855[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 0)];
      const v2858 = v2855[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
      const v2859 = [v2856, stdlib.UInt_max, v2858];
      const v2860 = stdlib.Array_set(v2853, stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2), v2859);
      const v2861 = v2860[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
      const v2862 = v2861[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 0)];
      const v2863 = v2861[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 1)];
      const v2865 = [v2862, v2863, false];
      const v2866 = stdlib.Array_set(v2860, stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2), v2865);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v2802, v2803, v2804, v2805, v2806], secs: v2808, time: v2807, didSend: v79, from: v2801 } = txn1;
  const v2809 = stdlib.tokenEq(v2802, v2803);
  const v2810 = v2809 ? false : true;
  stdlib.assert(v2810, {
    at: './index.rsh:48:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v2811 = v2774[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0)];
  const v2813 = v2811[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1)];
  const v2814 = v2811[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 2)];
  const v2815 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2813, v2814];
  const v2816 = stdlib.Array_set(v2774, stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 0), v2815);
  ;
  const v2818 = v2816[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1)];
  const v2820 = v2818[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1)];
  const v2821 = v2818[stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 2)];
  const v2822 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v2820, v2821];
  const v2823 = stdlib.Array_set(v2816, stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, 1), v2822);
  ;
  ;
  const v2827 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:55:22:decimal', stdlib.UInt_max, 10000));
  stdlib.assert(v2827, {
    at: './index.rsh:55:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v2835 = '                                                                                                ';
  const v2836 = '                                ';
  const v2837 = undefined /* TokenNew */;
  const v2838 = await txn1.getOutput('internal', 'v2837', ctc3, v2837);
  const v2839 = [v2802, v2803];
  const v2840 = await stdlib.Array_asyncReduce([v2839], false, async([v2842], v2841, v2843) => {
    const v2844 = stdlib.tokenEq(v2838, v2842);
    const v2846 = v2841 ? v2841 : v2844;
    
    return v2846;})
  const v2847 = v2840 ? false : true;
  stdlib.assert(v2847, {
    at: './index.rsh:67:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v2848 = v2823[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
  const v2850 = v2848[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 1)];
  const v2851 = v2848[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
  const v2852 = [stdlib.UInt_max, v2850, v2851];
  const v2853 = stdlib.Array_set(v2823, stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2), v2852);
  const v2855 = v2853[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
  const v2856 = v2855[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 0)];
  const v2858 = v2855[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
  const v2859 = [v2856, stdlib.UInt_max, v2858];
  const v2860 = stdlib.Array_set(v2853, stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2), v2859);
  const v2861 = v2860[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2)];
  const v2862 = v2861[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 0)];
  const v2863 = v2861[stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 1)];
  const v2865 = [v2862, v2863, false];
  const v2866 = stdlib.Array_set(v2860, stdlib.checkedBigNumberify('./index.rsh:67:25:application', stdlib.UInt_max, 2), v2865);
  const txn2 = await (ctc.sendrecv({
    args: [v2801, v2802, v2803, v2806, v2838, v2866],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2807,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v2869, time: v2868, didSend: v111, from: v2867 } = txn2;
      
      ;
      const v2870 = stdlib.addressEq(v2801, v2867);
      ;
      
      const v2875 = {
        balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      const v2876 = {
        addr: v2806,
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
        };
      const v2877 = stdlib.checkedBigNumberify('./index.rsh:79:22:decimal', stdlib.UInt_max, 0);
      const v2878 = v2875;
      const v2879 = v2876;
      const v2880 = v2868;
      const v2886 = v2866;
      
      if (await (async () => {
        
        return true;})()) {
        const v2928 = v2886[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v2929 = v2928[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v2930 = v2886[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
        const v2931 = v2930[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2803
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2802
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
    tys: [ctc0, ctc3, ctc3, ctc0, ctc3, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2869, time: v2868, didSend: v111, from: v2867 } = txn2;
  ;
  const v2870 = stdlib.addressEq(v2801, v2867);
  stdlib.assert(v2870, {
    at: './index.rsh:72:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v2838), {
    at: './index.rsh:73:47:application',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:17:function exp)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v2875 = {
    balA: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    balB: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
    };
  const v2876 = {
    addr: v2806,
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5),
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30)
    };
  let v2877 = stdlib.checkedBigNumberify('./index.rsh:79:22:decimal', stdlib.UInt_max, 0);
  let v2878 = v2875;
  let v2879 = v2876;
  let v2880 = v2868;
  let v2886 = v2866;
  
  while (await (async () => {
    
    return true;})()) {
    const v2928 = v2886[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
    const v2929 = v2928[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
    const v2930 = v2886[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
    const v2931 = v2930[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn3;
    switch (v3523[0]) {
      case 'Harvester_harvest0_174': {
        const v3526 = v3523[1];
        undefined /* setApiDetails */;
        ;
        const v3641 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v3642 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v3646 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v3647 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v3648 = [v3642, v3646, v3647];
        const v3649 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v3648);
        ;
        const v3650 = v3649[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v3651 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v3655 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v3656 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v3657 = [v3651, v3655, v3656];
        const v3658 = stdlib.Array_set(v3649, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v3657);
        ;
        const v3659 = v3658[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v3660 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v3664 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v3665 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v3666 = [v3660, v3664, v3665];
        const v3667 = stdlib.Array_set(v3658, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v3666);
        ;
        const v3669 = v3526[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
        const v3670 = v2879.addr;
        const v3671 = v2879.fee;
        const v3672 = v2879.lpFee;
        const v3673 = v2878.balA;
        const v3674 = v2878.balB;
        const v3675 = v3669.newHarvesterAddr;
        const v3676 = v3669.newProtocolFee;
        const v3677 = v3669.newProviderFee;
        const v3678 = v3669.receiver;
        const v3679 = stdlib.addressEq(v3522, v3670);
        stdlib.assert(v3679, {
          at: './util.rsh:282:10:application',
          fs: ['at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
          msg: 'Thou art not the harvester                                      ',
          who: 'Admin'
          });
        const v3682 = v3667[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0)];
        const v3683 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0)];
        const v3687 = stdlib.sub(v3683, v3673);
        const v3690 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 1)];
        const v3691 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 2)];
        const v3692 = [v3687, v3690, v3691];
        const v3693 = stdlib.Array_set(v3667, stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0), v3692);
        ;
        const v3698 = v3693[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
        const v3699 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
        const v3703 = stdlib.sub(v3699, v3674);
        const v3706 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
        const v3707 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 2)];
        const v3708 = [v3703, v3706, v3707];
        const v3709 = stdlib.Array_set(v3693, stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1), v3708);
        ;
        const v3710 = [v3673, v3674];
        await txn3.getOutput('Harvester_harvest', 'v3710', ctc12, v3710);
        let v3716;
        switch (v3675[0]) {
          case 'None': {
            const v3717 = v3675[1];
            v3716 = v3670;
            
            break;
            }
          case 'Some': {
            const v3718 = v3675[1];
            v3716 = v3718;
            
            break;
            }
          }
        let v3719;
        switch (v3676[0]) {
          case 'None': {
            const v3720 = v3676[1];
            v3719 = v3671;
            
            break;
            }
          case 'Some': {
            const v3721 = v3676[1];
            v3719 = v3721;
            
            break;
            }
          }
        let v3722;
        switch (v3677[0]) {
          case 'None': {
            const v3723 = v3677[1];
            v3722 = v3672;
            
            break;
            }
          case 'Some': {
            const v3724 = v3677[1];
            v3722 = v3724;
            
            break;
            }
          }
        const v3726 = stdlib.add(v3719, v3722);
        const v3730 = stdlib.add(v3722, v3719);
        const v3731 = stdlib.eq(v3726, v3730);
        const v3732 = stdlib.lt(v3726, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
        const v3733 = v3731 ? v3732 : false;
        const v3734 = stdlib.gt(v3726, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
        const v3735 = v3733 ? v3734 : false;
        stdlib.assert(v3735, {
          at: './util.rsh:96:4:application',
          fs: ['at ./util.rsh:295:21:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3736 = {
          addr: v3716,
          fee: v3719,
          lpFee: v3722,
          totFee: v3726
          };
        const cv2877 = v2877;
        const cv2878 = v2875;
        const cv2879 = v3736;
        const cv2880 = v3524;
        const cv2886 = v3709;
        
        v2877 = cv2877;
        v2878 = cv2878;
        v2879 = cv2879;
        v2880 = cv2880;
        v2886 = cv2886;
        
        continue;
        break;
        }
      case 'Provider_deposit0_174': {
        const v4110 = v3523[1];
        undefined /* setApiDetails */;
        const v4111 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
        const v4112 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
        const v4113 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
        ;
        const v4238 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4239 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4243 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4244 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4245 = [v4239, v4243, v4244];
        const v4246 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v4245);
        ;
        const v4247 = v4246[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4248 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4249 = stdlib.add(v4248, v4111);
        const v4252 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4253 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4254 = [v4249, v4252, v4253];
        const v4255 = stdlib.Array_set(v4246, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v4254);
        ;
        const v4256 = v4255[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4257 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4258 = stdlib.add(v4257, v4112);
        const v4261 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4262 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4263 = [v4258, v4261, v4262];
        const v4264 = stdlib.Array_set(v4255, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v4263);
        ;
        const v4345 = stdlib.gt(v4111, stdlib.checkedBigNumberify('./index.rsh:177:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4345, {
          at: './index.rsh:177:18:application',
          fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'amtA > 0',
          who: 'Admin'
          });
        const v4346 = stdlib.gt(v4112, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v4346, {
          at: './index.rsh:178:18:application',
          fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'amtB > 0',
          who: 'Admin'
          });
        const v4347 = v4264[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v4348 = v4347[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v4349 = v2878.balA;
        const v4350 = stdlib.sub(v4348, v4349);
        const v4351 = v4264[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
        const v4352 = v4351[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
        const v4353 = v2878.balB;
        const v4354 = stdlib.sub(v4352, v4353);
        const v4357 = stdlib.eq(v2877, stdlib.checkedBigNumberify('./index.rsh:185:30:decimal', stdlib.UInt_max, 0));
        let v4358;
        if (v4357) {
          const v4359 = v4264[stdlib.checkedBigNumberify('./index.rsh:186:70:application', stdlib.UInt_max, 2)];
          const v4360 = v4359[stdlib.checkedBigNumberify('./index.rsh:186:70:application', stdlib.UInt_max, 0)];
          const v4362 = stdlib.muldiv(v4111, v4112, v4113);
          const v4363 = stdlib.ge(v4362, v4113);
          stdlib.assert(v4363, {
            at: './util.rsh:189:4:application',
            fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
            who: 'Admin'
            });
          const v4364 = stdlib.le(v4113, v4360);
          stdlib.assert(v4364, {
            at: './util.rsh:190:4:application',
            fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'minted <= poolBalance                                           ',
            who: 'Admin'
            });
          v4358 = v4113;
          }
        else {
          const v4365 = stdlib.sub(v4350, v4111);
          const v4366 = stdlib.sub(v4354, v4112);
          const v4367 = v4264[stdlib.checkedBigNumberify('./index.rsh:187:92:application', stdlib.UInt_max, 2)];
          const v4368 = v4367[stdlib.checkedBigNumberify('./index.rsh:187:92:application', stdlib.UInt_max, 0)];
          const v4371 = stdlib.muldiv(v4111, v2877, v4365);
          const v4372 = stdlib.muldiv(v4112, v2877, v4366);
          const v4373 = stdlib.lt(v4371, v4372);
          const v4374 = v4373 ? v4371 : v4372;
          const v4375 = stdlib.le(v4374, v4368);
          stdlib.assert(v4375, {
            at: './util.rsh:170:4:application',
            fs: ['at ./index.rsh:187:34:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
            msg: 'result <= poolBalance                                           ',
            who: 'Admin'
            });
          v4358 = v4374;
          }
        const v4376 = v4264[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2)];
        const v4377 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 0)];
        const v4381 = stdlib.sub(v4377, v4358);
        const v4384 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 1)];
        const v4385 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2)];
        const v4386 = [v4381, v4384, v4385];
        const v4387 = stdlib.Array_set(v4264, stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2), v4386);
        ;
        const v4388 = stdlib.add(v2877, v4358);
        await txn3.getOutput('Provider_deposit', 'v4358', ctc6, v4358);
        const cv2877 = v4388;
        const cv2878 = v2878;
        const cv2879 = v2879;
        const cv2880 = v3524;
        const cv2886 = v4387;
        
        v2877 = cv2877;
        v2878 = cv2878;
        v2879 = cv2879;
        v2880 = cv2880;
        v2886 = cv2886;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_174': {
        const v4707 = v3523[1];
        undefined /* setApiDetails */;
        const v4708 = v4707[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
        const v4710 = v2886[stdlib.checkedBigNumberify('./index.rsh:121:47:application', stdlib.UInt_max, 2)];
        const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:121:47:application', stdlib.UInt_max, 0)];
        ;
        const v4830 = stdlib.add(v4711, v4708);
        const v4833 = v4710[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4834 = v4710[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4835 = [v4830, v4833, v4834];
        const v4836 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v4835);
        ;
        const v4837 = v4836[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4838 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4842 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4843 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4844 = [v4838, v4842, v4843];
        const v4845 = stdlib.Array_set(v4836, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v4844);
        ;
        const v4846 = v4845[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4847 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v4851 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v4852 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v4853 = [v4847, v4851, v4852];
        const v4854 = stdlib.Array_set(v4845, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v4853);
        ;
        const v4991 = v4854[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v4992 = v4991[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v4993 = v2878.balA;
        const v4994 = stdlib.sub(v4992, v4993);
        const v4995 = v4854[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
        const v4996 = v4995[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
        const v4997 = v2878.balB;
        const v4998 = stdlib.sub(v4996, v4997);
        const v5003 = stdlib.muldiv(v4708, v4994, v2877);
        const v5004 = stdlib.le(v5003, v4994);
        stdlib.assert(v5004, {
          at: './index.rsh:135:18:application',
          fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5012 = stdlib.sub(v4992, v5003);
        const v5015 = v4991[stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 1)];
        const v5016 = v4991[stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 2)];
        const v5017 = [v5012, v5015, v5016];
        const v5018 = stdlib.Array_set(v4854, stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 0), v5017);
        ;
        const v5019 = stdlib.muldiv(v4708, v4998, v2877);
        const v5020 = stdlib.le(v5019, v4998);
        stdlib.assert(v5020, {
          at: './index.rsh:140:18:application',
          fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5021 = v5018[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1)];
        const v5022 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 0)];
        const v5026 = stdlib.sub(v5022, v5019);
        const v5029 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1)];
        const v5030 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 2)];
        const v5031 = [v5026, v5029, v5030];
        const v5032 = stdlib.Array_set(v5018, stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1), v5031);
        ;
        const v5033 = stdlib.sub(v2877, v4708);
        const v5034 = [v5003, v5019];
        await txn3.getOutput('Provider_withdraw', 'v5034', ctc14, v5034);
        const cv2877 = v5033;
        const cv2878 = v2878;
        const cv2879 = v2879;
        const cv2880 = v3524;
        const cv2886 = v5032;
        
        v2877 = cv2877;
        v2878 = cv2878;
        v2879 = cv2879;
        v2880 = cv2880;
        v2886 = cv2886;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_174': {
        const v5297 = v3523[1];
        undefined /* setApiDetails */;
        const v5298 = v5297[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
        const v5299 = v5297[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
        ;
        const v5418 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v5419 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v5423 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v5424 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v5425 = [v5419, v5423, v5424];
        const v5426 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v5425);
        ;
        const v5427 = v5426[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v5428 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v5429 = stdlib.add(v5428, v5298);
        const v5432 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v5433 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v5434 = [v5429, v5432, v5433];
        const v5435 = stdlib.Array_set(v5426, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v5434);
        ;
        const v5436 = v5435[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v5437 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v5441 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v5442 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v5443 = [v5437, v5441, v5442];
        const v5444 = stdlib.Array_set(v5435, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v5443);
        ;
        const v5634 = v5444[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v5635 = v5634[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v5636 = v2878.balA;
        const v5637 = stdlib.sub(v5635, v5636);
        const v5638 = v5444[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
        const v5639 = v5638[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
        const v5640 = v2878.balB;
        const v5641 = stdlib.sub(v5639, v5640);
        const v5642 = stdlib.lt(v5298, v5637);
        stdlib.assert(v5642, {
          at: './util.rsh:235:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v5643 = stdlib.gt(v5298, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v5643, {
          at: './util.rsh:238:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v5644 = stdlib.sub(v5637, v5298);
        const v5645 = v2879.fee;
        const v5647 = v2879.totFee;
        const v5650 = stdlib.mul(v5645, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
        const v5651 = stdlib.div(v5650, v5647);
        const v5668 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v5647);
        const v5672 = stdlib.mul(v5298, v5668);
        const v5675 = stdlib.mul(v5644, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
        const v5678 = stdlib.add(v5675, v5672);
        const v5679 = stdlib.muldiv(v5672, v5641, v5678);
        const v5680 = stdlib.gt(v5679, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v5680, {
          at: './util.rsh:124:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v5683 = stdlib.add(v5644, v5298);
        const v5684 = stdlib.gt(v5683, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v5684, {
          at: './util.rsh:67:4:application',
          fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5685 = stdlib.muldiv(v5298, v5641, v5683);
        const v5687 = stdlib.sub(v5685, v5679);
        const v5688 = stdlib.muldiv(v5298, v5645, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
        const v5692 = stdlib.mul(v5687, v5651);
        const v5693 = stdlib.div(v5692, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
        const v5694 = stdlib.le(v5693, v5687);
        stdlib.assert(v5694, {
          at: './util.rsh:130:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v5696 = stdlib.le(v5688, v5683);
        stdlib.assert(v5696, {
          at: './util.rsh:131:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'pFeeIn <= reserveIn',
          who: 'Admin'
          });
        const v5697 = stdlib.le(v5693, v5641);
        stdlib.assert(v5697, {
          at: './util.rsh:132:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'pFeeOut <= reserveOut',
          who: 'Admin'
          });
        const v5698 = stdlib.muldiv(v5693, v5644, v5641);
        const v5699 = stdlib.ge(v5698, v5688);
        const v5700 = [v5679, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v5693];
        const v5701 = [v5679, v5688, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v5702 = v5699 ? v5700 : v5701;
        const v5703 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
        const v5704 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
        const v5705 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
        const v5706 = stdlib.ge(v5703, v5299);
        stdlib.assert(v5706, {
          at: './util.rsh:240:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v5707 = stdlib.le(v5703, v5641);
        stdlib.assert(v5707, {
          at: './util.rsh:241:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v5713 = stdlib.sub(v5639, v5703);
        const v5716 = v5638[stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 1)];
        const v5717 = v5638[stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 2)];
        const v5718 = [v5713, v5716, v5717];
        const v5719 = stdlib.Array_set(v5444, stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 1), v5718);
        ;
        const v5721 = v5719[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
        const v5722 = v5721[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
        const v5724 = stdlib.sub(v5722, v5640);
        const v5726 = stdlib.gt(v5644, v5641);
        const v5727 = v5726 ? v5644 : v5641;
        const v5728 = stdlib.lt(v5644, v5641);
        const v5729 = v5728 ? v5644 : v5641;
        const v5730 = stdlib.muldiv(v5637, v5724, v5727);
        const v5731 = stdlib.ge(v5730, v5729);
        stdlib.assert(v5731, {
          at: './util.rsh:250:10:application',
          fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v5735 = stdlib.add(v5636, v5704);
        const v5739 = stdlib.add(v5640, v5705);
        const v5740 = {
          balA: v5735,
          balB: v5739
          };
        const v5747 = [v5703, v5704, v5705, v5724, v5637];
        await txn3.getOutput('Trader_swapAForB', 'v5747', ctc15, v5747);
        const cv2877 = v2877;
        const cv2878 = v5740;
        const cv2879 = v2879;
        const cv2880 = v3524;
        const cv2886 = v5719;
        
        v2877 = cv2877;
        v2878 = cv2878;
        v2879 = cv2879;
        v2880 = cv2880;
        v2886 = cv2886;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_174': {
        const v5887 = v3523[1];
        undefined /* setApiDetails */;
        const v5888 = v5887[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
        const v5889 = v5887[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
        ;
        const v6008 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v6009 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v6013 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v6014 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v6015 = [v6009, v6013, v6014];
        const v6016 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v6015);
        ;
        const v6017 = v6016[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v6018 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v6022 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v6023 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v6024 = [v6018, v6022, v6023];
        const v6025 = stdlib.Array_set(v6016, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v6024);
        ;
        const v6026 = v6025[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v6027 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
        const v6028 = stdlib.add(v6027, v5888);
        const v6031 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
        const v6032 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
        const v6033 = [v6028, v6031, v6032];
        const v6034 = stdlib.Array_set(v6025, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v6033);
        ;
        const v6351 = v6034[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
        const v6352 = v6351[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
        const v6353 = v2878.balB;
        const v6354 = stdlib.sub(v6352, v6353);
        const v6355 = v6034[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v6356 = v6355[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v6357 = v2878.balA;
        const v6358 = stdlib.sub(v6356, v6357);
        const v6359 = stdlib.lt(v5888, v6354);
        stdlib.assert(v6359, {
          at: './util.rsh:235:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtIn <= balance(amtInTok)',
          who: 'Admin'
          });
        const v6360 = stdlib.gt(v5888, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v6360, {
          at: './util.rsh:238:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtIn > 0',
          who: 'Admin'
          });
        const v6361 = stdlib.sub(v6354, v5888);
        const v6362 = v2879.fee;
        const v6364 = v2879.totFee;
        const v6367 = stdlib.mul(v6362, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
        const v6368 = stdlib.div(v6367, v6364);
        const v6385 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v6364);
        const v6389 = stdlib.mul(v5888, v6385);
        const v6392 = stdlib.mul(v6361, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
        const v6395 = stdlib.add(v6392, v6389);
        const v6396 = stdlib.muldiv(v6389, v6358, v6395);
        const v6397 = stdlib.gt(v6396, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v6397, {
          at: './util.rsh:124:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtOut > 0',
          who: 'Admin'
          });
        const v6400 = stdlib.add(v6361, v5888);
        const v6401 = stdlib.gt(v6400, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v6401, {
          at: './util.rsh:67:4:application',
          fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6402 = stdlib.muldiv(v5888, v6358, v6400);
        const v6404 = stdlib.sub(v6402, v6396);
        const v6405 = stdlib.muldiv(v5888, v6362, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
        const v6409 = stdlib.mul(v6404, v6368);
        const v6410 = stdlib.div(v6409, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
        const v6411 = stdlib.le(v6410, v6404);
        stdlib.assert(v6411, {
          at: './util.rsh:130:4:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'pFeeOut <= outFee',
          who: 'Admin'
          });
        const v6413 = stdlib.le(v6405, v6400);
        stdlib.assert(v6413, {
          at: './util.rsh:131:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'pFeeIn <= reserveIn',
          who: 'Admin'
          });
        const v6414 = stdlib.le(v6410, v6358);
        stdlib.assert(v6414, {
          at: './util.rsh:132:8:application',
          fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'pFeeOut <= reserveOut',
          who: 'Admin'
          });
        const v6415 = stdlib.muldiv(v6410, v6361, v6358);
        const v6416 = stdlib.ge(v6415, v6405);
        const v6417 = [v6396, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v6410];
        const v6418 = [v6396, v6405, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v6419 = v6416 ? v6417 : v6418;
        const v6420 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
        const v6421 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
        const v6422 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
        const v6423 = stdlib.ge(v6420, v5889);
        stdlib.assert(v6423, {
          at: './util.rsh:240:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'out >= expectedOut',
          who: 'Admin'
          });
        const v6424 = stdlib.le(v6420, v6358);
        stdlib.assert(v6424, {
          at: './util.rsh:241:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'amtOut <= bal(out)',
          who: 'Admin'
          });
        const v6432 = stdlib.sub(v6356, v6420);
        const v6435 = v6355[stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 1)];
        const v6436 = v6355[stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 2)];
        const v6437 = [v6432, v6435, v6436];
        const v6438 = stdlib.Array_set(v6034, stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 0), v6437);
        ;
        const v6440 = v6438[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v6441 = v6440[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
        const v6443 = stdlib.sub(v6441, v6357);
        const v6445 = stdlib.gt(v6361, v6358);
        const v6446 = v6445 ? v6361 : v6358;
        const v6447 = stdlib.lt(v6361, v6358);
        const v6448 = v6447 ? v6361 : v6358;
        const v6449 = stdlib.muldiv(v6354, v6443, v6446);
        const v6450 = stdlib.ge(v6449, v6448);
        stdlib.assert(v6450, {
          at: './util.rsh:250:10:application',
          fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'newK >= market.k',
          who: 'Admin'
          });
        const v6454 = stdlib.add(v6357, v6422);
        const v6458 = stdlib.add(v6353, v6421);
        const v6459 = {
          balA: v6454,
          balB: v6458
          };
        const v6466 = [v6420, v6421, v6422, v6443, v6354];
        await txn3.getOutput('Trader_swapBForA', 'v6466', ctc15, v6466);
        const cv2877 = v2877;
        const cv2878 = v6459;
        const cv2879 = v2879;
        const cv2880 = v3524;
        const cv2886 = v6438;
        
        v2877 = cv2877;
        v2878 = cv2878;
        v2879 = cv2879;
        v2880 = cv2880;
        v2886 = cv2886;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function Harvester_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Harvester_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Harvester_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc3
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc1
    });
  const ctc11 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc9], ['newProtocolFee', ctc10], ['newProviderFee', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_174: ctc12,
    Provider_deposit0_174: ctc13,
    Provider_withdraw0_174: ctc14,
    Trader_swapAForB0_174: ctc15,
    Trader_swapBForA0_174: ctc15
    });
  
  
  const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2932 = ctc.selfAddress();
  const v2934 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:79:19:application call to "runHarvester_harvest0_174" (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Harvester_harvest'
    });
  const v2935 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
  const v2937 = v2879.addr;
  const v2938 = v2879.fee;
  const v2939 = v2879.lpFee;
  const v2940 = stdlib.addressEq(v2932, v2937);
  stdlib.assert(v2940, {
    at: './util.rsh:268:9:application',
    fs: ['at ./index.rsh:101:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:266:54:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:79:19:application call to "runHarvester_harvest0_174" (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'Thou art not the harvester                                      ',
    who: 'Harvester_harvest'
    });
  const v2941 = v2935.newProtocolFee;
  const v2942 = v2935.newProviderFee;
  let v2943;
  switch (v2941[0]) {
    case 'None': {
      const v2944 = v2941[1];
      v2943 = v2938;
      
      break;
      }
    case 'Some': {
      const v2945 = v2941[1];
      v2943 = v2945;
      
      break;
      }
    }
  let v2946;
  switch (v2942[0]) {
    case 'None': {
      const v2947 = v2942[1];
      v2946 = v2939;
      
      break;
      }
    case 'Some': {
      const v2948 = v2942[1];
      v2946 = v2948;
      
      break;
      }
    }
  const v2950 = stdlib.add(v2943, v2946);
  const v2954 = stdlib.add(v2946, v2943);
  const v2955 = stdlib.eq(v2950, v2954);
  const v2956 = stdlib.lt(v2950, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
  const v2957 = v2955 ? v2956 : false;
  const v2958 = stdlib.gt(v2950, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
  const v2959 = v2957 ? v2958 : false;
  stdlib.assert(v2959, {
    at: './util.rsh:96:4:application',
    fs: ['at ./util.rsh:273:20:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./index.rsh:101:33:application call to "doAssumeHarvest" (defined at: ./util.rsh:266:54:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:15:function exp)', 'at ./index.rsh:79:19:application call to "runHarvester_harvest0_174" (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Harvester_harvest'
    });
  const v2962 = ['Harvester_harvest0_174', v2934];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931, v2962],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:102:21:decimal', stdlib.UInt_max, 0), v2838], [stdlib.checkedBigNumberify('./index.rsh:102:32:decimal', stdlib.UInt_max, 0), v2802], [stdlib.checkedBigNumberify('./index.rsh:102:43:decimal', stdlib.UInt_max, 0), v2803]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
      
      switch (v3523[0]) {
        case 'Harvester_harvest0_174': {
          const v3526 = v3523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Harvester_harvest"
            });
          ;
          const v3641 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v3642 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v3646 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v3647 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v3648 = [v3642, v3646, v3647];
          const v3649 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v3648);
          ;
          const v3650 = v3649[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v3651 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v3655 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v3656 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v3657 = [v3651, v3655, v3656];
          const v3658 = stdlib.Array_set(v3649, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v3657);
          ;
          const v3659 = v3658[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v3660 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v3664 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v3665 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v3666 = [v3660, v3664, v3665];
          const v3667 = stdlib.Array_set(v3658, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v3666);
          ;
          const v3669 = v3526[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
          const v3670 = v2879.addr;
          const v3671 = v2879.fee;
          const v3672 = v2879.lpFee;
          const v3673 = v2878.balA;
          const v3674 = v2878.balB;
          const v3675 = v3669.newHarvesterAddr;
          const v3676 = v3669.newProtocolFee;
          const v3677 = v3669.newProviderFee;
          const v3678 = v3669.receiver;
          const v3679 = stdlib.addressEq(v3522, v3670);
          ;
          const v3682 = v3667[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0)];
          const v3683 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0)];
          const v3687 = stdlib.sub(v3683, v3673);
          const v3690 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 1)];
          const v3691 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 2)];
          const v3692 = [v3687, v3690, v3691];
          const v3693 = stdlib.Array_set(v3667, stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0), v3692);
          sim_r.txns.push({
            amt: v3673,
            kind: 'from',
            to: v3678,
            tok: v2802
            });
          const v3698 = v3693[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
          const v3699 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
          const v3703 = stdlib.sub(v3699, v3674);
          const v3706 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
          const v3707 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 2)];
          const v3708 = [v3703, v3706, v3707];
          const v3709 = stdlib.Array_set(v3693, stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1), v3708);
          sim_r.txns.push({
            amt: v3674,
            kind: 'from',
            to: v3678,
            tok: v2803
            });
          const v3710 = [v3673, v3674];
          const v3711 = await txn1.getOutput('Harvester_harvest', 'v3710', ctc15, v3710);
          
          let v3716;
          switch (v3675[0]) {
            case 'None': {
              const v3717 = v3675[1];
              v3716 = v3670;
              
              break;
              }
            case 'Some': {
              const v3718 = v3675[1];
              v3716 = v3718;
              
              break;
              }
            }
          let v3719;
          switch (v3676[0]) {
            case 'None': {
              const v3720 = v3676[1];
              v3719 = v3671;
              
              break;
              }
            case 'Some': {
              const v3721 = v3676[1];
              v3719 = v3721;
              
              break;
              }
            }
          let v3722;
          switch (v3677[0]) {
            case 'None': {
              const v3723 = v3677[1];
              v3722 = v3672;
              
              break;
              }
            case 'Some': {
              const v3724 = v3677[1];
              v3722 = v3724;
              
              break;
              }
            }
          const v3726 = stdlib.add(v3719, v3722);
          const v3730 = stdlib.add(v3722, v3719);
          const v3731 = stdlib.eq(v3726, v3730);
          const v3732 = stdlib.lt(v3726, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
          const v3733 = v3731 ? v3732 : false;
          const v3734 = stdlib.gt(v3726, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
          const v3735 = v3733 ? v3734 : false;
          ;
          const v3736 = {
            addr: v3716,
            fee: v3719,
            lpFee: v3722,
            totFee: v3726
            };
          const v9053 = v2877;
          const v9054 = v2875;
          const v9055 = v3736;
          const v9057 = v3709;
          const v9058 = v3709[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9059 = v9058[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9060 = v3709[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v9061 = v9060[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_deposit0_174': {
          const v4110 = v3523[1];
          
          break;
          }
        case 'Provider_withdraw0_174': {
          const v4707 = v3523[1];
          
          break;
          }
        case 'Trader_swapAForB0_174': {
          const v5297 = v3523[1];
          
          break;
          }
        case 'Trader_swapBForA0_174': {
          const v5887 = v3523[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
  switch (v3523[0]) {
    case 'Harvester_harvest0_174': {
      const v3526 = v3523[1];
      undefined /* setApiDetails */;
      ;
      const v3641 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v3642 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v3646 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v3647 = v3641[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v3648 = [v3642, v3646, v3647];
      const v3649 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v3648);
      ;
      const v3650 = v3649[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v3651 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v3655 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v3656 = v3650[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v3657 = [v3651, v3655, v3656];
      const v3658 = stdlib.Array_set(v3649, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v3657);
      ;
      const v3659 = v3658[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v3660 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v3664 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v3665 = v3659[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v3666 = [v3660, v3664, v3665];
      const v3667 = stdlib.Array_set(v3658, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v3666);
      ;
      const v3669 = v3526[stdlib.checkedBigNumberify('./index.rsh:100:11:spread', stdlib.UInt_max, 0)];
      const v3670 = v2879.addr;
      const v3671 = v2879.fee;
      const v3672 = v2879.lpFee;
      const v3673 = v2878.balA;
      const v3674 = v2878.balB;
      const v3675 = v3669.newHarvesterAddr;
      const v3676 = v3669.newProtocolFee;
      const v3677 = v3669.newProviderFee;
      const v3678 = v3669.receiver;
      const v3679 = stdlib.addressEq(v3522, v3670);
      stdlib.assert(v3679, {
        at: './util.rsh:282:10:application',
        fs: ['at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
        msg: 'Thou art not the harvester                                      ',
        who: 'Harvester_harvest'
        });
      const v3682 = v3667[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0)];
      const v3683 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0)];
      const v3687 = stdlib.sub(v3683, v3673);
      const v3690 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 1)];
      const v3691 = v3682[stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 2)];
      const v3692 = [v3687, v3690, v3691];
      const v3693 = stdlib.Array_set(v3667, stdlib.checkedBigNumberify('./util.rsh:283:26:application', stdlib.UInt_max, 0), v3692);
      ;
      const v3698 = v3693[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
      const v3699 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 0)];
      const v3703 = stdlib.sub(v3699, v3674);
      const v3706 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1)];
      const v3707 = v3698[stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 2)];
      const v3708 = [v3703, v3706, v3707];
      const v3709 = stdlib.Array_set(v3693, stdlib.checkedBigNumberify('./util.rsh:285:26:application', stdlib.UInt_max, 1), v3708);
      ;
      const v3710 = [v3673, v3674];
      const v3711 = await txn1.getOutput('Harvester_harvest', 'v3710', ctc15, v3710);
      if (v1635) {
        stdlib.protect(ctc8, await interact.out(v3526, v3711), {
          at: './index.rsh:100:12:application',
          fs: ['at ./index.rsh:100:12:application call to [unknown function] (defined at: ./index.rsh:100:12:function exp)', 'at ./util.rsh:287:14:application call to "harvestDone" (defined at: ./index.rsh:103:28:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
          msg: 'out',
          who: 'Harvester_harvest'
          });
        }
      else {
        }
      
      let v3716;
      switch (v3675[0]) {
        case 'None': {
          const v3717 = v3675[1];
          v3716 = v3670;
          
          break;
          }
        case 'Some': {
          const v3718 = v3675[1];
          v3716 = v3718;
          
          break;
          }
        }
      let v3719;
      switch (v3676[0]) {
        case 'None': {
          const v3720 = v3676[1];
          v3719 = v3671;
          
          break;
          }
        case 'Some': {
          const v3721 = v3676[1];
          v3719 = v3721;
          
          break;
          }
        }
      let v3722;
      switch (v3677[0]) {
        case 'None': {
          const v3723 = v3677[1];
          v3722 = v3672;
          
          break;
          }
        case 'Some': {
          const v3724 = v3677[1];
          v3722 = v3724;
          
          break;
          }
        }
      const v3726 = stdlib.add(v3719, v3722);
      const v3730 = stdlib.add(v3722, v3719);
      const v3731 = stdlib.eq(v3726, v3730);
      const v3732 = stdlib.lt(v3726, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
      const v3733 = v3731 ? v3732 : false;
      const v3734 = stdlib.gt(v3726, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
      const v3735 = v3733 ? v3734 : false;
      stdlib.assert(v3735, {
        at: './util.rsh:96:4:application',
        fs: ['at ./util.rsh:295:21:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./index.rsh:103:49:application call to "doConsensusHarvest" (defined at: ./util.rsh:276:94:function exp)', 'at ./index.rsh:103:28:application call to [unknown function] (defined at: ./index.rsh:103:28:function exp)'],
        msg: null,
        who: 'Harvester_harvest'
        });
      const v3736 = {
        addr: v3716,
        fee: v3719,
        lpFee: v3722,
        totFee: v3726
        };
      const v9053 = v2877;
      const v9054 = v2875;
      const v9055 = v3736;
      const v9057 = v3709;
      const v9058 = v3709[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9059 = v9058[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9060 = v3709[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v9061 = v9060[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Provider_deposit0_174': {
      const v4110 = v3523[1];
      return;
      break;
      }
    case 'Provider_withdraw0_174': {
      const v4707 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_174': {
      const v5297 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_174': {
      const v5887 = v3523[1];
      return;
      break;
      }
    }
  
  
  };
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_174: ctc13,
    Provider_deposit0_174: ctc8,
    Provider_withdraw0_174: ctc14,
    Trader_swapAForB0_174: ctc15,
    Trader_swapBForA0_174: ctc15
    });
  
  
  const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2996 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v2997 = v2996[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
  const v2998 = v2996[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
  const v2999 = v2996[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
  const v3001 = stdlib.gt(v2997, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3001, {
    at: './index.rsh:153:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Provider_deposit'
    });
  const v3002 = stdlib.gt(v2998, stdlib.checkedBigNumberify('./index.rsh:154:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3002, {
    at: './index.rsh:154:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtB > 0',
    who: 'Provider_deposit'
    });
  const v3005 = v2878.balA;
  const v3006 = stdlib.sub(v2929, v3005);
  const v3009 = v2878.balB;
  const v3010 = stdlib.sub(v2931, v3009);
  const v3013 = stdlib.sub(stdlib.UInt_max, v2929);
  const v3014 = stdlib.ge(v3013, v2997);
  stdlib.assert(v3014, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:157:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v3015 = stdlib.add(v2929, v2997);
  const v3018 = stdlib.sub(stdlib.UInt_max, v2931);
  const v3019 = stdlib.ge(v3018, v2998);
  stdlib.assert(v3019, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:158:34:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v3020 = stdlib.add(v2931, v2998);
  const v3025 = stdlib.sub(stdlib.UInt_max, v3006);
  const v3026 = stdlib.ge(v3025, v2997);
  stdlib.assert(v3026, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:159:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(A)',
    who: 'Provider_deposit'
    });
  const v3027 = stdlib.add(v3006, v2997);
  const v3032 = stdlib.sub(stdlib.UInt_max, v3010);
  const v3033 = stdlib.ge(v3032, v2998);
  stdlib.assert(v3033, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:160:31:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'deposit: new balance(B)',
    who: 'Provider_deposit'
    });
  const v3034 = stdlib.add(v3010, v2998);
  const v3035 = stdlib.le(v3015, stdlib.UInt_max);
  stdlib.assert(v3035, {
    at: './index.rsh:161:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'actBalAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v3036 = stdlib.le(v3020, stdlib.UInt_max);
  stdlib.assert(v3036, {
    at: './index.rsh:162:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'actBalBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v3037 = stdlib.le(v3027, stdlib.UInt_max);
  stdlib.assert(v3037, {
    at: './index.rsh:163:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balAP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v3038 = stdlib.le(v3034, stdlib.UInt_max);
  stdlib.assert(v3038, {
    at: './index.rsh:164:17:application',
    fs: ['at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balBP <= UInt.max',
    who: 'Provider_deposit'
    });
  const v3039 = stdlib.eq(v2877, stdlib.checkedBigNumberify('./index.rsh:166:47:decimal', stdlib.UInt_max, 0));
  let v3040;
  if (v3039) {
    const v3041 = v2886[stdlib.checkedBigNumberify('./index.rsh:167:65:application', stdlib.UInt_max, 2)];
    const v3042 = v3041[stdlib.checkedBigNumberify('./index.rsh:167:65:application', stdlib.UInt_max, 0)];
    const v3043 = stdlib.gt(v2999, stdlib.checkedBigNumberify('./util.rsh:187:15:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v3043, {
      at: './util.rsh:187:5:application',
      fs: ['at ./index.rsh:167:34:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'minted > 0                                                      ',
      who: 'Provider_deposit'
      });
    const v3044 = stdlib.muldiv(v2997, v2998, v2999);
    const v3045 = stdlib.ge(v3044, v2999);
    stdlib.assert(v3045, {
      at: './util.rsh:189:4:application',
      fs: ['at ./index.rsh:167:34:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
      who: 'Provider_deposit'
      });
    const v3046 = stdlib.le(v2999, v3042);
    stdlib.assert(v3046, {
      at: './util.rsh:190:4:application',
      fs: ['at ./index.rsh:167:34:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'minted <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v3040 = v2999;
    }
  else {
    const v3047 = v2886[stdlib.checkedBigNumberify('./index.rsh:168:73:application', stdlib.UInt_max, 2)];
    const v3048 = v3047[stdlib.checkedBigNumberify('./index.rsh:168:73:application', stdlib.UInt_max, 0)];
    const v3049 = stdlib.gt(v3006, stdlib.checkedBigNumberify('./util.rsh:165:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v3049, {
      at: './util.rsh:165:5:application',
      fs: ['at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'balA > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v3050 = stdlib.gt(v3010, stdlib.checkedBigNumberify('./util.rsh:166:13:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v3050, {
      at: './util.rsh:166:5:application',
      fs: ['at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'balB > 0                                                        ',
      who: 'Provider_deposit'
      });
    const v3051 = stdlib.muldiv(v2997, v2877, v3006);
    const v3052 = stdlib.muldiv(v2998, v2877, v3010);
    const v3053 = stdlib.lt(v3051, v3052);
    const v3054 = v3053 ? v3051 : v3052;
    const v3055 = stdlib.le(v3054, v3048);
    stdlib.assert(v3055, {
      at: './util.rsh:170:4:application',
      fs: ['at ./index.rsh:168:29:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
      msg: 'result <= poolBalance                                           ',
      who: 'Provider_deposit'
      });
    v3040 = v3054;
    }
  const v3056 = stdlib.sub(stdlib.UInt_max, v2877);
  const v3057 = stdlib.ge(v3056, v3040);
  stdlib.assert(v3057, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:169:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:152:33:application call to [unknown function] (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_deposit0_174" (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_deposit'
    });
  const v3061 = ['Provider_deposit0_174', v2996];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931, v3061],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:171:30:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:171:35:decimal', stdlib.UInt_max, 0), v2838], [v2997, v2802], [v2998, v2803]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
      
      switch (v3523[0]) {
        case 'Harvester_harvest0_174': {
          const v3526 = v3523[1];
          
          break;
          }
        case 'Provider_deposit0_174': {
          const v4110 = v3523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v4111 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
          const v4112 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
          const v4113 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
          ;
          const v4238 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4239 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4243 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4244 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4245 = [v4239, v4243, v4244];
          const v4246 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v4245);
          ;
          const v4247 = v4246[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4248 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4249 = stdlib.add(v4248, v4111);
          const v4252 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4253 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4254 = [v4249, v4252, v4253];
          const v4255 = stdlib.Array_set(v4246, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v4254);
          sim_r.txns.push({
            amt: v4111,
            kind: 'to',
            tok: v2802
            });
          const v4256 = v4255[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4257 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4258 = stdlib.add(v4257, v4112);
          const v4261 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4262 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4263 = [v4258, v4261, v4262];
          const v4264 = stdlib.Array_set(v4255, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v4263);
          sim_r.txns.push({
            amt: v4112,
            kind: 'to',
            tok: v2803
            });
          const v4345 = stdlib.gt(v4111, stdlib.checkedBigNumberify('./index.rsh:177:26:decimal', stdlib.UInt_max, 0));
          ;
          const v4346 = stdlib.gt(v4112, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, 0));
          ;
          const v4347 = v4264[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v4348 = v4347[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v4349 = v2878.balA;
          const v4350 = stdlib.sub(v4348, v4349);
          const v4351 = v4264[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v4352 = v4351[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          const v4353 = v2878.balB;
          const v4354 = stdlib.sub(v4352, v4353);
          const v4357 = stdlib.eq(v2877, stdlib.checkedBigNumberify('./index.rsh:185:30:decimal', stdlib.UInt_max, 0));
          let v4358;
          if (v4357) {
            const v4359 = v4264[stdlib.checkedBigNumberify('./index.rsh:186:70:application', stdlib.UInt_max, 2)];
            const v4360 = v4359[stdlib.checkedBigNumberify('./index.rsh:186:70:application', stdlib.UInt_max, 0)];
            const v4362 = stdlib.muldiv(v4111, v4112, v4113);
            const v4363 = stdlib.ge(v4362, v4113);
            ;
            const v4364 = stdlib.le(v4113, v4360);
            ;
            v4358 = v4113;
            }
          else {
            const v4365 = stdlib.sub(v4350, v4111);
            const v4366 = stdlib.sub(v4354, v4112);
            const v4367 = v4264[stdlib.checkedBigNumberify('./index.rsh:187:92:application', stdlib.UInt_max, 2)];
            const v4368 = v4367[stdlib.checkedBigNumberify('./index.rsh:187:92:application', stdlib.UInt_max, 0)];
            const v4371 = stdlib.muldiv(v4111, v2877, v4365);
            const v4372 = stdlib.muldiv(v4112, v2877, v4366);
            const v4373 = stdlib.lt(v4371, v4372);
            const v4374 = v4373 ? v4371 : v4372;
            const v4375 = stdlib.le(v4374, v4368);
            ;
            v4358 = v4374;
            }
          const v4376 = v4264[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2)];
          const v4377 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 0)];
          const v4381 = stdlib.sub(v4377, v4358);
          const v4384 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 1)];
          const v4385 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2)];
          const v4386 = [v4381, v4384, v4385];
          const v4387 = stdlib.Array_set(v4264, stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2), v4386);
          sim_r.txns.push({
            amt: v4358,
            kind: 'from',
            to: v3522,
            tok: v2838
            });
          const v4388 = stdlib.add(v2877, v4358);
          const v4393 = await txn1.getOutput('Provider_deposit', 'v4358', ctc1, v4358);
          
          const v9131 = v4388;
          const v9132 = v2878;
          const v9133 = v2879;
          const v9135 = v4387;
          const v9136 = v4387[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9137 = v9136[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9138 = v4387[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v9139 = v9138[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_174': {
          const v4707 = v3523[1];
          
          break;
          }
        case 'Trader_swapAForB0_174': {
          const v5297 = v3523[1];
          
          break;
          }
        case 'Trader_swapBForA0_174': {
          const v5887 = v3523[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
  switch (v3523[0]) {
    case 'Harvester_harvest0_174': {
      const v3526 = v3523[1];
      return;
      break;
      }
    case 'Provider_deposit0_174': {
      const v4110 = v3523[1];
      undefined /* setApiDetails */;
      const v4111 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 0)];
      const v4112 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 1)];
      const v4113 = v4110[stdlib.checkedBigNumberify('./index.rsh:151:11:spread', stdlib.UInt_max, 2)];
      ;
      const v4238 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4239 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4243 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4244 = v4238[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4245 = [v4239, v4243, v4244];
      const v4246 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v4245);
      ;
      const v4247 = v4246[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4248 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4249 = stdlib.add(v4248, v4111);
      const v4252 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4253 = v4247[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4254 = [v4249, v4252, v4253];
      const v4255 = stdlib.Array_set(v4246, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v4254);
      ;
      const v4256 = v4255[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4257 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4258 = stdlib.add(v4257, v4112);
      const v4261 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4262 = v4256[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4263 = [v4258, v4261, v4262];
      const v4264 = stdlib.Array_set(v4255, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v4263);
      ;
      const v4345 = stdlib.gt(v4111, stdlib.checkedBigNumberify('./index.rsh:177:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4345, {
        at: './index.rsh:177:18:application',
        fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
        msg: 'amtA > 0',
        who: 'Provider_deposit'
        });
      const v4346 = stdlib.gt(v4112, stdlib.checkedBigNumberify('./index.rsh:178:26:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4346, {
        at: './index.rsh:178:18:application',
        fs: ['at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
        msg: 'amtB > 0',
        who: 'Provider_deposit'
        });
      const v4347 = v4264[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v4348 = v4347[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v4349 = v2878.balA;
      const v4350 = stdlib.sub(v4348, v4349);
      const v4351 = v4264[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v4352 = v4351[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      const v4353 = v2878.balB;
      const v4354 = stdlib.sub(v4352, v4353);
      const v4357 = stdlib.eq(v2877, stdlib.checkedBigNumberify('./index.rsh:185:30:decimal', stdlib.UInt_max, 0));
      let v4358;
      if (v4357) {
        const v4359 = v4264[stdlib.checkedBigNumberify('./index.rsh:186:70:application', stdlib.UInt_max, 2)];
        const v4360 = v4359[stdlib.checkedBigNumberify('./index.rsh:186:70:application', stdlib.UInt_max, 0)];
        const v4362 = stdlib.muldiv(v4111, v4112, v4113);
        const v4363 = stdlib.ge(v4362, v4113);
        stdlib.assert(v4363, {
          at: './util.rsh:189:4:application',
          fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'muldiv(amtA, amtB, minted) >= minted                            ',
          who: 'Provider_deposit'
          });
        const v4364 = stdlib.le(v4113, v4360);
        stdlib.assert(v4364, {
          at: './util.rsh:190:4:application',
          fs: ['at ./index.rsh:186:39:application call to [unknown function] (defined at: ./util.rsh:186:76:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'minted <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v4358 = v4113;
        }
      else {
        const v4365 = stdlib.sub(v4350, v4111);
        const v4366 = stdlib.sub(v4354, v4112);
        const v4367 = v4264[stdlib.checkedBigNumberify('./index.rsh:187:92:application', stdlib.UInt_max, 2)];
        const v4368 = v4367[stdlib.checkedBigNumberify('./index.rsh:187:92:application', stdlib.UInt_max, 0)];
        const v4371 = stdlib.muldiv(v4111, v2877, v4365);
        const v4372 = stdlib.muldiv(v4112, v2877, v4366);
        const v4373 = stdlib.lt(v4371, v4372);
        const v4374 = v4373 ? v4371 : v4372;
        const v4375 = stdlib.le(v4374, v4368);
        stdlib.assert(v4375, {
          at: './util.rsh:170:4:application',
          fs: ['at ./index.rsh:187:34:application call to [unknown function] (defined at: ./util.rsh:164:87:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'result <= poolBalance                                           ',
          who: 'Provider_deposit'
          });
        v4358 = v4374;
        }
      const v4376 = v4264[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2)];
      const v4377 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 0)];
      const v4381 = stdlib.sub(v4377, v4358);
      const v4384 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 1)];
      const v4385 = v4376[stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2)];
      const v4386 = [v4381, v4384, v4385];
      const v4387 = stdlib.Array_set(v4264, stdlib.checkedBigNumberify('./index.rsh:191:42:application', stdlib.UInt_max, 2), v4386);
      ;
      const v4388 = stdlib.add(v2877, v4358);
      const v4393 = await txn1.getOutput('Provider_deposit', 'v4358', ctc1, v4358);
      if (v1635) {
        stdlib.protect(ctc9, await interact.out(v4110, v4393), {
          at: './index.rsh:151:12:application',
          fs: ['at ./index.rsh:151:12:application call to [unknown function] (defined at: ./index.rsh:151:12:function exp)', 'at ./index.rsh:196:22:application call to "depositDone" (defined at: ./index.rsh:176:46:function exp)', 'at ./index.rsh:176:46:application call to [unknown function] (defined at: ./index.rsh:176:46:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v9131 = v4388;
      const v9132 = v2878;
      const v9133 = v2879;
      const v9135 = v4387;
      const v9136 = v4387[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9137 = v9136[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9138 = v4387[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v9139 = v9138[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Provider_withdraw0_174': {
      const v4707 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_174': {
      const v5297 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_174': {
      const v5887 = v3523[1];
      return;
      break;
      }
    }
  
  
  };
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_174: ctc13,
    Provider_deposit0_174: ctc14,
    Provider_withdraw0_174: ctc8,
    Trader_swapAForB0_174: ctc15,
    Trader_swapBForA0_174: ctc15
    });
  const ctc17 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  
  const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v2966 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v2967 = v2966[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
  const v2969 = stdlib.gt(v2877, stdlib.checkedBigNumberify('./index.rsh:107:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2969, {
    at: './index.rsh:107:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'There has been liquidity dispensed.',
    who: 'Provider_withdraw'
    });
  const v2970 = stdlib.le(v2967, v2877);
  stdlib.assert(v2970, {
    at: './index.rsh:108:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'liquidity less than total',
    who: 'Provider_withdraw'
    });
  const v2973 = v2878.balA;
  const v2974 = stdlib.sub(v2929, v2973);
  const v2977 = v2878.balB;
  const v2978 = stdlib.sub(v2931, v2977);
  const v2979 = stdlib.gt(v2974, stdlib.checkedBigNumberify('./index.rsh:111:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2979, {
    at: './index.rsh:111:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2980 = stdlib.gt(v2978, stdlib.checkedBigNumberify('./index.rsh:112:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2980, {
    at: './index.rsh:112:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2981 = stdlib.muldiv(v2967, v2974, v2877);
  const v2982 = stdlib.le(v2981, v2974);
  stdlib.assert(v2982, {
    at: './index.rsh:114:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2983 = stdlib.muldiv(v2967, v2978, v2877);
  const v2984 = stdlib.le(v2983, v2978);
  stdlib.assert(v2984, {
    at: './index.rsh:116:17:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Provider_withdraw'
    });
  const v2985 = v2886[stdlib.checkedBigNumberify('./index.rsh:117:30:application', stdlib.UInt_max, 2)];
  const v2986 = v2985[stdlib.checkedBigNumberify('./index.rsh:117:30:application', stdlib.UInt_max, 0)];
  const v2987 = stdlib.sub(stdlib.UInt_max, v2986);
  const v2988 = stdlib.ge(v2987, v2967);
  stdlib.assert(v2988, {
    at: './util.rsh:14:4:application',
    fs: ['at ./index.rsh:117:22:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:79:19:application call to "runProvider_withdraw0_174" (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Provider_withdraw'
    });
  const v2992 = ['Provider_withdraw0_174', v2966];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931, v2992],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:28:decimal', stdlib.UInt_max, 0), [[v2967, v2838], [stdlib.checkedBigNumberify('./index.rsh:120:54:decimal', stdlib.UInt_max, 0), v2802], [stdlib.checkedBigNumberify('./index.rsh:120:67:decimal', stdlib.UInt_max, 0), v2803]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
      
      switch (v3523[0]) {
        case 'Harvester_harvest0_174': {
          const v3526 = v3523[1];
          
          break;
          }
        case 'Provider_deposit0_174': {
          const v4110 = v3523[1];
          
          break;
          }
        case 'Provider_withdraw0_174': {
          const v4707 = v3523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v4708 = v4707[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
          const v4710 = v2886[stdlib.checkedBigNumberify('./index.rsh:121:47:application', stdlib.UInt_max, 2)];
          const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:121:47:application', stdlib.UInt_max, 0)];
          ;
          const v4830 = stdlib.add(v4711, v4708);
          const v4833 = v4710[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4834 = v4710[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4835 = [v4830, v4833, v4834];
          const v4836 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v4835);
          sim_r.txns.push({
            amt: v4708,
            kind: 'to',
            tok: v2838
            });
          const v4837 = v4836[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4838 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4842 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4843 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4844 = [v4838, v4842, v4843];
          const v4845 = stdlib.Array_set(v4836, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v4844);
          ;
          const v4846 = v4845[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4847 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v4851 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v4852 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v4853 = [v4847, v4851, v4852];
          const v4854 = stdlib.Array_set(v4845, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v4853);
          ;
          const v4991 = v4854[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v4992 = v4991[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v4993 = v2878.balA;
          const v4994 = stdlib.sub(v4992, v4993);
          const v4995 = v4854[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v4996 = v4995[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          const v4997 = v2878.balB;
          const v4998 = stdlib.sub(v4996, v4997);
          const v5003 = stdlib.muldiv(v4708, v4994, v2877);
          const v5004 = stdlib.le(v5003, v4994);
          ;
          const v5012 = stdlib.sub(v4992, v5003);
          const v5015 = v4991[stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 1)];
          const v5016 = v4991[stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 2)];
          const v5017 = [v5012, v5015, v5016];
          const v5018 = stdlib.Array_set(v4854, stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 0), v5017);
          sim_r.txns.push({
            amt: v5003,
            kind: 'from',
            to: v3522,
            tok: v2802
            });
          const v5019 = stdlib.muldiv(v4708, v4998, v2877);
          const v5020 = stdlib.le(v5019, v4998);
          ;
          const v5021 = v5018[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1)];
          const v5022 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 0)];
          const v5026 = stdlib.sub(v5022, v5019);
          const v5029 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1)];
          const v5030 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 2)];
          const v5031 = [v5026, v5029, v5030];
          const v5032 = stdlib.Array_set(v5018, stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1), v5031);
          sim_r.txns.push({
            amt: v5019,
            kind: 'from',
            to: v3522,
            tok: v2803
            });
          const v5033 = stdlib.sub(v2877, v4708);
          const v5034 = [v5003, v5019];
          const v5035 = await txn1.getOutput('Provider_withdraw', 'v5034', ctc17, v5034);
          
          const v9209 = v5033;
          const v9210 = v2878;
          const v9211 = v2879;
          const v9213 = v5032;
          const v9214 = v5032[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9215 = v9214[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9216 = v5032[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v9217 = v9216[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_174': {
          const v5297 = v3523[1];
          
          break;
          }
        case 'Trader_swapBForA0_174': {
          const v5887 = v3523[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
  switch (v3523[0]) {
    case 'Harvester_harvest0_174': {
      const v3526 = v3523[1];
      return;
      break;
      }
    case 'Provider_deposit0_174': {
      const v4110 = v3523[1];
      return;
      break;
      }
    case 'Provider_withdraw0_174': {
      const v4707 = v3523[1];
      undefined /* setApiDetails */;
      const v4708 = v4707[stdlib.checkedBigNumberify('./index.rsh:105:11:spread', stdlib.UInt_max, 0)];
      const v4710 = v2886[stdlib.checkedBigNumberify('./index.rsh:121:47:application', stdlib.UInt_max, 2)];
      const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:121:47:application', stdlib.UInt_max, 0)];
      ;
      const v4830 = stdlib.add(v4711, v4708);
      const v4833 = v4710[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4834 = v4710[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4835 = [v4830, v4833, v4834];
      const v4836 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v4835);
      ;
      const v4837 = v4836[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4838 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4842 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4843 = v4837[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4844 = [v4838, v4842, v4843];
      const v4845 = stdlib.Array_set(v4836, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v4844);
      ;
      const v4846 = v4845[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4847 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v4851 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v4852 = v4846[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v4853 = [v4847, v4851, v4852];
      const v4854 = stdlib.Array_set(v4845, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v4853);
      ;
      const v4991 = v4854[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v4992 = v4991[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v4993 = v2878.balA;
      const v4994 = stdlib.sub(v4992, v4993);
      const v4995 = v4854[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v4996 = v4995[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      const v4997 = v2878.balB;
      const v4998 = stdlib.sub(v4996, v4997);
      const v5003 = stdlib.muldiv(v4708, v4994, v2877);
      const v5004 = stdlib.le(v5003, v4994);
      stdlib.assert(v5004, {
        at: './index.rsh:135:18:application',
        fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v5012 = stdlib.sub(v4992, v5003);
      const v5015 = v4991[stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 1)];
      const v5016 = v4991[stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 2)];
      const v5017 = [v5012, v5015, v5016];
      const v5018 = stdlib.Array_set(v4854, stdlib.checkedBigNumberify('./index.rsh:136:37:application', stdlib.UInt_max, 0), v5017);
      ;
      const v5019 = stdlib.muldiv(v4708, v4998, v2877);
      const v5020 = stdlib.le(v5019, v4998);
      stdlib.assert(v5020, {
        at: './index.rsh:140:18:application',
        fs: ['at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
        msg: null,
        who: 'Provider_withdraw'
        });
      const v5021 = v5018[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1)];
      const v5022 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 0)];
      const v5026 = stdlib.sub(v5022, v5019);
      const v5029 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1)];
      const v5030 = v5021[stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 2)];
      const v5031 = [v5026, v5029, v5030];
      const v5032 = stdlib.Array_set(v5018, stdlib.checkedBigNumberify('./index.rsh:141:37:application', stdlib.UInt_max, 1), v5031);
      ;
      const v5033 = stdlib.sub(v2877, v4708);
      const v5034 = [v5003, v5019];
      const v5035 = await txn1.getOutput('Provider_withdraw', 'v5034', ctc17, v5034);
      if (v1635) {
        stdlib.protect(ctc9, await interact.out(v4707, v5035), {
          at: './index.rsh:105:12:application',
          fs: ['at ./index.rsh:105:12:application call to [unknown function] (defined at: ./index.rsh:105:12:function exp)', 'at ./index.rsh:146:23:application call to "withdrawDone" (defined at: ./index.rsh:123:35:function exp)', 'at ./index.rsh:123:35:application call to [unknown function] (defined at: ./index.rsh:123:35:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v9209 = v5033;
      const v9210 = v2878;
      const v9211 = v2879;
      const v9213 = v5032;
      const v9214 = v5032[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9215 = v9214[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9216 = v5032[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v9217 = v9216[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Trader_swapAForB0_174': {
      const v5297 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_174': {
      const v5887 = v3523[1];
      return;
      break;
      }
    }
  
  
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_174: ctc13,
    Provider_deposit0_174: ctc14,
    Provider_withdraw0_174: ctc15,
    Trader_swapAForB0_174: ctc8,
    Trader_swapBForA0_174: ctc8
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v3065 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v3066 = v3065[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
  const v3067 = v3065[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
  const v3071 = v2878.balA;
  const v3072 = stdlib.sub(v2929, v3071);
  const v3075 = v2878.balB;
  const v3076 = stdlib.sub(v2931, v3075);
  const v3077 = stdlib.gt(v3066, stdlib.checkedBigNumberify('./util.rsh:199:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3077, {
    at: './util.rsh:199:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapAForB'
    });
  const v3078 = stdlib.gt(v3072, v3066);
  stdlib.assert(v3078, {
    at: './util.rsh:200:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapAForB'
    });
  const v3079 = stdlib.gt(v3076, stdlib.checkedBigNumberify('./util.rsh:201:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3079, {
    at: './util.rsh:201:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapAForB'
    });
  const v3080 = stdlib.gt(v3067, stdlib.checkedBigNumberify('./util.rsh:202:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3080, {
    at: './util.rsh:202:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v3081 = stdlib.lt(v3067, v3076);
  stdlib.assert(v3081, {
    at: './util.rsh:203:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapAForB'
    });
  const v3084 = stdlib.sub(stdlib.UInt_max, v2929);
  const v3085 = stdlib.ge(v3084, v3066);
  stdlib.assert(v3085, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:205:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v3086 = stdlib.add(v2929, v3066);
  const v3087 = stdlib.lt(v3086, stdlib.UInt_max);
  stdlib.assert(v3087, {
    at: './util.rsh:206:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v3088 = stdlib.sub(stdlib.UInt_max, v3072);
  const v3089 = stdlib.ge(v3088, v3066);
  stdlib.assert(v3089, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:207:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapAForB'
    });
  const v3090 = stdlib.add(v3072, v3066);
  const v3091 = stdlib.lt(v3090, stdlib.UInt_max);
  stdlib.assert(v3091, {
    at: './util.rsh:208:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v3092 = stdlib.lt(v3076, stdlib.UInt_max);
  stdlib.assert(v3092, {
    at: './util.rsh:209:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapAForB'
    });
  const v3093 = v2879.fee;
  const v3094 = v2879.lpFee;
  const v3095 = v2879.totFee;
  const v3098 = stdlib.mul(v3093, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
  const v3099 = stdlib.div(v3098, v3095);
  const v3109 = stdlib.add(v3094, v3093);
  const v3110 = stdlib.eq(v3095, v3109);
  const v3111 = stdlib.lt(v3095, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
  const v3112 = v3110 ? v3111 : false;
  const v3113 = stdlib.gt(v3095, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
  const v3114 = v3112 ? v3113 : false;
  stdlib.assert(v3114, {
    at: './util.rsh:96:4:application',
    fs: ['at ./util.rsh:102:15:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3116 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v3095);
  const v3117 = stdlib.gt(v3116, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3117, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v3118 = stdlib.div(stdlib.UInt_max, v3116);
  const v3119 = stdlib.le(v3066, v3118);
  stdlib.assert(v3119, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v3120 = stdlib.mul(v3066, v3116);
  const v3121 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v3122 = stdlib.le(v3072, v3121);
  stdlib.assert(v3122, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:106:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v3123 = stdlib.mul(v3072, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v3124 = stdlib.sub(stdlib.UInt_max, v3123);
  const v3125 = stdlib.ge(v3124, v3120);
  stdlib.assert(v3125, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:107:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v3126 = stdlib.add(v3123, v3120);
  const v3127 = stdlib.muldiv(v3120, v3076, v3126);
  const v3128 = stdlib.gt(v3127, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3128, {
    at: './util.rsh:124:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapAForB'
    });
  const v3132 = stdlib.gt(v3090, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3132, {
    at: './util.rsh:67:4:application',
    fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3133 = stdlib.muldiv(v3066, v3076, v3090);
  const v3134 = stdlib.ge(v3133, v3127);
  stdlib.assert(v3134, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:126:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapAForB'
    });
  const v3135 = stdlib.sub(v3133, v3127);
  const v3136 = stdlib.muldiv(v3066, v3093, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
  const v3137 = stdlib.gt(v3099, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3137, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapAForB'
    });
  const v3138 = stdlib.div(stdlib.UInt_max, v3099);
  const v3139 = stdlib.le(v3135, v3138);
  stdlib.assert(v3139, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapAForB'
    });
  const v3140 = stdlib.mul(v3135, v3099);
  const v3141 = stdlib.div(v3140, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
  const v3142 = stdlib.le(v3141, v3135);
  stdlib.assert(v3142, {
    at: './util.rsh:130:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapAForB'
    });
  const v3144 = stdlib.le(v3136, v3090);
  stdlib.assert(v3144, {
    at: './util.rsh:131:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeIn <= reserveIn',
    who: 'Trader_swapAForB'
    });
  const v3145 = stdlib.le(v3141, v3076);
  stdlib.assert(v3145, {
    at: './util.rsh:132:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeOut <= reserveOut',
    who: 'Trader_swapAForB'
    });
  const v3146 = stdlib.muldiv(v3141, v3072, v3076);
  const v3147 = stdlib.ge(v3146, v3136);
  const v3148 = [v3127, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v3141];
  const v3149 = [v3127, v3136, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v3150 = v3147 ? v3148 : v3149;
  const v3151 = v3150[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 0)];
  const v3152 = v3150[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 1)];
  const v3153 = v3150[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 2)];
  const v3154 = stdlib.ge(v3151, v3067);
  stdlib.assert(v3154, {
    at: './util.rsh:212:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapAForB'
    });
  const v3155 = stdlib.le(v3151, v3076);
  stdlib.assert(v3155, {
    at: './util.rsh:213:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapAForB'
    });
  const v3156 = stdlib.sub(v3076, v3151);
  const v3159 = stdlib.sub(v2931, v3151);
  const v3162 = stdlib.sub(stdlib.UInt_max, v3071);
  const v3163 = stdlib.ge(v3162, v3152);
  stdlib.assert(v3163, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:219:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v3164 = stdlib.add(v3071, v3152);
  const v3165 = stdlib.le(v3164, v3086);
  stdlib.assert(v3165, {
    at: './util.rsh:220:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3166 = stdlib.sub(stdlib.UInt_max, v3075);
  const v3167 = stdlib.ge(v3166, v3153);
  stdlib.assert(v3167, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:221:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapAForB'
    });
  const v3168 = stdlib.add(v3075, v3153);
  const v3169 = stdlib.le(v3168, v3159);
  stdlib.assert(v3169, {
    at: './util.rsh:222:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3183 = stdlib.gt(v3072, v3076);
  const v3184 = v3183 ? v3072 : v3076;
  const v3185 = stdlib.lt(v3072, v3076);
  const v3186 = v3185 ? v3072 : v3076;
  const v3187 = stdlib.muldiv(v3090, v3156, v3184);
  const v3188 = stdlib.ge(v3187, v3186);
  stdlib.assert(v3188, {
    at: './util.rsh:229:9:application',
    fs: ['at ./index.rsh:202:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:29:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapAForB0_174" (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapAForB'
    });
  const v3191 = ['Trader_swapAForB0_174', v3065];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931, v3191],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:204:26:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, 0), v2838], [v3066, v2802], [stdlib.checkedBigNumberify('./index.rsh:204:59:decimal', stdlib.UInt_max, 0), v2803]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
      
      switch (v3523[0]) {
        case 'Harvester_harvest0_174': {
          const v3526 = v3523[1];
          
          break;
          }
        case 'Provider_deposit0_174': {
          const v4110 = v3523[1];
          
          break;
          }
        case 'Provider_withdraw0_174': {
          const v4707 = v3523[1];
          
          break;
          }
        case 'Trader_swapAForB0_174': {
          const v5297 = v3523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v5298 = v5297[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
          const v5299 = v5297[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
          ;
          const v5418 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v5419 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v5423 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v5424 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v5425 = [v5419, v5423, v5424];
          const v5426 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v5425);
          ;
          const v5427 = v5426[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v5428 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v5429 = stdlib.add(v5428, v5298);
          const v5432 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v5433 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v5434 = [v5429, v5432, v5433];
          const v5435 = stdlib.Array_set(v5426, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v5434);
          sim_r.txns.push({
            amt: v5298,
            kind: 'to',
            tok: v2802
            });
          const v5436 = v5435[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v5437 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v5441 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v5442 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v5443 = [v5437, v5441, v5442];
          const v5444 = stdlib.Array_set(v5435, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v5443);
          ;
          const v5634 = v5444[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v5635 = v5634[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v5636 = v2878.balA;
          const v5637 = stdlib.sub(v5635, v5636);
          const v5638 = v5444[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v5639 = v5638[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          const v5640 = v2878.balB;
          const v5641 = stdlib.sub(v5639, v5640);
          const v5642 = stdlib.lt(v5298, v5637);
          ;
          const v5643 = stdlib.gt(v5298, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
          ;
          const v5644 = stdlib.sub(v5637, v5298);
          const v5645 = v2879.fee;
          const v5647 = v2879.totFee;
          const v5650 = stdlib.mul(v5645, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
          const v5651 = stdlib.div(v5650, v5647);
          const v5668 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v5647);
          const v5672 = stdlib.mul(v5298, v5668);
          const v5675 = stdlib.mul(v5644, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
          const v5678 = stdlib.add(v5675, v5672);
          const v5679 = stdlib.muldiv(v5672, v5641, v5678);
          const v5680 = stdlib.gt(v5679, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
          ;
          const v5683 = stdlib.add(v5644, v5298);
          const v5684 = stdlib.gt(v5683, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
          ;
          const v5685 = stdlib.muldiv(v5298, v5641, v5683);
          const v5687 = stdlib.sub(v5685, v5679);
          const v5688 = stdlib.muldiv(v5298, v5645, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
          const v5692 = stdlib.mul(v5687, v5651);
          const v5693 = stdlib.div(v5692, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
          const v5694 = stdlib.le(v5693, v5687);
          ;
          const v5696 = stdlib.le(v5688, v5683);
          ;
          const v5697 = stdlib.le(v5693, v5641);
          ;
          const v5698 = stdlib.muldiv(v5693, v5644, v5641);
          const v5699 = stdlib.ge(v5698, v5688);
          const v5700 = [v5679, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v5693];
          const v5701 = [v5679, v5688, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v5702 = v5699 ? v5700 : v5701;
          const v5703 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
          const v5704 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
          const v5705 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
          const v5706 = stdlib.ge(v5703, v5299);
          ;
          const v5707 = stdlib.le(v5703, v5641);
          ;
          const v5713 = stdlib.sub(v5639, v5703);
          const v5716 = v5638[stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 1)];
          const v5717 = v5638[stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 2)];
          const v5718 = [v5713, v5716, v5717];
          const v5719 = stdlib.Array_set(v5444, stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 1), v5718);
          sim_r.txns.push({
            amt: v5703,
            kind: 'from',
            to: v3522,
            tok: v2803
            });
          const v5721 = v5719[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v5722 = v5721[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          const v5724 = stdlib.sub(v5722, v5640);
          const v5726 = stdlib.gt(v5644, v5641);
          const v5727 = v5726 ? v5644 : v5641;
          const v5728 = stdlib.lt(v5644, v5641);
          const v5729 = v5728 ? v5644 : v5641;
          const v5730 = stdlib.muldiv(v5637, v5724, v5727);
          const v5731 = stdlib.ge(v5730, v5729);
          ;
          const v5735 = stdlib.add(v5636, v5704);
          const v5739 = stdlib.add(v5640, v5705);
          const v5740 = {
            balA: v5735,
            balB: v5739
            };
          const v5747 = [v5703, v5704, v5705, v5724, v5637];
          const v5748 = await txn1.getOutput('Trader_swapAForB', 'v5747', ctc17, v5747);
          
          const v9287 = v2877;
          const v9288 = v5740;
          const v9289 = v2879;
          const v9291 = v5719;
          const v9292 = v5719[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v9293 = v9292[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_174': {
          const v5887 = v3523[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
  switch (v3523[0]) {
    case 'Harvester_harvest0_174': {
      const v3526 = v3523[1];
      return;
      break;
      }
    case 'Provider_deposit0_174': {
      const v4110 = v3523[1];
      return;
      break;
      }
    case 'Provider_withdraw0_174': {
      const v4707 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_174': {
      const v5297 = v3523[1];
      undefined /* setApiDetails */;
      const v5298 = v5297[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 0)];
      const v5299 = v5297[stdlib.checkedBigNumberify('./index.rsh:201:11:spread', stdlib.UInt_max, 1)];
      ;
      const v5418 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v5419 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v5423 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v5424 = v5418[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v5425 = [v5419, v5423, v5424];
      const v5426 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v5425);
      ;
      const v5427 = v5426[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v5428 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v5429 = stdlib.add(v5428, v5298);
      const v5432 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v5433 = v5427[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v5434 = [v5429, v5432, v5433];
      const v5435 = stdlib.Array_set(v5426, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v5434);
      ;
      const v5436 = v5435[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v5437 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v5441 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v5442 = v5436[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v5443 = [v5437, v5441, v5442];
      const v5444 = stdlib.Array_set(v5435, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v5443);
      ;
      const v5634 = v5444[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v5635 = v5634[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v5636 = v2878.balA;
      const v5637 = stdlib.sub(v5635, v5636);
      const v5638 = v5444[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v5639 = v5638[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      const v5640 = v2878.balB;
      const v5641 = stdlib.sub(v5639, v5640);
      const v5642 = stdlib.lt(v5298, v5637);
      stdlib.assert(v5642, {
        at: './util.rsh:235:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapAForB'
        });
      const v5643 = stdlib.gt(v5298, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v5643, {
        at: './util.rsh:238:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapAForB'
        });
      const v5644 = stdlib.sub(v5637, v5298);
      const v5645 = v2879.fee;
      const v5647 = v2879.totFee;
      const v5650 = stdlib.mul(v5645, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
      const v5651 = stdlib.div(v5650, v5647);
      const v5668 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v5647);
      const v5672 = stdlib.mul(v5298, v5668);
      const v5675 = stdlib.mul(v5644, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
      const v5678 = stdlib.add(v5675, v5672);
      const v5679 = stdlib.muldiv(v5672, v5641, v5678);
      const v5680 = stdlib.gt(v5679, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v5680, {
        at: './util.rsh:124:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapAForB'
        });
      const v5683 = stdlib.add(v5644, v5298);
      const v5684 = stdlib.gt(v5683, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v5684, {
        at: './util.rsh:67:4:application',
        fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v5685 = stdlib.muldiv(v5298, v5641, v5683);
      const v5687 = stdlib.sub(v5685, v5679);
      const v5688 = stdlib.muldiv(v5298, v5645, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
      const v5692 = stdlib.mul(v5687, v5651);
      const v5693 = stdlib.div(v5692, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
      const v5694 = stdlib.le(v5693, v5687);
      stdlib.assert(v5694, {
        at: './util.rsh:130:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapAForB'
        });
      const v5696 = stdlib.le(v5688, v5683);
      stdlib.assert(v5696, {
        at: './util.rsh:131:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'pFeeIn <= reserveIn',
        who: 'Trader_swapAForB'
        });
      const v5697 = stdlib.le(v5693, v5641);
      stdlib.assert(v5697, {
        at: './util.rsh:132:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'pFeeOut <= reserveOut',
        who: 'Trader_swapAForB'
        });
      const v5698 = stdlib.muldiv(v5693, v5644, v5641);
      const v5699 = stdlib.ge(v5698, v5688);
      const v5700 = [v5679, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v5693];
      const v5701 = [v5679, v5688, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v5702 = v5699 ? v5700 : v5701;
      const v5703 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
      const v5704 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
      const v5705 = v5702[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
      const v5706 = stdlib.ge(v5703, v5299);
      stdlib.assert(v5706, {
        at: './util.rsh:240:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapAForB'
        });
      const v5707 = stdlib.le(v5703, v5641);
      stdlib.assert(v5707, {
        at: './util.rsh:241:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapAForB'
        });
      const v5713 = stdlib.sub(v5639, v5703);
      const v5716 = v5638[stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 1)];
      const v5717 = v5638[stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 2)];
      const v5718 = [v5713, v5716, v5717];
      const v5719 = stdlib.Array_set(v5444, stdlib.checkedBigNumberify('./index.rsh:209:35:application', stdlib.UInt_max, 1), v5718);
      ;
      const v5721 = v5719[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v5722 = v5721[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      const v5724 = stdlib.sub(v5722, v5640);
      const v5726 = stdlib.gt(v5644, v5641);
      const v5727 = v5726 ? v5644 : v5641;
      const v5728 = stdlib.lt(v5644, v5641);
      const v5729 = v5728 ? v5644 : v5641;
      const v5730 = stdlib.muldiv(v5637, v5724, v5727);
      const v5731 = stdlib.ge(v5730, v5729);
      stdlib.assert(v5731, {
        at: './util.rsh:250:10:application',
        fs: ['at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapAForB'
        });
      const v5735 = stdlib.add(v5636, v5704);
      const v5739 = stdlib.add(v5640, v5705);
      const v5740 = {
        balA: v5735,
        balB: v5739
        };
      const v5747 = [v5703, v5704, v5705, v5724, v5637];
      const v5748 = await txn1.getOutput('Trader_swapAForB', 'v5747', ctc17, v5747);
      if (v1635) {
        stdlib.protect(ctc9, await interact.out(v5297, v5748), {
          at: './index.rsh:201:12:application',
          fs: ['at ./index.rsh:201:12:application call to [unknown function] (defined at: ./index.rsh:201:12:function exp)', 'at ./util.rsh:257:12:application call to "tradeDone" (defined at: ./index.rsh:207:40:function exp)', 'at ./index.rsh:216:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:207:40:application call to [unknown function] (defined at: ./index.rsh:207:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v9287 = v2877;
      const v9288 = v5740;
      const v9289 = v2879;
      const v9291 = v5719;
      const v9292 = v5719[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v9293 = v9292[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    case 'Trader_swapBForA0_174': {
      const v5887 = v3523[1];
      return;
      break;
      }
    }
  
  
  };
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    balA: ctc1,
    balB: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    fee: ctc1,
    lpFee: ctc1,
    totFee: ctc1
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc3
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Struct([['receiver', ctc3], ['newHarvesterAddr', ctc10], ['newProtocolFee', ctc11], ['newProviderFee', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    Harvester_harvest0_174: ctc13,
    Provider_deposit0_174: ctc14,
    Provider_withdraw0_174: ctc15,
    Trader_swapAForB0_174: ctc8,
    Trader_swapBForA0_174: ctc8
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  
  const [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1]);
  const v3195 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v3196 = v3195[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
  const v3197 = v3195[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
  const v3201 = v2878.balB;
  const v3202 = stdlib.sub(v2931, v3201);
  const v3205 = v2878.balA;
  const v3206 = stdlib.sub(v2929, v3205);
  const v3207 = stdlib.gt(v3196, stdlib.checkedBigNumberify('./util.rsh:199:18:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3207, {
    at: './util.rsh:199:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtA > 0',
    who: 'Trader_swapBForA'
    });
  const v3208 = stdlib.gt(v3202, v3196);
  stdlib.assert(v3208, {
    at: './util.rsh:200:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) > 0',
    who: 'Trader_swapBForA'
    });
  const v3209 = stdlib.gt(v3206, stdlib.checkedBigNumberify('./util.rsh:201:19:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3209, {
    at: './util.rsh:201:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) > 0',
    who: 'Trader_swapBForA'
    });
  const v3210 = stdlib.gt(v3197, stdlib.checkedBigNumberify('./util.rsh:202:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3210, {
    at: './util.rsh:202:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v3211 = stdlib.lt(v3197, v3206);
  stdlib.assert(v3211, {
    at: './util.rsh:203:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'expectedOut > 0',
    who: 'Trader_swapBForA'
    });
  const v3214 = stdlib.sub(stdlib.UInt_max, v2931);
  const v3215 = stdlib.ge(v3214, v3196);
  stdlib.assert(v3215, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:205:27:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v3216 = stdlib.add(v2931, v3196);
  const v3217 = stdlib.lt(v3216, stdlib.UInt_max);
  stdlib.assert(v3217, {
    at: './util.rsh:206:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v3218 = stdlib.sub(stdlib.UInt_max, v3202);
  const v3219 = stdlib.ge(v3218, v3196);
  stdlib.assert(v3219, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:207:24:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'swapAForB: new balance(A)',
    who: 'Trader_swapBForA'
    });
  const v3220 = stdlib.add(v3202, v3196);
  const v3221 = stdlib.lt(v3220, stdlib.UInt_max);
  stdlib.assert(v3221, {
    at: './util.rsh:208:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokA) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v3222 = stdlib.lt(v3206, stdlib.UInt_max);
  stdlib.assert(v3222, {
    at: './util.rsh:209:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'balance(tokB) <= UInt.max',
    who: 'Trader_swapBForA'
    });
  const v3223 = v2879.fee;
  const v3224 = v2879.lpFee;
  const v3225 = v2879.totFee;
  const v3228 = stdlib.mul(v3223, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
  const v3229 = stdlib.div(v3228, v3225);
  const v3239 = stdlib.add(v3224, v3223);
  const v3240 = stdlib.eq(v3225, v3239);
  const v3241 = stdlib.lt(v3225, stdlib.checkedBigNumberify('./util.rsh:92:95:decimal', stdlib.UInt_max, 100));
  const v3242 = v3240 ? v3241 : false;
  const v3243 = stdlib.gt(v3225, stdlib.checkedBigNumberify('./util.rsh:92:111:decimal', stdlib.UInt_max, 0));
  const v3244 = v3242 ? v3243 : false;
  stdlib.assert(v3244, {
    at: './util.rsh:96:4:application',
    fs: ['at ./util.rsh:102:15:application call to [unknown function] (defined at: ./util.rsh:94:37:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3246 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v3225);
  const v3247 = stdlib.gt(v3246, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3247, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v3248 = stdlib.div(stdlib.UInt_max, v3246);
  const v3249 = stdlib.le(v3196, v3248);
  stdlib.assert(v3249, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:105:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v3250 = stdlib.mul(v3196, v3246);
  const v3251 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v3252 = stdlib.le(v3202, v3251);
  stdlib.assert(v3252, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:106:31:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'mul overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v3253 = stdlib.mul(v3202, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
  const v3254 = stdlib.sub(stdlib.UInt_max, v3253);
  const v3255 = stdlib.ge(v3254, v3250);
  stdlib.assert(v3255, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:107:31:application call to "chkA" (defined at: ./util.rsh:12:57:function exp)', 'at ./util.rsh:123:36:application call to [unknown function] (defined at: ./util.rsh:99:68:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v3256 = stdlib.add(v3253, v3250);
  const v3257 = stdlib.muldiv(v3250, v3206, v3256);
  const v3258 = stdlib.gt(v3257, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3258, {
    at: './util.rsh:124:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut > 0',
    who: 'Trader_swapBForA'
    });
  const v3262 = stdlib.gt(v3220, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3262, {
    at: './util.rsh:67:4:application',
    fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3263 = stdlib.muldiv(v3196, v3206, v3220);
  const v3264 = stdlib.ge(v3263, v3257);
  stdlib.assert(v3264, {
    at: './util.rsh:40:4:application',
    fs: ['at ./util.rsh:126:23:application call to "chkS" (defined at: ./util.rsh:39:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'a >= b                                                          ',
    who: 'Trader_swapBForA'
    });
  const v3265 = stdlib.sub(v3263, v3257);
  const v3266 = stdlib.muldiv(v3196, v3223, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
  const v3267 = stdlib.gt(v3229, stdlib.checkedBigNumberify('./util.rsh:27:9:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v3267, {
    at: './util.rsh:27:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'denom > 0                                                       ',
    who: 'Trader_swapBForA'
    });
  const v3268 = stdlib.div(stdlib.UInt_max, v3229);
  const v3269 = stdlib.le(v3265, v3268);
  stdlib.assert(v3269, {
    at: './util.rsh:28:4:application',
    fs: ['at ./util.rsh:129:23:application call to "chkM" (defined at: ./util.rsh:26:57:function exp)', 'at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'outFee',
    who: 'Trader_swapBForA'
    });
  const v3270 = stdlib.mul(v3265, v3229);
  const v3271 = stdlib.div(v3270, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
  const v3272 = stdlib.le(v3271, v3265);
  stdlib.assert(v3272, {
    at: './util.rsh:130:4:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeOut <= outFee',
    who: 'Trader_swapBForA'
    });
  const v3274 = stdlib.le(v3266, v3220);
  stdlib.assert(v3274, {
    at: './util.rsh:131:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeIn <= reserveIn',
    who: 'Trader_swapBForA'
    });
  const v3275 = stdlib.le(v3271, v3206);
  stdlib.assert(v3275, {
    at: './util.rsh:132:8:application',
    fs: ['at ./util.rsh:211:60:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'pFeeOut <= reserveOut',
    who: 'Trader_swapBForA'
    });
  const v3276 = stdlib.muldiv(v3271, v3202, v3206);
  const v3277 = stdlib.ge(v3276, v3266);
  const v3278 = [v3257, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v3271];
  const v3279 = [v3257, v3266, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v3280 = v3277 ? v3278 : v3279;
  const v3281 = v3280[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 0)];
  const v3282 = v3280[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 1)];
  const v3283 = v3280[stdlib.checkedBigNumberify('./util.rsh:211:9:array', stdlib.UInt_max, 2)];
  const v3284 = stdlib.ge(v3281, v3197);
  stdlib.assert(v3284, {
    at: './util.rsh:212:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut >= expectedOut',
    who: 'Trader_swapBForA'
    });
  const v3285 = stdlib.le(v3281, v3206);
  stdlib.assert(v3285, {
    at: './util.rsh:213:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'amtOut <= bal(tokB)',
    who: 'Trader_swapBForA'
    });
  const v3286 = stdlib.sub(v3206, v3281);
  const v3289 = stdlib.sub(v2929, v3281);
  const v3292 = stdlib.sub(stdlib.UInt_max, v3201);
  const v3293 = stdlib.ge(v3292, v3282);
  stdlib.assert(v3293, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:219:25:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v3294 = stdlib.add(v3201, v3282);
  const v3295 = stdlib.le(v3294, v3216);
  stdlib.assert(v3295, {
    at: './util.rsh:220:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3296 = stdlib.sub(stdlib.UInt_max, v3205);
  const v3297 = stdlib.ge(v3296, v3283);
  stdlib.assert(v3297, {
    at: './util.rsh:14:4:application',
    fs: ['at ./util.rsh:221:26:application call to "assAdd" (defined at: ./util.rsh:12:57:function exp)', 'at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'add overflow                                                    ',
    who: 'Trader_swapBForA'
    });
  const v3298 = stdlib.add(v3205, v3283);
  const v3299 = stdlib.le(v3298, v3289);
  stdlib.assert(v3299, {
    at: './util.rsh:222:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3313 = stdlib.gt(v3202, v3206);
  const v3314 = v3313 ? v3202 : v3206;
  const v3315 = stdlib.lt(v3202, v3206);
  const v3316 = v3315 ? v3202 : v3206;
  const v3317 = stdlib.muldiv(v3220, v3286, v3314);
  const v3318 = stdlib.ge(v3317, v3316);
  stdlib.assert(v3318, {
    at: './util.rsh:229:9:application',
    fs: ['at ./index.rsh:220:44:application call to "doAssumeSwap" (defined at: ./util.rsh:196:141:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:220:29:application call to [unknown function] (defined at: ./index.rsh:220:29:function exp)', 'at ./index.rsh:79:19:application call to "runTrader_swapBForA0_174" (defined at: ./index.rsh:219:11:function exp)', 'at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'newK >= market.k',
    who: 'Trader_swapBForA'
    });
  const v3321 = ['Trader_swapBForA0_174', v3195];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2803, v2838, v2875, v2877, v2878, v2879, v2886, v2929, v2931, v3321],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:222:26:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:222:31:decimal', stdlib.UInt_max, 0), v2838], [stdlib.checkedBigNumberify('./index.rsh:222:44:decimal', stdlib.UInt_max, 0), v2802], [v3196, v2803]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
      
      switch (v3523[0]) {
        case 'Harvester_harvest0_174': {
          const v3526 = v3523[1];
          
          break;
          }
        case 'Provider_deposit0_174': {
          const v4110 = v3523[1];
          
          break;
          }
        case 'Provider_withdraw0_174': {
          const v4707 = v3523[1];
          
          break;
          }
        case 'Trader_swapAForB0_174': {
          const v5297 = v3523[1];
          
          break;
          }
        case 'Trader_swapBForA0_174': {
          const v5887 = v3523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v5888 = v5887[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
          const v5889 = v5887[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
          ;
          const v6008 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v6009 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v6013 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v6014 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v6015 = [v6009, v6013, v6014];
          const v6016 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v6015);
          ;
          const v6017 = v6016[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v6018 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v6022 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v6023 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v6024 = [v6018, v6022, v6023];
          const v6025 = stdlib.Array_set(v6016, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v6024);
          ;
          const v6026 = v6025[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v6027 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
          const v6028 = stdlib.add(v6027, v5888);
          const v6031 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
          const v6032 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
          const v6033 = [v6028, v6031, v6032];
          const v6034 = stdlib.Array_set(v6025, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v6033);
          sim_r.txns.push({
            amt: v5888,
            kind: 'to',
            tok: v2803
            });
          const v6351 = v6034[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v6352 = v6351[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          const v6353 = v2878.balB;
          const v6354 = stdlib.sub(v6352, v6353);
          const v6355 = v6034[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v6356 = v6355[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v6357 = v2878.balA;
          const v6358 = stdlib.sub(v6356, v6357);
          const v6359 = stdlib.lt(v5888, v6354);
          ;
          const v6360 = stdlib.gt(v5888, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
          ;
          const v6361 = stdlib.sub(v6354, v5888);
          const v6362 = v2879.fee;
          const v6364 = v2879.totFee;
          const v6367 = stdlib.mul(v6362, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
          const v6368 = stdlib.div(v6367, v6364);
          const v6385 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v6364);
          const v6389 = stdlib.mul(v5888, v6385);
          const v6392 = stdlib.mul(v6361, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
          const v6395 = stdlib.add(v6392, v6389);
          const v6396 = stdlib.muldiv(v6389, v6358, v6395);
          const v6397 = stdlib.gt(v6396, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
          ;
          const v6400 = stdlib.add(v6361, v5888);
          const v6401 = stdlib.gt(v6400, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
          ;
          const v6402 = stdlib.muldiv(v5888, v6358, v6400);
          const v6404 = stdlib.sub(v6402, v6396);
          const v6405 = stdlib.muldiv(v5888, v6362, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
          const v6409 = stdlib.mul(v6404, v6368);
          const v6410 = stdlib.div(v6409, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
          const v6411 = stdlib.le(v6410, v6404);
          ;
          const v6413 = stdlib.le(v6405, v6400);
          ;
          const v6414 = stdlib.le(v6410, v6358);
          ;
          const v6415 = stdlib.muldiv(v6410, v6361, v6358);
          const v6416 = stdlib.ge(v6415, v6405);
          const v6417 = [v6396, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v6410];
          const v6418 = [v6396, v6405, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v6419 = v6416 ? v6417 : v6418;
          const v6420 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
          const v6421 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
          const v6422 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
          const v6423 = stdlib.ge(v6420, v5889);
          ;
          const v6424 = stdlib.le(v6420, v6358);
          ;
          const v6432 = stdlib.sub(v6356, v6420);
          const v6435 = v6355[stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 1)];
          const v6436 = v6355[stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 2)];
          const v6437 = [v6432, v6435, v6436];
          const v6438 = stdlib.Array_set(v6034, stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 0), v6437);
          sim_r.txns.push({
            amt: v6420,
            kind: 'from',
            to: v3522,
            tok: v2802
            });
          const v6440 = v6438[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v6441 = v6440[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
          const v6443 = stdlib.sub(v6441, v6357);
          const v6445 = stdlib.gt(v6361, v6358);
          const v6446 = v6445 ? v6361 : v6358;
          const v6447 = stdlib.lt(v6361, v6358);
          const v6448 = v6447 ? v6361 : v6358;
          const v6449 = stdlib.muldiv(v6354, v6443, v6446);
          const v6450 = stdlib.ge(v6449, v6448);
          ;
          const v6454 = stdlib.add(v6357, v6422);
          const v6458 = stdlib.add(v6353, v6421);
          const v6459 = {
            balA: v6454,
            balB: v6458
            };
          const v6466 = [v6420, v6421, v6422, v6443, v6354];
          const v6467 = await txn1.getOutput('Trader_swapBForA', 'v6466', ctc17, v6466);
          
          const v9365 = v2877;
          const v9366 = v6459;
          const v9367 = v2879;
          const v9369 = v6438;
          const v9372 = v6438[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
          const v9373 = v9372[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc2, ctc1, ctc2, ctc4, ctc7, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v3523], secs: v3525, time: v3524, didSend: v1635, from: v3522 } = txn1;
  switch (v3523[0]) {
    case 'Harvester_harvest0_174': {
      const v3526 = v3523[1];
      return;
      break;
      }
    case 'Provider_deposit0_174': {
      const v4110 = v3523[1];
      return;
      break;
      }
    case 'Provider_withdraw0_174': {
      const v4707 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_174': {
      const v5297 = v3523[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_174': {
      const v5887 = v3523[1];
      undefined /* setApiDetails */;
      const v5888 = v5887[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 0)];
      const v5889 = v5887[stdlib.checkedBigNumberify('./index.rsh:219:11:spread', stdlib.UInt_max, 1)];
      ;
      const v6008 = v2886[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v6009 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v6013 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v6014 = v6008[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v6015 = [v6009, v6013, v6014];
      const v6016 = stdlib.Array_set(v2886, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2), v6015);
      ;
      const v6017 = v6016[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v6018 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v6022 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v6023 = v6017[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v6024 = [v6018, v6022, v6023];
      const v6025 = stdlib.Array_set(v6016, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0), v6024);
      ;
      const v6026 = v6025[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v6027 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 0)];
      const v6028 = stdlib.add(v6027, v5888);
      const v6031 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1)];
      const v6032 = v6026[stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 2)];
      const v6033 = [v6028, v6031, v6032];
      const v6034 = stdlib.Array_set(v6025, stdlib.checkedBigNumberify('./index.rsh:79:19:dot', stdlib.UInt_max, 1), v6033);
      ;
      const v6351 = v6034[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v6352 = v6351[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      const v6353 = v2878.balB;
      const v6354 = stdlib.sub(v6352, v6353);
      const v6355 = v6034[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v6356 = v6355[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v6357 = v2878.balA;
      const v6358 = stdlib.sub(v6356, v6357);
      const v6359 = stdlib.lt(v5888, v6354);
      stdlib.assert(v6359, {
        at: './util.rsh:235:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtIn <= balance(amtInTok)',
        who: 'Trader_swapBForA'
        });
      const v6360 = stdlib.gt(v5888, stdlib.checkedBigNumberify('./util.rsh:238:19:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v6360, {
        at: './util.rsh:238:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtIn > 0',
        who: 'Trader_swapBForA'
        });
      const v6361 = stdlib.sub(v6354, v5888);
      const v6362 = v2879.fee;
      const v6364 = v2879.totFee;
      const v6367 = stdlib.mul(v6362, stdlib.checkedBigNumberify('./util.rsh:119:38:decimal', stdlib.UInt_max, 100));
      const v6368 = stdlib.div(v6367, v6364);
      const v6385 = stdlib.sub(stdlib.checkedBigNumberify('./util.rsh:104:15:decimal', stdlib.UInt_max, 10000), v6364);
      const v6389 = stdlib.mul(v5888, v6385);
      const v6392 = stdlib.mul(v6361, stdlib.checkedBigNumberify('./util.rsh:106:43:decimal', stdlib.UInt_max, 10000));
      const v6395 = stdlib.add(v6392, v6389);
      const v6396 = stdlib.muldiv(v6389, v6358, v6395);
      const v6397 = stdlib.gt(v6396, stdlib.checkedBigNumberify('./util.rsh:124:17:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v6397, {
        at: './util.rsh:124:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtOut > 0',
        who: 'Trader_swapBForA'
        });
      const v6400 = stdlib.add(v6361, v5888);
      const v6401 = stdlib.gt(v6400, stdlib.checkedBigNumberify('./util.rsh:67:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v6401, {
        at: './util.rsh:67:4:application',
        fs: ['at ./util.rsh:125:48:application call to [unknown function] (defined at: ./util.rsh:64:75:function exp)', 'at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v6402 = stdlib.muldiv(v5888, v6358, v6400);
      const v6404 = stdlib.sub(v6402, v6396);
      const v6405 = stdlib.muldiv(v5888, v6362, stdlib.checkedBigNumberify('./util.rsh:128:38:decimal', stdlib.UInt_max, 10000));
      const v6409 = stdlib.mul(v6404, v6368);
      const v6410 = stdlib.div(v6409, stdlib.checkedBigNumberify('./util.rsh:129:52:decimal', stdlib.UInt_max, 100));
      const v6411 = stdlib.le(v6410, v6404);
      stdlib.assert(v6411, {
        at: './util.rsh:130:4:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'pFeeOut <= outFee',
        who: 'Trader_swapBForA'
        });
      const v6413 = stdlib.le(v6405, v6400);
      stdlib.assert(v6413, {
        at: './util.rsh:131:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'pFeeIn <= reserveIn',
        who: 'Trader_swapBForA'
        });
      const v6414 = stdlib.le(v6410, v6358);
      stdlib.assert(v6414, {
        at: './util.rsh:132:8:application',
        fs: ['at ./util.rsh:239:61:application call to [unknown function] (defined at: ./util.rsh:112:82:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'pFeeOut <= reserveOut',
        who: 'Trader_swapBForA'
        });
      const v6415 = stdlib.muldiv(v6410, v6361, v6358);
      const v6416 = stdlib.ge(v6415, v6405);
      const v6417 = [v6396, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v6410];
      const v6418 = [v6396, v6405, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v6419 = v6416 ? v6417 : v6418;
      const v6420 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 0)];
      const v6421 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 1)];
      const v6422 = v6419[stdlib.checkedBigNumberify('./util.rsh:239:9:array', stdlib.UInt_max, 2)];
      const v6423 = stdlib.ge(v6420, v5889);
      stdlib.assert(v6423, {
        at: './util.rsh:240:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'out >= expectedOut',
        who: 'Trader_swapBForA'
        });
      const v6424 = stdlib.le(v6420, v6358);
      stdlib.assert(v6424, {
        at: './util.rsh:241:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'amtOut <= bal(out)',
        who: 'Trader_swapBForA'
        });
      const v6432 = stdlib.sub(v6356, v6420);
      const v6435 = v6355[stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 1)];
      const v6436 = v6355[stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 2)];
      const v6437 = [v6432, v6435, v6436];
      const v6438 = stdlib.Array_set(v6034, stdlib.checkedBigNumberify('./index.rsh:227:35:application', stdlib.UInt_max, 0), v6437);
      ;
      const v6440 = v6438[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v6441 = v6440[stdlib.checkedBigNumberify('./index.rsh:49:36:application', stdlib.UInt_max, 0)];
      const v6443 = stdlib.sub(v6441, v6357);
      const v6445 = stdlib.gt(v6361, v6358);
      const v6446 = v6445 ? v6361 : v6358;
      const v6447 = stdlib.lt(v6361, v6358);
      const v6448 = v6447 ? v6361 : v6358;
      const v6449 = stdlib.muldiv(v6354, v6443, v6446);
      const v6450 = stdlib.ge(v6449, v6448);
      stdlib.assert(v6450, {
        at: './util.rsh:250:10:application',
        fs: ['at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
        msg: 'newK >= market.k',
        who: 'Trader_swapBForA'
        });
      const v6454 = stdlib.add(v6357, v6422);
      const v6458 = stdlib.add(v6353, v6421);
      const v6459 = {
        balA: v6454,
        balB: v6458
        };
      const v6466 = [v6420, v6421, v6422, v6443, v6354];
      const v6467 = await txn1.getOutput('Trader_swapBForA', 'v6466', ctc17, v6466);
      if (v1635) {
        stdlib.protect(ctc9, await interact.out(v5887, v6467), {
          at: './index.rsh:219:12:application',
          fs: ['at ./index.rsh:219:12:application call to [unknown function] (defined at: ./index.rsh:219:12:function exp)', 'at ./util.rsh:257:12:application call to "tradeDone" (defined at: ./index.rsh:225:40:function exp)', 'at ./index.rsh:234:33:application call to "doConsensusSwap" (defined at: ./util.rsh:232:160:function exp)', 'at ./index.rsh:225:40:application call to [unknown function] (defined at: ./index.rsh:225:40:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v9365 = v2877;
      const v9366 = v6459;
      const v9367 = v2879;
      const v9369 = v6438;
      const v9372 = v6438[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 1)];
      const v9373 = v9372[stdlib.checkedBigNumberify('./index.rsh:50:36:application', stdlib.UInt_max, 0)];
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Harvester_harvest((address,(byte,byte[32]),(byte,byte[8]),(byte,byte[8])))(uint64,uint64)`, `Provider_deposit(uint64,uint64,uint64)uint64`, `Provider_withdraw(uint64)uint64[2]`, `Trader_swapAForB(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`],
    pure: [`Tokens_aBal()uint64`, `Tokens_aTok()uint64`, `Tokens_bBal()uint64`, `Tokens_bTok()uint64`, `Tokens_liquidityToken()uint64`, `Tokens_minted()uint64`, `Tokens_protocolBals()(uint64,uint64)`, `Tokens_protocolInfo()(address,uint64,uint64,uint64)`],
    sigs: [`Harvester_harvest((address,(byte,byte[32]),(byte,byte[8]),(byte,byte[8])))(uint64,uint64)`, `Provider_deposit(uint64,uint64,uint64)uint64`, `Provider_withdraw(uint64)uint64[2]`, `Tokens_aBal()uint64`, `Tokens_aTok()uint64`, `Tokens_bBal()uint64`, `Tokens_bTok()uint64`, `Tokens_liquidityToken()uint64`, `Tokens_minted()uint64`, `Tokens_protocolBals()(uint64,uint64)`, `Tokens_protocolInfo()(address,uint64,uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BiAbAAQIAZBOEGQDIKCNBiiO19DJBLLOru8L3IeK1Q3Ip6uHD+bEyrgMw5mH6QbT8cbFCeHUmdEB4Jrp9QLZ7/m4A0On0tmeAe6xorcBAjD///////////8BJgcBAAEBAAgAAAAAAAAABQgAAAAAAAAAGQgAAAAAAAAAHgj//////////yI1ADEYQQ4jKmRJIls1ASRbNQI2GgAXSUECByI1BCU1BkkhCwxAASNJIQwMQABwSSENDEAAOUkhDgxAABkhDhJENAEjEkQoZClkUEk1A1ezCDUHQg3NIQ0SRDQBIxJEKGQpZFBJNQNXKAg1B0INtEkhDwxAABAhDxJENhoBNf8oNP9QQgG6IQwSRDQBIxJEKGQpZFBJNQNXMBA1B0INhEkhEAxAAHNJIREMQAAyIRESRDQBSSMMQAATIxJEKGQpZFBJNQNXAAg1B0INVyUSRChkKWRQSTUDVyAINQdCDUQhEBJENAFJIwxAABMjEkQoZClkUEk1A1dAODUHQg0lJRJEKGQpZFBJNQNXMCArUCcEUCcFUDUHQg0KIQsSRDQBSSMMQAATIxJEKGQpZFBJNQNXEAg1B0IM6yUSRChkKWRQSTUDV1AINQdCDNhJIRIMQAB2SSETDEAAVUkhFAxAABwhFBJENhoBNhoCUDYaA1A1/yk0/1CBO69QQgDEIRMSRDQBSSMMQAATIxJEKGQpZFBJNQNXCAg1B0IMiCUSRChkKWRQSTUDVygINQdCDHUhEhJENhoBNhoCUDX/gAEDNP9QIRWvUEIAeEkhFgxAADpJIRcMQAAZIRcSRDQBIxJEKGQpZFBJNQNXqwg1B0IMNCEWEkQ2GgE2GgJQNf+AAQQ0/1AhFa9QQgA3gdvY7UUSRDYaATX/gAECNP9QgUuvUEIAHjYaAhc1BDYaAzYaARdJJQxACX1JIQcMQAkcIQcSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkoiWzX/JFs1/iEFWzX9VxgQNfwhCls1+1cwEDX6V0A4NflXeDM1+Ek1BTX3gARdaqU5NPdQsDT3IlVJIRgMQAWQSSEHDEAEMkkjDEACFCMSRDT3VwEQNfY09iJbNfU0+FciETX0NPhXACI09FcACDT0VwgIUDT0VxABUFA18zTzVwARSTXyVwAINPJXCAhQNPJXEAFQNPNXESJQNfE08VcRETXwNPFXABE08CJbNPUIFjTwVwgIUDTwVxABUFA08VciEVA17zT1NP6ICyQ0+iRbNe4071cRESJbNO4JNe0071cAEUk17CJbNes0+iJbNeo06zTqCTXpNPU07QxENPUiDUQ07TT1CTXoNPkhCFs15zT5IRlbNeY09SEENOYJC0k15TTpHTToIQQLNOUIl0k15CINRDToNPUISTXjIg1ENPU06R0045c05Ak14jT1NOcdIQSXNeE04jTnIQYLNOYKCyEGCkk14DTiDkQ04TTjDkQ04DTpDkQ05BY04RZQJK9QNOQWJK9QNOAWUDTgNOgdNOmXNOEPTUk13yJbNd403yRbNd003yEFWzXcNN409iRbD0Q03jTpDkQ06zTeCRY07FcICFA07FcQAVA071cRIlA127EisgE03rISI7IQMQCyFDT/shGzNNtXABEiWzTqCTXaNO002h006TToSTTpDU2XNOk06Ek06QxND0SACAAAAAAAABlCNN4WNN0WUDTcFlA02hZQNO0WUFCwNN4WNN0WUDTcFlA02hZQNO0WUDUHNP80/jT9NPw0+zTqNNwIFjTuNN0IFlA0+TIGNNtCCL5INPdXARA19jT2Ils19TT4VyIRNfQ0+FcAIjT0VwAINPRXCAhQNPRXEAFQUDXzNPNXABFJNfIiWzT1CBY08lcICFA08lcQAVA081cRIlA18TT1NP+ICTg08VcRETXwNPFXABE08FcACDTwVwgIUDTwVxABUFA08VciEVA17zT6Ils17jTvVwARIls07gk17TTvVxERSTXsIls16zT6JFs16jTrNOoJNek09TTtDEQ09SINRDTtNPUJNeg0+SEIWzXnNPkhGVs15jT1IQQ05gkLSTXlNOkdNOghBAs05QiXSTXkIg1ENOg09QhJNeMiDUQ09TTpHTTjlzTkCTXiNPU05x0hBJc14TTiNOchBgs05goLIQYKSTXgNOIORDThNOMORDTgNOkORDTkFjThFlAkr1A05BYkr1A04BZQNOA06B006Zc04Q9NSTXfIls13jTfJFs13TTfIQVbNdw03jT2JFsPRDTeNOkORDTvVwARNOs03gkWNOxXCAhQNOxXEAFQUDTvVyIRUDXbsSKyATTeshIjshAxALIUNP6yEbM021cRESJbNOoJNdo07TTaHTTpNOhJNOkNTZc06TToSTTpDE0PRIAIAAAAAAAAFnM03hY03RZQNNwWUDTaFlA07RZQULA03hY03RZQNNwWUDTaFlA07RZQNQc0/zT+NP00/DT7NO403QgWNOo03AgWUDT5MgY020IGpkg091cBCDX2NPYXNfU0+FciETX0NPhXACI09CJbNPUIFjT0VwgIUDT0VxABUFA18zT1NP2IB0A081cAEUk18lcACDTyVwgIUDTyVxABUDTzVxEiUDXxNPFXERE18DTxVwARNPBXAAg08FcICFA08FcQAVBQNPFXIhFQNe8071cAEUk17iJbSTXtNPoiWwk17DTvVxERIls0+iRbCTXrNPU07B00+5dJNeo07A5ENO006gkWNO5XCAhQNO5XEAFQNO9XESJQNemxIrIBNOqyEiOyEDEAshQ0/7IRszT1NOsdNPuXSTXoNOsORDTpVxERNeexIrIBNOiyEiOyEDEAshQ0/rIRs4AIAAAAAAAAE6o06hY06BZQULA06hY06BZQNQc0/zT+NP00/DT7NPUJNPo0+TIGNOlXABE05yJbNOgJFjTnVwgIUDTnVxABUFA06VciEVBCBU9JJQxAAWhINPdXARg19jT2Ils19TT2JFs19DT2IQVbNfM0+FciETXyNPhXACI08lcACDTyVwgIUDTyVxABUFA18TTxVwARSTXwIls09QgWNPBXCAhQNPBXEAFQNPFXESJQNe809TT/iAW2NO9XERE17jTvVwARNO4iWzT0CBY07lcICFA07lcQAVBQNO9XIhFQNe009DT+iAWGNPUiDUQ09CINRDT7IhJBAB409TT0HTTzlzTzD0Q08zTtVyIRIlsORDTzNexCAEY09TT7HTTtVwARIls0+iJbCTT1CZc16zT0NPsdNO1XEREiWzT6JFsJNPQJl0k16jTrSTTqDE1JNek07VciESJbDkQ06TXsNO1XIhE167EisgE07LISI7IQMQCyFDT9shGzgAgAAAAAAAARBjTsFlCwNOwWNQc0/zT+NP00/DT7NOwINPo0+TIGNO1XACI06yJbNOwJFjTrVwgIUDTrVxABUFBCA+FINPdXAVM19jT4VyIRNfU0+FcAIjT1VwAINPVXCAhQNPVXEAFQUDX0NPRXABFJNfNXAAg081cICFA081cQAVA09FcRIlA18jTyVxERNfE08lcAETTxVwAINPFXCAhQNPFXEAFQUDTyVyIRUDXwNPY17zT5VwAgNe40+iJbNe00+iRbNew071cAIDXrMQA07hJENPBXABFJNeoiWzTtCRY06lcICFA06lcQAVA08FcRIlA16bEisgE07bISI7IQNOuyFDT/shGzNOlXERE16LEisgE07LISI7IQNOuyFDT+shGzgAgAAAAAAAAOfjTtFjTsFlBQsDTtFjTsFlA1BzTvVyAhSTXmIlVAAAc07jXnQgANNOZXASBJNeU150IAADTvV0EJSTXlIlVAAAo0+SEIWzXmQgAMNOUlW0k15DXmQgAANO9XSglJNeQiVUAACjT5IQpbNeVCAAw05CVbSTXjNeVCAAA05jTlCEk15DTlNOYIEjTkIQYMEDTkIg0QRDT/NP40/TT8NPs0/DTnNOYWUDTlFlA05BZQMgY06VcAETToIls07AkWNOhXCAhQNOhXEAFQUDTpVyIRUEICIyUSRCU0ARJENARJIhJMNAISEUQoZClkUDUDgASai5F0sDQDVwAgMQASRCEFrzX/NAMhCFs0AyEKWzQDgVBbNP8iNP80A1cwICtQJwRQJwVQMgY0A1dYM0IByUgiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yRbNf5XECA1/VcwCDX8VzggNfuABP2Z2wU0/xZQNP4WUDT9UDT8UDT7ULAhCYgCN4ERr0k1+klQNPpQNfk0/zT+E0Q0+VcAETX4JK80+FcICFA0+FcQAVA0+VcRIlA19yEJiAICsSKyASKyEiOyEDIKshQ0/7IRszT3VxERNfY091cAESSvNPZXCAhQNPZXEAFQUDT3VyIRUDX1IQmIAcexIrIBIrISI7IQMgqyFDT+shGzIRohBA1EIQmIAamxIrIBIQeyECEasiKBBrIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfSACAAAAAAAAAsVNPQWULA09DXzIjXyIjXxNP8WNP4WUCQ08QskWBc18DTzNPASNPJJTTXyNPElCEk18SEYDED/2DTyFEQ09VciETXxNPVXACInBjTxVwgIUDTxVxABUFBJNfBXIhE17zTwVwAiNO9XAAgnBlA071cQAVBQSTXuVyIRNe007lcAIjTtVwAINO1XCAhQKFBQNewxADT/FlA0/hZQNPtQNPMWUDTsUChLAVcAf2cpSwFXfwxnSCU1ATIGNQJCAHw1/zX+Nf01/DX7Nfo1+TX4Nfc0/1cAESJbNfY0/1cRESJbNfU09xY0+BZQNPkWUDT6UDT7FlA0/FA0/VA0/1A09hZQNPUWUChLAVcAf2cpSwFXfzxnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIIJbIQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEklCDIEEkQxFhJEJUMxGSISREL/3yI1ASI1AkL/wzQASUolCDUAOAcyChJEOBAlEkQ4CBJEiTQASUpJJQg1ADgUMgoSRDgQIxJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 187,
  unsupported: [],
  version: 10,
  warnings: []
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
                "internalType": "address payable",
                "name": "v2802",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2803",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T7",
                "name": "v2804",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T9",
                "name": "v2805",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2806",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v2802",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2803",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T7",
                "name": "v2804",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T9",
                "name": "v2805",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2806",
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
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "receiver",
                            "type": "address"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T17",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "address payable",
                                "name": "_Some",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T17",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T18",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T18",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Harvester_harvest0_174",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_174",
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
                    "name": "_Provider_withdraw0_174",
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
                    "internalType": "struct T23",
                    "name": "_Trader_swapAForB0_174",
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
                    "internalType": "struct T23",
                    "name": "_Trader_swapBForA0_174",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v3523",
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
    "name": "_reach_e3",
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
      }
    ],
    "name": "_reach_oe_v2837",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3710",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v4358",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[2]",
        "name": "v0",
        "type": "uint256[2]"
      }
    ],
    "name": "_reach_oe_v5034",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5747",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v6466",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "receiver",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T17",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "_Some",
                "type": "address"
              }
            ],
            "internalType": "struct T17",
            "name": "newHarvesterAddr",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T18",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_Some",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "newProtocolFee",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T18",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "_None",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_Some",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "newProviderFee",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Harvester_harvest",
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
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "Provider_deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "Provider_withdraw",
    "outputs": [
      {
        "internalType": "uint256[2]",
        "name": "",
        "type": "uint256[2]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_aBal",
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
    "name": "Tokens_aTok",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_bBal",
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
    "name": "Tokens_bTok",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_liquidityToken",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Tokens_minted",
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
    "name": "Tokens_protocolBals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_balA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_balB",
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
    "name": "Tokens_protocolInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "_addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_totFee",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Trader_swapAForB",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
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
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Trader_swapBForA",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
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
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address payable",
                            "name": "receiver",
                            "type": "address"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T17",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "address payable",
                                "name": "_Some",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T17",
                            "name": "newHarvesterAddr",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T18",
                            "name": "newProtocolFee",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "enum _enum_T18",
                                "name": "which",
                                "type": "uint8"
                              },
                              {
                                "internalType": "bool",
                                "name": "_None",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "_Some",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T18",
                            "name": "newProviderFee",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Harvester_harvest0_174",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_174",
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
                    "name": "_Provider_withdraw0_174",
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
                    "internalType": "struct T23",
                    "name": "_Trader_swapAForB0_174",
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
                    "internalType": "struct T23",
                    "name": "_Trader_swapBForA0_174",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v3523",
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
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162006956380380620069568339810160408190526200002691620009fa565b60008055436003556200003862000645565b604080518351815260208085015180516001600160a01b0390811683850152918101518216838501528084015151606080850191909152810151516001600160c01b03191660808085019190915201511660a082015290517f8e455783dec28612d137090f254caa13d244b757017d0cf8f68488802eeab29b9181900360c00190a1805160009081905281516020908101829052825160409081019290925282518184018051919091528351815183015283519051909201919091528281015190810151905162000129916001600160a01b039182169116146200011e57600162000121565b60005b600f62000598565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200016b9290620005c2565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001b19190600190620005c2565b60a0820152620001c43415601062000598565b620001d26001601162000598565b60c081018051600090819052815160209081018290529151604090810182905260e08401519190915283820151810151518151928301520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e086015151602084015291016040516020818303038152906040526000196012604051620002af90620007ec565b620002c09695949392919062000b50565b604051809103906000f080158015620002dd573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f5d0fd2bb18725e5a1c527aac82750cff11b5063960ddf023c0b3f976088ed8209060200160405180910390a16020828101805151610140840180516001600160a01b039283169052915183015191519116910152600061018082018190525b6002811015620003e957816101400151816002811062000381576200038162000aea565b60200201516001600160a01b03166101a0830152610180820151620003c557816101a001516001600160a01b03168261012001516001600160a01b031614620003cc565b8161018001515b151561018083015280620003e08162000bbb565b9150506200035d565b506101808101511515610160820181905262000417906200040c5760016200040f565b60005b601262000598565b6101c081018051600019905260a082018051604090810151602090810151845190910152815181015181015183519015159101525190516200045d9190600290620005c2565b6101e08201818152604091820151516102008401805191909152805160001960209091015281518301518301518151901515930192909252519051620004a79190600290620005c2565b6102208201818152604091820151516102408401805191909152815183015160209081015182519091015280516000930192909252519051620004ee9190600290620005c2565b610260820152620004fe620007fa565b33815260208084018051516001600160a01b0390811683850152815183015181166040808601919091529151608090810151821660608601526101208601519091169084015261026084015160a08401526001600081905543905551620005689183910162000be5565b604051602081830303815290604052600290805190602001906200058e92919062000833565b5050505062000cb4565b81620005be5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620005cc620008c2565b60005b60038110156200062257848160038110620005ee57620005ee62000aea565b602002015182826003811062000608576200060862000aea565b602002015280620006198162000bbb565b915050620005cf565b508181846003811062000639576200063962000aea565b60200201529392505050565b604080516102e08101909152600061028082018181526102a083018290526102c08301919091528152602081016200067c620008c2565b81526040805160608101825260008082526020828101829052928201529101908152602001620006ab620008c2565b81526040805160608101825260008082526020828101829052928201529101908152602001620006da620008c2565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260006020820181905260408201526060016200072c6200090f565b815260200160001515815260200160001515815260200160006001600160a01b031681526020016200077a604051806060016040528060008152602001600081526020016000151581525090565b815260200162000789620008c2565b81526040805160608101825260008082526020828101829052928201529101908152602001620007b8620008c2565b81526040805160608101825260008082526020828101829052928201529101908152602001620007e7620008c2565b905290565b61108780620058cf83390190565b6040805160c08101825260008082526020820181905291810182905260608101829052608081019190915260a08101620007e7620008c2565b828054620008419062000c77565b90600052602060002090601f016020900481019282620008655760008555620008b0565b82601f106200088057805160ff1916838001178555620008b0565b82800160010185558215620008b0579182015b82811115620008b057825182559160200191906001019062000893565b50620008be9291506200092d565b5090565b60405180606001604052806003905b620008f8604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620008d15790505090565b60405180604001604052806002906020820280368337509192915050565b5b80821115620008be57600081556001016200092e565b604080519081016001600160401b03811182821017156200097557634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200097557634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200097557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620009f557600080fd5b919050565b600081830360c081121562000a0e57600080fd5b62000a1862000944565b8351815260a0601f198301121562000a2f57600080fd5b62000a396200097b565b62000a4760208601620009dd565b815262000a5760408601620009dd565b60208201526020605f198401121562000a6f57600080fd5b62000a79620009ac565b6060860151815260408201526020607f198401121562000a9857600080fd5b62000aa2620009ac565b60808601519093506001600160c01b03198116811462000ac157600080fd5b83526060810183905262000ad860a08601620009dd565b60808201526020820152949350505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000b285760208185018101518683018201520162000b0a565b8181111562000b3b576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b6560c083018962000b00565b828103602084015262000b79818962000b00565b9050828103604084015262000b8f818862000b00565b9050828103606084015262000ba5818762000b00565b6080840195909552505060a00152949350505050565b600060001982141562000bde57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006101c08201905060018060a01b0380845116835260208181860151168185015260408281870151168186015260608381880151168187015283608088015116608087015260a0870151935060a0860160005b600381101562000c6b578551805183528581015186840152840151151584830152948401949082019060010162000c39565b50505050505092915050565b600181811c9082168062000c8c57607f821691505b6020821081141562000cae57634e487b7160e01b600052602260045260246000fd5b50919050565b614c0b8062000cc46000396000f3fe6080604052600436106101015760003560e01c806368ac35681161008f578063c8dc446711610061578063c8dc44671461027a578063d2846e011461028f578063d469fcc7146102a4578063d4a2311c146102b9578063dc8d714f146102cc57005b806368ac35681461020d5780638323075714610222578063ab53f2c614610237578063c8867ae91461025a57005b806332020fec116100d357806332020fec1461016957806358b394ee146101895780635ac10ac2146101ab5780635bbc0ed6146101be5780635f827f46146101eb57005b80631894c0a11461010a5780631e93b0f11461011d57806328db2cb2146101415780632c10a1591461015657005b3661010857005b005b610108610118366004614019565b6102df565b34801561012957600080fd5b506003545b6040519081526020015b60405180910390f35b34801561014d57600080fd5b5061012e610303565b610108610164366004614032565b610484565b61017c610177366004614044565b6104a4565b604051610138919061405d565b34801561019557600080fd5b5061019e610502565b604051610138919061408e565b61012e6101b93660046140a5565b610692565b3480156101ca57600080fd5b506101d36106fa565b6040516001600160a01b039091168152602001610138565b3480156101f757600080fd5b50610200610872565b60405161013891906140d1565b34801561021957600080fd5b506101d3610a29565b34801561022e57600080fd5b5060015461012e565b34801561024357600080fd5b5061024c610b94565b604051610138929190614131565b61026d61026836600461416b565b610c31565b604051610138919061418d565b34801561028657600080fd5b506101d3610c98565b34801561029b57600080fd5b5061012e610dfc565b3480156102b057600080fd5b5061012e610f7b565b61019e6102c73660046143e2565b6110fa565b61026d6102da36600461416b565b611160565b6102e76134af565b6102ff6102f9368490038401846144bc565b826111c5565b5050565b6000600160005414156103c05760006002805461031f90614584565b80601f016020809104026020016040519081016040528092919081815260200182805461034b90614584565b80156103985780601f1061036d57610100808354040283529160200191610398565b820191906000526020600020905b81548152906001019060200180831161037b57829003601f168201915b50505050508060200190518101906103b09190614653565b90506103be6000600c612f34565b505b60046000541415610475576000600280546103da90614584565b80601f016020809104026020016040519081016040528092919081815260200182805461040690614584565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b505050505080602001905181019061046b919061475f565b6080015192915050565b6104816000600c612f34565b90565b61048c6134af565b6102ff61049e36849003840184614819565b82612f5a565b6104ac6134fa565b6104b46134af565b6104bc613518565b6104c4613532565b604080516020808201835287825260608401919091526002835281518082019092528282528301526104f682846111c5565b50506040015192915050565b6040805180820190915260008082526020820152600160005414156105d15760006002805461053090614584565b80601f016020809104026020016040519081016040528092919081815260200182805461055c90614584565b80156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b50505050508060200190518101906105c19190614653565b90506105cf6000600d612f34565b505b60046000541415610686576000600280546105eb90614584565b80601f016020809104026020016040519081016040528092919081815260200182805461061790614584565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b505050505080602001905181019061067c919061475f565b60a0015192915050565b6104816000600d612f34565b600061069c6134af565b6106a4613518565b6106ac613532565b604080516060810182528881526020808201899052818301889052838301919091526001835281518082019092528282528301526106ea82846111c5565b50506020015190505b9392505050565b6000600160005414156107b15760006002805461071690614584565b80601f016020809104026020016040519081016040528092919081815260200182805461074290614584565b801561078f5780601f106107645761010080835404028352916020019161078f565b820191906000526020600020905b81548152906001019060200180831161077257829003601f168201915b50505050508060200190518101906107a79190614653565b6040015192915050565b60046000541415610866576000600280546107cb90614584565b80601f01602080910402602001604051908101604052809291908181526020018280546107f790614584565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b505050505080602001905181019061085c919061475f565b6020015192915050565b6104816000600a612f34565b61087a6135d5565b600160005414156109685760006002805461089490614584565b80601f01602080910402602001604051908101604052809291908181526020018280546108c090614584565b801561090d5780601f106108e25761010080835404028352916020019161090d565b820191906000526020600020905b8154815290600101906020018083116108f057829003601f168201915b50505050508060200190518101906109259190614653565b905061092f613606565b60609182015181516001600160a01b03909116905280516005602090910152805160196040909101528051601e92019190915251919050565b60046000541415610a1d5760006002805461098290614584565b80601f01602080910402602001604051908101604052809291908181526020018280546109ae90614584565b80156109fb5780601f106109d0576101008083540402835291602001916109fb565b820191906000526020600020905b8154815290600101906020018083116109de57829003601f168201915b5050505050806020019051810190610a13919061475f565b60c0015192915050565b6104816000600e612f34565b600060016000541415610ad657600060028054610a4590614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7190614584565b8015610abe5780601f10610a9357610100808354040283529160200191610abe565b820191906000526020600020905b815481529060010190602001808311610aa157829003601f168201915b505050505080602001905181019061085c9190614653565b60046000541415610b8857600060028054610af090614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1c90614584565b8015610b695780601f10610b3e57610100808354040283529160200191610b69565b820191906000526020600020905b815481529060010190602001808311610b4c57829003601f168201915b5050505050806020019051810190610b81919061475f565b5192915050565b61048160006008612f34565b600060606000546002808054610ba990614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd590614584565b8015610c225780601f10610bf757610100808354040283529160200191610c22565b820191906000526020600020905b815481529060010190602001808311610c0557829003601f168201915b50505050509050915091509091565b610c39613619565b610c416134af565b610c49613518565b610c51613532565b60408051808201825287815260208082018890526080840191909152600383528151808201909252828252830152610c8982846111c5565b50506060015190505b92915050565b600060016000541415610d4557600060028054610cb490614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce090614584565b8015610d2d5780601f10610d0257610100808354040283529160200191610d2d565b820191906000526020600020905b815481529060010190602001808311610d1057829003601f168201915b505050505080602001905181019061046b9190614653565b60046000541415610df057600060028054610d5f90614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8b90614584565b8015610dd85780601f10610dad57610100808354040283529160200191610dd8565b820191906000526020600020905b815481529060010190602001808311610dbb57829003601f168201915b50505050508060200190518101906107a7919061475f565b6104816000600b612f34565b600060016000541415610eb957600060028054610e1890614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4490614584565b8015610e915780601f10610e6657610100808354040283529160200191610e91565b820191906000526020600020905b815481529060010190602001808311610e7457829003601f168201915b5050505050806020019051810190610ea99190614653565b9050610eb760006009612f34565b505b60046000541415610f6f57600060028054610ed390614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610eff90614584565b8015610f4c5780601f10610f2157610100808354040283529160200191610f4c565b820191906000526020600020905b815481529060010190602001808311610f2f57829003601f168201915b5050505050806020019051810190610f64919061475f565b610120015192915050565b61048160006009612f34565b60006001600054141561103857600060028054610f9790614584565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc390614584565b80156110105780601f10610fe557610100808354040283529160200191611010565b820191906000526020600020905b815481529060010190602001808311610ff357829003601f168201915b50505050508060200190518101906110289190614653565b905061103660006007612f34565b505b600460005414156110ee5760006002805461105290614584565b80601f016020809104026020016040519081016040528092919081815260200182805461107e90614584565b80156110cb5780601f106110a0576101008083540402835291602001916110cb565b820191906000526020600020905b8154815290600101906020018083116110ae57829003601f168201915b50505050508060200190518101906110e3919061475f565b610100015192915050565b61048160006007612f34565b60408051808201909152600080825260208201526111166134af565b61111e613518565b611126613532565b60408051602080820183528782528381019190915260008352815180820190925282825283015261115782846111c5565b50505192915050565b611168613619565b6111706134af565b611178613518565b611180613532565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526111b882846111c5565b5050608001519392505050565b6111d56004600054146048612f34565b81516111f09015806111e957508251600154145b6049612f34565b60008080556002805461120290614584565b80601f016020809104026020016040519081016040528092919081815260200182805461122e90614584565b801561127b5780601f106112505761010080835404028352916020019161127b565b820191906000526020600020905b81548152906001019060200180831161125e57829003601f168201915b5050505050806020019051810190611293919061475f565b905061129d613648565b7f92cab69d2c81bf85be48024420d7e5e5b977d37539cb53e37dcb1b534c45aed1846040516112cc91906148b9565b60405180910390a160006020850151515160048111156112ee576112ee61486f565b141561185157602080850151510151815261130b34156017612f34565b60e082018051604090810151516020848101805192909252835183015181015182519091015282518201518201518151901515920191909152905190516113559190600290613162565b816040018190525061137761137033846040015160006131d6565b6018612f34565b6040818101805151516060840180519190915281515160209081015182519091015281515183015181519015159301929092525190516113ba9190600090613162565b608082015281516113d9906113d290339060006131d6565b6019612f34565b6080810180516020908101515160a08401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516114229190600190613162565b8160c0018190525061144461143d33846020015160006131d6565b601a612f34565b60c082015151611460906001600160a01b03163314601b612f34565b60a08201515160c0820151515161147791906149dc565b60e0820180519190915260c0820180515160209081015183519091015280515160409081015183519015159101525190516114b59190600090613162565b61010082015281518151515160a0840151516114d29291906131ec565b60a08201516020015161010082015160016020020151516114f391906149dc565b610120820180519190915261010082018051602090810151810151835182015290518101516040908101519251921515920191909152828101518251515160a08501519092015161154492906131ec565b60a0820180515161014083018051919091529051602090810151825190910152516040517fdacdd07bb540f9f6f8639e34680fbe904fdad84f5921a05bbf68ca29e489df54916115939161408e565b60405180910390a161014081015183526000815151602001515160018111156115be576115be61486f565b14156115de5760c0820151516001600160a01b0316610160820152611622565b6001815151602001515160018111156115f9576115f961486f565b14156116225780515160200151604001516001600160a01b031661018082018190526101608201525b60008151516040015151600181111561163d5761163d61486f565b14156116575760c0820151602001516101a0820152611692565b6001815151604001515160018111156116725761167261486f565b14156116925780515160409081015101516101c082018190526101a08201525b6000815151606001515160018111156116ad576116ad61486f565b14156116c75760c0820151604001516101e0820152611702565b6001815151606001515160018111156116e2576116e261486f565b141561170257805151606001516040015161020082018190526101e08201525b806101e00151816101a0015161171891906149f3565b6102208201526101a08101516101e082015161176f91611737916149f3565b82610220015114611749576000611753565b6064826102200151105b61175e576000611768565b6000826102200151115b601c612f34565b610160810151610240820180516001600160a01b039092169091526101a08201518151602001526101e08201518151604001526102208201519051606001526117b6613d46565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601805185518301526080870151838601805191909152905181519093019290925261024085015182519093019290925251439101526101008201516101208301516118399190600190613162565b60208201516080015261184b81613205565b50612f2e565b600160208501515151600481111561186b5761186b61486f565b1415611cee576020840151516040015161026082015261188d3415601d612f34565b60e082018051604090810151516102808401805191909152825182015160209081015182519091015282518201518201518151901515920191909152905190516118da9190600290613162565b816102a001819052506118fd6118f633846040015160006131d6565b601e612f34565b610260810151516102a0820151515161191691906149f3565b6102c082018051919091526102a0820180515160209081015183519091015280515160409081015183519015159101525190516119569190600090613162565b6102e082015281516102608201515161197c91611975913391906131d6565b601f612f34565b610260810151602001516102e0820151600160200201515161199e91906149f3565b61030082018051919091526102e08201805160209081015181015183518201528151015160409081015183519015159101525190516119e09190600190613162565b816103200181905250611a0b611a04338460200151846102600151602001516131d6565b6020612f34565b61026081015151611a1f9015156021612f34565b611a36600082610260015160200151116022612f34565b6080820151611aae57610260810151604081015160208201519151611a74928291611a619190614a0b565b611a6b9190614a2a565b10156023612f34565b610320810151611a999060026020020151516102608301516040015111156024612f34565b61026081015160400151610340820152611ba6565b6102608101515160a0830151516103208301515151611acd91906149dc565b611ad791906149dc565b608083015161026083015151611aed9190614a0b565b611af79190614a2a565b61036082015261026081015160209081015160a084015182015161032084015190920151519091611b27916149dc565b611b3191906149dc565b826080015182610260015160200151611b4a9190614a0b565b611b549190614a2a565b610380820181905261036082015110611b7257806103800151611b79565b8061036001515b6103a082018190526103208201516040015151611b999111156025612f34565b6103a08101516103408201525b6103408101516103208201516040015151611bc191906149dc565b6103c08201805191909152610320820180516040908101516020908101518451909101529051810151810151915191151591810191909152820151610340820151611c0e919033906131ec565b7ff3008340111bb3c10013126a79e9787d6100d94a14e9109c1f1be294102c71a2816103400151604051611c4491815260200190565b60405180910390a16103408101516020840152611c5f613d46565b825181516001600160a01b0391821690526020808501518351908316910152604080850151835192169101526060808401518251909101526103408201516080840151611cac91906149f3565b602080830180519290925260a085015182519091015260c084015181516040015251436060909101526103208201516103c08301516118399190600290613162565b6002602085015151516004811115611d0857611d0861486f565b141561211a57602084015151606001516103e0820152611d2a34156026612f34565b6103e08101515160e08301516040015151611d4591906149f3565b610400820180519190915260e08301805160409081015160209081015184519091015281518101518101518351901515910152519051611d889190600290613162565b61042082015260408201516103e082015151611db191611daa913391906131d6565b6027612f34565b6104208101805151516104408301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611df69190600090613162565b6104608201528151611e1690611e0f90339060006131d6565b6028612f34565b6104608101805160209081015151610480840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611e619190600190613162565b816104a00181905250611e84611e7d33846020015160006131d6565b6029612f34565b60a0820151516104a08201515151611e9c91906149dc565b6104c082015260a0820151602001516104a08201516001602002015151611ec391906149dc565b6104e082015260808201516104c08201516103e083015151611ee59190614a0b565b611eef9190614a2a565b61050082018190526104c0820151611f0a911115602a612f34565b6105008101516104a08201515151611f2291906149dc565b61052082018051919091526104a082018051516020908101518351909101528051516040908101518351901515910152519051611f629190600090613162565b6105408201528151610500820151611f7c919033906131ec565b60808201516104e08201516103e083015151611f989190614a0b565b611fa29190614a2a565b61056082018190526104e0820151611fbd911115602b612f34565b6105608101516105408201516020015151611fd891906149dc565b610580820180519190915261054082018051602090810151810151835182015290518101516040908101519251921515920191909152820151610560820151612023919033906131ec565b6105008101516105a08201805191909152610560820151815160200152516040517f40c2cc0ef1052a48befdb46eedb0ce68c1c846ee95f25ff848be9af8157974079161206f9161405d565b60405180910390a16105a0810151604084015261208a613d46565b825181516001600160a01b0391821690526020808501518351908316910152604080850151835192169101526060808401518251909101526103e08201515160808401516120d891906149dc565b602080830180519290925260a085015182519091015260c084015181516040015251436060909101526105408201516105808301516118399190600190613162565b60036020850151515160048111156121345761213461486f565b141561282c57602084015151608001516105c08201526121563415602c612f34565b60e082018051604090810151516105e08401805191909152825182015160209081015182519091015282518201518201518151901515920191909152905190516121a39190600290613162565b8161060001819052506121c66121bf33846040015160006131d6565b602d612f34565b6105c08101515161060082015151516121df91906149f3565b61062082018051919091526106008201805151602090810151835190910152805151604090810151835190151591015251905161221f9190600090613162565b61064082015281516105c0820151516122459161223e913391906131d6565b602e612f34565b61064081018051602090810151516106608401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516122909190600190613162565b8161068001819052506122b36122ac33846020015160006131d6565b602f612f34565b60a08201515161068082015151516122cb91906149dc565b6106a082015260a08201516020015161068082015160016020020151516122f291906149dc565b6106c08201526106a08101516105c08201515161231191116030612f34565b6105c0810151516123259015156031612f34565b6105c0810151516106a082015161233c91906149dc565b6106e082015260c082015160600151612357906127106149dc565b6105c0820151516123689190614a0b565b61070082018190526106e08201516123839061271090614a0b565b61238d91906149f3565b816106c001518261070001516123a39190614a0b565b6123ad9190614a2a565b61072082018190526123c29015156032612f34565b6105c0810151516106e08201516123d991906149f3565b61074082018190526123ee9015156033612f34565b6107208101516107408201516106c08301516105c0840151516124119190614a0b565b61241b9190614a2a565b61242591906149dc565b61076082015260c0820151602001516105c0820151516127109161244891614a0b565b6124529190614a2a565b61078082015260c0820151606081015160209091015160649190612477908390614a0b565b6124819190614a2a565b8261076001516124919190614a0b565b61249b9190614a2a565b6107a082018190526107608201516124b69111156034612f34565b6124ce81610740015182610780015111156035612f34565b6124e6816106c00151826107a0015111156036612f34565b610720810180516107c083018051919091528051600060209182018190526107a085018051935160409081019490945293516107e08601805191909152610780860180518251909401939093525190920191909152516106c08301516106e08401519251919290916125589190614a0b565b6125629190614a2a565b101561257357806107e0015161257a565b806107c001515b61080082018190526105c082015160200151905161259b9111156037612f34565b6125b7816106c001518261080001516000015111156038612f34565b6108008101515161068082015160200151516125d391906149dc565b61082082018051919091526106808201805160209081015181015183518201528151015160409081015183519015159101525190516126159190600190613162565b610840820152602082015161080082015151612633919033906131ec565b60a082015160200151610840820151600160200201515161265491906149dc565b6108608201526106c08101516106e08201516126cd911161267a57816106c00151612681565b816106e001515b826106c00151836106e001511161269d57826106c001516126a4565b826106e001515b836108600151846106a001516126ba9190614a0b565b6126c49190614a2a565b10156039612f34565b6108008101516020015160a0830151516126e791906149f3565b610880820151526108008101516040015160a08301516020015161270b91906149f3565b61088082015160209081019190915261080082018051516108a0840180519190915281518301518151909301929092525160409081015182518201526108608301518251606001526106a0830151825160800152905190517f9e106220f30ae53df284a4e0beec034dee4e9dd88379db34714802d467b98df39161278e9161418d565b60405180910390a16108a081015160608401526127a9613d46565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015183860180519190915261088087015181519094019390935260c087015183519094019390935281514391015261084084015190519091015261184b81613205565b60046020850151515160048111156128465761284661486f565b1415612f2e5760208401515160a001516108c08201526128683415603a612f34565b60e082018051604090810151516108e08401805191909152825182015160209081015182519091015282518201518201518151901515920191909152905190516128b59190600290613162565b8161090001819052506128d86128d133846040015160006131d6565b603b612f34565b610900810180515151610920830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161291d9190600090613162565b610940820152815161293d9061293690339060006131d6565b603c612f34565b6108c081015151610940820151602001515161295991906149f3565b610960820180519190915261094082018051602090810151810151835182015281510151604090810151835190151591015251905161299b9190600190613162565b61098082015260208201516108c0820151516129c4916129bd913391906131d6565b603d612f34565b60a08201516020015161098082015160016020020151516129e591906149dc565b6109a082015260a0820151516109808201515151612a0391906149dc565b6109c08201526109a08101516108c082015151612a229111603e612f34565b6108c081015151612a36901515603f612f34565b6108c0810151516109a0820151612a4d91906149dc565b6109e082015260c082015160600151612a68906127106149dc565b6108c082015151612a799190614a0b565b610a0082018190526109e0820151612a949061271090614a0b565b612a9e91906149f3565b816109c0015182610a000151612ab49190614a0b565b612abe9190614a2a565b610a208201819052612ad39015156040612f34565b6108c0810151516109e0820151612aea91906149f3565b610a408201819052612aff9015156041612f34565b610a20810151610a408201516109c08301516108c084015151612b229190614a0b565b612b2c9190614a2a565b612b3691906149dc565b610a6082015260c0820151602001516108c08201515161271091612b5991614a0b565b612b639190614a2a565b610a8082015260c0820151606081015160209091015160649190612b88908390614a0b565b612b929190614a2a565b82610a600151612ba29190614a0b565b612bac9190614a2a565b610aa08201819052610a60820151612bc79111156042612f34565b612bdf81610a40015182610a80015111156043612f34565b612bf7816109c0015182610aa0015111156044612f34565b610a2081018051610ac08301805191909152805160006020918201819052610aa08501805193516040908101949094529351610ae08601805191909152610a80860180518251909401939093525190920191909152516109c08301516109e0840151925191929091612c699190614a0b565b612c739190614a2a565b1015612c845780610ae00151612c8b565b80610ac001515b610b0082018190526108c0820151602001519051612cac9111156045612f34565b612cc8816109c0015182610b0001516000015111156046612f34565b610b00810151516109808201515151612ce191906149dc565b610b20820180519190915261098082018051516020908101518351909101528051516040908101518351901515910152519051612d219190600090613162565b610b408201528151610b0082015151612d3c919033906131ec565b60a082015151610b408201515151612d5491906149dc565b610b608201526109c08101516109e0820151612dcd9111612d7a57816109c00151612d81565b816109e001515b826109c00151836109e0015111612d9d57826109c00151612da4565b826109e001515b83610b600151846109a00151612dba9190614a0b565b612dc49190614a2a565b10156047612f34565b610b008101516040015160a083015151612de791906149f3565b610b8082015152610b0081015160209081015160a084015190910151612e0d91906149f3565b610b80820151602090810191909152610b008201805151610ba084018051919091528151830151815190930192909252516040908101518251820152610b608301518251606001526109a0830151825160800152905190517f09e3ec354e6f1bb81eefa5107109b3f0d1c8ba905e19be4424fa01c0c60ee86591612e909161418d565b60405180910390a1610ba08101516080840152612eab613d46565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151838601805191909152610b8087015181519094019390935260c0870151835190940193909352815143910152610b4084015190519091015261184b81613205565b50505050565b816102ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b612f6a6001600054146015612f34565b8151612f85901580612f7e57508251600154145b6016612f34565b600080805560028054612f9790614584565b80601f0160208091040260200160405190810160405280929190818152602001828054612fc390614584565b80156130105780601f10612fe557610100808354040283529160200191613010565b820191906000526020600020905b815481529060010190602001808311612ff357829003601f168201915b50505050508060200190518101906130289190614653565b9050613032613d95565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a161307d34156013612f34565b8151613095906001600160a01b031633146014612f34565b8051600090819052815160209081019190915260608084015182840180516001600160a01b0390921690915280516005930192909252815160196040909101529051601e9101526130e4613d46565b60208084015182516001600160a01b039182169052604080860151845190831690840152608080870151855193169282019290925284518451606090810191909152848401805160009052865181518601529386015184519092019190915282514391015260a08501519151015261315b81613205565b5050505050565b61316a613dbe565b60005b60038110156131b657848160038110613188576131886149b0565b602002015182826003811061319f5761319f6149b0565b6020020152806131ae81614a4c565b91505061316d565b50818184600381106131ca576131ca6149b0565b60200201529392505050565b60006131e4838530856132c9565b949350505050565b6131f78383836133a3565b61320057600080fd5b505050565b61320d613e09565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015190840152808401805151608080860191909152815183015160a0860152815184015160c0860152815181015160e086015281518101515151610100860152905101518101515161012084015260046000554360015590516132a591839101614aa5565b60405160208183030381529060405260029080519060200190613200929190613e85565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161333091614b9c565b60006040518083038185875af1925050503d806000811461336d576040519150601f19603f3d011682016040523d82523d6000602084013e613372565b606091505b509150915061338382826001613474565b50808060200190518101906133989190614bb8565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161340291614b9c565b60006040518083038185875af1925050503d806000811461343f576040519150601f19603f3d011682016040523d82523d6000602084013e613444565b606091505b509150915061345582826002613474565b508080602001905181019061346a9190614bb8565b9695505050505050565b606083156134835750816106f3565b8251156134935782518084602001fd5b60405163100960cb60e01b815260048101839052602401612f51565b6040805160e081018252600060a0820181815260c08301829052825260208201529081016134db6134fa565b81526020016134e8613619565b81526020016134f5613619565b905290565b60405180604001604052806002906020820280368337509192915050565b6040518060400160405280600081526020016134f5613f09565b6040805160c08101909152806000815260200161354d613f1c565b815260200161357660405180606001604052806000815260200160008152602001600081525090565b81526020016135916040518060200160405280600081525090565b81526020016135b3604051806040016040528060008152602001600081525090565b81526020016134f5604051806040016040528060008152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b60405180602001604052806134f56135d5565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180610bc0016040528061365c613f1c565b81526040805160608101825260008082526020828101829052928201529101908152602001613689613dbe565b815260408051606081018252600080825260208281018290529282015291019081526020016136b6613dbe565b815260408051606081018252600080825260208281018290529282015291019081526020016136e3613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613710613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613752604051806040016040528060008152602001600081525090565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016137a26135d5565b81526020016137cb60405180606001604052806000815260200160008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016137f8613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613825613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613852613dbe565b815260200160008152602001600081526020016000815260200160008152602001613899604051806060016040528060008152602001600081526020016000151581525090565b81526020016138b46040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016138e1613dbe565b8152604080516060810182526000808252602082810182905292820152910190815260200161390e613dbe565b8152604080516060810182526000808252602082810182905292820152910190815260200161393b613dbe565b815260200160008152602001600081526020016000815260200161397b604051806060016040528060008152602001600081526020016000151581525090565b8152602001613988613dbe565b8152602001600081526020016139ba604051806060016040528060008152602001600081526020016000151581525090565b81526020016139c76134fa565b81526020016139e9604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613a16613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613a43613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613a70613dbe565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613ad860405180606001604052806000815260200160008152602001600081525090565b8152602001613b0160405180606001604052806000815260200160008152602001600081525090565b8152602001613b2a60405180606001604052806000815260200160008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613b57613dbe565b815260200160008152602001613b80604051806040016040528060008152602001600081525090565b8152602001613b8d613619565b8152602001613baf604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613bdc613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613c09613dbe565b81526040805160608101825260008082526020828101829052928201529101908152602001613c36613dbe565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613c9e60405180606001604052806000815260200160008152602001600081525090565b8152602001613cc760405180606001604052806000815260200160008152602001600081525090565b8152602001613cf060405180606001604052806000815260200160008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613d1d613dbe565b8152602001600081526020016134e8604051806040016040528060008152602001600081525090565b6040518060400160405280613d886040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b81526020016134f5613f2f565b6040805160808101825260009181018281526060820192909252908152602081016134f56135d5565b60405180606001604052806003905b613df3604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613dcd5790505090565b6040805161014081018252600080825260208083018290528284018290528351808501855282815280820183905260608401526080830182905283518085019094528184528301529060a08201908152602001613e646135d5565b8152602001613e71613dbe565b815260200160008152602001600081525090565b828054613e9190614584565b90600052602060002090601f016020900481019282613eb35760008555613ef9565b82601f10613ecc57805160ff1916838001178555613ef9565b82800160010185558215613ef9579182015b82811115613ef9578251825591602001919060010190613ede565b50613f05929150613f7f565b5090565b60405180602001604052806134f5613532565b60405180602001604052806134f5613f94565b6040518060a0016040528060008152602001613f5e604051806040016040528060008152602001600081525090565b8152602001613f6b6135d5565b8152602001600081526020016134f5613dbe565b5b80821115613f055760008155600101613f80565b604051806080016040528060006001600160a01b03168152602001613fd46040805160608101909152806000815260006020820181905260409091015290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101906134f5565b6000610280828403121561402c57600080fd5b50919050565b60006040828403121561402c57600080fd5b60006020828403121561405657600080fd5b5035919050565b60408101818360005b6002811015614085578151835260209283019290910190600101614066565b50505092915050565b815181526020808301519082015260408101610c92565b6000806000606084860312156140ba57600080fd5b505081359360208301359350604090920135919050565b81516001600160a01b0316815260208083015190820152604080830151908201526060808301519082015260808101610c92565b60005b83811015614120578181015183820152602001614108565b83811115612f2e5750506000910152565b8281526040602082015260008251806040840152614156816060850160208701614105565b601f01601f1916919091016060019392505050565b6000806040838503121561417e57600080fd5b50508035926020909101359150565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715614200576142006141c7565b60405290565b6040516080810167ffffffffffffffff81118282101715614200576142006141c7565b6040516020810167ffffffffffffffff81118282101715614200576142006141c7565b6040805190810167ffffffffffffffff81118282101715614200576142006141c7565b60405160c0810167ffffffffffffffff81118282101715614200576142006141c7565b604051610140810167ffffffffffffffff81118282101715614200576142006141c7565b6001600160a01b03811681146142cb57600080fd5b50565b600281106142cb57600080fd5b80151581146142cb57600080fd5b6000606082840312156142fb57600080fd5b6143036141dd565b90508135614310816142ce565b81526020820135614320816142db565b806020830152506040820135604082015292915050565b600081830361014081121561434b57600080fd5b614353614206565b91508235614360816142b6565b82526060601f198201121561437457600080fd5b5061437d6141dd565b602083013561438b816142ce565b8152604083013561439b816142db565b602082015260608301356143ae816142b6565b604082015260208201526143c583608084016142e9565b60408201526143d78360e084016142e9565b606082015292915050565b600061014082840312156143f557600080fd5b6106f38383614337565b6000610140828403121561441257600080fd5b61441a614229565b90506144268383614337565b815292915050565b60006060828403121561444057600080fd5b6144486141dd565b905081358152602082013560208201526040820135604082015292915050565b60006020828403121561447a57600080fd5b614482614229565b9135825250919050565b60006040828403121561449e57600080fd5b6144a661424c565b9050813581526020820135602082015292915050565b60008183036102808112156144d057600080fd5b6144d861424c565b83358152610260601f19830112156144ef57600080fd5b6144f7614229565b915061450161426f565b60208501356005811061451357600080fd5b815261452286604087016143ff565b602082015261453586610180870161442e565b6040820152614548866101e08701614468565b606082015261455b86610200870161448c565b608082015261456e86610240870161448c565b60a0820152825260208101919091529392505050565b600181811c9082168061459857607f821691505b6020821081141561402c57634e487b7160e01b600052602260045260246000fd5b80516145c4816142b6565b919050565b600082601f8301126145da57600080fd5b6145e26141dd565b806101208401858111156145f557600080fd5b845b8181101561464857606081880312156146105760008081fd5b6146186141dd565b8151815260208083015181830152604080840151614635816142db565b90830152908552909301926060016145f7565b509095945050505050565b60006101c0828403121561466657600080fd5b61466e61426f565b8251614679816142b6565b81526020830151614689816142b6565b6020820152604083015161469c816142b6565b604082015260608301516146af816142b6565b606082015260808301516146c2816142b6565b60808201526146d48460a085016145c9565b60a08201529392505050565b6000604082840312156146f257600080fd5b6146fa61424c565b9050815181526020820151602082015292915050565b60006080828403121561472257600080fd5b61472a614206565b90508151614737816142b6565b8082525060208201516020820152604082015160408201526060820151606082015292915050565b60006102e0828403121561477257600080fd5b61477a614292565b614783836145b9565b8152614791602084016145b9565b60208201526147a2604084016145b9565b60408201526147b484606085016146e0565b606082015260a083015160808201526147d08460c085016146e0565b60a08201526101006147e485828601614710565b60c08301526147f78561018086016145c9565b60e08301526102a0840151908201526102c09092015161012083015250919050565b60006040828403121561482b57600080fd5b6040516040810181811067ffffffffffffffff8211171561484e5761484e6141c7565b604052823581526020830135614863816142db565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b600281106142cb576142cb61486f565b80516148a081614885565b8252602081810151151590830152604090810151910152565b81518152602082015151805161028083019190600581106148dc576148dc61486f565b8060208501525060208101515160018060a01b038082511660408601526020820151805161490981614885565b606087015260208101511515608087015260409081015190911660a086015281015161493860c0860182614895565b506060015161494b610120850182614895565b5060408181015180516101808601526020808201516101a08701529101516101c08501526060820151516101e08501526080820151805161020086015281015161022085015260a0909101518051610240850152015161026090920191909152919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156149ee576149ee6149c6565b500390565b60008219821115614a0657614a066149c6565b500190565b6000816000190483118215151615614a2557614a256149c6565b500290565b600082614a4757634e487b7160e01b600052601260045260246000fd5b500490565b6000600019821415614a6057614a606149c6565b5060010190565b8060005b6003811015612f2e578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614a6b565b81516001600160a01b031681526102e081016020830151614ad160208401826001600160a01b03169052565b506040830151614aec60408401826001600160a01b03169052565b506060830151614b09606084018280518252602090810151910152565b50608083015160a083015260a0830151614b3060c084018280518252602090810151910152565b5060c083015180516001600160a01b03166101008481019190915260208201516101208501526040820151610140850152606082015161016085015260e08501519150614b81610180850183614a67565b8401516102a084015250610120909201516102c09091015290565b60008251614bae818460208701614105565b9190910192915050565b600060208284031215614bca57600080fd5b81516106f3816142db56fea2646970667358221220bde2c8ad37c6d00d2009a459ebe0442d81b32f4a24391ec6f0f475e709e366ea64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220817a3e0e20bd6be03f9cc37dd259718cc49ad96172e9fac4c7e767c014ed7c8664736f6c634300080c0033`,
  BytecodeLen: 26966,
  Which: `oD`,
  version: 6,
  views: {
    Tokens: {
      aBal: `Tokens_aBal`,
      aTok: `Tokens_aTok`,
      bBal: `Tokens_bBal`,
      bTok: `Tokens_bTok`,
      liquidityToken: `Tokens_liquidityToken`,
      minted: `Tokens_minted`,
      protocolBals: `Tokens_protocolBals`,
      protocolInfo: `Tokens_protocolInfo`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:239:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:79:19:after expr stmt semicolon',
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
  "Harvester_harvest": Harvester_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_withdraw": Provider_withdraw,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Harvester: {
    harvest: Harvester_harvest
    },
  Provider: {
    deposit: Provider_deposit,
    withdraw: Provider_withdraw
    },
  Trader: {
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    }
  };
