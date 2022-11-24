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
    calcAmtIn_: ((_v334, _v335, _v336, _v337 ) => {
        const v334 = stdlib.protect(ctc0, _v334, null);
        const v335 = stdlib.protect(ctc0, _v335, null);
        const v336 = stdlib.protect(ctc0, _v336, null);
        const v337 = stdlib.protect(ctc0, _v337, null);
      
      const v339 = stdlib.safeSub(v335, v334);
      const v340 = stdlib.cast("UInt", "UInt256", v339, false, true);
      const v341 = stdlib.cast("UInt", "UInt256", v336, false, true);
      const v342 = stdlib.cast("UInt", "UInt256", v334, false, true);
      const v343 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v337);
      const v344 = stdlib.cast("UInt", "UInt256", v343, false, true);
      const v345 = stdlib.safeMul256(v342, v344);
      const v346 = stdlib.safeMul256(v340, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v347 = stdlib.safeMul256(v345, v341);
      const v348 = stdlib.safeDiv256(v347, v346);
      const v349 = stdlib.cast("UInt256", "UInt", v348, false, true);
      const v350 = stdlib.safeAdd(v349, stdlib.checkedBigNumberify('252:39:decimal', stdlib.UInt_max, '1'));
      
      return v350;}),
    computeMint_: ((_v351, _v352, _v353 ) => {
        const v351 = stdlib.protect(ctc1, _v351, null);
        const v352 = stdlib.protect(ctc1, _v352, null);
        const v353 = stdlib.protect(ctc1, _v353, null);
      
      const v354 = v351.A;
      const v355 = v351.B;
      const v356 = v352.A;
      const v357 = v352.B;
      const v359 = v353.B;
      let v360;
      const v367 = stdlib.eq(v359, stdlib.checkedBigNumberify('337:19:decimal', stdlib.UInt_max, '0'));
      if (v367) {
        const v368 = stdlib.cast("UInt", "UInt256", v354, false, true);
        const v369 = stdlib.cast("UInt", "UInt256", v355, false, true);
        const v370 = stdlib.safeMul256(v368, v369);
        const v371 = stdlib.sqrt256(v370);
        const v372 = stdlib.cast("UInt256", "UInt", v371, false, true);
        v360 = v372;
        }
      else {
        const v381 = stdlib.safeMuldiv(v354, v359, v356);
        const v388 = stdlib.safeMuldiv(v355, v359, v357);
        const v390 = stdlib.lt(v381, v388);
        const v391 = v390 ? v381 : v388;
        v360 = v391;
        }
      
      return v360;}),
    computeSwap_: ((_v392, _v393, _v394, _v395 ) => {
        const v392 = stdlib.protect(ctc2, _v392, null);
        const v393 = stdlib.protect(ctc1, _v393, null);
        const v394 = stdlib.protect(ctc1, _v394, null);
        const v395 = stdlib.protect(ctc4, _v395, null);
      
      const v396 = v393.A;
      const v397 = v393.B;
      const v398 = v394.A;
      const v399 = v394.B;
      const v401 = v395.protoFee;
      const v402 = v395.lpFee;
      const v403 = v395.totFee;
      const v404 = stdlib.lt(v401, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v405 = stdlib.lt(v402, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v406 = v404 ? v405 : false;
      let v409;
      if (v406) {
        const v407 = stdlib.safeAdd(v402, v401);
        const v408 = stdlib.eq(v403, v407);
        v409 = v408;
        }
      else {
        v409 = false;
        }
      const v410 = stdlib.lt(v403, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v411 = v409 ? v410 : false;
      const v412 = stdlib.gt(v403, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v413 = v411 ? v412 : false;
      stdlib.assert(v413, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v415 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v415, {
        at: 'reach standard library:57:5:application',
        fs: ['at 328:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v431;
      if (v392) {
        const v436 = stdlib.eq(v397, stdlib.checkedBigNumberify('./index.rsh:315:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v436, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v459 = stdlib.cast("UInt", "UInt256", v399, false, true);
        const v460 = stdlib.cast("UInt", "UInt256", v398, false, true);
        const v461 = stdlib.cast("UInt", "UInt256", v396, false, true);
        const v462 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v403);
        const v463 = stdlib.cast("UInt", "UInt256", v462, false, true);
        const v464 = stdlib.safeMul256(v461, v463);
        const v465 = stdlib.safeMul256(v460, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v466 = stdlib.safeAdd256(v465, v464);
        const v467 = stdlib.safeMul256(v464, v459);
        const v468 = stdlib.safeDiv256(v467, v466);
        const v469 = stdlib.cast("UInt256", "UInt", v468, false, true);
        const v476 = stdlib.safeMul(v401, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v477 = stdlib.safeDiv(v476, v403);
        const v484 = stdlib.safeAdd(v398, v396);
        const v492 = stdlib.safeMuldiv(v396, v399, v484);
        const v497 = stdlib.safeSub(v492, v469);
        const v503 = stdlib.safeMuldiv(v497, v477, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v508 = stdlib.safeMuldiv(v396, v401, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v516 = stdlib.safeMuldiv(v508, v399, v484);
        const v517 = stdlib.gt(v516, v503);
        const v518 = [v508, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v519 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v503];
        const v520 = v517 ? v518 : v519;
        const v522 = v520[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v523 = v520[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v524 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v469
          };
        const v525 = {
          A: v522,
          B: v523
          };
        const v526 = [v524, v525, v396];
        v431 = v526;
        }
      else {
        const v527 = stdlib.eq(v396, stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v527, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:320:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at 329:34:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v550 = stdlib.cast("UInt", "UInt256", v398, false, true);
        const v551 = stdlib.cast("UInt", "UInt256", v399, false, true);
        const v552 = stdlib.cast("UInt", "UInt256", v397, false, true);
        const v553 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v403);
        const v554 = stdlib.cast("UInt", "UInt256", v553, false, true);
        const v555 = stdlib.safeMul256(v552, v554);
        const v556 = stdlib.safeMul256(v551, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v557 = stdlib.safeAdd256(v556, v555);
        const v558 = stdlib.safeMul256(v555, v550);
        const v559 = stdlib.safeDiv256(v558, v557);
        const v560 = stdlib.cast("UInt256", "UInt", v559, false, true);
        const v567 = stdlib.safeMul(v401, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v568 = stdlib.safeDiv(v567, v403);
        const v575 = stdlib.safeAdd(v399, v397);
        const v583 = stdlib.safeMuldiv(v397, v398, v575);
        const v588 = stdlib.safeSub(v583, v560);
        const v594 = stdlib.safeMuldiv(v588, v568, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v599 = stdlib.safeMuldiv(v397, v401, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v607 = stdlib.safeMuldiv(v599, v398, v575);
        const v608 = stdlib.gt(v607, v594);
        const v609 = [v599, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v610 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v594];
        const v611 = v608 ? v609 : v610;
        const v613 = v611[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v614 = v611[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v615 = {
          A: v560,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v616 = {
          A: v614,
          B: v613
          };
        const v617 = [v615, v616, v397];
        v431 = v617;
        }
      const v618 = v431[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '0')];
      const v619 = v431[stdlib.checkedBigNumberify('329:11:array', stdlib.UInt_max, '1')];
      const v621 = v618.A;
      const v622 = v618.B;
      const v623 = v619.A;
      const v624 = v619.B;
      const v625 = {
        A: v621,
        B: v622
        };
      const v626 = {
        A: v623,
        B: v624
        };
      const v627 = [v625, v626];
      
      return v627;})
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
      const [v10855, v10873, v10901, v10928, v10929, v10930, v10931] = svs;
      return (await ((async () => {
        
        const v24552 = v10928.A;
        const v24553 = v10928.B;
        const v24554 = v10929.A;
        const v24555 = v10929.B;
        const v24556 = v10931.protoFee;
        const v24557 = v10931.lpFee;
        const v24558 = v10931.totFee;
        const v24559 = v10931.protoAddr;
        const v24560 = v10931.locked;
        const v24561 = v10930.A;
        const v24562 = v10930.B;
        const v24563 = {
          A: v24552,
          B: v24553
          };
        const v24564 = {
          A: v24554,
          B: v24555
          };
        const v24565 = {
          locked: v24560,
          lpFee: v24557,
          protoAddr: v24559,
          protoFee: v24556,
          totFee: v24558
          };
        const v24566 = {
          A: v24561,
          B: v24562
          };
        const v24568 = {
          liquidityToken: v10901,
          lptBals: v24563,
          poolBals: v24564,
          protoBals: v24566,
          protoInfo: v24565,
          tokA: v10873,
          tokB: v10855
          };
        
        return v24568;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = svs;
      return (await ((async () => {
        
        const v11002 = v10928.A;
        const v11003 = v10928.B;
        const v11004 = v10929.A;
        const v11005 = v10929.B;
        const v11006 = v10931.protoFee;
        const v11007 = v10931.lpFee;
        const v11008 = v10931.totFee;
        const v11009 = v10931.protoAddr;
        const v11010 = v10931.locked;
        const v11011 = v10930.A;
        const v11012 = v10930.B;
        const v11013 = {
          A: v11002,
          B: v11003
          };
        const v11014 = {
          A: v11004,
          B: v11005
          };
        const v11015 = {
          locked: v11010,
          lpFee: v11007,
          protoAddr: v11009,
          protoFee: v11006,
          totFee: v11008
          };
        const v11016 = {
          A: v11011,
          B: v11012
          };
        const v11018 = {
          liquidityToken: v10901,
          lptBals: v11013,
          poolBals: v11014,
          protoBals: v11016,
          protoInfo: v11015,
          tokA: v10873,
          tokB: v10855
          };
        
        return v11018;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v10855, v10873, v10901, v10928, v10929, v10930, v10931] = svs;
      return (await ((async (_v24792 ) => {
          const v24792 = stdlib.protect(ctc3, _v24792, null);
        
        const v24793 = v10929.A;
        const v24794 = v10929.B;
        const v24797 = v10931.totFee;
        const v24798 = stdlib.safeSub(v24794, v24792);
        const v24799 = stdlib.cast("UInt", "UInt256", v24798, false, true);
        const v24800 = stdlib.cast("UInt", "UInt256", v24793, false, true);
        const v24801 = stdlib.cast("UInt", "UInt256", v24792, false, true);
        const v24802 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v24797);
        const v24803 = stdlib.cast("UInt", "UInt256", v24802, false, true);
        const v24804 = stdlib.safeMul256(v24801, v24803);
        const v24805 = stdlib.safeMul256(v24799, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24806 = stdlib.safeMul256(v24804, v24800);
        const v24807 = stdlib.safeDiv256(v24806, v24805);
        const v24808 = stdlib.cast("UInt256", "UInt", v24807, false, true);
        const v24809 = stdlib.safeAdd(v24808, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v24809;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = svs;
      return (await ((async (_v11242 ) => {
          const v11242 = stdlib.protect(ctc3, _v11242, null);
        
        const v11243 = v10929.A;
        const v11244 = v10929.B;
        const v11247 = v10931.totFee;
        const v11248 = stdlib.safeSub(v11244, v11242);
        const v11249 = stdlib.cast("UInt", "UInt256", v11248, false, true);
        const v11250 = stdlib.cast("UInt", "UInt256", v11243, false, true);
        const v11251 = stdlib.cast("UInt", "UInt256", v11242, false, true);
        const v11252 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11247);
        const v11253 = stdlib.cast("UInt", "UInt256", v11252, false, true);
        const v11254 = stdlib.safeMul256(v11251, v11253);
        const v11255 = stdlib.safeMul256(v11249, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11256 = stdlib.safeMul256(v11254, v11250);
        const v11257 = stdlib.safeDiv256(v11256, v11255);
        const v11258 = stdlib.cast("UInt256", "UInt", v11257, false, true);
        const v11259 = stdlib.safeAdd(v11258, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v11259;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v10855, v10873, v10901, v10928, v10929, v10930, v10931] = svs;
      return (await ((async (_v24847 ) => {
          const v24847 = stdlib.protect(ctc3, _v24847, null);
        
        const v24848 = v10929.A;
        const v24849 = v10929.B;
        const v24852 = v10931.totFee;
        const v24853 = stdlib.safeSub(v24848, v24847);
        const v24854 = stdlib.cast("UInt", "UInt256", v24853, false, true);
        const v24855 = stdlib.cast("UInt", "UInt256", v24849, false, true);
        const v24856 = stdlib.cast("UInt", "UInt256", v24847, false, true);
        const v24857 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v24852);
        const v24858 = stdlib.cast("UInt", "UInt256", v24857, false, true);
        const v24859 = stdlib.safeMul256(v24856, v24858);
        const v24860 = stdlib.safeMul256(v24854, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24861 = stdlib.safeMul256(v24859, v24855);
        const v24862 = stdlib.safeDiv256(v24861, v24860);
        const v24863 = stdlib.cast("UInt256", "UInt", v24862, false, true);
        const v24864 = stdlib.safeAdd(v24863, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v24864;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = svs;
      return (await ((async (_v11297 ) => {
          const v11297 = stdlib.protect(ctc3, _v11297, null);
        
        const v11298 = v10929.A;
        const v11299 = v10929.B;
        const v11302 = v10931.totFee;
        const v11303 = stdlib.safeSub(v11298, v11297);
        const v11304 = stdlib.cast("UInt", "UInt256", v11303, false, true);
        const v11305 = stdlib.cast("UInt", "UInt256", v11299, false, true);
        const v11306 = stdlib.cast("UInt", "UInt256", v11297, false, true);
        const v11307 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11302);
        const v11308 = stdlib.cast("UInt", "UInt256", v11307, false, true);
        const v11309 = stdlib.safeMul256(v11306, v11308);
        const v11310 = stdlib.safeMul256(v11304, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11311 = stdlib.safeMul256(v11309, v11305);
        const v11312 = stdlib.safeDiv256(v11311, v11310);
        const v11313 = stdlib.cast("UInt256", "UInt", v11312, false, true);
        const v11314 = stdlib.safeAdd(v11313, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        
        return v11314;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v10855, v10873, v10901, v10928, v10929, v10930, v10931] = svs;
      return (await ((async (_v24575 ) => {
          const v24575 = stdlib.protect(ctc3, _v24575, null);
        
        const v24577 = v10931.locked;
        const v24578 = v24577 ? false : true;
        stdlib.assert(v24578, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v24580 = v10929.A;
        const v24581 = v10929.B;
        const v24583 = v10931.protoFee;
        const v24584 = v10931.totFee;
        const v24585 = stdlib.cast("UInt", "UInt256", v24581, false, true);
        const v24586 = stdlib.cast("UInt", "UInt256", v24580, false, true);
        const v24587 = stdlib.cast("UInt", "UInt256", v24575, false, true);
        const v24588 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v24584);
        const v24589 = stdlib.cast("UInt", "UInt256", v24588, false, true);
        const v24590 = stdlib.safeMul256(v24587, v24589);
        const v24591 = stdlib.safeMul256(v24586, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24592 = stdlib.safeAdd256(v24591, v24590);
        const v24593 = stdlib.safeMul256(v24590, v24585);
        const v24594 = stdlib.safeDiv256(v24593, v24592);
        const v24595 = stdlib.cast("UInt256", "UInt", v24594, false, true);
        const v24601 = stdlib.safeMul(v24583, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v24602 = stdlib.safeDiv(v24601, v24584);
        const v24607 = stdlib.safeAdd(v24580, v24575);
        const v24611 = stdlib.safeMuldiv(v24575, v24581, v24607);
        const v24614 = stdlib.safeSub(v24611, v24595);
        const v24616 = stdlib.safeMuldiv(v24614, v24602, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v24618 = stdlib.safeMuldiv(v24575, v24583, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v24622 = stdlib.safeMuldiv(v24618, v24581, v24607);
        const v24623 = stdlib.gt(v24622, v24616);
        const v24624 = [v24618, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24625 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24616];
        const v24626 = v24623 ? v24624 : v24625;
        const v24628 = v24626[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v24629 = v24626[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v24647 = stdlib.safeSub(v24581, v24595);
        const v24651 = stdlib.safeSub(v24607, v24628);
        const v24654 = stdlib.safeSub(v24647, v24629);
        const v24667 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v24595);
        stdlib.assert(v24667, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v24673 = stdlib.safeMul256(v24586, v24585);
        const v24674 = stdlib.cast("UInt", "UInt256", v24651, false, true);
        const v24675 = stdlib.cast("UInt", "UInt256", v24654, false, true);
        const v24676 = stdlib.safeMul256(v24674, v24675);
        const v24677 = stdlib.ge256(v24676, v24673);
        stdlib.assert(v24677, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v24595;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = svs;
      return (await ((async (_v11025 ) => {
          const v11025 = stdlib.protect(ctc3, _v11025, null);
        
        const v11027 = v10931.locked;
        const v11028 = v11027 ? false : true;
        stdlib.assert(v11028, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v11030 = v10929.A;
        const v11031 = v10929.B;
        const v11033 = v10931.protoFee;
        const v11034 = v10931.totFee;
        const v11035 = stdlib.cast("UInt", "UInt256", v11031, false, true);
        const v11036 = stdlib.cast("UInt", "UInt256", v11030, false, true);
        const v11037 = stdlib.cast("UInt", "UInt256", v11025, false, true);
        const v11038 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11034);
        const v11039 = stdlib.cast("UInt", "UInt256", v11038, false, true);
        const v11040 = stdlib.safeMul256(v11037, v11039);
        const v11041 = stdlib.safeMul256(v11036, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11042 = stdlib.safeAdd256(v11041, v11040);
        const v11043 = stdlib.safeMul256(v11040, v11035);
        const v11044 = stdlib.safeDiv256(v11043, v11042);
        const v11045 = stdlib.cast("UInt256", "UInt", v11044, false, true);
        const v11051 = stdlib.safeMul(v11033, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v11052 = stdlib.safeDiv(v11051, v11034);
        const v11057 = stdlib.safeAdd(v11030, v11025);
        const v11061 = stdlib.safeMuldiv(v11025, v11031, v11057);
        const v11064 = stdlib.safeSub(v11061, v11045);
        const v11066 = stdlib.safeMuldiv(v11064, v11052, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v11068 = stdlib.safeMuldiv(v11025, v11033, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v11072 = stdlib.safeMuldiv(v11068, v11031, v11057);
        const v11073 = stdlib.gt(v11072, v11066);
        const v11074 = [v11068, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11075 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11066];
        const v11076 = v11073 ? v11074 : v11075;
        const v11078 = v11076[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v11079 = v11076[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v11097 = stdlib.safeSub(v11031, v11045);
        const v11101 = stdlib.safeSub(v11057, v11078);
        const v11104 = stdlib.safeSub(v11097, v11079);
        const v11117 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v11045);
        stdlib.assert(v11117, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v11123 = stdlib.safeMul256(v11036, v11035);
        const v11124 = stdlib.cast("UInt", "UInt256", v11101, false, true);
        const v11125 = stdlib.cast("UInt", "UInt256", v11104, false, true);
        const v11126 = stdlib.safeMul256(v11124, v11125);
        const v11127 = stdlib.ge256(v11126, v11123);
        stdlib.assert(v11127, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:570:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:569:24:application call to [unknown function] (defined at: ./index.rsh:569:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v11045;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v10855, v10873, v10901, v10928, v10929, v10930, v10931] = svs;
      return (await ((async (_v24683 ) => {
          const v24683 = stdlib.protect(ctc3, _v24683, null);
        
        const v24685 = v10931.locked;
        const v24686 = v24685 ? false : true;
        stdlib.assert(v24686, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v24688 = v10929.A;
        const v24689 = v10929.B;
        const v24691 = v10931.protoFee;
        const v24692 = v10931.totFee;
        const v24693 = stdlib.cast("UInt", "UInt256", v24688, false, true);
        const v24694 = stdlib.cast("UInt", "UInt256", v24689, false, true);
        const v24695 = stdlib.cast("UInt", "UInt256", v24683, false, true);
        const v24696 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v24692);
        const v24697 = stdlib.cast("UInt", "UInt256", v24696, false, true);
        const v24698 = stdlib.safeMul256(v24695, v24697);
        const v24699 = stdlib.safeMul256(v24694, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24700 = stdlib.safeAdd256(v24699, v24698);
        const v24701 = stdlib.safeMul256(v24698, v24693);
        const v24702 = stdlib.safeDiv256(v24701, v24700);
        const v24703 = stdlib.cast("UInt256", "UInt", v24702, false, true);
        const v24709 = stdlib.safeMul(v24691, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v24710 = stdlib.safeDiv(v24709, v24692);
        const v24715 = stdlib.safeAdd(v24689, v24683);
        const v24719 = stdlib.safeMuldiv(v24683, v24688, v24715);
        const v24722 = stdlib.safeSub(v24719, v24703);
        const v24724 = stdlib.safeMuldiv(v24722, v24710, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v24726 = stdlib.safeMuldiv(v24683, v24691, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v24730 = stdlib.safeMuldiv(v24726, v24688, v24715);
        const v24731 = stdlib.gt(v24730, v24724);
        const v24732 = [v24726, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24733 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24724];
        const v24734 = v24731 ? v24732 : v24733;
        const v24736 = v24734[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v24737 = v24734[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v24753 = stdlib.safeSub(v24688, v24703);
        const v24759 = stdlib.safeSub(v24753, v24737);
        const v24762 = stdlib.safeSub(v24715, v24736);
        const v24775 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v24703);
        stdlib.assert(v24775, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v24782 = stdlib.safeMul256(v24693, v24694);
        const v24783 = stdlib.cast("UInt", "UInt256", v24759, false, true);
        const v24784 = stdlib.cast("UInt", "UInt256", v24762, false, true);
        const v24785 = stdlib.safeMul256(v24783, v24784);
        const v24786 = stdlib.ge256(v24785, v24782);
        stdlib.assert(v24786, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v24703;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = svs;
      return (await ((async (_v11133 ) => {
          const v11133 = stdlib.protect(ctc3, _v11133, null);
        
        const v11135 = v10931.locked;
        const v11136 = v11135 ? false : true;
        stdlib.assert(v11136, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'locked',
          who: 'Module'
          });
        const v11138 = v10929.A;
        const v11139 = v10929.B;
        const v11141 = v10931.protoFee;
        const v11142 = v10931.totFee;
        const v11143 = stdlib.cast("UInt", "UInt256", v11138, false, true);
        const v11144 = stdlib.cast("UInt", "UInt256", v11139, false, true);
        const v11145 = stdlib.cast("UInt", "UInt256", v11133, false, true);
        const v11146 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11142);
        const v11147 = stdlib.cast("UInt", "UInt256", v11146, false, true);
        const v11148 = stdlib.safeMul256(v11145, v11147);
        const v11149 = stdlib.safeMul256(v11144, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v11150 = stdlib.safeAdd256(v11149, v11148);
        const v11151 = stdlib.safeMul256(v11148, v11143);
        const v11152 = stdlib.safeDiv256(v11151, v11150);
        const v11153 = stdlib.cast("UInt256", "UInt", v11152, false, true);
        const v11159 = stdlib.safeMul(v11141, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v11160 = stdlib.safeDiv(v11159, v11142);
        const v11165 = stdlib.safeAdd(v11139, v11133);
        const v11169 = stdlib.safeMuldiv(v11133, v11138, v11165);
        const v11172 = stdlib.safeSub(v11169, v11153);
        const v11174 = stdlib.safeMuldiv(v11172, v11160, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v11176 = stdlib.safeMuldiv(v11133, v11141, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v11180 = stdlib.safeMuldiv(v11176, v11138, v11165);
        const v11181 = stdlib.gt(v11180, v11174);
        const v11182 = [v11176, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11183 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11174];
        const v11184 = v11181 ? v11182 : v11183;
        const v11186 = v11184[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v11187 = v11184[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v11203 = stdlib.safeSub(v11138, v11153);
        const v11209 = stdlib.safeSub(v11203, v11187);
        const v11212 = stdlib.safeSub(v11165, v11186);
        const v11225 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v11153);
        stdlib.assert(v11225, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'slippage',
          who: 'Module'
          });
        const v11232 = stdlib.safeMul256(v11143, v11144);
        const v11233 = stdlib.cast("UInt", "UInt256", v11209, false, true);
        const v11234 = stdlib.cast("UInt", "UInt256", v11212, false, true);
        const v11235 = stdlib.safeMul256(v11233, v11234);
        const v11236 = stdlib.ge256(v11235, v11232);
        stdlib.assert(v11236, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:42:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:573:24:application call to [unknown function] (defined at: ./index.rsh:573:24:application)'],
          msg: 'constant product',
          who: 'Module'
          });
        
        return v11153;}))(...args));
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
      2: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7],
      4: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]
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
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc6], ['locked', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc8]);
  const ctc11 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc12 = stdlib.T_Tuple([ctc11, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc5, ctc11]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_2829: ctc10,
    Provider_deposit0_2829: ctc12,
    Provider_withdraw0_2829: ctc13,
    Trader_exactSwapAForB0_2829: ctc14,
    Trader_exactSwapBForA0_2829: ctc14,
    Trader_swapAForB0_2829: ctc14,
    Trader_swapBForA0_2829: ctc14
    });
  const ctc16 = stdlib.T_Tuple([]);
  
  
  const v10843 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v10844 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v10845 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v10846 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v10850 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v10850, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [null, v10846, v10843, v10844, v10845],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:420:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:420:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v10854, v10855, v10856, v10857, v10858], secs: v10860, time: v10859, didSend: v710, from: v10853 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v10855
        });
      ;
      const v10869 = await ctc.getContractInfo();
      const v10872 = [];
      const v10873 = ['None', null];
      const v10874 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v10858,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
      const v10875 = await txn1.getOutput('internal', 'v10874', ctc9, v10874);
      const v10877 = v10875[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
      const v10878 = v10875[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
      const v10897 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10898 = '                                                                                                ';
      const v10899 = '                                ';
      const v10900 = stdlib.simTokenNew(sim_r, v10856, v10857, v10898, v10899, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v10901 = await txn1.getOutput('internal', 'v10900', ctc3, v10900);
      
      const v10925 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10927 = false;
      const v10928 = v10897;
      const v10929 = v10925;
      const v10930 = v10925;
      const v10931 = v10878;
      const v10932 = v10859;
      const v10935 = v10877;
      
      if (await (async () => {
        const v11001 = v10927 ? false : true;
        
        return v11001;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v10854, v10855, v10856, v10857, v10858], secs: v10860, time: v10859, didSend: v710, from: v10853 } = txn1;
  const v10866 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v10866, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:421:30:application call to "checkInput" (defined at: ./index.rsh:409:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  ;
  const v10869 = await ctc.getContractInfo();
  const v10872 = [];
  const v10873 = ['None', null];
  const v10874 = undefined /* Remote */;
  const v10875 = await txn1.getOutput('internal', 'v10874', ctc9, v10874);
  const v10877 = v10875[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '0')];
  const v10878 = v10875[stdlib.checkedBigNumberify('./index.rsh:425:14:application', stdlib.UInt_max, '1')];
  const v10879 = v10878.protoFee;
  const v10880 = v10878.lpFee;
  const v10881 = v10878.totFee;
  const v10882 = stdlib.lt(v10879, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v10883 = stdlib.lt(v10880, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v10884 = v10882 ? v10883 : false;
  let v10885;
  if (v10884) {
    const v10886 = stdlib.safeAdd(v10880, v10879);
    const v10887 = stdlib.eq(v10881, v10886);
    v10885 = v10887;
    }
  else {
    v10885 = false;
    }
  const v10888 = stdlib.lt(v10881, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v10889 = v10885 ? v10888 : false;
  const v10890 = stdlib.gt(v10881, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v10891 = v10889 ? v10890 : false;
  stdlib.assert(v10891, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v10896 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10877);
  stdlib.assert(v10896, {
    at: './index.rsh:425:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v10897 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v10898 = '                                                                                                ';
  const v10899 = '                                ';
  const v10900 = undefined /* TokenNew */;
  const v10901 = await txn1.getOutput('internal', 'v10900', ctc3, v10900);
  const v10902 = [v10855];
  const v24949 = v10902[stdlib.checkedBigNumberify('reach standard library:151:21:application', stdlib.UInt_max, '0')];
  const v24953 = stdlib.tokenEq(v10901, v24949);
  const v10910 = v24953 ? false : true;
  stdlib.assert(v10910, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v10915 = stdlib.tokenEq(v10901, v10855);
  const v10916 = v10915 ? false : true;
  stdlib.assert(v10916, {
    at: './index.rsh:429:25:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v10901), {
    at: './index.rsh:437:36:application',
    fs: ['at ./index.rsh:437:36:application call to [unknown function] (defined at: ./index.rsh:437:36:function exp)', 'at ./index.rsh:437:36:application call to "liftedInteract" (defined at: ./index.rsh:437:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v10925 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v10927 = false;
  let v10928 = v10897;
  let v10929 = v10925;
  let v10930 = v10925;
  let v10931 = v10878;
  let v10932 = v10859;
  let v10935 = v10877;
  
  let txn2 = txn1;
  while (await (async () => {
    const v11001 = v10927 ? false : true;
    
    return v11001;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn3;
    switch (v12845[0]) {
      case 'Protocol_harvest0_2829': {
        const v12848 = v12845[1];
        undefined /* setApiDetails */;
        const v12854 = v12848[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
        const v12855 = v10931.protoAddr;
        const v12856 = stdlib.addressEq(v12844, v12855);
        stdlib.assert(v12856, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v12858 = v12854.protoFee;
        const v12859 = v12854.lpFee;
        const v12860 = v12854.totFee;
        const v12861 = stdlib.lt(v12858, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
        const v12862 = stdlib.lt(v12859, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
        const v12863 = v12861 ? v12862 : false;
        let v12864;
        if (v12863) {
          const v12865 = stdlib.safeAdd(v12859, v12858);
          const v12866 = stdlib.eq(v12860, v12865);
          v12864 = v12866;
          }
        else {
          v12864 = false;
          }
        const v12867 = stdlib.lt(v12860, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
        const v12868 = v12864 ? v12867 : false;
        const v12869 = stdlib.gt(v12860, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
        const v12870 = v12868 ? v12869 : false;
        stdlib.assert(v12870, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        ;
        ;
        const v13571 = v12848[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
        let v13582;
        if (v12863) {
          const v13583 = stdlib.safeAdd(v12859, v12858);
          const v13584 = stdlib.eq(v12860, v13583);
          v13582 = v13584;
          }
        else {
          v13582 = false;
          }
        const v13586 = v13582 ? v12867 : false;
        const v13588 = v13586 ? v12869 : false;
        stdlib.assert(v13588, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v13591 = v10928.B;
        const v13594 = v12854.locked;
        const v13595 = stdlib.eq(v13591, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
        const v13596 = v13594 ? v13595 : false;
        const v13597 = v10929.A;
        const v13598 = v10929.B;
        const v13599 = stdlib.eq(v13597, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
        const v13600 = stdlib.eq(v13598, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
        const v13601 = v13599 ? v13600 : false;
        const v13602 = v13596 ? v13601 : false;
        const v13606 = (stdlib.le(await ctc.getBalance(), v10935) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10935));
        const v13607 = stdlib.safeAdd(v13606, v10935);
        const v13608 = v10930.A;
        const v13609 = v10930.B;
        const v13610 = stdlib.safeAdd(v13608, v13606);
        const v13629 = stdlib.sub(v13607, v13610);
        ;
        ;
        const v13641 = {
          A: v13608,
          B: v13609
          };
        const v13642 = [v13641, v13606];
        await txn3.getOutput('Protocol_harvest', 'v13642', ctc12, v13642);
        const v13670 = v12854.protoAddr;
        const v13672 = {
          locked: v13594,
          lpFee: v12859,
          protoAddr: v13670,
          protoFee: v12858,
          totFee: v12860
          };
        null;
        const cv10927 = v13602;
        const cv10928 = v10928;
        const cv10929 = v10929;
        const cv10930 = v10925;
        const cv10931 = v12854;
        const cv10932 = v12846;
        const cv10935 = v13629;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_2829': {
        const v14520 = v12845[1];
        undefined /* setApiDetails */;
        const v14570 = v14520[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
        const v14571 = v14520[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
        const v14572 = v10931.locked;
        const v14573 = v14572 ? false : true;
        stdlib.assert(v14573, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        let v14575;
        const v14576 = v14570.A;
        const v14577 = v14570.B;
        const v14579 = v10928.B;
        const v14581 = stdlib.eq(v14579, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
        if (v14581) {
          const v14582 = stdlib.cast("UInt", "UInt256", v14576, false, true);
          const v14583 = stdlib.cast("UInt", "UInt256", v14577, false, true);
          const v14584 = stdlib.safeMul256(v14582, v14583);
          const v14585 = stdlib.sqrt256(v14584);
          const v14586 = stdlib.cast("UInt256", "UInt", v14585, false, true);
          v14575 = v14586;
          }
        else {
          const v14587 = v10929.A;
          const v14588 = v10929.B;
          const v14592 = stdlib.safeMuldiv(v14576, v14579, v14587);
          const v14596 = stdlib.safeMuldiv(v14577, v14579, v14588);
          const v14597 = stdlib.lt(v14592, v14596);
          const v14598 = v14597 ? v14592 : v14596;
          v14575 = v14598;
          }
        const v14599 = stdlib.le(v14571, v14575);
        stdlib.assert(v14599, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v15229 = stdlib.add(v10935, v14576);
        ;
        ;
        ;
        let v15354;
        const v15357 = v10928.A;
        if (v14581) {
          const v15361 = stdlib.cast("UInt", "UInt256", v14576, false, true);
          const v15362 = stdlib.cast("UInt", "UInt256", v14577, false, true);
          const v15363 = stdlib.safeMul256(v15361, v15362);
          const v15364 = stdlib.sqrt256(v15363);
          const v15365 = stdlib.cast("UInt256", "UInt", v15364, false, true);
          v15354 = v15365;
          }
        else {
          const v15366 = v10929.A;
          const v15367 = v10929.B;
          const v15371 = stdlib.safeMuldiv(v14576, v14579, v15366);
          const v15375 = stdlib.safeMuldiv(v14577, v14579, v15367);
          const v15376 = stdlib.lt(v15371, v15375);
          const v15377 = v15376 ? v15371 : v15375;
          v15354 = v15377;
          }
        const v15378 = stdlib.le(v14571, v15354);
        stdlib.assert(v15378, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v15381 = v10929.A;
        const v15385 = stdlib.safeAdd(v14576, v15381);
        const v15387 = v10929.B;
        const v15391 = stdlib.safeAdd(v14577, v15387);
        const v15392 = {
          A: v15385,
          B: v15391
          };
        const v15399 = stdlib.safeSub(v15357, v15354);
        const v15403 = stdlib.safeAdd(v14579, v15354);
        const v15404 = {
          A: v15399,
          B: v15403
          };
        ;
        await txn3.getOutput('Provider_deposit', 'v15354', ctc5, v15354);
        const v15440 = {
          A: v14576,
          B: v14577
          };
        const v15441 = {
          A: v15385,
          B: v15391
          };
        const v15442 = {
          A: v15399,
          B: v15403
          };
        null;
        const cv10927 = false;
        const cv10928 = v15404;
        const cv10929 = v15392;
        const cv10930 = v10930;
        const cv10931 = v10931;
        const cv10932 = v12846;
        const cv10935 = v15229;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_2829': {
        const v16192 = v12845[1];
        undefined /* setApiDetails */;
        const v16317 = v16192[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
        const v16318 = v16192[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
        const v16320 = v10928.B;
        const v16323 = v10929.A;
        const v16324 = v10929.B;
        const v16328 = stdlib.safeMuldiv(v16317, v16323, v16320);
        const v16332 = stdlib.safeMuldiv(v16317, v16324, v16320);
        const v16334 = v16318.A;
        const v16335 = stdlib.le(v16334, v16328);
        stdlib.assert(v16335, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage A',
          who: 'Admin'
          });
        const v16337 = v16318.B;
        const v16338 = stdlib.le(v16337, v16332);
        stdlib.assert(v16338, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage B',
          who: 'Admin'
          });
        ;
        ;
        ;
        const v17123 = v10928.A;
        const v17151 = stdlib.safeAdd(v17123, v16317);
        const v17154 = stdlib.safeSub(v16320, v16317);
        const v17155 = {
          A: v17151,
          B: v17154
          };
        const v17160 = stdlib.safeSub(v16323, v16328);
        const v17164 = stdlib.safeSub(v16324, v16332);
        const v17165 = {
          A: v17160,
          B: v17164
          };
        const v17186 = stdlib.sub(v10935, v16328);
        ;
        ;
        const v17196 = {
          A: v16328,
          B: v16332
          };
        await txn3.getOutput('Provider_withdraw', 'v17196', ctc11, v17196);
        const v17209 = {
          A: v17160,
          B: v17164
          };
        const v17210 = {
          A: v17151,
          B: v17154
          };
        null;
        const cv10927 = false;
        const cv10928 = v17155;
        const cv10929 = v17165;
        const cv10930 = v10930;
        const cv10931 = v10931;
        const cv10932 = v12846;
        const cv10935 = v17186;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_2829': {
        const v17864 = v12845[1];
        undefined /* setApiDetails */;
        const v18047 = v17864[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
        const v18048 = v17864[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
        const v18050 = v10931.locked;
        const v18051 = v18050 ? false : true;
        stdlib.assert(v18051, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v18053 = v10929.A;
        const v18054 = v10929.B;
        const v18056 = v10931.protoFee;
        const v18057 = v10931.totFee;
        const v18058 = stdlib.safeSub(v18054, v18048);
        const v18059 = stdlib.cast("UInt", "UInt256", v18058, false, true);
        const v18060 = stdlib.cast("UInt", "UInt256", v18053, false, true);
        const v18061 = stdlib.cast("UInt", "UInt256", v18048, false, true);
        const v18062 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v18057);
        const v18063 = stdlib.cast("UInt", "UInt256", v18062, false, true);
        const v18064 = stdlib.safeMul256(v18061, v18063);
        const v18065 = stdlib.safeMul256(v18059, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v18066 = stdlib.safeMul256(v18064, v18060);
        const v18067 = stdlib.safeDiv256(v18066, v18065);
        const v18068 = stdlib.cast("UInt256", "UInt", v18067, false, true);
        const v18069 = stdlib.safeAdd(v18068, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v18070 = stdlib.ge(v18047, v18069);
        stdlib.assert(v18070, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v18072 = stdlib.safeSub(v18047, v18069);
        const v18078 = stdlib.safeMul(v18056, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v18079 = stdlib.safeDiv(v18078, v18057);
        const v18084 = stdlib.safeAdd(v18053, v18069);
        const v18088 = stdlib.safeMuldiv(v18069, v18054, v18084);
        const v18091 = stdlib.safeSub(v18088, v18048);
        const v18093 = stdlib.safeMuldiv(v18091, v18079, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v18095 = stdlib.safeMuldiv(v18069, v18056, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v18099 = stdlib.safeMuldiv(v18095, v18054, v18084);
        const v18100 = stdlib.gt(v18099, v18093);
        const v18101 = [v18095, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v18102 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18093];
        const v18103 = v18100 ? v18101 : v18102;
        const v18105 = v18103[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v18106 = v18103[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v18114 = stdlib.safeAdd(v18053, v18047);
        const v18122 = stdlib.safeSub(v18114, v18072);
        const v18129 = stdlib.safeSub(v18122, v18105);
        const v18132 = stdlib.safeSub(v18058, v18106);
        const v18145 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v18072);
        const v18146 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v18048);
        const v18147 = v18145 ? v18146 : false;
        stdlib.assert(v18147, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v18152 = stdlib.cast("UInt", "UInt256", v18054, false, true);
        const v18153 = stdlib.safeMul256(v18060, v18152);
        const v18154 = stdlib.cast("UInt", "UInt256", v18129, false, true);
        const v18155 = stdlib.cast("UInt", "UInt256", v18132, false, true);
        const v18156 = stdlib.safeMul256(v18154, v18155);
        const v18157 = stdlib.ge256(v18156, v18153);
        stdlib.assert(v18157, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        const v18573 = stdlib.add(v10935, v18047);
        ;
        ;
        ;
        const v18975 = {
          A: v18129,
          B: v18132
          };
        const v18976 = v10930.A;
        const v18980 = stdlib.safeAdd(v18976, v18105);
        const v18981 = v10930.B;
        const v18985 = stdlib.safeAdd(v18981, v18106);
        const v18986 = {
          A: v18980,
          B: v18985
          };
        const v19025 = stdlib.sub(v18573, v18072);
        ;
        ;
        const v19035 = {
          A: v18072,
          B: v18048
          };
        await txn3.getOutput('Trader_exactSwapAForB', 'v19035', ctc11, v19035);
        const v19045 = {
          A: v18047,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v19047 = {
          A: v18129,
          B: v18132
          };
        null;
        const cv10927 = false;
        const cv10928 = v10928;
        const cv10929 = v18975;
        const cv10930 = v18986;
        const cv10931 = v10931;
        const cv10932 = v12846;
        const cv10935 = v19025;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_2829': {
        const v19536 = v12845[1];
        undefined /* setApiDetails */;
        const v19848 = v19536[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
        const v19849 = v19536[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
        const v19851 = v10931.locked;
        const v19852 = v19851 ? false : true;
        stdlib.assert(v19852, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v19854 = v10929.A;
        const v19855 = v10929.B;
        const v19857 = v10931.protoFee;
        const v19858 = v10931.totFee;
        const v19859 = stdlib.safeSub(v19854, v19849);
        const v19860 = stdlib.cast("UInt", "UInt256", v19859, false, true);
        const v19861 = stdlib.cast("UInt", "UInt256", v19855, false, true);
        const v19862 = stdlib.cast("UInt", "UInt256", v19849, false, true);
        const v19863 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v19858);
        const v19864 = stdlib.cast("UInt", "UInt256", v19863, false, true);
        const v19865 = stdlib.safeMul256(v19862, v19864);
        const v19866 = stdlib.safeMul256(v19860, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v19867 = stdlib.safeMul256(v19865, v19861);
        const v19868 = stdlib.safeDiv256(v19867, v19866);
        const v19869 = stdlib.cast("UInt256", "UInt", v19868, false, true);
        const v19870 = stdlib.safeAdd(v19869, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
        const v19871 = stdlib.ge(v19848, v19870);
        stdlib.assert(v19871, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Admin'
          });
        const v19873 = stdlib.safeSub(v19848, v19870);
        const v19879 = stdlib.safeMul(v19857, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v19880 = stdlib.safeDiv(v19879, v19858);
        const v19885 = stdlib.safeAdd(v19855, v19870);
        const v19889 = stdlib.safeMuldiv(v19870, v19854, v19885);
        const v19892 = stdlib.safeSub(v19889, v19849);
        const v19894 = stdlib.safeMuldiv(v19892, v19880, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v19896 = stdlib.safeMuldiv(v19870, v19857, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v19900 = stdlib.safeMuldiv(v19896, v19854, v19885);
        const v19901 = stdlib.gt(v19900, v19894);
        const v19902 = [v19896, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v19903 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19894];
        const v19904 = v19901 ? v19902 : v19903;
        const v19906 = v19904[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v19907 = v19904[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v19919 = stdlib.safeAdd(v19855, v19848);
        const v19926 = stdlib.safeSub(v19919, v19873);
        const v19930 = stdlib.safeSub(v19859, v19907);
        const v19933 = stdlib.safeSub(v19926, v19906);
        const v19946 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v19849);
        const v19947 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v19873);
        const v19948 = v19946 ? v19947 : false;
        stdlib.assert(v19948, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v19952 = stdlib.cast("UInt", "UInt256", v19854, false, true);
        const v19954 = stdlib.safeMul256(v19952, v19861);
        const v19955 = stdlib.cast("UInt", "UInt256", v19930, false, true);
        const v19956 = stdlib.cast("UInt", "UInt256", v19933, false, true);
        const v19957 = stdlib.safeMul256(v19955, v19956);
        const v19958 = stdlib.ge256(v19957, v19954);
        stdlib.assert(v19958, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        const v20815 = {
          A: v19930,
          B: v19933
          };
        const v20816 = v10930.A;
        const v20820 = stdlib.safeAdd(v20816, v19907);
        const v20821 = v10930.B;
        const v20825 = stdlib.safeAdd(v20821, v19906);
        const v20826 = {
          A: v20820,
          B: v20825
          };
        const v20865 = stdlib.sub(v10935, v19849);
        ;
        ;
        const v20875 = {
          A: v19849,
          B: v19873
          };
        await txn3.getOutput('Trader_exactSwapBForA', 'v20875', ctc11, v20875);
        const v20885 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v19848
          };
        const v20887 = {
          A: v19930,
          B: v19933
          };
        null;
        const cv10927 = false;
        const cv10928 = v10928;
        const cv10929 = v20815;
        const cv10930 = v20826;
        const cv10931 = v10931;
        const cv10932 = v12846;
        const cv10935 = v20865;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_2829': {
        const v21208 = v12845[1];
        undefined /* setApiDetails */;
        const v21649 = v21208[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
        const v21650 = v21208[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
        const v21653 = v10931.locked;
        const v21654 = v21653 ? false : true;
        stdlib.assert(v21654, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v21656 = v10929.A;
        const v21657 = v10929.B;
        const v21659 = v10931.protoFee;
        const v21660 = v10931.totFee;
        const v21661 = stdlib.cast("UInt", "UInt256", v21657, false, true);
        const v21662 = stdlib.cast("UInt", "UInt256", v21656, false, true);
        const v21663 = stdlib.cast("UInt", "UInt256", v21649, false, true);
        const v21664 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v21660);
        const v21665 = stdlib.cast("UInt", "UInt256", v21664, false, true);
        const v21666 = stdlib.safeMul256(v21663, v21665);
        const v21667 = stdlib.safeMul256(v21662, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v21668 = stdlib.safeAdd256(v21667, v21666);
        const v21669 = stdlib.safeMul256(v21666, v21661);
        const v21670 = stdlib.safeDiv256(v21669, v21668);
        const v21671 = stdlib.cast("UInt256", "UInt", v21670, false, true);
        const v21677 = stdlib.safeMul(v21659, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v21678 = stdlib.safeDiv(v21677, v21660);
        const v21683 = stdlib.safeAdd(v21656, v21649);
        const v21687 = stdlib.safeMuldiv(v21649, v21657, v21683);
        const v21690 = stdlib.safeSub(v21687, v21671);
        const v21692 = stdlib.safeMuldiv(v21690, v21678, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v21694 = stdlib.safeMuldiv(v21649, v21659, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v21698 = stdlib.safeMuldiv(v21694, v21657, v21683);
        const v21699 = stdlib.gt(v21698, v21692);
        const v21700 = [v21694, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v21701 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v21692];
        const v21702 = v21699 ? v21700 : v21701;
        const v21704 = v21702[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
        const v21705 = v21702[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
        const v21723 = stdlib.safeSub(v21657, v21671);
        const v21727 = stdlib.safeSub(v21683, v21704);
        const v21730 = stdlib.safeSub(v21723, v21705);
        const v21743 = stdlib.le(v21650, v21671);
        stdlib.assert(v21743, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v21749 = stdlib.safeMul256(v21662, v21661);
        const v21750 = stdlib.cast("UInt", "UInt256", v21727, false, true);
        const v21751 = stdlib.cast("UInt", "UInt256", v21730, false, true);
        const v21752 = stdlib.safeMul256(v21750, v21751);
        const v21753 = stdlib.ge256(v21752, v21749);
        stdlib.assert(v21753, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        const v21917 = stdlib.add(v10935, v21649);
        ;
        ;
        ;
        const v22651 = {
          A: v21727,
          B: v21730
          };
        const v22652 = v10930.A;
        const v22656 = stdlib.safeAdd(v22652, v21704);
        const v22657 = v10930.B;
        const v22661 = stdlib.safeAdd(v22657, v21705);
        const v22662 = {
          A: v22656,
          B: v22661
          };
        ;
        const v22705 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v21671
          };
        await txn3.getOutput('Trader_swapAForB', 'v22705', ctc11, v22705);
        const v22715 = {
          A: v21649,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v22717 = {
          A: v21727,
          B: v21730
          };
        null;
        const cv10927 = false;
        const cv10928 = v10928;
        const cv10929 = v22651;
        const cv10930 = v22662;
        const cv10931 = v10931;
        const cv10932 = v12846;
        const cv10935 = v21917;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_2829': {
        const v22880 = v12845[1];
        undefined /* setApiDetails */;
        const v23444 = v22880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
        const v23445 = v22880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
        const v23448 = v10931.locked;
        const v23449 = v23448 ? false : true;
        stdlib.assert(v23449, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v23451 = v10929.A;
        const v23452 = v10929.B;
        const v23454 = v10931.protoFee;
        const v23455 = v10931.totFee;
        const v23456 = stdlib.cast("UInt", "UInt256", v23451, false, true);
        const v23457 = stdlib.cast("UInt", "UInt256", v23452, false, true);
        const v23458 = stdlib.cast("UInt", "UInt256", v23444, false, true);
        const v23459 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v23455);
        const v23460 = stdlib.cast("UInt", "UInt256", v23459, false, true);
        const v23461 = stdlib.safeMul256(v23458, v23460);
        const v23462 = stdlib.safeMul256(v23457, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v23463 = stdlib.safeAdd256(v23462, v23461);
        const v23464 = stdlib.safeMul256(v23461, v23456);
        const v23465 = stdlib.safeDiv256(v23464, v23463);
        const v23466 = stdlib.cast("UInt256", "UInt", v23465, false, true);
        const v23472 = stdlib.safeMul(v23454, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
        const v23473 = stdlib.safeDiv(v23472, v23455);
        const v23478 = stdlib.safeAdd(v23452, v23444);
        const v23482 = stdlib.safeMuldiv(v23444, v23451, v23478);
        const v23485 = stdlib.safeSub(v23482, v23466);
        const v23487 = stdlib.safeMuldiv(v23485, v23473, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
        const v23489 = stdlib.safeMuldiv(v23444, v23454, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
        const v23493 = stdlib.safeMuldiv(v23489, v23451, v23478);
        const v23494 = stdlib.gt(v23493, v23487);
        const v23495 = [v23489, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v23496 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v23487];
        const v23497 = v23494 ? v23495 : v23496;
        const v23499 = v23497[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
        const v23500 = v23497[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
        const v23516 = stdlib.safeSub(v23451, v23466);
        const v23522 = stdlib.safeSub(v23516, v23500);
        const v23525 = stdlib.safeSub(v23478, v23499);
        const v23538 = stdlib.le(v23445, v23466);
        stdlib.assert(v23538, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v23545 = stdlib.safeMul256(v23456, v23457);
        const v23546 = stdlib.cast("UInt", "UInt256", v23522, false, true);
        const v23547 = stdlib.cast("UInt", "UInt256", v23525, false, true);
        const v23548 = stdlib.safeMul256(v23546, v23547);
        const v23549 = stdlib.ge256(v23548, v23545);
        stdlib.assert(v23549, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        const v24481 = {
          A: v23522,
          B: v23525
          };
        const v24482 = v10930.A;
        const v24486 = stdlib.safeAdd(v24482, v23500);
        const v24487 = v10930.B;
        const v24491 = stdlib.safeAdd(v24487, v23499);
        const v24492 = {
          A: v24486,
          B: v24491
          };
        const v24530 = stdlib.sub(v10935, v23466);
        ;
        const v24531 = {
          A: v23466,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v24531', ctc11, v24531);
        const v24541 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v23444
          };
        const v24543 = {
          A: v23522,
          B: v23525
          };
        null;
        const cv10927 = false;
        const cv10928 = v10928;
        const cv10929 = v24481;
        const cv10930 = v24492;
        const cv10931 = v10931;
        const cv10932 = v12846;
        const cv10935 = v24530;
        
        v10927 = cv10927;
        v10928 = cv10928;
        v10929 = cv10929;
        v10930 = cv10930;
        v10931 = cv10931;
        v10932 = cv10932;
        v10935 = cv10935;
        
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
  const {data: [v24906], secs: v24908, time: v24907, didSend: v10504, from: v24905 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v24909 = null;
  await txn3.getOutput('Protocol_delete', 'v24909', ctc4, v24909);
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
  
  
  const [v10855, v10873, v10901, v10928, v10929, v10930, v10931] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v24904 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:605:3:application',
    fs: ['at ./index.rsh:605:3:application call to [unknown function] (defined at: ./index.rsh:605:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10928, v10929, v10930, v10931, v24904],
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
      
      
      const {data: [v24906], secs: v24908, time: v24907, didSend: v10504, from: v24905 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v24909 = null;
      const v24910 = await txn1.getOutput('Protocol_delete', 'v24909', ctc1, v24909);
      
      stdlib.simTokenBurn(sim_r, v10901, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v10901);
      sim_r.txns.push({
        kind: 'halt',
        tok: v10855
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
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v24906], secs: v24908, time: v24907, didSend: v10504, from: v24905 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v24909 = null;
  const v24910 = await txn1.getOutput('Protocol_delete', 'v24909', ctc1, v24909);
  stdlib.protect(ctc1, await interact.out(v24906, v24910), {
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
    Protocol_harvest0_2829: ctc8,
    Provider_deposit0_2829: ctc10,
    Provider_withdraw0_2829: ctc11,
    Trader_exactSwapAForB0_2829: ctc12,
    Trader_exactSwapBForA0_2829: ctc12,
    Trader_swapAForB0_2829: ctc12,
    Trader_swapBForA0_2829: ctc12
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11352 = ctc.selfAddress();
  const v11354 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_2829" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v11356 = v11354[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11357 = v11356.protoFee;
  const v11358 = v11356.lpFee;
  const v11359 = v11356.totFee;
  const v11360 = stdlib.lt(v11357, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
  const v11361 = stdlib.lt(v11358, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
  const v11362 = v11360 ? v11361 : false;
  let v11363;
  if (v11362) {
    const v11364 = stdlib.safeAdd(v11358, v11357);
    const v11365 = stdlib.eq(v11359, v11364);
    v11363 = v11365;
    }
  else {
    v11363 = false;
    }
  const v11366 = stdlib.lt(v11359, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
  const v11367 = v11363 ? v11366 : false;
  const v11368 = stdlib.gt(v11359, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
  const v11369 = v11367 ? v11368 : false;
  stdlib.assert(v11369, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_2829" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v11372 = v10931.protoAddr;
  const v11373 = stdlib.addressEq(v11352, v11372);
  stdlib.assert(v11373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_2829" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v11381;
  if (v11362) {
    const v11382 = stdlib.safeAdd(v11358, v11357);
    const v11383 = stdlib.eq(v11359, v11382);
    v11381 = v11383;
    }
  else {
    v11381 = false;
    }
  const v11385 = v11381 ? v11366 : false;
  const v11387 = v11385 ? v11368 : false;
  stdlib.assert(v11387, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to "runProtocol_harvest0_2829" (defined at: ./index.rsh:482:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v11414 = ['Protocol_harvest0_2829', v11354];
  
  let v12075;
  if (v11362) {
    const v12076 = stdlib.safeAdd(v11358, v11357);
    const v12077 = stdlib.eq(v11359, v12076);
    v12075 = v12077;
    }
  else {
    v12075 = false;
    }
  const v12079 = v12075 ? v11366 : false;
  const v12081 = v12079 ? v11368 : false;
  stdlib.assert(v12081, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v11414],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:488:26:decimal', stdlib.UInt_max, '0'), v10901], [stdlib.checkedBigNumberify('./index.rsh:488:32:decimal', stdlib.UInt_max, '0'), v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          const v12854 = v12848[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
          const v12858 = v12854.protoFee;
          const v12859 = v12854.lpFee;
          const v12860 = v12854.totFee;
          ;
          ;
          ;
          const v13571 = v12848[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
          const v13591 = v10928.B;
          const v13594 = v12854.locked;
          const v13595 = stdlib.eq(v13591, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
          const v13596 = v13594 ? v13595 : false;
          const v13597 = v10929.A;
          const v13598 = v10929.B;
          const v13599 = stdlib.eq(v13597, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
          const v13600 = stdlib.eq(v13598, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
          const v13601 = v13599 ? v13600 : false;
          const v13602 = v13596 ? v13601 : false;
          const v13606 = (stdlib.le(await ctc.getBalance(), v10935) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10935));
          const v13607 = stdlib.safeAdd(v13606, v10935);
          const v13608 = v10930.A;
          const v13609 = v10930.B;
          const v13610 = stdlib.safeAdd(v13608, v13606);
          const v13629 = stdlib.sub(v13607, v13610);
          sim_r.txns.push({
            kind: 'from',
            to: v13571,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v13571,
            tok: v10855
            });
          const v13641 = {
            A: v13608,
            B: v13609
            };
          const v13642 = [v13641, v13606];
          const v13643 = await txn1.getOutput('Protocol_harvest', 'v13642', ctc10, v13642);
          
          const v13670 = v12854.protoAddr;
          const v13672 = {
            locked: v13594,
            lpFee: v12859,
            protoAddr: v13670,
            protoFee: v12858,
            totFee: v12860
            };
          null;
          const v32040 = v10928;
          const v32041 = v10929;
          const v32042 = v10925;
          const v32043 = v12854;
          const v32045 = v13629;
          if (v13602) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      undefined /* setApiDetails */;
      const v12854 = v12848[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '1')];
      const v12855 = v10931.protoAddr;
      const v12856 = stdlib.addressEq(v12844, v12855);
      stdlib.assert(v12856, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v12858 = v12854.protoFee;
      const v12859 = v12854.lpFee;
      const v12860 = v12854.totFee;
      const v12861 = stdlib.lt(v12858, stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '100'));
      const v12862 = stdlib.lt(v12859, stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, '100'));
      const v12863 = v12861 ? v12862 : false;
      let v12864;
      if (v12863) {
        const v12865 = stdlib.safeAdd(v12859, v12858);
        const v12866 = stdlib.eq(v12860, v12865);
        v12864 = v12866;
        }
      else {
        v12864 = false;
        }
      const v12867 = stdlib.lt(v12860, stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '100'));
      const v12868 = v12864 ? v12867 : false;
      const v12869 = stdlib.gt(v12860, stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'));
      const v12870 = v12868 ? v12869 : false;
      stdlib.assert(v12870, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:482:58:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:482:58:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      ;
      ;
      ;
      const v13571 = v12848[stdlib.checkedBigNumberify('./index.rsh:482:10:spread', stdlib.UInt_max, '0')];
      let v13582;
      if (v12863) {
        const v13583 = stdlib.safeAdd(v12859, v12858);
        const v13584 = stdlib.eq(v12860, v13583);
        v13582 = v13584;
        }
      else {
        v13582 = false;
        }
      const v13586 = v13582 ? v12867 : false;
      const v13588 = v13586 ? v12869 : false;
      stdlib.assert(v13588, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:484:16:application call to "chkFees" (defined at: ./index.rsh:80:21:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v13591 = v10928.B;
      const v13594 = v12854.locked;
      const v13595 = stdlib.eq(v13591, stdlib.checkedBigNumberify('./index.rsh:487:56:decimal', stdlib.UInt_max, '0'));
      const v13596 = v13594 ? v13595 : false;
      const v13597 = v10929.A;
      const v13598 = v10929.B;
      const v13599 = stdlib.eq(v13597, stdlib.checkedBigNumberify('./index.rsh:453:37:decimal', stdlib.UInt_max, '0'));
      const v13600 = stdlib.eq(v13598, stdlib.checkedBigNumberify('./index.rsh:453:47:decimal', stdlib.UInt_max, '0'));
      const v13601 = v13599 ? v13600 : false;
      const v13602 = v13596 ? v13601 : false;
      const v13606 = (stdlib.le(await ctc.getBalance(), v10935) ? stdlib.checkedBigNumberify('./index.rsh:489:44:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v10935));
      const v13607 = stdlib.safeAdd(v13606, v10935);
      const v13608 = v10930.A;
      const v13609 = v10930.B;
      const v13610 = stdlib.safeAdd(v13608, v13606);
      const v13629 = stdlib.sub(v13607, v13610);
      ;
      ;
      const v13641 = {
        A: v13608,
        B: v13609
        };
      const v13642 = [v13641, v13606];
      const v13643 = await txn1.getOutput('Protocol_harvest', 'v13642', ctc10, v13642);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v12848, v13643), {
          at: './index.rsh:482:11:application',
          fs: ['at ./index.rsh:482:11:application call to [unknown function] (defined at: ./index.rsh:482:11:function exp)', 'at ./index.rsh:491:12:application call to "k" (defined at: ./index.rsh:488:40:function exp)', 'at ./index.rsh:488:40:application call to [unknown function] (defined at: ./index.rsh:488:40:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v13670 = v12854.protoAddr;
      const v13672 = {
        locked: v13594,
        lpFee: v12859,
        protoAddr: v13670,
        protoFee: v12858,
        totFee: v12860
        };
      null;
      const v32040 = v10928;
      const v32041 = v10929;
      const v32042 = v10925;
      const v32043 = v12854;
      const v32045 = v13629;
      if (v13602) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      return;
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
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
    Protocol_harvest0_2829: ctc10,
    Provider_deposit0_2829: ctc9,
    Provider_withdraw0_2829: ctc11,
    Trader_exactSwapAForB0_2829: ctc12,
    Trader_exactSwapBForA0_2829: ctc12,
    Trader_swapAForB0_2829: ctc12,
    Trader_swapBForA0_2829: ctc12
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11481 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_2829" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v11482 = v11481[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11483 = v11481[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11484 = v11482.A;
  const v11485 = v11482.B;
  const v11488 = v10931.locked;
  const v11489 = v11488 ? false : true;
  stdlib.assert(v11489, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_2829" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  let v11491;
  const v11495 = v10928.B;
  const v11497 = stdlib.eq(v11495, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
  if (v11497) {
    const v11498 = stdlib.cast("UInt", "UInt256", v11484, false, true);
    const v11499 = stdlib.cast("UInt", "UInt256", v11485, false, true);
    const v11500 = stdlib.safeMul256(v11498, v11499);
    const v11501 = stdlib.sqrt256(v11500);
    const v11502 = stdlib.cast("UInt256", "UInt", v11501, false, true);
    v11491 = v11502;
    }
  else {
    const v11503 = v10929.A;
    const v11504 = v10929.B;
    const v11508 = stdlib.safeMuldiv(v11484, v11495, v11503);
    const v11512 = stdlib.safeMuldiv(v11485, v11495, v11504);
    const v11513 = stdlib.lt(v11508, v11512);
    const v11514 = v11513 ? v11508 : v11512;
    v11491 = v11514;
    }
  const v11515 = stdlib.le(v11483, v11491);
  stdlib.assert(v11515, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_deposit0_2829" (defined at: ./index.rsh:510:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v11518 = v10929.A;
  const v11524 = v10929.B;
  const v11552 = ['Provider_deposit0_2829', v11481];
  
  let v12128;
  if (v11497) {
    const v12135 = stdlib.cast("UInt", "UInt256", v11484, false, true);
    const v12136 = stdlib.cast("UInt", "UInt256", v11485, false, true);
    const v12137 = stdlib.safeMul256(v12135, v12136);
    const v12138 = stdlib.sqrt256(v12137);
    const v12139 = stdlib.cast("UInt256", "UInt", v12138, false, true);
    v12128 = v12139;
    }
  else {
    const v12145 = stdlib.safeMuldiv(v11484, v11495, v11518);
    const v12149 = stdlib.safeMuldiv(v11485, v11495, v11524);
    const v12150 = stdlib.lt(v12145, v12149);
    const v12151 = v12150 ? v12145 : v12149;
    v12128 = v12151;
    }
  const v12152 = stdlib.le(v11483, v12128);
  stdlib.assert(v12152, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v11552],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v11484, [[stdlib.checkedBigNumberify('./index.rsh:436:50:decimal', stdlib.UInt_max, '0'), v10901], [v11485, v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v14570 = v14520[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
          const v14576 = v14570.A;
          const v14577 = v14570.B;
          const v14579 = v10928.B;
          const v14581 = stdlib.eq(v14579, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
          const v15229 = stdlib.add(v10935, v14576);
          sim_r.txns.push({
            amt: v14576,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          sim_r.txns.push({
            amt: v14577,
            kind: 'to',
            tok: v10855
            });
          let v15354;
          const v15357 = v10928.A;
          if (v14581) {
            const v15361 = stdlib.cast("UInt", "UInt256", v14576, false, true);
            const v15362 = stdlib.cast("UInt", "UInt256", v14577, false, true);
            const v15363 = stdlib.safeMul256(v15361, v15362);
            const v15364 = stdlib.sqrt256(v15363);
            const v15365 = stdlib.cast("UInt256", "UInt", v15364, false, true);
            v15354 = v15365;
            }
          else {
            const v15366 = v10929.A;
            const v15367 = v10929.B;
            const v15371 = stdlib.safeMuldiv(v14576, v14579, v15366);
            const v15375 = stdlib.safeMuldiv(v14577, v14579, v15367);
            const v15376 = stdlib.lt(v15371, v15375);
            const v15377 = v15376 ? v15371 : v15375;
            v15354 = v15377;
            }
          const v15381 = v10929.A;
          const v15385 = stdlib.safeAdd(v14576, v15381);
          const v15387 = v10929.B;
          const v15391 = stdlib.safeAdd(v14577, v15387);
          const v15392 = {
            A: v15385,
            B: v15391
            };
          const v15399 = stdlib.safeSub(v15357, v15354);
          const v15403 = stdlib.safeAdd(v14579, v15354);
          const v15404 = {
            A: v15399,
            B: v15403
            };
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: v10901
            });
          const v15429 = await txn1.getOutput('Provider_deposit', 'v15354', ctc3, v15354);
          
          const v15440 = {
            A: v14576,
            B: v14577
            };
          const v15441 = {
            A: v15385,
            B: v15391
            };
          const v15442 = {
            A: v15399,
            B: v15403
            };
          null;
          const v32160 = v15404;
          const v32161 = v15392;
          const v32162 = v10930;
          const v32163 = v10931;
          const v32165 = v15229;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      return;
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      undefined /* setApiDetails */;
      const v14570 = v14520[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '0')];
      const v14571 = v14520[stdlib.checkedBigNumberify('./index.rsh:510:10:spread', stdlib.UInt_max, '1')];
      const v14572 = v10931.locked;
      const v14573 = v14572 ? false : true;
      stdlib.assert(v14573, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:511:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      let v14575;
      const v14576 = v14570.A;
      const v14577 = v14570.B;
      const v14579 = v10928.B;
      const v14581 = stdlib.eq(v14579, stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'));
      if (v14581) {
        const v14582 = stdlib.cast("UInt", "UInt256", v14576, false, true);
        const v14583 = stdlib.cast("UInt", "UInt256", v14577, false, true);
        const v14584 = stdlib.safeMul256(v14582, v14583);
        const v14585 = stdlib.sqrt256(v14584);
        const v14586 = stdlib.cast("UInt256", "UInt", v14585, false, true);
        v14575 = v14586;
        }
      else {
        const v14587 = v10929.A;
        const v14588 = v10929.B;
        const v14592 = stdlib.safeMuldiv(v14576, v14579, v14587);
        const v14596 = stdlib.safeMuldiv(v14577, v14579, v14588);
        const v14597 = stdlib.lt(v14592, v14596);
        const v14598 = v14597 ? v14592 : v14596;
        v14575 = v14598;
        }
      const v14599 = stdlib.le(v14571, v14575);
      stdlib.assert(v14599, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:510:41:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:510:41:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v15229 = stdlib.add(v10935, v14576);
      ;
      ;
      ;
      let v15354;
      const v15357 = v10928.A;
      if (v14581) {
        const v15361 = stdlib.cast("UInt", "UInt256", v14576, false, true);
        const v15362 = stdlib.cast("UInt", "UInt256", v14577, false, true);
        const v15363 = stdlib.safeMul256(v15361, v15362);
        const v15364 = stdlib.sqrt256(v15363);
        const v15365 = stdlib.cast("UInt256", "UInt", v15364, false, true);
        v15354 = v15365;
        }
      else {
        const v15366 = v10929.A;
        const v15367 = v10929.B;
        const v15371 = stdlib.safeMuldiv(v14576, v14579, v15366);
        const v15375 = stdlib.safeMuldiv(v14577, v14579, v15367);
        const v15376 = stdlib.lt(v15371, v15375);
        const v15377 = v15376 ? v15371 : v15375;
        v15354 = v15377;
        }
      const v15378 = stdlib.le(v14571, v15354);
      stdlib.assert(v15378, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:513:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v15381 = v10929.A;
      const v15385 = stdlib.safeAdd(v14576, v15381);
      const v15387 = v10929.B;
      const v15391 = stdlib.safeAdd(v14577, v15387);
      const v15392 = {
        A: v15385,
        B: v15391
        };
      const v15399 = stdlib.safeSub(v15357, v15354);
      const v15403 = stdlib.safeAdd(v14579, v15354);
      const v15404 = {
        A: v15399,
        B: v15403
        };
      ;
      const v15429 = await txn1.getOutput('Provider_deposit', 'v15354', ctc3, v15354);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v14520, v15429), {
          at: './index.rsh:510:11:application',
          fs: ['at ./index.rsh:510:11:application call to [unknown function] (defined at: ./index.rsh:510:11:function exp)', 'at ./index.rsh:519:10:application call to "k" (defined at: ./index.rsh:517:39:function exp)', 'at ./index.rsh:517:39:application call to [unknown function] (defined at: ./index.rsh:517:39:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v15440 = {
        A: v14576,
        B: v14577
        };
      const v15441 = {
        A: v15385,
        B: v15391
        };
      const v15442 = {
        A: v15399,
        B: v15403
        };
      null;
      const v32160 = v15404;
      const v32161 = v15392;
      const v32162 = v10930;
      const v32163 = v10931;
      const v32165 = v15229;
      return;
      
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
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
    Protocol_harvest0_2829: ctc10,
    Provider_deposit0_2829: ctc11,
    Provider_withdraw0_2829: ctc9,
    Trader_exactSwapAForB0_2829: ctc12,
    Trader_exactSwapBForA0_2829: ctc12,
    Trader_swapAForB0_2829: ctc12,
    Trader_swapBForA0_2829: ctc12
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11418 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_2829" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v11419 = v11418[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11420 = v11418[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11421 = v11420.A;
  const v11422 = v11420.B;
  const v11426 = v10928.B;
  const v11429 = v10929.A;
  const v11430 = v10929.B;
  const v11434 = stdlib.safeMuldiv(v11419, v11429, v11426);
  const v11438 = stdlib.safeMuldiv(v11419, v11430, v11426);
  const v11441 = stdlib.le(v11421, v11434);
  stdlib.assert(v11441, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_2829" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage A',
    who: 'Provider_withdraw'
    });
  const v11444 = stdlib.le(v11422, v11438);
  stdlib.assert(v11444, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to "runProvider_withdraw0_2829" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage B',
    who: 'Provider_withdraw'
    });
  const v11477 = ['Provider_withdraw0_2829', v11418];
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v11477],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[v11419, v10901], [stdlib.checkedBigNumberify('./index.rsh:503:31:decimal', stdlib.UInt_max, '0'), v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v16317 = v16192[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
          const v16320 = v10928.B;
          const v16323 = v10929.A;
          const v16324 = v10929.B;
          const v16328 = stdlib.safeMuldiv(v16317, v16323, v16320);
          const v16332 = stdlib.safeMuldiv(v16317, v16324, v16320);
          ;
          sim_r.txns.push({
            amt: v16317,
            kind: 'to',
            tok: v10901
            });
          ;
          const v17123 = v10928.A;
          const v17151 = stdlib.safeAdd(v17123, v16317);
          const v17154 = stdlib.safeSub(v16320, v16317);
          const v17155 = {
            A: v17151,
            B: v17154
            };
          const v17160 = stdlib.safeSub(v16323, v16328);
          const v17164 = stdlib.safeSub(v16324, v16332);
          const v17165 = {
            A: v17160,
            B: v17164
            };
          const v17186 = stdlib.sub(v10935, v16328);
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: v10855
            });
          const v17196 = {
            A: v16328,
            B: v16332
            };
          const v17197 = await txn1.getOutput('Provider_withdraw', 'v17196', ctc8, v17196);
          
          const v17209 = {
            A: v17160,
            B: v17164
            };
          const v17210 = {
            A: v17151,
            B: v17154
            };
          null;
          const v32280 = v17155;
          const v32281 = v17165;
          const v32282 = v10930;
          const v32283 = v10931;
          const v32285 = v17186;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      return;
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      return;
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      undefined /* setApiDetails */;
      const v16317 = v16192[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '0')];
      const v16318 = v16192[stdlib.checkedBigNumberify('./index.rsh:496:10:spread', stdlib.UInt_max, '1')];
      const v16320 = v10928.B;
      const v16323 = v10929.A;
      const v16324 = v10929.B;
      const v16328 = stdlib.safeMuldiv(v16317, v16323, v16320);
      const v16332 = stdlib.safeMuldiv(v16317, v16324, v16320);
      const v16334 = v16318.A;
      const v16335 = stdlib.le(v16334, v16328);
      stdlib.assert(v16335, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:499:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage A',
        who: 'Provider_withdraw'
        });
      const v16337 = v16318.B;
      const v16338 = stdlib.le(v16337, v16332);
      stdlib.assert(v16338, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:500:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:42:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:496:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage B',
        who: 'Provider_withdraw'
        });
      ;
      ;
      ;
      const v17123 = v10928.A;
      const v17151 = stdlib.safeAdd(v17123, v16317);
      const v17154 = stdlib.safeSub(v16320, v16317);
      const v17155 = {
        A: v17151,
        B: v17154
        };
      const v17160 = stdlib.safeSub(v16323, v16328);
      const v17164 = stdlib.safeSub(v16324, v16332);
      const v17165 = {
        A: v17160,
        B: v17164
        };
      const v17186 = stdlib.sub(v10935, v16328);
      ;
      ;
      const v17196 = {
        A: v16328,
        B: v16332
        };
      const v17197 = await txn1.getOutput('Provider_withdraw', 'v17196', ctc8, v17196);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v16192, v17197), {
          at: './index.rsh:496:11:application',
          fs: ['at ./index.rsh:496:11:application call to [unknown function] (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:505:10:application call to "k" (defined at: ./index.rsh:503:39:function exp)', 'at ./index.rsh:503:39:application call to [unknown function] (defined at: ./index.rsh:503:39:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v17209 = {
        A: v17160,
        B: v17164
        };
      const v17210 = {
        A: v17151,
        B: v17154
        };
      null;
      const v32280 = v17155;
      const v32281 = v17165;
      const v32282 = v10930;
      const v32283 = v10931;
      const v32285 = v17186;
      return;
      
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
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
    Protocol_harvest0_2829: ctc9,
    Provider_deposit0_2829: ctc11,
    Provider_withdraw0_2829: ctc12,
    Trader_exactSwapAForB0_2829: ctc8,
    Trader_exactSwapBForA0_2829: ctc8,
    Trader_swapAForB0_2829: ctc8,
    Trader_swapBForA0_2829: ctc8
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11805 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_2829" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v11806 = v11805[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11807 = v11805[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11811 = v10931.locked;
  const v11812 = v11811 ? false : true;
  stdlib.assert(v11812, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_2829" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapAForB'
    });
  const v11814 = v10929.A;
  const v11815 = v10929.B;
  const v11817 = v10931.protoFee;
  const v11818 = v10931.totFee;
  const v11819 = stdlib.safeSub(v11815, v11807);
  const v11820 = stdlib.cast("UInt", "UInt256", v11819, false, true);
  const v11821 = stdlib.cast("UInt", "UInt256", v11814, false, true);
  const v11822 = stdlib.cast("UInt", "UInt256", v11807, false, true);
  const v11823 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11818);
  const v11824 = stdlib.cast("UInt", "UInt256", v11823, false, true);
  const v11825 = stdlib.safeMul256(v11822, v11824);
  const v11826 = stdlib.safeMul256(v11820, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v11827 = stdlib.safeMul256(v11825, v11821);
  const v11828 = stdlib.safeDiv256(v11827, v11826);
  const v11829 = stdlib.cast("UInt256", "UInt", v11828, false, true);
  const v11830 = stdlib.safeAdd(v11829, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v11831 = stdlib.ge(v11806, v11830);
  stdlib.assert(v11831, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_2829" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapAForB'
    });
  const v11833 = stdlib.safeSub(v11806, v11830);
  const v11839 = stdlib.safeMul(v11817, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v11840 = stdlib.safeDiv(v11839, v11818);
  const v11845 = stdlib.safeAdd(v11814, v11830);
  const v11849 = stdlib.safeMuldiv(v11830, v11815, v11845);
  const v11852 = stdlib.safeSub(v11849, v11807);
  const v11854 = stdlib.safeMuldiv(v11852, v11840, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v11856 = stdlib.safeMuldiv(v11830, v11817, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v11860 = stdlib.safeMuldiv(v11856, v11815, v11845);
  const v11861 = stdlib.gt(v11860, v11854);
  const v11862 = [v11856, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v11863 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11854];
  const v11864 = v11861 ? v11862 : v11863;
  const v11866 = v11864[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v11867 = v11864[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v11875 = stdlib.safeAdd(v11814, v11806);
  const v11883 = stdlib.safeSub(v11875, v11833);
  const v11890 = stdlib.safeSub(v11883, v11866);
  const v11893 = stdlib.safeSub(v11819, v11867);
  const v11906 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v11833);
  const v11907 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v11807);
  const v11908 = v11906 ? v11907 : false;
  stdlib.assert(v11908, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_2829" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapAForB'
    });
  const v11913 = stdlib.cast("UInt", "UInt256", v11815, false, true);
  const v11914 = stdlib.safeMul256(v11821, v11913);
  const v11915 = stdlib.cast("UInt", "UInt256", v11890, false, true);
  const v11916 = stdlib.cast("UInt", "UInt256", v11893, false, true);
  const v11917 = stdlib.safeMul256(v11915, v11916);
  const v11918 = stdlib.ge256(v11917, v11914);
  stdlib.assert(v11918, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapAForB0_2829" (defined at: ./index.rsh:594:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapAForB'
    });
  const v11931 = ['Trader_exactSwapAForB0_2829', v11805];
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v11931],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v11806, [[stdlib.checkedBigNumberify('./index.rsh:596:24:decimal', stdlib.UInt_max, '0'), v10901], [stdlib.checkedBigNumberify('./index.rsh:596:30:decimal', stdlib.UInt_max, '0'), v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          const v18047 = v17864[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
          const v18048 = v17864[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
          const v18053 = v10929.A;
          const v18054 = v10929.B;
          const v18056 = v10931.protoFee;
          const v18057 = v10931.totFee;
          const v18058 = stdlib.safeSub(v18054, v18048);
          const v18059 = stdlib.cast("UInt", "UInt256", v18058, false, true);
          const v18060 = stdlib.cast("UInt", "UInt256", v18053, false, true);
          const v18061 = stdlib.cast("UInt", "UInt256", v18048, false, true);
          const v18062 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v18057);
          const v18063 = stdlib.cast("UInt", "UInt256", v18062, false, true);
          const v18064 = stdlib.safeMul256(v18061, v18063);
          const v18065 = stdlib.safeMul256(v18059, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v18066 = stdlib.safeMul256(v18064, v18060);
          const v18067 = stdlib.safeDiv256(v18066, v18065);
          const v18068 = stdlib.cast("UInt256", "UInt", v18067, false, true);
          const v18069 = stdlib.safeAdd(v18068, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v18072 = stdlib.safeSub(v18047, v18069);
          const v18078 = stdlib.safeMul(v18056, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v18079 = stdlib.safeDiv(v18078, v18057);
          const v18084 = stdlib.safeAdd(v18053, v18069);
          const v18088 = stdlib.safeMuldiv(v18069, v18054, v18084);
          const v18091 = stdlib.safeSub(v18088, v18048);
          const v18093 = stdlib.safeMuldiv(v18091, v18079, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v18095 = stdlib.safeMuldiv(v18069, v18056, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v18099 = stdlib.safeMuldiv(v18095, v18054, v18084);
          const v18100 = stdlib.gt(v18099, v18093);
          const v18101 = [v18095, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v18102 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18093];
          const v18103 = v18100 ? v18101 : v18102;
          const v18105 = v18103[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v18106 = v18103[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v18114 = stdlib.safeAdd(v18053, v18047);
          const v18122 = stdlib.safeSub(v18114, v18072);
          const v18129 = stdlib.safeSub(v18122, v18105);
          const v18132 = stdlib.safeSub(v18058, v18106);
          const v18573 = stdlib.add(v10935, v18047);
          sim_r.txns.push({
            amt: v18047,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          const v18975 = {
            A: v18129,
            B: v18132
            };
          const v18976 = v10930.A;
          const v18980 = stdlib.safeAdd(v18976, v18105);
          const v18981 = v10930.B;
          const v18985 = stdlib.safeAdd(v18981, v18106);
          const v18986 = {
            A: v18980,
            B: v18985
            };
          const v19025 = stdlib.sub(v18573, v18072);
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: v10855
            });
          const v19035 = {
            A: v18072,
            B: v18048
            };
          const v19036 = await txn1.getOutput('Trader_exactSwapAForB', 'v19035', ctc10, v19035);
          
          const v19045 = {
            A: v18047,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v19047 = {
            A: v18129,
            B: v18132
            };
          null;
          const v32400 = v10928;
          const v32401 = v18975;
          const v32402 = v18986;
          const v32403 = v10931;
          const v32405 = v19025;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      return;
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      return;
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      undefined /* setApiDetails */;
      const v18047 = v17864[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '0')];
      const v18048 = v17864[stdlib.checkedBigNumberify('./index.rsh:594:10:spread', stdlib.UInt_max, '1')];
      const v18050 = v10931.locked;
      const v18051 = v18050 ? false : true;
      stdlib.assert(v18051, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapAForB'
        });
      const v18053 = v10929.A;
      const v18054 = v10929.B;
      const v18056 = v10931.protoFee;
      const v18057 = v10931.totFee;
      const v18058 = stdlib.safeSub(v18054, v18048);
      const v18059 = stdlib.cast("UInt", "UInt256", v18058, false, true);
      const v18060 = stdlib.cast("UInt", "UInt256", v18053, false, true);
      const v18061 = stdlib.cast("UInt", "UInt256", v18048, false, true);
      const v18062 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v18057);
      const v18063 = stdlib.cast("UInt", "UInt256", v18062, false, true);
      const v18064 = stdlib.safeMul256(v18061, v18063);
      const v18065 = stdlib.safeMul256(v18059, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v18066 = stdlib.safeMul256(v18064, v18060);
      const v18067 = stdlib.safeDiv256(v18066, v18065);
      const v18068 = stdlib.cast("UInt256", "UInt", v18067, false, true);
      const v18069 = stdlib.safeAdd(v18068, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v18070 = stdlib.ge(v18047, v18069);
      stdlib.assert(v18070, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:317:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapAForB'
        });
      const v18072 = stdlib.safeSub(v18047, v18069);
      const v18078 = stdlib.safeMul(v18056, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v18079 = stdlib.safeDiv(v18078, v18057);
      const v18084 = stdlib.safeAdd(v18053, v18069);
      const v18088 = stdlib.safeMuldiv(v18069, v18054, v18084);
      const v18091 = stdlib.safeSub(v18088, v18048);
      const v18093 = stdlib.safeMuldiv(v18091, v18079, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v18095 = stdlib.safeMuldiv(v18069, v18056, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v18099 = stdlib.safeMuldiv(v18095, v18054, v18084);
      const v18100 = stdlib.gt(v18099, v18093);
      const v18101 = [v18095, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v18102 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v18093];
      const v18103 = v18100 ? v18101 : v18102;
      const v18105 = v18103[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v18106 = v18103[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v18114 = stdlib.safeAdd(v18053, v18047);
      const v18122 = stdlib.safeSub(v18114, v18072);
      const v18129 = stdlib.safeSub(v18122, v18105);
      const v18132 = stdlib.safeSub(v18058, v18106);
      const v18145 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v18072);
      const v18146 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v18048);
      const v18147 = v18145 ? v18146 : false;
      stdlib.assert(v18147, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapAForB'
        });
      const v18152 = stdlib.cast("UInt", "UInt256", v18054, false, true);
      const v18153 = stdlib.safeMul256(v18060, v18152);
      const v18154 = stdlib.cast("UInt", "UInt256", v18129, false, true);
      const v18155 = stdlib.cast("UInt", "UInt256", v18132, false, true);
      const v18156 = stdlib.safeMul256(v18154, v18155);
      const v18157 = stdlib.ge256(v18156, v18153);
      stdlib.assert(v18157, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:595:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:594:42:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:594:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapAForB'
        });
      const v18573 = stdlib.add(v10935, v18047);
      ;
      ;
      ;
      const v18975 = {
        A: v18129,
        B: v18132
        };
      const v18976 = v10930.A;
      const v18980 = stdlib.safeAdd(v18976, v18105);
      const v18981 = v10930.B;
      const v18985 = stdlib.safeAdd(v18981, v18106);
      const v18986 = {
        A: v18980,
        B: v18985
        };
      const v19025 = stdlib.sub(v18573, v18072);
      ;
      ;
      const v19035 = {
        A: v18072,
        B: v18048
        };
      const v19036 = await txn1.getOutput('Trader_exactSwapAForB', 'v19035', ctc10, v19035);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v17864, v19036), {
          at: './index.rsh:594:11:application',
          fs: ['at ./index.rsh:594:11:application call to [unknown function] (defined at: ./index.rsh:594:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:596:38:function exp)', 'at ./index.rsh:596:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:596:38:application call to [unknown function] (defined at: ./index.rsh:596:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v19045 = {
        A: v18047,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v19047 = {
        A: v18129,
        B: v18132
        };
      null;
      const v32400 = v10928;
      const v32401 = v18975;
      const v32402 = v18986;
      const v32403 = v10931;
      const v32405 = v19025;
      return;
      
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
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
    Protocol_harvest0_2829: ctc9,
    Provider_deposit0_2829: ctc11,
    Provider_withdraw0_2829: ctc12,
    Trader_exactSwapAForB0_2829: ctc8,
    Trader_exactSwapBForA0_2829: ctc8,
    Trader_swapAForB0_2829: ctc8,
    Trader_swapBForA0_2829: ctc8
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11935 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_2829" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v11936 = v11935[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11937 = v11935[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11941 = v10931.locked;
  const v11942 = v11941 ? false : true;
  stdlib.assert(v11942, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_2829" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapBForA'
    });
  const v11944 = v10929.A;
  const v11945 = v10929.B;
  const v11947 = v10931.protoFee;
  const v11948 = v10931.totFee;
  const v11949 = stdlib.safeSub(v11944, v11937);
  const v11950 = stdlib.cast("UInt", "UInt256", v11949, false, true);
  const v11951 = stdlib.cast("UInt", "UInt256", v11945, false, true);
  const v11952 = stdlib.cast("UInt", "UInt256", v11937, false, true);
  const v11953 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11948);
  const v11954 = stdlib.cast("UInt", "UInt256", v11953, false, true);
  const v11955 = stdlib.safeMul256(v11952, v11954);
  const v11956 = stdlib.safeMul256(v11950, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v11957 = stdlib.safeMul256(v11955, v11951);
  const v11958 = stdlib.safeDiv256(v11957, v11956);
  const v11959 = stdlib.cast("UInt256", "UInt", v11958, false, true);
  const v11960 = stdlib.safeAdd(v11959, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
  const v11961 = stdlib.ge(v11936, v11960);
  stdlib.assert(v11961, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_2829" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapBForA'
    });
  const v11963 = stdlib.safeSub(v11936, v11960);
  const v11969 = stdlib.safeMul(v11947, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v11970 = stdlib.safeDiv(v11969, v11948);
  const v11975 = stdlib.safeAdd(v11945, v11960);
  const v11979 = stdlib.safeMuldiv(v11960, v11944, v11975);
  const v11982 = stdlib.safeSub(v11979, v11937);
  const v11984 = stdlib.safeMuldiv(v11982, v11970, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v11986 = stdlib.safeMuldiv(v11960, v11947, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v11990 = stdlib.safeMuldiv(v11986, v11944, v11975);
  const v11991 = stdlib.gt(v11990, v11984);
  const v11992 = [v11986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v11993 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11984];
  const v11994 = v11991 ? v11992 : v11993;
  const v11996 = v11994[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v11997 = v11994[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v12009 = stdlib.safeAdd(v11945, v11936);
  const v12016 = stdlib.safeSub(v12009, v11963);
  const v12020 = stdlib.safeSub(v11949, v11997);
  const v12023 = stdlib.safeSub(v12016, v11996);
  const v12036 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v11937);
  const v12037 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v11963);
  const v12038 = v12036 ? v12037 : false;
  stdlib.assert(v12038, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_2829" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapBForA'
    });
  const v12042 = stdlib.cast("UInt", "UInt256", v11944, false, true);
  const v12044 = stdlib.safeMul256(v12042, v11951);
  const v12045 = stdlib.cast("UInt", "UInt256", v12020, false, true);
  const v12046 = stdlib.cast("UInt", "UInt256", v12023, false, true);
  const v12047 = stdlib.safeMul256(v12045, v12046);
  const v12048 = stdlib.ge256(v12047, v12044);
  stdlib.assert(v12048, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_exactSwapBForA0_2829" (defined at: ./index.rsh:598:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapBForA'
    });
  const v12061 = ['Trader_exactSwapBForA0_2829', v11935];
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v12061],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:600:24:decimal', stdlib.UInt_max, '0'), v10901], [v11936, v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          const v19848 = v19536[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
          const v19849 = v19536[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
          const v19854 = v10929.A;
          const v19855 = v10929.B;
          const v19857 = v10931.protoFee;
          const v19858 = v10931.totFee;
          const v19859 = stdlib.safeSub(v19854, v19849);
          const v19860 = stdlib.cast("UInt", "UInt256", v19859, false, true);
          const v19861 = stdlib.cast("UInt", "UInt256", v19855, false, true);
          const v19862 = stdlib.cast("UInt", "UInt256", v19849, false, true);
          const v19863 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v19858);
          const v19864 = stdlib.cast("UInt", "UInt256", v19863, false, true);
          const v19865 = stdlib.safeMul256(v19862, v19864);
          const v19866 = stdlib.safeMul256(v19860, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v19867 = stdlib.safeMul256(v19865, v19861);
          const v19868 = stdlib.safeDiv256(v19867, v19866);
          const v19869 = stdlib.cast("UInt256", "UInt", v19868, false, true);
          const v19870 = stdlib.safeAdd(v19869, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
          const v19873 = stdlib.safeSub(v19848, v19870);
          const v19879 = stdlib.safeMul(v19857, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v19880 = stdlib.safeDiv(v19879, v19858);
          const v19885 = stdlib.safeAdd(v19855, v19870);
          const v19889 = stdlib.safeMuldiv(v19870, v19854, v19885);
          const v19892 = stdlib.safeSub(v19889, v19849);
          const v19894 = stdlib.safeMuldiv(v19892, v19880, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v19896 = stdlib.safeMuldiv(v19870, v19857, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v19900 = stdlib.safeMuldiv(v19896, v19854, v19885);
          const v19901 = stdlib.gt(v19900, v19894);
          const v19902 = [v19896, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v19903 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19894];
          const v19904 = v19901 ? v19902 : v19903;
          const v19906 = v19904[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v19907 = v19904[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v19919 = stdlib.safeAdd(v19855, v19848);
          const v19926 = stdlib.safeSub(v19919, v19873);
          const v19930 = stdlib.safeSub(v19859, v19907);
          const v19933 = stdlib.safeSub(v19926, v19906);
          ;
          ;
          sim_r.txns.push({
            amt: v19848,
            kind: 'to',
            tok: v10855
            });
          const v20815 = {
            A: v19930,
            B: v19933
            };
          const v20816 = v10930.A;
          const v20820 = stdlib.safeAdd(v20816, v19907);
          const v20821 = v10930.B;
          const v20825 = stdlib.safeAdd(v20821, v19906);
          const v20826 = {
            A: v20820,
            B: v20825
            };
          const v20865 = stdlib.sub(v10935, v19849);
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: v10855
            });
          const v20875 = {
            A: v19849,
            B: v19873
            };
          const v20876 = await txn1.getOutput('Trader_exactSwapBForA', 'v20875', ctc10, v20875);
          
          const v20885 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v19848
            };
          const v20887 = {
            A: v19930,
            B: v19933
            };
          null;
          const v32520 = v10928;
          const v32521 = v20815;
          const v32522 = v20826;
          const v32523 = v10931;
          const v32525 = v20865;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      return;
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      return;
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      undefined /* setApiDetails */;
      const v19848 = v19536[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '0')];
      const v19849 = v19536[stdlib.checkedBigNumberify('./index.rsh:598:10:spread', stdlib.UInt_max, '1')];
      const v19851 = v10931.locked;
      const v19852 = v19851 ? false : true;
      stdlib.assert(v19852, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapBForA'
        });
      const v19854 = v10929.A;
      const v19855 = v10929.B;
      const v19857 = v10931.protoFee;
      const v19858 = v10931.totFee;
      const v19859 = stdlib.safeSub(v19854, v19849);
      const v19860 = stdlib.cast("UInt", "UInt256", v19859, false, true);
      const v19861 = stdlib.cast("UInt", "UInt256", v19855, false, true);
      const v19862 = stdlib.cast("UInt", "UInt256", v19849, false, true);
      const v19863 = stdlib.safeAdd(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v19858);
      const v19864 = stdlib.cast("UInt", "UInt256", v19863, false, true);
      const v19865 = stdlib.safeMul256(v19862, v19864);
      const v19866 = stdlib.safeMul256(v19860, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v19867 = stdlib.safeMul256(v19865, v19861);
      const v19868 = stdlib.safeDiv256(v19867, v19866);
      const v19869 = stdlib.cast("UInt256", "UInt", v19868, false, true);
      const v19870 = stdlib.safeAdd(v19869, stdlib.checkedBigNumberify('./index.rsh:252:39:decimal', stdlib.UInt_max, '1'));
      const v19871 = stdlib.ge(v19848, v19870);
      stdlib.assert(v19871, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:260:20:function exp)', 'at ./index.rsh:259:25:application call to [unknown function] (defined at: ./index.rsh:259:25:function exp)', 'at ./index.rsh:279:23:application call to "computeAmtInAndOut" (defined at: ./index.rsh:258:86:function exp)', 'at ./index.rsh:322:19:application call to "computeSwap1" (defined at: ./index.rsh:274:83:function exp)', 'at ./index.rsh:529:22:application call to "computeSwap" (defined at: ./index.rsh:311:79:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapBForA'
        });
      const v19873 = stdlib.safeSub(v19848, v19870);
      const v19879 = stdlib.safeMul(v19857, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v19880 = stdlib.safeDiv(v19879, v19858);
      const v19885 = stdlib.safeAdd(v19855, v19870);
      const v19889 = stdlib.safeMuldiv(v19870, v19854, v19885);
      const v19892 = stdlib.safeSub(v19889, v19849);
      const v19894 = stdlib.safeMuldiv(v19892, v19880, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v19896 = stdlib.safeMuldiv(v19870, v19857, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v19900 = stdlib.safeMuldiv(v19896, v19854, v19885);
      const v19901 = stdlib.gt(v19900, v19894);
      const v19902 = [v19896, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v19903 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19894];
      const v19904 = v19901 ? v19902 : v19903;
      const v19906 = v19904[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v19907 = v19904[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v19919 = stdlib.safeAdd(v19855, v19848);
      const v19926 = stdlib.safeSub(v19919, v19873);
      const v19930 = stdlib.safeSub(v19859, v19907);
      const v19933 = stdlib.safeSub(v19926, v19906);
      const v19946 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), v19849);
      const v19947 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:23:decimal', stdlib.UInt_max, '0'), v19873);
      const v19948 = v19946 ? v19947 : false;
      stdlib.assert(v19948, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapBForA'
        });
      const v19952 = stdlib.cast("UInt", "UInt256", v19854, false, true);
      const v19954 = stdlib.safeMul256(v19952, v19861);
      const v19955 = stdlib.cast("UInt", "UInt256", v19930, false, true);
      const v19956 = stdlib.cast("UInt", "UInt256", v19933, false, true);
      const v19957 = stdlib.safeMul256(v19955, v19956);
      const v19958 = stdlib.ge256(v19957, v19954);
      stdlib.assert(v19958, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:599:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:598:42:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:598:42:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapBForA'
        });
      ;
      ;
      ;
      const v20815 = {
        A: v19930,
        B: v19933
        };
      const v20816 = v10930.A;
      const v20820 = stdlib.safeAdd(v20816, v19907);
      const v20821 = v10930.B;
      const v20825 = stdlib.safeAdd(v20821, v19906);
      const v20826 = {
        A: v20820,
        B: v20825
        };
      const v20865 = stdlib.sub(v10935, v19849);
      ;
      ;
      const v20875 = {
        A: v19849,
        B: v19873
        };
      const v20876 = await txn1.getOutput('Trader_exactSwapBForA', 'v20875', ctc10, v20875);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v19536, v20876), {
          at: './index.rsh:598:11:application',
          fs: ['at ./index.rsh:598:11:application call to [unknown function] (defined at: ./index.rsh:598:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:600:38:function exp)', 'at ./index.rsh:600:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:600:38:application call to [unknown function] (defined at: ./index.rsh:600:38:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v20885 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v19848
        };
      const v20887 = {
        A: v19930,
        B: v19933
        };
      null;
      const v32520 = v10928;
      const v32521 = v20815;
      const v32522 = v20826;
      const v32523 = v10931;
      const v32525 = v20865;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
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
    Protocol_harvest0_2829: ctc9,
    Provider_deposit0_2829: ctc11,
    Provider_withdraw0_2829: ctc12,
    Trader_exactSwapAForB0_2829: ctc8,
    Trader_exactSwapBForA0_2829: ctc8,
    Trader_swapAForB0_2829: ctc8,
    Trader_swapBForA0_2829: ctc8
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11556 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_2829" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v11557 = v11556[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11558 = v11556[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11563 = v10931.locked;
  const v11564 = v11563 ? false : true;
  stdlib.assert(v11564, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_2829" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v11566 = v10929.A;
  const v11567 = v10929.B;
  const v11569 = v10931.protoFee;
  const v11570 = v10931.totFee;
  const v11571 = stdlib.cast("UInt", "UInt256", v11567, false, true);
  const v11572 = stdlib.cast("UInt", "UInt256", v11566, false, true);
  const v11573 = stdlib.cast("UInt", "UInt256", v11557, false, true);
  const v11574 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11570);
  const v11575 = stdlib.cast("UInt", "UInt256", v11574, false, true);
  const v11576 = stdlib.safeMul256(v11573, v11575);
  const v11577 = stdlib.safeMul256(v11572, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v11578 = stdlib.safeAdd256(v11577, v11576);
  const v11579 = stdlib.safeMul256(v11576, v11571);
  const v11580 = stdlib.safeDiv256(v11579, v11578);
  const v11581 = stdlib.cast("UInt256", "UInt", v11580, false, true);
  const v11587 = stdlib.safeMul(v11569, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v11588 = stdlib.safeDiv(v11587, v11570);
  const v11593 = stdlib.safeAdd(v11566, v11557);
  const v11597 = stdlib.safeMuldiv(v11557, v11567, v11593);
  const v11600 = stdlib.safeSub(v11597, v11581);
  const v11602 = stdlib.safeMuldiv(v11600, v11588, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v11604 = stdlib.safeMuldiv(v11557, v11569, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v11608 = stdlib.safeMuldiv(v11604, v11567, v11593);
  const v11609 = stdlib.gt(v11608, v11602);
  const v11610 = [v11604, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v11611 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11602];
  const v11612 = v11609 ? v11610 : v11611;
  const v11614 = v11612[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
  const v11615 = v11612[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
  const v11633 = stdlib.safeSub(v11567, v11581);
  const v11637 = stdlib.safeSub(v11593, v11614);
  const v11640 = stdlib.safeSub(v11633, v11615);
  const v11653 = stdlib.le(v11558, v11581);
  stdlib.assert(v11653, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_2829" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v11659 = stdlib.safeMul256(v11572, v11571);
  const v11660 = stdlib.cast("UInt", "UInt256", v11637, false, true);
  const v11661 = stdlib.cast("UInt", "UInt256", v11640, false, true);
  const v11662 = stdlib.safeMul256(v11660, v11661);
  const v11663 = stdlib.ge256(v11662, v11659);
  stdlib.assert(v11663, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapAForB0_2829" (defined at: ./index.rsh:586:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v11676 = ['Trader_swapAForB0_2829', v11556];
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v11676],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v11557, [[stdlib.checkedBigNumberify('./index.rsh:588:24:decimal', stdlib.UInt_max, '0'), v10901], [stdlib.checkedBigNumberify('./index.rsh:588:30:decimal', stdlib.UInt_max, '0'), v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v21649 = v21208[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
          const v21656 = v10929.A;
          const v21657 = v10929.B;
          const v21659 = v10931.protoFee;
          const v21660 = v10931.totFee;
          const v21661 = stdlib.cast("UInt", "UInt256", v21657, false, true);
          const v21662 = stdlib.cast("UInt", "UInt256", v21656, false, true);
          const v21663 = stdlib.cast("UInt", "UInt256", v21649, false, true);
          const v21664 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v21660);
          const v21665 = stdlib.cast("UInt", "UInt256", v21664, false, true);
          const v21666 = stdlib.safeMul256(v21663, v21665);
          const v21667 = stdlib.safeMul256(v21662, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v21668 = stdlib.safeAdd256(v21667, v21666);
          const v21669 = stdlib.safeMul256(v21666, v21661);
          const v21670 = stdlib.safeDiv256(v21669, v21668);
          const v21671 = stdlib.cast("UInt256", "UInt", v21670, false, true);
          const v21677 = stdlib.safeMul(v21659, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v21678 = stdlib.safeDiv(v21677, v21660);
          const v21683 = stdlib.safeAdd(v21656, v21649);
          const v21687 = stdlib.safeMuldiv(v21649, v21657, v21683);
          const v21690 = stdlib.safeSub(v21687, v21671);
          const v21692 = stdlib.safeMuldiv(v21690, v21678, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v21694 = stdlib.safeMuldiv(v21649, v21659, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v21698 = stdlib.safeMuldiv(v21694, v21657, v21683);
          const v21699 = stdlib.gt(v21698, v21692);
          const v21700 = [v21694, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v21701 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v21692];
          const v21702 = v21699 ? v21700 : v21701;
          const v21704 = v21702[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
          const v21705 = v21702[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
          const v21723 = stdlib.safeSub(v21657, v21671);
          const v21727 = stdlib.safeSub(v21683, v21704);
          const v21730 = stdlib.safeSub(v21723, v21705);
          const v21917 = stdlib.add(v10935, v21649);
          sim_r.txns.push({
            amt: v21649,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          const v22651 = {
            A: v21727,
            B: v21730
            };
          const v22652 = v10930.A;
          const v22656 = stdlib.safeAdd(v22652, v21704);
          const v22657 = v10930.B;
          const v22661 = stdlib.safeAdd(v22657, v21705);
          const v22662 = {
            A: v22656,
            B: v22661
            };
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: v10855
            });
          const v22705 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v21671
            };
          const v22706 = await txn1.getOutput('Trader_swapAForB', 'v22705', ctc10, v22705);
          
          const v22715 = {
            A: v21649,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v22717 = {
            A: v21727,
            B: v21730
            };
          null;
          const v32640 = v10928;
          const v32641 = v22651;
          const v32642 = v22662;
          const v32643 = v10931;
          const v32645 = v21917;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      return;
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      return;
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      undefined /* setApiDetails */;
      const v21649 = v21208[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '0')];
      const v21650 = v21208[stdlib.checkedBigNumberify('./index.rsh:586:10:spread', stdlib.UInt_max, '1')];
      const v21653 = v10931.locked;
      const v21654 = v21653 ? false : true;
      stdlib.assert(v21654, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v21656 = v10929.A;
      const v21657 = v10929.B;
      const v21659 = v10931.protoFee;
      const v21660 = v10931.totFee;
      const v21661 = stdlib.cast("UInt", "UInt256", v21657, false, true);
      const v21662 = stdlib.cast("UInt", "UInt256", v21656, false, true);
      const v21663 = stdlib.cast("UInt", "UInt256", v21649, false, true);
      const v21664 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v21660);
      const v21665 = stdlib.cast("UInt", "UInt256", v21664, false, true);
      const v21666 = stdlib.safeMul256(v21663, v21665);
      const v21667 = stdlib.safeMul256(v21662, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v21668 = stdlib.safeAdd256(v21667, v21666);
      const v21669 = stdlib.safeMul256(v21666, v21661);
      const v21670 = stdlib.safeDiv256(v21669, v21668);
      const v21671 = stdlib.cast("UInt256", "UInt", v21670, false, true);
      const v21677 = stdlib.safeMul(v21659, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v21678 = stdlib.safeDiv(v21677, v21660);
      const v21683 = stdlib.safeAdd(v21656, v21649);
      const v21687 = stdlib.safeMuldiv(v21649, v21657, v21683);
      const v21690 = stdlib.safeSub(v21687, v21671);
      const v21692 = stdlib.safeMuldiv(v21690, v21678, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v21694 = stdlib.safeMuldiv(v21649, v21659, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v21698 = stdlib.safeMuldiv(v21694, v21657, v21683);
      const v21699 = stdlib.gt(v21698, v21692);
      const v21700 = [v21694, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v21701 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v21692];
      const v21702 = v21699 ? v21700 : v21701;
      const v21704 = v21702[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '0')];
      const v21705 = v21702[stdlib.checkedBigNumberify('./index.rsh:316:30:array', stdlib.UInt_max, '1')];
      const v21723 = stdlib.safeSub(v21657, v21671);
      const v21727 = stdlib.safeSub(v21683, v21704);
      const v21730 = stdlib.safeSub(v21723, v21705);
      const v21743 = stdlib.le(v21650, v21671);
      stdlib.assert(v21743, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v21749 = stdlib.safeMul256(v21662, v21661);
      const v21750 = stdlib.cast("UInt", "UInt256", v21727, false, true);
      const v21751 = stdlib.cast("UInt", "UInt256", v21730, false, true);
      const v21752 = stdlib.safeMul256(v21750, v21751);
      const v21753 = stdlib.ge256(v21752, v21749);
      stdlib.assert(v21753, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:587:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:586:37:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:586:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      const v21917 = stdlib.add(v10935, v21649);
      ;
      ;
      ;
      const v22651 = {
        A: v21727,
        B: v21730
        };
      const v22652 = v10930.A;
      const v22656 = stdlib.safeAdd(v22652, v21704);
      const v22657 = v10930.B;
      const v22661 = stdlib.safeAdd(v22657, v21705);
      const v22662 = {
        A: v22656,
        B: v22661
        };
      ;
      const v22705 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v21671
        };
      const v22706 = await txn1.getOutput('Trader_swapAForB', 'v22705', ctc10, v22705);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v21208, v22706), {
          at: './index.rsh:586:11:application',
          fs: ['at ./index.rsh:586:11:application call to [unknown function] (defined at: ./index.rsh:586:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:588:38:function exp)', 'at ./index.rsh:588:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:588:38:application call to [unknown function] (defined at: ./index.rsh:588:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v22715 = {
        A: v21649,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v22717 = {
        A: v21727,
        B: v21730
        };
      null;
      const v32640 = v10928;
      const v32641 = v22651;
      const v32642 = v22662;
      const v32643 = v10931;
      const v32645 = v21917;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
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
    Protocol_harvest0_2829: ctc9,
    Provider_deposit0_2829: ctc11,
    Provider_withdraw0_2829: ctc12,
    Trader_exactSwapAForB0_2829: ctc8,
    Trader_exactSwapBForA0_2829: ctc8,
    Trader_swapAForB0_2829: ctc8,
    Trader_swapBForA0_2829: ctc8
    });
  
  
  const [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v11680 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_2829" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v11681 = v11680[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11682 = v11680[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11687 = v10931.locked;
  const v11688 = v11687 ? false : true;
  stdlib.assert(v11688, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_2829" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v11690 = v10929.A;
  const v11691 = v10929.B;
  const v11693 = v10931.protoFee;
  const v11694 = v10931.totFee;
  const v11695 = stdlib.cast("UInt", "UInt256", v11690, false, true);
  const v11696 = stdlib.cast("UInt", "UInt256", v11691, false, true);
  const v11697 = stdlib.cast("UInt", "UInt256", v11681, false, true);
  const v11698 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v11694);
  const v11699 = stdlib.cast("UInt", "UInt256", v11698, false, true);
  const v11700 = stdlib.safeMul256(v11697, v11699);
  const v11701 = stdlib.safeMul256(v11696, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v11702 = stdlib.safeAdd256(v11701, v11700);
  const v11703 = stdlib.safeMul256(v11700, v11695);
  const v11704 = stdlib.safeDiv256(v11703, v11702);
  const v11705 = stdlib.cast("UInt256", "UInt", v11704, false, true);
  const v11711 = stdlib.safeMul(v11693, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
  const v11712 = stdlib.safeDiv(v11711, v11694);
  const v11717 = stdlib.safeAdd(v11691, v11681);
  const v11721 = stdlib.safeMuldiv(v11681, v11690, v11717);
  const v11724 = stdlib.safeSub(v11721, v11705);
  const v11726 = stdlib.safeMuldiv(v11724, v11712, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
  const v11728 = stdlib.safeMuldiv(v11681, v11693, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
  const v11732 = stdlib.safeMuldiv(v11728, v11690, v11717);
  const v11733 = stdlib.gt(v11732, v11726);
  const v11734 = [v11728, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v11735 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11726];
  const v11736 = v11733 ? v11734 : v11735;
  const v11738 = v11736[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
  const v11739 = v11736[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
  const v11755 = stdlib.safeSub(v11690, v11705);
  const v11761 = stdlib.safeSub(v11755, v11739);
  const v11764 = stdlib.safeSub(v11717, v11738);
  const v11777 = stdlib.le(v11682, v11705);
  stdlib.assert(v11777, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_2829" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v11784 = stdlib.safeMul256(v11695, v11696);
  const v11785 = stdlib.cast("UInt", "UInt256", v11761, false, true);
  const v11786 = stdlib.cast("UInt", "UInt256", v11764, false, true);
  const v11787 = stdlib.safeMul256(v11785, v11786);
  const v11788 = stdlib.ge256(v11787, v11784);
  stdlib.assert(v11788, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to "runTrader_swapBForA0_2829" (defined at: ./index.rsh:590:10:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v11801 = ['Trader_swapBForA0_2829', v11680];
  
  const txn1 = await (ctc.sendrecv({
    args: [v10855, v10873, v10901, v10925, v10928, v10929, v10930, v10931, v10935, v11801],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:432:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:592:24:decimal', stdlib.UInt_max, '0'), v10901], [v11681, v10855]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
      
      switch (v12845[0]) {
        case 'Protocol_harvest0_2829': {
          const v12848 = v12845[1];
          
          break;
          }
        case 'Provider_deposit0_2829': {
          const v14520 = v12845[1];
          
          break;
          }
        case 'Provider_withdraw0_2829': {
          const v16192 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_2829': {
          const v17864 = v12845[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_2829': {
          const v19536 = v12845[1];
          
          break;
          }
        case 'Trader_swapAForB0_2829': {
          const v21208 = v12845[1];
          
          break;
          }
        case 'Trader_swapBForA0_2829': {
          const v22880 = v12845[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v23444 = v22880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
          const v23451 = v10929.A;
          const v23452 = v10929.B;
          const v23454 = v10931.protoFee;
          const v23455 = v10931.totFee;
          const v23456 = stdlib.cast("UInt", "UInt256", v23451, false, true);
          const v23457 = stdlib.cast("UInt", "UInt256", v23452, false, true);
          const v23458 = stdlib.cast("UInt", "UInt256", v23444, false, true);
          const v23459 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v23455);
          const v23460 = stdlib.cast("UInt", "UInt256", v23459, false, true);
          const v23461 = stdlib.safeMul256(v23458, v23460);
          const v23462 = stdlib.safeMul256(v23457, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v23463 = stdlib.safeAdd256(v23462, v23461);
          const v23464 = stdlib.safeMul256(v23461, v23456);
          const v23465 = stdlib.safeDiv256(v23464, v23463);
          const v23466 = stdlib.cast("UInt256", "UInt", v23465, false, true);
          const v23472 = stdlib.safeMul(v23454, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
          const v23473 = stdlib.safeDiv(v23472, v23455);
          const v23478 = stdlib.safeAdd(v23452, v23444);
          const v23482 = stdlib.safeMuldiv(v23444, v23451, v23478);
          const v23485 = stdlib.safeSub(v23482, v23466);
          const v23487 = stdlib.safeMuldiv(v23485, v23473, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
          const v23489 = stdlib.safeMuldiv(v23444, v23454, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
          const v23493 = stdlib.safeMuldiv(v23489, v23451, v23478);
          const v23494 = stdlib.gt(v23493, v23487);
          const v23495 = [v23489, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v23496 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v23487];
          const v23497 = v23494 ? v23495 : v23496;
          const v23499 = v23497[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
          const v23500 = v23497[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
          const v23516 = stdlib.safeSub(v23451, v23466);
          const v23522 = stdlib.safeSub(v23516, v23500);
          const v23525 = stdlib.safeSub(v23478, v23499);
          ;
          ;
          sim_r.txns.push({
            amt: v23444,
            kind: 'to',
            tok: v10855
            });
          const v24481 = {
            A: v23522,
            B: v23525
            };
          const v24482 = v10930.A;
          const v24486 = stdlib.safeAdd(v24482, v23500);
          const v24487 = v10930.B;
          const v24491 = stdlib.safeAdd(v24487, v23499);
          const v24492 = {
            A: v24486,
            B: v24491
            };
          const v24530 = stdlib.sub(v10935, v23466);
          sim_r.txns.push({
            kind: 'from',
            to: v12844,
            tok: undefined /* Nothing */
            });
          const v24531 = {
            A: v23466,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v24532 = await txn1.getOutput('Trader_swapBForA', 'v24531', ctc10, v24531);
          
          const v24541 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v23444
            };
          const v24543 = {
            A: v23522,
            B: v23525
            };
          null;
          const v32760 = v10928;
          const v32761 = v24481;
          const v32762 = v24492;
          const v32763 = v10931;
          const v32765 = v24530;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v12845], secs: v12847, time: v12846, didSend: v8258, from: v12844 } = txn1;
  switch (v12845[0]) {
    case 'Protocol_harvest0_2829': {
      const v12848 = v12845[1];
      return;
      break;
      }
    case 'Provider_deposit0_2829': {
      const v14520 = v12845[1];
      return;
      break;
      }
    case 'Provider_withdraw0_2829': {
      const v16192 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_2829': {
      const v17864 = v12845[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_2829': {
      const v19536 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_2829': {
      const v21208 = v12845[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_2829': {
      const v22880 = v12845[1];
      undefined /* setApiDetails */;
      const v23444 = v22880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '0')];
      const v23445 = v22880[stdlib.checkedBigNumberify('./index.rsh:590:10:spread', stdlib.UInt_max, '1')];
      const v23448 = v10931.locked;
      const v23449 = v23448 ? false : true;
      stdlib.assert(v23449, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:526:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v23451 = v10929.A;
      const v23452 = v10929.B;
      const v23454 = v10931.protoFee;
      const v23455 = v10931.totFee;
      const v23456 = stdlib.cast("UInt", "UInt256", v23451, false, true);
      const v23457 = stdlib.cast("UInt", "UInt256", v23452, false, true);
      const v23458 = stdlib.cast("UInt", "UInt256", v23444, false, true);
      const v23459 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '10000'), v23455);
      const v23460 = stdlib.cast("UInt", "UInt256", v23459, false, true);
      const v23461 = stdlib.safeMul256(v23458, v23460);
      const v23462 = stdlib.safeMul256(v23457, stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v23463 = stdlib.safeAdd256(v23462, v23461);
      const v23464 = stdlib.safeMul256(v23461, v23456);
      const v23465 = stdlib.safeDiv256(v23464, v23463);
      const v23466 = stdlib.cast("UInt256", "UInt", v23465, false, true);
      const v23472 = stdlib.safeMul(v23454, stdlib.checkedBigNumberify('./index.rsh:282:40:decimal', stdlib.UInt_max, '100'));
      const v23473 = stdlib.safeDiv(v23472, v23455);
      const v23478 = stdlib.safeAdd(v23452, v23444);
      const v23482 = stdlib.safeMuldiv(v23444, v23451, v23478);
      const v23485 = stdlib.safeSub(v23482, v23466);
      const v23487 = stdlib.safeMuldiv(v23485, v23473, stdlib.checkedBigNumberify('./index.rsh:285:62:decimal', stdlib.UInt_max, '100'));
      const v23489 = stdlib.safeMuldiv(v23444, v23454, stdlib.checkedBigNumberify('./index.rsh:298:52:decimal', stdlib.UInt_max, '10000'));
      const v23493 = stdlib.safeMuldiv(v23489, v23451, v23478);
      const v23494 = stdlib.gt(v23493, v23487);
      const v23495 = [v23489, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v23496 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v23487];
      const v23497 = v23494 ? v23495 : v23496;
      const v23499 = v23497[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '0')];
      const v23500 = v23497[stdlib.checkedBigNumberify('./index.rsh:321:30:array', stdlib.UInt_max, '1')];
      const v23516 = stdlib.safeSub(v23451, v23466);
      const v23522 = stdlib.safeSub(v23516, v23500);
      const v23525 = stdlib.safeSub(v23478, v23499);
      const v23538 = stdlib.le(v23445, v23466);
      stdlib.assert(v23538, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:547:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v23545 = stdlib.safeMul256(v23456, v23457);
      const v23546 = stdlib.cast("UInt", "UInt256", v23522, false, true);
      const v23547 = stdlib.cast("UInt", "UInt256", v23525, false, true);
      const v23548 = stdlib.safeMul256(v23546, v23547);
      const v23549 = stdlib.ge256(v23548, v23545);
      stdlib.assert(v23549, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:561:62:application call to "calcSwap" (defined at: ./index.rsh:525:81:function exp)', 'at ./index.rsh:591:23:application call to "doSwap" (defined at: ./index.rsh:560:68:function exp)', 'at ./index.rsh:590:37:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:590:37:function exp)', 'at ./index.rsh:440:19:application call to [unknown function] (defined at: ./index.rsh:440:19:function exp)', 'at ./index.rsh:481:28:application call to [unknown function] (defined at: ./index.rsh:481:28:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      ;
      ;
      const v24481 = {
        A: v23522,
        B: v23525
        };
      const v24482 = v10930.A;
      const v24486 = stdlib.safeAdd(v24482, v23500);
      const v24487 = v10930.B;
      const v24491 = stdlib.safeAdd(v24487, v23499);
      const v24492 = {
        A: v24486,
        B: v24491
        };
      const v24530 = stdlib.sub(v10935, v23466);
      ;
      const v24531 = {
        A: v23466,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v24532 = await txn1.getOutput('Trader_swapBForA', 'v24531', ctc10, v24531);
      if (v8258) {
        stdlib.protect(ctc1, await interact.out(v22880, v24532), {
          at: './index.rsh:590:11:application',
          fs: ['at ./index.rsh:590:11:application call to [unknown function] (defined at: ./index.rsh:590:11:function exp)', 'at ./index.rsh:564:12:application call to "k" (defined at: ./index.rsh:592:38:function exp)', 'at ./index.rsh:592:42:application call to "c" (defined at: ./index.rsh:562:20:function exp)', 'at ./index.rsh:592:38:application call to [unknown function] (defined at: ./index.rsh:592:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v24541 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v23444
        };
      const v24543 = {
        A: v23522,
        B: v23525
        };
      null;
      const v32760 = v10928;
      const v32761 = v24481;
      const v32762 = v24492;
      const v32763 = v10931;
      const v32765 = v24530;
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
  appApproval: `ByAeABgIBGSQTgEQQAIDSQagjQa14PDBB9mUrKAK2YG8kQ7v7abtD0G3/er+DLj3keUHmeujhwretrjbBIHH87MF3v6o9Abg8+yqAu6I6cQCEQX///////////8BJgUBAAEBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQAAQ81lT6IjUAMRhBFRwrZEkiWzUBJFs1AjYaABdJQQe0IjUEIQY1BkkhDgxAA5xJIQ8MQANLSSEQDEACJEkhEQxAAgMhERJENAFJJQxAAPslEkQ2GgEXNf8oZClkUEk1A0lXORA1/ldZOUk1/Vc4ARcURDT+Ils1/DT+JFs1+zT9Ils1+jT9IQdbNfkjrzT8FlA1+COvNPsWUDX3I680/xZQI68hBTT5CRZQo4gU00k19jT4o4gUyjT3KqOIFMM09qCIFL2iiBS5SZMhCA5EI1s19TT7NP8INfQ0/zT8HTT0lzT1CTT6IQQLNPkKHSEElzXzNP80+h0hBZc18iSvNPMWUDTyFiSvUDTyNPwdNPSXNPMNTTXxIjT1DkQjrzT8NPUJNPEkWwkWUCOvNPQ08SJbCRZQo4gUSTT4NPejiBRBp0Q09RY1B0IT1yEJEkQ2GgEXNf8oZClkUEk1A0lXKRA1/ldJOUk1/Vc4ARcURDT+Ils1/DT+JFs1+zT9Ils1+jT9IQdbNfkjrzT8FlA1+COvNPsWUDX3I680/xZQI68hBTT5CRZQo4gT10k19jT4o4gTzjT3KqOIE8c09qCIE8GiiBO9SZMhCA5EI1s19TT7NP8INfQ0/zT8HTT0lzT1CTT6IQQLNPkKHSEElzXzNP80+h0hBZc18iSvNPMWUDTyFiSvUDTyNPwdNPSXNPMNTTXxIjT1DkQjrzT8NPUJNPEkWwkWUCOvNPQ08SJbCRZQo4gTTTT4NPejiBNFp0Q09RY1B0IS2yEQEkQ2GgE2GgJQNf+AAQI0/1AhEq9QQgWTSSETDEAAGiETEkQ2GgE2GgJQNf+AAQQ0/1AhC69QQgVyIQ8SRDQBSSUMQAB5JRJEKGQpZFBJNQNJSlcpEDX/VzkQNf5XSRA1/VdZOTX8NANXEQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cACFA0A1cICVA1B0ISGyEJEkQoZClkUEk1A0lKVxkQNf9XKRA1/lc5EDX9V0k5Nfw0A1cRCDT/VwAINP9XCAhQUDT+VwAINP5XCAhQUDT8VwAINPxXCAhQNPxXEAhQNPxXGCBQNPxXOAFQUDT9VwAINP1XCAhQUDQDVwAIUDQDVwgJUDUHQhGhSSEUDEAAO0khFQxAABohFRJENhoBNhoCUDX/gAEFNP9QIQuvUEIESyEUEkQ2GgE2GgJQNf+AAQY0/1AhC69QQgQxIQ4SRCtCDodJIRYMQAL4SSEXDEACJEkhGAxAABohGBJENhoBNhoCUDX/gAEDNP9QIQuvUEID+iEXEkQ0AUklDEAA+yUSRDYaARc1/yhkKWRQSTUDSVc5EDX+V1k5STX9VzgBFxRENP4iWzX8NP4kWzX7NP0iWzX6NP0hB1s1+SOvNPsWUDX4I680/BZQNfcjrzT/FlAjryEFNPkJFlCjiBEdSTX2NPijiBEUNPcqo4gRDTT2oIgRB6KIEQNJkyEIDkQjWzX1NPw0/wg19DT/NPsdNPSXNPUJNPohBAs0+QodIQSXNfM0/zT6HSEFlzXyJK808xZQNPIWJK9QNPI0+x009Jc08w1NNfEiNPUORCOvNPQ08SJbCRZQI680+zT1CTTxJFsJFlCjiBCTNPc0+KOIEIunRDT1FjUHQhAhIQkSRDYaARc1/yhkKWRQSTUDSVcpEDX+V0k5STX9VzgBFxRENP4iWzX8NP4kWzX7NP0iWzX6NP0hB1s1+SOvNPsWUDX4I680/BZQNfcjrzT/FlAjryEFNPkJFlCjiBAhSTX2NPijiBAYNPcqo4gQETT2oIgQC6KIEAdJkyEIDkQjWzX1NPw0/wg19DT/NPsdNPSXNPUJNPohBAs0+QodIQSXNfM0/zT6HSEFlzXyJK808xZQNPIWJK9QNPI0+x009Jc08w1NNfEiNPUORCOvNPQ08SJbCRZQI680+zT1CTTxJFsJFlCjiA+XNPc0+KOID4+nRDT1FjUHQg8lIRYSRDQBSSUMQABgJRJENhoBFzX/KGQpZFBJNQNXORA1/iOvNP8WUCOvIQU0A1dZOSEHWwgWUKOID0ojrzT+VwgIUKOIDz4jrzT+Ils0/wkWUCqjiA8uoogPKkmTIQgORCNbIQYIFjUHQg65IQkSRDYaARc1/yhkKWRQSTUDVykQNf4jrzT/FlAjryEFNANXSTkhB1sIFlCjiA7pI680/lcICFCjiA7dI680/iJbNP8JFlAqo4gOzaKIDslJkyEIDkQjWyEGCBY1B0IOWEkhGQxAADNJIRoMQAAUIRoSRDYaATYaAlA1/yg0/1BCAQghGRJENhoBNhoCUDX/KTT/UCESr1BCAPCBm4LoyQESRDQBSSUMQABgJRJENhoBFzX/KGQpZFBJNQNXORA1/iOvNP8WUCOvIQU0A1dZOSEHWwgWUKOIDj8jrzT+VwAIUKOIDjMjrzT+JFs0/wkWUCqjiA4joogOH0mTIQgORCNbIQYIFjUHQg2uIQkSRDYaARc1/yhkKWRQSTUDVykQNf4jrzT/FlAjryEFNANXSTkhB1sIFlCjiA3eI680/lcACFCjiA3SI680/iRbNP8JFlAqo4gNwqKIDb5JkyEIDkQjWyEGCBY1B0INTTYaAhc1BDYaAzYaARdJIQkMQArNSSEKDEAKYSEKEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSSJbNf9XCAk1/iEbWzX9VxkQNfxXKRA1+1c5EDX6V0kQNflXWTk1+IGSAVs190k1BTX2gARHaEcfNPZQsDT2IlVJIQoMQAY5SSEcDEAC7UkhDAxAAXQhDBJENPZXARA19TT1Ils19DT4VzgBFxRENPoiWzXzNPokWzXyNPgiWzXxNPghB1s18COvNPMWUDXvI6808hZQNe4jrzT0FlAjryEFNPAJFlCjiAzHSTXtNO+jiAy+NO4qo4gMtzTtoIgMsaKIDK1JkyEIDkQjWzXsNPI09Ag16zT0NPMdNOuXNOwJNPEhBAs08AodIQSXNeo09DTxHSEFlzXpJK806hZQNOkWJK9QNOk08x0065c06g1NSTXoIls15zToJFs15jTzNOwJNOYJNeU06zTnCTXkNPUkWzTsDkQjrzTlFlAjrzTkFlCjiAwrNO807qOIDCOnRDT0NP+IC/qxIrIBNOyyCCEGshAxALIHszTsFiSvUDXjgAgAAAAAAABf0zTjULA04zUHJwQxAFAkrzT0FlBQNONQNOUWNOQWUFCwNP80/jT9NPwiNPs05RY05BZQNPkiWzTmCBY0+SRbNOcIFlA0+DIGNPc07AlCCnxINPZXARA19TT1Ils19DT4VzgBFxRENPoiWzXzNPokWzXyNPgiWzXxNPghB1s18COvNPIWUDXvI6808xZQNe4jrzT0FlAjryEFNPAJFlCjiAtWSTXtNO+jiAtNNO4qo4gLRjTtoIgLQKKICzxJkyEIDkQjWzXsNPM09Ag16zT0NPIdNOuXNOwJNPEhBAs08AodIQSXNeo09DTxHSEFlzXpJK806hZQNOkWJK9QNOk08h0065c06g1NSTXoIls15zToJFs15jTrNOcJNeU08jTsCTTmCTXkNPUkWzTsDkQjrzTlFlAjrzTkFlCjiAq6NO4076OICrKnRDT0iApxsSKyATTsshIlshAxALIUNP+yEbMkrzTsFlA144AIAAAAAAAAWLE041CwNOM1BycEMQBQNPQWJK9QUDTjUDTlFjTkFlBQsDT/NP40/TT8IjT7NOUWNOQWUDT5Ils05wgWNPkkWzTmCBZQNPgyBjT3NPQIQgkKSSUMQAGfSDT2VwEQNfU09SJbNfQ09SRbNfM0+Fc4ARcURDT6Ils18jT6JFs18TT4Ils18DT4IQdbNe808jTzCTXuI6808RZQNe0jrzTzFlAjryEFNO8IFlCjiAnZNO2jiAnTI6807hZQKqOICciiiAnESZMhCA5EI1shBgg17DT0NOwPRDT0NOwJNes08TTsCDXqNOw08h006pc08wk08CEECzTvCh0hBJc16TTsNPAdIQWXNegkrzTpFlA06BYkr1A06DTyHTTqlzTpDU1JNeciWzXmNOckWzXlNO405Qk15DTxNPQINOsJNOYJNeMiNPMOIjTrDhBEI6805BZQI6804xZQo4gJLSOvNPIWUDTto4gJIadENPQ0/4gI+LEisgE087IIIQayEDEAsgezsSKyATTrshIlshAxALIUNP+yEbM08xY06xZQNeKACAAAAAAAAFGLNOJQsDTiNQcnBDEAUCSvNPQWUFA04lA05BY04xZQULA0/zT+NP00/CI0+zTkFjTjFlA0+SJbNOUIFjT5JFs05ggWUDT4MgY09zTzCUIHZUg09lcBEDX1NPUiWzX0NPUkWzXzNPhXOAEXFEQ0+iJbNfI0+iRbNfE0+CJbNfA0+CEHWzXvNPE08wk17iOvNPIWUDXtI6808xZQI68hBTTvCBZQo4gIOjTto4gINCOvNO4WUCqjiAgpoogIJUmTIQgORCNbIQYINew09DTsD0Q09DTsCTXrNPI07Ag16jTsNPEdNOqXNPMJNPAhBAs07wodIQSXNek07DTwHSEFlzXoJK806RZQNOgWJK9QNOg08R006pc06Q1NSTXnIls15jTnJFs15TTyNPQINOsJNOYJNeQ07jTlCTXjIjTrDiI08w4QRCOvNOQWUCOvNOMWUKOIB4407SOvNPEWUKOIB4KnRDT0iAdBsSKyATTrsgghBrIQMQCyB7OxIrIBNPOyEiWyEDEAshQ0/7IRszTrFjTzFlA14oAIAAAAAAAASls04lCwNOI1BycEMQBQNPQWJK9QUDTiUDTkFjTjFlBQsDT/NP40/TT8IjT7NOQWNOMWUDT5Ils05ggWNPkkWzTlCBZQNPgyBjT3NPQINOsJQgXFSSEGDEACbkkhCQxAAPZINPZXARg19TT1Ils19DT1VwgQNfM0+yRbNfI0+iJbNfE0+iRbNfA09DTxHTTylzXvNPQ08B008pc17jTzIls07w5ENPMkWzTuDkQ09DT9iAZxNPsiWzT0CDXtNPI09Ak17DTxNO8JNes08DTuCTXqsSKyATTvsgghBrIQMQCyB7OxIrIBNO6yEiWyEDEAshQ0/7IRszTvFjTuFlA16YAIAAAAAAAAQyw06VCwNOk1B4AEHNSuXzEAUDT0FlA06VA06xY06hZQUDTtFjTsFlBQsDT/NP40/TT8IjTtFjTsFlA06xY06hZQNPk0+DIGNPc07wlCBMFINPZXARg19TT1VwAQNfQ09SEHWzXzNPhXOAEXFEQ09CJbNfE09CRbNfA0+yRbSTXvIhJJNe5BACEjrzTxFlAjrzTwFlCjiAWklogFoEmTIQgORCNbNfJCACI08TTvHTT6IluXNe008DTvHTT6JFuXSTXsNO1JNOwMTTXyNPM08g5ENPGIBSw08DT/iAU/NO5BACEjrzTxFlAjrzTwFlCjiAVKlogFRkmTIQgORCNbNe1CACI08TTvHTT6IluXNew08DTvHTT6JFuXSTXrNOxJNOsMTTXtNPM07Q5ENPE0+iJbCDXsNPA0+iRbCDXrNPsiWzTtCTXqNO807Qg16bEisgE07bISJbIQMQCyFDT9shGzgAgAAAAAAAA7+jTtFlCwNO0WNQeABN4bKfUxAFA08RY08BZQUDTtFlA07BY06xZQUDTqFjTpFlBQsDT/NP40/TT8IjTqFjTpFlA07BY06xZQNPk0+DIGNPc08QhCA1BINPZXAVk19TT1VyA5NfQxADT4VxggEkQ09CJbNfM09CRbNfI09CEHWzXxNPMhBAw08iEEDBBJNfBBAA008TTyNPMIEjXvQgADIjXvNPEhBAw17jTxIg017TTvNO4QNO0QRDT1VwAgNew08EEADTTxNPI08wgSNetCAAMiNes06zTuEDTtEEQ09Fc4ARc16jIKYDIKeAk09wk16TT5Ils16DT5JFs15zToNOkINeaxIrIBNOayCCEGshA07LIHs7EisgE057ISJbIQNOyyFDT/shGzgAgAAAAAAAA1SjToFjTnFlA06RZQULA06BY05xZQNOkWUDUHgARWrXU8NPMWNPIWUDTxFlA09FcYIFA06hZRBwhQULA0/zT+NP00/DTqNPskWyISEDT6IlsiEjT6JFsiEhAQNPs0+jT8NPQyBjTpNPcINOYJQgIFSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQMhG1s1/0k1BTX+gAQlPLfXNP5QsIAIAAAAAAAAYU2wKzUHsSKyASEKshA0/7Ihs7EisgEishIlshAyCbIVMgqyFDQDIluyEbNCAiEiEkQhDYgCiiI0ARJENARJIhJMNAISEURJNQVJSklIKzX/Ils1/lcIIDX9VygINfyBMFs1+4AE4B3OrzT/UDT+FlA0/VA0/FA0+xZQsCEdIQUNRCENiAI6sSKyASKyEiWyEDIKshQ0/rIRs4EJrzX6gAVhcHBJRDT7FlADNfgyCng19zIKYDT3CRY19rEisgEhDLIQNPuyGIAESVoKaLIaMRgWsho0+rIaNP4WshqzMgpgNPcJNPYXCRa3AD5XBABQNfmACAAAAAAAACp6NPlQsDT5STX4Ils19zT4Vwg5STX2Ils19TT2JFs19DT2IQdbNfM09SEEDDT0IQQMEEEADTTzNPQ09QgSNfJCAAMiNfI08jTzIQQMEDTzIg0QRCI09xJEIQ2IAWmxIrIBIQqyECEdsiIhDLIjNPyyJTT9siaBYK+yJzIDsigyCrIps7Q8NfGACAAAAAAAACqUNPEWULA08Uk18DT+FiJbE0Q08DT+E0QhB6817zT+NPo08DTvIoAQ//////////8AAAAAAAAAADTvSTT2MgY090IAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0+UEAMDT1FjT2UDT3FlA0+lA0+1A0/FA0/VAoSwFXAH9nKUsBV38DZ0ghCTUBMgY1AkIAUzT1FjT2UDT3FlA0+FA0+lA0+1A0/FA0/VA0/xZQKEsBVwB/ZylLAVd/G2dIJTUBMgY1AkIAHTEZIRwSRLEisgEisgghBrIQMgmyCTIKsgezQgAFMRkiEkQrNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkhBggyBBJEMRYSRCEGQzEZIhJEQv/dIjE0EkQhCjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+sNABJSiEGCDUAOAcyChJEOBAhBhJEOAgSRIk0AElKSSEGCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiUkVgSBMCa9MUIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 154,
  unsupported: [],
  version: 11,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:425:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T15","name":"v32844","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"_Protocol_harvest0_2829","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"_Provider_withdraw0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapBForA0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapBForA0_2829","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v10874","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v10900","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"v0","type":"tuple"}],"name":"_reach_oe_v13642","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v15354","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v17196","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v19035","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v20875","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v22705","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v24531","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v24909","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"internalType":"address payable","name":"liquidityToken","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"lptBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"poolBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"protoInfo","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"protoBals","type":"tuple"},{"internalType":"address payable","name":"tokB","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"tokA","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Protocol_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v32801","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"v32802","type":"tuple"}],"name":"Protocol_harvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v32807","type":"tuple"},{"internalType":"uint256","name":"v32808","type":"uint256"}],"name":"Provider_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32813","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v32814","type":"tuple"}],"name":"Provider_withdraw","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32819","type":"uint256"},{"internalType":"uint256","name":"v32820","type":"uint256"}],"name":"Trader_exactSwapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32825","type":"uint256"},{"internalType":"uint256","name":"v32826","type":"uint256"}],"name":"Trader_exactSwapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32831","type":"uint256"},{"internalType":"uint256","name":"v32832","type":"uint256"}],"name":"Trader_swapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32837","type":"uint256"},{"internalType":"uint256","name":"v32838","type":"uint256"}],"name":"Trader_swapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T12","name":"v32853","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"_Protocol_harvest0_2829","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"_Provider_withdraw0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_exactSwapBForA0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T8","name":"_Trader_swapBForA0_2829","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"internalType":"struct T14","name":"v32855","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32778","type":"uint256"}],"name":"v_exactSwapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32783","type":"uint256"}],"name":"v_exactSwapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32788","type":"uint256"}],"name":"v_swapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32793","type":"uint256"}],"name":"v_swapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060405260c062007f0d80380380916200001a82620000be565b60803912620000a2576040516200003181620000f4565b608051815262000040620001ca565b60208201526200004f620001da565b604082015260e051606082015261010051906001600160c01b031982168203620000a2576200009291608082015262000087620001f1565b60a08201526200031e565b60405161597d90816200158e8239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000e557604052565b620000ef620000a7565b604052565b60c081019081106001600160401b03821117620000e557604052565b604081019081106001600160401b03821117620000e557604052565b60a081019081106001600160401b03821117620000e557604052565b60e081019081106001600160401b03821117620000e557604052565b601f909101601f19168101906001600160401b03821190821017620000e557604052565b604051906101c082016001600160401b03811183821017620000e557604052565b604051906101e082016001600160401b03811183821017620000e557604052565b60a051908115158203620000a257565b60c051906001600160a01b0382168203620000a257565b61012051906001600160a01b0382168203620000a257565b60405190620002188262000110565b60006020838281520152565b6040519062000233826200012c565b60006080838281528260208201528260408201528260608201520152565b60405190606082016001600160401b0381118382101762000282575b60405260006040838281528260208201520152565b6200028c620000a7565b6200026d565b60405190620002a18262000148565b8160008152620002b062000209565b6020820152620002bf62000209565b6040820152620002ce62000224565b6060820152620002dd62000209565b6080820152600060a082015260c0620002f562000251565b910152565b60405190620003098262000110565b60006020836200031862000209565b81520152565b620003d0906000808055436003556101a06200033962000188565b8281526200034662000292565b60208201528260408201526200035b620002fa565b60608201528260808201526200037062000209565b60a08201526200037f62000209565b60c08201526200038e62000209565b60e08201526200039d62000209565b610100820152620003ad62000209565b6101208201528261014082015282610160820152826101808201520152620007f8565b565b60405190620003e18262000110565b81600081526020620002f562000224565b60405190602082016001600160401b0381118382101762000418575b6040526020368337565b62000422620000a7565b6200040e565b62000432620001a9565b9060008083526200044262000251565b602084015262000451620003d2565b604084015262000460620003d2565b60608401528060808401526200047562000209565b60a08401526200048462000251565b60c08401528060e08401528061010084015280610120840152620004a7620003f2565b610140840152620004b762000209565b61016084015280610180840152806101a08401526101c0830152565b805190600282101562000503579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03918216815260a0810194939092608092919062000543906020860190620004d3565b16910152565b3d1562000598573d906001600160401b03821162000588575b604051916200057c601f8201601f19166020018462000164565b82523d6000602084013e565b62000592620000a7565b62000562565b606090565b908160a0910312620000a25760405190620005b8826200012c565b8051825260208082015190830152604080820151908301526060810151906001600160a01b0382168203620000a257608091606084015201518015158103620000a257608082015290565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260209182015160c082019392620003d092019062000603565b92919060405193602085015260408401526060830152606082526080820182811060018060401b03821117620000e557604052565b919082519283825260005b848110620006ba575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520162000698565b9493620007156012946200070660a095620006f7620007249660c08c5260c08c01906200068d565b908a820360208c01526200068d565b9088820360408a01526200068d565b9086820360608801526200068d565b6000196080860152930152565b506040513d6000823e3d90fd5b6001600160a01b039091169052565b6040519061016082016001600160401b03811183821017620007e8575b6040526000610140838281526200078062000251565b60208201528260408201526200079562000209565b6060820152826080820152620007aa62000209565b60a0820152620007b962000209565b60c0820152620007c862000209565b60e0820152620007d762000224565b610100820152826101208201520152565b620007f2620000a7565b6200076a565b6200080262000428565b90620008226200081c6200081860045460ff1690565b1590565b62000e32565b604080513381528251602080830191909152830151151581830152828201516001600160a01b039081166060808401919091528401516080808401919091528401516001600160c01b03191660a0808401919091528401511660c08201527f527cf49e362150afb14e9c12b7220f69d0ee876e80b616663fba5dc142daa8409060e090a1620008be8251801590811562000df9575b5062000e53565b620008ca341562000e74565b6020908184019360009283865152838187510152828501958651620008f49060018060a01b031690565b30620009009162000f9c565b936101a084019485524794610180850195865262000926600160ff196004541617600455565b825189518351633b02a71760e01b87820190815298928a9283929182916200095f916001600160a01b0390911690306024850162000519565b0399828d601f199c8d8101855262000978908562000164565b60a001519251926001600160a01b03165af1916200099562000549565b9283620009a29162000f38565b50620009b360ff1960045416600455565b8a51620009cb9030906001600160a01b031662000f9c565b90518082036101c0890152620009e2911462000e95565b479051900390828601918251528480825183010191019062000a04916200059d565b848251015251956060850196808852825162000a228192826200063b565b037fdae3d0d31ef3b6191007d71e7e1d5e26a6d5fd51b61c4f42fbfa695250d4878691a1838751015184815160641160001462000df0576064910151105b1562000de45762000a8d848851015162000a8584820151918781015190519062000e06565b146080870152565b60808501511562000ddd5760648285895101510151105b1562000dd25762000abe8285895101510151151562000eb6565b8651511562000acd9062000ed7565b60a085019160001983515281858451015260c08601968288515282868951015282828951015260e087019083825260608b01519a8351809c8982019062000b179160209181520190565b038281018d5262000b29908d62000164565b608001516001600160c01b03191683516001600160c01b03199091168882019081529099908a90600801038281018b5262000b65908b62000164565b5180519084898201519101519062000b7d9262000658565b915183518881019182529190829060200103908101825262000ba0908262000164565b825162000c969b62000c529a9193849362000bde939092611002808701906001600160401b0382118883101762000dc2575b62006f0b8839620006cf565b039083f0801562000db2575b61010096808801918c906001600160a01b039062000c0b908216856200073e565b83517fe2fc5756c8586ff8c7e834304dd61f765496c90319fd0e721cba28ce9976b6759062000c789062000c5f906001600160a01b0316966101209e8f880198896200073e565b516001600160a01b031690565b87516001600160a01b0390911681529081906020820190565b0390a181516001600160a01b03166101409d8e85019182516200073e565b8451829062000cc89062000cbc906001600160a01b03169351516001600160a01b031690565b6001600160a01b031690565b91160362000da65762000cdb8662000ef6565b835162000cfe9062000cbc906001600160a01b031693516001600160a01b031690565b91160362000d9a5762000d118462000f17565b61016001948386515283878751015262000d2a6200074d565b9b516001600160a01b031662000d41908d6200073e565b518b870152516001600160a01b031662000d5d918b016200073e565b825160608a015260808901525160a0880152805160c08801525160e087015283510151908501524390840152515190820152620003d0906200140d565b62000d11600162000f17565b62000cdb600162000ef6565b62000dbc62000731565b62000bea565b62000dcc620000a7565b62000bd2565b62000abe8162000eb6565b8062000aa4565b80608086015262000a8d565b50508062000a60565b90506001541438620008b7565b919082019182811162000e1c578210620000a257565b634e487b7160e01b600052601160045260246000fd5b1562000e3a57565b60405163100960cb60e01b8152601d6004820152602490fd5b1562000e5b57565b60405163100960cb60e01b8152601e6004820152602490fd5b1562000e7c57565b60405163100960cb60e01b815260206004820152602490fd5b1562000e9d57565b60405163100960cb60e01b815260216004820152602490fd5b1562000ebe57565b60405163100960cb60e01b815260236004820152602490fd5b1562000edf57565b602460405163100960cb60e01b8152816004820152fd5b1562000efe57565b60405163100960cb60e01b815260256004820152602490fd5b1562000f1f57565b60405163100960cb60e01b815260266004820152602490fd5b1562000f415790565b80511562000f5157805190602001fd5b60405163100960cb60e01b815260226004820152602490fd5b1562000f735790565b80511562000f8357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b6040516370a0823160e01b602082019081526001600160a01b039384166024808401919091528252600093849392849190606081016001600160401b0381118282101762001019575b6040525193165af16200100362000ffb62000549565b809262000f6a565b50602081805181010312620000a2576020015190565b62001023620000a7565b62000fe5565b6040519061012082016001600160401b03811183821017620010b6575b6040526000610100838281526200105c62000251565b60208201528260408201526200107162000209565b60608201526200108062000209565b60808201526200108f62000209565b60a08201526200109e62000209565b60c0820152620010ad62000224565b60e08201520152565b620010c0620000a7565b62001046565b60208091805184520151910152565b81516001600160a01b031681526102608101929161024090610100906200110560208201516020860190620004d3565b60408101516001600160a01b031660808501526200112c606082015160a0860190620010c6565b62001140608082015160e0860190620010c6565b6200115560a0820151610120860190620010c6565b6200116a60c0820151610160860190620010c6565b6200117f60e08201516101a086019062000603565b0151910152565b90600182811c92168015620011b8575b6020831014620011a257565b634e487b7160e01b600052602260045260246000fd5b91607f169162001196565b601f8111620011d0575050565b6000906002825260208220906020601f850160051c8301941062001211575b601f0160051c01915b8281106200120557505050565b818155600101620011f8565b9092508290620011ef565b80519091906001600160401b03811162001310575b62001249816200124360025462001186565b620011c3565b602080601f83116001146200128857508192936000926200127c575b50508160011b916000199060031b1c191617600255565b01519050388062001265565b6002600052601f198316949091907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace926000905b878210620012f7575050836001959610620012dd575b505050811b01600255565b015160001960f88460031b161c19169055388080620012d2565b80600185968294968601518155019501930190620012bc565b6200131a620000a7565b62001231565b604051906200132f8262000148565b81600081526200133e62000251565b6020820152600060408201526200135462000209565b60608201526200136362000209565b60808201526200137262000209565b60a082015260c0620002f562000224565b81516001600160a01b03908116825260208084015161020084019594620003d094936101609360c093620013ba91870190620004d3565b6040820151166080850152620013d9606082015160a0860190620010c6565b620013ed608082015160e0860190620010c6565b6200140260a0820151610120860190620010c6565b015191019062000603565b608081015115620014d257620014bd620014cc620003d0926101006200143262001320565b82519092906200144c906001600160a01b0316846200073e565b60208181015190840152604081015162001473906001600160a01b0316604085016200073e565b60a0810151606084015260c0810151608084015260e081015160a0840152015160c0820152620014a36002600055565b620014ad43600155565b6040519283916020830162001383565b03601f19810183528262000164565b6200121c565b620014bd620014cc620003d092620014e962001029565b815190919062001503906001600160a01b0316836200073e565b6020818101519083015260408101516200152a906001600160a01b0316604084016200073e565b6060810151606083015260a0810151608083015260c081015160a083015260e081015160c0830152610140610100918281015160e0850152015190820152620015736004600055565b6200157d43600155565b60405192839160208301620010d556fe60806040526004361015610018575b361561001657005b005b60003560e01c80630e36a72c146101805780631e93b0f1146101775780633402da131461016e5780634012e02e14610165578063450bacff1461015c5780635e75b021146101535780636167d4921461014a57806374e0507d146101415780637731406e14610138578063800a119b1461012f5780638323075714610126578063842463da1461011d57806388f8ea6314610114578063ab53f2c61461010b578063b8aaa65414610102578063be20a474146100f9578063c8867ae9146100f05763dc8d714f0361000e576100eb611538565b61000e565b506100eb6114cd565b506100eb611438565b506100eb61105a565b506100eb610fe5565b506100eb610f03565b506100eb610e98565b506100eb610e79565b506100eb610e0f565b506100eb6109f0565b506100eb61092d565b506100eb610815565b506100eb61079d565b506100eb61072e565b506100eb61049a565b506100eb6102f2565b506100eb6102b1565b506100eb6101e3565b6001600160a01b031690565b6001600160a01b038116036101a657565b600080fd5b60208091805184520151910152565b60206040916101ca8482516101ab565b0151910152565b6060810192916101e191906101ba565b565b5060c03660031901126101a6576004356101fc81610195565b60a03660231901126101a65760606102ad916102166118b9565b5061029f6102226118d9565b809261022c61196d565b6001600160a01b0391821681529060208201610247366119a2565b815260405191610256836115f4565b61025e61196d565b8352602083019361026d61262e565b855251168251525160208251015260008251525160208251015261028f6126c9565b90600082525160208201526131c1565b0151604051918291826101d1565b0390f35b50346101a65760003660031901126101a6576020600354604051908152f35b60409060031901126101a657600490565b60409060231901126101a657602490565b5060603660031901126101a6576102ad608061030d366102d0565b61037d6103186118d9565b809261032d6103256118b9565b913690611aa1565b815260208101604435815260405190610345826115f4565b61034d6118b9565b8252602082019261035c61262e565b8452518251525160208251015260018251525160408251015261028f6126c9565b01516040519081529081906020820190565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b50634e487b7160e01b600052602160045260246000fd5b6040908051600281101561040c575b83526020818101511515908401528101516001600160a01b0316910152565b6104146103c7565b6103ed565b81516001600160a01b039081168252602080840151610200840195946101e194936101a09360c09361044d918701906101ab565b61045f604083015160608701906101ab565b610471606083015160a087019061038f565b61048460808301516101408701906101ab565b60a08201511661018085015201519101906103de565b50346101a65760003660031901126101a6576104b461185d565b506102ad60206104c26118d9565b6104ca611ae5565b600054906004821015610615576104e660026105009314611e0f565b6104ee611675565b84928184808094518301019101611d3a565b60608101828151519160a0860192835152510151838251015260808201838151519160c0870192835152510151848251015260c083019061058f61058360808451519460e08a01958651528881510151898751015260408151015160408751015261057b6105716060835101611d2d565b6060885101611989565b510151151590565b60808451019015159052565b60a0840192858451519461010089019586515251015186855101526105c76101206105bd6040880151610189565b9801978851611989565b5185875101525160408651015251606085510152516080845101526105f96105ef8251610189565b60a0855101611989565b015160c08251015251908201525b015160405191829182610419565b610624600461063e9314611def565b61062c611675565b84928184808094518301019101611c80565b8160808201805151855152510151828451015260a08101828151519181860192835152510151838251015260e082016106bd6106b160808351519360408901948551528781510151888651015260408151015160408651015261057b6106a76060835101611d2d565b6060875101611989565b60808351019015159052565b60c08301918483515193606088019485515251015185845101526106e46040850151610189565b956106f460808201978851611989565b51858751015251604086510152516060855101525160808451015261071c6105ef8251610189565b015160c0825101525190820152610607565b5060403660031901126101a657610744366102d0565b61074c6118d9565b6040823603126101a65761078291602060405191610769836115f4565b80358352013561077881611998565b60208201526127ad565b602060405160008152f35b6040810192916101e191906101ab565b5060403660031901126101a6576107b26117be565b506102ad60c06107c06118d9565b610807816107cc6117be565b60043581526020810160243581526107e26126e5565b915182515251602082510152602081019060038251525160808251015261028f6126c9565b01516040519182918261078d565b50346101a6576020806003193601126101a6576101406102ad916004359061083b6118d9565b91600054600481106000146108d757916108b76108b26108bd9361086460026108c29714611e4f565b61087d61086f611675565b858082518301019101611d3a565b936108a9608061089d610897604060c08a01510151615014565b856150e5565b960195865151906150e5565b9451015161507a565b615087565b90615132565b615039565b91018190526040519081529081906020820190565b916108b76108b26108bd936108f160046109249714611e2f565b61090a6108fc611675565b858082518301019101611c80565b936108a960a061089d610897604060e08a01510151615014565b8282015261037d565b506102c03660031901126101a6576109436118d9565b60405190610950826115f4565b60043582526102a03660231901126101a6576109e49161096e61171e565b610976615753565b815261098136615762565b602082015261098f366157df565b604082015261099d3661582a565b60608201526109ab366119f5565b60808201526109b936611a20565b60a08201526109c736611a4b565b60c08201526109d536611a76565b60e082015260208201526131c1565b60405160008152602090f35b50346101a6576020806003193601126101a65760043590610a0f6118d9565b610a17615879565b60008054846004821015610c3e57506002610a329114611ecf565b83610a4c610a3e611675565b828082518301019101611d3a565b9160c0830192610a60608085510151151590565b15610c3457610a6e82611eef565b6080019382855101516101408201908152855151926101608301938452855160400151610a9a90615062565b610aa4908b6150e5565b9661018097888501908082528451610abb916150e5565b908651610ac790615087565b9051610ad29161504e565b610adb91615132565b966101a085019788528b82515190610af29161504e565b9b6101c086019c8d528783510151610b0a90826150e5565b8d51610b159161303a565b8951610b209161507a565b825151610b2c906150b6565b835160400151610b3b91615132565b610b44916150e5565b60649004916101e087019283525151610b5c916150e5565b6127109004926102008601918483526102208701948551528189865101528d6102408801938385515282518b86510152518a86510151610b9b916150e5565b9051610ba69161303a565b90511090506000149b6101809b610bf3610c14996102ad9f610c0d99610260610c0399610bfd98610be794610c2b575051915b01958187525190519061507a565b955101518b519061507a565b915101519061507a565b906150e5565b92519051906150e5565b1115611f0f565b519082015201516040519081529081906020820190565b90505191610bd9565b610a6e6001611eef565b91906004610c4c9114611e6f565b610c65610c57611675565b838082518301019101611c80565b9060e0820191610c79608084510151151590565b15610e0557610c8782611e8f565b60a001938385510151815284515192848201938452805160400151610cab90615062565b610cb5908a6150e5565b60408301908082528351610cc8916150e5565b908551610cd490615087565b9051610cdf9161504e565b610ce891615132565b95606083019687528981515190610cfe9161504e565b99608084019a8b528682510151610d1590826150e5565b8b51610d209161303a565b8851610d2b9161507a565b835151610d37906150b6565b845160400151610d4691615132565b610d4f916150e5565b606490049260a085019384525151610d66916150e5565b61271090049360c084019285845260e08501958651528188875101526101008501938285515281518986510152518884510151610da2916150e5565b8c51610dad9161303a565b90511090506000146102ad9a6101809a610bf3610df399610be7610dec99610c0398610bfd97610dfd5750515b6101208a01958187525190519061507a565b1115611eaf565b518282015261037d565b905051610dda565b610c876001611e8f565b5060403660031901126101a657610e246117be565b506102ad60e0610e326118d9565b61080781610e3e6117be565b6004358152602081016024358152610e546126e5565b915182515251602082510152602081019060048251525160a08251015261028f6126c9565b50346101a65760003660031901126101a6576020600154604051908152f35b5060003660031901126101a65760206040610eb16118d9565b610eea818351858101818110600180881b03821117610ef6575b855260008152610ed96117be565b9060008252511515868201526127ad565b01511515604051908152f35b610efe6115dd565b610ecb565b50346101a6576020806003193601126101a6576101606102ad9160043590610f296118d9565b9160005460048110600014610f9957916108b76108b26108bd93610f5260026108c29714611f4f565b610f91610f6e610f60611675565b868082518301019101611d3a565b6080610f84610897604060c08501510151615014565b91019586510151906150e5565b93515161507a565b916108b76108b26108bd93610fb360046109249714611f2f565b610f91610fcf610fc1611675565b868082518301019101611c80565b60a0610f84610897604060e08501510151615014565b50346101a657600080600319360112611057578054611002611675565b906040519283918252602090604082840152835191826040850152815b83811061104057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161101f565b80fd5b50346101a6576020806003193601126101a657600435906110796118d9565b611081615879565b92600080546004811060001461126d57600261109d9114611fcf565b6110a861086f611675565b9060c08201916110bc608084510151151590565b15611263576110ca82611fef565b60800190815151906101408801918252868351015161016089019081528451604001516110f690615062565b61110090876150e5565b6101808a01908082528451611114916150e5565b90825161112090615087565b905161112b9161504e565b61113491615132565b946101a096878b01968752808a875101519061114f9161504e565b906101c08c0191825286515161116590826150e5565b82516111709161303a565b885161117b9161507a565b835151611187906150b6565b84516040015161119691615132565b61119f916150e5565b60649004926101e08d0193845251516111b7916150e5565b6127109004936102008c01928584526102208d0195865152818c875101526102408d01938285515281518d86510152518851516111f3916150e5565b83516111fe9161303a565b90511090506000146102ad9b6112486101a09c61123d610c149a6102606112539a610c0399610bfd9861125a575051955b0194855251518c519061507a565b90835101519061507a565b92519051519061507a565b111561200f565b9050519561122f565b6110ca6001611fef565b600461127f9196939695929514611f6f565b61129861128a611675565b828082518301019101611c80565b9160e08301926112ac608085510151151590565b1561142e576112ba86611f8f565b60a00194855151825282865101518383019081528451604001516112dd90615062565b6112e790896150e5565b604084019080825284516112fa916150e5565b90825161130690615087565b90516113119161504e565b61131a91615132565b9460608401958652888589510151906113329161504e565b9860808501998a5288515161134790826150e5565b8a516113529161303a565b875161135d9161507a565b825151611369906150b6565b83516040015161137891615132565b611381916150e5565b606490049160a086019283525151611398916150e5565b61271090049260c085019184835260e08601948551528187865101526101008601928284515281518885510152518a51516113d2916150e5565b8b516113dd9161303a565b905110905060001498610bfd6101a099611248610df39861123d61141e986102ad9f97610c0398611425575051935b6101208b0194855251518c519061507a565b1115611faf565b9050519361140c565b6112ba6001611f8f565b5060603660031901126101a6576102ad60a0611453366102e1565b61145b6117be565b506108076114676118d9565b8092611471611ac9565b90600435825261148660208301913690611aa1565b815260405190611495826115f4565b61149d611ac9565b825260208201926114ac61262e565b8452518251525160208251015260028251525160608251015261028f6126c9565b5060403660031901126101a6576114e26117be565b506102ad6101006114f16118d9565b610807816114fd6117be565b60043581526020810160243581526115136126e5565b915182515251602082510152602081019060058251525160c08251015261028f6126c9565b5060403660031901126101a65761154d6117be565b506102ad61012061155c6118d9565b610807816115686117be565b600435815260208101602435815261157e6126e5565b915182515251602082510152602081019060068251525160e08251015261028f6126c9565b90600182811c921680156115d3575b60208310146115bd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916115b2565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761160f57604052565b6116176115dd565b604052565b60e081019081106001600160401b0382111761160f57604052565b60a081019081106001600160401b0382111761160f57604052565b601f909101601f19168101906001600160401b0382119082101761160f57604052565b6040519060008260025491611689836115a3565b8083526001938085169081156116fd57506001146116af575b506101e192500383611652565b6002600090815260008051602061593183398151915294602093509091905b8183106116e55750506101e19350820101386116a2565b855488840185015294850194879450918301916116ce565b90506101e194506020925060ff191682840152151560051b820101386116a2565b6040519061010082016001600160401b0381118382101761160f57604052565b604051906101c082016001600160401b0381118382101761160f57604052565b6040519061012082016001600160401b0381118382101761160f57604052565b60405190610e0082016001600160401b0381118382101761160f57604052565b6040519061028082016001600160401b0381118382101761160f57604052565b604051906117cb826115f4565b60006020838281520152565b6040519060a082016001600160401b03811183821017611813575b60405260006080838281528260208201528260408201528260608201520152565b61181b6115dd565b6117f2565b60405190606082016001600160401b03811183821017611850575b60405260006040838281528260208201520152565b6118586115dd565b61183b565b6040519061186a8261161c565b81600081526118776117be565b60208201526118846117be565b60408201526118916117d7565b606082015261189e6117be565b6080820152600060a082015260c06118b4611820565b910152565b604051906118c6826115f4565b60006020836118d36117be565b81520152565b6118e161173e565b9060008083526118ef61185d565b60208401528060408401526119026118b9565b60608401528060808401526119156117be565b60a08401526119226117be565b60c084015261192f6117be565b60e084015261193c6117be565b61010084015261194a6117be565b6101208401528061014084015280610160840152806101808401526101a0830152565b6040519061197a826115f4565b816000815260206118b46117d7565b6001600160a01b039091169052565b801515036101a657565b60a09060231901126101a657604051906119bb82611637565b816024358152604435602082015260643560408201526084356119dd81610195565b6060820152608060a435916119f183611998565b0152565b6040906101c31901126101a65760405190611a0f826115f4565b6101c43582526101e4356020830152565b6040906102031901126101a65760405190611a3a826115f4565b610204358252610224356020830152565b6040906102431901126101a65760405190611a65826115f4565b610244358252610264356020830152565b6040906102831901126101a65760405190611a90826115f4565b6102843582526102a4356020830152565b91908260409103126101a657604051611ab9816115f4565b6020808294803584520135910152565b60405190611ad6826115f4565b816000815260206118b46117be565b6040519061014082016001600160401b03811183821017611b83575b60405281611b0d6117be565b8152611b176117be565b6020820152611b246117d7565b6040820152611b316117be565b6060820152611b3e61185d565b6080820152611b4b6117be565b60a0820152611b586117be565b60c0820152611b656117d7565b60e0820152611b726117be565b6101008201526101206118b461185d565b611b8b6115dd565b611b01565b51906101e182610195565b91908260609103126101a657604051606081016001600160401b03811182821017611bf7575b6040528092805160028110156101a657604091829184526020810151611be681611998565b60208501520151916119f183610195565b611bff6115dd565b611bc1565b91908260409103126101a657604051611c1c816115f4565b6020808294805184520151910152565b91908260a09103126101a657604051611c4481611637565b60808082948051845260208101516020850152604081015160408501526060810151611c6f81610195565b60608501520151916119f183611998565b610260818303126101a65761024090611d1d611c9a61175e565b93611ca483611b90565b8552611cb38160208501611b9b565b6020860152611cc460808401611b90565b6040860152611cd68160a08501611c04565b6060860152611ce88160e08501611c04565b6080860152611cfb816101208501611c04565b60a0860152611d0e816101608501611c04565b60c08601526101a08301611c2c565b60e0840152015161010082015290565b516001600160a01b031690565b90610200828203126101a65760405191611dda91906101609060e085016001600160401b03811186821017611de2575b6040528051611d7881610195565b8552611d878360208301611b9b565b6020860152611d9860808201611b90565b6040860152611daa8360a08301611c04565b6060860152611dbc8360e08301611c04565b6080860152611dcf836101208301611c04565b60a086015201611c2c565b60c082015290565b611dea6115dd565b611d6a565b15611df657565b60405163100960cb60e01b815260086004820152602490fd5b15611e1657565b60405163100960cb60e01b815260076004820152602490fd5b15611e3657565b60405163100960cb60e01b8152600a6004820152602490fd5b15611e5657565b60405163100960cb60e01b815260096004820152602490fd5b15611e7657565b60405163100960cb60e01b815260116004820152602490fd5b15611e9657565b60405163100960cb60e01b815260126004820152602490fd5b15611eb657565b60405163100960cb60e01b815260146004820152602490fd5b15611ed657565b60405163100960cb60e01b8152600d6004820152602490fd5b15611ef657565b60405163100960cb60e01b8152600e6004820152602490fd5b15611f1657565b60405163100960cb60e01b815260106004820152602490fd5b15611f3657565b60405163100960cb60e01b8152600c6004820152602490fd5b15611f5657565b60405163100960cb60e01b8152600b6004820152602490fd5b15611f7657565b60405163100960cb60e01b815260196004820152602490fd5b15611f9657565b60405163100960cb60e01b8152601a6004820152602490fd5b15611fb657565b60405163100960cb60e01b8152601c6004820152602490fd5b15611fd657565b60405163100960cb60e01b815260156004820152602490fd5b15611ff657565b60405163100960cb60e01b815260166004820152602490fd5b1561201657565b60405163100960cb60e01b815260186004820152602490fd5b1561203657565b60405163100960cb60e01b815260276004820152602490fd5b1561205657565b60405163100960cb60e01b815260286004820152602490fd5b1561207657565b60405163100960cb60e01b815260296004820152602490fd5b1561209657565b60405163100960cb60e01b8152602a6004820152602490fd5b156120b657565b60405163100960cb60e01b8152602b6004820152602490fd5b156120d657565b60405163100960cb60e01b8152602c6004820152602490fd5b156120f657565b60405163100960cb60e01b8152602d6004820152602490fd5b1561211657565b60405163100960cb60e01b815260536004820152602490fd5b1561213657565b60405163100960cb60e01b815260546004820152602490fd5b1561215657565b60405163100960cb60e01b815260556004820152602490fd5b1561217657565b60405163100960cb60e01b815260566004820152602490fd5b1561219657565b60405163100960cb60e01b815260576004820152602490fd5b156121b657565b60405163100960cb60e01b815260586004820152602490fd5b156121d657565b60405163100960cb60e01b8152604d6004820152602490fd5b156121f657565b60405163100960cb60e01b8152604e6004820152602490fd5b1561221657565b60405163100960cb60e01b8152604f6004820152602490fd5b1561223657565b60405163100960cb60e01b815260506004820152602490fd5b1561225657565b60405163100960cb60e01b815260516004820152602490fd5b1561227657565b60405163100960cb60e01b815260526004820152602490fd5b1561229657565b60405163100960cb60e01b815260466004820152602490fd5b156122b657565b60405163100960cb60e01b815260476004820152602490fd5b156122d657565b60405163100960cb60e01b815260496004820152602490fd5b156122f657565b60405163100960cb60e01b8152604a6004820152602490fd5b1561231657565b60405163100960cb60e01b8152604b6004820152602490fd5b1561233657565b60405163100960cb60e01b8152604c6004820152602490fd5b1561235657565b60405163100960cb60e01b8152603f6004820152602490fd5b1561237657565b602460405163100960cb60e01b815260406004820152fd5b1561239557565b60405163100960cb60e01b815260426004820152602490fd5b156123b557565b60405163100960cb60e01b815260436004820152602490fd5b156123d557565b60405163100960cb60e01b815260446004820152602490fd5b156123f557565b60405163100960cb60e01b815260456004820152602490fd5b1561241557565b60405163100960cb60e01b8152603a6004820152602490fd5b1561243557565b60405163100960cb60e01b8152603b6004820152602490fd5b1561245557565b60405163100960cb60e01b8152603c6004820152602490fd5b1561247557565b60405163100960cb60e01b8152603d6004820152602490fd5b1561249557565b60405163100960cb60e01b8152603e6004820152602490fd5b156124b557565b60405163100960cb60e01b815260346004820152602490fd5b156124d557565b60405163100960cb60e01b815260356004820152602490fd5b156124f557565b60405163100960cb60e01b815260366004820152602490fd5b1561251557565b60405163100960cb60e01b815260376004820152602490fd5b1561253557565b60405163100960cb60e01b815260386004820152602490fd5b1561255557565b60405163100960cb60e01b815260396004820152602490fd5b1561257557565b60405163100960cb60e01b8152602e6004820152602490fd5b1561259557565b60405163100960cb60e01b8152602f6004820152602490fd5b156125b557565b60405163100960cb60e01b815260306004820152602490fd5b156125d557565b60405163100960cb60e01b815260316004820152602490fd5b156125f557565b60405163100960cb60e01b815260326004820152602490fd5b1561261557565b60405163100960cb60e01b815260336004820152602490fd5b6040519061010082016001600160401b038111838210176126aa575b604052816000815261265a61196d565b60208201526126676118b9565b6040820152612674611ac9565b60608201526126816117be565b608082015261268e6117be565b60a082015261269b6117be565b60c082015260e06118b46117be565b6126b26115dd565b61264a565b600711156126c157565b6101e16103c7565b604051906126d6826115f4565b816000815260206118b461262e565b604051906126f2826115f4565b816126fb6117be565b815260206118b461262e565b818110612712575050565b60008155600101612707565b50634e487b7160e01b600052601160045260246000fd5b6127406002546115a3565b806127485750565b601f811160011461275b57506000600255565b60026000526127a090601f0160051c600080516020615931833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612707565b6000602081208160025555565b60406128a2916000826128a7956127d56127d06127cc60045460ff1690565b1590565b61202f565b81513381528451602080830191909152850151151560408201527f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95090606090a1612822600284541461204f565b61285161283f612830611675565b60208082518301019101611d3a565b945180159081156128bd575b5061206f565b61285b341561208f565b8151600081527f2d05c3a1d6633e522b8352dee7bef45753a44b3a5c284c1fd2fd7ad89ea01ebd90602090a101520161289c6128978251610189565b6128c9565b51610189565b612a6e565b600080556128b56000600155565b6101e1612735565b9050600154143861284b565b60008061293692604051826020820191630852cd8d60e31b835281196024820152602481526060810181811060018060401b0382111761293d575b60405251926001600160a01b03165af161292661291f61294a565b80926129af565b5060208082518301019101612997565b156101a657565b6129456115dd565b612904565b3d15612992573d906001600160401b038211612985575b60405191612979601f8201601f191660200184611652565b82523d6000602084013e565b61298d6115dd565b612961565b606090565b908160209103126101a657516129ac81611998565b90565b156129b75790565b8051156129c657805190602001fd5b60405163100960cb60e01b815260036004820152602490fd5b156129e75790565b8051156129f657805190602001fd5b60405163100960cb60e01b8152600480820152602490fd5b15612a165790565b805115612a2557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612a465790565b805115612a5557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600080612ab09260405182602082019163083197ef60e41b835260048152612a95816115f4565b51926001600160a01b03165af1612aaa61294a565b906129df565b50565b612abb61177e565b90612ac461196d565b825260008060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152612afa6117be565b610100840152612b086118b9565b610120840152612b166117d7565b610140840152612b246118b9565b61016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152806102408401528061026084015280610280840152612b716117be565b6102a0840152806102c0840152806102e0840152612b8d6117be565b610300840152612b9b6117be565b610320840152612ba96117be565b610340840152612bb76117be565b610360840152612bc5611ac9565b610380840152806103a0840152806103c0840152806103e084015280610400840152612bef6117be565b6104208401528061044084015280610460840152612c0b6117be565b610480840152612c196117be565b6104a0840152612c276117be565b6104c0840152612c356117be565b6104e0840152612c436117be565b61050084015280610520840152806105408401528061056084015280610580840152806105a0840152806105c0840152806105e0840152612c826117be565b610600840152612c906117be565b610620840152612c9e6117be565b6106408401528061066084015280610680840152612cba6117be565b6106a0840152612cc86117be565b6106c0840152612cd66117be565b6106e0840152612ce46117be565b610700840152612cf26117be565b610720840152612d006117be565b6107408401528061076084015280610780840152806107a0840152806107c0840152806107e08401528061080084015280610820840152612d3f6117be565b610840840152612d4d6117be565b610860840152612d5b6117be565b610880840152806108a0840152806108c0840152612d776117be565b6108e0840152612d856117be565b610900840152612d936117be565b610920840152612da16117be565b610940840152612daf6117be565b610960840152612dbd6117be565b610980840152806109a0840152806109c0840152806109e084015280610a0084015280610a2084015280610a4084015280610a60840152612dfc6117be565b610a80840152612e0a6117be565b610aa0840152612e186117be565b610ac084015280610ae084015280610b00840152612e346117be565b610b20840152612e426117be565b610b40840152612e506117be565b610b60840152612e5e6117be565b610b80840152612e6c6117be565b610ba0840152612e7a6117be565b610bc084015280610be084015280610c0084015280610c2084015280610c4084015280610c6084015280610c8084015280610ca0840152612eb96117be565b610cc0840152612ec76117be565b610ce0840152612ed56117be565b610d0084015280610d20840152610d40830152612ef06117be565b610d60830152612efe6117be565b610d80830152612f0c6117be565b610da0830152612f1a6117be565b610dc0830152612f286117be565b610de0830152565b80516001600160a01b031682526020908101516101e192919091019061038f565b906020806101e1938051845201519101906101ab565b6102a060e060206101e19496956102e085019760018060a01b03168552805182860152015180516007811015613018575b6040850152612faf60208201516060860190612f30565b612fc260408201516101208601906101ba565b612fd56060820151610180860190612f51565b612fe860808201516101e08601906101ab565b612ffb60a08201516102208601906101ab565b61300e60c08201516102608601906101ab565b01519101906101ab565b6130206103c7565b612f98565b5160078110156130325790565b6129ac6103c7565b8115613044570490565b634e487b7160e01b600052601260045260246000fd5b506040513d6000823e3d90fd5b6130996101e19461308f60a09498979560e0850199600180881b0316855260208501906101ab565b60608301906101ab565b01906101ab565b6040519061016082016001600160401b0381118382101761312e575b6040526000610140838281526130d0611820565b60208201528260408201526130e36117be565b60608201528260808201526130f66117be565b60a08201526131036117be565b60c08201526131106117be565b60e082015261311d6117d7565b610100820152826101208201520152565b6131366115dd565b6130bc565b909594926101e19461316c6130999260c09561010086019a60018060a01b03168652602086015260408501906101ab565b60808301906101ab565b909594926101e194613099916131a260c09561010086019a60018060a01b0316865260208601906101ab565b606084015260808301906101ab565b60a0810192916101e1919061038f565b6131c9612ab3565b6131e06131db6127cc60045460ff1690565b6120af565b7ff2816af3c71736203c2303122d0a28d63fb70d5b66eea9b42d9ff743327b5ea960405180613210853383612f67565b0390a16132216004600054146120cf565b602061322e61128a611675565b9261324481518015908115615008575b506120ef565b0161324f8151613025565b613258816126b7565b6136ad579060206101e1949392510151815261328c613285613280606060e086015101611d2d565b610189565b331461256e565b60208151015160648151106000146136a55760206064910151105b1580156020830190815290613699576132dd6020835101516132d5604082015191602081015190519061504e565b146040840152565b815160200151604001516064116060830190815282516020015160400151151560808401908152916133729060408501511561369257825115155b156136885761332f61332a8551151590565b61258e565b61333934156125ae565b61335761335261334c6040890151610189565b33615232565b6125ce565b61336c61336761334c8851610189565b6125ee565b51151590565b1561367c5761339e602084510151613396604082015191602081015190519061504e565b1460a0850152565b60a083015115613674575115155b1561366957516133bd90151561260e565b4761010083015180821060001461365857505060008080806133eb815b8060c088015260c08801515161504e565b8060e08701526133fe6132808751611d2d565b82821561364f575bf115613642575b61343f61341a8351610189565b6134248351611d2d565b60c085015160200151916001600160a01b03909116906151b9565b60c082015151610100820190815152602060c0840151015160208251015251926060610120948584019081515260c08401516020825101527ff219a0a71d12ce74b58c5792971ce96f25d047c908c63aa5eba10ce79ec4fbe26134a98251604051918291826101d1565b0390a15191015260e061361860208351015151937f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca61354b61014096878701908151526020808851015101516020825101526040602088510151015160408251015261352961351f606060208a51015101611d2d565b6060835101611989565b61353e6106b1608060208a5101510151151590565b51604051918291826131b1565b0390a16135566130a0565b9561356a6135648351610189565b88611989565b6020820151602088015261358d6135846040840151610189565b60408901611989565b60608201805160608901526135aa60806020885101510151151590565b1561363b57602060808401510151155b156136315760a083015180516136265760206135dd910151155b151560808a0152565b608083015160a089015260a083015160c08901525184880152602085510151610100880152439087015261010060c08501519101519061504e565b9101519003908201526155fa565b506135dd60006135d4565b6135dd60006135d4565b60006135ba565b61364a61305a565b61340d565b506108fc613406565b6000806133eb8194938294036133da565b506133bd600061260e565b5060006133ac565b600060a084015261339e565b61332f600061258e565b6000613318565b600060408301526132dd565b5060006132a7565b906136b88251613025565b916136c2836126b7565b6001928303613aab5791836137cf94927feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb60406101e1989651015195610160830196875260e0840194613719608087510151151590565b15613aa2575061372960006124ae565b60808401805160200151156101a085018181529491929161393e9115613a3f5761376461375f8b515160208151910151906150e5565b615142565b6101808201525b61378160208b51015161018083015110156124ce565b61378f8a51515134146124ee565b604087019a8b966137ab6137a661334c8a51610189565b61250e565b61336c6137ca8d60206137be8d51610189565b9151510151903361528d565b61252e565b156139c6576137ea61375f8b515160208151910151906150e5565b6102008201525b896020815101519361380b6102008401958651101561254e565b61036061384161382660a0855151519c019b8c51519061504e565b9a61026086019b8c526020808651510151915101519061504e565b9661028085019788528a519a6102a086019b8c5152885160208d51015261388560206138718451518b519061507a565b936102c0890194855251015189519061504e565b936102e087019485526138ba6138b084519d6103008a019e8f90815152602089519151015251610189565b8a519033906151b9565b88516040519081527f9ca80bfd1c57066754a83b2eae9fdeeae80f85dfaa2bf31a644e3693d3f55bd190602090a1608089519101526020855151519561032088019687515251510151602086510152519761034086019889515251602089510152519301928351525160208351015251925193519051906040519485943386613176565b0390a161397c61397361394f6130a0565b9761396361395d8851610189565b8a611989565b602087015160208a015251610189565b60408801611989565b60608401516060870152600060808701525160a08601525160c085015260c082015160e08501525190610100918285015243610120850152015190515151016101408201526155fa565b89613a17886020613a0d816139f560a06139e98c848a51515191510151906150e5565b9501948551519061303a565b95610220880196875251510151828a510151906150e5565b915101519061303a565b90816102408401525190808210600014613a3857505b6102008201526137f1565b9050613a2d565b89613a7a886020613a0d81613a6260a06139e98c848a51515191510151906150e5565b956101c0880196875251510151828a510151906150e5565b90816101e08401525190808210600014613a9b57505b61018082015261376b565b9050613a90565b613729906124ae565b90916002613ab98351613025565b613ac2816126b7565b03613e0657506101e193613b1c613b0d60607f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef85594510151806103808701525160a087015151906150e5565b6020608087015101519061303a565b6103a0840152613b3e613b0d61038085015151602060a08801510151906150e5565b6103c0840152613b5f60206103808501510151516103a0850151101561240e565b613b7c602080610380860151015101516103c0850151101561242e565b613b86341561244e565b613bac613ba7613b996040870151610189565b61038086015151903361528d565b61246e565b613bc1613bbc61334c8651610189565b61248e565b613bd7608085015151610380850151519061504e565b6103e0840152613bf6602060808601510151610380850151519061507a565b6104008401526103e08301516104208401515261040083015160206104208501510152613c2e60a0850151516103a08501519061507a565b610440840152613c4c602060a086015101516103c08501519061507a565b610460840152610440830151610480840151526104608301516020610480850151015260008080806103a0870151818115613dfd575b3390f115613df0575b613ca6613c988551610189565b6103c08501519033906151b9565b6103a0830151906104a08401918251526103c08401516020835101527fbe81dad5c40a652e2960514347132ecd036c25f5077fbbac9a0fe34e112c450a613cf483516040519182918261078d565b0390a160a08251910152610440830151906104c0840191825152610460840151602083510152613d536103e08501516104e08601908151526104008601516020825101526103808601515192519351905190604051948594338661313b565b0390a16103a0613d616130a0565b92613d75613d6f8251610189565b85611989565b60208101516020850152613d98613d8f6040830151610189565b60408601611989565b606081015160608501526000608085015261042083015160a085015261048083015160c085015260c081015160e085015260e081015190610100918286015243610120860152015191015190036101408201526155fa565b613df861305a565b613c8b565b506108fc613c82565b906003613e138251613025565b613e1c816126b7565b036142d257936000805160206159518339815191529160806101e196510151610500850152613e52608060e08701510151151590565b156142c95750613e62600061234f565b613e7e602060a08601510151602061050086015101519061507a565b61052084015260a084015151610540840152613ee9613ed46108bd613ec6613eba60206105008901510151610bfd604060e08c01510151615014565b610540880151906150e5565b6108b7610520880151615087565b8061056086015261050085015151101561236f565b613eff610500840151516105608501519061507a565b610580840152613f1a60a0850151516105608501519061504e565b6105a08401908152613f85613f7e613f5e613f4e613f46610560890151602060a08c01510151906150e5565b85519061303a565b602061050089015101519061507a565b610bfd613f6f60e08a0151516150b6565b604060e08b0151015190615132565b6064900490565b906105c08501918252613fae613fa661056087015160e089015151906150e5565b612710900490565b91613ffa6105e08701928484526106008801948551526000602086510152613ff26106208901946000865152845160208751015251602060a08c01510151906150e5565b90519061303a565b905110156142c15750515b61064084015261404061403361402760a087015151610500870151519061504e565b6105808601519061507a565b610640850151519061507a565b610660840152614096614077614065610520860151602061064088015101519061507a565b806106808701526106608601516150e5565b61408f610540860151602060a08901510151906150e5565b111561238e565b6140a76105008401515134146123ae565b6140bf6140ba61334c6040870151610189565b6123ce565b6140d46140cf61334c8651610189565b6123ee565b6106608301516106a08401515261068083015160206106a0850151015261410760c085015151610640850151519061504e565b6106c08401515261412a602060c08601510151602061064086015101519061504e565b60206106c0850151015260008080806105808701518181156142b8575b3390f1156142ab575b61416f61415d8551610189565b602061050086015101519033906151b9565b610580830151906106e0840191825152602061050085015101516020835101527fc881f42efc0077dcff290200173f8fd209e6189cae0cdcd54ad5ad3a0e5934806141c183516040519182918261078d565b0390a160c08251910152610500830151519061070084019182515260006020835101526142156106608501519261072086019384515261068086015160208551015251915192516040519384933385613067565b0390a16105806142236130a0565b92614231613d6f8251610189565b6020810151602085015261424b613d8f6040830151610189565b6060810151606085015260006080850152608081015160a08501526106a083015160c08501526106c083015160e085015260e0810151906101009182860152436101208601520151610500830151510191015190036101408201526155fa565b6142b361305a565b614150565b506108fc614147565b905051614005565b613e629061234f565b60046142de8251613025565b6142e7816126b7565b0361478c575160a0015161074083015260e083015160800151156147835750614310600061228f565b60a08201928351516107408301516020015161432b9161507a565b9061076083019182528451602001519461078084019586526107408401516020015160e08601516040015161435f90615014565b614368916150e5565b8651614373916150e5565b835161437e90615087565b61438791615132565b61439090615039565b906107a08501918083526107408601515110156143ac906122af565b6107408501515182516143be9161507a565b6107c086015280516020015182516143d59161504e565b6107e0860190815282518251516143eb916150e5565b81516143f69161303a565b610740870151602001516144099161507a565b60e088015151614418906150b6565b60e08901516040015161442a91615132565b614433916150e5565b606490049261080087019384525160e088015151614450916150e5565b612710900492610820870191848352610840880194855152845160200160009052610860880192835160009052825184516020015251845151614492916150e5565b905161449d9161303a565b905110600014976144de60008051602061595183398151915296602061454096614539956101e19d61477a575051915b826108808c0152519101519061507a565b6108a088015261452e61451c61450f6145036020875101516107408c0151519061504e565b6107c08b01519061507a565b6108808a0151519061507a565b806108c08a01526108a08901516150e5565b9251519051906150e5565b11156122cf565b61454a34156122ef565b61456261455d61334c6040870151610189565b61230f565b6145856145806145728651610189565b61074086015151903361528d565b61232f565b6108a08301516108e0840151526108c083015160206108e085015101526145bb60c085015151602061088086015101519061504e565b610900840151526145db602060c08601510151610880850151519061504e565b60206109008501510152600080808060206107408801510151818115614771575b3390f115614764575b6146206146128551610189565b6107c08501519033906151b9565b60206107408401510151906109208401918251526107c08401516020835101527ff839591df486e3e78ec4c65c2559d961c03ccb9685836fb4e6194b275d411abd61467283516040519182918261078d565b0390a160e082519101526109408301906000825152610740840151516020835101526146c56108a0850151926109608601938451526108c086015160208551015251915192516040519384933385613067565b0390a160206107406146d56130a0565b936146e96146e38251610189565b86611989565b828101518386015261470a6147016040830151610189565b60408701611989565b6060810151606086015260006080860152608081015160a08601526108e084015160c086015261090084015160e086015260e0810151906101009182870152436101208701520151920151015190036101408201526155fa565b61476c61305a565b614605565b506108fc6145fc565b905051916144cd565b6143109061228f565b600561479b8296939651613025565b6147a4816126b7565b03614bb7575160c0015161098083015260e0830151608001516101e1949015614bae57506147d260006121cf565b6149aa836149a360a0820161496e61495e60208084510151936109a08a019485526148488a6108b76148356109e06148278651519c6109c086019d8e52610bfd604060e0610980890151519301510151615062565b9301928084528951906150e5565b916148408b51615087565b90519061504e565b610a008b0152614949610ac08c8c614869855151610980830151519061504e565b91610a2082019283526148ea613fa66148ce613f7e6148ae6148a261489a8c8e6109808b01515191510151906150e5565b89519061303a565b610a008801519061507a565b610bfd6148bf60e0880151516150b6565b604060e0890151015190615132565b92610a40850193845260e06109808601515191015151906150e5565b90610a60830190828252610a8084019283515260008984510152614930614928610aa0860193600085515283518c86510152518b8b510151906150e5565b86519061303a565b90511015614ba35750519283915b01525190519061507a565b610ae08b0152510151610a008901519061507a565b6020610ac089015101519061507a565b610b0087015261498e60206109808801510151610a0088015110156121ef565b610c03610ae0870151610b00880151906150e5565b111561220f565b6149bb61098083015151341461222f565b6149d36149ce61334c6040860151610189565b61224f565b6149e86149e361334c8551610189565b61226f565b610ae0820151610b2083015152610b008201516020610b208401510152614a1b60c084015151610ac0840151519061504e565b610b4083015152614a3e602060c085015101516020610ac085015101519061504e565b6020610b408401510152614a63614a558451610189565b610a008401519033906151b9565b610b608201805160009052610a00830151815160200152516040517f113ae4880db104f2d8c1b08f7a20d8ba11ee67425a5dcb41d45bf1fe4fb122a0918190614aac908261078d565b0390a1610100610b6083015191015260008051602061595183398151915261098082015151610b808301908151526000602082510152610ae083015190610ba0840191825152610b0084015160208351015251614b17610b6085015192516040519384933385613067565b0390a1610980610100614b286130a0565b93614b366146e38251610189565b60208101516020860152614b506147016040830151610189565b6060810151606086015260006080860152608081015160a0860152610b2084015160c0860152610b4084015160e086015260e08101518286015243610120860152015191015151016101408201526155fa565b90505192839161493e565b6147d2906121cf565b906006614bc48351613025565b614bcd816126b7565b14614bda575b5050505050565b614fd79460e0610c4093510151610bc0850152614bfe608060e08701510151151590565b15614fff5750614c0e600061210f565b60a084015151610be0840152602060a08501510151610c00840152614c71614c47610bc085015151610bfd604060e08901510151615062565b6108b7614c62610c20870192808452610be0880151906150e5565b91614840610c00880151615087565b82840152614d92614c91602060a08701510151610bc0860151519061504e565b610c608501908152614ce5613f7e614cc5614cbb613f46610bc08a01515160a08c015151906150e5565b878901519061507a565b610bfd614cd660e08b0151516150b6565b604060e08c0151015190615132565b610c808601908152614d06613fa6610bc08801515160e08a015151906150e5565b90610ca0870190828252610cc08801928351526000602084510152614d47613f46610ce08a0193600085515283516020865101525160a08c015151906150e5565b90511015614ff75750515b610d00860152614d7e614d6e60a088015151868801519061507a565b6020610d0088015101519061507a565b610d2086015251610d00850151519061507a565b610d40840152614db06020610bc0850151015183850151101561212f565b614de4614dc8610d20850151610d40860151906150e5565b614ddd610be0860151610c00870151906150e5565b111561214f565b614dee341561216f565b614e06614e0161334c6040870151610189565b61218f565b614e29614e24614e168651610189565b610bc086015151903361528d565b6121af565b610d20830151610d6084015152610d408301516020610d608501510152614e5f60c0850151516020610d0086015101519061504e565b610d8084015152614e7f602060c08601510151610d00850151519061504e565b6020610d808501510152600080808085870151818115614fee575b3390f115614fe1575b60008051602061595183398151915282840151610da085019081515260006020825101527fc45748ddd456b326da77f2d99edcc8c4a4e507069f616cb460137f68e06b2768614ef982516040519182918261078d565b0390a1805161012080940152610dc08501906000825152610bc086015151602083510152614f4e610d2087015192610de0880193845152610d4088015160208551015251915192516040519384933385613067565b0390a1614f596130a0565b93614f676146e38251610189565b60208101516020860152614f816147016040830151610189565b6060810151606086015260006080860152608081015160a0860152610d6084015160c0860152610d8084015160e086015260e08101519161010092838701524390860152015191015190036101408201526155fa565b3880808080614bd3565b614fe961305a565b614ea3565b506108fc614e9a565b905051614d52565b614c0e9061210f565b9050600154143861323e565b906127109182019182811161502c575b82106101a657565b61503461271e565b615024565b90600182019182811161502c5782106101a657565b919082019182811161502c5782106101a657565b6127109081039081116150725790565b6129ac61271e565b9081039081116150725790565b906127109180600019048311811515166150a9575b828102928304036101a657565b6150b161271e565b61509c565b908160001904606411821515166150d8575b606482029160648304036101a657565b6150e061271e565b6150c8565b6000929180159182156150fc575b5050156101a657565b915092508060001904831181151516615125575b61511d838202938461303a565b1438806150f3565b61512d61271e565b615110565b9080156101a6576129ac9161303a565b90600060038311156151ac575081600181811c81810180911161519f575b91905b84831061516f57505050565b919350908361517e818461303a565b908101809111615192575b811c9190615163565b61519a61271e565b615189565b6151a761271e565b615160565b916151b357565b60019150565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261293693600093849392849190608081016001600160401b03811182821017615225575b6040525193165af161292661521e61294a565b8092612a0e565b61522d6115dd565b61520b565b60006129ac928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261527681611637565b5193165af161292661528661294a565b8092612a3e565b6000916129ac9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261527681611637565b6040519061012082016001600160401b03811183821017615350575b604052600061010083828152615300611820565b60208201528260408201526153136117be565b60608201526153206117be565b608082015261532d6117be565b60a082015261533a6117be565b60c08201526153476117d7565b60e08201520152565b6153586115dd565b6152ec565b81516001600160a01b0316815261026081019291610240906101009061538b602082015160208601906103de565b60408101516001600160a01b031660808501526153b0606082015160a08601906101ab565b6153c2608082015160e08601906101ab565b6153d560a08201516101208601906101ab565b6153e860c08201516101608601906101ab565b6101ca60e08201516101a086019061038f565b90601f8211615408575050565b6101e19160026000526020600020906020601f840160051c83019310615436575b601f0160051c0190612707565b9091508190615429565b80519091906001600160401b038111615516575b615468816154636002546115a3565b6153fb565b602080601f83116001146154a45750819293600092615499575b50508160011b916000199060031b1c191617600255565b015190503880615482565b6002600052601f19831694909190600080516020615931833981519152926000905b8782106154fe5750508360019596106154e5575b505050811b01600255565b015160001960f88460031b161c191690553880806154da565b806001859682949686015181550195019301906154c6565b61551e6115dd565b615454565b604051906155308261161c565b816000815261553d611820565b6020820152600060408201526155516117be565b606082015261555e6117be565b608082015261556b6117be565b60a082015260c06118b46117d7565b81516001600160a01b039081168252602080840151610200840195946101e194936101609360c0936155ae918701906103de565b60408201511660808501526155cb606082015160a08601906101ab565b6155dd608082015160e08601906101ab565b6155f060a08201516101208601906101ab565b015191019061038f565b6080810151156156aa576156976156a56101e192610100615619615523565b9161562d6156278251610189565b84611989565b602081015160208401526156506156476040830151610189565b60408501611989565b60a0810151606084015260c0810151608084015260e081015160a0840152015160c082015261567f6002600055565b61568843600155565b6040519283916020830161557a565b03601f198101835282611652565b615440565b6156976156a56101e1926156bc6152d0565b906156d06156ca8251610189565b83611989565b602081015160208301526156f36156ea6040830151610189565b60408401611989565b6060810151606083015260a0810151608083015260c081015160a083015260e081015160c0830152610140610100918281015160e085015201519082015261573b6004600055565b61574443600155565b6040519283916020830161535d565b6024359060078210156101a657565b9060c06043198301126101a65760405161577b816115f4565b60a0819360443561578b81610195565b835260631901126101a6576020604051916157a583611637565b60643583526084358284015260a435604084015260c4356157c581610195565b606084015260e4356157d681611998565b60808401520152565b610103190190606082126101a6576040516157f9816115f4565b60408193126101a65760405161580e816115f4565b6101043581526101243560208201528152602061014435910152565b906060610163198301126101a657604051615844816115f4565b604081936101643583526101831901126101a657602060405191615867836115f4565b6101843583526101a435828401520152565b61588161179e565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401526158b36117be565b60e08401526158c06117be565b6101008401526158ce6117be565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015261020083015261590c6117be565b61022083015261591a6117be565b6102408301526159286117be565b61026083015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a164736f6c6343000810000a608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000810000a`,
  BytecodeLen: 32525,
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
