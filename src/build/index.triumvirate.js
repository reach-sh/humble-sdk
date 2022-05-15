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
    computeMint_: ((_v29288, _v29289, _v29290 ) => {
        const v29288 = stdlib.protect(ctc1, _v29288, null);
        const v29289 = stdlib.protect(ctc1, _v29289, null);
        const v29290 = stdlib.protect(ctc1, _v29290, null);
      
      const v29291 = v29288.A;
      const v29292 = v29288.B;
      const v29293 = v29289.A;
      const v29294 = v29289.B;
      const v29296 = v29290.B;
      let v29297;
      const v29304 = stdlib.eq(v29296, stdlib.checkedBigNumberify('284:19:decimal', stdlib.UInt_max, '0'));
      if (v29304) {
        const v29305 = stdlib.cast(false, true, v29291);
        const v29306 = stdlib.cast(false, true, v29292);
        const v29307 = stdlib.mul256(v29305, v29306);
        const v29308 = stdlib.sqrt256(v29307);
        const v29309 = stdlib.cast(true, false, v29308);
        v29297 = v29309;
        }
      else {
        const v29318 = stdlib.muldiv(v29291, v29296, v29293);
        const v29325 = stdlib.muldiv(v29292, v29296, v29294);
        const v29327 = stdlib.lt(v29318, v29325);
        const v29328 = v29327 ? v29318 : v29325;
        v29297 = v29328;
        }
      
      return v29297;}),
    computeSwap_: ((_v29329, _v29330, _v29331, _v29332 ) => {
        const v29329 = stdlib.protect(ctc2, _v29329, null);
        const v29330 = stdlib.protect(ctc1, _v29330, null);
        const v29331 = stdlib.protect(ctc1, _v29331, null);
        const v29332 = stdlib.protect(ctc4, _v29332, null);
      
      const v29333 = v29330.A;
      const v29334 = v29330.B;
      const v29335 = v29331.A;
      const v29336 = v29331.B;
      const v29338 = v29332.protoFee;
      const v29339 = v29332.lpFee;
      const v29340 = v29332.totFee;
      const v29341 = stdlib.lt(v29338, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v29342 = stdlib.lt(v29339, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v29343 = v29341 ? v29342 : false;
      const v29344 = stdlib.add(v29339, v29338);
      const v29345 = stdlib.eq(v29340, v29344);
      const v29346 = v29343 ? v29345 : false;
      const v29347 = stdlib.lt(v29340, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v29348 = v29346 ? v29347 : false;
      const v29349 = stdlib.gt(v29340, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v29350 = v29348 ? v29349 : false;
      stdlib.assert(v29350, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v29352 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v29352, {
        at: '275:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v29353;
      if (v29329) {
        const v29358 = stdlib.eq(v29334, stdlib.checkedBigNumberify('./index.rsh:262:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v29358, {
          at: './index.rsh:262:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v29367 = stdlib.add(v29335, v29333);
        const v29375 = stdlib.muldiv(v29333, v29336, v29367);
        const v29376 = stdlib.cast(false, true, v29333);
        const v29377 = stdlib.cast(false, true, v29340);
        const v29378 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v29377);
        const v29379 = stdlib.mul256(v29376, v29378);
        const v29380 = stdlib.cast(false, true, v29367);
        const v29381 = stdlib.mul256(v29380, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v29382 = stdlib.add256(v29381, v29379);
        const v29383 = stdlib.cast(false, true, v29336);
        const v29384 = stdlib.mul256(v29379, v29383);
        const v29385 = stdlib.div256(v29384, v29382);
        const v29386 = stdlib.cast(true, false, v29385);
        const v29391 = stdlib.sub(v29375, v29386);
        const v29395 = stdlib.mul(v29338, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v29396 = stdlib.div(v29395, v29340);
        const v29402 = stdlib.muldiv(v29391, v29396, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v29407 = stdlib.muldiv(v29333, v29338, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v29415 = stdlib.muldiv(v29407, v29336, v29367);
        const v29416 = stdlib.gt(v29415, v29402);
        const v29417 = [v29407, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v29418 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v29402];
        const v29419 = v29416 ? v29417 : v29418;
        const v29421 = v29419[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
        const v29422 = v29419[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
        const v29424 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v29386
          };
        const v29426 = {
          A: v29421,
          B: v29422
          };
        const v29427 = [v29424, v29426];
        v29353 = v29427;
        }
      else {
        const v29428 = stdlib.eq(v29333, stdlib.checkedBigNumberify('./index.rsh:267:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v29428, {
          at: './index.rsh:267:10:application',
          fs: ['at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v29437 = stdlib.add(v29336, v29334);
        const v29445 = stdlib.muldiv(v29334, v29335, v29437);
        const v29446 = stdlib.cast(false, true, v29334);
        const v29447 = stdlib.cast(false, true, v29340);
        const v29448 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v29447);
        const v29449 = stdlib.mul256(v29446, v29448);
        const v29450 = stdlib.cast(false, true, v29437);
        const v29451 = stdlib.mul256(v29450, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v29452 = stdlib.add256(v29451, v29449);
        const v29453 = stdlib.cast(false, true, v29335);
        const v29454 = stdlib.mul256(v29449, v29453);
        const v29455 = stdlib.div256(v29454, v29452);
        const v29456 = stdlib.cast(true, false, v29455);
        const v29461 = stdlib.sub(v29445, v29456);
        const v29465 = stdlib.mul(v29338, stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100'));
        const v29466 = stdlib.div(v29465, v29340);
        const v29472 = stdlib.muldiv(v29461, v29466, stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100'));
        const v29477 = stdlib.muldiv(v29334, v29338, stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000'));
        const v29485 = stdlib.muldiv(v29477, v29335, v29437);
        const v29486 = stdlib.gt(v29485, v29472);
        const v29487 = [v29477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v29488 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v29472];
        const v29489 = v29486 ? v29487 : v29488;
        const v29491 = v29489[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
        const v29492 = v29489[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
        const v29494 = {
          A: v29456,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v29496 = {
          A: v29492,
          B: v29491
          };
        const v29497 = [v29494, v29496];
        v29353 = v29497;
        }
      const v29498 = v29353[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '0')];
      const v29499 = v29353[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '1')];
      const v29500 = v29498.A;
      const v29501 = v29498.B;
      const v29502 = v29499.A;
      const v29503 = v29499.B;
      const v29504 = {
        A: v29500,
        B: v29501
        };
      const v29505 = {
        A: v29502,
        B: v29503
        };
      const v29506 = [v29504, v29505];
      
      return v29506;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc3, ctc0]);
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc6], ['lpFee', ctc6], ['totFee', ctc6], ['protoAddr', ctc0], ['locked', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Data({
    Harvest: ctc5,
    Kill: ctc2,
    NewInfo: ctc8,
    NewTriumvirs: ctc9,
    NoOp: ctc2,
    Rewards: ctc0
    });
  return {
    Propose: [ctc0, ctc10],
    Register: [ctc1, ctc4, ctc3],
    Support: [ctc0, ctc6, ctc10]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc2, ctc4]);
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc6], ['lpFee', ctc6], ['totFee', ctc6], ['protoAddr', ctc4], ['locked', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Data({
    Harvest: ctc5,
    Kill: ctc1,
    NewInfo: ctc8,
    NewTriumvirs: ctc9,
    NoOp: ctc1,
    Rewards: ctc4
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc12 = stdlib.T_Object({
    locked: ctc7,
    lpFee: ctc6,
    protoAddr: ctc4,
    protoFee: ctc6,
    totFee: ctc6
    });
  const ctc13 = stdlib.T_Struct([['triumvirs', ctc9], ['cmds', ctc11], ['protoInfo', ctc8]]);
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v30740, v30752, v30754, v30755, v30759] = svs;
            return (await ((async () => {
              
              const v30803 = v30754.protoFee;
              const v30804 = v30754.lpFee;
              const v30805 = v30754.totFee;
              const v30806 = v30754.protoAddr;
              const v30807 = v30754.locked;
              const v30808 = {
                locked: v30807,
                lpFee: v30804,
                protoAddr: v30806,
                protoFee: v30803,
                totFee: v30805
                };
              const v30809 = {
                cmds: v30752,
                protoInfo: v30808,
                triumvirs: v30755
                };
              
              return v30809;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        }
      },
    views: {
      3: [ctc10, ctc11, ctc12, ctc9, ctc6]
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Data({
    None: ctc2,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc5, ctc4, ctc0]);
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['protoFee', ctc7], ['lpFee', ctc7], ['totFee', ctc7], ['protoAddr', ctc0], ['locked', ctc8]]);
  const ctc10 = stdlib.T_Data({
    Harvest: ctc6,
    Kill: ctc2,
    NewInfo: ctc9,
    NewTriumvirs: ctc1,
    NoOp: ctc2,
    Rewards: ctc0
    });
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc5, ctc4]);
  const ctc14 = stdlib.T_Data({
    Triumvir_propose0_29646: ctc11,
    Triumvir_support0_29646: ctc12,
    register0_29646: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc7], ['B', ctc7]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc16]);
  
  
  const v30727 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v30727],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:123:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:123:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v30734], secs: v30736, time: v30735, didSend: v29521, from: v30733 } = txn1;
      
      ;
      const v30737 = await ctc.getContractAddress();
      
      const v30740 = ['NoOp', null];
      const v30746 = [v30740, v30740, v30740];
      const v30751 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v30737,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v30752 = v30746;
      const v30753 = false;
      const v30754 = v30751;
      const v30755 = v30734;
      const v30756 = v30735;
      const v30759 = stdlib.checkedBigNumberify('./index.rsh:119:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v30802 = v30753 ? false : true;
        
        return v30802;})()) {
        sim_r.isHalt = false;
        }
      else {
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
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v30734], secs: v30736, time: v30735, didSend: v29521, from: v30733 } = txn1;
  ;
  const v30737 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:131:23:application',
    fs: ['at ./index.rsh:131:23:application call to [unknown function] (defined at: ./index.rsh:131:23:function exp)', 'at ./index.rsh:131:23:application call to "liftedInteract" (defined at: ./index.rsh:131:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v30740 = ['NoOp', null];
  const v30746 = [v30740, v30740, v30740];
  const v30751 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v30737,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v30752 = v30746;
  let v30753 = false;
  let v30754 = v30751;
  let v30755 = v30734;
  let v30756 = v30735;
  let v30759 = stdlib.checkedBigNumberify('./index.rsh:119:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v30802 = v30753 ? false : true;
    
    return v30802;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn2;
    switch (v31086[0]) {
      case 'Triumvir_propose0_29646': {
        const v31089 = v31086[1];
        undefined /* setApiDetails */;
        const v31094 = v31089[stdlib.checkedBigNumberify('./index.rsh:190:10:spread', stdlib.UInt_max, '0')];
        let v31095;
        switch (v31094[0]) {
          case 'Harvest': {
            const v31096 = v31094[1];
            v31095 = true;
            
            break;
            }
          case 'Kill': {
            const v31097 = v31094[1];
            v31095 = true;
            
            break;
            }
          case 'NewInfo': {
            const v31098 = v31094[1];
            const v31099 = v31098.protoFee;
            const v31100 = v31098.lpFee;
            const v31101 = v31098.totFee;
            const v31102 = stdlib.lt(v31099, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
            const v31103 = stdlib.lt(v31100, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
            const v31104 = v31102 ? v31103 : false;
            const v31105 = stdlib.add(v31100, v31099);
            const v31106 = stdlib.eq(v31101, v31105);
            const v31107 = v31104 ? v31106 : false;
            const v31108 = stdlib.lt(v31101, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
            const v31109 = v31107 ? v31108 : false;
            const v31110 = stdlib.gt(v31101, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
            const v31111 = v31109 ? v31110 : false;
            v31095 = v31111;
            
            break;
            }
          case 'NewTriumvirs': {
            const v31112 = v31094[1];
            v31095 = true;
            
            break;
            }
          case 'NoOp': {
            const v31113 = v31094[1];
            v31095 = true;
            
            break;
            }
          case 'Rewards': {
            const v31114 = v31094[1];
            v31095 = true;
            
            break;
            }
          }
        stdlib.assert(v31095, {
          at: './index.rsh:191:12:application',
          fs: ['at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v31115 = ['None', null];
        const v31116 = await stdlib.Array_asyncReduce([v30755], v31115, async([v31118], v31117, v31119) => {
          let v31120;
          switch (v31117[0]) {
            case 'None': {
              const v31121 = v31117[1];
              v31120 = true;
              
              break;
              }
            case 'Some': {
              const v31122 = v31117[1];
              v31120 = false;
              
              break;
              }
            }
          const v31123 = stdlib.addressEq(v31085, v31118);
          const v31124 = v31120 ? v31123 : false;
          const v31125 = ['Some', v31119];
          const v31126 = v31124 ? v31125 : v31117;
          
          return v31126;})
        let v31127;
        switch (v31116[0]) {
          case 'None': {
            const v31128 = v31116[1];
            v31127 = false;
            
            break;
            }
          case 'Some': {
            const v31129 = v31116[1];
            v31127 = true;
            
            break;
            }
          }
        stdlib.assert(v31127, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        ;
        let v31170;
        switch (v31094[0]) {
          case 'Harvest': {
            const v31171 = v31094[1];
            v31170 = true;
            
            break;
            }
          case 'Kill': {
            const v31172 = v31094[1];
            v31170 = true;
            
            break;
            }
          case 'NewInfo': {
            const v31173 = v31094[1];
            const v31174 = v31173.protoFee;
            const v31175 = v31173.lpFee;
            const v31176 = v31173.totFee;
            const v31177 = stdlib.lt(v31174, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
            const v31178 = stdlib.lt(v31175, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
            const v31179 = v31177 ? v31178 : false;
            const v31180 = stdlib.add(v31175, v31174);
            const v31181 = stdlib.eq(v31176, v31180);
            const v31182 = v31179 ? v31181 : false;
            const v31183 = stdlib.lt(v31176, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
            const v31184 = v31182 ? v31183 : false;
            const v31185 = stdlib.gt(v31176, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
            const v31186 = v31184 ? v31185 : false;
            v31170 = v31186;
            
            break;
            }
          case 'NewTriumvirs': {
            const v31187 = v31094[1];
            v31170 = true;
            
            break;
            }
          case 'NoOp': {
            const v31188 = v31094[1];
            v31170 = true;
            
            break;
            }
          case 'Rewards': {
            const v31189 = v31094[1];
            v31170 = true;
            
            break;
            }
          }
        stdlib.assert(v31170, {
          at: './index.rsh:191:12:application',
          fs: ['at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)'],
          msg: 'invalid command',
          who: 'Admin'
          });
        const v31191 = await stdlib.Array_asyncReduce([v30755], v31115, async([v31193], v31192, v31194) => {
          let v31195;
          switch (v31192[0]) {
            case 'None': {
              const v31196 = v31192[1];
              v31195 = true;
              
              break;
              }
            case 'Some': {
              const v31197 = v31192[1];
              v31195 = false;
              
              break;
              }
            }
          const v31198 = stdlib.addressEq(v31085, v31193);
          const v31199 = v31195 ? v31198 : false;
          const v31200 = ['Some', v31194];
          const v31201 = v31199 ? v31200 : v31192;
          
          return v31201;})
        let v31202;
        switch (v31191[0]) {
          case 'None': {
            const v31203 = v31191[1];
            v31202 = false;
            
            break;
            }
          case 'Some': {
            const v31204 = v31191[1];
            v31202 = true;
            
            break;
            }
          }
        stdlib.assert(v31202, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v31205 = stdlib.fromSome(v31191, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v31207 = stdlib.Array_set(v30752, v31205, v31094);
        const v31209 = null;
        await txn2.getOutput('Triumvir_propose', 'v31209', ctc2, v31209);
        null;
        const cv30752 = v31207;
        const cv30753 = false;
        const cv30754 = v30754;
        const cv30755 = v30755;
        const cv30756 = v31087;
        const cv30759 = v30759;
        
        v30752 = cv30752;
        v30753 = cv30753;
        v30754 = cv30754;
        v30755 = cv30755;
        v30756 = cv30756;
        v30759 = cv30759;
        
        continue;
        break;
        }
      case 'Triumvir_support0_29646': {
        const v31518 = v31086[1];
        undefined /* setApiDetails */;
        const v31563 = v31518[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
        const v31564 = v31518[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
        const v31565 = stdlib.lt(v31563, stdlib.checkedBigNumberify('./index.rsh:201:29:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v31565, {
          at: './index.rsh:201:12:application',
          fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'illegal idx',
          who: 'Admin'
          });
        const v31566 = ['None', null];
        const v31567 = await stdlib.Array_asyncReduce([v30755], v31566, async([v31569], v31568, v31570) => {
          let v31571;
          switch (v31568[0]) {
            case 'None': {
              const v31572 = v31568[1];
              v31571 = true;
              
              break;
              }
            case 'Some': {
              const v31573 = v31568[1];
              v31571 = false;
              
              break;
              }
            }
          const v31574 = stdlib.addressEq(v31085, v31569);
          const v31575 = v31571 ? v31574 : false;
          const v31576 = ['Some', v31570];
          const v31577 = v31575 ? v31576 : v31568;
          
          return v31577;})
        let v31578;
        switch (v31567[0]) {
          case 'None': {
            const v31579 = v31567[1];
            v31578 = false;
            
            break;
            }
          case 'Some': {
            const v31580 = v31567[1];
            v31578 = true;
            
            break;
            }
          }
        stdlib.assert(v31578, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v31581 = stdlib.fromSome(v31567, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v31582 = stdlib.eq(v31563, v31581);
        const v31583 = v31582 ? false : true;
        stdlib.assert(v31583, {
          at: './index.rsh:203:12:application',
          fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v31585 = v30752[v31563];
        const v31586 = stdlib.digest(ctc11, [v31564]);
        const v31587 = stdlib.digest(ctc11, [v31585]);
        const v31588 = stdlib.digestEq(v31586, v31587);
        stdlib.assert(v31588, {
          at: './index.rsh:205:12:application',
          fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'command switched',
          who: 'Admin'
          });
        ;
        const v31691 = await stdlib.Array_asyncReduce([v30755], v31566, async([v31693], v31692, v31694) => {
          let v31695;
          switch (v31692[0]) {
            case 'None': {
              const v31696 = v31692[1];
              v31695 = true;
              
              break;
              }
            case 'Some': {
              const v31697 = v31692[1];
              v31695 = false;
              
              break;
              }
            }
          const v31698 = stdlib.addressEq(v31085, v31693);
          const v31699 = v31695 ? v31698 : false;
          const v31700 = ['Some', v31694];
          const v31701 = v31699 ? v31700 : v31692;
          
          return v31701;})
        let v31702;
        switch (v31691[0]) {
          case 'None': {
            const v31703 = v31691[1];
            v31702 = false;
            
            break;
            }
          case 'Some': {
            const v31704 = v31691[1];
            v31702 = true;
            
            break;
            }
          }
        stdlib.assert(v31702, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
          msg: 'not triumvir',
          who: 'Admin'
          });
        const v31705 = stdlib.fromSome(v31691, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v31706 = stdlib.eq(v31563, v31705);
        const v31707 = v31706 ? false : true;
        stdlib.assert(v31707, {
          at: './index.rsh:203:12:application',
          fs: ['at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
          msg: 'cannot support self',
          who: 'Admin'
          });
        const v31715 = stdlib.Array_set(v30752, v31563, v30740);
        const v31718 = null;
        await txn2.getOutput('Triumvir_support', 'v31718', ctc2, v31718);
        null;
        switch (v31585[0]) {
          case 'Harvest': {
            const v31766 = v31585[1];
            const v31767 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '0')];
            const v31768 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '1')];
            const v31769 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '2')];
            const v31770 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '3')];
            switch (v31768[0]) {
              case 'None': {
                const v31771 = v31768[1];
                const v31772 = v30754.protoFee;
                const v31773 = v30754.lpFee;
                const v31774 = v30754.totFee;
                const v31775 = v30754.protoAddr;
                const v31776 = v30754.locked;
                const v31789 = {
                  locked: v31776,
                  lpFee: v31773,
                  protoAddr: v31775,
                  protoFee: v31772,
                  totFee: v31774
                  };
                const v31790 = undefined /* Remote */;
                const v31791 = await txn2.getOutput('internal', 'v31790', ctc17, v31790);
                const v31793 = v31791[stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0')];
                const v31802 = stdlib.add(v30759, v31793);
                const v31803 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'), v31793);
                stdlib.assert(v31803, {
                  at: './index.rsh:163:15:application',
                  fs: ['at ./index.rsh:167:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)', 'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv30752 = v31715;
                const cv30753 = false;
                const cv30754 = v30754;
                const cv30755 = v30755;
                const cv30756 = v31087;
                const cv30759 = v31802;
                
                v30752 = cv30752;
                v30753 = cv30753;
                v30754 = cv30754;
                v30755 = cv30755;
                v30756 = cv30756;
                v30759 = cv30759;
                
                continue;
                break;
                }
              case 'Some': {
                const v31812 = v31768[1];
                const v31813 = v30754.protoFee;
                const v31814 = v30754.lpFee;
                const v31815 = v30754.totFee;
                const v31816 = v30754.protoAddr;
                const v31817 = v30754.locked;
                const v31830 = {
                  locked: v31817,
                  lpFee: v31814,
                  protoAddr: v31816,
                  protoFee: v31813,
                  totFee: v31815
                  };
                const v31831 = undefined /* Remote */;
                const v31832 = await txn2.getOutput('internal', 'v31831', ctc17, v31831);
                const v31834 = v31832[stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0')];
                const v31843 = stdlib.add(v30759, v31834);
                const v31844 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'), v31834);
                stdlib.assert(v31844, {
                  at: './index.rsh:163:15:application',
                  fs: ['at ./index.rsh:166:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)', 'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
                  msg: 'remote bill check',
                  who: 'Admin'
                  });
                const cv30752 = v31715;
                const cv30753 = false;
                const cv30754 = v30754;
                const cv30755 = v30755;
                const cv30756 = v31087;
                const cv30759 = v31843;
                
                v30752 = cv30752;
                v30753 = cv30753;
                v30754 = cv30754;
                v30755 = cv30755;
                v30756 = cv30756;
                v30759 = cv30759;
                
                continue;
                break;
                }
              }
            break;
            }
          case 'Kill': {
            const v31853 = v31585[1];
            const cv30752 = v31715;
            const cv30753 = true;
            const cv30754 = v30754;
            const cv30755 = v30755;
            const cv30756 = v31087;
            const cv30759 = v30759;
            
            v30752 = cv30752;
            v30753 = cv30753;
            v30754 = cv30754;
            v30755 = cv30755;
            v30756 = cv30756;
            v30759 = cv30759;
            
            continue;
            break;
            }
          case 'NewInfo': {
            const v31861 = v31585[1];
            const v31862 = v31861.locked;
            const v31863 = v31861.lpFee;
            const v31864 = v31861.protoAddr;
            const v31865 = v31861.protoFee;
            const v31866 = v31861.totFee;
            const v31867 = {
              locked: v31862,
              lpFee: v31863,
              protoAddr: v31864,
              protoFee: v31865,
              totFee: v31866
              };
            const cv30752 = v31715;
            const cv30753 = false;
            const cv30754 = v31867;
            const cv30755 = v30755;
            const cv30756 = v31087;
            const cv30759 = v30759;
            
            v30752 = cv30752;
            v30753 = cv30753;
            v30754 = cv30754;
            v30755 = cv30755;
            v30756 = cv30756;
            v30759 = cv30759;
            
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v31876 = v31585[1];
            const cv30752 = v31715;
            const cv30753 = false;
            const cv30754 = v30754;
            const cv30755 = v31876;
            const cv30756 = v31087;
            const cv30759 = v30759;
            
            v30752 = cv30752;
            v30753 = cv30753;
            v30754 = cv30754;
            v30755 = cv30755;
            v30756 = cv30756;
            v30759 = cv30759;
            
            continue;
            break;
            }
          case 'NoOp': {
            const v31884 = v31585[1];
            const cv30752 = v31715;
            const cv30753 = false;
            const cv30754 = v30754;
            const cv30755 = v30755;
            const cv30756 = v31087;
            const cv30759 = v30759;
            
            v30752 = cv30752;
            v30753 = cv30753;
            v30754 = cv30754;
            v30755 = cv30755;
            v30756 = cv30756;
            v30759 = cv30759;
            
            continue;
            break;
            }
          case 'Rewards': {
            const v31892 = v31585[1];
            const v31894 = (stdlib.le(await ctc.getBalance(), v30759) ? stdlib.checkedBigNumberify('./index.rsh:172:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v30759));
            const v31895 = stdlib.add(v31894, v30759);
            const v31899 = stdlib.sub(v31895, v31894);
            ;
            const cv30752 = v31715;
            const cv30753 = false;
            const cv30754 = v30754;
            const cv30755 = v30755;
            const cv30756 = v31087;
            const cv30759 = v31899;
            
            v30752 = cv30752;
            v30753 = cv30753;
            v30754 = cv30754;
            v30755 = cv30755;
            v30756 = cv30756;
            v30759 = cv30759;
            
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_29646': {
        const v31947 = v31086[1];
        undefined /* setApiDetails */;
        const v32022 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '0')];
        const v32025 = stdlib.ctcAddrEq(v32022, v31085);
        stdlib.assert(v32025, {
          at: './index.rsh:183:12:application',
          fs: ['at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
          msg: 'not contract',
          who: 'Admin'
          });
        ;
        const v32338 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '1')];
        const v32339 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '2')];
        const v32344 = v30754.protoFee;
        const v32345 = v30754.lpFee;
        const v32346 = v30754.totFee;
        const v32347 = v30754.protoAddr;
        const v32348 = v30754.locked;
        const v32349 = {
          locked: v32348,
          lpFee: v32345,
          protoAddr: v32347,
          protoFee: v32344,
          totFee: v32346
          };
        await txn2.getOutput('register', 'v32349', ctc9, v32349);
        null;
        const cv30752 = v30752;
        const cv30753 = false;
        const cv30754 = v30754;
        const cv30755 = v30755;
        const cv30756 = v31087;
        const cv30759 = v30759;
        
        v30752 = cv30752;
        v30753 = cv30753;
        v30754 = cv30754;
        v30755 = cv30755;
        v30756 = cv30756;
        v30759 = cv30759;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Triumvir_propose3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Triumvir_propose3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Triumvir_propose3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc2, ctc4]);
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc6], ['lpFee', ctc6], ['totFee', ctc6], ['protoAddr', ctc4], ['locked', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Data({
    Harvest: ctc5,
    Kill: ctc1,
    NewInfo: ctc8,
    NewTriumvirs: ctc9,
    NoOp: ctc1,
    Rewards: ctc4
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc12 = stdlib.T_Object({
    locked: ctc7,
    lpFee: ctc6,
    protoAddr: ctc4,
    protoFee: ctc6,
    totFee: ctc6
    });
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc3, ctc2]);
  const ctc16 = stdlib.T_Data({
    Triumvir_propose0_29646: ctc13,
    Triumvir_support0_29646: ctc14,
    register0_29646: ctc15
    });
  
  
  const [v30740, v30752, v30754, v30755, v30759] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v30837 = ctc.selfAddress();
  const v30839 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_29646" (defined at: ./index.rsh:190:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v30840 = v30839[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v30862;
  switch (v30840[0]) {
    case 'Harvest': {
      const v30863 = v30840[1];
      v30862 = true;
      
      break;
      }
    case 'Kill': {
      const v30864 = v30840[1];
      v30862 = true;
      
      break;
      }
    case 'NewInfo': {
      const v30865 = v30840[1];
      const v30866 = v30865.protoFee;
      const v30867 = v30865.lpFee;
      const v30868 = v30865.totFee;
      const v30869 = stdlib.lt(v30866, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v30870 = stdlib.lt(v30867, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v30871 = v30869 ? v30870 : false;
      const v30872 = stdlib.add(v30867, v30866);
      const v30873 = stdlib.eq(v30868, v30872);
      const v30874 = v30871 ? v30873 : false;
      const v30875 = stdlib.lt(v30868, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v30876 = v30874 ? v30875 : false;
      const v30877 = stdlib.gt(v30868, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v30878 = v30876 ? v30877 : false;
      v30862 = v30878;
      
      break;
      }
    case 'NewTriumvirs': {
      const v30879 = v30840[1];
      v30862 = true;
      
      break;
      }
    case 'NoOp': {
      const v30880 = v30840[1];
      v30862 = true;
      
      break;
      }
    case 'Rewards': {
      const v30881 = v30840[1];
      v30862 = true;
      
      break;
      }
    }
  stdlib.assert(v30862, {
    at: './index.rsh:191:12:application',
    fs: ['at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_29646" (defined at: ./index.rsh:190:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v30882 = ['None', null];
  const v30883 = await stdlib.Array_asyncReduce([v30755], v30882, async([v30885], v30884, v30886) => {
    let v30887;
    switch (v30884[0]) {
      case 'None': {
        const v30888 = v30884[1];
        v30887 = true;
        
        break;
        }
      case 'Some': {
        const v30889 = v30884[1];
        v30887 = false;
        
        break;
        }
      }
    const v30890 = stdlib.addressEq(v30837, v30885);
    const v30891 = v30887 ? v30890 : false;
    const v30892 = ['Some', v30886];
    const v30893 = v30891 ? v30892 : v30884;
    
    return v30893;})
  let v30894;
  switch (v30883[0]) {
    case 'None': {
      const v30895 = v30883[1];
      v30894 = false;
      
      break;
      }
    case 'Some': {
      const v30896 = v30883[1];
      v30894 = true;
      
      break;
      }
    }
  stdlib.assert(v30894, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_29646" (defined at: ./index.rsh:190:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  const v30925 = ['Triumvir_propose0_29646', v30839];
  
  let v31012;
  switch (v30840[0]) {
    case 'Harvest': {
      const v31013 = v30840[1];
      v31012 = true;
      
      break;
      }
    case 'Kill': {
      const v31014 = v30840[1];
      v31012 = true;
      
      break;
      }
    case 'NewInfo': {
      const v31015 = v30840[1];
      const v31016 = v31015.protoFee;
      const v31017 = v31015.lpFee;
      const v31018 = v31015.totFee;
      const v31019 = stdlib.lt(v31016, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v31020 = stdlib.lt(v31017, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v31021 = v31019 ? v31020 : false;
      const v31022 = stdlib.add(v31017, v31016);
      const v31023 = stdlib.eq(v31018, v31022);
      const v31024 = v31021 ? v31023 : false;
      const v31025 = stdlib.lt(v31018, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v31026 = v31024 ? v31025 : false;
      const v31027 = stdlib.gt(v31018, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v31028 = v31026 ? v31027 : false;
      v31012 = v31028;
      
      break;
      }
    case 'NewTriumvirs': {
      const v31029 = v30840[1];
      v31012 = true;
      
      break;
      }
    case 'NoOp': {
      const v31030 = v30840[1];
      v31012 = true;
      
      break;
      }
    case 'Rewards': {
      const v31031 = v30840[1];
      v31012 = true;
      
      break;
      }
    }
  stdlib.assert(v31012, {
    at: './index.rsh:191:12:application',
    fs: ['at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'invalid command',
    who: 'Triumvir_propose'
    });
  const v31033 = await stdlib.Array_asyncReduce([v30755], v30882, async([v31035], v31034, v31036) => {
    let v31037;
    switch (v31034[0]) {
      case 'None': {
        const v31038 = v31034[1];
        v31037 = true;
        
        break;
        }
      case 'Some': {
        const v31039 = v31034[1];
        v31037 = false;
        
        break;
        }
      }
    const v31040 = stdlib.addressEq(v30837, v31035);
    const v31041 = v31037 ? v31040 : false;
    const v31042 = ['Some', v31036];
    const v31043 = v31041 ? v31042 : v31034;
    
    return v31043;})
  let v31044;
  switch (v31033[0]) {
    case 'None': {
      const v31045 = v31033[1];
      v31044 = false;
      
      break;
      }
    case 'Some': {
      const v31046 = v31033[1];
      v31044 = true;
      
      break;
      }
    }
  stdlib.assert(v31044, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v30740, v30752, v30754, v30755, v30759, v30925],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn1;
      
      switch (v31086[0]) {
        case 'Triumvir_propose0_29646': {
          const v31089 = v31086[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          const v31094 = v31089[stdlib.checkedBigNumberify('./index.rsh:190:10:spread', stdlib.UInt_max, '0')];
          const v31115 = ['None', null];
          ;
          const v31191 = await stdlib.Array_asyncReduce([v30755], v31115, async([v31193], v31192, v31194) => {
            let v31195;
            switch (v31192[0]) {
              case 'None': {
                const v31196 = v31192[1];
                v31195 = true;
                
                break;
                }
              case 'Some': {
                const v31197 = v31192[1];
                v31195 = false;
                
                break;
                }
              }
            const v31198 = stdlib.addressEq(v31085, v31193);
            const v31199 = v31195 ? v31198 : false;
            const v31200 = ['Some', v31194];
            const v31201 = v31199 ? v31200 : v31192;
            
            return v31201;})
          const v31205 = stdlib.fromSome(v31191, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
          const v31207 = stdlib.Array_set(v30752, v31205, v31094);
          const v31209 = null;
          const v31210 = await txn1.getOutput('Triumvir_propose', 'v31209', ctc1, v31209);
          
          null;
          const v38222 = v31207;
          const v38224 = v30754;
          const v38225 = v30755;
          const v38227 = v30759;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_29646': {
          const v31518 = v31086[1];
          
          break;
          }
        case 'register0_29646': {
          const v31947 = v31086[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc11, ctc12, ctc9, ctc6, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn1;
  switch (v31086[0]) {
    case 'Triumvir_propose0_29646': {
      const v31089 = v31086[1];
      undefined /* setApiDetails */;
      const v31094 = v31089[stdlib.checkedBigNumberify('./index.rsh:190:10:spread', stdlib.UInt_max, '0')];
      let v31095;
      switch (v31094[0]) {
        case 'Harvest': {
          const v31096 = v31094[1];
          v31095 = true;
          
          break;
          }
        case 'Kill': {
          const v31097 = v31094[1];
          v31095 = true;
          
          break;
          }
        case 'NewInfo': {
          const v31098 = v31094[1];
          const v31099 = v31098.protoFee;
          const v31100 = v31098.lpFee;
          const v31101 = v31098.totFee;
          const v31102 = stdlib.lt(v31099, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v31103 = stdlib.lt(v31100, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v31104 = v31102 ? v31103 : false;
          const v31105 = stdlib.add(v31100, v31099);
          const v31106 = stdlib.eq(v31101, v31105);
          const v31107 = v31104 ? v31106 : false;
          const v31108 = stdlib.lt(v31101, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v31109 = v31107 ? v31108 : false;
          const v31110 = stdlib.gt(v31101, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v31111 = v31109 ? v31110 : false;
          v31095 = v31111;
          
          break;
          }
        case 'NewTriumvirs': {
          const v31112 = v31094[1];
          v31095 = true;
          
          break;
          }
        case 'NoOp': {
          const v31113 = v31094[1];
          v31095 = true;
          
          break;
          }
        case 'Rewards': {
          const v31114 = v31094[1];
          v31095 = true;
          
          break;
          }
        }
      stdlib.assert(v31095, {
        at: './index.rsh:191:12:application',
        fs: ['at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v31115 = ['None', null];
      const v31116 = await stdlib.Array_asyncReduce([v30755], v31115, async([v31118], v31117, v31119) => {
        let v31120;
        switch (v31117[0]) {
          case 'None': {
            const v31121 = v31117[1];
            v31120 = true;
            
            break;
            }
          case 'Some': {
            const v31122 = v31117[1];
            v31120 = false;
            
            break;
            }
          }
        const v31123 = stdlib.addressEq(v31085, v31118);
        const v31124 = v31120 ? v31123 : false;
        const v31125 = ['Some', v31119];
        const v31126 = v31124 ? v31125 : v31117;
        
        return v31126;})
      let v31127;
      switch (v31116[0]) {
        case 'None': {
          const v31128 = v31116[1];
          v31127 = false;
          
          break;
          }
        case 'Some': {
          const v31129 = v31116[1];
          v31127 = true;
          
          break;
          }
        }
      stdlib.assert(v31127, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:190:35:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:190:35:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      ;
      let v31170;
      switch (v31094[0]) {
        case 'Harvest': {
          const v31171 = v31094[1];
          v31170 = true;
          
          break;
          }
        case 'Kill': {
          const v31172 = v31094[1];
          v31170 = true;
          
          break;
          }
        case 'NewInfo': {
          const v31173 = v31094[1];
          const v31174 = v31173.protoFee;
          const v31175 = v31173.lpFee;
          const v31176 = v31173.totFee;
          const v31177 = stdlib.lt(v31174, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v31178 = stdlib.lt(v31175, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v31179 = v31177 ? v31178 : false;
          const v31180 = stdlib.add(v31175, v31174);
          const v31181 = stdlib.eq(v31176, v31180);
          const v31182 = v31179 ? v31181 : false;
          const v31183 = stdlib.lt(v31176, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v31184 = v31182 ? v31183 : false;
          const v31185 = stdlib.gt(v31176, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v31186 = v31184 ? v31185 : false;
          v31170 = v31186;
          
          break;
          }
        case 'NewTriumvirs': {
          const v31187 = v31094[1];
          v31170 = true;
          
          break;
          }
        case 'NoOp': {
          const v31188 = v31094[1];
          v31170 = true;
          
          break;
          }
        case 'Rewards': {
          const v31189 = v31094[1];
          v31170 = true;
          
          break;
          }
        }
      stdlib.assert(v31170, {
        at: './index.rsh:191:12:application',
        fs: ['at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)'],
        msg: 'invalid command',
        who: 'Triumvir_propose'
        });
      const v31191 = await stdlib.Array_asyncReduce([v30755], v31115, async([v31193], v31192, v31194) => {
        let v31195;
        switch (v31192[0]) {
          case 'None': {
            const v31196 = v31192[1];
            v31195 = true;
            
            break;
            }
          case 'Some': {
            const v31197 = v31192[1];
            v31195 = false;
            
            break;
            }
          }
        const v31198 = stdlib.addressEq(v31085, v31193);
        const v31199 = v31195 ? v31198 : false;
        const v31200 = ['Some', v31194];
        const v31201 = v31199 ? v31200 : v31192;
        
        return v31201;})
      let v31202;
      switch (v31191[0]) {
        case 'None': {
          const v31203 = v31191[1];
          v31202 = false;
          
          break;
          }
        case 'Some': {
          const v31204 = v31191[1];
          v31202 = true;
          
          break;
          }
        }
      stdlib.assert(v31202, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:192:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_propose'
        });
      const v31205 = stdlib.fromSome(v31191, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v31207 = stdlib.Array_set(v30752, v31205, v31094);
      const v31209 = null;
      const v31210 = await txn1.getOutput('Triumvir_propose', 'v31209', ctc1, v31209);
      if (v30329) {
        stdlib.protect(ctc1, await interact.out(v31089, v31210), {
          at: './index.rsh:190:11:application',
          fs: ['at ./index.rsh:190:11:application call to [unknown function] (defined at: ./index.rsh:190:11:function exp)', 'at ./index.rsh:195:10:application call to "k" (defined at: ./index.rsh:194:23:function exp)', 'at ./index.rsh:194:23:application call to [unknown function] (defined at: ./index.rsh:194:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v38222 = v31207;
      const v38224 = v30754;
      const v38225 = v30755;
      const v38227 = v30759;
      return;
      
      break;
      }
    case 'Triumvir_support0_29646': {
      const v31518 = v31086[1];
      return;
      break;
      }
    case 'register0_29646': {
      const v31947 = v31086[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Triumvir_support3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Triumvir_support3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Triumvir_support3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc2, ctc4]);
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc6], ['lpFee', ctc6], ['totFee', ctc6], ['protoAddr', ctc4], ['locked', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Data({
    Harvest: ctc5,
    Kill: ctc1,
    NewInfo: ctc8,
    NewTriumvirs: ctc9,
    NoOp: ctc1,
    Rewards: ctc4
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc12 = stdlib.T_Object({
    locked: ctc7,
    lpFee: ctc6,
    protoAddr: ctc4,
    protoFee: ctc6,
    totFee: ctc6
    });
  const ctc13 = stdlib.T_Tuple([ctc6, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc3, ctc2]);
  const ctc16 = stdlib.T_Data({
    Triumvir_propose0_29646: ctc14,
    Triumvir_support0_29646: ctc13,
    register0_29646: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc6], ['B', ctc6]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc18]);
  
  
  const [v30740, v30752, v30754, v30755, v30759] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v30927 = ctc.selfAddress();
  const v30929 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v30930 = v30929[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v30931 = v30929[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v30954 = stdlib.lt(v30930, stdlib.checkedBigNumberify('./index.rsh:201:29:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v30954, {
    at: './index.rsh:201:12:application',
    fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'illegal idx',
    who: 'Triumvir_support'
    });
  const v30955 = ['None', null];
  const v30956 = await stdlib.Array_asyncReduce([v30755], v30955, async([v30958], v30957, v30959) => {
    let v30960;
    switch (v30957[0]) {
      case 'None': {
        const v30961 = v30957[1];
        v30960 = true;
        
        break;
        }
      case 'Some': {
        const v30962 = v30957[1];
        v30960 = false;
        
        break;
        }
      }
    const v30963 = stdlib.addressEq(v30927, v30958);
    const v30964 = v30960 ? v30963 : false;
    const v30965 = ['Some', v30959];
    const v30966 = v30964 ? v30965 : v30957;
    
    return v30966;})
  let v30967;
  switch (v30956[0]) {
    case 'None': {
      const v30968 = v30956[1];
      v30967 = false;
      
      break;
      }
    case 'Some': {
      const v30969 = v30956[1];
      v30967 = true;
      
      break;
      }
    }
  stdlib.assert(v30967, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v30970 = stdlib.fromSome(v30956, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
  const v30971 = stdlib.eq(v30930, v30970);
  const v30972 = v30971 ? false : true;
  stdlib.assert(v30972, {
    at: './index.rsh:203:12:application',
    fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  const v30974 = v30752[v30930];
  const v30975 = stdlib.digest(ctc14, [v30931]);
  const v30976 = stdlib.digest(ctc14, [v30974]);
  const v30977 = stdlib.digestEq(v30975, v30976);
  stdlib.assert(v30977, {
    at: './index.rsh:205:12:application',
    fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_29646" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'command switched',
    who: 'Triumvir_support'
    });
  const v31008 = ['Triumvir_support0_29646', v30929];
  
  const v31055 = await stdlib.Array_asyncReduce([v30755], v30955, async([v31057], v31056, v31058) => {
    let v31059;
    switch (v31056[0]) {
      case 'None': {
        const v31060 = v31056[1];
        v31059 = true;
        
        break;
        }
      case 'Some': {
        const v31061 = v31056[1];
        v31059 = false;
        
        break;
        }
      }
    const v31062 = stdlib.addressEq(v30927, v31057);
    const v31063 = v31059 ? v31062 : false;
    const v31064 = ['Some', v31058];
    const v31065 = v31063 ? v31064 : v31056;
    
    return v31065;})
  let v31066;
  switch (v31055[0]) {
    case 'None': {
      const v31067 = v31055[1];
      v31066 = false;
      
      break;
      }
    case 'Some': {
      const v31068 = v31055[1];
      v31066 = true;
      
      break;
      }
    }
  stdlib.assert(v31066, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not triumvir',
    who: 'Triumvir_support'
    });
  const v31069 = stdlib.fromSome(v31055, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
  const v31070 = stdlib.eq(v30930, v31069);
  const v31071 = v31070 ? false : true;
  stdlib.assert(v31071, {
    at: './index.rsh:203:12:application',
    fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'cannot support self',
    who: 'Triumvir_support'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v30740, v30752, v30754, v30755, v30759, v31008],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn1;
      
      switch (v31086[0]) {
        case 'Triumvir_propose0_29646': {
          const v31089 = v31086[1];
          
          break;
          }
        case 'Triumvir_support0_29646': {
          const v31518 = v31086[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          const v31563 = v31518[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
          const v31585 = v30752[v31563];
          ;
          const v31715 = stdlib.Array_set(v30752, v31563, v30740);
          const v31718 = null;
          const v31719 = await txn1.getOutput('Triumvir_support', 'v31718', ctc1, v31718);
          
          null;
          switch (v31585[0]) {
            case 'Harvest': {
              const v31766 = v31585[1];
              const v31767 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '0')];
              const v31768 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '1')];
              const v31769 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '2')];
              const v31770 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '3')];
              switch (v31768[0]) {
                case 'None': {
                  const v31771 = v31768[1];
                  const v31772 = v30754.protoFee;
                  const v31773 = v30754.lpFee;
                  const v31774 = v30754.totFee;
                  const v31775 = v30754.protoAddr;
                  const v31776 = v30754.locked;
                  const v31789 = {
                    locked: v31776,
                    lpFee: v31773,
                    protoAddr: v31775,
                    protoFee: v31772,
                    totFee: v31774
                    };
                  const v31790 = [stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                    accs: [v31770],
                    bills: stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('./index.rsh:160:40:application', stdlib.UInt_max, '2'),
                    kind: 'remote',
                    obj: v31767,
                    pays: stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'),
                    toks: [v31769]
                    })), undefined)];
                  const v31791 = await txn1.getOutput('internal', 'v31790', ctc19, v31790);
                  const v31793 = v31791[stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0')];
                  const v31802 = stdlib.add(v30759, v31793);
                  const v38292 = v31715;
                  const v38294 = v30754;
                  const v38295 = v30755;
                  const v38297 = v31802;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Some': {
                  const v31812 = v31768[1];
                  const v31813 = v30754.protoFee;
                  const v31814 = v30754.lpFee;
                  const v31815 = v30754.totFee;
                  const v31816 = v30754.protoAddr;
                  const v31817 = v30754.locked;
                  const v31830 = {
                    locked: v31817,
                    lpFee: v31814,
                    protoAddr: v31816,
                    protoFee: v31813,
                    totFee: v31815
                    };
                  const v31831 = [stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                    accs: [v31770],
                    bills: stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('./index.rsh:160:40:application', stdlib.UInt_max, '3'),
                    kind: 'remote',
                    obj: v31767,
                    pays: stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'),
                    toks: [v31812, v31769]
                    })), undefined)];
                  const v31832 = await txn1.getOutput('internal', 'v31831', ctc19, v31831);
                  const v31834 = v31832[stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0')];
                  const v31843 = stdlib.add(v30759, v31834);
                  const v38299 = v31715;
                  const v38301 = v30754;
                  const v38302 = v30755;
                  const v38304 = v31843;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                }
              break;
              }
            case 'Kill': {
              const v31853 = v31585[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v31861 = v31585[1];
              const v31862 = v31861.locked;
              const v31863 = v31861.lpFee;
              const v31864 = v31861.protoAddr;
              const v31865 = v31861.protoFee;
              const v31866 = v31861.totFee;
              const v31867 = {
                locked: v31862,
                lpFee: v31863,
                protoAddr: v31864,
                protoFee: v31865,
                totFee: v31866
                };
              const v38313 = v31715;
              const v38315 = v31867;
              const v38316 = v30755;
              const v38318 = v30759;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v31876 = v31585[1];
              const v38320 = v31715;
              const v38322 = v30754;
              const v38323 = v31876;
              const v38325 = v30759;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v31884 = v31585[1];
              const v38327 = v31715;
              const v38329 = v30754;
              const v38330 = v30755;
              const v38332 = v30759;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v31892 = v31585[1];
              const v31894 = (stdlib.le(await ctc.getBalance(), v30759) ? stdlib.checkedBigNumberify('./index.rsh:172:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v30759));
              const v31895 = stdlib.add(v31894, v30759);
              const v31899 = stdlib.sub(v31895, v31894);
              sim_r.txns.push({
                kind: 'from',
                to: v31892,
                tok: undefined /* Nothing */
                });
              const v38334 = v31715;
              const v38336 = v30754;
              const v38337 = v30755;
              const v38339 = v31899;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_29646': {
          const v31947 = v31086[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc11, ctc12, ctc9, ctc6, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn1;
  switch (v31086[0]) {
    case 'Triumvir_propose0_29646': {
      const v31089 = v31086[1];
      return;
      break;
      }
    case 'Triumvir_support0_29646': {
      const v31518 = v31086[1];
      undefined /* setApiDetails */;
      const v31563 = v31518[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
      const v31564 = v31518[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
      const v31565 = stdlib.lt(v31563, stdlib.checkedBigNumberify('./index.rsh:201:29:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v31565, {
        at: './index.rsh:201:12:application',
        fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'illegal idx',
        who: 'Triumvir_support'
        });
      const v31566 = ['None', null];
      const v31567 = await stdlib.Array_asyncReduce([v30755], v31566, async([v31569], v31568, v31570) => {
        let v31571;
        switch (v31568[0]) {
          case 'None': {
            const v31572 = v31568[1];
            v31571 = true;
            
            break;
            }
          case 'Some': {
            const v31573 = v31568[1];
            v31571 = false;
            
            break;
            }
          }
        const v31574 = stdlib.addressEq(v31085, v31569);
        const v31575 = v31571 ? v31574 : false;
        const v31576 = ['Some', v31570];
        const v31577 = v31575 ? v31576 : v31568;
        
        return v31577;})
      let v31578;
      switch (v31567[0]) {
        case 'None': {
          const v31579 = v31567[1];
          v31578 = false;
          
          break;
          }
        case 'Some': {
          const v31580 = v31567[1];
          v31578 = true;
          
          break;
          }
        }
      stdlib.assert(v31578, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v31581 = stdlib.fromSome(v31567, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v31582 = stdlib.eq(v31563, v31581);
      const v31583 = v31582 ? false : true;
      stdlib.assert(v31583, {
        at: './index.rsh:203:12:application',
        fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v31585 = v30752[v31563];
      const v31586 = stdlib.digest(ctc14, [v31564]);
      const v31587 = stdlib.digest(ctc14, [v31585]);
      const v31588 = stdlib.digestEq(v31586, v31587);
      stdlib.assert(v31588, {
        at: './index.rsh:205:12:application',
        fs: ['at ./index.rsh:200:41:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:200:41:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'command switched',
        who: 'Triumvir_support'
        });
      ;
      const v31691 = await stdlib.Array_asyncReduce([v30755], v31566, async([v31693], v31692, v31694) => {
        let v31695;
        switch (v31692[0]) {
          case 'None': {
            const v31696 = v31692[1];
            v31695 = true;
            
            break;
            }
          case 'Some': {
            const v31697 = v31692[1];
            v31695 = false;
            
            break;
            }
          }
        const v31698 = stdlib.addressEq(v31085, v31693);
        const v31699 = v31695 ? v31698 : false;
        const v31700 = ['Some', v31694];
        const v31701 = v31699 ? v31700 : v31692;
        
        return v31701;})
      let v31702;
      switch (v31691[0]) {
        case 'None': {
          const v31703 = v31691[1];
          v31702 = false;
          
          break;
          }
        case 'Some': {
          const v31704 = v31691[1];
          v31702 = true;
          
          break;
          }
        }
      stdlib.assert(v31702, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:202:30:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
        msg: 'not triumvir',
        who: 'Triumvir_support'
        });
      const v31705 = stdlib.fromSome(v31691, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v31706 = stdlib.eq(v31563, v31705);
      const v31707 = v31706 ? false : true;
      stdlib.assert(v31707, {
        at: './index.rsh:203:12:application',
        fs: ['at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
        msg: 'cannot support self',
        who: 'Triumvir_support'
        });
      const v31715 = stdlib.Array_set(v30752, v31563, v30740);
      const v31718 = null;
      const v31719 = await txn1.getOutput('Triumvir_support', 'v31718', ctc1, v31718);
      if (v30329) {
        stdlib.protect(ctc1, await interact.out(v31518, v31719), {
          at: './index.rsh:200:11:application',
          fs: ['at ./index.rsh:200:11:application call to [unknown function] (defined at: ./index.rsh:200:11:function exp)', 'at ./index.rsh:208:10:application call to "k" (defined at: ./index.rsh:207:23:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v31585[0]) {
        case 'Harvest': {
          const v31766 = v31585[1];
          const v31767 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '0')];
          const v31768 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '1')];
          const v31769 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '2')];
          const v31770 = v31766[stdlib.checkedBigNumberify('./index.rsh:156:19:array', stdlib.UInt_max, '3')];
          switch (v31768[0]) {
            case 'None': {
              const v31771 = v31768[1];
              const v31772 = v30754.protoFee;
              const v31773 = v30754.lpFee;
              const v31774 = v30754.totFee;
              const v31775 = v30754.protoAddr;
              const v31776 = v30754.locked;
              const v31789 = {
                locked: v31776,
                lpFee: v31773,
                protoAddr: v31775,
                protoFee: v31772,
                totFee: v31774
                };
              const v31790 = undefined /* Remote */;
              const v31791 = await txn1.getOutput('internal', 'v31790', ctc19, v31790);
              const v31793 = v31791[stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0')];
              const v31802 = stdlib.add(v30759, v31793);
              const v31803 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'), v31793);
              stdlib.assert(v31803, {
                at: './index.rsh:163:15:application',
                fs: ['at ./index.rsh:167:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)', 'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v38292 = v31715;
              const v38294 = v30754;
              const v38295 = v30755;
              const v38297 = v31802;
              return;
              
              break;
              }
            case 'Some': {
              const v31812 = v31768[1];
              const v31813 = v30754.protoFee;
              const v31814 = v30754.lpFee;
              const v31815 = v30754.totFee;
              const v31816 = v30754.protoAddr;
              const v31817 = v30754.locked;
              const v31830 = {
                locked: v31817,
                lpFee: v31814,
                protoAddr: v31816,
                protoFee: v31813,
                totFee: v31815
                };
              const v31831 = undefined /* Remote */;
              const v31832 = await txn1.getOutput('internal', 'v31831', ctc19, v31831);
              const v31834 = v31832[stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0')];
              const v31843 = stdlib.add(v30759, v31834);
              const v31844 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:163:15:application', stdlib.UInt_max, '0'), v31834);
              stdlib.assert(v31844, {
                at: './index.rsh:163:15:application',
                fs: ['at ./index.rsh:166:26:application call to "go" (defined at: ./index.rsh:158:30:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:156:46:function exp)', 'at ./index.rsh:152:45:application call to [unknown function] (defined at: ./index.rsh:152:45:function exp)', 'at ./index.rsh:210:57:application call to "evalCommand" (defined at: ./index.rsh:152:33:function exp)', 'at ./index.rsh:207:23:application call to [unknown function] (defined at: ./index.rsh:207:23:function exp)'],
                msg: 'remote bill check',
                who: 'Triumvir_support'
                });
              const v38299 = v31715;
              const v38301 = v30754;
              const v38302 = v30755;
              const v38304 = v31843;
              return;
              
              break;
              }
            }
          break;
          }
        case 'Kill': {
          const v31853 = v31585[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v31861 = v31585[1];
          const v31862 = v31861.locked;
          const v31863 = v31861.lpFee;
          const v31864 = v31861.protoAddr;
          const v31865 = v31861.protoFee;
          const v31866 = v31861.totFee;
          const v31867 = {
            locked: v31862,
            lpFee: v31863,
            protoAddr: v31864,
            protoFee: v31865,
            totFee: v31866
            };
          const v38313 = v31715;
          const v38315 = v31867;
          const v38316 = v30755;
          const v38318 = v30759;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v31876 = v31585[1];
          const v38320 = v31715;
          const v38322 = v30754;
          const v38323 = v31876;
          const v38325 = v30759;
          return;
          
          break;
          }
        case 'NoOp': {
          const v31884 = v31585[1];
          const v38327 = v31715;
          const v38329 = v30754;
          const v38330 = v30755;
          const v38332 = v30759;
          return;
          
          break;
          }
        case 'Rewards': {
          const v31892 = v31585[1];
          const v31894 = (stdlib.le(await ctc.getBalance(), v30759) ? stdlib.checkedBigNumberify('./index.rsh:172:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v30759));
          const v31895 = stdlib.add(v31894, v30759);
          const v31899 = stdlib.sub(v31895, v31894);
          ;
          const v38334 = v31715;
          const v38336 = v30754;
          const v38337 = v30755;
          const v38339 = v31899;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_29646': {
      const v31947 = v31086[1];
      return;
      break;
      }
    }
  
  
  };
export async function _register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc2, ctc4]);
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc6], ['lpFee', ctc6], ['totFee', ctc6], ['protoAddr', ctc4], ['locked', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Data({
    Harvest: ctc5,
    Kill: ctc1,
    NewInfo: ctc8,
    NewTriumvirs: ctc9,
    NoOp: ctc1,
    Rewards: ctc4
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc12 = stdlib.T_Object({
    locked: ctc7,
    lpFee: ctc6,
    protoAddr: ctc4,
    protoFee: ctc6,
    totFee: ctc6
    });
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc10]);
  const ctc16 = stdlib.T_Data({
    Triumvir_propose0_29646: ctc14,
    Triumvir_support0_29646: ctc15,
    register0_29646: ctc13
    });
  
  
  const [v30740, v30752, v30754, v30755, v30759] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc10, ctc11, ctc12, ctc9, ctc6]);
  const v30812 = ctc.selfAddress();
  const v30814 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)', 'at ./index.rsh:134:19:application call to "runregister0_29646" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v30815 = v30814[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v30823 = stdlib.ctcAddrEq(v30815, v30812);
  stdlib.assert(v30823, {
    at: './index.rsh:183:12:application',
    fs: ['at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)', 'at ./index.rsh:134:19:application call to "runregister0_29646" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v30835 = ['register0_29646', v30814];
  
  const txn1 = await (ctc.sendrecv({
    args: [v30740, v30752, v30754, v30755, v30759, v30835],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn1;
      
      switch (v31086[0]) {
        case 'Triumvir_propose0_29646': {
          const v31089 = v31086[1];
          
          break;
          }
        case 'Triumvir_support0_29646': {
          const v31518 = v31086[1];
          
          break;
          }
        case 'register0_29646': {
          const v31947 = v31086[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v32022 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '0')];
          ;
          const v32338 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '1')];
          const v32339 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '2')];
          const v32344 = v30754.protoFee;
          const v32345 = v30754.lpFee;
          const v32346 = v30754.totFee;
          const v32347 = v30754.protoAddr;
          const v32348 = v30754.locked;
          const v32349 = {
            locked: v32348,
            lpFee: v32345,
            protoAddr: v32347,
            protoFee: v32344,
            totFee: v32346
            };
          const v32350 = await txn1.getOutput('register', 'v32349', ctc8, v32349);
          
          null;
          const v38404 = v30752;
          const v38406 = v30754;
          const v38407 = v30755;
          const v38409 = v30759;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc11, ctc12, ctc9, ctc6, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v31086], secs: v31088, time: v31087, didSend: v30329, from: v31085 } = txn1;
  switch (v31086[0]) {
    case 'Triumvir_propose0_29646': {
      const v31089 = v31086[1];
      return;
      break;
      }
    case 'Triumvir_support0_29646': {
      const v31518 = v31086[1];
      return;
      break;
      }
    case 'register0_29646': {
      const v31947 = v31086[1];
      undefined /* setApiDetails */;
      const v32022 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '0')];
      const v32025 = stdlib.ctcAddrEq(v32022, v31085);
      stdlib.assert(v32025, {
        at: './index.rsh:183:12:application',
        fs: ['at ./index.rsh:181:49:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:181:49:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v32338 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '1')];
      const v32339 = v31947[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '2')];
      const v32344 = v30754.protoFee;
      const v32345 = v30754.lpFee;
      const v32346 = v30754.totFee;
      const v32347 = v30754.protoAddr;
      const v32348 = v30754.locked;
      const v32349 = {
        locked: v32348,
        lpFee: v32345,
        protoAddr: v32347,
        protoFee: v32344,
        totFee: v32346
        };
      const v32350 = await txn1.getOutput('register', 'v32349', ctc8, v32349);
      if (v30329) {
        stdlib.protect(ctc1, await interact.out(v31947, v32350), {
          at: './index.rsh:181:11:application',
          fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)', 'at ./index.rsh:185:10:application call to "k" (defined at: ./index.rsh:184:23:function exp)', 'at ./index.rsh:184:23:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v38404 = v30752;
      const v38406 = v30754;
      const v38407 = v30755;
      const v38409 = v30759;
      return;
      
      break;
      }
    }
  
  
  };
export async function Triumvir_propose(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Triumvir_propose expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Triumvir_propose expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Triumvir_propose3(ctcTop, interact);}
  };
export async function Triumvir_support(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Triumvir_support3(ctcTop, interact);}
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _register3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`, `Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`]
    },
  appApproval: `BiAVAAEDYSAFAmQGCKMCEATMms7XBMWA36QO6JToygSEAzm9A2AJJggBAQABAAECAQMBBAVhcHBJRAQomkRuIjUAMRhBCRgpZEkiWzUBSSEJWzUCIQtbNQg2GgAXSUEAtyI1BCM1BkkhDQxAAC9JIQ4MQAAUIQ4SRDYaATX/KjT/UCEJr1BCAKchDRJENhoBNhoCUDX/KDT/UEIAk0khDwxAABwhDxJENhoBNhoCUDYaA1A1/ys0/1CBUK9QQgBwgfa70OUBEkQ0ASQSRCpkKGRQK2RQJwRkUCcFZFBJNQMhECERWDX/NAMhEiETWDQDJSEKWFA0/1cpCDT/VwEIUDT/VzEIUDT/VwkgUDT/VwABUFA1B0IIPzYaAhc1BDYaAzYaARdJIQYMQAaSIQYSRCQ0ARJENARJIhJMNAISEUQqZChkUCtkUCcEZFAnBWRQSTUDSUpJVwBhNf8lIQpYNf4hECERWDX9IRIhE1g1/IGdBFs1+0k1BTX6gASi6qESNPpQsDT6IlVJIwxAA/1JIQYMQACLIQYSRDT6VwEZNfU09SJbNfQnBjT0FlADMQASRIAIAAAAAAAAfl00/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUFCwNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVA1B4AEul39MzT0FlA09VcICVA09VcRCFCwNP80/iI0/TT8MgY0+0IGf0g0+lcBaTX1sSKyASEIshA0CLIYszT1IltJNfQkDEQhFK9JNfM18iI18TT8IQQ08QshBFg18DTyIlVAAAYjNe9CAAYiNe9CAAA08ig08RZQNO8xADTwEhBNNfI08SMISTXxJAxA/8M08iJVQAAGIjXxQgAGIzXxQgAANPFENPQiNPJJNfAjWzTwIlVNE0Q0/iU09AslWDXwNPVXCGEBNPABEkQ08zXvIjXuNPwhBDTuCyEEWDXtNO8iVUAABiM17EIABiI17EIAADTvKDTuFlA07DEANO0SEE017zTuIwhJNe4kDED/wzTvIlVAAAYiNe5CAAYjNe5CAAA07kQ09CI070k17SNbNO0iVU0TRDT+IiU09AtSNP9QNP4lSTT0CwghClJQNe2ACAAAAAAAAHvmsCk1B4AEoiDkRDEAUDT0FlA08FCwNPAiVUkkDEAAdEkhDAxAAFVJIQUMQAA9IQUSRDTwVwEgNewyCmAyCngJNPsJNeuxIrIBNOuyCCOyEDTssgezNP807SI0/TT8MgY06zT7CDTrCUIE5Eg0/zTtIjT9NPwyBjT7QgTTSDTwVwFgNew0/zTtIjT9NOwyBjT7QgS7SSMMQABLSSEGDEAAM0g08FcBOTXsNP807SI07Fc4ATTsVwgIUDTsVxggUDTsVwAIUDTsVxAIUDT8MgY0+0IEe0g0/zTtIzT9NPwyBjT7QgRqSDTwVwE5STXsIls16zTsgRFbNeo07FcZIDXpNOxXCAlJNegiVUAAkicGNOsWUAM15jIKYDIKeAkWNeWxIrIBIQiyEDTrshgnB7IaNOlJshyyGjT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQsho06rIwszIKYDIKeAk05RcJFrcAPlcEAFA154AIAAAAAAAAfC4051CwNOdJNeYiWzXlIjTlEkQ0/zTtIjT9NPwyBjT7NOUIQgOwNOgjWzXnJwY06xZQAzXlMgpgMgp4CRY15LEisgEhCLIQNOuyGCcHsho06UmyHLIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTnsjA06rIwszIKYDIKeAk05BcJFrcAPlcEAFA15oAIAAAAAAAAfFc05lCwNOZJNeUiWzXkIjTkEkQ0/zTtIjT9NPwyBjT7NOQIQgMUSDT6VwFhNfU09Uk19CJVSSQMQAAmSSEMDEAAGEkhBQxAAAohBRJEIzXzQgBoSCM180IAYUgjNfNCAFpJIwxAAE1JIQYMQAA/SDT0VwE5STXyIls18TTyIQlbNfA08iELWzXvNPEhBww08CEHDBA07zTwNPEIEhA07yEHDBA07yINEDXzQgAOSCM180IAB0gjNfNCAAA080QhFK9JNfI18SI18DT8IQQ08AshBFg17zTxIlVAAAYjNe5CAAYiNe5CAAA08Sg08BZQNO4xADTvEhBNNfE08CMISTXwJAxA/8M08SJVQAAGIjXwQgAGIzXwQgAANPBENPQiVUkkDEAAJkkhDAxAABhJIQUMQAAKIQUSRCM170IAaEgjNe9CAGFIIzXvQgBaSSMMQABNSSEGDEAAP0g09FcBOUk17iJbNe007iEJWzXsNO4hC1s16zTtIQcMNOwhBwwQNOs07DTtCBIQNOshBwwQNOsiDRA170IADkgjNe9CAAdIIzXvQgAANO9ENPI17iI17TT8IQQ07QshBFg17DTuIlVAAAYjNetCAAYiNetCAAA07ig07RZQNOsxADTsEhBNNe407SMISTXtJAxA/8M07iJVQAAGIjXtQgAGIzXtQgAANO1EgAgAAAAAAAB56bApNQeABO32BQMxAFA09FCwNP80/iIlIjTuSTXsI1s07CJVTQtSNPRQNP4lSSI07kk17CNbNOwiVU0LCCEKUlAiNP00/DIGNPtCAOEiEkSBwJoMiAGjsSKyASEIshAishiABgYxADIJErIegAEGsh+ztD01CCI0ARJENARJIhJMNAISEURJNQU1/4AEMirrWTT/ULCAYQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJNf5JSVA0/lAigAkAAAAAAAAAABkyClCACAAAAAAAAAAFUIAIAAAAAAAAAB5QNP8yBiJCAAA1/zX+Nf01/DX7Nfo1+TT7QQADQgBFNPk0+lA0/FA0/VA0/xZQKksBVwB/ZyhLAVd/f2crSwFX/n9nJwRLAYH9AoF/WGcnBUsBgfwDgSlYZ0gkNQEyBjUCQgAtMRkhBRJEsSKyASEIshA0CLIYIQWyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQIiNQhC/7w0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: {
    api_Triumvir_support: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 549,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:163:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "internalType": "address payable[3]",
                "name": "v30734",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "Propose",
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
            "internalType": "enum _enum_T1",
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
        "indexed": false,
        "internalType": "struct T1",
        "name": "v1",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v2",
        "type": "address"
      }
    ],
    "name": "Register",
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
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v2",
        "type": "tuple"
      }
    ],
    "name": "Support",
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
                "internalType": "address payable[3]",
                "name": "v30734",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_propose0_29646",
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
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_support0_29646",
                    "type": "tuple"
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
                            "internalType": "enum _enum_T1",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_register0_29646",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v31086",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v31209",
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
    "name": "_reach_oe_v31718",
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
                "internalType": "struct T19",
                "name": "elem0",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v31790",
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
                "internalType": "struct T19",
                "name": "elem0",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v31831",
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
        "internalType": "struct T3",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v32349",
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
            "internalType": "address payable[3]",
            "name": "triumvirs",
            "type": "address[3]"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T4",
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
                        "internalType": "enum _enum_T1",
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
                    "internalType": "struct T1",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem3",
                    "type": "address"
                  }
                ],
                "internalType": "struct T2",
                "name": "_Harvest",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "_Kill",
                "type": "bool"
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
                "internalType": "struct T3",
                "name": "_NewInfo",
                "type": "tuple"
              },
              {
                "internalType": "address payable[3]",
                "name": "_NewTriumvirs",
                "type": "address[3]"
              },
              {
                "internalType": "bool",
                "name": "_NoOp",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "_Rewards",
                "type": "address"
              }
            ],
            "internalType": "struct T4[3]",
            "name": "cmds",
            "type": "tuple[3]"
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
            "internalType": "struct T3",
            "name": "protoInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
        "components": [
          {
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "internalType": "struct T4",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Triumvir_propose",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
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
                    "internalType": "enum _enum_T1",
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
                "internalType": "struct T1",
                "name": "elem1",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "elem3",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "_Harvest",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_Kill",
            "type": "bool"
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
            "internalType": "struct T3",
            "name": "_NewInfo",
            "type": "tuple"
          },
          {
            "internalType": "address payable[3]",
            "name": "_NewTriumvirs",
            "type": "address[3]"
          },
          {
            "internalType": "bool",
            "name": "_NoOp",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Rewards",
            "type": "address"
          }
        ],
        "internalType": "struct T4",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "Triumvir_support",
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
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_propose0_29646",
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
                            "internalType": "enum _enum_T4",
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
                                    "internalType": "enum _enum_T1",
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
                                "internalType": "struct T1",
                                "name": "elem1",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem3",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_Harvest",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Kill",
                            "type": "bool"
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
                            "internalType": "struct T3",
                            "name": "_NewInfo",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable[3]",
                            "name": "_NewTriumvirs",
                            "type": "address[3]"
                          },
                          {
                            "internalType": "bool",
                            "name": "_NoOp",
                            "type": "bool"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_Rewards",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Triumvir_support0_29646",
                    "type": "tuple"
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
                            "internalType": "enum _enum_T1",
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
                        "internalType": "struct T1",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_register0_29646",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v31086",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
        "name": "_a1",
        "type": "tuple"
      },
      {
        "internalType": "address payable",
        "name": "_a2",
        "type": "address"
      }
    ],
    "name": "register",
    "outputs": [
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
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003c4738038062003c47833981016040819052620000269162000615565b60008055436003556200003862000213565b7fe5d35ee1d5d0380ec4bb3893af49ad0266757898dc8e4981d86f4fcd3a980e5533836040516200006b929190620006ff565b60405180910390a162000081341560086200013e565b8051600490528051600060a0909101819052815160208084018051929092528351825182015283519151604090810192909252818401805193909352825160199101528151309101528051600560609091015251601e608090910152620000e76200026d565b81518151526020808301518183018051919091528051600090830181905260408086015183519091015291850151518151606001528051436080909101525160a00152620001358162000168565b5050506200095a565b81620001645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019257600080805560018190556200018f9060029062000291565b50565b6200019c620002d0565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551620001e89183910162000863565b604051602081830303815290604052600290805190602001906200020e9291906200033e565b505050565b604051806060016040528062000228620003cd565b81526020016200023762000459565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b60405180604001604052806200028262000489565b8152602001620002686200049e565b5080546200029f906200091d565b6000825580601f10620002b0575050565b601f0160209004906000526020600020908101906200018f919062000522565b6040518060a00160405280620002e5620003cd565b8152602001620002f462000459565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200033162000539565b8152602001600081525090565b8280546200034c906200091d565b90600052602060002090601f016020900481019282620003705760008555620003bb565b82601f106200038b57805160ff1916838001178555620003bb565b82800160010185558215620003bb579182015b82811115620003bb5782518255916020019190600101906200039e565b50620003c992915062000522565b5090565b6040805160e081019091528060008152602001620003ea62000557565b8152602001600015158152602001620004366040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b81526020016200044562000539565b815260006020820181905260409091015290565b60405180606001604052806003905b62000472620003cd565b815260200190600190039081620004685790505090565b604051806020016040528062000268620003cd565b6040518060c00160405280620004b362000459565b8152602001600015158152602001620004ff6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81526020016200050e62000539565b815260200160008152602001600081525090565b5b80821115620003c9576000815560010162000523565b60405180606001604052806003906020820280368337509192915050565b604051806080016040528060006001600160a01b0316815260200162000445604080516060810190915280600062000445565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005c557620005c56200058a565b60405290565b604051602081016001600160401b0381118282101715620005c557620005c56200058a565b604051606081016001600160401b0381118282101715620005c557620005c56200058a565b600081830360808112156200062957600080fd5b62000633620005a0565b8351815260206060601f19840112156200064c57600080fd5b62000656620005cb565b925085603f8601126200066857600080fd5b62000672620005f0565b8060808701888111156200068557600080fd5b8388015b81811015620006b95780516001600160a01b0381168114620006ab5760008081fd5b845292840192840162000689565b50508452508101919091529392505050565b8060005b6003811015620006f95781516001600160a01b0316845260209384019390910190600101620006cf565b50505050565b600060a08201905060018060a01b03841682528251602083015260208301516200072e604084018251620006cb565b509392505050565b634e487b7160e01b600052602160045260246000fd5b80516006811062000761576200076162000736565b825260208181015180516001600160a01b03908116838601529181015180519192916002811062000796576200079662000736565b60408681019190915260208201511515606080880191909152918101518316608087015283015190911660a085015201516001600160a01b03811660c084015250604081015180151560e084015250606081810151805161010085015260208101516101208501526040810151610140850152908101516001600160a01b0316610160840152608081015115156101808401525060808101516200083f6101a0840182620006cb565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b6000610a2082019050620008798284516200074c565b60208084015161024080850160005b6003811015620008b0576200089f8285516200074c565b928401929082019060010162000888565b5050505060408481015180511515610900860152918201516109208501528101516001600160a01b03166109408401526060808201516109608501526080909101516109808401528301516200090b6109a0840182620006cb565b506080830151610a0083015292915050565b600181811c908216806200093257607f821691505b602082108114156200095457634e487b7160e01b600052602260045260246000fd5b50919050565b6132dd806200096a6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461010b578063ab53f2c614610120578063d379c61114610143578063dfcc43891461015657005b80631a6febfe146100825780631e93b0f1146100aa5780633b02a717146100c95780634012e02e146100e957005b3661008057005b005b610095610090366004612887565b610169565b60405190151581526020015b60405180910390f35b3480156100b657600080fd5b506003545b6040519081526020016100a1565b6100dc6100d73660046128b5565b6101c9565b6040516100a19190612937565b3480156100f557600080fd5b506100fe610243565b6040516100a19190612a98565b34801561011757600080fd5b506001546100bb565b34801561012c57600080fd5b50610135610381565b6040516100a1929190612b05565b610080610151366004612b3f565b61041e565b610095610164366004612b58565b610442565b6000610173611eec565b61017b611f10565b610183611f2a565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526101ba8284610496565b50506020015190505b92915050565b6101d1611f5f565b6101d9611eec565b6101e1611f10565b6101e9611f2a565b60408051606080820183526001600160a01b038a8116835260208084018b905290891683850152908401919091526002835281518082019092528282528301526102338284610496565b50506040015190505b9392505050565b61024b611f99565b600360005414156103725760006002805461026590612b75565b80601f016020809104026020016040519081016040528092919081815260200182805461029190612b75565b80156102de5780601f106102b3576101008083540402835291602001916102de565b820191906000526020600020905b8154815290600101906020018083116102c157829003601f168201915b50505050508060200190518101906102f69190612df1565b9050610300611fc6565b604080830180516060908101518451528151602090810151855182015282516080908101518651860152835185015186516001600160a01b0390911690840152925151855190151593019290925284015181840180519190915293810151845190910152905182519091015251919050565b61037e60006007611d75565b90565b60006060600054600280805461039690612b75565b80601f01602080910402602001604051908101604052809291908181526020018280546103c290612b75565b801561040f5780601f106103e45761010080835404028352916020019161040f565b820191906000526020600020905b8154815290600101906020018083116103f257829003601f168201915b50505050509050915091509091565b610426611eec565b61043e61043836849003840184612ef4565b82610496565b5050565b600061044c611eec565b610454611f10565b61045c611f2a565b60408051602080820183528782528381019190915260008352815180820190925282825283015261048d8284610496565b50505192915050565b6104a6600360005414601b611d75565b81516104c19015806104ba57508251600154145b601c611d75565b6000808055600280546104d390612b75565b80601f01602080910402602001604051908101604052809291908181526020018280546104ff90612b75565b801561054c5780601f106105215761010080835404028352916020019161054c565b820191906000526020600020905b81548152906001019060200180831161052f57829003601f168201915b50505050508060200190518101906105649190612df1565b905061056e611fe6565b7f6392de3086ad392d559b57a003ab34e70460d2baca532f308e45c5a87ed12206338560405161059f929190612fdb565b60405180910390a160006020850151515160028111156105c1576105c1612971565b1415610cf157602080850151510151815260008151515160058111156105e9576105e9612971565b14156105fb576001602082015261074b565b600181515151600581111561061257610612612971565b1415610624576001602082015261074b565b600281515151600581111561063b5761063b612971565b14156106d45780515160600151604082018190525160641161065e57600061066b565b6064816040015160200151105b610676576000610698565b6040810151805160209091015161068d919061309a565b816040015160400151145b6106a35760006106b0565b6064816040015160400151105b6106bb5760006106c8565b6000816040015160400151115b1515602082015261074b565b60038151515160058111156106eb576106eb612971565b14156106fd576001602082015261074b565b600481515151600581111561071457610714612971565b1415610726576001602082015261074b565b600581515151600581111561073d5761073d612971565b141561074b57600160208201525b61075a81602001516009611d75565b6060810180516000908190528151602001819052905160a08301525b60038110156108625782606001518160038110610795576107956130b2565b60200201516001600160a01b031660c0830152600060a08301515160018111156107c1576107c1612971565b14156107d357600160e08301526107fa565b600160a08301515160018111156107ec576107ec612971565b14156107fa57600060e08301525b61010082018051600190525160400181905260e082015161081c576000610836565b8160c001516001600160a01b0316336001600160a01b0316145b610844578160a0015161084b565b8161010001515b60a08301528061085a816130c8565b915050610776565b5060a08101516080820181905251600090600181111561088457610884612971565b14156108975760006101208201526108bf565b600160808201515160018111156108b0576108b0612971565b14156108bf5760016101208201525b6108cf816101200151600a611d75565b6108db3415600b611d75565b60008151515160058111156108f2576108f2612971565b1415610905576001610140820152610a60565b600181515151600581111561091c5761091c612971565b141561092f576001610140820152610a60565b600281515151600581111561094657610946612971565b14156109e6578051516060015161016082018190525160641161096a576000610978565b606481610160015160200151105b6109835760006109a7565b610160810151805160209091015161099b919061309a565b81610160015160400151145b6109b25760006109c0565b606481610160015160400151105b6109cb5760006109d9565b600081610160015160400151115b1515610140820152610a60565b60038151515160058111156109fd576109fd612971565b1415610a10576001610140820152610a60565b6004815151516005811115610a2757610a27612971565b1415610a3a576001610140820152610a60565b6005815151516005811115610a5157610a51612971565b1415610a605760016101408201525b610a70816101400151600c611d75565b60608101516101a082015260005b6003811015610b735782606001518160038110610a9d57610a9d6130b2565b60200201516001600160a01b03166101c083015260006101a0830151516001811115610acb57610acb612971565b1415610ade5760016101e0830152610b07565b60016101a0830151516001811115610af857610af8612971565b1415610b075760006101e08301525b6102008201805160019052516040018190526101e0820151610b2a576000610b45565b816101c001516001600160a01b0316336001600160a01b0316145b610b5457816101a00151610b5b565b8161020001515b6101a083015280610b6b816130c8565b915050610a7e565b506101a08101516101808201819052516000906001811115610b9757610b97612971565b1415610baa576000610220820152610bd3565b6001610180820151516001811115610bc457610bc4612971565b1415610bd35760016102208201525b610be3816102200151600d611d75565b604051600081527faf6d7c3ff3cfbdc85da0ddb587e544315cb5b71002878175075463be0d0cec6d9060200160405180910390a1600083528051516040517f510fa3e00163331e7163ef9e01f872b444c3d8848dda15e731d1789d76c6361891610c4f913391906130e3565b60405180910390a1610c5f61220b565b82518151526020830151610ca6906001610180850151516001811115610c8757610c87612971565b14610c93576000610c9e565b836101800151604001515b845151611d9b565b602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b50611d6f565b6001602085015151516002811115610d0b57610d0b612971565b1415611bdf5760208401515160400151610240820181905251610d3290600311600e611d75565b61026081018051600090819052815160200181905290516102a08301525b6003811015610e455782606001518160038110610d6f57610d6f6130b2565b60200201516001600160a01b03166102c083015260006102a0830151516001811115610d9d57610d9d612971565b1415610db05760016102e0830152610dd9565b60016102a0830151516001811115610dca57610dca612971565b1415610dd95760006102e08301525b6103008201805160019052516040018190526102e0820151610dfc576000610e17565b816102c001516001600160a01b0316336001600160a01b0316145b610e2657816102a00151610e2d565b8161030001515b6102a083015280610e3d816130c8565b915050610d50565b506102a08101516102808201819052516000906001811115610e6957610e69612971565b1415610e7c576000610320820152610ea5565b6001610280820151516001811115610e9657610e96612971565b1415610ea55760016103208201525b610eb5816103200151600f611d75565b610f066001610280830151516001811115610ed257610ed2612971565b14610ede576000610ee9565b816102800151604001515b6102408301515114610efc576001610eff565b60005b6010611d75565b610f8c82602001518261024001516000015160038110610f2857610f286130b2565b6020020151604051602001610f3d9190613101565b60408051601f198184030181529082905280516020918201206102408501518201519092610f6b9201613101565b6040516020818303038152906040528051906020012060001c146011611d75565b610f9834156012611d75565b61026081015161036082015260005b600381101561109c5782606001518160038110610fc657610fc66130b2565b60200201516001600160a01b03166103808301526000610360830151516001811115610ff457610ff4612971565b14156110075760016103a0830152611030565b600161036083015151600181111561102157611021612971565b14156110305760006103a08301525b6103c08201805160019052516040018190526103a082015161105357600061106e565b8161038001516001600160a01b0316336001600160a01b0316145b61107d57816103600151611084565b816103c001515b61036083015280611094816130c8565b915050610fa7565b5061036081015161034082018190525160009060018111156110c0576110c0612971565b14156110d35760006103e08201526110fc565b60016103408201515160018111156110ed576110ed612971565b14156110fc5760016103e08201525b61110c816103e001516013611d75565b61115d600161034083015151600181111561112957611129612971565b14611135576000611140565b816103400151604001515b6102408301515114611153576001611156565b60005b6014611d75565b6020820151610240820151518351611176929190611d9b565b610400820152604051600081527f5f6b7605f73fe937ad75068dd85ebd917a572f0dd5bb87df2de9969bf0fc76139060200160405180910390a1600060208085019190915261024082015151908301517f1ca272bbb6018d7b99180311121f45ec91a0b47a19077a7badd69e3dbd0db37e91339181600381106111fb576111fb6130b2565b602002015160405161120f93929190613110565b60405180910390a1600060208301516102408301515160038110611235576112356130b2565b602002015151600581111561124c5761124c612971565b1415611793576020820151610240820151516003811061126e5761126e6130b2565b602090810291909101518101516104208301819052015151600090600181111561129a5761129a612971565b14156115075760408083018051606090810151610440850180519190915282516020908101518251909101528251608090810151825186015283519094015181516001600160a01b03909116920191909152905151905190151591015261130260004761313d565b6106008201526104208101516060015161044082015160405160009263038da9cb60e21b9261133392602401613154565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836104200151600001516001600160a01b031660008460405161138e9190613171565b60006040518083038185875af1925050503d80600081146113cb576040519150601f19603f3d011682016040523d82523d6000602084013e6113d0565b606091505b50915091506113e182826015611eb1565b506106008401516113f2904761313d565b61046085015152805161140e908201602090810190830161318d565b61046085018051602001919091525161048085018190526040517fd79eee99c4e5fd655392f4641668b5da825147d3d3219fd25b7a92e3fefc913a9161147791815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16104808401515161149290156016611d75565b61149a61220b565b8551815152610400850151602080830180519290925281516000910152604080880151825190910152606080880151825190910152514360809182015261048086015151908701516114ec919061309a565b602082015160a001526114fe81611e0f565b50505050611d6f565b60016104208201516020015151600181111561152557611525612971565b141561178e576104208101516020908101516040908101516001600160a01b039081166104a085015284820180516060908101516104c0870180519190915282518601518151909601959095528151608090810151865186015282519094015185519316920191909152515191519115159101526115a460004761313d565b610620820152610420810151606001516104c082015160405160009263038da9cb60e21b926115d592602401613154565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836104200151600001516001600160a01b03166000846040516116309190613171565b60006040518083038185875af1925050503d806000811461166d576040519150601f19603f3d011682016040523d82523d6000602084013e611672565b606091505b509150915061168382826017611eb1565b50610620840151611694904761313d565b6104e08501515280516116b0908201602090810190830161318d565b6104e085018051602001919091525161050085018190526040517f4b287a3060fe6693268545b37c74768f32f172cc10542317266dc807f22e89919161171991815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16105008401515161173490156018611d75565b61173c61220b565b8551815152610400850151602080830180519290925281516000910152604080880151825190910152606080880151825190910152514360809182015261050086015151908701516114ec919061309a565b611d6f565b6001602083015161024083015151600381106117b1576117b16130b2565b60200201515160058111156117c8576117c8612971565b1415611826576117d661220b565b8251815152610400820151602080830180519290925281516001910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b600260208301516102408301515160038110611844576118446130b2565b602002015151600581111561185b5761185b612971565b141561193b576020820151610240820151516003811061187d5761187d6130b2565b602090810291909101516060908101516105208401818152608091820151610540860180519115159091528151850151815190950194909452805183015184516001600160a01b039091166040918201528151518551909401939093525190910151915101526118eb61220b565b8251815152610400820151602080830180519290925281516000910152610540830151815160400152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b600360208301516102408301515160038110611959576119596130b2565b602002015151600581111561197057611970612971565b14156119f95760208201516102408201515160038110611992576119926130b2565b6020020151608001516105608201526119a961220b565b8251815152610400820151602080830180519290925281516000910152604080850151825190910152610560830151815160600152805143608091820152840151905160a00152610ceb81611e0f565b600460208301516102408301515160038110611a1757611a176130b2565b6020020151516005811115611a2e57611a2e612971565b1415611a8c57611a3c61220b565b8251815152610400820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b600560208301516102408301515160038110611aaa57611aaa6130b2565b6020020151516005811115611ac157611ac1612971565b141561178e5760208201516102408201515160038110611ae357611ae36130b2565b602002015160c001516001600160a01b0316610580820152608082015147908110611b1c576080830151611b17908261313d565b611b1f565b60005b6105a083018190526105808301516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611b62573d6000803e3d6000fd5b50611b6b61220b565b835181515261040083015160208083018051929092528151600091015260408086015182519091015260608086015182519091015251436080918201526105a084015190850151611bbc908261309a565b611bc6919061313d565b602082015160a00152611bd881611e0f565b5050611d6f565b6002602085015151516002811115611bf957611bf9612971565b1415611d6f57602084015151606001516105c0820181905251611c28906001600160a01b031633146019611d75565b611c343415601a611d75565b604080830180516060908101516105e08501805191909152825160209081015182519091015282516080908101518251860152835185015182516001600160a01b0390911693019290925291515182519015159101525190517fbf82bc6b1a83d99dcac34069fc8607583ac2ea8b63940bd95bbd7147a6be267091611cb891612937565b60405180910390a16105e08101516040808501919091526105c0820151805160208201519183015192517ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf93611d0e93916131e6565b60405180910390a1611d1e61220b565b825181515260208084015181830180519190915280516000920191909152604080850151825190910152606080850151825190910152805143608091820152840151905160a00152610ceb81611e0f565b50505050565b8161043e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611da361222b565b60005b6003811015611def57848160038110611dc157611dc16130b2565b6020020151828260038110611dd857611dd86130b2565b602002015280611de7816130c8565b915050611da6565b5081818460038110611e0357611e036130b2565b60200201529392505050565b80602001516020015115611e365760008080556001819055611e3390600290612258565b50565b611e3e612292565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551611e8891839101613216565b60405160208183030381529060405260029080519060200190611eac9291906122d9565b505050565b60608315611ec057508161023c565b825115611ed05782518084602001fd5b60405163100960cb60e01b815260048101839052602401611d92565b6040805160608101825260008082526020820152908101611f0b611f5f565b905290565b604051806040016040528060008152602001611f0b61235d565b60408051608081019091528060008152602001611f45612370565b8152602001611f52612383565b8152602001611f0b61239d565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060600160405280611fac6123cd565b8152602001611fb961222b565b8152602001611f0b611f5f565b6040518060400160405280611fd9611f5f565b8152602001611f0b611f99565b604051806106400160405280611ffa612370565b81526000602082015260400161200e611f5f565b815260200161201b6123eb565b81526020016120286123eb565b81526020016120356123eb565b815260006020820181905260408201526060016120506123eb565b8152600060208201819052604082015260600161206b611f5f565b81526020016120786123eb565b81526020016120856123eb565b815260006020820181905260408201526060016120a06123eb565b8152600060208201526040016120b4612383565b81526020016120c16123eb565b81526020016120ce6123eb565b81526020016120db6123eb565b815260006020820181905260408201526060016120f66123eb565b81526000602082015260400161210a6123eb565b81526020016121176123eb565b815260006020820181905260408201526060016121326123eb565b81526000602082015260400161214661222b565b815260200161215361240e565b8152602001612160611f5f565b815260200161216d612431565b815260200161217a612431565b81526000602082015260400161218e611f5f565b815260200161219b612431565b81526020016121a8612431565b81526020016121b5611f5f565b81526020016121c261244b565b81526020016121cf6123cd565b815260006020820181905260408201526060016121ea61239d565b81526020016121f7611f5f565b815260200160008152602001600081525090565b604051806040016040528061221e612370565b8152602001611f0b612485565b60405180606001604052806003905b6122426124b9565b81526020019060019003908161223a5790505090565b50805461226490612b75565b6000825580601f10612274575050565b601f016020900490600052602060002090810190611e3391906124f5565b6040518060a001604052806122a56124b9565b81526020016122b261222b565b81526020016122bf61244b565b81526020016122cc6123cd565b8152602001600081525090565b8280546122e590612b75565b90600052602060002090601f016020900481019282612307576000855561234d565b82601f1061232057805160ff191683800117855561234d565b8280016001018555821561234d579182015b8281111561234d578251825591602001919060010190612332565b506123599291506124f5565b5090565b6040518060200160405280611f0b611f2a565b6040518060200160405280611f0b6124b9565b604051806040016040528060008152602001611f0b6124b9565b604051806060016040528060006001600160a01b031681526020016123c061250a565b8152600060209091015290565b60405180606001604052806003906020820280368337509192915050565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806080016040528060006001600160a01b031681526020016123fa61250a565b604051806040016040528060008152602001611f0b61251d565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060c0016040528061249861222b565b8152600060208201526040016124ac61244b565b81526020016121f76123cd565b6040805160e0810190915280600081526020016124d461240e565b8152600060208201526040016124e8611f5f565b81526020016123fa6123cd565b5b8082111561235957600081556001016124f6565b60408051606081019091528060006123fa565b60408051608081018252600091810182815260608201929092529081906122cc565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156125785761257861253f565b60405290565b6040516080810167ffffffffffffffff811182821017156125785761257861253f565b60405160a0810167ffffffffffffffff811182821017156125785761257861253f565b60405160e0810167ffffffffffffffff811182821017156125785761257861253f565b6040805190810167ffffffffffffffff811182821017156125785761257861253f565b6040516020810167ffffffffffffffff811182821017156125785761257861253f565b60068110611e3357600080fd5b6001600160a01b0381168114611e3357600080fd5b803561265a8161263a565b919050565b60028110611e3357600080fd5b8015158114611e3357600080fd5b803561265a8161266c565b60006060828403121561269757600080fd5b61269f612555565b905081356126ac8161265f565b815260208201356126bc8161266c565b602082015260408201356126cf8161263a565b604082015292915050565b600060a082840312156126ec57600080fd5b6126f46125a1565b9050813581526020820135602082015260408201356040820152606082013561271c8161263a565b6060820152608082013561272f8161266c565b608082015292915050565b600082601f83011261274b57600080fd5b612753612555565b80606084018581111561276557600080fd5b845b8181101561278857803561277a8161263a565b845260209384019301612767565b509095945050505050565b60008183036102408112156127a757600080fd5b6127af6125c4565b915082356127bc8161262d565b825260c0601f19820112156127d057600080fd5b506127d961257e565b60208301356127e78161263a565b81526127f68460408501612685565b602082015260a08301356128098161263a565b604082015260c083013561281c8161263a565b6060820152602082015261283260e0830161267a565b60408201526128458361010084016126da565b6060820152612858836101a0840161273a565b608082015261286a610200830161267a565b60a082015261287c610220830161264f565b60c082015292915050565b600080610260838503121561289b57600080fd5b823591506128ac8460208501612793565b90509250929050565b600080600060a084860312156128ca57600080fd5b83356128d58161263a565b92506128e48560208601612685565b915060808401356128f48161263a565b809150509250925092565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a081016101c382846128ff565b8060005b6003811015611d6f5781516001600160a01b0316845260209384019390910190600101612949565b634e487b7160e01b600052602160045260246000fd5b80516002811061299957612999612971565b82526020818101511515908301526040908101516001600160a01b0316910152565b8051600681106129cd576129cd612971565b825260208181015180516001600160a01b0390811683860152918101519091906129fa6040860182612987565b50604082810151821660a086015260609283015190911660c0850152820151151560e0840152810151612a316101008401826128ff565b506080810151612a456101a0840182612945565b5060a0810151151561020083015260c001516001600160a01b031661022090910152565b8060005b6003811015611d6f57612a818483516129bb565b610240939093019260209190910190600101612a6d565b60006107c082019050612aac828451612945565b6020830151612abe6060840182612a69565b506040830151612ad26107208401826128ff565b5092915050565b60005b83811015612af4578181015183820152602001612adc565b83811115611d6f5750506000910152565b8281526040602082015260008251806040840152612b2a816060850160208701612ad9565b601f01601f1916919091016060019392505050565b60006105808284031215612b5257600080fd5b50919050565b60006102408284031215612b6b57600080fd5b61023c8383612793565b600181811c90821680612b8957607f821691505b60208210811415612b5257634e487b7160e01b600052602260045260246000fd5b805161265a8161263a565b805161265a8161266c565b600060a08284031215612bd257600080fd5b612bda6125a1565b90508151815260208201516020820152604082015160408201526060820151612c028161263a565b6060820152608082015161272f8161266c565b600082601f830112612c2657600080fd5b612c2e612555565b806060840185811115612c4057600080fd5b845b81811015612788578051612c558161263a565b845260209384019301612c42565b6000818303610240811215612c7757600080fd5b612c7f6125c4565b91508251612c8c8161262d565b825260c0601f1982011215612ca057600080fd5b612ca861257e565b6020840151612cb68161263a565b81526060603f1983011215612cca57600080fd5b612cd2612555565b91506040840151612ce28161265f565b82526060840151612cf28161266c565b60208301526080840151612d058161263a565b604083015260208101829052612d1d60a08501612baa565b6040820152612d2e60c08501612baa565b6060820152602083015250612d4560e08301612bb5565b6040820152612d58836101008401612bc0565b6060820152612d6b836101a08401612c15565b6080820152612d7d6102008301612bb5565b60a082015261287c6102208301612baa565b600060a08284031215612da157600080fd5b612da96125a1565b90508151612db68161266c565b8152602082810151908201526040820151612dd08161263a565b80604083015250606082015160608201526080820151608082015292915050565b6000610a208284031215612e0457600080fd5b612e0c6125a1565b612e168484612c63565b81526102408461025f850112612e2b57600080fd5b612e33612555565b80610900860187811115612e4657600080fd5b8387015b81811015612e6b57612e5c8982612c63565b84526020909301928401612e4a565b50816020860152612e7c8882612d8f565b604086015250505050612e93846109a08501612c15565b6060820152610a009290920151608083015250919050565b600060a08284031215612ebd57600080fd5b612ec5612555565b90508135612ed28161263a565b8152612ee18360208401612685565b602082015260808201356126cf8161263a565b6000818303610580811215612f0857600080fd5b612f106125e7565b83358152610560601f1983011215612f2757600080fd5b612f2f61260a565b612f3761257e565b602086013560038110612f4957600080fd5b8152610240603f1985011215612f5e57600080fd5b612f6661260a565b612f738860408901612793565b8152602082015261026061027f1985011215612f8e57600080fd5b612f966125e7565b93506102808601358452612fae876102a08801612793565b6020850152836040820152612fc7876104e08801612eab565b606082015281526020820152949350505050565b6001600160a01b03838116825282516020808401919091528301515180516105a084019291906003811061301157613011612971565b80604086015250602081015161302b6060860182516129bb565b50604081015180516102a08601526020015161304b6102c08601826129bb565b506060015180518216610500850152602081015161306d610520860182612987565b508160408201511661058085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156130ad576130ad613084565b500190565b634e487b7160e01b600052603260045260246000fd5b60006000198214156130dc576130dc613084565b5060010190565b6001600160a01b0383168152610260810161023c60208301846129bb565b61024081016101c382846129bb565b6001600160a01b038416815260208101839052610280810161313560408301846129bb565b949350505050565b60008282101561314f5761314f613084565b500390565b6001600160a01b038316815260c0810161023c60208301846128ff565b60008251613183818460208701612ad9565b9190910192915050565b600081830360608112156131a057600080fd5b6131a86125e7565b60408212156131b657600080fd5b6131be6125e7565b9150835182526020840151602083015281815260408401516020820152809250505092915050565b6001600160a01b03848116825260a08201906132056020840186612987565b808416608084015250949350505050565b6000610a208201905061322a8284516129bb565b602083015161323d610240840182612a69565b50604083810151805115156109008501526020810151610920850152908101516001600160a01b03166109408401526060808201516109608501526080909101516109808401528301516132956109a0840182612945565b506080830151610a008301529291505056fea2646970667358221220c18d354987c014973b361e6cae9791b02de0dfba879243769e9629e2108ce02364736f6c634300080c0033`,
  BytecodeLen: 15431,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:215:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:134:19:after expr stmt semicolon',
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
  "Triumvir_propose": Triumvir_propose,
  "Triumvir_support": Triumvir_support,
  "register": register
  };
export const _APIs = {
  Triumvir: {
    propose: Triumvir_propose,
    support: Triumvir_support
    },
  register: register
  };
