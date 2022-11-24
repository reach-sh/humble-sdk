// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    calcAmtIn_: ((_v32945, _v32946, _v32947, _v32948 ) => {
        const v32945 = stdlib.protect(ctc0, _v32945, null);
        const v32946 = stdlib.protect(ctc0, _v32946, null);
        const v32947 = stdlib.protect(ctc0, _v32947, null);
        const v32948 = stdlib.protect(ctc0, _v32948, null);
      
      const v32950 = stdlib.safeSub(v32946, v32945);
      const v32951 = stdlib.cast("UInt", "UInt256", v32950, false, true);
      const v32952 = stdlib.cast("UInt", "UInt256", v32947, false, true);
      const v32953 = stdlib.cast("UInt", "UInt256", v32945, false, true);
      const v32954 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v32948);
      const v32955 = stdlib.cast("UInt", "UInt256", v32954, false, true);
      const v32956 = stdlib.safeMul256(v32953, v32955);
      const v32957 = stdlib.safeMul256(v32951, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v32958 = stdlib.safeMul256(v32956, v32952);
      const v32959 = stdlib.safeDiv256(v32958, v32957);
      const v32960 = stdlib.cast("UInt256", "UInt", v32959, false, true);
      const v32961 = stdlib.safeAdd(v32960, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v32961;}),
    computeMint_: ((_v32962, _v32963, _v32964 ) => {
        const v32962 = stdlib.protect(ctc1, _v32962, null);
        const v32963 = stdlib.protect(ctc1, _v32963, null);
        const v32964 = stdlib.protect(ctc1, _v32964, null);
      
      const v32965 = v32962.A;
      const v32966 = v32962.B;
      const v32967 = v32963.A;
      const v32968 = v32963.B;
      const v32970 = v32964.B;
      let v32971;
      const v32978 = stdlib.eq(v32970, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v32978) {
        const v32979 = stdlib.cast("UInt", "UInt256", v32965, false, true);
        const v32980 = stdlib.cast("UInt", "UInt256", v32966, false, true);
        const v32981 = stdlib.safeMul256(v32979, v32980);
        const v32982 = stdlib.sqrt256(v32981);
        const v32983 = stdlib.cast("UInt256", "UInt", v32982, false, true);
        v32971 = v32983;
        }
      else {
        const v32992 = stdlib.safeMuldiv(v32965, v32970, v32967);
        const v32999 = stdlib.safeMuldiv(v32966, v32970, v32968);
        const v33001 = stdlib.lt(v32992, v32999);
        const v33002 = v33001 ? v32992 : v32999;
        v32971 = v33002;
        }
      
      return v32971;}),
    computeSwap_: ((_v33003, _v33004, _v33005, _v33006 ) => {
        const v33003 = stdlib.protect(ctc2, _v33003, null);
        const v33004 = stdlib.protect(ctc1, _v33004, null);
        const v33005 = stdlib.protect(ctc1, _v33005, null);
        const v33006 = stdlib.protect(ctc4, _v33006, null);
      
      const v33007 = v33004.A;
      const v33008 = v33004.B;
      const v33009 = v33005.A;
      const v33010 = v33005.B;
      const v33012 = v33006.protoFee;
      const v33013 = v33006.lpFee;
      const v33014 = v33006.totFee;
      const v33015 = stdlib.lt(v33012, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v33016 = stdlib.lt(v33013, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v33017 = v33015 ? v33016 : false;
      let v33020;
      if (v33017) {
        const v33018 = stdlib.safeAdd(v33013, v33012);
        const v33019 = stdlib.eq(v33014, v33018);
        v33020 = v33019;
        }
      else {
        v33020 = false;
        }
      const v33021 = stdlib.lt(v33014, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v33022 = v33020 ? v33021 : false;
      const v33023 = stdlib.gt(v33014, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v33024 = v33022 ? v33023 : false;
      stdlib.assert(v33024, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v33026 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v33026, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v33042;
      if (v33003) {
        const v33047 = stdlib.eq(v33008, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v33047, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v33070 = stdlib.cast("UInt", "UInt256", v33010, false, true);
        const v33071 = stdlib.cast("UInt", "UInt256", v33009, false, true);
        const v33072 = stdlib.cast("UInt", "UInt256", v33007, false, true);
        const v33073 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v33014);
        const v33074 = stdlib.cast("UInt", "UInt256", v33073, false, true);
        const v33075 = stdlib.safeMul256(v33072, v33074);
        const v33076 = stdlib.safeMul256(v33071, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v33077 = stdlib.safeAdd256(v33076, v33075);
        const v33078 = stdlib.safeMul256(v33075, v33070);
        const v33079 = stdlib.safeDiv256(v33078, v33077);
        const v33080 = stdlib.cast("UInt256", "UInt", v33079, false, true);
        const v33087 = stdlib.safeMul(v33012, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v33088 = stdlib.safeDiv(v33087, v33014);
        const v33095 = stdlib.safeAdd(v33009, v33007);
        const v33103 = stdlib.safeMuldiv(v33007, v33010, v33095);
        const v33108 = stdlib.safeSub(v33103, v33080);
        const v33114 = stdlib.safeMuldiv(v33108, v33088, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v33119 = stdlib.safeMuldiv(v33007, v33012, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v33127 = stdlib.safeMuldiv(v33119, v33010, v33095);
        const v33128 = stdlib.gt(v33127, v33114);
        const v33129 = [v33119, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v33130 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v33114];
        const v33131 = v33128 ? v33129 : v33130;
        const v33133 = v33131[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v33134 = v33131[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v33135 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v33080
          };
        const v33136 = {
          A: v33133,
          B: v33134
          };
        const v33137 = [v33135, v33136, v33007];
        v33042 = v33137;
        }
      else {
        const v33138 = stdlib.eq(v33007, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v33138, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v33161 = stdlib.cast("UInt", "UInt256", v33009, false, true);
        const v33162 = stdlib.cast("UInt", "UInt256", v33010, false, true);
        const v33163 = stdlib.cast("UInt", "UInt256", v33008, false, true);
        const v33164 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v33014);
        const v33165 = stdlib.cast("UInt", "UInt256", v33164, false, true);
        const v33166 = stdlib.safeMul256(v33163, v33165);
        const v33167 = stdlib.safeMul256(v33162, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v33168 = stdlib.safeAdd256(v33167, v33166);
        const v33169 = stdlib.safeMul256(v33166, v33161);
        const v33170 = stdlib.safeDiv256(v33169, v33168);
        const v33171 = stdlib.cast("UInt256", "UInt", v33170, false, true);
        const v33178 = stdlib.safeMul(v33012, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v33179 = stdlib.safeDiv(v33178, v33014);
        const v33186 = stdlib.safeAdd(v33010, v33008);
        const v33194 = stdlib.safeMuldiv(v33008, v33009, v33186);
        const v33199 = stdlib.safeSub(v33194, v33171);
        const v33205 = stdlib.safeMuldiv(v33199, v33179, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v33210 = stdlib.safeMuldiv(v33008, v33012, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v33218 = stdlib.safeMuldiv(v33210, v33009, v33186);
        const v33219 = stdlib.gt(v33218, v33205);
        const v33220 = [v33210, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v33221 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v33205];
        const v33222 = v33219 ? v33220 : v33221;
        const v33224 = v33222[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v33225 = v33222[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v33226 = {
          A: v33171,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v33227 = {
          A: v33225,
          B: v33224
          };
        const v33228 = [v33226, v33227, v33008];
        v33042 = v33228;
        }
      const v33229 = v33042[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v33230 = v33042[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v33232 = v33229.A;
      const v33233 = v33229.B;
      const v33234 = v33230.A;
      const v33235 = v33230.B;
      const v33236 = {
        A: v33232,
        B: v33233
        };
      const v33237 = {
        A: v33234,
        B: v33235
        };
      const v33238 = [v33236, v33237];
      
      return v33238;})
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
      const [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055] = svs;
      return (await ((async () => {
        
        const v58855 = v44052.A;
        const v58856 = v44052.B;
        const v58857 = v44053.A;
        const v58858 = v44053.B;
        const v58859 = v44055.protoFee;
        const v58860 = v44055.lpFee;
        const v58861 = v44055.totFee;
        const v58862 = v44055.protoAddr;
        const v58863 = v44055.locked;
        const v58864 = v44054.A;
        const v58865 = v44054.B;
        const v58866 = {
          A: v58855,
          B: v58856
          };
        const v58867 = {
          A: v58857,
          B: v58858
          };
        const v58868 = {
          locked: v58863,
          lpFee: v58860,
          protoAddr: v58862,
          protoFee: v58859,
          totFee: v58861
          };
        const v58869 = {
          A: v58864,
          B: v58865
          };
        const v58871 = {
          liquidityToken: v44022,
          lptBals: v58866,
          poolBals: v58867,
          protoBals: v58869,
          protoInfo: v58868,
          tokA: v43994,
          tokB: v43968
          };
        
        return v58871;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = svs;
      return (await ((async () => {
        
        const v44128 = v44052.A;
        const v44129 = v44052.B;
        const v44130 = v44053.A;
        const v44131 = v44053.B;
        const v44132 = v44055.protoFee;
        const v44133 = v44055.lpFee;
        const v44134 = v44055.totFee;
        const v44135 = v44055.protoAddr;
        const v44136 = v44055.locked;
        const v44137 = v44054.A;
        const v44138 = v44054.B;
        const v44139 = {
          A: v44128,
          B: v44129
          };
        const v44140 = {
          A: v44130,
          B: v44131
          };
        const v44141 = {
          locked: v44136,
          lpFee: v44133,
          protoAddr: v44135,
          protoFee: v44132,
          totFee: v44134
          };
        const v44142 = {
          A: v44137,
          B: v44138
          };
        const v44144 = {
          liquidityToken: v44022,
          lptBals: v44139,
          poolBals: v44140,
          protoBals: v44142,
          protoInfo: v44141,
          tokA: v43994,
          tokB: v43968
          };
        
        return v44144;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055] = svs;
      return (await ((async (_v59095 ) => {
          const v59095 = stdlib.protect(ctc3, _v59095, null);
        
        const v59096 = v44053.A;
        const v59097 = v44053.B;
        const v59100 = v44055.totFee;
        const v59101 = stdlib.safeSub(v59097, v59095);
        const v59102 = stdlib.cast("UInt", "UInt256", v59101, false, true);
        const v59103 = stdlib.cast("UInt", "UInt256", v59096, false, true);
        const v59104 = stdlib.cast("UInt", "UInt256", v59095, false, true);
        const v59105 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v59100);
        const v59106 = stdlib.cast("UInt", "UInt256", v59105, false, true);
        const v59107 = stdlib.safeMul256(v59104, v59106);
        const v59108 = stdlib.safeMul256(v59102, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v59109 = stdlib.safeMul256(v59107, v59103);
        const v59110 = stdlib.safeDiv256(v59109, v59108);
        const v59111 = stdlib.cast("UInt256", "UInt", v59110, false, true);
        const v59112 = stdlib.safeAdd(v59111, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v59112;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = svs;
      return (await ((async (_v44368 ) => {
          const v44368 = stdlib.protect(ctc3, _v44368, null);
        
        const v44369 = v44053.A;
        const v44370 = v44053.B;
        const v44373 = v44055.totFee;
        const v44374 = stdlib.safeSub(v44370, v44368);
        const v44375 = stdlib.cast("UInt", "UInt256", v44374, false, true);
        const v44376 = stdlib.cast("UInt", "UInt256", v44369, false, true);
        const v44377 = stdlib.cast("UInt", "UInt256", v44368, false, true);
        const v44378 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44373);
        const v44379 = stdlib.cast("UInt", "UInt256", v44378, false, true);
        const v44380 = stdlib.safeMul256(v44377, v44379);
        const v44381 = stdlib.safeMul256(v44375, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44382 = stdlib.safeMul256(v44380, v44376);
        const v44383 = stdlib.safeDiv256(v44382, v44381);
        const v44384 = stdlib.cast("UInt256", "UInt", v44383, false, true);
        const v44385 = stdlib.safeAdd(v44384, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v44385;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055] = svs;
      return (await ((async (_v59150 ) => {
          const v59150 = stdlib.protect(ctc3, _v59150, null);
        
        const v59151 = v44053.A;
        const v59152 = v44053.B;
        const v59155 = v44055.totFee;
        const v59156 = stdlib.safeSub(v59151, v59150);
        const v59157 = stdlib.cast("UInt", "UInt256", v59156, false, true);
        const v59158 = stdlib.cast("UInt", "UInt256", v59152, false, true);
        const v59159 = stdlib.cast("UInt", "UInt256", v59150, false, true);
        const v59160 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v59155);
        const v59161 = stdlib.cast("UInt", "UInt256", v59160, false, true);
        const v59162 = stdlib.safeMul256(v59159, v59161);
        const v59163 = stdlib.safeMul256(v59157, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v59164 = stdlib.safeMul256(v59162, v59158);
        const v59165 = stdlib.safeDiv256(v59164, v59163);
        const v59166 = stdlib.cast("UInt256", "UInt", v59165, false, true);
        const v59167 = stdlib.safeAdd(v59166, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v59167;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = svs;
      return (await ((async (_v44423 ) => {
          const v44423 = stdlib.protect(ctc3, _v44423, null);
        
        const v44424 = v44053.A;
        const v44425 = v44053.B;
        const v44428 = v44055.totFee;
        const v44429 = stdlib.safeSub(v44424, v44423);
        const v44430 = stdlib.cast("UInt", "UInt256", v44429, false, true);
        const v44431 = stdlib.cast("UInt", "UInt256", v44425, false, true);
        const v44432 = stdlib.cast("UInt", "UInt256", v44423, false, true);
        const v44433 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44428);
        const v44434 = stdlib.cast("UInt", "UInt256", v44433, false, true);
        const v44435 = stdlib.safeMul256(v44432, v44434);
        const v44436 = stdlib.safeMul256(v44430, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44437 = stdlib.safeMul256(v44435, v44431);
        const v44438 = stdlib.safeDiv256(v44437, v44436);
        const v44439 = stdlib.cast("UInt256", "UInt", v44438, false, true);
        const v44440 = stdlib.safeAdd(v44439, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v44440;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055] = svs;
      return (await ((async (_v58878 ) => {
          const v58878 = stdlib.protect(ctc3, _v58878, null);
        
        const v58880 = v44055.locked;
        const v58881 = v58880 ? false : true;
        stdlib.assert(v58881, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v58883 = v44053.A;
        const v58884 = v44053.B;
        const v58886 = v44055.protoFee;
        const v58887 = v44055.totFee;
        const v58888 = stdlib.cast("UInt", "UInt256", v58884, false, true);
        const v58889 = stdlib.cast("UInt", "UInt256", v58883, false, true);
        const v58890 = stdlib.cast("UInt", "UInt256", v58878, false, true);
        const v58891 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58887);
        const v58892 = stdlib.cast("UInt", "UInt256", v58891, false, true);
        const v58893 = stdlib.safeMul256(v58890, v58892);
        const v58894 = stdlib.safeMul256(v58889, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v58895 = stdlib.safeAdd256(v58894, v58893);
        const v58896 = stdlib.safeMul256(v58893, v58888);
        const v58897 = stdlib.safeDiv256(v58896, v58895);
        const v58898 = stdlib.cast("UInt256", "UInt", v58897, false, true);
        const v58904 = stdlib.safeMul(v58886, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v58905 = stdlib.safeDiv(v58904, v58887);
        const v58910 = stdlib.safeAdd(v58883, v58878);
        const v58914 = stdlib.safeMuldiv(v58878, v58884, v58910);
        const v58917 = stdlib.safeSub(v58914, v58898);
        const v58919 = stdlib.safeMuldiv(v58917, v58905, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v58921 = stdlib.safeMuldiv(v58878, v58886, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v58925 = stdlib.safeMuldiv(v58921, v58884, v58910);
        const v58926 = stdlib.gt(v58925, v58919);
        const v58927 = [v58921, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v58928 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v58919];
        const v58929 = v58926 ? v58927 : v58928;
        const v58931 = v58929[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v58932 = v58929[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v58950 = stdlib.safeSub(v58884, v58898);
        const v58954 = stdlib.safeSub(v58910, v58931);
        const v58957 = stdlib.safeSub(v58950, v58932);
        const v58970 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v58898);
        stdlib.assert(v58970, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v58976 = stdlib.safeMul256(v58889, v58888);
        const v58977 = stdlib.cast("UInt", "UInt256", v58954, false, true);
        const v58978 = stdlib.cast("UInt", "UInt256", v58957, false, true);
        const v58979 = stdlib.safeMul256(v58977, v58978);
        const v58980 = stdlib.ge256(v58979, v58976);
        stdlib.assert(v58980, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v58898;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = svs;
      return (await ((async (_v44151 ) => {
          const v44151 = stdlib.protect(ctc3, _v44151, null);
        
        const v44153 = v44055.locked;
        const v44154 = v44153 ? false : true;
        stdlib.assert(v44154, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v44156 = v44053.A;
        const v44157 = v44053.B;
        const v44159 = v44055.protoFee;
        const v44160 = v44055.totFee;
        const v44161 = stdlib.cast("UInt", "UInt256", v44157, false, true);
        const v44162 = stdlib.cast("UInt", "UInt256", v44156, false, true);
        const v44163 = stdlib.cast("UInt", "UInt256", v44151, false, true);
        const v44164 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44160);
        const v44165 = stdlib.cast("UInt", "UInt256", v44164, false, true);
        const v44166 = stdlib.safeMul256(v44163, v44165);
        const v44167 = stdlib.safeMul256(v44162, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44168 = stdlib.safeAdd256(v44167, v44166);
        const v44169 = stdlib.safeMul256(v44166, v44161);
        const v44170 = stdlib.safeDiv256(v44169, v44168);
        const v44171 = stdlib.cast("UInt256", "UInt", v44170, false, true);
        const v44177 = stdlib.safeMul(v44159, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v44178 = stdlib.safeDiv(v44177, v44160);
        const v44183 = stdlib.safeAdd(v44156, v44151);
        const v44187 = stdlib.safeMuldiv(v44151, v44157, v44183);
        const v44190 = stdlib.safeSub(v44187, v44171);
        const v44192 = stdlib.safeMuldiv(v44190, v44178, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v44194 = stdlib.safeMuldiv(v44151, v44159, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v44198 = stdlib.safeMuldiv(v44194, v44157, v44183);
        const v44199 = stdlib.gt(v44198, v44192);
        const v44200 = [v44194, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v44201 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44192];
        const v44202 = v44199 ? v44200 : v44201;
        const v44204 = v44202[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v44205 = v44202[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v44223 = stdlib.safeSub(v44157, v44171);
        const v44227 = stdlib.safeSub(v44183, v44204);
        const v44230 = stdlib.safeSub(v44223, v44205);
        const v44243 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44171);
        stdlib.assert(v44243, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v44249 = stdlib.safeMul256(v44162, v44161);
        const v44250 = stdlib.cast("UInt", "UInt256", v44227, false, true);
        const v44251 = stdlib.cast("UInt", "UInt256", v44230, false, true);
        const v44252 = stdlib.safeMul256(v44250, v44251);
        const v44253 = stdlib.ge256(v44252, v44249);
        stdlib.assert(v44253, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v44171;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055] = svs;
      return (await ((async (_v58986 ) => {
          const v58986 = stdlib.protect(ctc3, _v58986, null);
        
        const v58988 = v44055.locked;
        const v58989 = v58988 ? false : true;
        stdlib.assert(v58989, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v58991 = v44053.A;
        const v58992 = v44053.B;
        const v58994 = v44055.protoFee;
        const v58995 = v44055.totFee;
        const v58996 = stdlib.cast("UInt", "UInt256", v58991, false, true);
        const v58997 = stdlib.cast("UInt", "UInt256", v58992, false, true);
        const v58998 = stdlib.cast("UInt", "UInt256", v58986, false, true);
        const v58999 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v58995);
        const v59000 = stdlib.cast("UInt", "UInt256", v58999, false, true);
        const v59001 = stdlib.safeMul256(v58998, v59000);
        const v59002 = stdlib.safeMul256(v58997, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v59003 = stdlib.safeAdd256(v59002, v59001);
        const v59004 = stdlib.safeMul256(v59001, v58996);
        const v59005 = stdlib.safeDiv256(v59004, v59003);
        const v59006 = stdlib.cast("UInt256", "UInt", v59005, false, true);
        const v59012 = stdlib.safeMul(v58994, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v59013 = stdlib.safeDiv(v59012, v58995);
        const v59018 = stdlib.safeAdd(v58992, v58986);
        const v59022 = stdlib.safeMuldiv(v58986, v58991, v59018);
        const v59025 = stdlib.safeSub(v59022, v59006);
        const v59027 = stdlib.safeMuldiv(v59025, v59013, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v59029 = stdlib.safeMuldiv(v58986, v58994, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v59033 = stdlib.safeMuldiv(v59029, v58991, v59018);
        const v59034 = stdlib.gt(v59033, v59027);
        const v59035 = [v59029, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v59036 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v59027];
        const v59037 = v59034 ? v59035 : v59036;
        const v59039 = v59037[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v59040 = v59037[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v59056 = stdlib.safeSub(v58991, v59006);
        const v59062 = stdlib.safeSub(v59056, v59040);
        const v59065 = stdlib.safeSub(v59018, v59039);
        const v59078 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v59006);
        stdlib.assert(v59078, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v59085 = stdlib.safeMul256(v58996, v58997);
        const v59086 = stdlib.cast("UInt", "UInt256", v59062, false, true);
        const v59087 = stdlib.cast("UInt", "UInt256", v59065, false, true);
        const v59088 = stdlib.safeMul256(v59086, v59087);
        const v59089 = stdlib.ge256(v59088, v59085);
        stdlib.assert(v59089, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v59006;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = svs;
      return (await ((async (_v44259 ) => {
          const v44259 = stdlib.protect(ctc3, _v44259, null);
        
        const v44261 = v44055.locked;
        const v44262 = v44261 ? false : true;
        stdlib.assert(v44262, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v44264 = v44053.A;
        const v44265 = v44053.B;
        const v44267 = v44055.protoFee;
        const v44268 = v44055.totFee;
        const v44269 = stdlib.cast("UInt", "UInt256", v44264, false, true);
        const v44270 = stdlib.cast("UInt", "UInt256", v44265, false, true);
        const v44271 = stdlib.cast("UInt", "UInt256", v44259, false, true);
        const v44272 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44268);
        const v44273 = stdlib.cast("UInt", "UInt256", v44272, false, true);
        const v44274 = stdlib.safeMul256(v44271, v44273);
        const v44275 = stdlib.safeMul256(v44270, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v44276 = stdlib.safeAdd256(v44275, v44274);
        const v44277 = stdlib.safeMul256(v44274, v44269);
        const v44278 = stdlib.safeDiv256(v44277, v44276);
        const v44279 = stdlib.cast("UInt256", "UInt", v44278, false, true);
        const v44285 = stdlib.safeMul(v44267, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v44286 = stdlib.safeDiv(v44285, v44268);
        const v44291 = stdlib.safeAdd(v44265, v44259);
        const v44295 = stdlib.safeMuldiv(v44259, v44264, v44291);
        const v44298 = stdlib.safeSub(v44295, v44279);
        const v44300 = stdlib.safeMuldiv(v44298, v44286, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v44302 = stdlib.safeMuldiv(v44259, v44267, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v44306 = stdlib.safeMuldiv(v44302, v44264, v44291);
        const v44307 = stdlib.gt(v44306, v44300);
        const v44308 = [v44302, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v44309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44300];
        const v44310 = v44307 ? v44308 : v44309;
        const v44312 = v44310[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v44313 = v44310[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v44329 = stdlib.safeSub(v44264, v44279);
        const v44335 = stdlib.safeSub(v44329, v44313);
        const v44338 = stdlib.safeSub(v44291, v44312);
        const v44351 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44279);
        stdlib.assert(v44351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v44358 = stdlib.safeMul256(v44269, v44270);
        const v44359 = stdlib.cast("UInt", "UInt256", v44335, false, true);
        const v44360 = stdlib.cast("UInt", "UInt256", v44338, false, true);
        const v44361 = stdlib.safeMul256(v44359, v44360);
        const v44362 = stdlib.ge256(v44361, v44358);
        stdlib.assert(v44362, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v44279;}))(...args));
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
    Protocol_harvest0_35453: ctc10,
    Provider_deposit0_35453: ctc12,
    Provider_withdraw0_35453: ctc13,
    Trader_exactSwapAForB0_35453: ctc14,
    Trader_exactSwapBForA0_35453: ctc14,
    Trader_swapAForB0_35453: ctc14,
    Trader_swapBForA0_35453: ctc14
    });
  const ctc16 = stdlib.T_Tuple([]);
  
  
  const v43953 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v43954 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v43955 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v43956 = stdlib.protect(ctc3, interact.tokA, 'for Admin\'s interact field tokA');
  const v43957 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v43961 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v43961, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v43963 = stdlib.tokenEq(v43956, v43957);
  const v43964 = v43963 ? false : true;
  stdlib.assert(v43964, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:411:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43956, v43957, v43953, v43954, v43955],
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
      
      
      const {data: [v43967, v43968, v43969, v43970, v43971], secs: v43973, time: v43972, didSend: v33330, from: v43966 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v43967
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v43968
        });
      ;
      const v43990 = await ctc.getContractInfo();
      const v43993 = [];
      const v43994 = ['Some', v43967];
      const v43995 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v43971,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      const v43996 = await txn1.getOutput('internal', 'v43995', ctc8, v43995);
      const v43998 = v43996[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
      const v43999 = v43996[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
      const v44018 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v44019 = '                                                                                                ';
      const v44020 = '                                ';
      const v44021 = stdlib.simTokenNew(sim_r, v43969, v43970, v44019, v44020, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v44022 = await txn1.getOutput('internal', 'v44021', ctc3, v44021);
      
      const v44049 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v44051 = false;
      const v44052 = v44018;
      const v44053 = v44049;
      const v44054 = v44049;
      const v44055 = v43999;
      const v44056 = v43972;
      const v44059 = v43998;
      
      if (await (async () => {
        const v44127 = v44051 ? false : true;
        
        return v44127;})()) {
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
  const {data: [v43967, v43968, v43969, v43970, v43971], secs: v43973, time: v43972, didSend: v33330, from: v43966 } = txn1;
  const v43982 = stdlib.tokenEq(v43968, v43967);
  const v43983 = v43982 ? false : true;
  stdlib.assert(v43983, {
    at: './index.rsh:420:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v43985 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v43985, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v43987 = stdlib.tokenEq(v43967, v43968);
  const v43988 = v43987 ? false : true;
  stdlib.assert(v43988, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:411:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  ;
  ;
  const v43990 = await ctc.getContractInfo();
  const v43993 = [];
  const v43994 = ['Some', v43967];
  const v43995 = undefined /* Remote */;
  const v43996 = await txn1.getOutput('internal', 'v43995', ctc8, v43995);
  const v43998 = v43996[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
  const v43999 = v43996[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
  const v44000 = v43999.protoFee;
  const v44001 = v43999.lpFee;
  const v44002 = v43999.totFee;
  const v44003 = stdlib.lt(v44000, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v44004 = stdlib.lt(v44001, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v44005 = v44003 ? v44004 : false;
  let v44006;
  if (v44005) {
    const v44007 = stdlib.safeAdd(v44001, v44000);
    const v44008 = stdlib.eq(v44002, v44007);
    v44006 = v44008;
    }
  else {
    v44006 = false;
    }
  const v44009 = stdlib.lt(v44002, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v44010 = v44006 ? v44009 : false;
  const v44011 = stdlib.gt(v44002, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v44012 = v44010 ? v44011 : false;
  stdlib.assert(v44012, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v44017 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v43998);
  stdlib.assert(v44017, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v44018 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v44019 = '                                                                                                ';
  const v44020 = '                                ';
  const v44021 = undefined /* TokenNew */;
  const v44022 = await txn1.getOutput('internal', 'v44021', ctc3, v44021);
  const v44023 = [v43967, v43968];
  const v44024 = await stdlib.Array_asyncReduce([v44023], false, async([v44026], v44025, v44027) => {
    const v44028 = stdlib.tokenEq(v44022, v44026);
    const v44030 = v44025 ? v44025 : v44028;
    
    return v44030;})
  const v44031 = v44024 ? false : true;
  stdlib.assert(v44031, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v44036 = stdlib.tokenEq(v44022, v43967);
  const v44038 = stdlib.tokenEq(v44022, v43968);
  const v44039 = v44038 ? false : true;
  const v44040 = v44036 ? false : v44039;
  stdlib.assert(v44040, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  stdlib.protect(ctc9, await interact.signalPoolCreation(v44022), {
    at: './index.rsh:437:36:application',
    fs: ['at ./index.rsh:437:36:application call to [unknown function] (defined at: ./index.rsh:437:36:function exp)', 'at ./index.rsh:437:36:application call to "liftedInteract" (defined at: ./index.rsh:437:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v44049 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v44051 = false;
  let v44052 = v44018;
  let v44053 = v44049;
  let v44054 = v44049;
  let v44055 = v43999;
  let v44056 = v43972;
  let v44059 = v43998;
  
  let txn2 = txn1;
  while (await (async () => {
    const v44127 = v44051 ? false : true;
    
    return v44127;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn3;
    switch (v46077[0]) {
      case 'Protocol_harvest0_35453': {
        const v46080 = v46077[1];
        undefined /* setApiDetails */;
        const v46086 = v46080[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
        const v46087 = v44055.protoAddr;
        const v46088 = stdlib.addressEq(v46076, v46087);
        stdlib.assert(v46088, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v46090 = v46086.protoFee;
        const v46091 = v46086.lpFee;
        const v46092 = v46086.totFee;
        const v46093 = stdlib.lt(v46090, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
        const v46094 = stdlib.lt(v46091, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
        const v46095 = v46093 ? v46094 : false;
        let v46096;
        if (v46095) {
          const v46097 = stdlib.safeAdd(v46091, v46090);
          const v46098 = stdlib.eq(v46092, v46097);
          v46096 = v46098;
          }
        else {
          v46096 = false;
          }
        const v46099 = stdlib.lt(v46092, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
        const v46100 = v46096 ? v46099 : false;
        const v46101 = stdlib.gt(v46092, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
        const v46102 = v46100 ? v46101 : false;
        stdlib.assert(v46102, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v46852 = v46080[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
        let v46863;
        if (v46095) {
          const v46864 = stdlib.safeAdd(v46091, v46090);
          const v46865 = stdlib.eq(v46092, v46864);
          v46863 = v46865;
          }
        else {
          v46863 = false;
          }
        const v46867 = v46863 ? v46099 : false;
        const v46869 = v46867 ? v46101 : false;
        stdlib.assert(v46869, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v46872 = v44052.B;
        const v46875 = v46086.locked;
        const v46876 = stdlib.eq(v46872, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
        const v46877 = v46875 ? v46876 : false;
        const v46878 = v44053.A;
        const v46879 = v44053.B;
        const v46880 = stdlib.eq(v46878, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
        const v46881 = stdlib.eq(v46879, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
        const v46882 = v46880 ? v46881 : false;
        const v46883 = v46877 ? v46882 : false;
        const v46887 = (stdlib.le(await ctc.getBalance(), v44059) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v44059));
        const v46888 = stdlib.safeAdd(v46887, v44059);
        const v46889 = v44054.A;
        const v46890 = v44054.B;
        const v46920 = stdlib.sub(v46888, v46887);
        ;
        ;
        ;
        const v46941 = {
          A: v46889,
          B: v46890
          };
        const v46942 = [v46941, v46887];
        await txn3.getOutput('Protocol_harvest', 'v46942', ctc12, v46942);
        const v46970 = v46086.protoAddr;
        const v46972 = {
          locked: v46875,
          lpFee: v46091,
          protoAddr: v46970,
          protoFee: v46090,
          totFee: v46092
          };
        null;
        const cv44051 = v46883;
        const cv44052 = v44052;
        const cv44053 = v44053;
        const cv44054 = v44049;
        const cv44055 = v46086;
        const cv44056 = v46078;
        const cv44059 = v46920;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_35453': {
        const v47905 = v46077[1];
        undefined /* setApiDetails */;
        const v47959 = v47905[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
        const v47960 = v47905[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
        const v47961 = v44055.locked;
        const v47962 = v47961 ? false : true;
        stdlib.assert(v47962, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        let v47964;
        const v47965 = v47959.A;
        const v47966 = v47959.B;
        const v47968 = v44052.B;
        const v47970 = stdlib.eq(v47968, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
        if (v47970) {
          const v47971 = stdlib.cast("UInt", "UInt256", v47965, false, true);
          const v47972 = stdlib.cast("UInt", "UInt256", v47966, false, true);
          const v47973 = stdlib.safeMul256(v47971, v47972);
          const v47974 = stdlib.sqrt256(v47973);
          const v47975 = stdlib.cast("UInt256", "UInt", v47974, false, true);
          v47964 = v47975;
          }
        else {
          const v47976 = v44053.A;
          const v47977 = v44053.B;
          const v47981 = stdlib.safeMuldiv(v47965, v47968, v47976);
          const v47985 = stdlib.safeMuldiv(v47966, v47968, v47977);
          const v47986 = stdlib.lt(v47981, v47985);
          const v47987 = v47986 ? v47981 : v47985;
          v47964 = v47987;
          }
        const v47988 = stdlib.le(v47960, v47964);
        stdlib.assert(v47988, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        let v48807;
        const v48810 = v44052.A;
        if (v47970) {
          const v48814 = stdlib.cast("UInt", "UInt256", v47965, false, true);
          const v48815 = stdlib.cast("UInt", "UInt256", v47966, false, true);
          const v48816 = stdlib.safeMul256(v48814, v48815);
          const v48817 = stdlib.sqrt256(v48816);
          const v48818 = stdlib.cast("UInt256", "UInt", v48817, false, true);
          v48807 = v48818;
          }
        else {
          const v48819 = v44053.A;
          const v48820 = v44053.B;
          const v48824 = stdlib.safeMuldiv(v47965, v47968, v48819);
          const v48828 = stdlib.safeMuldiv(v47966, v47968, v48820);
          const v48829 = stdlib.lt(v48824, v48828);
          const v48830 = v48829 ? v48824 : v48828;
          v48807 = v48830;
          }
        const v48831 = stdlib.le(v47960, v48807);
        stdlib.assert(v48831, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v48834 = v44053.A;
        const v48838 = stdlib.safeAdd(v47965, v48834);
        const v48840 = v44053.B;
        const v48844 = stdlib.safeAdd(v47966, v48840);
        const v48845 = {
          A: v48838,
          B: v48844
          };
        const v48852 = stdlib.safeSub(v48810, v48807);
        const v48856 = stdlib.safeAdd(v47968, v48807);
        const v48857 = {
          A: v48852,
          B: v48856
          };
        ;
        await txn3.getOutput('Provider_deposit', 'v48807', ctc4, v48807);
        const v48903 = {
          A: v47965,
          B: v47966
          };
        const v48904 = {
          A: v48838,
          B: v48844
          };
        const v48905 = {
          A: v48852,
          B: v48856
          };
        null;
        const cv44051 = false;
        const cv44052 = v48857;
        const cv44053 = v48845;
        const cv44054 = v44054;
        const cv44055 = v44055;
        const cv44056 = v46078;
        const cv44059 = v44059;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_35453': {
        const v49730 = v46077[1];
        undefined /* setApiDetails */;
        const v49864 = v49730[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
        const v49865 = v49730[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
        const v49867 = v44052.B;
        const v49870 = v44053.A;
        const v49871 = v44053.B;
        const v49875 = stdlib.safeMuldiv(v49864, v49870, v49867);
        const v49879 = stdlib.safeMuldiv(v49864, v49871, v49867);
        const v49881 = v49865.A;
        const v49882 = stdlib.le(v49881, v49875);
        stdlib.assert(v49882, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage A',
          who: 'Admin'
          });
        const v49884 = v49865.B;
        const v49885 = stdlib.le(v49884, v49879);
        stdlib.assert(v49885, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage B',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v50739 = v44052.A;
        const v50767 = stdlib.safeAdd(v50739, v49864);
        const v50770 = stdlib.safeSub(v49867, v49864);
        const v50771 = {
          A: v50767,
          B: v50770
          };
        const v50776 = stdlib.safeSub(v49870, v49875);
        const v50780 = stdlib.safeSub(v49871, v49879);
        const v50781 = {
          A: v50776,
          B: v50780
          };
        ;
        ;
        const v50828 = {
          A: v49875,
          B: v49879
          };
        await txn3.getOutput('Provider_withdraw', 'v50828', ctc11, v50828);
        const v50841 = {
          A: v50776,
          B: v50780
          };
        const v50842 = {
          A: v50767,
          B: v50770
          };
        null;
        const cv44051 = false;
        const cv44052 = v50771;
        const cv44053 = v50781;
        const cv44054 = v44054;
        const cv44055 = v44055;
        const cv44056 = v46078;
        const cv44059 = v44059;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_35453': {
        const v51555 = v46077[1];
        undefined /* setApiDetails */;
        const v51751 = v51555[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
        const v51752 = v51555[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
        const v51754 = v44055.locked;
        const v51755 = v51754 ? false : true;
        stdlib.assert(v51755, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v51757 = v44053.A;
        const v51758 = v44053.B;
        const v51760 = v44055.protoFee;
        const v51761 = v44055.totFee;
        const v51762 = stdlib.safeSub(v51758, v51752);
        const v51763 = stdlib.cast("UInt", "UInt256", v51762, false, true);
        const v51764 = stdlib.cast("UInt", "UInt256", v51757, false, true);
        const v51765 = stdlib.cast("UInt", "UInt256", v51752, false, true);
        const v51766 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51761);
        const v51767 = stdlib.cast("UInt", "UInt256", v51766, false, true);
        const v51768 = stdlib.safeMul256(v51765, v51767);
        const v51769 = stdlib.safeMul256(v51763, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v51770 = stdlib.safeMul256(v51768, v51764);
        const v51771 = stdlib.safeDiv256(v51770, v51769);
        const v51772 = stdlib.cast("UInt256", "UInt", v51771, false, true);
        const v51773 = stdlib.safeAdd(v51772, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v51774 = stdlib.ge(v51751, v51773);
        stdlib.assert(v51774, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v51776 = stdlib.safeSub(v51751, v51773);
        const v51782 = stdlib.safeMul(v51760, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v51783 = stdlib.safeDiv(v51782, v51761);
        const v51788 = stdlib.safeAdd(v51757, v51773);
        const v51792 = stdlib.safeMuldiv(v51773, v51758, v51788);
        const v51795 = stdlib.safeSub(v51792, v51752);
        const v51797 = stdlib.safeMuldiv(v51795, v51783, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v51799 = stdlib.safeMuldiv(v51773, v51760, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v51803 = stdlib.safeMuldiv(v51799, v51758, v51788);
        const v51804 = stdlib.gt(v51803, v51797);
        const v51805 = [v51799, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v51806 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51797];
        const v51807 = v51804 ? v51805 : v51806;
        const v51809 = v51807[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v51810 = v51807[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v51818 = stdlib.safeAdd(v51757, v51751);
        const v51826 = stdlib.safeSub(v51818, v51776);
        const v51833 = stdlib.safeSub(v51826, v51809);
        const v51836 = stdlib.safeSub(v51762, v51810);
        const v51849 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v51776);
        const v51850 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v51752);
        const v51851 = v51849 ? v51850 : false;
        stdlib.assert(v51851, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v51856 = stdlib.cast("UInt", "UInt256", v51758, false, true);
        const v51857 = stdlib.safeMul256(v51764, v51856);
        const v51858 = stdlib.cast("UInt", "UInt256", v51833, false, true);
        const v51859 = stdlib.cast("UInt", "UInt256", v51836, false, true);
        const v51860 = stdlib.safeMul256(v51858, v51859);
        const v51861 = stdlib.ge256(v51860, v51857);
        stdlib.assert(v51861, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v52760 = {
          A: v51833,
          B: v51836
          };
        const v52761 = v44054.A;
        const v52765 = stdlib.safeAdd(v52761, v51809);
        const v52766 = v44054.B;
        const v52770 = stdlib.safeAdd(v52766, v51810);
        const v52771 = {
          A: v52765,
          B: v52770
          };
        ;
        ;
        const v52836 = {
          A: v51776,
          B: v51752
          };
        await txn3.getOutput('Trader_exactSwapAForB', 'v52836', ctc11, v52836);
        const v52846 = {
          A: v51751,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v52848 = {
          A: v51833,
          B: v51836
          };
        null;
        const cv44051 = false;
        const cv44052 = v44052;
        const cv44053 = v52760;
        const cv44054 = v52771;
        const cv44055 = v44055;
        const cv44056 = v46078;
        const cv44059 = v44059;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_35453': {
        const v53380 = v46077[1];
        undefined /* setApiDetails */;
        const v53709 = v53380[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
        const v53710 = v53380[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
        const v53712 = v44055.locked;
        const v53713 = v53712 ? false : true;
        stdlib.assert(v53713, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v53715 = v44053.A;
        const v53716 = v44053.B;
        const v53718 = v44055.protoFee;
        const v53719 = v44055.totFee;
        const v53720 = stdlib.safeSub(v53715, v53710);
        const v53721 = stdlib.cast("UInt", "UInt256", v53720, false, true);
        const v53722 = stdlib.cast("UInt", "UInt256", v53716, false, true);
        const v53723 = stdlib.cast("UInt", "UInt256", v53710, false, true);
        const v53724 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53719);
        const v53725 = stdlib.cast("UInt", "UInt256", v53724, false, true);
        const v53726 = stdlib.safeMul256(v53723, v53725);
        const v53727 = stdlib.safeMul256(v53721, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v53728 = stdlib.safeMul256(v53726, v53722);
        const v53729 = stdlib.safeDiv256(v53728, v53727);
        const v53730 = stdlib.cast("UInt256", "UInt", v53729, false, true);
        const v53731 = stdlib.safeAdd(v53730, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v53732 = stdlib.ge(v53709, v53731);
        stdlib.assert(v53732, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v53734 = stdlib.safeSub(v53709, v53731);
        const v53740 = stdlib.safeMul(v53718, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v53741 = stdlib.safeDiv(v53740, v53719);
        const v53746 = stdlib.safeAdd(v53716, v53731);
        const v53750 = stdlib.safeMuldiv(v53731, v53715, v53746);
        const v53753 = stdlib.safeSub(v53750, v53710);
        const v53755 = stdlib.safeMuldiv(v53753, v53741, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v53757 = stdlib.safeMuldiv(v53731, v53718, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v53761 = stdlib.safeMuldiv(v53757, v53715, v53746);
        const v53762 = stdlib.gt(v53761, v53755);
        const v53763 = [v53757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v53764 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53755];
        const v53765 = v53762 ? v53763 : v53764;
        const v53767 = v53765[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v53768 = v53765[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v53780 = stdlib.safeAdd(v53716, v53709);
        const v53787 = stdlib.safeSub(v53780, v53734);
        const v53791 = stdlib.safeSub(v53720, v53768);
        const v53794 = stdlib.safeSub(v53787, v53767);
        const v53807 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v53710);
        const v53808 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v53734);
        const v53809 = v53807 ? v53808 : false;
        stdlib.assert(v53809, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v53813 = stdlib.cast("UInt", "UInt256", v53715, false, true);
        const v53815 = stdlib.safeMul256(v53813, v53722);
        const v53816 = stdlib.cast("UInt", "UInt256", v53791, false, true);
        const v53817 = stdlib.cast("UInt", "UInt256", v53794, false, true);
        const v53818 = stdlib.safeMul256(v53816, v53817);
        const v53819 = stdlib.ge256(v53818, v53815);
        stdlib.assert(v53819, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v54769 = {
          A: v53791,
          B: v53794
          };
        const v54770 = v44054.A;
        const v54774 = stdlib.safeAdd(v54770, v53768);
        const v54775 = v44054.B;
        const v54779 = stdlib.safeAdd(v54775, v53767);
        const v54780 = {
          A: v54774,
          B: v54779
          };
        ;
        ;
        const v54845 = {
          A: v53710,
          B: v53734
          };
        await txn3.getOutput('Trader_exactSwapBForA', 'v54845', ctc11, v54845);
        const v54855 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v53709
          };
        const v54857 = {
          A: v53791,
          B: v53794
          };
        null;
        const cv44051 = false;
        const cv44052 = v44052;
        const cv44053 = v54769;
        const cv44054 = v54780;
        const cv44055 = v44055;
        const cv44056 = v46078;
        const cv44059 = v44059;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_35453': {
        const v55205 = v46077[1];
        undefined /* setApiDetails */;
        const v55667 = v55205[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
        const v55668 = v55205[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
        const v55671 = v44055.locked;
        const v55672 = v55671 ? false : true;
        stdlib.assert(v55672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v55674 = v44053.A;
        const v55675 = v44053.B;
        const v55677 = v44055.protoFee;
        const v55678 = v44055.totFee;
        const v55679 = stdlib.cast("UInt", "UInt256", v55675, false, true);
        const v55680 = stdlib.cast("UInt", "UInt256", v55674, false, true);
        const v55681 = stdlib.cast("UInt", "UInt256", v55667, false, true);
        const v55682 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55678);
        const v55683 = stdlib.cast("UInt", "UInt256", v55682, false, true);
        const v55684 = stdlib.safeMul256(v55681, v55683);
        const v55685 = stdlib.safeMul256(v55680, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v55686 = stdlib.safeAdd256(v55685, v55684);
        const v55687 = stdlib.safeMul256(v55684, v55679);
        const v55688 = stdlib.safeDiv256(v55687, v55686);
        const v55689 = stdlib.cast("UInt256", "UInt", v55688, false, true);
        const v55695 = stdlib.safeMul(v55677, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v55696 = stdlib.safeDiv(v55695, v55678);
        const v55701 = stdlib.safeAdd(v55674, v55667);
        const v55705 = stdlib.safeMuldiv(v55667, v55675, v55701);
        const v55708 = stdlib.safeSub(v55705, v55689);
        const v55710 = stdlib.safeMuldiv(v55708, v55696, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v55712 = stdlib.safeMuldiv(v55667, v55677, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v55716 = stdlib.safeMuldiv(v55712, v55675, v55701);
        const v55717 = stdlib.gt(v55716, v55710);
        const v55718 = [v55712, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v55719 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55710];
        const v55720 = v55717 ? v55718 : v55719;
        const v55722 = v55720[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v55723 = v55720[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v55741 = stdlib.safeSub(v55675, v55689);
        const v55745 = stdlib.safeSub(v55701, v55722);
        const v55748 = stdlib.safeSub(v55741, v55723);
        const v55761 = stdlib.le(v55668, v55689);
        stdlib.assert(v55761, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v55767 = stdlib.safeMul256(v55680, v55679);
        const v55768 = stdlib.cast("UInt", "UInt256", v55745, false, true);
        const v55769 = stdlib.cast("UInt", "UInt256", v55748, false, true);
        const v55770 = stdlib.safeMul256(v55768, v55769);
        const v55771 = stdlib.ge256(v55770, v55767);
        stdlib.assert(v55771, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v56774 = {
          A: v55745,
          B: v55748
          };
        const v56775 = v44054.A;
        const v56779 = stdlib.safeAdd(v56775, v55722);
        const v56780 = v44054.B;
        const v56784 = stdlib.safeAdd(v56780, v55723);
        const v56785 = {
          A: v56779,
          B: v56784
          };
        ;
        const v56839 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v55689
          };
        await txn3.getOutput('Trader_swapAForB', 'v56839', ctc11, v56839);
        const v56849 = {
          A: v55667,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v56851 = {
          A: v55745,
          B: v55748
          };
        null;
        const cv44051 = false;
        const cv44052 = v44052;
        const cv44053 = v56774;
        const cv44054 = v56785;
        const cv44055 = v44055;
        const cv44056 = v46078;
        const cv44059 = v44059;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_35453': {
        const v57030 = v46077[1];
        undefined /* setApiDetails */;
        const v57619 = v57030[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
        const v57620 = v57030[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
        const v57623 = v44055.locked;
        const v57624 = v57623 ? false : true;
        stdlib.assert(v57624, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v57626 = v44053.A;
        const v57627 = v44053.B;
        const v57629 = v44055.protoFee;
        const v57630 = v44055.totFee;
        const v57631 = stdlib.cast("UInt", "UInt256", v57626, false, true);
        const v57632 = stdlib.cast("UInt", "UInt256", v57627, false, true);
        const v57633 = stdlib.cast("UInt", "UInt256", v57619, false, true);
        const v57634 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57630);
        const v57635 = stdlib.cast("UInt", "UInt256", v57634, false, true);
        const v57636 = stdlib.safeMul256(v57633, v57635);
        const v57637 = stdlib.safeMul256(v57632, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v57638 = stdlib.safeAdd256(v57637, v57636);
        const v57639 = stdlib.safeMul256(v57636, v57631);
        const v57640 = stdlib.safeDiv256(v57639, v57638);
        const v57641 = stdlib.cast("UInt256", "UInt", v57640, false, true);
        const v57647 = stdlib.safeMul(v57629, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v57648 = stdlib.safeDiv(v57647, v57630);
        const v57653 = stdlib.safeAdd(v57627, v57619);
        const v57657 = stdlib.safeMuldiv(v57619, v57626, v57653);
        const v57660 = stdlib.safeSub(v57657, v57641);
        const v57662 = stdlib.safeMuldiv(v57660, v57648, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v57664 = stdlib.safeMuldiv(v57619, v57629, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v57668 = stdlib.safeMuldiv(v57664, v57626, v57653);
        const v57669 = stdlib.gt(v57668, v57662);
        const v57670 = [v57664, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v57671 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57662];
        const v57672 = v57669 ? v57670 : v57671;
        const v57674 = v57672[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v57675 = v57672[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v57691 = stdlib.safeSub(v57626, v57641);
        const v57697 = stdlib.safeSub(v57691, v57675);
        const v57700 = stdlib.safeSub(v57653, v57674);
        const v57713 = stdlib.le(v57620, v57641);
        stdlib.assert(v57713, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v57720 = stdlib.safeMul256(v57631, v57632);
        const v57721 = stdlib.cast("UInt", "UInt256", v57697, false, true);
        const v57722 = stdlib.cast("UInt", "UInt256", v57700, false, true);
        const v57723 = stdlib.safeMul256(v57721, v57722);
        const v57724 = stdlib.ge256(v57723, v57720);
        stdlib.assert(v57724, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        ;
        const v58768 = {
          A: v57697,
          B: v57700
          };
        const v58769 = v44054.A;
        const v58773 = stdlib.safeAdd(v58769, v57675);
        const v58774 = v44054.B;
        const v58778 = stdlib.safeAdd(v58774, v57674);
        const v58779 = {
          A: v58773,
          B: v58778
          };
        ;
        const v58834 = {
          A: v57641,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v58834', ctc11, v58834);
        const v58844 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v57619
          };
        const v58846 = {
          A: v57697,
          B: v57700
          };
        null;
        const cv44051 = false;
        const cv44052 = v44052;
        const cv44053 = v58768;
        const cv44054 = v58779;
        const cv44055 = v44055;
        const cv44056 = v46078;
        const cv44059 = v44059;
        
        v44051 = cv44051;
        v44052 = cv44052;
        v44053 = cv44053;
        v44054 = cv44054;
        v44055 = cv44055;
        v44056 = cv44056;
        v44059 = cv44059;
        
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
  const {data: [v59209], secs: v59211, time: v59210, didSend: v43403, from: v59208 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v59212 = null;
  await txn3.getOutput('Protocol_delete', 'v59212', ctc9, v59212);
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
  
  
  const [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v59207 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:605:3:application',
    fs: ['at ./index.rsh:605:3:application call to [unknown function] (defined at: ./index.rsh:605:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44052, v44053, v44054, v44055, v59207],
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
      
      
      const {data: [v59209], secs: v59211, time: v59210, didSend: v43403, from: v59208 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v59212 = null;
      const v59213 = await txn1.getOutput('Protocol_delete', 'v59212', ctc1, v59212);
      
      stdlib.simTokenBurn(sim_r, v44022, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v44022);
      sim_r.txns.push({
        kind: 'halt',
        tok: v43968
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v43967
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
  const {data: [v59209], secs: v59211, time: v59210, didSend: v43403, from: v59208 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v59212 = null;
  const v59213 = await txn1.getOutput('Protocol_delete', 'v59212', ctc1, v59212);
  stdlib.protect(ctc1, await interact.out(v59209, v59213), {
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
    Protocol_harvest0_35453: ctc8,
    Provider_deposit0_35453: ctc10,
    Provider_withdraw0_35453: ctc11,
    Trader_exactSwapAForB0_35453: ctc12,
    Trader_exactSwapBForA0_35453: ctc12,
    Trader_swapAForB0_35453: ctc12,
    Trader_swapBForA0_35453: ctc12
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44478 = ctc.selfAddress();
  const v44480 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35453" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v44482 = v44480[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44483 = v44482.protoFee;
  const v44484 = v44482.lpFee;
  const v44485 = v44482.totFee;
  const v44486 = stdlib.lt(v44483, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v44487 = stdlib.lt(v44484, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v44488 = v44486 ? v44487 : false;
  let v44489;
  if (v44488) {
    const v44490 = stdlib.safeAdd(v44484, v44483);
    const v44491 = stdlib.eq(v44485, v44490);
    v44489 = v44491;
    }
  else {
    v44489 = false;
    }
  const v44492 = stdlib.lt(v44485, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v44493 = v44489 ? v44492 : false;
  const v44494 = stdlib.gt(v44485, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v44495 = v44493 ? v44494 : false;
  stdlib.assert(v44495, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35453" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v44498 = v44055.protoAddr;
  const v44499 = stdlib.addressEq(v44478, v44498);
  stdlib.assert(v44499, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35453" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v44507;
  if (v44488) {
    const v44508 = stdlib.safeAdd(v44484, v44483);
    const v44509 = stdlib.eq(v44485, v44508);
    v44507 = v44509;
    }
  else {
    v44507 = false;
    }
  const v44511 = v44507 ? v44492 : false;
  const v44513 = v44511 ? v44494 : false;
  stdlib.assert(v44513, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_35453" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v44540 = ['Protocol_harvest0_35453', v44480];
  
  let v45201;
  if (v44488) {
    const v45202 = stdlib.safeAdd(v44484, v44483);
    const v45203 = stdlib.eq(v44485, v45202);
    v45201 = v45203;
    }
  else {
    v45201 = false;
    }
  const v45205 = v45201 ? v44492 : false;
  const v45207 = v45205 ? v44494 : false;
  stdlib.assert(v45207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v44540],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:488:26:decimal', stdlib.UInt_max, '0'), v44022], [stdlib.checkedBigNumberify('./index.rsh:488:29:decimal', stdlib.UInt_max, '0'), v43967], [stdlib.checkedBigNumberify('./index.rsh:488:32:decimal', stdlib.UInt_max, '0'), v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          const v46086 = v46080[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
          const v46090 = v46086.protoFee;
          const v46091 = v46086.lpFee;
          const v46092 = v46086.totFee;
          ;
          ;
          ;
          ;
          const v46852 = v46080[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
          const v46872 = v44052.B;
          const v46875 = v46086.locked;
          const v46876 = stdlib.eq(v46872, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
          const v46877 = v46875 ? v46876 : false;
          const v46878 = v44053.A;
          const v46879 = v44053.B;
          const v46880 = stdlib.eq(v46878, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
          const v46881 = stdlib.eq(v46879, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
          const v46882 = v46880 ? v46881 : false;
          const v46883 = v46877 ? v46882 : false;
          const v46887 = (stdlib.le(await ctc.getBalance(), v44059) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v44059));
          const v46888 = stdlib.safeAdd(v46887, v44059);
          const v46889 = v44054.A;
          const v46890 = v44054.B;
          const v46920 = stdlib.sub(v46888, v46887);
          sim_r.txns.push({
            kind: 'from',
            to: v46852,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46852,
            tok: v43967
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46852,
            tok: v43968
            });
          const v46941 = {
            A: v46889,
            B: v46890
            };
          const v46942 = [v46941, v46887];
          const v46943 = await txn1.getOutput('Protocol_harvest', 'v46942', ctc10, v46942);
          
          const v46970 = v46086.protoAddr;
          const v46972 = {
            locked: v46875,
            lpFee: v46091,
            protoAddr: v46970,
            protoFee: v46090,
            totFee: v46092
            };
          null;
          const v66995 = v44052;
          const v66996 = v44053;
          const v66997 = v44049;
          const v66998 = v46086;
          const v67000 = v46920;
          if (v46883) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      undefined /* setApiDetails */;
      const v46086 = v46080[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
      const v46087 = v44055.protoAddr;
      const v46088 = stdlib.addressEq(v46076, v46087);
      stdlib.assert(v46088, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v46090 = v46086.protoFee;
      const v46091 = v46086.lpFee;
      const v46092 = v46086.totFee;
      const v46093 = stdlib.lt(v46090, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v46094 = stdlib.lt(v46091, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v46095 = v46093 ? v46094 : false;
      let v46096;
      if (v46095) {
        const v46097 = stdlib.safeAdd(v46091, v46090);
        const v46098 = stdlib.eq(v46092, v46097);
        v46096 = v46098;
        }
      else {
        v46096 = false;
        }
      const v46099 = stdlib.lt(v46092, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v46100 = v46096 ? v46099 : false;
      const v46101 = stdlib.gt(v46092, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v46102 = v46100 ? v46101 : false;
      stdlib.assert(v46102, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      ;
      ;
      ;
      ;
      const v46852 = v46080[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
      let v46863;
      if (v46095) {
        const v46864 = stdlib.safeAdd(v46091, v46090);
        const v46865 = stdlib.eq(v46092, v46864);
        v46863 = v46865;
        }
      else {
        v46863 = false;
        }
      const v46867 = v46863 ? v46099 : false;
      const v46869 = v46867 ? v46101 : false;
      stdlib.assert(v46869, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v46872 = v44052.B;
      const v46875 = v46086.locked;
      const v46876 = stdlib.eq(v46872, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
      const v46877 = v46875 ? v46876 : false;
      const v46878 = v44053.A;
      const v46879 = v44053.B;
      const v46880 = stdlib.eq(v46878, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
      const v46881 = stdlib.eq(v46879, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
      const v46882 = v46880 ? v46881 : false;
      const v46883 = v46877 ? v46882 : false;
      const v46887 = (stdlib.le(await ctc.getBalance(), v44059) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v44059));
      const v46888 = stdlib.safeAdd(v46887, v44059);
      const v46889 = v44054.A;
      const v46890 = v44054.B;
      const v46920 = stdlib.sub(v46888, v46887);
      ;
      ;
      ;
      const v46941 = {
        A: v46889,
        B: v46890
        };
      const v46942 = [v46941, v46887];
      const v46943 = await txn1.getOutput('Protocol_harvest', 'v46942', ctc10, v46942);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v46080, v46943), {
          at: './index.rsh:482:11:application',
          fs: ['at ./index.rsh:482:11:application call to [unknown function] (defined at: ./index.rsh:482:11:function exp)', 'at ./index.rsh:491:12:application call to "k" (defined at: ./index.rsh:488:40:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v46970 = v46086.protoAddr;
      const v46972 = {
        locked: v46875,
        lpFee: v46091,
        protoAddr: v46970,
        protoFee: v46090,
        totFee: v46092
        };
      null;
      const v66995 = v44052;
      const v66996 = v44053;
      const v66997 = v44049;
      const v66998 = v46086;
      const v67000 = v46920;
      if (v46883) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
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
    Protocol_harvest0_35453: ctc10,
    Provider_deposit0_35453: ctc9,
    Provider_withdraw0_35453: ctc11,
    Trader_exactSwapAForB0_35453: ctc12,
    Trader_exactSwapBForA0_35453: ctc12,
    Trader_swapAForB0_35453: ctc12,
    Trader_swapBForA0_35453: ctc12
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44607 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35453" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v44608 = v44607[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44609 = v44607[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44610 = v44608.A;
  const v44611 = v44608.B;
  const v44614 = v44055.locked;
  const v44615 = v44614 ? false : true;
  stdlib.assert(v44615, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35453" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  let v44617;
  const v44621 = v44052.B;
  const v44623 = stdlib.eq(v44621, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
  if (v44623) {
    const v44624 = stdlib.cast("UInt", "UInt256", v44610, false, true);
    const v44625 = stdlib.cast("UInt", "UInt256", v44611, false, true);
    const v44626 = stdlib.safeMul256(v44624, v44625);
    const v44627 = stdlib.sqrt256(v44626);
    const v44628 = stdlib.cast("UInt256", "UInt", v44627, false, true);
    v44617 = v44628;
    }
  else {
    const v44629 = v44053.A;
    const v44630 = v44053.B;
    const v44634 = stdlib.safeMuldiv(v44610, v44621, v44629);
    const v44638 = stdlib.safeMuldiv(v44611, v44621, v44630);
    const v44639 = stdlib.lt(v44634, v44638);
    const v44640 = v44639 ? v44634 : v44638;
    v44617 = v44640;
    }
  const v44641 = stdlib.le(v44609, v44617);
  stdlib.assert(v44641, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_35453" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v44644 = v44053.A;
  const v44650 = v44053.B;
  const v44678 = ['Provider_deposit0_35453', v44607];
  
  let v45269;
  if (v44623) {
    const v45276 = stdlib.cast("UInt", "UInt256", v44610, false, true);
    const v45277 = stdlib.cast("UInt", "UInt256", v44611, false, true);
    const v45278 = stdlib.safeMul256(v45276, v45277);
    const v45279 = stdlib.sqrt256(v45278);
    const v45280 = stdlib.cast("UInt256", "UInt", v45279, false, true);
    v45269 = v45280;
    }
  else {
    const v45286 = stdlib.safeMuldiv(v44610, v44621, v44644);
    const v45290 = stdlib.safeMuldiv(v44611, v44621, v44650);
    const v45291 = stdlib.lt(v45286, v45290);
    const v45292 = v45291 ? v45286 : v45290;
    v45269 = v45292;
    }
  const v45293 = stdlib.le(v44609, v45269);
  stdlib.assert(v45293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v44678],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:436:36:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:436:50:decimal', stdlib.UInt_max, '0'), v44022], [v44610, v43967], [v44611, v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v47959 = v47905[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
          const v47965 = v47959.A;
          const v47966 = v47959.B;
          const v47968 = v44052.B;
          const v47970 = stdlib.eq(v47968, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          sim_r.txns.push({
            amt: v47965,
            kind: 'to',
            tok: v43967
            });
          sim_r.txns.push({
            amt: v47966,
            kind: 'to',
            tok: v43968
            });
          let v48807;
          const v48810 = v44052.A;
          if (v47970) {
            const v48814 = stdlib.cast("UInt", "UInt256", v47965, false, true);
            const v48815 = stdlib.cast("UInt", "UInt256", v47966, false, true);
            const v48816 = stdlib.safeMul256(v48814, v48815);
            const v48817 = stdlib.sqrt256(v48816);
            const v48818 = stdlib.cast("UInt256", "UInt", v48817, false, true);
            v48807 = v48818;
            }
          else {
            const v48819 = v44053.A;
            const v48820 = v44053.B;
            const v48824 = stdlib.safeMuldiv(v47965, v47968, v48819);
            const v48828 = stdlib.safeMuldiv(v47966, v47968, v48820);
            const v48829 = stdlib.lt(v48824, v48828);
            const v48830 = v48829 ? v48824 : v48828;
            v48807 = v48830;
            }
          const v48834 = v44053.A;
          const v48838 = stdlib.safeAdd(v47965, v48834);
          const v48840 = v44053.B;
          const v48844 = stdlib.safeAdd(v47966, v48840);
          const v48845 = {
            A: v48838,
            B: v48844
            };
          const v48852 = stdlib.safeSub(v48810, v48807);
          const v48856 = stdlib.safeAdd(v47968, v48807);
          const v48857 = {
            A: v48852,
            B: v48856
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v44022
            });
          const v48892 = await txn1.getOutput('Provider_deposit', 'v48807', ctc3, v48807);
          
          const v48903 = {
            A: v47965,
            B: v47966
            };
          const v48904 = {
            A: v48838,
            B: v48844
            };
          const v48905 = {
            A: v48852,
            B: v48856
            };
          null;
          const v67115 = v48857;
          const v67116 = v48845;
          const v67117 = v44054;
          const v67118 = v44055;
          const v67120 = v44059;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      return;
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      undefined /* setApiDetails */;
      const v47959 = v47905[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
      const v47960 = v47905[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
      const v47961 = v44055.locked;
      const v47962 = v47961 ? false : true;
      stdlib.assert(v47962, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      let v47964;
      const v47965 = v47959.A;
      const v47966 = v47959.B;
      const v47968 = v44052.B;
      const v47970 = stdlib.eq(v47968, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
      if (v47970) {
        const v47971 = stdlib.cast("UInt", "UInt256", v47965, false, true);
        const v47972 = stdlib.cast("UInt", "UInt256", v47966, false, true);
        const v47973 = stdlib.safeMul256(v47971, v47972);
        const v47974 = stdlib.sqrt256(v47973);
        const v47975 = stdlib.cast("UInt256", "UInt", v47974, false, true);
        v47964 = v47975;
        }
      else {
        const v47976 = v44053.A;
        const v47977 = v44053.B;
        const v47981 = stdlib.safeMuldiv(v47965, v47968, v47976);
        const v47985 = stdlib.safeMuldiv(v47966, v47968, v47977);
        const v47986 = stdlib.lt(v47981, v47985);
        const v47987 = v47986 ? v47981 : v47985;
        v47964 = v47987;
        }
      const v47988 = stdlib.le(v47960, v47964);
      stdlib.assert(v47988, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      ;
      ;
      ;
      ;
      let v48807;
      const v48810 = v44052.A;
      if (v47970) {
        const v48814 = stdlib.cast("UInt", "UInt256", v47965, false, true);
        const v48815 = stdlib.cast("UInt", "UInt256", v47966, false, true);
        const v48816 = stdlib.safeMul256(v48814, v48815);
        const v48817 = stdlib.sqrt256(v48816);
        const v48818 = stdlib.cast("UInt256", "UInt", v48817, false, true);
        v48807 = v48818;
        }
      else {
        const v48819 = v44053.A;
        const v48820 = v44053.B;
        const v48824 = stdlib.safeMuldiv(v47965, v47968, v48819);
        const v48828 = stdlib.safeMuldiv(v47966, v47968, v48820);
        const v48829 = stdlib.lt(v48824, v48828);
        const v48830 = v48829 ? v48824 : v48828;
        v48807 = v48830;
        }
      const v48831 = stdlib.le(v47960, v48807);
      stdlib.assert(v48831, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v48834 = v44053.A;
      const v48838 = stdlib.safeAdd(v47965, v48834);
      const v48840 = v44053.B;
      const v48844 = stdlib.safeAdd(v47966, v48840);
      const v48845 = {
        A: v48838,
        B: v48844
        };
      const v48852 = stdlib.safeSub(v48810, v48807);
      const v48856 = stdlib.safeAdd(v47968, v48807);
      const v48857 = {
        A: v48852,
        B: v48856
        };
      ;
      const v48892 = await txn1.getOutput('Provider_deposit', 'v48807', ctc3, v48807);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v47905, v48892), {
          at: './index.rsh:510:11:application',
          fs: ['at ./index.rsh:510:11:application call to [unknown function] (defined at: ./index.rsh:510:11:function exp)', 'at ./index.rsh:519:10:application call to "k" (defined at: ./index.rsh:517:39:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v48903 = {
        A: v47965,
        B: v47966
        };
      const v48904 = {
        A: v48838,
        B: v48844
        };
      const v48905 = {
        A: v48852,
        B: v48856
        };
      null;
      const v67115 = v48857;
      const v67116 = v48845;
      const v67117 = v44054;
      const v67118 = v44055;
      const v67120 = v44059;
      return;
      
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
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
    Protocol_harvest0_35453: ctc10,
    Provider_deposit0_35453: ctc11,
    Provider_withdraw0_35453: ctc9,
    Trader_exactSwapAForB0_35453: ctc12,
    Trader_exactSwapBForA0_35453: ctc12,
    Trader_swapAForB0_35453: ctc12,
    Trader_swapBForA0_35453: ctc12
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44544 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35453" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v44545 = v44544[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44546 = v44544[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44547 = v44546.A;
  const v44548 = v44546.B;
  const v44552 = v44052.B;
  const v44555 = v44053.A;
  const v44556 = v44053.B;
  const v44560 = stdlib.safeMuldiv(v44545, v44555, v44552);
  const v44564 = stdlib.safeMuldiv(v44545, v44556, v44552);
  const v44567 = stdlib.le(v44547, v44560);
  stdlib.assert(v44567, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35453" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage A',
    who: 'Provider_withdraw'
    });
  const v44570 = stdlib.le(v44548, v44564);
  stdlib.assert(v44570, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_35453" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage B',
    who: 'Provider_withdraw'
    });
  const v44603 = ['Provider_withdraw0_35453', v44544];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v44603],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[v44545, v44022], [stdlib.checkedBigNumberify('./index.rsh:503:28:decimal', stdlib.UInt_max, '0'), v43967], [stdlib.checkedBigNumberify('./index.rsh:503:31:decimal', stdlib.UInt_max, '0'), v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v49864 = v49730[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
          const v49867 = v44052.B;
          const v49870 = v44053.A;
          const v49871 = v44053.B;
          const v49875 = stdlib.safeMuldiv(v49864, v49870, v49867);
          const v49879 = stdlib.safeMuldiv(v49864, v49871, v49867);
          ;
          sim_r.txns.push({
            amt: v49864,
            kind: 'to',
            tok: v44022
            });
          ;
          ;
          const v50739 = v44052.A;
          const v50767 = stdlib.safeAdd(v50739, v49864);
          const v50770 = stdlib.safeSub(v49867, v49864);
          const v50771 = {
            A: v50767,
            B: v50770
            };
          const v50776 = stdlib.safeSub(v49870, v49875);
          const v50780 = stdlib.safeSub(v49871, v49879);
          const v50781 = {
            A: v50776,
            B: v50780
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43967
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43968
            });
          const v50828 = {
            A: v49875,
            B: v49879
            };
          const v50829 = await txn1.getOutput('Provider_withdraw', 'v50828', ctc8, v50828);
          
          const v50841 = {
            A: v50776,
            B: v50780
            };
          const v50842 = {
            A: v50767,
            B: v50770
            };
          null;
          const v67235 = v50771;
          const v67236 = v50781;
          const v67237 = v44054;
          const v67238 = v44055;
          const v67240 = v44059;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      return;
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      undefined /* setApiDetails */;
      const v49864 = v49730[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
      const v49865 = v49730[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
      const v49867 = v44052.B;
      const v49870 = v44053.A;
      const v49871 = v44053.B;
      const v49875 = stdlib.safeMuldiv(v49864, v49870, v49867);
      const v49879 = stdlib.safeMuldiv(v49864, v49871, v49867);
      const v49881 = v49865.A;
      const v49882 = stdlib.le(v49881, v49875);
      stdlib.assert(v49882, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage A',
        who: 'Provider_withdraw'
        });
      const v49884 = v49865.B;
      const v49885 = stdlib.le(v49884, v49879);
      stdlib.assert(v49885, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage B',
        who: 'Provider_withdraw'
        });
      ;
      ;
      ;
      ;
      const v50739 = v44052.A;
      const v50767 = stdlib.safeAdd(v50739, v49864);
      const v50770 = stdlib.safeSub(v49867, v49864);
      const v50771 = {
        A: v50767,
        B: v50770
        };
      const v50776 = stdlib.safeSub(v49870, v49875);
      const v50780 = stdlib.safeSub(v49871, v49879);
      const v50781 = {
        A: v50776,
        B: v50780
        };
      ;
      ;
      const v50828 = {
        A: v49875,
        B: v49879
        };
      const v50829 = await txn1.getOutput('Provider_withdraw', 'v50828', ctc8, v50828);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v49730, v50829), {
          at: './index.rsh:496:11:application',
          fs: ['at ./index.rsh:496:11:application call to [unknown function] (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:505:10:application call to "k" (defined at: ./index.rsh:503:39:function exp)', 'at ./index.rsh:503:39:application call to [unknown function] (defined at: ./index.rsh:503:39:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v50841 = {
        A: v50776,
        B: v50780
        };
      const v50842 = {
        A: v50767,
        B: v50770
        };
      null;
      const v67235 = v50771;
      const v67236 = v50781;
      const v67237 = v44054;
      const v67238 = v44055;
      const v67240 = v44059;
      return;
      
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
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
    Protocol_harvest0_35453: ctc9,
    Provider_deposit0_35453: ctc11,
    Provider_withdraw0_35453: ctc12,
    Trader_exactSwapAForB0_35453: ctc8,
    Trader_exactSwapBForA0_35453: ctc8,
    Trader_swapAForB0_35453: ctc8,
    Trader_swapBForA0_35453: ctc8
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44931 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35453" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v44932 = v44931[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44933 = v44931[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44937 = v44055.locked;
  const v44938 = v44937 ? false : true;
  stdlib.assert(v44938, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35453" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapAForB'
    });
  const v44940 = v44053.A;
  const v44941 = v44053.B;
  const v44943 = v44055.protoFee;
  const v44944 = v44055.totFee;
  const v44945 = stdlib.safeSub(v44941, v44933);
  const v44946 = stdlib.cast("UInt", "UInt256", v44945, false, true);
  const v44947 = stdlib.cast("UInt", "UInt256", v44940, false, true);
  const v44948 = stdlib.cast("UInt", "UInt256", v44933, false, true);
  const v44949 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44944);
  const v44950 = stdlib.cast("UInt", "UInt256", v44949, false, true);
  const v44951 = stdlib.safeMul256(v44948, v44950);
  const v44952 = stdlib.safeMul256(v44946, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44953 = stdlib.safeMul256(v44951, v44947);
  const v44954 = stdlib.safeDiv256(v44953, v44952);
  const v44955 = stdlib.cast("UInt256", "UInt", v44954, false, true);
  const v44956 = stdlib.safeAdd(v44955, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v44957 = stdlib.ge(v44932, v44956);
  stdlib.assert(v44957, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35453" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapAForB'
    });
  const v44959 = stdlib.safeSub(v44932, v44956);
  const v44965 = stdlib.safeMul(v44943, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44966 = stdlib.safeDiv(v44965, v44944);
  const v44971 = stdlib.safeAdd(v44940, v44956);
  const v44975 = stdlib.safeMuldiv(v44956, v44941, v44971);
  const v44978 = stdlib.safeSub(v44975, v44933);
  const v44980 = stdlib.safeMuldiv(v44978, v44966, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44982 = stdlib.safeMuldiv(v44956, v44943, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44986 = stdlib.safeMuldiv(v44982, v44941, v44971);
  const v44987 = stdlib.gt(v44986, v44980);
  const v44988 = [v44982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44989 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44980];
  const v44990 = v44987 ? v44988 : v44989;
  const v44992 = v44990[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v44993 = v44990[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v45001 = stdlib.safeAdd(v44940, v44932);
  const v45009 = stdlib.safeSub(v45001, v44959);
  const v45016 = stdlib.safeSub(v45009, v44992);
  const v45019 = stdlib.safeSub(v44945, v44993);
  const v45032 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v44959);
  const v45033 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v44933);
  const v45034 = v45032 ? v45033 : false;
  stdlib.assert(v45034, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35453" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapAForB'
    });
  const v45039 = stdlib.cast("UInt", "UInt256", v44941, false, true);
  const v45040 = stdlib.safeMul256(v44947, v45039);
  const v45041 = stdlib.cast("UInt", "UInt256", v45016, false, true);
  const v45042 = stdlib.cast("UInt", "UInt256", v45019, false, true);
  const v45043 = stdlib.safeMul256(v45041, v45042);
  const v45044 = stdlib.ge256(v45043, v45040);
  stdlib.assert(v45044, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_35453" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapAForB'
    });
  const v45057 = ['Trader_exactSwapAForB0_35453', v44931];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v45057],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:596:24:decimal', stdlib.UInt_max, '0'), v44022], [v44932, v43967], [stdlib.checkedBigNumberify('./index.rsh:596:30:decimal', stdlib.UInt_max, '0'), v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          const v51751 = v51555[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
          const v51752 = v51555[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
          const v51757 = v44053.A;
          const v51758 = v44053.B;
          const v51760 = v44055.protoFee;
          const v51761 = v44055.totFee;
          const v51762 = stdlib.safeSub(v51758, v51752);
          const v51763 = stdlib.cast("UInt", "UInt256", v51762, false, true);
          const v51764 = stdlib.cast("UInt", "UInt256", v51757, false, true);
          const v51765 = stdlib.cast("UInt", "UInt256", v51752, false, true);
          const v51766 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51761);
          const v51767 = stdlib.cast("UInt", "UInt256", v51766, false, true);
          const v51768 = stdlib.safeMul256(v51765, v51767);
          const v51769 = stdlib.safeMul256(v51763, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v51770 = stdlib.safeMul256(v51768, v51764);
          const v51771 = stdlib.safeDiv256(v51770, v51769);
          const v51772 = stdlib.cast("UInt256", "UInt", v51771, false, true);
          const v51773 = stdlib.safeAdd(v51772, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v51776 = stdlib.safeSub(v51751, v51773);
          const v51782 = stdlib.safeMul(v51760, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v51783 = stdlib.safeDiv(v51782, v51761);
          const v51788 = stdlib.safeAdd(v51757, v51773);
          const v51792 = stdlib.safeMuldiv(v51773, v51758, v51788);
          const v51795 = stdlib.safeSub(v51792, v51752);
          const v51797 = stdlib.safeMuldiv(v51795, v51783, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v51799 = stdlib.safeMuldiv(v51773, v51760, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v51803 = stdlib.safeMuldiv(v51799, v51758, v51788);
          const v51804 = stdlib.gt(v51803, v51797);
          const v51805 = [v51799, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v51806 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51797];
          const v51807 = v51804 ? v51805 : v51806;
          const v51809 = v51807[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v51810 = v51807[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v51818 = stdlib.safeAdd(v51757, v51751);
          const v51826 = stdlib.safeSub(v51818, v51776);
          const v51833 = stdlib.safeSub(v51826, v51809);
          const v51836 = stdlib.safeSub(v51762, v51810);
          ;
          ;
          sim_r.txns.push({
            amt: v51751,
            kind: 'to',
            tok: v43967
            });
          ;
          const v52760 = {
            A: v51833,
            B: v51836
            };
          const v52761 = v44054.A;
          const v52765 = stdlib.safeAdd(v52761, v51809);
          const v52766 = v44054.B;
          const v52770 = stdlib.safeAdd(v52766, v51810);
          const v52771 = {
            A: v52765,
            B: v52770
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43967
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43968
            });
          const v52836 = {
            A: v51776,
            B: v51752
            };
          const v52837 = await txn1.getOutput('Trader_exactSwapAForB', 'v52836', ctc10, v52836);
          
          const v52846 = {
            A: v51751,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v52848 = {
            A: v51833,
            B: v51836
            };
          null;
          const v67355 = v44052;
          const v67356 = v52760;
          const v67357 = v52771;
          const v67358 = v44055;
          const v67360 = v44059;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      return;
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      undefined /* setApiDetails */;
      const v51751 = v51555[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
      const v51752 = v51555[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
      const v51754 = v44055.locked;
      const v51755 = v51754 ? false : true;
      stdlib.assert(v51755, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapAForB'
        });
      const v51757 = v44053.A;
      const v51758 = v44053.B;
      const v51760 = v44055.protoFee;
      const v51761 = v44055.totFee;
      const v51762 = stdlib.safeSub(v51758, v51752);
      const v51763 = stdlib.cast("UInt", "UInt256", v51762, false, true);
      const v51764 = stdlib.cast("UInt", "UInt256", v51757, false, true);
      const v51765 = stdlib.cast("UInt", "UInt256", v51752, false, true);
      const v51766 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v51761);
      const v51767 = stdlib.cast("UInt", "UInt256", v51766, false, true);
      const v51768 = stdlib.safeMul256(v51765, v51767);
      const v51769 = stdlib.safeMul256(v51763, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v51770 = stdlib.safeMul256(v51768, v51764);
      const v51771 = stdlib.safeDiv256(v51770, v51769);
      const v51772 = stdlib.cast("UInt256", "UInt", v51771, false, true);
      const v51773 = stdlib.safeAdd(v51772, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v51774 = stdlib.ge(v51751, v51773);
      stdlib.assert(v51774, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapAForB'
        });
      const v51776 = stdlib.safeSub(v51751, v51773);
      const v51782 = stdlib.safeMul(v51760, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v51783 = stdlib.safeDiv(v51782, v51761);
      const v51788 = stdlib.safeAdd(v51757, v51773);
      const v51792 = stdlib.safeMuldiv(v51773, v51758, v51788);
      const v51795 = stdlib.safeSub(v51792, v51752);
      const v51797 = stdlib.safeMuldiv(v51795, v51783, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v51799 = stdlib.safeMuldiv(v51773, v51760, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v51803 = stdlib.safeMuldiv(v51799, v51758, v51788);
      const v51804 = stdlib.gt(v51803, v51797);
      const v51805 = [v51799, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v51806 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v51797];
      const v51807 = v51804 ? v51805 : v51806;
      const v51809 = v51807[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v51810 = v51807[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v51818 = stdlib.safeAdd(v51757, v51751);
      const v51826 = stdlib.safeSub(v51818, v51776);
      const v51833 = stdlib.safeSub(v51826, v51809);
      const v51836 = stdlib.safeSub(v51762, v51810);
      const v51849 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v51776);
      const v51850 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v51752);
      const v51851 = v51849 ? v51850 : false;
      stdlib.assert(v51851, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapAForB'
        });
      const v51856 = stdlib.cast("UInt", "UInt256", v51758, false, true);
      const v51857 = stdlib.safeMul256(v51764, v51856);
      const v51858 = stdlib.cast("UInt", "UInt256", v51833, false, true);
      const v51859 = stdlib.cast("UInt", "UInt256", v51836, false, true);
      const v51860 = stdlib.safeMul256(v51858, v51859);
      const v51861 = stdlib.ge256(v51860, v51857);
      stdlib.assert(v51861, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapAForB'
        });
      ;
      ;
      ;
      ;
      const v52760 = {
        A: v51833,
        B: v51836
        };
      const v52761 = v44054.A;
      const v52765 = stdlib.safeAdd(v52761, v51809);
      const v52766 = v44054.B;
      const v52770 = stdlib.safeAdd(v52766, v51810);
      const v52771 = {
        A: v52765,
        B: v52770
        };
      ;
      ;
      const v52836 = {
        A: v51776,
        B: v51752
        };
      const v52837 = await txn1.getOutput('Trader_exactSwapAForB', 'v52836', ctc10, v52836);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v51555, v52837), {
          at: './index.rsh:594:11:application',
          fs: ['at ./index.rsh:594:11:application call to [unknown function] (defined at: ./index.rsh:594:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:596:38:function exp)', 'at ./index.rsh:596:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:596:38:application call to [unknown function] (defined at: ./index.rsh:596:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v52846 = {
        A: v51751,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v52848 = {
        A: v51833,
        B: v51836
        };
      null;
      const v67355 = v44052;
      const v67356 = v52760;
      const v67357 = v52771;
      const v67358 = v44055;
      const v67360 = v44059;
      return;
      
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
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
    Protocol_harvest0_35453: ctc9,
    Provider_deposit0_35453: ctc11,
    Provider_withdraw0_35453: ctc12,
    Trader_exactSwapAForB0_35453: ctc8,
    Trader_exactSwapBForA0_35453: ctc8,
    Trader_swapAForB0_35453: ctc8,
    Trader_swapBForA0_35453: ctc8
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v45061 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35453" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v45062 = v45061[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v45063 = v45061[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v45067 = v44055.locked;
  const v45068 = v45067 ? false : true;
  stdlib.assert(v45068, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35453" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapBForA'
    });
  const v45070 = v44053.A;
  const v45071 = v44053.B;
  const v45073 = v44055.protoFee;
  const v45074 = v44055.totFee;
  const v45075 = stdlib.safeSub(v45070, v45063);
  const v45076 = stdlib.cast("UInt", "UInt256", v45075, false, true);
  const v45077 = stdlib.cast("UInt", "UInt256", v45071, false, true);
  const v45078 = stdlib.cast("UInt", "UInt256", v45063, false, true);
  const v45079 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v45074);
  const v45080 = stdlib.cast("UInt", "UInt256", v45079, false, true);
  const v45081 = stdlib.safeMul256(v45078, v45080);
  const v45082 = stdlib.safeMul256(v45076, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v45083 = stdlib.safeMul256(v45081, v45077);
  const v45084 = stdlib.safeDiv256(v45083, v45082);
  const v45085 = stdlib.cast("UInt256", "UInt", v45084, false, true);
  const v45086 = stdlib.safeAdd(v45085, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v45087 = stdlib.ge(v45062, v45086);
  stdlib.assert(v45087, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35453" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapBForA'
    });
  const v45089 = stdlib.safeSub(v45062, v45086);
  const v45095 = stdlib.safeMul(v45073, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v45096 = stdlib.safeDiv(v45095, v45074);
  const v45101 = stdlib.safeAdd(v45071, v45086);
  const v45105 = stdlib.safeMuldiv(v45086, v45070, v45101);
  const v45108 = stdlib.safeSub(v45105, v45063);
  const v45110 = stdlib.safeMuldiv(v45108, v45096, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v45112 = stdlib.safeMuldiv(v45086, v45073, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v45116 = stdlib.safeMuldiv(v45112, v45070, v45101);
  const v45117 = stdlib.gt(v45116, v45110);
  const v45118 = [v45112, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v45119 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v45110];
  const v45120 = v45117 ? v45118 : v45119;
  const v45122 = v45120[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v45123 = v45120[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v45135 = stdlib.safeAdd(v45071, v45062);
  const v45142 = stdlib.safeSub(v45135, v45089);
  const v45146 = stdlib.safeSub(v45075, v45123);
  const v45149 = stdlib.safeSub(v45142, v45122);
  const v45162 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v45063);
  const v45163 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v45089);
  const v45164 = v45162 ? v45163 : false;
  stdlib.assert(v45164, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35453" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapBForA'
    });
  const v45168 = stdlib.cast("UInt", "UInt256", v45070, false, true);
  const v45170 = stdlib.safeMul256(v45168, v45077);
  const v45171 = stdlib.cast("UInt", "UInt256", v45146, false, true);
  const v45172 = stdlib.cast("UInt", "UInt256", v45149, false, true);
  const v45173 = stdlib.safeMul256(v45171, v45172);
  const v45174 = stdlib.ge256(v45173, v45170);
  stdlib.assert(v45174, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_35453" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapBForA'
    });
  const v45187 = ['Trader_exactSwapBForA0_35453', v45061];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v45187],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:600:24:decimal', stdlib.UInt_max, '0'), v44022], [stdlib.checkedBigNumberify('./index.rsh:600:27:decimal', stdlib.UInt_max, '0'), v43967], [v45062, v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          const v53709 = v53380[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
          const v53710 = v53380[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
          const v53715 = v44053.A;
          const v53716 = v44053.B;
          const v53718 = v44055.protoFee;
          const v53719 = v44055.totFee;
          const v53720 = stdlib.safeSub(v53715, v53710);
          const v53721 = stdlib.cast("UInt", "UInt256", v53720, false, true);
          const v53722 = stdlib.cast("UInt", "UInt256", v53716, false, true);
          const v53723 = stdlib.cast("UInt", "UInt256", v53710, false, true);
          const v53724 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53719);
          const v53725 = stdlib.cast("UInt", "UInt256", v53724, false, true);
          const v53726 = stdlib.safeMul256(v53723, v53725);
          const v53727 = stdlib.safeMul256(v53721, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v53728 = stdlib.safeMul256(v53726, v53722);
          const v53729 = stdlib.safeDiv256(v53728, v53727);
          const v53730 = stdlib.cast("UInt256", "UInt", v53729, false, true);
          const v53731 = stdlib.safeAdd(v53730, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v53734 = stdlib.safeSub(v53709, v53731);
          const v53740 = stdlib.safeMul(v53718, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v53741 = stdlib.safeDiv(v53740, v53719);
          const v53746 = stdlib.safeAdd(v53716, v53731);
          const v53750 = stdlib.safeMuldiv(v53731, v53715, v53746);
          const v53753 = stdlib.safeSub(v53750, v53710);
          const v53755 = stdlib.safeMuldiv(v53753, v53741, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v53757 = stdlib.safeMuldiv(v53731, v53718, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v53761 = stdlib.safeMuldiv(v53757, v53715, v53746);
          const v53762 = stdlib.gt(v53761, v53755);
          const v53763 = [v53757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v53764 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53755];
          const v53765 = v53762 ? v53763 : v53764;
          const v53767 = v53765[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v53768 = v53765[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v53780 = stdlib.safeAdd(v53716, v53709);
          const v53787 = stdlib.safeSub(v53780, v53734);
          const v53791 = stdlib.safeSub(v53720, v53768);
          const v53794 = stdlib.safeSub(v53787, v53767);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v53709,
            kind: 'to',
            tok: v43968
            });
          const v54769 = {
            A: v53791,
            B: v53794
            };
          const v54770 = v44054.A;
          const v54774 = stdlib.safeAdd(v54770, v53768);
          const v54775 = v44054.B;
          const v54779 = stdlib.safeAdd(v54775, v53767);
          const v54780 = {
            A: v54774,
            B: v54779
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43967
            });
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43968
            });
          const v54845 = {
            A: v53710,
            B: v53734
            };
          const v54846 = await txn1.getOutput('Trader_exactSwapBForA', 'v54845', ctc10, v54845);
          
          const v54855 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v53709
            };
          const v54857 = {
            A: v53791,
            B: v53794
            };
          null;
          const v67475 = v44052;
          const v67476 = v54769;
          const v67477 = v54780;
          const v67478 = v44055;
          const v67480 = v44059;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      return;
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      undefined /* setApiDetails */;
      const v53709 = v53380[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
      const v53710 = v53380[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
      const v53712 = v44055.locked;
      const v53713 = v53712 ? false : true;
      stdlib.assert(v53713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapBForA'
        });
      const v53715 = v44053.A;
      const v53716 = v44053.B;
      const v53718 = v44055.protoFee;
      const v53719 = v44055.totFee;
      const v53720 = stdlib.safeSub(v53715, v53710);
      const v53721 = stdlib.cast("UInt", "UInt256", v53720, false, true);
      const v53722 = stdlib.cast("UInt", "UInt256", v53716, false, true);
      const v53723 = stdlib.cast("UInt", "UInt256", v53710, false, true);
      const v53724 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v53719);
      const v53725 = stdlib.cast("UInt", "UInt256", v53724, false, true);
      const v53726 = stdlib.safeMul256(v53723, v53725);
      const v53727 = stdlib.safeMul256(v53721, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v53728 = stdlib.safeMul256(v53726, v53722);
      const v53729 = stdlib.safeDiv256(v53728, v53727);
      const v53730 = stdlib.cast("UInt256", "UInt", v53729, false, true);
      const v53731 = stdlib.safeAdd(v53730, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v53732 = stdlib.ge(v53709, v53731);
      stdlib.assert(v53732, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapBForA'
        });
      const v53734 = stdlib.safeSub(v53709, v53731);
      const v53740 = stdlib.safeMul(v53718, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v53741 = stdlib.safeDiv(v53740, v53719);
      const v53746 = stdlib.safeAdd(v53716, v53731);
      const v53750 = stdlib.safeMuldiv(v53731, v53715, v53746);
      const v53753 = stdlib.safeSub(v53750, v53710);
      const v53755 = stdlib.safeMuldiv(v53753, v53741, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v53757 = stdlib.safeMuldiv(v53731, v53718, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v53761 = stdlib.safeMuldiv(v53757, v53715, v53746);
      const v53762 = stdlib.gt(v53761, v53755);
      const v53763 = [v53757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v53764 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v53755];
      const v53765 = v53762 ? v53763 : v53764;
      const v53767 = v53765[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v53768 = v53765[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v53780 = stdlib.safeAdd(v53716, v53709);
      const v53787 = stdlib.safeSub(v53780, v53734);
      const v53791 = stdlib.safeSub(v53720, v53768);
      const v53794 = stdlib.safeSub(v53787, v53767);
      const v53807 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v53710);
      const v53808 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v53734);
      const v53809 = v53807 ? v53808 : false;
      stdlib.assert(v53809, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapBForA'
        });
      const v53813 = stdlib.cast("UInt", "UInt256", v53715, false, true);
      const v53815 = stdlib.safeMul256(v53813, v53722);
      const v53816 = stdlib.cast("UInt", "UInt256", v53791, false, true);
      const v53817 = stdlib.cast("UInt", "UInt256", v53794, false, true);
      const v53818 = stdlib.safeMul256(v53816, v53817);
      const v53819 = stdlib.ge256(v53818, v53815);
      stdlib.assert(v53819, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapBForA'
        });
      ;
      ;
      ;
      ;
      const v54769 = {
        A: v53791,
        B: v53794
        };
      const v54770 = v44054.A;
      const v54774 = stdlib.safeAdd(v54770, v53768);
      const v54775 = v44054.B;
      const v54779 = stdlib.safeAdd(v54775, v53767);
      const v54780 = {
        A: v54774,
        B: v54779
        };
      ;
      ;
      const v54845 = {
        A: v53710,
        B: v53734
        };
      const v54846 = await txn1.getOutput('Trader_exactSwapBForA', 'v54845', ctc10, v54845);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v53380, v54846), {
          at: './index.rsh:598:11:application',
          fs: ['at ./index.rsh:598:11:application call to [unknown function] (defined at: ./index.rsh:598:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:600:38:function exp)', 'at ./index.rsh:600:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:600:38:application call to [unknown function] (defined at: ./index.rsh:600:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v54855 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v53709
        };
      const v54857 = {
        A: v53791,
        B: v53794
        };
      null;
      const v67475 = v44052;
      const v67476 = v54769;
      const v67477 = v54780;
      const v67478 = v44055;
      const v67480 = v44059;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
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
    Protocol_harvest0_35453: ctc9,
    Provider_deposit0_35453: ctc11,
    Provider_withdraw0_35453: ctc12,
    Trader_exactSwapAForB0_35453: ctc8,
    Trader_exactSwapBForA0_35453: ctc8,
    Trader_swapAForB0_35453: ctc8,
    Trader_swapBForA0_35453: ctc8
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44682 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35453" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v44683 = v44682[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44684 = v44682[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44689 = v44055.locked;
  const v44690 = v44689 ? false : true;
  stdlib.assert(v44690, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35453" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v44692 = v44053.A;
  const v44693 = v44053.B;
  const v44695 = v44055.protoFee;
  const v44696 = v44055.totFee;
  const v44697 = stdlib.cast("UInt", "UInt256", v44693, false, true);
  const v44698 = stdlib.cast("UInt", "UInt256", v44692, false, true);
  const v44699 = stdlib.cast("UInt", "UInt256", v44683, false, true);
  const v44700 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44696);
  const v44701 = stdlib.cast("UInt", "UInt256", v44700, false, true);
  const v44702 = stdlib.safeMul256(v44699, v44701);
  const v44703 = stdlib.safeMul256(v44698, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44704 = stdlib.safeAdd256(v44703, v44702);
  const v44705 = stdlib.safeMul256(v44702, v44697);
  const v44706 = stdlib.safeDiv256(v44705, v44704);
  const v44707 = stdlib.cast("UInt256", "UInt", v44706, false, true);
  const v44713 = stdlib.safeMul(v44695, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44714 = stdlib.safeDiv(v44713, v44696);
  const v44719 = stdlib.safeAdd(v44692, v44683);
  const v44723 = stdlib.safeMuldiv(v44683, v44693, v44719);
  const v44726 = stdlib.safeSub(v44723, v44707);
  const v44728 = stdlib.safeMuldiv(v44726, v44714, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44730 = stdlib.safeMuldiv(v44683, v44695, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44734 = stdlib.safeMuldiv(v44730, v44693, v44719);
  const v44735 = stdlib.gt(v44734, v44728);
  const v44736 = [v44730, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44737 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44728];
  const v44738 = v44735 ? v44736 : v44737;
  const v44740 = v44738[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v44741 = v44738[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v44759 = stdlib.safeSub(v44693, v44707);
  const v44763 = stdlib.safeSub(v44719, v44740);
  const v44766 = stdlib.safeSub(v44759, v44741);
  const v44779 = stdlib.le(v44684, v44707);
  stdlib.assert(v44779, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35453" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v44785 = stdlib.safeMul256(v44698, v44697);
  const v44786 = stdlib.cast("UInt", "UInt256", v44763, false, true);
  const v44787 = stdlib.cast("UInt", "UInt256", v44766, false, true);
  const v44788 = stdlib.safeMul256(v44786, v44787);
  const v44789 = stdlib.ge256(v44788, v44785);
  stdlib.assert(v44789, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_35453" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v44802 = ['Trader_swapAForB0_35453', v44682];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v44802],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:588:24:decimal', stdlib.UInt_max, '0'), v44022], [v44683, v43967], [stdlib.checkedBigNumberify('./index.rsh:588:30:decimal', stdlib.UInt_max, '0'), v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v55667 = v55205[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
          const v55674 = v44053.A;
          const v55675 = v44053.B;
          const v55677 = v44055.protoFee;
          const v55678 = v44055.totFee;
          const v55679 = stdlib.cast("UInt", "UInt256", v55675, false, true);
          const v55680 = stdlib.cast("UInt", "UInt256", v55674, false, true);
          const v55681 = stdlib.cast("UInt", "UInt256", v55667, false, true);
          const v55682 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55678);
          const v55683 = stdlib.cast("UInt", "UInt256", v55682, false, true);
          const v55684 = stdlib.safeMul256(v55681, v55683);
          const v55685 = stdlib.safeMul256(v55680, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v55686 = stdlib.safeAdd256(v55685, v55684);
          const v55687 = stdlib.safeMul256(v55684, v55679);
          const v55688 = stdlib.safeDiv256(v55687, v55686);
          const v55689 = stdlib.cast("UInt256", "UInt", v55688, false, true);
          const v55695 = stdlib.safeMul(v55677, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v55696 = stdlib.safeDiv(v55695, v55678);
          const v55701 = stdlib.safeAdd(v55674, v55667);
          const v55705 = stdlib.safeMuldiv(v55667, v55675, v55701);
          const v55708 = stdlib.safeSub(v55705, v55689);
          const v55710 = stdlib.safeMuldiv(v55708, v55696, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v55712 = stdlib.safeMuldiv(v55667, v55677, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v55716 = stdlib.safeMuldiv(v55712, v55675, v55701);
          const v55717 = stdlib.gt(v55716, v55710);
          const v55718 = [v55712, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v55719 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55710];
          const v55720 = v55717 ? v55718 : v55719;
          const v55722 = v55720[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v55723 = v55720[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v55741 = stdlib.safeSub(v55675, v55689);
          const v55745 = stdlib.safeSub(v55701, v55722);
          const v55748 = stdlib.safeSub(v55741, v55723);
          ;
          ;
          sim_r.txns.push({
            amt: v55667,
            kind: 'to',
            tok: v43967
            });
          ;
          const v56774 = {
            A: v55745,
            B: v55748
            };
          const v56775 = v44054.A;
          const v56779 = stdlib.safeAdd(v56775, v55722);
          const v56780 = v44054.B;
          const v56784 = stdlib.safeAdd(v56780, v55723);
          const v56785 = {
            A: v56779,
            B: v56784
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43968
            });
          const v56839 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v55689
            };
          const v56840 = await txn1.getOutput('Trader_swapAForB', 'v56839', ctc10, v56839);
          
          const v56849 = {
            A: v55667,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v56851 = {
            A: v55745,
            B: v55748
            };
          null;
          const v67595 = v44052;
          const v67596 = v56774;
          const v67597 = v56785;
          const v67598 = v44055;
          const v67600 = v44059;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      return;
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      undefined /* setApiDetails */;
      const v55667 = v55205[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
      const v55668 = v55205[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
      const v55671 = v44055.locked;
      const v55672 = v55671 ? false : true;
      stdlib.assert(v55672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v55674 = v44053.A;
      const v55675 = v44053.B;
      const v55677 = v44055.protoFee;
      const v55678 = v44055.totFee;
      const v55679 = stdlib.cast("UInt", "UInt256", v55675, false, true);
      const v55680 = stdlib.cast("UInt", "UInt256", v55674, false, true);
      const v55681 = stdlib.cast("UInt", "UInt256", v55667, false, true);
      const v55682 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v55678);
      const v55683 = stdlib.cast("UInt", "UInt256", v55682, false, true);
      const v55684 = stdlib.safeMul256(v55681, v55683);
      const v55685 = stdlib.safeMul256(v55680, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v55686 = stdlib.safeAdd256(v55685, v55684);
      const v55687 = stdlib.safeMul256(v55684, v55679);
      const v55688 = stdlib.safeDiv256(v55687, v55686);
      const v55689 = stdlib.cast("UInt256", "UInt", v55688, false, true);
      const v55695 = stdlib.safeMul(v55677, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v55696 = stdlib.safeDiv(v55695, v55678);
      const v55701 = stdlib.safeAdd(v55674, v55667);
      const v55705 = stdlib.safeMuldiv(v55667, v55675, v55701);
      const v55708 = stdlib.safeSub(v55705, v55689);
      const v55710 = stdlib.safeMuldiv(v55708, v55696, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v55712 = stdlib.safeMuldiv(v55667, v55677, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v55716 = stdlib.safeMuldiv(v55712, v55675, v55701);
      const v55717 = stdlib.gt(v55716, v55710);
      const v55718 = [v55712, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v55719 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v55710];
      const v55720 = v55717 ? v55718 : v55719;
      const v55722 = v55720[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v55723 = v55720[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v55741 = stdlib.safeSub(v55675, v55689);
      const v55745 = stdlib.safeSub(v55701, v55722);
      const v55748 = stdlib.safeSub(v55741, v55723);
      const v55761 = stdlib.le(v55668, v55689);
      stdlib.assert(v55761, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v55767 = stdlib.safeMul256(v55680, v55679);
      const v55768 = stdlib.cast("UInt", "UInt256", v55745, false, true);
      const v55769 = stdlib.cast("UInt", "UInt256", v55748, false, true);
      const v55770 = stdlib.safeMul256(v55768, v55769);
      const v55771 = stdlib.ge256(v55770, v55767);
      stdlib.assert(v55771, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      ;
      ;
      ;
      const v56774 = {
        A: v55745,
        B: v55748
        };
      const v56775 = v44054.A;
      const v56779 = stdlib.safeAdd(v56775, v55722);
      const v56780 = v44054.B;
      const v56784 = stdlib.safeAdd(v56780, v55723);
      const v56785 = {
        A: v56779,
        B: v56784
        };
      ;
      const v56839 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v55689
        };
      const v56840 = await txn1.getOutput('Trader_swapAForB', 'v56839', ctc10, v56839);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v55205, v56840), {
          at: './index.rsh:586:11:application',
          fs: ['at ./index.rsh:586:11:application call to [unknown function] (defined at: ./index.rsh:586:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:588:38:function exp)', 'at ./index.rsh:588:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:588:38:application call to [unknown function] (defined at: ./index.rsh:588:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v56849 = {
        A: v55667,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v56851 = {
        A: v55745,
        B: v55748
        };
      null;
      const v67595 = v44052;
      const v67596 = v56774;
      const v67597 = v56785;
      const v67598 = v44055;
      const v67600 = v44059;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
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
    Protocol_harvest0_35453: ctc9,
    Provider_deposit0_35453: ctc11,
    Provider_withdraw0_35453: ctc12,
    Trader_exactSwapAForB0_35453: ctc8,
    Trader_exactSwapBForA0_35453: ctc8,
    Trader_swapAForB0_35453: ctc8,
    Trader_swapBForA0_35453: ctc8
    });
  
  
  const [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v44806 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35453" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v44807 = v44806[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v44808 = v44806[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v44813 = v44055.locked;
  const v44814 = v44813 ? false : true;
  stdlib.assert(v44814, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35453" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v44816 = v44053.A;
  const v44817 = v44053.B;
  const v44819 = v44055.protoFee;
  const v44820 = v44055.totFee;
  const v44821 = stdlib.cast("UInt", "UInt256", v44816, false, true);
  const v44822 = stdlib.cast("UInt", "UInt256", v44817, false, true);
  const v44823 = stdlib.cast("UInt", "UInt256", v44807, false, true);
  const v44824 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v44820);
  const v44825 = stdlib.cast("UInt", "UInt256", v44824, false, true);
  const v44826 = stdlib.safeMul256(v44823, v44825);
  const v44827 = stdlib.safeMul256(v44822, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v44828 = stdlib.safeAdd256(v44827, v44826);
  const v44829 = stdlib.safeMul256(v44826, v44821);
  const v44830 = stdlib.safeDiv256(v44829, v44828);
  const v44831 = stdlib.cast("UInt256", "UInt", v44830, false, true);
  const v44837 = stdlib.safeMul(v44819, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v44838 = stdlib.safeDiv(v44837, v44820);
  const v44843 = stdlib.safeAdd(v44817, v44807);
  const v44847 = stdlib.safeMuldiv(v44807, v44816, v44843);
  const v44850 = stdlib.safeSub(v44847, v44831);
  const v44852 = stdlib.safeMuldiv(v44850, v44838, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v44854 = stdlib.safeMuldiv(v44807, v44819, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v44858 = stdlib.safeMuldiv(v44854, v44816, v44843);
  const v44859 = stdlib.gt(v44858, v44852);
  const v44860 = [v44854, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v44861 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v44852];
  const v44862 = v44859 ? v44860 : v44861;
  const v44864 = v44862[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v44865 = v44862[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v44881 = stdlib.safeSub(v44816, v44831);
  const v44887 = stdlib.safeSub(v44881, v44865);
  const v44890 = stdlib.safeSub(v44843, v44864);
  const v44903 = stdlib.le(v44808, v44831);
  stdlib.assert(v44903, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35453" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v44910 = stdlib.safeMul256(v44821, v44822);
  const v44911 = stdlib.cast("UInt", "UInt256", v44887, false, true);
  const v44912 = stdlib.cast("UInt", "UInt256", v44890, false, true);
  const v44913 = stdlib.safeMul256(v44911, v44912);
  const v44914 = stdlib.ge256(v44913, v44910);
  stdlib.assert(v44914, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_35453" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v44927 = ['Trader_swapBForA0_35453', v44806];
  
  const txn1 = await (ctc.sendrecv({
    args: [v43967, v43968, v43994, v44022, v44049, v44052, v44053, v44054, v44055, v44059, v44927],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:592:24:decimal', stdlib.UInt_max, '0'), v44022], [stdlib.checkedBigNumberify('./index.rsh:592:27:decimal', stdlib.UInt_max, '0'), v43967], [v44807, v43968]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
      
      switch (v46077[0]) {
        case 'Protocol_harvest0_35453': {
          const v46080 = v46077[1];
          
          break;
          }
        case 'Provider_deposit0_35453': {
          const v47905 = v46077[1];
          
          break;
          }
        case 'Provider_withdraw0_35453': {
          const v49730 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_35453': {
          const v51555 = v46077[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_35453': {
          const v53380 = v46077[1];
          
          break;
          }
        case 'Trader_swapAForB0_35453': {
          const v55205 = v46077[1];
          
          break;
          }
        case 'Trader_swapBForA0_35453': {
          const v57030 = v46077[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v57619 = v57030[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
          const v57626 = v44053.A;
          const v57627 = v44053.B;
          const v57629 = v44055.protoFee;
          const v57630 = v44055.totFee;
          const v57631 = stdlib.cast("UInt", "UInt256", v57626, false, true);
          const v57632 = stdlib.cast("UInt", "UInt256", v57627, false, true);
          const v57633 = stdlib.cast("UInt", "UInt256", v57619, false, true);
          const v57634 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57630);
          const v57635 = stdlib.cast("UInt", "UInt256", v57634, false, true);
          const v57636 = stdlib.safeMul256(v57633, v57635);
          const v57637 = stdlib.safeMul256(v57632, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v57638 = stdlib.safeAdd256(v57637, v57636);
          const v57639 = stdlib.safeMul256(v57636, v57631);
          const v57640 = stdlib.safeDiv256(v57639, v57638);
          const v57641 = stdlib.cast("UInt256", "UInt", v57640, false, true);
          const v57647 = stdlib.safeMul(v57629, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v57648 = stdlib.safeDiv(v57647, v57630);
          const v57653 = stdlib.safeAdd(v57627, v57619);
          const v57657 = stdlib.safeMuldiv(v57619, v57626, v57653);
          const v57660 = stdlib.safeSub(v57657, v57641);
          const v57662 = stdlib.safeMuldiv(v57660, v57648, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v57664 = stdlib.safeMuldiv(v57619, v57629, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v57668 = stdlib.safeMuldiv(v57664, v57626, v57653);
          const v57669 = stdlib.gt(v57668, v57662);
          const v57670 = [v57664, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v57671 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57662];
          const v57672 = v57669 ? v57670 : v57671;
          const v57674 = v57672[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v57675 = v57672[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v57691 = stdlib.safeSub(v57626, v57641);
          const v57697 = stdlib.safeSub(v57691, v57675);
          const v57700 = stdlib.safeSub(v57653, v57674);
          ;
          ;
          ;
          sim_r.txns.push({
            amt: v57619,
            kind: 'to',
            tok: v43968
            });
          const v58768 = {
            A: v57697,
            B: v57700
            };
          const v58769 = v44054.A;
          const v58773 = stdlib.safeAdd(v58769, v57675);
          const v58774 = v44054.B;
          const v58778 = stdlib.safeAdd(v58774, v57674);
          const v58779 = {
            A: v58773,
            B: v58778
            };
          sim_r.txns.push({
            kind: 'from',
            to: v46076,
            tok: v43967
            });
          const v58834 = {
            A: v57641,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v58835 = await txn1.getOutput('Trader_swapBForA', 'v58834', ctc10, v58834);
          
          const v58844 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v57619
            };
          const v58846 = {
            A: v57697,
            B: v57700
            };
          null;
          const v67715 = v44052;
          const v67716 = v58768;
          const v67717 = v58779;
          const v67718 = v44055;
          const v67720 = v44059;
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
  const {data: [v46077], secs: v46079, time: v46078, didSend: v41057, from: v46076 } = txn1;
  switch (v46077[0]) {
    case 'Protocol_harvest0_35453': {
      const v46080 = v46077[1];
      return;
      break;
      }
    case 'Provider_deposit0_35453': {
      const v47905 = v46077[1];
      return;
      break;
      }
    case 'Provider_withdraw0_35453': {
      const v49730 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_35453': {
      const v51555 = v46077[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_35453': {
      const v53380 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_35453': {
      const v55205 = v46077[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_35453': {
      const v57030 = v46077[1];
      undefined /* setApiDetails */;
      const v57619 = v57030[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
      const v57620 = v57030[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
      const v57623 = v44055.locked;
      const v57624 = v57623 ? false : true;
      stdlib.assert(v57624, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v57626 = v44053.A;
      const v57627 = v44053.B;
      const v57629 = v44055.protoFee;
      const v57630 = v44055.totFee;
      const v57631 = stdlib.cast("UInt", "UInt256", v57626, false, true);
      const v57632 = stdlib.cast("UInt", "UInt256", v57627, false, true);
      const v57633 = stdlib.cast("UInt", "UInt256", v57619, false, true);
      const v57634 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v57630);
      const v57635 = stdlib.cast("UInt", "UInt256", v57634, false, true);
      const v57636 = stdlib.safeMul256(v57633, v57635);
      const v57637 = stdlib.safeMul256(v57632, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v57638 = stdlib.safeAdd256(v57637, v57636);
      const v57639 = stdlib.safeMul256(v57636, v57631);
      const v57640 = stdlib.safeDiv256(v57639, v57638);
      const v57641 = stdlib.cast("UInt256", "UInt", v57640, false, true);
      const v57647 = stdlib.safeMul(v57629, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v57648 = stdlib.safeDiv(v57647, v57630);
      const v57653 = stdlib.safeAdd(v57627, v57619);
      const v57657 = stdlib.safeMuldiv(v57619, v57626, v57653);
      const v57660 = stdlib.safeSub(v57657, v57641);
      const v57662 = stdlib.safeMuldiv(v57660, v57648, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v57664 = stdlib.safeMuldiv(v57619, v57629, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v57668 = stdlib.safeMuldiv(v57664, v57626, v57653);
      const v57669 = stdlib.gt(v57668, v57662);
      const v57670 = [v57664, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v57671 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v57662];
      const v57672 = v57669 ? v57670 : v57671;
      const v57674 = v57672[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v57675 = v57672[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v57691 = stdlib.safeSub(v57626, v57641);
      const v57697 = stdlib.safeSub(v57691, v57675);
      const v57700 = stdlib.safeSub(v57653, v57674);
      const v57713 = stdlib.le(v57620, v57641);
      stdlib.assert(v57713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v57720 = stdlib.safeMul256(v57631, v57632);
      const v57721 = stdlib.cast("UInt", "UInt256", v57697, false, true);
      const v57722 = stdlib.cast("UInt", "UInt256", v57700, false, true);
      const v57723 = stdlib.safeMul256(v57721, v57722);
      const v57724 = stdlib.ge256(v57723, v57720);
      stdlib.assert(v57724, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:45:application call to [unknown function] (defined at: ./index.rsh:481:45:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      ;
      ;
      ;
      const v58768 = {
        A: v57697,
        B: v57700
        };
      const v58769 = v44054.A;
      const v58773 = stdlib.safeAdd(v58769, v57675);
      const v58774 = v44054.B;
      const v58778 = stdlib.safeAdd(v58774, v57674);
      const v58779 = {
        A: v58773,
        B: v58778
        };
      ;
      const v58834 = {
        A: v57641,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v58835 = await txn1.getOutput('Trader_swapBForA', 'v58834', ctc10, v58834);
      if (v41057) {
        stdlib.protect(ctc1, await interact.out(v57030, v58835), {
          at: './index.rsh:590:11:application',
          fs: ['at ./index.rsh:590:11:application call to [unknown function] (defined at: ./index.rsh:590:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:592:38:function exp)', 'at ./index.rsh:592:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:592:38:application call to [unknown function] (defined at: ./index.rsh:592:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v58844 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v57619
        };
      const v58846 = {
        A: v57697,
        B: v57700
        };
      null;
      const v67715 = v44052;
      const v67716 = v58768;
      const v67717 = v58779;
      const v67718 = v44055;
      const v67720 = v44059;
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
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAeABgIBGSQTgEQQAIDSQagjQa14PDBB9mUrKAK2YG8kQ7v7abtD0G3/er+DLj3keUHmeujhwretrjbBIHH87MF3v6o9Abg8+yqAu6I6cQCGQX///////////8BJgUBAQEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQAAQ81lT6IjUAMRhBFbUrZEkiWzUBJFs1AjYaABdJQQe0IjUEIQY1BkkhDgxAA5xJIQ8MQANLSSEQDEACJEkhEQxAAgMhERJENAFJJQxAAPslEkQ2GgEXNf8pZChkUEk1A0lXQRA1/ldhOUk1/Vc4ARcURDT+Ils1/DT+JFs1+zT9Ils1+jT9IQdbNfkjrzT8FlA1+COvNPsWUDX3I680/xZQI68hBTT5CRZQo4gVbEk19jT4o4gVYzT3KqOIFVw09qCIFVaiiBVSSZMhCA5EI1s19TT7NP8INfQ0/zT8HTT0lzT1CTT6IQQLNPkKHSEElzXzNP80+h0hBZc18iSvNPMWUDTyFiSvUDTyNPwdNPSXNPMNTTXxIjT1DkQjrzT8NPUJNPEkWwkWUCOvNPQ08SJbCRZQo4gU4jT4NPejiBTap0Q09RY1B0IUcCEJEkQ2GgEXNf8pZChkUEk1A0lXMRA1/ldROUk1/Vc4ARcURDT+Ils1/DT+JFs1+zT9Ils1+jT9IQdbNfkjrzT8FlA1+COvNPsWUDX3I680/xZQI68hBTT5CRZQo4gUcEk19jT4o4gUZzT3KqOIFGA09qCIFFqiiBRWSZMhCA5EI1s19TT7NP8INfQ0/zT8HTT0lzT1CTT6IQQLNPkKHSEElzXzNP80+h0hBZc18iSvNPMWUDTyFiSvUDTyNPwdNPSXNPMNTTXxIjT1DkQjrzT8NPUJNPEkWwkWUCOvNPQ08SJbCRZQo4gT5jT4NPejiBPep0Q09RY1B0ITdCEQEkQ2GgE2GgJQNf+AAQI0/1AhEq9QQgWTSSETDEAAGiETEkQ2GgE2GgJQNf+AAQQ0/1AhC69QQgVyIQ8SRDQBSSUMQAB5JRJEKWQoZFBJNQNJSlcxEDX/V0EQNf5XURA1/VdhOTX8NANXGQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cICFA0A1cQCVA1B0IStCEJEkQpZChkUEk1A0lKVyEQNf9XMRA1/ldBEDX9V1E5Nfw0A1cZCDT/VwAINP9XCAhQUDT+VwAINP5XCAhQUDT8VwAINPxXCAhQNPxXEAhQNPxXGCBQNPxXOAFQUDT9VwAINP1XCAhQUDQDVwgIUDQDVxAJUDUHQhI6SSEUDEAAO0khFQxAABohFRJENhoBNhoCUDX/gAEFNP9QIQuvUEIESyEUEkQ2GgE2GgJQNf+AAQY0/1AhC69QQgQxIQ4SRCtCDqNJIRYMQAL4SSEXDEACJEkhGAxAABohGBJENhoBNhoCUDX/gAEDNP9QIQuvUEID+iEXEkQ0AUklDEAA+yUSRDYaARc1/ylkKGRQSTUDSVdBEDX+V2E5STX9VzgBFxRENP4iWzX8NP4kWzX7NP0iWzX6NP0hB1s1+SOvNPsWUDX4I680/BZQNfcjrzT/FlAjryEFNPkJFlCjiBG2STX2NPijiBGtNPcqo4gRpjT2oIgRoKKIEZxJkyEIDkQjWzX1NPw0/wg19DT/NPsdNPSXNPUJNPohBAs0+QodIQSXNfM0/zT6HSEFlzXyJK808xZQNPIWJK9QNPI0+x009Jc08w1NNfEiNPUORCOvNPQ08SJbCRZQI680+zT1CTTxJFsJFlCjiBEsNPc0+KOIESSnRDT1FjUHQhC6IQkSRDYaARc1/ylkKGRQSTUDSVcxEDX+V1E5STX9VzgBFxRENP4iWzX8NP4kWzX7NP0iWzX6NP0hB1s1+SOvNPsWUDX4I680/BZQNfcjrzT/FlAjryEFNPkJFlCjiBC6STX2NPijiBCxNPcqo4gQqjT2oIgQpKKIEKBJkyEIDkQjWzX1NPw0/wg19DT/NPsdNPSXNPUJNPohBAs0+QodIQSXNfM0/zT6HSEFlzXyJK808xZQNPIWJK9QNPI0+x009Jc08w1NNfEiNPUORCOvNPQ08SJbCRZQI680+zT1CTTxJFsJFlCjiBAwNPc0+KOIECinRDT1FjUHQg++IRYSRDQBSSUMQABgJRJENhoBFzX/KWQoZFBJNQNXQRA1/iOvNP8WUCOvIQU0A1dhOSEHWwgWUKOID+MjrzT+VwgIUKOID9cjrzT+Ils0/wkWUCqjiA/HoogPw0mTIQgORCNbIQYIFjUHQg9SIQkSRDYaARc1/ylkKGRQSTUDVzEQNf4jrzT/FlAjryEFNANXUTkhB1sIFlCjiA+CI680/lcICFCjiA92I680/iJbNP8JFlAqo4gPZqKID2JJkyEIDkQjWyEGCBY1B0IO8UkhGQxAADNJIRoMQAAUIRoSRDYaATYaAlA1/yk0/1BCAQghGRJENhoBNhoCUDX/KDT/UCESr1BCAPCBm4LoyQESRDQBSSUMQABgJRJENhoBFzX/KWQoZFBJNQNXQRA1/iOvNP8WUCOvIQU0A1dhOSEHWwgWUKOIDtgjrzT+VwAIUKOIDswjrzT+JFs0/wkWUCqjiA68oogOuEmTIQgORCNbIQYIFjUHQg5HIQkSRDYaARc1/ylkKGRQSTUDVzEQNf4jrzT/FlAjryEFNANXUTkhB1sIFlCjiA53I680/lcACFCjiA5rI680/iRbNP8JFlAqo4gOW6KIDldJkyEIDkQjWyEGCBY1B0IN5jYaAhc1BDYaAzYaARdJIQkMQAsCSSEKDEAKfSEKEkQlNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSiJbNf8kWzX+VxAJNf0hG1s1/FchEDX7VzEQNfpXQRA1+VdREDX4V2E5NfeBmgFbNfZJNQU19YAER2hHHzT1ULA09SJVSSEKDEAGP0khHAxAAvBJIQwMQAF2IQwSRDT1VwEQNfQ09CJbNfM091c4ARcURDT5Ils18jT5JFs18TT3Ils18DT3IQdbNe8jrzTyFlA17iOvNPEWUDXtI6808xZQI68hBTTvCRZQo4gNXEk17DTuo4gNUzTtKqOIDUw07KCIDUaiiA1CSZMhCA5EI1s16zTxNPMINeo08zTyHTTqlzTrCTTwIQQLNO8KHSEElzXpNPM08B0hBZc16CSvNOkWUDToFiSvUDToNPIdNOqXNOkNTUk15yJbNeY05yRbNeU08jTrCTTlCTXkNOo05gk14zT0JFs06w5EI6805BZQI6804xZQo4gMwDTuNO2jiAy4p0Q08zT+iAyPsSKyATTrshIlshAxALIUNP+yEbM06xYkr1A14oAIAAAAAAAA5dI04lCwNOI1BycEMQBQJK808xZQUDTiUDTkFjTjFlBQsDT/NP40/TT8NPsiNPo05BY04xZQNPgiWzTlCBY0+CRbNOYIFlA09zIGNPZCCwVINPVXARA19DT0Ils18zT3VzgBFxRENPkiWzXyNPkkWzXxNPciWzXwNPchB1s17yOvNPEWUDXuI6808hZQNe0jrzTzFlAjryEFNO8JFlCjiAvpSTXsNO6jiAvgNO0qo4gL2TTsoIgL06KIC89JkyEIDkQjWzXrNPI08wg16jTzNPEdNOqXNOsJNPAhBAs07wodIQSXNek08zTwHSEFlzXoJK806RZQNOgWJK9QNOg08R006pc06Q1NSTXnIls15jTnJFs15TTqNOYJNeQ08TTrCTTlCTXjNPQkWzTrDkQjrzTkFlAjrzTjFlCjiAtNNO007qOIC0WnRDTzNP+ICxyxIrIBNOuyEiWyEDEAshQ0/rIRsySvNOsWUDXigAgAAAAAAADeBzTiULA04jUHJwQxAFA08xYkr1BQNOJQNOQWNOMWUFCwNP80/jT9NPw0+yI0+jTkFjTjFlA0+CJbNOYIFjT4JFs05QgWUDT3MgY09kIJkkklDEABoUg09VcBEDX0NPQiWzXzNPQkWzXyNPdXOAEXFEQ0+SJbNfE0+SRbNfA09yJbNe809yEHWzXuNPE08gk17SOvNPAWUDXsI6808hZQI68hBTTuCBZQo4gKazTso4gKZSOvNO0WUCqjiApaoogKVkmTIQgORCNbIQYINes08zTrD0Q08zTrCTXqNPA06wg16TTrNPEdNOmXNPIJNO8hBAs07godIQSXNeg06zTvHSEFlzXnJK806BZQNOcWJK9QNOc08R006Zc06A1NSTXmIls15TTmJFs15DTtNOQJNeM08DTzCDTqCTTlCTXiIjTyDiI06g4QRCOvNOMWUCOvNOIWUKOICb8jrzTxFlA07KOICbOnRDTzNP6ICYqxIrIBNPKyEiWyEDEAshQ0/7IRs7EisgE06rISJbIQMQCyFDT+shGzNPIWNOoWUDXhgAgAAAAAAADWPTThULA04TUHJwQxAFAkrzTzFlBQNOFQNOMWNOIWUFCwNP80/jT9NPw0+yI0+jTjFjTiFlA0+CJbNOQIFjT4JFs05QgWUDT3MgY09kIH60g09VcBEDX0NPQiWzXzNPQkWzXyNPdXOAEXFEQ0+SJbNfE0+SRbNfA09yJbNe809yEHWzXuNPA08gk17SOvNPEWUDXsI6808hZQI68hBTTuCBZQo4gIyjTso4gIxCOvNO0WUCqjiAi5oogItUmTIQgORCNbIQYINes08zTrD0Q08zTrCTXqNPE06wg16TTrNPAdNOmXNPIJNO8hBAs07godIQSXNeg06zTvHSEFlzXnJK806BZQNOcWJK9QNOc08B006Zc06A1NSTXmIls15TTmJFs15DTxNPMINOoJNOUJNeM07TTkCTXiIjTqDiI08g4QRCOvNOMWUCOvNOIWUKOICB407COvNPAWUKOICBKnRDTzNP+IB+mxIrIBNOqyEiWyEDEAshQ0/7IRs7EisgE08rISJbIQMQCyFDT+shGzNOoWNPIWUDXhgAgAAAAAAADOZDThULA04TUHJwQxAFA08xYkr1BQNOFQNOMWNOIWUFCwNP80/jT9NPw0+yI0+jTjFjTiFlA0+CJbNOUIFjT4JFs05AgWUDT3MgY09kIGSkkhBgxAAnFJIQkMQAD4SDT1VwEYNfQ09CJbNfM09FcIEDXyNPokWzXxNPkiWzXwNPkkWzXvNPM08B008Zc17jTzNO8dNPGXNe008iJbNO4ORDTyJFs07Q5ENPM0/IgHADT6Ils08wg17DTxNPMJNes08DTuCTXqNO807Qk16bEisgE07rISJbIQMQCyFDT/shGzsSKyATTtshIlshAxALIUNP6yEbM07hY07RZQNeiACAAAAAAAAMaMNOhQsDToNQeABBzUrl8xAFA08xZQNOhQNOoWNOkWUFA07BY06xZQULA0/zT+NP00/DT7IjTsFjTrFlA06hY06RZQNPg09zIGNPZCBURINPVXARg19DT0VwAQNfM09CEHWzXyNPdXOAEXFEQ08yJbNfA08yRbNe80+iRbSTXuIhJJNe1BACEjrzTwFlAjrzTvFlCjiAYxlogGLUmTIQgORCNbNfFCACI08DTuHTT5IluXNew07zTuHTT5JFuXSTXrNOxJNOsMTTXxNPI08Q5ENPA0/4gF0TTvNP6IBco07UEAISOvNPAWUCOvNO8WUKOIBdWWiAXRSZMhCA5EI1s17EIAIjTwNO4dNPkiW5c16zTvNO4dNPkkW5dJNeo060k06gxNNew08jTsDkQ08DT5IlsINes07zT5JFsINeo0+iJbNOwJNek07jTsCDXosSKyATTsshIlshAxALIUNPyyEbOACAAAAAAAAL6nNOwWULA07BY1B4AE3hsp9TEAUDTwFjTvFlBQNOwWUDTrFjTqFlBQNOkWNOgWUFCwNP80/jT9NPw0+yI06RY06BZQNOsWNOoWUDT4NPcyBjT2QgPSSDT1VwFZNfQ09FcgOTXzMQA091cYIBJENPMiWzXyNPMkWzXxNPMhB1s18DTyIQQMNPEhBAwQSTXvQQANNPA08TTyCBI17kIAAyI17jTwIQQMNe008CINNew07jTtEDTsEEQ09FcAIDXrNO9BAA008DTxNPIIEjXqQgADIjXqNOo07RA07BBENPNXOAEXNekyCmAyCngJNPYJNeg0+CJbNec0+CRbNeaxIrIBNOiyCCEGshA067IHs7EisgE057ISJbIQNOuyFDT/shGzsSKyATTmshIlshA067IUNP6yEbOACAAAAAAAALdeNOcWNOYWUDToFlBQsDTnFjTmFlA06BZQNQeABFatdTw08hY08RZQNPAWUDTzVxggUDTpFlEHCFBQsDT/NP40/TT8NPs06TT6JFsiEhA0+SJbIhI0+SRbIhIQEDT6NPk0+zTzMgY06DT2CDToCUICeEghCTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDIRtbNf9JNQU1/oAEJTy31zT+ULCACAAAAAAAAOdMsCs1B7EisgEhCrIQNP+yIbOxIrIBIrISJbIQMgmyFTIKshQ0AyRbshGzsSKyASKyEiWyEDIJshUyCrIUNAMiW7IRs0IChSISRCENiALuIjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8kWzX+VxAgNf1XMAg1/IE4WzX7gASmZOJhNP8WUDT+FlA0/VA0/FA0+xZQsDT+NP8TRCEdIQUNRDT/NP4TRCENiAKRsSKyASKyEiWyEDIKshQ0/7IRsyENiAJ5sSKyASKyEiWyEDIKshQ0/rIRsyg0/xZQNfqABWFwcElENPsWUAM1+DIKeDX3MgpgNPcJFjX2sSKyASEMshA0+7IYgARJWgposhoxGBayGjT6sho0/hayGrMyCmA09wk09hcJFrcAPlcEAFA1+YAIAAAAAAAAq9s0+VCwNPlJNfgiWzX3NPhXCDlJNfYiWzX1NPYkWzX0NPYhB1s18zT1IQQMNPQhBAwQQQANNPM09DT1CBI18kIAAyI18jTyNPMhBAwQNPMiDRBEIjT3EkQhDYgBprEisgEhCrIQIR2yIiEMsiM0/LIlNP2yJoFgr7InMgOyKDIKsimztDw18YAIAAAAAAAAq/U08RZQsDTxNfAiNe8iNe40/xY0/hZQJDTuCyRYFzXtNPA07RI070lNNe807iEGCEk17iEJDED/1zTvFEQ08DT/EzTwNP4TEEQhB6817jT/NP40+jTwNO4igBD//////////wAAAAAAAAAANO5JNPYyBjT3QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPlBADQ09BY09RZQNPZQNPcWUDT6UDT7UDT8UDT9UClLAVcAf2coSwFXfwtnSCEJNQEyBjUCQgBXNPQWNPUWUDT2UDT3FlA0+FA0+lA0+1A0/FA0/VA0/xZQKUsBVwB/ZyhLAVd/I2dIJTUBMgY1AkIAHTEZIRwSRLEisgEisgghBrIQMgmyCTIKsgezQgAFMRkiEkQrNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkhBggyBBJEMRYSRCEGQzEZIhJEQv/dIjE0EkQhCjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+sNABJSiEGCDUAOAcyChJEOBAhBhJEOAgSRIk0AElKSSEGCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiUkVgSBMCa9MUIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 162,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:425:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T15","name":"v67799","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"_Protocol_harvest0_35453","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"_Provider_withdraw0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapAForB0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapBForA0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapAForB0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapBForA0_35453","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v43995","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v44021","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"v0","type":"tuple"}],"name":"_reach_oe_v46942","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v48807","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v50828","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v52836","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v54845","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v56839","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v58834","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v59212","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"internalType":"address payable","name":"liquidityToken","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"lptBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"poolBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"protoInfo","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"protoBals","type":"tuple"},{"internalType":"address payable","name":"tokB","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"tokA","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Protocol_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v67756","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"v67757","type":"tuple"}],"name":"Protocol_harvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v67762","type":"tuple"},{"internalType":"uint256","name":"v67763","type":"uint256"}],"name":"Provider_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67768","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v67769","type":"tuple"}],"name":"Provider_withdraw","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67774","type":"uint256"},{"internalType":"uint256","name":"v67775","type":"uint256"}],"name":"Trader_exactSwapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67780","type":"uint256"},{"internalType":"uint256","name":"v67781","type":"uint256"}],"name":"Trader_exactSwapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67786","type":"uint256"},{"internalType":"uint256","name":"v67787","type":"uint256"}],"name":"Trader_swapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67792","type":"uint256"},{"internalType":"uint256","name":"v67793","type":"uint256"}],"name":"Trader_swapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T12","name":"v67808","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"_Protocol_harvest0_35453","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"_Provider_withdraw0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapAForB0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapBForA0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapAForB0_35453","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapBForA0_35453","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"internalType":"struct T14","name":"v67810","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67733","type":"uint256"}],"name":"v_exactSwapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67738","type":"uint256"}],"name":"v_exactSwapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67743","type":"uint256"}],"name":"v_swapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v67748","type":"uint256"}],"name":"v_swapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060405260c0620084d180380380916200001a82620000be565b60803912620000a2576040516200003181620000f4565b608051815262000040620001ba565b60208201526200004f620001d1565b604082015260e051606082015261010051906001600160c01b031982168203620000a2576200009291608082015262000087620001e8565b60a082015262000335565b604051615b5b9081620019748239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000e557604052565b620000ef620000a7565b604052565b60c081019081106001600160401b03821117620000e557604052565b604081019081106001600160401b03821117620000e557604052565b60a081019081106001600160401b03821117620000e557604052565b601f909101601f19168101906001600160401b03821190821017620000e557604052565b604051906101c082016001600160401b03811183821017620000e557604052565b6040519061028082016001600160401b03811183821017620000e557604052565b6001600160a01b031690565b60a051906001600160a01b0382168203620000a257565b60c051906001600160a01b0382168203620000a257565b61012051906001600160a01b0382168203620000a257565b604051906200020f8262000110565b60006020838281520152565b604051906200022a826200012c565b60006080838281528260208201528260408201528260608201520152565b60405190606082016001600160401b0381118382101762000279575b60405260006040838281528260208201520152565b62000283620000a7565b62000264565b6040519060e082016001600160401b0381118382101762000301575b6040528160008152620002b762000200565b6020820152620002c662000200565b6040820152620002d56200021b565b6060820152620002e462000200565b6080820152600060a082015260c0620002fc62000248565b910152565b6200030b620000a7565b620002a5565b60405190620003208262000110565b60006020836200032f62000200565b81520152565b620003e7906000808055436003556101a0620003506200016c565b8281526200035d62000289565b60208201528260408201526200037262000311565b60608201528260808201526200038762000200565b60a08201526200039662000200565b60c0820152620003a562000200565b60e0820152620003b462000200565b610100820152620003c462000200565b610120820152826101408201528261016082015282610180820152015262000878565b565b60405190620003f88262000110565b81600081526020620002fc6200021b565b60405190620004188262000110565b6040368337565b620004296200018d565b9060008083526200043962000248565b602084015262000448620003e9565b604084015262000457620003e9565b60608401528060808401526200046c62000200565b60a08401526200047b62000248565b60c08401528060e084015280610100840152806101208401526200049e62000409565b6101408401528061016084015280610180840152806101a0840152620004c362000200565b6101c0840152806101e0840152806102008401528061022084015280610240840152610260830152565b6001600160a01b039091169052565b80519060028210156200052c579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03918216815260a081019493909260809291906200056c906020860190620004fc565b16910152565b3d15620005c1573d906001600160401b038211620005b1575b60405191620005a5601f8201601f19166020018462000148565b82523d6000602084013e565b620005bb620000a7565b6200058b565b606090565b908160a0910312620000a25760405190620005e1826200012c565b8051825260208082015190830152604080820151908301526060810151906001600160a01b0382168203620000a257608091606084015201518015158103620000a257608082015290565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260209182015160c082019392620003e79201906200062c565b92919060405193602085015260408401526060830152606082526080820182811060018060401b03821117620000e557604052565b919082519283825260005b848110620006e3575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201620006c1565b94936200073e6012946200072f60a095620007206200074d9660c08c5260c08c0190620006b6565b908a820360208c0152620006b6565b9088820360408a0152620006b6565b908682036060880152620006b6565b6000196080860152930152565b506040513d6000823e3d90fd5b906002811015620007795760051b0190565b634e487b7160e01b600052603260045260246000fd5b50634e487b7160e01b600052601160045260246000fd5b6001906000198114620007b7570190565b620007c16200078f565b0190565b6040519061018082016001600160401b0381118382101762000868575b60405281610160600091828152826020820152620007ff62000248565b60408201528260608201526200081462000200565b60808201528260a08201526200082962000200565b60c08201526200083862000200565b60e08201526200084762000200565b610100820152620008576200021b565b610120820152826101408201520152565b62000872620000a7565b620007e2565b90620008836200041f565b91620008a36200089d6200089960045460ff1690565b1590565b6200112f565b6040805133815282516020808301919091528301516001600160a01b03908116828401529183015182166060808301919091528301516080808301919091528301516001600160c01b03191660a08083019190915283015190911660c08201527f7f4b3c377d6ad2214bfab0494aa14eb27c6d5d0ccb6c3de8992ad8f4f9684ea29060e090a16200094181518015908115620010fb575b5062001150565b620009506040820151620001ae565b62000969620009636020840151620001ae565b620001ae565b6001600160a01b0390911603620010ef5762000986600062001171565b620009956020820151620001ae565b620009a8620009636040840151620001ae565b6001600160a01b0390911603620010e357620009c5600062001192565b620009d13415620011b3565b6020830151600190526020810151620009ea90620001ae565b602084015160400190620009fe91620004ed565b80602081015162000a0f90620001ae565b3062000a1b91620012fc565b610200850190815230604083015162000a3490620001ae565b9062000a4091620012fc565b906102408601918252476101e0870190815262000a65600160ff196004541617600455565b602087015192604085015162000a7b90620001ae565b60405180956020820192633b02a71760e01b84523091602484019262000aa19362000542565b0394601f1995868101825262000ab8908262000148565b60a087015162000ac890620001ae565b62000ad390620001ae565b90515a9260008094938194f19262000aea62000572565b938462000af79162001298565b5062000b0860ff1960045416600455565b30602087015162000b1990620001ae565b9062000b2591620012fc565b90518082036102208b015262000b3c9114620011d4565b30604086015162000b4d90620001ae565b9062000b5991620012fc565b90518082036102608a015262000b709114620011f5565b479051900390604087019182515280518101602001906020019062000b9591620005c6565b8151602001525180606087015260405162000bb281928262000664565b037f60825af1d99b2a94ff827a2ec5b8e1af7d2c1fcb7374787d74da8459d30769ad91a184606081015160200151805160641160009060001462000d917ff4620cfd168551a109740d305567490148727ba9ef35a9b974addaddf76777e69662000d9e62000e2f976000602060a062000e159a62000d5a9a62000d209a62000dcb9a620010db5750836064910151105b8414620010cf5762000c74836060830151015162000c6c6040820151918681015190519062001108565b146080830152565b6080810151151584908514620010c957506064604084606084015101510151105b84908514620010be575062000cb7604084606084015101510151151562001214565b62000cc86060820151511562001235565b831982820151520151015262000d7c8d62000d6762000d3c608060e060c085019460008651526000602087510152600060408751015201976000895262000d2d60608201516040519d8e916020830160209181520190565b038881018e528d62000148565b01516001600160c01b03191690565b6040516001600160c01b03199091166020820152998a906028820190565b038481018b528a62000148565b51805190604060208201519101519162000681565b92516040519485916020830160209181520190565b0390810184528362000148565b604051948594611002808701906001600160401b03821188831017620010ae575b620074cf8839620006f8565b03906000f080156200109e575b61010087019062000df3906001600160a01b031682620004ed565b62000e0e62000e038251620001ae565b6101208901620004ed565b51620001ae565b6040516001600160a01b0390911681529081906020820190565b0390a162000e5162000e456020830151620001ae565b610140850151620004ed565b62000e7362000e646040830151620001ae565b610140850151602001620004ed565b600061018084015260005b6002811062001002575082606062000e9f610180620003e795960151151590565b151561016083810182905292901562000ff65762000ebe600062001256565b62000ece610120820151620001ae565b62000ee1620009636020870151620001ae565b6000916001600160a01b031690810362000fc557505062000f03600062001277565b6101c081016000815152600060208251015262000f5662000f4c604062000f29620007c5565b9762000f4462000f3d6020830151620001ae565b8a620004ed565b0151620001ae565b60208701620004ed565b6020820151604086015262000f7d62000f74610120840151620001ae565b848701620004ed565b80516080860152600060a086015260a082015160c0860152805160e08601525161010085015260208282015101516101208501524361014085015201515190820152620017ba565b62000fd8620009636040880151620001ae565b0362000fe95762000f039062001277565b5062000f03600162001277565b62000ebe600162001256565b80620010386200102d620010206200105d9461014089015162000767565b516001600160a01b031690565b6101a08701620004ed565b61018085015115158015620010635762001057905b1515610180870152565b620007a6565b62000e7e565b506200105762001078610120870151620001ae565b6200108c620009636101a0890151620001ae565b6001600160a01b03909116146200104d565b620010a86200075a565b62000dd8565b620010b8620000a7565b62000dbf565b62000cb79062001214565b62000c95565b83608082015262000c74565b905062000c42565b620009c5600162001192565b62000986600162001171565b905060015414386200093a565b91908201918281116200111f575b8210620000a257565b620011296200078f565b62001116565b156200113757565b60405163100960cb60e01b8152601d6004820152602490fd5b156200115857565b60405163100960cb60e01b8152601e6004820152602490fd5b156200117957565b60405163100960cb60e01b8152601f6004820152602490fd5b156200119a57565b60405163100960cb60e01b815260216004820152602490fd5b15620011bb57565b60405163100960cb60e01b815260226004820152602490fd5b15620011dc57565b60405163100960cb60e01b815260236004820152602490fd5b15620011fd57565b602460405163100960cb60e01b8152816004820152fd5b156200121c57565b60405163100960cb60e01b815260266004820152602490fd5b156200123d57565b60405163100960cb60e01b815260276004820152602490fd5b156200125e57565b60405163100960cb60e01b815260286004820152602490fd5b156200127f57565b60405163100960cb60e01b815260296004820152602490fd5b15620012a15790565b805115620012b157805190602001fd5b60405163100960cb60e01b815260256004820152602490fd5b15620012d35790565b805115620012e357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b6040516370a0823160e01b602082019081526001600160a01b039384166024808401919091528252600093849392849190606081016001600160401b0381118282101762001379575b6040525193165af1620013636200135b62000572565b8092620012ca565b50602081805181010312620000a2576020015190565b62001383620000a7565b62001345565b6040519061014082016001600160401b038111838210176200141d575b604052600061012083828152826020820152620013c262000248565b6040820152826060820152620013d762000200565b6080820152620013e662000200565b60a0820152620013f562000200565b60c08201526200140462000200565b60e0820152620014136200021b565b6101008201520152565b62001427620000a7565b620013a6565b60208091805184520151910152565b81516001600160a01b031681526102808101929161026090610120906020818101516001600160a01b0316908501526200147f60408201516040860190620004fc565b60608101516001600160a01b031660a0850152620014a6608082015160c08601906200142d565b620014fa60a0820151620014c161010091828801906200142d565b620014d660c08401516101408801906200142d565b620014eb60e08401516101808801906200142d565b8201516101c08601906200062c565b0151910152565b90600182811c9216801562001533575b60208310146200151d57565b634e487b7160e01b600052602260045260246000fd5b91607f169162001511565b601f81116200154b575050565b6000906002825260208220906020601f850160051c830194106200158c575b601f0160051c01915b8281106200158057505050565b81815560010162001573565b90925082906200156a565b80519091906001600160401b0381116200168b575b620015c481620015be60025462001501565b6200153e565b602080601f8311600114620016035750819293600092620015f7575b50508160011b916000199060031b1c191617600255565b015190503880620015e0565b6002600052601f198316949091907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace926000905b8782106200167257505083600195961062001658575b505050811b01600255565b015160001960f88460031b161c191690553880806200164d565b8060018596829496860151815501950193019062001637565b62001695620000a7565b620015ac565b6040519061010082016001600160401b0381118382101762001716575b604052816000815260006020820152620016d162000248565b604082015260006060820152620016e762000200565b6080820152620016f662000200565b60a08201526200170562000200565b60c082015260e0620002fc6200021b565b62001720620000a7565b620016b8565b620003e79092919261018060e061022083019560018060a01b038082511685528060208301511660208601526200176660408301516040870190620004fc565b60608201511660a085015262001785608082015160c08601906200142d565b6200179a60a08201516101008601906200142d565b620017af60c08201516101408601906200142d565b01519101906200062c565b60a0810151156200189b576200188662001895620003e792610120620017df6200169b565b91620017f7620017f08251620001ae565b84620004ed565b620018146200180a6020830151620001ae565b60208501620004ed565b604081015160408401526200183b620018316060830151620001ae565b60608501620004ed565b60c0810151608084015260e081015160a084015261010081015160c0840152015160e08201526200186c6002600055565b6200187643600155565b6040519283916020830162001726565b03601f19810183528262000148565b62001597565b6200188662001895620003e792620018b262001389565b90620018ca620018c38251620001ae565b83620004ed565b620018e7620018dd6020830151620001ae565b60208401620004ed565b604081015160408301526200190e620019046060830151620001ae565b60608401620004ed565b6080810151608083015260c081015160a083015260e081015160c0830152610160610100918281015160e0850152610120928382015190850152015190820152620019596004600055565b6200196343600155565b604051928391602083016200143c56fe60806040526004361015610018575b361561001657005b005b60003560e01c80630e36a72c146101805780631e93b0f1146101775780633402da131461016e5780634012e02e14610165578063450bacff1461015c5780635e75b021146101535780636167d4921461014a57806374e0507d146101415780637731406e14610138578063800a119b1461012f5780638323075714610126578063842463da1461011d57806388f8ea6314610114578063ab53f2c61461010b578063b8aaa65414610102578063be20a474146100f9578063c8867ae9146100f05763dc8d714f0361000e576100eb611539565b61000e565b506100eb6114ce565b506100eb611439565b506100eb61105b565b506100eb610fe6565b506100eb610f03565b506100eb610e98565b506100eb610e79565b506100eb610e0f565b506100eb6109f0565b506100eb61092d565b506100eb610814565b506100eb61079c565b506100eb61072d565b506100eb61049a565b506100eb6102f2565b506100eb6102b1565b506100eb6101e3565b6001600160a01b031690565b6001600160a01b038116036101a657565b600080fd5b60208091805184520151910152565b60206040916101ca8482516101ab565b0151910152565b6060810192916101e191906101ba565b565b5060c03660031901126101a6576004356101fc81610195565b60a03660231901126101a65760606102ad916102166118f5565b5061029f610222611915565b809261022c6119a9565b6001600160a01b0391821681529060208201610247366119de565b815260405191610256836115f5565b61025e6119a9565b8352602083019361026d61272a565b855251168251525160208251015260008251525160208251015261028f6127a6565b90600082525160208201526132a0565b0151604051918291826101d1565b0390f35b50346101a65760003660031901126101a6576020600354604051908152f35b60409060031901126101a657600490565b60409060231901126101a657602490565b5060603660031901126101a6576102ad608061030d366102d0565b61037d610318611915565b809261032d6103256118f5565b913690611add565b815260208101604435815260405190610345826115f5565b61034d6118f5565b8252602082019261035c61272a565b8452518251525160208251015260018251525160408251015261028f6127a6565b01516040519081529081906020820190565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b50634e487b7160e01b600052602160045260246000fd5b6040908051600281101561040c575b83526020818101511515908401528101516001600160a01b0316910152565b6104146103c7565b6103ed565b81516001600160a01b039081168252602080840151610200840195946101e194936101a09360c09361044d918701906101ab565b61045f604083015160608701906101ab565b610471606083015160a087019061038f565b61048460808301516101408701906101ab565b60a08201511661018085015201519101906103de565b50346101a65760003660031901126101a6576104b461187b565b506102ad60206104c2611915565b6104ca611b21565b60005460048110156106145760026104e29114611e2b565b6104ea611693565b9060406105008593848082518301019101611d6a565b60808101848151519160a0860192835152510151858251015260a08201858151519160c0870192835152510151868251015260e083019061058d61058160808451519460e08a01958651528a815101518b875101528881510151898751015261057961056f6060835101611d5d565b60608851016119c5565b510151151590565b60808451019015159052565b60c0840192878451519461010089019586515251015188855101526105c56101206105bb6060880151610189565b98019788516119c5565b51878751015251848651015251606085510152516080845101526105f86105ee85830151610189565b60a08551016119c5565b015160c08251015251908201525b015160405191829182610419565b60046106209114611e0b565b610628611693565b90604061063e8593848082518301019101611c9d565b8360a08201805151855152510151848451015260c08101848151519181860192835152510151858251015261010082016106bb6106af6080835151938789019485515289815101518a86510152878151015188865101526105796106a56060835101611d5d565b60608751016119c5565b60808351019015159052565b60e08301918683515193606088019485515251015187845101526106e26060850151610189565b956106f2608082019788516119c5565b518787510152518486510152516060855101525160808451015261071b6105ee85830151610189565b015160c0825101525190820152610606565b5060403660031901126101a657610743366102d0565b61074b611915565b6040823603126101a65761078191602060405191610768836115f5565b803583520135610777816119d4565b602082015261288a565b602060405160008152f35b6040810192916101e191906101ab565b5060403660031901126101a6576107b16117dc565b506102ad60c06107bf611915565b610806816107cb6117dc565b60043581526020810160243581526107e16127c2565b915182515251602082510152602081019060038251525160808251015261028f6127a6565b01516040519182918261078c565b50346101a6576020806003193601126101a6576101406102ad916004359061083a611915565b91600054600481106000146108d657916108b66108b16108bc9361086360026108c19714611e6b565b61087c61086e611693565b858082518301019101611d6a565b936108a860a061089c610896604060e08a015101516151b0565b85615281565b96019586515190615281565b94510151615216565b615223565b906152ce565b6151d5565b91018190526040519081529081906020820190565b916108b66108b16108bc936108f060046109249714611e4b565b6109096108fb611693565b858082518301019101611c9d565b936108a860c061089c61089660406101008a015101516151b0565b8282015261037d565b506102c03660031901126101a657610943611915565b60405190610950826115f5565b60043582526102a03660231901126101a6576109e49161096e61173c565b610976615931565b815261098136615940565b602082015261098f366159bd565b604082015261099d36615a08565b60608201526109ab36611a31565b60808201526109b936611a5c565b60a08201526109c736611a87565b60c08201526109d536611ab2565b60e082015260208201526132a0565b60405160008152602090f35b50346101a6576020806003193601126101a65760043590610a0f611915565b610a17615a57565b60008054846004821015610c3e57506002610a329114611eeb565b83610a4c610a3e611693565b828082518301019101611d6a565b9160e0830192610a60608085510151151590565b15610c3457610a6e82611f0b565b60a0019382855101516101408201908152855151926101608301938452855160400151610a9a906151fe565b610aa4908b615281565b9661018097888501908082528451610abb91615281565b908651610ac790615223565b9051610ad2916151ea565b610adb916152ce565b966101a085019788528b82515190610af2916151ea565b9b6101c086019c8d528783510151610b0a9082615281565b8d51610b1591613111565b8951610b2091615216565b825151610b2c90615252565b835160400151610b3b916152ce565b610b4491615281565b60649004916101e087019283525151610b5c91615281565b6127109004926102008601918483526102208701948551528189865101528d6102408801938385515282518b86510152518a86510151610b9b91615281565b9051610ba691613111565b90511090506000149b6101809b610bf3610c14996102ad9f610c0d99610260610c0399610bfd98610be794610c2b575051915b019581875251905190615216565b955101518b5190615216565b9151015190615216565b90615281565b9251905190615281565b1115611f2b565b519082015201516040519081529081906020820190565b90505191610bd9565b610a6e6001611f0b565b9192906004610c4d9114611e8b565b610c66610c58611693565b838082518301019101611c9d565b6101009182820191610c7c608084510151151590565b15610e0557610c8a86611eab565b60c001928484510151825283515193858301948552835160400151610cae906151fe565b610cb8908b615281565b60408401908082528451610ccb91615281565b908651610cd790615223565b9051610ce2916151ea565b610ceb916152ce565b96606084019788528a82515190610d01916151ea565b9a608085019b8c528783510151610d189082615281565b8c51610d2391613111565b8951610d2e91615216565b865151610d3a90615252565b875160400151610d49916152ce565b610d5291615281565b606490049560a086019687525151610d6991615281565b61271090049460c085019386855260e08601968751528289885101528501938285515281518986510152518884510151610da291615281565b8c51610dad91613111565b90511090506000146102ad9a6101809a610bf3610df399610be7610dec99610c0398610bfd97610dfd5750515b6101208a019581875251905190615216565b1115611ecb565b518282015261037d565b905051610dda565b610c8a6001611eab565b5060403660031901126101a657610e246117dc565b506102ad60e0610e32611915565b61080681610e3e6117dc565b6004358152602081016024358152610e546127c2565b915182515251602082510152602081019060048251525160a08251015261028f6127a6565b50346101a65760003660031901126101a6576020600154604051908152f35b5060003660031901126101a65760206040610eb1611915565b610eea818351858101818110600180881b03821117610ef6575b855260008152610ed96117dc565b90600082525115158682015261288a565b01511515604051908152f35b610efe6115de565b610ecb565b50346101a6576020806003193601126101a6576101606102ad9160043590610f29611915565b9160005460048110600014610f9957916108b66108b16108bc93610f5260026108c19714611f6b565b610f91610f6e610f60611693565b868082518301019101611d6a565b60a0610f84610896604060e085015101516151b0565b9101958651015190615281565b935151615216565b916108b66108b16108bc93610fb360046109249714611f4b565b610f91610fcf610fc1611693565b868082518301019101611c9d565b60c0610f84610896604061010085015101516151b0565b50346101a657600080600319360112611058578054611003611693565b906040519283918252602090604082840152835191826040850152815b83811061104157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101611020565b80fd5b50346101a6576020806003193601126101a6576004359061107a611915565b611082615a57565b92600080546004811060001461126e57600261109e9114611feb565b6110a961086e611693565b9060e08201916110bd608084510151151590565b15611264576110cb8261200b565b60a00190815151906101408801918252868351015161016089019081528451604001516110f7906151fe565b6111019087615281565b6101808a0190808252845161111591615281565b90825161112190615223565b905161112c916151ea565b611135916152ce565b946101a096878b01968752808a8751015190611150916151ea565b906101c08c019182528651516111669082615281565b825161117191613111565b885161117c91615216565b83515161118890615252565b845160400151611197916152ce565b6111a091615281565b60649004926101e08d0193845251516111b891615281565b6127109004936102008c01928584526102208d0195865152818c875101526102408d01938285515281518d86510152518851516111f491615281565b83516111ff91613111565b90511090506000146102ad9b6112496101a09c61123e610c149a6102606112549a610c0399610bfd9861125b575051955b0194855251518c5190615216565b908351015190615216565b925190515190615216565b111561202b565b90505195611230565b6110cb600161200b565b600461127f91969592939614611f8b565b61129861128a611693565b828082518301019101611c9d565b9361010094858101906112af608083510151151590565b1561142f576112bd85611fab565b60c0019586515183528387510151908484019182528251604001516112e1906151fe565b6112eb908a615281565b604085019080825285516112fe91615281565b90835161130a90615223565b9051611315916151ea565b61131e916152ce565b956060850196875289868a51015190611336916151ea565b99608086019a8b5289515161134b9082615281565b8b5161135691613111565b885161136191615216565b85515161136d90615252565b86516040015161137c916152ce565b61138591615281565b606490049460a08701958652515161139c91615281565b61271090049360c086019285845260e08701958651528288875101528601928284515281518885510152518a51516113d391615281565b8b516113de91613111565b905110905060001498610bfd6101a099611249610df39861123e61141f986102ad9f97610c0398611426575051935b6101208b0194855251518c5190615216565b1115611fcb565b9050519361140d565b6112bd6001611fab565b5060603660031901126101a6576102ad60a0611454366102e1565b61145c6117dc565b50610806611468611915565b8092611472611b05565b90600435825261148760208301913690611add565b815260405190611496826115f5565b61149e611b05565b825260208201926114ad61272a565b8452518251525160208251015260028251525160608251015261028f6127a6565b5060403660031901126101a6576114e36117dc565b506102ad6101006114f2611915565b610806816114fe6117dc565b60043581526020810160243581526115146127c2565b915182515251602082510152602081019060058251525160c08251015261028f6127a6565b5060403660031901126101a65761154e6117dc565b506102ad61012061155d611915565b610806816115696117dc565b600435815260208101602435815261157f6127c2565b915182515251602082510152602081019060068251525160e08251015261028f6127a6565b90600182811c921680156115d4575b60208310146115be57565b634e487b7160e01b600052602260045260246000fd5b91607f16916115b3565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761161057604052565b6116186115de565b604052565b60a081019081106001600160401b0382111761161057604052565b61014081019081106001600160401b0382111761161057604052565b61010081019081106001600160401b0382111761161057604052565b601f909101601f19168101906001600160401b0382119082101761161057604052565b60405190600082600254916116a7836115a4565b80835260019380851690811561171b57506001146116cd575b506101e192500383611670565b60026000908152600080516020615b0f83398151915294602093509091905b8183106117035750506101e19350820101386116c0565b855488840185015294850194879450918301916116ec565b90506101e194506020925060ff191682840152151560051b820101386116c0565b6040519061010082016001600160401b0381118382101761161057604052565b604051906101c082016001600160401b0381118382101761161057604052565b6040519061014082016001600160401b0381118382101761161057604052565b60405190610de082016001600160401b0381118382101761161057604052565b6040519061028082016001600160401b0381118382101761161057604052565b604051906117e9826115f5565b60006020838281520152565b6040519060a082016001600160401b03811183821017611831575b60405260006080838281528260208201528260408201528260608201520152565b6118396115de565b611810565b60405190606082016001600160401b0381118382101761186e575b60405260006040838281528260208201520152565b6118766115de565b611859565b6040519060e082016001600160401b038111838210176118e8575b60405281600081526118a66117dc565b60208201526118b36117dc565b60408201526118c06117f5565b60608201526118cd6117dc565b6080820152600060a082015260c06118e361183e565b910152565b6118f06115de565b611896565b60405190611902826115f5565b600060208361190f6117dc565b81520152565b61191d61175c565b90600080835261192b61187b565b602084015280604084015261193e6118f5565b60608401528060808401526119516117dc565b60a084015261195e6117dc565b60c084015261196b6117dc565b60e08401526119786117dc565b6101008401526119866117dc565b6101208401528061014084015280610160840152806101808401526101a0830152565b604051906119b6826115f5565b816000815260206118e36117f5565b6001600160a01b039091169052565b801515036101a657565b60a09060231901126101a657604051906119f78261161d565b81602435815260443560208201526064356040820152608435611a1981610195565b6060820152608060a43591611a2d836119d4565b0152565b6040906101c31901126101a65760405190611a4b826115f5565b6101c43582526101e4356020830152565b6040906102031901126101a65760405190611a76826115f5565b610204358252610224356020830152565b6040906102431901126101a65760405190611aa1826115f5565b610244358252610264356020830152565b6040906102831901126101a65760405190611acc826115f5565b6102843582526102a4356020830152565b91908260409103126101a657604051611af5816115f5565b6020808294803584520135910152565b60405190611b12826115f5565b816000815260206118e36117dc565b60405190611b2e82611638565b81611b376117dc565b8152611b416117dc565b6020820152611b4e6117f5565b6040820152611b5b6117dc565b6060820152611b6861187b565b6080820152611b756117dc565b60a0820152611b826117dc565b60c0820152611b8f6117f5565b60e0820152611b9c6117dc565b6101008201526101206118e361187b565b51906101e182610195565b91908260609103126101a657604051606081016001600160401b03811182821017611c14575b6040528092805160028110156101a657604091829184526020810151611c03816119d4565b6020850152015191611a2d83610195565b611c1c6115de565b611bde565b91908260409103126101a657604051611c39816115f5565b6020808294805184520151910152565b91908260a09103126101a657604051611c618161161d565b60808082948051845260208101516020850152604081015160408501526060810151611c8c81610195565b6060850152015191611a2d836119d4565b610280818303126101a65761026090611cb461177c565b92611cbe82611bad565b8452611ccc60208301611bad565b6020850152611cde8160408401611bb8565b6040850152611cef60a08301611bad565b6060850152611d018160c08401611c21565b6080850152611d4e61010091611d1981848601611c21565b60a0870152611d2c816101408601611c21565b60c0870152611d3f816101808601611c21565b60e08701526101c08401611c49565b90840152015161012082015290565b516001600160a01b031690565b90610220828203126101a657611e0390610180611d8561173c565b93611d8f81611bad565b8552611d9d60208201611bad565b6020860152611daf8360408301611bb8565b6040860152611dc060a08201611bad565b6060860152611dd28360c08301611c21565b6080860152611de5836101008301611c21565b60a0860152611df8836101408301611c21565b60c086015201611c49565b60e082015290565b15611e1257565b60405163100960cb60e01b815260086004820152602490fd5b15611e3257565b60405163100960cb60e01b815260076004820152602490fd5b15611e5257565b60405163100960cb60e01b8152600a6004820152602490fd5b15611e7257565b60405163100960cb60e01b815260096004820152602490fd5b15611e9257565b60405163100960cb60e01b815260116004820152602490fd5b15611eb257565b60405163100960cb60e01b815260126004820152602490fd5b15611ed257565b60405163100960cb60e01b815260146004820152602490fd5b15611ef257565b60405163100960cb60e01b8152600d6004820152602490fd5b15611f1257565b60405163100960cb60e01b8152600e6004820152602490fd5b15611f3257565b60405163100960cb60e01b815260106004820152602490fd5b15611f5257565b60405163100960cb60e01b8152600c6004820152602490fd5b15611f7257565b60405163100960cb60e01b8152600b6004820152602490fd5b15611f9257565b60405163100960cb60e01b815260196004820152602490fd5b15611fb257565b60405163100960cb60e01b8152601a6004820152602490fd5b15611fd257565b60405163100960cb60e01b8152601c6004820152602490fd5b15611ff257565b60405163100960cb60e01b815260156004820152602490fd5b1561201257565b60405163100960cb60e01b815260166004820152602490fd5b1561203257565b60405163100960cb60e01b815260186004820152602490fd5b1561205257565b60405163100960cb60e01b8152602a6004820152602490fd5b1561207257565b60405163100960cb60e01b8152602b6004820152602490fd5b1561209257565b60405163100960cb60e01b8152602c6004820152602490fd5b156120b257565b60405163100960cb60e01b8152602d6004820152602490fd5b156120d257565b60405163100960cb60e01b8152602e6004820152602490fd5b156120f257565b60405163100960cb60e01b8152602f6004820152602490fd5b1561211257565b60405163100960cb60e01b815260306004820152602490fd5b1561213257565b60405163100960cb60e01b8152605c6004820152602490fd5b1561215257565b60405163100960cb60e01b8152605d6004820152602490fd5b1561217257565b60405163100960cb60e01b8152605e6004820152602490fd5b1561219257565b60405163100960cb60e01b8152605f6004820152602490fd5b156121b257565b60405163100960cb60e01b815260606004820152602490fd5b156121d257565b60405163100960cb60e01b815260616004820152602490fd5b156121f257565b60405163100960cb60e01b815260626004820152602490fd5b1561221257565b60405163100960cb60e01b815260556004820152602490fd5b1561223257565b60405163100960cb60e01b815260566004820152602490fd5b1561225257565b60405163100960cb60e01b815260576004820152602490fd5b1561227257565b60405163100960cb60e01b815260586004820152602490fd5b1561229257565b60405163100960cb60e01b815260596004820152602490fd5b156122b257565b60405163100960cb60e01b8152605a6004820152602490fd5b156122d257565b60405163100960cb60e01b8152605b6004820152602490fd5b156122f257565b60405163100960cb60e01b8152604d6004820152602490fd5b1561231257565b60405163100960cb60e01b8152604e6004820152602490fd5b1561233257565b60405163100960cb60e01b815260506004820152602490fd5b1561235257565b60405163100960cb60e01b815260516004820152602490fd5b1561237257565b60405163100960cb60e01b815260526004820152602490fd5b1561239257565b60405163100960cb60e01b815260536004820152602490fd5b156123b257565b60405163100960cb60e01b815260546004820152602490fd5b156123d257565b60405163100960cb60e01b815260456004820152602490fd5b156123f257565b60405163100960cb60e01b815260466004820152602490fd5b1561241257565b60405163100960cb60e01b815260486004820152602490fd5b1561243257565b60405163100960cb60e01b815260496004820152602490fd5b1561245257565b60405163100960cb60e01b8152604a6004820152602490fd5b1561247257565b60405163100960cb60e01b8152604b6004820152602490fd5b1561249257565b60405163100960cb60e01b8152604c6004820152602490fd5b156124b257565b60405163100960cb60e01b8152603f6004820152602490fd5b156124d257565b602460405163100960cb60e01b815260406004820152fd5b156124f157565b60405163100960cb60e01b815260416004820152602490fd5b1561251157565b60405163100960cb60e01b815260426004820152602490fd5b1561253157565b60405163100960cb60e01b815260436004820152602490fd5b1561255157565b60405163100960cb60e01b815260446004820152602490fd5b1561257157565b60405163100960cb60e01b815260386004820152602490fd5b1561259157565b60405163100960cb60e01b815260396004820152602490fd5b156125b157565b60405163100960cb60e01b8152603a6004820152602490fd5b156125d157565b60405163100960cb60e01b8152603b6004820152602490fd5b156125f157565b60405163100960cb60e01b8152603c6004820152602490fd5b1561261157565b60405163100960cb60e01b8152603d6004820152602490fd5b1561263157565b60405163100960cb60e01b8152603e6004820152602490fd5b1561265157565b60405163100960cb60e01b815260316004820152602490fd5b1561267157565b60405163100960cb60e01b815260326004820152602490fd5b1561269157565b60405163100960cb60e01b815260336004820152602490fd5b156126b157565b60405163100960cb60e01b815260346004820152602490fd5b156126d157565b60405163100960cb60e01b815260356004820152602490fd5b156126f157565b60405163100960cb60e01b815260366004820152602490fd5b1561271157565b60405163100960cb60e01b815260376004820152602490fd5b6040519061273782611654565b81600081526127446119a9565b60208201526127516118f5565b604082015261275e611b05565b606082015261276b6117dc565b60808201526127786117dc565b60a08201526127856117dc565b60c082015260e06118e36117dc565b6007111561279e57565b6101e16103c7565b604051906127b3826115f5565b816000815260206118e361272a565b604051906127cf826115f5565b816127d86117dc565b815260206118e361272a565b8181106127ef575050565b600081556001016127e4565b50634e487b7160e01b600052601160045260246000fd5b61281d6002546115a4565b806128255750565b601f811160011461283857506000600255565b600260005261287d90601f0160051c600080516020615b0f833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6127e4565b6000602081208160025555565b60606129809160006040612985956128b36128ae6128aa60045460ff1690565b1590565b61204b565b81513381528451602080830191909152850151151560408201527f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95090606090a1612900600284541461206b565b61292f61291d61290e611693565b60208082518301019101611d6a565b9451801590811561299b575b5061208b565b61293934156120ab565b8151600081527ff8630146b978d91632a9fb879d370c8c534326f8b75d2bb5f6f13fbd705b8d9090602090a101520161297a6129758251610189565b6129a7565b51610189565b612b4c565b600080556129936000600155565b6101e1612812565b90506001541438612929565b600080612a1492604051826020820191630852cd8d60e31b835281196024820152602481526060810181811060018060401b03821117612a1b575b60405251926001600160a01b03165af1612a046129fd612a28565b8092612a8d565b5060208082518301019101612a75565b156101a657565b612a236115de565b6129e2565b3d15612a70573d906001600160401b038211612a63575b60405191612a57601f8201601f191660200184611670565b82523d6000602084013e565b612a6b6115de565b612a3f565b606090565b908160209103126101a65751612a8a816119d4565b90565b15612a955790565b805115612aa457805190602001fd5b60405163100960cb60e01b815260036004820152602490fd5b15612ac55790565b805115612ad457805190602001fd5b60405163100960cb60e01b8152600480820152602490fd5b15612af45790565b805115612b0357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612b245790565b805115612b3357805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600080612b8e9260405182602082019163083197ef60e41b835260048152612b73816115f5565b51926001600160a01b03165af1612b88612a28565b90612abd565b50565b612b9961179c565b90612ba26119a9565b825260008060208401528060408401528060608401528060808401528060a08401528060c0840152612bd26117dc565b60e0840152612bdf6118f5565b610100840152612bed6117f5565b610120840152612bfb6118f5565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152806102208401528061024084015280610260840152612c486117dc565b610280840152806102a0840152806102c0840152612c646117dc565b6102e0840152612c726117dc565b610300840152612c806117dc565b610320840152612c8e6117dc565b610340840152612c9c611b05565b61036084015280610380840152806103a0840152806103c0840152806103e0840152612cc66117dc565b6104008401528061042084015280610440840152612ce26117dc565b610460840152612cf06117dc565b610480840152612cfe6117dc565b6104a0840152612d0c6117dc565b6104c0840152612d1a6117dc565b6104e08401528061050084015280610520840152806105408401528061056084015280610580840152806105a0840152806105c0840152612d596117dc565b6105e0840152612d676117dc565b610600840152612d756117dc565b6106208401528061064084015280610660840152612d916117dc565b610680840152612d9f6117dc565b6106a0840152612dad6117dc565b6106c0840152612dbb6117dc565b6106e0840152612dc96117dc565b610700840152612dd76117dc565b610720840152806107408401528061076084015280610780840152806107a0840152806107c0840152806107e084015280610800840152612e166117dc565b610820840152612e246117dc565b610840840152612e326117dc565b61086084015280610880840152806108a0840152612e4e6117dc565b6108c0840152612e5c6117dc565b6108e0840152612e6a6117dc565b610900840152612e786117dc565b610920840152612e866117dc565b610940840152612e946117dc565b61096084015280610980840152806109a0840152806109c0840152806109e084015280610a0084015280610a2084015280610a40840152612ed36117dc565b610a60840152612ee16117dc565b610a80840152612eef6117dc565b610aa084015280610ac084015280610ae0840152612f0b6117dc565b610b00840152612f196117dc565b610b20840152612f276117dc565b610b40840152612f356117dc565b610b60840152612f436117dc565b610b80840152612f516117dc565b610ba084015280610bc084015280610be084015280610c0084015280610c2084015280610c4084015280610c6084015280610c80840152612f906117dc565b610ca0840152612f9e6117dc565b610cc0840152612fac6117dc565b610ce084015280610d00840152610d20830152612fc76117dc565b610d40830152612fd56117dc565b610d60830152612fe36117dc565b610d80830152612ff16117dc565b610da0830152612fff6117dc565b610dc0830152565b80516001600160a01b031682526020908101516101e192919091019061038f565b906020806101e1938051845201519101906101ab565b6102a060e060206101e19496956102e085019760018060a01b031685528051828601520151805160078110156130ef575b604085015261308660208201516060860190613007565b61309960408201516101208601906101ba565b6130ac6060820151610180860190613028565b6130bf60808201516101e08601906101ab565b6130d260a08201516102208601906101ab565b6130e560c08201516102608601906101ab565b01519101906101ab565b6130f76103c7565b61306f565b5160078110156131095790565b612a8a6103c7565b811561311b570490565b634e487b7160e01b600052601260045260246000fd5b6131636101e19461315960a09498979560e0850199600180881b0316855260208501906101ab565b60608301906101ab565b01906101ab565b6040519061018082016001600160401b03811183821017613200575b604052816101606000918281528260208201526131a161183e565b60408201528260608201526131b46117dc565b60808201528260a08201526131c76117dc565b60c08201526131d46117dc565b60e08201526131e16117dc565b6101008201526131ef6117f5565b610120820152826101408201520152565b6132086115de565b613186565b909594926101e19461323e6131639260c09561010086019a60018060a01b03168652602086015260408501906101ab565b60808301906101ab565b909594926101e1946131639161327460c09561010086019a60018060a01b0316865260208601906101ab565b606084015260808301906101ab565b506040513d6000823e3d90fd5b60a0810192916101e1919061038f565b6132a8612b91565b6132bf6132ba6128aa60045460ff1690565b6120cb565b7ff2816af3c71736203c2303122d0a28d63fb70d5b66eea9b42d9ff743327b5ea9604051806132ef85338361303e565b0390a16133006004600054146120eb565b602061330d61128a611693565b92613323815180159081156151a4575b5061210b565b019261332f84516130fc565b61333881612794565b6137c15760206101e194510151825261336a61336361335e606061010087015101611d5d565b610189565b331461264a565b60208251015160648151106000146137b95760206064910151105b15801560208401908152906137ad576133bb6020845101516133b360408201519160208101519051906151ea565b146040850152565b82516020015160400151606411606084019081528351602001516040015115156080850190815291613468906040860151156137a657825115155b1561379c5761340d6134088551151590565b61266a565b613417341561268a565b61343561343061342a60608a0151610189565b336153ce565b6126aa565b61344a61344561342a8951610189565b6126ca565b61346261345d61342a60208a0151610189565b6126ea565b51151590565b156137905761349460208551015161348c60408201519160208101519051906151ea565b1460a0860152565b60a084015115613788575115155b1561377d57516134b390151561270a565b61012083015147818110156137705750506000808080805b8060c08801526134de61335e8851611d5d565b828215613767575bf11561375a575b60606134f98451610189565b61354b6135068551611d5d565b60e0870180515190936001600160a01b0392613526929190841690615355565b6135336020880151610189565b61353d8751611d5d565b845160200151921690615355565b60208151519160e08601928351525101516020825101525161010084019081515260c08401516020825101527f0cc0bc6d9c0deb4836988c8092f0cd44d33488e8756b240e7c612b8451abdf286135a98251604051918291826101d1565b0390a1519101527f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca6136436020835101515161012084019081515260208085510151015160208251015260406020855101510151604082510152613621613617606060208751015101611d5d565b60608351016119c5565b6136366106af60806020875101510151151590565b5160405191829182613290565b0390a160c061372e61365361316a565b936136676136618251610189565b866119c5565b6136806136776020830151610189565b602087016119c5565b604081015160408601526136a361369a6060830151610189565b606087016119c5565b60808101805160808701526136c060806020875101510151151590565b1561375357602060a08301510151155b156137495781840151805161373e5760206136f2910151155b151560a0880152565b60a0820151848701528382015160e0870152516101008601526020845101516101208601524361014086015261012083850151910151906151ea565b91015190036101608201526157a3565b506136f260006136e9565b6136f260006136e9565b60006136d0565b613762613283565b6134ed565b506108fc6134e6565b60008080938193036134cb565b506134b3600061270a565b5060006134a2565b600060a0850152613494565b61340d600061266a565b60006133f6565b600060408401526133bb565b506000613385565b916137cc84516130fc565b936137d685612794565b6001948503613bfe579360406138c9955101519361014093848101958652610100918285019361380a608086510151151590565b15613bf5575061381a600061256a565b60a0850180516020015115610180840181815291939015613b865761385061384b8a51516020815191015190615281565b6152de565b6101608201525b602089510151986138706101609a8b840151101561258a565b61387a34156125aa565b6138dc606089019361389761389261342a8751610189565b6125ca565b6138b76138b26138a78c51610189565b855151519033615429565b6125ea565b6134626138d760208c019e8f51610189565b602086515101519033615429565b61260a565b15613b0e576138f761384b8251516020815191015190615281565b6101e08301525b8051602001516101e0830190815110156139179061262a565b815151519160c08a019283515161392d916151ea565b9261024085019384528151516020015190516020015161394c916151ea565b9261026085019384528051976102808601988951528451895160200152805151845161397791615216565b906102a0870191825251602001518451613990916151ea565b916102c087019283528151986102e08801998a515283518a516020015288516139b890610189565b8651336139c492615355565b85516040519081527fbc66526cfd94e9320697c8e81b3990bf0964a028917d761b629474cd32ac311690602090a18551906080015283515151936103008801948551525151602001518451602001525194610320870195865152518551602001525194610340019485515251845160200152519051915192516040519384933393613a4f9486613248565b037feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb91a1613a7b61316a565b988651613a8790610189565b613a91908b6119c5565b51613a9b90610189565b613aa89060208b016119c5565b604086015160408a015251613abc90610189565b613ac99060608a016119c5565b6080850151608089015260a08801600090525160c08801525160e087015260e0830151908601525191610120928386015243908501520151908201526101e1906157a3565b613b218151515160208751015190615281565b613b5e613b3560c08b019283515190613111565b9161020085019283526020613b54818651510151828b51015190615281565b9151015190613111565b90816102208501525190808210600014613b7f57505b6101e08301526138fe565b9050613b74565b88613bcd886020613b5481613bb560c0613ba98c848a5151519151015190615281565b95019485515190613111565b956101a0880196875251510151828a51015190615281565b90816101c08401525190808210600014613bee57505b610160820152613857565b9050613be3565b61381a9061256a565b9092936002613c0d83516130fc565b613c1681612794565b03613f335750516060015190610360810191808352519360c0840194855151613c3e91615281565b60a0850190815160200151613c5291613111565b936103808401948552805151875160200151613c6d91615281565b825160200151613c7c91613111565b916103a085019283528151602001515186511015613c99906124ab565b8151602001516020015183511015613cb0906124cb565b613cba34156124ea565b6060870151613cc890610189565b825151613cd59133615429565b613cde9061250a565b8651613ce990610189565b613cf390336153ce565b613cfc9061252a565b6020870151613d0a90610189565b613d1490336153ce565b613d1d9061254a565b805151825151613d2c916151ea565b906103c086019182525160200151825151613d4691615216565b906103e086019182528051986104008701998a515282518a51602001528051518851613d7191615216565b90610420880191825251602001518551613d8a91615216565b9561044088019687528151986104608901998a515287518a51602001528a51613db290610189565b815133613dbe92615355565b60208b0151613dcc90610189565b875133613dd892615355565b5195610480890196875152518651602001528551604051613dfa81928261078c565b037f0addeb826fee5faebd9822c2279811e900007dd09d8343c09ec4183b0edac03c91a185519060a0015251946104a08701958651525185516020015251946104c001948551525184516020015251519051915192516040519384933393613e62948661320d565b037f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef85591a1613e8e61316a565b928251613e9a90610189565b613ea490856119c5565b6020830151613eb290610189565b613ebf90602086016119c5565b604083015160408501526060830151613ed790610189565b613ee490606086016119c5565b6080830151608085015260a08401600090525160c08401525160e083015260e081015161010090818401528101519061012091828401524361014084015201516101608201526101e1906157a3565b909392916003613f4386516130fc565b613f4c81612794565b036143de576106a09060806101e1965101516104e0820152610100840192613f78608085510151151590565b156143d55750613f8860006123cb565b600080516020615b2f83398151915260c0850161419a613fb760208351015160206104e0870151015190615216565b610500850190815261419361416d84515192610520880193845285888b6141136140ce6140c66140136108bc61400961400160206104e08a01510151610bfd60408a5101516151b0565b8d5190615281565b6108b68a51615223565b9361402e6105408701958087526104e08801515110156123eb565b6140406104e087015151865190615216565b6105608701526140b36140ac61409261408261407a6140638c51518b51906151ea565b9b6105808c019c8d5260208b519151015190615281565b8b5190613111565b60206104e08b0151015190615216565b610bfd6140a0855151615252565b604086510151906152ce565b6064900490565b946105a087019586525190515190615281565b612710900490565b9361410b6106006105c08601958787526105e081019788515260006020895101520194600086515284516020875101525160208d51015190615281565b905190613111565b905110156143cd5750515b61062089015261415661414961413d8851516104e08c015151906151ea565b6105608b015190615216565b6106208a01515190615216565b610640890152516020610620890151015190615216565b9360206141876106608901968088526106408a0151615281565b93519151015190615281565b111561240b565b6141a4341561242b565b6141bc6141b761342a6060890151610189565b61244b565b6141df6141da6141cc8851610189565b6104e0860151519033615429565b61246b565b6141f76141f261342a6020890151610189565b61248b565b61064083015196610680840197885152815160208951015261422560e08801515161062086015151906151ea565b8585015152614246602060e0890151015160206106208701510151906151ea565b602086860151015261426961425b8851610189565b610560860151903390615355565b61428b6142796020890151610189565b60206104e08701510151903390615355565b610560840151906106c085019182515260206104e086015101516020835101527fe3e1d815eb8fe6704b880f50d1c1562865fd8b3a868019fe1c7df4658275a1c86142dd83516040519182918261078c565b0390a160c0825191015261432b6104e0850151516106e08601908151526000602082510152610640860151936107008701948551525160208551015251915192516040519384933385613131565b0390a161433661316a565b9461434a6143448651610189565b876119c5565b61436361435a6020870151610189565b602088016119c5565b6040850151604087015261438661437d6060870151610189565b606088016119c5565b60808501516080870152600060a087015260a085015160c08701525160e08601520151610100840152519061012091828401524361014084015201516101608201526157a3565b90505161411e565b613f88906123cb565b929360046143ec82516130fc565b6143f581612794565b036148b3575160a0015161072084015261010082015160800151156148aa575061441f60006122eb565b60c08101928351516107208401516020015161443a91615216565b906107408401918252845160200151946107608501958652610720850151602001516101008501516040015161446f906151b0565b61447891615281565b865161448391615281565b835161448e90615223565b614497916152ce565b6144a0906151d5565b906107808601918083526107208701515110156144bc9061230b565b6107208601515182516144ce91615216565b6107a087015280516020015182516144e5916151ea565b6107c0870190815282518251516144fb91615281565b815161450691613111565b6107208801516020015161451991615216565b6101008701515161452990615252565b6101008801516040015161453c916152ce565b61454591615281565b60649004926107e08801938452516101008701515161456391615281565b6127109004926108008801918483526108208901948551528451602001600090526108408901928351600090528251845160200152518451516145a591615281565b90516145b091613111565b905110600014976145f1600080516020615b2f8339815191529660206146539661464c956101e19d6148a1575051915b826108608d01525191015190615216565b61088089015261464161462f6146226146166020875101516107208d015151906151ea565b6107a08c015190615216565b6108608b01515190615216565b806108a08b01526108808a0151615281565b925151905190615281565b111561232b565b61465d341561234b565b61467561467061342a6060860151610189565b61236b565b61468a61468561342a8551610189565b61238b565b6146b06146ab61469d6020860151610189565b610720870151519033615429565b6123ab565b6108808401516108c0850151526108a084015160206108c086015101526146e660e08401515160206108608701510151906151ea565b6108e085015152614706602060e0850151015161086086015151906151ea565b60206108e0860151015261472f61471d8451610189565b60206107208701510151903390615355565b61474d61473f6020850151610189565b6107a0860151903390615355565b60206107208501510151906109008501918251526107a08501516020835101527fac4fb343d50fdef371793328e0d5a4fb4d89153721733d36e72f64fca651664161479f83516040519182918261078c565b0390a160e082519101526109208401906000825152610720850151516020835101526147f2610880860151926109408701938451526108a087015160208551015251915192516040519384933385613131565b0390a16108e061480061316a565b9261481461480e8451610189565b856119c5565b61482d6148246020850151610189565b602086016119c5565b604083015160408501526148506148476060850151610189565b606086016119c5565b60808301516080850152600060a085015260a083015160c08501526108c081015160e085015201516101008301526101008101519061012091828401524361014084015201516101608201526157a3565b905051916145e0565b61441f906122eb565b60056148bf82516130fc565b6148c881612794565b03614d2b5793600080516020615b2f8339815191529160c06101e1965101516109608601526148ff60806101008601510151151590565b15614d22575061490f600061220b565b602060c0840151015161098085015260c0830151516109a085015261497b61494961096086015151610bfd604061010088015101516151fe565b6108b66149646109c088019280845261098089015190615281565b916149736109a0890151615223565b9051906151ea565b6109e085015261499760c08401515161096086015151906151ea565b610a00850152614a856149ff6140ac6149dd6149d16149c56109608a015151602060c08b0151015190615281565b610a008a015190613111565b6109e089015190615216565b610bfd6149ef61010089015151615252565b60406101008a01510151906152ce565b610a208601908152614a216140c6610960880151516101008801515190615281565b90610a40870190828252610a608801928351526000602084510152614a656149c5610a808a01936000855152835160208651015251602060c08b0151015190615281565b90511015614d1a5750515b80610aa0870152610a00860151905190615216565b610ac0850152614ab6614aa6602060c086015101516109e087015190615216565b6020610aa0870151015190615216565b610ae0850152614ad6602061096086015101516109e0860151101561222b565b614b0a614aee610ac0860151610ae087015190615281565b614b036109a087015161098088015190615281565b111561224b565b614b14341561226b565b614b2c614b2761342a6060860151610189565b61228b565b614b4f614b4a614b3c8551610189565b610960870151519033615429565b6122ab565b614b67614b6261342a6020860151610189565b6122cb565b610ac0840151610b0085015152610ae08401516020610b008601510152614b9a60e084015151610aa086015151906151ea565b610b2085015152614bbd602060e085015101516020610aa08701510151906151ea565b6020610b208601510152614be5614bd76020850151610189565b6109e0860151903390615355565b610b4084019060008251526109e08501516020835101527f721d97edfcb1010798369de04273f9088bcc2eb9599c99e71546009860bc0a3e614c2e83516040519182918261078c565b0390a161010082519101526109608401515190610b608501918251526000602083510152614c83610ac086015192610b80870193845152610ae087015160208551015251915192516040519384933385613131565b0390a1610b20614c9161316a565b92614c9f61480e8451610189565b614caf6148246020850151610189565b60408301516040850152614cc96148476060850151610189565b60808301516080850152600060a085015260a083015160c0850152610b0081015160e085015201516101008301526101008101519061012091828401524361014084015201516101608201526157a3565b905051614a70565b61490f9061220b565b6006614d3a82959495516130fc565b614d4381612794565b14614d50575b5050505050565b5160e00151610ba0830152610100830151608001511561519b5750614d75600061212b565b60c0820192835151610bc0830190815260208551015190610be08401918252614dd5614db3610ba086015151610bfd60406101008a015101516151fe565b6108b6614dca610c00880192808452855190615281565b916149738651615223565b91610c208501928352614df4602088510151610ba087015151906151ea565b610c408601908152614e4d6140ac614e2b614e23614e1b610ba08b0151518d515190615281565b855190613111565b875190615216565b610bfd614e3d6101008c015151615252565b60406101008d01510151906152ce565b610c608701908152614e6f6140c6610ba0890151516101008b01515190615281565b90610c80880190828252610ca08901928351526000602084510152614ead614e1b610cc08b019360008551528351602086510152518d515190615281565b90511015615192575051975b610ce0870198895251518451614ece91615216565b885160200151614edd91615216565b610d0087015251875151614ef091615216565b610d20860152610ba08501516020015183511015614f0d9061214b565b610d00850151610d20860151614f2291615281565b91519051614f2f91615281565b1115614f3a9061216b565b614f44341561218b565b6060840151614f5290610189565b614f5c90336153ce565b614f65906121ab565b8351614f7090610189565b614f7a90336153ce565b614f83906121cb565b60208401948551614f9390610189565b610ba085015151614fa49133615429565b614fad906121eb565b610d00840151610d4085015152610d20840151610d408501516020015260e08501805151825160200151614fe0916151ea565b610d60860151525160200151905151614ff8916151ea565b610d6084015160200152835161500d90610189565b81513361501992615355565b51610d8083015152610d8082015160200160009052610d8082015160405161504281928261078c565b037fdbae4331df9929ef6ce82548366e54fb7a8daf9afd9597b1455fbe424a89c28491a1610d80820151906101200152610da08101805160009052610ba082015151815160200152610d0082015190610dc0830191825152610d208301518251602001525190610d8083015190519160405192839233926150c39385613131565b03600080516020615b2f83398151915291a16150dd61316a565b9282516150e990610189565b6150f390856119c5565b516150fd90610189565b61510a90602085016119c5565b60408201516040840152606082015161512290610189565b61512f90606085016119c5565b6080820151608084015260a083016000905260a082015160c0840152610d4081015160e0840152610d600151610100830152610100810151610120830152436101408301526101200151610160820152615188906157a3565b3880808080614d49565b90505197614eb9565b614d759061212b565b9050600154143861331d565b90612710918201918281116151c8575b82106101a657565b6151d06127fb565b6151c0565b9060018201918281116151c85782106101a657565b91908201918281116151c85782106101a657565b61271090810390811161520e5790565b612a8a6127fb565b90810390811161520e5790565b90612710918060001904831181151516615245575b828102928304036101a657565b61524d6127fb565b615238565b90816000190460641182151516615274575b606482029160648304036101a657565b61527c6127fb565b615264565b600092918015918215615298575b5050156101a657565b9150925080600019048311811515166152c1575b6152b98382029384613111565b14388061528f565b6152c96127fb565b6152ac565b9080156101a657612a8a91613111565b9060006003831115615348575081600181811c81810180911161533b575b91905b84831061530b57505050565b919350908361531a8184613111565b90810180911161532e575b811c91906152ff565b6153366127fb565b615325565b6153436127fb565b6152fc565b9161534f57565b60019150565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612a1493600093849392849190608081016001600160401b038111828210176153c1575b6040525193165af1612a046153ba612a28565b8092612aec565b6153c96115de565b6153a7565b6000612a8a928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526154128161161d565b5193165af1612a04615422612a28565b8092612b1c565b600091612a8a9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526154128161161d565b6040519061547982611638565b60006101208382815282602082015261549061183e565b60408201528260608201526154a36117dc565b60808201526154b06117dc565b60a08201526154bd6117dc565b60c08201526154ca6117dc565b60e08201526154d76117f5565b6101008201520152565b81516001600160a01b031681526102808101929161026090610120906020818101516001600160a01b031690850152615522604082015160408601906103de565b60608101516001600160a01b031660a0850152615547608082015160c08601906101ab565b6101ca60a082015161555f61010091828801906101ab565b61557260c08401516101408801906101ab565b61558560e08401516101808801906101ab565b8201516101c086019061038f565b90601f82116155a0575050565b6101e19160026000526020600020906020601f840160051c830193106155ce575b601f0160051c01906127e4565b90915081906155c1565b80519091906001600160401b0381116156ae575b615600816155fb6002546115a4565b615593565b602080601f831160011461563c5750819293600092615631575b50508160011b916000199060031b1c191617600255565b01519050388061561a565b6002600052601f19831694909190600080516020615b0f833981519152926000905b87821061569657505083600195961061567d575b505050811b01600255565b015160001960f88460031b161c19169055388080615672565b8060018596829496860151815501950193019061565e565b6156b66115de565b6155ec565b604051906156c882611654565b8160008152600060208201526156dc61183e565b6040820152600060608201526156f06117dc565b60808201526156fd6117dc565b60a082015261570a6117dc565b60c082015260e06118e36117f5565b6101e19092919261018060e061022083019560018060a01b03808251168552806020830151166020860152615756604083015160408701906103de565b60608201511660a0850152615773608082015160c08601906101ab565b61578660a08201516101008601906101ab565b61579960c08201516101408601906101ab565b015191019061038f565b60a08101511561586d5761585a6158686101e1926101206157c26156bb565b916157d66157d08251610189565b846119c5565b6157ef6157e66020830151610189565b602085016119c5565b604081015160408401526158126158096060830151610189565b606085016119c5565b60c0810151608084015260e081015160a084015261010081015160c0840152015160e08201526158426002600055565b61584b43600155565b60405192839160208301615719565b03601f198101835282611670565b6155d8565b61585a6158686101e19261587f61546c565b9061589361588d8251610189565b836119c5565b6158ac6158a36020830151610189565b602084016119c5565b604081015160408301526158cf6158c66060830151610189565b606084016119c5565b6080810151608083015260c081015160a083015260e081015160c0830152610160610100918281015160e08501526101209283820151908501520151908201526159196004600055565b61592243600155565b604051928391602083016154e1565b6024359060078210156101a657565b9060c06043198301126101a657604051615959816115f5565b60a0819360443561596981610195565b835260631901126101a6576020604051916159838361161d565b60643583526084358284015260a435604084015260c4356159a381610195565b606084015260e4356159b4816119d4565b60808401520152565b610103190190606082126101a6576040516159d7816115f5565b60408193126101a6576040516159ec816115f5565b6101043581526101243560208201528152602061014435910152565b906060610163198301126101a657604051615a22816115f5565b604081936101643583526101831901126101a657602060405191615a45836115f5565b6101843583526101a435828401520152565b615a5f6117bc565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c0840152615a916117dc565b60e0840152615a9e6117dc565b610100840152615aac6117dc565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152615aea6117dc565b610220830152615af86117dc565b610240830152615b066117dc565b61026083015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a164736f6c6343000810000a608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000810000a`,
  BytecodeLen: 34001,
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
