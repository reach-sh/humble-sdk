// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    calcAmtIn_: ((_v32910, _v32911, _v32912, _v32913 ) => {
        const v32910 = stdlib.protect(ctc0, _v32910, null);
        const v32911 = stdlib.protect(ctc0, _v32911, null);
        const v32912 = stdlib.protect(ctc0, _v32912, null);
        const v32913 = stdlib.protect(ctc0, _v32913, null);
      
      const v32915 = stdlib.safeSub(v32911, v32910);
      const v32916 = stdlib.cast("UInt", "UInt256", v32915, false, true);
      const v32917 = stdlib.cast("UInt", "UInt256", v32912, false, true);
      const v32918 = stdlib.cast("UInt", "UInt256", v32910, false, true);
      const v32919 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32913);
      const v32920 = stdlib.cast("UInt", "UInt256", v32919, false, true);
      const v32921 = stdlib.safeMul256(v32918, v32920);
      const v32922 = stdlib.safeMul256(v32916, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v32923 = stdlib.safeMul256(v32921, v32917);
      const v32924 = stdlib.safeDiv256(v32923, v32922);
      const v32925 = stdlib.cast("UInt256", "UInt", v32924, false, true);
      const v32926 = stdlib.safeAdd(v32925, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v32926;}),
    computeMint_: ((_v32927, _v32928, _v32929 ) => {
        const v32927 = stdlib.protect(ctc1, _v32927, null);
        const v32928 = stdlib.protect(ctc1, _v32928, null);
        const v32929 = stdlib.protect(ctc1, _v32929, null);
      
      const v32930 = v32927.A;
      const v32931 = v32927.B;
      const v32932 = v32928.A;
      const v32933 = v32928.B;
      const v32935 = v32929.B;
      let v32936;
      const v32943 = stdlib.eq(v32935, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v32943) {
        const v32944 = stdlib.cast("UInt", "UInt256", v32930, false, true);
        const v32945 = stdlib.cast("UInt", "UInt256", v32931, false, true);
        const v32946 = stdlib.safeMul256(v32944, v32945);
        const v32947 = stdlib.sqrt256(v32946);
        const v32948 = stdlib.cast("UInt256", "UInt", v32947, false, true);
        v32936 = v32948;
        }
      else {
        const v32957 = stdlib.safeMuldiv(v32930, v32935, v32932);
        const v32964 = stdlib.safeMuldiv(v32931, v32935, v32933);
        const v32966 = stdlib.lt(v32957, v32964);
        const v32967 = v32966 ? v32957 : v32964;
        v32936 = v32967;
        }
      
      return v32936;}),
    computeSwap_: ((_v32968, _v32969, _v32970, _v32971 ) => {
        const v32968 = stdlib.protect(ctc2, _v32968, null);
        const v32969 = stdlib.protect(ctc1, _v32969, null);
        const v32970 = stdlib.protect(ctc1, _v32970, null);
        const v32971 = stdlib.protect(ctc4, _v32971, null);
      
      const v32972 = v32969.A;
      const v32973 = v32969.B;
      const v32974 = v32970.A;
      const v32975 = v32970.B;
      const v32977 = v32971.protoFee;
      const v32978 = v32971.lpFee;
      const v32979 = v32971.totFee;
      const v32980 = stdlib.lt(v32977, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v32981 = stdlib.lt(v32978, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v32982 = v32980 ? v32981 : false;
      let v32985;
      if (v32982) {
        const v32983 = stdlib.safeAdd(v32978, v32977);
        const v32984 = stdlib.eq(v32979, v32983);
        v32985 = v32984;
        }
      else {
        v32985 = false;
        }
      const v32986 = stdlib.lt(v32979, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v32987 = v32985 ? v32986 : false;
      const v32988 = stdlib.gt(v32979, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v32989 = v32987 ? v32988 : false;
      stdlib.assert(v32989, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v32991 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v32991, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v33007;
      if (v32968) {
        const v33012 = stdlib.eq(v32973, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v33012, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v33035 = stdlib.cast("UInt", "UInt256", v32975, false, true);
        const v33036 = stdlib.cast("UInt", "UInt256", v32974, false, true);
        const v33037 = stdlib.cast("UInt", "UInt256", v32972, false, true);
        const v33038 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32979);
        const v33039 = stdlib.cast("UInt", "UInt256", v33038, false, true);
        const v33040 = stdlib.safeMul256(v33037, v33039);
        const v33041 = stdlib.safeMul256(v33036, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v33042 = stdlib.safeAdd256(v33041, v33040);
        const v33043 = stdlib.safeMul256(v33040, v33035);
        const v33044 = stdlib.safeDiv256(v33043, v33042);
        const v33045 = stdlib.cast("UInt256", "UInt", v33044, false, true);
        const v33052 = stdlib.safeMul(v32977, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v33053 = stdlib.safeDiv(v33052, v32979);
        const v33060 = stdlib.safeAdd(v32974, v32972);
        const v33068 = stdlib.safeMuldiv(v32972, v32975, v33060);
        const v33073 = stdlib.safeSub(v33068, v33045);
        const v33079 = stdlib.safeMuldiv(v33073, v33053, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v33084 = stdlib.safeMuldiv(v32972, v32977, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v33092 = stdlib.safeMuldiv(v33084, v32975, v33060);
        const v33093 = stdlib.gt(v33092, v33079);
        const v33094 = [v33084, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v33095 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v33079];
        const v33096 = v33093 ? v33094 : v33095;
        const v33098 = v33096[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v33099 = v33096[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v33100 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v33045
          };
        const v33101 = {
          A: v33098,
          B: v33099
          };
        const v33102 = [v33100, v33101, v32972];
        v33007 = v33102;
        }
      else {
        const v33103 = stdlib.eq(v32972, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v33103, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v33126 = stdlib.cast("UInt", "UInt256", v32974, false, true);
        const v33127 = stdlib.cast("UInt", "UInt256", v32975, false, true);
        const v33128 = stdlib.cast("UInt", "UInt256", v32973, false, true);
        const v33129 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32979);
        const v33130 = stdlib.cast("UInt", "UInt256", v33129, false, true);
        const v33131 = stdlib.safeMul256(v33128, v33130);
        const v33132 = stdlib.safeMul256(v33127, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v33133 = stdlib.safeAdd256(v33132, v33131);
        const v33134 = stdlib.safeMul256(v33131, v33126);
        const v33135 = stdlib.safeDiv256(v33134, v33133);
        const v33136 = stdlib.cast("UInt256", "UInt", v33135, false, true);
        const v33143 = stdlib.safeMul(v32977, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v33144 = stdlib.safeDiv(v33143, v32979);
        const v33151 = stdlib.safeAdd(v32975, v32973);
        const v33159 = stdlib.safeMuldiv(v32973, v32974, v33151);
        const v33164 = stdlib.safeSub(v33159, v33136);
        const v33170 = stdlib.safeMuldiv(v33164, v33144, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v33175 = stdlib.safeMuldiv(v32973, v32977, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v33183 = stdlib.safeMuldiv(v33175, v32974, v33151);
        const v33184 = stdlib.gt(v33183, v33170);
        const v33185 = [v33175, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v33186 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v33170];
        const v33187 = v33184 ? v33185 : v33186;
        const v33189 = v33187[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v33190 = v33187[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v33191 = {
          A: v33136,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v33192 = {
          A: v33190,
          B: v33189
          };
        const v33193 = [v33191, v33192, v32973];
        v33007 = v33193;
        }
      const v33194 = v33007[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v33195 = v33007[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v33197 = v33194.A;
      const v33198 = v33194.B;
      const v33199 = v33195.A;
      const v33200 = v33195.B;
      const v33201 = {
        A: v33197,
        B: v33198
        };
      const v33202 = {
        A: v33199,
        B: v33200
        };
      const v33203 = [v33201, v33202];
      
      return v33203;})
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
      const [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020] = svs;
      return (await ((async () => {
        
        const v58820 = v44017.A;
        const v58821 = v44017.B;
        const v58822 = v44018.A;
        const v58823 = v44018.B;
        const v58824 = v44020.protoFee;
        const v58825 = v44020.lpFee;
        const v58826 = v44020.totFee;
        const v58827 = v44020.protoAddr;
        const v58828 = v44020.locked;
        const v58829 = v44019.A;
        const v58830 = v44019.B;
        const v58831 = {
          A: v58820,
          B: v58821
          };
        const v58832 = {
          A: v58822,
          B: v58823
          };
        const v58833 = {
          locked: v58828,
          lpFee: v58825,
          protoAddr: v58827,
          protoFee: v58824,
          totFee: v58826
          };
        const v58834 = {
          A: v58829,
          B: v58830
          };
        const v58836 = {
          liquidityToken: v43987,
          lptBals: v58831,
          poolBals: v58832,
          protoBals: v58834,
          protoInfo: v58833,
          tokA: v43959,
          tokB: v43933
          };
        
        return v58836;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = svs;
      return (await ((async () => {
        
        const v44093 = v44017.A;
        const v44094 = v44017.B;
        const v44095 = v44018.A;
        const v44096 = v44018.B;
        const v44097 = v44020.protoFee;
        const v44098 = v44020.lpFee;
        const v44099 = v44020.totFee;
        const v44100 = v44020.protoAddr;
        const v44101 = v44020.locked;
        const v44102 = v44019.A;
        const v44103 = v44019.B;
        const v44104 = {
          A: v44093,
          B: v44094
          };
        const v44105 = {
          A: v44095,
          B: v44096
          };
        const v44106 = {
          locked: v44101,
          lpFee: v44098,
          protoAddr: v44100,
          protoFee: v44097,
          totFee: v44099
          };
        const v44107 = {
          A: v44102,
          B: v44103
          };
        const v44109 = {
          liquidityToken: v43987,
          lptBals: v44104,
          poolBals: v44105,
          protoBals: v44107,
          protoInfo: v44106,
          tokA: v43959,
          tokB: v43933
          };
        
        return v44109;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020] = svs;
      return (await ((async (_v59060 ) => {
          const v59060 = stdlib.protect(ctc3, _v59060, null);
        
        const v59061 = v44018.A;
        const v59062 = v44018.B;
        const v59065 = v44020.totFee;
        const v59066 = stdlib.safeSub(v59062, v59060);
        const v59067 = stdlib.cast("UInt", "UInt256", v59066, false, true);
        const v59068 = stdlib.cast("UInt", "UInt256", v59061, false, true);
        const v59069 = stdlib.cast("UInt", "UInt256", v59060, false, true);
        const v59070 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v59065);
        const v59071 = stdlib.cast("UInt", "UInt256", v59070, false, true);
        const v59072 = stdlib.safeMul256(v59069, v59071);
        const v59073 = stdlib.safeMul256(v59067, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v59074 = stdlib.safeMul256(v59072, v59068);
        const v59075 = stdlib.safeDiv256(v59074, v59073);
        const v59076 = stdlib.cast("UInt256", "UInt", v59075, false, true);
        const v59077 = stdlib.safeAdd(v59076, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v59077;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = svs;
      return (await ((async (_v44333 ) => {
          const v44333 = stdlib.protect(ctc3, _v44333, null);
        
        const v44334 = v44018.A;
        const v44335 = v44018.B;
        const v44338 = v44020.totFee;
        const v44339 = stdlib.safeSub(v44335, v44333);
        const v44340 = stdlib.cast("UInt", "UInt256", v44339, false, true);
        const v44341 = stdlib.cast("UInt", "UInt256", v44334, false, true);
        const v44342 = stdlib.cast("UInt", "UInt256", v44333, false, true);
        const v44343 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44338);
        const v44344 = stdlib.cast("UInt", "UInt256", v44343, false, true);
        const v44345 = stdlib.safeMul256(v44342, v44344);
        const v44346 = stdlib.safeMul256(v44340, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44347 = stdlib.safeMul256(v44345, v44341);
        const v44348 = stdlib.safeDiv256(v44347, v44346);
        const v44349 = stdlib.cast("UInt256", "UInt", v44348, false, true);
        const v44350 = stdlib.safeAdd(v44349, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v44350;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020] = svs;
      return (await ((async (_v59115 ) => {
          const v59115 = stdlib.protect(ctc3, _v59115, null);
        
        const v59116 = v44018.A;
        const v59117 = v44018.B;
        const v59120 = v44020.totFee;
        const v59121 = stdlib.safeSub(v59116, v59115);
        const v59122 = stdlib.cast("UInt", "UInt256", v59121, false, true);
        const v59123 = stdlib.cast("UInt", "UInt256", v59117, false, true);
        const v59124 = stdlib.cast("UInt", "UInt256", v59115, false, true);
        const v59125 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v59120);
        const v59126 = stdlib.cast("UInt", "UInt256", v59125, false, true);
        const v59127 = stdlib.safeMul256(v59124, v59126);
        const v59128 = stdlib.safeMul256(v59122, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v59129 = stdlib.safeMul256(v59127, v59123);
        const v59130 = stdlib.safeDiv256(v59129, v59128);
        const v59131 = stdlib.cast("UInt256", "UInt", v59130, false, true);
        const v59132 = stdlib.safeAdd(v59131, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v59132;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = svs;
      return (await ((async (_v44388 ) => {
          const v44388 = stdlib.protect(ctc3, _v44388, null);
        
        const v44389 = v44018.A;
        const v44390 = v44018.B;
        const v44393 = v44020.totFee;
        const v44394 = stdlib.safeSub(v44389, v44388);
        const v44395 = stdlib.cast("UInt", "UInt256", v44394, false, true);
        const v44396 = stdlib.cast("UInt", "UInt256", v44390, false, true);
        const v44397 = stdlib.cast("UInt", "UInt256", v44388, false, true);
        const v44398 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44393);
        const v44399 = stdlib.cast("UInt", "UInt256", v44398, false, true);
        const v44400 = stdlib.safeMul256(v44397, v44399);
        const v44401 = stdlib.safeMul256(v44395, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44402 = stdlib.safeMul256(v44400, v44396);
        const v44403 = stdlib.safeDiv256(v44402, v44401);
        const v44404 = stdlib.cast("UInt256", "UInt", v44403, false, true);
        const v44405 = stdlib.safeAdd(v44404, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v44405;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020] = svs;
      return (await ((async (_v58843 ) => {
          const v58843 = stdlib.protect(ctc3, _v58843, null);
        
        const v58845 = v44020.locked;
        const v58846 = v58845 ? false : true;
        stdlib.assert(v58846, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v58848 = v44018.A;
        const v58849 = v44018.B;
        const v58851 = v44020.protoFee;
        const v58852 = v44020.totFee;
        const v58853 = stdlib.cast("UInt", "UInt256", v58849, false, true);
        const v58854 = stdlib.cast("UInt", "UInt256", v58848, false, true);
        const v58855 = stdlib.cast("UInt", "UInt256", v58843, false, true);
        const v58856 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58852);
        const v58857 = stdlib.cast("UInt", "UInt256", v58856, false, true);
        const v58858 = stdlib.safeMul256(v58855, v58857);
        const v58859 = stdlib.safeMul256(v58854, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v58860 = stdlib.safeAdd256(v58859, v58858);
        const v58861 = stdlib.safeMul256(v58858, v58853);
        const v58862 = stdlib.safeDiv256(v58861, v58860);
        const v58863 = stdlib.cast("UInt256", "UInt", v58862, false, true);
        const v58869 = stdlib.safeMul(v58851, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v58870 = stdlib.safeDiv(v58869, v58852);
        const v58875 = stdlib.safeAdd(v58848, v58843);
        const v58879 = stdlib.safeMuldiv(v58843, v58849, v58875);
        const v58882 = stdlib.safeSub(v58879, v58863);
        const v58884 = stdlib.safeMuldiv(v58882, v58870, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v58886 = stdlib.safeMuldiv(v58843, v58851, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v58890 = stdlib.safeMuldiv(v58886, v58849, v58875);
        const v58891 = stdlib.gt(v58890, v58884);
        const v58892 = [v58886, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v58893 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v58884];
        const v58894 = v58891 ? v58892 : v58893;
        const v58896 = v58894[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v58897 = v58894[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v58915 = stdlib.safeSub(v58849, v58863);
        const v58919 = stdlib.safeSub(v58875, v58896);
        const v58922 = stdlib.safeSub(v58915, v58897);
        const v58935 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v58863);
        stdlib.assert(v58935, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v58941 = stdlib.safeMul256(v58854, v58853);
        const v58942 = stdlib.cast("UInt", "UInt256", v58919, false, true);
        const v58943 = stdlib.cast("UInt", "UInt256", v58922, false, true);
        const v58944 = stdlib.safeMul256(v58942, v58943);
        const v58945 = stdlib.ge256(v58944, v58941);
        stdlib.assert(v58945, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v58863;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = svs;
      return (await ((async (_v44116 ) => {
          const v44116 = stdlib.protect(ctc3, _v44116, null);
        
        const v44118 = v44020.locked;
        const v44119 = v44118 ? false : true;
        stdlib.assert(v44119, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v44121 = v44018.A;
        const v44122 = v44018.B;
        const v44124 = v44020.protoFee;
        const v44125 = v44020.totFee;
        const v44126 = stdlib.cast("UInt", "UInt256", v44122, false, true);
        const v44127 = stdlib.cast("UInt", "UInt256", v44121, false, true);
        const v44128 = stdlib.cast("UInt", "UInt256", v44116, false, true);
        const v44129 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44125);
        const v44130 = stdlib.cast("UInt", "UInt256", v44129, false, true);
        const v44131 = stdlib.safeMul256(v44128, v44130);
        const v44132 = stdlib.safeMul256(v44127, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44133 = stdlib.safeAdd256(v44132, v44131);
        const v44134 = stdlib.safeMul256(v44131, v44126);
        const v44135 = stdlib.safeDiv256(v44134, v44133);
        const v44136 = stdlib.cast("UInt256", "UInt", v44135, false, true);
        const v44142 = stdlib.safeMul(v44124, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v44143 = stdlib.safeDiv(v44142, v44125);
        const v44148 = stdlib.safeAdd(v44121, v44116);
        const v44152 = stdlib.safeMuldiv(v44116, v44122, v44148);
        const v44155 = stdlib.safeSub(v44152, v44136);
        const v44157 = stdlib.safeMuldiv(v44155, v44143, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v44159 = stdlib.safeMuldiv(v44116, v44124, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v44163 = stdlib.safeMuldiv(v44159, v44122, v44148);
        const v44164 = stdlib.gt(v44163, v44157);
        const v44165 = [v44159, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v44166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44157];
        const v44167 = v44164 ? v44165 : v44166;
        const v44169 = v44167[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v44170 = v44167[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v44188 = stdlib.safeSub(v44122, v44136);
        const v44192 = stdlib.safeSub(v44148, v44169);
        const v44195 = stdlib.safeSub(v44188, v44170);
        const v44208 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44136);
        stdlib.assert(v44208, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v44214 = stdlib.safeMul256(v44127, v44126);
        const v44215 = stdlib.cast("UInt", "UInt256", v44192, false, true);
        const v44216 = stdlib.cast("UInt", "UInt256", v44195, false, true);
        const v44217 = stdlib.safeMul256(v44215, v44216);
        const v44218 = stdlib.ge256(v44217, v44214);
        stdlib.assert(v44218, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v44136;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020] = svs;
      return (await ((async (_v58951 ) => {
          const v58951 = stdlib.protect(ctc3, _v58951, null);
        
        const v58953 = v44020.locked;
        const v58954 = v58953 ? false : true;
        stdlib.assert(v58954, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v58956 = v44018.A;
        const v58957 = v44018.B;
        const v58959 = v44020.protoFee;
        const v58960 = v44020.totFee;
        const v58961 = stdlib.cast("UInt", "UInt256", v58956, false, true);
        const v58962 = stdlib.cast("UInt", "UInt256", v58957, false, true);
        const v58963 = stdlib.cast("UInt", "UInt256", v58951, false, true);
        const v58964 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58960);
        const v58965 = stdlib.cast("UInt", "UInt256", v58964, false, true);
        const v58966 = stdlib.safeMul256(v58963, v58965);
        const v58967 = stdlib.safeMul256(v58962, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v58968 = stdlib.safeAdd256(v58967, v58966);
        const v58969 = stdlib.safeMul256(v58966, v58961);
        const v58970 = stdlib.safeDiv256(v58969, v58968);
        const v58971 = stdlib.cast("UInt256", "UInt", v58970, false, true);
        const v58977 = stdlib.safeMul(v58959, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v58978 = stdlib.safeDiv(v58977, v58960);
        const v58983 = stdlib.safeAdd(v58957, v58951);
        const v58987 = stdlib.safeMuldiv(v58951, v58956, v58983);
        const v58990 = stdlib.safeSub(v58987, v58971);
        const v58992 = stdlib.safeMuldiv(v58990, v58978, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v58994 = stdlib.safeMuldiv(v58951, v58959, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v58998 = stdlib.safeMuldiv(v58994, v58956, v58983);
        const v58999 = stdlib.gt(v58998, v58992);
        const v59000 = [v58994, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v59001 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v58992];
        const v59002 = v58999 ? v59000 : v59001;
        const v59004 = v59002[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v59005 = v59002[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v59021 = stdlib.safeSub(v58956, v58971);
        const v59027 = stdlib.safeSub(v59021, v59005);
        const v59030 = stdlib.safeSub(v58983, v59004);
        const v59043 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v58971);
        stdlib.assert(v59043, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v59050 = stdlib.safeMul256(v58961, v58962);
        const v59051 = stdlib.cast("UInt", "UInt256", v59027, false, true);
        const v59052 = stdlib.cast("UInt", "UInt256", v59030, false, true);
        const v59053 = stdlib.safeMul256(v59051, v59052);
        const v59054 = stdlib.ge256(v59053, v59050);
        stdlib.assert(v59054, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v58971;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = svs;
      return (await ((async (_v44224 ) => {
          const v44224 = stdlib.protect(ctc3, _v44224, null);
        
        const v44226 = v44020.locked;
        const v44227 = v44226 ? false : true;
        stdlib.assert(v44227, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v44229 = v44018.A;
        const v44230 = v44018.B;
        const v44232 = v44020.protoFee;
        const v44233 = v44020.totFee;
        const v44234 = stdlib.cast("UInt", "UInt256", v44229, false, true);
        const v44235 = stdlib.cast("UInt", "UInt256", v44230, false, true);
        const v44236 = stdlib.cast("UInt", "UInt256", v44224, false, true);
        const v44237 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44233);
        const v44238 = stdlib.cast("UInt", "UInt256", v44237, false, true);
        const v44239 = stdlib.safeMul256(v44236, v44238);
        const v44240 = stdlib.safeMul256(v44235, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44241 = stdlib.safeAdd256(v44240, v44239);
        const v44242 = stdlib.safeMul256(v44239, v44234);
        const v44243 = stdlib.safeDiv256(v44242, v44241);
        const v44244 = stdlib.cast("UInt256", "UInt", v44243, false, true);
        const v44250 = stdlib.safeMul(v44232, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v44251 = stdlib.safeDiv(v44250, v44233);
        const v44256 = stdlib.safeAdd(v44230, v44224);
        const v44260 = stdlib.safeMuldiv(v44224, v44229, v44256);
        const v44263 = stdlib.safeSub(v44260, v44244);
        const v44265 = stdlib.safeMuldiv(v44263, v44251, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v44267 = stdlib.safeMuldiv(v44224, v44232, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v44271 = stdlib.safeMuldiv(v44267, v44229, v44256);
        const v44272 = stdlib.gt(v44271, v44265);
        const v44273 = [v44267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v44274 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44265];
        const v44275 = v44272 ? v44273 : v44274;
        const v44277 = v44275[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v44278 = v44275[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v44294 = stdlib.safeSub(v44229, v44244);
        const v44300 = stdlib.safeSub(v44294, v44278);
        const v44303 = stdlib.safeSub(v44256, v44277);
        const v44316 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44244);
        stdlib.assert(v44316, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v44323 = stdlib.safeMul256(v44234, v44235);
        const v44324 = stdlib.cast("UInt", "UInt256", v44300, false, true);
        const v44325 = stdlib.cast("UInt", "UInt256", v44303, false, true);
        const v44326 = stdlib.safeMul256(v44324, v44325);
        const v44327 = stdlib.ge256(v44326, v44323);
        stdlib.assert(v44327, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v44244;}))(...args));
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
    Protocol_harvest0_35418: ctc10,
    Provider_deposit0_35418: ctc12,
    Provider_withdraw0_35418: ctc13,
    Trader_exactSwapAForB0_35418: ctc14,
    Trader_exactSwapBForA0_35418: ctc14,
    Trader_swapAForB0_35418: ctc14,
    Trader_swapBForA0_35418: ctc14
    });
  const ctc16 = stdlib.T_Tuple([]);
  
  
  const v43918 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v43919 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v43920 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v43921 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v43922 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v43926 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v43926, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v43928 = stdlib.tokenEq(v43921, v43922);
  const v43929 = v43928 ? false : true;
  stdlib.assert(v43929, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:411:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43921, v43922, v43918, v43919, v43920],
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
      
      
      const {data: [v43932, v43933, v43934, v43935, v43936], secs: v43938, time: v43937, didSend: v33295, from: v43931 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v43932
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v43933
        });
      ;
      const v43955 = await ctc.getContractInfo();
      const v43958 = [];
      const v43959 = ['Some', v43932];
      const v43960 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v43936,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      const v43961 = await txn1.getOutput('internal', 'v43960', ctc8, v43960);
      const v43963 = v43961[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
      const v43964 = v43961[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
      const v43983 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v43984 = '                                                                                                ';
      const v43985 = '                                ';
      const v43986 = stdlib.simTokenNew(sim_r, v43934, v43935, v43984, v43985, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v43987 = await txn1.getOutput('internal', 'v43986', ctc3, v43986);
      
      const v44014 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v44016 = false;
      const v44017 = v43983;
      const v44018 = v44014;
      const v44019 = v44014;
      const v44020 = v43964;
      const v44021 = v43937;
      const v44024 = v43963;
      
      if (await (async () => {
        const v44092 = v44016 ? false : true;
        
        return v44092;})()) {
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
  const {data: [v43932, v43933, v43934, v43935, v43936], secs: v43938, time: v43937, didSend: v33295, from: v43931 } = txn1;
  const v43947 = stdlib.tokenEq(v43933, v43932);
  const v43948 = v43947 ? false : true;
  stdlib.assert(v43948, {
    at: './index.rsh:420:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v43950 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v43950, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v43952 = stdlib.tokenEq(v43932, v43933);
  const v43953 = v43952 ? false : true;
  stdlib.assert(v43953, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:411:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  ;
  ;
  const v43955 = await ctc.getContractInfo();
  const v43958 = [];
  const v43959 = ['Some', v43932];
  const v43960 = undefined /* Remote */;
  const v43961 = await txn1.getOutput('internal', 'v43960', ctc8, v43960);
  const v43963 = v43961[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
  const v43964 = v43961[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
  const v43965 = v43964.protoFee;
  const v43966 = v43964.lpFee;
  const v43967 = v43964.totFee;
  const v43968 = stdlib.lt(v43965, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v43969 = stdlib.lt(v43966, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v43970 = v43968 ? v43969 : false;
  let v43971;
  if (v43970) {
    const v43972 = stdlib.safeAdd(v43966, v43965);
    const v43973 = stdlib.eq(v43967, v43972);
    v43971 = v43973;
    }
  else {
    v43971 = false;
    }
  const v43974 = stdlib.lt(v43967, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v43975 = v43971 ? v43974 : false;
  const v43976 = stdlib.gt(v43967, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v43977 = v43975 ? v43976 : false;
  stdlib.assert(v43977, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v43982 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v43963);
  stdlib.assert(v43982, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v43983 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v43984 = '                                                                                                ';
  const v43985 = '                                ';
  const v43986 = undefined /* TokenNew */;
  const v43987 = await txn1.getOutput('internal', 'v43986', ctc3, v43986);
  const v43988 = [v43932, v43933];
  const v43989 = await stdlib.Array_asyncReduce([v43988], false, async([v43991], v43990, v43992) => {
    const v43993 = stdlib.tokenEq(v43987, v43991);
    const v43995 = v43990 ? v43990 : v43993;
    
    return v43995;})
  const v43996 = v43989 ? false : true;
  stdlib.assert(v43996, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v44001 = stdlib.tokenEq(v43987, v43932);
  const v44003 = stdlib.tokenEq(v43987, v43933);
  const v44004 = v44003 ? false : true;
  const v44005 = v44001 ? false : v44004;
  stdlib.assert(v44005, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  stdlib.protect(ctc9, await interact.signalPoolCreation(v43987), {
    at: './index.rsh:437:36:application',
    fs: ['at ./index.rsh:437:36:application call to [unknown function] (defined at: ./index.rsh:437:36:function exp)', 'at ./index.rsh:437:36:application call to "liftedInteract" (defined at: ./index.rsh:437:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v44014 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v44016 = false;
  let v44017 = v43983;
  let v44018 = v44014;
  let v44019 = v44014;
  let v44020 = v43964;
  let v44021 = v43937;
  let v44024 = v43963;
  
  let txn2 = txn1;
  while (await (async () => {
    const v44092 = v44016 ? false : true;
    
    return v44092;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn3;
    switch (v46042[0]) {
      case 'Protocol_harvest0_35418': {
        const v46045 = v46042[1];
        undefined /* setApiDetails */;
        const v46051 = v46045[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
        const v46052 = v44020.protoAddr;
        const v46053 = stdlib.addressEq(v46041, v46052);
        stdlib.assert(v46053, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v46055 = v46051.protoFee;
        const v46056 = v46051.lpFee;
        const v46057 = v46051.totFee;
        const v46058 = stdlib.lt(v46055, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
        const v46059 = stdlib.lt(v46056, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
        const v46060 = v46058 ? v46059 : false;
        let v46061;
        if (v46060) {
          const v46062 = stdlib.safeAdd(v46056, v46055);
          const v46063 = stdlib.eq(v46057, v46062);
          v46061 = v46063;
          }
        else {
          v46061 = false;
          }
        const v46064 = stdlib.lt(v46057, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
        const v46065 = v46061 ? v46064 : false;
        const v46066 = stdlib.gt(v46057, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
        const v46067 = v46065 ? v46066 : false;
        stdlib.assert(v46067, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v46817 = v46045[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
        let v46828;
        if (v46060) {
          const v46829 = stdlib.safeAdd(v46056, v46055);
          const v46830 = stdlib.eq(v46057, v46829);
          v46828 = v46830;
          }
        else {
          v46828 = false;
          }
        const v46832 = v46828 ? v46064 : false;
        const v46834 = v46832 ? v46066 : false;
        stdlib.assert(v46834, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v46837 = v44017.B;
        const v46840 = v46051.locked;
        const v46841 = stdlib.eq(v46837, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
        const v46842 = v46840 ? v46841 : false;
        const v46843 = v44018.A;
        const v46844 = v44018.B;
        const v46845 = stdlib.eq(v46843, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
        const v46846 = stdlib.eq(v46844, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
        const v46847 = v46845 ? v46846 : false;
        const v46848 = v46842 ? v46847 : false;
        const v46852 = (stdlib.le(await ctc.getBalance(), v44024) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v44024));
        const v46853 = stdlib.safeAdd(v46852, v44024);
        const v46854 = v44019.A;
        const v46855 = v44019.B;
        const v46885 = stdlib.sub(v46853, v46852);
        ;
        ;
        ;
        const v46906 = {
          A: v46854,
          B: v46855
          };
        const v46907 = [v46906, v46852];
        await txn3.getOutput('Protocol_harvest', 'v46907', ctc12, v46907);
        const v46935 = v46051.protoAddr;
        const v46937 = {
          locked: v46840,
          lpFee: v46056,
          protoAddr: v46935,
          protoFee: v46055,
          totFee: v46057
          };
        null;
        const cv44016 = v46848;
        const cv44017 = v44017;
        const cv44018 = v44018;
        const cv44019 = v44014;
        const cv44020 = v46051;
        const cv44021 = v46043;
        const cv44024 = v46885;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_35418': {
        const v47870 = v46042[1];
        undefined /* setApiDetails */;
        const v47924 = v47870[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
        const v47925 = v47870[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
        const v47926 = v44020.locked;
        const v47927 = v47926 ? false : true;
        stdlib.assert(v47927, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        let v47929;
        const v47930 = v47924.A;
        const v47931 = v47924.B;
        const v47933 = v44017.B;
        const v47935 = stdlib.eq(v47933, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
        if (v47935) {
          const v47936 = stdlib.cast("UInt", "UInt256", v47930, false, true);
          const v47937 = stdlib.cast("UInt", "UInt256", v47931, false, true);
          const v47938 = stdlib.safeMul256(v47936, v47937);
          const v47939 = stdlib.sqrt256(v47938);
          const v47940 = stdlib.cast("UInt256", "UInt", v47939, false, true);
          v47929 = v47940;
          }
        else {
          const v47941 = v44018.A;
          const v47942 = v44018.B;
          const v47946 = stdlib.safeMuldiv(v47930, v47933, v47941);
          const v47950 = stdlib.safeMuldiv(v47931, v47933, v47942);
          const v47951 = stdlib.lt(v47946, v47950);
          const v47952 = v47951 ? v47946 : v47950;
          v47929 = v47952;
          }
        const v47953 = stdlib.le(v47925, v47929);
        stdlib.assert(v47953, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        let v48772;
        const v48775 = v44017.A;
        if (v47935) {
          const v48779 = stdlib.cast("UInt", "UInt256", v47930, false, true);
          const v48780 = stdlib.cast("UInt", "UInt256", v47931, false, true);
          const v48781 = stdlib.safeMul256(v48779, v48780);
          const v48782 = stdlib.sqrt256(v48781);
          const v48783 = stdlib.cast("UInt256", "UInt", v48782, false, true);
          v48772 = v48783;
          }
        else {
          const v48784 = v44018.A;
          const v48785 = v44018.B;
          const v48789 = stdlib.safeMuldiv(v47930, v47933, v48784);
          const v48793 = stdlib.safeMuldiv(v47931, v47933, v48785);
          const v48794 = stdlib.lt(v48789, v48793);
          const v48795 = v48794 ? v48789 : v48793;
          v48772 = v48795;
          }
        const v48796 = stdlib.le(v47925, v48772);
        stdlib.assert(v48796, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v48799 = v44018.A;
        const v48803 = stdlib.safeAdd(v47930, v48799);
        const v48805 = v44018.B;
        const v48809 = stdlib.safeAdd(v47931, v48805);
        const v48810 = {
          A: v48803,
          B: v48809
          };
        const v48817 = stdlib.safeSub(v48775, v48772);
        const v48821 = stdlib.safeAdd(v47933, v48772);
        const v48822 = {
          A: v48817,
          B: v48821
          };
        ;
        await txn3.getOutput('Provider_deposit', 'v48772', ctc4, v48772);
        const v48868 = {
          A: v47930,
          B: v47931
          };
        const v48869 = {
          A: v48803,
          B: v48809
          };
        const v48870 = {
          A: v48817,
          B: v48821
          };
        null;
        const cv44016 = false;
        const cv44017 = v48822;
        const cv44018 = v48810;
        const cv44019 = v44019;
        const cv44020 = v44020;
        const cv44021 = v46043;
        const cv44024 = v44024;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_35418': {
        const v49695 = v46042[1];
        undefined /* setApiDetails */;
        const v49829 = v49695[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
        const v49830 = v49695[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
        const v49832 = v44017.B;
        const v49835 = v44018.A;
        const v49836 = v44018.B;
        const v49840 = stdlib.safeMuldiv(v49829, v49835, v49832);
        const v49844 = stdlib.safeMuldiv(v49829, v49836, v49832);
        const v49846 = v49830.A;
        const v49847 = stdlib.le(v49846, v49840);
        stdlib.assert(v49847, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage A',
          who: 'Admin'
          });
        const v49849 = v49830.B;
        const v49850 = stdlib.le(v49849, v49844);
        stdlib.assert(v49850, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage B',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v50704 = v44017.A;
        const v50732 = stdlib.safeAdd(v50704, v49829);
        const v50735 = stdlib.safeSub(v49832, v49829);
        const v50736 = {
          A: v50732,
          B: v50735
          };
        const v50741 = stdlib.safeSub(v49835, v49840);
        const v50745 = stdlib.safeSub(v49836, v49844);
        const v50746 = {
          A: v50741,
          B: v50745
          };
        ;
        ;
        const v50793 = {
          A: v49840,
          B: v49844
          };
        await txn3.getOutput('Provider_withdraw', 'v50793', ctc11, v50793);
        const v50806 = {
          A: v50741,
          B: v50745
          };
        const v50807 = {
          A: v50732,
          B: v50735
          };
        null;
        const cv44016 = false;
        const cv44017 = v50736;
        const cv44018 = v50746;
        const cv44019 = v44019;
        const cv44020 = v44020;
        const cv44021 = v46043;
        const cv44024 = v44024;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_35418': {
        const v51520 = v46042[1];
        undefined /* setApiDetails */;
        const v51716 = v51520[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
        const v51717 = v51520[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
        const v51719 = v44020.locked;
        const v51720 = v51719 ? false : true;
        stdlib.assert(v51720, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v51722 = v44018.A;
        const v51723 = v44018.B;
        const v51725 = v44020.protoFee;
        const v51726 = v44020.totFee;
        const v51727 = stdlib.safeSub(v51723, v51717);
        const v51728 = stdlib.cast("UInt", "UInt256", v51727, false, true);
        const v51729 = stdlib.cast("UInt", "UInt256", v51722, false, true);
        const v51730 = stdlib.cast("UInt", "UInt256", v51717, false, true);
        const v51731 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51726);
        const v51732 = stdlib.cast("UInt", "UInt256", v51731, false, true);
        const v51733 = stdlib.safeMul256(v51730, v51732);
        const v51734 = stdlib.safeMul256(v51728, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v51735 = stdlib.safeMul256(v51733, v51729);
        const v51736 = stdlib.safeDiv256(v51735, v51734);
        const v51737 = stdlib.cast("UInt256", "UInt", v51736, false, true);
        const v51738 = stdlib.safeAdd(v51737, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v51739 = stdlib.ge(v51716, v51738);
        stdlib.assert(v51739, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v51741 = stdlib.safeSub(v51716, v51738);
        const v51747 = stdlib.safeMul(v51725, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v51748 = stdlib.safeDiv(v51747, v51726);
        const v51753 = stdlib.safeAdd(v51722, v51738);
        const v51757 = stdlib.safeMuldiv(v51738, v51723, v51753);
        const v51760 = stdlib.safeSub(v51757, v51717);
        const v51762 = stdlib.safeMuldiv(v51760, v51748, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v51764 = stdlib.safeMuldiv(v51738, v51725, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v51768 = stdlib.safeMuldiv(v51764, v51723, v51753);
        const v51769 = stdlib.gt(v51768, v51762);
        const v51770 = [v51764, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v51771 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51762];
        const v51772 = v51769 ? v51770 : v51771;
        const v51774 = v51772[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v51775 = v51772[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v51783 = stdlib.safeAdd(v51722, v51716);
        const v51791 = stdlib.safeSub(v51783, v51741);
        const v51798 = stdlib.safeSub(v51791, v51774);
        const v51801 = stdlib.safeSub(v51727, v51775);
        const v51814 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v51741);
        const v51815 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v51717);
        const v51816 = v51814 ? v51815 : false;
        stdlib.assert(v51816, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v51821 = stdlib.cast("UInt", "UInt256", v51723, false, true);
        const v51822 = stdlib.safeMul256(v51729, v51821);
        const v51823 = stdlib.cast("UInt", "UInt256", v51798, false, true);
        const v51824 = stdlib.cast("UInt", "UInt256", v51801, false, true);
        const v51825 = stdlib.safeMul256(v51823, v51824);
        const v51826 = stdlib.ge256(v51825, v51822);
        stdlib.assert(v51826, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v52725 = {
          A: v51798,
          B: v51801
          };
        const v52726 = v44019.A;
        const v52730 = stdlib.safeAdd(v52726, v51774);
        const v52731 = v44019.B;
        const v52735 = stdlib.safeAdd(v52731, v51775);
        const v52736 = {
          A: v52730,
          B: v52735
          };
        ;
        ;
        const v52801 = {
          A: v51741,
          B: v51717
          };
        await txn3.getOutput('Trader_exactSwapAForB', 'v52801', ctc11, v52801);
        const v52811 = {
          A: v51716,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v52813 = {
          A: v51798,
          B: v51801
          };
        null;
        const cv44016 = false;
        const cv44017 = v44017;
        const cv44018 = v52725;
        const cv44019 = v52736;
        const cv44020 = v44020;
        const cv44021 = v46043;
        const cv44024 = v44024;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_35418': {
        const v53345 = v46042[1];
        undefined /* setApiDetails */;
        const v53674 = v53345[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
        const v53675 = v53345[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
        const v53677 = v44020.locked;
        const v53678 = v53677 ? false : true;
        stdlib.assert(v53678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v53680 = v44018.A;
        const v53681 = v44018.B;
        const v53683 = v44020.protoFee;
        const v53684 = v44020.totFee;
        const v53685 = stdlib.safeSub(v53680, v53675);
        const v53686 = stdlib.cast("UInt", "UInt256", v53685, false, true);
        const v53687 = stdlib.cast("UInt", "UInt256", v53681, false, true);
        const v53688 = stdlib.cast("UInt", "UInt256", v53675, false, true);
        const v53689 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53684);
        const v53690 = stdlib.cast("UInt", "UInt256", v53689, false, true);
        const v53691 = stdlib.safeMul256(v53688, v53690);
        const v53692 = stdlib.safeMul256(v53686, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v53693 = stdlib.safeMul256(v53691, v53687);
        const v53694 = stdlib.safeDiv256(v53693, v53692);
        const v53695 = stdlib.cast("UInt256", "UInt", v53694, false, true);
        const v53696 = stdlib.safeAdd(v53695, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v53697 = stdlib.ge(v53674, v53696);
        stdlib.assert(v53697, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v53699 = stdlib.safeSub(v53674, v53696);
        const v53705 = stdlib.safeMul(v53683, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v53706 = stdlib.safeDiv(v53705, v53684);
        const v53711 = stdlib.safeAdd(v53681, v53696);
        const v53715 = stdlib.safeMuldiv(v53696, v53680, v53711);
        const v53718 = stdlib.safeSub(v53715, v53675);
        const v53720 = stdlib.safeMuldiv(v53718, v53706, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v53722 = stdlib.safeMuldiv(v53696, v53683, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v53726 = stdlib.safeMuldiv(v53722, v53680, v53711);
        const v53727 = stdlib.gt(v53726, v53720);
        const v53728 = [v53722, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v53729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53720];
        const v53730 = v53727 ? v53728 : v53729;
        const v53732 = v53730[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v53733 = v53730[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v53745 = stdlib.safeAdd(v53681, v53674);
        const v53752 = stdlib.safeSub(v53745, v53699);
        const v53756 = stdlib.safeSub(v53685, v53733);
        const v53759 = stdlib.safeSub(v53752, v53732);
        const v53772 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v53675);
        const v53773 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v53699);
        const v53774 = v53772 ? v53773 : false;
        stdlib.assert(v53774, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v53778 = stdlib.cast("UInt", "UInt256", v53680, false, true);
        const v53780 = stdlib.safeMul256(v53778, v53687);
        const v53781 = stdlib.cast("UInt", "UInt256", v53756, false, true);
        const v53782 = stdlib.cast("UInt", "UInt256", v53759, false, true);
        const v53783 = stdlib.safeMul256(v53781, v53782);
        const v53784 = stdlib.ge256(v53783, v53780);
        stdlib.assert(v53784, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v54734 = {
          A: v53756,
          B: v53759
          };
        const v54735 = v44019.A;
        const v54739 = stdlib.safeAdd(v54735, v53733);
        const v54740 = v44019.B;
        const v54744 = stdlib.safeAdd(v54740, v53732);
        const v54745 = {
          A: v54739,
          B: v54744
          };
        ;
        ;
        const v54810 = {
          A: v53675,
          B: v53699
          };
        await txn3.getOutput('Trader_exactSwapBForA', 'v54810', ctc11, v54810);
        const v54820 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v53674
          };
        const v54822 = {
          A: v53756,
          B: v53759
          };
        null;
        const cv44016 = false;
        const cv44017 = v44017;
        const cv44018 = v54734;
        const cv44019 = v54745;
        const cv44020 = v44020;
        const cv44021 = v46043;
        const cv44024 = v44024;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_35418': {
        const v55170 = v46042[1];
        undefined /* setApiDetails */;
        const v55632 = v55170[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
        const v55633 = v55170[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
        const v55636 = v44020.locked;
        const v55637 = v55636 ? false : true;
        stdlib.assert(v55637, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v55639 = v44018.A;
        const v55640 = v44018.B;
        const v55642 = v44020.protoFee;
        const v55643 = v44020.totFee;
        const v55644 = stdlib.cast("UInt", "UInt256", v55640, false, true);
        const v55645 = stdlib.cast("UInt", "UInt256", v55639, false, true);
        const v55646 = stdlib.cast("UInt", "UInt256", v55632, false, true);
        const v55647 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55643);
        const v55648 = stdlib.cast("UInt", "UInt256", v55647, false, true);
        const v55649 = stdlib.safeMul256(v55646, v55648);
        const v55650 = stdlib.safeMul256(v55645, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v55651 = stdlib.safeAdd256(v55650, v55649);
        const v55652 = stdlib.safeMul256(v55649, v55644);
        const v55653 = stdlib.safeDiv256(v55652, v55651);
        const v55654 = stdlib.cast("UInt256", "UInt", v55653, false, true);
        const v55660 = stdlib.safeMul(v55642, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v55661 = stdlib.safeDiv(v55660, v55643);
        const v55666 = stdlib.safeAdd(v55639, v55632);
        const v55670 = stdlib.safeMuldiv(v55632, v55640, v55666);
        const v55673 = stdlib.safeSub(v55670, v55654);
        const v55675 = stdlib.safeMuldiv(v55673, v55661, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v55677 = stdlib.safeMuldiv(v55632, v55642, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v55681 = stdlib.safeMuldiv(v55677, v55640, v55666);
        const v55682 = stdlib.gt(v55681, v55675);
        const v55683 = [v55677, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v55684 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55675];
        const v55685 = v55682 ? v55683 : v55684;
        const v55687 = v55685[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v55688 = v55685[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v55706 = stdlib.safeSub(v55640, v55654);
        const v55710 = stdlib.safeSub(v55666, v55687);
        const v55713 = stdlib.safeSub(v55706, v55688);
        const v55726 = stdlib.le(v55633, v55654);
        stdlib.assert(v55726, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v55732 = stdlib.safeMul256(v55645, v55644);
        const v55733 = stdlib.cast("UInt", "UInt256", v55710, false, true);
        const v55734 = stdlib.cast("UInt", "UInt256", v55713, false, true);
        const v55735 = stdlib.safeMul256(v55733, v55734);
        const v55736 = stdlib.ge256(v55735, v55732);
        stdlib.assert(v55736, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v56739 = {
          A: v55710,
          B: v55713
          };
        const v56740 = v44019.A;
        const v56744 = stdlib.safeAdd(v56740, v55687);
        const v56745 = v44019.B;
        const v56749 = stdlib.safeAdd(v56745, v55688);
        const v56750 = {
          A: v56744,
          B: v56749
          };
        ;
        const v56804 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v55654
          };
        await txn3.getOutput('Trader_swapAForB', 'v56804', ctc11, v56804);
        const v56814 = {
          A: v55632,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v56816 = {
          A: v55710,
          B: v55713
          };
        null;
        const cv44016 = false;
        const cv44017 = v44017;
        const cv44018 = v56739;
        const cv44019 = v56750;
        const cv44020 = v44020;
        const cv44021 = v46043;
        const cv44024 = v44024;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_35418': {
        const v56995 = v46042[1];
        undefined /* setApiDetails */;
        const v57584 = v56995[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
        const v57585 = v56995[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
        const v57588 = v44020.locked;
        const v57589 = v57588 ? false : true;
        stdlib.assert(v57589, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v57591 = v44018.A;
        const v57592 = v44018.B;
        const v57594 = v44020.protoFee;
        const v57595 = v44020.totFee;
        const v57596 = stdlib.cast("UInt", "UInt256", v57591, false, true);
        const v57597 = stdlib.cast("UInt", "UInt256", v57592, false, true);
        const v57598 = stdlib.cast("UInt", "UInt256", v57584, false, true);
        const v57599 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57595);
        const v57600 = stdlib.cast("UInt", "UInt256", v57599, false, true);
        const v57601 = stdlib.safeMul256(v57598, v57600);
        const v57602 = stdlib.safeMul256(v57597, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v57603 = stdlib.safeAdd256(v57602, v57601);
        const v57604 = stdlib.safeMul256(v57601, v57596);
        const v57605 = stdlib.safeDiv256(v57604, v57603);
        const v57606 = stdlib.cast("UInt256", "UInt", v57605, false, true);
        const v57612 = stdlib.safeMul(v57594, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v57613 = stdlib.safeDiv(v57612, v57595);
        const v57618 = stdlib.safeAdd(v57592, v57584);
        const v57622 = stdlib.safeMuldiv(v57584, v57591, v57618);
        const v57625 = stdlib.safeSub(v57622, v57606);
        const v57627 = stdlib.safeMuldiv(v57625, v57613, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v57629 = stdlib.safeMuldiv(v57584, v57594, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v57633 = stdlib.safeMuldiv(v57629, v57591, v57618);
        const v57634 = stdlib.gt(v57633, v57627);
        const v57635 = [v57629, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v57636 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57627];
        const v57637 = v57634 ? v57635 : v57636;
        const v57639 = v57637[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v57640 = v57637[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v57656 = stdlib.safeSub(v57591, v57606);
        const v57662 = stdlib.safeSub(v57656, v57640);
        const v57665 = stdlib.safeSub(v57618, v57639);
        const v57678 = stdlib.le(v57585, v57606);
        stdlib.assert(v57678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v57685 = stdlib.safeMul256(v57596, v57597);
        const v57686 = stdlib.cast("UInt", "UInt256", v57662, false, true);
        const v57687 = stdlib.cast("UInt", "UInt256", v57665, false, true);
        const v57688 = stdlib.safeMul256(v57686, v57687);
        const v57689 = stdlib.ge256(v57688, v57685);
        stdlib.assert(v57689, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v58733 = {
          A: v57662,
          B: v57665
          };
        const v58734 = v44019.A;
        const v58738 = stdlib.safeAdd(v58734, v57640);
        const v58739 = v44019.B;
        const v58743 = stdlib.safeAdd(v58739, v57639);
        const v58744 = {
          A: v58738,
          B: v58743
          };
        ;
        const v58799 = {
          A: v57606,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v58799', ctc11, v58799);
        const v58809 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v57584
          };
        const v58811 = {
          A: v57662,
          B: v57665
          };
        null;
        const cv44016 = false;
        const cv44017 = v44017;
        const cv44018 = v58733;
        const cv44019 = v58744;
        const cv44020 = v44020;
        const cv44021 = v46043;
        const cv44024 = v44024;
        
        v44016 = cv44016;
        v44017 = cv44017;
        v44018 = cv44018;
        v44019 = cv44019;
        v44020 = cv44020;
        v44021 = cv44021;
        v44024 = cv44024;
        
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
  const {data: [v59174], secs: v59176, time: v59175, didSend: v43368, from: v59173 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v59177 = null;
  await txn3.getOutput('Protocol_delete', 'v59177', ctc9, v59177);
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
  
  
  const [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v59172 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:605:3:application',
    fs: ['at ./index.rsh:605:3:application call to [unknown function] (defined at: ./index.rsh:605:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44017, v44018, v44019, v44020, v59172],
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
      
      
      const {data: [v59174], secs: v59176, time: v59175, didSend: v43368, from: v59173 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v59177 = null;
      const v59178 = await txn1.getOutput('Protocol_delete', 'v59177', ctc1, v59177);
      
      stdlib.simTokenBurn(sim_r, v43987, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v43987);
      sim_r.txns.push({
        kind: 'halt',
        tok: v43933
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v43932
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
  const {data: [v59174], secs: v59176, time: v59175, didSend: v43368, from: v59173 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v59177 = null;
  const v59178 = await txn1.getOutput('Protocol_delete', 'v59177', ctc1, v59177);
  stdlib.protect(ctc1, await interact.out(v59174, v59178), {
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
    Protocol_harvest0_35418: ctc8,
    Provider_deposit0_35418: ctc10,
    Provider_withdraw0_35418: ctc11,
    Trader_exactSwapAForB0_35418: ctc12,
    Trader_exactSwapBForA0_35418: ctc12,
    Trader_swapAForB0_35418: ctc12,
    Trader_swapBForA0_35418: ctc12
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44443 = ctc.selfAddress();
  const v44445 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35418" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v44447 = v44445[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44448 = v44447.protoFee;
  const v44449 = v44447.lpFee;
  const v44450 = v44447.totFee;
  const v44451 = stdlib.lt(v44448, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v44452 = stdlib.lt(v44449, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v44453 = v44451 ? v44452 : false;
  let v44454;
  if (v44453) {
    const v44455 = stdlib.safeAdd(v44449, v44448);
    const v44456 = stdlib.eq(v44450, v44455);
    v44454 = v44456;
    }
  else {
    v44454 = false;
    }
  const v44457 = stdlib.lt(v44450, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v44458 = v44454 ? v44457 : false;
  const v44459 = stdlib.gt(v44450, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v44460 = v44458 ? v44459 : false;
  stdlib.assert(v44460, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35418" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v44463 = v44020.protoAddr;
  const v44464 = stdlib.addressEq(v44443, v44463);
  stdlib.assert(v44464, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35418" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v44472;
  if (v44453) {
    const v44473 = stdlib.safeAdd(v44449, v44448);
    const v44474 = stdlib.eq(v44450, v44473);
    v44472 = v44474;
    }
  else {
    v44472 = false;
    }
  const v44476 = v44472 ? v44457 : false;
  const v44478 = v44476 ? v44459 : false;
  stdlib.assert(v44478, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35418" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v44505 = ['Protocol_harvest0_35418', v44445];
  
  let v45166;
  if (v44453) {
    const v45167 = stdlib.safeAdd(v44449, v44448);
    const v45168 = stdlib.eq(v44450, v45167);
    v45166 = v45168;
    }
  else {
    v45166 = false;
    }
  const v45170 = v45166 ? v44457 : false;
  const v45172 = v45170 ? v44459 : false;
  stdlib.assert(v45172, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v44505],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:488:26:decimal', stdlib.UInt_max, '0'), v43987], [stdlib.checkedBigNumberify('./index.rsh:488:29:decimal', stdlib.UInt_max, '0'), v43932], [stdlib.checkedBigNumberify('./index.rsh:488:32:decimal', stdlib.UInt_max, '0'), v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          const v46051 = v46045[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
          const v46055 = v46051.protoFee;
          const v46056 = v46051.lpFee;
          const v46057 = v46051.totFee;
          ;
          ;
          ;
          ;
          const v46817 = v46045[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
          const v46837 = v44017.B;
          const v46840 = v46051.locked;
          const v46841 = stdlib.eq(v46837, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
          const v46842 = v46840 ? v46841 : false;
          const v46843 = v44018.A;
          const v46844 = v44018.B;
          const v46845 = stdlib.eq(v46843, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
          const v46846 = stdlib.eq(v46844, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
          const v46847 = v46845 ? v46846 : false;
          const v46848 = v46842 ? v46847 : false;
          const v46852 = (stdlib.le(await ctc.getBalance(), v44024) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v44024));
          const v46853 = stdlib.safeAdd(v46852, v44024);
          const v46854 = v44019.A;
          const v46855 = v44019.B;
          const v46885 = stdlib.sub(v46853, v46852);
          sim_r.txns.push({
            kind: 'from',
            to: v46817,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46817,
            tok: v43932
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46817,
            tok: v43933
            });
          const v46906 = {
            A: v46854,
            B: v46855
            };
          const v46907 = [v46906, v46852];
          const v46908 = await txn1.getOutput('Protocol_harvest', 'v46907', ctc10, v46907);
          
          const v46935 = v46051.protoAddr;
          const v46937 = {
            locked: v46840,
            lpFee: v46056,
            protoAddr: v46935,
            protoFee: v46055,
            totFee: v46057
            };
          null;
          const v66960 = v44017;
          const v66961 = v44018;
          const v66962 = v44014;
          const v66963 = v46051;
          const v66965 = v46885;
          if (v46848) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      undefined /* setApiDetails */;
      const v46051 = v46045[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
      const v46052 = v44020.protoAddr;
      const v46053 = stdlib.addressEq(v46041, v46052);
      stdlib.assert(v46053, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v46055 = v46051.protoFee;
      const v46056 = v46051.lpFee;
      const v46057 = v46051.totFee;
      const v46058 = stdlib.lt(v46055, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v46059 = stdlib.lt(v46056, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v46060 = v46058 ? v46059 : false;
      let v46061;
      if (v46060) {
        const v46062 = stdlib.safeAdd(v46056, v46055);
        const v46063 = stdlib.eq(v46057, v46062);
        v46061 = v46063;
        }
      else {
        v46061 = false;
        }
      const v46064 = stdlib.lt(v46057, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v46065 = v46061 ? v46064 : false;
      const v46066 = stdlib.gt(v46057, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v46067 = v46065 ? v46066 : false;
      stdlib.assert(v46067, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      ;
      ;
      ;
      ;
      const v46817 = v46045[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
      let v46828;
      if (v46060) {
        const v46829 = stdlib.safeAdd(v46056, v46055);
        const v46830 = stdlib.eq(v46057, v46829);
        v46828 = v46830;
        }
      else {
        v46828 = false;
        }
      const v46832 = v46828 ? v46064 : false;
      const v46834 = v46832 ? v46066 : false;
      stdlib.assert(v46834, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v46837 = v44017.B;
      const v46840 = v46051.locked;
      const v46841 = stdlib.eq(v46837, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
      const v46842 = v46840 ? v46841 : false;
      const v46843 = v44018.A;
      const v46844 = v44018.B;
      const v46845 = stdlib.eq(v46843, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
      const v46846 = stdlib.eq(v46844, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
      const v46847 = v46845 ? v46846 : false;
      const v46848 = v46842 ? v46847 : false;
      const v46852 = (stdlib.le(await ctc.getBalance(), v44024) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v44024));
      const v46853 = stdlib.safeAdd(v46852, v44024);
      const v46854 = v44019.A;
      const v46855 = v44019.B;
      const v46885 = stdlib.sub(v46853, v46852);
      ;
      ;
      ;
      const v46906 = {
        A: v46854,
        B: v46855
        };
      const v46907 = [v46906, v46852];
      const v46908 = await txn1.getOutput('Protocol_harvest', 'v46907', ctc10, v46907);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v46045, v46908), {
          at: './index.rsh:482:11:application',
          fs: ['at ./index.rsh:482:11:application call to [unknown function] (defined at: ./index.rsh:482:11:function exp)', 'at ./index.rsh:491:12:application call to "k" (defined at: ./index.rsh:488:40:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v46935 = v46051.protoAddr;
      const v46937 = {
        locked: v46840,
        lpFee: v46056,
        protoAddr: v46935,
        protoFee: v46055,
        totFee: v46057
        };
      null;
      const v66960 = v44017;
      const v66961 = v44018;
      const v66962 = v44014;
      const v66963 = v46051;
      const v66965 = v46885;
      if (v46848) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
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
    Protocol_harvest0_35418: ctc10,
    Provider_deposit0_35418: ctc9,
    Provider_withdraw0_35418: ctc11,
    Trader_exactSwapAForB0_35418: ctc12,
    Trader_exactSwapBForA0_35418: ctc12,
    Trader_swapAForB0_35418: ctc12,
    Trader_swapBForA0_35418: ctc12
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44572 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35418" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v44573 = v44572[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44574 = v44572[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44575 = v44573.A;
  const v44576 = v44573.B;
  const v44579 = v44020.locked;
  const v44580 = v44579 ? false : true;
  stdlib.assert(v44580, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35418" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  let v44582;
  const v44586 = v44017.B;
  const v44588 = stdlib.eq(v44586, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
  if (v44588) {
    const v44589 = stdlib.cast("UInt", "UInt256", v44575, false, true);
    const v44590 = stdlib.cast("UInt", "UInt256", v44576, false, true);
    const v44591 = stdlib.safeMul256(v44589, v44590);
    const v44592 = stdlib.sqrt256(v44591);
    const v44593 = stdlib.cast("UInt256", "UInt", v44592, false, true);
    v44582 = v44593;
    }
  else {
    const v44594 = v44018.A;
    const v44595 = v44018.B;
    const v44599 = stdlib.safeMuldiv(v44575, v44586, v44594);
    const v44603 = stdlib.safeMuldiv(v44576, v44586, v44595);
    const v44604 = stdlib.lt(v44599, v44603);
    const v44605 = v44604 ? v44599 : v44603;
    v44582 = v44605;
    }
  const v44606 = stdlib.le(v44574, v44582);
  stdlib.assert(v44606, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35418" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v44609 = v44018.A;
  const v44615 = v44018.B;
  const v44643 = ['Provider_deposit0_35418', v44572];
  
  let v45234;
  if (v44588) {
    const v45241 = stdlib.cast("UInt", "UInt256", v44575, false, true);
    const v45242 = stdlib.cast("UInt", "UInt256", v44576, false, true);
    const v45243 = stdlib.safeMul256(v45241, v45242);
    const v45244 = stdlib.sqrt256(v45243);
    const v45245 = stdlib.cast("UInt256", "UInt", v45244, false, true);
    v45234 = v45245;
    }
  else {
    const v45251 = stdlib.safeMuldiv(v44575, v44586, v44609);
    const v45255 = stdlib.safeMuldiv(v44576, v44586, v44615);
    const v45256 = stdlib.lt(v45251, v45255);
    const v45257 = v45256 ? v45251 : v45255;
    v45234 = v45257;
    }
  const v45258 = stdlib.le(v44574, v45234);
  stdlib.assert(v45258, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v44643],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:436:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:436:50:decimal', stdlib.UInt_max, '0'), v43987], [v44575, v43932], [v44576, v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v47924 = v47870[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
          const v47930 = v47924.A;
          const v47931 = v47924.B;
          const v47933 = v44017.B;
          const v47935 = stdlib.eq(v47933, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          sim_r.txns.push({
            amt: v47930,
            kind: 'to',
            tok: v43932
            });
          sim_r.txns.push({
            amt: v47931,
            kind: 'to',
            tok: v43933
            });
          let v48772;
          const v48775 = v44017.A;
          if (v47935) {
            const v48779 = stdlib.cast("UInt", "UInt256", v47930, false, true);
            const v48780 = stdlib.cast("UInt", "UInt256", v47931, false, true);
            const v48781 = stdlib.safeMul256(v48779, v48780);
            const v48782 = stdlib.sqrt256(v48781);
            const v48783 = stdlib.cast("UInt256", "UInt", v48782, false, true);
            v48772 = v48783;
            }
          else {
            const v48784 = v44018.A;
            const v48785 = v44018.B;
            const v48789 = stdlib.safeMuldiv(v47930, v47933, v48784);
            const v48793 = stdlib.safeMuldiv(v47931, v47933, v48785);
            const v48794 = stdlib.lt(v48789, v48793);
            const v48795 = v48794 ? v48789 : v48793;
            v48772 = v48795;
            }
          const v48799 = v44018.A;
          const v48803 = stdlib.safeAdd(v47930, v48799);
          const v48805 = v44018.B;
          const v48809 = stdlib.safeAdd(v47931, v48805);
          const v48810 = {
            A: v48803,
            B: v48809
            };
          const v48817 = stdlib.safeSub(v48775, v48772);
          const v48821 = stdlib.safeAdd(v47933, v48772);
          const v48822 = {
            A: v48817,
            B: v48821
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43987
            });
          const v48857 = await txn1.getOutput('Provider_deposit', 'v48772', ctc3, v48772);
          
          const v48868 = {
            A: v47930,
            B: v47931
            };
          const v48869 = {
            A: v48803,
            B: v48809
            };
          const v48870 = {
            A: v48817,
            B: v48821
            };
          null;
          const v67080 = v48822;
          const v67081 = v48810;
          const v67082 = v44019;
          const v67083 = v44020;
          const v67085 = v44024;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      return;
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      undefined /* setApiDetails */;
      const v47924 = v47870[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
      const v47925 = v47870[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
      const v47926 = v44020.locked;
      const v47927 = v47926 ? false : true;
      stdlib.assert(v47927, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      let v47929;
      const v47930 = v47924.A;
      const v47931 = v47924.B;
      const v47933 = v44017.B;
      const v47935 = stdlib.eq(v47933, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
      if (v47935) {
        const v47936 = stdlib.cast("UInt", "UInt256", v47930, false, true);
        const v47937 = stdlib.cast("UInt", "UInt256", v47931, false, true);
        const v47938 = stdlib.safeMul256(v47936, v47937);
        const v47939 = stdlib.sqrt256(v47938);
        const v47940 = stdlib.cast("UInt256", "UInt", v47939, false, true);
        v47929 = v47940;
        }
      else {
        const v47941 = v44018.A;
        const v47942 = v44018.B;
        const v47946 = stdlib.safeMuldiv(v47930, v47933, v47941);
        const v47950 = stdlib.safeMuldiv(v47931, v47933, v47942);
        const v47951 = stdlib.lt(v47946, v47950);
        const v47952 = v47951 ? v47946 : v47950;
        v47929 = v47952;
        }
      const v47953 = stdlib.le(v47925, v47929);
      stdlib.assert(v47953, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      ;
      ;
      ;
      ;
      let v48772;
      const v48775 = v44017.A;
      if (v47935) {
        const v48779 = stdlib.cast("UInt", "UInt256", v47930, false, true);
        const v48780 = stdlib.cast("UInt", "UInt256", v47931, false, true);
        const v48781 = stdlib.safeMul256(v48779, v48780);
        const v48782 = stdlib.sqrt256(v48781);
        const v48783 = stdlib.cast("UInt256", "UInt", v48782, false, true);
        v48772 = v48783;
        }
      else {
        const v48784 = v44018.A;
        const v48785 = v44018.B;
        const v48789 = stdlib.safeMuldiv(v47930, v47933, v48784);
        const v48793 = stdlib.safeMuldiv(v47931, v47933, v48785);
        const v48794 = stdlib.lt(v48789, v48793);
        const v48795 = v48794 ? v48789 : v48793;
        v48772 = v48795;
        }
      const v48796 = stdlib.le(v47925, v48772);
      stdlib.assert(v48796, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v48799 = v44018.A;
      const v48803 = stdlib.safeAdd(v47930, v48799);
      const v48805 = v44018.B;
      const v48809 = stdlib.safeAdd(v47931, v48805);
      const v48810 = {
        A: v48803,
        B: v48809
        };
      const v48817 = stdlib.safeSub(v48775, v48772);
      const v48821 = stdlib.safeAdd(v47933, v48772);
      const v48822 = {
        A: v48817,
        B: v48821
        };
      ;
      const v48857 = await txn1.getOutput('Provider_deposit', 'v48772', ctc3, v48772);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v47870, v48857), {
          at: './index.rsh:510:11:application',
          fs: ['at ./index.rsh:510:11:application call to [unknown function] (defined at: ./index.rsh:510:11:function exp)', 'at ./index.rsh:519:10:application call to "k" (defined at: ./index.rsh:517:39:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v48868 = {
        A: v47930,
        B: v47931
        };
      const v48869 = {
        A: v48803,
        B: v48809
        };
      const v48870 = {
        A: v48817,
        B: v48821
        };
      null;
      const v67080 = v48822;
      const v67081 = v48810;
      const v67082 = v44019;
      const v67083 = v44020;
      const v67085 = v44024;
      return;
      
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
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
    Protocol_harvest0_35418: ctc10,
    Provider_deposit0_35418: ctc11,
    Provider_withdraw0_35418: ctc9,
    Trader_exactSwapAForB0_35418: ctc12,
    Trader_exactSwapBForA0_35418: ctc12,
    Trader_swapAForB0_35418: ctc12,
    Trader_swapBForA0_35418: ctc12
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44509 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35418" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v44510 = v44509[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44511 = v44509[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44512 = v44511.A;
  const v44513 = v44511.B;
  const v44517 = v44017.B;
  const v44520 = v44018.A;
  const v44521 = v44018.B;
  const v44525 = stdlib.safeMuldiv(v44510, v44520, v44517);
  const v44529 = stdlib.safeMuldiv(v44510, v44521, v44517);
  const v44532 = stdlib.le(v44512, v44525);
  stdlib.assert(v44532, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35418" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage A',
    who: 'Provider_withdraw'
    });
  const v44535 = stdlib.le(v44513, v44529);
  stdlib.assert(v44535, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35418" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage B',
    who: 'Provider_withdraw'
    });
  const v44568 = ['Provider_withdraw0_35418', v44509];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v44568],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[v44510, v43987], [stdlib.checkedBigNumberify('./index.rsh:503:28:decimal', stdlib.UInt_max, '0'), v43932], [stdlib.checkedBigNumberify('./index.rsh:503:31:decimal', stdlib.UInt_max, '0'), v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v49829 = v49695[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
          const v49832 = v44017.B;
          const v49835 = v44018.A;
          const v49836 = v44018.B;
          const v49840 = stdlib.safeMuldiv(v49829, v49835, v49832);
          const v49844 = stdlib.safeMuldiv(v49829, v49836, v49832);
          ;
          sim_r.txns.push({
            amt: v49829,
            kind: 'to',
            tok: v43987
            });
          ;
          ;
          const v50704 = v44017.A;
          const v50732 = stdlib.safeAdd(v50704, v49829);
          const v50735 = stdlib.safeSub(v49832, v49829);
          const v50736 = {
            A: v50732,
            B: v50735
            };
          const v50741 = stdlib.safeSub(v49835, v49840);
          const v50745 = stdlib.safeSub(v49836, v49844);
          const v50746 = {
            A: v50741,
            B: v50745
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43932
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43933
            });
          const v50793 = {
            A: v49840,
            B: v49844
            };
          const v50794 = await txn1.getOutput('Provider_withdraw', 'v50793', ctc8, v50793);
          
          const v50806 = {
            A: v50741,
            B: v50745
            };
          const v50807 = {
            A: v50732,
            B: v50735
            };
          null;
          const v67200 = v50736;
          const v67201 = v50746;
          const v67202 = v44019;
          const v67203 = v44020;
          const v67205 = v44024;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      return;
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      undefined /* setApiDetails */;
      const v49829 = v49695[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
      const v49830 = v49695[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
      const v49832 = v44017.B;
      const v49835 = v44018.A;
      const v49836 = v44018.B;
      const v49840 = stdlib.safeMuldiv(v49829, v49835, v49832);
      const v49844 = stdlib.safeMuldiv(v49829, v49836, v49832);
      const v49846 = v49830.A;
      const v49847 = stdlib.le(v49846, v49840);
      stdlib.assert(v49847, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage A',
        who: 'Provider_withdraw'
        });
      const v49849 = v49830.B;
      const v49850 = stdlib.le(v49849, v49844);
      stdlib.assert(v49850, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage B',
        who: 'Provider_withdraw'
        });
      ;
      ;
      ;
      ;
      const v50704 = v44017.A;
      const v50732 = stdlib.safeAdd(v50704, v49829);
      const v50735 = stdlib.safeSub(v49832, v49829);
      const v50736 = {
        A: v50732,
        B: v50735
        };
      const v50741 = stdlib.safeSub(v49835, v49840);
      const v50745 = stdlib.safeSub(v49836, v49844);
      const v50746 = {
        A: v50741,
        B: v50745
        };
      ;
      ;
      const v50793 = {
        A: v49840,
        B: v49844
        };
      const v50794 = await txn1.getOutput('Provider_withdraw', 'v50793', ctc8, v50793);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v49695, v50794), {
          at: './index.rsh:496:11:application',
          fs: ['at ./index.rsh:496:11:application call to [unknown function] (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:505:10:application call to "k" (defined at: ./index.rsh:503:39:function exp)', 'at ./index.rsh:503:39:application call to [unknown function] (defined at: ./index.rsh:503:39:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v50806 = {
        A: v50741,
        B: v50745
        };
      const v50807 = {
        A: v50732,
        B: v50735
        };
      null;
      const v67200 = v50736;
      const v67201 = v50746;
      const v67202 = v44019;
      const v67203 = v44020;
      const v67205 = v44024;
      return;
      
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
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
    Protocol_harvest0_35418: ctc9,
    Provider_deposit0_35418: ctc11,
    Provider_withdraw0_35418: ctc12,
    Trader_exactSwapAForB0_35418: ctc8,
    Trader_exactSwapBForA0_35418: ctc8,
    Trader_swapAForB0_35418: ctc8,
    Trader_swapBForA0_35418: ctc8
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44896 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35418" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v44897 = v44896[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44898 = v44896[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44902 = v44020.locked;
  const v44903 = v44902 ? false : true;
  stdlib.assert(v44903, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35418" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapAForB'
    });
  const v44905 = v44018.A;
  const v44906 = v44018.B;
  const v44908 = v44020.protoFee;
  const v44909 = v44020.totFee;
  const v44910 = stdlib.safeSub(v44906, v44898);
  const v44911 = stdlib.cast("UInt", "UInt256", v44910, false, true);
  const v44912 = stdlib.cast("UInt", "UInt256", v44905, false, true);
  const v44913 = stdlib.cast("UInt", "UInt256", v44898, false, true);
  const v44914 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44909);
  const v44915 = stdlib.cast("UInt", "UInt256", v44914, false, true);
  const v44916 = stdlib.safeMul256(v44913, v44915);
  const v44917 = stdlib.safeMul256(v44911, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44918 = stdlib.safeMul256(v44916, v44912);
  const v44919 = stdlib.safeDiv256(v44918, v44917);
  const v44920 = stdlib.cast("UInt256", "UInt", v44919, false, true);
  const v44921 = stdlib.safeAdd(v44920, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v44922 = stdlib.ge(v44897, v44921);
  stdlib.assert(v44922, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35418" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapAForB'
    });
  const v44924 = stdlib.safeSub(v44897, v44921);
  const v44930 = stdlib.safeMul(v44908, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44931 = stdlib.safeDiv(v44930, v44909);
  const v44936 = stdlib.safeAdd(v44905, v44921);
  const v44940 = stdlib.safeMuldiv(v44921, v44906, v44936);
  const v44943 = stdlib.safeSub(v44940, v44898);
  const v44945 = stdlib.safeMuldiv(v44943, v44931, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44947 = stdlib.safeMuldiv(v44921, v44908, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44951 = stdlib.safeMuldiv(v44947, v44906, v44936);
  const v44952 = stdlib.gt(v44951, v44945);
  const v44953 = [v44947, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44954 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44945];
  const v44955 = v44952 ? v44953 : v44954;
  const v44957 = v44955[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v44958 = v44955[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v44966 = stdlib.safeAdd(v44905, v44897);
  const v44974 = stdlib.safeSub(v44966, v44924);
  const v44981 = stdlib.safeSub(v44974, v44957);
  const v44984 = stdlib.safeSub(v44910, v44958);
  const v44997 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44924);
  const v44998 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44898);
  const v44999 = v44997 ? v44998 : false;
  stdlib.assert(v44999, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35418" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapAForB'
    });
  const v45004 = stdlib.cast("UInt", "UInt256", v44906, false, true);
  const v45005 = stdlib.safeMul256(v44912, v45004);
  const v45006 = stdlib.cast("UInt", "UInt256", v44981, false, true);
  const v45007 = stdlib.cast("UInt", "UInt256", v44984, false, true);
  const v45008 = stdlib.safeMul256(v45006, v45007);
  const v45009 = stdlib.ge256(v45008, v45005);
  stdlib.assert(v45009, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35418" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapAForB'
    });
  const v45022 = ['Trader_exactSwapAForB0_35418', v44896];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v45022],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:596:24:decimal', stdlib.UInt_max, '0'), v43987], [v44897, v43932], [stdlib.checkedBigNumberify('./index.rsh:596:30:decimal', stdlib.UInt_max, '0'), v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          const v51716 = v51520[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
          const v51717 = v51520[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
          const v51722 = v44018.A;
          const v51723 = v44018.B;
          const v51725 = v44020.protoFee;
          const v51726 = v44020.totFee;
          const v51727 = stdlib.safeSub(v51723, v51717);
          const v51728 = stdlib.cast("UInt", "UInt256", v51727, false, true);
          const v51729 = stdlib.cast("UInt", "UInt256", v51722, false, true);
          const v51730 = stdlib.cast("UInt", "UInt256", v51717, false, true);
          const v51731 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51726);
          const v51732 = stdlib.cast("UInt", "UInt256", v51731, false, true);
          const v51733 = stdlib.safeMul256(v51730, v51732);
          const v51734 = stdlib.safeMul256(v51728, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v51735 = stdlib.safeMul256(v51733, v51729);
          const v51736 = stdlib.safeDiv256(v51735, v51734);
          const v51737 = stdlib.cast("UInt256", "UInt", v51736, false, true);
          const v51738 = stdlib.safeAdd(v51737, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v51741 = stdlib.safeSub(v51716, v51738);
          const v51747 = stdlib.safeMul(v51725, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v51748 = stdlib.safeDiv(v51747, v51726);
          const v51753 = stdlib.safeAdd(v51722, v51738);
          const v51757 = stdlib.safeMuldiv(v51738, v51723, v51753);
          const v51760 = stdlib.safeSub(v51757, v51717);
          const v51762 = stdlib.safeMuldiv(v51760, v51748, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v51764 = stdlib.safeMuldiv(v51738, v51725, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v51768 = stdlib.safeMuldiv(v51764, v51723, v51753);
          const v51769 = stdlib.gt(v51768, v51762);
          const v51770 = [v51764, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v51771 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51762];
          const v51772 = v51769 ? v51770 : v51771;
          const v51774 = v51772[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v51775 = v51772[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v51783 = stdlib.safeAdd(v51722, v51716);
          const v51791 = stdlib.safeSub(v51783, v51741);
          const v51798 = stdlib.safeSub(v51791, v51774);
          const v51801 = stdlib.safeSub(v51727, v51775);
          ;
          ;
          sim_r.txns.push({
            amt: v51716,
            kind: 'to',
            tok: v43932
            });
          ;
          const v52725 = {
            A: v51798,
            B: v51801
            };
          const v52726 = v44019.A;
          const v52730 = stdlib.safeAdd(v52726, v51774);
          const v52731 = v44019.B;
          const v52735 = stdlib.safeAdd(v52731, v51775);
          const v52736 = {
            A: v52730,
            B: v52735
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43932
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43933
            });
          const v52801 = {
            A: v51741,
            B: v51717
            };
          const v52802 = await txn1.getOutput('Trader_exactSwapAForB', 'v52801', ctc10, v52801);
          
          const v52811 = {
            A: v51716,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v52813 = {
            A: v51798,
            B: v51801
            };
          null;
          const v67320 = v44017;
          const v67321 = v52725;
          const v67322 = v52736;
          const v67323 = v44020;
          const v67325 = v44024;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      return;
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      undefined /* setApiDetails */;
      const v51716 = v51520[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
      const v51717 = v51520[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
      const v51719 = v44020.locked;
      const v51720 = v51719 ? false : true;
      stdlib.assert(v51720, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapAForB'
        });
      const v51722 = v44018.A;
      const v51723 = v44018.B;
      const v51725 = v44020.protoFee;
      const v51726 = v44020.totFee;
      const v51727 = stdlib.safeSub(v51723, v51717);
      const v51728 = stdlib.cast("UInt", "UInt256", v51727, false, true);
      const v51729 = stdlib.cast("UInt", "UInt256", v51722, false, true);
      const v51730 = stdlib.cast("UInt", "UInt256", v51717, false, true);
      const v51731 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51726);
      const v51732 = stdlib.cast("UInt", "UInt256", v51731, false, true);
      const v51733 = stdlib.safeMul256(v51730, v51732);
      const v51734 = stdlib.safeMul256(v51728, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v51735 = stdlib.safeMul256(v51733, v51729);
      const v51736 = stdlib.safeDiv256(v51735, v51734);
      const v51737 = stdlib.cast("UInt256", "UInt", v51736, false, true);
      const v51738 = stdlib.safeAdd(v51737, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v51739 = stdlib.ge(v51716, v51738);
      stdlib.assert(v51739, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapAForB'
        });
      const v51741 = stdlib.safeSub(v51716, v51738);
      const v51747 = stdlib.safeMul(v51725, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v51748 = stdlib.safeDiv(v51747, v51726);
      const v51753 = stdlib.safeAdd(v51722, v51738);
      const v51757 = stdlib.safeMuldiv(v51738, v51723, v51753);
      const v51760 = stdlib.safeSub(v51757, v51717);
      const v51762 = stdlib.safeMuldiv(v51760, v51748, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v51764 = stdlib.safeMuldiv(v51738, v51725, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v51768 = stdlib.safeMuldiv(v51764, v51723, v51753);
      const v51769 = stdlib.gt(v51768, v51762);
      const v51770 = [v51764, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v51771 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51762];
      const v51772 = v51769 ? v51770 : v51771;
      const v51774 = v51772[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v51775 = v51772[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v51783 = stdlib.safeAdd(v51722, v51716);
      const v51791 = stdlib.safeSub(v51783, v51741);
      const v51798 = stdlib.safeSub(v51791, v51774);
      const v51801 = stdlib.safeSub(v51727, v51775);
      const v51814 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v51741);
      const v51815 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v51717);
      const v51816 = v51814 ? v51815 : false;
      stdlib.assert(v51816, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapAForB'
        });
      const v51821 = stdlib.cast("UInt", "UInt256", v51723, false, true);
      const v51822 = stdlib.safeMul256(v51729, v51821);
      const v51823 = stdlib.cast("UInt", "UInt256", v51798, false, true);
      const v51824 = stdlib.cast("UInt", "UInt256", v51801, false, true);
      const v51825 = stdlib.safeMul256(v51823, v51824);
      const v51826 = stdlib.ge256(v51825, v51822);
      stdlib.assert(v51826, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapAForB'
        });
      ;
      ;
      ;
      ;
      const v52725 = {
        A: v51798,
        B: v51801
        };
      const v52726 = v44019.A;
      const v52730 = stdlib.safeAdd(v52726, v51774);
      const v52731 = v44019.B;
      const v52735 = stdlib.safeAdd(v52731, v51775);
      const v52736 = {
        A: v52730,
        B: v52735
        };
      ;
      ;
      const v52801 = {
        A: v51741,
        B: v51717
        };
      const v52802 = await txn1.getOutput('Trader_exactSwapAForB', 'v52801', ctc10, v52801);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v51520, v52802), {
          at: './index.rsh:594:11:application',
          fs: ['at ./index.rsh:594:11:application call to [unknown function] (defined at: ./index.rsh:594:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:596:38:function exp)', 'at ./index.rsh:596:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:596:38:application call to [unknown function] (defined at: ./index.rsh:596:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v52811 = {
        A: v51716,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v52813 = {
        A: v51798,
        B: v51801
        };
      null;
      const v67320 = v44017;
      const v67321 = v52725;
      const v67322 = v52736;
      const v67323 = v44020;
      const v67325 = v44024;
      return;
      
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
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
    Protocol_harvest0_35418: ctc9,
    Provider_deposit0_35418: ctc11,
    Provider_withdraw0_35418: ctc12,
    Trader_exactSwapAForB0_35418: ctc8,
    Trader_exactSwapBForA0_35418: ctc8,
    Trader_swapAForB0_35418: ctc8,
    Trader_swapBForA0_35418: ctc8
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v45026 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35418" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v45027 = v45026[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v45028 = v45026[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v45032 = v44020.locked;
  const v45033 = v45032 ? false : true;
  stdlib.assert(v45033, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35418" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapBForA'
    });
  const v45035 = v44018.A;
  const v45036 = v44018.B;
  const v45038 = v44020.protoFee;
  const v45039 = v44020.totFee;
  const v45040 = stdlib.safeSub(v45035, v45028);
  const v45041 = stdlib.cast("UInt", "UInt256", v45040, false, true);
  const v45042 = stdlib.cast("UInt", "UInt256", v45036, false, true);
  const v45043 = stdlib.cast("UInt", "UInt256", v45028, false, true);
  const v45044 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v45039);
  const v45045 = stdlib.cast("UInt", "UInt256", v45044, false, true);
  const v45046 = stdlib.safeMul256(v45043, v45045);
  const v45047 = stdlib.safeMul256(v45041, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v45048 = stdlib.safeMul256(v45046, v45042);
  const v45049 = stdlib.safeDiv256(v45048, v45047);
  const v45050 = stdlib.cast("UInt256", "UInt", v45049, false, true);
  const v45051 = stdlib.safeAdd(v45050, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v45052 = stdlib.ge(v45027, v45051);
  stdlib.assert(v45052, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35418" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapBForA'
    });
  const v45054 = stdlib.safeSub(v45027, v45051);
  const v45060 = stdlib.safeMul(v45038, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v45061 = stdlib.safeDiv(v45060, v45039);
  const v45066 = stdlib.safeAdd(v45036, v45051);
  const v45070 = stdlib.safeMuldiv(v45051, v45035, v45066);
  const v45073 = stdlib.safeSub(v45070, v45028);
  const v45075 = stdlib.safeMuldiv(v45073, v45061, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v45077 = stdlib.safeMuldiv(v45051, v45038, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v45081 = stdlib.safeMuldiv(v45077, v45035, v45066);
  const v45082 = stdlib.gt(v45081, v45075);
  const v45083 = [v45077, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v45084 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v45075];
  const v45085 = v45082 ? v45083 : v45084;
  const v45087 = v45085[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v45088 = v45085[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v45100 = stdlib.safeAdd(v45036, v45027);
  const v45107 = stdlib.safeSub(v45100, v45054);
  const v45111 = stdlib.safeSub(v45040, v45088);
  const v45114 = stdlib.safeSub(v45107, v45087);
  const v45127 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v45028);
  const v45128 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v45054);
  const v45129 = v45127 ? v45128 : false;
  stdlib.assert(v45129, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35418" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapBForA'
    });
  const v45133 = stdlib.cast("UInt", "UInt256", v45035, false, true);
  const v45135 = stdlib.safeMul256(v45133, v45042);
  const v45136 = stdlib.cast("UInt", "UInt256", v45111, false, true);
  const v45137 = stdlib.cast("UInt", "UInt256", v45114, false, true);
  const v45138 = stdlib.safeMul256(v45136, v45137);
  const v45139 = stdlib.ge256(v45138, v45135);
  stdlib.assert(v45139, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35418" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapBForA'
    });
  const v45152 = ['Trader_exactSwapBForA0_35418', v45026];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v45152],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:600:24:decimal', stdlib.UInt_max, '0'), v43987], [stdlib.checkedBigNumberify('./index.rsh:600:27:decimal', stdlib.UInt_max, '0'), v43932], [v45027, v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          const v53674 = v53345[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
          const v53675 = v53345[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
          const v53680 = v44018.A;
          const v53681 = v44018.B;
          const v53683 = v44020.protoFee;
          const v53684 = v44020.totFee;
          const v53685 = stdlib.safeSub(v53680, v53675);
          const v53686 = stdlib.cast("UInt", "UInt256", v53685, false, true);
          const v53687 = stdlib.cast("UInt", "UInt256", v53681, false, true);
          const v53688 = stdlib.cast("UInt", "UInt256", v53675, false, true);
          const v53689 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53684);
          const v53690 = stdlib.cast("UInt", "UInt256", v53689, false, true);
          const v53691 = stdlib.safeMul256(v53688, v53690);
          const v53692 = stdlib.safeMul256(v53686, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v53693 = stdlib.safeMul256(v53691, v53687);
          const v53694 = stdlib.safeDiv256(v53693, v53692);
          const v53695 = stdlib.cast("UInt256", "UInt", v53694, false, true);
          const v53696 = stdlib.safeAdd(v53695, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v53699 = stdlib.safeSub(v53674, v53696);
          const v53705 = stdlib.safeMul(v53683, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v53706 = stdlib.safeDiv(v53705, v53684);
          const v53711 = stdlib.safeAdd(v53681, v53696);
          const v53715 = stdlib.safeMuldiv(v53696, v53680, v53711);
          const v53718 = stdlib.safeSub(v53715, v53675);
          const v53720 = stdlib.safeMuldiv(v53718, v53706, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v53722 = stdlib.safeMuldiv(v53696, v53683, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v53726 = stdlib.safeMuldiv(v53722, v53680, v53711);
          const v53727 = stdlib.gt(v53726, v53720);
          const v53728 = [v53722, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v53729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53720];
          const v53730 = v53727 ? v53728 : v53729;
          const v53732 = v53730[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v53733 = v53730[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v53745 = stdlib.safeAdd(v53681, v53674);
          const v53752 = stdlib.safeSub(v53745, v53699);
          const v53756 = stdlib.safeSub(v53685, v53733);
          const v53759 = stdlib.safeSub(v53752, v53732);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v53674,
            kind: 'to',
            tok: v43933
            });
          const v54734 = {
            A: v53756,
            B: v53759
            };
          const v54735 = v44019.A;
          const v54739 = stdlib.safeAdd(v54735, v53733);
          const v54740 = v44019.B;
          const v54744 = stdlib.safeAdd(v54740, v53732);
          const v54745 = {
            A: v54739,
            B: v54744
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43932
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43933
            });
          const v54810 = {
            A: v53675,
            B: v53699
            };
          const v54811 = await txn1.getOutput('Trader_exactSwapBForA', 'v54810', ctc10, v54810);
          
          const v54820 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v53674
            };
          const v54822 = {
            A: v53756,
            B: v53759
            };
          null;
          const v67440 = v44017;
          const v67441 = v54734;
          const v67442 = v54745;
          const v67443 = v44020;
          const v67445 = v44024;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      return;
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      undefined /* setApiDetails */;
      const v53674 = v53345[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
      const v53675 = v53345[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
      const v53677 = v44020.locked;
      const v53678 = v53677 ? false : true;
      stdlib.assert(v53678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapBForA'
        });
      const v53680 = v44018.A;
      const v53681 = v44018.B;
      const v53683 = v44020.protoFee;
      const v53684 = v44020.totFee;
      const v53685 = stdlib.safeSub(v53680, v53675);
      const v53686 = stdlib.cast("UInt", "UInt256", v53685, false, true);
      const v53687 = stdlib.cast("UInt", "UInt256", v53681, false, true);
      const v53688 = stdlib.cast("UInt", "UInt256", v53675, false, true);
      const v53689 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53684);
      const v53690 = stdlib.cast("UInt", "UInt256", v53689, false, true);
      const v53691 = stdlib.safeMul256(v53688, v53690);
      const v53692 = stdlib.safeMul256(v53686, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v53693 = stdlib.safeMul256(v53691, v53687);
      const v53694 = stdlib.safeDiv256(v53693, v53692);
      const v53695 = stdlib.cast("UInt256", "UInt", v53694, false, true);
      const v53696 = stdlib.safeAdd(v53695, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v53697 = stdlib.ge(v53674, v53696);
      stdlib.assert(v53697, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapBForA'
        });
      const v53699 = stdlib.safeSub(v53674, v53696);
      const v53705 = stdlib.safeMul(v53683, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v53706 = stdlib.safeDiv(v53705, v53684);
      const v53711 = stdlib.safeAdd(v53681, v53696);
      const v53715 = stdlib.safeMuldiv(v53696, v53680, v53711);
      const v53718 = stdlib.safeSub(v53715, v53675);
      const v53720 = stdlib.safeMuldiv(v53718, v53706, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v53722 = stdlib.safeMuldiv(v53696, v53683, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v53726 = stdlib.safeMuldiv(v53722, v53680, v53711);
      const v53727 = stdlib.gt(v53726, v53720);
      const v53728 = [v53722, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v53729 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53720];
      const v53730 = v53727 ? v53728 : v53729;
      const v53732 = v53730[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v53733 = v53730[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v53745 = stdlib.safeAdd(v53681, v53674);
      const v53752 = stdlib.safeSub(v53745, v53699);
      const v53756 = stdlib.safeSub(v53685, v53733);
      const v53759 = stdlib.safeSub(v53752, v53732);
      const v53772 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v53675);
      const v53773 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v53699);
      const v53774 = v53772 ? v53773 : false;
      stdlib.assert(v53774, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapBForA'
        });
      const v53778 = stdlib.cast("UInt", "UInt256", v53680, false, true);
      const v53780 = stdlib.safeMul256(v53778, v53687);
      const v53781 = stdlib.cast("UInt", "UInt256", v53756, false, true);
      const v53782 = stdlib.cast("UInt", "UInt256", v53759, false, true);
      const v53783 = stdlib.safeMul256(v53781, v53782);
      const v53784 = stdlib.ge256(v53783, v53780);
      stdlib.assert(v53784, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapBForA'
        });
      ;
      ;
      ;
      ;
      const v54734 = {
        A: v53756,
        B: v53759
        };
      const v54735 = v44019.A;
      const v54739 = stdlib.safeAdd(v54735, v53733);
      const v54740 = v44019.B;
      const v54744 = stdlib.safeAdd(v54740, v53732);
      const v54745 = {
        A: v54739,
        B: v54744
        };
      ;
      ;
      const v54810 = {
        A: v53675,
        B: v53699
        };
      const v54811 = await txn1.getOutput('Trader_exactSwapBForA', 'v54810', ctc10, v54810);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v53345, v54811), {
          at: './index.rsh:598:11:application',
          fs: ['at ./index.rsh:598:11:application call to [unknown function] (defined at: ./index.rsh:598:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:600:38:function exp)', 'at ./index.rsh:600:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:600:38:application call to [unknown function] (defined at: ./index.rsh:600:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v54820 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v53674
        };
      const v54822 = {
        A: v53756,
        B: v53759
        };
      null;
      const v67440 = v44017;
      const v67441 = v54734;
      const v67442 = v54745;
      const v67443 = v44020;
      const v67445 = v44024;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
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
    Protocol_harvest0_35418: ctc9,
    Provider_deposit0_35418: ctc11,
    Provider_withdraw0_35418: ctc12,
    Trader_exactSwapAForB0_35418: ctc8,
    Trader_exactSwapBForA0_35418: ctc8,
    Trader_swapAForB0_35418: ctc8,
    Trader_swapBForA0_35418: ctc8
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44647 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35418" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v44648 = v44647[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44649 = v44647[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44654 = v44020.locked;
  const v44655 = v44654 ? false : true;
  stdlib.assert(v44655, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35418" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v44657 = v44018.A;
  const v44658 = v44018.B;
  const v44660 = v44020.protoFee;
  const v44661 = v44020.totFee;
  const v44662 = stdlib.cast("UInt", "UInt256", v44658, false, true);
  const v44663 = stdlib.cast("UInt", "UInt256", v44657, false, true);
  const v44664 = stdlib.cast("UInt", "UInt256", v44648, false, true);
  const v44665 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44661);
  const v44666 = stdlib.cast("UInt", "UInt256", v44665, false, true);
  const v44667 = stdlib.safeMul256(v44664, v44666);
  const v44668 = stdlib.safeMul256(v44663, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44669 = stdlib.safeAdd256(v44668, v44667);
  const v44670 = stdlib.safeMul256(v44667, v44662);
  const v44671 = stdlib.safeDiv256(v44670, v44669);
  const v44672 = stdlib.cast("UInt256", "UInt", v44671, false, true);
  const v44678 = stdlib.safeMul(v44660, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44679 = stdlib.safeDiv(v44678, v44661);
  const v44684 = stdlib.safeAdd(v44657, v44648);
  const v44688 = stdlib.safeMuldiv(v44648, v44658, v44684);
  const v44691 = stdlib.safeSub(v44688, v44672);
  const v44693 = stdlib.safeMuldiv(v44691, v44679, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44695 = stdlib.safeMuldiv(v44648, v44660, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44699 = stdlib.safeMuldiv(v44695, v44658, v44684);
  const v44700 = stdlib.gt(v44699, v44693);
  const v44701 = [v44695, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44702 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44693];
  const v44703 = v44700 ? v44701 : v44702;
  const v44705 = v44703[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v44706 = v44703[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v44724 = stdlib.safeSub(v44658, v44672);
  const v44728 = stdlib.safeSub(v44684, v44705);
  const v44731 = stdlib.safeSub(v44724, v44706);
  const v44744 = stdlib.le(v44649, v44672);
  stdlib.assert(v44744, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35418" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v44750 = stdlib.safeMul256(v44663, v44662);
  const v44751 = stdlib.cast("UInt", "UInt256", v44728, false, true);
  const v44752 = stdlib.cast("UInt", "UInt256", v44731, false, true);
  const v44753 = stdlib.safeMul256(v44751, v44752);
  const v44754 = stdlib.ge256(v44753, v44750);
  stdlib.assert(v44754, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35418" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v44767 = ['Trader_swapAForB0_35418', v44647];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v44767],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:588:24:decimal', stdlib.UInt_max, '0'), v43987], [v44648, v43932], [stdlib.checkedBigNumberify('./index.rsh:588:30:decimal', stdlib.UInt_max, '0'), v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v55632 = v55170[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
          const v55639 = v44018.A;
          const v55640 = v44018.B;
          const v55642 = v44020.protoFee;
          const v55643 = v44020.totFee;
          const v55644 = stdlib.cast("UInt", "UInt256", v55640, false, true);
          const v55645 = stdlib.cast("UInt", "UInt256", v55639, false, true);
          const v55646 = stdlib.cast("UInt", "UInt256", v55632, false, true);
          const v55647 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55643);
          const v55648 = stdlib.cast("UInt", "UInt256", v55647, false, true);
          const v55649 = stdlib.safeMul256(v55646, v55648);
          const v55650 = stdlib.safeMul256(v55645, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v55651 = stdlib.safeAdd256(v55650, v55649);
          const v55652 = stdlib.safeMul256(v55649, v55644);
          const v55653 = stdlib.safeDiv256(v55652, v55651);
          const v55654 = stdlib.cast("UInt256", "UInt", v55653, false, true);
          const v55660 = stdlib.safeMul(v55642, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v55661 = stdlib.safeDiv(v55660, v55643);
          const v55666 = stdlib.safeAdd(v55639, v55632);
          const v55670 = stdlib.safeMuldiv(v55632, v55640, v55666);
          const v55673 = stdlib.safeSub(v55670, v55654);
          const v55675 = stdlib.safeMuldiv(v55673, v55661, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v55677 = stdlib.safeMuldiv(v55632, v55642, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v55681 = stdlib.safeMuldiv(v55677, v55640, v55666);
          const v55682 = stdlib.gt(v55681, v55675);
          const v55683 = [v55677, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v55684 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55675];
          const v55685 = v55682 ? v55683 : v55684;
          const v55687 = v55685[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v55688 = v55685[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v55706 = stdlib.safeSub(v55640, v55654);
          const v55710 = stdlib.safeSub(v55666, v55687);
          const v55713 = stdlib.safeSub(v55706, v55688);
          ;
          ;
          sim_r.txns.push({
            amt: v55632,
            kind: 'to',
            tok: v43932
            });
          ;
          const v56739 = {
            A: v55710,
            B: v55713
            };
          const v56740 = v44019.A;
          const v56744 = stdlib.safeAdd(v56740, v55687);
          const v56745 = v44019.B;
          const v56749 = stdlib.safeAdd(v56745, v55688);
          const v56750 = {
            A: v56744,
            B: v56749
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43933
            });
          const v56804 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v55654
            };
          const v56805 = await txn1.getOutput('Trader_swapAForB', 'v56804', ctc10, v56804);
          
          const v56814 = {
            A: v55632,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v56816 = {
            A: v55710,
            B: v55713
            };
          null;
          const v67560 = v44017;
          const v67561 = v56739;
          const v67562 = v56750;
          const v67563 = v44020;
          const v67565 = v44024;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      return;
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      undefined /* setApiDetails */;
      const v55632 = v55170[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
      const v55633 = v55170[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
      const v55636 = v44020.locked;
      const v55637 = v55636 ? false : true;
      stdlib.assert(v55637, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v55639 = v44018.A;
      const v55640 = v44018.B;
      const v55642 = v44020.protoFee;
      const v55643 = v44020.totFee;
      const v55644 = stdlib.cast("UInt", "UInt256", v55640, false, true);
      const v55645 = stdlib.cast("UInt", "UInt256", v55639, false, true);
      const v55646 = stdlib.cast("UInt", "UInt256", v55632, false, true);
      const v55647 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55643);
      const v55648 = stdlib.cast("UInt", "UInt256", v55647, false, true);
      const v55649 = stdlib.safeMul256(v55646, v55648);
      const v55650 = stdlib.safeMul256(v55645, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v55651 = stdlib.safeAdd256(v55650, v55649);
      const v55652 = stdlib.safeMul256(v55649, v55644);
      const v55653 = stdlib.safeDiv256(v55652, v55651);
      const v55654 = stdlib.cast("UInt256", "UInt", v55653, false, true);
      const v55660 = stdlib.safeMul(v55642, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v55661 = stdlib.safeDiv(v55660, v55643);
      const v55666 = stdlib.safeAdd(v55639, v55632);
      const v55670 = stdlib.safeMuldiv(v55632, v55640, v55666);
      const v55673 = stdlib.safeSub(v55670, v55654);
      const v55675 = stdlib.safeMuldiv(v55673, v55661, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v55677 = stdlib.safeMuldiv(v55632, v55642, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v55681 = stdlib.safeMuldiv(v55677, v55640, v55666);
      const v55682 = stdlib.gt(v55681, v55675);
      const v55683 = [v55677, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v55684 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55675];
      const v55685 = v55682 ? v55683 : v55684;
      const v55687 = v55685[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v55688 = v55685[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v55706 = stdlib.safeSub(v55640, v55654);
      const v55710 = stdlib.safeSub(v55666, v55687);
      const v55713 = stdlib.safeSub(v55706, v55688);
      const v55726 = stdlib.le(v55633, v55654);
      stdlib.assert(v55726, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v55732 = stdlib.safeMul256(v55645, v55644);
      const v55733 = stdlib.cast("UInt", "UInt256", v55710, false, true);
      const v55734 = stdlib.cast("UInt", "UInt256", v55713, false, true);
      const v55735 = stdlib.safeMul256(v55733, v55734);
      const v55736 = stdlib.ge256(v55735, v55732);
      stdlib.assert(v55736, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      ;
      ;
      ;
      const v56739 = {
        A: v55710,
        B: v55713
        };
      const v56740 = v44019.A;
      const v56744 = stdlib.safeAdd(v56740, v55687);
      const v56745 = v44019.B;
      const v56749 = stdlib.safeAdd(v56745, v55688);
      const v56750 = {
        A: v56744,
        B: v56749
        };
      ;
      const v56804 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v55654
        };
      const v56805 = await txn1.getOutput('Trader_swapAForB', 'v56804', ctc10, v56804);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v55170, v56805), {
          at: './index.rsh:586:11:application',
          fs: ['at ./index.rsh:586:11:application call to [unknown function] (defined at: ./index.rsh:586:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:588:38:function exp)', 'at ./index.rsh:588:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:588:38:application call to [unknown function] (defined at: ./index.rsh:588:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v56814 = {
        A: v55632,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v56816 = {
        A: v55710,
        B: v55713
        };
      null;
      const v67560 = v44017;
      const v67561 = v56739;
      const v67562 = v56750;
      const v67563 = v44020;
      const v67565 = v44024;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
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
    Protocol_harvest0_35418: ctc9,
    Provider_deposit0_35418: ctc11,
    Provider_withdraw0_35418: ctc12,
    Trader_exactSwapAForB0_35418: ctc8,
    Trader_exactSwapBForA0_35418: ctc8,
    Trader_swapAForB0_35418: ctc8,
    Trader_swapBForA0_35418: ctc8
    });
  
  
  const [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44771 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35418" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v44772 = v44771[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44773 = v44771[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44778 = v44020.locked;
  const v44779 = v44778 ? false : true;
  stdlib.assert(v44779, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35418" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v44781 = v44018.A;
  const v44782 = v44018.B;
  const v44784 = v44020.protoFee;
  const v44785 = v44020.totFee;
  const v44786 = stdlib.cast("UInt", "UInt256", v44781, false, true);
  const v44787 = stdlib.cast("UInt", "UInt256", v44782, false, true);
  const v44788 = stdlib.cast("UInt", "UInt256", v44772, false, true);
  const v44789 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44785);
  const v44790 = stdlib.cast("UInt", "UInt256", v44789, false, true);
  const v44791 = stdlib.safeMul256(v44788, v44790);
  const v44792 = stdlib.safeMul256(v44787, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44793 = stdlib.safeAdd256(v44792, v44791);
  const v44794 = stdlib.safeMul256(v44791, v44786);
  const v44795 = stdlib.safeDiv256(v44794, v44793);
  const v44796 = stdlib.cast("UInt256", "UInt", v44795, false, true);
  const v44802 = stdlib.safeMul(v44784, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44803 = stdlib.safeDiv(v44802, v44785);
  const v44808 = stdlib.safeAdd(v44782, v44772);
  const v44812 = stdlib.safeMuldiv(v44772, v44781, v44808);
  const v44815 = stdlib.safeSub(v44812, v44796);
  const v44817 = stdlib.safeMuldiv(v44815, v44803, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44819 = stdlib.safeMuldiv(v44772, v44784, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44823 = stdlib.safeMuldiv(v44819, v44781, v44808);
  const v44824 = stdlib.gt(v44823, v44817);
  const v44825 = [v44819, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44826 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44817];
  const v44827 = v44824 ? v44825 : v44826;
  const v44829 = v44827[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v44830 = v44827[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v44846 = stdlib.safeSub(v44781, v44796);
  const v44852 = stdlib.safeSub(v44846, v44830);
  const v44855 = stdlib.safeSub(v44808, v44829);
  const v44868 = stdlib.le(v44773, v44796);
  stdlib.assert(v44868, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35418" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v44875 = stdlib.safeMul256(v44786, v44787);
  const v44876 = stdlib.cast("UInt", "UInt256", v44852, false, true);
  const v44877 = stdlib.cast("UInt", "UInt256", v44855, false, true);
  const v44878 = stdlib.safeMul256(v44876, v44877);
  const v44879 = stdlib.ge256(v44878, v44875);
  stdlib.assert(v44879, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35418" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v44892 = ['Trader_swapBForA0_35418', v44771];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43932, v43933, v43959, v43987, v44014, v44017, v44018, v44019, v44020, v44024, v44892],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:592:24:decimal', stdlib.UInt_max, '0'), v43987], [stdlib.checkedBigNumberify('./index.rsh:592:27:decimal', stdlib.UInt_max, '0'), v43932], [v44772, v43933]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
      
      switch (v46042[0]) {
        case 'Protocol_harvest0_35418': {
          const v46045 = v46042[1];
          
          break;
          }
        case 'Provider_deposit0_35418': {
          const v47870 = v46042[1];
          
          break;
          }
        case 'Provider_withdraw0_35418': {
          const v49695 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35418': {
          const v51520 = v46042[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35418': {
          const v53345 = v46042[1];
          
          break;
          }
        case 'Trader_swapAForB0_35418': {
          const v55170 = v46042[1];
          
          break;
          }
        case 'Trader_swapBForA0_35418': {
          const v56995 = v46042[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v57584 = v56995[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
          const v57591 = v44018.A;
          const v57592 = v44018.B;
          const v57594 = v44020.protoFee;
          const v57595 = v44020.totFee;
          const v57596 = stdlib.cast("UInt", "UInt256", v57591, false, true);
          const v57597 = stdlib.cast("UInt", "UInt256", v57592, false, true);
          const v57598 = stdlib.cast("UInt", "UInt256", v57584, false, true);
          const v57599 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57595);
          const v57600 = stdlib.cast("UInt", "UInt256", v57599, false, true);
          const v57601 = stdlib.safeMul256(v57598, v57600);
          const v57602 = stdlib.safeMul256(v57597, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v57603 = stdlib.safeAdd256(v57602, v57601);
          const v57604 = stdlib.safeMul256(v57601, v57596);
          const v57605 = stdlib.safeDiv256(v57604, v57603);
          const v57606 = stdlib.cast("UInt256", "UInt", v57605, false, true);
          const v57612 = stdlib.safeMul(v57594, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v57613 = stdlib.safeDiv(v57612, v57595);
          const v57618 = stdlib.safeAdd(v57592, v57584);
          const v57622 = stdlib.safeMuldiv(v57584, v57591, v57618);
          const v57625 = stdlib.safeSub(v57622, v57606);
          const v57627 = stdlib.safeMuldiv(v57625, v57613, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v57629 = stdlib.safeMuldiv(v57584, v57594, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v57633 = stdlib.safeMuldiv(v57629, v57591, v57618);
          const v57634 = stdlib.gt(v57633, v57627);
          const v57635 = [v57629, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v57636 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57627];
          const v57637 = v57634 ? v57635 : v57636;
          const v57639 = v57637[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v57640 = v57637[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v57656 = stdlib.safeSub(v57591, v57606);
          const v57662 = stdlib.safeSub(v57656, v57640);
          const v57665 = stdlib.safeSub(v57618, v57639);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v57584,
            kind: 'to',
            tok: v43933
            });
          const v58733 = {
            A: v57662,
            B: v57665
            };
          const v58734 = v44019.A;
          const v58738 = stdlib.safeAdd(v58734, v57640);
          const v58739 = v44019.B;
          const v58743 = stdlib.safeAdd(v58739, v57639);
          const v58744 = {
            A: v58738,
            B: v58743
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46041,
            tok: v43932
            });
          const v58799 = {
            A: v57606,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v58800 = await txn1.getOutput('Trader_swapBForA', 'v58799', ctc10, v58799);
          
          const v58809 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v57584
            };
          const v58811 = {
            A: v57662,
            B: v57665
            };
          null;
          const v67680 = v44017;
          const v67681 = v58733;
          const v67682 = v58744;
          const v67683 = v44020;
          const v67685 = v44024;
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
  const {data: [v46042], secs: v46044, time: v46043, didSend: v41022, from: v46041 } = txn1;
  switch (v46042[0]) {
    case 'Protocol_harvest0_35418': {
      const v46045 = v46042[1];
      return;
      break;
      }
    case 'Provider_deposit0_35418': {
      const v47870 = v46042[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35418': {
      const v49695 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35418': {
      const v51520 = v46042[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35418': {
      const v53345 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35418': {
      const v55170 = v46042[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35418': {
      const v56995 = v46042[1];
      undefined /* setApiDetails */;
      const v57584 = v56995[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
      const v57585 = v56995[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
      const v57588 = v44020.locked;
      const v57589 = v57588 ? false : true;
      stdlib.assert(v57589, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v57591 = v44018.A;
      const v57592 = v44018.B;
      const v57594 = v44020.protoFee;
      const v57595 = v44020.totFee;
      const v57596 = stdlib.cast("UInt", "UInt256", v57591, false, true);
      const v57597 = stdlib.cast("UInt", "UInt256", v57592, false, true);
      const v57598 = stdlib.cast("UInt", "UInt256", v57584, false, true);
      const v57599 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57595);
      const v57600 = stdlib.cast("UInt", "UInt256", v57599, false, true);
      const v57601 = stdlib.safeMul256(v57598, v57600);
      const v57602 = stdlib.safeMul256(v57597, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v57603 = stdlib.safeAdd256(v57602, v57601);
      const v57604 = stdlib.safeMul256(v57601, v57596);
      const v57605 = stdlib.safeDiv256(v57604, v57603);
      const v57606 = stdlib.cast("UInt256", "UInt", v57605, false, true);
      const v57612 = stdlib.safeMul(v57594, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v57613 = stdlib.safeDiv(v57612, v57595);
      const v57618 = stdlib.safeAdd(v57592, v57584);
      const v57622 = stdlib.safeMuldiv(v57584, v57591, v57618);
      const v57625 = stdlib.safeSub(v57622, v57606);
      const v57627 = stdlib.safeMuldiv(v57625, v57613, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v57629 = stdlib.safeMuldiv(v57584, v57594, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v57633 = stdlib.safeMuldiv(v57629, v57591, v57618);
      const v57634 = stdlib.gt(v57633, v57627);
      const v57635 = [v57629, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v57636 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57627];
      const v57637 = v57634 ? v57635 : v57636;
      const v57639 = v57637[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v57640 = v57637[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v57656 = stdlib.safeSub(v57591, v57606);
      const v57662 = stdlib.safeSub(v57656, v57640);
      const v57665 = stdlib.safeSub(v57618, v57639);
      const v57678 = stdlib.le(v57585, v57606);
      stdlib.assert(v57678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v57685 = stdlib.safeMul256(v57596, v57597);
      const v57686 = stdlib.cast("UInt", "UInt256", v57662, false, true);
      const v57687 = stdlib.cast("UInt", "UInt256", v57665, false, true);
      const v57688 = stdlib.safeMul256(v57686, v57687);
      const v57689 = stdlib.ge256(v57688, v57685);
      stdlib.assert(v57689, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      ;
      ;
      ;
      const v58733 = {
        A: v57662,
        B: v57665
        };
      const v58734 = v44019.A;
      const v58738 = stdlib.safeAdd(v58734, v57640);
      const v58739 = v44019.B;
      const v58743 = stdlib.safeAdd(v58739, v57639);
      const v58744 = {
        A: v58738,
        B: v58743
        };
      ;
      const v58799 = {
        A: v57606,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v58800 = await txn1.getOutput('Trader_swapBForA', 'v58799', ctc10, v58799);
      if (v41022) {
        stdlib.protect(ctc1, await interact.out(v56995, v58800), {
          at: './index.rsh:590:11:application',
          fs: ['at ./index.rsh:590:11:application call to [unknown function] (defined at: ./index.rsh:590:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:592:38:function exp)', 'at ./index.rsh:592:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:592:38:application call to [unknown function] (defined at: ./index.rsh:592:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v58809 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v57584
        };
      const v58811 = {
        A: v57662,
        B: v57665
        };
      null;
      const v67680 = v44017;
      const v67681 = v58733;
      const v67682 = v58744;
      const v67683 = v44020;
      const v67685 = v44024;
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
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64,(uint64,uint64))(uint64,uint64)`, `Trader_exactSwapAForB(uint64,uint64)(uint64,uint64)`, `Trader_exactSwapBForA(uint64,uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`, `_reachp_0((uint64,uint64,uint64,byte[32],byte[8],uint64))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[89])))void`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`],
    sigs: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Protocol_delete()void`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64,(uint64,uint64))(uint64,uint64)`, `Trader_exactSwapAForB(uint64,uint64)(uint64,uint64)`, `Trader_exactSwapBForA(uint64,uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`, `_reachp_0((uint64,uint64,uint64,byte[32],byte[8],uint64))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[89])))void`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCARABgIZJBOEEAEAQKgjQZJA0H///////////8BBhkmBSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAABAQQ81lT6AQAxGEEQSilkSSJbNQEkWzUCJwRkKmRQghAEGToBGwQlWzngBCiaRG4ES24bXgRNSoK+BFZ844EEYArbDQRuij9eBG7MciQEc+W3FwR8pHu4BKDo9ZkEpAsKWQTP2r63BOIvANkE/am27zYaAI4QE9QBQgDrE90PnBPmD7cBpQ+sAHIB6wHIAAEBggFhE+8ANAEhBwxBEDI0ASEJEkSIFFM0FhY0E1cACDQTVwgIUFA0ElcACDQSVwgIUFA0EFcACDQQVwgIUDQQVxAIUDQQVxggUDQQVzgBUFA0EVcACDQRVwgIUFA0GBZQNBdQNQQxGSISRIAEFR98dTQEULAhCEMkrzULIQk0ARJEiBPmNAsiWzUMgATFH8NXNAwWULA0DIgUCSk1C4AIAAAAAAAA5yk0C1CwNAs1BLEisgEhDLIQNBayIbMhCjQHCDUHIjQYMgoyCYgT8CI0GTIKMgmIE+YxGYEFEkSIE80iMgoyCYgT2zQDQP+HQv96NhoBNhoCNQs1DCSvJwQ0DDQLUFBQNQshBzQBEkSIEx80CyJbNQw0C1cIWjUNgAQOt+tFNAwWUDQNULA0DIgTczQNIlWNBw6qDrQOvg7IDtIO3A7mQv6+NhoBNhoCFzULNQwkryo0DDQLFlBQIQ2vUFA1C0L/oTYaARc2GgI1CzUMJK+AAQI0DBY0C1BQIQ2vUFA1C0L/gDYaARc2GgIXNQs1DCSvgAEENAwWNAsWUFAhC69QUDULQv9dNhoBFzYaAhc1CzUMJK+AAQM0DBY0CxZQUCELr1BQNQtC/zo2GgEXNhoCFzULNQwkr4ABBTQMFjQLFlBQIQuvUFA1C0L/FzYaARc2GgIXNQs1DCSvgAEGNAwWNAsWUFAhC69QUDULQv70NAtXIDk1HzEANBBXGCASRDQfIls1HjQfJFs1HTQfIQVbNRw0HiUMNB0lDBBJNRtBDe80HDQdNB4IEjUMNBwlDDUaNBwiDTUNNAw0GhA0DRBENAtXACA1DDQbQQ3KNBw0HTQeCBI1CzQLNBoQNA0QRDQfVzgBFzUbMgpgMgp4CTQOCTUaNBEiWzUNNBEkWzULNBo0DIgSDzQNNBk0DIgRVDQLNBg0DIgRSzQNFjQLFlA0GhZQNQyACAAAAAAAALc7NAxQsDQMNQQ0HhY0HRZQNBwWUDQfVxggUDQbFlEHCFA1C4AEVq11PDQLULA0GzQTJFsiEhA0EiJbIhI0EiRbIhIQEDQVNB8yBjQaNA4INBoJNQ41DzUQNRE1FDQUQQ2xNBkWNBgWUDQXUDQWFlA0E1A0ElA0EVA0EFAjr1AhCTIGNQI1AScESwFXAH9nKkxXfyNnKTQBFjQCFlBnMRkiEkSIETZC/W40C1cAEDUNNAshBVs1DDQQVzgBFxRENA0iWzUaNA0kWzULNBMkW0k1HiISSTUdQQzvI680GhZQI680CxZQo4gQQpaIED5JkyEGDkQjWzUbNAw0Gw5ENBo0GYgQNTQLNBiIEC40HUEM3SOvNBoWUCOvNAsWUKOIEAuWiBAHSZMhBg5EI1s1DTQMNA0ORDQaNBIiWwg1HTQLNBIkWwg1HDQTIls0DQk1GzQeNA0INQw0DTQWMQCID9aACAAAAAAAAL6ENA0WULA0DRY1BDQaFjQLFlA1HjQdFjQcFlA1GjQbFjQMFlA1C4AE3hsp9TEAUDQeUDQNFlA0GlA0C1CwIjQbFjQMFlA0HRY0HBZQMgY1DzUSNRM1FEL+mzQLIls1DTQLVwgQNQw0EyRbNR00EiJbNRw0EiRbNRs0DTQcHTQdlzUaNA00Gx00HZc1CzQMIls0Gg5ENAwkWzQLDkQ0DTQWiA8uNBMiWzQNCDUeNB00DQk1DDQcNBoJNR00GzQLCTUcNBo0GTEAiA8DNAs0GDEAiA76NBoWNAsWUDUbgAgAAAAAAADGaTQbULA0GzUENB0WNBwWUDUaNB4WNAwWUDULgAQc1K5fMQBQNA0WUDQbUDQaUDQLULAiNB4WNAwWUDQdFjQcFlAyBjUPNRI1EzUUQv3BNAsiWzUNNAskWzUMNBBXOAEXFEQ0EiJbNRo0EiRbNSA0ECJbNSI0ECEFWzUcNCA0DAk1HyOvNBoWUDULI680DBZQI68hBDQcCBZQo4gOQTQLo4gOOyOvNB8WUCijiA4woogOLEmTIQYORCNbIQgINRs0DTQbD0Q0DTQbCTUeNBo0Gwg1ITQbNCAdNCGXNAwJNCIlCzQcCh0llzUdNBs0Ih0hBJc1HCSvNB0WUDQcFiSvUDQcNCAdNCGXNB0NTUk1GyJbNR00GyRbNRw0GjQNCDQeCTQdCTUbNB80HAk1GiI0Hg4iNAwOEEQjrzQbFlAjrzQaFlCjiA2XNAsjrzQgFlCjiA2Lp0Q0DTQZiA2QNB40GTEAiA2DNAw0GDEAiA16NB4WNAwWUDULgAgAAAAAAADOQTQLULA0CzUENA0WJK9QNQw0GxY0GhZQNQ0rMQBQNAxQNAtQNA1QsCI0GxY0GhZQNBEiWzQdCBY0ESRbNBwIFlAyBjUPNRE1EjUUQvxBNAsiWzUNNAskWzUMNBBXOAEXFEQ0EiJbNSA0EiRbNR80ECJbNSI0ECEFWzUcNCA0DAk1GiOvNB8WUDULI680DBZQI68hBDQcCBZQo4gMwTQLo4gMuyOvNBoWUCijiAywoogMrEmTIQYORCNbIQgINRs0DTQbD0Q0DTQbCTUeNB80Gwg1ITQbNCAdNCGXNAwJNCIlCzQcCh0llzUdNBs0Ih0hBJc1HCSvNB0WUDQcFiSvUDQcNCAdNCGXNB0NTUk1GyJbNR00GyRbNRw0GjQcCTUbNB80DQg0Hgk0HQk1GiI0DA4iNB4OEEQjrzQbFlAjrzQaFlCjiAwXI680IBZQNAujiAwLp0Q0DTQYiAwQNAw0GTEAiAwDNB40GDEAiAv6NAwWNB4WUDULgAgAAAAAAADWGjQLULA0CzUEJK80DRZQNQw0GxY0GhZQNQ0rMQBQNAxQNAtQNA1QsCI0GxY0GhZQNBEiWzQcCBY0ESRbNB0IFlAyBjUPNRE1EjUUQvrBNAsiWzUgNBBXOAEXFEQ0EiJbNRs0EiRbNR80ECJbNQ00ECEFWzUaI680HxZQNR4jrzQbFlA1HSOvNCAWUCOvIQQ0GgkWUKOIC0ZJNQw0HqOICz00HSijiAs2NAygiAswoogLLEmTIQYORCNbNRw0GzQgCDUMNCA0Hx00DJc0HAk0DSULNBoKHSWXNRs0IDQNHSEElzUaJK80GxZQNBoWJK9QNBo0Hx00DJc0Gw1NSTUNIls1GzQNJFs1GjQMNBsJNQ00HzQcCTQaCTUMNAskWzQcDkQjrzQNFlAjrzQMFlCjiAqsNB00HqOICqSnRDQgNBmICqk0HDQYMQCICpwkrzQcFlA1C4AIAAAAAAAA3eQ0C1CwNAs1BDQgFiSvUDUcNA0WNAwWUDUdKzEAUDQcUDQLUDQdULAiNA0WNAwWUDQRIls0GwgWNBEkWzQaCBZQMgY1DzURNRI1FEL5ZDQLIls1IDQQVzgBFxRENBIiWzUMNBIkWzUbNBAiWzUNNBAhBVs1GiOvNAwWUDUfI680GxZQNR4jrzQgFlAjryEENBoJFlCjiAnpSTUcNB+jiAngNB4oo4gJ2TQcoIgJ06KICc9JkyEGDkQjWzUdNBs0IAg1HDQgNAwdNByXNB0JNA0lCzQaCh0llzUbNCA0DR0hBJc1GiSvNBsWUDQaFiSvUDQaNAwdNByXNBsNTUk1DSJbNRs0DSRbNRo0DDQdCTQaCTUNNBw0Gwk1DDQLJFs0HQ5EI680DRZQI680DBZQo4gJTzQfNB6jiAlHp0Q0IDQYiAlMNB00GTEAiAk/NB0WJK9QNQuACAAAAAAAAOWvNAtQsDQLNQQkrzQgFlA1HDQNFjQMFlA1HSsxAFA0HFA0C1A0HVCwIjQNFjQMFlA0ESJbNBoIFjQRJFs0GwgWUDIGNQ81ETUSNRRC+Ac0ASEHDEEF+TQBIQkSRIgJMjQLNQwjrzQMFlAjryEENBAhBVsIFlCjiAirI680ElcACFCjiAifI680EiRbNAwJFlAoo4gIj6KICItJkyEGDkQjWyEICBY1BEL04jQBIQcMQQXxNAEhCRJEiAjWNAs1DCOvNAwWUCOvIQQ0ECEFWwgWUKOICE8jrzQSVwgIUKOICEMjrzQSIls0DAkWUCijiAgzoogIL0mTIQYORCNbIQgIFjUEQvSGNAEhBwxBBek0ASEJEkSICHo0CzUMNBBXOAEXFEQ0EiJbNQ00EiRbNQs0ECJbNQ80ECEFWzUOI680CxZQNRMjrzQNFlA1EiOvNAwWUCOvIQQ0DgkWUKOIB8VJNRA0E6OIB7w0EiijiAe1NBCgiAevoogHq0mTIQYORCNbNRE0DTQMCDUQNAw0Cx00EJc0EQk0DyULNA4KHSWXNQ00DDQPHSEElzUOJK80DRZQNA4WJK9QNA40Cx00EJc0DQ1NNQwiNBEORCOvNBA0DCJbCRZQI680CzQRCTQMJFsJFlCjiAc9NBI0E6OIBzWnRDQRFjUEQvOTNAEhBwxBBeE0ASEJEkSIB4c0CzUMNBBXOAEXFEQ0EiJbNQ00EiRbNQs0ECJbNQ80ECEFWzUOI680DRZQNRMjrzQLFlA1EiOvNAwWUCOvIQQ0DgkWUKOIBtJJNRA0E6OIBsk0EiijiAbCNBCgiAa8oogGuEmTIQYORCNbNRE0CzQMCDUQNAw0DR00EJc0EQk0DyULNA4KHSWXNQs0DDQPHSEElzUOJK80CxZQNA4WJK9QNA40DR00EJc0Cw1NNQwiNBEORCOvNA00EQk0DCRbCRZQI680EDQMIlsJFlCjiAZKNBM0EqOIBkKnRDQRFjUEQvKgNAsiWzUXNAskWzUZNAshBVs1GDQLVxggNRw0C1c4CDUWNAshBls1DIAEC7th4zQXFlA0GRZQNBgWUDQcUDQWUDQMFlCwNBeIBpQ0GDQZE0QhDiEEDUQ0GTQYE0QhCogGciI0GTIKiAXZIQqIBmUiNBgyCogFzCo0GRZQNReABWFwcElENAwWUAM1CDIKeDUJKTIKYDQJCRY1CrEisgEhD7IQNAyyGIAESVoKaLIaMRgWsho0F7IaNBgWshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAKu4NAtQsDQLSTUbIls1DDQbVwg5STULIls1HzQLJFs1HjQLIQVbNR00HyUMNB4lDBBBARY0HTQeNB8IEjUbNBs0HSUMEDQdIg0QRCI0DBJEIQqIBaWxIrIBIQyyECEOsiIhD7IjNBayJTQcsiaBYK+yJzIDsigyCrIps7Q8NRuACAAAAAAAAKvSNBsWULA0GzUWIjUbIjUNNBkWNBgWUCQ0DQskWBc1FTQWNBUSNBtJTTUbNA0hCAhJNQ0hCQxA/9c0GxRENBY0GRM0FjQYExBEIQWvNRUigBD//////////wAAAAAAAAAANBVJNAsyBjQMNQ41DzUQNRE1EjUTNRRC842IBPohCogE7zYaATULQv4UiATqNhoBNQtC8L+IBN82GgE1C0LxQCIxNBJEIQwxNRJEIjE2EkQiMTcSRIgEv4GiAa8iIkLzbCI1G0L+7jQNVwFZNQtC8hs0DVcBGDULQvN4NA1XARg1C0L0hzQNVwEQNQtC9Vc0DVcBEDULQvbNNA1XARA1C0L4QzQNVwEQNQtC+ZYiNQxC8hUiNQtC8jo0ASEHEkSIA+Y0FhY0E1cACDQTVwgIUFA0ElcACDQSVwgIUFA0EFcACDQQVwgIUDQQVxAIUDQQVxggUDQQVzgBUFA0EVcACDQRVwgIUFA0GBZQNBdQNQRC78s0GjQeHTQSIluXNRw0CzQeHTQSJFuXSTUNNBxJNA0MTTUbQvMKNBo0Hh00EiJblzUcNAs0Hh00EiRbl0k1GzQcSTQbDE01DULzHDQZFjQYFlA0F1A0FhZQNBVQNBNQNBJQNBFQNBBQNA4WUCEHMgZC8kgisgEhCLIQsgeyCLOJIrIBIQeyELIUshGyErOJNAEhBxJEiAL+NAs1DCOvNAwWUCOvIQQ0ECEFWwgWUKOIArIjrzQSVwAIUKOIAqYjrzQSJFs0DAkWUCijiAKWoogCkkmTIQYORCNbIQgIFjUEQu7pNAEhBxJEiAKqNAs1DCOvNAwWUCOvIQQ0ECEFWwgWUKOIAl4jrzQSVwgIUKOIAlIjrzQSIls0DAkWUCijiAJCoogCPkmTIQYORCNbIQgIFjUEQu6VNAEhBxJEiAJWNAs1DDQQVzgBFxRENBIiWzUNNBIkWzULNBAiWzUPNBAhBVs1DiOvNAsWUDUTI680DRZQNRIjrzQMFlAjryEENA4JFlCjiAHcSTUQNBOjiAHTNBIoo4gBzDQQoIgBxqKIAcJJkyEGDkQjWzURNA00DAg1EDQMNAsdNBCXNBEJNA8lCzQOCh0llzUNNAw0Dx0hBJc1DiSvNA0WUDQOFiSvUDQONAsdNBCXNA0NTTUMIjQRDkQjrzQQNAwiWwkWUCOvNAs0EQk0DCRbCRZQo4gBVDQSNBOjiAFMp0Q0ERY1BELtqjQBIQcSRIgBazQLNQw0EFc4ARcURDQSIls1DTQSJFs1CzQQIls1DzQQIQVbNQ4jrzQNFlA1EyOvNAsWUDUSI680DBZQI68hBDQOCRZQo4gA8Uk1EDQTo4gA6DQSKKOIAOE0EKCIANuiiADXSZMhBg5EI1s1ETQLNAwINRA0DDQNHTQQlzQRCTQPJQs0DgodJZc1CzQMNA8dIQSXNQ4krzQLFlA0DhYkr1A0DjQNHTQQlzQLDU01DCI0EQ5EI680DTQRCTQMJFsJFlAjrzQQNAwiWwkWUKOIAGk0EzQSo4gAYadENBEWNQRC7L9IiUwJSTUGMgmIAQeJCUlB/+5JNQYxFjQAIQgISTUACUcCOAcyChJEOBAhCBJEOAgSRIk2GgEXNQtC90U2GgEXNQtC95g2GgEXNQtC9+s2GgEXNQtC+NVJFYEgTAmvTFCJsUL9DjEWNAAhCAhJNQAJRwM4FDIKEkQ4ECEHEkQ4EU8CEkQ4EhJEiUkiWzUZSSRbNRhJVxAJNRdJIRBbNRZJVyEQNRVJVzEQNRNJV0EQNRJJV1EQNRFJV2E5NRCBmgFbNQ6JSSJbNRlJJFs1GElXEAk1F0khEFs1FklXIRA1E0lXMRA1EklXQRA1EVdROTUQiTQGCDUGiSEINQOJSSISTDQCEhFEiTQGNAdKD0H+8kL++rFC/E+xshVC/FaxsglC/EM=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `523`,
    1001: `524`,
    1002: `525`,
    1003: `526`,
    1004: `526`,
    1005: `527`,
    1006: `527`,
    1007: `528`,
    1008: `528`,
    1009: `529`,
    101: `21`,
    1010: `529`,
    1011: `530`,
    1012: `530`,
    1013: `531`,
    1014: `532`,
    1015: `532`,
    1016: `533`,
    1017: `534`,
    1018: `534`,
    1019: `535`,
    102: `21`,
    1020: `535`,
    1021: `536`,
    1022: `536`,
    1023: `537`,
    1024: `537`,
    1025: `538`,
    1026: `538`,
    1027: `540`,
    1028: `540`,
    1029: `541`,
    103: `21`,
    1030: `541`,
    1031: `541`,
    1032: `543`,
    1033: `543`,
    1034: `544`,
    1035: `545`,
    1036: `545`,
    1037: `546`,
    1038: `547`,
    1039: `548`,
    104: `21`,
    1040: `548`,
    1041: `549`,
    1042: `550`,
    1043: `550`,
    1044: `551`,
    1045: `552`,
    1046: `553`,
    1047: `553`,
    1048: `554`,
    1049: `555`,
    105: `21`,
    1050: `555`,
    1051: `556`,
    1052: `557`,
    1053: `557`,
    1054: `558`,
    1055: `559`,
    1056: `559`,
    1057: `560`,
    1058: `561`,
    1059: `562`,
    106: `21`,
    1060: `563`,
    1061: `564`,
    1062: `564`,
    1063: `565`,
    1064: `565`,
    1065: `567`,
    1066: `567`,
    1067: `568`,
    1068: `568`,
    1069: `569`,
    107: `21`,
    1070: `569`,
    1071: `570`,
    1072: `570`,
    1073: `571`,
    1074: `571`,
    1075: `571`,
    1076: `572`,
    1077: `573`,
    1078: `574`,
    1079: `575`,
    108: `21`,
    1080: `575`,
    1081: `575`,
    1082: `576`,
    1083: `577`,
    1084: `578`,
    1085: `578`,
    1086: `579`,
    1087: `580`,
    1088: `580`,
    1089: `581`,
    109: `21`,
    1090: `582`,
    1091: `583`,
    1092: `584`,
    1093: `584`,
    1094: `585`,
    1095: `586`,
    1096: `587`,
    1097: `589`,
    1098: `589`,
    1099: `589`,
    11: `2`,
    110: `21`,
    1100: `590`,
    1101: `590`,
    1102: `590`,
    1103: `592`,
    1104: `592`,
    1105: `593`,
    1106: `593`,
    1107: `593`,
    1108: `594`,
    1109: `594`,
    111: `21`,
    1110: `595`,
    1111: `595`,
    1112: `596`,
    1113: `596`,
    1114: `597`,
    1115: `598`,
    1116: `598`,
    1117: `599`,
    1118: `599`,
    1119: `600`,
    112: `21`,
    1120: `600`,
    1121: `600`,
    1122: `601`,
    1123: `602`,
    1124: `603`,
    1125: `611`,
    1126: `611`,
    1127: `612`,
    1128: `613`,
    1129: `614`,
    113: `21`,
    1130: `614`,
    1131: `615`,
    1132: `615`,
    1133: `616`,
    1134: `617`,
    1135: `618`,
    1136: `618`,
    1137: `619`,
    1138: `619`,
    1139: `620`,
    114: `21`,
    1140: `621`,
    1141: `622`,
    1142: `623`,
    1143: `623`,
    1144: `624`,
    1145: `625`,
    1146: `626`,
    1147: `627`,
    1148: `627`,
    1149: `628`,
    115: `21`,
    1150: `628`,
    1151: `628`,
    1152: `629`,
    1153: `630`,
    1154: `631`,
    1155: `631`,
    1156: `632`,
    1157: `633`,
    1158: `634`,
    1159: `635`,
    116: `21`,
    1160: `636`,
    1161: `636`,
    1162: `637`,
    1163: `638`,
    1164: `639`,
    1165: `640`,
    1166: `640`,
    1167: `640`,
    1168: `641`,
    1169: `642`,
    117: `21`,
    1170: `642`,
    1171: `642`,
    1172: `644`,
    1173: `645`,
    1174: `646`,
    1175: `646`,
    1176: `647`,
    1177: `648`,
    1178: `649`,
    1179: `650`,
    118: `21`,
    1180: `651`,
    1181: `651`,
    1182: `653`,
    1183: `653`,
    1184: `654`,
    1185: `654`,
    1186: `655`,
    1187: `656`,
    1188: `664`,
    1189: `664`,
    119: `21`,
    1190: `665`,
    1191: `665`,
    1192: `666`,
    1193: `666`,
    1194: `666`,
    1195: `669`,
    1196: `669`,
    1197: `670`,
    1198: `670`,
    1199: `671`,
    12: `2`,
    120: `21`,
    1200: `671`,
    1201: `671`,
    1202: `674`,
    1203: `674`,
    1204: `675`,
    1205: `675`,
    1206: `675`,
    1207: `676`,
    1208: `677`,
    1209: `678`,
    121: `21`,
    1210: `678`,
    1211: `679`,
    1212: `680`,
    1213: `681`,
    1214: `682`,
    1215: `683`,
    1216: `683`,
    1217: `684`,
    1218: `685`,
    1219: `686`,
    122: `21`,
    1220: `687`,
    1221: `687`,
    1222: `687`,
    1223: `688`,
    1224: `689`,
    1225: `689`,
    1226: `689`,
    1227: `691`,
    1228: `692`,
    1229: `693`,
    123: `21`,
    1230: `693`,
    1231: `694`,
    1232: `695`,
    1233: `696`,
    1234: `697`,
    1235: `698`,
    1236: `698`,
    1237: `700`,
    1238: `700`,
    1239: `701`,
    124: `21`,
    1240: `701`,
    1241: `702`,
    1242: `703`,
    1243: `708`,
    1244: `708`,
    1245: `709`,
    1246: `709`,
    1247: `710`,
    1248: `711`,
    1249: `712`,
    125: `21`,
    1250: `713`,
    1251: `713`,
    1252: `714`,
    1253: `714`,
    1254: `715`,
    1255: `715`,
    1256: `716`,
    1257: `717`,
    1258: `718`,
    1259: `719`,
    126: `21`,
    1260: `719`,
    1261: `720`,
    1262: `720`,
    1263: `721`,
    1264: `722`,
    1265: `723`,
    1266: `723`,
    1267: `724`,
    1268: `725`,
    1269: `725`,
    127: `21`,
    1270: `726`,
    1271: `726`,
    1272: `727`,
    1273: `727`,
    1274: `728`,
    1275: `729`,
    1276: `729`,
    1277: `730`,
    1278: `730`,
    1279: `732`,
    128: `21`,
    1280: `732`,
    1281: `734`,
    1282: `734`,
    1283: `735`,
    1284: `735`,
    1285: `735`,
    1286: `736`,
    1287: `736`,
    1288: `736`,
    1289: `736`,
    129: `21`,
    1290: `736`,
    1291: `736`,
    1292: `736`,
    1293: `736`,
    1294: `736`,
    1295: `736`,
    1296: `737`,
    1297: `737`,
    1298: `738`,
    1299: `739`,
    13: `2`,
    130: `21`,
    1300: `740`,
    1301: `741`,
    1302: `741`,
    1303: `742`,
    1304: `743`,
    1305: `743`,
    1306: `744`,
    1307: `744`,
    1308: `745`,
    1309: `746`,
    131: `21`,
    1310: `746`,
    1311: `747`,
    1312: `748`,
    1313: `749`,
    1314: `749`,
    1315: `750`,
    1316: `750`,
    1317: `751`,
    1318: `752`,
    1319: `752`,
    132: `21`,
    1320: `753`,
    1321: `754`,
    1322: `755`,
    1323: `755`,
    1324: `756`,
    1325: `756`,
    1326: `757`,
    1327: `758`,
    1328: `758`,
    1329: `759`,
    133: `21`,
    1330: `760`,
    1331: `761`,
    1332: `761`,
    1333: `762`,
    1334: `762`,
    1335: `762`,
    1336: `762`,
    1337: `762`,
    1338: `762`,
    1339: `763`,
    134: `21`,
    1340: `763`,
    1341: `764`,
    1342: `765`,
    1343: `765`,
    1344: `766`,
    1345: `767`,
    1346: `767`,
    1347: `768`,
    1348: `769`,
    1349: `770`,
    135: `21`,
    1350: `770`,
    1351: `771`,
    1352: `772`,
    1353: `772`,
    1354: `773`,
    1355: `774`,
    1356: `776`,
    1357: `777`,
    1358: `777`,
    1359: `778`,
    136: `21`,
    1360: `779`,
    1361: `779`,
    1362: `780`,
    1363: `781`,
    1364: `782`,
    1365: `782`,
    1366: `783`,
    1367: `784`,
    1368: `784`,
    1369: `785`,
    137: `21`,
    1370: `786`,
    1371: `787`,
    1372: `787`,
    1373: `788`,
    1374: `788`,
    1375: `789`,
    1376: `789`,
    1377: `790`,
    1378: `790`,
    1379: `791`,
    138: `21`,
    1380: `791`,
    1381: `792`,
    1382: `792`,
    1383: `792`,
    1384: `794`,
    1385: `794`,
    1386: `795`,
    1387: `796`,
    1388: `797`,
    1389: `797`,
    139: `21`,
    1390: `798`,
    1391: `798`,
    1392: `799`,
    1393: `799`,
    1394: `799`,
    1395: `800`,
    1396: `800`,
    1397: `801`,
    1398: `801`,
    1399: `802`,
    14: `2`,
    140: `21`,
    1400: `803`,
    1401: `804`,
    1402: `804`,
    1403: `805`,
    1404: `805`,
    1405: `806`,
    1406: `807`,
    1407: `808`,
    1408: `808`,
    1409: `809`,
    141: `21`,
    1410: `809`,
    1411: `810`,
    1412: `811`,
    1413: `812`,
    1414: `812`,
    1415: `813`,
    1416: `813`,
    1417: `814`,
    1418: `814`,
    1419: `815`,
    142: `21`,
    1420: `816`,
    1421: `816`,
    1422: `817`,
    1423: `818`,
    1424: `818`,
    1425: `819`,
    1426: `819`,
    1427: `820`,
    1428: `820`,
    1429: `821`,
    143: `21`,
    1430: `822`,
    1431: `822`,
    1432: `823`,
    1433: `824`,
    1434: `824`,
    1435: `825`,
    1436: `825`,
    1437: `826`,
    1438: `827`,
    1439: `828`,
    144: `21`,
    1440: `828`,
    1441: `829`,
    1442: `830`,
    1443: `838`,
    1444: `838`,
    1445: `839`,
    1446: `840`,
    1447: `841`,
    1448: `841`,
    1449: `842`,
    145: `21`,
    1450: `843`,
    1451: `851`,
    1452: `851`,
    1453: `852`,
    1454: `852`,
    1455: `853`,
    1456: `853`,
    1457: `853`,
    1458: `856`,
    1459: `856`,
    146: `21`,
    1460: `857`,
    1461: `858`,
    1462: `859`,
    1463: `859`,
    1464: `860`,
    1465: `861`,
    1466: `861`,
    1467: `862`,
    1468: `862`,
    1469: `863`,
    147: `21`,
    1470: `863`,
    1471: `864`,
    1472: `865`,
    1473: `865`,
    1474: `866`,
    1475: `866`,
    1476: `867`,
    1477: `867`,
    1478: `868`,
    1479: `869`,
    148: `21`,
    1480: `869`,
    1481: `870`,
    1482: `870`,
    1483: `871`,
    1484: `871`,
    1485: `872`,
    1486: `873`,
    1487: `873`,
    1488: `874`,
    1489: `874`,
    149: `21`,
    1490: `876`,
    1491: `876`,
    1492: `878`,
    1493: `878`,
    1494: `879`,
    1495: `879`,
    1496: `879`,
    1497: `880`,
    1498: `880`,
    1499: `882`,
    15: `2`,
    150: `21`,
    1500: `882`,
    1501: `883`,
    1502: `883`,
    1503: `884`,
    1504: `884`,
    1505: `884`,
    1506: `885`,
    1507: `885`,
    1508: `886`,
    1509: `887`,
    151: `21`,
    1510: `887`,
    1511: `888`,
    1512: `889`,
    1513: `890`,
    1514: `890`,
    1515: `891`,
    1516: `891`,
    1517: `891`,
    1518: `891`,
    1519: `891`,
    152: `21`,
    1520: `891`,
    1521: `891`,
    1522: `891`,
    1523: `891`,
    1524: `891`,
    1525: `892`,
    1526: `892`,
    1527: `893`,
    1528: `894`,
    1529: `895`,
    153: `21`,
    1530: `895`,
    1531: `896`,
    1532: `896`,
    1533: `897`,
    1534: `897`,
    1535: `898`,
    1536: `899`,
    1537: `899`,
    1538: `900`,
    1539: `901`,
    154: `21`,
    1540: `902`,
    1541: `902`,
    1542: `903`,
    1543: `903`,
    1544: `904`,
    1545: `905`,
    1546: `905`,
    1547: `906`,
    1548: `907`,
    1549: `908`,
    155: `21`,
    1550: `908`,
    1551: `909`,
    1552: `909`,
    1553: `909`,
    1554: `909`,
    1555: `909`,
    1556: `909`,
    1557: `910`,
    1558: `910`,
    1559: `911`,
    156: `21`,
    1560: `912`,
    1561: `912`,
    1562: `913`,
    1563: `914`,
    1564: `915`,
    1565: `915`,
    1566: `916`,
    1567: `917`,
    1568: `917`,
    1569: `918`,
    157: `21`,
    1570: `919`,
    1571: `919`,
    1572: `920`,
    1573: `921`,
    1574: `923`,
    1575: `924`,
    1576: `924`,
    1577: `925`,
    1578: `926`,
    1579: `926`,
    158: `21`,
    1580: `927`,
    1581: `928`,
    1582: `929`,
    1583: `929`,
    1584: `930`,
    1585: `931`,
    1586: `931`,
    1587: `932`,
    1588: `933`,
    1589: `934`,
    159: `21`,
    1590: `934`,
    1591: `935`,
    1592: `935`,
    1593: `936`,
    1594: `936`,
    1595: `937`,
    1596: `937`,
    1597: `938`,
    1598: `938`,
    1599: `939`,
    16: `2`,
    160: `21`,
    1600: `939`,
    1601: `939`,
    1602: `941`,
    1603: `941`,
    1604: `942`,
    1605: `943`,
    1606: `944`,
    1607: `944`,
    1608: `945`,
    1609: `945`,
    161: `21`,
    1610: `946`,
    1611: `947`,
    1612: `948`,
    1613: `948`,
    1614: `949`,
    1615: `949`,
    1616: `950`,
    1617: `950`,
    1618: `950`,
    1619: `951`,
    162: `21`,
    1620: `952`,
    1621: `953`,
    1622: `963`,
    1623: `963`,
    1624: `964`,
    1625: `965`,
    1626: `966`,
    1627: `966`,
    1628: `967`,
    1629: `967`,
    163: `21`,
    1630: `968`,
    1631: `969`,
    1632: `970`,
    1633: `970`,
    1634: `971`,
    1635: `971`,
    1636: `972`,
    1637: `973`,
    1638: `974`,
    1639: `974`,
    164: `21`,
    1640: `975`,
    1641: `975`,
    1642: `976`,
    1643: `976`,
    1644: `977`,
    1645: `978`,
    1646: `978`,
    1647: `979`,
    1648: `979`,
    1649: `980`,
    165: `21`,
    1650: `980`,
    1651: `981`,
    1652: `982`,
    1653: `982`,
    1654: `983`,
    1655: `984`,
    1656: `985`,
    1657: `985`,
    1658: `986`,
    1659: `987`,
    166: `21`,
    1660: `988`,
    1661: `988`,
    1662: `989`,
    1663: `990`,
    1664: `991`,
    1665: `991`,
    1666: `992`,
    1667: `993`,
    1668: `994`,
    1669: `995`,
    167: `21`,
    1670: `996`,
    1671: `996`,
    1672: `997`,
    1673: `997`,
    1674: `998`,
    1675: `999`,
    1676: `1000`,
    1677: `1001`,
    1678: `1002`,
    1679: `1002`,
    168: `21`,
    1680: `1002`,
    1681: `1003`,
    1682: `1003`,
    1683: `1004`,
    1684: `1005`,
    1685: `1005`,
    1686: `1005`,
    1687: `1006`,
    1688: `1007`,
    1689: `1008`,
    169: `21`,
    1690: `1008`,
    1691: `1009`,
    1692: `1010`,
    1693: `1011`,
    1694: `1012`,
    1695: `1013`,
    1696: `1013`,
    1697: `1013`,
    1698: `1014`,
    1699: `1015`,
    17: `2`,
    170: `21`,
    1700: `1015`,
    1701: `1015`,
    1702: `1017`,
    1703: `1018`,
    1704: `1019`,
    1705: `1019`,
    1706: `1020`,
    1707: `1021`,
    1708: `1022`,
    1709: `1023`,
    171: `21`,
    1710: `1024`,
    1711: `1024`,
    1712: `1025`,
    1713: `1026`,
    1714: `1026`,
    1715: `1027`,
    1716: `1027`,
    1717: `1028`,
    1718: `1028`,
    1719: `1029`,
    172: `21`,
    1720: `1030`,
    1721: `1045`,
    1722: `1045`,
    1723: `1046`,
    1724: `1046`,
    1725: `1047`,
    1726: `1048`,
    1727: `1048`,
    1728: `1049`,
    1729: `1049`,
    173: `21`,
    1730: `1050`,
    1731: `1050`,
    1732: `1051`,
    1733: `1052`,
    1734: `1052`,
    1735: `1053`,
    1736: `1053`,
    1737: `1054`,
    1738: `1054`,
    1739: `1055`,
    174: `21`,
    1740: `1056`,
    1741: `1056`,
    1742: `1057`,
    1743: `1058`,
    1744: `1058`,
    1745: `1059`,
    1746: `1060`,
    1747: `1060`,
    1748: `1061`,
    1749: `1062`,
    175: `21`,
    1750: `1063`,
    1751: `1063`,
    1752: `1064`,
    1753: `1065`,
    1754: `1066`,
    1755: `1067`,
    1756: `1068`,
    1757: `1068`,
    1758: `1069`,
    1759: `1069`,
    176: `21`,
    1760: `1070`,
    1761: `1070`,
    1762: `1071`,
    1763: `1072`,
    1764: `1072`,
    1765: `1073`,
    1766: `1074`,
    1767: `1074`,
    1768: `1075`,
    1769: `1076`,
    177: `21`,
    1770: `1077`,
    1771: `1077`,
    1772: `1078`,
    1773: `1079`,
    1774: `1080`,
    1775: `1080`,
    1776: `1081`,
    1777: `1082`,
    1778: `1083`,
    1779: `1084`,
    178: `21`,
    1780: `1085`,
    1781: `1085`,
    1782: `1086`,
    1783: `1086`,
    1784: `1087`,
    1785: `1088`,
    1786: `1088`,
    1787: `1089`,
    1788: `1090`,
    1789: `1090`,
    179: `21`,
    1790: `1091`,
    1791: `1092`,
    1792: `1093`,
    1793: `1094`,
    1794: `1094`,
    1795: `1095`,
    1796: `1096`,
    1797: `1097`,
    1798: `1097`,
    1799: `1098`,
    18: `2`,
    180: `21`,
    1800: `1098`,
    1801: `1099`,
    1802: `1100`,
    1803: `1101`,
    1804: `1101`,
    1805: `1102`,
    1806: `1102`,
    1807: `1103`,
    1808: `1103`,
    1809: `1104`,
    181: `22`,
    1810: `1105`,
    1811: `1105`,
    1812: `1106`,
    1813: `1107`,
    1814: `1107`,
    1815: `1108`,
    1816: `1109`,
    1817: `1109`,
    1818: `1110`,
    1819: `1110`,
    182: `22`,
    1820: `1111`,
    1821: `1111`,
    1822: `1112`,
    1823: `1113`,
    1824: `1113`,
    1825: `1114`,
    1826: `1115`,
    1827: `1115`,
    1828: `1116`,
    1829: `1117`,
    183: `22`,
    1830: `1118`,
    1831: `1118`,
    1832: `1119`,
    1833: `1120`,
    1834: `1121`,
    1835: `1131`,
    1836: `1132`,
    1837: `1133`,
    1838: `1133`,
    1839: `1134`,
    184: `23`,
    1840: `1135`,
    1841: `1136`,
    1842: `1137`,
    1843: `1138`,
    1844: `1138`,
    1845: `1139`,
    1846: `1140`,
    1847: `1141`,
    1848: `1142`,
    1849: `1142`,
    185: `23`,
    1850: `1142`,
    1851: `1143`,
    1852: `1143`,
    1853: `1144`,
    1854: `1145`,
    1855: `1146`,
    1856: `1146`,
    1857: `1147`,
    1858: `1148`,
    1859: `1149`,
    186: `23`,
    1860: `1150`,
    1861: `1150`,
    1862: `1150`,
    1863: `1151`,
    1864: `1152`,
    1865: `1162`,
    1866: `1162`,
    1867: `1163`,
    1868: `1163`,
    1869: `1164`,
    187: `23`,
    1870: `1164`,
    1871: `1164`,
    1872: `1167`,
    1873: `1167`,
    1874: `1169`,
    1875: `1169`,
    1876: `1171`,
    1877: `1171`,
    1878: `1172`,
    1879: `1172`,
    188: `23`,
    1880: `1172`,
    1881: `1173`,
    1882: `1173`,
    1883: `1175`,
    1884: `1175`,
    1885: `1176`,
    1886: `1176`,
    1887: `1177`,
    1888: `1177`,
    1889: `1177`,
    189: `23`,
    1890: `1178`,
    1891: `1178`,
    1892: `1179`,
    1893: `1180`,
    1894: `1180`,
    1895: `1181`,
    1896: `1182`,
    1897: `1183`,
    1898: `1183`,
    1899: `1184`,
    19: `2`,
    190: `23`,
    1900: `1184`,
    1901: `1184`,
    1902: `1184`,
    1903: `1184`,
    1904: `1184`,
    1905: `1184`,
    1906: `1184`,
    1907: `1184`,
    1908: `1184`,
    1909: `1185`,
    191: `23`,
    1910: `1185`,
    1911: `1186`,
    1912: `1187`,
    1913: `1188`,
    1914: `1188`,
    1915: `1189`,
    1916: `1189`,
    1917: `1190`,
    1918: `1190`,
    1919: `1191`,
    192: `23`,
    1920: `1192`,
    1921: `1193`,
    1922: `1194`,
    1923: `1195`,
    1924: `1195`,
    1925: `1196`,
    1926: `1196`,
    1927: `1197`,
    1928: `1198`,
    1929: `1198`,
    193: `23`,
    1930: `1199`,
    1931: `1200`,
    1932: `1201`,
    1933: `1201`,
    1934: `1202`,
    1935: `1203`,
    1936: `1203`,
    1937: `1204`,
    1938: `1205`,
    1939: `1205`,
    194: `23`,
    1940: `1206`,
    1941: `1207`,
    1942: `1207`,
    1943: `1208`,
    1944: `1209`,
    1945: `1209`,
    1946: `1210`,
    1947: `1211`,
    1948: `1213`,
    1949: `1214`,
    195: `23`,
    1950: `1214`,
    1951: `1215`,
    1952: `1216`,
    1953: `1216`,
    1954: `1217`,
    1955: `1218`,
    1956: `1219`,
    1957: `1219`,
    1958: `1220`,
    1959: `1221`,
    196: `23`,
    1960: `1222`,
    1961: `1222`,
    1962: `1223`,
    1963: `1224`,
    1964: `1225`,
    1965: `1225`,
    1966: `1226`,
    1967: `1227`,
    1968: `1228`,
    1969: `1228`,
    197: `23`,
    1970: `1229`,
    1971: `1230`,
    1972: `1231`,
    1973: `1232`,
    1974: `1232`,
    1975: `1233`,
    1976: `1233`,
    1977: `1234`,
    1978: `1234`,
    1979: `1235`,
    198: `23`,
    1980: `1235`,
    1981: `1236`,
    1982: `1236`,
    1983: `1237`,
    1984: `1237`,
    1985: `1237`,
    1986: `1239`,
    1987: `1239`,
    1988: `1240`,
    1989: `1241`,
    199: `23`,
    1990: `1242`,
    1991: `1242`,
    1992: `1243`,
    1993: `1243`,
    1994: `1244`,
    1995: `1245`,
    1996: `1246`,
    1997: `1246`,
    1998: `1247`,
    1999: `1247`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1248`,
    2001: `1248`,
    2002: `1248`,
    2003: `1249`,
    2004: `1250`,
    2005: `1251`,
    2006: `1261`,
    2007: `1261`,
    2008: `1262`,
    2009: `1263`,
    201: `23`,
    2010: `1264`,
    2011: `1264`,
    2012: `1265`,
    2013: `1265`,
    2014: `1266`,
    2015: `1267`,
    2016: `1268`,
    2017: `1268`,
    2018: `1269`,
    2019: `1269`,
    202: `23`,
    2020: `1270`,
    2021: `1271`,
    2022: `1272`,
    2023: `1272`,
    2024: `1273`,
    2025: `1273`,
    2026: `1274`,
    2027: `1274`,
    2028: `1275`,
    2029: `1276`,
    203: `23`,
    2030: `1276`,
    2031: `1277`,
    2032: `1277`,
    2033: `1278`,
    2034: `1278`,
    2035: `1279`,
    2036: `1280`,
    2037: `1280`,
    2038: `1281`,
    2039: `1282`,
    204: `23`,
    2040: `1283`,
    2041: `1283`,
    2042: `1284`,
    2043: `1285`,
    2044: `1286`,
    2045: `1286`,
    2046: `1287`,
    2047: `1288`,
    2048: `1289`,
    2049: `1289`,
    205: `23`,
    2050: `1290`,
    2051: `1291`,
    2052: `1292`,
    2053: `1293`,
    2054: `1294`,
    2055: `1294`,
    2056: `1295`,
    2057: `1295`,
    2058: `1296`,
    2059: `1297`,
    206: `23`,
    2060: `1298`,
    2061: `1299`,
    2062: `1300`,
    2063: `1300`,
    2064: `1300`,
    2065: `1301`,
    2066: `1301`,
    2067: `1302`,
    2068: `1303`,
    2069: `1303`,
    207: `23`,
    2070: `1303`,
    2071: `1304`,
    2072: `1305`,
    2073: `1306`,
    2074: `1306`,
    2075: `1307`,
    2076: `1308`,
    2077: `1309`,
    2078: `1310`,
    2079: `1311`,
    208: `23`,
    2080: `1311`,
    2081: `1311`,
    2082: `1312`,
    2083: `1313`,
    2084: `1313`,
    2085: `1313`,
    2086: `1315`,
    2087: `1316`,
    2088: `1317`,
    2089: `1317`,
    209: `23`,
    2090: `1318`,
    2091: `1319`,
    2092: `1320`,
    2093: `1321`,
    2094: `1322`,
    2095: `1322`,
    2096: `1323`,
    2097: `1324`,
    2098: `1324`,
    2099: `1325`,
    21: `2`,
    210: `23`,
    2100: `1325`,
    2101: `1326`,
    2102: `1326`,
    2103: `1327`,
    2104: `1328`,
    2105: `1343`,
    2106: `1343`,
    2107: `1344`,
    2108: `1344`,
    2109: `1345`,
    211: `23`,
    2110: `1346`,
    2111: `1346`,
    2112: `1347`,
    2113: `1347`,
    2114: `1348`,
    2115: `1348`,
    2116: `1349`,
    2117: `1350`,
    2118: `1350`,
    2119: `1351`,
    212: `23`,
    2120: `1351`,
    2121: `1352`,
    2122: `1352`,
    2123: `1353`,
    2124: `1354`,
    2125: `1354`,
    2126: `1355`,
    2127: `1356`,
    2128: `1356`,
    2129: `1357`,
    213: `23`,
    2130: `1358`,
    2131: `1358`,
    2132: `1359`,
    2133: `1360`,
    2134: `1361`,
    2135: `1361`,
    2136: `1362`,
    2137: `1363`,
    2138: `1364`,
    2139: `1365`,
    214: `23`,
    2140: `1366`,
    2141: `1366`,
    2142: `1367`,
    2143: `1367`,
    2144: `1368`,
    2145: `1368`,
    2146: `1369`,
    2147: `1370`,
    2148: `1370`,
    2149: `1371`,
    215: `23`,
    2150: `1372`,
    2151: `1372`,
    2152: `1373`,
    2153: `1374`,
    2154: `1375`,
    2155: `1375`,
    2156: `1376`,
    2157: `1377`,
    2158: `1378`,
    2159: `1378`,
    216: `23`,
    2160: `1379`,
    2161: `1380`,
    2162: `1381`,
    2163: `1382`,
    2164: `1383`,
    2165: `1383`,
    2166: `1384`,
    2167: `1384`,
    2168: `1385`,
    2169: `1386`,
    217: `23`,
    2170: `1386`,
    2171: `1387`,
    2172: `1388`,
    2173: `1388`,
    2174: `1389`,
    2175: `1390`,
    2176: `1391`,
    2177: `1392`,
    2178: `1392`,
    2179: `1393`,
    218: `25`,
    2180: `1394`,
    2181: `1395`,
    2182: `1395`,
    2183: `1396`,
    2184: `1396`,
    2185: `1397`,
    2186: `1398`,
    2187: `1399`,
    2188: `1399`,
    2189: `1400`,
    219: `28`,
    2190: `1400`,
    2191: `1401`,
    2192: `1401`,
    2193: `1402`,
    2194: `1403`,
    2195: `1403`,
    2196: `1404`,
    2197: `1404`,
    2198: `1405`,
    2199: `1405`,
    22: `2`,
    220: `28`,
    2200: `1406`,
    2201: `1407`,
    2202: `1407`,
    2203: `1408`,
    2204: `1409`,
    2205: `1409`,
    2206: `1410`,
    2207: `1411`,
    2208: `1411`,
    2209: `1412`,
    221: `29`,
    2210: `1413`,
    2211: `1413`,
    2212: `1414`,
    2213: `1415`,
    2214: `1416`,
    2215: `1416`,
    2216: `1417`,
    2217: `1418`,
    2218: `1419`,
    2219: `1429`,
    222: `29`,
    2220: `1430`,
    2221: `1431`,
    2222: `1431`,
    2223: `1432`,
    2224: `1433`,
    2225: `1434`,
    2226: `1435`,
    2227: `1436`,
    2228: `1436`,
    2229: `1437`,
    223: `30`,
    2230: `1438`,
    2231: `1439`,
    2232: `1440`,
    2233: `1440`,
    2234: `1440`,
    2235: `1441`,
    2236: `1442`,
    2237: `1443`,
    2238: `1443`,
    2239: `1444`,
    224: `31`,
    2240: `1445`,
    2241: `1446`,
    2242: `1446`,
    2243: `1447`,
    2244: `1448`,
    2245: `1448`,
    2246: `1448`,
    2247: `1449`,
    2248: `1450`,
    2249: `1460`,
    225: `31`,
    2250: `1460`,
    2251: `1461`,
    2252: `1461`,
    2253: `1462`,
    2254: `1462`,
    2255: `1462`,
    2256: `1465`,
    2257: `1465`,
    2258: `1467`,
    2259: `1467`,
    226: `31`,
    2260: `1469`,
    2261: `1469`,
    2262: `1470`,
    2263: `1470`,
    2264: `1470`,
    2265: `1471`,
    2266: `1471`,
    2267: `1473`,
    2268: `1473`,
    2269: `1474`,
    227: `32`,
    2270: `1474`,
    2271: `1475`,
    2272: `1475`,
    2273: `1475`,
    2274: `1476`,
    2275: `1476`,
    2276: `1477`,
    2277: `1478`,
    2278: `1478`,
    2279: `1479`,
    228: `32`,
    2280: `1480`,
    2281: `1481`,
    2282: `1481`,
    2283: `1482`,
    2284: `1482`,
    2285: `1482`,
    2286: `1482`,
    2287: `1482`,
    2288: `1482`,
    2289: `1482`,
    229: `33`,
    2290: `1482`,
    2291: `1482`,
    2292: `1482`,
    2293: `1483`,
    2294: `1483`,
    2295: `1484`,
    2296: `1485`,
    2297: `1486`,
    2298: `1486`,
    2299: `1487`,
    23: `2`,
    230: `33`,
    2300: `1487`,
    2301: `1488`,
    2302: `1489`,
    2303: `1490`,
    2304: `1490`,
    2305: `1491`,
    2306: `1492`,
    2307: `1493`,
    2308: `1493`,
    2309: `1494`,
    231: `34`,
    2310: `1494`,
    2311: `1495`,
    2312: `1496`,
    2313: `1496`,
    2314: `1497`,
    2315: `1498`,
    2316: `1499`,
    2317: `1499`,
    2318: `1500`,
    2319: `1501`,
    232: `35`,
    2320: `1501`,
    2321: `1502`,
    2322: `1503`,
    2323: `1503`,
    2324: `1504`,
    2325: `1505`,
    2326: `1505`,
    2327: `1506`,
    2328: `1507`,
    2329: `1507`,
    233: `38`,
    2330: `1508`,
    2331: `1509`,
    2332: `1511`,
    2333: `1512`,
    2334: `1512`,
    2335: `1513`,
    2336: `1514`,
    2337: `1514`,
    2338: `1515`,
    2339: `1516`,
    234: `38`,
    2340: `1517`,
    2341: `1517`,
    2342: `1518`,
    2343: `1519`,
    2344: `1520`,
    2345: `1520`,
    2346: `1521`,
    2347: `1522`,
    2348: `1523`,
    2349: `1523`,
    235: `38`,
    2350: `1524`,
    2351: `1525`,
    2352: `1526`,
    2353: `1526`,
    2354: `1527`,
    2355: `1528`,
    2356: `1529`,
    2357: `1530`,
    2358: `1530`,
    2359: `1531`,
    236: `39`,
    2360: `1531`,
    2361: `1532`,
    2362: `1532`,
    2363: `1533`,
    2364: `1533`,
    2365: `1534`,
    2366: `1534`,
    2367: `1535`,
    2368: `1535`,
    2369: `1535`,
    237: `39`,
    2370: `1537`,
    2371: `1537`,
    2372: `1538`,
    2373: `1539`,
    2374: `1540`,
    2375: `1540`,
    2376: `1541`,
    2377: `1541`,
    2378: `1542`,
    2379: `1542`,
    238: `40`,
    2380: `1542`,
    2381: `1543`,
    2382: `1544`,
    2383: `1545`,
    2384: `1555`,
    2385: `1555`,
    2386: `1556`,
    2387: `1557`,
    2388: `1558`,
    2389: `1558`,
    239: `41`,
    2390: `1559`,
    2391: `1559`,
    2392: `1560`,
    2393: `1561`,
    2394: `1562`,
    2395: `1562`,
    2396: `1563`,
    2397: `1563`,
    2398: `1564`,
    2399: `1565`,
    24: `2`,
    240: `41`,
    2400: `1566`,
    2401: `1566`,
    2402: `1567`,
    2403: `1567`,
    2404: `1568`,
    2405: `1568`,
    2406: `1569`,
    2407: `1570`,
    2408: `1570`,
    2409: `1571`,
    241: `42`,
    2410: `1572`,
    2411: `1573`,
    2412: `1573`,
    2413: `1574`,
    2414: `1575`,
    2415: `1576`,
    2416: `1576`,
    2417: `1577`,
    2418: `1578`,
    2419: `1579`,
    242: `42`,
    2420: `1579`,
    2421: `1580`,
    2422: `1581`,
    2423: `1582`,
    2424: `1582`,
    2425: `1583`,
    2426: `1584`,
    2427: `1585`,
    2428: `1585`,
    2429: `1586`,
    243: `42`,
    2430: `1587`,
    2431: `1588`,
    2432: `1589`,
    2433: `1590`,
    2434: `1590`,
    2435: `1591`,
    2436: `1591`,
    2437: `1592`,
    2438: `1593`,
    2439: `1594`,
    244: `43`,
    2440: `1595`,
    2441: `1596`,
    2442: `1596`,
    2443: `1596`,
    2444: `1597`,
    2445: `1598`,
    2446: `1598`,
    2447: `1599`,
    2448: `1599`,
    2449: `1600`,
    245: `43`,
    2450: `1601`,
    2451: `1601`,
    2452: `1601`,
    2453: `1602`,
    2454: `1602`,
    2455: `1603`,
    2456: `1604`,
    2457: `1605`,
    2458: `1605`,
    2459: `1605`,
    246: `44`,
    2460: `1606`,
    2461: `1606`,
    2462: `1607`,
    2463: `1608`,
    2464: `1608`,
    2465: `1608`,
    2466: `1609`,
    2467: `1610`,
    2468: `1610`,
    2469: `1610`,
    247: `44`,
    2470: `1612`,
    2471: `1613`,
    2472: `1614`,
    2473: `1614`,
    2474: `1615`,
    2475: `1616`,
    2476: `1617`,
    2477: `1618`,
    2478: `1619`,
    2479: `1619`,
    248: `44`,
    2480: `1620`,
    2481: `1620`,
    2482: `1621`,
    2483: `1621`,
    2484: `1622`,
    2485: `1623`,
    2486: `1623`,
    2487: `1624`,
    2488: `1624`,
    2489: `1625`,
    249: `45`,
    2490: `1625`,
    2491: `1626`,
    2492: `1627`,
    2493: `1627`,
    2494: `1628`,
    2495: `1629`,
    2496: `1629`,
    2497: `1630`,
    2498: `1631`,
    2499: `1631`,
    25: `2`,
    250: `46`,
    2500: `1632`,
    2501: `1633`,
    2502: `1634`,
    2503: `1634`,
    2504: `1635`,
    2505: `1636`,
    2506: `1637`,
    2507: `1638`,
    2508: `1639`,
    2509: `1639`,
    251: `47`,
    2510: `1640`,
    2511: `1640`,
    2512: `1641`,
    2513: `1641`,
    2514: `1642`,
    2515: `1643`,
    2516: `1643`,
    2517: `1644`,
    2518: `1645`,
    2519: `1645`,
    252: `47`,
    2520: `1646`,
    2521: `1647`,
    2522: `1648`,
    2523: `1648`,
    2524: `1649`,
    2525: `1650`,
    2526: `1651`,
    2527: `1651`,
    2528: `1652`,
    2529: `1653`,
    253: `48`,
    2530: `1654`,
    2531: `1655`,
    2532: `1656`,
    2533: `1656`,
    2534: `1657`,
    2535: `1657`,
    2536: `1658`,
    2537: `1659`,
    2538: `1659`,
    2539: `1660`,
    254: `48`,
    2540: `1661`,
    2541: `1661`,
    2542: `1662`,
    2543: `1663`,
    2544: `1664`,
    2545: `1665`,
    2546: `1665`,
    2547: `1666`,
    2548: `1667`,
    2549: `1668`,
    255: `48`,
    2550: `1668`,
    2551: `1669`,
    2552: `1669`,
    2553: `1670`,
    2554: `1671`,
    2555: `1672`,
    2556: `1672`,
    2557: `1673`,
    2558: `1673`,
    2559: `1674`,
    256: `49`,
    2560: `1674`,
    2561: `1675`,
    2562: `1676`,
    2563: `1676`,
    2564: `1677`,
    2565: `1677`,
    2566: `1678`,
    2567: `1678`,
    2568: `1679`,
    2569: `1680`,
    257: `49`,
    2570: `1680`,
    2571: `1681`,
    2572: `1682`,
    2573: `1682`,
    2574: `1683`,
    2575: `1683`,
    2576: `1684`,
    2577: `1685`,
    2578: `1686`,
    2579: `1686`,
    258: `50`,
    2580: `1687`,
    2581: `1688`,
    2582: `1698`,
    2583: `1699`,
    2584: `1700`,
    2585: `1700`,
    2586: `1701`,
    2587: `1702`,
    2588: `1703`,
    2589: `1704`,
    259: `50`,
    2590: `1705`,
    2591: `1705`,
    2592: `1706`,
    2593: `1707`,
    2594: `1708`,
    2595: `1709`,
    2596: `1709`,
    2597: `1709`,
    2598: `1710`,
    2599: `1710`,
    26: `2`,
    260: `50`,
    2600: `1711`,
    2601: `1711`,
    2602: `1712`,
    2603: `1713`,
    2604: `1713`,
    2605: `1713`,
    2606: `1714`,
    2607: `1715`,
    2608: `1725`,
    2609: `1725`,
    261: `51`,
    2610: `1726`,
    2611: `1726`,
    2612: `1727`,
    2613: `1727`,
    2614: `1727`,
    2615: `1730`,
    2616: `1730`,
    2617: `1732`,
    2618: `1732`,
    2619: `1734`,
    262: `52`,
    2620: `1734`,
    2621: `1735`,
    2622: `1735`,
    2623: `1735`,
    2624: `1736`,
    2625: `1737`,
    2626: `1738`,
    2627: `1738`,
    2628: `1739`,
    2629: `1740`,
    263: `53`,
    2630: `1741`,
    2631: `1741`,
    2632: `1742`,
    2633: `1742`,
    2634: `1742`,
    2635: `1742`,
    2636: `1742`,
    2637: `1742`,
    2638: `1742`,
    2639: `1742`,
    264: `53`,
    2640: `1742`,
    2641: `1742`,
    2642: `1743`,
    2643: `1743`,
    2644: `1744`,
    2645: `1745`,
    2646: `1746`,
    2647: `1746`,
    2648: `1747`,
    2649: `1747`,
    265: `54`,
    2650: `1748`,
    2651: `1748`,
    2652: `1749`,
    2653: `1750`,
    2654: `1751`,
    2655: `1752`,
    2656: `1753`,
    2657: `1753`,
    2658: `1754`,
    2659: `1754`,
    266: `54`,
    2660: `1755`,
    2661: `1756`,
    2662: `1756`,
    2663: `1757`,
    2664: `1758`,
    2665: `1759`,
    2666: `1759`,
    2667: `1760`,
    2668: `1761`,
    2669: `1761`,
    267: `54`,
    2670: `1762`,
    2671: `1763`,
    2672: `1763`,
    2673: `1764`,
    2674: `1765`,
    2675: `1765`,
    2676: `1766`,
    2677: `1767`,
    2678: `1767`,
    2679: `1768`,
    268: `55`,
    2680: `1769`,
    2681: `1771`,
    2682: `1772`,
    2683: `1772`,
    2684: `1773`,
    2685: `1774`,
    2686: `1774`,
    2687: `1775`,
    2688: `1776`,
    2689: `1777`,
    269: `55`,
    2690: `1777`,
    2691: `1778`,
    2692: `1779`,
    2693: `1780`,
    2694: `1780`,
    2695: `1781`,
    2696: `1782`,
    2697: `1783`,
    2698: `1783`,
    2699: `1784`,
    27: `2`,
    270: `56`,
    2700: `1785`,
    2701: `1786`,
    2702: `1786`,
    2703: `1787`,
    2704: `1788`,
    2705: `1789`,
    2706: `1790`,
    2707: `1790`,
    2708: `1791`,
    2709: `1791`,
    271: `56`,
    2710: `1792`,
    2711: `1792`,
    2712: `1793`,
    2713: `1793`,
    2714: `1794`,
    2715: `1794`,
    2716: `1795`,
    2717: `1795`,
    2718: `1795`,
    2719: `1797`,
    272: `56`,
    2720: `1797`,
    2721: `1798`,
    2722: `1799`,
    2723: `1800`,
    2724: `1800`,
    2725: `1801`,
    2726: `1801`,
    2727: `1802`,
    2728: `1802`,
    2729: `1802`,
    273: `57`,
    2730: `1803`,
    2731: `1804`,
    2732: `1805`,
    2733: `1815`,
    2734: `1815`,
    2735: `1816`,
    2736: `1817`,
    2737: `1818`,
    2738: `1818`,
    2739: `1819`,
    274: `58`,
    2740: `1819`,
    2741: `1820`,
    2742: `1821`,
    2743: `1822`,
    2744: `1822`,
    2745: `1823`,
    2746: `1823`,
    2747: `1824`,
    2748: `1825`,
    2749: `1826`,
    275: `58`,
    2750: `1826`,
    2751: `1827`,
    2752: `1827`,
    2753: `1828`,
    2754: `1828`,
    2755: `1829`,
    2756: `1830`,
    2757: `1830`,
    2758: `1831`,
    2759: `1832`,
    276: `59`,
    2760: `1833`,
    2761: `1833`,
    2762: `1834`,
    2763: `1835`,
    2764: `1836`,
    2765: `1836`,
    2766: `1837`,
    2767: `1838`,
    2768: `1839`,
    2769: `1839`,
    277: `59`,
    2770: `1840`,
    2771: `1841`,
    2772: `1842`,
    2773: `1842`,
    2774: `1843`,
    2775: `1844`,
    2776: `1845`,
    2777: `1845`,
    2778: `1846`,
    2779: `1847`,
    278: `59`,
    2780: `1848`,
    2781: `1849`,
    2782: `1850`,
    2783: `1850`,
    2784: `1851`,
    2785: `1851`,
    2786: `1852`,
    2787: `1853`,
    2788: `1854`,
    2789: `1855`,
    279: `60`,
    2790: `1856`,
    2791: `1856`,
    2792: `1856`,
    2793: `1857`,
    2794: `1858`,
    2795: `1858`,
    2796: `1859`,
    2797: `1859`,
    2798: `1860`,
    2799: `1861`,
    28: `2`,
    280: `61`,
    2800: `1861`,
    2801: `1861`,
    2802: `1862`,
    2803: `1862`,
    2804: `1863`,
    2805: `1864`,
    2806: `1865`,
    2807: `1865`,
    2808: `1865`,
    2809: `1866`,
    281: `61`,
    2810: `1866`,
    2811: `1867`,
    2812: `1868`,
    2813: `1868`,
    2814: `1868`,
    2815: `1869`,
    2816: `1870`,
    2817: `1870`,
    2818: `1870`,
    2819: `1872`,
    282: `62`,
    2820: `1873`,
    2821: `1874`,
    2822: `1874`,
    2823: `1875`,
    2824: `1876`,
    2825: `1877`,
    2826: `1878`,
    2827: `1879`,
    2828: `1879`,
    2829: `1880`,
    283: `62`,
    2830: `1880`,
    2831: `1881`,
    2832: `1881`,
    2833: `1882`,
    2834: `1883`,
    2835: `1883`,
    2836: `1884`,
    2837: `1884`,
    2838: `1885`,
    2839: `1885`,
    284: `62`,
    2840: `1886`,
    2841: `1887`,
    2842: `1887`,
    2843: `1888`,
    2844: `1889`,
    2845: `1889`,
    2846: `1890`,
    2847: `1891`,
    2848: `1891`,
    2849: `1892`,
    285: `63`,
    2850: `1893`,
    2851: `1894`,
    2852: `1894`,
    2853: `1895`,
    2854: `1896`,
    2855: `1897`,
    2856: `1898`,
    2857: `1899`,
    2858: `1899`,
    2859: `1900`,
    286: `64`,
    2860: `1900`,
    2861: `1901`,
    2862: `1901`,
    2863: `1902`,
    2864: `1903`,
    2865: `1903`,
    2866: `1904`,
    2867: `1905`,
    2868: `1905`,
    2869: `1906`,
    287: `64`,
    2870: `1907`,
    2871: `1908`,
    2872: `1908`,
    2873: `1909`,
    2874: `1910`,
    2875: `1911`,
    2876: `1911`,
    2877: `1912`,
    2878: `1913`,
    2879: `1914`,
    288: `65`,
    2880: `1915`,
    2881: `1916`,
    2882: `1916`,
    2883: `1917`,
    2884: `1917`,
    2885: `1918`,
    2886: `1919`,
    2887: `1919`,
    2888: `1920`,
    2889: `1921`,
    289: `65`,
    2890: `1921`,
    2891: `1922`,
    2892: `1923`,
    2893: `1924`,
    2894: `1925`,
    2895: `1925`,
    2896: `1926`,
    2897: `1927`,
    2898: `1928`,
    2899: `1928`,
    29: `2`,
    290: `65`,
    2900: `1929`,
    2901: `1929`,
    2902: `1930`,
    2903: `1931`,
    2904: `1932`,
    2905: `1932`,
    2906: `1933`,
    2907: `1933`,
    2908: `1934`,
    2909: `1934`,
    291: `66`,
    2910: `1935`,
    2911: `1936`,
    2912: `1936`,
    2913: `1937`,
    2914: `1938`,
    2915: `1938`,
    2916: `1939`,
    2917: `1939`,
    2918: `1940`,
    2919: `1940`,
    292: `67`,
    2920: `1941`,
    2921: `1942`,
    2922: `1942`,
    2923: `1943`,
    2924: `1943`,
    2925: `1944`,
    2926: `1945`,
    2927: `1946`,
    2928: `1946`,
    2929: `1947`,
    293: `68`,
    2930: `1948`,
    2931: `1958`,
    2932: `1959`,
    2933: `1960`,
    2934: `1960`,
    2935: `1961`,
    2936: `1962`,
    2937: `1963`,
    2938: `1964`,
    2939: `1965`,
    294: `68`,
    2940: `1965`,
    2941: `1966`,
    2942: `1967`,
    2943: `1968`,
    2944: `1969`,
    2945: `1969`,
    2946: `1969`,
    2947: `1970`,
    2948: `1970`,
    2949: `1971`,
    295: `69`,
    2950: `1971`,
    2951: `1972`,
    2952: `1973`,
    2953: `1973`,
    2954: `1973`,
    2955: `1974`,
    2956: `1975`,
    2957: `1985`,
    2958: `1985`,
    2959: `1986`,
    296: `69`,
    2960: `1986`,
    2961: `1987`,
    2962: `1987`,
    2963: `1987`,
    2964: `1990`,
    2965: `1990`,
    2966: `1992`,
    2967: `1992`,
    2968: `1994`,
    2969: `1994`,
    297: `69`,
    2970: `1995`,
    2971: `1995`,
    2972: `1995`,
    2973: `1996`,
    2974: `1996`,
    2975: `1997`,
    2976: `1998`,
    2977: `1999`,
    2978: `2000`,
    2979: `2001`,
    298: `70`,
    2980: `2001`,
    2981: `2002`,
    2982: `2002`,
    2983: `2002`,
    2984: `2002`,
    2985: `2002`,
    2986: `2002`,
    2987: `2002`,
    2988: `2002`,
    2989: `2002`,
    299: `70`,
    2990: `2002`,
    2991: `2003`,
    2992: `2003`,
    2993: `2004`,
    2994: `2005`,
    2995: `2006`,
    2996: `2006`,
    2997: `2007`,
    2998: `2007`,
    2999: `2008`,
    3: `2`,
    30: `2`,
    300: `71`,
    3000: `2009`,
    3001: `2010`,
    3002: `2010`,
    3003: `2011`,
    3004: `2012`,
    3005: `2013`,
    3006: `2013`,
    3007: `2014`,
    3008: `2014`,
    3009: `2015`,
    301: `71`,
    3010: `2016`,
    3011: `2016`,
    3012: `2017`,
    3013: `2018`,
    3014: `2019`,
    3015: `2019`,
    3016: `2020`,
    3017: `2021`,
    3018: `2021`,
    3019: `2022`,
    302: `71`,
    3020: `2023`,
    3021: `2023`,
    3022: `2024`,
    3023: `2025`,
    3024: `2025`,
    3025: `2026`,
    3026: `2027`,
    3027: `2027`,
    3028: `2028`,
    3029: `2029`,
    303: `72`,
    3030: `2031`,
    3031: `2032`,
    3032: `2032`,
    3033: `2033`,
    3034: `2034`,
    3035: `2034`,
    3036: `2035`,
    3037: `2036`,
    3038: `2037`,
    3039: `2037`,
    304: `73`,
    3040: `2038`,
    3041: `2039`,
    3042: `2040`,
    3043: `2040`,
    3044: `2041`,
    3045: `2042`,
    3046: `2043`,
    3047: `2043`,
    3048: `2044`,
    3049: `2045`,
    305: `74`,
    3050: `2046`,
    3051: `2046`,
    3052: `2047`,
    3053: `2048`,
    3054: `2049`,
    3055: `2050`,
    3056: `2050`,
    3057: `2051`,
    3058: `2051`,
    3059: `2052`,
    306: `74`,
    3060: `2052`,
    3061: `2053`,
    3062: `2053`,
    3063: `2054`,
    3064: `2054`,
    3065: `2055`,
    3066: `2055`,
    3067: `2055`,
    3068: `2057`,
    3069: `2057`,
    307: `75`,
    3070: `2058`,
    3071: `2058`,
    3072: `2059`,
    3073: `2060`,
    3074: `2060`,
    3075: `2060`,
    3076: `2061`,
    3077: `2061`,
    3078: `2062`,
    3079: `2062`,
    308: `76`,
    3080: `2063`,
    3081: `2064`,
    3082: `2067`,
    3083: `2067`,
    3084: `2067`,
    3085: `2068`,
    3086: `2068`,
    3087: `2069`,
    3088: `2069`,
    3089: `2070`,
    309: `77`,
    3090: `2071`,
    3091: `2072`,
    3092: `2072`,
    3093: `2073`,
    3094: `2074`,
    3095: `2075`,
    3096: `2076`,
    3097: `2077`,
    3098: `2077`,
    3099: `2078`,
    31: `2`,
    310: `77`,
    3100: `2078`,
    3101: `2079`,
    3102: `2079`,
    3103: `2080`,
    3104: `2081`,
    3105: `2082`,
    3106: `2083`,
    3107: `2084`,
    3108: `2085`,
    3109: `2085`,
    311: `78`,
    3110: `2085`,
    3111: `2086`,
    3112: `2087`,
    3113: `2088`,
    3114: `2088`,
    3115: `2089`,
    3116: `2089`,
    3117: `2089`,
    3118: `2090`,
    3119: `2091`,
    312: `79`,
    3120: `2092`,
    3121: `2092`,
    3122: `2092`,
    3123: `2093`,
    3124: `2094`,
    3125: `2095`,
    3126: `2095`,
    3127: `2096`,
    3128: `2097`,
    3129: `2098`,
    313: `79`,
    3130: `2098`,
    3131: `2099`,
    3132: `2100`,
    3133: `2101`,
    3134: `2102`,
    3135: `2103`,
    3136: `2104`,
    3137: `2104`,
    3138: `2104`,
    3139: `2105`,
    314: `81`,
    3140: `2106`,
    3141: `2106`,
    3142: `2106`,
    3143: `2108`,
    3144: `2109`,
    3145: `2110`,
    3146: `2110`,
    3147: `2111`,
    3148: `2112`,
    3149: `2113`,
    315: `81`,
    3150: `2114`,
    3151: `2115`,
    3152: `2115`,
    3153: `2116`,
    3154: `2117`,
    3155: `2118`,
    3156: `2118`,
    3157: `2119`,
    3158: `2119`,
    3159: `2119`,
    316: `82`,
    3160: `2121`,
    3161: `2121`,
    3162: `2122`,
    3163: `2122`,
    3164: `2123`,
    3165: `2124`,
    3166: `2124`,
    3167: `2124`,
    3168: `2125`,
    3169: `2125`,
    317: `83`,
    3170: `2126`,
    3171: `2126`,
    3172: `2127`,
    3173: `2128`,
    3174: `2131`,
    3175: `2131`,
    3176: `2131`,
    3177: `2132`,
    3178: `2132`,
    3179: `2133`,
    318: `84`,
    3180: `2133`,
    3181: `2134`,
    3182: `2135`,
    3183: `2136`,
    3184: `2136`,
    3185: `2137`,
    3186: `2138`,
    3187: `2139`,
    3188: `2140`,
    3189: `2141`,
    319: `87`,
    3190: `2141`,
    3191: `2142`,
    3192: `2142`,
    3193: `2143`,
    3194: `2143`,
    3195: `2144`,
    3196: `2145`,
    3197: `2146`,
    3198: `2147`,
    3199: `2148`,
    32: `2`,
    320: `87`,
    3200: `2149`,
    3201: `2149`,
    3202: `2149`,
    3203: `2150`,
    3204: `2151`,
    3205: `2152`,
    3206: `2152`,
    3207: `2153`,
    3208: `2153`,
    3209: `2153`,
    321: `87`,
    3210: `2154`,
    3211: `2155`,
    3212: `2156`,
    3213: `2156`,
    3214: `2156`,
    3215: `2157`,
    3216: `2158`,
    3217: `2159`,
    3218: `2159`,
    3219: `2160`,
    322: `87`,
    3220: `2161`,
    3221: `2162`,
    3222: `2162`,
    3223: `2163`,
    3224: `2164`,
    3225: `2165`,
    3226: `2166`,
    3227: `2167`,
    3228: `2168`,
    3229: `2168`,
    323: `87`,
    3230: `2168`,
    3231: `2169`,
    3232: `2170`,
    3233: `2170`,
    3234: `2170`,
    3235: `2172`,
    3236: `2173`,
    3237: `2174`,
    3238: `2174`,
    3239: `2175`,
    324: `87`,
    3240: `2176`,
    3241: `2177`,
    3242: `2178`,
    3243: `2179`,
    3244: `2179`,
    3245: `2180`,
    3246: `2181`,
    3247: `2182`,
    3248: `2182`,
    3249: `2183`,
    325: `88`,
    3250: `2183`,
    3251: `2183`,
    3252: `2185`,
    3253: `2185`,
    3254: `2186`,
    3255: `2186`,
    3256: `2187`,
    3257: `2188`,
    3258: `2188`,
    3259: `2188`,
    326: `88`,
    3260: `2189`,
    3261: `2189`,
    3262: `2190`,
    3263: `2190`,
    3264: `2191`,
    3265: `2192`,
    3266: `2195`,
    3267: `2195`,
    3268: `2195`,
    3269: `2196`,
    327: `89`,
    3270: `2196`,
    3271: `2197`,
    3272: `2197`,
    3273: `2198`,
    3274: `2198`,
    3275: `2199`,
    3276: `2199`,
    3277: `2199`,
    3278: `2200`,
    3279: `2201`,
    328: `90`,
    3280: `2202`,
    3281: `2208`,
    3282: `2208`,
    3283: `2209`,
    3284: `2210`,
    3285: `2211`,
    3286: `2211`,
    3287: `2212`,
    3288: `2212`,
    3289: `2213`,
    329: `92`,
    3290: `2214`,
    3291: `2215`,
    3292: `2215`,
    3293: `2216`,
    3294: `2216`,
    3295: `2217`,
    3296: `2218`,
    3297: `2219`,
    3298: `2219`,
    3299: `2220`,
    33: `2`,
    330: `92`,
    3300: `2220`,
    3301: `2221`,
    3302: `2221`,
    3303: `2222`,
    3304: `2223`,
    3305: `2223`,
    3306: `2224`,
    3307: `2225`,
    3308: `2226`,
    3309: `2226`,
    331: `93`,
    3310: `2227`,
    3311: `2228`,
    3312: `2229`,
    3313: `2229`,
    3314: `2230`,
    3315: `2231`,
    3316: `2232`,
    3317: `2232`,
    3318: `2233`,
    3319: `2234`,
    332: `96`,
    3320: `2235`,
    3321: `2235`,
    3322: `2236`,
    3323: `2237`,
    3324: `2238`,
    3325: `2238`,
    3326: `2239`,
    3327: `2240`,
    3328: `2241`,
    3329: `2242`,
    333: `97`,
    3330: `2243`,
    3331: `2243`,
    3332: `2244`,
    3333: `2244`,
    3334: `2245`,
    3335: `2246`,
    3336: `2247`,
    3337: `2248`,
    3338: `2249`,
    3339: `2249`,
    334: `98`,
    3340: `2249`,
    3341: `2250`,
    3342: `2251`,
    3343: `2251`,
    3344: `2252`,
    3345: `2252`,
    3346: `2253`,
    3347: `2254`,
    3348: `2254`,
    3349: `2254`,
    335: `98`,
    3350: `2255`,
    3351: `2255`,
    3352: `2256`,
    3353: `2257`,
    3354: `2258`,
    3355: `2258`,
    3356: `2258`,
    3357: `2259`,
    3358: `2259`,
    3359: `2260`,
    336: `100`,
    3360: `2261`,
    3361: `2261`,
    3362: `2261`,
    3363: `2262`,
    3364: `2263`,
    3365: `2263`,
    3366: `2263`,
    3367: `2265`,
    3368: `2266`,
    3369: `2267`,
    337: `100`,
    3370: `2267`,
    3371: `2268`,
    3372: `2269`,
    3373: `2270`,
    3374: `2271`,
    3375: `2272`,
    3376: `2272`,
    3377: `2273`,
    3378: `2273`,
    3379: `2274`,
    338: `101`,
    3380: `2274`,
    3381: `2275`,
    3382: `2276`,
    3383: `2276`,
    3384: `2277`,
    3385: `2277`,
    3386: `2278`,
    3387: `2278`,
    3388: `2279`,
    3389: `2280`,
    339: `101`,
    3390: `2280`,
    3391: `2281`,
    3392: `2282`,
    3393: `2282`,
    3394: `2283`,
    3395: `2284`,
    3396: `2284`,
    3397: `2285`,
    3398: `2286`,
    3399: `2287`,
    34: `2`,
    340: `102`,
    3400: `2287`,
    3401: `2288`,
    3402: `2289`,
    3403: `2290`,
    3404: `2291`,
    3405: `2292`,
    3406: `2292`,
    3407: `2293`,
    3408: `2293`,
    3409: `2294`,
    341: `103`,
    3410: `2294`,
    3411: `2295`,
    3412: `2296`,
    3413: `2296`,
    3414: `2297`,
    3415: `2298`,
    3416: `2298`,
    3417: `2299`,
    3418: `2300`,
    3419: `2301`,
    342: `104`,
    3420: `2301`,
    3421: `2302`,
    3422: `2303`,
    3423: `2304`,
    3424: `2304`,
    3425: `2305`,
    3426: `2306`,
    3427: `2307`,
    3428: `2308`,
    3429: `2309`,
    343: `104`,
    3430: `2309`,
    3431: `2310`,
    3432: `2310`,
    3433: `2311`,
    3434: `2312`,
    3435: `2312`,
    3436: `2313`,
    3437: `2314`,
    3438: `2314`,
    3439: `2315`,
    344: `104`,
    3440: `2316`,
    3441: `2317`,
    3442: `2317`,
    3443: `2318`,
    3444: `2319`,
    3445: `2319`,
    3446: `2320`,
    3447: `2321`,
    3448: `2327`,
    3449: `2328`,
    345: `105`,
    3450: `2329`,
    3451: `2329`,
    3452: `2330`,
    3453: `2330`,
    3454: `2331`,
    3455: `2332`,
    3456: `2333`,
    3457: `2334`,
    3458: `2335`,
    3459: `2336`,
    346: `105`,
    3460: `2337`,
    3461: `2338`,
    3462: `2338`,
    3463: `2339`,
    3464: `2339`,
    3465: `2340`,
    3466: `2341`,
    3467: `2341`,
    3468: `2342`,
    3469: `2343`,
    347: `106`,
    3470: `2344`,
    3471: `2345`,
    3472: `2346`,
    3473: `2347`,
    3474: `2348`,
    3475: `2348`,
    3476: `2348`,
    3477: `2349`,
    3478: `2349`,
    3479: `2350`,
    348: `107`,
    3480: `2350`,
    3481: `2351`,
    3482: `2352`,
    3483: `2352`,
    3484: `2352`,
    3485: `2353`,
    3486: `2354`,
    3487: `2360`,
    3488: `2360`,
    3489: `2361`,
    349: `108`,
    3490: `2362`,
    3491: `2362`,
    3492: `2363`,
    3493: `2363`,
    3494: `2363`,
    3495: `2365`,
    3496: `2365`,
    3497: `2366`,
    3498: `2366`,
    3499: `2367`,
    35: `2`,
    350: `108`,
    3500: `2368`,
    3501: `2368`,
    3502: `2368`,
    3503: `2369`,
    3504: `2369`,
    3505: `2370`,
    3506: `2370`,
    3507: `2371`,
    3508: `2372`,
    3509: `2375`,
    351: `109`,
    3510: `2375`,
    3511: `2375`,
    3512: `2376`,
    3513: `2376`,
    3514: `2377`,
    3515: `2377`,
    3516: `2378`,
    3517: `2378`,
    3518: `2379`,
    3519: `2379`,
    352: `109`,
    3520: `2379`,
    3521: `2380`,
    3522: `2381`,
    3523: `2382`,
    3524: `2388`,
    3525: `2388`,
    3526: `2389`,
    3527: `2390`,
    3528: `2391`,
    3529: `2391`,
    353: `109`,
    3530: `2392`,
    3531: `2392`,
    3532: `2393`,
    3533: `2394`,
    3534: `2395`,
    3535: `2395`,
    3536: `2396`,
    3537: `2396`,
    3538: `2397`,
    3539: `2398`,
    354: `109`,
    3540: `2399`,
    3541: `2399`,
    3542: `2400`,
    3543: `2400`,
    3544: `2401`,
    3545: `2401`,
    3546: `2402`,
    3547: `2403`,
    3548: `2403`,
    3549: `2404`,
    355: `109`,
    3550: `2405`,
    3551: `2406`,
    3552: `2406`,
    3553: `2407`,
    3554: `2408`,
    3555: `2409`,
    3556: `2409`,
    3557: `2410`,
    3558: `2411`,
    3559: `2412`,
    356: `109`,
    3560: `2412`,
    3561: `2413`,
    3562: `2414`,
    3563: `2415`,
    3564: `2415`,
    3565: `2416`,
    3566: `2417`,
    3567: `2418`,
    3568: `2418`,
    3569: `2419`,
    357: `110`,
    3570: `2420`,
    3571: `2421`,
    3572: `2422`,
    3573: `2423`,
    3574: `2423`,
    3575: `2424`,
    3576: `2424`,
    3577: `2425`,
    3578: `2426`,
    3579: `2427`,
    358: `110`,
    3580: `2428`,
    3581: `2429`,
    3582: `2429`,
    3583: `2429`,
    3584: `2430`,
    3585: `2431`,
    3586: `2431`,
    3587: `2432`,
    3588: `2432`,
    3589: `2433`,
    359: `111`,
    3590: `2434`,
    3591: `2434`,
    3592: `2434`,
    3593: `2435`,
    3594: `2435`,
    3595: `2436`,
    3596: `2437`,
    3597: `2438`,
    3598: `2438`,
    3599: `2438`,
    36: `2`,
    360: `112`,
    3600: `2439`,
    3601: `2439`,
    3602: `2440`,
    3603: `2441`,
    3604: `2441`,
    3605: `2441`,
    3606: `2442`,
    3607: `2443`,
    3608: `2443`,
    3609: `2443`,
    361: `113`,
    3610: `2445`,
    3611: `2446`,
    3612: `2447`,
    3613: `2447`,
    3614: `2448`,
    3615: `2449`,
    3616: `2450`,
    3617: `2451`,
    3618: `2452`,
    3619: `2452`,
    362: `115`,
    3620: `2453`,
    3621: `2453`,
    3622: `2454`,
    3623: `2454`,
    3624: `2455`,
    3625: `2456`,
    3626: `2456`,
    3627: `2457`,
    3628: `2457`,
    3629: `2458`,
    363: `115`,
    3630: `2458`,
    3631: `2459`,
    3632: `2460`,
    3633: `2460`,
    3634: `2461`,
    3635: `2462`,
    3636: `2462`,
    3637: `2463`,
    3638: `2464`,
    3639: `2464`,
    364: `116`,
    3640: `2465`,
    3641: `2466`,
    3642: `2467`,
    3643: `2467`,
    3644: `2468`,
    3645: `2469`,
    3646: `2470`,
    3647: `2471`,
    3648: `2472`,
    3649: `2472`,
    365: `116`,
    3650: `2473`,
    3651: `2473`,
    3652: `2474`,
    3653: `2474`,
    3654: `2475`,
    3655: `2476`,
    3656: `2476`,
    3657: `2477`,
    3658: `2478`,
    3659: `2478`,
    366: `116`,
    3660: `2479`,
    3661: `2480`,
    3662: `2481`,
    3663: `2481`,
    3664: `2482`,
    3665: `2483`,
    3666: `2484`,
    3667: `2484`,
    3668: `2485`,
    3669: `2486`,
    367: `118`,
    3670: `2487`,
    3671: `2488`,
    3672: `2489`,
    3673: `2489`,
    3674: `2490`,
    3675: `2490`,
    3676: `2491`,
    3677: `2492`,
    3678: `2492`,
    3679: `2493`,
    368: `119`,
    3680: `2494`,
    3681: `2494`,
    3682: `2495`,
    3683: `2496`,
    3684: `2497`,
    3685: `2497`,
    3686: `2498`,
    3687: `2499`,
    3688: `2499`,
    3689: `2500`,
    369: `119`,
    3690: `2501`,
    3691: `2507`,
    3692: `2508`,
    3693: `2509`,
    3694: `2509`,
    3695: `2510`,
    3696: `2510`,
    3697: `2511`,
    3698: `2512`,
    3699: `2512`,
    37: `2`,
    370: `120`,
    3700: `2513`,
    3701: `2514`,
    3702: `2515`,
    3703: `2516`,
    3704: `2517`,
    3705: `2518`,
    3706: `2519`,
    3707: `2520`,
    3708: `2520`,
    3709: `2521`,
    371: `120`,
    3710: `2521`,
    3711: `2522`,
    3712: `2523`,
    3713: `2524`,
    3714: `2525`,
    3715: `2526`,
    3716: `2527`,
    3717: `2528`,
    3718: `2528`,
    3719: `2528`,
    372: `120`,
    3720: `2529`,
    3721: `2529`,
    3722: `2530`,
    3723: `2530`,
    3724: `2531`,
    3725: `2532`,
    3726: `2532`,
    3727: `2532`,
    3728: `2533`,
    3729: `2534`,
    373: `120`,
    3730: `2540`,
    3731: `2540`,
    3732: `2541`,
    3733: `2542`,
    3734: `2542`,
    3735: `2543`,
    3736: `2543`,
    3737: `2543`,
    3738: `2545`,
    3739: `2545`,
    374: `120`,
    3740: `2546`,
    3741: `2547`,
    3742: `2548`,
    3743: `2548`,
    3744: `2549`,
    3745: `2549`,
    3746: `2550`,
    3747: `2551`,
    3748: `2552`,
    3749: `2552`,
    375: `120`,
    3750: `2553`,
    3751: `2553`,
    3752: `2554`,
    3753: `2554`,
    3754: `2555`,
    3755: `2556`,
    3756: `2556`,
    3757: `2557`,
    3758: `2557`,
    3759: `2558`,
    376: `120`,
    3760: `2558`,
    3761: `2558`,
    3762: `2559`,
    3763: `2559`,
    3764: `2560`,
    3765: `2560`,
    3766: `2561`,
    3767: `2561`,
    3768: `2561`,
    3769: `2562`,
    377: `120`,
    3770: `2562`,
    3771: `2563`,
    3772: `2563`,
    3773: `2564`,
    3774: `2564`,
    3775: `2565`,
    3776: `2566`,
    3777: `2566`,
    3778: `2567`,
    3779: `2567`,
    378: `120`,
    3780: `2567`,
    3781: `2567`,
    3782: `2567`,
    3783: `2567`,
    3784: `2568`,
    3785: `2568`,
    3786: `2569`,
    3787: `2570`,
    3788: `2571`,
    3789: `2571`,
    379: `120`,
    3790: `2572`,
    3791: `2573`,
    3792: `2574`,
    3793: `2574`,
    3794: `2575`,
    3795: `2576`,
    3796: `2577`,
    3797: `2577`,
    3798: `2578`,
    3799: `2579`,
    38: `2`,
    380: `121`,
    3800: `2579`,
    3801: `2580`,
    3802: `2581`,
    3803: `2581`,
    3804: `2582`,
    3805: `2583`,
    3806: `2584`,
    3807: `2586`,
    3808: `2586`,
    3809: `2587`,
    381: `121`,
    3810: `2587`,
    3811: `2587`,
    3812: `2588`,
    3813: `2588`,
    3814: `2589`,
    3815: `2589`,
    3816: `2590`,
    3817: `2591`,
    3818: `2594`,
    3819: `2594`,
    382: `122`,
    3820: `2595`,
    3821: `2595`,
    3822: `2596`,
    3823: `2597`,
    3824: `2602`,
    3825: `2602`,
    3826: `2603`,
    3827: `2603`,
    3828: `2604`,
    3829: `2605`,
    383: `123`,
    3830: `2610`,
    3831: `2610`,
    3832: `2611`,
    3833: `2611`,
    3834: `2611`,
    3835: `2612`,
    3836: `2614`,
    3837: `2614`,
    3838: `2615`,
    3839: `2615`,
    384: `124`,
    3840: `2616`,
    3841: `2616`,
    3842: `2616`,
    3843: `2617`,
    3844: `2617`,
    3845: `2618`,
    3846: `2618`,
    3847: `2618`,
    3848: `2619`,
    3849: `2621`,
    385: `124`,
    3850: `2621`,
    3851: `2622`,
    3852: `2622`,
    3853: `2623`,
    3854: `2623`,
    3855: `2623`,
    3856: `2624`,
    3857: `2625`,
    3858: `2625`,
    3859: `2626`,
    386: `125`,
    3860: `2627`,
    3861: `2628`,
    3862: `2628`,
    3863: `2629`,
    3864: `2629`,
    3865: `2629`,
    3866: `2629`,
    3867: `2629`,
    3868: `2629`,
    3869: `2629`,
    387: `125`,
    3870: `2630`,
    3871: `2630`,
    3872: `2631`,
    3873: `2632`,
    3874: `2633`,
    3875: `2634`,
    3876: `2634`,
    3877: `2635`,
    3878: `2635`,
    3879: `2636`,
    388: `126`,
    3880: `2637`,
    3881: `2637`,
    3882: `2638`,
    3883: `2639`,
    3884: `2639`,
    3885: `2640`,
    3886: `2641`,
    3887: `2641`,
    3888: `2642`,
    3889: `2643`,
    389: `127`,
    3890: `2644`,
    3891: `2644`,
    3892: `2645`,
    3893: `2646`,
    3894: `2647`,
    3895: `2647`,
    3896: `2648`,
    3897: `2648`,
    3898: `2649`,
    3899: `2649`,
    39: `2`,
    390: `128`,
    3900: `2650`,
    3901: `2650`,
    3902: `2652`,
    3903: `2652`,
    3904: `2653`,
    3905: `2653`,
    3906: `2653`,
    3907: `2653`,
    3908: `2653`,
    3909: `2653`,
    391: `128`,
    3910: `2654`,
    3911: `2654`,
    3912: `2655`,
    3913: `2655`,
    3914: `2656`,
    3915: `2657`,
    3916: `2657`,
    3917: `2658`,
    3918: `2658`,
    3919: `2659`,
    392: `129`,
    3920: `2659`,
    3921: `2660`,
    3922: `2660`,
    3923: `2661`,
    3924: `2662`,
    3925: `2662`,
    3926: `2663`,
    3927: `2666`,
    3928: `2666`,
    3929: `2667`,
    393: `129`,
    3930: `2668`,
    3931: `2668`,
    3932: `2669`,
    3933: `2670`,
    3934: `2670`,
    3935: `2671`,
    3936: `2672`,
    3937: `2673`,
    3938: `2674`,
    3939: `2674`,
    394: `130`,
    3940: `2674`,
    3941: `2675`,
    3942: `2675`,
    3943: `2675`,
    3944: `2676`,
    3945: `2677`,
    3946: `2677`,
    3947: `2678`,
    3948: `2678`,
    3949: `2678`,
    395: `130`,
    3950: `2678`,
    3951: `2678`,
    3952: `2678`,
    3953: `2678`,
    3954: `2678`,
    3955: `2678`,
    3956: `2678`,
    3957: `2679`,
    3958: `2679`,
    3959: `2680`,
    396: `132`,
    3960: `2681`,
    3961: `2682`,
    3962: `2682`,
    3963: `2683`,
    3964: `2684`,
    3965: `2684`,
    3966: `2685`,
    3967: `2686`,
    3968: `2687`,
    3969: `2687`,
    397: `132`,
    3970: `2688`,
    3971: `2688`,
    3972: `2689`,
    3973: `2689`,
    3974: `2689`,
    3975: `2690`,
    3976: `2691`,
    3977: `2691`,
    3978: `2692`,
    3979: `2693`,
    398: `133`,
    3980: `2694`,
    3981: `2694`,
    3982: `2695`,
    3983: `2695`,
    3984: `2696`,
    3985: `2697`,
    3986: `2698`,
    3987: `2698`,
    3988: `2699`,
    3989: `2699`,
    399: `133`,
    3990: `2700`,
    3991: `2700`,
    3992: `2701`,
    3993: `2702`,
    3994: `2702`,
    3995: `2703`,
    3996: `2703`,
    3997: `2704`,
    3998: `2705`,
    3999: `2706`,
    4: `2`,
    40: `2`,
    400: `134`,
    4000: `2706`,
    4001: `2707`,
    4002: `2708`,
    4003: `2709`,
    4004: `2710`,
    4005: `2710`,
    4006: `2710`,
    4007: `2711`,
    4008: `2711`,
    4009: `2712`,
    401: `135`,
    4010: `2712`,
    4011: `2713`,
    4012: `2713`,
    4013: `2714`,
    4014: `2715`,
    4015: `2716`,
    4016: `2716`,
    4017: `2718`,
    4018: `2718`,
    4019: `2719`,
    402: `135`,
    4020: `2719`,
    4021: `2720`,
    4022: `2721`,
    4023: `2722`,
    4024: `2723`,
    4025: `2723`,
    4026: `2724`,
    4027: `2725`,
    4028: `2726`,
    4029: `2727`,
    403: `137`,
    4030: `2730`,
    4031: `2731`,
    4032: `2731`,
    4033: `2732`,
    4034: `2733`,
    4035: `2736`,
    4036: `2736`,
    4037: `2737`,
    4038: `2737`,
    4039: `2737`,
    404: `137`,
    4040: `2738`,
    4041: `2739`,
    4042: `2740`,
    4043: `2740`,
    4044: `2741`,
    4045: `2741`,
    4046: `2742`,
    4047: `2742`,
    4048: `2743`,
    4049: `2743`,
    405: `138`,
    4050: `2744`,
    4051: `2744`,
    4052: `2745`,
    4053: `2745`,
    4054: `2746`,
    4055: `2746`,
    4056: `2747`,
    4057: `2747`,
    4058: `2748`,
    4059: `2748`,
    406: `139`,
    4060: `2749`,
    4061: `2749`,
    4062: `2750`,
    4063: `2750`,
    4064: `2751`,
    4065: `2751`,
    4066: `2752`,
    4067: `2753`,
    4068: `2753`,
    4069: `2754`,
    407: `139`,
    4070: `2754`,
    4071: `2755`,
    4072: `2755`,
    4073: `2756`,
    4074: `2756`,
    4075: `2757`,
    4076: `2757`,
    4077: `2758`,
    4078: `2759`,
    4079: `2759`,
    408: `141`,
    4080: `2760`,
    4081: `2760`,
    4082: `2761`,
    4083: `2761`,
    4084: `2761`,
    4085: `2761`,
    4086: `2761`,
    4087: `2761`,
    4088: `2761`,
    4089: `2761`,
    409: `143`,
    4090: `2761`,
    4091: `2761`,
    4092: `2762`,
    4093: `2762`,
    4094: `2763`,
    4095: `2764`,
    4096: `2765`,
    4097: `2766`,
    4098: `2766`,
    4099: `2767`,
    41: `2`,
    410: `143`,
    4100: `2767`,
    4101: `2768`,
    4102: `2769`,
    4103: `2769`,
    4104: `2770`,
    4105: `2771`,
    4106: `2771`,
    4107: `2774`,
    4108: `2774`,
    4109: `2775`,
    411: `144`,
    4110: `2776`,
    4111: `2776`,
    4112: `2777`,
    4113: `2778`,
    4114: `2779`,
    4115: `2780`,
    4116: `2780`,
    4117: `2781`,
    4118: `2782`,
    4119: `2783`,
    412: `144`,
    4120: `2784`,
    4121: `2785`,
    4122: `2785`,
    4123: `2786`,
    4124: `2786`,
    4125: `2787`,
    4126: `2787`,
    4127: `2788`,
    4128: `2789`,
    4129: `2789`,
    413: `145`,
    4130: `2790`,
    4131: `2791`,
    4132: `2792`,
    4133: `2792`,
    4134: `2793`,
    4135: `2793`,
    4136: `2794`,
    4137: `2794`,
    4138: `2795`,
    4139: `2796`,
    414: `145`,
    4140: `2797`,
    4141: `2797`,
    4142: `2798`,
    4143: `2798`,
    4144: `2799`,
    4145: `2800`,
    4146: `2800`,
    4147: `2800`,
    4148: `2802`,
    4149: `2802`,
    415: `146`,
    4150: `2803`,
    4151: `2804`,
    4152: `2807`,
    4153: `2807`,
    4154: `2808`,
    4155: `2808`,
    4156: `2809`,
    4157: `2810`,
    4158: `2810`,
    4159: `2811`,
    416: `146`,
    4160: `2811`,
    4161: `2812`,
    4162: `2813`,
    4163: `2814`,
    4164: `2817`,
    4165: `2817`,
    4166: `2818`,
    4167: `2819`,
    4168: `2819`,
    4169: `2820`,
    417: `146`,
    4170: `2821`,
    4171: `2821`,
    4172: `2821`,
    4173: `2821`,
    4174: `2821`,
    4175: `2821`,
    4176: `2821`,
    4177: `2821`,
    4178: `2821`,
    4179: `2821`,
    418: `147`,
    4180: `2821`,
    4181: `2821`,
    4182: `2821`,
    4183: `2821`,
    4184: `2821`,
    4185: `2821`,
    4186: `2821`,
    4187: `2821`,
    4188: `2822`,
    4189: `2822`,
    419: `149`,
    4190: `2823`,
    4191: `2824`,
    4192: `2824`,
    4193: `2825`,
    4194: `2825`,
    4195: `2826`,
    4196: `2826`,
    4197: `2827`,
    4198: `2827`,
    4199: `2828`,
    42: `2`,
    420: `149`,
    4200: `2828`,
    4201: `2829`,
    4202: `2829`,
    4203: `2830`,
    4204: `2830`,
    4205: `2831`,
    4206: `2831`,
    4207: `2832`,
    4208: `2832`,
    4209: `2833`,
    421: `150`,
    4210: `2833`,
    4211: `2834`,
    4212: `2834`,
    4213: `2834`,
    4214: `2836`,
    4215: `2836`,
    4216: `2836`,
    4217: `2837`,
    4218: `2837`,
    4219: `2838`,
    422: `150`,
    4220: `2838`,
    4221: `2838`,
    4222: `2839`,
    4223: `2839`,
    4224: `2839`,
    4225: `2840`,
    4226: `2840`,
    4227: `2841`,
    4228: `2841`,
    4229: `2841`,
    423: `151`,
    4230: `2843`,
    4231: `2843`,
    4232: `2843`,
    4233: `2844`,
    4234: `2844`,
    4235: `2844`,
    4236: `2845`,
    4237: `2845`,
    4238: `2846`,
    4239: `2846`,
    424: `151`,
    4240: `2846`,
    4241: `2848`,
    4242: `2848`,
    4243: `2848`,
    4244: `2849`,
    4245: `2849`,
    4246: `2849`,
    4247: `2850`,
    4248: `2850`,
    4249: `2851`,
    425: `152`,
    4250: `2851`,
    4251: `2851`,
    4252: `2853`,
    4253: `2854`,
    4254: `2854`,
    4255: `2855`,
    4256: `2856`,
    4257: `2857`,
    4258: `2857`,
    4259: `2858`,
    426: `152`,
    4260: `2858`,
    4261: `2859`,
    4262: `2860`,
    4263: `2861`,
    4264: `2862`,
    4265: `2862`,
    4266: `2863`,
    4267: `2864`,
    4268: `2865`,
    4269: `2866`,
    427: `152`,
    4270: `2866`,
    4271: `2867`,
    4272: `2868`,
    4273: `2869`,
    4274: `2869`,
    4275: `2869`,
    4276: `2870`,
    4277: `2870`,
    4278: `2870`,
    4279: `2871`,
    428: `154`,
    4280: `2872`,
    4281: `2873`,
    4282: `2874`,
    4283: `2874`,
    4284: `2874`,
    4285: `2876`,
    4286: `2877`,
    4287: `2877`,
    4288: `2878`,
    4289: `2878`,
    429: `154`,
    4290: `2878`,
    4291: `2880`,
    4292: `2880`,
    4293: `2881`,
    4294: `2881`,
    4295: `2881`,
    4296: `2882`,
    4297: `2882`,
    4298: `2883`,
    4299: `2883`,
    43: `2`,
    430: `155`,
    4300: `2883`,
    4301: `2885`,
    4302: `2885`,
    4303: `2886`,
    4304: `2886`,
    4305: `2886`,
    4306: `2887`,
    4307: `2887`,
    4308: `2888`,
    4309: `2888`,
    431: `155`,
    4310: `2888`,
    4311: `2890`,
    4312: `2890`,
    4313: `2891`,
    4314: `2891`,
    4315: `2891`,
    4316: `2892`,
    4317: `2892`,
    4318: `2893`,
    4319: `2893`,
    432: `156`,
    4320: `2893`,
    4321: `2895`,
    4322: `2895`,
    4323: `2896`,
    4324: `2896`,
    4325: `2896`,
    4326: `2897`,
    4327: `2897`,
    4328: `2898`,
    4329: `2898`,
    433: `157`,
    4330: `2898`,
    4331: `2900`,
    4332: `2900`,
    4333: `2901`,
    4334: `2901`,
    4335: `2901`,
    4336: `2902`,
    4337: `2902`,
    4338: `2903`,
    4339: `2903`,
    434: `159`,
    4340: `2903`,
    4341: `2905`,
    4342: `2905`,
    4343: `2906`,
    4344: `2906`,
    4345: `2906`,
    4346: `2907`,
    4347: `2907`,
    4348: `2908`,
    4349: `2908`,
    435: `159`,
    4350: `2908`,
    4351: `2910`,
    4352: `2910`,
    4353: `2911`,
    4354: `2911`,
    4355: `2911`,
    4356: `2912`,
    4357: `2912`,
    4358: `2913`,
    4359: `2913`,
    436: `159`,
    4360: `2913`,
    4361: `2915`,
    4362: `2916`,
    4363: `2916`,
    4364: `2917`,
    4365: `2917`,
    4366: `2917`,
    4367: `2919`,
    4368: `2920`,
    4369: `2920`,
    437: `161`,
    4370: `2921`,
    4371: `2921`,
    4372: `2921`,
    4373: `2923`,
    4374: `2923`,
    4375: `2924`,
    4376: `2924`,
    4377: `2925`,
    4378: `2926`,
    4379: `2929`,
    438: `162`,
    4380: `2929`,
    4381: `2929`,
    4382: `2930`,
    4383: `2930`,
    4384: `2931`,
    4385: `2932`,
    4386: `2932`,
    4387: `2933`,
    4388: `2933`,
    4389: `2933`,
    439: `162`,
    4390: `2934`,
    4391: `2934`,
    4392: `2935`,
    4393: `2935`,
    4394: `2935`,
    4395: `2936`,
    4396: `2937`,
    4397: `2938`,
    4398: `2938`,
    4399: `2939`,
    44: `2`,
    440: `163`,
    4400: `2939`,
    4401: `2939`,
    4402: `2940`,
    4403: `2940`,
    4404: `2941`,
    4405: `2941`,
    4406: `2941`,
    4407: `2942`,
    4408: `2943`,
    4409: `2944`,
    441: `163`,
    4410: `2944`,
    4411: `2945`,
    4412: `2945`,
    4413: `2945`,
    4414: `2946`,
    4415: `2946`,
    4416: `2947`,
    4417: `2947`,
    4418: `2947`,
    4419: `2948`,
    442: `164`,
    4420: `2949`,
    4421: `2949`,
    4422: `2950`,
    4423: `2950`,
    4424: `2950`,
    4425: `2951`,
    4426: `2952`,
    4427: `2952`,
    4428: `2953`,
    4429: `2953`,
    443: `164`,
    4430: `2953`,
    4431: `2954`,
    4432: `2955`,
    4433: `2955`,
    4434: `2956`,
    4435: `2956`,
    4436: `2956`,
    4437: `2957`,
    4438: `2958`,
    4439: `2959`,
    444: `164`,
    4440: `2959`,
    4441: `2960`,
    4442: `2960`,
    4443: `2960`,
    4444: `2961`,
    4445: `2961`,
    4446: `2962`,
    4447: `2962`,
    4448: `2962`,
    4449: `2963`,
    445: `166`,
    4450: `2964`,
    4451: `2965`,
    4452: `2965`,
    4453: `2966`,
    4454: `2967`,
    4455: `2968`,
    4456: `2968`,
    4457: `2969`,
    4458: `2970`,
    4459: `2970`,
    446: `166`,
    4460: `2971`,
    4461: `2971`,
    4462: `2971`,
    4463: `2973`,
    4464: `2973`,
    4465: `2974`,
    4466: `2974`,
    4467: `2975`,
    4468: `2976`,
    4469: `2976`,
    447: `167`,
    4470: `2977`,
    4471: `2978`,
    4472: `2979`,
    4473: `2980`,
    4474: `2980`,
    4475: `2981`,
    4476: `2981`,
    4477: `2982`,
    4478: `2982`,
    4479: `2983`,
    448: `167`,
    4480: `2984`,
    4481: `2984`,
    4482: `2985`,
    4483: `2986`,
    4484: `2987`,
    4485: `2988`,
    4486: `2989`,
    4487: `2989`,
    4488: `2990`,
    4489: `2990`,
    449: `167`,
    4490: `2991`,
    4491: `2992`,
    4492: `2992`,
    4493: `2993`,
    4494: `2994`,
    4495: `2995`,
    4496: `2995`,
    4497: `2996`,
    4498: `2996`,
    4499: `2996`,
    45: `2`,
    450: `168`,
    4500: `2998`,
    4501: `2998`,
    4502: `2999`,
    4503: `2999`,
    4504: `3000`,
    4505: `3001`,
    4506: `3001`,
    4507: `3002`,
    4508: `3003`,
    4509: `3004`,
    451: `168`,
    4510: `3005`,
    4511: `3005`,
    4512: `3006`,
    4513: `3006`,
    4514: `3007`,
    4515: `3007`,
    4516: `3008`,
    4517: `3009`,
    4518: `3009`,
    4519: `3010`,
    452: `168`,
    4520: `3011`,
    4521: `3012`,
    4522: `3013`,
    4523: `3014`,
    4524: `3014`,
    4525: `3015`,
    4526: `3015`,
    4527: `3016`,
    4528: `3017`,
    4529: `3017`,
    453: `170`,
    4530: `3018`,
    4531: `3019`,
    4532: `3020`,
    4533: `3020`,
    4534: `3021`,
    4535: `3021`,
    4536: `3021`,
    4537: `3024`,
    4538: `3024`,
    4539: `3025`,
    454: `170`,
    4540: `3026`,
    4541: `3026`,
    4542: `3027`,
    4543: `3028`,
    4544: `3029`,
    4545: `3029`,
    4546: `3030`,
    4547: `3031`,
    4548: `3031`,
    4549: `3032`,
    455: `170`,
    4550: `3033`,
    4551: `3034`,
    4552: `3034`,
    4553: `3035`,
    4554: `3036`,
    4555: `3036`,
    4556: `3037`,
    4557: `3038`,
    4558: `3038`,
    4559: `3039`,
    456: `171`,
    4560: `3040`,
    4561: `3040`,
    4562: `3041`,
    4563: `3042`,
    4564: `3042`,
    4565: `3043`,
    4566: `3044`,
    4567: `3044`,
    4568: `3045`,
    4569: `3046`,
    457: `171`,
    4570: `3047`,
    4571: `3047`,
    4572: `3048`,
    4573: `3048`,
    4574: `3049`,
    4575: `3049`,
    4576: `3049`,
    4577: `3051`,
    4578: `3052`,
    4579: `3052`,
    458: `171`,
    4580: `3053`,
    4581: `3053`,
    4582: `3054`,
    4583: `3054`,
    4584: `3055`,
    4585: `3055`,
    4586: `3056`,
    4587: `3056`,
    4588: `3057`,
    4589: `3058`,
    459: `172`,
    4590: `3060`,
    4591: `3061`,
    4592: `3061`,
    4593: `3062`,
    4594: `3062`,
    4595: `3063`,
    4596: `3063`,
    4597: `3064`,
    4598: `3064`,
    4599: `3065`,
    46: `2`,
    460: `172`,
    4600: `3065`,
    4601: `3066`,
    4602: `3066`,
    4603: `3067`,
    4604: `3068`,
    4605: `3070`,
    4606: `3070`,
    4607: `3071`,
    4608: `3071`,
    4609: `3072`,
    461: `173`,
    4610: `3073`,
    4611: `3076`,
    4612: `3076`,
    4613: `3076`,
    4614: `3077`,
    4615: `3077`,
    4616: `3078`,
    4617: `3078`,
    4618: `3079`,
    4619: `3080`,
    462: `173`,
    4620: `3081`,
    4621: `3081`,
    4622: `3082`,
    4623: `3083`,
    4624: `3084`,
    4625: `3085`,
    4626: `3086`,
    4627: `3086`,
    4628: `3087`,
    4629: `3087`,
    463: `175`,
    4630: `3088`,
    4631: `3088`,
    4632: `3089`,
    4633: `3090`,
    4634: `3091`,
    4635: `3092`,
    4636: `3093`,
    4637: `3094`,
    4638: `3094`,
    4639: `3094`,
    464: `176`,
    4640: `3095`,
    4641: `3096`,
    4642: `3097`,
    4643: `3097`,
    4644: `3098`,
    4645: `3098`,
    4646: `3098`,
    4647: `3099`,
    4648: `3100`,
    4649: `3101`,
    465: `177`,
    4650: `3101`,
    4651: `3101`,
    4652: `3102`,
    4653: `3103`,
    4654: `3104`,
    4655: `3104`,
    4656: `3105`,
    4657: `3106`,
    4658: `3107`,
    4659: `3107`,
    466: `177`,
    4660: `3108`,
    4661: `3109`,
    4662: `3110`,
    4663: `3111`,
    4664: `3112`,
    4665: `3113`,
    4666: `3113`,
    4667: `3113`,
    4668: `3114`,
    4669: `3115`,
    467: `178`,
    4670: `3115`,
    4671: `3115`,
    4672: `3117`,
    4673: `3118`,
    4674: `3119`,
    4675: `3119`,
    4676: `3120`,
    4677: `3121`,
    4678: `3122`,
    4679: `3123`,
    468: `178`,
    4680: `3124`,
    4681: `3124`,
    4682: `3125`,
    4683: `3126`,
    4684: `3127`,
    4685: `3127`,
    4686: `3128`,
    4687: `3128`,
    4688: `3128`,
    4689: `3130`,
    469: `179`,
    4690: `3130`,
    4691: `3131`,
    4692: `3131`,
    4693: `3132`,
    4694: `3133`,
    4695: `3136`,
    4696: `3136`,
    4697: `3136`,
    4698: `3137`,
    4699: `3137`,
    47: `2`,
    470: `179`,
    4700: `3138`,
    4701: `3138`,
    4702: `3139`,
    4703: `3140`,
    4704: `3141`,
    4705: `3141`,
    4706: `3142`,
    4707: `3143`,
    4708: `3144`,
    4709: `3145`,
    471: `180`,
    4710: `3146`,
    4711: `3146`,
    4712: `3147`,
    4713: `3147`,
    4714: `3148`,
    4715: `3148`,
    4716: `3149`,
    4717: `3150`,
    4718: `3151`,
    4719: `3152`,
    472: `181`,
    4720: `3153`,
    4721: `3154`,
    4722: `3154`,
    4723: `3154`,
    4724: `3155`,
    4725: `3156`,
    4726: `3157`,
    4727: `3157`,
    4728: `3158`,
    4729: `3158`,
    473: `182`,
    4730: `3158`,
    4731: `3159`,
    4732: `3160`,
    4733: `3161`,
    4734: `3161`,
    4735: `3161`,
    4736: `3162`,
    4737: `3163`,
    4738: `3164`,
    4739: `3164`,
    474: `183`,
    4740: `3165`,
    4741: `3166`,
    4742: `3167`,
    4743: `3167`,
    4744: `3168`,
    4745: `3169`,
    4746: `3170`,
    4747: `3171`,
    4748: `3172`,
    4749: `3173`,
    475: `183`,
    4750: `3173`,
    4751: `3173`,
    4752: `3174`,
    4753: `3175`,
    4754: `3175`,
    4755: `3175`,
    4756: `3177`,
    4757: `3178`,
    4758: `3179`,
    4759: `3179`,
    476: `185`,
    4760: `3180`,
    4761: `3181`,
    4762: `3182`,
    4763: `3183`,
    4764: `3184`,
    4765: `3184`,
    4766: `3185`,
    4767: `3186`,
    4768: `3187`,
    4769: `3187`,
    477: `185`,
    4770: `3188`,
    4771: `3188`,
    4772: `3188`,
    4773: `3190`,
    4774: `3190`,
    4775: `3191`,
    4776: `3191`,
    4777: `3192`,
    4778: `3193`,
    4779: `3196`,
    478: `186`,
    4780: `3196`,
    4781: `3196`,
    4782: `3197`,
    4783: `3197`,
    4784: `3198`,
    4785: `3198`,
    4786: `3199`,
    4787: `3199`,
    4788: `3200`,
    4789: `3200`,
    479: `186`,
    4790: `3200`,
    4791: `3201`,
    4792: `3202`,
    4793: `3203`,
    4794: `3209`,
    4795: `3209`,
    4796: `3210`,
    4797: `3211`,
    4798: `3212`,
    4799: `3212`,
    48: `2`,
    480: `187`,
    4800: `3213`,
    4801: `3213`,
    4802: `3214`,
    4803: `3215`,
    4804: `3216`,
    4805: `3216`,
    4806: `3217`,
    4807: `3217`,
    4808: `3218`,
    4809: `3219`,
    481: `188`,
    4810: `3220`,
    4811: `3220`,
    4812: `3221`,
    4813: `3221`,
    4814: `3222`,
    4815: `3222`,
    4816: `3223`,
    4817: `3224`,
    4818: `3224`,
    4819: `3225`,
    482: `189`,
    4820: `3226`,
    4821: `3227`,
    4822: `3227`,
    4823: `3228`,
    4824: `3229`,
    4825: `3230`,
    4826: `3230`,
    4827: `3231`,
    4828: `3232`,
    4829: `3233`,
    483: `189`,
    4830: `3233`,
    4831: `3234`,
    4832: `3235`,
    4833: `3236`,
    4834: `3236`,
    4835: `3237`,
    4836: `3238`,
    4837: `3239`,
    4838: `3239`,
    4839: `3240`,
    484: `189`,
    4840: `3241`,
    4841: `3242`,
    4842: `3243`,
    4843: `3244`,
    4844: `3244`,
    4845: `3245`,
    4846: `3245`,
    4847: `3246`,
    4848: `3247`,
    4849: `3248`,
    485: `190`,
    4850: `3249`,
    4851: `3250`,
    4852: `3250`,
    4853: `3250`,
    4854: `3251`,
    4855: `3252`,
    4856: `3252`,
    4857: `3253`,
    4858: `3253`,
    4859: `3254`,
    486: `190`,
    4860: `3255`,
    4861: `3255`,
    4862: `3255`,
    4863: `3256`,
    4864: `3256`,
    4865: `3257`,
    4866: `3258`,
    4867: `3259`,
    4868: `3259`,
    4869: `3259`,
    487: `191`,
    4870: `3260`,
    4871: `3260`,
    4872: `3261`,
    4873: `3262`,
    4874: `3262`,
    4875: `3262`,
    4876: `3263`,
    4877: `3264`,
    4878: `3264`,
    4879: `3264`,
    488: `192`,
    4880: `3266`,
    4881: `3267`,
    4882: `3268`,
    4883: `3268`,
    4884: `3269`,
    4885: `3270`,
    4886: `3271`,
    4887: `3272`,
    4888: `3273`,
    4889: `3273`,
    489: `193`,
    4890: `3274`,
    4891: `3274`,
    4892: `3275`,
    4893: `3275`,
    4894: `3276`,
    4895: `3277`,
    4896: `3277`,
    4897: `3278`,
    4898: `3278`,
    4899: `3279`,
    49: `2`,
    490: `193`,
    4900: `3279`,
    4901: `3280`,
    4902: `3281`,
    4903: `3281`,
    4904: `3282`,
    4905: `3283`,
    4906: `3283`,
    4907: `3284`,
    4908: `3285`,
    4909: `3285`,
    491: `194`,
    4910: `3286`,
    4911: `3287`,
    4912: `3288`,
    4913: `3288`,
    4914: `3289`,
    4915: `3290`,
    4916: `3291`,
    4917: `3292`,
    4918: `3293`,
    4919: `3293`,
    492: `194`,
    4920: `3294`,
    4921: `3294`,
    4922: `3295`,
    4923: `3295`,
    4924: `3296`,
    4925: `3297`,
    4926: `3297`,
    4927: `3298`,
    4928: `3299`,
    4929: `3299`,
    493: `195`,
    4930: `3300`,
    4931: `3301`,
    4932: `3302`,
    4933: `3302`,
    4934: `3303`,
    4935: `3304`,
    4936: `3305`,
    4937: `3305`,
    4938: `3306`,
    4939: `3307`,
    494: `195`,
    4940: `3308`,
    4941: `3309`,
    4942: `3310`,
    4943: `3310`,
    4944: `3311`,
    4945: `3311`,
    4946: `3312`,
    4947: `3313`,
    4948: `3313`,
    4949: `3314`,
    495: `195`,
    4950: `3315`,
    4951: `3315`,
    4952: `3316`,
    4953: `3317`,
    4954: `3318`,
    4955: `3318`,
    4956: `3319`,
    4957: `3320`,
    4958: `3320`,
    4959: `3321`,
    496: `196`,
    4960: `3322`,
    4961: `3328`,
    4962: `3329`,
    4963: `3330`,
    4964: `3330`,
    4965: `3331`,
    4966: `3331`,
    4967: `3332`,
    4968: `3333`,
    4969: `3334`,
    497: `196`,
    4970: `3335`,
    4971: `3336`,
    4972: `3337`,
    4973: `3338`,
    4974: `3339`,
    4975: `3339`,
    4976: `3340`,
    4977: `3340`,
    4978: `3341`,
    4979: `3342`,
    498: `197`,
    4980: `3342`,
    4981: `3343`,
    4982: `3344`,
    4983: `3345`,
    4984: `3346`,
    4985: `3347`,
    4986: `3348`,
    4987: `3349`,
    4988: `3349`,
    4989: `3349`,
    499: `197`,
    4990: `3350`,
    4991: `3350`,
    4992: `3351`,
    4993: `3351`,
    4994: `3352`,
    4995: `3353`,
    4996: `3353`,
    4997: `3353`,
    4998: `3354`,
    4999: `3355`,
    5: `2`,
    50: `2`,
    500: `197`,
    5000: `3361`,
    5001: `3361`,
    5002: `3362`,
    5003: `3363`,
    5004: `3363`,
    5005: `3364`,
    5006: `3364`,
    5007: `3364`,
    5008: `3366`,
    5009: `3366`,
    501: `197`,
    5010: `3367`,
    5011: `3367`,
    5012: `3368`,
    5013: `3369`,
    5014: `3372`,
    5015: `3372`,
    5016: `3372`,
    5017: `3373`,
    5018: `3373`,
    5019: `3374`,
    502: `197`,
    5020: `3374`,
    5021: `3375`,
    5022: `3375`,
    5023: `3376`,
    5024: `3376`,
    5025: `3376`,
    5026: `3377`,
    5027: `3378`,
    5028: `3379`,
    5029: `3385`,
    503: `197`,
    5030: `3385`,
    5031: `3386`,
    5032: `3387`,
    5033: `3388`,
    5034: `3388`,
    5035: `3389`,
    5036: `3389`,
    5037: `3390`,
    5038: `3391`,
    5039: `3392`,
    504: `198`,
    5040: `3392`,
    5041: `3393`,
    5042: `3393`,
    5043: `3394`,
    5044: `3395`,
    5045: `3396`,
    5046: `3396`,
    5047: `3397`,
    5048: `3397`,
    5049: `3398`,
    505: `198`,
    5050: `3398`,
    5051: `3399`,
    5052: `3400`,
    5053: `3400`,
    5054: `3401`,
    5055: `3402`,
    5056: `3403`,
    5057: `3403`,
    5058: `3404`,
    5059: `3405`,
    506: `199`,
    5060: `3406`,
    5061: `3406`,
    5062: `3407`,
    5063: `3408`,
    5064: `3409`,
    5065: `3409`,
    5066: `3410`,
    5067: `3411`,
    5068: `3412`,
    5069: `3412`,
    507: `200`,
    5070: `3413`,
    5071: `3414`,
    5072: `3415`,
    5073: `3415`,
    5074: `3416`,
    5075: `3417`,
    5076: `3418`,
    5077: `3419`,
    5078: `3420`,
    5079: `3420`,
    508: `201`,
    5080: `3421`,
    5081: `3421`,
    5082: `3422`,
    5083: `3423`,
    5084: `3424`,
    5085: `3425`,
    5086: `3426`,
    5087: `3426`,
    5088: `3426`,
    5089: `3427`,
    509: `201`,
    5090: `3428`,
    5091: `3428`,
    5092: `3429`,
    5093: `3429`,
    5094: `3430`,
    5095: `3431`,
    5096: `3431`,
    5097: `3431`,
    5098: `3432`,
    5099: `3432`,
    51: `2`,
    510: `202`,
    5100: `3433`,
    5101: `3434`,
    5102: `3435`,
    5103: `3435`,
    5104: `3435`,
    5105: `3436`,
    5106: `3436`,
    5107: `3437`,
    5108: `3438`,
    5109: `3438`,
    511: `203`,
    5110: `3438`,
    5111: `3439`,
    5112: `3440`,
    5113: `3440`,
    5114: `3440`,
    5115: `3442`,
    5116: `3443`,
    5117: `3444`,
    5118: `3444`,
    5119: `3445`,
    512: `205`,
    5120: `3446`,
    5121: `3447`,
    5122: `3448`,
    5123: `3449`,
    5124: `3449`,
    5125: `3450`,
    5126: `3450`,
    5127: `3451`,
    5128: `3451`,
    5129: `3452`,
    513: `205`,
    5130: `3453`,
    5131: `3453`,
    5132: `3454`,
    5133: `3454`,
    5134: `3455`,
    5135: `3455`,
    5136: `3456`,
    5137: `3457`,
    5138: `3457`,
    5139: `3458`,
    514: `206`,
    5140: `3459`,
    5141: `3459`,
    5142: `3460`,
    5143: `3461`,
    5144: `3461`,
    5145: `3462`,
    5146: `3463`,
    5147: `3464`,
    5148: `3464`,
    5149: `3465`,
    515: `206`,
    5150: `3466`,
    5151: `3467`,
    5152: `3468`,
    5153: `3469`,
    5154: `3469`,
    5155: `3470`,
    5156: `3470`,
    5157: `3471`,
    5158: `3471`,
    5159: `3472`,
    516: `206`,
    5160: `3473`,
    5161: `3473`,
    5162: `3474`,
    5163: `3475`,
    5164: `3475`,
    5165: `3476`,
    5166: `3477`,
    5167: `3478`,
    5168: `3478`,
    5169: `3479`,
    517: `207`,
    5170: `3480`,
    5171: `3481`,
    5172: `3481`,
    5173: `3482`,
    5174: `3483`,
    5175: `3484`,
    5176: `3485`,
    5177: `3486`,
    5178: `3486`,
    5179: `3487`,
    518: `207`,
    5180: `3487`,
    5181: `3488`,
    5182: `3489`,
    5183: `3489`,
    5184: `3490`,
    5185: `3491`,
    5186: `3491`,
    5187: `3492`,
    5188: `3493`,
    5189: `3494`,
    519: `208`,
    5190: `3494`,
    5191: `3495`,
    5192: `3496`,
    5193: `3496`,
    5194: `3497`,
    5195: `3498`,
    5196: `3504`,
    5197: `3505`,
    5198: `3506`,
    5199: `3506`,
    52: `2`,
    520: `209`,
    5200: `3507`,
    5201: `3507`,
    5202: `3508`,
    5203: `3509`,
    5204: `3509`,
    5205: `3510`,
    5206: `3511`,
    5207: `3512`,
    5208: `3513`,
    5209: `3514`,
    521: `210`,
    5210: `3515`,
    5211: `3516`,
    5212: `3517`,
    5213: `3517`,
    5214: `3518`,
    5215: `3518`,
    5216: `3519`,
    5217: `3520`,
    5218: `3521`,
    5219: `3522`,
    522: `210`,
    5220: `3523`,
    5221: `3524`,
    5222: `3525`,
    5223: `3525`,
    5224: `3525`,
    5225: `3526`,
    5226: `3526`,
    5227: `3527`,
    5228: `3527`,
    5229: `3528`,
    523: `210`,
    5230: `3529`,
    5231: `3529`,
    5232: `3529`,
    5233: `3530`,
    5234: `3531`,
    5235: `3537`,
    5236: `3537`,
    5237: `3538`,
    5238: `3539`,
    5239: `3539`,
    524: `210`,
    5240: `3540`,
    5241: `3540`,
    5242: `3540`,
    5243: `3542`,
    5244: `3543`,
    5245: `3545`,
    5246: `3546`,
    5247: `3547`,
    5248: `3548`,
    5249: `3548`,
    525: `210`,
    5250: `3549`,
    5251: `3549`,
    5252: `3550`,
    5253: `3550`,
    5254: `3550`,
    5255: `3551`,
    5256: `3553`,
    5257: `3554`,
    5258: `3555`,
    5259: `3555`,
    526: `210`,
    5260: `3555`,
    5261: `3556`,
    5262: `3557`,
    5263: `3557`,
    5264: `3560`,
    5265: `3560`,
    5266: `3561`,
    5267: `3561`,
    5268: `3562`,
    5269: `3562`,
    527: `210`,
    5270: `3563`,
    5271: `3564`,
    5272: `3565`,
    5273: `3565`,
    5274: `3566`,
    5275: `3567`,
    5276: `3567`,
    5277: `3568`,
    5278: `3568`,
    5279: `3569`,
    528: `210`,
    5280: `3569`,
    5281: `3570`,
    5282: `3571`,
    5283: `3572`,
    5284: `3572`,
    5285: `3573`,
    5286: `3573`,
    5287: `3574`,
    5288: `3575`,
    5289: `3576`,
    529: `210`,
    5290: `3576`,
    5291: `3577`,
    5292: `3578`,
    5293: `3579`,
    5294: `3581`,
    5295: `3581`,
    5296: `3581`,
    5297: `3582`,
    5298: `3583`,
    5299: `3583`,
    53: `2`,
    530: `210`,
    5300: `3584`,
    5301: `3584`,
    5302: `3584`,
    5303: `3586`,
    5304: `3586`,
    5305: `3586`,
    5306: `3587`,
    5307: `3588`,
    5308: `3588`,
    5309: `3589`,
    531: `210`,
    5310: `3589`,
    5311: `3589`,
    5312: `3591`,
    5313: `3591`,
    5314: `3591`,
    5315: `3592`,
    5316: `3593`,
    5317: `3593`,
    5318: `3594`,
    5319: `3594`,
    532: `210`,
    5320: `3594`,
    5321: `3596`,
    5322: `3596`,
    5323: `3596`,
    5324: `3597`,
    5325: `3598`,
    5326: `3598`,
    5327: `3599`,
    5328: `3599`,
    5329: `3599`,
    533: `210`,
    5330: `3601`,
    5331: `3602`,
    5332: `3603`,
    5333: `3603`,
    5334: `3604`,
    5335: `3605`,
    5336: `3606`,
    5337: `3607`,
    5338: `3608`,
    5339: `3609`,
    534: `210`,
    5340: `3611`,
    5341: `3612`,
    5342: `3612`,
    5343: `3612`,
    5344: `3615`,
    5345: `3615`,
    5346: `3616`,
    5347: `3616`,
    5348: `3617`,
    5349: `3617`,
    535: `210`,
    5350: `3618`,
    5351: `3619`,
    5352: `3620`,
    5353: `3620`,
    5354: `3621`,
    5355: `3622`,
    5356: `3622`,
    5357: `3623`,
    5358: `3623`,
    5359: `3624`,
    536: `210`,
    5360: `3624`,
    5361: `3625`,
    5362: `3626`,
    5363: `3627`,
    5364: `3627`,
    5365: `3628`,
    5366: `3628`,
    5367: `3629`,
    5368: `3630`,
    5369: `3631`,
    537: `211`,
    5370: `3631`,
    5371: `3632`,
    5372: `3632`,
    5373: `3633`,
    5374: `3634`,
    5375: `3635`,
    5376: `3635`,
    5377: `3636`,
    5378: `3637`,
    5379: `3638`,
    538: `211`,
    5380: `3640`,
    5381: `3641`,
    5382: `3642`,
    5383: `3643`,
    5384: `3643`,
    5385: `3644`,
    5386: `3645`,
    5387: `3646`,
    5388: `3647`,
    5389: `3647`,
    539: `211`,
    5390: `3648`,
    5391: `3649`,
    5392: `3649`,
    5393: `3649`,
    5394: `3650`,
    5395: `3650`,
    5396: `3651`,
    5397: `3652`,
    5398: `3652`,
    5399: `3653`,
    54: `2`,
    540: `213`,
    5400: `3654`,
    5401: `3654`,
    5402: `3655`,
    5403: `3656`,
    5404: `3656`,
    5405: `3656`,
    5406: `3657`,
    5407: `3657`,
    5408: `3658`,
    5409: `3659`,
    541: `213`,
    5410: `3659`,
    5411: `3659`,
    5412: `3660`,
    5413: `3660`,
    5414: `3661`,
    5415: `3662`,
    5416: `3662`,
    5417: `3662`,
    5418: `3663`,
    5419: `3663`,
    542: `213`,
    5420: `3664`,
    5421: `3665`,
    5422: `3665`,
    5423: `3665`,
    5424: `3666`,
    5425: `3666`,
    5426: `3667`,
    5427: `3668`,
    5428: `3668`,
    5429: `3668`,
    543: `214`,
    5430: `3669`,
    5431: `3669`,
    5432: `3670`,
    5433: `3670`,
    5434: `3670`,
    5435: `3671`,
    5436: `3672`,
    5437: `3672`,
    5438: `3673`,
    5439: `3675`,
    544: `214`,
    5440: `3676`,
    5441: `3677`,
    5442: `3678`,
    5443: `3678`,
    5444: `3679`,
    5445: `3680`,
    5446: `3681`,
    5447: `3682`,
    5448: `3682`,
    5449: `3683`,
    545: `214`,
    5450: `3684`,
    5451: `3684`,
    5452: `3684`,
    5453: `3685`,
    5454: `3685`,
    5455: `3686`,
    5456: `3687`,
    5457: `3687`,
    5458: `3688`,
    5459: `3689`,
    546: `215`,
    5460: `3689`,
    5461: `3690`,
    5462: `3691`,
    5463: `3691`,
    5464: `3691`,
    5465: `3692`,
    5466: `3692`,
    5467: `3693`,
    5468: `3694`,
    5469: `3694`,
    547: `216`,
    5470: `3694`,
    5471: `3695`,
    5472: `3695`,
    5473: `3696`,
    5474: `3697`,
    5475: `3697`,
    5476: `3697`,
    5477: `3698`,
    5478: `3698`,
    5479: `3699`,
    548: `216`,
    5480: `3699`,
    5481: `3699`,
    5482: `3700`,
    5483: `3700`,
    5484: `3701`,
    5485: `3703`,
    5486: `3703`,
    5487: `3704`,
    5488: `3705`,
    5489: `3705`,
    549: `217`,
    5490: `3706`,
    5491: `3708`,
    5492: `3708`,
    5493: `3709`,
    5494: `3709`,
    5495: `3710`,
    5496: `3712`,
    5497: `3713`,
    5498: `3714`,
    5499: `3715`,
    55: `2`,
    550: `217`,
    5500: `3716`,
    5501: `3716`,
    5502: `3717`,
    5503: `3718`,
    5504: `3719`,
    5505: `3720`,
    5506: `3722`,
    5507: `3722`,
    5508: `3723`,
    5509: `3723`,
    551: `219`,
    5510: `3724`,
    5511: `3725`,
    5512: `3726`,
    5513: `3726`,
    5514: `3726`,
    5515: `3727`,
    5516: `3727`,
    5517: `3727`,
    5518: `3729`,
    5519: `3730`,
    552: `220`,
    5520: `3730`,
    5521: `3730`,
    5522: `3732`,
    5523: `3733`,
    5524: `3733`,
    5525: `3734`,
    5526: `3734`,
    5527: `3734`,
    5528: `3736`,
    5529: `3737`,
    553: `221`,
    5530: `3737`,
    5531: `3738`,
    554: `222`,
    555: `222`,
    556: `223`,
    557: `223`,
    558: `224`,
    559: `225`,
    56: `2`,
    560: `226`,
    561: `227`,
    562: `227`,
    563: `228`,
    564: `229`,
    565: `230`,
    566: `231`,
    567: `231`,
    568: `232`,
    569: `232`,
    57: `2`,
    570: `232`,
    571: `234`,
    572: `234`,
    573: `234`,
    574: `235`,
    575: `236`,
    576: `236`,
    577: `236`,
    578: `237`,
    579: `237`,
    58: `2`,
    580: `238`,
    581: `238`,
    582: `240`,
    583: `241`,
    584: `242`,
    585: `242`,
    586: `242`,
    587: `243`,
    588: `243`,
    589: `244`,
    59: `2`,
    590: `245`,
    591: `245`,
    592: `246`,
    593: `247`,
    594: `248`,
    595: `248`,
    596: `249`,
    597: `250`,
    598: `251`,
    599: `252`,
    6: `2`,
    60: `2`,
    600: `252`,
    601: `253`,
    602: `253`,
    603: `253`,
    604: `255`,
    605: `255`,
    606: `255`,
    607: `256`,
    608: `257`,
    609: `257`,
    61: `2`,
    610: `257`,
    611: `258`,
    612: `259`,
    613: `259`,
    614: `260`,
    615: `260`,
    616: `262`,
    617: `263`,
    618: `264`,
    619: `264`,
    62: `2`,
    620: `264`,
    621: `265`,
    622: `265`,
    623: `266`,
    624: `267`,
    625: `267`,
    626: `268`,
    627: `269`,
    628: `270`,
    629: `271`,
    63: `2`,
    630: `271`,
    631: `272`,
    632: `273`,
    633: `274`,
    634: `275`,
    635: `275`,
    636: `276`,
    637: `276`,
    638: `276`,
    639: `278`,
    64: `2`,
    640: `278`,
    641: `278`,
    642: `279`,
    643: `280`,
    644: `280`,
    645: `280`,
    646: `281`,
    647: `282`,
    648: `282`,
    649: `283`,
    65: `2`,
    650: `283`,
    651: `285`,
    652: `286`,
    653: `287`,
    654: `287`,
    655: `287`,
    656: `288`,
    657: `288`,
    658: `289`,
    659: `290`,
    66: `2`,
    660: `290`,
    661: `291`,
    662: `292`,
    663: `293`,
    664: `294`,
    665: `294`,
    666: `295`,
    667: `296`,
    668: `297`,
    669: `298`,
    67: `2`,
    670: `298`,
    671: `299`,
    672: `299`,
    673: `299`,
    674: `301`,
    675: `301`,
    676: `301`,
    677: `302`,
    678: `303`,
    679: `303`,
    68: `2`,
    680: `303`,
    681: `304`,
    682: `305`,
    683: `305`,
    684: `306`,
    685: `306`,
    686: `308`,
    687: `309`,
    688: `310`,
    689: `310`,
    69: `2`,
    690: `310`,
    691: `311`,
    692: `311`,
    693: `312`,
    694: `313`,
    695: `313`,
    696: `314`,
    697: `315`,
    698: `316`,
    699: `317`,
    7: `2`,
    70: `2`,
    700: `317`,
    701: `318`,
    702: `319`,
    703: `320`,
    704: `321`,
    705: `321`,
    706: `322`,
    707: `322`,
    708: `322`,
    709: `324`,
    71: `2`,
    710: `324`,
    711: `324`,
    712: `325`,
    713: `326`,
    714: `326`,
    715: `326`,
    716: `327`,
    717: `328`,
    718: `328`,
    719: `329`,
    72: `2`,
    720: `329`,
    721: `331`,
    722: `332`,
    723: `333`,
    724: `333`,
    725: `333`,
    726: `334`,
    727: `334`,
    728: `335`,
    729: `336`,
    73: `2`,
    730: `336`,
    731: `337`,
    732: `338`,
    733: `339`,
    734: `340`,
    735: `340`,
    736: `341`,
    737: `342`,
    738: `343`,
    739: `344`,
    74: `2`,
    740: `344`,
    741: `345`,
    742: `345`,
    743: `345`,
    744: `347`,
    745: `347`,
    746: `348`,
    747: `348`,
    748: `348`,
    749: `349`,
    75: `2`,
    750: `349`,
    751: `350`,
    752: `350`,
    753: `351`,
    754: `351`,
    755: `352`,
    756: `352`,
    757: `352`,
    758: `353`,
    759: `354`,
    76: `2`,
    760: `362`,
    761: `362`,
    762: `363`,
    763: `364`,
    764: `365`,
    765: `365`,
    766: `366`,
    767: `366`,
    768: `367`,
    769: `368`,
    77: `4`,
    770: `369`,
    771: `369`,
    772: `370`,
    773: `370`,
    774: `371`,
    775: `371`,
    776: `372`,
    777: `373`,
    778: `373`,
    779: `374`,
    78: `4`,
    780: `374`,
    781: `375`,
    782: `376`,
    783: `377`,
    784: `377`,
    785: `378`,
    786: `379`,
    787: `380`,
    788: `381`,
    789: `382`,
    79: `5`,
    790: `382`,
    791: `383`,
    792: `383`,
    793: `383`,
    794: `384`,
    795: `384`,
    796: `385`,
    797: `385`,
    798: `386`,
    799: `386`,
    8: `2`,
    80: `5`,
    800: `387`,
    801: `388`,
    802: `389`,
    803: `389`,
    804: `391`,
    805: `391`,
    806: `392`,
    807: `393`,
    808: `394`,
    809: `394`,
    81: `5`,
    810: `395`,
    811: `395`,
    812: `396`,
    813: `397`,
    814: `398`,
    815: `398`,
    816: `399`,
    817: `399`,
    818: `400`,
    819: `400`,
    82: `6`,
    820: `401`,
    821: `402`,
    822: `402`,
    823: `403`,
    824: `404`,
    825: `413`,
    826: `413`,
    827: `414`,
    828: `414`,
    829: `414`,
    83: `7`,
    830: `415`,
    831: `415`,
    832: `416`,
    833: `416`,
    834: `417`,
    835: `417`,
    836: `417`,
    837: `418`,
    838: `418`,
    839: `419`,
    84: `8`,
    840: `419`,
    841: `420`,
    842: `420`,
    843: `421`,
    844: `422`,
    845: `423`,
    846: `423`,
    847: `425`,
    848: `425`,
    849: `426`,
    85: `9`,
    850: `426`,
    851: `427`,
    852: `428`,
    853: `428`,
    854: `429`,
    855: `430`,
    856: `436`,
    857: `436`,
    858: `437`,
    859: `437`,
    86: `10`,
    860: `437`,
    861: `438`,
    862: `439`,
    863: `439`,
    864: `440`,
    865: `440`,
    866: `441`,
    867: `442`,
    868: `442`,
    869: `443`,
    87: `11`,
    870: `444`,
    871: `445`,
    872: `445`,
    873: `446`,
    874: `448`,
    875: `448`,
    876: `449`,
    877: `449`,
    878: `450`,
    879: `451`,
    88: `11`,
    880: `452`,
    881: `452`,
    882: `453`,
    883: `453`,
    884: `454`,
    885: `455`,
    886: `456`,
    887: `456`,
    888: `457`,
    889: `457`,
    89: `12`,
    890: `459`,
    891: `459`,
    892: `460`,
    893: `460`,
    894: `460`,
    895: `461`,
    896: `461`,
    897: `463`,
    898: `463`,
    899: `464`,
    9: `2`,
    90: `13`,
    900: `464`,
    901: `465`,
    902: `465`,
    903: `465`,
    904: `466`,
    905: `466`,
    906: `468`,
    907: `468`,
    908: `469`,
    909: `469`,
    91: `14`,
    910: `470`,
    911: `470`,
    912: `470`,
    913: `471`,
    914: `471`,
    915: `472`,
    916: `473`,
    917: `473`,
    918: `474`,
    919: `475`,
    92: `14`,
    920: `476`,
    921: `476`,
    922: `477`,
    923: `478`,
    924: `479`,
    925: `479`,
    926: `480`,
    927: `480`,
    928: `480`,
    929: `480`,
    93: `15`,
    930: `480`,
    931: `480`,
    932: `480`,
    933: `480`,
    934: `480`,
    935: `480`,
    936: `481`,
    937: `481`,
    938: `482`,
    939: `483`,
    94: `15`,
    940: `484`,
    941: `484`,
    942: `485`,
    943: `485`,
    944: `486`,
    945: `486`,
    946: `487`,
    947: `488`,
    948: `488`,
    949: `489`,
    95: `16`,
    950: `490`,
    951: `491`,
    952: `491`,
    953: `492`,
    954: `493`,
    955: `494`,
    956: `494`,
    957: `495`,
    958: `495`,
    959: `495`,
    96: `17`,
    960: `496`,
    961: `497`,
    962: `497`,
    963: `498`,
    964: `499`,
    965: `499`,
    966: `499`,
    967: `500`,
    968: `501`,
    969: `501`,
    97: `18`,
    970: `502`,
    971: `502`,
    972: `502`,
    973: `502`,
    974: `502`,
    975: `502`,
    976: `503`,
    977: `503`,
    978: `504`,
    979: `505`,
    98: `19`,
    980: `507`,
    981: `507`,
    982: `508`,
    983: `508`,
    984: `509`,
    985: `510`,
    986: `511`,
    987: `512`,
    988: `513`,
    989: `514`,
    99: `21`,
    990: `514`,
    991: `515`,
    992: `516`,
    993: `517`,
    994: `518`,
    995: `519`,
    996: `519`,
    997: `520`,
    998: `521`,
    999: `522`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 2,
  stateSize: 162,
  unsupported: [],
  version: 13,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:425:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T15","name":"v67783","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"_Protocol_harvest0_35418","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"_Provider_withdraw0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapAForB0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapBForA0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapAForB0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapBForA0_35418","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v43960","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v43986","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"v0","type":"tuple"}],"name":"_reach_oe_v46907","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v48772","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v50793","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v52801","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v54810","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v56804","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v58799","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v59177","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"internalType":"address payable","name":"liquidityToken","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"lptBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"poolBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"protoInfo","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"protoBals","type":"tuple"},{"internalType":"address payable","name":"tokB","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"tokA","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Protocol_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v67731","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"v67732","type":"tuple"}],"name":"Protocol_harvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v67739","type":"tuple"},{"internalType":"uint256","name":"v67740","type":"uint256"}],"name":"Provider_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67747","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v67748","type":"tuple"}],"name":"Provider_withdraw","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67755","type":"uint256"},{"internalType":"uint256","name":"v67756","type":"uint256"}],"name":"Trader_exactSwapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67763","type":"uint256"},{"internalType":"uint256","name":"v67764","type":"uint256"}],"name":"Trader_exactSwapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67771","type":"uint256"},{"internalType":"uint256","name":"v67772","type":"uint256"}],"name":"Trader_swapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67779","type":"uint256"},{"internalType":"uint256","name":"v67780","type":"uint256"}],"name":"Trader_swapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T9","name":"v67786","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"_Protocol_harvest0_35418","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"_Provider_withdraw0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapAForB0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapBForA0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapAForB0_35418","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapBForA0_35418","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"internalType":"struct T14","name":"v67789","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67703","type":"uint256"}],"name":"v_exactSwapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67709","type":"uint256"}],"name":"v_exactSwapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67715","type":"uint256"}],"name":"v_swapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67721","type":"uint256"}],"name":"v_swapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060405260c0620084cb80380380916200001a82620000be565b60803912620000a2576040516200003181620000f4565b608051815262000040620001ba565b60208201526200004f620001d1565b604082015260e051606082015261010051906001600160c01b031982168203620000a2576200009291608082015262000087620001e8565b60a082015262000335565b604051615b559081620019748239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000e557604052565b620000ef620000a7565b604052565b60c081019081106001600160401b03821117620000e557604052565b604081019081106001600160401b03821117620000e557604052565b60a081019081106001600160401b03821117620000e557604052565b601f909101601f19168101906001600160401b03821190821017620000e557604052565b604051906101c082016001600160401b03811183821017620000e557604052565b6040519061028082016001600160401b03811183821017620000e557604052565b6001600160a01b031690565b60a051906001600160a01b0382168203620000a257565b60c051906001600160a01b0382168203620000a257565b61012051906001600160a01b0382168203620000a257565b604051906200020f8262000110565b60006020838281520152565b604051906200022a826200012c565b60006080838281528260208201528260408201528260608201520152565b60405190606082016001600160401b0381118382101762000279575b60405260006040838281528260208201520152565b62000283620000a7565b62000264565b6040519060e082016001600160401b0381118382101762000301575b6040528160008152620002b762000200565b6020820152620002c662000200565b6040820152620002d56200021b565b6060820152620002e462000200565b6080820152600060a082015260c0620002fc62000248565b910152565b6200030b620000a7565b620002a5565b60405190620003208262000110565b60006020836200032f62000200565b81520152565b620003e7906000808055436003556101a0620003506200016c565b8281526200035d62000289565b60208201528260408201526200037262000311565b60608201528260808201526200038762000200565b60a08201526200039662000200565b60c0820152620003a562000200565b60e0820152620003b462000200565b610100820152620003c462000200565b610120820152826101408201528261016082015282610180820152015262000878565b565b60405190620003f88262000110565b81600081526020620002fc6200021b565b60405190620004188262000110565b6040368337565b620004296200018d565b9060008083526200043962000248565b602084015262000448620003e9565b604084015262000457620003e9565b60608401528060808401526200046c62000200565b60a08401526200047b62000248565b60c08401528060e084015280610100840152806101208401526200049e62000409565b6101408401528061016084015280610180840152806101a0840152620004c362000200565b6101c0840152806101e0840152806102008401528061022084015280610240840152610260830152565b6001600160a01b039091169052565b80519060028210156200052c579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03918216815260a081019493909260809291906200056c906020860190620004fc565b16910152565b3d15620005c1573d906001600160401b038211620005b1575b60405191620005a5601f8201601f19166020018462000148565b82523d6000602084013e565b620005bb620000a7565b6200058b565b606090565b908160a0910312620000a25760405190620005e1826200012c565b8051825260208082015190830152604080820151908301526060810151906001600160a01b0382168203620000a257608091606084015201518015158103620000a257608082015290565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260209182015160c082019392620003e79201906200062c565b92919060405193602085015260408401526060830152606082526080820182811060018060401b03821117620000e557604052565b919082519283825260005b848110620006e3575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201620006c1565b94936200073e6012946200072f60a095620007206200074d9660c08c5260c08c0190620006b6565b908a820360208c0152620006b6565b9088820360408a0152620006b6565b908682036060880152620006b6565b6000196080860152930152565b506040513d6000823e3d90fd5b906002811015620007795760051b0190565b634e487b7160e01b600052603260045260246000fd5b50634e487b7160e01b600052601160045260246000fd5b6001906000198114620007b7570190565b620007c16200078f565b0190565b6040519061018082016001600160401b0381118382101762000868575b60405281610160600091828152826020820152620007ff62000248565b60408201528260608201526200081462000200565b60808201528260a08201526200082962000200565b60c08201526200083862000200565b60e08201526200084762000200565b610100820152620008576200021b565b610120820152826101408201520152565b62000872620000a7565b620007e2565b90620008836200041f565b91620008a36200089d6200089960045460ff1690565b1590565b6200112f565b6040805133815282516020808301919091528301516001600160a01b03908116828401529183015182166060808301919091528301516080808301919091528301516001600160c01b03191660a08083019190915283015190911660c08201527f7f4b3c377d6ad2214bfab0494aa14eb27c6d5d0ccb6c3de8992ad8f4f9684ea29060e090a16200094181518015908115620010fb575b5062001150565b620009506040820151620001ae565b62000969620009636020840151620001ae565b620001ae565b6001600160a01b0390911603620010ef5762000986600062001171565b620009956020820151620001ae565b620009a8620009636040840151620001ae565b6001600160a01b0390911603620010e357620009c5600062001192565b620009d13415620011b3565b6020830151600190526020810151620009ea90620001ae565b602084015160400190620009fe91620004ed565b80602081015162000a0f90620001ae565b3062000a1b91620012fc565b610200850190815230604083015162000a3490620001ae565b9062000a4091620012fc565b906102408601918252476101e0870190815262000a65600160ff196004541617600455565b602087015192604085015162000a7b90620001ae565b60405180956020820192633b02a71760e01b84523091602484019262000aa19362000542565b0394601f1995868101825262000ab8908262000148565b60a087015162000ac890620001ae565b62000ad390620001ae565b90515a9260008094938194f19262000aea62000572565b938462000af79162001298565b5062000b0860ff1960045416600455565b30602087015162000b1990620001ae565b9062000b2591620012fc565b90518082036102208b015262000b3c9114620011d4565b30604086015162000b4d90620001ae565b9062000b5991620012fc565b90518082036102608a015262000b709114620011f5565b479051900390604087019182515280518101602001906020019062000b9591620005c6565b8151602001525180606087015260405162000bb281928262000664565b037fae3af09f223c1f10af441221467b082c09d44fc6d8abe8bf0381889d4449911891a184606081015160200151805160641160009060001462000d917f5cece995dd0175f278a31ba0a02ba14292c9e5728fb329ee74bd2b17be3433da9662000d9e62000e2f976000602060a062000e159a62000d5a9a62000d209a62000dcb9a620010db5750836064910151105b8414620010cf5762000c74836060830151015162000c6c6040820151918681015190519062001108565b146080830152565b6080810151151584908514620010c957506064604084606084015101510151105b84908514620010be575062000cb7604084606084015101510151151562001214565b62000cc86060820151511562001235565b831982820151520151015262000d7c8d62000d6762000d3c608060e060c085019460008651526000602087510152600060408751015201976000895262000d2d60608201516040519d8e916020830160209181520190565b038881018e528d62000148565b01516001600160c01b03191690565b6040516001600160c01b03199091166020820152998a906028820190565b038481018b528a62000148565b51805190604060208201519101519162000681565b92516040519485916020830160209181520190565b0390810184528362000148565b604051948594611002808701906001600160401b03821188831017620010ae575b620074c98839620006f8565b03906000f080156200109e575b61010087019062000df3906001600160a01b031682620004ed565b62000e0e62000e038251620001ae565b6101208901620004ed565b51620001ae565b6040516001600160a01b0390911681529081906020820190565b0390a162000e5162000e456020830151620001ae565b610140850151620004ed565b62000e7362000e646040830151620001ae565b610140850151602001620004ed565b600061018084015260005b6002811062001002575082606062000e9f610180620003e795960151151590565b151561016083810182905292901562000ff65762000ebe600062001256565b62000ece610120820151620001ae565b62000ee1620009636020870151620001ae565b6000916001600160a01b031690810362000fc557505062000f03600062001277565b6101c081016000815152600060208251015262000f5662000f4c604062000f29620007c5565b9762000f4462000f3d6020830151620001ae565b8a620004ed565b0151620001ae565b60208701620004ed565b6020820151604086015262000f7d62000f74610120840151620001ae565b848701620004ed565b80516080860152600060a086015260a082015160c0860152805160e08601525161010085015260208282015101516101208501524361014085015201515190820152620017ba565b62000fd8620009636040880151620001ae565b0362000fe95762000f039062001277565b5062000f03600162001277565b62000ebe600162001256565b80620010386200102d620010206200105d9461014089015162000767565b516001600160a01b031690565b6101a08701620004ed565b61018085015115158015620010635762001057905b1515610180870152565b620007a6565b62000e7e565b506200105762001078610120870151620001ae565b6200108c620009636101a0890151620001ae565b6001600160a01b03909116146200104d565b620010a86200075a565b62000dd8565b620010b8620000a7565b62000dbf565b62000cb79062001214565b62000c95565b83608082015262000c74565b905062000c42565b620009c5600162001192565b62000986600162001171565b905060015414386200093a565b91908201918281116200111f575b8210620000a257565b620011296200078f565b62001116565b156200113757565b60405163100960cb60e01b8152601d6004820152602490fd5b156200115857565b60405163100960cb60e01b8152601e6004820152602490fd5b156200117957565b60405163100960cb60e01b8152601f6004820152602490fd5b156200119a57565b60405163100960cb60e01b815260216004820152602490fd5b15620011bb57565b60405163100960cb60e01b815260226004820152602490fd5b15620011dc57565b60405163100960cb60e01b815260236004820152602490fd5b15620011fd57565b602460405163100960cb60e01b8152816004820152fd5b156200121c57565b60405163100960cb60e01b815260266004820152602490fd5b156200123d57565b60405163100960cb60e01b815260276004820152602490fd5b156200125e57565b60405163100960cb60e01b815260286004820152602490fd5b156200127f57565b60405163100960cb60e01b815260296004820152602490fd5b15620012a15790565b805115620012b157805190602001fd5b60405163100960cb60e01b815260256004820152602490fd5b15620012d35790565b805115620012e357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b6040516370a0823160e01b602082019081526001600160a01b039384166024808401919091528252600093849392849190606081016001600160401b0381118282101762001379575b6040525193165af1620013636200135b62000572565b8092620012ca565b50602081805181010312620000a2576020015190565b62001383620000a7565b62001345565b6040519061014082016001600160401b038111838210176200141d575b604052600061012083828152826020820152620013c262000248565b6040820152826060820152620013d762000200565b6080820152620013e662000200565b60a0820152620013f562000200565b60c08201526200140462000200565b60e0820152620014136200021b565b6101008201520152565b62001427620000a7565b620013a6565b60208091805184520151910152565b81516001600160a01b031681526102808101929161026090610120906020818101516001600160a01b0316908501526200147f60408201516040860190620004fc565b60608101516001600160a01b031660a0850152620014a6608082015160c08601906200142d565b620014fa60a0820151620014c161010091828801906200142d565b620014d660c08401516101408801906200142d565b620014eb60e08401516101808801906200142d565b8201516101c08601906200062c565b0151910152565b90600182811c9216801562001533575b60208310146200151d57565b634e487b7160e01b600052602260045260246000fd5b91607f169162001511565b601f81116200154b575050565b6000906002825260208220906020601f850160051c830194106200158c575b601f0160051c01915b8281106200158057505050565b81815560010162001573565b90925082906200156a565b80519091906001600160401b0381116200168b575b620015c481620015be60025462001501565b6200153e565b602080601f8311600114620016035750819293600092620015f7575b50508160011b916000199060031b1c191617600255565b015190503880620015e0565b6002600052601f198316949091907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace926000905b8782106200167257505083600195961062001658575b505050811b01600255565b015160001960f88460031b161c191690553880806200164d565b8060018596829496860151815501950193019062001637565b62001695620000a7565b620015ac565b6040519061010082016001600160401b0381118382101762001716575b604052816000815260006020820152620016d162000248565b604082015260006060820152620016e762000200565b6080820152620016f662000200565b60a08201526200170562000200565b60c082015260e0620002fc6200021b565b62001720620000a7565b620016b8565b620003e79092919261018060e061022083019560018060a01b038082511685528060208301511660208601526200176660408301516040870190620004fc565b60608201511660a085015262001785608082015160c08601906200142d565b6200179a60a08201516101008601906200142d565b620017af60c08201516101408601906200142d565b01519101906200062c565b60a0810151156200189b576200188662001895620003e792610120620017df6200169b565b91620017f7620017f08251620001ae565b84620004ed565b620018146200180a6020830151620001ae565b60208501620004ed565b604081015160408401526200183b620018316060830151620001ae565b60608501620004ed565b60c0810151608084015260e081015160a084015261010081015160c0840152015160e08201526200186c6002600055565b6200187643600155565b6040519283916020830162001726565b03601f19810183528262000148565b62001597565b6200188662001895620003e792620018b262001389565b90620018ca620018c38251620001ae565b83620004ed565b620018e7620018dd6020830151620001ae565b60208401620004ed565b604081015160408301526200190e620019046060830151620001ae565b60608401620004ed565b6080810151608083015260c081015160a083015260e081015160c0830152610160610100918281015160e0850152610120928382015190850152015190820152620019596004600055565b6200196343600155565b604051928391602083016200143c56fe60806040526004361015610018575b361561001657005b005b60003560e01c80630e36a72c146101805780631e93b0f1146101775780633402da131461016e5780634012e02e14610165578063450bacff1461015c5780635e75b021146101535780636167d4921461014a57806374e0507d146101415780637731406e14610138578063800a119b1461012f5780638323075714610126578063842463da1461011d57806388f8ea6314610114578063ab53f2c61461010b578063b8aaa65414610102578063be20a474146100f9578063c8867ae9146100f05763dc8d714f0361000e576100eb611539565b61000e565b506100eb6114ce565b506100eb611439565b506100eb61105b565b506100eb610fe6565b506100eb610f03565b506100eb610e98565b506100eb610e79565b506100eb610e0f565b506100eb6109f0565b506100eb61092d565b506100eb610814565b506100eb61079c565b506100eb61072d565b506100eb61049a565b506100eb6102f2565b506100eb6102b1565b506100eb6101e3565b6001600160a01b031690565b6001600160a01b038116036101a657565b600080fd5b60208091805184520151910152565b60206040916101ca8482516101ab565b0151910152565b6060810192916101e191906101ba565b565b5060c03660031901126101a6576004356101fc81610195565b60a03660231901126101a65760606102ad916102166118f5565b5061029f610222611915565b809261022c61297c565b6001600160a01b039182168152906020820161024736612998565b815260405191610256836115f5565b61025e61297c565b8352602083019361026d612a03565b855251168251525160208251015260008251525160208251015261028f612a7f565b90600082525160208201526131aa565b0151604051918291826101d1565b0390f35b50346101a65760003660031901126101a6576020600354604051908152f35b60409060031901126101a657600490565b60409060231901126101a657602490565b5060603660031901126101a6576102ad608061030d366102d0565b61037d610318611915565b809261032d6103256118f5565b9136906158e1565b815260208101604435815260405190610345826115f5565b61034d6118f5565b8252602082019261035c612a03565b8452518251525160208251015260018251525160408251015261028f612a7f565b01516040519081529081906020820190565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b50634e487b7160e01b600052602160045260246000fd5b6040908051600281101561040c575b83526020818101511515908401528101516001600160a01b0316910152565b6104146103c7565b6103ed565b81516001600160a01b039081168252602080840151610200840195946101e194936101a09360c09361044d918701906101ab565b61045f604083015160608701906101ab565b610471606083015160a087019061038f565b61048460808301516101408701906101ab565b60a08201511661018085015201519101906103de565b50346101a65760003660031901126101a6576104b461187b565b506102ad60206104c2611915565b6104ca6119a9565b60005460048110156106145760026104e29114611cd0565b6104ea611693565b9060406105008593848082518301019101611c0f565b60808101848151519160a0860192835152510151858251015260a08201858151519160c0870192835152510151868251015260e083019061058d61058160808451519460e08a01958651528a815101518b875101528881510151898751015261057961056f6060835101611bf3565b6060885101611c00565b510151151590565b60808451019015159052565b60c0840192878451519461010089019586515251015188855101526105c56101206105bb6060880151610189565b9801978851611c00565b51878751015251848651015251606085510152516080845101526105f86105ee85830151610189565b60a0855101611c00565b015160c08251015251908201525b015160405191829182610419565b60046106209114611cb0565b610628611693565b90604061063e8593848082518301019101611b33565b8360a08201805151855152510151848451015260c08101848151519181860192835152510151858251015261010082016106bb6106af6080835151938789019485515289815101518a86510152878151015188865101526105796106a56060835101611bf3565b6060875101611c00565b60808351019015159052565b60e08301918683515193606088019485515251015187845101526106e26060850151610189565b956106f260808201978851611c00565b518787510152518486510152516060855101525160808451015261071b6105ee85830151610189565b015160c0825101525190820152610606565b5060403660031901126101a657610743366102d0565b61074b611915565b6040823603126101a65761078191602060405191610768836115f5565b80358352013561077781611a40565b6020820152612675565b602060405160008152f35b6040810192916101e191906101ab565b5060403660031901126101a6576107b16117dc565b506102ad60c06107bf611915565b610806816107cb6117dc565b60043581526020810160243581526107e1615909565b915182515251602082510152602081019060038251525160808251015261028f612a7f565b01516040519182918261078c565b50346101a6576020806003193601126101a6576101406102ad916004359061083a611915565b91600054600481106000146108d657916108b66108b16108bc9361086360026108c19714611d10565b61087c61086e611693565b858082518301019101611c0f565b936108a860a061089c610896604060e08a015101516150ba565b85615187565b96019586515190615187565b94510151615120565b61512d565b906151d2565b6150df565b91018190526040519081529081906020820190565b916108b66108b16108bc936108f060046109249714611cf0565b6109096108fb611693565b858082518301019101611b33565b936108a860c061089c61089660406101008a015101516150ba565b8282015261037d565b506102c03660031901126101a657610943611915565b60405190610950826115f5565b60043582526102a03660231901126101a6576109e49161096e61173c565b61097661592b565b81526109813661593a565b602082015261098f366159b7565b604082015261099d36615a02565b60608201526109ab36615835565b60808201526109b936615860565b60a08201526109c73661588b565b60c08201526109d5366158b6565b60e082015260208201526131aa565b60405160008152602090f35b50346101a6576020806003193601126101a65760043590610a0f611915565b610a17615a51565b60008054846004821015610c3e57506002610a329114611d90565b83610a4c610a3e611693565b828082518301019101611c0f565b9160e0830192610a60608085510151151590565b15610c3457610a6e82611db0565b60a0019382855101516101408201908152855151926101608301938452855160400151610a9a90615108565b610aa4908b615187565b9661018097888501908082528451610abb91615187565b908651610ac79061512d565b9051610ad2916150f4565b610adb916151d2565b966101a085019788528b82515190610af2916150f4565b9b6101c086019c8d528783510151610b0a9082615187565b8d51610b159161301b565b8951610b2091615120565b825151610b2c9061515a565b835160400151610b3b916151d2565b610b4491615187565b60649004916101e087019283525151610b5c91615187565b6127109004926102008601918483526102208701948551528189865101528d6102408801938385515282518b86510152518a86510151610b9b91615187565b9051610ba69161301b565b90511090506000149b6101809b610bf3610c14996102ad9f610c0d99610260610c0399610bfd98610be794610c2b575051915b019581875251905190615120565b955101518b5190615120565b9151015190615120565b90615187565b9251905190615187565b1115611dd0565b519082015201516040519081529081906020820190565b90505191610bd9565b610a6e6001611db0565b9192906004610c4d9114611d30565b610c66610c58611693565b838082518301019101611b33565b6101009182820191610c7c608084510151151590565b15610e0557610c8a86611d50565b60c001928484510151825283515193858301948552835160400151610cae90615108565b610cb8908b615187565b60408401908082528451610ccb91615187565b908651610cd79061512d565b9051610ce2916150f4565b610ceb916151d2565b96606084019788528a82515190610d01916150f4565b9a608085019b8c528783510151610d189082615187565b8c51610d239161301b565b8951610d2e91615120565b865151610d3a9061515a565b875160400151610d49916151d2565b610d5291615187565b606490049560a086019687525151610d6991615187565b61271090049460c085019386855260e08601968751528289885101528501938285515281518986510152518884510151610da291615187565b8c51610dad9161301b565b90511090506000146102ad9a6101809a610bf3610df399610be7610dec99610c0398610bfd97610dfd5750515b6101208a019581875251905190615120565b1115611d70565b518282015261037d565b905051610dda565b610c8a6001611d50565b5060403660031901126101a657610e246117dc565b506102ad60e0610e32611915565b61080681610e3e6117dc565b6004358152602081016024358152610e54615909565b915182515251602082510152602081019060048251525160a08251015261028f612a7f565b50346101a65760003660031901126101a6576020600154604051908152f35b5060003660031901126101a65760206040610eb1611915565b610eea818351858101818110600180881b03821117610ef6575b855260008152610ed96117dc565b906000825251151586820152612675565b01511515604051908152f35b610efe6115de565b610ecb565b50346101a6576020806003193601126101a6576101606102ad9160043590610f29611915565b9160005460048110600014610f9957916108b66108b16108bc93610f5260026108c19714611e10565b610f91610f6e610f60611693565b868082518301019101611c0f565b60a0610f84610896604060e085015101516150ba565b9101958651015190615187565b935151615120565b916108b66108b16108bc93610fb360046109249714611df0565b610f91610fcf610fc1611693565b868082518301019101611b33565b60c0610f84610896604061010085015101516150ba565b50346101a657600080600319360112611058578054611003611693565b906040519283918252602090604082840152835191826040850152815b83811061104157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101611020565b80fd5b50346101a6576020806003193601126101a6576004359061107a611915565b611082615a51565b92600080546004811060001461126e57600261109e9114611e90565b6110a961086e611693565b9060e08201916110bd608084510151151590565b15611264576110cb82611eb0565b60a00190815151906101408801918252868351015161016089019081528451604001516110f790615108565b6111019087615187565b6101808a0190808252845161111591615187565b9082516111219061512d565b905161112c916150f4565b611135916151d2565b946101a096878b01968752808a8751015190611150916150f4565b906101c08c019182528651516111669082615187565b82516111719161301b565b885161117c91615120565b8351516111889061515a565b845160400151611197916151d2565b6111a091615187565b60649004926101e08d0193845251516111b891615187565b6127109004936102008c01928584526102208d0195865152818c875101526102408d01938285515281518d86510152518851516111f491615187565b83516111ff9161301b565b90511090506000146102ad9b6112496101a09c61123e610c149a6102606112549a610c0399610bfd9861125b575051955b0194855251518c5190615120565b908351015190615120565b925190515190615120565b1115611ed0565b90505195611230565b6110cb6001611eb0565b600461127f91969592939614611e30565b61129861128a611693565b828082518301019101611b33565b9361010094858101906112af608083510151151590565b1561142f576112bd85611e50565b60c0019586515183528387510151908484019182528251604001516112e190615108565b6112eb908a615187565b604085019080825285516112fe91615187565b90835161130a9061512d565b9051611315916150f4565b61131e916151d2565b956060850196875289868a51015190611336916150f4565b99608086019a8b5289515161134b9082615187565b8b516113569161301b565b885161136191615120565b85515161136d9061515a565b86516040015161137c916151d2565b61138591615187565b606490049460a08701958652515161139c91615187565b61271090049360c086019285845260e08701958651528288875101528601928284515281518885510152518a51516113d391615187565b8b516113de9161301b565b905110905060001498610bfd6101a099611249610df39861123e61141f986102ad9f97610c0398611426575051935b6101208b0194855251518c5190615120565b1115611e70565b9050519361140d565b6112bd6001611e50565b5060603660031901126101a6576102ad60a0611454366102e1565b61145c6117dc565b50610806611468611915565b80926114726129e7565b906004358252611487602083019136906158e1565b815260405190611496826115f5565b61149e6129e7565b825260208201926114ad612a03565b8452518251525160208251015260028251525160608251015261028f612a7f565b5060403660031901126101a6576114e36117dc565b506102ad6101006114f2611915565b610806816114fe6117dc565b6004358152602081016024358152611514615909565b915182515251602082510152602081019060058251525160c08251015261028f612a7f565b5060403660031901126101a65761154e6117dc565b506102ad61012061155d611915565b610806816115696117dc565b600435815260208101602435815261157f615909565b915182515251602082510152602081019060068251525160e08251015261028f612a7f565b90600182811c921680156115d4575b60208310146115be57565b634e487b7160e01b600052602260045260246000fd5b91607f16916115b3565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761161057604052565b6116186115de565b604052565b61014081019081106001600160401b0382111761161057604052565b60a081019081106001600160401b0382111761161057604052565b61010081019081106001600160401b0382111761161057604052565b601f909101601f19168101906001600160401b0382119082101761161057604052565b60405190600082600254916116a7836115a4565b80835260019380851690811561171b57506001146116cd575b506101e192500383611670565b60026000908152600080516020615b0983398151915294602093509091905b8183106117035750506101e19350820101386116c0565b855488840185015294850194879450918301916116ec565b90506101e194506020925060ff191682840152151560051b820101386116c0565b6040519061010082016001600160401b0381118382101761161057604052565b604051906101c082016001600160401b0381118382101761161057604052565b6040519061014082016001600160401b0381118382101761161057604052565b60405190610de082016001600160401b0381118382101761161057604052565b6040519061028082016001600160401b0381118382101761161057604052565b604051906117e9826115f5565b60006020838281520152565b6040519060a082016001600160401b03811183821017611831575b60405260006080838281528260208201528260408201528260608201520152565b6118396115de565b611810565b60405190606082016001600160401b0381118382101761186e575b60405260006040838281528260208201520152565b6118766115de565b611859565b6040519060e082016001600160401b038111838210176118e8575b60405281600081526118a66117dc565b60208201526118b36117dc565b60408201526118c06117f5565b60608201526118cd6117dc565b6080820152600060a082015260c06118e361183e565b910152565b6118f06115de565b611896565b60405190611902826115f5565b600060208361190f6117dc565b81520152565b61191d61175c565b90600080835261192b61187b565b602084015280604084015261193e6118f5565b60608401528060808401526119516117dc565b60a084015261195e6117dc565b60c084015261196b6117dc565b60e08401526119786117dc565b6101008401526119866117dc565b6101208401528061014084015280610160840152806101808401526101a0830152565b604051906119b68261161d565b816119bf6117dc565b81526119c96117dc565b60208201526119d66117f5565b60408201526119e36117dc565b60608201526119f061187b565b60808201526119fd6117dc565b60a0820152611a0a6117dc565b60c0820152611a176117f5565b60e0820152611a246117dc565b6101008201526101206118e361187b565b51906101e182610195565b801515036101a657565b91908260609103126101a657604051606081016001600160401b03811182821017611aaa575b6040528092805160028110156101a657604091829184526020810151611a9581611a40565b6020850152015191611aa683610195565b0152565b611ab26115de565b611a70565b91908260409103126101a657604051611acf816115f5565b6020808294805184520151910152565b91908260a09103126101a657604051611af781611639565b60808082948051845260208101516020850152604081015160408501526060810151611b2281610195565b6060850152015191611aa683611a40565b610280818303126101a65761026090611b4a61177c565b92611b5482611a35565b8452611b6260208301611a35565b6020850152611b748160408401611a4a565b6040850152611b8560a08301611a35565b6060850152611b978160c08401611ab7565b6080850152611be461010091611baf81848601611ab7565b60a0870152611bc2816101408601611ab7565b60c0870152611bd5816101808601611ab7565b60e08701526101c08401611adf565b90840152015161012082015290565b516001600160a01b031690565b6001600160a01b039091169052565b90610220828203126101a657611ca890610180611c2a61173c565b93611c3481611a35565b8552611c4260208201611a35565b6020860152611c548360408301611a4a565b6040860152611c6560a08201611a35565b6060860152611c778360c08301611ab7565b6080860152611c8a836101008301611ab7565b60a0860152611c9d836101408301611ab7565b60c086015201611adf565b60e082015290565b15611cb757565b60405163100960cb60e01b815260086004820152602490fd5b15611cd757565b60405163100960cb60e01b815260076004820152602490fd5b15611cf757565b60405163100960cb60e01b8152600a6004820152602490fd5b15611d1757565b60405163100960cb60e01b815260096004820152602490fd5b15611d3757565b60405163100960cb60e01b815260116004820152602490fd5b15611d5757565b60405163100960cb60e01b815260126004820152602490fd5b15611d7757565b60405163100960cb60e01b815260146004820152602490fd5b15611d9757565b60405163100960cb60e01b8152600d6004820152602490fd5b15611db757565b60405163100960cb60e01b8152600e6004820152602490fd5b15611dd757565b60405163100960cb60e01b815260106004820152602490fd5b15611df757565b60405163100960cb60e01b8152600c6004820152602490fd5b15611e1757565b60405163100960cb60e01b8152600b6004820152602490fd5b15611e3757565b60405163100960cb60e01b815260196004820152602490fd5b15611e5757565b60405163100960cb60e01b8152601a6004820152602490fd5b15611e7757565b60405163100960cb60e01b8152601c6004820152602490fd5b15611e9757565b60405163100960cb60e01b815260156004820152602490fd5b15611eb757565b60405163100960cb60e01b815260166004820152602490fd5b15611ed757565b60405163100960cb60e01b815260186004820152602490fd5b15611ef757565b60405163100960cb60e01b8152602a6004820152602490fd5b15611f1757565b60405163100960cb60e01b8152602b6004820152602490fd5b15611f3757565b60405163100960cb60e01b8152602c6004820152602490fd5b15611f5757565b60405163100960cb60e01b8152602d6004820152602490fd5b15611f7757565b60405163100960cb60e01b8152602e6004820152602490fd5b15611f9757565b60405163100960cb60e01b8152602f6004820152602490fd5b15611fb757565b60405163100960cb60e01b815260306004820152602490fd5b15611fd757565b60405163100960cb60e01b8152605c6004820152602490fd5b15611ff757565b60405163100960cb60e01b8152605d6004820152602490fd5b1561201757565b60405163100960cb60e01b8152605e6004820152602490fd5b1561203757565b60405163100960cb60e01b8152605f6004820152602490fd5b1561205757565b60405163100960cb60e01b815260606004820152602490fd5b1561207757565b60405163100960cb60e01b815260616004820152602490fd5b1561209757565b60405163100960cb60e01b815260626004820152602490fd5b156120b757565b60405163100960cb60e01b815260556004820152602490fd5b156120d757565b60405163100960cb60e01b815260566004820152602490fd5b156120f757565b60405163100960cb60e01b815260576004820152602490fd5b1561211757565b60405163100960cb60e01b815260586004820152602490fd5b1561213757565b60405163100960cb60e01b815260596004820152602490fd5b1561215757565b60405163100960cb60e01b8152605a6004820152602490fd5b1561217757565b60405163100960cb60e01b8152605b6004820152602490fd5b1561219757565b60405163100960cb60e01b8152604d6004820152602490fd5b156121b757565b60405163100960cb60e01b8152604e6004820152602490fd5b156121d757565b60405163100960cb60e01b815260506004820152602490fd5b156121f757565b60405163100960cb60e01b815260516004820152602490fd5b1561221757565b60405163100960cb60e01b815260526004820152602490fd5b1561223757565b60405163100960cb60e01b815260536004820152602490fd5b1561225757565b60405163100960cb60e01b815260546004820152602490fd5b1561227757565b60405163100960cb60e01b815260456004820152602490fd5b1561229757565b60405163100960cb60e01b815260466004820152602490fd5b156122b757565b60405163100960cb60e01b815260486004820152602490fd5b156122d757565b60405163100960cb60e01b815260496004820152602490fd5b156122f757565b60405163100960cb60e01b8152604a6004820152602490fd5b1561231757565b60405163100960cb60e01b8152604b6004820152602490fd5b1561233757565b60405163100960cb60e01b8152604c6004820152602490fd5b1561235757565b60405163100960cb60e01b8152603f6004820152602490fd5b1561237757565b602460405163100960cb60e01b815260406004820152fd5b1561239657565b60405163100960cb60e01b815260416004820152602490fd5b156123b657565b60405163100960cb60e01b815260426004820152602490fd5b156123d657565b60405163100960cb60e01b815260436004820152602490fd5b156123f657565b60405163100960cb60e01b815260446004820152602490fd5b1561241657565b60405163100960cb60e01b815260386004820152602490fd5b1561243657565b60405163100960cb60e01b815260396004820152602490fd5b1561245657565b60405163100960cb60e01b8152603a6004820152602490fd5b1561247657565b60405163100960cb60e01b8152603b6004820152602490fd5b1561249657565b60405163100960cb60e01b8152603c6004820152602490fd5b156124b657565b60405163100960cb60e01b8152603d6004820152602490fd5b156124d657565b60405163100960cb60e01b8152603e6004820152602490fd5b156124f657565b60405163100960cb60e01b815260316004820152602490fd5b1561251657565b60405163100960cb60e01b815260326004820152602490fd5b1561253657565b60405163100960cb60e01b815260336004820152602490fd5b1561255657565b60405163100960cb60e01b815260346004820152602490fd5b1561257657565b60405163100960cb60e01b815260356004820152602490fd5b1561259657565b60405163100960cb60e01b815260366004820152602490fd5b156125b657565b60405163100960cb60e01b815260376004820152602490fd5b8181106125da575050565b600081556001016125cf565b50634e487b7160e01b600052601160045260246000fd5b6126086002546115a4565b806126105750565b601f811160011461262357506000600255565b600260005261266890601f0160051c600080516020615b09833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6125cf565b6000602081208160025555565b606061276b9160006040612770956126906002845414611ef0565b61271a6126ad61269e611693565b60208082518301019101611c0f565b946126c96126c46126c060045460ff1690565b1590565b611f10565b83513381528151602080830191909152820151151560408201527f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95090606090a1518015908115612786575b50611f30565b6127243415611f50565b8151600081527f12bcad892fc2fb00bdfbaa5636c2fb4aa7fc9aae90bf9ce6f6f44de3009fe0ee90602090a10152016127656127608251610189565b612792565b51610189565b612937565b6000805561277e6000600155565b6101e16125fd565b90506001541438612714565b6000806127ff92604051826020820191630852cd8d60e31b835281196024820152602481526060810181811060018060401b03821117612806575b60405251926001600160a01b03165af16127ef6127e8612813565b8092612878565b5060208082518301019101612860565b156101a657565b61280e6115de565b6127cd565b3d1561285b573d906001600160401b03821161284e575b60405191612842601f8201601f191660200184611670565b82523d6000602084013e565b6128566115de565b61282a565b606090565b908160209103126101a6575161287581611a40565b90565b156128805790565b80511561288f57805190602001fd5b60405163100960cb60e01b815260036004820152602490fd5b156128b05790565b8051156128bf57805190602001fd5b60405163100960cb60e01b8152600480820152602490fd5b156128df5790565b8051156128ee57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561290f5790565b80511561291e57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000806129799260405182602082019163083197ef60e41b83526004815261295e816115f5565b51926001600160a01b03165af1612973612813565b906128a8565b50565b60405190612989826115f5565b816000815260206118e36117f5565b60a09060231901126101a657604051906129b182611639565b816024358152604435602082015260643560408201526084356129d381610195565b6060820152608060a43591611aa683611a40565b604051906129f4826115f5565b816000815260206118e36117dc565b60405190612a1082611654565b8160008152612a1d61297c565b6020820152612a2a6118f5565b6040820152612a376129e7565b6060820152612a446117dc565b6080820152612a516117dc565b60a0820152612a5e6117dc565b60c082015260e06118e36117dc565b60071115612a7757565b6101e16103c7565b60405190612a8c826115f5565b816000815260206118e3612a03565b612aa361179c565b90612aac61297c565b825260008060208401528060408401528060608401528060808401528060a08401528060c0840152612adc6117dc565b60e0840152612ae96118f5565b610100840152612af76117f5565b610120840152612b056118f5565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152806102208401528061024084015280610260840152612b526117dc565b610280840152806102a0840152806102c0840152612b6e6117dc565b6102e0840152612b7c6117dc565b610300840152612b8a6117dc565b610320840152612b986117dc565b610340840152612ba66129e7565b61036084015280610380840152806103a0840152806103c0840152806103e0840152612bd06117dc565b6104008401528061042084015280610440840152612bec6117dc565b610460840152612bfa6117dc565b610480840152612c086117dc565b6104a0840152612c166117dc565b6104c0840152612c246117dc565b6104e08401528061050084015280610520840152806105408401528061056084015280610580840152806105a0840152806105c0840152612c636117dc565b6105e0840152612c716117dc565b610600840152612c7f6117dc565b6106208401528061064084015280610660840152612c9b6117dc565b610680840152612ca96117dc565b6106a0840152612cb76117dc565b6106c0840152612cc56117dc565b6106e0840152612cd36117dc565b610700840152612ce16117dc565b610720840152806107408401528061076084015280610780840152806107a0840152806107c0840152806107e084015280610800840152612d206117dc565b610820840152612d2e6117dc565b610840840152612d3c6117dc565b61086084015280610880840152806108a0840152612d586117dc565b6108c0840152612d666117dc565b6108e0840152612d746117dc565b610900840152612d826117dc565b610920840152612d906117dc565b610940840152612d9e6117dc565b61096084015280610980840152806109a0840152806109c0840152806109e084015280610a0084015280610a2084015280610a40840152612ddd6117dc565b610a60840152612deb6117dc565b610a80840152612df96117dc565b610aa084015280610ac084015280610ae0840152612e156117dc565b610b00840152612e236117dc565b610b20840152612e316117dc565b610b40840152612e3f6117dc565b610b60840152612e4d6117dc565b610b80840152612e5b6117dc565b610ba084015280610bc084015280610be084015280610c0084015280610c2084015280610c4084015280610c6084015280610c80840152612e9a6117dc565b610ca0840152612ea86117dc565b610cc0840152612eb66117dc565b610ce084015280610d00840152610d20830152612ed16117dc565b610d40830152612edf6117dc565b610d60830152612eed6117dc565b610d80830152612efb6117dc565b610da0830152612f096117dc565b610dc0830152565b80516001600160a01b031682526020908101516101e192919091019061038f565b906020806101e1938051845201519101906101ab565b6102a060e060206101e19496956102e085019760018060a01b03168552805182860152015180516007811015612ff9575b6040850152612f9060208201516060860190612f11565b612fa360408201516101208601906101ba565b612fb66060820151610180860190612f32565b612fc960808201516101e08601906101ab565b612fdc60a08201516102208601906101ab565b612fef60c08201516102608601906101ab565b01519101906101ab565b6130016103c7565b612f79565b5160078110156130135790565b6128756103c7565b8115613025570490565b634e487b7160e01b600052601260045260246000fd5b61306d6101e19461306360a09498979560e0850199600180881b0316855260208501906101ab565b60608301906101ab565b01906101ab565b6040519061018082016001600160401b0381118382101761310a575b604052816101606000918281528260208201526130ab61183e565b60408201528260608201526130be6117dc565b60808201528260a08201526130d16117dc565b60c08201526130de6117dc565b60e08201526130eb6117dc565b6101008201526130f96117f5565b610120820152826101408201520152565b6131126115de565b613090565b909594926101e19461314861306d9260c09561010086019a60018060a01b03168652602086015260408501906101ab565b60808301906101ab565b909594926101e19461306d9161317e60c09561010086019a60018060a01b0316865260208601906101ab565b606084015260808301906101ab565b506040513d6000823e3d90fd5b60a0810192916101e1919061038f565b6131b2612a9b565b6131c0600460005414611f70565b60206131cd61128a611693565b926131e56131e06126c060045460ff1690565b611f90565b7ff2816af3c71736203c2303122d0a28d63fb70d5b66eea9b42d9ff743327b5ea960405180613215843383612f48565b0390a161322d815180159081156150ae575b50611fb0565b01926132398451613006565b61324281612a6d565b6136cb5760206101e194510151825261327461326d613268606061010087015101611bf3565b610189565b33146124ef565b60208251015160648151106000146136c35760206064910151105b15801560208401908152906136b7576132c56020845101516132bd60408201519160208101519051906150f4565b146040850152565b82516020015160400151606411606084019081528351602001516040015115156080850190815291613372906040860151156136b057825115155b156136a6576133176133128551151590565b61250f565b613321341561252f565b61333f61333a61333460608a0151610189565b336152d2565b61254f565b61335461334f6133348951610189565b61256f565b61336c61336761333460208a0151610189565b61258f565b51151590565b1561369a5761339e60208551015161339660408201519160208101519051906150f4565b1460a0860152565b60a084015115613692575115155b1561368757516133bd9015156125af565b610120830151478181101561367a5750506000808080805b8060c08801526133e86132688851611bf3565b828215613671575bf115613664575b60606134038451610189565b6134556134108551611bf3565b60e0870180515190936001600160a01b0392613430929190841690615259565b61343d6020880151610189565b6134478751611bf3565b845160200151921690615259565b60208151519160e08601928351525101516020825101525161010084019081515260c08401516020825101527ff2d36f633c409fca63c06cce95aa737e443fccac31226d39defa2a34a59d6c436134b38251604051918291826101d1565b0390a1519101527f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca61354d602083510151516101208401908151526020808551015101516020825101526040602085510151015160408251015261352b613521606060208751015101611bf3565b6060835101611c00565b6135406106af60806020875101510151151590565b516040519182918261319a565b0390a160c061363861355d613074565b9361357161356b8251610189565b86611c00565b61358a6135816020830151610189565b60208701611c00565b604081015160408601526135ad6135a46060830151610189565b60608701611c00565b60808101805160808701526135ca60806020875101510151151590565b1561365d57602060a08301510151155b15613653578184015180516136485760206135fc910151155b151560a0880152565b60a0820151848701528382015160e0870152516101008601526020845101516101208601524361014086015261012083850151910151906150f4565b91015190036101608201526156a7565b506135fc60006135f3565b6135fc60006135f3565b60006135da565b61366c61318d565b6133f7565b506108fc6133f0565b60008080938193036133d5565b506133bd60006125af565b5060006133ac565b600060a085015261339e565b613317600061250f565b6000613300565b600060408401526132c5565b50600061328f565b916136d68451613006565b936136e085612a6d565b6001948503613b08579360406137d39551015193610140938481019586526101009182850193613714608086510151151590565b15613aff5750613724600061240f565b60a0850180516020015115610180840181815291939015613a905761375a6137558a51516020815191015190615187565b6151e2565b6101608201525b6020895101519861377a6101609a8b840151101561242f565b613784341561244f565b6137e660608901936137a161379c6133348751610189565b61246f565b6137c16137bc6137b18c51610189565b85515151903361532d565b61248f565b61336c6137e160208c019e8f51610189565b60208651510151903361532d565b6124af565b15613a18576138016137558251516020815191015190615187565b6101e08301525b8051602001516101e083019081511015613821906124cf565b815151519160c08a0192835151613837916150f4565b92610240850193845281515160200151905160200151613856916150f4565b9261026085019384528051976102808601988951528451895160200152805151845161388191615120565b906102a087019182525160200151845161389a916150f4565b916102c087019283528151986102e08801998a515283518a516020015288516138c290610189565b8651336138ce92615259565b85516040519081527f5ad31ec9bd4e56107bad2f1f69dcbd06894e999cc6f4d278a4de9e9233f78ffd90602090a185519060800152835151519361030088019485515251516020015184516020015251946103208701958651525185516020015251946103400194855152518451602001525190519151925160405193849333936139599486613152565b037feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb91a1613985613074565b98865161399190610189565b61399b908b611c00565b516139a590610189565b6139b29060208b01611c00565b604086015160408a0152516139c690610189565b6139d39060608a01611c00565b6080850151608089015260a08801600090525160c08801525160e087015260e0830151908601525191610120928386015243908501520151908201526101e1906156a7565b613a2b8151515160208751015190615187565b613a68613a3f60c08b01928351519061301b565b9161020085019283526020613a5e818651510151828b51015190615187565b915101519061301b565b90816102208501525190808210600014613a8957505b6101e0830152613808565b9050613a7e565b88613ad7886020613a5e81613abf60c0613ab38c848a5151519151015190615187565b9501948551519061301b565b956101a0880196875251510151828a51015190615187565b90816101c08401525190808210600014613af857505b610160820152613761565b9050613aed565b6137249061240f565b9092936002613b178351613006565b613b2081612a6d565b03613e3d5750516060015190610360810191808352519360c0840194855151613b4891615187565b60a0850190815160200151613b5c9161301b565b936103808401948552805151875160200151613b7791615187565b825160200151613b869161301b565b916103a085019283528151602001515186511015613ba390612350565b8151602001516020015183511015613bba90612370565b613bc4341561238f565b6060870151613bd290610189565b825151613bdf913361532d565b613be8906123af565b8651613bf390610189565b613bfd90336152d2565b613c06906123cf565b6020870151613c1490610189565b613c1e90336152d2565b613c27906123ef565b805151825151613c36916150f4565b906103c086019182525160200151825151613c5091615120565b906103e086019182528051986104008701998a515282518a51602001528051518851613c7b91615120565b90610420880191825251602001518551613c9491615120565b9561044088019687528151986104608901998a515287518a51602001528a51613cbc90610189565b815133613cc892615259565b60208b0151613cd690610189565b875133613ce292615259565b5195610480890196875152518651602001528551604051613d0481928261078c565b037f0b116ce0de1b6bd5b0a433a187e1cf4375f1a19bdd8068984a20e6ef3081993491a185519060a0015251946104a08701958651525185516020015251946104c001948551525184516020015251519051915192516040519384933393613d6c9486613117565b037f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef85591a1613d98613074565b928251613da490610189565b613dae9085611c00565b6020830151613dbc90610189565b613dc99060208601611c00565b604083015160408501526060830151613de190610189565b613dee9060608601611c00565b6080830151608085015260a08401600090525160c08401525160e083015260e081015161010090818401528101519061012091828401524361014084015201516101608201526101e1906156a7565b909392916003613e4d8651613006565b613e5681612a6d565b036142e8576106a09060806101e1965101516104e0820152610100840192613e82608085510151151590565b156142df5750613e926000612270565b600080516020615b2983398151915260c085016140a4613ec160208351015160206104e0870151015190615120565b610500850190815261409d61407784515192610520880193845285888b61401d613fd8613fd0613f1d6108bc613f13613f0b60206104e08a01510151610bfd60408a5101516150ba565b8d5190615187565b6108b68a5161512d565b93613f386105408701958087526104e0880151511015612290565b613f4a6104e087015151865190615120565b610560870152613fbd613fb6613f9c613f8c613f84613f6d8c51518b51906150f4565b9b6105808c019c8d5260208b519151015190615187565b8b519061301b565b60206104e08b0151015190615120565b610bfd613faa85515161515a565b604086510151906151d2565b6064900490565b946105a087019586525190515190615187565b612710900490565b936140156106006105c08601958787526105e081019788515260006020895101520194600086515284516020875101525160208d51015190615187565b90519061301b565b905110156142d75750515b6106208901526140606140536140478851516104e08c015151906150f4565b6105608b015190615120565b6106208a01515190615120565b610640890152516020610620890151015190615120565b9360206140916106608901968088526106408a0151615187565b93519151015190615187565b11156122b0565b6140ae34156122d0565b6140c66140c16133346060890151610189565b6122f0565b6140e96140e46140d68851610189565b6104e086015151903361532d565b612310565b6141016140fc6133346020890151610189565b612330565b61064083015196610680840197885152815160208951015261412f60e08801515161062086015151906150f4565b8585015152614150602060e0890151015160206106208701510151906150f4565b60208686015101526141736141658851610189565b610560860151903390615259565b6141956141836020890151610189565b60206104e08701510151903390615259565b610560840151906106c085019182515260206104e086015101516020835101527fb4da19360c3179190333371be99a68454b66a4e79a92b43642e9d170605df2ff6141e783516040519182918261078c565b0390a160c082519101526142356104e0850151516106e0860190815152600060208251015261064086015193610700870194855152516020855101525191519251604051938493338561303b565b0390a1614240613074565b9461425461424e8651610189565b87611c00565b61426d6142646020870151610189565b60208801611c00565b604085015160408701526142906142876060870151610189565b60608801611c00565b60808501516080870152600060a087015260a085015160c08701525160e08601520151610100840152519061012091828401524361014084015201516101608201526156a7565b905051614028565b613e9290612270565b929360046142f68251613006565b6142ff81612a6d565b036147bd575160a0015161072084015261010082015160800151156147b457506143296000612190565b60c08101928351516107208401516020015161434491615120565b9061074084019182528451602001519461076085019586526107208501516020015161010085015160400151614379906150ba565b61438291615187565b865161438d91615187565b83516143989061512d565b6143a1916151d2565b6143aa906150df565b906107808601918083526107208701515110156143c6906121b0565b6107208601515182516143d891615120565b6107a087015280516020015182516143ef916150f4565b6107c08701908152825182515161440591615187565b81516144109161301b565b6107208801516020015161442391615120565b610100870151516144339061515a565b61010088015160400151614446916151d2565b61444f91615187565b60649004926107e08801938452516101008701515161446d91615187565b6127109004926108008801918483526108208901948551528451602001600090526108408901928351600090528251845160200152518451516144af91615187565b90516144ba9161301b565b905110600014976144fb600080516020615b2983398151915296602061455d96614556956101e19d6147ab575051915b826108608d01525191015190615120565b61088089015261454b61453961452c6145206020875101516107208d015151906150f4565b6107a08c015190615120565b6108608b01515190615120565b806108a08b01526108808a0151615187565b925151905190615187565b11156121d0565b61456734156121f0565b61457f61457a6133346060860151610189565b612210565b61459461458f6133348551610189565b612230565b6145ba6145b56145a76020860151610189565b61072087015151903361532d565b612250565b6108808401516108c0850151526108a084015160206108c086015101526145f060e08401515160206108608701510151906150f4565b6108e085015152614610602060e0850151015161086086015151906150f4565b60206108e086015101526146396146278451610189565b60206107208701510151903390615259565b6146576146496020850151610189565b6107a0860151903390615259565b60206107208501510151906109008501918251526107a08501516020835101527f42c53e1312a754632149cf298b980252b5fd7bfd78d3563cb2a21005f6b01eeb6146a983516040519182918261078c565b0390a160e082519101526109208401906000825152610720850151516020835101526146fc610880860151926109408701938451526108a08701516020855101525191519251604051938493338561303b565b0390a16108e061470a613074565b9261471e6147188451610189565b85611c00565b61473761472e6020850151610189565b60208601611c00565b6040830151604085015261475a6147516060850151610189565b60608601611c00565b60808301516080850152600060a085015260a083015160c08501526108c081015160e085015201516101008301526101008101519061012091828401524361014084015201516101608201526156a7565b905051916144ea565b61432990612190565b60056147c98251613006565b6147d281612a6d565b03614c355793600080516020615b298339815191529160c06101e19651015161096086015261480960806101008601510151151590565b15614c2c575061481960006120b0565b602060c0840151015161098085015260c0830151516109a085015261488561485361096086015151610bfd60406101008801510151615108565b6108b661486e6109c088019280845261098089015190615187565b9161487d6109a089015161512d565b9051906150f4565b6109e08501526148a160c08401515161096086015151906150f4565b610a0085015261498f614909613fb66148e76148db6148cf6109608a015151602060c08b0151015190615187565b610a008a01519061301b565b6109e089015190615120565b610bfd6148f96101008901515161515a565b60406101008a01510151906151d2565b610a20860190815261492b613fd0610960880151516101008801515190615187565b90610a40870190828252610a60880192835152600060208451015261496f6148cf610a808a01936000855152835160208651015251602060c08b0151015190615187565b90511015614c245750515b80610aa0870152610a00860151905190615120565b610ac08501526149c06149b0602060c086015101516109e087015190615120565b6020610aa0870151015190615120565b610ae08501526149e0602061096086015101516109e086015110156120d0565b614a146149f8610ac0860151610ae087015190615187565b614a0d6109a087015161098088015190615187565b11156120f0565b614a1e3415612110565b614a36614a316133346060860151610189565b612130565b614a59614a54614a468551610189565b61096087015151903361532d565b612150565b614a71614a6c6133346020860151610189565b612170565b610ac0840151610b0085015152610ae08401516020610b008601510152614aa460e084015151610aa086015151906150f4565b610b2085015152614ac7602060e085015101516020610aa08701510151906150f4565b6020610b208601510152614aef614ae16020850151610189565b6109e0860151903390615259565b610b4084019060008251526109e08501516020835101527f07643d6caf979de1633eca2f9c08778499092a9eadcb74275de654d2f438396e614b3883516040519182918261078c565b0390a161010082519101526109608401515190610b608501918251526000602083510152614b8d610ac086015192610b80870193845152610ae08701516020855101525191519251604051938493338561303b565b0390a1610b20614b9b613074565b92614ba96147188451610189565b614bb961472e6020850151610189565b60408301516040850152614bd36147516060850151610189565b60808301516080850152600060a085015260a083015160c0850152610b0081015160e085015201516101008301526101008101519061012091828401524361014084015201516101608201526156a7565b90505161497a565b614819906120b0565b6006614c448295949551613006565b614c4d81612a6d565b14614c5a575b5050505050565b5160e00151610ba083015261010083015160800151156150a55750614c7f6000611fd0565b60c0820192835151610bc0830190815260208551015190610be08401918252614cdf614cbd610ba086015151610bfd60406101008a01510151615108565b6108b6614cd4610c00880192808452855190615187565b9161487d865161512d565b91610c208501928352614cfe602088510151610ba087015151906150f4565b610c408601908152614d57613fb6614d35614d2d614d25610ba08b0151518d515190615187565b85519061301b565b875190615120565b610bfd614d476101008c01515161515a565b60406101008d01510151906151d2565b610c608701908152614d79613fd0610ba0890151516101008b01515190615187565b90610c80880190828252610ca08901928351526000602084510152614db7614d25610cc08b019360008551528351602086510152518d515190615187565b9051101561509c575051975b610ce0870198895251518451614dd891615120565b885160200151614de791615120565b610d0087015251875151614dfa91615120565b610d20860152610ba08501516020015183511015614e1790611ff0565b610d00850151610d20860151614e2c91615187565b91519051614e3991615187565b1115614e4490612010565b614e4e3415612030565b6060840151614e5c90610189565b614e6690336152d2565b614e6f90612050565b8351614e7a90610189565b614e8490336152d2565b614e8d90612070565b60208401948551614e9d90610189565b610ba085015151614eae913361532d565b614eb790612090565b610d00840151610d4085015152610d20840151610d408501516020015260e08501805151825160200151614eea916150f4565b610d60860151525160200151905151614f02916150f4565b610d60840151602001528351614f1790610189565b815133614f2392615259565b51610d8083015152610d8082015160200160009052610d80820151604051614f4c81928261078c565b037f9e935a5528a92b1ad61718d5fa195f198e8dfa1c97c2807f735fd038de1d08ea91a1610d80820151906101200152610da08101805160009052610ba082015151815160200152610d0082015190610dc0830191825152610d208301518251602001525190610d808301519051916040519283923392614fcd938561303b565b03600080516020615b2983398151915291a1614fe7613074565b928251614ff390610189565b614ffd9085611c00565b5161500790610189565b6150149060208501611c00565b60408201516040840152606082015161502c90610189565b6150399060608501611c00565b6080820151608084015260a083016000905260a082015160c0840152610d4081015160e0840152610d600151610100830152610100810151610120830152436101408301526101200151610160820152615092906156a7565b3880808080614c53565b90505197614dc3565b614c7f90611fd0565b90506001541438613227565b90612710918201918281116150d2575b82106101a657565b6150da6125e6565b6150ca565b9060018201918281116150d25782106101a657565b91908201918281116150d25782106101a657565b6127109081039081116151185790565b6128756125e6565b9081039081116151185790565b90612710918281029281840481148215171561514d575b8304036101a657565b6151556125e6565b615144565b9060648202918083046064148115171561517a575b60648304036101a657565b6151826125e6565b61516f565b60009291801591821561519e575b5050156101a657565b915092506151bd838202938285048114831517156151c5575b8461301b565b143880615195565b6151cd6125e6565b6151b7565b9080156101a6576128759161301b565b906000600383111561524c575081600181811c81810180911161523f575b91905b84831061520f57505050565b919350908361521e818461301b565b908101809111615232575b811c9190615203565b61523a6125e6565b615229565b6152476125e6565b615200565b9161525357565b60019150565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526127ff93600093849392849190608081016001600160401b038111828210176152c5575b6040525193165af16127ef6152be612813565b80926128d7565b6152cd6115de565b6152ab565b6000612875928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261531681611639565b5193165af16127ef615326612813565b8092612907565b6000916128759383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261531681611639565b6040519061537d8261161d565b60006101208382815282602082015261539461183e565b60408201528260608201526153a76117dc565b60808201526153b46117dc565b60a08201526153c16117dc565b60c08201526153ce6117dc565b60e08201526153db6117f5565b6101008201520152565b81516001600160a01b031681526102808101929161026090610120906020818101516001600160a01b031690850152615426604082015160408601906103de565b60608101516001600160a01b031660a085015261544b608082015160c08601906101ab565b6101ca60a082015161546361010091828801906101ab565b61547660c08401516101408801906101ab565b61548960e08401516101808801906101ab565b8201516101c086019061038f565b90601f82116154a4575050565b6101e19160026000526020600020906020601f840160051c830193106154d2575b601f0160051c01906125cf565b90915081906154c5565b80519091906001600160401b0381116155b2575b615504816154ff6002546115a4565b615497565b602080601f83116001146155405750819293600092615535575b50508160011b916000199060031b1c191617600255565b01519050388061551e565b6002600052601f19831694909190600080516020615b09833981519152926000905b87821061559a575050836001959610615581575b505050811b01600255565b015160001960f88460031b161c19169055388080615576565b80600185968294968601518155019501930190615562565b6155ba6115de565b6154f0565b604051906155cc82611654565b8160008152600060208201526155e061183e565b6040820152600060608201526155f46117dc565b60808201526156016117dc565b60a082015261560e6117dc565b60c082015260e06118e36117f5565b6101e19092919261018060e061022083019560018060a01b0380825116855280602083015116602086015261565a604083015160408701906103de565b60608201511660a0850152615677608082015160c08601906101ab565b61568a60a08201516101008601906101ab565b61569d60c08201516101408601906101ab565b015191019061038f565b60a0810151156157715761575e61576c6101e1926101206156c66155bf565b916156da6156d48251610189565b84611c00565b6156f36156ea6020830151610189565b60208501611c00565b6040810151604084015261571661570d6060830151610189565b60608501611c00565b60c0810151608084015260e081015160a084015261010081015160c0840152015160e08201526157466002600055565b61574f43600155565b6040519283916020830161561d565b03601f198101835282611670565b6154dc565b61575e61576c6101e192615783615370565b906157976157918251610189565b83611c00565b6157b06157a76020830151610189565b60208401611c00565b604081015160408301526157d36157ca6060830151610189565b60608401611c00565b6080810151608083015260c081015160a083015260e081015160c0830152610160610100918281015160e085015261012092838201519085015201519082015261581d6004600055565b61582643600155565b604051928391602083016153e5565b6040906101c31901126101a6576040519061584f826115f5565b6101c43582526101e4356020830152565b6040906102031901126101a6576040519061587a826115f5565b610204358252610224356020830152565b6040906102431901126101a657604051906158a5826115f5565b610244358252610264356020830152565b6040906102831901126101a657604051906158d0826115f5565b6102843582526102a4356020830152565b91908260409103126101a6576040516158f9816115f5565b6020808294803584520135910152565b60405190615916826115f5565b8161591f6117dc565b815260206118e3612a03565b6024359060078210156101a657565b9060c06043198301126101a657604051615953816115f5565b60a0819360443561596381610195565b835260631901126101a65760206040519161597d83611639565b60643583526084358284015260a435604084015260c43561599d81610195565b606084015260e4356159ae81611a40565b60808401520152565b610103190190606082126101a6576040516159d1816115f5565b60408193126101a6576040516159e6816115f5565b6101043581526101243560208201528152602061014435910152565b906060610163198301126101a657604051615a1c816115f5565b604081936101643583526101831901126101a657602060405191615a3f836115f5565b6101843583526101a435828401520152565b615a596117bc565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c0840152615a8b6117dc565b60e0840152615a986117dc565b610100840152615aa66117dc565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152615ae46117dc565b610220830152615af26117dc565b610240830152615b006117dc565b61026083015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a164736f6c6343000811000a608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000811000a`,
  BytecodeLen: 33995,
  version: 9,
  views: {
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
