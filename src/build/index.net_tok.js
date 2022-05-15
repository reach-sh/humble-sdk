// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
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
      const v274 = stdlib.eq(v266, stdlib.checkedBigNumberify('284:19:decimal', stdlib.UInt_max, '0'));
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
        at: '275:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v323;
      if (v299) {
        const v328 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:262:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v328, {
          at: './index.rsh:262:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
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
        const v365 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v366 = stdlib.div(v365, v310);
        const v372 = stdlib.muldiv(v361, v366, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v377 = stdlib.muldiv(v303, v308, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v385 = stdlib.muldiv(v377, v306, v337);
        const v386 = stdlib.gt(v385, v372);
        const v387 = [v377, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v388 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v372];
        const v389 = v386 ? v387 : v388;
        const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
        const v392 = v389[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
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
        const v398 = stdlib.eq(v303, stdlib.checkedBigNumberify('./index.rsh:267:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v398, {
          at: './index.rsh:267:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
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
        const v435 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v436 = stdlib.div(v435, v310);
        const v442 = stdlib.muldiv(v431, v436, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v447 = stdlib.muldiv(v304, v308, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v455 = stdlib.muldiv(v447, v305, v407);
        const v456 = stdlib.gt(v455, v442);
        const v457 = [v447, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v458 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v442];
        const v459 = v456 ? v457 : v458;
        const v461 = v459[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
        const v462 = v459[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
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
      const v468 = v323[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '0')];
      const v469 = v323[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '1')];
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
            const [v4141, v4159, v4187, v4221, v4222, v4223, v4224] = svs;
            return (await ((async () => {
              
              const v10145 = v4221.A;
              const v10146 = v4221.B;
              const v10147 = v4222.A;
              const v10148 = v4222.B;
              const v10149 = v4224.protoFee;
              const v10150 = v4224.lpFee;
              const v10151 = v4224.totFee;
              const v10152 = v4224.protoAddr;
              const v10153 = v4224.locked;
              const v10154 = v4223.A;
              const v10155 = v4223.B;
              const v10156 = {
                A: v10145,
                B: v10146
                };
              const v10157 = {
                A: v10147,
                B: v10148
                };
              const v10158 = {
                locked: v10153,
                lpFee: v10150,
                protoAddr: v10152,
                protoFee: v10149,
                totFee: v10151
                };
              const v10159 = {
                A: v10154,
                B: v10155
                };
              const v10161 = {
                liquidityToken: v4187,
                lptBals: v10156,
                poolBals: v10157,
                protoBals: v10159,
                protoInfo: v10158,
                tokA: v4159,
                tokB: v4141
                };
              
              return v10161;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228] = svs;
            return (await ((async () => {
              
              const v4295 = v4221.A;
              const v4296 = v4221.B;
              const v4297 = v4222.A;
              const v4298 = v4222.B;
              const v4299 = v4224.protoFee;
              const v4300 = v4224.lpFee;
              const v4301 = v4224.totFee;
              const v4302 = v4224.protoAddr;
              const v4303 = v4224.locked;
              const v4304 = v4223.A;
              const v4305 = v4223.B;
              const v4306 = {
                A: v4295,
                B: v4296
                };
              const v4307 = {
                A: v4297,
                B: v4298
                };
              const v4308 = {
                locked: v4303,
                lpFee: v4300,
                protoAddr: v4302,
                protoFee: v4299,
                totFee: v4301
                };
              const v4309 = {
                A: v4304,
                B: v4305
                };
              const v4311 = {
                liquidityToken: v4187,
                lptBals: v4306,
                poolBals: v4307,
                protoBals: v4309,
                protoInfo: v4308,
                tokA: v4159,
                tokB: v4141
                };
              
              return v4311;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      2: [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7],
      4: [ctc5, ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc4, ctc7, ctc3]
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
  
  
  const v4131 = stdlib.protect(ctc0, interact.ltName, 'for Admin\'s interact field ltName');
  const v4132 = stdlib.protect(ctc1, interact.ltSymbol, 'for Admin\'s interact field ltSymbol');
  const v4133 = stdlib.protect(ctc2, interact.proto, 'for Admin\'s interact field proto');
  const v4134 = stdlib.protect(ctc3, interact.tokB, 'for Admin\'s interact field tokB');
  
  const v4138 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v4138, {
    at: './index.rsh:348:10:application',
    fs: ['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [null, v4134, v4131, v4132, v4133],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:358:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:358:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4140, v4141, v4142, v4143, v4144], secs: v4146, time: v4145, didSend: v499, from: v4139 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4141
        });
      ;
      const v4156 = await ctc.getContractInfo();
      const v4159 = ['None', null];
      const v4160 = [stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        accs: [],
        bills: stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'),
        fees: stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'),
        kind: 'remote',
        obj: v4144,
        pays: stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'),
        toks: []
        })), undefined)];
      const v4161 = await txn1.getOutput('internal', 'v4160', ctc9, v4160);
      const v4163 = v4161[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0')];
      const v4164 = v4161[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '1')];
      const v4183 = {
        A: stdlib.UInt_max,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4184 = '                                                                                                ';
      const v4185 = '                                ';
      const v4186 = stdlib.simTokenNew(sim_r, v4142, v4143, v4184, v4185, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v4187 = await txn1.getOutput('internal', 'v4186', ctc3, v4186);
      
      const v4218 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4220 = false;
      const v4221 = v4183;
      const v4222 = v4218;
      const v4223 = v4218;
      const v4224 = v4164;
      const v4225 = v4145;
      const v4228 = v4163;
      
      if (await (async () => {
        const v4294 = v4220 ? false : true;
        
        return v4294;})()) {
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
  const {data: [v4140, v4141, v4142, v4143, v4144], secs: v4146, time: v4145, didSend: v499, from: v4139 } = txn1;
  const v4148 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v4148, {
    at: './index.rsh:348:10:application',
    fs: ['at ./index.rsh:359:30:application call to "checkInput" (defined at: ./index.rsh:347:37:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  ;
  const v4156 = await ctc.getContractInfo();
  const v4159 = ['None', null];
  const v4160 = undefined /* Remote */;
  const v4161 = await txn1.getOutput('internal', 'v4160', ctc9, v4160);
  const v4163 = v4161[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0')];
  const v4164 = v4161[stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '1')];
  const v4165 = v4164.protoFee;
  const v4166 = v4164.lpFee;
  const v4167 = v4164.totFee;
  const v4168 = stdlib.lt(v4165, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v4169 = stdlib.lt(v4166, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v4170 = v4168 ? v4169 : false;
  const v4171 = stdlib.add(v4166, v4165);
  const v4172 = stdlib.eq(v4167, v4171);
  const v4173 = v4170 ? v4172 : false;
  const v4174 = stdlib.lt(v4167, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v4175 = v4173 ? v4174 : false;
  const v4176 = stdlib.gt(v4167, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v4177 = v4175 ? v4176 : false;
  stdlib.assert(v4177, {
    at: './index.rsh:363:14:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v4182 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:363:14:application', stdlib.UInt_max, '0'), v4163);
  stdlib.assert(v4182, {
    at: './index.rsh:363:14:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v4183 = {
    A: stdlib.UInt_max,
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v4184 = '                                                                                                ';
  const v4185 = '                                ';
  const v4186 = undefined /* TokenNew */;
  const v4187 = await txn1.getOutput('internal', 'v4186', ctc3, v4186);
  const v4188 = [v4141];
  const v10224 = v4188[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v10228 = stdlib.tokenEq(v4187, v10224);
  const v4196 = v10228 ? false : true;
  stdlib.assert(v4196, {
    at: './index.rsh:367:25:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  stdlib.protect(ctc4, await interact.signalPoolCreation(v4187), {
    at: './index.rsh:375:36:application',
    fs: ['at ./index.rsh:375:36:application call to [unknown function] (defined at: ./index.rsh:375:36:function exp)', 'at ./index.rsh:375:36:application call to "liftedInteract" (defined at: ./index.rsh:375:36:application)'],
    msg: 'signalPoolCreation',
    who: 'Admin'
    });
  
  const v4218 = {
    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v4220 = false;
  let v4221 = v4183;
  let v4222 = v4218;
  let v4223 = v4218;
  let v4224 = v4164;
  let v4225 = v4145;
  let v4228 = v4163;
  
  while (await (async () => {
    const v4294 = v4220 ? false : true;
    
    return v4294;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn2;
    switch (v5162[0]) {
      case 'Protocol_harvest0_720': {
        const v5165 = v5162[1];
        undefined /* setApiDetails */;
        ;
        ;
        ;
        const v5575 = v5165[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '0')];
        const v5576 = v5165[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '1')];
        const v5577 = v4224.protoAddr;
        const v5578 = stdlib.addressEq(v4139, v5577);
        stdlib.assert(v5578, {
          at: './index.rsh:422:14:application',
          fs: ['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Admin'
          });
        const v5579 = v5576.protoFee;
        const v5580 = v5576.lpFee;
        const v5581 = v5576.totFee;
        const v5582 = stdlib.lt(v5579, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
        const v5583 = stdlib.lt(v5580, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
        const v5584 = v5582 ? v5583 : false;
        const v5585 = stdlib.add(v5580, v5579);
        const v5586 = stdlib.eq(v5581, v5585);
        const v5587 = v5584 ? v5586 : false;
        const v5588 = stdlib.lt(v5581, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
        const v5589 = v5587 ? v5588 : false;
        const v5590 = stdlib.gt(v5581, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
        const v5591 = v5589 ? v5590 : false;
        stdlib.assert(v5591, {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5593 = (stdlib.le(await ctc.getBalance(), v4228) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v4228));
        const v5594 = stdlib.add(v5593, v4228);
        const v5596 = v4221.B;
        const v5599 = v5576.locked;
        const v5600 = stdlib.eq(v5596, stdlib.checkedBigNumberify('./index.rsh:427:56:decimal', stdlib.UInt_max, '0'));
        const v5601 = v5599 ? v5600 : false;
        const v5602 = v4222.A;
        const v5603 = v4222.B;
        const v5604 = stdlib.eq(v5602, stdlib.checkedBigNumberify('./index.rsh:391:37:decimal', stdlib.UInt_max, '0'));
        const v5605 = stdlib.eq(v5603, stdlib.checkedBigNumberify('./index.rsh:391:47:decimal', stdlib.UInt_max, '0'));
        const v5606 = v5604 ? v5605 : false;
        const v5607 = v5601 ? v5606 : false;
        const v5608 = v4223.A;
        const v5609 = v4223.B;
        const v5610 = stdlib.add(v5608, v5593);
        const v5629 = stdlib.sub(v5594, v5610);
        ;
        ;
        const v5644 = {
          A: v5608,
          B: v5609
          };
        const v5645 = [v5644, v5593];
        await txn2.getOutput('Protocol_harvest', 'v5645', ctc16, v5645);
        const v5673 = v5576.protoAddr;
        const v5675 = {
          locked: v5599,
          lpFee: v5580,
          protoAddr: v5673,
          protoFee: v5579,
          totFee: v5581
          };
        null;
        const cv4220 = v5607;
        const cv4221 = v4221;
        const cv4222 = v4222;
        const cv4223 = v4218;
        const cv4224 = v5576;
        const cv4225 = v5163;
        const cv4228 = v5629;
        
        v4220 = cv4220;
        v4221 = cv4221;
        v4222 = cv4222;
        v4223 = cv4223;
        v4224 = cv4224;
        v4225 = cv4225;
        v4228 = cv4228;
        
        continue;
        break;
        }
      case 'Provider_deposit0_720': {
        const v6161 = v5162[1];
        undefined /* setApiDetails */;
        const v6181 = v6161[stdlib.checkedBigNumberify('./index.rsh:459:10:spread', stdlib.UInt_max, '0')];
        const v6182 = v4224.locked;
        const v6183 = v6182 ? false : true;
        stdlib.assert(v6183, {
          at: './index.rsh:460:12:application',
          fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v6185 = v6181.A;
        const v6186 = v6181.B;
        const v6188 = v4221.B;
        const v6190 = stdlib.eq(v6188, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
        const v6551 = stdlib.add(v4228, v6185);
        ;
        ;
        ;
        let v6681;
        const v6684 = v4221.A;
        if (v6190) {
          const v6688 = stdlib.cast(false, true, v6185);
          const v6689 = stdlib.cast(false, true, v6186);
          const v6690 = stdlib.mul256(v6688, v6689);
          const v6691 = stdlib.sqrt256(v6690);
          const v6692 = stdlib.cast(true, false, v6691);
          v6681 = v6692;
          }
        else {
          const v6693 = v4222.A;
          const v6694 = v4222.B;
          const v6698 = stdlib.muldiv(v6185, v6188, v6693);
          const v6702 = stdlib.muldiv(v6186, v6188, v6694);
          const v6703 = stdlib.lt(v6698, v6702);
          const v6704 = v6703 ? v6698 : v6702;
          v6681 = v6704;
          }
        const v6706 = v4222.A;
        const v6710 = stdlib.add(v6185, v6706);
        const v6712 = v4222.B;
        const v6716 = stdlib.add(v6186, v6712);
        const v6717 = {
          A: v6710,
          B: v6716
          };
        const v6724 = stdlib.sub(v6684, v6681);
        const v6728 = stdlib.add(v6188, v6681);
        const v6729 = {
          A: v6724,
          B: v6728
          };
        ;
        await txn2.getOutput('Provider_deposit', 'v6681', ctc5, v6681);
        const v6766 = {
          A: v6185,
          B: v6186
          };
        const v6767 = {
          A: v6710,
          B: v6716
          };
        const v6768 = {
          A: v6724,
          B: v6728
          };
        null;
        const cv4220 = false;
        const cv4221 = v6729;
        const cv4222 = v6717;
        const cv4223 = v4223;
        const cv4224 = v4224;
        const cv4225 = v5163;
        const cv4228 = v6551;
        
        v4220 = cv4220;
        v4221 = cv4221;
        v4222 = cv4222;
        v4223 = cv4223;
        v4224 = cv4224;
        v4225 = cv4225;
        v4228 = cv4228;
        
        continue;
        break;
        }
      case 'Provider_withdraw0_720': {
        const v7157 = v5162[1];
        undefined /* setApiDetails */;
        const v7248 = v7157[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
        ;
        ;
        ;
        const v7772 = v4221.A;
        const v7773 = v4221.B;
        const v7776 = v4222.A;
        const v7777 = v4222.B;
        const v7781 = stdlib.muldiv(v7248, v7776, v7773);
        const v7785 = stdlib.muldiv(v7248, v7777, v7773);
        const v7794 = stdlib.add(v7772, v7248);
        const v7797 = stdlib.sub(v7773, v7248);
        const v7798 = {
          A: v7794,
          B: v7797
          };
        const v7803 = stdlib.sub(v7776, v7781);
        const v7807 = stdlib.sub(v7777, v7785);
        const v7808 = {
          A: v7803,
          B: v7807
          };
        const v7828 = stdlib.sub(v4228, v7781);
        ;
        ;
        const v7841 = {
          A: v7781,
          B: v7785
          };
        await txn2.getOutput('Provider_withdraw', 'v7841', ctc11, v7841);
        const v7851 = {
          A: v7803,
          B: v7807
          };
        const v7852 = {
          A: v7794,
          B: v7797
          };
        null;
        const cv4220 = false;
        const cv4221 = v7798;
        const cv4222 = v7808;
        const cv4223 = v4223;
        const cv4224 = v4224;
        const cv4225 = v5163;
        const cv4228 = v7828;
        
        v4220 = cv4220;
        v4221 = cv4221;
        v4222 = cv4222;
        v4223 = cv4223;
        v4224 = cv4224;
        v4225 = cv4225;
        v4228 = cv4228;
        
        continue;
        break;
        }
      case 'Trader_swapAForB0_720': {
        const v8153 = v5162[1];
        undefined /* setApiDetails */;
        const v8295 = v8153[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '0')];
        const v8296 = v8153[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '1')];
        const v8299 = v4224.locked;
        const v8300 = v8299 ? false : true;
        stdlib.assert(v8300, {
          at: './index.rsh:474:14:application',
          fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v8301 = v4222.A;
        const v8302 = v4222.B;
        const v8303 = v4224.protoFee;
        const v8304 = v4224.totFee;
        const v8308 = stdlib.add(v8301, v8295);
        const v8312 = stdlib.muldiv(v8295, v8302, v8308);
        const v8313 = stdlib.cast(false, true, v8295);
        const v8314 = stdlib.cast(false, true, v8304);
        const v8315 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v8314);
        const v8316 = stdlib.mul256(v8313, v8315);
        const v8317 = stdlib.cast(false, true, v8308);
        const v8318 = stdlib.mul256(v8317, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v8319 = stdlib.add256(v8318, v8316);
        const v8320 = stdlib.cast(false, true, v8302);
        const v8321 = stdlib.mul256(v8316, v8320);
        const v8322 = stdlib.div256(v8321, v8319);
        const v8323 = stdlib.cast(true, false, v8322);
        const v8326 = stdlib.sub(v8312, v8323);
        const v8329 = stdlib.mul(v8303, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v8330 = stdlib.div(v8329, v8304);
        const v8333 = stdlib.muldiv(v8326, v8330, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v8335 = stdlib.muldiv(v8295, v8303, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v8339 = stdlib.muldiv(v8335, v8302, v8308);
        const v8340 = stdlib.gt(v8339, v8333);
        const v8341 = [v8335, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v8342 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8333];
        const v8343 = v8340 ? v8341 : v8342;
        const v8345 = v8343[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
        const v8346 = v8343[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
        const v8365 = stdlib.sub(v8302, v8323);
        const v8369 = stdlib.sub(v8308, v8345);
        const v8372 = stdlib.sub(v8365, v8346);
        const v8385 = stdlib.le(v8296, v8323);
        stdlib.assert(v8385, {
          at: './index.rsh:495:14:application',
          fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v8388 = stdlib.cast(false, true, v8301);
        const v8390 = stdlib.mul256(v8388, v8320);
        const v8391 = stdlib.cast(false, true, v8369);
        const v8392 = stdlib.cast(false, true, v8372);
        const v8393 = stdlib.mul256(v8391, v8392);
        const v8394 = stdlib.ge256(v8393, v8390);
        stdlib.assert(v8394, {
          at: './index.rsh:505:14:application',
          fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        const v8543 = stdlib.add(v4228, v8295);
        ;
        ;
        ;
        const v8933 = {
          A: v8369,
          B: v8372
          };
        const v8934 = v4223.A;
        const v8938 = stdlib.add(v8934, v8345);
        const v8939 = v4223.B;
        const v8943 = stdlib.add(v8939, v8346);
        const v8944 = {
          A: v8938,
          B: v8943
          };
        ;
        const v8984 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v8323
          };
        await txn2.getOutput('Trader_swapAForB', 'v8984', ctc11, v8984);
        const v8994 = {
          A: v8295,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v8996 = {
          A: v8369,
          B: v8372
          };
        null;
        const cv4220 = false;
        const cv4221 = v4221;
        const cv4222 = v8933;
        const cv4223 = v8944;
        const cv4224 = v4224;
        const cv4225 = v5163;
        const cv4228 = v8543;
        
        v4220 = cv4220;
        v4221 = cv4221;
        v4222 = cv4222;
        v4223 = cv4223;
        v4224 = cv4224;
        v4225 = cv4225;
        v4228 = cv4228;
        
        continue;
        break;
        }
      case 'Trader_swapBForA0_720': {
        const v9149 = v5162[1];
        undefined /* setApiDetails */;
        const v9404 = v9149[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '0')];
        const v9405 = v9149[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '1')];
        const v9408 = v4224.locked;
        const v9409 = v9408 ? false : true;
        stdlib.assert(v9409, {
          at: './index.rsh:474:14:application',
          fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'locked',
          who: 'Admin'
          });
        const v9410 = v4222.A;
        const v9411 = v4222.B;
        const v9412 = v4224.protoFee;
        const v9413 = v4224.totFee;
        const v9417 = stdlib.add(v9411, v9404);
        const v9421 = stdlib.muldiv(v9404, v9410, v9417);
        const v9422 = stdlib.cast(false, true, v9404);
        const v9423 = stdlib.cast(false, true, v9413);
        const v9424 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v9423);
        const v9425 = stdlib.mul256(v9422, v9424);
        const v9426 = stdlib.cast(false, true, v9417);
        const v9427 = stdlib.mul256(v9426, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v9428 = stdlib.add256(v9427, v9425);
        const v9429 = stdlib.cast(false, true, v9410);
        const v9430 = stdlib.mul256(v9425, v9429);
        const v9431 = stdlib.div256(v9430, v9428);
        const v9432 = stdlib.cast(true, false, v9431);
        const v9435 = stdlib.sub(v9421, v9432);
        const v9438 = stdlib.mul(v9412, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v9439 = stdlib.div(v9438, v9413);
        const v9442 = stdlib.muldiv(v9435, v9439, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v9444 = stdlib.muldiv(v9404, v9412, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v9448 = stdlib.muldiv(v9444, v9410, v9417);
        const v9449 = stdlib.gt(v9448, v9442);
        const v9450 = [v9444, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v9451 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9442];
        const v9452 = v9449 ? v9450 : v9451;
        const v9454 = v9452[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
        const v9455 = v9452[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
        const v9472 = stdlib.sub(v9410, v9432);
        const v9478 = stdlib.sub(v9472, v9455);
        const v9481 = stdlib.sub(v9417, v9454);
        const v9494 = stdlib.le(v9405, v9432);
        stdlib.assert(v9494, {
          at: './index.rsh:495:14:application',
          fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'slippage',
          who: 'Admin'
          });
        const v9499 = stdlib.cast(false, true, v9411);
        const v9500 = stdlib.mul256(v9429, v9499);
        const v9501 = stdlib.cast(false, true, v9478);
        const v9502 = stdlib.cast(false, true, v9481);
        const v9503 = stdlib.mul256(v9501, v9502);
        const v9504 = stdlib.ge256(v9503, v9500);
        stdlib.assert(v9504, {
          at: './index.rsh:505:14:application',
          fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
          msg: 'constant product',
          who: 'Admin'
          });
        ;
        ;
        ;
        const v10080 = {
          A: v9478,
          B: v9481
          };
        const v10081 = v4223.A;
        const v10085 = stdlib.add(v10081, v9455);
        const v10086 = v4223.B;
        const v10090 = stdlib.add(v10086, v9454);
        const v10091 = {
          A: v10085,
          B: v10090
          };
        const v10123 = stdlib.sub(v4228, v9432);
        ;
        const v10124 = {
          A: v9432,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await txn2.getOutput('Trader_swapBForA', 'v10124', ctc11, v10124);
        const v10134 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v9404
          };
        const v10136 = {
          A: v9478,
          B: v9481
          };
        null;
        const cv4220 = false;
        const cv4221 = v4221;
        const cv4222 = v10080;
        const cv4223 = v10091;
        const cv4224 = v4224;
        const cv4225 = v5163;
        const cv4228 = v10123;
        
        v4220 = cv4220;
        v4221 = cv4221;
        v4222 = cv4222;
        v4223 = cv4223;
        v4224 = cv4224;
        v4225 = cv4225;
        v4228 = cv4228;
        
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
  const {data: [v10172], secs: v10174, time: v10173, didSend: v3807, from: v10171 } = txn2;
  undefined /* setApiDetails */;
  ;
  const v10175 = null;
  await txn2.getOutput('Protocol_delete', 'v10175', ctc4, v10175);
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
  
  
  const [v4141, v4159, v4187, v4221, v4222, v4223, v4224] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc0, ctc2, ctc0, ctc4, ctc4, ctc4, ctc7]);
  const v10170 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:525:3:application',
    fs: ['at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4141, v4159, v4187, v4221, v4222, v4223, v4224, v10170],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:525:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v10172], secs: v10174, time: v10173, didSend: v3807, from: v10171 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v10175 = null;
      const v10176 = await txn1.getOutput('Protocol_delete', 'v10175', ctc1, v10175);
      
      stdlib.simTokenBurn(sim_r, v4187, stdlib.UInt_max);
      stdlib.simTokenDestroy(sim_r, v4187);
      sim_r.txns.push({
        kind: 'halt',
        tok: v4141
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
  const {data: [v10172], secs: v10174, time: v10173, didSend: v3807, from: v10171 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v10175 = null;
  const v10176 = await txn1.getOutput('Protocol_delete', 'v10175', ctc1, v10175);
  stdlib.protect(ctc1, await interact.out(v10172, v10176), {
    at: './index.rsh:525:3:application',
    fs: ['at ./index.rsh:525:3:application call to [unknown function] (defined at: ./index.rsh:525:3:function exp)', 'at ./index.rsh:526:4:application call to "k" (defined at: ./index.rsh:525:3:function exp)'],
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc8,
    Provider_deposit0_720: ctc10,
    Provider_withdraw0_720: ctc11,
    Trader_swapAForB0_720: ctc12,
    Trader_swapBForA0_720: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc9, ctc4]);
  
  
  const [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v4320 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:378:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:438:9:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v4322 = v4320[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4323 = v4322.protoFee;
  const v4324 = v4322.lpFee;
  const v4325 = v4322.totFee;
  const v4326 = stdlib.lt(v4323, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
  const v4327 = stdlib.lt(v4324, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
  const v4328 = v4326 ? v4327 : false;
  const v4329 = stdlib.add(v4324, v4323);
  const v4330 = stdlib.eq(v4325, v4329);
  const v4331 = v4328 ? v4330 : false;
  const v4332 = stdlib.lt(v4325, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
  const v4333 = v4331 ? v4332 : false;
  const v4334 = stdlib.gt(v4325, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
  const v4335 = v4333 ? v4334 : false;
  stdlib.assert(v4335, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:378:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:438:9:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v4339 = v4224.protoAddr;
  const v4340 = stdlib.addressEq(v4139, v4339);
  stdlib.assert(v4340, {
    at: './index.rsh:422:14:application',
    fs: ['at ./index.rsh:440:28:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:439:27:application call to [unknown function] (defined at: ./index.rsh:439:27:function exp)', 'at ./index.rsh:378:19:application call to "runProtocol_harvest0_720" (defined at: ./index.rsh:438:9:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  (stdlib.le(await ctc.getBalance(), v4228) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v4228));
  const v4379 = ['Protocol_harvest0_720', v4320];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228, v4379],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:442:25:decimal', stdlib.UInt_max, '0'), v4187], [stdlib.checkedBigNumberify('./index.rsh:442:31:decimal', stdlib.UInt_max, '0'), v4141]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
      
      switch (v5162[0]) {
        case 'Protocol_harvest0_720': {
          const v5165 = v5162[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          ;
          ;
          const v5575 = v5165[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '0')];
          const v5576 = v5165[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '1')];
          const v5579 = v5576.protoFee;
          const v5580 = v5576.lpFee;
          const v5581 = v5576.totFee;
          const v5593 = (stdlib.le(await ctc.getBalance(), v4228) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v4228));
          const v5594 = stdlib.add(v5593, v4228);
          const v5596 = v4221.B;
          const v5599 = v5576.locked;
          const v5600 = stdlib.eq(v5596, stdlib.checkedBigNumberify('./index.rsh:427:56:decimal', stdlib.UInt_max, '0'));
          const v5601 = v5599 ? v5600 : false;
          const v5602 = v4222.A;
          const v5603 = v4222.B;
          const v5604 = stdlib.eq(v5602, stdlib.checkedBigNumberify('./index.rsh:391:37:decimal', stdlib.UInt_max, '0'));
          const v5605 = stdlib.eq(v5603, stdlib.checkedBigNumberify('./index.rsh:391:47:decimal', stdlib.UInt_max, '0'));
          const v5606 = v5604 ? v5605 : false;
          const v5607 = v5601 ? v5606 : false;
          const v5608 = v4223.A;
          const v5609 = v4223.B;
          const v5610 = stdlib.add(v5608, v5593);
          const v5629 = stdlib.sub(v5594, v5610);
          sim_r.txns.push({
            kind: 'from',
            to: v5575,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v5575,
            tok: v4141
            });
          const v5644 = {
            A: v5608,
            B: v5609
            };
          const v5645 = [v5644, v5593];
          const v5646 = await txn1.getOutput('Protocol_harvest', 'v5645', ctc14, v5645);
          
          const v5673 = v5576.protoAddr;
          const v5675 = {
            locked: v5599,
            lpFee: v5580,
            protoAddr: v5673,
            protoFee: v5579,
            totFee: v5581
            };
          null;
          const v13647 = v4221;
          const v13648 = v4222;
          const v13649 = v4218;
          const v13650 = v5576;
          const v13652 = v5629;
          if (v5607) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_720': {
          const v6161 = v5162[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v7157 = v5162[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v8153 = v5162[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v9149 = v5162[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
  switch (v5162[0]) {
    case 'Protocol_harvest0_720': {
      const v5165 = v5162[1];
      undefined /* setApiDetails */;
      ;
      ;
      ;
      const v5575 = v5165[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '0')];
      const v5576 = v5165[stdlib.checkedBigNumberify('./index.rsh:438:9:spread', stdlib.UInt_max, '1')];
      const v5577 = v4224.protoAddr;
      const v5578 = stdlib.addressEq(v4139, v5577);
      stdlib.assert(v5578, {
        at: './index.rsh:422:14:application',
        fs: ['at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v5579 = v5576.protoFee;
      const v5580 = v5576.lpFee;
      const v5581 = v5576.totFee;
      const v5582 = stdlib.lt(v5579, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v5583 = stdlib.lt(v5580, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v5584 = v5582 ? v5583 : false;
      const v5585 = stdlib.add(v5580, v5579);
      const v5586 = stdlib.eq(v5581, v5585);
      const v5587 = v5584 ? v5586 : false;
      const v5588 = stdlib.lt(v5581, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v5589 = v5587 ? v5588 : false;
      const v5590 = stdlib.gt(v5581, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v5591 = v5589 ? v5590 : false;
      stdlib.assert(v5591, {
        at: './index.rsh:78:29:application',
        fs: ['at ./index.rsh:423:16:application call to "chkFees" (defined at: ./index.rsh:78:21:function exp)', 'at ./index.rsh:444:25:application call to "doHarvest" (defined at: ./index.rsh:421:45:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v5593 = (stdlib.le(await ctc.getBalance(), v4228) ? stdlib.checkedBigNumberify('./index.rsh:424:42:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v4228));
      const v5594 = stdlib.add(v5593, v4228);
      const v5596 = v4221.B;
      const v5599 = v5576.locked;
      const v5600 = stdlib.eq(v5596, stdlib.checkedBigNumberify('./index.rsh:427:56:decimal', stdlib.UInt_max, '0'));
      const v5601 = v5599 ? v5600 : false;
      const v5602 = v4222.A;
      const v5603 = v4222.B;
      const v5604 = stdlib.eq(v5602, stdlib.checkedBigNumberify('./index.rsh:391:37:decimal', stdlib.UInt_max, '0'));
      const v5605 = stdlib.eq(v5603, stdlib.checkedBigNumberify('./index.rsh:391:47:decimal', stdlib.UInt_max, '0'));
      const v5606 = v5604 ? v5605 : false;
      const v5607 = v5601 ? v5606 : false;
      const v5608 = v4223.A;
      const v5609 = v4223.B;
      const v5610 = stdlib.add(v5608, v5593);
      const v5629 = stdlib.sub(v5594, v5610);
      ;
      ;
      const v5644 = {
        A: v5608,
        B: v5609
        };
      const v5645 = [v5644, v5593];
      const v5646 = await txn1.getOutput('Protocol_harvest', 'v5645', ctc14, v5645);
      if (v3027) {
        stdlib.protect(ctc2, await interact.out(v5165, v5646), {
          at: './index.rsh:438:10:application',
          fs: ['at ./index.rsh:438:10:application call to [unknown function] (defined at: ./index.rsh:438:10:function exp)', 'at ./index.rsh:430:12:application call to "k" (defined at: ./index.rsh:443:30:function exp)', 'at ./index.rsh:444:44:application call to [unknown function] (defined at: ./index.rsh:428:20:function exp)', 'at ./index.rsh:443:30:application call to [unknown function] (defined at: ./index.rsh:443:30:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v5673 = v5576.protoAddr;
      const v5675 = {
        locked: v5599,
        lpFee: v5580,
        protoAddr: v5673,
        protoFee: v5579,
        totFee: v5581
        };
      null;
      const v13647 = v4221;
      const v13648 = v4222;
      const v13649 = v4218;
      const v13650 = v5576;
      const v13652 = v5629;
      if (v5607) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_deposit0_720': {
      const v6161 = v5162[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v7157 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v8153 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v9149 = v5162[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc10,
    Provider_deposit0_720: ctc9,
    Provider_withdraw0_720: ctc11,
    Trader_swapAForB0_720: ctc12,
    Trader_swapBForA0_720: ctc12
    });
  
  
  const [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v4432 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to "runProvider_deposit0_720" (defined at: ./index.rsh:459:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v4433 = v4432[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4434 = v4433.A;
  const v4435 = v4433.B;
  const v4437 = v4224.locked;
  const v4438 = v4437 ? false : true;
  stdlib.assert(v4438, {
    at: './index.rsh:460:12:application',
    fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to "runProvider_deposit0_720" (defined at: ./index.rsh:459:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v4496 = ['Provider_deposit0_720', v4432];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228, v4496],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4434, [[stdlib.checkedBigNumberify('./index.rsh:374:50:decimal', stdlib.UInt_max, '0'), v4187], [v4435, v4141]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
      
      switch (v5162[0]) {
        case 'Protocol_harvest0_720': {
          const v5165 = v5162[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v6161 = v5162[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v6181 = v6161[stdlib.checkedBigNumberify('./index.rsh:459:10:spread', stdlib.UInt_max, '0')];
          const v6185 = v6181.A;
          const v6186 = v6181.B;
          const v6188 = v4221.B;
          const v6190 = stdlib.eq(v6188, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
          const v6551 = stdlib.add(v4228, v6185);
          sim_r.txns.push({
            amt: v6185,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          sim_r.txns.push({
            amt: v6186,
            kind: 'to',
            tok: v4141
            });
          let v6681;
          const v6684 = v4221.A;
          if (v6190) {
            const v6688 = stdlib.cast(false, true, v6185);
            const v6689 = stdlib.cast(false, true, v6186);
            const v6690 = stdlib.mul256(v6688, v6689);
            const v6691 = stdlib.sqrt256(v6690);
            const v6692 = stdlib.cast(true, false, v6691);
            v6681 = v6692;
            }
          else {
            const v6693 = v4222.A;
            const v6694 = v4222.B;
            const v6698 = stdlib.muldiv(v6185, v6188, v6693);
            const v6702 = stdlib.muldiv(v6186, v6188, v6694);
            const v6703 = stdlib.lt(v6698, v6702);
            const v6704 = v6703 ? v6698 : v6702;
            v6681 = v6704;
            }
          const v6706 = v4222.A;
          const v6710 = stdlib.add(v6185, v6706);
          const v6712 = v4222.B;
          const v6716 = stdlib.add(v6186, v6712);
          const v6717 = {
            A: v6710,
            B: v6716
            };
          const v6724 = stdlib.sub(v6684, v6681);
          const v6728 = stdlib.add(v6188, v6681);
          const v6729 = {
            A: v6724,
            B: v6728
            };
          sim_r.txns.push({
            kind: 'from',
            to: v5161,
            tok: v4187
            });
          const v6756 = await txn1.getOutput('Provider_deposit', 'v6681', ctc4, v6681);
          
          const v6766 = {
            A: v6185,
            B: v6186
            };
          const v6767 = {
            A: v6710,
            B: v6716
            };
          const v6768 = {
            A: v6724,
            B: v6728
            };
          null;
          const v13737 = v6729;
          const v13738 = v6717;
          const v13739 = v4223;
          const v13740 = v4224;
          const v13742 = v6551;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v7157 = v5162[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v8153 = v5162[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v9149 = v5162[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
  switch (v5162[0]) {
    case 'Protocol_harvest0_720': {
      const v5165 = v5162[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v6161 = v5162[1];
      undefined /* setApiDetails */;
      const v6181 = v6161[stdlib.checkedBigNumberify('./index.rsh:459:10:spread', stdlib.UInt_max, '0')];
      const v6182 = v4224.locked;
      const v6183 = v6182 ? false : true;
      stdlib.assert(v6183, {
        at: './index.rsh:460:12:application',
        fs: ['at ./index.rsh:459:36:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:459:36:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      const v6185 = v6181.A;
      const v6186 = v6181.B;
      const v6188 = v4221.B;
      const v6190 = stdlib.eq(v6188, stdlib.checkedBigNumberify('./index.rsh:284:19:decimal', stdlib.UInt_max, '0'));
      const v6551 = stdlib.add(v4228, v6185);
      ;
      ;
      ;
      let v6681;
      const v6684 = v4221.A;
      if (v6190) {
        const v6688 = stdlib.cast(false, true, v6185);
        const v6689 = stdlib.cast(false, true, v6186);
        const v6690 = stdlib.mul256(v6688, v6689);
        const v6691 = stdlib.sqrt256(v6690);
        const v6692 = stdlib.cast(true, false, v6691);
        v6681 = v6692;
        }
      else {
        const v6693 = v4222.A;
        const v6694 = v4222.B;
        const v6698 = stdlib.muldiv(v6185, v6188, v6693);
        const v6702 = stdlib.muldiv(v6186, v6188, v6694);
        const v6703 = stdlib.lt(v6698, v6702);
        const v6704 = v6703 ? v6698 : v6702;
        v6681 = v6704;
        }
      const v6706 = v4222.A;
      const v6710 = stdlib.add(v6185, v6706);
      const v6712 = v4222.B;
      const v6716 = stdlib.add(v6186, v6712);
      const v6717 = {
        A: v6710,
        B: v6716
        };
      const v6724 = stdlib.sub(v6684, v6681);
      const v6728 = stdlib.add(v6188, v6681);
      const v6729 = {
        A: v6724,
        B: v6728
        };
      ;
      const v6756 = await txn1.getOutput('Provider_deposit', 'v6681', ctc4, v6681);
      if (v3027) {
        stdlib.protect(ctc2, await interact.out(v6161, v6756), {
          at: './index.rsh:459:11:application',
          fs: ['at ./index.rsh:459:11:application call to [unknown function] (defined at: ./index.rsh:459:11:function exp)', 'at ./index.rsh:467:10:application call to "k" (defined at: ./index.rsh:465:39:function exp)', 'at ./index.rsh:465:39:application call to [unknown function] (defined at: ./index.rsh:465:39:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v6766 = {
        A: v6185,
        B: v6186
        };
      const v6767 = {
        A: v6710,
        B: v6716
        };
      const v6768 = {
        A: v6724,
        B: v6728
        };
      null;
      const v13737 = v6729;
      const v13738 = v6717;
      const v13739 = v4223;
      const v13740 = v4224;
      const v13742 = v6551;
      return;
      
      break;
      }
    case 'Provider_withdraw0_720': {
      const v7157 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v8153 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v9149 = v5162[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc9,
    Provider_deposit0_720: ctc11,
    Provider_withdraw0_720: ctc8,
    Trader_swapAForB0_720: ctc12,
    Trader_swapBForA0_720: ctc12
    });
  
  
  const [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v4383 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:447:35:application call to [unknown function] (defined at: ./index.rsh:447:35:function exp)', 'at ./index.rsh:378:19:application call to "runProvider_withdraw0_720" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v4384 = v4383[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4428 = ['Provider_withdraw0_720', v4383];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228, v4428],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[v4384, v4187], [stdlib.checkedBigNumberify('./index.rsh:452:31:decimal', stdlib.UInt_max, '0'), v4141]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
      
      switch (v5162[0]) {
        case 'Protocol_harvest0_720': {
          const v5165 = v5162[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v6161 = v5162[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v7157 = v5162[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          const v7248 = v7157[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v7248,
            kind: 'to',
            tok: v4187
            });
          ;
          const v7772 = v4221.A;
          const v7773 = v4221.B;
          const v7776 = v4222.A;
          const v7777 = v4222.B;
          const v7781 = stdlib.muldiv(v7248, v7776, v7773);
          const v7785 = stdlib.muldiv(v7248, v7777, v7773);
          const v7794 = stdlib.add(v7772, v7248);
          const v7797 = stdlib.sub(v7773, v7248);
          const v7798 = {
            A: v7794,
            B: v7797
            };
          const v7803 = stdlib.sub(v7776, v7781);
          const v7807 = stdlib.sub(v7777, v7785);
          const v7808 = {
            A: v7803,
            B: v7807
            };
          const v7828 = stdlib.sub(v4228, v7781);
          sim_r.txns.push({
            kind: 'from',
            to: v5161,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v5161,
            tok: v4141
            });
          const v7841 = {
            A: v7781,
            B: v7785
            };
          const v7842 = await txn1.getOutput('Provider_withdraw', 'v7841', ctc10, v7841);
          
          const v7851 = {
            A: v7803,
            B: v7807
            };
          const v7852 = {
            A: v7794,
            B: v7797
            };
          null;
          const v13827 = v7798;
          const v13828 = v7808;
          const v13829 = v4223;
          const v13830 = v4224;
          const v13832 = v7828;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v8153 = v5162[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v9149 = v5162[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
  switch (v5162[0]) {
    case 'Protocol_harvest0_720': {
      const v5165 = v5162[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v6161 = v5162[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v7157 = v5162[1];
      undefined /* setApiDetails */;
      const v7248 = v7157[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
      ;
      ;
      ;
      const v7772 = v4221.A;
      const v7773 = v4221.B;
      const v7776 = v4222.A;
      const v7777 = v4222.B;
      const v7781 = stdlib.muldiv(v7248, v7776, v7773);
      const v7785 = stdlib.muldiv(v7248, v7777, v7773);
      const v7794 = stdlib.add(v7772, v7248);
      const v7797 = stdlib.sub(v7773, v7248);
      const v7798 = {
        A: v7794,
        B: v7797
        };
      const v7803 = stdlib.sub(v7776, v7781);
      const v7807 = stdlib.sub(v7777, v7785);
      const v7808 = {
        A: v7803,
        B: v7807
        };
      const v7828 = stdlib.sub(v4228, v7781);
      ;
      ;
      const v7841 = {
        A: v7781,
        B: v7785
        };
      const v7842 = await txn1.getOutput('Provider_withdraw', 'v7841', ctc10, v7841);
      if (v3027) {
        stdlib.protect(ctc2, await interact.out(v7157, v7842), {
          at: './index.rsh:447:11:application',
          fs: ['at ./index.rsh:447:11:application call to [unknown function] (defined at: ./index.rsh:447:11:function exp)', 'at ./index.rsh:454:10:application call to "k" (defined at: ./index.rsh:452:39:function exp)', 'at ./index.rsh:452:39:application call to [unknown function] (defined at: ./index.rsh:452:39:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v7851 = {
        A: v7803,
        B: v7807
        };
      const v7852 = {
        A: v7794,
        B: v7797
        };
      null;
      const v13827 = v7798;
      const v13828 = v7808;
      const v13829 = v4223;
      const v13830 = v4224;
      const v13832 = v7828;
      return;
      
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v8153 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v9149 = v5162[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc9,
    Provider_deposit0_720: ctc11,
    Provider_withdraw0_720: ctc12,
    Trader_swapAForB0_720: ctc8,
    Trader_swapBForA0_720: ctc8
    });
  
  
  const [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v4500 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v4501 = v4500[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4502 = v4500[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4507 = v4224.locked;
  const v4508 = v4507 ? false : true;
  stdlib.assert(v4508, {
    at: './index.rsh:474:14:application',
    fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v4509 = v4222.A;
  const v4510 = v4222.B;
  const v4511 = v4224.protoFee;
  const v4512 = v4224.totFee;
  const v4516 = stdlib.add(v4509, v4501);
  const v4520 = stdlib.muldiv(v4501, v4510, v4516);
  const v4521 = stdlib.cast(false, true, v4501);
  const v4522 = stdlib.cast(false, true, v4512);
  const v4523 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v4522);
  const v4524 = stdlib.mul256(v4521, v4523);
  const v4525 = stdlib.cast(false, true, v4516);
  const v4526 = stdlib.mul256(v4525, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v4527 = stdlib.add256(v4526, v4524);
  const v4528 = stdlib.cast(false, true, v4510);
  const v4529 = stdlib.mul256(v4524, v4528);
  const v4530 = stdlib.div256(v4529, v4527);
  const v4531 = stdlib.cast(true, false, v4530);
  const v4534 = stdlib.sub(v4520, v4531);
  const v4537 = stdlib.mul(v4511, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
  const v4538 = stdlib.div(v4537, v4512);
  const v4541 = stdlib.muldiv(v4534, v4538, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
  const v4543 = stdlib.muldiv(v4501, v4511, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
  const v4547 = stdlib.muldiv(v4543, v4510, v4516);
  const v4548 = stdlib.gt(v4547, v4541);
  const v4549 = [v4543, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4550 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4541];
  const v4551 = v4548 ? v4549 : v4550;
  const v4553 = v4551[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
  const v4554 = v4551[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
  const v4573 = stdlib.sub(v4510, v4531);
  const v4577 = stdlib.sub(v4516, v4553);
  const v4580 = stdlib.sub(v4573, v4554);
  const v4593 = stdlib.le(v4502, v4531);
  stdlib.assert(v4593, {
    at: './index.rsh:495:14:application',
    fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v4596 = stdlib.cast(false, true, v4509);
  const v4598 = stdlib.mul256(v4596, v4528);
  const v4599 = stdlib.cast(false, true, v4577);
  const v4600 = stdlib.cast(false, true, v4580);
  const v4601 = stdlib.mul256(v4599, v4600);
  const v4602 = stdlib.ge256(v4601, v4598);
  stdlib.assert(v4602, {
    at: './index.rsh:505:14:application',
    fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapAForB0_720" (defined at: ./index.rsh:514:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v4610 = ['Trader_swapAForB0_720', v4500];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228, v4610],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v4501, [[stdlib.checkedBigNumberify('./index.rsh:516:24:decimal', stdlib.UInt_max, '0'), v4187], [stdlib.checkedBigNumberify('./index.rsh:516:30:decimal', stdlib.UInt_max, '0'), v4141]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
      
      switch (v5162[0]) {
        case 'Protocol_harvest0_720': {
          const v5165 = v5162[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v6161 = v5162[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v7157 = v5162[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v8153 = v5162[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v8295 = v8153[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '0')];
          const v8301 = v4222.A;
          const v8302 = v4222.B;
          const v8303 = v4224.protoFee;
          const v8304 = v4224.totFee;
          const v8308 = stdlib.add(v8301, v8295);
          const v8312 = stdlib.muldiv(v8295, v8302, v8308);
          const v8313 = stdlib.cast(false, true, v8295);
          const v8314 = stdlib.cast(false, true, v8304);
          const v8315 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v8314);
          const v8316 = stdlib.mul256(v8313, v8315);
          const v8317 = stdlib.cast(false, true, v8308);
          const v8318 = stdlib.mul256(v8317, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v8319 = stdlib.add256(v8318, v8316);
          const v8320 = stdlib.cast(false, true, v8302);
          const v8321 = stdlib.mul256(v8316, v8320);
          const v8322 = stdlib.div256(v8321, v8319);
          const v8323 = stdlib.cast(true, false, v8322);
          const v8326 = stdlib.sub(v8312, v8323);
          const v8329 = stdlib.mul(v8303, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
          const v8330 = stdlib.div(v8329, v8304);
          const v8333 = stdlib.muldiv(v8326, v8330, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
          const v8335 = stdlib.muldiv(v8295, v8303, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
          const v8339 = stdlib.muldiv(v8335, v8302, v8308);
          const v8340 = stdlib.gt(v8339, v8333);
          const v8341 = [v8335, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v8342 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8333];
          const v8343 = v8340 ? v8341 : v8342;
          const v8345 = v8343[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
          const v8346 = v8343[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
          const v8365 = stdlib.sub(v8302, v8323);
          const v8369 = stdlib.sub(v8308, v8345);
          const v8372 = stdlib.sub(v8365, v8346);
          const v8543 = stdlib.add(v4228, v8295);
          sim_r.txns.push({
            amt: v8295,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          const v8933 = {
            A: v8369,
            B: v8372
            };
          const v8934 = v4223.A;
          const v8938 = stdlib.add(v8934, v8345);
          const v8939 = v4223.B;
          const v8943 = stdlib.add(v8939, v8346);
          const v8944 = {
            A: v8938,
            B: v8943
            };
          sim_r.txns.push({
            kind: 'from',
            to: v5161,
            tok: v4141
            });
          const v8984 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v8323
            };
          const v8985 = await txn1.getOutput('Trader_swapAForB', 'v8984', ctc10, v8984);
          
          const v8994 = {
            A: v8295,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v8996 = {
            A: v8369,
            B: v8372
            };
          null;
          const v13917 = v4221;
          const v13918 = v8933;
          const v13919 = v8944;
          const v13920 = v4224;
          const v13922 = v8543;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v9149 = v5162[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
  switch (v5162[0]) {
    case 'Protocol_harvest0_720': {
      const v5165 = v5162[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v6161 = v5162[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v7157 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v8153 = v5162[1];
      undefined /* setApiDetails */;
      const v8295 = v8153[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '0')];
      const v8296 = v8153[stdlib.checkedBigNumberify('./index.rsh:514:10:spread', stdlib.UInt_max, '1')];
      const v8299 = v4224.locked;
      const v8300 = v8299 ? false : true;
      stdlib.assert(v8300, {
        at: './index.rsh:474:14:application',
        fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v8301 = v4222.A;
      const v8302 = v4222.B;
      const v8303 = v4224.protoFee;
      const v8304 = v4224.totFee;
      const v8308 = stdlib.add(v8301, v8295);
      const v8312 = stdlib.muldiv(v8295, v8302, v8308);
      const v8313 = stdlib.cast(false, true, v8295);
      const v8314 = stdlib.cast(false, true, v8304);
      const v8315 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v8314);
      const v8316 = stdlib.mul256(v8313, v8315);
      const v8317 = stdlib.cast(false, true, v8308);
      const v8318 = stdlib.mul256(v8317, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v8319 = stdlib.add256(v8318, v8316);
      const v8320 = stdlib.cast(false, true, v8302);
      const v8321 = stdlib.mul256(v8316, v8320);
      const v8322 = stdlib.div256(v8321, v8319);
      const v8323 = stdlib.cast(true, false, v8322);
      const v8326 = stdlib.sub(v8312, v8323);
      const v8329 = stdlib.mul(v8303, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
      const v8330 = stdlib.div(v8329, v8304);
      const v8333 = stdlib.muldiv(v8326, v8330, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
      const v8335 = stdlib.muldiv(v8295, v8303, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
      const v8339 = stdlib.muldiv(v8335, v8302, v8308);
      const v8340 = stdlib.gt(v8339, v8333);
      const v8341 = [v8335, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v8342 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8333];
      const v8343 = v8340 ? v8341 : v8342;
      const v8345 = v8343[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
      const v8346 = v8343[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
      const v8365 = stdlib.sub(v8302, v8323);
      const v8369 = stdlib.sub(v8308, v8345);
      const v8372 = stdlib.sub(v8365, v8346);
      const v8385 = stdlib.le(v8296, v8323);
      stdlib.assert(v8385, {
        at: './index.rsh:495:14:application',
        fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v8388 = stdlib.cast(false, true, v8301);
      const v8390 = stdlib.mul256(v8388, v8320);
      const v8391 = stdlib.cast(false, true, v8369);
      const v8392 = stdlib.cast(false, true, v8372);
      const v8393 = stdlib.mul256(v8391, v8392);
      const v8394 = stdlib.ge256(v8393, v8390);
      stdlib.assert(v8394, {
        at: './index.rsh:505:14:application',
        fs: ['at ./index.rsh:515:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:514:37:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:514:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      const v8543 = stdlib.add(v4228, v8295);
      ;
      ;
      ;
      const v8933 = {
        A: v8369,
        B: v8372
        };
      const v8934 = v4223.A;
      const v8938 = stdlib.add(v8934, v8345);
      const v8939 = v4223.B;
      const v8943 = stdlib.add(v8939, v8346);
      const v8944 = {
        A: v8938,
        B: v8943
        };
      ;
      const v8984 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v8323
        };
      const v8985 = await txn1.getOutput('Trader_swapAForB', 'v8984', ctc10, v8984);
      if (v3027) {
        stdlib.protect(ctc2, await interact.out(v8153, v8985), {
          at: './index.rsh:514:11:application',
          fs: ['at ./index.rsh:514:11:application call to [unknown function] (defined at: ./index.rsh:514:11:function exp)', 'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:516:38:function exp)', 'at ./index.rsh:516:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)', 'at ./index.rsh:516:38:application call to [unknown function] (defined at: ./index.rsh:516:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v8994 = {
        A: v8295,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v8996 = {
        A: v8369,
        B: v8372
        };
      null;
      const v13917 = v4221;
      const v13918 = v8933;
      const v13919 = v8944;
      const v13920 = v4224;
      const v13922 = v8543;
      return;
      
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v9149 = v5162[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    A: ctc4,
    B: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc10 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Data({
    Protocol_harvest0_720: ctc9,
    Provider_deposit0_720: ctc11,
    Provider_withdraw0_720: ctc12,
    Trader_swapAForB0_720: ctc8,
    Trader_swapBForA0_720: ctc8
    });
  
  
  const [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4]);
  const v4614 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v4615 = v4614[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4616 = v4614[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4621 = v4224.locked;
  const v4622 = v4621 ? false : true;
  stdlib.assert(v4622, {
    at: './index.rsh:474:14:application',
    fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v4623 = v4222.A;
  const v4624 = v4222.B;
  const v4625 = v4224.protoFee;
  const v4626 = v4224.totFee;
  const v4630 = stdlib.add(v4624, v4615);
  const v4634 = stdlib.muldiv(v4615, v4623, v4630);
  const v4635 = stdlib.cast(false, true, v4615);
  const v4636 = stdlib.cast(false, true, v4626);
  const v4637 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v4636);
  const v4638 = stdlib.mul256(v4635, v4637);
  const v4639 = stdlib.cast(false, true, v4630);
  const v4640 = stdlib.mul256(v4639, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v4641 = stdlib.add256(v4640, v4638);
  const v4642 = stdlib.cast(false, true, v4623);
  const v4643 = stdlib.mul256(v4638, v4642);
  const v4644 = stdlib.div256(v4643, v4641);
  const v4645 = stdlib.cast(true, false, v4644);
  const v4648 = stdlib.sub(v4634, v4645);
  const v4651 = stdlib.mul(v4625, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
  const v4652 = stdlib.div(v4651, v4626);
  const v4655 = stdlib.muldiv(v4648, v4652, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
  const v4657 = stdlib.muldiv(v4615, v4625, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
  const v4661 = stdlib.muldiv(v4657, v4623, v4630);
  const v4662 = stdlib.gt(v4661, v4655);
  const v4663 = [v4657, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4664 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4655];
  const v4665 = v4662 ? v4663 : v4664;
  const v4667 = v4665[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
  const v4668 = v4665[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
  const v4685 = stdlib.sub(v4623, v4645);
  const v4691 = stdlib.sub(v4685, v4668);
  const v4694 = stdlib.sub(v4630, v4667);
  const v4707 = stdlib.le(v4616, v4645);
  stdlib.assert(v4707, {
    at: './index.rsh:495:14:application',
    fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v4712 = stdlib.cast(false, true, v4624);
  const v4713 = stdlib.mul256(v4642, v4712);
  const v4714 = stdlib.cast(false, true, v4691);
  const v4715 = stdlib.cast(false, true, v4694);
  const v4716 = stdlib.mul256(v4714, v4715);
  const v4717 = stdlib.ge256(v4716, v4713);
  stdlib.assert(v4717, {
    at: './index.rsh:505:14:application',
    fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to "runTrader_swapBForA0_720" (defined at: ./index.rsh:518:10:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v4725 = ['Trader_swapBForA0_720', v4614];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4139, v4141, v4159, v4187, v4218, v4221, v4222, v4223, v4224, v4228, v4725],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:34:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:520:24:decimal', stdlib.UInt_max, '0'), v4187], [v4615, v4141]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
      
      switch (v5162[0]) {
        case 'Protocol_harvest0_720': {
          const v5165 = v5162[1];
          
          break;
          }
        case 'Provider_deposit0_720': {
          const v6161 = v5162[1];
          
          break;
          }
        case 'Provider_withdraw0_720': {
          const v7157 = v5162[1];
          
          break;
          }
        case 'Trader_swapAForB0_720': {
          const v8153 = v5162[1];
          
          break;
          }
        case 'Trader_swapBForA0_720': {
          const v9149 = v5162[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          const v9404 = v9149[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '0')];
          const v9410 = v4222.A;
          const v9411 = v4222.B;
          const v9412 = v4224.protoFee;
          const v9413 = v4224.totFee;
          const v9417 = stdlib.add(v9411, v9404);
          const v9421 = stdlib.muldiv(v9404, v9410, v9417);
          const v9422 = stdlib.cast(false, true, v9404);
          const v9423 = stdlib.cast(false, true, v9413);
          const v9424 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v9423);
          const v9425 = stdlib.mul256(v9422, v9424);
          const v9426 = stdlib.cast(false, true, v9417);
          const v9427 = stdlib.mul256(v9426, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v9428 = stdlib.add256(v9427, v9425);
          const v9429 = stdlib.cast(false, true, v9410);
          const v9430 = stdlib.mul256(v9425, v9429);
          const v9431 = stdlib.div256(v9430, v9428);
          const v9432 = stdlib.cast(true, false, v9431);
          const v9435 = stdlib.sub(v9421, v9432);
          const v9438 = stdlib.mul(v9412, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
          const v9439 = stdlib.div(v9438, v9413);
          const v9442 = stdlib.muldiv(v9435, v9439, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
          const v9444 = stdlib.muldiv(v9404, v9412, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
          const v9448 = stdlib.muldiv(v9444, v9410, v9417);
          const v9449 = stdlib.gt(v9448, v9442);
          const v9450 = [v9444, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v9451 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9442];
          const v9452 = v9449 ? v9450 : v9451;
          const v9454 = v9452[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
          const v9455 = v9452[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
          const v9472 = stdlib.sub(v9410, v9432);
          const v9478 = stdlib.sub(v9472, v9455);
          const v9481 = stdlib.sub(v9417, v9454);
          ;
          ;
          sim_r.txns.push({
            amt: v9404,
            kind: 'to',
            tok: v4141
            });
          const v10080 = {
            A: v9478,
            B: v9481
            };
          const v10081 = v4223.A;
          const v10085 = stdlib.add(v10081, v9455);
          const v10086 = v4223.B;
          const v10090 = stdlib.add(v10086, v9454);
          const v10091 = {
            A: v10085,
            B: v10090
            };
          const v10123 = stdlib.sub(v4228, v9432);
          sim_r.txns.push({
            kind: 'from',
            to: v5161,
            tok: undefined /* Nothing */
            });
          const v10124 = {
            A: v9432,
            B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v10125 = await txn1.getOutput('Trader_swapBForA', 'v10124', ctc10, v10124);
          
          const v10134 = {
            A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            B: v9404
            };
          const v10136 = {
            A: v9478,
            B: v9481
            };
          null;
          const v14007 = v4221;
          const v14008 = v10080;
          const v14009 = v10091;
          const v14010 = v4224;
          const v14012 = v10123;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc1, ctc5, ctc5, ctc5, ctc5, ctc7, ctc4, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5162], secs: v5164, time: v5163, didSend: v3027, from: v5161 } = txn1;
  switch (v5162[0]) {
    case 'Protocol_harvest0_720': {
      const v5165 = v5162[1];
      return;
      break;
      }
    case 'Provider_deposit0_720': {
      const v6161 = v5162[1];
      return;
      break;
      }
    case 'Provider_withdraw0_720': {
      const v7157 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_720': {
      const v8153 = v5162[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_720': {
      const v9149 = v5162[1];
      undefined /* setApiDetails */;
      const v9404 = v9149[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '0')];
      const v9405 = v9149[stdlib.checkedBigNumberify('./index.rsh:518:10:spread', stdlib.UInt_max, '1')];
      const v9408 = v4224.locked;
      const v9409 = v9408 ? false : true;
      stdlib.assert(v9409, {
        at: './index.rsh:474:14:application',
        fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v9410 = v4222.A;
      const v9411 = v4222.B;
      const v9412 = v4224.protoFee;
      const v9413 = v4224.totFee;
      const v9417 = stdlib.add(v9411, v9404);
      const v9421 = stdlib.muldiv(v9404, v9410, v9417);
      const v9422 = stdlib.cast(false, true, v9404);
      const v9423 = stdlib.cast(false, true, v9413);
      const v9424 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v9423);
      const v9425 = stdlib.mul256(v9422, v9424);
      const v9426 = stdlib.cast(false, true, v9417);
      const v9427 = stdlib.mul256(v9426, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v9428 = stdlib.add256(v9427, v9425);
      const v9429 = stdlib.cast(false, true, v9410);
      const v9430 = stdlib.mul256(v9425, v9429);
      const v9431 = stdlib.div256(v9430, v9428);
      const v9432 = stdlib.cast(true, false, v9431);
      const v9435 = stdlib.sub(v9421, v9432);
      const v9438 = stdlib.mul(v9412, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
      const v9439 = stdlib.div(v9438, v9413);
      const v9442 = stdlib.muldiv(v9435, v9439, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
      const v9444 = stdlib.muldiv(v9404, v9412, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
      const v9448 = stdlib.muldiv(v9444, v9410, v9417);
      const v9449 = stdlib.gt(v9448, v9442);
      const v9450 = [v9444, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v9451 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9442];
      const v9452 = v9449 ? v9450 : v9451;
      const v9454 = v9452[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
      const v9455 = v9452[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
      const v9472 = stdlib.sub(v9410, v9432);
      const v9478 = stdlib.sub(v9472, v9455);
      const v9481 = stdlib.sub(v9417, v9454);
      const v9494 = stdlib.le(v9405, v9432);
      stdlib.assert(v9494, {
        at: './index.rsh:495:14:application',
        fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v9499 = stdlib.cast(false, true, v9411);
      const v9500 = stdlib.mul256(v9429, v9499);
      const v9501 = stdlib.cast(false, true, v9478);
      const v9502 = stdlib.cast(false, true, v9481);
      const v9503 = stdlib.mul256(v9501, v9502);
      const v9504 = stdlib.ge256(v9503, v9500);
      stdlib.assert(v9504, {
        at: './index.rsh:505:14:application',
        fs: ['at ./index.rsh:519:23:application call to "doSwap" (defined at: ./index.rsh:473:57:function exp)', 'at ./index.rsh:518:37:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:518:37:function exp)', 'at ./index.rsh:378:19:application call to [unknown function] (defined at: ./index.rsh:378:19:function exp)', 'at ./index.rsh:419:28:application call to [unknown function] (defined at: ./index.rsh:419:28:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      ;
      ;
      ;
      const v10080 = {
        A: v9478,
        B: v9481
        };
      const v10081 = v4223.A;
      const v10085 = stdlib.add(v10081, v9455);
      const v10086 = v4223.B;
      const v10090 = stdlib.add(v10086, v9454);
      const v10091 = {
        A: v10085,
        B: v10090
        };
      const v10123 = stdlib.sub(v4228, v9432);
      ;
      const v10124 = {
        A: v9432,
        B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10125 = await txn1.getOutput('Trader_swapBForA', 'v10124', ctc10, v10124);
      if (v3027) {
        stdlib.protect(ctc2, await interact.out(v9149, v10125), {
          at: './index.rsh:518:11:application',
          fs: ['at ./index.rsh:518:11:application call to [unknown function] (defined at: ./index.rsh:518:11:function exp)', 'at ./index.rsh:508:12:application call to "k" (defined at: ./index.rsh:520:38:function exp)', 'at ./index.rsh:520:42:application call to "c" (defined at: ./index.rsh:506:20:function exp)', 'at ./index.rsh:520:38:application call to [unknown function] (defined at: ./index.rsh:520:38:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v10134 = {
        A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        B: v9404
        };
      const v10136 = {
        A: v9478,
        B: v9481
        };
      null;
      const v14007 = v4221;
      const v14008 = v10080;
      const v14009 = v10091;
      const v14010 = v4224;
      const v14012 = v10123;
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
  appApproval: `BiAVAAgYBAFkEAIDSZBOoI0GteDwwQeZ66OHCtmUrKAKuPeR5Qf89bu8Au6I6cQCIP///////////wEGJgUBAAEBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQ81lT6IjUAMRhBC0cqZEkiWzUBI1s1AjYaABdJQQGuIjUEIQQ1BkkhDAxAAVBJIQ0MQAEgSSEODEAA/yEOEkQ0AUklDEAAeSUSRChkKWRQSTUDSUpXSRA1/1dZEDX+V2kQNf1XeTk1/DQDVzEINP9XAAg0/1cICFBQNP5XAAg0/lcICFBQNPxXAAg0/FcICFA0/FcQCFA0/FcYIFA0/Fc4AVBQNP1XAAg0/VcICFBQNANXIAhQNANXKAlQNQdCCoshBxJEKGQpZFBJNQNJSlcZEDX/VykQNf5XORA1/VdJOTX8NANXEQg0/1cACDT/VwgIUFA0/lcACDT+VwgIUFA0/FcACDT8VwgIUDT8VxAIUDT8VxggUDT8VzgBUFA0/VcACDT9VwgIUFA0A1cACFA0A1cICVA1B0IKESENEkQ2GgE2GgJQNf+AAQM0/1AhCa9QQgCYSSEPDEAAGiEPEkQ2GgE2GgJQNf+AAQQ0/1AhCa9QQgB3IQwSRCpCBwxJIRAMQAAvSSERDEAAFCEREkQ2GgE2GgJQNf8oNP9QQgBNIRASRDYaATX/KTT/UCEJr1BCADmB5PzqgQISRDYaATX/gAECNP9QgVGvUEIAHzYaAhc1BDYaAzYaARdJIQcMQAcMSSEIDEAGoCEIEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/IRJbNf5XKAk1/YExWzX8VzkQNftXSRA1+ldZEDX5V2kQNfhXeTk194GyAVs19kk1BTX1gARHaEcfNPVQsDT1IlVJIQcMQAP0SSEIDEADDUklDEABhCUSRDT1VwEQNfQ09CJbNfM091c4ARcURDT5Ils18jT5I1s18TT3Ils18DT3IQZbNe808TTzCDXuJK808xZQKySvNO8WUKGICOqjiAjmNe0krzTyFlA17DTtNOyjiAjUJK807hZQK6OICMk07aCICMOiiAi/SUohBlsiEkQjWyISRCJbIhJEJFs16zTzNPIdNO6XNOsJNPAhBQs07wodIQWXNeo08zTwHSEKlzXpI6806hZQNOkWI69QNOk08h007pc06g1NSTXoIls15zToI1s15jTyNOsJNOYJNeU07jTnCTXkNPQjWzTrDkQkrzTlFlAkrzTkFlCjiAg4NOwkrzTxFlCjiAgsp0Q08zT+iAgDsSKyATTrsgghBLIQMQCyB7M06xYjr1A144AIAAAAAAAAJ4w041CwNOM1BycEMQBQI6808xZQUDTjUDTlFjTkFlBQsDT/NP40/TT8NPsiNPo05RY05BZQNPgiWzTmCBY0+CNbNOcIFlA09zIGNPY06wlCBpNINPVXARA19DT0Ils18zT3VzgBFxRENPkiWzXyNPkjWzXxNPciWzXwNPchBls17zTyNPMINe4krzTzFlArJK807xZQoYgHaKOIB2Q17SSvNPEWUDXsNO007KOIB1IkrzTuFlAro4gHRzTtoIgHQaKIBz1JSiEGWyISRCNbIhJEIlsiEkQkWzXrNPM08R007pc06wk08CEFCzTvCh0hBZc16jTzNPAdIQqXNekjrzTqFlA06RYjr1A06TTxHTTulzTqDU1JNegiWzXnNOgjWzXmNO405wk15TTxNOsJNOYJNeQ09CNbNOsORCSvNOUWUCSvNOQWUKOIBrYkrzTyFlA07KOIBqqnRDTziAZpsSKyATTrshIlshAxALIUNP6yEbMjrzTrFlA144AIAAAAAAAAIxg041CwNOM1BycEMQBQNPMWI69QUDTjUDTlFjTkFlBQsDT/NP40/TT8NPsiNPo05RY05BZQNPgiWzTnCBY0+CNbNOYIFlA09zIGNPY08whCBRBINPVXAQg19DT0FzXzNPM0/IgF+DT6I1s18jT5Ils18TT5I1s18DTzNPEdNPKXNe808zTwHTTylzXuNPoiWzTzCDXtNPI08wk17DTxNO8JNes08DTuCTXqsSKyATTvsgghBLIQMQCyB7OxIrIBNO6yEiWyEDEAshQ0/rIRszTvFjTuFlA16YAIAAAAAAAAHqE06VCwNOk1B4AEHNSuXzEAUDTzFlA06VA06xY06hZQUDTtFjTsFlBQsDT/NP40/TT8NPsiNO0WNOwWUDTrFjTqFlA0+DT3MgY09jTvCUIEMEkhBAxAAR9INPVXARA19DT0NfM091c4ARcURDTzIls18jTzI1s18TT6I1s18DTyiATgNPE0/ogE8zTwIhJBAC0krzTyFlAkrzTxFlCjiAT8logE+ElKIQZbIhJEI1siEkQiWyISRCRbNe9CACI08jTwHTT5IluXNe408TTwHTT5I1uXSTXtNO5JNO0MTTXvNPI0+SJbCDXuNPE0+SNbCDXtNPoiWzTvCTXsNPA07wg167EisgE077ISJbIQMQCyFDT8shGzgAgAAAAAAAAaGTTvFlCwNO8WNQeABN4bKfUxAFA08hY08RZQUDTvFlA07hY07RZQUDTsFjTrFlBQsDT/NP40/TT8NPsiNOwWNOsWUDTuFjTtFlA0+DT3MgY09jTyCEIDCkg09VcBWTX0NPRXACA18zT0VyA5NfI0/zT3VxggEkQ08iJbNfE08iNbNfA08iEGWzXvNPEhBQw08CEFDBA07zTwNPEIEhA07yEFDBA07yINEEQyCmAyCngJNPYJNe408lc4ARc17TT4Ils17DT4I1s16zTsNO4INeqxIrIBNOqyCCEEshA087IHs7EisgE067ISJbIQNPOyFDT+shGzgAgAAAAAAAAWDTTsFjTrFlA07hZQULA07BY06xZQNO4WUDUHgARWrXU8NPEWNPAWUDTvFlA08lcYIFA07RZRBwhQULA0/zT+NP00/DT7NO00+iNbIhIQNPkiWyISNPkjWyISEBA0+jT5NPs08jIGNO409gg06glCAfJIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A4ERWzX/STUFNf6ABCU8t9c0/lCwgAgAAAAAAAAnv7AqNQexIrIBIQiyEDT/siGzsSKyASKyEiWyEDIJshUyCrIUNAMiW7IRs0ICEyISRCELiAJnIjQBEkQ0BEkiEkw0AhIRREk1BUlKSUgqNf8iWzX+VwggNf1XKAg1/IEwWzX7gATgHc6vNP9QNP4WUDT9UDT8UDT7FlCwIRMhCg1EIQuIAhexIrIBIrISJbIQMgqyFDT+shGzgQmvNfqABWFwcElENPsWUAM1+DIKYDIKeAkWNfexIrIBIRSyEDT7shiABElaCmiyGjEYFrIaNPqyGjT+FrIaszIKYDIKeAk09xcJFrcAPlcEAFA1+YAIAAAAAAAAEEA0+VCwNPlJNfgiWzX3NPhXCDlJNfYiWzX1NPYjWzX0NPYhBls18zT1IQUMNPQhBQwQNPM09DT1CBIQNPMhBQwQNPMiDRBEIjT3EkQhC4gBVbEisgEhCLIQIROyIiEUsiM0/LIlNP2yJoFgr7InMgOyKDIKsimztDw18oAIAAAAAAAAEFo08hZQsDTySTXxNP4WIlsTRCEGrzXwMQA0/jT6NPE08CKAEP//////////AAAAAAAAAAA08Ek09jIGNPdCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0+UEAMDT1FjT2UDT3FlA0+lA0+1A0/FA0/VAoSwFXAH9nKUsBV38DZ0ghBzUBMgY1AkIAVjT0NPUWUDT2UDT3FlA0+FA0+lA0+1A0/FA0/VA0/xZQKEsBVwB/ZylLAVd/O2dIJTUBMgY1AkIAHTEZgQUSRLEisgEisgghBLIQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkhBAgyBBJEMRYSRCEEQzEZIhJEQv/dIjUBIjUCQv/BNABJSiEECDUAOAcyChJEOBAhBBJEOAgSRIk0AElKSSEECDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiUkVIRJMCa9MUIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 186,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:363:14:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v4140",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v4141",
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
                "name": "v4142",
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
                "name": "v4143",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4144",
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
                "name": "v4140",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v4141",
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
                "name": "v4142",
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
                "name": "v4143",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v4144",
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
                "name": "v10172",
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
                "name": "v5162",
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
    "name": "_reach_oe_v10124",
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
    "name": "_reach_oe_v10175",
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
    "name": "_reach_oe_v4160",
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
    "name": "_reach_oe_v4186",
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
    "name": "_reach_oe_v5645",
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
    "name": "_reach_oe_v6681",
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
    "name": "_reach_oe_v7841",
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
    "name": "_reach_oe_v8984",
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
                "name": "v10172",
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
                "name": "v5162",
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
  Bytecode: `0x608060405260405162005c6d38038062005c6d833981016040819052620000269162000d44565b600080554360035562000038620008b2565b604080513381528351602080830191909152808501518051151583850152908101516001600160a01b03908116606080850191909152828501515160808086019190915290830151516001600160c01b03191660a0850152909101511660c082015290517fd3b5645add4f5895f5ee0b79e70dbc6ff85aad0f1cb6dcc4ce616f0276ef28e19181900360e00190a1620000d46001600862000600565b620000e23415600962000600565b8051600090819052815160209081018290528381015101516200010690306200062b565b62000112919062000e57565b6101608201526200012560004762000e57565b61014082015280516020808401510151604051600092633b02a71760e01b9262000156923092919060240162000eb4565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000808460200151608001516001600160a01b0316600084604051620001b2919062000f19565b60006040518083038185875af1925050503d8060008114620001f1576040519150601f19603f3d011682016040523d82523d6000602084013e620001f6565b606091505b5090925090506200020a8282600b6200070f565b5061016084015160208087015101516200022590306200062b565b62000231919062000e57565b6101808501819052620002479015600a62000600565b61014084015162000259904762000e57565b6020808601519190915281516200027891908301810190830162000f37565b6020808601805190910191909152516040808601829052517f11b886c8340af2b7a8d9564ce1a955727b90c461563f4f6f5d1f533276abca9c91620002bd9162000ffd565b60405180910390a16200037360648560400151602001516000015110620002e6576000620002f7565b606485604001516020015160200151105b620003045760006200032f565b6040850151602090810151805191015162000320919062001021565b85604001516020015160400151145b6200033c5760006200034d565b606485604001516020015160400151105b6200035a5760006200036b565b600085604001516020015160400151115b600c62000600565b604084015151620003879015600d62000600565b606084018051600019905251600060209182018190526080860180518290528051830182905251604090810182905260a08701519190915286820151810151518151928301520160408051601f198184030181529082905260208781015160600151516001600160c01b031916908301529060280160408051808303601f1901815282825260808881015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a089015151602084015291016040516020818303038152906040526000196012604051620004729062000971565b62000483969594939291906200106a565b604051809103906000f080158015620004a0573d6000803e3d6000fd5b506001600160a01b031660c0850181905260e085018190526040517f50aa605419450efe0709618c849a80b501e5c88465e8e51b33a8d521a581804791620004e891620010d5565b60405180910390a16020858101510151610100850180516001600160a01b039283169052515160e086015162000536929081169116146200052b5760016200052e565b60005b600e62000600565b61012084018051600090819052905160200152620005536200097f565b805133905260208087015181015182516001600160a01b03918216908301528651835160409081019190915260e088015184519216606092830152610120880180518551608090810191909152848601805160009052848b0151815187015282518151850152915182519094019390935290880180519093015181519092019190915280514360a09190910152905151905160c00152620005f48162000755565b505050505050620012b0565b81620006275760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000806000846001600160a01b031660006370a0823160e01b86604051602401620006579190620010d5565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162000697919062000f19565b60006040518083038185875af1925050503d8060008114620006d6576040519150601f19603f3d011682016040523d82523d6000602084013e620006db565b606091505b509092509050620006ef828260066200070f565b5080806020019051810190620007069190620010e9565b95945050505050565b60608315620007205750816200074e565b825115620007315782518084602001fd5b60405163100960cb60e01b8152600481018390526024016200061e565b9392505050565b602081015151156200080d576200076b620009a8565b81516020908101516001600160a01b039081168352835160409081015184840152845160609081015190921681850152828501805184015183860152805182015160808087019190915281519093015160a0860152519091015160c084015260026000554360015551620007e29183910162001112565b604051602081830303815290604052600290805190602001906200080892919062000a10565b505050565b6200081762000a9f565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e087015280519091015161010086015251909201516101208401526004600055436001559051620007e2918391016200119d565b604051806101a00160405280620008c862000b20565b8152602001620008d762000b42565b8152602001620008e662000b42565b8152602001620008f562000b5e565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260006020820181905260408201526060016200094762000b78565b81526020016200095662000b5e565b81526020016000815260200160008152602001600081525090565b6110298062004c4483390190565b60405180604001604052806200099462000b96565b8152602001620009a362000bcd565b905290565b6040518060e0016040528060006001600160a01b03168152602001620009cd62000b20565b815260006020820152604001620009e362000b5e565b8152602001620009f262000b5e565b815260200162000a0162000b5e565b8152602001620009a362000c2c565b82805462000a1e9062001273565b90600052602060002090601f01602090048101928262000a42576000855562000a8d565b82601f1062000a5d57805160ff191683800117855562000a8d565b8280016001018555821562000a8d579182015b8281111562000a8d57825182559160200191906001019062000a70565b5062000a9b92915062000c66565b5090565b60408051610140810182526000808252602082015290810162000ac162000b20565b81526000602082015260400162000ad762000b5e565b815260200162000ae662000b5e565b815260200162000af562000b5e565b815260200162000b0462000b5e565b815260200162000b1362000c2c565b8152602001600081525090565b6040805160608101909152806000815260006020820181905260409091015290565b604051806040016040528060008152602001620009a362000c2c565b604051806040016040528060008152602001600081525090565b60405180602001604052806001906020820280368337509192915050565b6040805160a0810182526000808252602082015290810162000bb762000b20565b815260006020820152604001620009a362000b5e565b6040518060e0016040528060001515815260200162000beb62000b5e565b815260200162000bfa62000b5e565b815260200162000c0962000b5e565b815260200162000c1862000c2c565b815260200160008152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b5b8082111562000a9b576000815560010162000c67565b604080519081016001600160401b038111828210171562000cae57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000cae57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b038111828210171562000cae57634e487b7160e01b600052604160045260246000fd5b8051801515811462000d2757600080fd5b919050565b80516001600160a01b038116811462000d2757600080fd5b600081830360c081121562000d5857600080fd5b62000d6262000c7d565b8351815260a0601f198301121562000d7957600080fd5b62000d8362000cb4565b62000d916020860162000d16565b815262000da16040860162000d2c565b60208201526020605f198401121562000db957600080fd5b62000dc362000ce5565b6060860151815260408201526020607f198401121562000de257600080fd5b62000dec62000ce5565b60808601519093506001600160c01b03198116811462000e0b57600080fd5b83526060810183905262000e2260a0860162000d2c565b60808201526020820152949350505050565b6001600160a01b03169052565b634e487b7160e01b600052601160045260246000fd5b60008282101562000e6c5762000e6c62000e41565b500390565b80516002811062000e9257634e487b7160e01b600052602160045260246000fd5b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03848116825260a082019062000ed5602084018662000e71565b808416608084015250949350505050565b60005b8381101562000f0357818101518382015260200162000ee9565b8381111562000f13576000848401525b50505050565b6000825162000f2d81846020870162000ee6565b9190910192915050565b600060a0828403121562000f4a57600080fd5b60405160a081016001600160401b038111828210171562000f7b57634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015262000fa66060840162000d2c565b606082015262000fb96080840162000d16565b60808201529392505050565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b8151815260208083015160c08301916200101a9084018262000fc5565b5092915050565b6000821982111562001037576200103762000e41565b500190565b600081518084526200105681602086016020860162000ee6565b601f01601f19169290920160200192915050565b60c0815260006200107f60c08301896200103c565b82810360208401526200109381896200103c565b90508281036040840152620010a981886200103c565b90508281036060840152620010bf81876200103c565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b600060208284031215620010fc57600080fd5b5051919050565b80518252602090810151910152565b81516001600160a01b039081168252602080840151610200840192916200113c9085018262000e71565b50604084015116608083015260608301516200115c60a084018262001103565b5060808301516200117160e084018262001103565b5060a08301516200118761012084018262001103565b5060c08301516200101a61016084018262000fc5565b600061028082019050620011b382845162000e34565b6020830151620011c7602084018262000e34565b506040830151620011dc604084018262000e71565b506060830151620011f160a084018262000e34565b5060808301516200120660c084018262001103565b5060a08301516101006200121d8185018362001103565b60c085015191506200123461014085018362001103565b60e085015191506200124b61018085018362001103565b8401519050620012606101c084018262000fc5565b5061012083015161026083015292915050565b600181811c908216806200128857607f821691505b60208210811415620012aa57634e487b7160e01b600052602260045260246000fd5b50919050565b61398480620012c06000396000f3fe6080604052600436106100985760003560e01c80630e36a72c146100a15780631e93b0f1146100ca57806332020fec146100e95780633e59bac4146101095780634012e02e1461011c5780634272dbc21461013e5780638323075714610151578063842463da14610166578063ab53f2c61461017e578063c8867ae9146101a1578063d02b6307146101b4578063dc8d714f146101c757005b3661009f57005b005b6100b46100af366004612e57565b6101da565b6040516100c19190612e9c565b60405180910390f35b3480156100d657600080fd5b506003545b6040519081526020016100c1565b6100fc6100f7366004612ebf565b610249565b6040516100c19190612ed8565b61009f610117366004612ee6565b6102a7565b34801561012857600080fd5b506101316102cb565b6040516100c19190612f87565b6100db61014c366004613040565b610626565b34801561015d57600080fd5b506001546100db565b61016e61067d565b60405190151581526020016100c1565b34801561018a57600080fd5b506101936106b4565b6040516100c1929190613088565b6100fc6101af3660046130c2565b610751565b61009f6101c23660046130e4565b6107b6565b6100fc6101d53660046130c2565b6107d6565b6101e26125b2565b6101ea6125d2565b6101f2612621565b6101fa61263b565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261023a828461083b565b50506020015190505b92915050565b61025161267e565b6102596125d2565b610261612621565b61026961263b565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261029b828461083b565b50506060015192915050565b6102af6125d2565b6102c76102c1368490038401846130f7565b82611e7e565b5050565b6102d3612698565b60026000541415610476576000600280546102ed9061317c565b80601f01602080910402602001604051908101604052809291908181526020018280546103199061317c565b80156103665780601f1061033b57610100808354040283529160200191610366565b820191906000526020600020905b81548152906001019060200180831161034957829003601f168201915b505050505080602001905181019061037e91906132ca565b90506103886126f6565b606080830180515183515251602090810151835182015260808085018051518386018051919091529051830151815184015260c080870180515160408089018051929092528251870151825188015282518101518251820152825188015182516001600160a01b03918216908a0152925186015182519015159087015260a0808b018051518b8b01805191909152905189015181518a0152828c0151888c0180519187169091529a518b518a015295518a5190920191909152905188519097019690965291518651909301929092528551855191169301929092529092015181519092019190915251919050565b60046000541415610617576000600280546104909061317c565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc9061317c565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b50505050508060200190518101906105219190613393565b905061052b6126f6565b60a080830180515183515251602090810151835182015260c080850180515183860180519190915290518301518151840152610100860180515160408088018051929092528251860151825187015282518101518251820152825160609081015183516001600160a01b0391821690830152935160809081015184519015159082015260e08b01805151838c01805191909152905189015181518a0152828c0151828c0180519188169091529a518b518a015295518a51840152925189519091015292518751909101529286015185519316929093019190915292015181519092019190915251919050565b61062360006007612015565b90565b60006106306125d2565b610638612621565b61064061263b565b604080516020808201835287825283830191909152600183528151808201909252828252830152610671828461083b565b50506040015192915050565b60006106876125d2565b61068f61273d565b60408051602080820190925260008152908201526106ad8183611e7e565b5051919050565b6000606060005460028080546106c99061317c565b80601f01602080910402602001604051908101604052809291908181526020018280546106f59061317c565b80156107425780601f1061071757610100808354040283529160200191610742565b820191906000526020600020905b81548152906001019060200180831161072557829003601f168201915b50505050509050915091509091565b61075961267e565b6107616125d2565b610769612621565b61077161263b565b604080518082018252878152602080820188905260808401919091526003835281518082019092528282528301526107a9828461083b565b5050608001519392505050565b6107be6125d2565b6102c76107d0368490038401846134f2565b8261083b565b6107de61267e565b6107e66125d2565b6107ee612621565b6107f661263b565b604080518082018252878152602080820188905260a084019190915260048352815180820190925282825283015261082e828461083b565b505060a001519392505050565b61084b600460005414602a612015565b815161086690158061085f57508251600154145b602b612015565b6000808055600280546108789061317c565b80601f01602080910402602001604051908101604052809291908181526020018280546108a49061317c565b80156108f15780601f106108c6576101008083540402835291602001916108f1565b820191906000526020600020905b8154815290600101906020018083116108d457829003601f168201915b50505050508060200190518101906109099190613393565b9050610913612767565b7f0c36ecdcbe3fc67e26de932e0ef4b0434fa375ec7e902fe67403914b10d86be133856040516109449291906135c5565b60405180910390a1600060208501515151600481111561096657610966612f3d565b1415610d3557602080850151510151815261098334156012612015565b61099d610996338460600151600061203b565b6013612015565b6109b76109b0338460200151600061203b565b6014612015565b6109e3826101000151606001516001600160a01b031683600001516001600160a01b0316146015612015565b80516020015151610a73906064116109fc576000610a0d565b606482600001516020015160200151105b610a18576000610a3b565b81516020908101518051910151610a2f919061368b565b82516020015160400151145b610a46576000610a54565b815160200151604001516064115b610a5f576000610a6c565b8151602001516040015115155b6016612015565b61012082015147908110610a9657610120830151610a9190826136a3565b610a99565b60005b6020830181905260e084015151610ab0919061368b565b604080840182905283515190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610aef573d6000803e3d6000fd5b50610b0f83602001518360000151600001518560e0015160200151612053565b60e08301805151606084018051919091529051602090810151825182015290516080840180519190915281840151815190920191909152516040517fa3a6d3172d65b955ab8d0a450b2a2f85233e9c2b3bb7aa0654cea0f0ce27b54091610b7591612e9c565b60405180910390a160808083015160208087019190915283518101515160a085018051919091528451820151820151815183015284518201516040908101518251820152855183015160609081015183516001600160a01b039091169101528551909201518301518151901515930192909252905190517f58159704bdeaaef19ba283a5ac926fd3459f61a1bdb694c8ef771b4cbb1ed2ca91610c17916136ba565b60405180910390a1610c276129f5565b835181516001600160a01b0391821690526020808601518351908316908201526040808701518451909101526060808701518451931692019190915260808086015183518201528451909101510151610c81576000610c8c565b60a084015160200151155b610c97576000610cb4565b60c08401515115610ca9576000610cb4565b60c084015160200151155b6020808301805192151590925260a080870151835183015260c08701518351604090810191909152608080890151855160600152875184015185519091015292514391015290840151610120860151918501519091610d129161368b565b610d1c91906136a3565b602082015160c00152610d2e81612067565b5050611e78565b6001602085015151516004811115610d4f57610d4f612f3d565b1415611119576020840151516040015160c082015261010082015160800151610d8790610d7d576001610d80565b60005b6017612015565b60c08101515151610d9b9034146018612015565b610db5610dae338460600151600061203b565b6019612015565b610dda610dd33384602001518460c00151600001516020015161203b565b601a612015565b60a082015160200151610e105760c08101515160208101519051610e0691610e01916136c8565b6121b7565b60e0820152610e9e565b60c0808301515160a0840151602001519183015151519091610e31916136c8565b610e3b91906136e7565b61010082015260c08083015160209081015160a08501518201519284015151909101519091610e69916136c8565b610e7391906136e7565b610120820181905261010082015110610e9157806101200151610e98565b8061010001515b60e08201525b60c08083015151908201515151610eb5919061368b565b61014082015260c08083015160209081015191830151510151610ed8919061368b565b61016082019081526101408201516101808301805191909152905190516020015260e081015160a083015151610f0e91906136a3565b6101a082015260e081015160a083015160200151610f2c919061368b565b6101c082019081526101a08201516101e083018051919091529051905160200152606082015160e0820151610f6391903390612053565b7f79b04f21bd133f23ef2ae23dbc1d7474a3b35b7104efb5fc61c121d3d38c19008160e00151604051610f9891815260200190565b60405180910390a160e08101805160408086019190915260c083018051515161020085018051919091529051516020908101518251820152610140850151610220860180519190915261016086015181518301526101a086015161024087018051919091526101c0870151815190930192909252915193519151905192517feb901b1090cd416dc78fe86e1c23df023f20baa603a62e5d8902b6132657c2cb9461104794339491939192613709565b60405180910390a16110576129f5565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260808087015185518201528285018051600090526101e087015181519094019390935261018086015183519092019190915260e0860151825190930192909252610100850151815190920191909152514360a09091015260c08201515151610120840151611101919061368b565b602082015160c0015261111381612067565b50611e78565b600260208501515151600481111561113357611133612f3d565b141561148657602084015151606001516102608201526111553415601b612015565b6111776111703384606001518461026001516000015161203b565b601c612015565b61119161118a338460200151600061203b565b601d612015565b60a08201516020015160c083015151610260830151516111b191906136c8565b6111bb91906136e7565b61028082015260a082015160209081015160c084015190910151610260830151516111e691906136c8565b6111f091906136e7565b6102a08201526102608101515160a08301515161120d919061368b565b6102c08201526102608101515160a08301516020015161122d91906136a3565b6102e082019081526102c08201516103008301805191909152905190516020015261028081015160c08301515161126491906136a3565b6103208201526102a081015160c08301516020015161128391906136a3565b610340820190815261032082015161036083018051919091529051905160200152610280810151604051339180156108fc02916000818181858888f193505050501580156112d5573d6000803e3d6000fd5b506112ea826020015133836102a00151612053565b61028081015161038082018051919091526102a0820151815160200152516040517fcd568ff39f8ac11472a061a30900f0bae0d072781e26abe338d6d3cbf5d940099161133691612ed8565b60405180910390a16103808101805160608501526103208201516103a0830180519190915261034083015181516020908101919091526102c08401516103c085018051919091526102e0850151815190920191909152610260840151519251915190516040517f11e25ff220faec265baf090d6762f1387fefe57e9a78c19f7715bebcadeef855946113cd94339491939092613747565b60405180910390a16113dd6129f5565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905261030087015181519094019390935261036086015183519092019190915260e0860151825190930192909252610100850151815190920191909152514360a09091015261028082015161012084015161110191906136a3565b60036020850151515160048111156114a0576114a0612f3d565b1415611974576020840151516080908101516103e083015261010083015101516114d9906114cf5760016114d2565b60005b601e612015565b6103e08101515160c0830151516114f0919061368b565b6104008201526101008201516040015161150c906127106136a3565b6103e08201515161151d91906136c8565b610420820181905260c08301516020015161044083015261040082015161154790612710906136c8565b611551919061368b565b81610440015182610420015161156791906136c8565b61157191906136e7565b61046082015261010082015160408101519051606491906115939083906136c8565b61159d91906136e7565b61046083015161040084015160c0860151602001516103e0860151516115c391906136c8565b6115cd91906136e7565b6115d791906136a3565b6115e191906136c8565b6115eb91906136e7565b610480820152610100820151516103e0820151516127109161160c916136c8565b61161691906136e7565b6104a082018181526104c083018051929092529051600060209182018190526104e084018051919091526104808401805191518301919091525161040084015160c0860151909201519251909261166c916136c8565b61167691906136e7565b1161168657806104e0015161168d565b806104c001515b6105008201819052516104008201516116a691906136a3565b81610520018181525050806105000151602001518161046001518360c00151602001516116d391906136a3565b6116dd91906136a3565b6105408201526104608101516103e082015160200151611700911015601f612015565b61044081015160c08301515161173891611719916136c8565b82610540015183610520015161172f91906136c8565b10156020612015565b6103e08101515161174c9034146021612015565b61176661175f338460600151600061203b565b6022612015565b611780611779338460200151600061203b565b6023612015565b61052081015161056082018051919091526105408201519051602001526105008101515160e0830151516117b4919061368b565b6105808201515261050081015160209081015160e0840151909101516117da919061368b565b81610580015160200181815250506117fc826020015133836104600151612053565b6105a08101805160009052610460820151815160200152516040517f0ac043cb085efcfebcf381062d382aa6b6f2fb97080a5e8d63039190dc7095689161184291612ed8565b60405180910390a16105a08101805160808501526103e0820151516105c08301805191909152805160006020918201526105208401516105e0850180519190915261054085015181519092019190915290519151905160405160008051602061392f833981519152936118bb9333939192909190613779565b60405180910390a16118cb6129f5565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526105608701518151909301929092526105808601518251909401939093526101008601518151909301929092529051439101526103e082015151610120840151611101919061368b565b600460208501515151600481111561198e5761198e612f3d565b1415611e785760208401515160a00151610600820152610100820151608001516119c7906119bd5760016119c0565b60005b6024612015565b6106008101515160c0830151602001516119e1919061368b565b610620820152610100820151604001516119fd906127106136a3565b61060082015151611a0e91906136c8565b610640820181905260c083015151610660830152610620820151611a3590612710906136c8565b611a3f919061368b565b816106600151826106400151611a5591906136c8565b611a5f91906136e7565b6106808201526101008201516040810151905160649190611a819083906136c8565b611a8b91906136e7565b61068083015161062084015160c08601515161060086015151611aae91906136c8565b611ab891906136e7565b611ac291906136a3565b611acc91906136c8565b611ad691906136e7565b6106a0820152610100820151516106008201515161271091611af7916136c8565b611b0191906136e7565b6106c082018181526106e0830180519290925290516000602091820181905261070084018051919091526106a0840180519151909201525161062083015160c085015151925191929091611b5591906136c8565b611b5f91906136e7565b11611b6f57806107000151611b76565b806106e001515b61072082018190526020015161068082015160c084015151611b9891906136a3565b611ba291906136a3565b61074082015261072081015151610620820151611bbf91906136a3565b61076082015261068081015161060082015160200151611be29110156025612015565b611c1d8260c0015160200151826106600151611bfe91906136c8565b826107600151836107400151611c1491906136c8565b10156026612015565b611c2934156027612015565b611c43611c3c338460600151600061203b565b6028612015565b611c65611c5e3384602001518461060001516000015161203b565b6029612015565b61074081015161078082018051919091526107608201519051602090810191909152610720820151015160e083015151611c9f919061368b565b6107a0820151526107208101515160e083015160200151611cc0919061368b565b6107a082015160200152610680810151604051339180156108fc02916000818181858888f19350505050158015611cfb573d6000803e3d6000fd5b506106808101516107c0820180519190915280516000602090910152516040517fc3a0cbe28e9eaaec7e6926efcef1e0b606df538f211f6291e2a9480cad3fb19d91611d4691612ed8565b60405180910390a16107c08101805160a08501526107e08201805160009052610600830151518151602090810191909152610740840151610800850180519190915261076085015181519092019190915290519151905160405160008051602061392f83398151915293611dc09333939192909190613779565b60405180910390a1611dd06129f5565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015282850180516000905260a0808901518251909501949094526107808701518151909301929092526107a086015182519094019390935261010086015181519093019290925290514391015261068082015161012084015161110191906136a3565b50505050565b611e8e6002600054146010612015565b8151611ea9901580611ea257508251600154145b6011612015565b600080805560028054611ebb9061317c565b80601f0160208091040260200160405190810160405280929190818152602001828054611ee79061317c565b8015611f345780601f10611f0957610100808354040283529160200191611f34565b820191906000526020600020905b815481529060010190602001808311611f1757829003601f168201915b5050505050806020019051810190611f4c91906132ca565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a1611fa43415600f612015565b604051600081527f1abe6635a6bf11359e3428d5bdceef88135f6b48fc810bbe8af0661df0f6abf49060200160405180910390a1600082526040810151611fed90600019612227565b611ffa816040015161223a565b6000808055600181905561201090600290612a15565b505050565b816102c75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006120498385308561224c565b90505b9392505050565b61205e838383612326565b61201057600080fd5b602081015151156121135761207a612a4f565b81516020908101516001600160a01b039081168352835160409081015184840152845160609081015190921681850152828501805184015183860152805182015160808087019190915281519093015160a0860152519091015160c0840152600260005543600155516120ef918391016137b0565b60405160208183030381529060405260029080519060200190612010929190612aad565b61211b612b31565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152828601805184015160a0870152805183015160c08088019190915281519095015160e0870152805190910151610100860152519092015161012084015260046000554360015590516120ef91839101613831565b50565b6000600382111561221857508060006121d16002836136e7565b6121dc90600161368b565b90505b81811015612212579050806002816121f781866136e7565b612201919061368b565b61220b91906136e7565b90506121df565b50919050565b8115612222575060015b919050565b61223182826123f7565b6102c757600080fd5b612243816124d2565b6121b457600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916122b3916138f5565b60006040518083038185875af1925050503d80600081146122f0576040519150601f19603f3d011682016040523d82523d6000602084013e6122f5565b606091505b509150915061230682826001612577565b508080602001905181019061231b9190613911565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612385916138f5565b60006040518083038185875af1925050503d80600081146123c2576040519150601f19603f3d011682016040523d82523d6000602084013e6123c7565b606091505b50915091506123d882826002612577565b50808060200190518101906123ed9190613911565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161242391815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161246191906138f5565b60006040518083038185875af1925050503d806000811461249e576040519150601f19603f3d011682016040523d82523d6000602084013e6124a3565b606091505b50915091506124b482826003612577565b50808060200190518101906124c99190613911565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391612519916138f5565b60006040518083038185875af1925050503d8060008114612556576040519150601f19603f3d011682016040523d82523d6000602084013e61255b565b606091505b509150915061256c82826004612577565b506001949350505050565b6060831561258657508161204c565b8251156125965782518084602001fd5b60405163100960cb60e01b815260048101839052602401612032565b60405180604001604052806125c561267e565b8152602001600081525090565b6040518060c001604052806000151581526020016125ee6125b2565b81526020016000815260200161260261267e565b815260200161260f61267e565b815260200161261c61267e565b905290565b60405180604001604052806000815260200161261c612b99565b6040805160c081019091528060008152602001612656612bac565b8152602001612663612bcf565b81526020016126026040518060200160405280600081525090565b604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016126bb61267e565b81526020016126c861267e565b81526020016126d5612be2565b81526020016126e261267e565b81526000602082015260400161261c612c1c565b6040518060a0016040528061270961267e565b815260200161271661267e565b8152602001612723612be2565b815260200161273061267e565b815260200161261c612698565b60405180604001604052806000815260200161261c60405180602001604052806000151581525090565b60405180610820016040528061277b612bac565b8152602001600081526020016000815260200161279661267e565b81526020016127a36125b2565b81526020016127b0612be2565b81526020016127bd612bcf565b815260200160008152602001600081526020016000815260200160008152602001600081526020016127ed61267e565b8152602001600081526020016000815260200161280861267e565b815260200161281561267e565b815260200161282261267e565b815260200161282f61267e565b815260200161284a6040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000815260200161287361267e565b8152602001600081526020016000815260200161288e61267e565b815260200161289b61267e565b81526020016128a861267e565b81526020016128b561267e565b81526020016128c261267e565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016128f961267e565b815260200161290661267e565b815260200161291361267e565b8152602001600081526020016000815260200161292e61267e565b815260200161293b61267e565b815260200161294861267e565b815260200161295561267e565b815260200161296261267e565b815260200161296f61267e565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016129a661267e565b81526020016129b361267e565b81526020016129c061267e565b815260200160008152602001600081526020016129db61267e565b81526020016129e861267e565b815260200161260261267e565b6040518060400160405280612a08612c3e565b815260200161261c612c71565b508054612a219061317c565b6000825580601f10612a31575050565b601f0160209004906000526020600020908101906121b49190612cc8565b6040518060e0016040528060006001600160a01b03168152602001612a72612c1c565b815260006020820152604001612a8661267e565b8152602001612a9361267e565b8152602001612aa061267e565b815260200161261c612be2565b828054612ab99061317c565b90600052602060002090601f016020900481019282612adb5760008555612b21565b82601f10612af457805160ff1916838001178555612b21565b82800160010185558215612b21579182015b82811115612b21578251825591602001919060010190612b06565b50612b2d929150612cc8565b5090565b604080516101408101825260008082526020820152908101612b51612c1c565b815260006020820152604001612b6561267e565b8152602001612b7261267e565b8152602001612b7f61267e565b8152602001612b8c61267e565b81526020016125c5612be2565b604051806020016040528061261c61263b565b604051806040016040528060006001600160a01b0316815260200161261c612be2565b604051806020016040528061261c61267e565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040805160608101909152806000815260006020820181905260409091015290565b6040805160a08101825260008082526020820152908101612c5d612c1c565b81526000602082015260400161261c61267e565b6040518060e00160405280600015158152602001612c8d61267e565b8152602001612c9a61267e565b8152602001612ca761267e565b8152602001612cb4612be2565b815260200160008152602001600081525090565b5b80821115612b2d5760008155600101612cc9565b6001600160a01b03811681146121b457600080fd5b60405160a081016001600160401b0381118282101715612d2257634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715612d2257634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715612d2257634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b0381118282101715612d2257634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612d2257634e487b7160e01b600052604160045260246000fd5b80151581146121b457600080fd5b600060a08284031215612e0957600080fd5b612e11612cf2565b90508135815260208201356020820152604082013560408201526060820135612e3981612cdd565b60608201526080820135612e4c81612de9565b608082015292915050565b60008060c08385031215612e6a57600080fd5b8235612e7581612cdd565b9150612e848460208501612df7565b90509250929050565b80518252602090810151910152565b6000606082019050612eaf828451612e8d565b6020830151604083015292915050565b600060208284031215612ed157600080fd5b5035919050565b604081016102438284612e8d565b60006040828403121561221257600080fd5b6001600160a01b03169052565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b634e487b7160e01b600052602160045260246000fd5b805160028110612f6557612f65612f3d565b82526020818101511515908301526040908101516001600160a01b0316910152565b81516001600160a01b03908116825260208084015161020084019291612faf90850182612e8d565b506040840151612fc26060850182612e8d565b506060840151612fd560a0850182612f05565b506080840151612fe9610140850182612e8d565b5060a08401511661018083015260c08301516130096101a0840182612f53565b5092915050565b60006040828403121561302257600080fd5b61302a612d28565b9050813581526020820135602082015292915050565b60006040828403121561305257600080fd5b61204c8383613010565b60005b8381101561307757818101518382015260200161305f565b83811115611e785750506000910152565b82815260406020820152600082518060408401526130ad81606085016020870161305c565b601f01601f1916919091016060019392505050565b600080604083850312156130d557600080fd5b50508035926020909101359150565b60006101e0828403121561221257600080fd5b6000818303604081121561310a57600080fd5b604080519081016001600160401b038111828210171561313a57634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561315357600080fd5b61315b612d58565b9150602084013561316b81612de9565b825260208101919091529392505050565b600181811c9082168061319057607f821691505b6020821081141561221257634e487b7160e01b600052602260045260246000fd5b805161222281612cdd565b6000606082840312156131ce57600080fd5b604051606081016001600160401b03811182821017156131fe57634e487b7160e01b600052604160045260246000fd5b806040525080915082516002811061321557600080fd5b8152602083015161322581612de9565b6020820152604083015161323881612cdd565b6040919091015292915050565b60006040828403121561325757600080fd5b61325f612d28565b9050815181526020820151602082015292915050565b600060a0828403121561328757600080fd5b61328f612cf2565b905081518152602082015160208201526040820151604082015260608201516132b781612cdd565b60608201526080820151612e4c81612de9565b600061020082840312156132dd57600080fd5b60405160e081016001600160401b038111828210171561330d57634e487b7160e01b600052604160045260246000fd5b604052825161331b81612cdd565b815261332a84602085016131bc565b6020820152608083015161333d81612cdd565b604082015261334f8460a08501613245565b60608201526133618460e08501613245565b6080820152613374846101208501613245565b60a0820152613387846101608501613275565b60c08201529392505050565b600061028082840312156133a657600080fd5b6133ae612d88565b6133b7836131b1565b81526133c5602084016131b1565b60208201526133d784604085016131bc565b60408201526133e860a084016131b1565b60608201526133fa8460c08501613245565b608082015261010061340e85828601613245565b60a0830152613421856101408601613245565b60c0830152613434856101808601613245565b60e0830152613447856101c08601613275565b90820152610260929092015161012083015250919050565b600060c0828403121561347157600080fd5b613479612d28565b9050813561348681612cdd565b81526134958360208401612df7565b602082015292915050565b6000604082840312156134b257600080fd5b6134ba612d58565b90506134c68383613010565b815292915050565b6000602082840312156134e057600080fd5b6134e8612d58565b9135825250919050565b60008183036101e081121561350657600080fd5b61350e612d28565b833581526101c0601f198301121561352557600080fd5b61352d612d58565b9150613537612db9565b60208501356005811061354957600080fd5b8152613558866040870161345f565b602082015261356b8661010087016134a0565b604082015261357e8661014087016134ce565b6060820152613591866101608701613010565b60808201526135a4866101a08701613010565b60a0820152825260208101919091529392505050565b6102c7828251612e8d565b6001600160a01b03838116825282516020808401919091528301515180516102008401929190600581106135fb576135fb612f3d565b6040850152602081810151805190931660608601529190910151906136236080850183612f05565b604081015191506136386101208501836135ba565b60608101515161016085015260808101519150613659610180850183612e8d565b60a00151905061366d6101c0840182612e8d565b509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561369e5761369e613675565b500190565b6000828210156136b5576136b5613675565b500390565b60a081016102438284612f05565b60008160001904831182151516156136e2576136e2613675565b500290565b60008261370457634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b038616815261010081016137276020830187612e8d565b84606083015261373a6080830185612e8d565b6123ed60c0830184612e8d565b6001600160a01b038616815260208101859052610100810161376c6040830186612e8d565b61373a6080830185612e8d565b6001600160a01b038516815260e081016137966020830186612e8d565b6137a36060830185612e8d565b6124c960a0830184612e8d565b81516001600160a01b039081168252602080840151610200840192916137d890850182612f53565b50604084015116608083015260608301516137f660a0840182612e8d565b50608083015161380960e0840182612e8d565b5060a083015161381d610120840182612e8d565b5060c0830151613009610160840182612f05565b600061028082019050613845828451612ef8565b60208301516138576020840182612ef8565b50604083015161386a6040840182612f53565b50606083015161387d60a0840182612ef8565b50608083015161389060c0840182612e8d565b5060a08301516101006138a581850183612e8d565b60c085015191506138ba610140850183612e8d565b60e085015191506138cf610180850183612e8d565b84015190506138e26101c0840182612f05565b5061012083015161026083015292915050565b6000825161390781846020870161305c565b9190910192915050565b60006020828403121561392357600080fd5b815161204c81612de956fe70d923cb45a6349a40cd17c0ecc809524355a424011035dab566ad4ae71d1005a2646970667358221220de12d8269d065bb7198cc3f72248b79fb090b76dd7425e5d95569f7a72107cb764736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122015912caef486addfed8435ee5d140f418c4ca244ef576b3e24144eb8b8fda41a64736f6c634300080c0033`,
  BytecodeLen: 23661,
  Which: `o1`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:523:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:529:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:378:19:after expr stmt semicolon',
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
