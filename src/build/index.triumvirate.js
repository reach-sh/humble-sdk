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
      const v24344 = stdlib.eq(v24336, stdlib.checkedBigNumberify('288:19:decimal', stdlib.UInt_max, '0'));
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
          at: '297:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt lo',
          who: 'Module'
          });
        const v24356 = stdlib.le256(v24349, v24354);
        stdlib.assert(v24356, {
          at: '298:10:application',
          fs: ['at <top level> call to "computeMint_" (defined at: <top level>)'],
          msg: 'sqrt hi',
          who: 'Module'
          });
        v24337 = v24328;
        }
      else {
        const v24359 = stdlib.eq(v24328, stdlib.checkedBigNumberify('302:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24359, {
          at: '302:10:application',
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
        at: '279:10:application',
        fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
        msg: null,
        who: 'Module'
        });
      let v24401;
      if (v24377) {
        const v24406 = stdlib.eq(v24382, stdlib.checkedBigNumberify('./index.rsh:266:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24406, {
          at: './index.rsh:266:10:application',
          fs: ['at 280:31:application call to "computeSwap" (defined at: ./index.rsh:262:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
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
        const v24443 = stdlib.mul(v24386, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v24444 = stdlib.div(v24443, v24388);
        const v24450 = stdlib.muldiv(v24439, v24444, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v24455 = stdlib.muldiv(v24381, v24386, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v24463 = stdlib.muldiv(v24455, v24384, v24415);
        const v24464 = stdlib.gt(v24463, v24450);
        const v24465 = [v24455, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24450];
        const v24467 = v24464 ? v24465 : v24466;
        const v24469 = v24467[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '0')];
        const v24470 = v24467[stdlib.checkedBigNumberify('./index.rsh:267:19:array', stdlib.UInt_max, '1')];
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
        const v24476 = stdlib.eq(v24381, stdlib.checkedBigNumberify('./index.rsh:271:18:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v24476, {
          at: './index.rsh:271:10:application',
          fs: ['at 280:31:application call to "computeSwap" (defined at: ./index.rsh:262:60:function exp)', 'at <top level> call to "computeSwap_" (defined at: <top level>)'],
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
        const v24513 = stdlib.mul(v24386, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', stdlib.UInt_max, '100'));
        const v24514 = stdlib.div(v24513, v24388);
        const v24520 = stdlib.muldiv(v24509, v24514, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', stdlib.UInt_max, '100'));
        const v24525 = stdlib.muldiv(v24382, v24386, stdlib.checkedBigNumberify('./index.rsh:251:49:decimal', stdlib.UInt_max, '10000'));
        const v24533 = stdlib.muldiv(v24525, v24383, v24485);
        const v24534 = stdlib.gt(v24533, v24520);
        const v24535 = [v24525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v24536 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24520];
        const v24537 = v24534 ? v24535 : v24536;
        const v24539 = v24537[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '0')];
        const v24540 = v24537[stdlib.checkedBigNumberify('./index.rsh:272:19:array', stdlib.UInt_max, '1')];
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
      const v24546 = v24401[stdlib.checkedBigNumberify('280:11:array', stdlib.UInt_max, '0')];
      const v24547 = v24401[stdlib.checkedBigNumberify('280:11:array', stdlib.UInt_max, '1')];
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
            const [v25509, v25521, v25523, v25524, v25528] = svs;
            return (await ((async () => {
              
              const v25572 = v25523.protoFee;
              const v25573 = v25523.lpFee;
              const v25574 = v25523.totFee;
              const v25575 = v25523.protoAddr;
              const v25576 = v25523.locked;
              const v25577 = {
                locked: v25576,
                lpFee: v25573,
                protoAddr: v25575,
                protoFee: v25572,
                totFee: v25574
                };
              const v25578 = {
                cmds: v25521,
                protoInfo: v25577,
                triumvirs: v25524
                };
              
              return v25578;}))(...args));
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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc4, ctc0]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Data({
    Harvest: ctc5,
    Kill: ctc2,
    NewInfo: ctc7,
    NewTriumvirs: ctc1,
    NoOp: ctc2,
    Rewards: ctc0
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc8]);
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Data({
    None: ctc2,
    Some: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc12, ctc11]);
  const ctc14 = stdlib.T_Data({
    Triumvir_propose0_24694: ctc9,
    Triumvir_support0_24694: ctc10,
    register0_24694: ctc13
    });
  const ctc15 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc4]);
  const ctc17 = stdlib.T_Tuple([ctc4, ctc16]);
  
  
  const v25496 = stdlib.protect(ctc1, interact.triumvirs, 'for Admin\'s interact field triumvirs');
  
  const txn1 = await (ctc.sendrecv({
    args: [v25496],
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
      
      
      const {data: [v25503], secs: v25505, time: v25504, didSend: v24569, from: v25502 } = txn1;
      
      ;
      const v25506 = await ctc.getContractAddress();
      
      const v25509 = ['NoOp', null];
      const v25515 = [v25509, v25509, v25509];
      const v25520 = {
        locked: false,
        lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
        protoAddr: v25506,
        protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
        };
      const v25521 = v25515;
      const v25522 = false;
      const v25523 = v25520;
      const v25524 = v25503;
      const v25525 = v25504;
      const v25528 = stdlib.checkedBigNumberify('./index.rsh:119:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v25571 = v25522 ? false : true;
        
        return v25571;})()) {
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
  const {data: [v25503], secs: v25505, time: v25504, didSend: v24569, from: v25502 } = txn1;
  ;
  const v25506 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:131:23:application',
    fs: ['at ./index.rsh:131:23:application call to [unknown function] (defined at: ./index.rsh:131:23:function exp)', 'at ./index.rsh:131:23:application call to "liftedInteract" (defined at: ./index.rsh:131:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v25509 = ['NoOp', null];
  const v25515 = [v25509, v25509, v25509];
  const v25520 = {
    locked: false,
    lpFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'),
    protoAddr: v25506,
    protoFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    totFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')
    };
  let v25521 = v25515;
  let v25522 = false;
  let v25523 = v25520;
  let v25524 = v25503;
  let v25525 = v25504;
  let v25528 = stdlib.checkedBigNumberify('./index.rsh:119:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v25571 = v25522 ? false : true;
    
    return v25571;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn2;
    switch (v25771[0]) {
      case 'Triumvir_propose0_24694': {
        const v25774 = v25771[1];
        undefined /* setApiDetails */;
        ;
        const v25788 = v25774[stdlib.checkedBigNumberify('./index.rsh:208:9:spread', stdlib.UInt_max, '0')];
        let v25789;
        switch (v25788[0]) {
          case 'Harvest': {
            const v25790 = v25788[1];
            v25789 = true;
            
            break;
            }
          case 'Kill': {
            const v25791 = v25788[1];
            v25789 = true;
            
            break;
            }
          case 'NewInfo': {
            const v25792 = v25788[1];
            const v25793 = v25792.protoFee;
            const v25794 = v25792.lpFee;
            const v25795 = v25792.totFee;
            const v25796 = stdlib.lt(v25793, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
            const v25797 = stdlib.lt(v25794, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
            const v25798 = v25796 ? v25797 : false;
            const v25799 = stdlib.add(v25794, v25793);
            const v25800 = stdlib.eq(v25795, v25799);
            const v25801 = v25798 ? v25800 : false;
            const v25802 = stdlib.lt(v25795, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
            const v25803 = v25801 ? v25802 : false;
            const v25804 = stdlib.gt(v25795, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
            const v25805 = v25803 ? v25804 : false;
            v25789 = v25805;
            
            break;
            }
          case 'NewTriumvirs': {
            const v25806 = v25788[1];
            v25789 = true;
            
            break;
            }
          case 'NoOp': {
            const v25807 = v25788[1];
            v25789 = true;
            
            break;
            }
          case 'Rewards': {
            const v25808 = v25788[1];
            v25789 = true;
            
            break;
            }
          }
        stdlib.assert(v25789, {
          at: './index.rsh:161:14:application',
          fs: ['at ./index.rsh:211:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:211:14:application call to [unknown function] (defined at: ./index.rsh:211:14:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v25809 = ['None', null];
        const v25810 = await stdlib.Array_asyncReduce([v25524], v25809, async([v25812], v25811, v25813) => {
          let v25814;
          switch (v25811[0]) {
            case 'None': {
              const v25815 = v25811[1];
              v25814 = true;
              
              break;
              }
            case 'Some': {
              const v25816 = v25811[1];
              v25814 = false;
              
              break;
              }
            }
          const v25817 = stdlib.addressEq(v25770, v25812);
          const v25818 = v25814 ? v25817 : false;
          const v25819 = ['Some', v25813];
          const v25820 = v25818 ? v25819 : v25811;
          
          return v25820;})
        let v25821;
        switch (v25810[0]) {
          case 'None': {
            const v25822 = v25810[1];
            v25821 = false;
            
            break;
            }
          case 'Some': {
            const v25823 = v25810[1];
            v25821 = true;
            
            break;
            }
          }
        stdlib.assert(v25821, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:162:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:211:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:211:14:application call to [unknown function] (defined at: ./index.rsh:211:14:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v25824 = stdlib.fromSome(v25810, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v25826 = stdlib.Array_set(v25521, v25824, v25788);
        const v25827 = null;
        await txn2.getOutput('Triumvir_propose', 'v25827', ctc2, v25827);
        null;
        const cv25521 = v25826;
        const cv25522 = false;
        const cv25523 = v25523;
        const cv25524 = v25524;
        const cv25525 = v25772;
        const cv25528 = v25528;
        
        v25521 = cv25521;
        v25522 = cv25522;
        v25523 = cv25523;
        v25524 = cv25524;
        v25525 = cv25525;
        v25528 = cv25528;
        
        continue;
        break;
        }
      case 'Triumvir_support0_24694': {
        const v26083 = v25771[1];
        undefined /* setApiDetails */;
        ;
        const v26180 = v26083[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '0')];
        const v26181 = v26083[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '1')];
        const v26182 = stdlib.lt(v26180, stdlib.checkedBigNumberify('./index.rsh:187:31:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v26182, {
          at: './index.rsh:187:14:application',
          fs: ['at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26183 = ['None', null];
        const v26184 = await stdlib.Array_asyncReduce([v25524], v26183, async([v26186], v26185, v26187) => {
          let v26188;
          switch (v26185[0]) {
            case 'None': {
              const v26189 = v26185[1];
              v26188 = true;
              
              break;
              }
            case 'Some': {
              const v26190 = v26185[1];
              v26188 = false;
              
              break;
              }
            }
          const v26191 = stdlib.addressEq(v25770, v26186);
          const v26192 = v26188 ? v26191 : false;
          const v26193 = ['Some', v26187];
          const v26194 = v26192 ? v26193 : v26185;
          
          return v26194;})
        let v26195;
        switch (v26184[0]) {
          case 'None': {
            const v26196 = v26184[1];
            v26195 = false;
            
            break;
            }
          case 'Some': {
            const v26197 = v26184[1];
            v26195 = true;
            
            break;
            }
          }
        stdlib.assert(v26195, {
          at: './index.rsh:149:14:application',
          fs: ['at ./index.rsh:188:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26198 = stdlib.fromSome(v26184, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
        const v26199 = stdlib.eq(v26180, v26198);
        const v26200 = v26199 ? false : true;
        stdlib.assert(v26200, {
          at: './index.rsh:189:14:application',
          fs: ['at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26202 = v25521[v26180];
        const v26203 = stdlib.digest(ctc9, [v26181]);
        const v26204 = stdlib.digest(ctc9, [v26202]);
        const v26205 = stdlib.digestEq(v26203, v26204);
        stdlib.assert(v26205, {
          at: './index.rsh:191:14:application',
          fs: ['at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26208 = stdlib.Array_set(v25521, v26180, v25509);
        const v26209 = null;
        await txn2.getOutput('Triumvir_support', 'v26209', ctc2, v26209);
        null;
        switch (v26202[0]) {
          case 'Harvest': {
            const v26251 = v26202[1];
            const v26252 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '0')];
            const v26253 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '1')];
            const v26254 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '2')];
            const v26255 = v25523.protoFee;
            const v26256 = v25523.lpFee;
            const v26257 = v25523.totFee;
            const v26258 = v25523.protoAddr;
            const v26259 = v25523.locked;
            const v26272 = {
              locked: v26259,
              lpFee: v26256,
              protoAddr: v26258,
              protoFee: v26255,
              totFee: v26257
              };
            const v26273 = undefined /* Remote */;
            const v26274 = await txn2.getOutput('internal', 'v26273', ctc17, v26273);
            const v26276 = v26274[stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0')];
            const v26285 = stdlib.add(v25528, v26276);
            const v26286 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0'), v26276);
            stdlib.assert(v26286, {
              at: './index.rsh:176:46:application',
              fs: ['at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:174:39:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:170:45:function exp)', 'at ./index.rsh:196:59:application call to "evalCommand" (defined at: ./index.rsh:170:33:function exp)', 'at ./index.rsh:216:47:application call to [unknown function] (defined at: ./index.rsh:193:20:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
              msg: 'remote bill check',
              who: 'Admin'
              });
            const cv25521 = v26208;
            const cv25522 = false;
            const cv25523 = v25523;
            const cv25524 = v25524;
            const cv25525 = v25772;
            const cv25528 = v26285;
            
            v25521 = cv25521;
            v25522 = cv25522;
            v25523 = cv25523;
            v25524 = cv25524;
            v25525 = cv25525;
            v25528 = cv25528;
            
            continue;
            break;
            }
          case 'Kill': {
            const v26295 = v26202[1];
            const cv25521 = v26208;
            const cv25522 = true;
            const cv25523 = v25523;
            const cv25524 = v25524;
            const cv25525 = v25772;
            const cv25528 = v25528;
            
            v25521 = cv25521;
            v25522 = cv25522;
            v25523 = cv25523;
            v25524 = cv25524;
            v25525 = cv25525;
            v25528 = cv25528;
            
            continue;
            break;
            }
          case 'NewInfo': {
            const v26304 = v26202[1];
            const v26305 = v26304.locked;
            const v26306 = v26304.lpFee;
            const v26307 = v26304.protoAddr;
            const v26308 = v26304.protoFee;
            const v26309 = v26304.totFee;
            const v26310 = {
              locked: v26305,
              lpFee: v26306,
              protoAddr: v26307,
              protoFee: v26308,
              totFee: v26309
              };
            const cv25521 = v26208;
            const cv25522 = false;
            const cv25523 = v26310;
            const cv25524 = v25524;
            const cv25525 = v25772;
            const cv25528 = v25528;
            
            v25521 = cv25521;
            v25522 = cv25522;
            v25523 = cv25523;
            v25524 = cv25524;
            v25525 = cv25525;
            v25528 = cv25528;
            
            continue;
            break;
            }
          case 'NewTriumvirs': {
            const v26320 = v26202[1];
            const cv25521 = v26208;
            const cv25522 = false;
            const cv25523 = v25523;
            const cv25524 = v26320;
            const cv25525 = v25772;
            const cv25528 = v25528;
            
            v25521 = cv25521;
            v25522 = cv25522;
            v25523 = cv25523;
            v25524 = cv25524;
            v25525 = cv25525;
            v25528 = cv25528;
            
            continue;
            break;
            }
          case 'NoOp': {
            const v26329 = v26202[1];
            const cv25521 = v26208;
            const cv25522 = false;
            const cv25523 = v25523;
            const cv25524 = v25524;
            const cv25525 = v25772;
            const cv25528 = v25528;
            
            v25521 = cv25521;
            v25522 = cv25522;
            v25523 = cv25523;
            v25524 = cv25524;
            v25525 = cv25525;
            v25528 = cv25528;
            
            continue;
            break;
            }
          case 'Rewards': {
            const v26338 = v26202[1];
            const v26340 = (stdlib.le(await ctc.getBalance(), v25528) ? stdlib.checkedBigNumberify('./index.rsh:180:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25528));
            const v26341 = stdlib.add(v26340, v25528);
            const v26345 = stdlib.sub(v26341, v26340);
            ;
            const cv25521 = v26208;
            const cv25522 = false;
            const cv25523 = v25523;
            const cv25524 = v25524;
            const cv25525 = v25772;
            const cv25528 = v26345;
            
            v25521 = cv25521;
            v25522 = cv25522;
            v25523 = cv25523;
            v25524 = cv25524;
            v25525 = cv25525;
            v25528 = cv25528;
            
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_24694': {
        const v26392 = v25771[1];
        undefined /* setApiDetails */;
        ;
        const v26664 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '0')];
        const v26665 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '1')];
        const v26666 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '2')];
        const v26667 = stdlib.ctcAddrEq(v26664, v25770);
        stdlib.assert(v26667, {
          at: './index.rsh:153:14:application',
          fs: ['at ./index.rsh:206:33:application call to "doRegister" (defined at: ./index.rsh:152:54:function exp)', 'at ./index.rsh:206:20:application call to [unknown function] (defined at: ./index.rsh:206:20:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v26668 = v25523.protoFee;
        const v26669 = v25523.lpFee;
        const v26670 = v25523.totFee;
        const v26671 = v25523.protoAddr;
        const v26672 = v25523.locked;
        const v26673 = {
          locked: v26672,
          lpFee: v26669,
          protoAddr: v26671,
          protoFee: v26668,
          totFee: v26670
          };
        await txn2.getOutput('register', 'v26673', ctc7, v26673);
        null;
        const cv25521 = v25521;
        const cv25522 = false;
        const cv25523 = v25523;
        const cv25524 = v25524;
        const cv25525 = v25772;
        const cv25528 = v25528;
        
        v25521 = cv25521;
        v25522 = cv25522;
        v25523 = cv25523;
        v25524 = cv25524;
        v25525 = cv25525;
        v25528 = cv25528;
        
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
    Triumvir_propose0_24694: ctc11,
    Triumvir_support0_24694: ctc12,
    register0_24694: ctc15
    });
  
  
  const [v25509, v25521, v25523, v25524, v25528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc9, ctc10, ctc7, ctc1]);
  const v25603 = ctc.selfAddress();
  const v25605 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:11:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_24694" (defined at: ./index.rsh:208:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_propose'
    });
  const v25606 = v25605[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v25626;
  switch (v25606[0]) {
    case 'Harvest': {
      const v25627 = v25606[1];
      v25626 = true;
      
      break;
      }
    case 'Kill': {
      const v25628 = v25606[1];
      v25626 = true;
      
      break;
      }
    case 'NewInfo': {
      const v25629 = v25606[1];
      const v25630 = v25629.protoFee;
      const v25631 = v25629.lpFee;
      const v25632 = v25629.totFee;
      const v25633 = stdlib.lt(v25630, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
      const v25634 = stdlib.lt(v25631, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
      const v25635 = v25633 ? v25634 : false;
      const v25636 = stdlib.add(v25631, v25630);
      const v25637 = stdlib.eq(v25632, v25636);
      const v25638 = v25635 ? v25637 : false;
      const v25639 = stdlib.lt(v25632, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
      const v25640 = v25638 ? v25639 : false;
      const v25641 = stdlib.gt(v25632, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
      const v25642 = v25640 ? v25641 : false;
      v25626 = v25642;
      
      break;
      }
    case 'NewTriumvirs': {
      const v25643 = v25606[1];
      v25626 = true;
      
      break;
      }
    case 'NoOp': {
      const v25644 = v25606[1];
      v25626 = true;
      
      break;
      }
    case 'Rewards': {
      const v25645 = v25606[1];
      v25626 = true;
      
      break;
      }
    }
  stdlib.assert(v25626, {
    at: './index.rsh:161:14:application',
    fs: ['at ./index.rsh:209:35:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:11:function exp)', 'at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:11:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_24694" (defined at: ./index.rsh:208:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'Triumvir_propose'
    });
  const v25646 = ['None', null];
  const v25647 = await stdlib.Array_asyncReduce([v25524], v25646, async([v25649], v25648, v25650) => {
    let v25651;
    switch (v25648[0]) {
      case 'None': {
        const v25652 = v25648[1];
        v25651 = true;
        
        break;
        }
      case 'Some': {
        const v25653 = v25648[1];
        v25651 = false;
        
        break;
        }
      }
    const v25654 = stdlib.addressEq(v25603, v25649);
    const v25655 = v25651 ? v25654 : false;
    const v25656 = ['Some', v25650];
    const v25657 = v25655 ? v25656 : v25648;
    
    return v25657;})
  let v25658;
  switch (v25647[0]) {
    case 'None': {
      const v25659 = v25647[1];
      v25658 = false;
      
      break;
      }
    case 'Some': {
      const v25660 = v25647[1];
      v25658 = true;
      
      break;
      }
    }
  stdlib.assert(v25658, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:162:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:209:35:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:11:function exp)', 'at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:11:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_propose0_24694" (defined at: ./index.rsh:208:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'Triumvir_propose'
    });
  const v25684 = ['Triumvir_propose0_24694', v25605];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25509, v25521, v25523, v25524, v25528, v25684],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:210:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn1;
      
      switch (v25771[0]) {
        case 'Triumvir_propose0_24694': {
          const v25774 = v25771[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_propose"
            });
          ;
          const v25788 = v25774[stdlib.checkedBigNumberify('./index.rsh:208:9:spread', stdlib.UInt_max, '0')];
          let v25789;
          switch (v25788[0]) {
            case 'Harvest': {
              const v25790 = v25788[1];
              v25789 = true;
              
              break;
              }
            case 'Kill': {
              const v25791 = v25788[1];
              v25789 = true;
              
              break;
              }
            case 'NewInfo': {
              const v25792 = v25788[1];
              const v25793 = v25792.protoFee;
              const v25794 = v25792.lpFee;
              const v25795 = v25792.totFee;
              const v25796 = stdlib.lt(v25793, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
              const v25797 = stdlib.lt(v25794, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
              const v25798 = v25796 ? v25797 : false;
              const v25799 = stdlib.add(v25794, v25793);
              const v25800 = stdlib.eq(v25795, v25799);
              const v25801 = v25798 ? v25800 : false;
              const v25802 = stdlib.lt(v25795, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
              const v25803 = v25801 ? v25802 : false;
              const v25804 = stdlib.gt(v25795, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
              const v25805 = v25803 ? v25804 : false;
              v25789 = v25805;
              
              break;
              }
            case 'NewTriumvirs': {
              const v25806 = v25788[1];
              v25789 = true;
              
              break;
              }
            case 'NoOp': {
              const v25807 = v25788[1];
              v25789 = true;
              
              break;
              }
            case 'Rewards': {
              const v25808 = v25788[1];
              v25789 = true;
              
              break;
              }
            }
          ;
          const v25809 = ['None', null];
          const v25810 = await stdlib.Array_asyncReduce([v25524], v25809, async([v25812], v25811, v25813) => {
            let v25814;
            switch (v25811[0]) {
              case 'None': {
                const v25815 = v25811[1];
                v25814 = true;
                
                break;
                }
              case 'Some': {
                const v25816 = v25811[1];
                v25814 = false;
                
                break;
                }
              }
            const v25817 = stdlib.addressEq(v25770, v25812);
            const v25818 = v25814 ? v25817 : false;
            const v25819 = ['Some', v25813];
            const v25820 = v25818 ? v25819 : v25811;
            
            return v25820;})
          let v25821;
          switch (v25810[0]) {
            case 'None': {
              const v25822 = v25810[1];
              v25821 = false;
              
              break;
              }
            case 'Some': {
              const v25823 = v25810[1];
              v25821 = true;
              
              break;
              }
            }
          ;
          const v25824 = stdlib.fromSome(v25810, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
          const v25826 = stdlib.Array_set(v25521, v25824, v25788);
          const v25827 = null;
          const v25828 = await txn1.getOutput('Triumvir_propose', 'v25827', ctc4, v25827);
          
          null;
          const v31815 = v25826;
          const v31817 = v25523;
          const v31818 = v25524;
          const v31820 = v25528;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Triumvir_support0_24694': {
          const v26083 = v25771[1];
          
          break;
          }
        case 'register0_24694': {
          const v26392 = v25771[1];
          
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
  const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn1;
  switch (v25771[0]) {
    case 'Triumvir_propose0_24694': {
      const v25774 = v25771[1];
      undefined /* setApiDetails */;
      ;
      const v25788 = v25774[stdlib.checkedBigNumberify('./index.rsh:208:9:spread', stdlib.UInt_max, '0')];
      let v25789;
      switch (v25788[0]) {
        case 'Harvest': {
          const v25790 = v25788[1];
          v25789 = true;
          
          break;
          }
        case 'Kill': {
          const v25791 = v25788[1];
          v25789 = true;
          
          break;
          }
        case 'NewInfo': {
          const v25792 = v25788[1];
          const v25793 = v25792.protoFee;
          const v25794 = v25792.lpFee;
          const v25795 = v25792.totFee;
          const v25796 = stdlib.lt(v25793, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100'));
          const v25797 = stdlib.lt(v25794, stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100'));
          const v25798 = v25796 ? v25797 : false;
          const v25799 = stdlib.add(v25794, v25793);
          const v25800 = stdlib.eq(v25795, v25799);
          const v25801 = v25798 ? v25800 : false;
          const v25802 = stdlib.lt(v25795, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100'));
          const v25803 = v25801 ? v25802 : false;
          const v25804 = stdlib.gt(v25795, stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0'));
          const v25805 = v25803 ? v25804 : false;
          v25789 = v25805;
          
          break;
          }
        case 'NewTriumvirs': {
          const v25806 = v25788[1];
          v25789 = true;
          
          break;
          }
        case 'NoOp': {
          const v25807 = v25788[1];
          v25789 = true;
          
          break;
          }
        case 'Rewards': {
          const v25808 = v25788[1];
          v25789 = true;
          
          break;
          }
        }
      stdlib.assert(v25789, {
        at: './index.rsh:161:14:application',
        fs: ['at ./index.rsh:211:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:211:14:application call to [unknown function] (defined at: ./index.rsh:211:14:function exp)'],
        msg: null,
        who: 'Triumvir_propose'
        });
      const v25809 = ['None', null];
      const v25810 = await stdlib.Array_asyncReduce([v25524], v25809, async([v25812], v25811, v25813) => {
        let v25814;
        switch (v25811[0]) {
          case 'None': {
            const v25815 = v25811[1];
            v25814 = true;
            
            break;
            }
          case 'Some': {
            const v25816 = v25811[1];
            v25814 = false;
            
            break;
            }
          }
        const v25817 = stdlib.addressEq(v25770, v25812);
        const v25818 = v25814 ? v25817 : false;
        const v25819 = ['Some', v25813];
        const v25820 = v25818 ? v25819 : v25811;
        
        return v25820;})
      let v25821;
      switch (v25810[0]) {
        case 'None': {
          const v25822 = v25810[1];
          v25821 = false;
          
          break;
          }
        case 'Some': {
          const v25823 = v25810[1];
          v25821 = true;
          
          break;
          }
        }
      stdlib.assert(v25821, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:162:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:211:26:application call to "doPropose" (defined at: ./index.rsh:160:36:function exp)', 'at ./index.rsh:211:14:application call to [unknown function] (defined at: ./index.rsh:211:14:function exp)'],
        msg: null,
        who: 'Triumvir_propose'
        });
      const v25824 = stdlib.fromSome(v25810, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v25826 = stdlib.Array_set(v25521, v25824, v25788);
      const v25827 = null;
      const v25828 = await txn1.getOutput('Triumvir_propose', 'v25827', ctc4, v25827);
      if (v25145) {
        stdlib.protect(ctc4, await interact.out(v25774, v25828), {
          at: './index.rsh:208:10:application',
          fs: ['at ./index.rsh:208:10:application call to [unknown function] (defined at: ./index.rsh:208:10:function exp)', 'at ./index.rsh:165:12:application call to "k" (defined at: ./index.rsh:211:14:function exp)', 'at ./index.rsh:211:35:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)', 'at ./index.rsh:211:14:application call to [unknown function] (defined at: ./index.rsh:211:14:function exp)'],
          msg: 'out',
          who: 'Triumvir_propose'
          });
        }
      else {
        }
      
      null;
      const v31815 = v25826;
      const v31817 = v25523;
      const v31818 = v25524;
      const v31820 = v25528;
      return;
      
      break;
      }
    case 'Triumvir_support0_24694': {
      const v26083 = v25771[1];
      return;
      break;
      }
    case 'register0_24694': {
      const v26392 = v25771[1];
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
    Triumvir_propose0_24694: ctc12,
    Triumvir_support0_24694: ctc11,
    register0_24694: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc18]);
  
  
  const [v25509, v25521, v25523, v25524, v25528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc9, ctc10, ctc7, ctc1]);
  const v25686 = ctc.selfAddress();
  const v25688 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24694" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'Triumvir_support'
    });
  const v25689 = v25688[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v25690 = v25688[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v25711 = stdlib.lt(v25689, stdlib.checkedBigNumberify('./index.rsh:187:31:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v25711, {
    at: './index.rsh:187:14:application',
    fs: ['at ./index.rsh:214:41:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24694" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25712 = ['None', null];
  const v25713 = await stdlib.Array_asyncReduce([v25524], v25712, async([v25715], v25714, v25716) => {
    let v25717;
    switch (v25714[0]) {
      case 'None': {
        const v25718 = v25714[1];
        v25717 = true;
        
        break;
        }
      case 'Some': {
        const v25719 = v25714[1];
        v25717 = false;
        
        break;
        }
      }
    const v25720 = stdlib.addressEq(v25686, v25715);
    const v25721 = v25717 ? v25720 : false;
    const v25722 = ['Some', v25716];
    const v25723 = v25721 ? v25722 : v25714;
    
    return v25723;})
  let v25724;
  switch (v25713[0]) {
    case 'None': {
      const v25725 = v25713[1];
      v25724 = false;
      
      break;
      }
    case 'Some': {
      const v25726 = v25713[1];
      v25724 = true;
      
      break;
      }
    }
  stdlib.assert(v25724, {
    at: './index.rsh:149:14:application',
    fs: ['at ./index.rsh:188:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:214:41:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24694" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25727 = stdlib.fromSome(v25713, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
  const v25728 = stdlib.eq(v25689, v25727);
  const v25729 = v25728 ? false : true;
  stdlib.assert(v25729, {
    at: './index.rsh:189:14:application',
    fs: ['at ./index.rsh:214:41:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24694" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25731 = v25521[v25689];
  const v25732 = stdlib.digest(ctc12, [v25690]);
  const v25733 = stdlib.digest(ctc12, [v25731]);
  const v25734 = stdlib.digestEq(v25732, v25733);
  stdlib.assert(v25734, {
    at: './index.rsh:191:14:application',
    fs: ['at ./index.rsh:214:41:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:214:17:application call to [unknown function] (defined at: ./index.rsh:214:17:function exp)', 'at ./index.rsh:134:19:application call to "runTriumvir_support0_24694" (defined at: ./index.rsh:213:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'Triumvir_support'
    });
  const v25759 = ['Triumvir_support0_24694', v25688];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25509, v25521, v25523, v25524, v25528, v25759],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:215:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn1;
      
      switch (v25771[0]) {
        case 'Triumvir_propose0_24694': {
          const v25774 = v25771[1];
          
          break;
          }
        case 'Triumvir_support0_24694': {
          const v26083 = v25771[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Triumvir_support"
            });
          ;
          const v26180 = v26083[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '0')];
          const v26181 = v26083[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '1')];
          const v26182 = stdlib.lt(v26180, stdlib.checkedBigNumberify('./index.rsh:187:31:dot', stdlib.UInt_max, '3'));
          ;
          const v26183 = ['None', null];
          const v26184 = await stdlib.Array_asyncReduce([v25524], v26183, async([v26186], v26185, v26187) => {
            let v26188;
            switch (v26185[0]) {
              case 'None': {
                const v26189 = v26185[1];
                v26188 = true;
                
                break;
                }
              case 'Some': {
                const v26190 = v26185[1];
                v26188 = false;
                
                break;
                }
              }
            const v26191 = stdlib.addressEq(v25770, v26186);
            const v26192 = v26188 ? v26191 : false;
            const v26193 = ['Some', v26187];
            const v26194 = v26192 ? v26193 : v26185;
            
            return v26194;})
          let v26195;
          switch (v26184[0]) {
            case 'None': {
              const v26196 = v26184[1];
              v26195 = false;
              
              break;
              }
            case 'Some': {
              const v26197 = v26184[1];
              v26195 = true;
              
              break;
              }
            }
          ;
          const v26198 = stdlib.fromSome(v26184, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
          const v26199 = stdlib.eq(v26180, v26198);
          const v26200 = v26199 ? false : true;
          ;
          const v26202 = v25521[v26180];
          const v26203 = stdlib.digest(ctc12, [v26181]);
          const v26204 = stdlib.digest(ctc12, [v26202]);
          const v26205 = stdlib.digestEq(v26203, v26204);
          ;
          const v26208 = stdlib.Array_set(v25521, v26180, v25509);
          const v26209 = null;
          const v26210 = await txn1.getOutput('Triumvir_support', 'v26209', ctc4, v26209);
          
          null;
          switch (v26202[0]) {
            case 'Harvest': {
              const v26251 = v26202[1];
              const v26252 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '0')];
              const v26253 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '1')];
              const v26254 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '2')];
              const v26255 = v25523.protoFee;
              const v26256 = v25523.lpFee;
              const v26257 = v25523.totFee;
              const v26258 = v25523.protoAddr;
              const v26259 = v25523.locked;
              const v26272 = {
                locked: v26259,
                lpFee: v26256,
                protoAddr: v26258,
                protoFee: v26255,
                totFee: v26257
                };
              const v26273 = [stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                accs: [v26254],
                bills: stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0'),
                fees: v26253,
                kind: 'remote',
                obj: v26252,
                pays: stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0'),
                toks: []
                })), undefined)];
              const v26274 = await txn1.getOutput('internal', 'v26273', ctc19, v26273);
              const v26276 = v26274[stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0')];
              const v26285 = stdlib.add(v25528, v26276);
              const v26286 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0'), v26276);
              ;
              const v31878 = v26208;
              const v31880 = v25523;
              const v31881 = v25524;
              const v31883 = v26285;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Kill': {
              const v26295 = v26202[1];
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              break;
              }
            case 'NewInfo': {
              const v26304 = v26202[1];
              const v26305 = v26304.locked;
              const v26306 = v26304.lpFee;
              const v26307 = v26304.protoAddr;
              const v26308 = v26304.protoFee;
              const v26309 = v26304.totFee;
              const v26310 = {
                locked: v26305,
                lpFee: v26306,
                protoAddr: v26307,
                protoFee: v26308,
                totFee: v26309
                };
              const v31892 = v26208;
              const v31894 = v26310;
              const v31895 = v25524;
              const v31897 = v25528;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NewTriumvirs': {
              const v26320 = v26202[1];
              const v31899 = v26208;
              const v31901 = v25523;
              const v31902 = v26320;
              const v31904 = v25528;
              sim_r.isHalt = false;
              
              break;
              }
            case 'NoOp': {
              const v26329 = v26202[1];
              const v31906 = v26208;
              const v31908 = v25523;
              const v31909 = v25524;
              const v31911 = v25528;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Rewards': {
              const v26338 = v26202[1];
              const v26340 = (stdlib.le(await ctc.getBalance(), v25528) ? stdlib.checkedBigNumberify('./index.rsh:180:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25528));
              const v26341 = stdlib.add(v26340, v25528);
              const v26345 = stdlib.sub(v26341, v26340);
              sim_r.txns.push({
                amt: v26340,
                kind: 'from',
                to: v26338,
                tok: undefined /* Nothing */
                });
              const v31913 = v26208;
              const v31915 = v25523;
              const v31916 = v25524;
              const v31918 = v26345;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'register0_24694': {
          const v26392 = v25771[1];
          
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
  const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn1;
  switch (v25771[0]) {
    case 'Triumvir_propose0_24694': {
      const v25774 = v25771[1];
      return;
      break;
      }
    case 'Triumvir_support0_24694': {
      const v26083 = v25771[1];
      undefined /* setApiDetails */;
      ;
      const v26180 = v26083[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '0')];
      const v26181 = v26083[stdlib.checkedBigNumberify('./index.rsh:213:9:spread', stdlib.UInt_max, '1')];
      const v26182 = stdlib.lt(v26180, stdlib.checkedBigNumberify('./index.rsh:187:31:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v26182, {
        at: './index.rsh:187:14:application',
        fs: ['at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26183 = ['None', null];
      const v26184 = await stdlib.Array_asyncReduce([v25524], v26183, async([v26186], v26185, v26187) => {
        let v26188;
        switch (v26185[0]) {
          case 'None': {
            const v26189 = v26185[1];
            v26188 = true;
            
            break;
            }
          case 'Some': {
            const v26190 = v26185[1];
            v26188 = false;
            
            break;
            }
          }
        const v26191 = stdlib.addressEq(v25770, v26186);
        const v26192 = v26188 ? v26191 : false;
        const v26193 = ['Some', v26187];
        const v26194 = v26192 ? v26193 : v26185;
        
        return v26194;})
      let v26195;
      switch (v26184[0]) {
        case 'None': {
          const v26196 = v26184[1];
          v26195 = false;
          
          break;
          }
        case 'Some': {
          const v26197 = v26184[1];
          v26195 = true;
          
          break;
          }
        }
      stdlib.assert(v26195, {
        at: './index.rsh:149:14:application',
        fs: ['at ./index.rsh:188:32:application call to "chkTriumvir" (defined at: ./index.rsh:147:33:function exp)', 'at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26198 = stdlib.fromSome(v26184, stdlib.checkedBigNumberify('./index.rsh:150:31:decimal', stdlib.UInt_max, '0'));
      const v26199 = stdlib.eq(v26180, v26198);
      const v26200 = v26199 ? false : true;
      stdlib.assert(v26200, {
        at: './index.rsh:189:14:application',
        fs: ['at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26202 = v25521[v26180];
      const v26203 = stdlib.digest(ctc12, [v26181]);
      const v26204 = stdlib.digest(ctc12, [v26202]);
      const v26205 = stdlib.digestEq(v26203, v26204);
      stdlib.assert(v26205, {
        at: './index.rsh:191:14:application',
        fs: ['at ./index.rsh:216:32:application call to "doSupport" (defined at: ./index.rsh:186:42:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
        msg: null,
        who: 'Triumvir_support'
        });
      const v26208 = stdlib.Array_set(v25521, v26180, v25509);
      const v26209 = null;
      const v26210 = await txn1.getOutput('Triumvir_support', 'v26209', ctc4, v26209);
      if (v25145) {
        stdlib.protect(ctc4, await interact.out(v26083, v26210), {
          at: './index.rsh:213:10:application',
          fs: ['at ./index.rsh:213:10:application call to [unknown function] (defined at: ./index.rsh:213:10:function exp)', 'at ./index.rsh:194:12:application call to "k" (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:47:application call to [unknown function] (defined at: ./index.rsh:193:20:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
          msg: 'out',
          who: 'Triumvir_support'
          });
        }
      else {
        }
      
      null;
      switch (v26202[0]) {
        case 'Harvest': {
          const v26251 = v26202[1];
          const v26252 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '0')];
          const v26253 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '1')];
          const v26254 = v26251[stdlib.checkedBigNumberify('./index.rsh:174:19:array', stdlib.UInt_max, '2')];
          const v26255 = v25523.protoFee;
          const v26256 = v25523.lpFee;
          const v26257 = v25523.totFee;
          const v26258 = v25523.protoAddr;
          const v26259 = v25523.locked;
          const v26272 = {
            locked: v26259,
            lpFee: v26256,
            protoAddr: v26258,
            protoFee: v26255,
            totFee: v26257
            };
          const v26273 = undefined /* Remote */;
          const v26274 = await txn1.getOutput('internal', 'v26273', ctc19, v26273);
          const v26276 = v26274[stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0')];
          const v26285 = stdlib.add(v25528, v26276);
          const v26286 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:176:46:application', stdlib.UInt_max, '0'), v26276);
          stdlib.assert(v26286, {
            at: './index.rsh:176:46:application',
            fs: ['at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:174:39:function exp)', 'at ./index.rsh:170:45:application call to [unknown function] (defined at: ./index.rsh:170:45:function exp)', 'at ./index.rsh:196:59:application call to "evalCommand" (defined at: ./index.rsh:170:33:function exp)', 'at ./index.rsh:216:47:application call to [unknown function] (defined at: ./index.rsh:193:20:function exp)', 'at ./index.rsh:216:20:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)'],
            msg: 'remote bill check',
            who: 'Triumvir_support'
            });
          const v31878 = v26208;
          const v31880 = v25523;
          const v31881 = v25524;
          const v31883 = v26285;
          return;
          
          break;
          }
        case 'Kill': {
          const v26295 = v26202[1];
          return;
          
          break;
          }
        case 'NewInfo': {
          const v26304 = v26202[1];
          const v26305 = v26304.locked;
          const v26306 = v26304.lpFee;
          const v26307 = v26304.protoAddr;
          const v26308 = v26304.protoFee;
          const v26309 = v26304.totFee;
          const v26310 = {
            locked: v26305,
            lpFee: v26306,
            protoAddr: v26307,
            protoFee: v26308,
            totFee: v26309
            };
          const v31892 = v26208;
          const v31894 = v26310;
          const v31895 = v25524;
          const v31897 = v25528;
          return;
          
          break;
          }
        case 'NewTriumvirs': {
          const v26320 = v26202[1];
          const v31899 = v26208;
          const v31901 = v25523;
          const v31902 = v26320;
          const v31904 = v25528;
          return;
          
          break;
          }
        case 'NoOp': {
          const v26329 = v26202[1];
          const v31906 = v26208;
          const v31908 = v25523;
          const v31909 = v25524;
          const v31911 = v25528;
          return;
          
          break;
          }
        case 'Rewards': {
          const v26338 = v26202[1];
          const v26340 = (stdlib.le(await ctc.getBalance(), v25528) ? stdlib.checkedBigNumberify('./index.rsh:180:44:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v25528));
          const v26341 = stdlib.add(v26340, v25528);
          const v26345 = stdlib.sub(v26341, v26340);
          ;
          const v31913 = v26208;
          const v31915 = v25523;
          const v31916 = v25524;
          const v31918 = v26345;
          return;
          
          break;
          }
        }
      break;
      }
    case 'register0_24694': {
      const v26392 = v25771[1];
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
    Triumvir_propose0_24694: ctc14,
    Triumvir_support0_24694: ctc15,
    register0_24694: ctc13
    });
  
  
  const [v25509, v25521, v25523, v25524, v25528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc9, ctc10, ctc7, ctc1]);
  const v25581 = ctc.selfAddress();
  const v25583 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:204:17:application call to [unknown function] (defined at: ./index.rsh:204:17:function exp)', 'at ./index.rsh:134:19:application call to "runregister0_24694" (defined at: ./index.rsh:203:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v25584 = v25583[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v25593 = stdlib.ctcAddrEq(v25584, v25581);
  stdlib.assert(v25593, {
    at: './index.rsh:153:14:application',
    fs: ['at ./index.rsh:204:42:application call to "doRegister" (defined at: ./index.rsh:152:54:function exp)', 'at ./index.rsh:204:17:application call to [unknown function] (defined at: ./index.rsh:204:17:function exp)', 'at ./index.rsh:204:17:application call to [unknown function] (defined at: ./index.rsh:204:17:function exp)', 'at ./index.rsh:134:19:application call to "runregister0_24694" (defined at: ./index.rsh:203:9:function exp)', 'at ./index.rsh:134:19:application call to [unknown function] (defined at: ./index.rsh:134:19:function exp)'],
    msg: null,
    who: 'register'
    });
  const v25601 = ['register0_24694', v25583];
  
  const txn1 = await (ctc.sendrecv({
    args: [v25509, v25521, v25523, v25524, v25528, v25601],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn1;
      
      switch (v25771[0]) {
        case 'Triumvir_propose0_24694': {
          const v25774 = v25771[1];
          
          break;
          }
        case 'Triumvir_support0_24694': {
          const v26083 = v25771[1];
          
          break;
          }
        case 'register0_24694': {
          const v26392 = v25771[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          ;
          const v26664 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '0')];
          const v26665 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '1')];
          const v26666 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '2')];
          const v26667 = stdlib.ctcAddrEq(v26664, v25770);
          ;
          const v26668 = v25523.protoFee;
          const v26669 = v25523.lpFee;
          const v26670 = v25523.totFee;
          const v26671 = v25523.protoAddr;
          const v26672 = v25523.locked;
          const v26673 = {
            locked: v26672,
            lpFee: v26669,
            protoAddr: v26671,
            protoFee: v26668,
            totFee: v26670
            };
          const v26674 = await txn1.getOutput('register', 'v26673', ctc6, v26673);
          
          null;
          const v31976 = v25521;
          const v31978 = v25523;
          const v31979 = v25524;
          const v31981 = v25528;
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
  const {data: [v25771], secs: v25773, time: v25772, didSend: v25145, from: v25770 } = txn1;
  switch (v25771[0]) {
    case 'Triumvir_propose0_24694': {
      const v25774 = v25771[1];
      return;
      break;
      }
    case 'Triumvir_support0_24694': {
      const v26083 = v25771[1];
      return;
      break;
      }
    case 'register0_24694': {
      const v26392 = v25771[1];
      undefined /* setApiDetails */;
      ;
      const v26664 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '0')];
      const v26665 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '1')];
      const v26666 = v26392[stdlib.checkedBigNumberify('./index.rsh:203:9:spread', stdlib.UInt_max, '2')];
      const v26667 = stdlib.ctcAddrEq(v26664, v25770);
      stdlib.assert(v26667, {
        at: './index.rsh:153:14:application',
        fs: ['at ./index.rsh:206:33:application call to "doRegister" (defined at: ./index.rsh:152:54:function exp)', 'at ./index.rsh:206:20:application call to [unknown function] (defined at: ./index.rsh:206:20:function exp)'],
        msg: null,
        who: 'register'
        });
      const v26668 = v25523.protoFee;
      const v26669 = v25523.lpFee;
      const v26670 = v25523.totFee;
      const v26671 = v25523.protoAddr;
      const v26672 = v25523.locked;
      const v26673 = {
        locked: v26672,
        lpFee: v26669,
        protoAddr: v26671,
        protoFee: v26668,
        totFee: v26670
        };
      const v26674 = await txn1.getOutput('register', 'v26673', ctc6, v26673);
      if (v25145) {
        stdlib.protect(ctc4, await interact.out(v26392, v26674), {
          at: './index.rsh:203:10:application',
          fs: ['at ./index.rsh:203:10:application call to [unknown function] (defined at: ./index.rsh:203:10:function exp)', 'at ./index.rsh:155:12:application call to "k" (defined at: ./index.rsh:206:20:function exp)', 'at ./index.rsh:206:48:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)', 'at ./index.rsh:206:20:application call to [unknown function] (defined at: ./index.rsh:206:20:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      null;
      const v31976 = v25521;
      const v31978 = v25523;
      const v31979 = v25524;
      const v31981 = v25528;
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
  appApproval: `BiATAAEDYQIFowIgCGTMms7XBMWA36QO6JToygSEAzm9A2AJBCYHAQEAAQABAgEDAQQFYXBwSUQiNQAxGEEGyClkSSJbNQEhCFs1AjYaABdJQQC3IjUEIzUGSSEKDEAAL0khCwxAABQhCxJENhoBNf8qNP9QIQivUEIApyEKEkQ2GgE2GgJQNf8oNP9QQgCTSSEMDEAAHCEMEkQ2GgE2GgJQNhoDUDX/KzT/UIFQr1BCAHCB9rvQ5QESRDQBJBJEKmQoZFArZFAnBGRQJwVkUEk1AyENIQ5YNf80AyEPIRBYNAMlIQZYUDT/VykINP9XAQhQNP9XMQhQNP9XCSBQNP9XAAFQUDUHQgX1NhoCFzUENhoDNhoBF0khBAxABHwhBBJEJDQBEkQ0BEkiEkw0AhIRRCpkKGRQK2RQJwRkUCcFZFBJNQNJSklXAGE1/yUhBlg1/iENIQ5YNf0hDyEQWDX8gZ0EWzX7STUFNfqABKLqoRI0+lCwNPoiVUkjDEAC0UkhBAxAAIshBBJENPpXARk19zT3Ils19icGNPYWUAMxABJEgAgAAAAAAABoMTT9VykINP1XAQhQNP1XMQhQNP1XCSBQNP1XAAFQULA0/VcpCDT9VwEIUDT9VzEIUDT9VwkgUDT9VwABUDUHgAS6Xf0zNPYWUDT3VwgJUDT3VxEIULA0/zT+IjT9NPwyBjT7QgRKSDT6VwFpNfc09yJbSTX2JAxEIRGvNfUiNfQ0/CEHNPQLIQdYNfM09SJVQAAGIzXyQgAGIjXyQgAANPUoNPQWUDTyMQA08xIQTTX1NPQjCEk19CQMQP/DNPUiVUAABiI19EIABiM19EIAADT0RDT2IjT1STXzI1s08yJVTRNENP4lNPYLJVg18zT3VwhhATTzARJENP4iJTT2C1I0/1A0/iVJNPYLCCEGUlA18oAIAAAAAAAAZmGwKTUHgASiIOREMQBQNPYWUDTzULA08yJVSSQMQAB0SSESDEAAVUkhBQxAAD0hBRJENPNXASA18TIKYDIKeAk0+wk18LEisgE08LIII7IQNPGyB7M0/zTyIjT9NPwyBjTwNPsINPAJQgMqSDT/NPIiNP00/DIGNPtCAxlINPNXAWA18TT/NPIiNP008TIGNPtCAwFJIwxAAEtJIQQMQAAzSDTzVwE5NfE0/zTyIjTxVzgBNPFXCAhQNPFXGCBQNPFXAAhQNPFXEAhQNPwyBjT7QgLBSDT/NPIjNP00/DIGNPtCArBINPNXATA18ScGNPFXAAhQAzXvMgpgMgp4CRY17rEisgGBBrIQNPEiW7IYgARTzh8tsho08VcQILIaNP1XKQg0/VcBCFA0/VcxCFA0/VcJIFA0/VcAAVCyGjTxVxAgshyzMgpgMgp4CTTuFwkWtwA+VwQAUDXwgAgAAAAAAABmoTTwULA08Ek17yJbNe4iNO4SRDT/NPIiNP00/DIGNPs07ghCAgtINPpXAWE19zT3STX2IlVJJAxAACZJIRIMQAAYSSEFDEAACiEFEkQjNfVCAGhIIzX1QgBhSCM19UIAWkkjDEAATUkhBAxAAD9INPZXATlJNfQiWzXzNPQhCFs18jT0gRBbNfE08yEJDDTyIQkMEDTxNPI08wgSEDTxIQkMEDTxIg0QNfVCAA5IIzX1QgAHSCM19UIAADT1RCERrzX0IjXzNPwhBzTzCyEHWDXyNPQiVUAABiM18UIABiI18UIAADT0KDTzFlA08TEANPISEE019DTzIwhJNfMkDED/wzT0IlVAAAYiNfNCAAYjNfNCAAA080SACAAAAAAAAGTjsCk1B4AE7fYFAzEAUDT2ULA0/zT+IiUiNPRJNfIjWzTyIlVNC1I09lA0/iVJIjT0STXyI1s08iJVTQsIIQZSUCI0/TT8MgY0+0IAwiISRCI0ARJENARJIhJMNAISEURJNQU1/4AEMirrWTT/ULCBoI0GiAFNgGEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASTX+SUlQNP5QIoAJAAAAAAAAAAAZMgpQgAgAAAAAAAAABVCACAAAAAAAAAAeUDT/MgYiQgAANf81/jX9Nfw1+zX6Nfk0+0EAA0IARTT5NPpQNPxQNP1QNP8WUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwGB/QKBf1hnJwVLAYH8A4EpWGdIJDUBMgY1AkIAHDEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 549,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/duoswap-core/index.rsh:176:46:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v25503",
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
                "name": "v25503",
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
                    "name": "_Triumvir_propose0_24694",
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
                    "name": "_Triumvir_support0_24694",
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
                    "name": "_register0_24694",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v25771",
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
    "name": "_reach_oe_v25827",
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
    "name": "_reach_oe_v26209",
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
    "name": "_reach_oe_v26273",
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
    "name": "_reach_oe_v26673",
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
                    "name": "_Triumvir_propose0_24694",
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
                    "name": "_Triumvir_support0_24694",
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
                    "name": "_register0_24694",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v25771",
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
  Bytecode: `0x608060405260405162003300380380620033008339810160408190526200002691620005f3565b60008055436003556200003862000213565b7fe5d35ee1d5d0380ec4bb3893af49ad0266757898dc8e4981d86f4fcd3a980e5533836040516200006b929190620006dd565b60405180910390a162000081341560086200013e565b8051600490528051600060a0909101819052815160208084018051929092528351825182015283519151604090810192909252818401805193909352825160199101528151309101528051600560609091015251601e608090910152620000e76200026d565b81518151526020808301518183018051919091528051600090830181905260408086015183519091015291850151518151606001528051436080909101525160a00152620001358162000168565b505050620008ec565b81620001645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200019257600080805560018190556200018f9060029062000291565b50565b6200019c620002d0565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a00151608084015260036000554360015551620001e891839101620007f6565b604051602081830303815290604052600290805190602001906200020e9291906200033e565b505050565b604051806060016040528062000228620003cd565b8152602001620002376200046a565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b6040518060400160405280620002826200049a565b815260200162000268620004af565b5080546200029f90620008b0565b6000825580601f10620002b0575050565b601f0160209004906000526020600020908101906200018f919062000533565b6040518060a00160405280620002e5620003cd565b8152602001620002f46200046a565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001620003316200054a565b8152602001600081525090565b8280546200034c90620008b0565b90600052602060002090601f016020900481019282620003705760008555620003bb565b82601f106200038b57805160ff1916838001178555620003bb565b82800160010185558215620003bb579182015b82811115620003bb5782518255916020019190600101906200039e565b50620003c992915062000533565b5090565b6040805160e0810190915280600081526040805160608101825260008082526020828101829052928201529101908152602001600015158152602001620004476040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b8152602001620004566200054a565b815260006020820181905260409091015290565b60405180606001604052806003905b62000483620003cd565b815260200190600190039081620004795790505090565b604051806020016040528062000268620003cd565b6040518060c00160405280620004c46200046a565b8152602001600015158152602001620005106040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81526020016200051f6200054a565b815260200160008152602001600081525090565b5b80821115620003c9576000815560010162000534565b60405180606001604052806003906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005a357620005a362000568565b60405290565b604051602081016001600160401b0381118282101715620005a357620005a362000568565b604051606081016001600160401b0381118282101715620005a357620005a362000568565b600081830360808112156200060757600080fd5b620006116200057e565b8351815260206060601f19840112156200062a57600080fd5b62000634620005a9565b925085603f8601126200064657600080fd5b62000650620005ce565b8060808701888111156200066357600080fd5b8388015b81811015620006975780516001600160a01b0381168114620006895760008081fd5b845292840192840162000667565b50508452508101919091529392505050565b8060005b6003811015620006d75781516001600160a01b0316845260209384019390910190600101620006ad565b50505050565b600060a08201905060018060a01b03841682528251602083015260208301516200070c604084018251620006a9565b509392505050565b8051600681106200073557634e487b7160e01b600052602160045260246000fd5b8083525060208101516200076c602084018280516001600160a01b0390811683526020808301519084015260409182015116910152565b506040810151801515608084015250606081810151805160a0850152602081015160c0850152604081015160e0850152908101516001600160a01b031661010084015260808101511515610120840152506080810151620007d2610140840182620006a9565b5060a081015115156101a083015260c001516001600160a01b03166101c090910152565b60006108a0820190506200080c82845162000714565b6020808401516101e080850160005b600381101562000843576200083282855162000714565b92840192908201906001016200081b565b5050505060408481015180511515610780860152918201516107a08501528101516001600160a01b03166107c08401526060808201516107e08501526080909101516108008401528301516200089e610820840182620006a9565b50608083015161088083015292915050565b600181811c90821680620008c557607f821691505b602082108103620008e657634e487b7160e01b600052602260045260246000fd5b50919050565b612a0480620008fc6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461010b578063ab53f2c614610120578063b17038af14610143578063cde26dbc1461015657005b80631e93b0f1146100825780633b02a717146100a65780634012e02e146100c65780635f0a3358146100e857005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100b96100b4366004611e86565b610169565b60405161009d9190611f08565b3480156100d257600080fd5b506100db6101e3565b60405161009d9190612021565b6100fb6100f6366004612200565b610320565b604051901515815260200161009d565b34801561011757600080fd5b50600154610093565b34801561012c57600080fd5b50610135610380565b60405161009d92919061225a565b6100fb610151366004612294565b61041d565b6100806101643660046122b1565b610471565b610171611765565b61017961179f565b6101816117c3565b6101896117dd565b60408051606080820183526001600160a01b038a8116835260208084018b905290891683850152908401919091526002835281518082019092528282528301526101d38284610495565b50506040015190505b9392505050565b6101eb611812565b60036000540361031157600060028054610204906122ca565b80601f0160208091040260200160405190810160405280929190818152602001828054610230906122ca565b801561027d5780601f106102525761010080835404028352916020019161027d565b820191906000526020600020905b81548152906001019060200180831161026057829003601f168201915b505050505080602001905181019061029591906124e6565b905061029f61183f565b604080830180516060908101518451528151602090810151855182015282516080908101518651860152835185015186516001600160a01b0390911690840152925151855190151593019290925284015181840180519190915293810151845190910152905182519091015251919050565b61031d600060076115ee565b90565b600061032a61179f565b6103326117c3565b61033a6117dd565b6040805180820182528781526020808201889052838301919091526001835281518082019092528282528301526103718284610495565b50506020015190505b92915050565b600060606000546002808054610395906122ca565b80601f01602080910402602001604051908101604052809291908181526020018280546103c1906122ca565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b50505050509050915091509091565b600061042761179f565b61042f6117c3565b6104376117dd565b6040805160208082018352878252838101919091526000835281518082019092528282528301526104688284610495565b50505192915050565b61047961179f565b61049161048b368490038401846125e9565b82610495565b5050565b6104a560036000541460156115ee565b81516104c09015806104b957508251600154145b60166115ee565b6000808055600280546104d2906122ca565b80601f01602080910402602001604051908101604052809291908181526020018280546104fe906122ca565b801561054b5780601f106105205761010080835404028352916020019161054b565b820191906000526020600020905b81548152906001019060200180831161052e57829003601f168201915b505050505080602001905181019061056391906124e6565b905061056d61185f565b7f02a3151c2c7d6683ec4894b1ffaf1065f6b21fc9e9e2c11e92c7386ba6c727dd338560405161059e929190612704565b60405180910390a160006020850151515160028111156105c0576105c0611f42565b036109db5760208085015151015181526105dc341560096115ee565b60008151515160058111156105f3576105f3611f42565b03610604576001602082015261074f565b600181515151600581111561061b5761061b611f42565b0361062c576001602082015261074f565b600281515151600581111561064357610643611f42565b036106db57805151606001516040820181905251606411610665576000610672565b6064816040015160200151105b61067d57600061069f565b6040810151805160209091015161069491906127c3565b816040015160400151145b6106aa5760006106b7565b6064816040015160400151105b6106c25760006106cf565b6000816040015160400151115b1515602082015261074f565b60038151515160058111156106f2576106f2611f42565b03610703576001602082015261074f565b600481515151600581111561071a5761071a611f42565b0361072b576001602082015261074f565b600581515151600581111561074257610742611f42565b0361074f57600160208201525b61075e8160200151600a6115ee565b6060810180516000908190528151602001819052905160a08301525b60038110156108645782606001518160038110610799576107996127db565b60200201516001600160a01b031660c0830152600060a08301515160018111156107c5576107c5611f42565b036107d657600160e08301526107fc565b600160a08301515160018111156107ef576107ef611f42565b036107fc57600060e08301525b61010082018051600190525160400181905260e082015161081e576000610838565b8160c001516001600160a01b0316336001600160a01b0316145b610846578160a0015161084d565b8161010001515b60a08301528061085c816127f1565b91505061077a565b5060a08101516080820181905251600090600181111561088657610886611f42565b036108985760006101208201526108bf565b600160808201515160018111156108b1576108b1611f42565b036108bf5760016101208201525b6108cf816101200151600b6115ee565b604051600081527ff3e5bcfffaeb1ea0a8c68e3d15f94636ba091c8fefc79e403c38f7ba3199a3349060200160405180910390a1600083528051516040517f619fcaef70922499f1342fa8e0204004626db66c166071a16d11aa1d01be00dc9161093b9133919061280a565b60405180910390a161094b6119d6565b82518151526020830151610990906001608085015151600181111561097257610972611f42565b1461097e576000610988565b8360800151604001515b845151611614565b602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109d581611688565b506115e8565b60016020850151515160028111156109f5576109f5611f42565b036114555760208401515160400151610140820152610a163415600c6115ee565b610a2d60038261014001516000015110600d6115ee565b61016081018051600090819052815160200181905290516101a08301525b6003811015610b3e5782606001518160038110610a6a57610a6a6127db565b60200201516001600160a01b03166101c083015260006101a0830151516001811115610a9857610a98611f42565b03610aaa5760016101e0830152610ad2565b60016101a0830151516001811115610ac457610ac4611f42565b03610ad25760006101e08301525b6102008201805160019052516040018190526101e0820151610af5576000610b10565b816101c001516001600160a01b0316336001600160a01b0316145b610b1f57816101a00151610b26565b8161020001515b6101a083015280610b36816127f1565b915050610a4b565b506101a08101516101808201819052516000906001811115610b6257610b62611f42565b03610b74576000610220820152610b9c565b6001610180820151516001811115610b8e57610b8e611f42565b03610b9c5760016102208201525b610bac816102200151600e6115ee565b610bfd6001610180830151516001811115610bc957610bc9611f42565b14610bd5576000610be0565b816101800151604001515b6101408301515114610bf3576001610bf6565b60005b600f6115ee565b610c8382602001518261014001516000015160038110610c1f57610c1f6127db565b6020020151604051602001610c349190612828565b60408051601f198184030181529082905280516020918201206101408501518201519092610c629201612828565b6040516020818303038152906040528051906020012060001c1460106115ee565b6020820151610140820151518351610c9c929190611614565b610240820152604051600081527f73a91fe87fa3e46365d39fd994b2b917c35799276061ebc816007254586a7da59060200160405180910390a1600060208085019190915261014082015151908301517f69fa7d903a904d97741865ee6c7359fd00d734b9ed61e28bcb6e1a6b8a46145b9133918160038110610d2157610d216127db565b6020020151604051610d3593929190612837565b60405180910390a1600060208301516101408301515160038110610d5b57610d5b6127db565b6020020151516005811115610d7257610d72611f42565b0361100d5760208201516101408201515160038110610d9357610d936127db565b6020908102919091015181015161026083015260408084018051606090810151610280860180519190915282518501518151909501949094528151608090810151855185015282519093015184516001600160a01b0390911691015251519151911515910152610e04600047612864565b6103c08201526102608101516040908101516102808301519151600092632d150b7560e21b92610e399290919060240161287b565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080836102600151600001516001600160a01b0316600084604051610e949190612898565b60006040518083038185875af1925050503d8060008114610ed1576040519150601f19603f3d011682016040523d82523d6000602084013e610ed6565b606091505b5091509150610ee78282601161172a565b506103c0840151610ef89047612864565b6102a0850151528051610f1490820160209081019083016128b4565b6102a08501805160200191909152516102c085018190526040517fbb3944942dc7e2bba45d6b97ca3f817bbc431be189e26f40fc37f3b5f7ace69a91610f7d91815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a16102c084015151610f98901560126115ee565b610fa06119d6565b855181515261024085015160208083018051929092528151600091015260408088015182519091015260608088015182519091015251436080918201526102c08601515190870151610ff291906127c3565b602082015160a0015261100481611688565b505050506115e8565b60016020830151610140830151516003811061102b5761102b6127db565b602002015151600581111561104257611042611f42565b0361109f5761104f6119d6565b8251815152610240820151602080830180519290925281516001910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109d581611688565b6002602083015161014083015151600381106110bd576110bd6127db565b60200201515160058111156110d4576110d4611f42565b036111b357602082015161014082015151600381106110f5576110f56127db565b602090810291909101516060908101516102e08401818152608091820151610300860180519115159091528151850151815190950194909452805183015184516001600160a01b039091166040918201528151518551909401939093525190910151915101526111636119d6565b8251815152610240820151602080830180519290925281516000910152610300830151815160400152606080850151825190910152805143608091820152840151905160a001526109d581611688565b6003602083015161014083015151600381106111d1576111d16127db565b60200201515160058111156111e8576111e8611f42565b036112705760208201516101408201515160038110611209576112096127db565b6020020151608001516103208201526112206119d6565b8251815152610240820151602080830180519290925281516000910152604080850151825190910152610320830151815160600152805143608091820152840151905160a001526109d581611688565b60046020830151610140830151516003811061128e5761128e6127db565b60200201515160058111156112a5576112a5611f42565b03611302576112b26119d6565b8251815152610240820151602080830180519290925281516000910152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109d581611688565b600560208301516101408301515160038110611320576113206127db565b602002015151600581111561133757611337611f42565b036114505760208201516101408201515160038110611358576113586127db565b602002015160c001516001600160a01b031661034082015260808201514790811061139157608083015161138c9082612864565b611394565b60005b61036083018190526103408301516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156113d7573d6000803e3d6000fd5b506113e06119d6565b835181515261024083015160208083018051929092528151600091015260408086015182519091015260608086015182519091015251436080918201526103608401519085015161143190826127c3565b61143b9190612864565b602082015160a0015261144d81611688565b50505b6115e8565b600260208501515151600281111561146f5761146f611f42565b036115e85760208401515160600151610380820152611490341560136115ee565b610380810151516114ad906001600160a01b0316331460146115ee565b604080830180516060908101516103a08501805191909152825160209081015182519091015282516080908101518251860152835185015182516001600160a01b0390911693019290925291515182519015159101525190517fc1ad5e329cc7308212b6de3ac8c925b8263ede79e1644b3fbd26c92f448c92ae9161153191611f08565b60405180910390a16103a0810151604080850191909152610380820151805160208201519183015192517ffe325ddb46ceb5c5c02d1b18bc5e927e25bc0ec2cf49203c2ae8c0c355b290cf93611587939161290d565b60405180910390a16115976119d6565b825181515260208084015181830180519190915280516000920191909152604080850151825190910152606080850151825190910152805143608091820152840151905160a001526109d581611688565b50505050565b816104915760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61161c6119f6565b60005b60038110156116685784816003811061163a5761163a6127db565b6020020151828260038110611651576116516127db565b602002015280611660816127f1565b91505061161f565b508181846003811061167c5761167c6127db565b60200201529392505050565b806020015160200151156116af57600080805560018190556116ac90600290611a23565b50565b6116b7611a5d565b8151518152602080830180515182840152805160409081015181850152815160609081015190850152905160a001516080840152600360005543600155516117019183910161293d565b60405160208183030381529060405260029080519060200190611725929190611a97565b505050565b606083156117395750816101dc565b8251156117495782518084602001fd5b60405163100960cb60e01b81526004810183905260240161160b565b6040518060a0016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b60408051606081018252600080825260208201529081016117be611765565b905290565b6040518060400160405280600081526020016117be611b1b565b604080516080810190915280600081526020016117f8611b2e565b8152602001611805611b41565b81526020016117be611b5b565b6040518060600160405280611825611b8b565b81526020016118326119f6565b81526020016117be611765565b6040518060400160405280611852611765565b81526020016117be611812565b604051806103e00160405280611873611b2e565b815260006020820152604001611887611765565b8152602001611894611ba9565b81526020016118a1611ba9565b81526020016118ae611ba9565b815260006020820181905260408201526060016118c9611ba9565b8152600060208201526040016118dd611b41565b81526020016118ea611ba9565b81526020016118f7611ba9565b8152602001611904611ba9565b8152600060208201819052604082015260600161191f611ba9565b8152600060208201526040016119336119f6565b81526040805160608101825260008082526020828101829052928201529101908152602001611960611765565b815260200161196d611bcc565b815260200161197a611bcc565b8152602001611987611765565b8152602001611994611be6565b81526020016119a1611b8b565b815260006020820181905260408201526060016119bc611b5b565b81526020016119c9611765565b8152602001600081525090565b60405180604001604052806119e9611b2e565b81526020016117be611c20565b60405180606001604052806003905b611a0d611c68565b815260200190600190039081611a055790505090565b508054611a2f906122ca565b6000825580601f10611a3f575050565b601f0160209004906000526020600020908101906116ac9190611cb7565b6040518060a00160405280611a70611c68565b8152602001611a7d6119f6565b8152602001611a8a611be6565b81526020016119c9611b8b565b828054611aa3906122ca565b90600052602060002090601f016020900481019282611ac55760008555611b0b565b82601f10611ade57805160ff1916838001178555611b0b565b82800160010185558215611b0b579182015b82811115611b0b578251825591602001919060010190611af0565b50611b17929150611cb7565b5090565b60405180602001604052806117be6117dd565b60405180602001604052806117be611c68565b6040518060400160405280600081526020016117be611c68565b604051806060016040528060006001600160a01b03168152602001611b7e611ccc565b8152600060209091015290565b60405180606001604052806003906020820280368337509192915050565b60408051606081019091528060005b815260006020820181905260409091015290565b6040518060400160405280600081526020016117be611cdf565b6040518060a001604052806000151581526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060c00160405280611c336119f6565b815260006020820152604001611c47611be6565b8152602001611c54611b8b565b815260200160008152602001600081525090565b6040805160e081019091528060008152604080516060810182526000808252602082810182905292820152910190815260006020820152604001611caa611765565b8152602001611bb8611b8b565b5b80821115611b175760008155600101611cb8565b6040805160608101909152806000611bb8565b60408051608081018252600091810182815260608201929092529081906119c9565b6001600160a01b03811681146116ac57600080fd5b8035611d2181611d01565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611d5f57611d5f611d26565b60405290565b60405160a0810167ffffffffffffffff81118282101715611d5f57611d5f611d26565b60405160e0810167ffffffffffffffff81118282101715611d5f57611d5f611d26565b6040805190810167ffffffffffffffff81118282101715611d5f57611d5f611d26565b6040516020810167ffffffffffffffff81118282101715611d5f57611d5f611d26565b6040516080810167ffffffffffffffff81118282101715611d5f57611d5f611d26565b80151581146116ac57600080fd5b8035611d2181611e14565b600060608284031215611e3f57600080fd5b611e47611d3c565b9050813560028110611e5857600080fd5b81526020820135611e6881611e14565b60208201526040820135611e7b81611d01565b604082015292915050565b600080600060a08486031215611e9b57600080fd5b8335611ea681611d01565b9250611eb58560208601611e2d565b91506080840135611ec581611d01565b809150509250925092565b8051825260208082015190830152604080820151908301526060808201516001600160a01b0316908301526080908101511515910152565b60a0810161037a8284611ed0565b8060005b60038110156115e85781516001600160a01b0316845260209384019390910190600101611f1a565b634e487b7160e01b600052602160045260246000fd5b805160068110611f6a57611f6a611f42565b825260208181015180516001600160a01b0390811683860152918101516040808601919091529081015190911660608401528101518015156080840152506060810151611fba60a0840182611ed0565b506080810151611fce610140840182611f16565b5060a081015115156101a083015260c001516001600160a01b03166101c090910152565b8060005b60038110156115e85761200a848351611f58565b6101e0939093019260209190910190600101611ff6565b60006106a082019050612035828451611f16565b60208301516120476060840182611ff2565b50604083015161205b610600840182611ed0565b5092915050565b600681106116ac57600080fd5b600060a0828403121561208157600080fd5b612089611d65565b905081358152602082013560208201526040820135604082015260608201356120b181611d01565b606082015260808201356120c481611e14565b608082015292915050565b600082601f8301126120e057600080fd5b6120e8611d3c565b8060608401858111156120fa57600080fd5b845b8181101561211d57803561210f81611d01565b8452602093840193016120fc565b509095945050505050565b60008183036101e081121561213c57600080fd5b612144611d88565b9150823561215181612062565b82526060601f198201121561216557600080fd5b5061216e611d3c565b602083013561217c81611d01565b815260408301356020820152606083013561219681611d01565b604082015260208201526121ac60808301611e22565b60408201526121be8360a0840161206f565b60608201526121d18361014084016120cf565b60808201526121e36101a08301611e22565b60a08201526121f56101c08301611d16565b60c082015292915050565b600080610200838503121561221457600080fd5b823591506122258460208501612128565b90509250929050565b60005b83811015612249578181015183820152602001612231565b838111156115e85750506000910152565b828152604060208201526000825180604084015261227f81606085016020870161222e565b601f01601f1916919091016060019392505050565b60006101e082840312156122a757600080fd5b6101dc8383612128565b60006104c082840312156122c457600080fd5b50919050565b600181811c908216806122de57607f821691505b6020821081036122c457634e487b7160e01b600052602260045260246000fd5b8051611d2181611d01565b8051611d2181611e14565b600060a0828403121561232657600080fd5b61232e611d65565b9050815181526020820151602082015260408201516040820152606082015161235681611d01565b606082015260808201516120c481611e14565b600082601f83011261237a57600080fd5b612382611d3c565b80606084018581111561239457600080fd5b845b8181101561211d5780516123a981611d01565b845260209384019301612396565b60008183036101e08112156123cb57600080fd5b6123d3611d88565b915082516123e081612062565b82526060601f19820112156123f457600080fd5b506123fd611d3c565b602083015161240b81611d01565b815260408301516020820152606083015161242581611d01565b6040820152602082015261243b60808301612309565b604082015261244d8360a08401612314565b6060820152612460836101408401612369565b60808201526124726101a08301612309565b60a08201526121f56101c083016122fe565b600060a0828403121561249657600080fd5b61249e611d65565b905081516124ab81611e14565b81526020828101519082015260408201516124c581611d01565b80604083015250606082015160608201526080820151608082015292915050565b60006108a082840312156124f957600080fd5b612501611d65565b61250b84846123b7565b81526101e0846101ff85011261252057600080fd5b612528611d3c565b8061078086018781111561253b57600080fd5b8387015b818110156125605761255189826123b7565b8452602090930192840161253f565b508160208601526125718882612484565b604086015250505050612588846108208501612369565b60608201526108809290920151608083015250919050565b600060a082840312156125b257600080fd5b6125ba611d3c565b905081356125c781611d01565b81526125d68360208401611e2d565b60208201526080820135611e7b81611d01565b60008183036104c08112156125fd57600080fd5b612605611dab565b833581526104a0601f198301121561261c57600080fd5b612624611dce565b61262c611df1565b60208601356003811061263e57600080fd5b81526101e0603f198501121561265357600080fd5b61265b611dce565b6126688860408901612128565b8152602082015261020061021f198501121561268357600080fd5b61268b611dab565b935061022086013584526126a3876102408801612128565b60208501528360408201526126bc8761042088016125a0565b606082015281526020820152949350505050565b8051600281106126e2576126e2611f42565b82526020818101511515908301526040908101516001600160a01b0316910152565b6001600160a01b03838116825282516020808401919091528301515180516104e084019291906003811061273a5761273a611f42565b806040860152506020810151612754606086018251611f58565b506040810151805161024086015260200151612774610260860182611f58565b50606001518051821661044085015260208101516127966104608601826126d0565b50816040820151166104c085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156127d6576127d66127ad565b500190565b634e487b7160e01b600052603260045260246000fd5b600060018201612803576128036127ad565b5060010190565b6001600160a01b038316815261020081016101dc6020830184611f58565b6101e0810161037a8284611f58565b6001600160a01b038416815260208101839052610220810161285c6040830184611f58565b949350505050565b600082821015612876576128766127ad565b500390565b6001600160a01b038316815260c081016101dc6020830184611ed0565b600082516128aa81846020870161222e565b9190910192915050565b600081830360608112156128c757600080fd5b6128cf611dab565b60408212156128dd57600080fd5b6128e5611dab565b9150835182526020840151602083015281815260408401516020820152809250505092915050565b6001600160a01b03848116825260a082019061292c60208401866126d0565b808416608084015250949350505050565b60006108a082019050612951828451611f58565b60208301516129646101e0840182611ff2565b506040838101518051151561078085015260208101516107a0850152908101516001600160a01b03166107c08401526060808201516107e08501526080909101516108008401528301516129bc610820840182611f16565b5060808301516108808301529291505056fea2646970667358221220a45473b4ba16409c0204701781ac75bd8b410527795fc507fb1ef3dd2bdbbe6464736f6c634300080d0033`,
  BytecodeLen: 13056,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:219:11:after expr stmt semicolon',
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
