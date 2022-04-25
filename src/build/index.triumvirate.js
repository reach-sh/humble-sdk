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
    computeMint_: ((_v24327, _v24328, _v24329, _v24330 ) => {
        const v24327 = stdlib.protect(ctc1, _v24327, null);
        const v24328 = stdlib.protect(ctc0, _v24328, null);
        const v24329 = stdlib.protect(ctc1, _v24329, null);
        const v24330 = stdlib.protect(ctc1, _v24330, null);
      
      const v24331 = v24327.A;
      const v24332 = v24327.B;
      const v24333 = v24329.A;
      const v24334 = v24329.B;
      const v24336 = v24330.B;
      let v24337;
      const v24344 = stdlib.eq(v24336, stdlib.checkedBigNumberify('286:19:decimal', stdlib.UInt_max, '0'));
      if (v24344) {
        const v24345 = stdlib.cast(false, true, v24331);
        const v24346 = stdlib.cast(false, true, v24332);
        const v24347 = stdlib.cast(false, true, v24328);
        const v24349 = stdlib.mul256(v24347, v24347);
        const v24350 = stdlib.mul256(v24345, v24346);
        const v24352 = stdlib.gt256(v24345, v24346);
        const v24353 = v24352 ? v24345 : v24346;
        const v24354 = stdlib.mul256(v24353, v24353);
        const v24355 = stdlib.le256(v24350, v24349);
        stdlib.assert(v24355, {
          at: '295:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt lo',
          who: 'Module'
          });
        const v24356 = stdlib.le256(v24349, v24354);
        stdlib.assert(v24356, {
          at: '296:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt hi',
          who: 'Module'
          });
        v24337 = v24328;
        }
      else {
        const v24359 = stdlib.eq(v24328, stdlib.checkedBigNumberify('300:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24359, {
          at: '300:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt 0',
          who: 'Module'
          });
        const v24366 = stdlib.muldiv(v24331, v24333, v24336);
        const v24373 = stdlib.muldiv(v24332, v24334, v24336);
        const v24375 = stdlib.lt(v24366, v24373);
        const v24376 = v24375 ? v24366 : v24373;
        v24337 = v24376;
        }
      
      return v24337;}),
    computeSwap_: ((_v24377, _v24378, _v24379, _v24380 ) => {
        const v24377 = stdlib.protect(ctc2, _v24377, null);
        const v24378 = stdlib.protect(ctc1, _v24378, null);
        const v24379 = stdlib.protect(ctc1, _v24379, null);
        const v24380 = stdlib.protect(ctc4, _v24380, null);
      
      const v24381 = v24378.A;
      const v24382 = v24378.B;
      const v24383 = v24379.A;
      const v24384 = v24379.B;
      const v24386 = v24380.protoFee;
      const v24387 = v24380.lpFee;
      const v24388 = v24380.totFee;
      const v24389 = stdlib.lt(v24386, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v24390 = stdlib.lt(v24387, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v24391 = v24389 ? v24390 : false;
      const v24392 = stdlib.add(v24387, v24386);
      const v24393 = stdlib.eq(v24388, v24392);
      const v24394 = v24391 ? v24393 : false;
      const v24395 = stdlib.lt(v24388, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v24396 = v24394 ? v24395 : false;
      const v24397 = stdlib.gt(v24388, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v24398 = v24396 ? v24397 : false;
      stdlib.assert(v24398, {
        at: '<top level>',
        fs: [],
        msg: null,
        who: 'Module'
        });
      const v24400 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v24400, {
        at: '277:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v24401;
      if (v24377) {
        const v24406 = stdlib.eq(v24382, stdlib.checkedBigNumberify('./index.rsh:264:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24406, {
          at: './index.rsh:264:10:application',
          fs: ['at 278:31:application call to "computeSwap" (defined at: ./index.rsh:260:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v24415 = stdlib.add(v24383, v24381);
        const v24423 = stdlib.muldiv(v24381, v24384, v24415);
        const v24424 = stdlib.cast(false, true, v24381);
        const v24425 = stdlib.cast(false, true, v24388);
        const v24426 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24425);
        const v24427 = stdlib.mul256(v24424, v24426);
        const v24428 = stdlib.cast(false, true, v24415);
        const v24429 = stdlib.mul256(v24428, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24430 = stdlib.add256(v24429, v24427);
        const v24431 = stdlib.cast(false, true, v24384);
        const v24432 = stdlib.mul256(v24427, v24431);
        const v24433 = stdlib.div256(v24432, v24430);
        const v24434 = stdlib.cast(true, false, v24433);
        const v24439 = stdlib.sub(v24423, v24434);
        const v24443 = stdlib.mul(v24386, stdlib.checkedBigNumberify('./index.rsh:245:40:decimal', stdlib.UInt_max, '100'));
        const v24444 = stdlib.div(v24443, v24388);
        const v24450 = stdlib.muldiv(v24439, v24444, stdlib.checkedBigNumberify('./index.rsh:247:54:decimal', stdlib.UInt_max, '100'));
        const v24455 = stdlib.muldiv(v24381, v24386, stdlib.checkedBigNumberify('./index.rsh:249:49:decimal', stdlib.UInt_max, '10000'));
        const v24463 = stdlib.muldiv(v24455, v24384, v24415);
        const v24464 = stdlib.gt(v24463, v24450);
        const v24465 = [v24455, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24450];
        const v24467 = v24464 ? v24465 : v24466;
        const v24469 = v24467[stdlib.checkedBigNumberify('./index.rsh:265:19:array', stdlib.UInt_max, '0')];
        const v24470 = v24467[stdlib.checkedBigNumberify('./index.rsh:265:19:array', stdlib.UInt_max, '1')];
        const v24472 = {
          A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          B: v24434
          };
        const v24474 = {
          A: v24469,
          B: v24470
          };
        const v24475 = [v24472, v24474];
        v24401 = v24475;
        }
      else {
        const v24476 = stdlib.eq(v24381, stdlib.checkedBigNumberify('./index.rsh:269:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24476, {
          at: './index.rsh:269:10:application',
          fs: ['at 278:31:application call to "computeSwap" (defined at: ./index.rsh:260:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
          msg: null,
          who: 'Module'
          });
        const v24485 = stdlib.add(v24384, v24382);
        const v24493 = stdlib.muldiv(v24382, v24383, v24485);
        const v24494 = stdlib.cast(false, true, v24382);
        const v24495 = stdlib.cast(false, true, v24388);
        const v24496 = stdlib.sub256(stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v24495);
        const v24497 = stdlib.mul256(v24494, v24496);
        const v24498 = stdlib.cast(false, true, v24485);
        const v24499 = stdlib.mul256(v24498, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v24500 = stdlib.add256(v24499, v24497);
        const v24501 = stdlib.cast(false, true, v24383);
        const v24502 = stdlib.mul256(v24497, v24501);
        const v24503 = stdlib.div256(v24502, v24500);
        const v24504 = stdlib.cast(true, false, v24503);
        const v24509 = stdlib.sub(v24493, v24504);
        const v24513 = stdlib.mul(v24386, stdlib.checkedBigNumberify('./index.rsh:245:40:decimal', stdlib.UInt_max, '100'));
        const v24514 = stdlib.div(v24513, v24388);
        const v24520 = stdlib.muldiv(v24509, v24514, stdlib.checkedBigNumberify('./index.rsh:247:54:decimal', stdlib.UInt_max, '100'));
        const v24525 = stdlib.muldiv(v24382, v24386, stdlib.checkedBigNumberify('./index.rsh:249:49:decimal', stdlib.UInt_max, '10000'));
        const v24533 = stdlib.muldiv(v24525, v24383, v24485);
        const v24534 = stdlib.gt(v24533, v24520);
        const v24535 = [v24525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24536 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24520];
        const v24537 = v24534 ? v24535 : v24536;
        const v24539 = v24537[stdlib.checkedBigNumberify('./index.rsh:270:19:array', stdlib.UInt_max, '0')];
        const v24540 = v24537[stdlib.checkedBigNumberify('./index.rsh:270:19:array', stdlib.UInt_max, '1')];
        const v24542 = {
          A: v24504,
          B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v24544 = {
          A: v24540,
          B: v24539
          };
        const v24545 = [v24542, v24544];
        v24401 = v24545;
        }
      const v24546 = v24401[stdlib.checkedBigNumberify('278:11:array', stdlib.UInt_max, '0')];
      const v24547 = v24401[stdlib.checkedBigNumberify('278:11:array', stdlib.UInt_max, '1')];
      const v24548 = v24546.A;
      const v24549 = v24546.B;
      const v24550 = v24547.A;
      const v24551 = v24547.B;
      const v24552 = {
        A: v24548,
        B: v24549
        };
      const v24553 = {
        A: v24550,
        B: v24551
        };
      const v24554 = [v24552, v24553];
      
      return v24554;})
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc0]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc2], ['lpFee', ctc2], ['totFee', ctc2], ['protoAddr', ctc0], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc3,
    Kill: ctc4,
    NewInfo: ctc6,
    NewTriumvirs: ctc7,
    NoOp: ctc4,
    Rewards: ctc0
    });
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Data({
    None: ctc4,
    Some: ctc9
    });
  return {
    Propose: [ctc0, ctc8],
    Register: [ctc1, ctc10, ctc9],
    Support: [ctc0, ctc2, ctc8]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc2], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc3,
    Kill: ctc4,
    NewInfo: ctc6,
    NewTriumvirs: ctc7,
    NoOp: ctc4,
    Rewards: ctc2
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc1,
    protoAddr: ctc2,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc11 = stdlib.T_Struct([['triumvirs', ctc7], ['cmds', ctc9], ['protoInfo', ctc6]]);
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v25504, v25516, v25518, v25519, v25523] = svs;
            return (await ((async () => {
              
              const v25567 = v25518.protoFee;
              const v25568 = v25518.lpFee;
              const v25569 = v25518.totFee;
              const v25570 = v25518.protoAddr;
              const v25571 = v25518.locked;
              const v25572 = {
                locked: v25571,
                lpFee: v25568,
                protoAddr: v25570,
                protoFee: v25567,
                totFee: v25569
                };
              const v25573 = {
                cmds: v25516,
                protoInfo: v25572,
                triumvirs: v25519
                };
              
              return v25573;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        }
      },
    views: {
      3: [ctc8, ctc9, ctc10, ctc7, ctc1]
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
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc0]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc3], ['lpFee', ctc3], ['totFee', ctc3], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Data({
    Harvest: ctc4,
    Kill: ctc5,
    NewInfo: ctc7,
    NewTriumvirs: ctc1,
    NoOp: ctc5,
    Rewards: ctc0
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc8]);
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Data({
    None: ctc5,
    Some: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc2, ctc12, ctc11]);
  const ctc14 = stdlib.T_Data({
    Triumvir_propose0_24690: ctc9,
    Triumvir_support0_24690: ctc10,
    register0_24690: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc3], ['B', ctc3]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc16]);
  
  
  const v25492 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v25492],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:122:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:122:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25499], secs: v25501, time: v25500, didSend: v24569, from: v25498 } = txn1;
      
      ;
      const v25502 = await ctc.getContractAddress();
      const v25504 = ['NoOp', null];
      const v25510 = [v25504, v25504, v25504];
      const v25515 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v25502,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v25516 = v25510;
      const v25517 = false;
      const v25518 = v25515;
      const v25519 = v25499;
      const v25520 = v25500;
      const v25523 = stdlib.checkedBigNumberify('./index.rsh:118:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v25566 = v25517 ? false : true;
        
        return v25566;})()) {
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
  const {data: [v25499], secs: v25501, time: v25500, didSend: v24569, from: v25498 } = txn1;
  ;
  const v25502 = await ctc.getContractAddress();
  const v25504 = ['NoOp', null];
  const v25510 = [v25504, v25504, v25504];
  const v25515 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v25502,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v25516 = v25510;
  let v25517 = false;
  let v25518 = v25515;
  let v25519 = v25499;
  let v25520 = v25500;
  let v25523 = stdlib.checkedBigNumberify('./index.rsh:118:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v25566 = v25517 ? false : true;
    
    return v25566;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn2;
    switch (v25766[0]) {
      case 'Triumvir_propose0_24690': {
        const v25769 = v25766[1];
        undefined /* setApiDetails */;
        ;
        const v25783 = v25769[stdlib.checkedBigNumberify('./index.rsh:206:9:spread', stdlib.UInt_max, '0')];
        let v25784;
        switch (v25783[0]) {
          case 'Harvest': {
            const v25785 = v25783[1];
            v25784 = true;
            
            break;
            }
          case 'Kill': {
            const v25786 = v25783[1];
            v25784 = true;
            
            break;
            }
          case 'NewInfo': {
            const v25787 = v25783[1];
            const v25788 = v25787.protoFee;
            const v25789 = v25787.lpFee;
            const v25790 = v25787.totFee;
            const v25791 = stdlib.lt(v25788, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
            const v25792 = stdlib.lt(v25789, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
            const v25793 = v25791 ? v25792 : false;
            const v25794 = stdlib.add(v25789, v25788);
            const v25795 = stdlib.eq(v25790, v25794);
            const v25796 = v25793 ? v25795 : false;
            const v25797 = stdlib.lt(v25790, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
            const v25798 = v25796 ? v25797 : false;
            const v25799 = stdlib.gt(v25790, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
            const v25800 = v25798 ? v25799 : false;
            v25784 = v25800;
            
            break;
            }
          case 'NewTriumvirs': {
            const v25801 = v25783[1];
            v25784 = true;
            
            break;
            }
          case 'NoOp': {
            const v25802 = v25783[1];
            v25784 = true;
            
            break;
            }
          case 'Rewards': {
            const v25803 = v25783[1];
            v25784 = true;
            
            break;
            }
          }
        stdlib.assert(v25784, {
          at: './index.rsh:159:14:application',
          fs: ['at ./index.rsh:209:26:application call to "doPropose" (defined at: ./index.rsh:158:36:function exp)', 'at ./index.rsh:209:14:application call to [unknown function] (defined at: ./index.rsh:209:14:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v25804 = ['None', null];
        const v25805 = await stdlib.Array_asyncReduce([v25519], v25804, async([v25807], v25806, v25808) => {
          let v25809;
          switch (v25806[0]) {
            case 'None': {
              const v25810 = v25806[1];
              v25809 = true;
              
              break;
              }
            case 'Some': {
              const v25811 = v25806[1];
              v25809 = false;
              
              break;
              }
            }
          const v25812 = stdlib.addressEq(v25765, v25807);
          const v25813 = v25809 ? v25812 : false;
          const v25814 = ['Some', v25808];
          const v25815 = v25813 ? v25814 : v25806;
          
          return v25815;})
        let v25816;
        switch (v25805[0]) {
          case 'None': {
            const v25817 = v25805[1];
            v25816 = false;
            
            break;
            }
          case 'Some': {
            const v25818 = v25805[1];
            v25816 = true;
            
            break;
            }
          }
        stdlib.assert(v25816, {
          at: './index.rsh:147:14:application',
          fs: ['at ./index.rsh:160:32:application call to "chkTriumvir" (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:209:26:application call to "doPropose" (defined at: ./index.rsh:158:36:function exp)', 'at ./index.rsh:209:14:application call to [unknown function] (defined at: ./index.rsh:209:14:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v25819 = stdlib.fromSome(v25805, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
        const v25821 = stdlib.Array_set(v25516, v25819, v25783);
        const v25822 = null;
        await txn2.getOutput('Triumvir_propose', 'v25822', ctc5, v25822);
        null;
        const cv25516 = v25821;
        const cv25517 = false;
        const cv25518 = v25518;
        const cv25519 = v25519;
        const cv25520 = v25767;
        const cv25523 = v25523;
        
        v25516 = cv25516;
        v25517 = cv25517;
        v25518 = cv25518;
        v25519 = cv25519;
        v25520 = cv25520;
        v25523 = cv25523;
        
        continue;
        break;
        }
      case 'Triumvir_support0_24690': {
        const v26078 = v25766[1];
        undefined /* setApiDetails */;
        ;
        const v26175 = v26078[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, '0')];
        const v26176 = v26078[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, '1')];
        const v26177 = stdlib.lt(v26175, stdlib.checkedBigNumberify('./index.rsh:185:31:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v26177, {
          at: './index.rsh:185:14:application',
          fs: ['at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26178 = ['None', null];
        const v26179 = await stdlib.Array_asyncReduce([v25519], v26178, async([v26181], v26180, v26182) => {
          let v26183;
          switch (v26180[0]) {
            case 'None': {
              const v26184 = v26180[1];
              v26183 = true;
              
              break;
              }
            case 'Some': {
              const v26185 = v26180[1];
              v26183 = false;
              
              break;
              }
            }
          const v26186 = stdlib.addressEq(v25765, v26181);
          const v26187 = v26183 ? v26186 : false;
          const v26188 = ['Some', v26182];
          const v26189 = v26187 ? v26188 : v26180;
          
          return v26189;})
        let v26190;
        switch (v26179[0]) {
          case 'None': {
            const v26191 = v26179[1];
            v26190 = false;
            
            break;
            }
          case 'Some': {
            const v26192 = v26179[1];
            v26190 = true;
            
            break;
            }
          }
        stdlib.assert(v26190, {
          at: './index.rsh:147:14:application',
          fs: ['at ./index.rsh:186:32:application call to "chkTriumvir" (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26193 = stdlib.fromSome(v26179, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
        const v26194 = stdlib.eq(v26175, v26193);
        const v26195 = v26194 ? false : true;
        stdlib.assert(v26195, {
          at: './index.rsh:187:14:application',
          fs: ['at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26197 = v25516[v26175];
        const v26198 = stdlib.digest(ctc9, [v26176]);
        const v26199 = stdlib.digest(ctc9, [v26197]);
        const v26200 = stdlib.digestEq(v26198, v26199);
        stdlib.assert(v26200, {
          at: './index.rsh:189:14:application',
          fs: ['at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26203 = stdlib.Array_set(v25516, v26175, v25504);
        const v26204 = null;
        await txn2.getOutput('Triumvir_support', 'v26204', ctc5, v26204);
        null;
        switch (v26197[0]) {
          case 'Harvest': {
            const v26246 = v26197[1];
            const v26247 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '0')];
            const v26248 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '1')];
            const v26249 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '2')];
            const v26250 = v25518.protoFee;
            const v26251 = v25518.lpFee;
            const v26252 = v25518.totFee;
            const v26253 = v25518.protoAddr;
            const v26254 = v25518.locked;
            const v26267 = {
              locked: v26254,
              lpFee: v26251,
              protoAddr: v26253,
              protoFee: v26250,
              totFee: v26252
              };
            const v26268 = undefined /* Remote */;
            const v26269 = await txn2.getOutput('internal', 'v26268', ctc17, v26268);
            const v26271 = v26269[stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0')];
            const v26280 = stdlib.add(v25523, v26271);
            const v26281 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0'), v26271);
            stdlib.assert(v26281, {
              at: './index.rsh:174:46:application',
              fs: ['at ./index.rsh:168:45:application call to [unknown function] (defined at: ./index.rsh:172:39:function exp)', 'at ./index.rsh:168:45:application call to [unknown function] (defined at: ./index.rsh:168:45:function exp)', 'at ./index.rsh:194:59:application call to "evalCommand" (defined at: ./index.rsh:168:33:function exp)', 'at ./index.rsh:214:47:application call to [unknown function] (defined at: ./index.rsh:191:20:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
              msg: 'remote bill check',
              who: 'Admin'
              });
            const cv25516 = v26203;
            const cv25517 = false;
            const cv25518 = v25518;
            const cv25519 = v25519;
            const cv25520 = v25767;
            const cv25523 = v26280;
            
            v25516 = cv25516;
            v25517 = cv25517;
            v25518 = cv25518;
            v25519 = cv25519;
            v25520 = cv25520;
            v25523 = cv25523;
            
            continue;
            break;
            }
          case 'Kill': {
            const v26290 = v26197[1];
            const cv25516 = v26203;
            const cv25517 = true;
            const cv25518 = v25518;
            const cv25519 = v25519;
            const cv25520 = v25767;
            const cv25523 = v25523;
            
            v25516 = cv25516;
            v25517 = cv25517;
            v25518 = cv25518;
            v25519 = cv25519;
            v25520 = cv25520;
            v25523 = cv25523;
            
            continue;
            break;
            }
          case 'NewInfo': {
            const v26299 = v26197[1];
            const v26300 = v26299.locked;
            const v26301 = v26299.lpFee;
            const v26302 = v26299.protoAddr;
            const v26303 = v26299.protoFee;
            const v26304 = v26299.totFee;
            const v26305 = {
              locked: v26300,
              lpFee: v26301,
              protoAddr: v26302,
              protoFee: v26303,
              totFee: v26304
              };
            const cv25516 = v26203;
            const cv25517 = false;
            const cv25518 = v26305;
            const cv25519 = v25519;
            const cv25520 = v25767;
            const cv25523 = v25523;
            
            v25516 = cv25516;
            v25517 = cv25517;
            v25518 = cv25518;
            v25519 = cv25519;
            v25520 = cv25520;
            v25523 = cv25523;
            
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v26315 = v26197[1];
            const cv25516 = v26203;
            const cv25517 = false;
            const cv25518 = v25518;
            const cv25519 = v26315;
            const cv25520 = v25767;
            const cv25523 = v25523;
            
            v25516 = cv25516;
            v25517 = cv25517;
            v25518 = cv25518;
            v25519 = cv25519;
            v25520 = cv25520;
            v25523 = cv25523;
            
            continue;
            break;
            }
          case 'NoOp': {
            const v26324 = v26197[1];
            const cv25516 = v26203;
            const cv25517 = false;
            const cv25518 = v25518;
            const cv25519 = v25519;
            const cv25520 = v25767;
            const cv25523 = v25523;
            
            v25516 = cv25516;
            v25517 = cv25517;
            v25518 = cv25518;
            v25519 = cv25519;
            v25520 = cv25520;
            v25523 = cv25523;
            
            continue;
            break;
            }
          case 'Rewards': {
            const v26333 = v26197[1];
            const v26335 = (stdlib.le(await ctc.getBalance(), v25523) ? stdlib.checkedBigNumberify('./index.rsh:178:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25523));
            const v26336 = stdlib.add(v26335, v25523);
            const v26340 = stdlib.sub(v26336, v26335);
            ;
            const cv25516 = v26203;
            const cv25517 = false;
            const cv25518 = v25518;
            const cv25519 = v25519;
            const cv25520 = v25767;
            const cv25523 = v26340;
            
            v25516 = cv25516;
            v25517 = cv25517;
            v25518 = cv25518;
            v25519 = cv25519;
            v25520 = cv25520;
            v25523 = cv25523;
            
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_24690': {
        const v26387 = v25766[1];
        undefined /* setApiDetails */;
        ;
        const v26659 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '0')];
        const v26660 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '1')];
        const v26661 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '2')];
        const v26662 = stdlib.ctcAddrEq(v26659, v25765);
        stdlib.assert(v26662, {
          at: './index.rsh:151:14:application',
          fs: ['at ./index.rsh:204:33:application call to "doRegister" (defined at: ./index.rsh:150:54:function exp)', 'at ./index.rsh:204:20:application call to [unknown function] (defined at: ./index.rsh:204:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26663 = v25518.protoFee;
        const v26664 = v25518.lpFee;
        const v26665 = v25518.totFee;
        const v26666 = v25518.protoAddr;
        const v26667 = v25518.locked;
        const v26668 = {
          locked: v26667,
          lpFee: v26664,
          protoAddr: v26666,
          protoFee: v26663,
          totFee: v26665
          };
        await txn2.getOutput('register', 'v26668', ctc7, v26668);
        null;
        const cv25516 = v25516;
        const cv25517 = false;
        const cv25518 = v25518;
        const cv25519 = v25519;
        const cv25520 = v25767;
        const cv25523 = v25523;
        
        v25516 = cv25516;
        v25517 = cv25517;
        v25518 = cv25518;
        v25519 = cv25519;
        v25520 = cv25520;
        v25523 = cv25523;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function Triumvir_propose(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Triumvir_propose expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Triumvir_propose expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc2], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc3,
    Kill: ctc4,
    NewInfo: ctc6,
    NewTriumvirs: ctc7,
    NoOp: ctc4,
    Rewards: ctc2
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc1,
    protoAddr: ctc2,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Token;
  const ctc14 = stdlib.T_Data({
    None: ctc4,
    Some: ctc13
    });
  const ctc15 = stdlib.T_Tuple([ctc0, ctc14, ctc13]);
  const ctc16 = stdlib.T_Data({
    Triumvir_propose0_24690: ctc11,
    Triumvir_support0_24690: ctc12,
    register0_24690: ctc15
    });
  
  
  const [v25504, v25516, v25518, v25519, v25523] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc9, ctc10, ctc7, ctc1]);
  const v25598 = ctc.selfAddress();
  const v25600 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:207:11:application call to [unknown function] (defined at: ./index.rsh:207:11:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_propose0_24690" (defined at: ./index.rsh:206:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v25601 = v25600[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v25621;
  switch (v25601[0]) {
    case 'Harvest': {
      const v25622 = v25601[1];
      v25621 = true;
      
      break;
      }
    case 'Kill': {
      const v25623 = v25601[1];
      v25621 = true;
      
      break;
      }
    case 'NewInfo': {
      const v25624 = v25601[1];
      const v25625 = v25624.protoFee;
      const v25626 = v25624.lpFee;
      const v25627 = v25624.totFee;
      const v25628 = stdlib.lt(v25625, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v25629 = stdlib.lt(v25626, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v25630 = v25628 ? v25629 : false;
      const v25631 = stdlib.add(v25626, v25625);
      const v25632 = stdlib.eq(v25627, v25631);
      const v25633 = v25630 ? v25632 : false;
      const v25634 = stdlib.lt(v25627, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v25635 = v25633 ? v25634 : false;
      const v25636 = stdlib.gt(v25627, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v25637 = v25635 ? v25636 : false;
      v25621 = v25637;
      
      break;
      }
    case 'NewTriumvirs': {
      const v25638 = v25601[1];
      v25621 = true;
      
      break;
      }
    case 'NoOp': {
      const v25639 = v25601[1];
      v25621 = true;
      
      break;
      }
    case 'Rewards': {
      const v25640 = v25601[1];
      v25621 = true;
      
      break;
      }
    }
  stdlib.assert(v25621, {
    at: './index.rsh:159:14:application',
    fs: ['at ./index.rsh:207:35:application call to "doPropose" (defined at: ./index.rsh:158:36:function exp)', 'at ./index.rsh:207:11:application call to [unknown function] (defined at: ./index.rsh:207:11:function exp)', 'at ./index.rsh:207:11:application call to [unknown function] (defined at: ./index.rsh:207:11:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_propose0_24690" (defined at: ./index.rsh:206:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'Triumvir_propose'
    });
  const v25641 = ['None', null];
  const v25642 = await stdlib.Array_asyncReduce([v25519], v25641, async([v25644], v25643, v25645) => {
    let v25646;
    switch (v25643[0]) {
      case 'None': {
        const v25647 = v25643[1];
        v25646 = true;
        
        break;
        }
      case 'Some': {
        const v25648 = v25643[1];
        v25646 = false;
        
        break;
        }
      }
    const v25649 = stdlib.addressEq(v25598, v25644);
    const v25650 = v25646 ? v25649 : false;
    const v25651 = ['Some', v25645];
    const v25652 = v25650 ? v25651 : v25643;
    
    return v25652;})
  let v25653;
  switch (v25642[0]) {
    case 'None': {
      const v25654 = v25642[1];
      v25653 = false;
      
      break;
      }
    case 'Some': {
      const v25655 = v25642[1];
      v25653 = true;
      
      break;
      }
    }
  stdlib.assert(v25653, {
    at: './index.rsh:147:14:application',
    fs: ['at ./index.rsh:160:32:application call to "chkTriumvir" (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:207:35:application call to "doPropose" (defined at: ./index.rsh:158:36:function exp)', 'at ./index.rsh:207:11:application call to [unknown function] (defined at: ./index.rsh:207:11:function exp)', 'at ./index.rsh:207:11:application call to [unknown function] (defined at: ./index.rsh:207:11:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_propose0_24690" (defined at: ./index.rsh:206:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'Triumvir_propose'
    });
  const v25679 = ['Triumvir_propose0_24690', v25600];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25504, v25516, v25518, v25519, v25523, v25679],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:208:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn1;
      
      switch (v25766[0]) {
        case 'Triumvir_propose0_24690': {
          const v25769 = v25766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          ;
          const v25783 = v25769[stdlib.checkedBigNumberify('./index.rsh:206:9:spread', stdlib.UInt_max, '0')];
          let v25784;
          switch (v25783[0]) {
            case 'Harvest': {
              const v25785 = v25783[1];
              v25784 = true;
              
              break;
              }
            case 'Kill': {
              const v25786 = v25783[1];
              v25784 = true;
              
              break;
              }
            case 'NewInfo': {
              const v25787 = v25783[1];
              const v25788 = v25787.protoFee;
              const v25789 = v25787.lpFee;
              const v25790 = v25787.totFee;
              const v25791 = stdlib.lt(v25788, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
              const v25792 = stdlib.lt(v25789, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
              const v25793 = v25791 ? v25792 : false;
              const v25794 = stdlib.add(v25789, v25788);
              const v25795 = stdlib.eq(v25790, v25794);
              const v25796 = v25793 ? v25795 : false;
              const v25797 = stdlib.lt(v25790, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
              const v25798 = v25796 ? v25797 : false;
              const v25799 = stdlib.gt(v25790, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
              const v25800 = v25798 ? v25799 : false;
              v25784 = v25800;
              
              break;
              }
            case 'NewTriumvirs': {
              const v25801 = v25783[1];
              v25784 = true;
              
              break;
              }
            case 'NoOp': {
              const v25802 = v25783[1];
              v25784 = true;
              
              break;
              }
            case 'Rewards': {
              const v25803 = v25783[1];
              v25784 = true;
              
              break;
              }
            }
          ;
          const v25804 = ['None', null];
          const v25805 = await stdlib.Array_asyncReduce([v25519], v25804, async([v25807], v25806, v25808) => {
            let v25809;
            switch (v25806[0]) {
              case 'None': {
                const v25810 = v25806[1];
                v25809 = true;
                
                break;
                }
              case 'Some': {
                const v25811 = v25806[1];
                v25809 = false;
                
                break;
                }
              }
            const v25812 = stdlib.addressEq(v25765, v25807);
            const v25813 = v25809 ? v25812 : false;
            const v25814 = ['Some', v25808];
            const v25815 = v25813 ? v25814 : v25806;
            
            return v25815;})
          let v25816;
          switch (v25805[0]) {
            case 'None': {
              const v25817 = v25805[1];
              v25816 = false;
              
              break;
              }
            case 'Some': {
              const v25818 = v25805[1];
              v25816 = true;
              
              break;
              }
            }
          ;
          const v25819 = stdlib.fromSome(v25805, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
          const v25821 = stdlib.Array_set(v25516, v25819, v25783);
          const v25822 = null;
          const v25823 = await txn1.getOutput('Triumvir_propose', 'v25822', ctc4, v25822);
          
          null;
          const v31810 = v25821;
          const v31812 = v25518;
          const v31813 = v25519;
          const v31815 = v25523;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_24690': {
          const v26078 = v25766[1];
          
          break;
          }
        case 'register0_24690': {
          const v26387 = v25766[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9, ctc10, ctc7, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn1;
  switch (v25766[0]) {
    case 'Triumvir_propose0_24690': {
      const v25769 = v25766[1];
      undefined /* setApiDetails */;
      ;
      const v25783 = v25769[stdlib.checkedBigNumberify('./index.rsh:206:9:spread', stdlib.UInt_max, '0')];
      let v25784;
      switch (v25783[0]) {
        case 'Harvest': {
          const v25785 = v25783[1];
          v25784 = true;
          
          break;
          }
        case 'Kill': {
          const v25786 = v25783[1];
          v25784 = true;
          
          break;
          }
        case 'NewInfo': {
          const v25787 = v25783[1];
          const v25788 = v25787.protoFee;
          const v25789 = v25787.lpFee;
          const v25790 = v25787.totFee;
          const v25791 = stdlib.lt(v25788, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v25792 = stdlib.lt(v25789, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v25793 = v25791 ? v25792 : false;
          const v25794 = stdlib.add(v25789, v25788);
          const v25795 = stdlib.eq(v25790, v25794);
          const v25796 = v25793 ? v25795 : false;
          const v25797 = stdlib.lt(v25790, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v25798 = v25796 ? v25797 : false;
          const v25799 = stdlib.gt(v25790, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v25800 = v25798 ? v25799 : false;
          v25784 = v25800;
          
          break;
          }
        case 'NewTriumvirs': {
          const v25801 = v25783[1];
          v25784 = true;
          
          break;
          }
        case 'NoOp': {
          const v25802 = v25783[1];
          v25784 = true;
          
          break;
          }
        case 'Rewards': {
          const v25803 = v25783[1];
          v25784 = true;
          
          break;
          }
        }
      stdlib.assert(v25784, {
        at: './index.rsh:159:14:application',
        fs: ['at ./index.rsh:209:26:application call to "doPropose" (defined at: ./index.rsh:158:36:function exp)', 'at ./index.rsh:209:14:application call to [unknown function] (defined at: ./index.rsh:209:14:function exp)'],
        msg: null,
        who: 'Triumvir_propose'
        });
      const v25804 = ['None', null];
      const v25805 = await stdlib.Array_asyncReduce([v25519], v25804, async([v25807], v25806, v25808) => {
        let v25809;
        switch (v25806[0]) {
          case 'None': {
            const v25810 = v25806[1];
            v25809 = true;
            
            break;
            }
          case 'Some': {
            const v25811 = v25806[1];
            v25809 = false;
            
            break;
            }
          }
        const v25812 = stdlib.addressEq(v25765, v25807);
        const v25813 = v25809 ? v25812 : false;
        const v25814 = ['Some', v25808];
        const v25815 = v25813 ? v25814 : v25806;
        
        return v25815;})
      let v25816;
      switch (v25805[0]) {
        case 'None': {
          const v25817 = v25805[1];
          v25816 = false;
          
          break;
          }
        case 'Some': {
          const v25818 = v25805[1];
          v25816 = true;
          
          break;
          }
        }
      stdlib.assert(v25816, {
        at: './index.rsh:147:14:application',
        fs: ['at ./index.rsh:160:32:application call to "chkTriumvir" (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:209:26:application call to "doPropose" (defined at: ./index.rsh:158:36:function exp)', 'at ./index.rsh:209:14:application call to [unknown function] (defined at: ./index.rsh:209:14:function exp)'],
        msg: null,
        who: 'Triumvir_propose'
        });
      const v25819 = stdlib.fromSome(v25805, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
      const v25821 = stdlib.Array_set(v25516, v25819, v25783);
      const v25822 = null;
      const v25823 = await txn1.getOutput('Triumvir_propose', 'v25822', ctc4, v25822);
      if (v25141) {
        stdlib.protect(ctc4, await interact.out(v25769, v25823), {
          at: './index.rsh:206:10:application',
          fs: ['at ./index.rsh:206:10:application call to [unknown function] (defined at: ./index.rsh:206:10:function exp)', 'at ./index.rsh:163:12:application call to "k" (defined at: ./index.rsh:209:14:function exp)', 'at ./index.rsh:209:35:application call to [unknown function] (defined at: ./index.rsh:162:20:function exp)', 'at ./index.rsh:209:14:application call to [unknown function] (defined at: ./index.rsh:209:14:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v31810 = v25821;
      const v31812 = v25518;
      const v31813 = v25519;
      const v31815 = v25523;
      return;
      
      break;
      }
    case 'Triumvir_support0_24690': {
      const v26078 = v25766[1];
      return;
      break;
      }
    case 'register0_24690': {
      const v26387 = v25766[1];
      return;
      break;
      }
    }
  
  
  };
export async function Triumvir_support(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Triumvir_support expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc2], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc3,
    Kill: ctc4,
    NewInfo: ctc6,
    NewTriumvirs: ctc7,
    NoOp: ctc4,
    Rewards: ctc2
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc1,
    protoAddr: ctc2,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Token;
  const ctc14 = stdlib.T_Data({
    None: ctc4,
    Some: ctc13
    });
  const ctc15 = stdlib.T_Tuple([ctc0, ctc14, ctc13]);
  const ctc16 = stdlib.T_Data({
    Triumvir_propose0_24690: ctc12,
    Triumvir_support0_24690: ctc11,
    register0_24690: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc18]);
  
  
  const [v25504, v25516, v25518, v25519, v25523] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc9, ctc10, ctc7, ctc1]);
  const v25681 = ctc.selfAddress();
  const v25683 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_support0_24690" (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v25684 = v25683[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v25685 = v25683[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v25706 = stdlib.lt(v25684, stdlib.checkedBigNumberify('./index.rsh:185:31:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v25706, {
    at: './index.rsh:185:14:application',
    fs: ['at ./index.rsh:212:41:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_support0_24690" (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25707 = ['None', null];
  const v25708 = await stdlib.Array_asyncReduce([v25519], v25707, async([v25710], v25709, v25711) => {
    let v25712;
    switch (v25709[0]) {
      case 'None': {
        const v25713 = v25709[1];
        v25712 = true;
        
        break;
        }
      case 'Some': {
        const v25714 = v25709[1];
        v25712 = false;
        
        break;
        }
      }
    const v25715 = stdlib.addressEq(v25681, v25710);
    const v25716 = v25712 ? v25715 : false;
    const v25717 = ['Some', v25711];
    const v25718 = v25716 ? v25717 : v25709;
    
    return v25718;})
  let v25719;
  switch (v25708[0]) {
    case 'None': {
      const v25720 = v25708[1];
      v25719 = false;
      
      break;
      }
    case 'Some': {
      const v25721 = v25708[1];
      v25719 = true;
      
      break;
      }
    }
  stdlib.assert(v25719, {
    at: './index.rsh:147:14:application',
    fs: ['at ./index.rsh:186:32:application call to "chkTriumvir" (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:212:41:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_support0_24690" (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25722 = stdlib.fromSome(v25708, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
  const v25723 = stdlib.eq(v25684, v25722);
  const v25724 = v25723 ? false : true;
  stdlib.assert(v25724, {
    at: './index.rsh:187:14:application',
    fs: ['at ./index.rsh:212:41:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_support0_24690" (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25726 = v25516[v25684];
  const v25727 = stdlib.digest(ctc12, [v25685]);
  const v25728 = stdlib.digest(ctc12, [v25726]);
  const v25729 = stdlib.digestEq(v25727, v25728);
  stdlib.assert(v25729, {
    at: './index.rsh:189:14:application',
    fs: ['at ./index.rsh:212:41:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:212:17:application call to [unknown function] (defined at: ./index.rsh:212:17:function exp)', 'at ./index.rsh:132:19:application call to "runTriumvir_support0_24690" (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25754 = ['Triumvir_support0_24690', v25683];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25504, v25516, v25518, v25519, v25523, v25754],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:213:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn1;
      
      switch (v25766[0]) {
        case 'Triumvir_propose0_24690': {
          const v25769 = v25766[1];
          
          break;
          }
        case 'Triumvir_support0_24690': {
          const v26078 = v25766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          ;
          const v26175 = v26078[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, '0')];
          const v26176 = v26078[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, '1')];
          const v26177 = stdlib.lt(v26175, stdlib.checkedBigNumberify('./index.rsh:185:31:dot', stdlib.UInt_max, '3'));
          ;
          const v26178 = ['None', null];
          const v26179 = await stdlib.Array_asyncReduce([v25519], v26178, async([v26181], v26180, v26182) => {
            let v26183;
            switch (v26180[0]) {
              case 'None': {
                const v26184 = v26180[1];
                v26183 = true;
                
                break;
                }
              case 'Some': {
                const v26185 = v26180[1];
                v26183 = false;
                
                break;
                }
              }
            const v26186 = stdlib.addressEq(v25765, v26181);
            const v26187 = v26183 ? v26186 : false;
            const v26188 = ['Some', v26182];
            const v26189 = v26187 ? v26188 : v26180;
            
            return v26189;})
          let v26190;
          switch (v26179[0]) {
            case 'None': {
              const v26191 = v26179[1];
              v26190 = false;
              
              break;
              }
            case 'Some': {
              const v26192 = v26179[1];
              v26190 = true;
              
              break;
              }
            }
          ;
          const v26193 = stdlib.fromSome(v26179, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
          const v26194 = stdlib.eq(v26175, v26193);
          const v26195 = v26194 ? false : true;
          ;
          const v26197 = v25516[v26175];
          const v26198 = stdlib.digest(ctc12, [v26176]);
          const v26199 = stdlib.digest(ctc12, [v26197]);
          const v26200 = stdlib.digestEq(v26198, v26199);
          ;
          const v26203 = stdlib.Array_set(v25516, v26175, v25504);
          const v26204 = null;
          const v26205 = await txn1.getOutput('Triumvir_support', 'v26204', ctc4, v26204);
          
          null;
          switch (v26197[0]) {
            case 'Harvest': {
              const v26246 = v26197[1];
              const v26247 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '0')];
              const v26248 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '1')];
              const v26249 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '2')];
              const v26250 = v25518.protoFee;
              const v26251 = v25518.lpFee;
              const v26252 = v25518.totFee;
              const v26253 = v25518.protoAddr;
              const v26254 = v25518.locked;
              const v26267 = {
                locked: v26254,
                lpFee: v26251,
                protoAddr: v26253,
                protoFee: v26250,
                totFee: v26252
                };
              const v26268 = [stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                accs: [v26249],
                bills: stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0'),
                fees: v26248,
                kind: 'remote',
                obj: v26247,
                pays: stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0'),
                toks: []
                })), undefined)];
              const v26269 = await txn1.getOutput('internal', 'v26268', ctc19, v26268);
              const v26271 = v26269[stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0')];
              const v26280 = stdlib.add(v25523, v26271);
              const v26281 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0'), v26271);
              ;
              const v31873 = v26203;
              const v31875 = v25518;
              const v31876 = v25519;
              const v31878 = v26280;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Kill': {
              const v26290 = v26197[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v26299 = v26197[1];
              const v26300 = v26299.locked;
              const v26301 = v26299.lpFee;
              const v26302 = v26299.protoAddr;
              const v26303 = v26299.protoFee;
              const v26304 = v26299.totFee;
              const v26305 = {
                locked: v26300,
                lpFee: v26301,
                protoAddr: v26302,
                protoFee: v26303,
                totFee: v26304
                };
              const v31887 = v26203;
              const v31889 = v26305;
              const v31890 = v25519;
              const v31892 = v25523;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v26315 = v26197[1];
              const v31894 = v26203;
              const v31896 = v25518;
              const v31897 = v26315;
              const v31899 = v25523;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v26324 = v26197[1];
              const v31901 = v26203;
              const v31903 = v25518;
              const v31904 = v25519;
              const v31906 = v25523;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v26333 = v26197[1];
              const v26335 = (stdlib.le(await ctc.getBalance(), v25523) ? stdlib.checkedBigNumberify('./index.rsh:178:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25523));
              const v26336 = stdlib.add(v26335, v25523);
              const v26340 = stdlib.sub(v26336, v26335);
              sim_r.txns.push({
                amt: v26335,
                kind: 'from',
                to: v26333,
                tok: undefined /* Nothing */
                });
              const v31908 = v26203;
              const v31910 = v25518;
              const v31911 = v25519;
              const v31913 = v26340;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_24690': {
          const v26387 = v25766[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9, ctc10, ctc7, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn1;
  switch (v25766[0]) {
    case 'Triumvir_propose0_24690': {
      const v25769 = v25766[1];
      return;
      break;
      }
    case 'Triumvir_support0_24690': {
      const v26078 = v25766[1];
      undefined /* setApiDetails */;
      ;
      const v26175 = v26078[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, '0')];
      const v26176 = v26078[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, '1')];
      const v26177 = stdlib.lt(v26175, stdlib.checkedBigNumberify('./index.rsh:185:31:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v26177, {
        at: './index.rsh:185:14:application',
        fs: ['at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26178 = ['None', null];
      const v26179 = await stdlib.Array_asyncReduce([v25519], v26178, async([v26181], v26180, v26182) => {
        let v26183;
        switch (v26180[0]) {
          case 'None': {
            const v26184 = v26180[1];
            v26183 = true;
            
            break;
            }
          case 'Some': {
            const v26185 = v26180[1];
            v26183 = false;
            
            break;
            }
          }
        const v26186 = stdlib.addressEq(v25765, v26181);
        const v26187 = v26183 ? v26186 : false;
        const v26188 = ['Some', v26182];
        const v26189 = v26187 ? v26188 : v26180;
        
        return v26189;})
      let v26190;
      switch (v26179[0]) {
        case 'None': {
          const v26191 = v26179[1];
          v26190 = false;
          
          break;
          }
        case 'Some': {
          const v26192 = v26179[1];
          v26190 = true;
          
          break;
          }
        }
      stdlib.assert(v26190, {
        at: './index.rsh:147:14:application',
        fs: ['at ./index.rsh:186:32:application call to "chkTriumvir" (defined at: ./index.rsh:145:33:function exp)', 'at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26193 = stdlib.fromSome(v26179, stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, '0'));
      const v26194 = stdlib.eq(v26175, v26193);
      const v26195 = v26194 ? false : true;
      stdlib.assert(v26195, {
        at: './index.rsh:187:14:application',
        fs: ['at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26197 = v25516[v26175];
      const v26198 = stdlib.digest(ctc12, [v26176]);
      const v26199 = stdlib.digest(ctc12, [v26197]);
      const v26200 = stdlib.digestEq(v26198, v26199);
      stdlib.assert(v26200, {
        at: './index.rsh:189:14:application',
        fs: ['at ./index.rsh:214:32:application call to "doSupport" (defined at: ./index.rsh:184:42:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26203 = stdlib.Array_set(v25516, v26175, v25504);
      const v26204 = null;
      const v26205 = await txn1.getOutput('Triumvir_support', 'v26204', ctc4, v26204);
      if (v25141) {
        stdlib.protect(ctc4, await interact.out(v26078, v26205), {
          at: './index.rsh:211:10:application',
          fs: ['at ./index.rsh:211:10:application call to [unknown function] (defined at: ./index.rsh:211:10:function exp)', 'at ./index.rsh:192:12:application call to "k" (defined at: ./index.rsh:214:20:function exp)', 'at ./index.rsh:214:47:application call to [unknown function] (defined at: ./index.rsh:191:20:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v26197[0]) {
        case 'Harvest': {
          const v26246 = v26197[1];
          const v26247 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '0')];
          const v26248 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '1')];
          const v26249 = v26246[stdlib.checkedBigNumberify('./index.rsh:172:19:array', stdlib.UInt_max, '2')];
          const v26250 = v25518.protoFee;
          const v26251 = v25518.lpFee;
          const v26252 = v25518.totFee;
          const v26253 = v25518.protoAddr;
          const v26254 = v25518.locked;
          const v26267 = {
            locked: v26254,
            lpFee: v26251,
            protoAddr: v26253,
            protoFee: v26250,
            totFee: v26252
            };
          const v26268 = undefined /* Remote */;
          const v26269 = await txn1.getOutput('internal', 'v26268', ctc19, v26268);
          const v26271 = v26269[stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0')];
          const v26280 = stdlib.add(v25523, v26271);
          const v26281 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:174:46:application', stdlib.UInt_max, '0'), v26271);
          stdlib.assert(v26281, {
            at: './index.rsh:174:46:application',
            fs: ['at ./index.rsh:168:45:application call to [unknown function] (defined at: ./index.rsh:172:39:function exp)', 'at ./index.rsh:168:45:application call to [unknown function] (defined at: ./index.rsh:168:45:function exp)', 'at ./index.rsh:194:59:application call to "evalCommand" (defined at: ./index.rsh:168:33:function exp)', 'at ./index.rsh:214:47:application call to [unknown function] (defined at: ./index.rsh:191:20:function exp)', 'at ./index.rsh:214:20:application call to [unknown function] (defined at: ./index.rsh:214:20:function exp)'],
            msg: 'remote bill check',
            who: 'Triumvir_support'
            });
          const v31873 = v26203;
          const v31875 = v25518;
          const v31876 = v25519;
          const v31878 = v26280;
          return;
          
          break;
          }
        case 'Kill': {
          const v26290 = v26197[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v26299 = v26197[1];
          const v26300 = v26299.locked;
          const v26301 = v26299.lpFee;
          const v26302 = v26299.protoAddr;
          const v26303 = v26299.protoFee;
          const v26304 = v26299.totFee;
          const v26305 = {
            locked: v26300,
            lpFee: v26301,
            protoAddr: v26302,
            protoFee: v26303,
            totFee: v26304
            };
          const v31887 = v26203;
          const v31889 = v26305;
          const v31890 = v25519;
          const v31892 = v25523;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v26315 = v26197[1];
          const v31894 = v26203;
          const v31896 = v25518;
          const v31897 = v26315;
          const v31899 = v25523;
          return;
          
          break;
          }
        case 'NoOp': {
          const v26324 = v26197[1];
          const v31901 = v26203;
          const v31903 = v25518;
          const v31904 = v25519;
          const v31906 = v25523;
          return;
          
          break;
          }
        case 'Rewards': {
          const v26333 = v26197[1];
          const v26335 = (stdlib.le(await ctc.getBalance(), v25523) ? stdlib.checkedBigNumberify('./index.rsh:178:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25523));
          const v26336 = stdlib.add(v26335, v25523);
          const v26340 = stdlib.sub(v26336, v26335);
          ;
          const v31908 = v26203;
          const v31910 = v25518;
          const v31911 = v25519;
          const v31913 = v26340;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_24690': {
      const v26387 = v25766[1];
      return;
      break;
      }
    }
  
  
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc2], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc3,
    Kill: ctc4,
    NewInfo: ctc6,
    NewTriumvirs: ctc7,
    NoOp: ctc4,
    Rewards: ctc2
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc1,
    protoAddr: ctc2,
    protoFee: ctc1,
    totFee: ctc1
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Data({
    None: ctc4,
    Some: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc0, ctc12, ctc11]);
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc16 = stdlib.T_Data({
    Triumvir_propose0_24690: ctc14,
    Triumvir_support0_24690: ctc15,
    register0_24690: ctc13
    });
  
  
  const [v25504, v25516, v25518, v25519, v25523] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc9, ctc10, ctc7, ctc1]);
  const v25576 = ctc.selfAddress();
  const v25578 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:17:application call to [unknown function] (defined at: ./index.rsh:202:17:function exp)', 'at ./index.rsh:132:19:application call to "runregister0_24690" (defined at: ./index.rsh:201:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v25579 = v25578[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v25588 = stdlib.ctcAddrEq(v25579, v25576);
  stdlib.assert(v25588, {
    at: './index.rsh:151:14:application',
    fs: ['at ./index.rsh:202:42:application call to "doRegister" (defined at: ./index.rsh:150:54:function exp)', 'at ./index.rsh:202:17:application call to [unknown function] (defined at: ./index.rsh:202:17:function exp)', 'at ./index.rsh:202:17:application call to [unknown function] (defined at: ./index.rsh:202:17:function exp)', 'at ./index.rsh:132:19:application call to "runregister0_24690" (defined at: ./index.rsh:201:9:function exp)', 'at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)'],
    msg: null,
    who: 'register'
    });
  const v25596 = ['register0_24690', v25578];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25504, v25516, v25518, v25519, v25523, v25596],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:203:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn1;
      
      switch (v25766[0]) {
        case 'Triumvir_propose0_24690': {
          const v25769 = v25766[1];
          
          break;
          }
        case 'Triumvir_support0_24690': {
          const v26078 = v25766[1];
          
          break;
          }
        case 'register0_24690': {
          const v26387 = v25766[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          ;
          const v26659 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '0')];
          const v26660 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '1')];
          const v26661 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '2')];
          const v26662 = stdlib.ctcAddrEq(v26659, v25765);
          ;
          const v26663 = v25518.protoFee;
          const v26664 = v25518.lpFee;
          const v26665 = v25518.totFee;
          const v26666 = v25518.protoAddr;
          const v26667 = v25518.locked;
          const v26668 = {
            locked: v26667,
            lpFee: v26664,
            protoAddr: v26666,
            protoFee: v26663,
            totFee: v26665
            };
          const v26669 = await txn1.getOutput('register', 'v26668', ctc6, v26668);
          
          null;
          const v31971 = v25516;
          const v31973 = v25518;
          const v31974 = v25519;
          const v31976 = v25523;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9, ctc10, ctc7, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v25766], secs: v25768, time: v25767, didSend: v25141, from: v25765 } = txn1;
  switch (v25766[0]) {
    case 'Triumvir_propose0_24690': {
      const v25769 = v25766[1];
      return;
      break;
      }
    case 'Triumvir_support0_24690': {
      const v26078 = v25766[1];
      return;
      break;
      }
    case 'register0_24690': {
      const v26387 = v25766[1];
      undefined /* setApiDetails */;
      ;
      const v26659 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '0')];
      const v26660 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '1')];
      const v26661 = v26387[stdlib.checkedBigNumberify('./index.rsh:201:9:spread', stdlib.UInt_max, '2')];
      const v26662 = stdlib.ctcAddrEq(v26659, v25765);
      stdlib.assert(v26662, {
        at: './index.rsh:151:14:application',
        fs: ['at ./index.rsh:204:33:application call to "doRegister" (defined at: ./index.rsh:150:54:function exp)', 'at ./index.rsh:204:20:application call to [unknown function] (defined at: ./index.rsh:204:20:function exp)'],
        msg: null,
        who: 'register'
        });
      const v26663 = v25518.protoFee;
      const v26664 = v25518.lpFee;
      const v26665 = v25518.totFee;
      const v26666 = v25518.protoAddr;
      const v26667 = v25518.locked;
      const v26668 = {
        locked: v26667,
        lpFee: v26664,
        protoAddr: v26666,
        protoFee: v26663,
        totFee: v26665
        };
      const v26669 = await txn1.getOutput('register', 'v26668', ctc6, v26668);
      if (v25141) {
        stdlib.protect(ctc4, await interact.out(v26387, v26669), {
          at: './index.rsh:201:10:application',
          fs: ['at ./index.rsh:201:10:application call to [unknown function] (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:153:12:application call to "k" (defined at: ./index.rsh:204:20:function exp)', 'at ./index.rsh:204:48:application call to [unknown function] (defined at: ./index.rsh:152:20:function exp)', 'at ./index.rsh:204:20:application call to [unknown function] (defined at: ./index.rsh:204:20:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v31971 = v25516;
      const v31973 = v25518;
      const v31974 = v25519;
      const v31976 = v25523;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[96])[3],(uint64,uint64,uint64,address,byte))`, `Triumvir_propose((byte,byte[96]))byte[0]`, `Triumvir_support(uint64,(byte,byte[96]))byte[0]`, `register(uint64,(byte,byte[8]),uint64)(uint64,uint64,uint64,address,byte)`]
    },
  appApproval: `BiATAAEDYQIFowIgCGTMms7XBMWA36QO6JToygSEAzm9A2AJBCYHAQEAAQABAgEDAQQFYXBwSUQiNQAxGEEGyClkSSJbNQEhCFs1AjYaABdJQQC3IjUEIzUGSSEKDEAAL0khCwxAABQhCxJENhoBNf8qNP9QIQivUEIApyEKEkQ2GgE2GgJQNf8oNP9QQgCTSSEMDEAAHCEMEkQ2GgE2GgJQNhoDUDX/KzT/UIFQr1BCAHCB9rvQ5QESRDQBJBJEKmQoZFArZFAnBGRQJwVkUEk1AyENIQ5YNf80AyEPIRBYNAMlIQZYUDT/VykINP9XAQhQNP9XMQhQNP9XCSBQNP9XAAFQUDUHQgX1NhoCFzUENhoDNhoBF0khBAxABHwhBBJEJDQBEkQ0BEkiEkw0AhIRRCpkKGRQK2RQJwRkUCcFZFBJNQNJSklXAGE1/yUhBlg1/iENIQ5YNf0hDyEQWDX8gZ0EWzX7STUFNfqABKLqoRI0+lCwNPoiVUkjDEAC0UkhBAxAAIshBBJENPpXARk19zT3Ils19icGNPYWUAMxABJEgAgAAAAAAABoLDT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQULA0/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUDUHgAS6Xf0zNPYWUDT3VwgJUDT3VxEIULA0/zT+IjT9NPwyBjT7QgRKSDT6VwFpNfc09yJbSTX2JAxEIRGvNfUiNfQ0/CEHNPQLIQdYNfM09SJVQAAGIzXyQgAGIjXyQgAANPUoNPQWUDTyMQA08xIQTTX1NPQjCEk19CQMQP/DNPUiVUAABiI19EIABiM19EIAADT0RDT2IjT1STXzI1s08yJVTRNENP4lNPYLJVg18zT3VwhhATTzARJENP4iJTT2C1I0/1A0/iVJNPYLCCEGUlA18oAIAAAAAAAAZlywKTUHgASiIOREMQBQNPYWUDTzULA08yJVSSQMQAB0SSESDEAAVUkhBQxAAD0hBRJENPNXASA18TIKYDIKeAk0+wk18LEisgE08LIII7IQNPGyB7M0/zTyIjT9NPwyBjTwNPsINPAJQgMqSDT/NPIiNP00/DIGNPtCAxlINPNXAWA18TT/NPIiNP008TIGNPtCAwFJIwxAAEtJIQQMQAAzSDTzVwE5NfE0/zTyIjTxVzgBNPFXCAhQNPFXGCBQNPFXAAhQNPFXEAhQNPwyBjT7QgLBSDT/NPIjNP00/DIGNPtCArBINPNXATA18ScGNPFXAAhQAzXvMgpgMgp4CRY17rEisgGBBrIQNPEiW7IYgARTzh8tsho08VcQILIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTxVxAgshyzMgpgMgp4CTTuFwkWtwA+VwQAUDXwgAgAAAAAAABmnDTwULA08Ek17yJbNe4iNO4SRDT/NPIiNP00/DIGNPs07ghCAgtINPpXAWE19zT3STX2IlVJJAxAACZJIRIMQAAYSSEFDEAACiEFEkQjNfVCAGhIIzX1QgBhSCM19UIAWkkjDEAATUkhBAxAAD9INPZXATlJNfQiWzXzNPQhCFs18jT0gRBbNfE08yEJDDTyIQkMEDTxNPI08wgSEDTxIQkMEDTxIg0QNfVCAA5IIzX1QgAHSCM19UIAADT1RCERrzX0IjXzNPwhBzTzCyEHWDXyNPQiVUAABiM18UIABiI18UIAADT0KDTzFlA08TEANPISEE019DTzIwhJNfMkDED/wzT0IlVAAAYiNfNCAAYjNfNCAAA080SACAAAAAAAAGTesCk1B4AE7fYFAzEAUDT2ULA0/zT+IiUiNPRJNfIjWzTyIlVNC1I09lA0/iVJIjT0STXyI1s08iJVTQsIIQZSUCI0/TT8MgY0+0IAwiISRCI0ARJENARJIhJMNAISEURJNQU1/4AEMirrWTT/ULCBoI0GiAFNgGEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASTX+SUlQNP5QIoAJAAAAAAAAAAAZMgpQgAgAAAAAAAAABVCACAAAAAAAAAAeUDT/MgYiQgAANf81/jX9Nfw1+zX6Nfk0+0EAA0IARTT5NPpQNPxQNP1QNP8WUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwGB/QKBf1hnJwVLAYH8A4EpWGdIJDUBMgY1AkIAHDEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 549,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:174:46:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v25499",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
            "internalType": "enum _enum_T3",
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
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
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
            "internalType": "struct T2",
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
        "internalType": "struct T3",
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
            "internalType": "enum _enum_T15",
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
        "internalType": "struct T15",
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
            "internalType": "enum _enum_T3",
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
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
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
            "internalType": "struct T2",
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
        "internalType": "struct T3",
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
                "name": "v25499",
                "type": "address[3]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                            "internalType": "enum _enum_T3",
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
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                        "internalType": "struct T3",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_Triumvir_propose0_24690",
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
                            "internalType": "enum _enum_T3",
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
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                        "internalType": "struct T3",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_support0_24690",
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
                            "internalType": "enum _enum_T15",
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
                        "internalType": "struct T15",
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
                    "name": "_register0_24690",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v25766",
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
    "name": "_reach_oe_v25822",
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
    "name": "_reach_oe_v26204",
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
    "name": "_reach_oe_v26268",
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
    "name": "_reach_oe_v26668",
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
                "internalType": "enum _enum_T3",
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
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T1",
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
                "internalType": "struct T2",
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
            "internalType": "struct T3[3]",
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
            "internalType": "struct T2",
            "name": "protoInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
            "internalType": "enum _enum_T3",
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
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
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
            "internalType": "struct T2",
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
        "internalType": "struct T3",
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
            "internalType": "enum _enum_T3",
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
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem2",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
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
            "internalType": "struct T2",
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
        "internalType": "struct T3",
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
                            "internalType": "enum _enum_T3",
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
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                        "internalType": "struct T3",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_Triumvir_propose0_24690",
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
                            "internalType": "enum _enum_T3",
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
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem2",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T1",
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
                            "internalType": "struct T2",
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
                        "internalType": "struct T3",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Triumvir_support0_24690",
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
                            "internalType": "enum _enum_T15",
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
                        "internalType": "struct T15",
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
                    "name": "_register0_24690",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v25766",
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
            "internalType": "enum _enum_T15",
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
        "internalType": "struct T15",
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
        "internalType": "struct T2",
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
  Bytecode: `0x60806040526040516200331c3803806200331c8339810160408190526200002691620005f3565b60008055436003556200003862000213565b7fe5d35ee1d5d0380ec4bb3893af49ad0266757898dc8e4981d86f4fcd3a980e5533836040516200006b929190620006dd565b60405180910390a162000081341560086200013e565b8051600490528051600060a0909101819052815160208084018051929092528351825182015283519151604090810192909252818401805193909352825160199101528151309101528051600560609091015251601e608090910152620000e76200026d565b81518151526020808301518183018051919091528051600090830181905260408086015183519091015291850151518151606001528051436080909101525160a00152620001358162000168565b505050620008ed565b81620001645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019257600080805560018190556200018f9060029062000291565b50565b6200019c620002d0565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551620001e891839101620007f6565b604051602081830303815290604052600290805190602001906200020e9291906200033e565b505050565b604051806060016040528062000228620003cd565b8152602001620002376200046a565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b6040518060400160405280620002826200049a565b815260200162000268620004af565b5080546200029f90620008b0565b6000825580601f10620002b0575050565b601f0160209004906000526020600020908101906200018f919062000533565b6040518060a00160405280620002e5620003cd565b8152602001620002f46200046a565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001620003316200054a565b8152602001600081525090565b8280546200034c90620008b0565b90600052602060002090601f016020900481019282620003705760008555620003bb565b82601f106200038b57805160ff1916838001178555620003bb565b82800160010185558215620003bb579182015b82811115620003bb5782518255916020019190600101906200039e565b50620003c992915062000533565b5090565b6040805160e0810190915280600081526040805160608101825260008082526020828101829052928201529101908152602001600015158152602001620004476040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b8152602001620004566200054a565b815260006020820181905260409091015290565b60405180606001604052806003905b62000483620003cd565b815260200190600190039081620004795790505090565b604051806020016040528062000268620003cd565b6040518060c00160405280620004c46200046a565b8152602001600015158152602001620005106040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81526020016200051f6200054a565b815260200160008152602001600081525090565b5b80821115620003c9576000815560010162000534565b60405180606001604052806003906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005a357620005a362000568565b60405290565b604051602081016001600160401b0381118282101715620005a357620005a362000568565b604051606081016001600160401b0381118282101715620005a357620005a362000568565b600081830360808112156200060757600080fd5b620006116200057e565b8351815260206060601f19840112156200062a57600080fd5b62000634620005a9565b925085603f8601126200064657600080fd5b62000650620005ce565b8060808701888111156200066357600080fd5b8388015b81811015620006975780516001600160a01b0381168114620006895760008081fd5b845292840192840162000667565b50508452508101919091529392505050565b8060005b6003811015620006d75781516001600160a01b0316845260209384019390910190600101620006ad565b50505050565b600060a08201905060018060a01b03841682528251602083015260208301516200070c604084018251620006a9565b509392505050565b8051600681106200073557634e487b7160e01b600052602160045260246000fd5b8083525060208101516200076c602084018280516001600160a01b0390811683526020808301519084015260409182015116910152565b506040810151801515608084015250606081810151805160a0850152602081015160c0850152604081015160e0850152908101516001600160a01b031661010084015260808101511515610120840152506080810151620007d2610140840182620006a9565b5060a081015115156101a083015260c001516001600160a01b03166101c090910152565b60006108a0820190506200080c82845162000714565b6020808401516101e080850160005b600381101562000843576200083282855162000714565b92840192908201906001016200081b565b5050505060408481015180511515610780860152918201516107a08501528101516001600160a01b03166107c08401526060808201516107e08501526080909101516108008401528301516200089e610820840182620006a9565b50608083015161088083015292915050565b600181811c90821680620008c557607f821691505b60208210811415620008e757634e487b7160e01b600052602260045260246000fd5b50919050565b612a1f80620008fd6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461010b578063ab53f2c614610120578063b17038af14610143578063cde26dbc1461015657005b80631e93b0f1146100825780633b02a717146100a65780634012e02e146100c65780635f0a3358146100e857005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100b96100b4366004611e9e565b610169565b60405161009d9190611f20565b3480156100d257600080fd5b506100db6101e3565b60405161009d9190612039565b6100fb6100f6366004612218565b610321565b604051901515815260200161009d565b34801561011757600080fd5b50600154610093565b34801561012c57600080fd5b50610135610381565b60405161009d929190612272565b6100fb6101513660046122ac565b61041e565b6100806101643660046122c9565b610472565b61017161177d565b6101796117b7565b6101816117db565b6101896117f5565b60408051606080820183526001600160a01b038a8116835260208084018b905290891683850152908401919091526002835281518082019092528282528301526101d38284610496565b50506040015190505b9392505050565b6101eb61182a565b6003600054141561031257600060028054610205906122e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610231906122e2565b801561027e5780601f106102535761010080835404028352916020019161027e565b820191906000526020600020905b81548152906001019060200180831161026157829003601f168201915b505050505080602001905181019061029691906124ff565b90506102a0611857565b604080830180516060908101518451528151602090810151855182015282516080908101518651860152835185015186516001600160a01b0390911690840152925151855190151593019290925284015181840180519190915293810151845190910152905182519091015251919050565b61031e60006007611606565b90565b600061032b6117b7565b6103336117db565b61033b6117f5565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526103728284610496565b50506020015190505b92915050565b600060606000546002808054610396906122e2565b80601f01602080910402602001604051908101604052809291908181526020018280546103c2906122e2565b801561040f5780601f106103e45761010080835404028352916020019161040f565b820191906000526020600020905b8154815290600101906020018083116103f257829003601f168201915b50505050509050915091509091565b60006104286117b7565b6104306117db565b6104386117f5565b6040805160208082018352878252838101919091526000835281518082019092528282528301526104698284610496565b50505192915050565b61047a6117b7565b61049261048c36849003840184612602565b82610496565b5050565b6104a66003600054146015611606565b81516104c19015806104ba57508251600154145b6016611606565b6000808055600280546104d3906122e2565b80601f01602080910402602001604051908101604052809291908181526020018280546104ff906122e2565b801561054c5780601f106105215761010080835404028352916020019161054c565b820191906000526020600020905b81548152906001019060200180831161052f57829003601f168201915b505050505080602001905181019061056491906124ff565b905061056e611877565b7f02a3151c2c7d6683ec4894b1ffaf1065f6b21fc9e9e2c11e92c7386ba6c727dd338560405161059f92919061271d565b60405180910390a160006020850151515160028111156105c1576105c1611f5a565b14156109e75760208085015151015181526105de34156009611606565b60008151515160058111156105f5576105f5611f5a565b14156106075760016020820152610757565b600181515151600581111561061e5761061e611f5a565b14156106305760016020820152610757565b600281515151600581111561064757610647611f5a565b14156106e05780515160600151604082018190525160641161066a576000610677565b6064816040015160200151105b6106825760006106a4565b6040810151805160209091015161069991906127dc565b816040015160400151145b6106af5760006106bc565b6064816040015160400151105b6106c75760006106d4565b6000816040015160400151115b15156020820152610757565b60038151515160058111156106f7576106f7611f5a565b14156107095760016020820152610757565b600481515151600581111561072057610720611f5a565b14156107325760016020820152610757565b600581515151600581111561074957610749611f5a565b141561075757600160208201525b6107668160200151600a611606565b6060810180516000908190528151602001819052905160a08301525b600381101561086e57826060015181600381106107a1576107a16127f4565b60200201516001600160a01b031660c0830152600060a08301515160018111156107cd576107cd611f5a565b14156107df57600160e0830152610806565b600160a08301515160018111156107f8576107f8611f5a565b141561080657600060e08301525b61010082018051600190525160400181905260e0820151610828576000610842565b8160c001516001600160a01b0316336001600160a01b0316145b610850578160a00151610857565b8161010001515b60a0830152806108668161280a565b915050610782565b5060a08101516080820181905251600090600181111561089057610890611f5a565b14156108a35760006101208201526108cb565b600160808201515160018111156108bc576108bc611f5a565b14156108cb5760016101208201525b6108db816101200151600b611606565b604051600081527fb2e6f5d8f0c2dd82fbeb62942d00b3b5c76c88f8fae76cc7a5371f2cee928d8e9060200160405180910390a1600083528051516040517f619fcaef70922499f1342fa8e0204004626db66c166071a16d11aa1d01be00dc9161094791339190612825565b60405180910390a16109576119ee565b8251815152602083015161099c906001608085015151600181111561097e5761097e611f5a565b1461098a576000610994565b8360800151604001515b84515161162c565b602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e1816116a0565b50611600565b6001602085015151516002811115610a0157610a01611f5a565b141561146c5760208401515160400151610140820152610a233415600c611606565b610a3a60038261014001516000015110600d611606565b61016081018051600090819052815160200181905290516101a08301525b6003811015610b4d5782606001518160038110610a7757610a776127f4565b60200201516001600160a01b03166101c083015260006101a0830151516001811115610aa557610aa5611f5a565b1415610ab85760016101e0830152610ae1565b60016101a0830151516001811115610ad257610ad2611f5a565b1415610ae15760006101e08301525b6102008201805160019052516040018190526101e0820151610b04576000610b1f565b816101c001516001600160a01b0316336001600160a01b0316145b610b2e57816101a00151610b35565b8161020001515b6101a083015280610b458161280a565b915050610a58565b506101a08101516101808201819052516000906001811115610b7157610b71611f5a565b1415610b84576000610220820152610bad565b6001610180820151516001811115610b9e57610b9e611f5a565b1415610bad5760016102208201525b610bbd816102200151600e611606565b610c0e6001610180830151516001811115610bda57610bda611f5a565b14610be6576000610bf1565b816101800151604001515b6101408301515114610c04576001610c07565b60005b600f611606565b610c9482602001518261014001516000015160038110610c3057610c306127f4565b6020020151604051602001610c459190612843565b60408051601f198184030181529082905280516020918201206101408501518201519092610c739201612843565b6040516020818303038152906040528051906020012060001c146010611606565b6020820151610140820151518351610cad92919061162c565b610240820152604051600081527f0364dd48b6b0b192c284a0577c06c0ec191245eea3efcdc78c8259032e04d3ee9060200160405180910390a1600060208085019190915261014082015151908301517f69fa7d903a904d97741865ee6c7359fd00d734b9ed61e28bcb6e1a6b8a46145b9133918160038110610d3257610d326127f4565b6020020151604051610d4693929190612852565b60405180910390a1600060208301516101408301515160038110610d6c57610d6c6127f4565b6020020151516005811115610d8357610d83611f5a565b141561101f5760208201516101408201515160038110610da557610da56127f4565b6020908102919091015181015161026083015260408084018051606090810151610280860180519190915282518501518151909501949094528151608090810151855185015282519093015184516001600160a01b0390911691015251519151911515910152610e1660004761287f565b6103c08201526102608101516040908101516102808301519151600092632d150b7560e21b92610e4b92909190602401612896565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836102600151600001516001600160a01b0316600084604051610ea691906128b3565b60006040518083038185875af1925050503d8060008114610ee3576040519150601f19603f3d011682016040523d82523d6000602084013e610ee8565b606091505b5091509150610ef982826011611742565b506103c0840151610f0a904761287f565b6102a0850151528051610f2690820160209081019083016128cf565b6102a08501805160200191909152516102c085018190526040517f9b6c2ada8f6e378c5014ac2e0b414172a0b4336db3b056ceb3ccd01a6bb2771391610f8f91815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16102c084015151610faa90156012611606565b610fb26119ee565b855181515261024085015160208083018051929092528151600091015260408088015182519091015260608088015182519091015251436080918201526102c0860151519087015161100491906127dc565b602082015160a00152611016816116a0565b50505050611600565b60016020830151610140830151516003811061103d5761103d6127f4565b602002015151600581111561105457611054611f5a565b14156110b2576110626119ee565b8251815152610240820151602080830180519290925281516001910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e1816116a0565b6002602083015161014083015151600381106110d0576110d06127f4565b60200201515160058111156110e7576110e7611f5a565b14156111c75760208201516101408201515160038110611109576111096127f4565b602090810291909101516060908101516102e08401818152608091820151610300860180519115159091528151850151815190950194909452805183015184516001600160a01b039091166040918201528151518551909401939093525190910151915101526111776119ee565b8251815152610240820151602080830180519290925281516000910152610300830151815160400152606080850151825190910152805143608091820152840151905160a001526109e1816116a0565b6003602083015161014083015151600381106111e5576111e56127f4565b60200201515160058111156111fc576111fc611f5a565b1415611285576020820151610140820151516003811061121e5761121e6127f4565b6020020151608001516103208201526112356119ee565b8251815152610240820151602080830180519290925281516000910152604080850151825190910152610320830151815160600152805143608091820152840151905160a001526109e1816116a0565b6004602083015161014083015151600381106112a3576112a36127f4565b60200201515160058111156112ba576112ba611f5a565b1415611318576112c86119ee565b8251815152610240820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e1816116a0565b600560208301516101408301515160038110611336576113366127f4565b602002015151600581111561134d5761134d611f5a565b1415611467576020820151610140820151516003811061136f5761136f6127f4565b602002015160c001516001600160a01b03166103408201526080820151479081106113a85760808301516113a3908261287f565b6113ab565b60005b61036083018190526103408301516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156113ee573d6000803e3d6000fd5b506113f76119ee565b835181515261024083015160208083018051929092528151600091015260408086015182519091015260608086015182519091015251436080918201526103608401519085015161144890826127dc565b611452919061287f565b602082015160a00152611464816116a0565b50505b611600565b600260208501515151600281111561148657611486611f5a565b141561160057602084015151606001516103808201526114a834156013611606565b610380810151516114c5906001600160a01b031633146014611606565b604080830180516060908101516103a08501805191909152825160209081015182519091015282516080908101518251860152835185015182516001600160a01b0390911693019290925291515182519015159101525190517f0120bacb6765f9bed81f2b603ed57fed15de73776e7485f9bb53c351bcc45baa9161154991611f20565b60405180910390a16103a0810151604080850191909152610380820151805160208201519183015192517ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf9361159f9391612928565b60405180910390a16115af6119ee565b825181515260208084015181830180519190915280516000920191909152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109e1816116a0565b50505050565b816104925760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611634611a0e565b60005b600381101561168057848160038110611652576116526127f4565b6020020151828260038110611669576116696127f4565b6020020152806116788161280a565b915050611637565b5081818460038110611694576116946127f4565b60200201529392505050565b806020015160200151156116c757600080805560018190556116c490600290611a3b565b50565b6116cf611a75565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a0015160808401526003600055436001555161171991839101612958565b6040516020818303038152906040526002908051906020019061173d929190611aaf565b505050565b606083156117515750816101dc565b8251156117615782518084602001fd5b60405163100960cb60e01b815260048101839052602401611623565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b60408051606081018252600080825260208201529081016117d661177d565b905290565b6040518060400160405280600081526020016117d6611b33565b60408051608081019091528060008152602001611810611b46565b815260200161181d611b59565b81526020016117d6611b73565b604051806060016040528061183d611ba3565b815260200161184a611a0e565b81526020016117d661177d565b604051806040016040528061186a61177d565b81526020016117d661182a565b604051806103e0016040528061188b611b46565b81526000602082015260400161189f61177d565b81526020016118ac611bc1565b81526020016118b9611bc1565b81526020016118c6611bc1565b815260006020820181905260408201526060016118e1611bc1565b8152600060208201526040016118f5611b59565b8152602001611902611bc1565b815260200161190f611bc1565b815260200161191c611bc1565b81526000602082018190526040820152606001611937611bc1565b81526000602082015260400161194b611a0e565b8152604080516060810182526000808252602082810182905292820152910190815260200161197861177d565b8152602001611985611be4565b8152602001611992611be4565b815260200161199f61177d565b81526020016119ac611bfe565b81526020016119b9611ba3565b815260006020820181905260408201526060016119d4611b73565b81526020016119e161177d565b8152602001600081525090565b6040518060400160405280611a01611b46565b81526020016117d6611c38565b60405180606001604052806003905b611a25611c80565b815260200190600190039081611a1d5790505090565b508054611a47906122e2565b6000825580601f10611a57575050565b601f0160209004906000526020600020908101906116c49190611ccf565b6040518060a00160405280611a88611c80565b8152602001611a95611a0e565b8152602001611aa2611bfe565b81526020016119e1611ba3565b828054611abb906122e2565b90600052602060002090601f016020900481019282611add5760008555611b23565b82601f10611af657805160ff1916838001178555611b23565b82800160010185558215611b23579182015b82811115611b23578251825591602001919060010190611b08565b50611b2f929150611ccf565b5090565b60405180602001604052806117d66117f5565b60405180602001604052806117d6611c80565b6040518060400160405280600081526020016117d6611c80565b604051806060016040528060006001600160a01b03168152602001611b96611ce4565b8152600060209091015290565b60405180606001604052806003906020820280368337509192915050565b60408051606081019091528060005b815260006020820181905260409091015290565b6040518060400160405280600081526020016117d6611cf7565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060c00160405280611c4b611a0e565b815260006020820152604001611c5f611bfe565b8152602001611c6c611ba3565b815260200160008152602001600081525090565b6040805160e081019091528060008152604080516060810182526000808252602082810182905292820152910190815260006020820152604001611cc261177d565b8152602001611bd0611ba3565b5b80821115611b2f5760008155600101611cd0565b6040805160608101909152806000611bd0565b60408051608081018252600091810182815260608201929092529081906119e1565b6001600160a01b03811681146116c457600080fd5b8035611d3981611d19565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611d7757611d77611d3e565b60405290565b60405160a0810167ffffffffffffffff81118282101715611d7757611d77611d3e565b60405160e0810167ffffffffffffffff81118282101715611d7757611d77611d3e565b6040805190810167ffffffffffffffff81118282101715611d7757611d77611d3e565b6040516020810167ffffffffffffffff81118282101715611d7757611d77611d3e565b6040516080810167ffffffffffffffff81118282101715611d7757611d77611d3e565b80151581146116c457600080fd5b8035611d3981611e2c565b600060608284031215611e5757600080fd5b611e5f611d54565b9050813560028110611e7057600080fd5b81526020820135611e8081611e2c565b60208201526040820135611e9381611d19565b604082015292915050565b600080600060a08486031215611eb357600080fd5b8335611ebe81611d19565b9250611ecd8560208601611e45565b91506080840135611edd81611d19565b809150509250925092565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a0810161037b8284611ee8565b8060005b60038110156116005781516001600160a01b0316845260209384019390910190600101611f32565b634e487b7160e01b600052602160045260246000fd5b805160068110611f8257611f82611f5a565b825260208181015180516001600160a01b0390811683860152918101516040808601919091529081015190911660608401528101518015156080840152506060810151611fd260a0840182611ee8565b506080810151611fe6610140840182611f2e565b5060a081015115156101a083015260c001516001600160a01b03166101c090910152565b8060005b600381101561160057612022848351611f70565b6101e093909301926020919091019060010161200e565b60006106a08201905061204d828451611f2e565b602083015161205f606084018261200a565b506040830151612073610600840182611ee8565b5092915050565b600681106116c457600080fd5b600060a0828403121561209957600080fd5b6120a1611d7d565b905081358152602082013560208201526040820135604082015260608201356120c981611d19565b606082015260808201356120dc81611e2c565b608082015292915050565b600082601f8301126120f857600080fd5b612100611d54565b80606084018581111561211257600080fd5b845b8181101561213557803561212781611d19565b845260209384019301612114565b509095945050505050565b60008183036101e081121561215457600080fd5b61215c611da0565b915082356121698161207a565b82526060601f198201121561217d57600080fd5b50612186611d54565b602083013561219481611d19565b81526040830135602082015260608301356121ae81611d19565b604082015260208201526121c460808301611e3a565b60408201526121d68360a08401612087565b60608201526121e98361014084016120e7565b60808201526121fb6101a08301611e3a565b60a082015261220d6101c08301611d2e565b60c082015292915050565b600080610200838503121561222c57600080fd5b8235915061223d8460208501612140565b90509250929050565b60005b83811015612261578181015183820152602001612249565b838111156116005750506000910152565b8281526040602082015260008251806040840152612297816060850160208701612246565b601f01601f1916919091016060019392505050565b60006101e082840312156122bf57600080fd5b6101dc8383612140565b60006104c082840312156122dc57600080fd5b50919050565b600181811c908216806122f657607f821691505b602082108114156122dc57634e487b7160e01b600052602260045260246000fd5b8051611d3981611d19565b8051611d3981611e2c565b600060a0828403121561233f57600080fd5b612347611d7d565b9050815181526020820151602082015260408201516040820152606082015161236f81611d19565b606082015260808201516120dc81611e2c565b600082601f83011261239357600080fd5b61239b611d54565b8060608401858111156123ad57600080fd5b845b818110156121355780516123c281611d19565b8452602093840193016123af565b60008183036101e08112156123e457600080fd5b6123ec611da0565b915082516123f98161207a565b82526060601f198201121561240d57600080fd5b50612416611d54565b602083015161242481611d19565b815260408301516020820152606083015161243e81611d19565b6040820152602082015261245460808301612322565b60408201526124668360a0840161232d565b6060820152612479836101408401612382565b608082015261248b6101a08301612322565b60a082015261220d6101c08301612317565b600060a082840312156124af57600080fd5b6124b7611d7d565b905081516124c481611e2c565b81526020828101519082015260408201516124de81611d19565b80604083015250606082015160608201526080820151608082015292915050565b60006108a0828403121561251257600080fd5b61251a611d7d565b61252484846123d0565b81526101e0846101ff85011261253957600080fd5b612541611d54565b8061078086018781111561255457600080fd5b8387015b818110156125795761256a89826123d0565b84526020909301928401612558565b5081602086015261258a888261249d565b6040860152505050506125a1846108208501612382565b60608201526108809290920151608083015250919050565b600060a082840312156125cb57600080fd5b6125d3611d54565b905081356125e081611d19565b81526125ef8360208401611e45565b60208201526080820135611e9381611d19565b60008183036104c081121561261657600080fd5b61261e611dc3565b833581526104a0601f198301121561263557600080fd5b61263d611de6565b612645611e09565b60208601356003811061265757600080fd5b81526101e0603f198501121561266c57600080fd5b612674611de6565b6126818860408901612140565b8152602082015261020061021f198501121561269c57600080fd5b6126a4611dc3565b935061022086013584526126bc876102408801612140565b60208501528360408201526126d58761042088016125b9565b606082015281526020820152949350505050565b8051600281106126fb576126fb611f5a565b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03838116825282516020808401919091528301515180516104e084019291906003811061275357612753611f5a565b80604086015250602081015161276d606086018251611f70565b50604081015180516102408601526020015161278d610260860182611f70565b50606001518051821661044085015260208101516127af6104608601826126e9565b50816040820151166104c085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156127ef576127ef6127c6565b500190565b634e487b7160e01b600052603260045260246000fd5b600060001982141561281e5761281e6127c6565b5060010190565b6001600160a01b038316815261020081016101dc6020830184611f70565b6101e0810161037b8284611f70565b6001600160a01b03841681526020810183905261022081016128776040830184611f70565b949350505050565b600082821015612891576128916127c6565b500390565b6001600160a01b038316815260c081016101dc6020830184611ee8565b600082516128c5818460208701612246565b9190910192915050565b600081830360608112156128e257600080fd5b6128ea611dc3565b60408212156128f857600080fd5b612900611dc3565b9150835182526020840151602083015281815260408401516020820152809250505092915050565b6001600160a01b03848116825260a082019061294760208401866126e9565b808416608084015250949350505050565b60006108a08201905061296c828451611f70565b602083015161297f6101e084018261200a565b506040838101518051151561078085015260208101516107a0850152908101516001600160a01b03166107c08401526060808201516107e08501526080909101516108008401528301516129d7610820840182611f2e565b5060808301516108808301529291505056fea264697066735822122094019e12873cc1b438b08c936c5e6355c9260d3e6f2f9d0f75f3b5423b9f124b64736f6c634300080c0033`,
  BytecodeLen: 13084,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:217:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:132:19:after expr stmt semicolon',
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
