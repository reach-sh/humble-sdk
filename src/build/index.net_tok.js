// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc3], ['locked', ctc2]]);
  return {
    computeMint_: ((_v258, _v259, _v260 ) => {
        const v258 = stdlib.protect(ctc1, _v258, null);
        const v259 = stdlib.protect(ctc1, _v259, null);
        const v260 = stdlib.protect(ctc1, _v260, null);
      
      const v261 = v258.A;
      const v262 = v258.B;
      const v263 = v259.A;
      const v264 = v259.B;
      const v266 = v260.B;
      let v267;
      const v274 = stdlib.eq(v266, stdlib.checkedBigNumberify('298:19:decimal', stdlib.UInt_max, '0'));
      if (v274) {
        const v275 = stdlib.cast(false, true, v261);
        const v276 = stdlib.cast(false, true, v262);
        const v277 = stdlib.mul256(v275, v276);
        const v278 = stdlib.sqrt256(v277);
        const v279 = stdlib.cast(true, false, v278);
        v267 = v279;
        }
      else {
        const v288 = stdlib.muldiv(v261, v266, v263);
        const v295 = stdlib.muldiv(v262, v266, v264);
        const v297 = stdlib.lt(v288, v295);
        const v298 = v297 ? v288 : v295;
        v267 = v298;
        }
      
      return v267;}),
    computeSwap_: ((_v299, _v300, _v301, _v302 ) => {
        const v299 = stdlib.protect(ctc2, _v299, null);
        const v300 = stdlib.protect(ctc1, _v300, null);
        const v301 = stdlib.protect(ctc1, _v301, null);
        const v302 = stdlib.protect(ctc4, _v302, null);
      
      const v303 = v300.A;
      const v304 = v300.B;
      const v305 = v301.A;
      const v306 = v301.B;
      const v308 = v302.protoFee;
      const v309 = v302.lpFee;
      const v310 = v302.totFee;
      const v311 = stdlib.lt(v308, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v312 = stdlib.lt(v309, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v313 = v311 ? v312 : false;
      const v314 = stdlib.add(v309, v308);
      const v315 = stdlib.eq(v310, v314);
      const v316 = v313 ? v315 : false;
      const v317 = stdlib.lt(v310, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v318 = v316 ? v317 : false;
      const v319 = stdlib.gt(v310, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v320 = v318 ? v319 : false;
      stdlib.assert(v320, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v322 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v322, {
        at: '289:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v323;
      if (v299) {
        const v328 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:276:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v328, {
          at: './index.rsh:276:10:application',
          fs: ['at 290:31:application call to "computeSwap" (defined at: ./index.rsh:272:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v337 = stdlib.add(v305, v303);
        const v345 = stdlib.muldiv(v303, v306, v337);
        const v346 = stdlib.cast(false, true, v303);
        const v347 = stdlib.cast(false, true, v310);
        const v348 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v347);
        const v349 = stdlib.mul256(v346, v348);
        const v350 = stdlib.cast(false, true, v337);
        const v351 = stdlib.mul256(v350, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v352 = stdlib.add256(v351, v349);
        const v353 = stdlib.cast(false, true, v306);
        const v354 = stdlib.mul256(v349, v353);
        const v355 = stdlib.div256(v354, v352);
        const v356 = stdlib.cast(true, false, v355);
        const v361 = stdlib.sub(v345, v356);
        const v365 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v366 = stdlib.div(v365, v310);
        const v372 = stdlib.muldiv(v361, v366, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v377 = stdlib.muldiv(v303, v308, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v385 = stdlib.muldiv(v377, v306, v337);
        const v386 = stdlib.gt(v385, v372);
        const v387 = [v377, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v388 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v372];
        const v389 = v386 ? v387 : v388;
        const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
        const v392 = v389[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
        const v394 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v356
          };
        const v396 = {
          A: v391,
          B: v392
          };
        const v397 = [v394, v396];
        v323 = v397;
        }
      else {
        const v398 = stdlib.eq(v303, stdlib.checkedBigNumberify('./index.rsh:281:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v398, {
          at: './index.rsh:281:10:application',
          fs: ['at 290:31:application call to "computeSwap" (defined at: ./index.rsh:272:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v407 = stdlib.add(v306, v304);
        const v415 = stdlib.muldiv(v304, v305, v407);
        const v416 = stdlib.cast(false, true, v304);
        const v417 = stdlib.cast(false, true, v310);
        const v418 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v417);
        const v419 = stdlib.mul256(v416, v418);
        const v420 = stdlib.cast(false, true, v407);
        const v421 = stdlib.mul256(v420, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v422 = stdlib.add256(v421, v419);
        const v423 = stdlib.cast(false, true, v305);
        const v424 = stdlib.mul256(v419, v423);
        const v425 = stdlib.div256(v424, v422);
        const v426 = stdlib.cast(true, false, v425);
        const v431 = stdlib.sub(v415, v426);
        const v435 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v436 = stdlib.div(v435, v310);
        const v442 = stdlib.muldiv(v431, v436, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v447 = stdlib.muldiv(v304, v308, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v455 = stdlib.muldiv(v447, v305, v407);
        const v456 = stdlib.gt(v455, v442);
        const v457 = [v447, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v442];
        const v459 = v456 ? v457 : v458;
        const v461 = v459[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
        const v462 = v459[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
        const v464 = {
          A: v426,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v466 = {
          A: v462,
          B: v461
          };
        const v467 = [v464, v466];
        v323 = v467;
        }
      const v468 = v323[stdlib.checkedBigNumberify('290:11:array', stdlib.UInt_max, '0')];
      const v469 = v323[stdlib.checkedBigNumberify('290:11:array', stdlib.UInt_max, '1')];
      const v470 = v468.A;
      const v471 = v468.B;
      const v472 = v469.A;
      const v473 = v469.B;
      const v474 = {
        A: v470,
        B: v471
        };
      const v475 = {
        A: v472,
        B: v473
        };
      const v476 = [v474, v475];
      
      return v476;})
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
            const [v3275, v3293, v3321, v3355, v3356, v3357, v3358] = svs;
            return (await ((async () => {
              
              const v7557 = v3355.A;
              const v7558 = v3355.B;
              const v7559 = v3356.A;
              const v7560 = v3356.B;
              const v7561 = v3358.protoFee;
              const v7562 = v3358.lpFee;
              const v7563 = v3358.totFee;
              const v7564 = v3358.protoAddr;
              const v7565 = v3358.locked;
              const v7566 = v3357.A;
              const v7567 = v3357.B;
              const v7568 = {
                A: v7557,
                B: v7558
                };
              const v7569 = {
                A: v7559,
                B: v7560
                };
              const v7570 = {
                locked: v7565,
                lpFee: v7562,
                protoAddr: v7564,
                protoFee: v7561,
                totFee: v7563
                };
              const v7571 = {
                A: v7566,
                B: v7567
                };
              const v7573 = {
                liquidityToken: v3321,
                lptBals: v7568,
                poolBals: v7569,
                protoBals: v7571,
                protoInfo: v7570,
                tokA: v3293,
                tokB: v3275
                };
              
              return v7573;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362] = svs;
            return (await ((async () => {
              
              const v3429 = v3355.A;
              const v3430 = v3355.B;
              const v3431 = v3356.A;
              const v3432 = v3356.B;
              const v3433 = v3358.protoFee;
              const v3434 = v3358.lpFee;
              const v3435 = v3358.totFee;
              const v3436 = v3358.protoAddr;
              const v3437 = v3358.locked;
              const v3438 = v3357.A;
              const v3439 = v3357.B;
              const v3440 = {
                A: v3429,
                B: v3430
                };
              const v3441 = {
                A: v3431,
                B: v3432
                };
              const v3442 = {
                locked: v3437,
                lpFee: v3434,
                protoAddr: v3436,
                protoFee: v3433,
                totFee: v3435
                };
              const v3443 = {
                A: v3438,
                B: v3439
                };
              const v3445 = {
                liquidityToken: v3321,
                lptBals: v3440,
                poolBals: v3441,
                protoBals: v3443,
                protoInfo: v3442,
                tokA: v3293,
                tokB: v3275
                };
              
              return v3445;}))(...args));
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
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc15 = stdlib.T_Data({
    Protocol_harvest0_720: ctc10,
    Provider_deposit0_720: ctc12,
    Provider_withdraw0_720: ctc13,
    Trader_swapAForB0_720: ctc14,
    Trader_swapBForA0_720: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc11, ctc5]);
  const ctc17 = stdlib.T_Tuple([]);
  
  
  const v3265 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v3266 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v3267 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v3268 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v3272 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v3272, {
    at: './index.rsh:362:10:application',
    fs: ['at ./index.rsh:371:15:application call to "checkInput" (defined at: ./index.rsh:361:37:function exp)', 'at ./index.rsh:365:13:application call to [unknown function] (defined at: ./index.rsh:365:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [null, v3268, v3265, v3266, v3267],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:373:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:373:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3274, v3275, v3276, v3277, v3278], secs: v3280, time: v3279, didSend: v497, from: v3273 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3275
        });
      ;
      const v3289 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      ;
      const v3290 = await ctc.getContractInfo();
      const v3293 = ['None', null];
      const v3294 = [stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'),
        fees: stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v3278,
        pays: stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'),
        toks: []
        })), undefined)];
      const v3295 = await txn1.getOutput('internal', 'v3294', ctc9, v3294);
      const v3297 = v3295[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0')];
      const v3298 = v3295[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '1')];
      const v3299 = v3298.protoFee;
      const v3300 = v3298.lpFee;
      const v3301 = v3298.totFee;
      const v3302 = stdlib.lt(v3299, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v3303 = stdlib.lt(v3300, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v3304 = v3302 ? v3303 : false;
      const v3305 = stdlib.add(v3300, v3299);
      const v3306 = stdlib.eq(v3301, v3305);
      const v3307 = v3304 ? v3306 : false;
      const v3308 = stdlib.lt(v3301, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v3309 = v3307 ? v3308 : false;
      const v3310 = stdlib.gt(v3301, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v3311 = v3309 ? v3310 : false;
      ;
      const v3316 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'), v3297);
      ;
      const v3317 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3318 = '                                                                                                ';
      const v3319 = '                                ';
      const v3320 = stdlib.simTokenNew(sim_r, v3276, v3277, v3318, v3319, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v3321 = await txn1.getOutput('internal', 'v3320', ctc3, v3320);
      const v3322 = [v3275];
      const v7636 = v3322[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
      const v7640 = stdlib.tokenEq(v3321, v7636);
      const v3330 = v7640 ? false : true;
      ;
      
      const v3352 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3354 = false;
      const v3355 = v3317;
      const v3356 = v3352;
      const v3357 = v3352;
      const v3358 = v3298;
      const v3359 = v3279;
      const v3362 = v3297;
      
      if (await (async () => {
        const v3428 = v3354 ? false : true;
        
        return v3428;})()) {
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
  const {data: [v3274, v3275, v3276, v3277, v3278], secs: v3280, time: v3279, didSend: v497, from: v3273 } = txn1;
  ;
  ;
  const v3289 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v3289, {
    at: './index.rsh:362:10:application',
    fs: ['at ./index.rsh:374:13:application call to "checkInput" (defined at: ./index.rsh:361:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3290 = await ctc.getContractInfo();
  const v3293 = ['None', null];
  const v3294 = undefined /* Remote */;
  const v3295 = await txn1.getOutput('internal', 'v3294', ctc9, v3294);
  const v3297 = v3295[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0')];
  const v3298 = v3295[stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '1')];
  const v3299 = v3298.protoFee;
  const v3300 = v3298.lpFee;
  const v3301 = v3298.totFee;
  const v3302 = stdlib.lt(v3299, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v3303 = stdlib.lt(v3300, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v3304 = v3302 ? v3303 : false;
  const v3305 = stdlib.add(v3300, v3299);
  const v3306 = stdlib.eq(v3301, v3305);
  const v3307 = v3304 ? v3306 : false;
  const v3308 = stdlib.lt(v3301, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v3309 = v3307 ? v3308 : false;
  const v3310 = stdlib.gt(v3301, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v3311 = v3309 ? v3310 : false;
  stdlib.assert(v3311, {
    at: './index.rsh:378:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3316 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:378:14:application', stdlib.UInt_max, '0'), v3297);
  stdlib.assert(v3316, {
    at: './index.rsh:378:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v3317 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v3318 = '                                                                                                ';
  const v3319 = '                                ';
  const v3320 = undefined /* TokenNew */;
  const v3321 = await txn1.getOutput('internal', 'v3320', ctc3, v3320);
  const v3322 = [v3275];
  const v7636 = v3322[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v7640 = stdlib.tokenEq(v3321, v7636);
  const v3330 = v7640 ? false : true;
  stdlib.assert(v3330, {
    at: './index.rsh:382:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v3321), {
    at: './index.rsh:390:36:application',
    fs: ['at ./index.rsh:390:36:application call to [unknown function] (defined at: ./index.rsh:390:36:function exp)', 'at ./index.rsh:390:36:application call to "liftedInteract" (defined at: ./index.rsh:390:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v3352 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3354 = false;
  let v3355 = v3317;
  let v3356 = v3352;
  let v3357 = v3352;
  let v3358 = v3298;
  let v3359 = v3279;
  let v3362 = v3297;
  
  while (await (async () => {
    const v3428 = v3354 ? false : true;
    
    return v3428;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn2;
    switch (v4004[0]) {
      case 'Protocol_harvest0_720': {
        const v4007 = v4004[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v4131 = v4007[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '0')];
        const v4132 = v4007[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '1')];
        const v4133 = v3358.protoAddr;
        const v4134 = stdlib.addressEq(v4003, v4133);
        stdlib.assert(v4134, {
          at: './index.rsh:420:14:application',
          fs: ['at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v4135 = v4132.protoFee;
        const v4136 = v4132.lpFee;
        const v4137 = v4132.totFee;
        const v4138 = stdlib.lt(v4135, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
        const v4139 = stdlib.lt(v4136, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
        const v4140 = v4138 ? v4139 : false;
        const v4141 = stdlib.add(v4136, v4135);
        const v4142 = stdlib.eq(v4137, v4141);
        const v4143 = v4140 ? v4142 : false;
        const v4144 = stdlib.lt(v4137, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v4145 = v4143 ? v4144 : false;
        const v4146 = stdlib.gt(v4137, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v4147 = v4145 ? v4146 : false;
        stdlib.assert(v4147, {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:421:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4149 = (stdlib.le(await ctc.getBalance(), v3362) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3362));
        const v4150 = stdlib.add(v4149, v3362);
        const v4152 = v3355.B;
        const v4155 = v4132.locked;
        const v4156 = stdlib.eq(v4152, stdlib.checkedBigNumberify('./index.rsh:425:56:decimal', stdlib.UInt_max, '0'));
        const v4157 = v4155 ? v4156 : false;
        const v4158 = v3356.A;
        const v4159 = v3356.B;
        const v4160 = stdlib.eq(v4158, stdlib.checkedBigNumberify('./index.rsh:406:37:decimal', stdlib.UInt_max, '0'));
        const v4161 = stdlib.eq(v4159, stdlib.checkedBigNumberify('./index.rsh:406:47:decimal', stdlib.UInt_max, '0'));
        const v4162 = v4160 ? v4161 : false;
        const v4163 = v4157 ? v4162 : false;
        const v4164 = v3357.A;
        const v4165 = v3357.B;
        const v4166 = stdlib.add(v4164, v4149);
        const v4185 = stdlib.sub(v4150, v4166);
        ;
        ;
        const v4200 = {
          A: v4164,
          B: v4165
          };
        const v4201 = [v4200, v4149];
        await txn2.getOutput('Protocol_harvest', 'v4201', ctc16, v4201);
        const v4229 = v4132.protoAddr;
        const v4231 = {
          locked: v4155,
          lpFee: v4136,
          protoAddr: v4229,
          protoFee: v4135,
          totFee: v4137
          };
        null;
        const cv3354 = v4163;
        const cv3355 = v3355;
        const cv3356 = v3356;
        const cv3357 = v3352;
        const cv3358 = v4132;
        const cv3359 = v4005;
        const cv3362 = v4185;
        
        v3354 = cv3354;
        v3355 = cv3355;
        v3356 = cv3356;
        v3357 = cv3357;
        v3358 = cv3358;
        v3359 = cv3359;
        v3362 = cv3362;
        
        continue;
        break;
        }
      case 'Provider_deposit0_720': {
        const v4717 = v4004[1];
        undefined /* setApiDetails */;
        const v4737 = v4717[stdlib.checkedBigNumberify('./index.rsh:525:9:spread', stdlib.UInt_max, '0')];
        const v4738 = v4737.A;
        const v4739 = v4737.B;
        const v4821 = stdlib.add(v3362, v4738);
        ;
        ;
        ;
        const v4949 = v3358.locked;
        const v4950 = v4949 ? false : true;
        stdlib.assert(v4950, {
          at: './index.rsh:446:14:application',
          fs: ['at ./index.rsh:528:27:application call to "doDeposit" (defined at: ./index.rsh:445:37:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        let v4951;
        const v4954 = v3355.A;
        const v4955 = v3355.B;
        const v4957 = stdlib.eq(v4955, stdlib.checkedBigNumberify('./index.rsh:298:19:decimal', stdlib.UInt_max, '0'));
        if (v4957) {
          const v4958 = stdlib.cast(false, true, v4738);
          const v4959 = stdlib.cast(false, true, v4739);
          const v4960 = stdlib.mul256(v4958, v4959);
          const v4961 = stdlib.sqrt256(v4960);
          const v4962 = stdlib.cast(true, false, v4961);
          v4951 = v4962;
          }
        else {
          const v4963 = v3356.A;
          const v4964 = v3356.B;
          const v4968 = stdlib.muldiv(v4738, v4955, v4963);
          const v4972 = stdlib.muldiv(v4739, v4955, v4964);
          const v4973 = stdlib.lt(v4968, v4972);
          const v4974 = v4973 ? v4968 : v4972;
          v4951 = v4974;
          }
        const v4976 = v3356.A;
        const v4980 = stdlib.add(v4738, v4976);
        const v4982 = v3356.B;
        const v4986 = stdlib.add(v4739, v4982);
        const v4987 = {
          A: v4980,
          B: v4986
          };
        const v4994 = stdlib.sub(v4954, v4951);
        const v4998 = stdlib.add(v4955, v4951);
        const v4999 = {
          A: v4994,
          B: v4998
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v4951', ctc5, v4951);
        const v5035 = {
          A: v4738,
          B: v4739
          };
        const v5036 = {
          A: v4980,
          B: v4986
          };
        const v5037 = {
          A: v4994,
          B: v4998
          };
        null;
        const cv3354 = false;
        const cv3355 = v4999;
        const cv3356 = v4987;
        const cv3357 = v3357;
        const cv3358 = v3358;
        const cv3359 = v4005;
        const cv3362 = v4821;
        
        v3354 = cv3354;
        v3355 = cv3355;
        v3356 = cv3356;
        v3357 = cv3357;
        v3358 = cv3358;
        v3359 = cv3359;
        v3362 = cv3362;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_720': {
        const v5427 = v4004[1];
        undefined /* setApiDetails */;
        const v5466 = v5427[stdlib.checkedBigNumberify('./index.rsh:520:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v5758 = v3355.A;
        const v5759 = v3355.B;
        const v5762 = v3356.A;
        const v5763 = v3356.B;
        const v5767 = stdlib.muldiv(v5466, v5762, v5759);
        const v5771 = stdlib.muldiv(v5466, v5763, v5759);
        const v5780 = stdlib.add(v5758, v5466);
        const v5783 = stdlib.sub(v5759, v5466);
        const v5784 = {
          A: v5780,
          B: v5783
          };
        const v5789 = stdlib.sub(v5762, v5767);
        const v5793 = stdlib.sub(v5763, v5771);
        const v5794 = {
          A: v5789,
          B: v5793
          };
        const v5813 = stdlib.sub(v3362, v5767);
        ;
        ;
        const v5826 = {
          A: v5767,
          B: v5771
          };
        await txn2.getOutput('Provider_withdraw', 'v5826', ctc11, v5826);
        const v5836 = {
          A: v5789,
          B: v5793
          };
        const v5837 = {
          A: v5780,
          B: v5783
          };
        null;
        const cv3354 = false;
        const cv3355 = v5784;
        const cv3356 = v5794;
        const cv3357 = v3357;
        const cv3358 = v3358;
        const cv3359 = v4005;
        const cv3362 = v5813;
        
        v3354 = cv3354;
        v3355 = cv3355;
        v3356 = cv3356;
        v3357 = cv3357;
        v3358 = cv3358;
        v3359 = cv3359;
        v3362 = cv3362;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_720': {
        const v6137 = v4004[1];
        undefined /* setApiDetails */;
        const v6190 = v6137[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '0')];
        const v6241 = stdlib.add(v3362, v6190);
        ;
        ;
        ;
        const v6558 = v6137[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '1')];
        const v6561 = v3358.locked;
        const v6562 = v6561 ? false : true;
        stdlib.assert(v6562, {
          at: './index.rsh:458:14:application',
          fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v6563 = v3356.A;
        const v6564 = v3356.B;
        const v6565 = v3358.protoFee;
        const v6566 = v3358.totFee;
        const v6570 = stdlib.add(v6563, v6190);
        const v6574 = stdlib.muldiv(v6190, v6564, v6570);
        const v6575 = stdlib.cast(false, true, v6190);
        const v6576 = stdlib.cast(false, true, v6566);
        const v6577 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6576);
        const v6578 = stdlib.mul256(v6575, v6577);
        const v6579 = stdlib.cast(false, true, v6570);
        const v6580 = stdlib.mul256(v6579, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v6581 = stdlib.add256(v6580, v6578);
        const v6582 = stdlib.cast(false, true, v6564);
        const v6583 = stdlib.mul256(v6578, v6582);
        const v6584 = stdlib.div256(v6583, v6581);
        const v6585 = stdlib.cast(true, false, v6584);
        const v6588 = stdlib.sub(v6574, v6585);
        const v6591 = stdlib.mul(v6565, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v6592 = stdlib.div(v6591, v6566);
        const v6595 = stdlib.muldiv(v6588, v6592, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v6597 = stdlib.muldiv(v6190, v6565, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v6601 = stdlib.muldiv(v6597, v6564, v6570);
        const v6602 = stdlib.gt(v6601, v6595);
        const v6603 = [v6597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6604 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6595];
        const v6605 = v6602 ? v6603 : v6604;
        const v6607 = v6605[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
        const v6608 = v6605[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
        const v6627 = stdlib.sub(v6564, v6585);
        const v6631 = stdlib.sub(v6570, v6607);
        const v6634 = stdlib.sub(v6627, v6608);
        const v6635 = {
          A: v6631,
          B: v6634
          };
        const v6636 = v3357.A;
        const v6640 = stdlib.add(v6636, v6607);
        const v6641 = v3357.B;
        const v6645 = stdlib.add(v6641, v6608);
        const v6646 = {
          A: v6640,
          B: v6645
          };
        const v6647 = stdlib.le(v6558, v6585);
        stdlib.assert(v6647, {
          at: './index.rsh:479:14:application',
          fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v6650 = stdlib.cast(false, true, v6563);
        const v6652 = stdlib.mul256(v6650, v6582);
        const v6653 = stdlib.cast(false, true, v6631);
        const v6654 = stdlib.cast(false, true, v6634);
        const v6655 = stdlib.mul256(v6653, v6654);
        const v6656 = stdlib.ge256(v6655, v6652);
        stdlib.assert(v6656, {
          at: './index.rsh:489:14:application',
          fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        const v6684 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v6585
          };
        await txn2.getOutput('Trader_swapAForB', 'v6684', ctc11, v6684);
        const v6694 = {
          A: v6190,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6696 = {
          A: v6631,
          B: v6634
          };
        null;
        const cv3354 = false;
        const cv3355 = v3355;
        const cv3356 = v6635;
        const cv3357 = v6646;
        const cv3358 = v3358;
        const cv3359 = v4005;
        const cv3362 = v6241;
        
        v3354 = cv3354;
        v3355 = cv3355;
        v3356 = cv3356;
        v3357 = cv3357;
        v3358 = cv3358;
        v3359 = cv3359;
        v3362 = cv3362;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_720': {
        const v6847 = v4004[1];
        undefined /* setApiDetails */;
        const v6915 = v6847[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v7417 = v6847[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '1')];
        const v7420 = v3358.locked;
        const v7421 = v7420 ? false : true;
        stdlib.assert(v7421, {
          at: './index.rsh:458:14:application',
          fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v7422 = v3356.A;
        const v7423 = v3356.B;
        const v7424 = v3358.protoFee;
        const v7425 = v3358.totFee;
        const v7429 = stdlib.add(v7423, v6915);
        const v7433 = stdlib.muldiv(v6915, v7422, v7429);
        const v7434 = stdlib.cast(false, true, v6915);
        const v7435 = stdlib.cast(false, true, v7425);
        const v7436 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7435);
        const v7437 = stdlib.mul256(v7434, v7436);
        const v7438 = stdlib.cast(false, true, v7429);
        const v7439 = stdlib.mul256(v7438, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v7440 = stdlib.add256(v7439, v7437);
        const v7441 = stdlib.cast(false, true, v7422);
        const v7442 = stdlib.mul256(v7437, v7441);
        const v7443 = stdlib.div256(v7442, v7440);
        const v7444 = stdlib.cast(true, false, v7443);
        const v7447 = stdlib.sub(v7433, v7444);
        const v7450 = stdlib.mul(v7424, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
        const v7451 = stdlib.div(v7450, v7425);
        const v7454 = stdlib.muldiv(v7447, v7451, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
        const v7456 = stdlib.muldiv(v6915, v7424, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
        const v7460 = stdlib.muldiv(v7456, v7422, v7429);
        const v7461 = stdlib.gt(v7460, v7454);
        const v7462 = [v7456, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v7463 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7454];
        const v7464 = v7461 ? v7462 : v7463;
        const v7466 = v7464[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
        const v7467 = v7464[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
        const v7484 = stdlib.sub(v7422, v7444);
        const v7490 = stdlib.sub(v7484, v7467);
        const v7493 = stdlib.sub(v7429, v7466);
        const v7494 = {
          A: v7490,
          B: v7493
          };
        const v7495 = v3357.A;
        const v7499 = stdlib.add(v7495, v7467);
        const v7500 = v3357.B;
        const v7504 = stdlib.add(v7500, v7466);
        const v7505 = {
          A: v7499,
          B: v7504
          };
        const v7506 = stdlib.le(v7417, v7444);
        stdlib.assert(v7506, {
          at: './index.rsh:479:14:application',
          fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v7511 = stdlib.cast(false, true, v7423);
        const v7512 = stdlib.mul256(v7441, v7511);
        const v7513 = stdlib.cast(false, true, v7490);
        const v7514 = stdlib.cast(false, true, v7493);
        const v7515 = stdlib.mul256(v7513, v7514);
        const v7516 = stdlib.ge256(v7515, v7512);
        stdlib.assert(v7516, {
          at: './index.rsh:489:14:application',
          fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        const v7535 = stdlib.sub(v3362, v7444);
        ;
        const v7536 = {
          A: v7444,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v7536', ctc11, v7536);
        const v7546 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v6915
          };
        const v7548 = {
          A: v7490,
          B: v7493
          };
        null;
        const cv3354 = false;
        const cv3355 = v3355;
        const cv3356 = v7494;
        const cv3357 = v7505;
        const cv3358 = v3358;
        const cv3359 = v4005;
        const cv3362 = v7535;
        
        v3354 = cv3354;
        v3355 = cv3355;
        v3356 = cv3356;
        v3357 = cv3357;
        v3358 = cv3358;
        v3359 = cv3359;
        v3362 = cv3362;
        
        continue;
        break;
        }
      }
    
    }
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc17],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v7584], secs: v7586, time: v7585, didSend: v2941, from: v7583 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v7587 = null;
  await txn2.getOutput('Protocol_delete', 'v7587', ctc4, v7587);
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
  
  
  const [v3275, v3293, v3321, v3355, v3356, v3357, v3358] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v7582 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:543:3:application',
    fs: ['at ./index.rsh:543:3:application call to [unknown function] (defined at: ./index.rsh:543:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3275, v3293, v3321, v3355, v3356, v3357, v3358, v7582],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:543:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7584], secs: v7586, time: v7585, didSend: v2941, from: v7583 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v7587 = null;
      const v7588 = await txn1.getOutput('Protocol_delete', 'v7587', ctc1, v7587);
      
      stdlib.simTokenBurn(sim_r, v3321, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v3321);
      sim_r.txns.push({
        kind: 'halt',
        tok: v3275
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
  const {data: [v7584], secs: v7586, time: v7585, didSend: v2941, from: v7583 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v7587 = null;
  const v7588 = await txn1.getOutput('Protocol_delete', 'v7587', ctc1, v7587);
  stdlib.protect(ctc1, await interact.out(v7584, v7588), {
    at: './index.rsh:543:3:application',
    fs: ['at ./index.rsh:543:3:application call to [unknown function] (defined at: ./index.rsh:543:3:function exp)', 'at ./index.rsh:544:4:application call to "k" (defined at: ./index.rsh:543:3:function exp)'],
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
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc8,
    Provider_deposit0_720: ctc10,
    Provider_withdraw0_720: ctc11,
    Trader_swapAForB0_720: ctc12,
    Trader_swapBForA0_720: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc9, ctc3]);
  
  
  const [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3452 = ctc.selfAddress();
  const v3454 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:393:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:515:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v3456 = v3454[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3457 = v3456.protoFee;
  const v3458 = v3456.lpFee;
  const v3459 = v3456.totFee;
  const v3460 = stdlib.lt(v3457, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v3461 = stdlib.lt(v3458, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v3462 = v3460 ? v3461 : false;
  const v3463 = stdlib.add(v3458, v3457);
  const v3464 = stdlib.eq(v3459, v3463);
  const v3465 = v3462 ? v3464 : false;
  const v3466 = stdlib.lt(v3459, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v3467 = v3465 ? v3466 : false;
  const v3468 = stdlib.gt(v3459, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v3469 = v3467 ? v3468 : false;
  stdlib.assert(v3469, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:393:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:515:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v3473 = v3358.protoAddr;
  const v3474 = stdlib.addressEq(v3452, v3473);
  stdlib.assert(v3474, {
    at: './index.rsh:420:14:application',
    fs: ['at ./index.rsh:516:41:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:516:17:application call to [unknown function] (defined at: ./index.rsh:516:17:function exp)', 'at ./index.rsh:393:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:515:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v3362) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3362));
  const v3513 = ['Protocol_harvest0_720', v3454];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362, v3513],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:517:25:decimal', stdlib.UInt_max, '0'), v3321], [stdlib.checkedBigNumberify('./index.rsh:517:31:decimal', stdlib.UInt_max, '0'), v3275]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
      
      switch (v4004[0]) {
        case 'Protocol_harvest0_720': {
          const v4007 = v4004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          ;
          ;
          const v4131 = v4007[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '0')];
          const v4132 = v4007[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '1')];
          const v4133 = v3358.protoAddr;
          const v4134 = stdlib.addressEq(v4003, v4133);
          ;
          const v4135 = v4132.protoFee;
          const v4136 = v4132.lpFee;
          const v4137 = v4132.totFee;
          const v4138 = stdlib.lt(v4135, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v4139 = stdlib.lt(v4136, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v4140 = v4138 ? v4139 : false;
          const v4141 = stdlib.add(v4136, v4135);
          const v4142 = stdlib.eq(v4137, v4141);
          const v4143 = v4140 ? v4142 : false;
          const v4144 = stdlib.lt(v4137, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v4145 = v4143 ? v4144 : false;
          const v4146 = stdlib.gt(v4137, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v4147 = v4145 ? v4146 : false;
          ;
          const v4149 = (stdlib.le(await ctc.getBalance(), v3362) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3362));
          const v4150 = stdlib.add(v4149, v3362);
          const v4152 = v3355.B;
          const v4155 = v4132.locked;
          const v4156 = stdlib.eq(v4152, stdlib.checkedBigNumberify('./index.rsh:425:56:decimal', stdlib.UInt_max, '0'));
          const v4157 = v4155 ? v4156 : false;
          const v4158 = v3356.A;
          const v4159 = v3356.B;
          const v4160 = stdlib.eq(v4158, stdlib.checkedBigNumberify('./index.rsh:406:37:decimal', stdlib.UInt_max, '0'));
          const v4161 = stdlib.eq(v4159, stdlib.checkedBigNumberify('./index.rsh:406:47:decimal', stdlib.UInt_max, '0'));
          const v4162 = v4160 ? v4161 : false;
          const v4163 = v4157 ? v4162 : false;
          const v4164 = v3357.A;
          const v4165 = v3357.B;
          const v4166 = stdlib.add(v4164, v4149);
          const v4185 = stdlib.sub(v4150, v4166);
          sim_r.txns.push({
            amt: v4166,
            kind: 'from',
            to: v4131,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v4165,
            kind: 'from',
            to: v4131,
            tok: v3275
            });
          const v4200 = {
            A: v4164,
            B: v4165
            };
          const v4201 = [v4200, v4149];
          const v4202 = await txn1.getOutput('Protocol_harvest', 'v4201', ctc14, v4201);
          
          const v4229 = v4132.protoAddr;
          const v4231 = {
            locked: v4155,
            lpFee: v4136,
            protoAddr: v4229,
            protoFee: v4135,
            totFee: v4137
            };
          null;
          const v11059 = v3355;
          const v11060 = v3356;
          const v11061 = v3352;
          const v11062 = v4132;
          const v11064 = v4185;
          if (v4163) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_720': {
          const v4717 = v4004[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v5427 = v4004[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v6137 = v4004[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v6847 = v4004[1];
          
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
  const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
  switch (v4004[0]) {
    case 'Protocol_harvest0_720': {
      const v4007 = v4004[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v4131 = v4007[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '0')];
      const v4132 = v4007[stdlib.checkedBigNumberify('./index.rsh:515:9:spread', stdlib.UInt_max, '1')];
      const v4133 = v3358.protoAddr;
      const v4134 = stdlib.addressEq(v4003, v4133);
      stdlib.assert(v4134, {
        at: './index.rsh:420:14:application',
        fs: ['at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v4135 = v4132.protoFee;
      const v4136 = v4132.lpFee;
      const v4137 = v4132.totFee;
      const v4138 = stdlib.lt(v4135, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v4139 = stdlib.lt(v4136, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v4140 = v4138 ? v4139 : false;
      const v4141 = stdlib.add(v4136, v4135);
      const v4142 = stdlib.eq(v4137, v4141);
      const v4143 = v4140 ? v4142 : false;
      const v4144 = stdlib.lt(v4137, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v4145 = v4143 ? v4144 : false;
      const v4146 = stdlib.gt(v4137, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v4147 = v4145 ? v4146 : false;
      stdlib.assert(v4147, {
        at: './index.rsh:78:29:application',
        fs: ['at ./index.rsh:421:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:518:32:application call to "doHarvest" (defined at: ./index.rsh:419:50:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v4149 = (stdlib.le(await ctc.getBalance(), v3362) ? stdlib.checkedBigNumberify('./index.rsh:422:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v3362));
      const v4150 = stdlib.add(v4149, v3362);
      const v4152 = v3355.B;
      const v4155 = v4132.locked;
      const v4156 = stdlib.eq(v4152, stdlib.checkedBigNumberify('./index.rsh:425:56:decimal', stdlib.UInt_max, '0'));
      const v4157 = v4155 ? v4156 : false;
      const v4158 = v3356.A;
      const v4159 = v3356.B;
      const v4160 = stdlib.eq(v4158, stdlib.checkedBigNumberify('./index.rsh:406:37:decimal', stdlib.UInt_max, '0'));
      const v4161 = stdlib.eq(v4159, stdlib.checkedBigNumberify('./index.rsh:406:47:decimal', stdlib.UInt_max, '0'));
      const v4162 = v4160 ? v4161 : false;
      const v4163 = v4157 ? v4162 : false;
      const v4164 = v3357.A;
      const v4165 = v3357.B;
      const v4166 = stdlib.add(v4164, v4149);
      const v4185 = stdlib.sub(v4150, v4166);
      ;
      ;
      const v4200 = {
        A: v4164,
        B: v4165
        };
      const v4201 = [v4200, v4149];
      const v4202 = await txn1.getOutput('Protocol_harvest', 'v4201', ctc14, v4201);
      if (v2157) {
        stdlib.protect(ctc1, await interact.out(v4007, v4202), {
          at: './index.rsh:515:10:application',
          fs: ['at ./index.rsh:515:10:application call to [unknown function] (defined at: ./index.rsh:515:10:function exp)', 'at ./index.rsh:428:12:application call to "k" (defined at: ./index.rsh:518:20:function exp)', 'at ./index.rsh:518:47:application call to [unknown function] (defined at: ./index.rsh:426:20:function exp)', 'at ./index.rsh:518:20:application call to [unknown function] (defined at: ./index.rsh:518:20:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v4229 = v4132.protoAddr;
      const v4231 = {
        locked: v4155,
        lpFee: v4136,
        protoAddr: v4229,
        protoFee: v4135,
        totFee: v4137
        };
      null;
      const v11059 = v3355;
      const v11060 = v3356;
      const v11061 = v3352;
      const v11062 = v4132;
      const v11064 = v4185;
      if (v4163) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_720': {
      const v4717 = v4004[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v5427 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v6137 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v6847 = v4004[1];
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
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc10,
    Provider_deposit0_720: ctc9,
    Provider_withdraw0_720: ctc11,
    Trader_swapAForB0_720: ctc12,
    Trader_swapBForA0_720: ctc12
    });
  
  
  const [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3565 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:526:12:application call to [unknown function] (defined at: ./index.rsh:526:12:function exp)', 'at ./index.rsh:393:19:application call to "runProvider_deposit0_720" (defined at: ./index.rsh:525:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v3566 = v3565[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3567 = v3566.A;
  const v3568 = v3566.B;
  const v3571 = v3358.locked;
  const v3572 = v3571 ? false : true;
  stdlib.assert(v3572, {
    at: './index.rsh:446:14:application',
    fs: ['at ./index.rsh:526:36:application call to "doDeposit" (defined at: ./index.rsh:445:37:function exp)', 'at ./index.rsh:526:12:application call to [unknown function] (defined at: ./index.rsh:526:12:function exp)', 'at ./index.rsh:526:12:application call to [unknown function] (defined at: ./index.rsh:526:12:function exp)', 'at ./index.rsh:393:19:application call to "runProvider_deposit0_720" (defined at: ./index.rsh:525:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v3628 = ['Provider_deposit0_720', v3565];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362, v3628],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3567, [[stdlib.checkedBigNumberify('./index.rsh:389:50:decimal', stdlib.UInt_max, '0'), v3321], [v3568, v3275]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
      
      switch (v4004[0]) {
        case 'Protocol_harvest0_720': {
          const v4007 = v4004[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v4717 = v4004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v4737 = v4717[stdlib.checkedBigNumberify('./index.rsh:525:9:spread', stdlib.UInt_max, '0')];
          const v4738 = v4737.A;
          const v4739 = v4737.B;
          const v4821 = stdlib.add(v3362, v4738);
          sim_r.txns.push({
            amt: v4738,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          sim_r.txns.push({
            amt: v4739,
            kind: 'to',
            tok: v3275
            });
          const v4949 = v3358.locked;
          const v4950 = v4949 ? false : true;
          ;
          let v4951;
          const v4954 = v3355.A;
          const v4955 = v3355.B;
          const v4957 = stdlib.eq(v4955, stdlib.checkedBigNumberify('./index.rsh:298:19:decimal', stdlib.UInt_max, '0'));
          if (v4957) {
            const v4958 = stdlib.cast(false, true, v4738);
            const v4959 = stdlib.cast(false, true, v4739);
            const v4960 = stdlib.mul256(v4958, v4959);
            const v4961 = stdlib.sqrt256(v4960);
            const v4962 = stdlib.cast(true, false, v4961);
            v4951 = v4962;
            }
          else {
            const v4963 = v3356.A;
            const v4964 = v3356.B;
            const v4968 = stdlib.muldiv(v4738, v4955, v4963);
            const v4972 = stdlib.muldiv(v4739, v4955, v4964);
            const v4973 = stdlib.lt(v4968, v4972);
            const v4974 = v4973 ? v4968 : v4972;
            v4951 = v4974;
            }
          const v4976 = v3356.A;
          const v4980 = stdlib.add(v4738, v4976);
          const v4982 = v3356.B;
          const v4986 = stdlib.add(v4739, v4982);
          const v4987 = {
            A: v4980,
            B: v4986
            };
          const v4994 = stdlib.sub(v4954, v4951);
          const v4998 = stdlib.add(v4955, v4951);
          const v4999 = {
            A: v4994,
            B: v4998
            };
          sim_r.txns.push({
            amt: v4951,
            kind: 'from',
            to: v4003,
            tok: v3321
            });
          const v5025 = await txn1.getOutput('Provider_deposit', 'v4951', ctc3, v4951);
          
          const v5035 = {
            A: v4738,
            B: v4739
            };
          const v5036 = {
            A: v4980,
            B: v4986
            };
          const v5037 = {
            A: v4994,
            B: v4998
            };
          null;
          const v11149 = v4999;
          const v11150 = v4987;
          const v11151 = v3357;
          const v11152 = v3358;
          const v11154 = v4821;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v5427 = v4004[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v6137 = v4004[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v6847 = v4004[1];
          
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
  const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
  switch (v4004[0]) {
    case 'Protocol_harvest0_720': {
      const v4007 = v4004[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v4717 = v4004[1];
      undefined /* setApiDetails */;
      const v4737 = v4717[stdlib.checkedBigNumberify('./index.rsh:525:9:spread', stdlib.UInt_max, '0')];
      const v4738 = v4737.A;
      const v4739 = v4737.B;
      const v4821 = stdlib.add(v3362, v4738);
      ;
      ;
      ;
      const v4949 = v3358.locked;
      const v4950 = v4949 ? false : true;
      stdlib.assert(v4950, {
        at: './index.rsh:446:14:application',
        fs: ['at ./index.rsh:528:27:application call to "doDeposit" (defined at: ./index.rsh:445:37:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      let v4951;
      const v4954 = v3355.A;
      const v4955 = v3355.B;
      const v4957 = stdlib.eq(v4955, stdlib.checkedBigNumberify('./index.rsh:298:19:decimal', stdlib.UInt_max, '0'));
      if (v4957) {
        const v4958 = stdlib.cast(false, true, v4738);
        const v4959 = stdlib.cast(false, true, v4739);
        const v4960 = stdlib.mul256(v4958, v4959);
        const v4961 = stdlib.sqrt256(v4960);
        const v4962 = stdlib.cast(true, false, v4961);
        v4951 = v4962;
        }
      else {
        const v4963 = v3356.A;
        const v4964 = v3356.B;
        const v4968 = stdlib.muldiv(v4738, v4955, v4963);
        const v4972 = stdlib.muldiv(v4739, v4955, v4964);
        const v4973 = stdlib.lt(v4968, v4972);
        const v4974 = v4973 ? v4968 : v4972;
        v4951 = v4974;
        }
      const v4976 = v3356.A;
      const v4980 = stdlib.add(v4738, v4976);
      const v4982 = v3356.B;
      const v4986 = stdlib.add(v4739, v4982);
      const v4987 = {
        A: v4980,
        B: v4986
        };
      const v4994 = stdlib.sub(v4954, v4951);
      const v4998 = stdlib.add(v4955, v4951);
      const v4999 = {
        A: v4994,
        B: v4998
        };
      ;
      const v5025 = await txn1.getOutput('Provider_deposit', 'v4951', ctc3, v4951);
      if (v2157) {
        stdlib.protect(ctc1, await interact.out(v4717, v5025), {
          at: './index.rsh:525:10:application',
          fs: ['at ./index.rsh:525:10:application call to [unknown function] (defined at: ./index.rsh:525:10:function exp)', 'at ./index.rsh:452:12:application call to "k" (defined at: ./index.rsh:528:15:function exp)', 'at ./index.rsh:528:37:application call to [unknown function] (defined at: ./index.rsh:450:20:function exp)', 'at ./index.rsh:528:15:application call to [unknown function] (defined at: ./index.rsh:528:15:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v5035 = {
        A: v4738,
        B: v4739
        };
      const v5036 = {
        A: v4980,
        B: v4986
        };
      const v5037 = {
        A: v4994,
        B: v4998
        };
      null;
      const v11149 = v4999;
      const v11150 = v4987;
      const v11151 = v3357;
      const v11152 = v3358;
      const v11154 = v4821;
      return;
      
      break;
      }
    case 'Provider_withdraw0_720': {
      const v5427 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v6137 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v6847 = v4004[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc9,
    Provider_deposit0_720: ctc11,
    Provider_withdraw0_720: ctc8,
    Trader_swapAForB0_720: ctc12,
    Trader_swapBForA0_720: ctc12
    });
  
  
  const [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3517 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:521:11:application call to [unknown function] (defined at: ./index.rsh:521:11:function exp)', 'at ./index.rsh:393:19:application call to "runProvider_withdraw0_720" (defined at: ./index.rsh:520:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v3518 = v3517[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3561 = ['Provider_withdraw0_720', v3517];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362, v3561],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[v3518, v3321], [stdlib.checkedBigNumberify('./index.rsh:522:28:decimal', stdlib.UInt_max, '0'), v3275]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
      
      switch (v4004[0]) {
        case 'Protocol_harvest0_720': {
          const v4007 = v4004[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v4717 = v4004[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v5427 = v4004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v5466 = v5427[stdlib.checkedBigNumberify('./index.rsh:520:9:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v5466,
            kind: 'to',
            tok: v3321
            });
          ;
          const v5758 = v3355.A;
          const v5759 = v3355.B;
          const v5762 = v3356.A;
          const v5763 = v3356.B;
          const v5767 = stdlib.muldiv(v5466, v5762, v5759);
          const v5771 = stdlib.muldiv(v5466, v5763, v5759);
          const v5780 = stdlib.add(v5758, v5466);
          const v5783 = stdlib.sub(v5759, v5466);
          const v5784 = {
            A: v5780,
            B: v5783
            };
          const v5789 = stdlib.sub(v5762, v5767);
          const v5793 = stdlib.sub(v5763, v5771);
          const v5794 = {
            A: v5789,
            B: v5793
            };
          const v5813 = stdlib.sub(v3362, v5767);
          sim_r.txns.push({
            amt: v5767,
            kind: 'from',
            to: v4003,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v5771,
            kind: 'from',
            to: v4003,
            tok: v3275
            });
          const v5826 = {
            A: v5767,
            B: v5771
            };
          const v5827 = await txn1.getOutput('Provider_withdraw', 'v5826', ctc10, v5826);
          
          const v5836 = {
            A: v5789,
            B: v5793
            };
          const v5837 = {
            A: v5780,
            B: v5783
            };
          null;
          const v11239 = v5784;
          const v11240 = v5794;
          const v11241 = v3357;
          const v11242 = v3358;
          const v11244 = v5813;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v6137 = v4004[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v6847 = v4004[1];
          
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
  const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
  switch (v4004[0]) {
    case 'Protocol_harvest0_720': {
      const v4007 = v4004[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v4717 = v4004[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v5427 = v4004[1];
      undefined /* setApiDetails */;
      const v5466 = v5427[stdlib.checkedBigNumberify('./index.rsh:520:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v5758 = v3355.A;
      const v5759 = v3355.B;
      const v5762 = v3356.A;
      const v5763 = v3356.B;
      const v5767 = stdlib.muldiv(v5466, v5762, v5759);
      const v5771 = stdlib.muldiv(v5466, v5763, v5759);
      const v5780 = stdlib.add(v5758, v5466);
      const v5783 = stdlib.sub(v5759, v5466);
      const v5784 = {
        A: v5780,
        B: v5783
        };
      const v5789 = stdlib.sub(v5762, v5767);
      const v5793 = stdlib.sub(v5763, v5771);
      const v5794 = {
        A: v5789,
        B: v5793
        };
      const v5813 = stdlib.sub(v3362, v5767);
      ;
      ;
      const v5826 = {
        A: v5767,
        B: v5771
        };
      const v5827 = await txn1.getOutput('Provider_withdraw', 'v5826', ctc10, v5826);
      if (v2157) {
        stdlib.protect(ctc1, await interact.out(v5427, v5827), {
          at: './index.rsh:520:10:application',
          fs: ['at ./index.rsh:520:10:application call to [unknown function] (defined at: ./index.rsh:520:10:function exp)', 'at ./index.rsh:440:12:application call to "k" (defined at: ./index.rsh:523:14:function exp)', 'at ./index.rsh:523:36:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)', 'at ./index.rsh:523:14:application call to [unknown function] (defined at: ./index.rsh:523:14:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v5836 = {
        A: v5789,
        B: v5793
        };
      const v5837 = {
        A: v5780,
        B: v5783
        };
      null;
      const v11239 = v5784;
      const v11240 = v5794;
      const v11241 = v3357;
      const v11242 = v3358;
      const v11244 = v5813;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v6137 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v6847 = v4004[1];
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
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc9,
    Provider_deposit0_720: ctc11,
    Provider_withdraw0_720: ctc12,
    Trader_swapAForB0_720: ctc8,
    Trader_swapBForA0_720: ctc8
    });
  
  
  const [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3632 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v3633 = v3632[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3634 = v3632[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3640 = v3358.locked;
  const v3641 = v3640 ? false : true;
  stdlib.assert(v3641, {
    at: './index.rsh:458:14:application',
    fs: ['at ./index.rsh:531:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v3642 = v3356.A;
  const v3643 = v3356.B;
  const v3644 = v3358.protoFee;
  const v3645 = v3358.totFee;
  const v3649 = stdlib.add(v3642, v3633);
  const v3653 = stdlib.muldiv(v3633, v3643, v3649);
  const v3654 = stdlib.cast(false, true, v3633);
  const v3655 = stdlib.cast(false, true, v3645);
  const v3656 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v3655);
  const v3657 = stdlib.mul256(v3654, v3656);
  const v3658 = stdlib.cast(false, true, v3649);
  const v3659 = stdlib.mul256(v3658, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v3660 = stdlib.add256(v3659, v3657);
  const v3661 = stdlib.cast(false, true, v3643);
  const v3662 = stdlib.mul256(v3657, v3661);
  const v3663 = stdlib.div256(v3662, v3660);
  const v3664 = stdlib.cast(true, false, v3663);
  const v3667 = stdlib.sub(v3653, v3664);
  const v3670 = stdlib.mul(v3644, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
  const v3671 = stdlib.div(v3670, v3645);
  const v3674 = stdlib.muldiv(v3667, v3671, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
  const v3676 = stdlib.muldiv(v3633, v3644, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
  const v3680 = stdlib.muldiv(v3676, v3643, v3649);
  const v3681 = stdlib.gt(v3680, v3674);
  const v3682 = [v3676, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3683 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3674];
  const v3684 = v3681 ? v3682 : v3683;
  const v3686 = v3684[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
  const v3687 = v3684[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
  const v3706 = stdlib.sub(v3643, v3664);
  const v3710 = stdlib.sub(v3649, v3686);
  const v3713 = stdlib.sub(v3706, v3687);
  const v3726 = stdlib.le(v3634, v3664);
  stdlib.assert(v3726, {
    at: './index.rsh:479:14:application',
    fs: ['at ./index.rsh:531:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v3729 = stdlib.cast(false, true, v3642);
  const v3731 = stdlib.mul256(v3729, v3661);
  const v3732 = stdlib.cast(false, true, v3710);
  const v3733 = stdlib.cast(false, true, v3713);
  const v3734 = stdlib.mul256(v3732, v3733);
  const v3735 = stdlib.ge256(v3734, v3731);
  stdlib.assert(v3735, {
    at: './index.rsh:489:14:application',
    fs: ['at ./index.rsh:531:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:531:15:application call to [unknown function] (defined at: ./index.rsh:531:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:530:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v3740 = ['Trader_swapAForB0_720', v3632];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362, v3740],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v3633, [[stdlib.checkedBigNumberify('./index.rsh:532:25:decimal', stdlib.UInt_max, '0'), v3321], [stdlib.checkedBigNumberify('./index.rsh:532:31:decimal', stdlib.UInt_max, '0'), v3275]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
      
      switch (v4004[0]) {
        case 'Protocol_harvest0_720': {
          const v4007 = v4004[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v4717 = v4004[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v5427 = v4004[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v6137 = v4004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v6190 = v6137[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '0')];
          const v6241 = stdlib.add(v3362, v6190);
          sim_r.txns.push({
            amt: v6190,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          const v6558 = v6137[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '1')];
          const v6561 = v3358.locked;
          const v6562 = v6561 ? false : true;
          ;
          const v6563 = v3356.A;
          const v6564 = v3356.B;
          const v6565 = v3358.protoFee;
          const v6566 = v3358.totFee;
          const v6570 = stdlib.add(v6563, v6190);
          const v6574 = stdlib.muldiv(v6190, v6564, v6570);
          const v6575 = stdlib.cast(false, true, v6190);
          const v6576 = stdlib.cast(false, true, v6566);
          const v6577 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6576);
          const v6578 = stdlib.mul256(v6575, v6577);
          const v6579 = stdlib.cast(false, true, v6570);
          const v6580 = stdlib.mul256(v6579, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v6581 = stdlib.add256(v6580, v6578);
          const v6582 = stdlib.cast(false, true, v6564);
          const v6583 = stdlib.mul256(v6578, v6582);
          const v6584 = stdlib.div256(v6583, v6581);
          const v6585 = stdlib.cast(true, false, v6584);
          const v6588 = stdlib.sub(v6574, v6585);
          const v6591 = stdlib.mul(v6565, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
          const v6592 = stdlib.div(v6591, v6566);
          const v6595 = stdlib.muldiv(v6588, v6592, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
          const v6597 = stdlib.muldiv(v6190, v6565, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
          const v6601 = stdlib.muldiv(v6597, v6564, v6570);
          const v6602 = stdlib.gt(v6601, v6595);
          const v6603 = [v6597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6604 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6595];
          const v6605 = v6602 ? v6603 : v6604;
          const v6607 = v6605[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
          const v6608 = v6605[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
          const v6627 = stdlib.sub(v6564, v6585);
          const v6631 = stdlib.sub(v6570, v6607);
          const v6634 = stdlib.sub(v6627, v6608);
          const v6635 = {
            A: v6631,
            B: v6634
            };
          const v6636 = v3357.A;
          const v6640 = stdlib.add(v6636, v6607);
          const v6641 = v3357.B;
          const v6645 = stdlib.add(v6641, v6608);
          const v6646 = {
            A: v6640,
            B: v6645
            };
          const v6647 = stdlib.le(v6558, v6585);
          ;
          const v6650 = stdlib.cast(false, true, v6563);
          const v6652 = stdlib.mul256(v6650, v6582);
          const v6653 = stdlib.cast(false, true, v6631);
          const v6654 = stdlib.cast(false, true, v6634);
          const v6655 = stdlib.mul256(v6653, v6654);
          const v6656 = stdlib.ge256(v6655, v6652);
          ;
          sim_r.txns.push({
            amt: v6585,
            kind: 'from',
            to: v4003,
            tok: v3275
            });
          const v6684 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v6585
            };
          const v6685 = await txn1.getOutput('Trader_swapAForB', 'v6684', ctc10, v6684);
          
          const v6694 = {
            A: v6190,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6696 = {
            A: v6631,
            B: v6634
            };
          null;
          const v11329 = v3355;
          const v11330 = v6635;
          const v11331 = v6646;
          const v11332 = v3358;
          const v11334 = v6241;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v6847 = v4004[1];
          
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
  const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
  switch (v4004[0]) {
    case 'Protocol_harvest0_720': {
      const v4007 = v4004[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v4717 = v4004[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v5427 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v6137 = v4004[1];
      undefined /* setApiDetails */;
      const v6190 = v6137[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '0')];
      const v6241 = stdlib.add(v3362, v6190);
      ;
      ;
      ;
      const v6558 = v6137[stdlib.checkedBigNumberify('./index.rsh:530:9:spread', stdlib.UInt_max, '1')];
      const v6561 = v3358.locked;
      const v6562 = v6561 ? false : true;
      stdlib.assert(v6562, {
        at: './index.rsh:458:14:application',
        fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v6563 = v3356.A;
      const v6564 = v3356.B;
      const v6565 = v3358.protoFee;
      const v6566 = v3358.totFee;
      const v6570 = stdlib.add(v6563, v6190);
      const v6574 = stdlib.muldiv(v6190, v6564, v6570);
      const v6575 = stdlib.cast(false, true, v6190);
      const v6576 = stdlib.cast(false, true, v6566);
      const v6577 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v6576);
      const v6578 = stdlib.mul256(v6575, v6577);
      const v6579 = stdlib.cast(false, true, v6570);
      const v6580 = stdlib.mul256(v6579, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v6581 = stdlib.add256(v6580, v6578);
      const v6582 = stdlib.cast(false, true, v6564);
      const v6583 = stdlib.mul256(v6578, v6582);
      const v6584 = stdlib.div256(v6583, v6581);
      const v6585 = stdlib.cast(true, false, v6584);
      const v6588 = stdlib.sub(v6574, v6585);
      const v6591 = stdlib.mul(v6565, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
      const v6592 = stdlib.div(v6591, v6566);
      const v6595 = stdlib.muldiv(v6588, v6592, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
      const v6597 = stdlib.muldiv(v6190, v6565, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
      const v6601 = stdlib.muldiv(v6597, v6564, v6570);
      const v6602 = stdlib.gt(v6601, v6595);
      const v6603 = [v6597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6604 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6595];
      const v6605 = v6602 ? v6603 : v6604;
      const v6607 = v6605[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '0')];
      const v6608 = v6605[stdlib.checkedBigNumberify('./index.rsh:277:19:array', stdlib.UInt_max, '1')];
      const v6627 = stdlib.sub(v6564, v6585);
      const v6631 = stdlib.sub(v6570, v6607);
      const v6634 = stdlib.sub(v6627, v6608);
      const v6635 = {
        A: v6631,
        B: v6634
        };
      const v6636 = v3357.A;
      const v6640 = stdlib.add(v6636, v6607);
      const v6641 = v3357.B;
      const v6645 = stdlib.add(v6641, v6608);
      const v6646 = {
        A: v6640,
        B: v6645
        };
      const v6647 = stdlib.le(v6558, v6585);
      stdlib.assert(v6647, {
        at: './index.rsh:479:14:application',
        fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v6650 = stdlib.cast(false, true, v6563);
      const v6652 = stdlib.mul256(v6650, v6582);
      const v6653 = stdlib.cast(false, true, v6631);
      const v6654 = stdlib.cast(false, true, v6634);
      const v6655 = stdlib.mul256(v6653, v6654);
      const v6656 = stdlib.ge256(v6655, v6652);
      stdlib.assert(v6656, {
        at: './index.rsh:489:14:application',
        fs: ['at ./index.rsh:533:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      ;
      const v6684 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v6585
        };
      const v6685 = await txn1.getOutput('Trader_swapAForB', 'v6684', ctc10, v6684);
      if (v2157) {
        stdlib.protect(ctc1, await interact.out(v6137, v6685), {
          at: './index.rsh:530:10:application',
          fs: ['at ./index.rsh:530:10:application call to [unknown function] (defined at: ./index.rsh:530:10:function exp)', 'at ./index.rsh:492:12:application call to "k" (defined at: ./index.rsh:533:18:function exp)', 'at ./index.rsh:533:54:application call to [unknown function] (defined at: ./index.rsh:490:20:function exp)', 'at ./index.rsh:533:18:application call to [unknown function] (defined at: ./index.rsh:533:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v6694 = {
        A: v6190,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6696 = {
        A: v6631,
        B: v6634
        };
      null;
      const v11329 = v3355;
      const v11330 = v6635;
      const v11331 = v6646;
      const v11332 = v3358;
      const v11334 = v6241;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v6847 = v4004[1];
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
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc9,
    Provider_deposit0_720: ctc11,
    Provider_withdraw0_720: ctc12,
    Trader_swapAForB0_720: ctc8,
    Trader_swapBForA0_720: ctc8
    });
  
  
  const [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]);
  const v3744 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v3745 = v3744[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3746 = v3744[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3752 = v3358.locked;
  const v3753 = v3752 ? false : true;
  stdlib.assert(v3753, {
    at: './index.rsh:458:14:application',
    fs: ['at ./index.rsh:536:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v3754 = v3356.A;
  const v3755 = v3356.B;
  const v3756 = v3358.protoFee;
  const v3757 = v3358.totFee;
  const v3761 = stdlib.add(v3755, v3745);
  const v3765 = stdlib.muldiv(v3745, v3754, v3761);
  const v3766 = stdlib.cast(false, true, v3745);
  const v3767 = stdlib.cast(false, true, v3757);
  const v3768 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v3767);
  const v3769 = stdlib.mul256(v3766, v3768);
  const v3770 = stdlib.cast(false, true, v3761);
  const v3771 = stdlib.mul256(v3770, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v3772 = stdlib.add256(v3771, v3769);
  const v3773 = stdlib.cast(false, true, v3754);
  const v3774 = stdlib.mul256(v3769, v3773);
  const v3775 = stdlib.div256(v3774, v3772);
  const v3776 = stdlib.cast(true, false, v3775);
  const v3779 = stdlib.sub(v3765, v3776);
  const v3782 = stdlib.mul(v3756, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
  const v3783 = stdlib.div(v3782, v3757);
  const v3786 = stdlib.muldiv(v3779, v3783, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
  const v3788 = stdlib.muldiv(v3745, v3756, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
  const v3792 = stdlib.muldiv(v3788, v3754, v3761);
  const v3793 = stdlib.gt(v3792, v3786);
  const v3794 = [v3788, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3795 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3786];
  const v3796 = v3793 ? v3794 : v3795;
  const v3798 = v3796[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
  const v3799 = v3796[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
  const v3816 = stdlib.sub(v3754, v3776);
  const v3822 = stdlib.sub(v3816, v3799);
  const v3825 = stdlib.sub(v3761, v3798);
  const v3838 = stdlib.le(v3746, v3776);
  stdlib.assert(v3838, {
    at: './index.rsh:479:14:application',
    fs: ['at ./index.rsh:536:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v3843 = stdlib.cast(false, true, v3755);
  const v3844 = stdlib.mul256(v3773, v3843);
  const v3845 = stdlib.cast(false, true, v3822);
  const v3846 = stdlib.cast(false, true, v3825);
  const v3847 = stdlib.mul256(v3845, v3846);
  const v3848 = stdlib.ge256(v3847, v3844);
  stdlib.assert(v3848, {
    at: './index.rsh:489:14:application',
    fs: ['at ./index.rsh:536:36:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:536:15:application call to [unknown function] (defined at: ./index.rsh:536:15:function exp)', 'at ./index.rsh:393:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:535:9:function exp)', 'at ./index.rsh:393:19:application call to [unknown function] (defined at: ./index.rsh:393:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v3853 = ['Trader_swapBForA0_720', v3744];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3275, v3293, v3321, v3352, v3355, v3356, v3357, v3358, v3362, v3853],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:537:25:decimal', stdlib.UInt_max, '0'), v3321], [v3745, v3275]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
      
      switch (v4004[0]) {
        case 'Protocol_harvest0_720': {
          const v4007 = v4004[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v4717 = v4004[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v5427 = v4004[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v6137 = v4004[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v6847 = v4004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v6915 = v6847[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '0')];
          ;
          ;
          sim_r.txns.push({
            amt: v6915,
            kind: 'to',
            tok: v3275
            });
          const v7417 = v6847[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '1')];
          const v7420 = v3358.locked;
          const v7421 = v7420 ? false : true;
          ;
          const v7422 = v3356.A;
          const v7423 = v3356.B;
          const v7424 = v3358.protoFee;
          const v7425 = v3358.totFee;
          const v7429 = stdlib.add(v7423, v6915);
          const v7433 = stdlib.muldiv(v6915, v7422, v7429);
          const v7434 = stdlib.cast(false, true, v6915);
          const v7435 = stdlib.cast(false, true, v7425);
          const v7436 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7435);
          const v7437 = stdlib.mul256(v7434, v7436);
          const v7438 = stdlib.cast(false, true, v7429);
          const v7439 = stdlib.mul256(v7438, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v7440 = stdlib.add256(v7439, v7437);
          const v7441 = stdlib.cast(false, true, v7422);
          const v7442 = stdlib.mul256(v7437, v7441);
          const v7443 = stdlib.div256(v7442, v7440);
          const v7444 = stdlib.cast(true, false, v7443);
          const v7447 = stdlib.sub(v7433, v7444);
          const v7450 = stdlib.mul(v7424, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
          const v7451 = stdlib.div(v7450, v7425);
          const v7454 = stdlib.muldiv(v7447, v7451, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
          const v7456 = stdlib.muldiv(v6915, v7424, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
          const v7460 = stdlib.muldiv(v7456, v7422, v7429);
          const v7461 = stdlib.gt(v7460, v7454);
          const v7462 = [v7456, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v7463 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7454];
          const v7464 = v7461 ? v7462 : v7463;
          const v7466 = v7464[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
          const v7467 = v7464[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
          const v7484 = stdlib.sub(v7422, v7444);
          const v7490 = stdlib.sub(v7484, v7467);
          const v7493 = stdlib.sub(v7429, v7466);
          const v7494 = {
            A: v7490,
            B: v7493
            };
          const v7495 = v3357.A;
          const v7499 = stdlib.add(v7495, v7467);
          const v7500 = v3357.B;
          const v7504 = stdlib.add(v7500, v7466);
          const v7505 = {
            A: v7499,
            B: v7504
            };
          const v7506 = stdlib.le(v7417, v7444);
          ;
          const v7511 = stdlib.cast(false, true, v7423);
          const v7512 = stdlib.mul256(v7441, v7511);
          const v7513 = stdlib.cast(false, true, v7490);
          const v7514 = stdlib.cast(false, true, v7493);
          const v7515 = stdlib.mul256(v7513, v7514);
          const v7516 = stdlib.ge256(v7515, v7512);
          ;
          const v7535 = stdlib.sub(v3362, v7444);
          sim_r.txns.push({
            amt: v7444,
            kind: 'from',
            to: v4003,
            tok: undefined /* Nothing */
            });
          const v7536 = {
            A: v7444,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v7537 = await txn1.getOutput('Trader_swapBForA', 'v7536', ctc10, v7536);
          
          const v7546 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v6915
            };
          const v7548 = {
            A: v7490,
            B: v7493
            };
          null;
          const v11419 = v3355;
          const v11420 = v7494;
          const v11421 = v7505;
          const v11422 = v3358;
          const v11424 = v7535;
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
  const {data: [v4004], secs: v4006, time: v4005, didSend: v2157, from: v4003 } = txn1;
  switch (v4004[0]) {
    case 'Protocol_harvest0_720': {
      const v4007 = v4004[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v4717 = v4004[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v5427 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v6137 = v4004[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v6847 = v4004[1];
      undefined /* setApiDetails */;
      const v6915 = v6847[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v7417 = v6847[stdlib.checkedBigNumberify('./index.rsh:535:9:spread', stdlib.UInt_max, '1')];
      const v7420 = v3358.locked;
      const v7421 = v7420 ? false : true;
      stdlib.assert(v7421, {
        at: './index.rsh:458:14:application',
        fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v7422 = v3356.A;
      const v7423 = v3356.B;
      const v7424 = v3358.protoFee;
      const v7425 = v3358.totFee;
      const v7429 = stdlib.add(v7423, v6915);
      const v7433 = stdlib.muldiv(v6915, v7422, v7429);
      const v7434 = stdlib.cast(false, true, v6915);
      const v7435 = stdlib.cast(false, true, v7425);
      const v7436 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7435);
      const v7437 = stdlib.mul256(v7434, v7436);
      const v7438 = stdlib.cast(false, true, v7429);
      const v7439 = stdlib.mul256(v7438, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v7440 = stdlib.add256(v7439, v7437);
      const v7441 = stdlib.cast(false, true, v7422);
      const v7442 = stdlib.mul256(v7437, v7441);
      const v7443 = stdlib.div256(v7442, v7440);
      const v7444 = stdlib.cast(true, false, v7443);
      const v7447 = stdlib.sub(v7433, v7444);
      const v7450 = stdlib.mul(v7424, stdlib.checkedBigNumberify('./index.rsh:257:40:decimal', stdlib.UInt_max, '100'));
      const v7451 = stdlib.div(v7450, v7425);
      const v7454 = stdlib.muldiv(v7447, v7451, stdlib.checkedBigNumberify('./index.rsh:259:54:decimal', stdlib.UInt_max, '100'));
      const v7456 = stdlib.muldiv(v6915, v7424, stdlib.checkedBigNumberify('./index.rsh:261:49:decimal', stdlib.UInt_max, '10000'));
      const v7460 = stdlib.muldiv(v7456, v7422, v7429);
      const v7461 = stdlib.gt(v7460, v7454);
      const v7462 = [v7456, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7463 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7454];
      const v7464 = v7461 ? v7462 : v7463;
      const v7466 = v7464[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '0')];
      const v7467 = v7464[stdlib.checkedBigNumberify('./index.rsh:282:19:array', stdlib.UInt_max, '1')];
      const v7484 = stdlib.sub(v7422, v7444);
      const v7490 = stdlib.sub(v7484, v7467);
      const v7493 = stdlib.sub(v7429, v7466);
      const v7494 = {
        A: v7490,
        B: v7493
        };
      const v7495 = v3357.A;
      const v7499 = stdlib.add(v7495, v7467);
      const v7500 = v3357.B;
      const v7504 = stdlib.add(v7500, v7466);
      const v7505 = {
        A: v7499,
        B: v7504
        };
      const v7506 = stdlib.le(v7417, v7444);
      stdlib.assert(v7506, {
        at: './index.rsh:479:14:application',
        fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v7511 = stdlib.cast(false, true, v7423);
      const v7512 = stdlib.mul256(v7441, v7511);
      const v7513 = stdlib.cast(false, true, v7490);
      const v7514 = stdlib.cast(false, true, v7493);
      const v7515 = stdlib.mul256(v7513, v7514);
      const v7516 = stdlib.ge256(v7515, v7512);
      stdlib.assert(v7516, {
        at: './index.rsh:489:14:application',
        fs: ['at ./index.rsh:538:27:application call to "doSwap" (defined at: ./index.rsh:457:57:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      const v7535 = stdlib.sub(v3362, v7444);
      ;
      const v7536 = {
        A: v7444,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v7537 = await txn1.getOutput('Trader_swapBForA', 'v7536', ctc10, v7536);
      if (v2157) {
        stdlib.protect(ctc1, await interact.out(v6847, v7537), {
          at: './index.rsh:535:10:application',
          fs: ['at ./index.rsh:535:10:application call to [unknown function] (defined at: ./index.rsh:535:10:function exp)', 'at ./index.rsh:492:12:application call to "k" (defined at: ./index.rsh:538:18:function exp)', 'at ./index.rsh:538:55:application call to [unknown function] (defined at: ./index.rsh:490:20:function exp)', 'at ./index.rsh:538:18:application call to [unknown function] (defined at: ./index.rsh:538:18:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v7546 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v6915
        };
      const v7548 = {
        A: v7490,
        B: v7493
        };
      null;
      const v11419 = v3355;
      const v11420 = v7494;
      const v11421 = v7505;
      const v11422 = v3358;
      const v11424 = v7535;
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
  stdlib.assert(step == 2, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [2]');
  if (step == 2) {return _Protocol_delete2(ctcTop, interact);}
  };
export async function Protocol_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Protocol_harvest4(ctcTop, interact);}
  };
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Provider_deposit4(ctcTop, interact);}
  };
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Provider_withdraw4(ctcTop, interact);}
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Trader_swapAForB4(ctcTop, interact);}
  };
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Trader_swapBForA4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64))uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`],
    pure: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`],
    sigs: [`Info()(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))`, `Protocol_delete()byte[0]`, `Protocol_harvest(address,(uint64,uint64,uint64,address,byte))((uint64,uint64),uint64)`, `Provider_deposit((uint64,uint64))uint64`, `Provider_withdraw(uint64)(uint64,uint64)`, `Trader_swapAForB(uint64,uint64)(uint64,uint64)`, `Trader_swapBForA(uint64,uint64)(uint64,uint64)`]
    },
  appApproval: `BiAVAAgYBAFkEAIDSZBOoI0GteDwwQeZ66OHCtmUrKAKuPeR5Qf89bu8Au6I6cQCEf///////////wEGJgUBAAEBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBCy4qZEkiWzUBI1s1AjYaABdJQQGuIjUEIQQ1BkkhDAxAAVBJIQ0MQAEgSSEODEAA/yEOEkQ0AUklDEAAeSUSRChkKWRQSTUDSUpXKRA1/1c5EDX+V0kQNf1XWTk1/DQDVxEINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXAAhQNANXCAlQNQdCCnIhBxJEKGQpZFBJNQNJSlcZEDX/VykQNf5XORA1/VdJOTX8NANXEQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cACFA0A1cICVA1B0IJ+CENEkQ2GgE2GgJQNf+AAQM0/1AhCa9QQgCYSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhCa9QQgB3IQwSRCpCBvpJIRAMQAAvSSERDEAAFCEREkQ2GgE2GgJQNf8oNP9QQgBNIRASRDYaATX/KTT/UCEJr1BCADmB5PzqgQISRDYaATX/gAECNP9QgVGvUEIAHzYaAhc1BDYaAzYaARdJIQcMQAb6SSEIDEAGjiEIEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSSJbNf9XCAk1/iESWzX9VxkQNfxXKRA1+1c5EDX6V0kQNflXWTk1+IGSAVs190k1BTX2gARHaEcfNPZQsDT2IlVJIQcMQAPuSSEIDEADCUklDEABgiUSRDT2VwEQNfU09SJbNfQ09DT/iAjpNPhXOAEXFEQ0+iJbNfM0+iNbNfI0+CJbNfE0+CEGWzXwNPI09Ag17ySvNPQWUCskrzTwFlChiAjQo4gIzDXuJK808xZQNe007jTto4gIuiSvNO8WUCujiAivNO6giAipoogIpUlKIQZbIhJEI1siEkQiWyISRCRbNew09DTzHTTvlzTsCTTxIQULNPAKHSEFlzXrNPQ08R0hCpc16iOvNOsWUDTqFiOvUDTqNPMdNO+XNOsNTUk16SJbNeg06SNbNec08zTsCTTnCTXmNO806Ak15TT1I1s07A5EJK805hZQJK805RZQo4gIHjTtJK808hZQo4gIEqdEsSKyATTssgghBLIQMQCyB7M07BYjr1A15IAIAAAAAAAAHXA05FCwNOQ1BycEMQBQI6809BZQUDTkUDTmFjTlFlBQsDT/NP40/TT8IjT7NOYWNOUWUDT5Ils05wgWNPkjWzToCBZQNPgyBjT3NOwJQgaHSDT2VwEQNfU09SJbNfQ09IgHUTT4VzgBFxRENPoiWzXzNPojWzXyNPgiWzXxNPghBls18DTzNPQINe8krzT0FlArJK808BZQoYgHUqOIB0417iSvNPIWUDXtNO407aOIBzwkrzTvFlAro4gHMTTuoIgHK6KIBydJSiEGWyISRCNbIhJEIlsiEkQkWzXsNPQ08h0075c07Ak08SEFCzTwCh0hBZc16zT0NPEdIQqXNeojrzTrFlA06hYjr1A06jTyHTTvlzTrDU1JNekiWzXoNOkjWzXnNO806Ak15jTyNOwJNOcJNeU09SNbNOwORCSvNOYWUCSvNOUWUKOIBqAkrzTzFlA07aOIBpSnRLEisgE07LISJbIQMQCyFDT/shGzI6807BZQNeSACAAAAAAAABocNORQsDTkNQcnBDEAUDT0FiOvUFA05FA05hY05RZQULA0/zT+NP00/CI0+zTmFjTlFlA0+SJbNOgIFjT5I1s05wgWUDT4MgY09zT0CEIFBkg09lcBCDX1NPUXNfQ09DT9iAXpNPsjWzXzNPoiWzXyNPojWzXxNPQ08h0085c18DT0NPEdNPOXNe80+yJbNPQINe408zT0CTXtNPI08Ak17DTxNO8JNeuxIrIBNPCyCCEEshAxALIHs7EisgE077ISJbIQMQCyFDT/shGzNPAWNO8WUDXqgAgAAAAAAAAWwjTqULA06jUHgAQc1K5fMQBQNPQWUDTqUDTsFjTrFlBQNO4WNO0WUFCwNP80/jT9NPwiNO4WNO0WUDTsFjTrFlA0+TT4MgY09zTwCUIEKEkhBAxAARtINPZXARA19TT1STX0Ils18zT0I1s18jTziATiNPI0/4gE9TT4VzgBFxRENPsjW0k18CISQQAtJK808xZQJK808hZQo4gE8ZaIBO1JSiEGWyISRCNbIhJEIlsiEkQkWzXxQgAiNPM08B00+iJblzXvNPI08B00+iNbl0k17jTvSTTuDE018TTzNPoiWwg17zTyNPojWwg17jT7Ils08Qk17TTwNPEINeyxIrIBNPGyEiWyEDEAshQ0/bIRs4AIAAAAAAAAE1c08RZQsDTxFjUHgATeGyn1MQBQNPMWNPIWUFA08RZQNO8WNO4WUFA07RY07BZQULA0/zT+NP00/CI07RY07BZQNO8WNO4WUDT5NPgyBjT3NPMIQgMGSDT2VwFZNfU09VcAIDX0NPVXIDk18zEANPhXGCASRDTzIls18jTzI1s18TTzIQZbNfA08iEFDDTxIQUMEDTwNPE08ggSEDTwIQUMEDTwIg0QRDIKYDIKeAk09wk17zTzVzgBFzXuNPkiWzXtNPkjWzXsNO007wg167EisgE067IIIQSyEDT0sgezsSKyATTsshIlshA09LIUNP+yEbOACAAAAAAAABBpNO0WNOwWUDTvFlBQsDTtFjTsFlA07xZQNQeABFatdTw08hY08RZQNPAWUDTzVxggUDTuFlEHCFBQsDT/NP40/TT8NO40+yNbIhIQNPoiWyISNPojWyISEBA0+zT6NPw08zIGNO809wg06wlCAfBIIQc0ARJENARJIhJMNAISEUQoZClkUEk1AyESWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAAAdo7AqNQexIrIBIQiyEDT/siGzsSKyASKyEiWyEDIJshUyCrIUNAMiW7IRs0ICDCISRCI0ARJENARJIhJMNAISEURJNQVJSklIKjX/Ils1/lcIIDX9VygINfyBMFs1+4AE4B3OrzT/UDT+FlA0/VA0/FA0+xZQsCELiAIbIQuIAhaxIrIBIrISJbIQMgqyFDT+shGzIRMhCg1EgQmvNfqABWFwcElENPsWUAM1+DIKYDIKeAkWNfexIrIBIRSyEDT7shiABElaCmiyGjEYFrIaNPqyGjT+FrIaszIKYDIKeAk09xcJFrcAPlcEAFA1+YAIAAAAAAAADN40+VCwNPlJNfgiWzX3NPhXCDlJNfYiWzX1NPYjWzX0NPYhBls18zT1IQUMNPQhBQwQNPM09DT1CBIQNPMhBQwQNPMiDRBEIjT3EkQhC4gBTrEisgEhCLIQIROyIiEUsiM0/LIlNP2yJoFgr7InMgOyKDIKsimztDw18oAIAAAAAAAADPg08hZQsDTySTXxNP4WIlsTRCEGrzXwNP40+jTxNPAigBD//////////wAAAAAAAAAANPBJNPYyBjT3QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT5QQAwNPUWNPZQNPcWUDT6UDT7UDT8UDT9UChLAVcAf2cpSwFXfwNnSCEHNQEyBjUCQgBTNPUWNPZQNPcWUDT4UDT6UDT7UDT8UDT9UDT/FlAoSwFXAH9nKUsBV38bZ0glNQEyBjUCQgAdMRmBBRJEsSKyASKyCCEEshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSEECDIEEkQxFhJEIQRDMRkiEkRC/90iNQEiNQJC/8E0AElKIQQINQA4BzIKEkQ4ECEEEkQ4CBJEiTQASUpJIQQINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJSRWBIEwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 154,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:378:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v3274",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v3275",
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
                "name": "v3276",
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
                "name": "v3277",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3278",
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
                "name": "v3274",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v3275",
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
                "name": "v3276",
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
                "name": "v3277",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3278",
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
                "name": "v7584",
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
                    "name": "_Protocol_harvest0_720",
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
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_720",
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
                    "name": "_Provider_withdraw0_720",
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
                    "name": "_Trader_swapAForB0_720",
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
                    "name": "_Trader_swapBForA0_720",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v4004",
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
    "name": "_reach_oe_v3294",
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
    "name": "_reach_oe_v3320",
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
        "internalType": "struct T25",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v4201",
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
    "name": "_reach_oe_v4951",
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
    "name": "_reach_oe_v5826",
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
    "name": "_reach_oe_v6684",
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
    "name": "_reach_oe_v7536",
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
    "name": "_reach_oe_v7587",
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
                "name": "v7584",
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
                    "name": "_Protocol_harvest0_720",
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
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Provider_deposit0_720",
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
                    "name": "_Provider_withdraw0_720",
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
                    "name": "_Trader_swapAForB0_720",
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
                    "name": "_Trader_swapBForA0_720",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T24",
                "name": "v4004",
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
  Bytecode: `0x608060405260405162005ba038038062005ba0833981016040819052620000269162000d2c565b60008055436003556200003862000892565b604080513381528351602080830191909152808501518051151583850152908101516001600160a01b03908116606080850191909152828501515160808086019190915290830151516001600160c01b03191660a0850152909101511660c082015290517fd3b5645add4f5895f5ee0b79e70dbc6ff85aad0f1cb6dcc4ce616f0276ef28e19181900360e00190a1620000d434156008620005ed565b620000e260016009620005ed565b80516000908190528151602090810182905283810151015162000106903062000618565b62000112919062000e3f565b6101608201526200012560004762000e3f565b61014082015280516020808401510151604051600092633b02a71760e01b9262000156923092919060240162000e9c565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620001b2919062000f01565b60006040518083038185875af1925050503d8060008114620001f1576040519150601f19603f3d011682016040523d82523d6000602084013e620001f6565b606091505b5090925090506200020a8282600b620006fc565b50610160840151602080870151015162000225903062000618565b62000231919062000e3f565b6101808501819052620002479015600a620005ed565b61014084015162000259904762000e3f565b6020808601519190915281516200027891908301810190830162000f1f565b6020808601805190910191909152516040808601829052517fef857e32ef0e9aa2e9a997f0c011fe9d1ec358d428d0bf2e40e0c7f3472c738f91620002bd9162000fe5565b60405180910390a16200037360648560400151602001516000015110620002e6576000620002f7565b606485604001516020015160200151105b620003045760006200032f565b6040850151602090810151805191015162000320919062001009565b85604001516020015160400151145b6200033c5760006200034d565b606485604001516020015160400151105b6200035a5760006200036b565b600085604001516020015160400151115b600c620005ed565b604084015151620003879015600d620005ed565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620004729062000951565b620004839695949392919062001052565b604051809103906000f080158015620004a0573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f77c9b31e86cd5b66b7de396cfdfbacb091f8529a5056be5491e24530eb298f4291620004e891620010bd565b60405180910390a16020858101510151610100850180516001600160a01b039283169052515160e086015162000536929081169116146200052b5760016200052e565b60005b600e620005ed565b61012084018051600090819052905160200152620005536200095f565b60208087015181015182516001600160a01b0391821690528651835183015260e087015183519116604091820152610120870180518451606090810191909152848401805160009052818a0151815186015282518151850152915182519091015290870180519092015181516080015280514360a09190910152905151905160c00152620005e18162000742565b50505050505062001280565b81620006145760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620006449190620010bd565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162000684919062000f01565b60006040518083038185875af1925050503d8060008114620006c3576040519150601f19603f3d011682016040523d82523d6000602084013e620006c8565b606091505b509092509050620006dc82826006620006fc565b5080806020019051810190620006f39190620010d1565b95945050505050565b606083156200070d5750816200073b565b8251156200071e5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016200060b565b9392505050565b60208101515115620007fa576200075862000988565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c08401526002600055436001559051620007cf91839101620010fa565b60405160208183030381529060405260029080519060200190620007f5929190620009f0565b505050565b6200080462000a7f565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e08601525101516101008401526004600055436001559051620007cf9183910162001185565b604051806101a00160405280620008a862000b04565b8152602001620008b762000b26565b8152602001620008c662000b26565b8152602001620008d562000b42565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260006020820181905260408201526060016200092762000b5c565b81526020016200093662000b42565b81526020016000815260200160008152602001600081525090565b6110298062004b7783390190565b60405180604001604052806200097462000b7a565b81526020016200098362000bb5565b905290565b6040518060e0016040528060006001600160a01b03168152602001620009ad62000b04565b815260006020820152604001620009c362000b42565b8152602001620009d262000b42565b8152602001620009e162000b42565b81526020016200098362000c14565b828054620009fe9062001243565b90600052602060002090601f01602090048101928262000a22576000855562000a6d565b82601f1062000a3d57805160ff191683800117855562000a6d565b8280016001018555821562000a6d579182015b8281111562000a6d57825182559160200191906001019062000a50565b5062000a7b92915062000c4e565b5090565b60405180610120016040528060006001600160a01b0316815260200162000aa562000b04565b81526000602082015260400162000abb62000b42565b815260200162000aca62000b42565b815260200162000ad962000b42565b815260200162000ae862000b42565b815260200162000af762000c14565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040518060400160405280600081526020016200098362000c14565b604051806040016040528060008152602001600081525090565b60405180602001604052806001906020820280368337509192915050565b604051806080016040528060006001600160a01b0316815260200162000b9f62000b04565b8152600060208201526040016200098362000b42565b6040518060e0016040528060001515815260200162000bd362000b42565b815260200162000be262000b42565b815260200162000bf162000b42565b815260200162000c0062000c14565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000a7b576000815560010162000c4f565b604080519081016001600160401b038111828210171562000c9657634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000c9657634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000c9657634e487b7160e01b600052604160045260246000fd5b8051801515811462000d0f57600080fd5b919050565b80516001600160a01b038116811462000d0f57600080fd5b600081830360c081121562000d4057600080fd5b62000d4a62000c65565b8351815260a0601f198301121562000d6157600080fd5b62000d6b62000c9c565b62000d796020860162000cfe565b815262000d896040860162000d14565b60208201526020605f198401121562000da157600080fd5b62000dab62000ccd565b6060860151815260408201526020607f198401121562000dca57600080fd5b62000dd462000ccd565b60808601519093506001600160c01b03198116811462000df357600080fd5b83526060810183905262000e0a60a0860162000d14565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b60008282101562000e545762000e5462000e29565b500390565b80516002811062000e7a57634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062000ebd602084018662000e59565b808416608084015250949350505050565b60005b8381101562000eeb57818101518382015260200162000ed1565b8381111562000efb576000848401525b50505050565b6000825162000f1581846020870162000ece565b9190910192915050565b600060a0828403121562000f3257600080fd5b60405160a081016001600160401b038111828210171562000f6357634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015262000f8e6060840162000d14565b606082015262000fa16080840162000cfe565b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c0830191620010029084018262000fad565b5092915050565b600082198211156200101f576200101f62000e29565b500190565b600081518084526200103e81602086016020860162000ece565b601f01601f19169290920160200192915050565b60c0815260006200106760c083018962001024565b82810360208401526200107b818962001024565b9050828103604084015262001091818862001024565b90508281036060840152620010a7818762001024565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b600060208284031215620010e457600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b03908116825260208084015161020084019291620011249085018262000e59565b50604084015116608083015260608301516200114460a0840182620010eb565b5060808301516200115960e0840182620010eb565b5060a08301516200116f610120840182620010eb565b5060c08301516200100261016084018262000fad565b6000610260820190506200119b82845162000e1c565b6020830151620011af602084018262000e59565b506040830151620011c4608084018262000e1c565b506060830151620011d960a0840182620010eb565b506080830151620011ee60e0840182620010eb565b5060a083015162001204610120840182620010eb565b5060c08301516200121a610160840182620010eb565b5060e0830151620012306101a084018262000fad565b5061010083015161024083015292915050565b600181811c908216806200125857607f821691505b602082108114156200127a57634e487b7160e01b600052602260045260246000fd5b50919050565b6138e780620012906000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633e59bac4146101095780634012e02e1461011c5780634272dbc21461013e5780638323075714610151578063842463da14610166578063ab53f2c61461017e578063c8867ae9146101a1578063d02b6307146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612de2565b6101da565b6040516100c19190612e27565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612e4a565b610249565b6040516100c19190612e63565b61009f610117366004612e71565b6102a7565b34801561012857600080fd5b506101316102cb565b6040516100c19190612f12565b6100db61014c366004612fcb565b61062c565b34801561015d57600080fd5b506001546100db565b61016e610683565b60405190151581526020016100c1565b34801561018a57600080fd5b506101936106ba565b6040516100c1929190613013565b6100fc6101af36600461304d565b610757565b61009f6101c236600461306f565b6107bc565b6100fc6101d536600461304d565b6107dc565b6101e2612535565b6101ea612555565b6101f26125a4565b6101fa6125be565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a8284610841565b50506020015190505b92915050565b610251612601565b610259612555565b6102616125a4565b6102696125be565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b8284610841565b50506060015192915050565b6102af612555565b6102c76102c136849003840184613082565b82611e0e565b5050565b6102d361261b565b60026000541415610476576000600280546102ed90613107565b80601f016020809104026020016040519081016040528092919081815260200182805461031990613107565b80156103665780601f1061033b57610100808354040283529160200191610366565b820191906000526020600020905b81548152906001019060200180831161034957829003601f168201915b505050505080602001905181019061037e9190613255565b9050610388612679565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151815184015260c080870180515160408089018051929092528251870151825188015282518101518251820152825188015182516001600160a01b03918216908a0152925186015182519015159087015260a0808b018051518b8b01805191909152905189015181518a0152828c0151888c0180519187169091529a518b518a015295518a5190920191909152905188519097019690965291518651909301929092528551855191169301929092529092015181519092019190915251919050565b6004600054141561061d5760006002805461049090613107565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc90613107565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b5050505050806020019051810190610521919061331e565b905061052b612679565b608080830180515183515251602090810151835182015260a08085018051518386018051919091529051830151815184015260e0860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935188015183519015159089015260c0808b01805151838c01805191909152905189015181518a0152838c01518b8b0180519188169091529a518b518a015295518a51909301929092529151885190920191909152915186519095019490945285518551941693909101929092529092015181519092019190915251919050565b61062960006007611fa5565b90565b6000610636612555565b61063e6125a4565b6106466125be565b6040805160208082018352878252838301919091526001835281518082019092528282528301526106778284610841565b50506040015192915050565b600061068d612555565b6106956126c0565b60408051602080820190925260008152908201526106b38183611e0e565b5051919050565b6000606060005460028080546106cf90613107565b80601f01602080910402602001604051908101604052809291908181526020018280546106fb90613107565b80156107485780601f1061071d57610100808354040283529160200191610748565b820191906000526020600020905b81548152906001019060200180831161072b57829003601f168201915b50505050509050915091509091565b61075f612601565b610767612555565b61076f6125a4565b6107776125be565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107af8284610841565b5050608001519392505050565b6107c4612555565b6102c76107d63684900384018461346b565b82610841565b6107e4612601565b6107ec612555565b6107f46125a4565b6107fc6125be565b604080518082018252878152602080820188905260a08401919091526004835281518082019092528282528301526108348284610841565b505060a001519392505050565b610851600460005414602a611fa5565b815161086c90158061086557508251600154145b602b611fa5565b60008080556002805461087e90613107565b80601f01602080910402602001604051908101604052809291908181526020018280546108aa90613107565b80156108f75780601f106108cc576101008083540402835291602001916108f7565b820191906000526020600020905b8154815290600101906020018083116108da57829003601f168201915b505050505080602001905181019061090f919061331e565b90506109196126ea565b7f0c36ecdcbe3fc67e26de932e0ef4b0434fa375ec7e902fe67403914b10d86be1338560405161094a92919061353e565b60405180910390a1600060208501515151600481111561096c5761096c612ec8565b1415610d2857602080850151510151815261098934156012611fa5565b6109a361099c3384604001516000611fcb565b6013611fa5565b6109bd6109b63384600001516000611fcb565b6014611fa5565b6109e48260e00151606001516001600160a01b0316336001600160a01b0316146015611fa5565b80516020015151610a74906064116109fd576000610a0e565b606482600001516020015160200151105b610a19576000610a3c565b81516020908101518051910151610a309190613604565b82516020015160400151145b610a47576000610a55565b815160200151604001516064115b610a60576000610a6d565b8151602001516040015115155b6016611fa5565b61010082015147908110610a9757610100830151610a92908261361c565b610a9a565b60005b6020830181905260c084015151610ab19190613604565b604080840182905283515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610af0573d6000803e3d6000fd5b50825182515160c085015160200151610b0a929190611fe3565b60c08301805151606084018051919091529051602090810151825182015290516080840180519190915281840151815190920191909152516040517fe4eafb3a6db3cc0db5c2ed0e70f04383c73b9febff30491a7840a69c9b7210c191610b7091612e27565b60405180910390a160808083015160208087019190915283518101515160a085018051919091528451820151820151815183015284518201516040908101518251820152855183015160609081015183516001600160a01b039091169101528551909201518301518151901515930192909252905190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c1291613633565b60405180910390a1610c22612978565b835181516001600160a01b0391821690526020808601518351820152604080870151845193169201919091526060808601518351909101528351015160800151610c6d576000610c78565b608084015160200151155b610c83576000610ca0565b60a08401515115610c95576000610ca0565b60a084015160200151155b60208083018051921515909252608080870151835183015260a08088015184516040908101919091526060808a0151865190910152875184015185519093019290925292514393019290925290840151610100860151918501519091610d0591613604565b610d0f919061361c565b602082015160c00152610d2181611ff7565b5050611e08565b6001602085015151516004811115610d4257610d42612ec8565b14156110f4576020840151516040015160c082018190525151610d689034146017611fa5565b610d82610d7b3384604001516000611fcb565b6018611fa5565b610da7610da03384600001518460c001516000015160200151611fcb565b6019611fa5565b610dc88260e0015160800151610dbe576001610dc1565b60005b601a611fa5565b608082015160200151610dfe5760c08101515160208101519051610df491610def91613641565b61213a565b60e0820152610e8b565b60a08201515160808301516020015160c08301515151610e1e9190613641565b610e289190613660565b61010082015260a0820151602090810151608084015182015160c084015151909201519091610e5691613641565b610e609190613660565b610120820181905261010082015110610e7e57806101200151610e85565b8061010001515b60e08201525b60a08201515160c08201515151610ea29190613604565b61014082015260a082015160209081015160c08301515190910151610ec79190613604565b61016082019081526101408201516101808301805191909152905190516020015260e0810151608083015151610efd919061361c565b6101a082015260e0810151608083015160200151610f1b9190613604565b6101c082019081526101a08201516101e083018051919091529051905160200152604082015160e0820151610f5291903390611fe3565b7f354fb6b39ab9da9f3fbd4eb52f1acf0d0fdd03e9136f7b16e4645a36b4d5ab148160e00151604051610f8791815260200190565b60405180910390a160e08101805160408086019190915260c083018051515161020085018051919091529051516020908101518251820152610140850151610220860180519190915261016086015181518301526101a086015161024087018051919091526101c0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb9461103694339491939192613682565b60405180910390a1611046612978565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608086015184518201528184018051600090526101e086015181519093019290925261018085015182519093019290925260c08086015182519093019290925260e0850151815160800152514360a09091015282015151516101008401516110dc9190613604565b602082015160c001526110ee81611ff7565b50611e08565b600260208501515151600481111561110e5761110e612ec8565b141561144e57602084015151606001516102608201526111303415601b611fa5565b61115261114b33846040015184610260015160000151611fcb565b601c611fa5565b61116c6111653384600001516000611fcb565b601d611fa5565b60808201516020015160a0830151516102608301515161118c9190613641565b6111969190613660565b610280820152608082015160209081015160a084015190910151610260830151516111c19190613641565b6111cb9190613660565b6102a0820152610260810151516080830151516111e89190613604565b6102c082015261026081015151608083015160200151611208919061361c565b6102e082019081526102c08201516103008301805191909152905190516020015261028081015160a08301515161123f919061361c565b6103208201526102a081015160a08301516020015161125e919061361c565b610340820190815261032082015161036083018051919091529051905160200152610280810151604051339180156108fc02916000818181858888f193505050501580156112b0573d6000803e3d6000fd5b506112c5826000015133836102a00151611fe3565b61028081015161038082018051919091526102a0820151815160200152516040517f0c7e84870d99f65540757589b25c5397363da1f393b9d7fa831c5c64a3aa30ea9161131191612e63565b60405180910390a16103808101805160608501526103208201516103a0830180519190915261034083015181516020908101919091526102c08401516103c085018051919091526102e0850151815190920191909152610260840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef855946113a8943394919390926136c0565b60405180910390a16113b8612978565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905261030086015181519093019290925261036085015182519093019290925260c085015181519092019190915260e0840151815160800152514360a0909101526102808201516101008401516110dc919061361c565b600360208501515151600481111561146857611468612ec8565b141561191c57602084015151608001516103e082018190525161148e903414601e611fa5565b6114a86114a13384604001516000611fcb565b601f611fa5565b6114c26114bb3384600001516000611fcb565b6020611fa5565b6114e38260e00151608001516114d95760016114dc565b60005b6021611fa5565b6103e08101515160a0830151516114fa9190613604565b61040082015260e0820151604001516115159061271061361c565b6103e0820151516115269190613641565b610420820181905260a0830151602001516104408301526104008201516115509061271090613641565b61155a9190613604565b8161044001518261042001516115709190613641565b61157a9190613660565b61046082015260e0820151604081015190516064919061159b908390613641565b6115a59190613660565b61046083015161040084015160a0860151602001516103e0860151516115cb9190613641565b6115d59190613660565b6115df919061361c565b6115e99190613641565b6115f39190613660565b61048082015260e0820151516103e0820151516127109161161391613641565b61161d9190613660565b6104a082018181526104c083018051929092529051600060209182018190526104e084018051919091526104808401805191518301919091525161040084015160a0860151909201519251909261167391613641565b61167d9190613660565b1161168d57806104e00151611694565b806104c001515b6105008201819052516104008201516116ad919061361c565b81610520018181525050806105000151602001518161046001518360a00151602001516116da919061361c565b6116e4919061361c565b6105408201908152610520820151610560830180519190915290519051602001526105008101515160c08301515161171c9190613604565b6105808201515261050081015160209081015160c0840151909101516117429190613604565b816105800151602001818152505061176c816104600151826103e001516020015111156022611fa5565b61044081015160a0830151516117a49161178591613641565b82610540015183610520015161179b9190613641565b10156023611fa5565b6117b8826000015133836104600151611fe3565b6105a08101805160009052610460820151815160200152516040517f99fa411c2fc30b753b5e00040ea8b5c5a68cb2e53dabe961c719b3946cdf4ff6916117fe91612e63565b60405180910390a16105a08101805160808501526103e0820151516105c08301805191909152805160006020918201526105208401516105e085018051919091526105408501518151909201919091529051915190516040516000805160206138928339815191529361187793339391929091906136f2565b60405180910390a1611887612978565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015281840180516000905260808088015182519094019390935261056086015181519094019390935261058085015183519091015260e0850151825190910152514360a0909101526103e0820151516101008401516110dc9190613604565b600460208501515151600481111561193657611936612ec8565b1415611e085760208401515160a0015161060082015261195834156024611fa5565b61197261196b3384604001516000611fcb565b6025611fa5565b61199461198d33846000015184610600015160000151611fcb565b6026611fa5565b6119b58260e00151608001516119ab5760016119ae565b60005b6027611fa5565b6106008101515160a0830151602001516119cf9190613604565b61062082015260e0820151604001516119ea9061271061361c565b610600820151516119fb9190613641565b610640820181905260a083015151610660830152610620820151611a229061271090613641565b611a2c9190613604565b816106600151826106400151611a429190613641565b611a4c9190613660565b61068082015260e08201516040810151905160649190611a6d908390613641565b611a779190613660565b61068083015161062084015160a08601515161060086015151611a9a9190613641565b611aa49190613660565b611aae919061361c565b611ab89190613641565b611ac29190613660565b6106a082015260e0820151516106008201515161271091611ae291613641565b611aec9190613660565b6106c082018181526106e0830180519290925290516000602091820181905261070084018051919091526106a0840180519151909201525161062083015160a085015151925191929091611b409190613641565b611b4a9190613660565b11611b5a57806107000151611b61565b806106e001515b61072082018190526020015161068082015160a084015151611b83919061361c565b611b8d919061361c565b61074082015261072081015151610620820151611baa919061361c565b6107608201908152610740820151610780830180519190915290519051602090810191909152610720820151015160c083015151611be89190613604565b6107a0820151526107208101515160c083015160200151611c099190613604565b816107a001516020018181525050611c338161068001518261060001516020015111156028611fa5565b611c6e8260a0015160200151826106600151611c4f9190613641565b826107600151836107400151611c659190613641565b10156029611fa5565b610680810151604051339180156108fc02916000818181858888f19350505050158015611c9f573d6000803e3d6000fd5b506106808101516107c0820180519190915280516000602090910152516040517f4d45b701cd90e46e3528cc3572784d5f4164c17438855839f82896d9a44958a991611cea91612e63565b60405180910390a16107c08101805160a08501526107e08201805160009052610600830151518151602090810191909152610740840151610800850180519190915261076085015181519092019190915290519151905160405160008051602061389283398151915293611d6493339391929091906136f2565b60405180910390a1611d74612978565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608086015184518201528184018051600090526080808801518251909401939093526107808601518151909401939093526107a085015183519091015260e0850151825190910152514360a0909101526106808201516101008401516110dc919061361c565b50505050565b611e1e6002600054146010611fa5565b8151611e39901580611e3257508251600154145b6011611fa5565b600080805560028054611e4b90613107565b80601f0160208091040260200160405190810160405280929190818152602001828054611e7790613107565b8015611ec45780601f10611e9957610100808354040283529160200191611ec4565b820191906000526020600020905b815481529060010190602001808311611ea757829003601f168201915b5050505050806020019051810190611edc9190613255565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1611f343415600f611fa5565b604051600081527f0819c9270faf9ff01a3d5e4e0fccc6943d4192cb51f2f4afb0534c6efd64646b9060200160405180910390a1600082526040810151611f7d906000196121aa565b611f8a81604001516121bd565b60008080556001819055611fa090600290612998565b505050565b816102c75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611fd9838530856121cf565b90505b9392505050565b611fee8383836122a9565b611fa057600080fd5b602081015151156120a35761200a6129d2565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051820151606080860191909152815184015160808087019190915282519091015160a08601529051015160c0840152600260005543600155905161207f91839101613729565b60405160208183030381529060405260029080519060200190611fa0929190612a30565b6120ab612ab4565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051830151608080870191909152815185015160a087015281519092015160c08087019190915281519092015160e0860152510151610100840152600460005543600155905161207f918391016137aa565b50565b6000600382111561219b5750806000612154600283613660565b61215f906001613604565b90505b818110156121955790508060028161217a8186613660565b6121849190613604565b61218e9190613660565b9050612162565b50919050565b81156121a5575060015b919050565b6121b4828261237a565b6102c757600080fd5b6121c681612455565b61213757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161223691613858565b60006040518083038185875af1925050503d8060008114612273576040519150601f19603f3d011682016040523d82523d6000602084013e612278565b606091505b5091509150612289828260016124fa565b508080602001905181019061229e9190613874565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161230891613858565b60006040518083038185875af1925050503d8060008114612345576040519150601f19603f3d011682016040523d82523d6000602084013e61234a565b606091505b509150915061235b828260026124fa565b50808060200190518101906123709190613874565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016123a691815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516123e49190613858565b60006040518083038185875af1925050503d8060008114612421576040519150601f19603f3d011682016040523d82523d6000602084013e612426565b606091505b5091509150612437828260036124fa565b508080602001905181019061244c9190613874565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b03861691839161249c91613858565b60006040518083038185875af1925050503d80600081146124d9576040519150601f19603f3d011682016040523d82523d6000602084013e6124de565b606091505b50915091506124ef828260046124fa565b506001949350505050565b60608315612509575081611fdc565b8251156125195782518084602001fd5b60405163100960cb60e01b815260048101839052602401611fc2565b6040518060400160405280612548612601565b8152602001600081525090565b6040518060c00160405280600015158152602001612571612535565b815260200160008152602001612585612601565b8152602001612592612601565b815260200161259f612601565b905290565b60405180604001604052806000815260200161259f612b20565b6040805160c0810190915280600081526020016125d9612b33565b81526020016125e6612b56565b81526020016125856040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b0316815260200161263e612601565b815260200161264b612601565b8152602001612658612b69565b8152602001612665612601565b81526000602082015260400161259f612ba3565b6040518060a0016040528061268c612601565b8152602001612699612601565b81526020016126a6612b69565b81526020016126b3612601565b815260200161259f61261b565b60405180604001604052806000815260200161259f60405180602001604052806000151581525090565b6040518061082001604052806126fe612b33565b81526020016000815260200160008152602001612719612601565b8152602001612726612535565b8152602001612733612b69565b8152602001612740612b56565b81526020016000815260200160008152602001600081526020016000815260200160008152602001612770612601565b8152602001600081526020016000815260200161278b612601565b8152602001612798612601565b81526020016127a5612601565b81526020016127b2612601565b81526020016127cd6040518060200160405280600081525090565b8152602001600081526020016000815260200160008152602001600081526020016127f6612601565b81526020016000815260200160008152602001612811612601565b815260200161281e612601565b815260200161282b612601565b8152602001612838612601565b8152602001612845612601565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161287c612601565b8152602001612889612601565b8152602001612896612601565b815260200160008152602001600081526020016128b1612601565b81526020016128be612601565b81526020016128cb612601565b81526020016128d8612601565b81526020016128e5612601565b81526020016128f2612601565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612929612601565b8152602001612936612601565b8152602001612943612601565b8152602001600081526020016000815260200161295e612601565b815260200161296b612601565b8152602001612585612601565b604051806040016040528061298b612bc5565b815260200161259f612bfc565b5080546129a490613107565b6000825580601f106129b4575050565b601f0160209004906000526020600020908101906121379190612c53565b6040518060e0016040528060006001600160a01b031681526020016129f5612ba3565b815260006020820152604001612a09612601565b8152602001612a16612601565b8152602001612a23612601565b815260200161259f612b69565b828054612a3c90613107565b90600052602060002090601f016020900481019282612a5e5760008555612aa4565b82601f10612a7757805160ff1916838001178555612aa4565b82800160010185558215612aa4579182015b82811115612aa4578251825591602001919060010190612a89565b50612ab0929150612c53565b5090565b60405180610120016040528060006001600160a01b03168152602001612ad8612ba3565b815260006020820152604001612aec612601565b8152602001612af9612601565b8152602001612b06612601565b8152602001612b13612601565b8152602001612548612b69565b604051806020016040528061259f6125be565b604051806040016040528060006001600160a01b0316815260200161259f612b69565b604051806020016040528061259f612601565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b604051806080016040528060006001600160a01b03168152602001612be8612ba3565b81526000602082015260400161259f612601565b6040518060e00160405280600015158152602001612c18612601565b8152602001612c25612601565b8152602001612c32612601565b8152602001612c3f612b69565b815260200160008152602001600081525090565b5b80821115612ab05760008155600101612c54565b6001600160a01b038116811461213757600080fd5b60405160a081016001600160401b0381118282101715612cad57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612cad57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612cad57634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715612cad57634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612cad57634e487b7160e01b600052604160045260246000fd5b801515811461213757600080fd5b600060a08284031215612d9457600080fd5b612d9c612c7d565b90508135815260208201356020820152604082013560408201526060820135612dc481612c68565b60608201526080820135612dd781612d74565b608082015292915050565b60008060c08385031215612df557600080fd5b8235612e0081612c68565b9150612e0f8460208501612d82565b90509250929050565b80518252602090810151910152565b6000606082019050612e3a828451612e18565b6020830151604083015292915050565b600060208284031215612e5c57600080fd5b5035919050565b604081016102438284612e18565b60006040828403121561219557600080fd5b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b805160028110612ef057612ef0612ec8565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015161020084019291612f3a90850182612e18565b506040840151612f4d6060850182612e18565b506060840151612f6060a0850182612e90565b506080840151612f74610140850182612e18565b5060a08401511661018083015260c0830151612f946101a0840182612ede565b5092915050565b600060408284031215612fad57600080fd5b612fb5612cb3565b9050813581526020820135602082015292915050565b600060408284031215612fdd57600080fd5b611fdc8383612f9b565b60005b83811015613002578181015183820152602001612fea565b83811115611e085750506000910152565b8281526040602082015260008251806040840152613038816060850160208701612fe7565b601f01601f1916919091016060019392505050565b6000806040838503121561306057600080fd5b50508035926020909101359150565b60006101e0828403121561219557600080fd5b6000818303604081121561309557600080fd5b604080519081016001600160401b03811182821017156130c557634e487b7160e01b600052604160045260246000fd5b604052833581526020601f19830112156130de57600080fd5b6130e6612ce3565b915060208401356130f681612d74565b825260208101919091529392505050565b600181811c9082168061311b57607f821691505b6020821081141561219557634e487b7160e01b600052602260045260246000fd5b80516121a581612c68565b60006060828403121561315957600080fd5b604051606081016001600160401b038111828210171561318957634e487b7160e01b600052604160045260246000fd5b80604052508091508251600281106131a057600080fd5b815260208301516131b081612d74565b602082015260408301516131c381612c68565b6040919091015292915050565b6000604082840312156131e257600080fd5b6131ea612cb3565b9050815181526020820151602082015292915050565b600060a0828403121561321257600080fd5b61321a612c7d565b9050815181526020820151602082015260408201516040820152606082015161324281612c68565b60608201526080820151612dd781612d74565b6000610200828403121561326857600080fd5b60405160e081016001600160401b038111828210171561329857634e487b7160e01b600052604160045260246000fd5b60405282516132a681612c68565b81526132b58460208501613147565b602082015260808301516132c881612c68565b60408201526132da8460a085016131d0565b60608201526132ec8460e085016131d0565b60808201526132ff8461012085016131d0565b60a0820152613312846101608501613200565b60c08201529392505050565b6000610260828403121561333157600080fd5b613339612d13565b6133428361313c565b81526133518460208501613147565b60208201526133626080840161313c565b60408201526133748460a085016131d0565b60608201526133868460e085016131d0565b60808201526133998461012085016131d0565b60a08201526133ac8461016085016131d0565b60c08201526133bf846101a08501613200565b60e0820152610240929092015161010083015250919050565b600060c082840312156133ea57600080fd5b6133f2612cb3565b905081356133ff81612c68565b815261340e8360208401612d82565b602082015292915050565b60006040828403121561342b57600080fd5b613433612ce3565b905061343f8383612f9b565b815292915050565b60006020828403121561345957600080fd5b613461612ce3565b9135825250919050565b60008183036101e081121561347f57600080fd5b613487612cb3565b833581526101c0601f198301121561349e57600080fd5b6134a6612ce3565b91506134b0612d44565b6020850135600581106134c257600080fd5b81526134d186604087016133d8565b60208201526134e4866101008701613419565b60408201526134f7866101408701613447565b606082015261350a866101608701612f9b565b608082015261351d866101a08701612f9b565b60a0820152825260208101919091529392505050565b6102c7828251612e18565b6001600160a01b038381168252825160208084019190915283015151805161020084019291906005811061357457613574612ec8565b60408501526020818101518051909316606086015291909101519061359c6080850183612e90565b604081015191506135b1610120850183613533565b606081015151610160850152608081015191506135d2610180850183612e18565b60a0015190506135e66101c0840182612e18565b509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115613617576136176135ee565b500190565b60008282101561362e5761362e6135ee565b500390565b60a081016102438284612e90565b600081600019048311821515161561365b5761365b6135ee565b500290565b60008261367d57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016136a06020830187612e18565b8460608301526136b36080830185612e18565b61237060c0830184612e18565b6001600160a01b03861681526020810185905261010081016136e56040830186612e18565b6136b36080830185612e18565b6001600160a01b038516815260e0810161370f6020830186612e18565b61371c6060830185612e18565b61244c60a0830184612e18565b81516001600160a01b0390811682526020808401516102008401929161375190850182612ede565b506040840151166080830152606083015161376f60a0840182612e18565b50608083015161378260e0840182612e18565b5060a0830151613796610120840182612e18565b5060c0830151612f94610160840182612e90565b6000610260820190506137be828451612e83565b60208301516137d06020840182612ede565b5060408301516137e36080840182612e83565b5060608301516137f660a0840182612e18565b50608083015161380960e0840182612e18565b5060a083015161381d610120840182612e18565b5060c0830151613831610160840182612e18565b5060e08301516138456101a0840182612e90565b5061010083015161024083015292915050565b6000825161386a818460208701612fe7565b9190910192915050565b60006020828403121561388657600080fd5b8151611fdc81612d7456fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a264697066735822122057bbbb5ebe8e0cbd5a7196536122ef078d2adb553e5fab90227826d43c32179564736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204cd10a740bd19c0fd7618740b0474a572bb76fb7bd7c5a611a4fbf696cbf931964736f6c634300080c0033`,
  BytecodeLen: 23456,
  Which: `o1`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:541:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:547:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:393:19:after expr stmt semicolon',
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
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    deposit: Provider_deposit,
    withdraw: Provider_withdraw
    },
  Trader: {
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    }
  };
