// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    computeMint_: ((_v267, _v268, _v269, _v270 ) => {
        const v267 = stdlib.protect(ctc1, _v267, null);
        const v268 = stdlib.protect(ctc0, _v268, null);
        const v269 = stdlib.protect(ctc1, _v269, null);
        const v270 = stdlib.protect(ctc1, _v270, null);
      
      const v271 = v267.A;
      const v272 = v267.B;
      const v273 = v269.A;
      const v274 = v269.B;
      const v276 = v270.B;
      let v277;
      const v284 = stdlib.eq(v276, stdlib.checkedBigNumberify('288:19:decimal', stdlib.UInt_max, '0'));
      if (v284) {
        const v285 = stdlib.cast(false, true, v271);
        const v286 = stdlib.cast(false, true, v272);
        const v287 = stdlib.cast(false, true, v268);
        const v289 = stdlib.mul256(v287, v287);
        const v290 = stdlib.mul256(v285, v286);
        const v292 = stdlib.gt256(v285, v286);
        const v293 = v292 ? v285 : v286;
        const v294 = stdlib.mul256(v293, v293);
        const v295 = stdlib.le256(v290, v289);
        stdlib.assert(v295, {
          at: '297:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt lo',
          who: 'Module'
          });
        const v296 = stdlib.le256(v289, v294);
        stdlib.assert(v296, {
          at: '298:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt hi',
          who: 'Module'
          });
        v277 = v268;
        }
      else {
        const v299 = stdlib.eq(v268, stdlib.checkedBigNumberify('302:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v299, {
          at: '302:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt 0',
          who: 'Module'
          });
        const v306 = stdlib.muldiv(v271, v273, v276);
        const v313 = stdlib.muldiv(v272, v274, v276);
        const v315 = stdlib.lt(v306, v313);
        const v316 = v315 ? v306 : v313;
        v277 = v316;
        }
      
      return v277;}),
    computeSwap_: ((_v317, _v318, _v319, _v320 ) => {
        const v317 = stdlib.protect(ctc2, _v317, null);
        const v318 = stdlib.protect(ctc1, _v318, null);
        const v319 = stdlib.protect(ctc1, _v319, null);
        const v320 = stdlib.protect(ctc4, _v320, null);
      
      const v321 = v318.A;
      const v322 = v318.B;
      const v323 = v319.A;
      const v324 = v319.B;
      const v326 = v320.protoFee;
      const v327 = v320.lpFee;
      const v328 = v320.totFee;
      const v329 = stdlib.lt(v326, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v330 = stdlib.lt(v327, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v331 = v329 ? v330 : false;
      const v332 = stdlib.add(v327, v326);
      const v333 = stdlib.eq(v328, v332);
      const v334 = v331 ? v333 : false;
      const v335 = stdlib.lt(v328, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v336 = v334 ? v335 : false;
      const v337 = stdlib.gt(v328, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v338 = v336 ? v337 : false;
      stdlib.assert(v338, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v340 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v340, {
        at: '279:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v341;
      if (v317) {
        const v346 = stdlib.eq(v322, stdlib.checkedBigNumberify('./index.rsh:266:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v346, {
          at: './index.rsh:266:10:application',
          fs: ['at 280:31:application call to "computeSwap" (defined at: ./index.rsh:262:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v355 = stdlib.add(v323, v321);
        const v363 = stdlib.muldiv(v321, v324, v355);
        const v364 = stdlib.cast(false, true, v321);
        const v365 = stdlib.cast(false, true, v328);
        const v366 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v365);
        const v367 = stdlib.mul256(v364, v366);
        const v368 = stdlib.cast(false, true, v355);
        const v369 = stdlib.mul256(v368, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v370 = stdlib.add256(v369, v367);
        const v371 = stdlib.cast(false, true, v324);
        const v372 = stdlib.mul256(v367, v371);
        const v373 = stdlib.div256(v372, v370);
        const v374 = stdlib.cast(true, false, v373);
        const v379 = stdlib.sub(v363, v374);
        const v383 = stdlib.mul(v326, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v384 = stdlib.div(v383, v328);
        const v390 = stdlib.muldiv(v379, v384, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v395 = stdlib.muldiv(v321, v326, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v403 = stdlib.muldiv(v395, v324, v355);
        const v404 = stdlib.gt(v403, v390);
        const v405 = [v395, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v406 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v390];
        const v407 = v404 ? v405 : v406;
        const v409 = v407[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
        const v410 = v407[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
        const v412 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v374
          };
        const v414 = {
          A: v409,
          B: v410
          };
        const v415 = [v412, v414];
        v341 = v415;
        }
      else {
        const v416 = stdlib.eq(v321, stdlib.checkedBigNumberify('./index.rsh:271:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v416, {
          at: './index.rsh:271:10:application',
          fs: ['at 280:31:application call to "computeSwap" (defined at: ./index.rsh:262:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v425 = stdlib.add(v324, v322);
        const v433 = stdlib.muldiv(v322, v323, v425);
        const v434 = stdlib.cast(false, true, v322);
        const v435 = stdlib.cast(false, true, v328);
        const v436 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v435);
        const v437 = stdlib.mul256(v434, v436);
        const v438 = stdlib.cast(false, true, v425);
        const v439 = stdlib.mul256(v438, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v440 = stdlib.add256(v439, v437);
        const v441 = stdlib.cast(false, true, v323);
        const v442 = stdlib.mul256(v437, v441);
        const v443 = stdlib.div256(v442, v440);
        const v444 = stdlib.cast(true, false, v443);
        const v449 = stdlib.sub(v433, v444);
        const v453 = stdlib.mul(v326, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v454 = stdlib.div(v453, v328);
        const v460 = stdlib.muldiv(v449, v454, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v465 = stdlib.muldiv(v322, v326, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v473 = stdlib.muldiv(v465, v323, v425);
        const v474 = stdlib.gt(v473, v460);
        const v475 = [v465, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v476 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460];
        const v477 = v474 ? v475 : v476;
        const v479 = v477[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
        const v480 = v477[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
        const v482 = {
          A: v444,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v484 = {
          A: v480,
          B: v479
          };
        const v485 = [v482, v484];
        v341 = v485;
        }
      const v486 = v341[stdlib.checkedBigNumberify('280:11:array', stdlib.UInt_max, '0')];
      const v487 = v341[stdlib.checkedBigNumberify('280:11:array', stdlib.UInt_max, '1')];
      const v488 = v486.A;
      const v489 = v486.B;
      const v490 = v487.A;
      const v491 = v487.B;
      const v492 = {
        A: v488,
        B: v489
        };
      const v493 = {
        A: v490,
        B: v491
        };
      const v494 = [v492, v493];
      
      return v494;})
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
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v3326, v3344, v3372, v3406, v3407, v3408, v3409] = svs;
            return (await ((async () => {
              
              const v7669 = v3406.A;
              const v7670 = v3406.B;
              const v7671 = v3407.A;
              const v7672 = v3407.B;
              const v7673 = v3409.protoFee;
              const v7674 = v3409.lpFee;
              const v7675 = v3409.totFee;
              const v7676 = v3409.protoAddr;
              const v7677 = v3409.locked;
              const v7678 = v3408.A;
              const v7679 = v3408.B;
              const v7680 = {
                A: v7669,
                B: v7670
                };
              const v7681 = {
                A: v7671,
                B: v7672
                };
              const v7682 = {
                locked: v7677,
                lpFee: v7674,
                protoAddr: v7676,
                protoFee: v7673,
                totFee: v7675
                };
              const v7683 = {
                A: v7678,
                B: v7679
                };
              const v7685 = {
                liquidityToken: v3372,
                lptBals: v7680,
                poolBals: v7681,
                protoBals: v7683,
                protoInfo: v7682,
                tokA: v3344,
                tokB: v3326
                };
              
              return v7685;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413] = svs;
            return (await ((async () => {
              
              const v3480 = v3406.A;
              const v3481 = v3406.B;
              const v3482 = v3407.A;
              const v3483 = v3407.B;
              const v3484 = v3409.protoFee;
              const v3485 = v3409.lpFee;
              const v3486 = v3409.totFee;
              const v3487 = v3409.protoAddr;
              const v3488 = v3409.locked;
              const v3489 = v3408.A;
              const v3490 = v3408.B;
              const v3491 = {
                A: v3480,
                B: v3481
                };
              const v3492 = {
                A: v3482,
                B: v3483
                };
              const v3493 = {
                locked: v3488,
                lpFee: v3485,
                protoAddr: v3487,
                protoFee: v3484,
                totFee: v3486
                };
              const v3494 = {
                A: v3489,
                B: v3490
                };
              const v3496 = {
                liquidityToken: v3372,
                lptBals: v3491,
                poolBals: v3492,
                protoBals: v3494,
                protoInfo: v3493,
                tokA: v3344,
                tokB: v3326
                };
              
              return v3496;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
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
  const ctc13 = stdlib.T_Tuple([ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_738: ctc10,
    Provider_deposit0_738: ctc12,
    Provider_withdraw0_738: ctc13,
    Trader_swapAForB0_738: ctc14,
    Trader_swapBForA0_738: ctc14
    });
  const ctc16 = stdlib.T_Tuple([]);
  
  
  const v3316 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v3317 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v3318 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v3319 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v3323 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v3323, {
    at: './index.rsh:354:10:application',
    fs: ['at ./index.rsh:363:15:application call to "checkInput" (defined at: ./index.rsh:353:37:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [null, v3319, v3316, v3317, v3318],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:365:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:365:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3325, v3326, v3327, v3328, v3329], secs: v3331, time: v3330, didSend: v515, from: v3324 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3326
        });
      ;
      const v3340 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      ;
      const v3341 = await ctc.getContractInfo();
      const v3344 = ['None', null];
      const v3345 = [stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0'),
        fees: stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v3329,
        pays: stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0'),
        toks: []
        })), undefined)];
      const v3346 = await txn1.getOutput('internal', 'v3345', ctc9, v3345);
      const v3348 = v3346[stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0')];
      const v3349 = v3346[stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '1')];
      const v3350 = v3349.protoFee;
      const v3351 = v3349.lpFee;
      const v3352 = v3349.totFee;
      const v3353 = stdlib.lt(v3350, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v3354 = stdlib.lt(v3351, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v3355 = v3353 ? v3354 : false;
      const v3356 = stdlib.add(v3351, v3350);
      const v3357 = stdlib.eq(v3352, v3356);
      const v3358 = v3355 ? v3357 : false;
      const v3359 = stdlib.lt(v3352, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v3360 = v3358 ? v3359 : false;
      const v3361 = stdlib.gt(v3352, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v3362 = v3360 ? v3361 : false;
      ;
      const v3367 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0'), v3348);
      ;
      const v3368 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3369 = '                                                                                                ';
      const v3370 = '                                ';
      const v3371 = stdlib.simTokenNew(sim_r, v3327, v3328, v3369, v3370, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v3372 = await txn1.getOutput('internal', 'v3371', ctc3, v3371);
      const v3373 = [v3326];
      const v7748 = v3373[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
      const v7752 = stdlib.tokenEq(v3372, v7748);
      const v3381 = v7752 ? false : true;
      ;
      
      const v3403 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3405 = false;
      const v3406 = v3368;
      const v3407 = v3403;
      const v3408 = v3403;
      const v3409 = v3349;
      const v3410 = v3330;
      const v3413 = v3348;
      
      if (await (async () => {
        const v3479 = v3405 ? false : true;
        
        return v3479;})()) {
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
  const {data: [v3325, v3326, v3327, v3328, v3329], secs: v3331, time: v3330, didSend: v515, from: v3324 } = txn1;
  ;
  ;
  const v3340 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v3340, {
    at: './index.rsh:354:10:application',
    fs: ['at ./index.rsh:366:13:application call to "checkInput" (defined at: ./index.rsh:353:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3341 = await ctc.getContractInfo();
  const v3344 = ['None', null];
  const v3345 = undefined /* Remote */;
  const v3346 = await txn1.getOutput('internal', 'v3345', ctc9, v3345);
  const v3348 = v3346[stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0')];
  const v3349 = v3346[stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '1')];
  const v3350 = v3349.protoFee;
  const v3351 = v3349.lpFee;
  const v3352 = v3349.totFee;
  const v3353 = stdlib.lt(v3350, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v3354 = stdlib.lt(v3351, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v3355 = v3353 ? v3354 : false;
  const v3356 = stdlib.add(v3351, v3350);
  const v3357 = stdlib.eq(v3352, v3356);
  const v3358 = v3355 ? v3357 : false;
  const v3359 = stdlib.lt(v3352, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v3360 = v3358 ? v3359 : false;
  const v3361 = stdlib.gt(v3352, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v3362 = v3360 ? v3361 : false;
  stdlib.assert(v3362, {
    at: './index.rsh:370:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3367 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:370:14:application', stdlib.UInt_max, '0'), v3348);
  stdlib.assert(v3367, {
    at: './index.rsh:370:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v3368 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v3369 = '                                                                                                ';
  const v3370 = '                                ';
  const v3371 = undefined /* TokenNew */;
  const v3372 = await txn1.getOutput('internal', 'v3371', ctc3, v3371);
  const v3373 = [v3326];
  const v7748 = v3373[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v7752 = stdlib.tokenEq(v3372, v7748);
  const v3381 = v7752 ? false : true;
  stdlib.assert(v3381, {
    at: './index.rsh:374:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v3372), {
    at: './index.rsh:382:36:application',
    fs: ['at ./index.rsh:382:36:application call to [unknown function] (defined at: ./index.rsh:382:36:function exp)', 'at ./index.rsh:382:36:application call to "liftedInteract" (defined at: ./index.rsh:382:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v3403 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3405 = false;
  let v3406 = v3368;
  let v3407 = v3403;
  let v3408 = v3403;
  let v3409 = v3349;
  let v3410 = v3330;
  let v3413 = v3348;
  
  while (await (async () => {
    const v3479 = v3405 ? false : true;
    
    return v3479;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn2;
    switch (v4066[0]) {
      case 'Protocol_harvest0_738': {
        const v4069 = v4066[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v4194 = v4069[stdlib.checkedBigNumberify('./index.rsh:507:9:spread', stdlib.UInt_max, '0')];
        const v4195 = v4069[stdlib.checkedBigNumberify('./index.rsh:507:9:spread', stdlib.UInt_max, '1')];
        const v4196 = v3409.protoAddr;
        const v4197 = stdlib.addressEq(v4065, v4196);
        stdlib.assert(v4197, {
          at: './index.rsh:412:14:application',
          fs: ['at ./index.rsh:510:32:application call to "doHarvest" (defined at: ./index.rsh:411:50:function exp)', 'at ./index.rsh:510:20:application call to [unknown function] (defined at: ./index.rsh:510:20:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v4198 = v4195.protoFee;
        const v4199 = v4195.lpFee;
        const v4200 = v4195.totFee;
        const v4201 = stdlib.lt(v4198, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
        const v4202 = stdlib.lt(v4199, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
        const v4203 = v4201 ? v4202 : false;
        const v4204 = stdlib.add(v4199, v4198);
        const v4205 = stdlib.eq(v4200, v4204);
        const v4206 = v4203 ? v4205 : false;
        const v4207 = stdlib.lt(v4200, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v4208 = v4206 ? v4207 : false;
        const v4209 = stdlib.gt(v4200, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v4210 = v4208 ? v4209 : false;
        stdlib.assert(v4210, {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:413:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:510:32:application call to "doHarvest" (defined at: ./index.rsh:411:50:function exp)', 'at ./index.rsh:510:20:application call to [unknown function] (defined at: ./index.rsh:510:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4212 = (stdlib.le(await ctc.getBalance(), v3413) ? stdlib.checkedBigNumberify('./index.rsh:414:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3413));
        const v4213 = stdlib.add(v4212, v3413);
        const v4215 = v3406.B;
        const v4218 = v4195.locked;
        const v4219 = stdlib.eq(v4215, stdlib.checkedBigNumberify('./index.rsh:417:56:decimal', stdlib.UInt_max, '0'));
        const v4220 = v4218 ? v4219 : false;
        const v4221 = v3407.A;
        const v4222 = v3407.B;
        const v4223 = stdlib.eq(v4221, stdlib.checkedBigNumberify('./index.rsh:398:37:decimal', stdlib.UInt_max, '0'));
        const v4224 = stdlib.eq(v4222, stdlib.checkedBigNumberify('./index.rsh:398:47:decimal', stdlib.UInt_max, '0'));
        const v4225 = v4223 ? v4224 : false;
        const v4226 = v4220 ? v4225 : false;
        const v4227 = v3408.A;
        const v4228 = v3408.B;
        const v4229 = stdlib.add(v4227, v4212);
        const v4248 = stdlib.sub(v4213, v4229);
        ;
        ;
        const v4263 = {
          A: v4227,
          B: v4228
          };
        const v4264 = [v4263, v4212];
        await txn2.getOutput('Protocol_harvest', 'v4264', ctc12, v4264);
        const v4292 = v4195.protoAddr;
        const v4294 = {
          locked: v4218,
          lpFee: v4199,
          protoAddr: v4292,
          protoFee: v4198,
          totFee: v4200
          };
        null;
        const cv3405 = v4226;
        const cv3406 = v3406;
        const cv3407 = v3407;
        const cv3408 = v3403;
        const cv3409 = v4195;
        const cv3410 = v4067;
        const cv3413 = v4248;
        
        v3405 = cv3405;
        v3406 = cv3406;
        v3407 = cv3407;
        v3408 = cv3408;
        v3409 = cv3409;
        v3410 = cv3410;
        v3413 = cv3413;
        
        continue;
        break;
        }
      case 'Provider_deposit0_738': {
        const v4789 = v4066[1];
        undefined /* setApiDetails */;
        const v4809 = v4789[stdlib.checkedBigNumberify('./index.rsh:517:9:spread', stdlib.UInt_max, '0')];
        const v4811 = v4809.A;
        const v4812 = v4809.B;
        const v4894 = stdlib.add(v3413, v4811);
        ;
        ;
        ;
        const v5022 = v4789[stdlib.checkedBigNumberify('./index.rsh:517:9:spread', stdlib.UInt_max, '1')];
        const v5023 = v3409.locked;
        const v5024 = v5023 ? false : true;
        stdlib.assert(v5024, {
          at: './index.rsh:438:14:application',
          fs: ['at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v5025;
        const v5028 = v3406.A;
        const v5029 = v3406.B;
        const v5031 = stdlib.eq(v5029, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
        if (v5031) {
          const v5032 = stdlib.cast(false, true, v4811);
          const v5033 = stdlib.cast(false, true, v4812);
          const v5034 = stdlib.cast(false, true, v5022);
          const v5036 = stdlib.mul256(v5034, v5034);
          const v5037 = stdlib.mul256(v5032, v5033);
          const v5038 = stdlib.gt256(v5032, v5033);
          const v5039 = v5038 ? v5032 : v5033;
          const v5040 = stdlib.mul256(v5039, v5039);
          const v5041 = stdlib.le256(v5037, v5036);
          stdlib.assert(v5041, {
            at: './index.rsh:297:10:application',
            fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
            msg: 'sqrt lo',
            who: 'Admin'
            });
          const v5042 = stdlib.le256(v5036, v5040);
          stdlib.assert(v5042, {
            at: './index.rsh:298:10:application',
            fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
            msg: 'sqrt hi',
            who: 'Admin'
            });
          v5025 = v5022;
          }
        else {
          const v5043 = v3407.A;
          const v5044 = v3407.B;
          const v5045 = stdlib.eq(v5022, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5045, {
            at: './index.rsh:302:10:application',
            fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
            msg: 'sqrt 0',
            who: 'Admin'
            });
          const v5049 = stdlib.muldiv(v4811, v5043, v5029);
          const v5053 = stdlib.muldiv(v4812, v5044, v5029);
          const v5054 = stdlib.lt(v5049, v5053);
          const v5055 = v5054 ? v5049 : v5053;
          v5025 = v5055;
          }
        const v5057 = v3407.A;
        const v5061 = stdlib.add(v4811, v5057);
        const v5063 = v3407.B;
        const v5067 = stdlib.add(v4812, v5063);
        const v5068 = {
          A: v5061,
          B: v5067
          };
        const v5075 = stdlib.sub(v5028, v5025);
        const v5079 = stdlib.add(v5029, v5025);
        const v5080 = {
          A: v5075,
          B: v5079
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v5025', ctc5, v5025);
        const v5117 = {
          A: v4811,
          B: v4812
          };
        const v5118 = {
          A: v5061,
          B: v5067
          };
        const v5119 = {
          A: v5075,
          B: v5079
          };
        null;
        const cv3405 = false;
        const cv3406 = v5080;
        const cv3407 = v5068;
        const cv3408 = v3408;
        const cv3409 = v3409;
        const cv3410 = v4067;
        const cv3413 = v4894;
        
        v3405 = cv3405;
        v3406 = cv3406;
        v3407 = cv3407;
        v3408 = cv3408;
        v3409 = cv3409;
        v3410 = cv3410;
        v3413 = cv3413;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_738': {
        const v5509 = v4066[1];
        undefined /* setApiDetails */;
        const v5549 = v5509[stdlib.checkedBigNumberify('./index.rsh:512:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v5850 = v3406.A;
        const v5851 = v3406.B;
        const v5854 = v3407.A;
        const v5855 = v3407.B;
        const v5859 = stdlib.muldiv(v5549, v5854, v5851);
        const v5863 = stdlib.muldiv(v5549, v5855, v5851);
        const v5872 = stdlib.add(v5850, v5549);
        const v5875 = stdlib.sub(v5851, v5549);
        const v5876 = {
          A: v5872,
          B: v5875
          };
        const v5881 = stdlib.sub(v5854, v5859);
        const v5885 = stdlib.sub(v5855, v5863);
        const v5886 = {
          A: v5881,
          B: v5885
          };
        const v5905 = stdlib.sub(v3413, v5859);
        ;
        ;
        const v5918 = {
          A: v5859,
          B: v5863
          };
        await txn2.getOutput('Provider_withdraw', 'v5918', ctc11, v5918);
        const v5928 = {
          A: v5881,
          B: v5885
          };
        const v5929 = {
          A: v5872,
          B: v5875
          };
        null;
        const cv3405 = false;
        const cv3406 = v5876;
        const cv3407 = v5886;
        const cv3408 = v3408;
        const cv3409 = v3409;
        const cv3410 = v4067;
        const cv3413 = v5905;
        
        v3405 = cv3405;
        v3406 = cv3406;
        v3407 = cv3407;
        v3408 = cv3408;
        v3409 = cv3409;
        v3410 = cv3410;
        v3413 = cv3413;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_738': {
        const v6229 = v4066[1];
        undefined /* setApiDetails */;
        const v6283 = v6229[stdlib.checkedBigNumberify('./index.rsh:522:9:spread', stdlib.UInt_max, '0')];
        const v6334 = stdlib.add(v3413, v6283);
        ;
        ;
        ;
        const v6660 = v6229[stdlib.checkedBigNumberify('./index.rsh:522:9:spread', stdlib.UInt_max, '1')];
        const v6663 = v3409.locked;
        const v6664 = v6663 ? false : true;
        stdlib.assert(v6664, {
          at: './index.rsh:450:14:application',
          fs: ['at ./index.rsh:525:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6665 = v3407.A;
        const v6666 = v3407.B;
        const v6667 = v3409.protoFee;
        const v6668 = v3409.totFee;
        const v6672 = stdlib.add(v6665, v6283);
        const v6676 = stdlib.muldiv(v6283, v6666, v6672);
        const v6677 = stdlib.cast(false, true, v6283);
        const v6678 = stdlib.cast(false, true, v6668);
        const v6679 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6678);
        const v6680 = stdlib.mul256(v6677, v6679);
        const v6681 = stdlib.cast(false, true, v6672);
        const v6682 = stdlib.mul256(v6681, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v6683 = stdlib.add256(v6682, v6680);
        const v6684 = stdlib.cast(false, true, v6666);
        const v6685 = stdlib.mul256(v6680, v6684);
        const v6686 = stdlib.div256(v6685, v6683);
        const v6687 = stdlib.cast(true, false, v6686);
        const v6690 = stdlib.sub(v6676, v6687);
        const v6693 = stdlib.mul(v6667, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v6694 = stdlib.div(v6693, v6668);
        const v6697 = stdlib.muldiv(v6690, v6694, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v6699 = stdlib.muldiv(v6283, v6667, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v6703 = stdlib.muldiv(v6699, v6666, v6672);
        const v6704 = stdlib.gt(v6703, v6697);
        const v6705 = [v6699, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6706 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6697];
        const v6707 = v6704 ? v6705 : v6706;
        const v6709 = v6707[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
        const v6710 = v6707[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
        const v6729 = stdlib.sub(v6666, v6687);
        const v6733 = stdlib.sub(v6672, v6709);
        const v6736 = stdlib.sub(v6729, v6710);
        const v6737 = {
          A: v6733,
          B: v6736
          };
        const v6738 = v3408.A;
        const v6742 = stdlib.add(v6738, v6709);
        const v6743 = v3408.B;
        const v6747 = stdlib.add(v6743, v6710);
        const v6748 = {
          A: v6742,
          B: v6747
          };
        const v6749 = stdlib.le(v6660, v6687);
        stdlib.assert(v6749, {
          at: './index.rsh:471:14:application',
          fs: ['at ./index.rsh:525:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6752 = stdlib.cast(false, true, v6665);
        const v6754 = stdlib.mul256(v6752, v6684);
        const v6755 = stdlib.cast(false, true, v6733);
        const v6756 = stdlib.cast(false, true, v6736);
        const v6757 = stdlib.mul256(v6755, v6756);
        const v6758 = stdlib.ge256(v6757, v6754);
        stdlib.assert(v6758, {
          at: './index.rsh:481:14:application',
          fs: ['at ./index.rsh:525:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        ;
        const v6786 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v6687
          };
        await txn2.getOutput('Trader_swapAForB', 'v6786', ctc11, v6786);
        const v6796 = {
          A: v6283,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6798 = {
          A: v6733,
          B: v6736
          };
        null;
        const cv3405 = false;
        const cv3406 = v3406;
        const cv3407 = v6737;
        const cv3408 = v6748;
        const cv3409 = v3409;
        const cv3410 = v4067;
        const cv3413 = v6334;
        
        v3405 = cv3405;
        v3406 = cv3406;
        v3407 = cv3407;
        v3408 = cv3408;
        v3409 = cv3409;
        v3410 = cv3410;
        v3413 = cv3413;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_738': {
        const v6949 = v4066[1];
        undefined /* setApiDetails */;
        const v7018 = v6949[stdlib.checkedBigNumberify('./index.rsh:527:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v7529 = v6949[stdlib.checkedBigNumberify('./index.rsh:527:9:spread', stdlib.UInt_max, '1')];
        const v7532 = v3409.locked;
        const v7533 = v7532 ? false : true;
        stdlib.assert(v7533, {
          at: './index.rsh:450:14:application',
          fs: ['at ./index.rsh:530:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7534 = v3407.A;
        const v7535 = v3407.B;
        const v7536 = v3409.protoFee;
        const v7537 = v3409.totFee;
        const v7541 = stdlib.add(v7535, v7018);
        const v7545 = stdlib.muldiv(v7018, v7534, v7541);
        const v7546 = stdlib.cast(false, true, v7018);
        const v7547 = stdlib.cast(false, true, v7537);
        const v7548 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7547);
        const v7549 = stdlib.mul256(v7546, v7548);
        const v7550 = stdlib.cast(false, true, v7541);
        const v7551 = stdlib.mul256(v7550, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v7552 = stdlib.add256(v7551, v7549);
        const v7553 = stdlib.cast(false, true, v7534);
        const v7554 = stdlib.mul256(v7549, v7553);
        const v7555 = stdlib.div256(v7554, v7552);
        const v7556 = stdlib.cast(true, false, v7555);
        const v7559 = stdlib.sub(v7545, v7556);
        const v7562 = stdlib.mul(v7536, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v7563 = stdlib.div(v7562, v7537);
        const v7566 = stdlib.muldiv(v7559, v7563, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v7568 = stdlib.muldiv(v7018, v7536, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v7572 = stdlib.muldiv(v7568, v7534, v7541);
        const v7573 = stdlib.gt(v7572, v7566);
        const v7574 = [v7568, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v7575 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7566];
        const v7576 = v7573 ? v7574 : v7575;
        const v7578 = v7576[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
        const v7579 = v7576[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
        const v7596 = stdlib.sub(v7534, v7556);
        const v7602 = stdlib.sub(v7596, v7579);
        const v7605 = stdlib.sub(v7541, v7578);
        const v7606 = {
          A: v7602,
          B: v7605
          };
        const v7607 = v3408.A;
        const v7611 = stdlib.add(v7607, v7579);
        const v7612 = v3408.B;
        const v7616 = stdlib.add(v7612, v7578);
        const v7617 = {
          A: v7611,
          B: v7616
          };
        const v7618 = stdlib.le(v7529, v7556);
        stdlib.assert(v7618, {
          at: './index.rsh:471:14:application',
          fs: ['at ./index.rsh:530:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7623 = stdlib.cast(false, true, v7535);
        const v7624 = stdlib.mul256(v7553, v7623);
        const v7625 = stdlib.cast(false, true, v7602);
        const v7626 = stdlib.cast(false, true, v7605);
        const v7627 = stdlib.mul256(v7625, v7626);
        const v7628 = stdlib.ge256(v7627, v7624);
        stdlib.assert(v7628, {
          at: './index.rsh:481:14:application',
          fs: ['at ./index.rsh:530:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7647 = stdlib.sub(v3413, v7556);
        ;
        const v7648 = {
          A: v7556,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v7648', ctc11, v7648);
        const v7658 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v7018
          };
        const v7660 = {
          A: v7602,
          B: v7605
          };
        null;
        const cv3405 = false;
        const cv3406 = v3406;
        const cv3407 = v7606;
        const cv3408 = v7617;
        const cv3409 = v3409;
        const cv3410 = v4067;
        const cv3413 = v7647;
        
        v3405 = cv3405;
        v3406 = cv3406;
        v3407 = cv3407;
        v3408 = cv3408;
        v3409 = cv3409;
        v3410 = cv3410;
        v3413 = cv3413;
        
        continue;
        break;
        }
      }
    
    }
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc16],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v7696], secs: v7698, time: v7697, didSend: v2992, from: v7695 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v7699 = null;
  await txn2.getOutput('Protocol_delete', 'v7699', ctc4, v7699);
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  };
export async function Protocol_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive an interact object as its second argument.`));}
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
  
  
  const [v3326, v3344, v3372, v3406, v3407, v3408, v3409] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v7694 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:535:3:application',
    fs: ['at ./index.rsh:535:3:application call to [unknown function] (defined at: ./index.rsh:535:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3326, v3344, v3372, v3406, v3407, v3408, v3409, v7694],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:535:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7696], secs: v7698, time: v7697, didSend: v2992, from: v7695 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v7699 = null;
      const v7700 = await txn1.getOutput('Protocol_delete', 'v7699', ctc1, v7699);
      
      stdlib.simTokenBurn(sim_r, v3372, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v3372);
      sim_r.txns.push({
        kind: 'halt',
        tok: v3326
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
  const {data: [v7696], secs: v7698, time: v7697, didSend: v2992, from: v7695 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v7699 = null;
  const v7700 = await txn1.getOutput('Protocol_delete', 'v7699', ctc1, v7699);
  stdlib.protect(ctc1, await interact.out(v7696, v7700), {
    at: './index.rsh:535:3:application',
    fs: ['at ./index.rsh:535:3:application call to [unknown function] (defined at: ./index.rsh:535:3:function exp)', 'at ./index.rsh:536:4:application call to "k" (defined at: ./index.rsh:535:3:function exp)'],
    msg: 'out',
    who: 'Protocol_delete'
    });
  
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  };
export async function Protocol_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive an interact object as its second argument.`));}
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
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_738: ctc8,
    Provider_deposit0_738: ctc10,
    Provider_withdraw0_738: ctc11,
    Trader_swapAForB0_738: ctc12,
    Trader_swapBForA0_738: ctc12
    });
  
  
  const [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3503 = ctc.selfAddress();
  const v3505 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:508:17:application call to [unknown function] (defined at: ./index.rsh:508:17:function exp)', 'at ./index.rsh:385:19:application call to "runProtocol_harvest0_738" (defined at: ./index.rsh:507:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v3507 = v3505[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3508 = v3507.protoFee;
  const v3509 = v3507.lpFee;
  const v3510 = v3507.totFee;
  const v3511 = stdlib.lt(v3508, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v3512 = stdlib.lt(v3509, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v3513 = v3511 ? v3512 : false;
  const v3514 = stdlib.add(v3509, v3508);
  const v3515 = stdlib.eq(v3510, v3514);
  const v3516 = v3513 ? v3515 : false;
  const v3517 = stdlib.lt(v3510, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v3518 = v3516 ? v3517 : false;
  const v3519 = stdlib.gt(v3510, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v3520 = v3518 ? v3519 : false;
  stdlib.assert(v3520, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:508:17:application call to [unknown function] (defined at: ./index.rsh:508:17:function exp)', 'at ./index.rsh:385:19:application call to "runProtocol_harvest0_738" (defined at: ./index.rsh:507:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v3524 = v3409.protoAddr;
  const v3525 = stdlib.addressEq(v3503, v3524);
  stdlib.assert(v3525, {
    at: './index.rsh:412:14:application',
    fs: ['at ./index.rsh:508:41:application call to "doHarvest" (defined at: ./index.rsh:411:50:function exp)', 'at ./index.rsh:508:17:application call to [unknown function] (defined at: ./index.rsh:508:17:function exp)', 'at ./index.rsh:508:17:application call to [unknown function] (defined at: ./index.rsh:508:17:function exp)', 'at ./index.rsh:385:19:application call to "runProtocol_harvest0_738" (defined at: ./index.rsh:507:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v3413) ? stdlib.checkedBigNumberify('./index.rsh:414:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3413));
  const v3564 = ['Protocol_harvest0_738', v3505];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413, v3564],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:377:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:509:25:decimal', stdlib.UInt_max, '0'), v3372], [stdlib.checkedBigNumberify('./index.rsh:509:31:decimal', stdlib.UInt_max, '0'), v3326]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
      
      switch (v4066[0]) {
        case 'Protocol_harvest0_738': {
          const v4069 = v4066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          ;
          ;
          const v4194 = v4069[stdlib.checkedBigNumberify('./index.rsh:507:9:spread', stdlib.UInt_max, '0')];
          const v4195 = v4069[stdlib.checkedBigNumberify('./index.rsh:507:9:spread', stdlib.UInt_max, '1')];
          const v4196 = v3409.protoAddr;
          const v4197 = stdlib.addressEq(v4065, v4196);
          ;
          const v4198 = v4195.protoFee;
          const v4199 = v4195.lpFee;
          const v4200 = v4195.totFee;
          const v4201 = stdlib.lt(v4198, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v4202 = stdlib.lt(v4199, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v4203 = v4201 ? v4202 : false;
          const v4204 = stdlib.add(v4199, v4198);
          const v4205 = stdlib.eq(v4200, v4204);
          const v4206 = v4203 ? v4205 : false;
          const v4207 = stdlib.lt(v4200, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v4208 = v4206 ? v4207 : false;
          const v4209 = stdlib.gt(v4200, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v4210 = v4208 ? v4209 : false;
          ;
          const v4212 = (stdlib.le(await ctc.getBalance(), v3413) ? stdlib.checkedBigNumberify('./index.rsh:414:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3413));
          const v4213 = stdlib.add(v4212, v3413);
          const v4215 = v3406.B;
          const v4218 = v4195.locked;
          const v4219 = stdlib.eq(v4215, stdlib.checkedBigNumberify('./index.rsh:417:56:decimal', stdlib.UInt_max, '0'));
          const v4220 = v4218 ? v4219 : false;
          const v4221 = v3407.A;
          const v4222 = v3407.B;
          const v4223 = stdlib.eq(v4221, stdlib.checkedBigNumberify('./index.rsh:398:37:decimal', stdlib.UInt_max, '0'));
          const v4224 = stdlib.eq(v4222, stdlib.checkedBigNumberify('./index.rsh:398:47:decimal', stdlib.UInt_max, '0'));
          const v4225 = v4223 ? v4224 : false;
          const v4226 = v4220 ? v4225 : false;
          const v4227 = v3408.A;
          const v4228 = v3408.B;
          const v4229 = stdlib.add(v4227, v4212);
          const v4248 = stdlib.sub(v4213, v4229);
          sim_r.txns.push({
            amt: v4229,
            kind: 'from',
            to: v4194,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v4228,
            kind: 'from',
            to: v4194,
            tok: v3326
            });
          const v4263 = {
            A: v4227,
            B: v4228
            };
          const v4264 = [v4263, v4212];
          const v4265 = await txn1.getOutput('Protocol_harvest', 'v4264', ctc10, v4264);
          
          const v4292 = v4195.protoAddr;
          const v4294 = {
            locked: v4218,
            lpFee: v4199,
            protoAddr: v4292,
            protoFee: v4198,
            totFee: v4200
            };
          null;
          const v11171 = v3406;
          const v11172 = v3407;
          const v11173 = v3403;
          const v11174 = v4195;
          const v11176 = v4248;
          if (v4226) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_738': {
          const v4789 = v4066[1];
          
          break;
          }
        case 'Provider_withdraw0_738': {
          const v5509 = v4066[1];
          
          break;
          }
        case 'Trader_swapAForB0_738': {
          const v6229 = v4066[1];
          
          break;
          }
        case 'Trader_swapBForA0_738': {
          const v6949 = v4066[1];
          
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
  const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
  switch (v4066[0]) {
    case 'Protocol_harvest0_738': {
      const v4069 = v4066[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v4194 = v4069[stdlib.checkedBigNumberify('./index.rsh:507:9:spread', stdlib.UInt_max, '0')];
      const v4195 = v4069[stdlib.checkedBigNumberify('./index.rsh:507:9:spread', stdlib.UInt_max, '1')];
      const v4196 = v3409.protoAddr;
      const v4197 = stdlib.addressEq(v4065, v4196);
      stdlib.assert(v4197, {
        at: './index.rsh:412:14:application',
        fs: ['at ./index.rsh:510:32:application call to "doHarvest" (defined at: ./index.rsh:411:50:function exp)', 'at ./index.rsh:510:20:application call to [unknown function] (defined at: ./index.rsh:510:20:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v4198 = v4195.protoFee;
      const v4199 = v4195.lpFee;
      const v4200 = v4195.totFee;
      const v4201 = stdlib.lt(v4198, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v4202 = stdlib.lt(v4199, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v4203 = v4201 ? v4202 : false;
      const v4204 = stdlib.add(v4199, v4198);
      const v4205 = stdlib.eq(v4200, v4204);
      const v4206 = v4203 ? v4205 : false;
      const v4207 = stdlib.lt(v4200, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v4208 = v4206 ? v4207 : false;
      const v4209 = stdlib.gt(v4200, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v4210 = v4208 ? v4209 : false;
      stdlib.assert(v4210, {
        at: './index.rsh:78:29:application',
        fs: ['at ./index.rsh:413:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:510:32:application call to "doHarvest" (defined at: ./index.rsh:411:50:function exp)', 'at ./index.rsh:510:20:application call to [unknown function] (defined at: ./index.rsh:510:20:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v4212 = (stdlib.le(await ctc.getBalance(), v3413) ? stdlib.checkedBigNumberify('./index.rsh:414:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3413));
      const v4213 = stdlib.add(v4212, v3413);
      const v4215 = v3406.B;
      const v4218 = v4195.locked;
      const v4219 = stdlib.eq(v4215, stdlib.checkedBigNumberify('./index.rsh:417:56:decimal', stdlib.UInt_max, '0'));
      const v4220 = v4218 ? v4219 : false;
      const v4221 = v3407.A;
      const v4222 = v3407.B;
      const v4223 = stdlib.eq(v4221, stdlib.checkedBigNumberify('./index.rsh:398:37:decimal', stdlib.UInt_max, '0'));
      const v4224 = stdlib.eq(v4222, stdlib.checkedBigNumberify('./index.rsh:398:47:decimal', stdlib.UInt_max, '0'));
      const v4225 = v4223 ? v4224 : false;
      const v4226 = v4220 ? v4225 : false;
      const v4227 = v3408.A;
      const v4228 = v3408.B;
      const v4229 = stdlib.add(v4227, v4212);
      const v4248 = stdlib.sub(v4213, v4229);
      ;
      ;
      const v4263 = {
        A: v4227,
        B: v4228
        };
      const v4264 = [v4263, v4212];
      const v4265 = await txn1.getOutput('Protocol_harvest', 'v4264', ctc10, v4264);
      if (v2198) {
        stdlib.protect(ctc1, await interact.out(v4069, v4265), {
          at: './index.rsh:507:10:application',
          fs: ['at ./index.rsh:507:10:application call to [unknown function] (defined at: ./index.rsh:507:10:function exp)', 'at ./index.rsh:420:12:application call to "k" (defined at: ./index.rsh:510:20:function exp)', 'at ./index.rsh:510:47:application call to [unknown function] (defined at: ./index.rsh:418:20:function exp)', 'at ./index.rsh:510:20:application call to [unknown function] (defined at: ./index.rsh:510:20:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v4292 = v4195.protoAddr;
      const v4294 = {
        locked: v4218,
        lpFee: v4199,
        protoAddr: v4292,
        protoFee: v4198,
        totFee: v4200
        };
      null;
      const v11171 = v3406;
      const v11172 = v3407;
      const v11173 = v3403;
      const v11174 = v4195;
      const v11176 = v4248;
      if (v4226) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_738': {
      const v4789 = v4066[1];
      return;
      break;
      }
    case 'Provider_withdraw0_738': {
      const v5509 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_738': {
      const v6229 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_738': {
      const v6949 = v4066[1];
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
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_738: ctc10,
    Provider_deposit0_738: ctc9,
    Provider_withdraw0_738: ctc11,
    Trader_swapAForB0_738: ctc12,
    Trader_swapBForA0_738: ctc12
    });
  
  
  const [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3616 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:385:19:application call to "runProvider_deposit0_738" (defined at: ./index.rsh:517:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v3617 = v3616[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3618 = v3616[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3619 = v3617.A;
  const v3620 = v3617.B;
  const v3624 = v3409.locked;
  const v3625 = v3624 ? false : true;
  stdlib.assert(v3625, {
    at: './index.rsh:438:14:application',
    fs: ['at ./index.rsh:518:41:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:385:19:application call to "runProvider_deposit0_738" (defined at: ./index.rsh:517:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Provider_deposit'
    });
  const v3630 = v3406.B;
  const v3632 = stdlib.eq(v3630, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
  if (v3632) {
    const v3633 = stdlib.cast(false, true, v3619);
    const v3634 = stdlib.cast(false, true, v3620);
    const v3635 = stdlib.cast(false, true, v3618);
    const v3637 = stdlib.mul256(v3635, v3635);
    const v3638 = stdlib.mul256(v3633, v3634);
    const v3639 = stdlib.gt256(v3633, v3634);
    const v3640 = v3639 ? v3633 : v3634;
    const v3641 = stdlib.mul256(v3640, v3640);
    const v3642 = stdlib.le256(v3638, v3637);
    stdlib.assert(v3642, {
      at: './index.rsh:297:10:application',
      fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:518:41:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:385:19:application call to "runProvider_deposit0_738" (defined at: ./index.rsh:517:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
      msg: 'sqrt lo',
      who: 'Provider_deposit'
      });
    const v3643 = stdlib.le256(v3637, v3641);
    stdlib.assert(v3643, {
      at: './index.rsh:298:10:application',
      fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:518:41:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:385:19:application call to "runProvider_deposit0_738" (defined at: ./index.rsh:517:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
      msg: 'sqrt hi',
      who: 'Provider_deposit'
      });
    }
  else {
    const v3646 = stdlib.eq(v3618, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v3646, {
      at: './index.rsh:302:10:application',
      fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:518:41:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:518:17:application call to [unknown function] (defined at: ./index.rsh:518:17:function exp)', 'at ./index.rsh:385:19:application call to "runProvider_deposit0_738" (defined at: ./index.rsh:517:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
      msg: 'sqrt 0',
      who: 'Provider_deposit'
      });
    }
  const v3689 = ['Provider_deposit0_738', v3616];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413, v3689],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3619, [[stdlib.checkedBigNumberify('./index.rsh:381:50:decimal', stdlib.UInt_max, '0'), v3372], [v3620, v3326]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
      
      switch (v4066[0]) {
        case 'Protocol_harvest0_738': {
          const v4069 = v4066[1];
          
          break;
          }
        case 'Provider_deposit0_738': {
          const v4789 = v4066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v4809 = v4789[stdlib.checkedBigNumberify('./index.rsh:517:9:spread', stdlib.UInt_max, '0')];
          const v4811 = v4809.A;
          const v4812 = v4809.B;
          const v4894 = stdlib.add(v3413, v4811);
          sim_r.txns.push({
            amt: v4811,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          sim_r.txns.push({
            amt: v4812,
            kind: 'to',
            tok: v3326
            });
          const v5022 = v4789[stdlib.checkedBigNumberify('./index.rsh:517:9:spread', stdlib.UInt_max, '1')];
          const v5023 = v3409.locked;
          const v5024 = v5023 ? false : true;
          ;
          let v5025;
          const v5028 = v3406.A;
          const v5029 = v3406.B;
          const v5031 = stdlib.eq(v5029, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
          if (v5031) {
            const v5032 = stdlib.cast(false, true, v4811);
            const v5033 = stdlib.cast(false, true, v4812);
            const v5034 = stdlib.cast(false, true, v5022);
            const v5036 = stdlib.mul256(v5034, v5034);
            const v5037 = stdlib.mul256(v5032, v5033);
            const v5038 = stdlib.gt256(v5032, v5033);
            const v5039 = v5038 ? v5032 : v5033;
            const v5040 = stdlib.mul256(v5039, v5039);
            const v5041 = stdlib.le256(v5037, v5036);
            ;
            const v5042 = stdlib.le256(v5036, v5040);
            ;
            v5025 = v5022;
            }
          else {
            const v5043 = v3407.A;
            const v5044 = v3407.B;
            const v5045 = stdlib.eq(v5022, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
            ;
            const v5049 = stdlib.muldiv(v4811, v5043, v5029);
            const v5053 = stdlib.muldiv(v4812, v5044, v5029);
            const v5054 = stdlib.lt(v5049, v5053);
            const v5055 = v5054 ? v5049 : v5053;
            v5025 = v5055;
            }
          const v5057 = v3407.A;
          const v5061 = stdlib.add(v4811, v5057);
          const v5063 = v3407.B;
          const v5067 = stdlib.add(v4812, v5063);
          const v5068 = {
            A: v5061,
            B: v5067
            };
          const v5075 = stdlib.sub(v5028, v5025);
          const v5079 = stdlib.add(v5029, v5025);
          const v5080 = {
            A: v5075,
            B: v5079
            };
          sim_r.txns.push({
            amt: v5025,
            kind: 'from',
            to: v4065,
            tok: v3372
            });
          const v5106 = await txn1.getOutput('Provider_deposit', 'v5025', ctc3, v5025);
          
          const v5117 = {
            A: v4811,
            B: v4812
            };
          const v5118 = {
            A: v5061,
            B: v5067
            };
          const v5119 = {
            A: v5075,
            B: v5079
            };
          null;
          const v11261 = v5080;
          const v11262 = v5068;
          const v11263 = v3408;
          const v11264 = v3409;
          const v11266 = v4894;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_738': {
          const v5509 = v4066[1];
          
          break;
          }
        case 'Trader_swapAForB0_738': {
          const v6229 = v4066[1];
          
          break;
          }
        case 'Trader_swapBForA0_738': {
          const v6949 = v4066[1];
          
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
  const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
  switch (v4066[0]) {
    case 'Protocol_harvest0_738': {
      const v4069 = v4066[1];
      return;
      break;
      }
    case 'Provider_deposit0_738': {
      const v4789 = v4066[1];
      undefined /* setApiDetails */;
      const v4809 = v4789[stdlib.checkedBigNumberify('./index.rsh:517:9:spread', stdlib.UInt_max, '0')];
      const v4811 = v4809.A;
      const v4812 = v4809.B;
      const v4894 = stdlib.add(v3413, v4811);
      ;
      ;
      ;
      const v5022 = v4789[stdlib.checkedBigNumberify('./index.rsh:517:9:spread', stdlib.UInt_max, '1')];
      const v5023 = v3409.locked;
      const v5024 = v5023 ? false : true;
      stdlib.assert(v5024, {
        at: './index.rsh:438:14:application',
        fs: ['at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
        msg: null,
        who: 'Provider_deposit'
        });
      let v5025;
      const v5028 = v3406.A;
      const v5029 = v3406.B;
      const v5031 = stdlib.eq(v5029, stdlib.checkedBigNumberify('./index.rsh:288:19:decimal', stdlib.UInt_max, '0'));
      if (v5031) {
        const v5032 = stdlib.cast(false, true, v4811);
        const v5033 = stdlib.cast(false, true, v4812);
        const v5034 = stdlib.cast(false, true, v5022);
        const v5036 = stdlib.mul256(v5034, v5034);
        const v5037 = stdlib.mul256(v5032, v5033);
        const v5038 = stdlib.gt256(v5032, v5033);
        const v5039 = v5038 ? v5032 : v5033;
        const v5040 = stdlib.mul256(v5039, v5039);
        const v5041 = stdlib.le256(v5037, v5036);
        stdlib.assert(v5041, {
          at: './index.rsh:297:10:application',
          fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
          msg: 'sqrt lo',
          who: 'Provider_deposit'
          });
        const v5042 = stdlib.le256(v5036, v5040);
        stdlib.assert(v5042, {
          at: './index.rsh:298:10:application',
          fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
          msg: 'sqrt hi',
          who: 'Provider_deposit'
          });
        v5025 = v5022;
        }
      else {
        const v5043 = v3407.A;
        const v5044 = v3407.B;
        const v5045 = stdlib.eq(v5022, stdlib.checkedBigNumberify('./index.rsh:302:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5045, {
          at: './index.rsh:302:10:application',
          fs: ['at ./index.rsh:439:31:application call to "computeMint" (defined at: ./index.rsh:285:52:function exp)', 'at ./index.rsh:520:32:application call to "doDeposit" (defined at: ./index.rsh:437:42:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
          msg: 'sqrt 0',
          who: 'Provider_deposit'
          });
        const v5049 = stdlib.muldiv(v4811, v5043, v5029);
        const v5053 = stdlib.muldiv(v4812, v5044, v5029);
        const v5054 = stdlib.lt(v5049, v5053);
        const v5055 = v5054 ? v5049 : v5053;
        v5025 = v5055;
        }
      const v5057 = v3407.A;
      const v5061 = stdlib.add(v4811, v5057);
      const v5063 = v3407.B;
      const v5067 = stdlib.add(v4812, v5063);
      const v5068 = {
        A: v5061,
        B: v5067
        };
      const v5075 = stdlib.sub(v5028, v5025);
      const v5079 = stdlib.add(v5029, v5025);
      const v5080 = {
        A: v5075,
        B: v5079
        };
      ;
      const v5106 = await txn1.getOutput('Provider_deposit', 'v5025', ctc3, v5025);
      if (v2198) {
        stdlib.protect(ctc1, await interact.out(v4789, v5106), {
          at: './index.rsh:517:10:application',
          fs: ['at ./index.rsh:517:10:application call to [unknown function] (defined at: ./index.rsh:517:10:function exp)', 'at ./index.rsh:444:12:application call to "k" (defined at: ./index.rsh:520:20:function exp)', 'at ./index.rsh:520:47:application call to [unknown function] (defined at: ./index.rsh:442:20:function exp)', 'at ./index.rsh:520:20:application call to [unknown function] (defined at: ./index.rsh:520:20:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v5117 = {
        A: v4811,
        B: v4812
        };
      const v5118 = {
        A: v5061,
        B: v5067
        };
      const v5119 = {
        A: v5075,
        B: v5079
        };
      null;
      const v11261 = v5080;
      const v11262 = v5068;
      const v11263 = v3408;
      const v11264 = v3409;
      const v11266 = v4894;
      return;
      
      break;
      }
    case 'Provider_withdraw0_738': {
      const v5509 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_738': {
      const v6229 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_738': {
      const v6949 = v4066[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_738: ctc9,
    Provider_deposit0_738: ctc11,
    Provider_withdraw0_738: ctc8,
    Trader_swapAForB0_738: ctc12,
    Trader_swapBForA0_738: ctc12
    });
  
  
  const [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3568 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:513:11:application call to [unknown function] (defined at: ./index.rsh:513:11:function exp)', 'at ./index.rsh:385:19:application call to "runProvider_withdraw0_738" (defined at: ./index.rsh:512:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v3569 = v3568[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3612 = ['Provider_withdraw0_738', v3568];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413, v3612],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:377:34:decimal', stdlib.UInt_max, '0'), [[v3569, v3372], [stdlib.checkedBigNumberify('./index.rsh:514:28:decimal', stdlib.UInt_max, '0'), v3326]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
      
      switch (v4066[0]) {
        case 'Protocol_harvest0_738': {
          const v4069 = v4066[1];
          
          break;
          }
        case 'Provider_deposit0_738': {
          const v4789 = v4066[1];
          
          break;
          }
        case 'Provider_withdraw0_738': {
          const v5509 = v4066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v5549 = v5509[stdlib.checkedBigNumberify('./index.rsh:512:9:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v5549,
            kind: 'to',
            tok: v3372
            });
          ;
          const v5850 = v3406.A;
          const v5851 = v3406.B;
          const v5854 = v3407.A;
          const v5855 = v3407.B;
          console.log({ v5850, v5851, v5854, v5855 });
          const v5859 = stdlib.muldiv(v5549, v5854, v5851);
          console.log({ v5859 });
          const v5863 = stdlib.muldiv(v5549, v5855, v5851);
          console.log({ v5863 });
          console.log({ v5850, v5549 });
          const v5872 = stdlib.add(v5850, v5549);
          console.log({ v5872 });
          const v5875 = stdlib.sub(v5851, v5549);
          const v5876 = {
            A: v5872,
            B: v5875
            };
          const v5881 = stdlib.sub(v5854, v5859);
          const v5885 = stdlib.sub(v5855, v5863);
          const v5886 = {
            A: v5881,
            B: v5885
            };
          const v5905 = stdlib.sub(v3413, v5859);
          sim_r.txns.push({
            amt: v5859,
            kind: 'from',
            to: v4065,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v5863,
            kind: 'from',
            to: v4065,
            tok: v3326
            });
          const v5918 = {
            A: v5859,
            B: v5863
            };
          const v5919 = await txn1.getOutput('Provider_withdraw', 'v5918', ctc10, v5918);
          
          const v5928 = {
            A: v5881,
            B: v5885
            };
          const v5929 = {
            A: v5872,
            B: v5875
            };
          null;
          const v11351 = v5876;
          const v11352 = v5886;
          const v11353 = v3408;
          const v11354 = v3409;
          const v11356 = v5905;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_738': {
          const v6229 = v4066[1];
          
          break;
          }
        case 'Trader_swapBForA0_738': {
          const v6949 = v4066[1];
          
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
  const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
  switch (v4066[0]) {
    case 'Protocol_harvest0_738': {
      const v4069 = v4066[1];
      return;
      break;
      }
    case 'Provider_deposit0_738': {
      const v4789 = v4066[1];
      return;
      break;
      }
    case 'Provider_withdraw0_738': {
      const v5509 = v4066[1];
      undefined /* setApiDetails */;
      const v5549 = v5509[stdlib.checkedBigNumberify('./index.rsh:512:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v5850 = v3406.A;
      const v5851 = v3406.B;
      const v5854 = v3407.A;
      const v5855 = v3407.B;
      const v5859 = stdlib.muldiv(v5549, v5854, v5851);
      const v5863 = stdlib.muldiv(v5549, v5855, v5851);
      const v5872 = stdlib.add(v5850, v5549);
      const v5875 = stdlib.sub(v5851, v5549);
      const v5876 = {
        A: v5872,
        B: v5875
        };
      const v5881 = stdlib.sub(v5854, v5859);
      const v5885 = stdlib.sub(v5855, v5863);
      const v5886 = {
        A: v5881,
        B: v5885
        };
      const v5905 = stdlib.sub(v3413, v5859);
      ;
      ;
      const v5918 = {
        A: v5859,
        B: v5863
        };
      const v5919 = await txn1.getOutput('Provider_withdraw', 'v5918', ctc10, v5918);
      if (v2198) {
        stdlib.protect(ctc1, await interact.out(v5509, v5919), {
          at: './index.rsh:512:10:application',
          fs: ['at ./index.rsh:512:10:application call to [unknown function] (defined at: ./index.rsh:512:10:function exp)', 'at ./index.rsh:432:12:application call to "k" (defined at: ./index.rsh:515:14:function exp)', 'at ./index.rsh:515:36:application call to [unknown function] (defined at: ./index.rsh:430:20:function exp)', 'at ./index.rsh:515:14:application call to [unknown function] (defined at: ./index.rsh:515:14:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v5928 = {
        A: v5881,
        B: v5885
        };
      const v5929 = {
        A: v5872,
        B: v5875
        };
      null;
      const v11351 = v5876;
      const v11352 = v5886;
      const v11353 = v3408;
      const v11354 = v3409;
      const v11356 = v5905;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_738': {
      const v6229 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_738': {
      const v6949 = v4066[1];
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
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_738: ctc9,
    Provider_deposit0_738: ctc11,
    Provider_withdraw0_738: ctc12,
    Trader_swapAForB0_738: ctc8,
    Trader_swapBForA0_738: ctc8
    });
  
  
  const [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3693 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapAForB0_738" (defined at: ./index.rsh:522:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v3694 = v3693[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3695 = v3693[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3701 = v3409.locked;
  const v3702 = v3701 ? false : true;
  stdlib.assert(v3702, {
    at: './index.rsh:450:14:application',
    fs: ['at ./index.rsh:523:36:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapAForB0_738" (defined at: ./index.rsh:522:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3703 = v3407.A;
  const v3704 = v3407.B;
  const v3705 = v3409.protoFee;
  const v3706 = v3409.totFee;
  const v3710 = stdlib.add(v3703, v3694);
  const v3714 = stdlib.muldiv(v3694, v3704, v3710);
  const v3715 = stdlib.cast(false, true, v3694);
  const v3716 = stdlib.cast(false, true, v3706);
  const v3717 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v3716);
  const v3718 = stdlib.mul256(v3715, v3717);
  const v3719 = stdlib.cast(false, true, v3710);
  const v3720 = stdlib.mul256(v3719, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v3721 = stdlib.add256(v3720, v3718);
  const v3722 = stdlib.cast(false, true, v3704);
  const v3723 = stdlib.mul256(v3718, v3722);
  const v3724 = stdlib.div256(v3723, v3721);
  const v3725 = stdlib.cast(true, false, v3724);
  const v3728 = stdlib.sub(v3714, v3725);
  const v3731 = stdlib.mul(v3705, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
  const v3732 = stdlib.div(v3731, v3706);
  const v3735 = stdlib.muldiv(v3728, v3732, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
  const v3737 = stdlib.muldiv(v3694, v3705, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
  const v3741 = stdlib.muldiv(v3737, v3704, v3710);
  const v3742 = stdlib.gt(v3741, v3735);
  const v3743 = [v3737, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3744 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3735];
  const v3745 = v3742 ? v3743 : v3744;
  const v3747 = v3745[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
  const v3748 = v3745[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
  const v3767 = stdlib.sub(v3704, v3725);
  const v3771 = stdlib.sub(v3710, v3747);
  const v3774 = stdlib.sub(v3767, v3748);
  const v3787 = stdlib.le(v3695, v3725);
  stdlib.assert(v3787, {
    at: './index.rsh:471:14:application',
    fs: ['at ./index.rsh:523:36:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapAForB0_738" (defined at: ./index.rsh:522:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3790 = stdlib.cast(false, true, v3703);
  const v3792 = stdlib.mul256(v3790, v3722);
  const v3793 = stdlib.cast(false, true, v3771);
  const v3794 = stdlib.cast(false, true, v3774);
  const v3795 = stdlib.mul256(v3793, v3794);
  const v3796 = stdlib.ge256(v3795, v3792);
  stdlib.assert(v3796, {
    at: './index.rsh:481:14:application',
    fs: ['at ./index.rsh:523:36:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:523:15:application call to [unknown function] (defined at: ./index.rsh:523:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapAForB0_738" (defined at: ./index.rsh:522:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v3801 = ['Trader_swapAForB0_738', v3693];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413, v3801],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3694, [[stdlib.checkedBigNumberify('./index.rsh:524:25:decimal', stdlib.UInt_max, '0'), v3372], [stdlib.checkedBigNumberify('./index.rsh:524:31:decimal', stdlib.UInt_max, '0'), v3326]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
      
      switch (v4066[0]) {
        case 'Protocol_harvest0_738': {
          const v4069 = v4066[1];
          
          break;
          }
        case 'Provider_deposit0_738': {
          const v4789 = v4066[1];
          
          break;
          }
        case 'Provider_withdraw0_738': {
          const v5509 = v4066[1];
          
          break;
          }
        case 'Trader_swapAForB0_738': {
          const v6229 = v4066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v6283 = v6229[stdlib.checkedBigNumberify('./index.rsh:522:9:spread', stdlib.UInt_max, '0')];
          const v6334 = stdlib.add(v3413, v6283);
          sim_r.txns.push({
            amt: v6283,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          const v6660 = v6229[stdlib.checkedBigNumberify('./index.rsh:522:9:spread', stdlib.UInt_max, '1')];
          const v6663 = v3409.locked;
          const v6664 = v6663 ? false : true;
          ;
          const v6665 = v3407.A;
          const v6666 = v3407.B;
          const v6667 = v3409.protoFee;
          const v6668 = v3409.totFee;
          const v6672 = stdlib.add(v6665, v6283);
          const v6676 = stdlib.muldiv(v6283, v6666, v6672);
          const v6677 = stdlib.cast(false, true, v6283);
          const v6678 = stdlib.cast(false, true, v6668);
          const v6679 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6678);
          const v6680 = stdlib.mul256(v6677, v6679);
          const v6681 = stdlib.cast(false, true, v6672);
          const v6682 = stdlib.mul256(v6681, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v6683 = stdlib.add256(v6682, v6680);
          const v6684 = stdlib.cast(false, true, v6666);
          const v6685 = stdlib.mul256(v6680, v6684);
          const v6686 = stdlib.div256(v6685, v6683);
          const v6687 = stdlib.cast(true, false, v6686);
          const v6690 = stdlib.sub(v6676, v6687);
          const v6693 = stdlib.mul(v6667, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
          const v6694 = stdlib.div(v6693, v6668);
          const v6697 = stdlib.muldiv(v6690, v6694, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
          const v6699 = stdlib.muldiv(v6283, v6667, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
          const v6703 = stdlib.muldiv(v6699, v6666, v6672);
          const v6704 = stdlib.gt(v6703, v6697);
          const v6705 = [v6699, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6706 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6697];
          const v6707 = v6704 ? v6705 : v6706;
          const v6709 = v6707[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
          const v6710 = v6707[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
          const v6729 = stdlib.sub(v6666, v6687);
          const v6733 = stdlib.sub(v6672, v6709);
          const v6736 = stdlib.sub(v6729, v6710);
          const v6737 = {
            A: v6733,
            B: v6736
            };
          const v6738 = v3408.A;
          const v6742 = stdlib.add(v6738, v6709);
          const v6743 = v3408.B;
          const v6747 = stdlib.add(v6743, v6710);
          const v6748 = {
            A: v6742,
            B: v6747
            };
          const v6749 = stdlib.le(v6660, v6687);
          ;
          const v6752 = stdlib.cast(false, true, v6665);
          const v6754 = stdlib.mul256(v6752, v6684);
          const v6755 = stdlib.cast(false, true, v6733);
          const v6756 = stdlib.cast(false, true, v6736);
          const v6757 = stdlib.mul256(v6755, v6756);
          const v6758 = stdlib.ge256(v6757, v6754);
          ;
          sim_r.txns.push({
            amt: v6687,
            kind: 'from',
            to: v4065,
            tok: v3326
            });
          const v6786 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v6687
            };
          const v6787 = await txn1.getOutput('Trader_swapAForB', 'v6786', ctc10, v6786);
          
          const v6796 = {
            A: v6283,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6798 = {
            A: v6733,
            B: v6736
            };
          null;
          const v11441 = v3406;
          const v11442 = v6737;
          const v11443 = v6748;
          const v11444 = v3409;
          const v11446 = v6334;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_738': {
          const v6949 = v4066[1];
          
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
  const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
  switch (v4066[0]) {
    case 'Protocol_harvest0_738': {
      const v4069 = v4066[1];
      return;
      break;
      }
    case 'Provider_deposit0_738': {
      const v4789 = v4066[1];
      return;
      break;
      }
    case 'Provider_withdraw0_738': {
      const v5509 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_738': {
      const v6229 = v4066[1];
      undefined /* setApiDetails */;
      const v6283 = v6229[stdlib.checkedBigNumberify('./index.rsh:522:9:spread', stdlib.UInt_max, '0')];
      const v6334 = stdlib.add(v3413, v6283);
      ;
      ;
      ;
      const v6660 = v6229[stdlib.checkedBigNumberify('./index.rsh:522:9:spread', stdlib.UInt_max, '1')];
      const v6663 = v3409.locked;
      const v6664 = v6663 ? false : true;
      stdlib.assert(v6664, {
        at: './index.rsh:450:14:application',
        fs: ['at ./index.rsh:525:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v6665 = v3407.A;
      const v6666 = v3407.B;
      const v6667 = v3409.protoFee;
      const v6668 = v3409.totFee;
      const v6672 = stdlib.add(v6665, v6283);
      const v6676 = stdlib.muldiv(v6283, v6666, v6672);
      const v6677 = stdlib.cast(false, true, v6283);
      const v6678 = stdlib.cast(false, true, v6668);
      const v6679 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6678);
      const v6680 = stdlib.mul256(v6677, v6679);
      const v6681 = stdlib.cast(false, true, v6672);
      const v6682 = stdlib.mul256(v6681, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v6683 = stdlib.add256(v6682, v6680);
      const v6684 = stdlib.cast(false, true, v6666);
      const v6685 = stdlib.mul256(v6680, v6684);
      const v6686 = stdlib.div256(v6685, v6683);
      const v6687 = stdlib.cast(true, false, v6686);
      const v6690 = stdlib.sub(v6676, v6687);
      const v6693 = stdlib.mul(v6667, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
      const v6694 = stdlib.div(v6693, v6668);
      const v6697 = stdlib.muldiv(v6690, v6694, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
      const v6699 = stdlib.muldiv(v6283, v6667, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
      const v6703 = stdlib.muldiv(v6699, v6666, v6672);
      const v6704 = stdlib.gt(v6703, v6697);
      const v6705 = [v6699, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6706 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6697];
      const v6707 = v6704 ? v6705 : v6706;
      const v6709 = v6707[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
      const v6710 = v6707[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
      const v6729 = stdlib.sub(v6666, v6687);
      const v6733 = stdlib.sub(v6672, v6709);
      const v6736 = stdlib.sub(v6729, v6710);
      const v6737 = {
        A: v6733,
        B: v6736
        };
      const v6738 = v3408.A;
      const v6742 = stdlib.add(v6738, v6709);
      const v6743 = v3408.B;
      const v6747 = stdlib.add(v6743, v6710);
      const v6748 = {
        A: v6742,
        B: v6747
        };
      const v6749 = stdlib.le(v6660, v6687);
      stdlib.assert(v6749, {
        at: './index.rsh:471:14:application',
        fs: ['at ./index.rsh:525:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v6752 = stdlib.cast(false, true, v6665);
      const v6754 = stdlib.mul256(v6752, v6684);
      const v6755 = stdlib.cast(false, true, v6733);
      const v6756 = stdlib.cast(false, true, v6736);
      const v6757 = stdlib.mul256(v6755, v6756);
      const v6758 = stdlib.ge256(v6757, v6754);
      stdlib.assert(v6758, {
        at: './index.rsh:481:14:application',
        fs: ['at ./index.rsh:525:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      ;
      const v6786 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v6687
        };
      const v6787 = await txn1.getOutput('Trader_swapAForB', 'v6786', ctc10, v6786);
      if (v2198) {
        stdlib.protect(ctc1, await interact.out(v6229, v6787), {
          at: './index.rsh:522:10:application',
          fs: ['at ./index.rsh:522:10:application call to [unknown function] (defined at: ./index.rsh:522:10:function exp)', 'at ./index.rsh:484:12:application call to "k" (defined at: ./index.rsh:525:18:function exp)', 'at ./index.rsh:525:54:application call to [unknown function] (defined at: ./index.rsh:482:20:function exp)', 'at ./index.rsh:525:18:application call to [unknown function] (defined at: ./index.rsh:525:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v6796 = {
        A: v6283,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6798 = {
        A: v6733,
        B: v6736
        };
      null;
      const v11441 = v3406;
      const v11442 = v6737;
      const v11443 = v6748;
      const v11444 = v3409;
      const v11446 = v6334;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_738': {
      const v6949 = v4066[1];
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
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_738: ctc9,
    Provider_deposit0_738: ctc11,
    Provider_withdraw0_738: ctc12,
    Trader_swapAForB0_738: ctc8,
    Trader_swapBForA0_738: ctc8
    });
  
  
  const [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3805 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapBForA0_738" (defined at: ./index.rsh:527:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v3806 = v3805[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3807 = v3805[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3813 = v3409.locked;
  const v3814 = v3813 ? false : true;
  stdlib.assert(v3814, {
    at: './index.rsh:450:14:application',
    fs: ['at ./index.rsh:528:36:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapBForA0_738" (defined at: ./index.rsh:527:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3815 = v3407.A;
  const v3816 = v3407.B;
  const v3817 = v3409.protoFee;
  const v3818 = v3409.totFee;
  const v3822 = stdlib.add(v3816, v3806);
  const v3826 = stdlib.muldiv(v3806, v3815, v3822);
  const v3827 = stdlib.cast(false, true, v3806);
  const v3828 = stdlib.cast(false, true, v3818);
  const v3829 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v3828);
  const v3830 = stdlib.mul256(v3827, v3829);
  const v3831 = stdlib.cast(false, true, v3822);
  const v3832 = stdlib.mul256(v3831, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v3833 = stdlib.add256(v3832, v3830);
  const v3834 = stdlib.cast(false, true, v3815);
  const v3835 = stdlib.mul256(v3830, v3834);
  const v3836 = stdlib.div256(v3835, v3833);
  const v3837 = stdlib.cast(true, false, v3836);
  const v3840 = stdlib.sub(v3826, v3837);
  const v3843 = stdlib.mul(v3817, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
  const v3844 = stdlib.div(v3843, v3818);
  const v3847 = stdlib.muldiv(v3840, v3844, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
  const v3849 = stdlib.muldiv(v3806, v3817, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
  const v3853 = stdlib.muldiv(v3849, v3815, v3822);
  const v3854 = stdlib.gt(v3853, v3847);
  const v3855 = [v3849, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3856 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3847];
  const v3857 = v3854 ? v3855 : v3856;
  const v3859 = v3857[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
  const v3860 = v3857[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
  const v3877 = stdlib.sub(v3815, v3837);
  const v3883 = stdlib.sub(v3877, v3860);
  const v3886 = stdlib.sub(v3822, v3859);
  const v3899 = stdlib.le(v3807, v3837);
  stdlib.assert(v3899, {
    at: './index.rsh:471:14:application',
    fs: ['at ./index.rsh:528:36:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapBForA0_738" (defined at: ./index.rsh:527:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3904 = stdlib.cast(false, true, v3816);
  const v3905 = stdlib.mul256(v3834, v3904);
  const v3906 = stdlib.cast(false, true, v3883);
  const v3907 = stdlib.cast(false, true, v3886);
  const v3908 = stdlib.mul256(v3906, v3907);
  const v3909 = stdlib.ge256(v3908, v3905);
  stdlib.assert(v3909, {
    at: './index.rsh:481:14:application',
    fs: ['at ./index.rsh:528:36:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:385:19:application call to "runTrader_swapBForA0_738" (defined at: ./index.rsh:527:9:function exp)', 'at ./index.rsh:385:19:application call to [unknown function] (defined at: ./index.rsh:385:19:function exp)'],
    msg: null,
    who: 'Trader_swapBForA'
    });
  const v3914 = ['Trader_swapBForA0_738', v3805];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3326, v3344, v3372, v3403, v3406, v3407, v3408, v3409, v3413, v3914],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:377:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:529:25:decimal', stdlib.UInt_max, '0'), v3372], [v3806, v3326]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
      
      switch (v4066[0]) {
        case 'Protocol_harvest0_738': {
          const v4069 = v4066[1];
          
          break;
          }
        case 'Provider_deposit0_738': {
          const v4789 = v4066[1];
          
          break;
          }
        case 'Provider_withdraw0_738': {
          const v5509 = v4066[1];
          
          break;
          }
        case 'Trader_swapAForB0_738': {
          const v6229 = v4066[1];
          
          break;
          }
        case 'Trader_swapBForA0_738': {
          const v6949 = v4066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v7018 = v6949[stdlib.checkedBigNumberify('./index.rsh:527:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          sim_r.txns.push({
            amt: v7018,
            kind: 'to',
            tok: v3326
            });
          const v7529 = v6949[stdlib.checkedBigNumberify('./index.rsh:527:9:spread', stdlib.UInt_max, '1')];
          const v7532 = v3409.locked;
          const v7533 = v7532 ? false : true;
          ;
          const v7534 = v3407.A;
          const v7535 = v3407.B;
          const v7536 = v3409.protoFee;
          const v7537 = v3409.totFee;
          const v7541 = stdlib.add(v7535, v7018);
          const v7545 = stdlib.muldiv(v7018, v7534, v7541);
          const v7546 = stdlib.cast(false, true, v7018);
          const v7547 = stdlib.cast(false, true, v7537);
          const v7548 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7547);
          const v7549 = stdlib.mul256(v7546, v7548);
          const v7550 = stdlib.cast(false, true, v7541);
          const v7551 = stdlib.mul256(v7550, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v7552 = stdlib.add256(v7551, v7549);
          const v7553 = stdlib.cast(false, true, v7534);
          const v7554 = stdlib.mul256(v7549, v7553);
          const v7555 = stdlib.div256(v7554, v7552);
          const v7556 = stdlib.cast(true, false, v7555);
          const v7559 = stdlib.sub(v7545, v7556);
          const v7562 = stdlib.mul(v7536, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
          const v7563 = stdlib.div(v7562, v7537);
          const v7566 = stdlib.muldiv(v7559, v7563, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
          const v7568 = stdlib.muldiv(v7018, v7536, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
          const v7572 = stdlib.muldiv(v7568, v7534, v7541);
          const v7573 = stdlib.gt(v7572, v7566);
          const v7574 = [v7568, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7575 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7566];
          const v7576 = v7573 ? v7574 : v7575;
          const v7578 = v7576[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
          const v7579 = v7576[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
          const v7596 = stdlib.sub(v7534, v7556);
          const v7602 = stdlib.sub(v7596, v7579);
          const v7605 = stdlib.sub(v7541, v7578);
          const v7606 = {
            A: v7602,
            B: v7605
            };
          const v7607 = v3408.A;
          const v7611 = stdlib.add(v7607, v7579);
          const v7612 = v3408.B;
          const v7616 = stdlib.add(v7612, v7578);
          const v7617 = {
            A: v7611,
            B: v7616
            };
          const v7618 = stdlib.le(v7529, v7556);
          ;
          const v7623 = stdlib.cast(false, true, v7535);
          const v7624 = stdlib.mul256(v7553, v7623);
          const v7625 = stdlib.cast(false, true, v7602);
          const v7626 = stdlib.cast(false, true, v7605);
          const v7627 = stdlib.mul256(v7625, v7626);
          const v7628 = stdlib.ge256(v7627, v7624);
          ;
          const v7647 = stdlib.sub(v3413, v7556);
          sim_r.txns.push({
            amt: v7556,
            kind: 'from',
            to: v4065,
            tok: undefined /* Nothing */
            });
          const v7648 = {
            A: v7556,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v7649 = await txn1.getOutput('Trader_swapBForA', 'v7648', ctc10, v7648);
          
          const v7658 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v7018
            };
          const v7660 = {
            A: v7602,
            B: v7605
            };
          null;
          const v11531 = v3406;
          const v11532 = v7606;
          const v11533 = v7617;
          const v11534 = v3409;
          const v11536 = v7647;
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
  const {data: [v4066], secs: v4068, time: v4067, didSend: v2198, from: v4065 } = txn1;
  switch (v4066[0]) {
    case 'Protocol_harvest0_738': {
      const v4069 = v4066[1];
      return;
      break;
      }
    case 'Provider_deposit0_738': {
      const v4789 = v4066[1];
      return;
      break;
      }
    case 'Provider_withdraw0_738': {
      const v5509 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_738': {
      const v6229 = v4066[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_738': {
      const v6949 = v4066[1];
      undefined /* setApiDetails */;
      const v7018 = v6949[stdlib.checkedBigNumberify('./index.rsh:527:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v7529 = v6949[stdlib.checkedBigNumberify('./index.rsh:527:9:spread', stdlib.UInt_max, '1')];
      const v7532 = v3409.locked;
      const v7533 = v7532 ? false : true;
      stdlib.assert(v7533, {
        at: './index.rsh:450:14:application',
        fs: ['at ./index.rsh:530:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v7534 = v3407.A;
      const v7535 = v3407.B;
      const v7536 = v3409.protoFee;
      const v7537 = v3409.totFee;
      const v7541 = stdlib.add(v7535, v7018);
      const v7545 = stdlib.muldiv(v7018, v7534, v7541);
      const v7546 = stdlib.cast(false, true, v7018);
      const v7547 = stdlib.cast(false, true, v7537);
      const v7548 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7547);
      const v7549 = stdlib.mul256(v7546, v7548);
      const v7550 = stdlib.cast(false, true, v7541);
      const v7551 = stdlib.mul256(v7550, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v7552 = stdlib.add256(v7551, v7549);
      const v7553 = stdlib.cast(false, true, v7534);
      const v7554 = stdlib.mul256(v7549, v7553);
      const v7555 = stdlib.div256(v7554, v7552);
      const v7556 = stdlib.cast(true, false, v7555);
      const v7559 = stdlib.sub(v7545, v7556);
      const v7562 = stdlib.mul(v7536, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
      const v7563 = stdlib.div(v7562, v7537);
      const v7566 = stdlib.muldiv(v7559, v7563, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
      const v7568 = stdlib.muldiv(v7018, v7536, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
      const v7572 = stdlib.muldiv(v7568, v7534, v7541);
      const v7573 = stdlib.gt(v7572, v7566);
      const v7574 = [v7568, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7575 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7566];
      const v7576 = v7573 ? v7574 : v7575;
      const v7578 = v7576[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
      const v7579 = v7576[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
      const v7596 = stdlib.sub(v7534, v7556);
      const v7602 = stdlib.sub(v7596, v7579);
      const v7605 = stdlib.sub(v7541, v7578);
      const v7606 = {
        A: v7602,
        B: v7605
        };
      const v7607 = v3408.A;
      const v7611 = stdlib.add(v7607, v7579);
      const v7612 = v3408.B;
      const v7616 = stdlib.add(v7612, v7578);
      const v7617 = {
        A: v7611,
        B: v7616
        };
      const v7618 = stdlib.le(v7529, v7556);
      stdlib.assert(v7618, {
        at: './index.rsh:471:14:application',
        fs: ['at ./index.rsh:530:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v7623 = stdlib.cast(false, true, v7535);
      const v7624 = stdlib.mul256(v7553, v7623);
      const v7625 = stdlib.cast(false, true, v7602);
      const v7626 = stdlib.cast(false, true, v7605);
      const v7627 = stdlib.mul256(v7625, v7626);
      const v7628 = stdlib.ge256(v7627, v7624);
      stdlib.assert(v7628, {
        at: './index.rsh:481:14:application',
        fs: ['at ./index.rsh:530:27:application call to "doSwap" (defined at: ./index.rsh:449:57:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
        msg: null,
        who: 'Trader_swapBForA'
        });
      const v7647 = stdlib.sub(v3413, v7556);
      ;
      const v7648 = {
        A: v7556,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v7649 = await txn1.getOutput('Trader_swapBForA', 'v7648', ctc10, v7648);
      if (v2198) {
        stdlib.protect(ctc1, await interact.out(v6949, v7649), {
          at: './index.rsh:527:10:application',
          fs: ['at ./index.rsh:527:10:application call to [unknown function] (defined at: ./index.rsh:527:10:function exp)', 'at ./index.rsh:484:12:application call to "k" (defined at: ./index.rsh:530:18:function exp)', 'at ./index.rsh:530:55:application call to [unknown function] (defined at: ./index.rsh:482:20:function exp)', 'at ./index.rsh:530:18:application call to [unknown function] (defined at: ./index.rsh:530:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v7658 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v7018
        };
      const v7660 = {
        A: v7602,
        B: v7605
        };
      null;
      const v11531 = v3406;
      const v11532 = v7606;
      const v11533 = v7617;
      const v11534 = v3409;
      const v11536 = v7647;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`],
    sigs: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64),uint64)uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`]
    },
  appApproval: `BiAVAAgYBAFkEAIDkE6gjQa14PDBB5nro4cK2ZSsoApJuPeR5Qfg8+yqAu6I6cQCEf///////////wEGJgUBAAEBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC10qZEkiWzUBI1s1AjYaABdJQQGyIjUEIQQ1BkkhCwxAAVBJIQwMQAEgSSENDEAA/yENEkQ0AUklDEAAeSUSRChkKWRQSTUDSUpXKRA1/1c5EDX+V0kQNf1XWTk1/DQDVxEINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXAAhQNANXCAlQNQdCCqEhBxJEKGQpZFBJNQNJSlcZEDX/VykQNf5XORA1/VdJOTX8NANXEQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cACFA0A1cICVA1B0IKJyEMEkQ2GgE2GgJQNf+AAQM0/1AhDq9QQgCcSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhDq9QQgB7IQsSRCpCBylJIRAMQAAzSSERDEAAFCEREkQ2GgE2GgJQNf8oNP9QQgBRIRASRDYaATYaAlA1/yk0/1CBQa9QQgA5geT86oECEkQ2GgE1/4ABAjT/UIFRr1BCAB82GgIXNQQ2GgM2GgEXSSEHDEAHJUkhCAxABrkhCBJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkkiWzX/VwgJNf4hEls1/VcZEDX8VykQNftXORA1+ldJEDX5V1k5NfiBkgFbNfdJNQU19oAER2hHHzT2ULA09iJVSSEHDEAD7kkhCAxAAwlJJQxAAYIlEkQ09lcBEDX1NPUiWzX0NPQ0/4gJFDT4VzgBFxRENPoiWzXzNPojWzXyNPgiWzXxNPghBls18DTyNPQINe8krzT0FlArJK808BZQoYgI+6OICPc17iSvNPMWUDXtNO407aOICOUkrzTvFlAro4gI2jTuoIgI1KKICNBJSiEGWyISRCNbIhJEIlsiEkQkWzXsNPQ08x0075c07Ak08SEFCzTwCh0hBZc16zT0NPEdIQmXNeojrzTrFlA06hYjr1A06jTzHTTvlzTrDU1JNekiWzXoNOkjWzXnNPM07Ak05wk15jTvNOgJNeU09SNbNOwORCSvNOYWUCSvNOUWUKOICEk07SSvNPIWUKOICD2nRLEisgE07LIIIQSyEDEAsgezNOwWI69QNeSACAAAAAAAAB3gNORQsDTkNQcnBDEAUCOvNPQWUFA05FA05hY05RZQULA0/zT+NP00/CI0+zTmFjTlFlA0+SJbNOcIFjT5I1s06AgWUDT4MgY09zTsCUIGskg09lcBEDX1NPUiWzX0NPSIB3w0+Fc4ARcURDT6Ils18zT6I1s18jT4Ils18TT4IQZbNfA08zT0CDXvJK809BZQKySvNPAWUKGIB32jiAd5Ne4krzTyFlA17TTuNO2jiAdnJK807xZQK6OIB1w07qCIB1aiiAdSSUohBlsiEkQjWyISRCJbIhJEJFs17DT0NPIdNO+XNOwJNPEhBQs08AodIQWXNes09DTxHSEJlzXqI6806xZQNOoWI69QNOo08h0075c06w1NSTXpIls16DTpI1s15zTvNOgJNeY08jTsCTTnCTXlNPUjWzTsDkQkrzTmFlAkrzTlFlCjiAbLJK808xZQNO2jiAa/p0SxIrIBNOyyEiWyEDEAshQ0/7IRsyOvNOwWUDXkgAgAAAAAAAAagjTkULA05DUHJwQxAFA09BYjr1BQNORQNOYWNOUWUFCwNP80/jT9NPwiNPs05hY05RZQNPkiWzToCBY0+SNbNOcIFlA0+DIGNPc09AhCBTFINPZXAQg19TT1FzX0NPQ0/YgGFDT7I1s18zT6Ils18jT6I1s18TT0NPIdNPOXNfA09DTxHTTzlzXvNPsiWzT0CDXuNPM09Ak17TTyNPAJNew08TTvCTXrsSKyATTwsgghBLIQMQCyB7OxIrIBNO+yEiWyEDEAshQ0/7IRszTwFjTvFlA16oAIAAAAAAAAFx406lCwNOo1B4AEHNSuXzEAUDT0FlA06lA07BY06xZQUDTuFjTtFlBQsDT/NP40/TT8IjTuFjTtFlA07BY06xZQNPk0+DIGNPc08AlCBFNJIQQMQAFGSDT2VwEYNfU09VcAEEk19CJbNfM09CNbNfI084gFCjTyNP+IBR009SEGWzXxNPhXOAEXFEQ0+yNbSTXvIhJBAEkkrzTzFlA17iSvNPIWUDXtJK808RZQSTXsSaOIBQQ16zTtNO5JNO2lTTXqNO407aOIBO8066ZENOs06kmjiATipkQ08TXwQgAnNPEiEkQ08zT6IlsdNO+XNe408jT6I1sdNO+XSTXtNO5JNO0MTTXwNPM0+iJbCDXuNPI0+iNbCDXtNPsiWzTwCTXsNO808Ag167EisgE08LISJbIQMQCyFDT9shGzgAgAAAAAAAAToTTwFlCwNPAWNQeABN4bKfUxAFA08xY08hZQUDTwFlA07hY07RZQUDTsFjTrFlBQsDT/NP40/TT8IjTsFjTrFlA07hY07RZQNPk0+DIGNPc08whCAwZINPZXAVk19TT1VwAgNfQ09VcgOTXzMQA0+FcYIBJENPMiWzXyNPMjWzXxNPMhBls18DTyIQUMNPEhBQwQNPA08TTyCBIQNPAhBQwQNPAiDRBEMgpgMgp4CTT3CTXvNPNXOAEXNe40+SJbNe00+SNbNew07TTvCDXrsSKyATTrsgghBLIQNPSyB7OxIrIBNOyyEiWyEDT0shQ0/7IRs4AIAAAAAAAAEKg07RY07BZQNO8WUFCwNO0WNOwWUDTvFlA1B4AEVq11PDTyFjTxFlA08BZQNPNXGCBQNO4WUQcIUFCwNP80/jT9NPw07jT7I1siEhA0+iJbIhI0+iNbIhIQEDT7NPo0/DTzMgY07zT3CDTrCUIB8EghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIRJbNf9JNQU1/oAEJTy31zT+ULCACAAAAAAAAB4TsCo1B7EisgEhCLIQNP+yIbOxIrIBIrISJbIQMgmyFTIKshQ0AyJbshGzQgIMIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSUgqNf8iWzX+VwggNf1XKAg1/IEwWzX7gATgHc6vNP9QNP4WUDT9UDT8UDT7FlCwIQqIAhshCogCFrEisgEishIlshAyCrIUNP6yEbMhEyEJDUSBCa81+oAFYXBwSUQ0+xZQAzX4MgpgMgp4CRY197EisgEhFLIQNPuyGIAESVoKaLIaMRgWsho0+rIaNP4WshqzMgpgMgp4CTT3FwkWtwA+VwQAUDX5gAgAAAAAAAANETT5ULA0+Uk1+CJbNfc0+FcIOUk19iJbNfU09iNbNfQ09iEGWzXzNPUhBQw09CEFDBA08zT0NPUIEhA08yEFDBA08yINEEQiNPcSRCEKiAFOsSKyASEIshAhE7IiIRSyIzT8siU0/bImgWCvsicyA7IoMgqyKbO0PDXygAgAAAAAAAANKzTyFlCwNPJJNfE0/hYiWxNEIQavNfA0/jT6NPE08CKAEP//////////AAAAAAAAAAA08Ek09jIGNPdCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPlBADA09RY09lA09xZQNPpQNPtQNPxQNP1QKEsBVwB/ZylLAVd/A2dIIQc1ATIGNQJCAFM09RY09lA09xZQNPhQNPpQNPtQNPxQNP1QNP8WUChLAVcAf2cpSwFXfxtnSCU1ATIGNQJCAB0xGYEFEkSxIrIBIrIIIQSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIQQIMgQSRDEWEkQhBEMxGSISREL/3SI1ASI1AkL/wTQASUohBAg1ADgHMgoSRDgQIQQSRDgIEkSJNABJSkkhBAg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFYEgTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 154,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/duoswap-core/index.rsh:370:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v3325",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v3326",
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
                "internalType": "struct T12",
                "name": "v3327",
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
                "internalType": "struct T14",
                "name": "v3328",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3329",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T1",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
                "name": "v3325",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v3326",
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
                "internalType": "struct T12",
                "name": "v3327",
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
                "internalType": "struct T14",
                "name": "v3328",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3329",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
                "name": "v7696",
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
                    "internalType": "enum _enum_T24",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_738",
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
                        "internalType": "struct T0",
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
                    "name": "_Provider_deposit0_738",
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
                    "name": "_Provider_withdraw0_738",
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
                    "name": "_Trader_swapAForB0_738",
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
                    "name": "_Trader_swapBForA0_738",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v4066",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
            "internalType": "struct T1",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3345",
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
    "name": "_reach_oe_v3371",
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
            "internalType": "struct T0",
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
    "name": "_reach_oe_v4264",
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
    "name": "_reach_oe_v5025",
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
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5918",
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
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v6786",
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
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v7648",
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
    "name": "_reach_oe_v7699",
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
            "internalType": "struct T0",
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
            "internalType": "struct T0",
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
            "internalType": "struct T1",
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
            "internalType": "struct T0",
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
                "internalType": "address payable",
                "name": "_Some",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "tokA",
            "type": "tuple"
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
        "internalType": "struct T1",
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
            "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
        "internalType": "struct T0",
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
                "name": "v7696",
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
                    "internalType": "enum _enum_T24",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Protocol_harvest0_738",
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
                        "internalType": "struct T0",
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
                    "name": "_Provider_deposit0_738",
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
                    "name": "_Provider_withdraw0_738",
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
                    "name": "_Trader_swapAForB0_738",
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
                    "name": "_Trader_swapBForA0_738",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v4066",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
  Bytecode: `0x608060405260405162005c2a38038062005c2a833981016040819052620000269162000d2c565b60008055436003556200003862000892565b604080513381528351602080830191909152808501518051151583850152908101516001600160a01b03908116606080850191909152828501515160808086019190915290830151516001600160c01b03191660a0850152909101511660c082015290517fd3b5645add4f5895f5ee0b79e70dbc6ff85aad0f1cb6dcc4ce616f0276ef28e19181900360e00190a1620000d434156008620005ed565b620000e260016009620005ed565b80516000908190528151602090810182905283810151015162000106903062000618565b62000112919062000e3f565b6101608201526200012560004762000e3f565b61014082015280516020808401510151604051600092633b02a71760e01b9262000156923092919060240162000e9c565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620001b2919062000f01565b60006040518083038185875af1925050503d8060008114620001f1576040519150601f19603f3d011682016040523d82523d6000602084013e620001f6565b606091505b5090925090506200020a8282600b620006fc565b50610160840151602080870151015162000225903062000618565b62000231919062000e3f565b6101808501819052620002479015600a620005ed565b61014084015162000259904762000e3f565b6020808601519190915281516200027891908301810190830162000f1f565b6020808601805190910191909152516040808601829052517f3a654f3f9c5b58ff8537f3ef3a057c8fa343fcd7fac65d92e4ccf48134211c4d91620002bd9162000fe5565b60405180910390a16200037360648560400151602001516000015110620002e6576000620002f7565b606485604001516020015160200151105b620003045760006200032f565b6040850151602090810151805191015162000320919062001009565b85604001516020015160400151145b6200033c5760006200034d565b606485604001516020015160400151105b6200035a5760006200036b565b600085604001516020015160400151115b600c620005ed565b604084015151620003879015600d620005ed565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620004729062000951565b620004839695949392919062001052565b604051809103906000f080158015620004a0573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f85bf69f3d153a95a3f35d9481232e4909ebf47dcd0346c3f6f0e25227759a05991620004e891620010bd565b60405180910390a16020858101510151610100850180516001600160a01b039283169052515160e086015162000536929081169116146200052b5760016200052e565b60005b600e620005ed565b61012084018051600090819052905160200152620005536200095f565b60208087015181015182516001600160a01b0391821690528651835183015260e087015183519116604091820152610120870180518451606090810191909152848401805160009052818a0151815186015282518151850152915182519091015290870180519092015181516080015280514360a09190910152905151905160c00152620005e18162000742565b5050505050506200127f565b81620006145760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620006449190620010bd565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162000684919062000f01565b60006040518083038185875af1925050503d8060008114620006c3576040519150601f19603f3d011682016040523d82523d6000602084013e620006c8565b606091505b509092509050620006dc82826006620006fc565b5080806020019051810190620006f39190620010d1565b95945050505050565b606083156200070d5750816200073b565b8251156200071e5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016200060b565b9392505050565b60208101515115620007fa576200075862000988565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c08401526002600055436001559051620007cf91839101620010fa565b60405160208183030381529060405260029080519060200190620007f5929190620009f0565b505050565b6200080462000a7f565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e08601525101516101008401526004600055436001559051620007cf9183910162001185565b604051806101a00160405280620008a862000b04565b8152602001620008b762000b26565b8152602001620008c662000b26565b8152602001620008d562000b42565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260006020820181905260408201526060016200092762000b5c565b81526020016200093662000b42565b81526020016000815260200160008152602001600081525090565b6110278062004c0383390190565b60405180604001604052806200097462000b7a565b81526020016200098362000bb5565b905290565b6040518060e0016040528060006001600160a01b03168152602001620009ad62000b04565b815260006020820152604001620009c362000b42565b8152602001620009d262000b42565b8152602001620009e162000b42565b81526020016200098362000c14565b828054620009fe9062001243565b90600052602060002090601f01602090048101928262000a22576000855562000a6d565b82601f1062000a3d57805160ff191683800117855562000a6d565b8280016001018555821562000a6d579182015b8281111562000a6d57825182559160200191906001019062000a50565b5062000a7b92915062000c4e565b5090565b60405180610120016040528060006001600160a01b0316815260200162000aa562000b04565b81526000602082015260400162000abb62000b42565b815260200162000aca62000b42565b815260200162000ad962000b42565b815260200162000ae862000b42565b815260200162000af762000c14565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040518060400160405280600081526020016200098362000c14565b604051806040016040528060008152602001600081525090565b60405180602001604052806001906020820280368337509192915050565b604051806080016040528060006001600160a01b0316815260200162000b9f62000b04565b8152600060208201526040016200098362000b42565b6040518060e0016040528060001515815260200162000bd362000b42565b815260200162000be262000b42565b815260200162000bf162000b42565b815260200162000c0062000c14565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000a7b576000815560010162000c4f565b604080519081016001600160401b038111828210171562000c9657634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000c9657634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000c9657634e487b7160e01b600052604160045260246000fd5b8051801515811462000d0f57600080fd5b919050565b80516001600160a01b038116811462000d0f57600080fd5b600081830360c081121562000d4057600080fd5b62000d4a62000c65565b8351815260a0601f198301121562000d6157600080fd5b62000d6b62000c9c565b62000d796020860162000cfe565b815262000d896040860162000d14565b60208201526020605f198401121562000da157600080fd5b62000dab62000ccd565b6060860151815260408201526020607f198401121562000dca57600080fd5b62000dd462000ccd565b60808601519093506001600160c01b03198116811462000df357600080fd5b83526060810183905262000e0a60a0860162000d14565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b60008282101562000e545762000e5462000e29565b500390565b80516002811062000e7a57634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062000ebd602084018662000e59565b808416608084015250949350505050565b60005b8381101562000eeb57818101518382015260200162000ed1565b8381111562000efb576000848401525b50505050565b6000825162000f1581846020870162000ece565b9190910192915050565b600060a0828403121562000f3257600080fd5b60405160a081016001600160401b038111828210171562000f6357634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015262000f8e6060840162000d14565b606082015262000fa16080840162000cfe565b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c0830191620010029084018262000fad565b5092915050565b600082198211156200101f576200101f62000e29565b500190565b600081518084526200103e81602086016020860162000ece565b601f01601f19169290920160200192915050565b60c0815260006200106760c083018962001024565b82810360208401526200107b818962001024565b9050828103604084015262001091818862001024565b90508281036060840152620010a7818762001024565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b600060208284031215620010e457600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b03908116825260208084015161020084019291620011249085018262000e59565b50604084015116608083015260608301516200114460a0840182620010eb565b5060808301516200115960e0840182620010eb565b5060a08301516200116f610120840182620010eb565b5060c08301516200100261016084018262000fad565b6000610260820190506200119b82845162000e1c565b6020830151620011af602084018262000e59565b506040830151620011c4608084018262000e1c565b506060830151620011d960a0840182620010eb565b506080830151620011ee60e0840182620010eb565b5060a083015162001204610120840182620010eb565b5060c08301516200121a610160840182620010eb565b5060e0830151620012306101a084018262000fad565b5061010083015161024083015292915050565b600181811c908216806200125857607f821691505b6020821081036200127957634e487b7160e01b600052602260045260246000fd5b50919050565b613974806200128f6000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633402da13146101095780633e59bac41461011c5780634012e02e1461012f5780638323075714610151578063842463da146101665780638bf896491461017e578063ab53f2c614610191578063c8867ae9146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612e29565b6101da565b6040516100c19190612e86565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612e94565b610249565b6040516100c19190612ead565b6100db610117366004612eeb565b6102a7565b61009f61012a366004612f16565b610305565b34801561013b57600080fd5b50610144610329565b6040516100c19190612fbd565b34801561015d57600080fd5b506001546100db565b61016e610688565b60405190151581526020016100c1565b61009f61018c366004613046565b6106bf565b34801561019d57600080fd5b506101a66106df565b6040516100c1929190613085565b6100fc6101c23660046130bf565b61077c565b6100fc6101d53660046130bf565b6107e1565b6101e2612570565b6101ea612590565b6101f26125df565b6101fa6125f9565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a8284610846565b50506020015190505b92915050565b61025161263c565b610259612590565b6102616125df565b6102696125f9565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b8284610846565b50506060015192915050565b60006102b1612590565b6102b96125df565b6102c16125f9565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526102f88284610846565b5050604001519392505050565b61030d612590565b61032561031f368490038401846130e1565b82611eb9565b5050565b610331612656565b6002600054036104d35760006002805461034a90613166565b80601f016020809104026020016040519081016040528092919081815260200182805461037690613166565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db91906132b8565b90506103e56126b4565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151815184015260c080870180515160408089018051929092528251870151825188015282518101518251820152825188015182516001600160a01b03918216908a0152925186015182519015159087015260a0808b018051518b8b01805191909152905189015181518a0152828c0151888c0180519187169091529a518b518a015295518a5190920191909152905188519097019690965291518651909301929092528551855191169301929092529092015181519092019190915251919050565b600460005403610679576000600280546104ec90613166565b80601f016020809104026020016040519081016040528092919081815260200182805461051890613166565b80156105655780601f1061053a57610100808354040283529160200191610565565b820191906000526020600020905b81548152906001019060200180831161054857829003601f168201915b505050505080602001905181019061057d9190613381565b90506105876126b4565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152838c01518b8b0180519188169091529a518b518a015295518a51909301929092529151885190920191909152915186519095019490945285518551941693909101929092529092015181519092019190915251919050565b61068560006007612050565b90565b6000610692612590565b61069a6126fb565b60408051602080820190925260008152908201526106b88183611eb9565b5051919050565b6106c7612590565b6103256106d936849003840184613503565b82610846565b6000606060005460028080546106f490613166565b80601f016020809104026020016040519081016040528092919081815260200182805461072090613166565b801561076d5780601f106107425761010080835404028352916020019161076d565b820191906000526020600020905b81548152906001019060200180831161075057829003601f168201915b50505050509050915091509091565b61078461263c565b61078c612590565b6107946125df565b61079c6125f9565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107d48284610846565b5050608001519392505050565b6107e961263c565b6107f1612590565b6107f96125df565b6108016125f9565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526108398284610846565b505060a001519392505050565b610856600460005414602d612050565b815161087190158061086a57508251600154145b602e612050565b60008080556002805461088390613166565b80601f01602080910402602001604051908101604052809291908181526020018280546108af90613166565b80156108fc5780601f106108d1576101008083540402835291602001916108fc565b820191906000526020600020905b8154815290600101906020018083116108df57829003601f168201915b50505050508060200190518101906109149190613381565b905061091e612725565b7f761e77e13641e3fcecddc88a0fe62af0f096e5abdc28edaf3c907324d296505b338560405161094f9291906135cb565b60405180910390a1600060208501515151600481111561097157610971612f73565b03610d2c57602080850151510151815261098d34156012612050565b6109a76109a03384604001516000612076565b6013612050565b6109c16109ba3384600001516000612076565b6014612050565b6109e88260e00151606001516001600160a01b0316336001600160a01b0316146015612050565b80516020015151610a7890606411610a01576000610a12565b606482600001516020015160200151105b610a1d576000610a40565b81516020908101518051910151610a349190613691565b82516020015160400151145b610a4b576000610a59565b815160200151604001516064115b610a64576000610a71565b8151602001516040015115155b6016612050565b61010082015147908110610a9b57610100830151610a9690826136a9565b610a9e565b60005b6020830181905260c084015151610ab59190613691565b604080840182905283515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610af4573d6000803e3d6000fd5b50825182515160c085015160200151610b0e92919061208e565b60c08301805151606084018051919091529051602090810151825182015290516080840180519190915281840151815190920191909152516040517f8b66790e1db1c44803c0ef91b173606071a85bc87e2cbd932720ef8e07917e8d91610b7491612e86565b60405180910390a160808083015160208087019190915283518101515160a085018051919091528451820151820151815183015284518201516040908101518251820152855183015160609081015183516001600160a01b039091169101528551909201518301518151901515930192909252905190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c16916136c0565b60405180910390a1610c266129d6565b835181516001600160a01b0391821690526020808601518351820152604080870151845193169201919091526060808601518351909101528351015160800151610c71576000610c7c565b608084015160200151155b610c87576000610ca4565b60a08401515115610c99576000610ca4565b60a084015160200151155b60208083018051921515909252608080870151835183015260a08088015184516040908101919091526060808a0151865190910152875184015185519093019290925292514393019290925290840151610100860151918501519091610d0991613691565b610d1391906136a9565b602082015160c00152610d25816120a2565b5050611eb3565b6001602085015151516004811115610d4657610d46612f73565b036111a2576020840151516040015160c082018190525151610d6b9034146017612050565b610d85610d7e3384604001516000612076565b6018612050565b610daa610da33384600001518460c001516000015160200151612076565b6019612050565b610dcb8260e0015160800151610dc1576001610dc4565b60005b601a612050565b608082015160200151610e965760c0810151805151610100830152805160209081015161012084015201516101408201819052610e0890806136ce565b61016082015261012081015161010082015111610e2a57806101200151610e31565b8061010001515b610180820152610160810151610120820151610100830151610e609291610e57916136ce565b1115601b612050565b610180810151610e8390610e7490806136ce565b8261016001511115601c612050565b60c08101516020015160e0820152610f39565b610eac60008260c001516020015114601d612050565b60808201516020015160a08301515160c08301515151610ecc91906136ce565b610ed691906136ed565b6101a0820152608082015160209081015160a084015182015160c084015151909201519091610f04916136ce565b610f0e91906136ed565b6101c082018190526101a082015110610f2c57806101c00151610f33565b806101a001515b60e08201525b60a08201515160c08201515151610f509190613691565b6101e082015260a082015160209081015160c08301515190910151610f759190613691565b61020082019081526101e08201516102208301805191909152905190516020015260e0810151608083015151610fab91906136a9565b61024082015260e0810151608083015160200151610fc99190613691565b610260820190815261024082015161028083018051919091529051905160200152604082015160e08201516110009190339061208e565b7f70fbafe273ff376438023f6c00f66b2cb9da8697f17a883ba31c9ec12492529e8160e0015160405161103591815260200190565b60405180910390a160e08101805160408086019190915260c08301805151516102a0850180519190915290515160209081015182518201526101e08501516102c0860180519190915261020086015181518301526102408601516102e08701805191909152610260870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb946110e49433949193919261370f565b60405180910390a16110f46129d6565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905261028086015181519093019290925261022085015182519093019290925260c08086015182519093019290925260e0850151815160800152514360a090910152820151515161010084015161118a9190613691565b602082015160c0015261119c816120a2565b50611eb3565b60026020850151515160048111156111bc576111bc612f73565b036114fb57602084015151606001516103008201526111dd3415601e612050565b6111ff6111f833846040015184610300015160000151612076565b601f612050565b6112196112123384600001516000612076565b6020612050565b60808201516020015160a0830151516103008301515161123991906136ce565b61124391906136ed565b610320820152608082015160209081015160a0840151909101516103008301515161126e91906136ce565b61127891906136ed565b610340820152610300810151516080830151516112959190613691565b610360820152610300810151516080830151602001516112b591906136a9565b61038082019081526103608201516103a08301805191909152905190516020015261032081015160a0830151516112ec91906136a9565b6103c082015261034081015160a08301516020015161130b91906136a9565b6103e082019081526103c082015161040083018051919091529051905160200152610320810151604051339180156108fc02916000818181858888f1935050505015801561135d573d6000803e3d6000fd5b5061137282600001513383610340015161208e565b6103208101516104208201805191909152610340820151815160200152516040517fc73ad1134ac3788ab5ae9bd88a69fe4ff129fe04c6e48f736869d30eaa1502ea916113be91612ead565b60405180910390a16104208101805160608501526103c082015161044083018051919091526103e083015181516020908101919091526103608401516104608501805191909152610380850151815190920191909152610300840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef855946114559433949193909261374d565b60405180910390a16114656129d6565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608086015184518201528184018051600090526103a086015181519093019290925261040085015182519093019290925260c085015181519092019190915260e0840151815160800152514360a09091015261032082015161010084015161118a91906136a9565b600360208501515151600481111561151557611515612f73565b036119c8576020840151516080015161048082018190525161153a9034146021612050565b61155461154d3384604001516000612076565b6022612050565b61156e6115673384600001516000612076565b6023612050565b61158f8260e0015160800151611585576001611588565b60005b6024612050565b6104808101515160a0830151516115a69190613691565b6104a082015260e0820151604001516115c1906127106136a9565b610480820151516115d291906136ce565b6104c0820181905260a0830151602001516104e08301526104a08201516115fc90612710906136ce565b6116069190613691565b816104e00151826104c0015161161c91906136ce565b61162691906136ed565b61050082015260e082015160408101519051606491906116479083906136ce565b61165191906136ed565b6105008301516104a084015160a0860151602001516104808601515161167791906136ce565b61168191906136ed565b61168b91906136a9565b61169591906136ce565b61169f91906136ed565b61052082015260e08201515161048082015151612710916116bf916136ce565b6116c991906136ed565b610540820181815261056083018051929092529051600060209182018190526105808401805191909152610520840180519151830191909152516104a084015160a0860151909201519251909261171f916136ce565b61172991906136ed565b1161173957806105800151611740565b8061056001515b6105a08201819052516104a082015161175991906136a9565b816105c0018181525050806105a00151602001518161050001518360a001516020015161178691906136a9565b61179091906136a9565b6105e082019081526105c0820151610600830180519190915290519051602001526105a08101515160c0830151516117c89190613691565b610620820151526105a081015160209081015160c0840151909101516117ee9190613691565b81610620015160200181815250506118188161050001518261048001516020015111156025612050565b6104e081015160a08301515161185091611831916136ce565b826105e00151836105c0015161184791906136ce565b10156026612050565b61186482600001513383610500015161208e565b6106408101805160009052610500820151815160200152516040517f341289a97394b9c878fe1b8813926b49f2f9549ac80f6321cf0da450312dd0e9916118aa91612ead565b60405180910390a1610640810180516080850152610480820151516106608301805191909152805160006020918201526105c084015161068085018051919091526105e085015181519092019190915290519151905160405160008051602061391f83398151915293611923933393919290919061377f565b60405180910390a16119336129d6565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905260808088015182519094019390935261060086015181519094019390935261062085015183519091015260e0850151825190910152514360a0909101526104808201515161010084015161118a9190613691565b60046020850151515160048111156119e2576119e2612f73565b03611eb35760208401515160a001516106a0820152611a0334156027612050565b611a1d611a163384604001516000612076565b6028612050565b611a3f611a38338460000151846106a0015160000151612076565b6029612050565b611a608260e0015160800151611a56576001611a59565b60005b602a612050565b6106a08101515160a083015160200151611a7a9190613691565b6106c082015260e082015160400151611a95906127106136a9565b6106a082015151611aa691906136ce565b6106e0820181905260a0830151516107008301526106c0820151611acd90612710906136ce565b611ad79190613691565b816107000151826106e00151611aed91906136ce565b611af791906136ed565b61072082015260e08201516040810151905160649190611b189083906136ce565b611b2291906136ed565b6107208301516106c084015160a0860151516106a086015151611b4591906136ce565b611b4f91906136ed565b611b5991906136a9565b611b6391906136ce565b611b6d91906136ed565b61074082015260e0820151516106a08201515161271091611b8d916136ce565b611b9791906136ed565b610760820181815261078083018051929092529051600060209182018190526107a0840180519190915261074084018051915190920152516106c083015160a085015151925191929091611beb91906136ce565b611bf591906136ed565b11611c0557806107a00151611c0c565b8061078001515b6107c082018190526020015161072082015160a084015151611c2e91906136a9565b611c3891906136a9565b6107e08201526107c0810151516106c0820151611c5591906136a9565b61080082019081526107e08201516108208301805191909152905190516020908101919091526107c0820151015160c083015151611c939190613691565b610840820151526107c08101515160c083015160200151611cb49190613691565b8161084001516020018181525050611cde816107200151826106a00151602001511115602b612050565b611d198260a0015160200151826107000151611cfa91906136ce565b826108000151836107e00151611d1091906136ce565b1015602c612050565b610720810151604051339180156108fc02916000818181858888f19350505050158015611d4a573d6000803e3d6000fd5b50610720810151610860820180519190915280516000602090910152516040517f44681865af61b8a4e2bc7975bf725c862fc0892f16d0d707077bdb8404dfe72091611d9591612ead565b60405180910390a16108608101805160a085015261088082018051600090526106a08301515181516020908101919091526107e08401516108a0850180519190915261080085015181519092019190915290519151905160405160008051602061391f83398151915293611e0f933393919290919061377f565b60405180910390a1611e1f6129d6565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905260808088015182519094019390935261082086015181519094019390935261084085015183519091015260e0850151825190910152514360a09091015261072082015161010084015161118a91906136a9565b50505050565b611ec96002600054146010612050565b8151611ee4901580611edd57508251600154145b6011612050565b600080805560028054611ef690613166565b80601f0160208091040260200160405190810160405280929190818152602001828054611f2290613166565b8015611f6f5780601f10611f4457610100808354040283529160200191611f6f565b820191906000526020600020905b815481529060010190602001808311611f5257829003601f168201915b5050505050806020019051810190611f8791906132b8565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1611fdf3415600f612050565b604051600081527f2a06fc8849dc8cc800e997a4ddfd130d435c3157d099f40308c421f6bc252c269060200160405180910390a1600082526040810151612028906000196121e5565b61203581604001516121f8565b6000808055600181905561204b906002906129f6565b505050565b816103255760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006120848385308561220a565b90505b9392505050565b6120998383836122e4565b61204b57600080fd5b6020810151511561214e576120b5612a30565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c0840152600260005543600155905161212a918391016137b6565b6040516020818303038152906040526002908051906020019061204b929190612a8e565b612156612b12565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e0860152510151610100840152600460005543600155905161212a91839101613837565b50565b6121ef82826123b5565b61032557600080fd5b61220181612490565b6121e257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612271916138e5565b60006040518083038185875af1925050503d80600081146122ae576040519150601f19603f3d011682016040523d82523d6000602084013e6122b3565b606091505b50915091506122c482826001612535565b50808060200190518101906122d99190613901565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612343916138e5565b60006040518083038185875af1925050503d8060008114612380576040519150601f19603f3d011682016040523d82523d6000602084013e612385565b606091505b509150915061239682826002612535565b50808060200190518101906123ab9190613901565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016123e191815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161241f91906138e5565b60006040518083038185875af1925050503d806000811461245c576040519150601f19603f3d011682016040523d82523d6000602084013e612461565b606091505b509150915061247282826003612535565b50808060200190518101906124879190613901565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916124d7916138e5565b60006040518083038185875af1925050503d8060008114612514576040519150601f19603f3d011682016040523d82523d6000602084013e612519565b606091505b509150915061252a82826004612535565b506001949350505050565b60608315612544575081612087565b8251156125545782518084602001fd5b60405163100960cb60e01b81526004810183905260240161206d565b604051806040016040528061258361263c565b8152602001600081525090565b6040518060c001604052806000151581526020016125ac612570565b8152602001600081526020016125c061263c565b81526020016125cd61263c565b81526020016125da61263c565b905290565b6040518060400160405280600081526020016125da612b7e565b6040805160c081019091528060008152602001612614612b91565b8152602001612621612570565b81526020016125c06040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b0316815260200161267961263c565b815260200161268661263c565b8152602001612693612bb0565b81526020016126a061263c565b8152600060208201526040016125da612bea565b6040518060a001604052806126c761263c565b81526020016126d461263c565b81526020016126e1612bb0565b81526020016126ee61263c565b81526020016125da612656565b6040518060400160405280600081526020016125da60405180602001604052806000151581525090565b604051806108c00160405280612739612b91565b8152602001600081526020016000815260200161275461263c565b8152602001612761612570565b815260200161276e612bb0565b815260200161277b612570565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016127ce61263c565b815260200160008152602001600081526020016127e961263c565b81526020016127f661263c565b815260200161280361263c565b815260200161281061263c565b815260200161282b6040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000815260200161285461263c565b8152602001600081526020016000815260200161286f61263c565b815260200161287c61263c565b815260200161288961263c565b815260200161289661263c565b81526020016128a361263c565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016128da61263c565b81526020016128e761263c565b81526020016128f461263c565b8152602001600081526020016000815260200161290f61263c565b815260200161291c61263c565b815260200161292961263c565b815260200161293661263c565b815260200161294361263c565b815260200161295061263c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161298761263c565b815260200161299461263c565b81526020016129a161263c565b815260200160008152602001600081526020016129bc61263c565b81526020016129c961263c565b81526020016125c061263c565b60405180604001604052806129e9612c0c565b81526020016125da612c43565b508054612a0290613166565b6000825580601f10612a12575050565b601f0160209004906000526020600020908101906121e29190612c9a565b6040518060e0016040528060006001600160a01b03168152602001612a53612bea565b815260006020820152604001612a6761263c565b8152602001612a7461263c565b8152602001612a8161263c565b81526020016125da612bb0565b828054612a9a90613166565b90600052602060002090601f016020900481019282612abc5760008555612b02565b82601f10612ad557805160ff1916838001178555612b02565b82800160010185558215612b02579182015b82811115612b02578251825591602001919060010190612ae7565b50612b0e929150612c9a565b5090565b60405180610120016040528060006001600160a01b03168152602001612b36612bea565b815260006020820152604001612b4a61263c565b8152602001612b5761263c565b8152602001612b6461263c565b8152602001612b7161263c565b8152602001612583612bb0565b60405180602001604052806125da6125f9565b604051806040016040528060006001600160a01b031681526020016125da5b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b604051806080016040528060006001600160a01b03168152602001612c2f612bea565b8152600060208201526040016125da61263c565b6040518060e00160405280600015158152602001612c5f61263c565b8152602001612c6c61263c565b8152602001612c7961263c565b8152602001612c86612bb0565b815260200160008152602001600081525090565b5b80821115612b0e5760008155600101612c9b565b6001600160a01b03811681146121e257600080fd5b60405160a081016001600160401b0381118282101715612cf457634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612cf457634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612cf457634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715612cf457634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612cf457634e487b7160e01b600052604160045260246000fd5b80151581146121e257600080fd5b600060a08284031215612ddb57600080fd5b612de3612cc4565b90508135815260208201356020820152604082013560408201526060820135612e0b81612caf565b60608201526080820135612e1e81612dbb565b608082015292915050565b60008060c08385031215612e3c57600080fd5b8235612e4781612caf565b9150612e568460208501612dc9565b90509250929050565b80518252602090810151910152565b612e79828251612e5f565b6020015160409190910152565b606081016102438284612e6e565b600060208284031215612ea657600080fd5b5035919050565b604081016102438284612e5f565b600060408284031215612ecd57600080fd5b612ed5612cfa565b9050813581526020820135602082015292915050565b60008060608385031215612efe57600080fd5b612f088484612ebb565b946040939093013593505050565b600060408284031215612f2857600080fd5b50919050565b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b805160028110612f9b57612f9b612f73565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015161020084019291612fe590850182612e5f565b506040840151612ff86060850182612e5f565b50606084015161300b60a0850182612f3b565b50608084015161301f610140850182612e5f565b5060a08401511661018083015260c083015161303f6101a0840182612f89565b5092915050565b60006102008284031215612f2857600080fd5b60005b8381101561307457818101518382015260200161305c565b83811115611eb35750506000910152565b82815260406020820152600082518060408401526130aa816060850160208701613059565b601f01601f1916919091016060019392505050565b600080604083850312156130d257600080fd5b50508035926020909101359150565b600081830360408112156130f457600080fd5b604080519081016001600160401b038111828210171561312457634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561313d57600080fd5b613145612d2a565b9150602084013561315581612dbb565b825260208101919091529392505050565b600181811c9082168061317a57607f821691505b602082108103612f2857634e487b7160e01b600052602260045260246000fd5b80516131a581612caf565b919050565b6000606082840312156131bc57600080fd5b604051606081016001600160401b03811182821017156131ec57634e487b7160e01b600052604160045260246000fd5b806040525080915082516002811061320357600080fd5b8152602083015161321381612dbb565b6020820152604083015161322681612caf565b6040919091015292915050565b60006040828403121561324557600080fd5b61324d612cfa565b9050815181526020820151602082015292915050565b600060a0828403121561327557600080fd5b61327d612cc4565b905081518152602082015160208201526040820151604082015260608201516132a581612caf565b60608201526080820151612e1e81612dbb565b600061020082840312156132cb57600080fd5b60405160e081016001600160401b03811182821017156132fb57634e487b7160e01b600052604160045260246000fd5b604052825161330981612caf565b815261331884602085016131aa565b6020820152608083015161332b81612caf565b604082015261333d8460a08501613233565b606082015261334f8460e08501613233565b6080820152613362846101208501613233565b60a0820152613375846101608501613263565b60c08201529392505050565b6000610260828403121561339457600080fd5b61339c612d5a565b6133a58361319a565b81526133b484602085016131aa565b60208201526133c56080840161319a565b60408201526133d78460a08501613233565b60608201526133e98460e08501613233565b60808201526133fc846101208501613233565b60a082015261340f846101608501613233565b60c0820152613422846101a08501613263565b60e0820152610240929092015161010083015250919050565b600060c0828403121561344d57600080fd5b613455612cfa565b9050813561346281612caf565b81526134718360208401612dc9565b602082015292915050565b60006060828403121561348e57600080fd5b613496612cfa565b90506134a28383612ebb565b81526040820135602082015292915050565b6000602082840312156134c657600080fd5b604051602081016001600160401b03811182821017156134f657634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b600081830361020081121561351757600080fd5b61351f612cfa565b833581526101e0601f198301121561353657600080fd5b61353e612d2a565b9150613548612d8b565b60208501356005811061355a57600080fd5b8152613569866040870161343b565b602082015261357c86610100870161347c565b604082015261358f8661016087016134b4565b60608201526135a2866101808701612ebb565b60808201526135b5866101c08701612ebb565b60a0820152825260208101919091529392505050565b6001600160a01b038381168252825160208084019190915283015151805161022084019291906005811061360157613601612f73565b6040850152602081810151805190931660608601529190910151906136296080850183612f3b565b6040810151915061363e610120850183612e6e565b6060810151516101808501526080810151915061365f6101a0850183612e5f565b60a0015190506136736101e0840182612e5f565b509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156136a4576136a461367b565b500190565b6000828210156136bb576136bb61367b565b500390565b60a081016102438284612f3b565b60008160001904831182151516156136e8576136e861367b565b500290565b60008261370a57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b0386168152610100810161372d6020830187612e5f565b8460608301526137406080830185612e5f565b6123ab60c0830184612e5f565b6001600160a01b03861681526020810185905261010081016137726040830186612e5f565b6137406080830185612e5f565b6001600160a01b038516815260e0810161379c6020830186612e5f565b6137a96060830185612e5f565b61248760a0830184612e5f565b81516001600160a01b039081168252602080840151610200840192916137de90850182612f89565b50604084015116608083015260608301516137fc60a0840182612e5f565b50608083015161380f60e0840182612e5f565b5060a0830151613823610120840182612e5f565b5060c083015161303f610160840182612f3b565b60006102608201905061384b828451612f2e565b602083015161385d6020840182612f89565b5060408301516138706080840182612f2e565b50606083015161388360a0840182612e5f565b50608083015161389660e0840182612e5f565b5060a08301516138aa610120840182612e5f565b5060c08301516138be610160840182612e5f565b5060e08301516138d26101a0840182612f3b565b5061010083015161024083015292915050565b600082516138f7818460208701613059565b9190910192915050565b60006020828403121561391357600080fd5b815161208781612dbb56fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a2646970667358221220ede3175543f17140bc306fea407b6f9ad4f5d2ee65cc9f5b5fac19e6d17ac84364736f6c634300080d003360806040523480156200001157600080fd5b506040516200102738038062001027833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff92909216919091179055506200046f9350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b6020821081036200046957634e487b7160e01b600052602260045260246000fd5b50919050565b610ba8806200047f6000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afa565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b12565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b12565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afa565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b538339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3b565b90915550506040518281526000906001600160a01b03851690600080516020610b53833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b602082108103610ade57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0d57610b0d610ae4565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4d57610b4d610ae4565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220fc967b1d894cbd1edc4b94cced1362a06b579b8b06fb09bfaed6bb40abbd7d5464736f6c634300080d0033`,
  BytecodeLen: 23594,
  Which: `o1`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:533:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:539:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:385:19:after expr stmt semicolon',
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
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA
  };
export const _APIs = {
  Protocol: {
    delete: Protocol_delete,
    harvest: Protocol_harvest
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
