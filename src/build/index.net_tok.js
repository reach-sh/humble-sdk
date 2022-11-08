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
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, v10872 /* simTokensRecv */, undefined /* simReturnVal */];})();
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
                "internalType": "bool",
                "name": "v10854",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v10855",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "v10856",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "v10857",
                "type": "bytes8"
              },
              {
                "internalType": "address payable",
                "name": "v10858",
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
                "internalType": "bool",
                "name": "v10854",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v10855",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "v10856",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "v10857",
                "type": "bytes8"
              },
              {
                "internalType": "address payable",
                "name": "v10858",
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
                "name": "v24906",
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
                    "name": "_Protocol_harvest0_2829",
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
                    "name": "_Provider_deposit0_2829",
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
                    "name": "_Provider_withdraw0_2829",
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
                    "name": "_Trader_exactSwapAForB0_2829",
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
                    "name": "_Trader_exactSwapBForA0_2829",
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
                    "name": "_Trader_swapAForB0_2829",
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
                    "name": "_Trader_swapBForA0_2829",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v12845",
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
    "name": "_reach_oe_v10874",
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
    "name": "_reach_oe_v10900",
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
    "name": "_reach_oe_v13642",
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
    "name": "_reach_oe_v15354",
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
    "name": "_reach_oe_v17196",
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
    "name": "_reach_oe_v19035",
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
    "name": "_reach_oe_v20875",
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
    "name": "_reach_oe_v22705",
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
    "name": "_reach_oe_v24531",
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
    "name": "_reach_oe_v24909",
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
                "name": "v24906",
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
                    "name": "_Protocol_harvest0_2829",
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
                    "name": "_Provider_deposit0_2829",
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
                    "name": "_Provider_withdraw0_2829",
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
                    "name": "_Trader_exactSwapAForB0_2829",
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
                    "name": "_Trader_exactSwapBForA0_2829",
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
                    "name": "_Trader_swapAForB0_2829",
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
                    "name": "_Trader_swapBForA0_2829",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v12845",
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
        "name": "v32776",
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
        "name": "v32779",
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
        "name": "v32782",
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
        "name": "v32785",
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
  Bytecode: `0x60806040526040516200857138038062008571833981016040819052620000269162000e92565b60008055436003556200003862000920565b604080513381528351602080830191909152808501518051151583850152908101516001600160a01b0390811660608085019190915282850151608080860191909152908301516001600160c01b03191660a0850152909101511660c082015290517fd84d5a914b5af5ec925b3f8343bc3e86fd3be9eaf23ba6f2873b700861dff39c9181900360e00190a1620000d26001601862000635565b620000e03415601962000635565b6020818101805160009081905290518201528281015101516200010c9062000109903062000660565b90565b6101a0820152476101808201526020808201518382015190910151604051600092633b02a71760e01b9262000148923092919060240162000f86565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620001a4919062000fde565b60006040518083038185875af1925050503d8060008114620001e3576040519150601f19603f3d011682016040523d82523d6000602084013e620001e8565b606091505b509092509050620001fc8282601b6200073a565b50620002266200021b866020015160200151306200066060201b60201c565b6101a0860151900390565b6101c085018190526200023c9015601a62000635565b62000253478561018001516200073560201b60201c565b604085015152805162000270908201602090810190830162000ffc565b604080860180516020019290925290516060860181905290517fdae3d0d31ef3b6191007d71e7e1d5e26a6d5fd51b61c4f42fbfa695250d487869450620002bb93509091506200107e565b60405180910390a160608101516020015151606411620002dd576000620002ee565b606481606001516020015160200151105b156200032a57606081015160209081015190810151905162000311919062000780565b6060820151602001516040015114608082015262000332565b600060808201525b6200037f81608001516200034857600062000359565b606482606001516020015160400151105b6200036657600062000377565b600082606001516020015160400151115b601c62000635565b606081015151620003939015601d62000635565b60a0810180516000199052516000602091820181905260c0830180518290528051830182905251604090810182905260e0840191909152838201518101518151928301520160408051601f1981840301815290829052602084810151606001516001600160c01b031916908301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e08601516020840152910160405160208183030381529060405260001960126040516200047b9062000a27565b6200048c9695949392919062001102565b604051809103906000f080158015620004a9573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527fe2fc5756c8586ff8c7e834304dd61f765496c90319fd0e721cba28ce9976b6759060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200053d929081169116146200053257600162000535565b60005b601e62000635565b6200057b8260200151602001516001600160a01b03168261012001516001600160a01b0316146200057057600162000573565b60005b601f62000635565b610160810180516000908190529051602001526200059862000a35565b60208084015181015182516001600160a01b0391821690528382015183518301526101208401518351911660409182015261016084018051845160609081019190915284840180516000905260a08088015182518701528351825190950194909452915182518201528501805190930151815160800152805143920191909152905151905160c001526200062c81620007d7565b505050620014bf565b816200065c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b179052915160009283928392918716918391620006bd9162000fde565b60006040518083038185875af1925050503d8060008114620006fc576040519150601f19603f3d011682016040523d82523d6000602084013e62000701565b606091505b50909250905062000715828260066200073a565b50808060200190518101906200072c91906200116d565b95945050505050565b900390565b606083156200074b57508162000779565b8251156200075c5782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000653565b9392505050565b6000826200078f838262001187565b9150811015620007d15760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000653565b92915050565b602081015151156200088857620007ed62000a5e565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c084015260026000554360015590516200086491839101620011a9565b60405160208183030381529060405260029081620008839190620012ff565b505050565b6200089262000b49565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e086015251015161010084015260046000554360015590516200086491839101620013cb565b604051806101e001604052806000151581526020016200095b6040805160608101909152806000815260006020820181905260409091015290565b81526020016200096a62000c62565b81526020016200097962000c62565b8152602001600015158152602001620009a5604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152600060208201819052604082018190526060820152608001620009e962000cb2565b815260200162000a0c604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081525090565b6110cf80620074a283390190565b604051806040016040528062000a4a62000cd0565b815260200162000a5962000d44565b905290565b6040518060e0016040528060006001600160a01b0316815260200162000a9f6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200162000ad2604051806040016040528060008152602001600081525090565b815260200162000af5604051806040016040528060008152602001600081525090565b815260200162000b18604051806040016040528060008152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b60405180610120016040528060006001600160a01b0316815260200162000b8b6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200162000bbe604051806040016040528060008152602001600081525090565b815260200162000be1604051806040016040528060008152602001600081525090565b815260200162000c04604051806040016040528060008152602001600081525090565b815260200162000c27604051806040016040528060008152602001600081525090565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001600081525090565b60405180604001604052806000815260200162000a596040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b60405180602001604052806001906020820280368337509192915050565b604051806080016040528060006001600160a01b0316815260200162000d116040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200162000a59604051806040016040528060008152602001600081525090565b6040518060e0016040528060001515815260200162000d76604051806040016040528060008152602001600081525090565b815260200162000d99604051806040016040528060008152602001600081525090565b815260200162000dbc604051806040016040528060008152602001600081525090565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260200160008152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562000e395762000e3962000dfe565b60405290565b60405160a081016001600160401b038111828210171562000e395762000e3962000dfe565b8051801515811462000e7557600080fd5b919050565b80516001600160a01b038116811462000e7557600080fd5b600081830360c081121562000ea657600080fd5b62000eb062000e14565b8351815260a0601f198301121562000ec757600080fd5b62000ed162000e3f565b915062000ee16020850162000e64565b825262000ef16040850162000e7a565b60208301526060840151604083015260808401516001600160c01b03198116811462000f1c57600080fd5b606083015262000f2f60a0850162000e7a565b608083015260208101919091529392505050565b80516002811062000f6457634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062000fa7602084018662000f43565b808416608084015250949350505050565b60005b8381101562000fd557818101518382015260200162000fbb565b50506000910152565b6000825162000ff281846020870162000fb8565b9190910192915050565b600060a082840312156200100f57600080fd5b60405160a081016001600160401b038111828210171562001034576200103462000dfe565b80604052508251815260208301516020820152604083015160408201526200105f6060840162000e7a565b6060820152620010726080840162000e64565b60808201529392505050565b8151815260208083015160c0830191620010cd908401828051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b5092915050565b60008151808452620010ee81602086016020860162000fb8565b601f01601f19169290920160200192915050565b60c0815260006200111760c0830189620010d4565b82810360208401526200112b8189620010d4565b90508281036040840152620011418188620010d4565b90508281036060840152620011578187620010d4565b6080840195909552505060a00152949350505050565b6000602082840312156200118057600080fd5b5051919050565b80820180821115620007d157634e487b7160e01b600052601160045260246000fd5b81516001600160a01b03908116825260208084015161020084019291620011d39085018262000f43565b5060408401511660808301526060830151805160a0840152602081015160c0840152506080830151805160e084015260208101516101008401525060a0830151805161012084015260208101516101408401525060c08301518051610160840152602081015161018084015260408101516101a084015260608101516001600160a01b03166101c0840152608081015115156101e0840152620010cd565b600181811c908216806200128657607f821691505b602082108103620012a757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200088357600081815260208120601f850160051c81016020861015620012d65750805b601f850160051c820191505b81811015620012f757828155600101620012e2565b505050505050565b81516001600160401b038111156200131b576200131b62000dfe565b62001333816200132c845462001271565b84620012ad565b602080601f8311600181146200136b5760008415620013525750858301515b600019600386901b1c1916600185901b178555620012f7565b600085815260208120601f198616915b828110156200139c578886015182559484019460019091019084016200137b565b5085821015620013bb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81516001600160a01b0316815261026081016020830151620013f1602084018262000f43565b5060408301516001600160a01b0381166080840152506060830151805160a0840152602081015160c0840152506080830151805160e084015260208101516101008401525060a0830151805161012084015260208101516101408401525060c0830151805161016084015260208101516101808401525060e083015180516101a084015260208101516101c084015260408101516101e084015260608101516001600160a01b0316610200840152608081015115156102208401525061010083015161024083015292915050565b615fd380620014cf6000396000f3fe6080604052600436106101015760003560e01c8063832307571161008f578063b8aaa65411610061578063b8aaa6541461027d578063be20a4741461029d578063c8867ae9146102b0578063dc8d714f146102c3578063f8a55fb0146102d657005b8063832307571461020d578063842463da1461022257806388f8ea631461023a578063ab53f2c61461025a57005b80634012e02e116100d35780634012e02e146101785780635e75b0211461019a5780636167d492146101ba5780637731406e146101da578063800a119b146101fa57005b80630e36a72c1461010a5780631e93b0f1146101335780633402da13146101525780633e59bac41461016557005b3661010857005b005b61011d6101183660046152d8565b6102e9565b60405161012a9190615330565b60405180910390f35b34801561013f57600080fd5b506003545b60405190815260200161012a565b61014461016036600461536e565b610304565b610108610173366004615399565b610310565b34801561018457600080fd5b5061018d610334565b60405161012a919061542d565b6101ad6101a83660046154c0565b61034d565b60405161012a91906154e2565b3480156101c657600080fd5b506101446101d53660046154f9565b61036b565b3480156101e657600080fd5b506101446101f53660046154f9565b610396565b6101ad6102083660046154c0565b6103ba565b34801561021957600080fd5b50600154610144565b61022a6103d8565b604051901515815260200161012a565b34801561024657600080fd5b506101446102553660046154f9565b6103e7565b34801561026657600080fd5b5061026f61040b565b60405161012a929190615536565b34801561028957600080fd5b506101446102983660046154f9565b6104a8565b6101ad6102ab366004615570565b6104cc565b6101ad6102be3660046154c0565b6104ea565b6101ad6102d13660046154c0565b610508565b6101086102e4366004615594565b610526565b6102f1614313565b6102fb8383610546565b90505b92915050565b60006102fb838361059b565b61031861433e565b61033061032a368490038401846155a7565b826105e4565b5050565b61033c614411565b60006103478161077b565b91505090565b60408051808201909152600080825260208201526102fb8383610ade565b60006103836040518060200160405280600081525090565b82815261038f81610b39565b9392505050565b60006103ae6040518060200160405280600081525090565b82815261038f81610d4a565b60408051808201909152600080825260208201526102fb83836112ab565b60006103e2611306565b905090565b60006103ff6040518060200160405280600081525090565b82815261038f81611332565b6000606060005460028080546104209061561f565b80601f016020809104026020016040519081016040528092919081815260200182805461044c9061561f565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b50505050509050915091509091565b60006104c06040518060200160405280600081525090565b82815261038f81611528565b60408051808201909152600080825260208201526102fb83836119e5565b60408051808201909152600080825260208201526102fb8383611a40565b60408051808201909152600080825260208201526102fb8383611a9b565b61052e61433e565b61033061054036849003840184615708565b82611af6565b61054e614313565b6105566144cb565b6020818101805151600090528051518201516001600160a01b038716905251518101510183905261058561433e565b61058f8282611af6565b60200151949350505050565b60006105a56144cb565b6020818101805151600190528051516040908101518790529051510151018390526105ce61433e565b6105d88282611af6565b60400151949350505050565b6105f46002600054146021613c48565b815161060f90158061060857508251600154145b6022613c48565b6000808055600280546106219061561f565b80601f016020809104026020016040519081016040528092919081815260200182805461064d9061561f565b801561069a5780601f1061066f5761010080835404028352916020019161069a565b820191906000526020600020905b81548152906001019060200180831161067d57829003601f168201915b50505050508060200190518101906106b291906158fc565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a161070a34156020613c48565b604051600081527f2d05c3a1d6633e522b8352dee7bef45753a44b3a5c284c1fd2fd7ad89ea01ebd9060200160405180910390a160008252604081015161075390600019613c6e565b6107608160400151613c81565b60008080556001819055610776906002906144e5565b505050565b610783614411565b6002600054036109265760006002805461079c9061561f565b80601f01602080910402602001604051908101604052809291908181526020018280546107c89061561f565b80156108155780601f106107ea57610100808354040283529160200191610815565b820191906000526020600020905b8154815290600101906020018083116107f857829003601f168201915b505050505080602001905181019061082d91906158fc565b905061083761451f565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151815184015260c080870180515160408089018051929092528251870151825188015282518101518251820152825188015182516001600160a01b03918216908a0152925186015182519015159087015260a0808b018051518b8b01805191909152905189015181518a0152828c0151888c0180519187169091529a518b518a015295518a519092019190915290518851909701969096529151865190930192909252855185519116930192909252909201518151909201919091525192915050565b600460005403610acd5760006002805461093f9061561f565b80601f016020809104026020016040519081016040528092919081815260200182805461096b9061561f565b80156109b85780601f1061098d576101008083540402835291602001916109b8565b820191906000526020600020905b81548152906001019060200180831161099b57829003601f168201915b50505050508060200190518101906109d091906159b8565b90506109da61451f565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152838c01518b8b0180519188169091529a518b518a015295518a5190930192909252915188519092019190915291518651909501949094528551855194169390910192909252909201518151909201919091525192915050565b610ad960006007613c48565b919050565b6040805180820190915260008082526020820152610afa6144cb565b602081810180515160039052805151608090810151879052905151015101839052610b2361433e565b610b2d8282611af6565b60800151949350505050565b6000600260005403610c4957600060028054610b549061561f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b809061561f565b8015610bcd5780601f10610ba257610100808354040283529160200191610bcd565b820191906000526020600020905b815481529060010190602001808311610bb057829003601f168201915b5050505050806020019051810190610be591906158fc565b905061038f610c42610c1c610c118660000151610c0c6127108760c0015160400151613c96565b613ce3565b608085015151613ce3565b610c3d610c358560800151602001518860000151613d42565b612710613ce3565b613d91565b6001613c96565b600460005403610d3e57600060028054610c629061561f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8e9061561f565b8015610cdb5780601f10610cb057610100808354040283529160200191610cdb565b820191906000526020600020905b815481529060010190602001808311610cbe57829003601f168201915b5050505050806020019051810190610cf391906159b8565b905061038f610c42610d25610d1a8660000151610c0c6127108760e0015160400151613c96565b60a085015151613ce3565b610c3d610c358560a00151602001518860000151613d42565b610ad960006008613c48565b600060026000540361101a57600060028054610d659061561f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d919061561f565b8015610dde5780601f10610db357610100808354040283529160200191610dde565b820191906000526020600020905b815481529060010190602001808311610dc157829003601f168201915b5050505050806020019051810190610df691906158fc565b9050610e0061459b565b610e218260c0015160800151610e17576001610e1a565b60005b600b613c48565b608082018051602090810151835290515190820152835160c083015160400151610e539190610c0c9061271090613d42565b604082018190528151610e8691610e6991613ce3565b610c3d610e7c8460200151612710613ce3565b8460400151613c96565b60608201526080820151518451610e9d9190613c96565b608080830182905285519084015160200151606492610efc92610ed892610ec49190613ce3565b610ece9190615a88565b8460600151613d42565b610c0c610eee8660c00151600001516064613ce3565b8660c0015160400151613d91565b610f069190615a88565b60a0820152835160c08301515161271091610f2091613ce3565b610f2a9190615a88565b60c0820181815260e08301805192909252905160006020918201819052610100840180519190915260a08401805191518301919091525160808085015193519086015190920151909291610f7d91613ce3565b610f879190615a88565b11610f9757806101000151610f9d565b8060e001515b610120820152610faf6001600c613c48565b61100f610fc482602001518360000151613ce3565b611006610fde846080015185610120015160000151613d42565b610c0c610ff78760800151602001518760600151613d42565b86610120015160200151613d42565b1015600d613c48565b606001519392505050565b60046000540361129f576000600280546110339061561f565b80601f016020809104026020016040519081016040528092919081815260200182805461105f9061561f565b80156110ac5780601f10611081576101008083540402835291602001916110ac565b820191906000526020600020905b81548152906001019060200180831161108f57829003601f168201915b50505050508060200190518101906110c491906159b8565b90506110ce61459b565b6110ef8260e00151608001516110e55760016110e8565b60005b600e613c48565b60a082018051602090810151835290515190820152835160e0830151604001516111219190610c0c9061271090613d42565b60408201819052815161113791610e6991613ce3565b606082015260a082015151845161114e9190613c96565b60808201819052845160a0840151602001516064926111999261117592610ec49190613ce3565b610c0c61118b8660e00151600001516064613ce3565b8660e0015160400151613d91565b6111a39190615a88565b60a0820152835160e083015151612710916111bd91613ce3565b6111c79190615a88565b60c0820181815260e08301805192909252905160006020918201819052610100840180519190915260a080850180519251840192909252905160808501519351918601519092015191929161121c9190613ce3565b6112269190615a88565b116112365780610100015161123c565b8060e001515b61012082015261124e6001600f613c48565b61100f61126382602001518360000151613ce3565b61129661127d846080015185610120015160000151613d42565b610c0c610ff78760a00151602001518760600151613d42565b10156010613c48565b610ad96000600a613c48565b60408051808201909152600080825260208201526112c76144cb565b60208181018051516004905280515160a0908101518790529051510151018390526112f061433e565b6112fa8282611af6565b60a00151949350505050565b60006113106145f5565b60208101516000905261132161433e565b61132b82826105e4565b5192915050565b60006002600054036114285760006002805461134d9061561f565b80601f01602080910402602001604051908101604052809291908181526020018280546113799061561f565b80156113c65780601f1061139b576101008083540402835291602001916113c6565b820191906000526020600020905b8154815290600101906020018083116113a957829003601f168201915b50505050508060200190518101906113de91906158fc565b905061038f610c426114136114058660000151610c0c6127108760c0015160400151613c96565b846080015160200151613ce3565b6080840151518651610c3d91610c3591613d42565b60046000540361151c576000600280546114419061561f565b80601f016020809104026020016040519081016040528092919081815260200182805461146d9061561f565b80156114ba5780601f1061148f576101008083540402835291602001916114ba565b820191906000526020600020905b81548152906001019060200180831161149d57829003601f168201915b50505050508060200190518101906114d291906159b8565b905061038f610c426115076114f98660000151610c0c6127108760e0015160400151613c96565b8460a0015160200151613ce3565b60a0840151518651610c3d91610c3591613d42565b610ad960006009613c48565b6000600260005403611793576000600280546115439061561f565b80601f016020809104026020016040519081016040528092919081815260200182805461156f9061561f565b80156115bc5780601f10611591576101008083540402835291602001916115bc565b820191906000526020600020905b81548152906001019060200180831161159f57829003601f168201915b50505050508060200190518101906115d491906158fc565b90506115de61459b565b6115ff8260c00151608001516115f55760016115f8565b60005b6012613c48565b6080820180515182525160209081015190820152835160c0830151604001516116309190610c0c9061271090613d42565b60408201819052815161164691610e6991613ce3565b606082015260808201516020015184516116609190613c96565b60808083018290528551908401515160649261168492610ed892610ec49190613ce3565b61168e9190615a88565b60a0820152835160c083015151612710916116a891613ce3565b6116b29190615a88565b60c0820181815260e08301805192909252905160006020918201819052610100840180519190915260a08401805191519092015251608080840151925190850151519192916117019190613ce3565b61170b9190615a88565b1161171b57806101000151611721565b8060e001515b61012082015261173360016013613c48565b61100f61174882600001518360200151613ce3565b61178a6117736117648660800151600001518660600151613d42565b85610120015160200151613d42565b610c0c856080015186610120015160000151613d42565b10156014613c48565b6004600054036119d9576000600280546117ac9061561f565b80601f01602080910402602001604051908101604052809291908181526020018280546117d89061561f565b80156118255780601f106117fa57610100808354040283529160200191611825565b820191906000526020600020905b81548152906001019060200180831161180857829003601f168201915b505050505080602001905181019061183d91906159b8565b905061184761459b565b6118688260e001516080015161185e576001611861565b60005b6015613c48565b60a0820180515182525160209081015190820152835160e0830151604001516118999190610c0c9061271090613d42565b6040820181905281516118af91610e6991613ce3565b606082015260a08201516020015184516118c99190613c96565b60808201819052845160a0840151516064926118ed9261117592610ec49190613ce3565b6118f79190615a88565b60a0820152835160e0830151516127109161191191613ce3565b61191b9190615a88565b60c0820181815260e08301805192909252905160006020918201819052610100840180519190915260a08085018051925190930191909152905160808401519251918501515190929161196d91613ce3565b6119779190615a88565b116119875780610100015161198d565b8060e001515b61012082015261199f60016016613c48565b61100f6119b482600001518360200151613ce3565b6119d06117736117648660a00151600001518660600151613d42565b10156017613c48565b610ad960006011613c48565b6040805180820190915260008082526020820152611a016144cb565b602081810180515160029052805151606090810151879052905151015101839052611a2a61433e565b611a348282611af6565b60600151949350505050565b6040805180820190915260008082526020820152611a5c6144cb565b60208181018051516005905280515160c090810151879052905151015101839052611a8561433e565b611a8f8282611af6565b60c00151949350505050565b6040805180820190915260008082526020820152611ab76144cb565b60208181018051516006905280515160e090810151879052905151015101839052611ae061433e565b611aea8282611af6565b60e00151949350505050565b611b06600460005414604e613c48565b8151611b21901580611b1a57508251600154145b604f613c48565b600080805560028054611b339061561f565b80601f0160208091040260200160405190810160405280929190818152602001828054611b5f9061561f565b8015611bac5780601f10611b8157610100808354040283529160200191611bac565b820191906000526020600020905b815481529060010190602001808311611b8f57829003601f168201915b5050505050806020019051810190611bc491906159b8565b9050611bce61461f565b7f8969861f3d75998d3c583658a762c8ed027f09eb1f13c5abf3443a0e07182f613385604051611bff929190615aca565b60405180910390a16000602085015151516006811115611c2157611c216153e3565b0361205c57602084810151510151815260e082015160600151611c50906001600160a01b031633146023613c48565b80516020015151606411611c65576000611c76565b606481600001516020015160200151105b1580156020830152611cb3578051602090810151908101519051611c9a9190613c96565b8151602001516040908101519190911490820152611cbb565b600060408201525b805160200180516040908101516064116060840152905181015115156080830152810151611d0c90611cee576000611cf4565b81606001515b611cff576000611d05565b81608001515b6024613c48565b611d1834156025613c48565b611d32611d2b3384604001516000613ddb565b6026613c48565b611d4c611d453384600001516000613ddb565b6027613c48565b806020015115611d83578051602090810151908101519051611d6e9190613c96565b815160200151604001511460a0820152611d8b565b600060a08201525b611dbc8160a00151611d9e576000611da4565b81606001515b611daf576000611db5565b81608001515b6028613c48565b61010082015147908110611dd7576101008301518103611dda565b60005b60c080840182905284015151611df1925090613c96565b60e082018190528151516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611e30573d6000803e3d6000fd5b50815181515160c084015160200151611e4a929190613df1565b60c08083018051516101008401805191909152905160209081015182518201529051610120840180519190915291830151825190910152516040517ff219a0a71d12ce74b58c5792971ce96f25d047c908c63aa5eba10ce79ec4fbe291611eb091615330565b60405180910390a161012081015160208085019190915281518101515161014083018051919091528251820151820151815183015282518201516040908101518251820152835183015160609081015183516001600160a01b0390911691015283519092015160809081015182519015159101525190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91611f5291615bb0565b60405180910390a1611f62614dcd565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169201919091526060808501518351909101528251015160800151611fad576000611fb8565b608083015160200151155b611fc3576000611fe0565b60a08301515115611fd5576000611fe0565b60a083015160200151155b60208083018051921515909252608080860151835183015260a08087015184516040015260608088015185519091015285519092015183519091015290514391015260c08201516101008401516120449161203a91613c96565b8360e00151900390565b602082015160c0015261205681613e05565b50613c42565b6001602085015151516006811115612076576120766153e3565b0361252c576020840151516040015161016082015260e0820151608001516120ad906120a35760016120a6565b60005b6029613c48565b608082015160200151156101a08201819052156120f0576101608101515180516020909101516120e5916120e091613ce3565b613f3e565b610180820152612183565b60a08201515161016082015151516080840151602001516121119190613ce3565b61211b9190615a88565b816101c00181815250508160a001516020015161214d8261016001516000015160200151846080015160200151613ce3565b6121579190615a88565b6101e082018190526101c08201511061217557806101e0015161217c565b806101c001515b6101808201525b61219f816101800151826101600151602001511115602a613c48565b61016081015151516121b4903414602b613c48565b6121ce6121c73384604001516000613ddb565b602c613c48565b6121f46121ed3384600001518461016001516000015160200151613ddb565b602d613c48565b806101a00151156122265761016081015151805160209091015161221b916120e091613ce3565b6102008201526122b9565b60a08201515161016082015151516080840151602001516122479190613ce3565b6122519190615a88565b816102200181815250508160a00151602001516122838261016001516000015160200151846080015160200151613ce3565b61228d9190615a88565b6102408201819052610220820151106122ab578061024001516122b2565b8061022001515b6102008201525b6122d5816102000151826101600151602001511115602e613c48565b610160810151515160a0830151516122ed9190613c96565b6102608201526101608101515160209081015160a0840151909101516123139190613c96565b61028082019081526102608201516102a08301805191909152905190516020015260808201515161020082015161234a9190613d42565b6102c08201526080820151602001516102008201516123699190613c96565b6102e082019081526102c08201516103008301805191909152905190516020015260408201516102008201516123a191903390613df1565b7f9ca80bfd1c57066754a83b2eae9fdeeae80f85dfaa2bf31a644e3693d3f55bd18161020001516040516123d791815260200190565b60405180910390a16102008101805160408086019190915261016083018051515161032085018051919091529051516020908101518251820152610260850151610340860180519190915261028086015181518301526102c086015161036087018051919091526102e0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb9461248894339491939192615bbe565b60405180910390a1612498614dcd565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608086015184518201528184018051600090526103008601518151909301929092526102a085015182519093019290925260c085015181519092019190915260e0840151815160800152514360a090910152610100830151610160830151515101612044565b6002602085015151516006811115612546576125466153e3565b036128c15760208085015151606001516103808301819052608084015190910151905160a0840151516125799190613ce3565b6125839190615a88565b816103a00181815250508160800151602001516125b1826103800151600001518460a0015160200151613ce3565b6125bb9190615a88565b6103c08201526103a081015161038082015160200151516125df911015602f613c48565b6125ff816103c00151826103800151602001516020015111156030613c48565b61260b34156031613c48565b61262d61262633846040015184610380015160000151613ddb565b6032613c48565b6126476126403384600001516000613ddb565b6033613c48565b6080820151516103808201515161265e9190613c96565b6103e08201526080820151602001516103808201515161267e9190613d42565b61040082019081526103e08201516104208301805191909152905190516020015260a0820151516103a08201516126b59190613d42565b61044082015260a0820151602001516103c08201516126d49190613d42565b6104608201908152610440820151610480830180519190915290519051602001526103a0810151604051339180156108fc02916000818181858888f19350505050158015612726573d6000803e3d6000fd5b5061273b826000015133836103c00151613df1565b6103a08101516104a082018051919091526103c0820151815160200152516040517fbe81dad5c40a652e2960514347132ecd036c25f5077fbbac9a0fe34e112c450a91612787916154e2565b60405180910390a16104a08101805160608501526104408201516104c0830180519190915261046083015181516020908101919091526103e08401516104e08501805191909152610400850151815190920191909152610380840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef8559461281e94339491939092615c15565b60405180910390a161282e614dcd565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905261042086015181519093019290925261048085015182519093019290925260c085015181519092019190915260e0840151815160800152514360a0909101526101008301516103a08301519003612044565b60036020850151515160068111156128db576128db6153e3565b03612dda5760208401515160809081015161050083015260e083015101516129129061290857600161290b565b60005b6034613c48565b61292d8260a001516020015182610500015160200151613d42565b61052082015260a0820151516105408201526105008101516020015160e08301516040015161298b91610c429161297a9161296f91610c0c9061271090613c96565b846105400151613ce3565b610c3d846105200151612710613ce3565b6105608201819052610500820151516129a79111156035613c48565b6129bf81610500015160000151826105600151613d42565b61058082015260a0820151516105608201516129db9190613c96565b6105a0820181905261056082015160a084015160200151606492612a209261117592612a079190613ce3565b612a119190615a88565b84610500015160200151613d42565b612a2a9190615a88565b6105c082015261056081015160e08301515161271091612a4991613ce3565b612a539190615a88565b6105e08201818152610600830180519290925290516000602091820181905261062084018051919091526105c0840180519151830191909152516105a0840151925160a086015190920151909291612aaa91613ce3565b612ab49190615a88565b11612ac457806106200151612acb565b8061060001515b61064082015260a08201515161050082015151612b0791612afb91612af09190613c96565b836105800151613d42565b61064083015151613d42565b61066082015261052081015161064082015160200151612b279190613d42565b610680820152612b3960016036613c48565b612b70612b538261054001518460a0015160200151613ce3565b612b67836106600151846106800151613ce3565b10156037613c48565b61050081015151612b849034146038613c48565b612b9e612b973384604001516000613ddb565b6039613c48565b612bb8612bb13384600001516000613ddb565b603a613c48565b6106608101516106a0820180519190915261068082015190516020015260c08201515161064082015151612bec9190613c96565b6106c08201515260c082015160209081015161064083015190910151612c129190613c96565b6106c082015160200152610580810151604051339180156108fc02916000818181858888f19350505050158015612c4d573d6000803e3d6000fd5b50612c6682600001513383610500015160200151613df1565b6105808101516106e08201805191909152610500820151602090810151825190910152516040517fc881f42efc0077dcff290200173f8fd209e6189cae0cdcd54ad5ad3a0e59348091612cb8916154e2565b60405180910390a16106e0810180516080850152610500820151516107008301805191909152805160006020918201526106608401516107208501805191909152610680850151815190920191909152905191519051604051600080516020615f7e83398151915293612d319333939192909190615c53565b60405180910390a1612d41614dcd565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608086015184518201528184018051600090526080808801518251909401939093526106a08601518151909401939093526106c085015183519091015260e0850151825190910152514360a09091015261010083015161050083015151610580840151910103612044565b6004602085015151516006811115612df457612df46153e3565b036132fc5760208401515160a0015161074082015260e082015160800151612e2b90612e21576001612e24565b60005b603b613c48565b612e468260a001516000015182610740015160200151613d42565b61076082015260a0820151602090810151610780830152610740820151015160e083015160400151612ea791610c4291612e9691612e8b91610c0c9061271090613c96565b846107800151613ce3565b610c3d846107600151612710613ce3565b6107a0820181905261074082015151612ec3911115603c613c48565b612edb81610740015160000151826107a00151613d42565b6107c082015260a0820151602001516107a0820151612efa9190613c96565b6107e082018190526107a082015160a084015151606492612f3c9261117592612f239190613ce3565b612f2d9190615a88565b84610740015160200151613d42565b612f469190615a88565b6108008201526107a081015160e08301515161271091612f6591613ce3565b612f6f9190615a88565b61082082018181526108408301805192909252905160006020918201819052610860840180519190915261080084018051915190920152516107e0830151915160a085015151919291612fc29190613ce3565b612fcc9190615a88565b11612fdc57806108600151612fe3565b8061084001515b61088082018190526107608201516020909101516130019190613d42565b6108a082015260a0820151602001516107408201515161304091613034916130299190613c96565b836107c00151613d42565b61088083015151613d42565b6108c08201526130526001603d613c48565b61308961306c8360a0015160000151836107800151613ce3565b613080836108a00151846108c00151613ce3565b1015603e613c48565b6130953415603f613c48565b6130af6130a83384604001516000613ddb565b6040613c48565b6130d16130ca33846000015184610740015160000151613ddb565b6041613c48565b6108a08101516108e082018051919091526108c0820151905160209081019190915260c0830151516108808301519091015161310d9190613c96565b6109008201515260c0820151602001516108808201515161312e9190613c96565b6109008201516020908101919091526107408201510151604051339180156108fc02916000818181858888f19350505050158015613170573d6000803e3d6000fd5b50613185826000015133836107c00151613df1565b61074081015160209081015161092083018051919091526107c0830151815190920191909152516040517ff839591df486e3e78ec4c65c2559d961c03ccb9685836fb4e6194b275d411abd916131da916154e2565b60405180910390a16109208101805160a085015261094082018051600090526107408301515181516020908101919091526108a084015161096085018051919091526108c0850151815190920191909152905191519051604051600080516020615f7e833981519152936132549333939192909190615c53565b60405180910390a1613264614dcd565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905260808088015182518501526108e087015182519095019490945261090086015181519092019190915260e086015181519093019290925290514360a090910152610100840151610740840151909101519003612044565b6005602085015151516006811115613316576133166153e3565b0361378e5760208401515160c0015161098082015260e08201516080015161334d90613343576001613346565b60005b6042613c48565b60a082018051602001516109a083015251516109c08201526109808101515160e0830151604001516133879190610c0c9061271090613d42565b6109e082018190526109a08201516133c1916133a291613ce3565b610c3d6133b6846109c00151612710613ce3565b846109e00151613c96565b610a0082015260a082015151610980820151516133de9190613c96565b610a2082018190526109808201515160a084015160200151606492613420926111759261340b9190613ce3565b6134159190615a88565b84610a000151613d42565b61342a9190615a88565b610a408201526109808101515160e0830151516127109161344a91613ce3565b6134549190615a88565b610a608201818152610a808301805192909252905160006020918201819052610aa08401805191909152610a4084018051915183019190915251610a20840151925160a0860151909201519092916134ab91613ce3565b6134b59190615a88565b116134c55780610aa001516134cc565b80610a8001515b610ac08201819052610a2082015190516134e69190613d42565b610ae082015260a082015160200151610a008201516135179161350891613d42565b82610ac0015160200151613d42565b610b00820152610a008101516109808201516020015161353a9110156043613c48565b61356e613551826109c00151836109a00151613ce3565b61356583610ae0015184610b000151613ce3565b10156044613c48565b610980810151516135829034146045613c48565b61359c6135953384604001516000613ddb565b6046613c48565b6135b66135af3384600001516000613ddb565b6047613c48565b610ae0810151610b208201805191909152610b0082015190516020015260c082015151610ac0820151516135ea9190613c96565b610b408201515260c0820151602090810151610ac0830151909101516136109190613c96565b610b40820151602001528151610a0082015161362e91903390613df1565b610b608101805160009052610a00820151815160200152516040517f113ae4880db104f2d8c1b08f7a20d8ba11ee67425a5dcb41d45bf1fe4fb122a091613674916154e2565b60405180910390a1610b608101805160c085015261098082015151610b80830180519190915280516000602091820152610ae0840151610ba08501805191909152610b00850151815190920191909152905191519051604051600080516020615f7e833981519152936136ed9333939192909190615c53565b60405180910390a16136fd614dcd565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451820152818401805160009052608080880151825190940193909352610b20860151815190940193909352610b4085015183519091015260e0850151825190910152514360a0909101526101008301516109808301515101612044565b60066020850151515160068111156137a8576137a86153e3565b03613c425760208401515160e090810151610bc0830152820151608001516137df906137d55760016137d8565b60005b6048613c48565b60a08201805151610be08301525160200151610c00820152610bc08101515160e0830151604001516138199190610c0c9061271090613d42565b610c208201819052610be08201516138539161383491613ce3565b610c3d61384884610c000151612710613ce3565b84610c200151613c96565b610c4082015260a082015160200151610bc0820151516138739190613c96565b610c608201819052610bc08201515160a0840151516064926138b2926111759261389d9190613ce3565b6138a79190615a88565b84610c400151613d42565b6138bc9190615a88565b610c80820152610bc08101515160e083015151612710916138dc91613ce3565b6138e69190615a88565b610ca08201818152610cc08301805192909252905160006020918201819052610ce08401805191909152610c808401805191519092015251610c60830151915160a0850151519192916139399190613ce3565b6139439190615a88565b116139535780610ce0015161395a565b80610cc001515b610d0082015260a082015151610c408201516139889161397991613d42565b82610d00015160200151613d42565b610d20820152610c60810151610d00820151516139a59190613d42565b610d40820152610c40810151610bc0820151602001516139c89110156049613c48565b6139fc6139df82610be0015183610c000151613ce3565b6139f383610d20015184610d400151613ce3565b1015604a613c48565b613a083415604b613c48565b613a22613a1b3384604001516000613ddb565b604c613c48565b613a44613a3d33846000015184610bc0015160000151613ddb565b604d613c48565b610d20810151610d608201805191909152610d40820151905160209081019190915260c083015151610d0083015190910151613a809190613c96565b610d808201515260c082015160200151610d0082015151613aa19190613c96565b610d8082015160200152610c40810151604051339180156108fc02916000818181858888f19350505050158015613adc573d6000803e3d6000fd5b50610c40810151610da0820180519190915280516000602090910152516040517fc45748ddd456b326da77f2d99edcc8c4a4e507069f616cb460137f68e06b276891613b27916154e2565b60405180910390a1610da08101805160e0850152610dc08201805160009052610bc0830151518151602090810191909152610d20840151610de08501805191909152610d40850151815190920191909152905191519051604051600080516020615f7e83398151915293613ba19333939192909190615c53565b60405180910390a1613bb1614dcd565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451820152818401805160009052608080880151825190940193909352610d60860151815190940193909352610d8085015183519091015260e0850151825190910152514360a090910152610100830151610c408301519003612044565b50505050565b816103305760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613c788282613fad565b61033057600080fd5b613c8a81614088565b613c9357600080fd5b50565b600082613ca38382615ca1565b91508110156102fe5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401613c65565b6000811580613d0757508282613cf98183615cb4565b9250613d059083615a88565b145b6102fe5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401613c65565b600082613d4f8382615cd3565b91508111156102fe5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401613c65565b600081600003613dd15760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401613c65565b6102fb8284615a88565b6000613de98385308561412d565b949350505050565b613dfc838383614207565b61077657600080fd5b60208101515115613eaa57613e18614ded565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c08401526002600055436001559051613e8d91839101615ce6565b604051602081830303815290604052600290816107769190615dc3565b613eb2614eb0565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e08601525101516101008401526004600055436001559051613e8d91839101615e83565b60006003821115613f9f5750806000613f58600283615a88565b613f63906001615ca1565b90505b81811015613f9957905080600281613f7e8186615a88565b613f889190615ca1565b613f929190615a88565b9050613f66565b50919050565b8115610ad957506001919050565b6000806000846001600160a01b031660006342966c6860e01b86604051602401613fd991815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516140179190615f44565b60006040518083038185875af1925050503d8060008114614054576040519150601f19603f3d011682016040523d82523d6000602084013e614059565b606091505b509150915061406a828260036142d8565b508080602001905181019061407f9190615f60565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916140cf91615f44565b60006040518083038185875af1925050503d806000811461410c576040519150601f19603f3d011682016040523d82523d6000602084013e614111565b606091505b5091509150614122828260046142d8565b506001949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161419491615f44565b60006040518083038185875af1925050503d80600081146141d1576040519150601f19603f3d011682016040523d82523d6000602084013e6141d6565b606091505b50915091506141e7828260016142d8565b50808060200190518101906141fc9190615f60565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161426691615f44565b60006040518083038185875af1925050503d80600081146142a3576040519150601f19603f3d011682016040523d82523d6000602084013e6142a8565b606091505b50915091506142b9828260026142d8565b50808060200190518101906142ce9190615f60565b9695505050505050565b606083156142e757508161038f565b8251156142f75782518084602001fd5b60405163100960cb60e01b815260048101839052602401613c65565b60408051608081018252600091810182815260608201929092529081905b8152602001600081525090565b60405180610100016040528060001515815260200161435b614313565b815260200160008152602001614384604051806040016040528060008152602001600081525090565b81526020016143a6604051806040016040528060008152602001600081525090565b81526020016143c8604051806040016040528060008152602001600081525090565b81526020016143ea604051806040016040528060008152602001600081525090565b815260200161440c604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b03168152602001614449604051806040016040528060008152602001600081525090565b815260200161446b604051806040016040528060008152602001600081525090565b8152602001614478614f92565b815260200161449a604051806040016040528060008152602001600081525090565b81526000602082015260400161440c6040805160608101909152806000815260006020820181905260409091015290565b60405180604001604052806000815260200161440c614fcc565b5080546144f19061561f565b6000825580601f10614501575050565b601f016020900490600052602060002090810190613c939190614fdf565b6040805160e08101909152600060a0820181815260c08301919091528190815260200161455f604051806040016040528060008152602001600081525090565b815260200161456c614f92565b815260200161458e604051806040016040528060008152602001600081525090565b815260200161440c614411565b604051806101400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016143c8604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161440c60405180602001604052806000151581525090565b60405180610e000160405280614633614ff8565b81526020016000151581526020016000151581526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001614690604051806040016040528060008152602001600081525090565b815260200161469d614313565b81526020016146aa614f92565b81526020016146b7614313565b8152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161471a604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161474a604051806040016040528060008152602001600081525090565b815260200161476c604051806040016040528060008152602001600081525090565b815260200161478e604051806040016040528060008152602001600081525090565b81526020016147b0604051806040016040528060008152602001600081525090565b81526020016147bd61501b565b8152602001600081526020016000815260200160008152602001600081526020016147fb604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161482b604051806040016040528060008152602001600081525090565b815260200161484d604051806040016040528060008152602001600081525090565b815260200161486f604051806040016040528060008152602001600081525090565b8152602001614891604051806040016040528060008152602001600081525090565b81526020016148b3604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614906604051806040016040528060008152602001600081525090565b8152602001614928604051806040016040528060008152602001600081525090565b815260200161494a604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161497a604051806040016040528060008152602001600081525090565b815260200161499c604051806040016040528060008152602001600081525090565b81526020016149be604051806040016040528060008152602001600081525090565b81526020016149e0604051806040016040528060008152602001600081525090565b8152602001614a02604051806040016040528060008152602001600081525090565b8152602001614a24604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614a77604051806040016040528060008152602001600081525090565b8152602001614a99604051806040016040528060008152602001600081525090565b8152602001614abb604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614aeb604051806040016040528060008152602001600081525090565b8152602001614b0d604051806040016040528060008152602001600081525090565b8152602001614b2f604051806040016040528060008152602001600081525090565b8152602001614b51604051806040016040528060008152602001600081525090565b8152602001614b73604051806040016040528060008152602001600081525090565b8152602001614b95604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614be8604051806040016040528060008152602001600081525090565b8152602001614c0a604051806040016040528060008152602001600081525090565b8152602001614c2c604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614c5c604051806040016040528060008152602001600081525090565b8152602001614c7e604051806040016040528060008152602001600081525090565b8152602001614ca0604051806040016040528060008152602001600081525090565b8152602001614cc2604051806040016040528060008152602001600081525090565b8152602001614ce4604051806040016040528060008152602001600081525090565b8152602001614d06604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614d59604051806040016040528060008152602001600081525090565b8152602001614d7b604051806040016040528060008152602001600081525090565b8152602001614d9d604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001614384604051806040016040528060008152602001600081525090565b6040518060400160405280614de061504a565b815260200161440c6150bc565b6040518060e0016040528060006001600160a01b03168152602001614e2d6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b03168152602001614e5f604051806040016040528060008152602001600081525090565b8152602001614e81604051806040016040528060008152602001600081525090565b8152602001614ea3604051806040016040528060008152602001600081525090565b815260200161440c614f92565b60405180610120016040528060006001600160a01b03168152602001614ef16040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b03168152602001614f23604051806040016040528060008152602001600081525090565b8152602001614f45604051806040016040528060008152602001600081525090565b8152602001614f67604051806040016040528060008152602001600081525090565b8152602001614f89604051806040016040528060008152602001600081525090565b81526020016143315b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b604051806020016040528061440c615152565b5b80821115614ff45760008155600101614fe0565b5090565b604051806040016040528060006001600160a01b0316815260200161440c614f92565b60405180604001604052806000815260200161440c604051806040016040528060008152602001600081525090565b604051806080016040528060006001600160a01b0316815260200161508a6040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b0316815260200161440c604051806040016040528060008152602001600081525090565b6040518060e001604052806000151581526020016150ed604051806040016040528060008152602001600081525090565b815260200161510f604051806040016040528060008152602001600081525090565b8152602001615131604051806040016040528060008152602001600081525090565b815260200161513e614f92565b815260200160008152602001600081525090565b604080516101008101909152806000815260200161516e614ff8565b815260200161517b614313565b815260200161438461501b565b6001600160a01b0381168114613c9357600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156151d6576151d661519d565b60405290565b6040805190810167ffffffffffffffff811182821017156151d6576151d661519d565b6040516020810167ffffffffffffffff811182821017156151d6576151d661519d565b604051610100810167ffffffffffffffff811182821017156151d6576151d661519d565b604051610120810167ffffffffffffffff811182821017156151d6576151d661519d565b8015158114613c9357600080fd5b600060a0828403121561528a57600080fd5b6152926151b3565b905081358152602082013560208201526040820135604082015260608201356152ba81615188565b606082015260808201356152cd8161526a565b608082015292915050565b60008060c083850312156152eb57600080fd5b82356152f681615188565b91506153058460208501615278565b90509250929050565b61532382825180518252602090810151910152565b6020015160409190910152565b606081016102fe828461530e565b60006040828403121561535057600080fd5b6153586151dc565b9050813581526020820135602082015292915050565b6000806060838503121561538157600080fd5b61538b848461533e565b946040939093013593505050565b600060408284031215613f9957600080fd5b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b80516002811061540b5761540b6153e3565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015180518285015290810151604084015261020083019190506040840151805160608501526020810151608085015250606084015161548260a08501826153ab565b50608084015180516101408501526020015161016084015260a08401511661018083015260c08301516154b96101a08401826153f9565b5092915050565b600080604083850312156154d357600080fd5b50508035926020909101359150565b8151815260208083015190820152604081016102fe565b60006020828403121561550b57600080fd5b5035919050565b60005b8381101561552d578181015183820152602001615515565b50506000910152565b828152604060208201526000825180604084015261555b816060850160208701615512565b601f01601f1916919091016060019392505050565b6000806060838503121561558357600080fd5b82359150615305846020850161533e565b60006102c08284031215613f9957600080fd5b600081830360408112156155ba57600080fd5b6040516040810181811067ffffffffffffffff821117156155dd576155dd61519d565b604052833581526020601f19830112156155f657600080fd5b6155fe6151ff565b9150602084013561560e8161526a565b825260208101919091529392505050565b600181811c9082168061563357607f821691505b602082108103613f9957634e487b7160e01b600052602260045260246000fd5b803560078110610ad957600080fd5b600060c0828403121561567457600080fd5b61567c6151dc565b9050813561568981615188565b81526156988360208401615278565b602082015292915050565b6000606082840312156156b557600080fd5b6156bd6151dc565b90506156c9838361533e565b81526040820135602082015292915050565b6000606082840312156156ed57600080fd5b6156f56151dc565b905081358152615698836020840161533e565b60008183036102c081121561571c57600080fd5b6157246151dc565b833581526102a0601f198301121561573b57600080fd5b6157436151ff565b915061574d615222565b61575960208601615653565b81526157688660408701615662565b602082015261577b8661010087016156a3565b604082015261578e8661016087016156db565b60608201526157a1866101c0870161533e565b60808201526157b486610200870161533e565b60a08201526157c786610240870161533e565b60c08201526157da86610280870161533e565b60e0820152825260208101919091529392505050565b8051610ad981615188565b60006060828403121561580d57600080fd5b6040516060810181811067ffffffffffffffff821117156158305761583061519d565b806040525080915082516002811061584757600080fd5b815260208301516158578161526a565b6020820152604083015161586a81615188565b6040919091015292915050565b60006040828403121561588957600080fd5b6158916151dc565b9050815181526020820151602082015292915050565b600060a082840312156158b957600080fd5b6158c16151b3565b905081518152602082015160208201526040820151604082015260608201516158e981615188565b606082015260808201516152cd8161526a565b6000610200828403121561590f57600080fd5b60405160e0810181811067ffffffffffffffff821117156159325761593261519d565b604052825161594081615188565b815261594f84602085016157fb565b6020820152608083015161596281615188565b60408201526159748460a08501615877565b60608201526159868460e08501615877565b6080820152615999846101208501615877565b60a08201526159ac8461016085016158a7565b60c08201529392505050565b600061026082840312156159cb57600080fd5b6159d3615246565b6159dc836157f0565b81526159eb84602085016157fb565b60208201526159fc608084016157f0565b6040820152615a0e8460a08501615877565b6060820152615a208460e08501615877565b6080820152615a33846101208501615877565b60a0820152615a46846101608501615877565b60c0820152615a59846101a085016158a7565b60e0820152610240929092015161010083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082615aa557634e487b7160e01b600052601260045260246000fd5b500490565b80516001600160a01b0316825260208082015190610776908401826153ab565b6001600160a01b038316815281516020808301919091528201515180516102e08301919060078110615afe57615afe6153e3565b60408401526020810151615b156060850182615aaa565b506040810151615b2961012085018261530e565b506060810151805161018085015260209081015180516101a08601528101516101c0850152608082015180516101e086015281015161020085015260a0820151805161022086015281015161024085015260c0820151805161026086015281015161028085015260e09091015180516102a085015201516102c09092019190915292915050565b60a081016102fe82846153ab565b6001600160a01b03861681526101008101615be6602083018780518252602090810151910152565b6060820185905283516080830152602084015160a08301525b825160c0830152602083015160e08301526142ce565b6001600160a01b03861681526020808201869052845160408301528401516060820152610100810183516080830152602084015160a0830152615bff565b6001600160a01b038516815260e08101615c7a602083018680518252602090810151910152565b8351606083015260208401516080830152825160a0830152602083015160c083015261407f565b808201808211156102fe576102fe615a72565b6000816000190483118215151615615cce57615cce615a72565b500290565b818103818111156102fe576102fe615a72565b81516001600160a01b03908116825260208084015161020084019291615d0e908501826153f9565b5060408401511660808301526060830151805160a0840152602081015160c0840152506080830151805160e084015260208101516101008401525060a0830151805161012084015260208101516101408401525060c08301516154b96101608401826153ab565b601f82111561077657600081815260208120601f850160051c81016020861015615d9c5750805b601f850160051c820191505b81811015615dbb57828155600101615da8565b505050505050565b815167ffffffffffffffff811115615ddd57615ddd61519d565b615df181615deb845461561f565b84615d75565b602080601f831160018114615e265760008415615e0e5750858301515b600019600386901b1c1916600185901b178555615dbb565b600085815260208120601f198616915b82811015615e5557888601518255948401946001909101908401615e36565b5085821015615e735787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81516001600160a01b0316815261026081016020830151615ea760208401826153f9565b5060408301516001600160a01b0381166080840152506060830151805160a0840152602081015160c0840152506080830151805160e084015260208101516101008401525060a0830151805161012084015260208101516101408401525060c0830151805161016084015260208101516101808401525060e0830151615f316101a08401826153ab565b5061010083015161024083015292915050565b60008251615f56818460208701615512565b9190910192915050565b600060208284031215615f7257600080fd5b815161038f8161526a56fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a26469706673582212204ed0d31dbf2a843c55fafd450b6bda85ae32aec9fc7c846e8231efa46395a0f764736f6c6343000810003360806040523480156200001157600080fd5b50604051620010cf380380620010cf83398101604081905262000034916200027a565b85856003620000448382620003d3565b506004620000538282620003d3565b506200005f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200008a9083620000c8565b6006620000988582620003d3565b506007620000a78482620003d3565b506008805460ff191660ff9290921691909117905550620004c79350505050565b6001600160a01b038216620001235760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200013791906200049f565b90915550506001600160a01b03821660009081526020819052604081208054839290620001669084906200049f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001dd57600080fd5b81516001600160401b0380821115620001fa57620001fa620001b5565b604051601f8301601f19908116603f01168101908282118183101715620002255762000225620001b5565b816040528381526020925086838588010111156200024257600080fd5b600091505b8382101562000266578582018301518183018401529082019062000247565b600093810190920192909252949350505050565b60008060008060008060c087890312156200029457600080fd5b86516001600160401b0380821115620002ac57600080fd5b620002ba8a838b01620001cb565b97506020890151915080821115620002d157600080fd5b620002df8a838b01620001cb565b96506040890151915080821115620002f657600080fd5b620003048a838b01620001cb565b955060608901519150808211156200031b57600080fd5b506200032a89828a01620001cb565b9350506080870151915060a087015190509295509295509295565b600181811c908216806200035a57607f821691505b6020821081036200037b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001b057600081815260208120601f850160051c81016020861015620003aa5750805b601f850160051c820191505b81811015620003cb57828155600101620003b6565b505050505050565b81516001600160401b03811115620003ef57620003ef620001b5565b620004078162000400845462000345565b8462000381565b602080601f8311600181146200043f5760008415620004265750858301515b600019600386901b1c1916600185901b178555620003cb565b600085815260208120601f198616915b8281101562000470578886015182559484019460019091019084016200044f565b50858210156200048f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004c157634e487b7160e01b600052601160045260246000fd5b92915050565b610bf880620004d76000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0e565b60405180910390f35b61012b610126366004610a78565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa2565b6102f1565b60085460405160ff909116815260200161010f565b610102610315565b61012b61018b366004610a78565b610324565b61012b61019e366004610ade565b610363565b6101026103de565b61013f6101b9366004610af7565b6001600160a01b031660009081526020819052604090205490565b6101dc6103ed565b005b610102610494565b61012b6101f4366004610a78565b6104a3565b61012b610207366004610a78565b610535565b61013f61021a366004610b19565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b4c565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b4c565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610543565b60019150505b92915050565b6000336102ff858285610668565b61030a8585856106fa565b506001949350505050565b60606007805461025490610b4c565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035e908790610b9c565b610543565b6005546000906001600160a01b0316336001600160a01b0316146103c05760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d6906001600160a01b0316836108c8565b506001919050565b60606006805461025490610b4c565b6005546001600160a01b0316336001600160a01b0316146104425760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b7565b600254156104865760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b7565b6005546001600160a01b0316ff5b60606004805461025490610b4c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105285760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b7565b61030a8286868403610543565b6000336102e58185856106fa565b6001600160a01b0383166105a55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b7565b6001600160a01b0382166106065760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b7565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f457818110156106e75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b7565b6106f48484848403610543565b50505050565b6001600160a01b03831661075e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b7565b6001600160a01b0382166107c05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b7565b6001600160a01b038316600090815260208190526040902054818110156108385760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b7565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086f908490610b9c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108bb91815260200190565b60405180910390a36106f4565b6001600160a01b0382166109285760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b7565b6001600160a01b0382166000908152602081905260409020548181101561099c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b7565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109cb908490610baf565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161065b565b600060208083528351808285015260005b81811015610a3b57858101830151858201604001528201610a1f565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610a7357600080fd5b919050565b60008060408385031215610a8b57600080fd5b610a9483610a5c565b946020939093013593505050565b600080600060608486031215610ab757600080fd5b610ac084610a5c565b9250610ace60208501610a5c565b9150604084013590509250925092565b600060208284031215610af057600080fd5b5035919050565b600060208284031215610b0957600080fd5b610b1282610a5c565b9392505050565b60008060408385031215610b2c57600080fd5b610b3583610a5c565b9150610b4360208401610a5c565b90509250929050565b600181811c90821680610b6057607f821691505b602082108103610b8057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102eb576102eb610b86565b818103818111156102eb576102eb610b8656fea2646970667358221220de5f7e9e456d3933f12740e3a787a12e1c665e3f5da51b58c4d414c0bbbc1fab64736f6c63430008100033`,
  BytecodeLen: 34161,
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
