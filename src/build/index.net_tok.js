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
            boxes: [],
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
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64,(uint64,uint64))(uint64,uint64)`, `Trader_exactSwapAForB(uint64,uint64)(uint64,uint64)`, `Trader_exactSwapBForA(uint64,uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`, `_reachp_0((uint64,byte[0],uint64,byte[32],byte[8],uint64))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[89])))void`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`],
    sigs: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Protocol_delete()void`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64,(uint64,uint64))(uint64,uint64)`, `Trader_exactSwapAForB(uint64,uint64)(uint64,uint64)`, `Trader_exactSwapBForA(uint64,uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`, `_reachp_0((uint64,byte[0],uint64,byte[32],byte[8],uint64))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[89])))void`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCARABgIZJBOEARAAQKgjQZJA0H///////////8BBhEmBSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAAEPNZU+gEAAQExGEEQASlkSSJbNQEkWzUCK2QnBGRQghAEGToBGwQlWzngBCiaRG4ES24bXgRWfOOBBFgA20YEYArbDQRuij9eBG7MciQEc+W3FwR8pHu4BKDo9ZkEpAsKWQTP2r63BOIvANkE/am27zYaAI4QE20BNwDhE3YTfw9TD24Bmw9jAHIB4QG+AAEBeAFXE4gANAEhBgxBEA40ASEJEkSIE8M0FhY0E1cACDQTVwgIUFA0ElcACDQSVwgIUFA0EFcACDQQVwgIUDQQVxAIUDQQVxggUDQQVzgBUFA0EVcACDQRVwgIUFA0GBZQNBdQNQQxGSISRIAEFR98dTQEULAhCEMkrzULIQk0ARJEiBNWNAsiWzUMgATFH8NXNAwWULA0DIgTuik1C4AIAAAAAAAAYU00C1CwNAs1BLEisgEhDLIQNBayIbMhCjQHCDUHIjQYMgoyCYgTozEZgQUSRIgTiCIyCjIJiBOMNANA/5FC/4Q2GgE2GgI1CzUMJK8rNAw0C1BQUDULIQY0ARJEiBKfNAsiWzUMNAtXCFo1DYAEDrfrRTQMFlA0DVCwNAyIEy80DSJVjQcObA52DoAOig6UDp4OqEL+yTYaATYaAhc1CzUMJK8nBDQMNAsWUFAhDa9QUDULQv+gNhoBFzYaAjULNQwkr4ABAjQMFjQLUFAhDa9QUDULQv9/NhoBFzYaAhc1CzUMJK+AAQQ0DBY0CxZQUCELr1BQNQtC/1w2GgEXNhoCFzULNQwkr4ABAzQMFjQLFlBQIQuvUFA1C0L/OTYaARc2GgIXNQs1DCSvgAEFNAwWNAsWUFAhC69QUDULQv8WNhoBFzYaAhc1CzUMJK+AAQY0DBY0CxZQUCELr1BQNQtC/vM0C1cgOTUeMQA0EFcYIBJENB4iWzUdNB4kWzUcNB4hBVs1GzQdJQw0HCUMEEk1GkENsDQbNBw0HQgSNQw0GyUMNRk0GyINNQ00DDQZEDQNEEQ0C1cAIDUMNBpBDYs0GzQcNB0IEjULNAs0GRA0DRBENB5XOAEXNR8yCmAyCngJNA4JNRo0ESJbNRk0ESRbNQ00GTQaCEk1CzQMiBFdNA00GDQMiBDxNBkWNA0WUDQaFlA1DIAIAAAAAAAANUo0DFCwNAw1BDQdFjQcFlA0GxZQNB5XGCBQNB8WUQcIUDUMgARWrXU8NAxQsDQfNBMkWyISEDQSIlsiEjQSJFsiEhAQNBU0HjIGNBo0Dgg0Cwk1DjUPNRA1ETUUNBRBDXU0GBY0F1A0FhZQNBNQNBJQNBFQNBBQI69QIQkyBjUCNQErSwFXAH9nJwRMV38bZyk0ARY0AhZQZzEZIhJEiBD4Qv11NAtXABA1DTQLIQVbNQw0EFc4ARcURDQNIls1GTQNJFs1CzQTJFtJNR0iEkk1HEEMXSOvNBkWUCOvNAsWUKOID+yWiA/oSZMhBw5EI1s1GjQMNBoORDQZiBBoNAs0GIgQPTQcQQynI680GRZQI680CxZQo4gPt5aID7NJkyEHDkQjWzUNNAw0DQ5ENBk0EiJbCDUcNAs0EiRbCDUbNBMiWzQNCTUaNB00DQg1DDQNNBYxAIgPgoAIAAAAAAAAO/o0DRZQsDQNFjUENBkWNAsWUDUdNBwWNBsWUDUeNBoWNAwWUDULgATeGyn1MQBQNB1QNA0WUDQeUDQLULAiNBoWNAwWUDQcFjQbFlAyBjQONBkINQ41DzUSNRM1FEL+mjQLIls1DTQLVwgQNQw0EyRbNRw0EiJbNRs0EiRbNRo0DTQbHTQclzUZNA00Gh00HJc1CzQMIls0GQ5ENAwkWzQLDkQ0DTQWiA82NBMiWzQNCDUdNBw0DQk1DDQbNBkJNRw0GjQLCTUbNBkxAIgPDTQLNBgxAIgOoTQZFjQLFlA1GoAIAAAAAAAAQyw0GlCwNBo1BDQcFjQbFlA1HjQdFjQMFlA1C4AEHNSuXzEAUDQNFlA0GlA0HlA0C1CwIjQdFjQMFlA0HBY0GxZQMgY0DjQZCTUONQ81EjUTNRRC/bs0CyJbNQ00CyRbNQw0EFc4ARcURDQSIls1GTQSJFs1HzQQIls1ITQQIQVbNRs0HzQMCTUeI680GRZQNQsjrzQMFlAjryEENBsIFlCjiA3hNAujiA3bI680HhZQKKOIDdCiiA3MSZMhBw5EI1shCAg1GjQNNBoPRDQNNBoJNR00GTQaCDUgNBo0Hx00IJc0DAk0ISULNBsKHSWXNRw0GjQhHSEElzUbJK80HBZQNBsWJK9QNBs0Hx00IJc0HA1NSTUaIls1HDQaJFs1GzQZNA0INB0JNBwJNRo0HjQbCTUZIjQdDiI0DA4QRCOvNBoWUCOvNBkWUKOIDTc0CyOvNB8WUKOIDSunRDQNiA25NB0xAIgNijQMNBgxAIgNHjQdFjQMFlA1C4AIAAAAAAAASls0C1CwNAs1BDQNFiSvUDUeNBoWNBkWUDUMKjEAUDQeUDQLUDQMULAiNBoWNBkWUDQRIls0HAgWNBEkWzQbCBZQMgY0DjQNCDQdCTUONQ81ETUSNRRC/DU0CyJbNQ00CyRbNQw0EFc4ARcURDQSIls1HzQSJFs1HjQQIls1ITQQIQVbNRw0HzQMCTUaI680HhZQNRkjrzQMFlAjryEENBwIFlCjiAxbNBmjiAxVI680GhZQKKOIDEqiiAxGSZMhBw5EI1shCAg1GzQNNBsPRDQNNBsJNQs0HjQbCDUgNBs0Hx00IJc0DAk0ISULNBwKHSWXNR00GzQhHSEElzUcJK80HRZQNBwWJK9QNBw0Hx00IJc0HQ1NSTUbIls1HTQbJFs1HDQaNBwJNRs0HjQNCDQLCTQdCTUaIjQMDiI0Cw4QRCOvNBsWUCOvNBoWUKOIC7EjrzQfFlA0GaOIC6WnRDQNNBiIDA00DDEAiAwCNAs0GDEAiAuWNAwWNAsWUDUZgAgAAAAAAABRizQZULA0GTUEJK80DRZQNQs0GxY0GhZQNQ0qMQBQNAtQNBlQNA1QsCI0GxY0GhZQNBEiWzQcCBY0ESRbNB0IFlAyBjQONAwJNQ41DzURNRI1FEL6sDQLIls1HzQQVzgBFxRENBIiWzUaNBIkWzUeNBAiWzUNNBAhBVs1GSOvNB4WUDUdI680GhZQNRwjrzQfFlAjryEENBkJFlCjiArbSTUMNB2jiArSNBwoo4gKyzQMoIgKxaKICsFJkyEHDkQjWzUbNBo0Hwg1DDQfNB4dNAyXNBsJNA0lCzQZCh0llzUaNB80DR0hBJc1GSSvNBoWUDQZFiSvUDQZNB4dNAyXNBoNTUk1DSJbNRo0DSRbNRk0DDQaCTUNNB40Gwk0GQk1DDQLJFs0Gw5EI680DRZQI680DBZQo4gKQTQcNB2jiAo5p0Q0H4gKxzQbNBgxAIgKMySvNBsWUDULgAgAAAAAAABYsTQLULA0CzUENB8WJK9QNRw0DRY0DBZQNRsqMQBQNBxQNAtQNBtQsCI0DRY0DBZQNBEiWzQaCBY0ESRbNBkIFlAyBjQONB8INQ41DzURNRI1FEL5TjQLIls1HzQQVzgBFxRENBIiWzUMNBIkWzUaNBAiWzUNNBAhBVs1GSOvNAwWUDUeI680GhZQNR0jrzQfFlAjryEENBkJFlCjiAl5STUbNB6jiAlwNB0oo4gJaTQboIgJY6KICV9JkyEHDkQjWzUcNBo0Hwg1GzQfNAwdNBuXNBwJNA0lCzQZCh0llzUaNB80DR0hBJc1GSSvNBoWUDQZFiSvUDQZNAwdNBuXNBoNTUk1DSJbNRo0DSRbNRk0DDQcCTQZCTUNNBs0Ggk1DDQLJFs0HA5EI680DRZQI680DBZQo4gI3zQeNB2jiAjXp0Q0HzQYiAk/NBwxAIgJNDQcFiSvUDUbgAgAAAAAAABf0zQbULA0GzUEJK80HxZQNQs0DRY0DBZQNR0qMQBQNAtQNBtQNB1QsCI0DRY0DBZQNBEiWzQZCBY0ESRbNBoIFlAyBjQONBwJNQ41DzURNRI1FEL37DQBIQYMQQWeNAEhCRJEiAiUNAs1DCOvNAwWUCOvIQQ0ECEFWwgWUKOICDYjrzQSVwAIUKOICCojrzQSJFs0DAkWUCijiAgaoogIFkmTIQcORCNbIQgIFjUEQvTUNAEhBgxBBZY0ASEJEkSICDg0CzUMI680DBZQI68hBDQQIQVbCBZQo4gH2iOvNBJXCAhQo4gHziOvNBIiWzQMCRZQKKOIB76iiAe6SZMhBw5EI1shCAgWNQRC9Hg0ASEGDEEFjjQBIQkSRIgH3DQLNQw0EFc4ARcURDQSIls1DTQSJFs1CzQQIls1DzQQIQVbNQ4jrzQLFlA1EyOvNA0WUDUSI680DBZQI68hBDQOCRZQo4gHUEk1EDQTo4gHRzQSKKOIB0A0EKCIBzqiiAc2SZMhBw5EI1s1ETQNNAwINRA0DDQLHTQQlzQRCTQPJQs0DgodJZc1DTQMNA8dIQSXNQ4krzQNFlA0DhYkr1A0DjQLHTQQlzQNDU01DCI0EQ5EI680EDQMIlsJFlAjrzQLNBEJNAwkWwkWUKOIBsg0EjQTo4gGwKdENBEWNQRC84U0ASEGDEEFhjQBIQkSRIgG6TQLNQw0EFc4ARcURDQSIls1DTQSJFs1CzQQIls1DzQQIQVbNQ4jrzQNFlA1EyOvNAsWUDUSI680DBZQI68hBDQOCRZQo4gGXUk1EDQTo4gGVDQSKKOIBk00EKCIBkeiiAZDSZMhBw5EI1s1ETQLNAwINRA0DDQNHTQQlzQRCTQPJQs0DgodJZc1CzQMNA8dIQSXNQ4krzQLFlA0DhYkr1A0DjQNHTQQlzQLDU01DCI0EQ5EI680DTQRCTQMJFsJFlAjrzQQNAwiWwkWUKOIBdU0EzQSo4gFzadENBEWNQRC8pI0CyJbNQ00CyRbNRg0C1cQIDUWNAtXMAg1FTQLgThbNQyABGf3mnM0DRZQNBgWUDQWUDQVUDQMFlCwNA2IBkIhDiEEDUQhCogGMSI0GDIKiAV7gQmvNReABWFwcElENAwWUAM1CDIKeDUJKTIKYDQJCRY1CrEisgEhD7IQNAyyGIAESVoKaLIaMRgWsho0F7IaNBgWshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAACp6NAtQsDQLSTUNIls1DDQNVwg5STULIls1GzQLJFs1GjQLIQVbNRk0GyUMNBolDBBBAOU0GTQaNBsIEjUNNA00GSUMEDQZIg0QRCI0DBJEIQqIBXOxIrIBIQyyECEOsiIhD7IjNBWyJTQWsiaBYK+yJzIDsigyCrIps7Q8NQ2ACAAAAAAAACqUNA0WULA0DUk1FjQYFiJbE0Q0FjQYE0QhBa81FSKAEP//////////AAAAAAAAAAA0FUk0CzIGNAw1DjUPNRA1ETUSNRM1FELzyYgE7iEKiATuNhoBNQtC/muIBN42GgE1C0LxCIgE0zYaATULQvF+IjE0EkQhDDE1EkQiMTYSRCIxNxJEiASzgZoBryIiQvOkIjUNQv8fNA1XAVk1C0LyWjQNVwEYNQtC87A0DVcBGDULQvTENA1XARA1C0L1mTQNVwEQNQtC9xU0DVcBEDULQviQNA1XARA1C0L56CI1DELyVCI1C0LyeTQZNB0dNBIiW5c1GzQLNB0dNBIkW5dJNQ00G0k0DQxNNRpC85w0ASEGEkSIA380FhY0E1cACDQTVwgIUFA0ElcACDQSVwgIUFA0EFcACDQQVwgIUDQQVxAIUDQQVxggUDQQVzgBUFA0EVcACDQRVwgIUFA0GBZQNBdQNQRC7+80GTQdHTQSIluXNRs0CzQdHTQSJFuXSTUaNBtJNBoMTTUNQvNSNBgWNBdQNBYWUDQVUDQTUDQSUDQRUDQQUDQOFlAhBjIGQvKEIrIBIQiyELIHsgiziSKyASEGshCyFLIRshKziTQBIQYSRIgCwDQLNQwjrzQMFlAjryEENBAhBVsIFlCjiAKYI680ElcACFCjiAKMI680EiRbNAwJFlAoo4gCfKKIAnhJkyEHDkQjWyEICBY1BELvNjQBIQYSRIgCbDQLNQwjrzQMFlAjryEENBAhBVsIFlCjiAJEI680ElcICFCjiAI4I680EiJbNAwJFlAoo4gCKKKIAiRJkyEHDkQjWyEICBY1BELu4jQBIQYSRIgCGDQLNQw0EFc4ARcURDQSIls1DTQSJFs1CzQQIls1DzQQIQVbNQ4jrzQLFlA1EyOvNA0WUDUSI680DBZQI68hBDQOCRZQo4gBwkk1EDQTo4gBuTQSKKOIAbI0EKCIAayiiAGoSZMhBw5EI1s1ETQNNAwINRA0DDQLHTQQlzQRCTQPJQs0DgodJZc1DTQMNA8dIQSXNQ4krzQNFlA0DhYkr1A0DjQLHTQQlzQNDU01DCI0EQ5EI680EDQMIlsJFlAjrzQLNBEJNAwkWwkWUKOIATo0EjQTo4gBMqdENBEWNQRC7fc0ASEGEkSIAS00CzUMNBBXOAEXFEQ0EiJbNQ00EiRbNQs0ECJbNQ80ECEFWzUOI680DRZQNRMjrzQLFlA1EiOvNAwWUCOvIQQ0DgkWUKOIANdJNRA0E6OIAM40EiijiADHNBCgiADBoogAvUmTIQcORCNbNRE0CzQMCDUQNAw0DR00EJc0EQk0DyULNA4KHSWXNQs0DDQPHSEElzUOJK80CxZQNA4WJK9QNA40DR00EJc0Cw1NNQwiNBEORCOvNA00EQk0DCRbCRZQI680EDQMIlsJFlCjiABPNBM0EqOIAEenRDQRFjUEQu0MSIlMCUk1BjIJiACeiQlJQf/uSTUGiAC6iTYaARc1C0L3ujYaARc1C0L4DTYaARc1C0L4YDYaARc1C0L5SkkVgSBMCa9MUImxQv0oSSJbNRhJVwgJNRdJIRBbNRZJVxkQNRVJVykQNRNJVzkQNRJJV0kQNRFJV1k5NRCBkgFbNQ6JSSJbNRhJVwgJNRdJIRBbNRZJVxkQNRNJVykQNRJJVzkQNRFXSTk1EImxQvy4MRY0ACEICEk1AAlHAzgUMgoSRDgQIQYSRDgRTwISRDgSEkSJMRY0ACEICEk1AAlHAjgHMgoSRDgQIQgSRDgIEkSJIQg1A4k0Bgg1BolJIhJMNAISEUSJNAY0B0oPQf70Qv78sbIJQvxPsbIVQvxW`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `524`,
    1001: `525`,
    1002: `525`,
    1003: `526`,
    1004: `527`,
    1005: `527`,
    1006: `528`,
    1007: `528`,
    1008: `529`,
    1009: `529`,
    101: `21`,
    1010: `530`,
    1011: `530`,
    1012: `531`,
    1013: `531`,
    1014: `533`,
    1015: `533`,
    1016: `534`,
    1017: `534`,
    1018: `534`,
    1019: `536`,
    102: `21`,
    1020: `536`,
    1021: `537`,
    1022: `538`,
    1023: `538`,
    1024: `539`,
    1025: `540`,
    1026: `540`,
    1027: `541`,
    1028: `542`,
    1029: `543`,
    103: `21`,
    1030: `543`,
    1031: `544`,
    1032: `545`,
    1033: `545`,
    1034: `546`,
    1035: `547`,
    1036: `547`,
    1037: `548`,
    1038: `549`,
    1039: `549`,
    104: `21`,
    1040: `550`,
    1041: `551`,
    1042: `552`,
    1043: `553`,
    1044: `554`,
    1045: `554`,
    1046: `555`,
    1047: `555`,
    1048: `557`,
    1049: `557`,
    105: `21`,
    1050: `558`,
    1051: `558`,
    1052: `559`,
    1053: `560`,
    1054: `560`,
    1055: `561`,
    1056: `561`,
    1057: `561`,
    1058: `562`,
    1059: `563`,
    106: `21`,
    1060: `563`,
    1061: `564`,
    1062: `565`,
    1063: `565`,
    1064: `565`,
    1065: `566`,
    1066: `567`,
    1067: `568`,
    1068: `568`,
    1069: `569`,
    107: `21`,
    1070: `570`,
    1071: `570`,
    1072: `571`,
    1073: `572`,
    1074: `573`,
    1075: `574`,
    1076: `574`,
    1077: `575`,
    1078: `576`,
    1079: `577`,
    108: `21`,
    1080: `579`,
    1081: `579`,
    1082: `579`,
    1083: `580`,
    1084: `580`,
    1085: `580`,
    1086: `582`,
    1087: `582`,
    1088: `583`,
    1089: `583`,
    109: `21`,
    1090: `583`,
    1091: `584`,
    1092: `584`,
    1093: `585`,
    1094: `585`,
    1095: `586`,
    1096: `586`,
    1097: `587`,
    1098: `588`,
    1099: `588`,
    11: `2`,
    110: `21`,
    1100: `589`,
    1101: `589`,
    1102: `590`,
    1103: `590`,
    1104: `590`,
    1105: `591`,
    1106: `592`,
    1107: `593`,
    1108: `601`,
    1109: `601`,
    111: `21`,
    1110: `602`,
    1111: `603`,
    1112: `604`,
    1113: `604`,
    1114: `605`,
    1115: `605`,
    1116: `606`,
    1117: `607`,
    1118: `608`,
    1119: `608`,
    112: `21`,
    1120: `609`,
    1121: `609`,
    1122: `610`,
    1123: `611`,
    1124: `612`,
    1125: `613`,
    1126: `613`,
    1127: `614`,
    1128: `615`,
    1129: `616`,
    113: `21`,
    1130: `617`,
    1131: `617`,
    1132: `618`,
    1133: `618`,
    1134: `618`,
    1135: `619`,
    1136: `620`,
    1137: `621`,
    1138: `621`,
    1139: `622`,
    114: `21`,
    1140: `623`,
    1141: `624`,
    1142: `625`,
    1143: `626`,
    1144: `626`,
    1145: `627`,
    1146: `628`,
    1147: `629`,
    1148: `630`,
    1149: `630`,
    115: `21`,
    1150: `630`,
    1151: `631`,
    1152: `632`,
    1153: `632`,
    1154: `632`,
    1155: `634`,
    1156: `635`,
    1157: `636`,
    1158: `636`,
    1159: `637`,
    116: `21`,
    1160: `638`,
    1161: `639`,
    1162: `640`,
    1163: `641`,
    1164: `641`,
    1165: `643`,
    1166: `643`,
    1167: `644`,
    1168: `644`,
    1169: `645`,
    117: `21`,
    1170: `646`,
    1171: `654`,
    1172: `654`,
    1173: `655`,
    1174: `655`,
    1175: `655`,
    1176: `658`,
    1177: `658`,
    1178: `659`,
    1179: `659`,
    118: `21`,
    1180: `660`,
    1181: `660`,
    1182: `660`,
    1183: `663`,
    1184: `663`,
    1185: `664`,
    1186: `664`,
    1187: `664`,
    1188: `665`,
    1189: `666`,
    119: `21`,
    1190: `667`,
    1191: `667`,
    1192: `668`,
    1193: `669`,
    1194: `670`,
    1195: `671`,
    1196: `672`,
    1197: `672`,
    1198: `673`,
    1199: `674`,
    12: `2`,
    120: `21`,
    1200: `675`,
    1201: `676`,
    1202: `676`,
    1203: `676`,
    1204: `677`,
    1205: `678`,
    1206: `678`,
    1207: `678`,
    1208: `680`,
    1209: `681`,
    121: `21`,
    1210: `682`,
    1211: `682`,
    1212: `683`,
    1213: `684`,
    1214: `685`,
    1215: `686`,
    1216: `687`,
    1217: `687`,
    1218: `689`,
    1219: `689`,
    122: `21`,
    1220: `690`,
    1221: `690`,
    1222: `691`,
    1223: `692`,
    1224: `697`,
    1225: `697`,
    1226: `698`,
    1227: `698`,
    1228: `699`,
    1229: `700`,
    123: `21`,
    1230: `701`,
    1231: `702`,
    1232: `702`,
    1233: `703`,
    1234: `703`,
    1235: `704`,
    1236: `704`,
    1237: `705`,
    1238: `706`,
    1239: `707`,
    124: `21`,
    1240: `708`,
    1241: `708`,
    1242: `709`,
    1243: `709`,
    1244: `710`,
    1245: `711`,
    1246: `712`,
    1247: `712`,
    1248: `713`,
    1249: `714`,
    125: `21`,
    1250: `714`,
    1251: `715`,
    1252: `715`,
    1253: `716`,
    1254: `716`,
    1255: `717`,
    1256: `718`,
    1257: `718`,
    1258: `719`,
    1259: `719`,
    126: `21`,
    1260: `721`,
    1261: `721`,
    1262: `723`,
    1263: `723`,
    1264: `724`,
    1265: `724`,
    1266: `724`,
    1267: `725`,
    1268: `725`,
    1269: `725`,
    127: `21`,
    1270: `725`,
    1271: `725`,
    1272: `725`,
    1273: `725`,
    1274: `725`,
    1275: `725`,
    1276: `725`,
    1277: `726`,
    1278: `726`,
    1279: `727`,
    128: `21`,
    1280: `728`,
    1281: `729`,
    1282: `730`,
    1283: `730`,
    1284: `731`,
    1285: `732`,
    1286: `732`,
    1287: `733`,
    1288: `733`,
    1289: `734`,
    129: `21`,
    1290: `735`,
    1291: `735`,
    1292: `736`,
    1293: `737`,
    1294: `738`,
    1295: `738`,
    1296: `739`,
    1297: `739`,
    1298: `740`,
    1299: `741`,
    13: `2`,
    130: `21`,
    1300: `741`,
    1301: `742`,
    1302: `743`,
    1303: `744`,
    1304: `744`,
    1305: `745`,
    1306: `745`,
    1307: `746`,
    1308: `747`,
    1309: `747`,
    131: `21`,
    1310: `748`,
    1311: `749`,
    1312: `750`,
    1313: `750`,
    1314: `751`,
    1315: `751`,
    1316: `751`,
    1317: `751`,
    1318: `751`,
    1319: `751`,
    132: `21`,
    1320: `752`,
    1321: `752`,
    1322: `753`,
    1323: `754`,
    1324: `754`,
    1325: `755`,
    1326: `756`,
    1327: `756`,
    1328: `757`,
    1329: `758`,
    133: `21`,
    1330: `759`,
    1331: `759`,
    1332: `760`,
    1333: `761`,
    1334: `761`,
    1335: `762`,
    1336: `763`,
    1337: `765`,
    1338: `766`,
    1339: `766`,
    134: `21`,
    1340: `767`,
    1341: `768`,
    1342: `768`,
    1343: `769`,
    1344: `770`,
    1345: `771`,
    1346: `771`,
    1347: `772`,
    1348: `773`,
    1349: `773`,
    135: `21`,
    1350: `774`,
    1351: `775`,
    1352: `776`,
    1353: `776`,
    1354: `777`,
    1355: `777`,
    1356: `778`,
    1357: `778`,
    1358: `779`,
    1359: `780`,
    136: `21`,
    1360: `780`,
    1361: `781`,
    1362: `781`,
    1363: `782`,
    1364: `782`,
    1365: `783`,
    1366: `783`,
    1367: `784`,
    1368: `784`,
    1369: `785`,
    137: `21`,
    1370: `785`,
    1371: `785`,
    1372: `787`,
    1373: `787`,
    1374: `788`,
    1375: `789`,
    1376: `790`,
    1377: `790`,
    1378: `791`,
    1379: `791`,
    138: `21`,
    1380: `792`,
    1381: `792`,
    1382: `792`,
    1383: `793`,
    1384: `793`,
    1385: `794`,
    1386: `794`,
    1387: `795`,
    1388: `796`,
    1389: `797`,
    139: `21`,
    1390: `797`,
    1391: `798`,
    1392: `798`,
    1393: `799`,
    1394: `800`,
    1395: `801`,
    1396: `801`,
    1397: `802`,
    1398: `802`,
    1399: `803`,
    14: `2`,
    140: `21`,
    1400: `804`,
    1401: `805`,
    1402: `805`,
    1403: `806`,
    1404: `806`,
    1405: `807`,
    1406: `807`,
    1407: `808`,
    1408: `809`,
    1409: `809`,
    141: `21`,
    1410: `810`,
    1411: `811`,
    1412: `811`,
    1413: `812`,
    1414: `812`,
    1415: `813`,
    1416: `813`,
    1417: `814`,
    1418: `815`,
    1419: `815`,
    142: `21`,
    1420: `816`,
    1421: `817`,
    1422: `817`,
    1423: `818`,
    1424: `818`,
    1425: `819`,
    1426: `820`,
    1427: `821`,
    1428: `821`,
    1429: `822`,
    143: `21`,
    1430: `823`,
    1431: `831`,
    1432: `831`,
    1433: `832`,
    1434: `833`,
    1435: `834`,
    1436: `834`,
    1437: `835`,
    1438: `836`,
    1439: `844`,
    144: `21`,
    1440: `844`,
    1441: `845`,
    1442: `845`,
    1443: `846`,
    1444: `846`,
    1445: `846`,
    1446: `849`,
    1447: `849`,
    1448: `850`,
    1449: `851`,
    145: `21`,
    1450: `852`,
    1451: `852`,
    1452: `853`,
    1453: `854`,
    1454: `854`,
    1455: `855`,
    1456: `855`,
    1457: `856`,
    1458: `856`,
    1459: `857`,
    146: `21`,
    1460: `858`,
    1461: `858`,
    1462: `859`,
    1463: `859`,
    1464: `860`,
    1465: `860`,
    1466: `861`,
    1467: `862`,
    1468: `862`,
    1469: `863`,
    147: `21`,
    1470: `863`,
    1471: `864`,
    1472: `864`,
    1473: `865`,
    1474: `866`,
    1475: `866`,
    1476: `867`,
    1477: `867`,
    1478: `869`,
    1479: `869`,
    148: `21`,
    1480: `870`,
    1481: `870`,
    1482: `870`,
    1483: `871`,
    1484: `871`,
    1485: `873`,
    1486: `873`,
    1487: `874`,
    1488: `874`,
    1489: `875`,
    149: `21`,
    1490: `875`,
    1491: `875`,
    1492: `876`,
    1493: `876`,
    1494: `877`,
    1495: `878`,
    1496: `878`,
    1497: `879`,
    1498: `880`,
    1499: `881`,
    15: `2`,
    150: `21`,
    1500: `881`,
    1501: `882`,
    1502: `882`,
    1503: `882`,
    1504: `882`,
    1505: `882`,
    1506: `882`,
    1507: `882`,
    1508: `882`,
    1509: `882`,
    151: `21`,
    1510: `882`,
    1511: `883`,
    1512: `883`,
    1513: `884`,
    1514: `885`,
    1515: `886`,
    1516: `886`,
    1517: `887`,
    1518: `887`,
    1519: `888`,
    152: `21`,
    1520: `888`,
    1521: `889`,
    1522: `890`,
    1523: `890`,
    1524: `891`,
    1525: `892`,
    1526: `893`,
    1527: `893`,
    1528: `894`,
    1529: `894`,
    153: `21`,
    1530: `895`,
    1531: `896`,
    1532: `896`,
    1533: `897`,
    1534: `898`,
    1535: `899`,
    1536: `899`,
    1537: `900`,
    1538: `900`,
    1539: `900`,
    154: `21`,
    1540: `900`,
    1541: `900`,
    1542: `900`,
    1543: `901`,
    1544: `901`,
    1545: `902`,
    1546: `903`,
    1547: `903`,
    1548: `904`,
    1549: `905`,
    155: `21`,
    1550: `906`,
    1551: `906`,
    1552: `907`,
    1553: `908`,
    1554: `908`,
    1555: `909`,
    1556: `910`,
    1557: `910`,
    1558: `911`,
    1559: `912`,
    156: `21`,
    1560: `914`,
    1561: `915`,
    1562: `915`,
    1563: `916`,
    1564: `917`,
    1565: `917`,
    1566: `918`,
    1567: `919`,
    1568: `920`,
    1569: `920`,
    157: `21`,
    1570: `921`,
    1571: `922`,
    1572: `922`,
    1573: `923`,
    1574: `924`,
    1575: `925`,
    1576: `925`,
    1577: `926`,
    1578: `926`,
    1579: `927`,
    158: `21`,
    1580: `927`,
    1581: `928`,
    1582: `929`,
    1583: `929`,
    1584: `930`,
    1585: `930`,
    1586: `931`,
    1587: `931`,
    1588: `932`,
    1589: `932`,
    159: `21`,
    1590: `933`,
    1591: `933`,
    1592: `934`,
    1593: `934`,
    1594: `934`,
    1595: `936`,
    1596: `936`,
    1597: `937`,
    1598: `938`,
    1599: `939`,
    16: `2`,
    160: `21`,
    1600: `939`,
    1601: `940`,
    1602: `940`,
    1603: `941`,
    1604: `942`,
    1605: `943`,
    1606: `943`,
    1607: `944`,
    1608: `944`,
    1609: `945`,
    161: `21`,
    1610: `945`,
    1611: `945`,
    1612: `946`,
    1613: `947`,
    1614: `948`,
    1615: `958`,
    1616: `958`,
    1617: `959`,
    1618: `960`,
    1619: `961`,
    162: `21`,
    1620: `961`,
    1621: `962`,
    1622: `962`,
    1623: `963`,
    1624: `964`,
    1625: `965`,
    1626: `965`,
    1627: `966`,
    1628: `966`,
    1629: `967`,
    163: `21`,
    1630: `968`,
    1631: `969`,
    1632: `969`,
    1633: `970`,
    1634: `970`,
    1635: `971`,
    1636: `971`,
    1637: `972`,
    1638: `973`,
    1639: `973`,
    164: `21`,
    1640: `974`,
    1641: `974`,
    1642: `975`,
    1643: `975`,
    1644: `976`,
    1645: `977`,
    1646: `977`,
    1647: `978`,
    1648: `979`,
    1649: `980`,
    165: `21`,
    1650: `980`,
    1651: `981`,
    1652: `982`,
    1653: `983`,
    1654: `983`,
    1655: `984`,
    1656: `985`,
    1657: `986`,
    1658: `986`,
    1659: `987`,
    166: `21`,
    1660: `988`,
    1661: `989`,
    1662: `990`,
    1663: `991`,
    1664: `991`,
    1665: `992`,
    1666: `992`,
    1667: `993`,
    1668: `994`,
    1669: `995`,
    167: `21`,
    1670: `996`,
    1671: `997`,
    1672: `997`,
    1673: `997`,
    1674: `998`,
    1675: `998`,
    1676: `999`,
    1677: `1000`,
    1678: `1000`,
    1679: `1000`,
    168: `21`,
    1680: `1001`,
    1681: `1002`,
    1682: `1003`,
    1683: `1003`,
    1684: `1004`,
    1685: `1005`,
    1686: `1006`,
    1687: `1007`,
    1688: `1008`,
    1689: `1008`,
    169: `21`,
    1690: `1008`,
    1691: `1009`,
    1692: `1010`,
    1693: `1010`,
    1694: `1010`,
    1695: `1012`,
    1696: `1013`,
    1697: `1014`,
    1698: `1014`,
    1699: `1015`,
    17: `2`,
    170: `21`,
    1700: `1016`,
    1701: `1017`,
    1702: `1018`,
    1703: `1019`,
    1704: `1019`,
    1705: `1020`,
    1706: `1021`,
    1707: `1021`,
    1708: `1022`,
    1709: `1022`,
    171: `21`,
    1710: `1023`,
    1711: `1023`,
    1712: `1024`,
    1713: `1025`,
    1714: `1040`,
    1715: `1040`,
    1716: `1041`,
    1717: `1041`,
    1718: `1042`,
    1719: `1043`,
    172: `21`,
    1720: `1043`,
    1721: `1044`,
    1722: `1044`,
    1723: `1045`,
    1724: `1045`,
    1725: `1046`,
    1726: `1047`,
    1727: `1047`,
    1728: `1048`,
    1729: `1048`,
    173: `21`,
    1730: `1049`,
    1731: `1049`,
    1732: `1050`,
    1733: `1051`,
    1734: `1051`,
    1735: `1052`,
    1736: `1053`,
    1737: `1053`,
    1738: `1054`,
    1739: `1055`,
    174: `21`,
    1740: `1055`,
    1741: `1056`,
    1742: `1057`,
    1743: `1058`,
    1744: `1058`,
    1745: `1059`,
    1746: `1060`,
    1747: `1061`,
    1748: `1062`,
    1749: `1063`,
    175: `21`,
    1750: `1063`,
    1751: `1064`,
    1752: `1064`,
    1753: `1065`,
    1754: `1065`,
    1755: `1066`,
    1756: `1067`,
    1757: `1067`,
    1758: `1068`,
    1759: `1069`,
    176: `21`,
    1760: `1069`,
    1761: `1070`,
    1762: `1071`,
    1763: `1072`,
    1764: `1072`,
    1765: `1073`,
    1766: `1074`,
    1767: `1075`,
    1768: `1075`,
    1769: `1076`,
    177: `21`,
    1770: `1077`,
    1771: `1078`,
    1772: `1079`,
    1773: `1080`,
    1774: `1080`,
    1775: `1081`,
    1776: `1081`,
    1777: `1082`,
    1778: `1083`,
    1779: `1083`,
    178: `21`,
    1780: `1084`,
    1781: `1085`,
    1782: `1085`,
    1783: `1086`,
    1784: `1087`,
    1785: `1088`,
    1786: `1089`,
    1787: `1089`,
    1788: `1090`,
    1789: `1091`,
    179: `21`,
    1790: `1092`,
    1791: `1092`,
    1792: `1093`,
    1793: `1093`,
    1794: `1094`,
    1795: `1095`,
    1796: `1096`,
    1797: `1096`,
    1798: `1097`,
    1799: `1097`,
    18: `2`,
    180: `21`,
    1800: `1098`,
    1801: `1098`,
    1802: `1099`,
    1803: `1100`,
    1804: `1100`,
    1805: `1101`,
    1806: `1102`,
    1807: `1102`,
    1808: `1103`,
    1809: `1104`,
    181: `22`,
    1810: `1104`,
    1811: `1105`,
    1812: `1105`,
    1813: `1106`,
    1814: `1106`,
    1815: `1107`,
    1816: `1108`,
    1817: `1108`,
    1818: `1109`,
    1819: `1110`,
    182: `22`,
    1820: `1110`,
    1821: `1111`,
    1822: `1112`,
    1823: `1113`,
    1824: `1113`,
    1825: `1114`,
    1826: `1115`,
    1827: `1116`,
    1828: `1126`,
    1829: `1127`,
    183: `22`,
    1830: `1128`,
    1831: `1128`,
    1832: `1129`,
    1833: `1130`,
    1834: `1131`,
    1835: `1132`,
    1836: `1133`,
    1837: `1133`,
    1838: `1134`,
    1839: `1135`,
    184: `23`,
    1840: `1136`,
    1841: `1137`,
    1842: `1137`,
    1843: `1137`,
    1844: `1138`,
    1845: `1138`,
    1846: `1139`,
    1847: `1140`,
    1848: `1141`,
    1849: `1141`,
    185: `23`,
    1850: `1142`,
    1851: `1143`,
    1852: `1144`,
    1853: `1145`,
    1854: `1145`,
    1855: `1145`,
    1856: `1146`,
    1857: `1147`,
    1858: `1157`,
    1859: `1157`,
    186: `23`,
    1860: `1158`,
    1861: `1158`,
    1862: `1158`,
    1863: `1161`,
    1864: `1161`,
    1865: `1163`,
    1866: `1163`,
    1867: `1164`,
    1868: `1164`,
    1869: `1164`,
    187: `23`,
    1870: `1165`,
    1871: `1165`,
    1872: `1167`,
    1873: `1167`,
    1874: `1168`,
    1875: `1168`,
    1876: `1169`,
    1877: `1169`,
    1878: `1169`,
    1879: `1170`,
    188: `23`,
    1880: `1170`,
    1881: `1171`,
    1882: `1172`,
    1883: `1172`,
    1884: `1173`,
    1885: `1174`,
    1886: `1175`,
    1887: `1175`,
    1888: `1176`,
    1889: `1176`,
    189: `23`,
    1890: `1176`,
    1891: `1176`,
    1892: `1176`,
    1893: `1176`,
    1894: `1176`,
    1895: `1176`,
    1896: `1176`,
    1897: `1176`,
    1898: `1177`,
    1899: `1177`,
    19: `2`,
    190: `23`,
    1900: `1178`,
    1901: `1179`,
    1902: `1180`,
    1903: `1180`,
    1904: `1181`,
    1905: `1181`,
    1906: `1182`,
    1907: `1182`,
    1908: `1183`,
    1909: `1184`,
    191: `23`,
    1910: `1185`,
    1911: `1186`,
    1912: `1187`,
    1913: `1187`,
    1914: `1188`,
    1915: `1188`,
    1916: `1189`,
    1917: `1190`,
    1918: `1190`,
    1919: `1191`,
    192: `23`,
    1920: `1192`,
    1921: `1193`,
    1922: `1193`,
    1923: `1194`,
    1924: `1195`,
    1925: `1195`,
    1926: `1196`,
    1927: `1197`,
    1928: `1197`,
    1929: `1198`,
    193: `23`,
    1930: `1199`,
    1931: `1199`,
    1932: `1200`,
    1933: `1201`,
    1934: `1201`,
    1935: `1202`,
    1936: `1203`,
    1937: `1205`,
    1938: `1206`,
    1939: `1206`,
    194: `23`,
    1940: `1207`,
    1941: `1208`,
    1942: `1208`,
    1943: `1209`,
    1944: `1210`,
    1945: `1211`,
    1946: `1211`,
    1947: `1212`,
    1948: `1213`,
    1949: `1214`,
    195: `23`,
    1950: `1214`,
    1951: `1215`,
    1952: `1216`,
    1953: `1217`,
    1954: `1217`,
    1955: `1218`,
    1956: `1219`,
    1957: `1220`,
    1958: `1220`,
    1959: `1221`,
    196: `23`,
    1960: `1222`,
    1961: `1223`,
    1962: `1224`,
    1963: `1224`,
    1964: `1225`,
    1965: `1225`,
    1966: `1226`,
    1967: `1226`,
    1968: `1227`,
    1969: `1228`,
    197: `23`,
    1970: `1228`,
    1971: `1229`,
    1972: `1230`,
    1973: `1230`,
    1974: `1231`,
    1975: `1231`,
    1976: `1232`,
    1977: `1232`,
    1978: `1233`,
    1979: `1233`,
    198: `23`,
    1980: `1234`,
    1981: `1234`,
    1982: `1235`,
    1983: `1235`,
    1984: `1235`,
    1985: `1237`,
    1986: `1237`,
    1987: `1238`,
    1988: `1239`,
    1989: `1240`,
    199: `23`,
    1990: `1240`,
    1991: `1241`,
    1992: `1241`,
    1993: `1242`,
    1994: `1243`,
    1995: `1244`,
    1996: `1244`,
    1997: `1245`,
    1998: `1245`,
    1999: `1246`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1246`,
    2001: `1246`,
    2002: `1247`,
    2003: `1248`,
    2004: `1249`,
    2005: `1259`,
    2006: `1259`,
    2007: `1260`,
    2008: `1261`,
    2009: `1262`,
    201: `23`,
    2010: `1262`,
    2011: `1263`,
    2012: `1263`,
    2013: `1264`,
    2014: `1265`,
    2015: `1266`,
    2016: `1266`,
    2017: `1267`,
    2018: `1267`,
    2019: `1268`,
    202: `23`,
    2020: `1269`,
    2021: `1270`,
    2022: `1270`,
    2023: `1271`,
    2024: `1271`,
    2025: `1272`,
    2026: `1272`,
    2027: `1273`,
    2028: `1274`,
    2029: `1274`,
    203: `23`,
    2030: `1275`,
    2031: `1275`,
    2032: `1276`,
    2033: `1276`,
    2034: `1277`,
    2035: `1278`,
    2036: `1278`,
    2037: `1279`,
    2038: `1280`,
    2039: `1281`,
    204: `23`,
    2040: `1281`,
    2041: `1282`,
    2042: `1283`,
    2043: `1284`,
    2044: `1284`,
    2045: `1285`,
    2046: `1286`,
    2047: `1287`,
    2048: `1287`,
    2049: `1288`,
    205: `23`,
    2050: `1289`,
    2051: `1290`,
    2052: `1291`,
    2053: `1292`,
    2054: `1292`,
    2055: `1293`,
    2056: `1293`,
    2057: `1294`,
    2058: `1295`,
    2059: `1296`,
    206: `23`,
    2060: `1297`,
    2061: `1298`,
    2062: `1298`,
    2063: `1298`,
    2064: `1299`,
    2065: `1299`,
    2066: `1300`,
    2067: `1301`,
    2068: `1301`,
    2069: `1301`,
    207: `23`,
    2070: `1302`,
    2071: `1303`,
    2072: `1304`,
    2073: `1304`,
    2074: `1305`,
    2075: `1306`,
    2076: `1307`,
    2077: `1308`,
    2078: `1309`,
    2079: `1309`,
    208: `23`,
    2080: `1309`,
    2081: `1310`,
    2082: `1311`,
    2083: `1311`,
    2084: `1311`,
    2085: `1313`,
    2086: `1314`,
    2087: `1315`,
    2088: `1315`,
    2089: `1316`,
    209: `23`,
    2090: `1317`,
    2091: `1318`,
    2092: `1319`,
    2093: `1320`,
    2094: `1320`,
    2095: `1321`,
    2096: `1322`,
    2097: `1322`,
    2098: `1323`,
    2099: `1323`,
    21: `2`,
    210: `23`,
    2100: `1324`,
    2101: `1324`,
    2102: `1325`,
    2103: `1326`,
    2104: `1341`,
    2105: `1341`,
    2106: `1342`,
    2107: `1342`,
    2108: `1343`,
    2109: `1344`,
    211: `23`,
    2110: `1344`,
    2111: `1345`,
    2112: `1345`,
    2113: `1346`,
    2114: `1346`,
    2115: `1347`,
    2116: `1348`,
    2117: `1348`,
    2118: `1349`,
    2119: `1349`,
    212: `23`,
    2120: `1350`,
    2121: `1350`,
    2122: `1351`,
    2123: `1352`,
    2124: `1352`,
    2125: `1353`,
    2126: `1354`,
    2127: `1354`,
    2128: `1355`,
    2129: `1356`,
    213: `23`,
    2130: `1356`,
    2131: `1357`,
    2132: `1358`,
    2133: `1359`,
    2134: `1359`,
    2135: `1360`,
    2136: `1361`,
    2137: `1362`,
    2138: `1363`,
    2139: `1364`,
    214: `23`,
    2140: `1364`,
    2141: `1365`,
    2142: `1365`,
    2143: `1366`,
    2144: `1366`,
    2145: `1367`,
    2146: `1368`,
    2147: `1368`,
    2148: `1369`,
    2149: `1370`,
    215: `23`,
    2150: `1370`,
    2151: `1371`,
    2152: `1372`,
    2153: `1373`,
    2154: `1373`,
    2155: `1374`,
    2156: `1375`,
    2157: `1376`,
    2158: `1376`,
    2159: `1377`,
    216: `23`,
    2160: `1378`,
    2161: `1379`,
    2162: `1380`,
    2163: `1381`,
    2164: `1381`,
    2165: `1382`,
    2166: `1382`,
    2167: `1383`,
    2168: `1384`,
    2169: `1384`,
    217: `23`,
    2170: `1385`,
    2171: `1386`,
    2172: `1386`,
    2173: `1387`,
    2174: `1388`,
    2175: `1389`,
    2176: `1390`,
    2177: `1390`,
    2178: `1391`,
    2179: `1392`,
    218: `25`,
    2180: `1393`,
    2181: `1393`,
    2182: `1394`,
    2183: `1394`,
    2184: `1395`,
    2185: `1396`,
    2186: `1397`,
    2187: `1397`,
    2188: `1398`,
    2189: `1398`,
    219: `28`,
    2190: `1399`,
    2191: `1399`,
    2192: `1400`,
    2193: `1401`,
    2194: `1401`,
    2195: `1402`,
    2196: `1402`,
    2197: `1403`,
    2198: `1403`,
    2199: `1404`,
    22: `2`,
    220: `28`,
    2200: `1405`,
    2201: `1405`,
    2202: `1406`,
    2203: `1407`,
    2204: `1407`,
    2205: `1408`,
    2206: `1409`,
    2207: `1409`,
    2208: `1410`,
    2209: `1411`,
    221: `29`,
    2210: `1411`,
    2211: `1412`,
    2212: `1413`,
    2213: `1414`,
    2214: `1414`,
    2215: `1415`,
    2216: `1416`,
    2217: `1417`,
    2218: `1427`,
    2219: `1428`,
    222: `29`,
    2220: `1429`,
    2221: `1429`,
    2222: `1430`,
    2223: `1431`,
    2224: `1432`,
    2225: `1433`,
    2226: `1434`,
    2227: `1434`,
    2228: `1435`,
    2229: `1436`,
    223: `30`,
    2230: `1437`,
    2231: `1438`,
    2232: `1438`,
    2233: `1438`,
    2234: `1439`,
    2235: `1440`,
    2236: `1441`,
    2237: `1441`,
    2238: `1442`,
    2239: `1443`,
    224: `31`,
    2240: `1444`,
    2241: `1444`,
    2242: `1445`,
    2243: `1446`,
    2244: `1446`,
    2245: `1446`,
    2246: `1447`,
    2247: `1448`,
    2248: `1458`,
    2249: `1458`,
    225: `31`,
    2250: `1459`,
    2251: `1459`,
    2252: `1460`,
    2253: `1460`,
    2254: `1460`,
    2255: `1463`,
    2256: `1463`,
    2257: `1465`,
    2258: `1465`,
    2259: `1466`,
    226: `31`,
    2260: `1466`,
    2261: `1466`,
    2262: `1467`,
    2263: `1467`,
    2264: `1469`,
    2265: `1469`,
    2266: `1470`,
    2267: `1470`,
    2268: `1471`,
    2269: `1471`,
    227: `32`,
    2270: `1471`,
    2271: `1472`,
    2272: `1472`,
    2273: `1473`,
    2274: `1474`,
    2275: `1474`,
    2276: `1475`,
    2277: `1476`,
    2278: `1477`,
    2279: `1477`,
    228: `32`,
    2280: `1478`,
    2281: `1478`,
    2282: `1478`,
    2283: `1478`,
    2284: `1478`,
    2285: `1478`,
    2286: `1478`,
    2287: `1478`,
    2288: `1478`,
    2289: `1478`,
    229: `33`,
    2290: `1479`,
    2291: `1479`,
    2292: `1480`,
    2293: `1481`,
    2294: `1482`,
    2295: `1482`,
    2296: `1483`,
    2297: `1483`,
    2298: `1484`,
    2299: `1485`,
    23: `2`,
    230: `33`,
    2300: `1486`,
    2301: `1486`,
    2302: `1487`,
    2303: `1488`,
    2304: `1489`,
    2305: `1489`,
    2306: `1490`,
    2307: `1490`,
    2308: `1491`,
    2309: `1492`,
    231: `34`,
    2310: `1492`,
    2311: `1493`,
    2312: `1494`,
    2313: `1495`,
    2314: `1495`,
    2315: `1496`,
    2316: `1497`,
    2317: `1497`,
    2318: `1498`,
    2319: `1499`,
    232: `35`,
    2320: `1499`,
    2321: `1500`,
    2322: `1501`,
    2323: `1501`,
    2324: `1502`,
    2325: `1503`,
    2326: `1503`,
    2327: `1504`,
    2328: `1505`,
    2329: `1507`,
    233: `38`,
    2330: `1508`,
    2331: `1508`,
    2332: `1509`,
    2333: `1510`,
    2334: `1510`,
    2335: `1511`,
    2336: `1512`,
    2337: `1513`,
    2338: `1513`,
    2339: `1514`,
    234: `38`,
    2340: `1515`,
    2341: `1516`,
    2342: `1516`,
    2343: `1517`,
    2344: `1518`,
    2345: `1519`,
    2346: `1519`,
    2347: `1520`,
    2348: `1521`,
    2349: `1522`,
    235: `38`,
    2350: `1522`,
    2351: `1523`,
    2352: `1524`,
    2353: `1525`,
    2354: `1526`,
    2355: `1526`,
    2356: `1527`,
    2357: `1527`,
    2358: `1528`,
    2359: `1528`,
    236: `39`,
    2360: `1529`,
    2361: `1530`,
    2362: `1530`,
    2363: `1531`,
    2364: `1531`,
    2365: `1532`,
    2366: `1532`,
    2367: `1533`,
    2368: `1533`,
    2369: `1534`,
    237: `39`,
    2370: `1534`,
    2371: `1535`,
    2372: `1535`,
    2373: `1535`,
    2374: `1537`,
    2375: `1537`,
    2376: `1538`,
    2377: `1539`,
    2378: `1540`,
    2379: `1540`,
    238: `40`,
    2380: `1541`,
    2381: `1541`,
    2382: `1542`,
    2383: `1542`,
    2384: `1542`,
    2385: `1543`,
    2386: `1544`,
    2387: `1545`,
    2388: `1555`,
    2389: `1555`,
    239: `41`,
    2390: `1556`,
    2391: `1557`,
    2392: `1558`,
    2393: `1558`,
    2394: `1559`,
    2395: `1559`,
    2396: `1560`,
    2397: `1561`,
    2398: `1562`,
    2399: `1562`,
    24: `2`,
    240: `41`,
    2400: `1563`,
    2401: `1563`,
    2402: `1564`,
    2403: `1565`,
    2404: `1566`,
    2405: `1566`,
    2406: `1567`,
    2407: `1567`,
    2408: `1568`,
    2409: `1568`,
    241: `42`,
    2410: `1569`,
    2411: `1570`,
    2412: `1570`,
    2413: `1571`,
    2414: `1572`,
    2415: `1573`,
    2416: `1573`,
    2417: `1574`,
    2418: `1575`,
    2419: `1576`,
    242: `42`,
    2420: `1576`,
    2421: `1577`,
    2422: `1578`,
    2423: `1579`,
    2424: `1579`,
    2425: `1580`,
    2426: `1581`,
    2427: `1582`,
    2428: `1582`,
    2429: `1583`,
    243: `42`,
    2430: `1584`,
    2431: `1585`,
    2432: `1585`,
    2433: `1586`,
    2434: `1587`,
    2435: `1588`,
    2436: `1589`,
    2437: `1590`,
    2438: `1590`,
    2439: `1591`,
    244: `43`,
    2440: `1591`,
    2441: `1592`,
    2442: `1593`,
    2443: `1594`,
    2444: `1595`,
    2445: `1596`,
    2446: `1596`,
    2447: `1596`,
    2448: `1597`,
    2449: `1598`,
    245: `43`,
    2450: `1598`,
    2451: `1599`,
    2452: `1599`,
    2453: `1600`,
    2454: `1601`,
    2455: `1601`,
    2456: `1601`,
    2457: `1602`,
    2458: `1602`,
    2459: `1603`,
    246: `44`,
    2460: `1604`,
    2461: `1605`,
    2462: `1605`,
    2463: `1605`,
    2464: `1606`,
    2465: `1606`,
    2466: `1607`,
    2467: `1608`,
    2468: `1608`,
    2469: `1608`,
    247: `44`,
    2470: `1609`,
    2471: `1610`,
    2472: `1610`,
    2473: `1610`,
    2474: `1612`,
    2475: `1613`,
    2476: `1614`,
    2477: `1614`,
    2478: `1615`,
    2479: `1616`,
    248: `44`,
    2480: `1617`,
    2481: `1618`,
    2482: `1619`,
    2483: `1619`,
    2484: `1620`,
    2485: `1620`,
    2486: `1621`,
    2487: `1621`,
    2488: `1622`,
    2489: `1623`,
    249: `45`,
    2490: `1623`,
    2491: `1624`,
    2492: `1624`,
    2493: `1625`,
    2494: `1625`,
    2495: `1626`,
    2496: `1627`,
    2497: `1627`,
    2498: `1628`,
    2499: `1629`,
    25: `2`,
    250: `46`,
    2500: `1629`,
    2501: `1630`,
    2502: `1631`,
    2503: `1631`,
    2504: `1632`,
    2505: `1633`,
    2506: `1634`,
    2507: `1634`,
    2508: `1635`,
    2509: `1636`,
    251: `47`,
    2510: `1637`,
    2511: `1638`,
    2512: `1639`,
    2513: `1639`,
    2514: `1640`,
    2515: `1640`,
    2516: `1641`,
    2517: `1641`,
    2518: `1642`,
    2519: `1643`,
    252: `47`,
    2520: `1643`,
    2521: `1644`,
    2522: `1645`,
    2523: `1645`,
    2524: `1646`,
    2525: `1647`,
    2526: `1648`,
    2527: `1648`,
    2528: `1649`,
    2529: `1650`,
    253: `48`,
    2530: `1651`,
    2531: `1651`,
    2532: `1652`,
    2533: `1653`,
    2534: `1654`,
    2535: `1655`,
    2536: `1656`,
    2537: `1656`,
    2538: `1657`,
    2539: `1657`,
    254: `48`,
    2540: `1658`,
    2541: `1659`,
    2542: `1659`,
    2543: `1660`,
    2544: `1661`,
    2545: `1661`,
    2546: `1662`,
    2547: `1663`,
    2548: `1664`,
    2549: `1665`,
    255: `48`,
    2550: `1665`,
    2551: `1666`,
    2552: `1667`,
    2553: `1668`,
    2554: `1668`,
    2555: `1669`,
    2556: `1669`,
    2557: `1670`,
    2558: `1671`,
    2559: `1672`,
    256: `49`,
    2560: `1672`,
    2561: `1673`,
    2562: `1673`,
    2563: `1674`,
    2564: `1674`,
    2565: `1675`,
    2566: `1676`,
    2567: `1676`,
    2568: `1677`,
    2569: `1677`,
    257: `49`,
    2570: `1678`,
    2571: `1678`,
    2572: `1679`,
    2573: `1680`,
    2574: `1680`,
    2575: `1681`,
    2576: `1682`,
    2577: `1682`,
    2578: `1683`,
    2579: `1683`,
    258: `50`,
    2580: `1684`,
    2581: `1685`,
    2582: `1686`,
    2583: `1686`,
    2584: `1687`,
    2585: `1688`,
    2586: `1698`,
    2587: `1699`,
    2588: `1700`,
    2589: `1700`,
    259: `50`,
    2590: `1701`,
    2591: `1702`,
    2592: `1703`,
    2593: `1704`,
    2594: `1705`,
    2595: `1705`,
    2596: `1706`,
    2597: `1707`,
    2598: `1708`,
    2599: `1709`,
    26: `2`,
    260: `50`,
    2600: `1709`,
    2601: `1709`,
    2602: `1710`,
    2603: `1710`,
    2604: `1711`,
    2605: `1711`,
    2606: `1712`,
    2607: `1713`,
    2608: `1713`,
    2609: `1713`,
    261: `51`,
    2610: `1714`,
    2611: `1715`,
    2612: `1725`,
    2613: `1725`,
    2614: `1726`,
    2615: `1726`,
    2616: `1726`,
    2617: `1729`,
    2618: `1729`,
    2619: `1731`,
    262: `52`,
    2620: `1731`,
    2621: `1733`,
    2622: `1733`,
    2623: `1734`,
    2624: `1734`,
    2625: `1734`,
    2626: `1735`,
    2627: `1736`,
    2628: `1737`,
    2629: `1737`,
    263: `53`,
    2630: `1738`,
    2631: `1739`,
    2632: `1740`,
    2633: `1740`,
    2634: `1741`,
    2635: `1741`,
    2636: `1741`,
    2637: `1741`,
    2638: `1741`,
    2639: `1741`,
    264: `53`,
    2640: `1741`,
    2641: `1741`,
    2642: `1741`,
    2643: `1741`,
    2644: `1742`,
    2645: `1742`,
    2646: `1743`,
    2647: `1744`,
    2648: `1745`,
    2649: `1745`,
    265: `54`,
    2650: `1746`,
    2651: `1746`,
    2652: `1747`,
    2653: `1747`,
    2654: `1748`,
    2655: `1749`,
    2656: `1750`,
    2657: `1751`,
    2658: `1752`,
    2659: `1752`,
    266: `54`,
    2660: `1753`,
    2661: `1753`,
    2662: `1754`,
    2663: `1755`,
    2664: `1755`,
    2665: `1756`,
    2666: `1757`,
    2667: `1758`,
    2668: `1758`,
    2669: `1759`,
    267: `54`,
    2670: `1760`,
    2671: `1760`,
    2672: `1761`,
    2673: `1762`,
    2674: `1762`,
    2675: `1763`,
    2676: `1764`,
    2677: `1764`,
    2678: `1765`,
    2679: `1766`,
    268: `55`,
    2680: `1766`,
    2681: `1767`,
    2682: `1768`,
    2683: `1770`,
    2684: `1771`,
    2685: `1771`,
    2686: `1772`,
    2687: `1773`,
    2688: `1773`,
    2689: `1774`,
    269: `55`,
    2690: `1775`,
    2691: `1776`,
    2692: `1776`,
    2693: `1777`,
    2694: `1778`,
    2695: `1779`,
    2696: `1779`,
    2697: `1780`,
    2698: `1781`,
    2699: `1782`,
    27: `2`,
    270: `56`,
    2700: `1782`,
    2701: `1783`,
    2702: `1784`,
    2703: `1785`,
    2704: `1785`,
    2705: `1786`,
    2706: `1787`,
    2707: `1788`,
    2708: `1789`,
    2709: `1789`,
    271: `56`,
    2710: `1790`,
    2711: `1790`,
    2712: `1791`,
    2713: `1791`,
    2714: `1792`,
    2715: `1793`,
    2716: `1793`,
    2717: `1794`,
    2718: `1794`,
    2719: `1795`,
    272: `56`,
    2720: `1795`,
    2721: `1796`,
    2722: `1796`,
    2723: `1797`,
    2724: `1797`,
    2725: `1798`,
    2726: `1798`,
    2727: `1798`,
    2728: `1800`,
    2729: `1800`,
    273: `57`,
    2730: `1801`,
    2731: `1802`,
    2732: `1803`,
    2733: `1803`,
    2734: `1804`,
    2735: `1804`,
    2736: `1805`,
    2737: `1805`,
    2738: `1805`,
    2739: `1806`,
    274: `58`,
    2740: `1807`,
    2741: `1808`,
    2742: `1818`,
    2743: `1818`,
    2744: `1819`,
    2745: `1820`,
    2746: `1821`,
    2747: `1821`,
    2748: `1822`,
    2749: `1822`,
    275: `58`,
    2750: `1823`,
    2751: `1824`,
    2752: `1825`,
    2753: `1825`,
    2754: `1826`,
    2755: `1826`,
    2756: `1827`,
    2757: `1828`,
    2758: `1829`,
    2759: `1829`,
    276: `59`,
    2760: `1830`,
    2761: `1830`,
    2762: `1831`,
    2763: `1831`,
    2764: `1832`,
    2765: `1833`,
    2766: `1833`,
    2767: `1834`,
    2768: `1835`,
    2769: `1836`,
    277: `59`,
    2770: `1836`,
    2771: `1837`,
    2772: `1838`,
    2773: `1839`,
    2774: `1839`,
    2775: `1840`,
    2776: `1841`,
    2777: `1842`,
    2778: `1842`,
    2779: `1843`,
    278: `59`,
    2780: `1844`,
    2781: `1845`,
    2782: `1845`,
    2783: `1846`,
    2784: `1847`,
    2785: `1848`,
    2786: `1848`,
    2787: `1849`,
    2788: `1850`,
    2789: `1851`,
    279: `60`,
    2790: `1852`,
    2791: `1853`,
    2792: `1853`,
    2793: `1854`,
    2794: `1854`,
    2795: `1855`,
    2796: `1856`,
    2797: `1857`,
    2798: `1858`,
    2799: `1859`,
    28: `2`,
    280: `61`,
    2800: `1859`,
    2801: `1859`,
    2802: `1860`,
    2803: `1861`,
    2804: `1861`,
    2805: `1862`,
    2806: `1862`,
    2807: `1863`,
    2808: `1864`,
    2809: `1864`,
    281: `61`,
    2810: `1864`,
    2811: `1865`,
    2812: `1865`,
    2813: `1866`,
    2814: `1867`,
    2815: `1868`,
    2816: `1868`,
    2817: `1868`,
    2818: `1869`,
    2819: `1869`,
    282: `62`,
    2820: `1870`,
    2821: `1871`,
    2822: `1871`,
    2823: `1871`,
    2824: `1872`,
    2825: `1873`,
    2826: `1873`,
    2827: `1873`,
    2828: `1875`,
    2829: `1876`,
    283: `62`,
    2830: `1877`,
    2831: `1877`,
    2832: `1878`,
    2833: `1879`,
    2834: `1880`,
    2835: `1881`,
    2836: `1882`,
    2837: `1882`,
    2838: `1883`,
    2839: `1883`,
    284: `62`,
    2840: `1884`,
    2841: `1884`,
    2842: `1885`,
    2843: `1886`,
    2844: `1886`,
    2845: `1887`,
    2846: `1887`,
    2847: `1888`,
    2848: `1888`,
    2849: `1889`,
    285: `63`,
    2850: `1890`,
    2851: `1890`,
    2852: `1891`,
    2853: `1892`,
    2854: `1892`,
    2855: `1893`,
    2856: `1894`,
    2857: `1894`,
    2858: `1895`,
    2859: `1896`,
    286: `64`,
    2860: `1897`,
    2861: `1897`,
    2862: `1898`,
    2863: `1899`,
    2864: `1900`,
    2865: `1901`,
    2866: `1902`,
    2867: `1902`,
    2868: `1903`,
    2869: `1903`,
    287: `64`,
    2870: `1904`,
    2871: `1904`,
    2872: `1905`,
    2873: `1906`,
    2874: `1906`,
    2875: `1907`,
    2876: `1908`,
    2877: `1908`,
    2878: `1909`,
    2879: `1910`,
    288: `65`,
    2880: `1911`,
    2881: `1911`,
    2882: `1912`,
    2883: `1913`,
    2884: `1914`,
    2885: `1914`,
    2886: `1915`,
    2887: `1916`,
    2888: `1917`,
    2889: `1918`,
    289: `65`,
    2890: `1919`,
    2891: `1919`,
    2892: `1920`,
    2893: `1920`,
    2894: `1921`,
    2895: `1922`,
    2896: `1922`,
    2897: `1923`,
    2898: `1924`,
    2899: `1924`,
    29: `2`,
    290: `65`,
    2900: `1925`,
    2901: `1926`,
    2902: `1927`,
    2903: `1928`,
    2904: `1928`,
    2905: `1929`,
    2906: `1930`,
    2907: `1931`,
    2908: `1931`,
    2909: `1932`,
    291: `66`,
    2910: `1932`,
    2911: `1933`,
    2912: `1934`,
    2913: `1935`,
    2914: `1935`,
    2915: `1936`,
    2916: `1936`,
    2917: `1937`,
    2918: `1937`,
    2919: `1938`,
    292: `67`,
    2920: `1939`,
    2921: `1939`,
    2922: `1940`,
    2923: `1941`,
    2924: `1941`,
    2925: `1942`,
    2926: `1942`,
    2927: `1943`,
    2928: `1943`,
    2929: `1944`,
    293: `68`,
    2930: `1945`,
    2931: `1945`,
    2932: `1946`,
    2933: `1946`,
    2934: `1947`,
    2935: `1948`,
    2936: `1949`,
    2937: `1949`,
    2938: `1950`,
    2939: `1951`,
    294: `68`,
    2940: `1961`,
    2941: `1962`,
    2942: `1963`,
    2943: `1963`,
    2944: `1964`,
    2945: `1965`,
    2946: `1966`,
    2947: `1967`,
    2948: `1968`,
    2949: `1968`,
    295: `69`,
    2950: `1969`,
    2951: `1970`,
    2952: `1971`,
    2953: `1972`,
    2954: `1972`,
    2955: `1972`,
    2956: `1973`,
    2957: `1973`,
    2958: `1974`,
    2959: `1974`,
    296: `69`,
    2960: `1975`,
    2961: `1976`,
    2962: `1976`,
    2963: `1976`,
    2964: `1977`,
    2965: `1978`,
    2966: `1988`,
    2967: `1988`,
    2968: `1989`,
    2969: `1989`,
    297: `69`,
    2970: `1990`,
    2971: `1990`,
    2972: `1990`,
    2973: `1993`,
    2974: `1993`,
    2975: `1995`,
    2976: `1995`,
    2977: `1996`,
    2978: `1996`,
    2979: `1996`,
    298: `70`,
    2980: `1997`,
    2981: `1997`,
    2982: `1998`,
    2983: `1999`,
    2984: `2000`,
    2985: `2001`,
    2986: `2002`,
    2987: `2002`,
    2988: `2003`,
    2989: `2003`,
    299: `70`,
    2990: `2003`,
    2991: `2003`,
    2992: `2003`,
    2993: `2003`,
    2994: `2003`,
    2995: `2003`,
    2996: `2003`,
    2997: `2003`,
    2998: `2004`,
    2999: `2004`,
    3: `2`,
    30: `2`,
    300: `71`,
    3000: `2005`,
    3001: `2006`,
    3002: `2007`,
    3003: `2007`,
    3004: `2008`,
    3005: `2008`,
    3006: `2009`,
    3007: `2010`,
    3008: `2011`,
    3009: `2011`,
    301: `71`,
    3010: `2012`,
    3011: `2013`,
    3012: `2014`,
    3013: `2014`,
    3014: `2015`,
    3015: `2015`,
    3016: `2016`,
    3017: `2017`,
    3018: `2017`,
    3019: `2018`,
    302: `71`,
    3020: `2019`,
    3021: `2020`,
    3022: `2020`,
    3023: `2021`,
    3024: `2022`,
    3025: `2022`,
    3026: `2023`,
    3027: `2024`,
    3028: `2024`,
    3029: `2025`,
    303: `72`,
    3030: `2026`,
    3031: `2026`,
    3032: `2027`,
    3033: `2028`,
    3034: `2028`,
    3035: `2029`,
    3036: `2030`,
    3037: `2032`,
    3038: `2033`,
    3039: `2033`,
    304: `73`,
    3040: `2034`,
    3041: `2035`,
    3042: `2035`,
    3043: `2036`,
    3044: `2037`,
    3045: `2038`,
    3046: `2038`,
    3047: `2039`,
    3048: `2040`,
    3049: `2041`,
    305: `74`,
    3050: `2041`,
    3051: `2042`,
    3052: `2043`,
    3053: `2044`,
    3054: `2044`,
    3055: `2045`,
    3056: `2046`,
    3057: `2047`,
    3058: `2047`,
    3059: `2048`,
    306: `74`,
    3060: `2049`,
    3061: `2050`,
    3062: `2051`,
    3063: `2051`,
    3064: `2052`,
    3065: `2052`,
    3066: `2053`,
    3067: `2053`,
    3068: `2054`,
    3069: `2055`,
    307: `75`,
    3070: `2055`,
    3071: `2056`,
    3072: `2056`,
    3073: `2057`,
    3074: `2057`,
    3075: `2058`,
    3076: `2058`,
    3077: `2059`,
    3078: `2059`,
    3079: `2060`,
    308: `76`,
    3080: `2060`,
    3081: `2060`,
    3082: `2062`,
    3083: `2062`,
    3084: `2063`,
    3085: `2063`,
    3086: `2064`,
    3087: `2065`,
    3088: `2065`,
    3089: `2065`,
    309: `77`,
    3090: `2066`,
    3091: `2066`,
    3092: `2067`,
    3093: `2067`,
    3094: `2068`,
    3095: `2069`,
    3096: `2072`,
    3097: `2072`,
    3098: `2072`,
    3099: `2073`,
    31: `2`,
    310: `77`,
    3100: `2073`,
    3101: `2074`,
    3102: `2074`,
    3103: `2075`,
    3104: `2076`,
    3105: `2077`,
    3106: `2077`,
    3107: `2078`,
    3108: `2079`,
    3109: `2080`,
    311: `78`,
    3110: `2081`,
    3111: `2082`,
    3112: `2082`,
    3113: `2083`,
    3114: `2083`,
    3115: `2084`,
    3116: `2084`,
    3117: `2085`,
    3118: `2086`,
    3119: `2087`,
    312: `79`,
    3120: `2088`,
    3121: `2089`,
    3122: `2090`,
    3123: `2090`,
    3124: `2090`,
    3125: `2091`,
    3126: `2092`,
    3127: `2093`,
    3128: `2093`,
    3129: `2094`,
    313: `79`,
    3130: `2094`,
    3131: `2094`,
    3132: `2095`,
    3133: `2096`,
    3134: `2097`,
    3135: `2097`,
    3136: `2097`,
    3137: `2098`,
    3138: `2099`,
    3139: `2100`,
    314: `81`,
    3140: `2100`,
    3141: `2101`,
    3142: `2102`,
    3143: `2103`,
    3144: `2103`,
    3145: `2104`,
    3146: `2105`,
    3147: `2106`,
    3148: `2107`,
    3149: `2108`,
    315: `81`,
    3150: `2109`,
    3151: `2109`,
    3152: `2109`,
    3153: `2110`,
    3154: `2111`,
    3155: `2111`,
    3156: `2111`,
    3157: `2113`,
    3158: `2114`,
    3159: `2115`,
    316: `82`,
    3160: `2115`,
    3161: `2116`,
    3162: `2117`,
    3163: `2118`,
    3164: `2119`,
    3165: `2120`,
    3166: `2120`,
    3167: `2121`,
    3168: `2122`,
    3169: `2123`,
    317: `83`,
    3170: `2123`,
    3171: `2124`,
    3172: `2124`,
    3173: `2124`,
    3174: `2126`,
    3175: `2126`,
    3176: `2127`,
    3177: `2127`,
    3178: `2128`,
    3179: `2129`,
    318: `84`,
    3180: `2129`,
    3181: `2129`,
    3182: `2130`,
    3183: `2130`,
    3184: `2131`,
    3185: `2131`,
    3186: `2132`,
    3187: `2133`,
    3188: `2136`,
    3189: `2136`,
    319: `87`,
    3190: `2136`,
    3191: `2137`,
    3192: `2137`,
    3193: `2138`,
    3194: `2138`,
    3195: `2139`,
    3196: `2140`,
    3197: `2141`,
    3198: `2141`,
    3199: `2142`,
    32: `2`,
    320: `87`,
    3200: `2143`,
    3201: `2144`,
    3202: `2145`,
    3203: `2146`,
    3204: `2146`,
    3205: `2147`,
    3206: `2147`,
    3207: `2148`,
    3208: `2148`,
    3209: `2149`,
    321: `87`,
    3210: `2150`,
    3211: `2151`,
    3212: `2152`,
    3213: `2153`,
    3214: `2154`,
    3215: `2154`,
    3216: `2154`,
    3217: `2155`,
    3218: `2156`,
    3219: `2157`,
    322: `87`,
    3220: `2157`,
    3221: `2158`,
    3222: `2158`,
    3223: `2158`,
    3224: `2159`,
    3225: `2160`,
    3226: `2161`,
    3227: `2161`,
    3228: `2161`,
    3229: `2162`,
    323: `87`,
    3230: `2163`,
    3231: `2164`,
    3232: `2164`,
    3233: `2165`,
    3234: `2166`,
    3235: `2167`,
    3236: `2167`,
    3237: `2168`,
    3238: `2169`,
    3239: `2170`,
    324: `87`,
    3240: `2171`,
    3241: `2172`,
    3242: `2173`,
    3243: `2173`,
    3244: `2173`,
    3245: `2174`,
    3246: `2175`,
    3247: `2175`,
    3248: `2175`,
    3249: `2177`,
    325: `88`,
    3250: `2178`,
    3251: `2179`,
    3252: `2179`,
    3253: `2180`,
    3254: `2181`,
    3255: `2182`,
    3256: `2183`,
    3257: `2184`,
    3258: `2184`,
    3259: `2185`,
    326: `88`,
    3260: `2186`,
    3261: `2187`,
    3262: `2187`,
    3263: `2188`,
    3264: `2188`,
    3265: `2188`,
    3266: `2190`,
    3267: `2190`,
    3268: `2191`,
    3269: `2191`,
    327: `89`,
    3270: `2192`,
    3271: `2193`,
    3272: `2193`,
    3273: `2193`,
    3274: `2194`,
    3275: `2194`,
    3276: `2195`,
    3277: `2195`,
    3278: `2196`,
    3279: `2197`,
    328: `90`,
    3280: `2200`,
    3281: `2200`,
    3282: `2200`,
    3283: `2201`,
    3284: `2201`,
    3285: `2202`,
    3286: `2202`,
    3287: `2203`,
    3288: `2203`,
    3289: `2204`,
    329: `92`,
    3290: `2204`,
    3291: `2204`,
    3292: `2205`,
    3293: `2206`,
    3294: `2207`,
    3295: `2213`,
    3296: `2213`,
    3297: `2214`,
    3298: `2215`,
    3299: `2216`,
    33: `2`,
    330: `92`,
    3300: `2216`,
    3301: `2217`,
    3302: `2217`,
    3303: `2218`,
    3304: `2219`,
    3305: `2220`,
    3306: `2220`,
    3307: `2221`,
    3308: `2221`,
    3309: `2222`,
    331: `93`,
    3310: `2223`,
    3311: `2224`,
    3312: `2224`,
    3313: `2225`,
    3314: `2225`,
    3315: `2226`,
    3316: `2226`,
    3317: `2227`,
    3318: `2228`,
    3319: `2228`,
    332: `96`,
    3320: `2229`,
    3321: `2230`,
    3322: `2231`,
    3323: `2231`,
    3324: `2232`,
    3325: `2233`,
    3326: `2234`,
    3327: `2234`,
    3328: `2235`,
    3329: `2236`,
    333: `97`,
    3330: `2237`,
    3331: `2237`,
    3332: `2238`,
    3333: `2239`,
    3334: `2240`,
    3335: `2240`,
    3336: `2241`,
    3337: `2242`,
    3338: `2243`,
    3339: `2243`,
    334: `98`,
    3340: `2244`,
    3341: `2245`,
    3342: `2246`,
    3343: `2247`,
    3344: `2248`,
    3345: `2248`,
    3346: `2249`,
    3347: `2249`,
    3348: `2250`,
    3349: `2251`,
    335: `98`,
    3350: `2252`,
    3351: `2253`,
    3352: `2254`,
    3353: `2254`,
    3354: `2254`,
    3355: `2255`,
    3356: `2256`,
    3357: `2256`,
    3358: `2257`,
    3359: `2257`,
    336: `100`,
    3360: `2258`,
    3361: `2259`,
    3362: `2259`,
    3363: `2259`,
    3364: `2260`,
    3365: `2260`,
    3366: `2261`,
    3367: `2262`,
    3368: `2263`,
    3369: `2263`,
    337: `100`,
    3370: `2263`,
    3371: `2264`,
    3372: `2264`,
    3373: `2265`,
    3374: `2266`,
    3375: `2266`,
    3376: `2266`,
    3377: `2267`,
    3378: `2268`,
    3379: `2268`,
    338: `101`,
    3380: `2268`,
    3381: `2270`,
    3382: `2271`,
    3383: `2272`,
    3384: `2272`,
    3385: `2273`,
    3386: `2274`,
    3387: `2275`,
    3388: `2276`,
    3389: `2277`,
    339: `101`,
    3390: `2277`,
    3391: `2278`,
    3392: `2278`,
    3393: `2279`,
    3394: `2279`,
    3395: `2280`,
    3396: `2281`,
    3397: `2281`,
    3398: `2282`,
    3399: `2282`,
    34: `2`,
    340: `102`,
    3400: `2283`,
    3401: `2283`,
    3402: `2284`,
    3403: `2285`,
    3404: `2285`,
    3405: `2286`,
    3406: `2287`,
    3407: `2287`,
    3408: `2288`,
    3409: `2289`,
    341: `103`,
    3410: `2289`,
    3411: `2290`,
    3412: `2291`,
    3413: `2292`,
    3414: `2292`,
    3415: `2293`,
    3416: `2294`,
    3417: `2295`,
    3418: `2296`,
    3419: `2297`,
    342: `104`,
    3420: `2297`,
    3421: `2298`,
    3422: `2298`,
    3423: `2299`,
    3424: `2299`,
    3425: `2300`,
    3426: `2301`,
    3427: `2301`,
    3428: `2302`,
    3429: `2303`,
    343: `104`,
    3430: `2303`,
    3431: `2304`,
    3432: `2305`,
    3433: `2306`,
    3434: `2306`,
    3435: `2307`,
    3436: `2308`,
    3437: `2309`,
    3438: `2309`,
    3439: `2310`,
    344: `104`,
    3440: `2311`,
    3441: `2312`,
    3442: `2313`,
    3443: `2314`,
    3444: `2314`,
    3445: `2315`,
    3446: `2315`,
    3447: `2316`,
    3448: `2317`,
    3449: `2317`,
    345: `105`,
    3450: `2318`,
    3451: `2319`,
    3452: `2319`,
    3453: `2320`,
    3454: `2321`,
    3455: `2322`,
    3456: `2322`,
    3457: `2323`,
    3458: `2324`,
    3459: `2324`,
    346: `105`,
    3460: `2325`,
    3461: `2326`,
    3462: `2332`,
    3463: `2333`,
    3464: `2334`,
    3465: `2334`,
    3466: `2335`,
    3467: `2335`,
    3468: `2336`,
    3469: `2337`,
    347: `106`,
    3470: `2338`,
    3471: `2339`,
    3472: `2340`,
    3473: `2341`,
    3474: `2342`,
    3475: `2343`,
    3476: `2343`,
    3477: `2344`,
    3478: `2344`,
    3479: `2345`,
    348: `107`,
    3480: `2346`,
    3481: `2346`,
    3482: `2347`,
    3483: `2348`,
    3484: `2349`,
    3485: `2350`,
    3486: `2351`,
    3487: `2352`,
    3488: `2353`,
    3489: `2353`,
    349: `108`,
    3490: `2353`,
    3491: `2354`,
    3492: `2354`,
    3493: `2355`,
    3494: `2355`,
    3495: `2356`,
    3496: `2357`,
    3497: `2357`,
    3498: `2357`,
    3499: `2358`,
    35: `2`,
    350: `108`,
    3500: `2359`,
    3501: `2365`,
    3502: `2365`,
    3503: `2366`,
    3504: `2367`,
    3505: `2367`,
    3506: `2368`,
    3507: `2368`,
    3508: `2368`,
    3509: `2370`,
    351: `109`,
    3510: `2370`,
    3511: `2371`,
    3512: `2371`,
    3513: `2372`,
    3514: `2373`,
    3515: `2373`,
    3516: `2373`,
    3517: `2374`,
    3518: `2374`,
    3519: `2375`,
    352: `109`,
    3520: `2375`,
    3521: `2376`,
    3522: `2377`,
    3523: `2380`,
    3524: `2380`,
    3525: `2380`,
    3526: `2381`,
    3527: `2381`,
    3528: `2382`,
    3529: `2382`,
    353: `109`,
    3530: `2383`,
    3531: `2383`,
    3532: `2384`,
    3533: `2384`,
    3534: `2384`,
    3535: `2385`,
    3536: `2386`,
    3537: `2387`,
    3538: `2393`,
    3539: `2393`,
    354: `109`,
    3540: `2394`,
    3541: `2395`,
    3542: `2396`,
    3543: `2396`,
    3544: `2397`,
    3545: `2397`,
    3546: `2398`,
    3547: `2399`,
    3548: `2400`,
    3549: `2400`,
    355: `109`,
    3550: `2401`,
    3551: `2401`,
    3552: `2402`,
    3553: `2403`,
    3554: `2404`,
    3555: `2404`,
    3556: `2405`,
    3557: `2405`,
    3558: `2406`,
    3559: `2406`,
    356: `109`,
    3560: `2407`,
    3561: `2408`,
    3562: `2408`,
    3563: `2409`,
    3564: `2410`,
    3565: `2411`,
    3566: `2411`,
    3567: `2412`,
    3568: `2413`,
    3569: `2414`,
    357: `110`,
    3570: `2414`,
    3571: `2415`,
    3572: `2416`,
    3573: `2417`,
    3574: `2417`,
    3575: `2418`,
    3576: `2419`,
    3577: `2420`,
    3578: `2420`,
    3579: `2421`,
    358: `110`,
    3580: `2422`,
    3581: `2423`,
    3582: `2423`,
    3583: `2424`,
    3584: `2425`,
    3585: `2426`,
    3586: `2427`,
    3587: `2428`,
    3588: `2428`,
    3589: `2429`,
    359: `111`,
    3590: `2429`,
    3591: `2430`,
    3592: `2431`,
    3593: `2432`,
    3594: `2433`,
    3595: `2434`,
    3596: `2434`,
    3597: `2434`,
    3598: `2435`,
    3599: `2436`,
    36: `2`,
    360: `112`,
    3600: `2436`,
    3601: `2437`,
    3602: `2437`,
    3603: `2438`,
    3604: `2439`,
    3605: `2439`,
    3606: `2439`,
    3607: `2440`,
    3608: `2440`,
    3609: `2441`,
    361: `113`,
    3610: `2442`,
    3611: `2443`,
    3612: `2443`,
    3613: `2443`,
    3614: `2444`,
    3615: `2444`,
    3616: `2445`,
    3617: `2446`,
    3618: `2446`,
    3619: `2446`,
    362: `115`,
    3620: `2447`,
    3621: `2448`,
    3622: `2448`,
    3623: `2448`,
    3624: `2450`,
    3625: `2451`,
    3626: `2452`,
    3627: `2452`,
    3628: `2453`,
    3629: `2454`,
    363: `115`,
    3630: `2455`,
    3631: `2456`,
    3632: `2457`,
    3633: `2457`,
    3634: `2458`,
    3635: `2458`,
    3636: `2459`,
    3637: `2459`,
    3638: `2460`,
    3639: `2461`,
    364: `116`,
    3640: `2461`,
    3641: `2462`,
    3642: `2462`,
    3643: `2463`,
    3644: `2463`,
    3645: `2464`,
    3646: `2465`,
    3647: `2465`,
    3648: `2466`,
    3649: `2467`,
    365: `116`,
    3650: `2467`,
    3651: `2468`,
    3652: `2469`,
    3653: `2469`,
    3654: `2470`,
    3655: `2471`,
    3656: `2472`,
    3657: `2472`,
    3658: `2473`,
    3659: `2474`,
    366: `116`,
    3660: `2475`,
    3661: `2476`,
    3662: `2477`,
    3663: `2477`,
    3664: `2478`,
    3665: `2478`,
    3666: `2479`,
    3667: `2479`,
    3668: `2480`,
    3669: `2481`,
    367: `118`,
    3670: `2481`,
    3671: `2482`,
    3672: `2483`,
    3673: `2483`,
    3674: `2484`,
    3675: `2485`,
    3676: `2486`,
    3677: `2486`,
    3678: `2487`,
    3679: `2488`,
    368: `119`,
    3680: `2489`,
    3681: `2489`,
    3682: `2490`,
    3683: `2491`,
    3684: `2492`,
    3685: `2493`,
    3686: `2494`,
    3687: `2494`,
    3688: `2495`,
    3689: `2495`,
    369: `119`,
    3690: `2496`,
    3691: `2497`,
    3692: `2497`,
    3693: `2498`,
    3694: `2499`,
    3695: `2499`,
    3696: `2500`,
    3697: `2501`,
    3698: `2502`,
    3699: `2502`,
    37: `2`,
    370: `120`,
    3700: `2503`,
    3701: `2504`,
    3702: `2504`,
    3703: `2505`,
    3704: `2506`,
    3705: `2512`,
    3706: `2513`,
    3707: `2514`,
    3708: `2514`,
    3709: `2515`,
    371: `120`,
    3710: `2515`,
    3711: `2516`,
    3712: `2517`,
    3713: `2517`,
    3714: `2518`,
    3715: `2519`,
    3716: `2520`,
    3717: `2521`,
    3718: `2522`,
    3719: `2523`,
    372: `120`,
    3720: `2524`,
    3721: `2525`,
    3722: `2525`,
    3723: `2526`,
    3724: `2526`,
    3725: `2527`,
    3726: `2528`,
    3727: `2529`,
    3728: `2530`,
    3729: `2531`,
    373: `120`,
    3730: `2532`,
    3731: `2533`,
    3732: `2533`,
    3733: `2533`,
    3734: `2534`,
    3735: `2534`,
    3736: `2535`,
    3737: `2535`,
    3738: `2536`,
    3739: `2537`,
    374: `120`,
    3740: `2537`,
    3741: `2537`,
    3742: `2538`,
    3743: `2539`,
    3744: `2545`,
    3745: `2545`,
    3746: `2546`,
    3747: `2547`,
    3748: `2547`,
    3749: `2548`,
    375: `120`,
    3750: `2548`,
    3751: `2548`,
    3752: `2550`,
    3753: `2550`,
    3754: `2551`,
    3755: `2552`,
    3756: `2553`,
    3757: `2553`,
    3758: `2554`,
    3759: `2554`,
    376: `120`,
    3760: `2555`,
    3761: `2556`,
    3762: `2557`,
    3763: `2557`,
    3764: `2558`,
    3765: `2558`,
    3766: `2559`,
    3767: `2559`,
    3768: `2559`,
    3769: `2560`,
    377: `120`,
    3770: `2560`,
    3771: `2561`,
    3772: `2561`,
    3773: `2562`,
    3774: `2562`,
    3775: `2562`,
    3776: `2563`,
    3777: `2563`,
    3778: `2564`,
    3779: `2564`,
    378: `120`,
    3780: `2565`,
    3781: `2565`,
    3782: `2566`,
    3783: `2567`,
    3784: `2567`,
    3785: `2568`,
    3786: `2568`,
    3787: `2568`,
    3788: `2568`,
    3789: `2568`,
    379: `120`,
    3790: `2568`,
    3791: `2569`,
    3792: `2569`,
    3793: `2570`,
    3794: `2571`,
    3795: `2572`,
    3796: `2572`,
    3797: `2573`,
    3798: `2574`,
    3799: `2575`,
    38: `2`,
    380: `121`,
    3800: `2575`,
    3801: `2576`,
    3802: `2577`,
    3803: `2577`,
    3804: `2578`,
    3805: `2579`,
    3806: `2579`,
    3807: `2580`,
    3808: `2581`,
    3809: `2582`,
    381: `121`,
    3810: `2584`,
    3811: `2584`,
    3812: `2585`,
    3813: `2585`,
    3814: `2585`,
    3815: `2586`,
    3816: `2586`,
    3817: `2587`,
    3818: `2587`,
    3819: `2588`,
    382: `122`,
    3820: `2589`,
    3821: `2594`,
    3822: `2594`,
    3823: `2595`,
    3824: `2595`,
    3825: `2595`,
    3826: `2596`,
    3827: `2598`,
    3828: `2598`,
    3829: `2599`,
    383: `123`,
    3830: `2599`,
    3831: `2600`,
    3832: `2600`,
    3833: `2600`,
    3834: `2601`,
    3835: `2601`,
    3836: `2602`,
    3837: `2603`,
    3838: `2603`,
    3839: `2604`,
    384: `124`,
    3840: `2604`,
    3841: `2604`,
    3842: `2604`,
    3843: `2604`,
    3844: `2604`,
    3845: `2604`,
    3846: `2605`,
    3847: `2605`,
    3848: `2606`,
    3849: `2607`,
    385: `124`,
    3850: `2608`,
    3851: `2609`,
    3852: `2609`,
    3853: `2610`,
    3854: `2610`,
    3855: `2611`,
    3856: `2612`,
    3857: `2612`,
    3858: `2613`,
    3859: `2614`,
    386: `125`,
    3860: `2614`,
    3861: `2615`,
    3862: `2616`,
    3863: `2616`,
    3864: `2617`,
    3865: `2618`,
    3866: `2619`,
    3867: `2619`,
    3868: `2620`,
    3869: `2621`,
    387: `125`,
    3870: `2622`,
    3871: `2622`,
    3872: `2623`,
    3873: `2623`,
    3874: `2624`,
    3875: `2624`,
    3876: `2625`,
    3877: `2625`,
    3878: `2627`,
    3879: `2627`,
    388: `126`,
    3880: `2628`,
    3881: `2628`,
    3882: `2628`,
    3883: `2628`,
    3884: `2628`,
    3885: `2628`,
    3886: `2629`,
    3887: `2629`,
    3888: `2630`,
    3889: `2630`,
    389: `127`,
    3890: `2631`,
    3891: `2632`,
    3892: `2632`,
    3893: `2633`,
    3894: `2633`,
    3895: `2634`,
    3896: `2634`,
    3897: `2635`,
    3898: `2635`,
    3899: `2636`,
    39: `2`,
    390: `128`,
    3900: `2637`,
    3901: `2637`,
    3902: `2638`,
    3903: `2641`,
    3904: `2641`,
    3905: `2642`,
    3906: `2643`,
    3907: `2643`,
    3908: `2644`,
    3909: `2645`,
    391: `128`,
    3910: `2645`,
    3911: `2646`,
    3912: `2647`,
    3913: `2648`,
    3914: `2649`,
    3915: `2649`,
    3916: `2649`,
    3917: `2650`,
    3918: `2650`,
    3919: `2650`,
    392: `129`,
    3920: `2651`,
    3921: `2652`,
    3922: `2652`,
    3923: `2653`,
    3924: `2653`,
    3925: `2653`,
    3926: `2653`,
    3927: `2653`,
    3928: `2653`,
    3929: `2653`,
    393: `129`,
    3930: `2653`,
    3931: `2653`,
    3932: `2653`,
    3933: `2654`,
    3934: `2654`,
    3935: `2655`,
    3936: `2656`,
    3937: `2657`,
    3938: `2657`,
    3939: `2658`,
    394: `130`,
    3940: `2659`,
    3941: `2659`,
    3942: `2660`,
    3943: `2661`,
    3944: `2662`,
    3945: `2662`,
    3946: `2663`,
    3947: `2663`,
    3948: `2664`,
    3949: `2664`,
    395: `130`,
    3950: `2664`,
    3951: `2665`,
    3952: `2666`,
    3953: `2666`,
    3954: `2667`,
    3955: `2668`,
    3956: `2669`,
    3957: `2669`,
    3958: `2670`,
    3959: `2670`,
    396: `132`,
    3960: `2671`,
    3961: `2672`,
    3962: `2673`,
    3963: `2673`,
    3964: `2674`,
    3965: `2674`,
    3966: `2675`,
    3967: `2675`,
    3968: `2676`,
    3969: `2677`,
    397: `132`,
    3970: `2677`,
    3971: `2678`,
    3972: `2678`,
    3973: `2679`,
    3974: `2680`,
    3975: `2681`,
    3976: `2681`,
    3977: `2682`,
    3978: `2683`,
    3979: `2684`,
    398: `133`,
    3980: `2685`,
    3981: `2685`,
    3982: `2685`,
    3983: `2686`,
    3984: `2686`,
    3985: `2687`,
    3986: `2687`,
    3987: `2688`,
    3988: `2688`,
    3989: `2689`,
    399: `133`,
    3990: `2690`,
    3991: `2691`,
    3992: `2691`,
    3993: `2693`,
    3994: `2693`,
    3995: `2694`,
    3996: `2694`,
    3997: `2695`,
    3998: `2696`,
    3999: `2697`,
    4: `2`,
    40: `2`,
    400: `134`,
    4000: `2698`,
    4001: `2698`,
    4002: `2699`,
    4003: `2700`,
    4004: `2701`,
    4005: `2702`,
    4006: `2705`,
    4007: `2706`,
    4008: `2706`,
    4009: `2707`,
    401: `135`,
    4010: `2708`,
    4011: `2711`,
    4012: `2711`,
    4013: `2712`,
    4014: `2712`,
    4015: `2712`,
    4016: `2713`,
    4017: `2714`,
    4018: `2715`,
    4019: `2715`,
    402: `135`,
    4020: `2716`,
    4021: `2716`,
    4022: `2717`,
    4023: `2717`,
    4024: `2718`,
    4025: `2718`,
    4026: `2719`,
    4027: `2719`,
    4028: `2720`,
    4029: `2720`,
    403: `137`,
    4030: `2721`,
    4031: `2721`,
    4032: `2722`,
    4033: `2722`,
    4034: `2723`,
    4035: `2723`,
    4036: `2724`,
    4037: `2724`,
    4038: `2725`,
    4039: `2725`,
    404: `137`,
    4040: `2726`,
    4041: `2726`,
    4042: `2727`,
    4043: `2728`,
    4044: `2728`,
    4045: `2729`,
    4046: `2729`,
    4047: `2730`,
    4048: `2730`,
    4049: `2731`,
    405: `138`,
    4050: `2731`,
    4051: `2732`,
    4052: `2732`,
    4053: `2733`,
    4054: `2734`,
    4055: `2734`,
    4056: `2735`,
    4057: `2735`,
    4058: `2736`,
    4059: `2736`,
    406: `139`,
    4060: `2736`,
    4061: `2736`,
    4062: `2736`,
    4063: `2736`,
    4064: `2736`,
    4065: `2736`,
    4066: `2736`,
    4067: `2736`,
    4068: `2737`,
    4069: `2737`,
    407: `139`,
    4070: `2738`,
    4071: `2739`,
    4072: `2740`,
    4073: `2741`,
    4074: `2741`,
    4075: `2742`,
    4076: `2743`,
    4077: `2743`,
    4078: `2744`,
    4079: `2744`,
    408: `141`,
    4080: `2745`,
    4081: `2746`,
    4082: `2747`,
    4083: `2748`,
    4084: `2749`,
    4085: `2752`,
    4086: `2752`,
    4087: `2753`,
    4088: `2753`,
    4089: `2754`,
    409: `143`,
    4090: `2755`,
    4091: `2758`,
    4092: `2758`,
    4093: `2759`,
    4094: `2760`,
    4095: `2760`,
    4096: `2761`,
    4097: `2762`,
    4098: `2762`,
    4099: `2762`,
    41: `2`,
    410: `143`,
    4100: `2762`,
    4101: `2762`,
    4102: `2762`,
    4103: `2762`,
    4104: `2762`,
    4105: `2762`,
    4106: `2762`,
    4107: `2762`,
    4108: `2762`,
    4109: `2762`,
    411: `144`,
    4110: `2762`,
    4111: `2762`,
    4112: `2762`,
    4113: `2762`,
    4114: `2762`,
    4115: `2763`,
    4116: `2763`,
    4117: `2764`,
    4118: `2765`,
    4119: `2765`,
    412: `144`,
    4120: `2766`,
    4121: `2766`,
    4122: `2767`,
    4123: `2767`,
    4124: `2768`,
    4125: `2768`,
    4126: `2769`,
    4127: `2769`,
    4128: `2770`,
    4129: `2770`,
    413: `145`,
    4130: `2771`,
    4131: `2771`,
    4132: `2772`,
    4133: `2772`,
    4134: `2773`,
    4135: `2773`,
    4136: `2774`,
    4137: `2774`,
    4138: `2775`,
    4139: `2775`,
    414: `145`,
    4140: `2775`,
    4141: `2777`,
    4142: `2777`,
    4143: `2777`,
    4144: `2778`,
    4145: `2778`,
    4146: `2779`,
    4147: `2779`,
    4148: `2779`,
    4149: `2780`,
    415: `146`,
    4150: `2780`,
    4151: `2780`,
    4152: `2781`,
    4153: `2781`,
    4154: `2782`,
    4155: `2782`,
    4156: `2782`,
    4157: `2784`,
    4158: `2784`,
    4159: `2784`,
    416: `146`,
    4160: `2785`,
    4161: `2785`,
    4162: `2785`,
    4163: `2786`,
    4164: `2786`,
    4165: `2787`,
    4166: `2787`,
    4167: `2787`,
    4168: `2789`,
    4169: `2789`,
    417: `146`,
    4170: `2789`,
    4171: `2790`,
    4172: `2790`,
    4173: `2790`,
    4174: `2791`,
    4175: `2791`,
    4176: `2792`,
    4177: `2792`,
    4178: `2792`,
    4179: `2794`,
    418: `148`,
    4180: `2795`,
    4181: `2795`,
    4182: `2796`,
    4183: `2797`,
    4184: `2798`,
    4185: `2798`,
    4186: `2799`,
    4187: `2799`,
    4188: `2800`,
    4189: `2801`,
    419: `148`,
    4190: `2802`,
    4191: `2803`,
    4192: `2803`,
    4193: `2804`,
    4194: `2805`,
    4195: `2806`,
    4196: `2807`,
    4197: `2807`,
    4198: `2808`,
    4199: `2809`,
    42: `2`,
    420: `149`,
    4200: `2810`,
    4201: `2810`,
    4202: `2810`,
    4203: `2811`,
    4204: `2811`,
    4205: `2811`,
    4206: `2812`,
    4207: `2813`,
    4208: `2814`,
    4209: `2815`,
    421: `149`,
    4210: `2815`,
    4211: `2815`,
    4212: `2817`,
    4213: `2818`,
    4214: `2818`,
    4215: `2819`,
    4216: `2819`,
    4217: `2819`,
    4218: `2821`,
    4219: `2821`,
    422: `150`,
    4220: `2822`,
    4221: `2822`,
    4222: `2822`,
    4223: `2823`,
    4224: `2823`,
    4225: `2824`,
    4226: `2824`,
    4227: `2824`,
    4228: `2826`,
    4229: `2826`,
    423: `151`,
    4230: `2827`,
    4231: `2827`,
    4232: `2827`,
    4233: `2828`,
    4234: `2828`,
    4235: `2829`,
    4236: `2829`,
    4237: `2829`,
    4238: `2831`,
    4239: `2831`,
    424: `153`,
    4240: `2832`,
    4241: `2832`,
    4242: `2832`,
    4243: `2833`,
    4244: `2833`,
    4245: `2834`,
    4246: `2834`,
    4247: `2834`,
    4248: `2836`,
    4249: `2836`,
    425: `153`,
    4250: `2837`,
    4251: `2837`,
    4252: `2837`,
    4253: `2838`,
    4254: `2838`,
    4255: `2839`,
    4256: `2839`,
    4257: `2839`,
    4258: `2841`,
    4259: `2841`,
    426: `153`,
    4260: `2842`,
    4261: `2842`,
    4262: `2842`,
    4263: `2843`,
    4264: `2843`,
    4265: `2844`,
    4266: `2844`,
    4267: `2844`,
    4268: `2846`,
    4269: `2846`,
    427: `155`,
    4270: `2847`,
    4271: `2847`,
    4272: `2847`,
    4273: `2848`,
    4274: `2848`,
    4275: `2849`,
    4276: `2849`,
    4277: `2849`,
    4278: `2851`,
    4279: `2851`,
    428: `156`,
    4280: `2852`,
    4281: `2852`,
    4282: `2852`,
    4283: `2853`,
    4284: `2853`,
    4285: `2854`,
    4286: `2854`,
    4287: `2854`,
    4288: `2856`,
    4289: `2857`,
    429: `156`,
    4290: `2857`,
    4291: `2858`,
    4292: `2858`,
    4293: `2858`,
    4294: `2860`,
    4295: `2861`,
    4296: `2861`,
    4297: `2862`,
    4298: `2862`,
    4299: `2862`,
    43: `2`,
    430: `157`,
    4300: `2864`,
    4301: `2864`,
    4302: `2865`,
    4303: `2865`,
    4304: `2866`,
    4305: `2867`,
    4306: `2867`,
    4307: `2868`,
    4308: `2869`,
    4309: `2870`,
    431: `157`,
    4310: `2871`,
    4311: `2871`,
    4312: `2872`,
    4313: `2872`,
    4314: `2873`,
    4315: `2873`,
    4316: `2874`,
    4317: `2875`,
    4318: `2875`,
    4319: `2876`,
    432: `158`,
    4320: `2877`,
    4321: `2878`,
    4322: `2879`,
    4323: `2880`,
    4324: `2880`,
    4325: `2881`,
    4326: `2881`,
    4327: `2882`,
    4328: `2883`,
    4329: `2883`,
    433: `158`,
    4330: `2884`,
    4331: `2885`,
    4332: `2886`,
    4333: `2886`,
    4334: `2887`,
    4335: `2887`,
    4336: `2887`,
    4337: `2889`,
    4338: `2889`,
    4339: `2890`,
    434: `158`,
    4340: `2890`,
    4341: `2891`,
    4342: `2892`,
    4343: `2895`,
    4344: `2895`,
    4345: `2895`,
    4346: `2896`,
    4347: `2896`,
    4348: `2897`,
    4349: `2898`,
    435: `160`,
    4350: `2898`,
    4351: `2899`,
    4352: `2899`,
    4353: `2899`,
    4354: `2900`,
    4355: `2900`,
    4356: `2901`,
    4357: `2901`,
    4358: `2901`,
    4359: `2902`,
    436: `160`,
    4360: `2903`,
    4361: `2904`,
    4362: `2904`,
    4363: `2905`,
    4364: `2905`,
    4365: `2905`,
    4366: `2906`,
    4367: `2906`,
    4368: `2907`,
    4369: `2907`,
    437: `161`,
    4370: `2907`,
    4371: `2908`,
    4372: `2909`,
    4373: `2910`,
    4374: `2910`,
    4375: `2911`,
    4376: `2911`,
    4377: `2911`,
    4378: `2912`,
    4379: `2912`,
    438: `161`,
    4380: `2913`,
    4381: `2913`,
    4382: `2913`,
    4383: `2914`,
    4384: `2915`,
    4385: `2915`,
    4386: `2916`,
    4387: `2916`,
    4388: `2916`,
    4389: `2917`,
    439: `161`,
    4390: `2918`,
    4391: `2918`,
    4392: `2919`,
    4393: `2919`,
    4394: `2919`,
    4395: `2920`,
    4396: `2921`,
    4397: `2921`,
    4398: `2922`,
    4399: `2922`,
    44: `2`,
    440: `162`,
    4400: `2922`,
    4401: `2923`,
    4402: `2924`,
    4403: `2925`,
    4404: `2925`,
    4405: `2926`,
    4406: `2926`,
    4407: `2926`,
    4408: `2927`,
    4409: `2927`,
    441: `162`,
    4410: `2928`,
    4411: `2928`,
    4412: `2928`,
    4413: `2929`,
    4414: `2930`,
    4415: `2931`,
    4416: `2931`,
    4417: `2932`,
    4418: `2933`,
    4419: `2934`,
    442: `162`,
    4420: `2934`,
    4421: `2935`,
    4422: `2936`,
    4423: `2936`,
    4424: `2937`,
    4425: `2937`,
    4426: `2937`,
    4427: `2939`,
    4428: `2939`,
    4429: `2940`,
    443: `164`,
    4430: `2940`,
    4431: `2941`,
    4432: `2942`,
    4433: `2942`,
    4434: `2943`,
    4435: `2944`,
    4436: `2945`,
    4437: `2946`,
    4438: `2946`,
    4439: `2947`,
    444: `164`,
    4440: `2947`,
    4441: `2948`,
    4442: `2948`,
    4443: `2949`,
    4444: `2950`,
    4445: `2950`,
    4446: `2951`,
    4447: `2952`,
    4448: `2953`,
    4449: `2954`,
    445: `164`,
    4450: `2955`,
    4451: `2955`,
    4452: `2956`,
    4453: `2956`,
    4454: `2957`,
    4455: `2958`,
    4456: `2958`,
    4457: `2959`,
    4458: `2960`,
    4459: `2961`,
    446: `165`,
    4460: `2961`,
    4461: `2962`,
    4462: `2962`,
    4463: `2962`,
    4464: `2965`,
    4465: `2965`,
    4466: `2966`,
    4467: `2967`,
    4468: `2967`,
    4469: `2968`,
    447: `165`,
    4470: `2969`,
    4471: `2969`,
    4472: `2970`,
    4473: `2971`,
    4474: `2972`,
    4475: `2972`,
    4476: `2973`,
    4477: `2974`,
    4478: `2974`,
    4479: `2975`,
    448: `165`,
    4480: `2976`,
    4481: `2976`,
    4482: `2977`,
    4483: `2978`,
    4484: `2978`,
    4485: `2979`,
    4486: `2980`,
    4487: `2980`,
    4488: `2981`,
    4489: `2982`,
    449: `166`,
    4490: `2982`,
    4491: `2983`,
    4492: `2984`,
    4493: `2985`,
    4494: `2985`,
    4495: `2986`,
    4496: `2986`,
    4497: `2987`,
    4498: `2987`,
    4499: `2987`,
    45: `2`,
    450: `166`,
    4500: `2989`,
    4501: `2990`,
    4502: `2990`,
    4503: `2991`,
    4504: `2991`,
    4505: `2992`,
    4506: `2992`,
    4507: `2993`,
    4508: `2993`,
    4509: `2994`,
    451: `167`,
    4510: `2994`,
    4511: `2995`,
    4512: `2996`,
    4513: `2998`,
    4514: `2999`,
    4515: `2999`,
    4516: `3000`,
    4517: `3000`,
    4518: `3001`,
    4519: `3001`,
    452: `167`,
    4520: `3002`,
    4521: `3002`,
    4522: `3003`,
    4523: `3003`,
    4524: `3004`,
    4525: `3004`,
    4526: `3005`,
    4527: `3006`,
    4528: `3008`,
    4529: `3008`,
    453: `169`,
    4530: `3009`,
    4531: `3009`,
    4532: `3010`,
    4533: `3011`,
    4534: `3014`,
    4535: `3014`,
    4536: `3014`,
    4537: `3015`,
    4538: `3015`,
    4539: `3016`,
    454: `170`,
    4540: `3016`,
    4541: `3017`,
    4542: `3018`,
    4543: `3019`,
    4544: `3019`,
    4545: `3020`,
    4546: `3021`,
    4547: `3022`,
    4548: `3023`,
    4549: `3024`,
    455: `171`,
    4550: `3024`,
    4551: `3025`,
    4552: `3025`,
    4553: `3026`,
    4554: `3026`,
    4555: `3027`,
    4556: `3028`,
    4557: `3029`,
    4558: `3030`,
    4559: `3031`,
    456: `172`,
    4560: `3032`,
    4561: `3032`,
    4562: `3032`,
    4563: `3033`,
    4564: `3034`,
    4565: `3035`,
    4566: `3035`,
    4567: `3036`,
    4568: `3036`,
    4569: `3036`,
    457: `172`,
    4570: `3037`,
    4571: `3038`,
    4572: `3039`,
    4573: `3039`,
    4574: `3039`,
    4575: `3040`,
    4576: `3041`,
    4577: `3042`,
    4578: `3042`,
    4579: `3043`,
    458: `173`,
    4580: `3044`,
    4581: `3045`,
    4582: `3045`,
    4583: `3046`,
    4584: `3047`,
    4585: `3048`,
    4586: `3049`,
    4587: `3050`,
    4588: `3051`,
    4589: `3051`,
    459: `173`,
    4590: `3051`,
    4591: `3052`,
    4592: `3053`,
    4593: `3053`,
    4594: `3053`,
    4595: `3055`,
    4596: `3056`,
    4597: `3057`,
    4598: `3057`,
    4599: `3058`,
    46: `2`,
    460: `174`,
    4600: `3059`,
    4601: `3060`,
    4602: `3061`,
    4603: `3062`,
    4604: `3062`,
    4605: `3063`,
    4606: `3064`,
    4607: `3065`,
    4608: `3065`,
    4609: `3066`,
    461: `175`,
    4610: `3066`,
    4611: `3066`,
    4612: `3068`,
    4613: `3068`,
    4614: `3069`,
    4615: `3069`,
    4616: `3070`,
    4617: `3071`,
    4618: `3074`,
    4619: `3074`,
    462: `176`,
    4620: `3074`,
    4621: `3075`,
    4622: `3075`,
    4623: `3076`,
    4624: `3076`,
    4625: `3077`,
    4626: `3078`,
    4627: `3079`,
    4628: `3079`,
    4629: `3080`,
    463: `177`,
    4630: `3081`,
    4631: `3082`,
    4632: `3083`,
    4633: `3084`,
    4634: `3084`,
    4635: `3085`,
    4636: `3085`,
    4637: `3086`,
    4638: `3086`,
    4639: `3087`,
    464: `177`,
    4640: `3088`,
    4641: `3089`,
    4642: `3090`,
    4643: `3091`,
    4644: `3092`,
    4645: `3092`,
    4646: `3092`,
    4647: `3093`,
    4648: `3094`,
    4649: `3095`,
    465: `179`,
    4650: `3095`,
    4651: `3096`,
    4652: `3096`,
    4653: `3096`,
    4654: `3097`,
    4655: `3098`,
    4656: `3099`,
    4657: `3099`,
    4658: `3099`,
    4659: `3100`,
    466: `179`,
    4660: `3101`,
    4661: `3102`,
    4662: `3102`,
    4663: `3103`,
    4664: `3104`,
    4665: `3105`,
    4666: `3105`,
    4667: `3106`,
    4668: `3107`,
    4669: `3108`,
    467: `180`,
    4670: `3109`,
    4671: `3110`,
    4672: `3111`,
    4673: `3111`,
    4674: `3111`,
    4675: `3112`,
    4676: `3113`,
    4677: `3113`,
    4678: `3113`,
    4679: `3115`,
    468: `180`,
    4680: `3116`,
    4681: `3117`,
    4682: `3117`,
    4683: `3118`,
    4684: `3119`,
    4685: `3120`,
    4686: `3121`,
    4687: `3122`,
    4688: `3122`,
    4689: `3123`,
    469: `181`,
    4690: `3124`,
    4691: `3125`,
    4692: `3125`,
    4693: `3126`,
    4694: `3126`,
    4695: `3126`,
    4696: `3128`,
    4697: `3128`,
    4698: `3129`,
    4699: `3129`,
    47: `2`,
    470: `182`,
    4700: `3130`,
    4701: `3131`,
    4702: `3134`,
    4703: `3134`,
    4704: `3134`,
    4705: `3135`,
    4706: `3135`,
    4707: `3136`,
    4708: `3136`,
    4709: `3137`,
    471: `183`,
    4710: `3137`,
    4711: `3138`,
    4712: `3138`,
    4713: `3138`,
    4714: `3139`,
    4715: `3140`,
    4716: `3141`,
    4717: `3147`,
    4718: `3147`,
    4719: `3148`,
    472: `183`,
    4720: `3149`,
    4721: `3150`,
    4722: `3150`,
    4723: `3151`,
    4724: `3151`,
    4725: `3152`,
    4726: `3153`,
    4727: `3154`,
    4728: `3154`,
    4729: `3155`,
    473: `183`,
    4730: `3155`,
    4731: `3156`,
    4732: `3157`,
    4733: `3158`,
    4734: `3158`,
    4735: `3159`,
    4736: `3159`,
    4737: `3160`,
    4738: `3160`,
    4739: `3161`,
    474: `184`,
    4740: `3162`,
    4741: `3162`,
    4742: `3163`,
    4743: `3164`,
    4744: `3165`,
    4745: `3165`,
    4746: `3166`,
    4747: `3167`,
    4748: `3168`,
    4749: `3168`,
    475: `184`,
    4750: `3169`,
    4751: `3170`,
    4752: `3171`,
    4753: `3171`,
    4754: `3172`,
    4755: `3173`,
    4756: `3174`,
    4757: `3174`,
    4758: `3175`,
    4759: `3176`,
    476: `185`,
    4760: `3177`,
    4761: `3177`,
    4762: `3178`,
    4763: `3179`,
    4764: `3180`,
    4765: `3181`,
    4766: `3182`,
    4767: `3182`,
    4768: `3183`,
    4769: `3183`,
    477: `186`,
    4770: `3184`,
    4771: `3185`,
    4772: `3186`,
    4773: `3187`,
    4774: `3188`,
    4775: `3188`,
    4776: `3188`,
    4777: `3189`,
    4778: `3190`,
    4779: `3190`,
    478: `187`,
    4780: `3191`,
    4781: `3191`,
    4782: `3192`,
    4783: `3193`,
    4784: `3193`,
    4785: `3193`,
    4786: `3194`,
    4787: `3194`,
    4788: `3195`,
    4789: `3196`,
    479: `187`,
    4790: `3197`,
    4791: `3197`,
    4792: `3197`,
    4793: `3198`,
    4794: `3198`,
    4795: `3199`,
    4796: `3200`,
    4797: `3200`,
    4798: `3200`,
    4799: `3201`,
    48: `2`,
    480: `188`,
    4800: `3202`,
    4801: `3202`,
    4802: `3202`,
    4803: `3204`,
    4804: `3205`,
    4805: `3206`,
    4806: `3206`,
    4807: `3207`,
    4808: `3208`,
    4809: `3209`,
    481: `188`,
    4810: `3210`,
    4811: `3211`,
    4812: `3211`,
    4813: `3212`,
    4814: `3212`,
    4815: `3213`,
    4816: `3213`,
    4817: `3214`,
    4818: `3215`,
    4819: `3215`,
    482: `189`,
    4820: `3216`,
    4821: `3216`,
    4822: `3217`,
    4823: `3217`,
    4824: `3218`,
    4825: `3219`,
    4826: `3219`,
    4827: `3220`,
    4828: `3221`,
    4829: `3221`,
    483: `189`,
    4830: `3222`,
    4831: `3223`,
    4832: `3223`,
    4833: `3224`,
    4834: `3225`,
    4835: `3226`,
    4836: `3226`,
    4837: `3227`,
    4838: `3228`,
    4839: `3229`,
    484: `189`,
    4840: `3230`,
    4841: `3231`,
    4842: `3231`,
    4843: `3232`,
    4844: `3232`,
    4845: `3233`,
    4846: `3233`,
    4847: `3234`,
    4848: `3235`,
    4849: `3235`,
    485: `190`,
    4850: `3236`,
    4851: `3237`,
    4852: `3237`,
    4853: `3238`,
    4854: `3239`,
    4855: `3240`,
    4856: `3240`,
    4857: `3241`,
    4858: `3242`,
    4859: `3243`,
    486: `190`,
    4860: `3243`,
    4861: `3244`,
    4862: `3245`,
    4863: `3246`,
    4864: `3247`,
    4865: `3248`,
    4866: `3248`,
    4867: `3249`,
    4868: `3249`,
    4869: `3250`,
    487: `191`,
    4870: `3251`,
    4871: `3251`,
    4872: `3252`,
    4873: `3253`,
    4874: `3253`,
    4875: `3254`,
    4876: `3255`,
    4877: `3256`,
    4878: `3256`,
    4879: `3257`,
    488: `191`,
    4880: `3258`,
    4881: `3258`,
    4882: `3259`,
    4883: `3260`,
    4884: `3266`,
    4885: `3267`,
    4886: `3268`,
    4887: `3268`,
    4888: `3269`,
    4889: `3269`,
    489: `191`,
    4890: `3270`,
    4891: `3271`,
    4892: `3272`,
    4893: `3273`,
    4894: `3274`,
    4895: `3275`,
    4896: `3276`,
    4897: `3277`,
    4898: `3277`,
    4899: `3278`,
    49: `2`,
    490: `191`,
    4900: `3278`,
    4901: `3279`,
    4902: `3280`,
    4903: `3280`,
    4904: `3281`,
    4905: `3282`,
    4906: `3283`,
    4907: `3284`,
    4908: `3285`,
    4909: `3286`,
    491: `191`,
    4910: `3287`,
    4911: `3287`,
    4912: `3287`,
    4913: `3288`,
    4914: `3288`,
    4915: `3289`,
    4916: `3289`,
    4917: `3290`,
    4918: `3291`,
    4919: `3291`,
    492: `191`,
    4920: `3291`,
    4921: `3292`,
    4922: `3293`,
    4923: `3299`,
    4924: `3299`,
    4925: `3300`,
    4926: `3301`,
    4927: `3301`,
    4928: `3302`,
    4929: `3302`,
    493: `192`,
    4930: `3302`,
    4931: `3304`,
    4932: `3304`,
    4933: `3305`,
    4934: `3305`,
    4935: `3306`,
    4936: `3307`,
    4937: `3310`,
    4938: `3310`,
    4939: `3310`,
    494: `192`,
    4940: `3311`,
    4941: `3311`,
    4942: `3312`,
    4943: `3312`,
    4944: `3313`,
    4945: `3313`,
    4946: `3314`,
    4947: `3314`,
    4948: `3314`,
    4949: `3315`,
    495: `193`,
    4950: `3316`,
    4951: `3317`,
    4952: `3323`,
    4953: `3323`,
    4954: `3324`,
    4955: `3325`,
    4956: `3326`,
    4957: `3326`,
    4958: `3327`,
    4959: `3327`,
    496: `194`,
    4960: `3328`,
    4961: `3329`,
    4962: `3330`,
    4963: `3330`,
    4964: `3331`,
    4965: `3331`,
    4966: `3332`,
    4967: `3333`,
    4968: `3334`,
    4969: `3334`,
    497: `195`,
    4970: `3335`,
    4971: `3335`,
    4972: `3336`,
    4973: `3336`,
    4974: `3337`,
    4975: `3338`,
    4976: `3338`,
    4977: `3339`,
    4978: `3340`,
    4979: `3341`,
    498: `195`,
    4980: `3341`,
    4981: `3342`,
    4982: `3343`,
    4983: `3344`,
    4984: `3344`,
    4985: `3345`,
    4986: `3346`,
    4987: `3347`,
    4988: `3347`,
    4989: `3348`,
    499: `196`,
    4990: `3349`,
    4991: `3350`,
    4992: `3350`,
    4993: `3351`,
    4994: `3352`,
    4995: `3353`,
    4996: `3353`,
    4997: `3354`,
    4998: `3355`,
    4999: `3356`,
    5: `2`,
    50: `2`,
    500: `197`,
    5000: `3357`,
    5001: `3358`,
    5002: `3358`,
    5003: `3359`,
    5004: `3359`,
    5005: `3360`,
    5006: `3361`,
    5007: `3362`,
    5008: `3363`,
    5009: `3364`,
    501: `199`,
    5010: `3364`,
    5011: `3364`,
    5012: `3365`,
    5013: `3366`,
    5014: `3366`,
    5015: `3367`,
    5016: `3367`,
    5017: `3368`,
    5018: `3369`,
    5019: `3369`,
    502: `199`,
    5020: `3369`,
    5021: `3370`,
    5022: `3370`,
    5023: `3371`,
    5024: `3372`,
    5025: `3373`,
    5026: `3373`,
    5027: `3373`,
    5028: `3374`,
    5029: `3374`,
    503: `200`,
    5030: `3375`,
    5031: `3376`,
    5032: `3376`,
    5033: `3376`,
    5034: `3377`,
    5035: `3378`,
    5036: `3378`,
    5037: `3378`,
    5038: `3380`,
    5039: `3381`,
    504: `200`,
    5040: `3382`,
    5041: `3382`,
    5042: `3383`,
    5043: `3384`,
    5044: `3385`,
    5045: `3386`,
    5046: `3387`,
    5047: `3387`,
    5048: `3388`,
    5049: `3388`,
    505: `200`,
    5050: `3389`,
    5051: `3389`,
    5052: `3390`,
    5053: `3391`,
    5054: `3391`,
    5055: `3392`,
    5056: `3392`,
    5057: `3393`,
    5058: `3393`,
    5059: `3394`,
    506: `201`,
    5060: `3395`,
    5061: `3395`,
    5062: `3396`,
    5063: `3397`,
    5064: `3397`,
    5065: `3398`,
    5066: `3399`,
    5067: `3399`,
    5068: `3400`,
    5069: `3401`,
    507: `201`,
    5070: `3402`,
    5071: `3402`,
    5072: `3403`,
    5073: `3404`,
    5074: `3405`,
    5075: `3406`,
    5076: `3407`,
    5077: `3407`,
    5078: `3408`,
    5079: `3408`,
    508: `202`,
    5080: `3409`,
    5081: `3409`,
    5082: `3410`,
    5083: `3411`,
    5084: `3411`,
    5085: `3412`,
    5086: `3413`,
    5087: `3413`,
    5088: `3414`,
    5089: `3415`,
    509: `203`,
    5090: `3416`,
    5091: `3416`,
    5092: `3417`,
    5093: `3418`,
    5094: `3419`,
    5095: `3419`,
    5096: `3420`,
    5097: `3421`,
    5098: `3422`,
    5099: `3423`,
    51: `2`,
    510: `204`,
    5100: `3424`,
    5101: `3424`,
    5102: `3425`,
    5103: `3425`,
    5104: `3426`,
    5105: `3427`,
    5106: `3427`,
    5107: `3428`,
    5108: `3429`,
    5109: `3429`,
    511: `204`,
    5110: `3430`,
    5111: `3431`,
    5112: `3432`,
    5113: `3432`,
    5114: `3433`,
    5115: `3434`,
    5116: `3434`,
    5117: `3435`,
    5118: `3436`,
    5119: `3442`,
    512: `204`,
    5120: `3443`,
    5121: `3444`,
    5122: `3444`,
    5123: `3445`,
    5124: `3445`,
    5125: `3446`,
    5126: `3447`,
    5127: `3447`,
    5128: `3448`,
    5129: `3449`,
    513: `204`,
    5130: `3450`,
    5131: `3451`,
    5132: `3452`,
    5133: `3453`,
    5134: `3454`,
    5135: `3455`,
    5136: `3455`,
    5137: `3456`,
    5138: `3456`,
    5139: `3457`,
    514: `204`,
    5140: `3458`,
    5141: `3459`,
    5142: `3460`,
    5143: `3461`,
    5144: `3462`,
    5145: `3463`,
    5146: `3463`,
    5147: `3463`,
    5148: `3464`,
    5149: `3464`,
    515: `204`,
    5150: `3465`,
    5151: `3465`,
    5152: `3466`,
    5153: `3467`,
    5154: `3467`,
    5155: `3467`,
    5156: `3468`,
    5157: `3469`,
    5158: `3475`,
    5159: `3475`,
    516: `204`,
    5160: `3476`,
    5161: `3477`,
    5162: `3477`,
    5163: `3478`,
    5164: `3478`,
    5165: `3478`,
    5166: `3480`,
    5167: `3481`,
    5168: `3483`,
    5169: `3484`,
    517: `204`,
    5170: `3485`,
    5171: `3486`,
    5172: `3486`,
    5173: `3487`,
    5174: `3487`,
    5175: `3488`,
    5176: `3488`,
    5177: `3488`,
    5178: `3489`,
    5179: `3491`,
    518: `204`,
    5180: `3492`,
    5181: `3493`,
    5182: `3493`,
    5183: `3493`,
    5184: `3494`,
    5185: `3495`,
    5186: `3495`,
    5187: `3496`,
    5188: `3496`,
    5189: `3496`,
    519: `204`,
    5190: `3497`,
    5191: `3499`,
    5192: `3499`,
    5193: `3499`,
    5194: `3500`,
    5195: `3501`,
    5196: `3501`,
    5197: `3502`,
    5198: `3502`,
    5199: `3502`,
    52: `2`,
    520: `204`,
    5200: `3504`,
    5201: `3504`,
    5202: `3504`,
    5203: `3505`,
    5204: `3506`,
    5205: `3506`,
    5206: `3507`,
    5207: `3507`,
    5208: `3507`,
    5209: `3509`,
    521: `204`,
    5210: `3509`,
    5211: `3509`,
    5212: `3510`,
    5213: `3511`,
    5214: `3511`,
    5215: `3512`,
    5216: `3512`,
    5217: `3512`,
    5218: `3514`,
    5219: `3514`,
    522: `204`,
    5220: `3514`,
    5221: `3515`,
    5222: `3516`,
    5223: `3516`,
    5224: `3517`,
    5225: `3517`,
    5226: `3517`,
    5227: `3519`,
    5228: `3520`,
    5229: `3521`,
    523: `204`,
    5230: `3521`,
    5231: `3522`,
    5232: `3523`,
    5233: `3524`,
    5234: `3525`,
    5235: `3526`,
    5236: `3527`,
    5237: `3529`,
    5238: `3530`,
    5239: `3530`,
    524: `204`,
    5240: `3530`,
    5241: `3532`,
    5242: `3533`,
    5243: `3534`,
    5244: `3535`,
    5245: `3535`,
    5246: `3536`,
    5247: `3537`,
    5248: `3537`,
    5249: `3537`,
    525: `204`,
    5250: `3538`,
    5251: `3538`,
    5252: `3539`,
    5253: `3540`,
    5254: `3540`,
    5255: `3541`,
    5256: `3542`,
    5257: `3542`,
    5258: `3543`,
    5259: `3544`,
    526: `205`,
    5260: `3544`,
    5261: `3544`,
    5262: `3545`,
    5263: `3545`,
    5264: `3546`,
    5265: `3547`,
    5266: `3547`,
    5267: `3547`,
    5268: `3548`,
    5269: `3548`,
    527: `205`,
    5270: `3549`,
    5271: `3550`,
    5272: `3550`,
    5273: `3550`,
    5274: `3551`,
    5275: `3551`,
    5276: `3552`,
    5277: `3553`,
    5278: `3553`,
    5279: `3553`,
    528: `205`,
    5280: `3554`,
    5281: `3554`,
    5282: `3555`,
    5283: `3556`,
    5284: `3556`,
    5285: `3556`,
    5286: `3557`,
    5287: `3557`,
    5288: `3558`,
    5289: `3558`,
    529: `207`,
    5290: `3558`,
    5291: `3559`,
    5292: `3560`,
    5293: `3560`,
    5294: `3561`,
    5295: `3563`,
    5296: `3564`,
    5297: `3565`,
    5298: `3566`,
    5299: `3566`,
    53: `2`,
    530: `207`,
    5300: `3567`,
    5301: `3568`,
    5302: `3568`,
    5303: `3568`,
    5304: `3569`,
    5305: `3569`,
    5306: `3570`,
    5307: `3571`,
    5308: `3571`,
    5309: `3572`,
    531: `207`,
    5310: `3573`,
    5311: `3573`,
    5312: `3574`,
    5313: `3575`,
    5314: `3575`,
    5315: `3575`,
    5316: `3576`,
    5317: `3576`,
    5318: `3577`,
    5319: `3578`,
    532: `208`,
    5320: `3578`,
    5321: `3578`,
    5322: `3579`,
    5323: `3579`,
    5324: `3580`,
    5325: `3581`,
    5326: `3581`,
    5327: `3581`,
    5328: `3582`,
    5329: `3582`,
    533: `208`,
    5330: `3583`,
    5331: `3583`,
    5332: `3583`,
    5333: `3584`,
    5334: `3584`,
    5335: `3585`,
    5336: `3587`,
    5337: `3588`,
    5338: `3588`,
    5339: `3588`,
    534: `208`,
    5340: `3591`,
    5341: `3591`,
    5342: `3592`,
    5343: `3592`,
    5344: `3593`,
    5345: `3593`,
    5346: `3594`,
    5347: `3595`,
    5348: `3596`,
    5349: `3596`,
    535: `209`,
    5350: `3597`,
    5351: `3598`,
    5352: `3598`,
    5353: `3599`,
    5354: `3599`,
    5355: `3600`,
    5356: `3600`,
    5357: `3601`,
    5358: `3602`,
    5359: `3603`,
    536: `210`,
    5360: `3603`,
    5361: `3604`,
    5362: `3604`,
    5363: `3605`,
    5364: `3606`,
    5365: `3607`,
    5366: `3607`,
    5367: `3608`,
    5368: `3608`,
    5369: `3609`,
    537: `210`,
    5370: `3610`,
    5371: `3611`,
    5372: `3611`,
    5373: `3612`,
    5374: `3613`,
    5375: `3614`,
    5376: `3617`,
    5377: `3617`,
    5378: `3618`,
    5379: `3618`,
    538: `211`,
    5380: `3619`,
    5381: `3619`,
    5382: `3620`,
    5383: `3621`,
    5384: `3622`,
    5385: `3622`,
    5386: `3623`,
    5387: `3624`,
    5388: `3624`,
    5389: `3625`,
    539: `211`,
    5390: `3625`,
    5391: `3626`,
    5392: `3626`,
    5393: `3627`,
    5394: `3628`,
    5395: `3629`,
    5396: `3629`,
    5397: `3630`,
    5398: `3630`,
    5399: `3631`,
    54: `2`,
    540: `213`,
    5400: `3632`,
    5401: `3633`,
    5402: `3633`,
    5403: `3634`,
    5404: `3635`,
    5405: `3636`,
    5406: `3638`,
    5407: `3638`,
    5408: `3639`,
    5409: `3639`,
    541: `214`,
    5410: `3640`,
    5411: `3642`,
    5412: `3642`,
    5413: `3643`,
    5414: `3644`,
    5415: `3644`,
    5416: `3645`,
    5417: `3647`,
    5418: `3648`,
    5419: `3649`,
    542: `215`,
    5420: `3650`,
    5421: `3651`,
    5422: `3651`,
    5423: `3652`,
    5424: `3653`,
    5425: `3654`,
    5426: `3655`,
    5427: `3657`,
    5428: `3657`,
    5429: `3658`,
    543: `215`,
    5430: `3658`,
    5431: `3659`,
    5432: `3660`,
    5433: `3661`,
    5434: `3661`,
    5435: `3661`,
    5436: `3662`,
    5437: `3662`,
    5438: `3662`,
    5439: `3664`,
    544: `216`,
    5440: `3665`,
    5441: `3665`,
    5442: `3666`,
    5443: `3666`,
    5444: `3666`,
    5445: `3668`,
    5446: `3669`,
    5447: `3669`,
    5448: `3670`,
    545: `216`,
    546: `217`,
    547: `217`,
    548: `218`,
    549: `219`,
    55: `2`,
    550: `220`,
    551: `221`,
    552: `221`,
    553: `222`,
    554: `223`,
    555: `224`,
    556: `225`,
    557: `225`,
    558: `226`,
    559: `226`,
    56: `2`,
    560: `226`,
    561: `228`,
    562: `228`,
    563: `228`,
    564: `229`,
    565: `230`,
    566: `230`,
    567: `230`,
    568: `231`,
    569: `231`,
    57: `2`,
    570: `232`,
    571: `232`,
    572: `234`,
    573: `235`,
    574: `236`,
    575: `236`,
    576: `236`,
    577: `237`,
    578: `237`,
    579: `238`,
    58: `2`,
    580: `239`,
    581: `239`,
    582: `240`,
    583: `241`,
    584: `242`,
    585: `242`,
    586: `243`,
    587: `244`,
    588: `245`,
    589: `246`,
    59: `2`,
    590: `246`,
    591: `247`,
    592: `247`,
    593: `247`,
    594: `249`,
    595: `249`,
    596: `249`,
    597: `250`,
    598: `251`,
    599: `251`,
    6: `2`,
    60: `2`,
    600: `251`,
    601: `252`,
    602: `253`,
    603: `253`,
    604: `254`,
    605: `254`,
    606: `256`,
    607: `257`,
    608: `258`,
    609: `258`,
    61: `2`,
    610: `258`,
    611: `259`,
    612: `259`,
    613: `260`,
    614: `261`,
    615: `261`,
    616: `262`,
    617: `263`,
    618: `264`,
    619: `265`,
    62: `2`,
    620: `265`,
    621: `266`,
    622: `267`,
    623: `268`,
    624: `269`,
    625: `269`,
    626: `270`,
    627: `270`,
    628: `270`,
    629: `272`,
    63: `2`,
    630: `272`,
    631: `272`,
    632: `273`,
    633: `274`,
    634: `274`,
    635: `274`,
    636: `275`,
    637: `276`,
    638: `276`,
    639: `277`,
    64: `2`,
    640: `277`,
    641: `279`,
    642: `280`,
    643: `281`,
    644: `281`,
    645: `281`,
    646: `282`,
    647: `282`,
    648: `283`,
    649: `284`,
    65: `2`,
    650: `284`,
    651: `285`,
    652: `286`,
    653: `287`,
    654: `288`,
    655: `288`,
    656: `289`,
    657: `290`,
    658: `291`,
    659: `292`,
    66: `2`,
    660: `292`,
    661: `293`,
    662: `293`,
    663: `293`,
    664: `295`,
    665: `295`,
    666: `295`,
    667: `296`,
    668: `297`,
    669: `297`,
    67: `2`,
    670: `297`,
    671: `298`,
    672: `299`,
    673: `299`,
    674: `300`,
    675: `300`,
    676: `302`,
    677: `303`,
    678: `304`,
    679: `304`,
    68: `2`,
    680: `304`,
    681: `305`,
    682: `305`,
    683: `306`,
    684: `307`,
    685: `307`,
    686: `308`,
    687: `309`,
    688: `310`,
    689: `311`,
    69: `2`,
    690: `311`,
    691: `312`,
    692: `313`,
    693: `314`,
    694: `315`,
    695: `315`,
    696: `316`,
    697: `316`,
    698: `316`,
    699: `318`,
    7: `2`,
    70: `2`,
    700: `318`,
    701: `318`,
    702: `319`,
    703: `320`,
    704: `320`,
    705: `320`,
    706: `321`,
    707: `322`,
    708: `322`,
    709: `323`,
    71: `2`,
    710: `323`,
    711: `325`,
    712: `326`,
    713: `327`,
    714: `327`,
    715: `327`,
    716: `328`,
    717: `328`,
    718: `329`,
    719: `330`,
    72: `2`,
    720: `330`,
    721: `331`,
    722: `332`,
    723: `333`,
    724: `334`,
    725: `334`,
    726: `335`,
    727: `336`,
    728: `337`,
    729: `338`,
    73: `2`,
    730: `338`,
    731: `339`,
    732: `339`,
    733: `339`,
    734: `341`,
    735: `341`,
    736: `342`,
    737: `342`,
    738: `342`,
    739: `343`,
    74: `2`,
    740: `343`,
    741: `344`,
    742: `344`,
    743: `345`,
    744: `345`,
    745: `346`,
    746: `346`,
    747: `346`,
    748: `347`,
    749: `348`,
    75: `2`,
    750: `356`,
    751: `356`,
    752: `357`,
    753: `358`,
    754: `359`,
    755: `359`,
    756: `360`,
    757: `360`,
    758: `361`,
    759: `362`,
    76: `2`,
    760: `363`,
    761: `363`,
    762: `364`,
    763: `364`,
    764: `365`,
    765: `365`,
    766: `366`,
    767: `367`,
    768: `367`,
    769: `368`,
    77: `4`,
    770: `368`,
    771: `369`,
    772: `370`,
    773: `371`,
    774: `371`,
    775: `372`,
    776: `373`,
    777: `374`,
    778: `375`,
    779: `376`,
    78: `4`,
    780: `376`,
    781: `377`,
    782: `377`,
    783: `377`,
    784: `378`,
    785: `378`,
    786: `379`,
    787: `379`,
    788: `380`,
    789: `380`,
    79: `5`,
    790: `381`,
    791: `382`,
    792: `383`,
    793: `383`,
    794: `385`,
    795: `385`,
    796: `386`,
    797: `387`,
    798: `388`,
    799: `388`,
    8: `2`,
    80: `5`,
    800: `389`,
    801: `389`,
    802: `390`,
    803: `391`,
    804: `392`,
    805: `392`,
    806: `393`,
    807: `393`,
    808: `394`,
    809: `394`,
    81: `5`,
    810: `395`,
    811: `396`,
    812: `396`,
    813: `397`,
    814: `398`,
    815: `407`,
    816: `407`,
    817: `408`,
    818: `408`,
    819: `408`,
    82: `6`,
    820: `409`,
    821: `409`,
    822: `410`,
    823: `410`,
    824: `411`,
    825: `411`,
    826: `411`,
    827: `412`,
    828: `412`,
    829: `413`,
    83: `7`,
    830: `413`,
    831: `414`,
    832: `414`,
    833: `415`,
    834: `416`,
    835: `417`,
    836: `417`,
    837: `419`,
    838: `419`,
    839: `420`,
    84: `8`,
    840: `420`,
    841: `421`,
    842: `422`,
    843: `422`,
    844: `423`,
    845: `424`,
    846: `430`,
    847: `430`,
    848: `431`,
    849: `431`,
    85: `9`,
    850: `431`,
    851: `432`,
    852: `433`,
    853: `433`,
    854: `434`,
    855: `434`,
    856: `435`,
    857: `436`,
    858: `436`,
    859: `437`,
    86: `10`,
    860: `438`,
    861: `439`,
    862: `439`,
    863: `440`,
    864: `442`,
    865: `442`,
    866: `443`,
    867: `443`,
    868: `444`,
    869: `445`,
    87: `11`,
    870: `446`,
    871: `446`,
    872: `447`,
    873: `447`,
    874: `448`,
    875: `449`,
    876: `450`,
    877: `450`,
    878: `451`,
    879: `451`,
    88: `11`,
    880: `452`,
    881: `452`,
    882: `453`,
    883: `454`,
    884: `455`,
    885: `455`,
    886: `457`,
    887: `457`,
    888: `458`,
    889: `458`,
    89: `12`,
    890: `458`,
    891: `459`,
    892: `459`,
    893: `461`,
    894: `461`,
    895: `462`,
    896: `462`,
    897: `463`,
    898: `463`,
    899: `463`,
    9: `2`,
    90: `13`,
    900: `464`,
    901: `464`,
    902: `465`,
    903: `466`,
    904: `466`,
    905: `467`,
    906: `468`,
    907: `469`,
    908: `469`,
    909: `470`,
    91: `14`,
    910: `471`,
    911: `472`,
    912: `472`,
    913: `473`,
    914: `473`,
    915: `473`,
    916: `473`,
    917: `473`,
    918: `473`,
    919: `473`,
    92: `14`,
    920: `473`,
    921: `473`,
    922: `473`,
    923: `474`,
    924: `474`,
    925: `475`,
    926: `476`,
    927: `477`,
    928: `477`,
    929: `478`,
    93: `15`,
    930: `478`,
    931: `479`,
    932: `479`,
    933: `480`,
    934: `481`,
    935: `481`,
    936: `482`,
    937: `483`,
    938: `484`,
    939: `484`,
    94: `16`,
    940: `485`,
    941: `486`,
    942: `487`,
    943: `487`,
    944: `488`,
    945: `488`,
    946: `488`,
    947: `489`,
    948: `490`,
    949: `490`,
    95: `17`,
    950: `491`,
    951: `492`,
    952: `492`,
    953: `492`,
    954: `493`,
    955: `494`,
    956: `494`,
    957: `495`,
    958: `495`,
    959: `495`,
    96: `17`,
    960: `495`,
    961: `495`,
    962: `495`,
    963: `496`,
    964: `496`,
    965: `497`,
    966: `498`,
    967: `500`,
    968: `500`,
    969: `501`,
    97: `18`,
    970: `501`,
    971: `502`,
    972: `503`,
    973: `504`,
    974: `505`,
    975: `506`,
    976: `507`,
    977: `507`,
    978: `508`,
    979: `509`,
    98: `19`,
    980: `510`,
    981: `511`,
    982: `512`,
    983: `512`,
    984: `513`,
    985: `514`,
    986: `515`,
    987: `516`,
    988: `517`,
    989: `518`,
    99: `21`,
    990: `519`,
    991: `519`,
    992: `520`,
    993: `520`,
    994: `521`,
    995: `521`,
    996: `522`,
    997: `522`,
    998: `523`,
    999: `523`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 2,
  stateSize: 154,
  unsupported: [],
  version: 13,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:425:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"internalType":"struct T15","name":"v32863","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v1","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v2","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v3","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v4","type":"tuple"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"internalType":"address payable","name":"elem5","type":"address"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"_Protocol_harvest0_2829","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"_Provider_withdraw0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapBForA0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapBForA0_2829","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v10874","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v10900","type":"event"},{"anonymous":false,"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"v0","type":"tuple"}],"name":"_reach_oe_v13642","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v15354","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v17196","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v19035","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v20875","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v22705","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v24531","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v24909","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Info","outputs":[{"components":[{"internalType":"address payable","name":"liquidityToken","type":"address"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"lptBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"poolBals","type":"tuple"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"protoInfo","type":"tuple"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"protoBals","type":"tuple"},{"internalType":"address payable","name":"tokB","type":"address"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T2","name":"tokA","type":"tuple"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Protocol_delete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v32811","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"v32812","type":"tuple"}],"name":"Protocol_harvest","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v32819","type":"tuple"},{"internalType":"uint256","name":"v32820","type":"uint256"}],"name":"Provider_deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32827","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"v32828","type":"tuple"}],"name":"Provider_withdraw","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32835","type":"uint256"},{"internalType":"uint256","name":"v32836","type":"uint256"}],"name":"Trader_exactSwapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32843","type":"uint256"},{"internalType":"uint256","name":"v32844","type":"uint256"}],"name":"Trader_exactSwapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32851","type":"uint256"},{"internalType":"uint256","name":"v32852","type":"uint256"}],"name":"Trader_swapAForB","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32859","type":"uint256"},{"internalType":"uint256","name":"v32860","type":"uint256"}],"name":"Trader_swapBForA","outputs":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T9","name":"v32866","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T13","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"components":[{"internalType":"uint256","name":"protoFee","type":"uint256"},{"internalType":"uint256","name":"lpFee","type":"uint256"},{"internalType":"uint256","name":"totFee","type":"uint256"},{"internalType":"address payable","name":"protoAddr","type":"address"},{"internalType":"bool","name":"locked","type":"bool"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"_Protocol_harvest0_2829","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Provider_deposit0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"A","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"_Provider_withdraw0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_exactSwapBForA0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapAForB0_2829","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T12","name":"_Trader_swapBForA0_2829","type":"tuple"}],"internalType":"struct T13","name":"elem1","type":"tuple"}],"internalType":"struct T14","name":"v32869","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32783","type":"uint256"}],"name":"v_exactSwapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32789","type":"uint256"}],"name":"v_exactSwapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32795","type":"uint256"}],"name":"v_swapAForB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v32801","type":"uint256"}],"name":"v_swapBForA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060405260c062007f0780380380916200001a82620000be565b60803912620000a2576040516200003181620000f4565b608051815262000040620001ca565b60208201526200004f620001da565b604082015260e051606082015261010051906001600160c01b031982168203620000a2576200009291608082015262000087620001f1565b60a08201526200031e565b60405161597790816200158e8239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000e557604052565b620000ef620000a7565b604052565b60c081019081106001600160401b03821117620000e557604052565b604081019081106001600160401b03821117620000e557604052565b60a081019081106001600160401b03821117620000e557604052565b60e081019081106001600160401b03821117620000e557604052565b601f909101601f19168101906001600160401b03821190821017620000e557604052565b604051906101c082016001600160401b03811183821017620000e557604052565b604051906101e082016001600160401b03811183821017620000e557604052565b60a051908115158203620000a257565b60c051906001600160a01b0382168203620000a257565b61012051906001600160a01b0382168203620000a257565b60405190620002188262000110565b60006020838281520152565b6040519062000233826200012c565b60006080838281528260208201528260408201528260608201520152565b60405190606082016001600160401b0381118382101762000282575b60405260006040838281528260208201520152565b6200028c620000a7565b6200026d565b60405190620002a18262000148565b8160008152620002b062000209565b6020820152620002bf62000209565b6040820152620002ce62000224565b6060820152620002dd62000209565b6080820152600060a082015260c0620002f562000251565b910152565b60405190620003098262000110565b60006020836200031862000209565b81520152565b620003d0906000808055436003556101a06200033962000188565b8281526200034662000292565b60208201528260408201526200035b620002fa565b60608201528260808201526200037062000209565b60a08201526200037f62000209565b60c08201526200038e62000209565b60e08201526200039d62000209565b610100820152620003ad62000209565b6101208201528261014082015282610160820152826101808201520152620007f8565b565b60405190620003e18262000110565b81600081526020620002f562000224565b60405190602082016001600160401b0381118382101762000418575b6040526020368337565b62000422620000a7565b6200040e565b62000432620001a9565b9060008083526200044262000251565b602084015262000451620003d2565b604084015262000460620003d2565b60608401528060808401526200047562000209565b60a08401526200048462000251565b60c08401528060e08401528061010084015280610120840152620004a7620003f2565b610140840152620004b762000209565b61016084015280610180840152806101a08401526101c0830152565b805190600282101562000503579082526020818101511515908301526040908101516001600160a01b0316910152565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03918216815260a0810194939092608092919062000543906020860190620004d3565b16910152565b3d1562000598573d906001600160401b03821162000588575b604051916200057c601f8201601f19166020018462000164565b82523d6000602084013e565b62000592620000a7565b62000562565b606090565b908160a0910312620000a25760405190620005b8826200012c565b8051825260208082015190830152604080820151908301526060810151906001600160a01b0382168203620000a257608091606084015201518015158103620000a257608082015290565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260209182015160c082019392620003d092019062000603565b92919060405193602085015260408401526060830152606082526080820182811060018060401b03821117620000e557604052565b919082519283825260005b848110620006ba575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520162000698565b9493620007156012946200070660a095620006f7620007249660c08c5260c08c01906200068d565b908a820360208c01526200068d565b9088820360408a01526200068d565b9086820360608801526200068d565b6000196080860152930152565b506040513d6000823e3d90fd5b6001600160a01b039091169052565b6040519061016082016001600160401b03811183821017620007e8575b6040526000610140838281526200078062000251565b60208201528260408201526200079562000209565b6060820152826080820152620007aa62000209565b60a0820152620007b962000209565b60c0820152620007c862000209565b60e0820152620007d762000224565b610100820152826101208201520152565b620007f2620000a7565b6200076a565b6200080262000428565b90620008226200081c6200081860045460ff1690565b1590565b62000e32565b604080513381528251602080830191909152830151151581830152828201516001600160a01b039081166060808401919091528401516080808401919091528401516001600160c01b03191660a0808401919091528401511660c08201527f527cf49e362150afb14e9c12b7220f69d0ee876e80b616663fba5dc142daa8409060e090a1620008be8251801590811562000df9575b5062000e53565b620008ca341562000e74565b6020908184019360009283865152838187510152828501958651620008f49060018060a01b031690565b30620009009162000f9c565b936101a084019485524794610180850195865262000926600160ff196004541617600455565b825189518351633b02a71760e01b87820190815298928a9283929182916200095f916001600160a01b0390911690306024850162000519565b0399828d601f199c8d8101855262000978908562000164565b60a001519251926001600160a01b03165af1916200099562000549565b9283620009a29162000f38565b50620009b360ff1960045416600455565b8a51620009cb9030906001600160a01b031662000f9c565b90518082036101c0890152620009e2911462000e95565b479051900390828601918251528480825183010191019062000a04916200059d565b848251015251956060850196808852825162000a228192826200063b565b037fdae3d0d31ef3b6191007d71e7e1d5e26a6d5fd51b61c4f42fbfa695250d4878691a1838751015184815160641160001462000df0576064910151105b1562000de45762000a8d848851015162000a8584820151918781015190519062000e06565b146080870152565b60808501511562000ddd5760648285895101510151105b1562000dd25762000abe8285895101510151151562000eb6565b8651511562000acd9062000ed7565b60a085019160001983515281858451015260c08601968288515282868951015282828951015260e087019083825260608b01519a8351809c8982019062000b179160209181520190565b038281018d5262000b29908d62000164565b608001516001600160c01b03191683516001600160c01b03199091168882019081529099908a90600801038281018b5262000b65908b62000164565b5180519084898201519101519062000b7d9262000658565b915183518881019182529190829060200103908101825262000ba0908262000164565b825162000c969b62000c529a9193849362000bde939092611002808701906001600160401b0382118883101762000dc2575b62006f058839620006cf565b039083f0801562000db2575b61010096808801918c906001600160a01b039062000c0b908216856200073e565b83517fe2fc5756c8586ff8c7e834304dd61f765496c90319fd0e721cba28ce9976b6759062000c789062000c5f906001600160a01b0316966101209e8f880198896200073e565b516001600160a01b031690565b87516001600160a01b0390911681529081906020820190565b0390a181516001600160a01b03166101409d8e85019182516200073e565b8451829062000cc89062000cbc906001600160a01b03169351516001600160a01b031690565b6001600160a01b031690565b91160362000da65762000cdb8662000ef6565b835162000cfe9062000cbc906001600160a01b031693516001600160a01b031690565b91160362000d9a5762000d118462000f17565b61016001948386515283878751015262000d2a6200074d565b9b516001600160a01b031662000d41908d6200073e565b518b870152516001600160a01b031662000d5d918b016200073e565b825160608a015260808901525160a0880152805160c08801525160e087015283510151908501524390840152515190820152620003d0906200140d565b62000d11600162000f17565b62000cdb600162000ef6565b62000dbc62000731565b62000bea565b62000dcc620000a7565b62000bd2565b62000abe8162000eb6565b8062000aa4565b80608086015262000a8d565b50508062000a60565b90506001541438620008b7565b919082019182811162000e1c578210620000a257565b634e487b7160e01b600052601160045260246000fd5b1562000e3a57565b60405163100960cb60e01b8152601d6004820152602490fd5b1562000e5b57565b60405163100960cb60e01b8152601e6004820152602490fd5b1562000e7c57565b60405163100960cb60e01b815260206004820152602490fd5b1562000e9d57565b60405163100960cb60e01b815260216004820152602490fd5b1562000ebe57565b60405163100960cb60e01b815260236004820152602490fd5b1562000edf57565b602460405163100960cb60e01b8152816004820152fd5b1562000efe57565b60405163100960cb60e01b815260256004820152602490fd5b1562000f1f57565b60405163100960cb60e01b815260266004820152602490fd5b1562000f415790565b80511562000f5157805190602001fd5b60405163100960cb60e01b815260226004820152602490fd5b1562000f735790565b80511562000f8357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b6040516370a0823160e01b602082019081526001600160a01b039384166024808401919091528252600093849392849190606081016001600160401b0381118282101762001019575b6040525193165af16200100362000ffb62000549565b809262000f6a565b50602081805181010312620000a2576020015190565b62001023620000a7565b62000fe5565b6040519061012082016001600160401b03811183821017620010b6575b6040526000610100838281526200105c62000251565b60208201528260408201526200107162000209565b60608201526200108062000209565b60808201526200108f62000209565b60a08201526200109e62000209565b60c0820152620010ad62000224565b60e08201520152565b620010c0620000a7565b62001046565b60208091805184520151910152565b81516001600160a01b031681526102608101929161024090610100906200110560208201516020860190620004d3565b60408101516001600160a01b031660808501526200112c606082015160a0860190620010c6565b62001140608082015160e0860190620010c6565b6200115560a0820151610120860190620010c6565b6200116a60c0820151610160860190620010c6565b6200117f60e08201516101a086019062000603565b0151910152565b90600182811c92168015620011b8575b6020831014620011a257565b634e487b7160e01b600052602260045260246000fd5b91607f169162001196565b601f8111620011d0575050565b6000906002825260208220906020601f850160051c8301941062001211575b601f0160051c01915b8281106200120557505050565b818155600101620011f8565b9092508290620011ef565b80519091906001600160401b03811162001310575b62001249816200124360025462001186565b620011c3565b602080601f83116001146200128857508192936000926200127c575b50508160011b916000199060031b1c191617600255565b01519050388062001265565b6002600052601f198316949091907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace926000905b878210620012f7575050836001959610620012dd575b505050811b01600255565b015160001960f88460031b161c19169055388080620012d2565b80600185968294968601518155019501930190620012bc565b6200131a620000a7565b62001231565b604051906200132f8262000148565b81600081526200133e62000251565b6020820152600060408201526200135462000209565b60608201526200136362000209565b60808201526200137262000209565b60a082015260c0620002f562000224565b81516001600160a01b03908116825260208084015161020084019594620003d094936101609360c093620013ba91870190620004d3565b6040820151166080850152620013d9606082015160a0860190620010c6565b620013ed608082015160e0860190620010c6565b6200140260a0820151610120860190620010c6565b015191019062000603565b608081015115620014d257620014bd620014cc620003d0926101006200143262001320565b82519092906200144c906001600160a01b0316846200073e565b60208181015190840152604081015162001473906001600160a01b0316604085016200073e565b60a0810151606084015260c0810151608084015260e081015160a0840152015160c0820152620014a36002600055565b620014ad43600155565b6040519283916020830162001383565b03601f19810183528262000164565b6200121c565b620014bd620014cc620003d092620014e962001029565b815190919062001503906001600160a01b0316836200073e565b6020818101519083015260408101516200152a906001600160a01b0316604084016200073e565b6060810151606083015260a0810151608083015260c081015160a083015260e081015160c0830152610140610100918281015160e0850152015190820152620015736004600055565b6200157d43600155565b60405192839160208301620010d556fe60806040526004361015610018575b361561001657005b005b60003560e01c80630e36a72c146101805780631e93b0f1146101775780633402da131461016e5780634012e02e14610165578063450bacff1461015c5780635e75b021146101535780636167d4921461014a57806374e0507d146101415780637731406e14610138578063800a119b1461012f5780638323075714610126578063842463da1461011d57806388f8ea6314610114578063ab53f2c61461010b578063b8aaa65414610102578063be20a474146100f9578063c8867ae9146100f05763dc8d714f0361000e576100eb611538565b61000e565b506100eb6114cd565b506100eb611438565b506100eb61105a565b506100eb610fe5565b506100eb610f03565b506100eb610e98565b506100eb610e79565b506100eb610e0f565b506100eb6109f0565b506100eb61092d565b506100eb610815565b506100eb61079d565b506100eb61072e565b506100eb61049a565b506100eb6102f2565b506100eb6102b1565b506100eb6101e3565b6001600160a01b031690565b6001600160a01b038116036101a657565b600080fd5b60208091805184520151910152565b60206040916101ca8482516101ab565b0151910152565b6060810192916101e191906101ba565b565b5060c03660031901126101a6576004356101fc81610195565b60a03660231901126101a65760606102ad916102166118b9565b5061029f6102226118d9565b809261022c61287f565b6001600160a01b03918216815290602082016102473661289b565b815260405191610256836115f4565b61025e61287f565b8352602083019361026d612906565b855251168251525160208251015260008251525160208251015261028f6129a1565b90600082525160208201526130cb565b0151604051918291826101d1565b0390f35b50346101a65760003660031901126101a6576020600354604051908152f35b60409060031901126101a657600490565b60409060231901126101a657602490565b5060603660031901126101a6576102ad608061030d366102d0565b61037d6103186118d9565b809261032d6103256118b9565b913690615703565b815260208101604435815260405190610345826115f4565b61034d6118b9565b8252602082019261035c612906565b8452518251525160208251015260018251525160408251015261028f6129a1565b01516040519081529081906020820190565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b50634e487b7160e01b600052602160045260246000fd5b6040908051600281101561040c575b83526020818101511515908401528101516001600160a01b0316910152565b6104146103c7565b6103ed565b81516001600160a01b039081168252602080840151610200840195946101e194936101a09360c09361044d918701906101ab565b61045f604083015160608701906101ab565b610471606083015160a087019061038f565b61048460808301516101408701906101ab565b60a08201511661018085015201519101906103de565b50346101a65760003660031901126101a6576104b461185d565b506102ad60206104c26118d9565b6104ca61196d565b600054906004821015610615576104e660026105009314611cb4565b6104ee611675565b84928184808094518301019101611bdf565b60608101828151519160a0860192835152510151838251015260808201838151519160c0870192835152510151848251015260c083019061058f61058360808451519460e08a01958651528881510151898751015260408151015160408751015261057b6105716060835101611bc3565b6060885101611bd0565b510151151590565b60808451019015159052565b60a0840192858451519461010089019586515251015186855101526105c76101206105bd6040880151610189565b9801978851611bd0565b5185875101525160408651015251606085510152516080845101526105f96105ef8251610189565b60a0855101611bd0565b015160c08251015251908201525b015160405191829182610419565b610624600461063e9314611c94565b61062c611675565b84928184808094518301019101611b16565b8160808201805151855152510151828451015260a08101828151519181860192835152510151838251015260e082016106bd6106b160808351519360408901948551528781510151888651015260408151015160408651015261057b6106a76060835101611bc3565b6060875101611bd0565b60808351019015159052565b60c08301918483515193606088019485515251015185845101526106e46040850151610189565b956106f460808201978851611bd0565b51858751015251604086510152516060855101525160808451015261071c6105ef8251610189565b015160c0825101525190820152610607565b5060403660031901126101a657610744366102d0565b61074c6118d9565b6040823603126101a65761078291602060405191610769836115f4565b80358352013561077881611a23565b6020820152612579565b602060405160008152f35b6040810192916101e191906101ab565b5060403660031901126101a6576107b26117be565b506102ad60c06107c06118d9565b610807816107cc6117be565b60043581526020810160243581526107e261572b565b915182515251602082510152602081019060038251525160808251015261028f6129a1565b01516040519182918261078d565b50346101a6576020806003193601126101a6576101406102ad916004359061083b6118d9565b91600054600481106000146108d757916108b76108b26108bd9361086460026108c29714611cf4565b61087d61086f611675565b858082518301019101611bdf565b936108a9608061089d610897604060c08a01510151614f1e565b85614feb565b96019586515190614feb565b94510151614f84565b614f91565b90615036565b614f43565b91018190526040519081529081906020820190565b916108b76108b26108bd936108f160046109249714611cd4565b61090a6108fc611675565b858082518301019101611b16565b936108a960a061089d610897604060e08a01510151614f1e565b8282015261037d565b506102c03660031901126101a6576109436118d9565b60405190610950826115f4565b60043582526102a03660231901126101a6576109e49161096e61171e565b61097661574d565b81526109813661575c565b602082015261098f366157d9565b604082015261099d36615824565b60608201526109ab36615657565b60808201526109b936615682565b60a08201526109c7366156ad565b60c08201526109d5366156d8565b60e082015260208201526130cb565b60405160008152602090f35b50346101a6576020806003193601126101a65760043590610a0f6118d9565b610a17615873565b60008054846004821015610c3e57506002610a329114611d74565b83610a4c610a3e611675565b828082518301019101611bdf565b9160c0830192610a60608085510151151590565b15610c3457610a6e82611d94565b6080019382855101516101408201908152855151926101608301938452855160400151610a9a90614f6c565b610aa4908b614feb565b9661018097888501908082528451610abb91614feb565b908651610ac790614f91565b9051610ad291614f58565b610adb91615036565b966101a085019788528b82515190610af291614f58565b9b6101c086019c8d528783510151610b0a9082614feb565b8d51610b1591612f44565b8951610b2091614f84565b825151610b2c90614fbe565b835160400151610b3b91615036565b610b4491614feb565b60649004916101e087019283525151610b5c91614feb565b6127109004926102008601918483526102208701948551528189865101528d6102408801938385515282518b86510152518a86510151610b9b91614feb565b9051610ba691612f44565b90511090506000149b6101809b610bf3610c14996102ad9f610c0d99610260610c0399610bfd98610be794610c2b575051915b019581875251905190614f84565b955101518b5190614f84565b9151015190614f84565b90614feb565b9251905190614feb565b1115611db4565b519082015201516040519081529081906020820190565b90505191610bd9565b610a6e6001611d94565b91906004610c4c9114611d14565b610c65610c57611675565b838082518301019101611b16565b9060e0820191610c79608084510151151590565b15610e0557610c8782611d34565b60a001938385510151815284515192848201938452805160400151610cab90614f6c565b610cb5908a614feb565b60408301908082528351610cc891614feb565b908551610cd490614f91565b9051610cdf91614f58565b610ce891615036565b95606083019687528981515190610cfe91614f58565b99608084019a8b528682510151610d159082614feb565b8b51610d2091612f44565b8851610d2b91614f84565b835151610d3790614fbe565b845160400151610d4691615036565b610d4f91614feb565b606490049260a085019384525151610d6691614feb565b61271090049360c084019285845260e08501958651528188875101526101008501938285515281518986510152518884510151610da291614feb565b8c51610dad91612f44565b90511090506000146102ad9a6101809a610bf3610df399610be7610dec99610c0398610bfd97610dfd5750515b6101208a019581875251905190614f84565b1115611d54565b518282015261037d565b905051610dda565b610c876001611d34565b5060403660031901126101a657610e246117be565b506102ad60e0610e326118d9565b61080781610e3e6117be565b6004358152602081016024358152610e5461572b565b915182515251602082510152602081019060048251525160a08251015261028f6129a1565b50346101a65760003660031901126101a6576020600154604051908152f35b5060003660031901126101a65760206040610eb16118d9565b610eea818351858101818110600180881b03821117610ef6575b855260008152610ed96117be565b906000825251151586820152612579565b01511515604051908152f35b610efe6115dd565b610ecb565b50346101a6576020806003193601126101a6576101606102ad9160043590610f296118d9565b9160005460048110600014610f9957916108b76108b26108bd93610f5260026108c29714611df4565b610f91610f6e610f60611675565b868082518301019101611bdf565b6080610f84610897604060c08501510151614f1e565b9101958651015190614feb565b935151614f84565b916108b76108b26108bd93610fb360046109249714611dd4565b610f91610fcf610fc1611675565b868082518301019101611b16565b60a0610f84610897604060e08501510151614f1e565b50346101a657600080600319360112611057578054611002611675565b906040519283918252602090604082840152835191826040850152815b83811061104057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161101f565b80fd5b50346101a6576020806003193601126101a657600435906110796118d9565b611081615873565b92600080546004811060001461126d57600261109d9114611e74565b6110a861086f611675565b9060c08201916110bc608084510151151590565b15611263576110ca82611e94565b60800190815151906101408801918252868351015161016089019081528451604001516110f690614f6c565b6111009087614feb565b6101808a0190808252845161111491614feb565b90825161112090614f91565b905161112b91614f58565b61113491615036565b946101a096878b01968752808a875101519061114f91614f58565b906101c08c019182528651516111659082614feb565b825161117091612f44565b885161117b91614f84565b83515161118790614fbe565b84516040015161119691615036565b61119f91614feb565b60649004926101e08d0193845251516111b791614feb565b6127109004936102008c01928584526102208d0195865152818c875101526102408d01938285515281518d86510152518851516111f391614feb565b83516111fe91612f44565b90511090506000146102ad9b6112486101a09c61123d610c149a6102606112539a610c0399610bfd9861125a575051955b0194855251518c5190614f84565b908351015190614f84565b925190515190614f84565b1115611eb4565b9050519561122f565b6110ca6001611e94565b600461127f9196939695929514611e14565b61129861128a611675565b828082518301019101611b16565b9160e08301926112ac608085510151151590565b1561142e576112ba86611e34565b60a00194855151825282865101518383019081528451604001516112dd90614f6c565b6112e79089614feb565b604084019080825284516112fa91614feb565b90825161130690614f91565b905161131191614f58565b61131a91615036565b94606084019586528885895101519061133291614f58565b9860808501998a528851516113479082614feb565b8a5161135291612f44565b875161135d91614f84565b82515161136990614fbe565b83516040015161137891615036565b61138191614feb565b606490049160a08601928352515161139891614feb565b61271090049260c085019184835260e08601948551528187865101526101008601928284515281518885510152518a51516113d291614feb565b8b516113dd91612f44565b905110905060001498610bfd6101a099611248610df39861123d61141e986102ad9f97610c0398611425575051935b6101208b0194855251518c5190614f84565b1115611e54565b9050519361140c565b6112ba6001611e34565b5060603660031901126101a6576102ad60a0611453366102e1565b61145b6117be565b506108076114676118d9565b80926114716128ea565b90600435825261148660208301913690615703565b815260405190611495826115f4565b61149d6128ea565b825260208201926114ac612906565b8452518251525160208251015260028251525160608251015261028f6129a1565b5060403660031901126101a6576114e26117be565b506102ad6101006114f16118d9565b610807816114fd6117be565b600435815260208101602435815261151361572b565b915182515251602082510152602081019060058251525160c08251015261028f6129a1565b5060403660031901126101a65761154d6117be565b506102ad61012061155c6118d9565b610807816115686117be565b600435815260208101602435815261157e61572b565b915182515251602082510152602081019060068251525160e08251015261028f6129a1565b90600182811c921680156115d3575b60208310146115bd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916115b2565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761160f57604052565b6116176115dd565b604052565b60e081019081106001600160401b0382111761160f57604052565b60a081019081106001600160401b0382111761160f57604052565b601f909101601f19168101906001600160401b0382119082101761160f57604052565b6040519060008260025491611689836115a3565b8083526001938085169081156116fd57506001146116af575b506101e192500383611652565b6002600090815260008051602061592b83398151915294602093509091905b8183106116e55750506101e19350820101386116a2565b855488840185015294850194879450918301916116ce565b90506101e194506020925060ff191682840152151560051b820101386116a2565b6040519061010082016001600160401b0381118382101761160f57604052565b604051906101c082016001600160401b0381118382101761160f57604052565b6040519061012082016001600160401b0381118382101761160f57604052565b60405190610e0082016001600160401b0381118382101761160f57604052565b6040519061028082016001600160401b0381118382101761160f57604052565b604051906117cb826115f4565b60006020838281520152565b6040519060a082016001600160401b03811183821017611813575b60405260006080838281528260208201528260408201528260608201520152565b61181b6115dd565b6117f2565b60405190606082016001600160401b03811183821017611850575b60405260006040838281528260208201520152565b6118586115dd565b61183b565b6040519061186a8261161c565b81600081526118776117be565b60208201526118846117be565b60408201526118916117d7565b606082015261189e6117be565b6080820152600060a082015260c06118b4611820565b910152565b604051906118c6826115f4565b60006020836118d36117be565b81520152565b6118e161173e565b9060008083526118ef61185d565b60208401528060408401526119026118b9565b60608401528060808401526119156117be565b60a08401526119226117be565b60c084015261192f6117be565b60e084015261193c6117be565b61010084015261194a6117be565b6101208401528061014084015280610160840152806101808401526101a0830152565b6040519061014082016001600160401b03811183821017611a0b575b604052816119956117be565b815261199f6117be565b60208201526119ac6117d7565b60408201526119b96117be565b60608201526119c661185d565b60808201526119d36117be565b60a08201526119e06117be565b60c08201526119ed6117d7565b60e08201526119fa6117be565b6101008201526101206118b461185d565b611a136115dd565b611989565b51906101e182610195565b801515036101a657565b91908260609103126101a657604051606081016001600160401b03811182821017611a8d575b6040528092805160028110156101a657604091829184526020810151611a7881611a23565b6020850152015191611a8983610195565b0152565b611a956115dd565b611a53565b91908260409103126101a657604051611ab2816115f4565b6020808294805184520151910152565b91908260a09103126101a657604051611ada81611637565b60808082948051845260208101516020850152604081015160408501526060810151611b0581610195565b6060850152015191611a8983611a23565b610260818303126101a65761024090611bb3611b3061175e565b93611b3a83611a18565b8552611b498160208501611a2d565b6020860152611b5a60808401611a18565b6040860152611b6c8160a08501611a9a565b6060860152611b7e8160e08501611a9a565b6080860152611b91816101208501611a9a565b60a0860152611ba4816101608501611a9a565b60c08601526101a08301611ac2565b60e0840152015161010082015290565b516001600160a01b031690565b6001600160a01b039091169052565b90610200828203126101a65760405191611c7f91906101609060e085016001600160401b03811186821017611c87575b6040528051611c1d81610195565b8552611c2c8360208301611a2d565b6020860152611c3d60808201611a18565b6040860152611c4f8360a08301611a9a565b6060860152611c618360e08301611a9a565b6080860152611c74836101208301611a9a565b60a086015201611ac2565b60c082015290565b611c8f6115dd565b611c0f565b15611c9b57565b60405163100960cb60e01b815260086004820152602490fd5b15611cbb57565b60405163100960cb60e01b815260076004820152602490fd5b15611cdb57565b60405163100960cb60e01b8152600a6004820152602490fd5b15611cfb57565b60405163100960cb60e01b815260096004820152602490fd5b15611d1b57565b60405163100960cb60e01b815260116004820152602490fd5b15611d3b57565b60405163100960cb60e01b815260126004820152602490fd5b15611d5b57565b60405163100960cb60e01b815260146004820152602490fd5b15611d7b57565b60405163100960cb60e01b8152600d6004820152602490fd5b15611d9b57565b60405163100960cb60e01b8152600e6004820152602490fd5b15611dbb57565b60405163100960cb60e01b815260106004820152602490fd5b15611ddb57565b60405163100960cb60e01b8152600c6004820152602490fd5b15611dfb57565b60405163100960cb60e01b8152600b6004820152602490fd5b15611e1b57565b60405163100960cb60e01b815260196004820152602490fd5b15611e3b57565b60405163100960cb60e01b8152601a6004820152602490fd5b15611e5b57565b60405163100960cb60e01b8152601c6004820152602490fd5b15611e7b57565b60405163100960cb60e01b815260156004820152602490fd5b15611e9b57565b60405163100960cb60e01b815260166004820152602490fd5b15611ebb57565b60405163100960cb60e01b815260186004820152602490fd5b15611edb57565b60405163100960cb60e01b815260276004820152602490fd5b15611efb57565b60405163100960cb60e01b815260286004820152602490fd5b15611f1b57565b60405163100960cb60e01b815260296004820152602490fd5b15611f3b57565b60405163100960cb60e01b8152602a6004820152602490fd5b15611f5b57565b60405163100960cb60e01b8152602b6004820152602490fd5b15611f7b57565b60405163100960cb60e01b8152602c6004820152602490fd5b15611f9b57565b60405163100960cb60e01b8152602d6004820152602490fd5b15611fbb57565b60405163100960cb60e01b815260536004820152602490fd5b15611fdb57565b60405163100960cb60e01b815260546004820152602490fd5b15611ffb57565b60405163100960cb60e01b815260556004820152602490fd5b1561201b57565b60405163100960cb60e01b815260566004820152602490fd5b1561203b57565b60405163100960cb60e01b815260576004820152602490fd5b1561205b57565b60405163100960cb60e01b815260586004820152602490fd5b1561207b57565b60405163100960cb60e01b8152604d6004820152602490fd5b1561209b57565b60405163100960cb60e01b8152604e6004820152602490fd5b156120bb57565b60405163100960cb60e01b8152604f6004820152602490fd5b156120db57565b60405163100960cb60e01b815260506004820152602490fd5b156120fb57565b60405163100960cb60e01b815260516004820152602490fd5b1561211b57565b60405163100960cb60e01b815260526004820152602490fd5b1561213b57565b60405163100960cb60e01b815260466004820152602490fd5b1561215b57565b60405163100960cb60e01b815260476004820152602490fd5b1561217b57565b60405163100960cb60e01b815260496004820152602490fd5b1561219b57565b60405163100960cb60e01b8152604a6004820152602490fd5b156121bb57565b60405163100960cb60e01b8152604b6004820152602490fd5b156121db57565b60405163100960cb60e01b8152604c6004820152602490fd5b156121fb57565b60405163100960cb60e01b8152603f6004820152602490fd5b1561221b57565b602460405163100960cb60e01b815260406004820152fd5b1561223a57565b60405163100960cb60e01b815260426004820152602490fd5b1561225a57565b60405163100960cb60e01b815260436004820152602490fd5b1561227a57565b60405163100960cb60e01b815260446004820152602490fd5b1561229a57565b60405163100960cb60e01b815260456004820152602490fd5b156122ba57565b60405163100960cb60e01b8152603a6004820152602490fd5b156122da57565b60405163100960cb60e01b8152603b6004820152602490fd5b156122fa57565b60405163100960cb60e01b8152603c6004820152602490fd5b1561231a57565b60405163100960cb60e01b8152603d6004820152602490fd5b1561233a57565b60405163100960cb60e01b8152603e6004820152602490fd5b1561235a57565b60405163100960cb60e01b815260346004820152602490fd5b1561237a57565b60405163100960cb60e01b815260356004820152602490fd5b1561239a57565b60405163100960cb60e01b815260366004820152602490fd5b156123ba57565b60405163100960cb60e01b815260376004820152602490fd5b156123da57565b60405163100960cb60e01b815260386004820152602490fd5b156123fa57565b60405163100960cb60e01b815260396004820152602490fd5b1561241a57565b60405163100960cb60e01b8152602e6004820152602490fd5b1561243a57565b60405163100960cb60e01b8152602f6004820152602490fd5b1561245a57565b60405163100960cb60e01b815260306004820152602490fd5b1561247a57565b60405163100960cb60e01b815260316004820152602490fd5b1561249a57565b60405163100960cb60e01b815260326004820152602490fd5b156124ba57565b60405163100960cb60e01b815260336004820152602490fd5b8181106124de575050565b600081556001016124d3565b50634e487b7160e01b600052601160045260246000fd5b61250c6002546115a3565b806125145750565b601f811160011461252757506000600255565b600260005261256c90601f0160051c60008051602061592b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6124d3565b6000602081208160025555565b604061266e91600082612673956125936002845414611ed4565b61261d6125b06125a1611675565b60208082518301019101611bdf565b946125cc6125c76125c360045460ff1690565b1590565b611ef4565b83513381528151602080830191909152820151151560408201527f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95090606090a1518015908115612689575b50611f14565b6126273415611f34565b8151600081527f2d05c3a1d6633e522b8352dee7bef45753a44b3a5c284c1fd2fd7ad89ea01ebd90602090a10152016126686126638251610189565b612695565b51610189565b61283a565b600080556126816000600155565b6101e1612501565b90506001541438612617565b60008061270292604051826020820191630852cd8d60e31b835281196024820152602481526060810181811060018060401b03821117612709575b60405251926001600160a01b03165af16126f26126eb612716565b809261277b565b5060208082518301019101612763565b156101a657565b6127116115dd565b6126d0565b3d1561275e573d906001600160401b038211612751575b60405191612745601f8201601f191660200184611652565b82523d6000602084013e565b6127596115dd565b61272d565b606090565b908160209103126101a6575161277881611a23565b90565b156127835790565b80511561279257805190602001fd5b60405163100960cb60e01b815260036004820152602490fd5b156127b35790565b8051156127c257805190602001fd5b60405163100960cb60e01b8152600480820152602490fd5b156127e25790565b8051156127f157805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156128125790565b80511561282157805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60008061287c9260405182602082019163083197ef60e41b835260048152612861816115f4565b51926001600160a01b03165af1612876612716565b906127ab565b50565b6040519061288c826115f4565b816000815260206118b46117d7565b60a09060231901126101a657604051906128b482611637565b816024358152604435602082015260643560408201526084356128d681610195565b6060820152608060a43591611a8983611a23565b604051906128f7826115f4565b816000815260206118b46117be565b6040519061010082016001600160401b03811183821017612982575b604052816000815261293261287f565b602082015261293f6118b9565b604082015261294c6128ea565b60608201526129596117be565b60808201526129666117be565b60a08201526129736117be565b60c082015260e06118b46117be565b61298a6115dd565b612922565b6007111561299957565b6101e16103c7565b604051906129ae826115f4565b816000815260206118b4612906565b6129c561177e565b906129ce61287f565b825260008060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152612a046117be565b610100840152612a126118b9565b610120840152612a206117d7565b610140840152612a2e6118b9565b61016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152806102408401528061026084015280610280840152612a7b6117be565b6102a0840152806102c0840152806102e0840152612a976117be565b610300840152612aa56117be565b610320840152612ab36117be565b610340840152612ac16117be565b610360840152612acf6128ea565b610380840152806103a0840152806103c0840152806103e084015280610400840152612af96117be565b6104208401528061044084015280610460840152612b156117be565b610480840152612b236117be565b6104a0840152612b316117be565b6104c0840152612b3f6117be565b6104e0840152612b4d6117be565b61050084015280610520840152806105408401528061056084015280610580840152806105a0840152806105c0840152806105e0840152612b8c6117be565b610600840152612b9a6117be565b610620840152612ba86117be565b6106408401528061066084015280610680840152612bc46117be565b6106a0840152612bd26117be565b6106c0840152612be06117be565b6106e0840152612bee6117be565b610700840152612bfc6117be565b610720840152612c0a6117be565b6107408401528061076084015280610780840152806107a0840152806107c0840152806107e08401528061080084015280610820840152612c496117be565b610840840152612c576117be565b610860840152612c656117be565b610880840152806108a0840152806108c0840152612c816117be565b6108e0840152612c8f6117be565b610900840152612c9d6117be565b610920840152612cab6117be565b610940840152612cb96117be565b610960840152612cc76117be565b610980840152806109a0840152806109c0840152806109e084015280610a0084015280610a2084015280610a4084015280610a60840152612d066117be565b610a80840152612d146117be565b610aa0840152612d226117be565b610ac084015280610ae084015280610b00840152612d3e6117be565b610b20840152612d4c6117be565b610b40840152612d5a6117be565b610b60840152612d686117be565b610b80840152612d766117be565b610ba0840152612d846117be565b610bc084015280610be084015280610c0084015280610c2084015280610c4084015280610c6084015280610c8084015280610ca0840152612dc36117be565b610cc0840152612dd16117be565b610ce0840152612ddf6117be565b610d0084015280610d20840152610d40830152612dfa6117be565b610d60830152612e086117be565b610d80830152612e166117be565b610da0830152612e246117be565b610dc0830152612e326117be565b610de0830152565b80516001600160a01b031682526020908101516101e192919091019061038f565b906020806101e1938051845201519101906101ab565b6102a060e060206101e19496956102e085019760018060a01b03168552805182860152015180516007811015612f22575b6040850152612eb960208201516060860190612e3a565b612ecc60408201516101208601906101ba565b612edf6060820151610180860190612e5b565b612ef260808201516101e08601906101ab565b612f0560a08201516102208601906101ab565b612f1860c08201516102608601906101ab565b01519101906101ab565b612f2a6103c7565b612ea2565b516007811015612f3c5790565b6127786103c7565b8115612f4e570490565b634e487b7160e01b600052601260045260246000fd5b506040513d6000823e3d90fd5b612fa36101e194612f9960a09498979560e0850199600180881b0316855260208501906101ab565b60608301906101ab565b01906101ab565b6040519061016082016001600160401b03811183821017613038575b604052600061014083828152612fda611820565b6020820152826040820152612fed6117be565b60608201528260808201526130006117be565b60a082015261300d6117be565b60c082015261301a6117be565b60e08201526130276117d7565b610100820152826101208201520152565b6130406115dd565b612fc6565b909594926101e194613076612fa39260c09561010086019a60018060a01b03168652602086015260408501906101ab565b60808301906101ab565b909594926101e194612fa3916130ac60c09561010086019a60018060a01b0316865260208601906101ab565b606084015260808301906101ab565b60a0810192916101e1919061038f565b6130d36129bd565b6130e1600460005414611f54565b60206130ee61128a611675565b926131066131016125c360045460ff1690565b611f74565b7ff2816af3c71736203c2303122d0a28d63fb70d5b66eea9b42d9ff743327b5ea960405180613136843383612e71565b0390a161314e81518015908115614f12575b50611f94565b016131598151612f2f565b6131628161298f565b6135b7579060206101e1949392510151815261319661318f61318a606060e086015101611bc3565b610189565b3314612413565b60208151015160648151106000146135af5760206064910151105b15801560208301908152906135a3576131e76020835101516131df6040820151916020810151905190614f58565b146040840152565b8151602001516040015160641160608301908152825160200151604001511515608084019081529161327c9060408501511561359c57825115155b15613592576132396132348551151590565b612433565b6132433415612453565b61326161325c6132566040890151610189565b33615136565b612473565b6132766132716132568851610189565b612493565b51151590565b15613586576132a86020845101516132a06040820151916020810151905190614f58565b1460a0850152565b60a08301511561357e575115155b1561357357516132c79015156124b3565b4761010083015180821060001461356257505060008080806132f5815b8060c088015260c088015151614f58565b8060e087015261330861318a8751611bc3565b828215613559575bf11561354c575b6133496133248351610189565b61332e8351611bc3565b60c085015160200151916001600160a01b03909116906150bd565b60c082015151610100820190815152602060c0840151015160208251015251926060610120948584019081515260c08401516020825101527ff219a0a71d12ce74b58c5792971ce96f25d047c908c63aa5eba10ce79ec4fbe26133b38251604051918291826101d1565b0390a15191015260e061352260208351015151937f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca613455610140968787019081515260208088510151015160208251015260406020885101510151604082510152613433613429606060208a51015101611bc3565b6060835101611bd0565b6134486106b1608060208a5101510151151590565b51604051918291826130bb565b0390a1613460612faa565b9561347461346e8351610189565b88611bd0565b6020820151602088015261349761348e6040840151610189565b60408901611bd0565b60608201805160608901526134b460806020885101510151151590565b1561354557602060808401510151155b1561353b5760a083015180516135305760206134e7910151155b151560808a0152565b608083015160a089015260a083015160c08901525184880152602085510151610100880152439087015261010060c085015191015190614f58565b9101519003908201526154fe565b506134e760006134de565b6134e760006134de565b60006134c4565b613554612f64565b613317565b506108fc613310565b6000806132f58194938294036132e4565b506132c760006124b3565b5060006132b6565b600060a08401526132a8565b6132396000612433565b6000613222565b600060408301526131e7565b5060006131b1565b906135c28251612f2f565b916135cc8361298f565b60019283036139b55791836136d994927feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb60406101e1989651015195610160830196875260e0840194613623608087510151151590565b156139ac57506136336000612353565b60808401805160200151156101a085018181529491929161384891156139495761366e6136698b51516020815191015190614feb565b615046565b6101808201525b61368b60208b5101516101808301511015612373565b6136998a5151513414612393565b604087019a8b966136b56136b06132568a51610189565b6123b3565b6132766136d48d60206136c88d51610189565b91515101519033615191565b6123d3565b156138d0576136f46136698b51516020815191015190614feb565b6102008201525b8960208151015193613715610200840195865110156123f3565b61036061374b61373060a0855151519c019b8c515190614f58565b9a61026086019b8c5260208086515101519151015190614f58565b9661028085019788528a519a6102a086019b8c5152885160208d51015261378f602061377b8451518b5190614f84565b936102c08901948552510151895190614f58565b936102e087019485526137c46137ba84519d6103008a019e8f90815152602089519151015251610189565b8a519033906150bd565b88516040519081527f9ca80bfd1c57066754a83b2eae9fdeeae80f85dfaa2bf31a644e3693d3f55bd190602090a1608089519101526020855151519561032088019687515251510151602086510152519761034086019889515251602089510152519301928351525160208351015251925193519051906040519485943386613080565b0390a161388661387d613859612faa565b9761386d6138678851610189565b8a611bd0565b602087015160208a015251610189565b60408801611bd0565b60608401516060870152600060808701525160a08601525160c085015260c082015160e08501525190610100918285015243610120850152015190515151016101408201526154fe565b89613921886020613917816138ff60a06138f38c848a5151519151015190614feb565b95019485515190612f44565b95610220880196875251510151828a51015190614feb565b9151015190612f44565b9081610240840152519080821060001461394257505b6102008201526136fb565b9050613937565b896139848860206139178161396c60a06138f38c848a5151519151015190614feb565b956101c0880196875251510151828a51015190614feb565b90816101e084015251908082106000146139a557505b610180820152613675565b905061399a565b61363390612353565b909160026139c38351612f2f565b6139cc8161298f565b03613d1057506101e193613a26613a1760607f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef85594510151806103808701525160a08701515190614feb565b60206080870151015190612f44565b6103a0840152613a48613a1761038085015151602060a0880151015190614feb565b6103c0840152613a6960206103808501510151516103a085015110156122b3565b613a86602080610380860151015101516103c085015110156122d3565b613a9034156122f3565b613ab6613ab1613aa36040870151610189565b610380860151519033615191565b612313565b613acb613ac66132568651610189565b612333565b613ae16080850151516103808501515190614f58565b6103e0840152613b006020608086015101516103808501515190614f84565b6104008401526103e08301516104208401515261040083015160206104208501510152613b3860a0850151516103a085015190614f84565b610440840152613b56602060a086015101516103c085015190614f84565b610460840152610440830151610480840151526104608301516020610480850151015260008080806103a0870151818115613d07575b3390f115613cfa575b613bb0613ba28551610189565b6103c08501519033906150bd565b6103a0830151906104a08401918251526103c08401516020835101527fbe81dad5c40a652e2960514347132ecd036c25f5077fbbac9a0fe34e112c450a613bfe83516040519182918261078d565b0390a160a08251910152610440830151906104c0840191825152610460840151602083510152613c5d6103e08501516104e086019081515261040086015160208251015261038086015151925193519051906040519485943386613045565b0390a16103a0613c6b612faa565b92613c7f613c798251610189565b85611bd0565b60208101516020850152613ca2613c996040830151610189565b60408601611bd0565b606081015160608501526000608085015261042083015160a085015261048083015160c085015260c081015160e085015260e081015190610100918286015243610120860152015191015190036101408201526154fe565b613d02612f64565b613b95565b506108fc613b8c565b906003613d1d8251612f2f565b613d268161298f565b036141dc579360008051602061594b8339815191529160806101e196510151610500850152613d5c608060e08701510151151590565b156141d35750613d6c60006121f4565b613d88602060a086015101516020610500860151015190614f84565b61052084015260a084015151610540840152613df3613dde6108bd613dd0613dc460206105008901510151610bfd604060e08c01510151614f1e565b61054088015190614feb565b6108b7610520880151614f91565b80610560860152610500850151511015612214565b613e096105008401515161056085015190614f84565b610580840152613e2460a08501515161056085015190614f58565b6105a08401908152613e8f613e88613e68613e58613e50610560890151602060a08c0151015190614feb565b855190612f44565b6020610500890151015190614f84565b610bfd613e7960e08a015151614fbe565b604060e08b0151015190615036565b6064900490565b906105c08501918252613eb8613eb061056087015160e08901515190614feb565b612710900490565b91613f046105e08701928484526106008801948551526000602086510152613efc6106208901946000865152845160208751015251602060a08c0151015190614feb565b905190612f44565b905110156141cb5750515b610640840152613f4a613f3d613f3160a0870151516105008701515190614f58565b61058086015190614f84565b6106408501515190614f84565b610660840152613fa0613f81613f6f6105208601516020610640880151015190614f84565b80610680870152610660860151614feb565b613f99610540860151602060a0890151015190614feb565b1115612233565b613fb1610500840151513414612253565b613fc9613fc46132566040870151610189565b612273565b613fde613fd96132568651610189565b612293565b6106608301516106a08401515261068083015160206106a0850151015261401160c0850151516106408501515190614f58565b6106c084015152614034602060c086015101516020610640860151015190614f58565b60206106c0850151015260008080806105808701518181156141c2575b3390f1156141b5575b6140796140678551610189565b602061050086015101519033906150bd565b610580830151906106e0840191825152602061050085015101516020835101527fc881f42efc0077dcff290200173f8fd209e6189cae0cdcd54ad5ad3a0e5934806140cb83516040519182918261078d565b0390a160c082519101526105008301515190610700840191825152600060208351015261411f6106608501519261072086019384515261068086015160208551015251915192516040519384933385612f71565b0390a161058061412d612faa565b9261413b613c798251610189565b60208101516020850152614155613c996040830151610189565b6060810151606085015260006080850152608081015160a08501526106a083015160c08501526106c083015160e085015260e0810151906101009182860152436101208601520151610500830151510191015190036101408201526154fe565b6141bd612f64565b61405a565b506108fc614051565b905051613f0f565b613d6c906121f4565b60046141e88251612f2f565b6141f18161298f565b03614696575160a0015161074083015260e0830151608001511561468d575061421a6000612134565b60a08201928351516107408301516020015161423591614f84565b9061076083019182528451602001519461078084019586526107408401516020015160e08601516040015161426990614f1e565b61427291614feb565b865161427d91614feb565b835161428890614f91565b61429191615036565b61429a90614f43565b906107a08501918083526107408601515110156142b690612154565b6107408501515182516142c891614f84565b6107c086015280516020015182516142df91614f58565b6107e0860190815282518251516142f591614feb565b815161430091612f44565b6107408701516020015161431391614f84565b60e08801515161432290614fbe565b60e08901516040015161433491615036565b61433d91614feb565b606490049261080087019384525160e08801515161435a91614feb565b61271090049261082087019184835261084088019485515284516020016000905261086088019283516000905282518451602001525184515161439c91614feb565b90516143a791612f44565b905110600014976143e860008051602061594b83398151915296602061444a96614443956101e19d614684575051915b826108808c01525191015190614f84565b6108a088015261443861442661441961440d6020875101516107408c01515190614f58565b6107c08b015190614f84565b6108808a01515190614f84565b806108c08a01526108a0890151614feb565b925151905190614feb565b1115612174565b6144543415612194565b61446c6144676132566040870151610189565b6121b4565b61448f61448a61447c8651610189565b610740860151519033615191565b6121d4565b6108a08301516108e0840151526108c083015160206108e085015101526144c560c0850151516020610880860151015190614f58565b610900840151526144e5602060c086015101516108808501515190614f58565b6020610900850151015260008080806020610740880151015181811561467b575b3390f11561466e575b61452a61451c8551610189565b6107c08501519033906150bd565b60206107408401510151906109208401918251526107c08401516020835101527ff839591df486e3e78ec4c65c2559d961c03ccb9685836fb4e6194b275d411abd61457c83516040519182918261078d565b0390a160e082519101526109408301906000825152610740840151516020835101526145cf6108a0850151926109608601938451526108c086015160208551015251915192516040519384933385612f71565b0390a160206107406145df612faa565b936145f36145ed8251610189565b86611bd0565b828101518386015261461461460b6040830151610189565b60408701611bd0565b6060810151606086015260006080860152608081015160a08601526108e084015160c086015261090084015160e086015260e0810151906101009182870152436101208701520151920151015190036101408201526154fe565b614676612f64565b61450f565b506108fc614506565b905051916143d7565b61421a90612134565b60056146a58296939651612f2f565b6146ae8161298f565b03614ac1575160c0015161098083015260e0830151608001516101e1949015614ab857506146dc6000612074565b6148b4836148ad60a0820161487861486860208084510151936109a08a019485526147528a6108b761473f6109e06147318651519c6109c086019d8e52610bfd604060e0610980890151519301510151614f6c565b930192808452895190614feb565b9161474a8b51614f91565b905190614f58565b610a008b0152614853610ac08c8c6147738551516109808301515190614f58565b91610a2082019283526147f4613eb06147d8613e886147b86147ac6147a48c8e6109808b0151519151015190614feb565b895190612f44565b610a0088015190614f84565b610bfd6147c960e088015151614fbe565b604060e0890151015190615036565b92610a40850193845260e0610980860151519101515190614feb565b90610a60830190828252610a808401928351526000898451015261483a614832610aa0860193600085515283518c86510152518b8b51015190614feb565b865190612f44565b90511015614aad5750519283915b015251905190614f84565b610ae08b0152510151610a0089015190614f84565b6020610ac0890151015190614f84565b610b0087015261489860206109808801510151610a008801511015612094565b610c03610ae0870151610b0088015190614feb565b11156120b4565b6148c56109808301515134146120d4565b6148dd6148d86132566040860151610189565b6120f4565b6148f26148ed6132568551610189565b612114565b610ae0820151610b2083015152610b008201516020610b20840151015261492560c084015151610ac08401515190614f58565b610b4083015152614948602060c085015101516020610ac0850151015190614f58565b6020610b40840151015261496d61495f8451610189565b610a008401519033906150bd565b610b608201805160009052610a00830151815160200152516040517f113ae4880db104f2d8c1b08f7a20d8ba11ee67425a5dcb41d45bf1fe4fb122a09181906149b6908261078d565b0390a1610100610b6083015191015260008051602061594b83398151915261098082015151610b808301908151526000602082510152610ae083015190610ba0840191825152610b0084015160208351015251614a21610b6085015192516040519384933385612f71565b0390a1610980610100614a32612faa565b93614a406145ed8251610189565b60208101516020860152614a5a61460b6040830151610189565b6060810151606086015260006080860152608081015160a0860152610b2084015160c0860152610b4084015160e086015260e08101518286015243610120860152015191015151016101408201526154fe565b905051928391614848565b6146dc90612074565b906006614ace8351612f2f565b614ad78161298f565b14614ae4575b5050505050565b614ee19460e0610c4093510151610bc0850152614b08608060e08701510151151590565b15614f095750614b186000611fb4565b60a084015151610be0840152602060a08501510151610c00840152614b7b614b51610bc085015151610bfd604060e08901510151614f6c565b6108b7614b6c610c20870192808452610be088015190614feb565b9161474a610c00880151614f91565b82840152614c9c614b9b602060a08701510151610bc08601515190614f58565b610c608501908152614bef613e88614bcf614bc5613e50610bc08a01515160a08c01515190614feb565b8789015190614f84565b610bfd614be060e08b015151614fbe565b604060e08c0151015190615036565b610c808601908152614c10613eb0610bc08801515160e08a01515190614feb565b90610ca0870190828252610cc08801928351526000602084510152614c51613e50610ce08a0193600085515283516020865101525160a08c01515190614feb565b90511015614f015750515b610d00860152614c88614c7860a0880151518688015190614f84565b6020610d00880151015190614f84565b610d2086015251610d008501515190614f84565b610d40840152614cba6020610bc08501510151838501511015611fd4565b614cee614cd2610d20850151610d4086015190614feb565b614ce7610be0860151610c0087015190614feb565b1115611ff4565b614cf83415612014565b614d10614d0b6132566040870151610189565b612034565b614d33614d2e614d208651610189565b610bc0860151519033615191565b612054565b610d20830151610d6084015152610d408301516020610d608501510152614d6960c0850151516020610d00860151015190614f58565b610d8084015152614d89602060c08601510151610d008501515190614f58565b6020610d808501510152600080808085870151818115614ef8575b3390f115614eeb575b60008051602061594b83398151915282840151610da085019081515260006020825101527fc45748ddd456b326da77f2d99edcc8c4a4e507069f616cb460137f68e06b2768614e0382516040519182918261078d565b0390a1805161012080940152610dc08501906000825152610bc086015151602083510152614e58610d2087015192610de0880193845152610d4088015160208551015251915192516040519384933385612f71565b0390a1614e63612faa565b93614e716145ed8251610189565b60208101516020860152614e8b61460b6040830151610189565b6060810151606086015260006080860152608081015160a0860152610d6084015160c0860152610d8084015160e086015260e08101519161010092838701524390860152015191015190036101408201526154fe565b3880808080614add565b614ef3612f64565b614dad565b506108fc614da4565b905051614c5c565b614b1890611fb4565b90506001541438613148565b9061271091820191828111614f36575b82106101a657565b614f3e6124ea565b614f2e565b906001820191828111614f365782106101a657565b9190820191828111614f365782106101a657565b612710908103908111614f7c5790565b6127786124ea565b908103908111614f7c5790565b906127109182810292818404811482151715614fb1575b8304036101a657565b614fb96124ea565b614fa8565b90606482029180830460641481151715614fde575b60648304036101a657565b614fe66124ea565b614fd3565b600092918015918215615002575b5050156101a657565b9150925061502183820293828504811483151715615029575b84612f44565b143880614ff9565b6150316124ea565b61501b565b9080156101a65761277891612f44565b90600060038311156150b0575081600181811c8181018091116150a3575b91905b84831061507357505050565b91935090836150828184612f44565b908101809111615096575b811c9190615067565b61509e6124ea565b61508d565b6150ab6124ea565b615064565b916150b757565b60019150565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261270293600093849392849190608081016001600160401b03811182821017615129575b6040525193165af16126f2615122612716565b80926127da565b6151316115dd565b61510f565b6000612778928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261517a81611637565b5193165af16126f261518a612716565b809261280a565b6000916127789383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261517a81611637565b6040519061012082016001600160401b03811183821017615254575b604052600061010083828152615204611820565b60208201528260408201526152176117be565b60608201526152246117be565b60808201526152316117be565b60a082015261523e6117be565b60c082015261524b6117d7565b60e08201520152565b61525c6115dd565b6151f0565b81516001600160a01b0316815261026081019291610240906101009061528f602082015160208601906103de565b60408101516001600160a01b031660808501526152b4606082015160a08601906101ab565b6152c6608082015160e08601906101ab565b6152d960a08201516101208601906101ab565b6152ec60c08201516101608601906101ab565b6101ca60e08201516101a086019061038f565b90601f821161530c575050565b6101e19160026000526020600020906020601f840160051c8301931061533a575b601f0160051c01906124d3565b909150819061532d565b80519091906001600160401b03811161541a575b61536c816153676002546115a3565b6152ff565b602080601f83116001146153a8575081929360009261539d575b50508160011b916000199060031b1c191617600255565b015190503880615386565b6002600052601f1983169490919060008051602061592b833981519152926000905b8782106154025750508360019596106153e9575b505050811b01600255565b015160001960f88460031b161c191690553880806153de565b806001859682949686015181550195019301906153ca565b6154226115dd565b615358565b604051906154348261161c565b8160008152615441611820565b6020820152600060408201526154556117be565b60608201526154626117be565b608082015261546f6117be565b60a082015260c06118b46117d7565b81516001600160a01b039081168252602080840151610200840195946101e194936101609360c0936154b2918701906103de565b60408201511660808501526154cf606082015160a08601906101ab565b6154e1608082015160e08601906101ab565b6154f460a08201516101208601906101ab565b015191019061038f565b6080810151156155ae5761559b6155a96101e19261010061551d615427565b9161553161552b8251610189565b84611bd0565b6020810151602084015261555461554b6040830151610189565b60408501611bd0565b60a0810151606084015260c0810151608084015260e081015160a0840152015160c08201526155836002600055565b61558c43600155565b6040519283916020830161547e565b03601f198101835282611652565b615344565b61559b6155a96101e1926155c06151d4565b906155d46155ce8251610189565b83611bd0565b602081015160208301526155f76155ee6040830151610189565b60408401611bd0565b6060810151606083015260a0810151608083015260c081015160a083015260e081015160c0830152610140610100918281015160e085015201519082015261563f6004600055565b61564843600155565b60405192839160208301615261565b6040906101c31901126101a65760405190615671826115f4565b6101c43582526101e4356020830152565b6040906102031901126101a6576040519061569c826115f4565b610204358252610224356020830152565b6040906102431901126101a657604051906156c7826115f4565b610244358252610264356020830152565b6040906102831901126101a657604051906156f2826115f4565b6102843582526102a4356020830152565b91908260409103126101a65760405161571b816115f4565b6020808294803584520135910152565b60405190615738826115f4565b816157416117be565b815260206118b4612906565b6024359060078210156101a657565b9060c06043198301126101a657604051615775816115f4565b60a0819360443561578581610195565b835260631901126101a65760206040519161579f83611637565b60643583526084358284015260a435604084015260c4356157bf81610195565b606084015260e4356157d081611a23565b60808401520152565b610103190190606082126101a6576040516157f3816115f4565b60408193126101a657604051615808816115f4565b6101043581526101243560208201528152602061014435910152565b906060610163198301126101a65760405161583e816115f4565b604081936101643583526101831901126101a657602060405191615861836115f4565b6101843583526101a435828401520152565b61587b61179e565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401526158ad6117be565b60e08401526158ba6117be565b6101008401526158c86117be565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401526102008301526159066117be565b6102208301526159146117be565b6102408301526159226117be565b61026083015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a164736f6c6343000811000a608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000811000a`,
  BytecodeLen: 32519,
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
