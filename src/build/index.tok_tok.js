// Automatically generated with Reach 0.1.12 (b99432c0*)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (b99432c0*)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    calcAmtIn_: ((_v32795, _v32796, _v32797, _v32798 ) => {
        const v32795 = stdlib.protect(ctc0, _v32795, null);
        const v32796 = stdlib.protect(ctc0, _v32796, null);
        const v32797 = stdlib.protect(ctc0, _v32797, null);
        const v32798 = stdlib.protect(ctc0, _v32798, null);
      
      const v32800 = stdlib.safeSub(v32796, v32795);
      const v32801 = stdlib.cast("UInt", "UInt256", v32800, false, true);
      const v32802 = stdlib.cast("UInt", "UInt256", v32797, false, true);
      const v32803 = stdlib.cast("UInt", "UInt256", v32795, false, true);
      const v32804 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32798);
      const v32805 = stdlib.cast("UInt", "UInt256", v32804, false, true);
      const v32806 = stdlib.safeMul256(v32803, v32805);
      const v32807 = stdlib.safeMul256(v32801, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v32808 = stdlib.safeMul256(v32806, v32802);
      const v32809 = stdlib.safeDiv256(v32808, v32807);
      const v32810 = stdlib.cast("UInt256", "UInt", v32809, false, true);
      const v32811 = stdlib.safeAdd(v32810, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v32811;}),
    computeMint_: ((_v32812, _v32813, _v32814 ) => {
        const v32812 = stdlib.protect(ctc1, _v32812, null);
        const v32813 = stdlib.protect(ctc1, _v32813, null);
        const v32814 = stdlib.protect(ctc1, _v32814, null);
      
      const v32815 = v32812.A;
      const v32816 = v32812.B;
      const v32817 = v32813.A;
      const v32818 = v32813.B;
      const v32820 = v32814.B;
      let v32821;
      const v32828 = stdlib.eq(v32820, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v32828) {
        const v32829 = stdlib.cast("UInt", "UInt256", v32815, false, true);
        const v32830 = stdlib.cast("UInt", "UInt256", v32816, false, true);
        const v32831 = stdlib.safeMul256(v32829, v32830);
        const v32832 = stdlib.sqrt256(v32831);
        const v32833 = stdlib.cast("UInt256", "UInt", v32832, false, true);
        v32821 = v32833;
        }
      else {
        const v32842 = stdlib.safeMuldiv(v32815, v32820, v32817);
        const v32849 = stdlib.safeMuldiv(v32816, v32820, v32818);
        const v32851 = stdlib.lt(v32842, v32849);
        const v32852 = v32851 ? v32842 : v32849;
        v32821 = v32852;
        }
      
      return v32821;}),
    computeSwap_: ((_v32853, _v32854, _v32855, _v32856 ) => {
        const v32853 = stdlib.protect(ctc2, _v32853, null);
        const v32854 = stdlib.protect(ctc1, _v32854, null);
        const v32855 = stdlib.protect(ctc1, _v32855, null);
        const v32856 = stdlib.protect(ctc4, _v32856, null);
      
      const v32857 = v32854.A;
      const v32858 = v32854.B;
      const v32859 = v32855.A;
      const v32860 = v32855.B;
      const v32862 = v32856.protoFee;
      const v32863 = v32856.lpFee;
      const v32864 = v32856.totFee;
      const v32865 = stdlib.lt(v32862, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v32866 = stdlib.lt(v32863, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v32867 = v32865 ? v32866 : false;
      let v32870;
      if (v32867) {
        const v32868 = stdlib.safeAdd(v32863, v32862);
        const v32869 = stdlib.eq(v32864, v32868);
        v32870 = v32869;
        }
      else {
        v32870 = false;
        }
      const v32871 = stdlib.lt(v32864, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v32872 = v32870 ? v32871 : false;
      const v32873 = stdlib.gt(v32864, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v32874 = v32872 ? v32873 : false;
      stdlib.assert(v32874, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v32876 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v32876, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v32892;
      if (v32853) {
        const v32897 = stdlib.eq(v32858, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v32897, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v32920 = stdlib.cast("UInt", "UInt256", v32860, false, true);
        const v32921 = stdlib.cast("UInt", "UInt256", v32859, false, true);
        const v32922 = stdlib.cast("UInt", "UInt256", v32857, false, true);
        const v32923 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32864);
        const v32924 = stdlib.cast("UInt", "UInt256", v32923, false, true);
        const v32925 = stdlib.safeMul256(v32922, v32924);
        const v32926 = stdlib.safeMul256(v32921, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v32927 = stdlib.safeAdd256(v32926, v32925);
        const v32928 = stdlib.safeMul256(v32925, v32920);
        const v32929 = stdlib.safeDiv256(v32928, v32927);
        const v32930 = stdlib.cast("UInt256", "UInt", v32929, false, true);
        const v32937 = stdlib.safeMul(v32862, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v32938 = stdlib.safeDiv(v32937, v32864);
        const v32945 = stdlib.safeAdd(v32859, v32857);
        const v32953 = stdlib.safeMuldiv(v32857, v32860, v32945);
        const v32958 = stdlib.safeSub(v32953, v32930);
        const v32964 = stdlib.safeMuldiv(v32958, v32938, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v32969 = stdlib.safeMuldiv(v32857, v32862, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v32977 = stdlib.safeMuldiv(v32969, v32860, v32945);
        const v32978 = stdlib.gt(v32977, v32964);
        const v32979 = [v32969, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v32980 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v32964];
        const v32981 = v32978 ? v32979 : v32980;
        const v32983 = v32981[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v32984 = v32981[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v32985 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v32930
          };
        const v32986 = {
          A: v32983,
          B: v32984
          };
        const v32987 = [v32985, v32986, v32857];
        v32892 = v32987;
        }
      else {
        const v32988 = stdlib.eq(v32857, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v32988, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v33011 = stdlib.cast("UInt", "UInt256", v32859, false, true);
        const v33012 = stdlib.cast("UInt", "UInt256", v32860, false, true);
        const v33013 = stdlib.cast("UInt", "UInt256", v32858, false, true);
        const v33014 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32864);
        const v33015 = stdlib.cast("UInt", "UInt256", v33014, false, true);
        const v33016 = stdlib.safeMul256(v33013, v33015);
        const v33017 = stdlib.safeMul256(v33012, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v33018 = stdlib.safeAdd256(v33017, v33016);
        const v33019 = stdlib.safeMul256(v33016, v33011);
        const v33020 = stdlib.safeDiv256(v33019, v33018);
        const v33021 = stdlib.cast("UInt256", "UInt", v33020, false, true);
        const v33028 = stdlib.safeMul(v32862, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v33029 = stdlib.safeDiv(v33028, v32864);
        const v33036 = stdlib.safeAdd(v32860, v32858);
        const v33044 = stdlib.safeMuldiv(v32858, v32859, v33036);
        const v33049 = stdlib.safeSub(v33044, v33021);
        const v33055 = stdlib.safeMuldiv(v33049, v33029, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v33060 = stdlib.safeMuldiv(v32858, v32862, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v33068 = stdlib.safeMuldiv(v33060, v32859, v33036);
        const v33069 = stdlib.gt(v33068, v33055);
        const v33070 = [v33060, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v33071 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v33055];
        const v33072 = v33069 ? v33070 : v33071;
        const v33074 = v33072[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v33075 = v33072[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v33076 = {
          A: v33021,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v33077 = {
          A: v33075,
          B: v33074
          };
        const v33078 = [v33076, v33077, v32858];
        v32892 = v33078;
        }
      const v33079 = v32892[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v33080 = v32892[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v33082 = v33079.A;
      const v33083 = v33079.B;
      const v33084 = v33080.A;
      const v33085 = v33080.B;
      const v33086 = {
        A: v33082,
        B: v33083
        };
      const v33087 = {
        A: v33084,
        B: v33085
        };
      const v33088 = [v33086, v33087];
      
      return v33088;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc0], ['locked', ctc3]]);
  return {
    Deposit: [ctc0, ctc2, ctc1, ctc2, ctc2],
    Harvest: [ctc4],
    Swap: [ctc0, ctc2, ctc2, ctc2],
    Withdraw: [ctc0, ctc1, ctc2, ctc2, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc9 = stdlib.T_Struct([['liquidityToken', ctc0], ['lptBals', ctc8], ['poolBals', ctc8], ['protoInfo', ctc7], ['protoBals', ctc8], ['tokB', ctc0], ['tokA', ctc2]]);
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905] = svs;
      return (await ((async () => {
        
        const v58705 = v43902.A;
        const v58706 = v43902.B;
        const v58707 = v43903.A;
        const v58708 = v43903.B;
        const v58709 = v43905.protoFee;
        const v58710 = v43905.lpFee;
        const v58711 = v43905.totFee;
        const v58712 = v43905.protoAddr;
        const v58713 = v43905.locked;
        const v58714 = v43904.A;
        const v58715 = v43904.B;
        const v58716 = {
          A: v58705,
          B: v58706
          };
        const v58717 = {
          A: v58707,
          B: v58708
          };
        const v58718 = {
          locked: v58713,
          lpFee: v58710,
          protoAddr: v58712,
          protoFee: v58709,
          totFee: v58711
          };
        const v58719 = {
          A: v58714,
          B: v58715
          };
        const v58721 = {
          liquidityToken: v43872,
          lptBals: v58716,
          poolBals: v58717,
          protoBals: v58719,
          protoInfo: v58718,
          tokA: v43844,
          tokB: v43818
          };
        
        return v58721;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = svs;
      return (await ((async () => {
        
        const v43978 = v43902.A;
        const v43979 = v43902.B;
        const v43980 = v43903.A;
        const v43981 = v43903.B;
        const v43982 = v43905.protoFee;
        const v43983 = v43905.lpFee;
        const v43984 = v43905.totFee;
        const v43985 = v43905.protoAddr;
        const v43986 = v43905.locked;
        const v43987 = v43904.A;
        const v43988 = v43904.B;
        const v43989 = {
          A: v43978,
          B: v43979
          };
        const v43990 = {
          A: v43980,
          B: v43981
          };
        const v43991 = {
          locked: v43986,
          lpFee: v43983,
          protoAddr: v43985,
          protoFee: v43982,
          totFee: v43984
          };
        const v43992 = {
          A: v43987,
          B: v43988
          };
        const v43994 = {
          liquidityToken: v43872,
          lptBals: v43989,
          poolBals: v43990,
          protoBals: v43992,
          protoInfo: v43991,
          tokA: v43844,
          tokB: v43818
          };
        
        return v43994;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905] = svs;
      return (await ((async (_v58945 ) => {
          const v58945 = stdlib.protect(ctc3, _v58945, null);
        
        const v58946 = v43903.A;
        const v58947 = v43903.B;
        const v58950 = v43905.totFee;
        const v58951 = stdlib.safeSub(v58947, v58945);
        const v58952 = stdlib.cast("UInt", "UInt256", v58951, false, true);
        const v58953 = stdlib.cast("UInt", "UInt256", v58946, false, true);
        const v58954 = stdlib.cast("UInt", "UInt256", v58945, false, true);
        const v58955 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58950);
        const v58956 = stdlib.cast("UInt", "UInt256", v58955, false, true);
        const v58957 = stdlib.safeMul256(v58954, v58956);
        const v58958 = stdlib.safeMul256(v58952, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v58959 = stdlib.safeMul256(v58957, v58953);
        const v58960 = stdlib.safeDiv256(v58959, v58958);
        const v58961 = stdlib.cast("UInt256", "UInt", v58960, false, true);
        const v58962 = stdlib.safeAdd(v58961, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v58962;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = svs;
      return (await ((async (_v44218 ) => {
          const v44218 = stdlib.protect(ctc3, _v44218, null);
        
        const v44219 = v43903.A;
        const v44220 = v43903.B;
        const v44223 = v43905.totFee;
        const v44224 = stdlib.safeSub(v44220, v44218);
        const v44225 = stdlib.cast("UInt", "UInt256", v44224, false, true);
        const v44226 = stdlib.cast("UInt", "UInt256", v44219, false, true);
        const v44227 = stdlib.cast("UInt", "UInt256", v44218, false, true);
        const v44228 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44223);
        const v44229 = stdlib.cast("UInt", "UInt256", v44228, false, true);
        const v44230 = stdlib.safeMul256(v44227, v44229);
        const v44231 = stdlib.safeMul256(v44225, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44232 = stdlib.safeMul256(v44230, v44226);
        const v44233 = stdlib.safeDiv256(v44232, v44231);
        const v44234 = stdlib.cast("UInt256", "UInt", v44233, false, true);
        const v44235 = stdlib.safeAdd(v44234, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v44235;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905] = svs;
      return (await ((async (_v59000 ) => {
          const v59000 = stdlib.protect(ctc3, _v59000, null);
        
        const v59001 = v43903.A;
        const v59002 = v43903.B;
        const v59005 = v43905.totFee;
        const v59006 = stdlib.safeSub(v59001, v59000);
        const v59007 = stdlib.cast("UInt", "UInt256", v59006, false, true);
        const v59008 = stdlib.cast("UInt", "UInt256", v59002, false, true);
        const v59009 = stdlib.cast("UInt", "UInt256", v59000, false, true);
        const v59010 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v59005);
        const v59011 = stdlib.cast("UInt", "UInt256", v59010, false, true);
        const v59012 = stdlib.safeMul256(v59009, v59011);
        const v59013 = stdlib.safeMul256(v59007, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v59014 = stdlib.safeMul256(v59012, v59008);
        const v59015 = stdlib.safeDiv256(v59014, v59013);
        const v59016 = stdlib.cast("UInt256", "UInt", v59015, false, true);
        const v59017 = stdlib.safeAdd(v59016, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v59017;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = svs;
      return (await ((async (_v44273 ) => {
          const v44273 = stdlib.protect(ctc3, _v44273, null);
        
        const v44274 = v43903.A;
        const v44275 = v43903.B;
        const v44278 = v43905.totFee;
        const v44279 = stdlib.safeSub(v44274, v44273);
        const v44280 = stdlib.cast("UInt", "UInt256", v44279, false, true);
        const v44281 = stdlib.cast("UInt", "UInt256", v44275, false, true);
        const v44282 = stdlib.cast("UInt", "UInt256", v44273, false, true);
        const v44283 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44278);
        const v44284 = stdlib.cast("UInt", "UInt256", v44283, false, true);
        const v44285 = stdlib.safeMul256(v44282, v44284);
        const v44286 = stdlib.safeMul256(v44280, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44287 = stdlib.safeMul256(v44285, v44281);
        const v44288 = stdlib.safeDiv256(v44287, v44286);
        const v44289 = stdlib.cast("UInt256", "UInt", v44288, false, true);
        const v44290 = stdlib.safeAdd(v44289, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v44290;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905] = svs;
      return (await ((async (_v58728 ) => {
          const v58728 = stdlib.protect(ctc3, _v58728, null);
        
        const v58730 = v43905.locked;
        const v58731 = v58730 ? false : true;
        stdlib.assert(v58731, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v58733 = v43903.A;
        const v58734 = v43903.B;
        const v58736 = v43905.protoFee;
        const v58737 = v43905.totFee;
        const v58738 = stdlib.cast("UInt", "UInt256", v58734, false, true);
        const v58739 = stdlib.cast("UInt", "UInt256", v58733, false, true);
        const v58740 = stdlib.cast("UInt", "UInt256", v58728, false, true);
        const v58741 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58737);
        const v58742 = stdlib.cast("UInt", "UInt256", v58741, false, true);
        const v58743 = stdlib.safeMul256(v58740, v58742);
        const v58744 = stdlib.safeMul256(v58739, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v58745 = stdlib.safeAdd256(v58744, v58743);
        const v58746 = stdlib.safeMul256(v58743, v58738);
        const v58747 = stdlib.safeDiv256(v58746, v58745);
        const v58748 = stdlib.cast("UInt256", "UInt", v58747, false, true);
        const v58754 = stdlib.safeMul(v58736, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v58755 = stdlib.safeDiv(v58754, v58737);
        const v58760 = stdlib.safeAdd(v58733, v58728);
        const v58764 = stdlib.safeMuldiv(v58728, v58734, v58760);
        const v58767 = stdlib.safeSub(v58764, v58748);
        const v58769 = stdlib.safeMuldiv(v58767, v58755, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v58771 = stdlib.safeMuldiv(v58728, v58736, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v58775 = stdlib.safeMuldiv(v58771, v58734, v58760);
        const v58776 = stdlib.gt(v58775, v58769);
        const v58777 = [v58771, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v58778 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v58769];
        const v58779 = v58776 ? v58777 : v58778;
        const v58781 = v58779[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v58782 = v58779[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v58800 = stdlib.safeSub(v58734, v58748);
        const v58804 = stdlib.safeSub(v58760, v58781);
        const v58807 = stdlib.safeSub(v58800, v58782);
        const v58820 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v58748);
        stdlib.assert(v58820, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v58826 = stdlib.safeMul256(v58739, v58738);
        const v58827 = stdlib.cast("UInt", "UInt256", v58804, false, true);
        const v58828 = stdlib.cast("UInt", "UInt256", v58807, false, true);
        const v58829 = stdlib.safeMul256(v58827, v58828);
        const v58830 = stdlib.ge256(v58829, v58826);
        stdlib.assert(v58830, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v58748;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = svs;
      return (await ((async (_v44001 ) => {
          const v44001 = stdlib.protect(ctc3, _v44001, null);
        
        const v44003 = v43905.locked;
        const v44004 = v44003 ? false : true;
        stdlib.assert(v44004, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v44006 = v43903.A;
        const v44007 = v43903.B;
        const v44009 = v43905.protoFee;
        const v44010 = v43905.totFee;
        const v44011 = stdlib.cast("UInt", "UInt256", v44007, false, true);
        const v44012 = stdlib.cast("UInt", "UInt256", v44006, false, true);
        const v44013 = stdlib.cast("UInt", "UInt256", v44001, false, true);
        const v44014 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44010);
        const v44015 = stdlib.cast("UInt", "UInt256", v44014, false, true);
        const v44016 = stdlib.safeMul256(v44013, v44015);
        const v44017 = stdlib.safeMul256(v44012, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44018 = stdlib.safeAdd256(v44017, v44016);
        const v44019 = stdlib.safeMul256(v44016, v44011);
        const v44020 = stdlib.safeDiv256(v44019, v44018);
        const v44021 = stdlib.cast("UInt256", "UInt", v44020, false, true);
        const v44027 = stdlib.safeMul(v44009, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v44028 = stdlib.safeDiv(v44027, v44010);
        const v44033 = stdlib.safeAdd(v44006, v44001);
        const v44037 = stdlib.safeMuldiv(v44001, v44007, v44033);
        const v44040 = stdlib.safeSub(v44037, v44021);
        const v44042 = stdlib.safeMuldiv(v44040, v44028, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v44044 = stdlib.safeMuldiv(v44001, v44009, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v44048 = stdlib.safeMuldiv(v44044, v44007, v44033);
        const v44049 = stdlib.gt(v44048, v44042);
        const v44050 = [v44044, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v44051 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44042];
        const v44052 = v44049 ? v44050 : v44051;
        const v44054 = v44052[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v44055 = v44052[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v44073 = stdlib.safeSub(v44007, v44021);
        const v44077 = stdlib.safeSub(v44033, v44054);
        const v44080 = stdlib.safeSub(v44073, v44055);
        const v44093 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44021);
        stdlib.assert(v44093, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v44099 = stdlib.safeMul256(v44012, v44011);
        const v44100 = stdlib.cast("UInt", "UInt256", v44077, false, true);
        const v44101 = stdlib.cast("UInt", "UInt256", v44080, false, true);
        const v44102 = stdlib.safeMul256(v44100, v44101);
        const v44103 = stdlib.ge256(v44102, v44099);
        stdlib.assert(v44103, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v44021;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905] = svs;
      return (await ((async (_v58836 ) => {
          const v58836 = stdlib.protect(ctc3, _v58836, null);
        
        const v58838 = v43905.locked;
        const v58839 = v58838 ? false : true;
        stdlib.assert(v58839, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v58841 = v43903.A;
        const v58842 = v43903.B;
        const v58844 = v43905.protoFee;
        const v58845 = v43905.totFee;
        const v58846 = stdlib.cast("UInt", "UInt256", v58841, false, true);
        const v58847 = stdlib.cast("UInt", "UInt256", v58842, false, true);
        const v58848 = stdlib.cast("UInt", "UInt256", v58836, false, true);
        const v58849 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58845);
        const v58850 = stdlib.cast("UInt", "UInt256", v58849, false, true);
        const v58851 = stdlib.safeMul256(v58848, v58850);
        const v58852 = stdlib.safeMul256(v58847, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v58853 = stdlib.safeAdd256(v58852, v58851);
        const v58854 = stdlib.safeMul256(v58851, v58846);
        const v58855 = stdlib.safeDiv256(v58854, v58853);
        const v58856 = stdlib.cast("UInt256", "UInt", v58855, false, true);
        const v58862 = stdlib.safeMul(v58844, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v58863 = stdlib.safeDiv(v58862, v58845);
        const v58868 = stdlib.safeAdd(v58842, v58836);
        const v58872 = stdlib.safeMuldiv(v58836, v58841, v58868);
        const v58875 = stdlib.safeSub(v58872, v58856);
        const v58877 = stdlib.safeMuldiv(v58875, v58863, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v58879 = stdlib.safeMuldiv(v58836, v58844, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v58883 = stdlib.safeMuldiv(v58879, v58841, v58868);
        const v58884 = stdlib.gt(v58883, v58877);
        const v58885 = [v58879, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v58886 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v58877];
        const v58887 = v58884 ? v58885 : v58886;
        const v58889 = v58887[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v58890 = v58887[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v58906 = stdlib.safeSub(v58841, v58856);
        const v58912 = stdlib.safeSub(v58906, v58890);
        const v58915 = stdlib.safeSub(v58868, v58889);
        const v58928 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v58856);
        stdlib.assert(v58928, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v58935 = stdlib.safeMul256(v58846, v58847);
        const v58936 = stdlib.cast("UInt", "UInt256", v58912, false, true);
        const v58937 = stdlib.cast("UInt", "UInt256", v58915, false, true);
        const v58938 = stdlib.safeMul256(v58936, v58937);
        const v58939 = stdlib.ge256(v58938, v58935);
        stdlib.assert(v58939, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v58856;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = svs;
      return (await ((async (_v44109 ) => {
          const v44109 = stdlib.protect(ctc3, _v44109, null);
        
        const v44111 = v43905.locked;
        const v44112 = v44111 ? false : true;
        stdlib.assert(v44112, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v44114 = v43903.A;
        const v44115 = v43903.B;
        const v44117 = v43905.protoFee;
        const v44118 = v43905.totFee;
        const v44119 = stdlib.cast("UInt", "UInt256", v44114, false, true);
        const v44120 = stdlib.cast("UInt", "UInt256", v44115, false, true);
        const v44121 = stdlib.cast("UInt", "UInt256", v44109, false, true);
        const v44122 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44118);
        const v44123 = stdlib.cast("UInt", "UInt256", v44122, false, true);
        const v44124 = stdlib.safeMul256(v44121, v44123);
        const v44125 = stdlib.safeMul256(v44120, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44126 = stdlib.safeAdd256(v44125, v44124);
        const v44127 = stdlib.safeMul256(v44124, v44119);
        const v44128 = stdlib.safeDiv256(v44127, v44126);
        const v44129 = stdlib.cast("UInt256", "UInt", v44128, false, true);
        const v44135 = stdlib.safeMul(v44117, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v44136 = stdlib.safeDiv(v44135, v44118);
        const v44141 = stdlib.safeAdd(v44115, v44109);
        const v44145 = stdlib.safeMuldiv(v44109, v44114, v44141);
        const v44148 = stdlib.safeSub(v44145, v44129);
        const v44150 = stdlib.safeMuldiv(v44148, v44136, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v44152 = stdlib.safeMuldiv(v44109, v44117, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v44156 = stdlib.safeMuldiv(v44152, v44114, v44141);
        const v44157 = stdlib.gt(v44156, v44150);
        const v44158 = [v44152, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v44159 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44150];
        const v44160 = v44157 ? v44158 : v44159;
        const v44162 = v44160[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v44163 = v44160[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v44179 = stdlib.safeSub(v44114, v44129);
        const v44185 = stdlib.safeSub(v44179, v44163);
        const v44188 = stdlib.safeSub(v44141, v44162);
        const v44201 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44129);
        stdlib.assert(v44201, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v44208 = stdlib.safeMul256(v44119, v44120);
        const v44209 = stdlib.cast("UInt", "UInt256", v44185, false, true);
        const v44210 = stdlib.cast("UInt", "UInt256", v44188, false, true);
        const v44211 = stdlib.safeMul256(v44209, v44210);
        const v44212 = stdlib.ge256(v44211, v44208);
        stdlib.assert(v44212, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v44129;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc9
        },
      v_exactSwapAForB: {
        decode: _v_exactSwapAForB,
        dom: [ctc3],
        rng: ctc3
        },
      v_exactSwapBForA: {
        decode: _v_exactSwapBForA,
        dom: [ctc3],
        rng: ctc3
        },
      v_swapAForB: {
        decode: _v_swapAForB,
        dom: [ctc3],
        rng: ctc3
        },
      v_swapBForA: {
        decode: _v_swapBForA,
        dom: [ctc3],
        rng: ctc3
        }
      },
    views: {
      2: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7],
      4: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc12 = stdlib.T_Tuple([ctc11, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc10,
    Provider_deposit0_35303: ctc12,
    Provider_withdraw0_35303: ctc13,
    Trader_exactSwapAForB0_35303: ctc14,
    Trader_exactSwapBForA0_35303: ctc14,
    Trader_swapAForB0_35303: ctc14,
    Trader_swapBForA0_35303: ctc14
    });
  const ctc16 = stdlib.T_Tuple([]);
  
  
  const v43803 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v43804 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v43805 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v43806 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v43807 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v43811 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v43811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v43813 = stdlib.tokenEq(v43806, v43807);
  const v43814 = v43813 ? false : true;
  stdlib.assert(v43814, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:411:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43806, v43807, v43803, v43804, v43805],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:420:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:420:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v43817, v43818, v43819, v43820, v43821], secs: v43823, time: v43822, didSend: v33180, from: v43816 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v43817
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v43818
        });
      ;
      const v43840 = await ctc.getContractInfo();
      const v43843 = [];
      const v43844 = ['Some', v43817];
      const v43845 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v43821,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v43843 /* simTokensRecv */, undefined /* simReturnVal */];})();
      const v43846 = await txn1.getOutput('internal', 'v43845', ctc8, v43845);
      const v43848 = v43846[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
      const v43849 = v43846[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
      const v43868 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v43869 = '                                                                                                ';
      const v43870 = '                                ';
      const v43871 = stdlib.simTokenNew(sim_r, v43819, v43820, v43869, v43870, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v43872 = await txn1.getOutput('internal', 'v43871', ctc3, v43871);
      
      const v43899 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v43901 = false;
      const v43902 = v43868;
      const v43903 = v43899;
      const v43904 = v43899;
      const v43905 = v43849;
      const v43906 = v43822;
      const v43909 = v43848;
      
      if (await (async () => {
        const v43977 = v43901 ? false : true;
        
        return v43977;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v43817, v43818, v43819, v43820, v43821], secs: v43823, time: v43822, didSend: v33180, from: v43816 } = txn1;
  const v43832 = stdlib.tokenEq(v43818, v43817);
  const v43833 = v43832 ? false : true;
  stdlib.assert(v43833, {
    at: './index.rsh:420:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v43835 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v43835, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v43837 = stdlib.tokenEq(v43817, v43818);
  const v43838 = v43837 ? false : true;
  stdlib.assert(v43838, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:411:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  ;
  ;
  const v43840 = await ctc.getContractInfo();
  const v43843 = [];
  const v43844 = ['Some', v43817];
  const v43845 = undefined /* Remote */;
  const v43846 = await txn1.getOutput('internal', 'v43845', ctc8, v43845);
  const v43848 = v43846[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
  const v43849 = v43846[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
  const v43850 = v43849.protoFee;
  const v43851 = v43849.lpFee;
  const v43852 = v43849.totFee;
  const v43853 = stdlib.lt(v43850, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v43854 = stdlib.lt(v43851, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v43855 = v43853 ? v43854 : false;
  let v43856;
  if (v43855) {
    const v43857 = stdlib.safeAdd(v43851, v43850);
    const v43858 = stdlib.eq(v43852, v43857);
    v43856 = v43858;
    }
  else {
    v43856 = false;
    }
  const v43859 = stdlib.lt(v43852, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v43860 = v43856 ? v43859 : false;
  const v43861 = stdlib.gt(v43852, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v43862 = v43860 ? v43861 : false;
  stdlib.assert(v43862, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v43867 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v43848);
  stdlib.assert(v43867, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v43868 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v43869 = '                                                                                                ';
  const v43870 = '                                ';
  const v43871 = undefined /* TokenNew */;
  const v43872 = await txn1.getOutput('internal', 'v43871', ctc3, v43871);
  const v43873 = [v43817, v43818];
  const v43874 = await stdlib.Array_asyncReduce([v43873], false, async([v43876], v43875, v43877) => {
    const v43878 = stdlib.tokenEq(v43872, v43876);
    const v43880 = v43875 ? v43875 : v43878;
    
    return v43880;})
  const v43881 = v43874 ? false : true;
  stdlib.assert(v43881, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v43886 = stdlib.tokenEq(v43872, v43817);
  const v43888 = stdlib.tokenEq(v43872, v43818);
  const v43889 = v43888 ? false : true;
  const v43890 = v43886 ? false : v43889;
  stdlib.assert(v43890, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  stdlib.protect(ctc9, await interact.signalPoolCreation(v43872), {
    at: './index.rsh:437:36:application',
    fs: ['at ./index.rsh:437:36:application call to [unknown function] (defined at: ./index.rsh:437:36:function exp)', 'at ./index.rsh:437:36:application call to "liftedInteract" (defined at: ./index.rsh:437:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v43899 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v43901 = false;
  let v43902 = v43868;
  let v43903 = v43899;
  let v43904 = v43899;
  let v43905 = v43849;
  let v43906 = v43822;
  let v43909 = v43848;
  
  let txn2 = txn1;
  while (await (async () => {
    const v43977 = v43901 ? false : true;
    
    return v43977;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn3;
    switch (v45927[0]) {
      case 'Protocol_harvest0_35303': {
        const v45930 = v45927[1];
        undefined /* setApiDetails */;
        const v45936 = v45930[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
        const v45937 = v43905.protoAddr;
        const v45938 = stdlib.addressEq(v45926, v45937);
        stdlib.assert(v45938, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v45940 = v45936.protoFee;
        const v45941 = v45936.lpFee;
        const v45942 = v45936.totFee;
        const v45943 = stdlib.lt(v45940, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
        const v45944 = stdlib.lt(v45941, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
        const v45945 = v45943 ? v45944 : false;
        let v45946;
        if (v45945) {
          const v45947 = stdlib.safeAdd(v45941, v45940);
          const v45948 = stdlib.eq(v45942, v45947);
          v45946 = v45948;
          }
        else {
          v45946 = false;
          }
        const v45949 = stdlib.lt(v45942, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
        const v45950 = v45946 ? v45949 : false;
        const v45951 = stdlib.gt(v45942, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
        const v45952 = v45950 ? v45951 : false;
        stdlib.assert(v45952, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v46702 = v45930[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
        let v46713;
        if (v45945) {
          const v46714 = stdlib.safeAdd(v45941, v45940);
          const v46715 = stdlib.eq(v45942, v46714);
          v46713 = v46715;
          }
        else {
          v46713 = false;
          }
        const v46717 = v46713 ? v45949 : false;
        const v46719 = v46717 ? v45951 : false;
        stdlib.assert(v46719, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v46722 = v43902.B;
        const v46725 = v45936.locked;
        const v46726 = stdlib.eq(v46722, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
        const v46727 = v46725 ? v46726 : false;
        const v46728 = v43903.A;
        const v46729 = v43903.B;
        const v46730 = stdlib.eq(v46728, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
        const v46731 = stdlib.eq(v46729, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
        const v46732 = v46730 ? v46731 : false;
        const v46733 = v46727 ? v46732 : false;
        const v46737 = (stdlib.le(await ctc.getBalance(), v43909) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v43909));
        const v46738 = stdlib.safeAdd(v46737, v43909);
        const v46739 = v43904.A;
        const v46740 = v43904.B;
        const v46770 = stdlib.sub(v46738, v46737);
        ;
        ;
        ;
        const v46791 = {
          A: v46739,
          B: v46740
          };
        const v46792 = [v46791, v46737];
        await txn3.getOutput('Protocol_harvest', 'v46792', ctc12, v46792);
        const v46820 = v45936.protoAddr;
        const v46822 = {
          locked: v46725,
          lpFee: v45941,
          protoAddr: v46820,
          protoFee: v45940,
          totFee: v45942
          };
        null;
        const cv43901 = v46733;
        const cv43902 = v43902;
        const cv43903 = v43903;
        const cv43904 = v43899;
        const cv43905 = v45936;
        const cv43906 = v45928;
        const cv43909 = v46770;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_35303': {
        const v47755 = v45927[1];
        undefined /* setApiDetails */;
        const v47809 = v47755[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
        const v47810 = v47755[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
        const v47811 = v43905.locked;
        const v47812 = v47811 ? false : true;
        stdlib.assert(v47812, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        let v47814;
        const v47815 = v47809.A;
        const v47816 = v47809.B;
        const v47818 = v43902.B;
        const v47820 = stdlib.eq(v47818, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
        if (v47820) {
          const v47821 = stdlib.cast("UInt", "UInt256", v47815, false, true);
          const v47822 = stdlib.cast("UInt", "UInt256", v47816, false, true);
          const v47823 = stdlib.safeMul256(v47821, v47822);
          const v47824 = stdlib.sqrt256(v47823);
          const v47825 = stdlib.cast("UInt256", "UInt", v47824, false, true);
          v47814 = v47825;
          }
        else {
          const v47826 = v43903.A;
          const v47827 = v43903.B;
          const v47831 = stdlib.safeMuldiv(v47815, v47818, v47826);
          const v47835 = stdlib.safeMuldiv(v47816, v47818, v47827);
          const v47836 = stdlib.lt(v47831, v47835);
          const v47837 = v47836 ? v47831 : v47835;
          v47814 = v47837;
          }
        const v47838 = stdlib.le(v47810, v47814);
        stdlib.assert(v47838, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        let v48657;
        const v48660 = v43902.A;
        if (v47820) {
          const v48664 = stdlib.cast("UInt", "UInt256", v47815, false, true);
          const v48665 = stdlib.cast("UInt", "UInt256", v47816, false, true);
          const v48666 = stdlib.safeMul256(v48664, v48665);
          const v48667 = stdlib.sqrt256(v48666);
          const v48668 = stdlib.cast("UInt256", "UInt", v48667, false, true);
          v48657 = v48668;
          }
        else {
          const v48669 = v43903.A;
          const v48670 = v43903.B;
          const v48674 = stdlib.safeMuldiv(v47815, v47818, v48669);
          const v48678 = stdlib.safeMuldiv(v47816, v47818, v48670);
          const v48679 = stdlib.lt(v48674, v48678);
          const v48680 = v48679 ? v48674 : v48678;
          v48657 = v48680;
          }
        const v48681 = stdlib.le(v47810, v48657);
        stdlib.assert(v48681, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v48684 = v43903.A;
        const v48688 = stdlib.safeAdd(v47815, v48684);
        const v48690 = v43903.B;
        const v48694 = stdlib.safeAdd(v47816, v48690);
        const v48695 = {
          A: v48688,
          B: v48694
          };
        const v48702 = stdlib.safeSub(v48660, v48657);
        const v48706 = stdlib.safeAdd(v47818, v48657);
        const v48707 = {
          A: v48702,
          B: v48706
          };
        ;
        await txn3.getOutput('Provider_deposit', 'v48657', ctc4, v48657);
        const v48753 = {
          A: v47815,
          B: v47816
          };
        const v48754 = {
          A: v48688,
          B: v48694
          };
        const v48755 = {
          A: v48702,
          B: v48706
          };
        null;
        const cv43901 = false;
        const cv43902 = v48707;
        const cv43903 = v48695;
        const cv43904 = v43904;
        const cv43905 = v43905;
        const cv43906 = v45928;
        const cv43909 = v43909;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_35303': {
        const v49580 = v45927[1];
        undefined /* setApiDetails */;
        const v49714 = v49580[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
        const v49715 = v49580[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
        const v49717 = v43902.B;
        const v49720 = v43903.A;
        const v49721 = v43903.B;
        const v49725 = stdlib.safeMuldiv(v49714, v49720, v49717);
        const v49729 = stdlib.safeMuldiv(v49714, v49721, v49717);
        const v49731 = v49715.A;
        const v49732 = stdlib.le(v49731, v49725);
        stdlib.assert(v49732, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage A',
          who: 'Admin'
          });
        const v49734 = v49715.B;
        const v49735 = stdlib.le(v49734, v49729);
        stdlib.assert(v49735, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage B',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v50589 = v43902.A;
        const v50617 = stdlib.safeAdd(v50589, v49714);
        const v50620 = stdlib.safeSub(v49717, v49714);
        const v50621 = {
          A: v50617,
          B: v50620
          };
        const v50626 = stdlib.safeSub(v49720, v49725);
        const v50630 = stdlib.safeSub(v49721, v49729);
        const v50631 = {
          A: v50626,
          B: v50630
          };
        ;
        ;
        const v50678 = {
          A: v49725,
          B: v49729
          };
        await txn3.getOutput('Provider_withdraw', 'v50678', ctc11, v50678);
        const v50691 = {
          A: v50626,
          B: v50630
          };
        const v50692 = {
          A: v50617,
          B: v50620
          };
        null;
        const cv43901 = false;
        const cv43902 = v50621;
        const cv43903 = v50631;
        const cv43904 = v43904;
        const cv43905 = v43905;
        const cv43906 = v45928;
        const cv43909 = v43909;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_35303': {
        const v51405 = v45927[1];
        undefined /* setApiDetails */;
        const v51601 = v51405[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
        const v51602 = v51405[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
        const v51604 = v43905.locked;
        const v51605 = v51604 ? false : true;
        stdlib.assert(v51605, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v51607 = v43903.A;
        const v51608 = v43903.B;
        const v51610 = v43905.protoFee;
        const v51611 = v43905.totFee;
        const v51612 = stdlib.safeSub(v51608, v51602);
        const v51613 = stdlib.cast("UInt", "UInt256", v51612, false, true);
        const v51614 = stdlib.cast("UInt", "UInt256", v51607, false, true);
        const v51615 = stdlib.cast("UInt", "UInt256", v51602, false, true);
        const v51616 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51611);
        const v51617 = stdlib.cast("UInt", "UInt256", v51616, false, true);
        const v51618 = stdlib.safeMul256(v51615, v51617);
        const v51619 = stdlib.safeMul256(v51613, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v51620 = stdlib.safeMul256(v51618, v51614);
        const v51621 = stdlib.safeDiv256(v51620, v51619);
        const v51622 = stdlib.cast("UInt256", "UInt", v51621, false, true);
        const v51623 = stdlib.safeAdd(v51622, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v51624 = stdlib.ge(v51601, v51623);
        stdlib.assert(v51624, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v51626 = stdlib.safeSub(v51601, v51623);
        const v51632 = stdlib.safeMul(v51610, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v51633 = stdlib.safeDiv(v51632, v51611);
        const v51638 = stdlib.safeAdd(v51607, v51623);
        const v51642 = stdlib.safeMuldiv(v51623, v51608, v51638);
        const v51645 = stdlib.safeSub(v51642, v51602);
        const v51647 = stdlib.safeMuldiv(v51645, v51633, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v51649 = stdlib.safeMuldiv(v51623, v51610, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v51653 = stdlib.safeMuldiv(v51649, v51608, v51638);
        const v51654 = stdlib.gt(v51653, v51647);
        const v51655 = [v51649, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v51656 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51647];
        const v51657 = v51654 ? v51655 : v51656;
        const v51659 = v51657[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v51660 = v51657[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v51668 = stdlib.safeAdd(v51607, v51601);
        const v51676 = stdlib.safeSub(v51668, v51626);
        const v51683 = stdlib.safeSub(v51676, v51659);
        const v51686 = stdlib.safeSub(v51612, v51660);
        const v51699 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v51626);
        const v51700 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v51602);
        const v51701 = v51699 ? v51700 : false;
        stdlib.assert(v51701, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v51706 = stdlib.cast("UInt", "UInt256", v51608, false, true);
        const v51707 = stdlib.safeMul256(v51614, v51706);
        const v51708 = stdlib.cast("UInt", "UInt256", v51683, false, true);
        const v51709 = stdlib.cast("UInt", "UInt256", v51686, false, true);
        const v51710 = stdlib.safeMul256(v51708, v51709);
        const v51711 = stdlib.ge256(v51710, v51707);
        stdlib.assert(v51711, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v52610 = {
          A: v51683,
          B: v51686
          };
        const v52611 = v43904.A;
        const v52615 = stdlib.safeAdd(v52611, v51659);
        const v52616 = v43904.B;
        const v52620 = stdlib.safeAdd(v52616, v51660);
        const v52621 = {
          A: v52615,
          B: v52620
          };
        ;
        ;
        const v52686 = {
          A: v51626,
          B: v51602
          };
        await txn3.getOutput('Trader_exactSwapAForB', 'v52686', ctc11, v52686);
        const v52696 = {
          A: v51601,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v52698 = {
          A: v51683,
          B: v51686
          };
        null;
        const cv43901 = false;
        const cv43902 = v43902;
        const cv43903 = v52610;
        const cv43904 = v52621;
        const cv43905 = v43905;
        const cv43906 = v45928;
        const cv43909 = v43909;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_35303': {
        const v53230 = v45927[1];
        undefined /* setApiDetails */;
        const v53559 = v53230[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
        const v53560 = v53230[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
        const v53562 = v43905.locked;
        const v53563 = v53562 ? false : true;
        stdlib.assert(v53563, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v53565 = v43903.A;
        const v53566 = v43903.B;
        const v53568 = v43905.protoFee;
        const v53569 = v43905.totFee;
        const v53570 = stdlib.safeSub(v53565, v53560);
        const v53571 = stdlib.cast("UInt", "UInt256", v53570, false, true);
        const v53572 = stdlib.cast("UInt", "UInt256", v53566, false, true);
        const v53573 = stdlib.cast("UInt", "UInt256", v53560, false, true);
        const v53574 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53569);
        const v53575 = stdlib.cast("UInt", "UInt256", v53574, false, true);
        const v53576 = stdlib.safeMul256(v53573, v53575);
        const v53577 = stdlib.safeMul256(v53571, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v53578 = stdlib.safeMul256(v53576, v53572);
        const v53579 = stdlib.safeDiv256(v53578, v53577);
        const v53580 = stdlib.cast("UInt256", "UInt", v53579, false, true);
        const v53581 = stdlib.safeAdd(v53580, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v53582 = stdlib.ge(v53559, v53581);
        stdlib.assert(v53582, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v53584 = stdlib.safeSub(v53559, v53581);
        const v53590 = stdlib.safeMul(v53568, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v53591 = stdlib.safeDiv(v53590, v53569);
        const v53596 = stdlib.safeAdd(v53566, v53581);
        const v53600 = stdlib.safeMuldiv(v53581, v53565, v53596);
        const v53603 = stdlib.safeSub(v53600, v53560);
        const v53605 = stdlib.safeMuldiv(v53603, v53591, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v53607 = stdlib.safeMuldiv(v53581, v53568, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v53611 = stdlib.safeMuldiv(v53607, v53565, v53596);
        const v53612 = stdlib.gt(v53611, v53605);
        const v53613 = [v53607, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v53614 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53605];
        const v53615 = v53612 ? v53613 : v53614;
        const v53617 = v53615[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v53618 = v53615[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v53630 = stdlib.safeAdd(v53566, v53559);
        const v53637 = stdlib.safeSub(v53630, v53584);
        const v53641 = stdlib.safeSub(v53570, v53618);
        const v53644 = stdlib.safeSub(v53637, v53617);
        const v53657 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v53560);
        const v53658 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v53584);
        const v53659 = v53657 ? v53658 : false;
        stdlib.assert(v53659, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v53663 = stdlib.cast("UInt", "UInt256", v53565, false, true);
        const v53665 = stdlib.safeMul256(v53663, v53572);
        const v53666 = stdlib.cast("UInt", "UInt256", v53641, false, true);
        const v53667 = stdlib.cast("UInt", "UInt256", v53644, false, true);
        const v53668 = stdlib.safeMul256(v53666, v53667);
        const v53669 = stdlib.ge256(v53668, v53665);
        stdlib.assert(v53669, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v54619 = {
          A: v53641,
          B: v53644
          };
        const v54620 = v43904.A;
        const v54624 = stdlib.safeAdd(v54620, v53618);
        const v54625 = v43904.B;
        const v54629 = stdlib.safeAdd(v54625, v53617);
        const v54630 = {
          A: v54624,
          B: v54629
          };
        ;
        ;
        const v54695 = {
          A: v53560,
          B: v53584
          };
        await txn3.getOutput('Trader_exactSwapBForA', 'v54695', ctc11, v54695);
        const v54705 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v53559
          };
        const v54707 = {
          A: v53641,
          B: v53644
          };
        null;
        const cv43901 = false;
        const cv43902 = v43902;
        const cv43903 = v54619;
        const cv43904 = v54630;
        const cv43905 = v43905;
        const cv43906 = v45928;
        const cv43909 = v43909;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_35303': {
        const v55055 = v45927[1];
        undefined /* setApiDetails */;
        const v55517 = v55055[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
        const v55518 = v55055[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
        const v55521 = v43905.locked;
        const v55522 = v55521 ? false : true;
        stdlib.assert(v55522, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v55524 = v43903.A;
        const v55525 = v43903.B;
        const v55527 = v43905.protoFee;
        const v55528 = v43905.totFee;
        const v55529 = stdlib.cast("UInt", "UInt256", v55525, false, true);
        const v55530 = stdlib.cast("UInt", "UInt256", v55524, false, true);
        const v55531 = stdlib.cast("UInt", "UInt256", v55517, false, true);
        const v55532 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55528);
        const v55533 = stdlib.cast("UInt", "UInt256", v55532, false, true);
        const v55534 = stdlib.safeMul256(v55531, v55533);
        const v55535 = stdlib.safeMul256(v55530, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v55536 = stdlib.safeAdd256(v55535, v55534);
        const v55537 = stdlib.safeMul256(v55534, v55529);
        const v55538 = stdlib.safeDiv256(v55537, v55536);
        const v55539 = stdlib.cast("UInt256", "UInt", v55538, false, true);
        const v55545 = stdlib.safeMul(v55527, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v55546 = stdlib.safeDiv(v55545, v55528);
        const v55551 = stdlib.safeAdd(v55524, v55517);
        const v55555 = stdlib.safeMuldiv(v55517, v55525, v55551);
        const v55558 = stdlib.safeSub(v55555, v55539);
        const v55560 = stdlib.safeMuldiv(v55558, v55546, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v55562 = stdlib.safeMuldiv(v55517, v55527, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v55566 = stdlib.safeMuldiv(v55562, v55525, v55551);
        const v55567 = stdlib.gt(v55566, v55560);
        const v55568 = [v55562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v55569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55560];
        const v55570 = v55567 ? v55568 : v55569;
        const v55572 = v55570[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v55573 = v55570[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v55591 = stdlib.safeSub(v55525, v55539);
        const v55595 = stdlib.safeSub(v55551, v55572);
        const v55598 = stdlib.safeSub(v55591, v55573);
        const v55611 = stdlib.le(v55518, v55539);
        stdlib.assert(v55611, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v55617 = stdlib.safeMul256(v55530, v55529);
        const v55618 = stdlib.cast("UInt", "UInt256", v55595, false, true);
        const v55619 = stdlib.cast("UInt", "UInt256", v55598, false, true);
        const v55620 = stdlib.safeMul256(v55618, v55619);
        const v55621 = stdlib.ge256(v55620, v55617);
        stdlib.assert(v55621, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v56624 = {
          A: v55595,
          B: v55598
          };
        const v56625 = v43904.A;
        const v56629 = stdlib.safeAdd(v56625, v55572);
        const v56630 = v43904.B;
        const v56634 = stdlib.safeAdd(v56630, v55573);
        const v56635 = {
          A: v56629,
          B: v56634
          };
        ;
        const v56689 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v55539
          };
        await txn3.getOutput('Trader_swapAForB', 'v56689', ctc11, v56689);
        const v56699 = {
          A: v55517,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v56701 = {
          A: v55595,
          B: v55598
          };
        null;
        const cv43901 = false;
        const cv43902 = v43902;
        const cv43903 = v56624;
        const cv43904 = v56635;
        const cv43905 = v43905;
        const cv43906 = v45928;
        const cv43909 = v43909;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_35303': {
        const v56880 = v45927[1];
        undefined /* setApiDetails */;
        const v57469 = v56880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
        const v57470 = v56880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
        const v57473 = v43905.locked;
        const v57474 = v57473 ? false : true;
        stdlib.assert(v57474, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v57476 = v43903.A;
        const v57477 = v43903.B;
        const v57479 = v43905.protoFee;
        const v57480 = v43905.totFee;
        const v57481 = stdlib.cast("UInt", "UInt256", v57476, false, true);
        const v57482 = stdlib.cast("UInt", "UInt256", v57477, false, true);
        const v57483 = stdlib.cast("UInt", "UInt256", v57469, false, true);
        const v57484 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57480);
        const v57485 = stdlib.cast("UInt", "UInt256", v57484, false, true);
        const v57486 = stdlib.safeMul256(v57483, v57485);
        const v57487 = stdlib.safeMul256(v57482, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v57488 = stdlib.safeAdd256(v57487, v57486);
        const v57489 = stdlib.safeMul256(v57486, v57481);
        const v57490 = stdlib.safeDiv256(v57489, v57488);
        const v57491 = stdlib.cast("UInt256", "UInt", v57490, false, true);
        const v57497 = stdlib.safeMul(v57479, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v57498 = stdlib.safeDiv(v57497, v57480);
        const v57503 = stdlib.safeAdd(v57477, v57469);
        const v57507 = stdlib.safeMuldiv(v57469, v57476, v57503);
        const v57510 = stdlib.safeSub(v57507, v57491);
        const v57512 = stdlib.safeMuldiv(v57510, v57498, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v57514 = stdlib.safeMuldiv(v57469, v57479, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v57518 = stdlib.safeMuldiv(v57514, v57476, v57503);
        const v57519 = stdlib.gt(v57518, v57512);
        const v57520 = [v57514, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v57521 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57512];
        const v57522 = v57519 ? v57520 : v57521;
        const v57524 = v57522[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v57525 = v57522[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v57541 = stdlib.safeSub(v57476, v57491);
        const v57547 = stdlib.safeSub(v57541, v57525);
        const v57550 = stdlib.safeSub(v57503, v57524);
        const v57563 = stdlib.le(v57470, v57491);
        stdlib.assert(v57563, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v57570 = stdlib.safeMul256(v57481, v57482);
        const v57571 = stdlib.cast("UInt", "UInt256", v57547, false, true);
        const v57572 = stdlib.cast("UInt", "UInt256", v57550, false, true);
        const v57573 = stdlib.safeMul256(v57571, v57572);
        const v57574 = stdlib.ge256(v57573, v57570);
        stdlib.assert(v57574, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v58618 = {
          A: v57547,
          B: v57550
          };
        const v58619 = v43904.A;
        const v58623 = stdlib.safeAdd(v58619, v57525);
        const v58624 = v43904.B;
        const v58628 = stdlib.safeAdd(v58624, v57524);
        const v58629 = {
          A: v58623,
          B: v58628
          };
        ;
        const v58684 = {
          A: v57491,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v58684', ctc11, v58684);
        const v58694 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v57469
          };
        const v58696 = {
          A: v57547,
          B: v57550
          };
        null;
        const cv43901 = false;
        const cv43902 = v43902;
        const cv43903 = v58618;
        const cv43904 = v58629;
        const cv43905 = v43905;
        const cv43906 = v45928;
        const cv43909 = v43909;
        
        v43901 = cv43901;
        v43902 = cv43902;
        v43903 = cv43903;
        v43904 = cv43904;
        v43905 = cv43905;
        v43906 = cv43906;
        v43909 = cv43909;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc16],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v59059], secs: v59061, time: v59060, didSend: v43253, from: v59058 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v59062 = null;
  await txn3.getOutput('Protocol_delete', 'v59062', ctc9, v59062);
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  };
export async function _Protocol_delete2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v59057 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:605:3:application',
    fs: ['at ./index.rsh:605:3:application call to [unknown function] (defined at: ./index.rsh:605:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43902, v43903, v43904, v43905, v59057],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:605:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v59059], secs: v59061, time: v59060, didSend: v43253, from: v59058 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v59062 = null;
      const v59063 = await txn1.getOutput('Protocol_delete', 'v59062', ctc1, v59062);
      
      stdlib.simTokenBurn(sim_r, v43872, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v43872);
      sim_r.txns.push({
        kind: 'halt',
        tok: v43818
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v43817
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
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v59059], secs: v59061, time: v59060, didSend: v43253, from: v59058 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v59062 = null;
  const v59063 = await txn1.getOutput('Protocol_delete', 'v59062', ctc1, v59062);
  stdlib.protect(ctc1, await interact.out(v59059, v59063), {
    at: './index.rsh:605:3:application',
    fs: ['at ./index.rsh:605:3:application call to [unknown function] (defined at: ./index.rsh:605:3:function exp)', 'at ./index.rsh:606:4:application call to "k" (defined at: ./index.rsh:605:3:function exp)'],
    msg: 'out',
    who: 'Protocol_delete'
    });
  
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  };
export async function _Protocol_harvest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc10 = stdlib.T_Tuple([ctc9, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc9]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc8,
    Provider_deposit0_35303: ctc10,
    Provider_withdraw0_35303: ctc11,
    Trader_exactSwapAForB0_35303: ctc12,
    Trader_exactSwapBForA0_35303: ctc12,
    Trader_swapAForB0_35303: ctc12,
    Trader_swapBForA0_35303: ctc12
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44328 = ctc.selfAddress();
  const v44330 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35303" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v44332 = v44330[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44333 = v44332.protoFee;
  const v44334 = v44332.lpFee;
  const v44335 = v44332.totFee;
  const v44336 = stdlib.lt(v44333, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v44337 = stdlib.lt(v44334, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v44338 = v44336 ? v44337 : false;
  let v44339;
  if (v44338) {
    const v44340 = stdlib.safeAdd(v44334, v44333);
    const v44341 = stdlib.eq(v44335, v44340);
    v44339 = v44341;
    }
  else {
    v44339 = false;
    }
  const v44342 = stdlib.lt(v44335, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v44343 = v44339 ? v44342 : false;
  const v44344 = stdlib.gt(v44335, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v44345 = v44343 ? v44344 : false;
  stdlib.assert(v44345, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35303" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v44348 = v43905.protoAddr;
  const v44349 = stdlib.addressEq(v44328, v44348);
  stdlib.assert(v44349, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35303" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v44357;
  if (v44338) {
    const v44358 = stdlib.safeAdd(v44334, v44333);
    const v44359 = stdlib.eq(v44335, v44358);
    v44357 = v44359;
    }
  else {
    v44357 = false;
    }
  const v44361 = v44357 ? v44342 : false;
  const v44363 = v44361 ? v44344 : false;
  stdlib.assert(v44363, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35303" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v44390 = ['Protocol_harvest0_35303', v44330];
  
  let v45051;
  if (v44338) {
    const v45052 = stdlib.safeAdd(v44334, v44333);
    const v45053 = stdlib.eq(v44335, v45052);
    v45051 = v45053;
    }
  else {
    v45051 = false;
    }
  const v45055 = v45051 ? v44342 : false;
  const v45057 = v45055 ? v44344 : false;
  stdlib.assert(v45057, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v44390],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:488:26:decimal', stdlib.UInt_max, '0'), v43872], [stdlib.checkedBigNumberify('./index.rsh:488:29:decimal', stdlib.UInt_max, '0'), v43817], [stdlib.checkedBigNumberify('./index.rsh:488:32:decimal', stdlib.UInt_max, '0'), v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          const v45936 = v45930[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
          const v45940 = v45936.protoFee;
          const v45941 = v45936.lpFee;
          const v45942 = v45936.totFee;
          ;
          ;
          ;
          ;
          const v46702 = v45930[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
          const v46722 = v43902.B;
          const v46725 = v45936.locked;
          const v46726 = stdlib.eq(v46722, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
          const v46727 = v46725 ? v46726 : false;
          const v46728 = v43903.A;
          const v46729 = v43903.B;
          const v46730 = stdlib.eq(v46728, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
          const v46731 = stdlib.eq(v46729, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
          const v46732 = v46730 ? v46731 : false;
          const v46733 = v46727 ? v46732 : false;
          const v46737 = (stdlib.le(await ctc.getBalance(), v43909) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v43909));
          const v46738 = stdlib.safeAdd(v46737, v43909);
          const v46739 = v43904.A;
          const v46740 = v43904.B;
          const v46770 = stdlib.sub(v46738, v46737);
          sim_r.txns.push({
            kind: 'from',
            to: v46702,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46702,
            tok: v43817
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46702,
            tok: v43818
            });
          const v46791 = {
            A: v46739,
            B: v46740
            };
          const v46792 = [v46791, v46737];
          const v46793 = await txn1.getOutput('Protocol_harvest', 'v46792', ctc10, v46792);
          
          const v46820 = v45936.protoAddr;
          const v46822 = {
            locked: v46725,
            lpFee: v45941,
            protoAddr: v46820,
            protoFee: v45940,
            totFee: v45942
            };
          null;
          const v66845 = v43902;
          const v66846 = v43903;
          const v66847 = v43899;
          const v66848 = v45936;
          const v66850 = v46770;
          if (v46733) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      undefined /* setApiDetails */;
      const v45936 = v45930[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
      const v45937 = v43905.protoAddr;
      const v45938 = stdlib.addressEq(v45926, v45937);
      stdlib.assert(v45938, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v45940 = v45936.protoFee;
      const v45941 = v45936.lpFee;
      const v45942 = v45936.totFee;
      const v45943 = stdlib.lt(v45940, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v45944 = stdlib.lt(v45941, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v45945 = v45943 ? v45944 : false;
      let v45946;
      if (v45945) {
        const v45947 = stdlib.safeAdd(v45941, v45940);
        const v45948 = stdlib.eq(v45942, v45947);
        v45946 = v45948;
        }
      else {
        v45946 = false;
        }
      const v45949 = stdlib.lt(v45942, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v45950 = v45946 ? v45949 : false;
      const v45951 = stdlib.gt(v45942, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v45952 = v45950 ? v45951 : false;
      stdlib.assert(v45952, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      ;
      ;
      ;
      ;
      const v46702 = v45930[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
      let v46713;
      if (v45945) {
        const v46714 = stdlib.safeAdd(v45941, v45940);
        const v46715 = stdlib.eq(v45942, v46714);
        v46713 = v46715;
        }
      else {
        v46713 = false;
        }
      const v46717 = v46713 ? v45949 : false;
      const v46719 = v46717 ? v45951 : false;
      stdlib.assert(v46719, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v46722 = v43902.B;
      const v46725 = v45936.locked;
      const v46726 = stdlib.eq(v46722, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
      const v46727 = v46725 ? v46726 : false;
      const v46728 = v43903.A;
      const v46729 = v43903.B;
      const v46730 = stdlib.eq(v46728, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
      const v46731 = stdlib.eq(v46729, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
      const v46732 = v46730 ? v46731 : false;
      const v46733 = v46727 ? v46732 : false;
      const v46737 = (stdlib.le(await ctc.getBalance(), v43909) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v43909));
      const v46738 = stdlib.safeAdd(v46737, v43909);
      const v46739 = v43904.A;
      const v46740 = v43904.B;
      const v46770 = stdlib.sub(v46738, v46737);
      ;
      ;
      ;
      const v46791 = {
        A: v46739,
        B: v46740
        };
      const v46792 = [v46791, v46737];
      const v46793 = await txn1.getOutput('Protocol_harvest', 'v46792', ctc10, v46792);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v45930, v46793), {
          at: './index.rsh:482:11:application',
          fs: ['at ./index.rsh:482:11:application call to [unknown function] (defined at: ./index.rsh:482:11:function exp)', 'at ./index.rsh:491:12:application call to "k" (defined at: ./index.rsh:488:40:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v46820 = v45936.protoAddr;
      const v46822 = {
        locked: v46725,
        lpFee: v45941,
        protoAddr: v46820,
        protoFee: v45940,
        totFee: v45942
        };
      null;
      const v66845 = v43902;
      const v66846 = v43903;
      const v66847 = v43899;
      const v66848 = v45936;
      const v66850 = v46770;
      if (v46733) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc9 = stdlib.T_Tuple([ctc8, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc10,
    Provider_deposit0_35303: ctc9,
    Provider_withdraw0_35303: ctc11,
    Trader_exactSwapAForB0_35303: ctc12,
    Trader_exactSwapBForA0_35303: ctc12,
    Trader_swapAForB0_35303: ctc12,
    Trader_swapBForA0_35303: ctc12
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44457 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35303" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v44458 = v44457[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44459 = v44457[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44460 = v44458.A;
  const v44461 = v44458.B;
  const v44464 = v43905.locked;
  const v44465 = v44464 ? false : true;
  stdlib.assert(v44465, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35303" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  let v44467;
  const v44471 = v43902.B;
  const v44473 = stdlib.eq(v44471, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
  if (v44473) {
    const v44474 = stdlib.cast("UInt", "UInt256", v44460, false, true);
    const v44475 = stdlib.cast("UInt", "UInt256", v44461, false, true);
    const v44476 = stdlib.safeMul256(v44474, v44475);
    const v44477 = stdlib.sqrt256(v44476);
    const v44478 = stdlib.cast("UInt256", "UInt", v44477, false, true);
    v44467 = v44478;
    }
  else {
    const v44479 = v43903.A;
    const v44480 = v43903.B;
    const v44484 = stdlib.safeMuldiv(v44460, v44471, v44479);
    const v44488 = stdlib.safeMuldiv(v44461, v44471, v44480);
    const v44489 = stdlib.lt(v44484, v44488);
    const v44490 = v44489 ? v44484 : v44488;
    v44467 = v44490;
    }
  const v44491 = stdlib.le(v44459, v44467);
  stdlib.assert(v44491, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35303" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v44494 = v43903.A;
  const v44500 = v43903.B;
  const v44528 = ['Provider_deposit0_35303', v44457];
  
  let v45119;
  if (v44473) {
    const v45126 = stdlib.cast("UInt", "UInt256", v44460, false, true);
    const v45127 = stdlib.cast("UInt", "UInt256", v44461, false, true);
    const v45128 = stdlib.safeMul256(v45126, v45127);
    const v45129 = stdlib.sqrt256(v45128);
    const v45130 = stdlib.cast("UInt256", "UInt", v45129, false, true);
    v45119 = v45130;
    }
  else {
    const v45136 = stdlib.safeMuldiv(v44460, v44471, v44494);
    const v45140 = stdlib.safeMuldiv(v44461, v44471, v44500);
    const v45141 = stdlib.lt(v45136, v45140);
    const v45142 = v45141 ? v45136 : v45140;
    v45119 = v45142;
    }
  const v45143 = stdlib.le(v44459, v45119);
  stdlib.assert(v45143, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v44528],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:436:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:436:50:decimal', stdlib.UInt_max, '0'), v43872], [v44460, v43817], [v44461, v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v47809 = v47755[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
          const v47815 = v47809.A;
          const v47816 = v47809.B;
          const v47818 = v43902.B;
          const v47820 = stdlib.eq(v47818, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          sim_r.txns.push({
            amt: v47815,
            kind: 'to',
            tok: v43817
            });
          sim_r.txns.push({
            amt: v47816,
            kind: 'to',
            tok: v43818
            });
          let v48657;
          const v48660 = v43902.A;
          if (v47820) {
            const v48664 = stdlib.cast("UInt", "UInt256", v47815, false, true);
            const v48665 = stdlib.cast("UInt", "UInt256", v47816, false, true);
            const v48666 = stdlib.safeMul256(v48664, v48665);
            const v48667 = stdlib.sqrt256(v48666);
            const v48668 = stdlib.cast("UInt256", "UInt", v48667, false, true);
            v48657 = v48668;
            }
          else {
            const v48669 = v43903.A;
            const v48670 = v43903.B;
            const v48674 = stdlib.safeMuldiv(v47815, v47818, v48669);
            const v48678 = stdlib.safeMuldiv(v47816, v47818, v48670);
            const v48679 = stdlib.lt(v48674, v48678);
            const v48680 = v48679 ? v48674 : v48678;
            v48657 = v48680;
            }
          const v48684 = v43903.A;
          const v48688 = stdlib.safeAdd(v47815, v48684);
          const v48690 = v43903.B;
          const v48694 = stdlib.safeAdd(v47816, v48690);
          const v48695 = {
            A: v48688,
            B: v48694
            };
          const v48702 = stdlib.safeSub(v48660, v48657);
          const v48706 = stdlib.safeAdd(v47818, v48657);
          const v48707 = {
            A: v48702,
            B: v48706
            };
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43872
            });
          const v48742 = await txn1.getOutput('Provider_deposit', 'v48657', ctc3, v48657);
          
          const v48753 = {
            A: v47815,
            B: v47816
            };
          const v48754 = {
            A: v48688,
            B: v48694
            };
          const v48755 = {
            A: v48702,
            B: v48706
            };
          null;
          const v66965 = v48707;
          const v66966 = v48695;
          const v66967 = v43904;
          const v66968 = v43905;
          const v66970 = v43909;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      return;
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      undefined /* setApiDetails */;
      const v47809 = v47755[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
      const v47810 = v47755[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
      const v47811 = v43905.locked;
      const v47812 = v47811 ? false : true;
      stdlib.assert(v47812, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      let v47814;
      const v47815 = v47809.A;
      const v47816 = v47809.B;
      const v47818 = v43902.B;
      const v47820 = stdlib.eq(v47818, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
      if (v47820) {
        const v47821 = stdlib.cast("UInt", "UInt256", v47815, false, true);
        const v47822 = stdlib.cast("UInt", "UInt256", v47816, false, true);
        const v47823 = stdlib.safeMul256(v47821, v47822);
        const v47824 = stdlib.sqrt256(v47823);
        const v47825 = stdlib.cast("UInt256", "UInt", v47824, false, true);
        v47814 = v47825;
        }
      else {
        const v47826 = v43903.A;
        const v47827 = v43903.B;
        const v47831 = stdlib.safeMuldiv(v47815, v47818, v47826);
        const v47835 = stdlib.safeMuldiv(v47816, v47818, v47827);
        const v47836 = stdlib.lt(v47831, v47835);
        const v47837 = v47836 ? v47831 : v47835;
        v47814 = v47837;
        }
      const v47838 = stdlib.le(v47810, v47814);
      stdlib.assert(v47838, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      ;
      ;
      ;
      ;
      let v48657;
      const v48660 = v43902.A;
      if (v47820) {
        const v48664 = stdlib.cast("UInt", "UInt256", v47815, false, true);
        const v48665 = stdlib.cast("UInt", "UInt256", v47816, false, true);
        const v48666 = stdlib.safeMul256(v48664, v48665);
        const v48667 = stdlib.sqrt256(v48666);
        const v48668 = stdlib.cast("UInt256", "UInt", v48667, false, true);
        v48657 = v48668;
        }
      else {
        const v48669 = v43903.A;
        const v48670 = v43903.B;
        const v48674 = stdlib.safeMuldiv(v47815, v47818, v48669);
        const v48678 = stdlib.safeMuldiv(v47816, v47818, v48670);
        const v48679 = stdlib.lt(v48674, v48678);
        const v48680 = v48679 ? v48674 : v48678;
        v48657 = v48680;
        }
      const v48681 = stdlib.le(v47810, v48657);
      stdlib.assert(v48681, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v48684 = v43903.A;
      const v48688 = stdlib.safeAdd(v47815, v48684);
      const v48690 = v43903.B;
      const v48694 = stdlib.safeAdd(v47816, v48690);
      const v48695 = {
        A: v48688,
        B: v48694
        };
      const v48702 = stdlib.safeSub(v48660, v48657);
      const v48706 = stdlib.safeAdd(v47818, v48657);
      const v48707 = {
        A: v48702,
        B: v48706
        };
      ;
      const v48742 = await txn1.getOutput('Provider_deposit', 'v48657', ctc3, v48657);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v47755, v48742), {
          at: './index.rsh:510:11:application',
          fs: ['at ./index.rsh:510:11:application call to [unknown function] (defined at: ./index.rsh:510:11:function exp)', 'at ./index.rsh:519:10:application call to "k" (defined at: ./index.rsh:517:39:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v48753 = {
        A: v47815,
        B: v47816
        };
      const v48754 = {
        A: v48688,
        B: v48694
        };
      const v48755 = {
        A: v48702,
        B: v48706
        };
      null;
      const v66965 = v48707;
      const v66966 = v48695;
      const v66967 = v43904;
      const v66968 = v43905;
      const v66970 = v43909;
      return;
      
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc10,
    Provider_deposit0_35303: ctc11,
    Provider_withdraw0_35303: ctc9,
    Trader_exactSwapAForB0_35303: ctc12,
    Trader_exactSwapBForA0_35303: ctc12,
    Trader_swapAForB0_35303: ctc12,
    Trader_swapBForA0_35303: ctc12
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44394 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35303" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v44395 = v44394[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44396 = v44394[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44397 = v44396.A;
  const v44398 = v44396.B;
  const v44402 = v43902.B;
  const v44405 = v43903.A;
  const v44406 = v43903.B;
  const v44410 = stdlib.safeMuldiv(v44395, v44405, v44402);
  const v44414 = stdlib.safeMuldiv(v44395, v44406, v44402);
  const v44417 = stdlib.le(v44397, v44410);
  stdlib.assert(v44417, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35303" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage A',
    who: 'Provider_withdraw'
    });
  const v44420 = stdlib.le(v44398, v44414);
  stdlib.assert(v44420, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35303" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage B',
    who: 'Provider_withdraw'
    });
  const v44453 = ['Provider_withdraw0_35303', v44394];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v44453],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[v44395, v43872], [stdlib.checkedBigNumberify('./index.rsh:503:28:decimal', stdlib.UInt_max, '0'), v43817], [stdlib.checkedBigNumberify('./index.rsh:503:31:decimal', stdlib.UInt_max, '0'), v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v49714 = v49580[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
          const v49717 = v43902.B;
          const v49720 = v43903.A;
          const v49721 = v43903.B;
          const v49725 = stdlib.safeMuldiv(v49714, v49720, v49717);
          const v49729 = stdlib.safeMuldiv(v49714, v49721, v49717);
          ;
          sim_r.txns.push({
            amt: v49714,
            kind: 'to',
            tok: v43872
            });
          ;
          ;
          const v50589 = v43902.A;
          const v50617 = stdlib.safeAdd(v50589, v49714);
          const v50620 = stdlib.safeSub(v49717, v49714);
          const v50621 = {
            A: v50617,
            B: v50620
            };
          const v50626 = stdlib.safeSub(v49720, v49725);
          const v50630 = stdlib.safeSub(v49721, v49729);
          const v50631 = {
            A: v50626,
            B: v50630
            };
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43817
            });
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43818
            });
          const v50678 = {
            A: v49725,
            B: v49729
            };
          const v50679 = await txn1.getOutput('Provider_withdraw', 'v50678', ctc8, v50678);
          
          const v50691 = {
            A: v50626,
            B: v50630
            };
          const v50692 = {
            A: v50617,
            B: v50620
            };
          null;
          const v67085 = v50621;
          const v67086 = v50631;
          const v67087 = v43904;
          const v67088 = v43905;
          const v67090 = v43909;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      return;
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      undefined /* setApiDetails */;
      const v49714 = v49580[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
      const v49715 = v49580[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
      const v49717 = v43902.B;
      const v49720 = v43903.A;
      const v49721 = v43903.B;
      const v49725 = stdlib.safeMuldiv(v49714, v49720, v49717);
      const v49729 = stdlib.safeMuldiv(v49714, v49721, v49717);
      const v49731 = v49715.A;
      const v49732 = stdlib.le(v49731, v49725);
      stdlib.assert(v49732, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage A',
        who: 'Provider_withdraw'
        });
      const v49734 = v49715.B;
      const v49735 = stdlib.le(v49734, v49729);
      stdlib.assert(v49735, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage B',
        who: 'Provider_withdraw'
        });
      ;
      ;
      ;
      ;
      const v50589 = v43902.A;
      const v50617 = stdlib.safeAdd(v50589, v49714);
      const v50620 = stdlib.safeSub(v49717, v49714);
      const v50621 = {
        A: v50617,
        B: v50620
        };
      const v50626 = stdlib.safeSub(v49720, v49725);
      const v50630 = stdlib.safeSub(v49721, v49729);
      const v50631 = {
        A: v50626,
        B: v50630
        };
      ;
      ;
      const v50678 = {
        A: v49725,
        B: v49729
        };
      const v50679 = await txn1.getOutput('Provider_withdraw', 'v50678', ctc8, v50678);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v49580, v50679), {
          at: './index.rsh:496:11:application',
          fs: ['at ./index.rsh:496:11:application call to [unknown function] (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:505:10:application call to "k" (defined at: ./index.rsh:503:39:function exp)', 'at ./index.rsh:503:39:application call to [unknown function] (defined at: ./index.rsh:503:39:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v50691 = {
        A: v50626,
        B: v50630
        };
      const v50692 = {
        A: v50617,
        B: v50620
        };
      null;
      const v67085 = v50621;
      const v67086 = v50631;
      const v67087 = v43904;
      const v67088 = v43905;
      const v67090 = v43909;
      return;
      
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_exactSwapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc9,
    Provider_deposit0_35303: ctc11,
    Provider_withdraw0_35303: ctc12,
    Trader_exactSwapAForB0_35303: ctc8,
    Trader_exactSwapBForA0_35303: ctc8,
    Trader_swapAForB0_35303: ctc8,
    Trader_swapBForA0_35303: ctc8
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44781 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35303" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v44782 = v44781[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44783 = v44781[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44787 = v43905.locked;
  const v44788 = v44787 ? false : true;
  stdlib.assert(v44788, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35303" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapAForB'
    });
  const v44790 = v43903.A;
  const v44791 = v43903.B;
  const v44793 = v43905.protoFee;
  const v44794 = v43905.totFee;
  const v44795 = stdlib.safeSub(v44791, v44783);
  const v44796 = stdlib.cast("UInt", "UInt256", v44795, false, true);
  const v44797 = stdlib.cast("UInt", "UInt256", v44790, false, true);
  const v44798 = stdlib.cast("UInt", "UInt256", v44783, false, true);
  const v44799 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44794);
  const v44800 = stdlib.cast("UInt", "UInt256", v44799, false, true);
  const v44801 = stdlib.safeMul256(v44798, v44800);
  const v44802 = stdlib.safeMul256(v44796, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44803 = stdlib.safeMul256(v44801, v44797);
  const v44804 = stdlib.safeDiv256(v44803, v44802);
  const v44805 = stdlib.cast("UInt256", "UInt", v44804, false, true);
  const v44806 = stdlib.safeAdd(v44805, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v44807 = stdlib.ge(v44782, v44806);
  stdlib.assert(v44807, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35303" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapAForB'
    });
  const v44809 = stdlib.safeSub(v44782, v44806);
  const v44815 = stdlib.safeMul(v44793, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44816 = stdlib.safeDiv(v44815, v44794);
  const v44821 = stdlib.safeAdd(v44790, v44806);
  const v44825 = stdlib.safeMuldiv(v44806, v44791, v44821);
  const v44828 = stdlib.safeSub(v44825, v44783);
  const v44830 = stdlib.safeMuldiv(v44828, v44816, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44832 = stdlib.safeMuldiv(v44806, v44793, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44836 = stdlib.safeMuldiv(v44832, v44791, v44821);
  const v44837 = stdlib.gt(v44836, v44830);
  const v44838 = [v44832, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44839 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44830];
  const v44840 = v44837 ? v44838 : v44839;
  const v44842 = v44840[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v44843 = v44840[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v44851 = stdlib.safeAdd(v44790, v44782);
  const v44859 = stdlib.safeSub(v44851, v44809);
  const v44866 = stdlib.safeSub(v44859, v44842);
  const v44869 = stdlib.safeSub(v44795, v44843);
  const v44882 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44809);
  const v44883 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44783);
  const v44884 = v44882 ? v44883 : false;
  stdlib.assert(v44884, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35303" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapAForB'
    });
  const v44889 = stdlib.cast("UInt", "UInt256", v44791, false, true);
  const v44890 = stdlib.safeMul256(v44797, v44889);
  const v44891 = stdlib.cast("UInt", "UInt256", v44866, false, true);
  const v44892 = stdlib.cast("UInt", "UInt256", v44869, false, true);
  const v44893 = stdlib.safeMul256(v44891, v44892);
  const v44894 = stdlib.ge256(v44893, v44890);
  stdlib.assert(v44894, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35303" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapAForB'
    });
  const v44907 = ['Trader_exactSwapAForB0_35303', v44781];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v44907],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:596:24:decimal', stdlib.UInt_max, '0'), v43872], [v44782, v43817], [stdlib.checkedBigNumberify('./index.rsh:596:30:decimal', stdlib.UInt_max, '0'), v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          const v51601 = v51405[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
          const v51602 = v51405[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
          const v51607 = v43903.A;
          const v51608 = v43903.B;
          const v51610 = v43905.protoFee;
          const v51611 = v43905.totFee;
          const v51612 = stdlib.safeSub(v51608, v51602);
          const v51613 = stdlib.cast("UInt", "UInt256", v51612, false, true);
          const v51614 = stdlib.cast("UInt", "UInt256", v51607, false, true);
          const v51615 = stdlib.cast("UInt", "UInt256", v51602, false, true);
          const v51616 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51611);
          const v51617 = stdlib.cast("UInt", "UInt256", v51616, false, true);
          const v51618 = stdlib.safeMul256(v51615, v51617);
          const v51619 = stdlib.safeMul256(v51613, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v51620 = stdlib.safeMul256(v51618, v51614);
          const v51621 = stdlib.safeDiv256(v51620, v51619);
          const v51622 = stdlib.cast("UInt256", "UInt", v51621, false, true);
          const v51623 = stdlib.safeAdd(v51622, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v51626 = stdlib.safeSub(v51601, v51623);
          const v51632 = stdlib.safeMul(v51610, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v51633 = stdlib.safeDiv(v51632, v51611);
          const v51638 = stdlib.safeAdd(v51607, v51623);
          const v51642 = stdlib.safeMuldiv(v51623, v51608, v51638);
          const v51645 = stdlib.safeSub(v51642, v51602);
          const v51647 = stdlib.safeMuldiv(v51645, v51633, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v51649 = stdlib.safeMuldiv(v51623, v51610, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v51653 = stdlib.safeMuldiv(v51649, v51608, v51638);
          const v51654 = stdlib.gt(v51653, v51647);
          const v51655 = [v51649, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v51656 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51647];
          const v51657 = v51654 ? v51655 : v51656;
          const v51659 = v51657[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v51660 = v51657[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v51668 = stdlib.safeAdd(v51607, v51601);
          const v51676 = stdlib.safeSub(v51668, v51626);
          const v51683 = stdlib.safeSub(v51676, v51659);
          const v51686 = stdlib.safeSub(v51612, v51660);
          ;
          ;
          sim_r.txns.push({
            amt: v51601,
            kind: 'to',
            tok: v43817
            });
          ;
          const v52610 = {
            A: v51683,
            B: v51686
            };
          const v52611 = v43904.A;
          const v52615 = stdlib.safeAdd(v52611, v51659);
          const v52616 = v43904.B;
          const v52620 = stdlib.safeAdd(v52616, v51660);
          const v52621 = {
            A: v52615,
            B: v52620
            };
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43817
            });
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43818
            });
          const v52686 = {
            A: v51626,
            B: v51602
            };
          const v52687 = await txn1.getOutput('Trader_exactSwapAForB', 'v52686', ctc10, v52686);
          
          const v52696 = {
            A: v51601,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v52698 = {
            A: v51683,
            B: v51686
            };
          null;
          const v67205 = v43902;
          const v67206 = v52610;
          const v67207 = v52621;
          const v67208 = v43905;
          const v67210 = v43909;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      return;
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      undefined /* setApiDetails */;
      const v51601 = v51405[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
      const v51602 = v51405[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
      const v51604 = v43905.locked;
      const v51605 = v51604 ? false : true;
      stdlib.assert(v51605, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapAForB'
        });
      const v51607 = v43903.A;
      const v51608 = v43903.B;
      const v51610 = v43905.protoFee;
      const v51611 = v43905.totFee;
      const v51612 = stdlib.safeSub(v51608, v51602);
      const v51613 = stdlib.cast("UInt", "UInt256", v51612, false, true);
      const v51614 = stdlib.cast("UInt", "UInt256", v51607, false, true);
      const v51615 = stdlib.cast("UInt", "UInt256", v51602, false, true);
      const v51616 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51611);
      const v51617 = stdlib.cast("UInt", "UInt256", v51616, false, true);
      const v51618 = stdlib.safeMul256(v51615, v51617);
      const v51619 = stdlib.safeMul256(v51613, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v51620 = stdlib.safeMul256(v51618, v51614);
      const v51621 = stdlib.safeDiv256(v51620, v51619);
      const v51622 = stdlib.cast("UInt256", "UInt", v51621, false, true);
      const v51623 = stdlib.safeAdd(v51622, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v51624 = stdlib.ge(v51601, v51623);
      stdlib.assert(v51624, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapAForB'
        });
      const v51626 = stdlib.safeSub(v51601, v51623);
      const v51632 = stdlib.safeMul(v51610, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v51633 = stdlib.safeDiv(v51632, v51611);
      const v51638 = stdlib.safeAdd(v51607, v51623);
      const v51642 = stdlib.safeMuldiv(v51623, v51608, v51638);
      const v51645 = stdlib.safeSub(v51642, v51602);
      const v51647 = stdlib.safeMuldiv(v51645, v51633, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v51649 = stdlib.safeMuldiv(v51623, v51610, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v51653 = stdlib.safeMuldiv(v51649, v51608, v51638);
      const v51654 = stdlib.gt(v51653, v51647);
      const v51655 = [v51649, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v51656 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51647];
      const v51657 = v51654 ? v51655 : v51656;
      const v51659 = v51657[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v51660 = v51657[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v51668 = stdlib.safeAdd(v51607, v51601);
      const v51676 = stdlib.safeSub(v51668, v51626);
      const v51683 = stdlib.safeSub(v51676, v51659);
      const v51686 = stdlib.safeSub(v51612, v51660);
      const v51699 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v51626);
      const v51700 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v51602);
      const v51701 = v51699 ? v51700 : false;
      stdlib.assert(v51701, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapAForB'
        });
      const v51706 = stdlib.cast("UInt", "UInt256", v51608, false, true);
      const v51707 = stdlib.safeMul256(v51614, v51706);
      const v51708 = stdlib.cast("UInt", "UInt256", v51683, false, true);
      const v51709 = stdlib.cast("UInt", "UInt256", v51686, false, true);
      const v51710 = stdlib.safeMul256(v51708, v51709);
      const v51711 = stdlib.ge256(v51710, v51707);
      stdlib.assert(v51711, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapAForB'
        });
      ;
      ;
      ;
      ;
      const v52610 = {
        A: v51683,
        B: v51686
        };
      const v52611 = v43904.A;
      const v52615 = stdlib.safeAdd(v52611, v51659);
      const v52616 = v43904.B;
      const v52620 = stdlib.safeAdd(v52616, v51660);
      const v52621 = {
        A: v52615,
        B: v52620
        };
      ;
      ;
      const v52686 = {
        A: v51626,
        B: v51602
        };
      const v52687 = await txn1.getOutput('Trader_exactSwapAForB', 'v52686', ctc10, v52686);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v51405, v52687), {
          at: './index.rsh:594:11:application',
          fs: ['at ./index.rsh:594:11:application call to [unknown function] (defined at: ./index.rsh:594:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:596:38:function exp)', 'at ./index.rsh:596:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:596:38:application call to [unknown function] (defined at: ./index.rsh:596:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v52696 = {
        A: v51601,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v52698 = {
        A: v51683,
        B: v51686
        };
      null;
      const v67205 = v43902;
      const v67206 = v52610;
      const v67207 = v52621;
      const v67208 = v43905;
      const v67210 = v43909;
      return;
      
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_exactSwapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc9,
    Provider_deposit0_35303: ctc11,
    Provider_withdraw0_35303: ctc12,
    Trader_exactSwapAForB0_35303: ctc8,
    Trader_exactSwapBForA0_35303: ctc8,
    Trader_swapAForB0_35303: ctc8,
    Trader_swapBForA0_35303: ctc8
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44911 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35303" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v44912 = v44911[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44913 = v44911[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44917 = v43905.locked;
  const v44918 = v44917 ? false : true;
  stdlib.assert(v44918, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35303" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapBForA'
    });
  const v44920 = v43903.A;
  const v44921 = v43903.B;
  const v44923 = v43905.protoFee;
  const v44924 = v43905.totFee;
  const v44925 = stdlib.safeSub(v44920, v44913);
  const v44926 = stdlib.cast("UInt", "UInt256", v44925, false, true);
  const v44927 = stdlib.cast("UInt", "UInt256", v44921, false, true);
  const v44928 = stdlib.cast("UInt", "UInt256", v44913, false, true);
  const v44929 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44924);
  const v44930 = stdlib.cast("UInt", "UInt256", v44929, false, true);
  const v44931 = stdlib.safeMul256(v44928, v44930);
  const v44932 = stdlib.safeMul256(v44926, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44933 = stdlib.safeMul256(v44931, v44927);
  const v44934 = stdlib.safeDiv256(v44933, v44932);
  const v44935 = stdlib.cast("UInt256", "UInt", v44934, false, true);
  const v44936 = stdlib.safeAdd(v44935, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v44937 = stdlib.ge(v44912, v44936);
  stdlib.assert(v44937, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35303" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapBForA'
    });
  const v44939 = stdlib.safeSub(v44912, v44936);
  const v44945 = stdlib.safeMul(v44923, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44946 = stdlib.safeDiv(v44945, v44924);
  const v44951 = stdlib.safeAdd(v44921, v44936);
  const v44955 = stdlib.safeMuldiv(v44936, v44920, v44951);
  const v44958 = stdlib.safeSub(v44955, v44913);
  const v44960 = stdlib.safeMuldiv(v44958, v44946, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44962 = stdlib.safeMuldiv(v44936, v44923, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44966 = stdlib.safeMuldiv(v44962, v44920, v44951);
  const v44967 = stdlib.gt(v44966, v44960);
  const v44968 = [v44962, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44960];
  const v44970 = v44967 ? v44968 : v44969;
  const v44972 = v44970[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v44973 = v44970[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v44985 = stdlib.safeAdd(v44921, v44912);
  const v44992 = stdlib.safeSub(v44985, v44939);
  const v44996 = stdlib.safeSub(v44925, v44973);
  const v44999 = stdlib.safeSub(v44992, v44972);
  const v45012 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44913);
  const v45013 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44939);
  const v45014 = v45012 ? v45013 : false;
  stdlib.assert(v45014, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35303" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapBForA'
    });
  const v45018 = stdlib.cast("UInt", "UInt256", v44920, false, true);
  const v45020 = stdlib.safeMul256(v45018, v44927);
  const v45021 = stdlib.cast("UInt", "UInt256", v44996, false, true);
  const v45022 = stdlib.cast("UInt", "UInt256", v44999, false, true);
  const v45023 = stdlib.safeMul256(v45021, v45022);
  const v45024 = stdlib.ge256(v45023, v45020);
  stdlib.assert(v45024, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35303" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapBForA'
    });
  const v45037 = ['Trader_exactSwapBForA0_35303', v44911];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v45037],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:600:24:decimal', stdlib.UInt_max, '0'), v43872], [stdlib.checkedBigNumberify('./index.rsh:600:27:decimal', stdlib.UInt_max, '0'), v43817], [v44912, v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          const v53559 = v53230[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
          const v53560 = v53230[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
          const v53565 = v43903.A;
          const v53566 = v43903.B;
          const v53568 = v43905.protoFee;
          const v53569 = v43905.totFee;
          const v53570 = stdlib.safeSub(v53565, v53560);
          const v53571 = stdlib.cast("UInt", "UInt256", v53570, false, true);
          const v53572 = stdlib.cast("UInt", "UInt256", v53566, false, true);
          const v53573 = stdlib.cast("UInt", "UInt256", v53560, false, true);
          const v53574 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53569);
          const v53575 = stdlib.cast("UInt", "UInt256", v53574, false, true);
          const v53576 = stdlib.safeMul256(v53573, v53575);
          const v53577 = stdlib.safeMul256(v53571, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v53578 = stdlib.safeMul256(v53576, v53572);
          const v53579 = stdlib.safeDiv256(v53578, v53577);
          const v53580 = stdlib.cast("UInt256", "UInt", v53579, false, true);
          const v53581 = stdlib.safeAdd(v53580, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v53584 = stdlib.safeSub(v53559, v53581);
          const v53590 = stdlib.safeMul(v53568, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v53591 = stdlib.safeDiv(v53590, v53569);
          const v53596 = stdlib.safeAdd(v53566, v53581);
          const v53600 = stdlib.safeMuldiv(v53581, v53565, v53596);
          const v53603 = stdlib.safeSub(v53600, v53560);
          const v53605 = stdlib.safeMuldiv(v53603, v53591, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v53607 = stdlib.safeMuldiv(v53581, v53568, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v53611 = stdlib.safeMuldiv(v53607, v53565, v53596);
          const v53612 = stdlib.gt(v53611, v53605);
          const v53613 = [v53607, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v53614 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53605];
          const v53615 = v53612 ? v53613 : v53614;
          const v53617 = v53615[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v53618 = v53615[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v53630 = stdlib.safeAdd(v53566, v53559);
          const v53637 = stdlib.safeSub(v53630, v53584);
          const v53641 = stdlib.safeSub(v53570, v53618);
          const v53644 = stdlib.safeSub(v53637, v53617);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v53559,
            kind: 'to',
            tok: v43818
            });
          const v54619 = {
            A: v53641,
            B: v53644
            };
          const v54620 = v43904.A;
          const v54624 = stdlib.safeAdd(v54620, v53618);
          const v54625 = v43904.B;
          const v54629 = stdlib.safeAdd(v54625, v53617);
          const v54630 = {
            A: v54624,
            B: v54629
            };
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43817
            });
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43818
            });
          const v54695 = {
            A: v53560,
            B: v53584
            };
          const v54696 = await txn1.getOutput('Trader_exactSwapBForA', 'v54695', ctc10, v54695);
          
          const v54705 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v53559
            };
          const v54707 = {
            A: v53641,
            B: v53644
            };
          null;
          const v67325 = v43902;
          const v67326 = v54619;
          const v67327 = v54630;
          const v67328 = v43905;
          const v67330 = v43909;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      return;
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      undefined /* setApiDetails */;
      const v53559 = v53230[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
      const v53560 = v53230[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
      const v53562 = v43905.locked;
      const v53563 = v53562 ? false : true;
      stdlib.assert(v53563, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapBForA'
        });
      const v53565 = v43903.A;
      const v53566 = v43903.B;
      const v53568 = v43905.protoFee;
      const v53569 = v43905.totFee;
      const v53570 = stdlib.safeSub(v53565, v53560);
      const v53571 = stdlib.cast("UInt", "UInt256", v53570, false, true);
      const v53572 = stdlib.cast("UInt", "UInt256", v53566, false, true);
      const v53573 = stdlib.cast("UInt", "UInt256", v53560, false, true);
      const v53574 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53569);
      const v53575 = stdlib.cast("UInt", "UInt256", v53574, false, true);
      const v53576 = stdlib.safeMul256(v53573, v53575);
      const v53577 = stdlib.safeMul256(v53571, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v53578 = stdlib.safeMul256(v53576, v53572);
      const v53579 = stdlib.safeDiv256(v53578, v53577);
      const v53580 = stdlib.cast("UInt256", "UInt", v53579, false, true);
      const v53581 = stdlib.safeAdd(v53580, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v53582 = stdlib.ge(v53559, v53581);
      stdlib.assert(v53582, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapBForA'
        });
      const v53584 = stdlib.safeSub(v53559, v53581);
      const v53590 = stdlib.safeMul(v53568, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v53591 = stdlib.safeDiv(v53590, v53569);
      const v53596 = stdlib.safeAdd(v53566, v53581);
      const v53600 = stdlib.safeMuldiv(v53581, v53565, v53596);
      const v53603 = stdlib.safeSub(v53600, v53560);
      const v53605 = stdlib.safeMuldiv(v53603, v53591, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v53607 = stdlib.safeMuldiv(v53581, v53568, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v53611 = stdlib.safeMuldiv(v53607, v53565, v53596);
      const v53612 = stdlib.gt(v53611, v53605);
      const v53613 = [v53607, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v53614 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53605];
      const v53615 = v53612 ? v53613 : v53614;
      const v53617 = v53615[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v53618 = v53615[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v53630 = stdlib.safeAdd(v53566, v53559);
      const v53637 = stdlib.safeSub(v53630, v53584);
      const v53641 = stdlib.safeSub(v53570, v53618);
      const v53644 = stdlib.safeSub(v53637, v53617);
      const v53657 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v53560);
      const v53658 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v53584);
      const v53659 = v53657 ? v53658 : false;
      stdlib.assert(v53659, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapBForA'
        });
      const v53663 = stdlib.cast("UInt", "UInt256", v53565, false, true);
      const v53665 = stdlib.safeMul256(v53663, v53572);
      const v53666 = stdlib.cast("UInt", "UInt256", v53641, false, true);
      const v53667 = stdlib.cast("UInt", "UInt256", v53644, false, true);
      const v53668 = stdlib.safeMul256(v53666, v53667);
      const v53669 = stdlib.ge256(v53668, v53665);
      stdlib.assert(v53669, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapBForA'
        });
      ;
      ;
      ;
      ;
      const v54619 = {
        A: v53641,
        B: v53644
        };
      const v54620 = v43904.A;
      const v54624 = stdlib.safeAdd(v54620, v53618);
      const v54625 = v43904.B;
      const v54629 = stdlib.safeAdd(v54625, v53617);
      const v54630 = {
        A: v54624,
        B: v54629
        };
      ;
      ;
      const v54695 = {
        A: v53560,
        B: v53584
        };
      const v54696 = await txn1.getOutput('Trader_exactSwapBForA', 'v54695', ctc10, v54695);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v53230, v54696), {
          at: './index.rsh:598:11:application',
          fs: ['at ./index.rsh:598:11:application call to [unknown function] (defined at: ./index.rsh:598:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:600:38:function exp)', 'at ./index.rsh:600:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:600:38:application call to [unknown function] (defined at: ./index.rsh:600:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v54705 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v53559
        };
      const v54707 = {
        A: v53641,
        B: v53644
        };
      null;
      const v67325 = v43902;
      const v67326 = v54619;
      const v67327 = v54630;
      const v67328 = v43905;
      const v67330 = v43909;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc9,
    Provider_deposit0_35303: ctc11,
    Provider_withdraw0_35303: ctc12,
    Trader_exactSwapAForB0_35303: ctc8,
    Trader_exactSwapBForA0_35303: ctc8,
    Trader_swapAForB0_35303: ctc8,
    Trader_swapBForA0_35303: ctc8
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44532 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35303" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v44533 = v44532[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44534 = v44532[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44539 = v43905.locked;
  const v44540 = v44539 ? false : true;
  stdlib.assert(v44540, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35303" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v44542 = v43903.A;
  const v44543 = v43903.B;
  const v44545 = v43905.protoFee;
  const v44546 = v43905.totFee;
  const v44547 = stdlib.cast("UInt", "UInt256", v44543, false, true);
  const v44548 = stdlib.cast("UInt", "UInt256", v44542, false, true);
  const v44549 = stdlib.cast("UInt", "UInt256", v44533, false, true);
  const v44550 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44546);
  const v44551 = stdlib.cast("UInt", "UInt256", v44550, false, true);
  const v44552 = stdlib.safeMul256(v44549, v44551);
  const v44553 = stdlib.safeMul256(v44548, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44554 = stdlib.safeAdd256(v44553, v44552);
  const v44555 = stdlib.safeMul256(v44552, v44547);
  const v44556 = stdlib.safeDiv256(v44555, v44554);
  const v44557 = stdlib.cast("UInt256", "UInt", v44556, false, true);
  const v44563 = stdlib.safeMul(v44545, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44564 = stdlib.safeDiv(v44563, v44546);
  const v44569 = stdlib.safeAdd(v44542, v44533);
  const v44573 = stdlib.safeMuldiv(v44533, v44543, v44569);
  const v44576 = stdlib.safeSub(v44573, v44557);
  const v44578 = stdlib.safeMuldiv(v44576, v44564, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44580 = stdlib.safeMuldiv(v44533, v44545, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44584 = stdlib.safeMuldiv(v44580, v44543, v44569);
  const v44585 = stdlib.gt(v44584, v44578);
  const v44586 = [v44580, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44587 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44578];
  const v44588 = v44585 ? v44586 : v44587;
  const v44590 = v44588[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v44591 = v44588[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v44609 = stdlib.safeSub(v44543, v44557);
  const v44613 = stdlib.safeSub(v44569, v44590);
  const v44616 = stdlib.safeSub(v44609, v44591);
  const v44629 = stdlib.le(v44534, v44557);
  stdlib.assert(v44629, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35303" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v44635 = stdlib.safeMul256(v44548, v44547);
  const v44636 = stdlib.cast("UInt", "UInt256", v44613, false, true);
  const v44637 = stdlib.cast("UInt", "UInt256", v44616, false, true);
  const v44638 = stdlib.safeMul256(v44636, v44637);
  const v44639 = stdlib.ge256(v44638, v44635);
  stdlib.assert(v44639, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35303" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v44652 = ['Trader_swapAForB0_35303', v44532];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v44652],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:588:24:decimal', stdlib.UInt_max, '0'), v43872], [v44533, v43817], [stdlib.checkedBigNumberify('./index.rsh:588:30:decimal', stdlib.UInt_max, '0'), v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v55517 = v55055[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
          const v55524 = v43903.A;
          const v55525 = v43903.B;
          const v55527 = v43905.protoFee;
          const v55528 = v43905.totFee;
          const v55529 = stdlib.cast("UInt", "UInt256", v55525, false, true);
          const v55530 = stdlib.cast("UInt", "UInt256", v55524, false, true);
          const v55531 = stdlib.cast("UInt", "UInt256", v55517, false, true);
          const v55532 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55528);
          const v55533 = stdlib.cast("UInt", "UInt256", v55532, false, true);
          const v55534 = stdlib.safeMul256(v55531, v55533);
          const v55535 = stdlib.safeMul256(v55530, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v55536 = stdlib.safeAdd256(v55535, v55534);
          const v55537 = stdlib.safeMul256(v55534, v55529);
          const v55538 = stdlib.safeDiv256(v55537, v55536);
          const v55539 = stdlib.cast("UInt256", "UInt", v55538, false, true);
          const v55545 = stdlib.safeMul(v55527, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v55546 = stdlib.safeDiv(v55545, v55528);
          const v55551 = stdlib.safeAdd(v55524, v55517);
          const v55555 = stdlib.safeMuldiv(v55517, v55525, v55551);
          const v55558 = stdlib.safeSub(v55555, v55539);
          const v55560 = stdlib.safeMuldiv(v55558, v55546, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v55562 = stdlib.safeMuldiv(v55517, v55527, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v55566 = stdlib.safeMuldiv(v55562, v55525, v55551);
          const v55567 = stdlib.gt(v55566, v55560);
          const v55568 = [v55562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v55569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55560];
          const v55570 = v55567 ? v55568 : v55569;
          const v55572 = v55570[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v55573 = v55570[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v55591 = stdlib.safeSub(v55525, v55539);
          const v55595 = stdlib.safeSub(v55551, v55572);
          const v55598 = stdlib.safeSub(v55591, v55573);
          ;
          ;
          sim_r.txns.push({
            amt: v55517,
            kind: 'to',
            tok: v43817
            });
          ;
          const v56624 = {
            A: v55595,
            B: v55598
            };
          const v56625 = v43904.A;
          const v56629 = stdlib.safeAdd(v56625, v55572);
          const v56630 = v43904.B;
          const v56634 = stdlib.safeAdd(v56630, v55573);
          const v56635 = {
            A: v56629,
            B: v56634
            };
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43818
            });
          const v56689 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v55539
            };
          const v56690 = await txn1.getOutput('Trader_swapAForB', 'v56689', ctc10, v56689);
          
          const v56699 = {
            A: v55517,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v56701 = {
            A: v55595,
            B: v55598
            };
          null;
          const v67445 = v43902;
          const v67446 = v56624;
          const v67447 = v56635;
          const v67448 = v43905;
          const v67450 = v43909;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      return;
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      undefined /* setApiDetails */;
      const v55517 = v55055[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
      const v55518 = v55055[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
      const v55521 = v43905.locked;
      const v55522 = v55521 ? false : true;
      stdlib.assert(v55522, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v55524 = v43903.A;
      const v55525 = v43903.B;
      const v55527 = v43905.protoFee;
      const v55528 = v43905.totFee;
      const v55529 = stdlib.cast("UInt", "UInt256", v55525, false, true);
      const v55530 = stdlib.cast("UInt", "UInt256", v55524, false, true);
      const v55531 = stdlib.cast("UInt", "UInt256", v55517, false, true);
      const v55532 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55528);
      const v55533 = stdlib.cast("UInt", "UInt256", v55532, false, true);
      const v55534 = stdlib.safeMul256(v55531, v55533);
      const v55535 = stdlib.safeMul256(v55530, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v55536 = stdlib.safeAdd256(v55535, v55534);
      const v55537 = stdlib.safeMul256(v55534, v55529);
      const v55538 = stdlib.safeDiv256(v55537, v55536);
      const v55539 = stdlib.cast("UInt256", "UInt", v55538, false, true);
      const v55545 = stdlib.safeMul(v55527, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v55546 = stdlib.safeDiv(v55545, v55528);
      const v55551 = stdlib.safeAdd(v55524, v55517);
      const v55555 = stdlib.safeMuldiv(v55517, v55525, v55551);
      const v55558 = stdlib.safeSub(v55555, v55539);
      const v55560 = stdlib.safeMuldiv(v55558, v55546, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v55562 = stdlib.safeMuldiv(v55517, v55527, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v55566 = stdlib.safeMuldiv(v55562, v55525, v55551);
      const v55567 = stdlib.gt(v55566, v55560);
      const v55568 = [v55562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v55569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55560];
      const v55570 = v55567 ? v55568 : v55569;
      const v55572 = v55570[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v55573 = v55570[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v55591 = stdlib.safeSub(v55525, v55539);
      const v55595 = stdlib.safeSub(v55551, v55572);
      const v55598 = stdlib.safeSub(v55591, v55573);
      const v55611 = stdlib.le(v55518, v55539);
      stdlib.assert(v55611, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v55617 = stdlib.safeMul256(v55530, v55529);
      const v55618 = stdlib.cast("UInt", "UInt256", v55595, false, true);
      const v55619 = stdlib.cast("UInt", "UInt256", v55598, false, true);
      const v55620 = stdlib.safeMul256(v55618, v55619);
      const v55621 = stdlib.ge256(v55620, v55617);
      stdlib.assert(v55621, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      ;
      ;
      ;
      const v56624 = {
        A: v55595,
        B: v55598
        };
      const v56625 = v43904.A;
      const v56629 = stdlib.safeAdd(v56625, v55572);
      const v56630 = v43904.B;
      const v56634 = stdlib.safeAdd(v56630, v55573);
      const v56635 = {
        A: v56629,
        B: v56634
        };
      ;
      const v56689 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v55539
        };
      const v56690 = await txn1.getOutput('Trader_swapAForB', 'v56689', ctc10, v56689);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v55055, v56690), {
          at: './index.rsh:586:11:application',
          fs: ['at ./index.rsh:586:11:application call to [unknown function] (defined at: ./index.rsh:586:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:588:38:function exp)', 'at ./index.rsh:588:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:588:38:application call to [unknown function] (defined at: ./index.rsh:588:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v56699 = {
        A: v55517,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v56701 = {
        A: v55595,
        B: v55598
        };
      null;
      const v67445 = v43902;
      const v67446 = v56624;
      const v67447 = v56635;
      const v67448 = v43905;
      const v67450 = v43909;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    A: ctc3,
    B: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc5], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc10]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_35303: ctc9,
    Provider_deposit0_35303: ctc11,
    Provider_withdraw0_35303: ctc12,
    Trader_exactSwapAForB0_35303: ctc8,
    Trader_exactSwapBForA0_35303: ctc8,
    Trader_swapAForB0_35303: ctc8,
    Trader_swapBForA0_35303: ctc8
    });
  
  
  const [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44656 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35303" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v44657 = v44656[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44658 = v44656[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44663 = v43905.locked;
  const v44664 = v44663 ? false : true;
  stdlib.assert(v44664, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35303" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v44666 = v43903.A;
  const v44667 = v43903.B;
  const v44669 = v43905.protoFee;
  const v44670 = v43905.totFee;
  const v44671 = stdlib.cast("UInt", "UInt256", v44666, false, true);
  const v44672 = stdlib.cast("UInt", "UInt256", v44667, false, true);
  const v44673 = stdlib.cast("UInt", "UInt256", v44657, false, true);
  const v44674 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44670);
  const v44675 = stdlib.cast("UInt", "UInt256", v44674, false, true);
  const v44676 = stdlib.safeMul256(v44673, v44675);
  const v44677 = stdlib.safeMul256(v44672, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44678 = stdlib.safeAdd256(v44677, v44676);
  const v44679 = stdlib.safeMul256(v44676, v44671);
  const v44680 = stdlib.safeDiv256(v44679, v44678);
  const v44681 = stdlib.cast("UInt256", "UInt", v44680, false, true);
  const v44687 = stdlib.safeMul(v44669, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44688 = stdlib.safeDiv(v44687, v44670);
  const v44693 = stdlib.safeAdd(v44667, v44657);
  const v44697 = stdlib.safeMuldiv(v44657, v44666, v44693);
  const v44700 = stdlib.safeSub(v44697, v44681);
  const v44702 = stdlib.safeMuldiv(v44700, v44688, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44704 = stdlib.safeMuldiv(v44657, v44669, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44708 = stdlib.safeMuldiv(v44704, v44666, v44693);
  const v44709 = stdlib.gt(v44708, v44702);
  const v44710 = [v44704, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44711 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44702];
  const v44712 = v44709 ? v44710 : v44711;
  const v44714 = v44712[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v44715 = v44712[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v44731 = stdlib.safeSub(v44666, v44681);
  const v44737 = stdlib.safeSub(v44731, v44715);
  const v44740 = stdlib.safeSub(v44693, v44714);
  const v44753 = stdlib.le(v44658, v44681);
  stdlib.assert(v44753, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35303" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v44760 = stdlib.safeMul256(v44671, v44672);
  const v44761 = stdlib.cast("UInt", "UInt256", v44737, false, true);
  const v44762 = stdlib.cast("UInt", "UInt256", v44740, false, true);
  const v44763 = stdlib.safeMul256(v44761, v44762);
  const v44764 = stdlib.ge256(v44763, v44760);
  stdlib.assert(v44764, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35303" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v44777 = ['Trader_swapBForA0_35303', v44656];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43817, v43818, v43844, v43872, v43899, v43902, v43903, v43904, v43905, v43909, v44777],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:592:24:decimal', stdlib.UInt_max, '0'), v43872], [stdlib.checkedBigNumberify('./index.rsh:592:27:decimal', stdlib.UInt_max, '0'), v43817], [v44657, v43818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
      
      switch (v45927[0]) {
        case 'Protocol_harvest0_35303': {
          const v45930 = v45927[1];
          
          break;
          }
        case 'Provider_deposit0_35303': {
          const v47755 = v45927[1];
          
          break;
          }
        case 'Provider_withdraw0_35303': {
          const v49580 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35303': {
          const v51405 = v45927[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35303': {
          const v53230 = v45927[1];
          
          break;
          }
        case 'Trader_swapAForB0_35303': {
          const v55055 = v45927[1];
          
          break;
          }
        case 'Trader_swapBForA0_35303': {
          const v56880 = v45927[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v57469 = v56880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
          const v57476 = v43903.A;
          const v57477 = v43903.B;
          const v57479 = v43905.protoFee;
          const v57480 = v43905.totFee;
          const v57481 = stdlib.cast("UInt", "UInt256", v57476, false, true);
          const v57482 = stdlib.cast("UInt", "UInt256", v57477, false, true);
          const v57483 = stdlib.cast("UInt", "UInt256", v57469, false, true);
          const v57484 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57480);
          const v57485 = stdlib.cast("UInt", "UInt256", v57484, false, true);
          const v57486 = stdlib.safeMul256(v57483, v57485);
          const v57487 = stdlib.safeMul256(v57482, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v57488 = stdlib.safeAdd256(v57487, v57486);
          const v57489 = stdlib.safeMul256(v57486, v57481);
          const v57490 = stdlib.safeDiv256(v57489, v57488);
          const v57491 = stdlib.cast("UInt256", "UInt", v57490, false, true);
          const v57497 = stdlib.safeMul(v57479, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v57498 = stdlib.safeDiv(v57497, v57480);
          const v57503 = stdlib.safeAdd(v57477, v57469);
          const v57507 = stdlib.safeMuldiv(v57469, v57476, v57503);
          const v57510 = stdlib.safeSub(v57507, v57491);
          const v57512 = stdlib.safeMuldiv(v57510, v57498, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v57514 = stdlib.safeMuldiv(v57469, v57479, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v57518 = stdlib.safeMuldiv(v57514, v57476, v57503);
          const v57519 = stdlib.gt(v57518, v57512);
          const v57520 = [v57514, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v57521 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57512];
          const v57522 = v57519 ? v57520 : v57521;
          const v57524 = v57522[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v57525 = v57522[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v57541 = stdlib.safeSub(v57476, v57491);
          const v57547 = stdlib.safeSub(v57541, v57525);
          const v57550 = stdlib.safeSub(v57503, v57524);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v57469,
            kind: 'to',
            tok: v43818
            });
          const v58618 = {
            A: v57547,
            B: v57550
            };
          const v58619 = v43904.A;
          const v58623 = stdlib.safeAdd(v58619, v57525);
          const v58624 = v43904.B;
          const v58628 = stdlib.safeAdd(v58624, v57524);
          const v58629 = {
            A: v58623,
            B: v58628
            };
          sim_r.txns.push({
            kind: 'from',
            to: v45926,
            tok: v43817
            });
          const v58684 = {
            A: v57491,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v58685 = await txn1.getOutput('Trader_swapBForA', 'v58684', ctc10, v58684);
          
          const v58694 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v57469
            };
          const v58696 = {
            A: v57547,
            B: v57550
            };
          null;
          const v67565 = v43902;
          const v67566 = v58618;
          const v67567 = v58629;
          const v67568 = v43905;
          const v67570 = v43909;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v45927], secs: v45929, time: v45928, didSend: v40907, from: v45926 } = txn1;
  switch (v45927[0]) {
    case 'Protocol_harvest0_35303': {
      const v45930 = v45927[1];
      return;
      break;
      }
    case 'Provider_deposit0_35303': {
      const v47755 = v45927[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35303': {
      const v49580 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35303': {
      const v51405 = v45927[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35303': {
      const v53230 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35303': {
      const v55055 = v45927[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35303': {
      const v56880 = v45927[1];
      undefined /* setApiDetails */;
      const v57469 = v56880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
      const v57470 = v56880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
      const v57473 = v43905.locked;
      const v57474 = v57473 ? false : true;
      stdlib.assert(v57474, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v57476 = v43903.A;
      const v57477 = v43903.B;
      const v57479 = v43905.protoFee;
      const v57480 = v43905.totFee;
      const v57481 = stdlib.cast("UInt", "UInt256", v57476, false, true);
      const v57482 = stdlib.cast("UInt", "UInt256", v57477, false, true);
      const v57483 = stdlib.cast("UInt", "UInt256", v57469, false, true);
      const v57484 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57480);
      const v57485 = stdlib.cast("UInt", "UInt256", v57484, false, true);
      const v57486 = stdlib.safeMul256(v57483, v57485);
      const v57487 = stdlib.safeMul256(v57482, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v57488 = stdlib.safeAdd256(v57487, v57486);
      const v57489 = stdlib.safeMul256(v57486, v57481);
      const v57490 = stdlib.safeDiv256(v57489, v57488);
      const v57491 = stdlib.cast("UInt256", "UInt", v57490, false, true);
      const v57497 = stdlib.safeMul(v57479, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v57498 = stdlib.safeDiv(v57497, v57480);
      const v57503 = stdlib.safeAdd(v57477, v57469);
      const v57507 = stdlib.safeMuldiv(v57469, v57476, v57503);
      const v57510 = stdlib.safeSub(v57507, v57491);
      const v57512 = stdlib.safeMuldiv(v57510, v57498, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v57514 = stdlib.safeMuldiv(v57469, v57479, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v57518 = stdlib.safeMuldiv(v57514, v57476, v57503);
      const v57519 = stdlib.gt(v57518, v57512);
      const v57520 = [v57514, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v57521 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57512];
      const v57522 = v57519 ? v57520 : v57521;
      const v57524 = v57522[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v57525 = v57522[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v57541 = stdlib.safeSub(v57476, v57491);
      const v57547 = stdlib.safeSub(v57541, v57525);
      const v57550 = stdlib.safeSub(v57503, v57524);
      const v57563 = stdlib.le(v57470, v57491);
      stdlib.assert(v57563, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v57570 = stdlib.safeMul256(v57481, v57482);
      const v57571 = stdlib.cast("UInt", "UInt256", v57547, false, true);
      const v57572 = stdlib.cast("UInt", "UInt256", v57550, false, true);
      const v57573 = stdlib.safeMul256(v57571, v57572);
      const v57574 = stdlib.ge256(v57573, v57570);
      stdlib.assert(v57574, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      ;
      ;
      ;
      const v58618 = {
        A: v57547,
        B: v57550
        };
      const v58619 = v43904.A;
      const v58623 = stdlib.safeAdd(v58619, v57525);
      const v58624 = v43904.B;
      const v58628 = stdlib.safeAdd(v58624, v57524);
      const v58629 = {
        A: v58623,
        B: v58628
        };
      ;
      const v58684 = {
        A: v57491,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v58685 = await txn1.getOutput('Trader_swapBForA', 'v58684', ctc10, v58684);
      if (v40907) {
        stdlib.protect(ctc1, await interact.out(v56880, v58685), {
          at: './index.rsh:590:11:application',
          fs: ['at ./index.rsh:590:11:application call to [unknown function] (defined at: ./index.rsh:590:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:592:38:function exp)', 'at ./index.rsh:592:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:592:38:application call to [unknown function] (defined at: ./index.rsh:592:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v58694 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v57469
        };
      const v58696 = {
        A: v57547,
        B: v57550
        };
      null;
      const v67565 = v43902;
      const v67566 = v58618;
      const v67567 = v58629;
      const v67568 = v43905;
      const v67570 = v43909;
      return;
      
      break;
      }
    }
  
  
  };
export async function Protocol_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Protocol_delete2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Protocol_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Protocol_harvest4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdraw4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_exactSwapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_exactSwapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_exactSwapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_exactSwapAForB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_exactSwapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_exactSwapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_exactSwapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_exactSwapBForA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_swapAForB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_swapBForA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64,(uint64,uint64))(uint64,uint64)`, `Trader_exactSwapAForB(uint64,uint64)(uint64,uint64)`, `Trader_exactSwapBForA(uint64,uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`],
    sigs: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64,(uint64,uint64))(uint64,uint64)`, `Trader_exactSwapAForB(uint64,uint64)(uint64,uint64)`, `Trader_exactSwapBForA(uint64,uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`]
    },
  appApproval: `ByAeABgIBGSQTgEQQAIDSQagjQa14PDBB9mUrKAK2YG8kQ7v7abtD0G3/er+DLj3keUHmeujhwretrjbBIHH87MF3v6o9Abg8+yqAu6I6cQCGQX///////////8BJgUBAQEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQAAQ81lT6IjUAMRhBFbUrZEkiWzUBJFs1AjYaABdJQQe0IjUEIQY1BkkhDgxAA5xJIQ8MQANLSSEQDEACJEkhEQxAAgMhERJENAFJJQxAAPslEkQ2GgEXNf8pZChkUEk1A0lXQRA1/ldhOUk1/Vc4ARcURDT+Ils1/DT+JFs1+zT9Ils1+jT9IQdbNfkjrzT8FlA1+COvNPsWUDX3I680/xZQI68hBTT5CRZQo4gVbEk19jT4o4gVYzT3KqOIFVw09qCIFVaiiBVSSZMhCA5EI1s19TT7NP8INfQ0/zT8HTT0lzT1CTT6IQQLNPkKHSEElzXzNP80+h0hBZc18iSvNPMWUDTyFiSvUDTyNPwdNPSXNPMNTTXxIjT1DkQjrzT8NPUJNPEkWwkWUCOvNPQ08SJbCRZQo4gU4jT4NPejiBTap0Q09RY1B0IUcCEJEkQ2GgEXNf8pZChkUEk1A0lXMRA1/ldROUk1/Vc4ARcURDT+Ils1/DT+JFs1+zT9Ils1+jT9IQdbNfkjrzT8FlA1+COvNPsWUDX3I680/xZQI68hBTT5CRZQo4gUcEk19jT4o4gUZzT3KqOIFGA09qCIFFqiiBRWSZMhCA5EI1s19TT7NP8INfQ0/zT8HTT0lzT1CTT6IQQLNPkKHSEElzXzNP80+h0hBZc18iSvNPMWUDTyFiSvUDTyNPwdNPSXNPMNTTXxIjT1DkQjrzT8NPUJNPEkWwkWUCOvNPQ08SJbCRZQo4gT5jT4NPejiBPep0Q09RY1B0ITdCEQEkQ2GgE2GgJQNf+AAQI0/1AhEq9QQgWTSSETDEAAGiETEkQ2GgE2GgJQNf+AAQQ0/1AhC69QQgVyIQ8SRDQBSSUMQAB5JRJEKWQoZFBJNQNJSlcxEDX/V0EQNf5XURA1/VdhOTX8NANXGQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cICFA0A1cQCVA1B0IStCEJEkQpZChkUEk1A0lKVyEQNf9XMRA1/ldBEDX9V1E5Nfw0A1cZCDT/VwAINP9XCAhQUDT+VwAINP5XCAhQUDT8VwAINPxXCAhQNPxXEAhQNPxXGCBQNPxXOAFQUDT9VwAINP1XCAhQUDQDVwgIUDQDVxAJUDUHQhI6SSEUDEAAO0khFQxAABohFRJENhoBNhoCUDX/gAEFNP9QIQuvUEIESyEUEkQ2GgE2GgJQNf+AAQY0/1AhC69QQgQxIQ4SRCtCDqNJIRYMQAL4SSEXDEACJEkhGAxAABohGBJENhoBNhoCUDX/gAEDNP9QIQuvUEID+iEXEkQ0AUklDEAA+yUSRDYaARc1/ylkKGRQSTUDSVdBEDX+V2E5STX9VzgBFxRENP4iWzX8NP4kWzX7NP0iWzX6NP0hB1s1+SOvNPsWUDX4I680/BZQNfcjrzT/FlAjryEFNPkJFlCjiBG2STX2NPijiBGtNPcqo4gRpjT2oIgRoKKIEZxJkyEIDkQjWzX1NPw0/wg19DT/NPsdNPSXNPUJNPohBAs0+QodIQSXNfM0/zT6HSEFlzXyJK808xZQNPIWJK9QNPI0+x009Jc08w1NNfEiNPUORCOvNPQ08SJbCRZQI680+zT1CTTxJFsJFlCjiBEsNPc0+KOIESSnRDT1FjUHQhC6IQkSRDYaARc1/ylkKGRQSTUDSVcxEDX+V1E5STX9VzgBFxRENP4iWzX8NP4kWzX7NP0iWzX6NP0hB1s1+SOvNPsWUDX4I680/BZQNfcjrzT/FlAjryEFNPkJFlCjiBC6STX2NPijiBCxNPcqo4gQqjT2oIgQpKKIEKBJkyEIDkQjWzX1NPw0/wg19DT/NPsdNPSXNPUJNPohBAs0+QodIQSXNfM0/zT6HSEFlzXyJK808xZQNPIWJK9QNPI0+x009Jc08w1NNfEiNPUORCOvNPQ08SJbCRZQI680+zT1CTTxJFsJFlCjiBAwNPc0+KOIECinRDT1FjUHQg++IRYSRDQBSSUMQABgJRJENhoBFzX/KWQoZFBJNQNXQRA1/iOvNP8WUCOvIQU0A1dhOSEHWwgWUKOID+MjrzT+VwgIUKOID9cjrzT+Ils0/wkWUCqjiA/HoogPw0mTIQgORCNbIQYIFjUHQg9SIQkSRDYaARc1/ylkKGRQSTUDVzEQNf4jrzT/FlAjryEFNANXUTkhB1sIFlCjiA+CI680/lcICFCjiA92I680/iJbNP8JFlAqo4gPZqKID2JJkyEIDkQjWyEGCBY1B0IO8UkhGQxAADNJIRoMQAAUIRoSRDYaATYaAlA1/yk0/1BCAQghGRJENhoBNhoCUDX/KDT/UCESr1BCAPCBm4LoyQESRDQBSSUMQABgJRJENhoBFzX/KWQoZFBJNQNXQRA1/iOvNP8WUCOvIQU0A1dhOSEHWwgWUKOIDtgjrzT+VwAIUKOIDswjrzT+JFs0/wkWUCqjiA68oogOuEmTIQgORCNbIQYIFjUHQg5HIQkSRDYaARc1/ylkKGRQSTUDVzEQNf4jrzT/FlAjryEFNANXUTkhB1sIFlCjiA53I680/lcACFCjiA5rI680/iRbNP8JFlAqo4gOW6KIDldJkyEIDkQjWyEGCBY1B0IN5jYaAhc1BDYaAzYaARdJIQkMQAsCSSEKDEAKfSEKEkQlNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSiJbNf8kWzX+VxAJNf0hG1s1/FchEDX7VzEQNfpXQRA1+VdREDX4V2E5NfeBmgFbNfZJNQU19YAER2hHHzT1ULA09SJVSSEKDEAGP0khHAxAAvBJIQwMQAF2IQwSRDT1VwEQNfQ09CJbNfM091c4ARcURDT5Ils18jT5JFs18TT3Ils18DT3IQdbNe8jrzTyFlA17iOvNPEWUDXtI6808xZQI68hBTTvCRZQo4gNXEk17DTuo4gNUzTtKqOIDUw07KCIDUaiiA1CSZMhCA5EI1s16zTxNPMINeo08zTyHTTqlzTrCTTwIQQLNO8KHSEElzXpNPM08B0hBZc16CSvNOkWUDToFiSvUDToNPIdNOqXNOkNTUk15yJbNeY05yRbNeU08jTrCTTlCTXkNOo05gk14zT0JFs06w5EI6805BZQI6804xZQo4gMwDTuNO2jiAy4p0Q08zT+iAyPsSKyATTrshIlshAxALIUNP+yEbM06xYkr1A14oAIAAAAAAAA5Tw04lCwNOI1BycEMQBQJK808xZQUDTiUDTkFjTjFlBQsDT/NP40/TT8NPsiNPo05BY04xZQNPgiWzTlCBY0+CRbNOYIFlA09zIGNPZCCwVINPVXARA19DT0Ils18zT3VzgBFxRENPkiWzXyNPkkWzXxNPciWzXwNPchB1s17yOvNPEWUDXuI6808hZQNe0jrzTzFlAjryEFNO8JFlCjiAvpSTXsNO6jiAvgNO0qo4gL2TTsoIgL06KIC89JkyEIDkQjWzXrNPI08wg16jTzNPEdNOqXNOsJNPAhBAs07wodIQSXNek08zTwHSEFlzXoJK806RZQNOgWJK9QNOg08R006pc06Q1NSTXnIls15jTnJFs15TTqNOYJNeQ08TTrCTTlCTXjNPQkWzTrDkQjrzTkFlAjrzTjFlCjiAtNNO007qOIC0WnRDTzNP+ICxyxIrIBNOuyEiWyEDEAshQ0/rIRsySvNOsWUDXigAgAAAAAAADdcTTiULA04jUHJwQxAFA08xYkr1BQNOJQNOQWNOMWUFCwNP80/jT9NPw0+yI0+jTkFjTjFlA0+CJbNOYIFjT4JFs05QgWUDT3MgY09kIJkkklDEABoUg09VcBEDX0NPQiWzXzNPQkWzXyNPdXOAEXFEQ0+SJbNfE0+SRbNfA09yJbNe809yEHWzXuNPE08gk17SOvNPAWUDXsI6808hZQI68hBTTuCBZQo4gKazTso4gKZSOvNO0WUCqjiApaoogKVkmTIQgORCNbIQYINes08zTrD0Q08zTrCTXqNPA06wg16TTrNPEdNOmXNPIJNO8hBAs07godIQSXNeg06zTvHSEFlzXnJK806BZQNOcWJK9QNOc08R006Zc06A1NSTXmIls15TTmJFs15DTtNOQJNeM08DTzCDTqCTTlCTXiIjTyDiI06g4QRCOvNOMWUCOvNOIWUKOICb8jrzTxFlA07KOICbOnRDTzNP6ICYqxIrIBNPKyEiWyEDEAshQ0/7IRs7EisgE06rISJbIQMQCyFDT+shGzNPIWNOoWUDXhgAgAAAAAAADVpzThULA04TUHJwQxAFAkrzTzFlBQNOFQNOMWNOIWUFCwNP80/jT9NPw0+yI0+jTjFjTiFlA0+CJbNOQIFjT4JFs05QgWUDT3MgY09kIH60g09VcBEDX0NPQiWzXzNPQkWzXyNPdXOAEXFEQ0+SJbNfE0+SRbNfA09yJbNe809yEHWzXuNPA08gk17SOvNPEWUDXsI6808hZQI68hBTTuCBZQo4gIyjTso4gIxCOvNO0WUCqjiAi5oogItUmTIQgORCNbIQYINes08zTrD0Q08zTrCTXqNPE06wg16TTrNPAdNOmXNPIJNO8hBAs07godIQSXNeg06zTvHSEFlzXnJK806BZQNOcWJK9QNOc08B006Zc06A1NSTXmIls15TTmJFs15DTxNPMINOoJNOUJNeM07TTkCTXiIjTqDiI08g4QRCOvNOMWUCOvNOIWUKOICB407COvNPAWUKOICBKnRDTzNP+IB+mxIrIBNOqyEiWyEDEAshQ0/7IRs7EisgE08rISJbIQMQCyFDT+shGzNOoWNPIWUDXhgAgAAAAAAADNzjThULA04TUHJwQxAFA08xYkr1BQNOFQNOMWNOIWUFCwNP80/jT9NPw0+yI0+jTjFjTiFlA0+CJbNOUIFjT4JFs05AgWUDT3MgY09kIGSkkhBgxAAnFJIQkMQAD4SDT1VwEYNfQ09CJbNfM09FcIEDXyNPokWzXxNPkiWzXwNPkkWzXvNPM08B008Zc17jTzNO8dNPGXNe008iJbNO4ORDTyJFs07Q5ENPM0/IgHADT6Ils08wg17DTxNPMJNes08DTuCTXqNO807Qk16bEisgE07rISJbIQMQCyFDT/shGzsSKyATTtshIlshAxALIUNP6yEbM07hY07RZQNeiACAAAAAAAAMX2NOhQsDToNQeABBzUrl8xAFA08xZQNOhQNOoWNOkWUFA07BY06xZQULA0/zT+NP00/DT7IjTsFjTrFlA06hY06RZQNPg09zIGNPZCBURINPVXARg19DT0VwAQNfM09CEHWzXyNPdXOAEXFEQ08yJbNfA08yRbNe80+iRbSTXuIhJJNe1BACEjrzTwFlAjrzTvFlCjiAYxlogGLUmTIQgORCNbNfFCACI08DTuHTT5IluXNew07zTuHTT5JFuXSTXrNOxJNOsMTTXxNPI08Q5ENPA0/4gF0TTvNP6IBco07UEAISOvNPAWUCOvNO8WUKOIBdWWiAXRSZMhCA5EI1s17EIAIjTwNO4dNPkiW5c16zTvNO4dNPkkW5dJNeo060k06gxNNew08jTsDkQ08DT5IlsINes07zT5JFsINeo0+iJbNOwJNek07jTsCDXosSKyATTsshIlshAxALIUNPyyEbOACAAAAAAAAL4RNOwWULA07BY1B4AE3hsp9TEAUDTwFjTvFlBQNOwWUDTrFjTqFlBQNOkWNOgWUFCwNP80/jT9NPw0+yI06RY06BZQNOsWNOoWUDT4NPcyBjT2QgPSSDT1VwFZNfQ09FcgOTXzMQA091cYIBJENPMiWzXyNPMkWzXxNPMhB1s18DTyIQQMNPEhBAwQSTXvQQANNPA08TTyCBI17kIAAyI17jTwIQQMNe008CINNew07jTtEDTsEEQ09FcAIDXrNO9BAA008DTxNPIIEjXqQgADIjXqNOo07RA07BBENPNXOAEXNekyCmAyCngJNPYJNeg0+CJbNec0+CRbNeaxIrIBNOiyCCEGshA067IHs7EisgE057ISJbIQNOuyFDT/shGzsSKyATTmshIlshA067IUNP6yEbOACAAAAAAAALbINOcWNOYWUDToFlBQsDTnFjTmFlA06BZQNQeABFatdTw08hY08RZQNPAWUDTzVxggUDTpFlEHCFBQsDT/NP40/TT8NPs06TT6JFsiEhA0+SJbIhI0+SRbIhIQEDT6NPk0+zTzMgY06DT2CDToCUICeEghCTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDIRtbNf9JNQU1/oAEJTy31zT+ULCACAAAAAAAAOa2sCs1B7EisgEhCrIQNP+yIbOxIrIBIrISJbIQMgmyFTIKshQ0AyRbshGzsSKyASKyEiWyEDIJshUyCrIUNAMiW7IRs0IChSISRCENiALuIjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8kWzX+VxAgNf1XMAg1/IE4WzX7gASmZOJhNP8WUDT+FlA0/VA0/FA0+xZQsDT+NP8TRCEdIQUNRDT/NP4TRCENiAKRsSKyASKyEiWyEDIKshQ0/7IRsyENiAJ5sSKyASKyEiWyEDIKshQ0/rIRsyg0/xZQNfqABWFwcElENPsWUAM1+DIKeDX3MgpgNPcJFjX2sSKyASEMshA0+7IYgARJWgposhoxGBayGjT6sho0/hayGrMyCmA09wk09hcJFrcAPlcEAFA1+YAIAAAAAAAAq0U0+VCwNPlJNfgiWzX3NPhXCDlJNfYiWzX1NPYkWzX0NPYhB1s18zT1IQQMNPQhBAwQQQANNPM09DT1CBI18kIAAyI18jTyNPMhBAwQNPMiDRBEIjT3EkQhDYgBprEisgEhCrIQIR2yIiEMsiM0/LIlNP2yJoFgr7InMgOyKDIKsimztDw18YAIAAAAAAAAq1808RZQsDTxNfAiNe8iNe40/xY0/hZQJDTuCyRYFzXtNPA07RI070lNNe807iEGCEk17iEJDED/1zTvFEQ08DT/EzTwNP4TEEQhB6817jT/NP40+jTwNO4igBD//////////wAAAAAAAAAANO5JNPYyBjT3QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPlBADQ09BY09RZQNPZQNPcWUDT6UDT7UDT8UDT9UClLAVcAf2coSwFXfwtnSCEJNQEyBjUCQgBXNPQWNPUWUDT2UDT3FlA0+FA0+lA0+1A0/FA0/VA0/xZQKUsBVwB/ZyhLAVd/I2dIJTUBMgY1AkIAHTEZIRwSRLEisgEisgghBrIQMgmyCTIKsgezQgAFMRkiEkQrNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkhBggyBBJEMRYSRCEGQzEZIhJEQv/dIjE0EkQhCjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+sNABJSiEGCDUAOAcyChJEOBAhBhJEOAgSRIk0AElKSSEGCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiUkVgSBMCa9MUIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 162,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /home/user/prog/reach/duoswap-core/index.rsh:425:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v43817",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43818",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "v43819",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "v43820",
                "type": "bytes8"
              },
              {
                "internalType": "address payable",
                "name": "v43821",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v3",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v4",
        "type": "tuple"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "protoFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totFee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "protoAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "v0",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v3",
        "type": "tuple"
      }
    ],
    "name": "Swap",
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
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v3",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v4",
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
                "internalType": "address payable",
                "name": "v43817",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43818",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "v43819",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "v43820",
                "type": "bytes8"
              },
              {
                "internalType": "address payable",
                "name": "v43821",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v59059",
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
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "protoFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lpFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "totFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "protoAddr",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_35303",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_35303",
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
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Provider_withdraw0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_exactSwapAForB0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_exactSwapBForA0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_swapAForB0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_swapBForA0_35303",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v45927",
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
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "protoFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lpFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totFee",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "protoAddr",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              }
            ],
            "internalType": "struct T2",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v43845",
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
    "name": "_reach_oe_v43871",
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
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v46792",
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
    "name": "_reach_oe_v48657",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v50678",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v52686",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v54695",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v56689",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v58684",
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
    "name": "_reach_oe_v59062",
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
            "internalType": "address payable",
            "name": "liquidityToken",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "lptBals",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "poolBals",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "protoFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lpFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totFee",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "protoAddr",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              }
            ],
            "internalType": "struct T2",
            "name": "protoInfo",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "protoBals",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "tokB",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T3",
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
            "internalType": "struct T3",
            "name": "tokA",
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
    "name": "Protocol_delete",
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "protoFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totFee",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "protoAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "Protocol_harvest",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "A",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "B",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
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
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "_a0",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
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
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "Provider_withdraw",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
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
    "name": "Trader_exactSwapAForB",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
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
    "name": "Trader_exactSwapBForA",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
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
    "name": "Trader_swapAForB",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
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
            "name": "A",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "B",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v59059",
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
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "protoFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "lpFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "totFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "address payable",
                            "name": "protoAddr",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "locked",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_35303",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_35303",
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
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "A",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "B",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Provider_withdraw0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_exactSwapAForB0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_exactSwapBForA0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_swapAForB0_35303",
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
                    "internalType": "struct T9",
                    "name": "_Trader_swapBForA0_35303",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v45927",
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
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "v67581",
        "type": "uint256"
      }
    ],
    "name": "v_exactSwapAForB",
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
        "internalType": "uint256",
        "name": "v67584",
        "type": "uint256"
      }
    ],
    "name": "v_exactSwapBForA",
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
        "internalType": "uint256",
        "name": "v67587",
        "type": "uint256"
      }
    ],
    "name": "v_swapAForB",
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
        "internalType": "uint256",
        "name": "v67590",
        "type": "uint256"
      }
    ],
    "name": "v_swapBForA",
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
  Bytecode: `0x6080604052604051620088e0380380620088e0833981016040819052620000269162001084565b60008055436003556200003862000afe565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291810151821660608085019190915281850151608080860191909152908201516001600160c01b03191660a085015201511660c082015290517f0d243ac0db850a54a46bec2bda91db04d8ff2639d4fb2ba99cd26c58b2af1b399181900360e00190a16020808301518051910151620000f8916001600160a01b03918216911614620000ed576001620000f0565b60005b6018620007fb565b6200010660016019620007fb565b620001478260200151602001516001600160a01b03168360200151600001516001600160a01b0316146200013c5760016200013f565b60005b601a620007fb565b620001553415601b620007fb565b602081810180516001905290830180515191516001600160a01b03909216604090920191909152515162000192906200018f903062000826565b90565b6102008201526020808301510151620001b1906200018f903062000826565b610240820152476101e08201526020808201518382015190910151604051600092633b02a71760e01b92620001ed923092919060240162001178565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620002499190620011d0565b60006040518083038185875af1925050503d806000811462000288576040519150601f19603f3d011682016040523d82523d6000602084013e6200028d565b606091505b509092509050620002a18282601e62000900565b50602085015151620002c490620002b9903062000826565b610200860151900390565b6102208501819052620002da9015601c620007fb565b62000303620002f8866020015160200151306200082660201b60201c565b610240860151900390565b6102608501819052620003199015601d620007fb565b6200033047856101e00151620008fb60201b60201c565b60408501515280516200034d9082016020908101908301620011ee565b604080860180516020019290925290516060860181905290517f6320b31477030370d6855154fb23a294a517428ba3851c30bafd91b97fa161aa945062000398935090915062001276565b60405180910390a160608101516020015151606411620003ba576000620003cb565b606481606001516020015160200151105b1562000407576060810151602090810151908101519051620003ee919062000946565b606082015160200151604001511460808201526200040f565b600060808201525b6200045c81608001516200042557600062000436565b606482606001516020015160400151105b6200044357600062000454565b600082606001516020015160400151115b601f620007fb565b6060810151516200047090156020620007fb565b60a0810180516000199052516000602091820181905260c0830180518290528051830182905251604090810182905260e0840191909152838201518101518151928301520160408051601f1981840301815290829052602084810151606001516001600160c01b031916908301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151602084015291016040516020818303038152906040526000196012604051620005589062000c35565b6200056996959493929190620012fa565b604051809103906000f08015801562000586573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f1ffcc7a0bb3421b753e889efd5da2b60d6d94a8378ad6eb39772bb43872b87a89060200160405180910390a16020828101805151610140840180516001600160a01b039283169052915183015191519116910152600061018082018190525b6002811015620006925781610140015181600281106200062a576200062a62001365565b60200201516001600160a01b03166101a08301526101808201516200066e57816101a001516001600160a01b03168261012001516001600160a01b03161462000675565b8161018001515b151561018083015280620006898162001391565b91505062000606565b5061018081015115156101608201819052620006c090620006b5576001620006b8565b60005b6021620007fb565b6200072d8260200151600001516001600160a01b03168261012001516001600160a01b03161462000722578260200151602001516001600160a01b03168261012001516001600160a01b0316146200071a57600162000725565b600062000725565b60005b6022620007fb565b6101c0810180516000908190529051602001526200074a62000c43565b602080840180515183516001600160a01b0391821690529051820151835190821690830152838201518351604090810191909152610120850151845192166060928301526101c085018051855160809081019190915285850180516000905260a0808901518251880152835182519095019490945291518251850152928601805190940151815190930192909252815143910152905151905160c00152620007f2816200099d565b5050506200171c565b81620008225760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b1790529151600092839283929187169183916200088391620011d0565b60006040518083038185875af1925050503d8060008114620008c2576040519150601f19603f3d011682016040523d82523d6000602084013e620008c7565b606091505b509092509050620008db8282600662000900565b5080806020019051810190620008f29190620013ad565b95945050505050565b900390565b60608315620009115750816200093f565b825115620009225782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000819565b9392505050565b600082620009558382620013c7565b9150811015620009975760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000819565b92915050565b6020810151511562000a5957620009b362000c6c565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528185018051830151608080870191909152815183015160a087015281519094015160c0860152519092015160e0840152600260005543600155905162000a3591839101620013dd565b6040516020818303038152906040526002908162000a54919062001540565b505050565b62000a6362000d54565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e08701528051909101516101008601525190920151610120840152600460005543600155905162000a35918391016200160c565b60405180610280016040528060001515815260200162000b396040805160608101909152806000815260006020820181905260409091015290565b815260200162000b4862000e69565b815260200162000b5762000e69565b815260200160001515815260200162000b83604051806040016040528060008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260006020820181905260408201819052606082015260800162000bc762000eb9565b815260200160001515815260200160001515815260200160006001600160a01b0316815260200162000c0c604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6110cf806200781183390190565b604051806040016040528062000c5862000ed7565b815260200162000c6762000f47565b905290565b60408051610100810182526000808252602082015290810162000caa6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200162000cdd604051806040016040528060008152602001600081525090565b815260200162000d00604051806040016040528060008152602001600081525090565b815260200162000d23604051806040016040528060008152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b60408051610140810182526000808252602082015290810162000d926040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200162000dc5604051806040016040528060008152602001600081525090565b815260200162000de8604051806040016040528060008152602001600081525090565b815260200162000e0b604051806040016040528060008152602001600081525090565b815260200162000e2e604051806040016040528060008152602001600081525090565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001600081525090565b60405180604001604052806000815260200162000c676040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b60405180604001604052806002906020820280368337509192915050565b6040805160a0810182526000808252602082015290810162000f146040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200162000c67604051806040016040528060008152602001600081525090565b6040518060e0016040528060001515815260200162000f79604051806040016040528060008152602001600081525090565b815260200162000f9c604051806040016040528060008152602001600081525090565b815260200162000fbf604051806040016040528060008152602001600081525090565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260200160008152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200103c576200103c62001001565b60405290565b60405160a081016001600160401b03811182821017156200103c576200103c62001001565b80516001600160a01b03811681146200107f57600080fd5b919050565b600081830360c08112156200109857600080fd5b620010a262001017565b8351815260a0601f1983011215620010b957600080fd5b620010c362001042565b9150620010d36020850162001067565b8252620010e36040850162001067565b60208301526060840151604083015260808401516001600160c01b0319811681146200110e57600080fd5b60608301526200112160a0850162001067565b608083015260208101919091529392505050565b8051600281106200115657634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062001199602084018662001135565b808416608084015250949350505050565b60005b83811015620011c7578181015183820152602001620011ad565b50506000910152565b60008251620011e4818460208701620011aa565b9190910192915050565b600060a082840312156200120157600080fd5b60405160a081016001600160401b038111828210171562001226576200122662001001565b8060405250825181526020830151602082015260408301516040820152620012516060840162001067565b6060820152608083015180151581146200126a57600080fd5b60808201529392505050565b8151815260208083015160c0830191620012c5908401828051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b5092915050565b60008151808452620012e6816020860160208601620011aa565b601f01601f19169290920160200192915050565b60c0815260006200130f60c0830189620012cc565b8281036020840152620013238189620012cc565b90508281036040840152620013398188620012cc565b905082810360608401526200134f8187620012cc565b6080840195909552505060a00152949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201620013a657620013a66200137b565b5060010190565b600060208284031215620013c057600080fd5b5051919050565b808201808211156200099757620009976200137b565b81516001600160a01b03908116825260208084015182169083015260408084015161022084019291620014139085018262001135565b5060608401511660a08301526080830151805160c0840152602081015160e08401525060a0830151805161010084015260208101516101208401525060c0830151805161014084015260208101516101608401525060e0830151805161018084015260208101516101a084015260408101516101c084015260608101516001600160a01b03166101e084015260808101511515610200840152620012c5565b600181811c90821680620014c757607f821691505b602082108103620014e857634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000a5457600081815260208120601f850160051c81016020861015620015175750805b601f850160051c820191505b81811015620015385782815560010162001523565b505050505050565b81516001600160401b038111156200155c576200155c62001001565b62001574816200156d8454620014b2565b84620014ee565b602080601f831160018114620015ac5760008415620015935750858301515b600019600386901b1c1916600185901b17855562001538565b600085815260208120601f198616915b82811015620015dd57888601518255948401946001909101908401620015bc565b5085821015620015fc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81516001600160a01b03168152610280810160208301516200163960208401826001600160a01b03169052565b5060408301516200164e604084018262001135565b5060608301516001600160a01b03811660a0840152506080830151805160c0840152602081015160e08401525060a08301516101006200169a8185018380518252602090810151910152565b60c0850151805161014086015260209081015161016086015260e086015180516101808701528101516101a08601529085015180516101c0860152908101516101e0850152604081015161020085015260608101516001600160a01b031661022085015260800151151561024084015250610120909201516102609091015290565b6160e5806200172c6000396000f3fe6080604052600436106101015760003560e01c8063832307571161008f578063b8aaa65411610061578063b8aaa6541461027d578063be20a4741461029d578063c8867ae9146102b0578063dc8d714f146102c3578063f8a55fb0146102d657005b8063832307571461020d578063842463da1461022257806388f8ea631461023a578063ab53f2c61461025a57005b80634012e02e116100d35780634012e02e146101785780635e75b0211461019a5780636167d492146101ba5780637731406e146101da578063800a119b146101fa57005b80630e36a72c1461010a5780631e93b0f1146101335780633402da13146101525780633e59bac41461016557005b3661010857005b005b61011d6101183660046153be565b6102e9565b60405161012a9190615416565b60405180910390f35b34801561013f57600080fd5b506003545b60405190815260200161012a565b610144610160366004615454565b610304565b61010861017336600461547f565b610310565b34801561018457600080fd5b5061018d610334565b60405161012a9190615513565b6101ad6101a83660046155a6565b61034d565b60405161012a91906155c8565b3480156101c657600080fd5b506101446101d53660046155df565b61036b565b3480156101e657600080fd5b506101446101f53660046155df565b610396565b6101ad6102083660046155a6565b6103ba565b34801561021957600080fd5b50600154610144565b61022a6103d8565b604051901515815260200161012a565b34801561024657600080fd5b506101446102553660046155df565b6103e7565b34801561026657600080fd5b5061026f61040b565b60405161012a92919061561c565b34801561028957600080fd5b506101446102983660046155df565b6104a8565b6101ad6102ab366004615656565b6104cc565b6101ad6102be3660046155a6565b6104ea565b6101ad6102d13660046155a6565b610508565b6101086102e436600461567a565b610526565b6102f161440b565b6102fb8383610546565b90505b92915050565b60006102fb838361059b565b610318614436565b61033061032a3684900384018461568d565b826105e4565b5050565b61033c614509565b60006103478161077b565b91505090565b60408051808201909152600080825260208201526102fb8383610ad7565b60006103836040518060200160405280600081525090565b82815261038f81610b32565b9392505050565b60006103ae6040518060200160405280600081525090565b82815261038f81610d44565b60408051808201909152600080825260208201526102fb83836112aa565b60006103e2611305565b905090565b60006103ff6040518060200160405280600081525090565b82815261038f81611331565b60006060600054600280805461042090615705565b80601f016020809104026020016040519081016040528092919081815260200182805461044c90615705565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b50505050509050915091509091565b60006104c06040518060200160405280600081525090565b82815261038f81611528565b60408051808201909152600080825260208201526102fb83836119e7565b60408051808201909152600080825260208201526102fb8383611a42565b60408051808201909152600080825260208201526102fb8383611a9d565b61052e614436565b610330610540368490038401846157ee565b82611af8565b61054e61440b565b6105566145c3565b6020818101805151600090528051518201516001600160a01b0387169052515181015101839052610585614436565b61058f8282611af8565b60200151949350505050565b60006105a56145c3565b6020818101805151600190528051516040908101518790529051510151018390526105ce614436565b6105d88282611af8565b60400151949350505050565b6105f46002600054146024613d28565b815161060f90158061060857508251600154145b6025613d28565b60008080556002805461062190615705565b80601f016020809104026020016040519081016040528092919081815260200182805461064d90615705565b801561069a5780601f1061066f5761010080835404028352916020019161069a565b820191906000526020600020905b81548152906001019060200180831161067d57829003601f168201915b50505050508060200190518101906106b291906159e2565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a161070a34156023613d28565b604051600081527f188bfdb3d35f141ddbb876ca82a9f04da61a0e29ceb8c76d3b7e67a5f49811b29060200160405180910390a160008252606081015161075390600019613d4e565b6107608160600151613d61565b60008080556001819055610776906002906145dd565b505050565b610783614509565b6002600054036109255760006002805461079c90615705565b80601f01602080910402602001604051908101604052809291908181526020018280546107c890615705565b80156108155780601f106107ea57610100808354040283529160200191610815565b820191906000526020600020905b8154815290600101906020018083116107f857829003601f168201915b505050505080602001905181019061082d91906159e2565b9050610837614617565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152828c01518b8b0180519188169091529a518b518a015295518a518401529251895190910152925187519096019590955292860151855193169290910191909152909201518151909201919091525192915050565b600460005403610ac65760006002805461093e90615705565b80601f016020809104026020016040519081016040528092919081815260200182805461096a90615705565b80156109b75780601f1061098c576101008083540402835291602001916109b7565b820191906000526020600020905b81548152906001019060200180831161099a57829003601f168201915b50505050508060200190518101906109cf9190615a8e565b90506109d9614617565b60a080830180515183515251602090810151835182015260c080850180515183860180519190915290518301518151840152610100860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935160809081015184519015159082015260e08b01805151838c01805191909152905189015181518a0152828c0151828c0180519188169091529a518b518a015295518a5184015292518951909101529251875190910152928601518551931692909301919091529201518151909201919091525192915050565b610ad260006007613d28565b919050565b6040805180820190915260008082526020820152610af36145c3565b602081810180515160039052805151608090810151879052905151015101839052610b1c614436565b610b268282611af8565b60800151949350505050565b6000600260005403610c4257600060028054610b4d90615705565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7990615705565b8015610bc65780601f10610b9b57610100808354040283529160200191610bc6565b820191906000526020600020905b815481529060010190602001808311610ba957829003601f168201915b5050505050806020019051810190610bde91906159e2565b905061038f610c3b610c15610c0a8660000151610c056127108760e0015160400151613d76565b613dc3565b60a085015151613dc3565b610c36610c2e8560a00151602001518860000151613e22565b612710613dc3565b613e71565b6001613d76565b600460005403610d3857600060028054610c5b90615705565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8790615705565b8015610cd45780601f10610ca957610100808354040283529160200191610cd4565b820191906000526020600020905b815481529060010190602001808311610cb757829003601f168201915b5050505050806020019051810190610cec9190615a8e565b905061038f610c3b610d1f610d148660000151610c0561271087610100015160400151613d76565b60c085015151613dc3565b610c36610c2e8560c00151602001518860000151613e22565b610ad260006008613d28565b600060026000540361101657600060028054610d5f90615705565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8b90615705565b8015610dd85780601f10610dad57610100808354040283529160200191610dd8565b820191906000526020600020905b815481529060010190602001808311610dbb57829003601f168201915b5050505050806020019051810190610df091906159e2565b9050610dfa614693565b610e1b8260e0015160800151610e11576001610e14565b60005b600b613d28565b60a082018051602090810151835290515190820152835160e083015160400151610e4d9190610c059061271090613e22565b604082018190528151610e8091610e6391613dc3565b610c36610e768460200151612710613dc3565b8460400151613d76565b606082015260a0820151518451610e979190613d76565b60808201819052845160a084015160200151606492610ef692610ed292610ebe9190613dc3565b610ec89190615b70565b8460600151613e22565b610c05610ee88660e00151600001516064613dc3565b8660e0015160400151613e71565b610f009190615b70565b60a0820152835160e08301515161271091610f1a91613dc3565b610f249190615b70565b60c0820181815260e08301805192909252905160006020918201819052610100840180519190915260a0808501805192518401929092529051608085015193519186015190920151919291610f799190613dc3565b610f839190615b70565b11610f9357806101000151610f99565b8060e001515b610120820152610fab6001600c613d28565b61100b610fc082602001518360000151613dc3565b611002610fda846080015185610120015160000151613e22565b610c05610ff38760a00151602001518760600151613e22565b86610120015160200151613e22565b1015600d613d28565b606001519392505050565b60046000540361129e5760006002805461102f90615705565b80601f016020809104026020016040519081016040528092919081815260200182805461105b90615705565b80156110a85780601f1061107d576101008083540402835291602001916110a8565b820191906000526020600020905b81548152906001019060200180831161108b57829003601f168201915b50505050508060200190518101906110c09190615a8e565b90506110ca614693565b6110ec826101000151608001516110e25760016110e5565b60005b600e613d28565b60c08201805160209081015183529051519082015283516101008301516040015161111f9190610c059061271090613e22565b60408201819052815161113591610e6391613dc3565b606082015260c082015151845161114c9190613d76565b60808201819052845160c0840151602001516064926111999261117392610ebe9190613dc3565b610c0561118a866101000151600001516064613dc3565b86610100015160400151613e71565b6111a39190615b70565b60a0820152835161010083015151612710916111be91613dc3565b6111c89190615b70565b60c080830182815260e08401805193909352915160006020918201819052610100850180519190915260a08501805191518301919091525160808501519351928601519091015190929161121b91613dc3565b6112259190615b70565b116112355780610100015161123b565b8060e001515b61012082015261124d6001600f613d28565b61100b61126282602001518360000151613dc3565b61129561127c846080015185610120015160000151613e22565b610c05610ff38760c00151602001518760600151613e22565b10156010613d28565b610ad26000600a613d28565b60408051808201909152600080825260208201526112c66145c3565b60208181018051516004905280515160a0908101518790529051510151018390526112ef614436565b6112f98282611af8565b60a00151949350505050565b600061130f6146ed565b602081015160009052611320614436565b61132a82826105e4565b5192915050565b60006002600054036114275760006002805461134c90615705565b80601f016020809104026020016040519081016040528092919081815260200182805461137890615705565b80156113c55780601f1061139a576101008083540402835291602001916113c5565b820191906000526020600020905b8154815290600101906020018083116113a857829003601f168201915b50505050508060200190518101906113dd91906159e2565b905061038f610c3b6114126114048660000151610c056127108760e0015160400151613d76565b8460a0015160200151613dc3565b60a0840151518651610c3691610c2e91613e22565b60046000540361151c5760006002805461144090615705565b80601f016020809104026020016040519081016040528092919081815260200182805461146c90615705565b80156114b95780601f1061148e576101008083540402835291602001916114b9565b820191906000526020600020905b81548152906001019060200180831161149c57829003601f168201915b50505050508060200190518101906114d19190615a8e565b905061038f610c3b6115076114f98660000151610c0561271087610100015160400151613d76565b8460c0015160200151613dc3565b60c0840151518651610c3691610c2e91613e22565b610ad260006009613d28565b60006002600054036117965760006002805461154390615705565b80601f016020809104026020016040519081016040528092919081815260200182805461156f90615705565b80156115bc5780601f10611591576101008083540402835291602001916115bc565b820191906000526020600020905b81548152906001019060200180831161159f57829003601f168201915b50505050508060200190518101906115d491906159e2565b90506115de614693565b6115ff8260e00151608001516115f55760016115f8565b60005b6012613d28565b60a0820180515182525160209081015190820152835160e0830151604001516116309190610c059061271090613e22565b60408201819052815161164691610e6391613dc3565b606082015260a08201516020015184516116609190613d76565b60808201819052845160a08401515160649261168492610ed292610ebe9190613dc3565b61168e9190615b70565b60a0820152835160e083015151612710916116a891613dc3565b6116b29190615b70565b60c0820181815260e08301805192909252905160006020918201819052610100840180519190915260a08085018051925190930191909152905160808401519251918501515190929161170491613dc3565b61170e9190615b70565b1161171e57806101000151611724565b8060e001515b61012082015261173660016013613d28565b61100b61174b82600001518360200151613dc3565b61178d6117766117678660a00151600001518660600151613e22565b85610120015160200151613e22565b610c05856080015186610120015160000151613e22565b10156014613d28565b6004600054036119db576000600280546117af90615705565b80601f01602080910402602001604051908101604052809291908181526020018280546117db90615705565b80156118285780601f106117fd57610100808354040283529160200191611828565b820191906000526020600020905b81548152906001019060200180831161180b57829003601f168201915b50505050508060200190518101906118409190615a8e565b905061184a614693565b61186c82610100015160800151611862576001611865565b60005b6015613d28565b60c082018051518252516020908101519082015283516101008301516040015161189e9190610c059061271090613e22565b6040820181905281516118b491610e6391613dc3565b606082015260c08201516020015184516118ce9190613d76565b60808201819052845160c0840151516064926118f29261117392610ebe9190613dc3565b6118fc9190615b70565b60a08201528351610100830151516127109161191791613dc3565b6119219190615b70565b60c080830182815260e08401805193909352915160006020918201819052610100850180519190915260a0850180519151909201525160808401519251918501515190929161196f91613dc3565b6119799190615b70565b116119895780610100015161198f565b8060e001515b6101208201526119a160016016613d28565b61100b6119b682600001518360200151613dc3565b6119d26117766117678660c00151600001518660600151613e22565b10156017613d28565b610ad260006011613d28565b6040805180820190915260008082526020820152611a036145c3565b602081810180515160029052805151606090810151879052905151015101839052611a2c614436565b611a368282611af8565b60600151949350505050565b6040805180820190915260008082526020820152611a5e6145c3565b60208181018051516005905280515160c090810151879052905151015101839052611a87614436565b611a918282611af8565b60c00151949350505050565b6040805180820190915260008082526020820152611ab96145c3565b60208181018051516006905280515160e090810151879052905151015101839052611ae2614436565b611aec8282611af8565b60e00151949350505050565b611b086004600054146058613d28565b8151611b23901580611b1c57508251600154145b6059613d28565b600080805560028054611b3590615705565b80601f0160208091040260200160405190810160405280929190818152602001828054611b6190615705565b8015611bae5780601f10611b8357610100808354040283529160200191611bae565b820191906000526020600020905b815481529060010190602001808311611b9157829003601f168201915b5050505050806020019051810190611bc69190615a8e565b9050611bd0614717565b7f8969861f3d75998d3c583658a762c8ed027f09eb1f13c5abf3443a0e07182f613385604051611c01929190615bb2565b60405180910390a16000602085015151516006811115611c2357611c236154c9565b0361209457602084810151510151815261010082015160600151611c53906001600160a01b031633146026613d28565b80516020015151606411611c68576000611c79565b606481600001516020015160200151105b1580156020830152611cb6578051602090810151908101519051611c9d9190613d76565b8151602001516040908101519190911490820152611cbe565b600060408201525b805160200180516040908101516064116060840152905181015115156080830152810151611d0f90611cf1576000611cf7565b81606001515b611d02576000611d08565b81608001515b6027613d28565b611d1b34156028613d28565b611d35611d2e3384606001516000613ebb565b6029613d28565b611d4f611d483384600001516000613ebb565b602a613d28565b611d69611d623384602001516000613ebb565b602b613d28565b806020015115611da0578051602090810151908101519051611d8b9190613d76565b815160200151604001511460a0820152611da8565b600060a08201525b611dd98160a00151611dbb576000611dc1565b81606001515b611dcc576000611dd2565b81608001515b602c613d28565b61012082015147908110611df4576101208301518103611df7565b60005b60c083018190528251516040516001600160a01b03909116925081156108fc0291906000818181858888f19350505050158015611e38573d6000803e3d6000fd5b50815181515160e084015151611e4f929190613ed1565b611e6e82602001518260000151600001518460e0015160200151613ed1565b60e08083018051519183018051929092525160209081015182518201529051610100830180519190915260c0830151815190920191909152516040517f01442a0ee7c35d129939a41961619067c3adf3b9a70fa587d5eef191d8e2400e91611ed591615416565b60405180910390a161010081015160208085019190915281518101515161012083018051919091528251820151820151815183015282518201516040908101518251820152835183015160609081015183516001600160a01b0390911691015283519092015160809081015182519015159101525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91611f7791615c98565b60405180910390a1611f87614ebe565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451931692019190915260808085015183518201528351909101510151611fe1576000611fec565b60a083015160200151155b611ff7576000612014565b60c08301515115612009576000612014565b60c083015160200151155b6020808301805192151590925260a080860151835183015260c08087015184516040015260808088015185516060015286519093015184519093019290925291514392019190915282015161012084015161207c9161207291613d76565b8360c00151900390565b602082015160c0015261208e81613ee5565b50613d22565b60016020850151515160068111156120ae576120ae6154c9565b036125925760208401515160400151610140820152610100820151608001516120e6906120dc5760016120df565b60005b602d613d28565b60a082015160200151156101808201819052156121295761014081015151805160209091015161211e9161211991613dc3565b614036565b6101608201526121bc565b60c082015151610140820151515160a08401516020015161214a9190613dc3565b6121549190615b70565b816101a00181815250508160c001516020015161218682610140015160000151602001518460a0015160200151613dc3565b6121909190615b70565b6101c082018190526101a0820151106121ae57806101c001516121b5565b806101a001515b6101608201525b6121d8816101600151826101400151602001511115602e613d28565b6121e43415602f613d28565b6121fe6121f73384606001516000613ebb565b6030613d28565b8151610140820151515161221f9161221891339190613ebb565b6031613d28565b61224561223e3384602001518461014001516000015160200151613ebb565b6032613d28565b806101800151156122775761014081015151805160209091015161226c9161211991613dc3565b6101e082015261230a565b60c082015151610140820151515160a0840151602001516122989190613dc3565b6122a29190615b70565b816102000181815250508160c00151602001516122d482610140015160000151602001518460a0015160200151613dc3565b6122de9190615b70565b6102208201819052610200820151106122fc57806102200151612303565b8061020001515b6101e08201525b612326816101e001518261014001516020015111156033613d28565b610140810151515160c08301515161233e9190613d76565b6102408201526101408101515160209081015160c0840151909101516123649190613d76565b61026082019081526102408201516102808301805191909152905190516020015260a0820151516101e082015161239b9190613e22565b6102a082015260a0820151602001516101e08201516123ba9190613d76565b6102c082019081526102a08201516102e08301805191909152905190516020015260608201516101e08201516123f291903390613ed1565b7fb4adb1e2c3b595e1f0b54ef17c0af7e9f5510d4eec45e753c4d8938bf03b2698816101e0015160405161242891815260200190565b60405180910390a16101e08101805160408086019190915261014083018051515161030085018051919091529051516020908101518251820152610240850151610320860180519190915261026086015181518301526102a086015161034087018051919091526102c0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb946124d994339491939192615ca6565b60405180910390a16124e9614ebe565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260808087015185518201528285018051600090526102e087015181519094019390935261028086015183519092019190915260e086015182519093019290925261010085015181519092019190915280514360a090910152610120840151905160c0015261208e81613ee5565b60026020850151515160068111156125ac576125ac6154c9565b03612939576020808501515160600151610360830181905260a084015190910151905160c0840151516125df9190613dc3565b6125e99190615b70565b816103800181815250508160a0015160200151612617826103600151600001518460c0015160200151613dc3565b6126219190615b70565b6103a082015261038081015161036082015160200151516126459110156034613d28565b612665816103a00151826103600151602001516020015111156035613d28565b61267134156036613d28565b61269361268c33846060015184610360015160000151613ebb565b6037613d28565b6126ad6126a63384600001516000613ebb565b6038613d28565b6126c76126c03384602001516000613ebb565b6039613d28565b60a082015151610360820151516126de9190613d76565b6103c082015260a082015160200151610360820151516126fe9190613e22565b6103e082019081526103c08201516104008301805191909152905190516020015260c0820151516103808201516127359190613e22565b61042082015260c0820151602001516103a08201516127549190613e22565b610440820190815261042082015161046083018051919091529051905160200152815161038082015161278991903390613ed1565b61279d826020015133836103a00151613ed1565b61038081015161048082018051919091526103a0820151815160200152516040517f4f536b2151d3f580a63d45e0ea9176404c3890991b7578743135b877662c99ad916127e9916155c8565b60405180910390a16104808101805160608501526104208201516104a0830180519190915261044083015181516020908101919091526103c08401516104c085018051919091526103e0850151815190920191909152610360840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef8559461288094339491939092615cfd565b60405180910390a1612890614ebe565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905261040087015181519094019390935261046086015183519092019190915260e086015182519093019290925261010085015181519092019190915280514360a090910152610120840151905160c0015261208e81613ee5565b6003602085015151516006811115612953576129536154c9565b03612e5f576020840151516080908101516104e0830152610100830151015161298b90612981576001612984565b60005b603a613d28565b6129a68260c0015160200151826104e0015160200151613e22565b61050082015260c0820151516105208201526104e08101516020015161010083015160400151612a0591610c3b916129f4916129e991610c059061271090613d76565b846105200151613dc3565b610c36846105000151612710613dc3565b61054082018190526104e082015151612a21911115603b613d28565b612a39816104e0015160000151826105400151613e22565b61056082015260c082015151610540820151612a559190613d76565b610580820181905261054082015160c084015160200151606492612a9a9261117392612a819190613dc3565b612a8b9190615b70565b846104e0015160200151613e22565b612aa49190615b70565b6105a08201526105408101516101008301515161271091612ac491613dc3565b612ace9190615b70565b6105c082018181526105e0830180519290925290516000602091820181905261060084018051919091526105a084018051915183019190915251610580840151925160c086015190920151909291612b2591613dc3565b612b2f9190615b70565b11612b3f57806106000151612b46565b806105e001515b61062082015260c0820151516104e082015151612b8291612b7691612b6b9190613d76565b836105600151613e22565b61062083015151613e22565b61064082015261050081015161062082015160200151612ba29190613e22565b610660820152612bb46001603c613d28565b612beb612bce8261052001518460c0015160200151613dc3565b612be2836106400151846106600151613dc3565b1015603d613d28565b612bf73415603e613d28565b612c11612c0a3384606001516000613ebb565b603f613d28565b612c33612c2c338460000151846104e0015160000151613ebb565b6040613d28565b612c4d612c463384602001516000613ebb565b6041613d28565b610640810151610680820180519190915261066082015190516020015260e08201515161062082015151612c819190613d76565b6106a08201515260e082015160209081015161062083015190910151612ca79190613d76565b6106a0820151602001528151610560820151612cc591903390613ed1565b612cdd826020015133836104e0015160200151613ed1565b6105608101516106c082018051919091526104e0820151602090810151825190910152516040517f8574135cf83f268256a8b374d21df0425654e2586c816994154e89dfc826c76d91612d2f916155c8565b60405180910390a16106c08101805160808501526104e0820151516106e0830180519190915280516000602091820152610640840151610700850180519190915261066085015181519092019190915290519151905160405160008051602061609083398151915293612da89333939192909190615d3b565b60405180910390a1612db8614ebe565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526106808701518151909301929092526106a0860151825190940193909352610100860151815190930192909252815143910152610120840151905160c0015261208e81613ee5565b6004602085015151516006811115612e7957612e796154c9565b036133905760208401515160a0015161072082015261010082015160800151612eb190612ea7576001612eaa565b60005b6042613d28565b612ecc8260c001516000015182610720015160200151613e22565b61074082015260c0820151602090810151610760830152610720820151015161010083015160400151612f2e91610c3b91612f1d91612f1291610c059061271090613d76565b846107600151613dc3565b610c36846107400151612710613dc3565b610780820181905261072082015151612f4a9111156043613d28565b612f6281610720015160000151826107800151613e22565b6107a082015260c082015160200151610780820151612f819190613d76565b6107c0820181905261078082015160c084015151606492612fc39261117392612faa9190613dc3565b612fb49190615b70565b84610720015160200151613e22565b612fcd9190615b70565b6107e08201526107808101516101008301515161271091612fed91613dc3565b612ff79190615b70565b6108008201818152610820830180519290925290516000602091820181905261084084018051919091526107e084018051915190920152516107c0830151915160c08501515191929161304a9190613dc3565b6130549190615b70565b116130645780610840015161306b565b8061082001515b61086082018190526107408201516020909101516130899190613e22565b61088082015260c082015160200151610720820151516130c8916130bc916130b19190613d76565b836107a00151613e22565b61086083015151613e22565b6108a08201526130da60016044613d28565b6131116130f48360c0015160000151836107600151613dc3565b613108836108800151846108a00151613dc3565b10156045613d28565b61311d34156046613d28565b6131376131303384606001516000613ebb565b6047613d28565b61315161314a3384600001516000613ebb565b6048613d28565b61317361316c33846020015184610720015160000151613ebb565b6049613d28565b6108808101516108c082018051919091526108a0820151905160209081019190915260e083015151610860830151909101516131af9190613d76565b6108e08201515260e082015160200151610860820151516131d09190613d76565b816108e0015160200181815250506131f682600001513383610720015160200151613ed1565b61320a826020015133836107a00151613ed1565b61072081015160209081015161090083018051919091526107a0830151815190920191909152516040517f557edad7d1c65fddd3b40f339b0723255d0d3898b2e3c87a62b2fa26bfd568299161325f916155c8565b60405180910390a16109008101805160a0850152610920820180516000905261072083015151815160209081019190915261088084015161094085018051919091526108a0850151815190920191909152905191519051604051600080516020616090833981519152936132d99333939192909190615d3b565b60405180910390a16132e9614ebe565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526108c08701518151909301929092526108e0860151825190940193909352610100860151815190930192909252815143910152610120840151905160c0015261208e81613ee5565b60056020850151515160068111156133aa576133aa6154c9565b036138595760208401515160c00151610960820152610100820151608001516133e2906133d85760016133db565b60005b604a613d28565b60c0820180516020015161098083015251516109a0820152610960810151516101008301516040015161341d9190610c059061271090613e22565b6109c082018190526109808201516134579161343891613dc3565b610c3661344c846109a00151612710613dc3565b846109c00151613d76565b6109e082015260c082015151610960820151516134749190613d76565b610a0082018190526109608201515160c0840151602001516064926134b692611173926134a19190613dc3565b6134ab9190615b70565b846109e00151613e22565b6134c09190615b70565b610a208201526109608101515161010083015151612710916134e191613dc3565b6134eb9190615b70565b610a408201818152610a608301805192909252905160006020918201819052610a808401805191909152610a2084018051915183019190915251610a00840151925160c08601519092015190929161354291613dc3565b61354c9190615b70565b1161355c5780610a800151613563565b80610a6001515b610aa08201819052610a00820151905161357d9190613e22565b610ac082015260c0820151602001516109e08201516135ae9161359f91613e22565b82610aa0015160200151613e22565b610ae08201526109e0810151610960820151602001516135d1911015604b613d28565b6136056135e8826109a00151836109800151613dc3565b6135fc83610ac0015184610ae00151613dc3565b1015604c613d28565b6136113415604d613d28565b61362b6136243384606001516000613ebb565b604e613d28565b61364d61364633846000015184610960015160000151613ebb565b604f613d28565b6136676136603384602001516000613ebb565b6050613d28565b610ac0810151610b008201805191909152610ae082015190516020015260e082015151610aa08201515161369b9190613d76565b610b208201515260e0820151602090810151610aa0830151909101516136c19190613d76565b81610b20015160200181815250506136e3826020015133836109e00151613ed1565b610b4081018051600090526109e0820151815160200152516040517f58a1a71699a2a9306307978bfdfcdea6ad8e37008589329b3e8f72ed16330c6091613729916155c8565b60405180910390a1610b408101805160c085015261096082015151610b60830180519190915280516000602091820152610ac0840151610b808501805191909152610ae0850151815190920191909152905191519051604051600080516020616090833981519152936137a29333939192909190615d3b565b60405180910390a16137b2614ebe565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a080890151825190950194909452610b00870151815190930192909252610b20860151825190940193909352610100860151815190930192909252815143910152610120840151905160c0015261208e81613ee5565b6006602085015151516006811115613873576138736154c9565b03613d225760208401515160e00151610ba0820152610100820151608001516138ab906138a15760016138a4565b60005b6051613d28565b60c08201805151610bc08301525160200151610be0820152610ba081015151610100830151604001516138e69190610c059061271090613e22565b610c008201819052610bc08201516139209161390191613dc3565b610c3661391584610be00151612710613dc3565b84610c000151613d76565b610c2082015260c082015160200151610ba0820151516139409190613d76565b610c408201819052610ba08201515160c08401515160649261397f926111739261396a9190613dc3565b6139749190615b70565b84610c200151613e22565b6139899190615b70565b610c60820152610ba08101515161010083015151612710916139aa91613dc3565b6139b49190615b70565b610c808201818152610ca08301805192909252905160006020918201819052610cc08401805191909152610c608401805191519092015251610c40830151915160c085015151919291613a079190613dc3565b613a119190615b70565b11613a215780610cc00151613a28565b80610ca001515b610ce082015260c082015151610c20820151613a5691613a4791613e22565b82610ce0015160200151613e22565b610d00820152610c40810151610ce082015151613a739190613e22565b610d20820152610c20810151610ba082015160200151613a969110156052613d28565b613aca613aad82610bc0015183610be00151613dc3565b613ac183610d00015184610d200151613dc3565b10156053613d28565b613ad634156054613d28565b613af0613ae93384606001516000613ebb565b6055613d28565b613b0a613b033384600001516000613ebb565b6056613d28565b613b2c613b2533846020015184610ba0015160000151613ebb565b6057613d28565b610d00810151610d408201805191909152610d20820151905160209081019190915260e083015151610ce083015190910151613b689190613d76565b610d608201515260e082015160200151610ce082015151613b899190613d76565b610d60820151602001528151610c20820151613ba791903390613ed1565b610c20810151610d80820180519190915280516000602090910152516040517fdde72505ad982e7362d6e95182d942386763c2dc6fbba3feae073b7745b02d7791613bf1916155c8565b60405180910390a1610d808101805160e0850152610da08201805160009052610ba0830151518151602090810191909152610d00840151610dc08501805191909152610d2085015181519092019190915290519151905160405160008051602061609083398151915293613c6b9333939192909190615d3b565b60405180910390a1613c7b614ebe565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a080890151825190950194909452610d40870151815190930192909252610d60860151825190940193909352610100860151815190930192909252815143910152610120840151905160c0015261208e81613ee5565b50505050565b816103305760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613d5882826140a5565b61033057600080fd5b613d6a81614180565b613d7357600080fd5b50565b600082613d838382615d89565b91508110156102fe5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401613d45565b6000811580613de757508282613dd98183615d9c565b9250613de59083615b70565b145b6102fe5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401613d45565b600082613e2f8382615dbb565b91508111156102fe5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401613d45565b600081600003613eb15760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401613d45565b6102fb8284615b70565b6000613ec983853085614225565b949350505050565b613edc8383836142ff565b61077657600080fd5b60208101515115613f9557613ef8614ede565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528185018051830151608080870191909152815183015160a087015281519094015160c0860152519092015160e08401526002600055436001559051613f7891839101615dce565b604051602081830303815290604052600290816107769190615eb8565b613f9d614f9e565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e087015280519091015161010086015251909201516101208401526004600055436001559051613f7891839101615f78565b600060038211156140975750806000614050600283615b70565b61405b906001615d89565b90505b81811015614091579050806002816140768186615b70565b6140809190615d89565b61408a9190615b70565b905061405e565b50919050565b8115610ad257506001919050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016140d191815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161410f9190616056565b60006040518083038185875af1925050503d806000811461414c576040519150601f19603f3d011682016040523d82523d6000602084013e614151565b606091505b5091509150614162828260036143d0565b50808060200190518101906141779190616072565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916141c791616056565b60006040518083038185875af1925050503d8060008114614204576040519150601f19603f3d011682016040523d82523d6000602084013e614209565b606091505b509150915061421a828260046143d0565b506001949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161428c91616056565b60006040518083038185875af1925050503d80600081146142c9576040519150601f19603f3d011682016040523d82523d6000602084013e6142ce565b606091505b50915091506142df828260016143d0565b50808060200190518101906142f49190616072565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161435e91616056565b60006040518083038185875af1925050503d806000811461439b576040519150601f19603f3d011682016040523d82523d6000602084013e6143a0565b606091505b50915091506143b1828260026143d0565b50808060200190518101906143c69190616072565b9695505050505050565b606083156143df57508161038f565b8251156143ef5782518084602001fd5b60405163100960cb60e01b815260048101839052602401613d45565b60408051608081018252600091810182815260608201929092529081905b8152602001600081525090565b60405180610100016040528060001515815260200161445361440b565b81526020016000815260200161447c604051806040016040528060008152602001600081525090565b815260200161449e604051806040016040528060008152602001600081525090565b81526020016144c0604051806040016040528060008152602001600081525090565b81526020016144e2604051806040016040528060008152602001600081525090565b8152602001614504604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b03168152602001614541604051806040016040528060008152602001600081525090565b8152602001614563604051806040016040528060008152602001600081525090565b815260200161457061507c565b8152602001614592604051806040016040528060008152602001600081525090565b8152600060208201526040016145046040805160608101909152806000815260006020820181905260409091015290565b6040518060400160405280600081526020016145046150b6565b5080546145e990615705565b6000825580601f106145f9575050565b601f016020900490600052602060002090810190613d7391906150c9565b6040805160e08101909152600060a0820181815260c083019190915281908152602001614657604051806040016040528060008152602001600081525090565b815260200161466461507c565b8152602001614686604051806040016040528060008152602001600081525090565b8152602001614504614509565b604051806101400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016144c0604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161450460405180602001604052806000151581525090565b60405180610de0016040528061472b6150e2565b815260200160001515815260200160001515815260200160001515815260200160001515815260200160001515815260200160008152602001614781604051806040016040528060008152602001600081525090565b815260200161478e61440b565b815260200161479b61507c565b81526020016147a861440b565b8152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161480b604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161483b604051806040016040528060008152602001600081525090565b815260200161485d604051806040016040528060008152602001600081525090565b815260200161487f604051806040016040528060008152602001600081525090565b81526020016148a1604051806040016040528060008152602001600081525090565b81526020016148ae615105565b8152602001600081526020016000815260200160008152602001600081526020016148ec604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161491c604051806040016040528060008152602001600081525090565b815260200161493e604051806040016040528060008152602001600081525090565b8152602001614960604051806040016040528060008152602001600081525090565b8152602001614982604051806040016040528060008152602001600081525090565b81526020016149a4604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016149f7604051806040016040528060008152602001600081525090565b8152602001614a19604051806040016040528060008152602001600081525090565b8152602001614a3b604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614a6b604051806040016040528060008152602001600081525090565b8152602001614a8d604051806040016040528060008152602001600081525090565b8152602001614aaf604051806040016040528060008152602001600081525090565b8152602001614ad1604051806040016040528060008152602001600081525090565b8152602001614af3604051806040016040528060008152602001600081525090565b8152602001614b15604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614b68604051806040016040528060008152602001600081525090565b8152602001614b8a604051806040016040528060008152602001600081525090565b8152602001614bac604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614bdc604051806040016040528060008152602001600081525090565b8152602001614bfe604051806040016040528060008152602001600081525090565b8152602001614c20604051806040016040528060008152602001600081525090565b8152602001614c42604051806040016040528060008152602001600081525090565b8152602001614c64604051806040016040528060008152602001600081525090565b8152602001614c86604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614cd9604051806040016040528060008152602001600081525090565b8152602001614cfb604051806040016040528060008152602001600081525090565b8152602001614d1d604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614d4d604051806040016040528060008152602001600081525090565b8152602001614d6f604051806040016040528060008152602001600081525090565b8152602001614d91604051806040016040528060008152602001600081525090565b8152602001614db3604051806040016040528060008152602001600081525090565b8152602001614dd5604051806040016040528060008152602001600081525090565b8152602001614df7604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614e4a604051806040016040528060008152602001600081525090565b8152602001614e6c604051806040016040528060008152602001600081525090565b8152602001614e8e604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161447c604051806040016040528060008152602001600081525090565b6040518060400160405280614ed1615134565b81526020016145046151a2565b604080516101008101825260008082526020820152908101614f1b6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b03168152602001614f4d604051806040016040528060008152602001600081525090565b8152602001614f6f604051806040016040528060008152602001600081525090565b8152602001614f91604051806040016040528060008152602001600081525090565b815260200161450461507c565b604080516101408101825260008082526020820152908101614fdb6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200161500d604051806040016040528060008152602001600081525090565b815260200161502f604051806040016040528060008152602001600081525090565b8152602001615051604051806040016040528060008152602001600081525090565b8152602001615073604051806040016040528060008152602001600081525090565b81526020016144295b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060200160405280614504615238565b5b808211156150de57600081556001016150ca565b5090565b604051806040016040528060006001600160a01b0316815260200161450461507c565b604051806040016040528060008152602001614504604051806040016040528060008152602001600081525090565b6040805160a081018252600080825260208201529081016151706040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b03168152602001614504604051806040016040528060008152602001600081525090565b6040518060e001604052806000151581526020016151d3604051806040016040528060008152602001600081525090565b81526020016151f5604051806040016040528060008152602001600081525090565b8152602001615217604051806040016040528060008152602001600081525090565b815260200161522461507c565b815260200160008152602001600081525090565b60408051610100810190915280600081526020016152546150e2565b815260200161526161440b565b815260200161447c615105565b6001600160a01b0381168114613d7357600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156152bc576152bc615283565b60405290565b6040805190810167ffffffffffffffff811182821017156152bc576152bc615283565b6040516020810167ffffffffffffffff811182821017156152bc576152bc615283565b604051610100810167ffffffffffffffff811182821017156152bc576152bc615283565b604051610140810167ffffffffffffffff811182821017156152bc576152bc615283565b8015158114613d7357600080fd5b600060a0828403121561537057600080fd5b615378615299565b905081358152602082013560208201526040820135604082015260608201356153a08161526e565b606082015260808201356153b381615350565b608082015292915050565b60008060c083850312156153d157600080fd5b82356153dc8161526e565b91506153eb846020850161535e565b90509250929050565b61540982825180518252602090810151910152565b6020015160409190910152565b606081016102fe82846153f4565b60006040828403121561543657600080fd5b61543e6152c2565b9050813581526020820135602082015292915050565b6000806060838503121561546757600080fd5b6154718484615424565b946040939093013593505050565b60006040828403121561409157600080fd5b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b8051600281106154f1576154f16154c9565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015180518285015290810151604084015261020083019190506040840151805160608501526020810151608085015250606084015161556860a0850182615491565b50608084015180516101408501526020015161016084015260a08401511661018083015260c083015161559f6101a08401826154df565b5092915050565b600080604083850312156155b957600080fd5b50508035926020909101359150565b8151815260208083015190820152604081016102fe565b6000602082840312156155f157600080fd5b5035919050565b60005b838110156156135781810151838201526020016155fb565b50506000910152565b82815260406020820152600082518060408401526156418160608501602087016155f8565b601f01601f1916919091016060019392505050565b6000806060838503121561566957600080fd5b823591506153eb8460208501615424565b60006102c0828403121561409157600080fd5b600081830360408112156156a057600080fd5b6040516040810181811067ffffffffffffffff821117156156c3576156c3615283565b604052833581526020601f19830112156156dc57600080fd5b6156e46152e5565b915060208401356156f481615350565b825260208101919091529392505050565b600181811c9082168061571957607f821691505b60208210810361409157634e487b7160e01b600052602260045260246000fd5b803560078110610ad257600080fd5b600060c0828403121561575a57600080fd5b6157626152c2565b9050813561576f8161526e565b815261577e836020840161535e565b602082015292915050565b60006060828403121561579b57600080fd5b6157a36152c2565b90506157af8383615424565b81526040820135602082015292915050565b6000606082840312156157d357600080fd5b6157db6152c2565b90508135815261577e8360208401615424565b60008183036102c081121561580257600080fd5b61580a6152c2565b833581526102a0601f198301121561582157600080fd5b6158296152e5565b9150615833615308565b61583f60208601615739565b815261584e8660408701615748565b6020820152615861866101008701615789565b60408201526158748661016087016157c1565b6060820152615887866101c08701615424565b608082015261589a866102008701615424565b60a08201526158ad866102408701615424565b60c08201526158c0866102808701615424565b60e0820152825260208101919091529392505050565b8051610ad28161526e565b6000606082840312156158f357600080fd5b6040516060810181811067ffffffffffffffff8211171561591657615916615283565b806040525080915082516002811061592d57600080fd5b8152602083015161593d81615350565b602082015260408301516159508161526e565b6040919091015292915050565b60006040828403121561596f57600080fd5b6159776152c2565b9050815181526020820151602082015292915050565b600060a0828403121561599f57600080fd5b6159a7615299565b905081518152602082015160208201526040820151604082015260608201516159cf8161526e565b606082015260808201516153b381615350565b600061022082840312156159f557600080fd5b6159fd615308565b615a06836158d6565b8152615a14602084016158d6565b6020820152615a2684604085016158e1565b6040820152615a3760a084016158d6565b6060820152615a498460c0850161595d565b6080820152615a5c84610100850161595d565b60a0820152615a6f84610140850161595d565b60c0820152615a8284610180850161598d565b60e08201529392505050565b60006102808284031215615aa157600080fd5b615aa961532c565b615ab2836158d6565b8152615ac0602084016158d6565b6020820152615ad284604085016158e1565b6040820152615ae360a084016158d6565b6060820152615af58460c0850161595d565b6080820152610100615b098582860161595d565b60a0830152615b1c85610140860161595d565b60c0830152615b2f85610180860161595d565b60e0830152615b42856101c0860161598d565b90820152610260929092015161012083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082615b8d57634e487b7160e01b600052601260045260246000fd5b500490565b80516001600160a01b031682526020808201519061077690840182615491565b6001600160a01b038316815281516020808301919091528201515180516102e08301919060078110615be657615be66154c9565b60408401526020810151615bfd6060850182615b92565b506040810151615c116101208501826153f4565b506060810151805161018085015260209081015180516101a08601528101516101c0850152608082015180516101e086015281015161020085015260a0820151805161022086015281015161024085015260c0820151805161026086015281015161028085015260e09091015180516102a085015201516102c09092019190915292915050565b60a081016102fe8284615491565b6001600160a01b03861681526101008101615cce602083018780518252602090810151910152565b6060820185905283516080830152602084015160a08301525b825160c0830152602083015160e08301526143c6565b6001600160a01b03861681526020808201869052845160408301528401516060820152610100810183516080830152602084015160a0830152615ce7565b6001600160a01b038516815260e08101615d62602083018680518252602090810151910152565b8351606083015260208401516080830152825160a0830152602083015160c0830152614177565b808201808211156102fe576102fe615b5a565b6000816000190483118215151615615db657615db6615b5a565b500290565b818103818111156102fe576102fe615b5a565b81516001600160a01b03908116825260208084015182169083015260408084015161022084019291615e02908501826154df565b5060608401511660a08301526080830151805160c0840152602081015160e08401525060a0830151805161010084015260208101516101208401525060c0830151805161014084015260208101516101608401525060e083015161559f610180840182615491565b601f82111561077657600081815260208120601f850160051c81016020861015615e915750805b601f850160051c820191505b81811015615eb057828155600101615e9d565b505050505050565b815167ffffffffffffffff811115615ed257615ed2615283565b615ee681615ee08454615705565b84615e6a565b602080601f831160018114615f1b5760008415615f035750858301515b600019600386901b1c1916600185901b178555615eb0565b600085815260208120601f198616915b82811015615f4a57888601518255948401946001909101908401615f2b565b5085821015615f685787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81516001600160a01b0316815261028081016020830151615fa460208401826001600160a01b03169052565b506040830151615fb760408401826154df565b5060608301516001600160a01b03811660a0840152506080830151805160c0840152602081015160e08401525060a08301516101006160028185018380518252602090810151910152565b60c0850151805161014086015260209081015161016086015260e0860151805161018087015201516101a085015284015190506160436101c0840182615491565b5061012083015161026083015292915050565b600082516160688184602087016155f8565b9190910192915050565b60006020828403121561608457600080fd5b815161038f8161535056fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a2646970667358221220997a60bd8e08c1f567a494fb3ef27a24c0bb220cfa77f252836577425c7e739864736f6c6343000810003360806040523480156200001157600080fd5b50604051620010cf380380620010cf83398101604081905262000034916200027a565b85856003620000448382620003d3565b506004620000538282620003d3565b506200005f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200008a9083620000c8565b6006620000988582620003d3565b506007620000a78482620003d3565b506008805460ff191660ff9290921691909117905550620004c79350505050565b6001600160a01b038216620001235760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200013791906200049f565b90915550506001600160a01b03821660009081526020819052604081208054839290620001669084906200049f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001dd57600080fd5b81516001600160401b0380821115620001fa57620001fa620001b5565b604051601f8301601f19908116603f01168101908282118183101715620002255762000225620001b5565b816040528381526020925086838588010111156200024257600080fd5b600091505b8382101562000266578582018301518183018401529082019062000247565b600093810190920192909252949350505050565b60008060008060008060c087890312156200029457600080fd5b86516001600160401b0380821115620002ac57600080fd5b620002ba8a838b01620001cb565b97506020890151915080821115620002d157600080fd5b620002df8a838b01620001cb565b96506040890151915080821115620002f657600080fd5b620003048a838b01620001cb565b955060608901519150808211156200031b57600080fd5b506200032a89828a01620001cb565b9350506080870151915060a087015190509295509295509295565b600181811c908216806200035a57607f821691505b6020821081036200037b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001b057600081815260208120601f850160051c81016020861015620003aa5750805b601f850160051c820191505b81811015620003cb57828155600101620003b6565b505050505050565b81516001600160401b03811115620003ef57620003ef620001b5565b620004078162000400845462000345565b8462000381565b602080601f8311600181146200043f5760008415620004265750858301515b600019600386901b1c1916600185901b178555620003cb565b600085815260208120601f198616915b8281101562000470578886015182559484019460019091019084016200044f565b50858210156200048f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004c157634e487b7160e01b600052601160045260246000fd5b92915050565b610bf880620004d76000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0e565b60405180910390f35b61012b610126366004610a78565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa2565b6102f1565b60085460405160ff909116815260200161010f565b610102610315565b61012b61018b366004610a78565b610324565b61012b61019e366004610ade565b610363565b6101026103de565b61013f6101b9366004610af7565b6001600160a01b031660009081526020819052604090205490565b6101dc6103ed565b005b610102610494565b61012b6101f4366004610a78565b6104a3565b61012b610207366004610a78565b610535565b61013f61021a366004610b19565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b4c565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b4c565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610543565b60019150505b92915050565b6000336102ff858285610668565b61030a8585856106fa565b506001949350505050565b60606007805461025490610b4c565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035e908790610b9c565b610543565b6005546000906001600160a01b0316336001600160a01b0316146103c05760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d6906001600160a01b0316836108c8565b506001919050565b60606006805461025490610b4c565b6005546001600160a01b0316336001600160a01b0316146104425760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b7565b600254156104865760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b7565b6005546001600160a01b0316ff5b60606004805461025490610b4c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105285760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b7565b61030a8286868403610543565b6000336102e58185856106fa565b6001600160a01b0383166105a55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b7565b6001600160a01b0382166106065760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b7565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f457818110156106e75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b7565b6106f48484848403610543565b50505050565b6001600160a01b03831661075e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b7565b6001600160a01b0382166107c05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b7565b6001600160a01b038316600090815260208190526040902054818110156108385760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b7565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086f908490610b9c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108bb91815260200190565b60405180910390a36106f4565b6001600160a01b0382166109285760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b7565b6001600160a01b0382166000908152602081905260409020548181101561099c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b7565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109cb908490610baf565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161065b565b600060208083528351808285015260005b81811015610a3b57858101830151858201604001528201610a1f565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610a7357600080fd5b919050565b60008060408385031215610a8b57600080fd5b610a9483610a5c565b946020939093013593505050565b600080600060608486031215610ab757600080fd5b610ac084610a5c565b9250610ace60208501610a5c565b9150604084013590509250925092565b600060208284031215610af057600080fd5b5035919050565b600060208284031215610b0957600080fd5b610b1282610a5c565b9392505050565b60008060408385031215610b2c57600080fd5b610b3583610a5c565b9150610b4360208401610a5c565b90509250929050565b600181811c90821680610b6057607f821691505b602082108103610b8057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102eb576102eb610b86565b818103818111156102eb576102eb610b8656fea2646970667358221220b4194df21af71cb8bbac3c696b08e87eff97a8bbf475c8839ff137f65c5931e464736f6c63430008100033`,
  BytecodeLen: 35040,
  Which: `oD`,
  version: 8,
  views: {
    Info: `Info`,
    v_exactSwapAForB: `v_exactSwapAForB`,
    v_exactSwapBForA: `v_exactSwapBForA`,
    v_swapAForB: `v_swapAForB`,
    v_swapBForA: `v_swapBForA`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:603:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:609:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:440:19:after expr stmt semicolon',
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
  "Protocol_delete": Protocol_delete,
  "Protocol_harvest": Protocol_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_withdraw": Provider_withdraw,
  "Trader_exactSwapAForB": Trader_exactSwapAForB,
  "Trader_exactSwapBForA": Trader_exactSwapBForA,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    deposit: Provider_deposit,
    withdraw: Provider_withdraw
    },
  Trader: {
    exactSwapAForB: Trader_exactSwapAForB,
    exactSwapBForA: Trader_exactSwapBForA,
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    }
  };
